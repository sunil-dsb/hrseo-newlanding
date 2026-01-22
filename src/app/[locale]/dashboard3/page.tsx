"use client";

import React, { useState } from "react";
import {
  Bell,
  Settings,
  Search,
  Users,
  Package,
  DollarSign,
  MoreHorizontal,
  ChevronDown,
  LayoutDashboard,
  Zap,
  Upload,
  SlidersHorizontal,
  ShoppingCart,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
} from "recharts";
import { cn } from "@/lib/utils";

// --- Types ---
type StatCardProps = {
  title: string;
  value: string;
  subValue?: string;
  trend?: string;
  trendUp?: boolean;
  trendValue?: string;
  icon: React.ReactNode;
  active?: boolean;
};

// --- Mock Data ---
const performanceData = [
  { name: "May", sales: 15, revenue: 12 },
  { name: "Jun", sales: 10, revenue: 8 },
  { name: "Jul", sales: 8, revenue: 5 },
  { name: "Aug", sales: 30, revenue: 45 }, // Highlighted
  { name: "Sep", sales: 12, revenue: 10 },
  { name: "Oct", sales: 20, revenue: 15 },
  { name: "Nov", sales: 25, revenue: 20 },
  { name: "Dec", sales: 10, revenue: 8 },
];

const orders = [
  {
    id: "#876364",
    product: "Camera Lens",
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=64&q=80",
    date: "12 Oct 2026",
    customer: "Arlene McCoy",
    category: "Camera",
    status: "Paid",
    items: 125,
    total: "$250.00",
  },
  {
    id: "#876368",
    product: "Black Sleep Dress",
    img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=64&q=80",
    date: "25 Oct 2026",
    customer: "Theresa Webb",
    category: "Clothes",
    status: "Paid",
    items: 54,
    total: "$100.00",
  },
  {
    id: "#876412",
    product: "Argan Oil",
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=64&q=80",
    date: "2 Nov 2026",
    customer: "Darrell Steward",
    category: "Cosmetic",
    status: "Pending",
    items: 20,
    total: "$80.50",
  },
  {
    id: "#876621",
    product: "EAU DE Rose",
    img: "https://images.unsplash.com/photo-1547887538-e41255967f81?auto=format&fit=crop&w=64&q=80",
    date: "8 Nov 2026",
    customer: "Marvin McKinney",
    category: "Cosmetic",
    status: "Paid",
    items: 73,
    total: "$120.00",
  },
];

// --- Custom Gauge Data Construction ---
// We need to simulate the "segmented" radial bar.
// We can use a PieChart with many small slices.
// Total 180 degrees (half circle).
const gaugeSlices:
  | { [x: string]: unknown }[]
  | {
      value: number; // equal width
      fill: string;
    }[]
  | undefined = [];
const totalSlices = 20; // Number of blocks
const activeSlices = 14; // Approx 70%
for (let i = 0; i < totalSlices; i++) {
  gaugeSlices.push({
    value: 1, // equal width
    fill:
      i < activeSlices
        ? i < activeSlices - 4
          ? "#f15a29"
          : "#fcb7a0" // Gradient simulation: Dark blue to light blue
        : "#E5E7EB", // Gray for inactive
  });
}
// Add a dummy slice for the bottom half to make it a semi-circle visually if we adjust start/end angles correctly,
// OR just use startAngle=180 endAngle=0 on a full pie and hide the bottom.
// Actually, best way for segmented gauge in Recharts is Pie with paddingAngle.

// --- Components ---

