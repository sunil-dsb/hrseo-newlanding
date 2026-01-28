"use client";

import { useMe, useLogout } from "@/services/auth/hooks";
import { UserData } from "@/lib/auth-client";
import { useCallback } from "react";

/**
 * Custom hook to access user data from API (similar to better-auth)
 */
export function useUser() {
  const { data: userData, error, isLoading, refetch } = useMe();
  const { mutate: logoutMutation } = useLogout();

  const user =
    (userData?.user as UserData) || (userData as unknown as UserData) || null;
  const isLoggedIn = !!user && !error;

  const logout = useCallback(() => {
    logoutMutation();
  }, [logoutMutation]);

  return {
    user,
    isLoggedIn,
    isLoading,
    logout,
    refresh: refetch,
  };
}

export default useUser;
