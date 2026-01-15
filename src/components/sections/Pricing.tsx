'use client';

import { m } from 'framer-motion';
import React from 'react';
import { BlurFade } from '@/components/ui/Animators';
import { HiLightningBolt } from 'react-icons/hi';
import { LuMonitor } from 'react-icons/lu';
import { FaCheck } from 'react-icons/fa';
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { ButtonSlide } from '@/components/ui/ButtonSlide';
import { TextHighlight } from '@/components/ui/TextHighlight';
import { EncryptedText } from '@/components/ui/EncryptedText';
import { Link } from '@/i18n/routing';

const PROFESSIONAL_FEATURES = [
    'Up to 20 team members',
    'Advanced analytics',
    '25GB storage',
    'Priority email support',
    'API access'
];

const ENTERPRISE_FEATURES = [
    'Unlimited team members',
    'Custom analytics',
    'Unlimited storage',
    '24/7 phone & email support',
    'Advanced API access',
    'Custom integrations'
];

export default function Pricing() {
    const [billingCycle, setBillingCycle] = React.useState<'monthly' | 'yearly'>('monthly');

    return (
        <section className='py-24 px-6 relative' id="pricing">
            <div className='max-w-5xl 2xl:max-w-7xl mx-auto w-full'>
                <div className="text-center mb-16 space-y-4">
                    {/* Laurel Badge */}
                    <div className="flex items-center justify-center gap-1 mb-6">
                        {/* Left Laurel */}
                        <svg className="w-8 h-8 text-zinc-400 fill-current" viewBox="0 0 18 31" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M4.36545 28.8766C4.22762 28.7519 4.23298 28.5426 4.36462 28.4087C4.45623 28.3359 6.19603 26.4848 8.46656 26.4372C8.90234 26.4422 9.28654 26.459 9.64226 26.5862C9.06782 25.9887 8.5334 25.33 8.05056 24.6596C7.85578 24.7559 7.40308 24.9107 6.88724 25.0278C6.01031 25.227 4.78922 25.3483 3.64735 24.8796C1.55302 24.0551 0.625715 21.7177 0.602606 21.6189C0.567938 21.4708 0.624884 21.2498 0.779636 21.2147C0.882803 21.1913 3.24328 20.1352 5.32605 20.9103C5.68177 21.0375 6.06061 21.2635 6.32472 21.4635C6.15758 20.9814 5.99044 20.4994 5.86333 19.9562L5.70156 19.265C5.11102 19.2951 2.92056 19.2205 1.5191 17.8747C-0.0833263 16.3666 -0.0189819 13.8559 0.00949097 13.7454C0.0264091 13.5856 0.158049 13.4517 0.312801 13.4166C0.41597 13.3931 3.04758 13.2635 4.65001 14.7717C4.93723 15.0704 5.17287 15.3809 5.35693 15.7031C5.40149 14.965 5.48608 14.1658 5.64536 13.4536C5.11177 13.2628 3.12061 12.4149 2.33197 10.67C1.43397 8.68986 2.51927 6.36335 2.5593 6.30226C2.6278 6.1307 2.83414 6.08385 3.00044 6.09808C3.11517 6.12403 5.59369 6.96521 6.44011 8.95703C6.58414 9.34033 6.71661 9.67426 6.75747 10.081C7.12309 9.32195 7.4887 8.56291 7.9806 7.87919C7.55554 7.4557 6.11942 5.9618 6.1161 4.09052C6.09502 1.91126 8.02424 0.173124 8.11586 0.100318C8.2475 -0.0335781 8.46539 -0.031059 8.60322 0.0936431C8.67792 0.180683 10.5845 1.82776 10.6056 4.00702C10.5965 5.3611 9.84752 6.57121 9.30403 7.26664C9.30403 7.26664 9.25245 7.27836 9.264 7.32773C6.42652 10.9882 5.43699 15.581 6.59706 19.8416C7.96514 24.991 12.2211 29.0166 17.7394 30.3115C17.9172 30.3752 18.015 30.561 17.9981 30.7208C17.9696 30.8313 17.8896 30.9534 17.7348 30.9886C17.6832 31.0003 17.6317 31.012 17.5685 30.9744C15.7214 30.5098 14.0344 29.8009 12.5075 28.8476C12.1526 29.1882 10.9847 30.2334 9.43722 30.5849C9.12771 30.6551 8.85824 30.6643 8.53718 30.6852C6.26666 30.7329 4.44014 28.9636 4.36545 28.8766Z" fill="currentColor" />
                        </svg>

                        <span className="text-lg md:text-xl font-medium text-zinc-600">
                            HRSEO Pricing
                        </span>

                        {/* Right Laurel - Mirrored */}
                        <svg className="w-8 h-8 text-zinc-400 fill-current transform -scale-x-100" viewBox="0 0 18 31" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M4.36545 28.8766C4.22762 28.7519 4.23298 28.5426 4.36462 28.4087C4.45623 28.3359 6.19603 26.4848 8.46656 26.4372C8.90234 26.4422 9.28654 26.459 9.64226 26.5862C9.06782 25.9887 8.5334 25.33 8.05056 24.6596C7.85578 24.7559 7.40308 24.9107 6.88724 25.0278C6.01031 25.227 4.78922 25.3483 3.64735 24.8796C1.55302 24.0551 0.625715 21.7177 0.602606 21.6189C0.567938 21.4708 0.624884 21.2498 0.779636 21.2147C0.882803 21.1913 3.24328 20.1352 5.32605 20.9103C5.68177 21.0375 6.06061 21.2635 6.32472 21.4635C6.15758 20.9814 5.99044 20.4994 5.86333 19.9562L5.70156 19.265C5.11102 19.2951 2.92056 19.2205 1.5191 17.8747C-0.0833263 16.3666 -0.0189819 13.8559 0.00949097 13.7454C0.0264091 13.5856 0.158049 13.4517 0.312801 13.4166C0.41597 13.3931 3.04758 13.2635 4.65001 14.7717C4.93723 15.0704 5.17287 15.3809 5.35693 15.7031C5.40149 14.965 5.48608 14.1658 5.64536 13.4536C5.11177 13.2628 3.12061 12.4149 2.33197 10.67C1.43397 8.68986 2.51927 6.36335 2.5593 6.30226C2.6278 6.1307 2.83414 6.08385 3.00044 6.09808C3.11517 6.12403 5.59369 6.96521 6.44011 8.95703C6.58414 9.34033 6.71661 9.67426 6.75747 10.081C7.12309 9.32195 7.4887 8.56291 7.9806 7.87919C7.55554 7.4557 6.11942 5.9618 6.1161 4.09052C6.09502 1.91126 8.02424 0.173124 8.11586 0.100318C8.2475 -0.0335781 8.46539 -0.031059 8.60322 0.0936431C8.67792 0.180683 10.5845 1.82776 10.6056 4.00702C10.5965 5.3611 9.84752 6.57121 9.30403 7.26664C9.30403 7.26664 9.25245 7.27836 9.264 7.32773C6.42652 10.9882 5.43699 15.581 6.59706 19.8416C7.96514 24.991 12.2211 29.0166 17.7394 30.3115C17.9172 30.3752 18.015 30.561 17.9981 30.7208C17.9696 30.8313 17.8896 30.9534 17.7348 30.9886C17.6832 31.0003 17.6317 31.012 17.5685 30.9744C15.7214 30.5098 14.0344 29.8009 12.5075 28.8476C12.1526 29.1882 10.9847 30.2334 9.43722 30.5849C9.12771 30.6551 8.85824 30.6643 8.53718 30.6852C6.26666 30.7329 4.44014 28.9636 4.36545 28.8766Z" fill="currentColor" />
                        </svg>

                        <span className="text-lg md:text-xl font-medium text-zinc-600">
                            HRSEO Pricing
                        </span>

                        {/* Right Laurel - Mirrored */}
                        <svg className="w-8 h-8 text-zinc-400 fill-current transform -scale-x-100" viewBox="0 0 18 31" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M4.36545 28.8766C4.22762 28.7519 4.23298 28.5426 4.36462 28.4087C4.45623 28.3359 6.19603 26.4848 8.46656 26.4372C8.90234 26.4422 9.28654 26.459 9.64226 26.5862C9.06782 25.9887 8.5334 25.33 8.05056 24.6596C7.85578 24.7559 7.40308 24.9107 6.88724 25.0278C6.01031 25.227 4.78922 25.3483 3.64735 24.8796C1.55302 24.0551 0.625715 21.7177 0.602606 21.6189C0.567938 21.4708 0.624884 21.2498 0.779636 21.2147C0.882803 21.1913 3.24328 20.1352 5.32605 20.9103C5.68177 21.0375 6.06061 21.2635 6.32472 21.4635C6.15758 20.9814 5.99044 20.4994 5.86333 19.9562L5.70156 19.265C5.11102 19.2951 2.92056 19.2205 1.5191 17.8747C-0.0833263 16.3666 -0.0189819 13.8559 0.00949097 13.7454C0.0264091 13.5856 0.158049 13.4517 0.312801 13.4166C0.41597 13.3931 3.04758 13.2635 4.65001 14.7717C4.93723 15.0704 5.17287 15.3809 5.35693 15.7031C5.40149 14.965 5.48608 14.1658 5.64536 13.4536C5.11177 13.2628 3.12061 12.4149 2.33197 10.67C1.43397 8.68986 2.51927 6.36335 2.5593 6.30226C2.6278 6.1307 2.83414 6.08385 3.00044 6.09808C3.11517 6.12403 5.59369 6.96521 6.44011 8.95703C6.58414 9.34033 6.71661 9.67426 6.75747 10.081C7.12309 9.32195 7.4887 8.56291 7.9806 7.87919C7.55554 7.4557 6.11942 5.9618 6.1161 4.09052C6.09502 1.91126 8.02424 0.173124 8.11586 0.100318C8.2475 -0.0335781 8.46539 -0.031059 8.60322 0.0936431C8.67792 0.180683 10.5845 1.82776 10.6056 4.00702C10.5965 5.3611 9.84752 6.57121 9.30403 7.26664C9.30403 7.26664 9.25245 7.27836 9.264 7.32773C6.42652 10.9882 5.43699 15.581 6.59706 19.8416C7.96514 24.991 12.2211 29.0166 17.7394 30.3115C17.9172 30.3752 18.015 30.561 17.9981 30.7208C17.9696 30.8313 17.8896 30.9534 17.7348 30.9886C17.6832 31.0003 17.6317 31.012 17.5685 30.9744C15.7214 30.5098 14.0344 29.8009 12.5075 28.8476C12.1526 29.1882 10.9847 30.2334 9.43722 30.5849C9.12771 30.6551 8.85824 30.6643 8.53718 30.6852C6.26666 30.7329 4.44014 28.9636 4.36545 28.8766Z" fill="currentColor" />
                        </svg>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black">
                        <span className="block mb-1">
                            <TextHighlight>Simple{" "} </TextHighlight> {" "} Pricing.
                        </span>
                        <span className="block">Zero - Hidden Fees.</span>
                    </h2>
                    <p className="text-zinc-500 text-lg font-light max-w-2xl mx-auto min-[2560px]:text-xl">
                        Simple pricing for creators, teams, and agencies.
                    </p>
                </div>

                {/* Toggle - Button Animation */}
                <div className="flex justify-center items-center mb-12 relative z-10" role="group" aria-label="Billing frequency">
                    <button
                        onClick={() => setBillingCycle('monthly')}
                        aria-pressed={billingCycle === 'monthly'}
                        className={`btn-anim relative overflow-hidden font-bold text-sm transition-all duration-300 w-32 ${billingCycle === 'monthly'
                            ? 'bg-black text-white shadow-xl shadow-black/10 rounded-full'
                            : 'bg-zinc-200 text-zinc-500 hover:bg-zinc-200 rounded-lg'
                            }`}
                    >
                        <div className='span-visible py-3'>
                            <span>Monthly</span>
                        </div>
                        <div className='span-hidden absolute inset-0 py-3'>
                            <span>Monthly</span>
                        </div>
                    </button>

                    <div className="relative">
                        <button
                            onClick={() => setBillingCycle('yearly')}
                            aria-pressed={billingCycle === 'yearly'}
                            className={`btn-anim relative overflow-hidden font-bold text-sm transition-all duration-300 w-32 ${billingCycle === 'yearly'
                                ? 'bg-black text-white shadow-xl shadow-black/10 rounded-full'
                                : 'bg-zinc-200 text-zinc-500 hover:bg-zinc-200 rounded-lg'
                                }`}
                        >
                            <div className='span-visible py-3'>
                                <span>Yearly</span>
                            </div>
                            <div className='span-hidden absolute inset-0 py-3'>
                                <span>Yearly</span>
                            </div>
                        </button>

                        <m.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="absolute -top-14 -right-20 hidden md:block"
                        >
                            <div className="relative flex flex-col items-center">
                                <div className="w-8 h-8 text-[#F15A29] mb-1 transform rotate-12">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 32" fill="currentColor">
                                        <path d="M0 30.7837L1.24998 30.9926L1.62857 31.5964C1.45886 29.6382 4.50712 28.7243 5.21208 26.864C5.42421 26.3027 4.76822 26.208 4.56913 26.3843C4.52018 26.4267 4.33089 27.1121 3.92945 27.5331C3.58351 27.8921 2.02674 29.6284 1.63183 29.3151C2.1377 24.2498 3.34526 19.6056 5.93335 15.1964C11.2009 6.21156 20.7308 1.28669 30.9689 0.457718C15.8484 -0.181961 2.73822 12.5268 1.29894 27.3569C0.443859 27.0142 1.35769 24.2368 0 24.4228L0 30.7804L0 30.7837Z" />
                                    </svg>
                                </div>
                                <p className="text-[#F15A29] font-bold text-sm leading-tight text-center transform rotate-6" style={{ fontFamily: 'cursive' }}>
                                    <EncryptedText text="Save 20%" />
                                    <br />
                                    <EncryptedText text="per yearly" />
                                </p>
                            </div>
                        </m.div>
                    </div>
                </div>

                <div className='grid md:grid-cols-2 gap-8 md:gap-6 px-4 md:px-8'>
                    <BlurFade delay={0.1}>
                        <div className='bg-white rounded-2xl p-8 sm:p-10 h-full flex flex-col relative overflow-hidden group border border-zinc-200 shadow-sm transition-all hover:shadow-lg hover:shadow-black/5'>
                            <div className='flex justify-between items-start mb-6'>
                                <div className='w-14 h-14 rounded-2xl border border-zinc-100 bg-zinc-50 flex items-center justify-center text-black'>
                                    <LuMonitor className="w-7 h-7" />
                                </div>
                                <div className='flex flex-col items-end'>
                                    <div className='text-4xl font-bold tracking-tight min-[2560px]:text-5xl'>
                                        ${billingCycle === 'monthly' ? '79' : '63'}
                                    </div>
                                    <div className='text-zinc-500 text-sm font-medium min-[2560px]:text-base'>
                                        /month
                                        {billingCycle === 'yearly' && <span className="block text-xs text-zinc-400 font-normal min-[2560px]:text-sm">billed yearly</span>}
                                    </div>
                                </div>
                            </div>

                            <div className='mb-8'>
                                <h3 className='text-xl font-bold mb-1 min-[2560px]:text-2xl'>Professional</h3>
                                <p className='text-zinc-500 text-sm min-[2560px]:text-base'>Ideal for growing businesses.</p>
                            </div>

                            <Link href="/signup" className="w-full block mb-10">
                                <ButtonSlide
                                    as="div"
                                    variant="light"
                                    className="w-full min-[2560px]:text-lg min-[2560px]:px-8 min-[2560px]:py-4"
                                    icon={
                                        <div className='rounded-full bg-white p-2 transition-colors duration-300 group-hover:bg-[#F15A29] group-hover:text-white'>
                                            <HiLightningBolt className="w-3.5 h-3.5 min-[2560px]:w-5 min-[2560px]:h-5" />
                                        </div>
                                    }
                                >
                                    Get Started
                                </ButtonSlide>
                            </Link>

                            <div className='space-y-4 mb-auto'>
                                <p className='text-sm font-medium text-zinc-900 min-[2560px]:text-base'>What&apos;s Included</p>
                                <ul className='space-y-3'>
                                    {PROFESSIONAL_FEATURES.map((item, i) => (
                                        <li key={i} className='flex items-center gap-3 text-sm text-zinc-600 min-[2560px]:text-base'>
                                            <span className='w-5 h-5 min-[2560px]:w-6 min-[2560px]:h-6 rounded-full bg-zinc-100 flex items-center justify-center shrink-0'>
                                                <FaCheck className="text-zinc-500 w-2.5 h-2.5 min-[2560px]:w-3.5 min-[2560px]:h-3.5" />
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </BlurFade>

                    <BlurFade delay={0.2}>
                        <div className='bg-white rounded-2xl p-8 sm:p-10 h-full flex flex-col relative overflow-hidden group border border-zinc-200 shadow-sm transition-all hover:shadow-lg hover:shadow-black/5'>
                            <div className='flex justify-between items-start mb-6'>
                                <div className='w-14 h-14 rounded-2xl border border-zinc-100 bg-zinc-50 flex items-center justify-center text-black'>
                                    <HiOutlineOfficeBuilding className="w-7 h-7" />
                                </div>
                                <div className='flex flex-col items-end'>
                                    <div className='text-4xl font-bold tracking-tight min-[2560px]:text-5xl'>
                                        ${billingCycle === 'monthly' ? '199' : '159'}
                                    </div>
                                    <div className='text-zinc-500 text-sm font-medium min-[2560px]:text-base'>
                                        /month
                                        {billingCycle === 'yearly' && <span className="block text-xs text-zinc-400 font-normal min-[2560px]:text-sm">billed yearly</span>}
                                    </div>
                                </div>
                            </div>

                            <div className='mb-8'>
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className='text-xl font-bold min-[2560px]:text-2xl'>Enterprise</h3>
                                </div>
                                <p className='text-zinc-500 text-sm min-[2560px]:text-base'>For large organizations with complex needs.</p>
                            </div>

                            <Link href="/contact" className="w-full block mb-10">
                                <ButtonSlide
                                    as="div"
                                    variant="dark"
                                    className="w-full min-[2560px]:text-lg min-[2560px]:px-8 min-[2560px]:py-4"
                                    icon={
                                        <div className="w-6 h-6 rounded-full bg-[#F15A29] flex items-center justify-center text-white transition-colors duration-300 group-hover:bg-zinc-700">
                                            <HiLightningBolt className="w-3.5 h-3.5 min-[2560px]:w-5 min-[2560px]:h-5" />
                                        </div>
                                    }
                                >
                                    Start Building
                                </ButtonSlide>
                            </Link>

                            <div className='space-y-4 mb-auto'>
                                <p className='text-sm font-medium text-zinc-900 min-[2560px]:text-base'>What&apos;s Included</p>
                                <ul className='space-y-3'>
                                    {ENTERPRISE_FEATURES.map((item, i) => (
                                        <li key={i} className='flex items-center gap-3 text-sm text-zinc-600 min-[2560px]:text-base'>
                                            <span className='w-5 h-5 min-[2560px]:w-6 min-[2560px]:h-6 rounded-full bg-[#F15A29] flex items-center justify-center shrink-0'>
                                                <FaCheck className="text-white w-2.5 h-2.5 min-[2560px]:w-3.5 min-[2560px]:h-3.5" />
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </BlurFade>
                </div>
            </div>
        </section >
    );
}
