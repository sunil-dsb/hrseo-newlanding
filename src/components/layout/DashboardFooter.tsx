"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export const DashboardFooter = () => {
  const t = useTranslations("Dashboard.footer"); // Assuming there's a footer namespace or I'll use common one

  return (
    <footer className="px-8 py-6 w-full relative z-20">
      <div className="bg-white/40 backdrop-blur-xl px-8 py-6 rounded-[32px] border border-white/20 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-brand-primary">
            {t("copyright")}
          </span>
        </div>

        <div className="flex items-center gap-8">
          <a
            href="#"
            className="text-sm text-neutral-500 hover:text-brand-primary transition-colors"
          >
            {t("privacy")}
          </a>
          <a
            href="#"
            className="text-sm text-neutral-500 hover:text-brand-primary transition-colors"
          >
            {t("terms")}
          </a>
          <a
            href="#"
            className="text-sm text-neutral-500 hover:text-brand-primary transition-colors"
          >
            {t("help")}
          </a>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-[12px] font-medium text-neutral-500 uppercase tracking-wider">
            {t("status")}
          </span>
        </div>
      </div>
    </footer>
  );
};
