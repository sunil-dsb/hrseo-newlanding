"use client";

import React from "react";
import {
  Settings,
  Bell,
  MessageSquare,
  User,
  Hexagon,
  PieChart,
  LayoutGrid,
  Star,
  ChevronLeft,
  ArrowUp,
  ArrowDown,
  Plane,
} from "lucide-react";

export default function Dashboard11() {
  return (
    <div
      className="flex h-screen w-full bg-[#131320] text-white overflow-hidden selection:bg-[#6c5dd3] selection:text-white relative"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
    >
      {/* Background Glows (Ambient) */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#5d4ec2] opacity-15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#5d4ec2] opacity-10 blur-[150px] rounded-full pointer-events-none" />

      {/* Sidebar */}
      <aside className="w-[90px] h-full flex flex-col items-center py-8 z-50 shrink-0">
        {/* Logo */}
        <div className="mb-12">
          <Star className="w-8 h-8 text-white fill-white" />
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-6 w-full items-center">
          {/* Active Item */}
          <button className="relative w-12 h-12 flex items-center justify-center text-white group">
            {/* Glow/Indicator for active state */}
            <div className="absolute inset-0 bg-white/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            <Hexagon className="w-6 h-6 fill-white text-white rotate-90" />
            {/* Active dot? Left indicator? Image shows distinct white fill style */}
          </button>

          <NavIcon icon={<PieChart className="w-6 h-6" />} />
          <NavIcon icon={<LayoutGrid className="w-6 h-6" />} />
          <NavIcon icon={<User className="w-6 h-6" />} />

          <div className="relative mt-2">
            <NavIcon icon={<Bell className="w-6 h-6" />} />
            <div className="absolute -top-0.5 right-0.5 w-5 h-5 bg-[#4ce5b1] rounded-full text-[10px] text-[#131320] font-bold flex items-center justify-center leading-none shadow-md">
              +4
            </div>
          </div>
        </nav>

        {/* Bottom Actions */}
        <div className="mt-auto flex flex-col gap-6 items-center">
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-[#6e6e85] hover:text-white transition-colors">
            <MessageSquare className="w-6 h-6" />
          </button>

          <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 p-0.5">
            <img
              src="https://i.pravatar.cc/150?img=68"
              alt="User"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative z-10 mr-4 my-4 rounded-[40px] bg-[#161621]/50 shadow-2xl border border-white/5 overflow-hidden backdrop-blur-sm">
        {/* Header */}
        <header className="h-24 px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="w-12 h-12 rounded-full bg-[#1e1e2d] flex items-center justify-center border border-white/5 shadow-lg group hover:bg-[#252538] transition-colors">
              <ChevronLeft className="w-6 h-6 text-[#8a8a9d] group-hover:text-white transition-colors" />
            </button>
            <h1 className="text-2xl font-normal tracking-wide text-white/95">
              Airbus A300-600ST Beluga
            </h1>
          </div>

          <button className="w-12 h-12 rounded-full bg-[#1e1e2d] flex items-center justify-center border border-white/5 shadow-lg group hover:bg-[#252538] transition-colors">
            <Settings className="w-6 h-6 text-[#8a8a9d] group-hover:text-white transition-colors" />
          </button>
        </header>

        {/* Content Area */}
        <div className="flex-1 p-8 pt-2 overflow-y-auto flex flex-col gap-6">
          {/* Top Row */}
          <div className="grid grid-cols-12 gap-6 h-[260px] shrink-0">
            {/* 1. Efficiency Card */}
            <div className="col-span-4 bg-[#1e1e2d] rounded-[32px] p-6 flex flex-col items-center justify-center relative shadow-lg border border-white/5 group hover:border-white/10 transition-colors">
              <div className="text-[110px] leading-none font-medium tracking-tighter bg-gradient-to-b from-white via-[#e2e2ec] to-[#7b7b99] bg-clip-text text-transparent select-none">
                82%
              </div>
              <div className="mt-4 text-center space-y-1">
                <p className="text-[#8a8a9d] text-[15px] font-medium">
                  Efficiency is above average
                </p>
                <p className="text-[#8a8a9d] text-[15px] font-medium flex items-center justify-center gap-1.5">
                  based on
                  <span className="bg-[#1f362d] text-[#4ce5b1] px-2.5 py-0.5 rounded-[6px] border border-[#4ce5b1]/20 text-sm">
                    56 parameters
                  </span>
                </p>
              </div>
            </div>

            {/* 2. Total Weight (Gauge) */}
            <div className="col-span-4 bg-[#1e1e2d] rounded-[32px] p-6 relative flex flex-col border border-white/5 shadow-lg">
              <div className="flex justify-between items-start z-10">
                <h3 className="text-[#8a8a9d] text-[15px] font-medium">
                  Total weight
                </h3>
                <button className="w-8 h-8 rounded-full bg-[#252538] flex items-center justify-center hover:bg-[#303046] transition-colors">
                  <div className="flex gap-0.5">
                    <div className="w-1 h-1 bg-[#8a8a9d] rounded-full" />
                    <div className="w-1 h-1 bg-[#8a8a9d] rounded-full" />
                  </div>
                </button>
              </div>

              <div className="absolute inset-0 flex items-center justify-center pt-8">
                <div className="text-center z-10 mt-6 ml-4">
                  <div className="text-[32px] font-semibold text-white tracking-tight">
                    28,429
                    <span className="text-[18px] text-[#8a8a9d] font-normal ml-1">
                      kg
                    </span>
                  </div>
                  <div className="text-[13px] text-[#5d5d75] font-medium mt-[-2px]">
                    from 45,000 kg
                  </div>
                </div>

                {/* Gauge SVG */}
                <svg
                  viewBox="0 0 200 200"
                  className="absolute w-[85%] h-[85%] transform -rotate-90"
                >
                  {/* Background Track */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#252538"
                    strokeWidth="12"
                    strokeDasharray="380"
                    strokeDashoffset="0"
                    strokeLinecap="round"
                    className="opacity-50"
                  />

                  {/* Gradient Defs */}
                  <defs>
                    <linearGradient
                      id="purpleGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#5d4ec2" />
                      <stop offset="100%" stopColor="#363266" />
                    </linearGradient>
                    <filter id="gaugeGlow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Progress Arc (Approx 65%) */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="url(#purpleGradient)"
                    strokeWidth="12"
                    strokeDasharray="502"
                    strokeDashoffset="260"
                    strokeLinecap="round"
                    filter="url(#gaugeGlow)"
                  />
                </svg>

                {/* "IN TRANSFER" Tag */}
                <div className="absolute top-[35%] left-[22%] -rotate-[15deg]">
                  <div className="bg-white text-[#1e1e2e] text-[9px] font-bold px-2 py-0.5 rounded-full shadow-lg border border-white">
                    IN TRANSFER
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Cargo Contents */}
            <div className="col-span-4 bg-[#1e1e2d] rounded-[32px] p-6 flex flex-col border border-white/5 shadow-lg">
              <div className="flex justify-between items-start mb-5">
                <h3 className="text-[#8a8a9d] text-[15px] font-medium">
                  Cargo contents
                </h3>
                <button className="w-8 h-8 rounded-full bg-[#252538] flex items-center justify-center hover:bg-[#303046] transition-colors">
                  <ArrowUp className="w-4 h-4 text-[#8a8a9d] rotate-45" />
                </button>
              </div>

              <div className="flex flex-col flex-1 justify-between">
                {/* Item 1 */}
                <div className="flex items-center justify-between group cursor-pointer hover:bg-white/5 p-2 -mx-2 rounded-xl transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-[10px] bg-[#252538] flex items-center justify-center text-white font-bold text-xs ring-1 ring-white/10">
                      <span className="mb-0.5">AMD</span>
                    </div>
                    <span className="text-white text-[15px] font-medium">
                      AMD
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[#8a8a9d] text-[13px] font-medium">
                      61%
                    </span>
                    <div className="h-4 w-px bg-[#3a3a4a]" />
                    <div className="flex items-center gap-2 w-[90px] justify-end">
                      <span className="text-[#8a8a9d] text-[13px] font-medium">
                        7,512 Kg
                      </span>
                      <ArrowDown className="w-3 h-3 text-[#ff4b4b]" />
                    </div>
                  </div>
                </div>
                <div className="h-px w-full bg-[#2c2c3e]" />

                {/* Item 2 */}
                <div className="flex items-center justify-between group cursor-pointer hover:bg-white/5 p-2 -mx-2 rounded-xl transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-[10px] bg-[#252538] flex items-center justify-center text-white font-bold text-xs ring-1 ring-white/10">
                      <span className="mb-0.5">hp</span>
                    </div>
                    <span className="text-white text-[15px] font-medium">
                      Hewlett-Packard
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[#8a8a9d] text-[13px] font-medium">
                      19%
                    </span>
                    <div className="h-4 w-px bg-[#3a3a4a]" />
                    <div className="flex items-center gap-2 w-[90px] justify-end">
                      <span className="text-[#8a8a9d] text-[13px] font-medium">
                        12,987 Kg
                      </span>
                      <ArrowUp className="w-3 h-3 text-[#4ce5b1]" />
                    </div>
                  </div>
                </div>
                <div className="h-px w-full bg-[#2c2c3e]" />

                {/* Item 3 */}
                <div className="flex items-center justify-between group cursor-pointer hover:bg-white/5 p-2 -mx-2 rounded-xl transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-[10px] bg-[#252538] flex items-center justify-center text-white font-bold text-xs ring-1 ring-white/10">
                      <span className="mb-1 text-[14px]"></span>
                    </div>
                    <span className="text-white text-[15px] font-medium">
                      Apple
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[#8a8a9d] text-[13px] font-medium">
                      12%
                    </span>
                    <div className="h-4 w-px bg-[#3a3a4a]" />
                    <div className="flex items-center gap-2 w-[90px] justify-end">
                      <span className="text-[#8a8a9d] text-[13px] font-medium">
                        8,902 Kg
                      </span>
                      <ArrowUp className="w-3 h-3 text-[#4ce5b1]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Row - Flights */}
          <div className="grid grid-cols-3 gap-6 shrink-0">
            <FlightCard
              id="80-9123"
              from="Guntur, India"
              to="Turkey"
              progress={80}
              planeId="512,412"
            />
            <FlightCard
              id="AF-4124"
              from="Incesu, Turkey"
              to="Norway"
              progress={45}
              planeId="623,634"
            />
            <FlightCard
              id="AA-8415"
              from="Hundorp, Norway"
              to="Cuba"
              progress={60}
              planeId="522,674"
              isActive
            />
          </div>

          {/* Bottom Map Section */}
          <div className="flex-1 bg-[#1e1e2d] rounded-[32px] relative overflow-hidden flex flex-col justify-end border border-white/5 shadow-lg min-h-[300px]">
            {/* Map Background Pattern */}
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  "radial-gradient(#8a8a9d 1.5px, transparent 1.5px)",
                backgroundSize: "24px 24px",
              }}
            ></div>

            {/* World Map Shape */}
            <div className="absolute inset-0 top-10 mx-auto w-[95%] opacity-15 pointer-events-none text-[#5d5d75]">
              <svg
                viewBox="0 0 1000 400"
                className="w-full h-full fill-current"
              >
                <path
                  d="M100,100 Q200,50 300,150 T500,150 T700,100 T900,150"
                  stroke="none"
                />
              </svg>
            </div>

            {/* Flight Path Visualization */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              <svg className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <filter id="glowPath">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <linearGradient
                    id="pathGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#4ce5b1" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#4ce5b1" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {/* Dotted path for full route */}
                <path
                  d="M 25% 70% C 35% 70%, 45% 40%, 55% 30% S 65% 60%, 70% 65% S 80% 70%, 85% 65%"
                  fill="none"
                  stroke="#4ce5b1"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  className="opacity-60"
                />

                {/* Solid active segment (CUB to Plane) */}
                <path
                  d="M 25% 70% C 32% 70%, 38% 65%, 42% 60%"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                />

                {/* Nodes */}
                <g transform="translate(25%, 70%)">
                  <circle r="5" fill="white" />
                  <foreignObject
                    x="-20"
                    y="-35"
                    width="40"
                    height="25"
                    className="overflow-visible"
                  >
                    <div className="bg-white px-2 py-0.5 rounded-full text-[10px] font-bold text-black border-2 border-white shadow-lg text-center transform -translate-x-[0%]">
                      CUB
                    </div>
                  </foreignObject>
                </g>

                <g transform="translate(55%, 30%)">
                  <circle r="5" fill="#4ce5b1" />
                  <foreignObject
                    x="-20"
                    y="-35"
                    width="40"
                    height="25"
                    className="overflow-visible"
                  >
                    <div className="bg-[#4ce5b1] px-2 py-0.5 rounded-full text-[10px] font-bold text-black border-2 border-[#4ce5b1] shadow-lg text-center">
                      NOR
                    </div>
                  </foreignObject>
                </g>

                <g transform="translate(70%, 65%)">
                  <circle r="5" fill="#4ce5b1" />
                  <foreignObject
                    x="-20"
                    y="-35"
                    width="40"
                    height="25"
                    className="overflow-visible"
                  >
                    <div className="bg-[#4ce5b1] px-2 py-0.5 rounded-full text-[10px] font-bold text-black border-2 border-[#4ce5b1] shadow-lg text-center">
                      TUR
                    </div>
                  </foreignObject>
                </g>

                <g transform="translate(85%, 65%)">
                  <circle r="5" fill="#4ce5b1" />
                  <foreignObject
                    x="-15"
                    y="-35"
                    width="30"
                    height="25"
                    className="overflow-visible"
                  >
                    <div className="bg-[#4ce5b1] px-2 py-0.5 rounded-full text-[10px] font-bold text-black border-2 border-[#4ce5b1] shadow-lg text-center">
                      IN
                    </div>
                  </foreignObject>
                </g>

                {/* Active Plane Node */}
                <g transform="translate(42%, 60%)">
                  <circle
                    r="30"
                    fill="#6c5dd3"
                    fillOpacity="0.2"
                    filter="url(#glowPath)"
                  />
                  <circle r="18" fill="#6c5dd3" />
                  <Plane
                    className="w-6 h-6 text-white transform -rotate-12 -translate-x-3 -translate-y-3"
                    fill="currentColor"
                  />
                  <foreignObject
                    x="-30"
                    y="-50"
                    width="60"
                    height="30"
                    className="overflow-visible"
                  >
                    <div className="bg-white px-3 py-1 rounded-full text-[11px] font-bold text-[#1e1e2e] shadow-xl text-center border-2 border-white">
                      AA-845
                    </div>
                  </foreignObject>
                </g>
              </svg>
            </div>

            {/* Bottom Controls Bar */}
            <div className="mt-auto h-24 bg-gradient-to-t from-[#161621] via-[#1e1e2d] to-transparent flex items-end pb-8 px-8 relative z-10 w-full mb-0">
              <div className="w-full flex items-center justify-between gap-8">
                {/* Distance */}
                <div className="flex flex-col min-w-[140px]">
                  <span className="text-[#8a8a9d] text-[13px] font-medium mb-1">
                    Distance to arrival:
                  </span>
                  <div className="text-white text-xl font-normal tracking-wide">
                    <span className="text-[#4ce5b1] font-semibold">1042</span>{" "}
                    <span className="text-[#8a8a9d] mx-1">/</span> 1518{" "}
                    <span className="text-sm text-[#8a8a9d] font-normal ml-0.5">
                      km
                    </span>
                  </div>
                </div>

                {/* Timeline Slider */}
                <div className="flex-1 h-14 flex items-center relative mx-4">
                  <div className="flex justify-between w-full px-2 items-center">
                    {[...Array(51)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-px bg-[#5d5d75] transition-all
                                    ${i === 25 ? "h-0" : i % 5 === 0 ? "h-3 opacity-80" : "h-1.5 opacity-40"}
                                `}
                      />
                    ))}
                  </div>
                  <div className="absolute left-[50%] top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.4)] cursor-pointer z-20 border-[4px] border-[#1e1e2e] hover:scale-110 transition-transform">
                    <div className="w-2.5 h-2.5 bg-[#1e1e2e] rounded-full" />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 ml-4 shrink-0">
                  <button className="h-11 px-6 bg-[#6c5dd3] hover:bg-[#5b4cc2] text-white text-[14px] font-medium rounded-xl transition-all shadow-[0_4px_14px_rgba(108,93,211,0.4)] hover:shadow-[0_6px_20px_rgba(108,93,211,0.6)] hover:-translate-y-0.5">
                    Contact plane
                  </button>
                  <button className="h-11 px-6 bg-[#252538] hover:bg-[#303046] text-white text-[14px] font-medium rounded-xl border border-white/5 transition-all hover:border-white/20">
                    View cargo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function NavIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="w-12 h-12 flex items-center justify-center text-[#6e6e85] hover:text-white transition-colors">
      {icon}
    </button>
  );
}

function FlightCard({
  id,
  from,
  to,
  progress,
  planeId,
  isActive,
}: {
  id: string;
  from: string;
  to: string;
  progress: number;
  planeId: string;
  isActive?: boolean;
}) {
  return (
    <div
      className={`rounded-[28px] p-6 flex flex-col justify-between border shadow-lg min-h-[120px] transition-all duration-300 group
            ${
              isActive
                ? "bg-[#1e1e2d] border-[#6c5dd3]/50 shadow-[0_8px_30px_rgba(108,93,211,0.15)] relative overflow-hidden"
                : "bg-[#1e1e2d] border-white/5 hover:border-white/10"
            }`}
    >
      {isActive && (
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#6c5dd3] to-transparent" />
      )}

      <div className="flex justify-between items-start mb-3">
        <div className="flex flex-col">
          <span className="text-white text-[17px] font-semibold tracking-wide">
            {id}
          </span>
        </div>
        <div className="flex items-center gap-3">
          {/* Progress Bar */}
          <div className="h-[2px] w-20 bg-[#2d2d40] relative rounded-full overflow-visible">
            <div
              className="absolute top-0 left-0 h-full bg-[#4ce5b1] rounded-full"
              style={{ width: `${progress}%` }}
            />

            {/* Plane Icon on Track */}
            <div
              className="absolute top-1/2 -translate-y-1/2 transition-all duration-500"
              style={{ left: `${progress}%`, marginLeft: "-10px" }}
            >
              <Plane
                className={`w-5 h-5 transform rotate-45 
                                ${isActive ? "text-[#6c5dd3] drop-shadow-[0_0_8px_rgba(108,93,211,0.8)]" : "text-[#5d5d75]"}`}
                strokeWidth={2.5}
              />
            </div>

            {/* Start/End Dots */}
            <div
              className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full ${isActive ? "bg-[#4ce5b1]" : "bg-[#4ce5b1]"}`}
            />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#2d2d40]" />
          </div>
          <span className="text-[#8a8a9d] text-[13px] font-medium tabular-nums">
            {planeId}
          </span>
        </div>
      </div>

      <div className="flex justify-between items-end mt-auto">
        <div className="flex flex-col gap-1">
          <span className="text-[#8a8a9d] text-[13px] font-medium flex items-center gap-1.5">
            <MapPinIcon className="w-3.5 h-3.5" /> {from}
          </span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-[#8a8a9d] text-[13px] font-medium flex items-center gap-1.5">
            <MapPinIcon className="w-3.5 h-3.5" /> {to}
          </span>
        </div>
      </div>
    </div>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
