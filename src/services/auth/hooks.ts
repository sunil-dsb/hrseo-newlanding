import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as api from "./api";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: api.login,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
      // Redirect or other actions can be added here
      router.push("/"); // Example redirect
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
      queryClient.clear();
      router.push("/login");
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
