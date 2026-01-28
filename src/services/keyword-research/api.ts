import axiosClient from "../axiosClient";
import { KEYWORD_RESEARCH_ENDPOINTS } from "./endpoints";

export interface KeywordSearchParams {
  keyword: string; // Used in SERP competitors
  niche?: string; // Used in Opportunity Finder
  country?: string;
  language?: string;
  locationCodeGoogle?: number;
  languageCode?: string;
  googleLocationCode?: number;
  googleLanguageCode?: string;
  googleLanguageName?: string;
  countryIsoCode?: string;
  subNiche?: string;
  businessModel?: string;
}

export const searchKeyword = async (params: any) => {
  const response = await axiosClient.post(
    KEYWORD_RESEARCH_ENDPOINTS.SEARCH,
    params,
  );
  return response.data;
};

export const getRelatedKeywords = async (params: any) => {
  const response = await axiosClient.post(
    KEYWORD_RESEARCH_ENDPOINTS.RELATED_KEYWORDS,
    params,
  );
  return response.data;
};

export const getSerpCompetitors = async (params: any) => {
  const response = await axiosClient.post(
    KEYWORD_RESEARCH_ENDPOINTS.SERP_COMPETITORS,
    params,
  );
  return response.data;
};