const StatCard = ({
  title,
  value,
  subValue,
  trend,
  trendUp,
  trendValue,
  icon,
  active,
}: StatCardProps) => {
  return (
    <div
      className={cn(
        "p-5 rounded-[1.5rem] transition-all hover:shadow-xl flex flex-col justify-between h-[160px] relative overflow-hidden group",
        active
          ? "bg-linear-to-tr from-brand-primary to-brand-primary/50 text-white shadow-brand-primary/20 shadow-xl"
          : "bg-white text-gray-900 shadow-sm",
      )}
    >
      <div className="flex justify-between items-start z-10">
        <div className="flex flex-col gap-1">
          <h3
            className={cn(
              "text-[15px] font-medium tracking-wide",
              active ? "text-black" : "text-gray-500",
            )}
          >
            {title}
          </h3>
          <div className="flex items-center gap-3 mt-0.5">
            <span
              className={cn(
                "text-[28px] font-bold tracking-tight",
                active ? "text-white" : "text-gray-900",
              )}
            >
              {value}
            </span>
            {trend && (
              <span
                className={cn(
                  "text-[11px] font-bold px-2 py-1 rounded-full flex items-center gap-0.5",
                  active
                    ? "bg-white/20 text-white backdrop-blur-sm"
                    : trendUp
                      ? "bg-brand-primary/10 text-brand-primary" // Image has blue pills for positive on white cards usually? checking... Total Sales has blue pill. New Customer has blue pill.
                      : "bg-red-50 text-red-500", // Return products has red pill
                )}
              >
                {trendUp ? (
                  <ArrowUpRight size={10} strokeWidth={3} />
                ) : (
                  <ArrowDownRight size={10} strokeWidth={3} />
                )}{" "}
                {trend}
              </span>
            )}
          </div>
        </div>
        <div
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110",
            active
              ? "bg-white/20 text-white backdrop-blur-md"
              : "bg-[#F3F4F6] text-gray-900",
            // Note: In image, inactive icon bg might be darker or specific color.
            // "New Customer" icon has black circle? "Return" has blue circle?
            // Let's approximate closer to image:
            // New Customer (Users) -> Black circle, white icon
            // Return Products (Box) -> Blue circle, white icon
            // Total Revenue (Dollar) -> Blue circle, white icon
          )}
        >
          {/* Dynamic styling based on card title for exact match if 'active' is false */}
          {!active && title === "New Customer" ? (
            <div className="w-12 h-12 rounded-full bg-[#1F2937] text-white flex items-center justify-center">
              {icon}
            </div>
          ) : !active &&
            (title === "Return Products" || title === "Total Revenue") ? (
            <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center">
              {icon}
            </div>
          ) : (
            icon
          )}
        </div>
      </div>
      <div
        className={cn(
          "text-sm z-10 font-medium",
          active ? "text-blue-100" : "text-gray-400",
        )}
      >
        {subValue}
      </div>
    </div>
  );
};

