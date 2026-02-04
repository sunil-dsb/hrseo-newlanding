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
  Target,
  PieChart,
  Layers,
} from "lucide-react";

interface InitialResearchContentProps {
  onSearch?: (term: string) => void;
  className?: string;
}

export function InitialResearchContent({
  onSearch,
  className,
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
    <div
      className={`w-full relative flex flex-col items-center justify-start pt-10 ${className} `}
    >
      {/* Hanging Icons Layer - "Attached to Navbar" */}
      <div className="absolute -top-[300px] left-0 w-full h-[150%] pointer-events-none select-none z-0 overflow-visible">
        {[
          {
            Icon: Rocket,
            color: "text-[#F15A29]",
            bg: "bg-orange-50",
            border: "border-orange-100",
            left: "10%",
            h: 360,
            delay: 0,
            scale: 1,
            blur: 0,
            z: 20,
            sway: 5,
          },
          {
            Icon: Sparkles,
            color: "text-amber-500",
            bg: "bg-amber-50",
            border: "border-amber-100",
            left: "25%",
            h: 150,
            delay: 1.2,
            scale: 0.8,
            blur: "1px",
            z: 5,
            sway: 4.5,
          },
          {
            Icon: Search,
            color: "text-indigo-600",
            bg: "bg-indigo-50",
            border: "border-indigo-100",
            left: "50%",
            h: 370,
            delay: 0.8,
            scale: 1.1,
            blur: 0,
            z: 30,
            sway: 5.5,
          },
          {
            Icon: BarChart3,
            color: "text-blue-600",
            bg: "bg-blue-50",
            border: "border-blue-100",
            left: "75%",
            h: 380,
            delay: 0.5,
            scale: 0.9,
            blur: "0.5px",
            z: 10,
            sway: 6,
          },
          {
            Icon: Target,
            color: "text-red-500",
            bg: "bg-red-50",
            border: "border-red-100",
            left: "92%",
            h: 550,
            delay: 0.2,
            scale: 0.85,
            blur: "0.5px",
            z: 15,
            sway: 4,
          },
        ].map((item, index) => (
          <m.div
            key={index}
            className="absolute top-0 origin-top"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: item.h }}
            exit={{
              opacity: 0,
              height: 0,
              transition: { duration: 0.6, ease: "easeInOut" },
            }}
            transition={{ duration: 1.5, delay: item.delay, ease: "easeOut" }}
            style={{
              left: item.left,
              zIndex: item.z,
              filter: `blur(${item.blur})`,
              transform: `scale(${item.scale})`,
            }}
          >
            {/* String */}
            <div className="w-px bg-slate-200/80 mx-auto h-full" />

            {/* Icon - Gentle Sway Only */}
            <m.div
              animate={{
                rotate: [-4, 4, -4],
              }}
              transition={{
                duration: item.sway,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full"
            >
              <div
                className={`w-12 h-12 rounded-2xl ${item.bg} ${item.border} border flex items-center justify-center shadow-lg backdrop-blur-sm`}
              >
                <item.Icon className={`w-6 h-6 ${item.color}`} />
              </div>
            </m.div>
          </m.div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col items-center">
        <div className="flex flex-col items-center justify-center w-full text-center">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200 shadow-xs">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-slate-700">
                  Live SERP Data
                </span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200 shadow-xs">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <span className="text-sm font-semibold text-slate-700">
                  Global Coverage
                </span>
              </div>
            </div>
          </m.div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full mt-5">
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
