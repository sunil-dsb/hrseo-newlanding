'use client';

import { m, Variants } from 'framer-motion';
import { BlurFade } from '@/components/ui/Animators';
import { TextHighlight } from '@/components/ui/TextHighlight';
import { EncryptedText } from '@/components/ui/EncryptedText';
import { TrendingUpIcon } from '@/components/ui/trending-up';

const StepVisual1 = () => (
    <div className="relative w-full h-full bg-zinc-50 rounded-lg overflow-hidden border border-zinc-100 flex items-center justify-center p-6">
        <div className="w-full max-w-50 space-y-3">
            <div className="h-8 w-full bg-white rounded-md border border-zinc-200 shadow-sm flex items-center px-3 gap-2">
                <div className="w-3 h-3 rounded-full border border-zinc-300"></div>
                <div className="h-1.5 w-20 bg-zinc-100 rounded"></div>
            </div>
            <div className="flex gap-2 flex-wrap">
                <div className="px-2 py-1 bg-zinc-200 rounded text-[8px] text-zinc-800 font-medium">SaaS</div>
                <div className="px-2 py-1 bg-[#F15A29]/10 text-[#9a3412] rounded text-[8px] font-medium border border-[#F15A29]/20">Marketing</div>
                <div className="px-2 py-1 bg-zinc-100 rounded text-[8px] text-zinc-700">Tech</div>
            </div>
            <div className="space-y-1.5 pt-2">
                <div className="flex items-center justify-between">
                    <div className="h-1.5 w-16 bg-zinc-200 rounded"></div>
                    <div className="h-1.5 w-8 bg-zinc-300 rounded"></div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="h-1.5 w-12 bg-zinc-200 rounded"></div>
                    <div className="h-1.5 w-10 bg-zinc-300 rounded"></div>
                </div>
            </div>
        </div>
    </div>
);

const StepVisual2 = () => (
    <div className="relative w-full h-full bg-zinc-900 rounded-lg overflow-hidden flex items-center justify-center p-6">
        <div className="w-full max-w-100 space-y-2.5">
            <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#F15A29] animate-pulse"></div>
                <div className="h-2 w-24 bg-zinc-700 rounded"></div>
            </div>
            {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
                    <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-[2px] border border-zinc-600 bg-transparent flex items-center justify-center">
                            {i === 1 && <div className="w-1.5 h-1.5 bg-[#F15A29] rounded-[1px]"></div>}
                        </div>
                        <div className="h-1.5 w-12 bg-zinc-500 rounded"></div>
                    </div>
                    <div className="h-1 w-8 bg-zinc-700 rounded"></div>
                </div>
            ))}
        </div>
    </div>
);

