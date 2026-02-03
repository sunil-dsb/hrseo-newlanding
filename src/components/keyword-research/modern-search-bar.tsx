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
  ChevronUp,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
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
  hasSearched?: boolean;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
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
  hasSearched = false,
  showFilters,
  setShowFilters,
}: ModernSearchBarProps) {
  const [searchMode, setSearchMode] = useState<"research" | "refiner">(
    "research",
  );
  const [sortBy, setSortBy] = useState("relevance");

  // Combobox Open States
  const [openCountry, setOpenCountry] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const [openCompetition, setOpenCompetition] = useState(false);
  const [selectedCompetition, setSelectedCompetition] = useState("");

  // Filter states
  const [minVolume, setMinVolume] = useState("");
  const [maxDifficulty, setMaxDifficulty] = useState("");
  const [includeKeywords, setIncludeKeywords] = useState("");
  const [excludeKeywords, setExcludeKeywords] = useState("");
  const [minCpc, setMinCpc] = useState("");
  const [maxCpc, setMaxCpc] = useState("");

  return (
    <m.div
      layoutId={layoutId}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
      className={`flex flex-col gap-2 ${className}`}
    >
      {/* Main Bar */}
      <div
        className={`bg-white rounded-3xl transition-shadow duration-300 ${
          showFilters ? "shadow-2xl shadow-black/30" : ""
        }`}
      >
        <form
          onSubmit={onSearch}
          className="flex flex-col md:flex-row items-center p-2 pb-1 gap-1.5"
        >
          {/* Input Area */}
          <div className="flex-1 w-full flex items-center bg-slate-50 hover:bg-slate-100/80 focus-within:bg-white rounded-xl px-4 border border-transparent focus-within:border-brand-primary/20 transition-all group">
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
              className="flex-1 bg-transparent border-none text-slate-800 font-semibold placeholder:text-slate-400 focus:ring-0 text-sm md:text-base py-2 w-full min-w-0 outline-0"
            />
          </div>

          {/* Controls Container */}
          <div className="flex items-center gap-1.5 w-full md:w-auto">
            {/* Country Combobox */}
            <Popover open={openCountry} onOpenChange={setOpenCountry}>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  role="combobox"
                  aria-expanded={openCountry}
                  className="p-2.5 py-2 rounded-3xl hover:bg-slate-50 border border-transparent hover:border-slate-200 flex items-center gap-2 text-slate-700 font-semibold text-xs transition-all whitespace-nowrap min-w-fit justify-center group/country cursor-pointer focus:outline-none w-full lg:w-auto"
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
              </PopoverTrigger>
              <PopoverContent
                className="w-[240px] p-0 rounded-2xl border-none shadow-2xl shadow-black/20"
                align="start"
                sideOffset={8}
              >
                <Command className="bg-white rounded-2xl">
                  <div className="border-b border-slate-100 px-3">
                    <CommandInput
                      placeholder="Search country..."
                      className="h-12 text-sm font-medium text-slate-800 placeholder:text-slate-400 border-none focus:ring-0"
                    />
                  </div>
                  <CommandList className="p-1.5 max-h-[280px] overflow-y-auto">
                    <CommandEmpty className="py-4 text-center text-xs text-slate-400 font-medium">
                      No country found.
                    </CommandEmpty>
                    <CommandGroup>
                      {[
                        "United States",
                        "United Kingdom",
                        "Canada",
                        "Australia",
                        "India",
                        "Germany",
                        "France",
                        "Spain",
                      ].map((country) => (
                        <CommandItem
                          key={country}
                          value={country}
                          onSelect={(currentValue) => {
                            // cmdk returns lowercase value usually, but we want the original casing or specific value
                            // To be safe, we use the original 'country' variable.
                            setSelectedCountry(country);
                            setOpenCountry(false);
                          }}
                          className="rounded-xl px-3 py-2.5 cursor-pointer text-slate-600 font-medium text-xs md:text-sm transition-colors data-[selected=true]:bg-orange-50 data-[selected=true]:text-brand-primary flex items-center justify-between group"
                        >
                          <span>{country}</span>
                          {selectedCountry === country && (
                            <Check className="h-4 w-4 text-brand-primary" />
                          )}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            {/* Language Combobox */}
            <Popover open={openLanguage} onOpenChange={setOpenLanguage}>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  role="combobox"
                  aria-expanded={openLanguage}
                  className="p-2.5 py-2 rounded-3xl hover:bg-slate-50 border border-transparent hover:border-slate-200 flex items-center gap-2 text-slate-700 font-semibold text-xs transition-all whitespace-nowrap min-w-fit justify-center group/lang cursor-pointer focus:outline-none w-full lg:w-auto"
                >
                  <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 group-hover/lang:bg-purple-100 group-hover/lang:scale-110 transition-all shrink-0">
                    <Globe size={16} strokeWidth={2.5} />
                  </div>
                  <span className="uppercase">
                    {selectedLanguage.slice(0, 2)}
                  </span>
                  <ChevronDown size={12} className="opacity-40" />
                </button>
              </PopoverTrigger>
              <PopoverContent
                className="w-[200px] p-0 rounded-2xl border-none shadow-2xl shadow-black/20"
                align="start"
                sideOffset={8}
              >
                <Command className="bg-white rounded-2xl">
                  <div className="border-b border-slate-100 px-3">
                    <CommandInput
                      placeholder="Search language..."
                      className="h-12 text-sm font-medium text-slate-800 placeholder:text-slate-400 border-none focus:ring-0"
                    />
                  </div>
                  <CommandList className="p-1.5 max-h-[280px] overflow-y-auto">
                    <CommandEmpty className="py-4 text-center text-xs text-slate-400 font-medium">
                      No language found.
                    </CommandEmpty>
                    <CommandGroup>
                      {[
                        "English",
                        "Spanish",
                        "French",
                        "German",
                        "Italian",
                        "Portuguese",
                      ].map((language) => (
                        <CommandItem
                          key={language}
                          value={language}
                          onSelect={(currentValue) => {
                            setSelectedLanguage(language);
                            setOpenLanguage(false);
                          }}
                          className="rounded-xl px-3 py-2.5 cursor-pointer text-slate-600 font-medium text-xs md:text-sm transition-colors data-[selected=true]:bg-orange-50 data-[selected=true]:text-brand-primary flex items-center justify-between group"
                        >
                          <span>{language}</span>
                          {selectedLanguage === language && (
                            <Check className="h-4 w-4 text-brand-primary" />
                          )}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            {/* Search Button (Icon Only) */}
            <button
              type="submit"
              className="bg-brand-primary text-white rounded-2xl font-bold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 active:scale-95 transition-all flex items-center justify-center ml-1 cursor-pointer p-3 w-full lg:w-auto"
            >
              <Search size={22} strokeWidth={3} />
            </button>
          </div>
        </form>

        {/* Quick Actions & Mode Switch Row (Modified) - Shows only after search */}
        <AnimatePresence>
          {hasSearched && (
            <m.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-2 pt-1.5 flex flex-row justify-between items-center gap-3 border-t border-slate-100/50">
                {/* Left: Sorting & Filter (Moved here) */}
                <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto no-scrollbar mask-linear-fade">
                  {/* Sorting Dropdown (Moved & Compacted) */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        type="button"
                        className="p-2 px-2 sm:px-3 rounded-lg bg-orange-50 hover:bg-orange-100 text-orange-700 border border-orange-100 flex items-center gap-2 text-xs font-bold transition-all whitespace-nowrap cursor-pointer"
                      >
                        <ArrowUpDown size={14} className="opacity-80" />
                        <span className="hidden lg:block">
                          {sortBy === "relevance"
                            ? "Relevance"
                            : sortBy === "search_volume"
                              ? "Volume"
                              : sortBy === "competition_index"
                                ? "Competition"
                                : "Bid"}
                        </span>
                        <ChevronDown
                          size={12}
                          className="opacity-50 hidden lg:block"
                        />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="min-w-[180px] p-1.5 rounded-xl shadow-xl shadow-black/10 border-slate-100"
                      align="start"
                    >
                      {[
                        { label: "Relevance", value: "relevance" },
                        { label: "Search Volume", value: "search_volume" },
                        {
                          label: "Competition Index",
                          value: "competition_index",
                        },
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
                          className="rounded-lg py-2 px-2.5 cursor-pointer text-slate-600 font-medium focus:text-brand-primary focus:bg-orange-50 justify-between text-xs transition-colors"
                        >
                          {opt.label}
                          {sortBy === opt.value && (
                            <Check
                              size={14}
                              className="text-brand-primary hidden sm:block"
                            />
                          )}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* Filter Toggle (Moved & Compacted) */}
                  <button
                    type="button"
                    onClick={() => setShowFilters(!showFilters)}
                    className={`p-2 px-2 sm:px-3 rounded-lg border flex items-center gap-2 text-xs font-bold transition-all cursor-pointer ${showFilters ? "bg-slate-800 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`}
                  >
                    <SlidersHorizontal size={14} />
                    <span className="hidden lg:block">Filters</span>
                    {showFilters ? (
                      <ChevronUp
                        size={14}
                        className="ml-1 opacity-70 hidden lg:block"
                      />
                    ) : (
                      <ChevronDown
                        size={14}
                        className="ml-1 opacity-50 hidden lg:block"
                      />
                    )}
                  </button>
                </div>

                {/* Right: Search Mode Switch */}
                <div>
                  <SegmentedControl
                    options={[
                      {
                        label: (
                          <>
                            <span className="hidden lg:inline">
                              Keyword Research
                            </span>
                            <span className="lg:hidden">Research</span>
                          </>
                        ),
                        value: "research",
                      },
                      {
                        label: (
                          <>
                            <span className="hidden lg:inline">
                              Keyword Refiner
                            </span>
                            <span className="lg:hidden">Refiner</span>
                          </>
                        ),
                        value: "refiner",
                      },
                    ]}
                    value={searchMode}
                    onChange={(val) =>
                      setSearchMode(val as "research" | "refiner")
                    }
                    size="sm"
                    className="w-full lg:w-auto text-xs"
                  />
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>

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
                    <Popover
                      open={openCompetition}
                      onOpenChange={setOpenCompetition}
                    >
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          role="combobox"
                          aria-expanded={openCompetition}
                          className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-white text-sm focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all outline-none text-slate-600 flex items-center justify-between"
                        >
                          {selectedCompetition
                            ? selectedCompetition.charAt(0).toUpperCase() +
                              selectedCompetition.slice(1)
                            : "Any"}
                          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-[200px] p-0 rounded-xl border-none shadow-xl shadow-black/20"
                        sideOffset={4}
                      >
                        <Command className="bg-white rounded-xl">
                          <div className="border-b border-slate-100 px-2">
                            <CommandInput
                              placeholder="Search..."
                              className="h-10 text-sm font-medium text-slate-800 placeholder:text-slate-400 border-none focus:ring-0"
                            />
                          </div>
                          <CommandList className="p-1 max-h-[200px]">
                            <CommandEmpty className="py-2 text-center text-xs text-slate-400">
                              No items found.
                            </CommandEmpty>
                            <CommandGroup>
                              {["any", "low", "medium", "high"].map((comp) => (
                                <CommandItem
                                  key={comp}
                                  value={comp}
                                  onSelect={(currentValue) => {
                                    setSelectedCompetition(
                                      comp === "any" ? "" : comp,
                                    );
                                    setOpenCompetition(false);
                                  }}
                                  className="rounded-lg px-2.5 py-2 cursor-pointer text-slate-600 font-medium text-xs transition-colors data-[selected=true]:bg-orange-50 data-[selected=true]:text-brand-primary flex items-center justify-between group"
                                >
                                  <span>
                                    {comp.charAt(0).toUpperCase() +
                                      comp.slice(1)}
                                  </span>
                                  {(selectedCompetition === comp ||
                                    (comp === "any" &&
                                      selectedCompetition === "")) && (
                                    <Check className="h-3.5 w-3.5 text-brand-primary" />
                                  )}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
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
