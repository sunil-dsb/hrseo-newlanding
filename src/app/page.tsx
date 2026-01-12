import dynamic from 'next/dynamic';
import Hero from "@/components/sections/Hero"; // Static for LCP
import { ToolsGrid } from "@/components/sections/ToolsGrid"; // Static for LCP

// Dynamic imports for below-the-fold sections
const Features = dynamic(() => import("@/components/sections/Features"));
const Steps = dynamic(() => import("@/components/sections/Steps").then(mod => mod.Steps));
const TrustCTA = dynamic(() => import("@/components/sections/TrustCTA"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(mod => mod.Testimonials));
const Pricing = dynamic(() => import("@/components/sections/Pricing"));
const FAQ = dynamic(() => import("@/components/sections/FAQ").then(mod => mod.FAQ));

export default function Home() {
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
