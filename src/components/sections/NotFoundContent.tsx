'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ButtonSlide } from '@/components/ui/ButtonSlide';
import { TextHighlight } from '@/components/ui/TextHighlight';
import { BlurFade } from '@/components/ui/Animators';
import { EncryptedText } from '@/components/ui/EncryptedText';
import { FiArrowLeft } from 'react-icons/fi';
import { FaGhost } from 'react-icons/fa';
import { m, useMotionValue, useSpring } from 'framer-motion';
import { GridLines } from '@/components/layout';

export function NotFoundContent() {
    const t = useTranslations('NotFound');

    // Mouse movement logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 50, damping: 10 });
    const mouseY = useSpring(y, { stiffness: 50, damping: 10 });

    function handleMouseMove({ clientX, clientY, currentTarget }: React.MouseEvent) {
        const { width, height, left, top } = currentTarget.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        x.set((clientX - centerX) / 15);
        y.set((clientY - centerY) / 15);
    }

    return (
        <div
            onMouseMove={handleMouseMove}
            className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden px-4 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-zinc-50/50 to-white"
        >
            <GridLines />
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" aria-hidden="true">
                <div className="absolute inset-0 bg-[url('/noise.gif')] opacity-[0.04]"></div>
            </div>

            {/* Background Decor */}
            <m.div
                animate={{ opacity: [0.03, 0.06, 0.03] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-bold select-none">
                    404
                </div>
            </m.div>

            <div className="relative z-10 text-center max-w-2xl mx-auto space-y-8 flex-1 flex flex-col justify-center">
                <BlurFade delay={0.1}>
                    {/* Interactive Wrapper for Mouse Follow */}
                    <m.div style={{ x: mouseX, y: mouseY }}>
                        {/* Floating Animation Wrapper */}
                        <m.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="inline-flex items-center justify-center w-20 h-20 mb-4 text-zinc-400 drop-shadow-[0_15px_15px_rgba(0,0,0,0.05)]"
                            aria-hidden="true"
                        >
                            <FaGhost className="w-10 h-10" />
                        </m.div>
                    </m.div>
                </BlurFade>

                <div className="space-y-4">
                    <BlurFade delay={0.2}>
                        <div className="text-sm font-bold tracking-widest text-[#F15A29] uppercase mb-2">
                            <EncryptedText text={t('label')} />
                        </div>
                    </BlurFade>

                    <BlurFade delay={0.3}>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black">
                            {t.rich('title', {
                                highlight: (chunks) => (
                                    <TextHighlight className="decoration-[#F15A29]/30">
                                        {chunks}
                                    </TextHighlight>
                                )
                            })}
                        </h1>
                    </BlurFade>

                    <BlurFade delay={0.4}>
                        <p className="text-lg md:text-xl text-zinc-500 font-light max-w-lg mx-auto leading-relaxed">
                            {t('description')}
                        </p>
                    </BlurFade>
                </div>
            </div>

            <BlurFade delay={0.5} className="pb-12 mt-auto">
                <div className="flex justify-center">
                    <Link href="/">
                        <ButtonSlide
                            as="div"
                            variant="dark"
                            className="px-8 py-4 rounded-full"
                            icon={<FiArrowLeft className="w-4 h-4" aria-hidden="true" />}
                        >
                            {t('homeButton')}
                        </ButtonSlide>
                    </Link>
                </div>
            </BlurFade>
        </div>
    );
}
