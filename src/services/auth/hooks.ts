import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as api from "./api";
import { useRouter, useSearchParams } from "next/navigation";

// Re-export types
export type {
  LoginCredentials,
  LoginResponse,
  RegisterCredentials,
  RegisterResponse,
} from "./api";

export const useLogin = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: api.login,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
      // Check for redirect parameter, otherwise go to dashboard
      const redirectPath = searchParams.get("redirect") || "/dashboard";
      router.push(redirectPath);
    },
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: api.register,
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: api.logout,
    onSuccess: () => {
      // Clear all cached queries
      queryClient.clear();
      router.push("/auth/login");
    },
    onError: () => {
      // Even on error, clear cookies and redirect
      // (cookies are already cleared in api.logout)
      queryClient.clear();
      router.push("/auth/login");
    },
  });
};

export const useMe = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: api.getMe,
    retry: false,
  });
};
