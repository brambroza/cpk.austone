import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { request } from "undici";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { formatThaiCurrency } from "@/utils/format-number";

type Params = { carId: string; checkId: string };

async function httpGetJson(url: string, headers: Record<string, string>) {
    const res = await request(url, { method: "GET", headers });
    const text = await res.body.text();

    if (res.statusCode < 200 || res.statusCode >= 300) {
        return { ok: false as const, status: res.statusCode, text };
    }

    try {
        return { ok: true as const, status: res.statusCode, json: JSON.parse(text) };
    } catch {
        return { ok: false as const, status: 500, text: "Invalid JSON from upstream" };
    }
}

async function httpGetBuffer(url: string, headers: Record<string, string>) {
    const res = await request(url, { method: "GET", headers });
    const buf = Buffer.from(await res.body.arrayBuffer());

    if (res.statusCode < 200 || res.statusCode >= 300) {
        return { ok: false as const, status: res.statusCode, buf };
    }
    return { ok: true as const, status: res.statusCode, buf };
}

// เดาง่าย ๆ จากนามสกุล
function toDataUrlImage(buf: Buffer, url: string) {
    const u = url.toLowerCase();
    const isJpg = u.endsWith(".jpg") || u.endsWith(".jpeg");
    const mime = isJpg ? "image/jpeg" : "image/png";
    return `data:${mime};base64,${buf.toString("base64")}`;
}

// helper วาด label:value สองคอลัมน์แบบง่าย


type DrawThaiWrapOptions = {
    maxWidth: number;
    lineHeight?: number;      // ระยะบรรทัด (หน่วยเดียวกับ jsPDF)
    indentFirst?: number;     // ระยะเยื้องบรรทัดแรก (px)
    indentNext?: number;      // ระยะเยื้องบรรทัดถัดไป (px) เช่นให้ตรงหลัง "1. "
    trim?: boolean;
};

const drawThaiTextWrap = (
    doc: jsPDF,
    text: string,
    x: number,
    y: number,
    opts: DrawThaiWrapOptions
): number => {
    const sara = ['่', '้', '๊', '๋', '์'];
    const pushers = ['ิ', 'ี', 'ึ', 'ื', 'ำ', 'ั'];

    const {
        maxWidth,
        lineHeight = 4.2,  // ✅ ค่าเริ่มต้นดูดีสำหรับ font 8-10
        indentFirst = 0,
        indentNext = 0,
        trim = true,
    } = opts;

    const s = trim ? String(text ?? "").trim() : String(text ?? "");
    if (!s) return y;

    // ตัดบรรทัดแบบไทย: เติมทีละตัวจนเกิน maxWidth แล้วค่อยขึ้นบรรทัดใหม่
    const wrapThai = (input: string): string[] => {
        const out: string[] = [];
        let line = "";

        // normalize ช่องว่าง
        const t = input.replace(/\s+/g, " ").trim();

        for (let i = 0; i < t.length; i++) {
            const ch = t[i];

            // ลองเพิ่มตัวอักษร แล้วเช็คความกว้าง
            const candidate = line + ch;

            // indent มีผลกับ maxWidth (บรรทัดแรก/ถัดไป)
            const indent = out.length === 0 ? indentFirst : indentNext;
            const w = doc.getTextWidth(candidate);

            if (w <= (maxWidth - indent) || line.length === 0) {
                line = candidate;
                continue;
            }

            // ถ้าเกิน ให้ตัดที่จุดก่อนหน้า (และถ้าล่าสุดเป็นช่องว่างให้ตัดทิ้ง)
            out.push(line.trimEnd());
            line = ch === " " ? "" : ch;
        }

        if (line.trim().length) out.push(line.trimEnd());
        return out;
    };

    const lines = wrapThai(s);
    let currentY = y;

    const drawThaiLine = (line: string, dx: number, dy: number) => {
        let charX = dx;
        let before = false;

        for (let i = 0; i < line.length; i++) {
            const c = line.charAt(i);
            const isSara = sara.includes(c);
            const isPusher = pushers.includes(c);

            if (isSara && !before) {
                before = pushers.includes(line.charAt(i + 1));
            }

            if (isSara && before) {
                doc.text(c, charX, dy - 0.65);
            } else {
                doc.text(c, charX, dy);
                charX += doc.getTextWidth(c);
            }

            before = isPusher;
        }
    };

    lines.forEach((line, idx) => {
        const indent = idx === 0 ? indentFirst : indentNext;
        drawThaiLine(line, x + indent, currentY);
        currentY += lineHeight;
    });

    return currentY;
};

