"use client";

import { FooterNav } from "@/components/layout/unauthenticated/footer/FooterNav";
import { FooterBrand } from "@/components/layout/unauthenticated/footer/FooterBrand";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-white pt-16 md:pt-24 relative overflow-hidden z-10 rounded-t-3xl">
      <FooterNav />
      <FooterBrand />
    </footer>
  );
}
