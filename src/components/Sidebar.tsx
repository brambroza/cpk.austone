"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";

type NavItem = {
  label: string;
  href: string;
  icon: string;
  roles?: string[];
};

type NavSection = {
  label: string;
  roles?: string[];
  items: NavItem[];
};

const navSections: NavSection[] = [
  {
    label: "overview",
    items: [{ label: "Dashboard", href: "/dashboard", icon: "📊" }],
  },
  {
    label: "จัดการผู้ใช้งาน",
    roles: ["R0001"],
    items: [{ label: "ข้อมูลผู้ใช้งาน", href: "/users", icon: "👥" }],
  },
  {
    label: "จัดการบริษัท",
    items: [
      { label: "ข้อมูลบริษัท", href: "/company", icon: "🏢", roles: ["R0001", "R0002"] },
      { label: "ข้อมูลรถ", href: "/car", icon: "🚚" },
    ],
  },
  {
    label: "Data",
    items: [{ label: "ข้อมูลยาง", href: "/tires", icon: "🛞", roles: ["R0001", "R0002"] }],
  },
  {
    label: "การจัดการ",
    roles: ["R0001"],
    items: [
      { label: "แบรนด์ยาง", href: "/brand-tires", icon: "🏷️" },
      { label: "แบรนด์รถ", href: "/brand-cars", icon: "🚗" },
      { label: "ตั้งขนาดยาง", href: "/tire-sizes", icon: "📏" },
    ],
  },
  {
    label: "คลังสินค้า",
    roles: ["R0001"],
    items: [{ label: "ข้อมูลคลังสินค้า", href: "/stock", icon: "📦" }],
  },
  {
    label: "Account",
    items: [
      { label: "My Profile", href: "/myprofile", icon: "🙍" },
      { label: "Change Password", href: "/change-password", icon: "🔐" },
    ],
  },
];

export default function Sidebar({
  open,
  collapsed,
  onClose,
}: {
  open: boolean;
  collapsed: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const [role, setRole] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = localStorage.getItem("user");
      if (raw) {
        const u = JSON.parse(raw);
        setRole(u?.user_role || "");
      }
    } catch {
      setRole("");
    }
  }, []);

  const visibleSections = useMemo(() => {
    const canShow = (roles?: string[]) => !roles || roles.includes(role);
    return navSections
      .filter((section) => canShow(section.roles))
      .map((section) => ({
        ...section,
        items: section.items.filter((item) => canShow(item.roles)),
      }))
      .filter((section) => section.items.length > 0);
  }, [role]);

  return (
    <>
      <div
        className={clsx(
          "fixed inset-0 z-30 bg-slate-900/40 transition-opacity lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
      />
      <aside
        className={clsx(
          "fixed left-0 top-0 z-40 h-full bg-gradient-to-b from-[#fff9df] via-[#f7ebbc] to-[#edd98b] text-slate-700 transition-all duration-200",
          open ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0",
          collapsed ? "lg:w-20" : "lg:w-64",
          "w-72 max-w-[85vw]"
        )}
      >
        <div className="flex items-center justify-between gap-3 px-5 py-5 lg:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-yellow/60 bg-[#EBC95E] font-bold text-slate-800">
              AT
            </div>
            {!collapsed && <div className="text-lg font-semibold text-slate-800">Austone Thailand</div>}
          </div>
          <button
            onClick={onClose}
            className="rounded-full border border-white/60 bg-white/65 px-3 py-2 text-sm font-semibold text-slate-700 lg:hidden"
          >
            ปิด
          </button>
        </div>
        <nav className="px-4 pb-6 space-y-5 overflow-y-auto">
          {visibleSections.map((section) => (
            <div key={section.label}>
              <p
                className={clsx(
                  "px-3 pb-2 text-xs uppercase tracking-wider text-slate-600",
                  collapsed && "hidden"
                )}
              >
                {section.label}
              </p>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={clsx(
                        "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition touch-manipulation",
                        active
                          ? "bg-white/80 text-slate-900 shadow-sm"
                          : "text-slate-700 hover:bg-white/45 hover:text-slate-900"
                      )}
                    >
                      <span className="text-lg">{item.icon}</span>
                      {!collapsed && (
                        <span className={clsx("text-slate-700", active && "text-slate-900")}>
                          {item.label}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
