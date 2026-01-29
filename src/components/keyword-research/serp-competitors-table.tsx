import React, { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

export interface SerpCompetitorData {
  id: string;
  rank: number;
  url: string;
  title: string;
  da: number;
  pa: number;
  spamScore: number;
  links: number;
}

interface SerpCompetitorsTableProps {
  data: SerpCompetitorData[];
}

export function SerpCompetitorsTable({ data }: SerpCompetitorsTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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
      <div className="flex-1 w-full overflow-x-auto min-h-0">
        <table className="w-full text-left text-sm whitespace-nowrap border-collapse">
          <thead className="sticky top-0 bg-white z-10 shadow-sm">
            <tr className="text-[11px] font-semibold tracking-wide text-gray-500 uppercase border-b border-gray-100">
              <th className="px-5 py-2 w-[5%] pl-6">Rank</th>
              <th className="px-5 py-2 w-[45%]">URL / Title</th>
              <th className="px-5 py-2 w-[10%]">DA</th>
              <th className="px-5 py-2 w-[10%]">PA</th>
              <th className="px-5 py-2 w-[15%]">Spam Score</th>
              <th className="px-5 py-2 w-[15%] text-right pr-6">Links</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr
                key={item.id}
                className="group border-b border-gray-50 last:border-none hover:bg-orange-50 transition-colors duration-200"
              >
                <td className="px-5 py-2 pl-6 align-middle">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-xs font-bold text-gray-600 group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors">
                    {item.rank}
                  </div>
                </td>
                <td className="px-5 py-2 align-middle max-w-[300px]">
                  <div className="flex flex-col min-w-0">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-gray-900 hover:text-orange-600 transition-colors flex items-center gap-1"
                    >
                      <span className="truncate">{item.title}</span>{" "}
                      <ExternalLink
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                      />
                    </a>
                    <span className="text-xs text-gray-500 truncate">
                      {item.url}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-2 align-middle">
                  <span className="text-sm font-medium text-gray-700 tabular-nums">
                    {item.da}
                  </span>
                </td>
                <td className="px-5 py-2 align-middle">
                  <span className="text-sm font-medium text-gray-700 tabular-nums">
                    {item.pa}
                  </span>
                </td>
                <td className="px-5 py-2 align-middle">
                  <div className="flex items-center gap-1.5">
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        item.spamScore > 10
                          ? "bg-rose-500"
                          : item.spamScore > 2
                            ? "bg-amber-500"
                            : "bg-emerald-500"
                      }`}
                    />
                    <span className="text-sm font-medium text-gray-700 tabular-nums">
                      {item.spamScore}%
                    </span>
                  </div>
                </td>
                <td className="px-5 py-2 text-right pr-6 align-middle">
                  <span className="text-sm font-semibold text-gray-900 tabular-nums">
                    {item.links.toLocaleString()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between px-6 py-3 border-t border-gray-100 bg-gray-50/50 shrink-0">
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
