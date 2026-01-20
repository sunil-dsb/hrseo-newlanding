'use client';

import { m } from 'framer-motion';
import { BotMessageSquareIcon } from '@/components/ui/bot-message-square';
import { ZapIcon } from '@/components/ui/zap';
import { SearchIcon } from '@/components/ui/search';
import { ChartBarIncreasingIcon } from '@/components/ui/chart-bar-increasing';
import { EarthIcon } from '@/components/ui/earth';
import { ShieldCheckIcon } from '@/components/ui/shield-check';
import { Marquee } from '@/components/ui/Marquee';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/use-is-mobile';

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
    const isMobile = useIsMobile();

    return (
        <section className="py-24 px-4 font-sans">
            <div className="max-w-5xl 2xl:max-w-7xl container-4k mx-auto">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 md:px-6">
                    <div className="max-w-xl text-left min-[2560px]:max-w-2xl">
                        <h2 className="text-3xl md:text-2xl min-[2560px]:text-4xl font-bold tracking-tight text-black mb-2">
                            Powerful tools for modern growth.
                        </h2>
                        <p className="text-lg md:text-base min-[2560px]:text-xl text-zinc-500 font-light">
                            Everything you need to dominate search, all in one platform.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <p className="text-zinc-500 font-light text-right min-[2560px]:text-lg">
                            Trusted by partners like :
                        </p>
                        <div className="w-full max-w-[25rem] overflow-hidden">
                            <Marquee pauseOnHover className="[--duration:20s] [--gap:2rem]">
                                {PARTNERS.map((partner, i) => (
                                    <div key={i} className="relative h-6 w-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
                                        <Image
                                            src={partner.src}
                                            alt={partner.alt}
                                            fill
                                            className="object-contain"
                                            sizes="80px"
                                        />
                                    </div>
                                ))}
                            </Marquee>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 md:gap-x-2 list-none p-0 m-0">
                    {TOOLS.map((tool, i) => (
                        <m.li
                            key={tool.id}
                            initial={isMobile ? undefined : { opacity: 0, y: 20 }}
                            whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.1,
                                ease: "easeOut"
                            }}
                            whileHover={isMobile ? undefined : { y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
                            className="relative p-3 group disable-animation-mobile will-change-transform"
                        >
                            {/* Top Border & Dots */}
                            <div className="absolute top-0 left-0 right-0 h-[0.05rem] bg-black/6" aria-hidden="true" />
                            <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 bg-zinc-200 rounded-full" aria-hidden="true" />
                            <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-zinc-200 rounded-full" aria-hidden="true" />

                            {/* Bottom Border & Dots */}
                            <div className="absolute bottom-0 left-0 right-0 h-[0.05rem] bg-black/6" aria-hidden="true" />
                            <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 bg-zinc-300 rounded-full" aria-hidden="true" />
                            <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 bg-zinc-300 rounded-full" aria-hidden="true" />

                            {/* Inner Card */}
                            <div className="bg-white rounded-2xl p-0 h-full flex flex-col border border-zinc-100 overflow-hidden hover:shadow-lg hover:shadow-black/5 hover:border-zinc-200 transition-all duration-300">

                                {/* Card Content Top */}
                                <div className="p-8 pb-0 flex-1">
                                    {/* Header */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 min-[2560px]:w-16 min-[2560px]:h-16 rounded-lg bg-zinc-100 flex items-center justify-center text-[#F15A29] group-hover:scale-110 transition-transform duration-300 shrink-0" aria-hidden="true">
                                            <tool.icon className="w-6 h-6 min-[2560px]:w-8 min-[2560px]:h-8 flex items-center justify-center [&_svg]:w-full [&_svg]:h-full" />
                                        </div>
                                        <h3 className="text-xl min-[2560px]:text-2xl font-bold tracking-tight text-[#222]">
                                            {tool.title}
                                        </h3>
                                    </div>

                                    {/* Points */}
                                    <ul className="space-y-1 mb-8">
                                        {tool.points.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0" aria-hidden="true" />
                                                <span className="text-zinc-500 text-sm min-[2560px]:text-base font-light leading-relaxed">
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
                                            alt={`${tool.title} Interface`}
                                            fill
                                            className="object-contain object-bottom"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                </div>
                            </div>
                        </m.li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
