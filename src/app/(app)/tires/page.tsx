"use client";

import { useEffect, useMemo, useState } from "react";
import { apiFetch } from "@/lib/api";
import Pagination from "@/components/Pagination";
import Drawer from "@/components/Drawer";
import TireForm from "@/components/TireForm";

type TireRow = {
  id: string;
  brand_name: string;
  size_name: string;
  identity: string;
  generation: string;
  price: string;
  stock_amount: number;
  company_name: string;
};

type PagedResponse<T> = {
  items: T[];
  total: number;
  page: number;
  per_page: number;
};

export default function TiresPage() {
  const [rows, setRows] = useState<TireRow[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const perPage = 10;

  async function load() {
    setLoading(true);
    setError("");
    try {
      const data = await apiFetch<PagedResponse<TireRow>>(
        `/api/tires?page=${page}&per_page=${perPage}&search=${encodeURIComponent(search)}`
      );

      console.log("data" ,data);
      setRows(data.items);
      setTotal(data.total);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Load tires failed");
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

  function openCreate() {
    setEditingId(null);
    setFormOpen(true);
  }

  function openEdit(id: string) {
    setEditingId(id);
    setFormOpen(true);
  }

  async function onDelete(id: string) {
    if (!window.confirm("ต้องการลบรายการนี้หรือไม่?")) return;
    try {
      await apiFetch(`/api/tires/${id}`, { method: "DELETE" });
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed");
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">ข้อมูลยาง</h1>
          <p className="text-sm text-slate-500">จัดการข้อมูลยางในระบบ</p>
        </div>
        <button
          onClick={openCreate}
          className="rounded-xl bg-gradient-to-r from-amber-600 to-amber-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-amber-200"
        >
          เพิ่มข้อมูลยาง
        </button>
      </div>

      <div className="rounded-2xl border border-amber-100 bg-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-50 px-5 py-4">
          <h2 className="text-sm font-semibold text-slate-700">รายการยาง</h2>
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="ค้นหา ยี่ห้อ/ขนาด/รหัส/บริษัท"
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
                <th className="px-5 py-3 text-left font-semibold">ขนาด</th>
                <th className="px-5 py-3 text-left font-semibold">รหัส</th>
                <th className="px-5 py-3 text-left font-semibold">รุ่น</th>
                <th className="px-5 py-3 text-left font-semibold">คงเหลือ</th>
                <th className="px-5 py-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={7} className="px-5 py-6 text-center text-slate-500">
                    Loading...
                  </td>
                </tr>
              ) : rows.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-5 py-6 text-center text-slate-500">
                    ไม่พบข้อมูล
                  </td>
                </tr>
              ) : (
                rows.map((row, idx) => (
                  <tr key={row.id} className="border-t border-amber-50">
                    <td className="px-5 py-3">{(page - 1) * perPage + idx + 1}</td>
                    <td className="px-5 py-3">{row.brand_name}</td>
                    <td className="px-5 py-3">{row.size_name}</td>
                    <td className="px-5 py-3">{row.identity}</td>
                    <td className="px-5 py-3">{row.generation}</td>
                    <td className="px-5 py-3">{row.stock_amount}</td>
                    <td className="px-5 py-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => openEdit(row.id)}
                          className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                        >
                          ดู/แก้ไข
                        </button>
                        <button
                          onClick={() => onDelete(row.id)}
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

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-amber-50 px-5 py-4">
          <p className="text-xs text-slate-500">แสดง {rows.length} จากทั้งหมด {total} รายการ</p>
          <Pagination current={page} totalPages={totalPages} onChange={setPage} />
        </div>
      </div>

      <Drawer
        open={formOpen}
        title={editingId ? "แก้ไขข้อมูลยาง" : "เพิ่มข้อมูลยาง"}
        onClose={() => setFormOpen(false)}
      >
        <TireForm
          tireId={editingId}
          onSaved={() => {
            setFormOpen(false);
            load();
          }}
        />
      </Drawer>
    </div>
  );
}
