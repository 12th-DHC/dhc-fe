import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { resetLog, type ResetLogRequest } from "../apis/reset";
import type { ApiMessage } from "../types/Auth.types";

export function useResetLog(onSuccess?: (data: ApiMessage) => void) {
  return useMutation<ApiMessage, AxiosError<ApiMessage>, ResetLogRequest>({
    mutationFn: resetLog,
    onSuccess,
  });
}
