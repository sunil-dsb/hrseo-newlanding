'use client';

import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';
import { GoArrowUpRight } from 'react-icons/go';
import { Link } from '@/i18n/routing';
import { TextHighlight } from '@/components/ui/TextHighlight';
import { EncryptedText } from '@/components/ui/EncryptedText';
import { useIsMobile } from '@/hooks/use-is-mobile';

const FAQS = [
    {
        id: '01',
        question: "Do I need any design or coding experience?",
        answer: "No, you don’t need any prior experience. My templates are built with simplicity in mind, using Framer’s drag-and-drop interface. You can easily adjust text, images, colors, and layouts without touching a single line of code."
    },
    {
        id: '02',
        question: "What happens after I purchase a template?",
        answer: "Once you complete your purchase, you'll immediately receive a remix link with the template. You'll also get access to a quick start guide and tutorials to help you get up and running quickly. If you need further assistance, support is just an email away."
    },
    {
        id: '03',
        question: "Do I need a Framer subscription?",
        answer: "Framer is free to design and build your site, but to publish with a CMS and your own domain, a subscription is needed. For most sites with a CMS, plans currently start at $15/month (when paid annually), giving you access to powerful publishing and management features."
    },
    {
        id: '04',
        question: "How long does it take to set up my website?",
        answer: "Most users can have their site up and running in 1-2 days. With intuitive customization options and clear guides, launching your site is fast and stress-free."
    },
    {
        id: '05',
        question: "What kind of support is included?",
        answer: "I offer email support for all templates. Whether you’re facing setup issues or have customization questions, I’ll work with you to resolve them promptly."
    },
    {
        id: '06',
        question: "Do you offer refunds if I'm not satisfied?",
        answer: "Due to the nature of digital products, refunds aren’t available. However, I’m committed to helping you get the most out of your purchase. If you encounter issues, I offer comprehensive support to resolve them."
    },
];

export const FAQ = () => {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggleFAQ = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="py-24 overflow-hidden">
            <div className="max-w-5xl 2xl:max-w-7xl container-4k mx-auto">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-20 space-y-6">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black min-[2560px]:text-8xl">
                        Got <TextHighlight>questions?</TextHighlight>
                    </h2>

                    <p className="max-w-md text-zinc-500 text-lg font-light min-[2560px]:text-xl min-[2560px]:max-w-2xl">
                        If you have any other questions or need more information, feel free to reach out directly.
                    </p>

                    <Link
                        href="/contact"
                        className="group flex items-center gap-2 font-medium text-black hover:opacity-70 transition-opacity faq-ask-link min-[2560px]:text-lg"
                    >
                        <EncryptedText text="Ask a question" />
                        <GoArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 min-[2560px]:w-5 min-[2560px]:h-5" />
                    </Link>
                </div>

                {/* FAQ Grid */}

                {/* Mobile View: Single Column Stack */}
                <div className="flex flex-col gap-4 md:hidden px-4">
                    {FAQS.map((faq) => (
                        <FAQCard
                            key={`mobile-${faq.id}`}
                            item={faq}
                            isOpen={openId === faq.id}
                            onToggle={() => toggleFAQ(faq.id)}
                        />
                    ))}
                </div>

                {/* Desktop View: Dual Independent Columns (Masonry effect) */}
                <div className="hidden md:grid grid-cols-2 gap-4 items-start px-4">
                    {/* Column 1 (Odds: 1, 3, 5) */}
                    <div className="flex flex-col gap-4">
                        {FAQS.filter((_, i) => i % 2 === 0).map((faq) => (
                            <FAQCard
                                key={`desktop-${faq.id}`}
                                item={faq}
                                isOpen={openId === faq.id}
                                onToggle={() => toggleFAQ(faq.id)}
                            />
                        ))}
                    </div>

                    {/* Column 2 (Evens: 2, 4, 6) */}
                    <div className="flex flex-col gap-4">
                        {FAQS.filter((_, i) => i % 2 !== 0).map((faq) => (
                            <FAQCard
                                key={`desktop-${faq.id}`}
                                item={faq}
                                isOpen={openId === faq.id}
                                onToggle={() => toggleFAQ(faq.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const FAQCard = ({ item, isOpen, onToggle }: { item: typeof FAQS[0], isOpen: boolean, onToggle: () => void }) => {
    const isMobile = useIsMobile();

    return (
        <m.button
            onClick={onToggle}
            className={`w-full text-left relative bg-white rounded-xl p-6 md:p-8 cursor-pointer overflow-hidden duration-300 disable-animation-mobile group focus:outline-none focus:ring-2 focus:ring-brand-primary/20`}
            initial={isMobile ? undefined : { opacity: 0, y: 20 }}
            whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            aria-expanded={isOpen}
            aria-controls={`faq-answer-${item.id}`}
        >
            {/* Sliding Header Container: Moves left so Question aligns with start */}
            <m.div
                className="flex items-start gap-6 relative z-10"
                animate={{
                    x: isOpen ? (isMobile ? 0 : -64) : 0
                }}
                transition={{ duration: isMobile ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
                {/* Number */}
                <span className="text-zinc-400 font-medium text-lg leading-snug shrink-0 w-10 min-[2560px]:text-xl min-[2560px]:w-14">
                    {item.id}/
                </span>

                {/* Question */}
                <h3 className="text-zinc-700 font-normal leading-snug w-full pr-12 text-lg transition-colors duration-300 min-[2560px]:text-xl group-hover:text-black">
                    {item.question}
                </h3>
            </m.div>

            {/* Answer - Outside the sliding container, so it doesn't move X */}
            <AnimatePresence>
                {isOpen && (
                    <m.div
                        id={`faq-answer-${item.id}`}
                        initial={isMobile ? { opacity: 1, y: 0, height: 0 } : { opacity: 0, y: 20 }}
                        animate={isMobile ? { opacity: 1, y: 0, height: 'auto' } : { opacity: 1, y: 0 }}
                        exit={isMobile ? { opacity: 0, y: 0, height: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: isMobile ? 0.3 : 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="text-zinc-500 font-light leading-relaxed mt-4 min-[2560px]:text-base min-[2560px]:mt-6"
                        role="region"
                    >
                        {item.answer}
                    </m.div>
                )}
            </AnimatePresence>

            {/* Plus Icon - Fixed Position */}
            <div className="absolute top-6 right-6 md:top-8 md:right-8 text-zinc-900 z-20 pointer-events-none">
                <FiPlus className={`w-5 h-5 transition-transform duration-300 min-[2560px]:w-6 min-[2560px]:h-6 ${isOpen ? "rotate-45" : ""}`} />
            </div>
        </m.button>
    );
};
