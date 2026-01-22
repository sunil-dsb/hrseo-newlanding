"use client";

import React from "react";
import {
  LayoutTemplate,
  Video,
  FileText,
  MessageSquare,
  Settings,
  Headphones,
  Search,
  SlidersHorizontal,
  ChevronDown,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Bell,
  Mail,
  MoreVertical,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  AreaChart,
  Area,
  PieChart,
  Pie,
} from "recharts";

export default function Dashboard6() {
  // --- Data & Config ---
  const activityData = [
    { day: "Mon", val: 30 },
    { day: "Tue", val: 45 },
    { day: "Wed", val: 40 },
    { day: "Thu", val: 55 },
    { day: "Fri", val: 95 }, // Highlight
    { day: "Sat", val: 50 },
    { day: "Sun", val: 55 },
  ];

  const totalSpentData = [
    { val: 20 },
    { val: 40 },
    { val: 35 },
    { val: 70 },
    { val: 50 },
    { val: 45 },
    { val: 65 }, // Highlight
    { val: 55 },
    { val: 80 },
  ];

  const contractData = [
    { name: "Pro", value: 86, fill: "#76c7b3" }, // Teal
    { name: "Basic", value: 10, fill: "#e0f2fe" }, // Light Blue
    { name: "Other", value: 4, fill: "#f1f5f9" }, // Grey
  ];

  /*
   * COLOR PALETTE (Extracted)
   * Background: #f9fafc
   * Card Bg: #ffffff
   * Text Primary: #1a1a1a
   * Text Secondary: #94a3b8
   * Brand Black: #111111
   * Accent Lime: #d9f27e
   * Visa Green: #d1e4dc
   * Crystal Gradient: Linear/Conic
   */

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9fafc",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        display: "flex",
        color: "#1a1a1a",
      }}
    >
      {/* === LEFT SIDEBAR === */}
      <aside
        style={{
          width: "90px",
          padding: "40px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
        }}
      >
        {/* Top Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "48px",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <div
            style={{ fontSize: "28px", fontWeight: "900", fontStyle: "italic" }}
          >
            {/* A generic logo approximation */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 22H22L12 2Z"
                fill="#1a1a1a"
                stroke="#1a1a1a"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path d="M12 6L6 18H18L12 6Z" fill="#fff" />
            </svg>
          </div>

          {/* Navigation Icons */}
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "#111",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              }}
            >
              <LayoutTemplate size={20} />
            </div>
            <div style={{ color: "#9ca3af", cursor: "pointer" }}>
              <Video size={24} strokeWidth={1.5} />
            </div>
            <div style={{ color: "#9ca3af", cursor: "pointer" }}>
              <FileText size={24} strokeWidth={1.5} />
            </div>
            <div style={{ color: "#9ca3af", cursor: "pointer" }}>
              <MessageSquare size={24} strokeWidth={1.5} />
            </div>
            <div style={{ color: "#9ca3af", cursor: "pointer" }}>
              <Settings size={24} strokeWidth={1.5} />
            </div>
          </nav>
        </div>

        {/* Bottom Icon */}
        <div style={{ color: "#9ca3af", cursor: "pointer" }}>
          <Headphones size={24} strokeWidth={1.5} />
        </div>
      </aside>

      {/* === MAIN CONTENT === */}
      <main
        style={{ flex: 1, padding: "40px 40px 40px 10px", overflowX: "hidden" }}
      >
        {/* --- TOP HEADER --- */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "50px",
          }}
        >
          {/* Tabs */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <button
              style={{
                backgroundColor: "#111",
                color: "#fff",
                borderRadius: "30px",
                padding: "12px 28px",
                fontSize: "14px",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                border: "none",
                cursor: "pointer",
              }}
            >
              <LayoutTemplate size={16} />
              Dashboard
            </button>
            <button
              style={{
                backgroundColor: "transparent",
                color: "#64748b",
                borderRadius: "30px",
                padding: "12px 28px",
                fontSize: "14px",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                border: "none",
                cursor: "pointer",
              }}
            >
              <span style={{ fontSize: "16px" }}>💳</span>
              Payments
            </button>
            <button
              style={{
                backgroundColor: "transparent",
                color: "#64748b",
                borderRadius: "30px",
                padding: "12px 28px",
                fontSize: "14px",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                border: "none",
                cursor: "pointer",
              }}
            >
              <span style={{ fontSize: "16px" }}>🏁</span>
              Reports
            </button>
          </div>

          {/* User Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            {/* Avatars */}
            <div style={{ display: "flex", alignItems: "center" }}>
              {[1, 2, 3].map((_, i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  alt="user"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "3px solid #f9fafc",
                    marginLeft: i > 0 ? "-12px" : "0",
                    objectFit: "cover",
                  }}
                />
              ))}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#111",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: "600",
                  marginLeft: "-12px",
                  border: "3px solid #f9fafc",
                  zIndex: 2,
                }}
              >
                +5
              </div>
            </div>

            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "#64748b",
                fontSize: "14px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontWeight: "500",
              }}
            >
              <Plus size={16} /> Add Manager
            </button>

            <div
              style={{
                width: "1px",
                height: "24px",
                backgroundColor: "#e2e8f0",
              }}
            ></div>

            <div style={{ display: "flex", gap: "12px" }}>
              <button
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  border: "1px solid #e2e8f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#1a1a1a",
                }}
              >
                <div style={{ position: "relative" }}>
                  <Bell size={18} />
                  <div
                    style={{
                      position: "absolute",
                      top: -2,
                      right: 0,
                      width: "6px",
                      height: "6px",
                      backgroundColor: "#ef4444",
                      borderRadius: "50%",
                    }}
                  ></div>
                </div>
              </button>
              <button
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  border: "1px solid #e2e8f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#64748b",
                }}
              >
                <Mail size={18} />
              </button>
              <img
                src={`https://i.pravatar.cc/100?img=5`}
                alt="user"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </header>

        {/* --- PAGE TITLE & ACTIONS --- */}
        <div style={{ marginBottom: "40px" }}>
          <div
            style={{
              fontSize: "13px",
              color: "#94a3b8",
              marginBottom: "12px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: "400",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div
                style={{
                  width: "14px",
                  height: "14px",
                  border: "1.5px solid #cbd5e1",
                  borderRadius: "4px",
                }}
              ></div>
              Home Page
            </span>
            <span>→</span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div
                style={{
                  width: "14px",
                  height: "14px",
                  border: "1.5px solid #cbd5e1",
                  borderRadius: "4px",
                }}
              ></div>
              Dashboard
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "400", // Light/Regular weight as per image
                color: "#111",
                letterSpacing: "-1.5px",
                margin: 0,
                lineHeight: "1.1",
              }}
            >
              Client Dashboard
            </h1>

            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <button
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "16px",
                  backgroundColor: "#fff",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#64748b",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
                }}
              >
                <Search size={20} />
              </button>
              <button
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "16px",
                  backgroundColor: "#fff",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#64748b",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
                }}
              >
                <SlidersHorizontal size={20} />
              </button>
              <button
                style={{
                  padding: "0 20px",
                  height: "44px",
                  borderRadius: "16px",
                  backgroundColor: "#fff",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                  color: "#64748b",
                  fontSize: "14px",
                  fontWeight: "500",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
                }}
              >
                <span style={{ marginRight: "4px" }}>📅</span> 20-27 Jan, 2025
                <ChevronDown size={14} />
              </button>
              <button
                style={{
                  padding: "0 20px",
                  height: "44px",
                  borderRadius: "24px",
                  backgroundColor: "#fff",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  cursor: "pointer",
                  color: "#1a1a1a",
                  fontSize: "14px",
                  fontWeight: "500",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
                }}
              >
                <Plus size={16} /> Add Widget
              </button>
              <button
                style={{
                  padding: "0 24px",
                  height: "44px",
                  borderRadius: "24px",
                  backgroundColor: "#fff",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  cursor: "pointer",
                  color: "#1a1a1a",
                  fontSize: "14px",
                  fontWeight: "500",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
                }}
              >
                Create a Report
              </button>
            </div>
          </div>
        </div>

        {/* --- BENTO GRID AREA --- */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "380px 1fr",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          {/* COLUMN 1: Pro Version Card */}
          <div
            style={{
              backgroundColor: "#fff", // Fallback
              borderRadius: "32px",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 20px 40px rgba(0,0,0,0.03)",
              background: "linear-gradient(180deg, #eef2ff 0%, #fff 40%)",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "32px 32px 0 32px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                zIndex: 10,
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  margin: 0,
                  color: "#1e293b",
                }}
              >
                Pro Version
              </h3>
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  color: "#94a3b8",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  }}
                >
                  <Plus size={18} style={{ transform: "rotate(45deg)" }} />
                </div>
              </button>
            </div>

            {/* Crystal Graphic (CSS Implementation) */}
            <div
              style={{
                flex: 1,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "300px",
              }}
            >
              {/* Simulated 3D Crystal using CSS Transforms & Gradients */}
              <div
                style={{
                  position: "relative",
                  width: "160px",
                  height: "220px",
                  transformStyle: "preserve-3d",
                  animation: "float 6s ease-in-out infinite",
                }}
              >
                <style jsx>{`
                  @keyframes float {
                    0% {
                      transform: translateY(0px);
                    }
                    50% {
                      transform: translateY(-15px);
                    }
                    100% {
                      transform: translateY(0px);
                    }
                  }
                `}</style>
                {/* Top Pyramid */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 0,
                    height: 0,
                    borderLeft: "70px solid transparent",
                    borderRight: "70px solid transparent",
                    borderBottom: "100px solid rgba(99, 102, 241, 0.6)",
                    filter: "drop-shadow(0 0 10px rgba(99,102,241,0.4))",
                  }}
                ></div>
                {/* Overlay Gradients for facets */}
                <div
                  style={{
                    position: "absolute",
                    top: 20,
                    left: "25%",
                    width: "80px",
                    height: "80px",
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(167, 139, 250, 0.2))",
                    clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
                    mixBlendMode: "overlay",
                  }}
                ></div>

                {/* Bottom Base */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 40,
                    left: "50%",
                    transform:
                      "translateX(-50%) perspective(500px) rotateX(20deg)",
                    width: "120px",
                    height: "60px",
                    borderRadius: "20px",
                    background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
                    opacity: 0.8,
                    filter: "blur(20px)",
                    zIndex: -1,
                  }}
                ></div>

                {/* Center Diamond Shape Image Fallback because CSS polygons are tricky without image */}
                <div
                  style={{
                    fontSize: "150px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -60%)",
                    filter: "drop-shadow(0 20px 30px rgba(99,102,241,0.5))",
                  }}
                >
                  💎
                </div>
              </div>
            </div>

            {/* "Advantages" Bottom Card Section */}
            <div
              style={{
                margin: "24px",
                padding: "24px",
                backgroundColor: "rgba(255,255,255,0.6)",
                backdropFilter: "blur(20px)",
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.5)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <h4 style={{ margin: 0, fontSize: "16px", fontWeight: "600" }}>
                  Advantages
                </h4>
                <span
                  style={{
                    backgroundColor: "#ffe0d6",
                    color: "#1a1a1a",
                    fontSize: "11px",
                    fontWeight: "700",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  👑 15 Days
                </span>
              </div>
              <p
                style={{
                  margin: "0 0 20px 0",
                  fontSize: "13px",
                  color: "#64748b",
                }}
              >
                Your earnings with the pro version
              </p>

              {/* Mini Line Chart */}
              <div style={{ height: "60px", marginBottom: "20px" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={[
                      { v: 10 },
                      { v: 20 },
                      { v: 15 },
                      { v: 30 },
                      { v: 25 },
                      { v: 40 },
                      { v: 60 },
                      { v: 80 },
                    ]}
                  >
                    <defs>
                      <linearGradient id="colorAdv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#1a1a1a"
                          stopOpacity={0.1}
                        />
                        <stop
                          offset="95%"
                          stopColor="#1a1a1a"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="v"
                      stroke="#1a1a1a"
                      strokeWidth={1.5}
                      fill="url(#colorAdv)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* Text at bottom? No in image it's just a button */}
                <button
                  style={{
                    width: "100%",
                    backgroundColor: "#fff",
                    border: "none",
                    borderRadius: "20px",
                    padding: "10px 6px 10px 20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    fontSize: "13px",
                    fontWeight: "500",
                  }}
                >
                  Learn more
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      backgroundColor: "#111",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                    }}
                  >
                    <ArrowDownRight size={16} transform="rotate(-45)" />
                    {/* Actually arrow points Top Right in many designs, but here looks like standard arrow */}
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* COLUMN 2: The Grid of 4 Cards */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            {/* ROW 1 */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.1fr 1.6fr",
                gap: "24px",
                minHeight: "260px",
              }}
            >
              {/* Activity Card */}
              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "32px",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "20px",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        margin: "0 0 6px 0",
                        color: "#475569",
                      }}
                    >
                      Activity
                    </h3>
                    <div style={{ fontSize: "11px", color: "#94a3b8" }}>
                      Worked this week
                    </div>
                    <div
                      style={{
                        fontSize: "32px",
                        fontWeight: "400",
                        margin: "6px 0 0 0",
                        color: "#0f172a",
                      }}
                    >
                      186
                      <span
                        style={{
                          fontSize: "16px",
                          color: "#94a3b8",
                          fontWeight: "400",
                        }}
                      >
                        h
                      </span>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <button
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "10px",
                        border: "none",
                        backgroundColor: "#f1f5f9",
                        color: "#64748b",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <SlidersHorizontal
                        size={14}
                        style={{ transform: "rotate(90deg)" }}
                      />
                    </button>
                    <button
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "10px",
                        border: "none",
                        backgroundColor: "#f1f5f9",
                        color: "#64748b",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>

                <div style={{ flex: 1, width: "100%", position: "relative" }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={activityData} barSize={24}>
                      <Tooltip
                        cursor={{ fill: "transparent" }}
                        contentStyle={{
                          borderRadius: "12px",
                          border: "none",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        }}
                        formatter={(value) => [`$${value}0`, ""]}
                        labelStyle={{ display: "none" }}
                      />
                      <Bar dataKey="val" radius={[6, 6, 6, 6]}>
                        {activityData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={entry.day === "Fri" ? "#f15a29" : "#f1f5f9"}
                          />
                        ))}
                      </Bar>
                      <XAxis
                        dataKey="day"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fill: "#94a3b8", fontSize: 11 }}
                        dy={10}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                  {/* Floating Badge for Friday */}
                  <div
                    style={{
                      position: "absolute",
                      top: "10%",
                      left: "60%",
                      backgroundColor: "#ffe0d6",
                      padding: "4px 10px",
                      borderRadius: "12px",
                      fontSize: "11px",
                      fontWeight: "700",
                      boxShadow: "0 4px 10px rgba(217, 242, 126, 0.4)",
                    }}
                  >
                    $630
                  </div>
                </div>
              </div>

              {/* Virtual Cards */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                  backgroundColor: "#fff",
                  borderRadius: "32px",
                  padding: "24px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                  position: "relative",
                }}
              >
                {/* Left side stats */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "30px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        margin: 0,
                        color: "#475569",
                      }}
                    >
                      Virtual cards
                    </h3>
                    <button
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "10px",
                        border: "none",
                        backgroundColor: "#f1f5f9",
                        color: "#64748b",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <LayoutTemplate size={14} />
                    </button>
                  </div>

                  <div style={{ marginBottom: "30px" }}>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "#94a3b8",
                        marginBottom: "4px",
                      }}
                    >
                      Total Balance
                    </div>
                    <div
                      style={{
                        fontSize: "28px",
                        fontWeight: "400",
                        color: "#0f172a",
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                      }}
                    >
                      $6.010.29
                      <span
                        style={{
                          fontSize: "12px",
                          color: "#f15a29",
                          fontWeight: "500",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: "#ffe0d6",
                            borderRadius: "50%",
                            width: "16px",
                            height: "16px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          ↗
                        </span>
                        + $205.00
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "12px",
                        color: "#64748b",
                      }}
                    >
                      <span>Dollar</span>
                      <span style={{ color: "#0f172a", fontWeight: "500" }}>
                        72%
                      </span>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "6px",
                        backgroundColor: "#f1f5f9",
                        borderRadius: "3px",
                        overflow: "hidden",
                      }}
                    >
                      {" "}
                      <div
                        style={{
                          width: "72%",
                          height: "100%",
                          backgroundColor: "#e2e8f0",
                        }}
                      ></div>{" "}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "12px",
                        color: "#64748b",
                        marginTop: "8px",
                      }}
                    >
                      <span>Tether</span>
                      <span style={{ color: "#0f172a", fontWeight: "500" }}>
                        28%
                      </span>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "6px",
                        backgroundColor: "#f1f5f9",
                        borderRadius: "3px",
                        overflow: "hidden",
                      }}
                    >
                      {" "}
                      <div
                        style={{
                          width: "28%",
                          height: "100%",
                          backgroundColor: "#e2e8f0",
                        }}
                      ></div>{" "}
                    </div>
                  </div>
                </div>

                {/* Right side Visa Card */}
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      backgroundColor: "#ffe0d6",
                      borderRadius: "24px",
                      padding: "24px",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      color: "#1a1a1a",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                      }}
                    >
                      {/* Chip */}
                      <div
                        style={{
                          width: "36px",
                          height: "26px",
                          borderRadius: "6px",
                          backgroundColor: "#cbd5e1",
                          opacity: 0.8,
                          border: "1px solid #94a3b8",
                        }}
                      ></div>
                      <h3
                        style={{
                          margin: 0,
                          fontStyle: "italic",
                          fontWeight: "800",
                          fontSize: "18px",
                        }}
                      >
                        VISA
                      </h3>
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: "28px",
                          fontWeight: "400",
                          letterSpacing: "-0.5px",
                          marginBottom: "20px",
                        }}
                      >
                        $390.00
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-end",
                          fontSize: "12px",
                          fontWeight: "600",
                          opacity: 0.7,
                        }}
                      >
                        <span>**** 6802</span>
                        <span>09/25</span>
                      </div>
                    </div>

                    {/* Decorative Circle for Visa Card */}
                    <div
                      style={{
                        position: "absolute",
                        top: "-20px",
                        right: "-20px",
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        border: "1px solid rgba(0,0,0,0.05)",
                      }}
                    ></div>
                  </div>

                  {/* The arrow button bridging the two sections */}
                  <div
                    style={{
                      position: "absolute",
                      left: "-20px", // Half width (40px)
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                      zIndex: 10,
                    }}
                  >
                    <ArrowUpRight size={18} color="#64748b" />
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 2 */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.6fr 1.1fr",
                gap: "24px",
                minHeight: "260px",
              }}
            >
              {/* Total Spent Card */}
              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "32px",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "20px",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        margin: "0 0 6px 0",
                        color: "#475569",
                      }}
                    >
                      Total Spent
                    </h3>
                    <div style={{ fontSize: "11px", color: "#94a3b8" }}>
                      Spent this week
                    </div>
                    <div
                      style={{
                        fontSize: "32px",
                        fontWeight: "400",
                        margin: "6px 0 6px 0",
                        color: "#0f172a",
                      }}
                    >
                      $820.65
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "#ef4444",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <span
                        style={{
                          transform: "rotate(180deg)",
                          display: "inline-block",
                        }}
                      >
                        ↑
                      </span>{" "}
                      $600.00
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <button
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "10px",
                        border: "none",
                        backgroundColor: "#f1f5f9",
                        color: "#64748b",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <SlidersHorizontal
                        size={14}
                        style={{ transform: "rotate(90deg)" }}
                      />
                    </button>
                    <button
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "10px",
                        border: "none",
                        backgroundColor: "#f1f5f9",
                        color: "#64748b",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "20px", flex: 1 }}>
                  {/* Small Pills */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      justifyContent: "flex-end",
                      paddingBottom: "20px",
                    }}
                  >
                    <div
                      style={{
                        padding: "8px 12px",
                        backgroundColor: "#f8fafc",
                        borderRadius: "12px",
                        fontSize: "11px",
                        color: "#64748b",
                        fontWeight: "500",
                      }}
                    >
                      10 Wallets
                    </div>
                    <div
                      style={{
                        padding: "8px 12px",
                        backgroundColor: "#f8fafc",
                        borderRadius: "12px",
                        fontSize: "11px",
                        color: "#64748b",
                        fontWeight: "500",
                      }}
                    >
                      26 Assets
                    </div>
                  </div>

                  {/* Line Chart */}
                  <div
                    style={{ flex: 1, height: "100%", position: "relative" }}
                  >
                    <ResponsiveContainer width="100%" height={140}>
                      <AreaChart data={totalSpentData}>
                        <defs>
                          <linearGradient
                            id="colorSpent"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#e2e8f0"
                              stopOpacity={0.4}
                            />
                            <stop
                              offset="95%"
                              stopColor="#e2e8f0"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                        <Area
                          type="monotone"
                          dataKey="val"
                          stroke="#94a3b8"
                          strokeWidth={2}
                          fill="url(#colorSpent)"
                          fillOpacity={1}
                          dot={false}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                    {/* Floating Badge for Point */}
                    <div
                      style={{
                        position: "absolute",
                        top: "20%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        backgroundColor: "#ffe0d6",
                        padding: "4px 10px",
                        borderRadius: "12px",
                        fontSize: "11px",
                        fontWeight: "700",
                        boxShadow: "0 4px 10px rgba(217, 242, 126, 0.4)",
                      }}
                    >
                      $680.00
                    </div>
                  </div>
                </div>
              </div>

              {/* Contract Type Card */}
              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "32px",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      margin: 0,
                      color: "#475569",
                    }}
                  >
                    Contract Type
                  </h3>
                  <button
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "10px",
                      border: "none",
                      backgroundColor: "#f1f5f9",
                      color: "#64748b",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <ArrowUpRight size={14} />
                  </button>
                </div>

                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <button
                    style={{
                      position: "absolute",
                      top: 10,
                      left: 0,
                      padding: "6px 14px",
                      borderRadius: "20px",
                      border: "1px solid #e2e8f0",
                      backgroundColor: "#fff",
                      fontSize: "11px",
                      color: "#64748b",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      zIndex: 5,
                    }}
                  >
                    Learn more <span style={{ fontSize: "10px" }}>›</span>
                  </button>
                  {/* Circles for Chart */}
                  <div
                    style={{
                      position: "relative",
                      width: "120px",
                      height: "120px",
                    }}
                  >
                    {/* Big Circle */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        backgroundColor: "#f15a29",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "24px",
                        color: "#fff",
                        fontWeight: "500",
                        boxShadow: "0 10px 30px #fbcfc1",
                        zIndex: 2,
                      }}
                    >
                      86%
                    </div>
                    {/* Small Circle */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        backgroundColor: "#fff6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        color: "#94a3b8",
                        fontWeight: "500",
                        border: "1px solid #f1f5f9",
                        boxShadow: "0 4px 10px #00000014",
                        zIndex: 2,
                      }}
                      className="backdrop-blur-lg"
                    >
                      4%
                    </div>
                    {/* Floating Text */}
                    <div
                      style={{
                        position: "absolute",
                        top: -20,
                        right: -20,
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        backgroundColor: "#fff6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        color: "#94a3b8",
                        fontWeight: "500",
                        border: "1px solid #f1f5f9",
                        boxShadow: "0 4px 10px #00000014",
                        zIndex: 2,
                      }}
                      className="backdrop-blur-lg"
                    >
                      10%
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderTop: "1px solid #f1f5f9",
                    paddingTop: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#1e293b",
                      }}
                    >
                      140
                    </span>
                    <span style={{ fontSize: "10px", color: "#94a3b8" }}>
                      Milestone
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#1e293b",
                      }}
                    >
                      48
                    </span>
                    <span style={{ fontSize: "10px", color: "#94a3b8" }}>
                      Bonuses
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#1e293b",
                      }}
                    >
                      16
                    </span>
                    <span style={{ fontSize: "10px", color: "#94a3b8" }}>
                      Hourly
                    </span>
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
