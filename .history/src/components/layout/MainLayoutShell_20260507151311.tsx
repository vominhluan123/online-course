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
    <div className="min-h-screen bg-red text-base-foreground">
      <aside className="hidden md:block  fixed top-0 left-0 h-screen w-[300px]">
        <Sidebar />
      </aside>
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsSidebarOpen(false)}
          />
          <aside
            className="relative z-10 h-full w-[300px] max-w-[85vw]"
            onClick={() => setIsSidebarOpen(false)}
          >
            <Sidebar />
          </aside>
        </div>
      )}
      <main className="min-w-0 md:ml-[300px]">
        <div className="sticky top-0 z-40 md:p-4 p-0">
          <Header onMenuClick={() => setIsSidebarOpen(true)} />
        </div>
        <div className="p-6 md:p-4">{children}</div>
      </main>
    </div>
  );
}
