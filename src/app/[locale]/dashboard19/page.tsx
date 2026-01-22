"use client";

import { useState } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  PieChart,
  Pie,
  Cell,
  YAxis,
  BarChart,
  Bar,
} from "recharts";
import { Search, ArrowUpRight, Moon, Sun } from "lucide-react";
import clsx from "clsx";
import { DashboardNavbar } from "@/components/layout";

// --- Mock Data ---
const hiringData = [
  { name: "Jan", others: 120, design: 50 },
  { name: "Feb", others: 130, design: 110 },
  { name: "Mar", others: 110, design: 90 },
  { name: "Apr", others: 125, design: 140 },
  { name: "Jun", others: 110, design: 90 },
  { name: "Jul", others: 140, design: 80 }, // Highlighted in design
  { name: "Aug", others: 120, design: 95 },
  { name: "Sep", others: 135, design: 110 },
  { name: "Oct", others: 125, design: 100 },
  { name: "Nov", others: 130, design: 105 },
];

const employeeData = [
  { name: "Female", value: 70 },
  { name: "Male", value: 30 },
];

const relatedKeywords = [
  {
    keyword: "seo tools",
    intent: "Commercial",
    cpc: "$1.20",
    volume: "12K",
    kd: 45,
  },
  {
    keyword: "keyword research",
    intent: "Informational",
    cpc: "$2.50",
    volume: "8.5K",
    kd: 62,
  },
  {
    keyword: "backlink checker",
    intent: "Transactional",
    cpc: "$3.80",
    volume: "5K",
    kd: 78,
  },
  {
    keyword: "google search console",
    intent: "Navigational",
    cpc: "$0.50",
    volume: "20K",
    kd: 22,
  },
  {
    keyword: "rank tracker",
    intent: "Commercial",
    cpc: "$1.95",
    volume: "6.2K",
    kd: 55,
  },
];

const serpCompetitors = [
  {
    url: "https://example.com/guide/seo",
    da: 45,
    pa: 32,
    spam: "1%",
    links: 120,
    rank: 1,
  },
  {
    url: "https://competitor.com/blog",
    da: 68,
    pa: 50,
    spam: "0%",
    links: 350,
    rank: 2,
  },
  {
    url: "https://wiki.org/topic",
    da: 92,
    pa: 81,
    spam: "0%",
    links: 5000,
    rank: 3,
  },
  {
    url: "https://niche-site.net/post",
    da: 34,
    pa: 28,
    spam: "2%",
    links: 50,
    rank: 4,
  },
  {
    url: "https://marketing.io/seo-tips",
    da: 55,
    pa: 40,
    spam: "1%",
    links: 210,
    rank: 5,
  },
];

const searchVolumeData = [
  { name: "Jan", volume: 4200 },
  { name: "Feb", volume: 3800 },
  { name: "Mar", volume: 5100 },
  { name: "Apr", volume: 7600 },
  { name: "May", volume: 6400 },
  { name: "Jun", volume: 9200 },
  { name: "Jul", volume: 11500 },
  { name: "Aug", volume: 10800 },
  { name: "Sep", volume: 7500 },
  { name: "Oct", volume: 6800 },
  { name: "Nov", volume: 5400 },
  { name: "Dec", volume: 4800 },
];

