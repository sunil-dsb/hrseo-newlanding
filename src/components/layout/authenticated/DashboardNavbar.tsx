"use client";

import { Bell, Settings, User } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { LanguageDropdown } from "@/components/ui/LanguageDropdown";

export const DashboardNavbar = () => {
  const t = useTranslations("Dashboard.nav");
  const navItems = [
    { name: t("dashboard"), active: true },
    { name: t("people"), active: false },
    { name: t("hiring"), active: false },
    { name: t("devices"), active: false },
    { name: t("apps"), active: false },
    { name: t("salary"), active: false },
    { name: t("calendar"), active: false },
    { name: t("reviews"), active: false },
  ];

  return (
    <nav className="flex items-center justify-between px-8 py-5 w-full relative z-20">
      <div className="flex items-center gap-12">
        {/* Logo - Frosted */}
        <div className="bg-white backdrop-blur-xl px-6 py-2 rounded-full border border-white/20 shadow-2xl">
          <h1 className="text-xl font-medium tracking-tight text-brand-primary">
            Crextio
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-1.5">
        {/* Navigation Pills - Frosted */}
        <div className="hidden lg:flex items-center bg-white backdrop-blur-xl p-1 rounded-full border border-white/20 shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.name}
              className={cn(
                "px-5 py-3 rounded-full text-[13px] font-medium duration-300",
                item.active
                  ? "bg-brand-dark text-white shadow-md"
                  : "text-neutral-500 hover:text-brand-primary hover:bg-white dark:hover:bg-white/10",
              )}
            >
              {item.name}
            </button>
          ))}
          <hr className="h-5 w-px bg-neutral-200" />
          <LanguageDropdown variant="navbar" align="right" />
        </div>

        {/* <button className="flex items-center justify-center rounded-full bg-brand-primary backdrop-blur-xl hover:bg-white/50 dark:hover:bg-white/10 transition-colors relative text-white p-3 shadow-2xl">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2.5 right-3 w-1.5 h-1.5 bg-[#EF4444] rounded-full ring-1 ring-white" />
        </button>
        <button className="flex items-center justify-center rounded-full bg-brand-primary backdrop-blur-xl hover:bg-white/50 dark:hover:bg-white/10 transition-colors text-white p-3 shadow-2xl">
          <User className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-1 bg-brand-primary rounded-full shadow-2xl">
          <button className="flex items-center justify-center rounded-full bg-brand-primary backdrop-blur-xl hover:bg-white/50 dark:hover:bg-white/10 transition-colors relative text-white p-3">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2.5 right-3 w-1.5 h-1.5 bg-[#EF4444] rounded-full ring-1 ring-white" />
          </button>
          <button className="flex items-center justify-center rounded-full bg-brand-primary backdrop-blur-xl hover:bg-white/50 dark:hover:bg-white/10 transition-colors text-white p-3">
            <User className="w-5 h-5" />
          </button>
        </div> */}

        <div className="flex items-center gap-1 bg-white rounded-full p-1 border border-dashed border-brand-primary/20 shadow-2xl">
          <button className="flex items-center justify-center rounded-full bg-brand-primary backdrop-blur-xl hover:bg-white/50 dark:hover:bg-white/10 transition-colors relative text-white p-3">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2.5 right-3 w-1.5 h-1.5 bg-[#EF4444] rounded-full ring-1 ring-white" />
          </button>
          <button className="flex items-center justify-center rounded-full bg-brand-primary backdrop-blur-xl hover:bg-white/50 dark:hover:bg-white/10 transition-colors text-white p-3">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};
