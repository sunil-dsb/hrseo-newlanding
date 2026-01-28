import { AxiosError } from "axios";

/**
 * Extracts a user-friendly error message from various error types
 */
export function getErrorMessage(error: unknown): string {
  // Handle Axios errors
  if (error instanceof AxiosError) {
    // Try to get the message from the response body
    if (error.response?.data?.message) {
      return error.response.data.message;
    }
    // Try to get the error from the response body
    if (error.response?.data?.error) {
      return error.response.data.error;
    }
    // Use the status text if available
    if (error.response?.statusText) {
      return error.response.statusText;
    }
    // Use the axios error message
    if (error.message) {
      return error.message;
    }
  }

  // Handle standard Error objects
  if (error instanceof Error) {
    return error.message;
  }

  // Handle string errors
  if (typeof error === "string") {
    return error;
  }

  // Default fallback
  return "An unexpected error occurred";
}
