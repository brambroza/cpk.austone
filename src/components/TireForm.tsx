"use client";

import { useEffect, useState } from "react";
import { apiBase, apiFetch } from "@/lib/api";
import { AutoCompleteSelect } from "@/components/AutoComplete";

type Option = { value: string; label: string };

type TireOptions = {
  companies: Option[];
  brands: Option[];
  sizes: Option[];
};

type TireFormData = {
  tire_brand: string;
  tire_size: string;
  tire_identity: string;
  tire_dive: string;
  tire_price: string;
  tire_generation: string;
  tire_company_id?: string;
  tire_pric1?: string;
  tire_pric2?: string;
  tire_pric3?: string;
  tire_pric_m?: string;
};

export default function TireForm({
  tireId,
  onSaved,
}: {
  tireId?: string | null;
  onSaved: () => void;
}) {
  const [options, setOptions] = useState<TireOptions>({
    companies: [],
    brands: [],
    sizes: [],
  });
  const [form, setForm] = useState<TireFormData>({
    tire_brand: "",
    tire_size: "",
    tire_identity: "",
    tire_dive: "",
    tire_price: "",
    tire_generation: "",
    tire_company_id: "",
  });
  const [files, setFiles] = useState<{
    tire_pric1?: File | null;
    tire_pric2?: File | null;
    tire_pric3?: File | null;
    tire_pric_m?: File | null;
  }>({});
  const [previews, setPreviews] = useState<{
    tire_pric1?: string;
    tire_pric2?: string;
    tire_pric3?: string;
    tire_pric_m?: string;
  }>({});
  const [dragOver, setDragOver] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    apiFetch<TireOptions>("/api/tires/options").then((data) => {
      setOptions(data);
      if (!tireId && data.companies.length === 1) {
        setForm((prev) => ({ ...prev, tire_company_id: data.companies[0].value }));
      }
    });
  }, [tireId]);

  useEffect(() => {
    if (!tireId) return;
    apiFetch<TireFormData>(`/api/tires/${tireId}`).then((data) => {
      setForm((prev) => ({ ...prev, ...data }));
    });
  }, [tireId]);

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleFileSelect(
    key: "tire_pric1" | "tire_pric2" | "tire_pric3" | "tire_pric_m",
    file: File | null
  ) {
    setFiles((prev) => ({ ...prev, [key]: file }));
    if (file) {
      setPreviews((prev) => ({ ...prev, [key]: URL.createObjectURL(file) }));
    }
  }

  function handleDrop(
    key: "tire_pric1" | "tire_pric2" | "tire_pric3" | "tire_pric_m",
    e: React.DragEvent<HTMLDivElement>
  ) {
    e.preventDefault();
    setDragOver(null);
    const file = e.dataTransfer.files?.[0] || null;
    handleFileSelect(key, file);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const body = new FormData();
      body.append("tire_brand", form.tire_brand);
      body.append("tire_size", form.tire_size);
      body.append("tire_identity", form.tire_identity);
      body.append("tire_dive", form.tire_dive);
      body.append("tire_price", form.tire_price);
      body.append("tire_generation", form.tire_generation);
      body.append("tire_company_id", form.tire_company_id || "");
      if (files.tire_pric1) body.append("tire_pric1", files.tire_pric1);
      if (files.tire_pric2) body.append("tire_pric2", files.tire_pric2);
      if (files.tire_pric3) body.append("tire_pric3", files.tire_pric3);
      if (files.tire_pric_m) body.append("tire_pric_m", files.tire_pric_m);

      if (tireId) {
        await apiFetch(`/api/tires/${tireId}`, {
          method: "PUT",
          body,
        });
      } else {
        await apiFetch(`/api/tires`, {
          method: "POST",
          body,
        });
      }
      onSaved();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setLoading(false);
    }
  }

  const imageSrc = (path?: string) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    return `${apiBase}${path}`;
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        {/* <div>
          <AutoCompleteSelect
            label="บริษัท"
            value={form.tire_company_id}
            options={options.companies.map((opt) => ({ id: opt.value, label: opt.label }))}
            placeholder="ไม่ระบุ"
            onChange={(id) => setForm((prev) => ({ ...prev, tire_company_id: id }))}
          />
        </div> */}
        <div>
          <AutoCompleteSelect
            label="ยี่ห้อยาง"
            value={form.tire_brand}
            options={options.brands.map((opt) => ({ id: opt.value, label: opt.label }))}
            placeholder="กรุณาเลือก..."
            onChange={(id) => setForm((prev) => ({ ...prev, tire_brand: id }))}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <AutoCompleteSelect
            label="ขนาดยาง"
            value={form.tire_size}
            options={options.sizes.map((opt) => ({ id: opt.value, label: opt.label }))}
            placeholder="กรุณาเลือก..."
            onChange={(id) => setForm((prev) => ({ ...prev, tire_size: id }))}
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-600">รหัสยาง</label>
          <input
            name="tire_identity"
            value={form.tire_identity}
            onChange={onChange}
            className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
            required
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label className="text-sm font-semibold text-slate-600">ดอกยาง</label>
          <input
            name="tire_dive"
            value={form.tire_dive}
            onChange={onChange}
            className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
            required
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-600">ราคา</label>
          <input
            name="tire_price"
            value={form.tire_price}
            onChange={onChange}
            className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
            required
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-600">รุ่น</label>
          <input
            name="tire_generation"
            value={form.tire_generation}
            onChange={onChange}
            className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
            required
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {([
          { key: "tire_pric1", label: "รูปยาง 1" },
          { key: "tire_pric2", label: "รูปยาง 2" },
          { key: "tire_pric3", label: "รูปยาง 3" },
          { key: "tire_pric_m", label: "รูปยางหลัก" },
        ] as const).map((item) => {
          const preview = previews[item.key] || form[item.key];
          return (
            <div key={item.key}>
              <label className="text-sm font-semibold text-slate-600">{item.label}</label>
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver(item.key);
                }}
                onDragLeave={() => setDragOver(null)}
                onDrop={(e) => handleDrop(item.key, e)}
                className={`mt-2 flex h-36 cursor-pointer items-center justify-center rounded-2xl border border-dashed ${
                  dragOver === item.key ? "border-amber-500 bg-amber-50" : "border-amber-200 bg-slate-50"
                } transition`}
                onClick={() => document.getElementById(item.key)?.click()}
              >
                {preview ? (
                  <img src={imageSrc(preview)} alt="" className="h-full w-full rounded-2xl object-cover" />
                ) : (
                  <div className="text-center text-xs text-slate-500">
                    <p className="font-semibold text-slate-600">ลากรูปมาวางที่นี่</p>
                    <p>หรือแตะเพื่อเลือกรูป</p>
                  </div>
                )}
                <input
                  id={item.key}
                  type="file"
                  className="hidden"
                  onChange={(e) => handleFileSelect(item.key, e.target.files?.[0] || null)}
                />
              </div>
            </div>
          );
        })}
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
          {loading ? "กำลังบันทึก..." : "บันทึก"}
        </button>
      </div>
    </form>
  );
}
