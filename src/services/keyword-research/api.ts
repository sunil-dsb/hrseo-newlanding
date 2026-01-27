import axiosClient from "../axiosClient";
import { KEYWORD_RESEARCH_ENDPOINTS } from "./endpoints";

export interface KeywordSearchParams {
  keyword: string;
  country: string;
  language: string;
}

export const searchKeyword = async (params: KeywordSearchParams) => {
  const response = await axiosClient.get(KEYWORD_RESEARCH_ENDPOINTS.SEARCH, {
    params,
  });
  return response.data;
};

export const getRelatedKeywords = async (params: KeywordSearchParams) => {
  const response = await axiosClient.get(
    KEYWORD_RESEARCH_ENDPOINTS.RELATED_KEYWORDS,
    {
      params,
    },
  );
  return response.data;
};

export const getSerpCompetitors = async (params: KeywordSearchParams) => {
  const response = await axiosClient.get(
    KEYWORD_RESEARCH_ENDPOINTS.SERP_COMPETITORS,
    {
      params,
    },
  );
  return response.data;
};
