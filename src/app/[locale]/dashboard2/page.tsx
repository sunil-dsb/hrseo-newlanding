"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ArrowUpRight,
  TrendingUp,
  TrendingDown,
  ChevronDown,
  Settings,
  User,
  Moon,
} from "lucide-react";
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
} from "recharts";

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

// Employee icon
const EmployeeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="9" cy="7" r="4" />
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    <circle cx="17" cy="7" r="3" />
    <path d="M21 21v-2a3 3 0 0 0-3-3h-1" />
  </svg>
);

// Hirings icon (folder with arrow)
const HiringsIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    <path d="M12 11v6" />
    <path d="M9 14l3-3 3 3" />
  </svg>
);

// Projects icon (calendar/grid)
const ProjectsIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
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
    type: "yellow",
    active: false,
    avatars: [],
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
  { name: "Jan", others: 80, design: 60 },
  { name: "Feb", others: 100, design: 80 },
  { name: "Mar", others: 90, design: 95 },
  { name: "Apr", others: 110, design: 85 },
  { name: "May", others: 130, design: 100 },
  { name: "Jun", others: 160, design: 120 },
  { name: "Jul", others: 145, design: 135 },
  { name: "Aug", others: 130, design: 100 },
  { name: "Sep", others: 120, design: 90 },
  { name: "Oct", others: 140, design: 110 },
  { name: "Nov", others: 135, design: 125 },
];

const employeeCompositionData = [
  { name: "Male", value: 70 },
  { name: "Female", value: 30 },
];

// Navigation items
const navItems = [
  { name: "Dashboard", active: true },
  { name: "People", active: false },
  { name: "Hiring", active: false },
  { name: "Devices", active: false },
  { name: "Apps", active: false },
  { name: "Salary", active: false },
  { name: "Calendar", active: false },
  { name: "Reviews", active: false },
];

