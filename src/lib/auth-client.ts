"use client";

import Cookies from "js-cookie";

// Cookie configuration
export const AUTH_COOKIE_NAME = "auth_token";
export const ACCESS_TOKEN_NAME = "access_token";
export const REFRESH_TOKEN_NAME = "refresh_token";
export const USER_COOKIE_NAME = "user_data";
export const COOKIE_MAX_AGE = 7; // 7 days for js-cookie (uses days)

export interface UserData {
  id: string;
  email: string;
  name?: string;
  [key: string]: any;
}
