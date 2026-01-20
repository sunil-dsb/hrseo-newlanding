"use client";

import React from "react";

export default function Dashboard5() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f7",
        padding: "20px",
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Top Navigation */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "40px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontSize: "28px",
            fontWeight: "700",
            fontStyle: "italic",
            marginRight: "40px",
          }}
        >
          h.
        </div>

        {/* Navigation Tabs */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            flex: 1,
          }}
        >
          <button
            style={{
              backgroundColor: "#1a1a1a",
              color: "#ffffff",
              border: "none",
              borderRadius: "20px",
              padding: "10px 24px",
              fontSize: "14px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span style={{ fontSize: "16px" }}>📊</span>
            Dashboard
          </button>
          <button
            style={{
              backgroundColor: "transparent",
              color: "#666",
              border: "none",
              borderRadius: "20px",
              padding: "10px 24px",
              fontSize: "14px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span style={{ fontSize: "16px" }}>💳</span>
            Payments
          </button>
          <button
            style={{
              backgroundColor: "transparent",
              color: "#666",
              border: "none",
              borderRadius: "20px",
              padding: "10px 24px",
              fontSize: "14px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span style={{ fontSize: "16px" }}>📈</span>
            Reports
          </button>
        </div>

        {/* User Avatars */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div style={{ display: "flex", marginLeft: "-8px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "#e8d5c4",
                border: "2px solid #f5f5f7",
                marginLeft: "-8px",
              }}
            ></div>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "#d4b5a0",
                border: "2px solid #f5f5f7",
                marginLeft: "-8px",
              }}
            ></div>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "#c9a88a",
                border: "2px solid #f5f5f7",
                marginLeft: "-8px",
              }}
            ></div>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "#1a1a1a",
                border: "2px solid #f5f5f7",
                marginLeft: "-8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "18px",
              }}
            >
              +
            </div>
          </div>
          <button
            style={{
              backgroundColor: "transparent",
              color: "#666",
              border: "none",
              fontSize: "14px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            + Add Manager
          </button>
        </div>

        {/* Right Icons */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginLeft: "40px",
          }}
        >
          <button
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
            }}
          >
            🔔
          </button>
          <button
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
            }}
          >
            ⚙️
          </button>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              backgroundColor: "#e8d5c4",
              cursor: "pointer",
            }}
          ></div>
        </div>
      </div>

      {/* Breadcrumb and Title */}
      <div style={{ marginBottom: "30px" }}>
        <div
          style={{
            fontSize: "13px",
            color: "#999",
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span>🏠 Home Page</span>
          <span>→</span>
          <span>📊 Dashboard</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h1
            style={{
              fontSize: "42px",
              fontWeight: "400",
              color: "#1a1a1a",
              margin: 0,
            }}
          >
            Client Dashboard
          </h1>
          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <button
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                backgroundColor: "#fff",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              🔍
            </button>
            <button
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                backgroundColor: "#fff",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              ⚡
            </button>
            <button
              style={{
                padding: "10px 20px",
                borderRadius: "12px",
                backgroundColor: "#fff",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              📅 20-27 Jan, 2025 ▼
            </button>
            <button
              style={{
                padding: "10px 20px",
                borderRadius: "12px",
                backgroundColor: "#fff",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              + Add filter
            </button>
            <button
              style={{
                padding: "10px 20px",
                borderRadius: "12px",
                backgroundColor: "#fff",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Create a Report
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "360px 1fr 280px",
          gap: "20px",
          alignItems: "start",
        }}
      >
        {/* Left Sidebar */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Sidebar Icons */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "20px",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "60px",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "#1a1a1a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              🏠
            </div>
            <div
              style={{
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                cursor: "pointer",
                color: "#999",
              }}
            >
              📁
            </div>
            <div
              style={{
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                cursor: "pointer",
                color: "#999",
              }}
            >
              📄
            </div>
            <div
              style={{
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                cursor: "pointer",
                color: "#999",
              }}
            >
              💬
            </div>
            <div
              style={{
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                cursor: "pointer",
                color: "#999",
              }}
            >
              ⚙️
            </div>
          </div>

          {/* Pro Version Card */}
          <div
            style={{
              backgroundColor: "#e8eef5",
              borderRadius: "24px",
              padding: "24px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#1a1a1a",
                }}
              >
                Pro Version
              </span>
              <button
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "18px",
                  cursor: "pointer",
                  color: "#666",
                }}
              >
                ×
              </button>
            </div>

            {/* 3D Ethereum Graphic */}
            <div
              style={{
                width: "100%",
                height: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "140px",
                  height: "140px",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  filter: "drop-shadow(0 20px 40px rgba(102, 126, 234, 0.4))",
                  position: "relative",
                  animation: "float 3s ease-in-out infinite",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "60%",
                    height: "60%",
                    background:
                      "linear-gradient(225deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%)",
                    clipPath:
                      "polygon(50% 20%, 80% 35%, 80% 65%, 50% 80%, 20% 65%, 20% 35%)",
                  }}
                ></div>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "160px",
                  height: "40px",
                  background:
                    "linear-gradient(to bottom, rgba(102, 126, 234, 0.2), rgba(102, 126, 234, 0.05))",
                  borderRadius: "50%",
                  filter: "blur(10px)",
                }}
              ></div>
            </div>

            {/* Advantages Section */}
            <div style={{ marginBottom: "20px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#1a1a1a",
                  }}
                >
                  Advantages
                </span>
                <span
                  style={{
                    backgroundColor: "#f4e96d",
                    padding: "4px 10px",
                    borderRadius: "12px",
                    fontSize: "11px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  ⭐ 10 Days
                </span>
              </div>
              <p
                style={{
                  fontSize: "12px",
                  color: "#666",
                  margin: "0 0 16px 0",
                }}
              >
                Your earnings with the pro version
              </p>

              {/* Chart */}
              <div
                style={{
                  height: "120px",
                  position: "relative",
                  marginBottom: "16px",
                }}
              >
                {/* Bars */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    height: "100%",
                    gap: "4px",
                    paddingTop: "20px",
                  }}
                >
                  {[
                    30, 45, 35, 50, 40, 55, 45, 60, 50, 65, 55, 70, 60, 75, 65,
                    80, 70, 85, 75, 90,
                  ].map((height, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: `${height}%`,
                        backgroundColor: "#d4dce8",
                        borderRadius: "2px",
                      }}
                    ></div>
                  ))}
                </div>
                {/* Line Chart Overlay */}
                <svg
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                  }}
                >
                  <polyline
                    points="0,80 20,70 40,75 60,60 80,65 100,50 120,55 140,45 160,50 180,40 200,45 220,35 240,40 260,30 280,35 300,25"
                    fill="none"
                    stroke="#1a1a1a"
                    strokeWidth="2"
                  />
                  <circle cx="120" cy="50" r="4" fill="#1a1a1a" />
                </svg>
              </div>

              {/* Learn More Button */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <button
                  style={{
                    backgroundColor: "#fff",
                    border: "none",
                    borderRadius: "20px",
                    padding: "8px 16px",
                    fontSize: "13px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  Learn more
                  <span
                    style={{
                      backgroundColor: "#1a1a1a",
                      color: "#fff",
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                    }}
                  >
                    →
                  </span>
                </button>
              </div>
            </div>

            <p
              style={{
                fontSize: "11px",
                color: "#999",
                margin: 0,
                lineHeight: "1.4",
              }}
            >
              Join the elite of the crypto world with Pro Version
            </p>
          </div>

          {/* User Avatar at Bottom */}
          <div
            style={{
              width: "60px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "#e8d5c4",
                cursor: "pointer",
              }}
            ></div>
          </div>
        </div>

        {/* Middle Column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Activity Card */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "24px",
              padding: "24px",
              position: "relative",
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
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#1a1a1a",
                    marginBottom: "4px",
                  }}
                >
                  Activity
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#999",
                    marginBottom: "12px",
                  }}
                >
                  Worked this week
                </div>
                <div
                  style={{
                    fontSize: "36px",
                    fontWeight: "300",
                    color: "#1a1a1a",
                  }}
                >
                  186<span style={{ fontSize: "20px", color: "#999" }}>h</span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                }}
              >
                <button
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    backgroundColor: "#f5f5f7",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  ⚡
                </button>
                <button
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    backgroundColor: "#f5f5f7",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  ✏️
                </button>
              </div>
            </div>

            {/* Bar Chart */}
            <div
              style={{
                height: "180px",
                display: "flex",
                alignItems: "flex-end",
                gap: "16px",
                paddingTop: "40px",
                position: "relative",
              }}
            >
              {[
                { day: "Mon", height: 30 },
                { day: "Tue", height: 40 },
                { day: "Wed", height: 35 },
                { day: "Thu", height: 45 },
                { day: "Fri", height: 95, highlight: true },
                { day: "Sat", height: 25 },
                { day: "Sun", height: 20 },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: `${item.height}%`,
                      backgroundColor: item.highlight ? "#f4e96d" : "#f0f0f0",
                      borderRadius: "8px",
                      position: "relative",
                    }}
                  >
                    {item.highlight && (
                      <div
                        style={{
                          position: "absolute",
                          top: "-30px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          backgroundColor: "#1a1a1a",
                          color: "#fff",
                          padding: "4px 10px",
                          borderRadius: "8px",
                          fontSize: "11px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        +6.30h
                      </div>
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#999",
                    }}
                  >
                    {item.day}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Total Spent Card */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "24px",
              padding: "24px",
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
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#1a1a1a",
                    marginBottom: "4px",
                  }}
                >
                  Total Spent
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#999",
                    marginBottom: "12px",
                  }}
                >
                  Spend this week
                </div>
                <div
                  style={{
                    fontSize: "36px",
                    fontWeight: "300",
                    color: "#1a1a1a",
                  }}
                >
                  $820
                  <span style={{ fontSize: "20px", color: "#999" }}>.65</span>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#4ade80",
                    marginTop: "4px",
                  }}
                >
                  ↑ $635.00
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                }}
              >
                <button
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    backgroundColor: "#f5f5f7",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  ⚡
                </button>
                <button
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    backgroundColor: "#f5f5f7",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  ✏️
                </button>
              </div>
            </div>

            {/* Line Chart with Points */}
            <div
              style={{
                height: "140px",
                position: "relative",
                marginTop: "30px",
              }}
            >
              {/* Y-axis labels */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  fontSize: "11px",
                  color: "#999",
                }}
              >
                <div>3D Wallets</div>
                <div>2D Assets</div>
              </div>

              {/* Chart Area */}
              <div
                style={{
                  marginLeft: "60px",
                  height: "100%",
                  position: "relative",
                }}
              >
                <svg
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {/* Grid lines */}
                  <line
                    x1="0"
                    y1="0"
                    x2="100%"
                    y2="0"
                    stroke="#f0f0f0"
                    strokeWidth="1"
                  />
                  <line
                    x1="0"
                    y1="70"
                    x2="100%"
                    y2="70"
                    stroke="#f0f0f0"
                    strokeWidth="1"
                  />
                  <line
                    x1="0"
                    y1="140"
                    x2="100%"
                    y2="140"
                    stroke="#f0f0f0"
                    strokeWidth="1"
                  />

                  {/* Line */}
                  <polyline
                    points="0,100 60,80 120,90 180,70 240,75 300,60 360,65 420,50"
                    fill="none"
                    stroke="#1a1a1a"
                    strokeWidth="2"
                  />

                  {/* Points */}
                  <circle
                    cx="60"
                    cy="80"
                    r="4"
                    fill="#fff"
                    stroke="#1a1a1a"
                    strokeWidth="2"
                  />
                  <circle
                    cx="180"
                    cy="70"
                    r="4"
                    fill="#fff"
                    stroke="#1a1a1a"
                    strokeWidth="2"
                  />
                  <circle
                    cx="300"
                    cy="60"
                    r="4"
                    fill="#fff"
                    stroke="#1a1a1a"
                    strokeWidth="2"
                  />
                  <circle
                    cx="420"
                    cy="50"
                    r="4"
                    fill="#fff"
                    stroke="#1a1a1a"
                    strokeWidth="2"
                  />

                  {/* Highlight bubble */}
                  <rect
                    x="220"
                    y="30"
                    width="60"
                    height="24"
                    rx="12"
                    fill="#f4e96d"
                  />
                  <text
                    x="250"
                    y="46"
                    textAnchor="middle"
                    fontSize="11"
                    fill="#1a1a1a"
                    fontWeight="500"
                  >
                    +$80.65
                  </text>
                </svg>

                {/* X-axis labels */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "8px",
                    fontSize: "11px",
                    color: "#999",
                  }}
                >
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Virtual Cards */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "24px",
              padding: "24px",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#1a1a1a",
                }}
              >
                Virtual cards
              </span>
              <button
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  backgroundColor: "#f5f5f7",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                ⚙️
              </button>
            </div>

            {/* Balance */}
            <div style={{ marginBottom: "20px" }}>
              <div
                style={{
                  fontSize: "12px",
                  color: "#999",
                  marginBottom: "4px",
                }}
              >
                Total Balance
              </div>
              <div
                style={{
                  fontSize: "32px",
                  fontWeight: "300",
                  color: "#1a1a1a",
                }}
              >
                $6.010
                <span style={{ fontSize: "18px", color: "#999" }}>.29</span>
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "#999",
                  marginTop: "2px",
                }}
              >
                ↑ $354.00
              </div>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                marginBottom: "24px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#999",
                    marginBottom: "4px",
                  }}
                >
                  Dollar
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#1a1a1a",
                  }}
                >
                  72%
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#999",
                    marginBottom: "4px",
                  }}
                >
                  Rumber
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#1a1a1a",
                  }}
                >
                  28%
                </div>
              </div>
            </div>

            {/* Credit Card */}
            <div
              style={{
                background: "linear-gradient(135deg, #c8e6dc 0%, #d4eee5 100%)",
                borderRadius: "20px",
                padding: "20px",
                position: "relative",
                height: "180px",
                display: "flex",
                flexDirection: "column",
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
                <div></div>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    fontStyle: "italic",
                    color: "#1a1a1a",
                  }}
                >
                  VISA
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: "28px",
                    fontWeight: "300",
                    color: "#1a1a1a",
                    marginBottom: "16px",
                  }}
                >
                  $390<span style={{ fontSize: "18px" }}>.00</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#666",
                    }}
                  >
                    •••• 6862
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#666",
                    }}
                  >
                    09 / 28
                  </div>
                </div>
              </div>

              <button
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                ✏️
              </button>
            </div>
          </div>

          {/* Contract Type */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "24px",
              padding: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#1a1a1a",
                }}
              >
                Contract Type
              </span>
              <button
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  backgroundColor: "#f5f5f7",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                ✏️
              </button>
            </div>

            {/* Pie Chart */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "24px",
                position: "relative",
                height: "140px",
              }}
            >
              <svg width="140" height="140" viewBox="0 0 140 140">
                {/* Background circle */}
                <circle
                  cx="70"
                  cy="70"
                  r="60"
                  fill="none"
                  stroke="#f0f0f0"
                  strokeWidth="20"
                />

                {/* Main segment - 86% */}
                <circle
                  cx="70"
                  cy="70"
                  r="60"
                  fill="none"
                  stroke="#a8d5cd"
                  strokeWidth="20"
                  strokeDasharray="324 377"
                  strokeDashoffset="94"
                  transform="rotate(-90 70 70)"
                />

                {/* Small segment - 4% */}
                <circle
                  cx="70"
                  cy="70"
                  r="60"
                  fill="none"
                  stroke="#7ec4b8"
                  strokeWidth="20"
                  strokeDasharray="15 377"
                  strokeDashoffset="-230"
                  transform="rotate(-90 70 70)"
                />

                {/* Center text */}
                <text
                  x="70"
                  y="75"
                  textAnchor="middle"
                  fontSize="32"
                  fontWeight="500"
                  fill="#1a1a1a"
                >
                  86%
                </text>
              </svg>

              {/* Legend */}
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "0",
                  fontSize: "11px",
                  color: "#999",
                }}
              >
                Learn more →
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "0",
                  fontSize: "11px",
                  color: "#999",
                }}
              >
                4%
              </div>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "12px",
              }}
            >
              <div style={{ flex: 1, textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "500",
                    color: "#1a1a1a",
                    marginBottom: "4px",
                  }}
                >
                  140
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#999",
                  }}
                >
                  Milestone
                </div>
              </div>
              <div style={{ flex: 1, textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "500",
                    color: "#1a1a1a",
                    marginBottom: "4px",
                  }}
                >
                  48
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#999",
                  }}
                >
                  Bonuses
                </div>
              </div>
              <div style={{ flex: 1, textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "500",
                    color: "#1a1a1a",
                    marginBottom: "4px",
                  }}
                >
                  16
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#999",
                  }}
                >
                  Hourly
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
