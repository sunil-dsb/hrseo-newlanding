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
} from "recharts";
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
} from "lucide-react"; // Import Gauge icon
import CardsComponent from "@/components/ui/cards-component";
import {
  RelatedKeywordsTable,
  RelatedKeywordData,
} from "@/components/keyword-research/related-keywords-table";
import {
  SerpCompetitorsTable,
  SerpCompetitorData,
} from "@/components/keyword-research/serp-competitors-table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

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
    intent: "Informational",
    cpc: "$0.80",
    volume: "35K",
    difficulty: 90,
  },
  {
    id: "5",
    keyword: "free rank tracker",
    intent: "Transactional",
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

export default function KeywordResearchPage() {
  const [searchQuery, setSearchQuery] = useState("seo tools");
  const [currentKeyword, setCurrentKeyword] = useState("seo tools");
  const [selectedCountry, setSelectedCountry] = useState("United States");
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  // Metrics that change based on keyword
  const searchVolume = 22500;
  const keywordDifficulty = 68; // 0 - 100
  const avgCpc = 2.45;

  // -- Speedometer Config --
  // using a half donut chart
  const gaugeData = [
    { name: "value", value: avgCpc },
    { name: "rest", value: 10 - avgCpc }, // Assuming max CPC visual is $10 for the gauge scale
  ];
  const gaugeColors = ["#F15A29", "#eee"];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentKeyword(searchQuery);
    // In a real app, this would fetch new data
  };

  return (
    <div className="w-full min-h-screen pt-32 sm:pt-40 flex justify-center">
      <main className="w-full max-w-[1600px] mx-auto px-4 sm:px-10 pb-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
          <div className="w-full">
            <div className="mb-2">
              <h1 className="text-3xl font-bold text-gray-900">
                Keyword Research
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                Analyze keyword performance and competition.
              </p>
            </div>

            {/* Search Bar Container */}
            <div className="w-full mt-6 bg-white p-2 rounded-3xl shadow-[0px_10px_40px_-5px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col lg:flex-row items-center gap-2 group transition-all duration-300">
              {/* Keyword Input Section */}
              <div className="relative flex-1 w-full lg:w-auto bg-gray-50/50 hover:bg-gray-50 rounded-2xl transition-colors h-16 flex items-center px-4 group/input border border-transparent focus-within:bg-white focus-within:border-gray-200">
                <div className="mr-3 w-10 h-10 rounded-full bg-orange-50 text-[#F15A29] flex items-center justify-center shrink-0">
                  <Search size={18} />
                </div>
                <div className="flex flex-col flex-1 h-full justify-center">
                  <label
                    htmlFor="keyword-search"
                    className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-0.5 pointer-events-none"
                  >
                    Target Keyword
                  </label>
                  <input
                    id="keyword-search"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
                    placeholder="e.g. best coffee machine"
                    className="w-full bg-transparent border-none p-0 text-gray-800 placeholder:text-gray-300 font-bold text-sm focus:ring-0 leading-tight"
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-10 bg-gray-100 hidden lg:block mx-1" />

              {/* Country Selection */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="w-full lg:w-48 bg-gray-50/50 hover:bg-gray-50 rounded-2xl transition-colors h-16 flex items-center px-4 cursor-pointer border border-transparent hover:border-gray-200 outline-none text-left">
                    <div className="mr-3 w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div className="flex flex-col flex-1 h-full justify-center">
                      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-0.5">
                        Location
                      </span>
                      <span className="text-gray-800 font-bold text-sm leading-tight truncate">
                        {selectedCountry}
                      </span>
                    </div>
                    <ChevronDown size={14} className="text-gray-400 ml-2" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-56 p-2 rounded-2xl border-gray-100 shadow-xl"
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
                      className="rounded-xl font-medium text-gray-600 focus:text-[#F15A29] focus:bg-orange-50 cursor-pointer py-2.5"
                    >
                      {country}
                      {selectedCountry === country && (
                        <Check size={14} className="ml-auto" />
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Divider */}
              <div className="w-px h-10 bg-gray-100 hidden lg:block mx-1" />

              {/* Language Selection */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="w-full lg:w-48 bg-gray-50/50 hover:bg-gray-50 rounded-2xl transition-colors h-16 flex items-center px-4 cursor-pointer border border-transparent hover:border-gray-200 outline-none text-left">
                    <div className="mr-3 w-10 h-10 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center shrink-0">
                      <Globe size={18} />
                    </div>
                    <div className="flex flex-col flex-1 h-full justify-center">
                      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-0.5">
                        Language
                      </span>
                      <span className="text-gray-800 font-bold text-sm leading-tight truncate">
                        {selectedLanguage}
                      </span>
                    </div>
                    <ChevronDown size={14} className="text-gray-400 ml-2" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-48 p-2 rounded-2xl border-gray-100 shadow-xl"
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
                      className="rounded-xl font-medium text-gray-600 focus:text-[#F15A29] focus:bg-orange-50 cursor-pointer py-2.5"
                    >
                      {lang}
                      {selectedLanguage === lang && (
                        <Check size={14} className="ml-auto" />
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="w-full lg:w-auto h-14 lg:h-16 px-8 bg-[#F15A29] hover:bg-[#d64a1d] text-white rounded-2xl font-bold shadow-lg shadow-orange-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Search size={20} className="text-white" strokeWidth={2.5} />
                <span className="lg:hidden">Analyze Keyword</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {/* 1. Bento Grid - Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Top of Page Bid - Premium Design */}
            <div className="">
              <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 rounded-4xl flex flex-col justify-between overflow-hidden h-full border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all duration-300">
                <div className="p-5 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] uppercase font-bold text-slate-400 tracking-[0.15em]">
                      Top of Page Bid
                    </span>
                  </div>

                  {/* Spacer to push content to bottom */}
                  <div className="flex-1 min-h-[60px]"></div>

                  {/* Bottom Stats */}
                  <div className="pt-4 pb-0 flex items-end justify-between">
                    <div className="flex gap-6">
                      <div>
                        <span className="text-3xl font-extrabold text-slate-900 tracking-tight block">
                          $1.75
                        </span>
                        <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                          Low Range
                        </span>
                      </div>
                      <div>
                        <span className="text-3xl font-extrabold text-slate-900 tracking-tight block">
                          $5.20
                        </span>
                        <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                          High Range
                        </span>
                      </div>
                    </div>
                    <div className="bg-slate-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-xl">
                      USD
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Average CPC - Premium Design */}
            <div className="">
              <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 rounded-4xl flex flex-col justify-between overflow-hidden h-full border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all duration-300">
                <div className="p-5 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] uppercase font-bold text-slate-400 tracking-[0.15em]">
                      Average CPC
                    </span>
                  </div>

                  {/* Spacer to push content to bottom */}
                  <div className="flex-1 min-h-[60px]"></div>

                  {/* Bottom Stats */}
                  <div className="pt-4 pb-0 flex items-end justify-between">
                    <div>
                      <span className="text-4xl font-extrabold text-slate-900 tracking-tight">
                        ${avgCpc.toFixed(2)}
                      </span>
                    </div>
                    <div className="bg-amber-500 text-white text-[11px] font-bold px-3 py-1.5 rounded-xl">
                      Moderate
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Keyword Difficulty - Big Size (Row Span 2) - Sales Overview Style */}
            <div className="lg:row-span-2">
              <div className="bg-white rounded-[1.5rem] p-6 shadow-sm border border-gray-100 flex flex-col justify-between h-full">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-900">
                    Keyword Difficulty
                  </h2>
                  <button className="text-gray-400 hover:text-gray-600 bg-gray-50 p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <MoreHorizontal size={20} />
                  </button>
                </div>

                <div className="relative h-[220px] w-full flex items-center justify-center -mt-4">
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
                            slices.push({
                              value: 1,
                              fill:
                                i < activeSlices
                                  ? i < activeSlices - 4
                                    ? keywordDifficulty > 70
                                      ? "#f43f5e"
                                      : keywordDifficulty > 40
                                        ? "#f59e0b"
                                        : "#10b981"
                                    : keywordDifficulty > 70
                                      ? "#fda4af"
                                      : keywordDifficulty > 40
                                        ? "#fcd34d"
                                        : "#86efac"
                                  : "#E5E7EB",
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
                            slices.push(
                              <Cell
                                key={`cell-${i}`}
                                fill={
                                  i < activeSlices
                                    ? i < activeSlices - 4
                                      ? keywordDifficulty > 70
                                        ? "#f43f5e"
                                        : keywordDifficulty > 40
                                          ? "#f59e0b"
                                          : "#10b981"
                                      : keywordDifficulty > 70
                                        ? "#fda4af"
                                        : keywordDifficulty > 40
                                          ? "#fcd34d"
                                          : "#86efac"
                                    : "#E5E7EB"
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
                    <p className="text-4xl font-bold text-gray-900 tracking-tight">
                      {keywordDifficulty}%
                    </p>
                    <p className="text-sm text-gray-400 font-medium mt-1">
                      {keywordDifficulty > 70
                        ? "Hard to Rank"
                        : keywordDifficulty > 40
                          ? "Moderate Competition"
                          : "Easy to Rank"}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <div
                    className={`p-5 rounded-2xl border ${keywordDifficulty > 70 ? "bg-[#FFF1F2] border-rose-100/50" : keywordDifficulty > 40 ? "bg-[#FFFBEB] border-amber-100/50" : "bg-[#ECFDF5] border-emerald-100/50"}`}
                  >
                    <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-1.5 opacity-80">
                      Ranking Difficulty
                    </p>
                    <div className="flex items-end justify-between">
                      <span className="text-xl font-bold text-gray-900">
                        {keywordDifficulty > 70
                          ? "High"
                          : keywordDifficulty > 40
                            ? "Medium"
                            : "Low"}
                      </span>
                      <span
                        className={`inline-flex items-center px-1.5 py-0.5 rounded-md text-[10px] font-bold ${keywordDifficulty > 70 ? "bg-rose-100 text-rose-600" : keywordDifficulty > 40 ? "bg-amber-100 text-amber-600" : "bg-emerald-100 text-emerald-600"}`}
                      >
                        {keywordDifficulty}/100
                      </span>
                    </div>
                  </div>
                  <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                    <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-1.5 opacity-80">
                      Content Gap
                    </p>
                    <div className="flex items-end justify-between">
                      <span className="text-xl font-bold text-gray-900">
                        12
                      </span>
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[10px] font-bold bg-black text-white">
                        Topics
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Average Search Volume - Premium Design */}
            <div className="">
              <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 rounded-4xl flex flex-col justify-between overflow-hidden h-full border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all duration-300">
                <div className="p-5 pb-0 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] uppercase font-bold text-slate-400 tracking-[0.15em]">
                      Average Search Volume
                    </span>
                  </div>

                  {/* Chart Area with Indicator */}
                  <div className="relative flex-1 min-h-[90px] -mx-5">
                    <ResponsiveContainer width="100%" height={90}>
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
                        margin={{ top: 15, right: 0, left: 0, bottom: 0 }}
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

                  {/* Bottom Stats */}
                  <div className="pt-4 pb-5 flex items-end justify-between">
                    <div>
                      <span className="text-4xl font-extrabold text-slate-900 tracking-tight">
                        12.5k
                      </span>
                    </div>
                    <div className="bg-slate-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-xl">
                      Monthly
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Search Intent - Premium Design */}
            <div className="">
              <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 rounded-4xl flex flex-col justify-between overflow-hidden h-full border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all duration-300">
                <div className="p-5 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] uppercase font-bold text-slate-400 tracking-[0.15em]">
                      Search Intent
                    </span>
                  </div>

                  {/* Spacer to push content to bottom */}
                  <div className="flex-1 min-h-[60px]"></div>

                  {/* Bottom Stats */}
                  <div className="pt-4 pb-0 flex flex-col gap-2">
                    <div className="bg-purple-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-xl w-fit">
                      Educational
                    </div>
                    <span className="text-4xl font-extrabold text-slate-900 tracking-tight">
                      Informational
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Related Keywords */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Related Keywords Table on Left */}
            <div className="lg:col-span-9 order-2 lg:order-1">
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
            <div className="lg:col-span-3 h-full order-1 lg:order-2">
              <div className="bg-white rounded-[1.5rem] p-6 shadow-sm border border-gray-100 flex flex-col justify-between h-full min-h-[400px]">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-900">
                    Search Volume
                  </h2>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100 text-xs font-semibold text-gray-600 hover:bg-gray-100 transition-colors">
                    This Year <ChevronDown size={14} />
                  </button>
                </div>

                {/* Chart Area */}
                <div className="flex-1 min-h-[200px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={keywordVolumeHistory} barSize={24}>
                      <defs>
                        <linearGradient
                          id="searchVolumeGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#f15a29"
                            stopOpacity={1}
                          />
                          <stop
                            offset="100%"
                            stopColor="#FFEDD5"
                            stopOpacity={0.8}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="#E5E7EB"
                      />
                      <XAxis
                        dataKey="month"
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
                                  {label} 2024
                                </p>
                                <div className="flex items-center justify-between gap-4">
                                  <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-[#F15A29] shadow-[0_0_8px_rgba(241,90,41,0.5)]"></div>
                                    <span className="text-xs font-medium text-gray-500">
                                      Volume
                                    </span>
                                  </div>
                                  <span className="text-sm font-bold text-gray-900">
                                    {(
                                      payload[0].value as number
                                    ).toLocaleString()}
                                  </span>
                                </div>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Bar dataKey="volume" radius={[8, 8, 8, 8]}>
                        {keywordVolumeHistory.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={
                              entry.month === "Nov"
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
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="p-4 bg-[#FFF7ED] rounded-2xl border border-orange-100/50">
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-1 opacity-80">
                      Peak Volume
                    </p>
                    <div className="flex items-end justify-between">
                      <span className="text-lg font-bold text-gray-900">
                        {searchVolume.toLocaleString()}
                      </span>
                      <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-md text-[10px] font-bold bg-[#FFEDD5] text-[#EA580C]">
                        <ArrowUpRight size={10} strokeWidth={3} />
                        12%
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-1 opacity-80">
                      Monthly Avg
                    </p>
                    <div className="flex items-end justify-between">
                      <span className="text-lg font-bold text-gray-900">
                        16.7k
                      </span>
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[10px] font-bold bg-black text-white">
                        Stable
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. SERP Competitors */}
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
        </div>
      </main>
    </div>
  );
}
