import React from "react";
import { ExternalLink } from "lucide-react";

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
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left text-sm whitespace-nowrap border-collapse">
        <thead>
          <tr className="text-[11px] font-semibold tracking-wide text-gray-500 uppercase border-b border-gray-100">
            <th className="px-5 py-4 w-[5%] pl-6">Rank</th>
            <th className="px-5 py-4 w-[45%]">URL / Title</th>
            <th className="px-5 py-4 w-[10%]">DA</th>
            <th className="px-5 py-4 w-[10%]">PA</th>
            <th className="px-5 py-4 w-[15%]">Spam Score</th>
            <th className="px-5 py-4 w-[15%] text-right pr-6">Links</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="group border-b border-gray-50 last:border-none hover:bg-orange-50 transition-colors duration-200"
            >
              <td className="px-5 py-4 pl-6 align-middle">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-xs font-bold text-gray-600 group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors">
                  {item.rank}
                </div>
              </td>
              <td className="px-5 py-4 align-middle max-w-[300px]">
                <div className="flex flex-col truncate">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-gray-900 truncate hover:text-orange-600 transition-colors flex items-center gap-1"
                  >
                    {item.title}{" "}
                    <ExternalLink
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                  <span className="text-xs text-gray-500 truncate">
                    {item.url}
                  </span>
                </div>
              </td>
              <td className="px-5 py-4 align-middle">
                <span className="text-sm font-medium text-gray-700 tabular-nums">
                  {item.da}
                </span>
              </td>
              <td className="px-5 py-4 align-middle">
                <span className="text-sm font-medium text-gray-700 tabular-nums">
                  {item.pa}
                </span>
              </td>
              <td className="px-5 py-4 align-middle">
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
              <td className="px-5 py-4 text-right pr-6 align-middle">
                <span className="text-sm font-semibold text-gray-900 tabular-nums">
                  {item.links.toLocaleString()}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
