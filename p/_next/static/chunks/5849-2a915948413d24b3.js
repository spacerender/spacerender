try {
    let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        e = (new t.Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "453a4291-f727-4dd2-9055-6313ed82a769", t._sentryDebugIdIdentifier = "sentry-dbid-453a4291-f727-4dd2-9055-6313ed82a769")
} catch (t) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5849], {
        30387: function(t, e) {
            "use strict";
            e.Z = function(t, e) {
                if (t && e) {
                    var i = Array.isArray(e) ? e : e.split(",");
                    if (0 === i.length) return !0;
                    var n = t.name || "",
                        a = (t.type || "").toLowerCase(),
                        o = a.replace(/\/.*$/, "");
                    return i.some(function(t) {
                        var e = t.trim().toLowerCase();
                        return "." === e.charAt(0) ? n.toLowerCase().endsWith(e) : e.endsWith("/*") ? o === e.replace(/\/.*$/, "") : a === e
                    })
                }
                return !0
            }
        },
        390: function(t, e, i) {
            "use strict";
            i.d(e, {
                Jx: function() {
                    return f
                },
                cv: function() {
                    return x
                }
            });
            var n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "#", "$", "%", "*", "+", ",", "-", ".", ":", ";", "=", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"],
                a = t => {
                    let e = 0;
                    for (let i = 0; i < t.length; i++) {
                        let a = t[i];
                        e = 83 * e + n.indexOf(a)
                    }
                    return e
                },
                o = (t, e) => {
                    var i = "";
                    for (let a = 1; a <= e; a++) i += n[Math.floor(Math.floor(t) / Math.pow(83, e - a) % 83)];
                    return i
                },
                r = t => {
                    let e = t / 255;
                    return e <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
                },
                p = t => {
                    let e = Math.max(0, Math.min(1, t));
                    return e <= .0031308 ? Math.trunc(3294.6 * e + .5) : Math.trunc((1.055 * Math.pow(e, .4166666666666667) - .055) * 255 + .5)
                },
                l = t => t < 0 ? -1 : 1,
                s = (t, e) => l(t) * Math.pow(Math.abs(t), e),
                c = class extends Error {
                    constructor(t) {
                        super(t), this.name = "ValidationError", this.message = t
                    }
                },
                d = t => {
                    if (!t || t.length < 6) throw new c("The blurhash string must be at least 6 characters");
                    let e = a(t[0]),
                        i = Math.floor(e / 9) + 1,
                        n = e % 9 + 1;
                    if (t.length !== 4 + 2 * n * i) throw new c(`blurhash length mismatch: length is ${t.length} but it should be ${4+2*n*i}`)
                },
                u = t => [r(t >> 16), r(t >> 8 & 255), r(255 & t)],
                m = (t, e) => [s((Math.floor(t / 361) - 9) / 9, 2) * e, s((Math.floor(t / 19) % 19 - 9) / 9, 2) * e, s((t % 19 - 9) / 9, 2) * e],
                f = (t, e, i, n) => {
                    d(t), n |= 1;
                    let o = a(t[0]),
                        r = Math.floor(o / 9) + 1,
                        l = o % 9 + 1,
                        s = (a(t[1]) + 1) / 166,
                        c = Array(l * r);
                    for (let e = 0; e < c.length; e++)
                        if (0 === e) {
                            let i = a(t.substring(2, 6));
                            c[e] = u(i)
                        } else {
                            let i = a(t.substring(4 + 2 * e, 6 + 2 * e));
                            c[e] = m(i, s * n)
                        }
                    let f = 4 * e,
                        v = new Uint8ClampedArray(f * i);
                    for (let t = 0; t < i; t++)
                        for (let n = 0; n < e; n++) {
                            let a = 0,
                                o = 0,
                                s = 0;
                            for (let p = 0; p < r; p++)
                                for (let r = 0; r < l; r++) {
                                    let d = Math.cos(Math.PI * n * r / e) * Math.cos(Math.PI * t * p / i),
                                        u = c[r + p * l];
                                    a += u[0] * d, o += u[1] * d, s += u[2] * d
                                }
                            let d = p(a),
                                u = p(o),
                                m = p(s);
                            v[4 * n + 0 + t * f] = d, v[4 * n + 1 + t * f] = u, v[4 * n + 2 + t * f] = m, v[4 * n + 3 + t * f] = 255
                        }
                    return v
                },
                v = (t, e, i, n) => {
                    let a = 0,
                        o = 0,
                        p = 0,
                        l = 4 * e;
                    for (let s = 0; s < e; s++) {
                        let e = 4 * s;
                        for (let c = 0; c < i; c++) {
                            let i = e + c * l,
                                d = n(s, c);
                            a += d * r(t[i]), o += d * r(t[i + 1]), p += d * r(t[i + 2])
                        }
                    }
                    let s = 1 / (e * i);
                    return [a * s, o * s, p * s]
                },
                h = t => (p(t[0]) << 16) + (p(t[1]) << 8) + p(t[2]),
                g = (t, e) => 361 * Math.floor(Math.max(0, Math.min(18, Math.floor(9 * s(t[0] / e, .5) + 9.5)))) + 19 * Math.floor(Math.max(0, Math.min(18, Math.floor(9 * s(t[1] / e, .5) + 9.5)))) + Math.floor(Math.max(0, Math.min(18, Math.floor(9 * s(t[2] / e, .5) + 9.5)))),
                x = (t, e, i, n, a) => {
                    let r;
                    if (n < 1 || n > 9 || a < 1 || a > 9) throw new c("BlurHash must have between 1 and 9 components");
                    if (e * i * 4 !== t.length) throw new c("Width and height must match the pixels array");
                    let p = [];
                    for (let o = 0; o < a; o++)
                        for (let a = 0; a < n; a++) {
                            let n = 0 == a && 0 == o ? 1 : 2,
                                r = v(t, e, i, (t, r) => n * Math.cos(Math.PI * a * t / e) * Math.cos(Math.PI * o * r / i));
                            p.push(r)
                        }
                    let l = p[0],
                        s = p.slice(1),
                        d = "";
                    if (d += o(n - 1 + (a - 1) * 9, 1), s.length > 0) {
                        let t = Math.floor(Math.max(0, Math.min(82, Math.floor(166 * Math.max(...s.map(t => Math.max(...t))) - .5))));
                        r = (t + 1) / 166, d += o(t, 1)
                    } else r = 1, d += o(0, 1);
                    return d += o(h(l), 4), s.forEach(t => {
                        d += o(g(t, r), 2)
                    }), d
                }
        },
        4124: function(t) {
            "use strict";
            t.exports = function t(e, i) {
                if (e === i) return !0;
                if (e && i && "object" == typeof e && "object" == typeof i) {
                    if (e.constructor !== i.constructor) return !1;
                    if (Array.isArray(e)) {
                        if ((n = e.length) != i.length) return !1;
                        for (a = n; 0 != a--;)
                            if (!t(e[a], i[a])) return !1;
                        return !0
                    }
                    if (e instanceof Map && i instanceof Map) {
                        if (e.size !== i.size) return !1;
                        for (a of e.entries())
                            if (!i.has(a[0])) return !1;
                        for (a of e.entries())
                            if (!t(a[1], i.get(a[0]))) return !1;
                        return !0
                    }
                    if (e instanceof Set && i instanceof Set) {
                        if (e.size !== i.size) return !1;
                        for (a of e.entries())
                            if (!i.has(a[0])) return !1;
                        return !0
                    }
                    if (ArrayBuffer.isView(e) && ArrayBuffer.isView(i)) {
                        if ((n = e.length) != i.length) return !1;
                        for (a = n; 0 != a--;)
                            if (e[a] !== i[a]) return !1;
                        return !0
                    }
                    if (e.constructor === RegExp) return e.source === i.source && e.flags === i.flags;
                    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === i.valueOf();
                    if (e.toString !== Object.prototype.toString) return e.toString() === i.toString();
                    if ((n = (o = Object.keys(e)).length) !== Object.keys(i).length) return !1;
                    for (a = n; 0 != a--;)
                        if (!Object.prototype.hasOwnProperty.call(i, o[a])) return !1;
                    for (a = n; 0 != a--;) {
                        var n, a, o, r = o[a];
                        if (("_owner" !== r || !e.$$typeof) && !t(e[r], i[r])) return !1
                    }
                    return !0
                }
                return e != e && i != i
            }
        },
        22657: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "Image", {
                enumerable: !0,
                get: function() {
                    return b
                }
            });
            let n = i(43219),
                a = i(16794),
                o = i(52322),
                r = a._(i(2784)),
                p = n._(i(28316)),
                l = n._(i(68792)),
                s = i(25123),
                c = i(96648),
                d = i(41897);
            i(71388);
            let u = i(24698),
                m = n._(i(59553)),
                f = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                };

            function v(t, e, i, n, a, o, r) {
                let p = null == t ? void 0 : t.src;
                t && t["data-loaded-src"] !== p && (t["data-loaded-src"] = p, ("decode" in t ? t.decode() : Promise.resolve()).catch(() => {}).then(() => {
                    if (t.parentElement && t.isConnected) {
                        if ("empty" !== e && a(!0), null == i ? void 0 : i.current) {
                            let e = new Event("load");
                            Object.defineProperty(e, "target", {
                                writable: !1,
                                value: t
                            });
                            let n = !1,
                                a = !1;
                            i.current({ ...e,
                                nativeEvent: e,
                                currentTarget: t,
                                target: t,
                                isDefaultPrevented: () => n,
                                isPropagationStopped: () => a,
                                persist: () => {},
                                preventDefault: () => {
                                    n = !0, e.preventDefault()
                                },
                                stopPropagation: () => {
                                    a = !0, e.stopPropagation()
                                }
                            })
                        }(null == n ? void 0 : n.current) && n.current(t)
                    }
                }))
            }

            function h(t) {
                return r.use ? {
                    fetchPriority: t
                } : {
                    fetchpriority: t
                }
            }
            let g = (0, r.forwardRef)((t, e) => {
                let {
                    src: i,
                    srcSet: n,
                    sizes: a,
                    height: p,
                    width: l,
                    decoding: s,
                    className: c,
                    style: d,
                    fetchPriority: u,
                    placeholder: m,
                    loading: f,
                    unoptimized: g,
                    fill: x,
                    onLoadRef: b,
                    onLoadingCompleteRef: y,
                    setBlurComplete: w,
                    setShowAltText: k,
                    sizesInput: j,
                    onLoad: C,
                    onError: E,
                    ...S
                } = t;
                return (0, o.jsx)("img", { ...S,
                    ...h(u),
                    loading: f,
                    width: l,
                    height: p,
                    decoding: s,
                    "data-nimg": x ? "fill" : "1",
                    className: c,
                    style: d,
                    sizes: a,
                    srcSet: n,
                    src: i,
                    ref: (0, r.useCallback)(t => {
                        e && ("function" == typeof e ? e(t) : "object" == typeof e && (e.current = t)), t && (E && (t.src = t.src), t.complete && v(t, m, b, y, w, g, j))
                    }, [i, m, b, y, w, E, g, j, e]),
                    onLoad: t => {
                        v(t.currentTarget, m, b, y, w, g, j)
                    },
                    onError: t => {
                        k(!0), "empty" !== m && w(!0), E && E(t)
                    }
                })
            });

            function x(t) {
                let {
                    isAppRouter: e,
                    imgAttributes: i
                } = t, n = {
                    as: "image",
                    imageSrcSet: i.srcSet,
                    imageSizes: i.sizes,
                    crossOrigin: i.crossOrigin,
                    referrerPolicy: i.referrerPolicy,
                    ...h(i.fetchPriority)
                };
                return e && p.default.preload ? (p.default.preload(i.src, n), null) : (0, o.jsx)(l.default, {
                    children: (0, o.jsx)("link", {
                        rel: "preload",
                        href: i.srcSet ? void 0 : i.src,
                        ...n
                    }, "__nimg-" + i.src + i.srcSet + i.sizes)
                })
            }
            let b = (0, r.forwardRef)((t, e) => {
                let i = (0, r.useContext)(u.RouterContext),
                    n = (0, r.useContext)(d.ImageConfigContext),
                    a = (0, r.useMemo)(() => {
                        var t;
                        let e = f || n || c.imageConfigDefault,
                            i = [...e.deviceSizes, ...e.imageSizes].sort((t, e) => t - e),
                            a = e.deviceSizes.sort((t, e) => t - e),
                            o = null == (t = e.qualities) ? void 0 : t.sort((t, e) => t - e);
                        return { ...e,
                            allSizes: i,
                            deviceSizes: a,
                            qualities: o
                        }
                    }, [n]),
                    {
                        onLoad: p,
                        onLoadingComplete: l
                    } = t,
                    v = (0, r.useRef)(p);
                (0, r.useEffect)(() => {
                    v.current = p
                }, [p]);
                let h = (0, r.useRef)(l);
                (0, r.useEffect)(() => {
                    h.current = l
                }, [l]);
                let [b, y] = (0, r.useState)(!1), [w, k] = (0, r.useState)(!1), {
                    props: j,
                    meta: C
                } = (0, s.getImgProps)(t, {
                    defaultLoader: m.default,
                    imgConf: a,
                    blurComplete: b,
                    showAltText: w
                });
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(g, { ...j,
                        unoptimized: C.unoptimized,
                        placeholder: C.placeholder,
                        fill: C.fill,
                        onLoadRef: v,
                        onLoadingCompleteRef: h,
                        setBlurComplete: y,
                        setShowAltText: k,
                        sizesInput: t.sizes,
                        ref: e
                    }), C.priority ? (0, o.jsx)(x, {
                        isAppRouter: !i,
                        imgAttributes: j
                    }) : null]
                })
            });
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        25123: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getImgProps", {
                enumerable: !0,
                get: function() {
                    return p
                }
            }), i(71388);
            let n = i(74999),
                a = i(96648);

            function o(t) {
                return void 0 !== t.default
            }

            function r(t) {
                return void 0 === t ? t : "number" == typeof t ? Number.isFinite(t) ? t : NaN : "string" == typeof t && /^[0-9]+$/.test(t) ? parseInt(t, 10) : NaN
            }

            function p(t, e) {
                var i, p;
                let l, s, c, {
                        src: d,
                        sizes: u,
                        unoptimized: m = !1,
                        priority: f = !1,
                        loading: v,
                        className: h,
                        quality: g,
                        width: x,
                        height: b,
                        fill: y = !1,
                        style: w,
                        overrideSrc: k,
                        onLoad: j,
                        onLoadingComplete: C,
                        placeholder: E = "empty",
                        blurDataURL: S,
                        fetchPriority: z,
                        decoding: D = "async",
                        layout: M,
                        objectFit: O,
                        objectPosition: P,
                        lazyBoundary: A,
                        lazyRoot: I,
                        ...T
                    } = t,
                    {
                        imgConf: R,
                        showAltText: F,
                        blurComplete: _,
                        defaultLoader: q
                    } = e,
                    N = R || a.imageConfigDefault;
                if ("allSizes" in N) l = N;
                else {
                    let t = [...N.deviceSizes, ...N.imageSizes].sort((t, e) => t - e),
                        e = N.deviceSizes.sort((t, e) => t - e),
                        n = null == (i = N.qualities) ? void 0 : i.sort((t, e) => t - e);
                    l = { ...N,
                        allSizes: t,
                        deviceSizes: e,
                        qualities: n
                    }
                }
                if (void 0 === q) throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
                let V = T.loader || q;
                delete T.loader, delete T.srcSet;
                let B = "__next_img_default" in V;
                if (B) {
                    if ("custom" === l.loader) throw Error('Image with src "' + d + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
                } else {
                    let t = V;
                    V = e => {
                        let {
                            config: i,
                            ...n
                        } = e;
                        return t(n)
                    }
                }
                if (M) {
                    "fill" === M && (y = !0);
                    let t = {
                        intrinsic: {
                            maxWidth: "100%",
                            height: "auto"
                        },
                        responsive: {
                            width: "100%",
                            height: "auto"
                        }
                    }[M];
                    t && (w = { ...w,
                        ...t
                    });
                    let e = {
                        responsive: "100vw",
                        fill: "100vw"
                    }[M];
                    e && !u && (u = e)
                }
                let L = "",
                    G = r(x),
                    H = r(b);
                if ("object" == typeof(p = d) && (o(p) || void 0 !== p.src)) {
                    let t = o(d) ? d.default : d;
                    if (!t.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(t));
                    if (!t.height || !t.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(t));
                    if (s = t.blurWidth, c = t.blurHeight, S = S || t.blurDataURL, L = t.src, !y) {
                        if (G || H) {
                            if (G && !H) {
                                let e = G / t.width;
                                H = Math.round(t.height * e)
                            } else if (!G && H) {
                                let e = H / t.height;
                                G = Math.round(t.width * e)
                            }
                        } else G = t.width, H = t.height
                    }
                }
                let $ = !f && ("lazy" === v || void 0 === v);
                (!(d = "string" == typeof d ? d : L) || d.startsWith("data:") || d.startsWith("blob:")) && (m = !0, $ = !1), l.unoptimized && (m = !0), B && d.endsWith(".svg") && !l.dangerouslyAllowSVG && (m = !0), f && (z = "high");
                let Z = r(g),
                    W = Object.assign(y ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: O,
                        objectPosition: P
                    } : {}, F ? {} : {
                        color: "transparent"
                    }, w),
                    U = _ || "empty" === E ? null : "blur" === E ? 'url("data:image/svg+xml;charset=utf-8,' + (0, n.getImageBlurSvg)({
                        widthInt: G,
                        heightInt: H,
                        blurWidth: s,
                        blurHeight: c,
                        blurDataURL: S || "",
                        objectFit: W.objectFit
                    }) + '")' : 'url("' + E + '")',
                    K = U ? {
                        backgroundSize: W.objectFit || "cover",
                        backgroundPosition: W.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: U
                    } : {},
                    Y = function(t) {
                        let {
                            config: e,
                            src: i,
                            unoptimized: n,
                            width: a,
                            quality: o,
                            sizes: r,
                            loader: p
                        } = t;
                        if (n) return {
                            src: i,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: l,
                            kind: s
                        } = function(t, e, i) {
                            let {
                                deviceSizes: n,
                                allSizes: a
                            } = t;
                            if (i) {
                                let t = /(^|\s)(1?\d?\d)vw/g,
                                    e = [];
                                for (let n; n = t.exec(i); n) e.push(parseInt(n[2]));
                                if (e.length) {
                                    let t = .01 * Math.min(...e);
                                    return {
                                        widths: a.filter(e => e >= n[0] * t),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: a,
                                    kind: "w"
                                }
                            }
                            return "number" != typeof e ? {
                                widths: n,
                                kind: "w"
                            } : {
                                widths: [...new Set([e, 2 * e].map(t => a.find(e => e >= t) || a[a.length - 1]))],
                                kind: "x"
                            }
                        }(e, a, r), c = l.length - 1;
                        return {
                            sizes: r || "w" !== s ? r : "100vw",
                            srcSet: l.map((t, n) => p({
                                config: e,
                                src: i,
                                quality: o,
                                width: t
                            }) + " " + ("w" === s ? t : n + 1) + s).join(", "),
                            src: p({
                                config: e,
                                src: i,
                                quality: o,
                                width: l[c]
                            })
                        }
                    }({
                        config: l,
                        src: d,
                        unoptimized: m,
                        width: G,
                        quality: Z,
                        sizes: u,
                        loader: V
                    });
                return {
                    props: { ...T,
                        loading: $ ? "lazy" : v,
                        fetchPriority: z,
                        width: G,
                        height: H,
                        decoding: D,
                        className: h,
                        style: { ...W,
                            ...K
                        },
                        sizes: Y.sizes,
                        srcSet: Y.srcSet,
                        src: k || Y.src
                    },
                    meta: {
                        unoptimized: m,
                        priority: f,
                        placeholder: E,
                        fill: y
                    }
                }
            }
        },
        74999: function(t, e) {
            "use strict";

            function i(t) {
                let {
                    widthInt: e,
                    heightInt: i,
                    blurWidth: n,
                    blurHeight: a,
                    blurDataURL: o,
                    objectFit: r
                } = t, p = n ? 40 * n : e, l = a ? 40 * a : i, s = p && l ? "viewBox='0 0 " + p + " " + l + "'" : "";
                return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + s + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (s ? "none" : "contain" === r ? "xMidYMid" : "cover" === r ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + o + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return i
                }
            })
        },
        5329: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    default: function() {
                        return l
                    },
                    getImageProps: function() {
                        return p
                    }
                });
            let n = i(43219),
                a = i(25123),
                o = i(22657),
                r = n._(i(59553));

            function p(t) {
                let {
                    props: e
                } = (0, a.getImgProps)(t, {
                    defaultLoader: r.default,
                    imgConf: {
                        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                        path: "/_next/image",
                        loader: "default",
                        dangerouslyAllowSVG: !1,
                        unoptimized: !1
                    }
                });
                for (let [t, i] of Object.entries(e)) void 0 === i && delete e[t];
                return {
                    props: e
                }
            }
            let l = o.Image
        },
        59553: function(t, e) {
            "use strict";

            function i(t) {
                var e;
                let {
                    config: i,
                    src: n,
                    width: a,
                    quality: o
                } = t, r = o || (null == (e = i.qualities) ? void 0 : e.reduce((t, e) => Math.abs(e - 75) < Math.abs(t - 75) ? e : t)) || 75;
                return i.path + "?url=" + encodeURIComponent(n) + "&w=" + a + "&q=" + r
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), i.__next_img_default = !0;
            let n = i
        },
        96577: function(t, e, i) {
            t.exports = i(5329)
        },
        74905: function(t, e, i) {
            "use strict";
            i.d(e, {
                uI: function() {
                    return Q
                }
            });
            var n = i(2784),
                a = i(13980),
                o = i.n(a),
                r = i(22970);
            let p = new Map([
                ["1km", "application/vnd.1000minds.decision-model+xml"],
                ["3dml", "text/vnd.in3d.3dml"],
                ["3ds", "image/x-3ds"],
                ["3g2", "video/3gpp2"],
                ["3gp", "video/3gp"],
                ["3gpp", "video/3gpp"],
                ["3mf", "model/3mf"],
                ["7z", "application/x-7z-compressed"],
                ["7zip", "application/x-7z-compressed"],
                ["123", "application/vnd.lotus-1-2-3"],
                ["aab", "application/x-authorware-bin"],
                ["aac", "audio/x-acc"],
                ["aam", "application/x-authorware-map"],
                ["aas", "application/x-authorware-seg"],
                ["abw", "application/x-abiword"],
                ["ac", "application/vnd.nokia.n-gage.ac+xml"],
                ["ac3", "audio/ac3"],
                ["acc", "application/vnd.americandynamics.acc"],
                ["ace", "application/x-ace-compressed"],
                ["acu", "application/vnd.acucobol"],
                ["acutc", "application/vnd.acucorp"],
                ["adp", "audio/adpcm"],
                ["aep", "application/vnd.audiograph"],
                ["afm", "application/x-font-type1"],
                ["afp", "application/vnd.ibm.modcap"],
                ["ahead", "application/vnd.ahead.space"],
                ["ai", "application/pdf"],
                ["aif", "audio/x-aiff"],
                ["aifc", "audio/x-aiff"],
                ["aiff", "audio/x-aiff"],
                ["air", "application/vnd.adobe.air-application-installer-package+zip"],
                ["ait", "application/vnd.dvb.ait"],
                ["ami", "application/vnd.amiga.ami"],
                ["amr", "audio/amr"],
                ["apk", "application/vnd.android.package-archive"],
                ["apng", "image/apng"],
                ["appcache", "text/cache-manifest"],
                ["application", "application/x-ms-application"],
                ["apr", "application/vnd.lotus-approach"],
                ["arc", "application/x-freearc"],
                ["arj", "application/x-arj"],
                ["asc", "application/pgp-signature"],
                ["asf", "video/x-ms-asf"],
                ["asm", "text/x-asm"],
                ["aso", "application/vnd.accpac.simply.aso"],
                ["asx", "video/x-ms-asf"],
                ["atc", "application/vnd.acucorp"],
                ["atom", "application/atom+xml"],
                ["atomcat", "application/atomcat+xml"],
                ["atomdeleted", "application/atomdeleted+xml"],
                ["atomsvc", "application/atomsvc+xml"],
                ["atx", "application/vnd.antix.game-component"],
                ["au", "audio/x-au"],
                ["avi", "video/x-msvideo"],
                ["avif", "image/avif"],
                ["aw", "application/applixware"],
                ["azf", "application/vnd.airzip.filesecure.azf"],
                ["azs", "application/vnd.airzip.filesecure.azs"],
                ["azv", "image/vnd.airzip.accelerator.azv"],
                ["azw", "application/vnd.amazon.ebook"],
                ["b16", "image/vnd.pco.b16"],
                ["bat", "application/x-msdownload"],
                ["bcpio", "application/x-bcpio"],
                ["bdf", "application/x-font-bdf"],
                ["bdm", "application/vnd.syncml.dm+wbxml"],
                ["bdoc", "application/x-bdoc"],
                ["bed", "application/vnd.realvnc.bed"],
                ["bh2", "application/vnd.fujitsu.oasysprs"],
                ["bin", "application/octet-stream"],
                ["blb", "application/x-blorb"],
                ["blorb", "application/x-blorb"],
                ["bmi", "application/vnd.bmi"],
                ["bmml", "application/vnd.balsamiq.bmml+xml"],
                ["bmp", "image/bmp"],
                ["book", "application/vnd.framemaker"],
                ["box", "application/vnd.previewsystems.box"],
                ["boz", "application/x-bzip2"],
                ["bpk", "application/octet-stream"],
                ["bpmn", "application/octet-stream"],
                ["bsp", "model/vnd.valve.source.compiled-map"],
                ["btif", "image/prs.btif"],
                ["buffer", "application/octet-stream"],
                ["bz", "application/x-bzip"],
                ["bz2", "application/x-bzip2"],
                ["c", "text/x-c"],
                ["c4d", "application/vnd.clonk.c4group"],
                ["c4f", "application/vnd.clonk.c4group"],
                ["c4g", "application/vnd.clonk.c4group"],
                ["c4p", "application/vnd.clonk.c4group"],
                ["c4u", "application/vnd.clonk.c4group"],
                ["c11amc", "application/vnd.cluetrust.cartomobile-config"],
                ["c11amz", "application/vnd.cluetrust.cartomobile-config-pkg"],
                ["cab", "application/vnd.ms-cab-compressed"],
                ["caf", "audio/x-caf"],
                ["cap", "application/vnd.tcpdump.pcap"],
                ["car", "application/vnd.curl.car"],
                ["cat", "application/vnd.ms-pki.seccat"],
                ["cb7", "application/x-cbr"],
                ["cba", "application/x-cbr"],
                ["cbr", "application/x-cbr"],
                ["cbt", "application/x-cbr"],
                ["cbz", "application/x-cbr"],
                ["cc", "text/x-c"],
                ["cco", "application/x-cocoa"],
                ["cct", "application/x-director"],
                ["ccxml", "application/ccxml+xml"],
                ["cdbcmsg", "application/vnd.contact.cmsg"],
                ["cda", "application/x-cdf"],
                ["cdf", "application/x-netcdf"],
                ["cdfx", "application/cdfx+xml"],
                ["cdkey", "application/vnd.mediastation.cdkey"],
                ["cdmia", "application/cdmi-capability"],
                ["cdmic", "application/cdmi-container"],
                ["cdmid", "application/cdmi-domain"],
                ["cdmio", "application/cdmi-object"],
                ["cdmiq", "application/cdmi-queue"],
                ["cdr", "application/cdr"],
                ["cdx", "chemical/x-cdx"],
                ["cdxml", "application/vnd.chemdraw+xml"],
                ["cdy", "application/vnd.cinderella"],
                ["cer", "application/pkix-cert"],
                ["cfs", "application/x-cfs-compressed"],
                ["cgm", "image/cgm"],
                ["chat", "application/x-chat"],
                ["chm", "application/vnd.ms-htmlhelp"],
                ["chrt", "application/vnd.kde.kchart"],
                ["cif", "chemical/x-cif"],
                ["cii", "application/vnd.anser-web-certificate-issue-initiation"],
                ["cil", "application/vnd.ms-artgalry"],
                ["cjs", "application/node"],
                ["cla", "application/vnd.claymore"],
                ["class", "application/octet-stream"],
                ["clkk", "application/vnd.crick.clicker.keyboard"],
                ["clkp", "application/vnd.crick.clicker.palette"],
                ["clkt", "application/vnd.crick.clicker.template"],
                ["clkw", "application/vnd.crick.clicker.wordbank"],
                ["clkx", "application/vnd.crick.clicker"],
                ["clp", "application/x-msclip"],
                ["cmc", "application/vnd.cosmocaller"],
                ["cmdf", "chemical/x-cmdf"],
                ["cml", "chemical/x-cml"],
                ["cmp", "application/vnd.yellowriver-custom-menu"],
                ["cmx", "image/x-cmx"],
                ["cod", "application/vnd.rim.cod"],
                ["coffee", "text/coffeescript"],
                ["com", "application/x-msdownload"],
                ["conf", "text/plain"],
                ["cpio", "application/x-cpio"],
                ["cpp", "text/x-c"],
                ["cpt", "application/mac-compactpro"],
                ["crd", "application/x-mscardfile"],
                ["crl", "application/pkix-crl"],
                ["crt", "application/x-x509-ca-cert"],
                ["crx", "application/x-chrome-extension"],
                ["cryptonote", "application/vnd.rig.cryptonote"],
                ["csh", "application/x-csh"],
                ["csl", "application/vnd.citationstyles.style+xml"],
                ["csml", "chemical/x-csml"],
                ["csp", "application/vnd.commonspace"],
                ["csr", "application/octet-stream"],
                ["css", "text/css"],
                ["cst", "application/x-director"],
                ["csv", "text/csv"],
                ["cu", "application/cu-seeme"],
                ["curl", "text/vnd.curl"],
                ["cww", "application/prs.cww"],
                ["cxt", "application/x-director"],
                ["cxx", "text/x-c"],
                ["dae", "model/vnd.collada+xml"],
                ["daf", "application/vnd.mobius.daf"],
                ["dart", "application/vnd.dart"],
                ["dataless", "application/vnd.fdsn.seed"],
                ["davmount", "application/davmount+xml"],
                ["dbf", "application/vnd.dbf"],
                ["dbk", "application/docbook+xml"],
                ["dcr", "application/x-director"],
                ["dcurl", "text/vnd.curl.dcurl"],
                ["dd2", "application/vnd.oma.dd2+xml"],
                ["ddd", "application/vnd.fujixerox.ddd"],
                ["ddf", "application/vnd.syncml.dmddf+xml"],
                ["dds", "image/vnd.ms-dds"],
                ["deb", "application/x-debian-package"],
                ["def", "text/plain"],
                ["deploy", "application/octet-stream"],
                ["der", "application/x-x509-ca-cert"],
                ["dfac", "application/vnd.dreamfactory"],
                ["dgc", "application/x-dgc-compressed"],
                ["dic", "text/x-c"],
                ["dir", "application/x-director"],
                ["dis", "application/vnd.mobius.dis"],
                ["disposition-notification", "message/disposition-notification"],
                ["dist", "application/octet-stream"],
                ["distz", "application/octet-stream"],
                ["djv", "image/vnd.djvu"],
                ["djvu", "image/vnd.djvu"],
                ["dll", "application/octet-stream"],
                ["dmg", "application/x-apple-diskimage"],
                ["dmn", "application/octet-stream"],
                ["dmp", "application/vnd.tcpdump.pcap"],
                ["dms", "application/octet-stream"],
                ["dna", "application/vnd.dna"],
                ["doc", "application/msword"],
                ["docm", "application/vnd.ms-word.template.macroEnabled.12"],
                ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
                ["dot", "application/msword"],
                ["dotm", "application/vnd.ms-word.template.macroEnabled.12"],
                ["dotx", "application/vnd.openxmlformats-officedocument.wordprocessingml.template"],
                ["dp", "application/vnd.osgi.dp"],
                ["dpg", "application/vnd.dpgraph"],
                ["dra", "audio/vnd.dra"],
                ["drle", "image/dicom-rle"],
                ["dsc", "text/prs.lines.tag"],
                ["dssc", "application/dssc+der"],
                ["dtb", "application/x-dtbook+xml"],
                ["dtd", "application/xml-dtd"],
                ["dts", "audio/vnd.dts"],
                ["dtshd", "audio/vnd.dts.hd"],
                ["dump", "application/octet-stream"],
                ["dvb", "video/vnd.dvb.file"],
                ["dvi", "application/x-dvi"],
                ["dwd", "application/atsc-dwd+xml"],
                ["dwf", "model/vnd.dwf"],
                ["dwg", "image/vnd.dwg"],
                ["dxf", "image/vnd.dxf"],
                ["dxp", "application/vnd.spotfire.dxp"],
                ["dxr", "application/x-director"],
                ["ear", "application/java-archive"],
                ["ecelp4800", "audio/vnd.nuera.ecelp4800"],
                ["ecelp7470", "audio/vnd.nuera.ecelp7470"],
                ["ecelp9600", "audio/vnd.nuera.ecelp9600"],
                ["ecma", "application/ecmascript"],
                ["edm", "application/vnd.novadigm.edm"],
                ["edx", "application/vnd.novadigm.edx"],
                ["efif", "application/vnd.picsel"],
                ["ei6", "application/vnd.pg.osasli"],
                ["elc", "application/octet-stream"],
                ["emf", "image/emf"],
                ["eml", "message/rfc822"],
                ["emma", "application/emma+xml"],
                ["emotionml", "application/emotionml+xml"],
                ["emz", "application/x-msmetafile"],
                ["eol", "audio/vnd.digital-winds"],
                ["eot", "application/vnd.ms-fontobject"],
                ["eps", "application/postscript"],
                ["epub", "application/epub+zip"],
                ["es", "application/ecmascript"],
                ["es3", "application/vnd.eszigno3+xml"],
                ["esa", "application/vnd.osgi.subsystem"],
                ["esf", "application/vnd.epson.esf"],
                ["et3", "application/vnd.eszigno3+xml"],
                ["etx", "text/x-setext"],
                ["eva", "application/x-eva"],
                ["evy", "application/x-envoy"],
                ["exe", "application/octet-stream"],
                ["exi", "application/exi"],
                ["exp", "application/express"],
                ["exr", "image/aces"],
                ["ext", "application/vnd.novadigm.ext"],
                ["ez", "application/andrew-inset"],
                ["ez2", "application/vnd.ezpix-album"],
                ["ez3", "application/vnd.ezpix-package"],
                ["f", "text/x-fortran"],
                ["f4v", "video/mp4"],
                ["f77", "text/x-fortran"],
                ["f90", "text/x-fortran"],
                ["fbs", "image/vnd.fastbidsheet"],
                ["fcdt", "application/vnd.adobe.formscentral.fcdt"],
                ["fcs", "application/vnd.isac.fcs"],
                ["fdf", "application/vnd.fdf"],
                ["fdt", "application/fdt+xml"],
                ["fe_launch", "application/vnd.denovo.fcselayout-link"],
                ["fg5", "application/vnd.fujitsu.oasysgp"],
                ["fgd", "application/x-director"],
                ["fh", "image/x-freehand"],
                ["fh4", "image/x-freehand"],
                ["fh5", "image/x-freehand"],
                ["fh7", "image/x-freehand"],
                ["fhc", "image/x-freehand"],
                ["fig", "application/x-xfig"],
                ["fits", "image/fits"],
                ["flac", "audio/x-flac"],
                ["fli", "video/x-fli"],
                ["flo", "application/vnd.micrografx.flo"],
                ["flv", "video/x-flv"],
                ["flw", "application/vnd.kde.kivio"],
                ["flx", "text/vnd.fmi.flexstor"],
                ["fly", "text/vnd.fly"],
                ["fm", "application/vnd.framemaker"],
                ["fnc", "application/vnd.frogans.fnc"],
                ["fo", "application/vnd.software602.filler.form+xml"],
                ["for", "text/x-fortran"],
                ["fpx", "image/vnd.fpx"],
                ["frame", "application/vnd.framemaker"],
                ["fsc", "application/vnd.fsc.weblaunch"],
                ["fst", "image/vnd.fst"],
                ["ftc", "application/vnd.fluxtime.clip"],
                ["fti", "application/vnd.anser-web-funds-transfer-initiation"],
                ["fvt", "video/vnd.fvt"],
                ["fxp", "application/vnd.adobe.fxp"],
                ["fxpl", "application/vnd.adobe.fxp"],
                ["fzs", "application/vnd.fuzzysheet"],
                ["g2w", "application/vnd.geoplan"],
                ["g3", "image/g3fax"],
                ["g3w", "application/vnd.geospace"],
                ["gac", "application/vnd.groove-account"],
                ["gam", "application/x-tads"],
                ["gbr", "application/rpki-ghostbusters"],
                ["gca", "application/x-gca-compressed"],
                ["gdl", "model/vnd.gdl"],
                ["gdoc", "application/vnd.google-apps.document"],
                ["geo", "application/vnd.dynageo"],
                ["geojson", "application/geo+json"],
                ["gex", "application/vnd.geometry-explorer"],
                ["ggb", "application/vnd.geogebra.file"],
                ["ggt", "application/vnd.geogebra.tool"],
                ["ghf", "application/vnd.groove-help"],
                ["gif", "image/gif"],
                ["gim", "application/vnd.groove-identity-message"],
                ["glb", "model/gltf-binary"],
                ["gltf", "model/gltf+json"],
                ["gml", "application/gml+xml"],
                ["gmx", "application/vnd.gmx"],
                ["gnumeric", "application/x-gnumeric"],
                ["gpg", "application/gpg-keys"],
                ["gph", "application/vnd.flographit"],
                ["gpx", "application/gpx+xml"],
                ["gqf", "application/vnd.grafeq"],
                ["gqs", "application/vnd.grafeq"],
                ["gram", "application/srgs"],
                ["gramps", "application/x-gramps-xml"],
                ["gre", "application/vnd.geometry-explorer"],
                ["grv", "application/vnd.groove-injector"],
                ["grxml", "application/srgs+xml"],
                ["gsf", "application/x-font-ghostscript"],
                ["gsheet", "application/vnd.google-apps.spreadsheet"],
                ["gslides", "application/vnd.google-apps.presentation"],
                ["gtar", "application/x-gtar"],
                ["gtm", "application/vnd.groove-tool-message"],
                ["gtw", "model/vnd.gtw"],
                ["gv", "text/vnd.graphviz"],
                ["gxf", "application/gxf"],
                ["gxt", "application/vnd.geonext"],
                ["gz", "application/gzip"],
                ["gzip", "application/gzip"],
                ["h", "text/x-c"],
                ["h261", "video/h261"],
                ["h263", "video/h263"],
                ["h264", "video/h264"],
                ["hal", "application/vnd.hal+xml"],
                ["hbci", "application/vnd.hbci"],
                ["hbs", "text/x-handlebars-template"],
                ["hdd", "application/x-virtualbox-hdd"],
                ["hdf", "application/x-hdf"],
                ["heic", "image/heic"],
                ["heics", "image/heic-sequence"],
                ["heif", "image/heif"],
                ["heifs", "image/heif-sequence"],
                ["hej2", "image/hej2k"],
                ["held", "application/atsc-held+xml"],
                ["hh", "text/x-c"],
                ["hjson", "application/hjson"],
                ["hlp", "application/winhlp"],
                ["hpgl", "application/vnd.hp-hpgl"],
                ["hpid", "application/vnd.hp-hpid"],
                ["hps", "application/vnd.hp-hps"],
                ["hqx", "application/mac-binhex40"],
                ["hsj2", "image/hsj2"],
                ["htc", "text/x-component"],
                ["htke", "application/vnd.kenameaapp"],
                ["htm", "text/html"],
                ["html", "text/html"],
                ["hvd", "application/vnd.yamaha.hv-dic"],
                ["hvp", "application/vnd.yamaha.hv-voice"],
                ["hvs", "application/vnd.yamaha.hv-script"],
                ["i2g", "application/vnd.intergeo"],
                ["icc", "application/vnd.iccprofile"],
                ["ice", "x-conference/x-cooltalk"],
                ["icm", "application/vnd.iccprofile"],
                ["ico", "image/x-icon"],
                ["ics", "text/calendar"],
                ["ief", "image/ief"],
                ["ifb", "text/calendar"],
                ["ifm", "application/vnd.shana.informed.formdata"],
                ["iges", "model/iges"],
                ["igl", "application/vnd.igloader"],
                ["igm", "application/vnd.insors.igm"],
                ["igs", "model/iges"],
                ["igx", "application/vnd.micrografx.igx"],
                ["iif", "application/vnd.shana.informed.interchange"],
                ["img", "application/octet-stream"],
                ["imp", "application/vnd.accpac.simply.imp"],
                ["ims", "application/vnd.ms-ims"],
                ["in", "text/plain"],
                ["ini", "text/plain"],
                ["ink", "application/inkml+xml"],
                ["inkml", "application/inkml+xml"],
                ["install", "application/x-install-instructions"],
                ["iota", "application/vnd.astraea-software.iota"],
                ["ipfix", "application/ipfix"],
                ["ipk", "application/vnd.shana.informed.package"],
                ["irm", "application/vnd.ibm.rights-management"],
                ["irp", "application/vnd.irepository.package+xml"],
                ["iso", "application/x-iso9660-image"],
                ["itp", "application/vnd.shana.informed.formtemplate"],
                ["its", "application/its+xml"],
                ["ivp", "application/vnd.immervision-ivp"],
                ["ivu", "application/vnd.immervision-ivu"],
                ["jad", "text/vnd.sun.j2me.app-descriptor"],
                ["jade", "text/jade"],
                ["jam", "application/vnd.jam"],
                ["jar", "application/java-archive"],
                ["jardiff", "application/x-java-archive-diff"],
                ["java", "text/x-java-source"],
                ["jhc", "image/jphc"],
                ["jisp", "application/vnd.jisp"],
                ["jls", "image/jls"],
                ["jlt", "application/vnd.hp-jlyt"],
                ["jng", "image/x-jng"],
                ["jnlp", "application/x-java-jnlp-file"],
                ["joda", "application/vnd.joost.joda-archive"],
                ["jp2", "image/jp2"],
                ["jpe", "image/jpeg"],
                ["jpeg", "image/jpeg"],
                ["jpf", "image/jpx"],
                ["jpg", "image/jpeg"],
                ["jpg2", "image/jp2"],
                ["jpgm", "video/jpm"],
                ["jpgv", "video/jpeg"],
                ["jph", "image/jph"],
                ["jpm", "video/jpm"],
                ["jpx", "image/jpx"],
                ["js", "application/javascript"],
                ["json", "application/json"],
                ["json5", "application/json5"],
                ["jsonld", "application/ld+json"],
                ["jsonml", "application/jsonml+json"],
                ["jsx", "text/jsx"],
                ["jxr", "image/jxr"],
                ["jxra", "image/jxra"],
                ["jxrs", "image/jxrs"],
                ["jxs", "image/jxs"],
                ["jxsc", "image/jxsc"],
                ["jxsi", "image/jxsi"],
                ["jxss", "image/jxss"],
                ["kar", "audio/midi"],
                ["karbon", "application/vnd.kde.karbon"],
                ["kdb", "application/octet-stream"],
                ["kdbx", "application/x-keepass2"],
                ["key", "application/x-iwork-keynote-sffkey"],
                ["kfo", "application/vnd.kde.kformula"],
                ["kia", "application/vnd.kidspiration"],
                ["kml", "application/vnd.google-earth.kml+xml"],
                ["kmz", "application/vnd.google-earth.kmz"],
                ["kne", "application/vnd.kinar"],
                ["knp", "application/vnd.kinar"],
                ["kon", "application/vnd.kde.kontour"],
                ["kpr", "application/vnd.kde.kpresenter"],
                ["kpt", "application/vnd.kde.kpresenter"],
                ["kpxx", "application/vnd.ds-keypoint"],
                ["ksp", "application/vnd.kde.kspread"],
                ["ktr", "application/vnd.kahootz"],
                ["ktx", "image/ktx"],
                ["ktx2", "image/ktx2"],
                ["ktz", "application/vnd.kahootz"],
                ["kwd", "application/vnd.kde.kword"],
                ["kwt", "application/vnd.kde.kword"],
                ["lasxml", "application/vnd.las.las+xml"],
                ["latex", "application/x-latex"],
                ["lbd", "application/vnd.llamagraphics.life-balance.desktop"],
                ["lbe", "application/vnd.llamagraphics.life-balance.exchange+xml"],
                ["les", "application/vnd.hhe.lesson-player"],
                ["less", "text/less"],
                ["lgr", "application/lgr+xml"],
                ["lha", "application/octet-stream"],
                ["link66", "application/vnd.route66.link66+xml"],
                ["list", "text/plain"],
                ["list3820", "application/vnd.ibm.modcap"],
                ["listafp", "application/vnd.ibm.modcap"],
                ["litcoffee", "text/coffeescript"],
                ["lnk", "application/x-ms-shortcut"],
                ["log", "text/plain"],
                ["lostxml", "application/lost+xml"],
                ["lrf", "application/octet-stream"],
                ["lrm", "application/vnd.ms-lrm"],
                ["ltf", "application/vnd.frogans.ltf"],
                ["lua", "text/x-lua"],
                ["luac", "application/x-lua-bytecode"],
                ["lvp", "audio/vnd.lucent.voice"],
                ["lwp", "application/vnd.lotus-wordpro"],
                ["lzh", "application/octet-stream"],
                ["m1v", "video/mpeg"],
                ["m2a", "audio/mpeg"],
                ["m2v", "video/mpeg"],
                ["m3a", "audio/mpeg"],
                ["m3u", "text/plain"],
                ["m3u8", "application/vnd.apple.mpegurl"],
                ["m4a", "audio/x-m4a"],
                ["m4p", "application/mp4"],
                ["m4s", "video/iso.segment"],
                ["m4u", "application/vnd.mpegurl"],
                ["m4v", "video/x-m4v"],
                ["m13", "application/x-msmediaview"],
                ["m14", "application/x-msmediaview"],
                ["m21", "application/mp21"],
                ["ma", "application/mathematica"],
                ["mads", "application/mads+xml"],
                ["maei", "application/mmt-aei+xml"],
                ["mag", "application/vnd.ecowin.chart"],
                ["maker", "application/vnd.framemaker"],
                ["man", "text/troff"],
                ["manifest", "text/cache-manifest"],
                ["map", "application/json"],
                ["mar", "application/octet-stream"],
                ["markdown", "text/markdown"],
                ["mathml", "application/mathml+xml"],
                ["mb", "application/mathematica"],
                ["mbk", "application/vnd.mobius.mbk"],
                ["mbox", "application/mbox"],
                ["mc1", "application/vnd.medcalcdata"],
                ["mcd", "application/vnd.mcd"],
                ["mcurl", "text/vnd.curl.mcurl"],
                ["md", "text/markdown"],
                ["mdb", "application/x-msaccess"],
                ["mdi", "image/vnd.ms-modi"],
                ["mdx", "text/mdx"],
                ["me", "text/troff"],
                ["mesh", "model/mesh"],
                ["meta4", "application/metalink4+xml"],
                ["metalink", "application/metalink+xml"],
                ["mets", "application/mets+xml"],
                ["mfm", "application/vnd.mfmp"],
                ["mft", "application/rpki-manifest"],
                ["mgp", "application/vnd.osgeo.mapguide.package"],
                ["mgz", "application/vnd.proteus.magazine"],
                ["mid", "audio/midi"],
                ["midi", "audio/midi"],
                ["mie", "application/x-mie"],
                ["mif", "application/vnd.mif"],
                ["mime", "message/rfc822"],
                ["mj2", "video/mj2"],
                ["mjp2", "video/mj2"],
                ["mjs", "application/javascript"],
                ["mk3d", "video/x-matroska"],
                ["mka", "audio/x-matroska"],
                ["mkd", "text/x-markdown"],
                ["mks", "video/x-matroska"],
                ["mkv", "video/x-matroska"],
                ["mlp", "application/vnd.dolby.mlp"],
                ["mmd", "application/vnd.chipnuts.karaoke-mmd"],
                ["mmf", "application/vnd.smaf"],
                ["mml", "text/mathml"],
                ["mmr", "image/vnd.fujixerox.edmics-mmr"],
                ["mng", "video/x-mng"],
                ["mny", "application/x-msmoney"],
                ["mobi", "application/x-mobipocket-ebook"],
                ["mods", "application/mods+xml"],
                ["mov", "video/quicktime"],
                ["movie", "video/x-sgi-movie"],
                ["mp2", "audio/mpeg"],
                ["mp2a", "audio/mpeg"],
                ["mp3", "audio/mpeg"],
                ["mp4", "video/mp4"],
                ["mp4a", "audio/mp4"],
                ["mp4s", "application/mp4"],
                ["mp4v", "video/mp4"],
                ["mp21", "application/mp21"],
                ["mpc", "application/vnd.mophun.certificate"],
                ["mpd", "application/dash+xml"],
                ["mpe", "video/mpeg"],
                ["mpeg", "video/mpeg"],
                ["mpg", "video/mpeg"],
                ["mpg4", "video/mp4"],
                ["mpga", "audio/mpeg"],
                ["mpkg", "application/vnd.apple.installer+xml"],
                ["mpm", "application/vnd.blueice.multipass"],
                ["mpn", "application/vnd.mophun.application"],
                ["mpp", "application/vnd.ms-project"],
                ["mpt", "application/vnd.ms-project"],
                ["mpy", "application/vnd.ibm.minipay"],
                ["mqy", "application/vnd.mobius.mqy"],
                ["mrc", "application/marc"],
                ["mrcx", "application/marcxml+xml"],
                ["ms", "text/troff"],
                ["mscml", "application/mediaservercontrol+xml"],
                ["mseed", "application/vnd.fdsn.mseed"],
                ["mseq", "application/vnd.mseq"],
                ["msf", "application/vnd.epson.msf"],
                ["msg", "application/vnd.ms-outlook"],
                ["msh", "model/mesh"],
                ["msi", "application/x-msdownload"],
                ["msl", "application/vnd.mobius.msl"],
                ["msm", "application/octet-stream"],
                ["msp", "application/octet-stream"],
                ["msty", "application/vnd.muvee.style"],
                ["mtl", "model/mtl"],
                ["mts", "model/vnd.mts"],
                ["mus", "application/vnd.musician"],
                ["musd", "application/mmt-usd+xml"],
                ["musicxml", "application/vnd.recordare.musicxml+xml"],
                ["mvb", "application/x-msmediaview"],
                ["mvt", "application/vnd.mapbox-vector-tile"],
                ["mwf", "application/vnd.mfer"],
                ["mxf", "application/mxf"],
                ["mxl", "application/vnd.recordare.musicxml"],
                ["mxmf", "audio/mobile-xmf"],
                ["mxml", "application/xv+xml"],
                ["mxs", "application/vnd.triscape.mxs"],
                ["mxu", "video/vnd.mpegurl"],
                ["n-gage", "application/vnd.nokia.n-gage.symbian.install"],
                ["n3", "text/n3"],
                ["nb", "application/mathematica"],
                ["nbp", "application/vnd.wolfram.player"],
                ["nc", "application/x-netcdf"],
                ["ncx", "application/x-dtbncx+xml"],
                ["nfo", "text/x-nfo"],
                ["ngdat", "application/vnd.nokia.n-gage.data"],
                ["nitf", "application/vnd.nitf"],
                ["nlu", "application/vnd.neurolanguage.nlu"],
                ["nml", "application/vnd.enliven"],
                ["nnd", "application/vnd.noblenet-directory"],
                ["nns", "application/vnd.noblenet-sealer"],
                ["nnw", "application/vnd.noblenet-web"],
                ["npx", "image/vnd.net-fpx"],
                ["nq", "application/n-quads"],
                ["nsc", "application/x-conference"],
                ["nsf", "application/vnd.lotus-notes"],
                ["nt", "application/n-triples"],
                ["ntf", "application/vnd.nitf"],
                ["numbers", "application/x-iwork-numbers-sffnumbers"],
                ["nzb", "application/x-nzb"],
                ["oa2", "application/vnd.fujitsu.oasys2"],
                ["oa3", "application/vnd.fujitsu.oasys3"],
                ["oas", "application/vnd.fujitsu.oasys"],
                ["obd", "application/x-msbinder"],
                ["obgx", "application/vnd.openblox.game+xml"],
                ["obj", "model/obj"],
                ["oda", "application/oda"],
                ["odb", "application/vnd.oasis.opendocument.database"],
                ["odc", "application/vnd.oasis.opendocument.chart"],
                ["odf", "application/vnd.oasis.opendocument.formula"],
                ["odft", "application/vnd.oasis.opendocument.formula-template"],
                ["odg", "application/vnd.oasis.opendocument.graphics"],
                ["odi", "application/vnd.oasis.opendocument.image"],
                ["odm", "application/vnd.oasis.opendocument.text-master"],
                ["odp", "application/vnd.oasis.opendocument.presentation"],
                ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
                ["odt", "application/vnd.oasis.opendocument.text"],
                ["oga", "audio/ogg"],
                ["ogex", "model/vnd.opengex"],
                ["ogg", "audio/ogg"],
                ["ogv", "video/ogg"],
                ["ogx", "application/ogg"],
                ["omdoc", "application/omdoc+xml"],
                ["onepkg", "application/onenote"],
                ["onetmp", "application/onenote"],
                ["onetoc", "application/onenote"],
                ["onetoc2", "application/onenote"],
                ["opf", "application/oebps-package+xml"],
                ["opml", "text/x-opml"],
                ["oprc", "application/vnd.palm"],
                ["opus", "audio/ogg"],
                ["org", "text/x-org"],
                ["osf", "application/vnd.yamaha.openscoreformat"],
                ["osfpvg", "application/vnd.yamaha.openscoreformat.osfpvg+xml"],
                ["osm", "application/vnd.openstreetmap.data+xml"],
                ["otc", "application/vnd.oasis.opendocument.chart-template"],
                ["otf", "font/otf"],
                ["otg", "application/vnd.oasis.opendocument.graphics-template"],
                ["oth", "application/vnd.oasis.opendocument.text-web"],
                ["oti", "application/vnd.oasis.opendocument.image-template"],
                ["otp", "application/vnd.oasis.opendocument.presentation-template"],
                ["ots", "application/vnd.oasis.opendocument.spreadsheet-template"],
                ["ott", "application/vnd.oasis.opendocument.text-template"],
                ["ova", "application/x-virtualbox-ova"],
                ["ovf", "application/x-virtualbox-ovf"],
                ["owl", "application/rdf+xml"],
                ["oxps", "application/oxps"],
                ["oxt", "application/vnd.openofficeorg.extension"],
                ["p", "text/x-pascal"],
                ["p7a", "application/x-pkcs7-signature"],
                ["p7b", "application/x-pkcs7-certificates"],
                ["p7c", "application/pkcs7-mime"],
                ["p7m", "application/pkcs7-mime"],
                ["p7r", "application/x-pkcs7-certreqresp"],
                ["p7s", "application/pkcs7-signature"],
                ["p8", "application/pkcs8"],
                ["p10", "application/x-pkcs10"],
                ["p12", "application/x-pkcs12"],
                ["pac", "application/x-ns-proxy-autoconfig"],
                ["pages", "application/x-iwork-pages-sffpages"],
                ["pas", "text/x-pascal"],
                ["paw", "application/vnd.pawaafile"],
                ["pbd", "application/vnd.powerbuilder6"],
                ["pbm", "image/x-portable-bitmap"],
                ["pcap", "application/vnd.tcpdump.pcap"],
                ["pcf", "application/x-font-pcf"],
                ["pcl", "application/vnd.hp-pcl"],
                ["pclxl", "application/vnd.hp-pclxl"],
                ["pct", "image/x-pict"],
                ["pcurl", "application/vnd.curl.pcurl"],
                ["pcx", "image/x-pcx"],
                ["pdb", "application/x-pilot"],
                ["pde", "text/x-processing"],
                ["pdf", "application/pdf"],
                ["pem", "application/x-x509-user-cert"],
                ["pfa", "application/x-font-type1"],
                ["pfb", "application/x-font-type1"],
                ["pfm", "application/x-font-type1"],
                ["pfr", "application/font-tdpfr"],
                ["pfx", "application/x-pkcs12"],
                ["pgm", "image/x-portable-graymap"],
                ["pgn", "application/x-chess-pgn"],
                ["pgp", "application/pgp"],
                ["php", "application/x-httpd-php"],
                ["php3", "application/x-httpd-php"],
                ["php4", "application/x-httpd-php"],
                ["phps", "application/x-httpd-php-source"],
                ["phtml", "application/x-httpd-php"],
                ["pic", "image/x-pict"],
                ["pkg", "application/octet-stream"],
                ["pki", "application/pkixcmp"],
                ["pkipath", "application/pkix-pkipath"],
                ["pkpass", "application/vnd.apple.pkpass"],
                ["pl", "application/x-perl"],
                ["plb", "application/vnd.3gpp.pic-bw-large"],
                ["plc", "application/vnd.mobius.plc"],
                ["plf", "application/vnd.pocketlearn"],
                ["pls", "application/pls+xml"],
                ["pm", "application/x-perl"],
                ["pml", "application/vnd.ctc-posml"],
                ["png", "image/png"],
                ["pnm", "image/x-portable-anymap"],
                ["portpkg", "application/vnd.macports.portpkg"],
                ["pot", "application/vnd.ms-powerpoint"],
                ["potm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
                ["potx", "application/vnd.openxmlformats-officedocument.presentationml.template"],
                ["ppa", "application/vnd.ms-powerpoint"],
                ["ppam", "application/vnd.ms-powerpoint.addin.macroEnabled.12"],
                ["ppd", "application/vnd.cups-ppd"],
                ["ppm", "image/x-portable-pixmap"],
                ["pps", "application/vnd.ms-powerpoint"],
                ["ppsm", "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],
                ["ppsx", "application/vnd.openxmlformats-officedocument.presentationml.slideshow"],
                ["ppt", "application/powerpoint"],
                ["pptm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
                ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
                ["pqa", "application/vnd.palm"],
                ["prc", "application/x-pilot"],
                ["pre", "application/vnd.lotus-freelance"],
                ["prf", "application/pics-rules"],
                ["provx", "application/provenance+xml"],
                ["ps", "application/postscript"],
                ["psb", "application/vnd.3gpp.pic-bw-small"],
                ["psd", "application/x-photoshop"],
                ["psf", "application/x-font-linux-psf"],
                ["pskcxml", "application/pskc+xml"],
                ["pti", "image/prs.pti"],
                ["ptid", "application/vnd.pvi.ptid1"],
                ["pub", "application/x-mspublisher"],
                ["pvb", "application/vnd.3gpp.pic-bw-var"],
                ["pwn", "application/vnd.3m.post-it-notes"],
                ["pya", "audio/vnd.ms-playready.media.pya"],
                ["pyv", "video/vnd.ms-playready.media.pyv"],
                ["qam", "application/vnd.epson.quickanime"],
                ["qbo", "application/vnd.intu.qbo"],
                ["qfx", "application/vnd.intu.qfx"],
                ["qps", "application/vnd.publishare-delta-tree"],
                ["qt", "video/quicktime"],
                ["qwd", "application/vnd.quark.quarkxpress"],
                ["qwt", "application/vnd.quark.quarkxpress"],
                ["qxb", "application/vnd.quark.quarkxpress"],
                ["qxd", "application/vnd.quark.quarkxpress"],
                ["qxl", "application/vnd.quark.quarkxpress"],
                ["qxt", "application/vnd.quark.quarkxpress"],
                ["ra", "audio/x-realaudio"],
                ["ram", "audio/x-pn-realaudio"],
                ["raml", "application/raml+yaml"],
                ["rapd", "application/route-apd+xml"],
                ["rar", "application/x-rar"],
                ["ras", "image/x-cmu-raster"],
                ["rcprofile", "application/vnd.ipunplugged.rcprofile"],
                ["rdf", "application/rdf+xml"],
                ["rdz", "application/vnd.data-vision.rdz"],
                ["relo", "application/p2p-overlay+xml"],
                ["rep", "application/vnd.businessobjects"],
                ["res", "application/x-dtbresource+xml"],
                ["rgb", "image/x-rgb"],
                ["rif", "application/reginfo+xml"],
                ["rip", "audio/vnd.rip"],
                ["ris", "application/x-research-info-systems"],
                ["rl", "application/resource-lists+xml"],
                ["rlc", "image/vnd.fujixerox.edmics-rlc"],
                ["rld", "application/resource-lists-diff+xml"],
                ["rm", "audio/x-pn-realaudio"],
                ["rmi", "audio/midi"],
                ["rmp", "audio/x-pn-realaudio-plugin"],
                ["rms", "application/vnd.jcp.javame.midlet-rms"],
                ["rmvb", "application/vnd.rn-realmedia-vbr"],
                ["rnc", "application/relax-ng-compact-syntax"],
                ["rng", "application/xml"],
                ["roa", "application/rpki-roa"],
                ["roff", "text/troff"],
                ["rp9", "application/vnd.cloanto.rp9"],
                ["rpm", "audio/x-pn-realaudio-plugin"],
                ["rpss", "application/vnd.nokia.radio-presets"],
                ["rpst", "application/vnd.nokia.radio-preset"],
                ["rq", "application/sparql-query"],
                ["rs", "application/rls-services+xml"],
                ["rsa", "application/x-pkcs7"],
                ["rsat", "application/atsc-rsat+xml"],
                ["rsd", "application/rsd+xml"],
                ["rsheet", "application/urc-ressheet+xml"],
                ["rss", "application/rss+xml"],
                ["rtf", "text/rtf"],
                ["rtx", "text/richtext"],
                ["run", "application/x-makeself"],
                ["rusd", "application/route-usd+xml"],
                ["rv", "video/vnd.rn-realvideo"],
                ["s", "text/x-asm"],
                ["s3m", "audio/s3m"],
                ["saf", "application/vnd.yamaha.smaf-audio"],
                ["sass", "text/x-sass"],
                ["sbml", "application/sbml+xml"],
                ["sc", "application/vnd.ibm.secure-container"],
                ["scd", "application/x-msschedule"],
                ["scm", "application/vnd.lotus-screencam"],
                ["scq", "application/scvp-cv-request"],
                ["scs", "application/scvp-cv-response"],
                ["scss", "text/x-scss"],
                ["scurl", "text/vnd.curl.scurl"],
                ["sda", "application/vnd.stardivision.draw"],
                ["sdc", "application/vnd.stardivision.calc"],
                ["sdd", "application/vnd.stardivision.impress"],
                ["sdkd", "application/vnd.solent.sdkm+xml"],
                ["sdkm", "application/vnd.solent.sdkm+xml"],
                ["sdp", "application/sdp"],
                ["sdw", "application/vnd.stardivision.writer"],
                ["sea", "application/octet-stream"],
                ["see", "application/vnd.seemail"],
                ["seed", "application/vnd.fdsn.seed"],
                ["sema", "application/vnd.sema"],
                ["semd", "application/vnd.semd"],
                ["semf", "application/vnd.semf"],
                ["senmlx", "application/senml+xml"],
                ["sensmlx", "application/sensml+xml"],
                ["ser", "application/java-serialized-object"],
                ["setpay", "application/set-payment-initiation"],
                ["setreg", "application/set-registration-initiation"],
                ["sfd-hdstx", "application/vnd.hydrostatix.sof-data"],
                ["sfs", "application/vnd.spotfire.sfs"],
                ["sfv", "text/x-sfv"],
                ["sgi", "image/sgi"],
                ["sgl", "application/vnd.stardivision.writer-global"],
                ["sgm", "text/sgml"],
                ["sgml", "text/sgml"],
                ["sh", "application/x-sh"],
                ["shar", "application/x-shar"],
                ["shex", "text/shex"],
                ["shf", "application/shf+xml"],
                ["shtml", "text/html"],
                ["sid", "image/x-mrsid-image"],
                ["sieve", "application/sieve"],
                ["sig", "application/pgp-signature"],
                ["sil", "audio/silk"],
                ["silo", "model/mesh"],
                ["sis", "application/vnd.symbian.install"],
                ["sisx", "application/vnd.symbian.install"],
                ["sit", "application/x-stuffit"],
                ["sitx", "application/x-stuffitx"],
                ["siv", "application/sieve"],
                ["skd", "application/vnd.koan"],
                ["skm", "application/vnd.koan"],
                ["skp", "application/vnd.koan"],
                ["skt", "application/vnd.koan"],
                ["sldm", "application/vnd.ms-powerpoint.slide.macroenabled.12"],
                ["sldx", "application/vnd.openxmlformats-officedocument.presentationml.slide"],
                ["slim", "text/slim"],
                ["slm", "text/slim"],
                ["sls", "application/route-s-tsid+xml"],
                ["slt", "application/vnd.epson.salt"],
                ["sm", "application/vnd.stepmania.stepchart"],
                ["smf", "application/vnd.stardivision.math"],
                ["smi", "application/smil"],
                ["smil", "application/smil"],
                ["smv", "video/x-smv"],
                ["smzip", "application/vnd.stepmania.package"],
                ["snd", "audio/basic"],
                ["snf", "application/x-font-snf"],
                ["so", "application/octet-stream"],
                ["spc", "application/x-pkcs7-certificates"],
                ["spdx", "text/spdx"],
                ["spf", "application/vnd.yamaha.smaf-phrase"],
                ["spl", "application/x-futuresplash"],
                ["spot", "text/vnd.in3d.spot"],
                ["spp", "application/scvp-vp-response"],
                ["spq", "application/scvp-vp-request"],
                ["spx", "audio/ogg"],
                ["sql", "application/x-sql"],
                ["src", "application/x-wais-source"],
                ["srt", "application/x-subrip"],
                ["sru", "application/sru+xml"],
                ["srx", "application/sparql-results+xml"],
                ["ssdl", "application/ssdl+xml"],
                ["sse", "application/vnd.kodak-descriptor"],
                ["ssf", "application/vnd.epson.ssf"],
                ["ssml", "application/ssml+xml"],
                ["sst", "application/octet-stream"],
                ["st", "application/vnd.sailingtracker.track"],
                ["stc", "application/vnd.sun.xml.calc.template"],
                ["std", "application/vnd.sun.xml.draw.template"],
                ["stf", "application/vnd.wt.stf"],
                ["sti", "application/vnd.sun.xml.impress.template"],
                ["stk", "application/hyperstudio"],
                ["stl", "model/stl"],
                ["stpx", "model/step+xml"],
                ["stpxz", "model/step-xml+zip"],
                ["stpz", "model/step+zip"],
                ["str", "application/vnd.pg.format"],
                ["stw", "application/vnd.sun.xml.writer.template"],
                ["styl", "text/stylus"],
                ["stylus", "text/stylus"],
                ["sub", "text/vnd.dvb.subtitle"],
                ["sus", "application/vnd.sus-calendar"],
                ["susp", "application/vnd.sus-calendar"],
                ["sv4cpio", "application/x-sv4cpio"],
                ["sv4crc", "application/x-sv4crc"],
                ["svc", "application/vnd.dvb.service"],
                ["svd", "application/vnd.svd"],
                ["svg", "image/svg+xml"],
                ["svgz", "image/svg+xml"],
                ["swa", "application/x-director"],
                ["swf", "application/x-shockwave-flash"],
                ["swi", "application/vnd.aristanetworks.swi"],
                ["swidtag", "application/swid+xml"],
                ["sxc", "application/vnd.sun.xml.calc"],
                ["sxd", "application/vnd.sun.xml.draw"],
                ["sxg", "application/vnd.sun.xml.writer.global"],
                ["sxi", "application/vnd.sun.xml.impress"],
                ["sxm", "application/vnd.sun.xml.math"],
                ["sxw", "application/vnd.sun.xml.writer"],
                ["t", "text/troff"],
                ["t3", "application/x-t3vm-image"],
                ["t38", "image/t38"],
                ["taglet", "application/vnd.mynfc"],
                ["tao", "application/vnd.tao.intent-module-archive"],
                ["tap", "image/vnd.tencent.tap"],
                ["tar", "application/x-tar"],
                ["tcap", "application/vnd.3gpp2.tcap"],
                ["tcl", "application/x-tcl"],
                ["td", "application/urc-targetdesc+xml"],
                ["teacher", "application/vnd.smart.teacher"],
                ["tei", "application/tei+xml"],
                ["teicorpus", "application/tei+xml"],
                ["tex", "application/x-tex"],
                ["texi", "application/x-texinfo"],
                ["texinfo", "application/x-texinfo"],
                ["text", "text/plain"],
                ["tfi", "application/thraud+xml"],
                ["tfm", "application/x-tex-tfm"],
                ["tfx", "image/tiff-fx"],
                ["tga", "image/x-tga"],
                ["tgz", "application/x-tar"],
                ["thmx", "application/vnd.ms-officetheme"],
                ["tif", "image/tiff"],
                ["tiff", "image/tiff"],
                ["tk", "application/x-tcl"],
                ["tmo", "application/vnd.tmobile-livetv"],
                ["toml", "application/toml"],
                ["torrent", "application/x-bittorrent"],
                ["tpl", "application/vnd.groove-tool-template"],
                ["tpt", "application/vnd.trid.tpt"],
                ["tr", "text/troff"],
                ["tra", "application/vnd.trueapp"],
                ["trig", "application/trig"],
                ["trm", "application/x-msterminal"],
                ["ts", "video/mp2t"],
                ["tsd", "application/timestamped-data"],
                ["tsv", "text/tab-separated-values"],
                ["ttc", "font/collection"],
                ["ttf", "font/ttf"],
                ["ttl", "text/turtle"],
                ["ttml", "application/ttml+xml"],
                ["twd", "application/vnd.simtech-mindmapper"],
                ["twds", "application/vnd.simtech-mindmapper"],
                ["txd", "application/vnd.genomatix.tuxedo"],
                ["txf", "application/vnd.mobius.txf"],
                ["txt", "text/plain"],
                ["u8dsn", "message/global-delivery-status"],
                ["u8hdr", "message/global-headers"],
                ["u8mdn", "message/global-disposition-notification"],
                ["u8msg", "message/global"],
                ["u32", "application/x-authorware-bin"],
                ["ubj", "application/ubjson"],
                ["udeb", "application/x-debian-package"],
                ["ufd", "application/vnd.ufdl"],
                ["ufdl", "application/vnd.ufdl"],
                ["ulx", "application/x-glulx"],
                ["umj", "application/vnd.umajin"],
                ["unityweb", "application/vnd.unity"],
                ["uoml", "application/vnd.uoml+xml"],
                ["uri", "text/uri-list"],
                ["uris", "text/uri-list"],
                ["urls", "text/uri-list"],
                ["usdz", "model/vnd.usdz+zip"],
                ["ustar", "application/x-ustar"],
                ["utz", "application/vnd.uiq.theme"],
                ["uu", "text/x-uuencode"],
                ["uva", "audio/vnd.dece.audio"],
                ["uvd", "application/vnd.dece.data"],
                ["uvf", "application/vnd.dece.data"],
                ["uvg", "image/vnd.dece.graphic"],
                ["uvh", "video/vnd.dece.hd"],
                ["uvi", "image/vnd.dece.graphic"],
                ["uvm", "video/vnd.dece.mobile"],
                ["uvp", "video/vnd.dece.pd"],
                ["uvs", "video/vnd.dece.sd"],
                ["uvt", "application/vnd.dece.ttml+xml"],
                ["uvu", "video/vnd.uvvu.mp4"],
                ["uvv", "video/vnd.dece.video"],
                ["uvva", "audio/vnd.dece.audio"],
                ["uvvd", "application/vnd.dece.data"],
                ["uvvf", "application/vnd.dece.data"],
                ["uvvg", "image/vnd.dece.graphic"],
                ["uvvh", "video/vnd.dece.hd"],
                ["uvvi", "image/vnd.dece.graphic"],
                ["uvvm", "video/vnd.dece.mobile"],
                ["uvvp", "video/vnd.dece.pd"],
                ["uvvs", "video/vnd.dece.sd"],
                ["uvvt", "application/vnd.dece.ttml+xml"],
                ["uvvu", "video/vnd.uvvu.mp4"],
                ["uvvv", "video/vnd.dece.video"],
                ["uvvx", "application/vnd.dece.unspecified"],
                ["uvvz", "application/vnd.dece.zip"],
                ["uvx", "application/vnd.dece.unspecified"],
                ["uvz", "application/vnd.dece.zip"],
                ["vbox", "application/x-virtualbox-vbox"],
                ["vbox-extpack", "application/x-virtualbox-vbox-extpack"],
                ["vcard", "text/vcard"],
                ["vcd", "application/x-cdlink"],
                ["vcf", "text/x-vcard"],
                ["vcg", "application/vnd.groove-vcard"],
                ["vcs", "text/x-vcalendar"],
                ["vcx", "application/vnd.vcx"],
                ["vdi", "application/x-virtualbox-vdi"],
                ["vds", "model/vnd.sap.vds"],
                ["vhd", "application/x-virtualbox-vhd"],
                ["vis", "application/vnd.visionary"],
                ["viv", "video/vnd.vivo"],
                ["vlc", "application/videolan"],
                ["vmdk", "application/x-virtualbox-vmdk"],
                ["vob", "video/x-ms-vob"],
                ["vor", "application/vnd.stardivision.writer"],
                ["vox", "application/x-authorware-bin"],
                ["vrml", "model/vrml"],
                ["vsd", "application/vnd.visio"],
                ["vsf", "application/vnd.vsf"],
                ["vss", "application/vnd.visio"],
                ["vst", "application/vnd.visio"],
                ["vsw", "application/vnd.visio"],
                ["vtf", "image/vnd.valve.source.texture"],
                ["vtt", "text/vtt"],
                ["vtu", "model/vnd.vtu"],
                ["vxml", "application/voicexml+xml"],
                ["w3d", "application/x-director"],
                ["wad", "application/x-doom"],
                ["wadl", "application/vnd.sun.wadl+xml"],
                ["war", "application/java-archive"],
                ["wasm", "application/wasm"],
                ["wav", "audio/x-wav"],
                ["wax", "audio/x-ms-wax"],
                ["wbmp", "image/vnd.wap.wbmp"],
                ["wbs", "application/vnd.criticaltools.wbs+xml"],
                ["wbxml", "application/wbxml"],
                ["wcm", "application/vnd.ms-works"],
                ["wdb", "application/vnd.ms-works"],
                ["wdp", "image/vnd.ms-photo"],
                ["weba", "audio/webm"],
                ["webapp", "application/x-web-app-manifest+json"],
                ["webm", "video/webm"],
                ["webmanifest", "application/manifest+json"],
                ["webp", "image/webp"],
                ["wg", "application/vnd.pmi.widget"],
                ["wgt", "application/widget"],
                ["wks", "application/vnd.ms-works"],
                ["wm", "video/x-ms-wm"],
                ["wma", "audio/x-ms-wma"],
                ["wmd", "application/x-ms-wmd"],
                ["wmf", "image/wmf"],
                ["wml", "text/vnd.wap.wml"],
                ["wmlc", "application/wmlc"],
                ["wmls", "text/vnd.wap.wmlscript"],
                ["wmlsc", "application/vnd.wap.wmlscriptc"],
                ["wmv", "video/x-ms-wmv"],
                ["wmx", "video/x-ms-wmx"],
                ["wmz", "application/x-msmetafile"],
                ["woff", "font/woff"],
                ["woff2", "font/woff2"],
                ["word", "application/msword"],
                ["wpd", "application/vnd.wordperfect"],
                ["wpl", "application/vnd.ms-wpl"],
                ["wps", "application/vnd.ms-works"],
                ["wqd", "application/vnd.wqd"],
                ["wri", "application/x-mswrite"],
                ["wrl", "model/vrml"],
                ["wsc", "message/vnd.wfa.wsc"],
                ["wsdl", "application/wsdl+xml"],
                ["wspolicy", "application/wspolicy+xml"],
                ["wtb", "application/vnd.webturbo"],
                ["wvx", "video/x-ms-wvx"],
                ["x3d", "model/x3d+xml"],
                ["x3db", "model/x3d+fastinfoset"],
                ["x3dbz", "model/x3d+binary"],
                ["x3dv", "model/x3d-vrml"],
                ["x3dvz", "model/x3d+vrml"],
                ["x3dz", "model/x3d+xml"],
                ["x32", "application/x-authorware-bin"],
                ["x_b", "model/vnd.parasolid.transmit.binary"],
                ["x_t", "model/vnd.parasolid.transmit.text"],
                ["xaml", "application/xaml+xml"],
                ["xap", "application/x-silverlight-app"],
                ["xar", "application/vnd.xara"],
                ["xav", "application/xcap-att+xml"],
                ["xbap", "application/x-ms-xbap"],
                ["xbd", "application/vnd.fujixerox.docuworks.binder"],
                ["xbm", "image/x-xbitmap"],
                ["xca", "application/xcap-caps+xml"],
                ["xcs", "application/calendar+xml"],
                ["xdf", "application/xcap-diff+xml"],
                ["xdm", "application/vnd.syncml.dm+xml"],
                ["xdp", "application/vnd.adobe.xdp+xml"],
                ["xdssc", "application/dssc+xml"],
                ["xdw", "application/vnd.fujixerox.docuworks"],
                ["xel", "application/xcap-el+xml"],
                ["xenc", "application/xenc+xml"],
                ["xer", "application/patch-ops-error+xml"],
                ["xfdf", "application/vnd.adobe.xfdf"],
                ["xfdl", "application/vnd.xfdl"],
                ["xht", "application/xhtml+xml"],
                ["xhtml", "application/xhtml+xml"],
                ["xhvml", "application/xv+xml"],
                ["xif", "image/vnd.xiff"],
                ["xl", "application/excel"],
                ["xla", "application/vnd.ms-excel"],
                ["xlam", "application/vnd.ms-excel.addin.macroEnabled.12"],
                ["xlc", "application/vnd.ms-excel"],
                ["xlf", "application/xliff+xml"],
                ["xlm", "application/vnd.ms-excel"],
                ["xls", "application/vnd.ms-excel"],
                ["xlsb", "application/vnd.ms-excel.sheet.binary.macroEnabled.12"],
                ["xlsm", "application/vnd.ms-excel.sheet.macroEnabled.12"],
                ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
                ["xlt", "application/vnd.ms-excel"],
                ["xltm", "application/vnd.ms-excel.template.macroEnabled.12"],
                ["xltx", "application/vnd.openxmlformats-officedocument.spreadsheetml.template"],
                ["xlw", "application/vnd.ms-excel"],
                ["xm", "audio/xm"],
                ["xml", "application/xml"],
                ["xns", "application/xcap-ns+xml"],
                ["xo", "application/vnd.olpc-sugar"],
                ["xop", "application/xop+xml"],
                ["xpi", "application/x-xpinstall"],
                ["xpl", "application/xproc+xml"],
                ["xpm", "image/x-xpixmap"],
                ["xpr", "application/vnd.is-xpr"],
                ["xps", "application/vnd.ms-xpsdocument"],
                ["xpw", "application/vnd.intercon.formnet"],
                ["xpx", "application/vnd.intercon.formnet"],
                ["xsd", "application/xml"],
                ["xsl", "application/xml"],
                ["xslt", "application/xslt+xml"],
                ["xsm", "application/vnd.syncml+xml"],
                ["xspf", "application/xspf+xml"],
                ["xul", "application/vnd.mozilla.xul+xml"],
                ["xvm", "application/xv+xml"],
                ["xvml", "application/xv+xml"],
                ["xwd", "image/x-xwindowdump"],
                ["xyz", "chemical/x-xyz"],
                ["xz", "application/x-xz"],
                ["yaml", "text/yaml"],
                ["yang", "application/yang"],
                ["yin", "application/yin+xml"],
                ["yml", "text/yaml"],
                ["ymp", "text/x-suse-ymp"],
                ["z", "application/x-compress"],
                ["z1", "application/x-zmachine"],
                ["z2", "application/x-zmachine"],
                ["z3", "application/x-zmachine"],
                ["z4", "application/x-zmachine"],
                ["z5", "application/x-zmachine"],
                ["z6", "application/x-zmachine"],
                ["z7", "application/x-zmachine"],
                ["z8", "application/x-zmachine"],
                ["zaz", "application/vnd.zzazz.deck+xml"],
                ["zip", "application/zip"],
                ["zir", "application/vnd.zul"],
                ["zirz", "application/vnd.zul"],
                ["zmm", "application/vnd.handheld-entertainment+xml"],
                ["zsh", "text/x-scriptzsh"]
            ]);

            function l(t, e, i) {
                let n = function(t) {
                    let {
                        name: e
                    } = t;
                    if (e && -1 !== e.lastIndexOf(".") && !t.type) {
                        let i = e.split(".").pop().toLowerCase(),
                            n = p.get(i);
                        n && Object.defineProperty(t, "type", {
                            value: n,
                            writable: !1,
                            configurable: !1,
                            enumerable: !0
                        })
                    }
                    return t
                }(t);
                if ("string" != typeof n.path) {
                    let {
                        webkitRelativePath: i
                    } = t;
                    Object.defineProperty(n, "path", {
                        value: "string" == typeof e ? e : "string" == typeof i && i.length > 0 ? i : t.name,
                        writable: !1,
                        configurable: !1,
                        enumerable: !0
                    })
                }
                return void 0 !== i && Object.defineProperty(n, "handle", {
                    value: i,
                    writable: !1,
                    configurable: !1,
                    enumerable: !0
                }), n
            }
            let s = [".DS_Store", "Thumbs.db"];

            function c(t) {
                return "object" == typeof t && null !== t
            }

            function d(t) {
                return t.filter(t => -1 === s.indexOf(t.name))
            }

            function u(t) {
                if (null === t) return [];
                let e = [];
                for (let i = 0; i < t.length; i++) {
                    let n = t[i];
                    e.push(n)
                }
                return e
            }

            function m(t) {
                if ("function" != typeof t.webkitGetAsEntry) return f(t);
                let e = t.webkitGetAsEntry();
                return e && e.isDirectory ? h(e) : f(t)
            }

            function f(t) {
                if ("function" == typeof t.getAsFileSystemHandle) return t.getAsFileSystemHandle().then(t => (0, r.mG)(this, void 0, void 0, function*() {
                    let e = yield t.getFile();
                    return e.handle = t, l(e)
                }));
                let e = t.getAsFile();
                return e ? Promise.resolve(l(e)) : Promise.reject(`${t} is not a File`)
            }

            function v(t) {
                return (0, r.mG)(this, void 0, void 0, function*() {
                    return t.isDirectory ? h(t) : function(t) {
                        return (0, r.mG)(this, void 0, void 0, function*() {
                            return new Promise((e, i) => {
                                t.file(i => {
                                    e(l(i, t.fullPath))
                                }, t => {
                                    i(t)
                                })
                            })
                        })
                    }(t)
                })
            }

            function h(t) {
                let e = t.createReader();
                return new Promise((t, i) => {
                    let n = [];
                    ! function a() {
                        e.readEntries(e => (0, r.mG)(this, void 0, void 0, function*() {
                            if (e.length) {
                                let t = Promise.all(e.map(v));
                                n.push(t), a()
                            } else try {
                                let e = yield Promise.all(n);
                                t(e)
                            } catch (t) {
                                i(t)
                            }
                        }), t => {
                            i(t)
                        })
                    }()
                })
            }
            var g = i(30387);

            function x(t) {
                return function(t) {
                    if (Array.isArray(t)) return C(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || j(t) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function b(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), i.push.apply(i, n)
                }
                return i
            }

            function y(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? b(Object(i), !0).forEach(function(e) {
                        w(t, e, i[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : b(Object(i)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    })
                }
                return t
            }

            function w(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }

            function k(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var i, n, a = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != a) {
                        var o = [],
                            r = !0,
                            p = !1;
                        try {
                            for (a = a.call(t); !(r = (i = a.next()).done) && (o.push(i.value), !e || o.length !== e); r = !0);
                        } catch (t) {
                            p = !0, n = t
                        } finally {
                            try {
                                r || null == a.return || a.return()
                            } finally {
                                if (p) throw n
                            }
                        }
                        return o
                    }
                }(t, e) || j(t, e) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function j(t, e) {
                if (t) {
                    if ("string" == typeof t) return C(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    if ("Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i) return Array.from(t);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return C(t, e)
                }
            }

            function C(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = Array(e); i < e; i++) n[i] = t[i];
                return n
            }
            var E = "function" == typeof g.Z ? g.Z : g.Z.default,
                S = function(t) {
                    var e = Array.isArray(t = Array.isArray(t) && 1 === t.length ? t[0] : t) ? "one of ".concat(t.join(", ")) : t;
                    return {
                        code: "file-invalid-type",
                        message: "File type must be ".concat(e)
                    }
                },
                z = function(t) {
                    return {
                        code: "file-too-large",
                        message: "File is larger than ".concat(t, " ").concat(1 === t ? "byte" : "bytes")
                    }
                },
                D = function(t) {
                    return {
                        code: "file-too-small",
                        message: "File is smaller than ".concat(t, " ").concat(1 === t ? "byte" : "bytes")
                    }
                },
                M = {
                    code: "too-many-files",
                    message: "Too many files"
                };

            function O(t, e) {
                var i = "application/x-moz-file" === t.type || E(t, e);
                return [i, i ? null : S(e)]
            }

            function P(t, e, i) {
                if (A(t.size)) {
                    if (A(e) && A(i)) {
                        if (t.size > i) return [!1, z(i)];
                        if (t.size < e) return [!1, D(e)]
                    } else if (A(e) && t.size < e) return [!1, D(e)];
                    else if (A(i) && t.size > i) return [!1, z(i)]
                }
                return [!0, null]
            }

            function A(t) {
                return null != t
            }

            function I(t) {
                return "function" == typeof t.isPropagationStopped ? t.isPropagationStopped() : void 0 !== t.cancelBubble && t.cancelBubble
            }

            function T(t) {
                return t.dataTransfer ? Array.prototype.some.call(t.dataTransfer.types, function(t) {
                    return "Files" === t || "application/x-moz-file" === t
                }) : !!t.target && !!t.target.files
            }

            function R(t) {
                t.preventDefault()
            }

            function F() {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return function(t) {
                    for (var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) n[a - 1] = arguments[a];
                    return e.some(function(e) {
                        return !I(t) && e && e.apply(void 0, [t].concat(n)), I(t)
                    })
                }
            }

            function _(t) {
                return "audio/*" === t || "video/*" === t || "image/*" === t || "text/*" === t || "application/*" === t || /\w+\/[-+.\w]+/g.test(t)
            }

            function q(t) {
                return /^.*\.[\w]+$/.test(t)
            }
            var N = ["children"],
                V = ["open"],
                B = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
                L = ["refKey", "onChange", "onClick"];

            function G(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var i, n, a = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != a) {
                        var o = [],
                            r = !0,
                            p = !1;
                        try {
                            for (a = a.call(t); !(r = (i = a.next()).done) && (o.push(i.value), !e || o.length !== e); r = !0);
                        } catch (t) {
                            p = !0, n = t
                        } finally {
                            try {
                                r || null == a.return || a.return()
                            } finally {
                                if (p) throw n
                            }
                        }
                        return o
                    }
                }(t, e) || H(t, e) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function H(t, e) {
                if (t) {
                    if ("string" == typeof t) return $(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    if ("Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i) return Array.from(t);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return $(t, e)
                }
            }

            function $(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = Array(e); i < e; i++) n[i] = t[i];
                return n
            }

            function Z(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), i.push.apply(i, n)
                }
                return i
            }

            function W(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Z(Object(i), !0).forEach(function(e) {
                        U(t, e, i[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Z(Object(i)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    })
                }
                return t
            }

            function U(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }

            function K(t, e) {
                if (null == t) return {};
                var i, n, a = function(t, e) {
                    if (null == t) return {};
                    var i, n, a = {},
                        o = Object.keys(t);
                    for (n = 0; n < o.length; n++) i = o[n], e.indexOf(i) >= 0 || (a[i] = t[i]);
                    return a
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < o.length; n++) i = o[n], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (a[i] = t[i])
                }
                return a
            }
            var Y = (0, n.forwardRef)(function(t, e) {
                var i = t.children,
                    a = Q(K(t, N)),
                    o = a.open,
                    r = K(a, V);
                return (0, n.useImperativeHandle)(e, function() {
                    return {
                        open: o
                    }
                }, [o]), n.createElement(n.Fragment, null, i(W(W({}, r), {}, {
                    open: o
                })))
            });
            Y.displayName = "Dropzone";
            var J = {
                disabled: !1,
                getFilesFromEvent: function(t) {
                    return (0, r.mG)(this, void 0, void 0, function*() {
                        return c(t) && c(t.dataTransfer) ? function(t, e) {
                            return (0, r.mG)(this, void 0, void 0, function*() {
                                if (t.items) {
                                    let i = u(t.items).filter(t => "file" === t.kind);
                                    return "drop" !== e ? i : d(function t(e) {
                                        return e.reduce((e, i) => [...e, ...Array.isArray(i) ? t(i) : [i]], [])
                                    }((yield Promise.all(i.map(m)))))
                                }
                                return d(u(t.files).map(t => l(t)))
                            })
                        }(t.dataTransfer, t.type) : c(t) && c(t.target) ? u(t.target.files).map(t => l(t)) : Array.isArray(t) && t.every(t => "getFile" in t && "function" == typeof t.getFile) ? function(t) {
                            return (0, r.mG)(this, void 0, void 0, function*() {
                                return (yield Promise.all(t.map(t => t.getFile()))).map(t => l(t))
                            })
                        }(t) : []
                    })
                },
                maxSize: 1 / 0,
                minSize: 0,
                multiple: !0,
                maxFiles: 0,
                preventDropOnDocument: !0,
                noClick: !1,
                noKeyboard: !1,
                noDrag: !1,
                noDragEventsBubbling: !1,
                validator: null,
                useFsAccessApi: !1,
                autoFocus: !1
            };
            Y.defaultProps = J, Y.propTypes = {
                children: o().func,
                accept: o().objectOf(o().arrayOf(o().string)),
                multiple: o().bool,
                preventDropOnDocument: o().bool,
                noClick: o().bool,
                noKeyboard: o().bool,
                noDrag: o().bool,
                noDragEventsBubbling: o().bool,
                minSize: o().number,
                maxSize: o().number,
                maxFiles: o().number,
                disabled: o().bool,
                getFilesFromEvent: o().func,
                onFileDialogCancel: o().func,
                onFileDialogOpen: o().func,
                useFsAccessApi: o().bool,
                autoFocus: o().bool,
                onDragEnter: o().func,
                onDragLeave: o().func,
                onDragOver: o().func,
                onDrop: o().func,
                onDropAccepted: o().func,
                onDropRejected: o().func,
                onError: o().func,
                validator: o().func
            };
            var X = {
                isFocused: !1,
                isFileDialogActive: !1,
                isDragActive: !1,
                isDragAccept: !1,
                isDragReject: !1,
                acceptedFiles: [],
                fileRejections: []
            };

            function Q() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = W(W({}, J), t),
                    i = e.accept,
                    a = e.disabled,
                    o = e.getFilesFromEvent,
                    r = e.maxSize,
                    p = e.minSize,
                    l = e.multiple,
                    s = e.maxFiles,
                    c = e.onDragEnter,
                    d = e.onDragLeave,
                    u = e.onDragOver,
                    m = e.onDrop,
                    f = e.onDropAccepted,
                    v = e.onDropRejected,
                    h = e.onFileDialogCancel,
                    g = e.onFileDialogOpen,
                    b = e.useFsAccessApi,
                    j = e.autoFocus,
                    C = e.preventDropOnDocument,
                    E = e.noClick,
                    S = e.noKeyboard,
                    z = e.noDrag,
                    D = e.noDragEventsBubbling,
                    N = e.onError,
                    V = e.validator,
                    Z = (0, n.useMemo)(function() {
                        return function(t) {
                            if (A(t)) return Object.entries(t).reduce(function(t, e) {
                                var i = k(e, 2),
                                    n = i[0],
                                    a = i[1];
                                return [].concat(x(t), [n], x(a))
                            }, []).filter(function(t) {
                                return _(t) || q(t)
                            }).join(",")
                        }(i)
                    }, [i]),
                    Y = (0, n.useMemo)(function() {
                        return A(i) ? [{
                            description: "Files",
                            accept: Object.entries(i).filter(function(t) {
                                var e = k(t, 2),
                                    i = e[0],
                                    n = e[1],
                                    a = !0;
                                return _(i) || (console.warn('Skipped "'.concat(i, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), a = !1), Array.isArray(n) && n.every(q) || (console.warn('Skipped "'.concat(i, '" because an invalid file extension was provided.')), a = !1), a
                            }).reduce(function(t, e) {
                                var i = k(e, 2),
                                    n = i[0],
                                    a = i[1];
                                return y(y({}, t), {}, w({}, n, a))
                            }, {})
                        }] : i
                    }, [i]),
                    Q = (0, n.useMemo)(function() {
                        return "function" == typeof g ? g : te
                    }, [g]),
                    ti = (0, n.useMemo)(function() {
                        return "function" == typeof h ? h : te
                    }, [h]),
                    tn = (0, n.useRef)(null),
                    ta = (0, n.useRef)(null),
                    to = G((0, n.useReducer)(tt, X), 2),
                    tr = to[0],
                    tp = to[1],
                    tl = tr.isFocused,
                    ts = tr.isFileDialogActive,
                    tc = (0, n.useRef)("undefined" != typeof window && window.isSecureContext && b && "showOpenFilePicker" in window),
                    td = function() {
                        !tc.current && ts && setTimeout(function() {
                            ta.current && !ta.current.files.length && (tp({
                                type: "closeDialog"
                            }), ti())
                        }, 300)
                    };
                (0, n.useEffect)(function() {
                    return window.addEventListener("focus", td, !1),
                        function() {
                            window.removeEventListener("focus", td, !1)
                        }
                }, [ta, ts, ti, tc]);
                var tu = (0, n.useRef)([]),
                    tm = function(t) {
                        tn.current && tn.current.contains(t.target) || (t.preventDefault(), tu.current = [])
                    };
                (0, n.useEffect)(function() {
                    return C && (document.addEventListener("dragover", R, !1), document.addEventListener("drop", tm, !1)),
                        function() {
                            C && (document.removeEventListener("dragover", R), document.removeEventListener("drop", tm))
                        }
                }, [tn, C]), (0, n.useEffect)(function() {
                    return !a && j && tn.current && tn.current.focus(),
                        function() {}
                }, [tn, j, a]);
                var tf = (0, n.useCallback)(function(t) {
                        N ? N(t) : console.error(t)
                    }, [N]),
                    tv = (0, n.useCallback)(function(t) {
                        var e;
                        t.preventDefault(), t.persist(), tD(t), tu.current = [].concat(function(t) {
                            if (Array.isArray(t)) return $(t)
                        }(e = tu.current) || function(t) {
                            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                        }(e) || H(e) || function() {
                            throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }(), [t.target]), T(t) && Promise.resolve(o(t)).then(function(e) {
                            if (!I(t) || D) {
                                var i, n, a, o, d, u, m, f, v = e.length,
                                    h = v > 0 && (n = (i = {
                                        files: e,
                                        accept: Z,
                                        minSize: p,
                                        maxSize: r,
                                        multiple: l,
                                        maxFiles: s,
                                        validator: V
                                    }).files, a = i.accept, o = i.minSize, d = i.maxSize, u = i.multiple, m = i.maxFiles, f = i.validator, (!!u || !(n.length > 1)) && (!u || !(m >= 1) || !(n.length > m)) && n.every(function(t) {
                                        var e = k(O(t, a), 1)[0],
                                            i = k(P(t, o, d), 1)[0],
                                            n = f ? f(t) : null;
                                        return e && i && !n
                                    }));
                                tp({
                                    isDragAccept: h,
                                    isDragReject: v > 0 && !h,
                                    isDragActive: !0,
                                    type: "setDraggedFiles"
                                }), c && c(t)
                            }
                        }).catch(function(t) {
                            return tf(t)
                        })
                    }, [o, c, tf, D, Z, p, r, l, s, V]),
                    th = (0, n.useCallback)(function(t) {
                        t.preventDefault(), t.persist(), tD(t);
                        var e = T(t);
                        if (e && t.dataTransfer) try {
                            t.dataTransfer.dropEffect = "copy"
                        } catch (t) {}
                        return e && u && u(t), !1
                    }, [u, D]),
                    tg = (0, n.useCallback)(function(t) {
                        t.preventDefault(), t.persist(), tD(t);
                        var e = tu.current.filter(function(t) {
                                return tn.current && tn.current.contains(t)
                            }),
                            i = e.indexOf(t.target); - 1 !== i && e.splice(i, 1), tu.current = e, !(e.length > 0) && (tp({
                            type: "setDraggedFiles",
                            isDragActive: !1,
                            isDragAccept: !1,
                            isDragReject: !1
                        }), T(t) && d && d(t))
                    }, [tn, d, D]),
                    tx = (0, n.useCallback)(function(t, e) {
                        var i = [],
                            n = [];
                        t.forEach(function(t) {
                            var e = G(O(t, Z), 2),
                                a = e[0],
                                o = e[1],
                                l = G(P(t, p, r), 2),
                                s = l[0],
                                c = l[1],
                                d = V ? V(t) : null;
                            if (a && s && !d) i.push(t);
                            else {
                                var u = [o, c];
                                d && (u = u.concat(d)), n.push({
                                    file: t,
                                    errors: u.filter(function(t) {
                                        return t
                                    })
                                })
                            }
                        }), (!l && i.length > 1 || l && s >= 1 && i.length > s) && (i.forEach(function(t) {
                            n.push({
                                file: t,
                                errors: [M]
                            })
                        }), i.splice(0)), tp({
                            acceptedFiles: i,
                            fileRejections: n,
                            type: "setFiles"
                        }), m && m(i, n, e), n.length > 0 && v && v(n, e), i.length > 0 && f && f(i, e)
                    }, [tp, l, Z, p, r, s, m, f, v, V]),
                    tb = (0, n.useCallback)(function(t) {
                        t.preventDefault(), t.persist(), tD(t), tu.current = [], T(t) && Promise.resolve(o(t)).then(function(e) {
                            (!I(t) || D) && tx(e, t)
                        }).catch(function(t) {
                            return tf(t)
                        }), tp({
                            type: "reset"
                        })
                    }, [o, tx, tf, D]),
                    ty = (0, n.useCallback)(function() {
                        if (tc.current) {
                            tp({
                                type: "openDialog"
                            }), Q(), window.showOpenFilePicker({
                                multiple: l,
                                types: Y
                            }).then(function(t) {
                                return o(t)
                            }).then(function(t) {
                                tx(t, null), tp({
                                    type: "closeDialog"
                                })
                            }).catch(function(t) {
                                t instanceof DOMException && ("AbortError" === t.name || t.code === t.ABORT_ERR) ? (ti(t), tp({
                                    type: "closeDialog"
                                })) : t instanceof DOMException && ("SecurityError" === t.name || t.code === t.SECURITY_ERR) ? (tc.current = !1, ta.current ? (ta.current.value = null, ta.current.click()) : tf(Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : tf(t)
                            });
                            return
                        }
                        ta.current && (tp({
                            type: "openDialog"
                        }), Q(), ta.current.value = null, ta.current.click())
                    }, [tp, Q, ti, b, tx, tf, Y, l]),
                    tw = (0, n.useCallback)(function(t) {
                        tn.current && tn.current.isEqualNode(t.target) && (" " === t.key || "Enter" === t.key || 32 === t.keyCode || 13 === t.keyCode) && (t.preventDefault(), ty())
                    }, [tn, ty]),
                    tk = (0, n.useCallback)(function() {
                        tp({
                            type: "focus"
                        })
                    }, []),
                    tj = (0, n.useCallback)(function() {
                        tp({
                            type: "blur"
                        })
                    }, []),
                    tC = (0, n.useCallback)(function() {
                        E || (function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
                            return -1 !== t.indexOf("MSIE") || -1 !== t.indexOf("Trident/") || -1 !== t.indexOf("Edge/")
                        }() ? setTimeout(ty, 0) : ty())
                    }, [E, ty]),
                    tE = function(t) {
                        return a ? null : t
                    },
                    tS = function(t) {
                        return S ? null : tE(t)
                    },
                    tz = function(t) {
                        return z ? null : tE(t)
                    },
                    tD = function(t) {
                        D && t.stopPropagation()
                    },
                    tM = (0, n.useMemo)(function() {
                        return function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                e = t.refKey,
                                i = t.role,
                                n = t.onKeyDown,
                                o = t.onFocus,
                                r = t.onBlur,
                                p = t.onClick,
                                l = t.onDragEnter,
                                s = t.onDragOver,
                                c = t.onDragLeave,
                                d = t.onDrop,
                                u = K(t, B);
                            return W(W(U({
                                onKeyDown: tS(F(n, tw)),
                                onFocus: tS(F(o, tk)),
                                onBlur: tS(F(r, tj)),
                                onClick: tE(F(p, tC)),
                                onDragEnter: tz(F(l, tv)),
                                onDragOver: tz(F(s, th)),
                                onDragLeave: tz(F(c, tg)),
                                onDrop: tz(F(d, tb)),
                                role: "string" == typeof i && "" !== i ? i : "presentation"
                            }, void 0 === e ? "ref" : e, tn), a || S ? {} : {
                                tabIndex: 0
                            }), u)
                        }
                    }, [tn, tw, tk, tj, tC, tv, th, tg, tb, S, z, a]),
                    tO = (0, n.useCallback)(function(t) {
                        t.stopPropagation()
                    }, []),
                    tP = (0, n.useMemo)(function() {
                        return function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                e = t.refKey,
                                i = t.onChange,
                                n = t.onClick,
                                a = K(t, L);
                            return W(W({}, U({
                                accept: Z,
                                multiple: l,
                                type: "file",
                                style: {
                                    display: "none"
                                },
                                onChange: tE(F(i, tb)),
                                onClick: tE(F(n, tO)),
                                tabIndex: -1
                            }, void 0 === e ? "ref" : e, ta)), a)
                        }
                    }, [ta, i, l, tb, a]);
                return W(W({}, tr), {}, {
                    isFocused: tl && !a,
                    getRootProps: tM,
                    getInputProps: tP,
                    rootRef: tn,
                    inputRef: ta,
                    open: tE(ty)
                })
            }

            function tt(t, e) {
                switch (e.type) {
                    case "focus":
                        return W(W({}, t), {}, {
                            isFocused: !0
                        });
                    case "blur":
                        return W(W({}, t), {}, {
                            isFocused: !1
                        });
                    case "openDialog":
                        return W(W({}, X), {}, {
                            isFileDialogActive: !0
                        });
                    case "closeDialog":
                        return W(W({}, t), {}, {
                            isFileDialogActive: !1
                        });
                    case "setDraggedFiles":
                        return W(W({}, t), {}, {
                            isDragActive: e.isDragActive,
                            isDragAccept: e.isDragAccept,
                            isDragReject: e.isDragReject
                        });
                    case "setFiles":
                        return W(W({}, t), {}, {
                            acceptedFiles: e.acceptedFiles,
                            fileRejections: e.fileRejections
                        });
                    case "reset":
                        return W({}, X);
                    default:
                        return t
                }
            }

            function te() {}
        },
        1458: function(t, e, i) {
            "use strict";
            var n = i(2784),
                a = "function" == typeof Object.is ? Object.is : function(t, e) {
                    return t === e && (0 !== t || 1 / t == 1 / e) || t != t && e != e
                },
                o = n.useState,
                r = n.useEffect,
                p = n.useLayoutEffect,
                l = n.useDebugValue;

            function s(t) {
                var e = t.getSnapshot;
                t = t.value;
                try {
                    var i = e();
                    return !a(t, i)
                } catch (t) {
                    return !0
                }
            }
            var c = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(t, e) {
                return e()
            } : function(t, e) {
                var i = e(),
                    n = o({
                        inst: {
                            value: i,
                            getSnapshot: e
                        }
                    }),
                    a = n[0].inst,
                    c = n[1];
                return p(function() {
                    a.value = i, a.getSnapshot = e, s(a) && c({
                        inst: a
                    })
                }, [t, i, e]), r(function() {
                    return s(a) && c({
                        inst: a
                    }), t(function() {
                        s(a) && c({
                            inst: a
                        })
                    })
                }, [t]), l(i), i
            };
            e.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c
        },
        64141: function(t, e, i) {
            "use strict";
            var n = i(2784),
                a = i(43100),
                o = "function" == typeof Object.is ? Object.is : function(t, e) {
                    return t === e && (0 !== t || 1 / t == 1 / e) || t != t && e != e
                },
                r = a.useSyncExternalStore,
                p = n.useRef,
                l = n.useEffect,
                s = n.useMemo,
                c = n.useDebugValue;
            e.useSyncExternalStoreWithSelector = function(t, e, i, n, a) {
                var d = p(null);
                if (null === d.current) {
                    var u = {
                        hasValue: !1,
                        value: null
                    };
                    d.current = u
                } else u = d.current;
                var m = r(t, (d = s(function() {
                    function t(t) {
                        if (!l) {
                            if (l = !0, r = t, t = n(t), void 0 !== a && u.hasValue) {
                                var e = u.value;
                                if (a(e, t)) return p = e
                            }
                            return p = t
                        }
                        if (e = p, o(r, t)) return e;
                        var i = n(t);
                        return void 0 !== a && a(e, i) ? (r = t, e) : (r = t, p = i)
                    }
                    var r, p, l = !1,
                        s = void 0 === i ? null : i;
                    return [function() {
                        return t(e())
                    }, null === s ? void 0 : function() {
                        return t(s())
                    }]
                }, [e, i, n, a]))[0], d[1]);
                return l(function() {
                    u.hasValue = !0, u.value = m
                }, [m]), c(m), m
            }
        },
        43100: function(t, e, i) {
            "use strict";
            t.exports = i(1458)
        },
        41110: function(t, e, i) {
            "use strict";
            t.exports = i(64141)
        },
        88776: function(t, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return n
                }
            });
            var n = i(55841).Ht
        },
        20336: function(t, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return n
                }
            });
            var n = i(5865).NB.create({
                name: "doc",
                topNode: !0,
                content: "block+"
            })
        },
        7490: function(t, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return a
                }
            });
            var n = i(5865),
                a = n.NB.create({
                    name: "heading",
                    addOptions: () => ({
                        levels: [1, 2, 3, 4, 5, 6],
                        HTMLAttributes: {}
                    }),
                    content: "inline*",
                    group: "block",
                    defining: !0,
                    addAttributes: () => ({
                        level: {
                            default: 1,
                            rendered: !1
                        }
                    }),
                    parseHTML() {
                        return this.options.levels.map(t => ({
                            tag: `h${t}`,
                            attrs: {
                                level: t
                            }
                        }))
                    },
                    renderHTML({
                        node: t,
                        HTMLAttributes: e
                    }) {
                        let i = this.options.levels.includes(t.attrs.level) ? t.attrs.level : this.options.levels[0];
                        return [`h${i}`, (0, n.P1)(this.options.HTMLAttributes, e), 0]
                    },
                    addCommands() {
                        return {
                            setHeading: t => ({
                                commands: e
                            }) => !!this.options.levels.includes(t.level) && e.setNode(this.name, t),
                            toggleHeading: t => ({
                                commands: e
                            }) => !!this.options.levels.includes(t.level) && e.toggleNode(this.name, "paragraph", t)
                        }
                    },
                    addKeyboardShortcuts() {
                        return this.options.levels.reduce((t, e) => ({ ...t,
                            [`Mod-Alt-${e}`]: () => this.editor.commands.toggleHeading({
                                level: e
                            })
                        }), {})
                    },
                    addInputRules() {
                        return this.options.levels.map(t => (0, n.zK)({
                            find: RegExp(`^(#{${Math.min(...this.options.levels)},${t}})\\s$`),
                            type: this.type,
                            getAttributes: {
                                level: t
                            }
                        }))
                    }
                })
        },
        21902: function(t, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return n
                }
            });
            var n = i(55841).QA
        },
        26022: function(t, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return a
                }
            });
            var n = i(5865),
                a = n.NB.create({
                    name: "paragraph",
                    priority: 1e3,
                    addOptions: () => ({
                        HTMLAttributes: {}
                    }),
                    group: "block",
                    content: "inline*",
                    parseHTML: () => [{
                        tag: "p"
                    }],
                    renderHTML({
                        HTMLAttributes: t
                    }) {
                        return ["p", (0, n.P1)(this.options.HTMLAttributes, t), 0]
                    },
                    addCommands() {
                        return {
                            setParagraph: () => ({
                                commands: t
                            }) => t.setNode(this.name)
                        }
                    },
                    addKeyboardShortcuts() {
                        return {
                            "Mod-Alt-0": () => this.editor.commands.setParagraph()
                        }
                    }
                })
        },
        93237: function(t, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return n
                }
            });
            var n = i(55841).Vm
        },
        52701: function(t, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return n
                }
            });
            var n = i(5865).NB.create({
                name: "text",
                group: "inline"
            })
        },
        55841: function(t, e, i) {
            "use strict";
            i.d(e, {
                Ht: function() {
                    return T
                },
                fj: function() {
                    return R
                },
                Vm: function() {
                    return F
                },
                QA: function() {
                    return q
                }
            });
            var n = i(5865),
                a = i(27191),
                o = i(26151);
            class r {
                constructor(t, e) {
                    var i;
                    this.editorView = t, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = null !== (i = e.width) && void 0 !== i ? i : 1, this.color = !1 === e.color ? void 0 : e.color || "black", this.class = e.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map(e => {
                        let i = t => {
                            this[e](t)
                        };
                        return t.dom.addEventListener(e, i), {
                            name: e,
                            handler: i
                        }
                    })
                }
                destroy() {
                    this.handlers.forEach(({
                        name: t,
                        handler: e
                    }) => this.editorView.dom.removeEventListener(t, e))
                }
                update(t, e) {
                    null != this.cursorPos && e.doc != t.state.doc && (this.cursorPos > t.state.doc.content.size ? this.setCursor(null) : this.updateOverlay())
                }
                setCursor(t) {
                    t != this.cursorPos && (this.cursorPos = t, null == t ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay())
                }
                updateOverlay() {
                    let t, e, i = this.editorView.state.doc.resolve(this.cursorPos),
                        n = !i.parent.inlineContent,
                        a;
                    if (n) {
                        let t = i.nodeBefore,
                            e = i.nodeAfter;
                        if (t || e) {
                            let i = this.editorView.nodeDOM(this.cursorPos - (t ? t.nodeSize : 0));
                            if (i) {
                                let n = i.getBoundingClientRect(),
                                    o = t ? n.bottom : n.top;
                                t && e && (o = (o + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2), a = {
                                    left: n.left,
                                    right: n.right,
                                    top: o - this.width / 2,
                                    bottom: o + this.width / 2
                                }
                            }
                        }
                    }
                    if (!a) {
                        let t = this.editorView.coordsAtPos(this.cursorPos);
                        a = {
                            left: t.left - this.width / 2,
                            right: t.left + this.width / 2,
                            top: t.top,
                            bottom: t.bottom
                        }
                    }
                    let o = this.editorView.dom.offsetParent;
                    if (!this.element && (this.element = o.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", n), this.element.classList.toggle("prosemirror-dropcursor-inline", !n), o && (o != document.body || "static" != getComputedStyle(o).position)) {
                        let i = o.getBoundingClientRect();
                        t = i.left - o.scrollLeft, e = i.top - o.scrollTop
                    } else t = -pageXOffset, e = -pageYOffset;
                    this.element.style.left = a.left - t + "px", this.element.style.top = a.top - e + "px", this.element.style.width = a.right - a.left + "px", this.element.style.height = a.bottom - a.top + "px"
                }
                scheduleRemoval(t) {
                    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), t)
                }
                dragover(t) {
                    if (!this.editorView.editable) return;
                    let e = this.editorView.posAtCoords({
                            left: t.clientX,
                            top: t.clientY
                        }),
                        i = e && e.inside >= 0 && this.editorView.state.doc.nodeAt(e.inside),
                        n = i && i.type.spec.disableDropCursor,
                        a = "function" == typeof n ? n(this.editorView, e, t) : n;
                    if (e && !a) {
                        let t = e.pos;
                        if (this.editorView.dragging && this.editorView.dragging.slice) {
                            let e = (0, o.nj)(this.editorView.state.doc, t, this.editorView.dragging.slice);
                            null != e && (t = e)
                        }
                        this.setCursor(t), this.scheduleRemoval(5e3)
                    }
                }
                dragend() {
                    this.scheduleRemoval(20)
                }
                drop() {
                    this.scheduleRemoval(20)
                }
                dragleave(t) {
                    t.target != this.editorView.dom && this.editorView.dom.contains(t.relatedTarget) || this.setCursor(null)
                }
            }
            var p = i(52780),
                l = i(49080),
                s = i(30764);
            class c extends a.Y1 {
                constructor(t) {
                    super(t, t)
                }
                map(t, e) {
                    let i = t.resolve(e.map(this.head));
                    return c.valid(i) ? new c(i) : a.Y1.near(i)
                }
                content() {
                    return s.p2.empty
                }
                eq(t) {
                    return t instanceof c && t.head == this.head
                }
                toJSON() {
                    return {
                        type: "gapcursor",
                        pos: this.head
                    }
                }
                static fromJSON(t, e) {
                    if ("number" != typeof e.pos) throw RangeError("Invalid input for GapCursor.fromJSON");
                    return new c(t.resolve(e.pos))
                }
                getBookmark() {
                    return new d(this.anchor)
                }
                static valid(t) {
                    let e = t.parent;
                    if (e.isTextblock || ! function(t) {
                            for (let e = t.depth; e >= 0; e--) {
                                let i = t.index(e),
                                    n = t.node(e);
                                if (0 == i) {
                                    if (n.type.spec.isolating) return !0;
                                    continue
                                }
                                for (let t = n.child(i - 1);; t = t.lastChild) {
                                    if (0 == t.childCount && !t.inlineContent || t.isAtom || t.type.spec.isolating) return !0;
                                    if (t.inlineContent) return !1
                                }
                            }
                            return !0
                        }(t) || ! function(t) {
                            for (let e = t.depth; e >= 0; e--) {
                                let i = t.indexAfter(e),
                                    n = t.node(e);
                                if (i == n.childCount) {
                                    if (n.type.spec.isolating) return !0;
                                    continue
                                }
                                for (let t = n.child(i);; t = t.firstChild) {
                                    if (0 == t.childCount && !t.inlineContent || t.isAtom || t.type.spec.isolating) return !0;
                                    if (t.inlineContent) return !1
                                }
                            }
                            return !0
                        }(t)) return !1;
                    let i = e.type.spec.allowGapCursor;
                    if (null != i) return i;
                    let n = e.contentMatchAt(t.index()).defaultType;
                    return n && n.isTextblock
                }
                static findGapCursorFrom(t, e, i = !1) {
                    t: for (;;) {
                        if (!i && c.valid(t)) return t;
                        let n = t.pos,
                            o = null;
                        for (let i = t.depth;; i--) {
                            let a = t.node(i);
                            if (e > 0 ? t.indexAfter(i) < a.childCount : t.index(i) > 0) {
                                o = a.child(e > 0 ? t.indexAfter(i) : t.index(i) - 1);
                                break
                            }
                            if (0 == i) return null;
                            n += e;
                            let r = t.doc.resolve(n);
                            if (c.valid(r)) return r
                        }
                        for (;;) {
                            let r = e > 0 ? o.firstChild : o.lastChild;
                            if (!r) {
                                if (o.isAtom && !o.isText && !a.qv.isSelectable(o)) {
                                    t = t.doc.resolve(n + o.nodeSize * e), i = !1;
                                    continue t
                                }
                                break
                            }
                            o = r, n += e;
                            let p = t.doc.resolve(n);
                            if (c.valid(p)) return p
                        }
                        return null
                    }
                }
            }
            c.prototype.visible = !1, c.findFrom = c.findGapCursorFrom, a.Y1.jsonID("gapcursor", c);
            class d {
                constructor(t) {
                    this.pos = t
                }
                map(t) {
                    return new d(t.map(this.pos))
                }
                resolve(t) {
                    let e = t.resolve(this.pos);
                    return c.valid(e) ? new c(e) : a.Y1.near(e)
                }
            }
            let u = (0, l.$)({
                ArrowLeft: m("horiz", -1),
                ArrowRight: m("horiz", 1),
                ArrowUp: m("vert", -1),
                ArrowDown: m("vert", 1)
            });

            function m(t, e) {
                let i = "vert" == t ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
                return function(t, n, o) {
                    let r = t.selection,
                        p = e > 0 ? r.$to : r.$from,
                        l = r.empty;
                    if (r instanceof a.Bs) {
                        if (!o.endOfTextblock(i) || 0 == p.depth) return !1;
                        l = !1, p = t.doc.resolve(e > 0 ? p.after() : p.before())
                    }
                    let s = c.findGapCursorFrom(p, e, l);
                    return !!s && (n && n(t.tr.setSelection(new c(s))), !0)
                }
            }

            function f(t, e, i) {
                if (!t || !t.editable) return !1;
                let n = t.state.doc.resolve(e);
                if (!c.valid(n)) return !1;
                let o = t.posAtCoords({
                    left: i.clientX,
                    top: i.clientY
                });
                return !(o && o.inside > -1 && a.qv.isSelectable(t.state.doc.nodeAt(o.inside))) && (t.dispatch(t.state.tr.setSelection(new c(n))), !0)
            }

            function v(t, e) {
                if ("insertCompositionText" != e.inputType || !(t.state.selection instanceof c)) return !1;
                let {
                    $from: i
                } = t.state.selection, n = i.parent.contentMatchAt(i.index()).findWrapping(t.state.schema.nodes.text);
                if (!n) return !1;
                let o = s.HY.empty;
                for (let t = n.length - 1; t >= 0; t--) o = s.HY.from(n[t].createAndFill(null, o));
                let r = t.state.tr.replace(i.pos, i.pos, new s.p2(o, 0, 0));
                return r.setSelection(a.Bs.near(r.doc.resolve(i.pos + 1))), t.dispatch(r), !1
            }

            function h(t) {
                if (!(t.selection instanceof c)) return null;
                let e = document.createElement("div");
                return e.className = "ProseMirror-gapcursor", p.EH.create(t.doc, [p.p.widget(t.selection.head, e, {
                    key: "gapcursor"
                })])
            }
            var g = function() {};
            g.prototype.append = function(t) {
                return t.length ? (t = g.from(t), !this.length && t || t.length < 200 && this.leafAppend(t) || this.length < 200 && t.leafPrepend(this) || this.appendInner(t)) : this
            }, g.prototype.prepend = function(t) {
                return t.length ? g.from(t).append(this) : this
            }, g.prototype.appendInner = function(t) {
                return new b(this, t)
            }, g.prototype.slice = function(t, e) {
                return (void 0 === t && (t = 0), void 0 === e && (e = this.length), t >= e) ? g.empty : this.sliceInner(Math.max(0, t), Math.min(this.length, e))
            }, g.prototype.get = function(t) {
                if (!(t < 0) && !(t >= this.length)) return this.getInner(t)
            }, g.prototype.forEach = function(t, e, i) {
                void 0 === e && (e = 0), void 0 === i && (i = this.length), e <= i ? this.forEachInner(t, e, i, 0) : this.forEachInvertedInner(t, e, i, 0)
            }, g.prototype.map = function(t, e, i) {
                void 0 === e && (e = 0), void 0 === i && (i = this.length);
                var n = [];
                return this.forEach(function(e, i) {
                    return n.push(t(e, i))
                }, e, i), n
            }, g.from = function(t) {
                return t instanceof g ? t : t && t.length ? new x(t) : g.empty
            };
            var x = function(t) {
                function e(e) {
                    t.call(this), this.values = e
                }
                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var i = {
                    length: {
                        configurable: !0
                    },
                    depth: {
                        configurable: !0
                    }
                };
                return e.prototype.flatten = function() {
                    return this.values
                }, e.prototype.sliceInner = function(t, i) {
                    return 0 == t && i == this.length ? this : new e(this.values.slice(t, i))
                }, e.prototype.getInner = function(t) {
                    return this.values[t]
                }, e.prototype.forEachInner = function(t, e, i, n) {
                    for (var a = e; a < i; a++)
                        if (!1 === t(this.values[a], n + a)) return !1
                }, e.prototype.forEachInvertedInner = function(t, e, i, n) {
                    for (var a = e - 1; a >= i; a--)
                        if (!1 === t(this.values[a], n + a)) return !1
                }, e.prototype.leafAppend = function(t) {
                    if (this.length + t.length <= 200) return new e(this.values.concat(t.flatten()))
                }, e.prototype.leafPrepend = function(t) {
                    if (this.length + t.length <= 200) return new e(t.flatten().concat(this.values))
                }, i.length.get = function() {
                    return this.values.length
                }, i.depth.get = function() {
                    return 0
                }, Object.defineProperties(e.prototype, i), e
            }(g);
            g.empty = new x([]);
            var b = function(t) {
                function e(e, i) {
                    t.call(this), this.left = e, this.right = i, this.length = e.length + i.length, this.depth = Math.max(e.depth, i.depth) + 1
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
                    return this.left.flatten().concat(this.right.flatten())
                }, e.prototype.getInner = function(t) {
                    return t < this.left.length ? this.left.get(t) : this.right.get(t - this.left.length)
                }, e.prototype.forEachInner = function(t, e, i, n) {
                    var a = this.left.length;
                    if (e < a && !1 === this.left.forEachInner(t, e, Math.min(i, a), n) || i > a && !1 === this.right.forEachInner(t, Math.max(e - a, 0), Math.min(this.length, i) - a, n + a)) return !1
                }, e.prototype.forEachInvertedInner = function(t, e, i, n) {
                    var a = this.left.length;
                    if (e > a && !1 === this.right.forEachInvertedInner(t, e - a, Math.max(i, a) - a, n + a) || i < a && !1 === this.left.forEachInvertedInner(t, Math.min(e, a), i, n)) return !1
                }, e.prototype.sliceInner = function(t, e) {
                    if (0 == t && e == this.length) return this;
                    var i = this.left.length;
                    return e <= i ? this.left.slice(t, e) : t >= i ? this.right.slice(t - i, e - i) : this.left.slice(t, i).append(this.right.slice(0, e - i))
                }, e.prototype.leafAppend = function(t) {
                    var i = this.right.leafAppend(t);
                    if (i) return new e(this.left, i)
                }, e.prototype.leafPrepend = function(t) {
                    var i = this.left.leafPrepend(t);
                    if (i) return new e(i, this.right)
                }, e.prototype.appendInner = function(t) {
                    return this.left.depth >= Math.max(this.right.depth, t.depth) + 1 ? new e(this.left, new e(this.right, t)) : new e(this, t)
                }, e
            }(g);
            class y {
                constructor(t, e) {
                    this.items = t, this.eventCount = e
                }
                popEvent(t, e) {
                    let i, n, a, o;
                    if (0 == this.eventCount) return null;
                    let r = this.items.length;
                    for (;; r--)
                        if (this.items.get(r - 1).selection) {
                            --r;
                            break
                        }
                    e && (n = (i = this.remapping(r, this.items.length)).maps.length);
                    let p = t.tr,
                        l = [],
                        s = [];
                    return this.items.forEach((t, e) => {
                        if (!t.step) {
                            i || (n = (i = this.remapping(r, e + 1)).maps.length), n--, s.push(t);
                            return
                        }
                        if (i) {
                            s.push(new w(t.map));
                            let e = t.step.map(i.slice(n)),
                                a;
                            e && p.maybeStep(e).doc && (a = p.mapping.maps[p.mapping.maps.length - 1], l.push(new w(a, void 0, void 0, l.length + s.length))), n--, a && i.appendMap(a, n)
                        } else p.maybeStep(t.step);
                        if (t.selection) return a = i ? t.selection.map(i.slice(n)) : t.selection, o = new y(this.items.slice(0, r).append(s.reverse().concat(l)), this.eventCount - 1), !1
                    }, this.items.length, 0), {
                        remaining: o,
                        transform: p,
                        selection: a
                    }
                }
                addTransform(t, e, i, n) {
                    var a, o;
                    let r, p = [],
                        l = this.eventCount,
                        s = this.items,
                        c = !n && s.length ? s.get(s.length - 1) : null;
                    for (let i = 0; i < t.steps.length; i++) {
                        let a = t.steps[i].invert(t.docs[i]),
                            o = new w(t.mapping.maps[i], a, e),
                            r;
                        (r = c && c.merge(o)) && (o = r, i ? p.pop() : s = s.slice(0, s.length - 1)), p.push(o), e && (l++, e = void 0), n || (c = o)
                    }
                    let d = l - i.depth;
                    return d > j && (a = s, o = d, a.forEach((t, e) => {
                        if (t.selection && 0 == o--) return r = e, !1
                    }), s = a.slice(r), l -= d), new y(s.append(p), l)
                }
                remapping(t, e) {
                    let i = new o.vs;
                    return this.items.forEach((e, n) => {
                        let a = null != e.mirrorOffset && n - e.mirrorOffset >= t ? i.maps.length - e.mirrorOffset : void 0;
                        i.appendMap(e.map, a)
                    }, t, e), i
                }
                addMaps(t) {
                    return 0 == this.eventCount ? this : new y(this.items.append(t.map(t => new w(t))), this.eventCount)
                }
                rebased(t, e) {
                    if (!this.eventCount) return this;
                    let i = [],
                        n = Math.max(0, this.items.length - e),
                        a = t.mapping,
                        o = t.steps.length,
                        r = this.eventCount;
                    this.items.forEach(t => {
                        t.selection && r--
                    }, n);
                    let p = e;
                    this.items.forEach(e => {
                        let n = a.getMirror(--p);
                        if (null == n) return;
                        o = Math.min(o, n);
                        let l = a.maps[n];
                        if (e.step) {
                            let o = t.steps[n].invert(t.docs[n]),
                                s = e.selection && e.selection.map(a.slice(p + 1, n));
                            s && r++, i.push(new w(l, o, s))
                        } else i.push(new w(l))
                    }, n);
                    let l = [];
                    for (let t = e; t < o; t++) l.push(new w(a.maps[t]));
                    let s = new y(this.items.slice(0, n).append(l).append(i), r);
                    return s.emptyItemCount() > 500 && (s = s.compress(this.items.length - i.length)), s
                }
                emptyItemCount() {
                    let t = 0;
                    return this.items.forEach(e => {
                        !e.step && t++
                    }), t
                }
                compress(t = this.items.length) {
                    let e = this.remapping(0, t),
                        i = e.maps.length,
                        n = [],
                        a = 0;
                    return this.items.forEach((o, r) => {
                        if (r >= t) n.push(o), o.selection && a++;
                        else if (o.step) {
                            let t = o.step.map(e.slice(i)),
                                r = t && t.getMap();
                            if (i--, r && e.appendMap(r, i), t) {
                                let p = o.selection && o.selection.map(e.slice(i));
                                p && a++;
                                let l = new w(r.invert(), t, p),
                                    s, c = n.length - 1;
                                (s = n.length && n[c].merge(l)) ? n[c] = s: n.push(l)
                            }
                        } else o.map && i--
                    }, this.items.length, 0), new y(g.from(n.reverse()), a)
                }
            }
            y.empty = new y(g.empty, 0);
            class w {
                constructor(t, e, i, n) {
                    this.map = t, this.step = e, this.selection = i, this.mirrorOffset = n
                }
                merge(t) {
                    if (this.step && t.step && !t.selection) {
                        let e = t.step.merge(this.step);
                        if (e) return new w(e.getMap().invert(), e, this.selection)
                    }
                }
            }
            class k {
                constructor(t, e, i, n, a) {
                    this.done = t, this.undone = e, this.prevRanges = i, this.prevTime = n, this.prevComposition = a
                }
            }
            let j = 20;

            function C(t) {
                let e = [];
                for (let i = t.length - 1; i >= 0 && 0 == e.length; i--) t[i].forEach((t, i, n, a) => e.push(n, a));
                return e
            }

            function E(t, e) {
                if (!t) return null;
                let i = [];
                for (let n = 0; n < t.length; n += 2) {
                    let a = e.map(t[n], 1),
                        o = e.map(t[n + 1], -1);
                    a <= o && i.push(a, o)
                }
                return i
            }
            let S = !1,
                z = null;

            function D(t) {
                let e = t.plugins;
                if (z != e) {
                    S = !1, z = e;
                    for (let t = 0; t < e.length; t++)
                        if (e[t].spec.historyPreserveItems) {
                            S = !0;
                            break
                        }
                }
                return S
            }
            let M = new a.H$("history"),
                O = new a.H$("closeHistory");

            function P(t, e) {
                return (i, n) => {
                    let a = M.getState(i);
                    if (!a || 0 == (t ? a.undone : a.done).eventCount) return !1;
                    if (n) {
                        let o = function(t, e, i) {
                            let n = D(e),
                                a = M.get(e).spec.config,
                                o = (i ? t.undone : t.done).popEvent(e, n);
                            if (!o) return null;
                            let r = o.selection.resolve(o.transform.doc),
                                p = (i ? t.done : t.undone).addTransform(o.transform, e.selection.getBookmark(), a, n),
                                l = new k(i ? p : o.remaining, i ? o.remaining : p, null, 0, -1);
                            return o.transform.setSelection(r).setMeta(M, {
                                redo: i,
                                historyState: l
                            })
                        }(a, i, t);
                        o && n(e ? o.scrollIntoView() : o)
                    }
                    return !0
                }
            }
            let A = P(!1, !0),
                I = P(!0, !0);
            P(!1, !1), P(!0, !1);
            var T = n.hj.create({
                name: "characterCount",
                addOptions: () => ({
                    limit: null,
                    mode: "textSize",
                    textCounter: t => t.length,
                    wordCounter: t => t.split(" ").filter(t => "" !== t).length
                }),
                addStorage: () => ({
                    characters: () => 0,
                    words: () => 0
                }),
                onBeforeCreate() {
                    this.storage.characters = t => {
                        let e = (null == t ? void 0 : t.node) || this.editor.state.doc;
                        if ("textSize" === ((null == t ? void 0 : t.mode) || this.options.mode)) {
                            let t = e.textBetween(0, e.content.size, void 0, " ");
                            return this.options.textCounter(t)
                        }
                        return e.nodeSize
                    }, this.storage.words = t => {
                        let e = (null == t ? void 0 : t.node) || this.editor.state.doc,
                            i = e.textBetween(0, e.content.size, " ", " ");
                        return this.options.wordCounter(i)
                    }
                },
                addProseMirrorPlugins() {
                    let t = !1;
                    return [new a.Sy({
                        key: new a.H$("characterCount"),
                        appendTransaction: (e, i, n) => {
                            if (t) return;
                            let a = this.options.limit;
                            if (null == a || 0 === a) {
                                t = !0;
                                return
                            }
                            let o = this.storage.characters({
                                node: n.doc
                            });
                            if (o > a) {
                                console.warn(`[CharacterCount] Initial content exceeded limit of ${a} characters. Content was automatically trimmed.`);
                                let e = n.tr.deleteRange(0, o - a);
                                return t = !0, e
                            }
                            t = !0
                        },
                        filterTransaction: (t, e) => {
                            let i = this.options.limit;
                            if (!t.docChanged || 0 === i || null == i) return !0;
                            let n = this.storage.characters({
                                    node: e.doc
                                }),
                                a = this.storage.characters({
                                    node: t.doc
                                });
                            if (a <= i || n > i && a > i && a <= n) return !0;
                            if (n > i && a > i && a > n || !t.getMeta("paste")) return !1;
                            let o = t.selection.$head.pos;
                            return t.deleteRange(o - (a - i), o), !(this.storage.characters({
                                node: t.doc
                            }) > i)
                        }
                    })]
                }
            });
            n.hj.create({
                name: "dropCursor",
                addOptions: () => ({
                    color: "currentColor",
                    width: 1,
                    class: void 0
                }),
                addProseMirrorPlugins() {
                    return [function(t = {}) {
                        return new a.Sy({
                            view: e => new r(e, t)
                        })
                    }(this.options)]
                }
            }), n.hj.create({
                name: "focus",
                addOptions: () => ({
                    className: "has-focus",
                    mode: "all"
                }),
                addProseMirrorPlugins() {
                    return [new a.Sy({
                        key: new a.H$("focus"),
                        props: {
                            decorations: ({
                                doc: t,
                                selection: e
                            }) => {
                                let {
                                    isEditable: i,
                                    isFocused: n
                                } = this.editor, {
                                    anchor: a
                                } = e, o = [];
                                if (!i || !n) return p.EH.create(t, []);
                                let r = 0;
                                "deepest" === this.options.mode && t.descendants((t, e) => {
                                    if (!t.isText) {
                                        if (!(a >= e && a <= e + t.nodeSize - 1)) return !1;
                                        r += 1
                                    }
                                });
                                let l = 0;
                                return t.descendants((t, e) => !t.isText && !!(a >= e && a <= e + t.nodeSize - 1) && ((l += 1, "deepest" === this.options.mode && r - l > 0 || "shallowest" === this.options.mode && l > 1) ? "deepest" === this.options.mode : void o.push(p.p.node(e, e + t.nodeSize, {
                                    class: this.options.className
                                })))), p.EH.create(t, o)
                            }
                        }
                    })]
                }
            });
            var R = n.hj.create({
                    name: "gapCursor",
                    addProseMirrorPlugins: () => [new a.Sy({
                        props: {
                            decorations: h,
                            createSelectionBetween: (t, e, i) => e.pos == i.pos && c.valid(i) ? new c(i) : null,
                            handleClick: f,
                            handleKeyDown: u,
                            handleDOMEvents: {
                                beforeinput: v
                            }
                        }
                    })],
                    extendNodeSchema(t) {
                        var e;
                        let i = {
                            name: t.name,
                            options: t.options,
                            storage: t.storage
                        };
                        return {
                            allowGapCursor: null != (e = (0, n.nU)((0, n.Nl)(t, "allowGapCursor", i))) ? e : null
                        }
                    }
                }),
                F = n.hj.create({
                    name: "placeholder",
                    addOptions: () => ({
                        emptyEditorClass: "is-editor-empty",
                        emptyNodeClass: "is-empty",
                        placeholder: "Write something …",
                        showOnlyWhenEditable: !0,
                        showOnlyCurrent: !0,
                        includeChildren: !1
                    }),
                    addProseMirrorPlugins() {
                        return [new a.Sy({
                            key: new a.H$("placeholder"),
                            props: {
                                decorations: ({
                                    doc: t,
                                    selection: e
                                }) => {
                                    let i = this.editor.isEditable || !this.options.showOnlyWhenEditable,
                                        {
                                            anchor: a
                                        } = e,
                                        o = [];
                                    if (!i) return null;
                                    let r = this.editor.isEmpty;
                                    return t.descendants((t, e) => {
                                        let i = a >= e && a <= e + t.nodeSize,
                                            l = !t.isLeaf && (0, n.bR)(t);
                                        if ((i || !this.options.showOnlyCurrent) && l) {
                                            let n = [this.options.emptyNodeClass];
                                            r && n.push(this.options.emptyEditorClass);
                                            let a = p.p.node(e, e + t.nodeSize, {
                                                class: n.join(" "),
                                                "data-placeholder": "function" == typeof this.options.placeholder ? this.options.placeholder({
                                                    editor: this.editor,
                                                    node: t,
                                                    pos: e,
                                                    hasAnchor: i
                                                }) : this.options.placeholder
                                            });
                                            o.push(a)
                                        }
                                        return this.options.includeChildren
                                    }), p.EH.create(t, o)
                                }
                            }
                        })]
                    }
                });

            function _({
                types: t,
                node: e
            }) {
                return e && Array.isArray(t) && t.includes(e.type) || (null == e ? void 0 : e.type) === t
            }
            n.hj.create({
                name: "selection",
                addOptions: () => ({
                    className: "selection"
                }),
                addProseMirrorPlugins() {
                    let {
                        editor: t,
                        options: e
                    } = this;
                    return [new a.Sy({
                        key: new a.H$("selection"),
                        props: {
                            decorations: i => i.selection.empty || t.isFocused || !t.isEditable || (0, n.EG)(i.selection) || t.view.dragging ? null : p.EH.create(i.doc, [p.p.inline(i.selection.from, i.selection.to, {
                                class: e.className
                            })])
                        }
                    })]
                }
            }), n.hj.create({
                name: "trailingNode",
                addOptions: () => ({
                    node: "paragraph",
                    notAfter: []
                }),
                addProseMirrorPlugins() {
                    let t = new a.H$(this.name),
                        e = Object.entries(this.editor.schema.nodes).map(([, t]) => t).filter(t => (this.options.notAfter || []).concat(this.options.node).includes(t.name));
                    return [new a.Sy({
                        key: t,
                        appendTransaction: (e, i, n) => {
                            let {
                                doc: a,
                                tr: o,
                                schema: r
                            } = n, p = t.getState(n), l = a.content.size, s = r.nodes[this.options.node];
                            if (p) return o.insert(l, s.create())
                        },
                        state: {
                            init: (t, i) => !_({
                                node: i.tr.doc.lastChild,
                                types: e
                            }),
                            apply: (t, i) => t.docChanged ? !_({
                                node: t.doc.lastChild,
                                types: e
                            }) : i
                        }
                    })]
                }
            });
            var q = n.hj.create({
                name: "undoRedo",
                addOptions: () => ({
                    depth: 100,
                    newGroupDelay: 500
                }),
                addCommands: () => ({
                    undo: () => ({
                        state: t,
                        dispatch: e
                    }) => A(t, e),
                    redo: () => ({
                        state: t,
                        dispatch: e
                    }) => I(t, e)
                }),
                addProseMirrorPlugins() {
                    return [function(t = {}) {
                        return t = {
                            depth: t.depth || 100,
                            newGroupDelay: t.newGroupDelay || 500
                        }, new a.Sy({
                            key: M,
                            state: {
                                init: () => new k(y.empty, y.empty, null, 0, -1),
                                apply: (e, i, n) => (function(t, e, i, n) {
                                    let a = i.getMeta(M),
                                        o;
                                    if (a) return a.historyState;
                                    i.getMeta(O) && (t = new k(t.done, t.undone, null, 0, -1));
                                    let r = i.getMeta("appendedTransaction");
                                    if (0 == i.steps.length) return t;
                                    if (r && r.getMeta(M)) return r.getMeta(M).redo ? new k(t.done.addTransform(i, void 0, n, D(e)), t.undone, C(i.mapping.maps), t.prevTime, t.prevComposition) : new k(t.done, t.undone.addTransform(i, void 0, n, D(e)), null, t.prevTime, t.prevComposition);
                                    if (!1 === i.getMeta("addToHistory") || r && !1 === r.getMeta("addToHistory")) return (o = i.getMeta("rebased")) ? new k(t.done.rebased(i, o), t.undone.rebased(i, o), E(t.prevRanges, i.mapping), t.prevTime, t.prevComposition) : new k(t.done.addMaps(i.mapping.maps), t.undone.addMaps(i.mapping.maps), E(t.prevRanges, i.mapping), t.prevTime, t.prevComposition); {
                                        let a = i.getMeta("composition"),
                                            o = 0 == t.prevTime || !r && t.prevComposition != a && (t.prevTime < (i.time || 0) - n.newGroupDelay || ! function(t, e) {
                                                if (!e) return !1;
                                                if (!t.docChanged) return !0;
                                                let i = !1;
                                                return t.mapping.maps[0].forEach((t, n) => {
                                                    for (let a = 0; a < e.length; a += 2) t <= e[a + 1] && n >= e[a] && (i = !0)
                                                }), i
                                            }(i, t.prevRanges)),
                                            p = r ? E(t.prevRanges, i.mapping) : C(i.mapping.maps);
                                        return new k(t.done.addTransform(i, o ? e.selection.getBookmark() : void 0, n, D(e)), y.empty, p, i.time, null == a ? t.prevComposition : a)
                                    }
                                })(i, n, e, t)
                            },
                            config: t,
                            props: {
                                handleDOMEvents: {
                                    beforeinput(t, e) {
                                        let i = e.inputType,
                                            n = "historyUndo" == i ? A : "historyRedo" == i ? I : null;
                                        return !!n && (e.preventDefault(), n(t.state, t.dispatch))
                                    }
                                }
                            }
                        })
                    }(this.options)]
                },
                addKeyboardShortcuts() {
                    return {
                        "Mod-z": () => this.editor.commands.undo(),
                        "Shift-Mod-z": () => this.editor.commands.redo(),
                        "Mod-y": () => this.editor.commands.redo(),
                        "Mod-я": () => this.editor.commands.undo(),
                        "Shift-Mod-я": () => this.editor.commands.redo()
                    }
                }
            })
        },
        71284: function(t, e, i) {
            "use strict";
            i.d(e, {
                jE: function() {
                    return y
                },
                kg: function() {
                    return f
                }
            });
            var n = i(2784),
                a = i(28316),
                o = i(43100),
                r = i(52322),
                p = i(5865),
                l = i(4124),
                s = i(41110),
                c = (...t) => e => {
                    t.forEach(t => {
                        "function" == typeof t ? t(e) : t && (t.current = e)
                    })
                },
                d = ({
                    contentComponent: t
                }) => {
                    let e = (0, o.useSyncExternalStore)(t.subscribe, t.getSnapshot, t.getServerSnapshot);
                    return (0, r.jsx)(r.Fragment, {
                        children: Object.values(e)
                    })
                },
                u = class extends n.Component {
                    constructor(t) {
                        var e;
                        super(t), this.editorContentRef = n.createRef(), this.initialized = !1, this.state = {
                            hasContentComponentInitialized: !!(null == (e = t.editor) ? void 0 : e.contentComponent)
                        }
                    }
                    componentDidMount() {
                        this.init()
                    }
                    componentDidUpdate() {
                        this.init()
                    }
                    init() {
                        let t = this.props.editor;
                        if (t && !t.isDestroyed && t.options.element) {
                            if (t.contentComponent) return;
                            let e = this.editorContentRef.current;
                            e.append(...t.options.element.childNodes), t.setOptions({
                                element: e
                            }), t.contentComponent = function() {
                                let t = new Set,
                                    e = {};
                                return {
                                    subscribe: e => (t.add(e), () => {
                                        t.delete(e)
                                    }),
                                    getSnapshot: () => e,
                                    getServerSnapshot: () => e,
                                    setRenderer(i, n) {
                                        e = { ...e,
                                            [i]: a.createPortal(n.reactElement, n.element, i)
                                        }, t.forEach(t => t())
                                    },
                                    removeRenderer(i) {
                                        let n = { ...e
                                        };
                                        delete n[i], e = n, t.forEach(t => t())
                                    }
                                }
                            }(), this.state.hasContentComponentInitialized || (this.unsubscribeToContentComponent = t.contentComponent.subscribe(() => {
                                this.setState(t => t.hasContentComponentInitialized ? t : {
                                    hasContentComponentInitialized: !0
                                }), this.unsubscribeToContentComponent && this.unsubscribeToContentComponent()
                            })), t.createNodeViews(), this.initialized = !0
                        }
                    }
                    componentWillUnmount() {
                        var t;
                        let e = this.props.editor;
                        if (!e || (this.initialized = !1, e.isDestroyed || e.view.setProps({
                                nodeViews: {}
                            }), this.unsubscribeToContentComponent && this.unsubscribeToContentComponent(), e.contentComponent = null, !(null == (t = e.options.element) ? void 0 : t.firstChild))) return;
                        let i = document.createElement("div");
                        i.append(...e.options.element.childNodes), e.setOptions({
                            element: i
                        })
                    }
                    render() {
                        let {
                            editor: t,
                            innerRef: e,
                            ...i
                        } = this.props;
                        return (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("div", {
                                ref: c(e, this.editorContentRef),
                                ...i
                            }), (null == t ? void 0 : t.contentComponent) && (0, r.jsx)(d, {
                                contentComponent: t.contentComponent
                            })]
                        })
                    }
                },
                m = (0, n.forwardRef)((t, e) => {
                    let i = n.useMemo(() => Math.floor(4294967295 * Math.random()).toString(), [t.editor]);
                    return n.createElement(u, {
                        key: i,
                        innerRef: e,
                        ...t
                    })
                }),
                f = n.memo(m),
                v = "undefined" != typeof window ? n.useLayoutEffect : n.useEffect,
                h = class {
                    constructor(t) {
                        this.transactionNumber = 0, this.lastTransactionNumber = 0, this.subscribers = new Set, this.editor = t, this.lastSnapshot = {
                            editor: t,
                            transactionNumber: 0
                        }, this.getSnapshot = this.getSnapshot.bind(this), this.getServerSnapshot = this.getServerSnapshot.bind(this), this.watch = this.watch.bind(this), this.subscribe = this.subscribe.bind(this)
                    }
                    getSnapshot() {
                        return this.transactionNumber === this.lastTransactionNumber || (this.lastTransactionNumber = this.transactionNumber, this.lastSnapshot = {
                            editor: this.editor,
                            transactionNumber: this.transactionNumber
                        }), this.lastSnapshot
                    }
                    getServerSnapshot() {
                        return {
                            editor: null,
                            transactionNumber: 0
                        }
                    }
                    subscribe(t) {
                        return this.subscribers.add(t), () => {
                            this.subscribers.delete(t)
                        }
                    }
                    watch(t) {
                        if (this.editor = t, this.editor) {
                            let t = () => {
                                    this.transactionNumber += 1, this.subscribers.forEach(t => t())
                                },
                                e = this.editor;
                            return e.on("transaction", t), () => {
                                e.off("transaction", t)
                            }
                        }
                    }
                },
                g = "undefined" == typeof window,
                x = g || !!("undefined" != typeof window && window.next),
                b = class t {
                    constructor(t) {
                        this.editor = null, this.subscriptions = new Set, this.isComponentMounted = !1, this.previousDeps = null, this.instanceId = "", this.options = t, this.subscriptions = new Set, this.setEditor(this.getInitialEditor()), this.scheduleDestroy(), this.getEditor = this.getEditor.bind(this), this.getServerSnapshot = this.getServerSnapshot.bind(this), this.subscribe = this.subscribe.bind(this), this.refreshEditorInstance = this.refreshEditorInstance.bind(this), this.scheduleDestroy = this.scheduleDestroy.bind(this), this.onRender = this.onRender.bind(this), this.createEditor = this.createEditor.bind(this)
                    }
                    setEditor(t) {
                        this.editor = t, this.instanceId = Math.random().toString(36).slice(2, 9), this.subscriptions.forEach(t => t())
                    }
                    getInitialEditor() {
                        return void 0 === this.options.current.immediatelyRender ? g || x ? null : this.createEditor() : (this.options.current.immediatelyRender, this.options.current.immediatelyRender ? this.createEditor() : null)
                    }
                    createEditor() {
                        let t = { ...this.options.current,
                            onBeforeCreate: (...t) => {
                                var e, i;
                                return null == (i = (e = this.options.current).onBeforeCreate) ? void 0 : i.call(e, ...t)
                            },
                            onBlur: (...t) => {
                                var e, i;
                                return null == (i = (e = this.options.current).onBlur) ? void 0 : i.call(e, ...t)
                            },
                            onCreate: (...t) => {
                                var e, i;
                                return null == (i = (e = this.options.current).onCreate) ? void 0 : i.call(e, ...t)
                            },
                            onDestroy: (...t) => {
                                var e, i;
                                return null == (i = (e = this.options.current).onDestroy) ? void 0 : i.call(e, ...t)
                            },
                            onFocus: (...t) => {
                                var e, i;
                                return null == (i = (e = this.options.current).onFocus) ? void 0 : i.call(e, ...t)
                            },
                            onSelectionUpdate: (...t) => {
                                var e, i;
                                return null == (i = (e = this.options.current).onSelectionUpdate) ? void 0 : i.call(e, ...t)
                            },
                            onTransaction: (...t) => {
                                var e, i;
                                return null == (i = (e = this.options.current).onTransaction) ? void 0 : i.call(e, ...t)
                            },
                            onUpdate: (...t) => {
                                var e, i;
                                return null == (i = (e = this.options.current).onUpdate) ? void 0 : i.call(e, ...t)
                            },
                            onContentError: (...t) => {
                                var e, i;
                                return null == (i = (e = this.options.current).onContentError) ? void 0 : i.call(e, ...t)
                            },
                            onDrop: (...t) => {
                                var e, i;
                                return null == (i = (e = this.options.current).onDrop) ? void 0 : i.call(e, ...t)
                            },
                            onPaste: (...t) => {
                                var e, i;
                                return null == (i = (e = this.options.current).onPaste) ? void 0 : i.call(e, ...t)
                            },
                            onDelete: (...t) => {
                                var e, i;
                                return null == (i = (e = this.options.current).onDelete) ? void 0 : i.call(e, ...t)
                            }
                        };
                        return new p.ML(t)
                    }
                    getEditor() {
                        return this.editor
                    }
                    getServerSnapshot() {
                        return null
                    }
                    subscribe(t) {
                        return this.subscriptions.add(t), () => {
                            this.subscriptions.delete(t)
                        }
                    }
                    static compareOptions(t, e) {
                        return Object.keys(t).every(i => !!["onCreate", "onBeforeCreate", "onDestroy", "onUpdate", "onTransaction", "onFocus", "onBlur", "onSelectionUpdate", "onContentError", "onDrop", "onPaste"].includes(i) || ("extensions" === i && t.extensions && e.extensions ? t.extensions.length === e.extensions.length && t.extensions.every((t, i) => {
                            var n;
                            return t === (null == (n = e.extensions) ? void 0 : n[i])
                        }) : t[i] === e[i]))
                    }
                    onRender(e) {
                        return () => (this.isComponentMounted = !0, clearTimeout(this.scheduledDestructionTimeout), this.editor && !this.editor.isDestroyed && 0 === e.length ? t.compareOptions(this.options.current, this.editor.options) || this.editor.setOptions({ ...this.options.current,
                            editable: this.editor.isEditable
                        }) : this.refreshEditorInstance(e), () => {
                            this.isComponentMounted = !1, this.scheduleDestroy()
                        })
                    }
                    refreshEditorInstance(t) {
                        if (this.editor && !this.editor.isDestroyed) {
                            if (null === this.previousDeps) {
                                this.previousDeps = t;
                                return
                            }
                            if (this.previousDeps.length === t.length && this.previousDeps.every((e, i) => e === t[i])) return
                        }
                        this.editor && !this.editor.isDestroyed && this.editor.destroy(), this.setEditor(this.createEditor()), this.previousDeps = t
                    }
                    scheduleDestroy() {
                        let t = this.instanceId,
                            e = this.editor;
                        this.scheduledDestructionTimeout = setTimeout(() => {
                            if (this.isComponentMounted && this.instanceId === t) {
                                e && e.setOptions(this.options.current);
                                return
                            }
                            e && !e.isDestroyed && (e.destroy(), this.instanceId === t && this.setEditor(null))
                        }, 1)
                    }
                };

            function y(t = {}, e = []) {
                let i = (0, n.useRef)(t);
                i.current = t;
                let [a] = (0, n.useState)(() => new b(i)), r = (0, o.useSyncExternalStore)(a.subscribe, a.getEditor, a.getServerSnapshot);
                return (0, n.useDebugValue)(r), (0, n.useEffect)(a.onRender(e)), ! function(t) {
                    var e;
                    let [i] = (0, n.useState)(() => new h(t.editor)), a = (0, s.useSyncExternalStoreWithSelector)(i.subscribe, i.getSnapshot, i.getServerSnapshot, t.selector, null != (e = t.equalityFn) ? e : l);
                    v(() => i.watch(t.editor), [t.editor, i]), (0, n.useDebugValue)(a)
                }({
                    editor: r,
                    selector: ({
                        transactionNumber: e
                    }) => !1 === t.shouldRerenderOnTransaction || void 0 === t.shouldRerenderOnTransaction ? null : t.immediatelyRender && 0 === e ? 0 : e + 1
                }), r
            }(0, n.createContext)({
                editor: null
            }).Consumer;
            var w = (0, n.createContext)({
                    onDragStart: () => {},
                    nodeViewContentChildren: void 0,
                    nodeViewContentRef: () => {}
                }),
                k = () => (0, n.useContext)(w);
            n.forwardRef((t, e) => {
                let {
                    onDragStart: i
                } = k(), n = t.as || "div";
                return (0, r.jsx)(n, { ...t,
                    ref: e,
                    "data-node-view-wrapper": "",
                    onDragStart: i,
                    style: {
                        whiteSpace: "normal",
                        ...t.style
                    }
                })
            }), n.createContext({
                markViewContentRef: () => {}
            }), p.WR, p.DK
        },
        99038: function(t, e, i) {
            "use strict";
            i.d(e, {
                Z0: function() {
                    return q
                },
                o8: function() {
                    return R
                },
                hA: function() {
                    return _
                }
            });
            var n = i(7896),
                a = i(2784),
                o = i(17998),
                r = i(92211),
                p = i(2923),
                l = i(72714);
            let s = "horizontal",
                c = ["horizontal", "vertical"],
                d = (0, a.forwardRef)((t, e) => {
                    let {
                        decorative: i,
                        orientation: o = s,
                        ...r
                    } = t, p = u(o) ? o : s;
                    return (0, a.createElement)(l.WV.div, (0, n.Z)({
                        "data-orientation": p
                    }, i ? {
                        role: "none"
                    } : {
                        "aria-orientation": "vertical" === p ? p : void 0,
                        role: "separator"
                    }, r, {
                        ref: e
                    }))
                });

            function u(t) {
                return c.includes(t)
            }
            d.propTypes = {
                orientation(t, e, i) {
                    let n = t[e],
                        a = String(n);
                    return n && !u(n) ? Error(`Invalid prop \`orientation\` of value \`${a}\` supplied to \`${i}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${s}\`.`) : null
                }
            };
            var m = i(87695);
            let f = (0, a.forwardRef)((t, e) => {
                let {
                    pressed: i,
                    defaultPressed: r = !1,
                    onPressedChange: p,
                    ...s
                } = t, [c = !1, d] = (0, m.T)({
                    prop: i,
                    onChange: p,
                    defaultProp: r
                });
                return (0, a.createElement)(l.WV.button, (0, n.Z)({
                    type: "button",
                    "aria-pressed": c,
                    "data-state": c ? "on" : "off",
                    "data-disabled": t.disabled ? "" : void 0
                }, s, {
                    ref: e,
                    onClick: (0, o.M)(t.onClick, () => {
                        t.disabled || d(!c)
                    })
                }))
            });
            var v = i(59241);
            let h = "ToggleGroup",
                [g, x] = (0, r.b)(h, [p.Pc]),
                b = (0, p.Pc)(),
                [y, w] = ((t, e) => {
                    let {
                        type: i,
                        ...o
                    } = t;
                    if ("single" === i) return a.createElement(k, (0, n.Z)({}, o, {
                        ref: e
                    }));
                    if ("multiple" === i) return a.createElement(j, (0, n.Z)({}, o, {
                        ref: e
                    }));
                    throw Error(`Missing prop \`type\` expected on \`${h}\``)
                }, g(h)),
                k = a.forwardRef((t, e) => {
                    let {
                        value: i,
                        defaultValue: o,
                        onValueChange: r = () => {},
                        ...p
                    } = t, [l, s] = (0, m.T)({
                        prop: i,
                        defaultProp: o,
                        onChange: r
                    });
                    return a.createElement(y, {
                        scope: t.__scopeToggleGroup,
                        type: "single",
                        value: l ? [l] : [],
                        onItemActivate: s,
                        onItemDeactivate: a.useCallback(() => s(""), [s])
                    }, a.createElement(S, (0, n.Z)({}, p, {
                        ref: e
                    })))
                }),
                j = a.forwardRef((t, e) => {
                    let {
                        value: i,
                        defaultValue: o,
                        onValueChange: r = () => {},
                        ...p
                    } = t, [l = [], s] = (0, m.T)({
                        prop: i,
                        defaultProp: o,
                        onChange: r
                    }), c = a.useCallback(t => s((e = []) => [...e, t]), [s]), d = a.useCallback(t => s((e = []) => e.filter(e => e !== t)), [s]);
                    return a.createElement(y, {
                        scope: t.__scopeToggleGroup,
                        type: "multiple",
                        value: l,
                        onItemActivate: c,
                        onItemDeactivate: d
                    }, a.createElement(S, (0, n.Z)({}, p, {
                        ref: e
                    })))
                }),
                [C, E] = g(h),
                S = a.forwardRef((t, e) => {
                    let {
                        __scopeToggleGroup: i,
                        disabled: o = !1,
                        rovingFocus: r = !0,
                        orientation: s,
                        dir: c,
                        loop: d = !0,
                        ...u
                    } = t, m = b(i), f = (0, v.gm)(c), h = {
                        role: "group",
                        dir: f,
                        ...u
                    };
                    return a.createElement(C, {
                        scope: i,
                        rovingFocus: r,
                        disabled: o
                    }, r ? a.createElement(p.fC, (0, n.Z)({
                        asChild: !0
                    }, m, {
                        orientation: s,
                        dir: f,
                        loop: d
                    }), a.createElement(l.WV.div, (0, n.Z)({}, h, {
                        ref: e
                    }))) : a.createElement(l.WV.div, (0, n.Z)({}, h, {
                        ref: e
                    })))
                }),
                z = "ToggleGroupItem",
                D = ((t, e) => {
                    let i = w(z, t.__scopeToggleGroup),
                        o = E(z, t.__scopeToggleGroup),
                        r = b(t.__scopeToggleGroup),
                        l = i.value.includes(t.value),
                        s = o.disabled || t.disabled,
                        c = { ...t,
                            pressed: l,
                            disabled: s
                        },
                        d = a.useRef(null);
                    return o.rovingFocus ? a.createElement(p.ck, (0, n.Z)({
                        asChild: !0
                    }, r, {
                        focusable: !s,
                        active: l,
                        ref: d
                    }), a.createElement(D, (0, n.Z)({}, c, {
                        ref: e
                    }))) : a.createElement(D, (0, n.Z)({}, c, {
                        ref: e
                    }))
                }, a.forwardRef((t, e) => {
                    let {
                        __scopeToggleGroup: i,
                        value: o,
                        ...r
                    } = t, p = w(z, i), l = {
                        role: "radio",
                        "aria-checked": t.pressed,
                        "aria-pressed": void 0
                    }, s = "single" === p.type ? l : void 0;
                    return a.createElement(f, (0, n.Z)({}, s, r, {
                        ref: e,
                        onPressedChange: t => {
                            t ? p.onItemActivate(o) : p.onItemDeactivate(o)
                        }
                    }))
                })),
                M = "Toolbar",
                [O, P] = (0, r.b)(M, [p.Pc, x]),
                A = (0, p.Pc)(),
                [I, T] = (x(), O(M)),
                R = (0, a.forwardRef)((t, e) => {
                    let {
                        __scopeToolbar: i,
                        orientation: o = "horizontal",
                        dir: r,
                        loop: s = !0,
                        ...c
                    } = t, d = A(i), u = (0, v.gm)(r);
                    return (0, a.createElement)(I, {
                        scope: i,
                        orientation: o,
                        dir: u
                    }, (0, a.createElement)(p.fC, (0, n.Z)({
                        asChild: !0
                    }, d, {
                        orientation: o,
                        dir: u,
                        loop: s
                    }), (0, a.createElement)(l.WV.div, (0, n.Z)({
                        role: "toolbar",
                        "aria-orientation": o,
                        dir: u
                    }, c, {
                        ref: e
                    }))))
                }),
                F = (0, a.forwardRef)((t, e) => {
                    let {
                        __scopeToolbar: i,
                        ...o
                    } = t, r = T("ToolbarSeparator", i);
                    return (0, a.createElement)(d, (0, n.Z)({
                        orientation: "horizontal" === r.orientation ? "vertical" : "horizontal"
                    }, o, {
                        ref: e
                    }))
                }),
                _ = (0, a.forwardRef)((t, e) => {
                    let {
                        __scopeToolbar: i,
                        ...o
                    } = t, r = A(i);
                    return (0, a.createElement)(p.ck, (0, n.Z)({
                        asChild: !0
                    }, r, {
                        focusable: !t.disabled
                    }), (0, a.createElement)(l.WV.button, (0, n.Z)({
                        type: "button"
                    }, o, {
                        ref: e
                    })))
                }),
                q = F
        }
    }
]);