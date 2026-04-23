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
"[project]/src/lib/genreportpdf.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateCarReportPdf",
    ()=>generateCarReportPdf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
async function generateCarReportPdf(req, params) {
    const { carId, checkId } = params;
    const flaskBase = ("TURBOPACK compile-time value", "http://localhost:5001");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const auth = req.headers.get("authorization") ?? "";
    const cookie = req.headers.get("cookie") ?? "";
    // ถ้าระบบคุณต้องใช้ token จริง ๆ ให้เปิด if นี้
    // if (!auth && !cookie) return NextResponse.json({ message: "Missing token" }, { status: 401 });
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
    const { Document, Page, Text, View, StyleSheet, renderToBuffer } = await __turbopack_context__.A("[externals]/@react-pdf/renderer [external] (@react-pdf/renderer, esm_import, [project]/node_modules/@react-pdf/renderer, async loader)");
    // ✅ ตัด Font.register และ Image ออกก่อนเพื่อให้รอด 100%
    const styles = StyleSheet.create({
        page: {
            padding: 24,
            fontSize: 11
        },
        title: {
            fontSize: 16,
            marginBottom: 10
        },
        row: {
            flexDirection: "row",
            marginBottom: 6
        },
        label: {
            width: 140
        }
    });
    const PdfDoc = ()=>React.createElement(Document, null, React.createElement(Page, {
            size: "A4",
            style: styles.page
        }, React.createElement(Text, {
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
        }, "สาขา:"), React.createElement(Text, null, report?.car?.branch_name ?? "-")))));
    const pdfBuffer = await renderToBuffer(React.createElement(PdfDoc));
    const body = new Uint8Array(pdfBuffer);
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
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$genreportpdf$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/genreportpdf.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
;
const runtime = "nodejs";
async function GET(req, ctx) {
    try {
        const params = await ctx.params;
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$genreportpdf$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateCarReportPdf"])(req, params);
    } catch (e) {
        // ✅ ให้เห็น error จริงใน browser console ด้วย
        console.error("REPORT.PDF ROUTE ERROR:", e);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: e?.message || "Internal Server Error",
            name: e?.name,
            // dev เท่านั้น (ถ้ากลัว production ก็ลบ stack ออก)
            stack: e?.stack
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__628d83a4._.js.map