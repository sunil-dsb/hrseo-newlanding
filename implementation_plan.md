# SEO Dashboard - UX Analysis & Redesign Plan

## 1. The Core UX Decision: "Project-Centric" vs "Portfolio"

**Verdict:** The layout we are building (Bento Grid with detailed charts) is best suited for a **Single Project Dashboard**.

- **Why?** Aggregating data across multiple websites (e.g., "Total Traffic across 10 sites") is rarely useful as a primary view because sites vary wildly in performance.
- **The Flow:**
  1. User Logs in.
  2. User lands on "Project List" (Portfolio View) OR lands on "Dashboard" for their _primary_ project.
  3. We will build this page as the **Single Project Deep-Dive**.

**The Fix:**
We must add a **Project Switcher** (Dropdown) prominently at the top. This clarifies to the user: _"The data you see below belongs to [example.com]"_.

## 2. Updated Layout Structure (Single Project View)

### Top Bar: Context & Actions

- **Left**: "Welcome, [User]" + **[Project Dropdown: amazon.com v]**
- **Right**: Global Date Range Picker (Last 30 Days).

### The Grid Content (SEO Metrics)

**Row 1: The "Pulse" (Health & High-Level KPIs)**
_Immediate status check for the selected domain._

1.  **Site Health Score**: Circular Progress (0-100). (Red/Orange/Green).
    - _Metric:_ "92/100" (Healthy)
2.  **Organic Traffic Estimates**:
    - _Metric:_ "12.5K" (+12% vs last month)
3.  **Total Backlinks**:
    - _Metric:_ "1.2K" (Referring Domains)
4.  **Domain Authority/Rating**:
    - _Metric:_ "DR 75"

**Row 2: Performance Trends (The "Deep Dive")**
_Visualizing growth over time._

1.  **Main Chart (Traffic & Keywords)**:
    - _Combo Chart:_ Lines for "Organic Traffic" vs Bars for "New Keywords".
    - _Insight:_ "Traffic dipped on May 2nd (Google Core Update)."
2.  **Keyword Ranking Distribution**:
    - _Stacked Bar:_ Top 3 (Green), 4-10 (Lime), 11-100 (Yellow).
    - _Goal:_ See how many keywords are reaching page 1.

**Row 3: Actionable Intelligence (The "Work")**
_What should the user DO next?_

1.  **Top Movers (Winners/Losers)**: Keywords with biggest rank changes today.
2.  **Site Audit Issues**: "3 Critical Errors (404s)".
3.  **Competitor Watch**: Small sparkline comparing Your Traffic vs Competitor Traffic.

## 3. Implementation Steps

### Phase 1: Context & Navigation (Current Step)

- [ ] **Add Project Switcher**: specific UI component to switch between websites.
- [ ] **Add Date Range Picker**: Global control for the dashboard.

### Phase 2: Widget Development

- [ ] **`HealthWidget.tsx`**: A reusable gauge chart.
- [ ] **`TrafficTrendWidget.tsx`**: Flexible AreaChart.
- [ ] **`KeywordPositionWidget.tsx`**: Stacked bar chart for rankings.
