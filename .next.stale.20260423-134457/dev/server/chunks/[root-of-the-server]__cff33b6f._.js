module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[project]/src/lib/genreportpdf.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateCarReportPdf",
    ()=>generateCarReportPdf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/url [external] (url, cjs)");
;
;
;
;
// ---------- helpers ----------
function safe(v, fallback = "-") {
    if (v === null || v === undefined) return fallback;
    const s = String(v).trim();
    return s.length ? s : fallback;
}
// ถ้าเป็น base64 ดิบ -> เติม prefix ให้เป็น data-uri
function toDataImageMaybe(base64) {
    if (!base64) return "";
    const s = base64.trim();
    if (!s) return "";
    if (s.startsWith("data:image/")) return s;
    // เดาเป็น jpeg ก่อน (เปลี่ยนเป็น png ได้ถ้ารู้แน่)
    return `data:image/jpeg;base64,${s}`;
}
// ทำ url รูปจาก flask ให้เป็น absolute
function toAbsUrl(flaskBase, p) {
    if (!p) return "";
    const s = p.trim();
    if (!s) return "";
    if (s.startsWith("http://") || s.startsWith("https://")) return s;
    // path แบบ /static/xxx
    if (s.startsWith("/")) return `${flaskBase}${s}`;
    return `${flaskBase}/${s}`;
}
async function generateCarReportPdf(req, params) {
    const { carId, checkId } = await params;
    // ✅ ต้องเป็น BASE URL ของ Flask/API (เช่น https://api.xxx.com)
    const flaskBase = ("TURBOPACK compile-time value", "http://localhost:5001");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // forward auth/cookie ไป flask (ถ้าระบบต้องใช้ token)
    const auth = req.headers.get("authorization") ?? "";
    const cookie = req.headers.get("cookie") ?? "";
    // 1) โหลด report JSON จาก Flask
    const reportUrl = `${flaskBase}/api/cars/${carId}/checks/${checkId}/report`;
    const reportRes = await fetch(reportUrl, {
        headers: {
            ...auth ? {
                Authorization: auth
            } : {},
            ...cookie ? {
                Cookie: cookie
            } : {}
        },
        cache: "no-store"
    });
    if (!reportRes.ok) {
        const text = await reportRes.text().catch(()=>"");
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](text || "Failed to load report from API", {
            status: reportRes.status
        });
    }
    const json = await reportRes.json();
    const report = json?.data ?? json; // รองรับ {data:{...}} หรือ {...}
    // 2) import react-pdf แบบ dynamic (กัน edge/env)
    const React = (await __turbopack_context__.A("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-route] (ecmascript, async loader)")).default;
    const { Document, Page, Text, View, StyleSheet, Image, Font, renderToBuffer } = await __turbopack_context__.A("[externals]/@react-pdf/renderer [external] (@react-pdf/renderer, esm_import, [project]/node_modules/@react-pdf/renderer, async loader)");
    // 3) register ฟอนต์ไทย (server absolute path)
    const regularPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "fonts", "NotoSansThai-Regular.ttf");
    const boldPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "fonts", "NotoSansThai-Regular.ttf");
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(regularPath)) {
        throw new Error(`Thai font not found: ${regularPath}`);
    }
    Font.register({
        family: "TH",
        fonts: [
            {
                src: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["pathToFileURL"])(regularPath).href,
                fontWeight: "normal"
            },
            ...__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(boldPath) ? [
                {
                    src: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["pathToFileURL"])(boldPath).href,
                    fontWeight: "bold"
                }
            ] : []
        ]
    });
    // 4) เตรียม data ที่ใช้ใน PDF
    const car = report?.car ?? {};
    const summary = report?.summary ?? {};
    const tires = Array.isArray(report?.tires) ? report.tires : [];
    // logo: ใช้จาก flask เหมือนตัวอย่าง
    const logoUrl = `${flaskBase}/static/images/logo2.png`;
    // รูป: รองรับ images_data (base64) และ images (path)
    const img1 = toDataImageMaybe(report?.images_data?.check_1) || toAbsUrl(flaskBase, report?.images?.check_1);
    const img2 = toDataImageMaybe(report?.images_data?.check_2) || toAbsUrl(flaskBase, report?.images?.check_2);
    const img3 = toDataImageMaybe(report?.images_data?.check_3) || toAbsUrl(flaskBase, report?.images?.check_3);
    const imageUrls = [
        img1,
        img2,
        img3
    ].filter(Boolean);
    // 5) Styles (ใกล้เคียงไฟล์แนบ)
    const styles = StyleSheet.create({
        page: {
            paddingTop: 18,
            paddingHorizontal: 24,
            paddingBottom: 18,
            fontSize: 10,
            color: "#111",
            fontFamily: "TH"
        },
        // header
        logo: {
            width: 140,
            height: 28,
            marginBottom: 10
        },
        headerGrid: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12
        },
        col: {
            width: "48%"
        },
        row: {
            flexDirection: "row",
            marginBottom: 5
        },
        label: {
            width: 92
        },
        value: {
            flex: 1
        },
        // table
        table: {
            borderWidth: 1,
            borderColor: "#333"
        },
        tr: {
            flexDirection: "row",
            borderBottomWidth: 1,
            borderBottomColor: "#333"
        },
        th: {
            backgroundColor: "#f5f5f5"
        },
        cell: {
            paddingVertical: 4,
            paddingHorizontal: 3,
            borderRightWidth: 1,
            borderRightColor: "#333"
        },
        // กำหนดความกว้างใกล้เคียงตัวอย่าง
        cPos: {
            width: "10%"
        },
        cBrand: {
            width: "10%"
        },
        cSerial: {
            width: "9%"
        },
        cSize: {
            width: "14%"
        },
        cPattern: {
            width: "9%"
        },
        cPrice: {
            width: "8%"
        },
        cNew: {
            width: "8%"
        },
        cFirst: {
            width: "12%"
        },
        cNow: {
            width: "12%"
        },
        cUsed: {
            width: "10%"
        },
        cAvg: {
            width: "10%"
        },
        cCpk: {
            width: "6%"
        },
        cPredict: {
            width: "8%"
        },
        cCond: {
            width: "8%",
            borderRightWidth: 0
        },
        sectionTitle: {
            marginTop: 14,
            marginBottom: 6,
            fontSize: 11,
            fontWeight: "bold"
        },
        // images
        imageRow: {
            flexDirection: "row",
            gap: 10,
            marginTop: 6
        },
        imageBox: {
            width: 150,
            height: 115,
            borderWidth: 1,
            borderColor: "#999",
            objectFit: "cover"
        }
    });
    // react-pdf ไม่ชอบ undefined — ให้ทำเป็น string เสมอ
    const PdfDoc = ()=>React.createElement(Document, null, React.createElement(Page, {
            size: "A4",
            style: styles.page
        }, // Logo
        React.createElement(Image, {
            src: logoUrl,
            style: styles.logo
        }), // Header (2 columns)
        React.createElement(View, {
            style: styles.headerGrid
        }, // left
        React.createElement(View, {
            style: styles.col
        }, React.createElement(View, {
            style: styles.row
        }, React.createElement(Text, {
            style: styles.label
        }, "บจก."), React.createElement(Text, {
            style: styles.value
        }, `: ${safe(car.company_name)}`)), React.createElement(View, {
            style: styles.row
        }, React.createElement(Text, {
            style: styles.label
        }, "ทะเบียนรถ"), React.createElement(Text, {
            style: styles.value
        }, `: ${safe(car.registration_number)}`)), React.createElement(View, {
            style: styles.row
        }, React.createElement(Text, {
            style: styles.label
        }, "วันที่เช็คครั้งแรก"), React.createElement(Text, {
            style: styles.value
        }, `: ${safe(summary.start_date)}`)), React.createElement(View, {
            style: styles.row
        }, React.createElement(Text, {
            style: styles.label
        }, "เลขไมล์เริ่มต้น"), React.createElement(Text, {
            style: styles.value
        }, `: ${safe(summary.start_mile)}`)), React.createElement(View, {
            style: styles.row
        }, React.createElement(Text, {
            style: styles.label
        }, "ระยะทางใช้ไป (กม.)"), React.createElement(Text, {
            style: styles.value
        }, `: ${safe(summary.distance_used)}`))), // right
        React.createElement(View, {
            style: styles.col
        }, React.createElement(View, {
            style: styles.row
        }, React.createElement(Text, {
            style: styles.label
        }, "สาขา"), React.createElement(Text, {
            style: styles.value
        }, `: ${safe(car.branch_name)}`)), React.createElement(View, {
            style: styles.row
        }, React.createElement(Text, {
            style: styles.label
        }, "ประเภทรถ"), React.createElement(Text, {
            style: styles.value
        }, `: ${safe(car.type)}`)), React.createElement(View, {
            style: styles.row
        }, React.createElement(Text, {
            style: styles.label
        }, "ผู้ขับ"), React.createElement(Text, {
            style: styles.value
        }, `: ${safe(car.driver)}`)), React.createElement(View, {
            style: styles.row
        }, React.createElement(Text, {
            style: styles.label
        }, "วันที่เช็คล่าสุด"), React.createElement(Text, {
            style: styles.value
        }, `: ${safe(summary.last_date)}`)), React.createElement(View, {
            style: styles.row
        }, React.createElement(Text, {
            style: styles.label
        }, "เลขไมล์ล่าสุด"), React.createElement(Text, {
            style: styles.value
        }, `: ${safe(summary.last_mile)}`)), React.createElement(View, {
            style: styles.row
        }, React.createElement(Text, {
            style: styles.label
        }, "ครั้งที่"), React.createElement(Text, {
            style: styles.value
        }, `: ${safe(summary.round)}`)))), // Table title
        React.createElement(Text, {
            style: styles.sectionTitle
        }, "รายการการเช็คยางแต่ละเส้น"), // Table
        React.createElement(View, {
            style: styles.table
        }, // header row
        React.createElement(View, {
            style: [
                styles.tr,
                styles.th
            ]
        }, React.createElement(Text, {
            style: [
                styles.cell,
                styles.cPos
            ]
        }, "ตำแหน่งล้อ"), React.createElement(Text, {
            style: [
                styles.cell,
                styles.cBrand
            ]
        }, "ยี่ห้อ"), React.createElement(Text, {
            style: [
                styles.cell,
                styles.cSerial
            ]
        }, "Serial"), React.createElement(Text, {
            style: [
                styles.cell,
                styles.cSize
            ]
        }, "ขนาดยาง"), React.createElement(Text, {
            style: [
                styles.cell,
                styles.cPattern
            ]
        }, "ลายยาง"), React.createElement(Text, {
            style: [
                styles.cell,
                styles.cPrice
            ]
        }, "ราคา/เส้น"), React.createElement(Text, {
            style: [
                styles.cell,
                styles.cNew
            ]
        }, "ดอกยางใหม่"), React.createElement(Text, {
            style: [
                styles.cell,
                styles.cFirst
            ]
        }, "ดอกยางครั้งแรก"), React.createElement(Text, {
            style: [
                styles.cell,
                styles.cNow
            ]
        }, "ดอกยางล่าสุด"), React.createElement(Text, {
            style: [
                styles.cell,
                styles.cUsed
            ]
        }, "ดอกยางใช้ไป"), React.createElement(Text, {
            style: [
                styles.cell,
                styles.cAvg
            ]
        }, "อัตราเฉลี่ย"), React.createElement(Text, {
            style: [
                styles.cell,
                styles.cCpk
            ]
        }, "CPK"), React.createElement(Text, {
            style: [
                styles.cell,
                styles.cPredict
            ]
        }, "ก.คาดการณ์วิ่ง"), React.createElement(Text, {
            style: [
                styles.cell,
                styles.cCond
            ]
        }, "สภาพยาง")), // data rows
        ...tires.map((t, i)=>React.createElement(View, {
                key: `${t?.index ?? i}-${t?.serial ?? i}`,
                style: styles.tr
            }, React.createElement(Text, {
                style: [
                    styles.cell,
                    styles.cPos
                ]
            }, safe(t?.position ?? t?.index)), React.createElement(Text, {
                style: [
                    styles.cell,
                    styles.cBrand
                ]
            }, safe(t?.brand_name)), React.createElement(Text, {
                style: [
                    styles.cell,
                    styles.cSerial
                ]
            }, safe(t?.serial)), React.createElement(Text, {
                style: [
                    styles.cell,
                    styles.cSize
                ]
            }, safe(t?.tire_size)), React.createElement(Text, {
                style: [
                    styles.cell,
                    styles.cPattern
                ]
            }, safe(t?.tire_identity)), React.createElement(Text, {
                style: [
                    styles.cell,
                    styles.cPrice
                ]
            }, safe(t?.price)), React.createElement(Text, {
                style: [
                    styles.cell,
                    styles.cNew
                ]
            }, safe(t?.tread_new)), React.createElement(Text, {
                style: [
                    styles.cell,
                    styles.cFirst
                ]
            }, safe(t?.tread_first)), React.createElement(Text, {
                style: [
                    styles.cell,
                    styles.cNow
                ]
            }, safe(t?.depth)), React.createElement(Text, {
                style: [
                    styles.cell,
                    styles.cUsed
                ]
            }, safe(t?.tread_used)), React.createElement(Text, {
                style: [
                    styles.cell,
                    styles.cAvg
                ]
            }, safe(t?.avg_km_per_mm)), React.createElement(Text, {
                style: [
                    styles.cell,
                    styles.cCpk
                ]
            }, safe(t?.cpk)), React.createElement(Text, {
                style: [
                    styles.cell,
                    styles.cPredict
                ]
            }, safe(t?.predict)), React.createElement(Text, {
                style: [
                    styles.cell,
                    styles.cCond
                ]
            }, safe(t?.condition))))), // Images
        React.createElement(Text, {
            style: styles.sectionTitle
        }, "รูปประกอบการตรวจเช็ค"), React.createElement(View, {
            style: styles.imageRow
        }, ...imageUrls.map((src, idx)=>React.createElement(Image, {
                key: `img-${idx}`,
                src,
                style: styles.imageBox
            })))));
    // 6) render pdf
    const pdfBuffer = await renderToBuffer(React.createElement(PdfDoc));
    const body = new Uint8Array(pdfBuffer); // ✅ สำคัญสำหรับ NextResponse
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](body, {
        status: 200,
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename="car-report-${checkId}.pdf"`,
            "Cache-Control": "no-store"
        }
    });
}
}),
"[project]/src/app/api/cars/[carId]/checks/[checkId]/report.pdf/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "dynamic",
    ()=>dynamic,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$genreportpdf$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/genreportpdf.ts [app-route] (ecmascript)");
;
const runtime = "nodejs";
const dynamic = "force-dynamic"; // ✅ แทน cache:no-store
async function GET(req, ctx) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$genreportpdf$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateCarReportPdf"])(req, ctx.params);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__cff33b6f._.js.map