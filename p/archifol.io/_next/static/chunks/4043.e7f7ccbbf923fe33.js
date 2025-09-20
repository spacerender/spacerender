try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0a57d674-6e9d-4002-9ae2-a35222c8710d", e._sentryDebugIdIdentifier = "sentry-dbid-0a57d674-6e9d-4002-9ae2-a35222c8710d")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4043], {
        24043: function(e, t, a) {
            a.r(t), a.d(t, {
                NavigationLayout: function() {
                    return f
                }
            });
            var l = a(52322),
                n = a(40489),
                s = a(2784),
                i = a(57041),
                c = a(72907),
                o = a(63126),
                d = a(2355),
                r = a(13254),
                b = a(97847),
                p = a(17531),
                u = a(81380);

            function f(e) {
                let {
                    brand: t,
                    children: a,
                    padding: f = "md",
                    textColorOverride: g,
                    isOverlay: h,
                    editor: x
                } = e, [y, m] = s.useState(!1), j = (0, b.$)(), v = (0, u.W)(j).data, w = (0, r.I)(), N = (0, p.q)(w).data;
                return s.useEffect(() => {
                    document.body.style.overflow = y ? "hidden" : "auto"
                }, [y]), (0, l.jsx)("div", {
                    id: "user-navbar-".concat(w),
                    className: (0, n.Z)(h ? ["bg-transparent", !x && "absolute inset-x-0 top-0"] : "bg-custom-bg"),
                    children: (0, l.jsx)(d.J, {
                        newGrid: !0,
                        children: (0, l.jsxs)("div", {
                            className: (0, n.Z)("z-10 col-span-full flex items-center py-3 @tablet:col-span-6 @tablet:col-start-2 @tablet:flex-wrap @tablet:flex-gap-x-16 @laptop:col-span-12 @laptop:col-start-2", "justify-between", !h && "bg-custom-bg", {
                                "@tablet:py-4": "md" === f,
                                "@tablet:py-4 @laptop:py-11": "lg" === f
                            }),
                            style: { ...h && !y && g && "BLOG_POST" !== N.type && ("METROPOLITAN" !== v.template || "PROJECT" !== N.type) ? {
                                    "--h1-color": "rgb(".concat(g.join(", "), ")"),
                                    "--h3-color": "rgb(".concat(g.join(", "), ")"),
                                    "--p-color": "".concat(g.join(", ")),
                                    "--button-color": "rgb(".concat(g.join(", "), ")")
                                } : void 0
                            },
                            children: [(0, l.jsx)("div", {
                                className: "z-10",
                                children: (0, l.jsx)("div", {
                                    children: t
                                })
                            }), s.Children.count(a) > 1 && (0, l.jsx)(o.z, {
                                "aria-label": "Toggle navigation",
                                "aria-controls": "site-nav",
                                "aria-expanded": y,
                                className: "custom-h3 z-10 -mx-3 p-3 @tablet:hidden",
                                onClick: () => {
                                    m(e => !e)
                                },
                                children: y ? (0, l.jsx)(c.Z, {
                                    "aria-hidden": !0,
                                    className: "h-6"
                                }) : (0, l.jsx)(i.Z, {
                                    "aria-hidden": !0,
                                    className: (0, n.Z)("h-6", h && !y && g && "fill-graphite-0")
                                })
                            }), (0, l.jsx)("nav", {
                                id: "site-nav",
                                className: (0, n.Z)("fixed inset-0 flex max-h-screen items-center justify-center @tablet:static", y ? "bg-custom-bg" : "invisible @tablet:visible"),
                                children: (0, l.jsx)("ul", {
                                    className: "custom-p flex flex-col items-center space-y-4 leading-snug @tablet:flex-row @tablet:flex-wrap @tablet:space-y-0 @tablet:flex-gap-x-16",
                                    children: s.Children.map(a, e => (0, l.jsx)("li", {
                                        children: e
                                    }))
                                })
                            })]
                        })
                    })
                })
            }
        }
    }
]);