"use client";

import React, { useState, useEffect, useRef } from "react";
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
  Loader2,
} from "lucide-react";
import {
  RelatedKeywordsTable,
  RelatedKeywordData,
} from "@/components/keyword-research/related-keywords-table";
import { SegmentedControl } from "@/components/ui/segmented-control";
import {
  SerpCompetitorData,
  SerpCompetitorsTable,
} from "@/components/keyword-research/serp-competitors-table";
import { ModernSearchBar } from "@/components/keyword-research/modern-search-bar";
import { Skeleton } from "@/components/ui/skeleton";
import { AnimatedNumber } from "@/components/ui/animated-number";

// --- Mock Data ---

const FULL_RELATED_KEYWORDS: RelatedKeywordData[] = [
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
    <div className="bg-white rounded-3xl p-4 pt-2 border border-slate-200/60 flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-2 shrink-0">
        <div className="flex items-center gap-2">
          <h2 className="text-md font-bold text-gray-900">Search Volume</h2>
        </div>
        <SegmentedControl
          options={[
            { label: "6M", value: "6m" },
            { label: "1Y", value: "1y" },
          ]}
          value={timeRange}
          onChange={(val) => setTimeRange(val as "1y" | "6m")}
        />
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
        <div className="w-1/4 flex flex-col gap-2">
          {/* Peak Volume */}
          <div className="flex-1 bg-slate-50 rounded-2xl p-3 border border-slate-100 flex flex-col justify-center items-start group hover:border-orange-100 hover:bg-orange-50/30 transition-colors">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider flex items-center gap-1">
              <TrendingUp size={12} /> Peak
            </span>
            <span className="text-xl font-extrabold text-slate-900 tracking-tight truncate w-full">
              <AnimatedNumber
                value={peakVolume / 1000000}
                suffix="M"
                decimals={1}
              />
            </span>
          </div>

          {/* Monthly Avg */}
          <div className="flex-1 bg-slate-50 rounded-2xl p-3 border border-slate-100 flex flex-col justify-center items-start group hover:border-blue-100 hover:bg-blue-50/30 transition-colors">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider flex items-center gap-1">
              <Equal size={12} /> Average
            </span>
            <span className="text-xl font-extrabold text-slate-900 tracking-tight truncate w-full">
              <AnimatedNumber
                value={avgVolume / 1000000}
                suffix="M"
                decimals={1}
              />
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
  const [showFilters, setShowFilters] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isIntentRevealed, setIsIntentRevealed] = useState(false);
  const [isIntentLoading, setIsIntentLoading] = useState(false);

  // Initialize related keywords with hidden intent/difficulty
  const [relatedKeywords, setRelatedKeywords] = useState<RelatedKeywordData[]>(
    () =>
      FULL_RELATED_KEYWORDS.map((k) => ({
        ...k,
        intent: null,
        difficulty: null,
      })),
  );

  const handleFetchRelatedData = async (
    id: string,
    type: "intent" | "difficulty",
  ) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const fullItem = FULL_RELATED_KEYWORDS.find((k) => k.id === id);
    if (!fullItem) return;

    setRelatedKeywords((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            [type]: fullItem[type],
          };
        }
        return item;
      }),
    );
  };

  // Layout State
  const [hasSearched, setHasSearched] = useState(false);
  const [searchBarDocked, setSearchBarDocked] = useState(false);

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);

  // Dynamic Search Bar Height Logic
  const searchBarRef = useRef<HTMLDivElement>(null);
  const [searchBarHeight, setSearchBarHeight] = useState(0);

  useEffect(() => {
    if (!searchBarRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setSearchBarHeight(entry.target.getBoundingClientRect().height);
      }
    });

    observer.observe(searchBarRef.current);
    return () => observer.disconnect();
  }, []);

  const handleExport = () => {
    if (isExporting) return;
    setIsExporting(true);
    // Simulate API call
    setTimeout(() => {
      setIsExporting(false);
      setExportSuccess(true);
      setTimeout(() => setExportSuccess(false), 2000);
    }, 1500);
  };

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    const checkTablet = () => setIsTablet(window.innerWidth < 1024);
    checkMobile();
    checkTablet();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("resize", checkTablet);
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("resize", checkTablet);
    };
  }, []);

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
    // Start Analysis Animation
    if (!hasSearched) {
      setHasSearched(true);
      setTimeout(() => setSearchBarDocked(true), 600);
    }
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
    setShowFilters(false);
    performSearch(searchQuery);
  };

  const handleQuickSearch = (term: string) => {
    setSearchQuery(term);
    performSearch(term);
  };

  return (
    <div className="flex flex-col h-dvh md:h-screen font-sans text-slate-900 overflow-y-auto md:overflow-hidden pt-14 w-full container container-4k">
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col md:flex-row relative md:overflow-hidden">
        {/* Backdrop for Filters */}
        <AnimatePresence>
          {showFilters && (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/20 backdrop-blur-xs z-40"
              onClick={() => setShowFilters(false)}
            />
          )}
        </AnimatePresence>

        {/* === THE FLYING SEARCH BAR (Always rendered, position changes) === */}
        <m.div
          initial={false}
          animate={{
            top: hasSearched ? "16px" : "50%",
            left: hasSearched ? (isMobile ? "50%" : "16px") : "50%",
            x: hasSearched ? (isMobile ? "-50%" : "0%") : "-50%",
            y: hasSearched ? "0%" : "-50%",
            width: isMobile ? "95%" : hasSearched ? "48%" : "60%",
          }}
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: 0.6,
          }}
          className="absolute z-50"
          ref={searchBarRef}
        >
          <ModernSearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
            onSearch={handleSearch}
            className={`w-full ${!hasSearched ? "shadow-xl shadow-black/5 rounded-3xl" : ""}`}
            hasSearched={searchBarDocked}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
          />
        </m.div>

        {/* === HERO CONTENT (Fades out when searching) === */}
        <AnimatePresence>
          {!hasSearched && (
            <m.div
              key="hero-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
              className="absolute inset-0 flex flex-col gap-0 items-center justify-center pointer-events-none pb-60 px-2"
            >
              <m.h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight text-center">
                Keyword Research Tool
              </m.h1>
              <m.p className="text-md sm:text-lg text-slate-500 text-center">
                Find easy-to-rank keywords with high search volume and low
                competition.
              </m.p>
            </m.div>
          )}
        </AnimatePresence>

        {/* === RESULTS CONTENT (Fades in after search bar moves) === */}
        <AnimatePresence>
          {hasSearched && (
            <m.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="w-full md:h-full flex flex-col md:flex-row"
            >
              {/* LEFT SIDEBAR (Behind the flying search bar) */}
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="w-full md:w-1/2 bg-zinc-200/70 flex flex-col gap-4 shrink-0 z-10 p-2 sm:p-4 transition-[padding] duration-300 min-h-[600px] md:min-h-0"
                style={{
                  paddingTop: hasSearched
                    ? `${searchBarHeight + 25}px`
                    : undefined,
                }}
              >
                {/* Related Keywords Table */}
                <m.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="flex-1 flex flex-col min-h-0 bg-white rounded-3xl overflow-hidden"
                >
                  <div className="px-4 py-2 bg-white flex items-center justify-between">
                    <h3 className="text-md font-bold text-slate-800">
                      Related Keywords
                    </h3>
                    <div className="flex gap-1">
                      <button
                        onClick={handleExport}
                        disabled={isExporting}
                        className="p-1.5 rounded-md hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors flex items-center gap-2 cursor-pointer justify-center border min-w-20"
                      >
                        <AnimatePresence mode="wait" initial={false}>
                          {isExporting ? (
                            <m.div
                              key="exporting"
                              initial={{ y: -10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: 10, opacity: 0 }}
                              className="flex items-center gap-2"
                            >
                              <Loader2 size={12} className="animate-spin" />
                              <span className="text-xs">Wait...</span>
                            </m.div>
                          ) : exportSuccess ? (
                            <m.div
                              key="success"
                              initial={{ y: -10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: 10, opacity: 0 }}
                              className="flex items-center gap-2 text-emerald-500"
                            >
                              <Check size={12} />
                              <span className="text-xs">Done</span>
                            </m.div>
                          ) : (
                            <m.div
                              key="idle"
                              initial={{ y: -10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: 10, opacity: 0 }}
                              className="flex items-center gap-2"
                            >
                              <Download size={12} />
                              <span className="text-xs">Export</span>
                            </m.div>
                          )}
                        </AnimatePresence>
                      </button>
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-col">
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
                        onFetchData={handleFetchRelatedData}
                        onSelectKeyword={(kw) => {
                          setSearchQuery(kw);
                          performSearch(kw);
                        }}
                      />
                    )}
                  </div>
                </m.div>
              </m.div>

              {/* RIGHT MAIN CONTENT (Analysis) */}
              <m.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="w-full md:w-1/2 flex flex-col min-h-[1000px] md:min-h-0 bg-zinc-100/70 overflow-visible md:overflow-hidden"
              >
                {isAnalyzing ? (
                  <div className="p-6 h-full flex flex-col gap-6 overflow-hidden">
                    <div className="h-[320px] flex gap-6 shrink-0">
                      <Skeleton className="w-1/3 h-full rounded-3xl" />
                      <Skeleton className="w-2/3 h-full rounded-3xl" />
                    </div>
                    <Skeleton className="flex-1 w-full rounded-3xl" />
                  </div>
                ) : (
                  <div className="flex flex-col h-full gap-2 p-4 overflow-y-auto">
                    {/* Header & Metrics */}
                    <div className="shrink-0 flex flex-col gap-4 h-auto md:h-1/2">
                      <div className="flex items-start justify-between">
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
                          </div>
                        </div>
                      </div>

                      {/* Metrics Grid */}
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 flex-1 min-h-[500px] md:min-h-0">
                        {/* Difficulty Card */}
                        <div className="lg:col-span-1 h-full min-h-[250px] md:min-h-0">
                          <div className="bg-white rounded-3xl p-4 pt-3 border border-slate-200/60 flex flex-col h-full group relative overflow-hidden">
                            <div className="text-center w-full mb-2">
                              <h2 className="text-md font-bold text-gray-900">
                                Keyword Difficulty
                              </h2>
                            </div>
                            <div className="relative flex-1 min-h-0 w-full flex flex-col items-center justify-center">
                              <ResponsiveContainer width="100%" height="110%">
                                <PieChart>
                                  <Pie
                                    data={Array.from({ length: 20 }).map(
                                      (_, i) => ({ value: 1 }),
                                    )}
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
                                    {Array.from({ length: 20 }).map((_, i) => (
                                      <Cell
                                        key={`cell-${i}`}
                                        fill={
                                          i <
                                          Math.round(
                                            (keywordDifficulty / 100) * 20,
                                          )
                                            ? "#F15A29"
                                            : "#eeeeee"
                                        }
                                        fillOpacity={
                                          i <
                                          Math.round(
                                            (keywordDifficulty / 100) * 20,
                                          )
                                            ? 0.5 + (i / 20) * 0.5
                                            : 1
                                        }
                                      />
                                    ))}
                                  </Pie>
                                </PieChart>
                              </ResponsiveContainer>
                              <div className="absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                <p className="text-4xl font-extrabold text-slate-900">
                                  <AnimatedNumber value={keywordDifficulty} />
                                </p>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4">
                                  /100
                                </p>
                                <span
                                  className={`text-sm font-bold px-3 py-1.5 rounded-full border ${keywordDifficulty > 70 ? "bg-rose-50 text-rose-600 border-rose-100" : keywordDifficulty > 40 ? "bg-orange-50 text-orange-600 border-orange-100" : "bg-emerald-50 text-emerald-600 border-emerald-100"}`}
                                >
                                  {keywordDifficulty > 70
                                    ? "Hard"
                                    : keywordDifficulty > 40
                                      ? "Moderate"
                                      : "Easy"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Volume Card */}
                        <div className="lg:col-span-2 h-full min-h-[250px] md:min-h-0">
                          <SearchVolumeCard />
                        </div>
                      </div>
                    </div>

                    {/* SERP Table Section */}
                    <div className="flex-1 min-h-[500px] md:min-h-0 h-auto md:h-1/2">
                      <div className="bg-white rounded-3xl border border-slate-200/60 h-full flex flex-col overflow-hidden">
                        <div className="p-4 py-2 p flex items-center justify-between">
                          <h3 className="text-md font-bold text-slate-900">
                            SERP Overview
                          </h3>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                          <SerpCompetitorsTable data={serpCompetitors} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </m.div>
            </m.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
