"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import {
  m,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { LanguageDropdown } from "@/components/ui/LanguageDropdown";
import {
  Settings,
  Bell,
  ChevronDown,
  Key,
  MapPin,
  BarChart3,
  Link as LinkIcon,
  Search,
  LayoutDashboard,
  CreditCard,
  LogOut,
  Users,
  BookOpen,
  FileText,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- Navigation Definitions ---

const SEO_TOOLS = [
  {
    title: "Keyword Research",
    description: "Exact search volumes, difficulty & ideas.",
    href: "/dashboard/keywords",
    icon: Key,
  },
  {
    title: "SERP Analysis",
    description: "Localized SERP results & features.",
    href: "/dashboard/serp",
    icon: MapPin,
  },
  {
    title: "Rank Tracking",
    description: "Daily rankings & city-level data.",
    href: "/dashboard/rank-tracking",
    icon: BarChart3,
  },
  {
    title: "Backlink Analysis",
    description: "Link opportunities & profile tracking.",
    href: "/dashboard/backlinks",
    icon: LinkIcon,
  },
  {
    title: "Site Explorer",
    description: "SEO metrics overview of any website.",
    href: "/dashboard/site-explorer",
    icon: Search,
  },
  {
    title: "Technical Audit",
    description: "Crawl & fix site-breaking issues.",
    href: "/dashboard/audit",
    icon: Layers,
  },
  {
    title: "Content Editor",
    description: "AI-driven content optimization.",
    href: "/dashboard/content",
    icon: FileText,
  },
];

const MINI_TOOLS = [
  { label: "SERP Simulator", href: "#", isHot: true },
  { label: "Volatility Checker", href: "#" },
  { label: "Content Optimizer", href: "#", isNew: true },
  { label: "Browser Extension", href: "#" },
];

const PROFILE_MENU_ITEMS = [
  { label: "Your Plan", href: "/dashboard/plan", icon: CreditCard },
  { label: "Billing", href: "/dashboard/billing", icon: CreditCard },
  { label: "Invoices", href: "/dashboard/invoices", icon: CreditCard },
  { label: "Team", href: "/dashboard/team", icon: Users },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function DashboardNavbar2() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hover State for Mega Menu
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setHoveredNav(null); // Close menu on scroll
    } else {
      setHidden(false);
    }
  });

  return (
    <m.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-6 left-0 w-full flex justify-center z-50 pointer-events-none px-4"
    >
      <div className="w-full md:max-w-[87%] flex items-center justify-between gap-2 pointer-events-auto relative">
        {/* --- Main Navbar Section --- */}
        <m.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 flex-1 h-14 pr-2 backdrop-blur-md bg-white/80 rounded-2xl shadow-lg shadow-black/[0.03] border border-zinc-200 flex items-center justify-between"
        >
          {/* Brand */}
          <Link
            href="/dashboard"
            className="flex items-center group shrink-0 pl-1"
          >
            <Image
              src="/hrseo-logo.png"
              alt="HRSEO"
              width={120}
              height={40}
              className="h-9 w-auto object-contain group-hover:opacity-80 transition-opacity"
              priority
            />
            <span className="font-bold text-xl md:text-2xl tracking-tighter group-hover:opacity-80 transition-opacity text-black ml-1">
              HRSEO
            </span>
          </Link>

          {/* Center Links Container (Desktop) */}
          <div className="flex items-center gap-1 md:bg-zinc-100/50 p-1 md:pr-2 rounded-full relative">
            <nav
              className="hidden xl:flex items-center"
              onMouseLeave={() => setHoveredNav(null)}
            >
              {/* 1. Dashboard Link */}
              <Link
                href="/dashboard"
                className="px-4 py-1.5 text-sm font-medium text-zinc-500 hover:text-black hover:bg-white rounded-full transition-all duration-200 flex items-center gap-2"
              >
                Dashboard
              </Link>

              {/* 2. SEO Tools (MEGA MENU TRIGGER) */}
              <div
                className="relative"
                onMouseEnter={() => setHoveredNav("seo_tools")}
              >
                <button
                  className={cn(
                    "px-4 py-1.5 text-sm font-medium text-zinc-500 hover:text-black hover:bg-white rounded-full transition-all duration-200 flex items-center gap-1 outline-none",
                    hoveredNav === "seo_tools" && "text-black bg-white",
                  )}
                >
                  SEO Tools
                  <ChevronDown
                    size={14}
                    className={cn(
                      "transition-transform duration-200",
                      hoveredNav === "seo_tools" ? "rotate-180" : "",
                    )}
                  />
                </button>

                {/* THE MEGA MENU */}
                <AnimatePresence>
                  {hoveredNav === "seo_tools" && (
                    <m.div
                      initial={{ opacity: 0, y: 15, x: "-50%" }}
                      animate={{ opacity: 1, y: 0, x: "-50%" }}
                      exit={{ opacity: 0, y: 15, x: "-50%" }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 mt-4 w-[850px] p-0 z-50 origin-top"
                    >
                      {/* Mega Menu Container: Plain White, No Blur, Shadow-2xl */}
                      <div className="bg-white rounded-2xl border border-zinc-200 shadow-2xl overflow-hidden flex text-left">
                        {/* Left: Main Tools */}
                        <div className="flex-1 p-8">
                          {/* Removed Header "HRSEO Package" */}
                          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                            {SEO_TOOLS.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                onClick={() => setHoveredNav(null)}
                                className="group flex items-start gap-4"
                              >
                                <div className="w-10 h-10 rounded-lg bg-[#FFF7ED] text-[#F15A29] flex items-center justify-center shrink-0 group-hover:bg-[#F15A29] group-hover:text-white transition-colors border border-[#F15A29]/10">
                                  {item.icon && <item.icon size={20} />}
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-bold text-zinc-800 text-sm group-hover:text-[#F15A29] transition-colors">
                                      {item.title}
                                    </span>
                                  </div>
                                  <p className="text-xs text-zinc-500 mt-1 leading-relaxed max-w-[200px]">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Middle Separator */}
                        <div className="w-px bg-zinc-100 my-4" />

                        {/* Right: Quick Tools */}
                        <div className="w-[280px] bg-zinc-50/50 p-8 flex flex-col">
                          <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-6">
                            Free Mini Tools
                          </h3>
                          <div className="flex flex-col gap-3">
                            {MINI_TOOLS.map((mini) => (
                              <Link
                                href={mini.href}
                                key={mini.label}
                                className="flex items-center gap-2 group text-sm font-medium text-zinc-600 hover:text-[#F15A29] transition-colors"
                              >
                                {mini.label}
                                {mini.isHot && (
                                  <span className="bg-zinc-600 text-white text-[9px] px-1.5 py-0.5 rounded font-bold">
                                    TOP
                                  </span>
                                )}
                                {mini.isNew && (
                                  <span className="bg-zinc-500 text-white text-[9px] px-1.5 py-0.5 rounded font-bold">
                                    NEW
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>

                          {/* Promo Image */}
                          <div className="mt-auto pt-6 flex justify-end">
                            <Image
                              src="/seo-megamenu.png"
                              alt="SEO Features"
                              width={240}
                              height={120}
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                        </div>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 3. Resources Link */}
              <Link
                href="/dashboard/resources"
                className="px-4 py-1.5 text-sm font-medium text-zinc-500 hover:text-black hover:bg-white rounded-full transition-all duration-200 flex items-center gap-2"
              >
                Resources
              </Link>

              {/* 4. Academy Link */}
              <Link
                href="/dashboard/academy"
                className="px-4 py-1.5 text-sm font-medium text-zinc-500 hover:text-black hover:bg-white rounded-full transition-all duration-200 flex items-center gap-2"
              >
                Academy
              </Link>

              {/* 5. Community Link */}
              <Link
                href="/dashboard/community"
                className="px-4 py-1.5 text-sm font-medium text-zinc-500 hover:text-black hover:bg-white rounded-full transition-all duration-200 flex items-center gap-2"
              >
                Community
              </Link>
            </nav>

            {/* Icons Area (Language, Settings, Bell) */}
            <div className="flex items-center ml-2 border-l border-zinc-200 pl-2 gap-1">
              {/* Language */}
              <div className="hidden md:block">
                <LanguageDropdown variant="navbar" />
              </div>
              {/* Notification */}
              <button className="p-1 md:p-2 rounded-full text-zinc-500 hover:text-[#F15A29] hover:bg-white transition-colors relative">
                <Bell className="w-6 h-6 md:w-5 md:h-5" strokeWidth={2} />
                <span className="absolute top-2 right-1.5 w-2 h-2 bg-[#F15A29] rounded-full border-2 border-white"></span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-zinc-600 hover:text-black transition-colors"
              aria-label="Menu"
            >
              <div className="relative w-6 h-2.5 flex flex-col justify-between items-center group">
                <span
                  className={cn(
                    "w-6 h-0.5 bg-zinc-600 rounded-full transition-all",
                    mobileMenuOpen && "rotate-45 translate-y-1",
                  )}
                />
                <span
                  className={cn(
                    "w-6 h-0.5 bg-zinc-600 rounded-full transition-all",
                    mobileMenuOpen && "-rotate-45 -translate-y-1",
                  )}
                />
              </div>
            </button>
          </div>
        </m.div>

        {/* --- User Profile Section (Popping Out) --- */}
        <div className="relative z-30 hidden lg:block">
          <m.div
            className="h-14 flex items-center"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              x: { delay: 0.5, duration: 0.8, type: "spring", bounce: 0.25 },
              opacity: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
            }}
          >
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              onBlur={() => setTimeout(() => setIsProfileOpen(false), 200)}
              className="bg-white rounded-full border border-zinc-200/50 p-1.5 flex items-center gap-3 cursor-pointer group hover:bg-zinc-50 transition-colors pr-4 outline-none"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100&q=80"
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div className="text-left">
                <p className="font-bold text-zinc-800 text-sm leading-none group-hover:text-black transition-colors">
                  Orio Studio
                </p>
                <p className="text-zinc-500 text-[10px] mt-0.5 font-medium uppercase tracking-wide">
                  Pro Plan
                </p>
              </div>
              <ChevronDown
                size={14}
                className="text-zinc-400 ml-1 group-hover:text-black transition-colors"
              />
            </button>
          </m.div>

          {/* User Dropdown Menu */}
          <AnimatePresence>
            {isProfileOpen && (
              <m.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.1 }}
                className="absolute top-full right-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-2xl border border-zinc-200 shadow-xl p-2 flex flex-col gap-1 overflow-hidden pointer-events-auto"
              >
                {PROFILE_MENU_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-xl transition-colors"
                  >
                    <item.icon size={16} className="text-zinc-400" />
                    {item.label}
                  </Link>
                ))}
                <div className="h-px bg-zinc-100 my-1" />
                <button className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-xl transition-colors w-full text-left">
                  <LogOut size={16} />
                  Log Out
                </button>
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <m.div
        initial={false}
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={{
          open: {
            height: "auto",
            opacity: 1,
            marginTop: "1rem",
            display: "block",
          },
          closed: {
            height: 0,
            opacity: 0,
            marginTop: 0,
            transitionEnd: { display: "none" },
          },
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-full left-0 w-full px-4 overflow-hidden pointer-events-auto xl:hidden z-40"
      >
        <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-zinc-200 shadow-xl p-4 flex flex-col gap-2 mx-4 mt-2">
          {/* Mobile Main Nav */}
          <div>
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-4 py-3 text-lg font-medium text-zinc-600 hover:bg-zinc-50 rounded-xl"
            >
              <LayoutDashboard size={20} /> Dashboard
            </Link>
          </div>
          {/* Tools Section */}
          <div>
            <div className="px-4 py-2 text-xs font-bold text-zinc-400 uppercase tracking-wider">
              SEO Tools
            </div>
            {SEO_TOOLS.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className="flex items-center gap-3 px-4 py-3 text-lg font-medium text-zinc-600 hover:text-[#F15A29] hover:bg-[#F15A29]/5 rounded-xl transition-all"
              >
                {tool.icon && <tool.icon size={20} />}
                {tool.title}
              </Link>
            ))}
          </div>

          <div className="h-px bg-zinc-100 my-2" />

          {/* Mobile Profile View */}
          <div className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl mt-2 mb-2">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100&q=80"
              alt="User"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-zinc-800 text-sm">Orio Studio</p>
              <Link
                href="/dashboard/settings"
                className="text-zinc-500 text-xs hover:text-[#F15A29]"
              >
                Settings
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between px-2">
            <span className="text-zinc-500 font-medium">Language</span>
            <LanguageDropdown variant="footer" align="right" />
          </div>
        </div>
      </m.div>
    </m.header>
  );
}
