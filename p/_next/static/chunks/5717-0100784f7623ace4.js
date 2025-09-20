try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "eec1239a-6308-43d5-ac20-6d1270fb5f27", e._sentryDebugIdIdentifier = "sentry-dbid-eec1239a-6308-43d5-ac20-6d1270fb5f27")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5717], {
        10219: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return C
                }
            });
            let r = n(43219),
                o = n(16794),
                i = n(52322),
                a = o._(n(2784)),
                l = r._(n(68792)),
                s = n(96648),
                u = n(34407),
                c = n(41897);
            n(71388);
            let d = n(14079);

            function f(e) {
                return "/" === e[0] ? e.slice(1) : e
            }
            let p = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                },
                m = new Set,
                v = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                h = new Map([
                    ["default", function(e) {
                        var t;
                        let {
                            config: n,
                            src: r,
                            width: o,
                            quality: i
                        } = e, a = i || (null == (t = n.qualities) ? void 0 : t.reduce((e, t) => Math.abs(t - 75) < Math.abs(e - 75) ? t : e)) || 75;
                        return r.endsWith(".svg") && !n.dangerouslyAllowSVG ? r : (0, d.normalizePathTrailingSlash)(n.path) + "?url=" + encodeURIComponent(r) + "&w=" + o + "&q=" + a
                    }],
                    ["imgix", function(e) {
                        let {
                            config: t,
                            src: n,
                            width: r,
                            quality: o
                        } = e, i = new URL("" + t.path + f(n)), a = i.searchParams;
                        return a.set("auto", a.getAll("auto").join(",") || "format"), a.set("fit", a.get("fit") || "max"), a.set("w", a.get("w") || r.toString()), o && a.set("q", o.toString()), i.href
                    }],
                    ["cloudinary", function(e) {
                        let {
                            config: t,
                            src: n,
                            width: r,
                            quality: o
                        } = e, i = ["f_auto", "c_limit", "w_" + r, "q_" + (o || "auto")].join(",") + "/";
                        return "" + t.path + i + f(n)
                    }],
                    ["akamai", function(e) {
                        let {
                            config: t,
                            src: n,
                            width: r
                        } = e;
                        return "" + t.path + f(n) + "?imwidth=" + r
                    }],
                    ["custom", function(e) {
                        let {
                            src: t
                        } = e;
                        throw Error('Image with src "' + t + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
                    }]
                ]);

            function g(e) {
                return void 0 !== e.default
            }

            function y(e) {
                let {
                    config: t,
                    src: n,
                    unoptimized: r,
                    layout: o,
                    width: i,
                    quality: a,
                    sizes: l,
                    loader: s
                } = e;
                if (r) return {
                    src: n,
                    srcSet: void 0,
                    sizes: void 0
                };
                let {
                    widths: u,
                    kind: c
                } = function(e, t, n, r) {
                    let {
                        deviceSizes: o,
                        allSizes: i
                    } = e;
                    if (r && ("fill" === n || "responsive" === n)) {
                        let e = /(^|\s)(1?\d?\d)vw/g,
                            t = [];
                        for (let n; n = e.exec(r); n) t.push(parseInt(n[2]));
                        if (t.length) {
                            let e = .01 * Math.min(...t);
                            return {
                                widths: i.filter(t => t >= o[0] * e),
                                kind: "w"
                            }
                        }
                        return {
                            widths: i,
                            kind: "w"
                        }
                    }
                    return "number" != typeof t || "fill" === n || "responsive" === n ? {
                        widths: o,
                        kind: "w"
                    } : {
                        widths: [...new Set([t, 2 * t].map(e => i.find(t => t >= e) || i[i.length - 1]))],
                        kind: "x"
                    }
                }(t, i, o, l), d = u.length - 1;
                return {
                    sizes: l || "w" !== c ? l : "100vw",
                    srcSet: u.map((e, r) => s({
                        config: t,
                        src: n,
                        quality: a,
                        width: e
                    }) + " " + ("w" === c ? e : r + 1) + c).join(", "),
                    src: s({
                        config: t,
                        src: n,
                        quality: a,
                        width: u[d]
                    })
                }
            }

            function b(e) {
                return "number" == typeof e ? e : "string" == typeof e ? parseInt(e, 10) : void 0
            }

            function w(e) {
                var t;
                let n = (null == (t = e.config) ? void 0 : t.loader) || "default",
                    r = h.get(n);
                if (r) return r(e);
                throw Error('Unknown "loader" found in "next.config.js". Expected: ' + s.VALID_LOADERS.join(", ") + ". Received: " + n)
            }

            function E(e, t, n, r, o, i) {
                e && e.src !== v && e["data-loaded-src"] !== t && (e["data-loaded-src"] = t, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
                    if (e.parentNode && (m.add(t), "blur" === r && i(!0), null == o ? void 0 : o.current)) {
                        let {
                            naturalWidth: t,
                            naturalHeight: n
                        } = e;
                        o.current({
                            naturalWidth: t,
                            naturalHeight: n
                        })
                    }
                }))
            }
            let x = e => {
                let {
                    imgAttributes: t,
                    heightInt: n,
                    widthInt: r,
                    qualityInt: o,
                    layout: l,
                    className: s,
                    imgStyle: u,
                    blurStyle: c,
                    isLazy: d,
                    placeholder: f,
                    loading: p,
                    srcString: m,
                    config: v,
                    unoptimized: h,
                    loader: g,
                    onLoadingCompleteRef: b,
                    setBlurComplete: w,
                    setIntersection: x,
                    onLoad: C,
                    onError: N,
                    isVisible: R,
                    noscriptSizes: S,
                    ...j
                } = e;
                return p = d ? "lazy" : p, (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("img", { ...j,
                        ...t,
                        decoding: "async",
                        "data-nimg": l,
                        className: s,
                        style: { ...u,
                            ...c
                        },
                        ref: (0, a.useCallback)(e => {
                            x(e), (null == e ? void 0 : e.complete) && E(e, m, l, f, b, w)
                        }, [x, m, l, f, b, w]),
                        onLoad: e => {
                            E(e.currentTarget, m, l, f, b, w), C && C(e)
                        },
                        onError: e => {
                            "blur" === f && w(!0), N && N(e)
                        }
                    }), (d || "blur" === f) && (0, i.jsx)("noscript", {
                        children: (0, i.jsx)("img", { ...j,
                            loading: p,
                            decoding: "async",
                            "data-nimg": l,
                            style: u,
                            className: s,
                            ...y({
                                config: v,
                                src: m,
                                unoptimized: h,
                                layout: l,
                                width: r,
                                quality: o,
                                sizes: S,
                                loader: g
                            })
                        })
                    })]
                })
            };

            function C(e) {
                var t;
                let n, {
                        src: r,
                        sizes: o,
                        unoptimized: d = !1,
                        priority: f = !1,
                        loading: h,
                        lazyRoot: E = null,
                        lazyBoundary: C,
                        className: N,
                        quality: R,
                        width: S,
                        height: j,
                        style: D,
                        objectFit: A,
                        objectPosition: O,
                        onLoadingComplete: P,
                        placeholder: k = "empty",
                        blurDataURL: I,
                        ...L
                    } = e,
                    T = (0, a.useContext)(c.ImageConfigContext),
                    _ = (0, a.useMemo)(() => {
                        var e;
                        let t = p || T || s.imageConfigDefault,
                            n = [...t.deviceSizes, ...t.imageSizes].sort((e, t) => e - t),
                            r = t.deviceSizes.sort((e, t) => e - t),
                            o = null == (e = t.qualities) ? void 0 : e.sort((e, t) => e - t);
                        return { ...t,
                            allSizes: n,
                            deviceSizes: r,
                            qualities: o
                        }
                    }, [T]),
                    M = o ? "responsive" : "intrinsic";
                "layout" in L && (L.layout && (M = L.layout), delete L.layout);
                let F = w;
                if ("loader" in L) {
                    if (L.loader) {
                        let e = L.loader;
                        F = t => {
                            let {
                                config: n,
                                ...r
                            } = t;
                            return e(r)
                        }
                    }
                    delete L.loader
                }
                let W = "";
                if ("object" == typeof(t = r) && (g(t) || void 0 !== t.src)) {
                    let e = g(r) ? r.default : r;
                    if (!e.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
                    if (I = I || e.blurDataURL, W = e.src, (!M || "fill" !== M) && (j = j || e.height, S = S || e.width, !e.height || !e.width)) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e))
                }
                let z = !f && ("lazy" === h || void 0 === h);
                ((r = "string" == typeof r ? r : W).startsWith("data:") || r.startsWith("blob:")) && (d = !0, z = !1), m.has(r) && (z = !1), _.unoptimized && (d = !0);
                let [B, U] = (0, a.useState)(!1), [$, q, V] = (0, u.useIntersection)({
                    rootRef: E,
                    rootMargin: C || "200px",
                    disabled: !z
                }), K = !z || q, H = {
                    boxSizing: "border-box",
                    display: "block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0
                }, Y = {
                    boxSizing: "border-box",
                    display: "block",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0
                }, X = !1, Z = b(S), G = b(j), J = b(R), Q = Object.assign({}, D, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    boxSizing: "border-box",
                    padding: 0,
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: 0,
                    height: 0,
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                    objectFit: A,
                    objectPosition: O
                }), ee = "blur" !== k || B ? {} : {
                    backgroundSize: A || "cover",
                    backgroundPosition: O || "0% 0%",
                    filter: "blur(20px)",
                    backgroundImage: 'url("' + I + '")'
                };
                if ("fill" === M) H.display = "block", H.position = "absolute", H.top = 0, H.left = 0, H.bottom = 0, H.right = 0;
                else if (void 0 !== Z && void 0 !== G) {
                    let e = G / Z,
                        t = isNaN(e) ? "100%" : "" + 100 * e + "%";
                    "responsive" === M ? (H.display = "block", H.position = "relative", X = !0, Y.paddingTop = t) : "intrinsic" === M ? (H.display = "inline-block", H.position = "relative", H.maxWidth = "100%", X = !0, Y.maxWidth = "100%", n = "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27" + Z + "%27%20height=%27" + G + "%27/%3e") : "fixed" === M && (H.display = "inline-block", H.position = "relative", H.width = Z, H.height = G)
                }
                let et = {
                    src: v,
                    srcSet: void 0,
                    sizes: void 0
                };
                K && (et = y({
                    config: _,
                    src: r,
                    unoptimized: d,
                    layout: M,
                    width: Z,
                    quality: J,
                    sizes: o,
                    loader: F
                }));
                let en = r,
                    er = {
                        imageSrcSet: et.srcSet,
                        imageSizes: et.sizes,
                        crossOrigin: L.crossOrigin,
                        referrerPolicy: L.referrerPolicy
                    },
                    eo = a.default.useLayoutEffect,
                    ei = (0, a.useRef)(P),
                    ea = (0, a.useRef)(r);
                (0, a.useEffect)(() => {
                    ei.current = P
                }, [P]), eo(() => {
                    ea.current !== r && (V(), ea.current = r)
                }, [V, r]);
                let el = {
                    isLazy: z,
                    imgAttributes: et,
                    heightInt: G,
                    widthInt: Z,
                    qualityInt: J,
                    layout: M,
                    className: N,
                    imgStyle: Q,
                    blurStyle: ee,
                    loading: h,
                    config: _,
                    unoptimized: d,
                    placeholder: k,
                    loader: F,
                    srcString: en,
                    onLoadingCompleteRef: ei,
                    setBlurComplete: U,
                    setIntersection: $,
                    isVisible: K,
                    noscriptSizes: o,
                    ...L
                };
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)("span", {
                        style: H,
                        children: [X ? (0, i.jsx)("span", {
                            style: Y,
                            children: n ? (0, i.jsx)("img", {
                                style: {
                                    display: "block",
                                    maxWidth: "100%",
                                    width: "initial",
                                    height: "initial",
                                    background: "none",
                                    opacity: 1,
                                    border: 0,
                                    margin: 0,
                                    padding: 0
                                },
                                alt: "",
                                "aria-hidden": !0,
                                src: n
                            }) : null
                        }) : null, (0, i.jsx)(x, { ...el
                        })]
                    }), f ? (0, i.jsx)(l.default, {
                        children: (0, i.jsx)("link", {
                            rel: "preload",
                            as: "image",
                            href: et.srcSet ? void 0 : et.src,
                            ...er
                        }, "__nimg-" + et.src + et.srcSet + et.sizes)
                    }) : null]
                })
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        38421: function(e, t, n) {
            e.exports = n(10219)
        },
        39479: function(e, t, n) {
            "use strict";
            let r;
            n.d(t, {
                x8: function() {
                    return eH
                },
                VY: function() {
                    return eV
                },
                aV: function() {
                    return eq
                },
                h_: function() {
                    return e$
                },
                fC: function() {
                    return eU
                },
                Dx: function() {
                    return eK
                }
            });
            var o, i = n(2784),
                a = n.t(i, 2);

            function l(e, t, {
                checkForDefaultPrevented: n = !0
            } = {}) {
                return function(r) {
                    if (e ? .(r), !1 === n || !r.defaultPrevented) return t ? .(r)
                }
            }

            function s(...e) {
                return t => e.forEach(e => {
                    "function" == typeof e ? e(t) : null != e && (e.current = t)
                })
            }

            function u(...e) {
                return i.useCallback(s(...e), e)
            }
            var c = n(52322),
                d = globalThis ? .document ? i.useLayoutEffect : () => {},
                f = a["useId".toString()] || (() => void 0),
                p = 0;

            function m(e) {
                let [t, n] = i.useState(f());
                return d(() => {
                    e || n(e => e ? ? String(p++))
                }, [e]), e || (t ? `radix-${t}` : "")
            }

            function v(e) {
                let t = i.useRef(e);
                return i.useEffect(() => {
                    t.current = e
                }), i.useMemo(() => (...e) => t.current ? .(...e), [])
            }
            var h = n(28316),
                g = i.forwardRef((e, t) => {
                    let {
                        children: n,
                        ...r
                    } = e, o = i.Children.toArray(n), a = o.find(w);
                    if (a) {
                        let e = a.props.children,
                            n = o.map(t => t !== a ? t : i.Children.count(e) > 1 ? i.Children.only(null) : i.isValidElement(e) ? e.props.children : null);
                        return (0, c.jsx)(y, { ...r,
                            ref: t,
                            children: i.isValidElement(e) ? i.cloneElement(e, void 0, n) : null
                        })
                    }
                    return (0, c.jsx)(y, { ...r,
                        ref: t,
                        children: n
                    })
                });
            g.displayName = "Slot";
            var y = i.forwardRef((e, t) => {
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
                        ref: t ? s(t, a) : a
                    })
                }
                return i.Children.count(n) > 1 ? i.Children.only(null) : null
            });
            y.displayName = "SlotClone";
            var b = ({
                children: e
            }) => (0, c.jsx)(c.Fragment, {
                children: e
            });

            function w(e) {
                return i.isValidElement(e) && e.type === b
            }
            var E = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                    let n = i.forwardRef((e, n) => {
                        let {
                            asChild: r,
                            ...o
                        } = e, i = r ? g : t;
                        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, c.jsx)(i, { ...o,
                            ref: n
                        })
                    });
                    return n.displayName = `Primitive.${t}`, { ...e,
                        [t]: n
                    }
                }, {}),
                x = "dismissableLayer.update",
                C = i.createContext({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                N = i.forwardRef((e, t) => {
                    let {
                        disableOutsidePointerEvents: n = !1,
                        onEscapeKeyDown: r,
                        onPointerDownOutside: a,
                        onFocusOutside: s,
                        onInteractOutside: d,
                        onDismiss: f,
                        ...p
                    } = e, m = i.useContext(C), [h, g] = i.useState(null), y = h ? .ownerDocument ? ? globalThis ? .document, [, b] = i.useState({}), w = u(t, e => g(e)), N = Array.from(m.layers), [j] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1), D = N.indexOf(j), A = h ? N.indexOf(h) : -1, O = m.layersWithOutsidePointerEventsDisabled.size > 0, P = A >= D, k = function(e, t = globalThis ? .document) {
                        let n = v(e),
                            r = i.useRef(!1),
                            o = i.useRef(() => {});
                        return i.useEffect(() => {
                            let e = e => {
                                    if (e.target && !r.current) {
                                        let r = function() {
                                                S("dismissableLayer.pointerDownOutside", n, i, {
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
                        !P || n || (a ? .(e), d ? .(e), e.defaultPrevented || f ? .())
                    }, y), I = function(e, t = globalThis ? .document) {
                        let n = v(e),
                            r = i.useRef(!1);
                        return i.useEffect(() => {
                            let e = e => {
                                e.target && !r.current && S("dismissableLayer.focusOutside", n, {
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
                        [...m.branches].some(e => e.contains(t)) || (s ? .(e), d ? .(e), e.defaultPrevented || f ? .())
                    }, y);
                    return ! function(e, t = globalThis ? .document) {
                        let n = v(e);
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
                        A !== m.layers.size - 1 || (r ? .(e), !e.defaultPrevented && f && (e.preventDefault(), f()))
                    }, y), i.useEffect(() => {
                        if (h) return n && (0 === m.layersWithOutsidePointerEventsDisabled.size && (o = y.body.style.pointerEvents, y.body.style.pointerEvents = "none"), m.layersWithOutsidePointerEventsDisabled.add(h)), m.layers.add(h), R(), () => {
                            n && 1 === m.layersWithOutsidePointerEventsDisabled.size && (y.body.style.pointerEvents = o)
                        }
                    }, [h, y, n, m]), i.useEffect(() => () => {
                        h && (m.layers.delete(h), m.layersWithOutsidePointerEventsDisabled.delete(h), R())
                    }, [h, m]), i.useEffect(() => {
                        let e = () => b({});
                        return document.addEventListener(x, e), () => document.removeEventListener(x, e)
                    }, []), (0, c.jsx)(E.div, { ...p,
                        ref: w,
                        style: {
                            pointerEvents: O ? P ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: l(e.onFocusCapture, I.onFocusCapture),
                        onBlurCapture: l(e.onBlurCapture, I.onBlurCapture),
                        onPointerDownCapture: l(e.onPointerDownCapture, k.onPointerDownCapture)
                    })
                });

            function R() {
                let e = new CustomEvent(x);
                document.dispatchEvent(e)
            }

            function S(e, t, n, {
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
                }), r) ? o && h.flushSync(() => o.dispatchEvent(i)): o.dispatchEvent(i)
            }
            N.displayName = "DismissableLayer", i.forwardRef((e, t) => {
                let n = i.useContext(C),
                    r = i.useRef(null),
                    o = u(t, r);
                return i.useEffect(() => {
                    let e = r.current;
                    if (e) return n.branches.add(e), () => {
                        n.branches.delete(e)
                    }
                }, [n.branches]), (0, c.jsx)(E.div, { ...e,
                    ref: o
                })
            }).displayName = "DismissableLayerBranch";
            var j = "focusScope.autoFocusOnMount",
                D = "focusScope.autoFocusOnUnmount",
                A = {
                    bubbles: !1,
                    cancelable: !0
                },
                O = i.forwardRef((e, t) => {
                    let {
                        loop: n = !1,
                        trapped: r = !1,
                        onMountAutoFocus: o,
                        onUnmountAutoFocus: a,
                        ...l
                    } = e, [s, d] = i.useState(null), f = v(o), p = v(a), m = i.useRef(null), h = u(t, e => d(e)), g = i.useRef({
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
                                    if (g.paused || !s) return;
                                    let t = e.target;
                                    s.contains(t) ? m.current = t : I(m.current, {
                                        select: !0
                                    })
                                },
                                t = function(e) {
                                    if (g.paused || !s) return;
                                    let t = e.relatedTarget;
                                    null === t || s.contains(t) || I(m.current, {
                                        select: !0
                                    })
                                };
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            let n = new MutationObserver(function(e) {
                                if (document.activeElement === document.body)
                                    for (let t of e) t.removedNodes.length > 0 && I(s)
                            });
                            return s && n.observe(s, {
                                childList: !0,
                                subtree: !0
                            }), () => {
                                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
                            }
                        }
                    }, [r, s, g.paused]), i.useEffect(() => {
                        if (s) {
                            L.add(g);
                            let e = document.activeElement;
                            if (!s.contains(e)) {
                                let t = new CustomEvent(j, A);
                                s.addEventListener(j, f), s.dispatchEvent(t), t.defaultPrevented || (function(e, {
                                    select: t = !1
                                } = {}) {
                                    let n = document.activeElement;
                                    for (let r of e)
                                        if (I(r, {
                                                select: t
                                            }), document.activeElement !== n) return
                                }(P(s).filter(e => "A" !== e.tagName), {
                                    select: !0
                                }), document.activeElement === e && I(s))
                            }
                            return () => {
                                s.removeEventListener(j, f), setTimeout(() => {
                                    let t = new CustomEvent(D, A);
                                    s.addEventListener(D, p), s.dispatchEvent(t), t.defaultPrevented || I(e ? ? document.body, {
                                        select: !0
                                    }), s.removeEventListener(D, p), L.remove(g)
                                }, 0)
                            }
                        }
                    }, [s, f, p, g]);
                    let y = i.useCallback(e => {
                        if (!n && !r || g.paused) return;
                        let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            o = document.activeElement;
                        if (t && o) {
                            let t = e.currentTarget,
                                [r, i] = function(e) {
                                    let t = P(e);
                                    return [k(t, e), k(t.reverse(), e)]
                                }(t);
                            r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), n && I(i, {
                                select: !0
                            })) : (e.preventDefault(), n && I(r, {
                                select: !0
                            })) : o === t && e.preventDefault()
                        }
                    }, [n, r, g.paused]);
                    return (0, c.jsx)(E.div, {
                        tabIndex: -1,
                        ...l,
                        ref: h,
                        onKeyDown: y
                    })
                });

            function P(e) {
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

            function k(e, t) {
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

            function I(e, {
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
            O.displayName = "FocusScope";
            var L = (r = [], {
                add(e) {
                    let t = r[0];
                    e !== t && t ? .pause(), (r = T(r, e)).unshift(e)
                },
                remove(e) {
                    r = T(r, e), r[0] ? .resume()
                }
            });

            function T(e, t) {
                let n = [...e],
                    r = n.indexOf(t);
                return -1 !== r && n.splice(r, 1), n
            }
            var _ = i.forwardRef((e, t) => {
                let {
                    container: n,
                    ...r
                } = e, [o, a] = i.useState(!1);
                d(() => a(!0), []);
                let l = n || o && globalThis ? .document ? .body;
                return l ? h.createPortal((0, c.jsx)(E.div, { ...r,
                    ref: t
                }), l) : null
            });
            _.displayName = "Portal";
            var M = e => {
                let t, n;
                let {
                    present: r,
                    children: o
                } = e, a = function(e) {
                    var t, n;
                    let [r, o] = i.useState(), a = i.useRef({}), l = i.useRef(e), s = i.useRef("none"), [u, c] = (t = e ? "mounted" : "unmounted", n = {
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
                        let e = F(a.current);
                        s.current = "mounted" === u ? e : "none"
                    }, [u]), d(() => {
                        let t = a.current,
                            n = l.current;
                        if (n !== e) {
                            let r = s.current,
                                o = F(t);
                            e ? c("MOUNT") : "none" === o || t ? .display === "none" ? c("UNMOUNT") : n && r !== o ? c("ANIMATION_OUT") : c("UNMOUNT"), l.current = e
                        }
                    }, [e, c]), d(() => {
                        if (r) {
                            let e = e => {
                                    let t = F(a.current).includes(e.animationName);
                                    e.target === r && t && h.flushSync(() => c("ANIMATION_END"))
                                },
                                t = e => {
                                    e.target === r && (s.current = F(a.current))
                                };
                            return r.addEventListener("animationstart", t), r.addEventListener("animationcancel", e), r.addEventListener("animationend", e), () => {
                                r.removeEventListener("animationstart", t), r.removeEventListener("animationcancel", e), r.removeEventListener("animationend", e)
                            }
                        }
                        c("ANIMATION_END")
                    }, [r, c]), {
                        isPresent: ["mounted", "unmountSuspended"].includes(u),
                        ref: i.useCallback(e => {
                            e && (a.current = getComputedStyle(e)), o(e)
                        }, [])
                    }
                }(r), l = "function" == typeof o ? o({
                    present: a.isPresent
                }) : i.Children.only(o), s = u(a.ref, (t = Object.getOwnPropertyDescriptor(l.props, "ref") ? .get) && "isReactWarning" in t && t.isReactWarning ? l.ref : (t = Object.getOwnPropertyDescriptor(l, "ref") ? .get) && "isReactWarning" in t && t.isReactWarning ? l.props.ref : l.props.ref || l.ref);
                return "function" == typeof o || a.isPresent ? i.cloneElement(l, {
                    ref: s
                }) : null
            };

            function F(e) {
                return e ? .animationName || "none"
            }
            M.displayName = "Presence";
            var W = 0;

            function z() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
            }
            var B = n(22970),
                U = n(95346),
                $ = n(22442),
                q = (0, n(64597)._)(),
                V = function() {},
                K = i.forwardRef(function(e, t) {
                    var n = i.useRef(null),
                        r = i.useState({
                            onScrollCapture: V,
                            onWheelCapture: V,
                            onTouchMoveCapture: V
                        }),
                        o = r[0],
                        a = r[1],
                        l = e.forwardProps,
                        s = e.children,
                        u = e.className,
                        c = e.removeScrollBar,
                        d = e.enabled,
                        f = e.shards,
                        p = e.sideCar,
                        m = e.noIsolation,
                        v = e.inert,
                        h = e.allowPinchZoom,
                        g = e.as,
                        y = e.gapMode,
                        b = (0, B._T)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        w = (0, $.q)([n, t]),
                        E = (0, B.pi)((0, B.pi)({}, b), o);
                    return i.createElement(i.Fragment, null, d && i.createElement(p, {
                        sideCar: q,
                        removeScrollBar: c,
                        shards: f,
                        noIsolation: m,
                        inert: v,
                        setCallbacks: a,
                        allowPinchZoom: !!h,
                        lockRef: n,
                        gapMode: y
                    }), l ? i.cloneElement(i.Children.only(s), (0, B.pi)((0, B.pi)({}, E), {
                        ref: w
                    })) : i.createElement(void 0 === g ? "div" : g, (0, B.pi)({}, E, {
                        className: u,
                        ref: w
                    }), s))
                });
            K.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, K.classNames = {
                fullWidth: U.zi,
                zeroRight: U.pF
            };
            var H = n(57758),
                Y = n(181),
                X = n(33225),
                Z = !1;
            if ("undefined" != typeof window) try {
                var G = Object.defineProperty({}, "passive", {
                    get: function() {
                        return Z = !0, !0
                    }
                });
                window.addEventListener("test", G, G), window.removeEventListener("test", G, G)
            } catch (e) {
                Z = !1
            }
            var J = !!Z && {
                    passive: !1
                },
                Q = function(e, t) {
                    var n = window.getComputedStyle(e);
                    return "hidden" !== n[t] && !(n.overflowY === n.overflowX && "TEXTAREA" !== e.tagName && "visible" === n[t])
                },
                ee = function(e, t) {
                    var n = t.ownerDocument,
                        r = t;
                    do {
                        if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), et(e, r)) {
                            var o = en(e, r);
                            if (o[1] > o[2]) return !0
                        }
                        r = r.parentNode
                    } while (r && r !== n.body);
                    return !1
                },
                et = function(e, t) {
                    return "v" === e ? Q(t, "overflowY") : Q(t, "overflowX")
                },
                en = function(e, t) {
                    return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
                },
                er = function(e, t, n, r, o) {
                    var i, a = (i = window.getComputedStyle(t).direction, "h" === e && "rtl" === i ? -1 : 1),
                        l = a * r,
                        s = n.target,
                        u = t.contains(s),
                        c = !1,
                        d = l > 0,
                        f = 0,
                        p = 0;
                    do {
                        var m = en(e, s),
                            v = m[0],
                            h = m[1] - m[2] - a * v;
                        (v || h) && et(e, s) && (f += h, p += v), s instanceof ShadowRoot ? s = s.host : s = s.parentNode
                    } while (!u && s !== document.body || u && (t.contains(s) || t === s));
                    return d && (o && 1 > Math.abs(f) || !o && l > f) ? c = !0 : !d && (o && 1 > Math.abs(p) || !o && -l > p) && (c = !0), c
                },
                eo = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                ei = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                ea = function(e) {
                    return e && "current" in e ? e.current : e
                },
                el = 0,
                es = [],
                eu = (0, H.L)(q, function(e) {
                    var t = i.useRef([]),
                        n = i.useRef([0, 0]),
                        r = i.useRef(),
                        o = i.useState(el++)[0],
                        a = i.useState(X.Ws)[0],
                        l = i.useRef(e);
                    i.useEffect(function() {
                        l.current = e
                    }, [e]), i.useEffect(function() {
                        if (e.inert) {
                            document.body.classList.add("block-interactivity-".concat(o));
                            var t = (0, B.ev)([e.lockRef.current], (e.shards || []).map(ea), !0).filter(Boolean);
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
                    var s = i.useCallback(function(e, t) {
                            if ("touches" in e && 2 === e.touches.length) return !l.current.allowPinchZoom;
                            var o, i = eo(e),
                                a = n.current,
                                s = "deltaX" in e ? e.deltaX : a[0] - i[0],
                                u = "deltaY" in e ? e.deltaY : a[1] - i[1],
                                c = e.target,
                                d = Math.abs(s) > Math.abs(u) ? "h" : "v";
                            if ("touches" in e && "h" === d && "range" === c.type) return !1;
                            var f = ee(d, c);
                            if (!f) return !0;
                            if (f ? o = d : (o = "v" === d ? "h" : "v", f = ee(d, c)), !f) return !1;
                            if (!r.current && "changedTouches" in e && (s || u) && (r.current = o), !o) return !0;
                            var p = r.current || o;
                            return er(p, t, e, "h" === p ? s : u, !0)
                        }, []),
                        u = i.useCallback(function(e) {
                            if (es.length && es[es.length - 1] === a) {
                                var n = "deltaY" in e ? ei(e) : eo(e),
                                    r = t.current.filter(function(t) {
                                        var r;
                                        return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (r = t.delta)[0] === n[0] && r[1] === n[1]
                                    })[0];
                                if (r && r.should) {
                                    e.cancelable && e.preventDefault();
                                    return
                                }
                                if (!r) {
                                    var o = (l.current.shards || []).map(ea).filter(Boolean).filter(function(t) {
                                        return t.contains(e.target)
                                    });
                                    (o.length > 0 ? s(e, o[0]) : !l.current.noIsolation) && e.cancelable && e.preventDefault()
                                }
                            }
                        }, []),
                        c = i.useCallback(function(e, n, r, o) {
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
                        d = i.useCallback(function(e) {
                            n.current = eo(e), r.current = void 0
                        }, []),
                        f = i.useCallback(function(t) {
                            c(t.type, ei(t), t.target, s(t, e.lockRef.current))
                        }, []),
                        p = i.useCallback(function(t) {
                            c(t.type, eo(t), t.target, s(t, e.lockRef.current))
                        }, []);
                    i.useEffect(function() {
                        return es.push(a), e.setCallbacks({
                                onScrollCapture: f,
                                onWheelCapture: f,
                                onTouchMoveCapture: p
                            }), document.addEventListener("wheel", u, J), document.addEventListener("touchmove", u, J), document.addEventListener("touchstart", d, J),
                            function() {
                                es = es.filter(function(e) {
                                    return e !== a
                                }), document.removeEventListener("wheel", u, J), document.removeEventListener("touchmove", u, J), document.removeEventListener("touchstart", d, J)
                            }
                    }, []);
                    var m = e.removeScrollBar,
                        v = e.inert;
                    return i.createElement(i.Fragment, null, v ? i.createElement(a, {
                        styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
                    }) : null, m ? i.createElement(Y.jp, {
                        gapMode: e.gapMode
                    }) : null)
                }),
                ec = i.forwardRef(function(e, t) {
                    return i.createElement(K, (0, B.pi)({}, e, {
                        ref: t,
                        sideCar: eu
                    }))
                });
            ec.classNames = K.classNames;
            var ed = n(49732),
                ef = "Dialog",
                [ep, em] = function(e, t = []) {
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

                        function l(t) {
                            let {
                                scope: n,
                                children: r,
                                ...l
                            } = t, s = n ? .[e][a] || o, u = i.useMemo(() => l, Object.values(l));
                            return (0, c.jsx)(s.Provider, {
                                value: u,
                                children: r
                            })
                        }
                        return n = [...n, r], l.displayName = t + "Provider", [l, function(n, l) {
                            let s = l ? .[e][a] || o,
                                u = i.useContext(s);
                            if (u) return u;
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
                }(ef),
                [ev, eh] = ep(ef),
                eg = e => {
                    let {
                        __scopeDialog: t,
                        children: n,
                        open: r,
                        defaultOpen: o,
                        onOpenChange: a,
                        modal: l = !0
                    } = e, s = i.useRef(null), u = i.useRef(null), [d = !1, f] = function({
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
                                a = v(t);
                            return i.useEffect(() => {
                                o.current !== r && (a(r), o.current = r)
                            }, [r, o, a]), n
                        }({
                            defaultProp: t,
                            onChange: n
                        }), a = void 0 !== e, l = a ? e : r, s = v(n);
                        return [l, i.useCallback(t => {
                            if (a) {
                                let n = "function" == typeof t ? t(e) : t;
                                n !== e && s(n)
                            } else o(t)
                        }, [a, e, o, s])]
                    }({
                        prop: r,
                        defaultProp: o,
                        onChange: a
                    });
                    return (0, c.jsx)(ev, {
                        scope: t,
                        triggerRef: s,
                        contentRef: u,
                        contentId: m(),
                        titleId: m(),
                        descriptionId: m(),
                        open: d,
                        onOpenChange: f,
                        onOpenToggle: i.useCallback(() => f(e => !e), [f]),
                        modal: l,
                        children: n
                    })
                };
            eg.displayName = ef;
            var ey = "DialogTrigger";
            i.forwardRef((e, t) => {
                let {
                    __scopeDialog: n,
                    ...r
                } = e, o = eh(ey, n), i = u(t, o.triggerRef);
                return (0, c.jsx)(E.button, {
                    type: "button",
                    "aria-haspopup": "dialog",
                    "aria-expanded": o.open,
                    "aria-controls": o.contentId,
                    "data-state": e_(o.open),
                    ...r,
                    ref: i,
                    onClick: l(e.onClick, o.onOpenToggle)
                })
            }).displayName = ey;
            var eb = "DialogPortal",
                [ew, eE] = ep(eb, {
                    forceMount: void 0
                }),
                ex = e => {
                    let {
                        __scopeDialog: t,
                        forceMount: n,
                        children: r,
                        container: o
                    } = e, a = eh(eb, t);
                    return (0, c.jsx)(ew, {
                        scope: t,
                        forceMount: n,
                        children: i.Children.map(r, e => (0, c.jsx)(M, {
                            present: n || a.open,
                            children: (0, c.jsx)(_, {
                                asChild: !0,
                                container: o,
                                children: e
                            })
                        }))
                    })
                };
            ex.displayName = eb;
            var eC = "DialogOverlay",
                eN = i.forwardRef((e, t) => {
                    let n = eE(eC, e.__scopeDialog),
                        {
                            forceMount: r = n.forceMount,
                            ...o
                        } = e,
                        i = eh(eC, e.__scopeDialog);
                    return i.modal ? (0, c.jsx)(M, {
                        present: r || i.open,
                        children: (0, c.jsx)(eR, { ...o,
                            ref: t
                        })
                    }) : null
                });
            eN.displayName = eC;
            var eR = i.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = eh(eC, n);
                    return (0, c.jsx)(ec, {
                        as: g,
                        allowPinchZoom: !0,
                        shards: [o.contentRef],
                        children: (0, c.jsx)(E.div, {
                            "data-state": e_(o.open),
                            ...r,
                            ref: t,
                            style: {
                                pointerEvents: "auto",
                                ...r.style
                            }
                        })
                    })
                }),
                eS = "DialogContent",
                ej = i.forwardRef((e, t) => {
                    let n = eE(eS, e.__scopeDialog),
                        {
                            forceMount: r = n.forceMount,
                            ...o
                        } = e,
                        i = eh(eS, e.__scopeDialog);
                    return (0, c.jsx)(M, {
                        present: r || i.open,
                        children: i.modal ? (0, c.jsx)(eD, { ...o,
                            ref: t
                        }) : (0, c.jsx)(eA, { ...o,
                            ref: t
                        })
                    })
                });
            ej.displayName = eS;
            var eD = i.forwardRef((e, t) => {
                    let n = eh(eS, e.__scopeDialog),
                        r = i.useRef(null),
                        o = u(t, n.contentRef, r);
                    return i.useEffect(() => {
                        let e = r.current;
                        if (e) return (0, ed.Ry)(e)
                    }, []), (0, c.jsx)(eO, { ...e,
                        ref: o,
                        trapFocus: n.open,
                        disableOutsidePointerEvents: !0,
                        onCloseAutoFocus: l(e.onCloseAutoFocus, e => {
                            e.preventDefault(), n.triggerRef.current ? .focus()
                        }),
                        onPointerDownOutside: l(e.onPointerDownOutside, e => {
                            let t = e.detail.originalEvent,
                                n = 0 === t.button && !0 === t.ctrlKey;
                            (2 === t.button || n) && e.preventDefault()
                        }),
                        onFocusOutside: l(e.onFocusOutside, e => e.preventDefault())
                    })
                }),
                eA = i.forwardRef((e, t) => {
                    let n = eh(eS, e.__scopeDialog),
                        r = i.useRef(!1),
                        o = i.useRef(!1);
                    return (0, c.jsx)(eO, { ...e,
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
                eO = i.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        trapFocus: r,
                        onOpenAutoFocus: o,
                        onCloseAutoFocus: a,
                        ...l
                    } = e, s = eh(eS, n), d = i.useRef(null), f = u(t, d);
                    return i.useEffect(() => {
                        let e = document.querySelectorAll("[data-radix-focus-guard]");
                        return document.body.insertAdjacentElement("afterbegin", e[0] ? ? z()), document.body.insertAdjacentElement("beforeend", e[1] ? ? z()), W++, () => {
                            1 === W && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), W--
                        }
                    }, []), (0, c.jsxs)(c.Fragment, {
                        children: [(0, c.jsx)(O, {
                            asChild: !0,
                            loop: !0,
                            trapped: r,
                            onMountAutoFocus: o,
                            onUnmountAutoFocus: a,
                            children: (0, c.jsx)(N, {
                                role: "dialog",
                                id: s.contentId,
                                "aria-describedby": s.descriptionId,
                                "aria-labelledby": s.titleId,
                                "data-state": e_(s.open),
                                ...l,
                                ref: f,
                                onDismiss: () => s.onOpenChange(!1)
                            })
                        }), (0, c.jsxs)(c.Fragment, {
                            children: [(0, c.jsx)(ez, {
                                titleId: s.titleId
                            }), (0, c.jsx)(eB, {
                                contentRef: d,
                                descriptionId: s.descriptionId
                            })]
                        })]
                    })
                }),
                eP = "DialogTitle",
                ek = i.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = eh(eP, n);
                    return (0, c.jsx)(E.h2, {
                        id: o.titleId,
                        ...r,
                        ref: t
                    })
                });
            ek.displayName = eP;
            var eI = "DialogDescription";
            i.forwardRef((e, t) => {
                let {
                    __scopeDialog: n,
                    ...r
                } = e, o = eh(eI, n);
                return (0, c.jsx)(E.p, {
                    id: o.descriptionId,
                    ...r,
                    ref: t
                })
            }).displayName = eI;
            var eL = "DialogClose",
                eT = i.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = eh(eL, n);
                    return (0, c.jsx)(E.button, {
                        type: "button",
                        ...r,
                        ref: t,
                        onClick: l(e.onClick, () => o.onOpenChange(!1))
                    })
                });

            function e_(e) {
                return e ? "open" : "closed"
            }
            eT.displayName = eL;
            var eM = "DialogTitleWarning",
                [eF, eW] = function(e, t) {
                    let n = i.createContext(t);

                    function r(e) {
                        let {
                            children: t,
                            ...r
                        } = e, o = i.useMemo(() => r, Object.values(r));
                        return (0, c.jsx)(n.Provider, {
                            value: o,
                            children: t
                        })
                    }
                    return r.displayName = e + "Provider", [r, function(r) {
                        let o = i.useContext(n);
                        if (o) return o;
                        if (void 0 !== t) return t;
                        throw Error(`\`${r}\` must be used within \`${e}\``)
                    }]
                }(eM, {
                    contentName: eS,
                    titleName: eP,
                    docsSlug: "dialog"
                }),
                ez = ({
                    titleId: e
                }) => {
                    let t = eW(eM),
                        n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
                    return i.useEffect(() => {
                        e && !document.getElementById(e) && console.error(n)
                    }, [n, e]), null
                },
                eB = ({
                    contentRef: e,
                    descriptionId: t
                }) => {
                    let n = eW("DialogDescriptionWarning"),
                        r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${n.contentName}}.`;
                    return i.useEffect(() => {
                        let n = e.current ? .getAttribute("aria-describedby");
                        t && n && !document.getElementById(t) && console.warn(r)
                    }, [r, e, t]), null
                },
                eU = eg,
                e$ = ex,
                eq = eN,
                eV = ej,
                eK = ek,
                eH = eT
        }
    }
]);