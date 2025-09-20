try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "91edbe9e-921e-4526-be54-d86b6e928d61", e._sentryDebugIdIdentifier = "sentry-dbid-91edbe9e-921e-4526-be54-d86b6e928d61")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3848], {
        16483: function(e, t, r) {
            "use strict";
            var n = r(71600);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BroadcastChannel = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "nextauth.message";
                return {
                    receive: function(t) {
                        var r = function(r) {
                            if (r.key === e) {
                                var n, o = JSON.parse(null !== (n = r.newValue) && void 0 !== n ? n : "{}");
                                (null == o ? void 0 : o.event) === "session" && null != o && o.data && t(o)
                            }
                        };
                        return window.addEventListener("storage", r),
                            function() {
                                return window.removeEventListener("storage", r)
                            }
                    },
                    post: function(t) {
                        if ("undefined" != typeof window) try {
                            localStorage.setItem(e, JSON.stringify(i(i({}, t), {}, {
                                timestamp: f()
                            })))
                        } catch (e) {}
                    }
                }
            }, t.apiBaseUrl = l, t.fetchData = function(e, t, r) {
                return c.apply(this, arguments)
            }, t.now = f;
            var o = n(r(82841)),
                a = n(r(26290)),
                u = n(r(91461));

            function s(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(r), !0).forEach(function(t) {
                        (0, a.default)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function c() {
                return (c = (0, u.default)(o.default.mark(function e(t, r, n) {
                    var a, u, s, c, f, d, p, v, h, b = arguments;
                    return o.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return u = (a = b.length > 3 && void 0 !== b[3] ? b[3] : {}).ctx, c = void 0 === (s = a.req) ? null == u ? void 0 : u.req : s, f = "".concat(l(r), "/").concat(t), e.prev = 2, p = {
                                    headers: i({
                                        "Content-Type": "application/json"
                                    }, null != c && null !== (d = c.headers) && void 0 !== d && d.cookie ? {
                                        cookie: c.headers.cookie
                                    } : {})
                                }, null != c && c.body && (p.body = JSON.stringify(c.body), p.method = "POST"), e.next = 7, fetch(f, p);
                            case 7:
                                return v = e.sent, e.next = 10, v.json();
                            case 10:
                                if (h = e.sent, v.ok) {
                                    e.next = 13;
                                    break
                                }
                                throw h;
                            case 13:
                                return e.abrupt("return", Object.keys(h).length > 0 ? h : null);
                            case 16:
                                return e.prev = 16, e.t0 = e.catch(2), n.error("CLIENT_FETCH_ERROR", {
                                    error: e.t0,
                                    url: f
                                }), e.abrupt("return", null);
                            case 20:
                            case "end":
                                return e.stop()
                        }
                    }, e, null, [
                        [2, 16]
                    ])
                }))).apply(this, arguments)
            }

            function l(e) {
                return "undefined" == typeof window ? "".concat(e.baseUrlServer).concat(e.basePathServer) : e.basePath
            }

            function f() {
                return Math.floor(Date.now() / 1e3)
            }
        },
        67693: function(e, t, r) {
            "use strict";
            var n = r(71600);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.UnsupportedStrategy = t.UnknownError = t.OAuthCallbackError = t.MissingSecret = t.MissingAuthorize = t.MissingAdapterMethods = t.MissingAdapter = t.MissingAPIRoute = t.InvalidCallbackUrl = t.AccountNotLinkedError = void 0, t.adapterErrorHandler = function(e, t) {
                if (e) return Object.keys(e).reduce(function(r, n) {
                    return r[n] = (0, a.default)(o.default.mark(function r() {
                        var a, u, s, i, c, l = arguments;
                        return o.default.wrap(function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    for (r.prev = 0, u = Array(a = l.length), s = 0; s < a; s++) u[s] = l[s];
                                    return t.debug("adapter_".concat(n), {
                                        args: u
                                    }), i = e[n], r.next = 6, i.apply(void 0, u);
                                case 6:
                                    return r.abrupt("return", r.sent);
                                case 9:
                                    throw r.prev = 9, r.t0 = r.catch(0), t.error("adapter_error_".concat(n), r.t0), (c = new h(r.t0)).name = "".concat(y(n), "Error"), c;
                                case 15:
                                case "end":
                                    return r.stop()
                            }
                        }, r, null, [
                            [0, 9]
                        ])
                    })), r
                }, {})
            }, t.capitalize = y, t.eventsErrorHandler = function(e, t) {
                return Object.keys(e).reduce(function(r, n) {
                    return r[n] = (0, a.default)(o.default.mark(function r() {
                        var a, u = arguments;
                        return o.default.wrap(function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.prev = 0, a = e[n], r.next = 4, a.apply(void 0, u);
                                case 4:
                                    return r.abrupt("return", r.sent);
                                case 7:
                                    r.prev = 7, r.t0 = r.catch(0), t.error("".concat(b(n), "_EVENT_ERROR"), r.t0);
                                case 10:
                                case "end":
                                    return r.stop()
                            }
                        }, r, null, [
                            [0, 7]
                        ])
                    })), r
                }, {})
            }, t.upperSnake = b;
            var o = n(r(82841)),
                a = n(r(91461)),
                u = n(r(26290)),
                s = n(r(53100)),
                i = n(r(98870)),
                c = n(r(60421)),
                l = n(r(1147)),
                f = n(r(68230)),
                d = n(r(78365));

            function p(e, t, r) {
                return t = (0, l.default)(t), (0, c.default)(e, v() ? Reflect.construct(t, r || [], (0, l.default)(e).constructor) : t.apply(e, r))
            }

            function v() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (v = function() {
                    return !!e
                })()
            }
            var h = t.UnknownError = function(e) {
                function t(e) {
                    var r, n;
                    return (0, s.default)(this, t), (n = p(this, t, [null !== (r = null == e ? void 0 : e.message) && void 0 !== r ? r : e])).name = "UnknownError", n.code = e.code, e instanceof Error && (n.stack = e.stack), n
                }
                return (0, f.default)(t, e), (0, i.default)(t, [{
                    key: "toJSON",
                    value: function() {
                        return {
                            name: this.name,
                            message: this.message,
                            stack: this.stack
                        }
                    }
                }])
            }((0, d.default)(Error));

            function b(e) {
                return e.replace(/([A-Z])/g, "_$1").toUpperCase()
            }

            function y(e) {
                return "".concat(e[0].toUpperCase()).concat(e.slice(1))
            }
            t.OAuthCallbackError = function(e) {
                function t() {
                    var e;
                    (0, s.default)(this, t);
                    for (var r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                    return e = p(this, t, [].concat(n)), (0, u.default)(e, "name", "OAuthCallbackError"), e
                }
                return (0, f.default)(t, e), (0, i.default)(t)
            }(h), t.AccountNotLinkedError = function(e) {
                function t() {
                    var e;
                    (0, s.default)(this, t);
                    for (var r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                    return e = p(this, t, [].concat(n)), (0, u.default)(e, "name", "AccountNotLinkedError"), e
                }
                return (0, f.default)(t, e), (0, i.default)(t)
            }(h), t.MissingAPIRoute = function(e) {
                function t() {
                    var e;
                    (0, s.default)(this, t);
                    for (var r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                    return e = p(this, t, [].concat(n)), (0, u.default)(e, "name", "MissingAPIRouteError"), (0, u.default)(e, "code", "MISSING_NEXTAUTH_API_ROUTE_ERROR"), e
                }
                return (0, f.default)(t, e), (0, i.default)(t)
            }(h), t.MissingSecret = function(e) {
                function t() {
                    var e;
                    (0, s.default)(this, t);
                    for (var r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                    return e = p(this, t, [].concat(n)), (0, u.default)(e, "name", "MissingSecretError"), (0, u.default)(e, "code", "NO_SECRET"), e
                }
                return (0, f.default)(t, e), (0, i.default)(t)
            }(h), t.MissingAuthorize = function(e) {
                function t() {
                    var e;
                    (0, s.default)(this, t);
                    for (var r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                    return e = p(this, t, [].concat(n)), (0, u.default)(e, "name", "MissingAuthorizeError"), (0, u.default)(e, "code", "CALLBACK_CREDENTIALS_HANDLER_ERROR"), e
                }
                return (0, f.default)(t, e), (0, i.default)(t)
            }(h), t.MissingAdapter = function(e) {
                function t() {
                    var e;
                    (0, s.default)(this, t);
                    for (var r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                    return e = p(this, t, [].concat(n)), (0, u.default)(e, "name", "MissingAdapterError"), (0, u.default)(e, "code", "EMAIL_REQUIRES_ADAPTER_ERROR"), e
                }
                return (0, f.default)(t, e), (0, i.default)(t)
            }(h), t.MissingAdapterMethods = function(e) {
                function t() {
                    var e;
                    (0, s.default)(this, t);
                    for (var r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                    return e = p(this, t, [].concat(n)), (0, u.default)(e, "name", "MissingAdapterMethodsError"), (0, u.default)(e, "code", "MISSING_ADAPTER_METHODS_ERROR"), e
                }
                return (0, f.default)(t, e), (0, i.default)(t)
            }(h), t.UnsupportedStrategy = function(e) {
                function t() {
                    var e;
                    (0, s.default)(this, t);
                    for (var r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                    return e = p(this, t, [].concat(n)), (0, u.default)(e, "name", "UnsupportedStrategyError"), (0, u.default)(e, "code", "CALLBACK_CREDENTIALS_JWT_ERROR"), e
                }
                return (0, f.default)(t, e), (0, i.default)(t)
            }(h), t.InvalidCallbackUrl = function(e) {
                function t() {
                    var e;
                    (0, s.default)(this, t);
                    for (var r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                    return e = p(this, t, [].concat(n)), (0, u.default)(e, "name", "InvalidCallbackUrl"), (0, u.default)(e, "code", "INVALID_CALLBACK_URL_ERROR"), e
                }
                return (0, f.default)(t, e), (0, i.default)(t)
            }(h)
        },
        23848: function(e, t, r) {
            "use strict";
            var n, o, a, u, s, i = r(34406),
                c = r(71600),
                l = r(67425);
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var f = {
                SessionContext: !0,
                useSession: !0,
                getSession: !0,
                getCsrfToken: !0,
                getProviders: !0,
                signIn: !0,
                signOut: !0,
                SessionProvider: !0
            };
            t.SessionContext = void 0, t.SessionProvider = function(e) {
                if (!R) throw Error("React Context is unavailable in Server Components");
                var t, r, n, o, a, u, s = e.children,
                    i = e.basePath,
                    c = e.refetchInterval,
                    l = e.refetchWhenOffline;
                i && (k.basePath = i);
                var f = void 0 !== e.session;
                k._lastSync = f ? (0, x.now)() : 0;
                var p = b.useState(function() {
                        return f && (k._session = e.session), e.session
                    }),
                    y = (0, h.default)(p, 2),
                    g = y[0],
                    w = y[1],
                    O = b.useState(!f),
                    m = (0, h.default)(O, 2),
                    E = m[0],
                    S = m[1];
                b.useEffect(function() {
                    return k._getSession = (0, v.default)(d.default.mark(function e() {
                            var t, r, n = arguments;
                            return d.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = (n.length > 0 && void 0 !== n[0] ? n[0] : {}).event, e.prev = 1, !((r = "storage" === t) || void 0 === k._session)) {
                                            e.next = 10;
                                            break
                                        }
                                        return k._lastSync = (0, x.now)(), e.next = 7, M({
                                            broadcast: !r
                                        });
                                    case 7:
                                        return k._session = e.sent, w(k._session), e.abrupt("return");
                                    case 10:
                                        if (!(!t || null === k._session || (0, x.now)() < k._lastSync)) {
                                            e.next = 12;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 12:
                                        return k._lastSync = (0, x.now)(), e.next = 15, M();
                                    case 15:
                                        k._session = e.sent, w(k._session), e.next = 22;
                                        break;
                                    case 19:
                                        e.prev = 19, e.t0 = e.catch(1), P.error("CLIENT_SESSION_ERROR", e.t0);
                                    case 22:
                                        return e.prev = 22, S(!1), e.finish(22);
                                    case 25:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [1, 19, 22, 25]
                            ])
                        })), k._getSession(),
                        function() {
                            k._lastSync = 0, k._session = void 0, k._getSession = function() {}
                        }
                }, []), b.useEffect(function() {
                    var e = j.receive(function() {
                        return k._getSession({
                            event: "storage"
                        })
                    });
                    return function() {
                        return e()
                    }
                }, []), b.useEffect(function() {
                    var t = e.refetchOnWindowFocus,
                        r = void 0 === t || t,
                        n = function() {
                            r && "visible" === document.visibilityState && k._getSession({
                                event: "visibilitychange"
                            })
                        };
                    return document.addEventListener("visibilitychange", n, !1),
                        function() {
                            return document.removeEventListener("visibilitychange", n, !1)
                        }
                }, [e.refetchOnWindowFocus]);
                var A = (t = b.useState("undefined" != typeof navigator && navigator.onLine), n = (r = (0, h.default)(t, 2))[0], o = r[1], a = function() {
                        return o(!0)
                    }, u = function() {
                        return o(!1)
                    }, b.useEffect(function() {
                        return window.addEventListener("online", a), window.addEventListener("offline", u),
                            function() {
                                window.removeEventListener("online", a), window.removeEventListener("offline", u)
                            }
                    }, []), n),
                    L = !1 !== l || A;
                b.useEffect(function() {
                    if (c && L) {
                        var e = setInterval(function() {
                            k._session && k._getSession({
                                event: "poll"
                            })
                        }, 1e3 * c);
                        return function() {
                            return clearInterval(e)
                        }
                    }
                }, [c, L]);
                var T = b.useMemo(function() {
                    return {
                        data: g,
                        status: E ? "loading" : g ? "authenticated" : "unauthenticated",
                        update: function(e) {
                            return (0, v.default)(d.default.mark(function t() {
                                var r;
                                return d.default.wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (!(E || !g)) {
                                                t.next = 2;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 2:
                                            return S(!0), t.t0 = x.fetchData, t.t1 = k, t.t2 = P, t.next = 8, U();
                                        case 8:
                                            return t.t3 = t.sent, t.t4 = e, t.t5 = {
                                                csrfToken: t.t3,
                                                data: t.t4
                                            }, t.t6 = {
                                                body: t.t5
                                            }, t.t7 = {
                                                req: t.t6
                                            }, t.next = 15, (0, t.t0)("session", t.t1, t.t2, t.t7);
                                        case 15:
                                            return r = t.sent, S(!1), r && (w(r), j.post({
                                                event: "session",
                                                data: {
                                                    trigger: "getSession"
                                                }
                                            })), t.abrupt("return", r);
                                        case 19:
                                        case "end":
                                            return t.stop()
                                    }
                                }, t)
                            }))()
                        }
                    }
                }, [g, E]);
                return (0, _.jsx)(R.Provider, {
                    value: T,
                    children: s
                })
            }, t.getCsrfToken = U, t.getProviders = T, t.getSession = M, t.signIn = function(e, t, r) {
                return I.apply(this, arguments)
            }, t.signOut = function(e) {
                return D.apply(this, arguments)
            }, t.useSession = function(e) {
                if (!R) throw Error("React Context is unavailable in Server Components");
                var t = b.useContext(R),
                    r = null != e ? e : {},
                    n = r.required,
                    o = r.onUnauthenticated,
                    a = n && "unauthenticated" === t.status;
                return (b.useEffect(function() {
                    if (a) {
                        var e = "/api/auth/signin?".concat(new URLSearchParams({
                            error: "SessionRequired",
                            callbackUrl: window.location.href
                        }));
                        o ? o() : window.location.href = e
                    }
                }, [a, o]), a) ? {
                    data: t.data,
                    update: t.update,
                    status: "loading"
                } : t
            };
            var d = c(r(82841)),
                p = c(r(26290)),
                v = c(r(91461)),
                h = c(r(43681)),
                b = m(r(2784)),
                y = m(r(74339)),
                g = c(r(18203)),
                x = r(16483),
                _ = r(52322),
                w = r(92878);

            function O(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (O = function(e) {
                    return e ? r : t
                })(e)
            }

            function m(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != l(e) && "function" != typeof e) return {
                    default: e
                };
                var r = O(t);
                if (r && r.has(e)) return r.get(e);
                var n = {
                        __proto__: null
                    },
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if ("default" !== a && ({}).hasOwnProperty.call(e, a)) {
                        var u = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                        u && (u.get || u.set) ? Object.defineProperty(n, a, u) : n[a] = e[a]
                    }
                return n.default = e, r && r.set(e, n), n
            }

            function E(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? E(Object(r), !0).forEach(function(t) {
                        (0, p.default)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : E(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            Object.keys(w).forEach(function(e) {
                !("default" === e || "__esModule" === e || Object.prototype.hasOwnProperty.call(f, e)) && (e in t && t[e] === w[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return w[e]
                    }
                }))
            });
            var k = {
                    baseUrl: (0, g.default)(null !== (n = i.env.NEXTAUTH_URL) && void 0 !== n ? n : i.env.VERCEL_URL).origin,
                    basePath: (0, g.default)(i.env.NEXTAUTH_URL).path,
                    baseUrlServer: (0, g.default)(null !== (o = null !== (a = i.env.NEXTAUTH_URL_INTERNAL) && void 0 !== a ? a : i.env.NEXTAUTH_URL) && void 0 !== o ? o : i.env.VERCEL_URL).origin,
                    basePathServer: (0, g.default)(null !== (u = i.env.NEXTAUTH_URL_INTERNAL) && void 0 !== u ? u : i.env.NEXTAUTH_URL).path,
                    _lastSync: 0,
                    _session: void 0,
                    _getSession: function() {}
                },
                j = (0, x.BroadcastChannel)(),
                P = (0, y.proxyLogger)(y.default, k.basePath),
                R = t.SessionContext = null === (s = b.createContext) || void 0 === s ? void 0 : s.call(b, void 0);

            function M(e) {
                return A.apply(this, arguments)
            }

            function A() {
                return (A = (0, v.default)(d.default.mark(function e(t) {
                    var r, n;
                    return d.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, x.fetchData)("session", k, P, t);
                            case 2:
                                return n = e.sent, (null === (r = null == t ? void 0 : t.broadcast) || void 0 === r || r) && j.post({
                                    event: "session",
                                    data: {
                                        trigger: "getSession"
                                    }
                                }), e.abrupt("return", n);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }

            function U(e) {
                return L.apply(this, arguments)
            }

            function L() {
                return (L = (0, v.default)(d.default.mark(function e(t) {
                    var r;
                    return d.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, x.fetchData)("csrf", k, P, t);
                            case 2:
                                return r = e.sent, e.abrupt("return", null == r ? void 0 : r.csrfToken);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }

            function T() {
                return C.apply(this, arguments)
            }

            function C() {
                return (C = (0, v.default)(d.default.mark(function e() {
                    return d.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, x.fetchData)("providers", k, P);
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }

            function I() {
                return (I = (0, v.default)(d.default.mark(function e(t, r, n) {
                    var o, a, u, s, i, c, l, f, p, v, h, b, y, g, _, w, O;
                    return d.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return u = void 0 === (a = (o = null != r ? r : {}).callbackUrl) ? window.location.href : a, i = void 0 === (s = o.redirect) || s, c = (0, x.apiBaseUrl)(k), e.next = 4, T();
                            case 4:
                                if (l = e.sent) {
                                    e.next = 8;
                                    break
                                }
                                return window.location.href = "".concat(c, "/error"), e.abrupt("return");
                            case 8:
                                if (!(!t || !(t in l))) {
                                    e.next = 11;
                                    break
                                }
                                return window.location.href = "".concat(c, "/signin?").concat(new URLSearchParams({
                                    callbackUrl: u
                                })), e.abrupt("return");
                            case 11:
                                return f = "credentials" === l[t].type, p = "email" === l[t].type, v = f || p, h = "".concat(c, "/").concat(f ? "callback" : "signin", "/").concat(t), b = "".concat(h).concat(n ? "?".concat(new URLSearchParams(n)) : ""), e.t0 = fetch, e.t1 = b, e.t2 = {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                }, e.t3 = URLSearchParams, e.t4 = S, e.t5 = S({}, r), e.t6 = {}, e.next = 25, U();
                            case 25:
                                return e.t7 = e.sent, e.t8 = u, e.t9 = {
                                    csrfToken: e.t7,
                                    callbackUrl: e.t8,
                                    json: !0
                                }, e.t10 = (0, e.t4)(e.t5, e.t6, e.t9), e.t11 = new e.t3(e.t10), e.t12 = {
                                    method: "post",
                                    headers: e.t2,
                                    body: e.t11
                                }, e.next = 33, (0, e.t0)(e.t1, e.t12);
                            case 33:
                                return y = e.sent, e.next = 36, y.json();
                            case 36:
                                if (g = e.sent, !(i || !v)) {
                                    e.next = 42;
                                    break
                                }
                                return w = null !== (_ = g.url) && void 0 !== _ ? _ : u, window.location.href = w, w.includes("#") && window.location.reload(), e.abrupt("return");
                            case 42:
                                if (O = new URL(g.url).searchParams.get("error"), !y.ok) {
                                    e.next = 46;
                                    break
                                }
                                return e.next = 46, k._getSession({
                                    event: "storage"
                                });
                            case 46:
                                return e.abrupt("return", {
                                    error: O,
                                    status: y.status,
                                    ok: y.ok,
                                    url: O ? null : g.url
                                });
                            case 47:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }

            function D() {
                return (D = (0, v.default)(d.default.mark(function e(t) {
                    var r, n, o, a, u, s, i, c, l;
                    return d.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return o = void 0 === (n = (null != t ? t : {}).callbackUrl) ? window.location.href : n, a = (0, x.apiBaseUrl)(k), e.t0 = {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                }, e.t1 = URLSearchParams, e.next = 6, U();
                            case 6:
                                return e.t2 = e.sent, e.t3 = o, e.t4 = {
                                    csrfToken: e.t2,
                                    callbackUrl: e.t3,
                                    json: !0
                                }, e.t5 = new e.t1(e.t4), u = {
                                    method: "post",
                                    headers: e.t0,
                                    body: e.t5
                                }, e.next = 13, fetch("".concat(a, "/signout"), u);
                            case 13:
                                return s = e.sent, e.next = 16, s.json();
                            case 16:
                                if (i = e.sent, j.post({
                                        event: "session",
                                        data: {
                                            trigger: "signout"
                                        }
                                    }), !(null === (r = null == t ? void 0 : t.redirect) || void 0 === r || r)) {
                                    e.next = 23;
                                    break
                                }
                                return l = null !== (c = i.url) && void 0 !== c ? c : o, window.location.href = l, l.includes("#") && window.location.reload(), e.abrupt("return");
                            case 23:
                                return e.next = 25, k._getSession({
                                    event: "storage"
                                });
                            case 25:
                                return e.abrupt("return", i);
                            case 26:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }
        },
        92878: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        74339: function(e, t, r) {
            "use strict";
            var n = r(71600);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, t.proxyLogger = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                try {
                    if ("undefined" == typeof window) return e;
                    var r = {},
                        n = function(e) {
                            var n;
                            r[e] = (n = (0, u.default)(o.default.mark(function r(n, u) {
                                var s, f;
                                return o.default.wrap(function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            if (l[e](n, u), "error" === e && (u = c(u)), u.client = !0, s = "".concat(t, "/_log"), f = new URLSearchParams(function(e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var r = null != arguments[t] ? arguments[t] : {};
                                                        t % 2 ? i(Object(r), !0).forEach(function(t) {
                                                            (0, a.default)(e, t, r[t])
                                                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function(t) {
                                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                                        })
                                                    }
                                                    return e
                                                }({
                                                    level: e,
                                                    code: n
                                                }, u)), !navigator.sendBeacon) {
                                                r.next = 8;
                                                break
                                            }
                                            return r.abrupt("return", navigator.sendBeacon(s, f));
                                        case 8:
                                            return r.next = 10, fetch(s, {
                                                method: "POST",
                                                body: f,
                                                keepalive: !0
                                            });
                                        case 10:
                                            return r.abrupt("return", r.sent);
                                        case 11:
                                        case "end":
                                            return r.stop()
                                    }
                                }, r)
                            })), function(e, t) {
                                return n.apply(this, arguments)
                            })
                        };
                    for (var s in e) n(s);
                    return r
                } catch (e) {
                    return l
                }
            }, t.setLogger = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 ? arguments[1] : void 0;
                t || (l.debug = function() {}), e.error && (l.error = e.error), e.warn && (l.warn = e.warn), e.debug && (l.debug = e.debug)
            };
            var o = n(r(82841)),
                a = n(r(26290)),
                u = n(r(91461)),
                s = r(67693);

            function i(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function c(e) {
                var t;
                return e instanceof Error && !(e instanceof s.UnknownError) ? {
                    message: e.message,
                    stack: e.stack,
                    name: e.name
                } : (null != e && e.error && (e.error = c(e.error), e.message = null !== (t = e.message) && void 0 !== t ? t : e.error.message), e)
            }
            var l = {
                error: function(e, t) {
                    t = c(t), console.error("[next-auth][error][".concat(e, "]"), "\nhttps://next-auth.js.org/errors#".concat(e.toLowerCase()), t.message, t)
                },
                warn: function(e) {
                    console.warn("[next-auth][warn][".concat(e, "]"), "\nhttps://next-auth.js.org/warnings#".concat(e.toLowerCase()))
                },
                debug: function(e, t) {
                    console.log("[next-auth][debug][".concat(e, "]"), t)
                }
            };
            t.default = l
        },
        18203: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t;
                let r = new URL("http://localhost:3000/api/auth");
                e && !e.startsWith("http") && (e = `https://${e}`);
                let n = new URL(null !== (t = e) && void 0 !== t ? t : r),
                    o = ("/" === n.pathname ? r.pathname : n.pathname).replace(/\/$/, ""),
                    a = `${n.origin}${o}`;
                return {
                    origin: n.origin,
                    host: n.host,
                    path: o,
                    base: a,
                    toString: () => a
                }
            }
        },
        85748: function(e) {
            e.exports = function(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        96314: function(e) {
            e.exports = function(e) {
                if (Array.isArray(e)) return e
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        85297: function(e) {
            e.exports = function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        91461: function(e) {
            function t(e, t, r, n, o, a, u) {
                try {
                    var s = e[a](u),
                        i = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(i) : Promise.resolve(i).then(n, o)
            }
            e.exports = function(e) {
                return function() {
                    var r = this,
                        n = arguments;
                    return new Promise(function(o, a) {
                        var u = e.apply(r, n);

                        function s(e) {
                            t(u, o, a, s, i, "next", e)
                        }

                        function i(e) {
                            t(u, o, a, s, i, "throw", e)
                        }
                        s(void 0)
                    })
                }
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        53100: function(e) {
            e.exports = function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        73419: function(e, t, r) {
            var n = r(37028),
                o = r(78560);
            e.exports = function(e, t, r) {
                if (n()) return Reflect.construct.apply(null, arguments);
                var a = [null];
                a.push.apply(a, t);
                var u = new(e.bind.apply(e, a));
                return r && o(u, r.prototype), u
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        98870: function(e, t, r) {
            var n = r(47739);

            function o(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, n(o.key), o)
                }
            }
            e.exports = function(e, t, r) {
                return t && o(e.prototype, t), r && o(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        26290: function(e, t, r) {
            var n = r(47739);
            e.exports = function(e, t, r) {
                return (t = n(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        1147: function(e) {
            function t(r) {
                return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, e.exports.__esModule = !0, e.exports.default = e.exports, t(r)
            }
            e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        68230: function(e, t, r) {
            var n = r(78560);
            e.exports = function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && n(e, t)
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        71600: function(e) {
            e.exports = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        19549: function(e) {
            e.exports = function(e) {
                try {
                    return -1 !== Function.toString.call(e).indexOf("[native code]")
                } catch (t) {
                    return "function" == typeof e
                }
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        37028: function(e) {
            function t() {
                try {
                    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (e.exports = t = function() {
                    return !!r
                }, e.exports.__esModule = !0, e.exports.default = e.exports)()
            }
            e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        66193: function(e) {
            e.exports = function(e, t) {
                var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, o, a, u, s = [],
                        i = !0,
                        c = !1;
                    try {
                        if (a = (r = r.call(e)).next, 0 === t) {
                            if (Object(r) !== r) return;
                            i = !1
                        } else
                            for (; !(i = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); i = !0);
                    } catch (e) {
                        c = !0, o = e
                    } finally {
                        try {
                            if (!i && null != r.return && (u = r.return(), Object(u) !== u)) return
                        } finally {
                            if (c) throw o
                        }
                    }
                    return s
                }
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        16147: function(e) {
            e.exports = function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        60421: function(e, t, r) {
            var n = r(67425).default,
                o = r(85297);
            e.exports = function(e, t) {
                if (t && ("object" == n(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
                return o(e)
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        78560: function(e) {
            function t(r, n) {
                return e.exports = t = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, e.exports.__esModule = !0, e.exports.default = e.exports, t(r, n)
            }
            e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        43681: function(e, t, r) {
            var n = r(96314),
                o = r(66193),
                a = r(60121),
                u = r(16147);
            e.exports = function(e, t) {
                return n(e) || o(e, t) || a(e, t) || u()
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        68064: function(e, t, r) {
            var n = r(67425).default;
            e.exports = function(e, t) {
                if ("object" != n(e) || !e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var o = r.call(e, t || "default");
                    if ("object" != n(o)) return o;
                    throw TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        47739: function(e, t, r) {
            var n = r(67425).default,
                o = r(68064);
            e.exports = function(e) {
                var t = o(e, "string");
                return "symbol" == n(t) ? t : t + ""
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        60121: function(e, t, r) {
            var n = r(85748);
            e.exports = function(e, t) {
                if (e) {
                    if ("string" == typeof e) return n(e, t);
                    var r = ({}).toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
                }
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        78365: function(e, t, r) {
            var n = r(1147),
                o = r(78560),
                a = r(19549),
                u = r(73419);

            function s(t) {
                var r = "function" == typeof Map ? new Map : void 0;
                return e.exports = s = function(e) {
                    if (null === e || !a(e)) return e;
                    if ("function" != typeof e) throw TypeError("Super expression must either be null or a function");
                    if (void 0 !== r) {
                        if (r.has(e)) return r.get(e);
                        r.set(e, t)
                    }

                    function t() {
                        return u(e, arguments, n(this).constructor)
                    }
                    return t.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), o(t, e)
                }, e.exports.__esModule = !0, e.exports.default = e.exports, s(t)
            }
            e.exports = s, e.exports.__esModule = !0, e.exports.default = e.exports
        }
    }
]);