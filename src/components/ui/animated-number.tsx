"use client";

import React from "react";
import { m, useMotionValue, useTransform, animate } from "framer-motion";

export function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(
    count,
    (latest: number) => prefix + latest.toFixed(decimals) + suffix,
  );

  React.useEffect(() => {
    const controls = animate(count, value, { duration: 2 });
    return controls.stop;
  }, [count, value]);

  return <m.span>{rounded}</m.span>;
}