const drawThaiText = (doc: jsPDF, text: string, x: number, y: number): void => {
    const sara = ['่', '้', '๊', '๋', '์'];
    const pushers = ['ิ', 'ี', 'ึ', 'ื', 'ำ', 'ั'];

    let charPositionX = x;
    let before: boolean = false;

    for (let i = 0; i < text.length; i += 1) {
        const c = text.charAt(i);
        const isSara = sara.includes(c);
        const isPusher = pushers.includes(c);

        if (isSara && !before) {
            before = pushers.includes(text.charAt(i + 1));
        }

        if (isSara && before) {
            /*  const lastCharWidth = doc.getTextWidth(base.charAt(base.length - 1)); */

            doc.text(c, charPositionX, y - 0.65);
        } else {
            // ตัวอักษรปกติ
            doc.text(c, charPositionX, y);
            charPositionX += doc.getTextWidth(c);
        }

        before = isPusher;
    }
};

function drawKV(
    doc: jsPDF,
    x: number,
    y: number,
    label: string,
    value: any,
    labelW = 34
) {
    drawThaiText(doc, label, x, y);
    // doc.text(label, x, y);
    // doc.text(`${value ?? "-"}`, x + labelW, y);
    drawThaiText(doc, `${value ?? "-"}`, x + labelW, y);
}

