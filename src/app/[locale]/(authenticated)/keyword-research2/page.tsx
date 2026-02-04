"use client";

import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  RadialBarChart,
  RadialBar,
} from "recharts";
import {
  m,
  useSpring,
  useTransform,
  animate,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import {
  Search,
  Gauge,
  TrendingUp,
  Layers,
  ChevronDown,
  Check,
  MapPin,
  Globe,
  MonitorSmartphone, // Importing placeholder icon
  DollarSign,
  ArrowUpRight,
  CircleDollarSign,
  MoreHorizontal,
  Sparkles,
  Wand2,
  CircleChevronLeft,
  ExternalLink,
  Plus,
  Equal,
  Download,
} from "lucide-react"; // Import Gauge icon
import CardsComponent from "@/components/ui/cards-component";
// import AdvanceTable, { Column } from "@/components/keyword-research/table";
import {
  RelatedKeywordsTable,
  RelatedKeywordData,
} from "@/components/keyword-research/related-keywords-table";
import {
  SerpCompetitorData,
  SerpCompetitorsTable,
} from "@/components/keyword-research/serp-competitors-table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { InitialResearchContent } from "@/components/keyword-research/initial-content";
import { Navbar } from "@/components/layout/authenticated/Navbar";

function ResearchSkeleton() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* 1. Metrics & Keyword Difficulty */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Metrics Section Skeleton */}
        <div className="bg-white/40 backdrop-blur-sm rounded-4xl p-6 border border-white/50 col-span-1 lg:col-span-2 shadow-sm h-full min-h-[400px]">
          <div className="flex items-center gap-4 mb-6">
            <Skeleton className="h-8 w-48" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Mimic the layout of metrics cards */}
            <Skeleton className="col-span-1 md:col-span-2 h-[240px] rounded-[2rem]" />
            <Skeleton className="col-span-1 h-[240px] rounded-[2rem]" />
            <Skeleton className="col-span-1 h-[240px] rounded-[2rem]" />
            <Skeleton className="col-span-1 md:col-span-2 h-[240px] rounded-[2rem]" />
          </div>
        </div>

        {/* Keyword Difficulty Skeleton */}
        <div className="bg-white/40 backdrop-blur-sm rounded-4xl p-6 border border-white/50 lg:row-span-2 shadow-sm h-full min-h-[500px]">
          <Skeleton className="h-8 w-48 mb-8" />
          <div className="flex flex-col items-center justify-between h-[80%]">
            <Skeleton className="w-[220px] h-[220px] rounded-full" />
            <Skeleton className="w-full h-24 rounded-2xl mt-4" />
          </div>
        </div>
      </div>

      {/* 2. Related Keywords & Volume */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Related Table */}
        <div className="lg:col-span-8 bg-white/40 backdrop-blur-sm rounded-4xl p-6 border border-white/50 shadow-sm h-[400px]">
          <Skeleton className="h-8 w-48 mb-6" />
          <div className="space-y-4">
            <Skeleton className="h-10 w-full rounded-xl" />
            <Skeleton className="h-12 w-full rounded-xl" />
            <Skeleton className="h-12 w-full rounded-xl" />
            <Skeleton className="h-12 w-full rounded-xl" />
            <Skeleton className="h-12 w-full rounded-xl" />
            <Skeleton className="h-12 w-full rounded-xl" />
          </div>
        </div>

        {/* Volume Chart */}
        <div className="lg:col-span-4 bg-white/40 backdrop-blur-sm rounded-4xl p-6 border border-white/50 shadow-sm h-full">
          <Skeleton className="h-8 w-32 mb-6" />
          <Skeleton className="w-full h-[200px] rounded-xl mb-6" />
          <div className="grid grid-cols-2 gap-4">
            <Skeleton className="h-[100px] w-full rounded-[1.5rem]" />
            <Skeleton className="h-[100px] w-full rounded-[1.5rem]" />
          </div>
        </div>
      </div>

      {/* 3. SERP Analysis */}
      <div className="bg-white/40 backdrop-blur-sm rounded-4xl p-6 border border-white/50 shadow-sm h-[500px]">
        <Skeleton className="h-8 w-48 mb-8" />
        <div className="space-y-4">
          <Skeleton className="h-12 w-full rounded-xl" />
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-16 w-full rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Mock Data ---

const keywordVolumeHistory = [
  { month: "Jan", volume: 12000 },
  { month: "Feb", volume: 13500 },
  { month: "Mar", volume: 11000 },
  { month: "Apr", volume: 14500 },
  { month: "May", volume: 16000 },
  { month: "Jun", volume: 15500 },
  { month: "Jul", volume: 17000 },
  { month: "Aug", volume: 16500 },
  { month: "Sep", volume: 18500 },
  { month: "Oct", volume: 19000 },
  { month: "Nov", volume: 21000 },
  { month: "Dec", volume: 22500 },
];

const relatedKeywords: RelatedKeywordData[] = [
  {
    id: "1",
    keyword: "seo tools for beginners",
    intent: "Informational",
    cpc: "$1.20",
    volume: "22.5K",
    difficulty: 45,
  },
  {
    id: "2",
    keyword: "buy seo software",
    intent: "Transactional",
    cpc: "$4.50",
    volume: "5.4K",
    difficulty: 85,
  },
  {
    id: "3",
    keyword: "best keyword research",
    intent: "Commercial",
    cpc: "$3.10",
    volume: "8.1K",
    difficulty: 60,
  },
  {
    id: "4",
    keyword: "how to do seo",
    intent: null,
    cpc: "$0.80",
    volume: "35K",
    difficulty: 90,
  },
  {
    id: "5",
    keyword: "free rank tracker",
    intent: null,
    cpc: "$1.50",
    volume: "12K",
    difficulty: 30,
  },
];

