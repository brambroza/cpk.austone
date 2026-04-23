module.exports = [
"[externals]/@react-pdf/renderer [external] (@react-pdf/renderer, esm_import, [project]/node_modules/@react-pdf/renderer, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/[externals]_@react-pdf_renderer_065db2f9._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[externals]/@react-pdf/renderer [external] (@react-pdf/renderer, esm_import, [project]/node_modules/@react-pdf/renderer)");
    });
});
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-route] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.resolve().then(() => {
        return parentImport("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-route] (ecmascript)");
    });
});
}),
];