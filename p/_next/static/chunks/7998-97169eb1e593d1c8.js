try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "206b8dcb-5161-4c34-9211-f7a0158d0b91", e._sentryDebugIdIdentifier = "sentry-dbid-206b8dcb-5161-4c34-9211-f7a0158d0b91")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7998, 5481, 695], {
        9254: function(e, t, n) {
            n.d(t, {
                v: function() {
                    return r
                }
            });
            var a = n(25237);
            let r = n.n(a)()(() => Promise.all([n.e(479), n.e(5519)]).then(n.bind(n, 95519)).then(e => e.ImageEditor), {
                loadableGenerated: {
                    webpack: () => [95519]
                },
                ssr: !1
            })
        },
        44933: function(e, t, n) {
            n.d(t, {
                E: function() {
                    return b
                },
                F: function() {
                    return x
                }
            });
            var a = n(52322),
                r = n(61463),
                l = n(66478),
                s = n(16217),
                i = n(1697),
                c = n(86136),
                o = n(9254),
                d = n(11623),
                u = n(11223),
                p = n(47372),
                h = n(55530),
                f = n(48537);

            function b(e, t) {
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

            function x(e) {
                let {
                    preview: {
                        template: t
                    }
                } = (0, h.m)(), {
                    images: n,
                    title: c
                } = { ...e,
                    ...(0, s.Px)(t, e)
                }, {
                    mutate: x
                } = (0, p.n)(), {
                    queue: m,
                    setQueue: g,
                    pendingQueueCount: v,
                    setPendingQueueCount: w
                } = (0, f.r)({
                    onComplete: () => {
                        let t = null == n ? void 0 : n.slice();
                        m.forEach(e => {
                            let {
                                position: n,
                                ...a
                            } = e;
                            null == t || t.splice(n, 1, a)
                        }), x({ ...e,
                            images: t
                        })
                    }
                }), j = null != v && v > 0;
                return (0, a.jsx)(u.V, {
                    section: e,
                    unremovable: !0,
                    unmovable: !0,
                    noInsertBefore: !0,
                    children: (0, a.jsx)(d.M, {
                        editable: !0,
                        onTextChange: t => {
                            x({ ...e,
                                title: t.slice(0, 20)
                            })
                        },
                        title: c || "",
                        images: null == n ? void 0 : n.slice(0, 2).map((e, t) => (0, a.jsx)("div", {
                            className: (0, r.Z)("relative focus-within:z-20", {
                                "col-span-4 @laptop:col-span-5 @laptop:col-start-3 @tablet:col-span-3 @tablet:col-start-2": 0 === t,
                                "col-span-3 col-start-6 @laptop:col-span-3 @laptop:col-start-9 @tablet:col-span-2 @tablet:col-start-6 @laptop:pt-0 pt-11 @tablet:pt-24": 1 === t
                            }),
                            children: (0, a.jsx)(i.C, {
                                padding: "xs",
                                children: (0, a.jsx)(o.v, { ...(0, l.pb)(e),
                                    priority: !0,
                                    crop: b(e, t),
                                    noMockup: !0,
                                    tight: !0,
                                    noRing: !0,
                                    showLoadingIndicator: j,
                                    onLoadingStart: () => {
                                        w(e => null === e ? 1 : e + 1)
                                    },
                                    onValueChange: e => {
                                        g(n => [...n, { ...e,
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
            n.d(t, {
                M: function() {
                    return g
                }
            });
            var a = n(52322),
                r = n(61463),
                l = n(36833),
                s = n.n(l),
                i = n(752),
                c = n(2784),
                o = n(97487),
                d = n(43336),
                u = n(2355),
                p = n(97847),
                h = n(75403),
                f = n(81380),
                b = n(58997);

            function x(e) {
                let {
                    contentRef: t,
                    text: n,
                    onTextChange: l
                } = e, s = c.useRef(0), [i, o] = c.useState(!0);
                return c.useEffect(() => {
                    t.current && !i ? (function(e, t, n) {
                        var a, r, l;
                        if (0 === e.childNodes.length) return;
                        let s = window.getSelection(),
                            i = document.createRange(),
                            c = null !== (l = null === (r = e.childNodes[0]) || void 0 === r ? void 0 : null === (a = r.textContent) || void 0 === a ? void 0 : a.length) && void 0 !== l ? l : n;
                        i.setStart(e.childNodes[0], c >= t ? t : c), i.collapse(!0), null == s || s.removeAllRanges(), null == s || s.addRange(i)
                    }(t.current, s.current, n.length), t.current.focus()) : o(!1)
                }, [t, n]), (0, a.jsx)("span", {
                    ref: t,
                    className: (0, r.Z)("relative inline-block leading-none outline-none", "" !== n && "text-center"),
                    suppressContentEditableWarning: !0,
                    contentEditable: !0,
                    placeholder: "Title",
                    autoCorrect: "off",
                    autoCapitalize: "off",
                    spellCheck: "false",
                    onInput: e => {
                        var n;
                        s.current = function(e) {
                            let t = 0,
                                n = window.getSelection();
                            if (!n || (null == n ? void 0 : n.rangeCount) === 0) return t;
                            let a = n.getRangeAt(0),
                                r = a.cloneRange();
                            return r.selectNodeContents(e), r.setEnd(a.endContainer, a.endOffset), t = r.toString().length
                        }(t.current), l(null !== (n = e.target.textContent) && void 0 !== n ? n : "")
                    },
                    onKeyDown: e => {
                        var n;
                        (null === (n = t.current) || void 0 === n || !n.textContent || t.current.textContent.length < 20 || "Backspace" === e.key || "Clear" === e.key || "Delete" === e.key || "Del" === e.key || "ArrowDown" === e.key || "ArrowUp" === e.key || "ArrowLeft" === e.key || "ArrowRight" === e.key || "a" === e.key && e.metaKey || "c" === e.key && e.metaKey || "v" === e.key && e.metaKey || "a" === e.key && e.ctrlKey || "c" === e.key && e.ctrlKey || "v" === e.key && e.ctrlKey) && "Enter" !== e.key || e.preventDefault()
                    },
                    onPaste: e => {
                        var t, a;
                        e.clipboardData.getData("text/plain").length + (null !== (a = null === (t = e.currentTarget.textContent) || void 0 === t ? void 0 : t.length) && void 0 !== a ? a : n.length) >= 20 && e.preventDefault()
                    },
                    children: n
                })
            }
            let m = c.forwardRef(function(e, t) {
                let {
                    children: n,
                    minSize: r = 50,
                    maxSize: l = 300,
                    wrapText: o = !1
                } = e, d = (0, p.$)(), u = (0, f.W)(d).data, b = c.useRef(null), [x] = (0, i.KO)(h.W), m = t || b;
                return c.useLayoutEffect(() => {
                    let e = t || b,
                        n = s()(null == e ? void 0 : e.current, {
                            minSize: r,
                            maxSize: l,
                            multiLine: o,
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
                        s()(e.current).unsubscribe()
                    }
                }, [l, u.fontPreset, t, r, o, x]), (0, a.jsx)("div", {
                    className: "flex w-full justify-center leading-none",
                    children: (0, a.jsx)("div", {
                        ref: m,
                        className: "inline-block whitespace-nowrap",
                        children: n
                    })
                })
            });

            function g(e) {
                let {
                    images: t,
                    title: n,
                    editable: l,
                    onTextChange: s
                } = e, i = c.useRef(null), p = c.useRef(null), h = (0, b.e)();
                return (0, a.jsxs)(u.J, {
                    newGrid: !0,
                    className: "grid-cols-8 pb-12 pt-px @tablet:pb-14 @laptop:pb-10",
                    children: [(0, a.jsxs)("div", {
                        className: "group relative col-span-full",
                        ref: p,
                        children: [(0, a.jsxs)("div", {
                            onClick: () => {
                                var e;
                                null === (e = i.current) || void 0 === e || e.focus()
                            },
                            className: (0, r.Z)("custom-h1 relative z-[5] rounded px-4 py-10 hover:ring-1 hover:ring-custom-bg-24 group-focus-within:overflow-hidden group-focus-within:ring-2 group-focus-within:ring-graphite-100 @tablet:px-6 dark:hover:ring-custom-bg-24 dark:group-focus-within:ring-graphite-0", !l && "cursor-default hover:ring-0"),
                            children: [l && (0, a.jsx)(d.o, {
                                label: "Text",
                                className: "-mx-6 -my-10 font-body group-hover:opacity-100"
                            }), (0, a.jsx)(m, {
                                wrapText: !0,
                                minSize: 50,
                                maxSize: "laptop" === h ? 300 : "tablet" === h ? 200 : 90,
                                children: l && s ? (0, a.jsx)(x, {
                                    contentRef: i,
                                    text: n || "",
                                    onTextChange: s
                                }) : (0, a.jsx)("div", {
                                    className: "text-center",
                                    children: n
                                })
                            })]
                        }), l && n && (0, a.jsx)(o.$, {
                            className: "absolute hidden w-full justify-end pt-2 group-focus-within:flex",
                            maxLength: 20,
                            textLength: n.length
                        })]
                    }), (0, a.jsx)("div", {
                        className: "relative col-span-full grid grid-cols-8 gap-x-6 @laptop:grid-cols-14 @laptop:items-center @laptop:gap-x-12",
                        style: p.current ? {
                            marginTop: "-".concat(p.current.offsetHeight / 4 + 16, "px")
                        } : void 0,
                        children: t
                    })]
                })
            }
        },
        5258: function(e, t, n) {
            n.d(t, {
                E: function() {
                    return i
                },
                l: function() {
                    return s
                }
            });
            var a = n(52322),
                r = n(77769),
                l = n(2355);

            function s(e) {
                return { ...e,
                    priority: !0,
                    layout: "intrinsic",
                    sizes: "(min-width: 1024px) 570px, (min-width: 640px) 280px, 327px",
                    forceSizes: {
                        width: 570,
                        height: 570
                    },
                    crop: e.crop && { ...e.crop,
                        shape: "rect"
                    }
                }
            }

            function i(e) {
                let {
                    text: t,
                    image: n,
                    fontSizeMultiplication: s
                } = e;
                return (0, a.jsx)(r.L, {
                    sectionType: "HERO",
                    enabled: s,
                    children: (0, a.jsxs)(l.J, {
                        newGrid: !0,
                        className: "items-center py-12 @tablet:py-0",
                        children: [(0, a.jsxs)("div", {
                            className: "relative col-span-full row-start-2 aspect-1 self-start @tablet:col-span-3 @tablet:col-start-5 @tablet:row-start-1 @tablet:-mt-0 @laptop:col-span-6 @laptop:col-start-8",
                            children: [n, (0, a.jsx)("div", {
                                className: "pointer-events-none invisible absolute inset-0 bg-gradient-to-r from-custom-bg/75 to-custom-bg/0 @tablet:visible"
                            })]
                        }), (0, a.jsx)("div", {
                            className: "relative col-span-full row-start-1 pb-8 @tablet:col-span-4 @tablet:col-start-2 @tablet:pb-0 @laptop:col-span-8 @laptop:col-start-2",
                            children: t
                        })]
                    })
                })
            }
        },
        65897: function(e, t, n) {
            n.d(t, {
                g: function() {
                    return i
                },
                i: function() {
                    return s
                }
            });
            var a = n(52322);
            n(2784);
            var r = n(77769),
                l = n(2355);

            function s(e) {
                return { ...e,
                    priority: !0,
                    layout: "fill",
                    sizes: "(min-width: 1024px) 33vw, (min-width: 640px) 37vw, 100vw",
                    crop: e.crop && { ...e.crop,
                        shape: "rect"
                    }
                }
            }

            function i(e) {
                let {
                    text: t,
                    image: n,
                    fontSizeMultiplication: s
                } = e;
                return (0, a.jsx)(r.L, {
                    enabled: s,
                    sectionType: "HERO",
                    children: (0, a.jsxs)(l.J, {
                        newGrid: !0,
                        className: "items-center space-y-6 py-12 @tablet:space-y-12 @tablet:pb-14 @tablet:pt-6 @laptop:space-y-0 @laptop:py-0",
                        children: [(0, a.jsx)("div", {
                            className: "relative col-span-full aspect-1 self-start @tablet:col-span-3 @tablet:col-start-2 @laptop:col-span-6 @laptop:col-start-8",
                            children: n
                        }), (0, a.jsx)("div", {
                            className: "col-span-full @tablet:col-span-6 @tablet:col-start-2 @laptop:col-span-5 @laptop:col-start-2 @laptop:row-start-1",
                            children: t
                        })]
                    })
                })
            }
        },
        63963: function(e, t, n) {
            n.d(t, {
                w: function() {
                    return V
                }
            });
            var a = n(52322),
                r = n(25237),
                l = n.n(r),
                s = n(2784),
                i = n(34911),
                c = n(91927),
                o = n(97786),
                d = n(45481),
                u = n(10695),
                p = n(21009),
                h = n(55530);
            let f = l()(async () => n.e(2564).then(n.bind(n, 62564)).then(e => e.LegacyAgendaHeroView), {
                    loadableGenerated: {
                        webpack: () => [62564]
                    }
                }),
                b = l()(async () => n.e(3447).then(n.bind(n, 33447)).then(e => e.LegacyArtboardHeroView), {
                    loadableGenerated: {
                        webpack: () => [33447]
                    }
                }),
                x = l()(async () => n.e(5202).then(n.bind(n, 5202)).then(e => e.LegacyBillboardHeroView), {
                    loadableGenerated: {
                        webpack: () => [5202]
                    }
                }),
                m = l()(async () => n.e(559).then(n.bind(n, 10559)).then(e => e.LegacyJournalHeroView), {
                    loadableGenerated: {
                        webpack: () => [10559]
                    }
                }),
                g = l()(async () => n.e(9628).then(n.bind(n, 72642)).then(e => e.LegacyLetterpressHeroView), {
                    loadableGenerated: {
                        webpack: () => [72642]
                    }
                }),
                v = l()(async () => n.e(3622).then(n.bind(n, 73622)).then(e => e.LegacyTypewriterHeroView), {
                    loadableGenerated: {
                        webpack: () => [73622]
                    }
                }),
                w = l()(async () => n.e(200).then(n.bind(n, 10200)).then(e => e.LegacyAgoraHeroView), {
                    loadableGenerated: {
                        webpack: () => [10200]
                    }
                }),
                j = l()(async () => n.e(6713).then(n.bind(n, 26713)).then(e => e.LegacyChapterHeroView), {
                    loadableGenerated: {
                        webpack: () => [26713]
                    }
                }),
                y = l()(async () => n.e(6134).then(n.bind(n, 36134)).then(e => e.LegacyMuseumHeroView), {
                    loadableGenerated: {
                        webpack: () => [36134]
                    }
                }),
                L = l()(async () => n.e(3311).then(n.bind(n, 43311)).then(e => e.LegacyPalazzoHeroView), {
                    loadableGenerated: {
                        webpack: () => [43311]
                    }
                }),
                N = l()(async () => n.e(3014).then(n.bind(n, 43014)).then(e => e.LegacyCubicHeroView), {
                    loadableGenerated: {
                        webpack: () => [43014]
                    }
                }),
                E = l()(async () => n.e(4529).then(n.bind(n, 24529)).then(e => e.BlurHeroPdfView), {
                    loadableGenerated: {
                        webpack: () => [24529]
                    }
                }),
                k = l()(async () => n.e(7275).then(n.bind(n, 37275)).then(e => e.MinimalHeroPdfView), {
                    loadableGenerated: {
                        webpack: () => [37275]
                    }
                }),
                G = l()(async () => n.e(7269).then(n.bind(n, 37269)).then(e => e.PanoramaHeroPdfView), {
                    loadableGenerated: {
                        webpack: () => [37269]
                    }
                }),
                A = l()(async () => n.e(4028).then(n.bind(n, 94028)).then(e => e.TileHeroPdfView), {
                    loadableGenerated: {
                        webpack: () => [94028]
                    }
                }),
                H = l()(async () => n.e(1107).then(n.bind(n, 1107)).then(e => e.WideHeroPdfView), {
                    loadableGenerated: {
                        webpack: () => [1107]
                    }
                }),
                C = l()(async () => n.e(4271).then(n.bind(n, 54271)).then(e => e.FullHeroPdfView), {
                    loadableGenerated: {
                        webpack: () => [54271]
                    }
                }),
                P = l()(async () => n.e(7482).then(n.bind(n, 37482)).then(e => e.SimpleHeroPdfView), {
                    loadableGenerated: {
                        webpack: () => [37482]
                    }
                }),
                R = l()(async () => n.e(9741).then(n.bind(n, 69741)).then(e => e.NarrowHeroPdfView), {
                    loadableGenerated: {
                        webpack: () => [69741]
                    }
                }),
                V = s.memo(function(e) {
                    let {
                        hero: t,
                        preview: {
                            template: n
                        }
                    } = (0, h.m)();
                    switch (t.variant) {
                        case "PANORAMA":
                            return (0, a.jsx)(G, { ...e
                            });
                        case "BLUR":
                            return (0, a.jsx)(E, { ...e
                            });
                        case "MINIMAL":
                            return (0, a.jsx)(k, { ...e
                            });
                        case "TILE":
                            return (0, a.jsx)(A, { ...e
                            });
                        case "WIDE":
                            return (0, a.jsx)(H, { ...e
                            });
                        case "FULL":
                            return (0, a.jsx)(C, { ...e
                            });
                        case "HEADLINE":
                            return (0, a.jsxs)(p.B, {
                                children: [(0, a.jsx)(o.HeadlineHeroView, { ...e
                                }), ";"]
                            });
                        case "NARROW":
                            return (0, a.jsx)(R, { ...e
                            });
                        case "OVERLAY":
                            return (0, a.jsx)(d.OverlayHeroView, { ...e
                            });
                        case "RECTANGLE":
                            return (0, a.jsx)(u.RectangleHeroView, { ...e
                            });
                        case "SIMPLE":
                            return (0, a.jsx)(P, { ...e
                            });
                        case "LEGACY":
                            return function(e, t) {
                                switch (e) {
                                    case "ARTBOARD_LEGACY":
                                        return (0, a.jsx)(b, { ...t
                                        });
                                    case "BILLBOARD_LEGACY":
                                        return (0, a.jsx)(x, { ...t
                                        });
                                    case "JOURNAL_LEGACY":
                                        return (0, a.jsx)(m, { ...t
                                        });
                                    case "LETTERPRESS_LEGACY":
                                        return (0, a.jsx)(g, { ...t
                                        });
                                    case "TYPEWRITER_LEGACY":
                                        return (0, a.jsx)(v, { ...t
                                        });
                                    case "AGENDA_LEGACY":
                                        return (0, a.jsx)(f, { ...t
                                        });
                                    case "CUBIC_LEGACY":
                                        return (0, a.jsx)(N, { ...t
                                        });
                                    case "PALAZZO_LEGACY":
                                        return (0, a.jsx)(L, { ...t
                                        });
                                    case "CHAPTER_LEGACY":
                                        return (0, a.jsx)(j, { ...t
                                        });
                                    case "MUSEUM_LEGACY":
                                        return (0, a.jsx)(y, { ...t
                                        });
                                    case "AGORA_LEGACY":
                                        return (0, a.jsx)(w, { ...t
                                        });
                                    default:
                                        return null
                                }
                            }(n, e);
                        default:
                            return (0, i.pv)(t.variant)
                    }
                }, c.AL)
        },
        30357: function(e, t, n) {
            n.d(t, {
                k: function() {
                    return m
                }
            });
            var a = n(52322),
                r = n(25237),
                l = n.n(r),
                s = n(2784),
                i = n(34911),
                c = n(91927),
                o = n(77769),
                d = n(55530);
            let u = l()(async () => n.e(6862).then(n.bind(n, 96862)).then(e => e.SimpleProjectHeroPdfView), {
                    loadableGenerated: {
                        webpack: () => [96862]
                    }
                }),
                p = l()(async () => n.e(3e3).then(n.bind(n, 23e3)).then(e => e.LineProjectHeroPdfView), {
                    loadableGenerated: {
                        webpack: () => [23e3]
                    }
                }),
                h = l()(async () => n.e(3469).then(n.bind(n, 23469)).then(e => e.GradientProjectHeroPdfView), {
                    loadableGenerated: {
                        webpack: () => [23469]
                    }
                }),
                f = l()(async () => n.e(1579).then(n.bind(n, 51579)).then(e => e.FillProjectHeroPdfView), {
                    loadableGenerated: {
                        webpack: () => [51579]
                    }
                }),
                b = l()(async () => n.e(3419).then(n.bind(n, 33419)).then(e => e.ImageProjectHeroPdfView), {
                    loadableGenerated: {
                        webpack: () => [33419]
                    }
                }),
                x = l()(async () => n.e(5335).then(n.bind(n, 5335)).then(e => e.LegacyProjectHeroPdfView), {
                    loadableGenerated: {
                        webpack: () => [5335]
                    }
                }),
                m = s.memo(function(e) {
                    let {
                        projectHero: t
                    } = (0, d.m)();
                    return (0, a.jsx)(o.L, {
                        sectionType: "PROJECT_HERO",
                        className: "h-full pt-16",
                        children: function(e, t) {
                            switch (e) {
                                case "SIMPLE":
                                    return (0, a.jsx)(u, { ...t
                                    });
                                case "LINE":
                                    return (0, a.jsx)(p, { ...t
                                    });
                                case "FILL":
                                    return (0, a.jsx)(f, { ...t
                                    });
                                case "GRADIENT":
                                    return (0, a.jsx)(h, { ...t
                                    });
                                case "IMAGE":
                                    return (0, a.jsx)(b, { ...t
                                    });
                                case "LEGACY":
                                    return (0, a.jsx)(x, { ...t
                                    });
                                default:
                                    return (0, i.pv)(e)
                            }
                        }(t.variant, e)
                    })
                }, c.AL)
        },
        94130: function(e, t, n) {
            n.d(t, {
                S: function() {
                    return f
                }
            });
            var a = n(52322),
                r = n(36430),
                l = n(48093);

            function s(e) {
                let {
                    section: t,
                    alignment: n
                } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        className: "absolute inset-0 bg-custom-button-rgba/5"
                    }), (0, a.jsx)(l.e, {
                        alignment: n,
                        children: (0, a.jsx)(r.H, {
                            module: t.textModule,
                            section: t
                        })
                    })]
                })
            }

            function i(e) {
                let {
                    section: t,
                    alignment: n,
                    templateOptions: s
                } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: ["top" === s.decorationPlacement && (0, a.jsx)("div", {
                        className: "col-span-12 col-start-2 -mt-16 h-[2px] bg-custom-accent"
                    }), (0, a.jsx)(l.e, {
                        alignment: n,
                        className: "pb-12",
                        children: (0, a.jsx)(r.H, {
                            module: t.textModule,
                            section: t
                        })
                    }), "bottom" === s.decorationPlacement && (0, a.jsx)("div", {
                        className: "col-span-12 col-start-2 h-0.5 bg-custom-accent"
                    })]
                })
            }

            function c(e) {
                let {
                    section: t,
                    alignment: n
                } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(l.e, {
                        alignment: n,
                        children: (0, a.jsx)(r.H, {
                            module: t.textModule,
                            section: t
                        })
                    }), (0, a.jsx)("div", {
                        className: "absolute inset-x-0 top-0 h-[264px] bg-gradient-to-b from-custom-button-rgba/10 to-custom-button-rgba/10"
                    })]
                })
            }

            function o(e) {
                let {
                    section: t,
                    alignment: n,
                    templateOptions: s
                } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: ["top" === s.decorationPlacement && (0, a.jsx)("div", {
                        className: "col-span-3 col-start-2 -mt-16 h-[2px] bg-custom-accent"
                    }), (0, a.jsx)(l.e, {
                        alignment: n,
                        className: "pb-12",
                        children: (0, a.jsx)(r.H, {
                            module: t.textModule,
                            section: t
                        })
                    }), "bottom" === s.decorationPlacement && (0, a.jsx)("div", {
                        className: "col-span-3 col-start-2 h-0.5 bg-custom-accent"
                    })]
                })
            }

            function d(e) {
                let {
                    section: t,
                    alignment: n
                } = e;
                return (0, a.jsx)(l.e, {
                    alignment: n,
                    children: (0, a.jsx)(r.H, {
                        module: t.textModule,
                        section: t
                    })
                })
            }
            var u = n(77769),
                p = n(2355),
                h = n(55530);

            function f(e) {
                let {
                    title: t
                } = (0, h.m)();
                return (0, a.jsx)(u.L, {
                    sectionType: "SUBHEADING",
                    className: "h-full",
                    children: (0, a.jsx)("div", {
                        className: "relative flex h-full w-full flex-col justify-end",
                        children: (0, a.jsx)("div", {
                            className: "relative min-h-[356px] pb-58",
                            children: (0, a.jsx)(p.J, {
                                newGrid: !0,
                                fullWidth: !0,
                                className: "h-full pt-16",
                                children: function(e, t) {
                                    var n;
                                    let {
                                        variant: r,
                                        ...l
                                    } = e, u = (null === (n = t.textModule.content) || void 0 === n ? void 0 : n.alignment) || "left";
                                    switch (r) {
                                        case "FILL":
                                            return (0, a.jsx)(s, {
                                                section: t,
                                                alignment: u,
                                                templateOptions: l
                                            });
                                        case "GRADIENT":
                                            return (0, a.jsx)(c, {
                                                section: t,
                                                alignment: u,
                                                templateOptions: l
                                            });
                                        case "FULL_LINE":
                                            return (0, a.jsx)(i, {
                                                section: t,
                                                alignment: u,
                                                templateOptions: l
                                            });
                                        case "SHORT_LINE":
                                            return (0, a.jsx)(o, {
                                                section: t,
                                                alignment: u,
                                                templateOptions: l
                                            });
                                        default:
                                            return (0, a.jsx)(d, {
                                                section: t,
                                                alignment: u,
                                                templateOptions: l
                                            })
                                    }
                                }(t, e)
                            })
                        })
                    })
                })
            }
        },
        37726: function(e, t, n) {
            n.d(t, {
                m: function() {
                    return s
                }
            });
            var a = n(52322),
                r = n(61463),
                l = n(62399);

            function s(e) {
                let {
                    children: t,
                    className: n
                } = e, {
                    shadow: s,
                    border: i,
                    isPreview: c
                } = (0, l.Z)();
                return (0, a.jsx)("div", {
                    className: (0, r.Z)("relative break-before-page break-inside-avoid", !1),
                    children: (0, a.jsx)("div", {
                        className: (0, r.Z)("h-pdf w-full overflow-hidden", s && "shadow-soft-lg", {
                            "ring-1 ring-inset ring-graphite-100/10": i && !c,
                            "ring-4 ring-inset ring-graphite-100/10": i && c
                        }, n),
                        children: t
                    })
                })
            }
        },
        97786: function(e, t, n) {
            n.r(t), n.d(t, {
                HeadlineHeroView: function() {
                    return u
                }
            });
            var a = n(52322),
                r = n(61463),
                l = n(66478),
                s = n(16217),
                i = n(32167),
                c = n(44933),
                o = n(11623),
                d = n(55530);

            function u(e) {
                let {
                    preview: {
                        template: t
                    }
                } = (0, d.m)(), {
                    title: n,
                    images: u
                } = { ...e,
                    ...(0, s.Px)(t, e)
                };
                return (0, a.jsx)(o.M, {
                    title: n || "",
                    images: null == u ? void 0 : u.slice(0, 2).map((e, t) => (0, a.jsx)("div", {
                        className: (0, r.Z)("relative", {
                            "col-span-4 @laptop:col-span-5 @laptop:col-start-3 @tablet:col-span-3 @tablet:col-start-2": 0 === t,
                            "col-span-3 col-start-6 @laptop:col-span-3 @laptop:col-start-9 @tablet:col-span-2 @tablet:col-start-6 @laptop:pt-0 pt-11 @tablet:pt-24": 1 === t
                        }),
                        children: (0, a.jsx)(i.n, { ...(0, l.pb)(e),
                            priority: !0,
                            crop: (0, c.E)(e, t)
                        })
                    }, e.src))
                })
            }
        },
        45481: function(e, t, n) {
            n.r(t), n.d(t, {
                OverlayHeroView: function() {
                    return o
                }
            });
            var a = n(52322),
                r = n(16217),
                l = n(32167),
                s = n(36430),
                i = n(5258),
                c = n(55530);

            function o(e) {
                let {
                    preview: {
                        template: t
                    }
                } = (0, c.m)(), {
                    textModule: n,
                    foregroundImage: o,
                    fontSizeMultiplication: d
                } = { ...e,
                    ...(0, r.Px)(t, e)
                };
                return (0, a.jsx)(i.E, {
                    fontSizeMultiplication: null == d || d,
                    text: (0, a.jsx)(s.H, {
                        section: e,
                        module: n
                    }),
                    image: o && (0, a.jsx)(l.n, { ...(0, i.l)(o)
                    })
                })
            }
        },
        10695: function(e, t, n) {
            n.r(t), n.d(t, {
                RectangleHeroView: function() {
                    return o
                }
            });
            var a = n(52322),
                r = n(16217),
                l = n(32167),
                s = n(36430),
                i = n(65897),
                c = n(55530);

            function o(e) {
                let {
                    preview: {
                        template: t
                    }
                } = (0, c.m)(), {
                    textModule: n,
                    foregroundImage: o,
                    fontSizeMultiplication: d
                } = { ...e,
                    ...(0, r.Px)(t, e)
                };
                return (0, a.jsx)(i.g, {
                    fontSizeMultiplication: null == d || d,
                    text: (0, a.jsx)(s.H, {
                        section: e,
                        module: n
                    }),
                    image: o && (0, a.jsx)(l.n, { ...(0, i.i)(o)
                    })
                })
            }
        },
        21009: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return r
                }
            });
            var a = n(52322);

            function r(e) {
                let {
                    children: t
                } = e;
                return (0, a.jsx)("div", {
                    className: "grid h-full w-full grid-cols-1 place-content-center",
                    children: t
                })
            }
        },
        14186: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return r
                }
            });
            var a = n(52322);

            function r(e) {
                let {
                    parentPageTitle: t,
                    pageNumber: n
                } = e;
                return (0, a.jsx)("div", {
                    className: "relative w-full",
                    children: (0, a.jsxs)("div", {
                        className: "absolute left-0 top-0 flex w-full justify-between px-8 pt-4 text-[18px] leading-[29.25px] text-custom-h1",
                        children: [(0, a.jsx)("div", {
                            children: t
                        }), (0, a.jsx)("div", {
                            children: String(n).padStart(2, "0")
                        })]
                    })
                })
            }
            n(2784)
        },
        42016: function(e, t, n) {
            n.d(t, {
                u: function() {
                    return s
                }
            });
            var a = n(52322),
                r = n(40489),
                l = n(62399);

            function s(e) {
                let {
                    pageNumber: t
                } = e, {
                    pageGap: n,
                    hideTableOfContents: s,
                    isPreview: i
                } = (0, l.Z)();
                return "none" === n || s ? null : (0, a.jsx)("div", {
                    className: (0, r.Z)("w-full", i ? "bg-transparent" : "bg-graphite-0", {
                        "h-12": "md" === n,
                        "h-6": "sm" === n
                    }),
                    children: i && (0, a.jsx)("div", {
                        className: "pt-2 text-center text-sm font-bold  tracking-[0.01em] text-graphite-40",
                        children: t || ""
                    })
                })
            }
        },
        83053: function(e, t, n) {
            n.d(t, {
                o: function() {
                    return l
                }
            });
            var a = n(52322),
                r = n(40489);

            function l(e) {
                let {
                    pages: t
                } = e;
                return (0, a.jsx)("div", {
                    className: "h-full pl-18",
                    children: (0, a.jsx)("div", {
                        className: "flex h-full items-center border-l border-custom-accent",
                        children: (0, a.jsx)("div", {
                            children: t.map(e => (0, a.jsxs)("div", {
                                className: (0, r.Z)("col-start-2 grid grid-cols-6 gap-8 pl-18", {
                                    "custom-h2 py-4 text-[29.25px] font-extrabold leading-[37px]": "PROJECT" !== e.type,
                                    "custom-p py-2 leading-6": "PROJECT" === e.type
                                }),
                                children: [(0, a.jsx)("i", {
                                    className: "col-start-1",
                                    children: String(e.pageNumber).padStart(2, "0")
                                }), (0, a.jsx)("div", {
                                    className: "col-span-full col-start-2",
                                    children: e.title
                                })]
                            }, e.id))
                        })
                    })
                })
            }
        },
        48537: function(e, t, n) {
            n.d(t, {
                r: function() {
                    return r
                }
            });
            var a = n(2784);

            function r(e) {
                let {
                    onComplete: t
                } = e, [n, r] = a.useState(null), [l, s] = a.useState([]);
                return a.useEffect(() => {
                    0 === n && (t(l), s([]), r(null))
                }, [l, n]), {
                    pendingQueueCount: n,
                    setPendingQueueCount: r,
                    queue: l,
                    setQueue: s
                }
            }
        }
    }
]);