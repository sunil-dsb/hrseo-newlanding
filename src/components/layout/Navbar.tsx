'use client';

import { useState, Suspense } from 'react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { m, useScroll, useMotionValueEvent } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { LanguageDropdown } from '@/components/ui/LanguageDropdown';
import { useIsMobile } from '@/hooks/use-is-mobile';

const NAV_LINKS = [
    { key: 'product', href: '#product' },
    { key: 'pricing', href: '#pricing' },
    { key: 'resources', href: '#resources' },
    { key: 'enterprise', href: '#enterprise' },
];

export function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const t = useTranslations('Navbar');
    const isMobile = useIsMobile();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <m.header
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: '-100%', opacity: 0 },
            }}
            initial={isMobile ? "visible" : "visible"}
            animate={isMobile ? "visible" : (hidden ? "hidden" : "visible")}
            transition={isMobile ? { duration: 0 } : { duration: 0.35, ease: "easeInOut" }}
            className="fixed top-6 left-0 w-full flex justify-center z-50 pointer-events-none px-4"
        >
            <div className="w-full md:max-w-[87%] flex items-center justify-between gap-0.5 md:gap-2 pointer-events-auto">
                {/* Main Navbar Section */}
                <m.div
                    initial={isMobile ? undefined : { y: -20, opacity: 0 }}
                    animate={isMobile ? undefined : { y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-20 flex-1 h-14 pr-2 backdrop-blur-md bg-white/70 rounded-xl shadow-lg shadow-black/[0.03] border border-zinc-200 flex items-center justify-between navbar-container"
                >
                    <Link href="/" className="flex items-center group shrink-0 pl-4 navbar-brand">
                        <Image
                            src="/hrseo-logoo.jpg"
                            alt="HRSEO"
                            width={120}
                            height={100}
                            className="h-8 w-auto object-contain group-hover:opacity-80 transition-opacity navbar-brand-img"
                            priority
                        />
                        {/* <span className="font-bold text-xl md:text-2xl tracking-tighter group-hover:opacity-80 transition-opacity navbar-brand-text">
                            HRSEO
                        </span> */}
                    </Link>

                    <div className="flex items-center gap-1 md:bg-zinc-100/80 p-0 md:p-1 md:pl-2 rounded-full">
                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.key}
                                    href={link.href}
                                    className="px-4 py-1.5 text-sm font-medium text-zinc-500 hover:text-black hover:bg-white rounded-full transition-all duration-200 navbar-link-item"
                                >
                                    {t(link.key)}
                                </Link>
                            ))}
                        </nav>

                        {/* Desktop Language */}
                        <div className="hidden md:block md:pl-1 md:pr-1 md:border-l border-zinc-200 md:ml-1">
                            <Suspense fallback={<div className="w-8 h-8 rounded-full bg-zinc-100 animate-pulse" />}>
                                <LanguageDropdown variant="navbar" />
                            </Suspense>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 text-zinc-600 hover:text-black transition-colors"
                            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        >
                            <div className="relative w-6 h-2.5 flex flex-col justify-between items-center group">
                                <m.span
                                    animate={mobileMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                                    transition={isMobile ? { duration: 0 } : { duration: 0.3, ease: "easeInOut" }}
                                    className="w-6 h-0.5 bg-zinc-600 group-hover:bg-black rounded-full origin-center"
                                />
                                <m.span
                                    animate={mobileMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                                    transition={isMobile ? { duration: 0 } : { duration: 0.3, ease: "easeInOut" }}
                                    className="w-6 h-0.5 bg-zinc-600 group-hover:bg-black rounded-full origin-center"
                                />
                            </div>
                        </button>
                    </div>
                </m.div>

                {/* Button Section - Pop out from behind */}
                <m.div
                    className="relative z-10 h-14 flex items-center hidden md:flex"
                    initial={isMobile ? undefined : { x: '190%', y: -20, opacity: 0 }} // Starts off-screen right AND above
                    animate={isMobile ? undefined : { x: 0, y: 0, opacity: 1 }}
                    transition={{
                        x: { delay: 0.8, duration: 0.8, type: "spring", bounce: 0.25 }, // Original delayed slide-in
                        y: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }, // Synced drop with navbar
                        opacity: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } // Synced fade with navbar
                    }}
                >
                    <Link href="/signup">
                        <button
                            className="btn-anim relative overflow-hidden md:h-12 md:w-35 rounded-full bg-brand-primary text-white text-sm font-bold shadow-xl shadow-brand-primary/20 hover:shadow-brand-primary/30 transition-all shrink-0 flex items-center justify-center p-4 px-6 md:p-0 navbar-cta-btn"
                        >
                            <div className='span-visible'>
                                <span>{t('getStarted')}</span>
                            </div>
                            <div className='span-hidden absolute inset-0'>
                                <span>{t('getStarted')}</span>
                            </div>
                        </button>
                    </Link>
                </m.div>
            </div>

            {/* Mobile Menu Overlay */}
            <m.div
                initial={false}
                animate={mobileMenuOpen ? "open" : "closed"}
                variants={{
                    open: { height: 'auto', opacity: 1, marginTop: '1rem', display: 'block' },
                    closed: { height: 0, opacity: 0, marginTop: 0, transitionEnd: { display: 'none' } }
                }}
                transition={isMobile ? { duration: 0 } : { duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-full left-0 w-full px-4 overflow-hidden pointer-events-auto md:hidden"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile Navigation"
            >
                <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-zinc-200 shadow-xl p-4 flex flex-col gap-4">
                    <nav className="flex flex-col gap-2">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.key}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="px-4 py-3 text-lg font-medium text-zinc-600 hover:text-black hover:bg-zinc-100 rounded-xl transition-all"
                            >
                                {t(link.key)}
                            </Link>
                        ))}
                    </nav>
                    <div className="border-t border-zinc-200 pt-4 flex flex-col gap-4">
                        <div className="flex items-center justify-between px-2">
                            <span className="text-zinc-500 font-medium">{t('language')}</span>
                            <Suspense fallback={<div className="w-40 h-10 rounded-lg bg-zinc-100 animate-pulse" />}>
                                <LanguageDropdown variant="footer" align="right" />
                            </Suspense>
                        </div>
                        <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                            <button className="w-full py-3 rounded-xl bg-brand-primary text-white font-bold text-center shadow-lg shadow-brand-primary/20">
                                {t('getStarted')}
                            </button>
                        </Link>
                    </div>
                </div>
            </m.div>
        </m.header>
    );
}
