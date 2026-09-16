export interface LoginRequest {
  adminUsername: string;
  adminPassword: string;
}

export interface LoginResponse {
  status: number;
  message: string;
  accessToken: string;
  refreshToken?: string;
}

export interface ApiMessage {
  status: number;
  message: string;
}
