try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ea5c9698-c8a2-461f-883a-fc5606fcdd7e", e._sentryDebugIdIdentifier = "sentry-dbid-ea5c9698-c8a2-461f-883a-fc5606fcdd7e")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7786], {
        36833: function(e) {
            var t;
            t = function() {
                return function(e) {
                    if (e) {
                        var t = function(e) {
                                return [].slice.call(e)
                            },
                            n = 3,
                            r = [],
                            i = null,
                            l = "requestAnimationFrame" in e ? function() {
                                e.cancelAnimationFrame(i), i = e.requestAnimationFrame(function() {
                                    return a(r.filter(function(e) {
                                        return e.dirty && e.active
                                    }))
                                })
                            } : function() {},
                            o = function(e) {
                                return function() {
                                    r.forEach(function(t) {
                                        return t.dirty = e
                                    }), l()
                                }
                            },
                            a = function(e) {
                                e.filter(function(e) {
                                    return !e.styleComputed
                                }).forEach(function(e) {
                                    e.styleComputed = p(e)
                                }), e.filter(d).forEach(f);
                                var t = e.filter(s);
                                t.forEach(u), t.forEach(function(e) {
                                    f(e), c(e)
                                }), t.forEach(h)
                            },
                            c = function(e) {
                                return e.dirty = 0
                            },
                            u = function(e) {
                                e.availableWidth = e.element.parentNode.clientWidth, e.currentWidth = e.element.scrollWidth, e.previousFontSize = e.currentFontSize, e.currentFontSize = Math.min(Math.max(e.minSize, e.availableWidth / e.currentWidth * e.previousFontSize), e.maxSize), e.whiteSpace = e.multiLine && e.currentFontSize === e.minSize ? "normal" : "nowrap"
                            },
                            s = function(e) {
                                return 2 !== e.dirty || 2 === e.dirty && e.element.parentNode.clientWidth !== e.availableWidth
                            },
                            p = function(t) {
                                var n = e.getComputedStyle(t.element, null);
                                return t.currentFontSize = parseFloat(n.getPropertyValue("font-size")), t.display = n.getPropertyValue("display"), t.whiteSpace = n.getPropertyValue("white-space"), !0
                            },
                            d = function(e) {
                                var t = !1;
                                return !e.preStyleTestCompleted && (/inline-/.test(e.display) || (t = !0, e.display = "inline-block"), "nowrap" !== e.whiteSpace && (t = !0, e.whiteSpace = "nowrap"), e.preStyleTestCompleted = !0, t)
                            },
                            f = function(e) {
                                e.element.style.whiteSpace = e.whiteSpace, e.element.style.display = e.display, e.element.style.fontSize = e.currentFontSize + "px"
                            },
                            h = function(e) {
                                e.element.dispatchEvent(new CustomEvent("fit", {
                                    detail: {
                                        oldValue: e.previousFontSize,
                                        newValue: e.currentFontSize,
                                        scaleFactor: e.currentFontSize / e.previousFontSize
                                    }
                                }))
                            },
                            v = function(e, t) {
                                return function() {
                                    e.dirty = t, e.active && l()
                                }
                            },
                            g = function(e) {
                                return function() {
                                    r = r.filter(function(t) {
                                        return t.element !== e.element
                                    }), e.observeMutations && e.observer.disconnect(), e.element.style.whiteSpace = e.originalStyle.whiteSpace, e.element.style.display = e.originalStyle.display, e.element.style.fontSize = e.originalStyle.fontSize
                                }
                            },
                            m = function(e) {
                                return function() {
                                    e.active || (e.active = !0, l())
                                }
                            },
                            y = function(e) {
                                return function() {
                                    return e.active = !1
                                }
                            },
                            b = function(e) {
                                e.observeMutations && (e.observer = new MutationObserver(v(e, 1)), e.observer.observe(e.element, e.observeMutations))
                            },
                            w = {
                                minSize: 16,
                                maxSize: 512,
                                multiLine: !0,
                                observeMutations: "MutationObserver" in e && {
                                    subtree: !0,
                                    childList: !0,
                                    characterData: !0
                                }
                            },
                            x = null,
                            S = function() {
                                e.clearTimeout(x), x = e.setTimeout(o(2), C.observeWindowDelay)
                            },
                            k = ["resize", "orientationchange"];
                        return Object.defineProperty(C, "observeWindow", {
                            set: function(t) {
                                var n = "".concat(t ? "add" : "remove", "EventListener");
                                k.forEach(function(t) {
                                    e[n](t, S)
                                })
                            }
                        }), C.observeWindow = !0, C.observeWindowDelay = 100, C.fitAll = o(n), C
                    }

                    function z(e, t) {
                        var i = Object.assign({}, w, t),
                            o = e.map(function(e) {
                                var t = Object.assign({}, i, {
                                    element: e,
                                    active: !0
                                });
                                return t.originalStyle = {
                                    whiteSpace: t.element.style.whiteSpace,
                                    display: t.element.style.display,
                                    fontSize: t.element.style.fontSize
                                }, b(t), t.newbie = !0, t.dirty = !0, r.push(t), {
                                    element: e,
                                    fit: v(t, n),
                                    unfreeze: m(t),
                                    freeze: y(t),
                                    unsubscribe: g(t)
                                }
                            });
                        return l(), o
                    }

                    function C(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return "string" == typeof e ? z(t(document.querySelectorAll(e)), n) : z([e], n)[0]
                    }
                }("undefined" == typeof window ? null : window)
            }, e.exports = t()
        },
        9254: function(e, t, n) {
            "use strict";
            n.d(t, {
                v: function() {
                    return i
                }
            });
            var r = n(25237);
            let i = n.n(r)()(() => Promise.all([n.e(479), n.e(5519)]).then(n.bind(n, 95519)).then(e => e.ImageEditor), {
                loadableGenerated: {
                    webpack: () => [95519]
                },
                ssr: !1
            })
        },
        44933: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return v
                },
                F: function() {
                    return g
                }
            });
            var r = n(52322),
                i = n(61463),
                l = n(66478),
                o = n(16217),
                a = n(1697),
                c = n(86136),
                u = n(9254),
                s = n(11623),
                p = n(11223),
                d = n(47372),
                f = n(55530),
                h = n(48537);

            function v(e, t) {
                return e.crop && (0, c.RA)(e.crop.width / e.crop.height, 0 === t ? 3 / 4 : .6, .1) ? { ...e.crop,
                    shape: "rect"
                } : {
                    shape: "rect",
                    top: 0,
                    left: 0,
                    width: 600,
                    height: 0 === t ? 800 : 1e3,
                    src: e.src
                }
            }

            function g(e) {
                let {
                    preview: {
                        template: t
                    }
                } = (0, f.m)(), {
                    images: n,
                    title: c
                } = { ...e,
                    ...(0, o.Px)(t, e)
                }, {
                    mutate: g
                } = (0, d.n)(), {
                    queue: m,
                    setQueue: y,
                    pendingQueueCount: b,
                    setPendingQueueCount: w
                } = (0, h.r)({
                    onComplete: () => {
                        let t = null == n ? void 0 : n.slice();
                        m.forEach(e => {
                            let {
                                position: n,
                                ...r
                            } = e;
                            null == t || t.splice(n, 1, r)
                        }), g({ ...e,
                            images: t
                        })
                    }
                }), x = null != b && b > 0;
                return (0, r.jsx)(p.V, {
                    section: e,
                    unremovable: !0,
                    unmovable: !0,
                    noInsertBefore: !0,
                    children: (0, r.jsx)(s.M, {
                        editable: !0,
                        onTextChange: t => {
                            g({ ...e,
                                title: t.slice(0, 20)
                            })
                        },
                        title: c || "",
                        images: null == n ? void 0 : n.slice(0, 2).map((e, t) => (0, r.jsx)("div", {
                            className: (0, i.Z)("relative focus-within:z-20", {
                                "col-span-4 @laptop:col-span-5 @laptop:col-start-3 @tablet:col-span-3 @tablet:col-start-2": 0 === t,
                                "col-span-3 col-start-6 @laptop:col-span-3 @laptop:col-start-9 @tablet:col-span-2 @tablet:col-start-6 @laptop:pt-0 pt-11 @tablet:pt-24": 1 === t
                            }),
                            children: (0, r.jsx)(a.C, {
                                padding: "xs",
                                children: (0, r.jsx)(u.v, { ...(0, l.pb)(e),
                                    priority: !0,
                                    crop: v(e, t),
                                    noMockup: !0,
                                    tight: !0,
                                    noRing: !0,
                                    showLoadingIndicator: x,
                                    onLoadingStart: () => {
                                        w(e => null === e ? 1 : e + 1)
                                    },
                                    onValueChange: e => {
                                        y(n => [...n, { ...e,
                                            position: t
                                        }]), w(e => null != e ? e - 1 : null)
                                    },
                                    cropSettings: {
                                        aspectRatio: 0 === t ? 3 / 4 : .6,
                                        dialog: {
                                            title: "Crop image"
                                        }
                                    }
                                })
                            })
                        }, e.src))
                    })
                })
            }
        },
        11623: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return y
                }
            });
            var r = n(52322),
                i = n(61463),
                l = n(36833),
                o = n.n(l),
                a = n(752),
                c = n(2784),
                u = n(97487),
                s = n(43336),
                p = n(2355),
                d = n(97847),
                f = n(75403),
                h = n(81380),
                v = n(58997);

            function g(e) {
                let {
                    contentRef: t,
                    text: n,
                    onTextChange: l
                } = e, o = c.useRef(0), [a, u] = c.useState(!0);
                return c.useEffect(() => {
                    t.current && !a ? (function(e, t, n) {
                        var r, i, l;
                        if (0 === e.childNodes.length) return;
                        let o = window.getSelection(),
                            a = document.createRange(),
                            c = null !== (l = null === (i = e.childNodes[0]) || void 0 === i ? void 0 : null === (r = i.textContent) || void 0 === r ? void 0 : r.length) && void 0 !== l ? l : n;
                        a.setStart(e.childNodes[0], c >= t ? t : c), a.collapse(!0), null == o || o.removeAllRanges(), null == o || o.addRange(a)
                    }(t.current, o.current, n.length), t.current.focus()) : u(!1)
                }, [t, n]), (0, r.jsx)("span", {
                    ref: t,
                    className: (0, i.Z)("relative inline-block leading-none outline-none", "" !== n && "text-center"),
                    suppressContentEditableWarning: !0,
                    contentEditable: !0,
                    placeholder: "Title",
                    autoCorrect: "off",
                    autoCapitalize: "off",
                    spellCheck: "false",
                    onInput: e => {
                        var n;
                        o.current = function(e) {
                            let t = 0,
                                n = window.getSelection();
                            if (!n || (null == n ? void 0 : n.rangeCount) === 0) return t;
                            let r = n.getRangeAt(0),
                                i = r.cloneRange();
                            return i.selectNodeContents(e), i.setEnd(r.endContainer, r.endOffset), t = i.toString().length
                        }(t.current), l(null !== (n = e.target.textContent) && void 0 !== n ? n : "")
                    },
                    onKeyDown: e => {
                        var n;
                        (null === (n = t.current) || void 0 === n || !n.textContent || t.current.textContent.length < 20 || "Backspace" === e.key || "Clear" === e.key || "Delete" === e.key || "Del" === e.key || "ArrowDown" === e.key || "ArrowUp" === e.key || "ArrowLeft" === e.key || "ArrowRight" === e.key || "a" === e.key && e.metaKey || "c" === e.key && e.metaKey || "v" === e.key && e.metaKey || "a" === e.key && e.ctrlKey || "c" === e.key && e.ctrlKey || "v" === e.key && e.ctrlKey) && "Enter" !== e.key || e.preventDefault()
                    },
                    onPaste: e => {
                        var t, r;
                        e.clipboardData.getData("text/plain").length + (null !== (r = null === (t = e.currentTarget.textContent) || void 0 === t ? void 0 : t.length) && void 0 !== r ? r : n.length) >= 20 && e.preventDefault()
                    },
                    children: n
                })
            }
            let m = c.forwardRef(function(e, t) {
                let {
                    children: n,
                    minSize: i = 50,
                    maxSize: l = 300,
                    wrapText: u = !1
                } = e, s = (0, d.$)(), p = (0, h.W)(s).data, v = c.useRef(null), [g] = (0, a.KO)(f.W), m = t || v;
                return c.useLayoutEffect(() => {
                    let e = t || v,
                        n = o()(null == e ? void 0 : e.current, {
                            minSize: i,
                            maxSize: l,
                            multiLine: u,
                            observeMutations: {
                                subtree: !0,
                                childList: !0,
                                characterData: !0,
                                attributeFilter: ["class"]
                            }
                        });
                    return setTimeout(() => {
                        n.fit()
                    }, 160), () => {
                        o()(e.current).unsubscribe()
                    }
                }, [l, p.fontPreset, t, i, u, g]), (0, r.jsx)("div", {
                    className: "flex w-full justify-center leading-none",
                    children: (0, r.jsx)("div", {
                        ref: m,
                        className: "inline-block whitespace-nowrap",
                        children: n
                    })
                })
            });

            function y(e) {
                let {
                    images: t,
                    title: n,
                    editable: l,
                    onTextChange: o
                } = e, a = c.useRef(null), d = c.useRef(null), f = (0, v.e)();
                return (0, r.jsxs)(p.J, {
                    newGrid: !0,
                    className: "grid-cols-8 pb-12 pt-px @tablet:pb-14 @laptop:pb-10",
                    children: [(0, r.jsxs)("div", {
                        className: "group relative col-span-full",
                        ref: d,
                        children: [(0, r.jsxs)("div", {
                            onClick: () => {
                                var e;
                                null === (e = a.current) || void 0 === e || e.focus()
                            },
                            className: (0, i.Z)("custom-h1 relative z-[5] rounded px-4 py-10 hover:ring-1 hover:ring-custom-bg-24 group-focus-within:overflow-hidden group-focus-within:ring-2 group-focus-within:ring-graphite-100 @tablet:px-6 dark:hover:ring-custom-bg-24 dark:group-focus-within:ring-graphite-0", !l && "cursor-default hover:ring-0"),
                            children: [l && (0, r.jsx)(s.o, {
                                label: "Text",
                                className: "-mx-6 -my-10 font-body group-hover:opacity-100"
                            }), (0, r.jsx)(m, {
                                wrapText: !0,
                                minSize: 50,
                                maxSize: "laptop" === f ? 300 : "tablet" === f ? 200 : 90,
                                children: l && o ? (0, r.jsx)(g, {
                                    contentRef: a,
                                    text: n || "",
                                    onTextChange: o
                                }) : (0, r.jsx)("div", {
                                    className: "text-center",
                                    children: n
                                })
                            })]
                        }), l && n && (0, r.jsx)(u.$, {
                            className: "absolute hidden w-full justify-end pt-2 group-focus-within:flex",
                            maxLength: 20,
                            textLength: n.length
                        })]
                    }), (0, r.jsx)("div", {
                        className: "relative col-span-full grid grid-cols-8 gap-x-6 @laptop:grid-cols-14 @laptop:items-center @laptop:gap-x-12",
                        style: d.current ? {
                            marginTop: "-".concat(d.current.offsetHeight / 4 + 16, "px")
                        } : void 0,
                        children: t
                    })]
                })
            }
        },
        97786: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HeadlineHeroView: function() {
                    return p
                }
            });
            var r = n(52322),
                i = n(61463),
                l = n(66478),
                o = n(16217),
                a = n(32167),
                c = n(44933),
                u = n(11623),
                s = n(55530);

            function p(e) {
                let {
                    preview: {
                        template: t
                    }
                } = (0, s.m)(), {
                    title: n,
                    images: p
                } = { ...e,
                    ...(0, o.Px)(t, e)
                };
                return (0, r.jsx)(u.M, {
                    title: n || "",
                    images: null == p ? void 0 : p.slice(0, 2).map((e, t) => (0, r.jsx)("div", {
                        className: (0, i.Z)("relative", {
                            "col-span-4 @laptop:col-span-5 @laptop:col-start-3 @tablet:col-span-3 @tablet:col-start-2": 0 === t,
                            "col-span-3 col-start-6 @laptop:col-span-3 @laptop:col-start-9 @tablet:col-span-2 @tablet:col-start-6 @laptop:pt-0 pt-11 @tablet:pt-24": 1 === t
                        }),
                        children: (0, r.jsx)(a.n, { ...(0, l.pb)(e),
                            priority: !0,
                            crop: (0, c.E)(e, t)
                        })
                    }, e.src))
                })
            }
        },
        48537: function(e, t, n) {
            "use strict";
            n.d(t, {
                r: function() {
                    return i
                }
            });
            var r = n(2784);

            function i(e) {
                let {
                    onComplete: t
                } = e, [n, i] = r.useState(null), [l, o] = r.useState([]);
                return r.useEffect(() => {
                    0 === n && (t(l), o([]), i(null))
                }, [l, n]), {
                    pendingQueueCount: n,
                    setPendingQueueCount: i,
                    queue: l,
                    setQueue: o
                }
            }
        }
    }
]);