const Dashboard2Page = () => {
  const [selectedSalaryIds, setSelectedSalaryIds] = useState<number[]>([2]);

  const toggleSalarySelection = (id: number) => {
    setSelectedSalaryIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Dot matrix for attendance - exactly as in image
  const renderDotMatrix = () => {
    const rows = 7;
    const cols = 7;
    const matrix = [];

    // Pattern based on image - yellow dots form a wave pattern
    const yellowPattern = [
      [0, 0, 0, 0, 0, 1, 1],
      [0, 0, 0, 0, 1, 1, 1],
      [0, 0, 0, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
    ];

    for (let r = 0; r < rows; r++) {
      const rowDots = [];
      for (let c = 0; c < cols; c++) {
        const isYellow = yellowPattern[r]?.[c] === 1;
        rowDots.push(
          <div
            key={`${r}-${c}`}
            className={cn(
              "w-2 h-2 rounded-full",
              isYellow ? "bg-[#F5C542]" : "bg-[#3D4155]"
            )}
          />
        );
      }
      matrix.push(
        <div key={r} className="flex gap-2">
          {rowDots}
        </div>
      );
    }
    return <div className="flex flex-col gap-2">{matrix}</div>;
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FEF9E7 0%, #FCE9C0 30%, #F5DEB3 60%, #FEF5E7 100%)",
      }}
    >
      {/* Top Navigation */}
      <nav className="flex items-center justify-between px-10 py-5">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#1A1B26] flex items-center justify-center">
            <div className="w-3 h-3 border-2 border-white rounded-full" />
          </div>
          <span className="text-lg font-medium text-[#1A1B26]">Crextio</span>
        </div>

        {/* Center Navigation */}
        <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-2 py-1.5 shadow-sm">
          {navItems.map((item) => (
            <button
              key={item.name}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-all",
                item.active
                  ? "bg-[#1A1B26] text-white"
                  : "text-[#6B7280] hover:text-[#1A1B26]"
              )}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm text-[#6B7280]">
            <Settings className="w-4 h-4" />
            <span>Setting</span>
          </button>
          <button className="w-8 h-8 rounded-full bg-white/60 flex items-center justify-center">
            <Moon className="w-4 h-4 text-[#6B7280]" />
          </button>
          <button className="w-8 h-8 rounded-full bg-white/60 flex items-center justify-center">
            <User className="w-4 h-4 text-[#6B7280]" />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="px-10 pb-10">
        {/* Header with Stats */}
        <div className="flex justify-between items-end mb-6">
          {/* Left side - Greeting and Progress bars */}
          <div className="flex-1">
            <h1 className="text-[42px] font-normal text-[#1A1B26] mb-6">
              Hello Valentina
            </h1>

            {/* Progress Bars Row */}
            <div className="flex items-end gap-3">
              {/* Interviews - Long dark bar */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs text-[#9CA3AF] font-medium">
                  Interviews
                </span>
                <div className="bg-[#1A1B26] text-white px-4 py-2.5 rounded-full min-w-[280px] flex items-center">
                  <span className="text-sm font-medium opacity-80">70%</span>
                </div>
              </div>

              {/* Hired - Yellow small bar */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs text-[#9CA3AF] font-medium">
                  Hired
                </span>
                <div className="bg-[#F5C542] text-[#1A1B26] px-4 py-2.5 rounded-full flex items-center">
                  <span className="text-sm font-medium">10%</span>
                </div>
              </div>

              {/* Project time - Striped bar */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs text-[#9CA3AF] font-medium">
                  Project time
                </span>
                <div className="bg-[#F5F5F5] text-[#1A1B26] px-4 py-2.5 rounded-full flex items-center relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `repeating-linear-gradient(
                        -45deg,
                        transparent,
                        transparent 4px,
                        #1A1B26 4px,
                        #1A1B26 8px
                      )`,
                    }}
                  />
                  <span className="text-sm font-medium relative z-10">15%</span>
                </div>
              </div>

              {/* Output - Border only pill */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs text-[#9CA3AF] font-medium">
                  Output
                </span>
                <div className="border border-[#E5E7EB] text-[#9CA3AF] px-4 py-2.5 rounded-full flex items-center bg-transparent">
                  <span className="text-sm font-medium">5%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="flex gap-10 items-end">
            {/* Employee */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1.5 text-[#6B7280] mb-1">
                <EmployeeIcon />
              </div>
              <span className="text-[40px] font-light text-[#1A1B26] leading-none">
                91
              </span>
              <span className="text-xs text-[#9CA3AF] font-medium mt-1">
                Employee
              </span>
            </div>

            {/* Hirings */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1.5 text-[#6B7280] mb-1">
                <HiringsIcon />
              </div>
              <span className="text-[40px] font-light text-[#1A1B26] leading-none">
                104
              </span>
              <span className="text-xs text-[#9CA3AF] font-medium mt-1">
                Hirings
              </span>
            </div>

            {/* Projects */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1.5 text-[#6B7280] mb-1">
                <ProjectsIcon />
              </div>
              <span className="text-[40px] font-light text-[#1A1B26] leading-none">
                185
              </span>
              <span className="text-xs text-[#9CA3AF] font-medium mt-1">
                Projects
              </span>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-5">
          {/* Schedule - Left Column */}
          <div className="col-span-3 bg-white/70 backdrop-blur-sm rounded-[28px] p-5 shadow-sm">
            {/* Title */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-[#1A1B26]">Schedule</h3>
              <button className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm">
                <ArrowUpRight className="w-3.5 h-3.5 text-[#9CA3AF]" />
              </button>
            </div>

            {/* Calendar Days */}
            <div className="flex justify-between items-center mb-4 px-1">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d, i) => (
                <div key={d} className="flex flex-col items-center gap-0.5">
                  <span
                    className={cn(
                      "text-[10px] font-medium",
                      i === 2 ? "text-[#1A1B26]" : "text-[#9CA3AF]"
                    )}
                  >
                    {d}
                  </span>
                  <span
                    className={cn(
                      "text-sm font-semibold",
                      i === 2 ? "text-[#1A1B26]" : "text-[#9CA3AF] opacity-60"
                    )}
                  >
                    {23 + i}
                  </span>
                </div>
              ))}
            </div>

            {/* Schedule Items */}
            <div className="relative pl-0 space-y-2">
              {/* Vertical Line */}
              <div className="absolute left-[22px] top-4 bottom-4 w-px bg-[#E5E7EB] z-0" />

              {scheduleData.slice(0, 6).map((item, idx) => (
                <div
                  key={idx}
                  className="relative flex gap-3 min-h-[40px] items-start z-10"
                >
                  {/* Time Badge */}
                  <div className="flex flex-col items-center min-w-[44px] pt-0.5">
                    <div
                      className={cn(
                        "w-11 h-6 rounded-full flex items-center justify-center text-[9px] font-medium z-20",
                        item.title === "Daily Sync"
                          ? "bg-[#1A1B26] text-white"
                          : item.title === "Daily Meeting"
                          ? "bg-[#F5C542] text-[#1A1B26]"
                          : "bg-white text-[#9CA3AF] border border-[#E5E7EB]"
                      )}
                    >
                      {item.time}
                    </div>
                  </div>

                  {/* Card */}
                  {item.title ? (
                    <div
                      className={cn(
                        "flex-1 p-3 rounded-[18px] transition-all",
                        item.type === "dark"
                          ? "bg-[#1A1B26] text-white"
                          : item.type === "yellow"
                          ? "bg-[#FEF9E7] text-[#1A1B26] border border-[#F5C542]/30"
                          : "bg-white text-[#1A1B26] shadow-sm"
                      )}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-[12px] mb-0.5">
                            {item.title}
                          </h4>
                          <p
                            className={cn(
                              "text-[9px]",
                              item.type === "dark"
                                ? "opacity-60"
                                : "text-[#9CA3AF]"
                            )}
                          >
                            {item.duration}
                          </p>
                        </div>
                        <div
                          className={cn(
                            "w-1.5 h-1.5 rounded-full mt-1",
                            item.type === "dark"
                              ? "bg-[#F5C542]"
                              : item.type === "yellow"
                              ? "bg-[#F5C542]"
                              : "bg-[#F5C542]"
                          )}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="h-4" />
                  )}
                </div>
              ))}

              {/* Expand Button */}
              <div className="absolute bottom-[-10px] left-[12px] z-20">
                <div className="w-5 h-5 rounded-full bg-[#1A1B26] flex items-center justify-center cursor-pointer">
                  <ChevronDown className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="col-span-6 flex flex-col gap-5">
            {/* Salary Table */}
            <div className="bg-white/70 backdrop-blur-sm rounded-[28px] p-5 shadow-sm flex-1">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-lg font-medium text-[#1A1B26]">Salary</h3>
                <div className="relative">
                  <Search className="w-4 h-4 text-[#9CA3AF] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-9 pr-4 py-2 rounded-full bg-white border-none shadow-sm text-sm focus:outline-none w-[140px] placeholder:text-[#9CA3AF]"
                  />
                </div>
              </div>

              <table className="w-full">
                <thead>
                  <tr className="text-left text-[#9CA3AF] text-[11px] font-medium border-b border-dashed border-[#E5E7EB]">
                    <th className="pb-3 pl-2 w-10">
                      <div className="w-4 h-4 rounded border border-[#E5E7EB] bg-white" />
                    </th>
                    <th className="pb-3 font-normal">Name</th>
                    <th className="pb-3 font-normal">Job Title</th>
                    <th className="pb-3 font-normal">Net Salary</th>
                    <th className="pb-3 font-normal">Status</th>
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
                          "group transition-all cursor-pointer",
                          isSelected
                            ? "bg-[#1A1B26] rounded-[16px]"
                            : "hover:bg-white/50"
                        )}
                      >
                        <td
                          className={cn(
                            "py-3 pl-2",
                            isSelected && "rounded-l-[16px]"
                          )}
                        >
                          <div
                            className={cn(
                              "w-4 h-4 rounded border flex items-center justify-center",
                              isSelected
                                ? "bg-[#F5C542] border-[#F5C542]"
                                : "border-[#E5E7EB] bg-white"
                            )}
                          >
                            {isSelected && (
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 12 12"
                                fill="none"
                              >
                                <path
                                  d="M2 6l3 3 5-5"
                                  stroke="#1A1B26"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </div>
                        </td>
                        <td className="py-3">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full overflow-hidden bg-[#F5F5F5]">
                              <Image
                                src={row.avatar}
                                alt={row.name}
                                width={32}
                                height={32}
                              />
                            </div>
                            <span
                              className={cn(
                                "font-medium text-[13px]",
                                isSelected ? "text-white" : "text-[#1A1B26]"
                              )}
                            >
                              {row.name}
                            </span>
                          </div>
                        </td>
                        <td
                          className={cn(
                            "py-3 text-[12px]",
                            isSelected ? "text-white/60" : "text-[#6B7280]"
                          )}
                        >
                          {row.role}
                        </td>
                        <td
                          className={cn(
                            "py-3 font-medium text-[13px]",
                            isSelected ? "text-white" : "text-[#1A1B26]"
                          )}
                        >
                          {row.salary}
                        </td>
                        <td
                          className={cn(
                            "py-3",
                            isSelected && "rounded-r-[16px]"
                          )}
                        >
                          <span
                            className={cn(
                              "px-3 py-1.5 rounded-full text-[11px] font-medium flex items-center gap-1.5 w-fit",
                              row.status === "Paid For" &&
                                "bg-[#F3E8FF] text-[#9333EA]",
                              row.status === "Absent" &&
                                "bg-[#F3F4F6] text-[#6B7280]",
                              row.status === "Pending" &&
                                "bg-[#ECFDF5] text-[#10B981]"
                            )}
                          >
                            <div
                              className={cn(
                                "w-1.5 h-1.5 rounded-full",
                                row.status === "Paid For" && "bg-[#9333EA]",
                                row.status === "Absent" && "bg-[#6B7280]",
                                row.status === "Pending" && "bg-[#10B981]"
                              )}
                            />
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Hiring Statistics */}
            <div className="bg-white/70 backdrop-blur-sm rounded-[28px] p-5 shadow-sm h-[220px] flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-5">
                  <h3 className="text-lg font-medium text-[#1A1B26]">
                    Hiring Statistics
                  </h3>
                  <div className="flex items-center gap-4 text-[10px] font-medium">
                    <span className="flex items-center gap-1.5 text-[#6B7280]">
                      <div className="w-2 h-2 rounded-full bg-[#1A1B26]" />{" "}
                      Others
                    </span>
                    <span className="flex items-center gap-1.5 text-[#6B7280]">
                      <div className="w-2 h-2 rounded-full bg-[#F5C542]" />{" "}
                      Design
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-[#6B7280] bg-white px-3 py-1.5 rounded-full shadow-sm">
                  2024
                  <ChevronDown className="w-3 h-3" />
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>

              <div className="flex-1 w-full min-h-0 relative -ml-4 mt-2">
                <ResponsiveContainer width="103%" height="100%">
                  <LineChart data={hiringStatsData}>
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 10, fill: "#9CA3AF" }}
                      dy={10}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 10, fill: "#9CA3AF" }}
                      dx={-10}
                      domain={[0, 200]}
                      ticks={[50, 100, 150, 200]}
                    />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-[#1A1B26] text-white text-xs py-1.5 px-3 rounded-lg shadow-xl">
                              <span className="font-medium mr-1">Others</span>
                              <span className="opacity-70">
                                {payload[0]?.value}
                              </span>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="others"
                      stroke="#1A1B26"
                      strokeWidth={2}
                      dot={false}
                      strokeDasharray="4 4"
                    />
                    <Line
                      type="monotone"
                      dataKey="design"
                      stroke="#F5C542"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>

                {/* Floating tooltip */}
                <div className="absolute top-[25%] left-[48%] pointer-events-none flex flex-col items-center">
                  <div className="mb-1.5 bg-[#1A1B26] text-white text-[10px] py-1 px-3 rounded-full shadow-lg">
                    Others 12
                  </div>
                  <div className="h-[70px] w-px border-l border-dashed border-[#1A1B26]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-3 flex flex-col gap-5">
            {/* Attendance Report */}
            <div className="bg-[#1A1B26] text-white rounded-[28px] p-5 shadow-xl flex flex-col h-[200px] relative overflow-hidden">
              <div className="flex justify-between items-start">
                <h3 className="text-[16px] font-normal opacity-90">
                  Attendance Report
                </h3>
                <button className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                </button>
              </div>

              <div className="mt-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-[32px] font-light leading-none">
                    63
                  </span>
                  <TrendingUp className="w-4 h-4 opacity-60" />
                  <span className="text-[32px] font-light opacity-40 leading-none ml-3">
                    12
                  </span>
                  <TrendingDown className="w-4 h-4 opacity-40" />
                </div>
              </div>

              {/* Dot Matrix */}
              <div className="mt-auto flex justify-end">
                {renderDotMatrix()}
              </div>
            </div>

            {/* Employee Composition */}
            <div className="bg-white/70 backdrop-blur-sm rounded-[28px] p-5 shadow-sm flex-1 flex flex-col">
              <h3 className="text-[16px] font-medium text-[#1A1B26] mb-3">
                Employee Composition
              </h3>

              <div className="flex-1 flex items-center justify-center">
                <div className="w-[130px] h-[130px] relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={employeeCompositionData}
                        innerRadius={45}
                        outerRadius={55}
                        paddingAngle={0}
                        dataKey="value"
                        startAngle={90}
                        endAngle={-270}
                        stroke="none"
                      >
                        <Cell key="male" fill="#1A1B26" />
                        <Cell key="female" fill="#F5C542" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>

                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[28px] font-light text-[#1A1B26]">
                      345
                    </span>
                    <span className="text-[9px] text-[#9CA3AF] font-medium uppercase tracking-wider">
                      Total
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 justify-center mt-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#1A1B26] font-medium">
                    70%
                  </span>
                  <div className="bg-[#1A1B26] rounded-full p-1">
                    <MarsIcon className="w-2.5 h-2.5 text-white" />
                  </div>
                </div>
                <span className="text-[#E5E7EB]">•</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#1A1B26] font-medium">
                    30%
                  </span>
                  <div className="bg-[#F5C542] rounded-full p-1">
                    <VenusIcon className="w-2.5 h-2.5 text-[#1A1B26]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard2Page;
