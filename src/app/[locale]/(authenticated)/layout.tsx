import { DashboardNavbar, DashboardFooter, Navbar } from "@/components/layout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-100/70 relative flex flex-col">
      <DashboardNavbar />
      {/* <Navbar /> */}
      <main className="relative z-10 flex-1">{children}</main>
      <DashboardFooter />
    </div>
  );
}
