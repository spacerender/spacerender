try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c5e2a22d-62b1-4106-8056-26831f92c51a", e._sentryDebugIdIdentifier = "sentry-dbid-c5e2a22d-62b1-4106-8056-26831f92c51a")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [550], {
        11734: function(e, t, r) {
            r.d(t, {
                b: function() {
                    return o
                }
            });
            var i = r(52322),
                n = r(40489),
                l = r(10693),
                a = r(87708);
            let s = {
                neutral: a.Z,
                primary: a.Z,
                danger: l.Z,
                warning: l.Z,
                emergency: l.Z
            };

            function o(e) {
                let {
                    intent: t = "neutral",
                    className: r,
                    children: l,
                    ...a
                } = e, o = s[t];
                return (0, i.jsx)("div", {
                    role: "alert",
                    className: (0, n.Z)("rounded-sm border-l-2 font-bold  tracking-[0.01em] leading-snug", {
                        "border-graphite-100 bg-graphite-5 text-graphite-100": "neutral" === t,
                        "border-violet-40 bg-violet-0 text-violet-40": "primary" === t,
                        "border-crimson-40 bg-crimson-0 text-crimson-40": "danger" === t,
                        "border-amber-60 bg-amber-0 text-amber-60": "warning" === t
                    }, r),
                    ...a,
                    children: (0, i.jsxs)("div", {
                        className: "-ml-0.5 flex space-x-2 px-4 py-3",
                        children: [(0, i.jsx)(o, {
                            "aria-hidden": !0,
                            className: "h-6 flex-none"
                        }), (0, i.jsx)("div", {
                            className: "py-px",
                            children: l
                        })]
                    })
                })
            }
        },
        13045: function(e, t, r) {
            r.d(t, {
                $: function() {
                    return c
                }
            });
            var i = r(52322),
                n = r(61463),
                l = r(40489),
                a = r(2784),
                s = r(22622),
                o = r(18941),
                d = r(63126);
            let c = a.forwardRef(function(e, t) {
                let {
                    icon: r,
                    "aria-expanded": a,
                    disabled: c,
                    dark: u,
                    mobile: h,
                    shape: p,
                    className: x,
                    isNew: g = !1,
                    children: m,
                    ...f
                } = e;
                return (0, i.jsxs)(d.z, {
                    ref: t,
                    size: "xl",
                    shape: p,
                    "aria-expanded": a,
                    disabled: c,
                    className: (0, n.Z)("h-11 rounded font-semibold tracking-[0.01em]", u ? c ? "text-graphite-60" : [a ? "bg-graphite-80 text-graphite-0" : "text-graphite-20 hover:text-graphite-0"] : a ? "bg-graphite-5 text-graphite-100" : "text-graphite-40 hover:text-graphite-100", x),
                    ...f,
                    children: [(0, i.jsx)("div", {
                        className: (0, n.Z)(!h && r && "hidden laptop:inline"),
                        children: (0, i.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [(0, i.jsx)(s.f, {
                                icon: r,
                                children: m
                            }), g && (0, i.jsx)(o.v, {
                                intent: "neutral",
                                children: "New"
                            })]
                        })
                    }), (0, i.jsx)("div", {
                        className: (0, l.Z)(h ? "hidden" : "laptop:hidden"),
                        children: r
                    })]
                })
            })
        },
        54999: function(e, t, r) {
            r.d(t, {
                A: function() {
                    return a
                }
            });
            var i = r(52322),
                n = r(61463),
                l = r(4730);

            function a(e) {
                let {
                    label: t,
                    labelPlacement: r = "left",
                    className: a,
                    ...s
                } = e, {
                    disabled: o,
                    checked: d
                } = s;
                return (0, i.jsxs)("label", {
                    className: (0, n.Z)("flex items-center justify-between font-bold", "right" === r && "flex-row-reverse gap-x-4", o ? "text-graphite-10" : [d ? "text-graphite-100" : "text-graphite-40"], a),
                    children: [(0, i.jsx)("div", {
                        children: t
                    }), (0, i.jsx)(l.Z, { ...s
                    })]
                })
            }
        },
        22622: function(e, t, r) {
            r.d(t, {
                f: function() {
                    return l
                }
            });
            var i = r(52322),
                n = r(61463);

            function l(e) {
                let {
                    icon: t,
                    reverse: r,
                    unpadded: l,
                    children: a,
                    className: s
                } = e;
                return (0, i.jsxs)("span", {
                    className: (0, n.Z)("flex items-center space-x-2", r && "flex-row-reverse space-x-reverse", s),
                    children: [(0, i.jsx)("span", {
                        "aria-hidden": !0,
                        className: (0, n.Z)(!l && (r ? "-mr-1.5" : "-ml-1.5")),
                        children: t
                    }), (0, i.jsx)("span", {
                        children: a
                    })]
                })
            }
        },
        68164: function(e, t, r) {
            r.d(t, {
                S: function() {
                    return s
                },
                r: function() {
                    return a
                }
            });
            var i = r(52322),
                n = r(40489),
                l = r(2784);
            let a = {
                large: 2,
                medium: 3,
                small: 4
            };

            function s(e) {
                var t;
                let {
                    children: r,
                    sizeOfImages: s = "large",
                    sizeOfGap: o,
                    align: d = "top",
                    editor: c
                } = e, u = null !== (t = l.Children.map(r, e => (0, i.jsx)("div", {
                    children: e
                }))) && void 0 !== t ? t : [], h = a[s], p = u.filter((e, t) => t % h == 0), x = u.filter((e, t) => t % h == 1), g = u.filter((e, t) => t % h == 2), m = u.filter((e, t) => t % h == 3), f = e => {
                    let {
                        children: t
                    } = e;
                    return (0, i.jsx)("div", {
                        className: (0, n.Z)({
                            "space-y-12": "md" === o && !c,
                            "space-y-6": "sm" === o || "md" === o && c,
                            "space-y-4": "xs" === o
                        }),
                        children: t
                    })
                };
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        className: (0, n.Z)("@tablet:hidden", {
                            "space-y-12": "md" === o && !c,
                            "space-y-6": "sm" === o || "md" === o && c,
                            "space-y-4": "xs" === o
                        }),
                        children: u
                    }), (0, i.jsxs)("div", {
                        className: (0, n.Z)("hidden @tablet:grid", {
                            "grid-cols-2": "large" === s,
                            "grid-cols-3": "medium" === s,
                            "grid-cols-3 @laptop:grid-cols-4": "small" === s
                        }, {
                            "gap-12": "md" === o,
                            "gap-6": "sm" === o,
                            "gap-4": "xs" === o
                        }, "center" === d && "items-center"),
                        children: [(0, i.jsx)(f, {
                            children: p
                        }), (0, i.jsx)(f, {
                            children: x
                        }), ("medium" === s || "small" === s) && (0, i.jsx)(f, {
                            children: g
                        }), "small" === s && (0, i.jsx)(f, {
                            children: m
                        })]
                    })]
                })
            }
        },
        82905: function(e, t, r) {
            r.d(t, {
                J: function() {
                    return n
                },
                K: function() {
                    return l
                }
            });
            var i = r(2784);
            let n = i.createContext({
                setShowSettings: () => {}
            });

            function l() {
                return i.useContext(n)
            }
        },
        32433: function(e, t, r) {
            r.d(t, {
                r: function() {
                    return u
                },
                x: function() {
                    return c
                }
            });
            var i = r(52322),
                n = r(64266),
                l = r(61463),
                a = r(40489),
                s = r(93556),
                o = r(2784),
                d = r(16405);

            function c(e) {
                let {
                    children: t,
                    label: r,
                    description: n,
                    disabled: l,
                    customFormChild: s = !1,
                    text: o
                } = e;
                return (0, i.jsxs)("div", {
                    className: "space-y-3",
                    children: [r && (0, i.jsx)("div", {
                        className: (0, a.Z)("text-xs font-semibold tracking-[0.02em]", l ? "text-graphite-20" : "text-graphite-40"),
                        children: r
                    }), (0, i.jsxs)(s ? "div" : "label", {
                        className: "flex w-full items-center justify-between",
                        children: [o && (0, i.jsx)("div", {
                            className: (0, a.Z)("flex-1 tracking-[0.02em]", l ? "text-graphite-20" : "text-graphite-100"),
                            children: o
                        }), t]
                    }), n && (0, i.jsx)("p", {
                        className: (0, a.Z)("tracking-[0.01em]", l ? "text-graphite-20" : "text-graphite-40"),
                        children: n
                    })]
                })
            }

            function u(e) {
                var t, r, c;
                let {
                    children: u,
                    title: h = "Section settings",
                    defaultTab: p,
                    onClose: x
                } = e, g = null !== (c = null === (t = o.Children.map(u, e => o.isValidElement(e) && e.props.tab ? e.props : null)) || void 0 === t ? void 0 : t.filter(Boolean)) && void 0 !== c ? c : [], [m, f] = (0, o.useState)(null != p ? p : null === (r = g[0]) || void 0 === r ? void 0 : r.tab), v = g.find(e => e.tab === m), b = g.join("_");
                return (0, i.jsxs)(n.fC, {
                    defaultValue: m,
                    onValueChange: f,
                    children: [(0, i.jsxs)("div", {
                        className: "space-y-6",
                        children: [h && (0, i.jsx)("div", {
                            className: "px-6 pt-6",
                            children: (0, i.jsx)(d.J2.Header, {
                                primitive: !!x,
                                title: h,
                                onClose: x
                            })
                        }), (0, i.jsxs)("div", {
                            children: [g.length > 1 && (0, i.jsx)(n.aV, {
                                className: "space-x-6 border-b border-graphite-10 px-6",
                                children: g.map(e => {
                                    let {
                                        tab: t,
                                        title: r
                                    } = e;
                                    return (0, i.jsxs)(n.xz, {
                                        value: t,
                                        className: (0, a.Z)("relative -mb-px leading-[44px] first-letter:capitalize", t === m ? "font-bold text-graphite-100" : "text-graphite-60"),
                                        children: [null != r ? r : t, t === m && (0, i.jsx)(s.m.div, {
                                            layoutScroll: !0,
                                            layoutId: b,
                                            className: "absolute inset-x-0 bottom-0 h-[2px] rounded-t-[2px] bg-graphite-100"
                                        })]
                                    }, t)
                                })
                            }), (0, i.jsx)("div", {
                                className: (0, l.Z)("overflow-y-scroll p-6 hide-scrollbar", g.length > 1 ? "max-h-[calc(100vh-228px)]" : "max-h-[calc(100vh-184px)] space-y-6 pt-0"),
                                children: u
                            })]
                        })]
                    }), (null == v ? void 0 : v.description) && (0, i.jsx)("div", {
                        className: "border-t border-graphite-10 p-6 text-graphite-40",
                        children: null == v ? void 0 : v.description
                    })]
                })
            }
        },
        68486: function(e, t, r) {
            r.d(t, {
                Zr: function() {
                    return z
                },
                gR: function() {
                    return v
                }
            });
            var i = r(52322),
                n = r(82851),
                l = r(61463),
                a = r(88241),
                s = r(93556),
                o = r(27403),
                d = r(31260),
                c = r(32433);

            function u(e) {
                let {
                    onClick: t,
                    children: r
                } = e;
                return (0, i.jsx)("button", {
                    type: "button",
                    onClick: t,
                    className: "px-2.5 transition-all active:scale-90",
                    children: r
                })
            }
            var h = r(15311),
                p = r(2784),
                x = r(36489);
            let g = p.forwardRef((e, t) => {
                let {
                    description: r,
                    onChange: n,
                    onValueChange: l,
                    inputAs: a = x.I,
                    ...s
                } = e;
                return (0, i.jsx)(c.x, {
                    disabled: s.disabled,
                    label: s.label,
                    description: r,
                    children: (0, i.jsx)(a, { ...s,
                        ref: t,
                        onChange: e => {
                            null == n || n(e), null == l || l(e.target.value)
                        },
                        className: "flex w-full max-w-[312px]"
                    })
                })
            });
            var m = r(40489);

            function f(e) {
                var t;
                let {
                    children: r,
                    onChange: n,
                    value: l,
                    id: a,
                    childClassName: s,
                    ...o
                } = e;
                return (0, i.jsx)(i.Fragment, {
                    children: p.Children.map(null !== (t = p.Children.map(r, e => {
                        if (!p.isValidElement(e) || !e) throw Error("invalid child");
                        return e
                    })) && void 0 !== t ? t : [], e => (0, i.jsx)("div", {
                        "aria-hidden": !0,
                        role: "button",
                        onClick: () => {
                            o.disabled || null == n || n(e.props.value)
                        },
                        className: s,
                        children: p.cloneElement(e, {
                            active: e.props.value === l,
                            parentId: a,
                            ...o
                        })
                    }))
                })
            }

            function v(e) {
                let {
                    children: t,
                    label: r,
                    ...n
                } = e, l = p.Children.count(t);
                return (0, i.jsx)(c.x, {
                    label: r,
                    children: (0, i.jsx)("div", {
                        className: (0, m.Z)("grid w-full gap-3", {
                            "grid-cols-3": l >= 3,
                            "grid-cols-2": 2 === l
                        }),
                        children: (0, i.jsx)(f, { ...n,
                            children: t
                        })
                    })
                })
            }
            v.Item = function(e) {
                let {
                    active: t,
                    image: r,
                    children: n,
                    value: l,
                    size: a = "md",
                    square: s = !1
                } = e;
                return (0, i.jsxs)("div", {
                    className: "space-y-3",
                    "aria-label": l,
                    children: [(0, i.jsx)("div", {
                        className: (0, m.Z)("flex h-24 items-center justify-center overflow-hidden rounded transition-all", t ? "ring-2 ring-graphite-100" : "ring-1 ring-graphite-10 hover:ring-2 hover:ring-graphite-40", "lg" === a && "w-full max-w-[150px]", s && "size-24"),
                        children: (0, i.jsx)("div", {
                            className: (0, m.Z)("md" === a && "w-24"),
                            children: r
                        })
                    }), n && (0, i.jsx)("h3", {
                        className: (0, m.Z)("text-center text-base first-letter:capitalize", t ? "font-semibold text-graphite-100" : "text-graphite-40"),
                        children: n
                    })]
                })
            };
            var b = r(75746),
                j = r(82905),
                N = r(86408);

            function y(e) {
                var t, r, n;
                let {
                    children: a,
                    value: s,
                    onChange: d,
                    label: u,
                    size: h = "lg",
                    container: x
                } = e, [g, m] = (0, p.useState)(!1), v = (0, p.useRef)(null), y = (0, N.h)(v), {
                    ref: w
                } = (0, j.K)(), C = (null !== (t = p.Children.map(a, e => {
                    if (!p.isValidElement(e)) throw Error("invalid child");
                    return e
                })) && void 0 !== t ? t : []).find(e => {
                    var t;
                    return null !== (t = e.props.active) && void 0 !== t ? t : e.props.value === s
                });
                if (!C) throw Error("active prop is missing");
                return (0, i.jsx)(b.fC, {
                    open: g,
                    onOpenChange: m,
                    children: (0, i.jsxs)("div", {
                        className: "relative w-full",
                        children: [(0, i.jsxs)(c.x, {
                            label: u,
                            children: [(0, i.jsx)("div", {
                                "aria-hidden": !0,
                                onClick: () => m(!1),
                                className: (0, l.Z)("absolute inset-0", g ? "pointer-events-auto " : "pointer-events-none")
                            }), (0, i.jsx)(b.ee, {}), (0, i.jsx)(b.xz, {
                                asChild: !0,
                                children: (0, i.jsxs)("div", {
                                    "aria-hidden": !0,
                                    role: "button",
                                    ref: v,
                                    onClick: () => m(!g),
                                    className: (0, l.Z)("relative w-full cursor-pointer bg-graphite-5 transition-all active:bg-graphite-10", {
                                        "rounded-lg p-4 ": "lg" === h,
                                        "rounded p-2": "md" === h
                                    }),
                                    children: [p.cloneElement(C, { ...null == C ? void 0 : C.props,
                                        size: h
                                    }), (0, i.jsx)(o._M, {
                                        className: "absolute right-4 top-1/2 h-6 -translate-y-1/2 text-graphite-60"
                                    })]
                                })
                            })]
                        }), (0, i.jsx)(b.h_, {
                            container: null !== (r = null != x ? x : null == w ? void 0 : w.current) && void 0 !== r ? r : void 0,
                            children: (0, i.jsx)(b.VY, {
                                asChild: !0,
                                sideOffset: -64,
                                align: "start",
                                side: "bottom",
                                children: (0, i.jsx)("div", {
                                    style: {
                                        width: "".concat(null !== (n = null == y ? void 0 : y.width) && void 0 !== n ? n : 0, "px")
                                    },
                                    className: (0, l.Z)("inset-x-0 top-0 z-[102] px-2 data-[side=bottom]:animate-slide-down data-[side=top]:animate-slide-up", {
                                        "data-[side=top]:pt-2": "md" === h,
                                        "data-[side=top]:pt-12": "lg" === h
                                    }, g ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"),
                                    children: (0, i.jsx)("div", {
                                        className: (0, l.Z)("h-auto w-full rounded bg-graphite-0 p-1 shadow-soft-md", "md" === h && "space-y-1", "lg" === h && "max-h-58 overflow-y-scroll"),
                                        children: (0, i.jsx)(f, {
                                            childClassName: (0, l.Z)("flex-1 rounded-sm hover:bg-graphite-5", {
                                                "py-2 pl-2 pr-4": "md" === h,
                                                "p-4": "lg" === h
                                            }),
                                            value: s,
                                            onChange: e => {
                                                null == d || d(e), m(!1)
                                            },
                                            size: h,
                                            children: a
                                        })
                                    })
                                })
                            })
                        })]
                    })
                })
            }

            function w(e) {
                let {
                    children: t,
                    ...r
                } = e;
                return (0, i.jsx)("div", {
                    className: "space-y-3",
                    children: (0, i.jsx)(f, { ...r,
                        children: t
                    })
                })
            }
            y.Item = function(e) {
                let {
                    children: t,
                    image: r,
                    active: n,
                    size: a = "lg"
                } = e;
                return (0, i.jsxs)("div", {
                    className: "flex items-center gap-4",
                    children: [(0, i.jsx)("div", {
                        className: (0, l.Z)("overflow-hidden rounded-sm shadow-soft-sm", {
                            "h-16 w-24": "lg" === a,
                            "h-10": "md" === a
                        }),
                        children: r
                    }), (0, i.jsx)("span", {
                        className: (0, l.Z)("flex-1", n ? "font-semibold text-graphite-100" : "text-graphite-40"),
                        children: t
                    }), n && (0, i.jsx)(o.Jr, {
                        className: "h-6 w-6 text-graphite-60"
                    })]
                })
            }, w.Item = function(e) {
                let {
                    active: t,
                    children: r,
                    trailing: n
                } = e;
                return (0, i.jsxs)("div", {
                    className: (0, m.Z)("flex cursor-pointer items-center rounded px-6 py-4 ring-1 ring-graphite-10 hover:ring-2", t && "ring-2 ring-graphite-100"),
                    children: [(0, i.jsx)("div", {
                        className: (0, m.Z)("flex-1 font-medium text-graphite-40", t && "text-graphite-100"),
                        children: r
                    }), n]
                })
            };
            var C = r(23094),
                I = r(88366),
                Z = r(66548),
                E = r(28316),
                _ = r(1675),
                O = r(10963);
            let T = p.forwardRef((e, t) => {
                let {
                    isDragging: r,
                    overlay: n,
                    listeners: l,
                    style: a,
                    index: s,
                    imageSrc: o,
                    attributes: c
                } = e;
                return (0, i.jsxs)("div", {
                    className: (0, m.Z)("group relative h-24 w-24 select-none rounded p-1 ring-inset", r ? "bg-graphite-5" : "bg-graphite-0", n ? "ring-2 ring-graphite-100" : "ring-1 ring-graphite-10 hover:ring-graphite-40"),
                    ref: t,
                    style: a,
                    ...c,
                    children: [(0, i.jsx)("div", {
                        className: "relative h-full w-full",
                        children: !r && (0, i.jsx)(O.N, {
                            layout: "fill",
                            objectFit: "cover",
                            src: o
                        })
                    }), (0, i.jsx)("div", {
                        className: "absolute inset-1 hidden bg-graphite-0 opacity-50 group-hover:block"
                    }), (0, i.jsx)("div", {
                        className: (0, m.Z)("absolute left-1/2 top-1/2 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full  text-xs font-semibold ring-1 ring-inset ring-graphite-10", r ? "bg-graphite-5 text-graphite-20" : "bg-graphite-0 text-graphite-100"),
                        children: s
                    }), (0, i.jsx)("div", {
                        className: "absolute inset-0 hidden items-center justify-center group-hover:flex",
                        children: (0, i.jsx)(_.T, {
                            className: n ? "!cursor-grabbing" : "!cursor-grab",
                            size: "xs",
                            ...l,
                            children: (0, i.jsx)(d.IconDragBars, {
                                className: "h-6"
                            })
                        })
                    })]
                })
            });

            function S(e) {
                let {
                    index: t,
                    imageSrc: r,
                    overlay: l
                } = e, {
                    attributes: a,
                    listeners: s,
                    setNodeRef: o,
                    transform: d,
                    transition: c,
                    isDragging: u
                } = (0, Z.nB)({
                    id: r
                });
                return (0, i.jsx)(T, {
                    style: {
                        transform: n.ux.Transform.toString(d),
                        transition: c
                    },
                    overlay: l,
                    listeners: s,
                    imageSrc: r,
                    ref: o,
                    index: t,
                    isDragging: u,
                    attributes: a
                }, r)
            }

            function R(e) {
                let {
                    children: t,
                    ...r
                } = e;
                return (0, i.jsx)(c.x, { ...r,
                    children: (0, i.jsx)("div", {
                        className: "flex w-full gap-1 rounded bg-graphite-5 p-1",
                        children: (0, i.jsx)(f, { ...r,
                            childClassName: "flex-1",
                            children: t
                        })
                    })
                })
            }
            R.Item = function(e) {
                let {
                    children: t,
                    parentId: r,
                    active: n,
                    disabled: l
                } = e;
                return (0, i.jsxs)(s.m.div, {
                    className: "group relative flex cursor-pointer items-center justify-center py-1",
                    children: [n && (0, i.jsx)(s.m.div, {
                        layoutId: r,
                        layoutScroll: !0,
                        className: (0, m.Z)("absolute inset-0 rounded bg-graphite-0", !l && "shadow-hard-md transition-shadow group-hover:shadow-hard-xl")
                    }), (0, i.jsx)("span", {
                        className: (0, m.Z)("relative z-10 w-full rounded text-center text-base font-semibold transition-colors", l ? "text-graphite-10" : n ? "text-graphite-100" : "text-graphite-40 group-hover:text-graphite-100"),
                        children: t
                    })]
                })
            };
            var k = r(64266),
                D = r(4730);

            function z(e) {
                return (0, i.jsx)(c.r, { ...e
                })
            }
            z.Root = c.r, z.Tab = function(e) {
                let {
                    tab: t,
                    children: r
                } = e;
                return (0, i.jsx)(k.VY, {
                    className: "space-y-6",
                    value: t,
                    children: r
                })
            }, z.Switch = R, z.Dropdown = y, z.ChoiceGrid = v, z.Reorder = function(e) {
                let {
                    images: t,
                    onChange: r,
                    label: n
                } = e, [l, a] = (0, p.useState)(t), [s, o] = p.useState(null), d = (0, C.Dy)((0, C.VT)(C.MA), (0, C.VT)(C.Lg, {
                    coordinateGetter: Z.is
                }));
                return (0, i.jsx)(c.x, {
                    label: n,
                    children: (0, i.jsx)("div", {
                        className: "grid w-max grid-cols-3 gap-3",
                        children: (0, i.jsxs)(C.LB, {
                            sensors: d,
                            collisionDetection: C.pE,
                            modifiers: [I.lv],
                            onDragStart: e => {
                                let {
                                    active: t
                                } = e;
                                t && o(t.id)
                            },
                            onDragCancel: () => {
                                o(null)
                            },
                            onDragEnd: e => {
                                let {
                                    active: i,
                                    over: n
                                } = e;
                                if (i && n) {
                                    let e = t.findIndex(e => e.src === i.id),
                                        l = t.findIndex(e => e.src === n.id);
                                    if (e !== l) {
                                        let i = (0, Z.Rp)(t, e, l);
                                        a(i), r(i)
                                    }
                                }
                                o(null)
                            },
                            children: [(0, i.jsx)(Z.Fo, {
                                items: l.map(e => e.src),
                                strategy: Z.U2,
                                children: l.map((e, t) => (0, i.jsx)(S, {
                                    index: t + 1,
                                    imageSrc: e.src,
                                    overlay: !1
                                }, e.src))
                            }), (0, E.createPortal)((0, i.jsx)(C.y9, {
                                children: s ? (0, i.jsx)(T, {
                                    imageSrc: l.find(e => e.src === s).src,
                                    overlay: !0,
                                    index: l.findIndex(e => e.src === s) + 1
                                }) : null
                            }), document.body)]
                        })
                    })
                })
            }, z.List = w, z.Text = g, z.Toggle = function(e) {
                let { ...t
                } = e;
                return (0, i.jsx)("div", {
                    className: "last-of-type:border-b last-of-type:border-graphite-10 last-of-type:pb-3",
                    children: (0, i.jsx)(c.x, { ...t,
                        children: (0, i.jsx)(D.Z, { ...t
                        })
                    })
                })
            }, z.Slider = function(e) {
                let {
                    onChange: t,
                    onValueCommit: r,
                    value: n,
                    min: l,
                    max: a,
                    step: s,
                    minIcon: o,
                    maxIcon: d,
                    ...u
                } = e, [x, g] = p.useState(n);
                return (0, i.jsx)(c.x, { ...u,
                    children: (0, i.jsxs)("div", {
                        className: "flex grow items-center justify-center space-x-4 border-b border-graphite-10 pb-4",
                        children: [o, (0, i.jsxs)(h.fC, {
                            value: [n],
                            min: l,
                            max: a,
                            step: s,
                            onValueChange: e => {
                                let [r] = e;
                                g(r), null == t || t(r)
                            },
                            onValueCommit: () => {
                                null == r || r(x)
                            },
                            onLostPointerCapture: () => {
                                null == r || r(x)
                            },
                            className: "relative flex h-[30px] grow touch-none select-none items-center",
                            orientation: "horizontal",
                            children: [(0, i.jsx)(h.fQ, {
                                className: "relative h-0.5 grow bg-graphite-10",
                                children: (0, i.jsx)(h.e6, {
                                    className: "absolute h-full bg-graphite-100"
                                })
                            }), (0, i.jsx)(h.bU, {
                                className: "block h-6 w-6 cursor-grab rounded-full border border-graphite-5 bg-graphite-0 shadow-[0_2px_6px_rgba(18,17,24,0.2)] hover:shadow-[0_4px_8px_rgba(18,17,24,0.24)] active:cursor-grabbing active:shadow-[0_4px_8px_rgba(18,17,24,0.24)]"
                            })]
                        }), d]
                    })
                })
            }, z.Counter = function(e) {
                let {
                    value: t = 0,
                    onChange: r,
                    min: h = Number.NEGATIVE_INFINITY,
                    max: p = Number.POSITIVE_INFINITY,
                    ...x
                } = e, g = (0, n.D9)(t), m = (null != g ? g : 0) > t ? -1 : 1, f = e => () => {
                    let i = "increment" === e ? t + 1 : t - 1;
                    null == r || r(Math.max(Math.min(i, p), h))
                };
                return (0, i.jsx)("div", {
                    className: "last-of-type:border-b last-of-type:border-graphite-10 last-of-type:pb-3",
                    children: (0, i.jsx)(c.x, { ...x,
                        children: (0, i.jsxs)("div", {
                            className: "inline-flex rounded bg-graphite-5 p-1 text-graphite-60",
                            children: [(0, i.jsx)(u, {
                                onClick: f("decrement"),
                                children: (0, i.jsx)(o.WF, {
                                    className: (0, l.Z)("h-6", t === h && "cursor-not-allowed text-graphite-20")
                                })
                            }), (0, i.jsx)("div", {
                                className: "relative h-8 min-w-10 cursor-default overflow-hidden rounded-sm bg-graphite-0 px-2.5 font-semibold text-graphite-100 shadow-hard-md",
                                children: (0, i.jsx)(a.M, {
                                    initial: !1,
                                    mode: "popLayout",
                                    custom: m,
                                    children: (0, i.jsx)(s.m.span, {
                                        custom: m,
                                        variants: {
                                            initial: e => ({
                                                y: 24 * e,
                                                scaleY: .4
                                            }),
                                            target: {
                                                y: 0,
                                                scaleY: 1
                                            },
                                            exit: e => ({
                                                y: -(24 * e),
                                                scaleY: .4
                                            })
                                        },
                                        initial: "initial",
                                        animate: "target",
                                        exit: "exit",
                                        transition: {
                                            duration: .1
                                        },
                                        className: "absolute inset-0 flex h-full w-full items-center justify-center",
                                        children: t
                                    }, "counter-".concat(t))
                                })
                            }), (0, i.jsx)(u, {
                                onClick: f("increment"),
                                children: (0, i.jsx)(d.IconPlus, {
                                    className: (0, l.Z)("h-6", t === p && "cursor-not-allowed text-graphite-20")
                                })
                            })]
                        })
                    })
                })
            }, z.Group = function(e) {
                let {
                    children: t,
                    ...r
                } = e;
                return (0, i.jsx)(c.x, { ...r,
                    children: (0, i.jsx)("div", {
                        className: "w-full space-y-3",
                        children: t
                    })
                })
            }
        },
        57513: function(e, t, r) {
            r.d(t, {
                Ai: function() {
                    return o
                },
                KW: function() {
                    return p
                },
                Kj: function() {
                    return g
                },
                Rn: function() {
                    return h
                },
                _U: function() {
                    return d
                },
                gc: function() {
                    return c
                },
                ld: function() {
                    return x
                }
            });
            var i = r(49928),
                n = r(68164),
                l = r(99872);
            let a = {
                    large: 1,
                    medium: 1,
                    small: 1
                },
                s = {
                    horizontal: {
                        large: 1,
                        medium: 2,
                        small: 3
                    },
                    square: {
                        large: 1,
                        medium: 2,
                        small: 2
                    },
                    original: a,
                    vertical: a
                };

            function o(e) {
                if ("TEXT_AROUND_MEDIA" !== e.type) return [];
                let {
                    media: t,
                    aspectRatioOfImages: r,
                    sizeOfImages: i
                } = e;
                if (t) {
                    let e = s[null != r ? r : "original"][null != i ? i : "large"];
                    return (0, l.C1)(t, n.r[null != i ? i : "large"] * e)
                }
                return []
            }

            function d(e) {
                return e.modules.filter(e => "FORM" !== e.type && "VIDEO" !== e.type)
            }

            function c(e, t, r) {
                if (0 === e.length) return [];
                let i = 0,
                    l = 1 + (r ? 0 : 1),
                    a = [];
                for (; i < e.length;) {
                    let r = e[i];
                    "SMART" === r.type && 0 === d(r).length && (l -= 1);
                    let p = t.find(e => r.pageId === e.id);
                    if (p) {
                        if (e[i].parentPageTitle = p.title, "TEXT_AROUND_MEDIA" === r.type) {
                            var o, c, u, h;
                            let e = null === (o = r.media) || void 0 === o ? void 0 : o.length,
                                t = n.r[null !== (c = r.sizeOfImages) && void 0 !== c ? c : "large"] * s[null !== (u = r.aspectRatioOfImages) && void 0 !== u ? u : "original"][null !== (h = r.sizeOfImages) && void 0 !== h ? h : "large"];
                            e && e > t && (l += Math.floor(e / t) - 1 + (e % t == 0 ? 0 : 1))
                        }
                        if (i > 0 && r.pageId === e[i - 1].pageId) i += 1;
                        else {
                            if (!a.some(e => e.id === p.id)) {
                                let e = a.filter(e => "PROJECT" !== e.type),
                                    t = e.length > 0 ? e.slice(-1)[0].id : null;
                                a.push({
                                    pageNumber: 0 === i ? i + 1 + l : i + l,
                                    title: p.title,
                                    type: p.type,
                                    id: p.id,
                                    parentPageId: "PROJECT" === p.type ? t : null
                                })
                            }
                            i += 1
                        }
                    } else i += 1
                }
                return a
            }
            let u = new Set(["NAVIGATION", "CONTACT_FORM", "LOGO_WALL", "BLOG", "BLOGPOST_HERO", "FOOTER"]);

            function h(e) {
                if (!e) return {
                    allSections: [],
                    pagesForTableOfContents: []
                };
                let {
                    customPagesSections: t,
                    homePageSections: r,
                    pages: n,
                    projectPages: l,
                    allProjectPageSections: a
                } = e;
                t.sort((e, t) => e.page.position - t.page.position || e.position - t.position);
                let s = a.map(e => {
                        let {
                            payload: t,
                            createdAt: r,
                            updatedAt: i,
                            ...n
                        } = e;
                        return { ...t,
                            ...n
                        }
                    }).filter(e => !u.has(e.type)),
                    o = [...r.map(e => (0, i.deserializeSection)(e)), ...t.map(e => (0, i.deserializeSection)(e))].filter(e => !u.has(e.type)),
                    d = [];
                o.forEach((e, t) => {
                    if ("PROJECT_GRID" === e.type) {
                        let r = l.filter(t => t.parentSectionId === e.id);
                        r.sort((e, t) => e.position - t.position);
                        let i = [];
                        r.forEach(t => {
                            let r = s.filter(e => t.id === e.pageId).map(r => "PROJECT_HERO" === r.type ? { ...r,
                                title: t.title,
                                description: t.description,
                                thumbnail: t.thumbnail,
                                showDescription: e.showDescription
                            } : r);
                            r.sort((e, t) => e.position - t.position), i.push(...r)
                        }), d.push([t, i])
                    }
                });
                let h = 0;
                d.forEach((e, t) => {
                    let [r, i] = e;
                    t > 0 && (h += d[t - 1][1].length - 1), o.splice(r + h, 1, ...i)
                });
                let p = c(o, n, !1);
                return {
                    allSections: o,
                    pagesForTableOfContents: p
                }
            }

            function p(e) {
                var t;
                return "".concat(((null == e ? void 0 : e.givenName) ? "".concat(e.givenName, "-").concat(e.familyName) : null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : "User").replace(/[^\s\w-]/gi, ""), "'s-portfolio")
            }
            async function x(e) {
                let {
                    siteSlug: t,
                    pdfFileName: r,
                    imageResolutionDPI: i,
                    forPrint: n,
                    hideButtons: l,
                    hiddenSections: a
                } = e, s = encodeURIComponent("https://".concat("archifolio-nwh9uq013-uxstudioteam.vercel.app", "/pdf/").concat(t, "?hideButtons=").concat(l, "&forPrint=").concat(n, "&hiddenSections=").concat(a));
                return await fetch("".concat("https://3twz3ff7tkilkuubuxgd2v3lra0uyjcr.lambda-url.us-east-1.on.aws/", "?fileName=").concat(encodeURIComponent(r), "&slug=").concat(t, "&url=").concat(s, "&imageResolution=").concat(i), {
                    method: "POST"
                })
            }
            async function g(e, t) {
                try {
                    let r = await fetch(e, {
                            headers: new Headers({
                                Origin: window.location.origin
                            }),
                            mode: "cors"
                        }),
                        i = await r.blob(),
                        n = window.URL.createObjectURL(i);
                    return ! function(e, t) {
                        let r = document.createElement("a");
                        r.download = t, r.href = e, r.style.display = "none", document.body.append(r), r.click(), r.remove()
                    }(n, t), {
                        status: "ok"
                    }
                } catch (e) {
                    return {
                        status: "failed"
                    }
                }
            }
        }
    }
]);