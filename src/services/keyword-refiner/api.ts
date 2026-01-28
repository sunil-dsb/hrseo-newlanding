import axiosClient from "../axiosClient";
import { KEYWORD_REFINER_ENDPOINTS } from "./endpoints";

export const refineKeywords = async (params: {
  keywords: string[];
  googleLocationCode?: number;
  googleLanguageCode?: string;
}) => {
  const response = await axiosClient.post(
    KEYWORD_REFINER_ENDPOINTS.REFINE,
    params,
  );
  return response.data;
};
