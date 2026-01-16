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
        <div className="bg-white/40 backdrop-blur-xl px-6 py-2 rounded-full border border-white/20 shadow-sm">
          <h1 className="text-xl font-medium tracking-tight text-brand-primary">
            Crextio
          </h1>
        </div>

        {/* Navigation Pills - Frosted */}
        <div className="hidden lg:flex items-center bg-white/40 backdrop-blur-xl px-1.5 py-1.5 rounded-full shadow-sm border border-white/20">
          {navItems.map((item) => (
            <button
              key={item.name}
              className={cn(
                "px-5 py-2 rounded-full text-[13px] font-medium transition-all duration-300",
                item.active
                  ? "bg-brand-rich text-white shadow-md transform scale-100"
                  : "text-neutral-500 hover:text-brand-primary hover:bg-white/40 dark:hover:bg-white/10"
              )}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* <ThemeToggle /> */}
        <LanguageDropdown variant="dashboard" align="right" />

        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/40 backdrop-blur-xl border border-white/20 text-sm font-medium hover:bg-white/50 dark:hover:bg-white/10 transition-colors shadow-sm text-brand-primary">
          <Settings className="w-4 h-4" />
          {t("settings")}
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/40 backdrop-blur-xl border border-white/20 hover:bg-white/50 dark:hover:bg-white/10 transition-colors shadow-sm relative text-brand-primary">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2.5 right-3 w-1.5 h-1.5 bg-[#EF4444] rounded-full ring-1 ring-white" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/40 backdrop-blur-xl border border-white/20 hover:bg-white/50 dark:hover:bg-white/10 transition-colors shadow-sm text-brand-primary">
          <User className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};
