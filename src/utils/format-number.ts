 // utils/currency.ts
export type ThaiCurrencyOptions = {
  decimals?: number;          // จำนวนทศนิยม (default 2)
  currency?: string;          // default "THB"
  showSymbol?: boolean;       // แสดง ฿/THB หรือไม่ (default true)
  useCode?: boolean;          // true = "THB", false = "฿" (default false)
  useGrouping?: boolean;      // คั่นหลักพัน (default true)
  negativeStyle?: "minus" | "paren"; // ติดลบแบบ -฿1,000 หรือ (฿1,000)
};

function toNumberLoose(v: unknown): number | null {
  if (v === null || v === undefined) return null;
  if (typeof v === "number") return Number.isFinite(v) ? v : null;
  if (typeof v === "string") {
    const s = v.trim();
    if (!s) return null;
    // รองรับ "1,234.50" / "฿1,234.50" / "THB 1,234.50"
    const cleaned = s
      .replace(/฿/g, "")
      .replace(/THB/gi, "")
      .replace(/,/g, "")
      .trim();
    const n = Number(cleaned);
    return Number.isFinite(n) ? n : null;
  }
  return null;
}

export function formatThaiCurrency(
  value: number | string | null | undefined,
  options: ThaiCurrencyOptions = {}
): string {
  const {
    decimals = 2,
    currency = "THB",
    showSymbol = true,
    useCode = false,
    useGrouping = true,
    negativeStyle = "minus",
  } = options;

  const n0 = toNumberLoose(value);
  if (n0 === null) return "-";

  const isNeg = n0 < 0;
  const n = Math.abs(n0);

  // แกนหลัก: Intl.NumberFormat
  const nf = new Intl.NumberFormat("th-TH", {
    style: showSymbol ? "currency" : "decimal",
    currency,
    currencyDisplay: useCode ? "code" : "symbol",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping,
  });

  let out = nf.format(n);

  if (isNeg) {
    out = negativeStyle === "paren" ? `(${out})` : `-${out}`;
  }

  return out;
}