import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { login } from "../apis/auth";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../apis/client";
import type { LoginRequest, LoginResponse, ApiMessage } from "../types/Auth.types";

export function useLogin(onSuccess?: (data: LoginResponse) => void) {
  return useMutation<LoginResponse, AxiosError<ApiMessage>, LoginRequest>({
    mutationFn: async (body) => {
      const data = await login(body);
      if (!data.accessToken) {
        throw new Error("로그인 처리 중 오류가 발생했습니다.");
      }
      return data;
    },
    onSuccess: (data) => {
      localStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken);
      if (data.refreshToken) {
        localStorage.setItem(REFRESH_TOKEN_KEY, data.refreshToken);
      }
      onSuccess?.(data);
    },
  });
}
