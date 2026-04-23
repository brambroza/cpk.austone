"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { clearAuth } from "@/lib/api";

export default function Topbar({ onToggle ,collapsed }: { onToggle: () => void; collapsed: boolean }) {
  const router = useRouter();
  const [userName, setUserName] = useState("Administrator");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raw = typeof window !== "undefined" ? localStorage.getItem("user") : null;
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw);
      setUserName(parsed?.user_name || parsed?.user_username || "Administrator");
    } catch {
      setUserName("Administrator");
    }
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function onLogout() {
    clearAuth();
    router.replace("/login");
  }

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-amber-100">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <button
          onClick={onToggle}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-600 to-amber-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-amber-200"
        >
          <span className="text-base">☰</span>
          <span className="hidden sm:inline">{collapsed? 'แสดง' : 'ย่อ'}</span>
          <span className="sm:hidden">เมนู</span>
        </button>
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex items-center gap-3 rounded-full border border-amber-100 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm"
          >
            <span className="h-8 w-8 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs">
              {userName?.[0]?.toUpperCase() || "U"}
            </span>
            <span className="hidden sm:inline">{userName}</span>
            <span className="text-slate-400">▾</span>
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-3 w-52 rounded-2xl border border-amber-100 bg-white p-2 shadow-xl">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  router.push("/myprofile");
                }}
                className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm text-slate-600 hover:bg-amber-50"
              >
                <span>🙍</span>
                <span>โปรไฟล์</span>
              </button>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  router.push("/change-password");
                }}
                className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm text-slate-600 hover:bg-amber-50"
              >
                <span>🔐</span>
                <span>เปลี่ยนรหัสผ่าน</span>
              </button>
              <div className="my-2 h-px bg-amber-100" />
              <button
                onClick={onLogout}
                className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50"
              >
                <span>↩</span>
                <span>ออกจากระบบ</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
