"use client";

import React, { useState } from "react";
import {
  Search,
  Share2,
  Calendar,
  Star,
  MapPin,
  CornerDownLeft,
  Mail,
  Bell,
  Home,
  HandHelping,
  Wallet,
  Settings,
  Filter,
  Download,
  Plus,
  ChevronDown,
  SlidersHorizontal,
  ArrowUpRight,
  ArrowDownLeft,
  X,
  Clock,
  RefreshCw,
  DollarSign,
  Flame,
  CircleDollarSign,
  Settings2,
  Hourglass,
  CornerRightUp,
  CornerRightDown,
  Activity,
  Check,
} from "lucide-react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  Label,
} from "recharts";
import CardsComponent from "@/components/ui/cards-component";
import Image from "next/image";
import { TransactionsTable } from "@/components/dashboard/transactions-table";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

// --- Mock SEO Data ---

const trafficData = [
  { name: "Mon", organic: 4500, paid: 280 },
  { name: "Tue", organic: 5200, paid: 300 },
  { name: "Wed", organic: 4800, paid: 250 },
  { name: "Thu", organic: 6100, paid: 400 },
  { name: "Fri", organic: 5900, paid: 380 },
  { name: "Sat", organic: 4200, paid: 150 },
  { name: "Sun", organic: 3800, paid: 120 },
];

const keywordTrendData = [
  { value: 120 },
  { value: 250 },
  { value: 180 },
  { value: 300 },
  { value: 150 },
  { value: 280 },
  { value: 190 },
  { value: 350 },
  { value: 210 },
  { value: 400 },
  { value: 250 },
  { value: 500 },
];

const backlinkTrendData = [
  { value: 850 },
  { value: 1100 },
  { value: 920 },
  { value: 1250 },
  { value: 980 },
  { value: 1400 },
  { value: 1050 },
  { value: 1300 },
  { value: 1150 },
  { value: 1600 },
  { value: 1200 },
  { value: 1800 },
];

const healthScoreTrend = [
  { value: 75 },
  { value: 92 },
  { value: 68 },
  { value: 88 },
  { value: 72 },
  { value: 95 },
  { value: 81 },
  { value: 65 },
  { value: 89 },
  { value: 75 },
  { value: 96 },
  { value: 82 },
];

const trafficSparkline = [
  { value: 2400 },
  { value: 2450 },
  { value: 2480 },
  { value: 2550 },
  { value: 2500 },
  { value: 2600 },
  { value: 2650 },
  { value: 2680 },
  { value: 2750 },
  { value: 2800 },
  { value: 2900 },
  { value: 2950 },
  { value: 2920 },
  { value: 2980 },
  { value: 3000 },
];

const topKeywords = [
  {
    id: "#kw-1",
    keyword: "best seo tools 2024",
    position: "1",
    volume: "12.5K",
    difficulty: "Hard",
    traffic: "4.2K",
    cpc: "$2.50",
  },
  {
    id: "#kw-2",
    keyword: "keyword research guide",
    position: "3",
    volume: "8.1K",
    difficulty: "Medium",
    traffic: "1.8K",
    cpc: "$1.20",
  },
  {
    id: "#kw-3",
    keyword: "backlink checker",
    position: "5",
    volume: "22K",
    difficulty: "Hard",
    traffic: "950",
    cpc: "$4.85",
  },
  {
    id: "#kw-4",
    keyword: "technical seo checklist",
    position: "2",
    volume: "5.4K",
    difficulty: "Easy",
    traffic: "2.1K",
    cpc: "$0.90",
  },
];

// --- Components ---

const siteAuditIssues = [
  {
    id: 1,
    issue: "Broken Internal Links (404)",
    category: "Critical",
    count: "12",
    impact: "High",
    status: "Pending",
  },
  {
    id: 2,
    issue: "Missing Meta Descriptions",
    category: "Warning",
    count: "45",
    impact: "Medium",
    status: "Ignored",
  },
  {
    id: 3,
    issue: "Slow Page Speed (Mobile)",
    category: "Performance",
    count: "8",
    impact: "High",
  },
];

