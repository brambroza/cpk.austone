"use client";

import { useEffect, useMemo, useState } from "react";
import { apiFetch } from "@/lib/api";
import Pagination from "@/components/Pagination";

type StockRow = {
  id: string;
  identity: string;
  generation: string;
  brand: string;
  size: string;
  company: string;
  amount: number;
};

type PagedResponse<T> = {
  items: T[];
  total: number;
  page: number;
  per_page: number;
};

export default function StockPage() {
  const [rows, setRows] = useState<StockRow[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [dialog, setDialog] = useState<{
    open: boolean;
    mode: "add" | "minus";
    target?: StockRow;
  }>({ open: false, mode: "add" });
  const [amountInput, setAmountInput] = useState("");
  const [saving, setSaving] = useState(false);
  const perPage = 10;

  async function load() {
    setLoading(true);
    setError("");
    try {
      const data = await apiFetch<PagedResponse<StockRow>>(
        `/api/stock?page=${page}&per_page=${perPage}&search=${encodeURIComponent(search)}`
      );
      setRows(data.items);
      setTotal(data.total);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Load stock failed");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setPage(1);
      setSearch(searchInput.trim());
    }, 350);
    return () => window.clearTimeout(timer);
  }, [searchInput]);

  useEffect(() => {
    load();
  }, [page, search]);

  const totalPages = useMemo(() => Math.ceil(total / perPage), [total]);

  function openDialog(target: StockRow, mode: "add" | "minus") {
    setDialog({ open: true, mode, target });
    setAmountInput("");
  }

  async function submitAdjust() {
    if (!dialog.target) return;
    const amount = Number(amountInput);
    if (Number.isNaN(amount) || amount <= 0) {
      setError("จำนวนไม่ถูกต้อง");
      return;
    }
    setSaving(true);
    setError("");
    try {
      await apiFetch(`/api/stock/${dialog.target.id}/adjust`, {
        method: "POST",
        body: JSON.stringify({ method: dialog.mode, amount }),
      });
      setDialog({ open: false, mode: "add" });
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Update stock failed");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">ข้อมูลคลังสินค้า</h1>
          <p className="text-sm text-slate-500">ติดตามจำนวนยางคงเหลือ</p>
        </div>
      </div>

      <div className="rounded-2xl border border-amber-100 bg-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-50 px-5 py-4">
          <h2 className="text-sm font-semibold text-slate-700">รายการคลังสินค้า</h2>
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="ค้นหา..."
            className="w-full max-w-sm rounded-xl border border-amber-100 bg-slate-50 px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
          />
        </div>

        {error && (
          <div className="mx-5 mt-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
            {error}
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-[#ffe14d] text-slate-700">
              <tr>
                <th className="px-5 py-3 text-left font-semibold">No.</th>
                <th className="px-5 py-3 text-left font-semibold">ยี่ห้อ</th>
                <th className="px-5 py-3 text-left font-semibold">รุ่น/ขนาด</th>
                <th className="px-5 py-3 text-left font-semibold">ลายยาง</th>
                <th className="px-5 py-3 text-left font-semibold">บริษัท</th>
                <th className="px-5 py-3 text-left font-semibold">คงเหลือ(เส้น)</th>
                <th className="px-5 py-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={8} className="px-5 py-6 text-center text-slate-500">
                    Loading...
                  </td>
                </tr>
              ) : rows.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-5 py-6 text-center text-slate-500">
                    ไม่พบข้อมูล
                  </td>
                </tr>
              ) : (
                rows.map((row, idx) => (
                  <tr key={`${row.id}-${row.company || "na"}-${idx}`} className="border-t border-amber-50">
                    <td className="px-5 py-3">{(page - 1) * perPage + idx + 1}</td>

                    <td className="px-5 py-3">{row.brand}</td>
                    <td className="px-5 py-3">{row.size}</td>
                    <td className="px-5 py-3">{row.identity || row.id}</td>
                    {/* <td className="px-5 py-3">{row.generation}</td> */}
                    <td className="px-5 py-3">{row.company || "-"}</td>
                    <td className="px-5 py-3">{row.amount}</td>
                    <td className="px-5 py-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => openDialog(row, "add")}
                          className="rounded-lg bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700"
                        >
                          เพิ่ม
                        </button>
                        <button
                          onClick={() => openDialog(row, "minus")}
                          className="rounded-lg bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700"
                        >
                          ลด
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-amber-50 px-5 py-4">
          <p className="text-xs text-slate-500">แสดง {rows.length} จากทั้งหมด {total} รายการ</p>
          <Pagination current={page} totalPages={totalPages} onChange={setPage} />
        </div>
      </div>

      {dialog.open && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/40 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {dialog.mode === "add" ? "เพิ่มจำนวนสินค้า" : "ลดจำนวนสินค้า"}
                </h3>
                <p className="text-xs text-slate-500">
                  {dialog.target?.identity || dialog.target?.id} • {dialog.target?.brand} • {dialog.target?.size}
                  {dialog.target?.company ? ` • ${dialog.target.company}` : ""}
                </p>
              </div>
              <button
                onClick={() => setDialog({ open: false, mode: "add" })}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500"
              >
                ปิด
              </button>
            </div>

            <div className="mt-5">
              <label className="text-sm font-semibold text-slate-600">จำนวน</label>
              <input
                value={amountInput}
                onChange={(e) => setAmountInput(e.target.value)}
                inputMode="decimal"
                className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
                placeholder="กรอกจำนวน"
              />
              <p className="mt-2 text-xs text-slate-500">
                คงเหลือปัจจุบัน: {dialog.target?.amount}
              </p>
            </div>

            {error && (
              <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
                {error}
              </div>
            )}

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setDialog({ open: false, mode: "add" })}
                className="rounded-xl border border-amber-100 bg-white px-4 py-2 text-sm font-semibold text-slate-600"
              >
                ยกเลิก
              </button>
              <button
                onClick={submitAdjust}
                disabled={saving}
                className="rounded-xl bg-gradient-to-r from-amber-600 to-amber-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-amber-200"
              >
                {saving ? "Saving..." : "บันทึก"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