export default function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="p-0 w-full h-screen bg-cover bg-center bg-no-repeat overflow-hidden transition-colors duration-500 bg-[url('/assets/image.png')]">
      <div className="fixed top-0 z-20 w-full">
        <DashboardNavbar />
      </div>

      {/* Dark Mode Toggle Button */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={clsx(
          "fixed top-24 right-10 z-30 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110",
          isDarkMode
            ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
            : "bg-gray-900 text-white hover:bg-gray-800",
        )}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <div
        className={clsx(
          "pt-20 px-10 mx-auto h-full backdrop-blur-lg overflow-scroll transition-colors duration-500",
          isDarkMode ? "bg-black/80" : "bg-white/20",
        )}
      >
        <div className="p-8 lg:p-10 max-w-[95vw] mx-auto font-sans rounded-4xl">
          <h1
            className={clsx(
              "text-5xl font-light pl-4 mb-4 transition-colors duration-500",
              isDarkMode ? "text-white" : "text-black",
            )}
          >
            Hello Valentina
          </h1>
          {/* Header Section */}
          <div className="mb-10">
            {/* Top Stats Row */}
            <div className="flex flex-col xl:flex-row gap-8 items-end">
              {/* Progress Widgets */}
              <div className="flex flex-wrap gap-2 flex-1 w-full">
                {/* Interviews (Black) */}
                <div className="relative flex flex-col justify-center h-[90px] rounded-[24px] px-6 bg-linear-to-tr from-brand-dark to-brand-dark/20 text-white w-[240px] shrink-0 shadow-lg shadow-black/10">
                  <div className="text-xs mb-2 opacity-70 font-medium tracking-wide">
                    Interviews
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-2xl font-semibold tracking-tight">
                      70%
                    </span>
                    <div className="w-[100px] h-1.5 bg-white/20 rounded-full">
                      <div className="w-[70%] h-full bg-white rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Hired (Yellow) */}
                <div className="relative flex flex-col justify-center h-[90px] rounded-[24px] px-6 bg-linear-to-tr from-brand-primary to-brand-primary/20 text-white w-[180px] shrink-0 shadow-lg shadow-brand-primary/20">
                  <div className="text-xs mb-2 opacity-80 font-medium tracking-wide">
                    Hired
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-2xl font-semibold tracking-tight">
                      10%
                    </span>
                    <div className="w-[60px] h-1.5 bg-white/20 rounded-full">
                      <div className="w-[10%] h-full bg-white rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Project time (Striped) */}
                <div className="relative flex flex-col justify-center h-[90px] rounded-[24px] px-6 bg-linear-to-tr from-white to-white/20 text-brand-dark w-[180px] shrink-0 shadow-lg shadow-white/20">
                  <div className="text-xs mb-2 opacity-60 font-medium tracking-wide">
                    Project time
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-semibold tracking-tight">
                      15%
                    </span>
                    {/* Visual filler for striped block */}
                    <div className="opacity-0">...</div>
                  </div>
                </div>

                {/* Output (White) */}
                <div
                  className={`relative flex flex-col justify-center h-[90px] rounded-[24px] px-6 bg-transparent border w-[120px] shrink-0 ${isDarkMode ? "text-white border-white/40" : "text-black border-brand-dark/80"}`}
                >
                  <p className="text-xs mb-1 opacity-60 font-medium tracking-wide">
                    Output
                  </p>
                  <span className="text-2xl font-semibold tracking-tight">
                    5%
                  </span>
                </div>
              </div>

              {/* Quick Stats (Text only) */}
              {/* <div className="flex gap-12 pb-3 xl:pl-4 shrink-0">
            <StatItem label="Employee" value="91" icon="👥" />
            <StatItem label="Hirings" value="104" icon="👜" />
            <StatItem label="Projects" value="185" icon="💻" />
          </div> */}
            </div>
          </div>

          {/* Main Grid: 3 Columns Asymmetric */}
          <div className="grid grid-cols-1 gap-2 w-full">
            {/* Column 2: Salary & Hiring */}
            <div className="grid grid-cols-4 gap-2">
              {/* <div className="col-span-3">
                <div
                  className={clsx(
                    "backdrop-blur-xl rounded-[32px] p-7 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] transition-colors duration-500",
                    isDarkMode ? "bg-white/5" : "bg-white",
                  )}
                >
                  <div className="flex justify-between items-center mb-6">
                    <h3
                      className={clsx(
                        "text-[17px] font-bold transition-colors duration-500",
                        isDarkMode ? "text-white" : "text-brand-dark",
                      )}
                    >
                      Salary
                    </h3>
                    <div className="flex gap-3 items-center">
                      <div
                        className={clsx(
                          "rounded-full h-9 pl-4 pr-3 flex items-center gap-2 w-[180px] transition-colors duration-500",
                          isDarkMode ? "bg-white/10" : "bg-[#f5f5f7]",
                        )}
                      >
                        <Search size={14} className="text-gray-400" />
                        <span className="text-[13px] text-gray-400 font-medium">
                          Search
                        </span>
                      </div>
                      <button
                        className={clsx(
                          "w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-500",
                          isDarkMode
                            ? "border-white/20 text-gray-300 hover:bg-white/10"
                            : "border-gray-200 text-gray-500 hover:bg-gray-50",
                        )}
                      >
                        <ArrowUpRight size={14} strokeWidth={2} />
                      </button>
                    </div>
                  </div>

                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr
                        className={clsx(
                          "text-[11px] border-b h-8 transition-colors duration-500",
                          isDarkMode
                            ? "text-gray-400 border-white/10"
                            : "text-[#999] border-white",
                        )}
                      >
                        <th className="font-normal w-8">
                          <div
                            className={clsx(
                              "w-3.5 h-3.5 border rounded-[4px] transition-colors duration-500",
                              isDarkMode
                                ? "border-white/20"
                                : "border-gray-300",
                            )}
                          ></div>
                        </th>
                        <th className="font-normal pl-2">Name</th>
                        <th className="font-normal">Job Title</th>
                        <th className="font-normal">Net Salary</th>
                        <th className="font-normal">Status</th>
                      </tr>
                    </thead>
                    <tbody className="text-[13px]">
                      <SalaryRow
                        isDarkMode={isDarkMode}
                        img="https://i.pravatar.cc/150?u=1"
                        name="Yulia Polishchuk"
                        role="Head of Design"
                        salary="$2,500"
                        status="Paid For"
                        statusColor="bg-[#eef2ff] text-[#4f46e5]"
                      />
                      <tr className="h-4"></tr>
                      <SalaryRow
                        isDarkMode={isDarkMode}
                        img="https://i.pravatar.cc/150?u=8"
                        name="Bogdan Nikitin"
                        role="Front End Dev..."
                        salary="$3,000"
                        status="Absent"
                        statusColor="bg-[#f4f4f5] text-[#71717a]"
                        checked
                      />
                      <tr className="h-4"></tr>
                      <SalaryRow
                        isDarkMode={isDarkMode}
                        img="https://i.pravatar.cc/150?u=5"
                        name="Daria Yurchenko"
                        role="UX/UI Designer"
                        salary="$1,500"
                        status="Pending"
                        statusColor="bg-[#ecfdf5] text-[#10b981]"
                      />
                      <tr className="h-4"></tr>
                      <SalaryRow
                        isDarkMode={isDarkMode}
                        img="https://i.pravatar.cc/150?u=5"
                        name="Daria Yurchenko"
                        role="UX/UI Designer"
                        salary="$1,500"
                        status="Pending"
                        statusColor="bg-[#ecfdf5] text-[#10b981]"
                      />
                      <tr className="h-4"></tr>
                      <SalaryRow
                        isDarkMode={isDarkMode}
                        img="https://i.pravatar.cc/150?u=5"
                        name="Daria Yurchenko"
                        role="UX/UI Designer"
                        salary="$1,500"
                        status="Pending"
                        statusColor="bg-[#ecfdf5] text-[#10b981]"
                      />
                      <tr className="h-4"></tr>
                      <SalaryRow
                        isDarkMode={isDarkMode}
                        img="https://i.pravatar.cc/150?u=5"
                        name="Daria Yurchenko"
                        role="UX/UI Designer"
                        salary="$1,500"
                        status="Pending"
                        statusColor="bg-[#ecfdf5] text-[#10b981]"
                      />
                    </tbody>
                  </table>
                </div>
              </div> */}

              <div
                className={clsx(
                  "col-span-3 rounded-[32px] p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] transition-colors duration-500 flex flex-col gap-6",
                  isDarkMode
                    ? "bg-white/5 backdrop-blur-xl border border-white/10"
                    : "bg-white",
                )}
              >
                <div className="flex justify-between items-center">
                  <h3
                    className={clsx(
                      "text-[18px] font-bold",
                      isDarkMode ? "text-white" : "text-brand-dark",
                    )}
                  >
                    Related Keywords
                  </h3>
                  <button
                    className={clsx(
                      "w-8 h-8 flex items-center justify-center rounded-full border transition-all",
                      isDarkMode
                        ? "border-white/20 text-white hover:bg-white/10"
                        : "border-gray-200 text-gray-500 hover:bg-gray-50",
                    )}
                  >
                    <ArrowUpRight size={14} />
                  </button>
                </div>

                <div className="flex flex-col gap-3">
                  {/* Header */}
                  <div className="grid grid-cols-12 text-[10px] font-bold tracking-wider opacity-50 px-3 uppercase mb-1">
                    <div className="col-span-4">Keyword</div>
                    <div className="col-span-2">Intent</div>
                    <div className="col-span-2 text-right">Vol</div>
                    <div className="col-span-2 text-right">CPC</div>
                    <div className="col-span-2 text-right">Difficulty</div>
                  </div>
                  {/* Rows */}
                  {relatedKeywords.map((kw, i) => (
                    <KeywordRow key={i} {...kw} isDarkMode={isDarkMode} />
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div
                  className={clsx(
                    "backdrop-blur-xl  h-[260px] relative overflow-hidden rounded-[32px] p-7 shadow-lg col-span-1 transition-colors duration-500",
                    isDarkMode
                      ? "bg-white/80 text-black"
                      : "bg-black/60 text-white",
                  )}
                >
                  <div className="flex justify-between items-center mb-6 relative z-10">
                    <h3 className="text-[17px] font-bold">Attendance Report</h3>
                    <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-white/10 transition-colors">
                      <ArrowUpRight size={14} strokeWidth={2} />
                    </button>
                  </div>

                  <div className="flex gap-6 mb-8 relative z-10">
                    <div className="flex flex-col">
                      <div className="text-[36px] font-light leading-none flex items-start gap-1">
                        63
                        <span className="text-base text-brand-primary font-normal mt-1">
                          ↗
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col opacity-50">
                      <div className="text-[36px] font-light leading-none flex items-start gap-1">
                        12
                        <span className="text-base text-white/60 font-normal mt-1">
                          ↘
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Dot Matrix - Custom Grid */}
                  <div className="absolute bottom-7 left-7 right-7">
                    <div className="grid grid-cols-[repeat(12,1fr)] gap-x-2 gap-y-2">
                      {Array.from({ length: 48 }).map((_, i) => (
                        <div
                          key={i}
                          className={clsx(
                            "aspect-square rounded-full w-1.5 h-1.5",
                            i >= 28
                              ? "bg-brand-primary shadow-[0_0_5px_#fcd34d]"
                              : "bg-white/10",
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className={clsx(
                    "rounded-[32px] p-7 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] flex-1 flex flex-col items-center justify-center transition-colors duration-500",
                    isDarkMode ? "bg-white/5 backdrop-blur-xl" : "bg-white",
                  )}
                >
                  <h3
                    className={clsx(
                      "text-[17px] font-bold w-full mb-4 text-left transition-colors duration-500",
                      isDarkMode ? "text-white" : "text-brand-dark",
                    )}
                  >
                    Employee Composition
                  </h3>

                  <div className="relative w-[180px] h-[180px] mb-8">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={employeeData}
                          cx="50%"
                          cy="50%"
                          innerRadius={70}
                          outerRadius={86}
                          startAngle={90}
                          endAngle={450}
                          dataKey="value"
                          stroke="none"
                          cornerRadius={8}
                          paddingAngle={4}
                        >
                          <Cell fill="#1a1a1a" />
                          <Cell fill="var(--color-brand-primary)" />
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>

                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <div
                        className={clsx(
                          "text-[32px] font-bold leading-none mb-1 transition-colors duration-500",
                          isDarkMode ? "text-white" : "text-brand-dark",
                        )}
                      >
                        345
                      </div>
                      <div
                        className={clsx(
                          "text-[11px] font-medium transition-colors duration-500",
                          isDarkMode ? "text-gray-400" : "text-[#999]",
                        )}
                      >
                        Total
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-8 text-[13px] font-medium">
                    <span
                      className={clsx(
                        "flex items-center gap-2 transition-colors duration-500",
                        isDarkMode ? "text-gray-300" : "text-[#666]",
                      )}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-dark"></span>
                      70% ♀
                    </span>
                    <span
                      className={clsx(
                        "flex items-center gap-2 transition-colors duration-500",
                        isDarkMode ? "text-gray-300" : "text-[#666]",
                      )}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
                      30% ♂
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-2">
              {/* Hiring Statistics */}
              <div
                className={clsx(
                  "rounded-[32px] p-7 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] flex-1 flex flex-col min-h-[280px] transition-colors duration-500",
                  isDarkMode ? "bg-white/5 backdrop-blur-xl" : "bg-white",
                )}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-6 items-center">
                    <h3
                      className={clsx(
                        "text-[17px] font-bold transition-colors duration-500",
                        isDarkMode ? "text-white" : "text-brand-dark",
                      )}
                    >
                      Hiring Statistics
                    </h3>
                    <div className="flex gap-4 text-[11px] font-medium pt-1">
                      <span
                        className={clsx(
                          "flex items-center gap-1.5 transition-colors duration-500",
                          isDarkMode ? "text-gray-300" : "text-[#666]",
                        )}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
                        Others
                      </span>
                      <span
                        className={clsx(
                          "flex items-center gap-1.5 transition-colors duration-500",
                          isDarkMode ? "text-gray-300" : "text-[#666]",
                        )}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-dark"></span>
                        Design
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div
                      className={clsx(
                        "px-3 py-1.5 rounded-[12px] text-[11px] font-bold flex items-center gap-1 cursor-pointer transition-colors duration-500",
                        isDarkMode
                          ? "bg-white/10 text-white"
                          : "bg-[#f5f5f7] text-brand-dark",
                      )}
                    >
                      2024{" "}
                      <span className="text-[8px] opacity-40 translate-y-px">
                        ▼
                      </span>
                    </div>
                    <button
                      className={clsx(
                        "w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500",
                        isDarkMode
                          ? "border-white/20 text-gray-300 hover:bg-white/10"
                          : "border-gray-200 text-gray-500 hover:bg-gray-50",
                      )}
                    >
                      <ArrowUpRight size={14} strokeWidth={2} />
                    </button>
                  </div>
                </div>

                <div className="flex-1 w-full -ml-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={hiringData}
                      margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="colorDesign"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="var(--color-brand-primary)"
                            stopOpacity={0.05}
                          />
                          <stop
                            offset="95%"
                            stopColor="var(--color-brand-primary)"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <Tooltip
                        content={({ active, payload, label }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div
                                className={clsx(
                                  "text-white text-[10px] py-1.5 px-3 rounded-lg shadow-xl text-center transition-colors duration-500",
                                  isDarkMode
                                    ? "bg-white/20 backdrop-blur-xl"
                                    : "bg-brand-dark",
                                )}
                              >
                                <div className="mb-1 font-semibold">
                                  {label}
                                </div>
                                <div>Others: {payload[0].value}</div>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />

                      {/* Others - Dotted Yellow */}
                      <Area
                        type="monotone"
                        dataKey="others"
                        stroke="var(--color-brand-primary)"
                        strokeWidth={2}
                        strokeDasharray="4 4"
                        fill="transparent"
                        activeDot={{
                          r: 4,
                          fill: "var(--color-brand-primary)",
                          strokeWidth: 0,
                        }}
                        dot={false}
                      />

                      {/* Design - Solid Black */}
                      <Area
                        type="monotone"
                        dataKey="design"
                        stroke="#1a1a1a"
                        strokeWidth={2}
                        fill="url(#colorDesign)"
                        activeDot={{
                          r: 4,
                          fill: "#1a1a1a",
                          stroke: "#fff",
                          strokeWidth: 2,
                        }}
                        dot={false}
                      />
                      <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={({ x, y, payload }) => {
                          const isJuly = payload.value === "Jul";
                          return (
                            <g transform={`translate(${x},${y})`}>
                              {isJuly ? (
                                <foreignObject
                                  x="-14"
                                  y="10"
                                  width="28"
                                  height="20"
                                >
                                  <div
                                    className={clsx(
                                      "rounded-[6px] text-[10px] font-bold text-center leading-[20px] transition-colors duration-500",
                                      isDarkMode
                                        ? "bg-white/10 text-white"
                                        : "bg-[#f5f5f7] text-brand-dark",
                                    )}
                                  >
                                    {payload.value}
                                  </div>
                                </foreignObject>
                              ) : (
                                <text
                                  x={0}
                                  y={22}
                                  textAnchor="middle"
                                  fill={isDarkMode ? "#9ca3af" : "#999"}
                                  fontSize={10}
                                >
                                  {payload.value}
                                </text>
                              )}
                            </g>
                          );
                        }}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{
                          fill: isDarkMode ? "#9ca3af" : "#999",
                          fontSize: 10,
                        }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* --- New SEO Section --- */}
          <div className="mt-8 flex flex-col gap-6">
            <h2
              className={clsx(
                "text-2xl font-light pl-2 mb-2 transition-colors duration-500",
                isDarkMode ? "text-white" : "text-brand-dark",
              )}
            >
              SEO Analysis
            </h2>

            {/* Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div
                className={clsx(
                  "md:col-span-2 rounded-[32px] p-6 shadow-lg flex flex-col relative overflow-hidden transition-colors duration-500 h-[424px]",
                  isDarkMode
                    ? "bg-white/5 backdrop-blur-2xl border border-white/10"
                    : "bg-white",
                )}
              >
                {/* Background Glow Effects (Dark Mode Only) */}
                {isDarkMode && (
                  <>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-500/20 rounded-full blur-[60px]" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-20 bg-purple-500/10 rounded-full blur-2xl" />
                  </>
                )}

                {/* Header */}
                <div className="flex justify-center items-center z-10 relative mb-4">
                  <h3
                    className={clsx(
                      "text-[15px] font-medium tracking-wide",
                      isDarkMode ? "text-gray-200" : "text-gray-600",
                    )}
                  >
                    Keyword Difficulty
                  </h3>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 relative z-10 w-full px-2">
                  {/* Center Gauge */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[380px] h-[220px] flex items-center justify-center translate-y-3">
                      <svg
                        viewBox="0 0 240 140"
                        className="w-full h-full overflow-visible"
                      >
                        <defs>
                          <linearGradient
                            id="gauge-gradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stopColor="#10b981" />
                            <stop offset="50%" stopColor="#f59e0b" />
                            <stop offset="100%" stopColor="#ef4444" />
                          </linearGradient>

                          <filter
                            id="glow"
                            x="-20%"
                            y="-20%"
                            width="140%"
                            height="140%"
                          >
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feComposite
                              in="SourceGraphic"
                              in2="blur"
                              operator="over"
                            />
                          </filter>
                        </defs>

                        {Array.from({ length: 41 }).map((_, i) => {
                          const angle = 180 + (i / 40) * 180;
                          const isMajor = i % 10 === 0;
                          const rad = (angle * Math.PI) / 180;
                          const cx = 120;
                          const cy = 120;
                          const r1 = isMajor ? 95 : 100;
                          const r2 = 110;
                          const x1 = cx + r1 * Math.cos(rad);
                          const y1 = cy + r1 * Math.sin(rad);
                          const x2 = cx + r2 * Math.cos(rad);
                          const y2 = cy + r2 * Math.sin(rad);

                          return (
                            <line
                              key={i}
                              x1={x1}
                              y1={y1}
                              x2={x2}
                              y2={y2}
                              stroke={
                                isDarkMode
                                  ? "rgba(255,255,255,0.1)"
                                  : "rgba(0,0,0,0.05)"
                              }
                              strokeWidth={isMajor ? 2 : 1}
                            />
                          );
                        })}

                        <path
                          d="M 35 120 A 85 85 0 0 1 205 120"
                          fill="none"
                          stroke={
                            isDarkMode
                              ? "rgba(255,255,255,0.1)"
                              : "rgba(0,0,0,0.1)"
                          }
                          strokeWidth="12"
                          strokeLinecap="round"
                        />

                        <path
                          d="M 35 120 A 85 85 0 0 1 185 65"
                          fill="none"
                          stroke="url(#gauge-gradient)"
                          strokeWidth="12"
                          strokeLinecap="round"
                          filter="url(#glow)"
                          className="drop-shadow-lg"
                        />

                        <g
                          style={{
                            transformOrigin: "120px 120px",
                            transform: "rotate(320.4deg)",
                          }}
                        >
                          <line
                            x1="120"
                            y1="120"
                            x2="200"
                            y2="120"
                            stroke={isDarkMode ? "white" : "#1f2937"}
                            strokeWidth="3"
                            strokeLinecap="round"
                            className={
                              isDarkMode
                                ? "drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                                : ""
                            }
                          />
                          <circle
                            cx="120"
                            cy="120"
                            r="6"
                            fill={isDarkMode ? "white" : "#1f2937"}
                          />
                        </g>
                      </svg>

                      {/* Center Text */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
                        <span
                          className={clsx(
                            "text-5xl font-bold tracking-tight",
                            isDarkMode
                              ? "text-white drop-shadow-lg"
                              : "text-brand-dark",
                          )}
                        >
                          78
                        </span>
                        <span
                          className={clsx(
                            "text-sm font-medium mt-1",
                            isDarkMode ? "text-gray-400" : "text-gray-500",
                          )}
                        >
                          / 100
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Stats */}
                <div className="flex justify-between items-end relative z-10 w-full mt-auto mb-2 px-4">
                  <div className="flex flex-col gap-1">
                    <span
                      className={clsx(
                        "text-[11px] font-medium uppercase tracking-wider",
                        isDarkMode ? "text-gray-500" : "text-gray-400",
                      )}
                    >
                      Competition
                    </span>
                    <span
                      className={clsx(
                        "text-base font-medium",
                        isDarkMode ? "text-gray-200" : "text-brand-dark",
                      )}
                    >
                      High
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <div
                      className={clsx(
                        "w-8 h-8 rounded-full flex items-center justify-center",
                        isDarkMode
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-blue-50 text-blue-500",
                      )}
                    >
                      <ArrowUpRight size={14} strokeWidth={3} />
                    </div>
                    <span
                      className={clsx(
                        "text-[11px] font-medium uppercase tracking-wider",
                        isDarkMode ? "text-gray-500" : "text-gray-400",
                      )}
                    >
                      Trend
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Stacked Cards */}
              <div className="flex flex-col gap-6">
                {/* Avg CPC */}
                <div
                  className={clsx(
                    "rounded-[32px] p-7 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] flex flex-col justify-between h-[200px] transition-colors duration-500",
                    isDarkMode ? "bg-white/5 backdrop-blur-xl" : "bg-white",
                  )}
                >
                  <div>
                    <h3
                      className={clsx(
                        "text-[15px] font-bold mb-1",
                        isDarkMode ? "text-white" : "text-brand-dark",
                      )}
                    >
                      Average CPC
                    </h3>
                    <p
                      className={clsx(
                        "text-[11px] font-medium",
                        isDarkMode ? "text-gray-400" : "text-[#999]",
                      )}
                    >
                      COST PER CLICK
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xl font-bold">
                      $
                    </div>
                    <span
                      className={clsx(
                        "text-5xl font-light",
                        isDarkMode ? "text-white" : "text-brand-dark",
                      )}
                    >
                      $2.50
                    </span>
                  </div>
                </div>

                {/* Avg Search Volume */}
                <div
                  className={clsx(
                    "rounded-[32px] p-7 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] flex flex-col justify-between h-[200px] transition-colors duration-500",
                    isDarkMode ? "bg-white/5 backdrop-blur-xl" : "bg-white",
                  )}
                >
                  <div>
                    <h3
                      className={clsx(
                        "text-[15px] font-bold mb-1",
                        isDarkMode ? "text-white" : "text-brand-dark",
                      )}
                    >
                      Avg Search Volume
                    </h3>
                    <p
                      className={clsx(
                        "text-[11px] font-medium",
                        isDarkMode ? "text-gray-400" : "text-[#999]",
                      )}
                    >
                      MONTHLY
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Search size={22} />
                    </div>
                    <span
                      className={clsx(
                        "text-5xl font-light",
                        isDarkMode ? "text-white" : "text-brand-dark",
                      )}
                    >
                      8.5K
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Search Volume Graph */}

            <div
              className={clsx(
                "rounded-[32px] p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] w-full transition-colors duration-500",
                isDarkMode
                  ? "bg-white/5 backdrop-blur-xl border border-white/10"
                  : "bg-white",
              )}
            >
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h3
                    className={clsx(
                      "text-[19px] font-bold",
                      isDarkMode ? "text-white" : "text-brand-dark",
                    )}
                  >
                    Search Volume
                  </h3>
                  <p
                    className={clsx(
                      "text-[12px] mt-1 font-medium tracking-wide",
                      isDarkMode ? "text-gray-400" : "text-[#999]",
                    )}
                  >
                    PAST 12 MONTHS PERFORMANCE
                  </p>
                </div>
                <div
                  className={clsx(
                    "px-3 py-1.5 rounded-full text-[11px] font-bold border",
                    isDarkMode
                      ? "border-white/20 text-white bg-white/5"
                      : "border-brand-dark/10 text-brand-dark bg-gray-50",
                  )}
                >
                  Daily View
                </div>
              </div>
              <div className="h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={searchVolumeData}
                    margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                    barSize={32}
                  >
                    <Tooltip
                      cursor={{ fill: "transparent" }}
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div
                              className={clsx(
                                "text-white text-[11px] py-2 px-3 rounded-xl shadow-xl text-center transform translate-y-[-10px]",
                                isDarkMode
                                  ? "bg-[#1a1a1a] border border-white/20"
                                  : "bg-black",
                              )}
                            >
                              <div className="mb-1 font-bold opacity-70">
                                {label}
                              </div>
                              <div className="text-lg font-bold">
                                {payload[0].value.toLocaleString()}
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{
                        fill: isDarkMode ? "#6b7280" : "#9ca3af",
                        fontSize: 11,
                        fontWeight: 500,
                      }}
                      dy={15}
                    />
                    <Bar
                      dataKey="volume"
                      radius={[8, 8, 8, 8]}
                      fill={isDarkMode ? "white" : "black"}
                      className="opacity-20 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Tables Row: Related Keywords & SERP Competitors */}
            <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
              {/* Related Keywords (2/5) */}
              <div
                className={clsx(
                  "xl:col-span-2 rounded-[32px] p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] transition-colors duration-500 flex flex-col gap-6",
                  isDarkMode
                    ? "bg-white/5 backdrop-blur-xl border border-white/10"
                    : "bg-white",
                )}
              >
                <div className="flex justify-between items-center">
                  <h3
                    className={clsx(
                      "text-[18px] font-bold",
                      isDarkMode ? "text-white" : "text-brand-dark",
                    )}
                  >
                    Related Keywords
                  </h3>
                  <button
                    className={clsx(
                      "w-8 h-8 flex items-center justify-center rounded-full border transition-all",
                      isDarkMode
                        ? "border-white/20 text-white hover:bg-white/10"
                        : "border-gray-200 text-gray-500 hover:bg-gray-50",
                    )}
                  >
                    <ArrowUpRight size={14} />
                  </button>
                </div>

                <div className="flex flex-col gap-3">
                  {/* Header */}
                  <div className="grid grid-cols-12 text-[10px] font-bold tracking-wider opacity-50 px-3 uppercase mb-1">
                    <div className="col-span-4">Keyword</div>
                    <div className="col-span-2">Intent</div>
                    <div className="col-span-2 text-right">Vol</div>
                    <div className="col-span-2 text-right">CPC</div>
                    <div className="col-span-2 text-right">Difficulty</div>
                  </div>
                  {/* Rows */}
                  {relatedKeywords.map((kw, i) => (
                    <KeywordRow key={i} {...kw} isDarkMode={isDarkMode} />
                  ))}
                </div>
              </div>

              {/* SERP Competitors (3/5) */}
              <div
                className={clsx(
                  "xl:col-span-3 rounded-[32px] p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] transition-colors duration-500 flex flex-col gap-6",
                  isDarkMode
                    ? "bg-white/5 backdrop-blur-xl border border-white/10"
                    : "bg-white",
                )}
              >
                <div className="flex justify-between items-center">
                  <h3
                    className={clsx(
                      "text-[18px] font-bold",
                      isDarkMode ? "text-white" : "text-brand-dark",
                    )}
                  >
                    SERP Competitors
                  </h3>
                  <div className="flex gap-2">
                    {["Top 10", "Top 20"].map((t) => (
                      <button
                        key={t}
                        className={clsx(
                          "px-3 py-1 text-[11px] font-bold rounded-full transition-colors",
                          t === "Top 10"
                            ? isDarkMode
                              ? "bg-white text-black"
                              : "bg-black text-white"
                            : isDarkMode
                              ? "text-gray-400 hover:text-white"
                              : "text-gray-400 hover:text-black",
                        )}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {/* Header */}
                  <div className="grid grid-cols-12 text-[10px] font-bold tracking-wider opacity-50 px-4 uppercase mb-1">
                    <div className="col-span-3">URL</div>
                    <div className="col-span-1">DA</div>
                    <div className="col-span-1">PA</div>
                    <div className="col-span-2">Spam</div>
                    <div className="col-span-3 text-right">Links</div>
                    <div className="col-span-2 text-right">Rank</div>
                  </div>
                  {serpCompetitors.map((comp, i) => (
                    <CompetitorRow key={i} {...comp} isDarkMode={isDarkMode} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Components ---

const StatItem = ({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: string;
}) => (
  <div className="flex flex-col gap-0.5">
    <div className="text-5xl font-light text-brand-dark">{value}</div>
    <div className="text-[11px] text-[#999] uppercase tracking-wider flex items-center gap-1.5 font-medium">
      <span className="opacity-70 grayscale">{icon}</span>
      {label}
    </div>
  </div>
);

const EventCard = ({
  time,
  endTime,
  title,
  theme,
}: {
  time: string;
  endTime: string;
  title: string;
  theme: "black" | "white" | "minimal";
}) => {
  if (theme === "minimal") {
    return (
      <div className="flex gap-5 items-start pl-[2px] relative z-10 w-full">
        <div className="w-[34px] flex justify-center pt-2">
          <div className="w-[9px] h-[9px] bg-brand-dark rounded-full ring-4 ring-white" />
        </div>
        <div className="pt-0.5">
          <div className="text-[13px] font-bold text-brand-dark mb-0.5">
            {title}
          </div>
          <div className="text-[11px] text-[#999]">{endTime}</div>
        </div>
      </div>
    );
  }

  const isBlack = theme === "black";
  return (
    <div className="flex gap-5 items-start relative z-10 w-full mb-2">
      <div className="w-[40px] flex justify-center">
        {/* Time Pill */}
        <div
          className={clsx(
            "h-[22px] px-2.5 rounded-full text-[10px] font-bold flex items-center justify-center shadow-sm z-20",
            isBlack
              ? "bg-brand-dark text-white"
              : "bg-[#fcd34d] text-brand-dark",
          )}
        >
          {time}
        </div>
      </div>
      <div
        className={clsx(
          "flex-1 rounded-[20px] p-5 w-full",
          isBlack
            ? "bg-brand-dark text-white shadow-xl shadow-black/10"
            : "bg-white text-brand-dark shadow-[0_4px_20px_-5px_rgba(0,0,0,0.08)]",
        )}
      >
        <div className="flex justify-between items-start mb-1">
          <span className="text-[13px] font-bold">{title}</span>
          <span
            className={clsx(
              "w-1.5 h-1.5 rounded-full",
              isBlack ? "bg-[#fcd34d]" : "bg-brand-dark",
            )}
          ></span>
        </div>
        <div
          className={clsx(
            "text-[11px]",
            isBlack ? "opacity-60" : "text-[#999]",
          )}
        >
          {endTime}
        </div>
      </div>
    </div>
  );
};

const SalaryRow = ({
  img,
  name,
  role,
  salary,
  status,
  statusColor,
  checked,
  isDarkMode,
}: any) => (
  <tr
    className={clsx(
      "group border-b rounded-full transition-all duration-500",
      checked
        ? isDarkMode
          ? "bg-brand-primary/10 border-white/10"
          : "bg-brand-primary/20 border-transparent"
        : isDarkMode
          ? "border-white/10 hover:bg-white/5"
          : "border-transparent hover:bg-gray-50/50",
    )}
  >
    <td className="py-2.5 pl-1">
      <div
        className={clsx(
          "w-4 h-4 rounded-[5px] flex items-center justify-center transition-all duration-500 cursor-pointer",
          checked
            ? "bg-black text-white"
            : isDarkMode
              ? "border border-white/20 bg-white/5"
              : "border border-gray-300 bg-white",
        )}
      >
        {checked && <span className="text-[8px] font-bold">✓</span>}
      </div>
    </td>
    <td className="py-2.5 pl-2">
      <div className="flex items-center gap-3">
        <img
          src={img}
          alt={name}
          className="w-8 h-8 rounded-full object-cover shadow-sm bg-gray-100"
        />
        <span
          className={clsx(
            "text-[13px] font-bold transition-colors duration-500",
            isDarkMode ? "text-white" : "text-brand-dark",
          )}
        >
          {name}
        </span>
      </div>
    </td>
    <td
      className={clsx(
        "py-2.5 text-[12px] font-medium transition-colors duration-500",
        isDarkMode ? "text-gray-400" : "text-[#999]",
      )}
    >
      {role}
    </td>
    <td
      className={clsx(
        "py-2.5 text-[13px] font-bold transition-colors duration-500",
        isDarkMode ? "text-white" : "text-brand-dark",
      )}
    >
      {salary}
    </td>
    <td className="py-2.5">
      <span
        className={clsx(
          "h-6 px-3 rounded-[10px] text-[10px] font-bold flex w-fit items-center gap-1.5",
          statusColor,
        )}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40" />
        {status}
      </span>
    </td>
  </tr>
);

const KeywordRow = ({ keyword, intent, cpc, volume, kd, isDarkMode }: any) => {
  // Intent Color Logic
  let intentColor = "bg-gray-100 text-gray-400";
  if (intent === "Commercial")
    intentColor = "bg-blue-50 text-blue-500 border border-blue-100";
  if (intent === "Transactional")
    intentColor = "bg-green-50 text-green-500 border border-green-100";
  if (intent === "Informational")
    intentColor = "bg-yellow-50 text-yellow-600 border border-yellow-100";
  if (intent === "Navigational")
    intentColor = "bg-purple-50 text-purple-500 border border-purple-100";

  if (isDarkMode) {
    if (intent === "Commercial")
      intentColor = "bg-blue-500/10 text-blue-400 border border-blue-500/20";
    else if (intent === "Transactional")
      intentColor = "bg-green-500/10 text-green-400 border border-green-500/20";
    else if (intent === "Informational")
      intentColor =
        "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20";
    else if (intent === "Navigational")
      intentColor =
        "bg-purple-500/10 text-purple-400 border border-purple-500/20";
    else intentColor = "bg-white/10 text-gray-400 border border-white/10";
  }

  return (
    <div
      className={clsx(
        "grid grid-cols-12 items-center p-3 rounded-[16px] transition-all duration-300 group cursor-pointer",
        isDarkMode ? "hover:bg-white/5" : "hover:bg-gray-50 hover:shadow-sm",
      )}
    >
      <div className="col-span-4 flex items-center gap-3">
        <span
          className={clsx(
            "text-[13px] font-bold truncate",
            isDarkMode ? "text-white" : "text-brand-dark",
          )}
        >
          {keyword}
        </span>
      </div>
      <div className="col-span-2">
        <span
          className={`px-2.5 py-1 rounded-[8px] text-[10px] font-bold ${intentColor}`}
        >
          {intent.charAt(0)}
          <span className="hidden lg:inline">{intent.slice(1)}</span>
        </span>
      </div>
      <div
        className={clsx(
          "col-span-2 text-right text-[13px] font-medium pr-1",
          isDarkMode ? "text-gray-300" : "text-gray-600",
        )}
      >
        {volume}
      </div>
      <div
        className={clsx(
          "col-span-2 text-right text-[13px] font-medium pr-1",
          isDarkMode ? "text-gray-300" : "text-gray-600",
        )}
      >
        {cpc}
      </div>
      <div className="col-span-2 flex justify-end items-center gap-3">
        <div className="flex flex-col items-end w-full max-w-[80px]">
          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden dark:bg-white/10">
            <div
              className={clsx(
                "h-full rounded-full",
                kd > 60
                  ? "bg-red-500"
                  : kd > 40
                    ? "bg-yellow-500"
                    : "bg-green-500",
              )}
              style={{ width: `${kd}%` }}
            />
          </div>
        </div>
        <span
          className={clsx(
            "text-[11px] font-bold min-w-[20px] text-right",
            isDarkMode ? "text-white" : "text-black",
          )}
        >
          {kd}
        </span>
      </div>
    </div>
  );
};

const getWebsiteLogo = (url: string) => {
  const domain = url.replace(/(^\w+:|^)\/\//, "").split("/")[0];
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
};

const CompetitorRow = ({ url, da, pa, spam, links, rank, isDarkMode }: any) => {
  // Generate simple domain string for display
  const domain = url.replace(/(^\w+:|^)\/\//, "").split("/")[0];
  const logo = getWebsiteLogo(url);

  return (
    <div
      className={clsx(
        "grid grid-cols-12 items-center p-4 rounded-[20px] transition-all duration-300 group cursor-pointer border border-transparent",
        isDarkMode
          ? "hover:bg-white/5 hover:border-white/10"
          : "hover:bg-white hover:shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:border-gray-100",
      )}
    >
      <div className="col-span-3 flex items-center gap-3 overflow-hidden">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shrink-0">
          <img
            src={logo}
            alt="ico"
            className="w-5 h-5 opacity-80 object-contain"
          />
        </div>
        <div className="flex flex-col truncate pr-2">
          <span
            className={clsx(
              "text-[13px] font-bold truncate",
              isDarkMode ? "text-white" : "text-brand-dark",
            )}
          >
            {domain}
          </span>
          <span
            className={clsx(
              "text-[10px] truncate opacity-50",
              isDarkMode ? "text-gray-400" : "text-gray-500",
            )}
          >
            {url}
          </span>
        </div>
      </div>

      {/* DA */}
      <div className="col-span-1 flex items-center">
        <div
          className={clsx(
            "px-1.5 py-0.5 rounded text-[10px] font-bold",
            isDarkMode ? "bg-white/10 text-white" : "bg-gray-100 text-gray-700",
          )}
        >
          {da}
        </div>
      </div>

      {/* PA */}
      <div className="col-span-1 flex items-center">
        <div
          className={clsx(
            "px-1.5 py-0.5 rounded text-[10px] font-bold",
            isDarkMode ? "bg-white/10 text-white" : "bg-gray-100 text-gray-700",
          )}
        >
          {pa}
        </div>
      </div>

      <div className="col-span-2 flex items-center">
        <div
          className={clsx(
            "w-2 h-2 rounded-full mr-2",
            parseInt(spam) < 5 ? "bg-green-500" : "bg-red-500",
          )}
        ></div>
        <span
          className={clsx(
            "text-[12px] font-medium",
            isDarkMode ? "text-gray-400" : "text-gray-600",
          )}
        >
          {spam}
        </span>
      </div>

      <div
        className={clsx(
          "col-span-3 text-right text-[13px] font-bold",
          isDarkMode ? "text-white" : "text-brand-dark",
        )}
      >
        {links.toLocaleString()}
      </div>

      <div className="col-span-2 flex justify-end">
        <div
          className={clsx(
            "w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold shadow-sm",
            rank === 1
              ? "bg-[#FFD700] text-black"
              : rank === 2
                ? "bg-[#C0C0C0] text-black"
                : rank === 3
                  ? "bg-[#CD7F32] text-white"
                  : isDarkMode
                    ? "bg-white/10 text-white"
                    : "bg-white border text-gray-500",
          )}
        >
          {rank}
        </div>
      </div>
    </div>
  );
};