export default function Dashboard3Page() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-gray-900 p-4 md:p-6">
      {/* Container for the whole floating dashboard look */}
      <div className="max-w-5xl mx-auto space-y-6">
        {/* --- Top Navigation --- */}
        {/* Floating Pill Navbar */}
        <nav className="flex flex-col md:flex-row items-center justify-between bg-white rounded-[1.5rem] px-4 py-2 md:px-6 md:py-3 shadow-sm border border-gray-100/50">
          <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-start">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-brand-primary/20">
                <Zap size={20} fill="currentColor" className="ml-0.5" />
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                Boltshift
              </span>
            </div>

            {/* Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {["Dashboard", "Analytics", "Analytics ", "Analytics  "].map(
                (
                  tab,
                  i, // Added spaces to make keys unique
                ) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(tab.trim())}
                    className={cn(
                      "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                      tab.trim() === "Dashboard"
                        ? "bg-[#0F172A] text-white shadow-lg shadow-gray-200"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-50",
                    )}
                  >
                    {tab.trim()}
                  </button>
                ),
              )}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 mt-4 md:mt-0 w-full md:w-auto justify-end">
            <button className="p-2.5 rounded-full hover:bg-gray-50 text-gray-400 transition-colors relative">
              <Bell size={22} />
              <span className="absolute top-2.5 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="p-2.5 rounded-full hover:bg-gray-50 text-gray-400 transition-colors mr-2">
              <Settings size={22} />
            </button>

            <div className="flex items-center gap-3 pl-2 sm:border-l sm:border-gray-200">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100&q=80"
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div className="hidden sm:block text-sm">
                <p className="font-bold text-gray-900 leading-none">
                  orio Studio
                </p>
                <p className="text-gray-400 text-xs mt-1 font-medium">
                  orio@helo.mail
                </p>
              </div>
            </div>
          </div>
        </nav>

        {/* --- Main Content --- */}
        <main className="space-y-6">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
            <div className="space-y-1">
              <h1 className="text-[32px] font-bold text-gray-900 tracking-tight">
                Sales Overview
              </h1>
              <p className="text-gray-500 text-[15px]">
                Your current sales summary and activity
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative group">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all shadow-sm group-active:scale-95">
                  This Month <ChevronDown size={14} className="text-gray-400" />
                </button>
              </div>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all shadow-sm active:scale-95">
                <Upload size={16} className="text-gray-500" /> Export
              </button>
              <button className="flex items-center gap-2 px-6 py-2.5 bg-brand-primary rounded-full text-sm font-semibold text-white hover:bg-brand-primary/80 shadow-lg shadow-brand-primary/20 transition-all active:scale-95">
                <SlidersHorizontal size={16} /> Filter
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Total Sales"
              value="2500"
              trend="4.9%"
              trendUp={true}
              subValue="Last month: 2345"
              icon={<ShoppingCart size={22} fill="currentColor" />}
              active={true}
            />
            <StatCard
              title="New Customer"
              value="110"
              trend="7.5%"
              trendUp={true}
              subValue="Last month: 89"
              icon={<Users size={22} fill="currentColor" />}
            />
            <StatCard
              title="Return Products"
              value="72"
              trend="6.0%"
              trendUp={false} // Red pill
              subValue="Last month: 60"
              icon={<Package size={22} fill="currentColor" />}
            />
            <StatCard
              title="Total Revenue"
              value="$8,220.64"
              subValue="Last month: $620.00"
              icon={<DollarSign size={22} />}
            />
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Bar Chart */}
            <div className="lg:col-span-2 bg-white rounded-[1.5rem] p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-gray-900">
                  Performance Overview
                </h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100 text-xs font-semibold text-gray-600 hover:bg-gray-100 transition-colors">
                  This Week <ChevronDown size={14} />
                </button>
              </div>

              <div className="h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceData} barSize={48}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#E5E7EB"
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#9CA3AF", fontSize: 13, fontWeight: 500 }}
                      dy={15}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#9CA3AF", fontSize: 13, fontWeight: 500 }}
                      tickFormatter={(value) =>
                        value === 0
                          ? "0k"
                          : value >= 1000
                            ? `${value / 1000}k`
                            : `${value}k`
                      }
                      width={40}
                    />
                    <Tooltip
                      cursor={{ fill: "transparent" }}
                      offset={20}
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            // Custom Tooltip Card
                            <div className="bg-white p-5 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 min-w-[200px] animate-in fade-in zoom-in-95 duration-200">
                              <p className="text-sm font-semibold text-gray-900 mb-4">
                                August 2026
                              </p>
                              <div className="space-y-3">
                                <div className="flex items-center justify-between gap-6">
                                  <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                                    <span className="text-xs font-medium text-gray-500">
                                      Total Sales
                                    </span>
                                  </div>
                                  <span className="text-sm font-bold text-gray-900">
                                    440
                                  </span>
                                </div>
                                <div className="flex items-center justify-between gap-6">
                                  <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                                    <span className="text-xs font-medium text-gray-500">
                                      Total Revenue
                                    </span>
                                  </div>
                                  <span className="text-sm font-bold text-gray-900">
                                    $4.5k
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="sales" radius={[14, 14, 14, 14]}>
                      {performanceData.map((entry, index) => (
                        <Cell
                          key={`cell-\${index}`}
                          fill={
                            entry.name === "Aug"
                              ? "url(#orangeGradient)"
                              : "#F3F4F6"
                          }
                          className="transition-all duration-300 hover:opacity-80"
                        />
                      ))}
                    </Bar>
                    <defs>
                      <linearGradient
                        id="orangeGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#f15a29" stopOpacity={1} />
                        <stop
                          offset="100%"
                          stopColor="#FFEDD5"
                          stopOpacity={0.8}
                        />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Radial Chart - Sales Overview */}
            <div className="bg-white rounded-[1.5rem] p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">
                  Sales Overview
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
                      data={gaugeSlices}
                      cx="50%"
                      cy="80%"
                      startAngle={180}
                      endAngle={0}
                      innerRadius={90} // Thinner ring
                      outerRadius={120}
                      paddingAngle={3} // Spacing between segments
                      dataKey="value"
                      stroke="none"
                      cornerRadius={4} // Rounded tips for segments
                    >
                      {gaugeSlices.map((entry, index) => (
                        <Cell key={`cell-\${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>

                <div className="absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <p className="text-4xl font-bold text-gray-900 tracking-tight">
                    70.8%
                  </p>
                  <p className="text-sm text-gray-400 font-medium mt-1">
                    Sales Growth
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-auto">
                <div className="p-5 bg-[#FFF7ED] rounded-2xl border border-orange-100/50">
                  <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-1.5 opacity-80">
                    Number of Sales
                  </p>
                  <div className="flex items-end justify-between">
                    <span className="text-xl font-bold text-gray-900">
                      1,452
                    </span>
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[10px] font-bold bg-[#FFEDD5] text-[#EA580C]">
                      4.5%
                    </span>
                  </div>
                </div>
                <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-1.5 opacity-80">
                    Total Revenue
                  </p>
                  <div className="flex items-end justify-between">
                    <span className="text-xl font-bold text-gray-900">
                      $30.9k
                    </span>
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[10px] font-bold bg-black text-white">
                      4.5%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Orders Table */}
          <div className="bg-white rounded-[1.5rem] p-6 shadow-sm border border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
              <h2 className="text-xl font-bold text-gray-900">Recent orders</h2>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-initial group">
                  <Search
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="pl-11 pr-4 py-2.5 bg-gray-50 rounded-full text-sm font-medium w-full sm:w-[280px] focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-gray-400"
                  />
                </div>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 whitespace-nowrap transition-colors">
                  <Filter size={14} /> Sort by <ChevronDown size={14} />
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px]">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="py-3 px-4 text-left w-[250px]">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary cursor-pointer"
                        />
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                          Product info
                        </span>
                      </div>
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Order Id
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Items
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, i) => (
                    <tr
                      key={i}
                      className="group hover:bg-gray-50/80 transition-color duration-200"
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-4">
                          <input
                            type="checkbox"
                            className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-200 cursor-pointer"
                          />
                          <div className="flex items-center gap-3">
                            <img
                              src={order.img}
                              alt={order.product}
                              className="w-11 h-11 rounded-xl object-cover shadow-sm bg-gray-100"
                            />
                            <span className="font-semibold text-sm text-gray-900">
                              {order.product}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm font-medium text-gray-500">
                        {order.id}
                      </td>
                      <td className="py-3 px-4 text-sm font-medium text-gray-500">
                        {order.date}
                      </td>
                      <td className="py-3 px-4 text-sm font-semibold text-gray-900">
                        {order.customer}
                      </td>
                      <td className="py-3 px-4 text-sm font-medium text-gray-500">
                        {order.category}
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={cn(
                            "px-3 py-1.5 rounded-full text-xs font-bold",
                            order.status === "Paid"
                              ? "bg-green-100 text-green-700"
                              : order.status === "Pending"
                                ? "bg-[#FFEDD5] text-[#C2410C]"
                                : "bg-gray-100", // Consistent orange
                          )}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm font-medium text-gray-500 pl-8">
                        {order.items}
                      </td>
                      <td className="py-3 px-4 text-sm font-bold text-gray-900">
                        {order.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
