'use client';

import { m } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import { EncryptedText } from '@/components/ui/EncryptedText';
import { Marquee } from '@/components/ui/Marquee';

// Image URLs provided by user
const AVATARS = [
    "https://framerusercontent.com/images/D2T9NEaPOb2fzozmBSTs4eJ7sdg.jpg",
    "https://framerusercontent.com/images/rWibq7qK6SYLsvi7YvY5ZioDo.jpg",
    "https://framerusercontent.com/images/BC8kEVoVCultzLUf7sH1lHYICc.jpg",
    "https://framerusercontent.com/images/TQ5Y4EoZFZZAK1F6IY2lfoUGYL8.jpg"
];

const TESTIMONIALS = [
    {
        id: 1,
        name: "Muhammad Suleman",
        handle: "@uisuleman",
        avatar: AVATARS[0],
        text: "Anatoli is very creative designer. I used his templates and these templates are best templates I have ever used. The design is beautiful and super easy to customize",
        date: "Nov 3, 2024",
        tag: "Captured"
    },

    {
        id: 2,
        name: "Arifur Rahman Hridoy",
        handle: "@NoCoderHridoy",
        avatar: AVATARS[3],
        text: "I recently used one of Anatolii's Framer templates, and it's undoubtedly one of the best I've come across. If you're looking to create a professional website for your business, I highly recommend it.",
        date: "Dec 14, 2024",
        tag: "Praxis"
    },
    {
        id: 3,
        name: "Estelle",
        handle: "@PixelGlowDsgns",
        avatar: AVATARS[2],
        text: "The templates designed by Anatolii are stunning! Beautiful, modern style and easy to customise with amazing smooth animations and interactions. Highly recommended!",
        date: "Dec 26, 2024",
        tag: "Captured"
    },
    {
        id: 4,
        name: "Michael Clark",
        handle: "@mclarkdesign",
        avatar: AVATARS[1],
        text: "As someone with zero coding experience, I was worried about building my website. But this template made everything so straightforward. The drag-and-drop functionality and customization options are unmatched. I've already recommended it to a few friends!",
        date: "Dec 1, 2024",
        tag: "Lyniq"
    },
    {
        id: 5,
        name: "Daniel Firstson",
        handle: "@visuvium",
        avatar: AVATARS[0],
        text: "Captured is a perfect package if you are looking for creative layout, smooth animation, complete features, and also easy-to-follow tutorial. The best deal I could get with super reasonable price tag!",
        date: "Jan 12, 2025",
        tag: "Captured"
    },
    {
        id: 6,
        name: "Krzysztof Hejna",
        handle: "@krzhej",
        avatar: AVATARS[1],
        text: "Lyniq is easily one of the best templates available on the Framer marketplace. @bynneh sets a new standard for quality for all template creators 👌",
        date: "Jan 10, 2025",
        tag: "Lyniq"
    }
];

// Split testimonials for the 3 columns
const column1 = TESTIMONIALS.slice(0, 2);
const column2 = TESTIMONIALS.slice(2, 4);
const column3 = TESTIMONIALS.slice(4, 6);

export const Testimonials = () => {
    return (
        <section className="pb-24 px-4 overflow-hidden">
            <div className="max-w-5xl mx-auto h-[700px] relative"> {/* Fixed height for Marquee container */}
                <div className="flex flex-row justify-center gap-6 h-full overflow-hidden relative">
                    {/* First Column - Down */}
                    <div className="w-full h-full relative">
                        <Marquee pauseOnHover vertical className="[--duration:20s] [--gap:1.5rem] h-full justify-start">
                            {column1.map((t) => (
                                <TestimonialCard key={t.id} data={t} index={0} />
                            ))}
                        </Marquee>
                        <div className="from-white pointer-events-none absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b z-10"></div>
                        <div className="from-white pointer-events-none absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t z-10"></div>
                    </div>

                    {/* Second Column - Up (Reverse) */}
                    <div className="hidden md:block w-full h-full relative">
                        <Marquee reverse pauseOnHover vertical className="[--duration:25s] [--gap:1.5rem] h-full justify-start">
                            {column2.map((t) => (
                                <TestimonialCard key={t.id} data={t} index={1} />
                            ))}
                        </Marquee>
                        <div className="from-white pointer-events-none absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b z-10"></div>
                        <div className="from-white pointer-events-none absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t z-10"></div>
                    </div>

                    {/* Third Column - Down */}
                    <div className="hidden lg:block w-full h-full relative">
                        <Marquee pauseOnHover vertical className="[--duration:30s] [--gap:1.5rem] h-full justify-start">
                            {column3.map((t) => (
                                <TestimonialCard key={t.id} data={t} index={2} />
                            ))}
                        </Marquee>
                        <div className="from-white pointer-events-none absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b z-10"></div>
                        <div className="from-white pointer-events-none absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TestimonialCard = ({ data, index }: { data: typeof TESTIMONIALS[0], index: number }) => {
    return (
        <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative p-3 group"
        >
            {/* Top Border & Dots */}
            <div className="absolute top-0 left-0 right-0 h-[0.8px] bg-black/6" />
            <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 bg-zinc-200 rounded-full" />
            <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-zinc-200 rounded-full" />

            {/* Bottom Border & Dots */}
            <div className="absolute bottom-0 left-0 right-0 h-[0.8px] bg-black/6" />
            <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 bg-zinc-300 rounded-full" />
            <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 bg-zinc-300 rounded-full" />

            {/* Card Content - Inset from the borders */}
            <div className="bg-white rounded-2xl p-6 flex flex-col gap-6 border border-zinc-100 transition-all duration-300">

                {/* 1. Stars */}
                <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                        <FaStar key={s} className="w-2.5 h-2.5 text-[#F15A29]" />
                    ))}
                </div>

                {/* 2. User Profile */}
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-zinc-100 overflow-hidden relative shrink-0">
                        <Image
                            src={data.avatar}
                            alt={data.name}
                            width={48}
                            height={48}
                            className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                    </div>
                    <div>
                        <h4 className="font-medium text-black text-base leading-tight">
                            {data.name}
                        </h4>
                        <p className="text-sm text-zinc-400 font-light">
                            {data.handle}
                        </p>
                    </div>
                </div>

                {/* 3. Review Text */}
                <p className="text-zinc-500 text-sm leading-relaxed flex-1 font-light">
                    {data.text}
                </p>

                {/* 4. Footer: Location // Date */}
                <div className="pt-2 border-t border-zinc-100/0">
                    <p className="text-sm text-black font-light opacity-90 flex items-center">
                        {data.tag}
                        <span className="text-zinc-400 mx-2">{'//'}</span>
                        <span className="text-zinc-400 font-light">
                            <EncryptedText text={data.date} />
                        </span>
                    </p>
                </div>
            </div>
        </m.div>
    );
};
