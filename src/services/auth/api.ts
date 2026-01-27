import axiosClient from "../axiosClient";
import { AUTH_ENDPOINTS } from "./endpoints";

export const login = async (credentials: any) => {
  const response = await axiosClient.post(AUTH_ENDPOINTS.LOGIN, credentials);
  return response.data;
};

export const register = async (data: any) => {
  const response = await axiosClient.post(AUTH_ENDPOINTS.REGISTER, data);
  return response.data;
};

export const logout = async () => {
  const response = await axiosClient.post(AUTH_ENDPOINTS.LOGOUT);
  return response.data;
};

export const getMe = async () => {
  const response = await axiosClient.get(AUTH_ENDPOINTS.ME);
  return response.data;
};
