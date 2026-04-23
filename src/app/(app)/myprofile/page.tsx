"use client";

import { useEffect, useState } from "react";
import { apiFetch, apiBase } from "@/lib/api";

type Profile = {
  user_id: string;
  user_username: string;
  user_firstname: string;
  user_lastname: string;
  user_phone: string;
  user_email: string;
  user_pic: string;
};

export default function MyProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    apiFetch<Profile>("/api/myprofile")
      .then((data) => {
        setProfile(data);
        setFirstName(data.user_firstname || "");
        setLastName(data.user_lastname || "");
        setPhone(data.user_phone || "");
        setEmail(data.user_email || "");
      })
      .catch((err) => setError(err instanceof Error ? err.message : "Load profile failed"));
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setSaving(true);
    try {
      const body = new FormData();
      body.append("user_firstname", firstName);
      body.append("user_lastname", lastName);
      body.append("user_phone", phone);
      body.append("user_email", email);
      if (picture) body.append("my_picture", picture);

      await apiFetch("/api/myprofile", {
        method: "PUT",
        body,
      });
      setSuccess("บันทึกข้อมูลเรียบร้อย");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  }

  const imageUrl =
    profile?.user_pic && profile.user_id
      ? `${apiBase}/static/images/users/${profile.user_id}/${profile.user_pic}`
      : "/profile-default.svg";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">My Profile</h1>
        <p className="text-sm text-slate-500">จัดการข้อมูลส่วนตัว</p>
      </div>

      <form onSubmit={onSubmit} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm space-y-5">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <div className="h-24 w-24 overflow-hidden rounded-2xl border border-amber-100 bg-slate-50">
            <img src={imageUrl} alt="" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-600">รูปโปรไฟล์</p>
            <input
              type="file"
              onChange={(e) => setPicture(e.target.files?.[0] || null)}
              className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm font-semibold text-slate-600">ชื่อ</label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-600">นามสกุล</label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm font-semibold text-slate-600">เบอร์โทร</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-600">อีเมล</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
            />
          </div>
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
            disabled={saving}
            className="rounded-xl bg-gradient-to-r from-amber-600 to-amber-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-amber-200"
          >
            {saving ? "Saving..." : "บันทึก"}
          </button>
        </div>
      </form>
    </div>
  );
}
