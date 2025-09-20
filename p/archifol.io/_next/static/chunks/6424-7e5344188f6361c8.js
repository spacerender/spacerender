try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d48d70c2-cb7a-4de0-893c-85a414fbc9f2", e._sentryDebugIdIdentifier = "sentry-dbid-d48d70c2-cb7a-4de0-893c-85a414fbc9f2")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6424], {
        49732: function(e, t, n) {
            n.d(t, {
                Ry: function() {
                    return c
                }
            });
            var r = new WeakMap,
                o = new WeakMap,
                i = {},
                l = 0,
                u = function(e) {
                    return e && (e.host || u(e.parentNode))
                },
                a = function(e, t, n, a) {
                    var c = (Array.isArray(e) ? e : [e]).map(function(e) {
                        if (t.contains(e)) return e;
                        var n = u(e);
                        return n && t.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null)
                    }).filter(function(e) {
                        return !!e
                    });
                    i[n] || (i[n] = new WeakMap);
                    var f = i[n],
                        s = [],
                        d = new Set,
                        p = new Set(c),
                        h = function(e) {
                            !e || d.has(e) || (d.add(e), h(e.parentNode))
                        };
                    c.forEach(h);
                    var m = function(e) {
                        !e || p.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                            if (d.has(e)) m(e);
                            else try {
                                var t = e.getAttribute(a),
                                    i = null !== t && "false" !== t,
                                    l = (r.get(e) || 0) + 1,
                                    u = (f.get(e) || 0) + 1;
                                r.set(e, l), f.set(e, u), s.push(e), 1 === l && i && o.set(e, !0), 1 === u && e.setAttribute(n, "true"), i || e.setAttribute(a, "true")
                            } catch (t) {
                                console.error("aria-hidden: cannot operate on ", e, t)
                            }
                        })
                    };
                    return m(t), d.clear(), l++,
                        function() {
                            s.forEach(function(e) {
                                var t = r.get(e) - 1,
                                    i = f.get(e) - 1;
                                r.set(e, t), f.set(e, i), t || (o.has(e) || e.removeAttribute(a), o.delete(e)), i || e.removeAttribute(n)
                            }), --l || (r = new WeakMap, r = new WeakMap, o = new WeakMap, i = {})
                        }
                },
                c = function(e, t, n) {
                    void 0 === n && (n = "data-aria-hidden");
                    var r = Array.from(Array.isArray(e) ? e : [e]),
                        o = t || ("undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
                    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), a(r, o, n, "aria-hidden")) : function() {
                        return null
                    }
                }
        },
        95346: function(e, t, n) {
            n.d(t, {
                Av: function() {
                    return l
                },
                pF: function() {
                    return r
                },
                xv: function() {
                    return i
                },
                zi: function() {
                    return o
                }
            });
            var r = "right-scroll-bar-position",
                o = "width-before-scroll-bar",
                i = "with-scroll-bars-hidden",
                l = "--removed-body-scroll-bar-size"
        },
        181: function(e, t, n) {
            n.d(t, {
                jp: function() {
                    return m
                }
            });
            var r = n(2784),
                o = n(33225),
                i = n(95346),
                l = {
                    left: 0,
                    top: 0,
                    right: 0,
                    gap: 0
                },
                u = function(e) {
                    return parseInt(e || "", 10) || 0
                },
                a = function(e) {
                    var t = window.getComputedStyle(document.body),
                        n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                        r = t["padding" === e ? "paddingTop" : "marginTop"],
                        o = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [u(n), u(r), u(o)]
                },
                c = function(e) {
                    if (void 0 === e && (e = "margin"), "undefined" == typeof window) return l;
                    var t = a(e),
                        n = document.documentElement.clientWidth,
                        r = window.innerWidth;
                    return {
                        left: t[0],
                        top: t[1],
                        right: t[2],
                        gap: Math.max(0, r - n + t[2] - t[0])
                    }
                },
                f = (0, o.Ws)(),
                s = "data-scroll-locked",
                d = function(e, t, n, r) {
                    var o = e.left,
                        l = e.top,
                        u = e.right,
                        a = e.gap;
                    return void 0 === n && (n = "margin"), "\n  .".concat(i.xv, " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(a, "px ").concat(r, ";\n  }\n  body[").concat(s, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(l, "px;\n    padding-right: ").concat(u, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(a, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(i.pF, " {\n    right: ").concat(a, "px ").concat(r, ";\n  }\n  \n  .").concat(i.zi, " {\n    margin-right: ").concat(a, "px ").concat(r, ";\n  }\n  \n  .").concat(i.pF, " .").concat(i.pF, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(i.zi, " .").concat(i.zi, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(s, "] {\n    ").concat(i.Av, ": ").concat(a, "px;\n  }\n")
                },
                p = function() {
                    var e = parseInt(document.body.getAttribute(s) || "0", 10);
                    return isFinite(e) ? e : 0
                },
                h = function() {
                    r.useEffect(function() {
                        return document.body.setAttribute(s, (p() + 1).toString()),
                            function() {
                                var e = p() - 1;
                                e <= 0 ? document.body.removeAttribute(s) : document.body.setAttribute(s, e.toString())
                            }
                    }, [])
                },
                m = function(e) {
                    var t = e.noRelative,
                        n = e.noImportant,
                        o = e.gapMode,
                        i = void 0 === o ? "margin" : o;
                    h();
                    var l = r.useMemo(function() {
                        return c(i)
                    }, [i]);
                    return r.createElement(f, {
                        styles: d(l, !t, i, n ? "" : "!important")
                    })
                }
        },
        33225: function(e, t, n) {
            n.d(t, {
                Ws: function() {
                    return u
                }
            });
            var r, o = n(2784),
                i = function() {
                    var e = 0,
                        t = null;
                    return {
                        add: function(o) {
                            if (0 == e && (t = function() {
                                    if (!document) return null;
                                    var e = document.createElement("style");
                                    e.type = "text/css";
                                    var t = r || n.nc;
                                    return t && e.setAttribute("nonce", t), e
                                }())) {
                                var i, l;
                                (i = t).styleSheet ? i.styleSheet.cssText = o : i.appendChild(document.createTextNode(o)), l = t, (document.head || document.getElementsByTagName("head")[0]).appendChild(l)
                            }
                            e++
                        },
                        remove: function() {
                            --e || !t || (t.parentNode && t.parentNode.removeChild(t), t = null)
                        }
                    }
                },
                l = function() {
                    var e = i();
                    return function(t, n) {
                        o.useEffect(function() {
                            return e.add(t),
                                function() {
                                    e.remove()
                                }
                        }, [t && n])
                    }
                },
                u = function() {
                    var e = l();
                    return function(t) {
                        return e(t.styles, t.dynamic), null
                    }
                }
        },
        22442: function(e, t, n) {
            n.d(t, {
                q: function() {
                    return u
                }
            });
            var r = n(2784);

            function o(e, t) {
                return "function" == typeof e ? e(t) : e && (e.current = t), e
            }
            var i = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
                l = new WeakMap;

            function u(e, t) {
                var n, u, a, c = (n = t || null, u = function(t) {
                    return e.forEach(function(e) {
                        return o(e, t)
                    })
                }, (a = (0, r.useState)(function() {
                    return {
                        value: n,
                        callback: u,
                        facade: {
                            get current() {
                                return a.value
                            },
                            set current(value) {
                                var e = a.value;
                                e !== value && (a.value = value, a.callback(value, e))
                            }
                        }
                    }
                })[0]).callback = u, a.facade);
                return i(function() {
                    var t = l.get(c);
                    if (t) {
                        var n = new Set(t),
                            r = new Set(e),
                            i = c.current;
                        n.forEach(function(e) {
                            r.has(e) || o(e, null)
                        }), r.forEach(function(e) {
                            n.has(e) || o(e, i)
                        })
                    }
                    l.set(c, e)
                }, [e]), c
            }
        },
        57758: function(e, t, n) {
            n.d(t, {
                L: function() {
                    return l
                }
            });
            var r = n(22970),
                o = n(2784),
                i = function(e) {
                    var t = e.sideCar,
                        n = (0, r._T)(e, ["sideCar"]);
                    if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
                    var i = t.read();
                    if (!i) throw Error("Sidecar medium not found");
                    return o.createElement(i, (0, r.pi)({}, n))
                };

            function l(e, t) {
                return e.useMedium(t), i
            }
            i.isSideCarExport = !0
        },
        64597: function(e, t, n) {
            n.d(t, {
                _: function() {
                    return i
                }
            });
            var r = n(22970);

            function o(e) {
                return e
            }

            function i(e) {
                void 0 === e && (e = {});
                var t, n, i, l = (void 0 === t && (t = o), n = [], i = !1, {
                    read: function() {
                        if (i) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                        return n.length ? n[n.length - 1] : null
                    },
                    useMedium: function(e) {
                        var r = t(e, i);
                        return n.push(r),
                            function() {
                                n = n.filter(function(e) {
                                    return e !== r
                                })
                            }
                    },
                    assignSyncMedium: function(e) {
                        for (i = !0; n.length;) {
                            var t = n;
                            n = [], t.forEach(e)
                        }
                        n = {
                            push: function(t) {
                                return e(t)
                            },
                            filter: function() {
                                return n
                            }
                        }
                    },
                    assignMedium: function(e) {
                        i = !0;
                        var t = [];
                        if (n.length) {
                            var r = n;
                            n = [], r.forEach(e), t = n
                        }
                        var o = function() {
                                var n = t;
                                t = [], n.forEach(e)
                            },
                            l = function() {
                                return Promise.resolve().then(o)
                            };
                        l(), n = {
                            push: function(e) {
                                t.push(e), l()
                            },
                            filter: function(e) {
                                return t = t.filter(e), n
                            }
                        }
                    }
                });
                return l.options = (0, r.pi)({
                    async: !0,
                    ssr: !1
                }, e), l
            }
        },
        84061: function(e, t, n) {
            n.d(t, {
                Cp: function() {
                    return s
                },
                RR: function() {
                    return a
                },
                cv: function() {
                    return p
                },
                dp: function() {
                    return v
                },
                dr: function() {
                    return m
                },
                oo: function() {
                    return i
                },
                uY: function() {
                    return h
                },
                x7: function() {
                    return u
                }
            });
            var r = n(4029);

            function o(e, t, n) {
                let o, {
                        reference: i,
                        floating: l
                    } = e,
                    u = (0, r.Qq)(t),
                    a = (0, r.Wh)(t),
                    c = (0, r.I4)(a),
                    f = (0, r.k3)(t),
                    s = "y" === u,
                    d = i.x + i.width / 2 - l.width / 2,
                    p = i.y + i.height / 2 - l.height / 2,
                    h = i[c] / 2 - l[c] / 2;
                switch (f) {
                    case "top":
                        o = {
                            x: d,
                            y: i.y - l.height
                        };
                        break;
                    case "bottom":
                        o = {
                            x: d,
                            y: i.y + i.height
                        };
                        break;
                    case "right":
                        o = {
                            x: i.x + i.width,
                            y: p
                        };
                        break;
                    case "left":
                        o = {
                            x: i.x - l.width,
                            y: p
                        };
                        break;
                    default:
                        o = {
                            x: i.x,
                            y: i.y
                        }
                }
                switch ((0, r.hp)(t)) {
                    case "start":
                        o[a] -= h * (n && s ? -1 : 1);
                        break;
                    case "end":
                        o[a] += h * (n && s ? -1 : 1)
                }
                return o
            }
            let i = async (e, t, n) => {
                let {
                    placement: r = "bottom",
                    strategy: i = "absolute",
                    middleware: l = [],
                    platform: u
                } = n, a = l.filter(Boolean), c = await (null == u.isRTL ? void 0 : u.isRTL(t)), f = await u.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: i
                }), {
                    x: s,
                    y: d
                } = o(f, r, c), p = r, h = {}, m = 0;
                for (let n = 0; n < a.length; n++) {
                    let {
                        name: l,
                        fn: v
                    } = a[n], {
                        x: g,
                        y: y,
                        data: b,
                        reset: w
                    } = await v({
                        x: s,
                        y: d,
                        initialPlacement: r,
                        placement: p,
                        strategy: i,
                        middlewareData: h,
                        rects: f,
                        platform: u,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    if (s = null != g ? g : s, d = null != y ? y : d, h = { ...h,
                            [l]: { ...h[l],
                                ...b
                            }
                        }, w && m <= 50) {
                        m++, "object" == typeof w && (w.placement && (p = w.placement), w.rects && (f = !0 === w.rects ? await u.getElementRects({
                            reference: e,
                            floating: t,
                            strategy: i
                        }) : w.rects), {
                            x: s,
                            y: d
                        } = o(f, p, c)), n = -1;
                        continue
                    }
                }
                return {
                    x: s,
                    y: d,
                    placement: p,
                    strategy: i,
                    middlewareData: h
                }
            };
            async function l(e, t) {
                var n;
                void 0 === t && (t = {});
                let {
                    x: o,
                    y: i,
                    platform: l,
                    rects: u,
                    elements: a,
                    strategy: c
                } = e, {
                    boundary: f = "clippingAncestors",
                    rootBoundary: s = "viewport",
                    elementContext: d = "floating",
                    altBoundary: p = !1,
                    padding: h = 0
                } = (0, r.ku)(t, e), m = (0, r.yd)(h), v = a[p ? "floating" === d ? "reference" : "floating" : d], g = (0, r.JB)(await l.getClippingRect({
                    element: null == (n = await (null == l.isElement ? void 0 : l.isElement(v))) || n ? v : v.contextElement || await (null == l.getDocumentElement ? void 0 : l.getDocumentElement(a.floating)),
                    boundary: f,
                    rootBoundary: s,
                    strategy: c
                })), y = "floating" === d ? { ...u.floating,
                    x: o,
                    y: i
                } : u.reference, b = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(a.floating)), w = await (null == l.isElement ? void 0 : l.isElement(b)) && await (null == l.getScale ? void 0 : l.getScale(b)) || {
                    x: 1,
                    y: 1
                }, x = (0, r.JB)(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
                    rect: y,
                    offsetParent: b,
                    strategy: c
                }) : y);
                return {
                    top: (g.top - x.top + m.top) / w.y,
                    bottom: (x.bottom - g.bottom + m.bottom) / w.y,
                    left: (g.left - x.left + m.left) / w.x,
                    right: (x.right - g.right + m.right) / w.x
                }
            }
            let u = e => ({
                    name: "arrow",
                    options: e,
                    async fn(t) {
                        let {
                            x: n,
                            y: o,
                            placement: i,
                            rects: l,
                            platform: u,
                            elements: a,
                            middlewareData: c
                        } = t, {
                            element: f,
                            padding: s = 0
                        } = (0, r.ku)(e, t) || {};
                        if (null == f) return {};
                        let d = (0, r.yd)(s),
                            p = {
                                x: n,
                                y: o
                            },
                            h = (0, r.Wh)(i),
                            m = (0, r.I4)(h),
                            v = await u.getDimensions(f),
                            g = "y" === h,
                            y = g ? "clientHeight" : "clientWidth",
                            b = l.reference[m] + l.reference[h] - p[h] - l.floating[m],
                            w = p[h] - l.reference[h],
                            x = await (null == u.getOffsetParent ? void 0 : u.getOffsetParent(f)),
                            E = x ? x[y] : 0;
                        E && await (null == u.isElement ? void 0 : u.isElement(x)) || (E = a.floating[y] || l.floating[m]);
                        let C = E / 2 - v[m] / 2 - 1,
                            T = (0, r.VV)(d[g ? "top" : "left"], C),
                            R = (0, r.VV)(d[g ? "bottom" : "right"], C),
                            A = E - v[m] - R,
                            O = E / 2 - v[m] / 2 + (b / 2 - w / 2),
                            P = (0, r.uZ)(T, O, A),
                            k = !c.arrow && null != (0, r.hp)(i) && O != P && l.reference[m] / 2 - (O < T ? T : R) - v[m] / 2 < 0,
                            S = k ? O < T ? O - T : O - A : 0;
                        return {
                            [h]: p[h] + S,
                            data: {
                                [h]: P,
                                centerOffset: O - P - S,
                                ...k && {
                                    alignmentOffset: S
                                }
                            },
                            reset: k
                        }
                    }
                }),
                a = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "flip",
                        options: e,
                        async fn(t) {
                            var n, o, i, u, a;
                            let {
                                placement: c,
                                middlewareData: f,
                                rects: s,
                                initialPlacement: d,
                                platform: p,
                                elements: h
                            } = t, {
                                mainAxis: m = !0,
                                crossAxis: v = !0,
                                fallbackPlacements: g,
                                fallbackStrategy: y = "bestFit",
                                fallbackAxisSideDirection: b = "none",
                                flipAlignment: w = !0,
                                ...x
                            } = (0, r.ku)(e, t);
                            if (null != (n = f.arrow) && n.alignmentOffset) return {};
                            let E = (0, r.k3)(c),
                                C = (0, r.k3)(d) === d,
                                T = await (null == p.isRTL ? void 0 : p.isRTL(h.floating)),
                                R = g || (C || !w ? [(0, r.pw)(d)] : (0, r.gy)(d));
                            g || "none" === b || R.push(...(0, r.KX)(d, w, b, T));
                            let A = [d, ...R],
                                O = await l(t, x),
                                P = [],
                                k = (null == (o = f.flip) ? void 0 : o.overflows) || [];
                            if (m && P.push(O[E]), v) {
                                let e = (0, r.i8)(c, s, T);
                                P.push(O[e[0]], O[e[1]])
                            }
                            if (k = [...k, {
                                    placement: c,
                                    overflows: P
                                }], !P.every(e => e <= 0)) {
                                let e = ((null == (i = f.flip) ? void 0 : i.index) || 0) + 1,
                                    t = A[e];
                                if (t) return {
                                    data: {
                                        index: e,
                                        overflows: k
                                    },
                                    reset: {
                                        placement: t
                                    }
                                };
                                let n = null == (u = k.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : u.placement;
                                if (!n) switch (y) {
                                    case "bestFit":
                                        {
                                            let e = null == (a = k.map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : a[0];e && (n = e);
                                            break
                                        }
                                    case "initialPlacement":
                                        n = d
                                }
                                if (c !== n) return {
                                    reset: {
                                        placement: n
                                    }
                                }
                            }
                            return {}
                        }
                    }
                };

            function c(e, t) {
                return {
                    top: e.top - t.height,
                    right: e.right - t.width,
                    bottom: e.bottom - t.height,
                    left: e.left - t.width
                }
            }

            function f(e) {
                return r.mA.some(t => e[t] >= 0)
            }
            let s = function(e) {
                return void 0 === e && (e = {}), {
                    name: "hide",
                    options: e,
                    async fn(t) {
                        let {
                            rects: n
                        } = t, {
                            strategy: o = "referenceHidden",
                            ...i
                        } = (0, r.ku)(e, t);
                        switch (o) {
                            case "referenceHidden":
                                {
                                    let e = c(await l(t, { ...i,
                                        elementContext: "reference"
                                    }), n.reference);
                                    return {
                                        data: {
                                            referenceHiddenOffsets: e,
                                            referenceHidden: f(e)
                                        }
                                    }
                                }
                            case "escaped":
                                {
                                    let e = c(await l(t, { ...i,
                                        altBoundary: !0
                                    }), n.floating);
                                    return {
                                        data: {
                                            escapedOffsets: e,
                                            escaped: f(e)
                                        }
                                    }
                                }
                            default:
                                return {}
                        }
                    }
                }
            };
            async function d(e, t) {
                let {
                    placement: n,
                    platform: o,
                    elements: i
                } = e, l = await (null == o.isRTL ? void 0 : o.isRTL(i.floating)), u = (0, r.k3)(n), a = (0, r.hp)(n), c = "y" === (0, r.Qq)(n), f = ["left", "top"].includes(u) ? -1 : 1, s = l && c ? -1 : 1, d = (0, r.ku)(t, e), {
                    mainAxis: p,
                    crossAxis: h,
                    alignmentAxis: m
                } = "number" == typeof d ? {
                    mainAxis: d,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: 0,
                    crossAxis: 0,
                    alignmentAxis: null,
                    ...d
                };
                return a && "number" == typeof m && (h = "end" === a ? -1 * m : m), c ? {
                    x: h * s,
                    y: p * f
                } : {
                    x: p * f,
                    y: h * s
                }
            }
            let p = function(e) {
                    return void 0 === e && (e = 0), {
                        name: "offset",
                        options: e,
                        async fn(t) {
                            let {
                                x: n,
                                y: r
                            } = t, o = await d(t, e);
                            return {
                                x: n + o.x,
                                y: r + o.y,
                                data: o
                            }
                        }
                    }
                },
                h = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "shift",
                        options: e,
                        async fn(t) {
                            let {
                                x: n,
                                y: o,
                                placement: i
                            } = t, {
                                mainAxis: u = !0,
                                crossAxis: a = !1,
                                limiter: c = {
                                    fn: e => {
                                        let {
                                            x: t,
                                            y: n
                                        } = e;
                                        return {
                                            x: t,
                                            y: n
                                        }
                                    }
                                },
                                ...f
                            } = (0, r.ku)(e, t), s = {
                                x: n,
                                y: o
                            }, d = await l(t, f), p = (0, r.Qq)((0, r.k3)(i)), h = (0, r.Rn)(p), m = s[h], v = s[p];
                            if (u) {
                                let e = "y" === h ? "top" : "left",
                                    t = "y" === h ? "bottom" : "right",
                                    n = m + d[e],
                                    o = m - d[t];
                                m = (0, r.uZ)(n, m, o)
                            }
                            if (a) {
                                let e = "y" === p ? "top" : "left",
                                    t = "y" === p ? "bottom" : "right",
                                    n = v + d[e],
                                    o = v - d[t];
                                v = (0, r.uZ)(n, v, o)
                            }
                            let g = c.fn({ ...t,
                                [h]: m,
                                [p]: v
                            });
                            return { ...g,
                                data: {
                                    x: g.x - n,
                                    y: g.y - o
                                }
                            }
                        }
                    }
                },
                m = function(e) {
                    return void 0 === e && (e = {}), {
                        options: e,
                        fn(t) {
                            let {
                                x: n,
                                y: o,
                                placement: i,
                                rects: l,
                                middlewareData: u
                            } = t, {
                                offset: a = 0,
                                mainAxis: c = !0,
                                crossAxis: f = !0
                            } = (0, r.ku)(e, t), s = {
                                x: n,
                                y: o
                            }, d = (0, r.Qq)(i), p = (0, r.Rn)(d), h = s[p], m = s[d], v = (0, r.ku)(a, t), g = "number" == typeof v ? {
                                mainAxis: v,
                                crossAxis: 0
                            } : {
                                mainAxis: 0,
                                crossAxis: 0,
                                ...v
                            };
                            if (c) {
                                let e = "y" === p ? "height" : "width",
                                    t = l.reference[p] - l.floating[e] + g.mainAxis,
                                    n = l.reference[p] + l.reference[e] - g.mainAxis;
                                h < t ? h = t : h > n && (h = n)
                            }
                            if (f) {
                                var y, b;
                                let e = "y" === p ? "width" : "height",
                                    t = ["top", "left"].includes((0, r.k3)(i)),
                                    n = l.reference[d] - l.floating[e] + (t && (null == (y = u.offset) ? void 0 : y[d]) || 0) + (t ? 0 : g.crossAxis),
                                    o = l.reference[d] + l.reference[e] + (t ? 0 : (null == (b = u.offset) ? void 0 : b[d]) || 0) - (t ? g.crossAxis : 0);
                                m < n ? m = n : m > o && (m = o)
                            }
                            return {
                                [p]: h,
                                [d]: m
                            }
                        }
                    }
                },
                v = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "size",
                        options: e,
                        async fn(t) {
                            let n, o;
                            let {
                                placement: i,
                                rects: u,
                                platform: a,
                                elements: c
                            } = t, {
                                apply: f = () => {},
                                ...s
                            } = (0, r.ku)(e, t), d = await l(t, s), p = (0, r.k3)(i), h = (0, r.hp)(i), m = "y" === (0, r.Qq)(i), {
                                width: v,
                                height: g
                            } = u.floating;
                            "top" === p || "bottom" === p ? (n = p, o = h === (await (null == a.isRTL ? void 0 : a.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (o = p, n = "end" === h ? "top" : "bottom");
                            let y = g - d[n],
                                b = v - d[o],
                                w = !t.middlewareData.shift,
                                x = y,
                                E = b;
                            if (m) {
                                let e = v - d.left - d.right;
                                E = h || w ? (0, r.VV)(b, e) : e
                            } else {
                                let e = g - d.top - d.bottom;
                                x = h || w ? (0, r.VV)(y, e) : e
                            }
                            if (w && !h) {
                                let e = (0, r.Fp)(d.left, 0),
                                    t = (0, r.Fp)(d.right, 0),
                                    n = (0, r.Fp)(d.top, 0),
                                    o = (0, r.Fp)(d.bottom, 0);
                                m ? E = v - 2 * (0 !== e || 0 !== t ? e + t : (0, r.Fp)(d.left, d.right)) : x = g - 2 * (0 !== n || 0 !== o ? n + o : (0, r.Fp)(d.top, d.bottom))
                            }
                            await f({ ...t,
                                availableWidth: E,
                                availableHeight: x
                            });
                            let C = await a.getDimensions(c.floating);
                            return v !== C.width || g !== C.height ? {
                                reset: {
                                    rects: !0
                                }
                            } : {}
                        }
                    }
                }
        },
        90927: function(e, t, n) {
            n.d(t, {
                x7: function() {
                    return $
                },
                Me: function() {
                    return V
                },
                oo: function() {
                    return Y
                },
                RR: function() {
                    return B
                },
                Cp: function() {
                    return Z
                },
                dr: function() {
                    return j
                },
                uY: function() {
                    return H
                },
                dp: function() {
                    return z
                }
            });
            var r = n(4029),
                o = n(84061);
            let i = Math.min,
                l = Math.max,
                u = Math.round,
                a = Math.floor,
                c = e => ({
                    x: e,
                    y: e
                });

            function f(e) {
                return p(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }

            function s(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function d(e) {
                var t;
                return null == (t = (p(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }

            function p(e) {
                return e instanceof Node || e instanceof s(e).Node
            }

            function h(e) {
                return e instanceof Element || e instanceof s(e).Element
            }

            function m(e) {
                return e instanceof HTMLElement || e instanceof s(e).HTMLElement
            }

            function v(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof s(e).ShadowRoot)
            }

            function g(e) {
                let {
                    overflow: t,
                    overflowX: n,
                    overflowY: r,
                    display: o
                } = x(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
            }

            function y(e) {
                let t = b(),
                    n = x(e);
                return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some(e => (n.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (n.contain || "").includes(e))
            }

            function b() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function w(e) {
                return ["html", "body", "#document"].includes(f(e))
            }

            function x(e) {
                return s(e).getComputedStyle(e)
            }

            function E(e) {
                return h(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.pageXOffset,
                    scrollTop: e.pageYOffset
                }
            }

            function C(e) {
                if ("html" === f(e)) return e;
                let t = e.assignedSlot || e.parentNode || v(e) && e.host || d(e);
                return v(t) ? t.host : t
            }

            function T(e, t, n) {
                var r;
                void 0 === t && (t = []), void 0 === n && (n = !0);
                let o = function e(t) {
                        let n = C(t);
                        return w(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : m(n) && g(n) ? n : e(n)
                    }(e),
                    i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
                    l = s(o);
                return i ? t.concat(l, l.visualViewport || [], g(o) ? o : [], l.frameElement && n ? T(l.frameElement) : []) : t.concat(o, T(o, [], n))
            }

            function R(e) {
                let t = x(e),
                    n = parseFloat(t.width) || 0,
                    r = parseFloat(t.height) || 0,
                    o = m(e),
                    i = o ? e.offsetWidth : n,
                    l = o ? e.offsetHeight : r,
                    a = u(n) !== i || u(r) !== l;
                return a && (n = i, r = l), {
                    width: n,
                    height: r,
                    $: a
                }
            }

            function A(e) {
                return h(e) ? e : e.contextElement
            }

            function O(e) {
                let t = A(e);
                if (!m(t)) return c(1);
                let n = t.getBoundingClientRect(),
                    {
                        width: r,
                        height: o,
                        $: i
                    } = R(t),
                    l = (i ? u(n.width) : n.width) / r,
                    a = (i ? u(n.height) : n.height) / o;
                return l && Number.isFinite(l) || (l = 1), a && Number.isFinite(a) || (a = 1), {
                    x: l,
                    y: a
                }
            }
            let P = c(0);

            function k(e) {
                let t = s(e);
                return b() && t.visualViewport ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop
                } : P
            }

            function S(e, t, n, o) {
                var i;
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                let l = e.getBoundingClientRect(),
                    u = A(e),
                    a = c(1);
                t && (o ? h(o) && (a = O(o)) : a = O(e));
                let f = (void 0 === (i = n) && (i = !1), o && (!i || o === s(u)) && i) ? k(u) : c(0),
                    d = (l.left + f.x) / a.x,
                    p = (l.top + f.y) / a.y,
                    m = l.width / a.x,
                    v = l.height / a.y;
                if (u) {
                    let e = s(u),
                        t = o && h(o) ? s(o) : o,
                        n = e,
                        r = n.frameElement;
                    for (; r && o && t !== n;) {
                        let e = O(r),
                            t = r.getBoundingClientRect(),
                            o = x(r),
                            i = t.left + (r.clientLeft + parseFloat(o.paddingLeft)) * e.x,
                            l = t.top + (r.clientTop + parseFloat(o.paddingTop)) * e.y;
                        d *= e.x, p *= e.y, m *= e.x, v *= e.y, d += i, p += l, r = (n = s(r)).frameElement
                    }
                }
                return (0, r.JB)({
                    width: m,
                    height: v,
                    x: d,
                    y: p
                })
            }
            let L = [":popover-open", ":modal"];

            function M(e) {
                return L.some(t => {
                    try {
                        return e.matches(t)
                    } catch (e) {
                        return !1
                    }
                })
            }

            function D(e) {
                return S(d(e)).left + E(e).scrollLeft
            }

            function _(e, t, n) {
                let o;
                if ("viewport" === t) o = function(e, t) {
                    let n = s(e),
                        r = d(e),
                        o = n.visualViewport,
                        i = r.clientWidth,
                        l = r.clientHeight,
                        u = 0,
                        a = 0;
                    if (o) {
                        i = o.width, l = o.height;
                        let e = b();
                        (!e || e && "fixed" === t) && (u = o.offsetLeft, a = o.offsetTop)
                    }
                    return {
                        width: i,
                        height: l,
                        x: u,
                        y: a
                    }
                }(e, n);
                else if ("document" === t) o = function(e) {
                    let t = d(e),
                        n = E(e),
                        r = e.ownerDocument.body,
                        o = l(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
                        i = l(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
                        u = -n.scrollLeft + D(e),
                        a = -n.scrollTop;
                    return "rtl" === x(r).direction && (u += l(t.clientWidth, r.clientWidth) - o), {
                        width: o,
                        height: i,
                        x: u,
                        y: a
                    }
                }(d(e));
                else if (h(t)) o = function(e, t) {
                    let n = S(e, !0, "fixed" === t),
                        r = n.top + e.clientTop,
                        o = n.left + e.clientLeft,
                        i = m(e) ? O(e) : c(1),
                        l = e.clientWidth * i.x;
                    return {
                        width: l,
                        height: e.clientHeight * i.y,
                        x: o * i.x,
                        y: r * i.y
                    }
                }(t, n);
                else {
                    let n = k(e);
                    o = { ...t,
                        x: t.x - n.x,
                        y: t.y - n.y
                    }
                }
                return (0, r.JB)(o)
            }

            function W(e, t) {
                return m(e) && "fixed" !== x(e).position ? t ? t(e) : e.offsetParent : null
            }

            function N(e, t) {
                let n = s(e);
                if (!m(e) || M(e)) return n;
                let r = W(e, t);
                for (; r && ["table", "td", "th"].includes(f(r)) && "static" === x(r).position;) r = W(r, t);
                return r && ("html" === f(r) || "body" === f(r) && "static" === x(r).position && !y(r)) ? n : r || function(e) {
                    let t = C(e);
                    for (; m(t) && !w(t);) {
                        if (y(t)) return t;
                        t = C(t)
                    }
                    return null
                }(e) || n
            }
            let F = async function(e) {
                    let t = this.getOffsetParent || N,
                        n = this.getDimensions;
                    return {
                        reference: function(e, t, n) {
                            let r = m(t),
                                o = d(t),
                                i = "fixed" === n,
                                l = S(e, !0, i, t),
                                u = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                a = c(0);
                            if (r || !r && !i) {
                                if (("body" !== f(t) || g(o)) && (u = E(t)), r) {
                                    let e = S(t, !0, i, t);
                                    a.x = e.x + t.clientLeft, a.y = e.y + t.clientTop
                                } else o && (a.x = D(o))
                            }
                            return {
                                x: l.left + u.scrollLeft - a.x,
                                y: l.top + u.scrollTop - a.y,
                                width: l.width,
                                height: l.height
                            }
                        }(e.reference, await t(e.floating), e.strategy),
                        floating: {
                            x: 0,
                            y: 0,
                            ...await n(e.floating)
                        }
                    }
                },
                I = {
                    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                        let {
                            elements: t,
                            rect: n,
                            offsetParent: r,
                            strategy: o
                        } = e, i = "fixed" === o, l = d(r), u = !!t && M(t.floating);
                        if (r === l || u && i) return n;
                        let a = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            s = c(1),
                            p = c(0),
                            h = m(r);
                        if ((h || !h && !i) && (("body" !== f(r) || g(l)) && (a = E(r)), m(r))) {
                            let e = S(r);
                            s = O(r), p.x = e.x + r.clientLeft, p.y = e.y + r.clientTop
                        }
                        return {
                            width: n.width * s.x,
                            height: n.height * s.y,
                            x: n.x * s.x - a.scrollLeft * s.x + p.x,
                            y: n.y * s.y - a.scrollTop * s.y + p.y
                        }
                    },
                    getDocumentElement: d,
                    getClippingRect: function(e) {
                        let {
                            element: t,
                            boundary: n,
                            rootBoundary: r,
                            strategy: o
                        } = e, u = [..."clippingAncestors" === n ? function(e, t) {
                            let n = t.get(e);
                            if (n) return n;
                            let r = T(e, [], !1).filter(e => h(e) && "body" !== f(e)),
                                o = null,
                                i = "fixed" === x(e).position,
                                l = i ? C(e) : e;
                            for (; h(l) && !w(l);) {
                                let t = x(l),
                                    n = y(l);
                                n || "fixed" !== t.position || (o = null), (i ? !n && !o : !n && "static" === t.position && !!o && ["absolute", "fixed"].includes(o.position) || g(l) && !n && function e(t, n) {
                                    let r = C(t);
                                    return !(r === n || !h(r) || w(r)) && ("fixed" === x(r).position || e(r, n))
                                }(e, l)) ? r = r.filter(e => e !== l) : o = t, l = C(l)
                            }
                            return t.set(e, r), r
                        }(t, this._c) : [].concat(n), r], a = u[0], c = u.reduce((e, n) => {
                            let r = _(t, n, o);
                            return e.top = l(r.top, e.top), e.right = i(r.right, e.right), e.bottom = i(r.bottom, e.bottom), e.left = l(r.left, e.left), e
                        }, _(t, a, o));
                        return {
                            width: c.right - c.left,
                            height: c.bottom - c.top,
                            x: c.left,
                            y: c.top
                        }
                    },
                    getOffsetParent: N,
                    getElementRects: F,
                    getClientRects: function(e) {
                        return Array.from(e.getClientRects())
                    },
                    getDimensions: function(e) {
                        let {
                            width: t,
                            height: n
                        } = R(e);
                        return {
                            width: t,
                            height: n
                        }
                    },
                    getScale: O,
                    isElement: h,
                    isRTL: function(e) {
                        return "rtl" === x(e).direction
                    }
                };

            function V(e, t, n, r) {
                let o;
                void 0 === r && (r = {});
                let {
                    ancestorScroll: u = !0,
                    ancestorResize: c = !0,
                    elementResize: f = "function" == typeof ResizeObserver,
                    layoutShift: s = "function" == typeof IntersectionObserver,
                    animationFrame: p = !1
                } = r, h = A(e), m = u || c ? [...h ? T(h) : [], ...T(t)] : [];
                m.forEach(e => {
                    u && e.addEventListener("scroll", n, {
                        passive: !0
                    }), c && e.addEventListener("resize", n)
                });
                let v = h && s ? function(e, t) {
                        let n, r = null,
                            o = d(e);

                        function u() {
                            var e;
                            clearTimeout(n), null == (e = r) || e.disconnect(), r = null
                        }
                        return ! function c(f, s) {
                            void 0 === f && (f = !1), void 0 === s && (s = 1), u();
                            let {
                                left: d,
                                top: p,
                                width: h,
                                height: m
                            } = e.getBoundingClientRect();
                            if (f || t(), !h || !m) return;
                            let v = a(p),
                                g = a(o.clientWidth - (d + h)),
                                y = {
                                    rootMargin: -v + "px " + -g + "px " + -a(o.clientHeight - (p + m)) + "px " + -a(d) + "px",
                                    threshold: l(0, i(1, s)) || 1
                                },
                                b = !0;

                            function w(e) {
                                let t = e[0].intersectionRatio;
                                if (t !== s) {
                                    if (!b) return c();
                                    t ? c(!1, t) : n = setTimeout(() => {
                                        c(!1, 1e-7)
                                    }, 100)
                                }
                                b = !1
                            }
                            try {
                                r = new IntersectionObserver(w, { ...y,
                                    root: o.ownerDocument
                                })
                            } catch (e) {
                                r = new IntersectionObserver(w, y)
                            }
                            r.observe(e)
                        }(!0), u
                    }(h, n) : null,
                    g = -1,
                    y = null;
                f && (y = new ResizeObserver(e => {
                    let [r] = e;
                    r && r.target === h && y && (y.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
                        var e;
                        null == (e = y) || e.observe(t)
                    })), n()
                }), h && !p && y.observe(h), y.observe(t));
                let b = p ? S(e) : null;
                return p && function t() {
                    let r = S(e);
                    b && (r.x !== b.x || r.y !== b.y || r.width !== b.width || r.height !== b.height) && n(), b = r, o = requestAnimationFrame(t)
                }(), n(), () => {
                    var e;
                    m.forEach(e => {
                        u && e.removeEventListener("scroll", n), c && e.removeEventListener("resize", n)
                    }), null == v || v(), null == (e = y) || e.disconnect(), y = null, p && cancelAnimationFrame(o)
                }
            }
            let H = o.uY,
                B = o.RR,
                z = o.dp,
                Z = o.Cp,
                $ = o.x7,
                j = o.dr,
                Y = (e, t, n) => {
                    let r = new Map,
                        i = {
                            platform: I,
                            ...n
                        },
                        l = { ...i.platform,
                            _c: r
                        };
                    return (0, o.oo)(e, t, { ...i,
                        platform: l
                    })
                }
        },
        92416: function(e, t, n) {
            n.d(t, {
                Cp: function() {
                    return b
                },
                RR: function() {
                    return g
                },
                YF: function() {
                    return d
                },
                cv: function() {
                    return h
                },
                dp: function() {
                    return y
                },
                dr: function() {
                    return v
                },
                uY: function() {
                    return m
                },
                x7: function() {
                    return w
                }
            });
            var r = n(90927),
                o = n(84061),
                i = n(2784),
                l = n(28316),
                u = "undefined" != typeof document ? i.useLayoutEffect : i.useEffect;

            function a(e, t) {
                let n, r, o;
                if (e === t) return !0;
                if (typeof e != typeof t) return !1;
                if ("function" == typeof e && e.toString() === t.toString()) return !0;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if ((n = e.length) !== t.length) return !1;
                        for (r = n; 0 != r--;)
                            if (!a(e[r], t[r])) return !1;
                        return !0
                    }
                    if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
                    for (r = n; 0 != r--;)
                        if (!({}).hasOwnProperty.call(t, o[r])) return !1;
                    for (r = n; 0 != r--;) {
                        let n = o[r];
                        if (("_owner" !== n || !e.$$typeof) && !a(e[n], t[n])) return !1
                    }
                    return !0
                }
                return e != e && t != t
            }

            function c(e) {
                return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
            }

            function f(e, t) {
                let n = c(e);
                return Math.round(t * n) / n
            }

            function s(e) {
                let t = i.useRef(e);
                return u(() => {
                    t.current = e
                }), t
            }

            function d(e) {
                void 0 === e && (e = {});
                let {
                    placement: t = "bottom",
                    strategy: n = "absolute",
                    middleware: o = [],
                    platform: d,
                    elements: {
                        reference: p,
                        floating: h
                    } = {},
                    transform: m = !0,
                    whileElementsMounted: v,
                    open: g
                } = e, [y, b] = i.useState({
                    x: 0,
                    y: 0,
                    strategy: n,
                    placement: t,
                    middlewareData: {},
                    isPositioned: !1
                }), [w, x] = i.useState(o);
                a(w, o) || x(o);
                let [E, C] = i.useState(null), [T, R] = i.useState(null), A = i.useCallback(e => {
                    e !== S.current && (S.current = e, C(e))
                }, []), O = i.useCallback(e => {
                    e !== L.current && (L.current = e, R(e))
                }, []), P = p || E, k = h || T, S = i.useRef(null), L = i.useRef(null), M = i.useRef(y), D = null != v, _ = s(v), W = s(d), N = s(g), F = i.useCallback(() => {
                    if (!S.current || !L.current) return;
                    let e = {
                        placement: t,
                        strategy: n,
                        middleware: w
                    };
                    W.current && (e.platform = W.current), (0, r.oo)(S.current, L.current, e).then(e => {
                        let t = { ...e,
                            isPositioned: !1 !== N.current
                        };
                        I.current && !a(M.current, t) && (M.current = t, l.flushSync(() => {
                            b(t)
                        }))
                    })
                }, [w, t, n, W, N]);
                u(() => {
                    !1 === g && M.current.isPositioned && (M.current.isPositioned = !1, b(e => ({ ...e,
                        isPositioned: !1
                    })))
                }, [g]);
                let I = i.useRef(!1);
                u(() => (I.current = !0, () => {
                    I.current = !1
                }), []), u(() => {
                    if (P && (S.current = P), k && (L.current = k), P && k) {
                        if (_.current) return _.current(P, k, F);
                        F()
                    }
                }, [P, k, F, _, D]);
                let V = i.useMemo(() => ({
                        reference: S,
                        floating: L,
                        setReference: A,
                        setFloating: O
                    }), [A, O]),
                    H = i.useMemo(() => ({
                        reference: P,
                        floating: k
                    }), [P, k]),
                    B = i.useMemo(() => {
                        let e = {
                            position: n,
                            left: 0,
                            top: 0
                        };
                        if (!H.floating) return e;
                        let t = f(H.floating, y.x),
                            r = f(H.floating, y.y);
                        return m ? { ...e,
                            transform: "translate(" + t + "px, " + r + "px)",
                            ...c(H.floating) >= 1.5 && {
                                willChange: "transform"
                            }
                        } : {
                            position: n,
                            left: t,
                            top: r
                        }
                    }, [n, m, H.floating, y.x, y.y]);
                return i.useMemo(() => ({ ...y,
                    update: F,
                    refs: V,
                    elements: H,
                    floatingStyles: B
                }), [y, F, V, H, B])
            }
            let p = e => ({
                    name: "arrow",
                    options: e,
                    fn(t) {
                        let {
                            element: n,
                            padding: o
                        } = "function" == typeof e ? e(t) : e;
                        return n && ({}).hasOwnProperty.call(n, "current") ? null != n.current ? (0, r.x7)({
                            element: n.current,
                            padding: o
                        }).fn(t) : {} : n ? (0, r.x7)({
                            element: n,
                            padding: o
                        }).fn(t) : {}
                    }
                }),
                h = (e, t) => ({ ...(0, o.cv)(e),
                    options: [e, t]
                }),
                m = (e, t) => ({ ...(0, r.uY)(e),
                    options: [e, t]
                }),
                v = (e, t) => ({ ...(0, r.dr)(e),
                    options: [e, t]
                }),
                g = (e, t) => ({ ...(0, r.RR)(e),
                    options: [e, t]
                }),
                y = (e, t) => ({ ...(0, r.dp)(e),
                    options: [e, t]
                }),
                b = (e, t) => ({ ...(0, r.Cp)(e),
                    options: [e, t]
                }),
                w = (e, t) => ({ ...p(e),
                    options: [e, t]
                })
        },
        4029: function(e, t, n) {
            n.d(t, {
                Fp: function() {
                    return i
                },
                I4: function() {
                    return p
                },
                JB: function() {
                    return E
                },
                KX: function() {
                    return b
                },
                Qq: function() {
                    return h
                },
                Rn: function() {
                    return d
                },
                VV: function() {
                    return o
                },
                Wh: function() {
                    return m
                },
                gy: function() {
                    return g
                },
                hp: function() {
                    return s
                },
                i8: function() {
                    return v
                },
                k3: function() {
                    return f
                },
                ku: function() {
                    return c
                },
                mA: function() {
                    return r
                },
                pw: function() {
                    return w
                },
                uZ: function() {
                    return a
                },
                yd: function() {
                    return x
                }
            });
            let r = ["top", "right", "bottom", "left"],
                o = Math.min,
                i = Math.max,
                l = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                u = {
                    start: "end",
                    end: "start"
                };

            function a(e, t, n) {
                return i(e, o(t, n))
            }

            function c(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function f(e) {
                return e.split("-")[0]
            }

            function s(e) {
                return e.split("-")[1]
            }

            function d(e) {
                return "x" === e ? "y" : "x"
            }

            function p(e) {
                return "y" === e ? "height" : "width"
            }

            function h(e) {
                return ["top", "bottom"].includes(f(e)) ? "y" : "x"
            }

            function m(e) {
                return d(h(e))
            }

            function v(e, t, n) {
                void 0 === n && (n = !1);
                let r = s(e),
                    o = m(e),
                    i = p(o),
                    l = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                return t.reference[i] > t.floating[i] && (l = w(l)), [l, w(l)]
            }

            function g(e) {
                let t = w(e);
                return [y(e), t, y(t)]
            }

            function y(e) {
                return e.replace(/start|end/g, e => u[e])
            }

            function b(e, t, n, r) {
                let o = s(e),
                    i = function(e, t, n) {
                        let r = ["left", "right"],
                            o = ["right", "left"];
                        switch (e) {
                            case "top":
                            case "bottom":
                                if (n) return t ? o : r;
                                return t ? r : o;
                            case "left":
                            case "right":
                                return t ? ["top", "bottom"] : ["bottom", "top"];
                            default:
                                return []
                        }
                    }(f(e), "start" === n, r);
                return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(y)))), i
            }

            function w(e) {
                return e.replace(/left|right|bottom|top/g, e => l[e])
            }

            function x(e) {
                return "number" != typeof e ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...e
                } : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function E(e) {
                return { ...e,
                    top: e.y,
                    left: e.x,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                }
            }
        },
        17998: function(e, t, n) {
            n.d(t, {
                M: function() {
                    return r
                }
            });

            function r(e, t, {
                checkForDefaultPrevented: n = !0
            } = {}) {
                return function(r) {
                    if (null == e || e(r), !1 === n || !r.defaultPrevented) return null == t ? void 0 : t(r)
                }
            }
        },
        62656: function(e, t, n) {
            n.d(t, {
                F: function() {
                    return o
                },
                e: function() {
                    return i
                }
            });
            var r = n(2784);

            function o(...e) {
                return t => e.forEach(e => {
                    "function" == typeof e ? e(t) : null != e && (e.current = t)
                })
            }

            function i(...e) {
                return (0, r.useCallback)(o(...e), e)
            }
        },
        92211: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return o
                }
            });
            var r = n(2784);

            function o(e, t = []) {
                let n = [],
                    o = () => {
                        let t = n.map(e => (0, r.createContext)(e));
                        return function(n) {
                            let o = (null == n ? void 0 : n[e]) || t;
                            return (0, r.useMemo)(() => ({
                                [`__scope${e}`]: { ...n,
                                    [e]: o
                                }
                            }), [n, o])
                        }
                    };
                return o.scopeName = e, [function(t, o) {
                    let i = (0, r.createContext)(o),
                        l = n.length;

                    function u(t) {
                        let {
                            scope: n,
                            children: o,
                            ...u
                        } = t, a = (null == n ? void 0 : n[e][l]) || i, c = (0, r.useMemo)(() => u, Object.values(u));
                        return (0, r.createElement)(a.Provider, {
                            value: c
                        }, o)
                    }
                    return n = [...n, o], u.displayName = t + "Provider", [u, function(n, u) {
                        let a = (null == u ? void 0 : u[e][l]) || i,
                            c = (0, r.useContext)(a);
                        if (c) return c;
                        if (void 0 !== o) return o;
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
                            let o = n.reduce((t, {
                                useScope: n,
                                scopeName: r
                            }) => {
                                let o = n(e)[`__scope${r}`];
                                return { ...t,
                                    ...o
                                }
                            }, {});
                            return (0, r.useMemo)(() => ({
                                [`__scope${t.scopeName}`]: o
                            }), [o])
                        }
                    };
                    return n.scopeName = t.scopeName, n
                }(o, ...t)]
            }
        },
        35999: function(e, t, n) {
            let r;
            n.d(t, {
                XB: function() {
                    return d
                }
            });
            var o = n(7896),
                i = n(2784),
                l = n(17998),
                u = n(72714),
                a = n(62656),
                c = n(27757);
            let f = "dismissableLayer.update",
                s = (0, i.createContext)({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                d = (0, i.forwardRef)((e, t) => {
                    var n;
                    let {
                        disableOutsidePointerEvents: d = !1,
                        onEscapeKeyDown: m,
                        onPointerDownOutside: v,
                        onFocusOutside: g,
                        onInteractOutside: y,
                        onDismiss: b,
                        ...w
                    } = e, x = (0, i.useContext)(s), [E, C] = (0, i.useState)(null), T = null !== (n = null == E ? void 0 : E.ownerDocument) && void 0 !== n ? n : null == globalThis ? void 0 : globalThis.document, [, R] = (0, i.useState)({}), A = (0, a.e)(t, e => C(e)), O = Array.from(x.layers), [P] = [...x.layersWithOutsidePointerEventsDisabled].slice(-1), k = O.indexOf(P), S = E ? O.indexOf(E) : -1, L = x.layersWithOutsidePointerEventsDisabled.size > 0, M = S >= k, D = function(e, t = null == globalThis ? void 0 : globalThis.document) {
                        let n = (0, c.W)(e),
                            r = (0, i.useRef)(!1),
                            o = (0, i.useRef)(() => {});
                        return (0, i.useEffect)(() => {
                            let e = e => {
                                    if (e.target && !r.current) {
                                        let r = {
                                            originalEvent: e
                                        };

                                        function i() {
                                            h("dismissableLayer.pointerDownOutside", n, r, {
                                                discrete: !0
                                            })
                                        }
                                        "touch" === e.pointerType ? (t.removeEventListener("click", o.current), o.current = i, t.addEventListener("click", o.current, {
                                            once: !0
                                        })) : i()
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
                            n = [...x.branches].some(e => e.contains(t));
                        !M || n || (null == v || v(e), null == y || y(e), e.defaultPrevented || null == b || b())
                    }, T), _ = function(e, t = null == globalThis ? void 0 : globalThis.document) {
                        let n = (0, c.W)(e),
                            r = (0, i.useRef)(!1);
                        return (0, i.useEffect)(() => {
                            let e = e => {
                                e.target && !r.current && h("dismissableLayer.focusOutside", n, {
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
                        [...x.branches].some(e => e.contains(t)) || (null == g || g(e), null == y || y(e), e.defaultPrevented || null == b || b())
                    }, T);
                    return ! function(e, t = null == globalThis ? void 0 : globalThis.document) {
                        let n = (0, c.W)(e);
                        (0, i.useEffect)(() => {
                            let e = e => {
                                "Escape" === e.key && n(e)
                            };
                            return t.addEventListener("keydown", e), () => t.removeEventListener("keydown", e)
                        }, [n, t])
                    }(e => {
                        S !== x.layers.size - 1 || (null == m || m(e), !e.defaultPrevented && b && (e.preventDefault(), b()))
                    }, T), (0, i.useEffect)(() => {
                        if (E) return d && (0 === x.layersWithOutsidePointerEventsDisabled.size && (r = T.body.style.pointerEvents, T.body.style.pointerEvents = "none"), x.layersWithOutsidePointerEventsDisabled.add(E)), x.layers.add(E), p(), () => {
                            d && 1 === x.layersWithOutsidePointerEventsDisabled.size && (T.body.style.pointerEvents = r)
                        }
                    }, [E, T, d, x]), (0, i.useEffect)(() => () => {
                        E && (x.layers.delete(E), x.layersWithOutsidePointerEventsDisabled.delete(E), p())
                    }, [E, x]), (0, i.useEffect)(() => {
                        let e = () => R({});
                        return document.addEventListener(f, e), () => document.removeEventListener(f, e)
                    }, []), (0, i.createElement)(u.WV.div, (0, o.Z)({}, w, {
                        ref: A,
                        style: {
                            pointerEvents: L ? M ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: (0, l.M)(e.onFocusCapture, _.onFocusCapture),
                        onBlurCapture: (0, l.M)(e.onBlurCapture, _.onBlurCapture),
                        onPointerDownCapture: (0, l.M)(e.onPointerDownCapture, D.onPointerDownCapture)
                    }))
                });

            function p() {
                let e = new CustomEvent(f);
                document.dispatchEvent(e)
            }

            function h(e, t, n, {
                discrete: r
            }) {
                let o = n.originalEvent.target,
                    i = new CustomEvent(e, {
                        bubbles: !1,
                        cancelable: !0,
                        detail: n
                    });
                t && o.addEventListener(e, t, {
                    once: !0
                }), r ? (0, u.jH)(o, i) : o.dispatchEvent(i)
            }
        },
        23372: function(e, t, n) {
            n.d(t, {
                M: function() {
                    return a
                }
            });
            var r, o = n(2784),
                i = n(61644);
            let l = (r || (r = n.t(o, 2)))["useId".toString()] || (() => void 0),
                u = 0;

            function a(e) {
                let [t, n] = o.useState(l());
                return (0, i.b)(() => {
                    e || n(e => null != e ? e : String(u++))
                }, [e]), e || (t ? `radix-${t}` : "")
            }
        },
        94465: function(e, t, n) {
            n.d(t, {
                ee: function() {
                    return S
                },
                Eh: function() {
                    return M
                },
                VY: function() {
                    return L
                },
                fC: function() {
                    return k
                },
                D7: function() {
                    return v
                }
            });
            var r = n(7896),
                o = n(2784),
                i = n(92416),
                l = n(90927),
                u = n(72714);
            let a = (0, o.forwardRef)((e, t) => {
                let {
                    children: n,
                    width: i = 10,
                    height: l = 5,
                    ...a
                } = e;
                return (0, o.createElement)(u.WV.svg, (0, r.Z)({}, a, {
                    ref: t,
                    width: i,
                    height: l,
                    viewBox: "0 0 30 10",
                    preserveAspectRatio: "none"
                }), e.asChild ? n : (0, o.createElement)("polygon", {
                    points: "0,0 30,0 15,10"
                }))
            });
            var c = n(62656),
                f = n(92211),
                s = n(27757),
                d = n(61644),
                p = n(35019);
            let h = "Popper",
                [m, v] = (0, f.b)(h),
                [g, y] = m(h),
                b = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopePopper: n,
                        virtualRef: i,
                        ...l
                    } = e, a = y("PopperAnchor", n), f = (0, o.useRef)(null), s = (0, c.e)(t, f);
                    return (0, o.useEffect)(() => {
                        a.onAnchorChange((null == i ? void 0 : i.current) || f.current)
                    }), i ? null : (0, o.createElement)(u.WV.div, (0, r.Z)({}, l, {
                        ref: s
                    }))
                }),
                w = "PopperContent",
                [x, E] = m(w),
                C = (0, o.forwardRef)((e, t) => {
                    var n, a, f, h, m, v, g, b;
                    let {
                        __scopePopper: E,
                        side: C = "bottom",
                        sideOffset: T = 0,
                        align: R = "center",
                        alignOffset: k = 0,
                        arrowPadding: S = 0,
                        avoidCollisions: L = !0,
                        collisionBoundary: M = [],
                        collisionPadding: D = 0,
                        sticky: _ = "partial",
                        hideWhenDetached: W = !1,
                        updatePositionStrategy: N = "optimized",
                        onPlaced: F,
                        ...I
                    } = e, V = y(w, E), [H, B] = (0, o.useState)(null), z = (0, c.e)(t, e => B(e)), [Z, $] = (0, o.useState)(null), j = (0, p.t)(Z), Y = null !== (n = null == j ? void 0 : j.width) && void 0 !== n ? n : 0, X = null !== (a = null == j ? void 0 : j.height) && void 0 !== a ? a : 0, U = "number" == typeof D ? D : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...D
                    }, q = Array.isArray(M) ? M : [M], J = q.length > 0, Q = {
                        padding: U,
                        boundary: q.filter(A),
                        altBoundary: J
                    }, {
                        refs: K,
                        floatingStyles: G,
                        placement: ee,
                        isPositioned: et,
                        middlewareData: en
                    } = (0, i.YF)({
                        strategy: "fixed",
                        placement: C + ("center" !== R ? "-" + R : ""),
                        whileElementsMounted: (...e) => (0, l.Me)(...e, {
                            animationFrame: "always" === N
                        }),
                        elements: {
                            reference: V.anchor
                        },
                        middleware: [(0, i.cv)({
                            mainAxis: T + X,
                            alignmentAxis: k
                        }), L && (0, i.uY)({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: "partial" === _ ? (0, i.dr)() : void 0,
                            ...Q
                        }), L && (0, i.RR)({ ...Q
                        }), (0, i.dp)({ ...Q,
                            apply: ({
                                elements: e,
                                rects: t,
                                availableWidth: n,
                                availableHeight: r
                            }) => {
                                let {
                                    width: o,
                                    height: i
                                } = t.reference, l = e.floating.style;
                                l.setProperty("--radix-popper-available-width", `${n}px`), l.setProperty("--radix-popper-available-height", `${r}px`), l.setProperty("--radix-popper-anchor-width", `${o}px`), l.setProperty("--radix-popper-anchor-height", `${i}px`)
                            }
                        }), Z && (0, i.x7)({
                            element: Z,
                            padding: S
                        }), O({
                            arrowWidth: Y,
                            arrowHeight: X
                        }), W && (0, i.Cp)({
                            strategy: "referenceHidden",
                            ...Q
                        })]
                    }), [er, eo] = P(ee), ei = (0, s.W)(F);
                    (0, d.b)(() => {
                        et && (null == ei || ei())
                    }, [et, ei]);
                    let el = null === (f = en.arrow) || void 0 === f ? void 0 : f.x,
                        eu = null === (h = en.arrow) || void 0 === h ? void 0 : h.y,
                        ea = (null === (m = en.arrow) || void 0 === m ? void 0 : m.centerOffset) !== 0,
                        [ec, ef] = (0, o.useState)();
                    return (0, d.b)(() => {
                        H && ef(window.getComputedStyle(H).zIndex)
                    }, [H]), (0, o.createElement)("div", {
                        ref: K.setFloating,
                        "data-radix-popper-content-wrapper": "",
                        style: { ...G,
                            transform: et ? G.transform : "translate(0, -200%)",
                            minWidth: "max-content",
                            zIndex: ec,
                            "--radix-popper-transform-origin": [null === (v = en.transformOrigin) || void 0 === v ? void 0 : v.x, null === (g = en.transformOrigin) || void 0 === g ? void 0 : g.y].join(" ")
                        },
                        dir: e.dir
                    }, (0, o.createElement)(x, {
                        scope: E,
                        placedSide: er,
                        onArrowChange: $,
                        arrowX: el,
                        arrowY: eu,
                        shouldHideArrow: ea
                    }, (0, o.createElement)(u.WV.div, (0, r.Z)({
                        "data-side": er,
                        "data-align": eo
                    }, I, {
                        ref: z,
                        style: { ...I.style,
                            animation: et ? void 0 : "none",
                            opacity: null !== (b = en.hide) && void 0 !== b && b.referenceHidden ? 0 : void 0
                        }
                    }))))
                }),
                T = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                },
                R = (0, o.forwardRef)(function(e, t) {
                    let {
                        __scopePopper: n,
                        ...i
                    } = e, l = E("PopperArrow", n), u = T[l.placedSide];
                    return (0, o.createElement)("span", {
                        ref: l.onArrowChange,
                        style: {
                            position: "absolute",
                            left: l.arrowX,
                            top: l.arrowY,
                            [u]: 0,
                            transformOrigin: {
                                top: "",
                                right: "0 0",
                                bottom: "center 0",
                                left: "100% 0"
                            }[l.placedSide],
                            transform: {
                                top: "translateY(100%)",
                                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                                bottom: "rotate(180deg)",
                                left: "translateY(50%) rotate(-90deg) translateX(50%)"
                            }[l.placedSide],
                            visibility: l.shouldHideArrow ? "hidden" : void 0
                        }
                    }, (0, o.createElement)(a, (0, r.Z)({}, i, {
                        ref: t,
                        style: { ...i.style,
                            display: "block"
                        }
                    })))
                });

            function A(e) {
                return null !== e
            }
            let O = e => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    var n, r, o, i, l;
                    let {
                        placement: u,
                        rects: a,
                        middlewareData: c
                    } = t, f = (null === (n = c.arrow) || void 0 === n ? void 0 : n.centerOffset) !== 0, s = f ? 0 : e.arrowWidth, d = f ? 0 : e.arrowHeight, [p, h] = P(u), m = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    }[h], v = (null !== (r = null === (o = c.arrow) || void 0 === o ? void 0 : o.x) && void 0 !== r ? r : 0) + s / 2, g = (null !== (i = null === (l = c.arrow) || void 0 === l ? void 0 : l.y) && void 0 !== i ? i : 0) + d / 2, y = "", b = "";
                    return "bottom" === p ? (y = f ? m : `${v}px`, b = `${-d}px`) : "top" === p ? (y = f ? m : `${v}px`, b = `${a.floating.height+d}px`) : "right" === p ? (y = `${-d}px`, b = f ? m : `${g}px`) : "left" === p && (y = `${a.floating.width+d}px`, b = f ? m : `${g}px`), {
                        data: {
                            x: y,
                            y: b
                        }
                    }
                }
            });

            function P(e) {
                let [t, n = "center"] = e.split("-");
                return [t, n]
            }
            let k = e => {
                    let {
                        __scopePopper: t,
                        children: n
                    } = e, [r, i] = (0, o.useState)(null);
                    return (0, o.createElement)(g, {
                        scope: t,
                        anchor: r,
                        onAnchorChange: i
                    }, n)
                },
                S = b,
                L = C,
                M = R
        },
        78773: function(e, t, n) {
            n.d(t, {
                h: function() {
                    return u
                }
            });
            var r = n(7896),
                o = n(2784),
                i = n(28316),
                l = n(72714);
            let u = (0, o.forwardRef)((e, t) => {
                var n;
                let {
                    container: u = null == globalThis ? void 0 : null === (n = globalThis.document) || void 0 === n ? void 0 : n.body,
                    ...a
                } = e;
                return u ? i.createPortal((0, o.createElement)(l.WV.div, (0, r.Z)({}, a, {
                    ref: t
                })), u) : null
            })
        },
        79616: function(e, t, n) {
            n.d(t, {
                z: function() {
                    return u
                }
            });
            var r = n(2784),
                o = n(28316),
                i = n(62656),
                l = n(61644);
            let u = e => {
                let {
                    present: t,
                    children: n
                } = e, u = function(e) {
                    var t, n;
                    let [i, u] = (0, r.useState)(), c = (0, r.useRef)({}), f = (0, r.useRef)(e), s = (0, r.useRef)("none"), [d, p] = (t = e ? "mounted" : "unmounted", n = {
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
                    }, (0, r.useReducer)((e, t) => {
                        let r = n[e][t];
                        return null != r ? r : e
                    }, t));
                    return (0, r.useEffect)(() => {
                        let e = a(c.current);
                        s.current = "mounted" === d ? e : "none"
                    }, [d]), (0, l.b)(() => {
                        let t = c.current,
                            n = f.current;
                        if (n !== e) {
                            let r = s.current,
                                o = a(t);
                            e ? p("MOUNT") : "none" === o || (null == t ? void 0 : t.display) === "none" ? p("UNMOUNT") : n && r !== o ? p("ANIMATION_OUT") : p("UNMOUNT"), f.current = e
                        }
                    }, [e, p]), (0, l.b)(() => {
                        if (i) {
                            let e = e => {
                                    let t = a(c.current).includes(e.animationName);
                                    e.target === i && t && (0, o.flushSync)(() => p("ANIMATION_END"))
                                },
                                t = e => {
                                    e.target === i && (s.current = a(c.current))
                                };
                            return i.addEventListener("animationstart", t), i.addEventListener("animationcancel", e), i.addEventListener("animationend", e), () => {
                                i.removeEventListener("animationstart", t), i.removeEventListener("animationcancel", e), i.removeEventListener("animationend", e)
                            }
                        }
                        p("ANIMATION_END")
                    }, [i, p]), {
                        isPresent: ["mounted", "unmountSuspended"].includes(d),
                        ref: (0, r.useCallback)(e => {
                            e && (c.current = getComputedStyle(e)), u(e)
                        }, [])
                    }
                }(t), c = "function" == typeof n ? n({
                    present: u.isPresent
                }) : r.Children.only(n), f = (0, i.e)(u.ref, c.ref);
                return "function" == typeof n || u.isPresent ? (0, r.cloneElement)(c, {
                    ref: f
                }) : null
            };

            function a(e) {
                return (null == e ? void 0 : e.animationName) || "none"
            }
            u.displayName = "Presence"
        },
        72714: function(e, t, n) {
            n.d(t, {
                WV: function() {
                    return u
                },
                jH: function() {
                    return a
                }
            });
            var r = n(7896),
                o = n(2784),
                i = n(28316),
                l = n(49815);
            let u = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                let n = (0, o.forwardRef)((e, n) => {
                    let {
                        asChild: i,
                        ...u
                    } = e, a = i ? l.g7 : t;
                    return (0, o.useEffect)(() => {
                        window[Symbol.for("radix-ui")] = !0
                    }, []), (0, o.createElement)(a, (0, r.Z)({}, u, {
                        ref: n
                    }))
                });
                return n.displayName = `Primitive.${t}`, { ...e,
                    [t]: n
                }
            }, {});

            function a(e, t) {
                e && (0, i.flushSync)(() => e.dispatchEvent(t))
            }
        },
        49815: function(e, t, n) {
            n.d(t, {
                A4: function() {
                    return a
                },
                g7: function() {
                    return l
                }
            });
            var r = n(7896),
                o = n(2784),
                i = n(62656);
            let l = (0, o.forwardRef)((e, t) => {
                let {
                    children: n,
                    ...i
                } = e, l = o.Children.toArray(n), a = l.find(c);
                if (a) {
                    let e = a.props.children,
                        n = l.map(t => t !== a ? t : o.Children.count(e) > 1 ? o.Children.only(null) : (0, o.isValidElement)(e) ? e.props.children : null);
                    return (0, o.createElement)(u, (0, r.Z)({}, i, {
                        ref: t
                    }), (0, o.isValidElement)(e) ? (0, o.cloneElement)(e, void 0, n) : null)
                }
                return (0, o.createElement)(u, (0, r.Z)({}, i, {
                    ref: t
                }), n)
            });
            l.displayName = "Slot";
            let u = (0, o.forwardRef)((e, t) => {
                let {
                    children: n,
                    ...r
                } = e;
                return (0, o.isValidElement)(n) ? (0, o.cloneElement)(n, { ... function(e, t) {
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
                    ref: t ? (0, i.F)(t, n.ref) : n.ref
                }) : o.Children.count(n) > 1 ? o.Children.only(null) : null
            });
            u.displayName = "SlotClone";
            let a = ({
                children: e
            }) => (0, o.createElement)(o.Fragment, null, e);

            function c(e) {
                return (0, o.isValidElement)(e) && e.type === a
            }
        },
        37921: function(e, t, n) {
            n.d(t, {
                Eh: function() {
                    return Z
                },
                VY: function() {
                    return z
                },
                h_: function() {
                    return B
                },
                zt: function() {
                    return I
                },
                fC: function() {
                    return V
                },
                xz: function() {
                    return H
                }
            });
            var r = n(7896),
                o = n(2784),
                i = n(17998),
                l = n(62656),
                u = n(92211),
                a = n(35999),
                c = n(23372),
                f = n(94465),
                s = n(78773),
                d = n(79616),
                p = n(72714),
                h = n(49815),
                m = n(87695);
            let v = (0, o.forwardRef)((e, t) => (0, o.createElement)(p.WV.span, (0, r.Z)({}, e, {
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
                }))),
                [g, y] = (0, u.b)("Tooltip", [f.D7]),
                b = (0, f.D7)(),
                w = "tooltip.open",
                [x, E] = g("TooltipProvider"),
                C = "Tooltip",
                [T, R] = g(C),
                A = "TooltipTrigger",
                O = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeTooltip: n,
                        ...u
                    } = e, a = R(A, n), c = E(A, n), s = b(n), d = (0, o.useRef)(null), h = (0, l.e)(t, d, a.onTriggerChange), m = (0, o.useRef)(!1), v = (0, o.useRef)(!1), g = (0, o.useCallback)(() => m.current = !1, []);
                    return (0, o.useEffect)(() => () => document.removeEventListener("pointerup", g), [g]), (0, o.createElement)(f.ee, (0, r.Z)({
                        asChild: !0
                    }, s), (0, o.createElement)(p.WV.button, (0, r.Z)({
                        "aria-describedby": a.open ? a.contentId : void 0,
                        "data-state": a.stateAttribute
                    }, u, {
                        ref: h,
                        onPointerMove: (0, i.M)(e.onPointerMove, e => {
                            "touch" === e.pointerType || v.current || c.isPointerInTransitRef.current || (a.onTriggerEnter(), v.current = !0)
                        }),
                        onPointerLeave: (0, i.M)(e.onPointerLeave, () => {
                            a.onTriggerLeave(), v.current = !1
                        }),
                        onPointerDown: (0, i.M)(e.onPointerDown, () => {
                            m.current = !0, document.addEventListener("pointerup", g, {
                                once: !0
                            })
                        }),
                        onFocus: (0, i.M)(e.onFocus, () => {
                            m.current || a.onOpen()
                        }),
                        onBlur: (0, i.M)(e.onBlur, a.onClose),
                        onClick: (0, i.M)(e.onClick, a.onClose)
                    })))
                }),
                P = "TooltipPortal",
                [k, S] = g(P, {
                    forceMount: void 0
                }),
                L = "TooltipContent",
                M = (0, o.forwardRef)((e, t) => {
                    let n = S(L, e.__scopeTooltip),
                        {
                            forceMount: i = n.forceMount,
                            side: l = "top",
                            ...u
                        } = e,
                        a = R(L, e.__scopeTooltip);
                    return (0, o.createElement)(d.z, {
                        present: i || a.open
                    }, a.disableHoverableContent ? (0, o.createElement)(N, (0, r.Z)({
                        side: l
                    }, u, {
                        ref: t
                    })) : (0, o.createElement)(D, (0, r.Z)({
                        side: l
                    }, u, {
                        ref: t
                    })))
                }),
                D = (0, o.forwardRef)((e, t) => {
                    let n = R(L, e.__scopeTooltip),
                        i = E(L, e.__scopeTooltip),
                        u = (0, o.useRef)(null),
                        a = (0, l.e)(t, u),
                        [c, f] = (0, o.useState)(null),
                        {
                            trigger: s,
                            onClose: d
                        } = n,
                        p = u.current,
                        {
                            onPointerInTransitChange: h
                        } = i,
                        m = (0, o.useCallback)(() => {
                            f(null), h(!1)
                        }, [h]),
                        v = (0, o.useCallback)((e, t) => {
                            let n = e.currentTarget,
                                r = {
                                    x: e.clientX,
                                    y: e.clientY
                                },
                                o = function(e, t) {
                                    let n = Math.abs(t.top - e.y),
                                        r = Math.abs(t.bottom - e.y),
                                        o = Math.abs(t.right - e.x),
                                        i = Math.abs(t.left - e.x);
                                    switch (Math.min(n, r, o, i)) {
                                        case i:
                                            return "left";
                                        case o:
                                            return "right";
                                        case n:
                                            return "top";
                                        case r:
                                            return "bottom";
                                        default:
                                            throw Error("unreachable")
                                    }
                                }(r, n.getBoundingClientRect());
                            f(function(e) {
                                let t = e.slice();
                                return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0),
                                    function(e) {
                                        if (e.length <= 1) return e.slice();
                                        let t = [];
                                        for (let n = 0; n < e.length; n++) {
                                            let r = e[n];
                                            for (; t.length >= 2;) {
                                                let e = t[t.length - 1],
                                                    n = t[t.length - 2];
                                                if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
                                                else break
                                            }
                                            t.push(r)
                                        }
                                        t.pop();
                                        let n = [];
                                        for (let t = e.length - 1; t >= 0; t--) {
                                            let r = e[t];
                                            for (; n.length >= 2;) {
                                                let e = n[n.length - 1],
                                                    t = n[n.length - 2];
                                                if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
                                                else break
                                            }
                                            n.push(r)
                                        }
                                        return (n.pop(), 1 === t.length && 1 === n.length && t[0].x === n[0].x && t[0].y === n[0].y) ? t : t.concat(n)
                                    }(t)
                            }([... function(e, t, n = 5) {
                                let r = [];
                                switch (t) {
                                    case "top":
                                        r.push({
                                            x: e.x - n,
                                            y: e.y + n
                                        }, {
                                            x: e.x + n,
                                            y: e.y + n
                                        });
                                        break;
                                    case "bottom":
                                        r.push({
                                            x: e.x - n,
                                            y: e.y - n
                                        }, {
                                            x: e.x + n,
                                            y: e.y - n
                                        });
                                        break;
                                    case "left":
                                        r.push({
                                            x: e.x + n,
                                            y: e.y - n
                                        }, {
                                            x: e.x + n,
                                            y: e.y + n
                                        });
                                        break;
                                    case "right":
                                        r.push({
                                            x: e.x - n,
                                            y: e.y - n
                                        }, {
                                            x: e.x - n,
                                            y: e.y + n
                                        })
                                }
                                return r
                            }(r, o), ... function(e) {
                                let {
                                    top: t,
                                    right: n,
                                    bottom: r,
                                    left: o
                                } = e;
                                return [{
                                    x: o,
                                    y: t
                                }, {
                                    x: n,
                                    y: t
                                }, {
                                    x: n,
                                    y: r
                                }, {
                                    x: o,
                                    y: r
                                }]
                            }(t.getBoundingClientRect())])), h(!0)
                        }, [h]);
                    return (0, o.useEffect)(() => () => m(), [m]), (0, o.useEffect)(() => {
                        if (s && p) {
                            let e = e => v(e, p),
                                t = e => v(e, s);
                            return s.addEventListener("pointerleave", e), p.addEventListener("pointerleave", t), () => {
                                s.removeEventListener("pointerleave", e), p.removeEventListener("pointerleave", t)
                            }
                        }
                    }, [s, p, v, m]), (0, o.useEffect)(() => {
                        if (c) {
                            let e = e => {
                                let t = e.target,
                                    n = {
                                        x: e.clientX,
                                        y: e.clientY
                                    },
                                    r = (null == s ? void 0 : s.contains(t)) || (null == p ? void 0 : p.contains(t)),
                                    o = ! function(e, t) {
                                        let {
                                            x: n,
                                            y: r
                                        } = e, o = !1;
                                        for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                                            let l = t[e].x,
                                                u = t[e].y,
                                                a = t[i].x,
                                                c = t[i].y;
                                            u > r != c > r && n < (a - l) * (r - u) / (c - u) + l && (o = !o)
                                        }
                                        return o
                                    }(n, c);
                                r ? m() : o && (m(), d())
                            };
                            return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
                        }
                    }, [s, p, c, d, m]), (0, o.createElement)(N, (0, r.Z)({}, e, {
                        ref: a
                    }))
                }),
                [_, W] = g(C, {
                    isInside: !1
                }),
                N = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeTooltip: n,
                        children: i,
                        "aria-label": l,
                        onEscapeKeyDown: u,
                        onPointerDownOutside: c,
                        ...s
                    } = e, d = R(L, n), p = b(n), {
                        onClose: m
                    } = d;
                    return (0, o.useEffect)(() => (document.addEventListener(w, m), () => document.removeEventListener(w, m)), [m]), (0, o.useEffect)(() => {
                        if (d.trigger) {
                            let e = e => {
                                let t = e.target;
                                null != t && t.contains(d.trigger) && m()
                            };
                            return window.addEventListener("scroll", e, {
                                capture: !0
                            }), () => window.removeEventListener("scroll", e, {
                                capture: !0
                            })
                        }
                    }, [d.trigger, m]), (0, o.createElement)(a.XB, {
                        asChild: !0,
                        disableOutsidePointerEvents: !1,
                        onEscapeKeyDown: u,
                        onPointerDownOutside: c,
                        onFocusOutside: e => e.preventDefault(),
                        onDismiss: m
                    }, (0, o.createElement)(f.VY, (0, r.Z)({
                        "data-state": d.stateAttribute
                    }, p, s, {
                        ref: t,
                        style: { ...s.style,
                            "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                        }
                    }), (0, o.createElement)(h.A4, null, i), (0, o.createElement)(_, {
                        scope: n,
                        isInside: !0
                    }, (0, o.createElement)(v, {
                        id: d.contentId,
                        role: "tooltip"
                    }, l || i))))
                }),
                F = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeTooltip: n,
                        ...i
                    } = e, l = b(n);
                    return W("TooltipArrow", n).isInside ? null : (0, o.createElement)(f.Eh, (0, r.Z)({}, l, i, {
                        ref: t
                    }))
                }),
                I = e => {
                    let {
                        __scopeTooltip: t,
                        delayDuration: n = 700,
                        skipDelayDuration: r = 300,
                        disableHoverableContent: i = !1,
                        children: l
                    } = e, [u, a] = (0, o.useState)(!0), c = (0, o.useRef)(!1), f = (0, o.useRef)(0);
                    return (0, o.useEffect)(() => {
                        let e = f.current;
                        return () => window.clearTimeout(e)
                    }, []), (0, o.createElement)(x, {
                        scope: t,
                        isOpenDelayed: u,
                        delayDuration: n,
                        onOpen: (0, o.useCallback)(() => {
                            window.clearTimeout(f.current), a(!1)
                        }, []),
                        onClose: (0, o.useCallback)(() => {
                            window.clearTimeout(f.current), f.current = window.setTimeout(() => a(!0), r)
                        }, [r]),
                        isPointerInTransitRef: c,
                        onPointerInTransitChange: (0, o.useCallback)(e => {
                            c.current = e
                        }, []),
                        disableHoverableContent: i
                    }, l)
                },
                V = e => {
                    let {
                        __scopeTooltip: t,
                        children: n,
                        open: r,
                        defaultOpen: i = !1,
                        onOpenChange: l,
                        disableHoverableContent: u,
                        delayDuration: a
                    } = e, s = E(C, e.__scopeTooltip), d = b(t), [p, h] = (0, o.useState)(null), v = (0, c.M)(), g = (0, o.useRef)(0), y = null != u ? u : s.disableHoverableContent, x = null != a ? a : s.delayDuration, R = (0, o.useRef)(!1), [A = !1, O] = (0, m.T)({
                        prop: r,
                        defaultProp: i,
                        onChange: e => {
                            e ? (s.onOpen(), document.dispatchEvent(new CustomEvent(w))) : s.onClose(), null == l || l(e)
                        }
                    }), P = (0, o.useMemo)(() => A ? R.current ? "delayed-open" : "instant-open" : "closed", [A]), k = (0, o.useCallback)(() => {
                        window.clearTimeout(g.current), R.current = !1, O(!0)
                    }, [O]), S = (0, o.useCallback)(() => {
                        window.clearTimeout(g.current), O(!1)
                    }, [O]), L = (0, o.useCallback)(() => {
                        window.clearTimeout(g.current), g.current = window.setTimeout(() => {
                            R.current = !0, O(!0)
                        }, x)
                    }, [x, O]);
                    return (0, o.useEffect)(() => () => window.clearTimeout(g.current), []), (0, o.createElement)(f.fC, d, (0, o.createElement)(T, {
                        scope: t,
                        contentId: v,
                        open: A,
                        stateAttribute: P,
                        trigger: p,
                        onTriggerChange: h,
                        onTriggerEnter: (0, o.useCallback)(() => {
                            s.isOpenDelayed ? L() : k()
                        }, [s.isOpenDelayed, L, k]),
                        onTriggerLeave: (0, o.useCallback)(() => {
                            y ? S() : window.clearTimeout(g.current)
                        }, [S, y]),
                        onOpen: k,
                        onClose: S,
                        disableHoverableContent: y
                    }, n))
                },
                H = O,
                B = e => {
                    let {
                        __scopeTooltip: t,
                        forceMount: n,
                        children: r,
                        container: i
                    } = e, l = R(P, t);
                    return (0, o.createElement)(k, {
                        scope: t,
                        forceMount: n
                    }, (0, o.createElement)(d.z, {
                        present: n || l.open
                    }, (0, o.createElement)(s.h, {
                        asChild: !0,
                        container: i
                    }, r)))
                },
                z = M,
                Z = F
        },
        27757: function(e, t, n) {
            n.d(t, {
                W: function() {
                    return o
                }
            });
            var r = n(2784);

            function o(e) {
                let t = (0, r.useRef)(e);
                return (0, r.useEffect)(() => {
                    t.current = e
                }), (0, r.useMemo)(() => (...e) => {
                    var n;
                    return null === (n = t.current) || void 0 === n ? void 0 : n.call(t, ...e)
                }, [])
            }
        },
        87695: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return i
                }
            });
            var r = n(2784),
                o = n(27757);

            function i({
                prop: e,
                defaultProp: t,
                onChange: n = () => {}
            }) {
                let [i, l] = function({
                    defaultProp: e,
                    onChange: t
                }) {
                    let n = (0, r.useState)(e),
                        [i] = n,
                        l = (0, r.useRef)(i),
                        u = (0, o.W)(t);
                    return (0, r.useEffect)(() => {
                        l.current !== i && (u(i), l.current = i)
                    }, [i, l, u]), n
                }({
                    defaultProp: t,
                    onChange: n
                }), u = void 0 !== e, a = u ? e : i, c = (0, o.W)(n);
                return [a, (0, r.useCallback)(t => {
                    if (u) {
                        let n = "function" == typeof t ? t(e) : t;
                        n !== e && c(n)
                    } else l(t)
                }, [u, e, l, c])]
            }
        },
        61644: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return o
                }
            });
            var r = n(2784);
            let o = (null == globalThis ? void 0 : globalThis.document) ? r.useLayoutEffect : () => {}
        },
        35019: function(e, t, n) {
            n.d(t, {
                t: function() {
                    return i
                }
            });
            var r = n(2784),
                o = n(61644);

            function i(e) {
                let [t, n] = (0, r.useState)(void 0);
                return (0, o.b)(() => {
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
            }
        },
        22970: function(e, t, n) {
            n.d(t, {
                Jh: function() {
                    return l
                },
                XA: function() {
                    return u
                },
                _T: function() {
                    return o
                },
                ev: function() {
                    return a
                },
                mG: function() {
                    return i
                },
                pi: function() {
                    return r
                }
            });
            var r = function() {
                return (r = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            };

            function o(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) 0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
                return n
            }

            function i(e, t, n, r) {
                return new(n || (n = Promise))(function(o, i) {
                    function l(e) {
                        try {
                            a(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        try {
                            a(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        var t;
                        e.done ? o(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                            e(t)
                        })).then(l, u)
                    }
                    a((r = r.apply(e, t || [])).next())
                })
            }

            function l(e, t) {
                var n, r, o, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    },
                    l = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                return l.next = u(0), l.throw = u(1), l.return = u(2), "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this
                }), l;

                function u(u) {
                    return function(a) {
                        return function(u) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; l && (l = 0, u[0] && (i = 0)), i;) try {
                                if (n = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
                                switch (r = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                                    case 0:
                                    case 1:
                                        o = u;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: u[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++, r = u[1], u = [0];
                                        continue;
                                    case 7:
                                        u = i.ops.pop(), i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                            i.label = u[1];
                                            break
                                        }
                                        if (6 === u[0] && i.label < o[1]) {
                                            i.label = o[1], o = u;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2], i.ops.push(u);
                                            break
                                        }
                                        o[2] && i.ops.pop(), i.trys.pop();
                                        continue
                                }
                                u = t.call(e, i)
                            } catch (e) {
                                u = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & u[0]) throw u[1];
                            return {
                                value: u[0] ? u[1] : void 0,
                                done: !0
                            }
                        }([u, a])
                    }
                }
            }

            function u(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function a(e, t, n) {
                if (n || 2 == arguments.length)
                    for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                return e.concat(r || Array.prototype.slice.call(t))
            }
            "function" == typeof SuppressedError && SuppressedError
        }
    }
]);