"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Bell,
  Settings,
  User,
  Search,
  ArrowUpRight,
  TrendingDown,
  ChevronDown,
  Users,
  FolderOpen,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
} from "recharts";
import { m } from "framer-motion";

// --- Custom SVGs for Icons ---
const MarsIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="5" />
    <path d="M16 8 L21 3" />
    <path d="M17 3 L21 3 L21 7" />
  </svg>
);

const VenusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="9" r="5" />
    <path d="M12 14 L12 21" />
    <path d="M8 18 L16 18" />
  </svg>
);

// --- Mock Data ---

const scheduleData = [
  {
    time: "09:00",
    title: "Daily Sync",
    duration: "09:30am–10:00am",
    type: "dark",
    active: true,
    avatars: [],
  },
  {
    time: "10:00",
    empty: true,
  },
  {
    time: "11:00",
    title: "Task Review With Team",
    duration: "10:30am–11:30am",
    type: "light",
    active: false,
    avatars: [],
  },
  {
    time: "12:00",
    title: "Daily Meeting",
    duration: "12:00pm–01:00pm",
    type: "light",
    active: false,
    avatars: ["https://i.pravatar.cc/150?u=1", "https://i.pravatar.cc/150?u=2"],
  },
  { time: "01:00", empty: true },
  { time: "02:00", empty: true },
  { time: "03:00", empty: true },
];

const salaryData = [
  {
    id: 1,
    name: "Yulia Polishchuk",
    role: "Head of Design",
    salary: "$2,500",
    status: "Paid For",
    avatar: "https://i.pravatar.cc/150?u=yulia",
    checked: false,
  },
  {
    id: 2,
    name: "Bogdan Nikitin",
    role: "Front End Dev...",
    salary: "$3,000",
    status: "Absent",
    avatar: "https://i.pravatar.cc/150?u=bogdan",
    checked: true,
  },
  {
    id: 3,
    name: "Daria Yurchenko",
    role: "UX/UI Designer",
    salary: "$1,500",
    status: "Pending",
    avatar: "https://i.pravatar.cc/150?u=daria",
    checked: false,
  },
];

const hiringStatsData = [
  { name: "Jan", others: 120, design: 100 },
  { name: "Feb", others: 130, design: 110 },
  { name: "Mar", others: 125, design: 125 },
  { name: "Apr", others: 140, design: 120 },
  { name: "May", others: 135, design: 130 },
  { name: "Jun", others: 160, design: 140 }, // Peak
  { name: "Jul", others: 145, design: 135 },
  { name: "Aug", others: 150, design: 125 },
  { name: "Sep", others: 140, design: 120 },
  { name: "Oct", others: 135, design: 130 },
  { name: "Nov", others: 145, design: 140 },
  { name: "Dec", others: 155, design: 150 },
];

const employeeCompositionData = [
  { name: "Male", value: 70 },
  { name: "Female", value: 30 },
];

// --- Components ---

