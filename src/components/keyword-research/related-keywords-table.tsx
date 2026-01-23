import React from "react";
import { ArrowUpRight } from "lucide-react";

export interface RelatedKeywordData {
  id: string;
  keyword: string;
  intent: "Informational" | "Commercial" | "Transactional" | "Navigational";
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
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left text-sm whitespace-nowrap border-collapse">
        <thead>
          <tr className="text-[11px] font-semibold tracking-wide text-gray-500 uppercase border-b border-gray-100">
            <th className="px-5 py-4 w-[40%] pl-6">Keyword</th>
            <th className="px-5 py-4 w-[20%]">Intent</th>
            <th className="px-5 py-4 w-[15%]">CPC</th>
            <th className="px-5 py-4 w-[15%]">Volume</th>
            <th className="px-5 py-4 w-[10%] text-right pr-6">KD %</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
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
  );
}
