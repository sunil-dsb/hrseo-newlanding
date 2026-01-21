"use client";

import {
  Bell,
  ChevronRight,
  LayoutGrid,
  Search,
  Settings,
  User,
  ArrowUpRight,
  Target,
  Clock,
  Menu,
} from "lucide-react";
import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  ScatterChart,
  Scatter,
  ZAxis,
} from "recharts";
import { cn } from "@/lib/utils";

// --- Mock Data ---

// Donut Chart Data
const qualityData = [
  { name: "Quality", value: 100 },
  { name: "Other", value: 0 },
];

// OEE by MFG Type
const oeeByMfgData = [
  {
    name: "Generic Time",
    value: 21711,
    fill: "#d1d5db", // gray-300
    label: "21,711h",
  },
  {
    name: "Injection Time",
    value: 38922,
    fill: "#bef264", // lime-300 (adjust to match #ccff00 approx)
    label: "38,922h",
  },
  {
    name: "Generic Time 2", // dummy to match layout if needed, or strictly 2 bars
    value: 0,
    fill: "transparent",
  },
];

// OEE Trend Average Annual - Stepped Bar Chart Simulation
const oeeTrendData = [
  { name: "Injective", value: 37.1, fill: "#a78bfa" }, // purple-400
  { name: "Generic 1", value: 45.2, fill: "#c084fc" }, // slightly different purple?
  { name: "Generic 2", value: 58.5, fill: "#a78bfa" },
  { name: "Injective 2", value: 77.2, fill: "#d8b4fe" }, // lighter purple
];

// Production and Total Downtime Hours
const productionDowntimeData = [
  { name: "1", prod: 40, down: 20 },
  { name: "2", prod: 60, down: 30 },
  { name: "3", prod: 45, down: 15 },
  { name: "4", prod: 90, down: 40 }, // The distinctive white peak
  { name: "5", prod: 50, down: 25 },
  { name: "6", prod: 70, down: 35 },
  { name: "7", prod: 30, down: 10 },
  { name: "8", prod: 40, down: 20 },
  { name: "9", prod: 60, down: 30 },
];

// Standard and Actual Parts (Scatter/Bubble)
const scatterData = [
  { x: 10, y: 30, z: 200, fill: "#bef264" }, // lime
  { x: 30, y: 50, z: 400, fill: "#ffffff" }, // white
  { x: 50, y: 20, z: 300, fill: "#a78bfa" }, // purple
  { x: 70, y: 60, z: 500, fill: "#ffffff" },
  { x: 20, y: 80, z: 250, fill: "#bef264" },
  { x: 80, y: 30, z: 350, fill: "#a78bfa" },
  { x: 40, y: 40, z: 200, fill: "#3f3f46" }, // dark grey/outline?
];

// Scrap % by MFG Type (Area)
const scrapData = [
  { name: "1", value: 20 },
  { name: "2", value: 40 },
  { name: "3", value: 30 },
  { name: "4", value: 70 },
  { name: "5", value: 50 },
  { name: "6", value: 60 },
  { name: "7", value: 40 },
];

// Top Row Stats
const topStats = [
  { label: "EPlant", value: "2" },
  { label: "Mfg Type", value: "GEN" },
  { label: "Mfg Cell", value: "INJ" },
  { label: "Product", value: "15,191" },
  { label: "Downtime", value: "59.1%" },
  { label: "Total Downtime", value: "28,770h" },
  { label: "Available Actual", value: "45,990h" },
];

