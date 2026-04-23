"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";
import { AutoCompleteSelect } from "@/components/AutoComplete";


type FormState = {
  car_type: string;
};

const CAR_TYPES = [
  "2 เพลา 4 ล้อ",
  "2 เพลา 6 ล้อ",
  "3 เพลา 10 ล้อ",
  "4 เพลา 12 ล้อ",
  "5 เพลา 18 ล้อ",
  "6 เพลา 20 ล้อ",
  "6 เพลา 22 ล้อ",
  "7 เพลา 24 ล้อ",
] as const;

export type CarFormData = {
  car_company: string;
  car_brand: string;
  car_registration_number: string;
  car_number: string;
  car_driver: string;
  car_phone: string;
  car_type: string;
  car_mile: string;
  car_registration_date: string;
  car_pic_profile1?: string;
  car_pic_profile2?: string;
  car_pic_profile3?: string;
};

type Option = { value: string; label: string };

type CarOptions = {
  companies: Option[];
  brands: Option[];
};

export default function CarForm({
  carId,
  onSaved,
}: {
  carId?: string | null;
  onSaved: () => void;
}) {
  const [options, setOptions] = useState<CarOptions>({ companies: [], brands: [] });
  const [form, setForm] = useState<CarFormData>({
    car_company: "",
    car_brand: "",
    car_registration_number: "",
    car_number: "",
    car_driver: "",
    car_phone: "",
    car_type: "",
    car_mile: "",
    car_registration_date: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [files, setFiles] = useState<{
    car_pic_profile1?: File | null;
    car_pic_profile2?: File | null;
    car_pic_profile3?: File | null;
  }>({});
  const [previews, setPreviews] = useState<{
    car_pic_profile1?: string;
    car_pic_profile2?: string;
    car_pic_profile3?: string;
  }>({});
  const [dragOver, setDragOver] = useState<string | null>(null);

  function handleFileSelect(key: "car_pic_profile1" | "car_pic_profile2" | "car_pic_profile3", file: File | null) {
    setFiles((prev) => ({ ...prev, [key]: file }));
    if (file) {
      setPreviews((prev) => ({ ...prev, [key]: URL.createObjectURL(file) }));
    }
  }

  function handleDrop(
    key: "car_pic_profile1" | "car_pic_profile2" | "car_pic_profile3",
    e: React.DragEvent<HTMLDivElement>
  ) {
    e.preventDefault();
    setDragOver(null);
    const file = e.dataTransfer.files?.[0] || null;
    handleFileSelect(key, file);
  }

  useEffect(() => {
    apiFetch<CarOptions>("/api/car/options").then((data) => setOptions(data));
  }, []);

  useEffect(() => {
    if (!carId) return;
    apiFetch<CarFormData>(`/api/cars/${carId}`).then((data) => setForm(data));
  }, [carId]);

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const body = new FormData();
      body.append("car_company", form.car_company);
      body.append("car_brand", form.car_brand);
      body.append("car_registration_number", form.car_registration_number);
      body.append("car_number", form.car_number);
      body.append("car_driver", form.car_driver);
      body.append("car_phone", form.car_phone);
      body.append("car_type", form.car_type);
      body.append("car_mile", form.car_mile);
      body.append("car_registration_date", form.car_registration_date);
      if (files.car_pic_profile1) body.append("car_pic_profile1", files.car_pic_profile1);
      if (files.car_pic_profile2) body.append("car_pic_profile2", files.car_pic_profile2);
      if (files.car_pic_profile3) body.append("car_pic_profile3", files.car_pic_profile3);

      console.log("FormData entries:" , JSON.stringify(body.entries , null ,2 ));
     

      console.log("form", form);

      if (carId) {
        await apiFetch(`/api/cars/${carId}`, {
          method: "PUT",
          body 
        });
      } else {
        await apiFetch(`/api/cars`, {
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

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <AutoCompleteSelect
            label="บริษัท/สาขา"
            value={form.car_company}
            options={options.companies.map((opt) => ({ id: opt.value, label: opt.label }))}
            placeholder="กรุณาเลือก..."
            onChange={(id) => setForm((prev) => ({ ...prev, car_company: id }))}
          />
        </div>
        <div>
          <AutoCompleteSelect
            label="ยี่ห้อรถ"
            value={form.car_brand}
            options={options.brands.map((opt) => ({ id: opt.value, label: opt.label }))}
            placeholder="กรุณาเลือก..."
            onChange={(id) => setForm((prev) => ({ ...prev, car_brand: id }))}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-slate-600">เลขทะเบียนรถ</label>
          <input
            name="car_registration_number"
            value={form.car_registration_number}
            onChange={onChange}
            className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
            required
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-600">เลขประจำรถ</label>
          <input
            name="car_number"
            value={form.car_number}
            onChange={onChange}
            className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
            required
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-slate-600">พนักงานขับรถ</label>
          <input
            name="car_driver"
            value={form.car_driver}
            onChange={onChange}
            className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
            required
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-600">เบอร์ติดต่อ</label>
          <input
            name="car_phone"
            value={form.car_phone}
            onChange={onChange}
            className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
            required
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <AutoCompleteSelect
            label="ประเภทรถ"
            value={form.car_type}
            options={CAR_TYPES.map((t) => ({ id: t, label: t }))}
            placeholder="กรุณาเลือก..."
            onChange={(id) => setForm((prev) => ({ ...prev, car_type: id }))}
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-600">เลขไมล์</label>
          <input
            name="car_mile"
            value={form.car_mile}
            onChange={onChange}
            className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
            required
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-600">วันที่จดทะเบียน</label>
          <input
            type="date"
            name="car_registration_date"
            value={form.car_registration_date}
            onChange={onChange}
            className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
            required
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {([
          { key: "car_pic_profile1", label: "รูปภาพ 1" },
          { key: "car_pic_profile2", label: "รูปภาพ 2" },
          { key: "car_pic_profile3", label: "รูปภาพ 3" },
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
                className={`mt-2 flex h-36 w-full cursor-pointer items-center justify-center rounded-2xl border border-dashed ${dragOver === item.key ? "border-amber-500 bg-amber-50" : "border-amber-200 bg-slate-50"
                  } transition`}
                onClick={() => document.getElementById(item.key)?.click()}
              >
                {preview ? (
                  <img src={preview} alt="" className="h-full w-full rounded-2xl object-cover" />
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
