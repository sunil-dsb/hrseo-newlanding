import React, { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

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
  difficulty: number;
}

interface RelatedKeywordsTableProps {
  data: RelatedKeywordData[];
  onSelectKeyword?: (keyword: string) => void;
}

export function RelatedKeywordsTable({
  data,
  onSelectKeyword,
}: RelatedKeywordsTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex-1 w-full overflow-auto min-h-0">
        <table className="w-full text-left text-sm whitespace-nowrap border-collapse">
          <thead className="sticky top-0 bg-white z-10 shadow-sm">
            <tr className="text-[11px] font-semibold tracking-wide text-gray-500 uppercase border-b border-gray-100">
              <th className="px-5 py-2 w-[40%] pl-6">Keyword</th>
              <th className="px-5 py-2 w-[20%]">Intent</th>
              <th className="px-5 py-2 w-[15%]">CPC</th>
              <th className="px-5 py-2 w-[15%]">Volume</th>
              <th className="px-5 py-2 w-[10%] text-right pr-6">KD %</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr
                key={item.id}
                onClick={() => onSelectKeyword?.(item.keyword)}
                className="group border-b border-gray-50 last:border-none hover:bg-orange-50 transition-colors duration-200 cursor-pointer"
              >
                <td className="px-5 py-4 pl-6 align-middle">
                  <span className="font-semibold text-gray-900 text-[14px]">
                    {item.keyword}
                  </span>
                </td>
                <td className="px-5 py-4 align-middle">
                  {item.intent ? (
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.intent === "Informational"
                          ? "bg-blue-50 text-blue-600"
                          : item.intent === "Commercial"
                            ? "bg-purple-50 text-purple-600"
                            : item.intent === "Transactional"
                              ? "bg-green-50 text-green-600"
                              : "bg-gray-50 text-gray-600"
                      }`}
                    >
                      {item.intent}
                    </span>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle reveal logic here, for now it's just a button as requested
                      }}
                      className="cursor-pointer text-xs font-bold text-[#F15A29] bg-white hover:bg-linear-to-r hover:from-[#F15A29] hover:to-[#ff7e5f] hover:text-white hover:border-transparent px-3 py-1.5 rounded-lg border border-[#F15A29]/20 shadow-sm transition-all duration-300 hover:shadow-md active:scale-95 flex items-center gap-1.5 group/btn"
                    >
                      <span className="group-hover/btn:animate-pulse">✨</span>
                      <span>Analyze</span>
                    </button>
                  )}
                </td>
                <td className="px-5 py-4 align-middle">
                  <span className="text-sm text-gray-600 font-medium tabular-nums">
                    {item.cpc}
                  </span>
                </td>
                <td className="px-5 py-4 align-middle">
                  <span className="text-sm font-medium text-gray-900">
                    {item.volume}
                  </span>
                </td>
                <td className="px-5 py-4 text-right pr-6 align-middle">
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-sm font-semibold text-gray-900 tabular-nums">
                      {item.difficulty}
                    </span>
                    <div
                      className={`w-2 h-2 rounded-full ${
                        item.difficulty > 70
                          ? "bg-rose-500"
                          : item.difficulty > 40
                            ? "bg-amber-500"
                            : "bg-emerald-500"
                      }`}
                    />
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
              className="p-1.5 rounded-lg border border-gray-200 bg-white text-gray-500 hover:text-brand-primary hover:border-brand-primary/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-1.5 rounded-lg border border-gray-200 bg-white text-gray-500 hover:text-brand-primary hover:border-brand-primary/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
