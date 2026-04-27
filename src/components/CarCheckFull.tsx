"use client";

import { useEffect, useMemo, useState } from "react";
import { apiBase, apiFetch } from "@/lib/api";
import { AutoCompleteSelect, TireSearchSelect } from "./AutoComplete";
import { formatThaiCurrency } from "@/utils/format-number";

type CarDetail = {
  car_company_label: string;
  car_company?: string;
  car_registration_number: string;
  car_brand_name: string;
  car_driver: string;
  car_type: string;
  car_pic_profile1?: string;
  car_pic_profile2?: string;
  car_pic_profile3?: string;
};

type Summary = {
  latest_date: string;
  latest_distance: string;
  first_date: string;
  first_distance: string;
};

type TireOption = {
  id: string;
  label: string;
  brand_id: string;
  brand_name: string;
  size: string;
  identity: string;
  generation: string;
  tread_depth?: string;
};

type TireEntry = {
  position: string;
  brand: string;
  gen: string;
  old_gen?: string;
  brand_name: string;
  size: string;
  code: string;
  temperature: string;
  tread: string;
  depth: string;
  pressure: string;
  price: string;
  tire_deep: string;
  tire_p: string;
  remark: string;
};

type CheckHistoryRow = {
  id: string;
  rid: number;
  check_date: string;
  distance: string;
  user_id: string;
  swap_logs: string[];
};

type LatestCheckPayload = {
  id: string;
  check_date: string;
  distance: string;
  user_id: string;
  tires: Array<{
    position: string;
    brand: string;
    brand_name: string;
    tread: string;
    size: string;
    depth: string;
    gen: string;
    code: string;
    pressure: string;
    price: string;
    temperature: string;
    remark: string;
  }>;
  swap_log: string[];
  images?: { check_1?: string; check_2?: string; check_3?: string };
};

type ChecksResponse = {
  items: CheckHistoryRow[];
  total: number;
  page: number;
  per_page: number;
  latest?: LatestCheckPayload | null;
};

type TireAction = {
  position: string;
  action: "ถอดยาง" | "เปลี่ยนยาง" | "สลับยาง" | "ย้ายยาง";
  old_gen?: string;
  new_gen?: string;
  reason?: string;
  disposition?: "เก็บในคลังเพื่อสลับยาง" | "เก็บไว้ใช้ภายหลัง" | "ทิ้ง";
  source?: "stock" | "new";
};

type PositionNode = {
  id: string;
  label: string;
  axle: number;
  side: "left" | "right";
  slot: "single" | "inner" | "outer";
};

function buildPositions(carType: string): PositionNode[] {
  // const match = carType.match(/(\\d+)\\s*เพลา\\s*(\\d+)\\s*ล้อ/);
  const match = carType.match(/(\d+)\s*เพลา\s*(\d+)\s*ล้อ/);

  if (!match) {
    return [
      { id: "1", label: "ตำแหน่งที่ 1 ซ้าย", axle: 1, side: "left", slot: "single" },
      { id: "2", label: "ตำแหน่งที่ 1 ขวา", axle: 1, side: "right", slot: "single" },
    ];
  }
  const axles = Number(match[1]);
  const wheels = Number(match[2]);
  if (!axles || !wheels) return [];

  const positions: PositionNode[] = [];
  let idx = 1;

  const addPair = (axle: number, left: string, right: string) => {
    positions.push({ id: String(idx++), label: left, axle, side: "left", slot: "single" });
    positions.push({ id: String(idx++), label: right, axle, side: "right", slot: "single" });
  };
  const addDual = (axle: number) => {
    positions.push({ id: String(idx++), label: `ตำแหน่งที่ ${axle} ซ้ายนอก`, axle, side: "left", slot: "outer" });
    positions.push({ id: String(idx++), label: `ตำแหน่งที่ ${axle} ซ้ายใน`, axle, side: "left", slot: "inner" });
    positions.push({ id: String(idx++), label: `ตำแหน่งที่ ${axle} ขวาใน`, axle, side: "right", slot: "inner" });
    positions.push({ id: String(idx++), label: `ตำแหน่งที่ ${axle} ขวานอก`, axle, side: "right", slot: "outer" });
  };

  addPair(1, "ตำแหน่งที่ 1 ซ้าย", "ตำแหน่งที่ 1 ขวา");

  const rearAxles = Math.max(axles - 1, 0);
  let remaining = wheels - 2;

  const rearConfig: ("dual" | "single")[] = [];
  if (rearAxles > 0) {
    if (remaining === rearAxles * 4) {
      for (let i = 0; i < rearAxles; i += 1) rearConfig.push("dual");
    } else if (remaining === (rearAxles - 1) * 4 + 2) {
      for (let i = 0; i < rearAxles - 1; i += 1) rearConfig.push("dual");
      rearConfig.push("single");
    } else if (remaining === rearAxles * 2) {
      for (let i = 0; i < rearAxles; i += 1) rearConfig.push("single");
    } else {
      for (let i = 0; i < rearAxles; i += 1) {
        if (remaining >= 4) {
          rearConfig.push("dual");
          remaining -= 4;
        } else if (remaining >= 2) {
          rearConfig.push("single");
          remaining -= 2;
        }
      }
    }
  }

  for (let axle = 2; axle <= axles; axle += 1) {
    const cfg = rearConfig[axle - 2] || "single";
    if (cfg === "dual") {
      addDual(axle);
    } else {
      addPair(axle, `ตำแหน่งที่ ${axle} ซ้าย`, `ตำแหน่งที่ ${axle} ขวา`);
    }
  }

  return positions;
}

