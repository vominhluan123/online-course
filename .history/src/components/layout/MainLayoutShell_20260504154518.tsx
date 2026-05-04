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
    <div className="grid grid-cols-1 md:grid-cols-[300px,minmax(0,1fr)] min-h-screen  bg-base text-base-foreground">
      <aside className="hidden md:block">
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
      <main className="min-w-0">
        <div className="p-4">
          <Header onMenuClick={() => setIsSidebarOpen(true)} />
          {children}
        </div>
      </main>
    </div>
  );
}