const StepVisual3 = () => (
    <div className="relative w-full h-full bg-[#F15A29] rounded-lg overflow-hidden flex items-center justify-center group text-white">
        <div className="relative w-full max-w-[200px] h-[100px] flex items-end justify-between px-4 pb-4">
            <div className="w-6 h-8 bg-white/40 rounded-t-sm"></div>
            <div className="w-6 h-12 bg-white/60 rounded-t-sm"></div>
            <div className="w-6 h-16 bg-white/80 rounded-t-sm relative group-hover:scale-y-110 transition-transform origin-bottom duration-500">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-[#F15A29] text-[10px] font-bold px-2 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    +124%
                </div>
            </div>
            <div className="w-6 h-24 bg-white rounded-t-sm shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
    </div>
);

const STEPS = [
    {
        id: 1,
        step: "01",
        title: "Define your niche",
        description: "Select your niche and let HRSEO automatically detect the most relevant and profitable keywords based on search volume and ranking difficulty.",
        visual: <StepVisual1 />
    },
    {
        id: 2,
        step: "02",
        title: "Refine your keyword list",
        description: "Use Keyword Suggest to expand your research and find related secondary keywords that strengthen your strategy.",
        visual: <StepVisual2 />
    },
    {
        id: 3,
        step: "03",
        title: "Validate your monetization strategy",
        description: "Check your keyword’s profit potential with our AI-based Business Model Mapper. Get recommendations on the best model to monetize your traffic.",
        visual: <StepVisual3 />
    },
];

const positions = [16, 50, 84];

const cardVariants: Variants = {
    hidden: {
        left: "50%",
        x: "-50%",
        opacity: 0,
        scale: 0.9
    },
    visible: (i: number) => ({
        left: `${positions[i]}%`,
        x: "-50%",
        opacity: 1,
        scale: 1,
        transition: {
            delay: i * 0.2,
            type: "spring" as const,
            stiffness: 100,
            damping: 15
        }
    })
};

export const Steps = () => {
    return (
        <section className="font-sans relative">
            <div className="max-w-5xl 2xl:max-w-7xl container-4k mx-auto px-4 py-20 md:py-0">
                <div className="text-center max-w-2xl mx-auto">
                    <BlurFade delay={0.1}>
                        <h2 className="text-5xl sm:text-6xl font-bold text-black tracking-tighter leading-[1.1]">
                            Your{' '}
                            step-by-step path to scale
                            <span className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 min-[2560px]:w-24 min-[2560px]:h-24 rounded-full bg-[#F15A29] mx-2 align-middle align-bottom translate-y-2">
                                <m.span
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                                    className="flex items-center justify-center"
                                    aria-hidden="true"
                                >
                                    <TrendingUpIcon className="w-6 h-6 sm:w-7 sm:h-7 min-[2560px]:w-12 min-[2560px]:h-12 text-white" />
                                </m.span>
                            </span>{' '}
                            <TextHighlight className="text-black inline-block px-1">without limits</TextHighlight>
                        </h2>
                    </BlurFade>
                    <BlurFade delay={0.2} className='mt-8 max-w-lg mx-auto min-[2560px]:max-w-2xl'>
                        <p className="text-lg text-zinc-500 font-light min-[2560px]:text-xl">
                            Get started in minutes and see the difference our platform can make for your business.
                        </p>
                    </BlurFade>
                </div>

                {/* Mobile/Tablet View (Standard Grid) - Hidden on Desktop */}
                <ol className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 lg:gap-8 list-none m-0 p-0 pt-8">
                    {STEPS.map((step, index) => (
                        <li key={step.id}>
                            <StaticCard step={step} index={index} />
                        </li>
                    ))}
                </ol>

                {/* Desktop View (Auto-Play Animation) - Hidden on Mobile/Tablet */}
                <div className="hidden lg:block relative h-[650px] w-full mt-12 md:mt-0 min-[2560px]:pt-32 min-[2560px]:mb-12">
                    <ol className="relative w-full h-full steps-cards-4k list-none m-0 p-0">
                        {STEPS.map((step, index) => (
                            <li key={step.id}>
                                <AnimatedCard
                                    step={step}
                                    index={index}
                                    totalCards={STEPS.length}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section >
    );
};

// Static Card for Mobile/Tablet
const StaticCard = ({ step, index }: { step: typeof STEPS[0], index: number }) => (
    <BlurFade delay={0.2 + (index * 0.1)} className="disable-animation-mobile h-full">
        <article className="relative p-3 h-full">
            {/* Top Border & Dots */}
            <div className="absolute top-0 left-0 right-0 h-[0.8px] bg-black/5" aria-hidden="true" />
            <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 bg-zinc-200 rounded-full" aria-hidden="true" />
            <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-zinc-200 rounded-full" aria-hidden="true" />

            {/* Bottom Border & Dots */}
            <div className="absolute bottom-0 left-0 right-0 h-[0.8px] bg-black/5" aria-hidden="true" />
            <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 bg-zinc-200 rounded-full" aria-hidden="true" />
            <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 bg-zinc-200 rounded-full" aria-hidden="true" />

            <div className="bg-white rounded-xl border border-zinc-100 p-8 h-[420px] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 shadow-sm hover:shadow-lg">
                <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                        <EncryptedText text={`// Step ${step.step}`} />
                    </span>
                    <div className="flex items-center gap-1" aria-hidden="true">
                        <span className="text-2xl font-bold text-zinc-900 leading-none">{step.step}</span>
                        <div className="flex gap-0.5 ml-1">
                            <div className={`w-1 h-1 rounded-full ${index >= 0 ? 'bg-[#F15A29]' : 'bg-zinc-200'}`}></div>
                            <div className={`w-1 h-1 rounded-full ${index >= 1 ? 'bg-[#F15A29]' : 'bg-zinc-200'}`}></div>
                            <div className={`w-1 h-1 rounded-full ${index >= 2 ? 'bg-[#F15A29]' : 'bg-zinc-200'}`}></div>
                        </div>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-black mb-2 tracking-tight line-clamp-2 md:min-h-[64px]">{step.title}</h3>
                <p className="text-sm text-zinc-500 font-light mb-8 max-w-[200px] line-clamp-3">{step.description}</p>

                <div className="flex-1 w-full rounded-lg overflow-hidden relative mt-auto border border-zinc-100" aria-hidden="true">
                    {step.visual}
                </div>
            </div>
        </article>
    </BlurFade>
);

interface AnimatedCardProps {
    step: typeof STEPS[0];
    index: number;
    totalCards: number;
}

// Animated Card for Desktop
const AnimatedCard = ({ step, index, totalCards }: AnimatedCardProps) => {
    return (
        <m.div
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="absolute top-[50%] -translate-y-1/2 w-[20rem] h-[26.25rem] min-[2560px]:w-[26rem] min-[2560px]:h-[34rem] group steps-single-card-4k min-[2560px]:mt-6"
            style={{
                zIndex: totalCards - index,
            }}
        >
            <article className="relative p-3 h-full w-full">
                {/* Top Border & Dots */}
                <div className="absolute top-0 left-0 right-0 h-[0.8px] bg-black/5" aria-hidden="true" />
                <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 bg-zinc-200 rounded-full" aria-hidden="true" />
                <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-zinc-200 rounded-full" aria-hidden="true" />

                {/* Bottom Border & Dots */}
                <div className="absolute bottom-0 left-0 right-0 h-[0.8px] bg-black/5" aria-hidden="true" />
                <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 bg-zinc-200 rounded-full" aria-hidden="true" />
                <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 bg-zinc-200 rounded-full" aria-hidden="true" />

                <div className="bg-white rounded-xl border border-zinc-100 p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg">
                    <div className="flex justify-between items-start mb-6">
                        <span className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                            <EncryptedText text={`// Step ${step.step}`} />
                        </span>
                        <div className="flex items-center gap-1" aria-hidden="true">
                            <span className="text-2xl font-bold text-zinc-900 leading-none">{step.step}</span>
                            <div className="flex gap-0.5 ml-1">
                                <div className={`w-1 h-1 rounded-full ${index >= 0 ? 'bg-[#F15A29]' : 'bg-zinc-200'}`}></div>
                                <div className={`w-1 h-1 rounded-full ${index >= 1 ? 'bg-[#F15A29]' : 'bg-zinc-200'}`}></div>
                                <div className={`w-1 h-1 rounded-full ${index >= 2 ? 'bg-[#F15A29]' : 'bg-zinc-200'}`}></div>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-black mb-2 tracking-tight line-clamp-2 md:min-h-[64px] min-[2560px]:text-3xl min-[2560px]:mb-4">{step.title}</h3>
                    <p className="text-sm text-zinc-500 font-light mb-8 max-w-[200px] line-clamp-3 min-[2560px]:text-base min-[2560px]:max-w-[22rem]">{step.description}</p>

                    <div className="flex-1 w-full rounded-lg overflow-hidden relative mt-auto border border-zinc-100" aria-hidden="true">
                        {step.visual}
                    </div>
                </div>
            </article>
        </m.div>
    );
};
