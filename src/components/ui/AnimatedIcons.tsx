'use client';

import { m, Variants } from 'framer-motion';

// Common transition for smooth animations
const transition = { duration: 0.5, ease: "easeInOut" };

// CPU Icon - Pulse/Activity Animation
export const AnimatedCpu = () => {
    const variants: Variants = {
        normal: { scale: 1, rotate: 0 },
        hover: {
            scale: 1.1,
            rotate: [0, -5, 5, 0],
            transition: {
                duration: 0.8,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse" as const
            }
        }
    };

    return (
        <m.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={variants}
        >
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
            <rect x="9" y="9" width="6" height="6"></rect>
            <line x1="9" y1="1" x2="9" y2="4"></line>
            <line x1="15" y1="1" x2="15" y2="4"></line>
            <line x1="9" y1="20" x2="9" y2="23"></line>
            <line x1="15" y1="20" x2="15" y2="23"></line>
            <line x1="20" y1="9" x2="23" y2="9"></line>
            <line x1="20" y1="14" x2="23" y2="14"></line>
            <line x1="1" y1="9" x2="4" y2="9"></line>
            <line x1="1" y1="14" x2="4" y2="14"></line>
        </m.svg>
    );
};

// Zap Icon - Electric/Fill Animation
export const AnimatedZap = () => {
    const variants: Variants = {
        normal: { fill: "rgba(241, 90, 41, 0)", scale: 1 },
        hover: {
            fill: "rgba(241, 90, 41, 1)",
            scale: 1.1,
            transition: { duration: 0.3 }
        }
    };

    return (
        <m.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={variants}
        >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </m.svg>
    );
};

// Bar Chart Icon - Growth Animation
export const AnimatedBarChart = () => {
    return (
        <m.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <m.line x1="18" y1="20" x2="18" y2="10" variants={{ hover: { y2: 4, transition: { duration: 0.4, ease: "easeInOut" } } }} />
            <m.line x1="12" y1="20" x2="12" y2="4" variants={{ hover: { y2: 10, transition: { duration: 0.4, delay: 0.1, ease: "easeInOut" } } }} />
            <m.line x1="6" y1="20" x2="6" y2="14" variants={{ hover: { y2: 8, transition: { duration: 0.4, delay: 0.2, ease: "easeInOut" } } }} />
        </m.svg>
    );
};

// Search Icon - Magnify/Check Animation
export const AnimatedSearch = () => {
    const variants: Variants = {
        normal: { scale: 1, x: 0, y: 0 },
        hover: {
            scale: 1.1,
            x: [0, 2, -2, 0],
            y: [0, -2, 2, 0],
            transition: { duration: 0.5, ease: "easeInOut" }
        }
    };

    return (
        <m.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={variants}
        >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </m.svg>
    );
};

// Globe Icon - Spin/Rotate Animation
export const AnimatedGlobe = () => {
    const variants: Variants = {
        normal: { rotate: 0 },
        hover: { rotate: 180, transition: { duration: 0.8, ease: "circOut" } }
    };

    return (
        <m.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={variants}
        >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </m.svg>
    );
};

// Shield Icon - Pulse/Protection Animation
export const AnimatedShield = () => {
    const variants: Variants = {
        normal: { scale: 1 },
        hover: {
            scale: 1.1,
            strokeWidth: 2.5,
            transition: { repeat: 2, repeatType: "reverse", duration: 0.3 }
        }
    };

    return (
        <m.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={variants}
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </m.svg>
    );
};
