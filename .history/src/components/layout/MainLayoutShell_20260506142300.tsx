"use client";

import Sidebar from "@/components/layout/Sidebar";
import { Header } from "@/components/ui";
import { useState } from "react";

export default function MainLayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-base text-base-foreground">
      <aside className="hidden md:block fixed top-0 left-0 h-screen w-[300px]">
        <Sidebar />
      </aside>

      <main className="min-w-0 md:ml-[300px]">
        <div className="sticky top-0 z-50 md:p-4 p-0">
          <Header onMenuClick={() => setIsSidebarOpen(true)} />
        </div>

        <div className="p-6 md:p-4">{children}</div>
      </main>
    </div>
  );
}
