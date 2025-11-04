import type { Metadata } from "next";

import { AppSidebar } from "@/components/admin/navbar/side-bar";

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { SiteHeader } from '@/components/admin/site-header'


export const metadata: Metadata = {
  title: "Hiplando",
  description: "Hiplando admin dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (


    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >

      <div className="w-screen h-screen text-foreground flex">
        <AppSidebar />
        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="px-4 lg:px-6 flex flex-1">
                {children}
              </div>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>


  );
}