const serpCompetitors: SerpCompetitorData[] = [
  {
    id: "1",
    rank: 1,
    url: "https://moz.com/beginners-guide-to-seo",
    title: "Beginner's Guide to SEO (Search Engine Optimization) - Moz",
    da: 91,
    pa: 85,
    spamScore: 1,
    links: 15400,
  },
  {
    id: "2",
    rank: 2,
    url: "https://ahrefs.com/seo",
    title: "What is SEO? Search Engine Optimization Explained - Ahrefs",
    da: 90,
    pa: 82,
    spamScore: 2,
    links: 12300,
  },
  {
    id: "3",
    rank: 3,
    url: "https://searchengineland.com/guide/what-is-seo",
    title: "What Is SEO / Search Engine Optimization? - Search Engine Land",
    da: 92,
    pa: 80,
    spamScore: 1,
    links: 9500,
  },
  {
    id: "4",
    rank: 4,
    url: "https://yoast.com/what-is-seo/",
    title: "What is SEO? • Yoast",
    da: 89,
    pa: 78,
    spamScore: 0,
    links: 8100,
  },
  {
    id: "5",
    rank: 5,
    url: "https://backlinko.com/hub/seo/what-is-seo",
    title: "What is SEO? (And How It Works) - Backlinko",
    da: 86,
    pa: 75,
    spamScore: 3,
    links: 6200,
  },
];

const apiData = {
  keyword: "weather forecast",
  location_code: null,
  language_code: null,
  search_partners: false,
  competition: "LOW",
  competition_index: 1,
  search_volume: 4090000,
  low_top_of_page_bid: 0.02,
  high_top_of_page_bid: 0.48,
  cpc: 0.28,
  monthly_searches: [
    { year: 2025, month: 12, search_volume: 3350000 },
    { year: 2025, month: 11, search_volume: 4090000 },
    { year: 2025, month: 10, search_volume: 3350000 },
    { year: 2025, month: 9, search_volume: 4090000 },
    { year: 2025, month: 8, search_volume: 4090000 },
    { year: 2025, month: 7, search_volume: 5000000 },
    { year: 2025, month: 6, search_volume: 4090000 },
    { year: 2025, month: 5, search_volume: 4090000 },
    { year: 2025, month: 4, search_volume: 3350000 },
    { year: 2025, month: 3, search_volume: 3350000 },
    { year: 2025, month: 2, search_volume: 3350000 },
    { year: 2025, month: 1, search_volume: 4090000 },
  ],
  keyword_annotations: {
    concepts: null,
  },
};

const intentData = [
  { name: "Informational", value: 85, color: "#9333ea" }, // Purple
  { name: "Educational", value: 45, color: "#3b82f6" }, // Blue
  { name: "Commercial", value: 20, color: "#F15A29" }, // Orange
];

// const serpColumns: Column<SerpCompetitorData>[] = [
//   {
//     header: "Rank",
//     accessorKey: "rank",
//     render: (item) => (
//       <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-xs font-bold text-gray-600 group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors">
//         {item.rank}
//       </div>
//     ),
//     className: "w-[5%] pl-6",
//   },
//   {
//     header: "URL / Title",
//     render: (item) => (
//       <div className="flex flex-col truncate max-w-[300px]">
//         <a
//           href={item.url}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-sm font-semibold text-gray-900 truncate hover:text-orange-600 transition-colors flex items-center gap-1"
//         >
//           {item.title}{" "}
//           <ExternalLink
//             size={12}
//             className="opacity-0 group-hover:opacity-100 transition-opacity"
//           />
//         </a>
//         <span className="text-xs text-gray-500 truncate">{item.url}</span>
//       </div>
//     ),
//     className: "w-[45%]",
//   },
//   {
//     header: "DA",
//     accessorKey: "da",
//     render: (item) => (
//       <span className="font-medium text-gray-700">{item.da}</span>
//     ),
//     className: "w-[10%]",
//   },
//   {
//     header: "PA",
//     accessorKey: "pa",
//     render: (item) => (
//       <span className="font-medium text-gray-700">{item.pa}</span>
//     ),
//     className: "w-[10%]",
//   },
//   {
//     header: "Spam Score",
//     accessorKey: "spamScore",
//     render: (item) => (
//       <div className="flex items-center gap-1.5">
//         <div
//           className={`w-1.5 h-1.5 rounded-full ${
//             item.spamScore > 10
//               ? "bg-rose-500"
//               : item.spamScore > 2
//                 ? "bg-amber-500"
//                 : "bg-emerald-500"
//           }`}
//         />
//         <span className="font-medium text-gray-700">{item.spamScore}%</span>
//       </div>
//     ),
//     className: "w-[15%]",
//   },
//   {
//     header: "Links",
//     accessorKey: "links",
//     render: (item) => (
//       <span className="font-semibold text-gray-900">
//         {item.links.toLocaleString()}
//       </span>
//     ),
//     className: "w-[15%] text-right pr-6",
//   },
// ];

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(
    count,
    (latest: number) => prefix + latest.toFixed(decimals) + suffix,
  );

  React.useEffect(() => {
    const controls = animate(count, value, { duration: 2 });
    return controls.stop;
  }, [count, value]);

  return <m.span>{rounded}</m.span>;
}

