'use client';

import React from 'react';
import { m } from 'framer-motion';
import { BotMessageSquareIcon } from '@/components/ui/bot-message-square';
import { ZapIcon } from '@/components/ui/zap';
import { SearchIcon } from '@/components/ui/search';
import { ChartBarIncreasingIcon } from '@/components/ui/chart-bar-increasing';
import { EarthIcon } from '@/components/ui/earth';
import { ShieldCheckIcon } from '@/components/ui/shield-check';
import { Marquee } from '@/components/ui/Marquee';
import Image from 'next/image';

const PARTNERS = [
    {
        name: "Capsule",
        src: "/assets/capsule-logo.svg",
        alt: "Capsule Logo"
    },
    {
        name: "Perplexity",
        src: "/assets/perplexity-logo.svg",
        alt: "Perplexity Logo"
    },
    {
        name: "Alternative Airlines",
        src: "/assets/alternative-airlines-logo.svg",
        alt: "Alternative Airlines Logo"
    },
    {
        name: "Heights",
        src: "/assets/heights-logo.svg",
        alt: "Heights Logo"
    },
    {
        name: "Learnerbly",
        src: "/assets/learnerbly-logo.svg",
        alt: "Learnerbly Logo"
    }
];

const TOOLS = [
    {
        id: "ai-visibility",
        icon: BotMessageSquareIcon,
        title: "AI Visibility",
        points: [
            "Analyze how LLMs feature your brand",
            "Track competitors' AI visibility",
            "Get AI tips to improve your strategy"
        ],
        image: "/assets/semrush-ai.svg"
    },
    {
        id: "content-gen",
        icon: ZapIcon,
        title: "Content Generator",
        points: [
            "Create SEO-ready content with AI",
            "Get high-ranking content ideas",
            "Score and optimize content in real time"
        ],
        image: "/assets/semrush-social.svg"
    },
    {
        id: "rank-track",
        icon: ChartBarIncreasingIcon,
        title: "Rank Tracking",
        points: [
            "Monitor keywords in real-time",
            "Track local & mobile rankings",
            "Visualize progress with instant reports"
        ],
        image: "/assets/semrush-seo.svg"
    },
    {
        id: "keyword-research",
        icon: SearchIcon,
        title: "Keyword Research",
        points: [
            "Find high-volume, low-competition keywords",
            "Analyze search intent instantly",
            "Discover endless content opportunities"
        ],
        image: "/assets/semrush-traffic.svg"
    },
    {
        id: "backlink-audit",
        icon: EarthIcon,
        title: "Backlink Analysis",
        points: [
            "Audit your entire link profile",
            "Spy on competitor backlinks",
            "Disavow toxic links easily"
        ],
        image: "/assets/semrush-pr.svg"
    },
    {
        id: "tech-health",
        icon: ShieldCheckIcon,
        title: "Technical Audit",
        points: [
            "Identify site-breaking errors",
            "Improve Core Web Vitals speed",
            "Get actionable fix recommendations"
        ],
        image: "/assets/semrush-seo.svg"
    }
];

export const ToolsGrid = () => {
    return (
        <section className="py-24 px-4 font-sans">
            <div className="max-w-5xl 2xl:max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
                    <div className="max-w-xl">
                        <h2 className="text-2xl font-bold tracking-tight text-black mb-2">
                            Powerful tools for modern growth.
                        </h2>
                        <p className="text-base text-zinc-500 font-light">
                            Everything you need to dominate search, all in one platform.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <p className="text-sm text-zinc-500 font-light  text-right lg:text-right">
                            Trusted by partners like :
                        </p>
                        <div className="w-full max-w-[400px] overflow-hidden mask-image-gradient">
                            <Marquee pauseOnHover className="[--duration:20s] [--gap:2rem]">
                                {PARTNERS.map((partner, i) => (
                                    <div key={i} className="relative h-6 w-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
                                        <Image
                                            src={partner.src}
                                            alt={partner.alt}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                ))}
                            </Marquee>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {TOOLS.map((tool, i) => (
                        <m.div
                            key={tool.id}
                            initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.6,
                                delay: i * 0.08,
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }}
                            whileHover={{ y: -6, transition: { duration: 0.3, type: "spring", stiffness: 300 } }}
                            className="relative p-3 group"
                        >
                            {/* Top Border & Dots */}
                            <div className="absolute top-0 left-0 right-0 h-[0.8px] bg-black/6" />
                            <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 bg-zinc-200 rounded-full" />
                            <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-zinc-200 rounded-full" />

                            {/* Bottom Border & Dots */}
                            <div className="absolute bottom-0 left-0 right-0 h-[0.8px] bg-black/6" />
                            <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 bg-zinc-300 rounded-full" />
                            <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 bg-zinc-300 rounded-full" />

                            {/* Inner Card */}
                            <div className="bg-white rounded-2xl p-0 h-full flex flex-col border border-zinc-100 overflow-hidden hover:shadow-lg hover:shadow-black/5 hover:border-zinc-200 transition-all duration-300">

                                {/* Card Content Top */}
                                <div className="p-8 pb-0 flex-1">
                                    {/* Header */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-lg bg-zinc-100 flex items-center justify-center text-[#F15A29] group-hover:scale-110 transition-transform duration-300">
                                            <tool.icon size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold tracking-tight text-[#222]">
                                            {tool.title}
                                        </h3>
                                    </div>

                                    {/* Points */}
                                    <ul className="space-y-1 mb-8">
                                        {tool.points.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0" />
                                                <span className="text-zinc-500 text-sm font-light leading-relaxed">
                                                    {point}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Visual Area (Bottom) - Image */}
                                <div className="relative h-48 w-full pb-4 px-2 overflow-hidden mt-auto flex items-end justify-center">
                                    <div className="w-full h-full relative">
                                        <Image
                                            src={tool.image}
                                            alt={tool.title}
                                            fill
                                            className="object-contain object-bottom"
                                        />
                                    </div>
                                </div>
                            </div>
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
