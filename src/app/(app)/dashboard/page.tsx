"use client";

import { useCallback, useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";
import { AutoCompleteSelect } from "@/components/AutoComplete";
import StatCard from "@/components/StatCard";
import { formatThaiCurrency } from "@/utils/format-number";

type DashboardStats = {
  car_all: number;
  count_serviced: number;
  count_not_serviced: number;
  companies_active: number;
  users_active: number;
  tires_active: number;
  checks_today: number;
  checks_7d: number;
  checks_range: number;
  range_start: string;
  range_end: string;
  recent_checks: {
    id: string;
    car_registration: string;
    check_date: string;
    distance: string;
    company_name: string;
    count_log: number;

  }[];
  low_stock: {
    tire_id: string;
    identity: string;
    brand: string;
    amount: number;
  }[];
  checks_by_user: {
    user_id: string;
    label: string;
    count: number;
  }[];
};

type UserOption = { id: string; label: string };
type DashboardUsersResponse = {
  items: UserOption[];
};

 

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [userOptions, setUserOptions] = useState<UserOption[]>([]);
  const [filterUserId, setFilterUserId] = useState("");
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const loadStats = useCallback((start?: string, end?: string, userId?: string) => {
    setLoading(true);
    setError("");
    const params = new URLSearchParams();
    if (start) params.set("start_date", start);
    if (end) params.set("end_date", end);
    if (userId) params.set("user_id", userId);
    const query = params.toString();
    const path = query ? `/api/dashboard?${query}` : "/api/dashboard";
    apiFetch<DashboardStats>(path)
      .then((data) => setStats(data))
      .catch((e) => setError(e instanceof Error ? e.message : "Load dashboard failed"))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    loadStats();
  }, [loadStats]);

  useEffect(() => {
    apiFetch<DashboardUsersResponse>("/api/dashboard/users")
      .then((data) => setUserOptions(data.items || []))
      .catch(() => setUserOptions([]));
 
  }, []);

  useEffect(() => {
    if (startDate || endDate || filterUserId) {
      loadStats(startDate, endDate, filterUserId);
    }
  }, [startDate, endDate, filterUserId, loadStats]);

  const isRangeActive = Boolean(startDate || endDate || filterUserId);
  const recentChecks = stats?.recent_checks ?? [];
  const totalPages = Math.max(1, Math.ceil(recentChecks.length / pageSize));
  const safePage = Math.min(currentPage, totalPages);
  const pagedChecks = recentChecks.slice((safePage - 1) * pageSize, safePage * pageSize);
  const userChecks = stats?.checks_by_user ?? [];
  const maxUserCheck = Math.max(1, ...userChecks.map((item) => item.count || 0));
  const chartTicks = [0, 0.25, 0.5, 0.75, 1].map((ratio) =>
    Math.round(maxUserCheck * ratio)
  );

  return (
    <div className="space-y-6">


      <div className="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          {/* Left: Title */}
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
            <p className="text-sm text-slate-500">ภาพรวมสถานะรถในระบบ</p>
          </div>

          {/* Right: Search */}
          <div className="flex flex-wrap items-end gap-3 md:justify-end">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-600">วันที่เริ่มต้น</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="h-10 w-full min-w-[170px] rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-600">วันที่สิ้นสุด</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="h-10 w-full min-w-[170px] rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
              />
            </div>

            <div className="min-w-[220px]">
              <AutoCompleteSelect
                label="ผู้ดูแล"
                value={filterUserId}
                options={userOptions}
                placeholder="ทุกคน"
                onChange={(id) => {
                  setFilterUserId(id);
                  setCurrentPage(1);
                }}
              />
            </div>

            <button
              onClick={() => loadStats(startDate, endDate, filterUserId)}
              className="h-10 rounded-lg bg-amber-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-700 active:scale-[0.99]"
            >
              ค้นหา
            </button>

            {isRangeActive && (
              <button
                onClick={() => {
                  setStartDate("");
                  setEndDate("");
                  setFilterUserId("");
                  loadStats();
                }}
                className="h-10 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 active:scale-[0.99]"
              >
                ล้าง
              </button>
            )}
          </div>
        </div>
      </div>

      {loading ? (
        <div className="text-sm text-slate-500">Loading...</div>
      ) : error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
          {error}
        </div>
      ) : (
        <>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <StatCard
              title="จำนวนรถทั้งหมด"
              value={stats?.car_all ?? 0}
              hint="รวมทั้งหมดในระบบ"
              variant="primary"
            />
            <StatCard
              title="รถเข้ารับบริการ"
              value={stats?.count_serviced ?? 0}
              hint="มีประวัติการเช็ค"
              variant="success"
            />
            <StatCard
              title="รถไม่เข้ารับบริการ"
              value={stats?.count_not_serviced ?? 0}
              hint="ยังไม่มีประวัติ"
              variant="warning"
            />
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold text-slate-700">สรุปองค์กร</div>
              <div className="mt-4 grid gap-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">บริษัทที่ใช้งาน</span>
                  <span className="font-semibold text-slate-900">{stats?.companies_active ?? 0}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">ผู้ใช้งานทั้งหมด</span>
                  <span className="font-semibold text-slate-900">{stats?.users_active ?? 0}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">รายการยาง</span>
                  <span className="font-semibold text-slate-900">{stats?.tires_active ?? 0}</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold text-slate-700">การเช็คสภาพ</div>
              <div className="mt-4 grid gap-3 text-sm">
                {isRangeActive ? (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">ช่วงวันที่</span>
                    <span className="font-semibold text-slate-900">{stats?.checks_range ?? 0}</span>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">วันนี้</span>
                      <span className="font-semibold text-slate-900">{stats?.checks_today ?? 0}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">7 วันล่าสุด</span>
                      <span className="font-semibold text-slate-900">{stats?.checks_7d ?? 0}</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm lg:col-span-2">
              <div className="text-sm font-semibold text-slate-700">ผู้ตรวจเช็ค (Top 10)</div>
              {userChecks.length ? (
                <div className="mt-4 rounded-2xl border border-amber-200   p-4 shadow-inner">
                  <div className="text-xs font-semibold text-slate-700">จำนวนครั้งการสะสมแต่ละผู้ใช้งาน</div>
                  <div className="mt-4 grid grid-cols-[52px_1fr] gap-3">
                    <div className="relative flex flex-col justify-between text-[11px] text-slate-700">
                      {chartTicks.slice().reverse().map((tick, idx) => (
                        <div key={idx} className="flex h-10 items-center">
                          <span>{tick}</span>
                        </div>
                      ))}
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 grid grid-rows-4 gap-0">
                        {Array.from({ length: 4 }).map((_, idx) => (
                          <div key={idx} className="border-t border-amber-300/70" />
                        ))}
                      </div>
                      <div className="relative grid h-48 grid-cols-[repeat(auto-fit,minmax(56px,1fr))] items-end gap-3 px-2">
                        {userChecks.map((item) => {
                          const heightPx = Math.max(14, Math.round((item.count / maxUserCheck) * 176));
                          return (
                            <div key={item.user_id || item.label} className="flex flex-col items-center">
                              <div
                                className="w-full rounded-t-2xl bg-[#F2DF0A] shadow-sm transition"
                                style={{ height: `${heightPx}px` }}
                                title={`${item.label}: ${item.count}`}
                              />
                            </div>
                          );
                        })}
                      </div>
                      <div className="mt-3 grid grid-cols-[repeat(auto-fit,minmax(56px,1fr))] gap-3 px-2 text-[11px] text-slate-700">
                        {userChecks.map((item) => (
                          <div
                            key={`${item.user_id || item.label}-label`}
                            className="truncate text-center"
                            title={item.label}
                          >
                            {item.label}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-4 text-xs text-slate-500">ยังไม่มีข้อมูลการเช็ค</div>
              )}
            </div>

            {/* <div className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold text-slate-700">ยางคงเหลือน้อย</div>
              <div className="mt-4 space-y-3 text-sm">
                {stats?.low_stock?.length ? (
                  stats.low_stock.map((item) => (
                    <div key={item.tire_id} className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-slate-900">{item.identity || item.tire_id}</div>
                        <div className="text-xs text-slate-500">{item.brand}</div>
                      </div>
                      <span className="rounded-full bg-rose-50 px-2 py-1 text-xs font-semibold text-rose-600">
                        {item.amount}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="text-xs text-slate-500">ไม่มีรายการคงเหลือน้อย</div>
                )}
              </div>
            </div> */}
          </div>

          <div className="rounded-2xl border border-amber-100 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-amber-50 px-5 py-4">
              <h2 className="text-sm font-semibold text-slate-700">การเช็คล่าสุด</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
               <thead className="bg-[#ffe14d] text-slate-700">
                  <tr>
                    <th className="px-5 py-3 text-left font-semibold">ทะเบียนรถ</th>
                    <th className="px-5 py-3 text-left font-semibold">บริษัท</th>
                    <th className="px-5 py-3 text-left font-semibold">ครั้งที่</th>
                    <th className="px-5 py-3 text-left font-semibold">วันที่เช็ค</th>
                    <th className="px-5 py-3 text-left font-semibold">เลขไมล์</th>
                  </tr>
                </thead>
                <tbody>
                  {recentChecks.length ? (
                    pagedChecks.map((row, index) => (
                      <tr key={index} className="border-t border-amber-50">
                        <td className="px-5 py-3">{row.car_registration}</td>
                        <td className="px-5 py-3">{row.company_name}</td>
                        <td className="px-5 py-3">{row.count_log}</td>
                        <td className="px-5 py-3">{row.check_date}</td>
                        <td className="px-5 py-3">
                          {formatThaiCurrency(row.distance, { showSymbol: false, decimals: 0 })}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="px-5 py-6 text-center text-slate-500">
                        ยังไม่มีข้อมูล
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-amber-50 px-5 py-4 text-sm">
              <div className="flex items-center gap-2 text-slate-600">
                <span>แสดง</span>
                <select
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="h-9 rounded-lg border border-slate-200 bg-white px-2 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                </select>
                <span>รายการต่อหน้า</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={safePage <= 1}
                  className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  ก่อนหน้า
                </button>
                <span className="text-slate-500">
                  หน้า {safePage} / {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={safePage >= totalPages}
                  className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  ถัดไป
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
