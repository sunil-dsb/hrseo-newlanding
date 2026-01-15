import { GridLines, Navbar, Footer } from "@/components/layout";

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <GridLines />
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" aria-hidden="true">
                <div className="absolute inset-0 bg-[url('/noise.gif')] opacity-[0.04]"></div>
            </div>
            <Navbar />
            <div className="relative z-10">{children}</div>
            <Footer />
        </>
    );
}
