"use client";

import { useEffect, useMemo, useState } from "react";
import { apiFetch } from "@/lib/api";
import Pagination from "@/components/Pagination";
import Drawer from "@/components/Drawer";
import CarForm from "@/components/CarForm";
import CarCheckFull from "@/components/CarCheckFull";
import CarReportPanel from "@/components/CarReportPanel";

type CarRow = {
  id: string;
  company: string;
  registration: string;
  brand: string;
  driver: string;
  last_check_date?: string;
  last_check_distance?: string;
  last_check_round?: number;
};

type PagedResponse<T> = {
  items: T[];
  total: number;
  page: number;
  per_page: number;
};

export default function CarsPage() {
  const [rows, setRows] = useState<CarRow[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [formDrawerOpen, setFormDrawerOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [checkDrawerOpen, setCheckDrawerOpen] = useState(false);
  const [checkingCar, setCheckingCar] = useState<CarRow | null>(null);
  const [editingCheckLogId, setEditingCheckLogId] = useState<string | null>(null);
  const [reportDrawerOpen, setReportDrawerOpen] = useState(false);
  const [reportCar, setReportCar] = useState<CarRow | null>(null);

  const perPage = 10;
  const [reloadKeys, setReloadKeys] = useState(0);

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
      setRows([]);
      setTotal(0);
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

  function openCreate() {
    setReloadKeys((prev) => prev + 1);
    setEditingId(null);
    setFormDrawerOpen(true);
  }

  function openEdit(id: string) {
    setReloadKeys((prev) => prev + 1);
    setEditingId(id);
    setFormDrawerOpen(true);
  }

  function openCheck(row: CarRow) {
    setReloadKeys((prev) => prev + 1);
    setCheckingCar(row);
    setEditingCheckLogId(null);
    setCheckDrawerOpen(true);
  }

  function openReport(row: CarRow) {
    setReloadKeys((prev) => prev + 1);
    setReportCar(row);
    setReportDrawerOpen(true);
  }

  function openCheckEditFromReport(checkId: string) {
    if (!reportCar) return;
    setReloadKeys((prev) => prev + 1);
    setEditingCheckLogId(checkId);
    setCheckingCar(reportCar);
    setReportDrawerOpen(false);
    setCheckDrawerOpen(true);
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">ข้อมูลรถ</h1>
          <p className="text-sm text-slate-500">จัดการข้อมูลรถทั้งหมด</p>
        </div>
        <button
          onClick={openCreate}
          className="rounded-xl bg-gradient-to-r from-amber-600 to-amber-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-amber-200"
        >
          เพิ่มรายการรถ
        </button>
      </div>

      <div className="rounded-2xl border border-amber-100 bg-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-50 px-5 py-4">
          <h2 className="text-sm font-semibold text-slate-700">รายการรถ</h2>
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
                <th className="px-5 py-3 text-left font-semibold">ครั้งล่าสุด</th>
                <th className="px-5 py-3 text-left font-semibold">เช็คล่าสุด</th> 
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
                  <tr key={row.id} className="border-t border-amber-50">
                    <td className="px-5 py-3">{(page - 1) * perPage + idx + 1}</td>
                    <td className="px-5 py-3">{row.company}</td>
                    <td className="px-5 py-3">{row.registration}</td>
                    <td className="px-5 py-3">{row.brand}</td>
                    <td className="px-5 py-3">{row.driver}</td>
                    <td className="px-5 py-3">{row.last_check_round ? `ครั้งที่ ${row.last_check_round}` : "-"}</td>
                    <td className="px-5 py-3">{row.last_check_date || "-"}</td>
                   
                    <td className="px-5 py-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => openCheck(row)}
                          className="rounded-lg bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700"
                        >
                          เชค
                        </button>
                        <button
                          onClick={() => openReport(row)}
                          className="rounded-lg bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700"
                        >
                          รายงาน
                        </button>
                        <button
                          onClick={() => openEdit(row.id)}
                          className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                        >
                          ดู/แก้ไข
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
        open={formDrawerOpen}
      
        title={editingId ? "แก้ไขข้อมูลรถ" : "เพิ่มข้อมูลรถ"}
        onClose={() => setFormDrawerOpen(false)}
      >
        <CarForm
          key={reloadKeys}
          carId={editingId}
          onSaved={() => {
            setFormDrawerOpen(false);
            load();
          }}
        />
      </Drawer>

      <Drawer
        open={checkDrawerOpen}
     
        title={checkingCar ? `เช็คสภาพรถทะเบียน: ${checkingCar.registration}` : "เช็คสภาพรถทะเบียน"}
        onClose={() => setCheckDrawerOpen(false)}
        
      >
        {checkingCar && (
          <CarCheckFull key={reloadKeys} carId={checkingCar.id} editCheckId={editingCheckLogId}  onClose={() => setCheckDrawerOpen(false)} />
        )}
      </Drawer>

      <Drawer
        open={reportDrawerOpen}
        title={reportCar ? `รายงานรถ: ${reportCar.registration}` : "รายงานรถ"}
        onClose={() => setReportDrawerOpen(false)}
      >
        {reportCar && (
          <CarReportPanel key={reloadKeys} carId={reportCar.id} onEditCheck={openCheckEditFromReport} />
        )}
      </Drawer>
    </div>
  );
}
