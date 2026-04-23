"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Drawer({
  open,
  title,
  onClose,
  children,
}: {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // ปิดแล้ว reset กลับโหมดปกติ (กันค้าง fullscreen)
  useEffect(() => {
    if (!open) setIsFullscreen(false);
  }, [open]);

  const handleClose = () => {
    setIsFullscreen(false);
    onClose();
  };

  return (
    <div className={clsx("fixed inset-0 z-50", open ? "" : "pointer-events-none")}>
      {/* Backdrop */}
      <div
        className={clsx(
          "absolute inset-0 bg-slate-900/40 transition-opacity duration-200",
          open ? "opacity-100" : "opacity-0"
        )}
        onClick={handleClose}
      />

      {/* Panel */}
      <aside
        className={clsx(
          "absolute bg-white shadow-2xl transition-all duration-200 will-change-transform",
          isFullscreen
            ? // Fullscreen: เต็มจอ
              "inset-0"
            : // Normal: drawer ขวา สูงเต็ม
              "right-0 top-0 h-full w-full max-w-4xl",
          open
            ? "translate-x-0 opacity-100"
            : isFullscreen
              ? "translate-y-2 opacity-0"
              : "translate-x-full opacity-100"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-amber-100 px-6 py-4">
          <h2 className="text-lg font-semibold text-slate-900">{title}</h2>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsFullscreen((v) => !v)}
              className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-200"
            >
              {isFullscreen ? "ย่อ" : "เต็มจอ"}
            </button>

            <button
              type="button"
              onClick={handleClose}
              className="rounded-full bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-700 hover:bg-amber-100"
            >
              ปิด
            </button>
          </div>
        </div>

        {/* Content */}
        <div
          className={clsx(
            "overflow-y-auto p-6",
            isFullscreen ? "h-[calc(100%-64px)]" : "h-[calc(100%-64px)]"
          )}
        >
          {children}
        </div>
      </aside>
    </div>
  );
}
