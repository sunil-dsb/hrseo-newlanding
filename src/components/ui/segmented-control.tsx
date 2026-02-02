"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { m, LayoutGroup } from "framer-motion";

interface SegmentedControlProps<T extends string> {
  options: { label: string; value: T }[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
  size?: "sm" | "xs";
}

export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  className,
  size = "xs",
}: SegmentedControlProps<T>) {
  return (
    <div
      className={cn(
        "bg-gray-50 p-1 rounded-full flex font-bold relative border border-gray-100",
        size === "xs" ? "text-[10px]" : "text-xs",
        className,
      )}
    >
      {options.map((option) => {
        const isActive = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={cn(
              "relative z-10 rounded-full transition-colors duration-300 flex-1 md:flex-none text-center",
              size === "xs" ? "px-3 py-1" : "px-4 py-1.5",
              isActive
                ? "text-brand-primary"
                : "text-gray-400 hover:text-gray-600",
            )}
          >
            {isActive && (
              <m.div
                layoutId={`segmented-bg-${options.map((o) => o.value).join("-")}`}
                className="absolute inset-0 bg-white rounded-full shadow-sm ring-1 ring-black/5 -z-10"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
