import type { AxiosError } from "axios";
import type { ApiMessage } from "../types/Auth.types";

export function getErrorMessage(error: AxiosError<ApiMessage> | Error | null): string | null {
  if (!error) return null;

  const axiosError = error as AxiosError<ApiMessage>;

  if (axiosError.response?.data?.message) {
    return axiosError.response.data.message;
  }

  if (!axiosError.response) {
    return "서버에 연결할 수 없습니다. 네트워크 상태를 확인해주세요.";
  }

  return "오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
}
