"use client";
import { m, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/routing";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
export interface SubMenuItem {
  title: string;
  description: string;
  href: string;
  isNew?: boolean;
}
interface MegaMenuProps {
  isOpen: boolean;
  items: SubMenuItem[];
  onClose: () => void;
  className?: string;
}
export function MegaMenu({ isOpen, items, onClose, className }: MegaMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={cn(
            "absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] p-2 z-50",
            className,
          )}
          onMouseLeave={onClose}
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-zinc-200 shadow-2xl p-4 grid grid-cols-2 gap-2">
            {items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex flex-col p-3 rounded-xl hover:bg-zinc-50 transition-colors"
                onClick={onClose}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-sm text-zinc-800 group-hover:text-[#F15A29] transition-colors">
                    {item.title}
                  </span>
                  {item.isNew && (
                    <span className="px-1.5 py-0.5 rounded-full bg-[#F15A29]/10 text-[#F15A29] text-[10px] font-bold border border-[#F15A29]/20">
                      NEW
                    </span>
                  )}
                </div>
                <span className="text-xs text-zinc-500 font-medium leading-relaxed line-clamp-2">
                  {item.description}
                </span>
              </Link>
            ))}
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