const projects = [
  {
    id: "p1",
    name: "amazon.com",
    icon: "A",
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: "p2",
    name: "netflix.com",
    icon: "N",
    color: "bg-red-100 text-red-600",
  },
  {
    id: "p3",
    name: "spotify.com",
    icon: "S",
    color: "bg-green-100 text-green-600",
  },
];

export default function Dashboard() {
  const [selectedIssueIds, setSelectedIssueIds] = useState<number[]>([2]);
  const [currentProject, setCurrentProject] = useState(projects[0]);
  // Summary Card State
  const [summaryPeriod, setSummaryPeriod] = useState("Weekly");

  // Performance Card State - keeping filters logic if needed, but UI state is handled by DropdownMenu
  // For now, these were just UI toggles, so no need for explicit Open state variables.

  // Keywords Card State
  // Keeping just current state if needed, but toggling columns might need state.
  // Assuming we just toggle checkboxes visually for now as per previous implementation logic.

  const toggleIssueSelection = (id: number) => {
    setSelectedIssueIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };
  return (
    <div className="w-full min-h-screen pt-32 sm:pt-40 flex justify-center">
      {/* Main Content */}
      <main className="w-full max-w-[1600px] mx-auto">
        {/* Content Area */}
        <div className="px-4 sm:px-10 pb-8">
          {/* Header Section: Welcome & Project Context */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <div className="h-6 w-px bg-gray-300 mx-1"></div>
                <div className="h-6 w-px bg-gray-300 mx-1"></div>
                {/* Project Switcher */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-lg hover:border-orange-500 transition-colors group outline-none">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs ${currentProject.color}`}
                      >
                        {currentProject.icon}
                      </div>
                      <span className="text-sm font-semibold text-gray-700 group-hover:text-orange-600">
                        {currentProject.name}
                      </span>
                      <ChevronDown
                        size={14}
                        className="text-gray-400 group-hover:text-orange-600 transition-transform group-data-[state=open]:rotate-180"
                      />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="w-48 bg-white border border-gray-100 rounded-xl shadow-lg p-0 overflow-hidden"
                  >
                    {projects.map((project) => (
                      <DropdownMenuItem
                        key={project.id}
                        onClick={() => setCurrentProject(project)}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center gap-3 transition-colors cursor-pointer data-highlighted:bg-gray-50 outline-none"
                      >
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs ${project.color}`}
                        >
                          {project.icon}
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          {project.name}
                        </span>
                      </DropdownMenuItem>
                    ))}
                    <div className="border-t border-gray-100 p-2">
                      <DropdownMenuItem className="w-full flex items-center gap-2 text-xs font-semibold text-[#F15A29] justify-center p-2 rounded-lg hover:bg-orange-50 cursor-pointer data-highlighted:bg-orange-50 outline-none">
                        <Plus size={14} /> Add Project
                      </DropdownMenuItem>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <p className="text-gray-400 text-sm">
                Overview of your project's performance and SEO health.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Date Range Picker Mockup */}
              <button className="px-4 py-2 bg-white text-gray-600 rounded-full flex items-center gap-2 text-sm font-medium border border-gray-100 hover:bg-gray-50 shadow-sm">
                <Calendar size={16} className="text-gray-400" />
                <span>Last 30 Days</span>
                <ChevronDown size={14} className="text-gray-400" />
              </button>

              <button className="px-5 py-2 bg-[#F15A29] text-white rounded-full flex items-center gap-2 text-sm font-semibold hover:bg-[#d64a1d] transition-colors shadow-lg shadow-orange-500/20">
                <Plus size={18} strokeWidth={2} /> Add Project
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <CardsComponent
                title="Summary"
                description="Track your performance."
                buttons={[]}
                headerActions={
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="p-3 bg-white text-gray-700 rounded-full text-xs font-medium flex items-center gap-1 hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200 group outline-none">
                        {summaryPeriod}
                        <ChevronDown
                          size={20}
                          className="transition-transform duration-200 group-data-[state=open]:rotate-180"
                        />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="w-32 bg-white rounded-xl shadow-xl border border-gray-100 p-1 z-30"
                    >
                      {["Daily", "Weekly", "Monthly"].map((period) => (
                        <DropdownMenuItem
                          key={period}
                          onClick={() => setSummaryPeriod(period)}
                          className={`w-full text-left px-3 py-2 text-sm rounded-lg flex items-center justify-between transition-colors cursor-pointer data-highlighted:bg-gray-50 outline-none ${
                            summaryPeriod === period
                              ? "bg-orange-50 text-[#F15A29] data-highlighted:bg-orange-50 data-highlighted:text-[#F15A29]"
                              : "text-gray-600"
                          }`}
                        >
                          {period}
                          {summaryPeriod === period && <Check size={14} />}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                }
                className="col-span-12 lg:col-span-5 bg-brand-background"
              >
                <div className="bg-white rounded-4xl h-full overflow-hidden pt-2">
                  <div className="flex flex-col md:flex-row gap-0 h-full">
                    {/* Organic Traffic Chart */}
                    <div className="w-full flex flex-col items-center justify-between -mb-2">
                      <div className="flex items-center justify-center gap-3 p-4 border-r w-full">
                        <div className="w-8 h-8 rounded-full bg-[#f5f5f5] flex items-center justify-center">
                          <CornerRightUp size={20} />
                        </div>
                        <div>
                          <span className="text-xs text-gray-400 font-medium block mb-0.5">
                            Organic Traffic
                          </span>
                          <span className="text-2xl font-bold text-gray-900">
                            24.5K
                          </span>
                        </div>
                      </div>
                      {/* Traffic Bar Chart */}
                      <div className="h-48 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={trafficData} barGap={2}>
                            <Bar
                              dataKey="organic"
                              fill="#F15A29"
                              radius={[20, 20, 0, 0]}
                              barSize={32}
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* Paid Traffic Chart */}
                    <div className="w-full flex flex-col items-center justify-between -mb-2">
                      <div className="flex items-center justify-center gap-3 p-4 w-full">
                        <div className="w-8 h-8 rounded-full bg-[#f5f5f5] flex items-center justify-center">
                          <DollarSign size={20} />
                        </div>
                        <div>
                          <span className="text-xs text-gray-400 font-medium block mb-0.5">
                            Paid Traffic
                          </span>
                          <span className="text-2xl font-bold text-gray-900">
                            1.2K
                          </span>
                        </div>
                      </div>
                      {/* Paid Bar Chart */}
                      <div className="h-48 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={trafficData} barGap={2}>
                            <Bar
                              dataKey="paid"
                              fill="rgba(241, 90, 41, 0.3)"
                              radius={[20, 20, 0, 0]}
                              barSize={32}
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </CardsComponent>

              <CardsComponent
                title="Performance"
                description="Key SEO metrics."
                buttons={[]}
                headerActions={
                  <>
                    {/* Filter Button */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="p-3 bg-white text-gray-700 rounded-full text-xs font-medium flex items-center gap-1 transition-colors border border-transparent hover:border-gray-200 group data-[state=open]:bg-orange-50 data-[state=open]:border-orange-200 data-[state=open]:text-[#F15A29] outline-none">
                          <SlidersHorizontal size={20} />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="w-48 bg-white rounded-xl shadow-xl border border-gray-100 p-1 z-30"
                      >
                        <DropdownMenuLabel className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          Device Type
                        </DropdownMenuLabel>
                        {["All Devices", "Desktop", "Mobile", "Tablet"].map(
                          (device) => (
                            <DropdownMenuItem
                              key={device}
                              className="w-full text-left px-3 py-2 text-sm text-gray-600 data-highlighted:bg-gray-50 rounded-lg transition-colors cursor-pointer outline-none"
                            >
                              {device}
                            </DropdownMenuItem>
                          ),
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Export Button */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="p-3 bg-white text-gray-700 rounded-full text-xs font-medium flex items-center gap-1 transition-colors border border-transparent hover:border-gray-200 group data-[state=open]:bg-orange-50 data-[state=open]:border-orange-200 data-[state=open]:text-[#F15A29] outline-none">
                          <ArrowUpRight size={20} />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="w-40 bg-white rounded-xl shadow-xl border border-gray-100 p-1 z-30"
                      >
                        <DropdownMenuItem className="w-full text-left px-3 py-2 text-sm text-gray-600 data-highlighted:bg-gray-50 rounded-lg flex items-center gap-2 transition-colors cursor-pointer outline-none">
                          <Download size={14} /> Export CSV
                        </DropdownMenuItem>
                        <DropdownMenuItem className="w-full text-left px-3 py-2 text-sm text-gray-600 data-highlighted:bg-gray-50 rounded-lg flex items-center gap-2 transition-colors cursor-pointer outline-none">
                          <Download size={14} /> Export PDF
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </>
                }
                className="col-span-12 lg:col-span-7 bg-brand-background"
              >
                {/* Metric Cards Row */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {/* Keywords Card */}
                  <div className="bg-white rounded-4xl flex flex-col justify-between overflow-hidden">
                    <div className="p-5 flex flex-col gap-4">
                      <div className="flex flex-row gap-2 items-center">
                        <span className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                          <Search size={25} className="text-gray-600" />
                        </span>
                        <span className="text-sm font-medium text-gray-500 mb-0.5">
                          Keywords
                        </span>
                      </div>

                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <ArrowUpRight size={25} className="text-[#F15A29]" />
                          <span className="text-xs font-medium text-[#F15A29]">
                            +5.2%
                          </span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900">
                          842
                        </div>
                      </div>
                    </div>

                    <div className="h-24 w-full -mb-1 mt-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={keywordTrendData}
                          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient
                              id="keywordsGradient"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="0%"
                                stopColor="#F15A29"
                                stopOpacity={0.4}
                              />
                              <stop
                                offset="100%"
                                stopColor="#F15A29"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#F15A29"
                            strokeWidth={2}
                            fill="url(#keywordsGradient)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Backlinks Card */}
                  <div className="bg-white rounded-4xl flex flex-col justify-between overflow-hidden">
                    <div className="p-5 flex flex-col gap-4">
                      <div className="flex flex-row gap-2 items-center">
                        <span className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                          <Share2 size={25} className="text-gray-600" />
                        </span>
                        <span className="text-sm font-medium text-gray-500 mb-0.5">
                          Backlinks
                        </span>
                      </div>

                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <ArrowUpRight size={25} className="text-[#F15A29]" />
                          <span className="text-xs font-medium text-[#F15A29]">
                            +12%
                          </span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900">
                          12.5K
                        </div>
                      </div>
                    </div>

                    <div className="h-24 w-full -mb-1">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={backlinkTrendData}
                          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient
                              id="backlinksGradient"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="0%"
                                stopColor="#F15A29"
                                stopOpacity={0.4}
                              />
                              <stop
                                offset="100%"
                                stopColor="#F15A29"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#F15A29"
                            strokeWidth={2}
                            fill="url(#backlinksGradient)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Site Health Card (Dark) */}
                  <div className="bg-[#3d2c23] rounded-4xl flex flex-col justify-between overflow-hidden col-span-2 md:col-span-1">
                    <div className="p-5 flex flex-col gap-4">
                      <div className="flex flex-row gap-2 items-center">
                        <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                          <Activity size={25} className="text-white" />
                        </span>
                        <span className="text-sm font-medium text-white/60 mb-0.5">
                          Site Health
                        </span>
                      </div>

                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <ArrowUpRight size={25} className="text-[#F15A29]" />
                          <span className="text-xs font-medium text-[#F15A29]">
                            +2pts
                          </span>
                        </div>
                        <div className="text-2xl font-bold text-white">
                          98/100
                        </div>
                      </div>
                    </div>

                    <div className="h-24 w-full z-10 relative -mb-1">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={healthScoreTrend}
                          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient
                              id="healthGradient"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="0%"
                                stopColor="#F15A29"
                                stopOpacity={0.5}
                              />
                              <stop
                                offset="100%"
                                stopColor="#F15A29"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#F15A29"
                            strokeWidth={2}
                            fill="url(#healthGradient)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </CardsComponent>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <CardsComponent
                buttons={[]}
                className="col-span-12 lg:col-span-5 p-0"
              >
                <div className="w-full flex flex-col gap-4 shrink-0">
                  {/* Summary Card - Outer container with cream/beige background */}

                  {/* Bottom Left Small Cards Top Row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="w-full bg-brand-background rounded-4xl p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="p-1.5 rounded-full flex items-center justify-center bg-white">
                          <Activity size={20} className="text-black" />
                        </div>
                        <span className="text-sm text-black font-medium">
                          Bounce Rate
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <ArrowDownLeft size={25} className="text-gray-400" />
                        <span className="text-xs font-medium text-gray-400">
                          -8.4%
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        42.5%
                      </div>
                    </div>
                    <div className="w-full bg-brand-background rounded-4xl p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="p-1.5 rounded-full flex items-center justify-center bg-white">
                          <Clock size={20} className="text-black" />
                        </div>
                        <span className="text-sm text-black font-medium">
                          Avg. Visit Time
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <ArrowUpRight size={25} className="text-[#F15A29]" />
                        <span className="text-xs font-medium text-[#F15A29]">
                          +12.1%
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        3m 45s
                      </div>
                    </div>
                  </div>

                  {/* Bottom Left Small Cards Bottom Row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="w-full bg-brand-background rounded-4xl p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="p-1.5 rounded-full flex items-center justify-center bg-white">
                          <Star size={20} className="text-black" />
                        </div>
                        <span className="text-sm text-black font-medium">
                          Domain Authority
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <ArrowUpRight size={25} className="text-[#F15A29]" />
                        <span className="text-xs font-medium text-[#F15A29]">
                          +1.2
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">72</div>
                    </div>
                    <div className="w-full bg-brand-background rounded-4xl p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="p-1.5 rounded-full flex items-center justify-center bg-white">
                          <Flame size={20} className="text-black" />
                        </div>
                        <span className="text-sm text-black font-medium">
                          Ranked Keywords
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <ArrowUpRight size={25} className="text-[#F15A29]" />
                        <span className="text-xs font-medium text-[#F15A29]">
                          +5.6%
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        1.2K
                      </div>
                    </div>
                  </div>
                </div>
              </CardsComponent>

              <CardsComponent
                title="Top Keywords"
                description="Your best performing search terms."
                buttons={[]}
                headerActions={
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="p-3 bg-white text-gray-700 rounded-full text-xs font-medium flex items-center gap-1 transition-colors border border-transparent hover:border-gray-200 group data-[state=open]:bg-orange-50 data-[state=open]:border-orange-200 data-[state=open]:text-[#F15A29] outline-none">
                        <Settings2 size={20} />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="w-48 bg-white rounded-xl shadow-xl border border-gray-100 p-1 z-30"
                    >
                      <DropdownMenuLabel className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Toggle Columns
                      </DropdownMenuLabel>
                      {[
                        "Keyword",
                        "Position",
                        "Volume",
                        "Difficulty",
                        "Traffic",
                      ].map((col) => (
                        <DropdownMenuCheckboxItem
                          key={col}
                          checked={true}
                          className="w-full text-left pl-8 pr-2 py-2 text-sm text-gray-600 data-highlighted:bg-gray-50 rounded-lg transition-colors cursor-pointer outline-none"
                        >
                          {col}
                        </DropdownMenuCheckboxItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                }
                className="col-span-12 lg:col-span-7 bg-brand-background"
              >
                {/* Transactions History */}
                <div className="overflow-x-auto bg-white rounded-4xl">
                  <TransactionsTable data={topKeywords} />
                </div>
              </CardsComponent>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
