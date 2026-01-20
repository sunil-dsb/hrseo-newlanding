"use client";

import React from "react";
import {
  Bell,
  Settings,
  Search,
  Filter,
  Download,
  Layout,
  ShieldCheck,
  Plus,
  MoreHorizontal,
  Calendar,
  ClipboardList,
  ChevronDown,
} from "lucide-react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  ReferenceLine,
} from "recharts";
import { cn } from "@/lib/utils";

// --- Mock Data ---

const pendingReportData = [
  { name: "Jan", report: 18, noReport: 10 },
  { name: "Feb", report: 18, noReport: 16 },
  { name: "Mar", report: 24, noReport: 18 },
  { name: "Apr", report: 20, noReport: 25 },
];

const trendData = [
  { name: "Mon", value: 30 },
  { name: "Tue", value: 45 },
  { name: "Wed", value: 60 },
  { name: "Thu", value: 85 },
];

const healthReportData = [
  { name: "Jan", value: 45, status: "progress" },
  { name: "Feb", value: 75, status: "recovery" }, // The high blue one
  { name: "Mar", value: 35, status: "progress" },
  { name: "Apr", value: 50, status: "progress" },
  { name: "May", value: 48, status: "recovery" },
  { name: "Jun", value: 60, status: "progress" },
];

const doctors = [
  {
    name: "Dr.Leslie Alexander",
    hospital: "Hasan Sadikin Hospital",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Dr.Savannah Nguyen",
    hospital: "Hasan Sadikin Hospital",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Dr.Darlene Robertson",
    hospital: "Hasan Sadikin Hospital",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=100&q=80",
  },
];

