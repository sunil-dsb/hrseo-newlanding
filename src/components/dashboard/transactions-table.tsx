import React from "react";
import { MoreHorizontal, ArrowUpRight, TrendingUp } from "lucide-react";

export interface KeywordData {
  id: string;
  keyword: string;
  position: string;
  volume: string;
  difficulty: "Hard" | "Medium" | "Easy" | string;
  traffic: string;
  cpc: string;
}

interface TransactionsTableProps {
  data: KeywordData[];
}

export function TransactionsTable({ data }: TransactionsTableProps) {
  return (
    <div className="w-full">
      <table className="w-full text-left text-sm whitespace-nowrap border-collapse">
        <thead>
          <tr className="text-[11px] font-semibold tracking-wide text-gray-500 uppercase border-b border-gray-100">
            <th className="px-5 py-4 w-[35%] pl-6">Keyword</th>
            <th className="px-5 py-4 w-[10%]">Rank</th>
            <th className="px-5 py-4 w-[15%]">Volume</th>
            <th className="px-5 py-4 w-[15%]">Diff.</th>
            <th className="px-5 py-4 w-[10%]">CPC</th>
            <th className="px-5 py-4 w-[15%] text-right pr-6">Traffic</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            // Mock volume percentage for visual bar
            const volNum = parseInt(
              item.volume.replace(/,/g, "").replace(/K/g, "000"),
            );
            const maxVol = 25000;
            const widthPct = Math.min((volNum / maxVol) * 100, 100);

            return (
              <tr
                key={item.id}
                className="group border-b border-gray-50 last:border-none hover:bg-orange-50 transition-colors duration-200"
              >
                <td className="px-5 py-4 pl-6 align-middle">
                  <span className="font-semibold text-gray-900 text-[14px]">
                    {item.keyword}
                  </span>
                </td>
                <td className="px-5 py-4 align-middle">
                  <span className="text-gray-600 font-medium text-sm">
                    {item.position}
                  </span>
                </td>
                <td className="px-5 py-4 align-middle">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-900 w-12">
                      {item.volume}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-4 align-middle">
                  <div className="flex items-center gap-1.5">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        item.difficulty === "Hard"
                          ? "bg-rose-500"
                          : item.difficulty === "Medium"
                            ? "bg-amber-500"
                            : "bg-emerald-500"
                      }`}
                    />
                    <span className="text-sm font-medium text-gray-600">
                      {item.difficulty}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-4 align-middle">
                  <span className="text-sm text-gray-600 font-medium tabular-nums">
                    {item.cpc}
                  </span>
                </td>
                <td className="px-5 py-4 text-right pr-6 align-middle">
                  <span className="text-sm font-semibold text-gray-900 tabular-nums">
                    {item.traffic}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
