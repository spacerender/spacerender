try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "da6c4442-daf6-4ed5-a955-4b4ddcb4c62a", e._sentryDebugIdIdentifier = "sentry-dbid-da6c4442-daf6-4ed5-a955-4b4ddcb4c62a")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3174], {
        63962: function(e, t, n) {
            n.d(t, {
                o: function() {
                    return s
                }
            });
            var r = n(52322),
                i = n(40489);
            n(2784);
            let o = {
                    sm: 12,
                    md: 36
                },
                a = {
                    md: 2,
                    lg: 4
                },
                l = e => {
                    let {
                        progressPercentage: t,
                        radius: n,
                        stroke: o,
                        shadow: a,
                        theme: l
                    } = e, s = 2 * n * Math.PI;
                    return (0, r.jsx)("div", {
                        className: (0, i.Z)("rounded-full", {
                            "shadow-soft-lg": "lg" === a
                        }),
                        children: (0, r.jsx)("div", {
                            className: "relative -rotate-90",
                            children: (0, r.jsxs)("svg", {
                                height: 2 * n,
                                width: 2 * n,
                                className: "rounded-full",
                                children: [(0, r.jsx)("circle", {
                                    fill: "transparent",
                                    strokeWidth: "dark" === l ? o : o / 2,
                                    r: n,
                                    cx: n,
                                    cy: n,
                                    className: (0, i.Z)({
                                        "stroke-graphite-10": "light" === l,
                                        "stroke-graphite-80": "dark" === l
                                    })
                                }), (0, r.jsx)("circle", {
                                    fill: "transparent",
                                    strokeWidth: o,
                                    strokeDasharray: "".concat(s, " ").concat(s),
                                    className: (0, i.Z)("transition-all duration-200 ease-out", {
                                        "stroke-graphite-100": "light" === l,
                                        "stroke-graphite-20 group-hover:stroke-graphite-0": "dark" === l
                                    }),
                                    style: {
                                        strokeDashoffset: s - t / 100 * s,
                                        backfaceVisibility: "hidden"
                                    },
                                    r: "dark" === l ? n : n - o / 2,
                                    cx: n,
                                    cy: n
                                })]
                            })
                        })
                    })
                },
                s = e => {
                    let {
                        percentage: t,
                        children: n,
                        size: i = "md",
                        strokeWidth: s = "md",
                        shadow: c,
                        theme: u = "light"
                    } = e, d = o[i], p = a[s];
                    return (0, r.jsxs)("div", {
                        className: "relative flex items-center justify-center",
                        children: [(0, r.jsx)("div", {
                            className: "absolute",
                            children: n
                        }), (0, r.jsx)(l, {
                            radius: d,
                            stroke: p,
                            progressPercentage: t,
                            shadow: c,
                            theme: u
                        })]
                    })
                }
        },
        97487: function(e, t, n) {
            n.d(t, {
                $: function() {
                    return i
                }
            });
            var r = n(52322);

            function i(e) {
                let {
                    textLength: t,
                    maxLength: n,
                    className: i
                } = e;
                return (0, r.jsx)(r.Fragment, {
                    children: t >= n - 5 && (0, r.jsx)("div", {
                        className: i,
                        children: (0, r.jsxs)("div", {
                            className: "z-10 hidden h-8 items-center rounded bg-graphite-100 px-3 font-body text-xs font-bold  tracking-[0.01em] text-graphite-0 group-focus-within:inline-flex dark:bg-graphite-0 dark:text-graphite-100",
                            children: [t, "/", n]
                        })
                    })
                })
            }
        },
        33059: function(e, t, n) {
            n.d(t, {
                Q: function() {
                    return l
                }
            });
            var r = n(52322),
                i = n(61463),
                o = n(2784),
                a = n(63126);
            let l = o.forwardRef(function(e, t) {
                let {
                    intent: n = "neutral",
                    disabled: o,
                    className: l,
                    alignment: s,
                    ...c
                } = e;
                return (0, r.jsx)(a.z, {
                    ref: t,
                    size: "sm",
                    intent: n,
                    disabled: o,
                    className: (0, i.Z)("pr-0 text-base font-bold  tracking-[0.01em]", "pl-0", o ? {
                        "text-graphite-10 dark:text-graphite-60": "neutral" === n
                    } : {
                        "text-graphite-100 decoration-graphite-100 decoration-2 hover:underline hover:underline-offset-[6px]": "neutral" === n
                    }, "left" === s && "!justify-start", l),
                    ...c
                })
            })
        },
        41982: function(e, t, n) {
            n.d(t, {
                j: function() {
                    return b
                }
            });
            var r = n(52322),
                i = n(88776),
                o = n(20336),
                a = n(7490),
                l = n(21902),
                s = n(26022),
                c = n(93237),
                u = n(52701),
                d = n(71284),
                p = n(5865),
                h = n(61463),
                g = n(40489),
                f = n(2784),
                m = n(97487),
                x = n(56540),
                v = n(3936);
            let b = f.forwardRef(function(e, t) {
                let {
                    text: n,
                    fallbackText: b,
                    maxLength: y = Number.POSITIVE_INFINITY,
                    size: w = "normal",
                    showCounter: C = !0,
                    noRing: j,
                    elementType: N,
                    attrs: E,
                    skipDefaultClasses: I,
                    placeholder: k,
                    autoFocus: A = !1,
                    alignment: S = "center",
                    rounded: T = !1,
                    wordBreak: L,
                    onDarkBackground: R,
                    onChange: P,
                    onBlur: D,
                    onKeyDown: _,
                    onClick: O,
                    id: M
                } = e, Z = (0, d.jE)({
                    immediatelyRender: !1,
                    editorProps: {
                        attributes: {
                            class: (0, g.Z)(x.oG, "focus:outline-none")
                        },
                        transformPastedHTML(e) {
                            let t = e.replace(/(<([^>]+)>)/gim, " ").replace(/\r\n|\r|\n/g, " ").trim();
                            if ("heading" === N) {
                                let e = (null == E ? void 0 : E.level) || 1;
                                return "<h".concat(e, ">").concat(t, "</h").concat(e, ">")
                            }
                            return "<p>".concat(t, "</p>")
                        },
                        handleClick() {
                            null == O || O()
                        }
                    },
                    extensions: [o.Z, I ? a.Z : v.X, s.Z.configure({
                        HTMLAttributes: {
                            class: I ? "" : x.ID.paragraph
                        }
                    }), u.Z, l.Z, i.Z.configure({
                        limit: y
                    }), c.Z.configure({
                        emptyEditorClass: (0, g.Z)(x.ID.placeholder, {
                            "first:before:!text-graphite-0/50": R
                        }),
                        placeholder: k
                    }), p.hj.create({
                        addKeyboardShortcuts: () => ({
                            Enter: () => !0
                        })
                    })],
                    content: {
                        type: "doc",
                        content: [{
                            type: N,
                            attrs: E,
                            content: n ? [{
                                type: "text",
                                text: n
                            }] : void 0
                        }]
                    }
                });
                return (f.useEffect(() => (Z && (Z.off("update"), Z.off("blur"), Z.on("update", e => {
                    let {
                        editor: t
                    } = e;
                    b && "" === t.getText() || null == P || P(t.getText())
                }), Z.on("blur", e => {
                    let {
                        event: t,
                        editor: n
                    } = e;
                    b && "" === n.getText() && Z.commands.setContent(b, {
                        emitUpdate: !0
                    }), null == D || D(t)
                })), () => {
                    null == Z || Z.off("update"), null == Z || Z.off("blur")
                }), [Z, P, D, b]), f.useImperativeHandle(t, () => ({
                    focus: () => {
                        null == Z || Z.commands.focus("all")
                    },
                    blur: () => {
                        null == Z || Z.commands.blur()
                    }
                }), [Z]), f.useEffect(() => {
                    A && (null == Z || Z.commands.focus())
                }, [A, null == Z ? void 0 : Z.commands]), Z) ? (0, r.jsx)(d.kg, {
                    id: M,
                    onKeyDown: _,
                    editor: Z,
                    className: (0, g.Z)("group relative", !j && ["ring-inset focus-within:ring-2 hover:ring-1 hover:ring-custom-bg-24 hover:focus-within:ring-2 dark:focus-within:ring-graphite-0 dark:hover:focus-within:ring-graphite-0", R ? "focus-within:ring-graphite-0 hover:focus-within:ring-graphite-0" : "focus-within:ring-graphite-100 hover:focus-within:ring-graphite-100"], T && "rounded", {
                        "-m-3 p-3": "normal" === w,
                        "-my-3 -mx-1 py-3 px-1": "narrow" === w,
                        "-m-6 p-6": "wide" === w,
                        "-m-2 p-2": "compact" === w,
                        "-my-1 -mx-2 py-1 px-2": "extra-compact" === w,
                        "text-left": "left" === S,
                        "text-right": "right" === S,
                        "text-center": "center" === S
                    }, "all" === L && "break-all"),
                    children: C && (0, r.jsx)(m.$, {
                        maxLength: y,
                        textLength: Z.getText().length,
                        className: (0, h.Z)("absolute -bottom-1 z-20 translate-y-8", {
                            "right-3 -mr-1": "narrow" === w,
                            "right-3 -mr-3": "normal" === w,
                            "right-6 -mr-6": "wide" === w,
                            "right-2 -mr-2": "compact" === w || "extra-compact" === w
                        })
                    })
                }) : null
            })
        },
        14624: function(e, t, n) {
            n.d(t, {
                I: function() {
                    return p
                }
            });
            var r = n(52322),
                i = n(23094),
                o = n(82851),
                a = n(2784),
                l = n(41538),
                s = n(86136),
                c = n(86408),
                u = n(48803);

            function d(e) {
                let {
                    children: t,
                    ...n
                } = e, {
                    listeners: a,
                    setNodeRef: l,
                    transform: s,
                    attributes: c
                } = (0, i.O1)(n), u = {
                    transform: o.ux.Translate.toString(s)
                };
                return (0, r.jsx)("div", {
                    ref: l,
                    ...a,
                    ...c,
                    style: u,
                    children: t
                })
            }

            function p(e) {
                let {
                    onEdit: t,
                    onDrag: n,
                    ...o
                } = e, p = (0, i.Dy)((0, i.VT)(i.MA, {
                    activationConstraint: {
                        distance: 5
                    }
                })), h = (0, a.useRef)(null), g = (0, c.h)(h, []), f = (0, a.useMemo)(() => (function(e, t) {
                    var n, r, i, o;
                    let {
                        pins: a,
                        crop: c,
                        originalWidth: u,
                        originalHeight: d,
                        mockup: p
                    } = e;
                    if (!a || !t) return [];
                    let h = (0, l.gG)(p),
                        g = null !== (r = null == c ? void 0 : c.width) && void 0 !== r ? r : u,
                        f = null !== (i = null == c ? void 0 : c.height) && void 0 !== i ? i : d,
                        m = g / f,
                        x = null !== (o = null == h ? void 0 : null === (n = h.crop) || void 0 === n ? void 0 : n.aspectRatio) && void 0 !== o ? o : m;
                    if (!(0, s.RA)(m, x, .05)) return [];
                    let v = x < m ? f * x : g,
                        b = x > m ? g / x : f,
                        y = t.width / v,
                        w = t.height / b;
                    return a.map(e => {
                        var t, n;
                        return { ...e,
                            coordinates: {
                                x: (e.coordinates.x - (null !== (t = null == c ? void 0 : c.left) && void 0 !== t ? t : 0)) * y,
                                y: (e.coordinates.y - (null !== (n = null == c ? void 0 : c.top) && void 0 !== n ? n : 0)) * w
                            }
                        }
                    })
                })(o, g), [o, g]);
                return (0, r.jsx)(i.LB, {
                    sensors: p,
                    onDragEnd: e => {
                        var t;
                        let {
                            active: {
                                id: r
                            },
                            delta: i
                        } = e, a = null === (t = f.find(e => e.id === r)) || void 0 === t ? void 0 : t.coordinates;
                        if (!a || !g) return;
                        let s = {
                                x: a.x + i.x,
                                y: a.y + i.y
                            },
                            c = (0, l.kk)(s, g, o);
                        null == n || n({
                            id: r.toString(),
                            coordinates: c
                        })
                    },
                    children: (0, r.jsx)("div", {
                        ref: h,
                        className: "group/pin-canvas pointer-events-none absolute inset-0 z-20",
                        children: f.map(e => {
                            var n;
                            return (0, r.jsx)(d, {
                                id: e.id,
                                disabled: !t,
                                children: (0, r.jsx)(u.l, { ...e,
                                    onRemove: t ? () => t(e.id, null) : void 0,
                                    onSubmit: t ? n => t(e.id, n) : void 0,
                                    deadzoneSize: (null !== (n = null == g ? void 0 : g.width) && void 0 !== n ? n : 0) * .1575
                                }, e.id)
                            }, e.id)
                        })
                    })
                })
            }
        },
        48803: function(e, t, n) {
            n.d(t, {
                l: function() {
                    return h
                }
            });
            var r = n(52322),
                i = n(61463),
                o = n(93556),
                a = n(2784),
                l = n(1697),
                s = n(31260),
                c = n(41982),
                u = n(30695),
                d = n(60714),
                p = n(55530);

            function h(e) {
                var t;
                let {
                    active: n,
                    disabled: o,
                    content: p,
                    coordinates: g,
                    deadzoneSize: f = 0,
                    onSubmit: m,
                    onDismiss: x,
                    onRemove: v
                } = e, {
                    editing: b
                } = (0, d.e)(), y = (0, l.Y)(), w = !!(m && v), [C, j] = (0, a.useState)(p), N = (0, a.useRef)(null), E = (0, a.useCallback)(() => {
                    if (null == C ? void 0 : C.trim()) {
                        var e;
                        null == m || m(C.trim()), null === (e = N.current) || void 0 === e || e.blur()
                    } else null == v || v()
                }, [v, m, C]), I = (0, a.useCallback)(e => {
                    ("Enter" === e.key || "Escape" === e.key) && (E(), e.stopPropagation(), null == x || x())
                }, [E, x]), k = "calc(".concat(f, "px + 2.5rem)");
                return (0, r.jsxs)("div", {
                    "data-image-pin": !0,
                    style: {
                        left: g.x,
                        top: g.y
                    },
                    onClick: null === (t = N.current) || void 0 === t ? void 0 : t.focus,
                    "aria-hidden": !0,
                    "aria-selected": n,
                    "aria-disabled": o,
                    onFocus: () => y.setPassive(!0),
                    className: (0, i.Z)("group/pin pointer-events-auto absolute flex -translate-x-1/2 -translate-y-5 cursor-auto flex-col items-center justify-center space-y-2 hover:z-10", n && "z-10"),
                    children: [(0, r.jsx)("div", {
                        "data-custom-cursor-disabled": !0,
                        style: {
                            width: k,
                            height: k
                        },
                        className: (0, i.Z)("absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 rounded-full", b && "cursor-none", !b && "pointer-events-none")
                    }), (0, r.jsx)(h.Head, {}), (0, r.jsx)("div", {
                        className: (0, i.Z)("pointer-events-none absolute bottom-0 translate-y-full pt-2 opacity-0 transition-all", !b && "group-focus-within/pin:pointer-events-auto group-focus-within/pin:opacity-100 group-hover/pin:pointer-events-auto group-hover/pin:opacity-100 group-hover/pin:delay-0", n && "pointer-events-auto opacity-100", !w && "delay-200"),
                        children: (0, r.jsx)(h.Content, {
                            children: w ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("div", {
                                    className: (0, i.Z)("flex-1 text-custom-p", !C && !p && "min-w-[160px] break-words"),
                                    children: (0, r.jsx)(c.j, {
                                        ref: N,
                                        elementType: "paragraph",
                                        text: C,
                                        onKeyDown: I,
                                        onChange: j,
                                        placeholder: "Write description here",
                                        autoFocus: n,
                                        noRing: !0,
                                        skipDefaultClasses: !0,
                                        maxLength: 125,
                                        wordBreak: "all"
                                    })
                                }), (0, r.jsx)(s.IconX, {
                                    role: "button",
                                    onClick: v,
                                    className: "h-4 w-4 cursor-pointer justify-end text-graphite-100/40 hover:text-graphite-100 dark:text-graphite-0/40 dark:hover:text-graphite-0"
                                })]
                            }) : (0, r.jsx)(u.P, {
                                text: p,
                                element: {
                                    type: "paragraph"
                                },
                                skipDefaultClasses: !0
                            })
                        })
                    })]
                })
            }
            h.Head = function() {
                return (0, r.jsx)(o.m.div, {
                    className: (0, i.Z)("flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-graphite-100/40 ring-0 ring-inset transition-all active:cursor-grabbing group-active/pin:cursor-grabbing", "group-focus-within/pin:ring-2 group-focus-within/pin:ring-graphite-0/40 group-hover/pin:ring-2 group-hover/pin:ring-graphite-0/40", "group-aria-checked/pin:ring-2 group-aria-checked/pin:ring-graphite-0/40", "group-aria-disabled/pin:pointer-events-none group-aria-disabled/pin:opacity-[.32]"),
                    children: (0, r.jsx)("div", {
                        className: (0, i.Z)("h-4 w-4 rounded-full bg-graphite-0 shadow-hard-sm shadow-graphite-100 transition-all", "group-focus-within/pin:h-3 group-focus-within/pin:w-3 group-hover/pin:h-3 group-hover/pin:w-3 group-hover/pin:shadow-soft-xs", "group-aria-checked/pin:h-3 group-aria-checked/pin:w-3")
                    })
                })
            }, h.Content = function(e) {
                let {
                    children: t
                } = e, {
                    buttonStyle: {
                        rounded: n
                    }
                } = (0, p.m)();
                return (0, r.jsx)("div", {
                    role: "presentation",
                    onClick: e => e.stopPropagation(),
                    className: (0, i.Z)("flex min-h-6 w-max max-w-[320px] items-center gap-2 bg-custom-bg px-[14px] py-[8.5px] text-center text-sm text-custom-p ring-1 ring-graphite-10 transition-all", "group-focus-within/pin:ring-2 group-focus-within/pin:ring-graphite-100 dark:group-focus-within/pin:ring-graphite-0", "shadow-[0px_48px_14px_0px_rgba(0,0,0,0.00),0px_31px_12px_0px_rgba(0,0,0,0.04),0px_17px_10px_0px_rgba(0,0,0,0.12),0px_8px_8px_0px_rgba(0,0,0,0.20),0px_2px_4px_0px_rgba(0,0,0,0.23)]", {
                        "rounded-none": "none" === n,
                        "rounded-lg": "lg" === n,
                        "rounded-[18px]": "full" === n
                    }),
                    children: t
                })
            }
        },
        32666: function(e, t, n) {
            n.d(t, {
                J: function() {
                    return s
                }
            });
            var r = n(52322),
                i = n(40489);
            n(2784);
            var o = n(1697),
                a = n(41982),
                l = n(55530);

            function s(e) {
                let {
                    text: t,
                    editor: n,
                    placement: s = "outside",
                    mockup: c,
                    ...u
                } = e, d = (0, l.m)().captionStyle, p = c ? "simple" : d, h = (0, o.Y)();
                return (0, r.jsxs)("div", {
                    className: (0, i.Z)("custom-p relative z-0", "legacy" === p && {
                        "p-6": "outside" === s,
                        "bg-graphite-100/60 px-4 py-3 text-graphite-0": "inside" === s && !c
                    }, "simple" === p && {
                        "pt-3": "outside" === s,
                        "px-4 pb-4 pt-16 text-graphite-0": "inside" === s
                    }, "filled" === p && {
                        "px-4 py-3": !c,
                        "bg-graphite-100/60 text-graphite-0": "inside" === s && !c,
                        "py-3": "outside" === s && c
                    }, "outline" === p && {
                        "flex justify-start pt-3": "outside" === s,
                        "flex justify-start px-4 pb-4 pt-16 text-graphite-0": "inside" === s
                    }),
                    style: ("simple" === p || "outline" === p) && "inside" === s ? {
                        background: "linear-gradient(180deg, transparent 40.1%, rgba(28, 27, 31, 0.15) 100%), linear-gradient(180deg, transparent 33.85%, rgba(28, 27, 31, 0.15) 100%), linear-gradient(180deg, transparent 23.96%, rgba(28, 27, 31, 0.15) 100%), linear-gradient(180deg, transparent 15.1%, rgba(28, 27, 31, 0.15) 100%), linear-gradient(180deg, transparent 7.29%, rgba(28, 27, 31, 0.15) 100%), linear-gradient(180deg, transparent 0%, rgba(28, 27, 31, 0.15) 100%)"
                    } : void 0,
                    children: ["simple" !== p && (0, r.jsx)("div", {
                        className: (0, i.Z)("legacy" === p && {
                            "absolute inset-0 bg-custom-p opacity-10": "outside" === s && !c
                        }, "filled" === p && !c && {
                            "absolute inset-0 bg-custom-button-rgba/10": "outside" === s
                        }, "outline" === p && {
                            "w-[2px]": !0,
                            "bg-custom-accent": "outside" === s,
                            "bg-graphite-0": "inside" === s
                        })
                    }), (0, r.jsx)("div", {
                        onFocus: () => h.setPassive(!0),
                        onBlur: () => h.setPassive(!1),
                        onBlurCapture: () => h.setPassive(!1),
                        className: (0, i.Z)("pointer-events-auto min-w-0 text-sm", "outline" === p && "flex-1 pl-4", "inside" === s && "!text-graphite-0", c && "text-center"),
                        children: n ? (0, r.jsx)(a.j, {
                            skipDefaultClasses: !0,
                            rounded: !0,
                            alignment: "legacy" === p || c ? "center" : "left",
                            elementType: "paragraph",
                            size: "extra-compact",
                            onDarkBackground: "inside" === s,
                            text: t,
                            placeholder: "Add your caption here",
                            ...u
                        }) : (0, r.jsx)(r.Fragment, {
                            children: t
                        })
                    })]
                })
            }
        },
        32167: function(e, t, n) {
            n.d(t, {
                n: function() {
                    return g
                }
            });
            var r = n(52322),
                i = n(40489),
                o = n(22958),
                a = n(41538),
                l = n(10963),
                s = n(14624),
                c = n(32666),
                u = n(86222),
                d = n(51620),
                p = n(62399);

            function h(e) {
                var t, n, i, o, s;
                let {
                    contain: p,
                    captionEnabled: h,
                    className: g,
                    onClick: f,
                    altText: m,
                    onLoadCapture: x,
                    onLoadingComplete: v,
                    overlay: b,
                    mockup: y,
                    ...w
                } = e, {
                    instantImages: C
                } = (0, d.y)(), j = w.crop ? w.crop.src : null !== (i = C[w.src]) && void 0 !== i ? i : w.src, N = null !== (o = null === (t = w.crop) || void 0 === t ? void 0 : t.width) && void 0 !== o ? o : w.originalWidth, E = null !== (s = null === (n = w.crop) || void 0 === n ? void 0 : n.height) && void 0 !== s ? s : w.originalHeight, I = (0, r.jsx)(l.N, {
                    src: j,
                    objectFit: "cover",
                    onLoadCapture: x,
                    onLoadingComplete: v,
                    alt: m,
                    width: N,
                    height: E,
                    layout: (0, a.m_)(y) ? "responsive" : "fill"
                });
                return (0, r.jsxs)("div", {
                    role: "presentation",
                    className: g,
                    onClick: f,
                    children: [(0, r.jsx)(u.c, {
                        mockup: y,
                        overlay: b,
                        width: N,
                        children: I
                    }), h && w.caption && (0, r.jsx)(c.J, {
                        mockup: y,
                        text: w.caption
                    })]
                })
            }

            function g(e) {
                var t, n, a;
                let {
                    mockup: u,
                    contain: g,
                    captionEnabled: f,
                    className: m,
                    onClick: x,
                    altText: v,
                    blurHash: b,
                    tight: y,
                    overlay: w,
                    ...C
                } = e, {
                    isPdfView: j
                } = (0, p.Z)(), {
                    instantImages: N
                } = (0, d.y)(), E = C.crop ? C.crop.src : null !== (n = N[C.src]) && void 0 !== n ? n : C.src;
                if (u) return (0, r.jsx)(h, {
                    contain: g,
                    captionEnabled: f,
                    className: m,
                    onClick: x,
                    altText: v,
                    priority: j,
                    mockup: u,
                    overlay: w,
                    ...C
                });
                let {
                    originalWidth: I,
                    originalHeight: k,
                    preferredSize: A,
                    forceSizes: S,
                    ...T
                } = C;
                return (0, r.jsxs)("div", {
                    className: (0, i.Z)(y && f && "relative"),
                    children: [(0, r.jsx)(l.N, {
                        layout: "responsive",
                        objectFit: g ? "contain" : "cover",
                        className: m,
                        onClick: x,
                        alt: v,
                        priority: j,
                        placeholder: b ? "blur" : "empty",
                        blurDataURL: b ? (0, o.Ow)(b) : void 0,
                        ...T,
                        ...null !== (a = C.crop) && void 0 !== a ? a : {},
                        ...null != S ? S : {},
                        src: E
                    }, "".concat(b, "-").concat(E)), w, (null === (t = C.pins) || void 0 === t ? void 0 : t.length) !== 0 && (0, r.jsx)(s.I, {
                        crop: C.crop,
                        pins: C.pins,
                        originalWidth: I,
                        originalHeight: k,
                        preferredSize: A
                    }), f && C.caption && (0, r.jsx)("div", {
                        className: (0, i.Z)("pointer-events-none", y && "absolute inset-x-0 bottom-0"),
                        children: (0, r.jsx)(c.J, {
                            mockup: u,
                            text: C.caption,
                            placement: y ? "inside" : "outside"
                        })
                    })]
                })
            }
        },
        56540: function(e, t, n) {
            n.d(t, {
                ID: function() {
                    return s
                },
                iV: function() {
                    return u
                },
                oG: function() {
                    return l
                }
            });
            var r = n(52322),
                i = n(40489),
                o = n(2784),
                a = n(90875);
            let l = "space-y-text-block",
                s = {
                    paragraph: "custom-p",
                    link: "underline underline-thickness-md underline-offset-md text-custom-button",
                    table: "table-editor table-fixed border-separate border-spacing-[0.625rem] min-w-[calc(100%+1.25rem)]",
                    bulletList: "pl-5 space-y-1 list-disc",
                    orderedList: "pl-5 space-y-1 list-decimal",
                    listItem: "marker:text-custom-p",
                    tableCell: "relative w-1/2 max-w-[50%] min-w-[50%] break-word rounded-[4px] border border-transparent py-[5px] px-[7px] align-top group-focus-within:border group-focus-within:border-custom-bg-24 selected:bg-crimson-40",
                    heading: {
                        1: "custom-h1",
                        2: "custom-h2",
                        3: "custom-h3",
                        4: "custom-h4"
                    },
                    placeholder: "first:before:absolute first:before:inset-0 first:before:overflow-hidden first:before:whitespace-nowrap first:before:text-custom-p/50 first:before:content-[attr(data-placeholder)] cursor-text",
                    highlight: "rounded-sm px-1 py-0.5 bg-custom-highlight text-inherit",
                    text: "",
                    doc: "",
                    blockquote: "border-l border-l-custom-p py-2.5 pl-6"
                };

            function c(e) {
                var t, n, o, l;
                let {
                    element: c,
                    content: u,
                    options: {
                        lineClamp: d,
                        onDarkBackground: p,
                        skipDefaultClasses: h
                    }
                } = e, g = u;
                switch (d && (g = (0, r.jsx)("div", {
                    className: (0, i.Z)({
                        "line-clamp-1": 1 === d,
                        "line-clamp-2": 2 === d,
                        "line-clamp-3": 3 === d
                    }),
                    children: g
                })), c.marks && (null === (t = c.marks) || void 0 === t ? void 0 : t.length) > 0 && c.marks.forEach(e => {
                    if ("link" === e.type) {
                        var t, n;
                        g = (0, r.jsx)("a", {
                            href: null === (t = e.attrs) || void 0 === t ? void 0 : t.href,
                            target: null === (n = e.attrs) || void 0 === n ? void 0 : n.target,
                            rel: "nofollow noreferrer",
                            className: s.link,
                            children: g
                        })
                    }
                    "bold" === e.type && (g = (0, r.jsx)("b", {
                        children: g
                    })), "italic" === e.type && (g = (0, r.jsx)("i", {
                        children: g
                    })), "superscript" === e.type && (g = (0, r.jsx)("sup", {
                        children: g
                    })), "highlight" === e.type && (g = (0, r.jsx)("mark", {
                        className: s.highlight,
                        children: g
                    }))
                }), c.type) {
                    case "paragraph":
                        return (0, r.jsx)("p", {
                            className: (0, i.Z)("relative min-h-[1.5rem]", h ? "" : s.paragraph, {
                                "text-graphite-0": p
                            }),
                            children: g
                        });
                    case "text":
                        return (0, r.jsx)("span", {
                            children: g
                        });
                    case "table":
                        return (0, r.jsx)("table", {
                            className: s.table,
                            children: (0, r.jsx)("tbody", {
                                children: u
                            })
                        });
                    case "tableRow":
                        return (0, r.jsx)("tr", {
                            children: u
                        });
                    case "tableCell":
                        return (0, r.jsx)("td", {
                            className: s.tableCell,
                            children: u
                        });
                    case "bulletList":
                        return (0, r.jsx)("ul", {
                            className: s.bulletList,
                            children: u
                        });
                    case "orderedList":
                        return (0, r.jsx)("ol", {
                            className: s.orderedList,
                            children: u
                        });
                    case "listItem":
                        return (0, r.jsx)("li", {
                            className: s.listItem,
                            children: u
                        });
                    case "heading":
                        if (null === (n = c.attrs) || void 0 === n ? void 0 : n.level) {
                            let {
                                level: e
                            } = c.attrs;
                            return (0, r.jsx)("h".concat(e), {
                                className: "relative",
                                children: (0, r.jsx)("span", {
                                    className: (0, i.Z)(h ? "" : s.heading[e], {
                                        "text-graphite-0": p
                                    }),
                                    children: u
                                })
                            })
                        }
                        return (0, r.jsx)("div", {
                            children: g
                        });
                    case "hardBreak":
                        return (0, r.jsx)("br", {});
                    case "blockquote":
                        return (0, r.jsx)("blockquote", {
                            className: s.blockquote,
                            children: g
                        });
                    case "divider":
                        return (0, r.jsx)("div", {
                            className: "grid w-full grid-cols-4 gap-x-6 @tablet:grid-cols-6 @laptop:gap-x-12",
                            children: (0, r.jsx)("div", {
                                className: (0, a.R)(null === (o = c.attrs) || void 0 === o ? void 0 : o.variant),
                                children: (null === (l = c.attrs) || void 0 === l ? void 0 : l.variant) === "dotted" && (0, r.jsx)(r.Fragment, {
                                    children: [...Array.from({
                                        length: 3
                                    }).keys()].map(e => (0, r.jsx)("div", {
                                        className: "h-1.5 w-1.5 rounded-full bg-custom-accent"
                                    }, e))
                                })
                            })
                        });
                    default:
                        return (0, r.jsx)(r.Fragment, {
                            children: u
                        })
                }
            }
            let u = e => {
                let {
                    textNodes: t,
                    ...n
                } = e;
                if (!t) return null;
                let {
                    alignment: a,
                    payload: s
                } = t;
                return "string" == typeof s ? (0, r.jsx)("div", {
                    className: (0, i.Z)(l, {
                        "text-center": "center" === a,
                        "text-left": "left" === a,
                        "text-right": "right" === a
                    }),
                    dangerouslySetInnerHTML: {
                        __html: s
                    }
                }) : (0, r.jsx)("div", {
                    className: (0, i.Z)(l, {
                        "text-center": "center" === a,
                        "text-left": "left" === a,
                        "text-right": "right" === a
                    }),
                    children: null != s && function e(t, n) {
                        return t.map((t, i) => (0, r.jsx)(o.Fragment, {
                            children: t.content ? c({
                                element: t,
                                content: e(t.content, n),
                                options: n
                            }) : c({
                                element: t,
                                content: t.text,
                                options: n
                            })
                        }, i))
                    }(s.content, n)
                })
            }
        },
        30695: function(e, t, n) {
            n.d(t, {
                P: function() {
                    return l
                }
            });
            var r = n(52322),
                i = n(40489),
                o = n(56540);
            let a = {
                heading: {
                    1: "h1",
                    2: "h2",
                    3: "h3",
                    4: "h3"
                },
                paragraph: "p",
                text: "span",
                doc: "div"
            };

            function l(e) {
                var t, n;
                let {
                    element: l,
                    text: s,
                    skipDefaultClasses: c
                } = e, u = "heading" === l.type ? a.heading[(null === (t = l.attrs) || void 0 === t ? void 0 : t.level) || 2] : a[l.type || "paragraph"];
                return (0, r.jsx)(u, {
                    className: (0, i.Z)(!c && ("heading" === l.type ? o.ID.heading[(null === (n = l.attrs) || void 0 === n ? void 0 : n.level) || 2] : o.ID[l.type])),
                    children: s
                })
            }
        },
        86222: function(e, t, n) {
            n.d(t, {
                c: function() {
                    return l
                }
            });
            var r = n(52322);

            function i(e) {
                let {
                    width: t,
                    height: n,
                    children: i
                } = e;
                return (0, r.jsx)("div", {
                    className: "relative",
                    style: {
                        paddingBottom: "calc((".concat(n, " / ").concat(t, ") * 100%)")
                    },
                    children: (0, r.jsx)("div", {
                        className: "absolute inset-0",
                        children: i
                    })
                })
            }

            function o(e) {
                let {
                    viewBoxWidth: t,
                    viewBoxHeight: n,
                    innerX: i,
                    innerY: o,
                    innerWidth: a,
                    innerHeight: l,
                    children: s
                } = e;
                return (0, r.jsx)("div", {
                    className: "absolute inset-0",
                    style: {
                        width: "calc((".concat(a, " / ").concat(t, ") * 100%)"),
                        height: "calc((".concat(l, " / ").concat(n, ") * 100%)"),
                        transform: "translate(calc((".concat(i, " / ").concat(a, ") * 100%), calc((").concat(o, " / ").concat(l, ") * 100%))")
                    },
                    children: s
                })
            }
            n(2784);
            var a = n(78563);

            function l(e) {
                let {
                    children: t,
                    mockup: n,
                    overlay: l,
                    width: s
                } = e;
                if (!n) return t;
                let c = a.O[n];
                if ("Component" in c) return (0, r.jsxs)(c.Component, {
                    type: "IMAGE",
                    width: s,
                    children: [t, (0, r.jsx)("div", {
                        className: "absolute inset-0",
                        children: l
                    })]
                });
                let {
                    Top: u,
                    Bottom: d,
                    content: p
                } = c;
                return (0, r.jsxs)(i, {
                    width: p.viewBoxWidth,
                    height: p.viewBoxHeight,
                    children: [(0, r.jsx)(d, {}), (0, r.jsx)(o, { ...p,
                        children: t
                    }), (0, r.jsx)(u, {
                        className: "absolute inset-0"
                    }), (0, r.jsx)(o, { ...p,
                        children: l
                    })]
                })
            }
        },
        79038: function(e, t, n) {
            n.d(t, {
                nA: function() {
                    return a
                },
                sK: function() {
                    return l
                },
                up: function() {
                    return s
                }
            });
            var r = n(52322),
                i = n(61463),
                o = n(40489);

            function a(e) {
                let {
                    children: t,
                    className: n
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, i.Z)("group relative h-full", n),
                    children: t
                })
            }

            function l(e) {
                let {
                    padding: t = "md",
                    rounded: n = "none",
                    dark: o = !1,
                    children: a,
                    alwaysVisible: l,
                    hidden: s
                } = e;
                return (0, r.jsx)("div", {
                    className: "pointer-events-none absolute inset-0",
                    children: (0, r.jsx)("div", {
                        className: (0, i.Z)("grid h-full grid-cols-1 grid-rows-3 text-base", {
                            "p-4": "sm" === t,
                            "p-6": "md" === t
                        }, {
                            "rounded-full": "full" === n,
                            "rounded-sm": "sm" === n,
                            rounded: "default" === n,
                            "rounded-md": "md" === n,
                            "rounded-lg": "lg" === n,
                            "rounded-none": "none" === n
                        }, {
                            "bg-lighten-regular": l && !o,
                            "bg-darken-regular": l && o,
                            "bg-blend-overlay group-hover:bg-custom-bg/30 group-hover/editable:bg-custom-bg/30 group-hover/editable-module:bg-custom-bg/30 group-focus-within/editable:bg-custom-bg/30 group-module-hover:bg-custom-bg/30 group-blogpost-hover:bg-custom-bg/30": !l && !o,
                            "bg-blend-overlay group-hover:bg-darken-regular group-focus-within:bg-darken-regular": !l && o
                        }, s && "invisible"),
                        children: a
                    })
                })
            }

            function s(e) {
                let {
                    placement: t,
                    alwaysVisible: n,
                    nonInteractive: i,
                    visibleOnFocus: a = !0,
                    children: l
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, o.Z)("col-start-1", {
                        "justify-self-start": t.endsWith("start"),
                        "justify-self-center": !t.includes("-"),
                        "justify-self-end": t.endsWith("end")
                    }, {
                        "row-start-1 self-start": t.startsWith("top"),
                        "row-start-2 self-center": t.startsWith("center"),
                        "row-start-3 self-end": t.startsWith("bottom")
                    }, !n && ["opacity-0 group-focus-within/editable:opacity-100 group-hover:opacity-100 group-module-hover:opacity-100", a && "group-focus-within:opacity-100"], !i && "pointer-events-auto"),
                    children: l
                })
            }
        },
        85863: function(e, t, n) {
            n.d(t, {
                o: function() {
                    return l
                }
            });
            var r = n(52322),
                i = n(40489),
                o = n(31260),
                a = n(33059);

            function l(e) {
                let {
                    multi: t,
                    error: n
                } = e, l = n ? o.IconExclamationCircle : o.IconUpload;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: (0, i.Z)("flex h-18 w-18 items-center justify-center rounded-full", n ? "bg-crimson-0 text-crimson-40 shadow-soft-lg ring-2 ring-crimson-40" : "text-graphite-40 ring-1 ring-graphite-10 group-hover:text-graphite-100 group-hover:ring-2 group-hover:ring-graphite-100"),
                        children: (0, r.jsx)(l, {
                            className: "h-6 w-6"
                        })
                    }), (0, r.jsxs)("div", {
                        className: "flex flex-col items-center justify-between space-y-2",
                        children: [(0, r.jsx)("p", {
                            className: (0, i.Z)("text-base text-graphite-40", n && "text-crimson-40"),
                            children: null != n ? n : "Drop here to upload, or"
                        }), (0, r.jsx)("p", {
                            className: "text-base font-bold  tracking-[0.01em] text-graphite-100",
                            children: (0, r.jsx)(a.Q, {
                                as: "span",
                                className: "group-hover:underline-thickness-lg group-hover:underline group-hover:underline-offset-[6px]",
                                children: t ? "Select file(s)" : n ? "Pick another file" : "Select a file"
                            })
                        })]
                    })]
                })
            }
        },
        31855: function(e, t, n) {
            n.d(t, {
                w: function() {
                    return c
                }
            });
            var r = n(52322),
                i = n(53014),
                o = n(37452),
                a = n(78909),
                l = n(43609);

            function s(e, t, n) {
                let r = "rgba(".concat(e.r, ", ").concat(e.g, ", ").concat(e.b, ", ").concat(e.a, ")"),
                    o = "rgba(".concat(t.r, ", ").concat(t.g, ", ").concat(t.b, ", ").concat(t.a, ")"),
                    a = "rgba(".concat(n.r, ", ").concat(n.g, ", ").concat(n.b, ", ").concat(n.a, ")");
                return (0, i.mj)(r, o) >= (0, i.mj)(r, a) ? t : n
            }

            function c(e) {
                let {
                    thumbnailDesign: t,
                    children: n
                } = e, {
                    siteColors: i
                } = (0, l.u)(), {
                    heading: c,
                    background: u
                } = i;
                if ("solid" === t.backgroundType) {
                    let e = o.xr.parse(t.background),
                        i = s(e, c, u);
                    return (0, r.jsx)("div", {
                        style: {
                            backgroundColor: "rgba(".concat(e.r, ", ").concat(e.g, ", ").concat(e.b, ", ").concat(e.a, ")"),
                            color: "rgba(".concat(i.r, ", ").concat(i.g, ", ").concat(i.b, ", ").concat(i.a, ")")
                        },
                        className: "flex size-full items-center justify-center",
                        children: n
                    })
                }
                if ("gradient" === t.backgroundType) {
                    let e = a.vZ.parse(t.background);
                    if (!e.colors || 2 !== e.colors.length) return (0, r.jsx)("div", {
                        className: "flex size-full items-center justify-center bg-graphite-0",
                        style: {
                            color: "rgba(".concat(c.r, ", ").concat(c.g, ", ").concat(c.b, ", ").concat(c.a, ")")
                        },
                        children: n
                    });
                    let [i, o] = e.colors, l = "radial" === e.type ? s(i, c, u) : s({
                        r: Math.round((i.r + o.r) / 2),
                        g: Math.round((i.g + o.g) / 2),
                        b: Math.round((i.b + o.b) / 2),
                        a: (i.a + o.a) / 2
                    }, c, u), d = "rgba(".concat(i.r, ", ").concat(i.g, ", ").concat(i.b, ", ").concat(i.a, ")"), p = "rgba(".concat(o.r, ", ").concat(o.g, ", ").concat(o.b, ", ").concat(o.a, ")"), h = "linear" === e.type ? "linear-gradient(to bottom, ".concat(d, " 0%, ").concat(p, " 100%)") : "radial-gradient(circle at center, ".concat(d, " 0%, ").concat(d, " 30%, ").concat(p, " 100%)");
                    return (0, r.jsx)("div", {
                        style: {
                            backgroundImage: h,
                            color: "rgba(".concat(l.r, ", ").concat(l.g, ", ").concat(l.b, ", ").concat(l.a, ")")
                        },
                        className: "flex size-full items-center justify-center",
                        children: n
                    })
                }
                return (0, r.jsx)("div", {
                    className: "flex size-full items-center justify-center",
                    style: {
                        color: "rgba(".concat(c.r, ", ").concat(c.g, ", ").concat(c.b, ", ").concat(c.a, ")")
                    },
                    children: n
                })
            }
        },
        37146: function(e, t, n) {
            n.d(t, {
                q: function() {
                    return g
                }
            });
            var r = n(52322),
                i = n(61463),
                o = n(96577),
                a = n.n(o),
                l = n(2784),
                s = n(78909),
                c = n(41538),
                u = n(32167),
                d = n(86222);
            let p = {
                CAPSULE: function(e) {
                    let {
                        fill: t = "white",
                        stroke: n,
                        strokeWidth: i,
                        strokeLinejoin: o
                    } = e;
                    return (0, r.jsx)("rect", {
                        x: "54",
                        y: "5",
                        width: "266",
                        height: "364",
                        rx: "133",
                        fill: t,
                        stroke: n,
                        strokeWidth: i,
                        strokeLinejoin: o
                    })
                },
                DOME: function(e) {
                    let {
                        fill: t = "white",
                        stroke: n,
                        strokeWidth: i,
                        strokeLinejoin: o
                    } = e;
                    return (0, r.jsx)("path", {
                        d: "M40 151.774C40 70.713 105.713 5 186.774 5V5C267.835 5 333.548 70.7131 333.548 151.774V369H40V151.774Z",
                        fill: t,
                        stroke: n,
                        strokeWidth: i,
                        strokeLinejoin: o
                    })
                },
                BLOB: function(e) {
                    let {
                        fill: t = "white",
                        stroke: n,
                        strokeWidth: i,
                        strokeLinejoin: o
                    } = e;
                    return (0, r.jsx)("path", {
                        d: "M20.4254 148.569C54.155 46.6772 133.917 12.4762 168.629 7.66409C369.262 -20.15 409.437 176.688 332.51 278.429C266.175 366.161 149.349 382.507 79.2391 359.74C17.4867 339.687 -16.8091 261.048 20.4254 148.569Z",
                        fill: t,
                        stroke: n,
                        strokeWidth: i,
                        strokeLinejoin: o
                    })
                },
                CLOUD: function(e) {
                    let {
                        fill: t = "white",
                        stroke: n,
                        strokeWidth: i,
                        strokeLinejoin: o
                    } = e;
                    return (0, r.jsx)("path", {
                        d: "M115.783 54.5844C141.599 -11.5281 232.401 -11.5281 258.217 54.5844C264.734 71.2731 279.974 82.6568 297.381 83.8706C366.229 88.6714 394.447 177.63 341.433 223.181C328.015 234.71 322.199 253.156 326.471 270.619C343.35 339.619 269.731 394.441 211.24 356.678C196.444 347.125 177.556 347.125 162.76 356.678C104.269 394.441 30.6501 339.619 47.5294 270.619C51.8014 253.156 45.9846 234.71 32.5666 223.181C-20.4469 177.63 7.77107 88.6714 76.6191 83.8706C94.0262 82.6568 109.266 71.2731 115.783 54.5844Z",
                        fill: t,
                        stroke: n,
                        strokeWidth: i,
                        strokeLinejoin: o
                    })
                },
                FLOWER: function(e) {
                    let {
                        fill: t = "white",
                        stroke: n,
                        strokeWidth: i,
                        strokeLinejoin: o
                    } = e;
                    return (0, r.jsx)("path", {
                        d: "M187 5C157.85 5 134.22 28.6304 134.22 57.78V59.5778L132.949 58.3066C112.337 37.6947 78.9185 37.6947 58.3066 58.3066C37.6947 78.9185 37.6947 112.337 58.3066 132.949L59.5778 134.22H57.78C28.6304 134.22 5 157.85 5 187C5 216.15 28.6304 239.78 57.78 239.78H59.5778L58.3066 241.051C37.6947 261.663 37.6947 295.082 58.3066 315.693C78.9185 336.305 112.337 336.305 132.949 315.693L134.22 314.422V316.22C134.22 345.37 157.85 369 187 369C216.15 369 239.78 345.37 239.78 316.22V314.422L241.051 315.693C261.663 336.305 295.082 336.305 315.693 315.693C336.305 295.082 336.305 261.663 315.693 241.051L314.422 239.78H316.22C345.37 239.78 369 216.15 369 187C369 157.85 345.37 134.22 316.22 134.22H314.422L315.693 132.949C336.305 112.337 336.305 78.9184 315.693 58.3065C295.082 37.6947 261.663 37.6946 241.051 58.3065L239.78 59.5778V57.78C239.78 28.6304 216.15 5 187 5Z",
                        fill: t,
                        stroke: n,
                        strokeWidth: i,
                        strokeLinejoin: o
                    })
                },
                BURST: function(e) {
                    let {
                        fill: t = "white",
                        stroke: n,
                        strokeWidth: i,
                        strokeLinejoin: o
                    } = e;
                    return (0, r.jsx)("path", {
                        d: "M187 5C199.976 62.4455 265.898 89.7512 315.693 58.3066C284.249 108.102 311.555 174.024 369 187C311.555 199.976 284.249 265.898 315.693 315.693C265.898 284.249 199.976 311.555 187 369C174.024 311.555 108.102 284.249 58.3066 315.693C89.7512 265.898 62.4455 199.976 5 187C62.4455 174.024 89.7512 108.102 58.3066 58.3066C108.102 89.7512 174.024 62.4455 187 5Z",
                        fill: t,
                        stroke: n,
                        strokeWidth: i,
                        strokeLinejoin: o
                    })
                }
            };

            function h(e) {
                let {
                    src: t,
                    alt: n,
                    shape: o,
                    outlined: s,
                    shadow: c,
                    grayscale: u,
                    className: d
                } = e, h = (0, l.useId)(), g = "mask-".concat(o, "-").concat(h, "}");
                if (["ROUNDED_SQUARE", "CIRCLE", "SQUARE"].includes(o)) return (0, r.jsx)("div", {
                    className: (0, i.Z)("relative", "CIRCLE" === o ? "aspect-[1/1] w-full" : "h-full w-full"),
                    children: (0, r.jsx)(a(), {
                        className: (0, i.Z)("object-cover", {
                            "rounded-xl": "ROUNDED_SQUARE" === o,
                            "rounded-full": "CIRCLE" === o,
                            "border-[5px] border-[#fff]": s,
                            "shadow-soft-xl": c,
                            grayscale: u
                        }, d),
                        src: t,
                        alt: n,
                        fill: !0
                    })
                });
                let f = p[o];
                return f ? (0, r.jsx)("div", {
                    className: "relative flex h-full w-full items-center justify-center",
                    style: {
                        filter: c ? "drop-shadow(1px 2px 8px rgba(0,0,0,0.15))" : void 0
                    },
                    children: (0, r.jsxs)("svg", {
                        className: "max-h-full max-w-full",
                        viewBox: "0 0 374 374",
                        preserveAspectRatio: "xMidYMid slice",
                        children: [(0, r.jsx)("defs", {
                            children: (0, r.jsx)("mask", {
                                id: g,
                                children: (0, r.jsx)("g", {
                                    children: (0, r.jsx)(f, {})
                                })
                            })
                        }), s && (0, r.jsx)("g", {
                            children: (0, r.jsx)(f, {
                                fill: "white",
                                stroke: "white",
                                strokeLinejoin: "round",
                                strokeWidth: "10"
                            })
                        }), (0, r.jsx)("foreignObject", {
                            x: "0",
                            y: "0",
                            width: "100%",
                            height: "100%",
                            mask: "url(#".concat(g, ")"),
                            children: (0, r.jsx)("div", {
                                className: "h-full w-full",
                                children: (0, r.jsx)(a(), {
                                    className: (0, i.Z)("h-full w-full object-cover", {
                                        grayscale: u
                                    }, d),
                                    src: t,
                                    alt: n,
                                    fill: !0
                                })
                            })
                        })]
                    })
                }) : null
            }

            function g(e) {
                let {
                    thumbnailDesign: t
                } = e;
                if ("image" === t.type) {
                    let e = s.hI.parse(t.content);
                    if ("shape" in e) {
                        var n;
                        return (0, r.jsx)("div", {
                            className: "relative flex h-full w-full items-center justify-center p-[8%]",
                            children: (0, r.jsx)(h, {
                                src: e.src,
                                alt: "thumbnail based on file",
                                shape: e.shape,
                                outlined: e.outlined,
                                shadow: e.shadow,
                                grayscale: null !== (n = e.grayscale) && void 0 !== n && n
                            })
                        })
                    }
                }
                if ("mockup" === t.type) {
                    let e = s.hI.parse(t.content);
                    if (e.mockup && (0, c.m_)(e.mockup)) return (0, r.jsx)("div", {
                        className: "project-thumbnail group flex h-full w-full flex-col justify-center p-[8%]",
                        style: {
                            filter: e.shadow ? "drop-shadow(1px 2px 8px rgba(0,0,0,0.15))" : void 0
                        },
                        children: (0, r.jsx)(d.c, {
                            mockup: e.mockup,
                            width: e.originalWidth,
                            children: (0, r.jsx)("div", {
                                className: "flex items-center justify-center",
                                children: (0, r.jsx)(a(), {
                                    src: e.src,
                                    alt: "thumbnail based on file",
                                    width: e.originalWidth,
                                    height: e.originalHeight,
                                    className: "aspect-[16/9] object-cover"
                                })
                            })
                        })
                    });
                    if ("mockup" in e) return (0, r.jsx)("div", {
                        className: (0, i.Z)("flex h-full w-full flex-col justify-center p-[8%]"),
                        style: {
                            filter: e.shadow ? "drop-shadow(1px 2px 8px rgba(0,0,0,0.15))" : void 0
                        },
                        children: (0, r.jsx)(u.n, {
                            src: e.src,
                            alt: "thumbnail based on file",
                            mockup: e.mockup,
                            originalHeight: e.originalHeight,
                            originalWidth: e.originalWidth,
                            layout: "fill"
                        })
                    })
                }
                if ("text" === t.type) {
                    let e = s.vE.parse(t.content);
                    return (0, r.jsx)("div", {
                        className: "flex h-full w-full items-center justify-center p-[8%]",
                        children: (0, r.jsx)("span", {
                            style: {
                                fontFamily: "_site_".concat(e.fontFamily),
                                lineHeight: "125%"
                            },
                            className: "pointer-events-none flex aspect-[1/1] w-full select-none items-center justify-center text-center text-[25pt]",
                            children: e.text
                        })
                    })
                }
                return null
            }
        },
        90875: function(e, t, n) {
            n.d(t, {
                R: function() {
                    return a
                },
                i: function() {
                    return l
                }
            });
            var r = n(5865),
                i = n(27191),
                o = n(40489);

            function a(e) {
                return (0, o.Z)({
                    "col-span-full h-0.5 bg-custom-accent": "full" === e,
                    "col-span-full @tablet:col-start-2 @tablet:col-span-4 h-0.5 bg-custom-accent": "narrow" === e,
                    "col-span-full flex items-center justify-center space-x-4 w-full": "dotted" === e
                })
            }
            let l = r.NB.create({
                name: "divider",
                addOptions: () => ({
                    variants: ["full", "narrow", "dotted"],
                    HTMLAttributes: {}
                }),
                group: "block",
                renderHTML(e) {
                    let {
                        HTMLAttributes: t,
                        node: n
                    } = e, i = ["div", (0, r.P1)(this.options.HTMLAttributes, t, {
                        class: (0, o.Z)("relative grid w-full cursor-pointer grid-cols-4 gap-x-6 rounded-sm @tablet:grid-cols-6 @laptop:gap-x-12", "dotted" === n.attrs.variant ? "-my-2.5 py-2.5" : "-my-3 py-3")
                    })], l = ["div", {
                        class: a(n.attrs.variant)
                    }], s = ["div", {
                        class: "h-1.5 w-1.5 rounded-full bg-custom-accent"
                    }];
                    return "dotted" === n.attrs.variant && l.push(s, s, s), i.push(l), i
                },
                addAttributes: () => ({
                    variant: {
                        default: "full",
                        parseHTML: e => e.dataset.variant,
                        renderHTML: e => ({
                            "data-variant": e.variant
                        })
                    }
                }),
                addCommands() {
                    return {
                        setDivider: e => t => {
                            let {
                                chain: n,
                                state: r,
                                commands: o
                            } = t, {
                                $to: a
                            } = r.selection, l = n();
                            return 0 === a.parentOffset ? o.insertContentAt(Math.max(a.pos - 1, 0), {
                                type: this.name,
                                attrs: e
                            }) : o.insertContent({
                                type: this.name,
                                attrs: e
                            }), l.command(e => {
                                let {
                                    tr: t,
                                    dispatch: n
                                } = e;
                                if (n && !this.editor.isActive("divider")) {
                                    let {
                                        $to: e
                                    } = t.selection, n = e.end();
                                    if (e.nodeAfter) e.nodeAfter.isTextblock ? t.setSelection(i.Bs.create(t.doc, e.pos + 1)) : e.nodeAfter.isBlock ? t.setSelection(i.qv.create(t.doc, e.pos)) : t.setSelection(i.Bs.create(t.doc, e.pos));
                                    else {
                                        var r;
                                        let o = null === (r = e.parent.type.contentMatch.defaultType) || void 0 === r ? void 0 : r.create();
                                        o && (t.insert(n, o), t.setSelection(i.Bs.create(t.doc, n + 1)))
                                    }
                                    t.scrollIntoView()
                                }
                                return !0
                            }).run()
                        }
                    }
                }
            })
        },
        3936: function(e, t, n) {
            n.d(t, {
                X: function() {
                    return a
                }
            });
            var r = n(5865),
                i = n(7490),
                o = n(56540);
            let a = i.Z.configure({
                levels: [1, 2, 3, 4]
            }).extend({
                renderHTML(e) {
                    let {
                        node: t,
                        HTMLAttributes: n
                    } = e, i = this.options.levels.includes(t.attrs.level) ? t.attrs.level : this.options.levels[0];
                    return ["h".concat(i), (0, r.P1)(this.options.HTMLAttributes, n, {
                        class: "".concat(o.ID.heading[i], " relative")
                    }), 0]
                },
                addInputRules: () => []
            })
        },
        3043: function(e, t, n) {
            n.d(t, {
                X: function() {
                    return a
                },
                m: function() {
                    return o
                }
            });
            var r = n(2784);
            let i = r.createContext(""),
                o = i.Provider;

            function a() {
                return r.useContext(i)
            }
        },
        60714: function(e, t, n) {
            n.d(t, {
                e: function() {
                    return o
                },
                w: function() {
                    return i
                }
            });
            var r = n(2784);
            let i = r.createContext({
                    editing: !1
                }),
                o = () => r.useContext(i)
        },
        51620: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return a
                },
                y: function() {
                    return l
                }
            });
            var r = n(52322),
                i = n(2784);
            let o = (0, i.createContext)({
                instantImages: {},
                addInstantImages: () => {}
            });

            function a(e) {
                let {
                    children: t
                } = e, [n, a] = (0, i.useState)({}), l = (0, i.useMemo)(() => ({
                    instantImages: n,
                    addInstantImages: e => {
                        a(t => {
                            let n = { ...t
                            };
                            return e.forEach(e => {
                                n[e.s3Src] = e.localSrc
                            }), n
                        })
                    }
                }), [n]);
                return (0, r.jsx)(o.Provider, {
                    value: l,
                    children: t
                })
            }

            function l() {
                return (0, i.useContext)(o)
            }
        },
        62399: function(e, t, n) {
            n.d(t, {
                V: function() {
                    return o
                },
                Z: function() {
                    return a
                }
            });
            var r = n(2784);
            let i = r.createContext({
                    isPdfView: !1,
                    border: !1,
                    pageGap: "none",
                    shadow: !1,
                    hideTableOfContents: !1,
                    topMargin: !1,
                    isPreview: !1,
                    forPrint: !1,
                    hideButtons: !1,
                    previewSize: "md"
                }),
                o = i.Provider;

            function a() {
                return r.useContext(i)
            }
        },
        49329: function(e, t, n) {
            n.d(t, {
                R: function() {
                    return o
                }
            });
            var r = n(82066),
                i = n(54962);

            function o(e) {
                let {
                    client: t
                } = i.SX.useContext(), n = async n => {
                    var r;
                    let i = null == e ? void 0 : null === (r = e.path) || void 0 === r ? void 0 : r.call(e, n),
                        {
                            url: o,
                            fields: a
                        } = await t.query("FileStorage.presignedPost", {
                            path: i,
                            mimeType: n.type,
                            prefix: null == e ? void 0 : e.prefix,
                            metadata: n.metadata
                        }),
                        l = new FormData;
                    Object.entries(a).forEach(e => {
                        let [t, n] = e;
                        l.append(t, n)
                    }), l.append("file", n);
                    let s = await fetch(o, {
                        method: "POST",
                        body: l
                    });
                    if (!s.ok) throw Error(await s.text());
                    return "".concat(o, "/").concat(a.key)
                };
                return (0, r.useMutation)(n)
            }
        },
        33788: function(e, t, n) {
            n.d(t, {
                R: function() {
                    return s
                }
            });
            var r = n(5632),
                i = n(52069),
                o = n(13254),
                a = n(64617),
                l = n(54962);

            function s() {
                let {
                    delayMs: e = 0
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = (0, r.useRouter)(), n = (0, o.I)(), {
                    cancelQuery: s,
                    getQueryData: c,
                    setQueryData: u,
                    invalidateQueries: d
                } = l.SX.useContext();
                return (0, l.Qg)("Page.update", {
                    delayMs: e,
                    onMutate: async e => {
                        let t;
                        await s(["Page.find", e.id]);
                        let n = c(["Page.find", e.id]);
                        if (n && u(["Page.find", e.id], { ...n,
                                ...e
                            }), n && (await s(["Page.findAllBySiteId", n.siteId]), t = c(["Page.findAllBySiteId", n.siteId]))) {
                            let r = t.findIndex(t => t.id === e.id);
                            if (r >= 0) {
                                let i = { ...n,
                                    ...t[r],
                                    ...e
                                };
                                u(["Page.findAllBySiteId", n.siteId], [...t.slice(0, r), i, ...t.slice(r + 1)])
                            } else d(["Page.findAllBySiteId", n.siteId])
                        }
                        return {
                            prevPage: n,
                            prevPagesByParentSite: t
                        }
                    },
                    onSuccess: (e, r) => {
                        var o, l;
                        u(["Page.find", e.id], e);
                        let s = c(["Page.findAllBySiteId", e.siteId]);
                        if (s) {
                            let t = s.findIndex(t => t.id === e.id);
                            if (t >= 0) {
                                let n = [...s.slice(0, t), e, ...s.slice(t + 1)];
                                u(["Page.findAllBySiteId", e.siteId], n)
                            } else d(["Page.findAllBySiteId", e.siteId])
                        }
                        e.id === n && Array.isArray(t.query.slugs) && e.slug !== (null !== (o = t.query.slugs[1]) && void 0 !== o ? o : "") && t.replace({
                            query: { ...t.query,
                                slugs: [t.query.slugs[0], ...e.slug ? [e.slug] : []]
                            },
                            hash: window.location.hash
                        }, void 0, {
                            shallow: !0
                        }), null != r.published && ((0, a.w)({
                            event: r.published ? "publishProjectPage" : "unpublishProjectPage",
                            pageId: r.id,
                            thumbnailType: (0, i.gi)(e.thumbnail)
                        }), r.published && d(["Feedback.getSurveyState"])), null != r.title && "PROJECT" === e.type && (0, a.w)({
                            event: "updateProjectPreviewTitle",
                            pageId: r.id
                        }), r.thumbnail && ((0, a.w)({
                            event: "updateImageSrc",
                            pageType: e.type
                        }), "PROJECT" === e.type && (0, a.w)({
                            event: "updateProjectPreviewImageSrc",
                            pageId: r.id,
                            thumbnailType: (0, i.gi)(null !== (l = r.thumbnail) && void 0 !== l ? l : null)
                        }))
                    },
                    onError: (e, t, n) => {
                        u(["Page.find", t.id], n.prevPage), n.prevPage && u(["Page.findAllBySiteId", n.prevPage.siteId], n.prevPagesByParentSite)
                    }
                })
            }
        },
        17531: function(e, t, n) {
            n.d(t, {
                q: function() {
                    return o
                }
            });
            var r = n(34233),
                i = n(54962);

            function o(e) {
                let {
                    enabled: t
                } = (0, r.KL)(), n = t && !!e && !e.startsWith("demo-") && !e.startsWith("onboarding-");
                return i.SX.useQuery(["Page.find", e], {
                    enabled: n
                })
            }
        },
        17641: function(e, t, n) {
            n.d(t, {
                $: function() {
                    return i
                }
            });
            var r = n(2784);

            function i(e) {
                let t = r.useRef(e);
                return r.useEffect(() => {
                    t.current = e
                }), r.useCallback(function() {
                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    return t.current(...n)
                }, [])
            }
        },
        19130: function(e, t, n) {
            n.d(t, {
                i: function() {
                    return p
                }
            });
            var r = n(75977),
                i = n(86882),
                o = n(2784),
                a = n(22958),
                l = n(41538),
                s = n(86136),
                c = n(51620),
                u = n(49329),
                d = n(64617);

            function p(e) {
                let [t, n] = (0, o.useState)(null), {
                    addInstantImages: p
                } = (0, c.y)(), {
                    mutateAsync: h
                } = (0, u.R)(), g = t => {
                    var r;
                    return null == e || null === (r = e.onError) || void 0 === r || r.call(e, t), n(t), t
                }, f = e => {
                    try {
                        return h(e)
                    } catch (e) {
                        throw Error("Our servers are a bit lazy, please try again later")
                    }
                };
                return {
                    uploadImage: async (t, r) => {
                        try {
                            var i;
                            n(null);
                            let o = await (0, l.AB)(t),
                                s = await f(r);
                            p([{
                                localSrc: t.src,
                                s3Src: s
                            }]);
                            let c = (0, a.l$)(t);
                            if (null == e ? void 0 : e.onCrop) return e.onCrop({
                                src: s,
                                localSrc: o.src,
                                originalWidth: t.naturalWidth,
                                originalHeight: t.naturalHeight,
                                blurHash: c
                            }), null;
                            let u = { ...o,
                                localSrc: o.src,
                                src: s,
                                crop: void 0,
                                blurHash: c
                            };
                            return null == e || null === (i = e.onDone) || void 0 === i || i.call(e, u), u
                        } catch (e) {
                            return e instanceof Error && g(e.message), null
                        }
                    },
                    error: t,
                    handleRejection: t => {
                        if (0 === t.length) return null;
                        let [{
                            errors: [n],
                            file: o
                        }] = t;
                        switch (n.code) {
                            case "file-invalid-type":
                                if ((null == e ? void 0 : e.accept) === "document-only") return g("We only handle PDF documents");
                                return g("We only handle JPG, PNG, GIF or WEBP images".concat(i.Ab ? " and PDF documents" : ""));
                            case "file-too-large":
                                return (0, d.w)({
                                    event: "maxUploadSizeExceeded",
                                    fileSize: (0, s.td)(o.size),
                                    fileType: o.type
                                }), g("Shoot, ".concat(o.name, " (").concat((0, s.td)(o.size), ") is larger than ").concat((0, s.td)(r.wG), "."));
                            case "too-many-files":
                                if (null == e ? void 0 : e.multi) return g("Too many files selected, maximum 10 files can be uploaded at the same time");
                                return g("Hold on, you can't upload more than one file here");
                            default:
                                return null
                        }
                    }
                }
            }
        },
        43609: function(e, t, n) {
            n.d(t, {
                u: function() {
                    return m
                }
            });
            var r = n(53014),
                i = n(2784),
                o = n(97334),
                a = n(1918),
                l = n(97847),
                s = n(81380);
            let c = {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 1
                },
                u = {
                    r: 255,
                    g: 255,
                    b: 255,
                    a: 1
                };

            function d(e) {
                return "rgba(".concat(e.r, ", ").concat(e.g, ", ").concat(e.b, ", ").concat(e.a, ")")
            }

            function p(e) {
                var t, n;
                let r = (null === (t = e.match(/rgba?\(([^)]+)\)/)) || void 0 === t ? void 0 : t[1].split(",")) || ["0", "0", "0", "1"];
                return {
                    r: Number.parseInt(r[0].trim(), 10),
                    g: Number.parseInt(r[1].trim(), 10),
                    b: Number.parseInt(r[2].trim(), 10),
                    a: Number.parseFloat((null === (n = r[3]) || void 0 === n ? void 0 : n.trim()) || "1")
                }
            }

            function h(e) {
                return {
                    r: e.r,
                    g: e.g,
                    b: e.b,
                    a: "a" in e ? e.a : 1
                }
            }

            function g(e, t, n) {
                let i = d(e),
                    a = (0, o.Uk)(t),
                    l = (0, o.Uk)(n);
                return (0, r.mj)(i, a) >= (0, r.mj)(i, l) ? t : n
            }

            function f(e, t, n, i) {
                let o = d(e),
                    a = d(t);
                return g(p((0, r.CD)(o, a, .5)), n, i)
            }

            function m() {
                let e = (0, l.$)(),
                    t = (0, s.W)(e).data,
                    n = (0, i.useMemo)(() => {
                        if (!t) return {
                            heading: c,
                            paragraph: c,
                            button: c,
                            shape: c,
                            background: u
                        };
                        let {
                            colors: e
                        } = (0, a.PU)(t);
                        return {
                            heading: h(e.heading),
                            paragraph: h(e.paragraph),
                            button: h(e.button),
                            shape: h(e.shape),
                            background: h(e.background)
                        }
                    }, [t]),
                    {
                        solidColorOptions: d,
                        linearGradientOptions: m,
                        radialGradientOptions: x
                    } = (0, i.useMemo)(() => {
                        let {
                            background: e,
                            heading: t,
                            button: i
                        } = n, a = (0, o.Uk)(e), l = (0, o.Uk)(t), s = (0, o.Uk)(i), c = {
                            solid1: p((0, r.CD)(a, l, .08)),
                            solid2: p((0, r.CD)(a, l, .16)),
                            solid3: p((0, r.CD)(a, s, .28)),
                            solid4: p((0, r.CD)(a, s, .48)),
                            solid5: p((0, r.CD)(a, l, .72)),
                            linear1End: p((0, r.CD)(a, l, .32)),
                            linear2Start: p((0, r.CD)(a, l, .16)),
                            linear2End: p((0, r.CD)(a, l, .64)),
                            linear4Start: p((0, r.CD)(a, s, .24)),
                            linear4End: p((0, r.CD)(a, s, .64)),
                            linear5Start: p((0, r.CD)(a, l, .64))
                        };
                        return {
                            solidColorOptions: [{
                                id: 1,
                                backgroundColor: c.solid1,
                                textColor: t
                            }, {
                                id: 2,
                                backgroundColor: c.solid2,
                                textColor: t
                            }, {
                                id: 3,
                                backgroundColor: c.solid3,
                                textColor: t
                            }, {
                                id: 4,
                                backgroundColor: c.solid4,
                                textColor: g(c.solid4, t, e)
                            }, {
                                id: 5,
                                backgroundColor: c.solid5,
                                textColor: e
                            }],
                            linearGradientOptions: [{
                                id: 1,
                                color1: e,
                                color2: c.linear1End,
                                textColor: t
                            }, {
                                id: 2,
                                color1: c.linear2Start,
                                color2: c.linear2End,
                                textColor: f(c.linear2Start, c.linear2End, t, e)
                            }, {
                                id: 3,
                                color1: e,
                                color2: i,
                                textColor: t
                            }, {
                                id: 4,
                                color1: c.linear4Start,
                                color2: c.linear4End,
                                textColor: t
                            }, {
                                id: 5,
                                color1: c.linear5Start,
                                color2: t,
                                textColor: e
                            }],
                            radialGradientOptions: [{
                                id: 1,
                                color1: c.linear1End,
                                color2: e,
                                textColor: t
                            }, {
                                id: 2,
                                color1: c.linear2End,
                                color2: c.linear2Start,
                                textColor: f(c.linear2End, c.linear2Start, t, e)
                            }, {
                                id: 3,
                                color1: i,
                                color2: e,
                                textColor: t
                            }, {
                                id: 4,
                                color1: c.linear4End,
                                color2: c.linear4Start,
                                textColor: t
                            }, {
                                id: 5,
                                color1: t,
                                color2: c.linear5Start,
                                textColor: e
                            }]
                        }
                    }, [n]);
                return {
                    siteColors: n,
                    solidColorOptions: d,
                    linearGradientOptions: m,
                    radialGradientOptions: x
                }
            }
        },
        70541: function(e, t, n) {
            n.d(t, {
                Kc: function() {
                    return r
                },
                d7: function() {
                    return a
                },
                pj: function() {
                    return o
                },
                s3: function() {
                    return l
                },
                zj: function() {
                    return i
                }
            });
            let r = ["image/gif", "image/jpeg", "image/png", "image/webp"],
                i = {
                    "image/*": [".gif", ".jpeg", ".png", ".webp"]
                },
                o = ["application/pdf"],
                a = {
                    "application/pdf": [".pdf"]
                },
                l = {
                    "video/*": [".mp4", ".mov", ".webm"]
                }
        },
        75977: function(e, t, n) {
            n.d(t, {
                AQ: function() {
                    return h
                },
                D9: function() {
                    return i
                },
                Jg: function() {
                    return s
                },
                RI: function() {
                    return a
                },
                Xe: function() {
                    return g
                },
                Yl: function() {
                    return u
                },
                cu: function() {
                    return f
                },
                i1: function() {
                    return c
                },
                lM: function() {
                    return l
                },
                nf: function() {
                    return p
                },
                pu: function() {
                    return m
                },
                rf: function() {
                    return d
                },
                t8: function() {
                    return o
                },
                wG: function() {
                    return r
                }
            });
            let r = 1e7,
                i = 52428800,
                o = 3600,
                a = 10,
                l = 1,
                s = 3,
                c = 7,
                u = 1,
                d = 125,
                p = 10,
                h = 5,
                g = 3,
                f = 10,
                m = 7
        },
        52069: function(e, t, n) {
            function r(e) {
                if (!e) return "DEFAULT_PLACEHOLDER_IMAGE";
                if ("string" == typeof e) return "ILLUSTRATION";
                if ("object" == typeof e && "type" in e && "content" in e) switch (e.type) {
                    case "image":
                    default:
                        return "THUMBNAIL_DESIGN_IMAGE";
                    case "mockup":
                        return "THUMBNAIL_DESIGN_MOCKUP";
                    case "text":
                        return "THUMBNAIL_DESIGN_TEXT"
                }
                return "object" == typeof e && "src" in e && "originalWidth" in e ? e.src.includes("images.pexels.com") ? "PEXELS_IMAGE" : e.src.startsWith("/") ? "DEFAULT_PLACEHOLDER_IMAGE" : "UPLOADED_IMAGE" : "DEFAULT_PLACEHOLDER_IMAGE"
            }

            function i(e) {
                return "BLOG_POST" === e.type ? "blog post" : e.externalUrl ? e.externalUrl.startsWith("https://archifolio.s3.us-east-1.amazonaws.com") && e.externalUrl.endsWith(".pdf") ? "PDF" : "link" : "page"
            }

            function o(e) {
                var t;
                return "BLOG_POST" !== e.type ? e.published ? "published" : "draft" : e.published ? (null !== (t = e.blogPostPublishUnixTimestamp) && void 0 !== t ? t : 0) < Math.ceil(Date.now() / 1e3) ? "published" : "scheduled" : "draft"
            }
            n.d(t, {
                De: function() {
                    return o
                },
                gi: function() {
                    return r
                },
                rh: function() {
                    return i
                }
            }), n(86882)
        },
        74310: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return i
                }
            });
            var r = n(95827);
            let i = [{
                component: r.Thumbnails.Art,
                name: "ART",
                displayName: "Art"
            }, {
                component: r.Thumbnails.Beauty,
                name: "BEAUTY",
                displayName: "Beauty"
            }, {
                component: r.Thumbnails.BrowserLink,
                name: "BROWSER_LINK",
                displayName: "Browser link"
            }, {
                component: r.Thumbnails.Business,
                name: "BUSINESS",
                displayName: "Business"
            }, {
                component: r.Thumbnails.Cars,
                name: "CARS",
                displayName: "Cars"
            }, {
                component: r.Thumbnails.Certification,
                name: "CERTIFICATION",
                displayName: "Certification"
            }, {
                component: r.Thumbnails.Cinema,
                name: "CINEMA",
                displayName: "Cinema"
            }, {
                component: r.Thumbnails.CvAndResume,
                name: "CV_AND_RESUME",
                displayName: "CV & Resume"
            }, {
                component: r.Thumbnails.Education,
                name: "EDUCATION",
                displayName: "Education"
            }, {
                component: r.Thumbnails.FamilyAndKids,
                name: "FAMILY_AND_KIDS",
                displayName: "Family & kids"
            }, {
                component: r.Thumbnails.Finance,
                name: "FINANCE",
                displayName: "Finance"
            }, {
                component: r.Thumbnails.Food,
                name: "FOOD",
                displayName: "Food"
            }, {
                component: r.Thumbnails.Interviews,
                name: "INTERVIEWS",
                displayName: "Interviews"
            }, {
                component: r.Thumbnails.Laptop,
                name: "LAPTOP",
                displayName: "Laptop"
            }, {
                component: r.Thumbnails.Law,
                name: "LAW",
                displayName: "Law"
            }, {
                component: r.Thumbnails.Marketing,
                name: "MARKETING",
                displayName: "Marketing"
            }, {
                component: r.Thumbnails.Music,
                name: "MUSIC",
                displayName: "Music"
            }, {
                component: r.Thumbnails.Nature,
                name: "NATURE",
                displayName: "Nature"
            }, {
                component: r.Thumbnails.PdfFile,
                name: "PDF_FILE",
                displayName: "PDF file"
            }, {
                component: r.Thumbnails.Phone,
                name: "PHONE",
                displayName: "Phone"
            }, {
                component: r.Thumbnails.Photography,
                name: "PHOTOGRAPHY",
                displayName: "Photography"
            }, {
                component: r.Thumbnails.Politics,
                name: "POLITICS",
                displayName: "Politics"
            }, {
                component: r.Thumbnails.RealEstate,
                name: "REAL_ESTATE",
                displayName: "Real estate"
            }, {
                component: r.Thumbnails.Relationships,
                name: "RELATIONSHIPS",
                displayName: "Relationships"
            }, {
                component: r.Thumbnails.SportsAndFitness,
                name: "SPORTS_AND_FITNESS",
                displayName: "Sports & fitness"
            }, {
                component: r.Thumbnails.Television,
                name: "TELEVISION",
                displayName: "Television"
            }, {
                component: r.Thumbnails.TravelAndTourism,
                name: "TRAVEL_AND_TOURISM",
                displayName: "Travel & Tourism"
            }, {
                component: r.Thumbnails.Writing,
                name: "WRITING",
                displayName: "Writing"
            }]
        },
        37452: function(e, t, n) {
            n.d(t, {
                Ul: function() {
                    return o
                },
                te: function() {
                    return a
                },
                xr: function() {
                    return i
                }
            });
            var r = n(19872);
            let i = r.Ry({
                r: r.Rx().int().min(0).max(255),
                g: r.Rx().int().min(0).max(255),
                b: r.Rx().int().min(0).max(255),
                a: r.Rx().min(0).max(1).transform(e => Math.round(100 * e) / 100)
            });
            r.Ry({
                bgColor: i,
                accentColor: i,
                h1Color: i,
                h2Color: i,
                h3Color: i,
                h4Color: i,
                pColor: i
            }), r.Ry({
                color: i,
                swatchIndex: r.Rx().min(0).max(4)
            });
            let o = r.Ry({
                    userColor: i,
                    isComplementary: r.O7(),
                    heading: i.omit({
                        a: !0
                    }),
                    paragraph: i.omit({
                        a: !0
                    }),
                    button: i.omit({
                        a: !0
                    }),
                    shape: i.omit({
                        a: !0
                    }),
                    background: i.omit({
                        a: !0
                    })
                }),
                a = r.Km(["LEGACY_CHESTNUT", "LEGACY_DIGITAL", "LEGACY_EXPEDITION", "LEGACY_EXPERIMENTAL", "LEGACY_FLAME", "LEGACY_INK", "LEGACY_OLIVE", "LEGACY_RUST", "LEGACY_SAFARI", "LEGACY_SKYSCRAPER", "LEGACY_PEONY", "LEGACY_MAUVE", "LEGACY_FOSTER", "LEGACY_PARLER", "LEGACY_TADAO", "LEGACY_BREUER", "LEGACY_AALTO", "LEGACY_BRAMANTE", "LEGACY_RIETVELD", "LEGACY_UTZON", "LEGACY_MIDNIGHT", "LEGACY_SEAFOAM", "INKWELL", "GRANITE_GREY", "BRONZE_GLINT", "PASTEL_PINK", "CORNFLOWER_DIP", "OLIVE_N_SAGE", "MARMALADE", "BLUSH", "CLOVER_COPY", "SEASIDE", "HYACINTH", "CHARCOAL", "DEEP_TAUPE", "CARDBOARD_CLIP", "BURNT_SIENNA", "OXFORD", "PITCH_BLACK", "CHAMPAGNE", "SPANISH_VIRIDIAN", "CINNABAR", "DOLLHOUSE", "MIST", "INK_COPY", "ONYX", "CARDAMOM", "ESPRESSO", "INDIGO_COPY", "MOONLIGHT", "PINEWOOD", "SOMMELIER", "MUSHROOM", "GRAPHITE", "INK", "CUSHION", "CLAY", "CONCRETE", "BASALT", "CARDBOARD", "COAL", "OBSIDIAN", "FUSE", "VOLCANO", "FROSTBITE", "MAGENTA", "CLOVER", "POPPY", "SUNNY_SIDE", "INDIGO", "PORCELAIN", "RED_MARKER", "BLUE_MARKER"])
        },
        78909: function(e, t, n) {
            n.d(t, {
                HD: function() {
                    return h
                },
                Pr: function() {
                    return c
                },
                hI: function() {
                    return u
                },
                vE: function() {
                    return l
                },
                vZ: function() {
                    return s
                }
            });
            var r = n(19872),
                i = n(37452),
                o = n(49338),
                a = n(72467);
            let l = r.Ry({
                    text: r.Z_(),
                    fontFamily: o.$F
                }),
                s = r.Ry({
                    type: r.Km(["linear", "radial"]),
                    colors: r.IX(i.xr).length(2).or(r.lB())
                }),
                c = r.Km(["SQUARE", "ROUNDED_SQUARE", "CIRCLE", "CAPSULE", "DOME", "BLOB", "CLOUD", "FLOWER", "BURST"]),
                u = a.KA.extend({
                    shape: c,
                    outlined: r.O7(),
                    shadow: r.O7(),
                    grayscale: r.O7().default(!1).nullish()
                }).or(a.KA.extend({
                    mockup: a.BZ,
                    shadow: r.O7()
                })),
                d = u.or(l),
                p = i.xr.or(s).or(r.i0("transparent")),
                h = r.Ry({
                    type: r.Km(["image", "mockup", "text"]),
                    backgroundType: r.Km(["solid", "gradient", "transparent"]),
                    content: d,
                    background: p
                })
        },
        25381: function(e, t, n) {
            n.d(t, {
                D: function() {
                    return o
                }
            });
            var r = n(52322),
                i = n(61463);

            function o(e) {
                let {
                    percentage: t,
                    children: n,
                    className: o
                } = e, a = 50 * Math.PI * 2, l = a / 100 * t;
                return (0, r.jsxs)("div", {
                    "data-state": 0 === t ? "idle" : "progress",
                    className: (0, i.Z)("absolute inset-0", o),
                    children: [(0, r.jsx)("svg", {
                        className: "absolute inset-0 -rotate-90 rounded-full",
                        viewBox: "0 0 100 100",
                        children: (0, r.jsx)("circle", {
                            strokeWidth: 10,
                            strokeDasharray: "".concat(l, " ").concat(a - l),
                            cx: 50,
                            cy: 50,
                            r: 50
                        })
                    }), (0, r.jsx)("div", {
                        className: "relative z-10",
                        children: n
                    })]
                })
            }
        },
        1697: function(e, t, n) {
            n.d(t, {
                C: function() {
                    return m
                },
                Y: function() {
                    return d
                }
            });
            var r = n(52322),
                i = n(23094),
                o = n(61463),
                a = n(1675),
                l = n(2784),
                s = n(27403),
                c = n(73114);
            let u = l.createContext({}),
                d = () => l.useContext(u),
                p = l.createContext(!1),
                h = () => l.useContext(p);

            function g(e) {
                var t, n;
                let {
                    id: a,
                    children: s,
                    className: c,
                    onRemove: d,
                    padding: p = "md"
                } = e, h = (0, l.useRef)(null), g = null !== (n = null === (t = h.current) || void 0 === t ? void 0 : t.querySelectorAll("[data-editable-module=true]").length) && void 0 !== n ? n : 0, [f, m] = (0, l.useState)(!1), {
                    active: x
                } = (0, i.Cj)(), v = (0, l.useCallback)(e => {
                    if (!h.current) return;
                    let t = h.current;
                    if (e) {
                        var n;
                        t = null !== (n = h.current.querySelector('[data-editable-module-id="'.concat(e, '"]'))) && void 0 !== n ? n : h.current
                    }
                    let r = null == t ? void 0 : t.querySelector("[data-editable-toolbar-edit]");
                    null == r || r.click()
                }, []), b = (0, l.useCallback)(() => {
                    var e;
                    if (d) {
                        d();
                        return
                    }
                    let t = null === (e = h.current) || void 0 === e ? void 0 : e.querySelector("[data-editable-toolbar-delete]");
                    null == t || t.click()
                }, [d]), y = (0, l.useCallback)(e => {
                    let t = e.target;
                    ("Escape" === e.key || "Tab" === e.key) && t.blur()
                }, [v, b]), w = "object" == typeof p ? p.x : p, C = "object" == typeof p ? p.y : p, j = (0, l.useMemo)(() => ({
                    setPassive: m,
                    openEditPanel: v,
                    passive: f,
                    element: h.current
                }), [v, f]);
                return (0, r.jsx)(u.Provider, {
                    value: j,
                    children: (0, r.jsx)("div", {
                        ref: h,
                        id: a ? "editable_".concat(a) : void 0,
                        tabIndex: 0,
                        role: "button",
                        "data-editable-root": !0,
                        "data-editable-keyboard-target": !0,
                        onKeyDown: y,
                        onBlur: () => m(!1),
                        className: (0, o.Z)("relative cursor-pointer focus-within:z-active-module focus:z-active-module focus:cursor-grab", x && "cursor-grabbing bg-custom-bg", g ? "group/editable-root" : "group/editable", "hover:ring-1 hover:ring-custom-bg-24", "focus:outline-none focus:ring-2 focus:ring-graphite-100 focus:hover:ring-2 focus:hover:ring-graphite-100 dark:focus:ring-graphite-0 dark:focus:hover:ring-graphite-0", "focus-within:cursor-auto", f && g > 1 ? "focus-within:outline-dashed focus-within:outline-1 focus-within:outline-custom-bg-24 focus-within:hover:ring-0" : "focus-within:ring-2 focus-within:ring-graphite-100 focus-within:hover:ring-2 focus-within:hover:ring-graphite-100 dark:focus-within:ring-graphite-0 dark:focus-within:hover:ring-graphite-0", {
                            "-mx-6 px-6": "md" === w,
                            "-my-6 py-6": "md" === C,
                            "-mx-2 px-2": "xs" === w,
                            "-my-2 py-2": "xs" === C
                        }, "none" !== w && "none" !== C && "rounded ring-inset", c),
                        children: s
                    })
                })
            }

            function f(e) {
                let {
                    children: t,
                    className: n
                } = e, i = h(), {
                    passive: a
                } = d();
                return a && !i ? null : (0, r.jsx)("div", {
                    className: (0, o.Z)("pointer-events-none absolute bottom-0 left-0 z-active-module flex w-full translate-y-full flex-wrap gap-2 pt-2 opacity-0 group-focus-within/editable:pointer-events-auto group-focus-within/editable:opacity-100", "group-focus-within/editable-module:pointer-events-auto group-focus-within/editable-module:opacity-100", n),
                    children: t
                })
            }

            function m(e) {
                return (0, r.jsx)(g, { ...e
                })
            }
            f.Item = function(e) {
                let {
                    Icon: t,
                    children: n,
                    ...i
                } = e;
                return (0, r.jsxs)(a.T, {
                    adaptive: !0,
                    as: "button",
                    type: "button",
                    size: "xs",
                    noShadow: !0,
                    shape: "rounded-rectangle",
                    className: "inline-flex items-center gap-1",
                    ...i,
                    children: [(0, r.jsx)(t, {
                        "aria-hidden": !0,
                        className: "h-4"
                    }), n]
                })
            }, m.Root = g, m.Module = function(e) {
                let {
                    noRing: t,
                    removable: n,
                    className: a,
                    ...l
                } = e, {
                    active: s
                } = (0, i.Cj)(), {
                    setPassive: c
                } = d();
                return (0, r.jsx)(p.Provider, {
                    value: !0,
                    children: (0, r.jsx)("div", {
                        tabIndex: 0,
                        role: "button",
                        "data-editable-module": !0,
                        onFocus: () => c(!0),
                        onBlur: () => c(!1),
                        className: (0, o.Z)("group/editable-module pointer-events-none relative -m-2 cursor-pointer rounded p-2 ring-inset ring-custom-bg-24", s && "cursor-grabbing", !1 === n && "pointer-events-auto cursor-auto", "group-focus-within/editable-root:pointer-events-auto group-focus-within/editable-root:cursor-auto", !s && !t && "hover:ring-1 focus:ring-2 focus:ring-graphite-100 dark:focus:ring-graphite-0", !t && "group-focus-within/editable-root:focus-within:ring-2 group-focus-within/editable-root:focus-within:ring-graphite-100 group-focus-within/editable-root:focus-within:hover:ring-2 dark:group-focus-within/editable-root:focus-within:ring-graphite-0", a),
                        ...l
                    })
                })
            }, m.Toolbar = function(e) {
                let {
                    children: t,
                    onEdit: n,
                    onRemove: a,
                    className: l
                } = e, {
                    passive: u
                } = d(), p = h(), {
                    active: g
                } = (0, i.Cj)(), f = (n || a) && (0, r.jsxs)(r.Fragment, {
                    children: [n && (0, r.jsx)(c.o.Item, {
                        tooltip: "Edit",
                        "data-editable-toolbar-edit": !0,
                        onClick: n,
                        icon: (0, r.jsx)(s.z, {
                            className: "h-6 w-6"
                        }),
                        children: "Edit"
                    }), n && a && (0, r.jsx)(c.o.Separator, {}), a && (0, r.jsx)(c.o.Item, {
                        tooltip: "Remove",
                        "data-editable-toolbar-delete": !0,
                        onClick: a,
                        intent: "danger",
                        icon: (0, r.jsx)(s.HG, {
                            className: "h-6 w-6"
                        })
                    })]
                });
                return (0, r.jsx)(c.o, {
                    className: (0, o.Z)("pointer-events-none absolute -top-2 z-popover -m-6 -translate-y-full overflow-visible opacity-0", (g || u && !p) && "invisible", p ? ["group-focus-within/editable-module:pointer-events-auto group-focus-within/editable-module:opacity-100", "group-focus/editable:pointer-events-none group-focus/editable:opacity-0"] : ["group-focus-within/editable-root:pointer-events-auto group-focus-within/editable-root:opacity-100", "group-focus-within/editable:pointer-events-auto group-focus-within/editable:opacity-100"], l),
                    children: null != t ? t : f
                })
            }, m.Overlay = function(e) {
                let {
                    children: t,
                    trigger: n = "hover"
                } = e, {
                    passive: i
                } = d();
                return (0, r.jsx)("div", {
                    className: (0, o.Z)("pointer-events-none opacity-0", !i && ["group-focus-within/editable-root:pointer-events-auto group-focus-within/editable-root:opacity-100", "group-focus-within/editable:pointer-events-auto group-focus-within/editable:opacity-100", "hover" === n && ["group-hover/editable-root:pointer-events-auto group-hover/editable-root:opacity-100", "group-hover/editable:pointer-events-auto group-hover/editable:opacity-100", "group-focus-within/editable:group-hover/editable:pointer-events-none group-focus-within/editable:group-hover/editable:opacity-0", "group-focus-within/editable-root:group-hover/editable-root:pointer-events-none group-focus-within/editable-root:group-hover/editable-root:opacity-0", "group-focus-within/editable:pointer-events-none group-focus-within/editable:opacity-0", "group-focus-within/editable-root:pointer-events-none group-focus-within/editable-root:opacity-0", "focus-within:opacity-100 group-focus-within/editable:focus-within:opacity-100 group-focus-within/editable:group-hover/editable:focus-within:opacity-100", "focus-within:opacity-100 group-focus-within/editable-root:focus-within:opacity-100 group-focus-within/editable-root:group-hover/editable-root:focus-within:opacity-100"]]),
                    children: t
                })
            }, m.ExtensionRow = f
        },
        73236: function(e, t, n) {
            n.d(t, {
                x: function() {
                    return u
                }
            });
            var r = n(52322),
                i = n(61463),
                o = n(74905),
                a = n(31260),
                l = n(33059),
                s = n(27403),
                c = n(25381);

            function u(e) {
                let {
                    className: t,
                    error: n,
                    progress: u = 0,
                    ...d
                } = e, p = (0, o.uI)({ ...d
                }), h = n ? s.P5 : a.IconUpload;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("input", {
                        type: "file",
                        hidden: !0,
                        ...p.getInputProps()
                    }), (0, r.jsx)("div", { ...p.getRootProps(),
                        className: (0, i.Z)("group/upload-area flex min-h-[340px] cursor-pointer items-center justify-center rounded border border-dashed border-graphite-10", p.isDragActive && "bottom-2 border-graphite-100", t),
                        children: (0, r.jsxs)("div", {
                            className: "flex flex-col items-center justify-center space-y-6",
                            children: [(0, r.jsx)(c.D, {
                                percentage: u,
                                className: (0, i.Z)("relative flex size-18 items-center justify-center rounded-full fill-none stroke-graphite-100", "text-graphite-40 ring-1 ring-inset ring-graphite-10", !n && "data-[state=idle]:group-hover/upload-area:text-graphite-100 data-[state=idle]:group-hover/upload-area:ring-2 data-[state=idle]:group-hover/upload-area:ring-graphite-100", n && "bg-crimson-0 text-crimson-40 ring-2 ring-crimson-40"),
                                children: (0, r.jsx)(h, {
                                    className: "size-6 stroke-none"
                                })
                            }), (0, r.jsxs)("div", {
                                className: "text-center text-base text-graphite-40",
                                children: [(0, r.jsx)("p", {
                                    className: (0, i.Z)(n && "text-crimson-40"),
                                    children: null != n ? n : "Drop here to upload or"
                                }), (0, r.jsxs)(l.Q, {
                                    as: "span",
                                    className: "group-hover/upload-area:underline-thickness-lg group-hover/upload-area:underline group-hover/upload-area:underline-offset-[6px]",
                                    children: ["Select ", d.multiple ? "file(s)" : "a file"]
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        73114: function(e, t, n) {
            n.d(t, {
                o: function() {
                    return u
                }
            });
            var r = n(52322),
                i = n(75746),
                o = n(99038),
                a = n(61463),
                l = n(94854),
                s = n(2784),
                c = n(27403);

            function u(e) {
                return 0 === s.Children.count(e.children) ? null : (0, r.jsx)(o.o8, { ...e,
                    className: (0, a.Z)("relative flex w-max items-stretch justify-center gap-1 overflow-hidden rounded bg-graphite-0 p-1 shadow-soft-md ring-1 ring-graphite-5", e.className)
                })
            }
            let d = s.forwardRef((e, t) => {
                let {
                    children: n,
                    icon: i,
                    tooltip: s,
                    tooltipPlacement: c = "top",
                    intent: u = "neutral",
                    ...d
                } = e;
                return (0, r.jsx)(l.u, {
                    content: s,
                    intent: u,
                    adaptive: "high-contrast",
                    placement: c,
                    children: (0, r.jsxs)(o.hA, {
                        ref: t,
                        ...d,
                        onMouseDown: e => {
                            var t;
                            e.preventDefault(), null === (t = d.onMouseDown) || void 0 === t || t.call(d, e)
                        },
                        className: (0, a.Z)("flex h-11 min-w-[44px] items-center justify-center gap-1 rounded-sm px-3 font-semibold text-graphite-60 hover:bg-graphite-5 active:bg-graphite-10 aria-checked:bg-graphite-10 aria-checked:text-graphite-60", i && "pl-2.5", !n && "p-2.5", {
                            "text-crimson-40": "danger" === u
                        }, d.disabled && "cursor-not-allowed text-graphite-20 hover:bg-graphite-0", d.className),
                        children: [i, n]
                    })
                })
            });
            u.Item = d, u.Separator = function(e) {
                return (0, r.jsx)("div", {
                    className: "-my-1",
                    children: (0, r.jsx)(o.Z0, { ...e,
                        className: "relative h-[3.25rem] w-px bg-graphite-5"
                    })
                })
            }, u.Dropdown = function(e) {
                let {
                    value: t,
                    onChange: n,
                    icon: o,
                    tooltip: u,
                    children: d
                } = e, p = s.Children.map(d, e => s.isValidElement(e) ? s.cloneElement(e, { ...e.props,
                    onClick: () => {
                        null == n || n(e.props.value)
                    }
                }) : null), h = null == p ? void 0 : p.find(e => e.props.value === t);
                if (!h) return null;
                let {
                    type: g,
                    key: f,
                    props: m
                } = h;
                return (0, r.jsxs)(i.fC, {
                    modal: !1,
                    children: [(0, r.jsx)(i.xz, {
                        className: "group/trigger",
                        children: (0, r.jsx)(l.u, {
                            placement: "top",
                            content: u,
                            children: (0, r.jsx)(g, {
                                icon: null != o ? o : m.icon,
                                tooltip: null,
                                className: "pr-1.5",
                                onClick: () => {},
                                children: (0, r.jsx)(c._M, {
                                    className: (0, a.Z)("size-6", "group-data-[state='open']/trigger:rotate-180")
                                })
                            }, f)
                        })
                    }), (0, r.jsx)(i.VY, {
                        tabIndex: -1,
                        autoFocus: !1,
                        asChild: !0,
                        align: "center",
                        sideOffset: 8,
                        children: (0, r.jsx)("div", {
                            className: "flex animate-slide-down items-center gap-1 rounded bg-graphite-0 p-1 shadow-soft-md",
                            "aria-orientation": "horizontal",
                            children: p
                        })
                    })]
                })
            }
        },
        22958: function(e, t, n) {
            n.d(t, {
                Ow: function() {
                    return c
                },
                l$: function() {
                    return l
                },
                nU: function() {
                    return s
                },
                so: function() {
                    return a
                }
            });
            var r = n(390),
                i = n(48834).lW;
            let o = (e, t, n) => {
                let r = 0;
                for (; t < n;) r *= 83, r += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%*+,-.:;=?@[]^_{|}~".indexOf(e[t++]);
                return r
            };

            function a(e) {
                let t = o(e, 2, 6);
                return [t >> 16, t >> 8 & 255, 255 & t]
            }

            function l(e, t) {
                let n = document.createElement("canvas");
                n.width = 10, n.height = 10;
                let i = n.getContext("2d");
                if (!i) throw Error("missing ctx");
                i.drawImage(e, 0, 0, 10, 10);
                let o = i.getImageData(0, "bottom" === t ? 5 : 0, 10, t ? 5 : 10);
                return (0, r.cv)(o.data, 10, t ? 5 : 10, 4, 4)
            }
            async function s(e, t) {
                return l(await new Promise((t, n) => {
                    let r = new Image;
                    r.crossOrigin = "Anonymous", r.src = e, r.addEventListener("load", () => t(r)), r.addEventListener("error", function() {
                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        return n(t)
                    })
                }), t)
            }

            function c(e) {
                if (e) return function(e, t, n) {
                    let r = function(e, t, n) {
                            let r, i, o, a;
                            let l = String.fromCharCode(120, 1),
                                s = [],
                                c = String.fromCharCode(137, 80, 78, 71, 13, 10, 26, 10);
                            for (r = 0; r < 256; r++) {
                                for (o = 0, i = r; o < 8; o++) 1 & i ? i = 3988292384 ^ i >>> 1 : i >>>= 1;
                                s[r] = i
                            }

                            function u(e) {
                                return String.fromCharCode((4278190080 & e) >>> 24, (16711680 & e) >>> 16, (65280 & e) >>> 8, 255 & e)
                            }

                            function d(e, t, n) {
                                let r = 4294967295 ^ function(e, t) {
                                    let n = 4294967295;
                                    for (let e = 0; e < t.length; e++) n = s[(n ^ t.charCodeAt(e)) & 255] ^ n >>> 8;
                                    return n
                                }(0, t + n);
                                return u(e) + t + n + u(r)
                            }
                            let p = d(0, "IEND", ""),
                                h = d(13, "IHDR", u(10) + u(10) + "\b\x06\0\0\0"),
                                g = "";
                            for (let t = 0; t < n.length; t += 4 * e) {
                                if (a = "\0", Array.isArray(n))
                                    for (let r = 0; r < 4 * e; r++) a += String.fromCharCode(255 & n[t + r]);
                                else a += n.substr(t, 4 * e);
                                g += a
                            }
                            let f = l + function(e) {
                                let t, n;
                                let r = "";
                                for (let i = 0; i < e.length; i += 65535) t = e.length - i, n = "", t <= 65535 ? n = "\x01" : (t = 65535, n = "\0"), r += n + String.fromCharCode(255 & t, (65280 & t) >>> 8) + String.fromCharCode(255 & ~t, (65280 & ~t) >>> 8) + e.substring(i, i + t);
                                return r
                            }(g) + u(function(e) {
                                let t = 1,
                                    n = 0;
                                for (let r = 0; r < e.length; r++) n = (n + (t = (t + e.charCodeAt(r)) % 65521)) % 65521;
                                return n << 16 | t
                            }(g));
                            return c + h + d(f.length, "IDAT", f) + p
                        }(10, 10, [...e].map(e => String.fromCharCode(e)).join("")),
                        o = void 0 !== i ? i.from(function(e) {
                            let t = new Uint8Array(e.length);
                            for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
                            return t
                        }(r)).toString("base64") : btoa(r);
                    return "data:image/png;base64,".concat(o)
                }((0, r.Jx)(e, 10, 10), 0, 0)
            }
        },
        43979: function(e, t, n) {
            n.d(t, {
                V: function() {
                    return o
                },
                i: function() {
                    return i
                }
            });
            var r = n(51089);

            function i() {
                if (!r.Jl) return !1;
                let e = navigator.userAgent.toLowerCase();
                return e.includes("chrome") || e.includes("chromium") || e.includes("crios")
            }
            async function o() {
                try {
                    return await navigator.wakeLock.request("screen")
                } catch (e) {
                    return null
                }
            }
        },
        28546: function(e, t, n) {
            n.d(t, {
                FE: function() {
                    return d
                },
                _q: function() {
                    return x
                },
                g6: function() {
                    return m
                },
                c$: function() {
                    return g
                },
                L$: function() {
                    return h
                }
            });
            var r = n(70541),
                i = n(75977),
                o = n(86882),
                a = n(43979),
                l = n(86136),
                s = n(10802);
            async function c(e, t) {
                let n = document.createElement("canvas"),
                    r = await e.getPage(t),
                    i = r.getViewport({
                        scale: 2
                    }),
                    o = n.getContext("2d");
                n.height = i.height, n.width = i.width, o && await r.render({
                    canvasContext: o,
                    viewport: i
                }).promise;
                let a = n.toDataURL("image/webp"),
                    l = await new Promise(e => {
                        n.toBlob(t => e(t), "image/webp", 1)
                    });
                return n.remove(), {
                    dataUrl: a,
                    width: n.width,
                    height: n.height,
                    blob: l
                }
            }
            async function u(e) {
                let t = await new Promise((t, n) => {
                        let r = new FileReader;
                        r.addEventListener("load", e => {
                            var n;
                            t(null === (n = e.target) || void 0 === n ? void 0 : n.result)
                        }), r.addEventListener("error", e => {
                            n(e)
                        }), r.readAsDataURL(e)
                    }),
                    n = await s.Me(t).promise,
                    r = [];
                for (let e = 0; e < n.numPages; e += 1) {
                    let t = c(n, e + 1);
                    r[e] = t
                }
                return Promise.all(r)
            }
            s.Tu.workerSrc = "//unpkg.com/pdfjs-dist@".concat(s.i8, "/build/pdf.worker.min.mjs");
            class d extends Error {
                constructor(e, t, n) {
                    super(t), this.code = e, this.file = n
                }
            }
            let p = new Set([...r.Kc, ...o.Ab ? r.pj : []]);

            function h(e) {
                if (e.length > i.RI) throw new d("MAX_COUNT_EXCEEDED", "Hold on, you can only upload up to ".concat(i.RI, " files at once"));
                for (let t of e) {
                    if (t.size > i.wG) {
                        let e = (0, l.td)(t.size),
                            n = (0, l.td)(i.wG);
                        throw new d("MAX_SIZE_EXCEEDED", "Shoot, ".concat(t.name, " (").concat(e, ") is larger than ").concat(n, "."), t)
                    }
                    if (!p.has(t.type)) throw new d("UNSUPPORTED_MIME_TYPE", "We only handle JPG, PNG, GIF or WEBP images".concat(o.Ab ? " and PDF documents" : ""), t)
                }
            }

            function g(e) {
                return e.split(".").slice(0, -1).join(".")
            }
            async function f(e) {
                let t = await u(e);
                if (1 === t.length) {
                    let [{
                        blob: n,
                        dataUrl: r,
                        width: o,
                        height: a
                    }] = t, s = new Image(o, a);
                    s.src = r;
                    let c = "temp.".concat(n.type.split("/")[1]),
                        u = new File([n], c, {
                            type: n.type
                        });
                    if (u.size > i.wG) throw new d("MAX_SIZE_EXCEEDED", "Turned into an image, this PDF is larger than ".concat((0, l.td)(i.wG), "."), e);
                    return [s, u]
                }
                return {
                    filename: e.name,
                    pages: t
                }
            }
            async function m(e) {
                if ("application/pdf" === e.type) return f(e);
                let t = new Image;
                return t.src = URL.createObjectURL(e), [t, e]
            }
            let x = o.Ab ? (0, a.i)() ? {
                "image/*": [...r.zj["image/*"], ".pdf"],
                ...r.d7
            } : { ...r.d7,
                ...r.zj
            } : r.zj
        },
        73046: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return o
                }
            });
            var r = n(2784),
                i = n(86136);

            function o() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 15e5,
                    [t, n] = r.useState("idle"),
                    [o, a] = r.useState(0),
                    l = r.useRef(0),
                    s = () => {
                        clearInterval(l.current), a(100), n("done")
                    };
                return r.useEffect(() => {
                    if ("loading" === t && o < 99) {
                        let t = (0, i.xT)(Math.min(350 + e / 1e6 * 5, 400), Math.min(1e3 + e / 1e6 * 10, 1e3));
                        l.current = window.setInterval(() => {
                            let e = o + (0, i.xT)(2, 8);
                            e > o ? a(Math.min(e, 99)) : s()
                        }, t)
                    } else s();
                    return () => clearInterval(l.current)
                }, [o, t, e]), [o, {
                    start: () => {
                        clearInterval(l.current), a(0), n("loading")
                    },
                    finish: s
                }]
            }
        }
    }
]);