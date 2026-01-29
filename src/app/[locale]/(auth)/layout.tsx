import dynamic from "next/dynamic";

const GridLines = dynamic(() =>
  import("@/components/layout/unauthenticated/GridLines").then(
    (mod) => mod.GridLines,
  ),
);

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-full bg-white relative flex flex-col font-sans overflow-hidden">
      <GridLines />
      <div
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 hidden md:block"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[url('/noise.gif')] opacity-[0.02]"></div>
      </div>
      <main className="relative z-10 w-full h-full flex flex-col justify-center items-center p-4 overflow-hidden">
        {children}
      </main>
    </div>
  );
}