// --- Components ---

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-white rounded-[2rem] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100/50",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FB] p-6 font-sans text-slate-900 selection:bg-blue-100">
      <div className="max-w-[1600px] mx-auto space-y-8">
        {/* --- Top Navbar --- */}
        <nav className="flex items-center justify-between bg-white rounded-full px-6 py-3 shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center text-blue-600">
              {/* Hexagon/Flower Logo approximation */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M12 2L14.5 6.5H19.5L15.5 10.5L17 15.5L12 13L7 15.5L8.5 10.5L4.5 6.5H9.5L12 2Z" />
                <circle cx="12" cy="12" r="3" className="text-blue-200" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-800">
              Youcare
            </span>
          </div>

          {/* Center Tabs */}
          <div className="hidden md:flex items-center gap-x-1">
            {["Dashboard", "Patient", "Appointment", "Report"].map((tab) => (
              <button
                key={tab}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-semibold transition-all",
                  tab === "Dashboard"
                    ? "bg-[#3B82F6] text-white shadow-lg shadow-blue-500/30"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900",
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Settings size={22} strokeWidth={1.5} />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors relative">
              <Bell size={22} strokeWidth={1.5} />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-blue-500 rounded-full border border-white"></span>
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </nav>

        {/* --- Header & Greeting --- */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
            Good Morning, Selena!
          </h1>
          <button className="flex items-center gap-2 px-6 py-3 bg-[#3B82F6] text-white rounded-full text-sm font-semibold shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition-all active:scale-95">
            <Plus size={18} /> Check new
          </button>
        </div>

        {/* --- Filters Bar --- */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full xl:w-auto">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-gray-100 text-sm font-semibold text-gray-600 hover:bg-gray-50 shadow-sm">
              <Filter size={16} /> Filter
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-gray-100 text-sm font-semibold text-gray-600 hover:bg-gray-50 shadow-sm">
              <Calendar size={16} /> Monthly{" "}
              <ChevronDown size={14} className="ml-1 opacity-50" />
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-transparent text-sm font-semibold text-gray-500 hover:text-gray-900">
              <Download size={16} /> Download Data
            </button>
          </div>

          <div className="flex items-center gap-4 w-full xl:w-auto justify-end">
            <button className="p-3 bg-white rounded-full text-gray-400 hover:text-blue-500 shadow-sm transition-colors">
              <Search size={20} />
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-gray-100 text-sm font-bold text-gray-600 hover:bg-gray-50 shadow-sm">
              <ShieldCheck size={18} className="text-gray-400" /> Support
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-gray-100 text-sm font-bold text-gray-600 hover:bg-gray-50 shadow-sm">
              <Layout size={18} className="text-gray-400" /> Content Layout
            </button>
          </div>
        </div>

        {/* --- Main Dashboard Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-12 gap-6">
          {/* Row 1, Col 1: Health Report Pending */}
          <Card className="col-span-1 lg:col-span-2 xl:col-span-3 flex flex-col justify-between min-h-[320px]">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-slate-800">
                Health Report Pending
              </h3>
              <button className="text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
                Report
              </button>
            </div>

            <div className="flex gap-2 mb-6">
              <span className="px-3 py-1.5 bg-[#1e293b] text-white rounded-full text-[10px] font-bold shadow-md">
                15 Report
              </span>
              <span className="px-3 py-1.5 bg-white border border-blue-100 text-blue-400 rounded-full text-[10px] font-bold">
                10 No Report
              </span>
            </div>

            <div className="h-[180px] w-full mt-auto relative">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={pendingReportData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#F1F5F9"
                  />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 500 }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 500 }}
                    width={30}
                  />
                  <Line
                    type="monotone"
                    dataKey="noReport"
                    stroke="#cbd5e1"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="report"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={{
                      r: 4,
                      fill: "#3b82f6",
                      strokeWidth: 2,
                      stroke: "#fff",
                    }}
                    activeDot={{ r: 6, fill: "#3b82f6", strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
              {/* Vertical Dashed Line Indicator simulation for "Feb" */}
              <div className="absolute top-0 left-[38%] h-[80%] border-l-2 border-dashed border-blue-200 pointer-events-none"></div>
            </div>
          </Card>

          {/* Row 1, Col 2: News From The Doctor */}
          <Card className="col-span-1 lg:col-span-2 xl:col-span-3 bg-[#3B82F6] text-white border-none relative overflow-hidden flex flex-col justify-between min-h-[320px]">
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400 opacity-20 rounded-full blur-xl"></div>

            <div className="relative z-10 flex justify-between items-start">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-[10px] font-semibold text-white">
                Today's info
              </span>
            </div>

            <div className="relative z-10 mt-6 md:mt-auto">
              <h3 className="text-xl font-bold mb-3">News From The Doctor</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-6 opacity-90">
                Our process is designed to make booking appointments,
                consultations, and treatments easy and convenient for you.
              </p>

              {/* Progress indicator */}
              <div className="flex items-center gap-1.5">
                <div className="h-1.5 w-12 bg-white rounded-full"></div>
                <div className="h-1.5 w-1.5 bg-white/40 rounded-full"></div>
                <div className="h-1.5 w-1.5 bg-white/40 rounded-full"></div>
                <div className="h-1.5 w-1.5 bg-white/40 rounded-full"></div>
              </div>
            </div>
          </Card>

          {/* Row 1, Col 3: Health Trend Chart */}
          <Card className="col-span-1 lg:col-span-2 xl:col-span-3 flex flex-col min-h-[320px]">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-lg font-bold text-slate-800">
                Health Trend Chart
              </h3>
              <MoreHorizontal className="text-gray-300" />
            </div>

            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-4xl font-bold text-slate-800">85%</span>
              <span className="px-2 py-0.5 bg-blue-50 text-blue-500 text-[10px] font-bold rounded-full">
                +0.75%
              </span>
            </div>

            <div className="h-[150px] w-full mt-auto">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trendData}>
                  <defs>
                    <linearGradient id="colorTrend" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.1} />
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={true}
                    horizontal={false}
                    stroke="#E2E8F0"
                    opacity={0.5}
                  />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 500 }}
                    dy={10}
                  />
                  <Area
                    type="basis"
                    dataKey="value"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    fill="url(#colorTrend)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Row 1, Col 4: Checkup Progress */}
          <Card className="col-span-1 lg:col-span-2 xl:col-span-3 min-h-[320px]">
            <div className="flex justify-between items-start mb-8">
              <h3 className="text-lg font-bold text-slate-800">
                Checkup progress
              </h3>
              <MoreHorizontal className="text-gray-300" />
            </div>

            <div className="space-y-8">
              {/* Item 1 */}
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                    <Calendar size={18} />
                  </div>
                  <span className="font-bold text-sm text-slate-700">
                    22 Agustus, 2024
                  </span>
                </div>
                <div className="h-2 w-full bg-blue-50 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 w-[30%] rounded-full"></div>
                </div>
              </div>

              {/* Item 2 */}
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                    <ClipboardList size={18} />
                  </div>
                  <span className="font-bold text-sm text-slate-700">
                    16 Agustus, 2024
                  </span>
                </div>
                <div className="h-2 w-full bg-blue-50 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 w-[65%] rounded-full"></div>
                </div>
              </div>
            </div>
          </Card>

          {/* Row 2, Col 1: Medical Information */}
          <Card className="col-span-1 lg:col-span-2 xl:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-slate-800">
                Medical Information
              </h3>
              <button className="text-blue-500 text-xs font-bold hover:underline">
                See Details
              </button>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                alt="Cameron"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-slate-800 text-sm">
                  Cameron Williamson
                </h4>
                <p className="text-xs text-gray-500">Pasien</p>
              </div>
              <div className="ml-auto">
                {/* Fake QR Code */}
                <div className="w-10 h-10 bg-gray-900 rounded-md p-0.5 opacity-80">
                  <div className="w-full h-full border-2 border-white border-dashed"></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-y-6 gap-x-2">
              <div>
                <p className="text-[10px] text-gray-400 font-semibold mb-1">
                  Medical History
                </p>
                <p className="text-xs font-bold text-slate-800">
                  Medical inpatient care
                </p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-semibold mb-1">
                  Current Medications
                </p>
                <p className="text-xs font-bold text-slate-800">
                  Herbal medicine
                </p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-semibold mb-1">
                  Allergies
                </p>
                <p className="text-xs font-bold text-slate-800">
                  No allergies present
                </p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-semibold mb-1">
                  Primary Physician
                </p>
                <p className="text-xs font-bold text-slate-800">
                  Dr.Leslie Alexander
                </p>
              </div>
            </div>
          </Card>

          {/* Row 2, Col 2: Patient Health Report (Spans 6) */}
          <Card className="col-span-1 lg:col-span-4 xl:col-span-6 relative">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-slate-800">
                Patient health report
              </h3>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full border border-gray-300"></div>
                  <span className="text-xs text-gray-400">Progress</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-xs text-gray-500 font-medium">
                    Recovery
                  </span>
                </div>
                <button className="text-blue-500 text-xs font-bold hover:underline ml-4">
                  See Details
                </button>
              </div>
            </div>

            {/* Custom Floating Tooltip (Hardcoded for fidelity) */}
            <div className="absolute top-[35%] left-[34%] z-20">
              <div className="bg-[#1e293b] text-white p-3 rounded-xl shadow-xl flex flex-col gap-1 min-w-[140px] transform translate-x-1/2">
                <div className="w-3 h-3 bg-[#1e293b] absolute -left-1.5 top-4 transform rotate-45"></div>
                <span className="text-xs font-semibold text-gray-400 mb-1">
                  Monday
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                  <span className="text-[10px] font-medium">
                    towards recovery
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                  <span className="text-[10px] font-medium text-gray-400">
                    treatment process
                  </span>
                </div>
              </div>
            </div>

            <div className="h-[200px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={healthReportData} barSize={40}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#F1F5F9"
                  />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 500 }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 500 }}
                    width={30}
                  />
                  {/* Dashed Line for Avg */}
                  <ReferenceLine
                    y={50}
                    stroke="#94a3b8"
                    strokeDasharray="4 4"
                  />
                  <Bar dataKey="value" radius={[10, 10, 10, 10]}>
                    {healthReportData.map((entry, index) => (
                      <Cell
                        key={`cell-\${index}`}
                        fill={
                          entry.status === "recovery"
                            ? "url(#blueGradient)"
                            : "#F8FAFC"
                        }
                        stroke={
                          entry.status === "progress" ? "#E2E8F0" : "none"
                        }
                      />
                    ))}
                  </Bar>
                  <defs>
                    <linearGradient
                      id="blueGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity={1} />
                      <stop
                        offset="100%"
                        stopColor="#60A5FA"
                        stopOpacity={0.8}
                      />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Row 2, Col 3: My Doctor */}
          <Card className="col-span-1 lg:col-span-2 xl:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-slate-800">My Doctor</h3>
              <button className="text-blue-500 text-xs font-bold hover:underline">
                See Details
              </button>
            </div>

            <div className="space-y-6">
              {doctors.map((doctor, i) => (
                <div key={i} className="flex items-center gap-3">
                  <img
                    src={doctor.img}
                    alt={doctor.name}
                    className="w-10 h-10 rounded-full object-cover bg-gray-100"
                  />
                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      {doctor.name}
                    </p>
                    <p className="text-xs text-gray-500">{doctor.hospital}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
