import { Hero, Pricing, TrustCTA } from "@/components/sections";
import { FAQ } from "@/components/sections/FAQ";
import { Testimonials } from "@/components/sections/Testimonials";
import Features from "@/components/sections/Features";
import { Steps } from "@/components/sections/Steps";
import { ToolsGrid } from "@/components/sections/ToolsGrid";

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
