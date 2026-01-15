'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonSlideProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
    variant?: 'light' | 'dark';
}

export const ButtonSlide = ({
    children,
    icon,
    className,
    variant = 'light',
    as: Component = 'button',
    ...props
}: ButtonSlideProps & { as?: React.ElementType }) => {
    // Base styles
    const baseStyles = "relative inline-flex items-center justify-between w-full px-6 py-4 rounded-lg font-semibold overflow-hidden group cursor-pointer transition-all";

    // Variants
    const variants = {
        light: "bg-zinc-100 hover:bg-zinc-200 text-black",
        dark: "bg-[#111] hover:bg-black text-white shadow-xl shadow-black/5"
    };

    return (
        <Component
            className={cn(baseStyles, variants[variant], className)}
            {...props}
        >
            {/* Text Slider Container */}
            <div className="relative flex flex-col overflow-hidden h-6 md:h-7 flex-1 text-left">
                {/* Visible Content (Slides Up) */}
                <div className="flex items-center h-full transform transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
                    <span>{children}</span>
                </div>

                {/* Hidden Content (Slides detailed Up from bottom) */}
                <div className="absolute top-0 left-0 w-full flex items-center h-full transform translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0" aria-hidden="true">
                    <span>{children}</span>
                </div>
            </div>

            {/* Static Icon */}
            {icon && <div className="ml-3 shrink-0 relative z-10">{icon}</div>}
        </Component>
    );
};