export default function Dashboard9Page() {
  return (
    <div className="min-h-screen w-full relative bg-[#4a4542] text-white font-sans overflow-hidden p-6 flex items-center justify-center">
      {/* Background Simulation - blurred image effect */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #6d6460 0%, #2b2624 100%)",
        }}
      />
      {/* Glass Container */}
      <div className="relative z-10 w-full max-w-[1600px] h-[90vh] bg-white/10 backdrop-blur-2xl rounded-[40px] border border-white/10 shadow-2xl flex flex-col overflow-hidden p-8">
        {/* Header & Nav */}
        <div className="flex justify-between items-center mb-8">
          {/* Logo area */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-[#bef264] flex items-center justify-center">
              <div className="w-4 h-4 rounded-full border-2 border-white/80" />
            </div>
            <span className="text-xl font-semibold tracking-wide text-white/90">
              IQMS
            </span>
          </div>

          {/* Nav Pills */}
          <div className="flex items-center bg-black/20 rounded-full p-1 gap-1">
            <button className="px-6 py-2 bg-white rounded-full text-black text-sm font-semibold shadow-sm">
              Manufacturing Summary
            </button>
            <button className="px-6 py-2 text-white/70 text-sm font-medium hover:text-white transition-colors">
              Availability Analysis
            </button>
            <button className="px-6 py-2 text-white/70 text-sm font-medium hover:text-white transition-colors">
              Reject Analysis
            </button>
            <button className="px-6 py-2 text-white/70 text-sm font-medium hover:text-white transition-colors">
              Delivery Analysis
            </button>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <LayoutGrid className="w-5 h-5 text-white/80" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors relative">
              <Bell className="w-5 h-5 text-white/80" />
              <div className="absolute top-2.5 right-3 w-1.5 h-1.5 bg-[#bef264] rounded-full" />
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
              <Image
                src="https://i.pravatar.cc/150?u=admin"
                alt="User"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="flex h-full gap-8">
          {/* Left Sidebar */}
          <div className="w-[28%] flex flex-col">
            <h1 className="text-[42px] font-normal leading-[1.1] mb-8 text-white/90">
              Manufacturing
              <br />
              Summary Page
            </h1>

            {/* Donut Chart */}
            <div className="relative h-[300px] w-full flex items-center justify-center mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <defs>
                    <pattern
                      id="stripe-pattern"
                      patternUnits="userSpaceOnUse"
                      width="4"
                      height="4"
                      patternTransform="rotate(45)"
                    >
                      <rect
                        width="2"
                        height="4"
                        fill="#a78bfa"
                        fillOpacity="0.3"
                      />
                    </pattern>
                  </defs>
                  <Pie
                    data={qualityData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={110}
                    startAngle={90}
                    endAngle={-270}
                    dataKey="value"
                    stroke="none"
                  >
                    <Cell key="cell-0" fill="#ccff00" />
                    <Cell key="cell-1" fill="transparent" />
                  </Pie>
                  {/* Inner Stripe Circle Simulation */}
                  <Pie
                    data={[{ value: 100 }]}
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={80}
                    fill="url(#stripe-pattern)"
                    stroke="none"
                    isAnimationActive={false}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-bold text-white">100%</span>
                <span className="text-xs text-white/60">Quality</span>
              </div>
            </div>

            {/* Left Stats Grid */}
            <div className="grid grid-cols-3 gap-y-8 gap-x-2 mt-auto pb-4">
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-semibold">38.7%</span>
                <div className="flex items-center gap-1.5 text-[10px] text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  OEE Actual
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-semibold">40.8%</span>
                <div className="flex items-center gap-1.5 text-[10px] text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                  Availability
                  <br />
                  Actual
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-semibold">94.9%</span>
                <div className="flex items-center gap-1.5 text-[10px] text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
                  Performance
                  <br />
                  Actual
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-2xl font-semibold">46,202</span>
                <div className="flex items-center gap-1.5 text-[10px] text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" />
                  Production
                  <br />
                  Hours
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-semibold">99,550</span>
                <div className="flex items-center gap-1.5 text-[10px] text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  Total Good
                  <br />
                  Parts
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-semibold">0.06%</span>
                <div className="flex items-center gap-1.5 text-[10px] text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
                  Scrap
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Top Stats Strip */}
            <div className="flex items-start justify-between bg-black/20 rounded-[20px] p-5 backdrop-blur-md">
              {topStats.map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-1 pr-6 border-r border-white/10 last:border-0 last:pr-0"
                >
                  <span className="text-[11px] font-medium text-white/50">
                    {stat.label}
                  </span>
                  <span className="text-lg font-medium text-white/90">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Charts Row 1 */}
            <div className="grid grid-cols-12 gap-4 h-[240px]">
              {/* OEE by MFG Type - White Card */}
              <div className="col-span-5 bg-white rounded-[24px] p-5 text-black relative flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm font-medium text-gray-500">
                    OEE by MFG Type
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center -mt-1 -mr-1 rotate-45">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-semibold tracking-tight">
                    12,1%
                  </span>
                  <div className="text-xs text-red-500 font-medium mt-1">
                    -2.2%/month
                  </div>
                </div>

                {/* Custom Horizontal Bar Chart Simulation */}
                <div className="flex-1 flex flex-col justify-end gap-3 mt-auto">
                  <div className="flex items-end gap-2 group">
                    <div
                      className="h-6 bg-transparent border border-black/10 w-full relative overflow-hidden rounded-sm stripe-bg"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(45deg, #d1d5db 0, #d1d5db 2px, transparent 2px, transparent 4px)",
                      }}
                    />
                    <div className="flex flex-col items-end min-w-[70px]">
                      <span className="text-sm font-bold">21,711h</span>
                      <span className="text-[9px] text-gray-500">
                        Generic Time
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-0">
                    <div className="h-[40px] bg-black w-[40%] rounded-l-sm" />
                    <div className="h-[40px] bg-[#ccff00] w-[60%] rounded-r-sm" />
                    <div className="flex flex-col items-end ml-auto min-w-[70px]">
                      <span className="text-sm font-bold">38,922h</span>
                      <span className="text-[9px] text-gray-500">
                        Injection Time
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* OEE Trend - Purple Card */}
              <div className="col-span-7 bg-[#a78bfa] rounded-[24px] p-5 text-white relative flex flex-col overflow-hidden">
                <div className="flex justify-between items-start mb-2 z-10">
                  <span className="text-sm font-medium text-white/80">
                    OEE Trend Average Annual
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center -mt-1 -mr-1">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="mb-6 z-10">
                  <span className="text-4xl font-bold tracking-tight">
                    14,7%
                  </span>
                  <div className="text-xs text-[#ccff00] font-medium mt-1">
                    +21%/year
                  </div>
                </div>

                <div className="absolute inset-0 top-[20%] w-full h-full">
                  <ResponsiveContainer width="100%" height="90%">
                    <BarChart data={oeeTrendData} barSize={60} barGap={0}>
                      <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                        {oeeTrendData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={entry.fill}
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth={1}
                          />
                        ))}
                      </Bar>
                      <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 10 }}
                        dy={5}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                {/* Horizontal line indicator */}
                <div className="absolute left-6 right-6 top-[65%] h-[2px] bg-red-400/80 z-20 flex items-center">
                  <span className="text-[9px] font-bold text-red-500 -mt-4 ml-1">
                    37.1%
                  </span>
                </div>
              </div>
            </div>

            {/* Charts Row 2 */}
            <div className="grid grid-cols-3 gap-4 h-[240px]">
              {/* Production and Total Downtime Hours */}
              <div className="bg-black/20 backdrop-blur-lg rounded-[24px] p-5 text-white flex flex-col relative">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[11px] font-medium text-white/70 max-w-[120px] leading-tight">
                    Production and Total Downtime Hours
                  </span>
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3 text-white/70" />
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-light">75,2%</span>
                  <div className="text-[10px] text-[#ccff00] mt-0.5">
                    +12%/month
                  </div>
                </div>
                <div className="flex-1 w-full -ml-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={productionDowntimeData}>
                      <Bar
                        dataKey="prod"
                        stackId="a"
                        fill="#a78bfa"
                        radius={[2, 2, 2, 2]}
                      />
                      <Bar
                        dataKey="down"
                        stackId="a"
                        fill="#ccff00"
                        radius={[2, 2, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Standart and Actual Parts */}
              <div className="bg-black/20 backdrop-blur-lg rounded-[24px] p-5 text-white flex flex-col relative">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[11px] font-medium text-white/70 max-w-[120px] leading-tight">
                    Standart and Actual Parts
                  </span>
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3 text-white/70" />
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-light">62,1%</span>
                  <div className="text-[10px] text-red-400 mt-0.5">
                    -5%/month
                  </div>{" "}
                  // Assuming red based on image
                </div>
                <div className="flex-1 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart
                      margin={{ top: 10, right: 10, bottom: 0, left: 0 }}
                    >
                      <Scatter name="Parts" data={scatterData} fill="#8884d8">
                        {scatterData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Scatter>
                      <ZAxis dataKey="z" range={[50, 400]} />
                    </ScatterChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Scrap % by MFG Type */}
              <div className="bg-black/20 backdrop-blur-lg rounded-[24px] p-5 text-white flex flex-col relative">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[11px] font-medium text-white/70 max-w-[120px] leading-tight">
                    Scrap % by MFG Type
                  </span>
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3 text-white/70" />
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-light">0.06%</span>
                  <div className="text-[10px] text-[#ccff00] mt-0.5">
                    -0.02%/month
                  </div>
                </div>
                <div className="flex-1 w-full min-h-0 relative -left-2 -bottom-2">
                  <ResponsiveContainer width="110%" height="100%">
                    <AreaChart data={scrapData}>
                      <defs>
                        <linearGradient
                          id="colorScrap"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#a78bfa"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#a78bfa"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#bef264"
                        fillOpacity={1}
                        fill="url(#colorScrap)"
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
