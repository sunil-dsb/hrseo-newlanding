"use client";

import React, { useState } from "react";
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
  Settings2,
  Hourglass,
  CornerRightUp,
  CornerRightDown,
} from "lucide-react";
import { BarChart, Bar, ResponsiveContainer, AreaChart, Area } from "recharts";
import CardsComponent from "@/components/ui/cards-component";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

// --- Mock Data ---

const summaryData = [
  { name: "Mon", income: 4500, paid: 2800 },
  { name: "Tue", income: 3200, paid: 1600 },
  { name: "Wed", income: 5500, paid: 4200 },
  { name: "Thu", income: 3000, paid: 4500 },
  { name: "Fri", income: 7500, paid: 5500 },
  { name: "Sat", income: 2800, paid: 4000 },
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
  { value: 10 },
  { value: 20 },
  { value: 11 },
  { value: 15 },
  { value: 20 },
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
  { value: 18 },
  { value: 14 },
  { value: 22 },
  { value: 18 },
];
const sparklineData3 = [
  { value: 10 },
  { value: 15 },
  { value: 38 },
  { value: 30 },
  { value: 25 },
  { value: 28 },
  { value: 20 },
  { value: 15 },
  { value: 35 },
  { value: 38 },
  { value: 30 },
  { value: 25 },
  { value: 40 },
  { value: 15 },
  { value: 18 },
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
    className={`p-3 flex items-center justify-center rounded-full cursor-pointer transition-colors ${active ? "bg-black text-white" : "bg-white hover:bg-gray-50 "}`}
    style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
  >
    <Icon size={20} />
  </div>
);

const salaryData = [
  {
    id: 1,
    name: "Yulia Polishchuk",
    role: "Head of Design",
    salary: "$2,500",
    status: "Paid For",
    avatar: "https://i.pravatar.cc/150?u=yulia",
    checked: false,
  },
  {
    id: 2,
    name: "Bogdan Nikitin",
    role: "Front End Dev...",
    salary: "$3,000",
    status: "Absent",
    avatar: "https://i.pravatar.cc/150?u=bogdan",
    checked: true,
  },
  {
    id: 3,
    name: "Daria Yurchenko",
    role: "UX/UI Designer",
    salary: "$1,500",
    status: "Pending",
    avatar: "https://i.pravatar.cc/150?u=daria",
    checked: false,
  },
];

