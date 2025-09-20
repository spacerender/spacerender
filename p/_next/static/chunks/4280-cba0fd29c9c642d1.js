try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        r = (new e.Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "a0c973e9-4666-40d1-9367-0442b2f31e1f", e._sentryDebugIdIdentifier = "sentry-dbid-a0c973e9-4666-40d1-9367-0442b2f31e1f")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4280], {
        40489: function(e, r, t) {
            r.Z = function() {
                for (var e, r, t = 0, o = ""; t < arguments.length;)(e = arguments[t++]) && (r = function e(r) {
                    var t, o, n = "";
                    if ("string" == typeof r || "number" == typeof r) n += r;
                    else if ("object" == typeof r) {
                        if (Array.isArray(r))
                            for (t = 0; t < r.length; t++) r[t] && (o = e(r[t])) && (n && (n += " "), n += o);
                        else
                            for (t in r) r[t] && (n && (n += " "), n += t)
                    }
                    return n
                }(e)) && (o && (o += " "), o += r);
                return o
            }
        },
        46154: function(e, r, t) {
            t.d(r, {
                v: function() {
                    return o
                }
            });
            let o = (0, t(2784).createContext)({})
        },
        93556: function(e, r, t) {
            t.d(r, {
                m: function() {
                    return l
                }
            });
            var o = t(61434),
                n = t(86708);
            let l = (0, o.D)(n.w)
        },
        61434: function(e, r, t) {
            t.d(r, {
                D: function() {
                    return y
                }
            });
            var o = t(2784),
                n = t(60976),
                l = t(46154),
                i = t(97967),
                a = t(23617),
                s = t(3273),
                c = t(8350),
                d = t(20330),
                u = t(23293);

            function p(e) {
                return Array.isArray(e) ? e.join(" ") : e
            }
            var f = t(94293),
                b = t(33791),
                m = t(3422),
                g = t(64460);
            let h = Symbol.for("motionComponentSymbol");

            function y(e) {
                function r(r, t = {}) {
                    return function({
                        preloadedFeatures: e,
                        createVisualElement: r,
                        useRender: t,
                        useVisualState: y,
                        Component: x
                    }) {
                        e && (0, f.K)(e);
                        let v = (0, o.forwardRef)(function(f, h) {
                            var v;
                            let w;
                            let k = { ...(0, o.useContext)(n._),
                                    ...f,
                                    layoutId: function({
                                        layoutId: e
                                    }) {
                                        let r = (0, o.useContext)(m.p).id;
                                        return r && void 0 !== e ? r + "-" + e : e
                                    }(f)
                                },
                                {
                                    isStatic: z
                                } = k,
                                C = function(e) {
                                    let {
                                        initial: r,
                                        animate: t
                                    } = function(e, r) {
                                        if ((0, u.G)(e)) {
                                            let {
                                                initial: r,
                                                animate: t
                                            } = e;
                                            return {
                                                initial: !1 === r || (0, d.$)(r) ? r : void 0,
                                                animate: (0, d.$)(t) ? t : void 0
                                            }
                                        }
                                        return !1 !== e.inherit ? r : {}
                                    }(e, (0, o.useContext)(l.v));
                                    return (0, o.useMemo)(() => ({
                                        initial: r,
                                        animate: t
                                    }), [p(r), p(t)])
                                }(f),
                                E = y(f, z);
                            if (!z && b.j) {
                                C.visualElement = function(e, r, t, c) {
                                    let {
                                        visualElement: d
                                    } = (0, o.useContext)(l.v), u = (0, o.useContext)(s.u), p = (0, o.useContext)(i.O), f = (0, o.useContext)(n._).reducedMotion, b = (0, o.useRef)();
                                    c = c || u.renderer, !b.current && c && (b.current = c(e, {
                                        visualState: r,
                                        parent: d,
                                        props: t,
                                        presenceContext: p,
                                        blockInitialAnimation: !!p && !1 === p.initial,
                                        reducedMotionConfig: f
                                    }));
                                    let m = b.current;
                                    (0, o.useInsertionEffect)(() => {
                                        m && m.update(t, p)
                                    });
                                    let g = (0, o.useRef)(!!window.HandoffAppearAnimations);
                                    return (0, a.L)(() => {
                                        m && (m.render(), g.current && m.animationState && m.animationState.animateChanges())
                                    }), (0, o.useEffect)(() => {
                                        m && (m.updateFeatures(), !g.current && m.animationState && m.animationState.animateChanges(), window.HandoffAppearAnimations = void 0, g.current = !1)
                                    }), m
                                }(x, E, k, r);
                                let t = (0, o.useContext)(g.g),
                                    c = (0, o.useContext)(s.u).strict;
                                C.visualElement && (w = C.visualElement.loadFeatures(k, c, e, t))
                            }
                            return o.createElement(l.v.Provider, {
                                value: C
                            }, w && C.visualElement ? o.createElement(w, {
                                visualElement: C.visualElement,
                                ...k
                            }) : null, t(x, f, (v = C.visualElement, (0, o.useCallback)(e => {
                                e && E.mount && E.mount(e), v && (e ? v.mount(e) : v.unmount()), h && ("function" == typeof h ? h(e) : (0, c.I)(h) && (h.current = e))
                            }, [v])), E, z, C.visualElement))
                        });
                        return v[h] = x, v
                    }(e(r, t))
                }
                if ("undefined" == typeof Proxy) return r;
                let t = new Map;
                return new Proxy(r, {
                    get: (e, o) => (t.has(o) || t.set(o, r(o)), t.get(o))
                })
            }
        },
        86708: function(e, r, t) {
            t.d(r, {
                w: function() {
                    return S
                }
            });
            var o = t(75866),
                n = t(2784),
                l = t(41980),
                i = t(15815),
                a = t(62411);
            let s = () => ({
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {}
            });

            function c(e, r, t) {
                for (let o in r)(0, i.i)(r[o]) || (0, l.j)(o, t) || (e[o] = r[o])
            }
            var d = t(92898),
                u = t(10658);
            let p = () => ({ ...s(),
                attrs: {}
            });
            var f = t(13336),
                b = t(13517),
                m = t(7587),
                g = t(12816),
                h = t(97967),
                y = t(99764),
                x = t(3105),
                v = t(69535),
                w = t(46154),
                k = t(23293);
            let z = e => (r, t) => {
                let o = (0, n.useContext)(w.v),
                    l = (0, n.useContext)(h.O),
                    i = () => (function({
                        scrapeMotionValuesFromProps: e,
                        createRenderState: r,
                        onMount: t
                    }, o, n, l) {
                        let i = {
                            latestValues: function(e, r, t, o) {
                                let n = {},
                                    l = o(e, {});
                                for (let e in l) n[e] = (0, v.b)(l[e]);
                                let {
                                    initial: i,
                                    animate: a
                                } = e, s = (0, k.G)(e), c = (0, k.M)(e);
                                r && c && !s && !1 !== e.inherit && (void 0 === i && (i = r.initial), void 0 === a && (a = r.animate));
                                let d = !!t && !1 === t.initial,
                                    u = (d = d || !1 === i) ? a : i;
                                return u && "boolean" != typeof u && !(0, g.H)(u) && (Array.isArray(u) ? u : [u]).forEach(r => {
                                    let t = (0, y.o)(e, r);
                                    if (!t) return;
                                    let {
                                        transitionEnd: o,
                                        transition: l,
                                        ...i
                                    } = t;
                                    for (let e in i) {
                                        let r = i[e];
                                        if (Array.isArray(r)) {
                                            let e = d ? r.length - 1 : 0;
                                            r = r[e]
                                        }
                                        null !== r && (n[e] = r)
                                    }
                                    for (let e in o) n[e] = o[e]
                                }), n
                            }(o, n, l, e),
                            renderState: r()
                        };
                        return t && (i.mount = e => t(o, e, i)), i
                    })(e, r, o, l);
                return t ? i() : (0, x.h)(i)
            };
            var C = t(62972);
            let E = {
                    useVisualState: z({
                        scrapeMotionValuesFromProps: m.U,
                        createRenderState: p,
                        onMount: (e, r, {
                            renderState: t,
                            latestValues: o
                        }) => {
                            C.Wi.read(() => {
                                try {
                                    t.dimensions = "function" == typeof r.getBBox ? r.getBBox() : r.getBoundingClientRect()
                                } catch (e) {
                                    t.dimensions = {
                                        x: 0,
                                        y: 0,
                                        width: 0,
                                        height: 0
                                    }
                                }
                            }), C.Wi.render(() => {
                                (0, u.i)(t, o, {
                                    enableHardwareAcceleration: !1
                                }, (0, f.a)(r.tagName), e.transformTemplate), (0, b.K)(r, t)
                            })
                        }
                    })
                },
                j = {
                    useVisualState: z({
                        scrapeMotionValuesFromProps: t(53921).U,
                        createRenderState: s
                    })
                };

            function S(e, {
                forwardMotionProps: r = !1
            }, t, l) {
                return { ...(0, o.q)(e) ? E : j,
                    preloadedFeatures: t,
                    useRender: function(e = !1) {
                        return (r, t, l, {
                            latestValues: b
                        }, m) => {
                            let g = ((0, o.q)(r) ? function(e, r, t, o) {
                                    let l = (0, n.useMemo)(() => {
                                        let t = p();
                                        return (0, u.i)(t, r, {
                                            enableHardwareAcceleration: !1
                                        }, (0, f.a)(o), e.transformTemplate), { ...t.attrs,
                                            style: { ...t.style
                                            }
                                        }
                                    }, [r]);
                                    if (e.style) {
                                        let r = {};
                                        c(r, e.style, e), l.style = { ...r,
                                            ...l.style
                                        }
                                    }
                                    return l
                                } : function(e, r, t) {
                                    let o = {},
                                        l = function(e, r, t) {
                                            let o = e.style || {},
                                                l = {};
                                            return c(l, o, e), Object.assign(l, function({
                                                transformTemplate: e
                                            }, r, t) {
                                                return (0, n.useMemo)(() => {
                                                    let o = s();
                                                    return (0, a.r)(o, r, {
                                                        enableHardwareAcceleration: !t
                                                    }, e), Object.assign({}, o.vars, o.style)
                                                }, [r])
                                            }(e, r, t)), e.transformValues ? e.transformValues(l) : l
                                        }(e, r, t);
                                    return e.drag && !1 !== e.dragListener && (o.draggable = !1, l.userSelect = l.WebkitUserSelect = l.WebkitTouchCallout = "none", l.touchAction = !0 === e.drag ? "none" : `pan-${"x"===e.drag?"y":"x"}`), void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (o.tabIndex = 0), o.style = l, o
                                })(t, b, m, r),
                                h = { ...(0, d.L)(t, "string" == typeof r, e),
                                    ...g,
                                    ref: l
                                },
                                {
                                    children: y
                                } = t,
                                x = (0, n.useMemo)(() => (0, i.i)(y) ? y.get() : y, [y]);
                            return (0, n.createElement)(r, { ...h,
                                children: x
                            })
                        }
                    }(r),
                    createVisualElement: l,
                    Component: e
                }
            }
        },
        23617: function(e, r, t) {
            t.d(r, {
                L: function() {
                    return n
                }
            });
            var o = t(2784);
            let n = t(33791).j ? o.useLayoutEffect : o.useEffect
        },
        20324: function(e, r, t) {
            t.d(r, {
                m6: function() {
                    return _
                }
            });
            let o = /^\[(.+)\]$/;

            function n(e, r) {
                let t = e;
                return r.split("-").forEach(e => {
                    t.nextPart.has(e) || t.nextPart.set(e, {
                        nextPart: new Map,
                        validators: []
                    }), t = t.nextPart.get(e)
                }), t
            }
            let l = /\s+/;

            function i() {
                let e, r, t = 0,
                    o = "";
                for (; t < arguments.length;)(e = arguments[t++]) && (r = function e(r) {
                    let t;
                    if ("string" == typeof r) return r;
                    let o = "";
                    for (let n = 0; n < r.length; n++) r[n] && (t = e(r[n])) && (o && (o += " "), o += t);
                    return o
                }(e)) && (o && (o += " "), o += r);
                return o
            }

            function a(e) {
                let r = r => r[e] || [];
                return r.isThemeGetter = !0, r
            }
            let s = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                c = /^\d+\/\d+$/,
                d = new Set(["px", "full", "screen"]),
                u = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                p = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                f = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
                b = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;

            function m(e) {
                return h(e) || d.has(e) || c.test(e)
            }

            function g(e) {
                return A(e, "length", P)
            }

            function h(e) {
                return !!e && !Number.isNaN(Number(e))
            }

            function y(e) {
                return A(e, "number", h)
            }

            function x(e) {
                return !!e && Number.isInteger(Number(e))
            }

            function v(e) {
                return e.endsWith("%") && h(e.slice(0, -1))
            }

            function w(e) {
                return s.test(e)
            }

            function k(e) {
                return u.test(e)
            }
            let z = new Set(["length", "size", "percentage"]);

            function C(e) {
                return A(e, z, G)
            }

            function E(e) {
                return A(e, "position", G)
            }
            let j = new Set(["image", "url"]);

            function S(e) {
                return A(e, j, R)
            }

            function I(e) {
                return A(e, "", T)
            }

            function M() {
                return !0
            }

            function A(e, r, t) {
                let o = s.exec(e);
                return !!o && (o[1] ? "string" == typeof r ? o[1] === r : r.has(o[1]) : t(o[2]))
            }

            function P(e) {
                return p.test(e)
            }

            function G() {
                return !1
            }

            function T(e) {
                return f.test(e)
            }

            function R(e) {
                return b.test(e)
            }
            let _ = function(e, ...r) {
                let t, a, s;
                let c = function(l) {
                    var i;
                    return a = (t = {
                        cache: function(e) {
                            if (e < 1) return {
                                get: () => void 0,
                                set: () => {}
                            };
                            let r = 0,
                                t = new Map,
                                o = new Map;

                            function n(n, l) {
                                t.set(n, l), ++r > e && (r = 0, o = t, t = new Map)
                            }
                            return {
                                get(e) {
                                    let r = t.get(e);
                                    return void 0 !== r ? r : void 0 !== (r = o.get(e)) ? (n(e, r), r) : void 0
                                },
                                set(e, r) {
                                    t.has(e) ? t.set(e, r) : n(e, r)
                                }
                            }
                        }((i = r.reduce((e, r) => r(e), e())).cacheSize),
                        splitModifiers: function(e) {
                            let r = e.separator,
                                t = 1 === r.length,
                                o = r[0],
                                n = r.length;
                            return function(e) {
                                let l;
                                let i = [],
                                    a = 0,
                                    s = 0;
                                for (let c = 0; c < e.length; c++) {
                                    let d = e[c];
                                    if (0 === a) {
                                        if (d === o && (t || e.slice(c, c + n) === r)) {
                                            i.push(e.slice(s, c)), s = c + n;
                                            continue
                                        }
                                        if ("/" === d) {
                                            l = c;
                                            continue
                                        }
                                    }
                                    "[" === d ? a++ : "]" === d && a--
                                }
                                let c = 0 === i.length ? e : e.substring(s),
                                    d = c.startsWith("!"),
                                    u = d ? c.substring(1) : c;
                                return {
                                    modifiers: i,
                                    hasImportantModifier: d,
                                    baseClassName: u,
                                    maybePostfixModifierPosition: l && l > s ? l - s : void 0
                                }
                            }
                        }(i),
                        ... function(e) {
                            let r = function(e) {
                                    var r;
                                    let {
                                        theme: t,
                                        prefix: o
                                    } = e, l = {
                                        nextPart: new Map,
                                        validators: []
                                    };
                                    return (r = Object.entries(e.classGroups), o ? r.map(([e, r]) => [e, r.map(e => "string" == typeof e ? o + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e, r]) => [o + e, r])) : e)]) : r).forEach(([e, r]) => {
                                        (function e(r, t, o, l) {
                                            r.forEach(r => {
                                                if ("string" == typeof r) {
                                                    ("" === r ? t : n(t, r)).classGroupId = o;
                                                    return
                                                }
                                                if ("function" == typeof r) {
                                                    if (r.isThemeGetter) {
                                                        e(r(l), t, o, l);
                                                        return
                                                    }
                                                    t.validators.push({
                                                        validator: r,
                                                        classGroupId: o
                                                    });
                                                    return
                                                }
                                                Object.entries(r).forEach(([r, i]) => {
                                                    e(i, n(t, r), o, l)
                                                })
                                            })
                                        })(r, l, e, t)
                                    }), l
                                }(e),
                                {
                                    conflictingClassGroups: t,
                                    conflictingClassGroupModifiers: l
                                } = e;
                            return {
                                getClassGroupId: function(e) {
                                    let t = e.split("-");
                                    return "" === t[0] && 1 !== t.length && t.shift(),
                                        function e(r, t) {
                                            if (0 === r.length) return t.classGroupId;
                                            let o = r[0],
                                                n = t.nextPart.get(o),
                                                l = n ? e(r.slice(1), n) : void 0;
                                            if (l) return l;
                                            if (0 === t.validators.length) return;
                                            let i = r.join("-");
                                            return t.validators.find(({
                                                validator: e
                                            }) => e(i)) ? .classGroupId
                                        }(t, r) || function(e) {
                                            if (o.test(e)) {
                                                let r = o.exec(e)[1],
                                                    t = r ? .substring(0, r.indexOf(":"));
                                                if (t) return "arbitrary.." + t
                                            }
                                        }(e)
                                },
                                getConflictingClassGroupIds: function(e, r) {
                                    let o = t[e] || [];
                                    return r && l[e] ? [...o, ...l[e]] : o
                                }
                            }
                        }(i)
                    }).cache.get, s = t.cache.set, c = d, d(l)
                };

                function d(e) {
                    let r = a(e);
                    if (r) return r;
                    let o = function(e, r) {
                        let {
                            splitModifiers: t,
                            getClassGroupId: o,
                            getConflictingClassGroupIds: n
                        } = r, i = new Set;
                        return e.trim().split(l).map(e => {
                            let {
                                modifiers: r,
                                hasImportantModifier: n,
                                baseClassName: l,
                                maybePostfixModifierPosition: i
                            } = t(e), a = o(i ? l.substring(0, i) : l), s = !!i;
                            if (!a) {
                                if (!i || !(a = o(l))) return {
                                    isTailwindClass: !1,
                                    originalClassName: e
                                };
                                s = !1
                            }
                            let c = (function(e) {
                                if (e.length <= 1) return e;
                                let r = [],
                                    t = [];
                                return e.forEach(e => {
                                    "[" === e[0] ? (r.push(...t.sort(), e), t = []) : t.push(e)
                                }), r.push(...t.sort()), r
                            })(r).join(":");
                            return {
                                isTailwindClass: !0,
                                modifierId: n ? c + "!" : c,
                                classGroupId: a,
                                originalClassName: e,
                                hasPostfixModifier: s
                            }
                        }).reverse().filter(e => {
                            if (!e.isTailwindClass) return !0;
                            let {
                                modifierId: r,
                                classGroupId: t,
                                hasPostfixModifier: o
                            } = e, l = r + t;
                            return !i.has(l) && (i.add(l), n(t, o).forEach(e => i.add(r + e)), !0)
                        }).reverse().map(e => e.originalClassName).join(" ")
                    }(e, t);
                    return s(e, o), o
                }
                return function() {
                    return c(i.apply(null, arguments))
                }
            }(function() {
                let e = a("colors"),
                    r = a("spacing"),
                    t = a("blur"),
                    o = a("brightness"),
                    n = a("borderColor"),
                    l = a("borderRadius"),
                    i = a("borderSpacing"),
                    s = a("borderWidth"),
                    c = a("contrast"),
                    d = a("grayscale"),
                    u = a("hueRotate"),
                    p = a("invert"),
                    f = a("gap"),
                    b = a("gradientColorStops"),
                    z = a("gradientColorStopPositions"),
                    j = a("inset"),
                    A = a("margin"),
                    P = a("opacity"),
                    G = a("padding"),
                    T = a("saturate"),
                    R = a("scale"),
                    _ = a("sepia"),
                    N = a("skew"),
                    O = a("space"),
                    $ = a("translate"),
                    W = () => ["auto", "contain", "none"],
                    V = () => ["auto", "hidden", "clip", "visible", "scroll"],
                    D = () => ["auto", w, r],
                    H = () => [w, r],
                    B = () => ["", m, g],
                    L = () => ["auto", h, w],
                    q = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
                    F = () => ["solid", "dashed", "dotted", "double", "none"],
                    U = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"],
                    K = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
                    Z = () => ["", "0", w],
                    J = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                    Q = () => [h, y],
                    X = () => [h, w];
                return {
                    cacheSize: 500,
                    separator: ":",
                    theme: {
                        colors: [M],
                        spacing: [m, g],
                        blur: ["none", "", k, w],
                        brightness: Q(),
                        borderColor: [e],
                        borderRadius: ["none", "", "full", k, w],
                        borderSpacing: H(),
                        borderWidth: B(),
                        contrast: Q(),
                        grayscale: Z(),
                        hueRotate: X(),
                        invert: Z(),
                        gap: H(),
                        gradientColorStops: [e],
                        gradientColorStopPositions: [v, g],
                        inset: D(),
                        margin: D(),
                        opacity: Q(),
                        padding: H(),
                        saturate: Q(),
                        scale: Q(),
                        sepia: Z(),
                        skew: X(),
                        space: H(),
                        translate: H()
                    },
                    classGroups: {
                        aspect: [{
                            aspect: ["auto", "square", "video", w]
                        }],
                        container: ["container"],
                        columns: [{
                            columns: [k]
                        }],
                        "break-after": [{
                            "break-after": J()
                        }],
                        "break-before": [{
                            "break-before": J()
                        }],
                        "break-inside": [{
                            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                        }],
                        "box-decoration": [{
                            "box-decoration": ["slice", "clone"]
                        }],
                        box: [{
                            box: ["border", "content"]
                        }],
                        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                        float: [{
                            float: ["right", "left", "none"]
                        }],
                        clear: [{
                            clear: ["left", "right", "both", "none"]
                        }],
                        isolation: ["isolate", "isolation-auto"],
                        "object-fit": [{
                            object: ["contain", "cover", "fill", "none", "scale-down"]
                        }],
                        "object-position": [{
                            object: [...q(), w]
                        }],
                        overflow: [{
                            overflow: V()
                        }],
                        "overflow-x": [{
                            "overflow-x": V()
                        }],
                        "overflow-y": [{
                            "overflow-y": V()
                        }],
                        overscroll: [{
                            overscroll: W()
                        }],
                        "overscroll-x": [{
                            "overscroll-x": W()
                        }],
                        "overscroll-y": [{
                            "overscroll-y": W()
                        }],
                        position: ["static", "fixed", "absolute", "relative", "sticky"],
                        inset: [{
                            inset: [j]
                        }],
                        "inset-x": [{
                            "inset-x": [j]
                        }],
                        "inset-y": [{
                            "inset-y": [j]
                        }],
                        start: [{
                            start: [j]
                        }],
                        end: [{
                            end: [j]
                        }],
                        top: [{
                            top: [j]
                        }],
                        right: [{
                            right: [j]
                        }],
                        bottom: [{
                            bottom: [j]
                        }],
                        left: [{
                            left: [j]
                        }],
                        visibility: ["visible", "invisible", "collapse"],
                        z: [{
                            z: ["auto", x, w]
                        }],
                        basis: [{
                            basis: D()
                        }],
                        "flex-direction": [{
                            flex: ["row", "row-reverse", "col", "col-reverse"]
                        }],
                        "flex-wrap": [{
                            flex: ["wrap", "wrap-reverse", "nowrap"]
                        }],
                        flex: [{
                            flex: ["1", "auto", "initial", "none", w]
                        }],
                        grow: [{
                            grow: Z()
                        }],
                        shrink: [{
                            shrink: Z()
                        }],
                        order: [{
                            order: ["first", "last", "none", x, w]
                        }],
                        "grid-cols": [{
                            "grid-cols": [M]
                        }],
                        "col-start-end": [{
                            col: ["auto", {
                                span: ["full", x, w]
                            }, w]
                        }],
                        "col-start": [{
                            "col-start": L()
                        }],
                        "col-end": [{
                            "col-end": L()
                        }],
                        "grid-rows": [{
                            "grid-rows": [M]
                        }],
                        "row-start-end": [{
                            row: ["auto", {
                                span: [x, w]
                            }, w]
                        }],
                        "row-start": [{
                            "row-start": L()
                        }],
                        "row-end": [{
                            "row-end": L()
                        }],
                        "grid-flow": [{
                            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                        }],
                        "auto-cols": [{
                            "auto-cols": ["auto", "min", "max", "fr", w]
                        }],
                        "auto-rows": [{
                            "auto-rows": ["auto", "min", "max", "fr", w]
                        }],
                        gap: [{
                            gap: [f]
                        }],
                        "gap-x": [{
                            "gap-x": [f]
                        }],
                        "gap-y": [{
                            "gap-y": [f]
                        }],
                        "justify-content": [{
                            justify: ["normal", ...K()]
                        }],
                        "justify-items": [{
                            "justify-items": ["start", "end", "center", "stretch"]
                        }],
                        "justify-self": [{
                            "justify-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        "align-content": [{
                            content: ["normal", ...K(), "baseline"]
                        }],
                        "align-items": [{
                            items: ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "align-self": [{
                            self: ["auto", "start", "end", "center", "stretch", "baseline"]
                        }],
                        "place-content": [{
                            "place-content": [...K(), "baseline"]
                        }],
                        "place-items": [{
                            "place-items": ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "place-self": [{
                            "place-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        p: [{
                            p: [G]
                        }],
                        px: [{
                            px: [G]
                        }],
                        py: [{
                            py: [G]
                        }],
                        ps: [{
                            ps: [G]
                        }],
                        pe: [{
                            pe: [G]
                        }],
                        pt: [{
                            pt: [G]
                        }],
                        pr: [{
                            pr: [G]
                        }],
                        pb: [{
                            pb: [G]
                        }],
                        pl: [{
                            pl: [G]
                        }],
                        m: [{
                            m: [A]
                        }],
                        mx: [{
                            mx: [A]
                        }],
                        my: [{
                            my: [A]
                        }],
                        ms: [{
                            ms: [A]
                        }],
                        me: [{
                            me: [A]
                        }],
                        mt: [{
                            mt: [A]
                        }],
                        mr: [{
                            mr: [A]
                        }],
                        mb: [{
                            mb: [A]
                        }],
                        ml: [{
                            ml: [A]
                        }],
                        "space-x": [{
                            "space-x": [O]
                        }],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{
                            "space-y": [O]
                        }],
                        "space-y-reverse": ["space-y-reverse"],
                        w: [{
                            w: ["auto", "min", "max", "fit", w, r]
                        }],
                        "min-w": [{
                            "min-w": ["min", "max", "fit", w, m]
                        }],
                        "max-w": [{
                            "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
                                screen: [k]
                            }, k, w]
                        }],
                        h: [{
                            h: [w, r, "auto", "min", "max", "fit"]
                        }],
                        "min-h": [{
                            "min-h": ["min", "max", "fit", m, w]
                        }],
                        "max-h": [{
                            "max-h": [w, r, "min", "max", "fit"]
                        }],
                        "font-size": [{
                            text: ["base", k, g]
                        }],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{
                            font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", y]
                        }],
                        "font-family": [{
                            font: [M]
                        }],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                        tracking: [{
                            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", w]
                        }],
                        "line-clamp": [{
                            "line-clamp": ["none", h, y]
                        }],
                        leading: [{
                            leading: ["none", "tight", "snug", "normal", "relaxed", "loose", m, w]
                        }],
                        "list-image": [{
                            "list-image": ["none", w]
                        }],
                        "list-style-type": [{
                            list: ["none", "disc", "decimal", w]
                        }],
                        "list-style-position": [{
                            list: ["inside", "outside"]
                        }],
                        "placeholder-color": [{
                            placeholder: [e]
                        }],
                        "placeholder-opacity": [{
                            "placeholder-opacity": [P]
                        }],
                        "text-alignment": [{
                            text: ["left", "center", "right", "justify", "start", "end"]
                        }],
                        "text-color": [{
                            text: [e]
                        }],
                        "text-opacity": [{
                            "text-opacity": [P]
                        }],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{
                            decoration: [...F(), "wavy"]
                        }],
                        "text-decoration-thickness": [{
                            decoration: ["auto", "from-font", m, g]
                        }],
                        "underline-offset": [{
                            "underline-offset": ["auto", m, w]
                        }],
                        "text-decoration-color": [{
                            decoration: [e]
                        }],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        indent: [{
                            indent: H()
                        }],
                        "vertical-align": [{
                            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", w]
                        }],
                        whitespace: [{
                            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                        }],
                        break: [{
                            break: ["normal", "words", "all", "keep"]
                        }],
                        hyphens: [{
                            hyphens: ["none", "manual", "auto"]
                        }],
                        content: [{
                            content: ["none", w]
                        }],
                        "bg-attachment": [{
                            bg: ["fixed", "local", "scroll"]
                        }],
                        "bg-clip": [{
                            "bg-clip": ["border", "padding", "content", "text"]
                        }],
                        "bg-opacity": [{
                            "bg-opacity": [P]
                        }],
                        "bg-origin": [{
                            "bg-origin": ["border", "padding", "content"]
                        }],
                        "bg-position": [{
                            bg: [...q(), E]
                        }],
                        "bg-repeat": [{
                            bg: ["no-repeat", {
                                repeat: ["", "x", "y", "round", "space"]
                            }]
                        }],
                        "bg-size": [{
                            bg: ["auto", "cover", "contain", C]
                        }],
                        "bg-image": [{
                            bg: ["none", {
                                "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                            }, S]
                        }],
                        "bg-color": [{
                            bg: [e]
                        }],
                        "gradient-from-pos": [{
                            from: [z]
                        }],
                        "gradient-via-pos": [{
                            via: [z]
                        }],
                        "gradient-to-pos": [{
                            to: [z]
                        }],
                        "gradient-from": [{
                            from: [b]
                        }],
                        "gradient-via": [{
                            via: [b]
                        }],
                        "gradient-to": [{
                            to: [b]
                        }],
                        rounded: [{
                            rounded: [l]
                        }],
                        "rounded-s": [{
                            "rounded-s": [l]
                        }],
                        "rounded-e": [{
                            "rounded-e": [l]
                        }],
                        "rounded-t": [{
                            "rounded-t": [l]
                        }],
                        "rounded-r": [{
                            "rounded-r": [l]
                        }],
                        "rounded-b": [{
                            "rounded-b": [l]
                        }],
                        "rounded-l": [{
                            "rounded-l": [l]
                        }],
                        "rounded-ss": [{
                            "rounded-ss": [l]
                        }],
                        "rounded-se": [{
                            "rounded-se": [l]
                        }],
                        "rounded-ee": [{
                            "rounded-ee": [l]
                        }],
                        "rounded-es": [{
                            "rounded-es": [l]
                        }],
                        "rounded-tl": [{
                            "rounded-tl": [l]
                        }],
                        "rounded-tr": [{
                            "rounded-tr": [l]
                        }],
                        "rounded-br": [{
                            "rounded-br": [l]
                        }],
                        "rounded-bl": [{
                            "rounded-bl": [l]
                        }],
                        "border-w": [{
                            border: [s]
                        }],
                        "border-w-x": [{
                            "border-x": [s]
                        }],
                        "border-w-y": [{
                            "border-y": [s]
                        }],
                        "border-w-s": [{
                            "border-s": [s]
                        }],
                        "border-w-e": [{
                            "border-e": [s]
                        }],
                        "border-w-t": [{
                            "border-t": [s]
                        }],
                        "border-w-r": [{
                            "border-r": [s]
                        }],
                        "border-w-b": [{
                            "border-b": [s]
                        }],
                        "border-w-l": [{
                            "border-l": [s]
                        }],
                        "border-opacity": [{
                            "border-opacity": [P]
                        }],
                        "border-style": [{
                            border: [...F(), "hidden"]
                        }],
                        "divide-x": [{
                            "divide-x": [s]
                        }],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{
                            "divide-y": [s]
                        }],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "divide-opacity": [{
                            "divide-opacity": [P]
                        }],
                        "divide-style": [{
                            divide: F()
                        }],
                        "border-color": [{
                            border: [n]
                        }],
                        "border-color-x": [{
                            "border-x": [n]
                        }],
                        "border-color-y": [{
                            "border-y": [n]
                        }],
                        "border-color-t": [{
                            "border-t": [n]
                        }],
                        "border-color-r": [{
                            "border-r": [n]
                        }],
                        "border-color-b": [{
                            "border-b": [n]
                        }],
                        "border-color-l": [{
                            "border-l": [n]
                        }],
                        "divide-color": [{
                            divide: [n]
                        }],
                        "outline-style": [{
                            outline: ["", ...F()]
                        }],
                        "outline-offset": [{
                            "outline-offset": [m, w]
                        }],
                        "outline-w": [{
                            outline: [m, g]
                        }],
                        "outline-color": [{
                            outline: [e]
                        }],
                        "ring-w": [{
                            ring: B()
                        }],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{
                            ring: [e]
                        }],
                        "ring-opacity": [{
                            "ring-opacity": [P]
                        }],
                        "ring-offset-w": [{
                            "ring-offset": [m, g]
                        }],
                        "ring-offset-color": [{
                            "ring-offset": [e]
                        }],
                        shadow: [{
                            shadow: ["", "inner", "none", k, I]
                        }],
                        "shadow-color": [{
                            shadow: [M]
                        }],
                        opacity: [{
                            opacity: [P]
                        }],
                        "mix-blend": [{
                            "mix-blend": U()
                        }],
                        "bg-blend": [{
                            "bg-blend": U()
                        }],
                        filter: [{
                            filter: ["", "none"]
                        }],
                        blur: [{
                            blur: [t]
                        }],
                        brightness: [{
                            brightness: [o]
                        }],
                        contrast: [{
                            contrast: [c]
                        }],
                        "drop-shadow": [{
                            "drop-shadow": ["", "none", k, w]
                        }],
                        grayscale: [{
                            grayscale: [d]
                        }],
                        "hue-rotate": [{
                            "hue-rotate": [u]
                        }],
                        invert: [{
                            invert: [p]
                        }],
                        saturate: [{
                            saturate: [T]
                        }],
                        sepia: [{
                            sepia: [_]
                        }],
                        "backdrop-filter": [{
                            "backdrop-filter": ["", "none"]
                        }],
                        "backdrop-blur": [{
                            "backdrop-blur": [t]
                        }],
                        "backdrop-brightness": [{
                            "backdrop-brightness": [o]
                        }],
                        "backdrop-contrast": [{
                            "backdrop-contrast": [c]
                        }],
                        "backdrop-grayscale": [{
                            "backdrop-grayscale": [d]
                        }],
                        "backdrop-hue-rotate": [{
                            "backdrop-hue-rotate": [u]
                        }],
                        "backdrop-invert": [{
                            "backdrop-invert": [p]
                        }],
                        "backdrop-opacity": [{
                            "backdrop-opacity": [P]
                        }],
                        "backdrop-saturate": [{
                            "backdrop-saturate": [T]
                        }],
                        "backdrop-sepia": [{
                            "backdrop-sepia": [_]
                        }],
                        "border-collapse": [{
                            border: ["collapse", "separate"]
                        }],
                        "border-spacing": [{
                            "border-spacing": [i]
                        }],
                        "border-spacing-x": [{
                            "border-spacing-x": [i]
                        }],
                        "border-spacing-y": [{
                            "border-spacing-y": [i]
                        }],
                        "table-layout": [{
                            table: ["auto", "fixed"]
                        }],
                        caption: [{
                            caption: ["top", "bottom"]
                        }],
                        transition: [{
                            transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", w]
                        }],
                        duration: [{
                            duration: X()
                        }],
                        ease: [{
                            ease: ["linear", "in", "out", "in-out", w]
                        }],
                        delay: [{
                            delay: X()
                        }],
                        animate: [{
                            animate: ["none", "spin", "ping", "pulse", "bounce", w]
                        }],
                        transform: [{
                            transform: ["", "gpu", "none"]
                        }],
                        scale: [{
                            scale: [R]
                        }],
                        "scale-x": [{
                            "scale-x": [R]
                        }],
                        "scale-y": [{
                            "scale-y": [R]
                        }],
                        rotate: [{
                            rotate: [x, w]
                        }],
                        "translate-x": [{
                            "translate-x": [$]
                        }],
                        "translate-y": [{
                            "translate-y": [$]
                        }],
                        "skew-x": [{
                            "skew-x": [N]
                        }],
                        "skew-y": [{
                            "skew-y": [N]
                        }],
                        "transform-origin": [{
                            origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", w]
                        }],
                        accent: [{
                            accent: ["auto", e]
                        }],
                        appearance: ["appearance-none"],
                        cursor: [{
                            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", w]
                        }],
                        "caret-color": [{
                            caret: [e]
                        }],
                        "pointer-events": [{
                            "pointer-events": ["none", "auto"]
                        }],
                        resize: [{
                            resize: ["none", "y", "x", ""]
                        }],
                        "scroll-behavior": [{
                            scroll: ["auto", "smooth"]
                        }],
                        "scroll-m": [{
                            "scroll-m": H()
                        }],
                        "scroll-mx": [{
                            "scroll-mx": H()
                        }],
                        "scroll-my": [{
                            "scroll-my": H()
                        }],
                        "scroll-ms": [{
                            "scroll-ms": H()
                        }],
                        "scroll-me": [{
                            "scroll-me": H()
                        }],
                        "scroll-mt": [{
                            "scroll-mt": H()
                        }],
                        "scroll-mr": [{
                            "scroll-mr": H()
                        }],
                        "scroll-mb": [{
                            "scroll-mb": H()
                        }],
                        "scroll-ml": [{
                            "scroll-ml": H()
                        }],
                        "scroll-p": [{
                            "scroll-p": H()
                        }],
                        "scroll-px": [{
                            "scroll-px": H()
                        }],
                        "scroll-py": [{
                            "scroll-py": H()
                        }],
                        "scroll-ps": [{
                            "scroll-ps": H()
                        }],
                        "scroll-pe": [{
                            "scroll-pe": H()
                        }],
                        "scroll-pt": [{
                            "scroll-pt": H()
                        }],
                        "scroll-pr": [{
                            "scroll-pr": H()
                        }],
                        "scroll-pb": [{
                            "scroll-pb": H()
                        }],
                        "scroll-pl": [{
                            "scroll-pl": H()
                        }],
                        "snap-align": [{
                            snap: ["start", "end", "center", "align-none"]
                        }],
                        "snap-stop": [{
                            snap: ["normal", "always"]
                        }],
                        "snap-type": [{
                            snap: ["none", "x", "y", "both"]
                        }],
                        "snap-strictness": [{
                            snap: ["mandatory", "proximity"]
                        }],
                        touch: [{
                            touch: ["auto", "none", "manipulation"]
                        }],
                        "touch-x": [{
                            "touch-pan": ["x", "left", "right"]
                        }],
                        "touch-y": [{
                            "touch-pan": ["y", "up", "down"]
                        }],
                        "touch-pz": ["touch-pinch-zoom"],
                        select: [{
                            select: ["none", "text", "all", "auto"]
                        }],
                        "will-change": [{
                            "will-change": ["auto", "scroll", "contents", "transform", w]
                        }],
                        fill: [{
                            fill: [e, "none"]
                        }],
                        "stroke-w": [{
                            stroke: [m, g, y]
                        }],
                        stroke: [{
                            stroke: [e, "none"]
                        }],
                        sr: ["sr-only", "not-sr-only"]
                    },
                    conflictingClassGroups: {
                        overflow: ["overflow-x", "overflow-y"],
                        overscroll: ["overscroll-x", "overscroll-y"],
                        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                        "inset-x": ["right", "left"],
                        "inset-y": ["top", "bottom"],
                        flex: ["basis", "grow", "shrink"],
                        gap: ["gap-x", "gap-y"],
                        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                        px: ["pr", "pl"],
                        py: ["pt", "pb"],
                        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                        mx: ["mr", "ml"],
                        my: ["mt", "mb"],
                        "font-size": ["leading"],
                        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                        "fvn-ordinal": ["fvn-normal"],
                        "fvn-slashed-zero": ["fvn-normal"],
                        "fvn-figure": ["fvn-normal"],
                        "fvn-spacing": ["fvn-normal"],
                        "fvn-fraction": ["fvn-normal"],
                        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                        "rounded-s": ["rounded-ss", "rounded-es"],
                        "rounded-e": ["rounded-se", "rounded-ee"],
                        "rounded-t": ["rounded-tl", "rounded-tr"],
                        "rounded-r": ["rounded-tr", "rounded-br"],
                        "rounded-b": ["rounded-br", "rounded-bl"],
                        "rounded-l": ["rounded-tl", "rounded-bl"],
                        "border-spacing": ["border-spacing-x", "border-spacing-y"],
                        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                        "border-w-x": ["border-w-r", "border-w-l"],
                        "border-w-y": ["border-w-t", "border-w-b"],
                        "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                        "border-color-x": ["border-color-r", "border-color-l"],
                        "border-color-y": ["border-color-t", "border-color-b"],
                        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                        "scroll-mx": ["scroll-mr", "scroll-ml"],
                        "scroll-my": ["scroll-mt", "scroll-mb"],
                        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                        "scroll-px": ["scroll-pr", "scroll-pl"],
                        "scroll-py": ["scroll-pt", "scroll-pb"],
                        touch: ["touch-x", "touch-y", "touch-pz"],
                        "touch-x": ["touch"],
                        "touch-y": ["touch"],
                        "touch-pz": ["touch"]
                    },
                    conflictingClassGroupModifiers: {
                        "font-size": ["leading"]
                    }
                }
            })
        }
    }
]);