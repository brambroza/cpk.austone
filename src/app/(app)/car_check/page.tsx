"use client";

import { useEffect, useMemo, useState } from "react";
import { apiFetch } from "@/lib/api";
import Pagination from "@/components/Pagination";
import Drawer from "@/components/Drawer";
import CarCheckPanel from "@/components/CarCheckPanel";

type CarRow = {
  id: string;
  company: string;
  registration: string;
  brand: string;
  driver: string;
};

type PagedResponse<T> = {
  items: T[];
  total: number;
  page: number;
  per_page: number;
};

export default function CarCheckPage() {
  const [rows, setRows] = useState<CarRow[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeCar, setActiveCar] = useState<CarRow | null>(null);

  const perPage = 10;

  async function load() {
    setLoading(true);
    setError("");
    try {
      const data = await apiFetch<PagedResponse<CarRow>>(
        `/api/cars?page=${page}&per_page=${perPage}&search=${encodeURIComponent(search)}`
      );
      setRows(data.items);
      setTotal(data.total);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Load cars failed");
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

  function openCheck(row: CarRow) {
    setActiveCar(row);
    setDrawerOpen(true);
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Car Check</h1>
          <p className="text-sm text-slate-500">บันทึกและติดตามการเช็คสภาพรถ</p>
        </div>
      </div>

      <div className="rounded-2xl border border-amber-100 bg-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-50 px-5 py-4">
          <h2 className="text-sm font-semibold text-slate-700">เลือกรถเพื่อเช็ค</h2>
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="ค้นหา บริษัท/สาขา/ทะเบียน/ยี่ห้อ/พนักงานขับ"
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
                <th className="px-5 py-3 text-left font-semibold">บริษัท</th>
                <th className="px-5 py-3 text-left font-semibold">ทะเบียนรถ</th>
                <th className="px-5 py-3 text-left font-semibold">ยี่ห้อ</th>
                <th className="px-5 py-3 text-left font-semibold">ผขร.</th>
                <th className="px-5 py-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-5 py-6 text-center text-slate-500">
                    Loading...
                  </td>
                </tr>
              ) : rows.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-5 py-6 text-center text-slate-500">
                    ไม่พบข้อมูล
                  </td>
                </tr>
              ) : (
                rows.map((row, idx) => (
                  <tr key={row.id} className="border-t border-amber-50">
                    <td className="px-5 py-3">{(page - 1) * perPage + idx + 1}</td>
                    <td className="px-5 py-3">{row.company}</td>
                    <td className="px-5 py-3">{row.registration}</td>
                    <td className="px-5 py-3">{row.brand}</td>
                    <td className="px-5 py-3">{row.driver}</td>
                    <td className="px-5 py-3">
                      <button
                        onClick={() => openCheck(row)}
                        className="rounded-lg bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700"
                      >
                        เชคสภาพ
                      </button>
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
        open={drawerOpen}
        title={activeCar ? `เช็คสภาพรถ: ${activeCar.registration}` : "เช็คสภาพรถ"}
        onClose={() => setDrawerOpen(false)}
      >
        {activeCar && <CarCheckPanel carId={activeCar.id} />}
      </Drawer>
    </div>
  );
}