const HeaderStats = () => {
  const t = useTranslations("Dashboard.header");
  return (
    <div className="flex flex-col lg:flex-row justify-between items-end mb-5 gap-8 px-2 relative z-10">
      <div className="flex-1 w-full lg:w-auto">
        <h2 className="text-[40px] font-normal text-brand-primary mb-5 tracking-[-0.02em]">
          {t("greeting", { name: "Valentina" })}
        </h2>

        <div className="grid grid-cols-12 gap-2 items-center w-2/3">
          {/* Interviews - Large Dark Pill */}
          <div className="flex flex-col gap-1.5 col-span-6">
            <span className="text-xs text-neutral-400 pl-1 font-medium tracking-wide">
              {t("interviews")}
            </span>
            <div className="bg-brand-rich text-white p-3 rounded-4xl flex items-center shadow-xl shadow-black/5 relative overflow-hidden">
              <span className="text-sm font-medium relative z-10 opacity-80">
                70%
              </span>
            </div>
          </div>

          {/* Hired - Yellow Pill */}
          <div className="flex flex-col gap-1.5 col-span-2">
            <span className="text-xs text-neutral-400 pl-1 font-medium tracking-wide">
              {t("hired")}
            </span>
            <div className="bg-brand-primary text-white p-3 rounded-4xl flex items-center shadow-lg">
              <span className="text-sm font-medium">10%</span>
            </div>
          </div>

          {/* Project Time - Striped Pill */}
          <div className="flex flex-col gap-1.5 col-span-3">
            <span className="text-xs text-neutral-400 pl-1 font-medium tracking-wide">
              {t("projectTime")}
            </span>
            <div className="bg-muted text-brand-primary p-3 rounded-4xl flex items-center relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.1] dark:opacity-[0.05]"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    -45deg,
                    transparent,
                    transparent 6px,
                    var(--foreground) 6px,
                    var(--foreground) 12px
                  )`,
                }}
              />
              <span className="text-sm font-medium relative z-10">15%</span>
            </div>
          </div>

          {/* Output - Circle Chart Pill */}
          <div className="flex flex-col gap-1.5 col-span-1">
            <span className="text-xs text-neutral-400 pl-1 font-medium tracking-wide">
              {t("output")}
            </span>
            <div className="text-brand-primary p-3 pr-8 rounded-4xl flex items-center justify-center border border-border">
              <span className="text-sm text-neutral-500">5%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Stats Group */}
      <div className="flex gap-12 pb-1 pr-4">
        {/* Employee */}
        <div className="flex flex-col items-center gap-1">
          <div className="text-[36px] leading-tight font-light text-brand-primary">
            91
          </div>
          <div className="flex flex-col items-center gap-0 text-neutral-500 text-[10px] uppercase tracking-wider font-semibold">
            <div className="flex items-center gap-1.5 mb-0.5">
              <Users className="w-3.5 h-3.5" strokeWidth={2} />
              <span>{t("employee")}</span>
            </div>
          </div>
        </div>

        {/* Hirings */}
        <div className="flex flex-col items-center gap-1">
          <div className="text-[36px] leading-tight font-light text-brand-primary">
            104
          </div>
          <div className="flex flex-col items-center gap-0 text-neutral-500 text-[10px] uppercase tracking-wider font-semibold">
            <div className="flex items-center gap-1.5 mb-0.5">
              <FolderOpen className="w-3.5 h-3.5" strokeWidth={2} />
              <span>{t("hirings")}</span>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="flex flex-col items-center gap-1">
          <div className="text-[36px] leading-tight font-light text-brand-primary">
            185
          </div>
          <div className="flex flex-col items-center gap-0 text-neutral-500 text-[10px] uppercase tracking-wider font-semibold">
            <div className="flex items-center gap-1.5 mb-0.5">
              <div className="w-3.5 h-3.5 border border-current rounded flex items-center justify-center">
                <div className="w-1.5 h-0.5 bg-current"></div>
              </div>
              <span>{t("projects")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardPage = () => {
  const t = useTranslations("Dashboard");
  const [selectedSalaryIds, setSelectedSalaryIds] = useState<number[]>([2]);

  const toggleSalarySelection = (id: number) => {
    setSelectedSalaryIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Styling helper for the dot matrix
  const renderDotMatrix = () => {
    const cols = 14;
    const rows = 3;
    const matrix = [];

    for (let r = 0; r < rows; r++) {
      const rowDots = [];
      for (let c = 0; c < cols; c++) {
        let isActive = false;
        if (r === 2) isActive = true;
        if (r === 1 && c > 2) isActive = true;
        if (r === 0 && c > 5 && c < 12) isActive = true;

        const isYellow = isActive && c >= 6 && c <= 12;
        const isEmpty = !isActive;

        rowDots.push(
          <div
            key={`${r}-${c}`}
            className={cn(
              "w-1.5 h-1.5 rounded-full",
              isYellow ? "bg-brand-primary" : "bg-neutral-600",
              isEmpty && "bg-neutral-600 opacity-20"
            )}
          />
        );
      }
      matrix.push(
        <div key={r} className="flex gap-2.5">
          {rowDots}
        </div>
      );
    }
    return <div className="flex flex-col gap-2.5">{matrix}</div>;
  };

  return (
    <div className="container mx-auto px-6 pt-10 pb-8 max-w-[1600px]">
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <HeaderStats />
      </m.div>

      {/* Bento Grid Layout - Compact Gap */}
      <m.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-5"
      >
        {/* Schedule - Left Column (Span 3) - FROSTED GLASS */}
        <div className="col-span-1 md:col-span-4 lg:col-span-3 bg-white/40 backdrop-blur-xl rounded-[32px] p-5 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.02)] border border-white/20 relative overflow-hidden">
          {/* Title */}
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-lg font-normal text-brand-primary">
              {t("schedule.title")}
            </h3>
            {/* Arrow with WHITE background as requested */}
            <button className="w-8 h-8 rounded-full bg-white border border-white/20 flex items-center justify-center hover:shadow-md transition shadow-sm">
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
            </button>
          </div>

          {/* Calendar Days Strip */}
          <div className="flex justify-between items-center mb-5 px-1">
            {["sun", "mon", "tue", "wed", "thu", "fri", "sat"].map((d, i) => (
              <div
                key={d}
                className="flex flex-col items-center gap-0.5 group cursor-pointer"
              >
                <span
                  className={cn(
                    "text-[9px] uppercase font-medium",
                    i === 3 ? "text-[#1A1B1E]" : "text-neutral-400"
                  )}
                >
                  {t(`schedule.days.${d}`)}
                </span>
                <span
                  className={cn(
                    "text-xs font-semibold",
                    i === 3
                      ? "text-[#1A1B1E] text-sm"
                      : "text-neutral-400 opacity-60"
                  )}
                >
                  {22 + i}
                </span>
              </div>
            ))}
          </div>

          <div className="relative pl-0 space-y-3">
            {/* Vertical Line */}
            <div className="absolute left-[24px] top-3 bottom-3 w-px bg-neutral-300/40 z-0" />

            {scheduleData.map((item, idx) => (
              <div
                key={idx}
                className="relative flex gap-3 min-h-[46px] items-start group z-10"
              >
                {/* Time/Status Dot */}
                <div className="flex flex-col items-center min-w-[48px] pt-0.5">
                  <div
                    className={cn(
                      "w-12 h-7 rounded-full flex items-center justify-center border text-[10px] font-medium transition-all z-20 shadow-sm",
                      item.active || item.title === "Daily Sync"
                        ? "border-brand-rich text-white bg-brand-rich"
                        : "border-white/20 text-neutral-400 bg-white/40 backdrop-blur-sm",
                      item.title === "Daily Meeting" &&
                        "bg-brand-primary border-brand-primary text-white"
                    )}
                  >
                    {item.time}
                  </div>

                  {/* Dots connecting */}
                  {idx !== scheduleData.length - 1 && (
                    <div className="w-0.5 h-0.5 rounded-full bg-neutral-300 dark:bg-neutral-700 mt-2" />
                  )}
                </div>

                {/* Card */}
                {item.title ? (
                  <div
                    className={cn(
                      "flex-1 p-3.5 rounded-[20px] transition-all duration-300 hover:scale-[1.02] cursor-pointer",
                      item.type === "dark"
                        ? "bg-brand-rich text-white shadow-xl shadow-black/5"
                        : "bg-white/40 border border-white/20 text-brand-primary shadow-sm backdrop-blur-sm"
                    )}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-[13px] mb-0.5">
                          {item.title}
                        </h4>
                        <p
                          className={cn(
                            "text-[9px]",
                            item.type === "dark"
                              ? "opacity-60"
                              : "text-neutral-500"
                          )}
                        >
                          {item.duration}
                        </p>
                      </div>
                      {item.type === "dark" && (
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1" />
                      )}
                      {item.type === "light" && (
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1" />
                      )}
                    </div>

                    {/* Avatars */}
                    {item.avatars && item.avatars.length > 0 && (
                      <div className="flex -space-x-1.5 mt-2">
                        {item.avatars.map((src, i) => (
                          <div
                            key={i}
                            className="w-5 h-5 rounded-full border border-glass overflow-hidden relative"
                          >
                            <Image
                              src={src}
                              alt="user"
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="h-5" />
                )}
              </div>
            ))}

            {/* Expand Circle Button */}
            <div className="absolute bottom-[-6px] left-[14px] z-20">
              <div className="w-5 h-5 rounded-full bg-brand-rich flex items-center justify-center cursor-pointer hover:scale-110 transition shadow-md">
                <ChevronDown className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column (Span 6) */}
        <div className="col-span-1 md:col-span-8 lg:col-span-6 flex flex-col gap-5">
          {/* Salary Section - FROSTED GLASS */}
          <div className="bg-white/40 backdrop-blur-xl rounded-[32px] p-5 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.02)] flex-1 border border-white/20">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-normal text-brand-primary">
                {t("salaryTable.title")}
              </h3>
              <div className="relative group">
                <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-primary transition-colors" />
                <input
                  type="text"
                  placeholder={t("salaryTable.searchPlaceholder")}
                  className="pl-11 pr-5 py-2.5 rounded-full bg-white border-none shadow-sm text-sm focus:outline-none w-[140px] transition-all focus:w-[200px] focus:ring-1 focus:ring-border placeholder:text-neutral-400"
                />
              </div>
            </div>

            <div className="overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-neutral-400 text-[10px] font-medium border-b border-dashed border-border/50">
                    <th className="pb-2 pl-3 w-10">
                      <div className="w-3.5 h-3.5 rounded border border-border bg-white/10" />
                    </th>
                    <th className="pb-2 pl-0 font-normal">
                      {t("salaryTable.headers.name")}
                    </th>
                    <th className="pb-2 font-normal">
                      {t("salaryTable.headers.jobTitle")}
                    </th>
                    <th className="pb-2 font-normal">
                      {t("salaryTable.headers.netSalary")}
                    </th>
                    <th className="pb-2 font-normal">
                      {t("salaryTable.headers.status")}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {salaryData.map((row) => {
                    const isSelected = selectedSalaryIds.includes(row.id);
                    return (
                      <tr
                        key={row.id}
                        onClick={() => toggleSalarySelection(row.id)}
                        className={cn(
                          "group transition-all duration-200 cursor-pointer border-b border-transparent rounded-[16px]",
                          isSelected
                            ? "bg-brand-rich shadow-lg shadow-black/5 scale-[1.02]"
                            : "hover:bg-white/20"
                        )}
                      >
                        <td className={cn("py-3 pl-3 first:rounded-l-[16px]")}>
                          <div
                            className={cn(
                              "w-4 h-4 rounded-md border flex items-center justify-center transition-colors",
                              isSelected
                                ? "bg-brand-primary border-brand-primary text-white"
                                : "border-border bg-white/10 group-hover:border-neutral-400"
                            )}
                          >
                            {isSelected && (
                              <div className="w-1.5 h-1.5 bg-white rounded-[1px]" />
                            )}
                          </div>
                        </td>
                        <td className="py-3 pl-0">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden bg-muted border border-white/20">
                              <Image
                                src={row.avatar}
                                alt={row.name}
                                width={36}
                                height={36}
                              />
                            </div>
                            <span
                              className={cn(
                                "font-medium text-[14px]",
                                isSelected ? "text-white" : "text-brand-primary"
                              )}
                            >
                              {row.name}
                            </span>
                          </div>
                        </td>
                        <td
                          className={cn(
                            "py-3 font-medium text-[13px]",
                            isSelected ? "opacity-60" : "text-neutral-500"
                          )}
                        >
                          {row.role}
                        </td>
                        <td
                          className={cn(
                            "py-3 font-medium text-[14px]",
                            isSelected ? "text-white" : "text-brand-primary"
                          )}
                        >
                          {row.salary}
                        </td>
                        <td className="py-3 last:rounded-r-[16px]">
                          <span
                            className={cn(
                              "px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 w-fit border shadow-sm",
                              row.status === "Paid For" &&
                                "bg-[#F3F0FF]/60 text-[#7C3AED] border-[#E9D5FF]/60",
                              row.status === "Absent" &&
                                "bg-gray-100/60 text-[#6B7280] border-[#E5E7EB]/60",
                              row.status === "Pending" &&
                                "bg-[#ECFDF5]/60 text-[#059669] border-[#A7F3D0]/60"
                            )}
                          >
                            <div
                              className={cn(
                                "w-1.5 h-1.5 rounded-full",
                                row.status === "Paid For" && "bg-[#7C3AED]",
                                row.status === "Absent" && "bg-[#6B7280]",
                                row.status === "Pending" && "bg-[#059669]"
                              )}
                            />
                            {row.status === "Paid For"
                              ? t("salaryTable.status.paid")
                              : row.status === "Absent"
                              ? t("salaryTable.status.absent")
                              : t("salaryTable.status.pending")}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Hiring Statistics - FROSTED GLASS */}
          <div className="bg-white/40 backdrop-blur-xl rounded-[32px] p-5 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.02)] h-[240px] flex flex-col border border-white/20">
            <div className="flex justify-between items-center mb-0">
              <div className="flex items-center gap-6">
                <h3 className="text-lg font-normal text-brand-primary">
                  {t("hiringStats.title")}
                </h3>
                <div className="flex items-center gap-4 text-[10px] font-medium uppercase tracking-wide">
                  <span className="flex items-center gap-1.5 text-neutral-400">
                    <div className="w-2 h-2 rounded-full bg-brand-primary" />{" "}
                    {t("hiringStats.others")}
                  </span>
                  <span className="flex items-center gap-1.5 text-brand-primary">
                    <div className="w-2 h-2 rounded-full bg-brand-rich" />{" "}
                    {t("hiringStats.design")}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-neutral-600 bg-white border border-white/20 px-3 py-1.5 rounded-full cursor-pointer hover:bg-white dark:hover:bg-white/10 transition shadow-sm">
                2024 <ArrowUpRight className="w-3 h-3 text-neutral-400" />
              </div>
            </div>

            <div className="flex-1 w-full min-h-0 relative -ml-4 mt-2">
              <ResponsiveContainer width="102%" height="100%">
                <LineChart data={hiringStatsData}>
                  <CartesianGrid
                    vertical={false}
                    strokeDasharray="3 3"
                    stroke="#e5e5e5"
                  />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10, fill: "#9ca3af" }}
                    dy={10}
                    interval={0}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10, fill: "#9ca3af" }}
                    dx={-10}
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-brand-rich text-white text-xs py-1.5 px-3 rounded-lg shadow-xl flex items-center justify-center">
                            <span className="font-medium mr-1">
                              {t("hiringStats.others")}
                            </span>
                            <span className="opacity-70">12</span>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="others"
                    stroke="var(--color-brand-primary)"
                    strokeWidth={2}
                    dot={false}
                    strokeDasharray="4 4"
                  />
                  <Line
                    type="monotone"
                    dataKey="design"
                    stroke="var(--color-brand-rich)"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{
                      r: 6,
                      fill: "var(--color-brand-rich)",
                      stroke: "#fff",
                      strokeWidth: 2,
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>

              {/* Floating Label Highlight Mock */}
              <div className="absolute top-[35%] left-[45%] pointer-events-none flex flex-col items-center">
                <div className="mb-1.5 bg-brand-rich text-white text-[10px] py-1 px-3 rounded-full shadow-lg">
                  {t("hiringStats.others")} 12
                </div>
                <div className="h-[100px] w-px bg-border border-l border-dashed border-border-strong"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Span 3) */}
        <div className="col-span-1 md:col-span-4 lg:col-span-3 flex flex-col gap-5">
          {/* Attendance Report */}
          <div className="bg-brand-rich text-white rounded-[32px] p-6 shadow-xl flex flex-col justify-between h-[220px] relative overflow-hidden group">
            {/* Shine effect on card */}
            <div className="absolute top-[-50%] right-[-50%] w-full h-full bg-white/5 blur-3xl rounded-full" />

            <div className="flex justify-between items-start z-10">
              <h3 className="text-[17px] font-light opacity-90">
                {t("attendance.title")}
              </h3>
              <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition backdrop-blur-sm">
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
              </button>
            </div>

            <div className="z-10 mt-1">
              <div className="flex items-baseline gap-3">
                <span className="text-[36px] font-light leading-none">63</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />

                <span className="text-[36px] font-light opacity-40 leading-none ml-4">
                  12
                </span>
                <TrendingDown className="w-4 h-4 opacity-40" />
              </div>
            </div>

            {/* Dot Matrix Visualization */}
            <div className="z-10 mt-auto flex justify-between items-end pb-0 opacity-90">
              {renderDotMatrix()}
            </div>
          </div>

          {/* Employee Composition - FROSTED GLASS */}
          <div className="bg-white/40 backdrop-blur-xl rounded-[32px] p-5 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.02)] flex-1 flex flex-col items-center justify-center relative border border-white/20">
            <h3 className="absolute top-6 left-6 text-[17px] font-normal text-brand-primary">
              {t("employeeComposition.title")}
            </h3>

            <div className="w-[150px] h-[150px] relative mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={employeeCompositionData}
                    innerRadius={50}
                    outerRadius={60}
                    paddingAngle={0}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                    stroke="none"
                    cornerRadius={8}
                  >
                    <Cell key="male" fill="var(--color-brand-rich)" />
                    <Cell key="female" fill="var(--color-brand-primary)" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[32px] font-light text-brand-primary">
                  345
                </span>
                <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider mt-0.5">
                  Total
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-4 w-full justify-center">
              <div className="flex items-center gap-2">
                <span className="text-base text-brand-primary font-normal">
                  70%
                </span>
                <div className="bg-brand-rich rounded-full p-1">
                  <MarsIcon className="w-2.5 h-2.5 text-white" />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-base text-brand-primary font-normal">
                  30%
                </span>
                <div className="bg-brand-primary rounded-full p-1">
                  <VenusIcon className="w-2.5 h-2.5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </m.div>
    </div>
  );
};

export default DashboardPage;
