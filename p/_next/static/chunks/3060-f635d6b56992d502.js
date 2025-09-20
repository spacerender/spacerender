try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9fd4f54c-2e51-4c8a-9b47-d7370b5fdeae", e._sentryDebugIdIdentifier = "sentry-dbid-9fd4f54c-2e51-4c8a-9b47-d7370b5fdeae")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3060], {
        18858: function(e, t, r) {
            var n, a, i, s = r(2784);

            function l() {
                return (l = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            t.Z = function(e) {
                return s.createElement("svg", l({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "#f4f3f7",
                    viewBox: "0 0 96 96"
                }, e), n || (n = s.createElement("path", {
                    fill: "#dddbe6",
                    d: "M0 0h96v96H0z"
                })), a || (a = s.createElement("circle", {
                    cx: 48,
                    cy: 36,
                    r: 16
                })), i || (i = s.createElement("circle", {
                    cx: 48,
                    cy: 90,
                    r: 32
                })))
            }
        },
        10963: function(e, t, r) {
            r.d(t, {
                N: function() {
                    return s
                }
            });
            var n = r(52322),
                a = r(38421),
                i = r.n(a);

            function s(e) {
                return (0, n.jsx)(i(), { ...e,
                    loading: "eager",
                    loader: e => {
                        let {
                            src: t,
                            width: r
                        } = e;
                        if (!t.startsWith("https://archifolio.s3.us-east-1.amazonaws.com")) return t;
                        let n = encodeURIComponent(t.slice("".concat("https://archifolio.s3.us-east-1.amazonaws.com", "/").length));
                        return "https://".concat("d2p83r7qt92tp3.cloudfront.net", "/?k=").concat(n, "&w=").concat(r)
                    }
                })
            }
        },
        97304: function(e, t, r) {
            r.d(t, {
                y: function() {
                    return y
                }
            });
            var n = r(52322),
                a = r(40489),
                i = r(39097),
                s = r.n(i),
                l = r(23848),
                o = r(2784),
                c = r(21014),
                d = r(31260),
                u = r(18858),
                h = r(93924),
                g = r(10963);

            function p(e) {
                let {
                    fullName: t
                } = e, r = null == t ? void 0 : t.split(/\s/), a = r && r.length >= 2 ? "".concat(r[0][0] || "").concat(r[r.length - 1][0] || "").trim().toUpperCase() : "";
                return a.length > 0 ? (0, n.jsx)("span", {
                    "aria-label": "".concat(t, "’s empty avatar"),
                    className: "inline-block bg-graphite-10 text-graphite-40",
                    children: (0, n.jsx)("svg", {
                        viewBox: "0 0 2 2",
                        fill: "currentColor",
                        children: (0, n.jsx)("text", {
                            fontSize: 1,
                            x: 1,
                            y: 1,
                            dy: .08,
                            textAnchor: "middle",
                            dominantBaseline: "middle",
                            className: "select-none font-bold tracking-tight",
                            children: a
                        })
                    })
                }) : (0, n.jsx)(u.Z, {
                    "aria-label": "Empty avatar"
                })
            }
            let x = {
                md: 40,
                lg: 60
            };

            function f(e) {
                let {
                    size: t = "md"
                } = e, [r, a] = (0, h.k)(), [i, s] = o.useState(!1), l = (0, c.b)(null == r ? void 0 : r.user);
                return (0, n.jsx)("span", {
                    "data-testid": "user-avatar",
                    className: "relative inline-flex flex-col overflow-hidden rounded-full",
                    style: {
                        width: x[t],
                        height: x[t]
                    },
                    children: !a && (0, n.jsxs)(n.Fragment, {
                        children: [(null == r ? void 0 : r.user.image) && !i ? (0, n.jsx)(g.N, {
                            unoptimized: !0,
                            src: r.user.image,
                            alt: "".concat(l, "’s avatar"),
                            width: x.lg,
                            height: x.lg,
                            objectFit: "cover",
                            onError: () => {
                                s(!0)
                            }
                        }) : (0, n.jsx)(p, {
                            fullName: l
                        }), (0, n.jsx)("span", {
                            className: "absolute inset-0 rounded-full shadow-inner-sm"
                        })]
                    })
                })
            }
            var m = r(8574),
                b = r(63126),
                v = r(93878),
                j = r(58145),
                w = r(16405),
                N = r(40061);

            function y(e) {
                let {
                    dark: t
                } = e, [r, i] = (0, h.k)(), [u, g] = (0, o.useState)(!1);
                return (0, n.jsx)(w.EC, {
                    visible: u,
                    zIndex: 90,
                    content: (0, n.jsxs)("div", {
                        className: "rounded bg-graphite-0 text-graphite-100 shadow-soft-xl ring-1 ring-graphite-5",
                        children: [(0, n.jsx)("div", {
                            className: "p-1",
                            children: (0, n.jsxs)("div", {
                                className: "flex items-center space-x-4 px-6 py-4",
                                children: [(0, n.jsx)(f, {
                                    size: "lg"
                                }), (0, n.jsx)("div", {
                                    className: "w-55.5 space-y-1",
                                    children: !i && (0, n.jsxs)(n.Fragment, {
                                        children: [(0, n.jsx)("h2", {
                                            className: "line-clamp-2 text-base font-normal",
                                            children: (0, c.b)(null == r ? void 0 : r.user, "New account")
                                        }), (0, n.jsx)("div", {
                                            className: "line-clamp-1 text-graphite-40",
                                            children: null == r ? void 0 : r.user.email
                                        })]
                                    })
                                })]
                            })
                        }), (0, n.jsx)("div", {
                            className: "-my-px px-1",
                            children: (0, n.jsx)(N.Z0, {})
                        }), (0, n.jsx)(v.v, {
                            noBorder: !0,
                            noShadow: !0,
                            children: (0, n.jsxs)("div", {
                                className: "flex flex-col",
                                children: [(0, n.jsx)(s(), {
                                    href: "/premium",
                                    passHref: !0,
                                    legacyBehavior: !0,
                                    children: (0, n.jsx)(j.s, {
                                        size: "lg",
                                        as: "a",
                                        className: "px-6",
                                        icon: (0, n.jsx)(d.IconDiamond, {
                                            "aria-hidden": !0,
                                            className: "h-6 fill-graphite-20"
                                        }),
                                        children: (0, n.jsx)("div", {
                                            className: "flex flex-row items-center space-x-3",
                                            children: (0, n.jsx)("span", {
                                                children: "Explore Premium"
                                            })
                                        })
                                    })
                                }), (0, n.jsx)(s(), {
                                    href: "/settings",
                                    passHref: !0,
                                    legacyBehavior: !0,
                                    children: (0, n.jsx)(j.s, {
                                        size: "lg",
                                        as: "a",
                                        className: "px-6",
                                        icon: (0, n.jsx)(d.IconProfile, {
                                            "aria-hidden": !0,
                                            className: "h-6 fill-graphite-20"
                                        }),
                                        children: (0, n.jsxs)("div", {
                                            className: "flex flex-row items-center space-x-3",
                                            children: [(0, n.jsx)("span", {
                                                children: "Manage account"
                                            }), r && (0, n.jsx)(m.u, {})]
                                        })
                                    })
                                }), (0, n.jsx)(N.Z0, {}), (0, n.jsx)(j.s, {
                                    size: "lg",
                                    className: "px-6",
                                    onClick: () => {
                                        (0, l.signOut)({
                                            callbackUrl: "/"
                                        })
                                    },
                                    icon: (0, n.jsx)(d.IconSignOut, {
                                        "aria-hidden": !0,
                                        className: "h-6 fill-graphite-20"
                                    }),
                                    children: "Log out"
                                })]
                            })
                        })]
                    }),
                    placement: "top-start",
                    offset: "lg",
                    onClickOutside: () => {
                        g(!1)
                    },
                    children: (0, n.jsx)("div", {
                        className: "-mr-1 leading-0",
                        children: (0, n.jsx)(b.z, {
                            "aria-label": "Your account",
                            className: (0, a.Z)("rounded-full border-4", t ? "hover:border-graphite-80" : "hover:border-graphite-5", u ? t ? "border-graphite-60" : "border-graphite-10" : "border-transparent"),
                            onClick: () => {
                                g(e => !e)
                            },
                            children: (0, n.jsx)(f, {})
                        })
                    })
                })
            }
        },
        40061: function(e, t, r) {
            r.d(t, {
                Z0: function() {
                    return o
                },
                v6: function() {
                    return l
                }
            });
            var n = r(52322),
                a = r(40489),
                i = r(2784);
            let s = i.createContext("horizontal"),
                l = s.Provider;

            function o(e) {
                let {
                    "aria-orientation": t
                } = e, r = i.useContext(s), l = t || r;
                return (0, n.jsx)("div", {
                    role: "separator",
                    "aria-orientation": l,
                    className: (0, a.Z)("flex items-center justify-center", {
                        "-mx-1 h-[9px] py-1": "horizontal" === l,
                        "-my-1": "vertical" === l
                    }),
                    children: (0, n.jsx)("span", {
                        className: (0, a.Z)("bg-graphite-10", {
                            "h-px w-full": "horizontal" === l,
                            "h-full w-px": "vertical" === l
                        })
                    })
                })
            }
        },
        18941: function(e, t, r) {
            r.d(t, {
                v: function() {
                    return i
                }
            });
            var n = r(52322),
                a = r(61463);

            function i(e) {
                let {
                    intent: t = "neutral",
                    children: r,
                    className: i
                } = e;
                return (0, n.jsx)("div", {
                    className: (0, a.Z)("inline-flex h-6 items-center rounded px-2 text-xs font-extrabold uppercase tracking-[0.01em]", {
                        "bg-graphite-5 text-graphite-100": "neutral" === t,
                        "bg-graphite-100 text-graphite-0": "neutral-dark" === t,
                        "bg-violet-0 text-violet-40": "success" === t,
                        "bg-crimson-0 text-crimson-40": "danger" === t,
                        "bg-emerald-0 text-emerald-60": "active" === t,
                        "bg-amber-0 text-amber-60": "warning" === t
                    }, i),
                    children: r
                })
            }
        },
        8574: function(e, t, r) {
            r.d(t, {
                u: function() {
                    return s
                }
            });
            var n = r(52322),
                a = r(93924),
                i = r(18941);

            function s(e) {
                let {
                    subscription: t,
                    showFree: r
                } = e, [s] = (0, a.k)(), l = null == s ? void 0 : s.user.role;
                return "USER" !== l ? (0, n.jsx)(i.v, {
                    intent: "active",
                    children: l
                }) : !t && r ? (0, n.jsx)(i.v, {
                    intent: "neutral",
                    children: "Free"
                }) : (null == t ? void 0 : t.status) === "trialing" || (null == s ? void 0 : s.user.subscriptionType) === "TRIALING" ? (0, n.jsx)(i.v, {
                    intent: "success",
                    children: "Free trial"
                }) : (null == t ? void 0 : t.status) === "active" || (null == s ? void 0 : s.user.subscriptionType) === "PREMIUM" ? (0, n.jsx)(i.v, {
                    intent: "success",
                    children: "Premium"
                }) : (null == t ? void 0 : t.status) === "past_due" ? (0, n.jsx)(i.v, {
                    intent: "danger",
                    children: "Past due"
                }) : null
            }
        },
        1675: function(e, t, r) {
            r.d(t, {
                T: function() {
                    return l
                }
            });
            var n = r(52322),
                a = r(61463),
                i = r(2784),
                s = r(63126);
            let l = i.forwardRef(function(e, t) {
                var r;
                let {
                    intent: i = "neutral",
                    muted: l,
                    inverted: o,
                    noShadow: c,
                    disabled: d,
                    className: u,
                    adaptive: h,
                    ...g
                } = e;
                return (0, n.jsx)(s.z, {
                    ref: t,
                    size: "sm",
                    shape: null !== (r = g.shape) && void 0 !== r ? r : "circle",
                    intent: i,
                    disabled: d,
                    className: (0, a.Z)("font-bold normal-case first-letter:uppercase", l || "subtle" === i ? "bg-graphite-20" : d ? "bg-graphite-5" : o ? "bg-graphite-5 shadow-hard-md" : "bg-graphite-80 shadow-hard-md", c && "shadow-none", d ? [l ? "text-graphite-40" : o ? "text-graphite-20" : "text-graphite-60"] : {
                        "text-graphite-0 hover:bg-graphite-60": "neutral" === i,
                        "text-crimson-40 hover:bg-crimson-40 hover:text-graphite-0 dark:hover:bg-crimson-40": "danger" === i,
                        "bg-crimson-40 text-graphite-0": "new-danger" === i,
                        "bg-transparent": "subtle" === i,
                        "ring-1 ring-graphite-10 hover:ring-2 hover:ring-graphite-100 dark:hover:ring-graphite-0": "subtle" === i
                    }, {
                        "hover:dark:bg-custom-bg-32 bg-custom-bg-8 text-graphite-100 hover:bg-custom-bg-24 hover:ring-custom-bg-32 dark:bg-custom-bg-16 dark:text-graphite-0": !0 === h
                    }, "high-contrast" === h && {
                        "dark:bg-graphite-0 dark:text-graphite-100 dark:hover:bg-graphite-5": "neutral" === i,
                        "dark:bg-graphite-0 dark:text-crimson-40 dark:hover:text-graphite-0": "danger" === i
                    }, u),
                    ...g
                })
            })
        },
        30504: function(e, t, r) {
            r.d(t, {
                h: function() {
                    return l
                }
            });
            var n = r(52322),
                a = r(40489),
                i = r(2784),
                s = r(63126);
            let l = i.forwardRef(function(e, t) {
                let {
                    growOutside: r,
                    outlined: i = !1,
                    size: l = "sm",
                    disabled: o,
                    className: c,
                    children: d,
                    ...u
                } = e;
                return (0, n.jsx)(s.z, {
                    ref: t,
                    disabled: o,
                    className: (0, a.Z)(o ? "text-graphite-20" : "text-graphite-60 hover:text-graphite-100", c),
                    ...u,
                    children: (0, n.jsxs)("span", {
                        className: "pointer-events-none relative leading-0",
                        children: [(0, n.jsx)(s.z, {
                            as: "span",
                            size: l,
                            shape: "circle",
                            className: (0, a.Z)("pointer-events-auto pointer-area-fill-containing-block", r && "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2", !o && "hover:bg-graphite-5 group-hover/dark-btn:dark:bg-graphite-80", o && "cursor-not-allowed", i && "hover:border-2 hover:border-graphite-100 hover:bg-graphite-0")
                        }), (0, n.jsx)("span", {
                            className: (0, a.Z)(r ? "relative" : "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"),
                            children: d
                        })]
                    })
                })
            })
        },
        98644: function(e, t, r) {
            r.d(t, {
                K: function() {
                    return l
                }
            });
            var n = r(52322),
                a = r(40489),
                i = r(2784),
                s = r(63126);
            let l = i.forwardRef(function(e, t) {
                let {
                    intent: r = "neutral",
                    loading: i,
                    disabled: l,
                    className: o,
                    ...c
                } = e;
                return (0, n.jsx)(s.z, {
                    ref: t,
                    size: "md",
                    intent: r,
                    loading: i,
                    disabled: l,
                    className: (0, a.Z)("rounded-xl font-bold normal-case first-letter:uppercase", l || i ? {
                        "bg-graphite-5 text-graphite-20": "neutral" === r,
                        "bg-crimson-0 text-crimson-20": "danger" === r
                    } : {
                        "bg-graphite-100 text-graphite-0 hover:bg-graphite-60": "neutral" === r,
                        "bg-crimson-40 text-graphite-0 hover:bg-crimson-60": "danger" === r
                    }, o),
                    ...c
                })
            })
        },
        56646: function(e, t, r) {
            r.d(t, {
                k: function() {
                    return l
                }
            });
            var n = r(52322),
                a = r(40489),
                i = r(2784),
                s = r(63126);
            let l = i.forwardRef(function(e, t) {
                let {
                    intent: r = "neutral",
                    loading: i,
                    disabled: l,
                    className: o,
                    ...c
                } = e;
                return (0, n.jsx)(s.z, {
                    ref: t,
                    size: "md",
                    intent: r,
                    loading: i,
                    disabled: l,
                    className: (0, a.Z)("group rounded-xl border font-bold normal-case first-letter:uppercase", l || i ? {
                        "text-graphite-10": "neutral" === r,
                        "text-crimson-10": "danger" === r
                    } : ["ring-inset hover:border-current hover:ring-1 hover:ring-current", {
                        "text-graphite-100": "neutral" === r,
                        "text-crimson-40": "danger" === r
                    }], o),
                    ...c
                })
            })
        },
        36489: function(e, t, r) {
            r.d(t, {
                I: function() {
                    return u
                }
            });
            var n = r(52322),
                a = r(40489),
                i = r(2784),
                s = r(27403),
                l = r(31260),
                o = r(10693),
                c = r(11670),
                d = r(38965);
            let u = i.forwardRef(function(e, t) {
                let {
                    as: r,
                    size: u = "textarea" === r ? "xl" : "md",
                    icon: h,
                    rightIcon: g,
                    prefix: p,
                    readOnly: x,
                    rounded: f = "default",
                    variant: m = "legacy",
                    disabled: b,
                    loading: v,
                    error: j,
                    message: w,
                    className: N,
                    arrow: y,
                    matchUserSiteColors: k,
                    maxLength: Z,
                    counterPlacement: z = "outside",
                    onChange: C,
                    status: E,
                    statusComment: I,
                    ...R
                } = e, O = i.useId(), [P, S] = i.useState(0);
                return (0, n.jsx)("span", {
                    className: (0, a.Z)("group inline-block", {
                        "rounded-none": "none" === f,
                        rounded: "default" === f,
                        "rounded-lg": "lg" === f
                    }, N),
                    children: (0, n.jsxs)("span", {
                        className: (0, a.Z)("relative inline-flex w-full ring-inset", [k ? ["text-custom-p transition-colors", j && "ring-crimson-40", w && "ring-emerald-60", ["filled" === m && ["bg-custom-p/10 group-focus-within:ring-2", !b && [j || w ? "ring-1 hover:ring-2" : "hover:ring-2 hover:ring-custom-p/80 group-focus-within:ring-custom-p/80"]], "outline" === m && ["ring-1 group-focus-within:bg-custom-p/5 group-focus-within:ring-2", b ? "ring-custom-p/40" : [!j && !w && "ring-custom-p/40 hover:ring-custom-p/70 group-focus-within:ring-custom-p/80"]], "legacy" === m && ["bg-custom-p/5", !b && ["group-focus-within:ring-2", j || w ? "ring-1" : "group-focus-within:ring-custom-h1"]]]] : ["text-graphite-100 ring-1 ring-graphite-10", !x && !b && !j && !w && "group-focus-within:ring-graphite-100 group-hover:ring-2 group-hover:ring-graphite-40 group-hover:group-focus-within:ring-graphite-100", b && "bg-graphite-5 ring-0", !x && ["group-focus-within:ring-2", j && "!ring-crimson-40 group-hover:ring-2"], w && "!ring-emerald-60 group-hover:ring-2"]], {
                            "rounded-none": "none" === f,
                            "rounded-lg": "default" === f,
                            "rounded-xl": "lg" === f
                        }, {
                            "h-12": "md" === u,
                            "h-14": "lg" === u,
                            "h-24": "xl" === u,
                            "h-36": "1.5xl" === u,
                            "h-[200px]": "1.75xl" === u,
                            "h-72": "2xl" === u
                        }),
                        children: [h && (0, n.jsx)("span", {
                            className: (0, a.Z)("pointer-events-none absolute pl-4", k ? "text-custom-h1" : "text-graphite-20", "lg" === u ? "py-4" : "py-3"),
                            children: h
                        }), p && (0, n.jsx)("span", {
                            className: (0, a.Z)("text-graphite-20", "lg" === u ? "py-4" : "py-3", h ? "pl-12" : "pl-4"),
                            children: p
                        }), (0, n.jsx)(r || "input", {
                            ref: t,
                            readOnly: x,
                            disabled: b,
                            "aria-invalid": !!j,
                            "aria-describedby": (j || w) && O,
                            className: (0, a.Z)("min-w-0 flex-1 resize-none appearance-none rounded-none bg-transparent px-4 focus:outline-none", k ? ["placeholder:text-custom-p/50"] : [b ? "text-graphite-20 placeholder:text-graphite-20" : "placeholder:text-graphite-40"], "lg" === u ? "py-4" : "py-3", p ? "pl-0" : h && "pl-12", (j || null != v || E || g) && "pr-12", k && (x || b) && "cursor-not-allowed", y && "invalid:text-graphite-40", "overflow-hidden"),
                            style: k && {
                                fontFamily: "var(--p-family)"
                            },
                            onClick: e => {
                                x && e.currentTarget.select()
                            },
                            onChange: e => {
                                S(e.target.value.length), null == C || C(e)
                            },
                            maxLength: Z,
                            ...R
                        }), y && (0, n.jsx)("span", {
                            className: (0, a.Z)("pointer-events-none absolute bottom-0 right-0 px-4 text-graphite-60", "lg" === u ? "py-4" : "py-3"),
                            children: (0, n.jsx)(s._M, {
                                "aria-hidden": !0,
                                className: "h-6"
                            })
                        }), !j && !w && g && (0, n.jsx)("span", {
                            className: (0, a.Z)("absolute bottom-0 right-0 px-4 text-graphite-60", "lg" === u ? "py-4" : "py-3"),
                            children: g
                        }), j || w ? (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)("span", {
                                className: (0, a.Z)("pointer-events-none absolute bottom-0 px-4", y ? "right-6" : "right-0", "lg" === u ? "py-4" : "py-3", {
                                    "text-crimson-40": j,
                                    "text-emerald-60": w
                                }),
                                children: j ? (0, n.jsx)(o.Z, {
                                    "aria-hidden": !0,
                                    className: "h-6"
                                }) : w && (0, n.jsx)(l.IconCheckCircle, {
                                    "aria-hidden": !0,
                                    className: "h-6"
                                })
                            }), (0, n.jsx)(c.A, {
                                id: O,
                                style: k ? {
                                    fontFamily: "var(--p-family)"
                                } : void 0,
                                intent: j ? "error" : "success",
                                children: j || w
                            })]
                        }) : null != v ? (0, n.jsx)("span", {
                            className: (0, a.Z)("pointer-events-none absolute bottom-0 right-0 px-4 leading-0", "lg" === u ? "py-4" : "py-3"),
                            children: v ? (0, n.jsx)(d.$, {}) : (0, n.jsx)(s.Jr, {
                                className: "h-6 text-emerald-40"
                            })
                        }) : !b && E && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)("span", {
                                className: "peer absolute bottom-0 right-0 p-5",
                                children: (0, n.jsx)("div", {
                                    className: (0, a.Z)("h-2 w-2 rounded-full outline outline-4 outline-offset-0", "success" === E ? "bg-emerald-40 outline-emerald-5" : "bg-amber-40 outline-amber-5 ")
                                })
                            }), I && (0, n.jsxs)("span", {
                                className: (0, a.Z)("absolute -bottom-1 z-30 hidden translate-y-full rounded px-3 py-2.5 text-xs font-bold  tracking-[0.01em] text-graphite-0 shadow-hard-md hover:block group-focus-within:block peer-hover:block", "success" === E ? "bg-emerald-40" : "bg-amber-40"),
                                children: [I[E], (0, n.jsx)("span", {
                                    className: (0, a.Z)("absolute -top-1.5 right-[14px] h-5 w-5 rotate-45 rounded-sm", "success" === E ? "bg-emerald-40" : "bg-amber-40")
                                })]
                            })]
                        }), Z && P >= Z - 5 && (0, n.jsxs)("div", {
                            className: (0, a.Z)("absolute hidden h-8 items-center rounded bg-graphite-100 px-3 font-body text-xs font-bold  tracking-[0.01em] text-graphite-0 group-focus-within:inline-flex", {
                                "-bottom-1 right-0 translate-y-full": "outside" === z,
                                "bottom-1/2 right-2 translate-y-1/2": "inside" === z
                            }),
                            children: [P, "/", Z]
                        })]
                    })
                })
            })
        },
        84537: function(e, t, r) {
            r.d(t, {
                L: function() {
                    return l
                }
            });
            var n = r(52322),
                a = r(40489),
                i = r(2784),
                s = r(36489);
            let l = i.forwardRef(function(e, t) {
                let {
                    label: r,
                    inputAs: i = s.I,
                    error: l,
                    className: o,
                    matchUserSiteColors: c,
                    ...d
                } = e;
                return (0, n.jsx)("div", {
                    className: (0, a.Z)("group rounded-xl space-y-2", o),
                    children: (0, n.jsxs)("label", {
                        className: "flex flex-col tracking-[0.02em]",
                        children: [(0, n.jsx)("div", {
                            className: (0, a.Z)("pb-2", c ? "custom-p" : "text-xs font-bold  tracking-[0.01em]", l ? "text-crimson-40" : c ? "text-custom-p" : ["text-graphite-40 group-focus-within:text-graphite-100", d.disabled && "text-graphite-20"]),
                            children: r
                        }), (0, n.jsx)(i, {
                            ref: t,
                            error: l,
                            ...d,
                            matchUserSiteColors: c
                        })]
                    })
                })
            })
        },
        11670: function(e, t, r) {
            r.d(t, {
                A: function() {
                    return i
                }
            });
            var n = r(52322),
                a = r(61463);

            function i(e) {
                let {
                    intent: t,
                    ...r
                } = e;
                return (0, n.jsx)("div", {
                    className: (0, a.Z)("absolute -bottom-1 z-tooltip translate-y-full rounded px-3 py-2.5 text-xs font-bold  tracking-[0.01em] text-graphite-0 shadow-hard-md", {
                        "bg-crimson-40": "error" === t,
                        "bg-emerald-60": "success" === t
                    }, r.className),
                    ...r
                })
            }
        },
        40291: function(e, t, r) {
            r.d(t, {
                K: function() {
                    return s
                }
            });
            var n = r(52322),
                a = r(2784),
                i = r(36489);
            let s = a.forwardRef(function(e, t) {
                return (0, n.jsx)(i.I, {
                    as: "textarea",
                    ref: t,
                    ...e
                })
            })
        },
        10013: function(e, t, r) {
            r.d(t, {
                V: function() {
                    return l
                },
                d: function() {
                    return s
                }
            });
            var n = r(52322),
                a = r(93556);
            let i = "sections-overflowing-container",
                s = () => {
                    var e;
                    return null !== (e = document.querySelector("#".concat(i))) && void 0 !== e ? e : void 0
                };

            function l(e) {
                let {
                    pageId: t,
                    children: r
                } = e;
                return (0, n.jsx)(a.m.section, {
                    id: i,
                    className: "h-full overflow-auto",
                    layoutScroll: !0,
                    children: r
                }, t)
            }
        },
        93878: function(e, t, r) {
            r.d(t, {
                v: function() {
                    return s
                }
            });
            var n = r(52322),
                a = r(40489),
                i = r(40061);

            function s(e) {
                let {
                    "aria-orientation": t = "vertical",
                    noBorder: r,
                    noShadow: s,
                    className: l,
                    ...o
                } = e;
                return (0, n.jsx)(i.v6, {
                    value: "vertical" === t ? "horizontal" : "vertical",
                    children: (0, n.jsx)("div", {
                        role: "menu",
                        "aria-orientation": t,
                        className: (0, a.Z)("flex whitespace-nowrap rounded bg-graphite-0 p-1", {
                            "flex-col": "vertical" === t,
                            "space-x-1": "horizontal" === t
                        }, !r && "ring-1 ring-graphite-5", !s && "shadow-soft-xl", l),
                        ...o
                    })
                })
            }
        },
        58145: function(e, t, r) {
            r.d(t, {
                s: function() {
                    return c
                }
            });
            var n = r(52322),
                a = r(61463),
                i = r(40489),
                s = r(2784),
                l = r(27403),
                o = r(63126);
            let c = s.forwardRef(function(e, t) {
                let {
                    intent: r = "neutral",
                    icon: s,
                    rightIcon: c,
                    "aria-checked": d,
                    disabled: u,
                    size: h = "sm",
                    className: g,
                    children: p,
                    ...x
                } = e;
                return (0, n.jsx)(o.z, {
                    ref: t,
                    size: h,
                    intent: r,
                    "aria-checked": d,
                    disabled: u,
                    className: (0, a.Z)("relative rounded-sm focus:z-10", d ? "bg-graphite-10 font-bold" : "bg-graphite-0", u ? "text-graphite-20" : {
                        [(0, i.Z)(d ? "text-graphite-100" : "text-graphite-60 hover:bg-graphite-5")]: "neutral" === r,
                        "text-crimson-40 hover:bg-crimson-0": "danger" === r
                    }, g),
                    ...x,
                    children: (0, n.jsxs)("span", {
                        className: "flex w-full justify-between space-x-6 text-left",
                        children: [(0, n.jsxs)("span", {
                            className: (0, i.Z)("flex items-center", s && "space-x-3"),
                            children: [s && (0, n.jsx)("span", {
                                className: (0, i.Z)("danger" === r ? "text-crimson-40" : "text-graphite-20"),
                                children: s
                            }), (0, n.jsx)("span", {
                                children: p
                            })]
                        }), (0, n.jsx)("span", {
                            className: "w-6",
                            children: (0, n.jsxs)(n.Fragment, {
                                children: [d && (0, n.jsx)(l.Jr, {
                                    "aria-hidden": !0,
                                    className: "h-6"
                                }), !d && c && (0, n.jsx)("span", {
                                    children: c
                                })]
                            })
                        })]
                    })
                })
            })
        },
        48115: function(e, t, r) {
            r.d(t, {
                $N: function() {
                    return f
                },
                UZ: function() {
                    return p
                },
                Vq: function() {
                    return g
                },
                cZ: function() {
                    return m
                },
                fK: function() {
                    return x
                },
                kX: function() {
                    return b
                },
                nX: function() {
                    return d
                }
            });
            var n = r(52322),
                a = r(39479),
                i = r(61463),
                s = r(40489),
                l = r(2784),
                o = r(72907),
                c = r(30504);
            let d = {
                    onMouseUp: () => {
                        var e;
                        null === (e = document.activeElement) || void 0 === e || e.blur()
                    }
                },
                u = l.createContext({
                    onDismiss: () => {}
                }),
                h = u.Provider;

            function g(e) {
                let {
                    size: t = "intrinsic",
                    initialFocusRef: r,
                    children: o,
                    onDismiss: c,
                    className: d,
                    backdropBlur: u,
                    padding: g = "md",
                    ...p
                } = e;
                return l.useEffect(() => {
                    var e;
                    null == r || null === (e = r.current) || void 0 === e || e.focus()
                }, [r]), (0, n.jsx)(h, {
                    value: {
                        onDismiss: c
                    },
                    children: (0, n.jsx)(a.fC, {
                        defaultOpen: !0,
                        children: (0, n.jsx)(a.h_, {
                            forceMount: !0,
                            children: (0, n.jsx)("div", {
                                className: "fixed inset-0 z-[100] flex animate-fade-in justify-center",
                                children: (0, n.jsx)(a.aV, {
                                    forceMount: !0,
                                    className: (0, s.Z)("fixed inset-0 z-30 flex items-center justify-center bg-darken-regular", u && "bg-darken-mild backdrop-blur"),
                                    onClick: c,
                                    children: (0, n.jsx)("div", {
                                        "aria-hidden": !0,
                                        onClick: e => e.stopPropagation(),
                                        className: (0, s.Z)("relative z-30 my-auto min-w-0 py-6", "intrinsic" !== t && "flex-1", {
                                            "max-w-[28rem]": "sm" === t,
                                            "max-w-[42.75rem]": "md" === t,
                                            "max-w-[56.5rem]": "lg" === t,
                                            "max-w-[72.25rem]": "xl" === t
                                        }),
                                        children: (0, n.jsx)(a.VY, {
                                            forceMount: !0,
                                            "aria-labelledby": "dialog-title",
                                            className: (0, i.Z)("animate-slide-down space-y-8 rounded-lg shadow-soft-xl ring-1 ring-graphite-5 focus:outline-none", {
                                                "p-6": "md" === g
                                            }, null != d ? d : "bg-graphite-0"),
                                            ...p,
                                            children: o
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            }

            function p(e) {
                let {
                    children: t
                } = e;
                return (0, n.jsx)("div", {
                    className: "-m-6 mb-auto flex overflow-hidden rounded-t-lg",
                    children: t
                })
            }

            function x(e) {
                let {
                    children: t,
                    className: r
                } = e, {
                    onDismiss: a
                } = l.useContext(u);
                return (0, n.jsx)("header", {
                    children: (0, n.jsxs)("div", {
                        className: "flex items-start justify-between space-x-4 font-semibold",
                        children: [(0, n.jsx)("div", {
                            className: (0, i.Z)("space-y-3", r),
                            children: t
                        }), (0, n.jsx)(c.h, {
                            growOutside: !0,
                            "aria-label": "Close",
                            onClick: a,
                            children: (0, n.jsx)(o.Z, {
                                "aria-hidden": !0,
                                className: "h-6"
                            })
                        })]
                    })
                })
            }

            function f(e) {
                let {
                    children: t,
                    className: r
                } = e;
                return (0, n.jsx)("h2", {
                    id: "dialog-title",
                    className: (0, i.Z)("text-2xl font-semibold leading-none text-graphite-100", r),
                    children: t
                })
            }

            function m(e) {
                let {
                    as: t,
                    className: r,
                    ...a
                } = e;
                return (0, n.jsx)(t || "div", {
                    className: (0, i.Z)("space-y-4 text-graphite-60", r),
                    ...a
                })
            }

            function b(e) {
                let {
                    children: t,
                    separated: r,
                    className: a
                } = e;
                return (0, n.jsxs)("div", {
                    className: "space-y-6",
                    children: [r && (0, n.jsx)("span", {
                        className: "-mx-6 -mt-8 block h-px w-[calc(100%+48px)] bg-graphite-10"
                    }), (0, n.jsx)("div", {
                        className: (0, i.Z)("grid grid-cols-2 gap-6", a),
                        children: t
                    })]
                })
            }
            g.Content = m, g.Header = x, g.Title = f
        },
        16405: function(e, t, r) {
            r.d(t, {
                EC: function() {
                    return f
                },
                J2: function() {
                    return m
                }
            });
            var n = r(52322),
                a = r(75746),
                i = r(61463),
                s = r(2784),
                l = r(31260),
                o = r(30504),
                c = r(10013),
                d = r(51089),
                u = r(17293),
                h = r(40489);
            let g = {
                    name: "hideOnEsc",
                    defaultValue: !0,
                    fn(e) {
                        let {
                            hide: t
                        } = e;

                        function r(e) {
                            "Escape" === e.key && t()
                        }
                        return {
                            onShow() {
                                document.addEventListener("keydown", r)
                            },
                            onHide() {
                                document.removeEventListener("keydown", r)
                            }
                        }
                    }
                },
                p = {
                    none: [0, 0],
                    sm: [-4, 8],
                    md: [0, 12],
                    lg: [0, 16],
                    xl: [0, 24],
                    "-2xl": [0, -48]
                },
                x = s.forwardRef(function(e, t) {
                    let {
                        arrow: r,
                        arrowSize: a = "md",
                        arrowBackground: i,
                        offset: s = "md",
                        disabled: l,
                        className: o,
                        content: c,
                        ...d
                    } = e;
                    return (0, n.jsx)(u.ZP, {
                        ref: t,
                        plugins: [g],
                        popperOptions: {
                            modifiers: [{
                                name: "offset",
                                options: {
                                    offset: p[s]
                                }
                            }]
                        },
                        render: e => {
                            let {
                                "data-placement": t,
                                ...s
                            } = e;
                            return (0, n.jsxs)("div", {
                                role: "tooltip",
                                className: o,
                                ...s,
                                children: [r && (0, n.jsx)("div", {
                                    "data-popper-arrow": !0,
                                    className: (0, h.Z)("md" === a ? "tooltip-arrow" : "tooltip-arrow-lg", {
                                        "tooltip-arrow-light": "light" === i,
                                        "tooltip-arrow-dark": "dark" === i
                                    }, t && "md" === a && {
                                        "tooltip-arrow-from-top": t.startsWith("top"),
                                        "tooltip-arrow-from-right": t.startsWith("right"),
                                        "tooltip-arrow-from-bottom": t.startsWith("bottom"),
                                        "tooltip-arrow-from-left": t.startsWith("left")
                                    }, t && "lg" === a && {
                                        "tooltip-arrow-lg-from-top": t.startsWith("top"),
                                        "tooltip-arrow-lg-from-right": t.startsWith("right"),
                                        "tooltip-arrow-lg-from-bottom": t.startsWith("bottom"),
                                        "tooltip-arrow-lg-from-left": t.startsWith("left")
                                    })
                                }), c]
                            })
                        },
                        ...d
                    })
                });

            function f(e) {
                let {
                    visible: t,
                    ...r
                } = e;
                return (0, n.jsx)(x, {
                    interactive: !0,
                    visible: t,
                    appendTo: d.Jl ? document.body : "parent",
                    zIndex: 20,
                    trigger: null == t ? "click" : void 0,
                    className: "pointer-events-auto animate-slide-down",
                    ...r
                })
            }

            function m(e) {
                return (0, n.jsx)(a.fC, { ...e
                })
            }
            let b = s.forwardRef((e, t) => (0, n.jsx)(a.xz, {
                ref: t,
                ...e
            }));

            function v(e) {
                let {
                    children: t,
                    ...r
                } = e;
                if (!d.Jl) return null;
                let i = (0, c.d)();
                return i ? (0, n.jsx)(a.h_, {
                    container: i,
                    ...r,
                    children: t
                }) : null
            }

            function j(e) {
                let {
                    title: t,
                    primitive: r,
                    onClose: i
                } = e, s = (0, n.jsx)(o.h, {
                    growOutside: !0,
                    onClick: i,
                    "aria-label": "Close",
                    children: (0, n.jsx)(l.IconX, {
                        "aria-hidden": !0,
                        className: "h-6"
                    })
                });
                return (0, n.jsxs)("div", {
                    className: "flex items-start justify-between space-x-4",
                    children: [(0, n.jsx)("h3", {
                        className: "text-2xl font-semibold leading-none text-graphite-100",
                        children: t
                    }), r ? s : (0, n.jsx)(a.x8, {
                        asChild: !0,
                        children: s
                    })]
                })
            }
            m.Header = j, m.Trigger = b, m.Portal = v, m.Content = function(e) {
                let {
                    title: t,
                    children: r,
                    portal: l,
                    ...o
                } = e, c = l ? v : s.Fragment;
                return o.asChild ? (0, n.jsx)(c, {
                    children: (0, n.jsx)(a.VY, {
                        align: "start",
                        sideOffset: 12,
                        asChild: !0,
                        ...o,
                        className: "animate-slide-down",
                        children: r
                    })
                }) : (0, n.jsx)(c, {
                    children: (0, n.jsxs)(a.VY, {
                        align: "start",
                        sideOffset: 12,
                        ...o,
                        className: (0, i.Z)("z-popover animate-slide-down", !o.asChild && "w-90 space-y-4 rounded-lg bg-graphite-0 p-6 shadow-soft-xl", o.className),
                        children: [t && !o.asChild && (0, n.jsx)(j, {
                            title: t
                        }), r]
                    })
                })
            }
        },
        94854: function(e, t, r) {
            r.d(t, {
                gh: function() {
                    return o
                },
                u: function() {
                    return c
                }
            });
            var n = r(52322),
                a = r(37921),
                i = r(61463),
                s = r(40489),
                l = r(2784);
            let o = l.createContext({}).Provider,
                c = l.forwardRef(function(e, t) {
                    let {
                        children: r,
                        arrow: l = !0,
                        intent: o = "neutral",
                        adaptive: c,
                        disabled: d,
                        content: u,
                        placement: h = "bottom",
                        className: g,
                        disableHoverableContent: p = !0,
                        ...x
                    } = e;
                    return !u && r ? (0, n.jsx)(n.Fragment, {
                        children: r
                    }) : (0, n.jsx)(a.zt, {
                        delayDuration: 0,
                        children: (0, n.jsxs)(a.fC, {
                            disableHoverableContent: p,
                            ...x,
                            children: [(0, n.jsx)(a.xz, {
                                ref: t,
                                asChild: !0,
                                children: r
                            }), (0, n.jsx)(a.h_, {
                                children: (0, n.jsxs)(a.VY, {
                                    side: h,
                                    sideOffset: 10,
                                    collisionPadding: {
                                        right: 10
                                    },
                                    className: (0, i.Z)("z-tooltip flex h-auto max-w-[16.25rem] flex-col justify-center rounded px-3 py-1.5 text-center text-xs font-medium  tracking-[0.01em] shadow-hard-md transition-colors motion-reduce:transition-none", d ? "bg-graphite-10 text-graphite-20" : [{
                                        "text-graphite-0": !c,
                                        "bg-graphite-60": "neutral" === o,
                                        "bg-graphite-80": "neutral-darker" === o,
                                        "bg-violet-40": "primary" === o,
                                        "bg-crimson-40 text-graphite-0 dark:text-graphite-0": "danger" === o,
                                        "bg-amber-60 text-graphite-0": "warning" === o,
                                        "dark:bg-graphite-5 dark:text-graphite-100": "high-contrast" === c && "neutral" === o
                                    }], {
                                        "text-graphite-100 dark:text-graphite-0": !0 === c,
                                        "text-graphite-0 dark:text-graphite-100": "high-contrast" === c && "neutral" === o
                                    }, !0 === c && "bg-custom-bg-32", g),
                                    children: [u, l && (0, n.jsx)(a.Eh, {
                                        className: (0, s.Z)({
                                            "fill-graphite-60": "neutral" === o,
                                            "fill-graphite-80": "neutral-darker" === o,
                                            "fill-violet-40": "primary" === o,
                                            "fill-crimson-40 dark:text-graphite-0": "danger" === o,
                                            "fill-amber-60": "warning" === o,
                                            "dark:fill-graphite-5 dark:text-graphite-100": "high-contrast" === c && "neutral" === o,
                                            "!fill-custom-bg-32": !0 === c
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                })
        },
        86408: function(e, t, r) {
            r.d(t, {
                h: function() {
                    return i
                }
            });
            var n = r(95089),
                a = r(2784);

            function i(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    [r, i] = a.useState(null);
                return (n.Jl ? a.useLayoutEffect : a.useEffect)(() => {
                    let t = "string" == typeof e ? document.querySelector(e) : e.current;

                    function r() {
                        var e;
                        i(null !== (e = null == t ? void 0 : t.getBoundingClientRect()) && void 0 !== e ? e : null)
                    }
                    return r(), window.addEventListener("resize", r), () => window.removeEventListener("resize", r)
                }, [e, ...t]), r
            }
        },
        21014: function(e, t, r) {
            r.d(t, {
                b: function() {
                    return n
                }
            });

            function n(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return e ? e.name ? e.name : e.givenName && e.familyName ? "".concat(e.givenName.trim(), " ").concat(e.familyName.trim()) : t : t
            }
        }
    }
]);