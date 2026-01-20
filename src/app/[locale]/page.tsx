import dynamic from 'next/dynamic';
import Hero from "@/components/sections/Hero"; // Static for LCP
const ToolsGrid = dynamic(() => import("@/components/sections/ToolsGrid").then(mod => mod.ToolsGrid));
import { setRequestLocale } from 'next-intl/server';

// Dynamic imports for below-the-fold sections
const Features = dynamic(() => import("@/components/sections/Features"));
const Steps = dynamic(() => import("@/components/sections/Steps").then(mod => mod.Steps));
const TrustCTA = dynamic(() => import("@/components/sections/TrustCTA"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(mod => mod.Testimonials));
const Pricing = dynamic(() => import("@/components/sections/Pricing"));
const FAQ = dynamic(() => import("@/components/sections/FAQ").then(mod => mod.FAQ));

export default async function Home({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    // Enable static rendering
    setRequestLocale(locale);

    return (
        <main>
            <Hero />
            <ToolsGrid />
            <Features />
            <Steps />
            <TrustCTA />
            <Testimonials />
            <Pricing />
            <FAQ />
        </main>
    );
}
