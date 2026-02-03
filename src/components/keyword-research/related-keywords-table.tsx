import React, { useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Search,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface RelatedKeywordData {
  id: string;
  keyword: string;
  intent?:
    | "Informational"
    | "Commercial"
    | "Transactional"
    | "Navigational"
    | "Educational"
    | null;
  cpc: string;
  volume: string;
  difficulty?: number | null;
}

interface RelatedKeywordsTableProps {
  data: RelatedKeywordData[];
  onSelectKeyword?: (keyword: string) => void;
  onFetchData?: (id: string, type: "intent" | "difficulty") => Promise<void>;
}

export function RelatedKeywordsTable({
  data,
  onSelectKeyword,
  onFetchData,
}: RelatedKeywordsTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>(
    {},
  );

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleFetchClick = async (
    e: React.MouseEvent,
    id: string,
    type: "intent" | "difficulty",
  ) => {
    e.stopPropagation();
    if (!onFetchData) return;

    const key = `${id}-${type}`;
    setLoadingStates((prev) => ({ ...prev, [key]: true }));
    try {
      await onFetchData(id, type);
    } finally {
      setLoadingStates((prev) => {
        const newState = { ...prev };
        delete newState[key];
        return newState;
      });
    }
  };

  const renderRevealButton = (id: string, type: "intent" | "difficulty") => {
    const isLoading = loadingStates[`${id}-${type}`];

    if (type === "intent") {
      return (
        <button
          onClick={(e) => handleFetchClick(e, id, type)}
          disabled={isLoading}
          className="relative overflow-hidden cursor-pointer text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white hover:text-brand-primary px-3 py-1.5 rounded-full border border-slate-200 hover:border-brand-primary/30 transition-all duration-300 shadow-xs hover:shadow-md active:scale-95 flex items-center gap-1.5 disabled:opacity-70 disabled:cursor-wait group/intent"
        >
          {isLoading ? (
            <Loader2 className="w-3 h-3 animate-spin" />
          ) : (
            <Search className="w-3 h-3 group-hover/intent:scale-110 transition-transform" />
          )}
          <span>{isLoading ? "..." : "Reveal"}</span>
        </button>
      );
    }

    // Difficulty - Creative Icon Button
    return (
      <button
        onClick={(e) => handleFetchClick(e, id, type)}
        disabled={isLoading}
        className="cursor-pointer p-1 flex items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-slate-400 hover:text-white hover:bg-brand-primary hover:border-brand-primary transition-all duration-300 shadow-xs hover:shadow-orange-200 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-wait group/kd"
        title="Reveal Difficulty"
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Search className="w-4 h-4 group-hover/kd:scale-110 transition-transform" />
        )}
      </button>
    );
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex-1 w-full overflow-auto min-h-0">
        <table className="w-full text-left text-sm whitespace-nowrap border-collapse">
          <thead className="sticky top-0 bg-white z-10 shadow-sm">
            <tr className="text-[11px] font-semibold tracking-wide text-gray-500 uppercase border-b border-gray-100">
              <th className="px-5 py-2 w-[40%] pl-6">Keyword</th>
              <th className="px-5 py-2 w-[20%] text-center">Intent</th>
              <th className="px-5 py-2 w-[15%]">CPC</th>
              <th className="px-5 py-2 w-[15%]">Volume</th>
              <th className="px-5 py-2 w-[10%] text-center">KD %</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr
                key={item.id}
                onClick={() => onSelectKeyword?.(item.keyword)}
                className="group border-b border-gray-50 last:border-none hover:bg-orange-50 transition-colors duration-200 cursor-pointer"
              >
                <td className="px-5 py-3 pl-6 align-middle">
                  <span className="font-semibold text-gray-900 text-[14px]">
                    {item.keyword}
                  </span>
                </td>
                <td className="px-5 py-3 align-middle">
                  <div className="min-w-[80px] flex justify-center">
                    {item.intent ? (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span
                              className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold uppercase tracking-wide border cursor-help shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 ${
                                item.intent === "Informational"
                                  ? "bg-blue-50 text-blue-600 border-blue-100"
                                  : item.intent === "Commercial"
                                    ? "bg-purple-50 text-purple-600 border-purple-100"
                                    : item.intent === "Transactional"
                                      ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                                      : "bg-gray-50 text-gray-600 border-gray-100"
                              }`}
                            >
                              {item.intent.charAt(0)}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{item.intent}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ) : (
                      renderRevealButton(item.id, "intent")
                    )}
                  </div>
                </td>
                <td className="px-5 py-3 align-middle">
                  <span className="text-xs text-gray-600 font-medium tabular-nums">
                    {item.cpc}
                  </span>
                </td>
                <td className="px-5 py-3 align-middle">
                  <span className="text-xs font-medium text-gray-900">
                    {item.volume}
                  </span>
                </td>
                <td className="px-5 py-3 align-middle">
                  <div className="flex items-center justify-center min-h-[32px] min-w-[60px]">
                    {item.difficulty !== null &&
                    item.difficulty !== undefined ? (
                      <span
                        className={`text-xs font-bold tabular-nums animate-in fade-in zoom-in duration-300 ${
                          item.difficulty > 70
                            ? "text-rose-500"
                            : item.difficulty > 40
                              ? "text-amber-500"
                              : "text-emerald-500"
                        }`}
                      >
                        {item.difficulty}
                      </span>
                    ) : (
                      <div className="flex justify-center w-full">
                        {renderRevealButton(item.id, "difficulty")}
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-gray-50/50">
          <span className="text-xs font-medium text-gray-500">
            Page {currentPage} of {totalPages}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-1.5 rounded-lg border border-gray-200 bg-white text-gray-500 hover:text-brand-primary hover:border-brand-primary/30 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-all"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-1.5 rounded-lg border border-gray-200 bg-white text-gray-500 hover:text-brand-primary hover:border-brand-primary/30 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-all"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
