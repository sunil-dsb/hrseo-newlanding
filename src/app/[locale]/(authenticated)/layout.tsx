import { DashboardFooter } from "@/components/layout/authenticated/DashboardFooter";
import { DashboardNavbar } from "@/components/layout/authenticated/DashboardNavbar";
import { DashboardNavbar2 } from "@/components/layout/authenticated/DashboardNavbar2";
import { Navbar } from "@/components/layout/authenticated/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-100/70 relative flex flex-col">
      <Navbar />
      <main className="relative z-10 flex-1">{children}</main>
      {/* <DashboardFooter /> */}
    </div>
  );
}
