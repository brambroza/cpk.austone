import { formatThaiCurrency } from "@/utils/format-number";
import clsx from "clsx";

export default function StatCard({
  title,
  value,
  hint,
  variant,
}: {
  title: string;
  value: number;
  hint: string;
  variant: "primary" | "success" | "warning";
}) {
  return (
    <div
      className={clsx(
        "rounded-2xl p-5 text-white shadow-lg",
        variant === "primary" && "bg-gradient-to-r from-amber-700 to-amber-500",
        variant === "success" && "bg-gradient-to-r from-emerald-600 to-teal-500",
        variant === "warning" && "bg-gradient-to-r from-purple-600 to-amber-500"
      )}
    >
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-3 text-3xl font-bold">{formatThaiCurrency(value, { showSymbol: false, decimals: 0 })}</div>
      <div className="mt-2 text-xs text-white/80">{hint}</div>
    </div>
  );
}
