try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5c3964aa-c268-4404-aee9-05e0120b88eb", e._sentryDebugIdIdentifier = "sentry-dbid-5c3964aa-c268-4404-aee9-05e0120b88eb")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2884], {
        32692: function(e, t, n) {
            "use strict";
            n.d(t, {
                dc: function() {
                    return l
                },
                Wn: function() {
                    return s
                }
            });
            let r = Error("failed to get response body reader"),
                o = Error("failed to complete download"),
                i = e => new Promise((t, n) => {
                    let r = new FileReader;
                    r.onload = () => {
                        let {
                            result: e
                        } = r;
                        e instanceof ArrayBuffer ? t(new Uint8Array(e)) : t(new Uint8Array)
                    }, r.onerror = e => {
                        n(Error(`File could not be read! Code=${e?.target?.error?.code||-1}`))
                    }, r.readAsArrayBuffer(e)
                }),
                l = async e => {
                    let t;
                    if ("string" == typeof e) t = /data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(e) ? atob(e.split(",")[1]).split("").map(e => e.charCodeAt(0)) : await (await fetch(e)).arrayBuffer();
                    else if (e instanceof URL) t = await (await fetch(e)).arrayBuffer();
                    else {
                        if (!(e instanceof File || e instanceof Blob)) return new Uint8Array;
                        t = await i(e)
                    }
                    return new Uint8Array(t)
                },
                a = async (e, t) => {
                    let n;
                    let i = await fetch(e);
                    try {
                        let l = parseInt(i.headers.get("Content-Length") || "-1"),
                            a = i.body ? .getReader();
                        if (!a) throw r;
                        let s = [],
                            u = 0;
                        for (;;) {
                            let {
                                done: n,
                                value: r
                            } = await a.read(), i = r ? r.length : 0;
                            if (n) {
                                if (-1 != l && l !== u) throw o;
                                t && t({
                                    url: e,
                                    total: l,
                                    received: u,
                                    delta: i,
                                    done: n
                                });
                                break
                            }
                            s.push(r), u += i, t && t({
                                url: e,
                                total: l,
                                received: u,
                                delta: i,
                                done: n
                            })
                        }
                        let c = new Uint8Array(u),
                            d = 0;
                        for (let e of s) c.set(e, d), d += e.length;
                        n = c.buffer
                    } catch (r) {
                        console.log("failed to send download progress event: ", r), n = await i.arrayBuffer(), t && t({
                            url: e,
                            total: n.byteLength,
                            received: n.byteLength,
                            delta: 0,
                            done: !0
                        })
                    }
                    return n
                },
                s = async (e, t, n = !1, r) => {
                    let o = new Blob([n ? await a(e, r) : await (await fetch(e)).arrayBuffer()], {
                        type: t
                    });
                    return URL.createObjectURL(o)
                }
        },
        6676: function(e, t, n) {
            var r = n(92368),
                o = n(36658),
                i = n(68289),
                l = 0;

            function a() {
                return o((1679616 * i() << 0).toString(36), 4)
            }

            function s() {
                return l = l < 1679616 ? l : 0, ++l - 1
            }

            function u() {
                return "c" + new Date().getTime().toString(36) + o(s().toString(36), 4) + r() + (a() + a())
            }
            u.slug = function() {
                var e = new Date().getTime().toString(36),
                    t = s().toString(36).slice(-4),
                    n = r().slice(0, 1) + r().slice(-1),
                    o = a().slice(-2);
                return e.slice(-2) + t + n + o
            }, u.isCuid = function(e) {
                return "string" == typeof e && !!e.startsWith("c")
            }, u.isSlug = function(e) {
                if ("string" != typeof e) return !1;
                var t = e.length;
                return t >= 7 && t <= 10
            }, u.fingerprint = r, e.exports = u
        },
        92368: function(e, t, n) {
            var r = n(36658),
                o = Object.keys("object" == typeof window ? window : self).length,
                i = r(((navigator.mimeTypes ? navigator.mimeTypes.length : 0) + navigator.userAgent.length).toString(36) + o.toString(36), 4);
            e.exports = function() {
                return i
            }
        },
        68289: function(e) {
            var t, n = "undefined" != typeof window && (window.crypto || window.msCrypto) || "undefined" != typeof self && self.crypto;
            t = n ? function() {
                return Math.abs(n.getRandomValues(new Uint32Array(1))[0] / 4294967295)
            } : Math.random, e.exports = t
        },
        36658: function(e) {
            e.exports = function(e, t) {
                var n = "000000000" + e;
                return n.substr(n.length - t)
            }
        },
        29567: function(e, t, n) {
            "use strict";
            n.d(t, {
                I: function() {
                    return o
                }
            });
            let r = "undefined" != typeof document && /^(Mac|iPhone|iPad|iPod)/.test(navigator.platform);

            function o(...e) {
                let t = new Set(e),
                    n = t.delete("Ctrl") || !r && t.delete("CmdOrCtrl"),
                    i = t.delete("Meta") || r && t.delete("CmdOrCtrl"),
                    l = t.delete("Shift"),
                    a = t.delete("Alt"),
                    s = 1 === t.size ? t.values().next().value.toUpperCase() : null;
                return e => e.ctrlKey === n && e.metaKey === i && e.shiftKey === l && e.altKey === a && (e.key.length > 1 ? e.key : String.fromCharCode(e.keyCode).toUpperCase()) === s && (e.preventDefault(), !0)
            }
        },
        45191: function(e, t, n) {
            let r = n(98021),
                o = n(27742),
                i = n(92552);
            e.exports = r + o + i
        },
        21: function(e, t, n) {
            e.exports = {
                lowercase: n(27742),
                uppercase: n(92552),
                numbers: n(98021),
                nolookalikes: n(90448),
                nolookalikesSafe: n(6096),
                alphanumeric: n(45191)
            }
        },
        27742: function(e) {
            e.exports = "abcdefghijklmnopqrstuvwxyz"
        },
        6096: function(e) {
            e.exports = "6789BCDFGHJKLMNPQRTWbcdfghjkmnpqrtwz"
        },
        90448: function(e) {
            e.exports = "346789ABCDEFGHJKLMNPQRTUVWXYabcdefghijkmnpqrtwxyz"
        },
        98021: function(e) {
            e.exports = "0123456789"
        },
        92552: function(e) {
            e.exports = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        },
        72392: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    default: function() {
                        return a
                    },
                    noSSR: function() {
                        return l
                    }
                });
            let r = n(43219);
            n(52322), n(2784);
            let o = r._(n(23711));

            function i(e) {
                return {
                    default: (null == e ? void 0 : e.default) || e
                }
            }

            function l(e, t) {
                return delete t.webpack, delete t.modules, e(t)
            }

            function a(e, t) {
                let n = o.default,
                    r = {
                        loading: e => {
                            let {
                                error: t,
                                isLoading: n,
                                pastDelay: r
                            } = e;
                            return null
                        }
                    };
                e instanceof Promise ? r.loader = () => e : "function" == typeof e ? r.loader = e : "object" == typeof e && (r = { ...r,
                    ...e
                });
                let a = (r = { ...r,
                    ...t
                }).loader;
                return (r.loadableGenerated && (r = { ...r,
                    ...r.loadableGenerated
                }, delete r.loadableGenerated), "boolean" != typeof r.ssr || r.ssr) ? n({ ...r,
                    loader: () => null != a ? a().then(i) : Promise.resolve(i(() => null))
                }) : (delete r.webpack, delete r.modules, l(n, r))
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        79195: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "LoadableContext", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let r = n(43219)._(n(2784)).default.createContext(null)
        },
        23711: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return f
                }
            });
            let r = n(43219)._(n(2784)),
                o = n(79195),
                i = [],
                l = [],
                a = !1;

            function s(e) {
                let t = e(),
                    n = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return n.promise = t.then(e => (n.loading = !1, n.loaded = e, e)).catch(e => {
                    throw n.loading = !1, n.error = e, e
                }), n
            }
            class u {
                promise() {
                    return this._res.promise
                }
                retry() {
                    this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                        pastDelay: !1,
                        timedOut: !1
                    };
                    let {
                        _res: e,
                        _opts: t
                    } = this;
                    e.loading && ("number" == typeof t.delay && (0 === t.delay ? this._state.pastDelay = !0 : this._delay = setTimeout(() => {
                        this._update({
                            pastDelay: !0
                        })
                    }, t.delay)), "number" == typeof t.timeout && (this._timeout = setTimeout(() => {
                        this._update({
                            timedOut: !0
                        })
                    }, t.timeout))), this._res.promise.then(() => {
                        this._update({}), this._clearTimeouts()
                    }).catch(e => {
                        this._update({}), this._clearTimeouts()
                    }), this._update({})
                }
                _update(e) {
                    this._state = { ...this._state,
                        error: this._res.error,
                        loaded: this._res.loaded,
                        loading: this._res.loading,
                        ...e
                    }, this._callbacks.forEach(e => e())
                }
                _clearTimeouts() {
                    clearTimeout(this._delay), clearTimeout(this._timeout)
                }
                getCurrentValue() {
                    return this._state
                }
                subscribe(e) {
                    return this._callbacks.add(e), () => {
                        this._callbacks.delete(e)
                    }
                }
                constructor(e, t) {
                    this._loadFn = e, this._opts = t, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
            }

            function c(e) {
                return function(e, t) {
                    let n = Object.assign({
                            loader: null,
                            loading: null,
                            delay: 200,
                            timeout: null,
                            webpack: null,
                            modules: null
                        }, t),
                        i = null;

                    function s() {
                        if (!i) {
                            let t = new u(e, n);
                            i = {
                                getCurrentValue: t.getCurrentValue.bind(t),
                                subscribe: t.subscribe.bind(t),
                                retry: t.retry.bind(t),
                                promise: t.promise.bind(t)
                            }
                        }
                        return i.promise()
                    }
                    if (!a) {
                        let e = n.webpack ? n.webpack() : n.modules;
                        e && l.push(t => {
                            for (let n of e)
                                if (t.includes(n)) return s()
                        })
                    }

                    function c(e, t) {
                        ! function() {
                            s();
                            let e = r.default.useContext(o.LoadableContext);
                            e && Array.isArray(n.modules) && n.modules.forEach(t => {
                                e(t)
                            })
                        }();
                        let l = r.default.useSyncExternalStore(i.subscribe, i.getCurrentValue, i.getCurrentValue);
                        return r.default.useImperativeHandle(t, () => ({
                            retry: i.retry
                        }), []), r.default.useMemo(() => {
                            var t;
                            return l.loading || l.error ? r.default.createElement(n.loading, {
                                isLoading: l.loading,
                                pastDelay: l.pastDelay,
                                timedOut: l.timedOut,
                                error: l.error,
                                retry: i.retry
                            }) : l.loaded ? r.default.createElement((t = l.loaded) && t.default ? t.default : t, e) : null
                        }, [e, l])
                    }
                    return c.preload = () => s(), c.displayName = "LoadableComponent", r.default.forwardRef(c)
                }(s, e)
            }

            function d(e, t) {
                let n = [];
                for (; e.length;) {
                    let r = e.pop();
                    n.push(r(t))
                }
                return Promise.all(n).then(() => {
                    if (e.length) return d(e, t)
                })
            }
            c.preloadAll = () => new Promise((e, t) => {
                d(i).then(e, t)
            }), c.preloadReady = e => (void 0 === e && (e = []), new Promise(t => {
                let n = () => (a = !0, t());
                d(l, e).then(n, n)
            })), window.__NEXT_PRELOADREADY = c.preloadReady;
            let f = c
        },
        82859: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__Inter_8a0ba0', '__Inter_Fallback_8a0ba0', Helvetica",
                    fontStyle: "normal"
                },
                className: "__className_8a0ba0"
            }
        },
        25237: function(e, t, n) {
            e.exports = n(72392)
        },
        67302: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return l
                }
            });
            var r = n(2784);
            ! function(e, t) {
                void 0 === t && (t = {});
                var n = t.insertAt;
                if (e && "undefined" != typeof document) {
                    var r = document.head || document.getElementsByTagName("head")[0],
                        o = document.createElement("style");
                    o.type = "text/css", "top" === n && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e))
                }
            }(".index-module_canvas__H2w7d {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n}");
            var o = function(e, t) {
                    return Math.random() * (t - e) + e
                },
                i = function() {
                    function e(e, t, n, r, i, l, a, s, u) {
                        void 0 === n && (n = 0), void 0 === i && (i = ["circle", "square"]), void 0 === l && (l = 12), void 0 === a && (a = 30), void 0 === s && (s = 1), void 0 === u && (u = .004);
                        var c, d = window.devicePixelRatio > 1 ? 2 : 1;
                        this.x = e * window.innerWidth * d, this.y = t * window.innerHeight * d, this.width = l, this.height = l, this.theta = Math.PI / 180 * o(n - a, n + a), this.radius = o(20 * s, 70 * s), this.vx = this.radius * Math.cos(this.theta), this.vy = this.radius * Math.sin(this.theta), this.xFriction = .9, this.yFriction = .87, this.gravity = o(.5, .6), this.opacity = 1, this.opacityDelta = u, this.rotate = o(0, 360), this.widthDelta = o(0, 360), this.heightDelta = o(0, 360), this.rotateDelta = o(-1, 1), this.colors = r, this.color = {
                            r: parseInt((c = this.colors[Math.floor(o(0, this.colors.length))]).slice(1, 3), 16),
                            g: parseInt(c.slice(3, 5), 16),
                            b: parseInt(c.slice(5, 7), 16)
                        }, this.shapes = i, this.shape = this.shapes[Math.floor(o(0, this.shapes.length))], this.swingOffset = o(0, 2 * Math.PI), this.swingSpeed = .05 * Math.random() + .01, this.swingAmplitude = o(.1, .2)
                    }
                    return e.prototype.update = function() {
                        this.vx *= this.xFriction, this.vy *= this.yFriction, this.vy += this.gravity, this.vx += Math.sin(this.swingOffset) * this.swingAmplitude, this.x += this.vx, this.y += this.vy, this.opacity -= this.opacityDelta, this.widthDelta += 2, this.heightDelta += 2, this.rotate += this.rotateDelta, this.swingOffset += this.swingSpeed
                    }, e.prototype.drawSquare = function(e) {
                        e.fillRect(this.x, this.y, this.width * Math.cos(Math.PI / 180 * this.widthDelta), this.height * Math.sin(Math.PI / 180 * this.heightDelta))
                    }, e.prototype.drawCircle = function(e) {
                        e.beginPath(), e.ellipse(this.x, this.y, Math.abs(this.width * Math.cos(Math.PI / 180 * this.widthDelta)) / 2, Math.abs(this.height * Math.sin(Math.PI / 180 * this.heightDelta)) / 2, 0, 0, 2 * Math.PI), e.fill(), e.closePath()
                    }, e.prototype.draw = function(e) {
                        var t = 1.3 * this.width,
                            n = 1.3 * this.height;
                        e.translate(this.x + t, this.y + n), e.rotate(Math.PI / 100 * this.rotate), e.translate(-(this.x + t), -(this.y + n)), e.fillStyle = "rgba(".concat(this.color.r, ", ").concat(this.color.g, ", ").concat(this.color.b, ", ").concat(this.opacity, ")"), "square" === this.shape && this.drawSquare(e), "circle" === this.shape && this.drawCircle(e), e.resetTransform()
                    }, e
                }();

            function l(e) {
                var t = e.mode,
                    n = void 0 === t ? "boom" : t,
                    l = e.particleCount,
                    a = void 0 === l ? 30 : l,
                    s = e.shapeSize,
                    u = void 0 === s ? 12 : s,
                    c = e.colors,
                    d = void 0 === c ? ["#ff577f", "#ff884b", "#ffd384", "#fff9b0"] : c,
                    f = "boom" === e.mode || void 0 === e.mode ? e : {
                        effectInterval: 1,
                        effectCount: 1 / 0
                    },
                    h = f.x,
                    p = void 0 === h ? .5 : h,
                    m = f.y,
                    g = void 0 === m ? .5 : m,
                    b = f.deg,
                    v = void 0 === b ? 270 : b,
                    y = f.spreadDeg,
                    w = void 0 === y ? 30 : y,
                    E = f.effectInterval,
                    k = void 0 === E ? 3e3 : E,
                    C = f.effectCount,
                    M = void 0 === C ? 1 : C,
                    S = f.launchSpeed,
                    A = void 0 === S ? 1 : S,
                    T = ("fall" === e.mode ? e : {}).fadeOutHeight,
                    R = void 0 === T ? .8 : T,
                    L = (0, r.useRef)(null),
                    x = (0, r.useRef)(),
                    I = (0, r.useRef)([]),
                    O = (0, r.useRef)(0),
                    _ = (0, r.useRef)(0),
                    P = (0, r.useCallback)(function() {
                        var e = L.current,
                            t = null == e ? void 0 : e.getContext("2d");
                        if (e && t) {
                            x.current = t;
                            var n = window.devicePixelRatio > 1 ? 2 : 1,
                                r = window.innerWidth,
                                o = window.innerHeight;
                            e.style.width = "".concat(r, "px"), e.style.height = "".concat(o, "px"), e.width = r * n, e.height = o * n, t.scale(n, n)
                        }
                    }, []),
                    D = (0, r.useCallback)(function() {
                        for (var e = "fall" === n, t = e ? a / 30 : a, r = e ? o(0, 1) : p, l = e ? o(-.1, -.3) : g, s = e ? 270 : v, c = e ? 0 : w, f = e ? 0 : A, h = e ? 3.4 / R / window.innerHeight : .004, m = 0; m < t; m += 1) I.current.push(new i(r, l, s, d, ["circle", "square"], u, c, f, h))
                    }, [n, p, g, v, d, u, w, A, a, R]),
                    H = (0, r.useCallback)(function() {
                        if (x.current) {
                            var e, t, n, r = Date.now(),
                                o = Date.now() - k,
                                i = function() {
                                    var l = L.current;
                                    if (x.current && l && (O.current = requestAnimationFrame(i), t = (e = Date.now()) - r, n = e - o, !(t < 16.666666666666668))) {
                                        x.current.clearRect(0, 0, l.width, l.height), n > k && _.current < M && (D(), o = e - n % k, _.current += 1);
                                        for (var a = I.current, s = a.length - 1; s >= 0; s -= 1) {
                                            var u = a[s];
                                            u.update(), u.draw(x.current);
                                            var c = (null == l ? void 0 : l.height) || 0;
                                            (u.opacity <= 0 || u.y > c) && a.splice(a.indexOf(u), 1)
                                        }
                                        r = e - t % 16.666666666666668, _.current >= M && 0 === a.length && cancelAnimationFrame(O.current)
                                    }
                                };
                            O.current = requestAnimationFrame(i)
                        }
                    }, [k, M, D]);
                return (0, r.useEffect)(function() {
                    return P(), H(),
                        function() {
                            O.current && cancelAnimationFrame(O.current)
                        }
                }, [P, H]), (0, r.useEffect)(function() {
                    _.current = 0
                }, [M]), r.createElement("canvas", {
                    className: "index-module_canvas__H2w7d",
                    ref: L
                })
            }
        },
        50812: function(e, t, n) {
            "use strict";
            n.d(t, {
                XZ: function() {
                    return C
                },
                Ym: function() {
                    return M
                },
                uP: function() {
                    return E
                }
            });
            var r, o, i, l, a, s, u = n(2784),
                c = n(6681),
                d = n.n(c),
                f = function() {
                    return (f = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                };

            function h(e, t) {
                switch (t.type) {
                    case s.REGISTER_TAB_STOP:
                        var n = t.payload;
                        if (!n.domElementRef.current) return e;
                        for (var r = -1, o = e.tabStops.length - 1; o >= 0; --o) {
                            var i = e.tabStops[o];
                            if (i.id === n.id) return d()(!1, "'".concat(n.id, "' tab stop already registered")), e;
                            if (-1 === r && i.domElementRef.current && 4 & i.domElementRef.current.compareDocumentPosition(n.domElementRef.current)) {
                                r = o + 1;
                                break
                            }
                        } - 1 === r && (r = 0);
                        var u = e.tabStops.slice();
                        return u.splice(r, 0, n), f(f({}, e), {
                            selectedId: g(u, e.selectedId),
                            tabStops: u,
                            rowStartMap: null
                        });
                    case s.UNREGISTER_TAB_STOP:
                        var c = t.payload.id,
                            u = e.tabStops.filter(function(e) {
                                return e.id !== c
                            });
                        if (u.length === e.tabStops.length) return d()(!1, "'".concat(c, "' tab stop already unregistered")), e;
                        return f(f({}, e), {
                            selectedId: g(u, e.selectedId),
                            tabStops: u,
                            rowStartMap: null
                        });
                    case s.TAB_STOP_UPDATED:
                        var h = t.payload,
                            y = h.id,
                            w = h.rowIndex,
                            E = h.disabled,
                            k = e.tabStops.findIndex(function(e) {
                                return e.id === y
                            });
                        if (-1 === k) return d()(!1, "'".concat(y, "' tab stop not registered")), e;
                        var C = e.tabStops[k];
                        if (C.disabled === E && C.rowIndex === w) return e;
                        var n = f(f({}, C), {
                                rowIndex: w,
                                disabled: E
                            }),
                            u = e.tabStops.slice();
                        return u.splice(k, 1, n), f(f({}, e), {
                            selectedId: g(u, e.selectedId),
                            tabStops: u,
                            rowStartMap: null
                        });
                    case s.KEY_DOWN:
                        var M = t.payload,
                            S = M.id,
                            A = M.key,
                            T = M.ctrlKey,
                            k = e.tabStops.findIndex(function(e) {
                                return e.id === S
                            });
                        if (-1 === k) return d()(!1, "'".concat(S, "' tab stop not registered")), e;
                        var R = e.tabStops[k];
                        if (R.disabled) return e;
                        var L = null !== R.rowIndex,
                            x = k === p(e.tabStops),
                            I = k === m(e.tabStops),
                            O = function(e, t, n, r, o, i, s) {
                                switch (e) {
                                    case l.ArrowLeft:
                                        if (n || "horizontal" === r || "both" === r) return !n && o && i ? a.VERY_LAST : a.PREVIOUS;
                                        return null;
                                    case l.ArrowRight:
                                        if (n || "horizontal" === r || "both" === r) return !n && o && s ? a.VERY_FIRST : a.NEXT;
                                        return null;
                                    case l.ArrowUp:
                                        if (n) return a.PREVIOUS_ROW;
                                        if ("vertical" === r || "both" === r) return o && i ? a.VERY_LAST : a.PREVIOUS;
                                        return null;
                                    case l.ArrowDown:
                                        if (n) return a.NEXT_ROW;
                                        if ("vertical" === r || "both" === r) return o && s ? a.VERY_FIRST : a.NEXT;
                                        return null;
                                    case l.Home:
                                        return !n || t ? a.VERY_FIRST : a.FIRST_IN_ROW;
                                    case l.End:
                                        return !n || t ? a.VERY_LAST : a.LAST_IN_ROW;
                                    default:
                                        return null
                                }
                            }(A, T, L, e.direction, e.loopAround, x, I);
                        if (!O) return e;
                        switch (O) {
                            case a.NEXT:
                                for (var o = k + 1; o < e.tabStops.length; ++o) {
                                    var C = e.tabStops[o];
                                    if (L && C.rowIndex !== R.rowIndex) break;
                                    if (!C.disabled) return b(e, C)
                                }
                                break;
                            case a.PREVIOUS:
                                for (var o = k - 1; o >= 0; --o) {
                                    var C = e.tabStops[o];
                                    if (L && C.rowIndex !== R.rowIndex) break;
                                    if (!C.disabled) return b(e, C)
                                }
                                break;
                            case a.VERY_FIRST:
                                var _ = p(e.tabStops);
                                if (_ > -1) return b(e, e.tabStops[_]);
                                break;
                            case a.VERY_LAST:
                                var P = m(e.tabStops);
                                if (P > -1) return b(e, e.tabStops[P]);
                                break;
                            case a.PREVIOUS_ROW:
                                if (null === R.rowIndex || 0 === R.rowIndex) break;
                                var D = e.rowStartMap || v(e),
                                    H = D.get(R.rowIndex);
                                if (void 0 === H) break;
                                for (var N = k - H, o = R.rowIndex - 1; o >= 0; --o) {
                                    var F = D.get(o);
                                    if (void 0 === F) return e;
                                    var j = e.tabStops[F + N];
                                    if (j && !j.disabled) return b(e, j, D)
                                }
                                return f(f({}, e), {
                                    allowFocusing: !0,
                                    rowStartMap: D
                                });
                            case a.NEXT_ROW:
                                var B = e.tabStops[e.tabStops.length - 1].rowIndex;
                                if (null === R.rowIndex || null === B || R.rowIndex === B) break;
                                var D = e.rowStartMap || v(e),
                                    H = D.get(R.rowIndex);
                                if (void 0 === H) break;
                                for (var N = k - H, o = R.rowIndex + 1; o <= B; ++o) {
                                    var $ = D.get(o);
                                    if (void 0 === $) return e;
                                    var j = e.tabStops[$ + N];
                                    if (j && !j.disabled) return b(e, j, D)
                                }
                                return f(f({}, e), {
                                    allowFocusing: !0,
                                    rowStartMap: D
                                });
                            case a.FIRST_IN_ROW:
                                if (null === R.rowIndex) break;
                                var D = e.rowStartMap || v(e),
                                    H = D.get(R.rowIndex);
                                if (void 0 === H) break;
                                for (var o = H; o < e.tabStops.length; ++o) {
                                    var C = e.tabStops[o];
                                    if (C.rowIndex !== R.rowIndex) break;
                                    if (!C.disabled) return b(e, e.tabStops[o], D)
                                }
                                break;
                            case a.LAST_IN_ROW:
                                if (null === R.rowIndex) break;
                                for (var D = e.rowStartMap || v(e), W = D.has(R.rowIndex + 1) ? (D.get(R.rowIndex + 1) || 0) - 1 : e.tabStops.length - 1, o = W; o >= 0; --o) {
                                    var C = e.tabStops[o];
                                    if (C.rowIndex !== R.rowIndex) break;
                                    if (!C.disabled) return b(e, e.tabStops[o], D)
                                }
                        }
                        return e;
                    case s.CLICKED:
                        var z = t.payload.id,
                            k = e.tabStops.findIndex(function(e) {
                                return e.id === z
                            });
                        if (-1 === k) return d()(!1, "'".concat(z, "' tab stop not registered")), e;
                        var R = e.tabStops[k];
                        return R.disabled ? e : b(e, R, void 0, e.focusOnClick);
                    case s.OPTIONS_UPDATED:
                        return f(f({}, e), t.payload);
                    default:
                        return e
                }
            }

            function p(e) {
                return e.findIndex(function(e) {
                    return !e.disabled
                })
            }

            function m(e) {
                for (var t = e.length - 1; t >= 0; --t)
                    if (!e[t].disabled) return t;
                return -1
            }

            function g(e, t) {
                if (null === t) {
                    var n = e.findIndex(function(e) {
                        return !e.disabled
                    });
                    return -1 === n ? null : e[n].id
                }
                var r = e.findIndex(function(e) {
                    return e.id === t
                });
                return -1 === r || e[r].disabled ? -1 === (r = e.findIndex(function(e) {
                    return !e.disabled
                })) ? null : e[r].id : t
            }

            function b(e, t, n, r) {
                return void 0 === r && (r = !0), f(f({}, e), {
                    allowFocusing: r,
                    selectedId: t.id,
                    rowStartMap: n || e.rowStartMap
                })
            }

            function v(e) {
                for (var t = new Map, n = 0; n < e.tabStops.length; ++n) {
                    var r = e.tabStops[n].rowIndex;
                    null === r || t.has(r) || t.set(r, n)
                }
                return t
            }(r = l || (l = {})).ArrowLeft = "ArrowLeft", r.ArrowRight = "ArrowRight", r.ArrowUp = "ArrowUp", r.ArrowDown = "ArrowDown", r.Home = "Home", r.End = "End", (o = a || (a = {})).PREVIOUS = "PREVIOUS", o.NEXT = "NEXT", o.VERY_FIRST = "VERY_FIRST", o.VERY_LAST = "VERY_LAST", o.PREVIOUS_ROW = "PREVIOUS_ROW", o.NEXT_ROW = "NEXT_ROW", o.FIRST_IN_ROW = "FIRST_IN_ROW", o.LAST_IN_ROW = "LAST_IN_ROW", (i = s || (s = {})).REGISTER_TAB_STOP = "REGISTER_TAB_STOP", i.UNREGISTER_TAB_STOP = "UNREGISTER_TAB_STOP", i.KEY_DOWN = "KEY_DOWN", i.CLICKED = "CLICKED", i.TAB_STOP_UPDATED = "TAB_STOP_UPDATED", i.OPTIONS_UPDATED = "OPTIONS_UPDATED";
            var y = {
                    selectedId: null,
                    allowFocusing: !1,
                    tabStops: [],
                    direction: "horizontal",
                    focusOnClick: !1,
                    loopAround: !1,
                    rowStartMap: null
                },
                w = (0, u.createContext)({
                    state: y,
                    dispatch: function() {}
                }),
                E = function(e) {
                    var t = e.children,
                        n = e.options,
                        r = (0, u.useReducer)(h, f(f({}, y), n)),
                        o = r[0],
                        i = r[1];
                    (0, u.useEffect)(function() {
                        var e, t, r;
                        i({
                            type: s.OPTIONS_UPDATED,
                            payload: {
                                direction: null !== (e = null == n ? void 0 : n.direction) && void 0 !== e ? e : y.direction,
                                focusOnClick: null !== (t = null == n ? void 0 : n.focusOnClick) && void 0 !== t ? t : y.focusOnClick,
                                loopAround: null !== (r = null == n ? void 0 : n.loopAround) && void 0 !== r ? r : y.loopAround
                            }
                        })
                    }, [null == n ? void 0 : n.direction, null == n ? void 0 : n.focusOnClick, null == n ? void 0 : n.loopAround]);
                    var l = (0, u.useMemo)(function() {
                        return {
                            state: o,
                            dispatch: i
                        }
                    }, [o]);
                    return u.createElement(w.Provider, {
                        value: l
                    }, t)
                },
                k = 0;

            function C(e, t, n) {
                void 0 === n && (n = null);
                var r = (0, u.useRef)(null);

                function o() {
                    return r.current || (r.current = "rti_".concat(++k)), r.current
                }
                var i = (0, u.useRef)(!1),
                    a = (0, u.useContext)(w);
                (0, u.useEffect)(function() {
                    var r = o();
                    return a.dispatch({
                            type: s.REGISTER_TAB_STOP,
                            payload: {
                                id: r,
                                domElementRef: e,
                                rowIndex: n,
                                disabled: t
                            }
                        }),
                        function() {
                            a.dispatch({
                                type: s.UNREGISTER_TAB_STOP,
                                payload: {
                                    id: r
                                }
                            })
                        }
                }, []), (0, u.useEffect)(function() {
                    i.current ? a.dispatch({
                        type: s.TAB_STOP_UPDATED,
                        payload: {
                            id: o(),
                            rowIndex: n,
                            disabled: t
                        }
                    }) : i.current = !0
                }, [n, t]);
                var c = (0, u.useCallback)(function(e) {
                        var t = l[e.key];
                        t && (a.dispatch({
                            type: s.KEY_DOWN,
                            payload: {
                                id: o(),
                                key: t,
                                ctrlKey: e.ctrlKey
                            }
                        }), e.preventDefault())
                    }, []),
                    d = (0, u.useCallback)(function() {
                        a.dispatch({
                            type: s.CLICKED,
                            payload: {
                                id: o()
                            }
                        })
                    }, []),
                    f = o() === a.state.selectedId,
                    h = f && a.state.allowFocusing;
                return [f ? 0 : -1, h, c, d]
            }

            function M(e, t) {
                (0, u.useEffect)(function() {
                    e && t.current && t.current.focus()
                }, [e])
            }
        },
        6681: function(e) {
            "use strict";
            e.exports = function() {}
        },
        91383: function(e, t, n) {
            "use strict";
            n.d(t, {
                tZ: function() {
                    return r
                }
            });
            var r = (e, t) => {
                if ("slot" === e) return 0;
                if (e instanceof Function) return e(t);
                let {
                    children: n,
                    ...r
                } = null != t ? t : {};
                if ("svg" === e) throw Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");
                return [e, r, n]
            }
        },
        99734: function(e, t, n) {
            "use strict";
            n.d(t, {
                ZP: function() {
                    return l
                }
            });
            var r = n(5865),
                o = n(91383),
                i = /^\s*>\s$/,
                l = r.NB.create({
                    name: "blockquote",
                    addOptions: () => ({
                        HTMLAttributes: {}
                    }),
                    content: "block+",
                    group: "block",
                    defining: !0,
                    parseHTML: () => [{
                        tag: "blockquote"
                    }],
                    renderHTML({
                        HTMLAttributes: e
                    }) {
                        return (0, o.tZ)("blockquote", { ...(0, r.P1)(this.options.HTMLAttributes, e),
                            children: (0, o.tZ)("slot", {})
                        })
                    },
                    addCommands() {
                        return {
                            setBlockquote: () => ({
                                commands: e
                            }) => e.wrapIn(this.name),
                            toggleBlockquote: () => ({
                                commands: e
                            }) => e.toggleWrap(this.name),
                            unsetBlockquote: () => ({
                                commands: e
                            }) => e.lift(this.name)
                        }
                    },
                    addKeyboardShortcuts() {
                        return {
                            "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
                        }
                    },
                    addInputRules() {
                        return [(0, r.S0)({
                            find: i,
                            type: this.type
                        })]
                    }
                })
        },
        67937: function(e, t, n) {
            "use strict";
            n.d(t, {
                ZP: function() {
                    return u
                }
            });
            var r = n(5865),
                o = n(91383),
                i = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/,
                l = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g,
                a = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/,
                s = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g,
                u = r.vc.create({
                    name: "bold",
                    addOptions: () => ({
                        HTMLAttributes: {}
                    }),
                    parseHTML() {
                        return [{
                            tag: "strong"
                        }, {
                            tag: "b",
                            getAttrs: e => "normal" !== e.style.fontWeight && null
                        }, {
                            style: "font-weight=400",
                            clearMark: e => e.type.name === this.name
                        }, {
                            style: "font-weight",
                            getAttrs: e => /^(bold(er)?|[5-9]\d{2,})$/.test(e) && null
                        }]
                    },
                    renderHTML({
                        HTMLAttributes: e
                    }) {
                        return (0, o.tZ)("strong", { ...(0, r.P1)(this.options.HTMLAttributes, e),
                            children: (0, o.tZ)("slot", {})
                        })
                    },
                    addCommands() {
                        return {
                            setBold: () => ({
                                commands: e
                            }) => e.setMark(this.name),
                            toggleBold: () => ({
                                commands: e
                            }) => e.toggleMark(this.name),
                            unsetBold: () => ({
                                commands: e
                            }) => e.unsetMark(this.name)
                        }
                    },
                    addKeyboardShortcuts() {
                        return {
                            "Mod-b": () => this.editor.commands.toggleBold(),
                            "Mod-B": () => this.editor.commands.toggleBold()
                        }
                    },
                    addInputRules() {
                        return [(0, r.Cf)({
                            find: i,
                            type: this.type
                        }), (0, r.Cf)({
                            find: a,
                            type: this.type
                        })]
                    },
                    addPasteRules() {
                        return [(0, r.K9)({
                            find: l,
                            type: this.type
                        }), (0, r.K9)({
                            find: s,
                            type: this.type
                        })]
                    }
                })
        },
        30561: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var r = n(37271).DY
        },
        38170: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var r = n(55841).fj
        },
        35525: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(5865),
                o = r.NB.create({
                    name: "hardBreak",
                    addOptions: () => ({
                        keepMarks: !0,
                        HTMLAttributes: {}
                    }),
                    inline: !0,
                    group: "inline",
                    selectable: !1,
                    linebreakReplacement: !0,
                    parseHTML: () => [{
                        tag: "br"
                    }],
                    renderHTML({
                        HTMLAttributes: e
                    }) {
                        return ["br", (0, r.P1)(this.options.HTMLAttributes, e)]
                    },
                    renderText: () => "\n",
                    addCommands() {
                        return {
                            setHardBreak: () => ({
                                commands: e,
                                chain: t,
                                state: n,
                                editor: r
                            }) => e.first([() => e.exitCode(), () => e.command(() => {
                                let {
                                    selection: e,
                                    storedMarks: o
                                } = n;
                                if (e.$from.parent.type.spec.isolating) return !1;
                                let {
                                    keepMarks: i
                                } = this.options, {
                                    splittableMarks: l
                                } = r.extensionManager, a = o || e.$to.parentOffset && e.$from.marks();
                                return t().insertContent({
                                    type: this.name
                                }).command(({
                                    tr: e,
                                    dispatch: t
                                }) => {
                                    if (t && a && i) {
                                        let t = a.filter(e => l.includes(e.type.name));
                                        e.ensureMarks(t)
                                    }
                                    return !0
                                }).run()
                            })])
                        }
                    },
                    addKeyboardShortcuts() {
                        return {
                            "Mod-Enter": () => this.editor.commands.setHardBreak(),
                            "Shift-Enter": () => this.editor.commands.setHardBreak()
                        }
                    }
                })
        },
        50601: function(e, t, n) {
            "use strict";
            n.d(t, {
                ZP: function() {
                    return l
                }
            });
            var r = n(5865),
                o = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))$/,
                i = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))/g,
                l = r.vc.create({
                    name: "highlight",
                    addOptions: () => ({
                        multicolor: !1,
                        HTMLAttributes: {}
                    }),
                    addAttributes() {
                        return this.options.multicolor ? {
                            color: {
                                default: null,
                                parseHTML: e => e.getAttribute("data-color") || e.style.backgroundColor,
                                renderHTML: e => e.color ? {
                                    "data-color": e.color,
                                    style: `background-color: ${e.color}; color: inherit`
                                } : {}
                            }
                        } : {}
                    },
                    parseHTML: () => [{
                        tag: "mark"
                    }],
                    renderHTML({
                        HTMLAttributes: e
                    }) {
                        return ["mark", (0, r.P1)(this.options.HTMLAttributes, e), 0]
                    },
                    addCommands() {
                        return {
                            setHighlight: e => ({
                                commands: t
                            }) => t.setMark(this.name, e),
                            toggleHighlight: e => ({
                                commands: t
                            }) => t.toggleMark(this.name, e),
                            unsetHighlight: () => ({
                                commands: e
                            }) => e.unsetMark(this.name)
                        }
                    },
                    addKeyboardShortcuts() {
                        return {
                            "Mod-Shift-h": () => this.editor.commands.toggleHighlight()
                        }
                    },
                    addInputRules() {
                        return [(0, r.Cf)({
                            find: o,
                            type: this.type
                        })]
                    },
                    addPasteRules() {
                        return [(0, r.K9)({
                            find: i,
                            type: this.type
                        })]
                    }
                })
        },
        73816: function(e, t, n) {
            "use strict";
            n.d(t, {
                ZP: function() {
                    return s
                }
            });
            var r = n(5865),
                o = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/,
                i = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g,
                l = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/,
                a = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g,
                s = r.vc.create({
                    name: "italic",
                    addOptions: () => ({
                        HTMLAttributes: {}
                    }),
                    parseHTML() {
                        return [{
                            tag: "em"
                        }, {
                            tag: "i",
                            getAttrs: e => "normal" !== e.style.fontStyle && null
                        }, {
                            style: "font-style=normal",
                            clearMark: e => e.type.name === this.name
                        }, {
                            style: "font-style=italic"
                        }]
                    },
                    renderHTML({
                        HTMLAttributes: e
                    }) {
                        return ["em", (0, r.P1)(this.options.HTMLAttributes, e), 0]
                    },
                    addCommands() {
                        return {
                            setItalic: () => ({
                                commands: e
                            }) => e.setMark(this.name),
                            toggleItalic: () => ({
                                commands: e
                            }) => e.toggleMark(this.name),
                            unsetItalic: () => ({
                                commands: e
                            }) => e.unsetMark(this.name)
                        }
                    },
                    addKeyboardShortcuts() {
                        return {
                            "Mod-i": () => this.editor.commands.toggleItalic(),
                            "Mod-I": () => this.editor.commands.toggleItalic()
                        }
                    },
                    addInputRules() {
                        return [(0, r.Cf)({
                            find: o,
                            type: this.type
                        }), (0, r.Cf)({
                            find: l,
                            type: this.type
                        })]
                    },
                    addPasteRules() {
                        return [(0, r.K9)({
                            find: i,
                            type: this.type
                        }), (0, r.K9)({
                            find: a,
                            type: this.type
                        })]
                    }
                })
        },
        60865: function(e, t, n) {
            "use strict";
            n.d(t, {
                ZP: function() {
                    return eU
                }
            });
            var r = n(5865);
            let o = "numeric",
                i = "ascii",
                l = "alpha",
                a = "asciinumeric",
                s = "alphanumeric",
                u = "domain",
                c = "emoji",
                d = "whitespace";

            function f(e, t, n) {
                for (let r in t[o] && (t[a] = !0, t[s] = !0), t[i] && (t[a] = !0, t[l] = !0), t[a] && (t[s] = !0), t[l] && (t[s] = !0), t[s] && (t[u] = !0), t[c] && (t[u] = !0), t) {
                    let t = (r in n || (n[r] = []), n[r]);
                    0 > t.indexOf(e) && t.push(e)
                }
            }

            function h(e = null) {
                this.j = {}, this.jr = [], this.jd = null, this.t = e
            }
            h.groups = {}, h.prototype = {
                accepts() {
                    return !!this.t
                },
                go(e) {
                    let t = this.j[e];
                    if (t) return t;
                    for (let t = 0; t < this.jr.length; t++) {
                        let n = this.jr[t][0],
                            r = this.jr[t][1];
                        if (r && n.test(e)) return r
                    }
                    return this.jd
                },
                has(e, t = !1) {
                    return t ? e in this.j : !!this.go(e)
                },
                ta(e, t, n, r) {
                    for (let o = 0; o < e.length; o++) this.tt(e[o], t, n, r)
                },
                tr(e, t, n, r) {
                    let o;
                    return r = r || h.groups, t && t.j ? o = t : (o = new h(t), n && r && f(t, n, r)), this.jr.push([e, o]), o
                },
                ts(e, t, n, r) {
                    let o = this,
                        i = e.length;
                    if (!i) return o;
                    for (let t = 0; t < i - 1; t++) o = o.tt(e[t]);
                    return o.tt(e[i - 1], t, n, r)
                },
                tt(e, t, n, r) {
                    if (r = r || h.groups, t && t.j) return this.j[e] = t, t;
                    let o, i = this.go(e);
                    return i ? (Object.assign((o = new h).j, i.j), o.jr.push.apply(o.jr, i.jr), o.jd = i.jd, o.t = i.t) : o = new h, t && (r && (o.t && "string" == typeof o.t ? f(t, Object.assign(function(e, t) {
                        let n = {};
                        for (let r in t) t[r].indexOf(e) >= 0 && (n[r] = !0);
                        return n
                    }(o.t, r), n), r) : n && f(t, n, r)), o.t = t), this.j[e] = o, o
                }
            };
            let p = (e, t, n, r, o) => e.ta(t, n, r, o),
                m = (e, t, n, r, o) => e.tr(t, n, r, o),
                g = (e, t, n, r, o) => e.ts(t, n, r, o),
                b = (e, t, n, r, o) => e.tt(t, n, r, o),
                v = "WORD",
                y = "UWORD",
                w = "ASCIINUMERICAL",
                E = "ALPHANUMERICAL",
                k = "LOCALHOST",
                C = "UTLD",
                M = "SCHEME",
                S = "SLASH_SCHEME",
                A = "OPENBRACE",
                T = "CLOSEBRACE",
                R = "OPENBRACKET",
                L = "CLOSEBRACKET",
                x = "OPENPAREN",
                I = "CLOSEPAREN",
                O = "OPENANGLEBRACKET",
                _ = "CLOSEANGLEBRACKET",
                P = "FULLWIDTHLEFTPAREN",
                D = "FULLWIDTHRIGHTPAREN",
                H = "LEFTCORNERBRACKET",
                N = "RIGHTCORNERBRACKET",
                F = "LEFTWHITECORNERBRACKET",
                j = "RIGHTWHITECORNERBRACKET",
                B = "FULLWIDTHLESSTHAN",
                $ = "FULLWIDTHGREATERTHAN",
                W = "AMPERSAND",
                z = "APOSTROPHE",
                K = "ASTERISK",
                U = "BACKSLASH",
                V = "BACKTICK",
                Y = "CARET",
                X = "COLON",
                Z = "COMMA",
                q = "DOLLAR",
                G = "EQUALS",
                Q = "EXCLAMATION",
                J = "HYPHEN",
                ee = "PERCENT",
                et = "PIPE",
                en = "PLUS",
                er = "POUND",
                eo = "QUERY",
                ei = "QUOTE",
                el = "FULLWIDTHMIDDLEDOT",
                ea = "SEMI",
                es = "SLASH",
                eu = "TILDE",
                ec = "UNDERSCORE",
                ed = "EMOJI";
            var ef = Object.freeze({
                __proto__: null,
                ALPHANUMERICAL: E,
                AMPERSAND: W,
                APOSTROPHE: z,
                ASCIINUMERICAL: w,
                ASTERISK: K,
                AT: "AT",
                BACKSLASH: U,
                BACKTICK: V,
                CARET: Y,
                CLOSEANGLEBRACKET: _,
                CLOSEBRACE: T,
                CLOSEBRACKET: L,
                CLOSEPAREN: I,
                COLON: X,
                COMMA: Z,
                DOLLAR: q,
                DOT: "DOT",
                EMOJI: ed,
                EQUALS: G,
                EXCLAMATION: Q,
                FULLWIDTHGREATERTHAN: $,
                FULLWIDTHLEFTPAREN: P,
                FULLWIDTHLESSTHAN: B,
                FULLWIDTHMIDDLEDOT: el,
                FULLWIDTHRIGHTPAREN: D,
                HYPHEN: J,
                LEFTCORNERBRACKET: H,
                LEFTWHITECORNERBRACKET: F,
                LOCALHOST: k,
                NL: "NL",
                NUM: "NUM",
                OPENANGLEBRACKET: O,
                OPENBRACE: A,
                OPENBRACKET: R,
                OPENPAREN: x,
                PERCENT: ee,
                PIPE: et,
                PLUS: en,
                POUND: er,
                QUERY: eo,
                QUOTE: ei,
                RIGHTCORNERBRACKET: N,
                RIGHTWHITECORNERBRACKET: j,
                SCHEME: M,
                SEMI: ea,
                SLASH: es,
                SLASH_SCHEME: S,
                SYM: "SYM",
                TILDE: eu,
                TLD: "TLD",
                UNDERSCORE: ec,
                UTLD: C,
                UWORD: y,
                WORD: v,
                WS: "WS"
            });
            let eh = /[a-z]/,
                ep = /\p{L}/u,
                em = /\p{Emoji}/u,
                eg = /\d/,
                eb = /\s/,
                ev = null,
                ey = null;

            function ew(e, t) {
                let n = function(e) {
                        let t = [],
                            n = e.length,
                            r = 0;
                        for (; r < n;) {
                            let o, i = e.charCodeAt(r),
                                l = i < 55296 || i > 56319 || r + 1 === n || (o = e.charCodeAt(r + 1)) < 56320 || o > 57343 ? e[r] : e.slice(r, r + 2);
                            t.push(l), r += l.length
                        }
                        return t
                    }(t.replace(/[A-Z]/g, e => e.toLowerCase())),
                    r = n.length,
                    o = [],
                    i = 0,
                    l = 0;
                for (; l < r;) {
                    let a = e,
                        s = null,
                        u = 0,
                        c = null,
                        d = -1,
                        f = -1;
                    for (; l < r && (s = a.go(n[l]));)(a = s).accepts() ? (d = 0, f = 0, c = a) : d >= 0 && (d += n[l].length, f++), u += n[l].length, i += n[l].length, l++;
                    i -= d, l -= f, u -= d, o.push({
                        t: c.t,
                        v: t.slice(i - u, i),
                        s: i - u,
                        e: i
                    })
                }
                return o
            }

            function eE(e, t, n, r, o) {
                let i;
                let l = t.length;
                for (let n = 0; n < l - 1; n++) {
                    let l = t[n];
                    e.j[l] ? i = e.j[l] : ((i = new h(r)).jr = o.slice(), e.j[l] = i), e = i
                }
                return (i = new h(n)).jr = o.slice(), e.j[t[l - 1]] = i, i
            }

            function ek(e) {
                let t = [],
                    n = [],
                    r = 0;
                for (; r < e.length;) {
                    let o = 0;
                    for (;
                        "0123456789".indexOf(e[r + o]) >= 0;) o++;
                    if (o > 0) {
                        t.push(n.join(""));
                        for (let t = parseInt(e.substring(r, r + o), 10); t > 0; t--) n.pop();
                        r += o
                    } else n.push(e[r]), r++
                }
                return t
            }
            let eC = {
                defaultProtocol: "http",
                events: null,
                format: eS,
                formatHref: eS,
                nl2br: !1,
                tagName: "a",
                target: null,
                rel: null,
                validate: !0,
                truncate: 1 / 0,
                className: null,
                attributes: null,
                ignoreTags: [],
                render: null
            };

            function eM(e, t = null) {
                let n = Object.assign({}, eC);
                e && (n = Object.assign(n, e instanceof eM ? e.o : e));
                let r = n.ignoreTags,
                    o = [];
                for (let e = 0; e < r.length; e++) o.push(r[e].toUpperCase());
                this.o = n, t && (this.defaultRender = t), this.ignoreTags = o
            }

            function eS(e) {
                return e
            }

            function eA(e, t) {
                this.t = "token", this.v = e, this.tk = t
            }

            function eT(e, t) {
                class n extends eA {
                    constructor(t, n) {
                        super(t, n), this.t = e
                    }
                }
                for (let e in t) n.prototype[e] = t[e];
                return n.t = e, n
            }
            eM.prototype = {
                o: eC,
                ignoreTags: [],
                defaultRender: e => e,
                check(e) {
                    return this.get("validate", e.toString(), e)
                },
                get(e, t, n) {
                    let r = null != t,
                        o = this.o[e];
                    return o && ("object" == typeof o ? "function" == typeof(o = n.t in o ? o[n.t] : eC[e]) && r && (o = o(t, n)) : "function" == typeof o && r && (o = o(t, n.t, n))), o
                },
                getObj(e, t, n) {
                    let r = this.o[e];
                    return "function" == typeof r && null != t && (r = r(t, n.t, n)), r
                },
                render(e) {
                    let t = e.render(this);
                    return (this.get("render", null, e) || this.defaultRender)(t, e.t, e)
                }
            }, eA.prototype = {
                isLink: !1,
                toString() {
                    return this.v
                },
                toHref(e) {
                    return this.toString()
                },
                toFormattedString(e) {
                    let t = this.toString(),
                        n = e.get("truncate", t, this),
                        r = e.get("format", t, this);
                    return n && r.length > n ? r.substring(0, n) + "…" : r
                },
                toFormattedHref(e) {
                    return e.get("formatHref", this.toHref(e.get("defaultProtocol")), this)
                },
                startIndex() {
                    return this.tk[0].s
                },
                endIndex() {
                    return this.tk[this.tk.length - 1].e
                },
                toObject(e = eC.defaultProtocol) {
                    return {
                        type: this.t,
                        value: this.toString(),
                        isLink: this.isLink,
                        href: this.toHref(e),
                        start: this.startIndex(),
                        end: this.endIndex()
                    }
                },
                toFormattedObject(e) {
                    return {
                        type: this.t,
                        value: this.toFormattedString(e),
                        isLink: this.isLink,
                        href: this.toFormattedHref(e),
                        start: this.startIndex(),
                        end: this.endIndex()
                    }
                },
                validate(e) {
                    return e.get("validate", this.toString(), this)
                },
                render(e) {
                    let t = this.toHref(e.get("defaultProtocol")),
                        n = e.get("formatHref", t, this),
                        r = e.get("tagName", t, this),
                        o = this.toFormattedString(e),
                        i = {},
                        l = e.get("className", t, this),
                        a = e.get("target", t, this),
                        s = e.get("rel", t, this),
                        u = e.getObj("attributes", t, this),
                        c = e.getObj("events", t, this);
                    return i.href = n, l && (i.class = l), a && (i.target = a), s && (i.rel = s), u && Object.assign(i, u), {
                        tagName: r,
                        attributes: i,
                        content: o,
                        eventListeners: c
                    }
                }
            };
            let eR = eT("email", {
                    isLink: !0,
                    toHref() {
                        return "mailto:" + this.toString()
                    }
                }),
                eL = eT("text"),
                ex = eT("nl"),
                eI = eT("url", {
                    isLink: !0,
                    toHref(e = eC.defaultProtocol) {
                        return this.hasProtocol() ? this.v : `${e}://${this.v}`
                    },
                    hasProtocol() {
                        let e = this.tk;
                        return e.length >= 2 && e[0].t !== k && e[1].t === X
                    }
                }),
                eO = e => new h(e);

            function e_(e, t, n) {
                let r = n[0].s,
                    o = n[n.length - 1].e;
                return new e(t.slice(r, o), n)
            }
            let eP = "undefined" != typeof console && console && console.warn || (() => {}),
                eD = {
                    scanner: null,
                    parser: null,
                    tokenQueue: [],
                    pluginQueue: [],
                    customSchemes: [],
                    initialized: !1
                };

            function eH(e, t = !1) {
                if (eD.initialized && eP(`linkifyjs: already initialized - will not register custom scheme "${e}" until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(e)) throw Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
                eD.customSchemes.push([e, t])
            }

            function eN(e) {
                return eD.initialized || function() {
                        eD.scanner = function(e = []) {
                            let t = {};
                            h.groups = t;
                            let n = new h;
                            null == ev && (ev = ek("aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5m\xf6gensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2")), null == ey && (ey = ek("ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2")), b(n, "'", z), b(n, "{", A), b(n, "}", T), b(n, "[", R), b(n, "]", L), b(n, "(", x), b(n, ")", I), b(n, "<", O), b(n, ">", _), b(n, "（", P), b(n, "）", D), b(n, "「", H), b(n, "」", N), b(n, "『", F), b(n, "』", j), b(n, "＜", B), b(n, "＞", $), b(n, "&", W), b(n, "*", K), b(n, "@", "AT"), b(n, "`", V), b(n, "^", Y), b(n, ":", X), b(n, ",", Z), b(n, "$", q), b(n, ".", "DOT"), b(n, "=", G), b(n, "!", Q), b(n, "-", J), b(n, "%", ee), b(n, "|", et), b(n, "+", en), b(n, "#", er), b(n, "?", eo), b(n, '"', ei), b(n, "/", es), b(n, ";", ea), b(n, "~", eu), b(n, "_", ec), b(n, "\\", U), b(n, "・", el);
                            let r = m(n, eg, "NUM", {
                                [o]: !0
                            });
                            m(r, eg, r);
                            let p = m(r, eh, w, {
                                    [a]: !0
                                }),
                                ew = m(r, ep, E, {
                                    [s]: !0
                                }),
                                eC = m(n, eh, v, {
                                    [i]: !0
                                });
                            m(eC, eg, p), m(eC, eh, eC), m(p, eg, p), m(p, eh, p);
                            let eM = m(n, ep, y, {
                                [l]: !0
                            });
                            m(eM, eh), m(eM, eg, ew), m(eM, ep, eM), m(ew, eg, ew), m(ew, eh), m(ew, ep, ew);
                            let eS = b(n, "\n", "NL", {
                                    [d]: !0
                                }),
                                eA = b(n, "\r", "WS", {
                                    [d]: !0
                                }),
                                eT = m(n, eb, "WS", {
                                    [d]: !0
                                });
                            b(n, "￼", eT), b(eA, "\n", eS), b(eA, "￼", eT), m(eA, eb, eT), b(eT, "\r"), b(eT, "\n"), m(eT, eb, eT), b(eT, "￼", eT);
                            let eR = m(n, em, ed, {
                                [c]: !0
                            });
                            b(eR, "#"), m(eR, em, eR), b(eR, "️", eR);
                            let eL = b(eR, "‍");
                            b(eL, "#"), m(eL, em, eR);
                            let ex = [
                                    [eh, eC],
                                    [eg, p]
                                ],
                                eI = [
                                    [eh, null],
                                    [ep, eM],
                                    [eg, ew]
                                ];
                            for (let e = 0; e < ev.length; e++) eE(n, ev[e], "TLD", v, ex);
                            for (let e = 0; e < ey.length; e++) eE(n, ey[e], C, y, eI);
                            f("TLD", {
                                tld: !0,
                                ascii: !0
                            }, t), f(C, {
                                utld: !0,
                                alpha: !0
                            }, t), eE(n, "file", M, v, ex), eE(n, "mailto", M, v, ex), eE(n, "http", S, v, ex), eE(n, "https", S, v, ex), eE(n, "ftp", S, v, ex), eE(n, "ftps", S, v, ex), f(M, {
                                scheme: !0,
                                ascii: !0
                            }, t), f(S, {
                                slashscheme: !0,
                                ascii: !0
                            }, t), e = e.sort((e, t) => e[0] > t[0] ? 1 : -1);
                            for (let t = 0; t < e.length; t++) {
                                let r = e[t][0],
                                    l = e[t][1] ? {
                                        scheme: !0
                                    } : {
                                        slashscheme: !0
                                    };
                                r.indexOf("-") >= 0 ? l[u] = !0 : eh.test(r) ? eg.test(r) ? l[a] = !0 : l[i] = !0 : l[o] = !0, g(n, r, r, l)
                            }
                            return g(n, "localhost", k, {
                                ascii: !0
                            }), n.jd = new h("SYM"), {
                                start: n,
                                tokens: Object.assign({
                                    groups: t
                                }, ef)
                            }
                        }(eD.customSchemes);
                        for (let e = 0; e < eD.tokenQueue.length; e++) eD.tokenQueue[e][1]({
                            scanner: eD.scanner
                        });
                        eD.parser = function({
                            groups: e
                        }) {
                            let t = e.domain.concat([W, K, "AT", U, V, Y, q, G, J, "NUM", ee, et, en, er, es, "SYM", eu, ec]),
                                n = [z, X, Z, "DOT", Q, ee, eo, ei, ea, O, _, A, T, L, R, x, I, P, D, H, N, F, j, B, $],
                                r = [W, z, K, U, V, Y, q, G, J, A, T, ee, et, en, er, eo, es, "SYM", eu, ec],
                                o = eO(),
                                i = b(o, eu);
                            p(i, r, i), p(i, e.domain, i);
                            let l = eO(),
                                a = eO(),
                                s = eO();
                            p(o, e.domain, l), p(o, e.scheme, a), p(o, e.slashscheme, s), p(l, r, i), p(l, e.domain, l);
                            let u = b(l, "AT");
                            b(i, "AT", u), b(a, "AT", u), b(s, "AT", u);
                            let c = b(i, "DOT");
                            p(c, r, i), p(c, e.domain, i);
                            let d = eO();
                            p(u, e.domain, d), p(d, e.domain, d);
                            let f = b(d, "DOT");
                            p(f, e.domain, d);
                            let h = eO(eR);
                            p(f, e.tld, h), p(f, e.utld, h), b(u, k, h);
                            let m = b(d, J);
                            b(m, J, m), p(m, e.domain, d), p(h, e.domain, d), b(h, "DOT", f), b(h, J, m), p(b(h, X), e.numeric, eR);
                            let g = b(l, J),
                                v = b(l, "DOT");
                            b(g, J, g), p(g, e.domain, l), p(v, r, i), p(v, e.domain, l);
                            let y = eO(eI);
                            p(v, e.tld, y), p(v, e.utld, y), p(y, e.domain, l), p(y, r, i), b(y, "DOT", v), b(y, J, g), b(y, "AT", u);
                            let w = b(y, X),
                                E = eO(eI);
                            p(w, e.numeric, E);
                            let C = eO(eI),
                                M = eO();
                            p(C, t, C), p(C, n, M), p(M, t, C), p(M, n, M), b(y, es, C), b(E, es, C);
                            let S = b(a, X),
                                el = b(s, X),
                                ed = b(el, es),
                                eh = b(ed, es);
                            p(a, e.domain, l), b(a, "DOT", v), b(a, J, g), p(s, e.domain, l), b(s, "DOT", v), b(s, J, g), p(S, e.domain, C), b(S, es, C), b(S, eo, C), p(eh, e.domain, C), p(eh, t, C), b(eh, es, C);
                            let ep = [
                                [A, T],
                                [R, L],
                                [x, I],
                                [O, _],
                                [P, D],
                                [H, N],
                                [F, j],
                                [B, $]
                            ];
                            for (let e = 0; e < ep.length; e++) {
                                let [r, o] = ep[e], i = b(C, r);
                                b(M, r, i), b(i, o, C);
                                let l = eO(eI);
                                p(i, t, l);
                                let a = eO();
                                p(i, n), p(l, t, l), p(l, n, a), p(a, t, l), p(a, n, a), b(l, o, C), b(a, o, C)
                            }
                            return b(o, k, y), b(o, "NL", ex), {
                                start: o,
                                tokens: ef
                            }
                        }(eD.scanner.tokens);
                        for (let e = 0; e < eD.pluginQueue.length; e++) eD.pluginQueue[e][1]({
                            scanner: eD.scanner,
                            parser: eD.parser
                        });
                        eD.initialized = !0
                    }(),
                    function(e, t, n) {
                        let r = n.length,
                            o = 0,
                            i = [],
                            l = [];
                        for (; o < r;) {
                            let a = e,
                                s = null,
                                u = null,
                                c = 0,
                                d = null,
                                f = -1;
                            for (; o < r && !(s = a.go(n[o].t));) l.push(n[o++]);
                            for (; o < r && (u = s || a.go(n[o].t));) s = null, (a = u).accepts() ? (f = 0, d = a) : f >= 0 && f++, o++, c++;
                            if (f < 0)(o -= c) < r && (l.push(n[o]), o++);
                            else {
                                l.length > 0 && (i.push(e_(eL, t, l)), l = []), o -= f, c -= f;
                                let e = d.t,
                                    r = n.slice(o - c, o);
                                i.push(e_(e, t, r))
                            }
                        }
                        return l.length > 0 && i.push(e_(eL, t, l)), i
                    }(eD.parser.start, e, ew(eD.scanner.start, e))
            }

            function eF(e, t = null, n = null) {
                if (t && "object" == typeof t) {
                    if (n) throw Error(`linkifyjs: Invalid link type ${t}; must be a string`);
                    n = t, t = null
                }
                let r = new eM(n),
                    o = eN(e),
                    i = [];
                for (let e = 0; e < o.length; e++) {
                    let n = o[e];
                    n.isLink && (!t || n.t === t) && r.check(n) && i.push(n.toFormattedObject(r))
                }
                return i
            }
            eN.scan = ew;
            var ej = n(27191),
                eB = "[\0- \xa0 ᠎ -\u2029 　]",
                e$ = new RegExp(eB),
                eW = RegExp(`${eB}$`),
                ez = RegExp(eB, "g");

            function eK(e, t) {
                let n = ["http", "https", "ftp", "ftps", "mailto", "tel", "callto", "sms", "cid", "xmpp"];
                return t && t.forEach(e => {
                    let t = "string" == typeof e ? e : e.scheme;
                    t && n.push(t)
                }), !e || e.replace(ez, "").match(RegExp(`^(?:(?:${n.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`, "i"))
            }
            var eU = r.vc.create({
                name: "link",
                priority: 1e3,
                keepOnSplit: !1,
                exitable: !0,
                onCreate() {
                    this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach(e => {
                        if ("string" == typeof e) {
                            eH(e);
                            return
                        }
                        eH(e.scheme, e.optionalSlashes)
                    })
                },
                onDestroy() {
                    h.groups = {}, eD.scanner = null, eD.parser = null, eD.tokenQueue = [], eD.pluginQueue = [], eD.customSchemes = [], eD.initialized = !1
                },
                inclusive() {
                    return this.options.autolink
                },
                addOptions: () => ({
                    openOnClick: !0,
                    enableClickSelection: !1,
                    linkOnPaste: !0,
                    autolink: !0,
                    protocols: [],
                    defaultProtocol: "http",
                    HTMLAttributes: {
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class: null
                    },
                    isAllowedUri: (e, t) => !!eK(e, t.protocols),
                    validate: e => !!e,
                    shouldAutoLink: e => !!e
                }),
                addAttributes() {
                    return {
                        href: {
                            default: null,
                            parseHTML: e => e.getAttribute("href")
                        },
                        target: {
                            default: this.options.HTMLAttributes.target
                        },
                        rel: {
                            default: this.options.HTMLAttributes.rel
                        },
                        class: {
                            default: this.options.HTMLAttributes.class
                        }
                    }
                },
                parseHTML() {
                    return [{
                        tag: "a[href]",
                        getAttrs: e => {
                            let t = e.getAttribute("href");
                            return !!(t && this.options.isAllowedUri(t, {
                                defaultValidate: e => !!eK(e, this.options.protocols),
                                protocols: this.options.protocols,
                                defaultProtocol: this.options.defaultProtocol
                            })) && null
                        }
                    }]
                },
                renderHTML({
                    HTMLAttributes: e
                }) {
                    return this.options.isAllowedUri(e.href, {
                        defaultValidate: e => !!eK(e, this.options.protocols),
                        protocols: this.options.protocols,
                        defaultProtocol: this.options.defaultProtocol
                    }) ? ["a", (0, r.P1)(this.options.HTMLAttributes, e), 0] : ["a", (0, r.P1)(this.options.HTMLAttributes, { ...e,
                        href: ""
                    }), 0]
                },
                addCommands() {
                    return {
                        setLink: e => ({
                            chain: t
                        }) => {
                            let {
                                href: n
                            } = e;
                            return !!this.options.isAllowedUri(n, {
                                defaultValidate: e => !!eK(e, this.options.protocols),
                                protocols: this.options.protocols,
                                defaultProtocol: this.options.defaultProtocol
                            }) && t().setMark(this.name, e).setMeta("preventAutolink", !0).run()
                        },
                        toggleLink: e => ({
                            chain: t
                        }) => {
                            let {
                                href: n
                            } = e || {};
                            return (!n || !!this.options.isAllowedUri(n, {
                                defaultValidate: e => !!eK(e, this.options.protocols),
                                protocols: this.options.protocols,
                                defaultProtocol: this.options.defaultProtocol
                            })) && t().toggleMark(this.name, e, {
                                extendEmptyMarkRange: !0
                            }).setMeta("preventAutolink", !0).run()
                        },
                        unsetLink: () => ({
                            chain: e
                        }) => e().unsetMark(this.name, {
                            extendEmptyMarkRange: !0
                        }).setMeta("preventAutolink", !0).run()
                    }
                },
                addPasteRules() {
                    return [(0, r.K9)({
                        find: e => {
                            let t = [];
                            if (e) {
                                let {
                                    protocols: n,
                                    defaultProtocol: r
                                } = this.options, o = eF(e).filter(e => e.isLink && this.options.isAllowedUri(e.value, {
                                    defaultValidate: e => !!eK(e, n),
                                    protocols: n,
                                    defaultProtocol: r
                                }));
                                o.length && o.forEach(e => t.push({
                                    text: e.value,
                                    data: {
                                        href: e.href
                                    },
                                    index: e.start
                                }))
                            }
                            return t
                        },
                        type: this.type,
                        getAttributes: e => {
                            var t;
                            return {
                                href: null == (t = e.data) ? void 0 : t.href
                            }
                        }
                    })]
                },
                addProseMirrorPlugins() {
                    var e, t, n;
                    let o = [],
                        {
                            protocols: i,
                            defaultProtocol: l
                        } = this.options;
                    return this.options.autolink && o.push((e = {
                        type: this.type,
                        defaultProtocol: this.options.defaultProtocol,
                        validate: e => this.options.isAllowedUri(e, {
                            defaultValidate: e => !!eK(e, i),
                            protocols: i,
                            defaultProtocol: l
                        }),
                        shouldAutoLink: this.options.shouldAutoLink
                    }, new ej.Sy({
                        key: new ej.H$("autolink"),
                        appendTransaction: (t, n, o) => {
                            let i = t.some(e => e.docChanged) && !n.doc.eq(o.doc),
                                l = t.some(e => e.getMeta("preventAutolink"));
                            if (!i || l) return;
                            let {
                                tr: a
                            } = o, s = (0, r.XP)(n.doc, [...t]);
                            if ((0, r.QC)(s).forEach(({
                                    newRange: t
                                }) => {
                                    let n, i;
                                    let l = (0, r.b5)(o.doc, t, e => e.isTextblock);
                                    if (l.length > 1) n = l[0], i = o.doc.textBetween(n.pos, n.pos + n.node.nodeSize, void 0, " ");
                                    else if (l.length) {
                                        let e = o.doc.textBetween(t.from, t.to, " ", " ");
                                        if (!eW.test(e)) return;
                                        n = l[0], i = o.doc.textBetween(n.pos, t.to, void 0, " ")
                                    }
                                    if (n && i) {
                                        let t = i.split(e$).filter(Boolean);
                                        if (t.length <= 0) return !1;
                                        let l = t[t.length - 1],
                                            s = n.pos + i.lastIndexOf(l);
                                        if (!l) return !1;
                                        let u = eN(l).map(t => t.toObject(e.defaultProtocol));
                                        if (!(1 === u.length ? u[0].isLink : 3 === u.length && !!u[1].isLink && ["()", "[]"].includes(u[0].value + u[2].value))) return !1;
                                        u.filter(e => e.isLink).map(e => ({ ...e,
                                            from: s + e.start + 1,
                                            to: s + e.end + 1
                                        })).filter(e => !o.schema.marks.code || !o.doc.rangeHasMark(e.from, e.to, o.schema.marks.code)).filter(t => e.validate(t.value)).filter(t => e.shouldAutoLink(t.value)).forEach(t => {
                                            (0, r.tI)(t.from, t.to, o.doc).some(t => t.mark.type === e.type) || a.addMark(t.from, t.to, e.type.create({
                                                href: t.href
                                            }))
                                        })
                                    }
                                }), a.steps.length) return a
                        }
                    }))), !0 === this.options.openOnClick && o.push((t = {
                        type: this.type,
                        editor: this.editor,
                        enableClickSelection: this.options.enableClickSelection
                    }, new ej.Sy({
                        key: new ej.H$("handleClickLink"),
                        props: {
                            handleClick: (e, n, o) => {
                                var i, l;
                                if (0 !== o.button || !e.editable) return !1;
                                let a = null;
                                if (o.target instanceof HTMLAnchorElement) a = o.target;
                                else {
                                    let e = o.target,
                                        t = [];
                                    for (;
                                        "DIV" !== e.nodeName;) t.push(e), e = e.parentNode;
                                    a = t.find(e => "A" === e.nodeName)
                                }
                                if (!a) return !1;
                                let s = (0, r.u9)(e.state, t.type.name),
                                    u = null != (i = null == a ? void 0 : a.href) ? i : s.href,
                                    c = null != (l = null == a ? void 0 : a.target) ? l : s.target;
                                return t.enableClickSelection && t.editor.commands.extendMarkRange(t.type.name), !!a && !!u && (window.open(u, c), !0)
                            }
                        }
                    }))), this.options.linkOnPaste && o.push((n = {
                        editor: this.editor,
                        defaultProtocol: this.options.defaultProtocol,
                        type: this.type
                    }, new ej.Sy({
                        key: new ej.H$("handlePasteLink"),
                        props: {
                            handlePaste: (e, t, r) => {
                                let {
                                    state: o
                                } = e, {
                                    selection: i
                                } = o, {
                                    empty: l
                                } = i;
                                if (l) return !1;
                                let a = "";
                                r.content.forEach(e => {
                                    a += e.textContent
                                });
                                let s = eF(a, {
                                    defaultProtocol: n.defaultProtocol
                                }).find(e => e.isLink && e.value === a);
                                return !!a && !!s && n.editor.commands.setMark(n.type, {
                                    href: s.href
                                })
                            }
                        }
                    }))), o
                }
            })
        },
        34565: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var r = n(37271).HC
        },
        37271: function(e, t, n) {
            "use strict";
            n.d(t, {
                DY: function() {
                    return a
                },
                GS: function() {
                    return k
                },
                HC: function() {
                    return s
                }
            });
            var r = n(5865),
                o = Object.defineProperty,
                i = "textStyle",
                l = /^\s*([-+*])\s$/,
                a = r.NB.create({
                    name: "bulletList",
                    addOptions: () => ({
                        itemTypeName: "listItem",
                        HTMLAttributes: {},
                        keepMarks: !1,
                        keepAttributes: !1
                    }),
                    group: "block list",
                    content() {
                        return `${this.options.itemTypeName}+`
                    },
                    parseHTML: () => [{
                        tag: "ul"
                    }],
                    renderHTML({
                        HTMLAttributes: e
                    }) {
                        return ["ul", (0, r.P1)(this.options.HTMLAttributes, e), 0]
                    },
                    addCommands() {
                        return {
                            toggleBulletList: () => ({
                                commands: e,
                                chain: t
                            }) => this.options.keepAttributes ? t().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes("listItem", this.editor.getAttributes(i)).run() : e.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
                        }
                    },
                    addKeyboardShortcuts() {
                        return {
                            "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
                        }
                    },
                    addInputRules() {
                        let e = (0, r.S0)({
                            find: l,
                            type: this.type
                        });
                        return (this.options.keepMarks || this.options.keepAttributes) && (e = (0, r.S0)({
                            find: l,
                            type: this.type,
                            keepMarks: this.options.keepMarks,
                            keepAttributes: this.options.keepAttributes,
                            getAttributes: () => this.editor.getAttributes(i),
                            editor: this.editor
                        })), [e]
                    }
                }),
                s = r.NB.create({
                    name: "listItem",
                    addOptions: () => ({
                        HTMLAttributes: {},
                        bulletListTypeName: "bulletList",
                        orderedListTypeName: "orderedList"
                    }),
                    content: "paragraph block*",
                    defining: !0,
                    parseHTML: () => [{
                        tag: "li"
                    }],
                    renderHTML({
                        HTMLAttributes: e
                    }) {
                        return ["li", (0, r.P1)(this.options.HTMLAttributes, e), 0]
                    },
                    addKeyboardShortcuts() {
                        return {
                            Enter: () => this.editor.commands.splitListItem(this.name),
                            Tab: () => this.editor.commands.sinkListItem(this.name),
                            "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
                        }
                    }
                });
            ((e, t) => {
                for (var n in t) o(e, n, {
                    get: t[n],
                    enumerable: !0
                })
            })({}, {
                findListItemPos: () => u,
                getNextListDepth: () => c,
                handleBackspace: () => p,
                handleDelete: () => b,
                hasListBefore: () => d,
                hasListItemAfter: () => v,
                hasListItemBefore: () => f,
                listItemHasSubList: () => h,
                nextListIsDeeper: () => m,
                nextListIsHigher: () => g
            });
            var u = (e, t) => {
                    let {
                        $from: n
                    } = t.selection, o = (0, r.jo)(e, t.schema), i = n.depth, l = n.pos, a = null;
                    for (; i > 0 && null === a;) n.node(i).type === o ? a = i : (i -= 1, l -= 1);
                    return null === a ? null : {
                        $pos: t.doc.resolve(l),
                        depth: a
                    }
                },
                c = (e, t) => {
                    let n = u(e, t);
                    if (!n) return !1;
                    let [, o] = (0, r.NY)(t, e, n.$pos.pos + 4);
                    return o
                },
                d = (e, t, n) => {
                    let {
                        $anchor: r
                    } = e.selection, o = Math.max(0, r.pos - 2), i = e.doc.resolve(o).node();
                    return !!(i && n.includes(i.type.name))
                },
                f = (e, t) => {
                    var n;
                    let {
                        $anchor: r
                    } = t.selection, o = t.doc.resolve(r.pos - 2);
                    return 0 !== o.index() && (null == (n = o.nodeBefore) ? void 0 : n.type.name) === e
                },
                h = (e, t, n) => {
                    if (!n) return !1;
                    let o = (0, r.jo)(e, t.schema),
                        i = !1;
                    return n.descendants(e => {
                        e.type === o && (i = !0)
                    }), i
                },
                p = (e, t, n) => {
                    if (e.commands.undoInputRule()) return !0;
                    if (e.state.selection.from !== e.state.selection.to) return !1;
                    if (!(0, r.Ig)(e.state, t) && d(e.state, t, n)) {
                        let {
                            $anchor: n
                        } = e.state.selection, r = e.state.doc.resolve(n.before() - 1), o = [];
                        r.node().descendants((e, n) => {
                            e.type.name === t && o.push({
                                node: e,
                                pos: n
                            })
                        });
                        let i = o.at(-1);
                        if (!i) return !1;
                        let l = e.state.doc.resolve(r.start() + i.pos + 1);
                        return e.chain().cut({
                            from: n.start() - 1,
                            to: n.end() + 1
                        }, l.end()).joinForward().run()
                    }
                    if (!(0, r.Ig)(e.state, t) || !(0, r.Sz)(e.state)) return !1;
                    let o = u(t, e.state);
                    if (!o) return !1;
                    let i = e.state.doc.resolve(o.$pos.pos - 2).node(o.depth),
                        l = h(t, e.state, i);
                    return f(t, e.state) && !l ? e.commands.joinItemBackward() : e.chain().liftListItem(t).run()
                },
                m = (e, t) => {
                    let n = c(e, t),
                        r = u(e, t);
                    return !!r && !!n && n > r.depth
                },
                g = (e, t) => {
                    let n = c(e, t),
                        r = u(e, t);
                    return !!r && !!n && n < r.depth
                },
                b = (e, t) => {
                    if (!(0, r.Ig)(e.state, t) || !(0, r.rI)(e.state, t)) return !1;
                    let {
                        selection: n
                    } = e.state, {
                        $from: o,
                        $to: i
                    } = n;
                    return !(!n.empty && o.sameParent(i)) && (m(t, e.state) ? e.chain().focus(e.state.selection.from + 4).lift(t).joinBackward().run() : g(t, e.state) ? e.chain().joinForward().joinBackward().run() : e.commands.joinItemForward())
                },
                v = (e, t) => {
                    var n;
                    let {
                        $anchor: r
                    } = t.selection, o = t.doc.resolve(r.pos - r.parentOffset - 2);
                    return o.index() !== o.parent.childCount - 1 && (null == (n = o.nodeAfter) ? void 0 : n.type.name) === e
                },
                y = r.hj.create({
                    name: "listKeymap",
                    addOptions: () => ({
                        listTypes: [{
                            itemName: "listItem",
                            wrapperNames: ["bulletList", "orderedList"]
                        }, {
                            itemName: "taskItem",
                            wrapperNames: ["taskList"]
                        }]
                    }),
                    addKeyboardShortcuts() {
                        return {
                            Delete: ({
                                editor: e
                            }) => {
                                let t = !1;
                                return this.options.listTypes.forEach(({
                                    itemName: n
                                }) => {
                                    void 0 !== e.state.schema.nodes[n] && b(e, n) && (t = !0)
                                }), t
                            },
                            "Mod-Delete": ({
                                editor: e
                            }) => {
                                let t = !1;
                                return this.options.listTypes.forEach(({
                                    itemName: n
                                }) => {
                                    void 0 !== e.state.schema.nodes[n] && b(e, n) && (t = !0)
                                }), t
                            },
                            Backspace: ({
                                editor: e
                            }) => {
                                let t = !1;
                                return this.options.listTypes.forEach(({
                                    itemName: n,
                                    wrapperNames: r
                                }) => {
                                    void 0 !== e.state.schema.nodes[n] && p(e, n, r) && (t = !0)
                                }), t
                            },
                            "Mod-Backspace": ({
                                editor: e
                            }) => {
                                let t = !1;
                                return this.options.listTypes.forEach(({
                                    itemName: n,
                                    wrapperNames: r
                                }) => {
                                    void 0 !== e.state.schema.nodes[n] && p(e, n, r) && (t = !0)
                                }), t
                            }
                        }
                    }
                }),
                w = "textStyle",
                E = /^(\d+)\.\s$/,
                k = r.NB.create({
                    name: "orderedList",
                    addOptions: () => ({
                        itemTypeName: "listItem",
                        HTMLAttributes: {},
                        keepMarks: !1,
                        keepAttributes: !1
                    }),
                    group: "block list",
                    content() {
                        return `${this.options.itemTypeName}+`
                    },
                    addAttributes: () => ({
                        start: {
                            default: 1,
                            parseHTML: e => e.hasAttribute("start") ? parseInt(e.getAttribute("start") || "", 10) : 1
                        },
                        type: {
                            default: null,
                            parseHTML: e => e.getAttribute("type")
                        }
                    }),
                    parseHTML: () => [{
                        tag: "ol"
                    }],
                    renderHTML({
                        HTMLAttributes: e
                    }) {
                        let {
                            start: t,
                            ...n
                        } = e;
                        return 1 === t ? ["ol", (0, r.P1)(this.options.HTMLAttributes, n), 0] : ["ol", (0, r.P1)(this.options.HTMLAttributes, e), 0]
                    },
                    addCommands() {
                        return {
                            toggleOrderedList: () => ({
                                commands: e,
                                chain: t
                            }) => this.options.keepAttributes ? t().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes("listItem", this.editor.getAttributes(w)).run() : e.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
                        }
                    },
                    addKeyboardShortcuts() {
                        return {
                            "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
                        }
                    },
                    addInputRules() {
                        let e = (0, r.S0)({
                            find: E,
                            type: this.type,
                            getAttributes: e => ({
                                start: +e[1]
                            }),
                            joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1]
                        });
                        return (this.options.keepMarks || this.options.keepAttributes) && (e = (0, r.S0)({
                            find: E,
                            type: this.type,
                            keepMarks: this.options.keepMarks,
                            keepAttributes: this.options.keepAttributes,
                            getAttributes: e => ({
                                start: +e[1],
                                ...this.editor.getAttributes(w)
                            }),
                            joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1],
                            editor: this.editor
                        })), [e]
                    }
                }),
                C = /^\s*(\[([( |x])?\])\s$/,
                M = r.NB.create({
                    name: "taskItem",
                    addOptions: () => ({
                        nested: !1,
                        HTMLAttributes: {},
                        taskListTypeName: "taskList",
                        a11y: void 0
                    }),
                    content() {
                        return this.options.nested ? "paragraph block*" : "paragraph+"
                    },
                    defining: !0,
                    addAttributes: () => ({
                        checked: {
                            default: !1,
                            keepOnSplit: !1,
                            parseHTML: e => {
                                let t = e.getAttribute("data-checked");
                                return "" === t || "true" === t
                            },
                            renderHTML: e => ({
                                "data-checked": e.checked
                            })
                        }
                    }),
                    parseHTML() {
                        return [{
                            tag: `li[data-type="${this.name}"]`,
                            priority: 51
                        }]
                    },
                    renderHTML({
                        node: e,
                        HTMLAttributes: t
                    }) {
                        return ["li", (0, r.P1)(this.options.HTMLAttributes, t, {
                                "data-type": this.name
                            }), ["label", ["input", {
                                    type: "checkbox",
                                    checked: e.attrs.checked ? "checked" : null
                                }],
                                ["span"]
                            ],
                            ["div", 0]
                        ]
                    },
                    addKeyboardShortcuts() {
                        let e = {
                            Enter: () => this.editor.commands.splitListItem(this.name),
                            "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
                        };
                        return this.options.nested ? { ...e,
                            Tab: () => this.editor.commands.sinkListItem(this.name)
                        } : e
                    },
                    addNodeView() {
                        return ({
                            node: e,
                            HTMLAttributes: t,
                            getPos: n,
                            editor: r
                        }) => {
                            let o = document.createElement("li"),
                                i = document.createElement("label"),
                                l = document.createElement("span"),
                                a = document.createElement("input"),
                                s = document.createElement("div"),
                                u = e => {
                                    var t, n;
                                    a.ariaLabel = (null == (n = null == (t = this.options.a11y) ? void 0 : t.checkboxLabel) ? void 0 : n.call(t, e, a.checked)) || `Task item checkbox for ${e.textContent||"empty task item"}`
                                };
                            return u(e), i.contentEditable = "false", a.type = "checkbox", a.addEventListener("mousedown", e => e.preventDefault()), a.addEventListener("change", t => {
                                if (!r.isEditable && !this.options.onReadOnlyChecked) {
                                    a.checked = !a.checked;
                                    return
                                }
                                let {
                                    checked: o
                                } = t.target;
                                r.isEditable && "function" == typeof n && r.chain().focus(void 0, {
                                    scrollIntoView: !1
                                }).command(({
                                    tr: e
                                }) => {
                                    let t = n();
                                    if ("number" != typeof t) return !1;
                                    let r = e.doc.nodeAt(t);
                                    return e.setNodeMarkup(t, void 0, { ...null == r ? void 0 : r.attrs,
                                        checked: o
                                    }), !0
                                }).run(), r.isEditable || !this.options.onReadOnlyChecked || this.options.onReadOnlyChecked(e, o) || (a.checked = !a.checked)
                            }), Object.entries(this.options.HTMLAttributes).forEach(([e, t]) => {
                                o.setAttribute(e, t)
                            }), o.dataset.checked = e.attrs.checked, a.checked = e.attrs.checked, i.append(a, l), o.append(i, s), Object.entries(t).forEach(([e, t]) => {
                                o.setAttribute(e, t)
                            }), {
                                dom: o,
                                contentDOM: s,
                                update: e => e.type === this.type && (o.dataset.checked = e.attrs.checked, a.checked = e.attrs.checked, u(e), !0)
                            }
                        }
                    },
                    addInputRules() {
                        return [(0, r.S0)({
                            find: C,
                            type: this.type,
                            getAttributes: e => ({
                                checked: "x" === e[e.length - 1]
                            })
                        })]
                    }
                }),
                S = r.NB.create({
                    name: "taskList",
                    addOptions: () => ({
                        itemTypeName: "taskItem",
                        HTMLAttributes: {}
                    }),
                    group: "block list",
                    content() {
                        return `${this.options.itemTypeName}+`
                    },
                    parseHTML() {
                        return [{
                            tag: `ul[data-type="${this.name}"]`,
                            priority: 51
                        }]
                    },
                    renderHTML({
                        HTMLAttributes: e
                    }) {
                        return ["ul", (0, r.P1)(this.options.HTMLAttributes, e, {
                            "data-type": this.name
                        }), 0]
                    },
                    addCommands() {
                        return {
                            toggleTaskList: () => ({
                                commands: e
                            }) => e.toggleList(this.name, this.options.itemTypeName)
                        }
                    },
                    addKeyboardShortcuts() {
                        return {
                            "Mod-Shift-9": () => this.editor.commands.toggleTaskList()
                        }
                    }
                });
            r.hj.create({
                name: "listKit",
                addExtensions() {
                    let e = [];
                    return !1 !== this.options.bulletList && e.push(a.configure(this.options.bulletList)), !1 !== this.options.listItem && e.push(s.configure(this.options.listItem)), !1 !== this.options.listKeymap && e.push(y.configure(this.options.listKeymap)), !1 !== this.options.orderedList && e.push(k.configure(this.options.orderedList)), !1 !== this.options.taskItem && e.push(M.configure(this.options.taskItem)), !1 !== this.options.taskList && e.push(S.configure(this.options.taskList)), e
                }
            })
        },
        51575: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var r = n(37271).GS
        },
        41705: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(5865),
                o = r.vc.create({
                    name: "superscript",
                    addOptions: () => ({
                        HTMLAttributes: {}
                    }),
                    parseHTML: () => [{
                        tag: "sup"
                    }, {
                        style: "vertical-align",
                        getAttrs: e => "super" === e && null
                    }],
                    renderHTML({
                        HTMLAttributes: e
                    }) {
                        return ["sup", (0, r.P1)(this.options.HTMLAttributes, e), 0]
                    },
                    addCommands() {
                        return {
                            setSuperscript: () => ({
                                commands: e
                            }) => e.setMark(this.name),
                            toggleSuperscript: () => ({
                                commands: e
                            }) => e.toggleMark(this.name),
                            unsetSuperscript: () => ({
                                commands: e
                            }) => e.unsetMark(this.name)
                        }
                    },
                    addKeyboardShortcuts() {
                        return {
                            "Mod-.": () => this.editor.commands.toggleSuperscript()
                        }
                    }
                })
        },
        658: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var r = n(92721).pj
        },
        43626: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var r = n(92721).xD
        },
        33991: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var r = n(92721).SC
        },
        92721: function(e, t, n) {
            "use strict";
            n.d(t, {
                iA: function() {
                    return p
                },
                pj: function() {
                    return l
                },
                xD: function() {
                    return a
                },
                SC: function() {
                    return s
                }
            });
            var r = n(5865),
                o = n(27191),
                i = n(32357),
                l = r.NB.create({
                    name: "tableCell",
                    addOptions: () => ({
                        HTMLAttributes: {}
                    }),
                    content: "block+",
                    addAttributes: () => ({
                        colspan: {
                            default: 1
                        },
                        rowspan: {
                            default: 1
                        },
                        colwidth: {
                            default: null,
                            parseHTML: e => {
                                let t = e.getAttribute("colwidth");
                                return t ? t.split(",").map(e => parseInt(e, 10)) : null
                            }
                        }
                    }),
                    tableRole: "cell",
                    isolating: !0,
                    parseHTML: () => [{
                        tag: "td"
                    }],
                    renderHTML({
                        HTMLAttributes: e
                    }) {
                        return ["td", (0, r.P1)(this.options.HTMLAttributes, e), 0]
                    }
                }),
                a = r.NB.create({
                    name: "tableHeader",
                    addOptions: () => ({
                        HTMLAttributes: {}
                    }),
                    content: "block+",
                    addAttributes: () => ({
                        colspan: {
                            default: 1
                        },
                        rowspan: {
                            default: 1
                        },
                        colwidth: {
                            default: null,
                            parseHTML: e => {
                                let t = e.getAttribute("colwidth");
                                return t ? t.split(",").map(e => parseInt(e, 10)) : null
                            }
                        }
                    }),
                    tableRole: "header_cell",
                    isolating: !0,
                    parseHTML: () => [{
                        tag: "th"
                    }],
                    renderHTML({
                        HTMLAttributes: e
                    }) {
                        return ["th", (0, r.P1)(this.options.HTMLAttributes, e), 0]
                    }
                }),
                s = r.NB.create({
                    name: "tableRow",
                    addOptions: () => ({
                        HTMLAttributes: {}
                    }),
                    content: "(tableCell | tableHeader)*",
                    tableRole: "row",
                    parseHTML: () => [{
                        tag: "tr"
                    }],
                    renderHTML({
                        HTMLAttributes: e
                    }) {
                        return ["tr", (0, r.P1)(this.options.HTMLAttributes, e), 0]
                    }
                });

            function u(e, t) {
                return t ? ["width", `${Math.max(t,e)}px`] : ["min-width", `${e}px`]
            }

            function c(e, t, n, r, o, i) {
                var l;
                let a = 0,
                    s = !0,
                    c = t.firstChild,
                    d = e.firstChild;
                if (null !== d)
                    for (let e = 0, n = 0; e < d.childCount; e += 1) {
                        let {
                            colspan: l,
                            colwidth: f
                        } = d.child(e).attrs;
                        for (let e = 0; e < l; e += 1, n += 1) {
                            let l = o === n ? i : f && f[e],
                                d = l ? `${l}px` : "";
                            if (a += l || r, l || (s = !1), c) {
                                if (c.style.width !== d) {
                                    let [e, t] = u(r, l);
                                    c.style.setProperty(e, t)
                                }
                                c = c.nextSibling
                            } else {
                                let e = document.createElement("col"),
                                    [n, o] = u(r, l);
                                e.style.setProperty(n, o), t.appendChild(e)
                            }
                        }
                    }
                for (; c;) {
                    let e = c.nextSibling;
                    null == (l = c.parentNode) || l.removeChild(c), c = e
                }
                s ? (n.style.width = `${a}px`, n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = `${a}px`)
            }
            var d = class {
                constructor(e, t) {
                    this.node = e, this.cellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.colgroup = this.table.appendChild(document.createElement("colgroup")), c(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"))
                }
                update(e) {
                    return e.type === this.node.type && (this.node = e, c(e, this.colgroup, this.table, this.cellMinWidth), !0)
                }
                ignoreMutation(e) {
                    return "attributes" === e.type && (e.target === this.table || this.colgroup.contains(e.target))
                }
            };

            function f(e, t) {
                return t ? e.createChecked(null, t) : e.createAndFill()
            }
            var h = ({
                    editor: e
                }) => {
                    let {
                        selection: t
                    } = e.state;
                    if (!(t instanceof i.Xc)) return !1;
                    let n = 0,
                        o = (0, r.qv)(t.ranges[0].$from, e => "table" === e.type.name);
                    return null == o || o.node.descendants(e => {
                        if ("table" === e.type.name) return !1;
                        ["tableCell", "tableHeader"].includes(e.type.name) && (n += 1)
                    }), n === t.ranges.length && (e.commands.deleteTable(), !0)
                },
                p = r.NB.create({
                    name: "table",
                    addOptions: () => ({
                        HTMLAttributes: {},
                        resizable: !1,
                        handleWidth: 5,
                        cellMinWidth: 25,
                        View: d,
                        lastColumnResizable: !0,
                        allowTableNodeSelection: !1
                    }),
                    content: "tableRow+",
                    tableRole: "table",
                    isolating: !0,
                    group: "block",
                    parseHTML: () => [{
                        tag: "table"
                    }],
                    renderHTML({
                        node: e,
                        HTMLAttributes: t
                    }) {
                        let {
                            colgroup: n,
                            tableWidth: o,
                            tableMinWidth: i
                        } = function(e, t, n, r) {
                            let o = 0,
                                i = !0,
                                l = [],
                                a = e.firstChild;
                            if (!a) return {};
                            for (let e = 0, n = 0; e < a.childCount; e += 1) {
                                let {
                                    colspan: r,
                                    colwidth: s
                                } = a.child(e).attrs;
                                for (let e = 0; e < r; e += 1, n += 1) {
                                    let r = void 0 === n ? void 0 : s && s[e];
                                    o += r || t, r || (i = !1);
                                    let [a, c] = u(t, r);
                                    l.push(["col", {
                                        style: `${a}: ${c}`
                                    }])
                                }
                            }
                            return {
                                colgroup: ["colgroup", {}, ...l],
                                tableWidth: i ? `${o}px` : "",
                                tableMinWidth: i ? "" : `${o}px`
                            }
                        }(e, this.options.cellMinWidth);
                        return ["table", (0, r.P1)(this.options.HTMLAttributes, t, {
                            style: o ? `width: ${o}` : `min-width: ${i}`
                        }), n, ["tbody", 0]]
                    },
                    addCommands: () => ({
                        insertTable: ({
                            rows: e = 3,
                            cols: t = 3,
                            withHeaderRow: n = !0
                        } = {}) => ({
                            tr: r,
                            dispatch: i,
                            editor: l
                        }) => {
                            let a = function(e, t, n, r, o) {
                                let i = function(e) {
                                        if (e.cached.tableNodeTypes) return e.cached.tableNodeTypes;
                                        let t = {};
                                        return Object.keys(e.nodes).forEach(n => {
                                            let r = e.nodes[n];
                                            r.spec.tableRole && (t[r.spec.tableRole] = r)
                                        }), e.cached.tableNodeTypes = t, t
                                    }(e),
                                    l = [],
                                    a = [];
                                for (let e = 0; e < n; e += 1) {
                                    let e = f(i.cell, void 0);
                                    if (e && a.push(e), r) {
                                        let e = f(i.header_cell, void 0);
                                        e && l.push(e)
                                    }
                                }
                                let s = [];
                                for (let e = 0; e < t; e += 1) s.push(i.row.createChecked(null, r && 0 === e ? l : a));
                                return i.table.createChecked(null, s)
                            }(l.schema, e, t, n);
                            if (i) {
                                let e = r.selection.from + 1;
                                r.replaceSelectionWith(a).scrollIntoView().setSelection(o.Bs.near(r.doc.resolve(e)))
                            }
                            return !0
                        },
                        addColumnBefore: () => ({
                            state: e,
                            dispatch: t
                        }) => (0, i.I_)(e, t),
                        addColumnAfter: () => ({
                            state: e,
                            dispatch: t
                        }) => (0, i.e2)(e, t),
                        deleteColumn: () => ({
                            state: e,
                            dispatch: t
                        }) => (0, i.eA)(e, t),
                        addRowBefore: () => ({
                            state: e,
                            dispatch: t
                        }) => (0, i.z2)(e, t),
                        addRowAfter: () => ({
                            state: e,
                            dispatch: t
                        }) => (0, i.dl)(e, t),
                        deleteRow: () => ({
                            state: e,
                            dispatch: t
                        }) => (0, i.qK)(e, t),
                        deleteTable: () => ({
                            state: e,
                            dispatch: t
                        }) => (0, i.WQ)(e, t),
                        mergeCells: () => ({
                            state: e,
                            dispatch: t
                        }) => (0, i.JX)(e, t),
                        splitCell: () => ({
                            state: e,
                            dispatch: t
                        }) => (0, i.Cr)(e, t),
                        toggleHeaderColumn: () => ({
                            state: e,
                            dispatch: t
                        }) => (0, i.dO)("column")(e, t),
                        toggleHeaderRow: () => ({
                            state: e,
                            dispatch: t
                        }) => (0, i.dO)("row")(e, t),
                        toggleHeaderCell: () => ({
                            state: e,
                            dispatch: t
                        }) => (0, i.II)(e, t),
                        mergeOrSplit: () => ({
                            state: e,
                            dispatch: t
                        }) => !!(0, i.JX)(e, t) || (0, i.Cr)(e, t),
                        setCellAttribute: (e, t) => ({
                            state: n,
                            dispatch: r
                        }) => (0, i.wb)(e, t)(n, r),
                        goToNextCell: () => ({
                            state: e,
                            dispatch: t
                        }) => (0, i.nA)(1)(e, t),
                        goToPreviousCell: () => ({
                            state: e,
                            dispatch: t
                        }) => (0, i.nA)(-1)(e, t),
                        fixTables: () => ({
                            state: e,
                            dispatch: t
                        }) => (t && (0, i.tp)(e), !0),
                        setCellSelection: e => ({
                            tr: t,
                            dispatch: n
                        }) => {
                            if (n) {
                                let n = i.Xc.create(t.doc, e.anchorCell, e.headCell);
                                t.setSelection(n)
                            }
                            return !0
                        }
                    }),
                    addKeyboardShortcuts() {
                        return {
                            Tab: () => !!this.editor.commands.goToNextCell() || !!this.editor.can().addRowAfter() && this.editor.chain().addRowAfter().goToNextCell().run(),
                            "Shift-Tab": () => this.editor.commands.goToPreviousCell(),
                            Backspace: h,
                            "Mod-Backspace": h,
                            Delete: h,
                            "Mod-Delete": h
                        }
                    },
                    addProseMirrorPlugins() {
                        return [...this.options.resizable && this.editor.isEditable ? [(0, i.VH)({
                            handleWidth: this.options.handleWidth,
                            cellMinWidth: this.options.cellMinWidth,
                            defaultCellMinWidth: this.options.cellMinWidth,
                            View: this.options.View,
                            lastColumnResizable: this.options.lastColumnResizable
                        })] : [], (0, i.G3)({
                            allowTableNodeSelection: this.options.allowTableNodeSelection
                        })]
                    },
                    extendNodeSchema(e) {
                        let t = {
                            name: e.name,
                            options: e.options,
                            storage: e.storage
                        };
                        return {
                            tableRole: (0, r.nU)((0, r.Nl)(e, "tableRole", t))
                        }
                    }
                });
            r.hj.create({
                name: "tableKit",
                addExtensions() {
                    let e = [];
                    return !1 !== this.options.table && e.push(p.configure(this.options.table)), !1 !== this.options.tableCell && e.push(l.configure(this.options.tableCell)), !1 !== this.options.tableHeader && e.push(a.configure(this.options.tableHeader)), !1 !== this.options.tableRow && e.push(s.configure(this.options.tableRow)), e
                }
            })
        },
        47905: function(e, t, n) {
            "use strict";
            let r;
            n.d(t, {
                VY: function() {
                    return tt
                },
                h_: function() {
                    return e3
                },
                Xi: function() {
                    return e6
                },
                ck: function() {
                    return tn
                },
                Uv: function() {
                    return te
                },
                fC: function() {
                    return e9
                },
                Z0: function() {
                    return tr
                },
                xz: function() {
                    return e8
                }
            });
            var o = n(7896),
                i = n(2784),
                l = n(17998),
                a = n(62656),
                s = n(92211),
                u = n(87695),
                c = n(72714),
                d = n(62172),
                f = n(59241),
                h = n(35999);
            let p = 0;

            function m() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
            }
            var g = n(27757);
            let b = "focusScope.autoFocusOnMount",
                v = "focusScope.autoFocusOnUnmount",
                y = {
                    bubbles: !1,
                    cancelable: !0
                },
                w = (0, i.forwardRef)((e, t) => {
                    let {
                        loop: n = !1,
                        trapped: r = !1,
                        onMountAutoFocus: l,
                        onUnmountAutoFocus: s,
                        ...u
                    } = e, [d, f] = (0, i.useState)(null), h = (0, g.W)(l), p = (0, g.W)(s), m = (0, i.useRef)(null), w = (0, a.e)(t, e => f(e)), S = (0, i.useRef)({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    (0, i.useEffect)(() => {
                        if (r) {
                            function e(e) {
                                if (S.paused || !d) return;
                                let t = e.target;
                                d.contains(t) ? m.current = t : C(m.current, {
                                    select: !0
                                })
                            }

                            function t(e) {
                                if (S.paused || !d) return;
                                let t = e.relatedTarget;
                                null === t || d.contains(t) || C(m.current, {
                                    select: !0
                                })
                            }
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            let n = new MutationObserver(function(e) {
                                if (document.activeElement === document.body)
                                    for (let t of e) t.removedNodes.length > 0 && C(d)
                            });
                            return d && n.observe(d, {
                                childList: !0,
                                subtree: !0
                            }), () => {
                                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
                            }
                        }
                    }, [r, d, S.paused]), (0, i.useEffect)(() => {
                        if (d) {
                            M.add(S);
                            let e = document.activeElement;
                            if (!d.contains(e)) {
                                let t = new CustomEvent(b, y);
                                d.addEventListener(b, h), d.dispatchEvent(t), t.defaultPrevented || (function(e, {
                                    select: t = !1
                                } = {}) {
                                    let n = document.activeElement;
                                    for (let r of e)
                                        if (C(r, {
                                                select: t
                                            }), document.activeElement !== n) return
                                }(E(d).filter(e => "A" !== e.tagName), {
                                    select: !0
                                }), document.activeElement === e && C(d))
                            }
                            return () => {
                                d.removeEventListener(b, h), setTimeout(() => {
                                    let t = new CustomEvent(v, y);
                                    d.addEventListener(v, p), d.dispatchEvent(t), t.defaultPrevented || C(null != e ? e : document.body, {
                                        select: !0
                                    }), d.removeEventListener(v, p), M.remove(S)
                                }, 0)
                            }
                        }
                    }, [d, h, p, S]);
                    let A = (0, i.useCallback)(e => {
                        if (!n && !r || S.paused) return;
                        let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            o = document.activeElement;
                        if (t && o) {
                            let t = e.currentTarget,
                                [r, i] = function(e) {
                                    let t = E(e);
                                    return [k(t, e), k(t.reverse(), e)]
                                }(t);
                            r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), n && C(i, {
                                select: !0
                            })) : (e.preventDefault(), n && C(r, {
                                select: !0
                            })) : o === t && e.preventDefault()
                        }
                    }, [n, r, S.paused]);
                    return (0, i.createElement)(c.WV.div, (0, o.Z)({
                        tabIndex: -1
                    }, u, {
                        ref: w,
                        onKeyDown: A
                    }))
                });

            function E(e) {
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

            function C(e, {
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
            let M = (r = [], {
                add(e) {
                    let t = r[0];
                    e !== t && (null == t || t.pause()), (r = S(r, e)).unshift(e)
                },
                remove(e) {
                    var t;
                    null === (t = (r = S(r, e))[0]) || void 0 === t || t.resume()
                }
            });

            function S(e, t) {
                let n = [...e],
                    r = n.indexOf(t);
                return -1 !== r && n.splice(r, 1), n
            }
            var A = n(23372),
                T = n(94465),
                R = n(78773),
                L = n(79616),
                x = n(2923),
                I = n(49815),
                O = n(49732),
                _ = n(22970),
                P = n(95346),
                D = n(22442),
                H = (0, n(64597)._)(),
                N = function() {},
                F = i.forwardRef(function(e, t) {
                    var n = i.useRef(null),
                        r = i.useState({
                            onScrollCapture: N,
                            onWheelCapture: N,
                            onTouchMoveCapture: N
                        }),
                        o = r[0],
                        l = r[1],
                        a = e.forwardProps,
                        s = e.children,
                        u = e.className,
                        c = e.removeScrollBar,
                        d = e.enabled,
                        f = e.shards,
                        h = e.sideCar,
                        p = e.noIsolation,
                        m = e.inert,
                        g = e.allowPinchZoom,
                        b = e.as,
                        v = (0, _._T)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]),
                        y = (0, D.q)([n, t]),
                        w = (0, _.pi)((0, _.pi)({}, v), o);
                    return i.createElement(i.Fragment, null, d && i.createElement(h, {
                        sideCar: H,
                        removeScrollBar: c,
                        shards: f,
                        noIsolation: p,
                        inert: m,
                        setCallbacks: l,
                        allowPinchZoom: !!g,
                        lockRef: n
                    }), a ? i.cloneElement(i.Children.only(s), (0, _.pi)((0, _.pi)({}, w), {
                        ref: y
                    })) : i.createElement(void 0 === b ? "div" : b, (0, _.pi)({}, w, {
                        className: u,
                        ref: y
                    }), s))
                });
            F.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, F.classNames = {
                fullWidth: P.zi,
                zeroRight: P.pF
            };
            var j = n(57758),
                B = n(181),
                $ = n(33225),
                W = !1;
            if ("undefined" != typeof window) try {
                var z = Object.defineProperty({}, "passive", {
                    get: function() {
                        return W = !0, !0
                    }
                });
                window.addEventListener("test", z, z), window.removeEventListener("test", z, z)
            } catch (e) {
                W = !1
            }
            var K = !!W && {
                    passive: !1
                },
                U = function(e, t) {
                    var n = window.getComputedStyle(e);
                    return "hidden" !== n[t] && !(n.overflowY === n.overflowX && "TEXTAREA" !== e.tagName && "visible" === n[t])
                },
                V = function(e, t) {
                    var n = t;
                    do {
                        if ("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host), Y(e, n)) {
                            var r = X(e, n);
                            if (r[1] > r[2]) return !0
                        }
                        n = n.parentNode
                    } while (n && n !== document.body);
                    return !1
                },
                Y = function(e, t) {
                    return "v" === e ? U(t, "overflowY") : U(t, "overflowX")
                },
                X = function(e, t) {
                    return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
                },
                Z = function(e, t, n, r, o) {
                    var i, l = (i = window.getComputedStyle(t).direction, "h" === e && "rtl" === i ? -1 : 1),
                        a = l * r,
                        s = n.target,
                        u = t.contains(s),
                        c = !1,
                        d = a > 0,
                        f = 0,
                        h = 0;
                    do {
                        var p = X(e, s),
                            m = p[0],
                            g = p[1] - p[2] - l * m;
                        (m || g) && Y(e, s) && (f += g, h += m), s = s.parentNode
                    } while (!u && s !== document.body || u && (t.contains(s) || t === s));
                    return d && (o && 0 === f || !o && a > f) ? c = !0 : !d && (o && 0 === h || !o && -a > h) && (c = !0), c
                },
                q = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                G = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                Q = function(e) {
                    return e && "current" in e ? e.current : e
                },
                J = 0,
                ee = [],
                et = (0, j.L)(H, function(e) {
                    var t = i.useRef([]),
                        n = i.useRef([0, 0]),
                        r = i.useRef(),
                        o = i.useState(J++)[0],
                        l = i.useState(function() {
                            return (0, $.Ws)()
                        })[0],
                        a = i.useRef(e);
                    i.useEffect(function() {
                        a.current = e
                    }, [e]), i.useEffect(function() {
                        if (e.inert) {
                            document.body.classList.add("block-interactivity-".concat(o));
                            var t = (0, _.ev)([e.lockRef.current], (e.shards || []).map(Q), !0).filter(Boolean);
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
                            if ("touches" in e && 2 === e.touches.length) return !a.current.allowPinchZoom;
                            var o, i = q(e),
                                l = n.current,
                                s = "deltaX" in e ? e.deltaX : l[0] - i[0],
                                u = "deltaY" in e ? e.deltaY : l[1] - i[1],
                                c = e.target,
                                d = Math.abs(s) > Math.abs(u) ? "h" : "v";
                            if ("touches" in e && "h" === d && "range" === c.type) return !1;
                            var f = V(d, c);
                            if (!f) return !0;
                            if (f ? o = d : (o = "v" === d ? "h" : "v", f = V(d, c)), !f) return !1;
                            if (!r.current && "changedTouches" in e && (s || u) && (r.current = o), !o) return !0;
                            var h = r.current || o;
                            return Z(h, t, e, "h" === h ? s : u, !0)
                        }, []),
                        u = i.useCallback(function(e) {
                            if (ee.length && ee[ee.length - 1] === l) {
                                var n = "deltaY" in e ? G(e) : q(e),
                                    r = t.current.filter(function(t) {
                                        var r;
                                        return t.name === e.type && t.target === e.target && (r = t.delta)[0] === n[0] && r[1] === n[1]
                                    })[0];
                                if (r && r.should) {
                                    e.cancelable && e.preventDefault();
                                    return
                                }
                                if (!r) {
                                    var o = (a.current.shards || []).map(Q).filter(Boolean).filter(function(t) {
                                        return t.contains(e.target)
                                    });
                                    (o.length > 0 ? s(e, o[0]) : !a.current.noIsolation) && e.cancelable && e.preventDefault()
                                }
                            }
                        }, []),
                        c = i.useCallback(function(e, n, r, o) {
                            var i = {
                                name: e,
                                delta: n,
                                target: r,
                                should: o
                            };
                            t.current.push(i), setTimeout(function() {
                                t.current = t.current.filter(function(e) {
                                    return e !== i
                                })
                            }, 1)
                        }, []),
                        d = i.useCallback(function(e) {
                            n.current = q(e), r.current = void 0
                        }, []),
                        f = i.useCallback(function(t) {
                            c(t.type, G(t), t.target, s(t, e.lockRef.current))
                        }, []),
                        h = i.useCallback(function(t) {
                            c(t.type, q(t), t.target, s(t, e.lockRef.current))
                        }, []);
                    i.useEffect(function() {
                        return ee.push(l), e.setCallbacks({
                                onScrollCapture: f,
                                onWheelCapture: f,
                                onTouchMoveCapture: h
                            }), document.addEventListener("wheel", u, K), document.addEventListener("touchmove", u, K), document.addEventListener("touchstart", d, K),
                            function() {
                                ee = ee.filter(function(e) {
                                    return e !== l
                                }), document.removeEventListener("wheel", u, K), document.removeEventListener("touchmove", u, K), document.removeEventListener("touchstart", d, K)
                            }
                    }, []);
                    var p = e.removeScrollBar,
                        m = e.inert;
                    return i.createElement(i.Fragment, null, m ? i.createElement(l, {
                        styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
                    }) : null, p ? i.createElement(B.jp, {
                        gapMode: "margin"
                    }) : null)
                }),
                en = i.forwardRef(function(e, t) {
                    return i.createElement(F, (0, _.pi)({}, e, {
                        ref: t,
                        sideCar: et
                    }))
                });
            en.classNames = F.classNames;
            let er = ["Enter", " "],
                eo = ["ArrowUp", "PageDown", "End"],
                ei = ["ArrowDown", "PageUp", "Home", ...eo],
                el = {
                    ltr: [...er, "ArrowRight"],
                    rtl: [...er, "ArrowLeft"]
                },
                ea = {
                    ltr: ["ArrowLeft"],
                    rtl: ["ArrowRight"]
                },
                es = "Menu",
                [eu, ec, ed] = (0, d.B)(es),
                [ef, eh] = (0, s.b)(es, [ed, T.D7, x.Pc]),
                ep = (0, T.D7)(),
                em = (0, x.Pc)(),
                [eg, eb] = ef(es),
                [ev, ey] = ef(es),
                ew = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeMenu: n,
                        ...r
                    } = e, l = ep(n);
                    return (0, i.createElement)(T.ee, (0, o.Z)({}, l, r, {
                        ref: t
                    }))
                }),
                eE = "MenuPortal",
                [ek, eC] = ef(eE, {
                    forceMount: void 0
                }),
                eM = "MenuContent",
                [eS, eA] = ef(eM),
                eT = (0, i.forwardRef)((e, t) => {
                    let n = eC(eM, e.__scopeMenu),
                        {
                            forceMount: r = n.forceMount,
                            ...l
                        } = e,
                        a = eb(eM, e.__scopeMenu),
                        s = ey(eM, e.__scopeMenu);
                    return (0, i.createElement)(eu.Provider, {
                        scope: e.__scopeMenu
                    }, (0, i.createElement)(L.z, {
                        present: r || a.open
                    }, (0, i.createElement)(eu.Slot, {
                        scope: e.__scopeMenu
                    }, s.modal ? (0, i.createElement)(eR, (0, o.Z)({}, l, {
                        ref: t
                    })) : (0, i.createElement)(eL, (0, o.Z)({}, l, {
                        ref: t
                    })))))
                }),
                eR = (0, i.forwardRef)((e, t) => {
                    let n = eb(eM, e.__scopeMenu),
                        r = (0, i.useRef)(null),
                        s = (0, a.e)(t, r);
                    return (0, i.useEffect)(() => {
                        let e = r.current;
                        if (e) return (0, O.Ry)(e)
                    }, []), (0, i.createElement)(ex, (0, o.Z)({}, e, {
                        ref: s,
                        trapFocus: n.open,
                        disableOutsidePointerEvents: n.open,
                        disableOutsideScroll: !0,
                        onFocusOutside: (0, l.M)(e.onFocusOutside, e => e.preventDefault(), {
                            checkForDefaultPrevented: !1
                        }),
                        onDismiss: () => n.onOpenChange(!1)
                    }))
                }),
                eL = (0, i.forwardRef)((e, t) => {
                    let n = eb(eM, e.__scopeMenu);
                    return (0, i.createElement)(ex, (0, o.Z)({}, e, {
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        disableOutsideScroll: !1,
                        onDismiss: () => n.onOpenChange(!1)
                    }))
                }),
                ex = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeMenu: n,
                        loop: r = !1,
                        trapFocus: s,
                        onOpenAutoFocus: u,
                        onCloseAutoFocus: c,
                        disableOutsidePointerEvents: d,
                        onEntryFocus: f,
                        onEscapeKeyDown: g,
                        onPointerDownOutside: b,
                        onFocusOutside: v,
                        onInteractOutside: y,
                        onDismiss: E,
                        disableOutsideScroll: k,
                        ...C
                    } = e, M = eb(eM, n), S = ey(eM, n), A = ep(n), R = em(n), L = ec(n), [O, _] = (0, i.useState)(null), P = (0, i.useRef)(null), D = (0, a.e)(t, P, M.onContentChange), H = (0, i.useRef)(0), N = (0, i.useRef)(""), F = (0, i.useRef)(0), j = (0, i.useRef)(null), B = (0, i.useRef)("right"), $ = (0, i.useRef)(0), W = k ? en : i.Fragment, z = k ? {
                        as: I.g7,
                        allowPinchZoom: !0
                    } : void 0, K = e => {
                        var t, n;
                        let r = N.current + e,
                            o = L().filter(e => !e.disabled),
                            i = document.activeElement,
                            l = null === (t = o.find(e => e.ref.current === i)) || void 0 === t ? void 0 : t.textValue,
                            a = function(e, t, n) {
                                var r;
                                let o = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
                                    i = (r = Math.max(n ? e.indexOf(n) : -1, 0), e.map((t, n) => e[(r + n) % e.length]));
                                1 === o.length && (i = i.filter(e => e !== n));
                                let l = i.find(e => e.toLowerCase().startsWith(o.toLowerCase()));
                                return l !== n ? l : void 0
                            }(o.map(e => e.textValue), r, l),
                            s = null === (n = o.find(e => e.textValue === a)) || void 0 === n ? void 0 : n.ref.current;
                        ! function e(t) {
                            N.current = t, window.clearTimeout(H.current), "" !== t && (H.current = window.setTimeout(() => e(""), 1e3))
                        }(r), s && setTimeout(() => s.focus())
                    };
                    (0, i.useEffect)(() => () => window.clearTimeout(H.current), []), (0, i.useEffect)(() => {
                        var e, t;
                        let n = document.querySelectorAll("[data-radix-focus-guard]");
                        return document.body.insertAdjacentElement("afterbegin", null !== (e = n[0]) && void 0 !== e ? e : m()), document.body.insertAdjacentElement("beforeend", null !== (t = n[1]) && void 0 !== t ? t : m()), p++, () => {
                            1 === p && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), p--
                        }
                    }, []);
                    let U = (0, i.useCallback)(e => {
                        var t, n, r;
                        return B.current === (null === (t = j.current) || void 0 === t ? void 0 : t.side) && !!(r = null === (n = j.current) || void 0 === n ? void 0 : n.area) && function(e, t) {
                            let {
                                x: n,
                                y: r
                            } = e, o = !1;
                            for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                                let l = t[e].x,
                                    a = t[e].y,
                                    s = t[i].x,
                                    u = t[i].y;
                                a > r != u > r && n < (s - l) * (r - a) / (u - a) + l && (o = !o)
                            }
                            return o
                        }({
                            x: e.clientX,
                            y: e.clientY
                        }, r)
                    }, []);
                    return (0, i.createElement)(eS, {
                        scope: n,
                        searchRef: N,
                        onItemEnter: (0, i.useCallback)(e => {
                            U(e) && e.preventDefault()
                        }, [U]),
                        onItemLeave: (0, i.useCallback)(e => {
                            var t;
                            U(e) || (null === (t = P.current) || void 0 === t || t.focus(), _(null))
                        }, [U]),
                        onTriggerLeave: (0, i.useCallback)(e => {
                            U(e) && e.preventDefault()
                        }, [U]),
                        pointerGraceTimerRef: F,
                        onPointerGraceIntentChange: (0, i.useCallback)(e => {
                            j.current = e
                        }, [])
                    }, (0, i.createElement)(W, z, (0, i.createElement)(w, {
                        asChild: !0,
                        trapped: s,
                        onMountAutoFocus: (0, l.M)(u, e => {
                            var t;
                            e.preventDefault(), null === (t = P.current) || void 0 === t || t.focus()
                        }),
                        onUnmountAutoFocus: c
                    }, (0, i.createElement)(h.XB, {
                        asChild: !0,
                        disableOutsidePointerEvents: d,
                        onEscapeKeyDown: g,
                        onPointerDownOutside: b,
                        onFocusOutside: v,
                        onInteractOutside: y,
                        onDismiss: E
                    }, (0, i.createElement)(x.fC, (0, o.Z)({
                        asChild: !0
                    }, R, {
                        dir: S.dir,
                        orientation: "vertical",
                        loop: r,
                        currentTabStopId: O,
                        onCurrentTabStopIdChange: _,
                        onEntryFocus: (0, l.M)(f, e => {
                            S.isUsingKeyboardRef.current || e.preventDefault()
                        })
                    }), (0, i.createElement)(T.VY, (0, o.Z)({
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": eU(M.open),
                        "data-radix-menu-content": "",
                        dir: S.dir
                    }, A, C, {
                        ref: D,
                        style: {
                            outline: "none",
                            ...C.style
                        },
                        onKeyDown: (0, l.M)(C.onKeyDown, e => {
                            let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget,
                                n = e.ctrlKey || e.altKey || e.metaKey,
                                r = 1 === e.key.length;
                            t && ("Tab" === e.key && e.preventDefault(), !n && r && K(e.key));
                            let o = P.current;
                            if (e.target !== o || !ei.includes(e.key)) return;
                            e.preventDefault();
                            let i = L().filter(e => !e.disabled).map(e => e.ref.current);
                            eo.includes(e.key) && i.reverse(),
                                function(e) {
                                    let t = document.activeElement;
                                    for (let n of e)
                                        if (n === t || (n.focus(), document.activeElement !== t)) return
                                }(i)
                        }),
                        onBlur: (0, l.M)(e.onBlur, e => {
                            e.currentTarget.contains(e.target) || (window.clearTimeout(H.current), N.current = "")
                        }),
                        onPointerMove: (0, l.M)(e.onPointerMove, eX(e => {
                            let t = e.target,
                                n = $.current !== e.clientX;
                            if (e.currentTarget.contains(t) && n) {
                                let t = e.clientX > $.current ? "right" : "left";
                                B.current = t, $.current = e.clientX
                            }
                        }))
                    })))))))
                }),
                eI = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeMenu: n,
                        ...r
                    } = e;
                    return (0, i.createElement)(c.WV.div, (0, o.Z)({
                        role: "group"
                    }, r, {
                        ref: t
                    }))
                }),
                eO = ((e, t) => {
                    let {
                        __scopeMenu: n,
                        ...r
                    } = e;
                    return (0, i.createElement)(c.WV.div, (0, o.Z)({}, r, {
                        ref: t
                    }))
                }, "MenuItem"),
                e_ = "menu.itemSelect",
                eP = (0, i.forwardRef)((e, t) => {
                    let {
                        disabled: n = !1,
                        onSelect: r,
                        ...s
                    } = e, u = (0, i.useRef)(null), d = ey(eO, e.__scopeMenu), f = eA(eO, e.__scopeMenu), h = (0, a.e)(t, u), p = (0, i.useRef)(!1);
                    return (0, i.createElement)(eD, (0, o.Z)({}, s, {
                        ref: h,
                        disabled: n,
                        onClick: (0, l.M)(e.onClick, () => {
                            let e = u.current;
                            if (!n && e) {
                                let t = new CustomEvent(e_, {
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                e.addEventListener(e_, e => null == r ? void 0 : r(e), {
                                    once: !0
                                }), (0, c.jH)(e, t), t.defaultPrevented ? p.current = !1 : d.onClose()
                            }
                        }),
                        onPointerDown: t => {
                            var n;
                            null === (n = e.onPointerDown) || void 0 === n || n.call(e, t), p.current = !0
                        },
                        onPointerUp: (0, l.M)(e.onPointerUp, e => {
                            var t;
                            p.current || null === (t = e.currentTarget) || void 0 === t || t.click()
                        }),
                        onKeyDown: (0, l.M)(e.onKeyDown, e => {
                            let t = "" !== f.searchRef.current;
                            !n && (!t || " " !== e.key) && er.includes(e.key) && (e.currentTarget.click(), e.preventDefault())
                        })
                    }))
                }),
                eD = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeMenu: n,
                        disabled: r = !1,
                        textValue: s,
                        ...u
                    } = e, d = eA(eO, n), f = em(n), h = (0, i.useRef)(null), p = (0, a.e)(t, h), [m, g] = (0, i.useState)(!1), [b, v] = (0, i.useState)("");
                    return (0, i.useEffect)(() => {
                        let e = h.current;
                        if (e) {
                            var t;
                            v((null !== (t = e.textContent) && void 0 !== t ? t : "").trim())
                        }
                    }, [u.children]), (0, i.createElement)(eu.ItemSlot, {
                        scope: n,
                        disabled: r,
                        textValue: null != s ? s : b
                    }, (0, i.createElement)(x.ck, (0, o.Z)({
                        asChild: !0
                    }, f, {
                        focusable: !r
                    }), (0, i.createElement)(c.WV.div, (0, o.Z)({
                        role: "menuitem",
                        "data-highlighted": m ? "" : void 0,
                        "aria-disabled": r || void 0,
                        "data-disabled": r ? "" : void 0
                    }, u, {
                        ref: p,
                        onPointerMove: (0, l.M)(e.onPointerMove, eX(e => {
                            r ? d.onItemLeave(e) : (d.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus())
                        })),
                        onPointerLeave: (0, l.M)(e.onPointerLeave, eX(e => d.onItemLeave(e))),
                        onFocus: (0, l.M)(e.onFocus, () => g(!0)),
                        onBlur: (0, l.M)(e.onBlur, () => g(!1))
                    }))))
                }),
                [eH, eN] = ((e, t) => {
                    let {
                        checked: n = !1,
                        onCheckedChange: r,
                        ...a
                    } = e;
                    return (0, i.createElement)(ej, {
                        scope: e.__scopeMenu,
                        checked: n
                    }, (0, i.createElement)(eP, (0, o.Z)({
                        role: "menuitemcheckbox",
                        "aria-checked": eV(n) ? "mixed" : n
                    }, a, {
                        ref: t,
                        "data-state": eY(n),
                        onSelect: (0, l.M)(a.onSelect, () => null == r ? void 0 : r(!!eV(n) || !n), {
                            checkForDefaultPrevented: !1
                        })
                    })))
                }, ef("MenuRadioGroup", {
                    value: void 0,
                    onValueChange: () => {}
                })),
                eF = ((e, t) => {
                    let {
                        value: n,
                        onValueChange: r,
                        ...l
                    } = e, a = (0, g.W)(r);
                    return (0, i.createElement)(eH, {
                        scope: e.__scopeMenu,
                        value: n,
                        onValueChange: a
                    }, (0, i.createElement)(eI, (0, o.Z)({}, l, {
                        ref: t
                    })))
                }, "MenuItemIndicator"),
                [ej, eB] = ef(eF, {
                    checked: !1
                }),
                e$ = ((e, t) => {
                    let {
                        __scopeMenu: n,
                        forceMount: r,
                        ...l
                    } = e, a = eB(eF, n);
                    return (0, i.createElement)(L.z, {
                        present: r || eV(a.checked) || !0 === a.checked
                    }, (0, i.createElement)(c.WV.span, (0, o.Z)({}, l, {
                        ref: t,
                        "data-state": eY(a.checked)
                    })))
                }, (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeMenu: n,
                        ...r
                    } = e;
                    return (0, i.createElement)(c.WV.div, (0, o.Z)({
                        role: "separator",
                        "aria-orientation": "horizontal"
                    }, r, {
                        ref: t
                    }))
                })),
                [eW, ez] = ((e, t) => {
                    let {
                        __scopeMenu: n,
                        ...r
                    } = e, l = ep(n);
                    return (0, i.createElement)(T.Eh, (0, o.Z)({}, l, r, {
                        ref: t
                    }))
                }, ef("MenuSub")),
                eK = "MenuSubTrigger";

            function eU(e) {
                return e ? "open" : "closed"
            }

            function eV(e) {
                return "indeterminate" === e
            }

            function eY(e) {
                return eV(e) ? "indeterminate" : e ? "checked" : "unchecked"
            }

            function eX(e) {
                return t => "mouse" === t.pointerType ? e(t) : void 0
            }(e, t) => {
                let n = eb(eK, e.__scopeMenu),
                    r = ey(eK, e.__scopeMenu),
                    s = ez(eK, e.__scopeMenu),
                    u = eA(eK, e.__scopeMenu),
                    c = (0, i.useRef)(null),
                    {
                        pointerGraceTimerRef: d,
                        onPointerGraceIntentChange: f
                    } = u,
                    h = {
                        __scopeMenu: e.__scopeMenu
                    },
                    p = (0, i.useCallback)(() => {
                        c.current && window.clearTimeout(c.current), c.current = null
                    }, []);
                return (0, i.useEffect)(() => p, [p]), (0, i.useEffect)(() => {
                    let e = d.current;
                    return () => {
                        window.clearTimeout(e), f(null)
                    }
                }, [d, f]), (0, i.createElement)(ew, (0, o.Z)({
                    asChild: !0
                }, h), (0, i.createElement)(eD, (0, o.Z)({
                    id: s.triggerId,
                    "aria-haspopup": "menu",
                    "aria-expanded": n.open,
                    "aria-controls": s.contentId,
                    "data-state": eU(n.open)
                }, e, {
                    ref: (0, a.F)(t, s.onTriggerChange),
                    onClick: t => {
                        var r;
                        null === (r = e.onClick) || void 0 === r || r.call(e, t), e.disabled || t.defaultPrevented || (t.currentTarget.focus(), n.open || n.onOpenChange(!0))
                    },
                    onPointerMove: (0, l.M)(e.onPointerMove, eX(t => {
                        u.onItemEnter(t), t.defaultPrevented || e.disabled || n.open || c.current || (u.onPointerGraceIntentChange(null), c.current = window.setTimeout(() => {
                            n.onOpenChange(!0), p()
                        }, 100))
                    })),
                    onPointerLeave: (0, l.M)(e.onPointerLeave, eX(e => {
                        var t, r;
                        p();
                        let o = null === (t = n.content) || void 0 === t ? void 0 : t.getBoundingClientRect();
                        if (o) {
                            let t = null === (r = n.content) || void 0 === r ? void 0 : r.dataset.side,
                                i = "right" === t,
                                l = o[i ? "left" : "right"],
                                a = o[i ? "right" : "left"];
                            u.onPointerGraceIntentChange({
                                area: [{
                                    x: e.clientX + (i ? -5 : 5),
                                    y: e.clientY
                                }, {
                                    x: l,
                                    y: o.top
                                }, {
                                    x: a,
                                    y: o.top
                                }, {
                                    x: a,
                                    y: o.bottom
                                }, {
                                    x: l,
                                    y: o.bottom
                                }],
                                side: t
                            }), window.clearTimeout(d.current), d.current = window.setTimeout(() => u.onPointerGraceIntentChange(null), 300)
                        } else {
                            if (u.onTriggerLeave(e), e.defaultPrevented) return;
                            u.onPointerGraceIntentChange(null)
                        }
                    })),
                    onKeyDown: (0, l.M)(e.onKeyDown, t => {
                        let o = "" !== u.searchRef.current;
                        if (!e.disabled && (!o || " " !== t.key) && el[r.dir].includes(t.key)) {
                            var i;
                            n.onOpenChange(!0), null === (i = n.content) || void 0 === i || i.focus(), t.preventDefault()
                        }
                    })
                })))
            }, (e, t) => {
                let n = eC(eM, e.__scopeMenu),
                    {
                        forceMount: r = n.forceMount,
                        ...s
                    } = e,
                    u = eb(eM, e.__scopeMenu),
                    c = ey(eM, e.__scopeMenu),
                    d = ez("MenuSubContent", e.__scopeMenu),
                    f = (0, i.useRef)(null),
                    h = (0, a.e)(t, f);
                return (0, i.createElement)(eu.Provider, {
                    scope: e.__scopeMenu
                }, (0, i.createElement)(L.z, {
                    present: r || u.open
                }, (0, i.createElement)(eu.Slot, {
                    scope: e.__scopeMenu
                }, (0, i.createElement)(ex, (0, o.Z)({
                    id: d.contentId,
                    "aria-labelledby": d.triggerId
                }, s, {
                    ref: h,
                    align: "start",
                    side: "rtl" === c.dir ? "left" : "right",
                    disableOutsidePointerEvents: !1,
                    disableOutsideScroll: !1,
                    trapFocus: !1,
                    onOpenAutoFocus: e => {
                        var t;
                        c.isUsingKeyboardRef.current && (null === (t = f.current) || void 0 === t || t.focus()), e.preventDefault()
                    },
                    onCloseAutoFocus: e => e.preventDefault(),
                    onFocusOutside: (0, l.M)(e.onFocusOutside, e => {
                        e.target !== d.trigger && u.onOpenChange(!1)
                    }),
                    onEscapeKeyDown: (0, l.M)(e.onEscapeKeyDown, e => {
                        c.onClose(), e.preventDefault()
                    }),
                    onKeyDown: (0, l.M)(e.onKeyDown, e => {
                        let t = e.currentTarget.contains(e.target),
                            n = ea[c.dir].includes(e.key);
                        if (t && n) {
                            var r;
                            u.onOpenChange(!1), null === (r = d.trigger) || void 0 === r || r.focus(), e.preventDefault()
                        }
                    })
                })))))
            };
            let eZ = e => {
                    let {
                        __scopeMenu: t,
                        open: n = !1,
                        children: r,
                        dir: o,
                        onOpenChange: l,
                        modal: a = !0
                    } = e, s = ep(t), [u, c] = (0, i.useState)(null), d = (0, i.useRef)(!1), h = (0, g.W)(l), p = (0, f.gm)(o);
                    return (0, i.useEffect)(() => {
                        let e = () => {
                                d.current = !0, document.addEventListener("pointerdown", t, {
                                    capture: !0,
                                    once: !0
                                }), document.addEventListener("pointermove", t, {
                                    capture: !0,
                                    once: !0
                                })
                            },
                            t = () => d.current = !1;
                        return document.addEventListener("keydown", e, {
                            capture: !0
                        }), () => {
                            document.removeEventListener("keydown", e, {
                                capture: !0
                            }), document.removeEventListener("pointerdown", t, {
                                capture: !0
                            }), document.removeEventListener("pointermove", t, {
                                capture: !0
                            })
                        }
                    }, []), (0, i.createElement)(T.fC, s, (0, i.createElement)(eg, {
                        scope: t,
                        open: n,
                        onOpenChange: h,
                        content: u,
                        onContentChange: c
                    }, (0, i.createElement)(ev, {
                        scope: t,
                        onClose: (0, i.useCallback)(() => h(!1), [h]),
                        isUsingKeyboardRef: d,
                        dir: p,
                        modal: a
                    }, r)))
                },
                eq = e => {
                    let {
                        __scopeMenu: t,
                        forceMount: n,
                        children: r,
                        container: o
                    } = e, l = eb(eE, t);
                    return (0, i.createElement)(ek, {
                        scope: t,
                        forceMount: n
                    }, (0, i.createElement)(L.z, {
                        present: n || l.open
                    }, (0, i.createElement)(R.h, {
                        asChild: !0,
                        container: o
                    }, r)))
                },
                eG = "DropdownMenu",
                [eQ, eJ] = (0, s.b)(eG, [eh]),
                e0 = eh(),
                [e1, e2] = eQ(eG),
                e3 = e => {
                    let {
                        __scopeDropdownMenu: t,
                        children: n,
                        dir: r,
                        open: l,
                        defaultOpen: a,
                        onOpenChange: s,
                        modal: c = !0
                    } = e, d = e0(t), f = (0, i.useRef)(null), [h = !1, p] = (0, u.T)({
                        prop: l,
                        defaultProp: a,
                        onChange: s
                    });
                    return (0, i.createElement)(e1, {
                        scope: t,
                        triggerId: (0, A.M)(),
                        triggerRef: f,
                        contentId: (0, A.M)(),
                        open: h,
                        onOpenChange: p,
                        onOpenToggle: (0, i.useCallback)(() => p(e => !e), [p]),
                        modal: c
                    }, (0, i.createElement)(eZ, (0, o.Z)({}, d, {
                        open: h,
                        onOpenChange: p,
                        dir: r,
                        modal: c
                    }), n))
                },
                e5 = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeDropdownMenu: n,
                        disabled: r = !1,
                        ...s
                    } = e, u = e2("DropdownMenuTrigger", n), d = e0(n);
                    return (0, i.createElement)(ew, (0, o.Z)({
                        asChild: !0
                    }, d), (0, i.createElement)(c.WV.button, (0, o.Z)({
                        type: "button",
                        id: u.triggerId,
                        "aria-haspopup": "menu",
                        "aria-expanded": u.open,
                        "aria-controls": u.open ? u.contentId : void 0,
                        "data-state": u.open ? "open" : "closed",
                        "data-disabled": r ? "" : void 0,
                        disabled: r
                    }, s, {
                        ref: (0, a.F)(t, u.triggerRef),
                        onPointerDown: (0, l.M)(e.onPointerDown, e => {
                            r || 0 !== e.button || !1 !== e.ctrlKey || (u.onOpenToggle(), u.open || e.preventDefault())
                        }),
                        onKeyDown: (0, l.M)(e.onKeyDown, e => {
                            !r && (["Enter", " "].includes(e.key) && u.onOpenToggle(), "ArrowDown" === e.key && u.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(e.key) && e.preventDefault())
                        })
                    })))
                }),
                e4 = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeDropdownMenu: n,
                        ...r
                    } = e, a = e2("DropdownMenuContent", n), s = e0(n), u = (0, i.useRef)(!1);
                    return (0, i.createElement)(eT, (0, o.Z)({
                        id: a.contentId,
                        "aria-labelledby": a.triggerId
                    }, s, r, {
                        ref: t,
                        onCloseAutoFocus: (0, l.M)(e.onCloseAutoFocus, e => {
                            var t;
                            u.current || null === (t = a.triggerRef.current) || void 0 === t || t.focus(), u.current = !1, e.preventDefault()
                        }),
                        onInteractOutside: (0, l.M)(e.onInteractOutside, e => {
                            let t = e.detail.originalEvent,
                                n = 0 === t.button && !0 === t.ctrlKey,
                                r = 2 === t.button || n;
                            (!a.modal || r) && (u.current = !0)
                        }),
                        style: { ...e.style,
                            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
                        }
                    }))
                }),
                e6 = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeDropdownMenu: n,
                        ...r
                    } = e, l = e0(n);
                    return (0, i.createElement)(eP, (0, o.Z)({}, l, r, {
                        ref: t
                    }))
                }),
                e7 = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeDropdownMenu: n,
                        ...r
                    } = e, l = e0(n);
                    return (0, i.createElement)(e$, (0, o.Z)({}, l, r, {
                        ref: t
                    }))
                }),
                e9 = e3,
                e8 = e5,
                te = e => {
                    let {
                        __scopeDropdownMenu: t,
                        ...n
                    } = e, r = e0(t);
                    return (0, i.createElement)(eq, (0, o.Z)({}, r, n))
                },
                tt = e4,
                tn = e6,
                tr = e7
        },
        64102: function(e, t, n) {
            "use strict";
            n.d(t, {
                H: function() {
                    return H
                }
            });
            var r = n(3105),
                o = n(96073),
                i = n(3054),
                l = n(16578),
                a = n(57035),
                s = n(62972);
            let u = (0, n(9907).X)(() => void 0 !== window.ScrollTimeline);
            class c {
                constructor(e) {
                    this.animations = e.filter(Boolean)
                }
                then(e, t) {
                    return Promise.all(this.animations).then(e).catch(t)
                }
                getAll(e) {
                    return this.animations[0][e]
                }
                setAll(e, t) {
                    for (let n = 0; n < this.animations.length; n++) this.animations[n][e] = t
                }
                attachTimeline(e) {
                    let t = this.animations.map(t => {
                        if (!u() || !t.attachTimeline) return t.pause(),
                            function(e, t) {
                                let n;
                                let r = () => {
                                    let {
                                        currentTime: r
                                    } = t, o = (null === r ? 0 : r.value) / 100;
                                    n !== o && e(o), n = o
                                };
                                return s.Wi.update(r, !0), () => (0, s.Pn)(r)
                            }(e => {
                                t.time = t.duration * e
                            }, e);
                        t.attachTimeline(e)
                    });
                    return () => {
                        t.forEach((e, t) => {
                            e && e(), this.animations[t].stop()
                        })
                    }
                }
                get time() {
                    return this.getAll("time")
                }
                set time(e) {
                    this.setAll("time", e)
                }
                get speed() {
                    return this.getAll("speed")
                }
                set speed(e) {
                    this.setAll("speed", e)
                }
                get duration() {
                    let e = 0;
                    for (let t = 0; t < this.animations.length; t++) e = Math.max(e, this.animations[t].duration);
                    return e
                }
                runAll(e) {
                    this.animations.forEach(t => t[e]())
                }
                play() {
                    this.runAll("play")
                }
                pause() {
                    this.runAll("pause")
                }
                stop() {
                    this.runAll("stop")
                }
                cancel() {
                    this.runAll("cancel")
                }
                complete() {
                    this.runAll("complete")
                }
            }
            var d = n(3715),
                f = n(28650),
                h = n(23384),
                p = n(74422),
                m = n(74197),
                g = n(27047),
                b = n(60779),
                v = n(41429),
                y = n(95254),
                w = n(74125),
                E = n(17475),
                k = n(15815);

            function C(e, t, n, r) {
                var o;
                return "number" == typeof t ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : "<" === t ? n : null !== (o = r.get(t)) && void 0 !== o ? o : e
            }
            let M = (e, t, n) => {
                let r = t - e;
                return ((n - e) % r + r) % r + e
            };
            var S = n(29554),
                A = n(44866),
                T = n(65339);

            function R(e, t) {
                return e.at !== t.at ? e.at - t.at : null === e.value ? 1 : null === t.value ? -1 : 0
            }

            function L(e, t) {
                return t.has(e) || t.set(e, {}), t.get(e)
            }

            function x(e, t) {
                return t[e] || (t[e] = []), t[e]
            }
            let I = e => "number" == typeof e,
                O = e => e.every(I);

            function _(e, t, n, r) {
                let o = (0, i.I)(e, r),
                    s = o.length;
                (0, a.k)(!!s, "No valid element provided.");
                let u = [];
                for (let e = 0; e < s; e++) {
                    let r = o[e];
                    l.R.has(r) || function(e) {
                        let t = {
                                presenceContext: null,
                                props: {},
                                visualState: {
                                    renderState: {
                                        transform: {},
                                        transformOrigin: {},
                                        style: {},
                                        vars: {},
                                        attrs: {}
                                    },
                                    latestValues: {}
                                }
                            },
                            n = (0, f.v)(e) ? new h.e(t, {
                                enableHardwareAcceleration: !1
                            }) : new p.W(t, {
                                enableHardwareAcceleration: !0
                            });
                        n.mount(e), l.R.set(e, n)
                    }(r);
                    let i = l.R.get(r),
                        a = { ...n
                        };
                    "function" == typeof a.delay && (a.delay = a.delay(e, s)), u.push(...(0, d.w)(i, { ...t,
                        transition: a
                    }, {}))
                }
                return new c(u)
            }
            let P = e => Array.isArray(e) && Array.isArray(e[0]),
                D = e => function(t, n, r) {
                    let o;
                    return o = P(t) ? function(e, t, n) {
                        let r = [];
                        return (function(e, {
                            defaultTransition: t = {},
                            ...n
                        } = {}, r) {
                            let o = t.duration || .3,
                                l = new Map,
                                a = new Map,
                                s = {},
                                u = new Map,
                                c = 0,
                                d = 0,
                                f = 0;
                            for (let n = 0; n < e.length; n++) {
                                let l = e[n];
                                if ("string" == typeof l) {
                                    u.set(l, d);
                                    continue
                                }
                                if (!Array.isArray(l)) {
                                    u.set(l.name, C(d, l.at, c, u));
                                    continue
                                }
                                let [h, p, m = {}] = l;
                                void 0 !== m.at && (d = C(d, m.at, c, u));
                                let E = 0,
                                    R = (e, n, r, i = 0, l = 0) => {
                                        let a = Array.isArray(e) ? e : [e],
                                            {
                                                delay: s = 0,
                                                times: u = (0, y.Y)(a),
                                                type: c = "keyframes",
                                                ...h
                                            } = n,
                                            {
                                                ease: p = t.ease || "easeOut",
                                                duration: m
                                            } = n,
                                            k = "function" == typeof s ? s(i, l) : s,
                                            C = a.length;
                                        if (C <= 2 && "spring" === c) {
                                            let e = 100;
                                            2 === C && O(a) && (e = Math.abs(a[1] - a[0]));
                                            let t = { ...h
                                            };
                                            void 0 !== m && (t.duration = (0, v.w)(m));
                                            let n = function(e, t = 100) {
                                                let n = (0, g.S)({
                                                        keyframes: [0, t],
                                                        ...e
                                                    }),
                                                    r = Math.min((0, b.i)(n), b.E);
                                                return {
                                                    type: "keyframes",
                                                    ease: e => n.next(r * e).value / t,
                                                    duration: (0, v.X)(r)
                                                }
                                            }(t, e);
                                            p = n.ease, m = n.duration
                                        }
                                        null != m || (m = o);
                                        let R = d + k,
                                            L = R + m;
                                        1 === u.length && 0 === u[0] && (u[1] = 1);
                                        let x = u.length - a.length;
                                        x > 0 && (0, w.c)(u, x), 1 === a.length && a.unshift(null),
                                            function(e, t, n, r, o, i) {
                                                ! function(e, t, n) {
                                                    for (let r = 0; r < e.length; r++) {
                                                        let o = e[r];
                                                        o.at > t && o.at < n && ((0, A.cl)(e, o), r--)
                                                    }
                                                }(e, o, i);
                                                for (let a = 0; a < t.length; a++) {
                                                    var l;
                                                    e.push({
                                                        value: t[a],
                                                        at: (0, T.C)(o, i, r[a]),
                                                        easing: (l = a, (0, S.N)(n) ? n[M(0, n.length, l)] : n)
                                                    })
                                                }
                                            }(r, a, p, u, R, L), E = Math.max(k + m, E), f = Math.max(L, f)
                                    };
                                if ((0, k.i)(h)) R(p, m, x("default", L(h, a)));
                                else {
                                    let e = (0, i.I)(h, r, s),
                                        t = e.length;
                                    for (let n = 0; n < t; n++) {
                                        let r = L(e[n], a);
                                        for (let e in p) R(p[e], m[e] ? { ...m,
                                            ...m[e]
                                        } : { ...m
                                        }, x(e, r), n, t)
                                    }
                                    c = d, d += E
                                }
                            }
                            return a.forEach((e, r) => {
                                for (let o in e) {
                                    let i = e[o];
                                    i.sort(R);
                                    let a = [],
                                        s = [],
                                        u = [];
                                    for (let e = 0; e < i.length; e++) {
                                        let {
                                            at: t,
                                            value: n,
                                            easing: r
                                        } = i[e];
                                        a.push(n), s.push((0, E.Y)(0, f, t)), u.push(r || "easeOut")
                                    }
                                    0 !== s[0] && (s.unshift(0), a.unshift(a[0]), u.unshift("easeInOut")), 1 !== s[s.length - 1] && (s.push(1), a.push(null)), l.has(r) || l.set(r, {
                                        keyframes: {},
                                        transition: {}
                                    });
                                    let c = l.get(r);
                                    c.keyframes[o] = a, c.transition[o] = { ...t,
                                        duration: f,
                                        ease: u,
                                        times: s,
                                        ...n
                                    }
                                }
                            }), l
                        })(e, t, n).forEach(({
                            keyframes: e,
                            transition: t
                        }, n) => {
                            let o;
                            o = (0, k.i)(n) ? (0, m.D)(n, e.default, t.default) : _(n, e, t), r.push(o)
                        }), new c(r)
                    }(t, n, e) : "object" != typeof n || Array.isArray(n) ? (0, m.D)(t, n, r) : _(t, n, r, e), e && e.animations.push(o), o
                };

            function H() {
                let e = (0, r.h)(() => ({
                        current: null,
                        animations: []
                    })),
                    t = (0, r.h)(() => D(e));
                return (0, o.z)(() => {
                    e.animations.forEach(e => e.stop())
                }), [e, t]
            }
            D()
        },
        66865: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return d
                }
            });
            var r = n(61434),
                o = n(86708),
                i = n(48904),
                l = n(18644),
                a = n(24346),
                s = n(63048),
                u = n(81840);
            let c = { ...l.s,
                    ...i.E,
                    ...a.o,
                    ...u.b
                },
                d = (0, r.D)((e, t) => (0, o.w)(e, t, c, s.b))
        },
        66612: function(e, t, n) {
            "use strict";
            n.d(t, {
                p: function() {
                    return l
                }
            });
            var r = n(2784),
                o = n(60976),
                i = n(62972);

            function l(e) {
                let t = (0, r.useRef)(0),
                    {
                        isStatic: n
                    } = (0, r.useContext)(o._);
                (0, r.useEffect)(() => {
                    if (n) return;
                    let r = ({
                        timestamp: n,
                        delta: r
                    }) => {
                        t.current || (t.current = n), e(n - t.current, r)
                    };
                    return i.Wi.update(r, !0), () => (0, i.Pn)(r)
                }, [e])
            }
        },
        58420: function(e, t, n) {
            "use strict";
            n.d(t, {
                oC: function() {
                    return l
                }
            });
            var r = n(2784),
                o = n(752),
                i = n(87809);

            function l(e, t) {
                let n = (0, o.b9)(e, t);
                return (0, r.useCallback)(() => n(i.td), [n])
            }
        },
        87809: function(e, t, n) {
            "use strict";
            n.d(t, {
                rw: function() {
                    return l
                },
                td: function() {
                    return i
                }
            });
            var r, o = n(65058);
            let i = Symbol();

            function l(e) {
                let t = (0, o.cn)(e, (n, r, o) => {
                    let l = "function" == typeof o ? o(n(t)) : o;
                    r(t, l === i ? e : l)
                });
                return t
            }
            r = () => "undefined" != typeof window ? window.localStorage : void 0, "undefined" != typeof window && "function" == typeof window.addEventListener && window.Storage && ((e, t, n) => {
                if (!(r() instanceof window.Storage)) return () => {};
                let o = o => {
                    if (o.storageArea === r() && o.key === e) {
                        let e;
                        try {
                            e = JSON.parse(o.newValue || "")
                        } catch {
                            e = n
                        }
                        t(e)
                    }
                };
                return window.addEventListener("storage", o), () => {
                    window.removeEventListener("storage", o)
                }
            })
        },
        96150: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return r
                }
            });
            let r = (e, t = 21) => (n = t) => {
                let r = "",
                    o = n;
                for (; o--;) r += e[Math.random() * e.length | 0];
                return r
            }
        },
        90966: function(e, t, n) {
            "use strict";
            let r, o, i, l;
            n.d(t, {
                r: function() {
                    return j
                }
            });
            var a, s = n(2784),
                u = n.t(s, 2);

            function c() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return Array.from(new Set(t.flatMap(e => "string" == typeof e ? e.split(" ") : []))).filter(Boolean).join(" ")
            }
            var d = ((r = d || {})[r.None = 0] = "None", r[r.RenderStrategy = 1] = "RenderStrategy", r[r.Static = 2] = "Static", r),
                f = ((o = f || {})[o.Unmount = 0] = "Unmount", o[o.Hidden = 1] = "Hidden", o);

            function h(e) {
                let {
                    ourProps: t,
                    theirProps: n,
                    slot: r,
                    defaultTag: o,
                    features: i,
                    visible: l = !0,
                    name: a
                } = e, s = m(n, t);
                if (l) return p(s, r, o, a);
                let u = null != i ? i : 0;
                if (2 & u) {
                    let {
                        static: e = !1,
                        ...t
                    } = s;
                    if (e) return p(t, r, o, a)
                }
                if (1 & u) {
                    let {
                        unmount: e = !0,
                        ...t
                    } = s;
                    return function e(t, n) {
                        for (var r = arguments.length, o = Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) o[i - 2] = arguments[i];
                        if (t in n) {
                            let e = n[t];
                            return "function" == typeof e ? e(...o) : e
                        }
                        let l = Error('Tried to handle "'.concat(t, '" but there is no handler defined. Only defined handlers are: ').concat(Object.keys(n).map(e => '"'.concat(e, '"')).join(", "), "."));
                        throw Error.captureStackTrace && Error.captureStackTrace(l, e), l
                    }(e ? 0 : 1, {
                        0: () => null,
                        1: () => p({ ...t,
                            hidden: !0,
                            style: {
                                display: "none"
                            }
                        }, r, o, a)
                    })
                }
                return p(s, r, o, a)
            }

            function p(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    {
                        as: o = n,
                        children: i,
                        refName: l = "ref",
                        ...a
                    } = v(e, ["unmount", "static"]),
                    u = void 0 !== e.ref ? {
                        [l]: e.ref
                    } : {},
                    d = "function" == typeof i ? i(t) : i;
                "className" in a && a.className && "function" == typeof a.className && (a.className = a.className(t));
                let f = {};
                if (t) {
                    let e = !1,
                        n = [];
                    for (let [r, o] of Object.entries(t)) "boolean" == typeof o && (e = !0), !0 === o && n.push(r);
                    e && (f["data-headlessui-state"] = n.join(" "))
                }
                if (o === s.Fragment && Object.keys(b(a)).length > 0) {
                    if (!(0, s.isValidElement)(d) || Array.isArray(d) && d.length > 1) throw Error(['Passing props on "Fragment"!', "", "The current component <".concat(r, ' /> is rendering a "Fragment".'), "However we need to passthrough the following props:", Object.keys(a).map(e => "  - ".concat(e)).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(e => "  - ".concat(e)).join("\n")].join("\n"));
                    let e = d.props,
                        t = "function" == typeof(null == e ? void 0 : e.className) ? function() {
                            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            return c(null == e ? void 0 : e.className(...n), a.className)
                        } : c(null == e ? void 0 : e.className, a.className);
                    return (0, s.cloneElement)(d, Object.assign({}, m(d.props, b(v(a, ["ref"]))), f, u, function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return {
                            ref: t.every(e => null == e) ? void 0 : e => {
                                for (let n of t) null != n && ("function" == typeof n ? n(e) : n.current = e)
                            }
                        }
                    }(d.ref, u.ref), t ? {
                        className: t
                    } : {}))
                }
                return (0, s.createElement)(o, Object.assign({}, v(a, ["ref"]), o !== s.Fragment && u, o !== s.Fragment && f), d)
            }

            function m() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (0 === t.length) return {};
                if (1 === t.length) return t[0];
                let r = {},
                    o = {};
                for (let e of t)
                    for (let t in e) t.startsWith("on") && "function" == typeof e[t] ? (null != o[t] || (o[t] = []), o[t].push(e[t])) : r[t] = e[t];
                if (r.disabled || r["aria-disabled"]) return Object.assign(r, Object.fromEntries(Object.keys(o).map(e => [e, void 0])));
                for (let e in o) Object.assign(r, {
                    [e](t) {
                        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                        for (let n of o[e]) {
                            if ((t instanceof Event || (null == t ? void 0 : t.nativeEvent) instanceof Event) && t.defaultPrevented) return;
                            n(t, ...r)
                        }
                    }
                });
                return r
            }

            function g(e) {
                var t;
                return Object.assign((0, s.forwardRef)(e), {
                    displayName: null != (t = e.displayName) ? t : e.name
                })
            }

            function b(e) {
                let t = Object.assign({}, e);
                for (let e in t) void 0 === t[e] && delete t[e];
                return t
            }

            function v(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = Object.assign({}, e);
                for (let e of t) e in n && delete n[e];
                return n
            }
            var y = Object.defineProperty,
                w = (e, t, n) => t in e ? y(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                E = (e, t, n) => (w(e, "symbol" != typeof t ? t + "" : t, n), n);
            class k {
                set(e) {
                    this.current !== e && (this.handoffState = "pending", this.currentId = 0, this.current = e)
                }
                reset() {
                    this.set(this.detect())
                }
                nextId() {
                    return ++this.currentId
                }
                get isServer() {
                    return "server" === this.current
                }
                get isClient() {
                    return "client" === this.current
                }
                detect() {
                    return "undefined" == typeof document ? "server" : "client"
                }
                handoff() {
                    "pending" === this.handoffState && (this.handoffState = "complete")
                }
                get isHandoffComplete() {
                    return "complete" === this.handoffState
                }
                constructor() {
                    E(this, "current", this.detect()), E(this, "handoffState", "pending"), E(this, "currentId", 0)
                }
            }
            let C = new k,
                M = (e, t) => {
                    C.isServer ? (0, s.useEffect)(e, t) : (0, s.useLayoutEffect)(e, t)
                },
                S = null != (a = s.useId) ? a : function() {
                    let e = function() {
                            let e;
                            let t = (e = "undefined" == typeof document, (0, u.useSyncExternalStore)(() => () => {}, () => !1, () => !e)),
                                [n, r] = s.useState(C.isHandoffComplete);
                            return n && !1 === C.isHandoffComplete && r(!1), s.useEffect(() => {
                                !0 !== n && r(!0)
                            }, [n]), s.useEffect(() => C.handoff(), []), !t && n
                        }(),
                        [t, n] = s.useState(e ? () => C.nextId() : null);
                    return M(() => {
                        null === t && n(C.nextId())
                    }, [t]), null != t ? "" + t : void 0
                };
            var A = ((i = A || {}).Space = " ", i.Enter = "Enter", i.Escape = "Escape", i.Backspace = "Backspace", i.Delete = "Delete", i.ArrowLeft = "ArrowLeft", i.ArrowUp = "ArrowUp", i.ArrowRight = "ArrowRight", i.ArrowDown = "ArrowDown", i.Home = "Home", i.End = "End", i.PageUp = "PageUp", i.PageDown = "PageDown", i.Tab = "Tab", i);
            let T = function(e) {
                    let t;
                    let n = (t = (0, s.useRef)(e), M(() => {
                        t.current = e
                    }, [e]), t);
                    return s.useCallback(function() {
                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        return n.current(...t)
                    }, [n])
                },
                R = Symbol();

            function L() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let r = (0, s.useRef)(t);
                (0, s.useEffect)(() => {
                    r.current = t
                }, [t]);
                let o = T(e => {
                    for (let t of r.current) null != t && ("function" == typeof t ? t(e) : t.current = e)
                });
                return t.every(e => null == e || (null == e ? void 0 : e[R])) ? void 0 : o
            }
            let x = (0, s.createContext)(null),
                I = Object.assign(g(function(e, t) {
                    let n = S(),
                        {
                            id: r = "headlessui-label-".concat(n),
                            passive: o = !1,
                            ...i
                        } = e,
                        l = function e() {
                            let t = (0, s.useContext)(x);
                            if (null === t) {
                                let t = Error("You used a <Label /> component, but it is not inside a relevant parent.");
                                throw Error.captureStackTrace && Error.captureStackTrace(t, e), t
                            }
                            return t
                        }(),
                        a = L(t);
                    M(() => l.register(r), [r, l.register]);
                    let u = {
                        ref: a,
                        ...l.props,
                        id: r
                    };
                    return o && ("onClick" in u && (delete u.htmlFor, delete u.onClick), "onClick" in i && delete i.onClick), h({
                        ourProps: u,
                        theirProps: i,
                        slot: l.slot || {},
                        defaultTag: "label",
                        name: l.name || "Label"
                    })
                }), {}),
                O = (0, s.createContext)(null),
                _ = Object.assign(g(function(e, t) {
                    let n = S(),
                        {
                            id: r = "headlessui-description-".concat(n),
                            ...o
                        } = e,
                        i = function e() {
                            let t = (0, s.useContext)(O);
                            if (null === t) {
                                let t = Error("You used a <Description /> component, but it is not inside a relevant parent.");
                                throw Error.captureStackTrace && Error.captureStackTrace(t, e), t
                            }
                            return t
                        }(),
                        l = L(t);
                    return M(() => i.register(r), [r, i.register]), h({
                        ourProps: {
                            ref: l,
                            ...i.props,
                            id: r
                        },
                        theirProps: o,
                        slot: i.slot || {},
                        defaultTag: "p",
                        name: i.name || "Description"
                    })
                }), {});

            function P(e) {
                var t;
                if (e.type) return e.type;
                let n = null != (t = e.as) ? t : "button";
                if ("string" == typeof n && "button" === n.toLowerCase()) return "button"
            }
            var D = ((l = D || {})[l.None = 1] = "None", l[l.Focusable = 2] = "Focusable", l[l.Hidden = 4] = "Hidden", l);
            let H = g(function(e, t) {
                    let {
                        features: n = 1,
                        ...r
                    } = e;
                    return h({
                        ourProps: {
                            ref: t,
                            "aria-hidden": (2 & n) == 2 || void 0,
                            style: {
                                position: "fixed",
                                top: 1,
                                left: 1,
                                width: 1,
                                height: 0,
                                padding: 0,
                                margin: -1,
                                overflow: "hidden",
                                clip: "rect(0, 0, 0, 0)",
                                whiteSpace: "nowrap",
                                borderWidth: "0",
                                ...(4 & n) == 4 && (2 & n) != 2 && {
                                    display: "none"
                                }
                            }
                        },
                        theirProps: r,
                        slot: {},
                        defaultTag: "div",
                        name: "Hidden"
                    })
                }),
                N = (0, s.createContext)(null);
            N.displayName = "GroupContext";
            let F = s.Fragment,
                j = Object.assign(g(function(e, t) {
                    let n = S(),
                        {
                            id: r = "headlessui-switch-".concat(n),
                            checked: o,
                            defaultChecked: i = !1,
                            onChange: l,
                            name: a,
                            value: u,
                            form: c,
                            ...d
                        } = e,
                        f = (0, s.useContext)(N),
                        p = (0, s.useRef)(null),
                        m = L(p, t, null === f ? null : f.setSwitch),
                        [g, v] = function(e, t, n) {
                            let [r, o] = (0, s.useState)(n), i = void 0 !== e, l = (0, s.useRef)(i), a = (0, s.useRef)(!1), u = (0, s.useRef)(!1);
                            return !i || l.current || a.current ? i || !l.current || u.current || (u.current = !0, l.current = i, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")) : (a.current = !0, l.current = i, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")), [i ? e : r, T(e => (i || o(e), null == t ? void 0 : t(e)))]
                        }(o, l, i),
                        y = T(() => null == v ? void 0 : v(!g)),
                        w = T(e => {
                            if (function(e) {
                                    let t = e.parentElement,
                                        n = null;
                                    for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
                                    let r = (null == t ? void 0 : t.getAttribute("disabled")) === "";
                                    return !(r && function(e) {
                                        if (!e) return !1;
                                        let t = e.previousElementSibling;
                                        for (; null !== t;) {
                                            if (t instanceof HTMLLegendElement) return !1;
                                            t = t.previousElementSibling
                                        }
                                        return !0
                                    }(n)) && r
                                }(e.currentTarget)) return e.preventDefault();
                            e.preventDefault(), y()
                        }),
                        E = T(e => {
                            e.key === A.Space ? (e.preventDefault(), y()) : e.key === A.Enter && function(e) {
                                var t, n;
                                let r = null != (t = null == e ? void 0 : e.form) ? t : e.closest("form");
                                if (r) {
                                    for (let t of r.elements)
                                        if (t !== e && ("INPUT" === t.tagName && "submit" === t.type || "BUTTON" === t.tagName && "submit" === t.type || "INPUT" === t.nodeName && "image" === t.type)) {
                                            t.click();
                                            return
                                        }
                                    null == (n = r.requestSubmit) || n.call(r)
                                }
                            }(e.currentTarget)
                        }),
                        k = T(e => e.preventDefault()),
                        C = (0, s.useMemo)(() => ({
                            checked: g
                        }), [g]),
                        R = {
                            id: r,
                            ref: m,
                            role: "switch",
                            type: function(e, t) {
                                let [n, r] = (0, s.useState)(() => P(e));
                                return M(() => {
                                    r(P(e))
                                }, [e.type, e.as]), M(() => {
                                    n || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && r("button")
                                }, [n, t]), n
                            }(e, p),
                            tabIndex: 0,
                            "aria-checked": g,
                            "aria-labelledby": null == f ? void 0 : f.labelledby,
                            "aria-describedby": null == f ? void 0 : f.describedby,
                            onClick: w,
                            onKeyUp: E,
                            onKeyPress: k
                        },
                        x = function() {
                            let [e] = (0, s.useState)(function e() {
                                let t = [],
                                    n = {
                                        addEventListener: (e, t, r, o) => (e.addEventListener(t, r, o), n.add(() => e.removeEventListener(t, r, o))),
                                        requestAnimationFrame() {
                                            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                            let o = requestAnimationFrame(...t);
                                            return n.add(() => cancelAnimationFrame(o))
                                        },
                                        nextFrame() {
                                            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                            return n.requestAnimationFrame(() => n.requestAnimationFrame(...t))
                                        },
                                        setTimeout() {
                                            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                            let o = setTimeout(...t);
                                            return n.add(() => clearTimeout(o))
                                        },
                                        microTask() {
                                            for (var e, t = arguments.length, r = Array(t), o = 0; o < t; o++) r[o] = arguments[o];
                                            let i = {
                                                current: !0
                                            };
                                            return e = () => {
                                                i.current && r[0]()
                                            }, "function" == typeof queueMicrotask ? queueMicrotask(e) : Promise.resolve().then(e).catch(e => setTimeout(() => {
                                                throw e
                                            })), n.add(() => {
                                                i.current = !1
                                            })
                                        },
                                        style(e, t, n) {
                                            let r = e.style.getPropertyValue(t);
                                            return Object.assign(e.style, {
                                                [t]: n
                                            }), this.add(() => {
                                                Object.assign(e.style, {
                                                    [t]: r
                                                })
                                            })
                                        },
                                        group(t) {
                                            let n = e();
                                            return t(n), this.add(() => n.dispose())
                                        },
                                        add: e => (t.push(e), () => {
                                            let n = t.indexOf(e);
                                            if (n >= 0)
                                                for (let e of t.splice(n, 1)) e()
                                        }),
                                        dispose() {
                                            for (let e of t.splice(0)) e()
                                        }
                                    };
                                return n
                            });
                            return (0, s.useEffect)(() => () => e.dispose(), [e]), e
                        }();
                    return (0, s.useEffect)(() => {
                        var e;
                        let t = null == (e = p.current) ? void 0 : e.closest("form");
                        t && void 0 !== i && x.addEventListener(t, "reset", () => {
                            v(i)
                        })
                    }, [p, v]), s.createElement(s.Fragment, null, null != a && g && s.createElement(H, {
                        features: D.Hidden,
                        ...b({
                            as: "input",
                            type: "checkbox",
                            hidden: !0,
                            readOnly: !0,
                            form: c,
                            checked: g,
                            name: a,
                            value: u
                        })
                    }), h({
                        ourProps: R,
                        theirProps: d,
                        slot: C,
                        defaultTag: "button",
                        name: "Switch"
                    }))
                }), {
                    Group: function(e) {
                        var t;
                        let [n, r] = (0, s.useState)(null), [o, i] = function() {
                            let [e, t] = (0, s.useState)([]);
                            return [e.length > 0 ? e.join(" ") : void 0, (0, s.useMemo)(() => function(e) {
                                let n = T(e => (t(t => [...t, e]), () => t(t => {
                                        let n = t.slice(),
                                            r = n.indexOf(e);
                                        return -1 !== r && n.splice(r, 1), n
                                    }))),
                                    r = (0, s.useMemo)(() => ({
                                        register: n,
                                        slot: e.slot,
                                        name: e.name,
                                        props: e.props
                                    }), [n, e.slot, e.name, e.props]);
                                return s.createElement(x.Provider, {
                                    value: r
                                }, e.children)
                            }, [t])]
                        }(), [l, a] = function() {
                            let [e, t] = (0, s.useState)([]);
                            return [e.length > 0 ? e.join(" ") : void 0, (0, s.useMemo)(() => function(e) {
                                let n = T(e => (t(t => [...t, e]), () => t(t => {
                                        let n = t.slice(),
                                            r = n.indexOf(e);
                                        return -1 !== r && n.splice(r, 1), n
                                    }))),
                                    r = (0, s.useMemo)(() => ({
                                        register: n,
                                        slot: e.slot,
                                        name: e.name,
                                        props: e.props
                                    }), [n, e.slot, e.name, e.props]);
                                return s.createElement(O.Provider, {
                                    value: r
                                }, e.children)
                            }, [t])]
                        }(), u = (0, s.useMemo)(() => ({
                            switch: n,
                            setSwitch: r,
                            labelledby: o,
                            describedby: l
                        }), [n, r, o, l]);
                        return s.createElement(a, {
                            name: "Switch.Description"
                        }, s.createElement(i, {
                            name: "Switch.Label",
                            props: {
                                htmlFor: null == (t = u.switch) ? void 0 : t.id,
                                onClick(e) {
                                    n && ("LABEL" === e.currentTarget.tagName && e.preventDefault(), n.click(), n.focus({
                                        preventScroll: !0
                                    }))
                                }
                            }
                        }, s.createElement(N.Provider, {
                            value: u
                        }, h({
                            ourProps: {},
                            theirProps: e,
                            defaultTag: F,
                            name: "Switch.Group"
                        }))))
                    },
                    Label: I,
                    Description: _
                })
        },
        78283: function(e, t, n) {
            "use strict";
            n.d(t, {
                j: function() {
                    return i
                }
            });
            var r = n(38341),
                o = n(6512);

            function i(e, t) {
                let n = (0, o.Q)(e),
                    i = (0, o.Q)(t),
                    a = l(n, i),
                    s = Math.abs((0, r.w)(n, i));
                n.setDate(n.getDate() - a * s);
                let u = Number(l(n, i) === -a),
                    c = a * (s - u);
                return 0 === c ? 0 : c
            }

            function l(e, t) {
                let n = e.getFullYear() - t.getFullYear() || e.getMonth() - t.getMonth() || e.getDate() - t.getDate() || e.getHours() - t.getHours() || e.getMinutes() - t.getMinutes() || e.getSeconds() - t.getSeconds() || e.getMilliseconds() - t.getMilliseconds();
                return n < 0 ? -1 : n > 0 ? 1 : n
            }
        },
        85293: function(e, t, n) {
            "use strict";
            n.d(t, {
                Q: function() {
                    return u
                }
            });
            var r = n(6512);

            function o(e, t) {
                let n = (0, r.Q)(e),
                    o = (0, r.Q)(t),
                    i = n.getTime() - o.getTime();
                return i < 0 ? -1 : i > 0 ? 1 : i
            }
            var i = n(99662),
                l = n(96931),
                a = n(53366),
                s = n(29892);

            function u(e, t) {
                return function(e, t, n) {
                    var u, c, d, f, h;
                    let p, m, g;
                    let b = (0, a.j)(),
                        v = null !== (c = null !== (u = null == n ? void 0 : n.locale) && void 0 !== u ? u : b.locale) && void 0 !== c ? c : l._,
                        y = o(e, t);
                    if (isNaN(y)) throw RangeError("Invalid time value");
                    let w = Object.assign({}, n, {
                        addSuffix: null == n ? void 0 : n.addSuffix,
                        comparison: y
                    });
                    y > 0 ? (p = (0, r.Q)(t), m = (0, r.Q)(e)) : (p = (0, r.Q)(e), m = (0, r.Q)(t));
                    let E = (d = m, f = p, (0, Math.trunc)(((0, r.Q)(d).getTime() - (0, r.Q)(f).getTime()) / 1e3)),
                        k = Math.round((E - ((0, s.D)(m) - (0, s.D)(p)) / 1e3) / 60);
                    if (k < 2) {
                        if (null == n ? void 0 : n.includeSeconds) {
                            if (E < 5) return v.formatDistance("lessThanXSeconds", 5, w);
                            if (E < 10) return v.formatDistance("lessThanXSeconds", 10, w);
                            if (E < 20) return v.formatDistance("lessThanXSeconds", 20, w);
                            if (E < 40) return v.formatDistance("halfAMinute", 0, w);
                            else if (E < 60) return v.formatDistance("lessThanXMinutes", 1, w);
                            else return v.formatDistance("xMinutes", 1, w)
                        }
                        return 0 === k ? v.formatDistance("lessThanXMinutes", 1, w) : v.formatDistance("xMinutes", k, w)
                    }
                    if (k < 45) return v.formatDistance("xMinutes", k, w);
                    if (k < 90) return v.formatDistance("aboutXHours", 1, w);
                    if (k < i.H_) return v.formatDistance("aboutXHours", Math.round(k / 60), w);
                    if (k < 2520) return v.formatDistance("xDays", 1, w);
                    if (k < i.fH) {
                        let e = Math.round(k / i.H_);
                        return v.formatDistance("xDays", e, w)
                    }
                    if (k < 2 * i.fH) return g = Math.round(k / i.fH), v.formatDistance("aboutXMonths", g, w);
                    if ((g = function(e, t) {
                            let n;
                            let i = (0, r.Q)(e),
                                l = (0, r.Q)(t),
                                a = o(i, l),
                                s = Math.abs(function(e, t) {
                                    let n = (0, r.Q)(e),
                                        o = (0, r.Q)(t);
                                    return 12 * (n.getFullYear() - o.getFullYear()) + (n.getMonth() - o.getMonth())
                                }(i, l));
                            if (s < 1) n = 0;
                            else {
                                1 === i.getMonth() && i.getDate() > 27 && i.setDate(30), i.setMonth(i.getMonth() - a * s);
                                let t = o(i, l) === -a;
                                (function(e) {
                                    let t = (0, r.Q)(e);
                                    return + function(e) {
                                        let t = (0, r.Q)(e);
                                        return t.setHours(23, 59, 59, 999), t
                                    }(t) == + function(e) {
                                        let t = (0, r.Q)(e),
                                            n = t.getMonth();
                                        return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
                                    }(t)
                                })((0, r.Q)(e)) && 1 === s && 1 === o(e, l) && (t = !1), n = a * (s - Number(t))
                            }
                            return 0 === n ? 0 : n
                        }(m, p)) < 12) {
                        let e = Math.round(k / i.fH);
                        return v.formatDistance("xMonths", e, w)
                    } {
                        let e = g % 12,
                            t = Math.floor(g / 12);
                        return e < 3 ? v.formatDistance("aboutXYears", t, w) : e < 9 ? v.formatDistance("overXYears", t, w) : v.formatDistance("almostXYears", t + 1, w)
                    }
                }(e, Date.now(), t)
            }
        },
        32357: function(e, t, n) {
            "use strict";
            n.d(t, {
                Cr: function() {
                    return N
                },
                G3: function() {
                    return ep
                },
                II: function() {
                    return $
                },
                I_: function() {
                    return R
                },
                JX: function() {
                    return H
                },
                VH: function() {
                    return es
                },
                WQ: function() {
                    return z
                },
                Xc: function() {
                    return E
                },
                dO: function() {
                    return B
                },
                dl: function() {
                    return _
                },
                e2: function() {
                    return L
                },
                eA: function() {
                    return x
                },
                nA: function() {
                    return W
                },
                qK: function() {
                    return P
                },
                tp: function() {
                    return S
                },
                wb: function() {
                    return F
                },
                z2: function() {
                    return O
                }
            });
            var r, o, i = n(27191),
                l = n(30764),
                a = n(52780),
                s = n(49080),
                u = n(26151);
            if ("undefined" != typeof WeakMap) {
                let e = new WeakMap;
                r = t => e.get(t), o = (t, n) => (e.set(t, n), n)
            } else {
                let e = [],
                    t = 0;
                r = t => {
                    for (let n = 0; n < e.length; n += 2)
                        if (e[n] == t) return e[n + 1]
                }, o = (n, r) => (10 == t && (t = 0), e[t++] = n, e[t++] = r)
            }
            var c = class {
                constructor(e, t, n, r) {
                    this.width = e, this.height = t, this.map = n, this.problems = r
                }
                findCell(e) {
                    for (let t = 0; t < this.map.length; t++) {
                        let n = this.map[t];
                        if (n != e) continue;
                        let r = t % this.width,
                            o = t / this.width | 0,
                            i = r + 1,
                            l = o + 1;
                        for (let e = 1; i < this.width && this.map[t + e] == n; e++) i++;
                        for (let e = 1; l < this.height && this.map[t + this.width * e] == n; e++) l++;
                        return {
                            left: r,
                            top: o,
                            right: i,
                            bottom: l
                        }
                    }
                    throw RangeError(`No cell with offset ${e} found`)
                }
                colCount(e) {
                    for (let t = 0; t < this.map.length; t++)
                        if (this.map[t] == e) return t % this.width;
                    throw RangeError(`No cell with offset ${e} found`)
                }
                nextCell(e, t, n) {
                    let {
                        left: r,
                        right: o,
                        top: i,
                        bottom: l
                    } = this.findCell(e);
                    return "horiz" == t ? (n < 0 ? 0 == r : o == this.width) ? null : this.map[i * this.width + (n < 0 ? r - 1 : o)] : (n < 0 ? 0 == i : l == this.height) ? null : this.map[r + this.width * (n < 0 ? i - 1 : l)]
                }
                rectBetween(e, t) {
                    let {
                        left: n,
                        right: r,
                        top: o,
                        bottom: i
                    } = this.findCell(e), {
                        left: l,
                        right: a,
                        top: s,
                        bottom: u
                    } = this.findCell(t);
                    return {
                        left: Math.min(n, l),
                        top: Math.min(o, s),
                        right: Math.max(r, a),
                        bottom: Math.max(i, u)
                    }
                }
                cellsInRect(e) {
                    let t = [],
                        n = {};
                    for (let r = e.top; r < e.bottom; r++)
                        for (let o = e.left; o < e.right; o++) {
                            let i = r * this.width + o,
                                l = this.map[i];
                            if (!n[l]) {
                                if (n[l] = !0, o == e.left && o && this.map[i - 1] == l || r == e.top && r && this.map[i - this.width] == l) continue;
                                t.push(l)
                            }
                        }
                    return t
                }
                positionAt(e, t, n) {
                    for (let r = 0, o = 0;; r++) {
                        let i = o + n.child(r).nodeSize;
                        if (r == e) {
                            let n = t + e * this.width,
                                r = (e + 1) * this.width;
                            for (; n < r && this.map[n] < o;) n++;
                            return n == r ? i - 1 : this.map[n]
                        }
                        o = i
                    }
                }
                static get(e) {
                    return r(e) || o(e, function(e) {
                        if ("table" != e.type.spec.tableRole) throw RangeError("Not a table node: " + e.type.name);
                        let t = function(e) {
                                let t = -1,
                                    n = !1;
                                for (let r = 0; r < e.childCount; r++) {
                                    let o = e.child(r),
                                        i = 0;
                                    if (n)
                                        for (let t = 0; t < r; t++) {
                                            let n = e.child(t);
                                            for (let e = 0; e < n.childCount; e++) {
                                                let o = n.child(e);
                                                t + o.attrs.rowspan > r && (i += o.attrs.colspan)
                                            }
                                        }
                                    for (let e = 0; e < o.childCount; e++) {
                                        let t = o.child(e);
                                        i += t.attrs.colspan, t.attrs.rowspan > 1 && (n = !0)
                                    } - 1 == t ? t = i : t != i && (t = Math.max(t, i))
                                }
                                return t
                            }(e),
                            n = e.childCount,
                            r = [],
                            o = 0,
                            i = null,
                            l = [];
                        for (let e = 0, o = t * n; e < o; e++) r[e] = 0;
                        for (let a = 0, s = 0; a < n; a++) {
                            let u = e.child(a);
                            s++;
                            for (let e = 0;; e++) {
                                for (; o < r.length && 0 != r[o];) o++;
                                if (e == u.childCount) break;
                                let c = u.child(e),
                                    {
                                        colspan: d,
                                        rowspan: f,
                                        colwidth: h
                                    } = c.attrs;
                                for (let e = 0; e < f; e++) {
                                    if (e + a >= n) {
                                        (i || (i = [])).push({
                                            type: "overlong_rowspan",
                                            pos: s,
                                            n: f - e
                                        });
                                        break
                                    }
                                    let u = o + e * t;
                                    for (let e = 0; e < d; e++) {
                                        0 == r[u + e] ? r[u + e] = s : (i || (i = [])).push({
                                            type: "collision",
                                            row: a,
                                            pos: s,
                                            n: d - e
                                        });
                                        let n = h && h[e];
                                        if (n) {
                                            let r = (u + e) % t * 2,
                                                o = l[r];
                                            null == o || o != n && 1 == l[r + 1] ? (l[r] = n, l[r + 1] = 1) : o == n && l[r + 1]++
                                        }
                                    }
                                }
                                o += d, s += c.nodeSize
                            }
                            let c = (a + 1) * t,
                                d = 0;
                            for (; o < c;) 0 == r[o++] && d++;
                            d && (i || (i = [])).push({
                                type: "missing",
                                row: a,
                                n: d
                            }), s++
                        }(0 === t || 0 === n) && (i || (i = [])).push({
                            type: "zero_sized"
                        });
                        let a = new c(t, n, r, i),
                            s = !1;
                        for (let e = 0; !s && e < l.length; e += 2) null != l[e] && l[e + 1] < n && (s = !0);
                        return s && function(e, t, n) {
                            e.problems || (e.problems = []);
                            let r = {};
                            for (let o = 0; o < e.map.length; o++) {
                                let i = e.map[o];
                                if (r[i]) continue;
                                r[i] = !0;
                                let l = n.nodeAt(i);
                                if (!l) throw RangeError(`No cell with offset ${i} found`);
                                let a = null,
                                    s = l.attrs;
                                for (let n = 0; n < s.colspan; n++) {
                                    let r = t[(o + n) % e.width * 2];
                                    null == r || s.colwidth && s.colwidth[n] == r || ((a || (a = function(e) {
                                        if (e.colwidth) return e.colwidth.slice();
                                        let t = [];
                                        for (let n = 0; n < e.colspan; n++) t.push(0);
                                        return t
                                    }(s)))[n] = r)
                                }
                                a && e.problems.unshift({
                                    type: "colwidth mismatch",
                                    pos: i,
                                    colwidth: a
                                })
                            }
                        }(a, l, e), a
                    }(e))
                }
            };

            function d(e) {
                let t = e.cached.tableNodeTypes;
                if (!t)
                    for (let n in t = e.cached.tableNodeTypes = {}, e.nodes) {
                        let r = e.nodes[n],
                            o = r.spec.tableRole;
                        o && (t[o] = r)
                    }
                return t
            }
            var f = new i.H$("selectingCells");

            function h(e) {
                for (let t = e.depth - 1; t > 0; t--)
                    if ("row" == e.node(t).type.spec.tableRole) return e.node(0).resolve(e.before(t + 1));
                return null
            }

            function p(e) {
                let t = e.selection.$head;
                for (let e = t.depth; e > 0; e--)
                    if ("row" == t.node(e).type.spec.tableRole) return !0;
                return !1
            }

            function m(e) {
                let t = e.selection;
                if ("$anchorCell" in t && t.$anchorCell) return t.$anchorCell.pos > t.$headCell.pos ? t.$anchorCell : t.$headCell;
                if ("node" in t && t.node && "cell" == t.node.type.spec.tableRole) return t.$anchor;
                let n = h(t.$head) || function(e) {
                    for (let t = e.nodeAfter, n = e.pos; t; t = t.firstChild, n++) {
                        let r = t.type.spec.tableRole;
                        if ("cell" == r || "header_cell" == r) return e.doc.resolve(n)
                    }
                    for (let t = e.nodeBefore, n = e.pos; t; t = t.lastChild, n--) {
                        let r = t.type.spec.tableRole;
                        if ("cell" == r || "header_cell" == r) return e.doc.resolve(n - t.nodeSize)
                    }
                }(t.$head);
                if (n) return n;
                throw RangeError(`No cell found around position ${t.head}`)
            }

            function g(e) {
                return "row" == e.parent.type.spec.tableRole && !!e.nodeAfter
            }

            function b(e, t) {
                return e.depth == t.depth && e.pos >= t.start(-1) && e.pos <= t.end(-1)
            }

            function v(e, t, n) {
                let r = e.node(-1),
                    o = c.get(r),
                    i = e.start(-1),
                    l = o.nextCell(e.pos - i, t, n);
                return null == l ? null : e.node(0).resolve(i + l)
            }

            function y(e, t, n = 1) {
                let r = { ...e,
                    colspan: e.colspan - n
                };
                return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(t, n), r.colwidth.some(e => e > 0) || (r.colwidth = null)), r
            }

            function w(e, t, n = 1) {
                let r = { ...e,
                    colspan: e.colspan + n
                };
                if (r.colwidth) {
                    r.colwidth = r.colwidth.slice();
                    for (let e = 0; e < n; e++) r.colwidth.splice(t, 0, 0)
                }
                return r
            }
            var E = class e extends i.Y1 {
                constructor(e, t = e) {
                    let n = e.node(-1),
                        r = c.get(n),
                        o = e.start(-1),
                        l = r.rectBetween(e.pos - o, t.pos - o),
                        a = e.node(0),
                        s = r.cellsInRect(l).filter(e => e != t.pos - o);
                    s.unshift(t.pos - o);
                    let u = s.map(e => {
                        let t = n.nodeAt(e);
                        if (!t) throw RangeError(`No cell with offset ${e} found`);
                        let r = o + e + 1;
                        return new i.xm(a.resolve(r), a.resolve(r + t.content.size))
                    });
                    super(u[0].$from, u[0].$to, u), this.$anchorCell = e, this.$headCell = t
                }
                map(t, n) {
                    let r = t.resolve(n.map(this.$anchorCell.pos)),
                        o = t.resolve(n.map(this.$headCell.pos));
                    if (g(r) && g(o) && b(r, o)) {
                        let t = this.$anchorCell.node(-1) != r.node(-1);
                        return t && this.isRowSelection() ? e.rowSelection(r, o) : t && this.isColSelection() ? e.colSelection(r, o) : new e(r, o)
                    }
                    return i.Bs.between(r, o)
                }
                content() {
                    let e = this.$anchorCell.node(-1),
                        t = c.get(e),
                        n = this.$anchorCell.start(-1),
                        r = t.rectBetween(this.$anchorCell.pos - n, this.$headCell.pos - n),
                        o = {},
                        i = [];
                    for (let n = r.top; n < r.bottom; n++) {
                        let a = [];
                        for (let i = n * t.width + r.left, l = r.left; l < r.right; l++, i++) {
                            let n = t.map[i];
                            if (o[n]) continue;
                            o[n] = !0;
                            let l = t.findCell(n),
                                s = e.nodeAt(n);
                            if (!s) throw RangeError(`No cell with offset ${n} found`);
                            let u = r.left - l.left,
                                c = l.right - r.right;
                            if (u > 0 || c > 0) {
                                let e = s.attrs;
                                if (u > 0 && (e = y(e, 0, u)), c > 0 && (e = y(e, e.colspan - c, c)), l.left < r.left) {
                                    if (!(s = s.type.createAndFill(e))) throw RangeError(`Could not create cell with attrs ${JSON.stringify(e)}`)
                                } else s = s.type.create(e, s.content)
                            }
                            if (l.top < r.top || l.bottom > r.bottom) {
                                let e = { ...s.attrs,
                                    rowspan: Math.min(l.bottom, r.bottom) - Math.max(l.top, r.top)
                                };
                                s = l.top < r.top ? s.type.createAndFill(e) : s.type.create(e, s.content)
                            }
                            a.push(s)
                        }
                        i.push(e.child(n).copy(l.HY.from(a)))
                    }
                    let a = this.isColSelection() && this.isRowSelection() ? e : i;
                    return new l.p2(l.HY.from(a), 1, 1)
                }
                replace(e, t = l.p2.empty) {
                    let n = e.steps.length,
                        r = this.ranges;
                    for (let o = 0; o < r.length; o++) {
                        let {
                            $from: i,
                            $to: a
                        } = r[o], s = e.mapping.slice(n);
                        e.replace(s.map(i.pos), s.map(a.pos), o ? l.p2.empty : t)
                    }
                    let o = i.Y1.findFrom(e.doc.resolve(e.mapping.slice(n).map(this.to)), -1);
                    o && e.setSelection(o)
                }
                replaceWith(e, t) {
                    this.replace(e, new l.p2(l.HY.from(t), 0, 0))
                }
                forEachCell(e) {
                    let t = this.$anchorCell.node(-1),
                        n = c.get(t),
                        r = this.$anchorCell.start(-1),
                        o = n.cellsInRect(n.rectBetween(this.$anchorCell.pos - r, this.$headCell.pos - r));
                    for (let n = 0; n < o.length; n++) e(t.nodeAt(o[n]), r + o[n])
                }
                isColSelection() {
                    let e = this.$anchorCell.index(-1),
                        t = this.$headCell.index(-1);
                    return !(Math.min(e, t) > 0) && Math.max(e + this.$anchorCell.nodeAfter.attrs.rowspan, t + this.$headCell.nodeAfter.attrs.rowspan) == this.$headCell.node(-1).childCount
                }
                static colSelection(t, n = t) {
                    let r = t.node(-1),
                        o = c.get(r),
                        i = t.start(-1),
                        l = o.findCell(t.pos - i),
                        a = o.findCell(n.pos - i),
                        s = t.node(0);
                    return l.top <= a.top ? (l.top > 0 && (t = s.resolve(i + o.map[l.left])), a.bottom < o.height && (n = s.resolve(i + o.map[o.width * (o.height - 1) + a.right - 1]))) : (a.top > 0 && (n = s.resolve(i + o.map[a.left])), l.bottom < o.height && (t = s.resolve(i + o.map[o.width * (o.height - 1) + l.right - 1]))), new e(t, n)
                }
                isRowSelection() {
                    let e = this.$anchorCell.node(-1),
                        t = c.get(e),
                        n = this.$anchorCell.start(-1),
                        r = t.colCount(this.$anchorCell.pos - n),
                        o = t.colCount(this.$headCell.pos - n);
                    return !(Math.min(r, o) > 0) && Math.max(r + this.$anchorCell.nodeAfter.attrs.colspan, o + this.$headCell.nodeAfter.attrs.colspan) == t.width
                }
                eq(t) {
                    return t instanceof e && t.$anchorCell.pos == this.$anchorCell.pos && t.$headCell.pos == this.$headCell.pos
                }
                static rowSelection(t, n = t) {
                    let r = t.node(-1),
                        o = c.get(r),
                        i = t.start(-1),
                        l = o.findCell(t.pos - i),
                        a = o.findCell(n.pos - i),
                        s = t.node(0);
                    return l.left <= a.left ? (l.left > 0 && (t = s.resolve(i + o.map[l.top * o.width])), a.right < o.width && (n = s.resolve(i + o.map[o.width * (a.top + 1) - 1]))) : (a.left > 0 && (n = s.resolve(i + o.map[a.top * o.width])), l.right < o.width && (t = s.resolve(i + o.map[o.width * (l.top + 1) - 1]))), new e(t, n)
                }
                toJSON() {
                    return {
                        type: "cell",
                        anchor: this.$anchorCell.pos,
                        head: this.$headCell.pos
                    }
                }
                static fromJSON(t, n) {
                    return new e(t.resolve(n.anchor), t.resolve(n.head))
                }
                static create(t, n, r = n) {
                    return new e(t.resolve(n), t.resolve(r))
                }
                getBookmark() {
                    return new k(this.$anchorCell.pos, this.$headCell.pos)
                }
            };
            E.prototype.visible = !1, i.Y1.jsonID("cell", E);
            var k = class e {
                constructor(e, t) {
                    this.anchor = e, this.head = t
                }
                map(t) {
                    return new e(t.map(this.anchor), t.map(this.head))
                }
                resolve(e) {
                    let t = e.resolve(this.anchor),
                        n = e.resolve(this.head);
                    return "row" == t.parent.type.spec.tableRole && "row" == n.parent.type.spec.tableRole && t.index() < t.parent.childCount && n.index() < n.parent.childCount && b(t, n) ? new E(t, n) : i.Y1.near(n, 1)
                }
            };

            function C(e) {
                if (!(e.selection instanceof E)) return null;
                let t = [];
                return e.selection.forEachCell((e, n) => {
                    t.push(a.p.node(n, n + e.nodeSize, {
                        class: "selectedCell"
                    }))
                }), a.EH.create(e.doc, t)
            }
            var M = new i.H$("fix-tables");

            function S(e, t) {
                let n;
                let r = (t, r) => {
                    "table" == t.type.spec.tableRole && (n = function(e, t, n, r) {
                        let o, i;
                        let l = c.get(t);
                        if (!l.problems) return r;
                        r || (r = e.tr);
                        let a = [];
                        for (let e = 0; e < l.height; e++) a.push(0);
                        for (let e = 0; e < l.problems.length; e++) {
                            let o = l.problems[e];
                            if ("collision" == o.type) {
                                let e = t.nodeAt(o.pos);
                                if (!e) continue;
                                let i = e.attrs;
                                for (let e = 0; e < i.rowspan; e++) a[o.row + e] += o.n;
                                r.setNodeMarkup(r.mapping.map(n + 1 + o.pos), null, y(i, i.colspan - o.n, o.n))
                            } else if ("missing" == o.type) a[o.row] += o.n;
                            else if ("overlong_rowspan" == o.type) {
                                let e = t.nodeAt(o.pos);
                                if (!e) continue;
                                r.setNodeMarkup(r.mapping.map(n + 1 + o.pos), null, { ...e.attrs,
                                    rowspan: e.attrs.rowspan - o.n
                                })
                            } else if ("colwidth mismatch" == o.type) {
                                let e = t.nodeAt(o.pos);
                                if (!e) continue;
                                r.setNodeMarkup(r.mapping.map(n + 1 + o.pos), null, { ...e.attrs,
                                    colwidth: o.colwidth
                                })
                            } else if ("zero_sized" == o.type) {
                                let e = r.mapping.map(n);
                                r.delete(e, e + t.nodeSize)
                            }
                        }
                        for (let e = 0; e < a.length; e++) a[e] && (null == o && (o = e), i = e);
                        for (let s = 0, u = n + 1; s < l.height; s++) {
                            let n = t.child(s),
                                l = u + n.nodeSize,
                                c = a[s];
                            if (c > 0) {
                                let t = "cell";
                                n.firstChild && (t = n.firstChild.type.spec.tableRole);
                                let a = [];
                                for (let n = 0; n < c; n++) {
                                    let n = d(e.schema)[t].createAndFill();
                                    n && a.push(n)
                                }
                                let f = (0 == s || o == s - 1) && i == s ? u + 1 : l - 1;
                                r.insert(r.mapping.map(f), a)
                            }
                            u = l
                        }
                        return r.setMeta(M, {
                            fixTables: !0
                        })
                    }(e, t, r, n))
                };
                return t ? t.doc != e.doc && function e(t, n, r, o) {
                    let i = t.childCount,
                        l = n.childCount;
                    e: for (let a = 0, s = 0; a < l; a++) {
                        let l = n.child(a);
                        for (let e = s, n = Math.min(i, a + 3); e < n; e++)
                            if (t.child(e) == l) {
                                s = e + 1, r += l.nodeSize;
                                continue e
                            }
                        o(l, r), s < i && t.child(s).sameMarkup(l) ? e(t.child(s), l, r + 1, o) : l.nodesBetween(0, l.content.size, o, r + 1), r += l.nodeSize
                    }
                }(t.doc, e.doc, 0, r) : e.doc.descendants(r), n
            }

            function A(e) {
                let t = e.selection,
                    n = m(e),
                    r = n.node(-1),
                    o = n.start(-1),
                    i = c.get(r);
                return { ...t instanceof E ? i.rectBetween(t.$anchorCell.pos - o, t.$headCell.pos - o) : i.findCell(n.pos - o),
                    tableStart: o,
                    map: i,
                    table: r
                }
            }

            function T(e, {
                map: t,
                tableStart: n,
                table: r
            }, o) {
                let i = o > 0 ? -1 : 0;
                (function(e, t, n) {
                    let r = d(t.type.schema).header_cell;
                    for (let o = 0; o < e.height; o++)
                        if (t.nodeAt(e.map[n + o * e.width]).type != r) return !1;
                    return !0
                })(t, r, o + i) && (i = 0 == o || o == t.width ? null : 0);
                for (let l = 0; l < t.height; l++) {
                    let a = l * t.width + o;
                    if (o > 0 && o < t.width && t.map[a - 1] == t.map[a]) {
                        let i = t.map[a],
                            s = r.nodeAt(i);
                        e.setNodeMarkup(e.mapping.map(n + i), null, w(s.attrs, o - t.colCount(i))), l += s.attrs.rowspan - 1
                    } else {
                        let s = null == i ? d(r.type.schema).cell : r.nodeAt(t.map[a + i]).type,
                            u = t.positionAt(l, o, r);
                        e.insert(e.mapping.map(n + u), s.createAndFill())
                    }
                }
                return e
            }

            function R(e, t) {
                if (!p(e)) return !1;
                if (t) {
                    let n = A(e);
                    t(T(e.tr, n, n.left))
                }
                return !0
            }

            function L(e, t) {
                if (!p(e)) return !1;
                if (t) {
                    let n = A(e);
                    t(T(e.tr, n, n.right))
                }
                return !0
            }

            function x(e, t) {
                if (!p(e)) return !1;
                if (t) {
                    let n = A(e),
                        r = e.tr;
                    if (0 == n.left && n.right == n.map.width) return !1;
                    for (let e = n.right - 1; ! function(e, {
                            map: t,
                            table: n,
                            tableStart: r
                        }, o) {
                            let i = e.mapping.maps.length;
                            for (let l = 0; l < t.height;) {
                                let a = l * t.width + o,
                                    s = t.map[a],
                                    u = n.nodeAt(s),
                                    c = u.attrs;
                                if (o > 0 && t.map[a - 1] == s || o < t.width - 1 && t.map[a + 1] == s) e.setNodeMarkup(e.mapping.slice(i).map(r + s), null, y(c, o - t.colCount(s)));
                                else {
                                    let t = e.mapping.slice(i).map(r + s);
                                    e.delete(t, t + u.nodeSize)
                                }
                                l += c.rowspan
                            }
                        }(r, n, e), e != n.left; e--) {
                        let e = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
                        if (!e) throw RangeError("No table found");
                        n.table = e, n.map = c.get(e)
                    }
                    t(r)
                }
                return !0
            }

            function I(e, {
                map: t,
                tableStart: n,
                table: r
            }, o) {
                var i;
                let l = n;
                for (let e = 0; e < o; e++) l += r.child(e).nodeSize;
                let a = [],
                    s = o > 0 ? -1 : 0;
                (function(e, t, n) {
                    var r;
                    let o = d(t.type.schema).header_cell;
                    for (let i = 0; i < e.width; i++)
                        if ((null == (r = t.nodeAt(e.map[i + n * e.width])) ? void 0 : r.type) != o) return !1;
                    return !0
                })(t, r, o + s) && (s = 0 == o || o == t.height ? null : 0);
                for (let l = 0, u = t.width * o; l < t.width; l++, u++)
                    if (o > 0 && o < t.height && t.map[u] == t.map[u - t.width]) {
                        let o = t.map[u],
                            i = r.nodeAt(o).attrs;
                        e.setNodeMarkup(n + o, null, { ...i,
                            rowspan: i.rowspan + 1
                        }), l += i.colspan - 1
                    } else {
                        let e = null == s ? d(r.type.schema).cell : null == (i = r.nodeAt(t.map[u + s * t.width])) ? void 0 : i.type,
                            n = null == e ? void 0 : e.createAndFill();
                        n && a.push(n)
                    }
                return e.insert(l, d(r.type.schema).row.create(null, a)), e
            }

            function O(e, t) {
                if (!p(e)) return !1;
                if (t) {
                    let n = A(e);
                    t(I(e.tr, n, n.top))
                }
                return !0
            }

            function _(e, t) {
                if (!p(e)) return !1;
                if (t) {
                    let n = A(e);
                    t(I(e.tr, n, n.bottom))
                }
                return !0
            }

            function P(e, t) {
                if (!p(e)) return !1;
                if (t) {
                    let n = A(e),
                        r = e.tr;
                    if (0 == n.top && n.bottom == n.map.height) return !1;
                    for (let e = n.bottom - 1; ! function(e, {
                            map: t,
                            table: n,
                            tableStart: r
                        }, o) {
                            let i = 0;
                            for (let e = 0; e < o; e++) i += n.child(e).nodeSize;
                            let l = i + n.child(o).nodeSize,
                                a = e.mapping.maps.length;
                            e.delete(i + r, l + r);
                            let s = new Set;
                            for (let i = 0, l = o * t.width; i < t.width; i++, l++) {
                                let u = t.map[l];
                                if (!s.has(u)) {
                                    if (s.add(u), o > 0 && u == t.map[l - t.width]) {
                                        let t = n.nodeAt(u).attrs;
                                        e.setNodeMarkup(e.mapping.slice(a).map(u + r), null, { ...t,
                                            rowspan: t.rowspan - 1
                                        }), i += t.colspan - 1
                                    } else if (o < t.height && u == t.map[l + t.width]) {
                                        let l = n.nodeAt(u),
                                            s = l.attrs,
                                            c = l.type.create({ ...s,
                                                rowspan: l.attrs.rowspan - 1
                                            }, l.content),
                                            d = t.positionAt(o + 1, i, n);
                                        e.insert(e.mapping.slice(a).map(r + d), c), i += s.colspan - 1
                                    }
                                }
                            }
                        }(r, n, e), e != n.top; e--) {
                        let e = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
                        if (!e) throw RangeError("No table found");
                        n.table = e, n.map = c.get(n.table)
                    }
                    t(r)
                }
                return !0
            }

            function D(e) {
                let t = e.content;
                return 1 == t.childCount && t.child(0).isTextblock && 0 == t.child(0).childCount
            }

            function H(e, t) {
                let n = e.selection;
                if (!(n instanceof E) || n.$anchorCell.pos == n.$headCell.pos) return !1;
                let r = A(e),
                    {
                        map: o
                    } = r;
                if (function({
                        width: e,
                        height: t,
                        map: n
                    }, r) {
                        let o = r.top * e + r.left,
                            i = o,
                            l = (r.bottom - 1) * e + r.left,
                            a = o + (r.right - r.left - 1);
                        for (let t = r.top; t < r.bottom; t++) {
                            if (r.left > 0 && n[i] == n[i - 1] || r.right < e && n[a] == n[a + 1]) return !0;
                            i += e, a += e
                        }
                        for (let i = r.left; i < r.right; i++) {
                            if (r.top > 0 && n[o] == n[o - e] || r.bottom < t && n[l] == n[l + e]) return !0;
                            o++, l++
                        }
                        return !1
                    }(o, r)) return !1;
                if (t) {
                    let n, i;
                    let a = e.tr,
                        s = {},
                        u = l.HY.empty;
                    for (let e = r.top; e < r.bottom; e++)
                        for (let t = r.left; t < r.right; t++) {
                            let l = o.map[e * o.width + t],
                                c = r.table.nodeAt(l);
                            if (!s[l] && c) {
                                if (s[l] = !0, null == n) n = l, i = c;
                                else {
                                    D(c) || (u = u.append(c.content));
                                    let e = a.mapping.map(l + r.tableStart);
                                    a.delete(e, e + c.nodeSize)
                                }
                            }
                        }
                    if (null == n || null == i) return !0;
                    if (a.setNodeMarkup(n + r.tableStart, null, { ...w(i.attrs, i.attrs.colspan, r.right - r.left - i.attrs.colspan),
                            rowspan: r.bottom - r.top
                        }), u.size) {
                        let e = n + 1 + i.content.size,
                            t = D(i) ? n + 1 : e;
                        a.replaceWith(t + r.tableStart, e + r.tableStart, u)
                    }
                    a.setSelection(new E(a.doc.resolve(n + r.tableStart))), t(a)
                }
                return !0
            }

            function N(e, t) {
                var n;
                let r = d(e.schema);
                return (n = ({
                    node: e
                }) => r[e.type.spec.tableRole], (e, t) => {
                    var r;
                    let o, i;
                    let l = e.selection;
                    if (l instanceof E) {
                        if (l.$anchorCell.pos != l.$headCell.pos) return !1;
                        o = l.$anchorCell.nodeAfter, i = l.$anchorCell.pos
                    } else {
                        if (!(o = function(e) {
                                for (let t = e.depth; t > 0; t--) {
                                    let n = e.node(t).type.spec.tableRole;
                                    if ("cell" === n || "header_cell" === n) return e.node(t)
                                }
                                return null
                            }(l.$from))) return !1;
                        i = null == (r = h(l.$from)) ? void 0 : r.pos
                    }
                    if (null == o || null == i || 1 == o.attrs.colspan && 1 == o.attrs.rowspan) return !1;
                    if (t) {
                        let r, a = o.attrs,
                            s = [],
                            u = a.colwidth;
                        a.rowspan > 1 && (a = { ...a,
                            rowspan: 1
                        }), a.colspan > 1 && (a = { ...a,
                            colspan: 1
                        });
                        let c = A(e),
                            d = e.tr;
                        for (let e = 0; e < c.right - c.left; e++) s.push(u ? { ...a,
                            colwidth: u && u[e] ? [u[e]] : null
                        } : a);
                        for (let e = c.top; e < c.bottom; e++) {
                            let t = c.map.positionAt(e, c.left, c.table);
                            e == c.top && (t += o.nodeSize);
                            for (let i = c.left, l = 0; i < c.right; i++, l++)(i != c.left || e != c.top) && d.insert(r = d.mapping.map(t + c.tableStart, 1), n({
                                node: o,
                                row: e,
                                col: i
                            }).createAndFill(s[l]))
                        }
                        d.setNodeMarkup(i, n({
                            node: o,
                            row: c.top,
                            col: c.left
                        }), s[0]), l instanceof E && d.setSelection(new E(d.doc.resolve(l.$anchorCell.pos), r ? d.doc.resolve(r) : void 0)), t(d)
                    }
                    return !0
                })(e, t)
            }

            function F(e, t) {
                return function(n, r) {
                    if (!p(n)) return !1;
                    let o = m(n);
                    if (o.nodeAfter.attrs[e] === t) return !1;
                    if (r) {
                        let i = n.tr;
                        n.selection instanceof E ? n.selection.forEachCell((n, r) => {
                            n.attrs[e] !== t && i.setNodeMarkup(r, null, { ...n.attrs,
                                [e]: t
                            })
                        }) : i.setNodeMarkup(o.pos, null, { ...o.nodeAfter.attrs,
                            [e]: t
                        }), r(i)
                    }
                    return !0
                }
            }

            function j(e, t, n) {
                let r = t.map.cellsInRect({
                    left: 0,
                    top: 0,
                    right: "row" == e ? t.map.width : 1,
                    bottom: "column" == e ? t.map.height : 1
                });
                for (let e = 0; e < r.length; e++) {
                    let o = t.table.nodeAt(r[e]);
                    if (o && o.type !== n.header_cell) return !1
                }
                return !0
            }

            function B(e, t) {
                return (t = t || {
                    useDeprecatedLogic: !1
                }).useDeprecatedLogic ? function(t, n) {
                    if (!p(t)) return !1;
                    if (n) {
                        let r = d(t.schema),
                            o = A(t),
                            i = t.tr,
                            l = o.map.cellsInRect("column" == e ? {
                                left: o.left,
                                top: 0,
                                right: o.right,
                                bottom: o.map.height
                            } : "row" == e ? {
                                left: 0,
                                top: o.top,
                                right: o.map.width,
                                bottom: o.bottom
                            } : o),
                            a = l.map(e => o.table.nodeAt(e));
                        for (let e = 0; e < l.length; e++) a[e].type == r.header_cell && i.setNodeMarkup(o.tableStart + l[e], r.cell, a[e].attrs);
                        if (0 == i.steps.length)
                            for (let e = 0; e < l.length; e++) i.setNodeMarkup(o.tableStart + l[e], r.header_cell, a[e].attrs);
                        n(i)
                    }
                    return !0
                } : function(t, n) {
                    if (!p(t)) return !1;
                    if (n) {
                        let r = d(t.schema),
                            o = A(t),
                            i = t.tr,
                            l = j("row", o, r),
                            a = j("column", o, r),
                            s = ("column" === e ? l : "row" === e && a) ? 1 : 0,
                            u = "column" == e ? {
                                left: 0,
                                top: s,
                                right: 1,
                                bottom: o.map.height
                            } : "row" == e ? {
                                left: s,
                                top: 0,
                                right: o.map.width,
                                bottom: 1
                            } : o,
                            c = "column" == e ? a ? r.cell : r.header_cell : "row" == e ? l ? r.cell : r.header_cell : r.cell;
                        o.map.cellsInRect(u).forEach(e => {
                            let t = e + o.tableStart,
                                n = i.doc.nodeAt(t);
                            n && i.setNodeMarkup(t, c, n.attrs)
                        }), n(i)
                    }
                    return !0
                }
            }
            B("row", {
                useDeprecatedLogic: !0
            }), B("column", {
                useDeprecatedLogic: !0
            });
            var $ = B("cell", {
                useDeprecatedLogic: !0
            });

            function W(e) {
                return function(t, n) {
                    if (!p(t)) return !1;
                    let r = function(e, t) {
                        if (t < 0) {
                            let t = e.nodeBefore;
                            if (t) return e.pos - t.nodeSize;
                            for (let t = e.index(-1) - 1, n = e.before(); t >= 0; t--) {
                                let r = e.node(-1).child(t),
                                    o = r.lastChild;
                                if (o) return n - 1 - o.nodeSize;
                                n -= r.nodeSize
                            }
                        } else {
                            if (e.index() < e.parent.childCount - 1) return e.pos + e.nodeAfter.nodeSize;
                            let t = e.node(-1);
                            for (let n = e.indexAfter(-1), r = e.after(); n < t.childCount; n++) {
                                let e = t.child(n);
                                if (e.childCount) return r + 1;
                                r += e.nodeSize
                            }
                        }
                        return null
                    }(m(t), e);
                    if (null == r) return !1;
                    if (n) {
                        let e = t.doc.resolve(r);
                        n(t.tr.setSelection(i.Bs.between(e, e.node(0).resolve(e.pos + e.nodeAfter.nodeSize))).scrollIntoView())
                    }
                    return !0
                }
            }

            function z(e, t) {
                let n = e.selection.$anchor;
                for (let r = n.depth; r > 0; r--)
                    if ("table" == n.node(r).type.spec.tableRole) return t && t(e.tr.delete(n.before(r), n.after(r)).scrollIntoView()), !0;
                return !1
            }

            function K(e, t) {
                let n = e.selection;
                if (!(n instanceof E)) return !1;
                if (t) {
                    let r = e.tr,
                        o = d(e.schema).cell.createAndFill().content;
                    n.forEachCell((e, t) => {
                        e.content.eq(o) || r.replace(r.mapping.map(t + 1), r.mapping.map(t + e.nodeSize - 1), new l.p2(o, 0, 0))
                    }), r.docChanged && t(r)
                }
                return !0
            }

            function U(e, t) {
                let n = e.createAndFill();
                return new u.wx(n).replace(0, n.content.size, t).doc
            }

            function V(e, t, n, r, o, i, l, a) {
                if (0 == l || l == t.height) return !1;
                let s = !1;
                for (let u = o; u < i; u++) {
                    let o = l * t.width + u,
                        i = t.map[o];
                    if (t.map[o - t.width] == i) {
                        s = !0;
                        let o = n.nodeAt(i),
                            {
                                top: c,
                                left: d
                            } = t.findCell(i);
                        e.setNodeMarkup(e.mapping.slice(a).map(i + r), null, { ...o.attrs,
                            rowspan: l - c
                        }), e.insert(e.mapping.slice(a).map(t.positionAt(l, d, n)), o.type.createAndFill({ ...o.attrs,
                            rowspan: c + o.attrs.rowspan - l
                        })), u += o.attrs.colspan - 1
                    }
                }
                return s
            }

            function Y(e, t, n, r, o, i, l, a) {
                if (0 == l || l == t.width) return !1;
                let s = !1;
                for (let u = o; u < i; u++) {
                    let o = u * t.width + l,
                        i = t.map[o];
                    if (t.map[o - 1] == i) {
                        s = !0;
                        let o = n.nodeAt(i),
                            c = t.colCount(i),
                            d = e.mapping.slice(a).map(i + r);
                        e.setNodeMarkup(d, null, y(o.attrs, l - c, o.attrs.colspan - (l - c))), e.insert(d + o.nodeSize, o.type.createAndFill(y(o.attrs, 0, l - c))), u += o.attrs.rowspan - 1
                    }
                }
                return s
            }

            function X(e, t, n, r, o) {
                let i = n ? e.doc.nodeAt(n - 1) : e.doc;
                if (!i) throw Error("No table found");
                let a = c.get(i),
                    {
                        top: s,
                        left: u
                    } = r,
                    f = u + o.width,
                    h = s + o.height,
                    p = e.tr,
                    m = 0;

                function g() {
                    if (!(i = n ? p.doc.nodeAt(n - 1) : p.doc)) throw Error("No table found");
                    a = c.get(i), m = p.mapping.maps.length
                }(function(e, t, n, r, o, i, a) {
                    let s, u;
                    let c = d(e.doc.type.schema);
                    if (o > t.width)
                        for (let i = 0, l = 0; i < t.height; i++) {
                            let a;
                            let d = n.child(i);
                            l += d.nodeSize;
                            let f = [];
                            a = null == d.lastChild || d.lastChild.type == c.cell ? s || (s = c.cell.createAndFill()) : u || (u = c.header_cell.createAndFill());
                            for (let e = t.width; e < o; e++) f.push(a);
                            e.insert(e.mapping.slice(0).map(l - 1 + r), f)
                        }
                    if (i > t.height) {
                        let a = [];
                        for (let e = 0, r = (t.height - 1) * t.width; e < Math.max(t.width, o); e++) {
                            let o = !(e >= t.width) && n.nodeAt(t.map[r + e]).type == c.header_cell;
                            a.push(o ? u || (u = c.header_cell.createAndFill()) : s || (s = c.cell.createAndFill()))
                        }
                        let d = c.row.create(null, l.HY.from(a)),
                            f = [];
                        for (let e = t.height; e < i; e++) f.push(d);
                        e.insert(e.mapping.slice(0).map(r + n.nodeSize - 2), f)
                    }
                    return !!(s || u)
                })(p, a, i, n, f, h, 0) && g(), V(p, a, i, n, u, f, s, m) && g(), V(p, a, i, n, u, f, h, m) && g(), Y(p, a, i, n, s, h, u, m) && g(), Y(p, a, i, n, s, h, f, m) && g();
                for (let e = s; e < h; e++) {
                    let t = a.positionAt(e, u, i),
                        r = a.positionAt(e, f, i);
                    p.replace(p.mapping.slice(m).map(t + n), p.mapping.slice(m).map(r + n), new l.p2(o.rows[e - s], 0, 0))
                }
                g(), p.setSelection(new E(p.doc.resolve(n + a.positionAt(s, u, i)), p.doc.resolve(n + a.positionAt(h - 1, f - 1, i)))), t(p)
            }
            var Z = (0, s.$)({
                ArrowLeft: G("horiz", -1),
                ArrowRight: G("horiz", 1),
                ArrowUp: G("vert", -1),
                ArrowDown: G("vert", 1),
                "Shift-ArrowLeft": Q("horiz", -1),
                "Shift-ArrowRight": Q("horiz", 1),
                "Shift-ArrowUp": Q("vert", -1),
                "Shift-ArrowDown": Q("vert", 1),
                Backspace: K,
                "Mod-Backspace": K,
                Delete: K,
                "Mod-Delete": K
            });

            function q(e, t, n) {
                return !n.eq(e.selection) && (t && t(e.tr.setSelection(n).scrollIntoView()), !0)
            }

            function G(e, t) {
                return (n, r, o) => {
                    if (!o) return !1;
                    let l = n.selection;
                    if (l instanceof E) return q(n, r, i.Y1.near(l.$headCell, t));
                    if ("horiz" != e && !l.empty) return !1;
                    let a = en(o, e, t);
                    if (null == a) return !1;
                    if ("horiz" == e) return q(n, r, i.Y1.near(n.doc.resolve(l.head + t), t)); {
                        let o;
                        let l = n.doc.resolve(a),
                            s = v(l, e, t);
                        return o = s ? i.Y1.near(s, 1) : t < 0 ? i.Y1.near(n.doc.resolve(l.before(-1)), -1) : i.Y1.near(n.doc.resolve(l.after(-1)), 1), q(n, r, o)
                    }
                }
            }

            function Q(e, t) {
                return (n, r, o) => {
                    let i;
                    if (!o) return !1;
                    let l = n.selection;
                    if (l instanceof E) i = l;
                    else {
                        let r = en(o, e, t);
                        if (null == r) return !1;
                        i = new E(n.doc.resolve(r))
                    }
                    let a = v(i.$headCell, e, t);
                    return !!a && q(n, r, new E(i.$anchorCell, a))
                }
            }

            function J(e, t) {
                let n = h(e.state.doc.resolve(t));
                return !!n && (e.dispatch(e.state.tr.setSelection(new E(n))), !0)
            }

            function ee(e, t, n) {
                if (!p(e.state)) return !1;
                let r = function(e) {
                        if (!e.size) return null;
                        let {
                            content: t,
                            openStart: n,
                            openEnd: r
                        } = e;
                        for (; 1 == t.childCount && (n > 0 && r > 0 || "table" == t.child(0).type.spec.tableRole);) n--, r--, t = t.child(0).content;
                        let o = t.child(0),
                            i = o.type.spec.tableRole,
                            a = o.type.schema,
                            s = [];
                        if ("row" == i)
                            for (let e = 0; e < t.childCount; e++) {
                                let o = t.child(e).content,
                                    i = e ? 0 : Math.max(0, n - 1),
                                    u = e < t.childCount - 1 ? 0 : Math.max(0, r - 1);
                                (i || u) && (o = U(d(a).row, new l.p2(o, i, u)).content), s.push(o)
                            } else {
                                if ("cell" != i && "header_cell" != i) return null;
                                s.push(n || r ? U(d(a).row, new l.p2(t, n, r)).content : t)
                            }
                        return function(e, t) {
                            let n = [];
                            for (let e = 0; e < t.length; e++) {
                                let r = t[e];
                                for (let t = r.childCount - 1; t >= 0; t--) {
                                    let {
                                        rowspan: o,
                                        colspan: i
                                    } = r.child(t).attrs;
                                    for (let t = e; t < e + o; t++) n[t] = (n[t] || 0) + i
                                }
                            }
                            let r = 0;
                            for (let e = 0; e < n.length; e++) r = Math.max(r, n[e]);
                            for (let o = 0; o < n.length; o++)
                                if (o >= t.length && t.push(l.HY.empty), n[o] < r) {
                                    let i = d(e).cell.createAndFill(),
                                        a = [];
                                    for (let e = n[o]; e < r; e++) a.push(i);
                                    t[o] = t[o].append(l.HY.from(a))
                                }
                            return {
                                height: t.length,
                                width: r,
                                rows: t
                            }
                        }(a, s)
                    }(n),
                    o = e.state.selection;
                if (o instanceof E) {
                    r || (r = {
                        width: 1,
                        height: 1,
                        rows: [l.HY.from(U(d(e.state.schema).cell, n))]
                    });
                    let t = o.$anchorCell.node(-1),
                        i = o.$anchorCell.start(-1),
                        a = c.get(t).rectBetween(o.$anchorCell.pos - i, o.$headCell.pos - i);
                    return r = function({
                        width: e,
                        height: t,
                        rows: n
                    }, r, o) {
                        if (e != r) {
                            let t = [],
                                o = [];
                            for (let e = 0; e < n.length; e++) {
                                let i = n[e],
                                    a = [];
                                for (let n = t[e] || 0, o = 0; n < r; o++) {
                                    let l = i.child(o % i.childCount);
                                    n + l.attrs.colspan > r && (l = l.type.createChecked(y(l.attrs, l.attrs.colspan, n + l.attrs.colspan - r), l.content)), a.push(l), n += l.attrs.colspan;
                                    for (let n = 1; n < l.attrs.rowspan; n++) t[e + n] = (t[e + n] || 0) + l.attrs.colspan
                                }
                                o.push(l.HY.from(a))
                            }
                            n = o, e = r
                        }
                        if (t != o) {
                            let e = [];
                            for (let r = 0, i = 0; r < o; r++, i++) {
                                let a = [],
                                    s = n[i % t];
                                for (let e = 0; e < s.childCount; e++) {
                                    let t = s.child(e);
                                    r + t.attrs.rowspan > o && (t = t.type.create({ ...t.attrs,
                                        rowspan: Math.max(1, o - t.attrs.rowspan)
                                    }, t.content)), a.push(t)
                                }
                                e.push(l.HY.from(a))
                            }
                            n = e, t = o
                        }
                        return {
                            width: e,
                            height: t,
                            rows: n
                        }
                    }(r, a.right - a.left, a.bottom - a.top), X(e.state, e.dispatch, i, a, r), !0
                }
                if (!r) return !1; {
                    let t = m(e.state),
                        n = t.start(-1);
                    return X(e.state, e.dispatch, n, c.get(t.node(-1)).findCell(t.pos - n), r), !0
                }
            }

            function et(e, t) {
                var n;
                let r;
                if (t.ctrlKey || t.metaKey) return;
                let o = er(e, t.target);
                if (t.shiftKey && e.state.selection instanceof E) i(e.state.selection.$anchorCell, t), t.preventDefault();
                else if (t.shiftKey && o && null != (r = h(e.state.selection.$anchor)) && (null == (n = eo(e, t)) ? void 0 : n.pos) != r.pos) i(r, t), t.preventDefault();
                else if (!o) return;

                function i(t, n) {
                    let r = eo(e, n),
                        o = null == f.getState(e.state);
                    if (!r || !b(t, r)) {
                        if (!o) return;
                        r = t
                    }
                    let i = new E(t, r);
                    if (o || !e.state.selection.eq(i)) {
                        let n = e.state.tr.setSelection(i);
                        o && n.setMeta(f, t.pos), e.dispatch(n)
                    }
                }

                function l() {
                    e.root.removeEventListener("mouseup", l), e.root.removeEventListener("dragstart", l), e.root.removeEventListener("mousemove", a), null != f.getState(e.state) && e.dispatch(e.state.tr.setMeta(f, -1))
                }

                function a(n) {
                    let r;
                    let a = f.getState(e.state);
                    if (null != a) r = e.state.doc.resolve(a);
                    else if (er(e, n.target) != o && !(r = eo(e, t))) return l();
                    r && i(r, n)
                }
                e.root.addEventListener("mouseup", l), e.root.addEventListener("dragstart", l), e.root.addEventListener("mousemove", a)
            }

            function en(e, t, n) {
                if (!(e.state.selection instanceof i.Bs)) return null;
                let {
                    $head: r
                } = e.state.selection;
                for (let o = r.depth - 1; o >= 0; o--) {
                    let i = r.node(o);
                    if ((n < 0 ? r.index(o) : r.indexAfter(o)) != (n < 0 ? 0 : i.childCount)) break;
                    if ("cell" == i.type.spec.tableRole || "header_cell" == i.type.spec.tableRole) {
                        let i = r.before(o),
                            l = "vert" == t ? n > 0 ? "down" : "up" : n > 0 ? "right" : "left";
                        return e.endOfTextblock(l) ? i : null
                    }
                }
                return null
            }

            function er(e, t) {
                for (; t && t != e.dom; t = t.parentNode)
                    if ("TD" == t.nodeName || "TH" == t.nodeName) return t;
                return null
            }

            function eo(e, t) {
                let n = e.posAtCoords({
                    left: t.clientX,
                    top: t.clientY
                });
                return n && n ? h(e.state.doc.resolve(n.pos)) : null
            }
            var ei = class {
                constructor(e, t) {
                    this.node = e, this.defaultCellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty("--default-cell-min-width", `${t}px`), this.colgroup = this.table.appendChild(document.createElement("colgroup")), el(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"))
                }
                update(e) {
                    return e.type == this.node.type && (this.node = e, el(e, this.colgroup, this.table, this.defaultCellMinWidth), !0)
                }
                ignoreMutation(e) {
                    return "attributes" == e.type && (e.target == this.table || this.colgroup.contains(e.target))
                }
            };

            function el(e, t, n, r, o, i) {
                var l;
                let a = 0,
                    s = !0,
                    u = t.firstChild,
                    c = e.firstChild;
                if (c) {
                    for (let e = 0, n = 0; e < c.childCount; e++) {
                        let {
                            colspan: l,
                            colwidth: d
                        } = c.child(e).attrs;
                        for (let e = 0; e < l; e++, n++) {
                            let l = o == n ? i : d && d[e],
                                c = l ? l + "px" : "";
                            if (a += l || r, l || (s = !1), u) u.style.width != c && (u.style.width = c), u = u.nextSibling;
                            else {
                                let e = document.createElement("col");
                                e.style.width = c, t.appendChild(e)
                            }
                        }
                    }
                    for (; u;) {
                        let e = u.nextSibling;
                        null == (l = u.parentNode) || l.removeChild(u), u = e
                    }
                    s ? (n.style.width = a + "px", n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = a + "px")
                }
            }
            var ea = new i.H$("tableColumnResizing");

            function es({
                handleWidth: e = 5,
                cellMinWidth: t = 25,
                defaultCellMinWidth: n = 100,
                View: r = ei,
                lastColumnResizable: o = !0
            } = {}) {
                let l = new i.Sy({
                    key: ea,
                    state: {
                        init(e, t) {
                            var o, i;
                            let a = null == (i = null == (o = l.spec) ? void 0 : o.props) ? void 0 : i.nodeViews,
                                s = d(t.schema).table.name;
                            return r && a && (a[s] = (e, t) => new r(e, n, t)), new eu(-1, !1)
                        },
                        apply: (e, t) => t.apply(e)
                    },
                    props: {
                        attributes: e => {
                            let t = ea.getState(e);
                            return t && t.activeHandle > -1 ? {
                                class: "resize-cursor"
                            } : {}
                        },
                        handleDOMEvents: {
                            mousemove: (t, n) => {
                                ! function(e, t, n, r) {
                                    if (!e.editable) return;
                                    let o = ea.getState(e.state);
                                    if (o && !o.dragging) {
                                        let i = function(e) {
                                                for (; e && "TD" != e.nodeName && "TH" != e.nodeName;) e = e.classList && e.classList.contains("ProseMirror") ? null : e.parentNode;
                                                return e
                                            }(t.target),
                                            l = -1;
                                        if (i) {
                                            let {
                                                left: r,
                                                right: o
                                            } = i.getBoundingClientRect();
                                            t.clientX - r <= n ? l = ec(e, t, "left", n) : o - t.clientX <= n && (l = ec(e, t, "right", n))
                                        }
                                        if (l != o.activeHandle) {
                                            if (!r && -1 !== l) {
                                                let t = e.state.doc.resolve(l),
                                                    n = t.node(-1),
                                                    r = c.get(n),
                                                    o = t.start(-1);
                                                if (r.colCount(t.pos - o) + t.nodeAfter.attrs.colspan - 1 == r.width - 1) return
                                            }
                                            ef(e, l)
                                        }
                                    }
                                }(t, n, e, o)
                            },
                            mouseleave: e => {
                                ! function(e) {
                                    if (!e.editable) return;
                                    let t = ea.getState(e.state);
                                    t && t.activeHandle > -1 && !t.dragging && ef(e, -1)
                                }(e)
                            },
                            mousedown: (e, r) => {
                                ! function(e, t, n, r) {
                                    var o;
                                    if (!e.editable) return;
                                    let i = null != (o = e.dom.ownerDocument.defaultView) ? o : window,
                                        l = ea.getState(e.state);
                                    if (!l || -1 == l.activeHandle || l.dragging) return;
                                    let a = e.state.doc.nodeAt(l.activeHandle),
                                        s = function(e, t, {
                                            colspan: n,
                                            colwidth: r
                                        }) {
                                            let o = r && r[r.length - 1];
                                            if (o) return o;
                                            let i = e.domAtPos(t),
                                                l = i.node.childNodes[i.offset].offsetWidth,
                                                a = n;
                                            if (r)
                                                for (let e = 0; e < n; e++) r[e] && (l -= r[e], a--);
                                            return l / a
                                        }(e, l.activeHandle, a.attrs);

                                    function u(t) {
                                        i.removeEventListener("mouseup", u), i.removeEventListener("mousemove", d);
                                        let r = ea.getState(e.state);
                                        (null == r ? void 0 : r.dragging) && (function(e, t, n) {
                                            let r = e.state.doc.resolve(t),
                                                o = r.node(-1),
                                                i = c.get(o),
                                                l = r.start(-1),
                                                a = i.colCount(r.pos - l) + r.nodeAfter.attrs.colspan - 1,
                                                s = e.state.tr;
                                            for (let e = 0; e < i.height; e++) {
                                                let t = e * i.width + a;
                                                if (e && i.map[t] == i.map[t - i.width]) continue;
                                                let r = i.map[t],
                                                    u = o.nodeAt(r).attrs,
                                                    c = 1 == u.colspan ? 0 : a - i.colCount(r);
                                                if (u.colwidth && u.colwidth[c] == n) continue;
                                                let d = u.colwidth ? u.colwidth.slice() : Array(u.colspan).fill(0);
                                                d[c] = n, s.setNodeMarkup(l + r, null, { ...u,
                                                    colwidth: d
                                                })
                                            }
                                            s.docChanged && e.dispatch(s)
                                        }(e, r.activeHandle, ed(r.dragging, t, n)), e.dispatch(e.state.tr.setMeta(ea, {
                                            setDragging: null
                                        })))
                                    }

                                    function d(t) {
                                        if (!t.which) return u(t);
                                        let o = ea.getState(e.state);
                                        if (o && o.dragging) {
                                            let i = ed(o.dragging, t, n);
                                            eh(e, o.activeHandle, i, r)
                                        }
                                    }
                                    e.dispatch(e.state.tr.setMeta(ea, {
                                        setDragging: {
                                            startX: t.clientX,
                                            startWidth: s
                                        }
                                    })), eh(e, l.activeHandle, s, r), i.addEventListener("mouseup", u), i.addEventListener("mousemove", d), t.preventDefault()
                                }(e, r, t, n)
                            }
                        },
                        decorations: e => {
                            let t = ea.getState(e);
                            if (t && t.activeHandle > -1) return function(e, t) {
                                var n;
                                let r = [],
                                    o = e.doc.resolve(t),
                                    i = o.node(-1);
                                if (!i) return a.EH.empty;
                                let l = c.get(i),
                                    s = o.start(-1),
                                    u = l.colCount(o.pos - s) + o.nodeAfter.attrs.colspan - 1;
                                for (let t = 0; t < l.height; t++) {
                                    let o = u + t * l.width;
                                    if ((u == l.width - 1 || l.map[o] != l.map[o + 1]) && (0 == t || l.map[o] != l.map[o - l.width])) {
                                        let t = l.map[o],
                                            u = s + t + i.nodeAt(t).nodeSize - 1,
                                            c = document.createElement("div");
                                        c.className = "column-resize-handle", (null == (n = ea.getState(e)) ? void 0 : n.dragging) && r.push(a.p.node(s + t, s + t + i.nodeAt(t).nodeSize, {
                                            class: "column-resize-dragging"
                                        })), r.push(a.p.widget(u, c))
                                    }
                                }
                                return a.EH.create(e.doc, r)
                            }(e, t.activeHandle)
                        },
                        nodeViews: {}
                    }
                });
                return l
            }
            var eu = class e {
                constructor(e, t) {
                    this.activeHandle = e, this.dragging = t
                }
                apply(t) {
                    let n = t.getMeta(ea);
                    if (n && null != n.setHandle) return new e(n.setHandle, !1);
                    if (n && void 0 !== n.setDragging) return new e(this.activeHandle, n.setDragging);
                    if (this.activeHandle > -1 && t.docChanged) {
                        let n = t.mapping.map(this.activeHandle, -1);
                        return g(t.doc.resolve(n)) || (n = -1), new e(n, this.dragging)
                    }
                    return this
                }
            };

            function ec(e, t, n, r) {
                let o = e.posAtCoords({
                    left: t.clientX + ("right" == n ? -r : r),
                    top: t.clientY
                });
                if (!o) return -1;
                let {
                    pos: i
                } = o, l = h(e.state.doc.resolve(i));
                if (!l) return -1;
                if ("right" == n) return l.pos;
                let a = c.get(l.node(-1)),
                    s = l.start(-1),
                    u = a.map.indexOf(l.pos - s);
                return u % a.width == 0 ? -1 : s + a.map[u - 1]
            }

            function ed(e, t, n) {
                let r = t.clientX - e.startX;
                return Math.max(n, e.startWidth + r)
            }

            function ef(e, t) {
                e.dispatch(e.state.tr.setMeta(ea, {
                    setHandle: t
                }))
            }

            function eh(e, t, n, r) {
                let o = e.state.doc.resolve(t),
                    i = o.node(-1),
                    l = o.start(-1),
                    a = c.get(i).colCount(o.pos - l) + o.nodeAfter.attrs.colspan - 1,
                    s = e.domAtPos(o.start(-1)).node;
                for (; s && "TABLE" != s.nodeName;) s = s.parentNode;
                s && el(i, s.firstChild, s, r, a, n)
            }

            function ep({
                allowTableNodeSelection: e = !1
            } = {}) {
                return new i.Sy({
                    key: f,
                    state: {
                        init: () => null,
                        apply(e, t) {
                            let n = e.getMeta(f);
                            if (null != n) return -1 == n ? null : n;
                            if (null == t || !e.docChanged) return t;
                            let {
                                deleted: r,
                                pos: o
                            } = e.mapping.mapResult(t);
                            return r ? null : o
                        }
                    },
                    props: {
                        decorations: C,
                        handleDOMEvents: {
                            mousedown: et
                        },
                        createSelectionBetween: e => null != f.getState(e.state) ? e.state.selection : null,
                        handleTripleClick: J,
                        handleKeyDown: Z,
                        handlePaste: ee
                    },
                    appendTransaction: (t, n, r) => (function(e, t, n) {
                        let r, o;
                        let l = (t || e).selection,
                            a = (t || e).doc;
                        if (l instanceof i.qv && (o = l.node.type.spec.tableRole)) {
                            if ("cell" == o || "header_cell" == o) r = E.create(a, l.from);
                            else if ("row" == o) {
                                let e = a.resolve(l.from + 1);
                                r = E.rowSelection(e, e)
                            } else if (!n) {
                                let e = c.get(l.node),
                                    t = l.from + 1,
                                    n = t + e.map[e.width * e.height - 1];
                                r = E.create(a, t + 1, n)
                            }
                        } else l instanceof i.Bs && function({
                            $from: e,
                            $to: t
                        }) {
                            if (e.pos == t.pos || e.pos < t.pos - 6) return !1;
                            let n = e.pos,
                                r = t.pos,
                                o = e.depth;
                            for (; o >= 0 && !(e.after(o + 1) < e.end(o)); o--, n++);
                            for (let e = t.depth; e >= 0 && !(t.before(e + 1) > t.start(e)); e--, r--);
                            return n == r && /row|table/.test(e.node(o).type.spec.tableRole)
                        }(l) ? r = i.Bs.create(a, l.from) : l instanceof i.Bs && function({
                            $from: e,
                            $to: t
                        }) {
                            let n, r;
                            for (let t = e.depth; t > 0; t--) {
                                let r = e.node(t);
                                if ("cell" === r.type.spec.tableRole || "header_cell" === r.type.spec.tableRole) {
                                    n = r;
                                    break
                                }
                            }
                            for (let e = t.depth; e > 0; e--) {
                                let n = t.node(e);
                                if ("cell" === n.type.spec.tableRole || "header_cell" === n.type.spec.tableRole) {
                                    r = n;
                                    break
                                }
                            }
                            return n !== r && 0 === t.parentOffset
                        }(l) && (r = i.Bs.create(a, l.$from.start(), l.$from.end()));
                        return r && (t || (t = e.tr)).setSelection(r), t
                    })(r, S(r, n), e)
                })
            }
        },
        20360: function(e, t, n) {
            "use strict";
            n.d(t, {
                YD: function() {
                    return u
                }
            });
            var r = n(2784),
                o = Object.defineProperty,
                i = new Map,
                l = new WeakMap,
                a = 0,
                s = void 0;

            function u({
                threshold: e,
                delay: t,
                trackVisibility: n,
                rootMargin: o,
                root: u,
                triggerOnce: c,
                skip: d,
                initialInView: f,
                fallbackInView: h,
                onChange: p
            } = {}) {
                var m;
                let [g, b] = r.useState(null), v = r.useRef(), [y, w] = r.useState({
                    inView: !!f,
                    entry: void 0
                });
                v.current = p, r.useEffect(() => {
                    let r;
                    if (!d && g) return r = function(e, t, n = {}, r = s) {
                        if (void 0 === window.IntersectionObserver && void 0 !== r) {
                            let o = e.getBoundingClientRect();
                            return t(r, {
                                isIntersecting: r,
                                target: e,
                                intersectionRatio: "number" == typeof n.threshold ? n.threshold : 0,
                                time: 0,
                                boundingClientRect: o,
                                intersectionRect: o,
                                rootBounds: o
                            }), () => {}
                        }
                        let {
                            id: o,
                            observer: u,
                            elements: c
                        } = function(e) {
                            let t = Object.keys(e).sort().filter(t => void 0 !== e[t]).map(t => {
                                    var n;
                                    return `${t}_${"root"===t?(n=e.root)?(l.has(n)||(a+=1,l.set(n,a.toString())),l.get(n)):"0":e[t]}`
                                }).toString(),
                                n = i.get(t);
                            if (!n) {
                                let r;
                                let o = new Map,
                                    l = new IntersectionObserver(t => {
                                        t.forEach(t => {
                                            var n;
                                            let i = t.isIntersecting && r.some(e => t.intersectionRatio >= e);
                                            e.trackVisibility && void 0 === t.isVisible && (t.isVisible = i), null == (n = o.get(t.target)) || n.forEach(e => {
                                                e(i, t)
                                            })
                                        })
                                    }, e);
                                r = l.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
                                    id: t,
                                    observer: l,
                                    elements: o
                                }, i.set(t, n)
                            }
                            return n
                        }(n), d = c.get(e) || [];
                        return c.has(e) || c.set(e, d), d.push(t), u.observe(e),
                            function() {
                                d.splice(d.indexOf(t), 1), 0 === d.length && (c.delete(e), u.unobserve(e)), 0 === c.size && (u.disconnect(), i.delete(o))
                            }
                    }(g, (e, t) => {
                        w({
                            inView: e,
                            entry: t
                        }), v.current && v.current(e, t), t.isIntersecting && c && r && (r(), r = void 0)
                    }, {
                        root: u,
                        rootMargin: o,
                        threshold: e,
                        trackVisibility: n,
                        delay: t
                    }, h), () => {
                        r && r()
                    }
                }, [Array.isArray(e) ? e.toString() : e, g, u, o, c, d, n, h, t]);
                let E = null == (m = y.entry) ? void 0 : m.target,
                    k = r.useRef();
                g || !E || c || d || k.current === E || (k.current = E, w({
                    inView: !!f,
                    entry: void 0
                }));
                let C = [b, y.inView, y.entry];
                return C.ref = C[0], C.inView = C[1], C.entry = C[2], C
            }
            r.Component
        },
        16106: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return c
                }
            });
            let r = e => "object" == typeof e && null != e && 1 === e.nodeType,
                o = (e, t) => (!t || "hidden" !== e) && "visible" !== e && "clip" !== e,
                i = (e, t) => {
                    if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
                        let n = getComputedStyle(e, null);
                        return o(n.overflowY, t) || o(n.overflowX, t) || (e => {
                            let t = (e => {
                                if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
                                try {
                                    return e.ownerDocument.defaultView.frameElement
                                } catch (e) {
                                    return null
                                }
                            })(e);
                            return !!t && (t.clientHeight < e.scrollHeight || t.clientWidth < e.scrollWidth)
                        })(e)
                    }
                    return !1
                },
                l = (e, t, n, r, o, i, l, a) => i < e && l > t || i > e && l < t ? 0 : i <= e && a <= n || l >= t && a >= n ? i - e - r : l > t && a < n || i < e && a > n ? l - t + o : 0,
                a = e => {
                    let t = e.parentElement;
                    return null == t ? e.getRootNode().host || null : t
                },
                s = (e, t) => {
                    var n, o, s, u;
                    if ("undefined" == typeof document) return [];
                    let {
                        scrollMode: c,
                        block: d,
                        inline: f,
                        boundary: h,
                        skipOverflowHiddenElements: p
                    } = t, m = "function" == typeof h ? h : e => e !== h;
                    if (!r(e)) throw TypeError("Invalid target");
                    let g = document.scrollingElement || document.documentElement,
                        b = [],
                        v = e;
                    for (; r(v) && m(v);) {
                        if ((v = a(v)) === g) {
                            b.push(v);
                            break
                        }
                        null != v && v === document.body && i(v) && !i(document.documentElement) || null != v && i(v, p) && b.push(v)
                    }
                    let y = null != (o = null == (n = window.visualViewport) ? void 0 : n.width) ? o : innerWidth,
                        w = null != (u = null == (s = window.visualViewport) ? void 0 : s.height) ? u : innerHeight,
                        {
                            scrollX: E,
                            scrollY: k
                        } = window,
                        {
                            height: C,
                            width: M,
                            top: S,
                            right: A,
                            bottom: T,
                            left: R
                        } = e.getBoundingClientRect(),
                        {
                            top: L,
                            right: x,
                            bottom: I,
                            left: O
                        } = (e => {
                            let t = window.getComputedStyle(e);
                            return {
                                top: parseFloat(t.scrollMarginTop) || 0,
                                right: parseFloat(t.scrollMarginRight) || 0,
                                bottom: parseFloat(t.scrollMarginBottom) || 0,
                                left: parseFloat(t.scrollMarginLeft) || 0
                            }
                        })(e),
                        _ = "start" === d || "nearest" === d ? S - L : "end" === d ? T + I : S + C / 2 - L + I,
                        P = "center" === f ? R + M / 2 - O + x : "end" === f ? A + x : R - O,
                        D = [];
                    for (let e = 0; e < b.length; e++) {
                        let t = b[e],
                            {
                                height: n,
                                width: r,
                                top: o,
                                right: i,
                                bottom: a,
                                left: s
                            } = t.getBoundingClientRect();
                        if ("if-needed" === c && S >= 0 && R >= 0 && T <= w && A <= y && S >= o && T <= a && R >= s && A <= i) break;
                        let u = getComputedStyle(t),
                            h = parseInt(u.borderLeftWidth, 10),
                            p = parseInt(u.borderTopWidth, 10),
                            m = parseInt(u.borderRightWidth, 10),
                            v = parseInt(u.borderBottomWidth, 10),
                            L = 0,
                            x = 0,
                            I = "offsetWidth" in t ? t.offsetWidth - t.clientWidth - h - m : 0,
                            O = "offsetHeight" in t ? t.offsetHeight - t.clientHeight - p - v : 0,
                            H = "offsetWidth" in t ? 0 === t.offsetWidth ? 0 : r / t.offsetWidth : 0,
                            N = "offsetHeight" in t ? 0 === t.offsetHeight ? 0 : n / t.offsetHeight : 0;
                        if (g === t) L = "start" === d ? _ : "end" === d ? _ - w : "nearest" === d ? l(k, k + w, w, p, v, k + _, k + _ + C, C) : _ - w / 2, x = "start" === f ? P : "center" === f ? P - y / 2 : "end" === f ? P - y : l(E, E + y, y, h, m, E + P, E + P + M, M), L = Math.max(0, L + k), x = Math.max(0, x + E);
                        else {
                            L = "start" === d ? _ - o - p : "end" === d ? _ - a + v + O : "nearest" === d ? l(o, a, n, p, v + O, _, _ + C, C) : _ - (o + n / 2) + O / 2, x = "start" === f ? P - s - h : "center" === f ? P - (s + r / 2) + I / 2 : "end" === f ? P - i + m + I : l(s, i, r, h, m + I, P, P + M, M);
                            let {
                                scrollLeft: e,
                                scrollTop: u
                            } = t;
                            L = 0 === N ? 0 : Math.max(0, Math.min(u + L / N, t.scrollHeight - n / N + O)), x = 0 === H ? 0 : Math.max(0, Math.min(e + x / H, t.scrollWidth - r / H + I)), _ += u - L, P += e - x
                        }
                        D.push({
                            el: t,
                            top: L,
                            left: x
                        })
                    }
                    return D
                },
                u = e => !1 === e ? {
                    block: "end",
                    inline: "nearest"
                } : e === Object(e) && 0 !== Object.keys(e).length ? e : {
                    block: "start",
                    inline: "nearest"
                };

            function c(e, t) {
                if (!e.isConnected || !(e => {
                        let t = e;
                        for (; t && t.parentNode;) {
                            if (t.parentNode === document) return !0;
                            t = t.parentNode instanceof ShadowRoot ? t.parentNode.host : t.parentNode
                        }
                        return !1
                    })(e)) return;
                let n = (e => {
                    let t = window.getComputedStyle(e);
                    return {
                        top: parseFloat(t.scrollMarginTop) || 0,
                        right: parseFloat(t.scrollMarginRight) || 0,
                        bottom: parseFloat(t.scrollMarginBottom) || 0,
                        left: parseFloat(t.scrollMarginLeft) || 0
                    }
                })(e);
                if ("object" == typeof t && "function" == typeof t.behavior) return t.behavior(s(e, t));
                let r = "boolean" == typeof t || null == t ? void 0 : t.behavior;
                for (let {
                        el: o,
                        top: i,
                        left: l
                    } of s(e, u(t))) {
                    let e = i - n.top + n.bottom,
                        t = l - n.left + n.right;
                    o.scroll({
                        top: e,
                        left: t,
                        behavior: r
                    })
                }
            }
        },
        45892: function(e, t, n) {
            "use strict";
            let r;
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var o = n(16106);
            let i = () => (r || (r = "performance" in window ? performance.now.bind(performance) : Date.now), r()),
                l = e => e && !e.behavior || "smooth" === e.behavior,
                a = function(e, t) {
                    let n = t || {};
                    return l(n) ? (0, o.Z)(e, {
                        block: n.block,
                        inline: n.inline,
                        scrollMode: n.scrollMode,
                        boundary: n.boundary,
                        skipOverflowHiddenElements: n.skipOverflowHiddenElements,
                        behavior: e => Promise.all(e.reduce((e, t) => {
                            let {
                                el: r,
                                left: o,
                                top: l
                            } = t, a = r.scrollLeft, s = r.scrollTop;
                            return a === o && s === l ? e : [...e, new Promise(e => (function(e, t, n) {
                                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 600,
                                    o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : e => 1 + --e * e * e * e * e,
                                    l = arguments.length > 5 ? arguments[5] : void 0,
                                    a = arguments.length > 6 ? arguments[6] : void 0,
                                    s = e.scrollLeft,
                                    u = e.scrollTop;
                                ! function e(t) {
                                    let n = Math.min((i() - t.startTime) / t.duration, 1),
                                        r = t.ease(n),
                                        o = t.startX + (t.x - t.startX) * r,
                                        l = t.startY + (t.y - t.startY) * r;
                                    t.method(o, l, n, r), o !== t.x || l !== t.y ? requestAnimationFrame(() => e(t)) : t.cb()
                                }({
                                    scrollable: e,
                                    method: (t, n, r, o) => {
                                        let i = Math.ceil(t),
                                            l = Math.ceil(n);
                                        e.scrollLeft = i, e.scrollTop = l, null == a || a({
                                            target: e,
                                            elapsed: r,
                                            value: o,
                                            left: i,
                                            top: l
                                        })
                                    },
                                    startTime: i(),
                                    startX: s,
                                    startY: u,
                                    x: t,
                                    y: n,
                                    duration: r,
                                    ease: o,
                                    cb: l
                                })
                            })(r, o, l, n.duration, n.ease, () => e({
                                el: r,
                                left: [a, o],
                                top: [s, l]
                            }), n.onScrollChange))]
                        }, []))
                    }) : Promise.resolve((0, o.Z)(e, t))
                }
        }
    }
]);