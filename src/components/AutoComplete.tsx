import React, { useEffect, useMemo, useRef, useState } from "react";

type TireOption = {
  id: string;
  label: string;
};

export function AutoCompleteSelect({
  label,
  value,
  options,
  placeholder = "กรุณาเลือก...",
  onChange,
}: {
  label: string;
  value: string;
  options: TireOption[];
  placeholder?: string;
  onChange: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const selected = useMemo(
    () => options.find((x) => x.id === value) ?? null,
    [options, value]
  );

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return options;
    return options.filter((o) => o.label.toLowerCase().includes(s));
  }, [options, q]);

  useEffect(() => {
    const onDocDown = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocDown);
    return () => document.removeEventListener("mousedown", onDocDown);
  }, []);

  useEffect(() => {
    if (open) setQ(selected?.label ?? "");
  }, [open, selected]);

  const commit = (id: string) => {
    onChange(id);
    setOpen(false);
    const picked = options.find((x) => x.id === id);
    setQ(picked?.label ?? "");
  };

  return (
    <div ref={wrapRef} className="relative">
      <label className="text-sm font-semibold text-slate-600">{label}</label>
      <div className="mt-2">
        <div
          className={[
            "flex items-center gap-2 rounded-xl border bg-white px-3 py-2 text-sm",
            open ? "border-amber-300 ring-4 ring-amber-100" : "border-amber-100",
          ].join(" ")}
          onClick={() => {
            setOpen(true);
            requestAnimationFrame(() => inputRef.current?.focus());
          }}
        >
          <input
            ref={inputRef}
            value={open ? q : selected?.label ?? ""}
            onChange={(e) => {
              setQ(e.target.value);
              setOpen(true);
            }}
            placeholder={placeholder}
            className="w-full bg-transparent outline-none placeholder:text-slate-400"
          />

          {value ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onChange("");
                setQ("");
                setOpen(false);
              }}
              className="rounded-md px-1 text-slate-400 hover:text-slate-600"
              aria-label="clear"
              title="ล้าง"
            >
              ✕
            </button>
          ) : null}

          <span className="select-none text-slate-400">▾</span>
        </div>
      </div>

      {open && (
        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
          <div className="max-h-64 overflow-auto py-1">
            <button
              type="button"
              onClick={() => commit("")}
              className="w-full px-3 py-2 text-left text-sm text-slate-600 hover:bg-slate-50"
            >
              {placeholder}
            </button>

            {filtered.length ? (
              filtered.map((opt, idx) => {
                const active = opt.id === value;
                return (
                  <button
                    key={`${opt.id}-${opt.label}-${idx}`}
                    type="button"
                    onClick={() => commit(opt.id)}
                    className={[
                      "w-full px-3 py-2 text-left text-sm",
                      active
                        ? "bg-amber-50 text-amber-700"
                        : "text-slate-700 hover:bg-slate-50",
                    ].join(" ")}
                  >
                    {opt.label}
                  </button>
                );
              })
            ) : (
              <div className="px-3 py-3 text-sm text-slate-500">ไม่พบข้อมูลที่ค้นหา</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export function TireSearchSelect({
  label = "ยาง (รุ่น/ขนาด)",
  value,
  options,
  placeholder = "กรุณาเลือก...",
  onChange,
}: {
  label?: string;
  value: string; // opt.id
  options: TireOption[];
  placeholder?: string;
  onChange: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

 

  const selected = useMemo(
    () => options.find((x) => x.id === value) ?? null,
    [options, value]
  );

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return options;
    return options.filter((o) => o.label.toLowerCase().includes(s));
  }, [options, q]);

  // ปิด dropdown เมื่อคลิกนอกกรอบ
  useEffect(() => {
    const onDocDown = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocDown);
    return () => document.removeEventListener("mousedown", onDocDown);
  }, []);

  // เวลาเปิด ให้ sync q เป็น label ที่เลือกไว้ (หรือว่าง)
  useEffect(() => {
    if (open) setQ(selected?.label ?? "");
  }, [open, selected]);

  const commit = (id: string) => {
    onChange(id);
    setOpen(false);
    // หลังเลือก กรอง q เป็น label ที่เลือกไว้
    const picked = options.find((x) => x.id === id);
    setQ(picked?.label ?? "");
  };

  return (
    <div ref={wrapRef} className="relative">
      <label className="text-sm font-semibold text-slate-600">{label}</label>

      {/* Input (แทน select) */}
      <div className="mt-2">
        <div
          className={[
            "flex items-center gap-2 rounded-xl border bg-white px-3 py-2 text-sm",
            open ? "border-amber-300 ring-4 ring-amber-100" : "border-amber-100",
          ].join(" ")}
          onClick={() => {
            setOpen(true);
            requestAnimationFrame(() => inputRef.current?.focus());
          }}
        >
          <input
            ref={inputRef}
            value={open ? q : selected?.label ?? ""}
            onChange={(e) => {

              setQ(e.target.value);
              setOpen(true);
            }}
            placeholder={placeholder}
            className="w-full bg-transparent outline-none placeholder:text-slate-400"
          />

          {/* Clear */}
          {value ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onChange("");
                setQ("");
                setOpen(false);
              }}
              className="rounded-md px-1 text-slate-400 hover:text-slate-600"
              aria-label="clear"
              title="ล้าง"
            >
              ✕
            </button>
          ) : null}

          {/* Chevron */}
          <span className="select-none text-slate-400">▾</span>
        </div>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
          <div className="max-h-64 overflow-auto py-1">
            {/* ตัวเลือก default */}
            <button
              type="button"
              onClick={() => commit("")}
              className="w-full px-3 py-2 text-left text-sm text-slate-600 hover:bg-slate-50"
            >
              {placeholder}
            </button>

            {filtered.length ? (
              filtered.map((opt) => {
                const active = opt.id === value;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => commit(opt.id)}
                    className={[
                      "w-full px-3 py-2 text-left text-sm",
                      active
                        ? "bg-amber-50 text-amber-700"
                        : "text-slate-700 hover:bg-slate-50",
                    ].join(" ")}
                  >
                    {opt.label}
                  </button>
                );
              })
            ) : (
              <div className="px-3 py-3 text-sm text-slate-500">
                ไม่พบข้อมูลที่ค้นหา
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