export default function CarCheckFull({
  carId,
  editCheckId,
  onClose,
}: {
  carId: string;
  editCheckId?: string | null;
  onClose: () => void;
}) {
  const [detail, setDetail] = useState<CarDetail | null>(null);
  const [summary, setSummary] = useState<Summary>({
    latest_date: "",
    latest_distance: "",
    first_date: "",
    first_distance: "",
  });
  const [distance, setDistance] = useState("");
  const [positions, setPositions] = useState<PositionNode[]>([]);
  const [tires, setTires] = useState<TireEntry[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [swapLog, setSwapLog] = useState<string[]>([]);
  const [tireActions, setTireActions] = useState<TireAction[]>([]);
  const [history, setHistory] = useState<CheckHistoryRow[]>([]);
  const [editingCheckId, setEditingCheckId] = useState<string | null>(null);
  const [latestLoaded, setLatestLoaded] = useState(false);
  const [latestCheck, setLatestCheck] = useState<LatestCheckPayload | null>(null);
  const [prefilledLatest, setPrefilledLatest] = useState(false);
  const [checkSeq, setCheckSeq] = useState(0);
  const [existingImages, setExistingImages] = useState<{ image1?: string; image2?: string; image3?: string }>({});
  const [removeAction, setRemoveAction] = useState("ถอดยาง");
  const [removeReason, setRemoveReason] = useState("");
  const [removeDisposition, setRemoveDisposition] = useState("เก็บในคลังเพื่อสลับยาง");
  const [tireOptions, setTireOptions] = useState<TireOption[]>([]);
  const [images, setImages] = useState<{ image1?: File | null; image2?: File | null; image3?: File | null }>({});
  const [dragOver, setDragOver] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showImages, setShowImages] = useState(true);
  const [showTires, setShowTires] = useState(true);
  const [showHistory, setShowHistory] = useState(false);
  const [showTable, setShowTable] = useState(true);
  const [stockDialogOpen, setStockDialogOpen] = useState(false);
  const [stockItems, setStockItems] = useState<
    { id: string; identity: string; generation: string; brand: string; size: string; company: string; amount: number }[]
  >([]);
  const [stockLoading, setStockLoading] = useState(false);
  const [stockSearch, setStockSearch] = useState("");

  function emptyTires(pos: PositionNode[]) {
    return pos.map((p) => ({
      position: p.label,
      brand: "",
      gen: "",
      brand_name: "",
      size: "",
      code: "",
      temperature: "",
      tread: "",
      depth: "",
      pressure: "",
      price: "",
      remark: "",
      tire_p: "",
      tire_d: "",
      tire_deep: "",

    }));
  }

  useEffect(() => {
    setLatestLoaded(false);
    setLatestCheck(null);
    setPrefilledLatest(false);
    apiFetch<CarDetail>(`/api/cars/${carId}`).then((data) => {
      setDetail(data);
      const pos = buildPositions(data.car_type || "");
      setPositions(pos);
      setTires(emptyTires(pos));
      setActiveIndex(0);





    });
    apiFetch<Summary>(`/api/cars/${carId}/check-summary`).then((data) => setSummary(data));
    apiFetch<{ items: TireOption[] }>(`/api/tires/simple`).then((data) => setTireOptions(data.items));
    apiFetch<{ items: CheckHistoryRow[] }>(`/api/cars/${carId}/checks/history`).then(async (data) => {
      const items = data.items || [];
      setHistory(items);
      if (!items.length || latestCheck) return;
      try {
        const detail = await apiFetch<{
          id: string;
          distance: string;
          check_date: string;
          tires: LatestCheckPayload["tires"];
          swap_log: string[];
          images?: { check_1?: string; check_2?: string; check_3?: string };
        }>(`/api/cars/${carId}/checks/${items[0].id}`);
        setLatestCheck({
          id: detail.id,
          check_date: detail.check_date,
          distance: detail.distance,
          user_id: items[0].user_id,
          tires: detail.tires || [],
          swap_log: detail.swap_log || [],
          images: detail.images || {},
        });
      } catch {
        // ignore fallback error
      }
    });
    apiFetch<ChecksResponse>(`/api/cars/${carId}/checks?include_latest=1&page=1&per_page=1`)
      .then((data) => setLatestCheck(data.latest || null))
      .finally(() => setLatestLoaded(true));
  }, [carId]);

  useEffect(() => {
    if (!positions.length) return;
    if (prefilledLatest) return;
    if (editingCheckId || editCheckId) return;
    if (!latestCheck || !latestCheck.tires?.length) return;

    setTires((prev) => {
      const next = [...prev];
      latestCheck.tires.forEach((t, idx) => {
        const byLabel = t.position ? positionIndex.get(String(t.position).trim()) : undefined;
        const byNumber = normalizePositionIndex(t.position);
        const targetIndex =
          byLabel !== undefined ? byLabel : byNumber !== undefined ? byNumber : idx;
        if (targetIndex == null || targetIndex < 0 || targetIndex >= next.length) return;
        const p = next[targetIndex];
        next[targetIndex] = {
          ...p,
          position: t.position || p.position,
          brand: t.brand || p.brand,
          brand_name: t.brand_name || p.brand_name,
          gen: t.gen || p.gen,
          size: t.size || p.size,
          code: t.code || "",
          tread: t.tread || "",
          depth: "",
          pressure: "",
          price: t.price || "",
          temperature: t.temperature || "",
          tire_deep: "",
          tire_p: "",
          remark: t.remark || p.remark,
        };
      });
      return next;
    });
    setPrefilledLatest(true);
  }, [positions.length, latestCheck, prefilledLatest, editingCheckId, editCheckId]);

  useEffect(() => {
    if (editCheckId) {
      loadCheckById(editCheckId);
    }
  }, [editCheckId]);

  const activeTire = tires[activeIndex];



  const preview1 = images.image1 ? URL.createObjectURL(images.image1) : existingImages.image1 || "";
  const preview2 = images.image2 ? URL.createObjectURL(images.image2) : existingImages.image2 || "";
  const preview3 = images.image3 ? URL.createObjectURL(images.image3) : existingImages.image3 || "";

  function handleCheckFile(key: "image1" | "image2" | "image3", file: File | null) {
    setImages((prev) => ({ ...prev, [key]: file }));
  }

  function handleCheckDrop(key: "image1" | "image2" | "image3", e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragOver(null);
    const file = e.dataTransfer.files?.[0] || null;
    handleCheckFile(key, file);
  }

  function handleDrop(targetIndex: number) {
    if (dragIndex === null || dragIndex === targetIndex) return;
    setTires((prev) => {
      const next = [...prev];
      const from = next[dragIndex];
      const to = next[targetIndex];
      next[dragIndex] = { ...to, position: positions[dragIndex]?.label || to.position };
      next[targetIndex] = { ...from, position: positions[targetIndex]?.label || from.position };
      return next;
    });
    const fromLabel = positions[dragIndex]?.label || "";
    const toLabel = positions[targetIndex]?.label || "";
    setSwapLog((prev) => [`เส้นที่ ${dragIndex + 1} ${fromLabel} ย้ายไป ${toLabel}`, ...prev].slice(0, 6));
    setDragIndex(null);
  }

  function updateActive(key: keyof TireEntry, value: string) {
    setTires((prev) => {
      const next = [...prev];
      next[activeIndex] = { ...next[activeIndex], [key]: value };
      return next;
    });
  }

  function updateTireAt(index: number, key: keyof TireEntry, value: string) {
    setTires((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [key]: value };
      return next;
    });
  }



  function cancelEdit() {
    setEditingCheckId(null);
    setDistance("");
    setSwapLog([]);
    setTireActions([]);
    setExistingImages({});
    setImages({});
    setTires(emptyTires(positions));
    setActiveIndex(0);
    setCheckSeq(0);
  }

  async function handleEditFromHistory(row: CheckHistoryRow) {
    setError("");
    setSuccess("");
    try {
      const data = await apiFetch<{
        id: string;
        distance: string;
        check_date: string;
        tires: Array<{
          position: string;
          brand: string;
          brand_name: string;
          tread: string;
          size: string;
          depth: string;
          gen: string;
          code: string;
          pressure: string;
          price: string;
          temperature: string;
          remark: string;
        }>;
        swap_log: string[];
        images: { check_1?: string; check_2?: string; check_3?: string };
      }>(`/api/cars/${carId}/checks/${row.id}`);
      setEditingCheckId(row.id);
      setCheckSeq(row.rid);
      setDistance(String(data.distance || ""));
      setSwapLog(data.swap_log || []);
      setExistingImages({
        image1: data.images?.check_1 ? `${apiBase}${data.images.check_1}` : "",
        image2: data.images?.check_2 ? `${apiBase}${data.images.check_2}` : "",
        image3: data.images?.check_3 ? `${apiBase}${data.images.check_3}` : "",
      });
      setImages({});
      setTires((prev) =>
        prev.map((p, idx) => {
          const t = data.tires?.[idx];
          if (!t) return p;
          return {
            ...p,
            position: t.position || p.position,
            brand: t.brand || p.brand,
            brand_name: t.brand_name || p.brand_name,
            gen: t.gen || p.gen,
            size: t.size || p.size,
            code: t.code || p.code,
            tread: t.tread || "",
            depth: t.depth || "",
            pressure: t.pressure || "",
            price: t.price || "",
            temperature: t.temperature || "",
            tire_deep: t.depth || "",
            tire_p: t.pressure || "",
            remark: t.remark || p.remark,

          };
        })
      );
      setActiveIndex(0);

      requestAnimationFrame(() => {
        document.getElementById("section-info")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });

    } catch (err) {
      setError(err instanceof Error ? err.message : "Load check failed");
    }
  }

  async function loadCheckById(checkId: string) {
    await handleEditFromHistory({
      id: checkId,
      rid: 0,
      check_date: "",
      distance: "",
      user_id: "",
      swap_logs: [],
    });
  }

  function addRemoveLog(
    actionOverride?: TireAction["action"],
    dispositionOverride?: TireAction["disposition"],
    reasonOverride?: string
  ) {
    const action = actionOverride || removeAction;
    const disposition = dispositionOverride || removeDisposition;
    const reason = reasonOverride !== undefined ? reasonOverride : removeReason;
    const positionLabel = positions[activeIndex]?.label || `ตำแหน่งที่ ${activeIndex + 1}`;
    const oldGen = activeTire?.old_gen || activeTire?.gen || "";
    const newGen = activeTire?.gen || "";
    if ((action === "ถอดยาง" || disposition === "เก็บในคลังเพื่อสลับยาง") && !oldGen) {
      setError("กรุณาเลือกยางก่อนถอดเก็บ");
      return;
    }
    const tireSerial = activeTire?.code ? ` (${activeTire.code})` : "";
    const reasonText = reason.trim() ? ` เหตุผล: ${reason.trim()}` : "";
    const replaceText = activeTire?.gen
      ? ` เปลี่ยนแทนด้วย: ${activeTire?.brand_name || ""} ${activeTire?.size || ""}${tireSerial}`
      : "";
    const dispositionText = disposition ? ` ดำเนินการ: ${disposition}` : "";
    const message = `${action} ${positionLabel}${reasonText}${replaceText}${dispositionText}`;
    setSwapLog((prev) => [message, ...prev].slice(0, 10));

    const normalizeAction = (v: string): TireAction["action"] => {
      if (v === "ถอดยาง" || v === "เปลี่ยนยาง" || v === "สลับยาง" || v === "ย้ายยาง") return v;
      throw new Error("Invalid action");
    };

    const normalizeDisposition = (v?: string): TireAction["disposition"] => {
      if (!v) return undefined;
      if (v === "เก็บในคลังเพื่อสลับยาง" || v === "เก็บไว้ใช้ภายหลัง" || v === "ทิ้ง") return v;
      throw new Error("Invalid disposition");
    };

    setTireActions((prev) => [
      {
        position: positionLabel,
        action: normalizeAction(action),
        old_gen: oldGen || undefined,
        new_gen: newGen || undefined,
        reason: reason || undefined,
        disposition: normalizeDisposition(disposition),
      },
      ...prev,
    ]);
    /* 
        setTireActions((prev) => [
          {
            position: positionLabel,
            action,
            old_gen: oldGen || undefined,
            new_gen: newGen || undefined,
            reason: reason || undefined,
            disposition: disposition,
    
          },
          ...prev,
        ]); */
    setRemoveReason("");
  }

  function quickReplace(source: TireAction["source"]) {
    if (!activeTire?.gen) {
      setError("กรุณาเลือกยางใหม่ก่อนเปลี่ยน");
      return;
    }
    addRemoveLog("เปลี่ยนยาง", "ทิ้ง", removeReason);
    setTireActions((prev) => {
      if (!prev.length) return prev;
      const next = [...prev];
      next[0] = { ...next[0], source };
      return next;
    });
  }

  async function openStockDialog() {
    if (!detail?.car_company) {
      setError("ไม่พบข้อมูลบริษัทของรถ");
      return;
    }
    const companyId = detail.car_company.split(" - ")[0];
    setStockLoading(true);
    setStockDialogOpen(true);
    try {
      const params = new URLSearchParams();
      params.set("company_id", companyId);
      if (stockSearch.trim()) params.set("search", stockSearch.trim());
      const res = await apiFetch<{ items: typeof stockItems }>(`/api/stock/on-hand?${params.toString()}`);
      setStockItems(res.items || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Load stock failed");
    } finally {
      setStockLoading(false);
    }
  }

  function useStockItem(item: { id: string }) {
    onSelectTireGen(item.id);
    quickReplace("stock");
    setStockDialogOpen(false);
  }

  function onSelectTireGen(value: string) {
    const opt = tireOptions.find((item) => item.id === value);


    setTires((prev) => {
      const next = [...prev];
      const currentGen = next[activeIndex]?.gen;
      next[activeIndex] = {
        ...next[activeIndex],
        old_gen: next[activeIndex]?.old_gen || (currentGen && currentGen !== value ? currentGen : ""),
        gen: value,
        brand: opt?.brand_id || next[activeIndex].brand,
        brand_name: opt?.brand_name || next[activeIndex].brand_name,
        size: opt?.size || next[activeIndex].size,
        tread: opt?.tread_depth ?? next[activeIndex].tread,
      };
      return next;
    });
  }

  async function onSave() {
    setError("");
    setSuccess("");
    if (!distance.trim()) {
      setError("กรุณากรอกเลขไมล์ปัจจุบัน");
      return;
    }
    const missing: string[] = [];
    tires.forEach((t, idx) => {
      const posLabel = positions[idx]?.label || `ล้อ ${idx + 1}`;
      const hasGen = Boolean(t.gen);
      const depthVal = String(t.tire_deep || t.depth || "").trim();
      const pressureVal = String(t.tire_p || t.pressure || "").trim();
      if (!hasGen || !depthVal || !pressureVal) {
        missing.push(posLabel);
      }
    });
    if (missing.length) {
      setError(`กรุณากรอกข้อมูลยางให้ครบทุกล้อ: ${missing.join(", ")}`);
      return;
    }
    if (distanceError) return;

    setSaving(true);
    try {
      const getLineUserId = () => {
        if (typeof window === "undefined") return "";
        try {
          const raw = localStorage.getItem("user");
          if (raw) {
            const u = JSON.parse(raw);
            return (
              u?.line_user_id ||
              u?.user_line_id ||
              u?.lineId ||
              u?.line_userId ||
              ""
            );
          }
        } catch {
          // ignore
        }
        return process.env.NEXT_PUBLIC_LINE_USER_ID || "";
      };

      const getUserDisplay = () => {
        if (typeof window === "undefined") return "";
        try {
          const raw = localStorage.getItem("user");
          if (raw) {
            const u = JSON.parse(raw);
            return u?.user_name || u?.user_username || "";
          }
        } catch {
          // ignore
        }
        return "";
      };

      const buildFlexMsg = (checkId: string) => {
        const title = editingCheckId ? "แก้ไขการเช็ครถ" : "บันทึกการเช็ครถ";
        const reg = detail?.car_registration_number || carId;
        const company = detail?.car_company_label || detail?.car_company || "";
        const driver = detail?.car_driver || "-";
        const carType = detail?.car_type || "-";
        const userDisplay = getUserDisplay() || "-";
        const nowText = new Date().toLocaleString("th-TH", { timeZone: "Asia/Bangkok" });
        return {
          type: "flex",
          altText: `${title}: ${reg}`,
          contents: {
            type: "bubble",
            body: {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "text",
                  text: `✅ ${title}`,
                  weight: "bold",
                  size: "md",
                },
                {
                  type: "box",
                  layout: "vertical",
                  margin: "sm",
                  spacing: "xs",
                  contents: [
                    {
                      type: "text",
                      text: `ทะเบียน: ${reg}`,
                      size: "sm",
                      wrap: true,
                    },
                    ...(company
                      ? [
                        {
                          type: "text",
                          text: `บริษัท: ${company}`,
                          size: "xs",
                          color: "#999999",
                          wrap: true,
                        },
                      ]
                      : []),
                    {
                      type: "text",
                      text: `คนขับ: ${driver}`,
                      size: "xs",
                      color: "#999999",
                      wrap: true,
                    },
                    {
                      type: "text",
                      text: `ประเภทรถ: ${carType}`,
                      size: "xs",
                      color: "#999999",
                      wrap: true,
                    },
                  ],
                },
                {
                  type: "box",
                  layout: "vertical",
                  margin: "lg",
                  spacing: "sm",
                  contents: [
                    {
                      type: "text",
                      text: `เลขไมล์: ${distance.trim()}`,
                      size: "sm",
                      wrap: true,
                    },
                    {
                      type: "text",
                      text: `ผู้บันทึก: ${userDisplay}`,
                      size: "xs",
                      color: "#999999",
                      wrap: true,
                    },
                    {
                      type: "text",
                      text: `เวลา: ${nowText}`,
                      size: "xs",
                      color: "#999999",
                      wrap: true,
                    },
                    {
                      type: "text",
                      text: `เลขที่รายการ: ${checkId}`,
                      size: "xs",
                      color: "#999999",
                      wrap: true,
                    },
                  ],
                },
              ],
            },
          },
        };
      };

      const payload = tires.map((t) => ({
        position: t.position,
        brand: t.brand,
        gen: t.gen,
        brand_name: t.brand_name,
        size: t.size,
        code: t.code,
        temperature: t.temperature,
        tread: t.tread,
        depth: t.tire_deep || t.depth,
        pressure: t.tire_p || t.pressure,
        price: t.price,
        remark: t.remark,
      }));
      const body = new FormData();
      body.append("distance", distance.trim());
      body.append("tires", JSON.stringify(payload));
      body.append("swap_log", JSON.stringify(swapLog));
      body.append("tire_actions", JSON.stringify(tireActions));
      if (tireActions.length > 0) {
        body.append("apply_stock", "1");
      }
      if (images.image1) body.append("image1", images.image1);
      if (images.image2) body.append("image2", images.image2);
      if (images.image3) body.append("image3", images.image3);

      let savedCheckId = "";
      if (editingCheckId) {
        await apiFetch(`/api/cars/${carId}/checks/${editingCheckId}`, {
          method: "PUT",
          body,
        });
        savedCheckId = editingCheckId;
        setSuccess("อัปเดตข้อมูลเรียบร้อย");
      } else {
        const res = await apiFetch<{ check_id?: string }>(`/api/cars/${carId}/checks`, {
          method: "POST",
          body,
        });
        savedCheckId = res?.check_id || "";
        setSuccess("บันทึกข้อมูลเรียบร้อย");
      }

      const lineUserId = getLineUserId();
      if (lineUserId && savedCheckId) {
        const flexMsg = buildFlexMsg(savedCheckId);
        apiFetch(`/api/line/push`, {
          method: "POST",
          body: JSON.stringify({ userId: lineUserId, flexMsg }),
        }).catch(() => {
          // ignore line errors on UI
        });
      }
      setDistance("");
      setEditingCheckId(null);
      setTireActions([]);
      setExistingImages({});
      setImages({});
      apiFetch<Summary>(`/api/cars/${carId}/check-summary`).then((data) => setSummary(data));
      apiFetch<{ items: CheckHistoryRow[] }>(`/api/cars/${carId}/checks/history`).then((data) => setHistory(data.items || []));
      apiFetch<ChecksResponse>(`/api/cars/${carId}/checks?include_latest=1&page=1&per_page=1`).then((data) => {
        setLatestCheck(data.latest || null);
        setPrefilledLatest(false);
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
      onClose();



    }
  }

  const carImage = (path?: string) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    return `${apiBase}${path}`;
  };

  const layoutRows = useMemo(() => {


    const rows: { axle: number; left: PositionNode[]; right: PositionNode[] }[] = [];
    const grouped = positions.reduce((acc, node) => {
      acc[node.axle] = acc[node.axle] || [];
      acc[node.axle].push(node);
      return acc;
    }, {} as Record<number, PositionNode[]>);
    Object.keys(grouped)
      .map((k) => Number(k))
      .sort((a, b) => a - b)
      .forEach((axle) => {
        const nodes = grouped[axle];
        const left = nodes.filter((n) => n.side === "left");
        const right = nodes.filter((n) => n.side === "right");
        rows.push({ axle, left, right });
      });
    return rows;
  }, [positions]);

  const positionIndex = useMemo(() => {
    const map = new Map<string, number>();
    positions.forEach((p, idx) => map.set(p.label.trim(), idx));
    return map;
  }, [positions]);

  function normalizePositionIndex(position?: string) {
    if (!position) return undefined;
    const text = String(position);
    const match = text.match(/\d+/);
    if (!match) return undefined;
    const num = Number(match[0]);
    if (!Number.isFinite(num) || num <= 0) return undefined;
    return num - 1;
  }

  function applyLatestToIndex(index: number) {
    if (!latestCheck || !latestCheck.tires?.length) return;
    const posLabel = positions[index]?.label?.trim() || "";
    const byLabel = posLabel ? positionIndex.get(posLabel) : undefined;
    const byNumber = normalizePositionIndex(posLabel);
    const sourceIndex =
      byLabel !== undefined ? byLabel : byNumber !== undefined ? byNumber : index;
    const t = latestCheck.tires?.[sourceIndex];
    if (!t) return;
    setTires((prev) => {
      const next = [...prev];
      const current = next[index];
      // only fill when current is mostly empty
      if (current && (current.gen || current.brand || current.pressure || current.depth || current.tread)) {
        return prev;
      }
      next[index] = {
        ...current,
        position: t.position || current.position,
        brand: t.brand || current.brand,
        brand_name: t.brand_name || current.brand_name,
        gen: t.gen || current.gen,
        size: t.size || current.size,
        code: t.code || current.code,
        tread: "",
        depth: t.depth || "",
        pressure: "",
        price: t.price || "",
        temperature: "",
        tire_deep: "",
        tire_p: "",
        remark: "",
      };
      return next;
    });
  }

  const latestDistance = Number(summary?.latest_distance ?? 0);
  const currentDistance = Number(distance);

  const distanceError =
    distance !== '' &&
      !Number.isNaN(currentDistance) &&
      currentDistance <= latestDistance && !editingCheckId
      ? `เลขไมล์ปัจจุบันต้องมากกว่าเลขไมล์ล่าสุด (${latestDistance.toLocaleString()} ก.ม.)`
      : '';

  return (
    <div className="space-y-6 pb-28">
      <div className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-800">ประวัติการเช็ค</h2>
          <button
            type="button"
            onClick={() => setShowHistory((s) => !s)}
            className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700"
          >
            {showHistory ? "ซ่อน" : "แสดง"}
          </button>
        </div>
        {showHistory && (
          <div className="mt-4 overflow-x-auto">
            <div className="space-y-3 md:hidden">
              {history.length ? (
                history.slice(0, 5).map((row) => (
                  <div key={row.id} className="rounded-xl border border-amber-100 bg-white p-3 shadow-sm">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>ครั้งที่ {row.rid}</span>
                      <span>{row.check_date}</span>
                    </div>
                    <div className="mt-2 text-sm font-semibold text-slate-700">{row.distance} กม.</div>
                    <div className="text-xs text-slate-500">ผู้บันทึก: {row.user_id}</div>
                    <div className="mt-3">
                      <button
                        type="button"
                        onClick={() => handleEditFromHistory(row)}
                        className="w-full rounded-lg bg-amber-100 px-3 py-2 text-xs font-semibold text-amber-700"
                      >
                        แก้ไขรายการนี้
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-xl border border-amber-100 bg-white px-3 py-4 text-center text-sm text-slate-500">
                  ยังไม่มีประวัติการเช็ค
                </div>
              )}
            </div>
            <table className="hidden min-w-full text-sm md:table">
              <thead className="bg-[#ffe14d] text-slate-700">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold">ครั้งที่</th>
                  <th className="px-4 py-2 text-left font-semibold">วันที่เช็ค</th>
                  <th className="px-4 py-2 text-left font-semibold">เลขไมล์</th>
                  <th className="px-4 py-2 text-left font-semibold">ผู้บันทึก</th>
                  <th className="px-4 py-2 text-left font-semibold">จัดการ</th>
                </tr>
              </thead>
              <tbody>
                {history.length ? (
                  history.slice(0, 5).map((row) => (
                    <tr key={row.id} className="border-t border-amber-50">
                      <td className="px-4 py-2">{row.rid}</td>
                      <td className="px-4 py-2">{row.check_date}</td>
                      <td className="px-4 py-2">{row.distance}</td>
                      <td className="px-4 py-2">{row.user_id}</td>
                      <td className="px-4 py-2">
                        <button
                          type="button"
                          onClick={() => handleEditFromHistory(row)}
                          className="rounded-lg bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700"
                        >
                          แก้ไข
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-4 py-4 text-center text-slate-500">
                      ยังไม่มีประวัติการเช็ค
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>



      {stockDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4">
          <div className="flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-amber-100 px-4 py-3">
              <div className="text-sm font-semibold text-slate-700">เลือกยางจากคลัง</div>
              <button
                onClick={() => setStockDialogOpen(false)}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
              >
                ปิด
              </button>
            </div>
            <div className="p-4">
              <div className="flex flex-wrap items-center gap-2">
                <input
                  value={stockSearch}
                  onChange={(e) => setStockSearch(e.target.value)}
                  placeholder="ค้นหา รหัส/ยี่ห้อ/ขนาด"
                  className="h-9 w-full max-w-sm rounded-lg border border-slate-200 px-3 text-sm"
                />
                <button
                  onClick={openStockDialog}
                  className="h-9 rounded-lg bg-amber-600 px-3 text-xs font-semibold text-white"
                >
                  ค้นหา
                </button>
              </div>
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="bg-[#ffe14d] text-slate-700">
                    <tr>
                      <th className="px-3 py-2 text-left font-semibold">รหัสยาง</th>
                      <th className="px-3 py-2 text-left font-semibold">ยี่ห้อ</th>
                      <th className="px-3 py-2 text-left font-semibold">ขนาด</th>
                      <th className="px-3 py-2 text-left font-semibold">คงเหลือ</th>
                      <th className="px-3 py-2 text-left font-semibold">เลือก</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stockLoading ? (
                      <tr>
                        <td colSpan={5} className="px-3 py-3 text-center text-slate-500">
                          กำลังโหลด...
                        </td>
                      </tr>
                    ) : stockItems.length ? (
                      stockItems.map((item) => (
                        <tr key={item.id} className="border-t border-amber-50">
                          <td className="px-3 py-2">{item.identity || item.id}</td>
                          <td className="px-3 py-2">{item.brand}</td>
                          <td className="px-3 py-2">{item.size}</td>
                          <td className="px-3 py-2">{item.amount}</td>
                          <td className="px-3 py-2">
                            <button
                              type="button"
                              onClick={() => useStockItem(item)}
                              className="rounded-lg bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700"
                            >
                              ใช้
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="px-3 py-3 text-center text-slate-500">
                          ไม่มีรายการในคลัง
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}



      <div id="section-info" className="space-y-6">
        <div className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">ข้อมูลรถ</h2>
          <div className="mt-4 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-slate-600">รหัสรถ</label>
                  <input
                    readOnly
                    value={carId}
                    className="mt-2 w-full rounded-xl border border-amber-100 bg-slate-50 px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-600">เลขทะเบียนรถ</label>
                  <input
                    readOnly
                    value={detail?.car_registration_number || ""}
                    className="mt-2 w-full rounded-xl border border-amber-100 bg-slate-50 px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-600">ยี่ห้อรถ</label>
                  <input
                    readOnly
                    value={detail?.car_brand_name || ""}
                    className="mt-2 w-full rounded-xl border border-amber-100 bg-slate-50 px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-600">ผขร.</label>
                  <input
                    readOnly
                    value={detail?.car_driver || ""}
                    className="mt-2 w-full rounded-xl border border-amber-100 bg-slate-50 px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-600">ประเภทรถ</label>
                  <input
                    readOnly
                    value={detail?.car_type || ""}
                    className="mt-2 w-full rounded-xl border border-amber-100 bg-slate-50 px-3 py-2 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-semibold text-slate-800">วันที่เช็คสภาพรถ</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-slate-600">วันที่เช็คล่าสุด</label>
                    <input
                      readOnly
                      value={summary.latest_date || "ไม่มีรายการล่าสุด"}
                      className="mt-2 w-full rounded-xl border border-amber-100 bg-amber-50 px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-600">เลขไมล์ที่เช็คล่าสุด</label>
                    <input
                      readOnly
                      value={summary.latest_distance || "ไม่มีรายการล่าสุด"}
                      className="mt-2 w-full rounded-xl border border-amber-100 bg-amber-50 px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-600">วันที่เช็คครั้งแรก</label>
                    <input
                      readOnly
                      value={summary.first_date || "ยังไม่มีการเช็คครั้งแรก"}
                      className="mt-2 w-full rounded-xl border border-amber-100 bg-amber-50 px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-600">เลขไมล์ที่เช็คครั้งแรก</label>
                    <input
                      readOnly
                      value={summary.first_distance || "0"}
                      className="mt-2 w-full rounded-xl border border-amber-100 bg-amber-50 px-3 py-2 text-sm"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-600">เลขไมล์ปัจจุบัน</label>
                <div className="mt-2 flex items-center gap-2">
                  <input
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    className="w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-amber-100"
                    placeholder="เช่น 150000"
                  />
                  <span className="text-sm text-slate-500">ก.ม.</span>
                </div>
                <div className="mt-2 flex items-center gap-2">

                  {distanceError && (
                    <p className="mt-1 text-xs text-red-500">{distanceError}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-600">รูปถ่ายรถ</label>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <img
                  src={carImage(detail?.car_pic_profile1) || "/file.svg"}
                  alt=""
                  className="h-40 rounded-2xl border border-amber-100 object-cover"
                />
                <img
                  src={carImage(detail?.car_pic_profile2) || "/file.svg"}
                  alt=""
                  className="h-40 rounded-2xl border border-amber-100 object-cover"
                />
                <img
                  src={carImage(detail?.car_pic_profile3) || "/file.svg"}
                  alt=""
                  className="h-40 rounded-2xl border border-amber-100 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {editingCheckId && (
          <div className="flex items-center justify-between rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            <div className="font-semibold">โหมดแก้ไขรายการเช็ค: {editingCheckId}  ครั้งที่ : {checkSeq} </div>
            <button
              type="button"
              onClick={cancelEdit}
              className="rounded-lg bg-white px-3 py-1 text-xs font-semibold text-amber-700"
            >
              ยกเลิกแก้ไข
            </button>
          </div>
        )}
      </div>

      <div id="section-check" className="space-y-6">
        <div className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-800">รูปการตรวจเช็ค</h2>
            <button
              type="button"
              onClick={() => setShowImages((s) => !s)}
              className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700"
            >
              {showImages ? "ซ่อน" : "แสดง"}
            </button>
          </div>
          {showImages && (
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { key: "image1", label: "รูปที่ 1", preview: preview1 },
                { key: "image2", label: "รูปที่ 2", preview: preview2 },
                { key: "image3", label: "รูปที่ 3", preview: preview3 },
              ].map((item) => (
                <div key={item.key} className="space-y-2">
                  <label className="text-sm font-semibold text-slate-600">{item.label}</label>
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDragOver(item.key);
                    }}
                    onDragLeave={() => setDragOver(null)}
                    onDrop={(e) => handleCheckDrop(item.key as "image1" | "image2" | "image3", e)}
                    className={`flex h-40 cursor-pointer items-center justify-center rounded-2xl border border-dashed ${dragOver === item.key ? "border-amber-500 bg-amber-50" : "border-amber-200 bg-slate-50"
                      } transition`}
                    onClick={() => document.getElementById(item.key)?.click()}
                  >
                    {item.preview ? (
                      <img src={item.preview} alt="" className="h-full   rounded-2xl object-cover" />
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
                      onChange={(e) =>
                        handleCheckFile(item.key as "image1" | "image2" | "image3", e.target.files?.[0] || null)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div id="section-tires" className="space-y-6">
        <div className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-800">ตำแหน่งล้อ และข้อมูลยาง</h2>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowTable((s) => !s)}
                className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700"
              >
                {showTable ? "ซ่อนตาราง" : "แสดงตาราง"}
              </button>
              <button
                type="button"
                onClick={() => setShowTires((s) => !s)}
                className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700"
              >
                {showTires ? "ซ่อน" : "แสดง"}
              </button>
            </div>
          </div>
          {showTires && (
            <div className="mt-4 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-800">ตำแหน่งล้อ</h2>
                <p className="text-xs text-slate-500 mt-1">ลากสลับตำแหน่งเพื่อบันทึกการย้ายยาง</p>
                <div className="mt-5 space-y-5">
                  {layoutRows.map((row) => (
                    <div
                      key={row.axle}
                      className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
                    >
                      <div className="flex gap-2">
                        {row.left.map((node) => {
                          const index = positions.findIndex((p) => p.id === node.id);
                          const tire = tires[index];


                          const hasTireDepth = tire?.tire_deep !== '' && tire?.tire_deep != null;
                          const hasTread = tire?.tire_p !== '' && tire?.tire_p != null;
                          const hasDepthPercent = hasTireDepth && hasTread;
                          return (
                            <div
                              key={node.id}
                              draggable
                              onDragStart={() => setDragIndex(index)}
                              onDragOver={(e) => e.preventDefault()}
                              onDrop={() => handleDrop(index)}
                              onClick={() => {
                                setActiveIndex(index);
                                applyLatestToIndex(index);
                              }}
                              className={`h-20 w-14 cursor-pointer rounded-2xl border border-slate-900/10 text-[9px] leading-tight shadow sm:h-24 sm:w-16 sm:text-[10px] lg:h-28 lg:w-20
                              ${hasDepthPercent ? 'bg-amber-50 text-amber-700' : 'bg-slate-900 text-white'}
                              ${activeIndex === index ? 'ring-2 ring-amber-400' : ''}`}
                            >
                              <div className="flex h-full flex-col items-center justify-center gap-1 px-2 text-center
                              ">
                                {/*      <span className="font-semibold">{distance ? `${formatThaiCurrency(distance, { showSymbol: false, decimals: 2 })} Km` : "ยังไม่ตรวจวัด"}</span> */}
                                <span className="font-semibold">{tire?.code ? `${tire?.code.substring(0, 6)}` : "ยังไม่ตรวจวัด"}</span>
                                {/*    <span className="font-semibold">
                                  {tire?.tire_p !== '' && tire?.tire_p != null
                                    ? `${(Number(tire.tire_p) * 6.89476).toFixed(2)} KPa`
                                    : 'ยังไม่ตรวจวัด'}
                                </span> */}
                                <span className="text-xs font-semibold">{index + 1}</span>
                                <span>{tire?.tire_p ? `${tire.tire_p}Psi` : "ยังไม่ตรวจวัด"}</span>
                                <span>{tire?.tire_deep !== '' && tire?.tread !== '' ? `${((Number(tire?.tire_deep) * 100) / Number(tire?.tread)).toFixed(2)} %` : "ยังไม่ตรวจวัด"}</span>
                              </div>
                            </div>
                          );

                        })}
                      </div>
                      <div className="h-2 w-16 rounded-full bg-slate-400 sm:w-24 lg:w-28" />
                      <div className="flex gap-2">
                        {row.right.map((node) => {
                          const index = positions.findIndex((p) => p.id === node.id);
                          const tire = tires[index];

                          const hasTireDepth = tire?.tire_deep !== '' && tire?.tire_deep != null;
                          const hasTread = tire?.tire_p !== '' && tire?.tire_p != null;
                          const hasDepthPercent = hasTireDepth && hasTread;
                          return (
                            <div
                              key={node.id}
                              draggable
                              onDragStart={() => setDragIndex(index)}
                              onDragOver={(e) => e.preventDefault()}
                              onDrop={() => handleDrop(index)}
                              onClick={() => {
                                setActiveIndex(index);
                                applyLatestToIndex(index);
                              }}
                              className={`h-20 w-14 cursor-pointer rounded-2xl border border-slate-900/10 text-[9px] leading-tight shadow sm:h-24 sm:w-16 sm:text-[10px] lg:h-28 lg:w-20
                              ${hasDepthPercent ? 'bg-amber-50 text-amber-700' : 'bg-slate-900 text-white'}
                              ${activeIndex === index ? 'ring-2 ring-amber-400' : ''}`}
                            >
                              <div className="flex h-full flex-col items-center justify-center gap-1 px-2 text-center">
                                {/*    <span className="font-semibold">{distance ? `${formatThaiCurrency(distance, { showSymbol: false, decimals: 2 })} Km` : "ยังไม่ตรวจวัด"}</span> */}
                                <span className="font-semibold">{tire?.code ? `${tire?.code.substring(0, 6)}` : "ยังไม่ตรวจวัด"}</span>
                                {/*     <span className="font-semibold">
                                  {tire?.tire_p !== '' && tire?.tire_p != null
                                    ? `${(Number(tire.tire_p) * 6.89476).toFixed(2)} KPa`
                                    : 'ยังไม่ตรวจวัด'}
                                </span> */}
                                <span className="text-xs font-semibold">{index + 1}</span>
                                <span>{tire?.tire_p ? `${tire.tire_p}Psi` : "ยังไม่ตรวจวัด"}</span>
                                <span>{tire?.tire_deep !== '' && tire?.tread !== '' ? `${((Number(tire?.tire_deep) * 100) / Number(tire?.tread)).toFixed(2)} %` : "ยังไม่ตรวจวัด"}</span>

                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {swapLog.length > 0 && (
                  <div className="mt-4 rounded-xl border border-amber-100 bg-amber-50 px-3 py-2 text-xs text-slate-600">
                    <p className="font-semibold text-slate-700">ประวัติการสลับยาง</p>
                    <ul className="mt-1 space-y-1">
                      {swapLog.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm space-y-4">
                <h2 className="text-lg font-semibold text-slate-800">ข้อมูลยางตำแหน่งที่ {activeIndex + 1}</h2>
                <p className="text-xs text-slate-500">{positions[activeIndex]?.label}</p>

                <div>

                  <TireSearchSelect
                    value={activeTire?.gen || ""}
                    options={tireOptions.map((o) => ({ id: String(o.id), label: o.label }))}
                    onChange={(id) => onSelectTireGen(id)}
                  />


                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-slate-600">ราคา</label>
                    <input
                      value={activeTire?.price || ""}
                      onChange={(e) => updateActive("price", e.target.value)}
                      className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-600">ความลึกดอกยางใหม่</label>
                    <input
                      value={activeTire?.tread || ""}
                      readOnly
                      className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm text-slate-700"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-600">ซีรีส์</label>
                    <input
                      value={activeTire?.code || ""}
                      onChange={(e) => updateActive("code", e.target.value)}
                      className="mt-2 w-full rounded-xl border border-amber-100 bg-slate-50 px-3 py-2 text-sm text-slate-700"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-600">ความลึกดอกยาง ณ วันที่เช็ค</label>
                    <input
                      value={activeTire?.tire_deep || ""}
                      onChange={(e) => updateActive("tire_deep", e.target.value)}
                      className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-600">แรงดันลม</label>
                    <input
                      value={activeTire?.tire_p || ""}
                      onChange={(e) => updateActive("tire_p", e.target.value)}
                      className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm"
                    />
                  </div>



                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-600">หมายเหตุ</label>
                  <textarea
                    value={activeTire?.remark || ""}
                    onChange={(e) => updateActive("remark", e.target.value)}
                    className="mt-2 w-full rounded-xl border border-amber-100 bg-white px-3 py-2 text-sm"
                  />
                </div>

                <div className="rounded-xl border border-amber-100 bg-slate-50 p-4 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="text-sm font-semibold text-slate-700">ถอด/เปลี่ยนยาง</div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => addRemoveLog("ถอดยาง", "เก็บในคลังเพื่อสลับยาง")}
                        className="rounded-lg bg-amber-500 px-3 py-1 text-xs font-semibold text-white"
                      >
                        ถอดเก็บ
                      </button>
                      {/*     <button
                        type="button"
                        onClick={() => quickReplace("stock")}
                        className="rounded-lg bg-emerald-500 px-3 py-1 text-xs font-semibold text-white"
                      >
                        เปลี่ยนจากคลัง
                      </button> */}
                      <button
                        type="button"
                        onClick={openStockDialog}
                        className="rounded-lg bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700"
                      >
                        เลือกจากคลัง
                      </button>
                      {/*   <button
                        type="button"
                        onClick={() => quickReplace("new")}
                        className="rounded-lg bg-slate-700 px-3 py-1 text-xs font-semibold text-white"
                      >
                        เปลี่ยนยางใหม่
                      </button> */}
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <AutoCompleteSelect
                      label="ประเภทการทำรายการ"
                      value={removeAction}
                      options={[
                        { id: "ถอดยาง", label: "ถอดยาง" },
                        { id: "เปลี่ยนยาง", label: "เปลี่ยนยาง" },
                        { id: "สลับยาง", label: "สลับยาง" },
                        { id: "ย้ายยาง", label: "ย้ายยาง" },
                      ]}
                      placeholder="เลือกประเภท..."
                      onChange={(id) =>
                        setRemoveAction((prev) =>
                          id ? (id as TireAction["action"]) : prev
                        )
                      }
                    />
                    <AutoCompleteSelect
                      label="การจัดการยางถอด"
                      value={removeDisposition}
                      options={[
                        { id: "เก็บในคลังเพื่อสลับยาง", label: "เก็บในคลังเพื่อสลับยาง" },
                        { id: "เก็บไว้ใช้ภายหลัง", label: "เก็บไว้ใช้ภายหลัง" },
                        { id: "ทิ้ง", label: "ทิ้ง" },
                      ]}
                      placeholder="เลือกการจัดการ..."
                      onChange={(id) => setRemoveDisposition(id ?? "")}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-600">เหตุผล</label>
                    <input
                      value={removeReason}
                      onChange={(e) => setRemoveReason(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
                      placeholder="เช่น ยางแตก, ยางรั่ว"
                    />
                    <div className="mt-2 flex flex-wrap gap-2">
                      {["ยางแตก", "ยางรั่ว", "ดอกยางหมด"].map((label) => (
                        <button
                          key={label}
                          type="button"
                          onClick={() => setRemoveReason(label)}
                          className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600"
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                  {/*  <button
                    type="button"
                    onClick={addRemoveLog}
                    className="rounded-lg bg-amber-600 px-3 py-2 text-xs font-semibold text-white"
                  >
                    เพิ่มลงบันทึก
                  </button> */}
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
                  <span className="text-xs text-slate-400">ใช้ปุ่มบันทึกด้านบน</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>




      <div className="fixed bottom-2 left-0 right-0 z-20 w-full px-3 sm:left-1/2 sm:right-auto sm:w-[95%] sm:max-w-5xl sm:-translate-x-1/2">
        <div className="rounded-2xl border border-amber-100 bg-white/95 p-3 shadow-lg backdrop-blur">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs font-semibold text-slate-700">
              {detail?.car_registration_number ? `เช็คสภาพรถ: ${detail.car_registration_number}` : "เช็คสภาพรถ"}
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href="#section-info"
                className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700"
              >
                ข้อมูลรถ
              </a>
              <a
                href="#section-check"
                className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700"
              >
                ตรวจเช็ค
              </a>
              <a
                href="#section-tires"
                className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700"
              >
                ตำแหน่งล้อ
              </a>
            </div>
            <button
              onClick={onSave}
              disabled={saving}
              className="w-full rounded-xl bg-gradient-to-r from-amber-600 to-amber-400 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-amber-200 sm:w-auto"
            >
              {saving ? "Saving..." : editingCheckId ? "อัปเดต" : "บันทึก"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
