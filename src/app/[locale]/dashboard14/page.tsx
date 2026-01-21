"use client";

import {
  Menu,
  Search,
  Calendar,
  Lock,
  TrendingUp,
  Filter,
  ChevronDown,
  Share2,
  Target,
  MoreVertical,
  X,
  Minus,
  Smile,
  Meh,
  Frown,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";
import Image from "next/image";

export default function Dashboard12Page() {
  return (
    // bg-[url('/assets/image.png')]
    // bg-[url('https://plus.unsplash.com/premium_photo-1701757710054-ea0bb5f4ce2b?w=900&auto=format&fit=crop&q=90')]
    <div
      className="p-6 w-full h-screen
   bg-[url('/assets/image.png')]

    bg-cover bg-center bg-no-repeat overflow-hidden"
    >
      {/* Main Container */}
      <div className="max-h-[calc(100vh-3rem)] h-full overflow-y-auto mx-auto bg-white/20 backdrop-blur-lg rounded-3xl p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          {/* Left - Logo & Brand */}
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">NB</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-gray-900">
                  Financial
                </span>
                <span className="text-sm text-gray-500">Dashboard</span>
              </div>
            </div>
          </div>

          {/* Center - Date & Tasks */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-gray-900">19</span>
                <span className="text-sm text-gray-500">Tue,</span>
              </div>
              <span className="text-sm text-gray-500 mt-2">December</span>
            </div>
            <button className="bg-[#e85d3c] hover:bg-[#d14d2c] text-white px-6 py-3 rounded-full flex items-center gap-2 transition-colors shadow-md">
              <span className="text-sm font-medium">Show my Tasks</span>
              <div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
            </button>
            <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
              <Calendar className="w-5 h-5 text-gray-600" />
            </button>
            <button className="w-2 h-2 bg-gray-300 rounded-full"></button>
          </div>

          {/* Right - User & Search */}
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </button>
            <div className="flex items-center gap-3">
              <Image
                src="https://i.pravatar.cc/150?u=dwayne"
                alt="User"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-900">
                  Dwayne Tatum
                </span>
                <span className="text-xs text-gray-500">CEO Assistant</span>
              </div>
            </div>
            <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <div className="relative">
              <input
                type="text"
                placeholder="Start searching here ..."
                className="w-64 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 placeholder:text-gray-400 focus:outline-none focus:border-gray-300"
              />
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="col-span-3 flex flex-col gap-6">
            {/* VISA Card */}
            <div className="bg-white/20 backdrop-blur-xl border border-gray-200 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  VISA
                </span>
                <button className="text-gray-400 hover:text-gray-600">
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="mb-4">
                <span className="text-xs text-white">PREMIUM ACCOUNT</span>
                <div className="text-lg font-bold text-gray-900 mt-1">
                  •••• 2719
                </div>
              </div>
              <div className="flex gap-2 mb-4">
                <button className="flex-1 bg-black text-white py-2 rounded-full text-xs font-medium hover:bg-gray-800 transition-colors">
                  Receive
                </button>
                <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors">
                  Send
                </button>
              </div>
              <button className="w-full flex items-center justify-center gap-2 text-gray-600 transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>

            {/* Monthly Regular Fee */}
            <div className="bg-linear-to-br from-black/40 to-black/80 border-y backdrop-blur-2xl border-black/50 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-[#e85d3c] rounded-full"></div>
                <span className="text-xs text-gray-200">
                  Monthly regular fee
                </span>
              </div>
              <div className="text-2xl font-bold text-white">$ 26.00</div>
            </div>

            {/* Total Balance */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500">Saved Details</span>
                <button className="text-gray-400 hover:text-gray-600">
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <span className="text-xs text-gray-500">Total balance</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">
                $ 23,194.80
              </div>
            </div>

            {/* Monthly Dropdown */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500">Weekly</span>
                <button className="text-gray-400 hover:text-gray-600">
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-[#e85d3c] rounded-full"></div>
                <span className="text-xs text-gray-500">
                  Video
                  <br />
                  on demand
                </span>
              </div>
              <div className="text-2xl font-bold text-gray-900">$ 8,145.20</div>
            </div>

            {/* Annual Profits */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-gray-500">Annual profits</span>
                <button className="text-gray-400 hover:text-gray-600">
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="relative w-full aspect-square flex items-center justify-center">
                {/* Concentric Circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#ffd4c4] to-[#ffb8a0] opacity-20"></div>
                </div>
                <div className="absolute inset-[15%] flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#ffb8a0] to-[#ff9d7f] opacity-30"></div>
                </div>
                <div className="absolute inset-[30%] flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#ff9d7f] to-[#ff825e] opacity-40"></div>
                </div>
                <div className="absolute inset-[45%] flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#e85d3c]"></div>
                </div>
                {/* Center Values */}
                <div className="relative z-10 flex flex-col items-center">
                  <span className="text-xs text-white/80">$ 14K</span>
                  <span className="text-xs text-white/80">$ 9.3K</span>
                  <span className="text-xs text-white/80">$ 6.8K</span>
                  <span className="text-xs text-white font-bold">$ 4K</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column */}
          <div className="col-span-6 flex flex-col gap-6">
            {/* Top Row - 3 Cards */}
            <div className="grid grid-cols-3 gap-4">
              {/* Weekly Progress */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-500">Weekly</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
                <div className="relative w-32 h-32 mx-auto mb-2">
                  {/* Circular Progress */}
                  <svg
                    className="w-full h-full -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#f0f0f0"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#e85d3c"
                      strokeWidth="8"
                      strokeDasharray="251.2"
                      strokeDashoffset="160"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">
                      36%
                    </span>
                  </div>
                </div>
              </div>

              {/* System Lock */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Lock className="w-4 h-4 text-gray-900" />
                  <span className="text-xs text-gray-500">System Lock</span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  13 Days
                </div>
                <div className="text-xs text-gray-400 mb-3">
                  100 hours 23 minutes
                </div>
                <div className="flex gap-1 flex-wrap">
                  {[...Array(31)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i < 13 ? "bg-[#e85d3c]" : "bg-gray-200"
                      }`}
                    ></div>
                  ))}
                </div>
                <div className="mt-3 text-right">
                  <span className="text-xs font-bold text-gray-900">2022</span>
                </div>
              </div>

              {/* Weekly Chart */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <button className="text-gray-400 hover:text-gray-600">
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <TrendingUp className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  $ 16,073.49
                </div>
                {/* Mini Line Chart */}
                <div className="relative h-16 mt-4">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 200 60"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 0,40 L 30,35 L 60,45 L 90,30 L 120,38 L 150,25 L 180,32 L 200,28"
                      fill="none"
                      stroke="#e85d3c"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Activity Manager */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-semibold text-gray-900">
                  Activity manager
                </h3>
                <div className="flex items-center gap-3">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Target className="w-4 h-4" />
                  </button>
                  <button className="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900">
                    <Filter className="w-4 h-4" />
                    <span>Filters</span>
                  </button>
                </div>
              </div>

              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search in activities ..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 placeholder:text-gray-400 focus:outline-none focus:border-gray-300"
                />
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-6 mb-6 border-b border-gray-200">
                <button className="pb-3 text-sm font-medium text-gray-900 border-b-2 border-gray-900">
                  Team
                </button>
                <button className="pb-3 text-sm font-medium text-gray-400 hover:text-gray-600">
                  Payin
                </button>
                <button className="pb-3 text-sm font-medium text-gray-400 hover:text-gray-600">
                  Today
                </button>
              </div>

              {/* Business Plans */}
              <div className="bg-gray-50 rounded-xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-500">Business plans</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-gray-900">
                    $ 43.20
                  </span>
                  <span className="text-xs text-gray-400">/mo</span>
                </div>

                {/* Mini Bar Chart */}
                <div className="flex items-end gap-1 h-12 mb-6">
                  {[30, 45, 35, 60, 40, 55, 38, 50].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-[#e85d3c] rounded-t"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>

                {/* Items List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#e85d3c] rounded-lg flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-700">Bank loans</span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#e85d3c] rounded-lg flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-700">Accounting</span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#e85d3c] rounded-lg flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-700">
                        HR management
                      </span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-3 flex flex-col gap-6">
            {/* Help Message */}
            <div className="bg-linear-to-br from-brand-primary/20 to-brand-primary/80 backdrop-blur-2xl border-y border-brand-primary/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Hey, Need help?👋
              </h3>
              <p className="text-base text-white">Just ask me anything!</p>
              <button className="mt-4 w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </button>
            </div>

            {/* Wallet Verification */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Minus className="w-4 h-4 text-gray-400" />
                  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                {/* Sun Icon */}
                <svg
                  className="w-full h-full text-[#e85d3c]"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <circle cx="32" cy="32" r="12" fill="currentColor" />
                  {[...Array(12)].map((_, i) => {
                    const angle = (i * 30 * Math.PI) / 180;
                    const x1 = 32 + Math.cos(angle) * 18;
                    const y1 = 32 + Math.sin(angle) * 18;
                    const x2 = 32 + Math.cos(angle) * 28;
                    const y2 = 32 + Math.sin(angle) * 28;
                    return (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    );
                  })}
                </svg>
              </div>
              <h4 className="text-sm font-semibold text-gray-900 text-center mb-2">
                Wallet Verification
              </h4>
              <p className="text-xs text-gray-400 text-center mb-4">
                To make your wallet
                <br />
                secure
              </p>
              <button className="w-full bg-[#e85d3c] hover:bg-[#d14d2c] text-white py-3 rounded-full text-sm font-medium transition-colors">
                Enable
              </button>
            </div>

            {/* Main Stocks */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    Main Stocks
                  </h4>
                  <p className="text-xs text-gray-400">Extended & Limited</p>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[#e85d3c] font-medium">
                    + 0.3%
                  </div>
                </div>
              </div>
              {/* Stock Chart */}
              <div className="relative h-24">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 200 80"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 0,60 L 20,55 L 40,58 L 60,50 L 80,52 L 100,45 L 120,48 L 140,40 L 160,43 L 180,38 L 200,35"
                    fill="none"
                    stroke="#e85d3c"
                    strokeWidth="2"
                  />
                  <path
                    d="M 0,60 L 20,55 L 40,58 L 60,50 L 80,52 L 100,45 L 120,48 L 140,40 L 160,43 L 180,38 L 200,35 L 200,80 L 0,80 Z"
                    fill="url(#stockGradient)"
                    opacity="0.2"
                  />
                  <defs>
                    <linearGradient
                      id="stockGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#e85d3c" />
                      <stop offset="100%" stopColor="#e85d3c" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Business Management Question */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Minus className="w-4 h-4 text-gray-400" />
                  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <h4 className="text-sm font-semibold text-gray-900 mb-6">
                How is your business
                <br />
                management going?
              </h4>
              <div className="flex items-center justify-between">
                <button className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-gray-300 transition-colors">
                  <Smile className="w-5 h-5 text-gray-400" />
                </button>
                <button className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-gray-300 transition-colors">
                  <Meh className="w-5 h-5 text-gray-400" />
                </button>
                <button className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-gray-300 transition-colors">
                  <Minus className="w-5 h-5 text-gray-400" />
                </button>
                <button className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-gray-300 transition-colors">
                  <Frown className="w-5 h-5 text-gray-400" />
                </button>
                <button className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-gray-300 transition-colors">
                  <ThumbsDown className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