function SearchVolumeCard() {
  const [timeRange, setTimeRange] = useState<"1y" | "6m">("1y");

  // Sort chronologically and format
  const sortedHistory = [...apiData.monthly_searches]
    .sort((a, b) => {
      if (a.year !== b.year) return a.year - b.year;
      return a.month - b.month;
    })
    .map((item) => ({
      ...item,
      monthName: new Date(item.year, item.month - 1).toLocaleString("default", {
        month: "short",
      }),
      fullMonth: new Date(item.year, item.month - 1).toLocaleString("default", {
        month: "long",
      }),
    }));

  const displayData =
    timeRange === "1y" ? sortedHistory : sortedHistory.slice(-6);

  const peakVolume = Math.max(...displayData.map((d) => d.search_volume));
  const avgVolume = Math.round(
    displayData.reduce((acc, curr) => acc + curr.search_volume, 0) /
      displayData.length,
  );

  return (
    <div className="bg-white rounded-4xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/60 flex flex-col justify-between h-full min-h-[400px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Search Volume</h2>
        <div className="bg-gray-100/80 p-1 rounded-full flex text-xs font-semibold relative">
          <button
            onClick={() => setTimeRange("6m")}
            className={`px-3 py-1.5 rounded-full transition-all duration-300 z-10 ${
              timeRange === "6m"
                ? "bg-white text-[#F15A29] shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            6 Months
          </button>
          <button
            onClick={() => setTimeRange("1y")}
            className={`px-3 py-1.5 rounded-full transition-all duration-300 z-10 ${
              timeRange === "1y"
                ? "bg-white text-[#F15A29] shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            1 Year
          </button>
        </div>
      </div>

      {/* Chart Area */}
      <div className="flex-1 min-h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={displayData} barSize={timeRange === "1y" ? 20 : 32}>
            <defs>
              <linearGradient
                id="searchVolumeGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#f15a29" stopOpacity={1} />
                <stop offset="100%" stopColor="#FFEDD5" stopOpacity={0.8} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E5E7EB"
            />
            <XAxis
              dataKey="monthName"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#9CA3AF",
                fontSize: 11,
                fontWeight: 500,
              }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#9CA3AF",
                fontSize: 11,
                fontWeight: 500,
              }}
              tickFormatter={(value) =>
                value === 0
                  ? "0"
                  : value >= 1000000
                    ? `${(value / 1000000).toFixed(1)}M`
                    : value >= 1000
                      ? `${value / 1000}k`
                      : `${value}`
              }
              width={35}
            />
            <Tooltip
              cursor={{ fill: "transparent" }}
              offset={20}
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white p-4 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100 min-w-[160px] animate-in fade-in zoom-in-95 duration-200">
                      <p className="text-sm font-semibold text-gray-900 mb-2">
                        {label} {payload[0].payload.year}
                      </p>
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#F15A29] shadow-[0_0_8px_rgba(241,90,41,0.5)]"></div>
                          <span className="text-xs font-medium text-gray-500">
                            Volume
                          </span>
                        </div>
                        <span className="text-sm font-bold text-gray-900">
                          {(payload[0].value as number).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="search_volume" radius={[6, 6, 6, 6]}>
              {displayData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    entry.search_volume === peakVolume
                      ? "url(#searchVolumeGradient)"
                      : "#F3F4F6"
                  }
                  className="transition-all duration-300 hover:opacity-80"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {/* Peak Volume */}
        <div className="bg-linear-to-br from-slate-50 via-white to-slate-50 rounded-[1.5rem] flex flex-col justify-between overflow-hidden h-full border border-slate-200/60 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
              Peak Volume
            </span>
          </div>
          <div className="flex items-end justify-between">
            <span className="text-lg font-extrabold text-slate-900 tracking-tight leading-none">
              {(peakVolume / 1000000).toFixed(1)}M
            </span>
            {/* Removed the generic "12%" badge */}
          </div>
        </div>

        {/* Monthly Avg */}
        <div className="bg-linear-to-br from-slate-50 via-white to-slate-50 rounded-[1.5rem] flex flex-col justify-between overflow-hidden h-full border border-slate-200/60 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
              Monthly Avg
            </span>
          </div>
          <div className="flex items-end justify-between">
            <span className="text-lg font-extrabold text-slate-900 tracking-tight leading-none">
              {(avgVolume / 1000000).toFixed(1)}M
            </span>
            {/* Removed the generic "Stable" badge */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function KeywordResearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentKeyword, setCurrentKeyword] = useState("seo tools");
  const [selectedCountry, setSelectedCountry] = useState("United States");

  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isIntentRevealed, setIsIntentRevealed] = useState(false);
  const [isIntentLoading, setIsIntentLoading] = useState(false);

  // Layout State
  const [hasSearched, setHasSearched] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleIntentReveal = () => {
    setIsIntentLoading(true);
    setTimeout(() => {
      setIsIntentLoading(false);
      setIsIntentRevealed(true);
    }, 1500); // Simulate API call
  };

  // Metrics that change based on keyword
  // Calculate Search Volume Trends from API Data
  const sortedHistory = [...apiData.monthly_searches].sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year;
    return b.month - a.month;
  });

  const currentQVol = sortedHistory
    .slice(0, 3)
    .reduce((acc, curr) => acc + curr.search_volume, 0);
  const prevQVol = sortedHistory
    .slice(3, 6)
    .reduce((acc, curr) => acc + curr.search_volume, 0);
  const quarterChange =
    prevQVol > 0 ? ((currentQVol - prevQVol) / prevQVol) * 100 : 0;
  const isPositiveChange = quarterChange >= 0;

  const formattedVolume =
    apiData.search_volume >= 1000000
      ? { val: apiData.search_volume / 1000000, suffix: "M" }
      : apiData.search_volume >= 1000
        ? { val: apiData.search_volume / 1000, suffix: "k" }
        : { val: apiData.search_volume, suffix: "" };

  const searchVolume = apiData.search_volume;
  const keywordDifficulty = 68; // 0 - 100
  const avgCpc = 2.45;
  const adCompetitionLevel = "LOW";
  const adCompetitionIndex = 5; // Example low index

  // -- Speedometer Config --
  // using a half donut chart
  const gaugeData = [
    { name: "value", value: avgCpc },
    { name: "rest", value: 10 - avgCpc }, // Assuming max CPC visual is $10 for the gauge scale
  ];
  const gaugeColors = ["#F15A29", "#eee"];

  const performSearch = (query: string) => {
    // Reset states
    setIsIntentRevealed(false);

    // Start Analysis Animation
    setHasSearched(true);
    setIsAnalyzing(true);

    // Simulate API delay
    setTimeout(() => {
      setCurrentKeyword(query);
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    performSearch(searchQuery);
  };

  const handleQuickSearch = (term: string) => {
    setSearchQuery(term);
    performSearch(term);
  };

  return (
    <div className="w-full min-h-screen pt-24 sm:pt-32 flex justify-center">
      <Navbar />
      <main className="w-full max-w-[1600px] mx-auto px-4 sm:px-10 pb-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
          <div className="w-full">
            <div className="mb-2 ml-4">
              <h1 className="text-3xl font-bold text-gray-900">
                Keyword Research
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                Analyze keyword performance and competition.
              </p>
            </div>

            {/* Search Bar Container */}
            <div className="w-full mt-6 bg-linear-to-br from-slate-50 via-white to-slate-50 p-2 rounded-[2rem] border border-slate-200/60 flex flex-col lg:flex-row items-center gap-1 group transition-all duration-300 shadow-[0_8px_40px_rgb(0,0,0,0.08)]">
              {/* Keyword Input Section */}
              <label
                htmlFor="keyword-search"
                className="relative flex-1 w-full lg:w-auto h-16 flex items-center px-4 group/input bg-zinc-100/70 hover:bg-slate-200/70 focus-within:bg-white rounded-3xl transition-all duration-300 cursor-text ring-2 ring-transparent focus-within:ring-[#F15A29]/10 focus-within:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]"
              >
                <div className="mr-4 w-11 h-11 rounded-2xl bg-white text-[#F15A29] flex items-center justify-center shrink-0 shadow-xs border border-slate-100 group-focus-within/input:scale-105 transition-transform duration-300">
                  <Search size={20} className="stroke-[2.5px]" />
                </div>
                <div className="flex flex-col flex-1 h-full justify-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-0.5 pointer-events-none select-none">
                    Target Keyword
                  </span>
                  <input
                    id="keyword-search"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
                    placeholder="e.g. best coffee machine"
                    className="w-full bg-transparent border-none p-0 text-slate-800 placeholder:text-slate-400 font-bold text-base focus:outline-none focus:ring-0 leading-tight"
                    autoComplete="off"
                  />
                </div>
              </label>

              {/* Divider */}
              <div className="w-px h-10 bg-slate-200/60 hidden lg:block mx-1" />

              {/* Country Selection */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="w-full lg:w-56 h-16 flex items-center px-4 cursor-pointer outline-none text-left rounded-3xl hover:bg-slate-100 transition-all duration-300 group/btn">
                    <div className="mr-4 w-11 h-11 rounded-2xl bg-slate-50 text-slate-500 flex items-center justify-center shrink-0 shadow-sm border border-slate-100 transition-transform duration-300">
                      <MapPin size={20} className="stroke-[2.5px]" />
                    </div>
                    <div className="flex flex-col flex-1 h-full justify-center">
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">
                        Location
                      </span>
                      <span className="text-slate-800 font-bold text-sm leading-tight truncate">
                        {selectedCountry}
                      </span>
                    </div>
                    <ChevronDown size={16} className="text-slate-400 ml-2" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-56 p-2 rounded-2xl border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]"
                >
                  {[
                    "United States",
                    "United Kingdom",
                    "Canada",
                    "Australia",
                    "India",
                    "Germany",
                    "France",
                  ].map((country) => (
                    <DropdownMenuItem
                      key={country}
                      onClick={() => setSelectedCountry(country)}
                      className="rounded-xl font-medium text-slate-600 focus:text-[#F15A29] focus:bg-orange-50 cursor-pointer py-2.5"
                    >
                      {country}
                      {selectedCountry === country && (
                        <Check size={14} className="ml-auto text-[#F15A29]" />
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Divider */}
              <div className="w-px h-10 bg-slate-200/60 hidden lg:block mx-1" />

              {/* Language Selection */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="w-full lg:w-48 h-16 flex items-center px-4 cursor-pointer outline-none text-left rounded-3xl hover:bg-slate-100 transition-all duration-300 group/btn">
                    <div className="mr-4 w-11 h-11 rounded-2xl bg-slate-50 text-slate-500 flex items-center justify-center shrink-0 shadow-sm border border-slate-100 transition-transform duration-300">
                      <Globe size={20} className="stroke-[2.5px]" />
                    </div>
                    <div className="flex flex-col flex-1 h-full justify-center">
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">
                        Language
                      </span>
                      <span className="text-slate-800 font-bold text-sm leading-tight truncate">
                        {selectedLanguage}
                      </span>
                    </div>
                    <ChevronDown size={16} className="text-slate-400 ml-2" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-48 p-2 rounded-2xl border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]"
                >
                  {[
                    "English",
                    "Spanish",
                    "French",
                    "German",
                    "Italian",
                    "Portuguese",
                  ].map((lang) => (
                    <DropdownMenuItem
                      key={lang}
                      onClick={() => setSelectedLanguage(lang)}
                      className="rounded-xl font-medium text-slate-600 focus:text-[#F15A29] focus:bg-orange-50 cursor-pointer py-2.5"
                    >
                      {lang}
                      {selectedLanguage === lang && (
                        <Check size={14} className="ml-auto text-[#F15A29]" />
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Search Button */}
              <div className="p-1 w-full lg:w-auto">
                <button
                  onClick={handleSearch}
                  className="w-full lg:w-auto h-14 lg:h-14 px-8 bg-[#F15A29] hover:bg-[#d64a1d] text-white rounded-[1.5rem] font-bold shadow-[0_4px_20px_rgba(241,90,41,0.25)] hover:shadow-[0_6px_25px_rgba(241,90,41,0.35)] active:scale-95 transition-all flex items-center justify-center gap-2 group/search cursor-pointer"
                >
                  <CircleChevronLeft
                    size={20}
                    className="text-white bg-transparent"
                    strokeWidth={3}
                  />
                  <span>Analyze</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section with Conditional Rendering */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            {!hasSearched ? (
              <InitialResearchContent
                key="initial-content"
                onSearch={handleQuickSearch}
              />
            ) : isAnalyzing ? (
              // Skeleton State
              <m.div
                key="skeleton"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
              >
                <ResearchSkeleton />
              </m.div>
            ) : (
              // Main Content State
              <m.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-6"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {/* 1. Bento Grid - Metrics */}
                  <CardsComponent
                    title="Metrics"
                    description={`SEO Metrics for "${currentKeyword}"`}
                    buttons={[]}
                    className="bg-brand-background col-span-1 lg:col-span-2"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Top of Page Bid - Premium Design */}
                      <div className="col-span-1 md:col-span-2">
                        <div className="bg-linear-to-br from-slate-50 via-white to-slate-50 rounded-[2rem] flex flex-col justify-between overflow-hidden h-full border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group">
                          <div className="p-6 flex flex-col h-full relative">
                            {/* Background Decor */}
                            <div className="absolute top-0 right-0 p-32 bg-orange-500/5 blur-[100px] rounded-full pointer-events-none"></div>

                            {/* Header */}
                            <div className="flex items-center justify-between mb-2 z-10">
                              <span className="text-[11px] uppercase font-bold text-slate-400 tracking-[0.15em]">
                                Top of Page Bid
                              </span>

                              {/* Ad Competition Badge */}
                              <div className="flex items-center gap-2 bg-white border border-slate-100 px-3 py-1 rounded-full shadow-xs">
                                <div className="flex items-center gap-1">
                                  <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                  </span>
                                  <span className="text-[10px] font-bold text-slate-600 uppercase">
                                    Comp: {adCompetitionLevel}
                                  </span>
                                </div>
                                <div className="w-px h-3 bg-slate-200"></div>
                                <span className="text-[10px] font-medium text-slate-400">
                                  {adCompetitionIndex}/100
                                </span>
                              </div>
                            </div>

                            {/* Content Container */}
                            <div className="flex-1 flex flex-col justify-center z-10">
                              <div className="flex items-end justify-between w-full">
                                {/* Low Bid */}
                                <div className="flex flex-col">
                                  <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
                                    <AnimatedNumber
                                      value={1.75}
                                      prefix="$"
                                      decimals={2}
                                    />
                                  </span>
                                  <span className="text-xs font-semibold text-slate-400 mt-1">
                                    Low Range
                                  </span>
                                </div>

                                {/* Visual Range Connector */}
                                <div className="flex-1 mx-4 sm:mx-8 mb-4 flex flex-col items-center">
                                  <div className="w-full h-1.5 bg-slate-100 rounded-full relative overflow-visible">
                                    {/* Gradient Bar representing the spread */}
                                    <m.div
                                      initial={{ width: 0, opacity: 0 }}
                                      animate={{ width: "100%", opacity: 0.3 }}
                                      transition={{
                                        duration: 1.5,
                                        ease: "easeOut",
                                      }}
                                      className="absolute inset-y-0 left-0 right-0 bg-linear-to-r from-slate-300 to-[#F15A29] rounded-full"
                                    ></m.div>

                                    {/* Dots */}
                                    <m.div
                                      initial={{ left: "50%" }}
                                      animate={{ left: "0%" }}
                                      transition={{
                                        duration: 1.2,
                                        ease: "easeOut",
                                        delay: 0.2,
                                      }}
                                      className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-slate-300 rounded-full shadow-xs"
                                    ></m.div>
                                    <m.div
                                      initial={{ right: "50%" }}
                                      animate={{ right: "0%" }}
                                      transition={{
                                        duration: 1.2,
                                        ease: "easeOut",
                                        delay: 0.2,
                                      }}
                                      className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-[#F15A29] rounded-full shadow-xs"
                                    ></m.div>
                                  </div>
                                </div>

                                {/* High Bid */}
                                <div className="flex flex-col items-end">
                                  <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
                                    <AnimatedNumber
                                      value={5.2}
                                      prefix="$"
                                      decimals={2}
                                    />
                                  </span>
                                  <span className="text-xs font-semibold text-slate-400 mt-1 text-right">
                                    High Range
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Average CPC - Premium Design without Chart */}
                      <div className="">
                        <div className="bg-linear-to-br from-slate-50 via-white to-slate-50 rounded-4xl flex flex-col justify-between overflow-hidden h-full border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all duration-300 relative group">
                          {/* Background Icon Decoration */}
                          <div className="absolute -right-6 -top-6 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 transform rotate-12">
                            <CircleDollarSign
                              size={180}
                              strokeWidth={1}
                              className="text-[#F15A29]"
                            />
                          </div>

                          <div className="p-5 flex flex-col h-full justify-between z-10 relative">
                            {/* Header */}
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] uppercase font-bold text-slate-400 tracking-[0.15em]">
                                Average CPC
                              </span>
                              <div className="bg-slate-100 p-1.5 rounded-lg text-slate-400">
                                <DollarSign size={14} strokeWidth={2.5} />
                              </div>
                            </div>

                            {/* Bottom Stats */}
                            <div className="pb-0 pt-8 flex items-end justify-between">
                              <div>
                                <span className="text-4xl font-extrabold text-slate-900 tracking-tight">
                                  <AnimatedNumber
                                    value={apiData.cpc}
                                    prefix="$"
                                    decimals={2}
                                  />
                                </span>
                              </div>
                              <div className="bg-amber-500/10 text-amber-600 text-[11px] font-bold px-3 py-1.5 rounded-xl border border-amber-100">
                                Commercial
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Search Intent - "Out of the Box" Radar Scan Design (Light Mode Compatible) */}
                      <div className="">
                        <div className="bg-white rounded-4xl flex flex-col justify-between overflow-hidden h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] transition-all duration-300 relative group border border-slate-200/60">
                          {/* Grid Background Effect - Subtle Gray for Light Mode */}
                          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[30px_30px] mask-[radial-gradient(ellipse_at_center,black_60%,transparent_100%)] pointer-events-none"></div>

                          {/* Revealed State - using mocked real API data structure */}
                          {/* Revealed State - using mocked real API data structure */}
                          {/* Main Content (Always rendered, but ignored by screen readers when blurred) */}
                          <div className="absolute inset-0 p-6 flex flex-col bg-white z-10 h-full w-full">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em]">
                                Search Intent
                              </span>
                            </div>

                            <div className="flex-1 flex flex-col justify-center min-h-0">
                              <h3 className="text-2xl font-extrabold text-[#F15A29] tracking-tight capitalize mb-1 truncate">
                                Navigational
                              </h3>
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-[10px] font-bold text-slate-600">
                                  Probability:
                                </span>
                                <span className="text-[10px] font-medium text-slate-500">
                                  63.4%
                                </span>
                              </div>

                              {/* Divider */}
                              <div className="w-full h-px bg-slate-100 my-2 shrink-0"></div>

                              <div className="mt-auto">
                                <p className="text-[9px] uppercase font-bold text-slate-400 mb-1">
                                  Alternatives
                                </p>
                                <div className="flex items-center justify-between text-[11px]">
                                  <span className="text-slate-700 font-medium capitalize">
                                    Commercial
                                  </span>
                                  <span className="text-slate-400 font-mono">
                                    56.7%
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Blurred Overlay - Reveal Interaction */}
                          <m.div
                            initial={false}
                            animate={{
                              opacity: isIntentRevealed ? 0 : 1,
                              pointerEvents: isIntentRevealed ? "none" : "auto",
                              backdropFilter: isIntentRevealed
                                ? "blur(0px)"
                                : "blur(8px)",
                            }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center bg-white/60 backdrop-blur-md"
                          >
                            <div className="relative z-10 flex flex-col items-center gap-4">
                              {isIntentLoading ? (
                                <div className="flex flex-col items-center">
                                  {/* Loading Spinner */}
                                  <div className="w-8 h-8 relative mb-3">
                                    <m.div
                                      animate={{ rotate: 360 }}
                                      transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        ease: "linear",
                                      }}
                                      className="w-full h-full border-2 border-slate-300 border-t-[#F15A29] rounded-full"
                                    />
                                  </div>
                                  <span className="text-slate-800 font-bold text-xs animate-pulse">
                                    Analyzing Content...
                                  </span>
                                </div>
                              ) : (
                                <>
                                  <div>
                                    <h3 className="text-slate-800 font-bold text-sm mb-1">
                                      Search Intent
                                    </h3>
                                    <p className="text-slate-500 text-[10px] font-medium max-w-[150px] leading-relaxed">
                                      Click to analyze the content intent for
                                      this keyword
                                    </p>
                                  </div>
                                  <button
                                    onClick={handleIntentReveal}
                                    className="mt-2 px-5 py-2 bg-white border border-slate-200 shadow-sm rounded-full text-[10px] font-bold text-slate-700 hover:text-[#F15A29] hover:border-[#F15A29] transition-all cursor-pointer"
                                  >
                                    Reveal Intent
                                  </button>
                                </>
                              )}
                            </div>
                          </m.div>
                        </div>
                      </div>

                      {/* Average Search Volume - Premium Design */}
                      <div className="col-span-1 md:col-span-2">
                        <div className="relative bg-linear-to-br from-slate-50 via-white to-slate-50 rounded-[2rem] overflow-hidden h-full border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group">
                          <div className="relative p-7 h-full flex flex-row items-center justify-between">
                            {/* Left Side: Content */}
                            <div className="flex flex-col justify-between h-full z-10 w-[45%]">
                              <div>
                                <div className="flex items-center justify-between mb-3">
                                  <span className="text-[11px] uppercase font-bold text-slate-400 tracking-[0.15em]">
                                    Average Search Volume
                                  </span>
                                </div>
                                <h3 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                                  <AnimatedNumber
                                    value={formattedVolume.val}
                                    suffix={formattedVolume.suffix}
                                    decimals={1}
                                  />
                                </h3>
                              </div>

                              <div className="mt-auto">
                                <p className="text-sm text-slate-500 font-medium leading-snug">
                                  <span
                                    className={`${isPositiveChange ? "text-emerald-500 bg-emerald-50" : "text-rose-600 bg-rose-50"} font-bold px-1 rounded-sm mr-1`}
                                  >
                                    {isPositiveChange ? "+" : ""}
                                    {quarterChange.toFixed(1)}%
                                  </span>
                                  {isPositiveChange ? "increase" : "decrease"}{" "}
                                  from the previous quarter.
                                </p>
                              </div>
                            </div>

                            {/* Right Side: Graph */}
                            <div className="absolute right-[-20px] bottom-0 top-[20%] w-[65%] h-[90%] overflow-visible">
                              {/* Fade Overlay */}
                              <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white via-slate-50/80 to-transparent z-10 pointer-events-none" />
                              <ResponsiveContainer width="100%" height="100%">
                                <AreaChart
                                  data={[
                                    { month: "J", volume: 40 },
                                    { month: "F", volume: 35 },
                                    { month: "M", volume: 55 },
                                    { month: "A", volume: 45 },
                                    { month: "M", volume: 70 },
                                    { month: "J", volume: 85 },
                                    { month: "J", volume: 65 },
                                    { month: "A", volume: 80 },
                                    { month: "S", volume: 75 },
                                    { month: "O", volume: 90 },
                                    { month: "N", volume: 85 },
                                    { month: "D", volume: 95 },
                                  ]}
                                  margin={{
                                    top: 15,
                                    right: 0,
                                    left: 0,
                                    bottom: 0,
                                  }}
                                >
                                  <defs>
                                    <linearGradient
                                      id="volumeGradientLight"
                                      x1="0"
                                      y1="0"
                                      x2="0"
                                      y2="1"
                                    >
                                      <stop
                                        offset="0%"
                                        stopColor="#F15A29"
                                        stopOpacity={0.3}
                                      />
                                      <stop
                                        offset="100%"
                                        stopColor="#F15A29"
                                        stopOpacity={0.02}
                                      />
                                    </linearGradient>
                                  </defs>
                                  <Area
                                    type="monotone"
                                    dataKey="volume"
                                    stroke="#F15A29"
                                    strokeWidth={2.5}
                                    fill="url(#volumeGradientLight)"
                                    dot={false}
                                  />
                                </AreaChart>
                              </ResponsiveContainer>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardsComponent>

                  {/* Keyword Difficulty - Big Size (Row Span 2) - Sales Overview Style */}
                  <CardsComponent
                    title="Keyword Difficulty"
                    description={`Keyword Difficulty for "${currentKeyword}"`}
                    buttons={[]}
                    className="bg-brand-background"
                  >
                    <div className="lg:row-span-2">
                      <div className="bg-white rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all duration-300 border border-slate-200/60 flex flex-col justify-between h-full group relative overflow-hidden">
                        <div className="relative h-[220px] w-full flex items-center justify-center -mt-4 z-10">
                          {/* Segmented Gauge using PieChart */}
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={(() => {
                                  const totalSlices = 20;
                                  const activeSlices = Math.round(
                                    (keywordDifficulty / 100) * totalSlices,
                                  );
                                  const slices = [];
                                  for (let i = 0; i < totalSlices; i++) {
                                    // Calculate opacity or shade based on index if desired, or keep solid
                                    // User asked for "primary color and it's shades"
                                    // We can make the active slices have a gradient effect by index
                                    const opacity =
                                      0.4 + (i / activeSlices) * 0.6; // 0.4 to 1.0

                                    slices.push({
                                      value: 1,
                                      fill:
                                        i < activeSlices
                                          ? "#F15A29" // Primary Orange
                                          : "#fff1e3", // Very light orange/gray for inactive
                                      style: {
                                        opacity: i < activeSlices ? 1 : 1,
                                      }, // Using solid color for now, logic below handles "shades" if we wanted unique colors
                                    });
                                  }
                                  return slices;
                                })()}
                                cx="50%"
                                cy="80%"
                                startAngle={180}
                                endAngle={0}
                                innerRadius={90}
                                outerRadius={120}
                                paddingAngle={3}
                                dataKey="value"
                                stroke="none"
                                cornerRadius={4}
                              >
                                {(() => {
                                  const totalSlices = 20;
                                  const activeSlices = Math.round(
                                    (keywordDifficulty / 100) * totalSlices,
                                  );
                                  const slices = [];
                                  for (let i = 0; i < totalSlices; i++) {
                                    // Dynamic shade for active slices
                                    const shadeOpacity =
                                      0.5 + (i / totalSlices) * 0.5; // darkens as it goes

                                    slices.push(
                                      <Cell
                                        key={`cell-${i}`}
                                        fill={
                                          i < activeSlices
                                            ? "#F15A29" // Primary
                                            : "#eeeeee" // Gray-100 placeholder
                                        }
                                        fillOpacity={
                                          i < activeSlices ? shadeOpacity : 1
                                        }
                                      />,
                                    );
                                  }
                                  return slices;
                                })()}
                              </Pie>
                            </PieChart>
                          </ResponsiveContainer>

                          <div className="absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <p className="text-4xl font-extrabold text-slate-900 tracking-tight">
                              {keywordDifficulty}%
                            </p>
                            <p className="text-sm text-slate-400 font-semibold mt-1">
                              {keywordDifficulty > 70
                                ? "Hard to Rank"
                                : keywordDifficulty > 40
                                  ? "Moderate"
                                  : "Easy to Rank"}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col items-center justify-center mt-auto z-10 px-2 pb-4">
                          <span className="text-[11px] uppercase font-bold text-slate-400 tracking-[0.15em] mb-2">
                            Ranking Difficulty
                          </span>
                          <div className="flex items-center gap-3 bg-white border border-slate-100 px-4 py-2 rounded-full shadow-xs">
                            <span className="text-lg font-extrabold text-slate-900 tracking-tight">
                              {keywordDifficulty > 70
                                ? "High"
                                : keywordDifficulty > 40
                                  ? "Moderate"
                                  : "Low"}
                            </span>
                            <div className="w-px h-4 bg-slate-200"></div>
                            <span
                              className={`text-xs font-bold ${keywordDifficulty > 70 ? "text-rose-500" : keywordDifficulty > 40 ? "text-[#F15A29]" : "text-emerald-500"}`}
                            >
                              {keywordDifficulty}/100
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardsComponent>
                </div>

                {/* 2. Related Keywords */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Related Keywords Table on Left */}
                  <div className="lg:col-span-8 order-2 lg:order-1">
                    <CardsComponent
                      title="Related Keywords"
                      description={`Variations and related terms for "${currentKeyword}"`}
                      buttons={[]}
                      className="bg-brand-background"
                    >
                      <div className="bg-white rounded-4xl overflow-hidden border border-gray-100">
                        <RelatedKeywordsTable
                          data={relatedKeywords}
                          onSelectKeyword={(kw) => {
                            handleSearch({
                              preventDefault: () => {},
                            } as React.FormEvent);
                            setSearchQuery(kw);
                          }}
                        />
                        <div className="p-4 border-t border-gray-100 flex justify-center">
                          <button className="text-sm font-semibold text-[#F15A29] hover:text-[#d64a1d] transition-colors">
                            View all related keywords
                          </button>
                        </div>
                      </div>
                    </CardsComponent>
                  </div>

                  {/* Search Volume Card on Right - Performance Overview Style */}
                  {/* Search Volume Card on Right - Performance Overview Style */}
                  <div className="lg:col-span-4 h-full order-1 lg:order-2">
                    <SearchVolumeCard />
                  </div>
                </div>

                {/* 3. SERP Competitors */}
                {/* <div className="grid grid-cols-1">
                  <CardsComponent
                    title="SERP Analysis"
                    description={`Top ranking pages for "${currentKeyword}"`}
                    buttons={[
                      {
                        label: "",
                        icon: <Plus />,
                        onClick: () => {},
                      },
                      {
                        label: "",
                        icon: <Equal />,
                        onClick: () => {},
                      },
                      {
                        label: "Export",
                        icon: <Download />,
                        onClick: () => {},
                      },
                      {
                        label: "Export",
                        icon: <Download />,
                        onClick: () => {},
                      },
                    ]}
                    className="bg-brand-background"
                  >
                    <AdvanceTable
                      data={serpCompetitors}
                      columns={serpColumns}
                      title="SERP Analysis"
                    />
                  </CardsComponent>
                </div> */}

                <div className="grid grid-cols-1">
                  <CardsComponent
                    title="SERP Analysis"
                    description={`Top ranking pages for "${currentKeyword}"`}
                    buttons={[]}
                    className="bg-brand-background"
                  >
                    <div className="bg-white rounded-4xl overflow-hidden border border-gray-100">
                      <SerpCompetitorsTable data={serpCompetitors} />
                      <div className="p-4 border-t border-gray-100 flex justify-center">
                        <button className="text-sm font-semibold text-[#F15A29] hover:text-[#d64a1d] transition-colors">
                          View full SERP report
                        </button>
                      </div>
                    </div>
                  </CardsComponent>
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
