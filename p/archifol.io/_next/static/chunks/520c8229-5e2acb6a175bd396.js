try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "098d6dbb-36f3-4907-a600-62521145c3f5", e._sentryDebugIdIdentifier = "sentry-dbid-098d6dbb-36f3-4907-a600-62521145c3f5")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1509], {
        5865: function(e, t, n) {
            n.d(t, {
                Cf: function() {
                    return tz
                },
                DK: function() {
                    return tU
                },
                EG: function() {
                    return ea
                },
                Ig: function() {
                    return et
                },
                K9: function() {
                    return tW
                },
                ML: function() {
                    return tL
                },
                NB: function() {
                    return t_
                },
                NY: function() {
                    return X
                },
                Nl: function() {
                    return x
                },
                P1: function() {
                    return A
                },
                QC: function() {
                    return q
                },
                S0: function() {
                    return tV
                },
                Sz: function() {
                    return er
                },
                WR: function() {
                    return tq
                },
                XP: function() {
                    return m
                },
                b5: function() {
                    return k
                },
                bR: function() {
                    return es
                },
                hj: function() {
                    return eM
                },
                jo: function() {
                    return H
                },
                m7: function() {
                    return D
                },
                nU: function() {
                    return T
                },
                qv: function() {
                    return w
                },
                rI: function() {
                    return en
                },
                tI: function() {
                    return J
                },
                u9: function() {
                    return F
                },
                vc: function() {
                    return eg
                },
                zK: function() {
                    return tH
                }
            });
            var r = n(27191),
                o = n(52780),
                i = n(49080),
                s = n(26151),
                a = n(30764),
                l = n(60737),
                d = n(71405),
                c = Object.defineProperty,
                u = (e, t) => {
                    for (var n in t) c(e, n, {
                        get: t[n],
                        enumerable: !0
                    })
                };

            function p(e) {
                let {
                    state: t,
                    transaction: n
                } = e, {
                    selection: r
                } = n, {
                    doc: o
                } = n, {
                    storedMarks: i
                } = n;
                return { ...t,
                    apply: t.apply.bind(t),
                    applyTransaction: t.applyTransaction.bind(t),
                    plugins: t.plugins,
                    schema: t.schema,
                    reconfigure: t.reconfigure.bind(t),
                    toJSON: t.toJSON.bind(t),
                    get storedMarks() {
                        return i
                    },
                    get selection() {
                        return r
                    },
                    get doc() {
                        return o
                    },
                    get tr() {
                        return r = n.selection, o = n.doc, i = n.storedMarks, n
                    }
                }
            }
            var h = class {
                    constructor(e) {
                        this.editor = e.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = e.state
                    }
                    get hasCustomState() {
                        return !!this.customState
                    }
                    get state() {
                        return this.customState || this.editor.state
                    }
                    get commands() {
                        let {
                            rawCommands: e,
                            editor: t,
                            state: n
                        } = this, {
                            view: r
                        } = t, {
                            tr: o
                        } = n, i = this.buildProps(o);
                        return Object.fromEntries(Object.entries(e).map(([e, t]) => [e, (...e) => {
                            let n = t(...e)(i);
                            return o.getMeta("preventDispatch") || this.hasCustomState || r.dispatch(o), n
                        }]))
                    }
                    get chain() {
                        return () => this.createChain()
                    }
                    get can() {
                        return () => this.createCan()
                    }
                    createChain(e, t = !0) {
                        let {
                            rawCommands: n,
                            editor: r,
                            state: o
                        } = this, {
                            view: i
                        } = r, s = [], a = !!e, l = e || o.tr, d = { ...Object.fromEntries(Object.entries(n).map(([e, n]) => [e, (...e) => {
                                let r = this.buildProps(l, t),
                                    o = n(...e)(r);
                                return s.push(o), d
                            }])),
                            run: () => (a || !t || l.getMeta("preventDispatch") || this.hasCustomState || i.dispatch(l), s.every(e => !0 === e))
                        };
                        return d
                    }
                    createCan(e) {
                        let {
                            rawCommands: t,
                            state: n
                        } = this, r = e || n.tr, o = this.buildProps(r, !1);
                        return { ...Object.fromEntries(Object.entries(t).map(([e, t]) => [e, (...e) => t(...e)({ ...o,
                                dispatch: void 0
                            })])),
                            chain: () => this.createChain(r, !1)
                        }
                    }
                    buildProps(e, t = !0) {
                        let {
                            rawCommands: n,
                            editor: r,
                            state: o
                        } = this, {
                            view: i
                        } = r, s = {
                            tr: e,
                            editor: r,
                            view: i,
                            state: p({
                                state: o,
                                transaction: e
                            }),
                            dispatch: t ? () => void 0 : void 0,
                            chain: () => this.createChain(e, t),
                            can: () => this.createCan(e),
                            get commands() {
                                return Object.fromEntries(Object.entries(n).map(([e, t]) => [e, (...e) => t(...e)(s)]))
                            }
                        };
                        return s
                    }
                },
                f = class {
                    constructor() {
                        this.callbacks = {}
                    }
                    on(e, t) {
                        return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), this
                    }
                    emit(e, ...t) {
                        let n = this.callbacks[e];
                        return n && n.forEach(e => e.apply(this, t)), this
                    }
                    off(e, t) {
                        let n = this.callbacks[e];
                        return n && (t ? this.callbacks[e] = n.filter(e => e !== t) : delete this.callbacks[e]), this
                    }
                    once(e, t) {
                        let n = (...r) => {
                            this.off(e, n), t.apply(this, r)
                        };
                        return this.on(e, n)
                    }
                    removeAllListeners() {
                        this.callbacks = {}
                    }
                };

            function m(e, t) {
                let n = new s.wx(e);
                return t.forEach(e => {
                    e.steps.forEach(e => {
                        n.step(e)
                    })
                }), n
            }
            var g = e => {
                let t = e.childNodes;
                for (let n = t.length - 1; n >= 0; n -= 1) {
                    let r = t[n];
                    3 === r.nodeType && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? e.removeChild(r) : 1 === r.nodeType && g(r)
                }
                return e
            };

            function y(e) {
                if ("undefined" == typeof window) throw Error("[tiptap error]: there is no window object available, so this function cannot be used");
                let t = `<body>${e}</body>`;
                return g(new window.DOMParser().parseFromString(t, "text/html").body)
            }

            function v(e, t, n) {
                if (e instanceof a.NB || e instanceof a.HY) return e;
                n = {
                    slice: !0,
                    parseOptions: {},
                    ...n
                };
                let r = "object" == typeof e && null !== e,
                    o = "string" == typeof e;
                if (r) try {
                    if (Array.isArray(e) && e.length > 0) return a.HY.fromArray(e.map(e => t.nodeFromJSON(e)));
                    let r = t.nodeFromJSON(e);
                    return n.errorOnInvalidContent && r.check(), r
                } catch (r) {
                    if (n.errorOnInvalidContent) throw Error("[tiptap error]: Invalid JSON content", {
                        cause: r
                    });
                    return console.warn("[tiptap warn]: Invalid content.", "Passed value:", e, "Error:", r), v("", t, n)
                }
                if (o) {
                    if (n.errorOnInvalidContent) {
                        let r = !1,
                            o = "",
                            i = new a.V_({
                                topNode: t.spec.topNode,
                                marks: t.spec.marks,
                                nodes: t.spec.nodes.append({
                                    __tiptap__private__unknown__catch__all__node: {
                                        content: "inline*",
                                        group: "block",
                                        parseDOM: [{
                                            tag: "*",
                                            getAttrs: e => (r = !0, o = "string" == typeof e ? e : e.outerHTML, null)
                                        }]
                                    }
                                })
                            });
                        if (n.slice ? a.aw.fromSchema(i).parseSlice(y(e), n.parseOptions) : a.aw.fromSchema(i).parse(y(e), n.parseOptions), n.errorOnInvalidContent && r) throw Error("[tiptap error]: Invalid HTML content", {
                            cause: Error(`Invalid element found: ${o}`)
                        })
                    }
                    let r = a.aw.fromSchema(t);
                    return n.slice ? r.parseSlice(y(e), n.parseOptions).content : r.parse(y(e), n.parseOptions)
                }
                return v("", t, n)
            }

            function b(e, t, n = {}, r = {}) {
                return v(e, t, {
                    slice: !1,
                    parseOptions: n,
                    errorOnInvalidContent: r.errorOnInvalidContent
                })
            }

            function k(e, t, n) {
                let r = [];
                return e.nodesBetween(t.from, t.to, (e, t) => {
                    n(e) && r.push({
                        node: e,
                        pos: t
                    })
                }), r
            }

            function w(e, t) {
                for (let n = e.depth; n > 0; n -= 1) {
                    let r = e.node(n);
                    if (t(r)) return {
                        pos: n > 0 ? e.before(n) : 0,
                        start: e.start(n),
                        depth: n,
                        node: r
                    }
                }
            }

            function M(e) {
                return t => w(t.$from, e)
            }

            function x(e, t, n) {
                return void 0 === e.config[t] && e.parent ? x(e.parent, t, n) : "function" == typeof e.config[t] ? e.config[t].bind({ ...n,
                    parent: e.parent ? x(e.parent, t, n) : null
                }) : e.config[t]
            }

            function E(e) {
                return e.map(e => {
                    let t = {
                            name: e.name,
                            options: e.options,
                            storage: e.storage
                        },
                        n = x(e, "addExtensions", t);
                    return n ? [e, ...E(n())] : e
                }).flat(10)
            }

            function S(e, t) {
                let n = a.PW.fromSchema(t).serializeFragment(e),
                    r = document.implementation.createHTMLDocument().createElement("div");
                return r.appendChild(n), r.innerHTML
            }

            function C(e) {
                return "function" == typeof e
            }

            function T(e, t, ...n) {
                return C(e) ? t ? e.bind(t)(...n) : e(...n) : e
            }

            function O(e) {
                return {
                    baseExtensions: e.filter(e => "extension" === e.type),
                    nodeExtensions: e.filter(e => "node" === e.type),
                    markExtensions: e.filter(e => "mark" === e.type)
                }
            }

            function P(e) {
                let t = [],
                    {
                        nodeExtensions: n,
                        markExtensions: r
                    } = O(e),
                    o = [...n, ...r],
                    i = {
                        default: null,
                        validate: void 0,
                        rendered: !0,
                        renderHTML: null,
                        parseHTML: null,
                        keepOnSplit: !0,
                        isRequired: !1
                    };
                return e.forEach(e => {
                    let n = {
                            name: e.name,
                            options: e.options,
                            storage: e.storage,
                            extensions: o
                        },
                        r = x(e, "addGlobalAttributes", n);
                    r && r().forEach(e => {
                        e.types.forEach(n => {
                            Object.entries(e.attributes).forEach(([e, r]) => {
                                t.push({
                                    type: n,
                                    name: e,
                                    attribute: { ...i,
                                        ...r
                                    }
                                })
                            })
                        })
                    })
                }), o.forEach(e => {
                    let n = {
                            name: e.name,
                            options: e.options,
                            storage: e.storage
                        },
                        r = x(e, "addAttributes", n);
                    r && Object.entries(r()).forEach(([n, r]) => {
                        let o = { ...i,
                            ...r
                        };
                        "function" == typeof(null == o ? void 0 : o.default) && (o.default = o.default()), (null == o ? void 0 : o.isRequired) && (null == o ? void 0 : o.default) === void 0 && delete o.default, t.push({
                            type: e.name,
                            name: n,
                            attribute: o
                        })
                    })
                }), t
            }

            function A(...e) {
                return e.filter(e => !!e).reduce((e, t) => {
                    let n = { ...e
                    };
                    return Object.entries(t).forEach(([e, t]) => {
                        if (!n[e]) {
                            n[e] = t;
                            return
                        }
                        if ("class" === e) {
                            let r = t ? String(t).split(" ") : [],
                                o = n[e] ? n[e].split(" ") : [],
                                i = r.filter(e => !o.includes(e));
                            n[e] = [...o, ...i].join(" ")
                        } else if ("style" === e) {
                            let r = t ? t.split(";").map(e => e.trim()).filter(Boolean) : [],
                                o = n[e] ? n[e].split(";").map(e => e.trim()).filter(Boolean) : [],
                                i = new Map;
                            o.forEach(e => {
                                let [t, n] = e.split(":").map(e => e.trim());
                                i.set(t, n)
                            }), r.forEach(e => {
                                let [t, n] = e.split(":").map(e => e.trim());
                                i.set(t, n)
                            }), n[e] = Array.from(i.entries()).map(([e, t]) => `${e}: ${t}`).join("; ")
                        } else n[e] = t
                    }), n
                }, {})
            }

            function D(e, t) {
                return t.filter(t => t.type === e.type.name).filter(e => e.attribute.rendered).map(t => t.attribute.renderHTML ? t.attribute.renderHTML(e.attrs) || {} : {
                    [t.name]: e.attrs[t.name]
                }).reduce((e, t) => A(e, t), {})
            }

            function $(e, t) {
                return "style" in e ? e : { ...e,
                    getAttrs: n => {
                        let r = e.getAttrs ? e.getAttrs(n) : e.attrs;
                        if (!1 === r) return !1;
                        let o = t.reduce((e, t) => {
                            var r;
                            let o = t.attribute.parseHTML ? t.attribute.parseHTML(n) : "string" != typeof(r = n.getAttribute(t.name)) ? r : r.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(r) : "true" === r || "false" !== r && r;
                            return null == o ? e : { ...e,
                                [t.name]: o
                            }
                        }, {});
                        return { ...r,
                            ...o
                        }
                    }
                }
            }

            function j(e) {
                return Object.fromEntries(Object.entries(e).filter(([e, t]) => !("attrs" === e && function(e = {}) {
                    return 0 === Object.keys(e).length && e.constructor === Object
                }(t)) && null != t))
            }

            function I(e) {
                return e.sort((e, t) => {
                    let n = x(e, "priority") || 100,
                        r = x(t, "priority") || 100;
                    return n > r ? -1 : n < r ? 1 : 0
                })
            }

            function B(e) {
                var t;
                let n = I(E(e)),
                    r = Array.from(new Set((t = n.map(e => e.name)).filter((e, n) => t.indexOf(e) !== n)));
                return r.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${r.map(e=>`'${e}'`).join(", ")}]. This can lead to issues.`), n
            }

            function N(e, t, n) {
                let {
                    from: r,
                    to: o
                } = t, {
                    blockSeparator: i = "\n\n",
                    textSerializers: s = {}
                } = n || {}, a = "";
                return e.nodesBetween(r, o, (e, n, l, d) => {
                    var c;
                    e.isBlock && n > r && (a += i);
                    let u = null == s ? void 0 : s[e.type.name];
                    if (u) return l && (a += u({
                        node: e,
                        pos: n,
                        parent: l,
                        index: d,
                        range: t
                    })), !1;
                    e.isText && (a += null == (c = null == e ? void 0 : e.text) ? void 0 : c.slice(Math.max(r, n) - n, o - n))
                }), a
            }

            function R(e) {
                return Object.fromEntries(Object.entries(e.nodes).filter(([, e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText]))
            }

            function L(e, t) {
                if ("string" == typeof e) {
                    if (!t.marks[e]) throw Error(`There is no mark type named '${e}'. Maybe you forgot to add the extension?`);
                    return t.marks[e]
                }
                return e
            }

            function z(e, t) {
                let n = L(t, e.schema),
                    {
                        from: r,
                        to: o,
                        empty: i
                    } = e.selection,
                    s = [];
                i ? (e.storedMarks && s.push(...e.storedMarks), s.push(...e.selection.$head.marks())) : e.doc.nodesBetween(r, o, e => {
                    s.push(...e.marks)
                });
                let a = s.find(e => e.type.name === n.name);
                return a ? { ...a.attrs
                } : {}
            }

            function H(e, t) {
                if ("string" == typeof e) {
                    if (!t.nodes[e]) throw Error(`There is no node type named '${e}'. Maybe you forgot to add the extension?`);
                    return t.nodes[e]
                }
                return e
            }

            function V(e, t) {
                return t.nodes[e] ? "node" : t.marks[e] ? "mark" : null
            }

            function F(e, t) {
                let n = V("string" == typeof t ? t : t.name, e.schema);
                return "node" === n ? function(e, t) {
                    let n = H(t, e.schema),
                        {
                            from: r,
                            to: o
                        } = e.selection,
                        i = [];
                    e.doc.nodesBetween(r, o, e => {
                        i.push(e)
                    });
                    let s = i.reverse().find(e => e.type.name === n.name);
                    return s ? { ...s.attrs
                    } : {}
                }(e, t) : "mark" === n ? z(e, t) : {}
            }

            function q(e) {
                let {
                    mapping: t,
                    steps: n
                } = e, r = [];
                return t.maps.forEach((e, o) => {
                        let i = [];
                        if (e.ranges.length) e.forEach((e, t) => {
                            i.push({
                                from: e,
                                to: t
                            })
                        });
                        else {
                            let {
                                from: e,
                                to: t
                            } = n[o];
                            if (void 0 === e || void 0 === t) return;
                            i.push({
                                from: e,
                                to: t
                            })
                        }
                        i.forEach(({
                            from: e,
                            to: n
                        }) => {
                            let i = t.slice(o).map(e, -1),
                                s = t.slice(o).map(n),
                                a = t.invert().map(i, -1),
                                l = t.invert().map(s);
                            r.push({
                                oldRange: {
                                    from: a,
                                    to: l
                                },
                                newRange: {
                                    from: i,
                                    to: s
                                }
                            })
                        })
                    }),
                    function(e) {
                        let t = function(e, t = JSON.stringify) {
                            let n = {};
                            return e.filter(e => {
                                let r = t(e);
                                return !Object.prototype.hasOwnProperty.call(n, r) && (n[r] = !0)
                            })
                        }(e);
                        return 1 === t.length ? t : t.filter((e, n) => !t.filter((e, t) => t !== n).some(t => e.oldRange.from >= t.oldRange.from && e.oldRange.to <= t.oldRange.to && e.newRange.from >= t.newRange.from && e.newRange.to <= t.newRange.to))
                    }(r)
            }

            function _(e) {
                return "[object RegExp]" === Object.prototype.toString.call(e)
            }

            function U(e, t, n = {
                strict: !0
            }) {
                let r = Object.keys(t);
                return !r.length || r.every(r => n.strict ? t[r] === e[r] : _(t[r]) ? t[r].test(e[r]) : t[r] === e[r])
            }

            function W(e, t, n = {}) {
                return e.find(e => e.type === t && U(Object.fromEntries(Object.keys(n).map(t => [t, e.attrs[t]])), n))
            }

            function Y(e, t, n = {}) {
                return !!W(e, t, n)
            }

            function K(e, t, n) {
                var r;
                if (!e || !t) return;
                let o = e.parent.childAfter(e.parentOffset);
                if (o.node && o.node.marks.some(e => e.type === t) || (o = e.parent.childBefore(e.parentOffset)), !o.node || !o.node.marks.some(e => e.type === t) || (n = n || (null == (r = o.node.marks[0]) ? void 0 : r.attrs), !W([...o.node.marks], t, n))) return;
                let i = o.index,
                    s = e.start() + o.offset,
                    a = i + 1,
                    l = s + o.node.nodeSize;
                for (; i > 0 && Y([...e.parent.child(i - 1).marks], t, n);) i -= 1, s -= e.parent.child(i).nodeSize;
                for (; a < e.parent.childCount && Y([...e.parent.child(a).marks], t, n);) l += e.parent.child(a).nodeSize, a += 1;
                return {
                    from: s,
                    to: l
                }
            }

            function J(e, t, n) {
                let r = [];
                return e === t ? n.resolve(e).marks().forEach(t => {
                    let o = K(n.resolve(e), t.type);
                    o && r.push({
                        mark: t,
                        ...o
                    })
                }) : n.nodesBetween(e, t, (e, t) => {
                    e && (null == e ? void 0 : e.nodeSize) !== void 0 && r.push(...e.marks.map(n => ({
                        from: t,
                        to: t + e.nodeSize,
                        mark: n
                    })))
                }), r
            }
            var X = (e, t, n, r = 20) => {
                let o = e.doc.resolve(n),
                    i = r,
                    s = null;
                for (; i > 0 && null === s;) {
                    let e = o.node(i);
                    (null == e ? void 0 : e.type.name) === t ? s = e : i -= 1
                }
                return [s, i]
            };

            function G(e, t) {
                return t.nodes[e] || t.marks[e] || null
            }

            function Q(e, t, n) {
                return Object.fromEntries(Object.entries(n).filter(([n]) => {
                    let r = e.find(e => e.type === t && e.name === n);
                    return !!r && r.attribute.keepOnSplit
                }))
            }
            var Z = (e, t = 500) => {
                let n = "",
                    r = e.parentOffset;
                return e.parent.nodesBetween(Math.max(0, r - t), r, (e, t, o, i) => {
                    var s, a;
                    let l = (null == (a = (s = e.type.spec).toText) ? void 0 : a.call(s, {
                        node: e,
                        pos: t,
                        parent: o,
                        index: i
                    })) || e.textContent || "%leaf%";
                    n += e.isAtom && !e.isText ? l : l.slice(0, Math.max(0, r - t))
                }), n
            };

            function ee(e, t, n = {}) {
                let {
                    empty: r,
                    ranges: o
                } = e.selection, i = t ? L(t, e.schema) : null;
                if (r) return !!(e.storedMarks || e.selection.$from.marks()).filter(e => !i || i.name === e.type.name).find(e => U(e.attrs, n, {
                    strict: !1
                }));
                let s = 0,
                    a = [];
                if (o.forEach(({
                        $from: t,
                        $to: n
                    }) => {
                        let r = t.pos,
                            o = n.pos;
                        e.doc.nodesBetween(r, o, (e, t) => {
                            if (!e.isText && !e.marks.length) return;
                            let n = Math.max(r, t),
                                i = Math.min(o, t + e.nodeSize);
                            s += i - n, a.push(...e.marks.map(e => ({
                                mark: e,
                                from: n,
                                to: i
                            })))
                        })
                    }), 0 === s) return !1;
                let l = a.filter(e => !i || i.name === e.mark.type.name).filter(e => U(e.mark.attrs, n, {
                        strict: !1
                    })).reduce((e, t) => e + t.to - t.from, 0),
                    d = a.filter(e => !i || e.mark.type !== i && e.mark.type.excludes(i)).reduce((e, t) => e + t.to - t.from, 0);
                return (l > 0 ? l + d : l) >= s
            }

            function et(e, t, n = {}) {
                let {
                    from: r,
                    to: o,
                    empty: i
                } = e.selection, s = t ? H(t, e.schema) : null, a = [];
                e.doc.nodesBetween(r, o, (e, t) => {
                    if (e.isText) return;
                    let n = Math.max(r, t),
                        i = Math.min(o, t + e.nodeSize);
                    a.push({
                        node: e,
                        from: n,
                        to: i
                    })
                });
                let l = o - r,
                    d = a.filter(e => !s || s.name === e.node.type.name).filter(e => U(e.node.attrs, n, {
                        strict: !1
                    }));
                return i ? !!d.length : d.reduce((e, t) => e + t.to - t.from, 0) >= l
            }
            var en = (e, t) => {
                    let {
                        $from: n,
                        $to: r,
                        $anchor: o
                    } = e.selection;
                    if (t) {
                        let n = M(e => e.type.name === t)(e.selection);
                        if (!n) return !1;
                        let r = e.doc.resolve(n.pos + 1);
                        return o.pos + 1 === r.end()
                    }
                    return !(r.parentOffset < r.parent.nodeSize - 2) && n.pos === r.pos
                },
                er = e => {
                    let {
                        $from: t,
                        $to: n
                    } = e.selection;
                    return !(t.parentOffset > 0) && t.pos === n.pos
                };

            function eo(e, t) {
                return Array.isArray(t) ? t.some(t => ("string" == typeof t ? t : t.name) === e.name) : t
            }

            function ei(e, t) {
                let {
                    nodeExtensions: n
                } = O(t), r = n.find(t => t.name === e);
                if (!r) return !1;
                let o = {
                        name: r.name,
                        options: r.options,
                        storage: r.storage
                    },
                    i = T(x(r, "group", o));
                return "string" == typeof i && i.split(" ").includes("list")
            }

            function es(e, {
                checkChildren: t = !0,
                ignoreWhitespace: n = !1
            } = {}) {
                var r;
                if (n) {
                    if ("hardBreak" === e.type.name) return !0;
                    if (e.isText) return /^\s*$/m.test(null != (r = e.text) ? r : "")
                }
                if (e.isText) return !e.text;
                if (e.isAtom || e.isLeaf) return !1;
                if (0 === e.content.childCount) return !0;
                if (t) {
                    let r = !0;
                    return e.content.forEach(e => {
                        !1 !== r && (es(e, {
                            ignoreWhitespace: n,
                            checkChildren: t
                        }) || (r = !1))
                    }), r
                }
                return !1
            }

            function ea(e) {
                return e instanceof r.qv
            }

            function el(e) {
                return e instanceof r.Bs
            }

            function ed(e = 0, t = 0, n = 0) {
                return Math.min(Math.max(e, t), n)
            }

            function ec(e, t = null) {
                if (!t) return null;
                let n = r.Y1.atStart(e),
                    o = r.Y1.atEnd(e);
                if ("start" === t || !0 === t) return n;
                if ("end" === t) return o;
                let i = n.from,
                    s = o.to;
                return "all" === t ? r.Bs.create(e, ed(0, i, s), ed(e.content.size, i, s)) : r.Bs.create(e, ed(t, i, s), ed(t, i, s))
            }
            var eu = class {
                    constructor(e) {
                        this.find = e.find, this.handler = e.handler
                    }
                },
                ep = (e, t) => {
                    if (_(t)) return t.exec(e);
                    let n = t(e);
                    if (!n) return null;
                    let r = [n.text];
                    return r.index = n.index, r.input = e, r.data = n.data, n.replaceWith && (n.text.includes(n.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(n.replaceWith)), r
                };

            function eh(e) {
                var t;
                let {
                    editor: n,
                    from: r,
                    to: o,
                    text: i,
                    rules: s,
                    plugin: a
                } = e, {
                    view: l
                } = n;
                if (l.composing) return !1;
                let d = l.state.doc.resolve(r);
                if (d.parent.type.spec.code || (null == (t = d.nodeBefore || d.nodeAfter) ? void 0 : t.marks.find(e => e.type.spec.code))) return !1;
                let c = !1,
                    u = Z(d) + i;
                return s.forEach(e => {
                    if (c) return;
                    let t = ep(u, e.find);
                    if (!t) return;
                    let s = l.state.tr,
                        d = p({
                            state: l.state,
                            transaction: s
                        }),
                        f = {
                            from: r - (t[0].length - i.length),
                            to: o
                        },
                        {
                            commands: m,
                            chain: g,
                            can: y
                        } = new h({
                            editor: n,
                            state: d
                        });
                    null !== e.handler({
                        state: d,
                        range: f,
                        match: t,
                        commands: m,
                        chain: g,
                        can: y
                    }) && s.steps.length && (s.setMeta(a, {
                        transform: s,
                        from: r,
                        to: o,
                        text: i
                    }), l.dispatch(s), c = !0)
                }), c
            }

            function ef(e) {
                return "Object" === Object.prototype.toString.call(e).slice(8, -1) && e.constructor === Object && Object.getPrototypeOf(e) === Object.prototype
            }
            var em = class {
                    constructor(e = {}) {
                        this.type = "extendable", this.parent = null, this.child = null, this.name = "", this.config = {
                            name: this.name
                        }, this.config = { ...this.config,
                            ...e
                        }, this.name = this.config.name
                    }
                    get options() {
                        return { ...T(x(this, "addOptions", {
                                name: this.name
                            })) || {}
                        }
                    }
                    get storage() {
                        return { ...T(x(this, "addStorage", {
                                name: this.name,
                                options: this.options
                            })) || {}
                        }
                    }
                    configure(e = {}) {
                        let t = this.extend({ ...this.config,
                            addOptions: () => (function e(t, n) {
                                let r = { ...t
                                };
                                return ef(t) && ef(n) && Object.keys(n).forEach(o => {
                                    ef(n[o]) && ef(t[o]) ? r[o] = e(t[o], n[o]) : r[o] = n[o]
                                }), r
                            })(this.options, e)
                        });
                        return t.name = this.name, t.parent = this.parent, t
                    }
                    extend(e = {}) {
                        let t = new this.constructor({ ...this.config,
                            ...e
                        });
                        return t.parent = this, this.child = t, t.name = "name" in e ? e.name : t.parent.name, t
                    }
                },
                eg = class e extends em {
                    constructor() {
                        super(...arguments), this.type = "mark"
                    }
                    static create(t = {}) {
                        return new e("function" == typeof t ? t() : t)
                    }
                    static handleExit({
                        editor: e,
                        mark: t
                    }) {
                        let {
                            tr: n
                        } = e.state, r = e.state.selection.$from;
                        if (r.pos === r.end()) {
                            let o = r.marks();
                            if (!o.find(e => (null == e ? void 0 : e.type.name) === t.name)) return !1;
                            let i = o.find(e => (null == e ? void 0 : e.type.name) === t.name);
                            return i && n.removeStoredMark(i), n.insertText(" ", r.pos), e.view.dispatch(n), !0
                        }
                        return !1
                    }
                    configure(e) {
                        return super.configure(e)
                    }
                    extend(e) {
                        let t = "function" == typeof e ? e() : e;
                        return super.extend(t)
                    }
                },
                ey = class {
                    constructor(e) {
                        this.find = e.find, this.handler = e.handler
                    }
                },
                ev = (e, t, n) => {
                    if (_(t)) return [...e.matchAll(t)];
                    let r = t(e, n);
                    return r ? r.map(t => {
                        let n = [t.text];
                        return n.index = t.index, n.input = e, n.data = t.data, t.replaceWith && (t.text.includes(t.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), n.push(t.replaceWith)), n
                    }) : []
                },
                eb = null,
                ek = e => {
                    var t;
                    let n = new ClipboardEvent("paste", {
                        clipboardData: new DataTransfer
                    });
                    return null == (t = n.clipboardData) || t.setData("text/html", e), n
                },
                ew = class {
                    constructor(e, t) {
                        this.splittableMarks = [], this.editor = t, this.extensions = B(e), this.schema = function(e, t) {
                            var n;
                            let r = P(e),
                                {
                                    nodeExtensions: o,
                                    markExtensions: i
                                } = O(e),
                                s = null == (n = o.find(e => x(e, "topNode"))) ? void 0 : n.name,
                                l = Object.fromEntries(o.map(n => {
                                    let o = r.filter(e => e.type === n.name),
                                        i = {
                                            name: n.name,
                                            options: n.options,
                                            storage: n.storage,
                                            editor: t
                                        },
                                        s = j({ ...e.reduce((e, t) => {
                                                let r = x(t, "extendNodeSchema", i);
                                                return { ...e,
                                                    ...r ? r(n) : {}
                                                }
                                            }, {}),
                                            content: T(x(n, "content", i)),
                                            marks: T(x(n, "marks", i)),
                                            group: T(x(n, "group", i)),
                                            inline: T(x(n, "inline", i)),
                                            atom: T(x(n, "atom", i)),
                                            selectable: T(x(n, "selectable", i)),
                                            draggable: T(x(n, "draggable", i)),
                                            code: T(x(n, "code", i)),
                                            whitespace: T(x(n, "whitespace", i)),
                                            linebreakReplacement: T(x(n, "linebreakReplacement", i)),
                                            defining: T(x(n, "defining", i)),
                                            isolating: T(x(n, "isolating", i)),
                                            attrs: Object.fromEntries(o.map(e => {
                                                var t, n;
                                                return [e.name, {
                                                    default: null == (t = null == e ? void 0 : e.attribute) ? void 0 : t.default,
                                                    validate: null == (n = null == e ? void 0 : e.attribute) ? void 0 : n.validate
                                                }]
                                            }))
                                        }),
                                        a = T(x(n, "parseHTML", i));
                                    a && (s.parseDOM = a.map(e => $(e, o)));
                                    let l = x(n, "renderHTML", i);
                                    l && (s.toDOM = e => l({
                                        node: e,
                                        HTMLAttributes: D(e, o)
                                    }));
                                    let d = x(n, "renderText", i);
                                    return d && (s.toText = d), [n.name, s]
                                })),
                                d = Object.fromEntries(i.map(n => {
                                    let o = r.filter(e => e.type === n.name),
                                        i = {
                                            name: n.name,
                                            options: n.options,
                                            storage: n.storage,
                                            editor: t
                                        },
                                        s = j({ ...e.reduce((e, t) => {
                                                let r = x(t, "extendMarkSchema", i);
                                                return { ...e,
                                                    ...r ? r(n) : {}
                                                }
                                            }, {}),
                                            inclusive: T(x(n, "inclusive", i)),
                                            excludes: T(x(n, "excludes", i)),
                                            group: T(x(n, "group", i)),
                                            spanning: T(x(n, "spanning", i)),
                                            code: T(x(n, "code", i)),
                                            attrs: Object.fromEntries(o.map(e => {
                                                var t, n;
                                                return [e.name, {
                                                    default: null == (t = null == e ? void 0 : e.attribute) ? void 0 : t.default,
                                                    validate: null == (n = null == e ? void 0 : e.attribute) ? void 0 : n.validate
                                                }]
                                            }))
                                        }),
                                        a = T(x(n, "parseHTML", i));
                                    a && (s.parseDOM = a.map(e => $(e, o)));
                                    let l = x(n, "renderHTML", i);
                                    return l && (s.toDOM = e => l({
                                        mark: e,
                                        HTMLAttributes: D(e, o)
                                    })), [n.name, s]
                                }));
                            return new a.V_({
                                topNode: s,
                                nodes: l,
                                marks: d
                            })
                        }(this.extensions, t), this.setupExtensions()
                    }
                    get commands() {
                        return this.extensions.reduce((e, t) => {
                            let n = {
                                    name: t.name,
                                    options: t.options,
                                    storage: this.editor.extensionStorage[t.name],
                                    editor: this.editor,
                                    type: G(t.name, this.schema)
                                },
                                r = x(t, "addCommands", n);
                            return r ? { ...e,
                                ...r()
                            } : e
                        }, {})
                    }
                    get plugins() {
                        let {
                            editor: e
                        } = this;
                        return I([...this.extensions].reverse()).map(t => {
                            let n = {
                                    name: t.name,
                                    options: t.options,
                                    storage: this.editor.extensionStorage[t.name],
                                    editor: e,
                                    type: G(t.name, this.schema)
                                },
                                o = [],
                                s = x(t, "addKeyboardShortcuts", n),
                                l = {};
                            if ("mark" === t.type && x(t, "exitable", n) && (l.ArrowRight = () => eg.handleExit({
                                    editor: e,
                                    mark: t
                                })), s) {
                                let t = Object.fromEntries(Object.entries(s()).map(([t, n]) => [t, () => n({
                                    editor: e
                                })]));
                                l = { ...l,
                                    ...t
                                }
                            }
                            let d = (0, i.h)(l);
                            o.push(d);
                            let c = x(t, "addInputRules", n);
                            if (eo(t, e.options.enableInputRules) && c) {
                                let t = c();
                                if (t && t.length) {
                                    let n = function(e) {
                                            let {
                                                editor: t,
                                                rules: n
                                            } = e, o = new r.Sy({
                                                state: {
                                                    init: () => null,
                                                    apply(e, r, i) {
                                                        let s = e.getMeta(o);
                                                        if (s) return s;
                                                        let l = e.getMeta("applyInputRules");
                                                        return l && setTimeout(() => {
                                                            let {
                                                                text: e
                                                            } = l;
                                                            "string" == typeof e || (e = S(a.HY.from(e), i.schema));
                                                            let {
                                                                from: r
                                                            } = l, s = r + e.length;
                                                            eh({
                                                                editor: t,
                                                                from: r,
                                                                to: s,
                                                                text: e,
                                                                rules: n,
                                                                plugin: o
                                                            })
                                                        }), e.selectionSet || e.docChanged ? null : r
                                                    }
                                                },
                                                props: {
                                                    handleTextInput: (e, r, i, s) => eh({
                                                        editor: t,
                                                        from: r,
                                                        to: i,
                                                        text: s,
                                                        rules: n,
                                                        plugin: o
                                                    }),
                                                    handleDOMEvents: {
                                                        compositionend: e => (setTimeout(() => {
                                                            let {
                                                                $cursor: r
                                                            } = e.state.selection;
                                                            r && eh({
                                                                editor: t,
                                                                from: r.pos,
                                                                to: r.pos,
                                                                text: "",
                                                                rules: n,
                                                                plugin: o
                                                            })
                                                        }), !1)
                                                    },
                                                    handleKeyDown(e, r) {
                                                        if ("Enter" !== r.key) return !1;
                                                        let {
                                                            $cursor: i
                                                        } = e.state.selection;
                                                        return !!i && eh({
                                                            editor: t,
                                                            from: i.pos,
                                                            to: i.pos,
                                                            text: "\n",
                                                            rules: n,
                                                            plugin: o
                                                        })
                                                    }
                                                },
                                                isInputRules: !0
                                            });
                                            return o
                                        }({
                                            editor: e,
                                            rules: t
                                        }),
                                        i = Array.isArray(n) ? n : [n];
                                    o.push(...i)
                                }
                            }
                            let u = x(t, "addPasteRules", n);
                            if (eo(t, e.options.enablePasteRules) && u) {
                                let t = u();
                                if (t && t.length) {
                                    let n = function(e) {
                                        let t;
                                        let {
                                            editor: n,
                                            rules: o
                                        } = e, i = null, s = !1, l = !1, d = "undefined" != typeof ClipboardEvent ? new ClipboardEvent("paste") : null;
                                        try {
                                            t = "undefined" != typeof DragEvent ? new DragEvent("drop") : null
                                        } catch {
                                            t = null
                                        }
                                        let c = ({
                                            state: e,
                                            from: r,
                                            to: o,
                                            rule: i,
                                            pasteEvt: s
                                        }) => {
                                            let a = e.tr;
                                            if (function(e) {
                                                    let {
                                                        editor: t,
                                                        state: n,
                                                        from: r,
                                                        to: o,
                                                        rule: i,
                                                        pasteEvent: s,
                                                        dropEvent: a
                                                    } = e, {
                                                        commands: l,
                                                        chain: d,
                                                        can: c
                                                    } = new h({
                                                        editor: t,
                                                        state: n
                                                    }), u = [];
                                                    return n.doc.nodesBetween(r, o, (e, t) => {
                                                        var p, h, f, m, g;
                                                        if ((null == (h = null == (p = e.type) ? void 0 : p.spec) ? void 0 : h.code) || !(e.isText || e.isTextblock || e.isInline)) return;
                                                        let y = null != (g = null != (m = null == (f = e.content) ? void 0 : f.size) ? m : e.nodeSize) ? g : 0,
                                                            v = Math.max(r, t),
                                                            b = Math.min(o, t + y);
                                                        v >= b || ev(e.isText ? e.text || "" : e.textBetween(v - t, b - t, void 0, "￼"), i.find, s).forEach(e => {
                                                            if (void 0 === e.index) return;
                                                            let t = v + e.index + 1,
                                                                r = t + e[0].length,
                                                                o = {
                                                                    from: n.tr.mapping.map(t),
                                                                    to: n.tr.mapping.map(r)
                                                                },
                                                                p = i.handler({
                                                                    state: n,
                                                                    range: o,
                                                                    match: e,
                                                                    commands: l,
                                                                    chain: d,
                                                                    can: c,
                                                                    pasteEvent: s,
                                                                    dropEvent: a
                                                                });
                                                            u.push(p)
                                                        })
                                                    }), u.every(e => null !== e)
                                                }({
                                                    editor: n,
                                                    state: p({
                                                        state: e,
                                                        transaction: a
                                                    }),
                                                    from: Math.max(r - 1, 0),
                                                    to: o.b - 1,
                                                    rule: i,
                                                    pasteEvent: s,
                                                    dropEvent: t
                                                }) && a.steps.length) {
                                                try {
                                                    t = "undefined" != typeof DragEvent ? new DragEvent("drop") : null
                                                } catch {
                                                    t = null
                                                }
                                                return d = "undefined" != typeof ClipboardEvent ? new ClipboardEvent("paste") : null, a
                                            }
                                        };
                                        return o.map(e => new r.Sy({
                                            view(e) {
                                                let t = t => {
                                                        var r;
                                                        (i = (null == (r = e.dom.parentElement) ? void 0 : r.contains(t.target)) ? e.dom.parentElement : null) && (eb = n)
                                                    },
                                                    r = () => {
                                                        eb && (eb = null)
                                                    };
                                                return window.addEventListener("dragstart", t), window.addEventListener("dragend", r), {
                                                    destroy() {
                                                        window.removeEventListener("dragstart", t), window.removeEventListener("dragend", r)
                                                    }
                                                }
                                            },
                                            props: {
                                                handleDOMEvents: {
                                                    drop: (e, n) => {
                                                        if (l = i === e.dom.parentElement, t = n, !l) {
                                                            let e = eb;
                                                            (null == e ? void 0 : e.isEditable) && setTimeout(() => {
                                                                let t = e.state.selection;
                                                                t && e.commands.deleteRange({
                                                                    from: t.from,
                                                                    to: t.to
                                                                })
                                                            }, 10)
                                                        }
                                                        return !1
                                                    },
                                                    paste: (e, t) => {
                                                        var n;
                                                        let r = null == (n = t.clipboardData) ? void 0 : n.getData("text/html");
                                                        return d = t, s = !!(null == r ? void 0 : r.includes("data-pm-slice")), !1
                                                    }
                                                }
                                            },
                                            appendTransaction: (t, n, r) => {
                                                let o = t[0],
                                                    i = "paste" === o.getMeta("uiEvent") && !s,
                                                    u = "drop" === o.getMeta("uiEvent") && !l,
                                                    p = o.getMeta("applyPasteRules"),
                                                    h = !!p;
                                                if (!i && !u && !h) return;
                                                if (h) {
                                                    let {
                                                        text: t
                                                    } = p;
                                                    "string" == typeof t || (t = S(a.HY.from(t), r.schema));
                                                    let {
                                                        from: n
                                                    } = p, o = n + t.length;
                                                    return c({
                                                        rule: e,
                                                        state: r,
                                                        from: n,
                                                        to: {
                                                            b: o
                                                        },
                                                        pasteEvt: ek(t)
                                                    })
                                                }
                                                let f = n.doc.content.findDiffStart(r.doc.content),
                                                    m = n.doc.content.findDiffEnd(r.doc.content);
                                                if ("number" == typeof f && m && f !== m.b) return c({
                                                    rule: e,
                                                    state: r,
                                                    from: f,
                                                    to: m,
                                                    pasteEvt: d
                                                })
                                            }
                                        }))
                                    }({
                                        editor: e,
                                        rules: t
                                    });
                                    o.push(...n)
                                }
                            }
                            let f = x(t, "addProseMirrorPlugins", n);
                            if (f) {
                                let e = f();
                                o.push(...e)
                            }
                            return o
                        }).flat()
                    }
                    get attributes() {
                        return P(this.extensions)
                    }
                    get nodeViews() {
                        let {
                            editor: e
                        } = this, {
                            nodeExtensions: t
                        } = O(this.extensions);
                        return Object.fromEntries(t.filter(e => !!x(e, "addNodeView")).map(t => {
                            let n = this.attributes.filter(e => e.type === t.name),
                                r = {
                                    name: t.name,
                                    options: t.options,
                                    storage: this.editor.extensionStorage[t.name],
                                    editor: e,
                                    type: H(t.name, this.schema)
                                },
                                o = x(t, "addNodeView", r);
                            return o ? [t.name, (r, i, s, a, l) => {
                                let d = D(r, n);
                                return o()({
                                    node: r,
                                    view: i,
                                    getPos: s,
                                    decorations: a,
                                    innerDecorations: l,
                                    editor: e,
                                    extension: t,
                                    HTMLAttributes: d
                                })
                            }] : []
                        }))
                    }
                    get markViews() {
                        let {
                            editor: e
                        } = this, {
                            markExtensions: t
                        } = O(this.extensions);
                        return Object.fromEntries(t.filter(e => !!x(e, "addMarkView")).map(t => {
                            let n = this.attributes.filter(e => e.type === t.name),
                                r = {
                                    name: t.name,
                                    options: t.options,
                                    storage: this.editor.extensionStorage[t.name],
                                    editor: e,
                                    type: L(t.name, this.schema)
                                },
                                o = x(t, "addMarkView", r);
                            return o ? [t.name, (r, i, s) => {
                                let a = D(r, n);
                                return o()({
                                    mark: r,
                                    view: i,
                                    inline: s,
                                    editor: e,
                                    extension: t,
                                    HTMLAttributes: a,
                                    updateAttributes: t => {
                                        tF(r, e, t)
                                    }
                                })
                            }] : []
                        }))
                    }
                    setupExtensions() {
                        let e = this.extensions;
                        this.editor.extensionStorage = Object.fromEntries(e.map(e => [e.name, e.storage])), e.forEach(e => {
                            var t;
                            let n = {
                                name: e.name,
                                options: e.options,
                                storage: this.editor.extensionStorage[e.name],
                                editor: this.editor,
                                type: G(e.name, this.schema)
                            };
                            "mark" === e.type && (null == (t = T(x(e, "keepOnSplit", n))) || t) && this.splittableMarks.push(e.name);
                            let r = x(e, "onBeforeCreate", n),
                                o = x(e, "onCreate", n),
                                i = x(e, "onUpdate", n),
                                s = x(e, "onSelectionUpdate", n),
                                a = x(e, "onTransaction", n),
                                l = x(e, "onFocus", n),
                                d = x(e, "onBlur", n),
                                c = x(e, "onDestroy", n);
                            r && this.editor.on("beforeCreate", r), o && this.editor.on("create", o), i && this.editor.on("update", i), s && this.editor.on("selectionUpdate", s), a && this.editor.on("transaction", a), l && this.editor.on("focus", l), d && this.editor.on("blur", d), c && this.editor.on("destroy", c)
                        })
                    }
                };
            ew.resolve = B, ew.sort = I, ew.flatten = E, u({}, {
                ClipboardTextSerializer: () => ex,
                Commands: () => tT,
                Delete: () => tO,
                Drop: () => tP,
                Editable: () => tA,
                FocusEvents: () => t$,
                Keymap: () => tj,
                Paste: () => tI,
                Tabindex: () => tB,
                focusEventsPluginKey: () => tD
            });
            var eM = class e extends em {
                    constructor() {
                        super(...arguments), this.type = "extension"
                    }
                    static create(t = {}) {
                        return new e("function" == typeof t ? t() : t)
                    }
                    configure(e) {
                        return super.configure(e)
                    }
                    extend(e) {
                        let t = "function" == typeof e ? e() : e;
                        return super.extend(t)
                    }
                },
                ex = eM.create({
                    name: "clipboardTextSerializer",
                    addOptions: () => ({
                        blockSeparator: void 0
                    }),
                    addProseMirrorPlugins() {
                        return [new r.Sy({
                            key: new r.H$("clipboardTextSerializer"),
                            props: {
                                clipboardTextSerializer: () => {
                                    let {
                                        editor: e
                                    } = this, {
                                        state: t,
                                        schema: n
                                    } = e, {
                                        doc: r,
                                        selection: o
                                    } = t, {
                                        ranges: i
                                    } = o, s = Math.min(...i.map(e => e.$from.pos)), a = Math.max(...i.map(e => e.$to.pos)), l = R(n);
                                    return N(r, {
                                        from: s,
                                        to: a
                                    }, { ...void 0 !== this.options.blockSeparator ? {
                                            blockSeparator: this.options.blockSeparator
                                        } : {},
                                        textSerializers: l
                                    })
                                }
                            }
                        })]
                    }
                }),
                eE = {};
            u(eE, {
                blur: () => eS,
                clearContent: () => eC,
                clearNodes: () => eT,
                command: () => eO,
                createParagraphNear: () => eP,
                cut: () => eA,
                deleteCurrentNode: () => eD,
                deleteNode: () => e$,
                deleteRange: () => ej,
                deleteSelection: () => eI,
                enter: () => eB,
                exitCode: () => eN,
                extendMarkRange: () => eR,
                first: () => eL,
                focus: () => eV,
                forEach: () => eF,
                insertContent: () => eq,
                insertContentAt: () => eU,
                joinBackward: () => eK,
                joinDown: () => eY,
                joinForward: () => eJ,
                joinItemBackward: () => eX,
                joinItemForward: () => eG,
                joinTextblockBackward: () => eQ,
                joinTextblockForward: () => eZ,
                joinUp: () => eW,
                keyboardShortcut: () => e1,
                lift: () => e2,
                liftEmptyBlock: () => e9,
                liftListItem: () => e3,
                newlineInCode: () => e5,
                resetAttributes: () => e7,
                scrollIntoView: () => e4,
                selectAll: () => e8,
                selectNodeBackward: () => te,
                selectNodeForward: () => tt,
                selectParentNode: () => tn,
                selectTextblockEnd: () => tr,
                selectTextblockStart: () => to,
                setContent: () => ti,
                setMark: () => ts,
                setMeta: () => ta,
                setNode: () => tl,
                setNodeSelection: () => td,
                setTextSelection: () => tc,
                sinkListItem: () => tu,
                splitBlock: () => th,
                splitListItem: () => tf,
                toggleList: () => ty,
                toggleMark: () => tv,
                toggleNode: () => tb,
                toggleWrap: () => tk,
                undoInputRule: () => tw,
                unsetAllMarks: () => tM,
                unsetMark: () => tx,
                updateAttributes: () => tE,
                wrapIn: () => tS,
                wrapInList: () => tC
            });
            var eS = () => ({
                    editor: e,
                    view: t
                }) => (requestAnimationFrame(() => {
                    var n;
                    e.isDestroyed || (t.dom.blur(), null == (n = null == window ? void 0 : window.getSelection()) || n.removeAllRanges())
                }), !0),
                eC = (e = !0) => ({
                    commands: t
                }) => t.setContent("", {
                    emitUpdate: e
                }),
                eT = () => ({
                    state: e,
                    tr: t,
                    dispatch: n
                }) => {
                    let {
                        selection: r
                    } = t, {
                        ranges: o
                    } = r;
                    return !n || (o.forEach(({
                        $from: n,
                        $to: r
                    }) => {
                        e.doc.nodesBetween(n.pos, r.pos, (e, n) => {
                            if (e.type.isText) return;
                            let {
                                doc: r,
                                mapping: o
                            } = t, i = r.resolve(o.map(n)), a = r.resolve(o.map(n + e.nodeSize)), l = i.blockRange(a);
                            if (!l) return;
                            let d = (0, s.k9)(l);
                            if (e.type.isTextblock) {
                                let {
                                    defaultType: e
                                } = i.parent.contentMatchAt(i.index());
                                t.setNodeMarkup(l.start, e)
                            }(d || 0 === d) && t.lift(l, d)
                        })
                    }), !0)
                },
                eO = e => t => e(t),
                eP = () => ({
                    state: e,
                    dispatch: t
                }) => (0, l.mD)(e, t),
                eA = (e, t) => ({
                    editor: n,
                    tr: o
                }) => {
                    let {
                        state: i
                    } = n, s = i.doc.slice(e.from, e.to);
                    o.deleteRange(e.from, e.to);
                    let a = o.mapping.map(t);
                    return o.insert(a, s.content), o.setSelection(new r.Bs(o.doc.resolve(Math.max(a - 1, 0)))), !0
                },
                eD = () => ({
                    tr: e,
                    dispatch: t
                }) => {
                    let {
                        selection: n
                    } = e, r = n.$anchor.node();
                    if (r.content.size > 0) return !1;
                    let o = e.selection.$anchor;
                    for (let n = o.depth; n > 0; n -= 1)
                        if (o.node(n).type === r.type) {
                            if (t) {
                                let t = o.before(n),
                                    r = o.after(n);
                                e.delete(t, r).scrollIntoView()
                            }
                            return !0
                        }
                    return !1
                },
                e$ = e => ({
                    tr: t,
                    state: n,
                    dispatch: r
                }) => {
                    let o = H(e, n.schema),
                        i = t.selection.$anchor;
                    for (let e = i.depth; e > 0; e -= 1)
                        if (i.node(e).type === o) {
                            if (r) {
                                let n = i.before(e),
                                    r = i.after(e);
                                t.delete(n, r).scrollIntoView()
                            }
                            return !0
                        }
                    return !1
                },
                ej = e => ({
                    tr: t,
                    dispatch: n
                }) => {
                    let {
                        from: r,
                        to: o
                    } = e;
                    return n && t.delete(r, o), !0
                },
                eI = () => ({
                    state: e,
                    dispatch: t
                }) => (0, l.NE)(e, t),
                eB = () => ({
                    commands: e
                }) => e.keyboardShortcut("Enter"),
                eN = () => ({
                    state: e,
                    dispatch: t
                }) => (0, l.uo)(e, t),
                eR = (e, t = {}) => ({
                    tr: n,
                    state: o,
                    dispatch: i
                }) => {
                    let s = L(e, o.schema),
                        {
                            doc: a,
                            selection: l
                        } = n,
                        {
                            $from: d,
                            from: c,
                            to: u
                        } = l;
                    if (i) {
                        let e = K(d, s, t);
                        if (e && e.from <= c && e.to >= u) {
                            let t = r.Bs.create(a, e.from, e.to);
                            n.setSelection(t)
                        }
                    }
                    return !0
                },
                eL = e => t => {
                    let n = "function" == typeof e ? e(t) : e;
                    for (let e = 0; e < n.length; e += 1)
                        if (n[e](t)) return !0;
                    return !1
                };

            function ez() {
                return "Android" === navigator.platform || /android/i.test(navigator.userAgent)
            }

            function eH() {
                return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document
            }
            var eV = (e = null, t = {}) => ({
                    editor: n,
                    view: r,
                    tr: o,
                    dispatch: i
                }) => {
                    t = {
                        scrollIntoView: !0,
                        ...t
                    };
                    let s = () => {
                        (eH() || ez()) && r.dom.focus(), requestAnimationFrame(() => {
                            !n.isDestroyed && (r.focus(), (null == t ? void 0 : t.scrollIntoView) && n.commands.scrollIntoView())
                        })
                    };
                    if (r.hasFocus() && null === e || !1 === e) return !0;
                    if (i && null === e && !el(n.state.selection)) return s(), !0;
                    let a = ec(o.doc, e) || n.state.selection,
                        l = n.state.selection.eq(a);
                    return i && (l || o.setSelection(a), l && o.storedMarks && o.setStoredMarks(o.storedMarks), s()), !0
                },
                eF = (e, t) => n => e.every((e, r) => t(e, { ...n,
                    index: r
                })),
                eq = (e, t) => ({
                    tr: n,
                    commands: r
                }) => r.insertContentAt({
                    from: n.selection.from,
                    to: n.selection.to
                }, e, t),
                e_ = e => !("type" in e),
                eU = (e, t, n) => ({
                    tr: o,
                    dispatch: i,
                    editor: l
                }) => {
                    var d;
                    if (i) {
                        let i, c;
                        n = {
                            parseOptions: l.options.parseOptions,
                            updateSelection: !0,
                            applyInputRules: !1,
                            applyPasteRules: !1,
                            ...n
                        };
                        let {
                            selection: u
                        } = l.state, p = e => {
                            l.emit("contentError", {
                                editor: l,
                                error: e,
                                disableCollaboration: () => {
                                    "collaboration" in l.storage && "object" == typeof l.storage.collaboration && l.storage.collaboration && (l.storage.collaboration.isDisabled = !0)
                                }
                            })
                        }, h = {
                            preserveWhitespace: "full",
                            ...n.parseOptions
                        };
                        if (!n.errorOnInvalidContent && !l.options.enableContentCheck && l.options.emitContentError) try {
                            v(t, l.schema, {
                                parseOptions: h,
                                errorOnInvalidContent: !0
                            })
                        } catch (e) {
                            p(e)
                        }
                        try {
                            i = v(t, l.schema, {
                                parseOptions: h,
                                errorOnInvalidContent: null != (d = n.errorOnInvalidContent) ? d : l.options.enableContentCheck
                            })
                        } catch (e) {
                            return p(e), !1
                        }
                        let {
                            from: f,
                            to: m
                        } = "number" == typeof e ? {
                            from: e,
                            to: e
                        } : {
                            from: e.from,
                            to: e.to
                        }, g = !0, y = !0;
                        if ((e_(i) ? i : [i]).forEach(e => {
                                e.check(), g = !!g && e.isText && 0 === e.marks.length, y = !!y && e.isBlock
                            }), f === m && y) {
                            let {
                                parent: e
                            } = o.doc.resolve(f);
                            !e.isTextblock || e.type.spec.code || e.childCount || (f -= 1, m += 1)
                        }
                        if (g) {
                            if (Array.isArray(t)) c = t.map(e => e.text || "").join("");
                            else if (t instanceof a.HY) {
                                let e = "";
                                t.forEach(t => {
                                    t.text && (e += t.text)
                                }), c = e
                            } else c = "object" == typeof t && t && t.text ? t.text : t;
                            o.insertText(c, f, m)
                        } else {
                            c = i;
                            let e = 0 === u.$from.parentOffset,
                                t = u.$from.node().isText || u.$from.node().isTextblock,
                                n = u.$from.node().content.size > 0;
                            e && t && n && (f = Math.max(0, f - 1)), o.replaceWith(f, m, c)
                        }
                        n.updateSelection && function(e, t, n) {
                            let o = e.steps.length - 1;
                            if (o < t) return;
                            let i = e.steps[o];
                            if (!(i instanceof s.Pu || i instanceof s.FC)) return;
                            let a = e.mapping.maps[o],
                                l = 0;
                            a.forEach((e, t, n, r) => {
                                0 === l && (l = r)
                            }), e.setSelection(r.Y1.near(e.doc.resolve(l), -1))
                        }(o, o.steps.length - 1, 0), n.applyInputRules && o.setMeta("applyInputRules", {
                            from: f,
                            text: c
                        }), n.applyPasteRules && o.setMeta("applyPasteRules", {
                            from: f,
                            text: c
                        })
                    }
                    return !0
                },
                eW = () => ({
                    state: e,
                    dispatch: t
                }) => (0, l.MI)(e, t),
                eY = () => ({
                    state: e,
                    dispatch: t
                }) => (0, l.Ig)(e, t),
                eK = () => ({
                    state: e,
                    dispatch: t
                }) => (0, l.al)(e, t),
                eJ = () => ({
                    state: e,
                    dispatch: t
                }) => (0, l.Y_)(e, t),
                eX = () => ({
                    state: e,
                    dispatch: t,
                    tr: n
                }) => {
                    try {
                        let r = (0, s.GJ)(e.doc, e.selection.$from.pos, -1);
                        if (null == r) return !1;
                        return n.join(r, 2), t && t(n), !0
                    } catch {
                        return !1
                    }
                },
                eG = () => ({
                    state: e,
                    dispatch: t,
                    tr: n
                }) => {
                    try {
                        let r = (0, s.GJ)(e.doc, e.selection.$from.pos, 1);
                        if (null == r) return !1;
                        return n.join(r, 2), t && t(n), !0
                    } catch {
                        return !1
                    }
                },
                eQ = () => ({
                    state: e,
                    dispatch: t
                }) => (0, l.rr)(e, t),
                eZ = () => ({
                    state: e,
                    dispatch: t
                }) => (0, l.cR)(e, t);

            function e0() {
                return "undefined" != typeof navigator && /Mac/.test(navigator.platform)
            }
            var e1 = e => ({
                    editor: t,
                    view: n,
                    tr: r,
                    dispatch: o
                }) => {
                    let i = (function(e) {
                            let t, n, r, o;
                            let i = e.split(/-(?!$)/),
                                s = i[i.length - 1];
                            "Space" === s && (s = " ");
                            for (let e = 0; e < i.length - 1; e += 1) {
                                let s = i[e];
                                if (/^(cmd|meta|m)$/i.test(s)) o = !0;
                                else if (/^a(lt)?$/i.test(s)) t = !0;
                                else if (/^(c|ctrl|control)$/i.test(s)) n = !0;
                                else if (/^s(hift)?$/i.test(s)) r = !0;
                                else if (/^mod$/i.test(s)) eH() || e0() ? o = !0 : n = !0;
                                else throw Error(`Unrecognized modifier name: ${s}`)
                            }
                            return t && (s = `Alt-${s}`), n && (s = `Ctrl-${s}`), o && (s = `Meta-${s}`), r && (s = `Shift-${s}`), s
                        })(e).split(/-(?!$)/),
                        s = i.find(e => !["Alt", "Ctrl", "Meta", "Shift"].includes(e)),
                        a = new KeyboardEvent("keydown", {
                            key: "Space" === s ? " " : s,
                            altKey: i.includes("Alt"),
                            ctrlKey: i.includes("Ctrl"),
                            metaKey: i.includes("Meta"),
                            shiftKey: i.includes("Shift"),
                            bubbles: !0,
                            cancelable: !0
                        }),
                        l = t.captureTransaction(() => {
                            n.someProp("handleKeyDown", e => e(n, a))
                        });
                    return null == l || l.steps.forEach(e => {
                        let t = e.map(r.mapping);
                        t && o && r.maybeStep(t)
                    }), !0
                },
                e2 = (e, t = {}) => ({
                    state: n,
                    dispatch: r
                }) => {
                    let o = H(e, n.schema);
                    return !!et(n, o, t) && (0, l.xb)(n, r)
                },
                e9 = () => ({
                    state: e,
                    dispatch: t
                }) => (0, l.X0)(e, t),
                e3 = e => ({
                    state: t,
                    dispatch: n
                }) => {
                    let r = H(e, t.schema);
                    return (0, d.IB)(r)(t, n)
                },
                e5 = () => ({
                    state: e,
                    dispatch: t
                }) => (0, l.QK)(e, t);

            function e6(e, t) {
                let n = "string" == typeof t ? [t] : t;
                return Object.keys(e).reduce((t, r) => (n.includes(r) || (t[r] = e[r]), t), {})
            }
            var e7 = (e, t) => ({
                    tr: n,
                    state: r,
                    dispatch: o
                }) => {
                    let i = null,
                        s = null,
                        a = V("string" == typeof e ? e : e.name, r.schema);
                    return !!a && ("node" === a && (i = H(e, r.schema)), "mark" === a && (s = L(e, r.schema)), o && n.selection.ranges.forEach(e => {
                        r.doc.nodesBetween(e.$from.pos, e.$to.pos, (e, r) => {
                            i && i === e.type && n.setNodeMarkup(r, void 0, e6(e.attrs, t)), s && e.marks.length && e.marks.forEach(o => {
                                s === o.type && n.addMark(r, r + e.nodeSize, s.create(e6(o.attrs, t)))
                            })
                        })
                    }), !0)
                },
                e4 = () => ({
                    tr: e,
                    dispatch: t
                }) => (t && e.scrollIntoView(), !0),
                e8 = () => ({
                    tr: e,
                    dispatch: t
                }) => {
                    if (t) {
                        let t = new r.C1(e.doc);
                        e.setSelection(t)
                    }
                    return !0
                },
                te = () => ({
                    state: e,
                    dispatch: t
                }) => (0, l._M)(e, t),
                tt = () => ({
                    state: e,
                    dispatch: t
                }) => (0, l.o)(e, t),
                tn = () => ({
                    state: e,
                    dispatch: t
                }) => (0, l.N0)(e, t),
                tr = () => ({
                    state: e,
                    dispatch: t
                }) => (0, l.nw)(e, t),
                to = () => ({
                    state: e,
                    dispatch: t
                }) => (0, l.U9)(e, t),
                ti = (e, {
                    errorOnInvalidContent: t,
                    emitUpdate: n = !0,
                    parseOptions: r = {}
                } = {}) => ({
                    editor: o,
                    tr: i,
                    dispatch: s,
                    commands: a
                }) => {
                    let {
                        doc: l
                    } = i;
                    if ("full" !== r.preserveWhitespace) {
                        let a = b(e, o.schema, r, {
                            errorOnInvalidContent: null != t ? t : o.options.enableContentCheck
                        });
                        return s && i.replaceWith(0, l.content.size, a).setMeta("preventUpdate", !n), !0
                    }
                    return s && i.setMeta("preventUpdate", !n), a.insertContentAt({
                        from: 0,
                        to: l.content.size
                    }, e, {
                        parseOptions: r,
                        errorOnInvalidContent: null != t ? t : o.options.enableContentCheck
                    })
                },
                ts = (e, t = {}) => ({
                    tr: n,
                    state: r,
                    dispatch: o
                }) => {
                    let {
                        selection: i
                    } = n, {
                        empty: s,
                        ranges: a
                    } = i, l = L(e, r.schema);
                    if (o) {
                        if (s) {
                            let e = z(r, l);
                            n.addStoredMark(l.create({ ...e,
                                ...t
                            }))
                        } else a.forEach(e => {
                            let o = e.$from.pos,
                                i = e.$to.pos;
                            r.doc.nodesBetween(o, i, (e, r) => {
                                let s = Math.max(r, o),
                                    a = Math.min(r + e.nodeSize, i);
                                e.marks.find(e => e.type === l) ? e.marks.forEach(e => {
                                    l === e.type && n.addMark(s, a, l.create({ ...e.attrs,
                                        ...t
                                    }))
                                }) : n.addMark(s, a, l.create(t))
                            })
                        })
                    }
                    return function(e, t, n) {
                        var r;
                        let {
                            selection: o
                        } = t, i = null;
                        if (el(o) && (i = o.$cursor), i) {
                            let t = null != (r = e.storedMarks) ? r : i.marks();
                            return i.parent.type.allowsMarkType(n) && (!!n.isInSet(t) || !t.some(e => e.type.excludes(n)))
                        }
                        let {
                            ranges: s
                        } = o;
                        return s.some(({
                            $from: t,
                            $to: r
                        }) => {
                            let o = 0 === t.depth && e.doc.inlineContent && e.doc.type.allowsMarkType(n);
                            return e.doc.nodesBetween(t.pos, r.pos, (e, t, r) => {
                                if (o) return !1;
                                if (e.isInline) {
                                    let t = !r || r.type.allowsMarkType(n),
                                        i = !!n.isInSet(e.marks) || !e.marks.some(e => e.type.excludes(n));
                                    o = t && i
                                }
                                return !o
                            }), o
                        })
                    }(r, n, l)
                },
                ta = (e, t) => ({
                    tr: n
                }) => (n.setMeta(e, t), !0),
                tl = (e, t = {}) => ({
                    state: n,
                    dispatch: r,
                    chain: o
                }) => {
                    let i;
                    let s = H(e, n.schema);
                    return (n.selection.$anchor.sameParent(n.selection.$head) && (i = n.selection.$anchor.parent.attrs), s.isTextblock) ? o().command(({
                        commands: e
                    }) => !!(0, l.uJ)(s, { ...i,
                        ...t
                    })(n) || e.clearNodes()).command(({
                        state: e
                    }) => (0, l.uJ)(s, { ...i,
                        ...t
                    })(e, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1)
                },
                td = e => ({
                    tr: t,
                    dispatch: n
                }) => {
                    if (n) {
                        let {
                            doc: n
                        } = t, o = ed(e, 0, n.content.size), i = r.qv.create(n, o);
                        t.setSelection(i)
                    }
                    return !0
                },
                tc = e => ({
                    tr: t,
                    dispatch: n
                }) => {
                    if (n) {
                        let {
                            doc: n
                        } = t, {
                            from: o,
                            to: i
                        } = "number" == typeof e ? {
                            from: e,
                            to: e
                        } : e, s = r.Bs.atStart(n).from, a = r.Bs.atEnd(n).to, l = ed(o, s, a), d = ed(i, s, a), c = r.Bs.create(n, l, d);
                        t.setSelection(c)
                    }
                    return !0
                },
                tu = e => ({
                    state: t,
                    dispatch: n
                }) => {
                    let r = H(e, t.schema);
                    return (0, d.bw)(r)(t, n)
                };

            function tp(e, t) {
                let n = e.storedMarks || e.selection.$to.parentOffset && e.selection.$from.marks();
                if (n) {
                    let r = n.filter(e => null == t ? void 0 : t.includes(e.type.name));
                    e.tr.ensureMarks(r)
                }
            }
            var th = ({
                    keepMarks: e = !0
                } = {}) => ({
                    tr: t,
                    state: n,
                    dispatch: o,
                    editor: i
                }) => {
                    let {
                        selection: a,
                        doc: l
                    } = t, {
                        $from: d,
                        $to: c
                    } = a, u = Q(i.extensionManager.attributes, d.node().type.name, d.node().attrs);
                    if (a instanceof r.qv && a.node.isBlock) return !!(d.parentOffset && (0, s.Ax)(l, d.pos)) && (o && (e && tp(n, i.extensionManager.splittableMarks), t.split(d.pos).scrollIntoView()), !0);
                    if (!d.parent.isBlock) return !1;
                    let p = c.parentOffset === c.parent.content.size,
                        h = 0 === d.depth ? void 0 : function(e) {
                            for (let t = 0; t < e.edgeCount; t += 1) {
                                let {
                                    type: n
                                } = e.edge(t);
                                if (n.isTextblock && !n.hasRequiredAttrs()) return n
                            }
                            return null
                        }(d.node(-1).contentMatchAt(d.indexAfter(-1))),
                        f = p && h ? [{
                            type: h,
                            attrs: u
                        }] : void 0,
                        m = (0, s.Ax)(t.doc, t.mapping.map(d.pos), 1, f);
                    if (!f && !m && (0, s.Ax)(t.doc, t.mapping.map(d.pos), 1, h ? [{
                            type: h
                        }] : void 0) && (m = !0, f = h ? [{
                            type: h,
                            attrs: u
                        }] : void 0), o) {
                        if (m && (a instanceof r.Bs && t.deleteSelection(), t.split(t.mapping.map(d.pos), 1, f), h && !p && !d.parentOffset && d.parent.type !== h)) {
                            let e = t.mapping.map(d.before()),
                                n = t.doc.resolve(e);
                            d.node(-1).canReplaceWith(n.index(), n.index() + 1, h) && t.setNodeMarkup(t.mapping.map(d.before()), h)
                        }
                        e && tp(n, i.extensionManager.splittableMarks), t.scrollIntoView()
                    }
                    return m
                },
                tf = (e, t = {}) => ({
                    tr: n,
                    state: o,
                    dispatch: i,
                    editor: l
                }) => {
                    var d;
                    let c = H(e, o.schema),
                        {
                            $from: u,
                            $to: p
                        } = o.selection,
                        h = o.selection.node;
                    if (h && h.isBlock || u.depth < 2 || !u.sameParent(p)) return !1;
                    let f = u.node(-1);
                    if (f.type !== c) return !1;
                    let m = l.extensionManager.attributes;
                    if (0 === u.parent.content.size && u.node(-1).childCount === u.indexAfter(-1)) {
                        if (2 === u.depth || u.node(-3).type !== c || u.index(-2) !== u.node(-2).childCount - 1) return !1;
                        if (i) {
                            let e = a.HY.empty,
                                o = u.index(-1) ? 1 : u.index(-2) ? 2 : 3;
                            for (let t = u.depth - o; t >= u.depth - 3; t -= 1) e = a.HY.from(u.node(t).copy(e));
                            let i = u.indexAfter(-1) < u.node(-2).childCount ? 1 : u.indexAfter(-2) < u.node(-3).childCount ? 2 : 3,
                                s = { ...Q(m, u.node().type.name, u.node().attrs),
                                    ...t
                                },
                                l = (null == (d = c.contentMatch.defaultType) ? void 0 : d.createAndFill(s)) || void 0;
                            e = e.append(a.HY.from(c.createAndFill(null, l) || void 0));
                            let p = u.before(u.depth - (o - 1));
                            n.replace(p, u.after(-i), new a.p2(e, 4 - o, 0));
                            let h = -1;
                            n.doc.nodesBetween(p, n.doc.content.size, (e, t) => {
                                if (h > -1) return !1;
                                e.isTextblock && 0 === e.content.size && (h = t + 1)
                            }), h > -1 && n.setSelection(r.Bs.near(n.doc.resolve(h))), n.scrollIntoView()
                        }
                        return !0
                    }
                    let g = p.pos === u.end() ? f.contentMatchAt(0).defaultType : null,
                        y = { ...Q(m, f.type.name, f.attrs),
                            ...t
                        },
                        v = { ...Q(m, u.node().type.name, u.node().attrs),
                            ...t
                        };
                    if (n.delete(u.pos, p.pos), !(0, s.Ax)(n.doc, u.pos, 2)) return !1;
                    if (i) {
                        let {
                            selection: e,
                            storedMarks: t
                        } = o, {
                            splittableMarks: r
                        } = l.extensionManager, s = t || e.$to.parentOffset && e.$from.marks();
                        if (n.split(u.pos, 2, g ? [{
                                type: c,
                                attrs: y
                            }, {
                                type: g,
                                attrs: v
                            }] : [{
                                type: c,
                                attrs: y
                            }]).scrollIntoView(), !s || !i) return !0;
                        let a = s.filter(e => r.includes(e.type.name));
                        n.ensureMarks(a)
                    }
                    return !0
                },
                tm = (e, t) => {
                    let n = M(e => e.type === t)(e.selection);
                    if (!n) return !0;
                    let r = e.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
                    if (void 0 === r) return !0;
                    let o = e.doc.nodeAt(r);
                    return !(n.node.type === (null == o ? void 0 : o.type) && (0, s.Mn)(e.doc, n.pos)) || (e.join(n.pos), !0)
                },
                tg = (e, t) => {
                    let n = M(e => e.type === t)(e.selection);
                    if (!n) return !0;
                    let r = e.doc.resolve(n.start).after(n.depth);
                    if (void 0 === r) return !0;
                    let o = e.doc.nodeAt(r);
                    return !(n.node.type === (null == o ? void 0 : o.type) && (0, s.Mn)(e.doc, r)) || (e.join(r), !0)
                },
                ty = (e, t, n, r = {}) => ({
                    editor: o,
                    tr: i,
                    state: s,
                    dispatch: a,
                    chain: l,
                    commands: d,
                    can: c
                }) => {
                    let {
                        extensions: u,
                        splittableMarks: p
                    } = o.extensionManager, h = H(e, s.schema), f = H(t, s.schema), {
                        selection: m,
                        storedMarks: g
                    } = s, {
                        $from: y,
                        $to: v
                    } = m, b = y.blockRange(v), k = g || m.$to.parentOffset && m.$from.marks();
                    if (!b) return !1;
                    let w = M(e => ei(e.type.name, u))(m);
                    if (b.depth >= 1 && w && b.depth - w.depth <= 1) {
                        if (w.node.type === h) return d.liftListItem(f);
                        if (ei(w.node.type.name, u) && h.validContent(w.node.content) && a) return l().command(() => (i.setNodeMarkup(w.pos, h), !0)).command(() => tm(i, h)).command(() => tg(i, h)).run()
                    }
                    return n && k && a ? l().command(() => {
                        let e = c().wrapInList(h, r),
                            t = k.filter(e => p.includes(e.type.name));
                        return i.ensureMarks(t), !!e || d.clearNodes()
                    }).wrapInList(h, r).command(() => tm(i, h)).command(() => tg(i, h)).run() : l().command(() => !!c().wrapInList(h, r) || d.clearNodes()).wrapInList(h, r).command(() => tm(i, h)).command(() => tg(i, h)).run()
                },
                tv = (e, t = {}, n = {}) => ({
                    state: r,
                    commands: o
                }) => {
                    let {
                        extendEmptyMarkRange: i = !1
                    } = n, s = L(e, r.schema);
                    return ee(r, s, t) ? o.unsetMark(s, {
                        extendEmptyMarkRange: i
                    }) : o.setMark(s, t)
                },
                tb = (e, t, n = {}) => ({
                    state: r,
                    commands: o
                }) => {
                    let i;
                    let s = H(e, r.schema),
                        a = H(t, r.schema),
                        l = et(r, s, n);
                    return (r.selection.$anchor.sameParent(r.selection.$head) && (i = r.selection.$anchor.parent.attrs), l) ? o.setNode(a, i) : o.setNode(s, { ...i,
                        ...n
                    })
                },
                tk = (e, t = {}) => ({
                    state: n,
                    commands: r
                }) => {
                    let o = H(e, n.schema);
                    return et(n, o, t) ? r.lift(o) : r.wrapIn(o, t)
                },
                tw = () => ({
                    state: e,
                    dispatch: t
                }) => {
                    let n = e.plugins;
                    for (let r = 0; r < n.length; r += 1) {
                        let o;
                        let i = n[r];
                        if (i.spec.isInputRules && (o = i.getState(e))) {
                            if (t) {
                                let t = e.tr,
                                    n = o.transform;
                                for (let e = n.steps.length - 1; e >= 0; e -= 1) t.step(n.steps[e].invert(n.docs[e]));
                                if (o.text) {
                                    let n = t.doc.resolve(o.from).marks();
                                    t.replaceWith(o.from, o.to, e.schema.text(o.text, n))
                                } else t.delete(o.from, o.to)
                            }
                            return !0
                        }
                    }
                    return !1
                },
                tM = () => ({
                    tr: e,
                    dispatch: t
                }) => {
                    let {
                        selection: n
                    } = e, {
                        empty: r,
                        ranges: o
                    } = n;
                    return !!r || (t && o.forEach(t => {
                        e.removeMark(t.$from.pos, t.$to.pos)
                    }), !0)
                },
                tx = (e, t = {}) => ({
                    tr: n,
                    state: r,
                    dispatch: o
                }) => {
                    var i;
                    let {
                        extendEmptyMarkRange: s = !1
                    } = t, {
                        selection: a
                    } = n, l = L(e, r.schema), {
                        $from: d,
                        empty: c,
                        ranges: u
                    } = a;
                    if (!o) return !0;
                    if (c && s) {
                        let {
                            from: e,
                            to: t
                        } = a, r = null == (i = d.marks().find(e => e.type === l)) ? void 0 : i.attrs, o = K(d, l, r);
                        o && (e = o.from, t = o.to), n.removeMark(e, t, l)
                    } else u.forEach(e => {
                        n.removeMark(e.$from.pos, e.$to.pos, l)
                    });
                    return n.removeStoredMark(l), !0
                },
                tE = (e, t = {}) => ({
                    tr: n,
                    state: r,
                    dispatch: o
                }) => {
                    let i = null,
                        s = null,
                        a = V("string" == typeof e ? e : e.name, r.schema);
                    return !!a && ("node" === a && (i = H(e, r.schema)), "mark" === a && (s = L(e, r.schema)), o && n.selection.ranges.forEach(e => {
                        let o, a, l, d;
                        let c = e.$from.pos,
                            u = e.$to.pos;
                        n.selection.empty ? r.doc.nodesBetween(c, u, (e, t) => {
                            i && i === e.type && (l = Math.max(t, c), d = Math.min(t + e.nodeSize, u), o = t, a = e)
                        }) : r.doc.nodesBetween(c, u, (e, r) => {
                            r < c && i && i === e.type && (l = Math.max(r, c), d = Math.min(r + e.nodeSize, u), o = r, a = e), r >= c && r <= u && (i && i === e.type && n.setNodeMarkup(r, void 0, { ...e.attrs,
                                ...t
                            }), s && e.marks.length && e.marks.forEach(o => {
                                if (s === o.type) {
                                    let i = Math.max(r, c),
                                        a = Math.min(r + e.nodeSize, u);
                                    n.addMark(i, a, s.create({ ...o.attrs,
                                        ...t
                                    }))
                                }
                            }))
                        }), a && (void 0 !== o && n.setNodeMarkup(o, void 0, { ...a.attrs,
                            ...t
                        }), s && a.marks.length && a.marks.forEach(e => {
                            s === e.type && n.addMark(l, d, s.create({ ...e.attrs,
                                ...t
                            }))
                        }))
                    }), !0)
                },
                tS = (e, t = {}) => ({
                    state: n,
                    dispatch: r
                }) => {
                    let o = H(e, n.schema);
                    return (0, l.ym)(o, t)(n, r)
                },
                tC = (e, t = {}) => ({
                    state: n,
                    dispatch: r
                }) => {
                    let o = H(e, n.schema);
                    return (0, d.KI)(o, t)(n, r)
                },
                tT = eM.create({
                    name: "commands",
                    addCommands: () => ({ ...eE
                    })
                }),
                tO = eM.create({
                    name: "delete",
                    onUpdate({
                        transaction: e,
                        appendedTransactions: t
                    }) {
                        var n, r, o;
                        let i = () => {
                            var n, r, o, i;
                            if (null != (i = null == (o = null == (r = null == (n = this.editor.options.coreExtensionOptions) ? void 0 : n.delete) ? void 0 : r.filterTransaction) ? void 0 : o.call(r, e)) ? i : e.getMeta("y-sync$")) return;
                            let a = m(e.before, [e, ...t]);
                            q(a).forEach(t => {
                                a.mapping.mapResult(t.oldRange.from).deletedAfter && a.mapping.mapResult(t.oldRange.to).deletedBefore && a.before.nodesBetween(t.oldRange.from, t.oldRange.to, (n, r) => {
                                    let o = r + n.nodeSize - 2,
                                        i = t.oldRange.from <= r && o <= t.oldRange.to;
                                    this.editor.emit("delete", {
                                        type: "node",
                                        node: n,
                                        from: r,
                                        to: o,
                                        newFrom: a.mapping.map(r),
                                        newTo: a.mapping.map(o),
                                        deletedRange: t.oldRange,
                                        newRange: t.newRange,
                                        partial: !i,
                                        editor: this.editor,
                                        transaction: e,
                                        combinedTransform: a
                                    })
                                })
                            });
                            let l = a.mapping;
                            a.steps.forEach((t, n) => {
                                var r, o;
                                if (t instanceof s.xu) {
                                    let i = l.slice(n).map(t.from, -1),
                                        s = l.slice(n).map(t.to),
                                        d = l.invert().map(i, -1),
                                        c = l.invert().map(s),
                                        u = null == (r = a.doc.nodeAt(i - 1)) ? void 0 : r.marks.some(e => e.eq(t.mark)),
                                        p = null == (o = a.doc.nodeAt(s)) ? void 0 : o.marks.some(e => e.eq(t.mark));
                                    this.editor.emit("delete", {
                                        type: "mark",
                                        mark: t.mark,
                                        from: t.from,
                                        to: t.to,
                                        deletedRange: {
                                            from: d,
                                            to: c
                                        },
                                        newRange: {
                                            from: i,
                                            to: s
                                        },
                                        partial: !!(p || u),
                                        editor: this.editor,
                                        transaction: e,
                                        combinedTransform: a
                                    })
                                }
                            })
                        };
                        null == (o = null == (r = null == (n = this.editor.options.coreExtensionOptions) ? void 0 : n.delete) ? void 0 : r.async) || o ? setTimeout(i, 0) : i()
                    }
                }),
                tP = eM.create({
                    name: "drop",
                    addProseMirrorPlugins() {
                        return [new r.Sy({
                            key: new r.H$("tiptapDrop"),
                            props: {
                                handleDrop: (e, t, n, r) => {
                                    this.editor.emit("drop", {
                                        editor: this.editor,
                                        event: t,
                                        slice: n,
                                        moved: r
                                    })
                                }
                            }
                        })]
                    }
                }),
                tA = eM.create({
                    name: "editable",
                    addProseMirrorPlugins() {
                        return [new r.Sy({
                            key: new r.H$("editable"),
                            props: {
                                editable: () => this.editor.options.editable
                            }
                        })]
                    }
                }),
                tD = new r.H$("focusEvents"),
                t$ = eM.create({
                    name: "focusEvents",
                    addProseMirrorPlugins() {
                        let {
                            editor: e
                        } = this;
                        return [new r.Sy({
                            key: tD,
                            props: {
                                handleDOMEvents: {
                                    focus: (t, n) => {
                                        e.isFocused = !0;
                                        let r = e.state.tr.setMeta("focus", {
                                            event: n
                                        }).setMeta("addToHistory", !1);
                                        return t.dispatch(r), !1
                                    },
                                    blur: (t, n) => {
                                        e.isFocused = !1;
                                        let r = e.state.tr.setMeta("blur", {
                                            event: n
                                        }).setMeta("addToHistory", !1);
                                        return t.dispatch(r), !1
                                    }
                                }
                            }
                        })]
                    }
                }),
                tj = eM.create({
                    name: "keymap",
                    addKeyboardShortcuts() {
                        let e = () => this.editor.commands.first(({
                                commands: e
                            }) => [() => e.undoInputRule(), () => e.command(({
                                tr: t
                            }) => {
                                let {
                                    selection: n,
                                    doc: o
                                } = t, {
                                    empty: i,
                                    $anchor: s
                                } = n, {
                                    pos: a,
                                    parent: l
                                } = s, d = s.parent.isTextblock && a > 0 ? t.doc.resolve(a - 1) : s, c = d.parent.type.spec.isolating, u = s.pos - s.parentOffset, p = c && 1 === d.parent.childCount ? u === s.pos : r.Y1.atStart(o).from === a;
                                return !!i && !!l.type.isTextblock && !l.textContent.length && !!p && (!p || "paragraph" !== s.parent.type.name) && e.clearNodes()
                            }), () => e.deleteSelection(), () => e.joinBackward(), () => e.selectNodeBackward()]),
                            t = () => this.editor.commands.first(({
                                commands: e
                            }) => [() => e.deleteSelection(), () => e.deleteCurrentNode(), () => e.joinForward(), () => e.selectNodeForward()]),
                            n = {
                                Enter: () => this.editor.commands.first(({
                                    commands: e
                                }) => [() => e.newlineInCode(), () => e.createParagraphNear(), () => e.liftEmptyBlock(), () => e.splitBlock()]),
                                "Mod-Enter": () => this.editor.commands.exitCode(),
                                Backspace: e,
                                "Mod-Backspace": e,
                                "Shift-Backspace": e,
                                Delete: t,
                                "Mod-Delete": t,
                                "Mod-a": () => this.editor.commands.selectAll()
                            },
                            o = { ...n
                            },
                            i = { ...n,
                                "Ctrl-h": e,
                                "Alt-Backspace": e,
                                "Ctrl-d": t,
                                "Ctrl-Alt-Backspace": t,
                                "Alt-Delete": t,
                                "Alt-d": t,
                                "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
                                "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
                            };
                        return eH() || e0() ? i : o
                    },
                    addProseMirrorPlugins() {
                        return [new r.Sy({
                            key: new r.H$("clearDocument"),
                            appendTransaction: (e, t, n) => {
                                if (e.some(e => e.getMeta("composition"))) return;
                                let o = e.some(e => e.docChanged) && !t.doc.eq(n.doc),
                                    i = e.some(e => e.getMeta("preventClearDocument"));
                                if (!o || i) return;
                                let {
                                    empty: s,
                                    from: a,
                                    to: l
                                } = t.selection, d = r.Y1.atStart(t.doc).from, c = r.Y1.atEnd(t.doc).to;
                                if (s || !(a === d && l === c) || !es(n.doc)) return;
                                let u = n.tr,
                                    f = p({
                                        state: n,
                                        transaction: u
                                    }),
                                    {
                                        commands: m
                                    } = new h({
                                        editor: this.editor,
                                        state: f
                                    });
                                if (m.clearNodes(), u.steps.length) return u
                            }
                        })]
                    }
                }),
                tI = eM.create({
                    name: "paste",
                    addProseMirrorPlugins() {
                        return [new r.Sy({
                            key: new r.H$("tiptapPaste"),
                            props: {
                                handlePaste: (e, t, n) => {
                                    this.editor.emit("paste", {
                                        editor: this.editor,
                                        event: t,
                                        slice: n
                                    })
                                }
                            }
                        })]
                    }
                }),
                tB = eM.create({
                    name: "tabindex",
                    addProseMirrorPlugins() {
                        return [new r.Sy({
                            key: new r.H$("tabindex"),
                            props: {
                                attributes: () => this.editor.isEditable ? {
                                    tabindex: "0"
                                } : {}
                            }
                        })]
                    }
                }),
                tN = class e {
                    constructor(e, t, n = !1, r = null) {
                        this.currentNode = null, this.actualDepth = null, this.isBlock = n, this.resolvedPos = e, this.editor = t, this.currentNode = r
                    }
                    get name() {
                        return this.node.type.name
                    }
                    get node() {
                        return this.currentNode || this.resolvedPos.node()
                    }
                    get element() {
                        return this.editor.view.domAtPos(this.pos).node
                    }
                    get depth() {
                        var e;
                        return null != (e = this.actualDepth) ? e : this.resolvedPos.depth
                    }
                    get pos() {
                        return this.resolvedPos.pos
                    }
                    get content() {
                        return this.node.content
                    }
                    set content(e) {
                        let t = this.from,
                            n = this.to;
                        if (this.isBlock) {
                            if (0 === this.content.size) {
                                console.error(`You can\u2019t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
                                return
                            }
                            t = this.from + 1, n = this.to - 1
                        }
                        this.editor.commands.insertContentAt({
                            from: t,
                            to: n
                        }, e)
                    }
                    get attributes() {
                        return this.node.attrs
                    }
                    get textContent() {
                        return this.node.textContent
                    }
                    get size() {
                        return this.node.nodeSize
                    }
                    get from() {
                        return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth)
                    }
                    get range() {
                        return {
                            from: this.from,
                            to: this.to
                        }
                    }
                    get to() {
                        return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1)
                    }
                    get parent() {
                        if (0 === this.depth) return null;
                        let t = this.resolvedPos.start(this.resolvedPos.depth - 1);
                        return new e(this.resolvedPos.doc.resolve(t), this.editor)
                    }
                    get before() {
                        let t = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
                        return t.depth !== this.depth && (t = this.resolvedPos.doc.resolve(this.from - 3)), new e(t, this.editor)
                    }
                    get after() {
                        let t = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
                        return t.depth !== this.depth && (t = this.resolvedPos.doc.resolve(this.to + 3)), new e(t, this.editor)
                    }
                    get children() {
                        let t = [];
                        return this.node.content.forEach((n, r) => {
                            let o = n.isBlock && !n.isTextblock,
                                i = n.isAtom && !n.isText,
                                s = this.pos + r + (i ? 0 : 1);
                            if (s < 0 || s > this.resolvedPos.doc.nodeSize - 2) return;
                            let a = this.resolvedPos.doc.resolve(s);
                            if (!o && a.depth <= this.depth) return;
                            let l = new e(a, this.editor, o, o ? n : null);
                            o && (l.actualDepth = this.depth + 1), t.push(new e(a, this.editor, o, o ? n : null))
                        }), t
                    }
                    get firstChild() {
                        return this.children[0] || null
                    }
                    get lastChild() {
                        let e = this.children;
                        return e[e.length - 1] || null
                    }
                    closest(e, t = {}) {
                        let n = null,
                            r = this.parent;
                        for (; r && !n;) {
                            if (r.node.type.name === e) {
                                if (Object.keys(t).length > 0) {
                                    let e = r.node.attrs,
                                        n = Object.keys(t);
                                    for (let r = 0; r < n.length; r += 1) {
                                        let o = n[r];
                                        if (e[o] !== t[o]) break
                                    }
                                } else n = r
                            }
                            r = r.parent
                        }
                        return n
                    }
                    querySelector(e, t = {}) {
                        return this.querySelectorAll(e, t, !0)[0] || null
                    }
                    querySelectorAll(e, t = {}, n = !1) {
                        let r = [];
                        if (!this.children || 0 === this.children.length) return r;
                        let o = Object.keys(t);
                        return this.children.forEach(i => {
                            (!n || !(r.length > 0)) && (i.node.type.name === e && o.every(e => t[e] === i.node.attrs[e]) && r.push(i), n && r.length > 0 || (r = r.concat(i.querySelectorAll(e, t, n))))
                        }), r
                    }
                    setAttribute(e) {
                        let {
                            tr: t
                        } = this.editor.state;
                        t.setNodeMarkup(this.from, void 0, { ...this.node.attrs,
                            ...e
                        }), this.editor.view.dispatch(t)
                    }
                },
                tR = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}`,
                tL = class extends f {
                    constructor(e = {}) {
                        super(), this.css = null, this.editorView = null, this.isFocused = !1, this.isInitialized = !1, this.extensionStorage = {}, this.instanceId = Math.random().toString(36).slice(2, 9), this.options = {
                            element: "undefined" != typeof document ? document.createElement("div") : null,
                            content: "",
                            injectCSS: !0,
                            injectNonce: void 0,
                            extensions: [],
                            autofocus: !1,
                            editable: !0,
                            editorProps: {},
                            parseOptions: {},
                            coreExtensionOptions: {},
                            enableInputRules: !0,
                            enablePasteRules: !0,
                            enableCoreExtensions: !0,
                            enableContentCheck: !1,
                            emitContentError: !1,
                            onBeforeCreate: () => null,
                            onCreate: () => null,
                            onMount: () => null,
                            onUnmount: () => null,
                            onUpdate: () => null,
                            onSelectionUpdate: () => null,
                            onTransaction: () => null,
                            onFocus: () => null,
                            onBlur: () => null,
                            onDestroy: () => null,
                            onContentError: ({
                                error: e
                            }) => {
                                throw e
                            },
                            onPaste: () => null,
                            onDrop: () => null,
                            onDelete: () => null
                        }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", {
                            editor: this
                        }), this.on("mount", this.options.onMount), this.on("unmount", this.options.onUnmount), this.on("contentError", this.options.onContentError), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({
                            event: e,
                            slice: t,
                            moved: n
                        }) => this.options.onDrop(e, t, n)), this.on("paste", ({
                            event: e,
                            slice: t
                        }) => this.options.onPaste(e, t)), this.on("delete", this.options.onDelete);
                        let t = this.createDoc(),
                            n = ec(t, this.options.autofocus);
                        this.editorState = r.yy.create({
                            doc: t,
                            schema: this.schema,
                            selection: n || void 0
                        }), this.options.element && this.mount(this.options.element)
                    }
                    mount(e) {
                        if ("undefined" == typeof document) throw Error("[tiptap error]: The editor cannot be mounted because there is no 'document' defined in this environment.");
                        this.createView(e), this.emit("mount", {
                            editor: this
                        }), window.setTimeout(() => {
                            this.isDestroyed || (this.commands.focus(this.options.autofocus), this.emit("create", {
                                editor: this
                            }), this.isInitialized = !0)
                        }, 0)
                    }
                    unmount() {
                        if (this.editorView) {
                            let e = this.editorView.dom;
                            (null == e ? void 0 : e.editor) && delete e.editor, this.editorView.destroy()
                        }
                        if (this.editorView = null, this.isInitialized = !1, this.css) try {
                            "function" == typeof this.css.remove ? this.css.remove() : this.css.parentNode && this.css.parentNode.removeChild(this.css)
                        } catch (e) {
                            console.warn("Failed to remove CSS element:", e)
                        }
                        this.css = null, this.emit("unmount", {
                            editor: this
                        })
                    }
                    get storage() {
                        return this.extensionStorage
                    }
                    get commands() {
                        return this.commandManager.commands
                    }
                    chain() {
                        return this.commandManager.chain()
                    }
                    can() {
                        return this.commandManager.can()
                    }
                    injectCSS() {
                        this.options.injectCSS && "undefined" != typeof document && (this.css = function(e, t, n) {
                            let r = document.querySelector("style[data-tiptap-style]");
                            if (null !== r) return r;
                            let o = document.createElement("style");
                            return t && o.setAttribute("nonce", t), o.setAttribute("data-tiptap-style", ""), o.innerHTML = e, document.getElementsByTagName("head")[0].appendChild(o), o
                        }(tR, this.options.injectNonce))
                    }
                    setOptions(e = {}) {
                        this.options = { ...this.options,
                            ...e
                        }, this.editorView && this.state && !this.isDestroyed && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state))
                    }
                    setEditable(e, t = !0) {
                        this.setOptions({
                            editable: e
                        }), t && this.emit("update", {
                            editor: this,
                            transaction: this.state.tr,
                            appendedTransactions: []
                        })
                    }
                    get isEditable() {
                        return this.options.editable && this.view && this.view.editable
                    }
                    get view() {
                        return this.editorView ? this.editorView : new Proxy({
                            state: this.editorState,
                            updateState: e => {
                                this.editorState = e
                            },
                            dispatch: e => {
                                this.editorState = this.state.apply(e)
                            },
                            composing: !1,
                            dragging: null,
                            editable: !0,
                            isDestroyed: !1
                        }, {
                            get: (e, t) => {
                                if ("state" === t) return this.editorState;
                                if (t in e) return Reflect.get(e, t);
                                throw Error(`[tiptap error]: The editor view is not available. Cannot access view['${t}']. The editor may not be mounted yet.`)
                            }
                        })
                    }
                    get state() {
                        return this.editorView && (this.editorState = this.view.state), this.editorState
                    }
                    registerPlugin(e, t) {
                        let n = C(t) ? t(e, [...this.state.plugins]) : [...this.state.plugins, e],
                            r = this.state.reconfigure({
                                plugins: n
                            });
                        return this.view.updateState(r), r
                    }
                    unregisterPlugin(e) {
                        if (this.isDestroyed) return;
                        let t = this.state.plugins,
                            n = t;
                        if ([].concat(e).forEach(e => {
                                let t = "string" == typeof e ? `${e}$` : e.key;
                                n = n.filter(e => !e.key.startsWith(t))
                            }), t.length === n.length) return;
                        let r = this.state.reconfigure({
                            plugins: n
                        });
                        return this.view.updateState(r), r
                    }
                    createExtensionManager() {
                        var e, t;
                        let n = [...this.options.enableCoreExtensions ? [tA, ex.configure({
                            blockSeparator: null == (t = null == (e = this.options.coreExtensionOptions) ? void 0 : e.clipboardTextSerializer) ? void 0 : t.blockSeparator
                        }), tT, t$, tj, tB, tP, tI, tO].filter(e => "object" != typeof this.options.enableCoreExtensions || !1 !== this.options.enableCoreExtensions[e.name]) : [], ...this.options.extensions].filter(e => ["extension", "node", "mark"].includes(null == e ? void 0 : e.type));
                        this.extensionManager = new ew(n, this)
                    }
                    createCommandManager() {
                        this.commandManager = new h({
                            editor: this
                        })
                    }
                    createSchema() {
                        this.schema = this.extensionManager.schema
                    }
                    createDoc() {
                        let e;
                        try {
                            e = b(this.options.content, this.schema, this.options.parseOptions, {
                                errorOnInvalidContent: this.options.enableContentCheck
                            })
                        } catch (t) {
                            if (!(t instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(t.message)) throw t;
                            this.emit("contentError", {
                                editor: this,
                                error: t,
                                disableCollaboration: () => {
                                    "collaboration" in this.storage && "object" == typeof this.storage.collaboration && this.storage.collaboration && (this.storage.collaboration.isDisabled = !0), this.options.extensions = this.options.extensions.filter(e => "collaboration" !== e.name), this.createExtensionManager()
                                }
                            }), e = b(this.options.content, this.schema, this.options.parseOptions, {
                                errorOnInvalidContent: !1
                            })
                        }
                        return e
                    }
                    createView(e) {
                        var t;
                        this.editorView = new o.tk(e, { ...this.options.editorProps,
                            attributes: {
                                role: "textbox",
                                ...null == (t = this.options.editorProps) ? void 0 : t.attributes
                            },
                            dispatchTransaction: this.dispatchTransaction.bind(this),
                            state: this.editorState
                        });
                        let n = this.state.reconfigure({
                            plugins: this.extensionManager.plugins
                        });
                        this.view.updateState(n), this.createNodeViews(), this.prependClass(), this.injectCSS(), this.view.dom.editor = this
                    }
                    createNodeViews() {
                        this.view.isDestroyed || this.view.setProps({
                            markViews: this.extensionManager.markViews,
                            nodeViews: this.extensionManager.nodeViews
                        })
                    }
                    prependClass() {
                        this.view.dom.className = `tiptap ${this.view.dom.className}`
                    }
                    captureTransaction(e) {
                        this.isCapturingTransaction = !0, e(), this.isCapturingTransaction = !1;
                        let t = this.capturedTransaction;
                        return this.capturedTransaction = null, t
                    }
                    dispatchTransaction(e) {
                        if (this.view.isDestroyed) return;
                        if (this.isCapturingTransaction) {
                            if (!this.capturedTransaction) {
                                this.capturedTransaction = e;
                                return
                            }
                            e.steps.forEach(e => {
                                var t;
                                return null == (t = this.capturedTransaction) ? void 0 : t.step(e)
                            });
                            return
                        }
                        let {
                            state: t,
                            transactions: n
                        } = this.state.applyTransaction(e), r = !this.state.selection.eq(t.selection), o = n.includes(e), i = this.state;
                        if (this.emit("beforeTransaction", {
                                editor: this,
                                transaction: e,
                                nextState: t
                            }), !o) return;
                        this.view.updateState(t), this.emit("transaction", {
                            editor: this,
                            transaction: e,
                            appendedTransactions: n.slice(1)
                        }), r && this.emit("selectionUpdate", {
                            editor: this,
                            transaction: e
                        });
                        let s = n.findLast(e => e.getMeta("focus") || e.getMeta("blur")),
                            a = null == s ? void 0 : s.getMeta("focus"),
                            l = null == s ? void 0 : s.getMeta("blur");
                        a && this.emit("focus", {
                            editor: this,
                            event: a.event,
                            transaction: s
                        }), l && this.emit("blur", {
                            editor: this,
                            event: l.event,
                            transaction: s
                        }), e.getMeta("preventUpdate") || !n.some(e => e.docChanged) || i.doc.eq(t.doc) || this.emit("update", {
                            editor: this,
                            transaction: e,
                            appendedTransactions: n.slice(1)
                        })
                    }
                    getAttributes(e) {
                        return F(this.state, e)
                    }
                    isActive(e, t) {
                        let n = "string" == typeof e ? e : null,
                            r = "string" == typeof e ? t : e;
                        return function(e, t, n = {}) {
                            if (!t) return et(e, null, n) || ee(e, null, n);
                            let r = V(t, e.schema);
                            return "node" === r ? et(e, t, n) : "mark" === r && ee(e, t, n)
                        }(this.state, n, r)
                    }
                    getJSON() {
                        return this.state.doc.toJSON()
                    }
                    getHTML() {
                        return S(this.state.doc.content, this.schema)
                    }
                    getText(e) {
                        let {
                            blockSeparator: t = "\n\n",
                            textSerializers: n = {}
                        } = e || {};
                        return function(e, t) {
                            let n = {
                                from: 0,
                                to: e.content.size
                            };
                            return N(e, n, t)
                        }(this.state.doc, {
                            blockSeparator: t,
                            textSerializers: { ...R(this.schema),
                                ...n
                            }
                        })
                    }
                    get isEmpty() {
                        return es(this.state.doc)
                    }
                    destroy() {
                        this.emit("destroy"), this.unmount(), this.removeAllListeners()
                    }
                    get isDestroyed() {
                        var e, t;
                        return null == (t = null == (e = this.editorView) ? void 0 : e.isDestroyed) || t
                    }
                    $node(e, t) {
                        var n;
                        return (null == (n = this.$doc) ? void 0 : n.querySelector(e, t)) || null
                    }
                    $nodes(e, t) {
                        var n;
                        return (null == (n = this.$doc) ? void 0 : n.querySelectorAll(e, t)) || null
                    }
                    $pos(e) {
                        return new tN(this.state.doc.resolve(e), this)
                    }
                    get $doc() {
                        return this.$pos(0)
                    }
                };

            function tz(e) {
                return new eu({
                    find: e.find,
                    handler: ({
                        state: t,
                        range: n,
                        match: r
                    }) => {
                        let o = T(e.getAttributes, void 0, r);
                        if (!1 === o || null === o) return null;
                        let {
                            tr: i
                        } = t, s = r[r.length - 1], a = r[0];
                        if (s) {
                            let r = a.search(/\S/),
                                l = n.from + a.indexOf(s),
                                d = l + s.length;
                            if (J(n.from, n.to, t.doc).filter(t => t.mark.type.excluded.find(n => n === e.type && n !== t.mark.type)).filter(e => e.to > l).length) return null;
                            d < n.to && i.delete(d, n.to), l > n.from && i.delete(n.from + r, l);
                            let c = n.from + r + s.length;
                            i.addMark(n.from + r, c, e.type.create(o || {})), i.removeStoredMark(e.type)
                        }
                    }
                })
            }

            function tH(e) {
                return new eu({
                    find: e.find,
                    handler: ({
                        state: t,
                        range: n,
                        match: r
                    }) => {
                        let o = t.doc.resolve(n.from),
                            i = T(e.getAttributes, void 0, r) || {};
                        if (!o.node(-1).canReplaceWith(o.index(-1), o.indexAfter(-1), e.type)) return null;
                        t.tr.delete(n.from, n.to).setBlockType(n.from, n.from, e.type, i)
                    }
                })
            }

            function tV(e) {
                return new eu({
                    find: e.find,
                    handler: ({
                        state: t,
                        range: n,
                        match: r,
                        chain: o
                    }) => {
                        let i = T(e.getAttributes, void 0, r) || {},
                            a = t.tr.delete(n.from, n.to),
                            l = a.doc.resolve(n.from).blockRange(),
                            d = l && (0, s.nd)(l, e.type, i);
                        if (!d) return null;
                        if (a.wrap(l, d), e.keepMarks && e.editor) {
                            let {
                                selection: n,
                                storedMarks: r
                            } = t, {
                                splittableMarks: o
                            } = e.editor.extensionManager, i = r || n.$to.parentOffset && n.$from.marks();
                            if (i) {
                                let e = i.filter(e => o.includes(e.type.name));
                                a.ensureMarks(e)
                            }
                        }
                        if (e.keepAttributes) {
                            let t = "bulletList" === e.type.name || "orderedList" === e.type.name ? "listItem" : "taskList";
                            o().updateAttributes(t, i).run()
                        }
                        let c = a.doc.resolve(n.from - 1).nodeBefore;
                        c && c.type === e.type && (0, s.Mn)(a.doc, n.from - 1) && (!e.joinPredicate || e.joinPredicate(r, c)) && a.join(n.from - 1)
                    }
                })
            }

            function tF(e, t, n = {}) {
                let {
                    state: r
                } = t, {
                    doc: o,
                    tr: i
                } = r;
                o.descendants((t, r) => {
                    let o = i.mapping.map(r),
                        s = i.mapping.map(r) + t.nodeSize,
                        a = null;
                    if (t.marks.forEach(t => {
                            if (t !== e) return !1;
                            a = t
                        }), !a) return;
                    let l = !1;
                    if (Object.keys(n).forEach(e => {
                            n[e] !== a.attrs[e] && (l = !0)
                        }), l) {
                        let t = e.type.create({ ...e.attrs,
                            ...n
                        });
                        i.removeMark(o, s, e.type), i.addMark(o, s, t)
                    }
                }), i.docChanged && t.view.dispatch(i)
            }
            var tq = class {
                    constructor(e, t, n) {
                        this.component = e, this.editor = t.editor, this.options = { ...n
                        }, this.mark = t.mark, this.HTMLAttributes = t.HTMLAttributes
                    }
                    get dom() {
                        return this.editor.view.dom
                    }
                    get contentDOM() {
                        return null
                    }
                    updateAttributes(e, t) {
                        tF(t || this.mark, this.editor, e)
                    }
                    ignoreMutation(e) {
                        return !this.dom || !this.contentDOM || ("function" == typeof this.options.ignoreMutation ? this.options.ignoreMutation({
                            mutation: e
                        }) : !("selection" === e.type || this.dom.contains(e.target) && "childList" === e.type && (eH() || ez()) && this.editor.isFocused && [...Array.from(e.addedNodes), ...Array.from(e.removedNodes)].every(e => e.isContentEditable)) && (this.contentDOM === e.target && "attributes" === e.type || !this.contentDOM.contains(e.target)))
                    }
                },
                t_ = class e extends em {
                    constructor() {
                        super(...arguments), this.type = "node"
                    }
                    static create(t = {}) {
                        return new e("function" == typeof t ? t() : t)
                    }
                    configure(e) {
                        return super.configure(e)
                    }
                    extend(e) {
                        let t = "function" == typeof e ? e() : e;
                        return super.extend(t)
                    }
                },
                tU = class {
                    constructor(e, t, n) {
                        this.isDragging = !1, this.component = e, this.editor = t.editor, this.options = {
                            stopEvent: null,
                            ignoreMutation: null,
                            ...n
                        }, this.extension = t.extension, this.node = t.node, this.decorations = t.decorations, this.innerDecorations = t.innerDecorations, this.view = t.view, this.HTMLAttributes = t.HTMLAttributes, this.getPos = t.getPos, this.mount()
                    }
                    mount() {}
                    get dom() {
                        return this.editor.view.dom
                    }
                    get contentDOM() {
                        return null
                    }
                    onDragStart(e) {
                        var t, n, o, i, s, a, l;
                        let {
                            view: d
                        } = this.editor, c = e.target, u = 3 === c.nodeType ? null == (t = c.parentElement) ? void 0 : t.closest("[data-drag-handle]") : c.closest("[data-drag-handle]");
                        if (!this.dom || (null == (n = this.contentDOM) ? void 0 : n.contains(c)) || !u) return;
                        let p = 0,
                            h = 0;
                        if (this.dom !== u) {
                            let t = this.dom.getBoundingClientRect(),
                                n = u.getBoundingClientRect(),
                                r = null != (i = e.offsetX) ? i : null == (o = e.nativeEvent) ? void 0 : o.offsetX,
                                l = null != (a = e.offsetY) ? a : null == (s = e.nativeEvent) ? void 0 : s.offsetY;
                            p = n.x - t.x + r, h = n.y - t.y + l
                        }
                        let f = this.dom.cloneNode(!0);
                        try {
                            let e = this.dom.getBoundingClientRect();
                            f.style.width = `${Math.round(e.width)}px`, f.style.height = `${Math.round(e.height)}px`, f.style.boxSizing = "border-box", f.style.pointerEvents = "none"
                        } catch {}
                        let m = null;
                        try {
                            (m = document.createElement("div")).style.position = "absolute", m.style.top = "-9999px", m.style.left = "-9999px", m.style.pointerEvents = "none", m.appendChild(f), document.body.appendChild(m), null == (l = e.dataTransfer) || l.setDragImage(f, p, h)
                        } finally {
                            m && setTimeout(() => {
                                try {
                                    null == m || m.remove()
                                } catch {}
                            }, 0)
                        }
                        let g = this.getPos();
                        if ("number" != typeof g) return;
                        let y = r.qv.create(d.state.doc, g),
                            v = d.state.tr.setSelection(y);
                        d.dispatch(v)
                    }
                    stopEvent(e) {
                        var t;
                        if (!this.dom) return !1;
                        if ("function" == typeof this.options.stopEvent) return this.options.stopEvent({
                            event: e
                        });
                        let n = e.target;
                        if (!(this.dom.contains(n) && !(null == (t = this.contentDOM) ? void 0 : t.contains(n)))) return !1;
                        let o = e.type.startsWith("drag"),
                            i = "drop" === e.type;
                        if ((["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(n.tagName) || n.isContentEditable) && !i && !o) return !0;
                        let {
                            isEditable: s
                        } = this.editor, {
                            isDragging: a
                        } = this, l = !!this.node.type.spec.draggable, d = r.qv.isSelectable(this.node), c = "copy" === e.type, u = "paste" === e.type, p = "cut" === e.type, h = "mousedown" === e.type;
                        if (!l && d && o && e.target === this.dom && e.preventDefault(), l && o && !a && e.target === this.dom) return e.preventDefault(), !1;
                        if (l && s && !a && h) {
                            let e = n.closest("[data-drag-handle]");
                            e && (this.dom === e || this.dom.contains(e)) && (this.isDragging = !0, document.addEventListener("dragend", () => {
                                this.isDragging = !1
                            }, {
                                once: !0
                            }), document.addEventListener("drop", () => {
                                this.isDragging = !1
                            }, {
                                once: !0
                            }), document.addEventListener("mouseup", () => {
                                this.isDragging = !1
                            }, {
                                once: !0
                            }))
                        }
                        return !a && !i && !c && !u && !p && (!h || !d)
                    }
                    ignoreMutation(e) {
                        return !this.dom || !this.contentDOM || ("function" == typeof this.options.ignoreMutation ? this.options.ignoreMutation({
                            mutation: e
                        }) : !!this.node.isLeaf || !!this.node.isAtom || !("selection" === e.type || this.dom.contains(e.target) && "childList" === e.type && (eH() || ez()) && this.editor.isFocused && [...Array.from(e.addedNodes), ...Array.from(e.removedNodes)].every(e => e.isContentEditable)) && (this.contentDOM === e.target && "attributes" === e.type || !this.contentDOM.contains(e.target)))
                    }
                    updateAttributes(e) {
                        this.editor.commands.command(({
                            tr: t
                        }) => {
                            let n = this.getPos();
                            return "number" == typeof n && (t.setNodeMarkup(n, void 0, { ...this.node.attrs,
                                ...e
                            }), !0)
                        })
                    }
                    deleteNode() {
                        let e = this.getPos();
                        if ("number" != typeof e) return;
                        let t = e + this.node.nodeSize;
                        this.editor.commands.deleteRange({
                            from: e,
                            to: t
                        })
                    }
                };

            function tW(e) {
                return new ey({
                    find: e.find,
                    handler: ({
                        state: t,
                        range: n,
                        match: r,
                        pasteEvent: o
                    }) => {
                        let i = T(e.getAttributes, void 0, r, o);
                        if (!1 === i || null === i) return null;
                        let {
                            tr: s
                        } = t, a = r[r.length - 1], l = r[0], d = n.to;
                        if (a) {
                            let r = l.search(/\S/),
                                o = n.from + l.indexOf(a),
                                c = o + a.length;
                            if (J(n.from, n.to, t.doc).filter(t => t.mark.type.excluded.find(n => n === e.type && n !== t.mark.type)).filter(e => e.to > o).length) return null;
                            c < n.to && s.delete(c, n.to), o > n.from && s.delete(n.from + r, o), d = n.from + r + a.length, s.addMark(n.from + r, d, e.type.create(i || {})), s.removeStoredMark(e.type)
                        }
                    }
                })
            }
        }
    }
]);