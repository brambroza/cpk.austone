"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";

type Option = { value: string; label: string };

type UserFormData = {
  user_username: string;
  user_password?: string;
  user_firstname: string;
  user_lastname: string;
  user_phone: string;
  user_role: string;
  user_email: string;
  user_commission: string;
};

type UserOptions = {
  roles: Option[];
};

export default function UserForm({
  userId,
  onSaved,
}: {
  userId?: string | null;
  onSaved: () => void;
}) {
  const [options, setOptions] = useState<UserOptions>({ roles: [] });
  const [form, setForm] = useState<UserFormData>({
    user_username: "",
    user_password: "",
    user_firstname: "",
    user_lastname: "",
    user_phone: "",
    user_role: "",
    user_email: "",
    user_commission: "Active",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    apiFetch<UserOptions>("/api/users/options").then((data) => setOptions(data));
  }, []);

  useEffect(() => {
    if (!userId) return;
    apiFetch<UserFormData>(`/api/users/${userId}`).then((data) => {
      setForm((prev) => ({ ...prev, ...data, user_password: "" }));
    });
  }, [userId]);

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      if (userId) {
        const payload: Record<string, string> = {
          user_firstname: form.user_firstname,
          user_lastname: form.user_lastname,
          user_phone: form.user_phone,
          user_role: form.user_role,
          user_email: form.user_email,
          user_commission: form.user_commission,
        };
        if (form.user_password) payload.user_password = form.user_password;
        await apiFetch(`/api/users/${userId}`, {
          method: "PUT",
          body: JSON.stringify(payload),
        });
      } else {
        await apiFetch(`/api/users`, {
          method: "POST",
          body: JSON.stringify(form),
        });
      }
      onSaved();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-slate-600">Username</label>
          <input
            name="user_username"
            value={form.user_username}
            onChange={onChange}
            className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
            required
            disabled={!!userId}
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-600">
            {userId ? "ตั้งรหัสผ่านใหม่ (ถ้ามี)" : "Password"}
          </label>
          <input
            name="user_password"
            type="password"
            value={form.user_password}
            onChange={onChange}
            className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
            required={!userId}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-slate-600">ชื่อ</label>
          <input
            name="user_firstname"
            value={form.user_firstname}
            onChange={onChange}
            className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
            required
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-600">นามสกุล</label>
          <input
            name="user_lastname"
            value={form.user_lastname}
            onChange={onChange}
            className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
            required
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-slate-600">เบอร์โทร</label>
          <input
            name="user_phone"
            value={form.user_phone}
            onChange={onChange}
            className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
            required
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-600">อีเมล</label>
          <input
            name="user_email"
            value={form.user_email}
            onChange={onChange}
            className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-slate-600">Role</label>
          <select
            name="user_role"
            value={form.user_role}
            onChange={onChange}
            className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
            required
          >
            <option value="">กรุณาเลือก...</option>
            {options.roles.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-600">สถานะ</label>
          <select
            name="user_commission"
            value={form.user_commission}
            onChange={onChange}
            className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
          {error}
        </div>
      )}

      <div className="flex justify-end gap-3 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-gradient-to-r from-amber-600 to-amber-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-amber-200"
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  );
}
