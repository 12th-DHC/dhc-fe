import axios, { AxiosError } from "axios";

const BASE_URL = "http://localhost:8080"; // url 뒤에 / 붙이지 말 것
const ACCESS_TOKEN_KEY = "dhc-accessToken";
const REFRESH_TOKEN_KEY = "dhc-refreshToken";

export const setAuthTokens = (
    accessToken: string,
    refreshToken: string
) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
}

export const deleteAuthTokens = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
}

export const certificatedApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const getToken = () => {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
}

certificatedApi.interceptors.request.use((config) => {
  const accessToken = getToken();

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

certificatedApi.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status !== 401) {
            return Promise.reject(error);
        }

        // 재시도 1회 초과 실행 시 리턴 (무한 retry 방지)
        if (error.config._retry) {
            return Promise.reject(error);
        }

        // 재시도 표시
        error.config._retry = true;

        try {
            const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

            const response = await api.post(
                "/auth/refresh",
                { "refreshToken": refreshToken }
            );

            const newAccessToken = response.data.accessToken;

            localStorage.setItem(ACCESS_TOKEN_KEY, newAccessToken);
            error.config.headers.Authorization = `Bearer ${newAccessToken}`;;

            return certificatedApi(error.config);
        } catch (refreshError) {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");

            return Promise.reject(refreshError);
        }
    }
)

export const handleApiError = (error: any): never => {
  if (error instanceof AxiosError) {
    throw new Error(
      `API 에러: ${error.response?.data.message || error.message}`
    );
  }
  throw error;
};
