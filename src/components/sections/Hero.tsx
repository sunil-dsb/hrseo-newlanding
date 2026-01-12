'use client';

import React from 'react';
import { m } from 'framer-motion';
import { BlurFade } from '@/components/ui/Animators';
import { TextHighlight } from '@/components/ui/TextHighlight';
import { EncryptedText } from '@/components/ui/EncryptedText';
import { HiLightningBolt } from 'react-icons/hi';
import { TrendingUpIcon } from '@/components/ui/trending-up';
import { FaStar } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { IoMdArrowForward } from 'react-icons/io';
import Image from 'next/image';
import { ButtonSlide } from '@/components/ui/ButtonSlide';

export default function Hero() {
    const [spinCycle, setSpinCycle] = React.useState(0);

    const handleTextComplete = () => {
        setSpinCycle(prev => prev + 1);
    };

    return (
        <section className='relative flex items-center pt-48 pb-20 px-6'>
            <div className='max-w-5xl 2xl:max-w-7xl mx-auto w-full px-4'>
                <BlurFade delay={0.1}>
                    <p className='text-2xl text-black mb-6'>
                        You don&apos;t need <EncryptedText
                            text="expensive SEO tools"
                            className="text-zinc-400"
                            revealDelayMs={50}
                            onComplete={handleTextComplete}
                        />
                    </p>
                </BlurFade>

                <BlurFade delay={0.2}>
                    <h1 className='text-6xl sm:text-7xl md:text-[110px] font-bold tracking-tighter mb-12'>
                        You need a{' '}
                        <span className='inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-brand-primary mx-2 align-middle'>
                            <m.span
                                animate={{ rotate: spinCycle * 720 }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                                className="flex items-center justify-center"
                            >
                                <HiLightningBolt className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
                            </m.span>
                        </span>
                        <TextHighlight className="font-bold relative z-20">powerful</TextHighlight>
                        <br />
                        <span className='inline-flex items-center mx-2 sm:mx-3 md:mx-4 align-middle'>
                            <m.span
                                whileHover={{ y: -4 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className='inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-brand-primary z-0 cursor-pointer'
                            >
                                <TrendingUpIcon size={28} className="text-white" />
                            </m.span>
                            <span className='inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-zinc-100 border-white -ml-3 z-10'>
                                <m.span
                                    animate={{ rotate: spinCycle * 720 }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                    className="flex items-center justify-center"
                                >
                                    <HiLightningBolt className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-brand-primary" />
                                </m.span>
                            </span>
                        </span>
                        <TextHighlight className="font-bold relative z-20" color="#ebebebff" delay={1.5}>ai seo</TextHighlight> tools.
                    </h1>
                </BlurFade>

                <div className='flex flex-col md:flex-row md:items-start gap-8 md:gap-16 mb-12 max-w-5xl'>
                    <BlurFade delay={0.3}>
                        <p className='text-lg md:text-xl text-zinc-500 max-w-sm font-light'>
                            Boost your rankings with AI-powered insights that feel like magic.
                            Simple, fast, effective.
                        </p>
                    </BlurFade>

                    <BlurFade delay={0.4}>
                        <div className='flex items-center gap-4'>
                            <div className='flex -space-x-4'>
                                {[
                                    "/assets/avatar-1.jpg",
                                    "/assets/avatar-2.jpg",
                                    "/assets/avatar-3.jpg",
                                    "/assets/avatar-4.jpg",
                                    "/assets/avatar-1.jpg"
                                ].map((img, i) => (
                                    <div
                                        key={i}
                                        className='w-10 h-10 rounded-full border-2 border-white ring-1 ring-black/5 overflow-hidden bg-zinc-100'
                                    >
                                        <Image
                                            src={img}
                                            alt={`User ${i + 1}`}
                                            width={40}
                                            height={40}
                                            className="w-full h-full object-cover grayscale opacity-80"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className='flex flex-col'>
                                <div className='flex items-center gap-1 mb-1'>
                                    <span className='font-bold text-black text-sm'>4.9/5</span>
                                    <span className='flex text-[#F15A29] gap-0.5'> {/* Brand Orange Stars */}
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <m.span
                                                key={i}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 1.5 + (i * 0.1), type: "spring" }}
                                            >
                                                <FaStar className="w-3.5 h-3.5" />
                                            </m.span>
                                        ))}
                                    </span>
                                </div>
                                <p className='text-sm text-zinc-500 font-light'>
                                    Trusted by 10,000+ marketers
                                </p>
                            </div>
                        </div>
                    </BlurFade>
                </div>

                <BlurFade delay={0.5}>
                    <div className='flex flex-col sm:flex-row gap-4'>
                        <ButtonSlide
                            variant="dark"
                            className="w-auto px-8 py-4 rounded-full group"
                            onClick={() => window.location.href = '#'}
                            icon={
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-transparent transition-all duration-300 group-hover:bg-white">
                                    <MdKeyboardArrowRight className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-black" />
                                </span>
                            }
                        >
                            Start Free Trial
                        </ButtonSlide>

                        <ButtonSlide
                            variant="light"
                            className="w-auto px-8 py-4 rounded-full bg-white border border-zinc-200 hover:bg-zinc-50 group"
                            icon={
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-transparent transition-all duration-300 group-hover:bg-[#F15A29]">
                                    <IoMdArrowForward className="w-4 h-4 text-zinc-600 transition-colors duration-300 group-hover:text-white" />
                                </span>
                            }
                        >
                            See How It Works
                        </ButtonSlide>
                    </div>
                </BlurFade>
            </div>
        </section>
    );
}
