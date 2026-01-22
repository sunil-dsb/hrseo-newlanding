import { Navbar } from "@/components/layout";
import dynamic from "next/dynamic";
const GridLines = dynamic(() =>
  import("@/components/layout").then((mod) => mod.GridLines),
);
const Footer = dynamic(() =>
  import("@/components/layout").then((mod) => mod.Footer),
);

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GridLines />
      <div
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 hidden md:block"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[url('/noise.gif')] opacity-[0.02]"></div>
      </div>
      <Navbar />
      <div className="relative z-10">{children}</div>
      <Footer />
    </>
  );
}
