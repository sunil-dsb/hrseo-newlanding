import axios, { type AxiosError, type InternalAxiosRequestConfig } from "axios";
import { AUTH_ENDPOINTS } from "./auth/endpoints";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Flag to prevent multiple refresh attempts
let isRefreshing = false;
// Queue of requests to retry after token refresh
let failedQueue: Array<{
  resolve: (value?: unknown) => void;
  reject: (reason?: unknown) => void;
}> = [];

const processQueue = (error: Error | null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve();
    }
  });
  failedQueue = [];
};

// Response interceptor to handle token refresh
axiosClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    // If it's not a 401 error or it's already a retry, reject
    if (
      error.response?.status !== 401 ||
      originalRequest._retry ||
      // Don't retry for auth endpoints to avoid infinite loops
      originalRequest.url === AUTH_ENDPOINTS.LOGIN ||
      originalRequest.url === AUTH_ENDPOINTS.REGISTER ||
      originalRequest.url === AUTH_ENDPOINTS.REFRESH_TOKEN
    ) {
      return Promise.reject(error);
    }

    // If already refreshing, queue this request
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      })
        .then(() => axiosClient(originalRequest))
        .catch((err) => Promise.reject(err));
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      // Call the refresh token endpoint
      await axiosClient.get(AUTH_ENDPOINTS.REFRESH_TOKEN);

      // Process queued requests
      processQueue(null);

      // Retry the original request
      return axiosClient(originalRequest);
    } catch (refreshError) {
      // Token refresh failed - user needs to re-login
      processQueue(refreshError as Error);

      // Clear any client-side state and redirect to login
      if (typeof window !== "undefined") {
        // Redirect to login page
        const locale = window.location.pathname.split("/")[1] || "en";
        const currentPath = window.location.pathname;
        window.location.href = `/${locale}/auth/login?redirect=${encodeURIComponent(currentPath)}`;
      }

      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  },
);

export default axiosClient;
