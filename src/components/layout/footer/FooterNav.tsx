'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { EncryptedText } from '@/components/ui/EncryptedText';
import { HoverTextHighlight, TextHighlight } from '@/components/ui/TextHighlight';

const LINKS = {
    products: [
        { name: 'Keyword Research', href: '#' },
        { name: 'Rank Tracking', href: '#' },
        { name: 'Backlink Analysis', href: '#' },
        { name: 'Site Audit', href: '#' },
        { name: 'SEO Reporting', href: '#' },
    ],
    resources: [
        { name: 'Customers', href: '#' },
        { name: 'Resource Center', href: '#' },
        { name: 'Webinars', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Videos', href: '#' },
    ],
    company: [
        { name: 'About', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Newsroom', href: '#' },
        { name: 'Security', href: '#' },
    ]
};

export const FooterNav = () => {
    return (
        <div className='max-w-5xl 2xl:max-w-7xl container-4k mx-auto px-6 relative z-10'>
            <div className="flex flex-col justify-between gap-10 lg:flex-row">
                <nav className="flex max-w-150 flex-1 flex-wrap gap-10 md:justify-between md:gap-8 lg:flex-nowrap">
                    {/* Products Column */}
                    <div className="flex-[1_1_45%] md:flex-[1_1_150px] xl:flex-[1_0_auto]">
                        <h3 className="text-sm font-semibold uppercase tracking-tighter text-zinc-800 footer-nav-header min-[2560px]:text-base">
                            <span className='text-zinc-400'># </span> <EncryptedText text="Products" />
                        </h3>
                        <ul className="mt-5 flex flex-col gap-2 md:mt-6">
                            {LINKS.products.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-zinc-500 hover:text-black transition-colors duration-300 xl:whitespace-nowrap text-sm font-medium footer-nav-link min-[2560px]:text-base">
                                        <HoverTextHighlight>{link.name}</HoverTextHighlight>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div className="flex-[1_1_45%] md:flex-[1_1_150px] xl:flex-[1_0_auto]">
                        <h3 className="text-sm font-semibold uppercase tracking-tighter text-zinc-800 footer-nav-header min-[2560px]:text-base">
                            <span className='text-zinc-400'># </span> <EncryptedText text="Resources" />
                        </h3>
                        <ul className="mt-5 flex flex-col gap-2 md:mt-6">
                            {LINKS.resources.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-zinc-500 hover:text-black transition-colors duration-300 xl:whitespace-nowrap text-sm font-medium footer-nav-link min-[2560px]:text-base">
                                        <HoverTextHighlight>{link.name}</HoverTextHighlight>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className="flex-[1_1_45%] md:flex-[1_1_150px] xl:flex-[1_0_auto]">
                        <h3 className="text-sm font-semibold uppercase tracking-tighter text-zinc-800 footer-nav-header min-[2560px]:text-base">
                            <span className='text-zinc-400'># </span> <EncryptedText text="Company" />
                        </h3>
                        <ul className="mt-5 flex flex-col gap-2 md:mt-6 ">
                            {LINKS.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-zinc-500 hover:text-black transition-colors duration-300 xl:whitespace-nowrap text-sm font-medium footer-nav-link min-[2560px]:text-base">
                                        <HoverTextHighlight>{link.name}</HoverTextHighlight>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                {/* Demo Video Widget */}
                <div className="flex-1 sm:max-w-76.5">
                    <div className="mb-8 flex flex-col gap-1">
                        <a href="mailto:info@hrseo.mail" className="text-zinc-500 hover:text-black transition-colors duration-300 text-base font-medium w-fit text-lg footer-email-link">
                            <TextHighlight className="text-black">info@hrseo.mailcom</TextHighlight>
                        </a>
                    </div>

                    <div className="mb-4 flex gap-2">
                        <a href="#" className="flex size-6 items-center justify-center rounded-full bg-[#F15A29] p-1 text-white transition-all hover:bg-black hover:text-white">
                            <FaLinkedin className="size-full" />
                        </a>
                        <a href="#" className="flex size-6 items-center justify-center rounded-full bg-[#F15A29] p-1 text-white transition-all hover:bg-black hover:text-white">
                            <FaTwitter className="size-full" />
                        </a>
                        <a href="#" className="flex size-6 items-center justify-center rounded-full bg-[#F15A29] p-1 text-white transition-all hover:bg-black hover:text-white">
                            <FaYoutube className="size-full" />
                        </a>
                    </div>

                    <a
                        href="#"
                        className="group flex items-center gap-5 rounded-lg border border-zinc-200 bg-white p-2 transition-all hover:border-zinc-300 footer-video-widget"
                    >
                        <div className="relative h-20 w-27 shrink-0 overflow-hidden rounded bg-zinc-100 footer-video-thumbnail">
                            <Image
                                src="/assets/demo-thumbnail.jpg"
                                alt="Demo"
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                                <div className="flex size-8 items-center justify-center rounded-full border border-white/40 bg-white/30 backdrop-blur-sm transition-transform duration-300 group-hover:scale-90">
                                    <svg className="ml-0.5 size-2.5 fill-current text-white" viewBox="0 0 10 11">
                                        <path d="M8.09123 4.41881L2.35365 1.14026C1.39551 0.592759 0.916438 0.319011 0.557829 0.527122C0.199219 0.735234 0.199219 1.287 0.199219 2.39053V8.94777C0.199219 10.0513 0.199219 10.6031 0.557834 10.8112C0.91645 11.0193 1.39552 10.7456 2.35367 10.198L8.09126 6.91935C9.06243 6.36438 9.54802 6.0869 9.54801 5.66906C9.54801 5.25123 9.06242 4.97376 8.09123 4.41881Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mb-1 font-bold tracking-widest uppercase text-[#059669] text-[10px]">
                                See how it works.
                            </div>
                            <div className="text-sm font-medium leading-tight text-zinc-900">
                                HRSEO Platform
                            </div>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    );
};
