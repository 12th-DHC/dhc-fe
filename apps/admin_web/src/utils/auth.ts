import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../apis/client";

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);

export const isAuthenticated = () => Boolean(getAccessToken());

export const clearTokens = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
};
