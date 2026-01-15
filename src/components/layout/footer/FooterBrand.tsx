'use client';

import { m } from 'framer-motion';
import Link from 'next/link';
import { LanguageDropdown } from '@/components/ui/LanguageDropdown';

import { useTranslations } from 'next-intl';

export const FooterBrand = () => {
    const t = useTranslations('Footer');

    return (
        <div className='relative w-full pt-12 z-10'>
            {/* Giant Animated Branding */}
            <m.div
                className='group relative mx-auto h-35 max-w-5xl 2xl:max-w-7xl container-4k cursor-default overflow-hidden sm:h-45 md:h-55 pointer-events-auto z-10 footer-brand-container'
                initial="initial"
                whileHover="hover"
                animate="initial"
            >
                <div className='absolute left-1/2 -translate-x-1/2 w-full h-full flex items-end justify-center'>
                    <svg
                        viewBox="0 0 1000 300"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-auto w-full translate-y-[45%]"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <m.text
                            x="50%"
                            y="55%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            fontSize="450"
                            fontWeight="bold"
                            fontFamily="var(--font-hrse), system-ui, sans-serif"
                            letterSpacing="-0.08em"
                            variants={{
                                initial: { transition: { staggerChildren: 0.05, staggerDirection: 1 } },
                                hover: { transition: { staggerChildren: 0.05, staggerDirection: 1 } }
                            }}
                        >
                            {['h', 'r', 's', 'e', 'o'].map((char, i) => (
                                <m.tspan
                                    key={i}
                                    variants={{
                                        initial: {
                                            fill: "#05131A",
                                            fillOpacity: 0.05,
                                            filter: "drop-shadow(0 0 0px rgba(241, 90, 41, 0))",
                                            y: 0,
                                            transition: { duration: 0.3 }
                                        },
                                        hover: {
                                            fill: "#F15A29",
                                            fillOpacity: 0.1,
                                            filter: "drop-shadow(0 0 30px rgba(241, 90, 41, 0.4))",
                                            y: -5,
                                            transition: {
                                                type: "spring",
                                                bounce: 0.4,
                                                duration: 0.6
                                            }
                                        }
                                    }}
                                >
                                    {char}
                                </m.tspan>
                            ))}
                        </m.text>
                    </svg>
                </div>
            </m.div>

            {/* Bottom Bar */}
            <div className='relative z-20 mx-auto max-w-5xl 2xl:max-w-7xl px-6 pb-8'>
                <div className="flex flex-col items-end gap-5 border-t border-transparent pt-8 lg:flex-row lg:justify-between">
                    <div className="flex flex-1 flex-wrap items-center justify-center gap-9 gap-y-5 text-sm font-medium tracking-wide text-zinc-500 md:justify-start footer-bottom-text min-[2560px]:text-base">
                        <div className="opacity-60">{t('copyright')}</div>
                        <div className="flex items-center gap-8">
                            <Link href="#" className="text-zinc-900/60 transition-colors hover:text-[#F15A29] hover:underline">{t('terms')}</Link>
                            <Link href="#" className="text-zinc-900/60 transition-colors hover:text-[#F15A29] hover:underline">{t('privacy')}</Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <LanguageDropdown variant="footer" align="right" />
                    </div>
                </div>
            </div>
        </div >
    );
};
