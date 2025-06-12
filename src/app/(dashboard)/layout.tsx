import { ReactNode } from "react";

import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";
import { DashboardNavBar } from "@/modules/dashboard/ui/components/dashboard-navbar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="flex flex-col h-screen w-screen bg-muted">
        <DashboardNavBar />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default layout;
