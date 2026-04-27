"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { apiFetch } from "@/lib/api";

type CheckRow = {
  id: string;
  check_date: string;
  distance: string;
  user_id: string;
};

type PagedResponse<T> = {
  items: T[];
  total: number;
  page: number;
  per_page: number;
};

export default function CarCheckPanel({
  carId,
  onSaved,
}: {
  carId: string;
  onSaved?: () => void;
}) {
  const [distance, setDistance] = useState("");
  const [rows, setRows] = useState<CheckRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const perPage = 10;

  async function load() {
    setLoading(true);
    setError("");
    try {
      const data = await apiFetch<PagedResponse<CheckRow>>(
        `/api/cars/${carId}/checks?page=1&per_page=${perPage}`
      );
      setRows(data.items);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Load check history failed");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, [carId]);

  const latestDistance = useMemo(() => {
    if (rows.length === 0) return "";
    return rows[0].distance || "";
  }, [rows]);

  async function submitCheck(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!distance.trim()) {
      setError("กรุณากรอกเลขไมล์");
      return;
    }

    setSaving(true);
    try {
      await apiFetch(`/api/cars/${carId}/checks`, {
        method: "POST",
        body: JSON.stringify({ distance: distance.trim() }),
      });
      setDistance("");
      await load();
      onSaved?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save check failed");
    } finally {
      setSaving(false);
    }
  }

  async function editDistance(row: CheckRow) {
    const nextDistance = window.prompt("แก้ไขเลขไมล์", row.distance || "");
    if (nextDistance === null) return;
    if (!nextDistance.trim()) {
      setError("เลขไมล์ห้ามว่าง");
      return;
    }

    setError("");
    try {
      await apiFetch(`/api/cars/${carId}/checks/${row.id}`, {
        method: "PUT",
        body: JSON.stringify({ distance: nextDistance.trim() }),
      });
      await load();
      onSaved?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Update check failed");
    }
  }

  return (
    <div className="space-y-4">
      <form onSubmit={submitCheck} className="rounded-xl border border-amber-100 bg-slate-50 p-4">
        <p className="text-sm font-semibold text-slate-700">บันทึกการเช็ค</p>
        {latestDistance && (
          <p className="mt-1 text-xs text-slate-500">เลขไมล์ล่าสุด: {latestDistance}</p>
        )}
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="w-full sm:max-w-xs">
            <label className="text-sm font-medium text-slate-600">เลขไมล์</label>
            <input
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              inputMode="decimal"
              className="mt-1 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
              placeholder="เช่น 150000"
            />
          </div>
          <button
            type="submit"
            disabled={saving}
            className="rounded-xl bg-gradient-to-r from-amber-600 to-amber-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-amber-200 disabled:opacity-60"
          >
            {saving ? "Saving..." : "บันทึกเช็ค"}
          </button>
        </div>
      </form>

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
          {error}
        </div>
      )}

      <div className="rounded-xl border border-amber-100 bg-white">
        <div className="border-b border-amber-50 px-4 py-3">
          <h3 className="text-sm font-semibold text-slate-700">ประวัติการเช็ค</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
           <thead className="bg-[#ffe14d] text-slate-700">
              <tr>
                <th className="px-4 py-2 text-left font-semibold">วันที่เช็ค</th>
                <th className="px-4 py-2 text-left font-semibold">เลขไมล์</th>
                <th className="px-4 py-2 text-left font-semibold">ผู้บันทึก</th>
                <th className="px-4 py-2 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={4} className="px-4 py-4 text-center text-slate-500">
                    Loading...
                  </td>
                </tr>
              ) : rows.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-4 py-4 text-center text-slate-500">
                    ยังไม่มีประวัติการเช็ค
                  </td>
                </tr>
              ) : (
                rows.map((row) => (
                  <tr key={row.id} className="border-t border-amber-50">
                    <td className="px-4 py-2">{row.check_date}</td>
                    <td className="px-4 py-2">{row.distance}</td>
                    <td className="px-4 py-2">{row.user_id}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => editDistance(row)}
                        className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                      >
                        แก้ไขเลขไมล์
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
