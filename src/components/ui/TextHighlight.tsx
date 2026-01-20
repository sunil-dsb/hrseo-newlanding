'use client';

import React from 'react';
import { m } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-is-mobile';

interface TextHighlightProps {
    children: React.ReactNode;
    color?: string;
    className?: string;
    delay?: number;
}

export const TextHighlight = ({
    children,
    color = "#fbb0408d",
    className,
    delay = 0.4
}: TextHighlightProps) => {
    const isMobile = useIsMobile();

    // Pure CSS on mobile - no Framer Motion overhead
    if (isMobile) {
        return (
            <span className={cn("relative inline-block", className)}>
                <span className="relative z-10">{children}</span>
                <span
                    className="absolute inset-0 -z-10 rotate-2 scale-95"
                    style={{ backgroundColor: color }}
                    aria-hidden="true"
                />
            </span>
        );
    }

    // Animated version for desktop
    return (
        <span className={cn("relative inline-block", className)}>
            <span className="relative z-10">{children}</span>
            <m.div
                className="absolute inset-0 -z-10 rotate-2 scale-105 will-change-transform"
                style={{ backgroundColor: color, transformOrigin: "left" }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: delay, ease: "circOut" }}
            />
        </span>
    );
};

export const HoverTextHighlight = ({
    children,
    color = "#fbb0408d",
    className,
}: Omit<TextHighlightProps, "delay">) => {
    return (
        <m.span
            className={cn("relative inline-block cursor-pointer", className)}
            initial="initial"
            whileHover="hover"
        >
            <span className="relative z-10">{children}</span>
            <span className="absolute inset-0 -z-10 bg-transparent" />
            <m.div
                className="absolute inset-0 -z-10 rotate-2 scale-105 origin-left"
                style={{ backgroundColor: color }}
                variants={{
                    initial: { scaleX: 0 },
                    hover: { scaleX: 1 }
                }}
                transition={{ duration: 0.3, ease: "circOut" }}
            />
        </m.span>
    );
};
