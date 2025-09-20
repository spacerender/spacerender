try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "400467a4-bc70-4081-a8d8-2e239372036f", e._sentryDebugIdIdentifier = "sentry-dbid-400467a4-bc70-4081-a8d8-2e239372036f")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7710], {
        17293: function(e, t, n) {
            function r(e) {
                if (null == e) return window;
                if ("[object Window]" !== e.toString()) {
                    var t = e.ownerDocument;
                    return t && t.defaultView || window
                }
                return e
            }

            function o(e) {
                var t = r(e).Element;
                return e instanceof t || e instanceof Element
            }

            function i(e) {
                var t = r(e).HTMLElement;
                return e instanceof t || e instanceof HTMLElement
            }

            function a(e) {
                if ("undefined" == typeof ShadowRoot) return !1;
                var t = r(e).ShadowRoot;
                return e instanceof t || e instanceof ShadowRoot
            }
            n.d(t, {
                ZP: function() {
                    return eG
                }
            });
            var s, u, c, l, f, d, p, m = Math.max,
                v = Math.min,
                h = Math.round;

            function g() {
                var e = navigator.userAgentData;
                return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
                    return e.brand + "/" + e.version
                }).join(" ") : navigator.userAgent
            }

            function y() {
                return !/^((?!chrome|android).)*safari/i.test(g())
            }

            function b(e, t, n) {
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                var a = e.getBoundingClientRect(),
                    s = 1,
                    u = 1;
                t && i(e) && (s = e.offsetWidth > 0 && h(a.width) / e.offsetWidth || 1, u = e.offsetHeight > 0 && h(a.height) / e.offsetHeight || 1);
                var c = (o(e) ? r(e) : window).visualViewport,
                    l = !y() && n,
                    f = (a.left + (l && c ? c.offsetLeft : 0)) / s,
                    d = (a.top + (l && c ? c.offsetTop : 0)) / u,
                    p = a.width / s,
                    m = a.height / u;
                return {
                    width: p,
                    height: m,
                    top: d,
                    right: f + p,
                    bottom: d + m,
                    left: f,
                    x: f,
                    y: d
                }
            }

            function w(e) {
                var t = r(e);
                return {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }

            function x(e) {
                return e ? (e.nodeName || "").toLowerCase() : null
            }

            function E(e) {
                return ((o(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }

            function O(e) {
                return b(E(e)).left + w(e).scrollLeft
            }

            function C(e) {
                return r(e).getComputedStyle(e)
            }

            function A(e) {
                var t = C(e),
                    n = t.overflow,
                    r = t.overflowX,
                    o = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(n + o + r)
            }

            function T(e) {
                var t = b(e),
                    n = e.offsetWidth,
                    r = e.offsetHeight;
                return 1 >= Math.abs(t.width - n) && (n = t.width), 1 >= Math.abs(t.height - r) && (r = t.height), {
                    x: e.offsetLeft,
                    y: e.offsetTop,
                    width: n,
                    height: r
                }
            }

            function j(e) {
                return "html" === x(e) ? e : e.assignedSlot || e.parentNode || (a(e) ? e.host : null) || E(e)
            }

            function P(e, t) {
                void 0 === t && (t = []);
                var n, o = function e(t) {
                        return ["html", "body", "#document"].indexOf(x(t)) >= 0 ? t.ownerDocument.body : i(t) && A(t) ? t : e(j(t))
                    }(e),
                    a = o === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    s = r(o),
                    u = a ? [s].concat(s.visualViewport || [], A(o) ? o : []) : o,
                    c = t.concat(u);
                return a ? c : c.concat(P(j(u)))
            }

            function R(e) {
                return i(e) && "fixed" !== C(e).position ? e.offsetParent : null
            }

            function L(e) {
                for (var t = r(e), n = R(e); n && ["table", "td", "th"].indexOf(x(n)) >= 0 && "static" === C(n).position;) n = R(n);
                return n && ("html" === x(n) || "body" === x(n) && "static" === C(n).position) ? t : n || function(e) {
                    var t = /firefox/i.test(g());
                    if (/Trident/i.test(g()) && i(e) && "fixed" === C(e).position) return null;
                    var n = j(e);
                    for (a(n) && (n = n.host); i(n) && 0 > ["html", "body"].indexOf(x(n));) {
                        var r = C(n);
                        if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
                        n = n.parentNode
                    }
                    return null
                }(e) || t
            }
            var D = "bottom",
                S = "right",
                N = "left",
                k = "auto",
                M = ["top", D, S, N],
                I = "start",
                _ = "viewport",
                W = "popper",
                F = M.reduce(function(e, t) {
                    return e.concat([t + "-" + I, t + "-end"])
                }, []),
                B = [].concat(M, [k]).reduce(function(e, t) {
                    return e.concat([t, t + "-" + I, t + "-end"])
                }, []),
                H = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"],
                V = {
                    placement: "bottom",
                    modifiers: [],
                    strategy: "absolute"
                };

            function U() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return !t.some(function(e) {
                    return !(e && "function" == typeof e.getBoundingClientRect)
                })
            }
            var $ = {
                passive: !0
            };

            function z(e) {
                return e.split("-")[0]
            }

            function q(e) {
                return e.split("-")[1]
            }

            function Y(e) {
                return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
            }

            function X(e) {
                var t, n = e.reference,
                    r = e.element,
                    o = e.placement,
                    i = o ? z(o) : null,
                    a = o ? q(o) : null,
                    s = n.x + n.width / 2 - r.width / 2,
                    u = n.y + n.height / 2 - r.height / 2;
                switch (i) {
                    case "top":
                        t = {
                            x: s,
                            y: n.y - r.height
                        };
                        break;
                    case D:
                        t = {
                            x: s,
                            y: n.y + n.height
                        };
                        break;
                    case S:
                        t = {
                            x: n.x + n.width,
                            y: u
                        };
                        break;
                    case N:
                        t = {
                            x: n.x - r.width,
                            y: u
                        };
                        break;
                    default:
                        t = {
                            x: n.x,
                            y: n.y
                        }
                }
                var c = i ? Y(i) : null;
                if (null != c) {
                    var l = "y" === c ? "height" : "width";
                    switch (a) {
                        case I:
                            t[c] = t[c] - (n[l] / 2 - r[l] / 2);
                            break;
                        case "end":
                            t[c] = t[c] + (n[l] / 2 - r[l] / 2)
                    }
                }
                return t
            }
            var K = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto"
            };

            function Z(e) {
                var t, n, o, i, a, s, u, c = e.popper,
                    l = e.popperRect,
                    f = e.placement,
                    d = e.variation,
                    p = e.offsets,
                    m = e.position,
                    v = e.gpuAcceleration,
                    g = e.adaptive,
                    y = e.roundOffsets,
                    b = e.isFixed,
                    w = p.x,
                    x = void 0 === w ? 0 : w,
                    O = p.y,
                    A = void 0 === O ? 0 : O,
                    T = "function" == typeof y ? y({
                        x: x,
                        y: A
                    }) : {
                        x: x,
                        y: A
                    };
                x = T.x, A = T.y;
                var j = p.hasOwnProperty("x"),
                    P = p.hasOwnProperty("y"),
                    R = N,
                    k = "top",
                    M = window;
                if (g) {
                    var I = L(c),
                        _ = "clientHeight",
                        W = "clientWidth";
                    I === r(c) && "static" !== C(I = E(c)).position && "absolute" === m && (_ = "scrollHeight", W = "scrollWidth"), ("top" === f || (f === N || f === S) && "end" === d) && (k = D, A -= (b && I === M && M.visualViewport ? M.visualViewport.height : I[_]) - l.height, A *= v ? 1 : -1), (f === N || ("top" === f || f === D) && "end" === d) && (R = S, x -= (b && I === M && M.visualViewport ? M.visualViewport.width : I[W]) - l.width, x *= v ? 1 : -1)
                }
                var F = Object.assign({
                        position: m
                    }, g && K),
                    B = !0 === y ? (t = {
                        x: x,
                        y: A
                    }, n = r(c), o = t.x, i = t.y, {
                        x: h(o * (a = n.devicePixelRatio || 1)) / a || 0,
                        y: h(i * a) / a || 0
                    }) : {
                        x: x,
                        y: A
                    };
                return (x = B.x, A = B.y, v) ? Object.assign({}, F, ((u = {})[k] = P ? "0" : "", u[R] = j ? "0" : "", u.transform = 1 >= (M.devicePixelRatio || 1) ? "translate(" + x + "px, " + A + "px)" : "translate3d(" + x + "px, " + A + "px, 0)", u)) : Object.assign({}, F, ((s = {})[k] = P ? A + "px" : "", s[R] = j ? x + "px" : "", s.transform = "", s))
            }
            var J = {
                    name: "applyStyles",
                    enabled: !0,
                    phase: "write",
                    fn: function(e) {
                        var t = e.state;
                        Object.keys(t.elements).forEach(function(e) {
                            var n = t.styles[e] || {},
                                r = t.attributes[e] || {},
                                o = t.elements[e];
                            i(o) && x(o) && (Object.assign(o.style, n), Object.keys(r).forEach(function(e) {
                                var t = r[e];
                                !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
                            }))
                        })
                    },
                    effect: function(e) {
                        var t = e.state,
                            n = {
                                popper: {
                                    position: t.options.strategy,
                                    left: "0",
                                    top: "0",
                                    margin: "0"
                                },
                                arrow: {
                                    position: "absolute"
                                },
                                reference: {}
                            };
                        return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                            function() {
                                Object.keys(t.elements).forEach(function(e) {
                                    var r = t.elements[e],
                                        o = t.attributes[e] || {},
                                        a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function(e, t) {
                                            return e[t] = "", e
                                        }, {});
                                    i(r) && x(r) && (Object.assign(r.style, a), Object.keys(o).forEach(function(e) {
                                        r.removeAttribute(e)
                                    }))
                                })
                            }
                    },
                    requires: ["computeStyles"]
                },
                G = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };

            function Q(e) {
                return e.replace(/left|right|bottom|top/g, function(e) {
                    return G[e]
                })
            }
            var ee = {
                start: "end",
                end: "start"
            };

            function et(e) {
                return e.replace(/start|end/g, function(e) {
                    return ee[e]
                })
            }

            function en(e, t) {
                var n = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (n && a(n)) {
                    var r = t;
                    do {
                        if (r && e.isSameNode(r)) return !0;
                        r = r.parentNode || r.host
                    } while (r)
                }
                return !1
            }

            function er(e) {
                return Object.assign({}, e, {
                    left: e.x,
                    top: e.y,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                })
            }

            function eo(e, t, n) {
                var i, a, s, u, c, l, f, d, p, v;
                return t === _ ? er(function(e, t) {
                    var n = r(e),
                        o = E(e),
                        i = n.visualViewport,
                        a = o.clientWidth,
                        s = o.clientHeight,
                        u = 0,
                        c = 0;
                    if (i) {
                        a = i.width, s = i.height;
                        var l = y();
                        (l || !l && "fixed" === t) && (u = i.offsetLeft, c = i.offsetTop)
                    }
                    return {
                        width: a,
                        height: s,
                        x: u + O(e),
                        y: c
                    }
                }(e, n)) : o(t) ? ((i = b(t, !1, "fixed" === n)).top = i.top + t.clientTop, i.left = i.left + t.clientLeft, i.bottom = i.top + t.clientHeight, i.right = i.left + t.clientWidth, i.width = t.clientWidth, i.height = t.clientHeight, i.x = i.left, i.y = i.top, i) : er((a = E(e), u = E(a), c = w(a), l = null == (s = a.ownerDocument) ? void 0 : s.body, f = m(u.scrollWidth, u.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), d = m(u.scrollHeight, u.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0), p = -c.scrollLeft + O(a), v = -c.scrollTop, "rtl" === C(l || u).direction && (p += m(u.clientWidth, l ? l.clientWidth : 0) - f), {
                    width: f,
                    height: d,
                    x: p,
                    y: v
                }))
            }

            function ei() {
                return {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            }

            function ea(e) {
                return Object.assign({}, ei(), e)
            }

            function es(e, t) {
                return t.reduce(function(t, n) {
                    return t[n] = e, t
                }, {})
            }

            function eu(e, t) {
                void 0 === t && (t = {});
                var n, r, a, s, u, c, l, f, d = t,
                    p = d.placement,
                    h = void 0 === p ? e.placement : p,
                    g = d.strategy,
                    y = void 0 === g ? e.strategy : g,
                    w = d.boundary,
                    O = d.rootBoundary,
                    A = d.elementContext,
                    T = void 0 === A ? W : A,
                    R = d.altBoundary,
                    N = d.padding,
                    k = void 0 === N ? 0 : N,
                    I = ea("number" != typeof k ? k : es(k, M)),
                    F = e.rects.popper,
                    B = e.elements[void 0 !== R && R ? T === W ? "reference" : W : T],
                    H = (n = o(B) ? B : B.contextElement || E(e.elements.popper), r = void 0 === w ? "clippingParents" : w, a = void 0 === O ? _ : O, l = (c = [].concat("clippingParents" === r ? (s = P(j(n)), o(u = ["absolute", "fixed"].indexOf(C(n).position) >= 0 && i(n) ? L(n) : n) ? s.filter(function(e) {
                        return o(e) && en(e, u) && "body" !== x(e)
                    }) : []) : [].concat(r), [a]))[0], (f = c.reduce(function(e, t) {
                        var r = eo(n, t, y);
                        return e.top = m(r.top, e.top), e.right = v(r.right, e.right), e.bottom = v(r.bottom, e.bottom), e.left = m(r.left, e.left), e
                    }, eo(n, l, y))).width = f.right - f.left, f.height = f.bottom - f.top, f.x = f.left, f.y = f.top, f),
                    V = b(e.elements.reference),
                    U = X({
                        reference: V,
                        element: F,
                        strategy: "absolute",
                        placement: h
                    }),
                    $ = er(Object.assign({}, F, U)),
                    z = T === W ? $ : V,
                    q = {
                        top: H.top - z.top + I.top,
                        bottom: z.bottom - H.bottom + I.bottom,
                        left: H.left - z.left + I.left,
                        right: z.right - H.right + I.right
                    },
                    Y = e.modifiersData.offset;
                if (T === W && Y) {
                    var K = Y[h];
                    Object.keys(q).forEach(function(e) {
                        var t = [S, D].indexOf(e) >= 0 ? 1 : -1,
                            n = ["top", D].indexOf(e) >= 0 ? "y" : "x";
                        q[e] += K[n] * t
                    })
                }
                return q
            }

            function ec(e, t, n) {
                return m(e, v(t, n))
            }

            function el(e, t, n) {
                return void 0 === n && (n = {
                    x: 0,
                    y: 0
                }), {
                    top: e.top - t.height - n.y,
                    right: e.right - t.width + n.x,
                    bottom: e.bottom - t.height + n.y,
                    left: e.left - t.width - n.x
                }
            }

            function ef(e) {
                return ["top", S, D, N].some(function(t) {
                    return e[t] >= 0
                })
            }
            var ed = (c = void 0 === (u = (s = {
                    defaultModifiers: [{
                        name: "eventListeners",
                        enabled: !0,
                        phase: "write",
                        fn: function() {},
                        effect: function(e) {
                            var t = e.state,
                                n = e.instance,
                                o = e.options,
                                i = o.scroll,
                                a = void 0 === i || i,
                                s = o.resize,
                                u = void 0 === s || s,
                                c = r(t.elements.popper),
                                l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                            return a && l.forEach(function(e) {
                                    e.addEventListener("scroll", n.update, $)
                                }), u && c.addEventListener("resize", n.update, $),
                                function() {
                                    a && l.forEach(function(e) {
                                        e.removeEventListener("scroll", n.update, $)
                                    }), u && c.removeEventListener("resize", n.update, $)
                                }
                        },
                        data: {}
                    }, {
                        name: "popperOffsets",
                        enabled: !0,
                        phase: "read",
                        fn: function(e) {
                            var t = e.state,
                                n = e.name;
                            t.modifiersData[n] = X({
                                reference: t.rects.reference,
                                element: t.rects.popper,
                                strategy: "absolute",
                                placement: t.placement
                            })
                        },
                        data: {}
                    }, {
                        name: "computeStyles",
                        enabled: !0,
                        phase: "beforeWrite",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = n.gpuAcceleration,
                                o = n.adaptive,
                                i = n.roundOffsets,
                                a = void 0 === i || i,
                                s = {
                                    placement: z(t.placement),
                                    variation: q(t.placement),
                                    popper: t.elements.popper,
                                    popperRect: t.rects.popper,
                                    gpuAcceleration: void 0 === r || r,
                                    isFixed: "fixed" === t.options.strategy
                                };
                            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, Z(Object.assign({}, s, {
                                offsets: t.modifiersData.popperOffsets,
                                position: t.options.strategy,
                                adaptive: void 0 === o || o,
                                roundOffsets: a
                            })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, Z(Object.assign({}, s, {
                                offsets: t.modifiersData.arrow,
                                position: "absolute",
                                adaptive: !1,
                                roundOffsets: a
                            })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-placement": t.placement
                            })
                        },
                        data: {}
                    }, J, {
                        name: "offset",
                        enabled: !0,
                        phase: "main",
                        requires: ["popperOffsets"],
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name,
                                o = n.offset,
                                i = void 0 === o ? [0, 0] : o,
                                a = B.reduce(function(e, n) {
                                    var r, o, a, s, u, c;
                                    return e[n] = (r = t.rects, a = [N, "top"].indexOf(o = z(n)) >= 0 ? -1 : 1, u = (s = "function" == typeof i ? i(Object.assign({}, r, {
                                        placement: n
                                    })) : i)[0], c = s[1], u = u || 0, c = (c || 0) * a, [N, S].indexOf(o) >= 0 ? {
                                        x: c,
                                        y: u
                                    } : {
                                        x: u,
                                        y: c
                                    }), e
                                }, {}),
                                s = a[t.placement],
                                u = s.x,
                                c = s.y;
                            null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = a
                        }
                    }, {
                        name: "flip",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name;
                            if (!t.modifiersData[r]._skip) {
                                for (var o = n.mainAxis, i = void 0 === o || o, a = n.altAxis, s = void 0 === a || a, u = n.fallbackPlacements, c = n.padding, l = n.boundary, f = n.rootBoundary, d = n.altBoundary, p = n.flipVariations, m = void 0 === p || p, v = n.allowedAutoPlacements, h = t.options.placement, g = z(h) === h, y = u || (g || !m ? [Q(h)] : function(e) {
                                        if (z(e) === k) return [];
                                        var t = Q(e);
                                        return [et(e), t, et(t)]
                                    }(h)), b = [h].concat(y).reduce(function(e, n) {
                                        var r, o, i, a, s, u, d, p, h, g, y, b;
                                        return e.concat(z(n) === k ? (o = (r = {
                                            placement: n,
                                            boundary: l,
                                            rootBoundary: f,
                                            padding: c,
                                            flipVariations: m,
                                            allowedAutoPlacements: v
                                        }).placement, i = r.boundary, a = r.rootBoundary, s = r.padding, u = r.flipVariations, p = void 0 === (d = r.allowedAutoPlacements) ? B : d, 0 === (y = (g = (h = q(o)) ? u ? F : F.filter(function(e) {
                                            return q(e) === h
                                        }) : M).filter(function(e) {
                                            return p.indexOf(e) >= 0
                                        })).length && (y = g), Object.keys(b = y.reduce(function(e, n) {
                                            return e[n] = eu(t, {
                                                placement: n,
                                                boundary: i,
                                                rootBoundary: a,
                                                padding: s
                                            })[z(n)], e
                                        }, {})).sort(function(e, t) {
                                            return b[e] - b[t]
                                        })) : n)
                                    }, []), w = t.rects.reference, x = t.rects.popper, E = new Map, O = !0, C = b[0], A = 0; A < b.length; A++) {
                                    var T = b[A],
                                        j = z(T),
                                        P = q(T) === I,
                                        R = ["top", D].indexOf(j) >= 0,
                                        L = R ? "width" : "height",
                                        _ = eu(t, {
                                            placement: T,
                                            boundary: l,
                                            rootBoundary: f,
                                            altBoundary: d,
                                            padding: c
                                        }),
                                        W = R ? P ? S : N : P ? D : "top";
                                    w[L] > x[L] && (W = Q(W));
                                    var H = Q(W),
                                        V = [];
                                    if (i && V.push(_[j] <= 0), s && V.push(_[W] <= 0, _[H] <= 0), V.every(function(e) {
                                            return e
                                        })) {
                                        C = T, O = !1;
                                        break
                                    }
                                    E.set(T, V)
                                }
                                if (O)
                                    for (var U = m ? 3 : 1, $ = function(e) {
                                            var t = b.find(function(t) {
                                                var n = E.get(t);
                                                if (n) return n.slice(0, e).every(function(e) {
                                                    return e
                                                })
                                            });
                                            if (t) return C = t, "break"
                                        }, Y = U; Y > 0 && "break" !== $(Y); Y--);
                                t.placement !== C && (t.modifiersData[r]._skip = !0, t.placement = C, t.reset = !0)
                            }
                        },
                        requiresIfExists: ["offset"],
                        data: {
                            _skip: !1
                        }
                    }, {
                        name: "preventOverflow",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name,
                                o = n.mainAxis,
                                i = n.altAxis,
                                a = n.boundary,
                                s = n.rootBoundary,
                                u = n.altBoundary,
                                c = n.padding,
                                l = n.tether,
                                f = void 0 === l || l,
                                d = n.tetherOffset,
                                p = void 0 === d ? 0 : d,
                                h = eu(t, {
                                    boundary: a,
                                    rootBoundary: s,
                                    padding: c,
                                    altBoundary: u
                                }),
                                g = z(t.placement),
                                y = q(t.placement),
                                b = !y,
                                w = Y(g),
                                x = "x" === w ? "y" : "x",
                                E = t.modifiersData.popperOffsets,
                                O = t.rects.reference,
                                C = t.rects.popper,
                                A = "function" == typeof p ? p(Object.assign({}, t.rects, {
                                    placement: t.placement
                                })) : p,
                                j = "number" == typeof A ? {
                                    mainAxis: A,
                                    altAxis: A
                                } : Object.assign({
                                    mainAxis: 0,
                                    altAxis: 0
                                }, A),
                                P = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                                R = {
                                    x: 0,
                                    y: 0
                                };
                            if (E) {
                                if (void 0 === o || o) {
                                    var k, M = "y" === w ? "top" : N,
                                        _ = "y" === w ? D : S,
                                        W = "y" === w ? "height" : "width",
                                        F = E[w],
                                        B = F + h[M],
                                        H = F - h[_],
                                        V = f ? -C[W] / 2 : 0,
                                        U = y === I ? O[W] : C[W],
                                        $ = y === I ? -C[W] : -O[W],
                                        X = t.elements.arrow,
                                        K = f && X ? T(X) : {
                                            width: 0,
                                            height: 0
                                        },
                                        Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ei(),
                                        J = Z[M],
                                        G = Z[_],
                                        Q = ec(0, O[W], K[W]),
                                        ee = b ? O[W] / 2 - V - Q - J - j.mainAxis : U - Q - J - j.mainAxis,
                                        et = b ? -O[W] / 2 + V + Q + G + j.mainAxis : $ + Q + G + j.mainAxis,
                                        en = t.elements.arrow && L(t.elements.arrow),
                                        er = en ? "y" === w ? en.clientTop || 0 : en.clientLeft || 0 : 0,
                                        eo = null != (k = null == P ? void 0 : P[w]) ? k : 0,
                                        ea = ec(f ? v(B, F + ee - eo - er) : B, F, f ? m(H, F + et - eo) : H);
                                    E[w] = ea, R[w] = ea - F
                                }
                                if (void 0 !== i && i) {
                                    var es, el, ef = "x" === w ? "top" : N,
                                        ed = "x" === w ? D : S,
                                        ep = E[x],
                                        em = "y" === x ? "height" : "width",
                                        ev = ep + h[ef],
                                        eh = ep - h[ed],
                                        eg = -1 !== ["top", N].indexOf(g),
                                        ey = null != (el = null == P ? void 0 : P[x]) ? el : 0,
                                        eb = eg ? ev : ep - O[em] - C[em] - ey + j.altAxis,
                                        ew = eg ? ep + O[em] + C[em] - ey - j.altAxis : eh,
                                        ex = f && eg ? (es = ec(eb, ep, ew)) > ew ? ew : es : ec(f ? eb : ev, ep, f ? ew : eh);
                                    E[x] = ex, R[x] = ex - ep
                                }
                                t.modifiersData[r] = R
                            }
                        },
                        requiresIfExists: ["offset"]
                    }, {
                        name: "arrow",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t, n, r = e.state,
                                o = e.name,
                                i = e.options,
                                a = r.elements.arrow,
                                s = r.modifiersData.popperOffsets,
                                u = z(r.placement),
                                c = Y(u),
                                l = [N, S].indexOf(u) >= 0 ? "height" : "width";
                            if (a && s) {
                                var f = ea("number" != typeof(t = "function" == typeof(t = i.padding) ? t(Object.assign({}, r.rects, {
                                        placement: r.placement
                                    })) : t) ? t : es(t, M)),
                                    d = T(a),
                                    p = "y" === c ? "top" : N,
                                    m = "y" === c ? D : S,
                                    v = r.rects.reference[l] + r.rects.reference[c] - s[c] - r.rects.popper[l],
                                    h = s[c] - r.rects.reference[c],
                                    g = L(a),
                                    y = g ? "y" === c ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
                                    b = f[p],
                                    w = y - d[l] - f[m],
                                    x = y / 2 - d[l] / 2 + (v / 2 - h / 2),
                                    E = ec(b, x, w);
                                r.modifiersData[o] = ((n = {})[c] = E, n.centerOffset = E - x, n)
                            }
                        },
                        effect: function(e) {
                            var t = e.state,
                                n = e.options.element,
                                r = void 0 === n ? "[data-popper-arrow]" : n;
                            null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && en(t.elements.popper, r) && (t.elements.arrow = r)
                        },
                        requires: ["popperOffsets"],
                        requiresIfExists: ["preventOverflow"]
                    }, {
                        name: "hide",
                        enabled: !0,
                        phase: "main",
                        requiresIfExists: ["preventOverflow"],
                        fn: function(e) {
                            var t = e.state,
                                n = e.name,
                                r = t.rects.reference,
                                o = t.rects.popper,
                                i = t.modifiersData.preventOverflow,
                                a = eu(t, {
                                    elementContext: "reference"
                                }),
                                s = eu(t, {
                                    altBoundary: !0
                                }),
                                u = el(a, r),
                                c = el(s, o, i),
                                l = ef(u),
                                f = ef(c);
                            t.modifiersData[n] = {
                                referenceClippingOffsets: u,
                                popperEscapeOffsets: c,
                                isReferenceHidden: l,
                                hasPopperEscaped: f
                            }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-reference-hidden": l,
                                "data-popper-escaped": f
                            })
                        }
                    }]
                }).defaultModifiers) ? [] : u, f = void 0 === (l = s.defaultOptions) ? V : l, function(e, t, n) {
                    void 0 === n && (n = f);
                    var a, s, u = {
                            placement: "bottom",
                            orderedModifiers: [],
                            options: Object.assign({}, V, f),
                            modifiersData: {},
                            elements: {
                                reference: e,
                                popper: t
                            },
                            attributes: {},
                            styles: {}
                        },
                        l = [],
                        d = !1,
                        p = {
                            state: u,
                            setOptions: function(n) {
                                var r, i, a, s, d, v = "function" == typeof n ? n(u.options) : n;
                                m(), u.options = Object.assign({}, f, u.options, v), u.scrollParents = {
                                    reference: o(e) ? P(e) : e.contextElement ? P(e.contextElement) : [],
                                    popper: P(t)
                                };
                                var h = (i = Object.keys(r = [].concat(c, u.options.modifiers).reduce(function(e, t) {
                                    var n = e[t.name];
                                    return e[t.name] = n ? Object.assign({}, n, t, {
                                        options: Object.assign({}, n.options, t.options),
                                        data: Object.assign({}, n.data, t.data)
                                    }) : t, e
                                }, {})).map(function(e) {
                                    return r[e]
                                }), a = new Map, s = new Set, d = [], i.forEach(function(e) {
                                    a.set(e.name, e)
                                }), i.forEach(function(e) {
                                    s.has(e.name) || function e(t) {
                                        s.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function(t) {
                                            if (!s.has(t)) {
                                                var n = a.get(t);
                                                n && e(n)
                                            }
                                        }), d.push(t)
                                    }(e)
                                }), H.reduce(function(e, t) {
                                    return e.concat(d.filter(function(e) {
                                        return e.phase === t
                                    }))
                                }, []));
                                return u.orderedModifiers = h.filter(function(e) {
                                    return e.enabled
                                }), u.orderedModifiers.forEach(function(e) {
                                    var t = e.name,
                                        n = e.options,
                                        r = e.effect;
                                    if ("function" == typeof r) {
                                        var o = r({
                                            state: u,
                                            name: t,
                                            instance: p,
                                            options: void 0 === n ? {} : n
                                        });
                                        l.push(o || function() {})
                                    }
                                }), p.update()
                            },
                            forceUpdate: function() {
                                if (!d) {
                                    var e, t, n, o, a, s, c, l, f, m, v, g, y = u.elements,
                                        C = y.reference,
                                        j = y.popper;
                                    if (U(C, j)) {
                                        u.rects = {
                                            reference: (t = L(j), n = "fixed" === u.options.strategy, o = i(t), l = i(t) && (s = h((a = t.getBoundingClientRect()).width) / t.offsetWidth || 1, c = h(a.height) / t.offsetHeight || 1, 1 !== s || 1 !== c), f = E(t), m = b(C, l, n), v = {
                                                scrollLeft: 0,
                                                scrollTop: 0
                                            }, g = {
                                                x: 0,
                                                y: 0
                                            }, (o || !o && !n) && (("body" !== x(t) || A(f)) && (v = (e = t) !== r(e) && i(e) ? {
                                                scrollLeft: e.scrollLeft,
                                                scrollTop: e.scrollTop
                                            } : w(e)), i(t) ? (g = b(t, !0), g.x += t.clientLeft, g.y += t.clientTop) : f && (g.x = O(f))), {
                                                x: m.left + v.scrollLeft - g.x,
                                                y: m.top + v.scrollTop - g.y,
                                                width: m.width,
                                                height: m.height
                                            }),
                                            popper: T(j)
                                        }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(e) {
                                            return u.modifiersData[e.name] = Object.assign({}, e.data)
                                        });
                                        for (var P = 0; P < u.orderedModifiers.length; P++) {
                                            if (!0 === u.reset) {
                                                u.reset = !1, P = -1;
                                                continue
                                            }
                                            var R = u.orderedModifiers[P],
                                                D = R.fn,
                                                S = R.options,
                                                N = void 0 === S ? {} : S,
                                                k = R.name;
                                            "function" == typeof D && (u = D({
                                                state: u,
                                                options: N,
                                                name: k,
                                                instance: p
                                            }) || u)
                                        }
                                    }
                                }
                            },
                            update: (a = function() {
                                return new Promise(function(e) {
                                    p.forceUpdate(), e(u)
                                })
                            }, function() {
                                return s || (s = new Promise(function(e) {
                                    Promise.resolve().then(function() {
                                        s = void 0, e(a())
                                    })
                                })), s
                            }),
                            destroy: function() {
                                m(), d = !0
                            }
                        };
                    if (!U(e, t)) return p;

                    function m() {
                        l.forEach(function(e) {
                            return e()
                        }), l = []
                    }
                    return p.setOptions(n).then(function(e) {
                        !d && n.onFirstUpdate && n.onFirstUpdate(e)
                    }), p
                }),
                ep = {
                    passive: !0,
                    capture: !0
                },
                em = function() {
                    return document.body
                };

            function ev(e, t, n) {
                if (Array.isArray(e)) {
                    var r = e[t];
                    return null == r ? Array.isArray(n) ? n[t] : n : r
                }
                return e
            }

            function eh(e, t) {
                var n = ({}).toString.call(e);
                return 0 === n.indexOf("[object") && n.indexOf(t + "]") > -1
            }

            function eg(e, t) {
                return "function" == typeof e ? e.apply(void 0, t) : e
            }

            function ey(e, t) {
                var n;
                return 0 === t ? e : function(r) {
                    clearTimeout(n), n = setTimeout(function() {
                        e(r)
                    }, t)
                }
            }

            function eb(e) {
                return [].concat(e)
            }

            function ew(e, t) {
                -1 === e.indexOf(t) && e.push(t)
            }

            function ex(e) {
                return [].slice.call(e)
            }

            function eE(e) {
                return Object.keys(e).reduce(function(t, n) {
                    return void 0 !== e[n] && (t[n] = e[n]), t
                }, {})
            }

            function eO(e) {
                return ["Element", "Fragment"].some(function(t) {
                    return eh(e, t)
                })
            }

            function eC(e, t) {
                e.forEach(function(e) {
                    e && (e.style.transitionDuration = t + "ms")
                })
            }

            function eA(e, t) {
                e.forEach(function(e) {
                    e && e.setAttribute("data-state", t)
                })
            }

            function eT(e, t, n) {
                var r = t + "EventListener";
                ["transitionend", "webkitTransitionEnd"].forEach(function(t) {
                    e[r](t, n)
                })
            }

            function ej(e, t) {
                for (var n, r = t; r;) {
                    if (e.contains(r)) return !0;
                    r = null == r.getRootNode ? void 0 : null == (n = r.getRootNode()) ? void 0 : n.host
                }
                return !1
            }
            var eP = {
                    isTouch: !1
                },
                eR = 0;

            function eL() {
                !eP.isTouch && (eP.isTouch = !0, window.performance && document.addEventListener("mousemove", eD))
            }

            function eD() {
                var e = performance.now();
                e - eR < 20 && (eP.isTouch = !1, document.removeEventListener("mousemove", eD)), eR = e
            }

            function eS() {
                var e = document.activeElement;
                if (e && e._tippy && e._tippy.reference === e) {
                    var t = e._tippy;
                    e.blur && !t.state.isVisible && e.blur()
                }
            }
            var eN = !!("undefined" != typeof window && "undefined" != typeof document) && !!window.msCrypto,
                ek = Object.assign({
                    appendTo: em,
                    aria: {
                        content: "auto",
                        expanded: "auto"
                    },
                    delay: 0,
                    duration: [300, 250],
                    getReferenceClientRect: null,
                    hideOnClick: !0,
                    ignoreAttributes: !1,
                    interactive: !1,
                    interactiveBorder: 2,
                    interactiveDebounce: 0,
                    moveTransition: "",
                    offset: [0, 10],
                    onAfterUpdate: function() {},
                    onBeforeUpdate: function() {},
                    onCreate: function() {},
                    onDestroy: function() {},
                    onHidden: function() {},
                    onHide: function() {},
                    onMount: function() {},
                    onShow: function() {},
                    onShown: function() {},
                    onTrigger: function() {},
                    onUntrigger: function() {},
                    onClickOutside: function() {},
                    placement: "top",
                    plugins: [],
                    popperOptions: {},
                    render: null,
                    showOnCreate: !1,
                    touch: !0,
                    trigger: "mouseenter focus",
                    triggerTarget: null
                }, {
                    animateFill: !1,
                    followCursor: !1,
                    inlinePositioning: !1,
                    sticky: !1
                }, {
                    allowHTML: !1,
                    animation: "fade",
                    arrow: !0,
                    content: "",
                    inertia: !1,
                    maxWidth: 350,
                    role: "tooltip",
                    theme: "",
                    zIndex: 9999
                }),
                eM = Object.keys(ek);

            function eI(e) {
                var t = (e.plugins || []).reduce(function(t, n) {
                    var r, o = n.name,
                        i = n.defaultValue;
                    return o && (t[o] = void 0 !== e[o] ? e[o] : null != (r = ek[o]) ? r : i), t
                }, {});
                return Object.assign({}, e, t)
            }

            function e_(e, t) {
                var n, r = Object.assign({}, t, {
                    content: eg(t.content, [e])
                }, t.ignoreAttributes ? {} : ((n = t.plugins) ? Object.keys(eI(Object.assign({}, ek, {
                    plugins: n
                }))) : eM).reduce(function(t, n) {
                    var r = (e.getAttribute("data-tippy-" + n) || "").trim();
                    if (!r) return t;
                    if ("content" === n) t[n] = r;
                    else try {
                        t[n] = JSON.parse(r)
                    } catch (e) {
                        t[n] = r
                    }
                    return t
                }, {}));
                return r.aria = Object.assign({}, ek.aria, r.aria), r.aria = {
                    expanded: "auto" === r.aria.expanded ? t.interactive : r.aria.expanded,
                    content: "auto" === r.aria.content ? t.interactive ? null : "describedby" : r.aria.content
                }, r
            }

            function eW(e) {
                var t = e.firstElementChild,
                    n = ex(t.children);
                return {
                    box: t,
                    content: n.find(function(e) {
                        return e.classList.contains("tippy-content")
                    }),
                    arrow: n.find(function(e) {
                        return e.classList.contains("tippy-arrow") || e.classList.contains("tippy-svg-arrow")
                    }),
                    backdrop: n.find(function(e) {
                        return e.classList.contains("tippy-backdrop")
                    })
                }
            }
            var eF = 1,
                eB = [],
                eH = [];

            function eV(e, t) {
                void 0 === t && (t = {});
                var n = ek.plugins.concat(t.plugins || []);
                document.addEventListener("touchstart", eL, ep), window.addEventListener("blur", eS);
                var r = Object.assign({}, t, {
                        plugins: n
                    }),
                    o = (eO(e) ? [e] : eh(e, "NodeList") ? ex(e) : Array.isArray(e) ? e : ex(document.querySelectorAll(e))).reduce(function(e, t) {
                        var n = t && function(e, t) {
                            var n, r, o, i, a, s, u, c, l = e_(e, Object.assign({}, ek, eI(eE(t)))),
                                f = !1,
                                d = !1,
                                p = !1,
                                m = !1,
                                v = [],
                                h = ey(z, l.interactiveDebounce),
                                g = eF++,
                                y = (n = l.plugins).filter(function(e, t) {
                                    return n.indexOf(e) === t
                                }),
                                b = {
                                    id: g,
                                    reference: e,
                                    popper: document.createElement("div"),
                                    popperInstance: null,
                                    props: l,
                                    state: {
                                        isEnabled: !0,
                                        isVisible: !1,
                                        isDestroyed: !1,
                                        isMounted: !1,
                                        isShown: !1
                                    },
                                    plugins: y,
                                    clearDelayTimeouts: function() {
                                        clearTimeout(r), clearTimeout(o), cancelAnimationFrame(i)
                                    },
                                    setProps: function(t) {
                                        if (!b.state.isDestroyed) {
                                            D("onBeforeUpdate", [b, t]), U();
                                            var n = b.props,
                                                r = e_(e, Object.assign({}, n, eE(t), {
                                                    ignoreAttributes: !0
                                                }));
                                            b.props = r, V(), n.interactiveDebounce !== r.interactiveDebounce && (k(), h = ey(z, r.interactiveDebounce)), n.triggerTarget && !r.triggerTarget ? eb(n.triggerTarget).forEach(function(e) {
                                                e.removeAttribute("aria-expanded")
                                            }) : r.triggerTarget && e.removeAttribute("aria-expanded"), N(), L(), E && E(n, r), b.popperInstance && (K(), J().forEach(function(e) {
                                                requestAnimationFrame(e._tippy.popperInstance.forceUpdate)
                                            })), D("onAfterUpdate", [b, t])
                                        }
                                    },
                                    setContent: function(e) {
                                        b.setProps({
                                            content: e
                                        })
                                    },
                                    show: function() {
                                        var t, n, r, o = b.state.isVisible,
                                            i = b.state.isDestroyed,
                                            a = !b.state.isEnabled,
                                            s = eP.isTouch && !b.props.touch,
                                            l = ev(b.props.duration, 0, ek.duration);
                                        if (!(o || i || a || s || (c || e).hasAttribute("disabled")) && (D("onShow", [b], !1), !1 !== b.props.onShow(b))) {
                                            if (b.state.isVisible = !0, j() && (x.style.visibility = "visible"), L(), W(), b.state.isMounted || (x.style.transition = "none"), j()) {
                                                var f = eW(x);
                                                eC([f.box, f.content], 0)
                                            }
                                            u = function() {
                                                var e;
                                                if (b.state.isVisible && !m) {
                                                    if (m = !0, x.offsetHeight, x.style.transition = b.props.moveTransition, j() && b.props.animation) {
                                                        var t = eW(x),
                                                            n = t.box,
                                                            r = t.content;
                                                        eC([n, r], l), eA([n, r], "visible")
                                                    }
                                                    S(), N(), ew(eH, b), null == (e = b.popperInstance) || e.forceUpdate(), D("onMount", [b]), b.props.animation && j() && B(l, function() {
                                                        b.state.isShown = !0, D("onShown", [b])
                                                    })
                                                }
                                            }, n = b.props.appendTo, r = c || e, (t = b.props.interactive && n === em || "parent" === n ? r.parentNode : eg(n, [r])).contains(x) || t.appendChild(x), b.state.isMounted = !0, K()
                                        }
                                    },
                                    hide: function() {
                                        var e, t = !b.state.isVisible,
                                            n = b.state.isDestroyed,
                                            r = !b.state.isEnabled,
                                            o = ev(b.props.duration, 1, ek.duration);
                                        if (!t && !n && !r && (D("onHide", [b], !1), !1 !== b.props.onHide(b))) {
                                            if (b.state.isVisible = !1, b.state.isShown = !1, m = !1, f = !1, j() && (x.style.visibility = "hidden"), k(), F(), L(!0), j()) {
                                                var i = eW(x),
                                                    a = i.box,
                                                    s = i.content;
                                                b.props.animation && (eC([a, s], o), eA([a, s], "hidden"))
                                            }(S(), N(), b.props.animation) ? j() && (e = b.unmount, B(o, function() {
                                                !b.state.isVisible && x.parentNode && x.parentNode.contains(x) && e()
                                            })): b.unmount()
                                        }
                                    },
                                    hideWithInteractivity: function(e) {
                                        P().addEventListener("mousemove", h), ew(eB, h), h(e)
                                    },
                                    enable: function() {
                                        b.state.isEnabled = !0
                                    },
                                    disable: function() {
                                        b.hide(), b.state.isEnabled = !1
                                    },
                                    unmount: function() {
                                        b.state.isVisible && b.hide(), b.state.isMounted && (Z(), J().forEach(function(e) {
                                            e._tippy.unmount()
                                        }), x.parentNode && x.parentNode.removeChild(x), eH = eH.filter(function(e) {
                                            return e !== b
                                        }), b.state.isMounted = !1, D("onHidden", [b]))
                                    },
                                    destroy: function() {
                                        b.state.isDestroyed || (b.clearDelayTimeouts(), b.unmount(), U(), delete e._tippy, b.state.isDestroyed = !0, D("onDestroy", [b]))
                                    }
                                };
                            if (!l.render) return b;
                            var w = l.render(b),
                                x = w.popper,
                                E = w.onUpdate;
                            x.setAttribute("data-tippy-root", ""), x.id = "tippy-" + b.id, b.popper = x, e._tippy = b, x._tippy = b;
                            var O = y.map(function(e) {
                                    return e.fn(b)
                                }),
                                C = e.hasAttribute("aria-expanded");
                            return V(), N(), L(), D("onCreate", [b]), l.showOnCreate && G(), x.addEventListener("mouseenter", function() {
                                b.props.interactive && b.state.isVisible && b.clearDelayTimeouts()
                            }), x.addEventListener("mouseleave", function() {
                                b.props.interactive && b.props.trigger.indexOf("mouseenter") >= 0 && P().addEventListener("mousemove", h)
                            }), b;

                            function A() {
                                var e = b.props.touch;
                                return Array.isArray(e) ? e : [e, 0]
                            }

                            function T() {
                                return "hold" === A()[0]
                            }

                            function j() {
                                var e;
                                return !!(null != (e = b.props.render) && e.$$tippy)
                            }

                            function P() {
                                var t, n, r = (c || e).parentNode;
                                return r && null != (n = eb(r)[0]) && null != (t = n.ownerDocument) && t.body ? n.ownerDocument : document
                            }

                            function R(e) {
                                return b.state.isMounted && !b.state.isVisible || eP.isTouch || a && "focus" === a.type ? 0 : ev(b.props.delay, e ? 0 : 1, ek.delay)
                            }

                            function L(e) {
                                void 0 === e && (e = !1), x.style.pointerEvents = b.props.interactive && !e ? "" : "none", x.style.zIndex = "" + b.props.zIndex
                            }

                            function D(e, t, n) {
                                if (void 0 === n && (n = !0), O.forEach(function(n) {
                                        n[e] && n[e].apply(n, t)
                                    }), n) {
                                    var r;
                                    (r = b.props)[e].apply(r, t)
                                }
                            }

                            function S() {
                                var t = b.props.aria;
                                if (t.content) {
                                    var n = "aria-" + t.content,
                                        r = x.id;
                                    eb(b.props.triggerTarget || e).forEach(function(e) {
                                        var t = e.getAttribute(n);
                                        if (b.state.isVisible) e.setAttribute(n, t ? t + " " + r : r);
                                        else {
                                            var o = t && t.replace(r, "").trim();
                                            o ? e.setAttribute(n, o) : e.removeAttribute(n)
                                        }
                                    })
                                }
                            }

                            function N() {
                                !C && b.props.aria.expanded && eb(b.props.triggerTarget || e).forEach(function(t) {
                                    b.props.interactive ? t.setAttribute("aria-expanded", b.state.isVisible && t === (c || e) ? "true" : "false") : t.removeAttribute("aria-expanded")
                                })
                            }

                            function k() {
                                P().removeEventListener("mousemove", h), eB = eB.filter(function(e) {
                                    return e !== h
                                })
                            }

                            function M(t) {
                                if (!eP.isTouch || !p && "mousedown" !== t.type) {
                                    var n = t.composedPath && t.composedPath()[0] || t.target;
                                    if (!(b.props.interactive && ej(x, n))) {
                                        if (eb(b.props.triggerTarget || e).some(function(e) {
                                                return ej(e, n)
                                            })) {
                                            if (eP.isTouch || b.state.isVisible && b.props.trigger.indexOf("click") >= 0) return
                                        } else D("onClickOutside", [b, t]);
                                        !0 !== b.props.hideOnClick || (b.clearDelayTimeouts(), b.hide(), d = !0, setTimeout(function() {
                                            d = !1
                                        }), b.state.isMounted || F())
                                    }
                                }
                            }

                            function I() {
                                p = !0
                            }

                            function _() {
                                p = !1
                            }

                            function W() {
                                var e = P();
                                e.addEventListener("mousedown", M, !0), e.addEventListener("touchend", M, ep), e.addEventListener("touchstart", _, ep), e.addEventListener("touchmove", I, ep)
                            }

                            function F() {
                                var e = P();
                                e.removeEventListener("mousedown", M, !0), e.removeEventListener("touchend", M, ep), e.removeEventListener("touchstart", _, ep), e.removeEventListener("touchmove", I, ep)
                            }

                            function B(e, t) {
                                var n = eW(x).box;

                                function r(e) {
                                    e.target === n && (eT(n, "remove", r), t())
                                }
                                if (0 === e) return t();
                                eT(n, "remove", s), eT(n, "add", r), s = r
                            }

                            function H(t, n, r) {
                                void 0 === r && (r = !1), eb(b.props.triggerTarget || e).forEach(function(e) {
                                    e.addEventListener(t, n, r), v.push({
                                        node: e,
                                        eventType: t,
                                        handler: n,
                                        options: r
                                    })
                                })
                            }

                            function V() {
                                T() && (H("touchstart", $, {
                                    passive: !0
                                }), H("touchend", q, {
                                    passive: !0
                                })), b.props.trigger.split(/\s+/).filter(Boolean).forEach(function(e) {
                                    if ("manual" !== e) switch (H(e, $), e) {
                                        case "mouseenter":
                                            H("mouseleave", q);
                                            break;
                                        case "focus":
                                            H(eN ? "focusout" : "blur", Y);
                                            break;
                                        case "focusin":
                                            H("focusout", Y)
                                    }
                                })
                            }

                            function U() {
                                v.forEach(function(e) {
                                    var t = e.node,
                                        n = e.eventType,
                                        r = e.handler,
                                        o = e.options;
                                    t.removeEventListener(n, r, o)
                                }), v = []
                            }

                            function $(e) {
                                var t, n = !1;
                                if (!(!b.state.isEnabled || X(e)) && !d) {
                                    var r = (null == (t = a) ? void 0 : t.type) === "focus";
                                    a = e, c = e.currentTarget, N(), !b.state.isVisible && eh(e, "MouseEvent") && eB.forEach(function(t) {
                                        return t(e)
                                    }), "click" === e.type && (0 > b.props.trigger.indexOf("mouseenter") || f) && !1 !== b.props.hideOnClick && b.state.isVisible ? n = !0 : G(e), "click" === e.type && (f = !n), n && !r && Q(e)
                                }
                            }

                            function z(t) {
                                var n, r, o, i = t.target,
                                    a = (c || e).contains(i) || x.contains(i);
                                ("mousemove" !== t.type || !a) && (n = J().concat(x).map(function(e) {
                                    var t, n = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
                                    return n ? {
                                        popperRect: e.getBoundingClientRect(),
                                        popperState: n,
                                        props: l
                                    } : null
                                }).filter(Boolean), r = t.clientX, o = t.clientY, n.every(function(e) {
                                    var t = e.popperRect,
                                        n = e.popperState,
                                        i = e.props.interactiveBorder,
                                        a = n.placement.split("-")[0],
                                        s = n.modifiersData.offset;
                                    if (!s) return !0;
                                    var u = "bottom" === a ? s.top.y : 0,
                                        c = "top" === a ? s.bottom.y : 0,
                                        l = "right" === a ? s.left.x : 0,
                                        f = "left" === a ? s.right.x : 0,
                                        d = t.top - o + u > i,
                                        p = o - t.bottom - c > i,
                                        m = t.left - r + l > i,
                                        v = r - t.right - f > i;
                                    return d || p || m || v
                                }) && (k(), Q(t)))
                            }

                            function q(e) {
                                if (!(X(e) || b.props.trigger.indexOf("click") >= 0 && f)) {
                                    if (b.props.interactive) {
                                        b.hideWithInteractivity(e);
                                        return
                                    }
                                    Q(e)
                                }
                            }

                            function Y(t) {
                                0 > b.props.trigger.indexOf("focusin") && t.target !== (c || e) || b.props.interactive && t.relatedTarget && x.contains(t.relatedTarget) || Q(t)
                            }

                            function X(e) {
                                return !!eP.isTouch && T() !== e.type.indexOf("touch") >= 0
                            }

                            function K() {
                                Z();
                                var t = b.props,
                                    n = t.popperOptions,
                                    r = t.placement,
                                    o = t.offset,
                                    i = t.getReferenceClientRect,
                                    a = t.moveTransition,
                                    s = j() ? eW(x).arrow : null,
                                    l = i ? {
                                        getBoundingClientRect: i,
                                        contextElement: i.contextElement || c || e
                                    } : e,
                                    f = [{
                                        name: "offset",
                                        options: {
                                            offset: o
                                        }
                                    }, {
                                        name: "preventOverflow",
                                        options: {
                                            padding: {
                                                top: 2,
                                                bottom: 2,
                                                left: 5,
                                                right: 5
                                            }
                                        }
                                    }, {
                                        name: "flip",
                                        options: {
                                            padding: 5
                                        }
                                    }, {
                                        name: "computeStyles",
                                        options: {
                                            adaptive: !a
                                        }
                                    }, {
                                        name: "$$tippy",
                                        enabled: !0,
                                        phase: "beforeWrite",
                                        requires: ["computeStyles"],
                                        fn: function(e) {
                                            var t = e.state;
                                            if (j()) {
                                                var n = eW(x).box;
                                                ["placement", "reference-hidden", "escaped"].forEach(function(e) {
                                                    "placement" === e ? n.setAttribute("data-placement", t.placement) : t.attributes.popper["data-popper-" + e] ? n.setAttribute("data-" + e, "") : n.removeAttribute("data-" + e)
                                                }), t.attributes.popper = {}
                                            }
                                        }
                                    }];
                                j() && s && f.push({
                                    name: "arrow",
                                    options: {
                                        element: s,
                                        padding: 3
                                    }
                                }), f.push.apply(f, (null == n ? void 0 : n.modifiers) || []), b.popperInstance = ed(l, x, Object.assign({}, n, {
                                    placement: r,
                                    onFirstUpdate: u,
                                    modifiers: f
                                }))
                            }

                            function Z() {
                                b.popperInstance && (b.popperInstance.destroy(), b.popperInstance = null)
                            }

                            function J() {
                                return ex(x.querySelectorAll("[data-tippy-root]"))
                            }

                            function G(e) {
                                b.clearDelayTimeouts(), e && D("onTrigger", [b, e]), W();
                                var t = R(!0),
                                    n = A(),
                                    o = n[0],
                                    i = n[1];
                                eP.isTouch && "hold" === o && i && (t = i), t ? r = setTimeout(function() {
                                    b.show()
                                }, t) : b.show()
                            }

                            function Q(e) {
                                if (b.clearDelayTimeouts(), D("onUntrigger", [b, e]), !b.state.isVisible) {
                                    F();
                                    return
                                }
                                if (!(b.props.trigger.indexOf("mouseenter") >= 0 && b.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(e.type) >= 0) || !f) {
                                    var t = R(!1);
                                    t ? o = setTimeout(function() {
                                        b.state.isVisible && b.hide()
                                    }, t) : i = requestAnimationFrame(function() {
                                        b.hide()
                                    })
                                }
                            }
                        }(t, r);
                        return n && e.push(n), e
                    }, []);
                return eO(e) ? o[0] : o
            }
            eV.defaultProps = ek, eV.setDefaultProps = function(e) {
                Object.keys(e).forEach(function(t) {
                    ek[t] = e[t]
                })
            }, eV.currentInput = eP, Object.assign({}, J, {
                effect: function(e) {
                    var t = e.state,
                        n = {
                            popper: {
                                position: t.options.strategy,
                                left: "0",
                                top: "0",
                                margin: "0"
                            },
                            arrow: {
                                position: "absolute"
                            },
                            reference: {}
                        };
                    Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow)
                }
            }), eV.setDefaultProps({
                animation: !1
            });
            var eU = n(2784),
                e$ = n(28316);

            function ez(e, t) {
                if (null == e) return {};
                var n, r, o = {},
                    i = Object.keys(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }
            var eq = "undefined" != typeof window && "undefined" != typeof document;

            function eY(e, t) {
                e && ("function" == typeof e && e(t), ({}).hasOwnProperty.call(e, "current") && (e.current = t))
            }

            function eX() {
                return eq && document.createElement("div")
            }
            var eK = eq ? eU.useLayoutEffect : eU.useEffect;

            function eZ(e, t, n) {
                n.split(/\s+/).forEach(function(n) {
                    n && e.classList[t](n)
                })
            }
            var eJ = {
                    name: "className",
                    defaultValue: "",
                    fn: function(e) {
                        var t = e.popper.firstElementChild,
                            n = function() {
                                var t;
                                return !!(null == (t = e.props.render) ? void 0 : t.$$tippy)
                            };

                        function r() {
                            (!e.props.className || n()) && eZ(t, "add", e.props.className)
                        }
                        return {
                            onCreate: r,
                            onBeforeUpdate: function() {
                                n() && eZ(t, "remove", e.props.className)
                            },
                            onAfterUpdate: r
                        }
                    }
                },
                eG = (d = function(e) {
                    var t, n, r, o = e.children,
                        i = e.content,
                        a = e.visible,
                        s = e.singleton,
                        u = e.render,
                        c = e.reference,
                        l = e.disabled,
                        f = void 0 !== l && l,
                        d = e.ignoreAttributes,
                        p = (e.__source, e.__self, ez(e, ["children", "content", "visible", "singleton", "render", "reference", "disabled", "ignoreAttributes", "__source", "__self"])),
                        m = void 0 !== a,
                        v = void 0 !== s,
                        h = (0, eU.useState)(!1),
                        g = h[0],
                        y = h[1],
                        b = (0, eU.useState)({}),
                        w = b[0],
                        x = b[1],
                        E = (0, eU.useState)(),
                        O = E[0],
                        C = E[1],
                        A = (t = function() {
                            return {
                                container: eX(),
                                renders: 1
                            }
                        }, (n = (0, eU.useRef)()).current || (n.current = t()), n.current),
                        T = Object.assign({
                            ignoreAttributes: void 0 === d || d
                        }, p, {
                            content: A.container
                        });
                    m && (T.trigger = "manual", T.hideOnClick = !1), v && (f = !0);
                    var j = T,
                        P = T.plugins || [];
                    u && (j = Object.assign({}, T, {
                        plugins: v && null != s.data ? [].concat(P, [{
                            fn: function() {
                                return {
                                    onTrigger: function(e, t) {
                                        var n = s.data.children.find(function(e) {
                                            return e.instance.reference === t.currentTarget
                                        });
                                        e.state.$$activeSingletonInstance = n.instance, C(n.content)
                                    }
                                }
                            }
                        }]) : P,
                        render: function() {
                            return {
                                popper: A.container
                            }
                        }
                    }));
                    var R = [c].concat(o ? [o.type] : []);
                    return eK(function() {
                        var e = c;
                        c && c.hasOwnProperty("current") && (e = c.current);
                        var t = eV(e || A.ref || eX(), Object.assign({}, j, {
                            plugins: [eJ].concat(T.plugins || [])
                        }));
                        return A.instance = t, f && t.disable(), a && t.show(), v && s.hook({
                                instance: t,
                                content: i,
                                props: j,
                                setSingletonContent: C
                            }), y(!0),
                            function() {
                                t.destroy(), null == s || s.cleanup(t)
                            }
                    }, R), eK(function() {
                        if (1 === A.renders) {
                            A.renders++;
                            return
                        }
                        var e, t, n, r, o, u, c, l = A.instance;
                        l.setProps((e = l.props, Object.assign({}, t = j, {
                            popperOptions: Object.assign({}, e.popperOptions, t.popperOptions, {
                                modifiers: (o = [].concat((null == (n = e.popperOptions) ? void 0 : n.modifiers) || [], (null == (r = t.popperOptions) ? void 0 : r.modifiers) || []), u = [], o.forEach(function(e) {
                                    u.find(function(t) {
                                        return function e(t, n) {
                                            if (t === n) return !0;
                                            if ("object" != typeof t || null == t || "object" != typeof n || null == n || Object.keys(t).length !== Object.keys(n).length) return !1;
                                            for (var r in t)
                                                if (!n.hasOwnProperty(r) || !e(t[r], n[r])) return !1;
                                            return !0
                                        }(e, t)
                                    }) || u.push(e)
                                }), u)
                            })
                        }))), null == (c = l.popperInstance) || c.forceUpdate(), f ? l.disable() : l.enable(), m && (a ? l.show() : l.hide()), v && s.hook({
                            instance: l,
                            content: i,
                            props: j,
                            setSingletonContent: C
                        })
                    }), eK(function() {
                        if (u) {
                            var e, t = A.instance;
                            t.setProps({
                                popperOptions: Object.assign({}, t.props.popperOptions, {
                                    modifiers: [].concat(((null == (e = t.props.popperOptions) ? void 0 : e.modifiers) || []).filter(function(e) {
                                        return "$$tippyReact" !== e.name
                                    }), [{
                                        name: "$$tippyReact",
                                        enabled: !0,
                                        phase: "beforeWrite",
                                        requires: ["computeStyles"],
                                        fn: function(e) {
                                            var t, n = e.state,
                                                r = null == (t = n.modifiersData) ? void 0 : t.hide;
                                            (w.placement !== n.placement || w.referenceHidden !== (null == r ? void 0 : r.isReferenceHidden) || w.escaped !== (null == r ? void 0 : r.hasPopperEscaped)) && x({
                                                placement: n.placement,
                                                referenceHidden: null == r ? void 0 : r.isReferenceHidden,
                                                escaped: null == r ? void 0 : r.hasPopperEscaped
                                            }), n.attributes.popper = {}
                                        }
                                    }])
                                })
                            })
                        }
                    }, [w.placement, w.referenceHidden, w.escaped].concat(R)), eU.createElement(eU.Fragment, null, o ? (0, eU.cloneElement)(o, {
                        ref: function(e) {
                            A.ref = e, eY(o.ref, e)
                        }
                    }) : null, g && (0, e$.createPortal)(u ? u((r = {
                        "data-placement": w.placement
                    }, w.referenceHidden && (r["data-reference-hidden"] = ""), w.escaped && (r["data-escaped"] = ""), r), O, A.instance) : i, A.container))
                }, p = {
                    render: function() {
                        return ""
                    }
                }, (0, eU.forwardRef)(function(e, t) {
                    var n = e.children,
                        r = ez(e, ["children"]);
                    return eU.createElement(d, Object.assign({}, p, r), n ? (0, eU.cloneElement)(n, {
                        ref: function(e) {
                            eY(t, e), eY(n.ref, e)
                        }
                    }) : null)
                }))
        },
        75746: function(e, t, n) {
            let r;
            n.d(t, {
                ee: function() {
                    return e7
                },
                Eh: function() {
                    return e6
                },
                x8: function() {
                    return e8
                },
                VY: function() {
                    return e9
                },
                tW: function() {
                    return eH
                },
                h_: function() {
                    return e4
                },
                fC: function() {
                    return e3
                },
                xz: function() {
                    return e5
                }
            });
            var o, i = n(2784),
                a = n.t(i, 2);

            function s(e, t, {
                checkForDefaultPrevented: n = !0
            } = {}) {
                return function(r) {
                    if (e ? .(r), !1 === n || !r.defaultPrevented) return t ? .(r)
                }
            }

            function u(...e) {
                return t => e.forEach(e => {
                    "function" == typeof e ? e(t) : null != e && (e.current = t)
                })
            }

            function c(...e) {
                return i.useCallback(u(...e), e)
            }
            var l = n(52322);

            function f(e, t = []) {
                let n = [],
                    r = () => {
                        let t = n.map(e => i.createContext(e));
                        return function(n) {
                            let r = n ? .[e] || t;
                            return i.useMemo(() => ({
                                [`__scope${e}`]: { ...n,
                                    [e]: r
                                }
                            }), [n, r])
                        }
                    };
                return r.scopeName = e, [function(t, r) {
                    let o = i.createContext(r),
                        a = n.length;

                    function s(t) {
                        let {
                            scope: n,
                            children: r,
                            ...s
                        } = t, u = n ? .[e][a] || o, c = i.useMemo(() => s, Object.values(s));
                        return (0, l.jsx)(u.Provider, {
                            value: c,
                            children: r
                        })
                    }
                    return n = [...n, r], s.displayName = t + "Provider", [s, function(n, s) {
                        let u = s ? .[e][a] || o,
                            c = i.useContext(u);
                        if (c) return c;
                        if (void 0 !== r) return r;
                        throw Error(`\`${n}\` must be used within \`${t}\``)
                    }]
                }, function(...e) {
                    let t = e[0];
                    if (1 === e.length) return t;
                    let n = () => {
                        let n = e.map(e => ({
                            useScope: e(),
                            scopeName: e.scopeName
                        }));
                        return function(e) {
                            let r = n.reduce((t, {
                                useScope: n,
                                scopeName: r
                            }) => {
                                let o = n(e)[`__scope${r}`];
                                return { ...t,
                                    ...o
                                }
                            }, {});
                            return i.useMemo(() => ({
                                [`__scope${t.scopeName}`]: r
                            }), [r])
                        }
                    };
                    return n.scopeName = t.scopeName, n
                }(r, ...t)]
            }
            var d = n(28316),
                p = i.forwardRef((e, t) => {
                    let {
                        children: n,
                        ...r
                    } = e, o = i.Children.toArray(n), a = o.find(h);
                    if (a) {
                        let e = a.props.children,
                            n = o.map(t => t !== a ? t : i.Children.count(e) > 1 ? i.Children.only(null) : i.isValidElement(e) ? e.props.children : null);
                        return (0, l.jsx)(m, { ...r,
                            ref: t,
                            children: i.isValidElement(e) ? i.cloneElement(e, void 0, n) : null
                        })
                    }
                    return (0, l.jsx)(m, { ...r,
                        ref: t,
                        children: n
                    })
                });
            p.displayName = "Slot";
            var m = i.forwardRef((e, t) => {
                let {
                    children: n,
                    ...r
                } = e;
                if (i.isValidElement(n)) {
                    let e, o;
                    let a = (e = Object.getOwnPropertyDescriptor(n.props, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning ? n.ref : (e = Object.getOwnPropertyDescriptor(n, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning ? n.props.ref : n.props.ref || n.ref;
                    return i.cloneElement(n, { ... function(e, t) {
                            let n = { ...t
                            };
                            for (let r in t) {
                                let o = e[r],
                                    i = t[r];
                                /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                                    i(...e), o(...e)
                                } : o && (n[r] = o) : "style" === r ? n[r] = { ...o,
                                    ...i
                                } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                            }
                            return { ...e,
                                ...n
                            }
                        }(r, n.props),
                        ref: t ? u(t, a) : a
                    })
                }
                return i.Children.count(n) > 1 ? i.Children.only(null) : null
            });
            m.displayName = "SlotClone";
            var v = ({
                children: e
            }) => (0, l.jsx)(l.Fragment, {
                children: e
            });

            function h(e) {
                return i.isValidElement(e) && e.type === v
            }
            var g = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                let n = i.forwardRef((e, n) => {
                    let {
                        asChild: r,
                        ...o
                    } = e, i = r ? p : t;
                    return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, l.jsx)(i, { ...o,
                        ref: n
                    })
                });
                return n.displayName = `Primitive.${t}`, { ...e,
                    [t]: n
                }
            }, {});

            function y(e) {
                let t = i.useRef(e);
                return i.useEffect(() => {
                    t.current = e
                }), i.useMemo(() => (...e) => t.current ? .(...e), [])
            }
            var b = "dismissableLayer.update",
                w = i.createContext({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                x = i.forwardRef((e, t) => {
                    let {
                        disableOutsidePointerEvents: n = !1,
                        onEscapeKeyDown: r,
                        onPointerDownOutside: a,
                        onFocusOutside: u,
                        onInteractOutside: f,
                        onDismiss: d,
                        ...p
                    } = e, m = i.useContext(w), [v, h] = i.useState(null), x = v ? .ownerDocument ? ? globalThis ? .document, [, C] = i.useState({}), A = c(t, e => h(e)), T = Array.from(m.layers), [j] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1), P = T.indexOf(j), R = v ? T.indexOf(v) : -1, L = m.layersWithOutsidePointerEventsDisabled.size > 0, D = R >= P, S = function(e, t = globalThis ? .document) {
                        let n = y(e),
                            r = i.useRef(!1),
                            o = i.useRef(() => {});
                        return i.useEffect(() => {
                            let e = e => {
                                    if (e.target && !r.current) {
                                        let r = function() {
                                                O("dismissableLayer.pointerDownOutside", n, i, {
                                                    discrete: !0
                                                })
                                            },
                                            i = {
                                                originalEvent: e
                                            };
                                        "touch" === e.pointerType ? (t.removeEventListener("click", o.current), o.current = r, t.addEventListener("click", o.current, {
                                            once: !0
                                        })) : r()
                                    } else t.removeEventListener("click", o.current);
                                    r.current = !1
                                },
                                i = window.setTimeout(() => {
                                    t.addEventListener("pointerdown", e)
                                }, 0);
                            return () => {
                                window.clearTimeout(i), t.removeEventListener("pointerdown", e), t.removeEventListener("click", o.current)
                            }
                        }, [t, n]), {
                            onPointerDownCapture: () => r.current = !0
                        }
                    }(e => {
                        let t = e.target,
                            n = [...m.branches].some(e => e.contains(t));
                        !D || n || (a ? .(e), f ? .(e), e.defaultPrevented || d ? .())
                    }, x), N = function(e, t = globalThis ? .document) {
                        let n = y(e),
                            r = i.useRef(!1);
                        return i.useEffect(() => {
                            let e = e => {
                                e.target && !r.current && O("dismissableLayer.focusOutside", n, {
                                    originalEvent: e
                                }, {
                                    discrete: !1
                                })
                            };
                            return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
                        }, [t, n]), {
                            onFocusCapture: () => r.current = !0,
                            onBlurCapture: () => r.current = !1
                        }
                    }(e => {
                        let t = e.target;
                        [...m.branches].some(e => e.contains(t)) || (u ? .(e), f ? .(e), e.defaultPrevented || d ? .())
                    }, x);
                    return ! function(e, t = globalThis ? .document) {
                        let n = y(e);
                        i.useEffect(() => {
                            let e = e => {
                                "Escape" === e.key && n(e)
                            };
                            return t.addEventListener("keydown", e, {
                                capture: !0
                            }), () => t.removeEventListener("keydown", e, {
                                capture: !0
                            })
                        }, [n, t])
                    }(e => {
                        R !== m.layers.size - 1 || (r ? .(e), !e.defaultPrevented && d && (e.preventDefault(), d()))
                    }, x), i.useEffect(() => {
                        if (v) return n && (0 === m.layersWithOutsidePointerEventsDisabled.size && (o = x.body.style.pointerEvents, x.body.style.pointerEvents = "none"), m.layersWithOutsidePointerEventsDisabled.add(v)), m.layers.add(v), E(), () => {
                            n && 1 === m.layersWithOutsidePointerEventsDisabled.size && (x.body.style.pointerEvents = o)
                        }
                    }, [v, x, n, m]), i.useEffect(() => () => {
                        v && (m.layers.delete(v), m.layersWithOutsidePointerEventsDisabled.delete(v), E())
                    }, [v, m]), i.useEffect(() => {
                        let e = () => C({});
                        return document.addEventListener(b, e), () => document.removeEventListener(b, e)
                    }, []), (0, l.jsx)(g.div, { ...p,
                        ref: A,
                        style: {
                            pointerEvents: L ? D ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: s(e.onFocusCapture, N.onFocusCapture),
                        onBlurCapture: s(e.onBlurCapture, N.onBlurCapture),
                        onPointerDownCapture: s(e.onPointerDownCapture, S.onPointerDownCapture)
                    })
                });

            function E() {
                let e = new CustomEvent(b);
                document.dispatchEvent(e)
            }

            function O(e, t, n, {
                discrete: r
            }) {
                let o = n.originalEvent.target,
                    i = new CustomEvent(e, {
                        bubbles: !1,
                        cancelable: !0,
                        detail: n
                    });
                (t && o.addEventListener(e, t, {
                    once: !0
                }), r) ? o && d.flushSync(() => o.dispatchEvent(i)): o.dispatchEvent(i)
            }
            x.displayName = "DismissableLayer", i.forwardRef((e, t) => {
                let n = i.useContext(w),
                    r = i.useRef(null),
                    o = c(t, r);
                return i.useEffect(() => {
                    let e = r.current;
                    if (e) return n.branches.add(e), () => {
                        n.branches.delete(e)
                    }
                }, [n.branches]), (0, l.jsx)(g.div, { ...e,
                    ref: o
                })
            }).displayName = "DismissableLayerBranch";
            var C = 0;

            function A() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
            }
            var T = "focusScope.autoFocusOnMount",
                j = "focusScope.autoFocusOnUnmount",
                P = {
                    bubbles: !1,
                    cancelable: !0
                },
                R = i.forwardRef((e, t) => {
                    let {
                        loop: n = !1,
                        trapped: r = !1,
                        onMountAutoFocus: o,
                        onUnmountAutoFocus: a,
                        ...s
                    } = e, [u, f] = i.useState(null), d = y(o), p = y(a), m = i.useRef(null), v = c(t, e => f(e)), h = i.useRef({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    i.useEffect(() => {
                        if (r) {
                            let e = function(e) {
                                    if (h.paused || !u) return;
                                    let t = e.target;
                                    u.contains(t) ? m.current = t : S(m.current, {
                                        select: !0
                                    })
                                },
                                t = function(e) {
                                    if (h.paused || !u) return;
                                    let t = e.relatedTarget;
                                    null === t || u.contains(t) || S(m.current, {
                                        select: !0
                                    })
                                };
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            let n = new MutationObserver(function(e) {
                                if (document.activeElement === document.body)
                                    for (let t of e) t.removedNodes.length > 0 && S(u)
                            });
                            return u && n.observe(u, {
                                childList: !0,
                                subtree: !0
                            }), () => {
                                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
                            }
                        }
                    }, [r, u, h.paused]), i.useEffect(() => {
                        if (u) {
                            N.add(h);
                            let e = document.activeElement;
                            if (!u.contains(e)) {
                                let t = new CustomEvent(T, P);
                                u.addEventListener(T, d), u.dispatchEvent(t), t.defaultPrevented || (function(e, {
                                    select: t = !1
                                } = {}) {
                                    let n = document.activeElement;
                                    for (let r of e)
                                        if (S(r, {
                                                select: t
                                            }), document.activeElement !== n) return
                                }(L(u).filter(e => "A" !== e.tagName), {
                                    select: !0
                                }), document.activeElement === e && S(u))
                            }
                            return () => {
                                u.removeEventListener(T, d), setTimeout(() => {
                                    let t = new CustomEvent(j, P);
                                    u.addEventListener(j, p), u.dispatchEvent(t), t.defaultPrevented || S(e ? ? document.body, {
                                        select: !0
                                    }), u.removeEventListener(j, p), N.remove(h)
                                }, 0)
                            }
                        }
                    }, [u, d, p, h]);
                    let b = i.useCallback(e => {
                        if (!n && !r || h.paused) return;
                        let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            o = document.activeElement;
                        if (t && o) {
                            let t = e.currentTarget,
                                [r, i] = function(e) {
                                    let t = L(e);
                                    return [D(t, e), D(t.reverse(), e)]
                                }(t);
                            r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), n && S(i, {
                                select: !0
                            })) : (e.preventDefault(), n && S(r, {
                                select: !0
                            })) : o === t && e.preventDefault()
                        }
                    }, [n, r, h.paused]);
                    return (0, l.jsx)(g.div, {
                        tabIndex: -1,
                        ...s,
                        ref: v,
                        onKeyDown: b
                    })
                });

            function L(e) {
                let t = [],
                    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: e => {
                            let t = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                for (; n.nextNode();) t.push(n.currentNode);
                return t
            }

            function D(e, t) {
                for (let n of e)
                    if (! function(e, {
                            upTo: t
                        }) {
                            if ("hidden" === getComputedStyle(e).visibility) return !0;
                            for (; e && (void 0 === t || e !== t);) {
                                if ("none" === getComputedStyle(e).display) return !0;
                                e = e.parentElement
                            }
                            return !1
                        }(n, {
                            upTo: t
                        })) return n
            }

            function S(e, {
                select: t = !1
            } = {}) {
                if (e && e.focus) {
                    var n;
                    let r = document.activeElement;
                    e.focus({
                        preventScroll: !0
                    }), e !== r && (n = e) instanceof HTMLInputElement && "select" in n && t && e.select()
                }
            }
            R.displayName = "FocusScope";
            var N = (r = [], {
                add(e) {
                    let t = r[0];
                    e !== t && t ? .pause(), (r = k(r, e)).unshift(e)
                },
                remove(e) {
                    r = k(r, e), r[0] ? .resume()
                }
            });

            function k(e, t) {
                let n = [...e],
                    r = n.indexOf(t);
                return -1 !== r && n.splice(r, 1), n
            }
            var M = globalThis ? .document ? i.useLayoutEffect : () => {},
                I = a["useId".toString()] || (() => void 0),
                _ = 0,
                W = n(92416),
                F = n(90927),
                B = i.forwardRef((e, t) => {
                    let {
                        children: n,
                        width: r = 10,
                        height: o = 5,
                        ...i
                    } = e;
                    return (0, l.jsx)(g.svg, { ...i,
                        ref: t,
                        width: r,
                        height: o,
                        viewBox: "0 0 30 10",
                        preserveAspectRatio: "none",
                        children: e.asChild ? n : (0, l.jsx)("polygon", {
                            points: "0,0 30,0 15,10"
                        })
                    })
                });
            B.displayName = "Arrow";
            var H = "Popper",
                [V, U] = f(H),
                [$, z] = V(H),
                q = e => {
                    let {
                        __scopePopper: t,
                        children: n
                    } = e, [r, o] = i.useState(null);
                    return (0, l.jsx)($, {
                        scope: t,
                        anchor: r,
                        onAnchorChange: o,
                        children: n
                    })
                };
            q.displayName = H;
            var Y = "PopperAnchor",
                X = i.forwardRef((e, t) => {
                    let {
                        __scopePopper: n,
                        virtualRef: r,
                        ...o
                    } = e, a = z(Y, n), s = i.useRef(null), u = c(t, s);
                    return i.useEffect(() => {
                        a.onAnchorChange(r ? .current || s.current)
                    }), r ? null : (0, l.jsx)(g.div, { ...o,
                        ref: u
                    })
                });
            X.displayName = Y;
            var K = "PopperContent",
                [Z, J] = V(K),
                G = i.forwardRef((e, t) => {
                    let {
                        __scopePopper: n,
                        side: r = "bottom",
                        sideOffset: o = 0,
                        align: a = "center",
                        alignOffset: s = 0,
                        arrowPadding: u = 0,
                        avoidCollisions: f = !0,
                        collisionBoundary: d = [],
                        collisionPadding: p = 0,
                        sticky: m = "partial",
                        hideWhenDetached: v = !1,
                        updatePositionStrategy: h = "optimized",
                        onPlaced: b,
                        ...w
                    } = e, x = z(K, n), [E, O] = i.useState(null), C = c(t, e => O(e)), [A, T] = i.useState(null), j = function(e) {
                        let [t, n] = i.useState(void 0);
                        return M(() => {
                            if (e) {
                                n({
                                    width: e.offsetWidth,
                                    height: e.offsetHeight
                                });
                                let t = new ResizeObserver(t => {
                                    let r, o;
                                    if (!Array.isArray(t) || !t.length) return;
                                    let i = t[0];
                                    if ("borderBoxSize" in i) {
                                        let e = i.borderBoxSize,
                                            t = Array.isArray(e) ? e[0] : e;
                                        r = t.inlineSize, o = t.blockSize
                                    } else r = e.offsetWidth, o = e.offsetHeight;
                                    n({
                                        width: r,
                                        height: o
                                    })
                                });
                                return t.observe(e, {
                                    box: "border-box"
                                }), () => t.unobserve(e)
                            }
                            n(void 0)
                        }, [e]), t
                    }(A), P = j ? .width ? ? 0, R = j ? .height ? ? 0, L = "number" == typeof p ? p : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...p
                    }, D = Array.isArray(d) ? d : [d], S = D.length > 0, N = {
                        padding: L,
                        boundary: D.filter(en),
                        altBoundary: S
                    }, {
                        refs: k,
                        floatingStyles: I,
                        placement: _,
                        isPositioned: B,
                        middlewareData: H
                    } = (0, W.YF)({
                        strategy: "fixed",
                        placement: r + ("center" !== a ? "-" + a : ""),
                        whileElementsMounted: (...e) => (0, F.Me)(...e, {
                            animationFrame: "always" === h
                        }),
                        elements: {
                            reference: x.anchor
                        },
                        middleware: [(0, W.cv)({
                            mainAxis: o + R,
                            alignmentAxis: s
                        }), f && (0, W.uY)({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: "partial" === m ? (0, W.dr)() : void 0,
                            ...N
                        }), f && (0, W.RR)({ ...N
                        }), (0, W.dp)({ ...N,
                            apply: ({
                                elements: e,
                                rects: t,
                                availableWidth: n,
                                availableHeight: r
                            }) => {
                                let {
                                    width: o,
                                    height: i
                                } = t.reference, a = e.floating.style;
                                a.setProperty("--radix-popper-available-width", `${n}px`), a.setProperty("--radix-popper-available-height", `${r}px`), a.setProperty("--radix-popper-anchor-width", `${o}px`), a.setProperty("--radix-popper-anchor-height", `${i}px`)
                            }
                        }), A && (0, W.x7)({
                            element: A,
                            padding: u
                        }), er({
                            arrowWidth: P,
                            arrowHeight: R
                        }), v && (0, W.Cp)({
                            strategy: "referenceHidden",
                            ...N
                        })]
                    }), [V, U] = eo(_), $ = y(b);
                    M(() => {
                        B && $ ? .()
                    }, [B, $]);
                    let q = H.arrow ? .x,
                        Y = H.arrow ? .y,
                        X = H.arrow ? .centerOffset !== 0,
                        [J, G] = i.useState();
                    return M(() => {
                        E && G(window.getComputedStyle(E).zIndex)
                    }, [E]), (0, l.jsx)("div", {
                        ref: k.setFloating,
                        "data-radix-popper-content-wrapper": "",
                        style: { ...I,
                            transform: B ? I.transform : "translate(0, -200%)",
                            minWidth: "max-content",
                            zIndex: J,
                            "--radix-popper-transform-origin": [H.transformOrigin ? .x, H.transformOrigin ? .y].join(" "),
                            ...H.hide ? .referenceHidden && {
                                visibility: "hidden",
                                pointerEvents: "none"
                            }
                        },
                        dir: e.dir,
                        children: (0, l.jsx)(Z, {
                            scope: n,
                            placedSide: V,
                            onArrowChange: T,
                            arrowX: q,
                            arrowY: Y,
                            shouldHideArrow: X,
                            children: (0, l.jsx)(g.div, {
                                "data-side": V,
                                "data-align": U,
                                ...w,
                                ref: C,
                                style: { ...w.style,
                                    animation: B ? void 0 : "none"
                                }
                            })
                        })
                    })
                });
            G.displayName = K;
            var Q = "PopperArrow",
                ee = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                },
                et = i.forwardRef(function(e, t) {
                    let {
                        __scopePopper: n,
                        ...r
                    } = e, o = J(Q, n), i = ee[o.placedSide];
                    return (0, l.jsx)("span", {
                        ref: o.onArrowChange,
                        style: {
                            position: "absolute",
                            left: o.arrowX,
                            top: o.arrowY,
                            [i]: 0,
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
                        children: (0, l.jsx)(B, { ...r,
                            ref: t,
                            style: { ...r.style,
                                display: "block"
                            }
                        })
                    })
                });

            function en(e) {
                return null !== e
            }
            et.displayName = Q;
            var er = e => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    let {
                        placement: n,
                        rects: r,
                        middlewareData: o
                    } = t, i = o.arrow ? .centerOffset !== 0, a = i ? 0 : e.arrowWidth, s = i ? 0 : e.arrowHeight, [u, c] = eo(n), l = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    }[c], f = (o.arrow ? .x ? ? 0) + a / 2, d = (o.arrow ? .y ? ? 0) + s / 2, p = "", m = "";
                    return "bottom" === u ? (p = i ? l : `${f}px`, m = `${-s}px`) : "top" === u ? (p = i ? l : `${f}px`, m = `${r.floating.height+s}px`) : "right" === u ? (p = `${-s}px`, m = i ? l : `${d}px`) : "left" === u && (p = `${r.floating.width+s}px`, m = i ? l : `${d}px`), {
                        data: {
                            x: p,
                            y: m
                        }
                    }
                }
            });

            function eo(e) {
                let [t, n = "center"] = e.split("-");
                return [t, n]
            }
            var ei = i.forwardRef((e, t) => {
                let {
                    container: n,
                    ...r
                } = e, [o, a] = i.useState(!1);
                M(() => a(!0), []);
                let s = n || o && globalThis ? .document ? .body;
                return s ? d.createPortal((0, l.jsx)(g.div, { ...r,
                    ref: t
                }), s) : null
            });
            ei.displayName = "Portal";
            var ea = e => {
                let t, n;
                let {
                    present: r,
                    children: o
                } = e, a = function(e) {
                    var t, n;
                    let [r, o] = i.useState(), a = i.useRef({}), s = i.useRef(e), u = i.useRef("none"), [c, l] = (t = e ? "mounted" : "unmounted", n = {
                        mounted: {
                            UNMOUNT: "unmounted",
                            ANIMATION_OUT: "unmountSuspended"
                        },
                        unmountSuspended: {
                            MOUNT: "mounted",
                            ANIMATION_END: "unmounted"
                        },
                        unmounted: {
                            MOUNT: "mounted"
                        }
                    }, i.useReducer((e, t) => n[e][t] ? ? e, t));
                    return i.useEffect(() => {
                        let e = es(a.current);
                        u.current = "mounted" === c ? e : "none"
                    }, [c]), M(() => {
                        let t = a.current,
                            n = s.current;
                        if (n !== e) {
                            let r = u.current,
                                o = es(t);
                            e ? l("MOUNT") : "none" === o || t ? .display === "none" ? l("UNMOUNT") : n && r !== o ? l("ANIMATION_OUT") : l("UNMOUNT"), s.current = e
                        }
                    }, [e, l]), M(() => {
                        if (r) {
                            let e = e => {
                                    let t = es(a.current).includes(e.animationName);
                                    e.target === r && t && d.flushSync(() => l("ANIMATION_END"))
                                },
                                t = e => {
                                    e.target === r && (u.current = es(a.current))
                                };
                            return r.addEventListener("animationstart", t), r.addEventListener("animationcancel", e), r.addEventListener("animationend", e), () => {
                                r.removeEventListener("animationstart", t), r.removeEventListener("animationcancel", e), r.removeEventListener("animationend", e)
                            }
                        }
                        l("ANIMATION_END")
                    }, [r, l]), {
                        isPresent: ["mounted", "unmountSuspended"].includes(c),
                        ref: i.useCallback(e => {
                            e && (a.current = getComputedStyle(e)), o(e)
                        }, [])
                    }
                }(r), s = "function" == typeof o ? o({
                    present: a.isPresent
                }) : i.Children.only(o), u = c(a.ref, (t = Object.getOwnPropertyDescriptor(s.props, "ref") ? .get) && "isReactWarning" in t && t.isReactWarning ? s.ref : (t = Object.getOwnPropertyDescriptor(s, "ref") ? .get) && "isReactWarning" in t && t.isReactWarning ? s.props.ref : s.props.ref || s.ref);
                return "function" == typeof o || a.isPresent ? i.cloneElement(s, {
                    ref: u
                }) : null
            };

            function es(e) {
                return e ? .animationName || "none"
            }
            ea.displayName = "Presence";
            var eu = n(49732),
                ec = n(22970),
                el = n(95346),
                ef = n(22442),
                ed = (0, n(64597)._)(),
                ep = function() {},
                em = i.forwardRef(function(e, t) {
                    var n = i.useRef(null),
                        r = i.useState({
                            onScrollCapture: ep,
                            onWheelCapture: ep,
                            onTouchMoveCapture: ep
                        }),
                        o = r[0],
                        a = r[1],
                        s = e.forwardProps,
                        u = e.children,
                        c = e.className,
                        l = e.removeScrollBar,
                        f = e.enabled,
                        d = e.shards,
                        p = e.sideCar,
                        m = e.noIsolation,
                        v = e.inert,
                        h = e.allowPinchZoom,
                        g = e.as,
                        y = e.gapMode,
                        b = (0, ec._T)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        w = (0, ef.q)([n, t]),
                        x = (0, ec.pi)((0, ec.pi)({}, b), o);
                    return i.createElement(i.Fragment, null, f && i.createElement(p, {
                        sideCar: ed,
                        removeScrollBar: l,
                        shards: d,
                        noIsolation: m,
                        inert: v,
                        setCallbacks: a,
                        allowPinchZoom: !!h,
                        lockRef: n,
                        gapMode: y
                    }), s ? i.cloneElement(i.Children.only(u), (0, ec.pi)((0, ec.pi)({}, x), {
                        ref: w
                    })) : i.createElement(void 0 === g ? "div" : g, (0, ec.pi)({}, x, {
                        className: c,
                        ref: w
                    }), u))
                });
            em.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, em.classNames = {
                fullWidth: el.zi,
                zeroRight: el.pF
            };
            var ev = n(57758),
                eh = n(181),
                eg = n(33225),
                ey = !1;
            if ("undefined" != typeof window) try {
                var eb = Object.defineProperty({}, "passive", {
                    get: function() {
                        return ey = !0, !0
                    }
                });
                window.addEventListener("test", eb, eb), window.removeEventListener("test", eb, eb)
            } catch (e) {
                ey = !1
            }
            var ew = !!ey && {
                    passive: !1
                },
                ex = function(e, t) {
                    var n = window.getComputedStyle(e);
                    return "hidden" !== n[t] && !(n.overflowY === n.overflowX && "TEXTAREA" !== e.tagName && "visible" === n[t])
                },
                eE = function(e, t) {
                    var n = t.ownerDocument,
                        r = t;
                    do {
                        if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), eO(e, r)) {
                            var o = eC(e, r);
                            if (o[1] > o[2]) return !0
                        }
                        r = r.parentNode
                    } while (r && r !== n.body);
                    return !1
                },
                eO = function(e, t) {
                    return "v" === e ? ex(t, "overflowY") : ex(t, "overflowX")
                },
                eC = function(e, t) {
                    return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
                },
                eA = function(e, t, n, r, o) {
                    var i, a = (i = window.getComputedStyle(t).direction, "h" === e && "rtl" === i ? -1 : 1),
                        s = a * r,
                        u = n.target,
                        c = t.contains(u),
                        l = !1,
                        f = s > 0,
                        d = 0,
                        p = 0;
                    do {
                        var m = eC(e, u),
                            v = m[0],
                            h = m[1] - m[2] - a * v;
                        (v || h) && eO(e, u) && (d += h, p += v), u instanceof ShadowRoot ? u = u.host : u = u.parentNode
                    } while (!c && u !== document.body || c && (t.contains(u) || t === u));
                    return f && (o && 1 > Math.abs(d) || !o && s > d) ? l = !0 : !f && (o && 1 > Math.abs(p) || !o && -s > p) && (l = !0), l
                },
                eT = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                ej = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                eP = function(e) {
                    return e && "current" in e ? e.current : e
                },
                eR = 0,
                eL = [],
                eD = (0, ev.L)(ed, function(e) {
                    var t = i.useRef([]),
                        n = i.useRef([0, 0]),
                        r = i.useRef(),
                        o = i.useState(eR++)[0],
                        a = i.useState(eg.Ws)[0],
                        s = i.useRef(e);
                    i.useEffect(function() {
                        s.current = e
                    }, [e]), i.useEffect(function() {
                        if (e.inert) {
                            document.body.classList.add("block-interactivity-".concat(o));
                            var t = (0, ec.ev)([e.lockRef.current], (e.shards || []).map(eP), !0).filter(Boolean);
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
                    var u = i.useCallback(function(e, t) {
                            if ("touches" in e && 2 === e.touches.length) return !s.current.allowPinchZoom;
                            var o, i = eT(e),
                                a = n.current,
                                u = "deltaX" in e ? e.deltaX : a[0] - i[0],
                                c = "deltaY" in e ? e.deltaY : a[1] - i[1],
                                l = e.target,
                                f = Math.abs(u) > Math.abs(c) ? "h" : "v";
                            if ("touches" in e && "h" === f && "range" === l.type) return !1;
                            var d = eE(f, l);
                            if (!d) return !0;
                            if (d ? o = f : (o = "v" === f ? "h" : "v", d = eE(f, l)), !d) return !1;
                            if (!r.current && "changedTouches" in e && (u || c) && (r.current = o), !o) return !0;
                            var p = r.current || o;
                            return eA(p, t, e, "h" === p ? u : c, !0)
                        }, []),
                        c = i.useCallback(function(e) {
                            if (eL.length && eL[eL.length - 1] === a) {
                                var n = "deltaY" in e ? ej(e) : eT(e),
                                    r = t.current.filter(function(t) {
                                        var r;
                                        return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (r = t.delta)[0] === n[0] && r[1] === n[1]
                                    })[0];
                                if (r && r.should) {
                                    e.cancelable && e.preventDefault();
                                    return
                                }
                                if (!r) {
                                    var o = (s.current.shards || []).map(eP).filter(Boolean).filter(function(t) {
                                        return t.contains(e.target)
                                    });
                                    (o.length > 0 ? u(e, o[0]) : !s.current.noIsolation) && e.cancelable && e.preventDefault()
                                }
                            }
                        }, []),
                        l = i.useCallback(function(e, n, r, o) {
                            var i = {
                                name: e,
                                delta: n,
                                target: r,
                                should: o,
                                shadowParent: function(e) {
                                    for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
                                    return t
                                }(r)
                            };
                            t.current.push(i), setTimeout(function() {
                                t.current = t.current.filter(function(e) {
                                    return e !== i
                                })
                            }, 1)
                        }, []),
                        f = i.useCallback(function(e) {
                            n.current = eT(e), r.current = void 0
                        }, []),
                        d = i.useCallback(function(t) {
                            l(t.type, ej(t), t.target, u(t, e.lockRef.current))
                        }, []),
                        p = i.useCallback(function(t) {
                            l(t.type, eT(t), t.target, u(t, e.lockRef.current))
                        }, []);
                    i.useEffect(function() {
                        return eL.push(a), e.setCallbacks({
                                onScrollCapture: d,
                                onWheelCapture: d,
                                onTouchMoveCapture: p
                            }), document.addEventListener("wheel", c, ew), document.addEventListener("touchmove", c, ew), document.addEventListener("touchstart", f, ew),
                            function() {
                                eL = eL.filter(function(e) {
                                    return e !== a
                                }), document.removeEventListener("wheel", c, ew), document.removeEventListener("touchmove", c, ew), document.removeEventListener("touchstart", f, ew)
                            }
                    }, []);
                    var m = e.removeScrollBar,
                        v = e.inert;
                    return i.createElement(i.Fragment, null, v ? i.createElement(a, {
                        styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
                    }) : null, m ? i.createElement(eh.jp, {
                        gapMode: e.gapMode
                    }) : null)
                }),
                eS = i.forwardRef(function(e, t) {
                    return i.createElement(em, (0, ec.pi)({}, e, {
                        ref: t,
                        sideCar: eD
                    }))
                });
            eS.classNames = em.classNames;
            var eN = "Popover",
                [ek, eM] = f(eN, [U]),
                eI = U(),
                [e_, eW] = ek(eN),
                eF = e => {
                    let {
                        __scopePopover: t,
                        children: n,
                        open: r,
                        defaultOpen: o,
                        onOpenChange: a,
                        modal: s = !1
                    } = e, u = eI(t), c = i.useRef(null), [f, d] = i.useState(!1), [p = !1, m] = function({
                        prop: e,
                        defaultProp: t,
                        onChange: n = () => {}
                    }) {
                        let [r, o] = function({
                            defaultProp: e,
                            onChange: t
                        }) {
                            let n = i.useState(e),
                                [r] = n,
                                o = i.useRef(r),
                                a = y(t);
                            return i.useEffect(() => {
                                o.current !== r && (a(r), o.current = r)
                            }, [r, o, a]), n
                        }({
                            defaultProp: t,
                            onChange: n
                        }), a = void 0 !== e, s = a ? e : r, u = y(n);
                        return [s, i.useCallback(t => {
                            if (a) {
                                let n = "function" == typeof t ? t(e) : t;
                                n !== e && u(n)
                            } else o(t)
                        }, [a, e, o, u])]
                    }({
                        prop: r,
                        defaultProp: o,
                        onChange: a
                    });
                    return (0, l.jsx)(q, { ...u,
                        children: (0, l.jsx)(e_, {
                            scope: t,
                            contentId: function(e) {
                                let [t, n] = i.useState(I());
                                return M(() => {
                                    n(e => e ? ? String(_++))
                                }, [void 0]), t ? `radix-${t}` : ""
                            }(),
                            triggerRef: c,
                            open: p,
                            onOpenChange: m,
                            onOpenToggle: i.useCallback(() => m(e => !e), [m]),
                            hasCustomAnchor: f,
                            onCustomAnchorAdd: i.useCallback(() => d(!0), []),
                            onCustomAnchorRemove: i.useCallback(() => d(!1), []),
                            modal: s,
                            children: n
                        })
                    })
                };
            eF.displayName = eN;
            var eB = "PopoverAnchor",
                eH = i.forwardRef((e, t) => {
                    let {
                        __scopePopover: n,
                        ...r
                    } = e, o = eW(eB, n), a = eI(n), {
                        onCustomAnchorAdd: s,
                        onCustomAnchorRemove: u
                    } = o;
                    return i.useEffect(() => (s(), () => u()), [s, u]), (0, l.jsx)(X, { ...a,
                        ...r,
                        ref: t
                    })
                });
            eH.displayName = eB;
            var eV = "PopoverTrigger",
                eU = i.forwardRef((e, t) => {
                    let {
                        __scopePopover: n,
                        ...r
                    } = e, o = eW(eV, n), i = eI(n), a = c(t, o.triggerRef), u = (0, l.jsx)(g.button, {
                        type: "button",
                        "aria-haspopup": "dialog",
                        "aria-expanded": o.open,
                        "aria-controls": o.contentId,
                        "data-state": e2(o.open),
                        ...r,
                        ref: a,
                        onClick: s(e.onClick, o.onOpenToggle)
                    });
                    return o.hasCustomAnchor ? u : (0, l.jsx)(X, {
                        asChild: !0,
                        ...i,
                        children: u
                    })
                });
            eU.displayName = eV;
            var e$ = "PopoverPortal",
                [ez, eq] = ek(e$, {
                    forceMount: void 0
                }),
                eY = e => {
                    let {
                        __scopePopover: t,
                        forceMount: n,
                        children: r,
                        container: o
                    } = e, i = eW(e$, t);
                    return (0, l.jsx)(ez, {
                        scope: t,
                        forceMount: n,
                        children: (0, l.jsx)(ea, {
                            present: n || i.open,
                            children: (0, l.jsx)(ei, {
                                asChild: !0,
                                container: o,
                                children: r
                            })
                        })
                    })
                };
            eY.displayName = e$;
            var eX = "PopoverContent",
                eK = i.forwardRef((e, t) => {
                    let n = eq(eX, e.__scopePopover),
                        {
                            forceMount: r = n.forceMount,
                            ...o
                        } = e,
                        i = eW(eX, e.__scopePopover);
                    return (0, l.jsx)(ea, {
                        present: r || i.open,
                        children: i.modal ? (0, l.jsx)(eZ, { ...o,
                            ref: t
                        }) : (0, l.jsx)(eJ, { ...o,
                            ref: t
                        })
                    })
                });
            eK.displayName = eX;
            var eZ = i.forwardRef((e, t) => {
                    let n = eW(eX, e.__scopePopover),
                        r = i.useRef(null),
                        o = c(t, r),
                        a = i.useRef(!1);
                    return i.useEffect(() => {
                        let e = r.current;
                        if (e) return (0, eu.Ry)(e)
                    }, []), (0, l.jsx)(eS, {
                        as: p,
                        allowPinchZoom: !0,
                        children: (0, l.jsx)(eG, { ...e,
                            ref: o,
                            trapFocus: n.open,
                            disableOutsidePointerEvents: !0,
                            onCloseAutoFocus: s(e.onCloseAutoFocus, e => {
                                e.preventDefault(), a.current || n.triggerRef.current ? .focus()
                            }),
                            onPointerDownOutside: s(e.onPointerDownOutside, e => {
                                let t = e.detail.originalEvent,
                                    n = 0 === t.button && !0 === t.ctrlKey,
                                    r = 2 === t.button || n;
                                a.current = r
                            }, {
                                checkForDefaultPrevented: !1
                            }),
                            onFocusOutside: s(e.onFocusOutside, e => e.preventDefault(), {
                                checkForDefaultPrevented: !1
                            })
                        })
                    })
                }),
                eJ = i.forwardRef((e, t) => {
                    let n = eW(eX, e.__scopePopover),
                        r = i.useRef(!1),
                        o = i.useRef(!1);
                    return (0, l.jsx)(eG, { ...e,
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: t => {
                            e.onCloseAutoFocus ? .(t), t.defaultPrevented || (r.current || n.triggerRef.current ? .focus(), t.preventDefault()), r.current = !1, o.current = !1
                        },
                        onInteractOutside: t => {
                            e.onInteractOutside ? .(t), t.defaultPrevented || (r.current = !0, "pointerdown" !== t.detail.originalEvent.type || (o.current = !0));
                            let i = t.target;
                            n.triggerRef.current ? .contains(i) && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
                        }
                    })
                }),
                eG = i.forwardRef((e, t) => {
                    let {
                        __scopePopover: n,
                        trapFocus: r,
                        onOpenAutoFocus: o,
                        onCloseAutoFocus: a,
                        disableOutsidePointerEvents: s,
                        onEscapeKeyDown: u,
                        onPointerDownOutside: c,
                        onFocusOutside: f,
                        onInteractOutside: d,
                        ...p
                    } = e, m = eW(eX, n), v = eI(n);
                    return i.useEffect(() => {
                        let e = document.querySelectorAll("[data-radix-focus-guard]");
                        return document.body.insertAdjacentElement("afterbegin", e[0] ? ? A()), document.body.insertAdjacentElement("beforeend", e[1] ? ? A()), C++, () => {
                            1 === C && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), C--
                        }
                    }, []), (0, l.jsx)(R, {
                        asChild: !0,
                        loop: !0,
                        trapped: r,
                        onMountAutoFocus: o,
                        onUnmountAutoFocus: a,
                        children: (0, l.jsx)(x, {
                            asChild: !0,
                            disableOutsidePointerEvents: s,
                            onInteractOutside: d,
                            onEscapeKeyDown: u,
                            onPointerDownOutside: c,
                            onFocusOutside: f,
                            onDismiss: () => m.onOpenChange(!1),
                            children: (0, l.jsx)(G, {
                                "data-state": e2(m.open),
                                role: "dialog",
                                id: m.contentId,
                                ...v,
                                ...p,
                                ref: t,
                                style: { ...p.style,
                                    "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                                    "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                                    "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                                    "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                                    "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                                }
                            })
                        })
                    })
                }),
                eQ = "PopoverClose",
                e0 = i.forwardRef((e, t) => {
                    let {
                        __scopePopover: n,
                        ...r
                    } = e, o = eW(eQ, n);
                    return (0, l.jsx)(g.button, {
                        type: "button",
                        ...r,
                        ref: t,
                        onClick: s(e.onClick, () => o.onOpenChange(!1))
                    })
                });
            e0.displayName = eQ;
            var e1 = i.forwardRef((e, t) => {
                let {
                    __scopePopover: n,
                    ...r
                } = e, o = eI(n);
                return (0, l.jsx)(et, { ...o,
                    ...r,
                    ref: t
                })
            });

            function e2(e) {
                return e ? "open" : "closed"
            }
            e1.displayName = "PopoverArrow";
            var e3 = eF,
                e7 = eH,
                e5 = eU,
                e4 = eY,
                e9 = eK,
                e8 = e0,
                e6 = e1
        }
    }
]);