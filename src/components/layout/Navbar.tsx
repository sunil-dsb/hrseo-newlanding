'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { m, useScroll, useMotionValueEvent } from 'framer-motion';
import { LanguageDropdown } from '@/components/ui/LanguageDropdown';

const NAV_LINKS = [
    { name: 'Product', href: '#product' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Resources', href: '#resources' },
    { name: 'Enterprise', href: '#enterprise' },
];

export function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

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
                hidden: { y: '-100%', opacity: 0 }, // Moves it completely out of view
            }}
            initial="visible"
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }} // Snappy scroll transition
            className="fixed top-6 left-0 w-full flex justify-center z-50 pointer-events-none px-4"
        >
            <div className="w-full max-w-5xl flex items-center justify-between gap-2 pointer-events-auto">
                {/* Main Navbar Section */}
                <m.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-20 flex-1 h-14 pr-2 backdrop-blur-md bg-white/70 rounded-xl shadow-lg shadow-black/[0.03] border border-zinc-200 flex items-center justify-between"
                >
                    <Link href="/" className="flex items-center group shrink-0">
                        <Image
                            src="/hrseo-logo.png"
                            alt="HRSEO"
                            width={120}
                            height={40}
                            className="h-9 w-auto object-contain group-hover:opacity-80 transition-opacity"
                            priority
                        />
                        <span className="font-bold text-2xl tracking-tighter group-hover:opacity-80 transition-opacity">
                            HRSEO
                        </span>
                    </Link>

                    <div className="flex items-center gap-1 bg-zinc-100/80 p-1 pl-2 rounded-full">
                        <nav className="hidden md:flex items-center">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="px-4 py-1.5 text-sm font-medium text-zinc-500 hover:text-black hover:bg-white rounded-full transition-all duration-200"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        <div className="pl-1 pr-1 border-l border-zinc-200 ml-1">
                            <LanguageDropdown variant="navbar" />
                        </div>
                    </div>
                </m.div>

                {/* Button Section - Pop out from behind */}
                <m.div
                    className="relative z-10 h-14 flex items-center"
                    initial={{ x: '190%', y: -20, opacity: 0 }} // Starts off-screen right AND above
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    transition={{
                        x: { delay: 0.8, duration: 0.8, type: "spring", bounce: 0.25 }, // Original delayed slide-in
                        y: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }, // Synced drop with navbar
                        opacity: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } // Synced fade with navbar
                    }}
                >
                    <button
                        className="btn-anim relative overflow-hidden h-12 w-35 rounded-full bg-brand-primary text-white text-sm font-bold shadow-xl shadow-brand-primary/20 hover:shadow-brand-primary/30 transition-all shrink-0 flex items-center justify-center p-0"
                    >
                        <div className='span-visible'>
                            <span>Get Started</span>
                        </div>
                        <div className='span-hidden absolute inset-0'>
                            <span>Get Started</span>
                        </div>
                    </button>
                </m.div>
            </div>
        </m.header>
    );
}
