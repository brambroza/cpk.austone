"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { apiBase, saveAuth } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {

      const res = await fetch(`${apiBase}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      console.log("res", res);
      if (!res.ok) {

        const data = await res.json().catch(() => ({ message: "Login failed" }));
        throw new Error(data.message || "Login failed");
      }
 
      const data = await res.json();
      saveAuth(data.token, data.user);
      router.replace("/dashboard");
    } catch (err) {
      console.log("Login error", err);
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#f8f2d1,_#fff8df_55%,_#ffffff_100%)] px-6 py-10 flex items-center justify-center">
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-gradient-to-br from-[#EDDE9D]/50 to-[#b89e3c]/35 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-gradient-to-br from-[#d8c979]/40 to-[#8a7423]/30 blur-3xl" />
      <div className="pointer-events-none absolute top-20 right-16 h-24 w-24 rounded-3xl border border-white/60 bg-white/50 backdrop-blur rotate-12 shadow-[0_20px_50px_rgba(15,23,42,0.08)]" />

      <div className="w-full max-w-5xl rounded-[28px] border border-white/70 bg-white/80 shadow-[0_30px_80px_rgba(15,23,42,0.15)] backdrop-blur">
        <div className="grid md:grid-cols-[1.05fr_1fr]">
          <div className="relative order-2 md:order-1 overflow-hidden rounded-[28px] md:rounded-r-none bg-gradient-to-br from-[#ffe14d] via-[#ffe14d] to-[#ffe14d] p-7 sm:p-8 md:p-10 text-white">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-[#f7ef20]/70  border border-black/70 text-black flex items-center justify-center font-bold text-lg">
                AT
              </div>
              <div>
                <h1 className="text-2xl  text-black font-semibold tracking-tight">Austone Thailand</h1>

              </div>
            </div>

            <div className="mt-8 sm:mt-10">
              <div className="relative overflow-hidden rounded-3xl border border-black/20 bg-[#f7ef20]/50 p-4">
                <img
                  src={`${apiBase}/static/images/logo2.png`}
                  alt="Hero"
                  className="h-56 w-full object-contain sm:h-64"
                  loading="lazy"
                />
              </div>
            </div>

         

            <div className="pointer-events-none absolute -bottom-14 -right-14 h-48 w-48 rounded-full border border-white/20 bg-white/10" />
          </div>

          <div className="order-1 md:order-2 p-7 sm:p-8 md:p-10">
            <div className="mb-6">
              <p className="text-sm font-medium text-slate-500">ยินดีต้อนรับกลับมา</p>
              <h3 className="text-2xl font-semibold text-slate-900">เข้าสู่ระบบบัญชีของคุณ</h3>
              <p className="text-sm text-slate-500 mt-2">
                ใช้บัญชีบริษัทเพื่อดำเนินการต่อ
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-slate-600">ชื่อผู้ใช้หรืออีเมล</label>
                <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 focus-within:border-[#b89e3c] focus-within:ring-4 focus-within:ring-[#f8f2d1]">
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 text-slate-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 5.5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v.32l-7.26 4.54a2 2 0 0 1-2.12 0L2 5.82V5.5Z" />
                    <path d="M2 7.96V14.5a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7.96l-6.62 4.14a4 4 0 0 1-4.24 0L2 7.96Z" />
                  </svg>
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                    placeholder="ชื่อผู้ใช้หรืออีเมล"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600">รหัสผ่าน</label>
                <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 focus-within:border-[#b89e3c] focus-within:ring-4 focus-within:ring-[#f8f2d1]">
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 text-slate-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 8a5 5 0 0 1 10 0v2h.5A1.5 1.5 0 0 1 17 11.5v5A1.5 1.5 0 0 1 15.5 18h-11A1.5 1.5 0 0 1 3 16.5v-5A1.5 1.5 0 0 1 4.5 10H5V8Zm2 2h6V8a3 3 0 0 0-6 0v2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                    placeholder="กรอกรหัสผ่าน"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
                <label className="flex items-center gap-2 text-slate-500">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 text-[#EBC142] focus:ring-[#b89e3c]"
                    defaultChecked
                  />
                  จำฉันไว้
                </label>
                <button type="button" className="font-medium text-[#8a7423] hover:text-[#6f5c14]">
                  ลืมรหัสผ่าน?
                </button>
              </div>
              {error && (
                <div className="rounded-2xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className="group w-full rounded-2xl bg-gradient-to-r from-[#ffe14d] via-[#ffe14d] to-[#ffe14d] py-3 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(138,116,35,0.35)] transition hover:opacity-95 disabled:opacity-70"
              >
                <span className="inline-flex text-black items-center gap-2">
                  {loading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
                  <span className=" group-hover:text-white text-black transition">→</span>
                </span>
              </button>
              <p className="text-xs text-slate-400">
                การดำเนินการต่อถือว่าคุณยอมรับเงื่อนไขการใช้งานและนโยบายความเป็นส่วนตัว
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
