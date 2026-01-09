'use client';

import { m } from 'framer-motion';
import { BlurFade } from '@/components/ui/Animators';
import { TextHighlight } from '@/components/ui/TextHighlight';
import { EncryptedText } from '@/components/ui/EncryptedText';
import { FiMousePointer } from 'react-icons/fi';
import { HiLightningBolt } from 'react-icons/hi';
import { TrendingUpIcon } from '../ui/trending-up';

const STEPS = [
    {
        id: 1,
        step: "01",
        title: "Define your niche",
        description: "Select your niche and let HRSEO automatically detect the most relevant and profitable keywords based on search volume and ranking difficulty.",
        visual: (
            <div className="relative w-full h-full bg-zinc-50 rounded-lg overflow-hidden border border-zinc-100 flex items-center justify-center p-6">
                {/* Search/Niche UI */}
                <div className="w-full max-w-[200px] space-y-3">
                    <div className="h-8 w-full bg-white rounded-md border border-zinc-200 shadow-sm flex items-center px-3 gap-2">
                        <div className="w-3 h-3 rounded-full border border-zinc-300"></div>
                        <div className="h-1.5 w-20 bg-zinc-100 rounded"></div>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        <div className="px-2 py-1 bg-zinc-200 rounded text-[8px] text-zinc-500 font-medium">SaaS</div>
                        <div className="px-2 py-1 bg-[#F15A29]/10 text-[#F15A29] rounded text-[8px] font-medium border border-[#F15A29]/20">Marketing</div>
                        <div className="px-2 py-1 bg-zinc-100 rounded text-[8px] text-zinc-400">Tech</div>
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
        )
    },
    {
        id: 2,
        step: "02",
        title: "Refine your keyword list",
        description: "Use Keyword Suggest to expand your research and find related secondary keywords that strengthen your strategy.",
        visual: (
            <div className="relative w-full h-full bg-zinc-900 rounded-lg overflow-hidden flex items-center justify-center p-6">
                {/* List UI */}
                <div className="w-full max-w-[200px] space-y-2.5">
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
        )
    },
    {
        id: 3,
        step: "03",
        title: "Validate your monetization strategy",
        description: "Check your keyword’s profit potential with our AI-based Business Model Mapper. Get recommendations on the best model to monetize your traffic.",
        visual: (
            <div className="relative w-full h-full bg-[#F15A29] rounded-lg overflow-hidden flex items-center justify-center group text-white">
                {/* Chart/Profit UI */}
                <div className="relative w-full max-w-[200px] h-[100px] flex items-end justify-between px-4 pb-4">
                    {/* Bars */}
                    <div className="w-6 h-8 bg-white/40 rounded-t-sm"></div>
                    <div className="w-6 h-12 bg-white/60 rounded-t-sm"></div>
                    <div className="w-6 h-16 bg-white/80 rounded-t-sm relative group-hover:scale-y-110 transition-transform origin-bottom duration-500">
                        {/* Tooltip */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-[#F15A29] text-[10px] font-bold px-2 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            +124%
                        </div>
                    </div>
                    <div className="w-6 h-24 bg-white rounded-t-sm shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
                </div>

                {/* Grid lines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
            </div>
        )
    }
];

export const Steps = () => {
    return (
        <section className="py-24 px-4 font-sans">
            <div className="max-w-6xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-8">
                    <BlurFade delay={0.1}>
                        <h2 className="text-5xl sm:text-6xl font-bold text-black tracking-tighter leading-[1.1]">
                            Your{' '}
                            step-by-step path to scale                           <span className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#F15A29] mx-2 align-middle align-bottom translate-y-2">
                                <m.span
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                                    className="flex items-center justify-center"
                                >
                                    <TrendingUpIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                </m.span>
                            </span>{' '}                           <TextHighlight className="text-black inline-block px-1">without  limits </TextHighlight>
                        </h2>
                    </BlurFade>
                </div>
                <BlurFade delay={0.2} className='max-w-3xl mx-auto text-center pb-8'>
                    <p className="text-lg text-zinc-500 mb-8 font-light">
                        Get started in minutes and see the difference our platform can make for your business.
                    </p>
                </BlurFade>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {STEPS.map((step, index) => (
                        <StepCard key={step.id} data={step} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const StepCard = ({ data, index }: { data: typeof STEPS[0], index: number }) => {
    return (
        <BlurFade delay={0.2 + (index * 0.1)}>
            <div className="relative p-3 h-full">
                {/* Top Border & Dots */}
                <div className="absolute top-0 left-0 right-0 h-[0.8px] bg-black/5" />
                <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 bg-zinc-200 rounded-full" />
                <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-zinc-200 rounded-full" />

                {/* Bottom Border & Dots */}
                <div className="absolute bottom-0 left-0 right-0 h-[0.8px] bg-black/5" />
                <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 bg-zinc-200 rounded-full" />
                <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 bg-zinc-200 rounded-full" />

                <div className="bg-white rounded-xl border border-zinc-100 p-8 h-[420px] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300">
                    <div className="flex justify-between items-start mb-6">
                        <span className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                            <EncryptedText text={`// Step ${data.step}`} />
                        </span>
                        <div className="flex items-center gap-1">
                            <span className="text-2xl font-bold text-zinc-900 leading-none">{data.step}</span>
                            <div className="flex gap-0.5 ml-1">
                                <div className="w-1 h-1 rounded-full bg-[#F15A29]"></div>
                                <div className="w-1 h-1 rounded-full bg-zinc-200"></div>
                                <div className="w-1 h-1 rounded-full bg-zinc-200"></div>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-black mb-2 tracking-tight line-clamp-2 md:min-h-[64px]">{data.title}</h3>
                    <p className="text-sm text-zinc-500 font-light mb-8 max-w-[200px] line-clamp-3">{data.description}</p>

                    <div className="flex-1 w-full rounded-lg overflow-hidden relative mt-auto border border-zinc-100">
                        {data.visual}
                    </div>
                </div>
            </div>
        </BlurFade>
    );
};
