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
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/url [external] (url, cjs)");
;
;
;
async function generateCarReportPdf(req, params) {
    const { carId, checkId } = params;
    const flaskBase = ("TURBOPACK compile-time value", "http://localhost:5001");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // ✅ รับ auth ได้ทั้ง header และ cookie
    const auth = req.headers.get("authorization") ?? "";
    const cookie = req.headers.get("cookie") ?? "";
    if (!auth && !cookie) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Missing token (no Authorization header and no Cookie)"
        }, {
            status: 401
        });
    }
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
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](text || "Failed to load report from Flask", {
            status: reportRes.status
        });
    }
    const json = await reportRes.json();
    const report = json?.data ?? json;
    const React = (await __turbopack_context__.A("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-route] (ecmascript, async loader)")).default;
    const { Document, Page, Text, View, StyleSheet, Image, Font, renderToBuffer } = await __turbopack_context__.A("[externals]/@react-pdf/renderer [external] (@react-pdf/renderer, esm_import, [project]/node_modules/@react-pdf/renderer, async loader)");
    // ✅ ฟอนต์ไทย (แนะนำ NotoSansThai)
    const fontPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "fonts", "NotoSansThai-Regular.ttf");
    Font.register({
        family: "TH",
        src: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["pathToFileURL"])(fontPath).href
    });
    const styles = StyleSheet.create({
        page: {
            padding: 24,
            fontSize: 10,
            fontFamily: "TH"
        },
        logo: {
            width: 140,
            height: 32,
            marginBottom: 10
        },
        title: {
            fontSize: 14,
            marginBottom: 10,
            fontFamily: "TH"
        },
        row: {
            flexDirection: "row",
            marginBottom: 4
        },
        label: {
            width: 120
        }
    });
    const logoUrl = `${flaskBase}/static/images/logo2.png`;
    const PdfDoc = ()=>React.createElement(Document, null, React.createElement(Page, {
            size: "A4",
            style: styles.page
        }, React.createElement(Image, {
            src: logoUrl,
            style: styles.logo
        }), React.createElement(Text, {
            style: styles.title
        }, "รายงานการตรวจเช็ครถ"), React.createElement(View, null, React.createElement(View, {
            style: styles.row
        }, React.createElement(Text, {
            style: styles.label
        }, "บจก.:"), React.createElement(Text, null, report?.car?.company_name ?? "-")), React.createElement(View, {
            style: styles.row
        }, React.createElement(Text, {
            style: styles.label
        }, "ทะเบียนรถ:"), React.createElement(Text, null, report?.car?.registration_number ?? "-")), React.createElement(View, {
            style: styles.row
        }, React.createElement(Text, {
            style: styles.label
        }, "ครั้งที่:"), React.createElement(Text, null, report?.summary?.round ?? "-")))));
    const pdfBuffer = await renderToBuffer(React.createElement(PdfDoc));
    const body = new Uint8Array(pdfBuffer);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](body, {
        status: 200,
        headers: {
            "Content-Type": "application/pdf",
            // ✅ ไฟล์แนบ
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
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$genreportpdf$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/genreportpdf.ts [app-route] (ecmascript)");
;
const runtime = "nodejs";
async function GET(req, ctx) {
    const params = await ctx.params;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$genreportpdf$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateCarReportPdf"])(req, params);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__20196c58._.js.map