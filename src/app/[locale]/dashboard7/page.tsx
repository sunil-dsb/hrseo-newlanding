"use client";

import React from "react";
import {
  Bell,
  Search,
  ArrowUpRight,
  Ticket,
  Users,
  Megaphone,
  BarChart2,
} from "lucide-react";

export default function Dashboard7() {
  const years = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const revenueData = [
    { height: 40, striped: true, highlight: false },
    { height: 50, striped: true, highlight: false },
    { height: 45, striped: true, highlight: false },
    { height: 55, striped: true, highlight: false },
    { height: 40, striped: true, highlight: false },
    { height: 35, striped: false, highlight: false }, // Simpler bars for visually less important months? No, image shows consistent pattern.
    // Let's match the image's "beat" more closely.
    // Image: Jan(low), Feb(med), Mar(med), Apr(med), May(low), Jun(med), Jul(med), Aug(high), Sep(high), Oct(med), Nov(highlight), Dec(black)
    // The "Striped" pattern is consistent on the bottom half of most bars.
    // In the image, the bars are "Capsules".
    { h: 35, s: 70 }, // Jan
    { h: 45, s: 70 }, // Feb
    { h: 60, s: 70 }, // Mar
    { h: 50, s: 70 }, // Apr
    { h: 40, s: 70 }, // May
    { h: 35, s: 70 }, // Jun
    { h: 45, s: 70 }, // Jul
    { h: 55, s: 70 }, // Aug
    { h: 70, s: 70 }, // Sep
    { h: 50, s: 70 }, // Oct
    { h: 85, s: 70, highlight: true }, // Nov
    { h: 65, s: 0, black: true }, // Dec
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(120% 120% at 50% 10%, #F6F5F2 0%, #E6E4DD 100%)",
        padding: "40px 60px",
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        color: "#1a1a1a",
      }}
    >
      {/* Navbar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "60px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "60px" }}>
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontWeight: "800",
              fontSize: "22px",
              letterSpacing: "-0.5px",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                color: "#1a1a1a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3V21H21"
                  stroke="#1a1a1a"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 9L13.5 13.5L9 9L3 15"
                  stroke="#1a1a1a"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            Morphex
          </div>

          {/* Nav Links */}
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              style={{
                backgroundColor: "#000",
                color: "#fff",
                padding: "10px 24px",
                borderRadius: "24px",
                border: "none",
                fontSize: "13px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Overview
            </button>
            <button
              style={{
                background: "transparent",
                border: "none",
                padding: "10px 20px",
                fontSize: "13px",
                color: "#666",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Project
            </button>
            <button
              style={{
                background: "transparent",
                border: "none",
                padding: "10px 20px",
                fontSize: "13px",
                color: "#666",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Analytics
            </button>
            <button
              style={{
                background: "transparent",
                border: "none",
                padding: "10px 20px",
                fontSize: "13px",
                color: "#666",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Reports
            </button>
          </div>
        </div>

        {/* Right Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <div style={{ position: "relative" }}>
            <Search
              size={18}
              color="#999"
              style={{
                position: "absolute",
                left: "20px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
            <input
              type="text"
              placeholder="Search projects..."
              style={{
                backgroundColor: "#EFEEE9",
                border: "none",
                borderRadius: "30px",
                padding: "14px 20px 14px 50px",
                width: "260px",
                fontSize: "14px",
                outline: "none",
                color: "#1a1a1a",
                fontWeight: "500",
              }}
            />
          </div>
          <button
            style={{
              width: "48px",
              height: "48px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
            }}
          >
            <Bell size={20} color="#1a1a1a" />
          </button>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid #fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
              alt="User"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      {/* Adjusted Grid: The top section is split. Left is text, Right is 3 cards. */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "0.8fr 1.2fr",
          gap: "40px",
          marginBottom: "40px",
          alignItems: "flex-end",
        }}
      >
        {/* Welcome Text */}
        <div style={{ paddingBottom: "10px" }}>
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "600",
              marginBottom: "12px",
              letterSpacing: "-1.5px",
              lineHeight: "1.1",
              color: "#1a1a1a",
            }}
          >
            Welcome back, John!
          </h1>
          <p style={{ color: "#666", fontSize: "16px", fontWeight: "400" }}>
            Here's What's Happening With Your Projects Today.
          </p>
        </div>

        {/* Stats Cards - Aligned to right */}
        <div
          style={{ display: "flex", gap: "20px", justifyContent: "flex-end" }}
        >
          {/* Card 1 */}
          <div
            style={{
              backgroundColor: "#F7F6F3",
              padding: "24px 28px",
              borderRadius: "28px",
              flex: 1,
              boxShadow: "0 4px 24px rgba(0,0,0,0.02)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                marginBottom: "24px",
              }}
            >
              <span
                style={{ color: "#666", fontSize: "13px", fontWeight: "600" }}
              >
                Total Revenue
              </span>
              <Ticket size={20} color="#1a1a1a" strokeWidth={1.5} />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  color: "#FF4D4D",
                  fontSize: "13px",
                  fontWeight: "700",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                ▼ -10%
              </span>
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  letterSpacing: "-0.5px",
                }}
              >
                $45, 231.89
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div
            style={{
              backgroundColor: "#F7F6F3",
              padding: "24px 28px",
              borderRadius: "28px",
              flex: 1,
              boxShadow: "0 4px 24px rgba(0,0,0,0.02)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                marginBottom: "24px",
              }}
            >
              <span
                style={{ color: "#666", fontSize: "13px", fontWeight: "600" }}
              >
                Active User
              </span>
              <Users size={20} color="#1a1a1a" strokeWidth={1.5} />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  color: "#4CAF50",
                  fontSize: "13px",
                  fontWeight: "700",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                ▲ +12.5%
              </span>
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  letterSpacing: "-0.5px",
                }}
              >
                2,350
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div
            style={{
              backgroundColor: "#F7F6F3",
              padding: "24px 28px",
              borderRadius: "28px",
              flex: 1,
              boxShadow: "0 4px 24px rgba(0,0,0,0.02)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                marginBottom: "24px",
              }}
            >
              <span
                style={{ color: "#666", fontSize: "13px", fontWeight: "600" }}
              >
                Active Projects
              </span>
              <Megaphone size={20} color="#1a1a1a" strokeWidth={1.5} />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  color: "#4CAF50",
                  fontSize: "13px",
                  fontWeight: "700",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                ▲ +2.1%
              </span>
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  letterSpacing: "-0.5px",
                }}
              >
                24
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 - Revenue and Projects */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.8fr 1fr",
          gap: "24px",
          marginBottom: "24px",
        }}
      >
        {/* Revenue Chart */}
        <div
          style={{
            backgroundColor: "#F7F6F3",
            borderRadius: "36px",
            padding: "40px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.02)",
          }}
        >
          <div style={{ marginBottom: "40px" }}>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "8px",
                letterSpacing: "-0.5px",
              }}
            >
              Revenue
            </h3>
            <p style={{ color: "#888", fontSize: "14px", fontWeight: "500" }}>
              Monthly Revenue Trend Over The Past 7 Month
            </p>
          </div>

          <div
            style={{ display: "flex", height: "260px", alignItems: "flex-end" }}
          >
            {/* Y Axis */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                paddingRight: "24px",
                color: "#AAA",
                fontSize: "12px",
                gap: "10px",
                fontWeight: "500",
              }}
            >
              <span>$1.4k</span>
              <span>$1.2k</span>
              <span>$1k</span>
              <span>$800</span>
              <span>$600</span>
              <span>$400</span>
              <span>$200</span>
              <span>0</span>
            </div>

            {/* Bars Container */}
            <div
              style={{
                display: "flex",
                flex: 1,
                alignItems: "flex-end",
                justifyContent: "space-between",
                paddingLeft: "10px",
              }}
            >
              {revenueData.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                    height: "100%",
                    justifyContent: "flex-end",
                    position: "relative",
                    width: "100%",
                  }}
                >
                  {/* Tooltip Line for Highlight */}
                  {item.highlight && (
                    <div
                      style={{
                        position: "absolute",
                        top: "0", // High up
                        bottom: `${item.h}%`,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <div
                        style={{
                          width: "6px",
                          height: "6px",
                          backgroundColor: "#000",
                          borderRadius: "50%",
                          marginBottom: "4px",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "1px",
                          height: "100%",
                          backgroundColor: "#000",
                          opacity: 0.8,
                        }}
                      ></div>
                    </div>
                  )}

                  {/* The Bar Itself */}
                  <div
                    style={{
                      height: `${item.h}%`,
                      width: "100%", // Responsive width
                      maxWidth: "48px",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "16px",
                      overflow: "hidden",
                      backgroundColor: "transparent",
                    }}
                  >
                    {item.black ? (
                      <div
                        style={{
                          flex: 1,
                          backgroundColor: "#0C0C0C",
                          borderRadius: "16px",
                        }}
                      ></div>
                    ) : (
                      // Split Bar: Bottom is striped, Top is solid
                      <div
                        style={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          borderRadius: "16px",
                          overflow: "hidden",
                        }}
                      >
                        {/* Top Solid Part */}
                        <div
                          style={{
                            height: "45%",
                            width: "100%",
                            backgroundColor: item.highlight
                              ? "#FEF075"
                              : "#EBE9E2",
                          }}
                        ></div>

                        {/* Bottom Striped Part */}
                        <div
                          style={{
                            height: "55%",
                            width: "100%",
                            background: item.highlight
                              ? `repeating-linear-gradient(
                                      -45deg,
                                      #FEF075,
                                      #FEF075 5px,
                                      rgba(255,255,255,0.1) 5px,
                                      rgba(255,255,255,0.1) 10px
                                    )` // For yellow bar, stripes are subtle
                              : `repeating-linear-gradient(
                                      -45deg,
                                      #EBE9E2,
                                      #EBE9E2 5px,
                                      #E4E1D8 5px,
                                      #E4E1D8 9px
                                    )`, // Creating the hatch texture
                          }}
                        ></div>
                      </div>
                    )}
                  </div>

                  <span
                    style={{
                      fontSize: "12px",
                      color: "#999",
                      fontWeight: "600",
                    }}
                  >
                    {years[index]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Status Grid */}
        <div
          style={{
            backgroundColor: "#F7F6F3",
            borderRadius: "36px",
            padding: "36px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.02)",
          }}
        >
          <div style={{ marginBottom: "24px" }}>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "8px",
                letterSpacing: "-0.5px",
              }}
            >
              Project Status
            </h3>
            <p style={{ color: "#888", fontSize: "14px", fontWeight: "500" }}>
              Current Project Distribution
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              height: "260px",
            }}
          >
            {/* Card 1: Complete - Brown */}
            <div
              style={{
                backgroundColor: "#AC9A8D",
                borderRadius: "24px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                color: "#fff",
              }}
            >
              <div
                style={{ fontSize: "14px", opacity: 0.9, fontWeight: "500" }}
              >
                Complete
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <span style={{ fontSize: "28px", fontWeight: "600" }}>20%</span>
                <ArrowUpRight size={22} />
              </div>
            </div>

            {/* Card 2: In-progress - Beige */}
            <div
              style={{
                backgroundColor: "#EBE9E2",
                borderRadius: "24px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                color: "#1a1a1a",
              }}
            >
              <div
                style={{ fontSize: "14px", color: "#555", fontWeight: "500" }}
              >
                In-progress
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <span style={{ fontSize: "28px", fontWeight: "600" }}>10%</span>
                <ArrowUpRight size={22} color="#555" />
              </div>
            </div>

            {/* Card 3: Pending - Beige */}
            <div
              style={{
                backgroundColor: "#EBE9E2",
                borderRadius: "24px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                color: "#1a1a1a",
              }}
            >
              <div
                style={{ fontSize: "14px", color: "#555", fontWeight: "500" }}
              >
                Pending
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <span style={{ fontSize: "28px", fontWeight: "600" }}>30%</span>
                <ArrowUpRight size={22} color="#555" />
              </div>
            </div>

            {/* Card 4: Done - Yellow */}
            <div
              style={{
                backgroundColor: "#FEF075",
                borderRadius: "24px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                color: "#1a1a1a",
              }}
            >
              <div style={{ fontSize: "14px", fontWeight: "600" }}>Done</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <span style={{ fontSize: "28px", fontWeight: "700" }}>50%</span>
                <ArrowUpRight size={22} color="#1a1a1a" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3 - Bottom Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "24px",
        }}
      >
        {/* Achievements */}
        <div
          style={{
            backgroundColor: "#F7F6F3",
            borderRadius: "36px",
            padding: "32px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.02)",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "700",
              marginBottom: "30px",
              letterSpacing: "-0.5px",
            }}
          >
            This month's achievements
          </h3>
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "flex-end",
              height: "160px",
            }}
          >
            {/* Item 1 */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
                height: "100%",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#FEF075",
                  borderRadius: "20px",
                  position: "relative",
                  marginBottom: "12px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-25px",
                    left: "0",
                    fontSize: "11px",
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                  }}
                >
                  100/100 Excellent
                </div>
              </div>
              <span
                style={{
                  fontSize: "12px",
                  color: "#666",
                  textAlign: "center",
                  fontWeight: "500",
                }}
              >
                Goals Complete
              </span>
            </div>

            {/* Item 2 */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
                height: "100%",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "75%",
                  backgroundColor: "#0C0C0C",
                  borderRadius: "20px",
                  position: "relative",
                  marginBottom: "12px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-25px",
                    left: "0",
                    fontSize: "11px",
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                  }}
                >
                  100/95 Better
                </div>
              </div>
              <span
                style={{
                  fontSize: "12px",
                  color: "#666",
                  textAlign: "center",
                  fontWeight: "500",
                }}
              >
                Performance
              </span>
            </div>

            {/* Item 3 */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
                height: "100%",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "50%",
                  backgroundColor: "#EBE9E2",
                  borderRadius: "20px",
                  position: "relative",
                  marginBottom: "12px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-25px",
                    left: "0",
                    fontSize: "11px",
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                  }}
                >
                  100/80 Good
                </div>
              </div>
              <span
                style={{
                  fontSize: "12px",
                  color: "#666",
                  textAlign: "center",
                  fontWeight: "500",
                }}
              >
                Satisfaction
              </span>
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div
          style={{
            backgroundColor: "#F7F6F3",
            borderRadius: "36px",
            padding: "32px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.02)",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "700",
              marginBottom: "8px",
              letterSpacing: "-0.5px",
            }}
          >
            Recent milestone's
          </h3>

          <div
            style={{
              height: "160px",
              display: "flex",
              alignItems: "flex-end",
              gap: "20px",
              justifyContent: "space-between",
              paddingTop: "20px",
            }}
          >
            {/* Milestone Group 1 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "flex-end", gap: "6px" }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "30px",
                    backgroundColor: "#DCDCD6",
                    borderRadius: "16px",
                  }}
                ></div>
                <div
                  style={{
                    width: "32px",
                    height: "50px",
                    backgroundColor: "#C8BFA9",
                    borderRadius: "16px",
                  }}
                ></div>
              </div>
              <span
                style={{ fontSize: "13px", color: "#999", fontWeight: "600" }}
              >
                01.23
              </span>
            </div>

            {/* Milestone Group 2 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "flex-end", gap: "6px" }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "40px",
                    backgroundColor: "#C8BFA9",
                    borderRadius: "16px",
                  }}
                ></div>
                <div
                  style={{
                    width: "32px",
                    height: "100px",
                    backgroundColor: "#0C0C0C",
                    borderRadius: "16px",
                  }}
                ></div>
                <div
                  style={{
                    width: "32px",
                    height: "35px",
                    backgroundColor: "#988474",
                    borderRadius: "16px",
                  }}
                ></div>
              </div>
              <span
                style={{ fontSize: "13px", color: "#999", fontWeight: "600" }}
              >
                02.23
              </span>
            </div>

            {/* Milestone Group 3 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "flex-end", gap: "6px" }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "55px",
                    backgroundColor: "#C0AEA2",
                    borderRadius: "16px",
                  }}
                ></div>
                <div
                  style={{
                    width: "32px",
                    height: "120px",
                    backgroundColor: "#FEF075",
                    borderRadius: "16px",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: "-24px",
                      right: "-8px",
                      fontSize: "14px",
                      fontWeight: "800",
                    }}
                  >
                    $2,5
                  </span>
                </div>
              </div>
              <span
                style={{ fontSize: "13px", color: "#999", fontWeight: "600" }}
              >
                03.23
              </span>
            </div>
          </div>
        </div>

        {/* Deadlines */}
        <div
          style={{
            backgroundColor: "#F7F6F3",
            borderRadius: "36px",
            padding: "32px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.02)",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "700",
              marginBottom: "30px",
              letterSpacing: "-0.5px",
            }}
          >
            Upcoming deadlines
          </h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "#1a1a1a",
                  }}
                >
                  Website Redesign
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#999",
                    marginTop: "4px",
                    fontWeight: "500",
                  }}
                >
                  Start 1 Aug 2025
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#EBE9E2",
                  padding: "8px 16px",
                  borderRadius: "12px",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#666",
                }}
              >
                Due 1 Week
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "#1a1a1a",
                  }}
                >
                  Client Presentation
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#999",
                    marginTop: "4px",
                    fontWeight: "500",
                  }}
                >
                  Start 5 Aug 2025
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#0C0C0C",
                  padding: "8px 16px",
                  borderRadius: "12px",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                Due Tomorrows
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "#1a1a1a",
                  }}
                >
                  Performance Review
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#999",
                    marginTop: "4px",
                    fontWeight: "500",
                  }}
                >
                  Start 1 Aug 2025
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#FEF075",
                  padding: "8px 16px",
                  borderRadius: "12px",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#1a1a1a",
                }}
              >
                Due Tomorrows
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
