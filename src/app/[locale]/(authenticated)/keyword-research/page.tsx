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
  ChevronsRight,
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
  {
    id: "6",
    keyword: "google keyword planner",
    intent: "Informational",
    cpc: "$0.00",
    volume: "100K",
    difficulty: 55,
  },
  {
    id: "7",
    keyword: "semrush vs ahrefs",
    intent: "Commercial",
    cpc: "$5.20",
    volume: "9.8K",
    difficulty: 72,
  },
  {
    id: "8",
    keyword: "local seo services",
    intent: "Transactional",
    cpc: "$12.50",
    volume: "3.2K",
    difficulty: 65,
  },
  {
    id: "9",
    keyword: "what is technical seo",
    intent: "Informational",
    cpc: "$2.10",
    volume: "6.5K",
    difficulty: 40,
  },
  {
    id: "10",
    keyword: "backlink checker tool",
    intent: "Informational",
    cpc: "$1.80",
    volume: "18K",
    difficulty: 50,
  },
  {
    id: "11",
    keyword: "on page seo checklist",
    intent: "Educational",
    cpc: "$0.90",
    volume: "4.2K",
    difficulty: 35,
  },
  {
    id: "12",
    keyword: "best seo audit tools",
    intent: "Commercial",
    cpc: "$3.80",
    volume: "2.1K",
    difficulty: 58,
  },
  {
    id: "13",
    keyword: "keyword difficulty checker",
    intent: "Informational",
    cpc: "$1.10",
    volume: "5.5K",
    difficulty: 42,
  },
  {
    id: "14",
    keyword: "wordpress seo plugins",
    intent: "Commercial",
    cpc: "$2.40",
    volume: "15K",
    difficulty: 48,
  },
  {
    id: "15",
    keyword: "seo writing assistant",
    intent: "Transactional",
    cpc: "$4.10",
    volume: "1.2K",
    difficulty: 62,
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
  {
    id: "6",
    rank: 6,
    url: "https://neilpatel.com/what-is-seo/",
    title: "What is SEO? Your Complete Step-by-Step Guide - Neil Patel",
    da: 88,
    pa: 76,
    spamScore: 4,
    links: 5800,
  },
  {
    id: "7",
    rank: 7,
    url: "https://mailchimp.com/marketing-glossary/seo/",
    title: "What is SEO? - Mailchimp",
    da: 93,
    pa: 81,
    spamScore: 0,
    links: 11000,
  },
  {
    id: "8",
    rank: 8,
    url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
    title: "Search Engine Optimization (SEO) Starter Guide - Google Developers",
    da: 98,
    pa: 90,
    spamScore: 0,
    links: 45000,
  },
  {
    id: "9",
    rank: 9,
    url: "https://www.semrush.com/blog/what-is-seo/",
    title: "What Is SEO? - Semrush Blog",
    da: 87,
    pa: 74,
    spamScore: 2,
    links: 7500,
  },
  {
    id: "10",
    rank: 10,
    url: "https://www.wordstream.com/seo",
    title: "SEO - WordStream",
    da: 85,
    pa: 72,
    spamScore: 1,
    links: 4200,
  },
  {
    id: "11",
    rank: 11,
    url: "https://buffer.com/library/seo-guide/",
    title: "The Ultimate Guide to SEO for Beginners - Buffer",
    da: 84,
    pa: 70,
    spamScore: 0,
    links: 3100,
  },
  {
    id: "12",
    rank: 12,
    url: "https://hubspot.com/marketing/seo",
    title: "The Ultimate Guide to SEO in 2025 - HubSpot",
    da: 91,
    pa: 83,
    spamScore: 1,
    links: 9800,
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
    <div className="bg-white rounded-4xl p-4 border border-slate-200/60 flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-2 shrink-0">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold text-gray-900">Search Volume</h2>
        </div>
        <div className="bg-gray-50 p-1 rounded-full flex text-[10px] font-bold relative border border-gray-100">
          <button
            onClick={() => setTimeRange("6m")}
            className={`px-3 py-1 rounded-full transition-all duration-300 ${
              timeRange === "6m"
                ? "bg-white text-brand-primary shadow-sm ring-1 ring-black/5"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            6M
          </button>
          <button
            onClick={() => setTimeRange("1y")}
            className={`px-3 py-1 rounded-full transition-all duration-300 ${
              timeRange === "1y"
                ? "bg-white text-brand-primary shadow-sm ring-1 ring-black/5"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            1Y
          </button>
        </div>
      </div>

      <div className="flex flex-1 gap-4 min-h-0">
        {/* Left Side: Graph */}
        <div className="flex-1 min-w-0 h-full w-3/4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={displayData} barSize={timeRange === "1y" ? 16 : 28}>
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
                stroke="#F3F4F6"
              />
              <XAxis
                dataKey="monthName"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#9CA3AF",
                  fontSize: 10,
                  fontWeight: 600,
                }}
                dy={10}
                interval="preserveStartEnd"
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#9CA3AF",
                  fontSize: 10,
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
                width={30}
              />
              <Tooltip
                cursor={{ fill: "transparent" }}
                offset={20}
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100 min-w-[140px] animate-in fade-in zoom-in-95 duration-200">
                        <p className="text-xs font-semibold text-gray-500 mb-1">
                          {label} {payload[0].payload.year}
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                          <span className="text-lg font-bold text-gray-900">
                            {(payload[0].value as number).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="search_volume" radius={[4, 4, 4, 4]}>
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

        {/* Right Side: Stats Stacked */}
        <div className="w-1/4 flex flex-col gap-2 shrink-0">
          {/* Peak Volume */}
          <div className="flex-1 bg-slate-50 rounded-2xl p-3 border border-slate-100 flex flex-col justify-center items-start group hover:border-orange-100 hover:bg-orange-50/30 transition-colors">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1 flex items-center gap-1">
              <TrendingUp size={12} /> Peak
            </span>
            <span className="text-xl font-extrabold text-slate-900 tracking-tight truncate w-full">
              {(peakVolume / 1000000).toFixed(1)}M
            </span>
          </div>

          {/* Monthly Avg */}
          <div className="flex-1 bg-slate-50 rounded-2xl p-3 border border-slate-100 flex flex-col justify-center items-start group hover:border-blue-100 hover:bg-blue-50/30 transition-colors">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1 flex items-center gap-1">
              <Equal size={12} /> Average
            </span>
            <span className="text-xl font-extrabold text-slate-900 tracking-tight truncate w-full">
              {(avgVolume / 1000000).toFixed(1)}M
            </span>
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
    <div className="fixed inset-0 z-100 bg-[#f8f9fc] flex flex-col font-sans text-slate-900 overflow-hidden">
      {/* Custom App Navbar */}
      <header className="h-14 bg-[#1a1a1a] flex items-center justify-between px-4 shrink-0 shadow-md z-50">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-linear-to-br from-brand-prtext-brand-primary to-[#d64a1d] rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg">
              K
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              Keyword<span className="text-brand-primary">Pro</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {["Research", "SERP", "Tracking", "Backlinks"].map((item) => (
              <button
                key={item}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  item === "Research"
                    ? "bg-[#333] text-white"
                    : "text-gray-400 hover:text-white hover:bg-[#333]"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-linear-to-tr from-gray-700 to-gray-600 border border-gray-500/30"></div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden relative">
        <AnimatePresence mode="wait">
          {!hasSearched ? (
            // --- INITIAL STATE: CENTERED SEARCH ---
            <m.div
              key="hero"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.4 }}
              className="w-full h-full flex flex-col items-center justify-center p-4"
            >
              <div className="w-full max-w-3xl flex flex-col items-center text-center -mt-20">
                <m.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight"
                >
                  Keyword Research Tool
                </m.h1>
                <m.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-slate-500 mb-10 max-w-xl"
                >
                  Find easy-to-rank keywords with high search volume and low
                  competition.
                </m.p>

                {/* Big Search Bar */}
                <m.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="w-full max-w-4xl mx-auto relative z-30"
                >
                  <div className="bg-white p-2 rounded-[2rem] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] border border-slate-200/60 ring-4 ring-slate-50/50 transition-all hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.15)] hover:ring-slate-100 flex flex-col gap-2">
                    {/* Top Row: Inputs & Actions */}
                    <div className="flex flex-col lg:flex-row items-center gap-2">
                      {/* Keyword Input */}
                      <div className="flex-1 w-full lg:w-auto flex items-center h-[60px] bg-slate-50 hover:bg-slate-100/80 focus-within:bg-white rounded-[1.5rem] px-5 border border-transparent focus-within:border-brand-primary/20 focus-within:shadow-[0_0_0_4px_rgba(241,90,41,0.05)] transition-all group">
                        <Search
                          className="text-slate-400 mr-3 group-focus-within:text-brand-primary transition-colors"
                          size={22}
                          strokeWidth={2.5}
                        />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          onKeyDown={(e) =>
                            e.key === "Enter" && handleSearch(e)
                          }
                          placeholder="What do you want to rank for? (e.g. 'seo tools')"
                          className="flex-1 bg-transparent border-none text-slate-800 font-semibold placeholder:text-slate-400 focus:ring-0 text-lg h-full"
                          autoFocus
                        />
                      </div>

                      {/* Controls Group */}
                      <div className="flex items-center gap-2 w-full lg:w-auto">
                        {/* Country Dropdown */}
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <button className="h-[60px] px-4 rounded-[1.5rem] bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 flex items-center gap-3 text-slate-700 font-semibold text-sm transition-all whitespace-nowrap min-w-[140px] justify-between group/country">
                              <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-full bg-blue-100/50 flex items-center justify-center text-blue-600 group-hover/country:bg-blue-100 group-hover/country:scale-110 transition-all">
                                  <MapPin size={16} strokeWidth={2.5} />
                                </div>
                                <span className="truncate max-w-[80px]">
                                  {selectedCountry}
                                </span>
                              </div>
                              <ChevronDown size={14} className="opacity-50" />
                            </button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="max-h-[300px] overflow-y-auto min-w-[200px] p-2 rounded-2xl">
                            {[
                              "United States",
                              "United Kingdom",
                              "Canada",
                              "Australia",
                              "India",
                              "Germany",
                              "France",
                              "Spain",
                            ].map((c) => (
                              <DropdownMenuItem
                                key={c}
                                onClick={() => setSelectedCountry(c)}
                                className="rounded-xl py-2.5 px-3 cursor-pointer text-slate-600 font-medium focus:text-brand-primary focus:bg-orange-50 justify-between"
                              >
                                {c}
                                {selectedCountry === c && (
                                  <Check
                                    size={16}
                                    className="text-brand-primary"
                                  />
                                )}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Language Dropdown */}
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <button className="h-[60px] px-4 rounded-[1.5rem] bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 flex items-center gap-3 text-slate-700 font-semibold text-sm transition-all whitespace-nowrap min-w-[140px] justify-between group/lang">
                              <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-full bg-purple-100/50 flex items-center justify-center text-purple-600 group-hover/lang:bg-purple-100 group-hover/lang:scale-110 transition-all">
                                  <Globe size={16} strokeWidth={2.5} />
                                </div>
                                <span className="truncate max-w-[80px]">
                                  {selectedLanguage}
                                </span>
                              </div>
                              <ChevronDown size={14} className="opacity-50" />
                            </button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="max-h-[300px] overflow-y-auto min-w-[200px] p-2 rounded-2xl">
                            {[
                              "English",
                              "Spanish",
                              "French",
                              "German",
                              "Italian",
                              "Portuguese",
                            ].map((l) => (
                              <DropdownMenuItem
                                key={l}
                                onClick={() => setSelectedLanguage(l)}
                                className="rounded-xl py-2.5 px-3 cursor-pointer text-slate-600 font-medium focus:text-brand-primary focus:bg-orange-50 justify-between"
                              >
                                {l}
                                {selectedLanguage === l && (
                                  <Check
                                    size={16}
                                    className="text-brand-primary"
                                  />
                                )}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Search Button */}
                        <button
                          onClick={handleSearch}
                          className="h-[60px] px-8 bg-brand-primary hover:bg-[#d64a1d] text-white rounded-[1.5rem] font-bold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 active:scale-95 transition-all flex items-center justify-center gap-2 min-w-[120px]"
                        >
                          <Search size={20} strokeWidth={3} />
                          <span>Search</span>
                        </button>
                      </div>
                    </div>

                    {/* Filter Extension Area - Easily expandable */}
                    <div
                      className="w-full hidden empty:hidden border-t border-slate-100 mt-1 pt-1"
                      id="search-filters"
                    >
                      {/* Add your filters here. Example:
                      <div className="flex gap-2 p-2">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Filters:</span>
                        ...
                      </div>
                      */}
                    </div>
                  </div>
                </m.div>
              </div>
            </m.div>
          ) : (
            // --- APP STATE: SPLIT VIEW ---
            <div className="w-full h-full flex flex-col md:flex-row">
              {/* LEFT SIDEBAR (Search + Related) */}
              <m.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full md:w-1/2 bg-zinc-200/70 flex flex-col gap-4 shrink-0 z-20 p-4"
              >
                {/* 1. Sidebar Search Header (Replaced with Modern Search Bar) */}
                <div className="z-10">
                  <div className="bg-white p-2 rounded-[1.5rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-200/60 ring-2 ring-slate-50/50 flex flex-col gap-2">
                    {/* Top Row: Search Input */}
                    <div className="flex items-center h-[50px] bg-slate-50 hover:bg-slate-100/80 focus-within:bg-white rounded-[1.2rem] px-4 border border-transparent focus-within:border-brand-primary/20 focus-within:shadow-[0_0_0_3px_rgba(241,90,41,0.05)] transition-all group">
                      <Search
                        className="text-slate-400 mr-2 group-focus-within:text-brand-primary transition-colors"
                        size={18}
                        strokeWidth={2.5}
                      />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
                        placeholder="New keyword..."
                        className="flex-1 bg-transparent border-none text-slate-800 font-semibold placeholder:text-slate-400 focus:ring-0 text-sm h-full"
                      />
                    </div>

                    {/* Bottom Row: Controls */}
                    <div className="flex items-center gap-1.5 justify-between">
                      {/* Country Dropdown */}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="h-[46px] px-3 rounded-[1.2rem] bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 flex items-center gap-2 text-slate-700 font-semibold text-xs transition-all whitespace-nowrap min-w-[30%] justify-between group/country flex-1">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-blue-100/50 flex items-center justify-center text-blue-600 group-hover/country:bg-blue-100 transition-all shrink-0">
                                <MapPin size={14} strokeWidth={2.5} />
                              </div>
                              <span className="truncate">
                                {selectedCountry}
                              </span>
                            </div>
                            <ChevronDown
                              size={12}
                              className="opacity-50 shrink-0"
                            />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="max-h-[300px] overflow-y-auto min-w-[200px] p-2 rounded-2xl z-50">
                          {[
                            "United States",
                            "United Kingdom",
                            "Canada",
                            "Australia",
                            "India",
                            "Germany",
                            "France",
                            "Spain",
                          ].map((c) => (
                            <DropdownMenuItem
                              key={c}
                              onClick={() => setSelectedCountry(c)}
                              className="rounded-xl py-2 px-3 cursor-pointer text-slate-600 font-medium focus:text-brand-primary focus:bg-orange-50 justify-between text-xs"
                            >
                              {c}
                              {selectedCountry === c && (
                                <Check
                                  size={14}
                                  className="text-brand-primary"
                                />
                              )}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>

                      {/* Language Dropdown */}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="h-[46px] px-3 rounded-[1.2rem] bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 flex items-center gap-2 text-slate-700 font-semibold text-xs transition-all whitespace-nowrap min-w-[30%] justify-between group/lang flex-1">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-purple-100/50 flex items-center justify-center text-purple-600 group-hover/lang:bg-purple-100 transition-all shrink-0">
                                <Globe size={14} strokeWidth={2.5} />
                              </div>
                              <span className="truncate">
                                {selectedLanguage}
                              </span>
                            </div>
                            <ChevronDown
                              size={12}
                              className="opacity-50 shrink-0"
                            />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="max-h-[300px] overflow-y-auto min-w-[200px] p-2 rounded-2xl z-50">
                          {[
                            "English",
                            "Spanish",
                            "French",
                            "German",
                            "Italian",
                            "Portuguese",
                          ].map((l) => (
                            <DropdownMenuItem
                              key={l}
                              onClick={() => setSelectedLanguage(l)}
                              className="rounded-xl py-2 px-3 cursor-pointer text-slate-600 font-medium focus:text-brand-primary focus:bg-orange-50 justify-between text-xs"
                            >
                              {l}
                              {selectedLanguage === l && (
                                <Check
                                  size={14}
                                  className="text-brand-primary"
                                />
                              )}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>

                      {/* Search Button */}
                      <button
                        onClick={handleSearch}
                        className="w-[46px] h-[46px] bg-brand-primary hover:bg-[#d64a1d] text-white rounded-[1.2rem] font-bold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 active:scale-95 transition-all flex items-center justify-center shrink-0"
                      >
                        <Search size={18} strokeWidth={3} />
                      </button>
                    </div>

                    {/* Filter Extension Area - Easily expandable */}
                    <div
                      className="w-full hidden empty:hidden border-t border-slate-100 mt-0.5 pt-1"
                      id="sidebar-search-filters"
                    >
                      {/* Add your filters here. Example:
                      <div className="flex gap-2 p-2">
                         ...
                      </div>
                      */}
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col min-h-0 bg-white rounded-4xl overflow-hidden">
                  {/* Tabs / Filters Header */}
                  <div className="px-4 py-3 bg-white flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-800">
                      Related Keywords
                    </h3>
                    <div className="flex gap-1">
                      <button className="p-1.5 rounded-md hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
                        <Download size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Scrollable Table */}
                  <div className="flex-1 overflow-y-auto overflow-x-hidden p-2">
                    {isAnalyzing ? (
                      <div className="space-y-3 p-2">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                          <Skeleton
                            key={i}
                            className="h-12 w-full rounded-xl"
                          />
                        ))}
                      </div>
                    ) : (
                      <RelatedKeywordsTable
                        data={relatedKeywords}
                        onSelectKeyword={(kw) => {
                          handleQuickSearch({
                            preventDefault: () => {},
                          } as any); // Type cast mostly wrapper
                          setSearchQuery(kw);
                          performSearch(kw);
                        }}
                      />
                    )}
                  </div>
                </div>
              </m.div>

              {/* RIGHT MAIN CONTENT (Analysis) */}
              <div className="w-full md:w-1/2 flex flex-col min-h-0 bg-[#f8f9fc] overflow-y-auto md:overflow-hidden">
                {isAnalyzing ? (
                  // Custom Loading Skeleton for Right Side
                  <div className="p-6 h-full flex flex-col gap-6 overflow-hidden">
                    <div className="h-[320px] flex gap-6 shrink-0">
                      <Skeleton className="w-1/3 h-full rounded-4xl" />
                      <Skeleton className="w-2/3 h-full rounded-4xl" />
                    </div>
                    <Skeleton className="flex-1 w-full rounded-4xl" />
                  </div>
                ) : (
                  <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col h-full gap-2 p-4 md:p-6 overflow-y-auto"
                  >
                    {/* Top Section: Header + Metrics - Adjusted for 25% height target */}
                    <div className="shrink-0 flex flex-col gap-4">
                      <div className="flex items-start justify-between shrink-0">
                        <div className="flex flex-col gap-1">
                          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                            {currentKeyword}
                          </h2>
                          <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
                            <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-md border border-slate-100">
                              <MapPin
                                size={12}
                                className="text-brand-primary"
                              />
                              {selectedCountry}
                            </div>
                            <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-md border border-slate-100">
                              <Globe size={12} className="text-blue-500" />
                              {selectedLanguage}
                            </div>
                            <div className="flex items-center gap-1 bg-purple-50 text-purple-700 px-2 py-1 rounded-md border border-purple-100">
                              <Sparkles size={12} />
                              Commercial
                            </div>
                          </div>
                        </div>
                        <div className="text-sm font-medium text-slate-400 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                          Volume:{" "}
                          <span className="text-slate-900 font-bold">
                            {formattedVolume.val}
                            {formattedVolume.suffix}
                          </span>
                        </div>
                      </div>

                      {/* Metrics Grid */}
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 flex-1 min-h-0">
                        {/* Difficulty Card */}
                        <div className="lg:col-span-1 h-full min-h-0">
                          <div className="bg-white rounded-4xl p-4 hover:shadow-xl transition-all duration-300 border border-slate-200/60 flex flex-col h-full group relative overflow-hidden">
                            <div className="flex justify-between items-center mb-2 z-10">
                              <div className="text-center gap-2 w-full">
                                <h2 className="text-lg font-bold text-gray-900">
                                  Keyword Difficulty
                                </h2>
                              </div>
                            </div>

                            <div className="relative flex-1 min-h-0 w-full flex flex-col items-center justify-center">
                              {/* Segmented Gauge using PieChart */}
                              <div className="flex-1 w-full min-h-0">
                                <ResponsiveContainer width="100%" height="110%">
                                  <PieChart>
                                    <Pie
                                      data={(() => {
                                        const totalSlices = 20;
                                        const activeSlices = Math.round(
                                          (keywordDifficulty / 100) *
                                            totalSlices,
                                        );
                                        const slices = [];
                                        for (let i = 0; i < totalSlices; i++) {
                                          slices.push({
                                            value: 1,
                                            fill:
                                              i < activeSlices
                                                ? "#F15A29"
                                                : "#fff1e3",
                                          });
                                        }
                                        return slices;
                                      })()}
                                      cx="50%"
                                      cy="60%"
                                      startAngle={180}
                                      endAngle={0}
                                      innerRadius="80%"
                                      outerRadius="120%"
                                      paddingAngle={3}
                                      dataKey="value"
                                      stroke="none"
                                      cornerRadius={4}
                                    >
                                      {(() => {
                                        const totalSlices = 20;
                                        const activeSlices = Math.round(
                                          (keywordDifficulty / 100) *
                                            totalSlices,
                                        );
                                        const slices = [];
                                        for (let i = 0; i < totalSlices; i++) {
                                          const shadeOpacity =
                                            0.5 + (i / totalSlices) * 0.5;

                                          slices.push(
                                            <Cell
                                              key={`cell-${i}`}
                                              fill={
                                                i < activeSlices
                                                  ? "#F15A29"
                                                  : "#eeeeee"
                                              }
                                              fillOpacity={
                                                i < activeSlices
                                                  ? shadeOpacity
                                                  : 1
                                              }
                                            />,
                                          );
                                        }
                                        return slices;
                                      })()}
                                    </Pie>
                                  </PieChart>
                                </ResponsiveContainer>
                              </div>

                              <div className="absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                <p className="text-4xl font-extrabold text-slate-900 tracking-tight">
                                  {keywordDifficulty}
                                </p>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4">
                                  /100
                                </p>
                                <span
                                  className={`text-sm font-bold px-3 py-1.5 rounded-full border ${keywordDifficulty > 70 ? "bg-rose-50 text-rose-600 border-rose-100" : keywordDifficulty > 40 ? "bg-orange-50 text-orange-600 border-orange-100" : "bg-emerald-50 text-emerald-600 border-emerald-100"}`}
                                >
                                  {keywordDifficulty > 70
                                    ? "Hard to Rank"
                                    : keywordDifficulty > 40
                                      ? "Moderate"
                                      : "Easy to Rank"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Volume & Trends */}
                        <div className="lg:col-span-2 h-full min-h-0">
                          <SearchVolumeCard />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Section: SERP - Takes remaining height (approx 72%) */}
                    <div className="flex-1 min-h-0">
                      <div className="bg-white rounded-4xl border border-slate-200/60  h-full flex flex-col overflow-hidden">
                        <div className="p-2 border-b border-slate-100 flex items-center justify-between shrink-0">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-6 bg-brand-prtext-brand-primary rounded-full"></span>
                            <h3 className="text-lg font-bold text-slate-900">
                              SERP Overview
                            </h3>
                          </div>
                          <button className="px-4 py-2 bg-brand-prtext-brand-primary/10 text-brand-primary rounded-xl text-xs font-bold hover:bg-brand-prtext-brand-primary/20 transition-colors">
                            Analyze SERP
                          </button>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                          <SerpCompetitorsTable data={serpCompetitors} />
                        </div>
                      </div>
                    </div>
                  </m.div>
                )}
              </div>
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
