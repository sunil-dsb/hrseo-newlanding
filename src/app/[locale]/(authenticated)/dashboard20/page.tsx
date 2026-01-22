"use client";

import React from "react";
import {
  Search,
  Share2,
  Calendar,
  Star,
  MapPin,
  CornerDownLeft,
  Mail,
  Bell,
  Home,
  HandHelping,
  Wallet,
  Settings,
  Filter,
  Download,
  Plus,
  ChevronDown,
  SlidersHorizontal,
  ArrowUpRight,
  ArrowDownLeft,
  X,
  Clock,
  RefreshCw,
  DollarSign,
  Flame,
  CircleDollarSign,
} from "lucide-react";
import { BarChart, Bar, ResponsiveContainer, LineChart, Line } from "recharts";
import CardsComponent from "@/components/ui/cards-component";

// --- Mock Data ---

const summaryData = [
  { name: "Mon", income: 4500, paid: 2800 },
  { name: "Tue", income: 3200, paid: 1600 },
  { name: "Wed", income: 5500, paid: 4200 },
  { name: "Thu", income: 3000, paid: 4500 },
  { name: "Fri", income: 7500, paid: 5500 },
  { name: "Sat", income: 2800, paid: 4000 },
  { name: "Sun", income: 4000, paid: 5000 },
];

const sparklineData1 = [
  { value: 10 },
  { value: 15 },
  { value: 12 },
  { value: 20 },
  { value: 18 },
  { value: 25 },
  { value: 22 },
  { value: 30 },
];
const sparklineData2 = [
  { value: 15 },
  { value: 10 },
  { value: 18 },
  { value: 14 },
  { value: 22 },
  { value: 18 },
  { value: 28 },
  { value: 24 },
];
const sparklineData3 = [
  { value: 40 },
  { value: 35 },
  { value: 38 },
  { value: 30 },
  { value: 25 },
  { value: 28 },
  { value: 20 },
  { value: 15 },
];

const transactions = [
  {
    id: "#1298070",
    name: "Guy Hawkins",
    status: "Completed",
    date: "May 29, 2024",
    amount: "-$15.30",
    avatar: "https://i.pravatar.cc/150?u=GuyHawkins",
  },
  {
    id: "#1848230",
    name: "Robert Fox",
    status: "Pending",
    date: "May 11, 2024",
    amount: "-$23.00",
    avatar: "https://i.pravatar.cc/150?u=RobertFox",
  },
];

// --- Components ---

