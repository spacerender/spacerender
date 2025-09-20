try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3aa66fad-d60e-406f-be86-0c9a69419082", e._sentryDebugIdIdentifier = "sentry-dbid-3aa66fad-d60e-406f-be86-0c9a69419082")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4266], {
        62172: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return i
                }
            });
            var r = n(2784),
                o = n(92211),
                a = n(62656),
                l = n(49815);

            function i(e) {
                let t = e + "CollectionProvider",
                    [n, i] = (0, o.b)(t),
                    [u, c] = n(t, {
                        collectionRef: {
                            current: null
                        },
                        itemMap: new Map
                    }),
                    s = e + "CollectionSlot",
                    f = r.forwardRef((e, t) => {
                        let {
                            scope: n,
                            children: o
                        } = e, i = c(s, n), u = (0, a.e)(t, i.collectionRef);
                        return r.createElement(l.g7, {
                            ref: u
                        }, o)
                    }),
                    d = e + "CollectionItemSlot",
                    p = "data-radix-collection-item";
                return [{
                    Provider: e => {
                        let {
                            scope: t,
                            children: n
                        } = e, o = r.useRef(null), a = r.useRef(new Map).current;
                        return r.createElement(u, {
                            scope: t,
                            itemMap: a,
                            collectionRef: o
                        }, n)
                    },
                    Slot: f,
                    ItemSlot: r.forwardRef((e, t) => {
                        let {
                            scope: n,
                            children: o,
                            ...i
                        } = e, u = r.useRef(null), s = (0, a.e)(t, u), f = c(d, n);
                        return r.useEffect(() => (f.itemMap.set(u, {
                            ref: u,
                            ...i
                        }), () => void f.itemMap.delete(u))), r.createElement(l.g7, {
                            [p]: "",
                            ref: s
                        }, o)
                    })
                }, function(t) {
                    let n = c(e + "CollectionConsumer", t);
                    return r.useCallback(() => {
                        let e = n.collectionRef.current;
                        if (!e) return [];
                        let t = Array.from(e.querySelectorAll(`[${p}]`));
                        return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current))
                    }, [n.collectionRef, n.itemMap])
                }, i]
            }
        },
        59241: function(e, t, n) {
            n.d(t, {
                gm: function() {
                    return a
                }
            });
            var r = n(2784);
            let o = (0, r.createContext)(void 0);

            function a(e) {
                let t = (0, r.useContext)(o);
                return e || t || "ltr"
            }
        },
        2923: function(e, t, n) {
            n.d(t, {
                Pc: function() {
                    return I
                },
                ck: function() {
                    return A
                },
                fC: function() {
                    return D
                }
            });
            var r = n(7896),
                o = n(2784),
                a = n(17998),
                l = n(62172),
                i = n(62656),
                u = n(92211),
                c = n(23372),
                s = n(72714),
                f = n(27757),
                d = n(87695),
                p = n(59241);
            let b = "rovingFocusGroup.onEntryFocus",
                m = {
                    bubbles: !1,
                    cancelable: !0
                },
                v = "RovingFocusGroup",
                [g, w, E] = (0, l.B)(v),
                [h, I] = (0, u.b)(v, [E]),
                [R, C] = h(v),
                y = (0, o.forwardRef)((e, t) => (0, o.createElement)(g.Provider, {
                    scope: e.__scopeRovingFocusGroup
                }, (0, o.createElement)(g.Slot, {
                    scope: e.__scopeRovingFocusGroup
                }, (0, o.createElement)(M, (0, r.Z)({}, e, {
                    ref: t
                }))))),
                M = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeRovingFocusGroup: n,
                        orientation: l,
                        loop: u = !1,
                        dir: c,
                        currentTabStopId: v,
                        defaultCurrentTabStopId: g,
                        onCurrentTabStopIdChange: E,
                        onEntryFocus: h,
                        ...I
                    } = e, C = (0, o.useRef)(null), y = (0, i.e)(t, C), M = (0, p.gm)(c), [T = null, F] = (0, d.T)({
                        prop: v,
                        defaultProp: g,
                        onChange: E
                    }), [D, A] = (0, o.useState)(!1), S = (0, f.W)(h), k = w(n), V = (0, o.useRef)(!1), [x, P] = (0, o.useState)(0);
                    return (0, o.useEffect)(() => {
                        let e = C.current;
                        if (e) return e.addEventListener(b, S), () => e.removeEventListener(b, S)
                    }, [S]), (0, o.createElement)(R, {
                        scope: n,
                        orientation: l,
                        dir: M,
                        loop: u,
                        currentTabStopId: T,
                        onItemFocus: (0, o.useCallback)(e => F(e), [F]),
                        onItemShiftTab: (0, o.useCallback)(() => A(!0), []),
                        onFocusableItemAdd: (0, o.useCallback)(() => P(e => e + 1), []),
                        onFocusableItemRemove: (0, o.useCallback)(() => P(e => e - 1), [])
                    }, (0, o.createElement)(s.WV.div, (0, r.Z)({
                        tabIndex: D || 0 === x ? -1 : 0,
                        "data-orientation": l
                    }, I, {
                        ref: y,
                        style: {
                            outline: "none",
                            ...e.style
                        },
                        onMouseDown: (0, a.M)(e.onMouseDown, () => {
                            V.current = !0
                        }),
                        onFocus: (0, a.M)(e.onFocus, e => {
                            let t = !V.current;
                            if (e.target === e.currentTarget && t && !D) {
                                let t = new CustomEvent(b, m);
                                if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                                    let e = k().filter(e => e.focusable);
                                    _([e.find(e => e.active), e.find(e => e.id === T), ...e].filter(Boolean).map(e => e.ref.current))
                                }
                            }
                            V.current = !1
                        }),
                        onBlur: (0, a.M)(e.onBlur, () => A(!1))
                    })))
                }),
                T = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeRovingFocusGroup: n,
                        focusable: l = !0,
                        active: i = !1,
                        tabStopId: u,
                        ...f
                    } = e, d = (0, c.M)(), p = u || d, b = C("RovingFocusGroupItem", n), m = b.currentTabStopId === p, v = w(n), {
                        onFocusableItemAdd: E,
                        onFocusableItemRemove: h
                    } = b;
                    return (0, o.useEffect)(() => {
                        if (l) return E(), () => h()
                    }, [l, E, h]), (0, o.createElement)(g.ItemSlot, {
                        scope: n,
                        id: p,
                        focusable: l,
                        active: i
                    }, (0, o.createElement)(s.WV.span, (0, r.Z)({
                        tabIndex: m ? 0 : -1,
                        "data-orientation": b.orientation
                    }, f, {
                        ref: t,
                        onMouseDown: (0, a.M)(e.onMouseDown, e => {
                            l ? b.onItemFocus(p) : e.preventDefault()
                        }),
                        onFocus: (0, a.M)(e.onFocus, () => b.onItemFocus(p)),
                        onKeyDown: (0, a.M)(e.onKeyDown, e => {
                            if ("Tab" === e.key && e.shiftKey) {
                                b.onItemShiftTab();
                                return
                            }
                            if (e.target !== e.currentTarget) return;
                            let t = function(e, t, n) {
                                var r;
                                let o = (r = e.key, "rtl" !== n ? r : "ArrowLeft" === r ? "ArrowRight" : "ArrowRight" === r ? "ArrowLeft" : r);
                                if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(o)) && !("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(o))) return F[o]
                            }(e, b.orientation, b.dir);
                            if (void 0 !== t) {
                                e.preventDefault();
                                let o = v().filter(e => e.focusable).map(e => e.ref.current);
                                if ("last" === t) o.reverse();
                                else if ("prev" === t || "next" === t) {
                                    var n, r;
                                    "prev" === t && o.reverse();
                                    let a = o.indexOf(e.currentTarget);
                                    o = b.loop ? (n = o, r = a + 1, n.map((e, t) => n[(r + t) % n.length])) : o.slice(a + 1)
                                }
                                setTimeout(() => _(o))
                            }
                        })
                    })))
                }),
                F = {
                    ArrowLeft: "prev",
                    ArrowUp: "prev",
                    ArrowRight: "next",
                    ArrowDown: "next",
                    PageUp: "first",
                    Home: "first",
                    PageDown: "last",
                    End: "last"
                };

            function _(e) {
                let t = document.activeElement;
                for (let n of e)
                    if (n === t || (n.focus(), document.activeElement !== t)) return
            }
            let D = y,
                A = T
        },
        64266: function(e, t, n) {
            n.d(t, {
                VY: function() {
                    return _
                },
                aV: function() {
                    return T
                },
                fC: function() {
                    return M
                },
                xz: function() {
                    return F
                }
            });
            var r = n(7896),
                o = n(2784),
                a = n(17998),
                l = n(92211),
                i = n(2923),
                u = n(79616),
                c = n(72714),
                s = n(59241),
                f = n(87695),
                d = n(23372);
            let p = "Tabs",
                [b, m] = (0, l.b)(p, [i.Pc]),
                v = (0, i.Pc)(),
                [g, w] = b(p),
                E = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeTabs: n,
                        value: a,
                        onValueChange: l,
                        defaultValue: i,
                        orientation: u = "horizontal",
                        dir: p,
                        activationMode: b = "automatic",
                        ...m
                    } = e, v = (0, s.gm)(p), [w, E] = (0, f.T)({
                        prop: a,
                        onChange: l,
                        defaultProp: i
                    });
                    return (0, o.createElement)(g, {
                        scope: n,
                        baseId: (0, d.M)(),
                        value: w,
                        onValueChange: E,
                        orientation: u,
                        dir: v,
                        activationMode: b
                    }, (0, o.createElement)(c.WV.div, (0, r.Z)({
                        dir: v,
                        "data-orientation": u
                    }, m, {
                        ref: t
                    })))
                }),
                h = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeTabs: n,
                        loop: a = !0,
                        ...l
                    } = e, u = w("TabsList", n), s = v(n);
                    return (0, o.createElement)(i.fC, (0, r.Z)({
                        asChild: !0
                    }, s, {
                        orientation: u.orientation,
                        dir: u.dir,
                        loop: a
                    }), (0, o.createElement)(c.WV.div, (0, r.Z)({
                        role: "tablist",
                        "aria-orientation": u.orientation
                    }, l, {
                        ref: t
                    })))
                }),
                I = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeTabs: n,
                        value: l,
                        disabled: u = !1,
                        ...s
                    } = e, f = w("TabsTrigger", n), d = v(n), p = C(f.baseId, l), b = y(f.baseId, l), m = l === f.value;
                    return (0, o.createElement)(i.ck, (0, r.Z)({
                        asChild: !0
                    }, d, {
                        focusable: !u,
                        active: m
                    }), (0, o.createElement)(c.WV.button, (0, r.Z)({
                        type: "button",
                        role: "tab",
                        "aria-selected": m,
                        "aria-controls": b,
                        "data-state": m ? "active" : "inactive",
                        "data-disabled": u ? "" : void 0,
                        disabled: u,
                        id: p
                    }, s, {
                        ref: t,
                        onMouseDown: (0, a.M)(e.onMouseDown, e => {
                            u || 0 !== e.button || !1 !== e.ctrlKey ? e.preventDefault() : f.onValueChange(l)
                        }),
                        onKeyDown: (0, a.M)(e.onKeyDown, e => {
                            [" ", "Enter"].includes(e.key) && f.onValueChange(l)
                        }),
                        onFocus: (0, a.M)(e.onFocus, () => {
                            let e = "manual" !== f.activationMode;
                            m || u || !e || f.onValueChange(l)
                        })
                    })))
                }),
                R = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeTabs: n,
                        value: a,
                        forceMount: l,
                        children: i,
                        ...s
                    } = e, f = w("TabsContent", n), d = C(f.baseId, a), p = y(f.baseId, a), b = a === f.value, m = (0, o.useRef)(b);
                    return (0, o.useEffect)(() => {
                        let e = requestAnimationFrame(() => m.current = !1);
                        return () => cancelAnimationFrame(e)
                    }, []), (0, o.createElement)(u.z, {
                        present: l || b
                    }, ({
                        present: n
                    }) => (0, o.createElement)(c.WV.div, (0, r.Z)({
                        "data-state": b ? "active" : "inactive",
                        "data-orientation": f.orientation,
                        role: "tabpanel",
                        "aria-labelledby": d,
                        hidden: !n,
                        id: p,
                        tabIndex: 0
                    }, s, {
                        ref: t,
                        style: { ...e.style,
                            animationDuration: m.current ? "0s" : void 0
                        }
                    }), n && i))
                });

            function C(e, t) {
                return `${e}-trigger-${t}`
            }

            function y(e, t) {
                return `${e}-content-${t}`
            }
            let M = E,
                T = h,
                F = I,
                _ = R
        }
    }
]);