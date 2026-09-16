import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { changePassword } from "../apis/auth";
import type { ApiMessage } from "../types/Auth.types";

type ChangePasswordRequest = Parameters<typeof changePassword>[0];

export function useChangePassword(onSuccess?: (data: ApiMessage) => void) {
  return useMutation<ApiMessage, AxiosError<ApiMessage>, ChangePasswordRequest>({
    mutationFn: changePassword,
    onSuccess,
  });
}
