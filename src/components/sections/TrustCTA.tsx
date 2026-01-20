'use client';

import { m } from 'framer-motion';
import Image from 'next/image';
import { BlurFade, TextHighlight } from '@/components/ui/Animators';
import { EncryptedText } from '@/components/ui/EncryptedText';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

export default function TrustCTA() {
    return (
        <section className='py-20 px-6'>
            <div className='max-w-5xl 2xl:max-w-7xl container-4k mx-auto w-full'>
                <BlurFade delay={0.1}>
                    <div className='relative w-full rounded-2xl overflow-hidden h-[36rem] bg-zinc-900 group'>
                        <Image
                            src="/assets/demo-thumbnail.jpg"
                            alt="Workspace"
                            fill
                            className='object-cover opacity-70 transition-transform duration-700'
                            quality={95}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                        />

                        <div className='absolute inset-0 p-4 sm:p-12 md:p-16 flex flex-col justify-between text-center md:text-left'>
                            <div className='max-w-3xl relative z-10 mt-auto mb-12'>
                                <h2 className='text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-white leading-[0.9] mb-6'>
                                    <span className='relative inline-block mr-3'>
                                        <TextHighlight className="text-white px-2">Trusted</TextHighlight>
                                    </span>
                                    by
                                    <br className="hidden md:block" />
                                    creators like you.
                                </h2>
                                <p className='text-zinc-300 text-lg font-light max-w-sm'>
                                    Real feedback from users who&apos;ve built smarter, faster, and better.
                                </p>
                            </div>

                            <div className='flex flex-col md:flex-row items-center md:items-end justify-between gap-8 relative z-10 w-full'>
                                <m.a
                                    href="#reviews"
                                    whileHover={{ x: 5 }}
                                    className='inline-flex items-center gap-2 text-white hover:text-[#F15A29] transition-colors text-lg'
                                >
                                    <EncryptedText text="Leave a review" />
                                    <FiArrowUpRight className="w-5 h-5" aria-hidden="true" />
                                </m.a>

                                <div className='flex items-center gap-4 p-2'>
                                    <div className='flex -space-x-4' aria-hidden="true">
                                        {[
                                            "/assets/avatar-1.jpg",
                                            "/assets/avatar-2.jpg",
                                            "/assets/avatar-3.jpg",
                                            "/assets/avatar-4.jpg",
                                            "/assets/avatar-1.jpg"
                                        ].map((img, i) => (
                                            <div
                                                key={i}
                                                className='w-10 h-10 rounded-full border-2 border-zinc-900 ring-1 ring-white/10 overflow-hidden bg-zinc-800'
                                            >
                                                <Image
                                                    src={img}
                                                    alt=""
                                                    width={40}
                                                    height={40}
                                                    className="w-full h-full object-cover grayscale opacity-80"
                                                    sizes="40px"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className='flex flex-col text-center md:text-left'>
                                        <div className='flex items-center gap-1.5' aria-label="4.9 out of 5 stars" role="img">
                                            <span className='text-white font-bold text-base' aria-hidden="true">4.9/5</span>
                                            <span className='flex text-[#F15A29] gap-0.5'>
                                                {[1, 2, 3, 4, 5].map((s) => (
                                                    <FaStar key={s} className="w-3 h-3" aria-hidden="true" />
                                                ))}
                                            </span>
                                        </div>
                                        <p className='text-xs text-zinc-300 font-medium'>
                                            Loved by 5,833+ creators
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </BlurFade>
            </div>
        </section>
    );
}
