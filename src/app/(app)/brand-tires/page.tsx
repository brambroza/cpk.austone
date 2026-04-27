"use client";

import { useEffect, useMemo, useState } from "react";
import { apiFetch } from "@/lib/api";
import Pagination from "@/components/Pagination";

type BrandRow = { id: string; name: string };

export default function BrandTiresPage() {
  const [rows, setRows] = useState<BrandRow[]>([]);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 12;

  async function load() {
    setLoading(true);
    setError("");
    try {
      const data = await apiFetch<{ items: BrandRow[] }>(
        `/api/brand-tires?search=${encodeURIComponent(search)}`
      );
      setRows(data.items);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Load brands failed");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setSearch(searchInput.trim());
      setPage(1);
    }, 300);
    return () => window.clearTimeout(timer);
  }, [searchInput]);

  useEffect(() => {
    load();
  }, [search]);

  async function onAdd() {
    if (!name.trim()) return;
    setError("");
    try {
      await apiFetch("/api/brand-tires", {
        method: "POST",
        body: JSON.stringify({ name: name.trim() }),
      });
      setName("");
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Create failed");
    }
  }

  async function onEdit(row: BrandRow) {
    const nextName = window.prompt("แก้ไขชื่อยี่ห้อ", row.name);
    if (!nextName) return;
    try {
      await apiFetch(`/api/brand-tires/${row.id}`, {
        method: "PUT",
        body: JSON.stringify({ name: nextName.trim() }),
      });
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Update failed");
    }
  }

  async function onDelete(row: BrandRow) {
    if (!window.confirm("ต้องการลบรายการนี้หรือไม่?")) return;
    try {
      await apiFetch(`/api/brand-tires/${row.id}`, { method: "DELETE" });
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed");
    }
  }

  const totalPages = useMemo(() => Math.ceil(rows.length / perPage), [rows.length]);
  const pageRows = rows.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">ยี่ห้อยาง</h1>
          <p className="text-sm text-slate-500">จัดการยี่ห้อยางในระบบ</p>
        </div>
      </div>

      <div className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-end gap-3">
          <div className="flex-1 min-w-[240px]">
            <label className="text-sm font-semibold text-slate-600">ชื่อยี่ห้อใหม่</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
              placeholder="เช่น MICHELIN"
            />
          </div>
          <button
            onClick={onAdd}
            className="rounded-xl bg-gradient-to-r from-amber-600 to-amber-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-amber-200"
          >
            เพิ่มยี่ห้อ
          </button>
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="ค้นหา..."
            className="ml-auto w-full max-w-xs rounded-xl border border-amber-100 bg-slate-50 px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
          />
        </div>
      </div>

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
          {error}
        </div>
      )}

      <div className="rounded-2xl border border-amber-100 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-[#ffe14d] text-slate-700">
              <tr>
                <th className="px-5 py-3 text-left font-semibold">No.</th>
                <th className="px-5 py-3 text-left font-semibold">รหัส</th>
                <th className="px-5 py-3 text-left font-semibold">ชื่อยี่ห้อ</th>
                <th className="px-5 py-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={4} className="px-5 py-6 text-center text-slate-500">
                    Loading...
                  </td>
                </tr>
              ) : pageRows.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-5 py-6 text-center text-slate-500">
                    ไม่พบข้อมูล
                  </td>
                </tr>
              ) : (
                pageRows.map((row, idx) => (
                  <tr key={row.id} className="border-t border-amber-50">
                    <td className="px-5 py-3">{(page - 1) * perPage + idx + 1}</td>
                    <td className="px-5 py-3">{row.id}</td>
                    <td className="px-5 py-3">{row.name}</td>
                    <td className="px-5 py-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => onEdit(row)}
                          className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                        >
                          แก้ไข
                        </button>
                        <button
                          onClick={() => onDelete(row)}
                          className="rounded-lg bg-red-100 px-3 py-1 text-xs font-semibold text-red-600"
                        >
                          ลบ
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="border-t border-amber-50 px-5 py-4">
          <Pagination current={page} totalPages={totalPages} onChange={setPage} />
        </div>
      </div>
    </div>
  );
}
