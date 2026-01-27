import { useQuery } from "@tanstack/react-query";
import * as api from "./api";
import { KeywordSearchParams } from "./api";

export const useKeywordSearch = (
  params: KeywordSearchParams,
  enabled: boolean = false,
) => {
  return useQuery({
    queryKey: ["keywordSearch", params],
    queryFn: () => api.searchKeyword(params),
    enabled: enabled && !!params.keyword,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useRelatedKeywords = (
  params: KeywordSearchParams,
  enabled: boolean = false,
) => {
  return useQuery({
    queryKey: ["relatedKeywords", params],
    queryFn: () => api.getRelatedKeywords(params),
    enabled: enabled && !!params.keyword,
  });
};

export const useSerpCompetitors = (
  params: KeywordSearchParams,
  enabled: boolean = false,
) => {
  return useQuery({
    queryKey: ["serpCompetitors", params],
    queryFn: () => api.getSerpCompetitors(params),
    enabled: enabled && !!params.keyword,
  });
};
