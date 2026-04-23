(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Pagination.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Pagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
function Pagination({ current, totalPages, onChange }) {
    if (totalPages <= 1) return null;
    const siblings = 1;
    const boundary = 1;
    const range = [];
    const start = Math.max(2, current - siblings);
    const end = Math.min(totalPages - 1, current + siblings);
    range.push(1);
    if (start > 2) range.push("dots");
    for(let page = start; page <= end; page += 1){
        range.push(page);
    }
    if (end < totalPages - 1) range.push("dots");
    if (totalPages > 1) range.push(totalPages);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onChange(Math.max(1, current - 1)),
                className: "rounded-lg border border-blue-100 px-3 py-1 text-sm text-blue-700",
                disabled: current === 1,
                children: "Prev"
            }, void 0, false, {
                fileName: "[project]/src/components/Pagination.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            range.map((p, idx)=>p === "dots" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "px-2 text-sm text-slate-400",
                    children: "..."
                }, `dots-${idx}`, false, {
                    fileName: "[project]/src/components/Pagination.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onChange(p),
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("rounded-lg px-3 py-1 text-sm", p === current ? "bg-blue-600 text-white" : "border border-blue-100 text-slate-600"),
                    children: p
                }, p, false, {
                    fileName: "[project]/src/components/Pagination.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onChange(Math.min(totalPages, current + 1)),
                className: "rounded-lg border border-blue-100 px-3 py-1 text-sm text-blue-700",
                disabled: current === totalPages,
                children: "Next"
            }, void 0, false, {
                fileName: "[project]/src/components/Pagination.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Pagination.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = Pagination;
var _c;
__turbopack_context__.k.register(_c, "Pagination");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Drawer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Drawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Drawer({ open, title, onClose, children }) {
    _s();
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ปิดแล้ว reset กลับโหมดปกติ (กันค้าง fullscreen)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Drawer.useEffect": ()=>{
            if (!open) setIsFullscreen(false);
        }
    }["Drawer.useEffect"], [
        open
    ]);
    const handleClose = ()=>{
        setIsFullscreen(false);
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("fixed inset-0 z-50", open ? "" : "pointer-events-none"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("absolute inset-0 bg-slate-900/40 transition-opacity duration-200", open ? "opacity-100" : "opacity-0"),
                onClick: handleClose
            }, void 0, false, {
                fileName: "[project]/src/components/Drawer.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("absolute bg-white shadow-2xl transition-all duration-200 will-change-transform", isFullscreen ? "inset-0" : "right-0 top-0 h-full w-full max-w-4xl", open ? "translate-x-0 opacity-100" : isFullscreen ? "translate-y-2 opacity-0" : "translate-x-full opacity-100"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b border-blue-100 px-6 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold text-slate-900",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/Drawer.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setIsFullscreen((v)=>!v),
                                        className: "rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-200",
                                        children: isFullscreen ? "ย่อ" : "เต็มจอ"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Drawer.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleClose,
                                        className: "rounded-full bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700 hover:bg-blue-100",
                                        children: "ปิด"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Drawer.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Drawer.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Drawer.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("overflow-y-auto p-6", isFullscreen ? "h-[calc(100%-64px)]" : "h-[calc(100%-64px)]"),
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/components/Drawer.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Drawer.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Drawer.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(Drawer, "bbrde04c+cD2/wxWG6d9pzH92bA=");
_c = Drawer;
var _c;
__turbopack_context__.k.register(_c, "Drawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AutoComplete.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AutoCompleteSelect",
    ()=>AutoCompleteSelect,
    "TireSearchSelect",
    ()=>TireSearchSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
function AutoCompleteSelect({ label, value, options, placeholder = "กรุณาเลือก...", onChange }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [q, setQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AutoCompleteSelect.useMemo[selected]": ()=>options.find({
                "AutoCompleteSelect.useMemo[selected]": (x)=>x.id === value
            }["AutoCompleteSelect.useMemo[selected]"]) ?? null
    }["AutoCompleteSelect.useMemo[selected]"], [
        options,
        value
    ]);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AutoCompleteSelect.useMemo[filtered]": ()=>{
            const s = q.trim().toLowerCase();
            if (!s) return options;
            return options.filter({
                "AutoCompleteSelect.useMemo[filtered]": (o)=>o.label.toLowerCase().includes(s)
            }["AutoCompleteSelect.useMemo[filtered]"]);
        }
    }["AutoCompleteSelect.useMemo[filtered]"], [
        options,
        q
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AutoCompleteSelect.useEffect": ()=>{
            const onDocDown = {
                "AutoCompleteSelect.useEffect.onDocDown": (e)=>{
                    if (!wrapRef.current) return;
                    if (!wrapRef.current.contains(e.target)) setOpen(false);
                }
            }["AutoCompleteSelect.useEffect.onDocDown"];
            document.addEventListener("mousedown", onDocDown);
            return ({
                "AutoCompleteSelect.useEffect": ()=>document.removeEventListener("mousedown", onDocDown)
            })["AutoCompleteSelect.useEffect"];
        }
    }["AutoCompleteSelect.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AutoCompleteSelect.useEffect": ()=>{
            if (open) setQ(selected?.label ?? "");
        }
    }["AutoCompleteSelect.useEffect"], [
        open,
        selected
    ]);
    const commit = (id)=>{
        onChange(id);
        setOpen(false);
        const picked = options.find((x)=>x.id === id);
        setQ(picked?.label ?? "");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapRef,
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-sm font-semibold text-slate-600",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/AutoComplete.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: [
                        "flex items-center gap-2 rounded-xl border bg-white px-3 py-2 text-sm",
                        open ? "border-blue-300 ring-4 ring-blue-100" : "border-blue-100"
                    ].join(" "),
                    onClick: ()=>{
                        setOpen(true);
                        requestAnimationFrame(()=>inputRef.current?.focus());
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: inputRef,
                            value: open ? q : selected?.label ?? "",
                            onChange: (e)=>{
                                setQ(e.target.value);
                                setOpen(true);
                            },
                            placeholder: placeholder,
                            className: "w-full bg-transparent outline-none placeholder:text-slate-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AutoComplete.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        value ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: (e)=>{
                                e.stopPropagation();
                                onChange("");
                                setQ("");
                                setOpen(false);
                            },
                            className: "rounded-md px-1 text-slate-400 hover:text-slate-600",
                            "aria-label": "clear",
                            title: "ล้าง",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AutoComplete.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "select-none text-slate-400",
                            children: "▾"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AutoComplete.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AutoComplete.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AutoComplete.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-64 overflow-auto py-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>commit(""),
                            className: "w-full px-3 py-2 text-left text-sm text-slate-600 hover:bg-slate-50",
                            children: placeholder
                        }, void 0, false, {
                            fileName: "[project]/src/components/AutoComplete.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this),
                        filtered.length ? filtered.map((opt, idx)=>{
                            const active = opt.id === value;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>commit(opt.id),
                                className: [
                                    "w-full px-3 py-2 text-left text-sm",
                                    active ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-50"
                                ].join(" "),
                                children: opt.label
                            }, `${opt.id}-${opt.label}-${idx}`, false, {
                                fileName: "[project]/src/components/AutoComplete.tsx",
                                lineNumber: 118,
                                columnNumber: 19
                            }, this);
                        }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-3 py-3 text-sm text-slate-500",
                            children: "ไม่พบข้อมูลที่ค้นหา"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AutoComplete.tsx",
                            lineNumber: 134,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AutoComplete.tsx",
                    lineNumber: 105,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AutoComplete.tsx",
                lineNumber: 104,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AutoComplete.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(AutoCompleteSelect, "V50KNnNJErwRSjBSokg5jFvzkns=");
