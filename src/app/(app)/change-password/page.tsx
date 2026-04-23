"use client";

import { useState } from "react";
import { apiFetch } from "@/lib/api";

export default function ChangePasswordPage() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (newPassword !== confirm) {
      setError("ยืนยันรหัสผ่านใหม่ไม่ตรงกัน");
      return;
    }
    setLoading(true);
    try {
      await apiFetch("/api/change_password", {
        method: "POST",
        body: JSON.stringify({
          old_password: oldPassword,
          new_password: newPassword,
          confirm_password: confirm,
        }),
      });
      setOldPassword("");
      setNewPassword("");
      setConfirm("");
      setSuccess("เปลี่ยนรหัสผ่านเรียบร้อย");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Change password failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6 max-w-xl">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Change Password</h1>
        <p className="text-sm text-slate-500">อัปเดตรหัสผ่านสำหรับบัญชีของคุณ</p>
      </div>

      <form onSubmit={onSubmit} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm space-y-4">
        <div>
          <label className="text-sm font-semibold text-slate-600">รหัสผ่านเดิม</label>
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
            required
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-600">รหัสผ่านใหม่</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
            required
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-600">ยืนยันรหัสผ่านใหม่</label>
          <input
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
            required
          />
        </div>

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
            {error}
          </div>
        )}
        {success && (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
            {success}
          </div>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-gradient-to-r from-amber-600 to-amber-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-amber-200"
          >
            {loading ? "Saving..." : "บันทึก"}
          </button>
        </div>
      </form>
    </div>
  );
}
