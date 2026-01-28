import { cookies } from "next/headers";

// Cookie configuration
export const AUTH_COOKIE_NAME = "auth_token";
export const USER_COOKIE_NAME = "user_data";
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export interface UserData {
  id: string;
  email: string;
  name?: string;
  [key: string]: any;
}

/**
 * Get authentication token from cookies (Server-side)
 */
export async function getAuthToken(): Promise<string | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME);
  return token?.value || null;
}

/**
 * Get user data from cookies (Server-side)
 */
export async function getUserFromCookies(): Promise<UserData | null> {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get(USER_COOKIE_NAME);

  if (!userCookie?.value) {
    return null;
  }

  try {
    return JSON.parse(decodeURIComponent(userCookie.value));
  } catch {
    return null;
  }
}

/**
 * Check if user is authenticated (Server-side)
 */
export async function isAuthenticated(): Promise<boolean> {
  const token = await getAuthToken();
  return !!token;
}