export async function generateCarReportPdf(req: Request, params: Params | Promise<Params>) {
    try {


        const { carId, checkId } = await params;

        const flaskBase = process.env.FLASK_API_BASE || process.env.NEXT_PUBLIC_API_BASE_URL;
        if (!flaskBase) return new NextResponse("Missing FLASK_API_BASE", { status: 500 });

        const auth = req.headers.get("authorization") ?? "";
        const cookie = req.headers.get("cookie") ?? "";

        if (!auth && !cookie) {
            return NextResponse.json({ message: "Missing token" }, { status: 401 });
        }

        const upstreamHeaders: Record<string, string> = {
            ...(auth ? { Authorization: auth } : {}),
            ...(cookie ? { Cookie: cookie } : {}),
        };

        // 1) ดึง report json
        const reportUrl = `${flaskBase}/api/cars/${carId}/checks/${checkId}/report`;
        const r1 = await httpGetJson(reportUrl, upstreamHeaders);
        if (!r1.ok) {
            return new NextResponse(r1.text || "Failed to load report from Flask", { status: r1.status });
        }

        const payload = r1.json;
        const report = payload?.data ?? payload;



        if (!report?.car) {
            return new NextResponse("Invalid report shape (missing car)", { status: 500 });
        }



        // 2) โหลดฟอนต์ไทย แล้วฝังเข้า jsPDF
        const fontPath = path.join(process.cwd(), "public", "fonts", "NotoSansThai-Regular.ttf");
        if (!fs.existsSync(fontPath)) {
            return new NextResponse(`Thai font not found: ${fontPath}`, { status: 500 });
        }
        const fontBase64 = fs.readFileSync(fontPath).toString("base64");

        // 3) โหลด logo + รูปประกอบเป็น dataURL
        const logoUrl = `${flaskBase}/static/images/logo2.png`;
        let logoDataUrl: string | null = null;
        const logoRes = await httpGetBuffer(logoUrl, upstreamHeaders);
        if (logoRes.ok) logoDataUrl = toDataUrlImage(logoRes.buf, logoUrl);

        const imgUrlsRaw: string[] = [
            report?.images?.check_1 ? `${flaskBase}${report.images.check_1}` : "",
            report?.images?.check_2 ? `${flaskBase}${report.images.check_2}` : "",
            report?.images?.check_3 ? `${flaskBase}${report.images.check_3}` : "",
        ].filter(Boolean);

        const imgDataUrls: string[] = [];
        for (const u of imgUrlsRaw) {
            const imgRes = await httpGetBuffer(u, upstreamHeaders);
            if (imgRes.ok) imgDataUrls.push(toDataUrlImage(imgRes.buf, u));
        }

        const tires = Array.isArray(report?.tires) ? report.tires : [];

        console.log("tires" ,tires);

        // 4) สร้าง PDF (A4 แนวนอน จะใกล้ตารางเดิมมากกว่า)
        const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });

        // ฝังฟอนต์
        doc.addFileToVFS("NotoSansThai-Regular.ttf", fontBase64);
        doc.addFont("NotoSansThai-Regular.ttf", "TH", "normal");
        doc.setFont("TH", "normal");

        const pageW = doc.internal.pageSize.getWidth();
        const margin = 10;

        // โลโก้
        let cursorY = 12;
        if (logoDataUrl) {
            // กว้างประมาณ 45mm (ปรับได้)
            doc.addImage(logoDataUrl, "PNG", margin, 8, 45, 12);
            cursorY = 24;
        }

        // Title
        doc.setFontSize(14);
        doc.text("รายงานการตรวจเช็ครถ", pageW - 60, 12);
        cursorY += 6;

        // Header 2 คอลัมน์
        doc.setFontSize(10);

        const leftX = margin;
        const rightX = pageW / 2 + 5;

        const car = report?.car ?? {};
        const summary = report?.summary ?? {};
        const swap_log = report?.swap_logs ?? {};
        cursorY -= 3;

        // ซ้าย
        drawKV(doc, leftX, cursorY, "บจก. : ", "", 22);
        drawKV(doc, leftX, cursorY + 6, "ทะเบียนรถ : ", "", 22);
        drawKV(doc, leftX, cursorY + 12, "วันที่เช็คครั้งแรก : ", "", 30);
        drawKV(doc, leftX, cursorY + 18, "เลขไมล์เริ่มต้น : ", "", 30);
        drawKV(doc, leftX, cursorY + 24, "ระยะทางใช้ไป (กม.) : ", "", 38);

        // ซ้าย value
        drawKV(doc, leftX + 18, cursorY, "", car.company_name ?? "-", 22);
        drawKV(doc, leftX + 18, cursorY + 6, "", car.registration_number ?? "-", 22);
        drawKV(doc, leftX + 18, cursorY + 12, "", summary.start_date ?? "-", 22);
        drawKV(doc, leftX + 18, cursorY + 18, "", formatThaiCurrency(summary.start_mile ?? "0", { showSymbol: false, decimals: 0 }), 22);
        drawKV(doc, leftX + 18, cursorY + 24, "", formatThaiCurrency(summary.distance_used ?? "0", { showSymbol: false, decimals: 0 }), 22);

        // ขวา
        drawKV(doc, rightX + 10, cursorY, "สาขา : ", "", 18);
        drawKV(doc, rightX - 55, cursorY + 6, "ประเภทรถ : ", "", 18);
        drawKV(doc, rightX + 10, cursorY + 6, "ผู้ขับ : ", "", 18);
        drawKV(doc, rightX + 10, cursorY + 12, "วันที่เช็คล่าสุด : ", "", 30);
        drawKV(doc, rightX + 10, cursorY + 18, "เลขไมล์ล่าสุด : ", "", 30);
        drawKV(doc, rightX - 55, cursorY + 24, "ครั้งที่ : ", "", 18);

        // ขวา value
        drawKV(doc, rightX + 18, cursorY, "", car.branch_name ?? "-", 18);
        drawKV(doc, (rightX - 60) + 10, cursorY + 6, "", car.type ?? "-", 18);
        drawKV(doc, rightX + 18, cursorY + 6, "", car.driver ?? "-", 18);
        drawKV(doc, rightX + 18, cursorY + 12, "", summary.last_date ?? "-", 19);
        drawKV(doc, rightX + 18, cursorY + 18, "", formatThaiCurrency(summary.last_mile ?? "0", { showSymbol: false, decimals: 0 }), 18);
        drawKV(doc, (rightX - 60) + 10, cursorY + 24, "", formatThaiCurrency(summary.round ?? "0", { showSymbol: false, decimals: 0 }), 18);

        cursorY += 34;

        // 5) ตาราง AutoTable
        doc.setFontSize(11);

        cursorY += 2;

        const head = [[
            "ตำแหน่งล้อ",
            "ยี่ห้อ",
            "Serial",
            "ขนาดยาง",
            "ลายยาง",
            "ราคายาง/เส้น",
            "ดอกยางใหม่",
            "ดอกยางที่บันทึกครั้งแรก",
            "ดอกยาง ณ วันที่ บันทึก(มม.)",
            "ดอกยางใช้ไป(มม.)",
            "อัตราเฉลี่ย(กม./มม.)",
            "CPK",
            "ก.คาดการณ์วิ่ง",
            "ลมยาง", 
            "หมายเหตุ"
        ]];

        const body = tires.map((t: any, i: number) => ([
            t?.position?.replaceAll('ตำแหน่งที่', '') || t?.index || `${i + 1}`,
            t?.brand_name ?? "-",
            t?.serial ?? "-",
            t?.tire_size ?? "-",
            t?.tire_identity ?? "-",
            formatThaiCurrency(t?.price ?? "0", { showSymbol: false, decimals: 0 }),
            t?.tread_new ?? "-",
            t?.tread_first ?? "-",
            t?.depth ?? "-",
            t?.tread_used ?? "-",
            t?.avg_km_per_mm ?? "-",
            t?.cpk ?? "-",
            t?.predict ?? "-",
            t?.condition ?? "-",
            t?.remark ?? "-"


        ]));

        autoTable(doc, {
            startY: cursorY - 4,
            head,
            body,
            theme: "grid",
            styles: {
                font: "TH",
                fontSize: 8,
                cellPadding: 1.5,
                overflow: "linebreak",
                valign: "middle",
            },
            headStyles: {
                font: "TH",
                fontStyle: "normal",
                fillColor: "#33A5D4",
                fontSize: 9,
                halign: 'center',
            },
            // ปรับความกว้างบางคอลัมน์ให้ใกล้ของเดิม
            columnStyles: {
                0: { cellWidth: 18 }, // ตำแหน่งล้อ
                1: { cellWidth: 25 }, // ยี่ห้อ
                2: { cellWidth: 25 }, // Serial
                3: { cellWidth: 30 }, // ขนาด
                4: { cellWidth: 16 }, // ลาย
                5: { cellWidth: 15, halign: 'right' }, // ราคา
                6: { cellWidth: 14, halign: 'center' }, // ดอกยางใหม่
                7: { cellWidth: 20, halign: 'center' }, // ดอกยางครั้งแรก
                8: { cellWidth: 20, halign: 'center' }, // ดอกยาง ณ วันที่
                9: { cellWidth: 19, halign: 'center' }, // ดอกยางที่ใช้ไป
                10: { cellWidth: 16 },
                11: { cellWidth: 12 , halign: 'center'},
                12: { cellWidth: 19 , halign: 'center'},
                13: { cellWidth: 12 , halign: 'center'},
                14: { cellWidth: 20 },
            },
            margin: { left: margin, right: margin },
        });

        // 6) รูปประกอบ (ถ้ามี) — วางหลังตาราง
        const afterTableY = (doc as any).lastAutoTable?.finalY ?? (cursorY + 10);
        let imgY = afterTableY + 8;



        const swapLines = swap_log?.length ? swap_log : [""];

        doc.setFontSize(8);

        let y = imgY;
        const maxWidth = 90;
        const lineHeight = 4.2;

        for (let i = 0; i < swapLines.length; i++) {
            const prefix = `${i + 1}. `;
            const msg = swapLines[i] ?? "";

            // วาด "เลขลำดับ" ก่อน
            doc.text(prefix, rightX + 40, y);

            // คำนวณ indent ให้บรรทัดต่อๆ ไปเริ่มหลัง "1. "
            const indent = doc.getTextWidth(prefix);

            // วาดข้อความที่เหลือแบบ wrap ไทย
            y = drawThaiTextWrap(doc, msg, rightX + 40, y, {
                maxWidth,
                lineHeight,
                indentFirst: indent,
                indentNext: indent,
            });

            // เว้นช่องว่างระหว่างรายการ
            y += 1.5;
        }
        /*   imgY += + 8;   */

        if (imgDataUrls.length) {
            // ถ้าตารางชนท้ายหน้า ให้ขึ้นหน้าใหม่ก่อนแปะรูป
            if (imgY > doc.internal.pageSize.getHeight() - 50) {
                doc.addPage();
                imgY = 12;
            }

            doc.setFontSize(11);
            doc.text("รูปประกอบการตรวจเช็ค", margin, imgY);
            imgY += 4;

            const imgW = 55;
            const imgH = 45;
            const gap = 6;

            let x = margin;
            for (let idx = 0; idx < imgDataUrls.length; idx++) {
                // ถ้าเต็มแถวให้ขึ้นแถวใหม่
                if (x + imgW > pageW - margin) {
                    x = margin;
                    imgY += imgH + gap;
                }
                // ถ้าชนท้ายหน้า ให้ขึ้นหน้าใหม่
                if (imgY + imgH > doc.internal.pageSize.getHeight() - margin) {
                    doc.addPage();
                    imgY = 12;
                    x = margin;
                }

                // ให้ jsPDF เดา type จาก dataURL: ถ้า jpeg จะใช้ "JPEG" ไม่งั้น "PNG"
                const isJpeg = imgDataUrls[idx].startsWith("data:image/jpeg");
                doc.addImage(imgDataUrls[idx], isJpeg ? "JPEG" : "PNG", x, imgY, imgW, imgH);
                x += imgW + gap;
            }
        }

        // 7) ส่งออกเป็น Buffer
        const arrayBuffer = doc.output("arraybuffer");
        const pdfBuffer = Buffer.from(arrayBuffer);

        return new NextResponse(new Uint8Array(pdfBuffer), {
            status: 200,
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": `attachment; filename="car-report-${checkId}.pdf"`,
                "Cache-Control": "no-store",
            },
        });
    } catch (e: any) {
        console.error("PDF_ROUTE_ERROR:", e);
        return new NextResponse(e?.message ?? "PDF generation failed", { status: 500 });
    }
}