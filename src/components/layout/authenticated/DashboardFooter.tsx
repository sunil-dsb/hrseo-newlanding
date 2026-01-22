"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { LanguageDropdown } from "@/components/ui/LanguageDropdown";
import { FooterNav } from "../unauthenticated/footer/FooterNav";

export const DashboardFooter = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="w-full border-t border-zinc-200 bg-white/80 backdrop-blur-md pt-16 pb-8 relative z-20 mt-20">
      {/* Main Navigation Section */}
      <FooterNav />

      {/* Bottom Section */}
      <div className="mt-16 border-t border-zinc-100">
        <div className="mx-auto max-w-5xl 2xl:max-w-7xl px-6 pt-8">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            {/* Copyright & Links */}
            <div className="flex flex-col items-center gap-4 md:items-start lg:flex-row lg:gap-8">
              <p className="text-sm text-zinc-500">{t("copyright")}</p>
              <div className="flex gap-6 text-sm font-medium text-zinc-500">
                <Link
                  href="/privacy"
                  className="hover:text-brand-primary transition-colors"
                >
                  {t("privacy") || "Privacy"}
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-brand-primary transition-colors"
                >
                  {t("terms") || "Terms"}
                </Link>
              </div>
            </div>

            {/* Language & Status */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-100">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-medium text-zinc-600 uppercase tracking-wide">
                  All Systems Operational
                </span>
              </div>
              <LanguageDropdown variant="footer" align="right" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
