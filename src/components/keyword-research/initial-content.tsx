"use client";

import React from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  Search,
  TrendingUp,
  Zap,
  Globe,
  Sparkles,
  BarChart3,
  MousePointer2,
  Rocket,
  ArrowRight,
} from "lucide-react";

interface InitialResearchContentProps {
  onSearch?: (term: string) => void;
}

export function InitialResearchContent({
  onSearch,
}: InitialResearchContentProps) {
  const trendingSearches = [
    "AI Marketing Tools",
    "SaaS SEO Strategy",
    "Crypto Trends 2025",
    "Best CRM Software",
  ];

  const features = [
    {
      icon: <Search className="w-6 h-6 text-blue-600" />,
      title: "Deep Keyword Analysis",
      desc: "Uncover volume, difficulty, and CPC data instantly.",
      color: "bg-blue-50/50 hover:bg-blue-50 border-blue-100",
      delay: 0.1,
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#F15A29]" />,
      title: "Market Trends",
      desc: "Visualize search volume history and seasonality.",
      color: "bg-orange-50/50 hover:bg-orange-50 border-orange-100",
      delay: 0.2,
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-600" />,
      title: "SERP Intelligence",
      desc: "Analyze top ranking competitors and their strategies.",
      color: "bg-emerald-50/50 hover:bg-emerald-50 border-emerald-100",
      delay: 0.3,
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-600" />,
      title: "Content Opportunities",
      desc: "Discover questions and related terms to target.",
      color: "bg-purple-50/50 hover:bg-purple-50 border-purple-100",
      delay: 0.4,
    },
  ];

  return (
    <div className="w-full relative min-h-[600px] flex flex-col items-center justify-start pt-10 pb-20 overflow-hidden">
      {/* Background Ambient Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <m.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F15A29]/10 rounded-full blur-[100px]"
        />
        <m.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col items-center">
        {/* Animated Icon Composition */}
        <m.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-10"
        >
          <div className="w-24 h-24 bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(241,90,41,0.2)] flex items-center justify-center relative z-10 border border-white/50 backdrop-blur-xl">
            <Rocket className="w-10 h-10 text-[#F15A29]" />
          </div>
          {/* Floating Orbiting Elements */}
          <m.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-full h-full"
          >
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-slate-100">
              <BarChart3 className="w-5 h-5 text-blue-500" />
            </div>
            <div className="absolute -bottom-4 -left-8 w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center border border-slate-100">
              <Sparkles className="w-4 h-4 text-amber-500" />
            </div>
          </m.div>
        </m.div>

        {/* Text Section */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
            Unleash the Power of{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#F15A29] to-amber-500">
              Data-Driven SEO
            </span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed font-medium">
            Stop guessing and start ranking. Enter a keyword to instantly reveal
            competitor strategies, market gaps, and high-value opportunities.
          </p>
        </m.div>

        {/* Quick Search Pills */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-3 mb-16"
        >
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Try searching for
          </span>
          <div className="flex flex-wrap justify-center gap-3">
            {trendingSearches.map((term, index) => (
              <m.button
                key={term}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSearch && onSearch(term)}
                className="group relative px-5 py-2.5 bg-white/60 hover:bg-white backdrop-blur-md rounded-full border border-slate-200/60 hover:border-[#F15A29]/30 shadow-xs hover:shadow-[0_8px_20px_rgba(241,90,41,0.15)] transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <Search className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#F15A29] transition-colors" />
                  <span className="text-sm font-semibold text-slate-600 group-hover:text-slate-900">
                    {term}
                  </span>
                </div>
              </m.button>
            ))}
          </div>
        </m.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {features.map((feature, index) => (
            <m.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: feature.delay + 0.4 }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-[2rem] border ${feature.color} bg-white/40 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 group cursor-default h-full flex flex-col`}
            >
              <div className="mb-4 bg-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-xs border border-white/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                {feature.desc}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </div>
  );
}
