'use client';

import { m } from 'framer-motion';
import React from 'react';
import { useIsMobile } from '@/hooks/use-is-mobile';

export function FadeIn({
    children,
    duration = 0.5,
    delay = 0,
    className,
}: {
    children: React.ReactNode;
    duration?: number;
    delay?: number;
    className?: string;
}) {
    const isMobile = useIsMobile();

    return (
        <m.div
            initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
            animate={isMobile ? { opacity: 1 } : undefined}
            whileInView={isMobile ? undefined : { opacity: 1 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration, delay, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </m.div>
    );
}

export function BlurFade({
    children,
    delay = 0,
    className,
    yOffset = 6,
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    yOffset?: number;
}) {
    const isMobile = useIsMobile();

    return (
        <m.div
            initial={isMobile ? { opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 } : { opacity: 0, scale: 0.98, filter: 'blur(4px)', y: yOffset }}
            animate={isMobile ? { opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 } : undefined}
            whileInView={isMobile ? undefined : { opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.25, 0.4, 0.25, 1],
            }}
            className={`${className} will-change-[transform,opacity,filter]`}
        >
            {children}
        </m.div>
    );
}

export const TextHighlight = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const isMobile = useIsMobile();

    return (
        <span className={`relative inline-block px-1 ${className}`}>
            <m.span
                initial={isMobile ? { scaleX: 1 } : { scaleX: 0 }}
                animate={isMobile ? { scaleX: 1 } : undefined}
                whileInView={isMobile ? undefined : { scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute inset-0 bg-[#F15A29] -skew-y-1 origin-left rotate-2 -z-10"
            />
            <span className="relative z-10">{children}</span>
        </span>
    );
};
