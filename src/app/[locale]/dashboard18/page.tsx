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
              <div className="col-span-3">
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
                      {/* <tr className="h-4"></tr> */}
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
