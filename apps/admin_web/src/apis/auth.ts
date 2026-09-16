import { client } from "./client";
import type { LoginRequest, LoginResponse } from "../types/Auth.types";

export const login = (body: LoginRequest): Promise<LoginResponse> =>
  client.post<LoginResponse>("/auth/admin/login", body).then((res) => res.data);

export const logout = (): Promise<void> =>
  client.post("/admin/logout").then(() => undefined);
