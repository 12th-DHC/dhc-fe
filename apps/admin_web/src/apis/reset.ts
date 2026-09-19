import { client } from "./client";
import type { ApiMessage } from "../types/Auth.types";

export interface ResetLogRequest {
  adminPassword: string;
}

export const resetLog = (body: ResetLogRequest): Promise<ApiMessage> =>
  client.post<ApiMessage>("/admin/reset", body).then((res) => res.data);
