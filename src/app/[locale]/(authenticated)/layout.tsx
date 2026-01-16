import {
  DashboardNavbar,
  DashboardFooter,
  GridLines,
} from "@/components/layout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-brand-light/30 relative">
      {/* Background Glows */}
      <div className="fixed top-[-30%] right-[-10%] w-[1000px] h-[1000px] bg-brand-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-white/40 dark:bg-white/5 rounded-full blur-[80px] pointer-events-none" />

      <DashboardNavbar />
      <main className="relative z-10">{children}</main>
      <DashboardFooter />
    </div>
  );
}
