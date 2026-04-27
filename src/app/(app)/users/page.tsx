"use client";

import { useEffect, useMemo, useState } from "react";
import { apiFetch } from "@/lib/api";
import Pagination from "@/components/Pagination";
import Drawer from "@/components/Drawer";
import UserForm from "@/components/UserForm";

type UserRow = {
  id: string;
  username: string;
  name: string;
  status: string;
  phone: string;
};

type PagedResponse<T> = {
  items: T[];
  total: number;
  page: number;
  per_page: number;
};

export default function UsersPage() {
  const [rows, setRows] = useState<UserRow[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const perPage = 10;

  const [reloadKeys, setReloadKeys] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError("");
    apiFetch<PagedResponse<UserRow>>(
      `/api/users?page=${page}&per_page=${perPage}&search=${encodeURIComponent(search)}`
    )
      .then((data) => {
        setRows(data.items);
        setTotal(data.total);
      })
      .catch((err) => setError(err instanceof Error ? err.message : "Load users failed"))
      .finally(() => setLoading(false));
  }, [page, search]);

  const totalPages = useMemo(() => Math.ceil(total / perPage), [total]);

  function openCreate() {
    setReloadKeys((prev) => prev + 1);
    setEditingId(null);
    setFormOpen(true);
  }

  function openEdit(id: string) {
    setReloadKeys((prev) => prev + 1);
    setEditingId(id);
    setFormOpen(true);
  }

  async function onDeactivate(id: string) {
    if (!window.confirm("ต้องการปิดใช้งานผู้ใช้นี้หรือไม่?")) return;
    setError("");
    try {
      await apiFetch(`/api/users/${id}`, { method: "DELETE" });
      const data = await apiFetch<PagedResponse<UserRow>>(
        `/api/users?page=${page}&per_page=${perPage}&search=${encodeURIComponent(search)}`
      );
      setRows(data.items);
      setTotal(data.total);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Deactivate failed");
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">ข้อมูลผู้ใช้งาน</h1>
          <p className="text-sm text-slate-500">จัดการผู้ใช้งานในระบบ</p>
        </div>
        <button
          onClick={openCreate}
          className="rounded-xl bg-gradient-to-r from-amber-600 to-amber-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-amber-200"
        >
          เพิ่มผู้ใช้งาน
        </button>
      </div>

      <div className="rounded-2xl border border-amber-100 bg-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-50 px-5 py-4">
          <h2 className="text-sm font-semibold text-slate-700">รายการผู้ใช้งาน</h2>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="ค้นหา..."
            className="w-full max-w-xs rounded-xl border border-amber-100 bg-slate-50 px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
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
                <th className="px-5 py-3 text-left font-semibold">รหัสผู้ใช้งาน</th>
                <th className="px-5 py-3 text-left font-semibold">ชื่อ</th>
                <th className="px-5 py-3 text-left font-semibold">สถานะ</th>
                <th className="px-5 py-3 text-left font-semibold">เบอร์โทร</th>
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
                    <td className="px-5 py-3">{row.username}</td>
                    <td className="px-5 py-3">{row.name}</td>
                    <td className="px-5 py-3">
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${row.status === "Active" ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-500"}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-5 py-3">{row.phone}</td>
                    <td className="px-5 py-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => openEdit(row.id)}
                          className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                        >
                          ดู/แก้ไข
                        </button>
                        <button
                          onClick={() => onDeactivate(row.id)}
                          className="rounded-lg bg-red-100 px-3 py-1 text-xs font-semibold text-red-600"
                        >
                          ปิดใช้งาน
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

      <Drawer
        open={formOpen}
        title={editingId ? "แก้ไขผู้ใช้งาน" : "เพิ่มผู้ใช้งาน"}
        onClose={() => setFormOpen(false)}
        key={reloadKeys}
      >
        <UserForm
          userId={editingId}
          onSaved={() => {
            setFormOpen(false);
            const reload = async () => {
              setLoading(true);
              const data = await apiFetch<PagedResponse<UserRow>>(
                `/api/users?page=${page}&per_page=${perPage}&search=${encodeURIComponent(search)}`
              );
              setRows(data.items);
              setTotal(data.total);
              setLoading(false);
            };
            reload();
          }}
        />
      </Drawer>
    </div>
  );
}