export default function Dashboard4() {
  const [selectedSalaryIds, setSelectedSalaryIds] = useState<number[]>([2]);

  const toggleSalarySelection = (id: number) => {
    setSelectedSalaryIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };
  return (
    <div className="container flex min-h-screen pt-28">
      {/* Left Sidebar - Vertical Icons */}
      <aside className="hidden lg:flex fixed left-10 top-0 h-screen flex-col items-center justify-center z-50">
        <div className="flex flex-col gap-1.5 rounded-full bg-brand-background p-2">
          <SidebarIcon icon={Search} />
          <SidebarIcon icon={Share2} />
          <SidebarIcon icon={Calendar} />
          <SidebarIcon icon={Star} />
          <SidebarIcon icon={MapPin} />
        </div>
      </aside>

      {/* Main Content */}
      <main className="pl-0 lg:pl-[72px] w-full">
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
        <div className="px-4 md:px-10 pb-8">
          {/* Welcome Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-6 gap-4 lg:gap-0">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">
                Welcome back, Uzui!
              </h1>
              <p className="text-gray-400 text-sm">
                Control your investment, income, and expenses.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="px-5 py-3 bg-white text-gray-600 rounded-full flex items-center gap-2 text-sm font-medium border border-gray-100 hover:bg-gray-50 cursor-pointer">
                <Filter size={16} strokeWidth={1.5} /> Filters
              </button>
              <button className="px-5 py-3 bg-white text-gray-600 rounded-full flex items-center gap-2 text-sm font-medium border border-gray-100 hover:bg-gray-50 cursor-pointer">
                <Download size={16} strokeWidth={1.5} /> Exports
              </button>
              <button className="px-5 py-3 bg-[#F15A29] text-white rounded-full flex items-center gap-2 text-sm font-semibold hover:bg-[#d64a1d] transition-colors cursor-pointer">
                <Plus size={18} strokeWidth={2} /> Add card
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <CardsComponent
                title="Summary"
                description="Track your performance."
                buttons={[
                  {
                    label: "Weekly",
                    icon: <ChevronDown size={20} />,
                    onClick: () => {},
                  },
                ]}
                className="col-span-1 lg:col-span-5 bg-brand-background"
              >
                <div className="bg-white rounded-4xl h-full overflow-hidden pt-2">
                  <div className="flex flex-col md:flex-row gap-0 h-full">
                    {/* Total Income with Chart */}
                    <div className="w-full flex flex-col items-center justify-between -mb-2">
                      <div className="flex items-center justify-center gap-3 p-4 border-r w-full">
                        <div className="w-8 h-8 rounded-full bg-[#f5f5f5] flex items-center justify-center">
                          <CornerRightDown size={20} />
                        </div>
                        <div>
                          <span className="text-xs text-gray-400 font-medium block mb-0.5">
                            Total income
                          </span>
                          <span className="text-2xl font-bold text-gray-900">
                            12.135,00
                          </span>
                        </div>
                      </div>
                      {/* Income Bar Chart */}
                      <div className="h-48 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={summaryData} barGap={2}>
                            <Bar
                              dataKey="income"
                              fill="#F15A29"
                              radius={[20, 20, 0, 0]}
                              barSize={32}
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* Total Paid with Chart */}
                    <div className="w-full flex flex-col items-center justify-between -mb-2">
                      <div className="flex items-center justify-center gap-3 p-4 w-full">
                        <div className="w-8 h-8 rounded-full bg-[#f5f5f5] flex items-center justify-center">
                          <CornerRightUp size={20} />
                        </div>
                        <div>
                          <span className="text-xs text-gray-400 font-medium block mb-0.5">
                            Total paid
                          </span>
                          <span className="text-2xl font-bold text-gray-900">
                            8.873,00
                          </span>
                        </div>
                      </div>
                      {/* Paid Bar Chart */}
                      <div className="h-48 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={summaryData} barGap={2}>
                            <Bar
                              dataKey="paid"
                              fill="rgba(241, 90, 41, 0.3)"
                              radius={[20, 20, 0, 0]}
                              barSize={32}
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </CardsComponent>

              <CardsComponent
                title="Activity"
                description="Track your activity."
                buttons={[
                  {
                    label: "",
                    icon: <SlidersHorizontal size={20} />,
                    onClick: () => {},
                  },
                  {
                    label: "",
                    icon: <ArrowUpRight size={20} />,
                    onClick: () => {},
                  },
                ]}
                className="col-span-1 lg:col-span-7 bg-brand-background"
              >
                {/* Activity Cards Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Receipts Card */}
                  <div className="bg-white p-5 rounded-4xl flex flex-col gap-4 justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <span className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                        <HandHelping size={25} className="text-gray-600" />
                      </span>
                      <span className="text-sm font-medium text-gray-500 mb-0.5">
                        Receipts
                      </span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <ArrowUpRight size={25} className="text-[#F15A29]" />
                        <span className="text-xs font-medium text-[#F15A29]">
                          +11.5%
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        120.560,00
                      </div>
                    </div>

                    <div className="h-24 w-full -mb-1 mt-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={sparklineData1}>
                          <defs>
                            <linearGradient
                              id="receiptsGradient"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="0%"
                                stopColor="#F15A29"
                                stopOpacity={0.4}
                              />
                              <stop
                                offset="100%"
                                stopColor="#F15A29"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#F15A29"
                            strokeWidth={2}
                            fill="url(#receiptsGradient)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Contributions Card */}
                  <div className="bg-white p-5 rounded-4xl flex flex-col gap-4 justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <span className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                        <Flame size={25} className="text-gray-600" />
                      </span>
                      <span className="text-sm font-medium text-gray-500 mb-0.5">
                        Contributions
                      </span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <ArrowUpRight size={25} className="text-[#F15A29]" />
                        <span className="text-xs font-medium text-[#F15A29]">
                          +4.5%
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        37.272,00
                      </div>
                    </div>

                    <div className="h-24 w-full -mb-1">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={sparklineData2}>
                          <defs>
                            <linearGradient
                              id="contributionsGradient"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="0%"
                                stopColor="#F15A29"
                                stopOpacity={0.4}
                              />
                              <stop
                                offset="100%"
                                stopColor="#F15A29"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#F15A29"
                            strokeWidth={2}
                            fill="url(#contributionsGradient)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Owes Card (Dark) */}
                  <div className="bg-[#3d2c23] p-5 rounded-4xl flex flex-col gap-4 justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                        <CircleDollarSign size={25} className="text-white" />
                      </span>
                      <span className="text-sm font-medium text-white/60 mb-0.5">
                        Owes
                      </span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <ArrowDownLeft size={25} className="text-white/50" />
                        <span className="text-xs font-medium text-white/50">
                          -20.5%
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-white">
                        9.230,00
                      </div>
                    </div>

                    <div className="h-24 w-full z-10 relative -mb-1">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={sparklineData3}>
                          <defs>
                            <linearGradient
                              id="owesGradient"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="0%"
                                stopColor="#F15A29"
                                stopOpacity={0.5}
                              />
                              <stop
                                offset="100%"
                                stopColor="#F15A29"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#F15A29"
                            strokeWidth={2}
                            fill="url(#owesGradient)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                    {/* Background glow */}
                    <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[#F15A29] opacity-10 rounded-full blur-3xl"></div>
                  </div>
                </div>
              </CardsComponent>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <CardsComponent
                buttons={[]}
                className="col-span-1 lg:col-span-5 p-0"
              >
                <div className="w-full flex flex-col gap-4 shrink-0">
                  {/* Summary Card - Outer container with cream/beige background */}

                  {/* Bottom Left Small Cards */}
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="w-full bg-brand-background rounded-4xl p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="p-1.5 rounded-full flex items-center justify-center bg-white">
                          <Clock size={20} className="text-black" />
                        </div>
                        <span className="text-sm text-black font-medium">
                          Weekly average
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <ArrowDownLeft size={25} className="text-gray-400" />
                        <span className="text-xs font-medium text-gray-400">
                          -11.5%
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        25.460,00
                      </div>
                    </div>
                    <div className="w-full bg-brand-background rounded-4xl p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="p-1.5 rounded-full flex items-center justify-center bg-white">
                          <Hourglass size={20} className="text-black" />
                        </div>
                        <span className="text-sm text-black font-medium">
                          Annual average
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <ArrowUpRight size={25} className="text-[#F15A29]" />
                        <span className="text-xs font-medium text-[#F15A29]">
                          +11.5%
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
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
                    <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-200 cursor-pointer">
                      <X size={14} />
                    </button>
                  </div>
                </div>
              </CardsComponent>

              <CardsComponent
                title="Transactions history"
                description="Track your history."
                buttons={[
                  {
                    label: "",
                    icon: <Settings2 size={20} />,
                    onClick: () => {},
                  },
                ]}
                className="col-span-1 lg:col-span-7 bg-brand-background"
              >
                {/* Transactions History */}
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-transparent">
                        <TableHead className="w-[25%]">Name</TableHead>
                        <TableHead className="w-[17%]">ID</TableHead>
                        <TableHead className="w-[25%]">Status</TableHead>
                        <TableHead className="w-[17%]">Date</TableHead>
                        <TableHead className="w-[16%] text-right">
                          Amount
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {transactions.map((tx, i) => (
                        <TableRow key={i}>
                          <TableCell className="w-[25%]">
                            <div className="flex items-center gap-3">
                              <Image
                                src={tx.avatar}
                                alt={tx.name}
                                width={32}
                                height={32}
                                className="w-8 h-8 rounded-full object-cover"
                              />
                              <span className="font-semibold text-gray-900">
                                {tx.name}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell className="w-[17%] font-semibold text-gray-900">
                            {tx.id}
                          </TableCell>
                          <TableCell className="w-[25%]">
                            <span
                              className={`inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-medium ${
                                tx.status === "Completed"
                                  ? "border border-green-200 text-green-600"
                                  : "border border-orange-200 text-orange-500"
                              }`}
                            >
                              <span
                                className={`w-1 h-1 rounded-full ${tx.status === "Completed" ? "bg-green-500" : "bg-orange-400"}`}
                              ></span>
                              {tx.status}
                            </span>
                          </TableCell>
                          <TableCell className="w-[17%] font-medium text-gray-900">
                            {tx.date}
                          </TableCell>
                          <TableCell className="w-[16%] text-right font-semibold text-[#F15A29]">
                            {tx.amount}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardsComponent>
            </div>

            {/* Salary Table */}
            <div className="bg-white/70 backdrop-blur-sm rounded-[28px] p-5 shadow-sm flex-1">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-lg font-medium text-[#1A1B26]">Salary</h3>
                <div className="relative">
                  <Search className="w-4 h-4 text-[#9CA3AF] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-9 pr-4 py-2 rounded-full bg-white border-none shadow-sm text-sm focus:outline-none w-[140px] placeholder:text-[#9CA3AF]"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-[#9CA3AF] text-[11px] font-medium border-b border-dashed border-[#E5E7EB]">
                      <th className="pb-3 pl-2 w-10">
                        <div className="w-4 h-4 rounded border border-[#E5E7EB] bg-white" />
                      </th>
                      <th className="pb-3 font-normal">Name</th>
                      <th className="pb-3 font-normal">Job Title</th>
                      <th className="pb-3 font-normal">Net Salary</th>
                      <th className="pb-3 font-normal">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {salaryData.map((row) => {
                      const isSelected = selectedSalaryIds.includes(row.id);
                      return (
                        <tr
                          key={row.id}
                          onClick={() => toggleSalarySelection(row.id)}
                          className={cn(
                            "group transition-all cursor-pointer",
                            isSelected
                              ? "bg-[#1A1B26] rounded-[16px]"
                              : "hover:bg-white/50",
                          )}
                        >
                          <td
                            className={cn(
                              "py-3 pl-2",
                              isSelected && "rounded-l-[16px]",
                            )}
                          >
                            <div
                              className={cn(
                                "w-4 h-4 rounded border flex items-center justify-center",
                                isSelected
                                  ? "bg-[#F5C542] border-[#F5C542]"
                                  : "border-[#E5E7EB] bg-white",
                              )}
                            >
                              {isSelected && (
                                <svg
                                  width="10"
                                  height="10"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                >
                                  <path
                                    d="M2 6l3 3 5-5"
                                    stroke="#1A1B26"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              )}
                            </div>
                          </td>
                          <td className="py-3">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-full overflow-hidden bg-[#F5F5F5]">
                                <Image
                                  src={row.avatar}
                                  alt={row.name}
                                  width={32}
                                  height={32}
                                />
                              </div>
                              <span
                                className={cn(
                                  "font-medium text-[13px]",
                                  isSelected ? "text-white" : "text-[#1A1B26]",
                                )}
                              >
                                {row.name}
                              </span>
                            </div>
                          </td>
                          <td
                            className={cn(
                              "py-3 text-[12px]",
                              isSelected ? "text-white/60" : "text-[#6B7280]",
                            )}
                          >
                            {row.role}
                          </td>
                          <td
                            className={cn(
                              "py-3 font-medium text-[13px]",
                              isSelected ? "text-white" : "text-[#1A1B26]",
                            )}
                          >
                            {row.salary}
                          </td>
                          <td
                            className={cn(
                              "py-3",
                              isSelected && "rounded-r-[16px]",
                            )}
                          >
                            <span
                              className={cn(
                                "px-3 py-1.5 rounded-full text-[11px] font-medium flex items-center gap-1.5 w-fit",
                                row.status === "Paid For" &&
                                  "bg-[#F3E8FF] text-[#9333EA]",
                                row.status === "Absent" &&
                                  "bg-[#F3F4F6] text-[#6B7280]",
                                row.status === "Pending" &&
                                  "bg-[#ECFDF5] text-[#10B981]",
                              )}
                            >
                              <div
                                className={cn(
                                  "w-1.5 h-1.5 rounded-full",
                                  row.status === "Paid For" && "bg-[#9333EA]",
                                  row.status === "Absent" && "bg-[#6B7280]",
                                  row.status === "Pending" && "bg-[#10B981]",
                                )}
                              />
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