_c = AutoCompleteSelect;
function TireSearchSelect({ label = "ยาง (รุ่น/ขนาด)", value, options, placeholder = "กรุณาเลือก...", onChange }) {
    _s1();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [q, setQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TireSearchSelect.useMemo[selected]": ()=>options.find({
                "TireSearchSelect.useMemo[selected]": (x)=>x.id === value
            }["TireSearchSelect.useMemo[selected]"]) ?? null
    }["TireSearchSelect.useMemo[selected]"], [
        options,
        value
    ]);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TireSearchSelect.useMemo[filtered]": ()=>{
            const s = q.trim().toLowerCase();
            if (!s) return options;
            return options.filter({
                "TireSearchSelect.useMemo[filtered]": (o)=>o.label.toLowerCase().includes(s)
            }["TireSearchSelect.useMemo[filtered]"]);
        }
    }["TireSearchSelect.useMemo[filtered]"], [
        options,
        q
    ]);
    // ปิด dropdown เมื่อคลิกนอกกรอบ
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TireSearchSelect.useEffect": ()=>{
            const onDocDown = {
                "TireSearchSelect.useEffect.onDocDown": (e)=>{
                    if (!wrapRef.current) return;
                    if (!wrapRef.current.contains(e.target)) setOpen(false);
                }
            }["TireSearchSelect.useEffect.onDocDown"];
            document.addEventListener("mousedown", onDocDown);
            return ({
                "TireSearchSelect.useEffect": ()=>document.removeEventListener("mousedown", onDocDown)
            })["TireSearchSelect.useEffect"];
        }
    }["TireSearchSelect.useEffect"], []);
    // เวลาเปิด ให้ sync q เป็น label ที่เลือกไว้ (หรือว่าง)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TireSearchSelect.useEffect": ()=>{
            if (open) setQ(selected?.label ?? "");
        }
    }["TireSearchSelect.useEffect"], [
        open,
        selected
    ]);
    const commit = (id)=>{
        onChange(id);
        setOpen(false);
        // หลังเลือก กรอง q เป็น label ที่เลือกไว้
        const picked = options.find((x)=>x.id === id);
        setQ(picked?.label ?? "");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapRef,
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-sm font-semibold text-slate-600",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/AutoComplete.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: [
                        "flex items-center gap-2 rounded-xl border bg-white px-3 py-2 text-sm",
                        open ? "border-blue-300 ring-4 ring-blue-100" : "border-blue-100"
                    ].join(" "),
                    onClick: ()=>{
                        setOpen(true);
                        requestAnimationFrame(()=>inputRef.current?.focus());
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: inputRef,
                            value: open ? q : selected?.label ?? "",
                            onChange: (e)=>{
                                setQ(e.target.value);
                                setOpen(true);
                            },
                            placeholder: placeholder,
                            className: "w-full bg-transparent outline-none placeholder:text-slate-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AutoComplete.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this),
                        value ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: (e)=>{
                                e.stopPropagation();
                                onChange("");
                                setQ("");
                                setOpen(false);
                            },
                            className: "rounded-md px-1 text-slate-400 hover:text-slate-600",
                            "aria-label": "clear",
                            title: "ล้าง",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AutoComplete.tsx",
                            lineNumber: 227,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "select-none text-slate-400",
                            children: "▾"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AutoComplete.tsx",
                            lineNumber: 244,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AutoComplete.tsx",
                    lineNumber: 203,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AutoComplete.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-64 overflow-auto py-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>commit(""),
                            className: "w-full px-3 py-2 text-left text-sm text-slate-600 hover:bg-slate-50",
                            children: placeholder
                        }, void 0, false, {
                            fileName: "[project]/src/components/AutoComplete.tsx",
                            lineNumber: 253,
                            columnNumber: 13
                        }, this),
                        filtered.length ? filtered.map((opt)=>{
                            const active = opt.id === value;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>commit(opt.id),
                                className: [
                                    "w-full px-3 py-2 text-left text-sm",
                                    active ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-50"
                                ].join(" "),
                                children: opt.label
                            }, opt.id, false, {
                                fileName: "[project]/src/components/AutoComplete.tsx",
                                lineNumber: 265,
                                columnNumber: 19
                            }, this);
                        }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-3 py-3 text-sm text-slate-500",
                            children: "ไม่พบข้อมูลที่ค้นหา"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AutoComplete.tsx",
                            lineNumber: 281,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AutoComplete.tsx",
                    lineNumber: 251,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AutoComplete.tsx",
                lineNumber: 250,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AutoComplete.tsx",
        lineNumber: 198,
        columnNumber: 5
    }, this);
}
_s1(TireSearchSelect, "V50KNnNJErwRSjBSokg5jFvzkns=");
_c1 = TireSearchSelect;
var _c, _c1;
__turbopack_context__.k.register(_c, "AutoCompleteSelect");
__turbopack_context__.k.register(_c1, "TireSearchSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CarForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CarForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoComplete$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AutoComplete.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const CAR_TYPES = [
    "2 เพลา 4 ล้อ",
    "2 เพลา 6 ล้อ",
    "3 เพลา 10 ล้อ",
    "4 เพลา 12 ล้อ",
    "5 เพลา 18 ล้อ",
    "6 เพลา 20 ล้อ",
    "6 เพลา 22 ล้อ",
    "7 เพลา 24 ล้อ"
];
function CarForm({ carId, onSaved }) {
    _s();
    const [options, setOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        companies: [],
        brands: []
    });
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        car_company: "",
        car_brand: "",
        car_registration_number: "",
        car_number: "",
        car_driver: "",
        car_phone: "",
        car_type: "",
        car_mile: "",
        car_registration_date: ""
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [previews, setPreviews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [dragOver, setDragOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    function handleFileSelect(key, file) {
        setFiles((prev)=>({
                ...prev,
                [key]: file
            }));
        if (file) {
            setPreviews((prev)=>({
                    ...prev,
                    [key]: URL.createObjectURL(file)
                }));
        }
    }
    function handleDrop(key, e) {
        e.preventDefault();
        setDragOver(null);
        const file = e.dataTransfer.files?.[0] || null;
        handleFileSelect(key, file);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CarForm.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/car/options").then({
                "CarForm.useEffect": (data)=>setOptions(data)
            }["CarForm.useEffect"]);
        }
    }["CarForm.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CarForm.useEffect": ()=>{
            if (!carId) return;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/cars/${carId}`).then({
                "CarForm.useEffect": (data)=>setForm(data)
            }["CarForm.useEffect"]);
        }
    }["CarForm.useEffect"], [
        carId
    ]);
    function onChange(e) {
        const { name, value } = e.target;
        setForm((prev)=>({
                ...prev,
                [name]: value
            }));
    }
    async function onSubmit(e) {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const body = new FormData();
            body.append("car_company", form.car_company);
            body.append("car_brand", form.car_brand);
            body.append("car_registration_number", form.car_registration_number);
            body.append("car_number", form.car_number);
            body.append("car_driver", form.car_driver);
            body.append("car_phone", form.car_phone);
            body.append("car_type", form.car_type);
            body.append("car_mile", form.car_mile);
            body.append("car_registration_date", form.car_registration_date);
            if (files.car_pic_profile1) body.append("car_pic_profile1", files.car_pic_profile1);
            if (files.car_pic_profile2) body.append("car_pic_profile2", files.car_pic_profile2);
            if (files.car_pic_profile3) body.append("car_pic_profile3", files.car_pic_profile3);
            console.log("FormData entries:", JSON.stringify(body.entries, null, 2));
            console.log("form", form);
            if (carId) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/cars/${carId}`, {
                    method: "PUT",
                    body
                });
            } else {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/cars`, {
                    method: "POST",
                    body
                });
            }
            onSaved();
        } catch (err) {
            setError(err instanceof Error ? err.message : "Save failed");
        } finally{
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: onSubmit,
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoComplete$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AutoCompleteSelect"], {
                            label: "บริษัท/สาขา",
                            value: form.car_company,
                            options: options.companies.map((opt)=>({
                                    id: opt.value,
                                    label: opt.label
                                })),
                            placeholder: "กรุณาเลือก...",
                            onChange: (id)=>setForm((prev)=>({
                                        ...prev,
                                        car_company: id
                                    }))
                        }, void 0, false, {
                            fileName: "[project]/src/components/CarForm.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CarForm.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoComplete$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AutoCompleteSelect"], {
                            label: "ยี่ห้อรถ",
                            value: form.car_brand,
                            options: options.brands.map((opt)=>({
                                    id: opt.value,
                                    label: opt.label
                                })),
                            placeholder: "กรุณาเลือก...",
                            onChange: (id)=>setForm((prev)=>({
                                        ...prev,
                                        car_brand: id
                                    }))
                        }, void 0, false, {
                            fileName: "[project]/src/components/CarForm.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CarForm.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CarForm.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm font-semibold text-slate-600",
                                children: "เลขทะเบียนรถ"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CarForm.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "car_registration_number",
                                value: form.car_registration_number,
                                onChange: onChange,
                                className: "mt-2 w-full rounded-xl border border-blue-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-blue-100",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/CarForm.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CarForm.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm font-semibold text-slate-600",
                                children: "เลขประจำรถ"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CarForm.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "car_number",
                                value: form.car_number,
                                onChange: onChange,
                                className: "mt-2 w-full rounded-xl border border-blue-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-blue-100",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/CarForm.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CarForm.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CarForm.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm font-semibold text-slate-600",
                                children: "พนักงานขับรถ"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CarForm.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "car_driver",
                                value: form.car_driver,
                                onChange: onChange,
                                className: "mt-2 w-full rounded-xl border border-blue-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-blue-100",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/CarForm.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CarForm.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm font-semibold text-slate-600",
                                children: "เบอร์ติดต่อ"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CarForm.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "car_phone",
                                value: form.car_phone,
                                onChange: onChange,
                                className: "mt-2 w-full rounded-xl border border-blue-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-blue-100",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/CarForm.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CarForm.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CarForm.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoComplete$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AutoCompleteSelect"], {
                            label: "ประเภทรถ",
                            value: form.car_type,
                            options: CAR_TYPES.map((t)=>({
                                    id: t,
                                    label: t
                                })),
                            placeholder: "กรุณาเลือก...",
                            onChange: (id)=>setForm((prev)=>({
                                        ...prev,
                                        car_type: id
                                    }))
                        }, void 0, false, {
                            fileName: "[project]/src/components/CarForm.tsx",
                            lineNumber: 223,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CarForm.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm font-semibold text-slate-600",
                                children: "เลขไมล์"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CarForm.tsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "car_mile",
                                value: form.car_mile,
                                onChange: onChange,
                                className: "mt-2 w-full rounded-xl border border-blue-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-blue-100",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/CarForm.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CarForm.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm font-semibold text-slate-600",
                                children: "วันที่จดทะเบียน"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CarForm.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "date",
                                name: "car_registration_date",
                                value: form.car_registration_date,
                                onChange: onChange,
                                className: "mt-2 w-full rounded-xl border border-blue-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-blue-100",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/CarForm.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CarForm.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CarForm.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-3",
                children: [
                    {
                        key: "car_pic_profile1",
                        label: "รูปภาพ 1"
                    },
                    {
                        key: "car_pic_profile2",
                        label: "รูปภาพ 2"
                    },
                    {
                        key: "car_pic_profile3",
                        label: "รูปภาพ 3"
                    }
                ].map((item)=>{
                    const preview = previews[item.key] || form[item.key];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm font-semibold text-slate-600",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/CarForm.tsx",
                                lineNumber: 263,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onDragOver: (e)=>{
                                    e.preventDefault();
                                    setDragOver(item.key);
                                },
                                onDragLeave: ()=>setDragOver(null),
                                onDrop: (e)=>handleDrop(item.key, e),
                                className: `mt-2 flex h-36 w-full cursor-pointer items-center justify-center rounded-2xl border border-dashed ${dragOver === item.key ? "border-blue-500 bg-blue-50" : "border-blue-200 bg-slate-50"} transition`,
                                onClick: ()=>document.getElementById(item.key)?.click(),
                                children: [
                                    preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: preview,
                                        alt: "",
                                        className: "h-full w-full rounded-2xl object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CarForm.tsx",
                                        lineNumber: 276,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center text-xs text-slate-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-slate-600",
                                                children: "ลากรูปมาวางที่นี่"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CarForm.tsx",
                                                lineNumber: 279,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "หรือแตะเพื่อเลือกรูป"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CarForm.tsx",
                                                lineNumber: 280,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CarForm.tsx",
                                        lineNumber: 278,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: item.key,
                                        type: "file",
                                        className: "hidden",
                                        onChange: (e)=>handleFileSelect(item.key, e.target.files?.[0] || null)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CarForm.tsx",
                                        lineNumber: 283,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CarForm.tsx",
                                lineNumber: 264,
                                columnNumber: 15
                            }, this)
                        ]
                    }, item.key, true, {
                        fileName: "[project]/src/components/CarForm.tsx",
                        lineNumber: 262,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/CarForm.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/CarForm.tsx",
                lineNumber: 296,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-3 pt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    disabled: loading,
                    className: "rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-200",
                    children: loading ? "กำลังบันทึก..." : "บันทึก"
                }, void 0, false, {
                    fileName: "[project]/src/components/CarForm.tsx",
                    lineNumber: 302,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CarForm.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CarForm.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
_s(CarForm, "PI70aLit9Za/AxYj/3L0ELijW1w=");
_c = CarForm;
var _c;
__turbopack_context__.k.register(_c, "CarForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CarCheckFull.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CarCheckFull
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoComplete$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AutoComplete.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function buildPositions(carType) {
    // const match = carType.match(/(\\d+)\\s*เพลา\\s*(\\d+)\\s*ล้อ/);
    const match = carType.match(/(\d+)\s*เพลา\s*(\d+)\s*ล้อ/);
    if (!match) {
        return [
            {
                id: "1",
                label: "ตำแหน่งที่ 1 ซ้าย",
                axle: 1,
                side: "left",
                slot: "single"
            },
            {
                id: "2",
                label: "ตำแหน่งที่ 1 ขวา",
                axle: 1,
                side: "right",
                slot: "single"
            }
        ];
    }
    const axles = Number(match[1]);
    const wheels = Number(match[2]);
    if (!axles || !wheels) return [];
    const positions = [];
    let idx = 1;
    const addPair = (axle, left, right)=>{
        positions.push({
            id: String(idx++),
            label: left,
            axle,
            side: "left",
            slot: "single"
        });
        positions.push({
            id: String(idx++),
            label: right,
            axle,
            side: "right",
            slot: "single"
        });
    };
    const addDual = (axle)=>{
        positions.push({
            id: String(idx++),
            label: `ตำแหน่งที่ ${axle} ซ้ายนอก`,
            axle,
            side: "left",
            slot: "outer"
        });
        positions.push({
            id: String(idx++),
            label: `ตำแหน่งที่ ${axle} ซ้ายใน`,
            axle,
            side: "left",
            slot: "inner"
        });
        positions.push({
            id: String(idx++),
            label: `ตำแหน่งที่ ${axle} ขวาใน`,
            axle,
            side: "right",
            slot: "inner"
        });
        positions.push({
            id: String(idx++),
            label: `ตำแหน่งที่ ${axle} ขวานอก`,
            axle,
            side: "right",
            slot: "outer"
        });
    };
    addPair(1, "ตำแหน่งที่ 1 ซ้าย", "ตำแหน่งที่ 1 ขวา");
    const rearAxles = Math.max(axles - 1, 0);
    let remaining = wheels - 2;
    const rearConfig = [];
    if (rearAxles > 0) {
        if (remaining === rearAxles * 4) {
            for(let i = 0; i < rearAxles; i += 1)rearConfig.push("dual");
        } else if (remaining === (rearAxles - 1) * 4 + 2) {
            for(let i = 0; i < rearAxles - 1; i += 1)rearConfig.push("dual");
            rearConfig.push("single");
        } else if (remaining === rearAxles * 2) {
            for(let i = 0; i < rearAxles; i += 1)rearConfig.push("single");
        } else {
            for(let i = 0; i < rearAxles; i += 1){
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
    for(let axle = 2; axle <= axles; axle += 1){
        const cfg = rearConfig[axle - 2] || "single";
        if (cfg === "dual") {
            addDual(axle);
        } else {
            addPair(axle, `ตำแหน่งที่ ${axle} ซ้าย`, `ตำแหน่งที่ ${axle} ขวา`);
        }
    }
    return positions;
}
function CarCheckFull({ carId, editCheckId, onClose }) {
    _s();
    var _s1 = __turbopack_context__.k.signature();
    const [detail, setDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [summary, setSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        latest_date: "",
        latest_distance: "",
        first_date: "",
        first_distance: ""
    });
    const [distance, setDistance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [positions, setPositions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tires, setTires] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [dragIndex, setDragIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [swapLog, setSwapLog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tireActions, setTireActions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [editingCheckId, setEditingCheckId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [latestLoaded, setLatestLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [latestCheck, setLatestCheck] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [prefilledLatest, setPrefilledLatest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [checkSeq, setCheckSeq] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [existingImages, setExistingImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [removeAction, setRemoveAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ถอดยาง");
    const [removeReason, setRemoveReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [removeDisposition, setRemoveDisposition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("เก็บในคลังเพื่อสลับยาง");
    const [tireOptions, setTireOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [images, setImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [dragOver, setDragOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showImages, setShowImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showTires, setShowTires] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showHistory, setShowHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showTable, setShowTable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [stockDialogOpen, setStockDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [stockItems, setStockItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stockLoading, setStockLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [stockSearch, setStockSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    function emptyTires(pos) {
        return pos.map((p)=>({
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
                tire_deep: ""
            }));
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CarCheckFull.useEffect": ()=>{
            setLatestLoaded(false);
            setLatestCheck(null);
            setPrefilledLatest(false);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/cars/${carId}`).then({
                "CarCheckFull.useEffect": (data)=>{
                    setDetail(data);
                    const pos = buildPositions(data.car_type || "");
                    setPositions(pos);
                    setTires(emptyTires(pos));
                    setActiveIndex(0);
                }
            }["CarCheckFull.useEffect"]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/cars/${carId}/check-summary`).then({
                "CarCheckFull.useEffect": (data)=>setSummary(data)
            }["CarCheckFull.useEffect"]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/tires/simple`).then({
                "CarCheckFull.useEffect": (data)=>setTireOptions(data.items)
            }["CarCheckFull.useEffect"]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/cars/${carId}/checks/history`).then({
                "CarCheckFull.useEffect": async (data)=>{
                    const items = data.items || [];
                    setHistory(items);
                    if (!items.length || latestCheck) return;
                    try {
                        const detail = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/cars/${carId}/checks/${items[0].id}`);
                        setLatestCheck({
                            id: detail.id,
                            check_date: detail.check_date,
                            distance: detail.distance,
                            user_id: items[0].user_id,
                            tires: detail.tires || [],
                            swap_log: detail.swap_log || [],
                            images: detail.images || {}
                        });
                    } catch  {
                    // ignore fallback error
                    }
                }
            }["CarCheckFull.useEffect"]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/cars/${carId}/checks?include_latest=1&page=1&per_page=1`).then({
                "CarCheckFull.useEffect": (data)=>setLatestCheck(data.latest || null)
            }["CarCheckFull.useEffect"]).finally({
                "CarCheckFull.useEffect": ()=>setLatestLoaded(true)
            }["CarCheckFull.useEffect"]);
        }
    }["CarCheckFull.useEffect"], [
        carId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CarCheckFull.useEffect": ()=>{
            if (!positions.length) return;
            if (prefilledLatest) return;
            if (editingCheckId || editCheckId) return;
            if (!latestCheck || !latestCheck.tires?.length) return;
            setTires({
                "CarCheckFull.useEffect": (prev)=>{
                    const next = [
                        ...prev
                    ];
                    latestCheck.tires.forEach({
                        "CarCheckFull.useEffect": (t, idx)=>{
                            const byLabel = t.position ? positionIndex.get(String(t.position).trim()) : undefined;
                            const byNumber = normalizePositionIndex(t.position);
                            const targetIndex = byLabel !== undefined ? byLabel : byNumber !== undefined ? byNumber : idx;
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
                                remark: t.remark || p.remark
                            };
                        }
                    }["CarCheckFull.useEffect"]);
                    return next;
                }
            }["CarCheckFull.useEffect"]);
            setPrefilledLatest(true);
        }
    }["CarCheckFull.useEffect"], [
        positions.length,
        latestCheck,
        prefilledLatest,
        editingCheckId,
        editCheckId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CarCheckFull.useEffect": ()=>{
            if (editCheckId) {
                loadCheckById(editCheckId);
            }
        }
    }["CarCheckFull.useEffect"], [
        editCheckId
    ]);
    const activeTire = tires[activeIndex];
    const preview1 = images.image1 ? URL.createObjectURL(images.image1) : existingImages.image1 || "";
    const preview2 = images.image2 ? URL.createObjectURL(images.image2) : existingImages.image2 || "";
    const preview3 = images.image3 ? URL.createObjectURL(images.image3) : existingImages.image3 || "";
    function handleCheckFile(key, file) {
        setImages((prev)=>({
                ...prev,
                [key]: file
            }));
    }
    function handleCheckDrop(key, e) {
        e.preventDefault();
        setDragOver(null);
        const file = e.dataTransfer.files?.[0] || null;
        handleCheckFile(key, file);
    }
    function handleDrop(targetIndex) {
        if (dragIndex === null || dragIndex === targetIndex) return;
        setTires((prev)=>{
            const next = [
                ...prev
            ];
            const from = next[dragIndex];
            const to = next[targetIndex];
            next[dragIndex] = {
                ...to,
                position: positions[dragIndex]?.label || to.position
            };
            next[targetIndex] = {
                ...from,
                position: positions[targetIndex]?.label || from.position
            };
            return next;
        });
        const fromLabel = positions[dragIndex]?.label || "";
        const toLabel = positions[targetIndex]?.label || "";
        setSwapLog((prev)=>[
                `เส้นที่ ${dragIndex + 1} ${fromLabel} ย้ายไป ${toLabel}`,
                ...prev
            ].slice(0, 6));
        setDragIndex(null);
    }
    function updateActive(key, value) {
        setTires((prev)=>{
            const next = [
                ...prev
            ];
            next[activeIndex] = {
                ...next[activeIndex],
                [key]: value
            };
            return next;
        });
    }
    function updateTireAt(index, key, value) {
        setTires((prev)=>{
            const next = [
                ...prev
            ];
            next[index] = {
                ...next[index],
                [key]: value
            };
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
    async function handleEditFromHistory(row) {
        setError("");
        setSuccess("");
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/cars/${carId}/checks/${row.id}`);
            setEditingCheckId(row.id);
            setCheckSeq(row.rid);
            setDistance(String(data.distance || ""));
            setSwapLog(data.swap_log || []);
            setExistingImages({
                image1: data.images?.check_1 ? `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiBase"]}${data.images.check_1}` : "",
                image2: data.images?.check_2 ? `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiBase"]}${data.images.check_2}` : "",
                image3: data.images?.check_3 ? `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiBase"]}${data.images.check_3}` : ""
            });
            setImages({});
            setTires((prev)=>prev.map((p, idx)=>{
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
                        remark: t.remark || p.remark
                    };
                }));
            setActiveIndex(0);
            requestAnimationFrame(()=>{
                document.getElementById("section-info")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            });
        } catch (err) {
            setError(err instanceof Error ? err.message : "Load check failed");
        }
    }
    async function loadCheckById(checkId) {
        await handleEditFromHistory({
            id: checkId,
            rid: 0,
            check_date: "",
            distance: "",
            user_id: "",
            swap_logs: []
        });
    }
    function addRemoveLog(actionOverride, dispositionOverride, reasonOverride) {
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
        const replaceText = activeTire?.gen ? ` เปลี่ยนแทนด้วย: ${activeTire?.brand_name || ""} ${activeTire?.size || ""}${tireSerial}` : "";
        const dispositionText = disposition ? ` ดำเนินการ: ${disposition}` : "";
        const message = `${action} ${positionLabel}${reasonText}${replaceText}${dispositionText}`;
        setSwapLog((prev)=>[
                message,
                ...prev
            ].slice(0, 10));
        const normalizeAction = (v)=>{
            if (v === "ถอดยาง" || v === "เปลี่ยนยาง" || v === "สลับยาง" || v === "ย้ายยาง") return v;
            throw new Error("Invalid action");
        };
        const normalizeDisposition = (v)=>{
            if (!v) return undefined;
            if (v === "เก็บในคลังเพื่อสลับยาง" || v === "เก็บไว้ใช้ภายหลัง" || v === "ทิ้ง") return v;
            throw new Error("Invalid disposition");
        };
        setTireActions((prev)=>[
                {
                    position: positionLabel,
                    action: normalizeAction(action),
                    old_gen: oldGen || undefined,
                    new_gen: newGen || undefined,
                    reason: reason || undefined,
                    disposition: normalizeDisposition(disposition)
                },
                ...prev
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
        ]); */ setRemoveReason("");
    }
    function quickReplace(source) {
        if (!activeTire?.gen) {
            setError("กรุณาเลือกยางใหม่ก่อนเปลี่ยน");
            return;
        }
        addRemoveLog("เปลี่ยนยาง", "ทิ้ง", removeReason);
        setTireActions((prev)=>{
            if (!prev.length) return prev;
            const next = [
                ...prev
            ];
            next[0] = {
                ...next[0],
                source
            };
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/stock/on-hand?${params.toString()}`);
            setStockItems(res.items || []);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Load stock failed");
        } finally{
            setStockLoading(false);
        }
    }
    function useStockItem(item) {
        onSelectTireGen(item.id);
        quickReplace("stock");
        setStockDialogOpen(false);
    }
    function onSelectTireGen(value) {
        const opt = tireOptions.find((item)=>item.id === value);
        setTires((prev)=>{
            const next = [
                ...prev
            ];
            const currentGen = next[activeIndex]?.gen;
            next[activeIndex] = {
                ...next[activeIndex],
                old_gen: next[activeIndex]?.old_gen || (currentGen && currentGen !== value ? currentGen : ""),
                gen: value,
                brand: opt?.brand_id || next[activeIndex].brand,
                brand_name: opt?.brand_name || next[activeIndex].brand_name,
                size: opt?.size || next[activeIndex].size,
                tread: opt?.tread_depth ?? next[activeIndex].tread
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
        const missing = [];
        tires.forEach((t, idx)=>{
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
            const getLineUserId = ()=>{
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                try {
                    const raw = localStorage.getItem("user");
                    if (raw) {
                        const u = JSON.parse(raw);
                        return u?.line_user_id || u?.user_line_id || u?.lineId || u?.line_userId || "";
                    }
                } catch  {
                // ignore
                }
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_LINE_USER_ID || "";
            };
            const getUserDisplay = ()=>{
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                try {
                    const raw = localStorage.getItem("user");
                    if (raw) {
                        const u = JSON.parse(raw);
                        return u?.user_name || u?.user_username || "";
                    }
                } catch  {
                // ignore
                }
                return "";
            };
            const buildFlexMsg = (checkId)=>{
                const title = editingCheckId ? "แก้ไขการเช็ครถ" : "บันทึกการเช็ครถ";
                const reg = detail?.car_registration_number || carId;
                const company = detail?.car_company_label || detail?.car_company || "";
                const driver = detail?.car_driver || "-";
                const carType = detail?.car_type || "-";
                const userDisplay = getUserDisplay() || "-";
                const nowText = new Date().toLocaleString("th-TH", {
                    timeZone: "Asia/Bangkok"
                });
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
                                    size: "md"
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
                                            wrap: true
                                        },
                                        ...company ? [
                                            {
                                                type: "text",
                                                text: `บริษัท: ${company}`,
                                                size: "xs",
                                                color: "#999999",
                                                wrap: true
                                            }
                                        ] : [],
                                        {
                                            type: "text",
                                            text: `คนขับ: ${driver}`,
                                            size: "xs",
                                            color: "#999999",
                                            wrap: true
                                        },
                                        {
                                            type: "text",
                                            text: `ประเภทรถ: ${carType}`,
                                            size: "xs",
                                            color: "#999999",
                                            wrap: true
                                        }
                                    ]
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
                                            wrap: true
                                        },
                                        {
                                            type: "text",
                                            text: `ผู้บันทึก: ${userDisplay}`,
                                            size: "xs",
                                            color: "#999999",
                                            wrap: true
                                        },
                                        {
                                            type: "text",
                                            text: `เวลา: ${nowText}`,
                                            size: "xs",
                                            color: "#999999",
                                            wrap: true
                                        },
                                        {
                                            type: "text",
                                            text: `เลขที่รายการ: ${checkId}`,
                                            size: "xs",
                                            color: "#999999",
                                            wrap: true
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                };
            };
            const payload = tires.map((t)=>({
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
                    remark: t.remark
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
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/cars/${carId}/checks/${editingCheckId}`, {
                    method: "PUT",
                    body
                });
                savedCheckId = editingCheckId;
                setSuccess("อัปเดตข้อมูลเรียบร้อย");
            } else {
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/cars/${carId}/checks`, {
                    method: "POST",
                    body
                });
                savedCheckId = res?.check_id || "";
                setSuccess("บันทึกข้อมูลเรียบร้อย");
            }
            const lineUserId = getLineUserId();
            if (lineUserId && savedCheckId) {
                const flexMsg = buildFlexMsg(savedCheckId);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/line/push`, {
                    method: "POST",
                    body: JSON.stringify({
                        userId: lineUserId,
                        flexMsg
                    })
                }).catch(()=>{
                // ignore line errors on UI
                });
            }
            setDistance("");
            setEditingCheckId(null);
            setTireActions([]);
            setExistingImages({});
            setImages({});
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/cars/${carId}/check-summary`).then((data)=>setSummary(data));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/cars/${carId}/checks/history`).then((data)=>setHistory(data.items || []));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/cars/${carId}/checks?include_latest=1&page=1&per_page=1`).then((data)=>{
                setLatestCheck(data.latest || null);
                setPrefilledLatest(false);
            });
        } catch (err) {
            setError(err instanceof Error ? err.message : "Save failed");
        } finally{
            setSaving(false);
            onClose();
        }
    }
    const carImage = (path)=>{
        if (!path) return "";
        if (path.startsWith("http")) return path;
        return `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiBase"]}${path}`;
    };
    const layoutRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CarCheckFull.useMemo[layoutRows]": ()=>{
            const rows = [];
            const grouped = positions.reduce({
                "CarCheckFull.useMemo[layoutRows].grouped": (acc, node)=>{
                    acc[node.axle] = acc[node.axle] || [];
                    acc[node.axle].push(node);
                    return acc;
                }
            }["CarCheckFull.useMemo[layoutRows].grouped"], {});
            Object.keys(grouped).map({
                "CarCheckFull.useMemo[layoutRows]": (k)=>Number(k)
            }["CarCheckFull.useMemo[layoutRows]"]).sort({
                "CarCheckFull.useMemo[layoutRows]": (a, b)=>a - b
            }["CarCheckFull.useMemo[layoutRows]"]).forEach({
                "CarCheckFull.useMemo[layoutRows]": (axle)=>{
                    const nodes = grouped[axle];
                    const left = nodes.filter({
                        "CarCheckFull.useMemo[layoutRows].left": (n)=>n.side === "left"
                    }["CarCheckFull.useMemo[layoutRows].left"]);
                    const right = nodes.filter({
                        "CarCheckFull.useMemo[layoutRows].right": (n)=>n.side === "right"
                    }["CarCheckFull.useMemo[layoutRows].right"]);
                    rows.push({
                        axle,
                        left,
                        right
                    });
                }
            }["CarCheckFull.useMemo[layoutRows]"]);
            return rows;
        }
    }["CarCheckFull.useMemo[layoutRows]"], [
        positions
    ]);
    const positionIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CarCheckFull.useMemo[positionIndex]": ()=>{
            const map = new Map();
            positions.forEach({
                "CarCheckFull.useMemo[positionIndex]": (p, idx)=>map.set(p.label.trim(), idx)
            }["CarCheckFull.useMemo[positionIndex]"]);
            return map;
        }
    }["CarCheckFull.useMemo[positionIndex]"], [
        positions
    ]);
    function normalizePositionIndex(position) {
        if (!position) return undefined;
        const text = String(position);
        const match = text.match(/\d+/);
        if (!match) return undefined;
        const num = Number(match[0]);
        if (!Number.isFinite(num) || num <= 0) return undefined;
        return num - 1;
    }
    function applyLatestToIndex(index) {
        if (!latestCheck || !latestCheck.tires?.length) return;
        const posLabel = positions[index]?.label?.trim() || "";
        const byLabel = posLabel ? positionIndex.get(posLabel) : undefined;
        const byNumber = normalizePositionIndex(posLabel);
        const sourceIndex = byLabel !== undefined ? byLabel : byNumber !== undefined ? byNumber : index;
        const t = latestCheck.tires?.[sourceIndex];
        if (!t) return;
        setTires((prev)=>{
            const next = [
                ...prev
            ];
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
                remark: ""
            };
            return next;
        });
    }
    const latestDistance = Number(summary?.latest_distance ?? 0);
    const currentDistance = Number(distance);
    const distanceError = distance !== '' && !Number.isNaN(currentDistance) && currentDistance <= latestDistance && !editingCheckId ? `เลขไมล์ปัจจุบันต้องมากกว่าเลขไมล์ล่าสุด (${latestDistance.toLocaleString()} ก.ม.)` : '';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 pb-28",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-blue-100 bg-white p-5 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold text-slate-800",
                                children: "ประวัติการเช็ค"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                lineNumber: 948,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setShowHistory((s)=>!s),
                                className: "rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700",
                                children: showHistory ? "ซ่อน" : "แสดง"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                lineNumber: 949,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CarCheckFull.tsx",
                        lineNumber: 947,
                        columnNumber: 9
                    }, this),
                    showHistory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 overflow-x-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 md:hidden",
                                children: history.length ? history.slice(0, 5).map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-blue-100 bg-white p-3 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between text-xs text-slate-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "ครั้งที่ ",
                                                            row.rid
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                        lineNumber: 964,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: row.check_date
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                        lineNumber: 965,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                lineNumber: 963,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 text-sm font-semibold text-slate-700",
                                                children: [
                                                    row.distance,
                                                    " กม."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                lineNumber: 967,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-slate-500",
                                                children: [
                                                    "ผู้บันทึก: ",
                                                    row.user_id
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                lineNumber: 968,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>handleEditFromHistory(row),
                                                    className: "w-full rounded-lg bg-blue-100 px-3 py-2 text-xs font-semibold text-blue-700",
                                                    children: "แก้ไขรายการนี้"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                                    lineNumber: 970,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                lineNumber: 969,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, row.id, true, {
                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                        lineNumber: 962,
                                        columnNumber: 19
                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-blue-100 bg-white px-3 py-4 text-center text-sm text-slate-500",
                                    children: "ยังไม่มีประวัติการเช็ค"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                    lineNumber: 981,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                lineNumber: 959,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "hidden min-w-full text-sm md:table",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-blue-50 text-slate-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-2 text-left font-semibold",
                                                    children: "ครั้งที่"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                                    lineNumber: 989,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-2 text-left font-semibold",
                                                    children: "วันที่เช็ค"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                                    lineNumber: 990,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-2 text-left font-semibold",
                                                    children: "เลขไมล์"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                                    lineNumber: 991,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-2 text-left font-semibold",
                                                    children: "ผู้บันทึก"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                                    lineNumber: 992,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-2 text-left font-semibold",
                                                    children: "จัดการ"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                                    lineNumber: 993,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                            lineNumber: 988,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                        lineNumber: 987,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: history.length ? history.slice(0, 5).map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "border-t border-blue-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-2",
                                                        children: row.rid
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                        lineNumber: 1000,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-2",
                                                        children: row.check_date
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                        lineNumber: 1001,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-2",
                                                        children: row.distance
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                        lineNumber: 1002,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-2",
                                                        children: row.user_id
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                        lineNumber: 1003,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>handleEditFromHistory(row),
                                                            className: "rounded-lg bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700",
                                                            children: "แก้ไข"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                                            lineNumber: 1005,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                        lineNumber: 1004,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, row.id, true, {
                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                lineNumber: 999,
                                                columnNumber: 21
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                colSpan: 4,
                                                className: "px-4 py-4 text-center text-slate-500",
                                                children: "ยังไม่มีประวัติการเช็ค"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                lineNumber: 1017,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                            lineNumber: 1016,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                        lineNumber: 996,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                lineNumber: 986,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CarCheckFull.tsx",
                        lineNumber: 958,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CarCheckFull.tsx",
                lineNumber: 946,
                columnNumber: 7
            }, this),
            stockDialogOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-blue-100 px-4 py-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-semibold text-slate-700",
                                    children: "เลือกยางจากคลัง"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                    lineNumber: 1034,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setStockDialogOpen(false),
                                    className: "rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600",
                                    children: "ปิด"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                    lineNumber: 1035,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CarCheckFull.tsx",
                            lineNumber: 1033,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: stockSearch,
                                            onChange: (e)=>setStockSearch(e.target.value),
                                            placeholder: "ค้นหา รหัส/ยี่ห้อ/ขนาด",
                                            className: "h-9 w-full max-w-sm rounded-lg border border-slate-200 px-3 text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                            lineNumber: 1044,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: openStockDialog,
                                            className: "h-9 rounded-lg bg-blue-600 px-3 text-xs font-semibold text-white",
                                            children: "ค้นหา"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                            lineNumber: 1050,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                    lineNumber: 1043,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "min-w-full text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "bg-blue-50 text-slate-600",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-3 py-2 text-left font-semibold",
                                                            children: "รหัสยาง"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                                            lineNumber: 1061,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-3 py-2 text-left font-semibold",
                                                            children: "ยี่ห้อ"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                                            lineNumber: 1062,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-3 py-2 text-left font-semibold",
                                                            children: "ขนาด"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                                            lineNumber: 1063,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-3 py-2 text-left font-semibold",
                                                            children: "คงเหลือ"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                                            lineNumber: 1064,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-3 py-2 text-left font-semibold",
                                                            children: "เลือก"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                                            lineNumber: 1065,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                                    lineNumber: 1060,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                lineNumber: 1059,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: stockLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: 5,
                                                        className: "px-3 py-3 text-center text-slate-500",
                                                        children: "กำลังโหลด..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                        lineNumber: 1071,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                                    lineNumber: 1070,
                                                    columnNumber: 23
                                                }, this) : stockItems.length ? stockItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "border-t border-blue-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-3 py-2",
                                                                children: item.identity || item.id
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                lineNumber: 1078,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-3 py-2",
                                                                children: item.brand
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                lineNumber: 1079,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-3 py-2",
                                                                children: item.size
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                lineNumber: 1080,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-3 py-2",
                                                                children: item.amount
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                lineNumber: 1081,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-3 py-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: _s1(()=>{
                                                                        _s1();
                                                                        return useStockItem(item);
                                                                    }, "sKoZSZJujF3dCK0bVzxrmsTvqZ4=", false, function() {
                                                                        return [
                                                                            useStockItem
                                                                        ];
                                                                    }),
                                                                    className: "rounded-lg bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700",
                                                                    children: "ใช้"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                    lineNumber: 1083,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                lineNumber: 1082,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, item.id, true, {
                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                        lineNumber: 1077,
                                                        columnNumber: 25
                                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: 5,
                                                        className: "px-3 py-3 text-center text-slate-500",
                                                        children: "ไม่มีรายการในคลัง"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                        lineNumber: 1095,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                                    lineNumber: 1094,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                lineNumber: 1068,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                        lineNumber: 1058,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                    lineNumber: 1057,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CarCheckFull.tsx",
                            lineNumber: 1042,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CarCheckFull.tsx",
                    lineNumber: 1032,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CarCheckFull.tsx",
                lineNumber: 1031,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "section-info",
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-blue-100 bg-white p-5 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold text-slate-800",
                                children: "ข้อมูลรถ"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                lineNumber: 1112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-4 sm:grid-cols-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-semibold text-slate-600",
                                                                children: "รหัสรถ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                lineNumber: 1117,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                readOnly: true,
                                                                value: carId,
                                                                className: "mt-2 w-full rounded-xl border border-blue-100 bg-slate-50 px-3 py-2 text-sm"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                lineNumber: 1118,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                        lineNumber: 1116,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-semibold text-slate-600",
                                                                children: "เลขทะเบียนรถ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                lineNumber: 1125,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                readOnly: true,
                                                                value: detail?.car_registration_number || "",
                                                                className: "mt-2 w-full rounded-xl border border-blue-100 bg-slate-50 px-3 py-2 text-sm"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                lineNumber: 1126,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                        lineNumber: 1124,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-semibold text-slate-600",
                                                                children: "ยี่ห้อรถ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                lineNumber: 1133,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                readOnly: true,
                                                                value: detail?.car_brand_name || "",
                                                                className: "mt-2 w-full rounded-xl border border-blue-100 bg-slate-50 px-3 py-2 text-sm"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                lineNumber: 1134,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                        lineNumber: 1132,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-semibold text-slate-600",
                                                                children: "ผขร."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                lineNumber: 1141,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                readOnly: true,
                                                                value: detail?.car_driver || "",
                                                                className: "mt-2 w-full rounded-xl border border-blue-100 bg-slate-50 px-3 py-2 text-sm"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                lineNumber: 1142,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                        lineNumber: 1140,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-semibold text-slate-600",
                                                                children: "ประเภทรถ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                lineNumber: 1149,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                readOnly: true,
                                                                value: detail?.car_type || "",
                                                                className: "mt-2 w-full rounded-xl border border-blue-100 bg-slate-50 px-3 py-2 text-sm"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                lineNumber: 1150,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                        lineNumber: 1148,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                lineNumber: 1115,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-base font-semibold text-slate-800",
                                                        children: "วันที่เช็คสภาพรถ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                        lineNumber: 1159,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid gap-3 sm:grid-cols-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-sm font-semibold text-slate-600",
                                                                        children: "วันที่เช็คล่าสุด"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                        lineNumber: 1162,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        readOnly: true,
                                                                        value: summary.latest_date || "ไม่มีรายการล่าสุด",
                                                                        className: "mt-2 w-full rounded-xl border border-blue-100 bg-blue-50 px-3 py-2 text-sm"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                        lineNumber: 1163,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                lineNumber: 1161,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-sm font-semibold text-slate-600",
                                                                        children: "เลขไมล์ที่เช็คล่าสุด"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                        lineNumber: 1170,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        readOnly: true,
                                                                        value: summary.latest_distance || "ไม่มีรายการล่าสุด",
                                                                        className: "mt-2 w-full rounded-xl border border-blue-100 bg-blue-50 px-3 py-2 text-sm"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                        lineNumber: 1171,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                lineNumber: 1169,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-sm font-semibold text-slate-600",
                                                                        children: "วันที่เช็คครั้งแรก"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                        lineNumber: 1178,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        readOnly: true,
                                                                        value: summary.first_date || "ยังไม่มีการเช็คครั้งแรก",
                                                                        className: "mt-2 w-full rounded-xl border border-blue-100 bg-blue-50 px-3 py-2 text-sm"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                        lineNumber: 1179,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                lineNumber: 1177,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-sm font-semibold text-slate-600",
                                                                        children: "เลขไมล์ที่เช็คครั้งแรก"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                        lineNumber: 1186,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        readOnly: true,
                                                                        value: summary.first_distance || "0",
                                                                        className: "mt-2 w-full rounded-xl border border-blue-100 bg-blue-50 px-3 py-2 text-sm"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                        lineNumber: 1187,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                lineNumber: 1185,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                        lineNumber: 1160,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                lineNumber: 1158,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm font-semibold text-slate-600",
                                                        children: "เลขไมล์ปัจจุบัน"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                        lineNumber: 1197,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: distance,
                                                                onChange: (e)=>setDistance(e.target.value),
                                                                className: "w-full rounded-xl border border-blue-100 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-blue-100",
                                                                placeholder: "เช่น 150000"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                lineNumber: 1199,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-slate-500",
                                                                children: "ก.ม."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                lineNumber: 1205,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                        lineNumber: 1198,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 flex items-center gap-2",
                                                        children: distanceError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 text-xs text-red-500",
                                                            children: distanceError
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                                            lineNumber: 1210,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                        lineNumber: 1207,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                lineNumber: 1196,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                        lineNumber: 1114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm font-semibold text-slate-600",
                                                children: "รูปถ่ายรถ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                lineNumber: 1217,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: carImage(detail?.car_pic_profile1) || "/file.svg",
                                                        alt: "",
                                                        className: "h-40 rounded-2xl border border-blue-100 object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                        lineNumber: 1219,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: carImage(detail?.car_pic_profile2) || "/file.svg",
                                                        alt: "",
                                                        className: "h-40 rounded-2xl border border-blue-100 object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                        lineNumber: 1224,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: carImage(detail?.car_pic_profile3) || "/file.svg",
                                                        alt: "",
                                                        className: "h-40 rounded-2xl border border-blue-100 object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                        lineNumber: 1229,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                lineNumber: 1218,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                        lineNumber: 1216,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                lineNumber: 1113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CarCheckFull.tsx",
                        lineNumber: 1111,
                        columnNumber: 9
                    }, this),
                    editingCheckId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-semibold",
                                children: [
                                    "โหมดแก้ไขรายการเช็ค: ",
                                    editingCheckId,
                                    "  ครั้งที่ : ",
                                    checkSeq,
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                lineNumber: 1241,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: cancelEdit,
                                className: "rounded-lg bg-white px-3 py-1 text-xs font-semibold text-amber-700",
                                children: "ยกเลิกแก้ไข"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                lineNumber: 1242,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CarCheckFull.tsx",
                        lineNumber: 1240,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CarCheckFull.tsx",
                lineNumber: 1110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "section-check",
                className: "space-y-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl border border-blue-100 bg-white p-5 shadow-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-semibold text-slate-800",
                                    children: "รูปการตรวจเช็ค"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                    lineNumber: 1256,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setShowImages((s)=>!s),
                                    className: "rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700",
                                    children: showImages ? "ซ่อน" : "แสดง"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                    lineNumber: 1257,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CarCheckFull.tsx",
                            lineNumber: 1255,
                            columnNumber: 11
                        }, this),
                        showImages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
                            children: [
                                {
                                    key: "image1",
                                    label: "รูปที่ 1",
                                    preview: preview1
                                },
                                {
                                    key: "image2",
                                    label: "รูปที่ 2",
                                    preview: preview2
                                },
                                {
                                    key: "image3",
                                    label: "รูปที่ 3",
                                    preview: preview3
                                }
                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-semibold text-slate-600",
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                            lineNumber: 1273,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onDragOver: (e)=>{
                                                e.preventDefault();
                                                setDragOver(item.key);
                                            },
                                            onDragLeave: ()=>setDragOver(null),
                                            onDrop: (e)=>handleCheckDrop(item.key, e),
                                            className: `flex h-40 cursor-pointer items-center justify-center rounded-2xl border border-dashed ${dragOver === item.key ? "border-blue-500 bg-blue-50" : "border-blue-200 bg-slate-50"} transition`,
                                            onClick: ()=>document.getElementById(item.key)?.click(),
                                            children: [
                                                item.preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: item.preview,
                                                    alt: "",
                                                    className: "h-full   rounded-2xl object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                                    lineNumber: 1286,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center text-xs text-slate-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-semibold text-slate-600",
                                                            children: "ลากรูปมาวางที่นี่"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                                            lineNumber: 1289,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "หรือแตะเพื่อเลือกรูป"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                                            lineNumber: 1290,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                                    lineNumber: 1288,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: item.key,
                                                    type: "file",
                                                    className: "hidden",
                                                    onChange: (e)=>handleCheckFile(item.key, e.target.files?.[0] || null)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                                    lineNumber: 1293,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                            lineNumber: 1274,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.key, true, {
                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                    lineNumber: 1272,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/CarCheckFull.tsx",
                            lineNumber: 1266,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CarCheckFull.tsx",
                    lineNumber: 1254,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CarCheckFull.tsx",
                lineNumber: 1253,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "section-tires",
                className: "space-y-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl border border-blue-100 bg-white p-5 shadow-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-semibold text-slate-800",
                                    children: "ตำแหน่งล้อ และข้อมูลยาง"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                    lineNumber: 1312,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowTable((s)=>!s),
                                            className: "rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700",
                                            children: showTable ? "ซ่อนตาราง" : "แสดงตาราง"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                            lineNumber: 1314,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowTires((s)=>!s),
                                            className: "rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700",
                                            children: showTires ? "ซ่อน" : "แสดง"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                            lineNumber: 1321,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                    lineNumber: 1313,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CarCheckFull.tsx",
                            lineNumber: 1311,
                            columnNumber: 11
                        }, this),
                        showTires && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-blue-100 bg-white p-5 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-semibold text-slate-800",
                                            children: "ตำแหน่งล้อ"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                            lineNumber: 1333,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 mt-1",
                                            children: "ลากสลับตำแหน่งเพื่อบันทึกการย้ายยาง"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                            lineNumber: 1334,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-5 space-y-5",
                                            children: layoutRows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap items-center justify-center gap-2 sm:gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: row.left.map((node)=>{
                                                                const index = positions.findIndex((p)=>p.id === node.id);
                                                                const tire = tires[index];
                                                                const hasTireDepth = tire?.tire_deep !== '' && tire?.tire_deep != null;
                                                                const hasTread = tire?.tire_p !== '' && tire?.tire_p != null;
                                                                const hasDepthPercent = hasTireDepth && hasTread;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    draggable: true,
                                                                    onDragStart: ()=>setDragIndex(index),
                                                                    onDragOver: (e)=>e.preventDefault(),
                                                                    onDrop: ()=>handleDrop(index),
                                                                    onClick: ()=>{
                                                                        setActiveIndex(index);
                                                                        applyLatestToIndex(index);
                                                                    },
                                                                    className: `h-20 w-14 cursor-pointer rounded-2xl border border-slate-900/10 text-[9px] leading-tight shadow sm:h-24 sm:w-16 sm:text-[10px] lg:h-28 lg:w-20
                              ${hasDepthPercent ? 'bg-blue-50 text-blue-700' : 'bg-slate-900 text-white'}
                              ${activeIndex === index ? 'ring-2 ring-blue-400' : ''}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex h-full flex-col items-center justify-center gap-1 px-2 text-center ",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-semibold",
                                                                                children: tire?.code ? `${tire?.code.substring(0, 6)}` : "ยังไม่ตรวจวัด"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                                lineNumber: 1368,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs font-semibold",
                                                                                children: index + 1
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                                lineNumber: 1374,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: tire?.tire_p ? `${tire.tire_p}Psi` : "ยังไม่ตรวจวัด"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                                lineNumber: 1375,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: tire?.tire_deep !== '' && tire?.tread !== '' ? `${(Number(tire?.tire_deep) * 100 / Number(tire?.tread)).toFixed(2)} %` : "ยังไม่ตรวจวัด"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                                lineNumber: 1376,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                        lineNumber: 1365,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, node.id, false, {
                                                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                    lineNumber: 1351,
                                                                    columnNumber: 29
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                                            lineNumber: 1341,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-2 w-16 rounded-full bg-slate-400 sm:w-24 lg:w-28"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                                            lineNumber: 1383,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: row.right.map((node)=>{
                                                                const index = positions.findIndex((p)=>p.id === node.id);
                                                                const tire = tires[index];
                                                                const hasTireDepth = tire?.tire_deep !== '' && tire?.tire_deep != null;
                                                                const hasTread = tire?.tire_p !== '' && tire?.tire_p != null;
                                                                const hasDepthPercent = hasTireDepth && hasTread;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    draggable: true,
                                                                    onDragStart: ()=>setDragIndex(index),
                                                                    onDragOver: (e)=>e.preventDefault(),
                                                                    onDrop: ()=>handleDrop(index),
                                                                    onClick: ()=>{
                                                                        setActiveIndex(index);
                                                                        applyLatestToIndex(index);
                                                                    },
                                                                    className: `h-20 w-14 cursor-pointer rounded-2xl border border-slate-900/10 text-[9px] leading-tight shadow sm:h-24 sm:w-16 sm:text-[10px] lg:h-28 lg:w-20
                              ${hasDepthPercent ? 'bg-blue-50 text-blue-700' : 'bg-slate-900 text-white'}
                              ${activeIndex === index ? 'ring-2 ring-blue-400' : ''}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex h-full flex-col items-center justify-center gap-1 px-2 text-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-semibold",
                                                                                children: tire?.code ? `${tire?.code.substring(0, 6)}` : "ยังไม่ตรวจวัด"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                                lineNumber: 1409,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs font-semibold",
                                                                                children: index + 1
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                                lineNumber: 1415,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: tire?.tire_p ? `${tire.tire_p}Psi` : "ยังไม่ตรวจวัด"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                                lineNumber: 1416,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: tire?.tire_deep !== '' && tire?.tread !== '' ? `${(Number(tire?.tire_deep) * 100 / Number(tire?.tread)).toFixed(2)} %` : "ยังไม่ตรวจวัด"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                                lineNumber: 1417,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                        lineNumber: 1407,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, node.id, false, {
                                                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                    lineNumber: 1393,
                                                                    columnNumber: 29
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                                            lineNumber: 1384,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, row.axle, true, {
                                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                                    lineNumber: 1337,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                            lineNumber: 1335,
                                            columnNumber: 17
                                        }, this),
                                        swapLog.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 rounded-xl border border-blue-100 bg-blue-50 px-3 py-2 text-xs text-slate-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold text-slate-700",
                                                    children: "ประวัติการสลับยาง"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                                    lineNumber: 1430,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "mt-1 space-y-1",
                                                    children: swapLog.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: item
                                                        }, idx, false, {
                                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                                            lineNumber: 1433,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                                    lineNumber: 1431,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                            lineNumber: 1429,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                    lineNumber: 1332,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-blue-100 bg-white p-5 shadow-sm space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-semibold text-slate-800",
                                            children: [
                                                "ข้อมูลยางตำแหน่งที่ ",
                                                activeIndex + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                            lineNumber: 1441,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500",
                                            children: positions[activeIndex]?.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                            lineNumber: 1442,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoComplete$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TireSearchSelect"], {
                                                value: activeTire?.gen || "",
                                                options: tireOptions.map((o)=>({
                                                        id: String(o.id),
                                                        label: o.label
                                                    })),
                                                onChange: (id)=>onSelectTireGen(id)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                lineNumber: 1446,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                            lineNumber: 1444,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-3 sm:grid-cols-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-sm font-semibold text-slate-600",
                                                            children: "ราคา"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                                            lineNumber: 1457,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: activeTire?.price || "",
                                                            onChange: (e)=>updateActive("price", e.target.value),
                                                            className: "mt-2 w-full rounded-xl border border-blue-100 bg-white px-3 py-2 text-sm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                                            lineNumber: 1458,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                                    lineNumber: 1456,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-sm font-semibold text-slate-600",
                                                            children: "ความลึกดอกยางใหม่"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                                            lineNumber: 1465,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: activeTire?.tread || "",
                                                            readOnly: true,
                                                            className: "mt-2 w-full rounded-xl border border-blue-100 bg-white px-3 py-2 text-sm text-slate-700"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                                            lineNumber: 1466,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                                    lineNumber: 1464,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-sm font-semibold text-slate-600",
                                                            children: "ซีรีส์"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                                            lineNumber: 1474,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: activeTire?.code || "",
                                                            onChange: (e)=>updateActive("code", e.target.value),
                                                            className: "mt-2 w-full rounded-xl border border-blue-100 bg-slate-50 px-3 py-2 text-sm text-slate-700"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                                            lineNumber: 1475,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                                    lineNumber: 1473,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-sm font-semibold text-slate-600",
                                                            children: "ความลึกดอกยาง ณ วันที่เช็ค"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                                            lineNumber: 1482,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: activeTire?.tire_deep || "",
                                                            onChange: (e)=>updateActive("tire_deep", e.target.value),
                                                            className: "mt-2 w-full rounded-xl border border-blue-100 bg-white px-3 py-2 text-sm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                                            lineNumber: 1483,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                                    lineNumber: 1481,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-sm font-semibold text-slate-600",
                                                            children: "แรงดันลม"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                                            lineNumber: 1490,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: activeTire?.tire_p || "",
                                                            onChange: (e)=>updateActive("tire_p", e.target.value),
                                                            className: "mt-2 w-full rounded-xl border border-blue-100 bg-white px-3 py-2 text-sm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                                            lineNumber: 1491,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                                    lineNumber: 1489,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                            lineNumber: 1455,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-semibold text-slate-600",
                                                    children: "หมายเหตุ"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                                    lineNumber: 1502,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    value: activeTire?.remark || "",
                                                    onChange: (e)=>updateActive("remark", e.target.value),
                                                    className: "mt-2 w-full rounded-xl border border-blue-100 bg-white px-3 py-2 text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                                    lineNumber: 1503,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                            lineNumber: 1501,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl border border-blue-100 bg-slate-50 p-4 space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap items-center justify-between gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-semibold text-slate-700",
                                                            children: "ถอด/เปลี่ยนยาง"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                                            lineNumber: 1512,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>addRemoveLog("ถอดยาง", "เก็บในคลังเพื่อสลับยาง"),
                                                                    className: "rounded-lg bg-amber-500 px-3 py-1 text-xs font-semibold text-white",
                                                                    children: "ถอดเก็บ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                    lineNumber: 1514,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: openStockDialog,
                                                                    className: "rounded-lg bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700",
                                                                    children: "เลือกจากคลัง"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                    lineNumber: 1528,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                                            lineNumber: 1513,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                                    lineNumber: 1511,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid gap-3 sm:grid-cols-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoComplete$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AutoCompleteSelect"], {
                                                            label: "ประเภทการทำรายการ",
                                                            value: removeAction,
                                                            options: [
                                                                {
                                                                    id: "ถอดยาง",
                                                                    label: "ถอดยาง"
                                                                },
                                                                {
                                                                    id: "เปลี่ยนยาง",
                                                                    label: "เปลี่ยนยาง"
                                                                },
                                                                {
                                                                    id: "สลับยาง",
                                                                    label: "สลับยาง"
                                                                },
                                                                {
                                                                    id: "ย้ายยาง",
                                                                    label: "ย้ายยาง"
                                                                }
                                                            ],
                                                            placeholder: "เลือกประเภท...",
                                                            onChange: (id)=>setRemoveAction((prev)=>id ? id : prev)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                                            lineNumber: 1545,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoComplete$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AutoCompleteSelect"], {
                                                            label: "การจัดการยางถอด",
                                                            value: removeDisposition,
                                                            options: [
                                                                {
                                                                    id: "เก็บในคลังเพื่อสลับยาง",
                                                                    label: "เก็บในคลังเพื่อสลับยาง"
                                                                },
                                                                {
                                                                    id: "เก็บไว้ใช้ภายหลัง",
                                                                    label: "เก็บไว้ใช้ภายหลัง"
                                                                },
                                                                {
                                                                    id: "ทิ้ง",
                                                                    label: "ทิ้ง"
                                                                }
                                                            ],
                                                            placeholder: "เลือกการจัดการ...",
                                                            onChange: (id)=>setRemoveDisposition(id ?? "")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                                            lineNumber: 1561,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                                    lineNumber: 1544,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs font-semibold text-slate-600",
                                                            children: "เหตุผล"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                                            lineNumber: 1574,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: removeReason,
                                                            onChange: (e)=>setRemoveReason(e.target.value),
                                                            className: "mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm",
                                                            placeholder: "เช่น ยางแตก, ยางรั่ว"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                                            lineNumber: 1575,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2 flex flex-wrap gap-2",
                                                            children: [
                                                                "ยางแตก",
                                                                "ยางรั่ว",
                                                                "ดอกยางหมด"
                                                            ].map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>setRemoveReason(label),
                                                                    className: "rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600",
                                                                    children: label
                                                                }, label, false, {
                                                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                                                    lineNumber: 1583,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                                            lineNumber: 1581,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                                    lineNumber: 1573,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                            lineNumber: 1510,
                                            columnNumber: 17
                                        }, this),
                                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600",
                                            children: error
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                            lineNumber: 1604,
                                            columnNumber: 19
                                        }, this),
                                        success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700",
                                            children: success
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                            lineNumber: 1609,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-end",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-slate-400",
                                                children: "ใช้ปุ่มบันทึกด้านบน"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                                lineNumber: 1615,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CarCheckFull.tsx",
                                            lineNumber: 1614,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CarCheckFull.tsx",
                                    lineNumber: 1440,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CarCheckFull.tsx",
                            lineNumber: 1331,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CarCheckFull.tsx",
                    lineNumber: 1310,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CarCheckFull.tsx",
                lineNumber: 1309,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-2 left-0 right-0 z-20 w-full px-3 sm:left-1/2 sm:right-auto sm:w-[95%] sm:max-w-5xl sm:-translate-x-1/2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl border border-blue-100 bg-white/95 p-3 shadow-lg backdrop-blur",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-semibold text-slate-700",
                                children: detail?.car_registration_number ? `เช็คสภาพรถ: ${detail.car_registration_number}` : "เช็คสภาพรถ"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                lineNumber: 1629,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#section-info",
                                        className: "rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700",
                                        children: "ข้อมูลรถ"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                        lineNumber: 1633,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#section-check",
                                        className: "rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700",
                                        children: "ตรวจเช็ค"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                        lineNumber: 1639,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#section-tires",
                                        className: "rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700",
                                        children: "ตำแหน่งล้อ"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CarCheckFull.tsx",
                                        lineNumber: 1645,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                lineNumber: 1632,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onSave,
                                disabled: saving,
                                className: "w-full rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-blue-200 sm:w-auto",
                                children: saving ? "Saving..." : editingCheckId ? "อัปเดต" : "บันทึก"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CarCheckFull.tsx",
                                lineNumber: 1652,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CarCheckFull.tsx",
                        lineNumber: 1628,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/CarCheckFull.tsx",
                    lineNumber: 1627,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CarCheckFull.tsx",
                lineNumber: 1626,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CarCheckFull.tsx",
        lineNumber: 945,
        columnNumber: 5
    }, this);
}
_s(CarCheckFull, "p44coxYKssQ77RMmruWsgzM7ytw=");
_c = CarCheckFull;
var _c;
__turbopack_context__.k.register(_c, "CarCheckFull");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/format-number.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// utils/currency.ts
__turbopack_context__.s([
    "formatThaiCurrency",
    ()=>formatThaiCurrency
]);
function toNumberLoose(v) {
    if (v === null || v === undefined) return null;
    if (typeof v === "number") return Number.isFinite(v) ? v : null;
    if (typeof v === "string") {
        const s = v.trim();
        if (!s) return null;
        // รองรับ "1,234.50" / "฿1,234.50" / "THB 1,234.50"
        const cleaned = s.replace(/฿/g, "").replace(/THB/gi, "").replace(/,/g, "").trim();
        const n = Number(cleaned);
        return Number.isFinite(n) ? n : null;
    }
    return null;
}
function formatThaiCurrency(value, options = {}) {
    const { decimals = 2, currency = "THB", showSymbol = true, useCode = false, useGrouping = true, negativeStyle = "minus" } = options;
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
        useGrouping
    });
    let out = nf.format(n);
    if (isNeg) {
        out = negativeStyle === "paren" ? `(${out})` : `-${out}`;
    }
    return out;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CarReportPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CarReportPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$format$2d$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/format-number.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CarReportPanel({ carId, onEditCheck }) {
    _s();
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pdfUrl, setPdfUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const lastUrlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CarReportPanel.useEffect": ()=>{
            setLoading(true);
            setError("");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/cars/${carId}/checks/history`).then({
                "CarReportPanel.useEffect": (data)=>setRows(data.items || [])
            }["CarReportPanel.useEffect"]).catch({
                "CarReportPanel.useEffect": (err)=>setError(err instanceof Error ? err.message : "Load report history failed")
            }["CarReportPanel.useEffect"]).finally({
                "CarReportPanel.useEffect": ()=>setLoading(false)
            }["CarReportPanel.useEffect"]);
        }
    }["CarReportPanel.useEffect"], [
        carId
    ]);
    const onEdit = (row)=>{
        onEditCheck?.(row.id);
    };
    async function openReport(row) {
        setOpen(true);
        setLoading(true);
        setPdfUrl(null);
        const token = localStorage.getItem("access_token");
        const res = await fetch(`/api/cars/${carId}/checks/${row.id}/report.pdf`, {
            headers: token ? {
                Authorization: `Bearer ${token}`
            } : undefined,
            credentials: "include"
        });
        if (!res.ok) {
            const text = await res.text().catch(()=>"");
            console.log("PDF API FAIL:", res.status, text);
            throw new Error(`Load PDF failed (${res.status})`);
        }
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        lastUrlRef.current = url;
        setPdfUrl(url);
        setLoading(false);
    // window.open(url, "_blank");
    }
    const close = ()=>{
        setOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/CarReportPanel.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-blue-100 bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b border-blue-50 px-4 py-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-semibold text-slate-700",
                                    children: "ประวัติการเช็ค"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CarReportPanel.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CarReportPanel.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "min-w-full text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "bg-blue-50 text-slate-600",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-2 text-left font-semibold",
                                                        children: "วันที่เช็ค"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CarReportPanel.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-2 text-left font-semibold",
                                                        children: "เลขไมล์"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CarReportPanel.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-2 text-left font-semibold",
                                                        children: "ผู้บันทึก"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CarReportPanel.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-2 text-left font-semibold",
                                                        children: "Action"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CarReportPanel.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CarReportPanel.tsx",
                                                lineNumber: 95,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CarReportPanel.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    colSpan: 4,
                                                    className: "px-4 py-4 text-center text-slate-500",
                                                    children: "Loading..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CarReportPanel.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CarReportPanel.tsx",
                                                lineNumber: 104,
                                                columnNumber: 19
                                            }, this) : rows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    colSpan: 4,
                                                    className: "px-4 py-4 text-center text-slate-500",
                                                    children: "ยังไม่มีประวัติการเช็ค"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CarReportPanel.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CarReportPanel.tsx",
                                                lineNumber: 110,
                                                columnNumber: 19
                                            }, this) : rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "border-t border-blue-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-2",
                                                            children: row.check_date
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CarReportPanel.tsx",
                                                            lineNumber: 118,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-2",
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$format$2d$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatThaiCurrency"])(row.distance ?? "0", {
                                                                    showSymbol: false,
                                                                    decimals: 0
                                                                }),
                                                                "  "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CarReportPanel.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-2",
                                                            children: row.user_id
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CarReportPanel.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>openReport(row),
                                                                        className: "inline-flex h-8 items-center justify-center rounded-lg bg-blue-100 px-3 text-xs font-semibold text-blue-700 transition hover:bg-blue-200 active:scale-[0.99]",
                                                                        children: "PDF"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CarReportPanel.tsx",
                                                                        lineNumber: 123,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>onEdit(row),
                                                                        className: "inline-flex h-8 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 active:scale-[0.99]",
                                                                        children: "แก้ไข"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CarReportPanel.tsx",
                                                                        lineNumber: 131,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CarReportPanel.tsx",
                                                                lineNumber: 122,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CarReportPanel.tsx",
                                                            lineNumber: 121,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, row.id, true, {
                                                    fileName: "[project]/src/components/CarReportPanel.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CarReportPanel.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CarReportPanel.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CarReportPanel.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CarReportPanel.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-blue-100 bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b border-blue-50 px-4 py-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-semibold text-slate-700",
                                    children: "ประวัติการสลับยาง"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CarReportPanel.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CarReportPanel.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-3 space-y-3 text-sm",
                                children: rows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-slate-500",
                                    children: "ยังไม่มีข้อมูลการสลับยาง"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CarReportPanel.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this) : rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg border border-blue-50 bg-slate-50 p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-semibold text-slate-600",
                                                children: [
                                                    row.check_date,
                                                    " • ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$format$2d$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatThaiCurrency"])(row.distance ?? "0", {
                                                        showSymbol: false,
                                                        decimals: 0
                                                    }),
                                                    " กม."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CarReportPanel.tsx",
                                                lineNumber: 158,
                                                columnNumber: 19
                                            }, this),
                                            row.swap_logs?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "mt-2 space-y-1 text-xs text-slate-600",
                                                children: row.swap_logs.map((s, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: s
                                                    }, `${row.id}-swap-${idx}`, false, {
                                                        fileName: "[project]/src/components/CarReportPanel.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CarReportPanel.tsx",
                                                lineNumber: 162,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 text-xs text-slate-400",
                                                children: "ไม่มีการสลับยาง"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CarReportPanel.tsx",
                                                lineNumber: 168,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, row.id, true, {
                                        fileName: "[project]/src/components/CarReportPanel.tsx",
                                        lineNumber: 157,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/CarReportPanel.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CarReportPanel.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CarReportPanel.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[100]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/50 backdrop-blur-[1px]",
                        onClick: close
                    }, void 0, false, {
                        fileName: "[project]/src/components/CarReportPanel.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center p-3 sm:p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between border-b px-4 py-3 sm:px-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-base font-semibold text-slate-900",
                                            children: "รายงาน PDF"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CarReportPanel.tsx",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: close,
                                            className: "inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-slate-100",
                                            "aria-label": "Close",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                className: "h-5 w-5 text-slate-600",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M18 6L6 18M6 6l12 12"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CarReportPanel.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CarReportPanel.tsx",
                                                lineNumber: 201,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CarReportPanel.tsx",
                                            lineNumber: 196,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CarReportPanel.tsx",
                                    lineNumber: 191,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[80vh] bg-slate-50",
                                    children: [
                                        loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-full flex-col items-center justify-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-slate-700"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CarReportPanel.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-semibold text-slate-700",
                                                    children: "กำลังโหลด PDF..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CarReportPanel.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CarReportPanel.tsx",
                                            lineNumber: 216,
                                            columnNumber: 19
                                        }, this),
                                        !loading && error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-full flex-col items-start justify-center gap-1 p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-base font-semibold text-slate-900",
                                                    children: "โหลด PDF ไม่สำเร็จ"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CarReportPanel.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-slate-600",
                                                    children: error
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CarReportPanel.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CarReportPanel.tsx",
                                            lineNumber: 225,
                                            columnNumber: 19
                                        }, this),
                                        !loading && !error && pdfUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                            title: "car-report-pdf",
                                            src: pdfUrl,
                                            className: "h-full w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CarReportPanel.tsx",
                                            lineNumber: 234,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CarReportPanel.tsx",
                                    lineNumber: 214,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center justify-end gap-2 border-t bg-white px-4 py-3 sm:px-5",
                                    children: [
                                        pdfUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50",
                                            onClick: ()=>window.open(pdfUrl, "_blank", "noopener,noreferrer"),
                                            children: "เปิดแท็บใหม่"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CarReportPanel.tsx",
                                            lineNumber: 245,
                                            columnNumber: 19
                                        }, this),
                                        pdfUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800",
                                            onClick: ()=>{
                                                const a = document.createElement("a");
                                                a.href = pdfUrl;
                                                a.download = "report.pdf";
                                                a.click();
                                            },
                                            children: "ดาวน์โหลด"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CarReportPanel.tsx",
                                            lineNumber: 254,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100",
                                            onClick: close,
                                            children: "ปิด"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CarReportPanel.tsx",
                                            lineNumber: 267,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CarReportPanel.tsx",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CarReportPanel.tsx",
                            lineNumber: 189,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CarReportPanel.tsx",
                        lineNumber: 188,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CarReportPanel.tsx",
                lineNumber: 180,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(CarReportPanel, "GowY4c/eCJo/s8Hlfq0a8XYEztA=");
_c = CarReportPanel;
var _c;
__turbopack_context__.k.register(_c, "CarReportPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(app)/cars/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CarsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Pagination.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Drawer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CarForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CarForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CarCheckFull$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CarCheckFull.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CarReportPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CarReportPanel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function CarsPage() {
    _s();
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [total, setTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [searchInput, setSearchInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [formDrawerOpen, setFormDrawerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [checkDrawerOpen, setCheckDrawerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [checkingCar, setCheckingCar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingCheckLogId, setEditingCheckLogId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [reportDrawerOpen, setReportDrawerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [reportCar, setReportCar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const perPage = 10;
    const [reloadKeys, setReloadKeys] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    async function load() {
        setLoading(true);
        setError("");
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/cars?page=${page}&per_page=${perPage}&search=${encodeURIComponent(search)}`);
            setRows(data.items);
            setTotal(data.total);
        } catch (err) {
            setRows([]);
            setTotal(0);
            setError(err instanceof Error ? err.message : "Load cars failed");
        } finally{
            setLoading(false);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CarsPage.useEffect": ()=>{
            const timer = window.setTimeout({
                "CarsPage.useEffect.timer": ()=>{
                    setPage(1);
                    setSearch(searchInput.trim());
                }
            }["CarsPage.useEffect.timer"], 350);
            return ({
                "CarsPage.useEffect": ()=>window.clearTimeout(timer)
            })["CarsPage.useEffect"];
        }
    }["CarsPage.useEffect"], [
        searchInput
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CarsPage.useEffect": ()=>{
            load();
        }
    }["CarsPage.useEffect"], [
        page,
        search
    ]);
    const totalPages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CarsPage.useMemo[totalPages]": ()=>Math.ceil(total / perPage)
    }["CarsPage.useMemo[totalPages]"], [
        total
    ]);
    function openCreate() {
        setReloadKeys((prev)=>prev + 1);
        setEditingId(null);
        setFormDrawerOpen(true);
    }
    function openEdit(id) {
        setReloadKeys((prev)=>prev + 1);
        setEditingId(id);
        setFormDrawerOpen(true);
    }
    function openCheck(row) {
        setReloadKeys((prev)=>prev + 1);
        setCheckingCar(row);
        setEditingCheckLogId(null);
        setCheckDrawerOpen(true);
    }
    function openReport(row) {
        setReloadKeys((prev)=>prev + 1);
        setReportCar(row);
        setReportDrawerOpen(true);
    }
    function openCheckEditFromReport(checkId) {
        if (!reportCar) return;
        setReloadKeys((prev)=>prev + 1);
        setEditingCheckLogId(checkId);
        setCheckingCar(reportCar);
        setReportDrawerOpen(false);
        setCheckDrawerOpen(true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-semibold text-slate-900",
                                children: "ข้อมูลรถ"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(app)/cars/page.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-500",
                                children: "จัดการข้อมูลรถทั้งหมด"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(app)/cars/page.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(app)/cars/page.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: openCreate,
                        className: "rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-200",
                        children: "เพิ่มรายการรถ"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(app)/cars/page.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(app)/cars/page.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-blue-100 bg-white shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-between gap-3 border-b border-blue-50 px-5 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-semibold text-slate-700",
                                children: "รายการรถ"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(app)/cars/page.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: searchInput,
                                onChange: (e)=>setSearchInput(e.target.value),
                                placeholder: "ค้นหา บริษัท/สาขา/ทะเบียน/ยี่ห้อ/พนักงานขับ",
                                className: "w-full max-w-sm rounded-xl border border-blue-100 bg-slate-50 px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-blue-100"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(app)/cars/page.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(app)/cars/page.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-5 mt-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/app/(app)/cars/page.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "min-w-full text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-blue-50 text-slate-600",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-5 py-3 text-left font-semibold",
                                                children: "No."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(app)/cars/page.tsx",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-5 py-3 text-left font-semibold",
                                                children: "บริษัท"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(app)/cars/page.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-5 py-3 text-left font-semibold",
                                                children: "ทะเบียนรถ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(app)/cars/page.tsx",
                                                lineNumber: 154,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-5 py-3 text-left font-semibold",
                                                children: "ยี่ห้อ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(app)/cars/page.tsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-5 py-3 text-left font-semibold",
                                                children: "ผขร."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(app)/cars/page.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-5 py-3 text-left font-semibold",
                                                children: "ครั้งล่าสุด"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(app)/cars/page.tsx",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-5 py-3 text-left font-semibold",
                                                children: "เช็คล่าสุด"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(app)/cars/page.tsx",
                                                lineNumber: 158,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-5 py-3 text-left font-semibold",
                                                children: "Actions"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(app)/cars/page.tsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(app)/cars/page.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(app)/cars/page.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: 8,
                                            className: "px-5 py-6 text-center text-slate-500",
                                            children: "Loading..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(app)/cars/page.tsx",
                                            lineNumber: 165,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(app)/cars/page.tsx",
                                        lineNumber: 164,
                                        columnNumber: 17
                                    }, this) : rows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: 8,
                                            className: "px-5 py-6 text-center text-slate-500",
                                            children: "ไม่พบข้อมูล"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(app)/cars/page.tsx",
                                            lineNumber: 171,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(app)/cars/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this) : rows.map((row, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-t border-blue-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-5 py-3",
                                                    children: (page - 1) * perPage + idx + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(app)/cars/page.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-5 py-3",
                                                    children: row.company
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(app)/cars/page.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-5 py-3",
                                                    children: row.registration
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(app)/cars/page.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-5 py-3",
                                                    children: row.brand
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(app)/cars/page.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-5 py-3",
                                                    children: row.driver
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(app)/cars/page.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-5 py-3",
                                                    children: row.last_check_round ? `ครั้งที่ ${row.last_check_round}` : "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(app)/cars/page.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-5 py-3",
                                                    children: row.last_check_date || "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(app)/cars/page.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-5 py-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>openCheck(row),
                                                                className: "rounded-lg bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700",
                                                                children: "เชค"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(app)/cars/page.tsx",
                                                                lineNumber: 188,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>openReport(row),
                                                                className: "rounded-lg bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700",
                                                                children: "รายงาน"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(app)/cars/page.tsx",
                                                                lineNumber: 194,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>openEdit(row.id),
                                                                className: "rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600",
                                                                children: "ดู/แก้ไข"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(app)/cars/page.tsx",
                                                                lineNumber: 200,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(app)/cars/page.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(app)/cars/page.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, row.id, true, {
                                            fileName: "[project]/src/app/(app)/cars/page.tsx",
                                            lineNumber: 177,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(app)/cars/page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(app)/cars/page.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(app)/cars/page.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-between gap-3 border-t border-blue-50 px-5 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500",
                                children: [
                                    "แสดง ",
                                    rows.length,
                                    " จากทั้งหมด ",
                                    total,
                                    " รายการ"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(app)/cars/page.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                current: page,
                                totalPages: totalPages,
                                onChange: setPage
                            }, void 0, false, {
                                fileName: "[project]/src/app/(app)/cars/page.tsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(app)/cars/page.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(app)/cars/page.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: formDrawerOpen,
                title: editingId ? "แก้ไขข้อมูลรถ" : "เพิ่มข้อมูลรถ",
                onClose: ()=>setFormDrawerOpen(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CarForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    carId: editingId,
                    onSaved: ()=>{
                        setFormDrawerOpen(false);
                        load();
                    }
                }, reloadKeys, false, {
                    fileName: "[project]/src/app/(app)/cars/page.tsx",
                    lineNumber: 227,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(app)/cars/page.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: checkDrawerOpen,
                title: checkingCar ? `เช็คสภาพรถทะเบียน: ${checkingCar.registration}` : "เช็คสภาพรถทะเบียน",
                onClose: ()=>setCheckDrawerOpen(false),
                children: checkingCar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CarCheckFull$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    carId: checkingCar.id,
                    editCheckId: editingCheckLogId,
                    onClose: ()=>setCheckDrawerOpen(false)
                }, reloadKeys, false, {
                    fileName: "[project]/src/app/(app)/cars/page.tsx",
                    lineNumber: 245,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(app)/cars/page.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: reportDrawerOpen,
                title: reportCar ? `รายงานรถ: ${reportCar.registration}` : "รายงานรถ",
                onClose: ()=>setReportDrawerOpen(false),
                children: reportCar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CarReportPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    carId: reportCar.id,
                    onEditCheck: openCheckEditFromReport
                }, reloadKeys, false, {
                    fileName: "[project]/src/app/(app)/cars/page.tsx",
                    lineNumber: 255,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(app)/cars/page.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(app)/cars/page.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
_s(CarsPage, "JfFuMrlXMyrNgJ/0NEMTGRCH7/Q=");
_c = CarsPage;
var _c;
__turbopack_context__.k.register(_c, "CarsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e87fa0cd._.js.map