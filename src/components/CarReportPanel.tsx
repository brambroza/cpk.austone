"use client";

import { useEffect, useRef, useState } from "react";
import { apiFetch } from "@/lib/api";
import { formatThaiCurrency } from "@/utils/format-number";

type ReportRow = {
  id: string;
  rid: number;
  check_date: string;
  distance: string;
  user_id: string;
  swap_logs: string[];
};

export default function CarReportPanel({
  carId,
  onEditCheck,
}: {
  carId: string;
  onEditCheck?: (checkId: string) => void;
}) {
  const [rows, setRows] = useState<ReportRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [open, setOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const lastUrlRef = useRef<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError("");
    apiFetch<{ items: ReportRow[] }>(`/api/cars/${carId}/checks/history`)
      .then((data) => setRows(data.items || []))
      .catch((err) => setError(err instanceof Error ? err.message : "Load report history failed"))
      .finally(() => setLoading(false));
  }, [carId]);



  const onEdit = (row: ReportRow) => {
    onEditCheck?.(row.id);
  };

  async function openReport(row: ReportRow) {

    setOpen(true);
    setLoading(true);
    setPdfUrl(null);
    const token = localStorage.getItem("access_token");
    const res = await fetch(`/api/cars/${carId}/checks/${row.id}/report.pdf`, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      credentials: "include",
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.log("PDF API FAIL:", res.status, text);
      throw new Error(`Load PDF failed (${res.status})`);
    }

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);

    lastUrlRef.current = url;
    setPdfUrl(url);
    setLoading(false);

    // window.open(url, "_blank");
  }
  const close = () => {
    setOpen(false);
  };


  return (
    <>

      <div className="space-y-4">
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
              <thead className="bg-amber-50 text-slate-600">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold">วันที่เช็ค</th>
                  <th className="px-4 py-2 text-left font-semibold">เลขไมล์</th>
                  <th className="px-4 py-2 text-left font-semibold">ผู้บันทึก</th>
                  <th className="px-4 py-2 text-left font-semibold">Action</th>
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
                      <td className="px-4 py-2">{formatThaiCurrency(row.distance ?? "0", { showSymbol: false, decimals: 0 })}  </td>
                      <td className="px-4 py-2">{row.user_id}</td>
                      <td className="px-4 py-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <button
                            type="button"
                            onClick={() => openReport(row)}
                            className="inline-flex h-8 items-center justify-center rounded-lg bg-amber-100 px-3 text-xs font-semibold text-amber-700 transition hover:bg-amber-200 active:scale-[0.99]"
                          >
                            PDF
                          </button>

                          <button
                            type="button"
                            onClick={() => onEdit(row)} // <- เปลี่ยนเป็นฟังก์ชันแก้ไขของคุณ
                            className="inline-flex h-8 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 active:scale-[0.99]"
                          >
                            แก้ไข
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-xl border border-amber-100 bg-white">
          <div className="border-b border-amber-50 px-4 py-3">
            <h3 className="text-sm font-semibold text-slate-700">ประวัติการสลับยาง</h3>
          </div>
          <div className="px-4 py-3 space-y-3 text-sm">
            {rows.length === 0 ? (
              <div className="text-slate-500">ยังไม่มีข้อมูลการสลับยาง</div>
            ) : (
              rows.map((row) => (
                <div key={row.id} className="rounded-lg border border-amber-50 bg-slate-50 p-3">
                  <div className="text-xs font-semibold text-slate-600">
                    {row.check_date} • {formatThaiCurrency(row.distance ?? "0", { showSymbol: false, decimals: 0 })} กม.
                  </div>
                  {row.swap_logs?.length ? (
                    <ul className="mt-2 space-y-1 text-xs text-slate-600">
                      {row.swap_logs.map((s, idx) => (
                        <li key={`${row.id}-swap-${idx}`}>{s}</li>
                      ))}
                    </ul>
                  ) : (
                    <div className="mt-2 text-xs text-slate-400">ไม่มีการสลับยาง</div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>



      {open && (
        <div className="fixed inset-0 z-[100]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"
            onClick={close}
          />

          {/* Modal */}
          <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-6">
            <div className="w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between border-b px-4 py-3 sm:px-5">
                <div className="text-base font-semibold text-slate-900">
                  รายงาน PDF
                </div>

                <button
                  onClick={close}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-slate-100"
                  aria-label="Close"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-slate-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Body */}
              <div className="h-[80vh] bg-slate-50">
                {loading && (
                  <div className="flex h-full flex-col items-center justify-center gap-3">
                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-slate-700" />
                    <div className="text-sm font-semibold text-slate-700">
                      กำลังโหลด PDF...
                    </div>
                  </div>
                )}

                {!loading && error && (
                  <div className="flex h-full flex-col items-start justify-center gap-1 p-6">
                    <div className="text-base font-semibold text-slate-900">
                      โหลด PDF ไม่สำเร็จ
                    </div>
                    <div className="text-sm text-slate-600">{error}</div>
                  </div>
                )}

                {!loading && !error && pdfUrl && (
                  <iframe
                    title="car-report-pdf"
                    src={pdfUrl}
                    className="h-full w-full"
                  />
                )}
              </div>

              {/* Footer */}
              <div className="flex flex-wrap items-center justify-end gap-2 border-t bg-white px-4 py-3 sm:px-5">
                {pdfUrl && (
                  <button
                    className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                    onClick={() => window.open(pdfUrl, "_blank", "noopener,noreferrer")}
                  >
                    เปิดแท็บใหม่
                  </button>
                )}

                {pdfUrl && (
                  <button
                    className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                    onClick={() => {
                      const a = document.createElement("a");
                      a.href = pdfUrl;
                      a.download = "report.pdf";
                      a.click();
                    }}
                  >
                    ดาวน์โหลด
                  </button>
                )}

                <button
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                  onClick={close}
                >
                  ปิด
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>



  );
}
