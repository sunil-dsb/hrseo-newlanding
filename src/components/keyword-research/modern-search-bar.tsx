"use client";

import React, { useState } from "react";
import {
  Search,
  MapPin,
  Globe,
  ChevronDown,
  Check,
  Filter,
  SlidersHorizontal,
  X,
  ArrowUpDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { m, AnimatePresence } from "framer-motion";
import { SegmentedControl } from "@/components/ui/segmented-control";

interface ModernSearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
  onSearch: (e: React.FormEvent) => void;
  className?: string;
  layoutId?: string;
}

export function ModernSearchBar({
  searchQuery,
  setSearchQuery,
  selectedCountry,
  setSelectedCountry,
  selectedLanguage,
  setSelectedLanguage,
  onSearch,
  className = "",
  layoutId,
}: ModernSearchBarProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [searchMode, setSearchMode] = useState<"research" | "refiner">(
    "research",
  );
  const [sortBy, setSortBy] = useState("relevance");

  // Filter states
  const [minVolume, setMinVolume] = useState("");
  const [maxDifficulty, setMaxDifficulty] = useState("");
  const [includeKeywords, setIncludeKeywords] = useState("");
  const [excludeKeywords, setExcludeKeywords] = useState("");
  const [minCpc, setMinCpc] = useState("");
  const [maxCpc, setMaxCpc] = useState("");
  const [selectedIntent, setSelectedIntent] = useState<string[]>([]);

  const intents = [
    "Informational",
    "navigational",
    "Commercial",
    "Transactional",
  ];

  const toggleIntent = (intent: string) => {
    if (selectedIntent.includes(intent)) {
      setSelectedIntent(selectedIntent.filter((i) => i !== intent));
    } else {
      setSelectedIntent([...selectedIntent, intent]);
    }
  };

  return (
    <m.div
      layoutId={layoutId}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
      className={`flex flex-col gap-2 z-30 ${className}`}
    >
      {/* Main Bar */}
      <div className="bg-white rounded-[1.5rem] shadow-xl">
        <form
          onSubmit={onSearch}
          className="flex flex-col md:flex-row items-center p-1.5 gap-1.5"
        >
          {/* Input Area */}
          <div className="flex-1 w-full flex items-center h-[52px] bg-slate-50 hover:bg-slate-100/80 focus-within:bg-white rounded-[1.2rem] px-4 border border-transparent focus-within:border-brand-primary/20 focus-within:shadow-[0_0_0_3px_rgba(241,90,41,0.05)] transition-all group">
            <Search
              className="text-slate-400 mr-3 group-focus-within:text-brand-primary transition-colors shrink-0"
              size={20}
              strokeWidth={2.5}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter keyword..."
              className="flex-1 bg-transparent border-none text-slate-800 font-semibold placeholder:text-slate-400 focus:ring-0 text-sm md:text-base h-full w-full min-w-0"
            />
          </div>

          {/* Divider visible only on md */}
          <div className="hidden md:block w-px h-8 bg-slate-200 mx-1"></div>

          {/* Controls Container */}
          <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto md:overflow-visible no-scrollbar">
            {/* Country Dropdown (Compact) */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="h-[52px] px-2.5 rounded-[1.2rem] hover:bg-slate-50 border border-transparent hover:border-slate-200 flex items-center gap-2 text-slate-700 font-semibold text-xs transition-all whitespace-nowrap min-w-fit justify-center group/country"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover/country:bg-blue-100 group-hover/country:scale-110 transition-all shrink-0">
                    <MapPin size={16} strokeWidth={2.5} />
                  </div>
                  <span className="uppercase">
                    {selectedCountry === "United States"
                      ? "US"
                      : selectedCountry === "United Kingdom"
                        ? "UK"
                        : selectedCountry.slice(0, 2)}
                  </span>
                  <ChevronDown size={12} className="opacity-40" />
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
                    className="rounded-xl py-2.5 px-3 cursor-pointer text-slate-600 font-medium focus:text-brand-primary focus:bg-orange-50 justify-between text-xs md:text-sm"
                  >
                    {c}
                    {selectedCountry === c && (
                      <Check size={16} className="text-brand-primary" />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language Dropdown (Compact) */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="h-[52px] px-2.5 rounded-[1.2rem] hover:bg-slate-50 border border-transparent hover:border-slate-200 flex items-center gap-2 text-slate-700 font-semibold text-xs transition-all whitespace-nowrap min-w-fit justify-center group/lang"
                >
                  <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 group-hover/lang:bg-purple-100 group-hover/lang:scale-110 transition-all shrink-0">
                    <Globe size={16} strokeWidth={2.5} />
                  </div>
                  <span className="uppercase">
                    {selectedLanguage.slice(0, 2)}
                  </span>
                  <ChevronDown size={12} className="opacity-40" />
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
                    className="rounded-xl py-2.5 px-3 cursor-pointer text-slate-600 font-medium focus:text-brand-primary focus:bg-orange-50 justify-between text-xs md:text-sm"
                  >
                    {l}
                    {selectedLanguage === l && (
                      <Check size={16} className="text-brand-primary" />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Search Button (Icon Only) */}
            <button
              type="submit"
              className="h-[52px] w-[52px] bg-brand-primary hover:bg-[#d64a1d] text-white rounded-[1.2rem] font-bold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 active:scale-95 transition-all flex items-center justify-center shrink-0 ml-1"
            >
              <Search size={22} strokeWidth={3} />
            </button>
          </div>
        </form>

        {/* Quick Actions & Mode Switch Row (Modified) */}
        <div className="px-4 pb-3 flex flex-col md:flex-row justify-between items-center gap-3 border-t border-slate-100/50 pt-2">
          {/* Left: Sorting & Filter (Moved here) */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto no-scrollbar mask-linear-fade">
            {/* Sorting Dropdown (Moved & Compacted) */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="h-9 px-3 rounded-lg bg-orange-50 hover:bg-orange-100 text-orange-700 border border-orange-100 flex items-center gap-2 text-xs font-bold transition-all whitespace-nowrap"
                >
                  <ArrowUpDown size={14} className="opacity-80" />
                  <span>
                    {sortBy === "relevance"
                      ? "Relevance"
                      : sortBy === "search_volume"
                        ? "Volume"
                        : sortBy === "competition_index"
                          ? "Competition"
                          : "Bid"}
                  </span>
                  <ChevronDown size={12} className="opacity-50" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="min-w-[180px] p-1.5 rounded-xl"
                align="start"
              >
                {[
                  { label: "Relevance", value: "relevance" },
                  { label: "Search Volume", value: "search_volume" },
                  { label: "Competition Index", value: "competition_index" },
                  {
                    label: "Low Top of Page Bid",
                    value: "low_top_of_page_bid",
                  },
                  {
                    label: "High Top of Page Bid",
                    value: "high_top_of_page_bid",
                  },
                ].map((opt) => (
                  <DropdownMenuItem
                    key={opt.value}
                    onClick={() => setSortBy(opt.value)}
                    className="rounded-lg py-2 px-2.5 cursor-pointer text-slate-600 font-medium focus:text-brand-primary focus:bg-orange-50 justify-between text-xs"
                  >
                    {opt.label}
                    {sortBy === opt.value && (
                      <Check size={14} className="text-brand-primary" />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Filter Toggle (Moved & Compacted) */}
            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className={`h-9 px-3 rounded-lg border flex items-center gap-2 text-xs font-bold transition-all ${showFilters ? "bg-slate-800 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`}
            >
              <SlidersHorizontal size={14} />
              <span>Filters</span>
            </button>
          </div>

          {/* Right: Search Mode Switch */}
          <div className="w-full md:w-auto shrink-0">
            <SegmentedControl
              options={[
                { label: "Keyword Research", value: "research" },
                { label: "Keyword Refiner", value: "refiner" },
              ]}
              value={searchMode}
              onChange={(val) => setSearchMode(val as "research" | "refiner")}
              size="xs"
              className="w-full md:w-auto text-xs"
            />
          </div>
        </div>

        {/* Filters Section (Collapsible) */}
        <AnimatePresence>
          {showFilters && (
            <m.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="p-4 border-t border-slate-100 bg-slate-50/50 rounded-b-[1.5rem]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Row 1: Core Metrics */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Min Volume
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 1000"
                      value={minVolume}
                      onChange={(e) => setMinVolume(e.target.value)}
                      className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-white text-sm focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Max Difficulty %
                    </label>
                    <input
                      type="number"
                      placeholder="0-100"
                      max={100}
                      value={maxDifficulty}
                      onChange={(e) => setMaxDifficulty(e.target.value)}
                      className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-white text-sm focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      CPC Range ($)
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="Min"
                        value={minCpc}
                        onChange={(e) => setMinCpc(e.target.value)}
                        className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-white text-sm focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all outline-none"
                      />
                      <input
                        type="number"
                        placeholder="Max"
                        value={maxCpc}
                        onChange={(e) => setMaxCpc(e.target.value)}
                        className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-white text-sm focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Empty slot or additional filter */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Competition
                    </label>
                    <select className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-white text-sm focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all outline-none appearance-none text-slate-600">
                      <option value="">Any</option>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>

                  {/* Row 2: Text Filters */}
                  <div className="space-y-2 lg:col-span-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Include Keywords
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. best, free (comma separated)"
                      value={includeKeywords}
                      onChange={(e) => setIncludeKeywords(e.target.value)}
                      className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-white text-sm focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all outline-none"
                    />
                  </div>

                  <div className="space-y-2 lg:col-span-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Exclude Keywords
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. cheap, nulled"
                      value={excludeKeywords}
                      onChange={(e) => setExcludeKeywords(e.target.value)}
                      className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-white text-sm focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all outline-none"
                    />
                  </div>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </m.div>
  );
}
