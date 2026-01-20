"use client";

import React from 'react';
import { Link } from '@/i18n/routing';
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
import { useTranslations } from 'next-intl';
import { useIsMobile } from '@/hooks/use-is-mobile';

export default function Hero() {
    const t = useTranslations('Hero');
    const [spinCycle, setSpinCycle] = React.useState(0);
    const isMobile = useIsMobile();

    const handleTextComplete = () => {
        setSpinCycle(prev => prev + 1);
    };

    return (
        <section className='relative flex items-center pt-48 pb-20 md:px-6'>
            <div className='max-w-5xl 2xl:max-w-7xl container-4k mx-auto w-full px-4'>
                <BlurFade delay={0.05}>
                    <p className='text-xl min-[2560px]:text-3xl text-black mb-6'>
                        {t('preTitlePrefix')}<EncryptedText
                            text={t('preTitleEncrypted')}
                            className="text-zinc-500"
                            revealDelayMs={50}
                            onComplete={handleTextComplete}
                        />
                    </p>
                </BlurFade>

                <h1 className="text-6xl sm:text-7xl md:text-[6.5rem] min-[2560px]:text-[10.3rem] font-bold tracking-tighter mb-12 md:animate-fade-in">
                    {t('titlePrefix')}
                    <span className='inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 min-[2560px]:h-24 min-[2560px]:w-24 rounded-full bg-brand-primary mx-2 align-middle'>
                        <m.span
                            animate={{ rotate: spinCycle * 720 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            viewport={{ once: true }}
                            className="flex items-center justify-center relative translate-z-0"
                            aria-hidden="true"
                        >
                            <HiLightningBolt className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 min-[2560px]:h-12 min-[2560px]:w-12 text-white" />
                        </m.span>
                    </span>
                    <TextHighlight className="font-bold relative z-20">{t('titleHighlight1')}</TextHighlight>
                    <br />
                    <span className='inline-flex items-center mx-2 sm:mx-3 md:mx-4 align-middle'>
                        <m.span
                            whileHover={{ y: -4 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            viewport={{ once: true }}
                            className='inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 min-[2560px]:h-24 min-[2560px]:w-24 rounded-full bg-brand-primary z-0 cursor-pointer relative translate-z-0'
                            aria-hidden="true"
                        >
                            <TrendingUpIcon size={28} className="text-white" />
                        </m.span>
                        <span className='inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 min-[2560px]:h-24 min-[2560px]:w-24 rounded-full bg-zinc-100 border-white -ml-3 z-10'>
                            <m.span
                                animate={{ rotate: spinCycle * 720 }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                                viewport={{ once: true }}
                                className="flex items-center justify-center relative translate-z-0"
                                aria-hidden="true"
                            >
                                <HiLightningBolt className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 min-[2560px]:h-12 min-[2560px]:w-12 text-brand-primary" />
                            </m.span>
                        </span>
                    </span>
                    <TextHighlight className="font-bold relative z-20" color="#ebebebff" delay={1.5}>{t('titleHighlight2')}</TextHighlight>{t('titleSuffix')}
                </h1>

                <div className='flex flex-col md:flex-row md:items-start gap-8 md:gap-16 mb-12 max-w-5xl 2xl:max-w-7xl 2xl:gap-24'>
                    <BlurFade delay={0.15} className="min-h-[3.5rem]">
                        <p className='text-lg md:text-xl min-[2560px]:text-2xl text-zinc-500 max-w-sm 2xl:max-w-lg font-light'>
                            {t('description')}
                        </p>
                    </BlurFade>

                    <BlurFade delay={0.4}>
                        <div className='flex items-center gap-4'>
                            <div className='flex -space-x-4' role="img" aria-label="User avatars">
                                {[
                                    "/assets/avatar-1.jpg",
                                    "/assets/avatar-2.jpg",
                                    "/assets/avatar-3.jpg",
                                    "/assets/avatar-4.jpg",
                                    "/assets/avatar-1.jpg"
                                ].map((img, i) => (
                                    <div
                                        key={i}
                                        className='w-10 h-10 min-[2560px]:h-12 min-[2560px]:w-12 rounded-full border-2 border-white ring-1 ring-black/5 overflow-hidden bg-zinc-100'
                                    >
                                        <Image
                                            src={img}
                                            alt=""
                                            width={40}
                                            height={40}
                                            className="w-full h-full object-cover grayscale opacity-80"
                                            priority
                                            sizes="40px"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className='flex flex-col'>
                                <div className='flex items-center gap-1 mb-1' aria-label="4.9 out of 5 stars" role="img">
                                    <span className='font-bold text-black text-sm min-[2560px]:text-base' aria-hidden="true">4.9/5</span>
                                    <span className='flex text-[#F15A29] gap-0.5'> {/* Brand Orange Stars */}
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <m.span
                                                key={i}
                                                initial={isMobile ? undefined : { opacity: 0, scale: 0 }}
                                                animate={isMobile ? undefined : { opacity: 1, scale: 1 }}
                                                transition={{ delay: 1.5 + (i * 0.1), type: "spring" }}
                                                viewport={{ once: true }}
                                                className="will-change-transform"
                                                aria-hidden="true"
                                            >
                                                <FaStar className="w-3.5 h-3.5 min-[2560px]:h-5 min-[2560px]:w-5" />
                                            </m.span>
                                        ))}
                                    </span>
                                </div>
                                <p className='text-sm min-[2560px]:text-lg text-zinc-500 font-light'>
                                    {t('trustedBy')}
                                </p>
                            </div>
                        </div>
                    </BlurFade>
                </div>

                <BlurFade delay={0.5}>
                    <div className='flex flex-row flex-wrap gap-4'>
                        <div className="inline-block">
                            <Link href="/signup">
                                <ButtonSlide
                                    as="div"
                                    variant="dark"
                                    className="w-auto px-8 py-4 rounded-full group"
                                    icon={
                                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-transparent transition-all duration-300 group-hover:bg-white" aria-hidden="true">
                                            <MdKeyboardArrowRight className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-black" />
                                        </span>
                                    }
                                >
                                    {t('cta')}
                                </ButtonSlide>
                            </Link>
                        </div>

                        <div className="inline-block">
                            <Link href="/demo">
                                <ButtonSlide
                                    as="div"
                                    variant="light"
                                    className="w-auto px-8 py-4 rounded-full bg-white border border-zinc-200 hover:bg-zinc-50 group"
                                    icon={
                                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-transparent transition-all duration-300 group-hover:bg-[#F15A29]" aria-hidden="true">
                                            <IoMdArrowForward className="w-4 h-4 text-zinc-600 transition-colors duration-300 group-hover:text-white" />
                                        </span>
                                    }
                                >
                                    {t('secondaryCta')}
                                </ButtonSlide>
                            </Link>
                        </div>
                    </div>
                </BlurFade>
            </div>
        </section>
    );
}
