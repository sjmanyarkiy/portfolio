(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/education/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/code/personal/portfolio/portfolio1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/code/personal/portfolio/portfolio1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const Education = ()=>{
    _s();
    const [educationData, setEducationData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Education.useEffect": ()=>{
            const fetchData = {
                "Education.useEffect.fetchData": async ()=>{
                    try {
                        const res = await fetch('/api/page-data');
                        if (!res.ok) throw new Error('Failed to fetch');
                        const data = await res.json();
                        setEducationData(data?.educationData);
                    } catch (error) {
                        console.error('Error fetching services:', error);
                    }
                }
            }["Education.useEffect.fetchData"];
            fetchData();
        }
    }["Education.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-x border-primary/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col xs:flex-row gap-5 items-center justify-between",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm tracking-[2px] text-primary uppercase font-medium",
                                children: "Education"
                            }, void 0, false, {
                                fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/education/index.tsx",
                                lineNumber: 28,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/education/index.tsx",
                            lineNumber: 27,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/education/index.tsx",
                        lineNumber: 26,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-primary/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative max-w-3xl mx-auto px-4 sm:px-0 py-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden sm:flex absolute left-5 sm:left-[15.9rem] sm:translate-x-1/2 top-0 bottom-0 w-px bg-primary/10"
                                }, void 0, false, {
                                    fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/education/index.tsx",
                                    lineNumber: 34,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: educationData?.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `relative flex flex-col sm:flex-row sm:items-start gap-4 ${index !== educationData.length - 1 ? "mb-8 sm:mb-16" : ""}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative pl-8 sm:pl-0 sm:w-64 sm:text-right sm:pr-16",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "ml-2.5 sm:ml-0 text-base font-normal sm:mb-0 leading-relaxed",
                                                            children: item.date
                                                        }, void 0, false, {
                                                            fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/education/index.tsx",
                                                            lineNumber: 44,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute left-1.5 sm:left-auto sm:-right-3 top-0 z-10 p-1.5 border border-primary/10 rounded-full bg-white",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-3 h-3 bg-primary rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/education/index.tsx",
                                                                lineNumber: 50,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/education/index.tsx",
                                                            lineNumber: 49,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/education/index.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-2 flex-1 sm:pl-16 ml-2 sm:ml-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "font-semibold",
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/education/index.tsx",
                                                            lineNumber: 55,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-primary",
                                                            children: item.subtitle
                                                        }, void 0, false, {
                                                            fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/education/index.tsx",
                                                            lineNumber: 56,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/education/index.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/education/index.tsx",
                                            lineNumber: 38,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/education/index.tsx",
                                    lineNumber: 36,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/education/index.tsx",
                            lineNumber: 33,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/education/index.tsx",
                        lineNumber: 32,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/education/index.tsx",
                lineNumber: 25,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/education/index.tsx",
            lineNumber: 24,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/education/index.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Education, "sdxDHLqnDs6kKLD+HkWk26quz/s=");
_c = Education;
const __TURBOPACK__default__export__ = Education;
var _c;
__turbopack_context__.k.register(_c, "Education");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/experience/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/code/personal/portfolio/portfolio1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/code/personal/portfolio/portfolio1/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/code/personal/portfolio/portfolio1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Experience = ()=>{
    _s();
    const [experienceData, setExperienceData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Experience.useEffect": ()=>{
            const fetchData = {
                "Experience.useEffect.fetchData": async ()=>{
                    try {
                        const res = await fetch('/api/page-data');
                        if (!res.ok) throw new Error('Failed to fetch');
                        const data = await res.json();
                        setExperienceData(data?.experienceData);
                    } catch (error) {
                        console.error('Error fetching services:', error);
                    }
                }
            }["Experience.useEffect.fetchData"];
            fetchData();
        }
    }["Experience.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-x border-primary/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col xs:flex-row gap-5 items-center justify-between",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm tracking-[2px] text-primary uppercase font-medium",
                                children: "Experience"
                            }, void 0, false, {
                                fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/experience/index.tsx",
                                lineNumber: 29,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/experience/index.tsx",
                            lineNumber: 28,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/experience/index.tsx",
                        lineNumber: 27,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-primary/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16 ",
                            children: experienceData?.map((value, index)=>{
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-5 border-dashed border-b border-primary/10 last:border-b-0 pt-8 sm:pt-10 pb-8 sm:pb-10 first:pt-0 last:pb-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: value?.icon,
                                            alt: "icon",
                                            width: 32,
                                            height: 19
                                        }, void 0, false, {
                                            fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/experience/index.tsx",
                                            lineNumber: 39,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-5 items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                    children: value?.role
                                                }, void 0, false, {
                                                    fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/experience/index.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2.5 border border-primary/10 rounded-lg py-1.5 px-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `w-4 h-2 rounded-sm ${value?.endYear == "Present" ? 'bg-primary' : 'bg-primary/10'} `
                                                        }, void 0, false, {
                                                            fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/experience/index.tsx",
                                                            lineNumber: 43,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm xs:text-base text-primary",
                                                            children: [
                                                                value?.startYear,
                                                                " – ",
                                                                value?.endYear,
                                                                " · ",
                                                                value?.location
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/experience/index.tsx",
                                                            lineNumber: 44,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/experience/index.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/experience/index.tsx",
                                            lineNumber: 40,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            children: value?.bulletPoints?.map((point, index)=>{
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-2 text-base font-normal text-secondary",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-2.5 h-2.5 text-secondary",
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/experience/index.tsx",
                                                            lineNumber: 54,
                                                            columnNumber: 57
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        point
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/experience/index.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 53
                                                }, ("TURBOPACK compile-time value", void 0));
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/experience/index.tsx",
                                            lineNumber: 47,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, index, true, {
                                    fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/experience/index.tsx",
                                    lineNumber: 36,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/experience/index.tsx",
                            lineNumber: 33,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/experience/index.tsx",
                        lineNumber: 32,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/experience/index.tsx",
                lineNumber: 26,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/experience/index.tsx",
            lineNumber: 25,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/experience/index.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Experience, "N2GhsNJrJAzXrtx2N6qq8a6aBi8=");
_c = Experience;
const __TURBOPACK__default__export__ = Experience;
var _c;
__turbopack_context__.k.register(_c, "Experience");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Development/code/personal/portfolio/portfolio1/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/code/personal/portfolio/portfolio1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/code/personal/portfolio/portfolio1/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Development/code/personal/portfolio/portfolio1/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/code/personal/portfolio/portfolio1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/code/personal/portfolio/portfolio1/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/code/personal/portfolio/portfolio1/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/code/personal/portfolio/portfolio1/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        "data-variant": variant,
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/featured-work/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/code/personal/portfolio/portfolio1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/code/personal/portfolio/portfolio1/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/code/personal/portfolio/portfolio1/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/code/personal/portfolio/portfolio1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/code/personal/portfolio/portfolio1/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const FeaturedWork = ()=>{
    _s();
    const [featureWork, setFeatureWork] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FeaturedWork.useEffect": ()=>{
            const fetchData = {
                "FeaturedWork.useEffect.fetchData": async ()=>{
                    try {
                        const res = await fetch('/api/featured-work');
                        if (!res.ok) throw new Error('Failed to fetch');
                        const data = await res.json();
                        setFeatureWork(data?.featureWork);
                    } catch (error) {
                        console.error('Error fetching services:', error);
                    }
                }
            }["FeaturedWork.useEffect.fetchData"];
            fetchData();
        }
    }["FeaturedWork.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-x border-primary/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col xs:flex-row gap-5 items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm tracking-[2px] text-primary uppercase font-medium",
                                    children: "Featured work"
                                }, void 0, false, {
                                    fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/featured-work/index.tsx",
                                    lineNumber: 31,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    asChild: true,
                                    variant: "outline",
                                    className: "h-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "py-3 px-5",
                                        children: "Download Portfolio"
                                    }, void 0, false, {
                                        fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/featured-work/index.tsx",
                                        lineNumber: 33,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/featured-work/index.tsx",
                                    lineNumber: 32,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/featured-work/index.tsx",
                            lineNumber: 30,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/featured-work/index.tsx",
                        lineNumber: 29,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 border-t border-primary/10",
                        children: featureWork?.map((value, index)=>{
                            const isRightCol = index % 2 === 1;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `group flex flex-col gap-3.5 sm:gap-5 p-3.5 sm:p-6 ${isRightCol ? 'md:border-l md:border-primary/10' : ''}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: value?.image,
                                            alt: "Image",
                                            width: 490,
                                            height: 300,
                                            className: "w-full h-full group-hover:scale-105 transition-all duration-300 ease-in-out"
                                        }, void 0, false, {
                                            fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/featured-work/index.tsx",
                                            lineNumber: 49,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/featured-work/index.tsx",
                                        lineNumber: 48,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1 sm:gap-2 px-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    children: value?.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/featured-work/index.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 58
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/featured-work/index.tsx",
                                                lineNumber: 58,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: value?.roles?.join(', ')
                                                }, void 0, false, {
                                                    fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/featured-work/index.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/featured-work/index.tsx",
                                                lineNumber: 59,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/featured-work/index.tsx",
                                        lineNumber: 57,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/featured-work/index.tsx",
                                lineNumber: 44,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/featured-work/index.tsx",
                        lineNumber: 39,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/featured-work/index.tsx",
                lineNumber: 28,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/featured-work/index.tsx",
            lineNumber: 27,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/featured-work/index.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FeaturedWork, "fRG6OuMohGs9HuNwhck9AnBHxKI=");
_c = FeaturedWork;
const __TURBOPACK__default__export__ = FeaturedWork;
var _c;
__turbopack_context__.k.register(_c, "FeaturedWork");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/project-overview/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/code/personal/portfolio/portfolio1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/code/personal/portfolio/portfolio1/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/code/personal/portfolio/portfolio1/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/code/personal/portfolio/portfolio1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const ProjectOverview = ()=>{
    _s();
    const [projectData, setProjectData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectOverview.useEffect": ()=>{
            const fetchData = {
                "ProjectOverview.useEffect.fetchData": async ()=>{
                    try {
                        const res = await fetch('/api/page-data');
                        if (!res.ok) throw new Error('Failed to fetch');
                        const data = await res.json();
                        setProjectData(data?.projectOverview);
                    } catch (error) {
                        console.error('Error fetching services:', error);
                    }
                }
            }["ProjectOverview.useEffect.fetchData"];
            fetchData();
        }
    }["ProjectOverview.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-x border-primary/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col max-w-3xl mx-auto gap-10 sm:gap-16 px-4 sm:px-7 py-9 md:py-16 ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "max-w-fit lg:max-w-2xs w-full text-sm tracking-[2px] text-primary uppercase font-medium",
                                    children: "Case studies"
                                }, void 0, false, {
                                    fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/project-overview/index.tsx",
                                    lineNumber: 29,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2.5",
                                    children: projectData?.caseStudies?.map((value, index)=>{
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: value?.url,
                                            className: "group flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    children: value?.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/project-overview/index.tsx",
                                                    lineNumber: 34,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/images/icon/tile-arrow-icon.svg",
                                                    alt: "tile-icon",
                                                    width: 24,
                                                    height: 24,
                                                    className: "group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300 ease-in"
                                                }, void 0, false, {
                                                    fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/project-overview/index.tsx",
                                                    lineNumber: 35,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/project-overview/index.tsx",
                                            lineNumber: 33,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/project-overview/index.tsx",
                                    lineNumber: 30,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/project-overview/index.tsx",
                            lineNumber: 28,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "max-w-fit lg:max-w-2xs w-full text-sm tracking-[2px] text-primary uppercase font-medium",
                                    children: "Side Projects"
                                }, void 0, false, {
                                    fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/project-overview/index.tsx",
                                    lineNumber: 43,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2.5",
                                    children: projectData?.sideProjects?.map((value, index)=>{
                                        const isComingSoon = value?.comingSoon;
                                        const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "group flex flex-wrap items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: `${isComingSoon ? 'text-muted-foreground' : 'text-primary'}`,
                                                    children: value?.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/project-overview/index.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                !isComingSoon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/images/icon/tile-arrow-icon.svg",
                                                    alt: "tile-icon",
                                                    width: 24,
                                                    height: 24,
                                                    className: "group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300 ease-in"
                                                }, void 0, false, {
                                                    fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/project-overview/index.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "py-1.5 px-3 bg-muted rounded-lg",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs md:text-base font-normal text-muted-foreground",
                                                        children: "Coming Soon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/project-overview/index.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 53
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/project-overview/index.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/project-overview/index.tsx",
                                            lineNumber: 49,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0));
                                        return isComingSoon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: content
                                        }, index, false, {
                                            fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/project-overview/index.tsx",
                                            lineNumber: 70,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$code$2f$personal$2f$portfolio$2f$portfolio1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "group",
                                            children: content
                                        }, index, false, {
                                            fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/project-overview/index.tsx",
                                            lineNumber: 72,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/project-overview/index.tsx",
                                    lineNumber: 44,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/project-overview/index.tsx",
                            lineNumber: 42,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/project-overview/index.tsx",
                    lineNumber: 27,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/project-overview/index.tsx",
                lineNumber: 26,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/project-overview/index.tsx",
            lineNumber: 25,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Development/code/personal/portfolio/portfolio1/src/app/components/home/project-overview/index.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProjectOverview, "VwkETmwzR6Pf+d4Han1RYhBwXss=");
_c = ProjectOverview;
const __TURBOPACK__default__export__ = ProjectOverview;
var _c;
__turbopack_context__.k.register(_c, "ProjectOverview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Development_code_personal_portfolio_portfolio1_src_08386a8b._.js.map