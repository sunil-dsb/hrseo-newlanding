import { useMutation } from "@tanstack/react-query";
import * as api from "./api";

export const useRefineKeywords = () => {
  return useMutation({
    mutationFn: api.refineKeywords,
  });
};