const SidebarIcon = ({
  icon: Icon,
  active = false,
}: {
  icon: any;
  active?: boolean;
}) => (
  <div
    className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-colors ${active ? "bg-black text-white" : "bg-white hover:bg-gray-50 text-gray-400"}`}
    style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
  >
    <Icon size={18} strokeWidth={1.5} />
  </div>
);

export default function Dashboard20() {
  return (
    <div className="container flex min-h-screen pt-5">
      {/* Left Sidebar - Vertical Icons */}
      <aside className="fixed left-10 top-0 h-screen flex flex-col items-center justify-center z-50">
        <div className="flex flex-col gap-3 rounded-full bg-brand-background p-2">
          <SidebarIcon icon={Search} />
          <SidebarIcon icon={Share2} />
          <SidebarIcon icon={Calendar} />
          <SidebarIcon icon={Star} />
          <SidebarIcon icon={MapPin} />
        </div>
      </aside>

      {/* Main Content */}
      <main className="pl-[72px] w-full">
        {/* Top Navigation Bar */}
        {/* <header className="flex justify-between items-center px-10 py-5 bg-[#f4f5f7]">
          <div className="flex items-center gap-14">

            <div className="flex items-center gap-2">
              <div className="flex gap-[3px]">
                <div className="w-[10px] h-[10px] rounded-full bg-[#F15A29]"></div>
                <div className="w-[10px] h-[10px] rounded-full bg-black"></div>
              </div>
              <div className="text-lg font-bold flex items-center">
                <span className="text-black">Invest</span>
                <span className="text-[#F15A29]">IQ</span>
              </div>
            </div>


            <nav className="flex items-center gap-1">
              <button className="px-5 py-2.5 bg-[#1a1a1a] text-white rounded-full flex items-center gap-2 text-sm font-medium">
                <Home size={16} strokeWidth={1.5} /> Dashboard
              </button>
              <button className="px-5 py-2.5 bg-transparent text-gray-500 hover:bg-white/50 rounded-full flex items-center gap-2 text-sm font-medium transition-colors">
                <FileText size={16} strokeWidth={1.5} /> Activity
              </button>
              <button className="px-5 py-2.5 bg-transparent text-gray-500 hover:bg-white/50 rounded-full flex items-center gap-2 text-sm font-medium transition-colors">
                <Wallet size={16} strokeWidth={1.5} /> Wallets{" "}
                <ChevronDown size={14} strokeWidth={1.5} />
              </button>
              <button className="px-5 py-2.5 bg-transparent text-gray-500 hover:bg-white/50 rounded-full flex items-center gap-2 text-sm font-medium transition-colors">
                <Settings size={16} strokeWidth={1.5} /> Settings
              </button>
            </nav>
          </div>

        
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-transparent hover:bg-white flex items-center justify-center text-gray-400 transition-all">
              <Mail size={20} strokeWidth={1.5} />
            </button>
            <button className="w-10 h-10 rounded-full bg-transparent hover:bg-white flex items-center justify-center text-gray-400 transition-all">
              <Bell size={20} strokeWidth={1.5} />
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white cursor-pointer shadow-sm">
              <img
                src="https://i.pravatar.cc/150?u=uzui2"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header> */}

        {/* Content Area */}
        <div className="px-10 pb-8">
          {/* Welcome Section */}
          <div className="flex justify-between items-end mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">
                Welcome back, Uzui!
              </h1>
              <p className="text-gray-400 text-sm">
                Control your investment, income, and expenses.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="px-5 py-3 bg-white text-gray-600 rounded-full flex items-center gap-2 text-sm font-medium border border-gray-100 hover:bg-gray-50">
                <Filter size={16} strokeWidth={1.5} /> Filters
              </button>
              <button className="px-5 py-3 bg-white text-gray-600 rounded-full flex items-center gap-2 text-sm font-medium border border-gray-100 hover:bg-gray-50">
                <Download size={16} strokeWidth={1.5} /> Exports
              </button>
              <button className="px-5 py-3 bg-[#F15A29] text-white rounded-full flex items-center gap-2 text-sm font-semibold hover:bg-[#d64a1d] transition-colors">
                <Plus size={18} strokeWidth={2} /> Add card
              </button>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <CardsComponent
              title="Summary"
              description="Track your performance."
              buttons={[
                {
                  label: "Weekly",
                  icon: <ChevronDown size={11} />,
                  onClick: () => {},
                },
              ]}
              className="col-span-4"
            >
              <div className="bg-white rounded-[20px] p-4 mb-4 flex gap-6">
                {/* Total Income */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f5f5f5] flex items-center justify-center">
                    <ArrowDownLeft size={14} className="text-gray-600" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 font-medium block mb-0.5">
                      Total income
                    </span>
                    <span className="text-[18px] font-bold text-gray-900">
                      12.135,00
                    </span>
                  </div>
                </div>

                {/* Separator dot */}
                <div className="flex items-center">
                  <div className="w-1 h-1 rounded-full bg-[#F15A29]"></div>
                </div>

                {/* Total Paid */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f5f5f5] flex items-center justify-center">
                    <ArrowUpRight size={14} className="text-gray-600" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 font-medium block mb-0.5">
                      Total paid
                    </span>
                    <span className="text-[18px] font-bold text-gray-900">
                      8.873,00
                    </span>
                  </div>
                </div>
              </div>

              {/* Bar Chart */}
              <div className="h-[160px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={summaryData} barGap={4}>
                    <Bar
                      dataKey="income"
                      fill="#F15A29"
                      radius={[6, 6, 6, 6]}
                      barSize={16}
                    />
                    <Bar
                      dataKey="paid"
                      fill="#e8e4de"
                      radius={[6, 6, 6, 6]}
                      barSize={16}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardsComponent>

            <CardsComponent
              title="Activity"
              description="Track your activity."
              buttons={[
                {
                  label: "",
                  icon: <SlidersHorizontal size={16} strokeWidth={1.5} />,
                  onClick: () => {},
                },
                {
                  label: "",
                  icon: <ArrowUpRight size={16} strokeWidth={1.5} />,
                  onClick: () => {},
                },
              ]}
              className="col-span-8"
            >
              {/* Activity Cards Row */}
              <div className="grid grid-cols-3 gap-4">
                {/* Receipts Card */}
                <div className="bg-white p-5 rounded-4xl flex flex-col justify-between">
                  <div className="flex flex-row gap-2 items-center">
                    <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                      <HandHelping size={25} className="text-gray-600" />
                    </div>
                    <div className="text-[12px] font-medium text-gray-500 mb-0.5">
                      Receipts
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <ArrowUpRight size={11} className="text-[#F15A29]" />
                    <span className="text-[10px] font-medium text-[#F15A29]">
                      +11.5%
                    </span>
                  </div>
                  <div className="text-[20px] font-bold text-gray-900">
                    120.560,00
                  </div>

                  <div className="h-8 w-full -mb-1">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={sparklineData1}>
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#F15A29"
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Contributions Card */}
                <div className="bg-white p-5 rounded-4xl flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                      <Flame size={25} className="text-gray-600" />
                    </div>
                    <div className="text-[12px] font-medium text-gray-500 mb-0.5">
                      Contributions
                    </div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <ArrowUpRight size={11} className="text-[#F15A29]" />
                      <span className="text-[10px] font-medium text-[#F15A29]">
                        +4.5%
                      </span>
                    </div>
                    <div className="text-[20px] font-bold text-gray-900">
                      37.272,00
                    </div>
                  </div>
                  <div className="h-8 w-full -mb-1">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={sparklineData2}>
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#F15A29"
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Owes Card (Dark) */}
                <div className="bg-[#3d2c23] p-5 rounded-4xl flex flex-col justify-between relative overflow-hidden">
                  <div className="z-10 relative">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center mb-2">
                      <CircleDollarSign size={25} className="text-white" />
                    </div>
                    <div className="text-[12px] font-medium text-white/60 mb-0.5">
                      Owes
                    </div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <ArrowDownLeft size={11} className="text-white/50" />
                      <span className="text-[10px] font-medium text-white/50">
                        -20.5%
                      </span>
                    </div>
                    <div className="text-[20px] font-bold text-white">
                      9.230,00
                    </div>
                  </div>
                  <div className="h-8 w-full z-10 relative -mb-1">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={sparklineData3}>
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#F15A29"
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  {/* Background glow */}
                  <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[#F15A29] opacity-10 rounded-full blur-3xl"></div>
                </div>
              </div>
            </CardsComponent>
          </div>

          {/* Dashboard Grid */}
          <div className="flex gap-5">
            {/* Left Column (Summary) */}
            <div className="w-[380px] flex flex-col gap-4 shrink-0">
              {/* Summary Card - Outer container with cream/beige background */}
              <CardsComponent
                title="Summary"
                description="Track your performance."
                buttons={[
                  {
                    label: "Weekly",
                    icon: <ChevronDown size={11} />,
                    onClick: () => {},
                  },
                ]}
              >
                <div className="bg-white rounded-[20px] p-4 mb-4 flex gap-6">
                  {/* Total Income */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#f5f5f5] flex items-center justify-center">
                      <ArrowDownLeft size={14} className="text-gray-600" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 font-medium block mb-0.5">
                        Total income
                      </span>
                      <span className="text-[18px] font-bold text-gray-900">
                        12.135,00
                      </span>
                    </div>
                  </div>

                  {/* Separator dot */}
                  <div className="flex items-center">
                    <div className="w-1 h-1 rounded-full bg-[#F15A29]"></div>
                  </div>

                  {/* Total Paid */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#f5f5f5] flex items-center justify-center">
                      <ArrowUpRight size={14} className="text-gray-600" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 font-medium block mb-0.5">
                        Total paid
                      </span>
                      <span className="text-[18px] font-bold text-gray-900">
                        8.873,00
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bar Chart */}
                <div className="h-[160px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={summaryData} barGap={4}>
                      <Bar
                        dataKey="income"
                        fill="#F15A29"
                        radius={[6, 6, 6, 6]}
                        barSize={16}
                      />
                      <Bar
                        dataKey="paid"
                        fill="#e8e4de"
                        radius={[6, 6, 6, 6]}
                        barSize={16}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardsComponent>

              {/* Bottom Left Small Cards */}
              <div className="flex gap-3">
                <div className="flex-1 bg-white rounded-[20px] p-4">
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center">
                      <Clock size={11} className="text-gray-400" />
                    </div>
                    <span className="text-[10px] text-gray-500 font-medium">
                      Weekly average
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <ArrowDownLeft size={11} className="text-gray-400" />
                    <span className="text-[10px] font-medium text-gray-400">
                      -11.5%
                    </span>
                  </div>
                  <div className="text-[18px] font-bold text-gray-900">
                    25.460,00
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-[20px] p-4">
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center">
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-gray-400"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <span className="text-[10px] text-gray-500 font-medium">
                      Annual average
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <ArrowUpRight size={11} className="text-[#F15A29]" />
                    <span className="text-[10px] font-medium text-[#F15A29]">
                      +11.5%
                    </span>
                  </div>
                  <div className="text-[18px] font-bold text-gray-900">
                    25.460,00
                  </div>
                </div>
              </div>

              {/* Business Management Banner */}
              <div className="bg-white rounded-[20px] p-5 flex items-center justify-between">
                <div className="max-w-[170px]">
                  <p className="text-[13px] font-semibold text-gray-900 leading-snug">
                    How is your business management going?
                  </p>
                </div>
                <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-200">
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* Right Column (Activity & Transactions) */}
            <div className="flex-1 flex flex-col gap-4">
              {/* Activity Header */}
              <div className="flex justify-between items-end">
                <div>
                  <h2 className="text-[16px] font-bold text-gray-900">
                    Activity
                  </h2>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    Track your activity.
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-gray-400 hover:bg-gray-50">
                    <SlidersHorizontal size={16} strokeWidth={1.5} />
                  </button>
                  <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-gray-400 hover:bg-gray-50">
                    <ArrowUpRight size={16} strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              {/* Transactions History */}
              <div className="bg-white rounded-[24px] p-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-[16px] font-bold text-gray-900">
                      Transactions history
                    </h3>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      Track your history.
                    </p>
                  </div>
                  <button className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gray-100">
                    <SlidersHorizontal size={15} strokeWidth={1.5} />
                  </button>
                </div>

                <div className="w-full">
                  {/* Table Header */}
                  <div className="grid grid-cols-12 text-[10px] font-medium text-gray-400 mb-3 px-1">
                    <div className="col-span-3">Name</div>
                    <div className="col-span-2">ID</div>
                    <div className="col-span-2">Status</div>
                    <div className="col-span-3">Date</div>
                    <div className="col-span-2 text-right">Amount</div>
                  </div>

                  {/* Table Rows */}
                  <div className="flex flex-col gap-1">
                    {transactions.map((tx, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-12 items-center py-2.5 px-1 hover:bg-gray-50 rounded-xl transition-colors"
                      >
                        <div className="col-span-3 flex items-center gap-3">
                          <img
                            src={tx.avatar}
                            alt={tx.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <span className="text-[12px] font-semibold text-gray-900">
                            {tx.name}
                          </span>
                        </div>
                        <div className="col-span-2 text-[11px] font-semibold text-gray-900">
                          {tx.id}
                        </div>
                        <div className="col-span-2">
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium ${
                              tx.status === "Completed"
                                ? "bg-green-50 text-green-600"
                                : "bg-orange-50 text-orange-500"
                            }`}
                          >
                            <span
                              className={`w-1 h-1 rounded-full ${tx.status === "Completed" ? "bg-green-500" : "bg-orange-400"}`}
                            ></span>
                            {tx.status}
                          </span>
                        </div>
                        <div className="col-span-3 text-[11px] font-medium text-gray-900">
                          {tx.date}
                        </div>
                        <div className="col-span-2 text-right text-[12px] font-semibold text-[#F15A29]">
                          {tx.amount}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
