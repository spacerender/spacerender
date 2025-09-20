try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "263e57fc-84f7-457e-95dd-0ea5e927b499", e._sentryDebugIdIdentifier = "sentry-dbid-263e57fc-84f7-457e-95dd-0ea5e927b499")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5029], {
        85029: function(e, t, r) {
            let n;
            r.d(t, {
                VY: function() {
                    return tI
                },
                JO: function() {
                    return tL
                },
                ck: function() {
                    return tA
                },
                wU: function() {
                    return t_
                },
                eT: function() {
                    return tO
                },
                h_: function() {
                    return tD
                },
                fC: function() {
                    return tT
                },
                $G: function() {
                    return tB
                },
                u_: function() {
                    return tF
                },
                DI: function() {
                    return ti
                },
                n5: function() {
                    return tu
                },
                xz: function() {
                    return tN
                },
                B4: function() {
                    return tk
                },
                l_: function() {
                    return tM
                }
            });
            var o, l = r(2784),
                a = r.t(l, 2),
                i = r(28316);

            function s(e, [t, r]) {
                return Math.min(r, Math.max(t, e))
            }

            function u(e, t, {
                checkForDefaultPrevented: r = !0
            } = {}) {
                return function(n) {
                    if (e ? .(n), !1 === r || !n.defaultPrevented) return t ? .(n)
                }
            }
            var c = r(52322);

            function d(e, t = []) {
                let r = [],
                    n = () => {
                        let t = r.map(e => l.createContext(e));
                        return function(r) {
                            let n = r ? .[e] || t;
                            return l.useMemo(() => ({
                                [`__scope${e}`]: { ...r,
                                    [e]: n
                                }
                            }), [r, n])
                        }
                    };
                return n.scopeName = e, [function(t, n) {
                    let o = l.createContext(n),
                        a = r.length;
                    r = [...r, n];
                    let i = t => {
                        let {
                            scope: r,
                            children: n,
                            ...i
                        } = t, s = r ? .[e] ? .[a] || o, u = l.useMemo(() => i, Object.values(i));
                        return (0, c.jsx)(s.Provider, {
                            value: u,
                            children: n
                        })
                    };
                    return i.displayName = t + "Provider", [i, function(r, i) {
                        let s = i ? .[e] ? .[a] || o,
                            u = l.useContext(s);
                        if (u) return u;
                        if (void 0 !== n) return n;
                        throw Error(`\`${r}\` must be used within \`${t}\``)
                    }]
                }, function(...e) {
                    let t = e[0];
                    if (1 === e.length) return t;
                    let r = () => {
                        let r = e.map(e => ({
                            useScope: e(),
                            scopeName: e.scopeName
                        }));
                        return function(e) {
                            let n = r.reduce((t, {
                                useScope: r,
                                scopeName: n
                            }) => {
                                let o = r(e)[`__scope${n}`];
                                return { ...t,
                                    ...o
                                }
                            }, {});
                            return l.useMemo(() => ({
                                [`__scope${t.scopeName}`]: n
                            }), [n])
                        }
                    };
                    return r.scopeName = t.scopeName, r
                }(n, ...t)]
            }

            function f(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t)
            }

            function p(...e) {
                return t => {
                    let r = !1,
                        n = e.map(e => {
                            let n = f(e, t);
                            return r || "function" != typeof n || (r = !0), n
                        });
                    if (r) return () => {
                        for (let t = 0; t < n.length; t++) {
                            let r = n[t];
                            "function" == typeof r ? r() : f(e[t], null)
                        }
                    }
                }
            }

            function v(...e) {
                return l.useCallback(p(...e), e)
            }
            var h = l.forwardRef((e, t) => {
                let {
                    children: r,
                    ...n
                } = e, o = l.Children.toArray(r), a = o.find(g);
                if (a) {
                    let e = a.props.children,
                        r = o.map(t => t !== a ? t : l.Children.count(e) > 1 ? l.Children.only(null) : l.isValidElement(e) ? e.props.children : null);
                    return (0, c.jsx)(m, { ...n,
                        ref: t,
                        children: l.isValidElement(e) ? l.cloneElement(e, void 0, r) : null
                    })
                }
                return (0, c.jsx)(m, { ...n,
                    ref: t,
                    children: r
                })
            });
            h.displayName = "Slot";
            var m = l.forwardRef((e, t) => {
                let {
                    children: r,
                    ...n
                } = e;
                if (l.isValidElement(r)) {
                    let e, o;
                    let a = (e = Object.getOwnPropertyDescriptor(r.props, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning ? r.ref : (e = Object.getOwnPropertyDescriptor(r, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning ? r.props.ref : r.props.ref || r.ref;
                    return l.cloneElement(r, { ... function(e, t) {
                            let r = { ...t
                            };
                            for (let n in t) {
                                let o = e[n],
                                    l = t[n];
                                /^on[A-Z]/.test(n) ? o && l ? r[n] = (...e) => {
                                    l(...e), o(...e)
                                } : o && (r[n] = o) : "style" === n ? r[n] = { ...o,
                                    ...l
                                } : "className" === n && (r[n] = [o, l].filter(Boolean).join(" "))
                            }
                            return { ...e,
                                ...r
                            }
                        }(n, r.props),
                        ref: t ? p(t, a) : a
                    })
                }
                return l.Children.count(r) > 1 ? l.Children.only(null) : null
            });
            m.displayName = "SlotClone";
            var y = ({
                children: e
            }) => (0, c.jsx)(c.Fragment, {
                children: e
            });

            function g(e) {
                return l.isValidElement(e) && e.type === y
            }
            var w = l.createContext(void 0),
                b = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                    let r = l.forwardRef((e, r) => {
                        let {
                            asChild: n,
                            ...o
                        } = e, l = n ? h : t;
                        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, c.jsx)(l, { ...o,
                            ref: r
                        })
                    });
                    return r.displayName = `Primitive.${t}`, { ...e,
                        [t]: r
                    }
                }, {});

            function x(e) {
                let t = l.useRef(e);
                return l.useEffect(() => {
                    t.current = e
                }), l.useMemo(() => (...e) => t.current ? .(...e), [])
            }
            var E = "dismissableLayer.update",
                C = l.createContext({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                S = l.forwardRef((e, t) => {
                    let {
                        disableOutsidePointerEvents: r = !1,
                        onEscapeKeyDown: n,
                        onPointerDownOutside: a,
                        onFocusOutside: i,
                        onInteractOutside: s,
                        onDismiss: d,
                        ...f
                    } = e, p = l.useContext(C), [h, m] = l.useState(null), y = h ? .ownerDocument ? ? globalThis ? .document, [, g] = l.useState({}), w = v(t, e => m(e)), S = Array.from(p.layers), [j] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1), T = S.indexOf(j), N = h ? S.indexOf(h) : -1, k = p.layersWithOutsidePointerEventsDisabled.size > 0, L = N >= T, D = function(e, t = globalThis ? .document) {
                        let r = x(e),
                            n = l.useRef(!1),
                            o = l.useRef(() => {});
                        return l.useEffect(() => {
                            let e = e => {
                                    if (e.target && !n.current) {
                                        let n = function() {
                                                P("dismissableLayer.pointerDownOutside", r, l, {
                                                    discrete: !0
                                                })
                                            },
                                            l = {
                                                originalEvent: e
                                            };
                                        "touch" === e.pointerType ? (t.removeEventListener("click", o.current), o.current = n, t.addEventListener("click", o.current, {
                                            once: !0
                                        })) : n()
                                    } else t.removeEventListener("click", o.current);
                                    n.current = !1
                                },
                                l = window.setTimeout(() => {
                                    t.addEventListener("pointerdown", e)
                                }, 0);
                            return () => {
                                window.clearTimeout(l), t.removeEventListener("pointerdown", e), t.removeEventListener("click", o.current)
                            }
                        }, [t, r]), {
                            onPointerDownCapture: () => n.current = !0
                        }
                    }(e => {
                        let t = e.target,
                            r = [...p.branches].some(e => e.contains(t));
                        !L || r || (a ? .(e), s ? .(e), e.defaultPrevented || d ? .())
                    }, y), I = function(e, t = globalThis ? .document) {
                        let r = x(e),
                            n = l.useRef(!1);
                        return l.useEffect(() => {
                            let e = e => {
                                e.target && !n.current && P("dismissableLayer.focusOutside", r, {
                                    originalEvent: e
                                }, {
                                    discrete: !1
                                })
                            };
                            return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
                        }, [t, r]), {
                            onFocusCapture: () => n.current = !0,
                            onBlurCapture: () => n.current = !1
                        }
                    }(e => {
                        let t = e.target;
                        [...p.branches].some(e => e.contains(t)) || (i ? .(e), s ? .(e), e.defaultPrevented || d ? .())
                    }, y);
                    return ! function(e, t = globalThis ? .document) {
                        let r = x(e);
                        l.useEffect(() => {
                            let e = e => {
                                "Escape" === e.key && r(e)
                            };
                            return t.addEventListener("keydown", e, {
                                capture: !0
                            }), () => t.removeEventListener("keydown", e, {
                                capture: !0
                            })
                        }, [r, t])
                    }(e => {
                        N !== p.layers.size - 1 || (n ? .(e), !e.defaultPrevented && d && (e.preventDefault(), d()))
                    }, y), l.useEffect(() => {
                        if (h) return r && (0 === p.layersWithOutsidePointerEventsDisabled.size && (o = y.body.style.pointerEvents, y.body.style.pointerEvents = "none"), p.layersWithOutsidePointerEventsDisabled.add(h)), p.layers.add(h), R(), () => {
                            r && 1 === p.layersWithOutsidePointerEventsDisabled.size && (y.body.style.pointerEvents = o)
                        }
                    }, [h, y, r, p]), l.useEffect(() => () => {
                        h && (p.layers.delete(h), p.layersWithOutsidePointerEventsDisabled.delete(h), R())
                    }, [h, p]), l.useEffect(() => {
                        let e = () => g({});
                        return document.addEventListener(E, e), () => document.removeEventListener(E, e)
                    }, []), (0, c.jsx)(b.div, { ...f,
                        ref: w,
                        style: {
                            pointerEvents: k ? L ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: u(e.onFocusCapture, I.onFocusCapture),
                        onBlurCapture: u(e.onBlurCapture, I.onBlurCapture),
                        onPointerDownCapture: u(e.onPointerDownCapture, D.onPointerDownCapture)
                    })
                });

            function R() {
                let e = new CustomEvent(E);
                document.dispatchEvent(e)
            }

            function P(e, t, r, {
                discrete: n
            }) {
                let o = r.originalEvent.target,
                    l = new CustomEvent(e, {
                        bubbles: !1,
                        cancelable: !0,
                        detail: r
                    });
                (t && o.addEventListener(e, t, {
                    once: !0
                }), n) ? o && i.flushSync(() => o.dispatchEvent(l)): o.dispatchEvent(l)
            }
            S.displayName = "DismissableLayer", l.forwardRef((e, t) => {
                let r = l.useContext(C),
                    n = l.useRef(null),
                    o = v(t, n);
                return l.useEffect(() => {
                    let e = n.current;
                    if (e) return r.branches.add(e), () => {
                        r.branches.delete(e)
                    }
                }, [r.branches]), (0, c.jsx)(b.div, { ...e,
                    ref: o
                })
            }).displayName = "DismissableLayerBranch";
            var j = 0;

            function T() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
            }
            var N = "focusScope.autoFocusOnMount",
                k = "focusScope.autoFocusOnUnmount",
                L = {
                    bubbles: !1,
                    cancelable: !0
                },
                D = l.forwardRef((e, t) => {
                    let {
                        loop: r = !1,
                        trapped: n = !1,
                        onMountAutoFocus: o,
                        onUnmountAutoFocus: a,
                        ...i
                    } = e, [s, u] = l.useState(null), d = x(o), f = x(a), p = l.useRef(null), h = v(t, e => u(e)), m = l.useRef({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    l.useEffect(() => {
                        if (n) {
                            let e = function(e) {
                                    if (m.paused || !s) return;
                                    let t = e.target;
                                    s.contains(t) ? p.current = t : A(p.current, {
                                        select: !0
                                    })
                                },
                                t = function(e) {
                                    if (m.paused || !s) return;
                                    let t = e.relatedTarget;
                                    null === t || s.contains(t) || A(p.current, {
                                        select: !0
                                    })
                                };
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            let r = new MutationObserver(function(e) {
                                if (document.activeElement === document.body)
                                    for (let t of e) t.removedNodes.length > 0 && A(s)
                            });
                            return s && r.observe(s, {
                                childList: !0,
                                subtree: !0
                            }), () => {
                                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
                            }
                        }
                    }, [n, s, m.paused]), l.useEffect(() => {
                        if (s) {
                            O.add(m);
                            let e = document.activeElement;
                            if (!s.contains(e)) {
                                let t = new CustomEvent(N, L);
                                s.addEventListener(N, d), s.dispatchEvent(t), t.defaultPrevented || (function(e, {
                                    select: t = !1
                                } = {}) {
                                    let r = document.activeElement;
                                    for (let n of e)
                                        if (A(n, {
                                                select: t
                                            }), document.activeElement !== r) return
                                }(I(s).filter(e => "A" !== e.tagName), {
                                    select: !0
                                }), document.activeElement === e && A(s))
                            }
                            return () => {
                                s.removeEventListener(N, d), setTimeout(() => {
                                    let t = new CustomEvent(k, L);
                                    s.addEventListener(k, f), s.dispatchEvent(t), t.defaultPrevented || A(e ? ? document.body, {
                                        select: !0
                                    }), s.removeEventListener(k, f), O.remove(m)
                                }, 0)
                            }
                        }
                    }, [s, d, f, m]);
                    let y = l.useCallback(e => {
                        if (!r && !n || m.paused) return;
                        let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            o = document.activeElement;
                        if (t && o) {
                            let t = e.currentTarget,
                                [n, l] = function(e) {
                                    let t = I(e);
                                    return [M(t, e), M(t.reverse(), e)]
                                }(t);
                            n && l ? e.shiftKey || o !== l ? e.shiftKey && o === n && (e.preventDefault(), r && A(l, {
                                select: !0
                            })) : (e.preventDefault(), r && A(n, {
                                select: !0
                            })) : o === t && e.preventDefault()
                        }
                    }, [r, n, m.paused]);
                    return (0, c.jsx)(b.div, {
                        tabIndex: -1,
                        ...i,
                        ref: h,
                        onKeyDown: y
                    })
                });

            function I(e) {
                let t = [],
                    r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: e => {
                            let t = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                for (; r.nextNode();) t.push(r.currentNode);
                return t
            }

            function M(e, t) {
                for (let r of e)
                    if (! function(e, {
                            upTo: t
                        }) {
                            if ("hidden" === getComputedStyle(e).visibility) return !0;
                            for (; e && (void 0 === t || e !== t);) {
                                if ("none" === getComputedStyle(e).display) return !0;
                                e = e.parentElement
                            }
                            return !1
                        }(r, {
                            upTo: t
                        })) return r
            }

            function A(e, {
                select: t = !1
            } = {}) {
                if (e && e.focus) {
                    var r;
                    let n = document.activeElement;
                    e.focus({
                        preventScroll: !0
                    }), e !== n && (r = e) instanceof HTMLInputElement && "select" in r && t && e.select()
                }
            }
            D.displayName = "FocusScope";
            var O = (n = [], {
                add(e) {
                    let t = n[0];
                    e !== t && t ? .pause(), (n = _(n, e)).unshift(e)
                },
                remove(e) {
                    n = _(n, e), n[0] ? .resume()
                }
            });

            function _(e, t) {
                let r = [...e],
                    n = r.indexOf(t);
                return -1 !== n && r.splice(n, 1), r
            }
            var F = globalThis ? .document ? l.useLayoutEffect : () => {},
                B = a["useId".toString()] || (() => void 0),
                H = 0;

            function W(e) {
                let [t, r] = l.useState(B());
                return F(() => {
                    e || r(e => e ? ? String(H++))
                }, [e]), e || (t ? `radix-${t}` : "")
            }
            var K = r(92416),
                z = r(90927),
                V = l.forwardRef((e, t) => {
                    let {
                        children: r,
                        width: n = 10,
                        height: o = 5,
                        ...l
                    } = e;
                    return (0, c.jsx)(b.svg, { ...l,
                        ref: t,
                        width: n,
                        height: o,
                        viewBox: "0 0 30 10",
                        preserveAspectRatio: "none",
                        children: e.asChild ? r : (0, c.jsx)("polygon", {
                            points: "0,0 30,0 15,10"
                        })
                    })
                });
            V.displayName = "Arrow";
            var $ = "Popper",
                [Y, U] = d($),
                [X, q] = Y($),
                Z = e => {
                    let {
                        __scopePopper: t,
                        children: r
                    } = e, [n, o] = l.useState(null);
                    return (0, c.jsx)(X, {
                        scope: t,
                        anchor: n,
                        onAnchorChange: o,
                        children: r
                    })
                };
            Z.displayName = $;
            var G = "PopperAnchor",
                J = l.forwardRef((e, t) => {
                    let {
                        __scopePopper: r,
                        virtualRef: n,
                        ...o
                    } = e, a = q(G, r), i = l.useRef(null), s = v(t, i);
                    return l.useEffect(() => {
                        a.onAnchorChange(n ? .current || i.current)
                    }), n ? null : (0, c.jsx)(b.div, { ...o,
                        ref: s
                    })
                });
            J.displayName = G;
            var Q = "PopperContent",
                [ee, et] = Y(Q),
                er = l.forwardRef((e, t) => {
                    let {
                        __scopePopper: r,
                        side: n = "bottom",
                        sideOffset: o = 0,
                        align: a = "center",
                        alignOffset: i = 0,
                        arrowPadding: s = 0,
                        avoidCollisions: u = !0,
                        collisionBoundary: d = [],
                        collisionPadding: f = 0,
                        sticky: p = "partial",
                        hideWhenDetached: h = !1,
                        updatePositionStrategy: m = "optimized",
                        onPlaced: y,
                        ...g
                    } = e, w = q(Q, r), [E, C] = l.useState(null), S = v(t, e => C(e)), [R, P] = l.useState(null), j = function(e) {
                        let [t, r] = l.useState(void 0);
                        return F(() => {
                            if (e) {
                                r({
                                    width: e.offsetWidth,
                                    height: e.offsetHeight
                                });
                                let t = new ResizeObserver(t => {
                                    let n, o;
                                    if (!Array.isArray(t) || !t.length) return;
                                    let l = t[0];
                                    if ("borderBoxSize" in l) {
                                        let e = l.borderBoxSize,
                                            t = Array.isArray(e) ? e[0] : e;
                                        n = t.inlineSize, o = t.blockSize
                                    } else n = e.offsetWidth, o = e.offsetHeight;
                                    r({
                                        width: n,
                                        height: o
                                    })
                                });
                                return t.observe(e, {
                                    box: "border-box"
                                }), () => t.unobserve(e)
                            }
                            r(void 0)
                        }, [e]), t
                    }(R), T = j ? .width ? ? 0, N = j ? .height ? ? 0, k = "number" == typeof f ? f : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...f
                    }, L = Array.isArray(d) ? d : [d], D = L.length > 0, I = {
                        padding: k,
                        boundary: L.filter(ea),
                        altBoundary: D
                    }, {
                        refs: M,
                        floatingStyles: A,
                        placement: O,
                        isPositioned: _,
                        middlewareData: B
                    } = (0, K.YF)({
                        strategy: "fixed",
                        placement: n + ("center" !== a ? "-" + a : ""),
                        whileElementsMounted: (...e) => (0, z.Me)(...e, {
                            animationFrame: "always" === m
                        }),
                        elements: {
                            reference: w.anchor
                        },
                        middleware: [(0, K.cv)({
                            mainAxis: o + N,
                            alignmentAxis: i
                        }), u && (0, K.uY)({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: "partial" === p ? (0, K.dr)() : void 0,
                            ...I
                        }), u && (0, K.RR)({ ...I
                        }), (0, K.dp)({ ...I,
                            apply: ({
                                elements: e,
                                rects: t,
                                availableWidth: r,
                                availableHeight: n
                            }) => {
                                let {
                                    width: o,
                                    height: l
                                } = t.reference, a = e.floating.style;
                                a.setProperty("--radix-popper-available-width", `${r}px`), a.setProperty("--radix-popper-available-height", `${n}px`), a.setProperty("--radix-popper-anchor-width", `${o}px`), a.setProperty("--radix-popper-anchor-height", `${l}px`)
                            }
                        }), R && (0, K.x7)({
                            element: R,
                            padding: s
                        }), ei({
                            arrowWidth: T,
                            arrowHeight: N
                        }), h && (0, K.Cp)({
                            strategy: "referenceHidden",
                            ...I
                        })]
                    }), [H, W] = es(O), V = x(y);
                    F(() => {
                        _ && V ? .()
                    }, [_, V]);
                    let $ = B.arrow ? .x,
                        Y = B.arrow ? .y,
                        U = B.arrow ? .centerOffset !== 0,
                        [X, Z] = l.useState();
                    return F(() => {
                        E && Z(window.getComputedStyle(E).zIndex)
                    }, [E]), (0, c.jsx)("div", {
                        ref: M.setFloating,
                        "data-radix-popper-content-wrapper": "",
                        style: { ...A,
                            transform: _ ? A.transform : "translate(0, -200%)",
                            minWidth: "max-content",
                            zIndex: X,
                            "--radix-popper-transform-origin": [B.transformOrigin ? .x, B.transformOrigin ? .y].join(" "),
                            ...B.hide ? .referenceHidden && {
                                visibility: "hidden",
                                pointerEvents: "none"
                            }
                        },
                        dir: e.dir,
                        children: (0, c.jsx)(ee, {
                            scope: r,
                            placedSide: H,
                            onArrowChange: P,
                            arrowX: $,
                            arrowY: Y,
                            shouldHideArrow: U,
                            children: (0, c.jsx)(b.div, {
                                "data-side": H,
                                "data-align": W,
                                ...g,
                                ref: S,
                                style: { ...g.style,
                                    animation: _ ? void 0 : "none"
                                }
                            })
                        })
                    })
                });
            er.displayName = Q;
            var en = "PopperArrow",
                eo = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                },
                el = l.forwardRef(function(e, t) {
                    let {
                        __scopePopper: r,
                        ...n
                    } = e, o = et(en, r), l = eo[o.placedSide];
                    return (0, c.jsx)("span", {
                        ref: o.onArrowChange,
                        style: {
                            position: "absolute",
                            left: o.arrowX,
                            top: o.arrowY,
                            [l]: 0,
                            transformOrigin: {
                                top: "",
                                right: "0 0",
                                bottom: "center 0",
                                left: "100% 0"
                            }[o.placedSide],
                            transform: {
                                top: "translateY(100%)",
                                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                                bottom: "rotate(180deg)",
                                left: "translateY(50%) rotate(-90deg) translateX(50%)"
                            }[o.placedSide],
                            visibility: o.shouldHideArrow ? "hidden" : void 0
                        },
                        children: (0, c.jsx)(V, { ...n,
                            ref: t,
                            style: { ...n.style,
                                display: "block"
                            }
                        })
                    })
                });

            function ea(e) {
                return null !== e
            }
            el.displayName = en;
            var ei = e => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    let {
                        placement: r,
                        rects: n,
                        middlewareData: o
                    } = t, l = o.arrow ? .centerOffset !== 0, a = l ? 0 : e.arrowWidth, i = l ? 0 : e.arrowHeight, [s, u] = es(r), c = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    }[u], d = (o.arrow ? .x ? ? 0) + a / 2, f = (o.arrow ? .y ? ? 0) + i / 2, p = "", v = "";
                    return "bottom" === s ? (p = l ? c : `${d}px`, v = `${-i}px`) : "top" === s ? (p = l ? c : `${d}px`, v = `${n.floating.height+i}px`) : "right" === s ? (p = `${-i}px`, v = l ? c : `${f}px`) : "left" === s && (p = `${n.floating.width+i}px`, v = l ? c : `${f}px`), {
                        data: {
                            x: p,
                            y: v
                        }
                    }
                }
            });

            function es(e) {
                let [t, r = "center"] = e.split("-");
                return [t, r]
            }
            var eu = l.forwardRef((e, t) => {
                let {
                    container: r,
                    ...n
                } = e, [o, a] = l.useState(!1);
                F(() => a(!0), []);
                let s = r || o && globalThis ? .document ? .body;
                return s ? i.createPortal((0, c.jsx)(b.div, { ...n,
                    ref: t
                }), s) : null
            });

            function ec({
                prop: e,
                defaultProp: t,
                onChange: r = () => {}
            }) {
                let [n, o] = function({
                    defaultProp: e,
                    onChange: t
                }) {
                    let r = l.useState(e),
                        [n] = r,
                        o = l.useRef(n),
                        a = x(t);
                    return l.useEffect(() => {
                        o.current !== n && (a(n), o.current = n)
                    }, [n, o, a]), r
                }({
                    defaultProp: t,
                    onChange: r
                }), a = void 0 !== e, i = a ? e : n, s = x(r);
                return [i, l.useCallback(t => {
                    if (a) {
                        let r = "function" == typeof t ? t(e) : t;
                        r !== e && s(r)
                    } else o(t)
                }, [a, e, o, s])]
            }
            eu.displayName = "Portal";
            var ed = l.forwardRef((e, t) => (0, c.jsx)(b.span, { ...e,
                ref: t,
                style: {
                    position: "absolute",
                    border: 0,
                    width: 1,
                    height: 1,
                    padding: 0,
                    margin: -1,
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    wordWrap: "normal",
                    ...e.style
                }
            }));
            ed.displayName = "VisuallyHidden";
            var ef = r(49732),
                ep = r(22970),
                ev = r(95346),
                eh = r(22442),
                em = (0, r(64597)._)(),
                ey = function() {},
                eg = l.forwardRef(function(e, t) {
                    var r = l.useRef(null),
                        n = l.useState({
                            onScrollCapture: ey,
                            onWheelCapture: ey,
                            onTouchMoveCapture: ey
                        }),
                        o = n[0],
                        a = n[1],
                        i = e.forwardProps,
                        s = e.children,
                        u = e.className,
                        c = e.removeScrollBar,
                        d = e.enabled,
                        f = e.shards,
                        p = e.sideCar,
                        v = e.noIsolation,
                        h = e.inert,
                        m = e.allowPinchZoom,
                        y = e.as,
                        g = e.gapMode,
                        w = (0, ep._T)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        b = (0, eh.q)([r, t]),
                        x = (0, ep.pi)((0, ep.pi)({}, w), o);
                    return l.createElement(l.Fragment, null, d && l.createElement(p, {
                        sideCar: em,
                        removeScrollBar: c,
                        shards: f,
                        noIsolation: v,
                        inert: h,
                        setCallbacks: a,
                        allowPinchZoom: !!m,
                        lockRef: r,
                        gapMode: g
                    }), i ? l.cloneElement(l.Children.only(s), (0, ep.pi)((0, ep.pi)({}, x), {
                        ref: b
                    })) : l.createElement(void 0 === y ? "div" : y, (0, ep.pi)({}, x, {
                        className: u,
                        ref: b
                    }), s))
                });
            eg.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, eg.classNames = {
                fullWidth: ev.zi,
                zeroRight: ev.pF
            };
            var ew = r(57758),
                eb = r(181),
                ex = r(33225),
                eE = !1;
            if ("undefined" != typeof window) try {
                var eC = Object.defineProperty({}, "passive", {
                    get: function() {
                        return eE = !0, !0
                    }
                });
                window.addEventListener("test", eC, eC), window.removeEventListener("test", eC, eC)
            } catch (e) {
                eE = !1
            }
            var eS = !!eE && {
                    passive: !1
                },
                eR = function(e, t) {
                    if (!(e instanceof Element)) return !1;
                    var r = window.getComputedStyle(e);
                    return "hidden" !== r[t] && !(r.overflowY === r.overflowX && "TEXTAREA" !== e.tagName && "visible" === r[t])
                },
                eP = function(e, t) {
                    var r = t.ownerDocument,
                        n = t;
                    do {
                        if ("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host), ej(e, n)) {
                            var o = eT(e, n);
                            if (o[1] > o[2]) return !0
                        }
                        n = n.parentNode
                    } while (n && n !== r.body);
                    return !1
                },
                ej = function(e, t) {
                    return "v" === e ? eR(t, "overflowY") : eR(t, "overflowX")
                },
                eT = function(e, t) {
                    return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
                },
                eN = function(e, t, r, n, o) {
                    var l, a = (l = window.getComputedStyle(t).direction, "h" === e && "rtl" === l ? -1 : 1),
                        i = a * n,
                        s = r.target,
                        u = t.contains(s),
                        c = !1,
                        d = i > 0,
                        f = 0,
                        p = 0;
                    do {
                        var v = eT(e, s),
                            h = v[0],
                            m = v[1] - v[2] - a * h;
                        (h || m) && ej(e, s) && (f += m, p += h), s instanceof ShadowRoot ? s = s.host : s = s.parentNode
                    } while (!u && s !== document.body || u && (t.contains(s) || t === s));
                    return d && (o && 1 > Math.abs(f) || !o && i > f) ? c = !0 : !d && (o && 1 > Math.abs(p) || !o && -i > p) && (c = !0), c
                },
                ek = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                eL = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                eD = function(e) {
                    return e && "current" in e ? e.current : e
                },
                eI = 0,
                eM = [],
                eA = (0, ew.L)(em, function(e) {
                    var t = l.useRef([]),
                        r = l.useRef([0, 0]),
                        n = l.useRef(),
                        o = l.useState(eI++)[0],
                        a = l.useState(ex.Ws)[0],
                        i = l.useRef(e);
                    l.useEffect(function() {
                        i.current = e
                    }, [e]), l.useEffect(function() {
                        if (e.inert) {
                            document.body.classList.add("block-interactivity-".concat(o));
                            var t = (0, ep.ev)([e.lockRef.current], (e.shards || []).map(eD), !0).filter(Boolean);
                            return t.forEach(function(e) {
                                    return e.classList.add("allow-interactivity-".concat(o))
                                }),
                                function() {
                                    document.body.classList.remove("block-interactivity-".concat(o)), t.forEach(function(e) {
                                        return e.classList.remove("allow-interactivity-".concat(o))
                                    })
                                }
                        }
                    }, [e.inert, e.lockRef.current, e.shards]);
                    var s = l.useCallback(function(e, t) {
                            if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !i.current.allowPinchZoom;
                            var o, l = ek(e),
                                a = r.current,
                                s = "deltaX" in e ? e.deltaX : a[0] - l[0],
                                u = "deltaY" in e ? e.deltaY : a[1] - l[1],
                                c = e.target,
                                d = Math.abs(s) > Math.abs(u) ? "h" : "v";
                            if ("touches" in e && "h" === d && "range" === c.type) return !1;
                            var f = eP(d, c);
                            if (!f) return !0;
                            if (f ? o = d : (o = "v" === d ? "h" : "v", f = eP(d, c)), !f) return !1;
                            if (!n.current && "changedTouches" in e && (s || u) && (n.current = o), !o) return !0;
                            var p = n.current || o;
                            return eN(p, t, e, "h" === p ? s : u, !0)
                        }, []),
                        u = l.useCallback(function(e) {
                            if (eM.length && eM[eM.length - 1] === a) {
                                var r = "deltaY" in e ? eL(e) : ek(e),
                                    n = t.current.filter(function(t) {
                                        var n;
                                        return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (n = t.delta)[0] === r[0] && n[1] === r[1]
                                    })[0];
                                if (n && n.should) {
                                    e.cancelable && e.preventDefault();
                                    return
                                }
                                if (!n) {
                                    var o = (i.current.shards || []).map(eD).filter(Boolean).filter(function(t) {
                                        return t.contains(e.target)
                                    });
                                    (o.length > 0 ? s(e, o[0]) : !i.current.noIsolation) && e.cancelable && e.preventDefault()
                                }
                            }
                        }, []),
                        c = l.useCallback(function(e, r, n, o) {
                            var l = {
                                name: e,
                                delta: r,
                                target: n,
                                should: o,
                                shadowParent: function(e) {
                                    for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
                                    return t
                                }(n)
                            };
                            t.current.push(l), setTimeout(function() {
                                t.current = t.current.filter(function(e) {
                                    return e !== l
                                })
                            }, 1)
                        }, []),
                        d = l.useCallback(function(e) {
                            r.current = ek(e), n.current = void 0
                        }, []),
                        f = l.useCallback(function(t) {
                            c(t.type, eL(t), t.target, s(t, e.lockRef.current))
                        }, []),
                        p = l.useCallback(function(t) {
                            c(t.type, ek(t), t.target, s(t, e.lockRef.current))
                        }, []);
                    l.useEffect(function() {
                        return eM.push(a), e.setCallbacks({
                                onScrollCapture: f,
                                onWheelCapture: f,
                                onTouchMoveCapture: p
                            }), document.addEventListener("wheel", u, eS), document.addEventListener("touchmove", u, eS), document.addEventListener("touchstart", d, eS),
                            function() {
                                eM = eM.filter(function(e) {
                                    return e !== a
                                }), document.removeEventListener("wheel", u, eS), document.removeEventListener("touchmove", u, eS), document.removeEventListener("touchstart", d, eS)
                            }
                    }, []);
                    var v = e.removeScrollBar,
                        h = e.inert;
                    return l.createElement(l.Fragment, null, h ? l.createElement(a, {
                        styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
                    }) : null, v ? l.createElement(eb.jp, {
                        gapMode: e.gapMode
                    }) : null)
                }),
                eO = l.forwardRef(function(e, t) {
                    return l.createElement(eg, (0, ep.pi)({}, e, {
                        ref: t,
                        sideCar: eA
                    }))
                });
            eO.classNames = eg.classNames;
            var e_ = [" ", "Enter", "ArrowUp", "ArrowDown"],
                eF = [" ", "Enter"],
                eB = "Select",
                [eH, eW, eK] = function(e) {
                    let t = e + "CollectionProvider",
                        [r, n] = d(t),
                        [o, a] = r(t, {
                            collectionRef: {
                                current: null
                            },
                            itemMap: new Map
                        }),
                        i = e => {
                            let {
                                scope: t,
                                children: r
                            } = e, n = l.useRef(null), a = l.useRef(new Map).current;
                            return (0, c.jsx)(o, {
                                scope: t,
                                itemMap: a,
                                collectionRef: n,
                                children: r
                            })
                        };
                    i.displayName = t;
                    let s = e + "CollectionSlot",
                        u = l.forwardRef((e, t) => {
                            let {
                                scope: r,
                                children: n
                            } = e, o = v(t, a(s, r).collectionRef);
                            return (0, c.jsx)(h, {
                                ref: o,
                                children: n
                            })
                        });
                    u.displayName = s;
                    let f = e + "CollectionItemSlot",
                        p = "data-radix-collection-item",
                        m = l.forwardRef((e, t) => {
                            let {
                                scope: r,
                                children: n,
                                ...o
                            } = e, i = l.useRef(null), s = v(t, i), u = a(f, r);
                            return l.useEffect(() => (u.itemMap.set(i, {
                                ref: i,
                                ...o
                            }), () => void u.itemMap.delete(i))), (0, c.jsx)(h, {
                                [p]: "",
                                ref: s,
                                children: n
                            })
                        });
                    return m.displayName = f, [{
                        Provider: i,
                        Slot: u,
                        ItemSlot: m
                    }, function(t) {
                        let r = a(e + "CollectionConsumer", t);
                        return l.useCallback(() => {
                            let e = r.collectionRef.current;
                            if (!e) return [];
                            let t = Array.from(e.querySelectorAll(`[${p}]`));
                            return Array.from(r.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current))
                        }, [r.collectionRef, r.itemMap])
                    }, n]
                }(eB),
                [ez, eV] = d(eB, [eK, U]),
                e$ = U(),
                [eY, eU] = ez(eB),
                [eX, eq] = ez(eB),
                eZ = e => {
                    let {
                        __scopeSelect: t,
                        children: r,
                        open: n,
                        defaultOpen: o,
                        onOpenChange: a,
                        value: i,
                        defaultValue: s,
                        onValueChange: u,
                        dir: d,
                        name: f,
                        autoComplete: p,
                        disabled: v,
                        required: h,
                        form: m
                    } = e, y = e$(t), [g, b] = l.useState(null), [x, E] = l.useState(null), [C, S] = l.useState(!1), R = function(e) {
                        let t = l.useContext(w);
                        return e || t || "ltr"
                    }(d), [P = !1, j] = ec({
                        prop: n,
                        defaultProp: o,
                        onChange: a
                    }), [T, N] = ec({
                        prop: i,
                        defaultProp: s,
                        onChange: u
                    }), k = l.useRef(null), L = !g || m || !!g.closest("form"), [D, I] = l.useState(new Set), M = Array.from(D).map(e => e.props.value).join(";");
                    return (0, c.jsx)(Z, { ...y,
                        children: (0, c.jsxs)(eY, {
                            required: h,
                            scope: t,
                            trigger: g,
                            onTriggerChange: b,
                            valueNode: x,
                            onValueNodeChange: E,
                            valueNodeHasChildren: C,
                            onValueNodeHasChildrenChange: S,
                            contentId: W(),
                            value: T,
                            onValueChange: N,
                            open: P,
                            onOpenChange: j,
                            dir: R,
                            triggerPointerDownPosRef: k,
                            disabled: v,
                            children: [(0, c.jsx)(eH.Provider, {
                                scope: t,
                                children: (0, c.jsx)(eX, {
                                    scope: e.__scopeSelect,
                                    onNativeOptionAdd: l.useCallback(e => {
                                        I(t => new Set(t).add(e))
                                    }, []),
                                    onNativeOptionRemove: l.useCallback(e => {
                                        I(t => {
                                            let r = new Set(t);
                                            return r.delete(e), r
                                        })
                                    }, []),
                                    children: r
                                })
                            }), L ? (0, c.jsxs)(tR, {
                                "aria-hidden": !0,
                                required: h,
                                tabIndex: -1,
                                name: f,
                                autoComplete: p,
                                value: T,
                                onChange: e => N(e.target.value),
                                disabled: v,
                                form: m,
                                children: [void 0 === T ? (0, c.jsx)("option", {
                                    value: ""
                                }) : null, Array.from(D)]
                            }, M) : null]
                        })
                    })
                };
            eZ.displayName = eB;
            var eG = "SelectTrigger",
                eJ = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        disabled: n = !1,
                        ...o
                    } = e, a = e$(r), i = eU(eG, r), s = i.disabled || n, d = v(t, i.onTriggerChange), f = eW(r), p = l.useRef("touch"), [h, m, y] = tP(e => {
                        let t = f().filter(e => !e.disabled),
                            r = t.find(e => e.value === i.value),
                            n = tj(t, e, r);
                        void 0 !== n && i.onValueChange(n.value)
                    }), g = e => {
                        s || (i.onOpenChange(!0), y()), e && (i.triggerPointerDownPosRef.current = {
                            x: Math.round(e.pageX),
                            y: Math.round(e.pageY)
                        })
                    };
                    return (0, c.jsx)(J, {
                        asChild: !0,
                        ...a,
                        children: (0, c.jsx)(b.button, {
                            type: "button",
                            role: "combobox",
                            "aria-controls": i.contentId,
                            "aria-expanded": i.open,
                            "aria-required": i.required,
                            "aria-autocomplete": "none",
                            dir: i.dir,
                            "data-state": i.open ? "open" : "closed",
                            disabled: s,
                            "data-disabled": s ? "" : void 0,
                            "data-placeholder": tS(i.value) ? "" : void 0,
                            ...o,
                            ref: d,
                            onClick: u(o.onClick, e => {
                                e.currentTarget.focus(), "mouse" !== p.current && g(e)
                            }),
                            onPointerDown: u(o.onPointerDown, e => {
                                p.current = e.pointerType;
                                let t = e.target;
                                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (g(e), e.preventDefault())
                            }),
                            onKeyDown: u(o.onKeyDown, e => {
                                let t = "" !== h.current;
                                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || m(e.key), (!t || " " !== e.key) && e_.includes(e.key) && (g(), e.preventDefault())
                            })
                        })
                    })
                });
            eJ.displayName = eG;
            var eQ = "SelectValue",
                e0 = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        className: n,
                        style: o,
                        children: l,
                        placeholder: a = "",
                        ...i
                    } = e, s = eU(eQ, r), {
                        onValueNodeHasChildrenChange: u
                    } = s, d = void 0 !== l, f = v(t, s.onValueNodeChange);
                    return F(() => {
                        u(d)
                    }, [u, d]), (0, c.jsx)(b.span, { ...i,
                        ref: f,
                        style: {
                            pointerEvents: "none"
                        },
                        children: tS(s.value) ? (0, c.jsx)(c.Fragment, {
                            children: a
                        }) : l
                    })
                });
            e0.displayName = eQ;
            var e1 = l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    children: n,
                    ...o
                } = e;
                return (0, c.jsx)(b.span, {
                    "aria-hidden": !0,
                    ...o,
                    ref: t,
                    children: n || "▼"
                })
            });
            e1.displayName = "SelectIcon";
            var e2 = e => (0, c.jsx)(eu, {
                asChild: !0,
                ...e
            });
            e2.displayName = "SelectPortal";
            var e5 = "SelectContent",
                e9 = l.forwardRef((e, t) => {
                    let r = eU(e5, e.__scopeSelect),
                        [n, o] = l.useState();
                    return (F(() => {
                        o(new DocumentFragment)
                    }, []), r.open) ? (0, c.jsx)(e3, { ...e,
                        ref: t
                    }) : n ? i.createPortal((0, c.jsx)(e7, {
                        scope: e.__scopeSelect,
                        children: (0, c.jsx)(eH.Slot, {
                            scope: e.__scopeSelect,
                            children: (0, c.jsx)("div", {
                                children: e.children
                            })
                        })
                    }), n) : null
                });
            e9.displayName = e5;
            var [e7, e4] = ez(e5), e3 = l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    position: n = "item-aligned",
                    onCloseAutoFocus: o,
                    onEscapeKeyDown: a,
                    onPointerDownOutside: i,
                    side: s,
                    sideOffset: d,
                    align: f,
                    alignOffset: p,
                    arrowPadding: m,
                    collisionBoundary: y,
                    collisionPadding: g,
                    sticky: w,
                    hideWhenDetached: b,
                    avoidCollisions: x,
                    ...E
                } = e, C = eU(e5, r), [R, P] = l.useState(null), [N, k] = l.useState(null), L = v(t, e => P(e)), [I, M] = l.useState(null), [A, O] = l.useState(null), _ = eW(r), [F, B] = l.useState(!1), H = l.useRef(!1);
                l.useEffect(() => {
                    if (R) return (0, ef.Ry)(R)
                }, [R]), l.useEffect(() => {
                    let e = document.querySelectorAll("[data-radix-focus-guard]");
                    return document.body.insertAdjacentElement("afterbegin", e[0] ? ? T()), document.body.insertAdjacentElement("beforeend", e[1] ? ? T()), j++, () => {
                        1 === j && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), j--
                    }
                }, []);
                let W = l.useCallback(e => {
                        let [t, ...r] = _().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
                        for (let r of e)
                            if (r === o || (r ? .scrollIntoView({
                                    block: "nearest"
                                }), r === t && N && (N.scrollTop = 0), r === n && N && (N.scrollTop = N.scrollHeight), r ? .focus(), document.activeElement !== o)) return
                    }, [_, N]),
                    K = l.useCallback(() => W([I, R]), [W, I, R]);
                l.useEffect(() => {
                    F && K()
                }, [F, K]);
                let {
                    onOpenChange: z,
                    triggerPointerDownPosRef: V
                } = C;
                l.useEffect(() => {
                    if (R) {
                        let e = {
                                x: 0,
                                y: 0
                            },
                            t = t => {
                                e = {
                                    x: Math.abs(Math.round(t.pageX) - (V.current ? .x ? ? 0)),
                                    y: Math.abs(Math.round(t.pageY) - (V.current ? .y ? ? 0))
                                }
                            },
                            r = r => {
                                e.x <= 10 && e.y <= 10 ? r.preventDefault() : R.contains(r.target) || z(!1), document.removeEventListener("pointermove", t), V.current = null
                            };
                        return null !== V.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", r, {
                            capture: !0,
                            once: !0
                        })), () => {
                            document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", r, {
                                capture: !0
                            })
                        }
                    }
                }, [R, z, V]), l.useEffect(() => {
                    let e = () => z(!1);
                    return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
                        window.removeEventListener("blur", e), window.removeEventListener("resize", e)
                    }
                }, [z]);
                let [$, Y] = tP(e => {
                    let t = _().filter(e => !e.disabled),
                        r = t.find(e => e.ref.current === document.activeElement),
                        n = tj(t, e, r);
                    n && setTimeout(() => n.ref.current.focus())
                }), U = l.useCallback((e, t, r) => {
                    let n = !H.current && !r;
                    (void 0 !== C.value && C.value === t || n) && (M(e), n && (H.current = !0))
                }, [C.value]), X = l.useCallback(() => R ? .focus(), [R]), q = l.useCallback((e, t, r) => {
                    let n = !H.current && !r;
                    (void 0 !== C.value && C.value === t || n) && O(e)
                }, [C.value]), Z = "popper" === n ? e6 : e8, G = Z === e6 ? {
                    side: s,
                    sideOffset: d,
                    align: f,
                    alignOffset: p,
                    arrowPadding: m,
                    collisionBoundary: y,
                    collisionPadding: g,
                    sticky: w,
                    hideWhenDetached: b,
                    avoidCollisions: x
                } : {};
                return (0, c.jsx)(e7, {
                    scope: r,
                    content: R,
                    viewport: N,
                    onViewportChange: k,
                    itemRefCallback: U,
                    selectedItem: I,
                    onItemLeave: X,
                    itemTextRefCallback: q,
                    focusSelectedItem: K,
                    selectedItemText: A,
                    position: n,
                    isPositioned: F,
                    searchRef: $,
                    children: (0, c.jsx)(eO, {
                        as: h,
                        allowPinchZoom: !0,
                        children: (0, c.jsx)(D, {
                            asChild: !0,
                            trapped: C.open,
                            onMountAutoFocus: e => {
                                e.preventDefault()
                            },
                            onUnmountAutoFocus: u(o, e => {
                                C.trigger ? .focus({
                                    preventScroll: !0
                                }), e.preventDefault()
                            }),
                            children: (0, c.jsx)(S, {
                                asChild: !0,
                                disableOutsidePointerEvents: !0,
                                onEscapeKeyDown: a,
                                onPointerDownOutside: i,
                                onFocusOutside: e => e.preventDefault(),
                                onDismiss: () => C.onOpenChange(!1),
                                children: (0, c.jsx)(Z, {
                                    role: "listbox",
                                    id: C.contentId,
                                    "data-state": C.open ? "open" : "closed",
                                    dir: C.dir,
                                    onContextMenu: e => e.preventDefault(),
                                    ...E,
                                    ...G,
                                    onPlaced: () => B(!0),
                                    ref: L,
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        outline: "none",
                                        ...E.style
                                    },
                                    onKeyDown: u(E.onKeyDown, e => {
                                        let t = e.ctrlKey || e.altKey || e.metaKey;
                                        if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || Y(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                                            let t = _().filter(e => !e.disabled).map(e => e.ref.current);
                                            if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                                                let r = e.target,
                                                    n = t.indexOf(r);
                                                t = t.slice(n + 1)
                                            }
                                            setTimeout(() => W(t)), e.preventDefault()
                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            });
            e3.displayName = "SelectContentImpl";
            var e8 = l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    onPlaced: n,
                    ...o
                } = e, a = eU(e5, r), i = e4(e5, r), [u, d] = l.useState(null), [f, p] = l.useState(null), h = v(t, e => p(e)), m = eW(r), y = l.useRef(!1), g = l.useRef(!0), {
                    viewport: w,
                    selectedItem: x,
                    selectedItemText: E,
                    focusSelectedItem: C
                } = i, S = l.useCallback(() => {
                    if (a.trigger && a.valueNode && u && f && w && x && E) {
                        let e = a.trigger.getBoundingClientRect(),
                            t = f.getBoundingClientRect(),
                            r = a.valueNode.getBoundingClientRect(),
                            o = E.getBoundingClientRect();
                        if ("rtl" !== a.dir) {
                            let n = o.left - t.left,
                                l = r.left - n,
                                a = e.left - l,
                                i = e.width + a,
                                c = Math.max(i, t.width),
                                d = s(l, [10, Math.max(10, window.innerWidth - 10 - c)]);
                            u.style.minWidth = i + "px", u.style.left = d + "px"
                        } else {
                            let n = t.right - o.right,
                                l = window.innerWidth - r.right - n,
                                a = window.innerWidth - e.right - l,
                                i = e.width + a,
                                c = Math.max(i, t.width),
                                d = s(l, [10, Math.max(10, window.innerWidth - 10 - c)]);
                            u.style.minWidth = i + "px", u.style.right = d + "px"
                        }
                        let l = m(),
                            i = window.innerHeight - 20,
                            c = w.scrollHeight,
                            d = window.getComputedStyle(f),
                            p = parseInt(d.borderTopWidth, 10),
                            v = parseInt(d.paddingTop, 10),
                            h = parseInt(d.borderBottomWidth, 10),
                            g = p + v + c + parseInt(d.paddingBottom, 10) + h,
                            b = Math.min(5 * x.offsetHeight, g),
                            C = window.getComputedStyle(w),
                            S = parseInt(C.paddingTop, 10),
                            R = parseInt(C.paddingBottom, 10),
                            P = e.top + e.height / 2 - 10,
                            j = x.offsetHeight / 2,
                            T = p + v + (x.offsetTop + j);
                        if (T <= P) {
                            let e = l.length > 0 && x === l[l.length - 1].ref.current;
                            u.style.bottom = "0px";
                            let t = f.clientHeight - w.offsetTop - w.offsetHeight;
                            u.style.height = T + Math.max(i - P, j + (e ? R : 0) + t + h) + "px"
                        } else {
                            let e = l.length > 0 && x === l[0].ref.current;
                            u.style.top = "0px";
                            let t = Math.max(P, p + w.offsetTop + (e ? S : 0) + j);
                            u.style.height = t + (g - T) + "px", w.scrollTop = T - P + w.offsetTop
                        }
                        u.style.margin = "10px 0", u.style.minHeight = b + "px", u.style.maxHeight = i + "px", n ? .(), requestAnimationFrame(() => y.current = !0)
                    }
                }, [m, a.trigger, a.valueNode, u, f, w, x, E, a.dir, n]);
                F(() => S(), [S]);
                let [R, P] = l.useState();
                F(() => {
                    f && P(window.getComputedStyle(f).zIndex)
                }, [f]);
                let j = l.useCallback(e => {
                    e && !0 === g.current && (S(), C ? .(), g.current = !1)
                }, [S, C]);
                return (0, c.jsx)(te, {
                    scope: r,
                    contentWrapper: u,
                    shouldExpandOnScrollRef: y,
                    onScrollButtonChange: j,
                    children: (0, c.jsx)("div", {
                        ref: d,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            position: "fixed",
                            zIndex: R
                        },
                        children: (0, c.jsx)(b.div, { ...o,
                            ref: h,
                            style: {
                                boxSizing: "border-box",
                                maxHeight: "100%",
                                ...o.style
                            }
                        })
                    })
                })
            });
            e8.displayName = "SelectItemAlignedPosition";
            var e6 = l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    align: n = "start",
                    collisionPadding: o = 10,
                    ...l
                } = e, a = e$(r);
                return (0, c.jsx)(er, { ...a,
                    ...l,
                    ref: t,
                    align: n,
                    collisionPadding: o,
                    style: {
                        boxSizing: "border-box",
                        ...l.style,
                        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
                    }
                })
            });
            e6.displayName = "SelectPopperPosition";
            var [te, tt] = ez(e5, {}), tr = "SelectViewport", tn = l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    nonce: n,
                    ...o
                } = e, a = e4(tr, r), i = tt(tr, r), s = v(t, a.onViewportChange), d = l.useRef(0);
                return (0, c.jsxs)(c.Fragment, {
                    children: [(0, c.jsx)("style", {
                        dangerouslySetInnerHTML: {
                            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
                        },
                        nonce: n
                    }), (0, c.jsx)(eH.Slot, {
                        scope: r,
                        children: (0, c.jsx)(b.div, {
                            "data-radix-select-viewport": "",
                            role: "presentation",
                            ...o,
                            ref: s,
                            style: {
                                position: "relative",
                                flex: 1,
                                overflow: "hidden auto",
                                ...o.style
                            },
                            onScroll: u(o.onScroll, e => {
                                let t = e.currentTarget,
                                    {
                                        contentWrapper: r,
                                        shouldExpandOnScrollRef: n
                                    } = i;
                                if (n ? .current && r) {
                                    let e = Math.abs(d.current - t.scrollTop);
                                    if (e > 0) {
                                        let n = window.innerHeight - 20,
                                            o = Math.max(parseFloat(r.style.minHeight), parseFloat(r.style.height));
                                        if (o < n) {
                                            let l = o + e,
                                                a = Math.min(n, l),
                                                i = l - a;
                                            r.style.height = a + "px", "0px" === r.style.bottom && (t.scrollTop = i > 0 ? i : 0, r.style.justifyContent = "flex-end")
                                        }
                                    }
                                }
                                d.current = t.scrollTop
                            })
                        })
                    })]
                })
            });
            tn.displayName = tr;
            var to = "SelectGroup",
                [tl, ta] = ez(to),
                ti = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        ...n
                    } = e, o = W();
                    return (0, c.jsx)(tl, {
                        scope: r,
                        id: o,
                        children: (0, c.jsx)(b.div, {
                            role: "group",
                            "aria-labelledby": o,
                            ...n,
                            ref: t
                        })
                    })
                });
            ti.displayName = to;
            var ts = "SelectLabel",
                tu = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        ...n
                    } = e, o = ta(ts, r);
                    return (0, c.jsx)(b.div, {
                        id: o.id,
                        ...n,
                        ref: t
                    })
                });
            tu.displayName = ts;
            var tc = "SelectItem",
                [td, tf] = ez(tc),
                tp = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        value: n,
                        disabled: o = !1,
                        textValue: a,
                        ...i
                    } = e, s = eU(tc, r), d = e4(tc, r), f = s.value === n, [p, h] = l.useState(a ? ? ""), [m, y] = l.useState(!1), g = v(t, e => d.itemRefCallback ? .(e, n, o)), w = W(), x = l.useRef("touch"), E = () => {
                        o || (s.onValueChange(n), s.onOpenChange(!1))
                    };
                    if ("" === n) throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
                    return (0, c.jsx)(td, {
                        scope: r,
                        value: n,
                        disabled: o,
                        textId: w,
                        isSelected: f,
                        onItemTextChange: l.useCallback(e => {
                            h(t => t || (e ? .textContent ? ? "").trim())
                        }, []),
                        children: (0, c.jsx)(eH.ItemSlot, {
                            scope: r,
                            value: n,
                            disabled: o,
                            textValue: p,
                            children: (0, c.jsx)(b.div, {
                                role: "option",
                                "aria-labelledby": w,
                                "data-highlighted": m ? "" : void 0,
                                "aria-selected": f && m,
                                "data-state": f ? "checked" : "unchecked",
                                "aria-disabled": o || void 0,
                                "data-disabled": o ? "" : void 0,
                                tabIndex: o ? void 0 : -1,
                                ...i,
                                ref: g,
                                onFocus: u(i.onFocus, () => y(!0)),
                                onBlur: u(i.onBlur, () => y(!1)),
                                onClick: u(i.onClick, () => {
                                    "mouse" !== x.current && E()
                                }),
                                onPointerUp: u(i.onPointerUp, () => {
                                    "mouse" === x.current && E()
                                }),
                                onPointerDown: u(i.onPointerDown, e => {
                                    x.current = e.pointerType
                                }),
                                onPointerMove: u(i.onPointerMove, e => {
                                    x.current = e.pointerType, o ? d.onItemLeave ? .() : "mouse" === x.current && e.currentTarget.focus({
                                        preventScroll: !0
                                    })
                                }),
                                onPointerLeave: u(i.onPointerLeave, e => {
                                    e.currentTarget === document.activeElement && d.onItemLeave ? .()
                                }),
                                onKeyDown: u(i.onKeyDown, e => {
                                    d.searchRef ? .current !== "" && " " === e.key || (eF.includes(e.key) && E(), " " === e.key && e.preventDefault())
                                })
                            })
                        })
                    })
                });
            tp.displayName = tc;
            var tv = "SelectItemText",
                th = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        className: n,
                        style: o,
                        ...a
                    } = e, s = eU(tv, r), u = e4(tv, r), d = tf(tv, r), f = eq(tv, r), [p, h] = l.useState(null), m = v(t, e => h(e), d.onItemTextChange, e => u.itemTextRefCallback ? .(e, d.value, d.disabled)), y = p ? .textContent, g = l.useMemo(() => (0, c.jsx)("option", {
                        value: d.value,
                        disabled: d.disabled,
                        children: y
                    }, d.value), [d.disabled, d.value, y]), {
                        onNativeOptionAdd: w,
                        onNativeOptionRemove: x
                    } = f;
                    return F(() => (w(g), () => x(g)), [w, x, g]), (0, c.jsxs)(c.Fragment, {
                        children: [(0, c.jsx)(b.span, {
                            id: d.textId,
                            ...a,
                            ref: m
                        }), d.isSelected && s.valueNode && !s.valueNodeHasChildren ? i.createPortal(a.children, s.valueNode) : null]
                    })
                });
            th.displayName = tv;
            var tm = "SelectItemIndicator",
                ty = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        ...n
                    } = e;
                    return tf(tm, r).isSelected ? (0, c.jsx)(b.span, {
                        "aria-hidden": !0,
                        ...n,
                        ref: t
                    }) : null
                });
            ty.displayName = tm;
            var tg = "SelectScrollUpButton",
                tw = l.forwardRef((e, t) => {
                    let r = e4(tg, e.__scopeSelect),
                        n = tt(tg, e.__scopeSelect),
                        [o, a] = l.useState(!1),
                        i = v(t, n.onScrollButtonChange);
                    return F(() => {
                        if (r.viewport && r.isPositioned) {
                            let e = function() {
                                    a(t.scrollTop > 0)
                                },
                                t = r.viewport;
                            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                        }
                    }, [r.viewport, r.isPositioned]), o ? (0, c.jsx)(tE, { ...e,
                        ref: i,
                        onAutoScroll: () => {
                            let {
                                viewport: e,
                                selectedItem: t
                            } = r;
                            e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
                        }
                    }) : null
                });
            tw.displayName = tg;
            var tb = "SelectScrollDownButton",
                tx = l.forwardRef((e, t) => {
                    let r = e4(tb, e.__scopeSelect),
                        n = tt(tb, e.__scopeSelect),
                        [o, a] = l.useState(!1),
                        i = v(t, n.onScrollButtonChange);
                    return F(() => {
                        if (r.viewport && r.isPositioned) {
                            let e = function() {
                                    let e = t.scrollHeight - t.clientHeight;
                                    a(Math.ceil(t.scrollTop) < e)
                                },
                                t = r.viewport;
                            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                        }
                    }, [r.viewport, r.isPositioned]), o ? (0, c.jsx)(tE, { ...e,
                        ref: i,
                        onAutoScroll: () => {
                            let {
                                viewport: e,
                                selectedItem: t
                            } = r;
                            e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
                        }
                    }) : null
                });
            tx.displayName = tb;
            var tE = l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    onAutoScroll: n,
                    ...o
                } = e, a = e4("SelectScrollButton", r), i = l.useRef(null), s = eW(r), d = l.useCallback(() => {
                    null !== i.current && (window.clearInterval(i.current), i.current = null)
                }, []);
                return l.useEffect(() => () => d(), [d]), F(() => {
                    let e = s().find(e => e.ref.current === document.activeElement);
                    e ? .ref.current ? .scrollIntoView({
                        block: "nearest"
                    })
                }, [s]), (0, c.jsx)(b.div, {
                    "aria-hidden": !0,
                    ...o,
                    ref: t,
                    style: {
                        flexShrink: 0,
                        ...o.style
                    },
                    onPointerDown: u(o.onPointerDown, () => {
                        null === i.current && (i.current = window.setInterval(n, 50))
                    }),
                    onPointerMove: u(o.onPointerMove, () => {
                        a.onItemLeave ? .(), null === i.current && (i.current = window.setInterval(n, 50))
                    }),
                    onPointerLeave: u(o.onPointerLeave, () => {
                        d()
                    })
                })
            });
            l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    ...n
                } = e;
                return (0, c.jsx)(b.div, {
                    "aria-hidden": !0,
                    ...n,
                    ref: t
                })
            }).displayName = "SelectSeparator";
            var tC = "SelectArrow";

            function tS(e) {
                return "" === e || void 0 === e
            }
            l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    ...n
                } = e, o = e$(r), l = eU(tC, r), a = e4(tC, r);
                return l.open && "popper" === a.position ? (0, c.jsx)(el, { ...o,
                    ...n,
                    ref: t
                }) : null
            }).displayName = tC;
            var tR = l.forwardRef((e, t) => {
                let {
                    value: r,
                    ...n
                } = e, o = l.useRef(null), a = v(t, o), i = function(e) {
                    let t = l.useRef({
                        value: e,
                        previous: e
                    });
                    return l.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
                }(r);
                return l.useEffect(() => {
                    let e = o.current,
                        t = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, "value").set;
                    if (i !== r && t) {
                        let n = new Event("change", {
                            bubbles: !0
                        });
                        t.call(e, r), e.dispatchEvent(n)
                    }
                }, [i, r]), (0, c.jsx)(ed, {
                    asChild: !0,
                    children: (0, c.jsx)("select", { ...n,
                        ref: a,
                        defaultValue: r
                    })
                })
            });

            function tP(e) {
                let t = x(e),
                    r = l.useRef(""),
                    n = l.useRef(0),
                    o = l.useCallback(e => {
                        let o = r.current + e;
                        t(o),
                            function e(t) {
                                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
                            }(o)
                    }, [t]),
                    a = l.useCallback(() => {
                        r.current = "", window.clearTimeout(n.current)
                    }, []);
                return l.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, a]
            }

            function tj(e, t, r) {
                var n;
                let o = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
                    l = (n = Math.max(r ? e.indexOf(r) : -1, 0), e.map((t, r) => e[(n + r) % e.length]));
                1 === o.length && (l = l.filter(e => e !== r));
                let a = l.find(e => e.textValue.toLowerCase().startsWith(o.toLowerCase()));
                return a !== r ? a : void 0
            }
            tR.displayName = "BubbleSelect";
            var tT = eZ,
                tN = eJ,
                tk = e0,
                tL = e1,
                tD = e2,
                tI = e9,
                tM = tn,
                tA = tp,
                tO = th,
                t_ = ty,
                tF = tw,
                tB = tx
        }
    }
]);