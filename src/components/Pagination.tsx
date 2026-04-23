import clsx from "clsx";

export default function Pagination({
  current,
  totalPages,
  onChange,
}: {
  current: number;
  totalPages: number;
  onChange: (page: number) => void;
}) {
  if (totalPages <= 1) return null;

  const siblings = 1;
  const boundary = 1;
  const range: Array<number | "dots"> = [];

  const start = Math.max(2, current - siblings);
  const end = Math.min(totalPages - 1, current + siblings);

  range.push(1);

  if (start > 2) range.push("dots");

  for (let page = start; page <= end; page += 1) {
    range.push(page);
  }

  if (end < totalPages - 1) range.push("dots");

  if (totalPages > 1) range.push(totalPages);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        onClick={() => onChange(Math.max(1, current - 1))}
        className="rounded-lg border border-amber-100 px-3 py-1 text-sm text-amber-700"
        disabled={current === 1}
      >
        Prev
      </button>
      {range.map((p, idx) =>
        p === "dots" ? (
          <span key={`dots-${idx}`} className="px-2 text-sm text-slate-400">
            ...
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onChange(p)}
            className={clsx(
              "rounded-lg px-3 py-1 text-sm",
              p === current
                ? "bg-amber-600 text-white"
                : "border border-amber-100 text-slate-600"
            )}
          >
            {p}
          </button>
        )
      )}
      <button
        onClick={() => onChange(Math.min(totalPages, current + 1))}
        className="rounded-lg border border-amber-100 px-3 py-1 text-sm text-amber-700"
        disabled={current === totalPages}
      >
        Next
      </button>
    </div>
  );
}
