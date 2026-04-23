"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";
import { AutoCompleteSelect } from "@/components/AutoComplete";

type Option = { value: string; label: string };

type CompanyFormData = {
  company_name: string;
  company_number: string;
  company_phone_number: string;
  company_email: string;
  company_website: string;
  customer_address: string;
  company_user_salse_provider: string;
  company_username: string;
  company_password?: string;
};

type CompanyOptions = {
  providers: Option[];
};

export default function CompanyForm({
  companyId,
  onSaved,
}: {
  companyId?: string | null;
  onSaved: () => void;
}) {
  const [options, setOptions] = useState<CompanyOptions>({ providers: [] });
  const [form, setForm] = useState<CompanyFormData>({
    company_name: "",
    company_number: "",
    company_phone_number: "",
    company_email: "",
    company_website: "",
    customer_address: "",
    company_user_salse_provider: "",
    company_username: "",
    company_password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    apiFetch<CompanyOptions>("/api/companies/options").then((data) => setOptions(data));
  }, []);

  useEffect(() => {
    if (!companyId) return;
    apiFetch<CompanyFormData>(`/api/companies/${companyId}`).then((data) => {
      setForm((prev) => ({ ...prev, ...data, company_password: "" }));
    });
  }, [companyId]);

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      if (companyId) {
        const payload: Record<string, string> = {
          company_name: form.company_name,
          company_number: form.company_number,
          company_phone_number: form.company_phone_number,
          company_email: form.company_email,
          company_website: form.company_website,
          customer_address: form.customer_address,
          company_user_salse_provider: form.company_user_salse_provider,
        };
        if (form.company_password) payload.company_password = form.company_password;
        await apiFetch(`/api/companies/${companyId}`, {
          method: "PUT",
          body: JSON.stringify(payload),
        });
      } else {
        await apiFetch(`/api/companies`, {
          method: "POST",
          body: JSON.stringify(form),
        });
      }
      onSaved();
    } catch (err) {
      console.log("err", err);
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" autoComplete="off">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-slate-600">ชื่อบริษัท</label>
          <input
            name="company_name"
            value={form.company_name}
            onChange={onChange}
            className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
            required
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-600">เลขทะเบียนนิติบุคคล</label>
          <input
            name="company_number"
            value={form.company_number}
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
            name="company_phone_number"
            value={form.company_phone_number}
            onChange={onChange}
            className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
            required
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-600">อีเมล</label>
          <input
            name="company_email"
            value={form.company_email}
            onChange={onChange}
            className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-slate-600">เว็บไซต์</label>
          <input
            name="company_website"
            value={form.company_website}
            onChange={onChange}
            className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
          />
        </div>
        <div>
          <AutoCompleteSelect
            label="ผู้ดูแล (Sales)"
            value={form.company_user_salse_provider}
            options={options.providers.map((opt) => ({ id: opt.value, label: opt.label }))}
            placeholder="กรุณาเลือก..."
            onChange={(id) => setForm((prev) => ({ ...prev, company_user_salse_provider: id }))}
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-600">ที่อยู่</label>
        <textarea
          name="customer_address"
          value={form.customer_address}
          onChange={onChange}
          className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
          rows={3}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-slate-600">Username บริษัท</label>
          <input
            name="company_username"
            value={form.company_username}
            onChange={onChange}
            className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
            required={!companyId}
            disabled={!!companyId}
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-600">
            {companyId ? "เปลี่ยนรหัสผ่าน (ถ้ามี)" : "Password"}
          </label>
          <input
            name="company_password"
            type="password"
            value={form.company_password}
            onChange={onChange}
            className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
            required={!companyId}
            autoComplete="new-password"

          />
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
