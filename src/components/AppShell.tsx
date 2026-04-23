"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import AuthGate from "@/components/AuthGate";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  function handleToggle() {
    if (window.matchMedia("(max-width: 1024px)").matches) {
      setSidebarOpen((prev) => !prev);
    } else {
      setCollapsed((prev) => !prev);
    }
  }

  return (
    <AuthGate>
      <div className="min-h-screen bg-slate-50">
        <Sidebar open={sidebarOpen} collapsed={collapsed} onClose={() => setSidebarOpen(false)} />
        <div className={`transition-all ${collapsed ? "lg:pl-20" : "lg:pl-64"}`}>
          <Topbar onToggle={handleToggle} collapsed={collapsed} />
          <main className="px-6 pb-10 pt-6 lg:px-8">{children}</main>
        </div>
      </div>
    </AuthGate>
  );
}
