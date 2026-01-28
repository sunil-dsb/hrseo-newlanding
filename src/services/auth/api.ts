import axiosClient from "../axiosClient";
import { AUTH_ENDPOINTS } from "./endpoints";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
  avatarUrl?: string;
}

export interface LoginResponse {
  success: boolean;
  message?: string;
  data?: {
    userId: string;
    name: string;
    email: string;
    avatarUrl?: string;
    access_token: string;
  };
}

export interface RegisterResponse {
  success: boolean;
  message?: string;
}

export const login = async (
  credentials: LoginCredentials,
): Promise<LoginResponse> => {
  const response = await axiosClient.post<LoginResponse>(
    AUTH_ENDPOINTS.LOGIN,
    credentials,
  );
  return response.data;
};

export const register = async (
  data: RegisterCredentials,
): Promise<RegisterResponse> => {
  const response = await axiosClient.post<RegisterResponse>(
    AUTH_ENDPOINTS.REGISTER,
    data,
  );
  return response.data;
};

export const logout = async () => {
  const response = await axiosClient.get(AUTH_ENDPOINTS.LOGOUT);
  return response.data;
};

export const refreshToken = async () => {
  const response = await axiosClient.get(AUTH_ENDPOINTS.REFRESH_TOKEN);
  return response.data;
};

export const getMe = async () => {
  const response = await axiosClient.get(AUTH_ENDPOINTS.ME);
  return response.data;
};
