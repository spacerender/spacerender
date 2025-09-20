try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c417bcba-8dcf-46ea-827c-9c0c763d7159", e._sentryDebugIdIdentifier = "sentry-dbid-c417bcba-8dcf-46ea-827c-9c0c763d7159")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6956], {
        35801: function(e, t, i) {
            i.d(t, {
                ED: function() {
                    return p
                },
                H5: function() {
                    return m
                },
                sB: function() {
                    return h
                }
            });
            var l = i(52322),
                n = i(40489),
                a = i(88241),
                r = i(93556),
                o = i(2784),
                s = i(47873),
                c = i(93218);
            let d = o.createContext([
                    [], () => {}
                ]),
                u = d.Provider;

            function h(e, t) {
                let [i, l] = o.useContext(d), n = e || i, a = t || l;
                return [o.useCallback(e => {
                    e !== n[n.length - 1] && a(t => [...t, e])
                }, [n, a]), o.useCallback(() => {
                    n.length > 1 && a(e => e.slice(0, -1))
                }, [n.length, a])]
            }

            function m(e) {
                let {
                    panels: t,
                    suppressAnimations: i,
                    onChange: n,
                    onEnter: d,
                    children: h
                } = e, m = (0, c.D)(t), p = !!m && t.length < m.length;
                return (0, l.jsx)("div", {
                    className: "grid h-full grid-cols-1 grid-rows-1 overflow-x-hidden",
                    children: (0, l.jsx)(u, {
                        value: o.useMemo(() => [t, e => {
                            null == n || n("function" == typeof e ? e(t) : e)
                        }], [n, t]),
                        children: (0, l.jsx)(a.M, {
                            initial: !1,
                            children: t.map((e, n) => (0, l.jsx)(r.m.div, {
                                initial: {
                                    x: "100%"
                                },
                                animate: {
                                    x: n === t.length - 1 ? "0%" : "-30%"
                                },
                                exit: {
                                    x: "100%"
                                },
                                transition: i ? {
                                    type: !1
                                } : {
                                    ease: s.mZ
                                },
                                className: "col-start-1 row-start-1",
                                onUpdate: t => {
                                    let {
                                        x: i
                                    } = t;
                                    "0%" === i && (null == d || d(e, p))
                                },
                                children: h(e)
                            }, "".concat(e, "-").concat(n)))
                        })
                    })
                })
            }

            function p(e) {
                let {
                    className: t,
                    style: i,
                    ...a
                } = e;
                return (0, l.jsx)("div", {
                    className: (0, n.Z)("h-full bg-graphite-0", t),
                    style: i,
                    ...a
                })
            }
        },
        98383: function(e, t, i) {
            i.d(t, {
                N: function() {
                    return s
                }
            });
            var l = i(52322),
                n = i(61463),
                a = i(40489),
                r = i(31260),
                o = i(63126);

            function s(e) {
                let {
                    intent: t = "neutral",
                    Icon: i,
                    centered: s,
                    textSize: c = "xs",
                    size: d = "sm",
                    className: u,
                    children: h,
                    onDismiss: m,
                    actionButton: p,
                    ...f
                } = e;
                return (0, l.jsxs)("div", {
                    role: "alert",
                    className: (0, a.Z)("flex items-center space-x-2 px-6 text-xs", {
                        "bg-graphite-5 text-graphite-100 dark:bg-graphite-100 dark:text-graphite-0": "neutral" === t,
                        "bg-graphite-5 font-bold  tracking-[0.01em] text-graphite-100 dark:bg-graphite-100 dark:text-graphite-0": "emergency" === t,
                        "bg-violet-0 text-violet-40": "primary" === t,
                        "bg-crimson-0 text-crimson-40": "danger" === t,
                        "laptop:text-sm": "sm" === c
                    }, s ? "justify-center text-center" : "justify-between", {
                        "h-12": "sm" === d,
                        "h-16": "md" === d
                    }, u),
                    ...f,
                    children: [(0, l.jsxs)("div", {
                        className: (0, n.Z)("flex w-full items-center space-x-2", {
                            "w-auto text-center": "emergency" === t
                        }),
                        children: [i && (0, l.jsx)(i, {
                            "aria-hidden": !0,
                            className: "h-5 flex-none"
                        }), (0, l.jsx)("div", {
                            className: (0, a.Z)(i && "flex flex-1 justify-between space-x-2 pt-0.5"),
                            children: h
                        })]
                    }), p && (0, l.jsx)("div", {
                        children: p
                    }), m && "emergency" !== t && (0, l.jsx)(o.z, {
                        size: "xs",
                        shape: "circle",
                        intent: "neutral",
                        className: "text-graphite-20 hover:text-graphite-10",
                        onClick: m,
                        children: (0, l.jsx)(r.IconX, {
                            "aria-hidden": !0,
                            className: "h-6"
                        })
                    })]
                })
            }
        },
        4730: function(e, t, i) {
            i.d(t, {
                Z: function() {
                    return r
                }
            });
            var l = i(52322),
                n = i(16530),
                a = i(61463);

            function r(e) {
                let {
                    disabled: t,
                    checked: i
                } = e;
                return (0, l.jsx)(n.fC, { ...e,
                    className: (0, a.Z)("relative h-6 w-[42px] flex-none cursor-pointer rounded-full outline-none", t ? "cursor-not-allowed bg-graphite-10" : [i ? "bg-emerald-40 hover:bg-emerald-60" : "bg-graphite-10 hover:bg-graphite-20"]),
                    children: (0, l.jsx)(n.bU, {
                        className: "block h-5 w-5 translate-x-0.5 rounded-full bg-graphite-0 shadow-hard-xs transition-all duration-100 will-change-transform data-[state=checked]:translate-x-5"
                    })
                })
            }
        },
        2355: function(e, t, i) {
            i.d(t, {
                J: function() {
                    return a
                }
            });
            var l = i(52322),
                n = i(61463);

            function a(e) {
                let {
                    className: t,
                    children: i,
                    newGrid: a,
                    fullWidth: r
                } = e;
                return (0, l.jsx)("div", {
                    className: (0, n.Z)("mx-auto grid w-full grid-cols-4 gap-x-6 px-6 @tablet:grid-cols-8", a ? "@laptop:grid-cols-14 @laptop:gap-x-12" : "@laptop:grid-cols-12", !r && "max-w-screen-desktop", t),
                    children: i
                })
            }
        },
        40615: function(e, t, i) {
            i.d(t, {
                O: function() {
                    return b
                },
                n: function() {
                    return w
                }
            });
            var l = i(52322),
                n = i(61463),
                a = i(2784),
                r = i(94745),
                o = i(6113),
                s = i(31260),
                c = i(18941),
                d = i(98644),
                u = i(56646),
                h = i(4730),
                m = i(10963),
                p = i(48115),
                f = i(60185);
            let g = {
                    name: "Premium",
                    subtitle: "Save 40% by paying yearly",
                    features: [{
                        title: "everything in the Free trial",
                        highlighted: !0,
                        included: !0
                    }, {
                        title: "publish and share your site",
                        included: !0,
                        highlighted: !0
                    }, {
                        title: "buy or connect a domain",
                        included: !0
                    }, {
                        title: "built-in site insights",
                        included: !0
                    }, {
                        title: "detailed SEO settings",
                        included: !0
                    }, {
                        title: "global color and font presets",
                        included: !0
                    }, {
                        title: "upload and showcase videos",
                        included: !0
                    }, {
                        title: "and a lot more",
                        included: !0,
                        icon: s.IconPlus
                    }],
                    price: {
                        unit_amount: 1500,
                        recurring: {
                            interval: "month"
                        }
                    }
                },
                v = { ...g,
                    subtitle: "$108 billed yearly",
                    price: {
                        unit_amount: 900,
                        recurring: {
                            interval: "year"
                        }
                    }
                },
                b = {
                    freeTrial: {
                        name: "7 day Free trial",
                        subtitle: "No credit card needed",
                        price: {
                            unit_amount: 0,
                            recurring: null
                        },
                        features: [{
                            title: "7-day full access to Premium",
                            highlighted: !0,
                            included: !0
                        }, {
                            title: "website templates",
                            included: !0
                        }, {
                            title: "fast, no-code customization",
                            included: !0
                        }, {
                            title: "ready-made section presets",
                            included: !0
                        }, {
                            title: "brand building quizzes",
                            included: !0
                        }, {
                            title: "publish and share your site"
                        }, {
                            title: "buy or connect a domain"
                        }, {
                            title: "built-in site insights"
                        }]
                    },
                    monthly: g,
                    yearly: v
                };

            function w(e) {
                let {
                    onDismiss: t
                } = e, [i, s] = a.useState("year");
                return (0, l.jsxs)(p.Vq, {
                    onDismiss: t,
                    className: "max-h-[90vh] overflow-y-auto bg-graphite-0",
                    children: [(0, l.jsx)(p.fK, {
                        children: (0, l.jsxs)(p.$N, {
                            children: ["Get the most out of ", f.sG]
                        })
                    }), (0, l.jsx)(p.cZ, {
                        children: (0, l.jsxs)("div", {
                            className: "-mt-2 grid grid-cols-2 gap-6 text-graphite-100",
                            children: [(0, l.jsx)(r.N, { ...b.freeTrial,
                                action: (0, l.jsx)(u.k, {
                                    as: "a",
                                    href: "/premium",
                                    size: "lg",
                                    className: "w-full",
                                    children: "Learn more"
                                })
                            }), (0, l.jsxs)(r.N, { ...b["year" === i ? "yearly" : "monthly"],
                                subtitle: null,
                                action: (0, l.jsx)(d.K, {
                                    as: "a",
                                    href: "/payment?interval=".concat(i),
                                    size: "lg",
                                    className: "w-full",
                                    children: "Go Premium"
                                }),
                                children: [(0, l.jsxs)("div", {
                                    className: "flex items-center gap-4",
                                    children: [(0, l.jsx)(h.Z, {
                                        checked: "year" === i,
                                        onCheckedChange: e => s(e ? "year" : "month")
                                    }), (0, l.jsxs)("div", {
                                        className: "flex gap-2",
                                        children: [(0, l.jsx)("strong", {
                                            className: "shrink-0",
                                            children: "Pay yearly"
                                        }), (0, l.jsx)(c.v, {
                                            className: (0, n.Z)("bg-graphite-10 text-graphite-0", "year" === i && "bg-gradient-to-r from-violet-40 to-violet-20"),
                                            children: "Save $72"
                                        })]
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "pointer-events-none absolute -top-8 right-0 transition-all group-hover/pricing-card:-top-10 group-hover/pricing-card:right-1 group-hover/pricing-card:scale-105",
                                    children: (0, l.jsx)(m.N, { ...o.RD.GoldenStairsThroughTheNightSky,
                                        alt: "Golden stairs through the night sky"
                                    })
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        26163: function(e, t, i) {
            i.d(t, {
                nb: function() {
                    return s
                },
                qd: function() {
                    return d
                }
            });
            var l = i(52322),
                n = i(2784),
                a = i(2355),
                r = i(34406);
            let o = (0, n.createContext)({
                showLayoutGrid: !1,
                showContent: !1
            });

            function s(e) {
                let {
                    children: t
                } = e, [i, s] = (0, n.useState)(!1), [c, d] = (0, n.useState)(!1);
                return (0, n.useEffect)(() => {
                    if ("production" === r.env.VERCEL_ENV) return () => null;
                    let e = e => {
                        e.ctrlKey && "g" === e.key && s(e => !e), e.ctrlKey && e.shiftKey && "D" === e.key && d(e => !e)
                    };
                    return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                }, []), (0, l.jsxs)(o.Provider, {
                    value: (0, n.useMemo)(() => ({
                        showLayoutGrid: i,
                        showContent: c
                    }), [i, c]),
                    children: [i && (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsxs)(a.J, {
                            newGrid: !0,
                            className: "pointer-events-none !fixed left-1/2 z-50 h-full w-full -translate-x-1/2 opacity-40",
                            children: [(0, l.jsx)("div", {
                                className: "bg-crimson-5"
                            }), (0, l.jsx)("div", {
                                className: "bg-crimson-5"
                            }), (0, l.jsx)("div", {
                                className: "bg-crimson-5"
                            }), (0, l.jsx)("div", {
                                className: "bg-crimson-5"
                            }), (0, l.jsx)("div", {
                                className: "hidden bg-crimson-5 @tablet:block"
                            }), (0, l.jsx)("div", {
                                className: "hidden bg-crimson-5 @tablet:block"
                            }), (0, l.jsx)("div", {
                                className: "hidden bg-crimson-5 @tablet:block"
                            }), (0, l.jsx)("div", {
                                className: "hidden bg-crimson-5 @tablet:block"
                            }), (0, l.jsx)("div", {
                                className: "hidden bg-crimson-5 @laptop:block"
                            }), (0, l.jsx)("div", {
                                className: "hidden bg-crimson-5 @laptop:block"
                            }), (0, l.jsx)("div", {
                                className: "hidden bg-crimson-5 @laptop:block"
                            }), (0, l.jsx)("div", {
                                className: "hidden bg-crimson-5 @laptop:block"
                            }), (0, l.jsx)("div", {
                                className: "hidden bg-crimson-5 @laptop:block"
                            }), (0, l.jsx)("div", {
                                className: "hidden bg-crimson-5 @laptop:block"
                            })]
                        })
                    }), t]
                })
            }
            let c = () => (0, n.useContext)(o);

            function d(e) {
                let {
                    children: t
                } = e, {
                    showContent: i
                } = c();
                return i ? t : null
            }
        },
        75403: function(e, t, i) {
            i.d(t, {
                W: function() {
                    return l
                }
            });
            let l = (0, i(65058).cn)(null)
        },
        18852: function(e, t, i) {
            i.d(t, {
                v: function() {
                    return em
                }
            });
            var l, n, a, r, o, s, c, d, u, h, m, p, f, g, v, b, w, y, x, Z, E, j, P, S, _, N, M, k, D, C, O, V, T, I, F, L, A, H, G, z, B, R, U, W, K = i(2784);

            function J() {
                return (J = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var l in i)({}).hasOwnProperty.call(i, l) && (e[l] = i[l])
                    }
                    return e
                }).apply(null, arguments)
            }

            function X() {
                return (X = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var l in i)({}).hasOwnProperty.call(i, l) && (e[l] = i[l])
                    }
                    return e
                }).apply(null, arguments)
            }

            function $() {
                return ($ = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var l in i)({}).hasOwnProperty.call(i, l) && (e[l] = i[l])
                    }
                    return e
                }).apply(null, arguments)
            }

            function Y() {
                return (Y = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var l in i)({}).hasOwnProperty.call(i, l) && (e[l] = i[l])
                    }
                    return e
                }).apply(null, arguments)
            }

            function q() {
                return (q = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var l in i)({}).hasOwnProperty.call(i, l) && (e[l] = i[l])
                    }
                    return e
                }).apply(null, arguments)
            }
            var Q = function(e) {
                return K.createElement("svg", q({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 68,
                    height: 68,
                    fill: "none"
                }, e), g || (g = K.createElement("rect", {
                    width: 68,
                    height: 68,
                    fill: "#fff",
                    fillOpacity: .5,
                    rx: 16
                })), v || (v = K.createElement("rect", {
                    width: 51,
                    height: 51,
                    x: 8.5,
                    y: 8.5,
                    fill: "#403F47",
                    rx: 7.5
                })), b || (b = K.createElement("rect", {
                    width: 44,
                    height: 44,
                    x: 12,
                    y: 12,
                    fill: "#403F47",
                    rx: 4
                })), w || (w = K.createElement("g", {
                    clipPath: "url(#edit_svg__a)"
                }, K.createElement("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    d: "M37.297 24.6a6 6 0 0 0-5.755 7.704l-5.952 5.953a3 3 0 1 0 4.242 4.242l6.064-6.064a6 6 0 0 0 7.126-7.635s-.19-.816-.725-1.706l-1.025 1.4v.001l-.012.015-.057.07a4.919 4.919 0 0 1-.237.258c-.21.215-.491.466-.805.658-.32.196-.608.291-.853.291-.208 0-.477-.067-.804-.395-.328-.327-.395-.595-.395-.803 0-.245.096-.534.29-.853a4.32 4.32 0 0 1 .659-.806 4.949 4.949 0 0 1 .329-.293l.014-.012.002-.001 1.4-1.024a10.271 10.271 0 0 0-1.707-.726 5.996 5.996 0 0 0-1.8-.274Zm-.57 2.04a4 4 0 0 0-2.803 6.11l-6.92 6.92a1 1 0 0 0 1.414 1.415l6.97-6.97a4 4 0 0 0 5.869-2.945l-.053.033c-.499.305-1.153.584-1.896.584-.78 0-1.546-.308-2.218-.98-.673-.673-.98-1.438-.98-2.218 0-.744.279-1.398.584-1.897l.032-.052Z",
                    clipRule: "evenodd"
                }))), y || (y = K.createElement("rect", {
                    width: 51,
                    height: 51,
                    x: 8.5,
                    y: 8.5,
                    stroke: "#575661",
                    rx: 7.5
                })), x || (x = K.createElement("defs", null, K.createElement("clipPath", {
                    id: "edit_svg__a"
                }, K.createElement("path", {
                    fill: "#fff",
                    d: "M22 22h24v24H22z"
                })))))
            };

            function ee() {
                return (ee = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var l in i)({}).hasOwnProperty.call(i, l) && (e[l] = i[l])
                    }
                    return e
                }).apply(null, arguments)
            }

            function et() {
                return (et = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var l in i)({}).hasOwnProperty.call(i, l) && (e[l] = i[l])
                    }
                    return e
                }).apply(null, arguments)
            }

            function ei() {
                return (ei = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var l in i)({}).hasOwnProperty.call(i, l) && (e[l] = i[l])
                    }
                    return e
                }).apply(null, arguments)
            }

            function el() {
                return (el = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var l in i)({}).hasOwnProperty.call(i, l) && (e[l] = i[l])
                    }
                    return e
                }).apply(null, arguments)
            }

            function en() {
                return (en = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var l in i)({}).hasOwnProperty.call(i, l) && (e[l] = i[l])
                    }
                    return e
                }).apply(null, arguments)
            }
            var ea = function(e) {
                return K.createElement("svg", en({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 143,
                    height: 44,
                    fill: "none"
                }, e), I || (I = K.createElement("rect", {
                    width: 143,
                    height: 44,
                    fill: "#fff",
                    rx: 4
                })), F || (F = K.createElement("path", {
                    fill: "#1C1B1F",
                    d: "M17.2 27V15.672h4.416c.864 0 1.616.133 2.256.4.65.256 1.152.672 1.504 1.248.352.565.528 1.323.528 2.272 0 .885-.197 1.627-.592 2.224a3.552 3.552 0 0 1-1.584 1.344c-.672.288-1.435.432-2.288.432h-1.952V27H17.2Zm2.288-5.456h1.92c.683 0 1.221-.16 1.616-.48.405-.33.608-.827.608-1.488 0-.587-.17-1.03-.512-1.328-.33-.299-.864-.448-1.6-.448h-2.032v3.744Zm11.67 5.568c-1.238 0-2.193-.315-2.865-.944-.661-.64-.992-1.6-.992-2.88v-4.72h2.24v4.56c0 .384.053.725.16 1.024.117.288.293.517.528.688.245.17.56.256.944.256.416 0 .736-.09.96-.272a1.39 1.39 0 0 0 .464-.72c.085-.31.128-.635.128-.976v-4.56h2.224v4.72c0 1.333-.336 2.304-1.008 2.912-.661.608-1.59.912-2.784.912Zm10.334 0a5.19 5.19 0 0 1-.88-.08 3.298 3.298 0 0 1-.895-.304 3.144 3.144 0 0 1-.816-.672l-.017.944h-2.191V15.672h2.24v3.888c.32-.384.714-.667 1.184-.848.48-.192.976-.288 1.488-.288.832 0 1.514.192 2.048.576.533.373.928.885 1.184 1.536.266.65.4 1.397.4 2.24 0 .821-.134 1.563-.4 2.224a3.417 3.417 0 0 1-1.233 1.552c-.544.373-1.248.56-2.111.56Zm-.48-2c.523 0 .928-.117 1.216-.352.288-.235.491-.533.608-.896.118-.363.177-.741.177-1.136 0-.395-.064-.763-.192-1.104a1.665 1.665 0 0 0-.64-.832c-.288-.213-.678-.32-1.168-.32-.448 0-.832.112-1.152.336-.31.213-.544.496-.704.848-.16.352-.24.73-.24 1.136 0 .405.069.79.207 1.152.15.352.38.635.688.848.31.213.71.32 1.2.32ZM46.678 27V15.672h2.24V27h-2.24Zm4.016 0v-8.432h2.24V27h-2.24Zm1.12-9.28c-.416 0-.753-.123-1.009-.368-.256-.256-.384-.581-.384-.976 0-.416.134-.752.4-1.008.267-.256.603-.384 1.008-.384.374 0 .694.128.96.384.278.245.417.576.417.992 0 .405-.134.736-.4.992-.257.245-.587.368-.992.368Zm6.191 9.392c-.395 0-.8-.043-1.216-.128-.416-.085-.8-.23-1.152-.432a2.948 2.948 0 0 1-.896-.848c-.245-.363-.405-.81-.48-1.344h2.272c.064.192.176.357.336.496.17.139.363.24.576.304.224.064.448.096.672.096.15 0 .299-.01.448-.032a1.35 1.35 0 0 0 .416-.128.869.869 0 0 0 .304-.24.68.68 0 0 0 .112-.4.51.51 0 0 0-.16-.4 1.101 1.101 0 0 0-.448-.224 6.348 6.348 0 0 0-.656-.176 105.74 105.74 0 0 1-1.408-.32 4.329 4.329 0 0 1-1.296-.512 2.56 2.56 0 0 1-.4-.352 1.7 1.7 0 0 1-.288-.432 2.75 2.75 0 0 1-.176-.496 2.512 2.512 0 0 1-.064-.576c0-.459.096-.848.288-1.168.203-.33.47-.597.8-.8.33-.203.699-.347 1.104-.432a5.397 5.397 0 0 1 1.248-.144c.576 0 1.11.096 1.6.288.49.181.896.47 1.216.864.32.384.517.885.592 1.504h-2.144c-.043-.235-.187-.421-.432-.56-.245-.15-.55-.224-.912-.224-.128 0-.267.01-.416.032a1.461 1.461 0 0 0-.384.112.752.752 0 0 0-.288.224.517.517 0 0 0-.112.352c0 .117.032.224.096.32a.87.87 0 0 0 .304.24c.139.064.304.123.496.176.363.085.726.165 1.088.24.373.064.704.133.992.208.352.075.672.197.96.368.299.17.539.405.72.704.192.288.288.667.288 1.136 0 .533-.106.976-.32 1.328a2.353 2.353 0 0 1-.864.816 3.825 3.825 0 0 1-1.168.432 6.198 6.198 0 0 1-1.248.128ZM62.911 27V15.672h2.24v3.872c.246-.288.518-.512.816-.672.31-.16.619-.272.928-.336.32-.075.614-.112.88-.112.79 0 1.408.176 1.856.528.448.352.768.827.96 1.424.192.597.288 1.253.288 1.968V27h-2.24v-4.336c0-.256-.026-.512-.08-.768a2.2 2.2 0 0 0-.24-.704 1.315 1.315 0 0 0-.496-.528c-.213-.139-.496-.208-.848-.208-.33 0-.613.07-.848.208a1.7 1.7 0 0 0-.576.56c-.138.224-.24.475-.304.752a3.69 3.69 0 0 0-.096.832V27h-2.24Zm17.5.112c-.395 0-.8-.043-1.217-.128-.416-.085-.8-.23-1.152-.432a2.947 2.947 0 0 1-.896-.848c-.245-.363-.405-.81-.48-1.344h2.272c.064.192.176.357.336.496.171.139.363.24.576.304.224.064.448.096.672.096.15 0 .299-.01.448-.032a1.35 1.35 0 0 0 .416-.128.87.87 0 0 0 .304-.24.681.681 0 0 0 .112-.4.51.51 0 0 0-.16-.4 1.102 1.102 0 0 0-.448-.224 6.354 6.354 0 0 0-.656-.176 105.03 105.03 0 0 1-1.408-.32 4.326 4.326 0 0 1-1.296-.512 2.55 2.55 0 0 1-.4-.352 1.694 1.694 0 0 1-.288-.432 2.736 2.736 0 0 1-.176-.496 2.506 2.506 0 0 1-.064-.576c0-.459.096-.848.288-1.168.203-.33.47-.597.8-.8.331-.203.699-.347 1.104-.432a5.396 5.396 0 0 1 1.248-.144c.576 0 1.11.096 1.6.288.491.181.896.47 1.216.864.32.384.518.885.592 1.504H81.61c-.042-.235-.186-.421-.432-.56-.245-.15-.549-.224-.912-.224-.128 0-.266.01-.416.032a1.459 1.459 0 0 0-.384.112.75.75 0 0 0-.288.224.516.516 0 0 0-.112.352c0 .117.032.224.096.32a.869.869 0 0 0 .304.24c.139.064.304.123.496.176.363.085.726.165 1.088.24.374.064.704.133.992.208.352.075.672.197.96.368.299.17.539.405.72.704.192.288.288.667.288 1.136 0 .533-.106.976-.32 1.328a2.355 2.355 0 0 1-.864.816 3.826 3.826 0 0 1-1.168.432 6.198 6.198 0 0 1-1.248.128ZM85.316 27v-8.432h2.24V27h-2.24Zm1.12-9.28c-.415 0-.751-.123-1.007-.368-.257-.256-.385-.581-.385-.976 0-.416.134-.752.4-1.008.267-.256.603-.384 1.009-.384.373 0 .693.128.96.384.277.245.415.576.415.992 0 .405-.133.736-.4.992-.255.245-.586.368-.992.368Zm6.336 9.392c-.95 0-1.653-.267-2.112-.8-.448-.533-.672-1.264-.672-2.192v-3.552h-1.264v-2h1.264v-2.272h2.24v2.272h2.56v2h-2.56v3.088c0 .277.032.517.096.72.075.203.192.363.352.48.17.107.4.16.688.16a1.6 1.6 0 0 0 .64-.112c.181-.085.33-.176.448-.272l.704 1.728c-.224.181-.474.33-.752.448a3.708 3.708 0 0 1-.816.224c-.277.053-.55.08-.816.08Zm7.166 0c-.885 0-1.637-.176-2.256-.528a3.55 3.55 0 0 1-1.424-1.488c-.33-.65-.496-1.408-.496-2.272 0-.875.17-1.637.512-2.288a3.818 3.818 0 0 1 1.44-1.552c.63-.373 1.37-.56 2.224-.56.64 0 1.2.107 1.68.32.491.213.901.512 1.232.896.341.384.592.832.752 1.344.171.501.251 1.045.24 1.632 0 .15-.005.293-.016.432a2.849 2.849 0 0 1-.064.416h-5.776c.032.32.123.613.272.88.15.267.358.48.624.64.278.15.619.224 1.024.224.267 0 .512-.027.736-.08.224-.064.416-.16.576-.288.16-.128.272-.277.336-.448h2.208c-.139.63-.4 1.147-.784 1.552a3.372 3.372 0 0 1-1.36.896 5.18 5.18 0 0 1-1.68.272Zm-1.904-5.216h3.664a1.732 1.732 0 0 0-.224-.8 1.412 1.412 0 0 0-.592-.608c-.256-.16-.587-.24-.992-.24s-.747.08-1.024.24c-.267.16-.47.368-.608.624a2.012 2.012 0 0 0-.224.784Z"
                })), L || (L = K.createElement("g", {
                    clipPath: "url(#publish_svg__a)"
                }, K.createElement("path", {
                    fill: "#1C1B1F",
                    d: "M125.59 18.59 121 23.17l-4.59-4.58L115 20l6 6 6-6-1.41-1.41Z"
                }))), A || (A = K.createElement("defs", null, K.createElement("clipPath", {
                    id: "publish_svg__a"
                }, K.createElement("path", {
                    fill: "#fff",
                    d: "M109 10h24v24h-24z"
                })))))
            };

            function er() {
                return (er = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var l in i)({}).hasOwnProperty.call(i, l) && (e[l] = i[l])
                    }
                    return e
                }).apply(null, arguments)
            }

            function eo() {
                return (eo = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var l in i)({}).hasOwnProperty.call(i, l) && (e[l] = i[l])
                    }
                    return e
                }).apply(null, arguments)
            }
            var es = i(60185);
            let ec = {
                    buttonText: "continue",
                    position: {
                        laptop: {
                            top: 72,
                            left: 78
                        },
                        tablet: {
                            top: 72,
                            left: 84
                        }
                    },
                    sticker: {
                        laptop: {
                            position: {
                                top: 10,
                                left: 78
                            },
                            Image: function(e) {
                                return K.createElement("svg", $({
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: 109,
                                    height: 44,
                                    fill: "none"
                                }, e), c || (c = K.createElement("rect", {
                                    width: 109,
                                    height: 44,
                                    fill: "#2D2C31",
                                    rx: 8
                                })), d || (d = K.createElement("g", {
                                    fill: "#fff",
                                    clipPath: "url(#design_svg__a)"
                                }, K.createElement("path", {
                                    d: "M25 17a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM28 20.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM21 20a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM20 26.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                                }), K.createElement("path", {
                                    fillRule: "evenodd",
                                    d: "M14 22c0-5.523 4.477-10 10-10s10 4.477 10 10c0 .504-.148.977-.476 1.361-.311.367-.717.572-1.09.694-.712.232-1.602.247-2.356.244-.169 0-.334-.001-.496-.003-.63-.005-1.208-.01-1.733.044-.686.07-1.001.22-1.127.352-.164.17-.31.528-.37 1.21-.046.522-.033 1.084-.02 1.695.005.172.009.348.012.529.011.743.007 1.632-.238 2.345-.13.38-.35.781-.735 1.084-.395.311-.87.445-1.371.445-5.523 0-10-4.477-10-10Zm10-8a8 8 0 1 0 0 16c.081 0 .12-.011.134-.017a.453.453 0 0 0 .08-.16c.114-.332.143-.873.13-1.666a60.146 60.146 0 0 0-.01-.45c-.014-.626-.031-1.336.026-1.98.069-.79.262-1.735.918-2.419.649-.677 1.596-.879 2.367-.958.648-.066 1.37-.06 2.009-.053h.002c.147 0 .29.002.427.003.803.002 1.372-.03 1.731-.147a.609.609 0 0 0 .18-.083A.348.348 0 0 0 32 22a8 8 0 0 0-8-8Zm7.99 8.083.003-.006a.024.024 0 0 1-.002.006Zm-7.85 7.897-.006.003.006-.003Z",
                                    clipRule: "evenodd"
                                }))), u || (u = K.createElement("path", {
                                    fill: "#fff",
                                    d: "M49.456 16.44c1.653 0 2.933.459 3.84 1.376.907.907 1.36 2.208 1.36 3.904 0 1.685-.453 2.987-1.36 3.904-.907.917-2.187 1.376-3.84 1.376h-4.08V16.44h4.08Zm-.112 8.8c1.003 0 1.755-.299 2.256-.896.512-.608.768-1.483.768-2.624s-.256-2.01-.768-2.608c-.501-.608-1.253-.912-2.256-.912h-1.76v7.04h1.76Zm11.02 1.92c-.843 0-1.579-.165-2.208-.496a3.494 3.494 0 0 1-1.44-1.424c-.341-.619-.512-1.365-.512-2.24 0-.875.17-1.621.512-2.24a3.52 3.52 0 0 1 1.424-1.424c.619-.33 1.323-.496 2.112-.496.81 0 1.499.165 2.064.496.565.32.997.763 1.296 1.328.299.555.448 1.19.448 1.904 0 .213-.005.416-.016.608-.01.192-.027.363-.048.512h-6.384v-1.52h5.424l-1.056.384c0-.672-.155-1.19-.464-1.552-.299-.363-.725-.544-1.28-.544a1.91 1.91 0 0 0-1.056.288c-.288.192-.507.48-.656.864-.15.373-.224.848-.224 1.424 0 .565.08 1.035.24 1.408.17.363.405.635.704.816.31.181.677.272 1.104.272.47 0 .848-.09 1.136-.272a1.84 1.84 0 0 0 .672-.752l1.744.672c-.17.416-.432.773-.784 1.072a3.55 3.55 0 0 1-1.232.688c-.47.15-.976.224-1.52.224Zm8.754 0c-.811 0-1.552-.144-2.224-.432a4.13 4.13 0 0 1-1.616-1.216l1.264-1.28c.256.384.597.699 1.024.944.426.245.933.368 1.52.368.416 0 .746-.059.992-.176.256-.128.384-.325.384-.592a.587.587 0 0 0-.176-.432c-.118-.128-.352-.23-.704-.304l-1.408-.288c-.928-.192-1.59-.48-1.984-.864-.384-.395-.576-.901-.576-1.52 0-.437.128-.848.384-1.232.266-.384.661-.693 1.184-.928.522-.245 1.173-.368 1.952-.368.8 0 1.493.128 2.08.384.597.245 1.066.613 1.408 1.104l-1.312 1.28a2.29 2.29 0 0 0-.928-.848 2.446 2.446 0 0 0-1.184-.304c-.299 0-.555.032-.768.096-.214.064-.374.155-.48.272a.563.563 0 0 0-.16.416c0 .17.074.32.224.448.149.117.421.219.816.304l1.632.336c.789.16 1.354.432 1.696.816.341.373.512.827.512 1.36 0 .512-.139.97-.416 1.376-.267.395-.667.71-1.2.944-.523.224-1.168.336-1.936.336Zm6.404-9.312c-.459 0-.8-.096-1.024-.288-.224-.203-.336-.496-.336-.88 0-.395.112-.688.336-.88.224-.203.565-.304 1.024-.304.458 0 .8.101 1.024.304.224.192.336.485.336.88 0 .384-.112.677-.336.88-.224.192-.566.288-1.024.288ZM76.61 19v8h-2.192v-8h2.192Zm9.7-1.904.255 1.568h-.144a.594.594 0 0 0-.144-.016c-.49 0-.858.112-1.104.336-.245.213-.368.512-.368.896l-.896-.368c0-.427.086-.821.256-1.184.17-.373.422-.672.752-.896.342-.224.747-.336 1.216-.336h.176Zm-2.625 8.4c.864 0 1.53.187 2 .56.47.373.704.896.704 1.568 0 .608-.176 1.12-.528 1.536-.352.427-.848.747-1.488.96-.63.213-1.36.32-2.192.32-1.376 0-2.384-.192-3.024-.576-.63-.384-.944-.885-.944-1.504 0-.437.166-.805.496-1.104.342-.299.902-.464 1.68-.496l-.08.256c-.554-.096-.981-.277-1.28-.544-.288-.277-.432-.656-.432-1.136 0-.49.187-.89.56-1.2.384-.32.902-.507 1.552-.56l.96.448h-.224c-.458.032-.784.128-.976.288-.181.15-.272.32-.272.512 0 .224.086.395.256.512.182.107.438.16.768.16h2.464Zm-1.488 3.44c.555 0 1.008-.048 1.36-.144.363-.096.63-.219.8-.368.182-.15.272-.315.272-.496a.606.606 0 0 0-.24-.496c-.16-.117-.448-.176-.864-.176h-2.704c-.256 0-.47.064-.64.192a.64.64 0 0 0-.24.528c0 .299.198.533.592.704.406.17.96.256 1.664.256Zm.016-10.096c.747 0 1.392.112 1.936.336.555.213.976.523 1.264.928.299.405.448.89.448 1.456 0 .555-.15 1.035-.448 1.44-.288.405-.71.72-1.264.944-.544.213-1.19.32-1.936.32-1.184 0-2.09-.24-2.72-.72-.618-.49-.928-1.152-.928-1.984 0-.565.144-1.05.432-1.456.299-.405.72-.715 1.264-.928.544-.224 1.195-.336 1.952-.336Zm0 1.376c-.426 0-.778.117-1.056.352-.277.235-.416.56-.416.976 0 .416.139.747.416.992.278.235.63.352 1.056.352.427 0 .774-.117 1.04-.352.278-.245.416-.576.416-.992 0-.416-.138-.741-.416-.976-.266-.235-.613-.352-1.04-.352ZM87.715 27v-8h1.968l.127 2.4-.272-.256c.129-.523.331-.955.609-1.296a2.486 2.486 0 0 1 1.007-.752c.406-.17.849-.256 1.329-.256.554 0 1.045.107 1.471.32a2.32 2.32 0 0 1 1.025.976c.255.427.383.965.383 1.616V27h-2.191v-4.624c0-.683-.134-1.152-.4-1.408-.267-.267-.614-.4-1.04-.4-.3 0-.593.075-.88.224-.278.139-.507.368-.689.688-.17.32-.256.747-.256 1.28V27h-2.192Z"
                                })), h || (h = K.createElement("defs", null, K.createElement("clipPath", {
                                    id: "design_svg__a"
                                }, K.createElement("path", {
                                    fill: "#fff",
                                    d: "M12 10h24v24H12z"
                                })))))
                            }
                        },
                        tablet: {
                            position: {
                                top: 10,
                                left: 84
                            },
                            Image: function(e) {
                                return K.createElement("svg", Y({
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: 48,
                                    height: 44,
                                    fill: "none"
                                }, e), m || (m = K.createElement("rect", {
                                    width: 48,
                                    height: 44,
                                    fill: "#2D2C31",
                                    rx: 8
                                })), p || (p = K.createElement("g", {
                                    fill: "#fff",
                                    clipPath: "url(#design-tablet_svg__a)"
                                }, K.createElement("path", {
                                    d: "M25 17a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM28 20.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM21 20a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM20 26.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                                }), K.createElement("path", {
                                    fillRule: "evenodd",
                                    d: "M14 22c0-5.523 4.477-10 10-10s10 4.477 10 10c0 .504-.148.977-.476 1.361-.311.367-.717.572-1.09.694-.712.232-1.602.247-2.356.244-.169 0-.334-.001-.496-.003-.63-.005-1.208-.01-1.733.044-.686.07-1.001.22-1.127.352-.164.17-.31.528-.37 1.21-.046.522-.033 1.084-.02 1.695.005.172.009.348.012.529.011.743.007 1.632-.238 2.345-.13.38-.35.781-.735 1.084-.395.311-.87.445-1.371.445-5.523 0-10-4.477-10-10Zm10-8a8 8 0 1 0 0 16c.081 0 .12-.011.134-.017a.453.453 0 0 0 .08-.16c.114-.332.143-.873.13-1.666a60.146 60.146 0 0 0-.01-.45c-.014-.626-.031-1.336.026-1.98.069-.79.262-1.735.918-2.419.649-.677 1.596-.879 2.367-.958.648-.066 1.37-.06 2.009-.053h.002c.147 0 .29.002.427.003.803.002 1.372-.03 1.731-.147a.609.609 0 0 0 .18-.083A.348.348 0 0 0 32 22a8 8 0 0 0-8-8Zm7.99 8.083.003-.006a.024.024 0 0 1-.002.006Zm-7.85 7.897-.006.003.006-.003Z",
                                    clipRule: "evenodd"
                                }))), f || (f = K.createElement("defs", null, K.createElement("clipPath", {
                                    id: "design-tablet_svg__a"
                                }, K.createElement("path", {
                                    fill: "#fff",
                                    d: "M12 10h24v24H12z"
                                })))))
                            }
                        }
                    }
                },
                ed = {
                    buttonText: "continue",
                    position: {
                        laptop: {
                            top: 212,
                            right: 92
                        },
                        tablet: {
                            top: 212,
                            right: 92
                        }
                    },
                    sticker: {
                        laptop: {
                            position: {
                                top: 212,
                                right: 8
                            },
                            Image: Q
                        },
                        tablet: {
                            position: {
                                top: 212,
                                right: 8
                            },
                            Image: Q
                        }
                    }
                },
                eu = [{
                    id: "welcome",
                    videoSrc: "/assets/videos/welcome/copyfolio/Welcome.webm",
                    title: "Welcome to your 7-day Free trial!",
                    subtitle: "Build your brand and website—then upgrade and publish when you’re ready.",
                    buttonText: "Let's see"
                }, { ...ec,
                    id: "design-panel",
                    videoSrc: "/assets/videos/welcome/copyfolio/Design.webm",
                    title: "Customize your look",
                    subtitle: "Change your fonts and colors, or choose a different template."
                }, {
                    buttonText: "continue",
                    position: {
                        laptop: {
                            top: 72,
                            left: 312
                        },
                        tablet: {
                            top: 72,
                            left: 196
                        }
                    },
                    sticker: {
                        laptop: {
                            position: {
                                top: 10,
                                left: 312
                            },
                            Image: function(e) {
                                return K.createElement("svg", J({
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: 179,
                                    height: 44,
                                    fill: "none"
                                }, e), l || (l = K.createElement("rect", {
                                    width: 179,
                                    height: 44,
                                    fill: "#2D2C31",
                                    rx: 8
                                })), n || (n = K.createElement("path", {
                                    fill: "#fff",
                                    d: "m20.8 20.95 2.15-2.175-1.4-1.425-1.1 1.1-1.4-1.4 1.075-1.1L19 14.825 16.825 17l3.975 3.95Zm8.2 8.225L31.175 27l-1.125-1.125-1.1 1.075-1.4-1.4 1.075-1.1-1.425-1.4-2.15 2.15L29 29.175ZM19.25 31H15v-4.25l4.375-4.375L14 17l5-5 5.4 5.4 3.775-3.8c.2-.2.425-.35.675-.45a2.068 2.068 0 0 1 1.55 0c.25.1.475.25.675.45l1.325 1.35c.2.2.35.425.45.675.1.25.15.508.15.775a1.975 1.975 0 0 1-.6 1.425l-3.775 3.8L34 27l-5 5-5.375-5.375L19.25 31ZM17 29h1.4l9.8-9.775-1.425-1.425L17 27.6V29ZM45.376 27V16.44H50c1.28 0 2.224.25 2.832.752.608.501.912 1.21.912 2.128 0 .565-.17 1.067-.512 1.504-.341.437-.843.715-1.504.832v.016c.736.107 1.301.384 1.696.832.395.448.592.981.592 1.6 0 .907-.33 1.616-.992 2.128-.65.512-1.605.768-2.864.768h-4.784Zm2.144-1.664h2.448c.597 0 1.04-.123 1.328-.368.288-.245.432-.587.432-1.024 0-.448-.144-.79-.432-1.024-.288-.235-.73-.352-1.328-.352H47.52v2.768Zm0-4.464h2.192c1.163 0 1.744-.453 1.744-1.36s-.581-1.36-1.744-1.36H47.52v2.72ZM55.902 27v-8h1.904l.144 1.568c.213-.555.523-.981.928-1.28.416-.299.933-.448 1.552-.448.181 0 .347.016.496.048.15.032.272.075.368.128l-.256 1.84a1.69 1.69 0 0 0-.4-.096 4.371 4.371 0 0 0-.592-.032c-.32 0-.63.08-.928.24a1.79 1.79 0 0 0-.736.704c-.192.31-.288.704-.288 1.184V27h-2.192Zm11.17-5.104c0-.459-.134-.816-.4-1.072-.257-.256-.598-.384-1.025-.384-.394 0-.741.101-1.04.304-.298.203-.517.539-.656 1.008l-1.872-.576a2.9 2.9 0 0 1 1.184-1.696c.619-.427 1.446-.64 2.48-.64.704 0 1.318.112 1.84.336a2.58 2.58 0 0 1 1.216.976c.299.437.448.987.448 1.648v3.248c0 .405.192.608.576.608.182 0 .352-.027.512-.08l-.128 1.36c-.277.139-.624.208-1.04.208-.373 0-.709-.064-1.008-.192a1.564 1.564 0 0 1-.704-.576c-.17-.267-.256-.597-.256-.992v-.064l.384-.064a1.84 1.84 0 0 1-.528 1.04c-.288.277-.64.49-1.056.64-.405.15-.826.224-1.264.224-.544 0-1.013-.08-1.408-.24a2.031 2.031 0 0 1-.912-.736c-.213-.32-.32-.715-.32-1.184 0-.597.192-1.083.576-1.456.384-.384.934-.645 1.648-.784l3.008-.608-.016 1.36-1.92.384c-.362.075-.64.176-.832.304-.181.117-.272.315-.272.592 0 .267.096.47.288.608.203.139.443.208.72.208.224 0 .443-.027.656-.08.214-.053.406-.139.576-.256.171-.117.304-.277.4-.48.096-.203.144-.448.144-.736v-2.16ZM71.698 27v-8h1.968l.128 2.4-.272-.256c.128-.523.33-.955.608-1.296a2.486 2.486 0 0 1 1.008-.752c.405-.17.848-.256 1.328-.256.555 0 1.045.107 1.472.32a2.32 2.32 0 0 1 1.024.976c.256.427.384.965.384 1.616V27h-2.192v-4.624c0-.683-.133-1.152-.4-1.408-.267-.267-.614-.4-1.04-.4-.299 0-.592.075-.88.224-.277.139-.507.368-.688.688-.17.32-.256.747-.256 1.28V27h-2.192Zm12.93.16a3.251 3.251 0 0 1-1.776-.496c-.512-.33-.917-.805-1.216-1.424-.288-.619-.432-1.36-.432-2.224 0-.885.155-1.637.464-2.256.31-.63.725-1.104 1.248-1.424a3.332 3.332 0 0 1 1.792-.496c.704 0 1.285.203 1.744.608.459.405.757.928.896 1.568l-.208.256v-5.776h2.192V27h-1.968l-.144-2.432.272.128a2.972 2.972 0 0 1-.512 1.312 2.77 2.77 0 0 1-1.008.848 2.962 2.962 0 0 1-1.344.304Zm.64-1.68a1.7 1.7 0 0 0 .992-.288c.278-.203.49-.496.64-.88.16-.384.24-.843.24-1.376 0-.512-.075-.944-.224-1.296-.15-.363-.362-.64-.64-.832a1.672 1.672 0 0 0-.976-.288c-.597 0-1.067.213-1.408.64-.33.416-.496 1.03-.496 1.84s.165 1.43.496 1.856c.33.416.79.624 1.376.624Zm7.471-7.632c-.458 0-.8-.096-1.024-.288-.224-.203-.336-.496-.336-.88 0-.395.112-.688.336-.88.224-.203.566-.304 1.024-.304.459 0 .8.101 1.024.304.224.192.336.485.336.88 0 .384-.112.677-.336.88-.224.192-.565.288-1.024.288ZM93.828 19v8h-2.192v-8h2.192Zm2.324 8v-8h1.968l.128 2.4-.272-.256c.128-.523.33-.955.608-1.296a2.486 2.486 0 0 1 1.008-.752c.405-.17.848-.256 1.328-.256.555 0 1.045.107 1.472.32a2.32 2.32 0 0 1 1.024.976c.256.427.384.965.384 1.616V27h-2.192v-4.624c0-.683-.133-1.152-.4-1.408-.267-.267-.613-.4-1.04-.4-.299 0-.592.075-.88.224-.277.139-.507.368-.688.688-.17.32-.256.747-.256 1.28V27h-2.192Zm17.282-9.904.256 1.568h-.144a.586.586 0 0 0-.144-.016c-.49 0-.858.112-1.104.336-.245.213-.368.512-.368.896l-.896-.368c0-.427.086-.821.256-1.184.171-.373.422-.672.752-.896.342-.224.747-.336 1.216-.336h.176Zm-2.624 8.4c.864 0 1.531.187 2 .56.47.373.704.896.704 1.568 0 .608-.176 1.12-.528 1.536-.352.427-.848.747-1.488.96-.629.213-1.36.32-2.192.32-1.376 0-2.384-.192-3.024-.576-.629-.384-.944-.885-.944-1.504 0-.437.166-.805.496-1.104.342-.299.902-.464 1.68-.496l-.08.256c-.554-.096-.981-.277-1.28-.544-.288-.277-.432-.656-.432-1.136 0-.49.187-.89.56-1.2.384-.32.902-.507 1.552-.56l.96.448h-.224c-.458.032-.784.128-.976.288-.181.15-.272.32-.272.512 0 .224.086.395.256.512.182.107.438.16.768.16h2.464Zm-1.488 3.44c.555 0 1.008-.048 1.36-.144.363-.096.63-.219.8-.368.182-.15.272-.315.272-.496a.606.606 0 0 0-.24-.496c-.16-.117-.448-.176-.864-.176h-2.704c-.256 0-.469.064-.64.192a.64.64 0 0 0-.24.528c0 .299.198.533.592.704.406.17.96.256 1.664.256Zm.016-10.096c.747 0 1.392.112 1.936.336.555.213.976.523 1.264.928.299.405.448.89.448 1.456 0 .555-.149 1.035-.448 1.44-.288.405-.709.72-1.264.944-.544.213-1.189.32-1.936.32-1.184 0-2.09-.24-2.72-.72-.618-.49-.928-1.152-.928-1.984 0-.565.144-1.05.432-1.456.299-.405.72-.715 1.264-.928.544-.224 1.195-.336 1.952-.336Zm0 1.376c-.426 0-.778.117-1.056.352-.277.235-.416.56-.416.976 0 .416.139.747.416.992.278.235.63.352 1.056.352.427 0 .774-.117 1.04-.352.278-.245.416-.576.416-.992 0-.416-.138-.741-.416-.976-.266-.235-.613-.352-1.04-.352Z"
                                })), a || (a = K.createElement("rect", {
                                    width: 45,
                                    height: 24,
                                    x: 122,
                                    y: 10,
                                    fill: "#F1F1F1",
                                    rx: 4
                                })), r || (r = K.createElement("path", {
                                    fill: "#1C1B1F",
                                    d: "M138.016 18.58v7.92h-2.292l-2.46-4.284-.6-1.176h-.012l.048 1.464V26.5h-1.824v-7.92h2.292l2.46 4.284.6 1.176h.012l-.048-1.464V18.58h1.824Zm1.755 7.92v-7.92h6.168v1.596h-4.104v1.608h3.264v1.5h-3.264v1.62h4.26V26.5h-6.324Zm9.094 0-2.28-7.92h2.196l1.344 6.252 1.416-6.252h1.872l1.452 6.24 1.32-6.24h2.124l-2.292 7.92h-2.244l-.936-3.84-.36-1.932h-.024l-.348 1.932-.924 3.84h-2.316Z"
                                })))
                            }
                        },
                        tablet: {
                            position: {
                                top: 10,
                                left: 196
                            },
                            Image: function(e) {
                                return K.createElement("svg", X({
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: 48,
                                    height: 44,
                                    fill: "none"
                                }, e), o || (o = K.createElement("rect", {
                                    width: 48,
                                    height: 44,
                                    fill: "#2D2C31",
                                    rx: 8
                                })), s || (s = K.createElement("path", {
                                    fill: "#fff",
                                    d: "m20.8 20.95 2.15-2.175-1.4-1.425-1.1 1.1-1.4-1.4 1.075-1.1L19 14.825 16.825 17l3.975 3.95Zm8.2 8.225L31.175 27l-1.125-1.125-1.1 1.075-1.4-1.4 1.075-1.1-1.425-1.4-2.15 2.15L29 29.175ZM19.25 31H15v-4.25l4.375-4.375L14 17l5-5 5.4 5.4 3.775-3.8c.2-.2.425-.35.675-.45a2.068 2.068 0 0 1 1.55 0c.25.1.475.25.675.45l1.325 1.35c.2.2.35.425.45.675.1.25.15.508.15.775a1.975 1.975 0 0 1-.6 1.425l-3.775 3.8L34 27l-5 5-5.375-5.375L19.25 31ZM17 29h1.4l9.8-9.775-1.425-1.425L17 27.6V29Z"
                                })))
                            }
                        }
                    },
                    id: "branding-panel",
                    videoSrc: "/assets/videos/welcome/copyfolio/Branding.webm",
                    title: "Manage your brand",
                    subtitle: "Overview and manage your brand assets in one place."
                }, { ...ed,
                    id: "section-settings",
                    videoSrc: "/assets/videos/welcome/copyfolio/Edit.webm",
                    title: "Section settings",
                    subtitle: "Customize the section’s layout and pick what you want to display."
                }, {
                    buttonText: "continue",
                    position: {
                        laptop: {
                            top: 72,
                            right: 263
                        },
                        tablet: {
                            top: 72,
                            right: 263
                        }
                    },
                    sticker: {
                        laptop: {
                            position: {
                                top: 10,
                                right: 263
                            },
                            Image: function(e) {
                                return K.createElement("svg", ei({
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: 119,
                                    height: 44,
                                    fill: "none"
                                }, e), M || (M = K.createElement("rect", {
                                    width: 119,
                                    height: 44,
                                    fill: "#2D2C31",
                                    rx: 8
                                })), k || (k = K.createElement("g", {
                                    clipPath: "url(#preview_svg__a)"
                                }, K.createElement("path", {
                                    fill: "#fff",
                                    d: "M24 14.5c-5 0-9.27 3.11-11 7.5 1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5ZM24 27c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3Z"
                                }))), D || (D = K.createElement("path", {
                                    fill: "#fff",
                                    d: "M49.808 16.44c.81 0 1.504.139 2.08.416a2.96 2.96 0 0 1 1.328 1.168c.32.501.48 1.11.48 1.824 0 .715-.16 1.328-.48 1.84-.31.501-.752.89-1.328 1.168-.576.267-1.27.4-2.08.4h-2.224V27h-2.208V16.44h4.432Zm-.336 5.072c.661 0 1.157-.139 1.488-.416.33-.288.496-.704.496-1.248 0-.555-.165-.97-.496-1.248-.33-.277-.827-.416-1.488-.416h-1.888v3.328h1.888ZM55.496 27v-8H57.4l.144 1.568c.213-.555.522-.981.928-1.28.416-.299.933-.448 1.552-.448.181 0 .346.016.496.048.15.032.272.075.368.128l-.256 1.84a1.69 1.69 0 0 0-.4-.096 4.372 4.372 0 0 0-.592-.032c-.32 0-.63.08-.928.24a1.79 1.79 0 0 0-.736.704c-.192.31-.288.704-.288 1.184V27h-2.192Zm10.306.16c-.843 0-1.58-.165-2.209-.496a3.494 3.494 0 0 1-1.44-1.424c-.34-.619-.511-1.365-.511-2.24 0-.875.17-1.621.511-2.24a3.52 3.52 0 0 1 1.425-1.424c.618-.33 1.322-.496 2.111-.496.811 0 1.5.165 2.065.496.565.32.997.763 1.295 1.328.3.555.448 1.19.448 1.904 0 .213-.005.416-.016.608-.01.192-.026.363-.047.512H63.05v-1.52h5.424l-1.056.384c0-.672-.155-1.19-.465-1.552-.298-.363-.725-.544-1.28-.544a1.91 1.91 0 0 0-1.055.288c-.288.192-.507.48-.656.864-.15.373-.225.848-.225 1.424 0 .565.08 1.035.24 1.408.171.363.406.635.705.816.309.181.677.272 1.103.272.47 0 .849-.09 1.136-.272a1.84 1.84 0 0 0 .672-.752l1.745.672c-.171.416-.432.773-.784 1.072a3.55 3.55 0 0 1-1.233.688c-.469.15-.975.224-1.52.224ZM76.353 19h2.272l-3.04 8h-2.528l-3.04-8h2.336l1.984 6.32L76.353 19Zm4.59-1.152c-.458 0-.8-.096-1.023-.288-.225-.203-.337-.496-.337-.88 0-.395.112-.688.337-.88.224-.203.565-.304 1.023-.304.46 0 .8.101 1.025.304.224.192.335.485.335.88 0 .384-.111.677-.335.88-.225.192-.566.288-1.025.288ZM82.032 19v8H79.84v-8h2.192Zm6.036 8.16c-.842 0-1.578-.165-2.208-.496a3.495 3.495 0 0 1-1.44-1.424c-.341-.619-.512-1.365-.512-2.24 0-.875.17-1.621.512-2.24a3.52 3.52 0 0 1 1.424-1.424c.619-.33 1.323-.496 2.112-.496.81 0 1.499.165 2.064.496.566.32.997.763 1.296 1.328.299.555.448 1.19.448 1.904 0 .213-.005.416-.016.608-.01.192-.026.363-.048.512h-6.384v-1.52h5.424l-1.056.384c0-.672-.155-1.19-.464-1.552-.298-.363-.725-.544-1.28-.544a1.91 1.91 0 0 0-1.056.288c-.288.192-.507.48-.656.864-.15.373-.224.848-.224 1.424 0 .565.08 1.035.24 1.408.17.363.406.635.704.816.31.181.677.272 1.104.272.47 0 .848-.09 1.136-.272a1.84 1.84 0 0 0 .672-.752l1.744.672c-.17.416-.432.773-.784 1.072a3.55 3.55 0 0 1-1.232.688c-.47.15-.976.224-1.52.224ZM103.722 19h2.336l-2.56 8h-2.528l-1.744-5.44-1.68 5.44h-2.528l-2.56-8h2.336l1.6 6.128L98.17 19h2.176l1.792 6.128L103.722 19Z"
                                })), C || (C = K.createElement("defs", null, K.createElement("clipPath", {
                                    id: "preview_svg__a"
                                }, K.createElement("path", {
                                    fill: "#fff",
                                    d: "M12 10h24v24H12z"
                                })))))
                            }
                        },
                        tablet: {
                            position: {
                                top: 10,
                                right: 263
                            },
                            Image: function(e) {
                                return K.createElement("svg", el({
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: 48,
                                    height: 44,
                                    fill: "none"
                                }, e), O || (O = K.createElement("rect", {
                                    width: 48,
                                    height: 44,
                                    fill: "#2D2C31",
                                    rx: 8
                                })), V || (V = K.createElement("g", {
                                    clipPath: "url(#preview-tablet_svg__a)"
                                }, K.createElement("path", {
                                    fill: "#fff",
                                    d: "M24 14.5c-5 0-9.27 3.11-11 7.5 1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5ZM24 27c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3Z"
                                }))), T || (T = K.createElement("defs", null, K.createElement("clipPath", {
                                    id: "preview-tablet_svg__a"
                                }, K.createElement("path", {
                                    fill: "#fff",
                                    d: "M12 10h24v24H12z"
                                })))))
                            }
                        }
                    },
                    id: "preview",
                    videoSrc: "/assets/videos/features/copyfolio/Preview.webm",
                    title: "Preview your site",
                    subtitle: "Take a look at your site exactly as visitors will see it."
                }, {
                    buttonText: "start creating",
                    position: {
                        laptop: {
                            top: 72,
                            right: 97
                        },
                        tablet: {
                            top: 72,
                            right: 97
                        }
                    },
                    sticker: {
                        laptop: {
                            position: {
                                top: 10,
                                right: 97
                            },
                            Image: ea
                        },
                        tablet: {
                            position: {
                                top: 10,
                                right: 97
                            },
                            Image: ea
                        }
                    },
                    id: "publishing",
                    videoSrc: "/assets/videos/welcome/copyfolio/Publishing.webm",
                    title: "Publish when you’re ready",
                    subtitle: "We save all your changes but they only go live after you publish them."
                }],
                eh = [{
                    id: "welcome",
                    videoSrc: "/assets/videos/welcome/archifolio/Welcome.webm",
                    title: "Welcome to your next portfolio",
                    subtitle: "Build your portfolio website in minutes with Archifolio.",
                    buttonText: "begin"
                }, { ...ec,
                    id: "design-panel",
                    videoSrc: "/assets/videos/welcome/archifolio/Design.webm",
                    title: "Design",
                    subtitle: "Change fonts and colors, or choose a different template."
                }, {
                    buttonText: "continue",
                    position: {
                        laptop: {
                            top: 72,
                            left: 188
                        },
                        tablet: {
                            top: 72,
                            left: 140
                        }
                    },
                    sticker: {
                        laptop: {
                            position: {
                                top: 10,
                                left: 188
                            },
                            Image: function(e) {
                                return K.createElement("svg", er({
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: 121,
                                    height: 44,
                                    fill: "none"
                                }, e), H || (H = K.createElement("rect", {
                                    width: 121,
                                    height: 44,
                                    fill: "#2D2C31",
                                    rx: 8
                                })), G || (G = K.createElement("g", {
                                    fill: "#fff",
                                    fillRule: "evenodd",
                                    clipPath: "url(#settings_svg__a)",
                                    clipRule: "evenodd"
                                }, K.createElement("path", {
                                    d: "M28 22a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-2 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                                }), K.createElement("path", {
                                    d: "M25 12.422a2 2 0 0 0-2 0l-6.795 3.923a2 2 0 0 0-1 1.732v7.845a2 2 0 0 0 1 1.732L23 31.577a2 2 0 0 0 2 0l6.795-3.923a2 2 0 0 0 1-1.732v-7.845a2 2 0 0 0-1-1.732l-6.795-3.923Zm-1 1.732 6.794 3.923v7.845l-6.795 3.923-6.794-3.923v-7.845L24 14.154Z"
                                }))), z || (z = K.createElement("path", {
                                    fill: "#fff",
                                    d: "M49.232 16.28c.96 0 1.803.165 2.528.496.725.33 1.344.821 1.856 1.472l-1.232 1.424c-.437-.555-.917-.96-1.44-1.216-.512-.267-1.11-.4-1.792-.4-.448 0-.821.059-1.12.176-.288.117-.501.272-.64.464a1.129 1.129 0 0 0-.192.64c0 .288.112.533.336.736.224.192.608.352 1.152.48l1.968.448c1.045.235 1.792.587 2.24 1.056.459.459.688 1.056.688 1.792 0 .693-.181 1.29-.544 1.792-.363.49-.87.87-1.52 1.136-.65.256-1.397.384-2.24.384a7.623 7.623 0 0 1-2.032-.256 6.338 6.338 0 0 1-1.632-.736c-.48-.31-.88-.667-1.2-1.072l1.248-1.488c.245.341.55.645.912.912.363.267.773.48 1.232.64.47.15.96.224 1.472.224.437 0 .805-.048 1.104-.144.31-.107.539-.25.688-.432.16-.192.24-.421.24-.688a.958.958 0 0 0-.288-.704c-.181-.203-.523-.357-1.024-.464l-2.144-.48a6.979 6.979 0 0 1-1.6-.576 2.745 2.745 0 0 1-1.008-.928c-.224-.384-.336-.837-.336-1.36 0-.63.17-1.195.512-1.696.341-.501.832-.896 1.472-1.184.65-.299 1.43-.448 2.336-.448Zm9.929 10.88c-.843 0-1.579-.165-2.208-.496a3.494 3.494 0 0 1-1.44-1.424C55.172 24.621 55 23.875 55 23c0-.875.17-1.621.512-2.24a3.52 3.52 0 0 1 1.424-1.424c.619-.33 1.323-.496 2.112-.496.81 0 1.499.165 2.064.496.565.32.997.763 1.296 1.328.299.555.448 1.19.448 1.904 0 .213-.005.416-.016.608-.01.192-.027.363-.048.512h-6.384v-1.52h5.424l-1.056.384c0-.672-.155-1.19-.464-1.552-.299-.363-.726-.544-1.28-.544a1.91 1.91 0 0 0-1.056.288c-.288.192-.507.48-.656.864-.15.373-.224.848-.224 1.424 0 .565.08 1.035.24 1.408.17.363.405.635.704.816.31.181.677.272 1.104.272.47 0 .848-.09 1.136-.272a1.84 1.84 0 0 0 .672-.752l1.744.672c-.17.416-.432.773-.784 1.072a3.55 3.55 0 0 1-1.232.688c-.47.15-.976.224-1.52.224Zm8.245-10.608v7.84c0 .384.096.667.288.848.203.17.474.256.816.256.266 0 .501-.037.704-.112.203-.085.384-.197.544-.336l.352 1.456a2.89 2.89 0 0 1-.96.48 4.14 4.14 0 0 1-1.216.176c-.534 0-1.008-.08-1.424-.24a2.011 2.011 0 0 1-.96-.768c-.224-.352-.336-.821-.336-1.408V17.16l2.192-.608ZM69.966 19v1.632h-6.224V19h6.224Zm3.565-2.448v7.84c0 .384.096.667.288.848.203.17.474.256.816.256.266 0 .501-.037.704-.112.203-.085.384-.197.544-.336l.352 1.456a2.89 2.89 0 0 1-.96.48 4.14 4.14 0 0 1-1.216.176c-.534 0-1.008-.08-1.424-.24a2.011 2.011 0 0 1-.96-.768c-.224-.352-.336-.821-.336-1.408V17.16l2.192-.608ZM76.09 19v1.632h-6.224V19h6.224Zm2.587-1.152c-.459 0-.8-.096-1.024-.288-.224-.203-.336-.496-.336-.88 0-.395.112-.688.336-.88.224-.203.565-.304 1.024-.304.459 0 .8.101 1.024.304.224.192.336.485.336.88 0 .384-.112.677-.336.88-.224.192-.566.288-1.024.288ZM79.766 19v8h-2.192v-8h2.192Zm2.323 8v-8h1.969l.127 2.4-.272-.256c.129-.523.331-.955.609-1.296a2.486 2.486 0 0 1 1.007-.752c.406-.17.849-.256 1.329-.256.554 0 1.045.107 1.471.32a2.32 2.32 0 0 1 1.025.976c.255.427.383.965.383 1.616V27h-2.191v-4.624c0-.683-.134-1.152-.4-1.408-.267-.267-.614-.4-1.04-.4-.3 0-.593.075-.88.224-.278.139-.507.368-.689.688-.17.32-.256.747-.256 1.28V27H82.09Zm17.283-9.904.256 1.568h-.144a.594.594 0 0 0-.144-.016c-.49 0-.859.112-1.104.336-.246.213-.368.512-.368.896l-.896-.368c0-.427.085-.821.256-1.184.17-.373.421-.672.752-.896.341-.224.746-.336 1.216-.336h.176Zm-2.624 8.4c.864 0 1.53.187 2 .56.47.373.704.896.704 1.568 0 .608-.176 1.12-.528 1.536-.352.427-.848.747-1.488.96-.63.213-1.36.32-2.192.32-1.376 0-2.384-.192-3.024-.576-.63-.384-.944-.885-.944-1.504 0-.437.165-.805.496-1.104.341-.299.901-.464 1.68-.496l-.08.256c-.555-.096-.982-.277-1.28-.544-.288-.277-.432-.656-.432-1.136 0-.49.186-.89.56-1.2.384-.32.901-.507 1.552-.56l.96.448h-.224c-.459.032-.784.128-.976.288-.182.15-.272.32-.272.512 0 .224.085.395.256.512.181.107.437.16.768.16h2.464Zm-1.488 3.44c.554 0 1.008-.048 1.36-.144.362-.096.63-.219.8-.368.181-.15.272-.315.272-.496a.606.606 0 0 0-.24-.496c-.16-.117-.448-.176-.864-.176h-2.704c-.256 0-.47.064-.64.192a.64.64 0 0 0-.24.528c0 .299.197.533.592.704.405.17.96.256 1.664.256Zm.016-10.096c.746 0 1.392.112 1.936.336.554.213.976.523 1.264.928.298.405.448.89.448 1.456 0 .555-.15 1.035-.448 1.44-.288.405-.71.72-1.264.944-.544.213-1.19.32-1.936.32-1.184 0-2.09-.24-2.72-.72-.619-.49-.928-1.152-.928-1.984 0-.565.144-1.05.432-1.456.298-.405.72-.715 1.264-.928.544-.224 1.194-.336 1.952-.336Zm0 1.376c-.427 0-.779.117-1.056.352-.278.235-.416.56-.416.976 0 .416.138.747.416.992.277.235.63.352 1.056.352.426 0 .773-.117 1.04-.352.277-.245.416-.576.416-.992 0-.416-.139-.741-.416-.976-.267-.235-.614-.352-1.04-.352Zm8.701 6.944c-.811 0-1.552-.144-2.224-.432a4.133 4.133 0 0 1-1.616-1.216l1.264-1.28c.256.384.597.699 1.024.944.427.245.933.368 1.52.368.416 0 .747-.059.992-.176.256-.128.384-.325.384-.592a.589.589 0 0 0-.176-.432c-.117-.128-.352-.23-.704-.304l-1.408-.288c-.928-.192-1.589-.48-1.984-.864-.384-.395-.576-.901-.576-1.52 0-.437.128-.848.384-1.232.267-.384.661-.693 1.184-.928.523-.245 1.173-.368 1.952-.368.8 0 1.493.128 2.08.384.597.245 1.067.613 1.408 1.104l-1.312 1.28a2.292 2.292 0 0 0-.928-.848 2.445 2.445 0 0 0-1.184-.304c-.299 0-.555.032-.768.096-.213.064-.373.155-.48.272a.561.561 0 0 0-.16.416c0 .17.075.32.224.448.149.117.421.219.816.304l1.632.336c.789.16 1.355.432 1.696.816.341.373.512.827.512 1.36 0 .512-.139.97-.416 1.376-.267.395-.667.71-1.2.944-.523.224-1.168.336-1.936.336Z"
                                })), B || (B = K.createElement("defs", null, K.createElement("clipPath", {
                                    id: "settings_svg__a"
                                }, K.createElement("path", {
                                    fill: "#fff",
                                    d: "M12 10h24v24H12z"
                                })))))
                            }
                        },
                        tablet: {
                            position: {
                                top: 10,
                                left: 140
                            },
                            Image: function(e) {
                                return K.createElement("svg", eo({
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: 48,
                                    height: 44,
                                    fill: "none"
                                }, e), R || (R = K.createElement("rect", {
                                    width: 48,
                                    height: 44,
                                    fill: "#2D2C31",
                                    rx: 8
                                })), U || (U = K.createElement("g", {
                                    fill: "#fff",
                                    fillRule: "evenodd",
                                    clipPath: "url(#settings-tablet_svg__a)",
                                    clipRule: "evenodd"
                                }, K.createElement("path", {
                                    d: "M28 22a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-2 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                                }), K.createElement("path", {
                                    d: "M25 12.422a2 2 0 0 0-2 0l-6.795 3.923a2 2 0 0 0-1 1.732v7.845a2 2 0 0 0 1 1.732L23 31.577a2 2 0 0 0 2 0l6.795-3.923a2 2 0 0 0 1-1.732v-7.845a2 2 0 0 0-1-1.732l-6.795-3.923Zm-1 1.732 6.794 3.923v7.845l-6.795 3.923-6.794-3.923v-7.845L24 14.154Z"
                                }))), W || (W = K.createElement("defs", null, K.createElement("clipPath", {
                                    id: "settings-tablet_svg__a"
                                }, K.createElement("path", {
                                    fill: "#fff",
                                    d: "M12 10h24v24H12z"
                                })))))
                            }
                        }
                    },
                    id: "settings-panel",
                    videoSrc: "/assets/videos/welcome/Settings.webm",
                    title: "Settings",
                    subtitle: "Add a custom domain and set the privacy of your website."
                }, {
                    buttonText: "continue",
                    position: {
                        laptop: {
                            top: 72,
                            right: 298
                        },
                        tablet: {
                            top: 72,
                            right: 176
                        }
                    },
                    sticker: {
                        laptop: {
                            position: {
                                top: 10,
                                right: 298
                            },
                            Image: function(e) {
                                return K.createElement("svg", ee({
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: 166,
                                    height: 44,
                                    fill: "none"
                                }, e), Z || (Z = K.createElement("rect", {
                                    width: 166,
                                    height: 44,
                                    fill: "#2D2C31",
                                    rx: 8
                                })), E || (E = K.createElement("g", {
                                    clipPath: "url(#export_svg__a)"
                                }, K.createElement("path", {
                                    fill: "#fff",
                                    d: "M26 12h-9a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V18l-6-6Zm-8 18V14h7v5h5v11H18Z"
                                }))), j || (j = K.createElement("path", {
                                    fill: "#fff",
                                    d: "M45.376 27V16.44h7.92v1.776h-5.712v2.624h4.496v1.696h-4.496v2.688h5.936V27h-8.144Zm11.677-8 2.112 3.504.592-.016 3.2 4.512h-2.544l-2.192-3.584-.64-.064L54.493 19h2.56Zm5.856 0-3.088 4.304-.656-.048L56.829 27h-2.48l3.312-4.544.624.08L60.429 19h2.48Zm1.477 11.36V19h1.968l.144 2.544-.272-.288c.096-.47.272-.885.528-1.248a2.77 2.77 0 0 1 1.008-.848c.406-.213.859-.32 1.36-.32.651 0 1.232.165 1.744.496.512.33.912.805 1.2 1.424.299.608.448 1.35.448 2.224 0 .875-.149 1.627-.448 2.256-.298.619-.709 1.093-1.232 1.424-.512.33-1.098.496-1.76.496-.704 0-1.29-.197-1.76-.592a3.008 3.008 0 0 1-.944-1.488l.208-.336v5.616h-2.192Zm4.048-4.88c.587 0 1.046-.208 1.376-.624.342-.427.512-1.045.512-1.856 0-.81-.165-1.424-.496-1.84-.32-.427-.773-.64-1.36-.64a1.68 1.68 0 0 0-.992.304c-.277.192-.496.475-.656.848-.16.363-.24.805-.24 1.328 0 .512.075.955.224 1.328.15.373.363.661.64.864.288.192.619.288.992.288Zm9.632-6.64c.81 0 1.52.165 2.128.496.618.33 1.098.805 1.44 1.424.352.619.528 1.365.528 2.24 0 .864-.176 1.61-.528 2.24a3.494 3.494 0 0 1-1.44 1.424c-.608.33-1.318.496-2.128.496-.8 0-1.51-.165-2.128-.496a3.598 3.598 0 0 1-1.456-1.424c-.342-.63-.512-1.376-.512-2.24 0-.875.17-1.621.512-2.24a3.598 3.598 0 0 1 1.456-1.424c.618-.33 1.328-.496 2.128-.496Zm0 1.632c-.406 0-.752.096-1.04.288-.278.181-.491.459-.64.832-.15.373-.224.843-.224 1.408s.074 1.035.224 1.408c.149.373.362.656.64.848.288.181.634.272 1.04.272.394 0 .73-.09 1.008-.272.288-.192.506-.475.656-.848.149-.373.224-.843.224-1.408s-.075-1.035-.224-1.408c-.15-.373-.368-.65-.656-.832-.278-.192-.614-.288-1.008-.288ZM83.996 27v-8H85.9l.144 1.568c.213-.555.522-.981.928-1.28.416-.299.933-.448 1.552-.448.181 0 .346.016.496.048.15.032.272.075.368.128l-.256 1.84a1.69 1.69 0 0 0-.4-.096 4.372 4.372 0 0 0-.592-.032c-.32 0-.63.08-.928.24a1.79 1.79 0 0 0-.736.704c-.192.31-.288.704-.288 1.184V27h-2.192Zm9.285-10.448v7.84c0 .384.096.667.288.848.203.17.474.256.816.256.266 0 .501-.037.704-.112.203-.085.384-.197.544-.336l.352 1.456a2.89 2.89 0 0 1-.96.48 4.14 4.14 0 0 1-1.216.176c-.534 0-1.008-.08-1.424-.24a2.011 2.011 0 0 1-.96-.768c-.224-.352-.336-.821-.336-1.408V17.16l2.192-.608ZM95.84 19v1.632h-6.224V19h6.224Zm9.018-2.448v7.84c0 .384.096.667.288.848.203.17.475.256.816.256.267 0 .501-.037.704-.112.203-.085.384-.197.544-.336l.352 1.456a2.89 2.89 0 0 1-.96.48 4.138 4.138 0 0 1-1.216.176c-.533 0-1.008-.08-1.424-.24a2.015 2.015 0 0 1-.96-.768c-.224-.352-.336-.821-.336-1.408V17.16l2.192-.608Zm2.56 2.448v1.632h-6.224V19h6.224Zm5.131-.16c.811 0 1.52.165 2.128.496a3.49 3.49 0 0 1 1.44 1.424c.352.619.528 1.365.528 2.24 0 .864-.176 1.61-.528 2.24a3.49 3.49 0 0 1-1.44 1.424c-.608.33-1.317.496-2.128.496-.8 0-1.509-.165-2.128-.496a3.595 3.595 0 0 1-1.456-1.424c-.341-.63-.512-1.376-.512-2.24 0-.875.171-1.621.512-2.24a3.595 3.595 0 0 1 1.456-1.424c.619-.33 1.328-.496 2.128-.496Zm0 1.632c-.405 0-.752.096-1.04.288-.277.181-.491.459-.64.832-.149.373-.224.843-.224 1.408s.075 1.035.224 1.408c.149.373.363.656.64.848.288.181.635.272 1.04.272.395 0 .731-.09 1.008-.272.288-.192.507-.475.656-.848.149-.373.224-.843.224-1.408s-.075-1.035-.224-1.408c-.149-.373-.368-.65-.656-.832-.277-.192-.613-.288-1.008-.288Zm15.477-4.032c.81 0 1.504.139 2.08.416a2.964 2.964 0 0 1 1.328 1.168c.32.501.48 1.11.48 1.824 0 .715-.16 1.328-.48 1.84-.31.501-.752.89-1.328 1.168-.576.267-1.27.4-2.08.4h-2.224V27h-2.208V16.44h4.432Zm-.336 5.072c.661 0 1.157-.139 1.488-.416.33-.288.496-.704.496-1.248 0-.555-.166-.97-.496-1.248-.331-.277-.827-.416-1.488-.416h-1.888v3.328h1.888Zm10.328-5.072c1.653 0 2.933.459 3.84 1.376.906.907 1.36 2.208 1.36 3.904 0 1.685-.454 2.987-1.36 3.904-.907.917-2.187 1.376-3.84 1.376h-4.08V16.44h4.08Zm-.112 8.8c1.002 0 1.754-.299 2.256-.896.512-.608.768-1.483.768-2.624s-.256-2.01-.768-2.608c-.502-.608-1.254-.912-2.256-.912h-1.76v7.04h1.76Zm15.436-7.024h-5.696v2.688h4.495v1.776h-4.495V27h-2.208V16.44h7.904v1.776Z"
                                })), P || (P = K.createElement("defs", null, K.createElement("clipPath", {
                                    id: "export_svg__a"
                                }, K.createElement("path", {
                                    fill: "#fff",
                                    d: "M12 10h24v24H12z"
                                })))))
                            }
                        },
                        tablet: {
                            position: {
                                top: 10,
                                right: 176
                            },
                            Image: function(e) {
                                return K.createElement("svg", et({
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: 48,
                                    height: 44,
                                    fill: "none"
                                }, e), S || (S = K.createElement("rect", {
                                    width: 48,
                                    height: 44,
                                    fill: "#2D2C31",
                                    rx: 8
                                })), _ || (_ = K.createElement("g", {
                                    clipPath: "url(#export-tablet_svg__a)"
                                }, K.createElement("path", {
                                    fill: "#fff",
                                    d: "M26 12h-9a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V18l-6-6Zm-8 18V14h7v5h5v11H18Z"
                                }))), N || (N = K.createElement("defs", null, K.createElement("clipPath", {
                                    id: "export-tablet_svg__a"
                                }, K.createElement("path", {
                                    fill: "#fff",
                                    d: "M12 10h24v24H12z"
                                })))))
                            }
                        }
                    },
                    id: "pdf-export",
                    videoSrc: "/assets/videos/welcome/archifolio/PDF.webm",
                    title: "Export to PDF",
                    subtitle: "Turn your whole website into a printable PDF."
                }, { ...ed,
                    id: "section-settings",
                    videoSrc: "/assets/videos/welcome/archifolio/Edit.webm",
                    title: "Section settings",
                    subtitle: "Change the layout and content inside your sections."
                }],
                em = es.Ab ? eh : eu
        },
        18927: function(e, t, i) {
            i.d(t, {
                Sr: function() {
                    return E
                },
                ZA: function() {
                    return S
                },
                sV: function() {
                    return P
                },
                ys: function() {
                    return j
                },
                _k: function() {
                    return _
                },
                ls: function() {
                    return y
                }
            });
            var l = i(17212);
            i(71931);
            var n = i(98632),
                a = i(34406);
            let r = new l.g({
                region: a.env.AMAZON_REGION,
                credentials: {
                    accessKeyId: a.env.AMAZON_ACCESS_KEY_ID,
                    secretAccessKey: a.env.AMAZON_SECRET_ACCESS_KEY
                }
            });
            var o = i(49928),
                s = i(58014),
                c = i(82495),
                d = i(97334),
                u = i(51254),
                h = i(46249),
                m = i(31260),
                p = i(60185),
                f = i(13855),
                g = i(72515),
                v = i(18852),
                b = i(34406);
            let w = [{
                    id: "welcome",
                    title: "Welcome to Premium!",
                    subtitle: "We’re happy you’re here. Let’s explore some of the features you’ve unlocked.",
                    buttonText: "See features",
                    videoSrc: "/assets/videos/premium/archifolio/1-Welcome.webm"
                }, {
                    id: "design",
                    title: "Design easily with global presets",
                    subtitle: "Choose a font or color setting that automatically updates your whole site.",
                    buttonText: "Next",
                    videoSrc: "/assets/videos/premium/archifolio/2-Design.webm"
                }, {
                    id: "pdf",
                    title: "Export your site as a PDF",
                    subtitle: "Turn your whole website into a printable PDF in just a click.",
                    buttonText: "Next",
                    videoSrc: "/assets/videos/premium/archifolio/3-PDF.webm"
                }, {
                    id: "domain",
                    title: "Look professional with your own domain",
                    subtitle: "Buy a domain for your site with just a few clicks or connect one you own.",
                    buttonText: "Next",
                    videoSrc: "/assets/videos/premium/archifolio/4-Domain.webm"
                }, {
                    id: "projects",
                    title: "Publish all your projects",
                    subtitle: "Upload your projects as drafts, then publish as many as you’d like.",
                    buttonText: "Start creating",
                    videoSrc: "/assets/videos/premium/archifolio/5-Projects.webm"
                }],
                y = p.Ab ? w : [{
                    id: "welcome",
                    title: "Welcome to Premium!",
                    subtitle: "We’re happy you’re here. Let’s explore some of the features you’ve unlocked.",
                    buttonText: "Let’s see",
                    videoSrc: "/assets/videos/premium/copyfolio/1-Welcome.webm"
                }, {
                    id: "publishing",
                    title: "Publish your site",
                    subtitle: "Share your site with the world when you’re ready.",
                    buttonText: "Next",
                    videoSrc: "/assets/videos/premium/copyfolio/2-Publishing.webm"
                }, {
                    id: "domain",
                    title: "Look professional with your own domain",
                    subtitle: "Buy a domain for your site with just a few clicks or connect one you own.",
                    buttonText: "Next",
                    videoSrc: "/assets/videos/premium/copyfolio/3-Domain.webm"
                }, {
                    id: "site-insights-premium",
                    title: "Check your stats in Site Insights",
                    subtitle: "Find out where your visitors come from and which pages they visit.",
                    buttonText: "Next",
                    videoSrc: "/assets/videos/premium/copyfolio/4-Site insights.webm"
                }],
                x = p.Ab ? "/assets/videos/welcome/archifolio/Welcome.webm" : "/assets/videos/welcome/copyfolio/Welcome.webm",
                Z = {
                    action: "/payment",
                    buttonText: "Go premium",
                    secondaryAction: "/premium",
                    secondaryButtonText: "Learn more",
                    subtitle: "Finish your site and share it with the world—no limitations."
                },
                E = {
                    PDF_EXPORT: w.find(e => "pdf" === e.id),
                    PUBLISHING: { ...Z,
                        id: "publishing",
                        title: "Go Premium to publish your site",
                        subtitle: "Ready to go live? Upgrade, then publish and share your site with others.",
                        videoSrc: x
                    },
                    ADD_SECTION: { ...Z,
                        id: "add-section",
                        title: "Go Premium to add new sections",
                        videoSrc: x
                    },
                    ADD_PROJECTS: { ...Z,
                        id: "add-projects",
                        title: "Go Premium to add new projects",
                        videoSrc: x
                    },
                    ADD_BLOG_POSTS: { ...Z,
                        id: "add-blog-posts",
                        title: "Go Premium to add new blog posts",
                        videoSrc: x
                    },
                    UPLOAD_VIDEOS: { ...Z,
                        id: "upload-videos",
                        title: "Go Premium to upload videos",
                        videoSrc: x
                    }
                },
                j = [{
                    id: "free-trial.premium",
                    title: "Now you have to publish your changes.",
                    subtitle: "Your site’s still live—but new changes only go out once you publish them.",
                    videoSrc: "/assets/videos/welcome/copyfolio/Publishing.webm",
                    buttonText: "Tell me more"
                }, ...v.v.filter(e => ["preview", "publishing"].includes(e.id))],
                P = {
                    id: "free-trial.ended",
                    title: "Your Free trial is over",
                    subtitle: "Miss features or want to publish your site? Get Premium & unlock it all.",
                    videoSrc: x,
                    buttonText: "Go Premium",
                    action: "/payment",
                    secondaryButtonText: "Learn more",
                    secondaryAction: "/premium"
                },
                S = {
                    id: "free-trial.3-days-left",
                    title: "3 days left on your Free trial!",
                    subtitle: "Build your brand and website—then upgrade and publish when you’re ready.",
                    videoSrc: x,
                    buttonText: "Keep going"
                },
                _ = [...p.Ab ? [] : [{
                    id: "site-insights-premium",
                    to: {
                        page: "insights"
                    },
                    videoSrc: "/assets/videos/premium/copyfolio/3-Site insights.webm",
                    title: "Site insights",
                    unusedDescription: "Find out where your visitors come from and which pages they visit",
                    icon: m.IconFeatureSiteInsights,
                    subtitle: "of tracking data",
                    data(e) {
                        if (e.usedFeatures.includes("SITE_INSIGHTS")) {
                            let t = new Date("2023-06-21"),
                                i = (0, s.Z)(e.createdAt, t) ? t : e.createdAt,
                                l = new Date,
                                n = (0, c.Z)(i, l);
                            return "".concat(Math.abs(Math.ceil(n / 30)), " months")
                        }
                        return null
                    }
                }], {
                    id: "custom-domain",
                    to: {
                        panel: "settings-domain"
                    },
                    title: "Custom domain",
                    unusedDescription: "Get a custom domain with a few clicks or connect one you already own",
                    icon: m.IconFeatureDomain,
                    subtitle: "in use",
                    data: (e, t) => t.domain ? "Custom domain" : t.externalDomain ? "External domain" : e.usedFeatures.includes("CUSTOM_SLUG") ? "Custom URL" : null
                }, ...p.Ab ? [{
                    id: "pdf-export",
                    to: {
                        action: "pdf"
                    },
                    title: "PDF Export",
                    unusedDescription: "Turn your whole site into a printable PDF with just a click",
                    icon: m.IconFeaturePdf,
                    subtitle: "PDF(s) exported",
                    async data(e, t) {
                        try {
                            var i, l;
                            let e = await r.send(new n.K0W({
                                Bucket: b.env.AMAZON_S3_BUCKET,
                                Prefix: t.slug
                            }));
                            return null !== (l = null === (i = e.Contents) || void 0 === i ? void 0 : i.length.toString()) && void 0 !== l ? l : null
                        } catch (e) {
                            return null
                        }
                    }
                }] : [], {
                    id: "unlimited-projects",
                    title: "Unlimited projects",
                    unusedDescription: "Add as many projects as you’d like: PDFs, external links, or case study pages",
                    icon: m.IconFeatureProjects,
                    subtitle: "public projects",
                    async to(e) {
                        var t, i;
                        let l = await o.prisma.page.findFirst({
                            where: {
                                siteId: e.id,
                                type: "PROJECT",
                                published: !0
                            },
                            select: {
                                parentSection: {
                                    select: {
                                        id: !0,
                                        page: {
                                            select: {
                                                slug: !0
                                            }
                                        }
                                    }
                                }
                            }
                        });
                        return (null == l ? void 0 : null === (i = l.parentSection) || void 0 === i ? void 0 : null === (t = i.page) || void 0 === t ? void 0 : t.slug) ? {
                            slug: l.parentSection.page.slug,
                            sectionId: l.parentSection.id
                        } : {
                            slug: ""
                        }
                    },
                    async data(e, t) {
                        let i = await o.prisma.page.count({
                            where: {
                                siteId: t.id,
                                published: !0,
                                type: "PROJECT"
                            }
                        });
                        return i < 1 ? null : i.toString()
                    }
                }, {
                    id: "unlimited-blog-posts",
                    title: "Unlimited blog posts",
                    unusedDescription: "Publish as many blog posts as you’d like to drive organic search traffic to your site",
                    icon: m.IconFeatureBlog,
                    subtitle: "public blog posts",
                    async to(e) {
                        var t, i;
                        let l = await o.prisma.page.findFirst({
                            where: {
                                siteId: e.id,
                                type: "BLOG_POST",
                                published: !0
                            },
                            select: {
                                parentSection: {
                                    select: {
                                        id: !0,
                                        page: {
                                            select: {
                                                slug: !0
                                            }
                                        }
                                    }
                                }
                            }
                        });
                        return (null == l ? void 0 : null === (i = l.parentSection) || void 0 === i ? void 0 : null === (t = i.page) || void 0 === t ? void 0 : t.slug) ? {
                            slug: l.parentSection.page.slug,
                            sectionId: l.parentSection.id
                        } : {
                            slug: ""
                        }
                    },
                    async data(e, t) {
                        let i = await o.prisma.page.count({
                            where: {
                                siteId: t.id,
                                published: !0,
                                type: "BLOG_POST"
                            }
                        });
                        return i < 3 ? null : i ? i.toString() : null
                    }
                }, {
                    id: "color-palette",
                    title: "Color palettes",
                    to: {
                        panel: "design-colors"
                    },
                    unusedDescription: "Change the look of your whole site in a single click, with a palette made by our designers",
                    icon: m.IconFeatureColorPresets,
                    subtitle: "in use",
                    data(e, t) {
                        let i = g.D3[t.template].defaultColorSet;
                        return t.colorPreset !== i ? d.wk[t.colorPreset] : null
                    }
                }, {
                    id: "font-presets",
                    title: "Font presets",
                    to: {
                        panel: "design-fonts"
                    },
                    unusedDescription: "Pick another font family for your template to make it more elegant, subtle, or bold",
                    icon: m.IconFeatureFontPresets,
                    subtitle: "in use",
                    data(e, t) {
                        let i = g.D3[t.template].defaultFontFaceSet;
                        if (t.fontPreset !== i) {
                            var l, n, a, r;
                            let e = null === (l = f.$U[t.fontPreset]) || void 0 === l ? void 0 : l.headingDisplayName;
                            if (e) return e;
                            let i = null === (r = u.X[t.fontPreset]) || void 0 === r ? void 0 : null === (a = r.h1Family) || void 0 === a ? void 0 : null === (n = a.split("'")) || void 0 === n ? void 0 : n[1];
                            return i ? "".concat(i, " (Legacy)") : null
                        }
                        return null
                    }
                }, {
                    id: "seo-settings",
                    title: "SEO settings",
                    to: {
                        panel: "settings-seo"
                    },
                    unusedDescription: "Rank high on search engines, optimize the metadata of your pages and blog posts",
                    icon: m.IconFeatureSeo,
                    subtitle: "page(s) optimized",
                    async data(e, t) {
                        let i = (await o.prisma.page.findMany({
                            where: {
                                siteId: t.id,
                                seo: {
                                    not: o.Prisma.JsonNull
                                }
                            }
                        })).filter(e => e.seo.title && e.seo.description && e.seo.image).length;
                        return i ? i.toString() : null
                    }
                }, {
                    id: "custom-colors",
                    title: "Custom colors",
                    to: {
                        panel: "design-colors"
                    },
                    unusedDescription: "Use your brand colors and build your own website color palette easily",
                    icon: m.IconFeatureCustomColors,
                    subtitle: "in use",
                    data: (e, t) => t.customColorSet ? "Custom palette" : null
                }, {
                    id: "favicon",
                    title: "Browser icon",
                    to: {
                        panel: "settings-favicon"
                    },
                    unusedDescription: "Upload a browser icon or select a preset that matches your site",
                    icon: m.IconFeatureFavicon,
                    subtitle: "in use",
                    data(e, t) {
                        if (t.favicon) {
                            let {
                                preset: e
                            } = t.favicon;
                            return e ? "".concat((0, h.Qs)(e), " preset") : "Custom icon"
                        }
                        return null
                    }
                }, {
                    id: "hide-branding",
                    title: "No ".concat(p.sG, " branding"),
                    to: {
                        panel: "settings-branding"
                    },
                    unusedDescription: "Choose to hide the ‘Made with ".concat(p.sG, "’ banner from your site"),
                    icon: m.IconFeatureHideBranding,
                    subtitle: "Banner hidden",
                    data: (e, t) => t.hideProductBranding ? "" : null
                }]
        },
        99473: function(e, t, i) {
            i.d(t, {
                r: function() {
                    return n
                }
            });
            var l = i(54962);

            function n() {
                return l.SX.useQuery(["Subscription.getActive"])
            }
        },
        93218: function(e, t, i) {
            i.d(t, {
                D: function() {
                    return n
                }
            });
            var l = i(2784);

            function n(e) {
                let t = l.useRef();
                return l.useEffect(() => {
                    t.current = e
                }), t.current
            }
        },
        49928: function(e, t, i) {
            i.d(t, {
                deserializeSection: function() {
                    return o
                },
                prisma: function() {
                    return r
                }
            });
            var l, n, a = i(60696);
            i.o(a, "Prisma") && i.d(t, {
                Prisma: function() {
                    return a.Prisma
                }
            }), i.o(a, "SiteTemplate") && i.d(t, {
                SiteTemplate: function() {
                    return a.SiteTemplate
                }
            }), null !== (n = (l = globalThis).prisma) && void 0 !== n || (l.prisma = new a.PrismaClient);
            let {
                prisma: r
            } = globalThis;

            function o(e) {
                let {
                    id: t,
                    version: i,
                    pageId: l,
                    payload: n
                } = e;
                return { ...n,
                    id: t,
                    version: i,
                    pageId: l
                }
            }
        },
        94745: function(e, t, i) {
            i.d(t, {
                N: function() {
                    return d
                }
            });
            var l = i(52322),
                n = i(61463),
                a = i(31260),
                r = i(40061),
                o = i(27403);

            function s(e) {
                let {
                    unit_amount: t,
                    recurring: i
                } = e;
                return (0, l.jsxs)("div", {
                    className: "flex items-center gap-1",
                    children: [(0, l.jsxs)("h3", {
                        className: "text-6xl font-bold",
                        children: ["$", (null != t ? t : 0) / 100]
                    }), i && (0, l.jsxs)("span", {
                        className: "text-sm text-graphite-40",
                        children: ["per ", (0, l.jsx)("br", {}), " month"]
                    })]
                })
            }

            function c(e) {
                let {
                    title: t,
                    included: i,
                    highlighted: r,
                    icon: s
                } = e, c = null != s ? s : i ? o.Jr : a.IconX;
                return (0, l.jsxs)("li", {
                    className: "flex items-center gap-2",
                    children: [(0, l.jsx)("span", {
                        className: (0, n.Z)(i ? "text-emerald-40" : "text-graphite-40"),
                        children: (0, l.jsx)(c, {
                            className: "size-6"
                        })
                    }), (0, l.jsx)("span", {
                        className: (0, n.Z)("text-graphite-40", r && "font-bold text-graphite-100"),
                        children: t
                    })]
                })
            }

            function d(e) {
                let {
                    name: t,
                    subtitle: i,
                    features: n,
                    price: a,
                    action: o,
                    children: d
                } = e;
                return (0, l.jsxs)("div", {
                    className: "group/pricing-card relative flex min-w-[330px] flex-col rounded-lg bg-graphite-0 text-left shadow-soft-md transition-all hover:-translate-y-2 hover:shadow-hard-xl",
                    children: [(0, l.jsxs)("header", {
                        className: "relative min-h-[179px] w-full space-y-3 p-6",
                        children: [(0, l.jsxs)("div", {
                            className: "space-y-1",
                            children: [(0, l.jsx)("strong", {
                                children: t
                            }), (0, l.jsx)(s, { ...a
                            })]
                        }), d, i && (0, l.jsx)("p", {
                            className: "text-sm font-semibold text-graphite-40",
                            children: i
                        })]
                    }), (0, l.jsx)("div", {
                        className: "px-1",
                        children: (0, l.jsx)(r.Z0, {})
                    }), (0, l.jsx)("article", {
                        className: "flex-1 space-y-6 p-6",
                        children: (0, l.jsx)("ul", {
                            className: "space-y-2",
                            children: n.map(e => (0, l.jsx)(c, { ...e
                            }, e.title))
                        })
                    }), o && (0, l.jsx)("footer", {
                        className: "p-6",
                        children: o
                    })]
                })
            }
        }
    }
]);