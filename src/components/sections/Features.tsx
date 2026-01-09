"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { SearchIcon } from "@/components/ui/search";
import { TrendingUpIcon } from "@/components/ui/trending-up";
import { SlidersHorizontalIcon } from "@/components/ui/sliders-horizontal";
import { LayoutPanelTopIcon } from "@/components/ui/layout-panel-top";
import { FileStackIcon } from "@/components/ui/file-stack";
import { LinkIcon } from "@/components/ui/link";
import { FileTextIcon } from "@/components/ui/file-text";
import { MapPinIcon } from "@/components/ui/map-pin";
import { ChartPieIcon } from "@/components/ui/chart-pie";
import { ButtonSlide } from "@/components/ui/ButtonSlide";
import { BlurFade } from "@/components/ui/Animators";
import { TextHighlight } from "@/components/ui/TextHighlight";

const features = [
    {
        icon: SearchIcon,
        title: "From Niche to Keywords",
        description:
            "Define your niche and instantly generate keyword opportunities powered by real data and adapted to your business model.",
        href: "/features/keyword-research",
    },
    {
        icon: TrendingUpIcon,
        title: "Rank Tracking & Monitoring",
        description:
            "Track your rankings in real-time across all search engines. Get instant alerts when rankings change and stay ahead of algorithm updates.",
        href: "/features/rank-tracking",
    },
    {
        icon: SlidersHorizontalIcon,
        title: "Classic Keyword Finder",
        description:
            "Enter any keyword and explore related terms, trends, and difficulty scores. Ideal for refining your search when you already have a direction.",
        href: "/features/competitor-analysis",
    },
    {
        icon: LayoutPanelTopIcon,
        title: "Silo Builder",
        description:
            "Build your site structure automatically based on your keywords and SEO goals. Organize your pages into a logical hierarchy.",
        href: "/features/site-audit",
    },
    {
        icon: FileStackIcon,
        title: "SERP Analysis",
        description:
            "Deep-dive into search engine results pages to understand ranking factors. Optimize your content based on what's actually working.",
        href: "/features/serp-analysis",
    },
    {
        icon: LinkIcon,
        title: "Backlink Analysis",
        description:
            "Monitor your backlink profile and discover new link opportunities. Build authority with high-quality backlinks that boost rankings.",
        href: "/features/backlink-analysis",
    },
    {
        icon: FileTextIcon,
        title: "Content Generator",
        description:
            "Generate your SEO plan and optimized content in just a few clicks. Our AI agents build a clear content structure and write SEO-ready text.",
        href: "/features/content-optimization",
    },
    {
        icon: MapPinIcon,
        title: "Business Model Mapper",
        description:
            "Get monetization insights for every keyword. Our AI automatically suggests the most profitable way to monetize each keyword based on intent.",
        href: "/features/automation",
    },
    {
        icon: ChartPieIcon,
        title: "Performance Reports",
        description:
            "Generate beautiful, white-label reports in seconds. Track progress, prove ROI, and share insights with clients or stakeholders.",
        href: "/features/reports",
    },
];

const Features = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [activeTitle, setActiveTitle] = useState("dominate search algorithms.");
    const [activeIndex, setActiveIndex] = useState(0);
    const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    const setCardRef = (el: HTMLAnchorElement | null, index: number) => {
        cardRefs.current[index] = el;
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-40% 0px -40% 0px",
            threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = Number(entry.target.getAttribute("data-index"));
                    if (index >= 0 && features[index]) {
                        setActiveIndex(index);
                        if (index === 0) {
                            setActiveTitle("dominate search algorithms.");
                        } else {
                            setActiveTitle(features[index].title.toLowerCase() + ".");
                        }
                    }
                }
            });
        };

        const observer = new IntersectionObserver(
            observerCallback,
            observerOptions
        );

        cardRefs.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, [features]);

    return (
        <section ref={sectionRef} className="relative py-24 font-sans">
            <div className="max-w-5xl mx-auto px-4 md:px-6 relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    {/* Left column - Sticky */}
                    <div className="lg:col-span-6 lg:sticky lg:top-32 h-fit pb-10">
                        <div className="transition-all duration-300">
                            <BlurFade delay={0.2}>
                                <h2 className="text-4xl md:text-5xl font-bold text-zinc-600 tracking-tighter mb-8 leading-[1.1]">
                                    <TextHighlight className="text-black">Everything</TextHighlight> you need to{" "}
                                    <span
                                        key={activeTitle}
                                        className="block text-black animate-in fade-in slide-in-from-bottom-2 duration-500"
                                    >
                                        {activeTitle}
                                    </span>
                                </h2>
                            </BlurFade>

                            <BlurFade delay={0.3}>
                                <p className="text-lg text-zinc-500 leading-relaxed mb-10 max-w-md font-light">
                                    Professional SEO tools built for agencies, marketers, and
                                    businesses who want to scale their organic traffic and outrank
                                    competitors.
                                </p>
                            </BlurFade>

                            <BlurFade delay={0.4}>
                                <ButtonSlide
                                    variant="dark"
                                    className="w-auto px-8 rounded-full"
                                    onClick={() => (window.location.href = "#")}
                                    icon={<FiArrowRight className="w-4 h-4" />}
                                >
                                    Start Free Trial
                                </ButtonSlide>
                            </BlurFade>
                        </div>
                    </div>

                    {/* Right column - Feature Cards */}
                    <div className="lg:col-span-6 space-y-6">
                        {features.map((feature, index) => (
                            <Link
                                key={feature.href}
                                href={feature.href}
                                ref={(el) => setCardRef(el, index)}
                                data-index={index}
                                className={`group block bg-white border p-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:border-[#F15A29]/30 ${index === activeIndex
                                        ? "border-[#F15A29]/30 shadow-xl shadow-black/5"
                                        : "border-zinc-200"
                                    }`}
                            >
                                <div className="flex items-start gap-6">
                                    {/* Icon - Consistent with ToolsGrid */}
                                    <div className="shrink-0 w-12 h-12 rounded-lg bg-zinc-100 flex items-center justify-center text-[#F15A29]">
                                        <feature.icon size={24} />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-[#222] mb-2 tracking-tight">
                                            {feature.title}
                                        </h3>
                                        <p className="text-zinc-500 leading-relaxed text-sm mb-4 font-light">
                                            {feature.description}
                                        </p>

                                        {/* Learn More - Cleaner arrow interaction */}
                                        <div className="flex items-center gap-2 text-zinc-600 font-medium text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                                            <span className="group-hover:underline">Learn more</span>
                                            <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
