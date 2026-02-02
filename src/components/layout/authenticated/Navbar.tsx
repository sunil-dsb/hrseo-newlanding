"use client";

import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/routing";
import {
  Bell,
  User,
  Search,
  BarChart2,
  Layers,
  TrendingUp,
  Link as LinkIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { LanguageDropdown } from "@/components/ui/LanguageDropdown";

export const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: BarChart2 },
    { name: "Research", href: "/keyword-research", icon: Search },
    { name: "SERP", href: "/serp-analysis", icon: Layers },
    { name: "Tracking", href: "/rank-tracking", icon: TrendingUp },
    { name: "Backlinks", href: "/backlinks", icon: LinkIcon },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-slate-200/60 transition-all duration-300",
        isScrolled && "shadow-sm bg-white/90",
      )}
    >
      <div className="mx-auto px-4 h-14 flex items-center justify-between gap-4">
        {/* Left Side: Logo */}
        <div className="flex items-center gap-6">
          <Link href="/dashboard" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-linear-to-br from-brand-primary to-[#d64a1d] rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-orange-500/30 transition-all">
              K
            </div>
            <span className="text-slate-800 font-bold text-lg tracking-tight hidden md:block">
              Keyword<span className="text-brand-primary">Pro</span>
            </span>
          </Link>

          <div className="w-px h-6 bg-slate-200 hidden md:block"></div>

          {/* Center: Links (Left-aligned next to logo now for space efficiency) */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-2",
                    isActive
                      ? "bg-slate-100/80 text-brand-primary"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-50",
                  )}
                >
                  <Icon
                    size={16}
                    strokeWidth={isActive ? 2.5 : 2}
                    className={cn(
                      isActive ? "text-brand-primary" : "opacity-70",
                    )}
                  />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LanguageDropdown variant="navbar" align="right" />
          </div>

          <div className="w-px h-6 bg-slate-200 mx-1 hidden sm:block"></div>

          <button className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-all hover:text-brand-primary relative">
            <Bell size={20} className="stroke-[2px]" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
          </button>

          <button className="pl-1 flex items-center gap-2 rounded-full hover:bg-slate-50 transition-all p-1 pr-3 border border-transparent hover:border-slate-200">
            <div className="w-8 h-8 rounded-full bg-linear-to-tr from-slate-700 to-slate-600 flex items-center justify-center text-white font-bold text-xs ring-2 ring-white shadow-sm">
              JD
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};
