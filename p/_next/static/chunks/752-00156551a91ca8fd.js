try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "fac871ce-c794-4dc5-870e-f71f0d6686ac", e._sentryDebugIdIdentifier = "sentry-dbid-fac871ce-c794-4dc5-870e-f71f0d6686ac")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [752], {
        752: function(e, t, n) {
            n.d(t, {
                Dv: function() {
                    return a
                },
                KO: function() {
                    return f
                },
                b9: function() {
                    return d
                }
            });
            var r = n(2784),
                l = n(65058);
            let o = (0, r.createContext)(void 0),
                i = e => {
                    let t = (0, r.useContext)(o);
                    return (null == e ? void 0 : e.store) || t || (0, l.K7)()
                },
                u = e => "function" == typeof(null == e ? void 0 : e.then),
                s = r.use || (e => {
                    if ("pending" === e.status) throw e;
                    if ("fulfilled" === e.status) return e.value;
                    if ("rejected" === e.status) throw e.reason;
                    throw e.status = "pending", e.then(t => {
                        e.status = "fulfilled", e.value = t
                    }, t => {
                        e.status = "rejected", e.reason = t
                    }), e
                });

            function a(e, t) {
                let n = i(t),
                    [
                        [l, o, a], d
                    ] = (0, r.useReducer)(t => {
                        let r = n.get(e);
                        return Object.is(t[0], r) && t[1] === n && t[2] === e ? t : [r, n, e]
                    }, void 0, () => [n.get(e), n, e]),
                    f = l;
                (o !== n || a !== e) && (d(), f = n.get(e));
                let c = null == t ? void 0 : t.delay;
                return (0, r.useEffect)(() => {
                    let t = n.sub(e, () => {
                        if ("number" == typeof c) {
                            setTimeout(d, c);
                            return
                        }
                        d()
                    });
                    return d(), t
                }, [n, e, c]), (0, r.useDebugValue)(f), u(f) ? s(f) : f
            }

            function d(e, t) {
                let n = i(t);
                return (0, r.useCallback)((...t) => {
                    if (!("write" in e)) throw Error("not writable atom");
                    return n.set(e, ...t)
                }, [n, e])
            }

            function f(e, t) {
                return [a(e, t), d(e, t)]
            }
        },
        65058: function(e, t, n) {
            let r;
            n.d(t, {
                K7: function() {
                    return y
                },
                cn: function() {
                    return o
                }
            });
            let l = 0;

            function o(e, t) {
                let n = `atom${++l}`,
                    r = {
                        toString: () => n
                    };
                return "function" == typeof e ? r.read = e : (r.init = e, r.read = function(e) {
                    return e(this)
                }, r.write = function(e, t, n) {
                    return t(this, "function" == typeof n ? n(e(this)) : n)
                }), t && (r.write = t), r
            }
            let i = e => "init" in e,
                u = e => !!e.write,
                s = new WeakMap,
                a = (e, t) => {
                    s.set(e, t), e.catch(() => {}).finally(() => s.delete(e))
                },
                d = (e, t) => {
                    let n = s.get(e);
                    n && (s.delete(e), n(t))
                },
                f = (e, t) => {
                    e.status = "fulfilled", e.value = t
                },
                c = (e, t) => {
                    e.status = "rejected", e.reason = t
                },
                h = e => "function" == typeof(null == e ? void 0 : e.then),
                v = (e, t) => !!e && "v" in e && "v" in t && Object.is(e.v, t.v),
                g = (e, t) => !!e && "e" in e && "e" in t && Object.is(e.e, t.e),
                w = e => !!e && "v" in e && e.v instanceof Promise,
                _ = (e, t) => "v" in e && "v" in t && e.v.orig && e.v.orig === t.v.orig,
                b = e => {
                    if ("e" in e) throw e.e;
                    return e.v
                },
                p = () => {
                    let e, t;
                    let n = new WeakMap,
                        r = new WeakMap,
                        l = new Map;
                    e = new Set, t = new Set;
                    let o = e => n.get(e),
                        s = (e, t) => {
                            Object.freeze(t);
                            let r = n.get(e);
                            if (n.set(e, t), l.has(e) || l.set(e, r), w(r)) {
                                let e = "v" in t ? t.v instanceof Promise ? t.v : Promise.resolve(t.v) : Promise.reject(t.e);
                                r.v !== e && d(r.v, e)
                            }
                        },
                        p = (e, t, n) => {
                            let r = new Map,
                                l = !1;
                            n.forEach((n, o) => {
                                n || o !== e || (n = t), n ? (r.set(o, n), t.d.get(o) !== n && (l = !0)) : console.warn("[Bug] atom state not found")
                            }), (l || t.d.size !== r.size) && (t.d = r)
                        },
                        y = (e, t, n) => {
                            let r = o(e),
                                l = {
                                    d: (null == r ? void 0 : r.d) || new Map,
                                    v: t
                                };
                            if (n && p(e, l, n), v(r, l) && r.d === l.d) return r;
                            if (w(r) && w(l) && _(r, l)) {
                                if (r.d === l.d) return r;
                                l.v = r.v
                            }
                            return s(e, l), l
                        },
                        E = (e, t, n, l) => {
                            if (h(t)) {
                                let i;
                                let u = () => {
                                        let t = o(e);
                                        if (!w(t) || t.v !== s) return;
                                        let l = y(e, s, n);
                                        r.has(e) && t.d !== l.d && j(e, l, t.d)
                                    },
                                    s = new Promise((e, n) => {
                                        let r = !1;
                                        t.then(t => {
                                            r || (r = !0, f(s, t), e(t), u())
                                        }, e => {
                                            r || (r = !0, c(s, e), n(e), u())
                                        }), i = t => {
                                            r || (r = !0, t.then(e => f(s, e), e => c(s, e)), e(t))
                                        }
                                    });
                                return s.orig = t, s.status = "pending", a(s, e => {
                                    e && i(e), null == l || l()
                                }), y(e, s, n)
                            }
                            return y(e, t, n)
                        },
                        m = (e, t, n) => {
                            let r = o(e),
                                l = {
                                    d: (null == r ? void 0 : r.d) || new Map,
                                    e: t
                                };
                            return (n && p(e, l, n), g(r, l) && r.d === l.d) ? r : (s(e, l), l)
                        },
                        S = (e, t) => {
                            let n, l;
                            let s = o(e);
                            if (!t && s && (r.has(e) || Array.from(s.d).every(([t, n]) => {
                                    if (t === e) return !0;
                                    let r = S(t);
                                    return r === n || v(r, n)
                                }))) return s;
                            let a = new Map,
                                d = !0;
                            try {
                                let t = e.read(t => {
                                    if (t === e) {
                                        let e = o(t);
                                        if (e) return a.set(t, e), b(e);
                                        if (i(t)) return a.set(t, void 0), t.init;
                                        throw Error("no atom init")
                                    }
                                    let n = S(t);
                                    return a.set(t, n), b(n)
                                }, {
                                    get signal() {
                                        return n || (n = new AbortController), n.signal
                                    },
                                    get setSelf() {
                                        return u(e) || console.warn("setSelf function cannot be used with read-only atom"), !l && u(e) && (l = (...t) => {
                                            if (d && console.warn("setSelf function cannot be called in sync"), !d) return k(e, ...t)
                                        }), l
                                    }
                                });
                                return E(e, t, a, () => null == n ? void 0 : n.abort())
                            } catch (t) {
                                return m(e, t, a)
                            } finally {
                                d = !1
                            }
                        },
                        T = e => {
                            let t = r.get(e);
                            return t || (t = A(e)), t
                        },
                        M = (e, t) => !t.l.size && (!t.t.size || 1 === t.t.size && t.t.has(e)),
                        I = e => {
                            let t = r.get(e);
                            t && M(e, t) && C(e)
                        },
                        N = e => {
                            let t = new Map,
                                n = new WeakMap,
                                i = e => {
                                    var t;
                                    let n = new Set(null == (t = r.get(e)) ? void 0 : t.t);
                                    return l.forEach((t, r) => {
                                        var l;
                                        (null == (l = o(r)) ? void 0 : l.d.has(e)) && n.add(r)
                                    }), n
                                },
                                u = e => {
                                    i(e).forEach(r => {
                                        r !== e && (t.set(r, (t.get(r) || new Set).add(e)), n.set(r, (n.get(r) || 0) + 1), u(r))
                                    })
                                };
                            u(e);
                            let s = e => {
                                i(e).forEach(r => {
                                    var l;
                                    if (r !== e) {
                                        let e = n.get(r);
                                        if (e && n.set(r, --e), !e) {
                                            let e = !!(null == (l = t.get(r)) ? void 0 : l.size);
                                            e && (e = !v(o(r), S(r, !0))), e || t.forEach(e => e.delete(r))
                                        }
                                        s(r)
                                    }
                                })
                            };
                            s(e)
                        },
                        O = (t, ...n) => {
                            let r = !0,
                                l = t.write(e => b(S(e)), (n, ...l) => {
                                    let u;
                                    if (n === t) {
                                        if (!i(n)) throw Error("atom not writable");
                                        v(o(n), E(n, l[0])) || N(n)
                                    } else u = O(n, ...l);
                                    if (!r) {
                                        let t = z();
                                        e.forEach(e => e({
                                            type: "async-write",
                                            flushed: t
                                        }))
                                    }
                                    return u
                                }, ...n);
                            return r = !1, l
                        },
                        k = (t, ...n) => {
                            let r = O(t, ...n),
                                l = z();
                            return e.forEach(e => e({
                                type: "write",
                                flushed: l
                            })), r
                        },
                        A = (e, n, l) => {
                            var i;
                            let s = l || [];
                            null == (i = o(e)) || i.d.forEach((t, n) => {
                                let l = r.get(n);
                                l ? l.t.add(e) : n !== e && A(n, e, s)
                            }), S(e);
                            let a = {
                                t: new Set(n && [n]),
                                l: new Set
                            };
                            if (r.set(e, a), t.add(e), u(e) && e.onMount) {
                                let {
                                    onMount: t
                                } = e;
                                s.push(() => {
                                    let n = t((...t) => k(e, ...t));
                                    n && (a.u = n)
                                })
                            }
                            return l || s.forEach(e => e()), a
                        },
                        C = e => {
                            var n;
                            let l = null == (n = r.get(e)) ? void 0 : n.u;
                            l && l(), r.delete(e), t.delete(e);
                            let i = o(e);
                            i ? (w(i) && d(i.v), i.d.forEach((t, n) => {
                                if (n !== e) {
                                    let t = r.get(n);
                                    t && (t.t.delete(e), M(n, t) && C(n))
                                }
                            })) : console.warn("[Bug] could not find atom state to unmount", e)
                        },
                        j = (e, t, n) => {
                            let l = new Set(t.d.keys());
                            null == n || n.forEach((t, n) => {
                                if (l.has(n)) {
                                    l.delete(n);
                                    return
                                }
                                let o = r.get(n);
                                o && (o.t.delete(e), M(n, o) && C(n))
                            }), l.forEach(t => {
                                let n = r.get(t);
                                n ? n.t.add(e) : r.has(e) && A(t, e)
                            })
                        },
                        z = () => {
                            let e;
                            for (e = new Set; l.size;) {
                                let t = Array.from(l);
                                l.clear(), t.forEach(([t, n]) => {
                                    let l = o(t);
                                    if (l) {
                                        let o = r.get(t);
                                        o && l.d !== (null == n ? void 0 : n.d) && j(t, l, null == n ? void 0 : n.d), o && !(!w(n) && (v(n, l) || g(n, l))) && (o.l.forEach(e => e()), e.add(t))
                                    } else console.warn("[Bug] no atom state to flush")
                                })
                            }
                            return e
                        };
                    return {
                        get: e => b(S(e)),
                        set: k,
                        sub: (t, n) => {
                            let r = T(t),
                                l = z(),
                                o = r.l;
                            return o.add(n), e.forEach(e => e({
                                type: "sub",
                                flushed: l
                            })), () => {
                                o.delete(n), I(t), e.forEach(e => e({
                                    type: "unsub"
                                }))
                            }
                        },
                        dev_subscribe_store: (t, n) => {
                            if (2 !== n) throw Error("The current StoreListener revision is 2.");
                            return e.add(t), () => {
                                e.delete(t)
                            }
                        },
                        dev_get_mounted_atoms: () => t.values(),
                        dev_get_atom_state: e => n.get(e),
                        dev_get_mounted: e => r.get(e),
                        dev_restore_atoms: t => {
                            for (let [e, n] of t) i(e) && (E(e, n), N(e));
                            let n = z();
                            e.forEach(e => e({
                                type: "restore",
                                flushed: n
                            }))
                        }
                    }
                };
            "number" == typeof globalThis.__NUMBER_OF_JOTAI_INSTANCES__ ? ++globalThis.__NUMBER_OF_JOTAI_INSTANCES__ : globalThis.__NUMBER_OF_JOTAI_INSTANCES__ = 1;
            let y = () => (r || (1 !== globalThis.__NUMBER_OF_JOTAI_INSTANCES__ && console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"), r = p()), r)
        }
    }
]);