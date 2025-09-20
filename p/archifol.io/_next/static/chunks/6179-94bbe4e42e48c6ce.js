try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5725ed45-8332-475f-b057-3ae5e8919460", e._sentryDebugIdIdentifier = "sentry-dbid-5725ed45-8332-475f-b057-3ae5e8919460")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6179], {
        34295: function(e, t, i) {
            i.d(t, {
                K: function() {
                    return eA
                }
            });
            var s = i(52322),
                r = i(75746),
                n = i(61463),
                a = i(39097),
                l = i.n(a),
                c = i(2784),
                o = i(31260),
                d = i(38965),
                h = i(13254),
                u = i(97847),
                x = i(17531),
                p = i(81380),
                g = i(82066),
                m = i(79046);

            function f() {
                return (0, g.useIsMutating)({
                    predicate: e => !e.options.mutationKey
                }) + (0, m.Bq)({
                    predicate: e => !e.options.mutationKey
                })
            }

            function j() {
                let e = (0, h.I)(),
                    t = (0, u.$)(),
                    i = (0, p.W)(t).data,
                    r = (0, x.q)(e).data,
                    a = function() {
                        let [e, t] = c.useState(!1);
                        return c.useEffect(() => g.onlineManager.subscribe(() => {
                            t(!g.onlineManager.isOnline())
                        }), []), e
                    }(),
                    l = f(),
                    m = (0, c.useMemo)(() => "BLOG_POST" !== r.type && "PROJECT" !== r.type || r.published ? "PUBLIC" === i.privacy ? "Public" : "NOT_INDEXED" === i.privacy ? "Visible with the link" : "Password protected" : "Draft", [r, i]);
                return (0, s.jsxs)("div", {
                    className: "relative -top-px space-y-1 px-6 text-center leading-tight",
                    children: [(0, s.jsx)("div", {
                        className: "line-clamp-1 text-sm font-bold @tablet:text-base",
                        children: r.title
                    }), (0, s.jsx)("div", {
                        className: (0, n.Z)("flex items-center justify-center space-x-1 text-xs", {
                            "text-crimson-40": a,
                            "text-graphite-20": !a
                        }),
                        children: a ? (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(o.IconOffline, {
                                "aria-hidden": !0,
                                className: "h-3"
                            }), (0, s.jsx)("span", {
                                children: "Go online to save your changes"
                            })]
                        }) : (0, s.jsxs)(s.Fragment, {
                            children: [l > 0 ? (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(d.$, {
                                    size: "xs"
                                }), (0, s.jsx)("span", {
                                    children: "Saving…"
                                })]
                            }) : (0, s.jsx)("span", {
                                children: "Saved"
                            }), (0, s.jsx)("span", {
                                children: "•"
                            }), (0, s.jsx)("span", {
                                children: m
                            })]
                        })
                    })]
                })
            }
            var v = i(37921),
                b = i(27403),
                N = i(63126),
                y = i(98644),
                w = i(66228),
                E = i(93536);

            function k(e) {
                let {
                    title: t,
                    description: i,
                    action: r
                } = e;
                return (0, s.jsxs)("div", {
                    className: "w-84 overflow-hidden rounded bg-graphite-0 text-base text-graphite-100 shadow-soft-lg",
                    children: [(0, s.jsx)("header", {
                        className: "h-36 bg-graphite-5",
                        children: (0, s.jsxs)("video", {
                            className: "h-full w-full",
                            muted: !0,
                            autoPlay: !0,
                            loop: !0,
                            children: [(0, s.jsx)("source", {
                                src: "/assets/videos/premium/copyfolio/3-Domain.webm"
                            }), (0, s.jsx)("track", {
                                kind: "captions"
                            })]
                        })
                    }), (0, s.jsxs)("section", {
                        className: "space-y-4 px-6 py-5",
                        children: [(0, s.jsxs)("div", {
                            className: "space-y-2 text-left font-normal",
                            children: [(0, s.jsx)("h5", {
                                className: "text-xl font-bold tracking-tight",
                                children: t
                            }), (0, s.jsx)("p", {
                                className: "text-graphite-40",
                                children: i
                            })]
                        }), r]
                    })]
                })
            }

            function I() {
                let {
                    url: e
                } = (0, w.U)(), {
                    data: t
                } = (0, E.P)(), i = (0, u.$)(), r = (0, p.W)(i).data;
                return (0, s.jsx)(v.zt, {
                    delayDuration: 10,
                    children: (0, s.jsxs)(v.fC, {
                        children: [(0, s.jsx)(v.xz, {
                            asChild: !0,
                            children: (0, s.jsxs)(N.z, {
                                size: "sm",
                                shape: "rounded-rectangle",
                                className: "flex h-10 items-center gap-2 bg-graphite-80 ring-1 ring-graphite-60 hover:bg-graphite-60",
                                children: [(0, s.jsx)(b.TH, {
                                    className: "size-6 text-graphite-20"
                                }), (0, s.jsx)("strong", {
                                    className: "font-semibold",
                                    children: e
                                })]
                            })
                        }), (0, s.jsx)(v.h_, {
                            children: (0, s.jsx)(v.VY, {
                                side: "bottom",
                                sideOffset: 10,
                                className: "animate-slide-down",
                                children: (0, s.jsx)(k, {
                                    title: "PREMIUM" !== t ? "Get premium to edit your URL" : "Get a custom domain",
                                    description: "Change your URL, buy a domain, or connect one you already own.",
                                    action: "PREMIUM" !== t ? (0, s.jsx)(y.K, {
                                        as: l(),
                                        href: "/premium",
                                        size: "lg",
                                        className: "w-full",
                                        children: "Go Premium"
                                    }) : (0, s.jsxs)(y.K, {
                                        size: "lg",
                                        as: l(),
                                        href: "/edit/".concat(null == r ? void 0 : r.slug, "?panel=settings-domain"),
                                        className: "w-full items-center justify-center gap-2",
                                        children: ["Domain settings ", (0, s.jsx)(b.ol, {
                                            className: "h-6"
                                        })]
                                    })
                                })
                            })
                        })]
                    })
                })
            }
            var S = i(28391),
                _ = i(86882),
                C = i(5632),
                O = i(93924),
                z = i(64617),
                P = i(13045),
                Z = i(86136),
                T = i(57513),
                D = i(58145),
                R = i(40489),
                M = i(752),
                F = i(62202),
                L = i(68486);

            function G(e) {
                let {
                    title: t,
                    children: i,
                    initial: r = "closed",
                    forceReopenOn: n
                } = e, [a, l] = (0, c.useState)("open" === r);
                return (0, c.useMemo)(() => {
                    l(!0)
                }, [n]), (0, s.jsxs)("div", {
                    children: [(0, s.jsxs)("button", {
                        type: "button",
                        onClick: function() {
                            l(!a)
                        },
                        className: (0, R.Z)("flex items-center space-x-1 text-graphite-40 transition-all duration-200 ease-in-out hover:text-graphite-100"),
                        children: [(0, s.jsx)("div", {
                            className: "font-bold tracking-[.01em] first-letter:uppercase",
                            children: t
                        }), (0, s.jsx)(b._M, {
                            className: (0, R.Z)("h-6 w-6 -rotate-90", a && "rotate-0")
                        })]
                    }), (0, s.jsx)("div", {
                        className: (0, R.Z)("overflow-y-clip overflow-x-visible transition-all duration-200 ease-in-out", !a && "hidden"),
                        children: (0, s.jsx)("div", {
                            className: (0, R.Z)("pt-6"),
                            children: i
                        })
                    })]
                })
            }
            var B = i(15135),
                A = i(55630),
                U = i(47128),
                H = i(48115),
                V = i(28674),
                W = i(41538),
                $ = i(32167),
                K = i(63963),
                X = i(30357),
                Y = i(94130),
                J = i(30187),
                q = i(21883),
                Q = i(24805),
                ee = i(66818),
                et = i(30737),
                ei = i(37726),
                es = i(45150),
                er = i(33360),
                en = i(21009),
                ea = i(8749),
                el = i(69596),
                ec = i(68164),
                eo = i(14186),
                ed = i(42016),
                eh = i(83053),
                eu = i(3043);
            let ex = (0, i(65058).cn)([]);

            function ep(e) {
                var t, i, r;
                let {
                    section: a,
                    tableOfContents: l,
                    size: d,
                    pageNumber: h
                } = e, x = (0, u.$)(), g = (0, p.W)(x).data, [m, f] = c.useState(0), [j, v] = c.useState(0), N = c.useRef(null), y = c.useRef(null);

                function w() {
                    if (!N.current) return;
                    let {
                        width: e
                    } = N.current.getBoundingClientRect();
                    f(e / 1122)
                }

                function E() {
                    if (!y.current) return;
                    let {
                        height: e
                    } = y.current.getBoundingClientRect();
                    v(Math.ceil(e))
                }
                c.useEffect(() => {
                    E()
                }, [m]), c.useEffect(() => {
                    w()
                }, [d]), c.useEffect(() => {
                    setTimeout(() => {
                        E()
                    })
                }, []), c.useLayoutEffect(() => (window.addEventListener("resize", w), w(), () => window.removeEventListener("resize", w)), []);
                let k = (null == a ? void 0 : a.type) === "TEXT_AROUND_MEDIA" && (null == a ? void 0 : a.aspectRatioOfImages) === "original" ? ec.S : el.K,
                    [I, S] = (0, M.KO)(ex),
                    _ = c.useMemo(() => I.includes(a ? a.id : "_table_of_contents_"), [I, a]);
                return (0, s.jsxs)("div", {
                    children: [(0, s.jsx)("div", {
                        ref: N,
                        className: "pdf-section-preview",
                        children: (0, s.jsxs)("div", {
                            className: "relative",
                            style: {
                                width: "".concat(1122 * m, "px"),
                                height: "".concat(j, "px")
                            },
                            children: [(0, s.jsx)("button", {
                                type: "button",
                                onClick: () => {
                                    _ ? S(e => e.filter(e => {
                                        var t;
                                        return (null !== (t = null == a ? void 0 : a.id) && void 0 !== t ? t : "_table_of_contents_") !== e
                                    })) : S(e => {
                                        var t;
                                        return [...e, null !== (t = null == a ? void 0 : a.id) && void 0 !== t ? t : "_table_of_contents_"]
                                    })
                                },
                                className: (0, n.Z)("group absolute inset-0 z-30 flex w-full items-center justify-center  hover:ring-1 hover:ring-inset hover:ring-graphite-40", _ && "bg-graphite-5/40"),
                                children: (0, s.jsx)("div", {
                                    className: (0, n.Z)("hidden rounded-full bg-graphite-0 p-2 shadow-hard-xl group-hover:block", _ && "block"),
                                    children: _ ? (0, s.jsx)(b._j, {
                                        className: "h-4 w-4 text-amber-40"
                                    }) : (0, s.jsx)(o.IconEye, {
                                        className: "hidden h-4 w-4 text-graphite-40 group-hover:block"
                                    })
                                })
                            }), (0, s.jsx)("div", {
                                className: "flex items-center @container",
                                style: {
                                    width: "".concat(1122, "px"),
                                    transform: "scale(".concat(m, ")"),
                                    transformOrigin: "top left"
                                },
                                children: (0, s.jsx)("div", {
                                    className: (0, n.Z)("w-full overflow-hidden bg-custom-bg", _ && "opacity-40 "),
                                    ref: y,
                                    children: (0, s.jsx)(eu.m, {
                                        value: null !== (t = null == a ? void 0 : a.id) && void 0 !== t ? t : "_table_of_contents_",
                                        children: (0, s.jsxs)(ei.m, {
                                            children: [!a && l && (0, s.jsx)(eh.o, {
                                                pages: l
                                            }), a && "HERO" !== a.type && "FOOTER" !== a.type && (0, s.jsx)(eo.K, {
                                                parentPageTitle: null !== (i = a.parentPageTitle) && void 0 !== i ? i : "Title",
                                                pageNumber: h
                                            }), a && function() {
                                                switch (null == a ? void 0 : a.type) {
                                                    case "SUBHEADING":
                                                        return (0, s.jsx)(Y.S, { ...a
                                                        });
                                                    case "COVER_LEGACY":
                                                        return (0, s.jsx)(et.k, { ...a
                                                        });
                                                    case "HERO":
                                                        return (0, s.jsx)(K.w, { ...a
                                                        });
                                                    case "PROJECT_HERO":
                                                        return (0, s.jsx)(X.k, { ...a
                                                        });
                                                    case "COLLAGE":
                                                        return (0, s.jsx)(J.j, { ...a
                                                        });
                                                    case "CV":
                                                        return (0, s.jsx)(en.B, {
                                                            children: (0, s.jsx)(Q.l, { ...a
                                                            })
                                                        });
                                                    case "COVER":
                                                        return (0, s.jsx)(en.B, {
                                                            children: (0, s.jsx)(q.U, { ...a
                                                            })
                                                        });
                                                    case "SERVICES":
                                                        return (0, s.jsx)(en.B, {
                                                            children: (0, s.jsx)(es.b, { ...a
                                                            })
                                                        });
                                                    case "SMART":
                                                        return (0, s.jsx)(en.B, {
                                                            children: (0, s.jsx)(er.k, { ...a
                                                            })
                                                        });
                                                    case "TEXT_AROUND_MEDIA":
                                                        var e;
                                                        return (0, s.jsx)(en.B, {
                                                            children: (0, s.jsx)(ea.r, {
                                                                className: "items-center",
                                                                children: (0, s.jsx)(k, {
                                                                    align: "center",
                                                                    sizeOfGap: "md",
                                                                    sizeOfImages: null !== (e = a.sizeOfImages) && void 0 !== e ? e : "large",
                                                                    children: a.media.map(e => (0, s.jsx)("div", {
                                                                        className: "relative h-full w-full",
                                                                        children: (0, s.jsx)($.n, {
                                                                            priority: !0,
                                                                            captionEnabled: !0,
                                                                            tight: "sm" === a.sizeOfGap,
                                                                            caption: e.caption,
                                                                            ...e,
                                                                            crop: (0, W.ET)(e, a.aspectRatioOfImages)
                                                                        }, e.src)
                                                                    }))
                                                                })
                                                            })
                                                        });
                                                    case "FOOTER":
                                                        return (0, s.jsx)("div", {
                                                            className: "flex h-full w-full flex-col justify-end pb-32",
                                                            children: (0, s.jsx)(ee.w, { ...g
                                                            })
                                                        });
                                                    default:
                                                        return null
                                                }
                                            }()]
                                        })
                                    }, null !== (r = null == a ? void 0 : a.id) && void 0 !== r ? r : "_table_of_contents_")
                                })
                            })]
                        })
                    }), (0, s.jsx)(ed.u, {
                        pageNumber: h
                    })]
                })
            }
            var eg = i(62399),
                em = i(51089),
                ef = i(54962),
                ej = i(62781),
                ev = i(40615);
            let eb = ["sm", "md", "lg"],
                eN = {
                    low: 200,
                    medium: 400,
                    high: 800
                };

            function ey(e) {
                let {
                    onDismiss: t,
                    onExport: i
                } = e, r = (0, u.$)(), n = (0, p.W)(r).data, [a] = (0, O.k)(), [l, d] = c.useState(!1), [h, x] = c.useState(!0), [g, m] = c.useState("all"), [f, j] = c.useState(!1), [v, N] = c.useState({}), [w, E] = c.useState(null), [k, I] = c.useState(!1), [S, _] = c.useState("medium"), [C, P] = c.useState("original"), [Z, D] = c.useState("md"), [W, $] = c.useState(!1), [K, X] = c.useState(!1), [Y, J] = (0, M.KO)(ex), {
                    data: q
                } = ef.SX.useQuery(["Site.findAllDataForPdf", r]);
                c.useEffect(() => {
                    J([])
                }, []);
                let Q = (0, T.Rn)(q),
                    ee = c.useMemo(() => Q.allSections.filter(e => "SMART" !== e.type || 0 !== (0, T._U)(e).length).flatMap(e => "TEXT_AROUND_MEDIA" === e.type ? (0, T.Ai)(e).map((t, i) => ({ ...e,
                        media: t,
                        id: "".concat(e.id, "-").concat(i)
                    })) : e), [Q]),
                    {
                        pagesForTableOfContents: et
                    } = Q;
                c.useEffect(() => {
                    q && (E(et), W || (N({ ...Object.fromEntries(et.map(e => [e.id, !0])),
                        cover: !0,
                        footer: !!n.footer
                    }), $(!0)))
                }, [q]);
                let ei = c.useMemo(() => {
                    let e = {};
                    return null == ee || ee.forEach((t, i) => {
                        let {
                            id: s,
                            pageId: r
                        } = t;
                        0 === i ? e.cover = [s, "_table_of_contents_"] : (e[r] = e[r] || [], e[r].push(s))
                    }), e
                }, [ee]);

                function es(e) {
                    return et ? et.filter(t => t.parentPageId === e).map(e => e.id) : []
                }
                c.useEffect(() => {
                    !g.startsWith("only") && Y.length > 0 && m("custom")
                }, [Y]), c.useEffect(() => {
                    (null == ee ? void 0 : ee.length) && (null == et ? void 0 : et.length) && ((null == et ? void 0 : et.length) && E((0, T.gc)(ee.filter(e => !Y.includes(e.id)), et, K)), 0 === Y.length && m("all"), Y.length === ee.length + 2 && m("none"), X(Y.includes("_table_of_contents_")), [...et.map(e => e.id), "cover"].forEach(e => {
                        let t = ei[e].some(e => Y.includes(e)),
                            i = !ei[e].every(e => Y.includes(e));
                        if (!t) {
                            N(t => ({ ...t,
                                [e]: !0
                            }));
                            return
                        }
                        if (t && i) {
                            N(t => ({ ...t,
                                [e]: "indeterminate"
                            }));
                            return
                        }
                        i || N(t => ({ ...t,
                            [e]: !1
                        }))
                    }), Y.includes("footer") ? N(e => ({ ...e,
                        footer: !1
                    })) : N(e => ({ ...e,
                        footer: !!n.footer
                    })))
                }, [Y]), c.useEffect(() => {
                    if (ee && et) {
                        if ("all" === g) {
                            J([]), N({ ...Object.fromEntries(et.map(e => [e.id, !0])),
                                cover: !0,
                                footer: !!n.footer
                            });
                            return
                        }
                        if ("none" === g) {
                            J([...ee.map(e => e.id), "_table_of_contents_", "footer"]), N({ ...Object.fromEntries(et.map(e => [e.id, !0])),
                                cover: !1,
                                footer: !1
                            });
                            return
                        }
                        if (g.startsWith("only-page-id_")) {
                            let e = g.split("only-page-id_")[1],
                                t = es(e);
                            J(ee.filter(i => !([e, ...t].includes(i.pageId) || "HERO" === i.type)).map(e => e.id)), N({ ...Object.fromEntries(et.map(t => [t.id, t.id === e])),
                                cover: !0,
                                footer: !!n.footer
                            })
                        }
                    }
                }, [g]);
                let er = (0, T.KW)(null == a ? void 0 : a.user);

                function en(e) {
                    if (e.startsWith("only-page-id_") && et) {
                        let t = et.find(t => t.id === e.split("only-page-id_")[1]);
                        return "Only ".concat(null == t ? void 0 : t.title)
                    }
                    return e
                }

                function ea(e) {
                    if (ee && et) {
                        let t = "indeterminate" === v[e] || !1 === v[e];
                        N(i => ({ ...i,
                            [e]: t
                        }));
                        let i = es(e),
                            s = "cover" === e ? [ee[0].id, "_table_of_contents_"] : "footer" === e ? ["footer"] : ee.filter(t => [e, ...i].includes(t.pageId) && "HERO" !== t.type).map(e => e.id);
                        J(e => t ? e.filter(e => !s.includes(e)) : [...e, ...s])
                    }
                }

                function el(e) {
                    if (ee) {
                        let t = ee.filter(e => !Y.includes(e.id)).map(e => e.id).indexOf(e);
                        return -1 === t ? 0 : (K ? 1 : 2) + t
                    }
                    return 0
                }
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(H.Vq, {
                        onDismiss: t,
                        size: "lg",
                        padding: "none",
                        className: "overflow-hidden ring-0",
                        children: (0, s.jsxs)("div", {
                            className: "flex h-[633px] justify-between",
                            children: [(0, s.jsxs)("div", {
                                className: "w-[550px] overflow-x-hidden overflow-y-scroll bg-graphite-5 simple-scrollbar",
                                children: [(0, s.jsx)("div", {
                                    className: "px-6 pt-6",
                                    children: (0, s.jsxs)("div", {
                                        className: "relative z-10 flex h-14 items-center justify-between rounded-xl bg-graphite-0 py-2 pl-7 pr-2 shadow-floating-header ring-inset ring-graphite-5",
                                        children: [(0, s.jsx)("div", {
                                            children: (0, s.jsxs)(U.Lt, {
                                                modal: !1,
                                                open: f,
                                                onOpenChange: j,
                                                children: [(0, s.jsx)(U.WA, {
                                                    children: (0, s.jsxs)("div", {
                                                        className: "flex items-center space-x-1 text-graphite-40 transition-colors hover:text-graphite-100",
                                                        children: [(0, s.jsx)("span", {
                                                            className: "font-bold  tracking-[0.01em] capitalize",
                                                            children: en(g)
                                                        }), (0, s.jsx)(b._M, {
                                                            "aria-hidden": !0,
                                                            className: (0, R.Z)("h-6", f && "rotate-180")
                                                        })]
                                                    })
                                                }), (0, s.jsxs)(U.Nv, {
                                                    variant: "exportPreset",
                                                    children: [(0, s.jsx)(U.hP, {
                                                        onClick: () => {
                                                            m("all")
                                                        },
                                                        children: "All"
                                                    }), (0, s.jsx)(U.hP, {
                                                        onClick: () => {
                                                            m("none")
                                                        },
                                                        children: "None"
                                                    }), (0, s.jsx)(U.u2, {}), null == et ? void 0 : et.filter(e => "HOME" === e.type || "CUSTOM" === e.type).map(e => (0, s.jsx)(U.hP, {
                                                        onClick: () => {
                                                            m("only-page-id_".concat(e.id))
                                                        },
                                                        children: en("only-page-id_".concat(e.id))
                                                    }))]
                                                })]
                                            })
                                        }), (0, s.jsx)("div", {
                                            className: "flex space-x-2",
                                            children: eb.map(e => (0, s.jsx)("button", {
                                                type: "button",
                                                onClick: () => D(e),
                                                className: (0, R.Z)("rounded px-5 py-2 text-graphite-40 transition-colors hover:text-graphite-100", Z === e && "bg-graphite-5"),
                                                children: function(e) {
                                                    switch (e) {
                                                        case "sm":
                                                        default:
                                                            return (0, s.jsx)(o.IconSmallGrid, {
                                                                className: "h-6 w-6"
                                                            });
                                                        case "md":
                                                            return (0, s.jsx)(o.IconMediumGrid, {
                                                                className: "h-6 w-6"
                                                            });
                                                        case "lg":
                                                            return (0, s.jsx)(o.IconLargeGrid, {
                                                                className: "h-6 w-6"
                                                            })
                                                    }
                                                }(e)
                                            }))
                                        })]
                                    })
                                }), (0, s.jsxs)(eg.V, {
                                    value: {
                                        isPdfView: !0,
                                        border: !0,
                                        pageGap: "sm",
                                        isPreview: !0,
                                        forPrint: "print" === C,
                                        topMargin: !0,
                                        hideButtons: h,
                                        previewSize: Z
                                    },
                                    children: [(0, s.jsx)(ej.J, {
                                        rootClassName: "pdf-section-preview",
                                        forcePrintColors: "print" === C
                                    }), (0, s.jsxs)("div", {
                                        className: "h-[553px] space-y-4 overflow-y-scroll px-7 pt-8 hide-scrollbar last:pb-12",
                                        children: [ee && ee.length > 0 && (0, s.jsxs)("div", {
                                            className: "rounded bg-graphite-0/50 p-6",
                                            children: [(0, s.jsx)("div", {
                                                className: "relative",
                                                children: (0, s.jsx)("div", {
                                                    className: "absolute right-0 top-0",
                                                    children: (0, s.jsx)(A.X, {
                                                        label: "",
                                                        size: "sm",
                                                        value: v.cover,
                                                        onChange: () => ea("cover")
                                                    }, "checkbox-cover")
                                                })
                                            }), (0, s.jsx)(G, {
                                                title: "Cover",
                                                initial: "open",
                                                forceReopenOn: Z,
                                                children: (0, s.jsxs)("div", {
                                                    className: (0, R.Z)("grid gap-6", {
                                                        "grid-cols-1": "lg" === Z,
                                                        "grid-cols-2": "md" === Z,
                                                        "grid-cols-3": "sm" === Z
                                                    }),
                                                    children: [(0, s.jsx)(ep, {
                                                        size: Z,
                                                        section: ee[0],
                                                        pageNumber: Y.includes(ee[0].id) ? 0 : 1
                                                    }), (0, s.jsx)(ep, {
                                                        size: Z,
                                                        tableOfContents: w,
                                                        section: null,
                                                        pageNumber: K ? 0 : Y.includes(ee[0].id) ? 1 : 2
                                                    })]
                                                })
                                            })]
                                        }), null == et ? void 0 : et.filter(e => "HOME" === e.type || "CUSTOM" === e.type).map(e => (0, s.jsxs)("div", {
                                            className: "rounded bg-graphite-0/50 p-6",
                                            children: [(0, s.jsx)("div", {
                                                className: "relative",
                                                children: (0, s.jsx)("div", {
                                                    className: "absolute right-0 top-0",
                                                    children: (0, s.jsx)(A.X, {
                                                        label: "",
                                                        size: "sm",
                                                        value: v[e.id],
                                                        onChange: () => ea(e.id)
                                                    }, "checkbox-".concat(e.id))
                                                })
                                            }), (0, s.jsx)(G, {
                                                title: e.title || "title",
                                                initial: "open",
                                                forceReopenOn: Z,
                                                children: (0, s.jsx)("div", {
                                                    className: (0, R.Z)("grid gap-6", {
                                                        "grid-cols-1": "lg" === Z,
                                                        "grid-cols-2": "md" === Z,
                                                        "grid-cols-3": "sm" === Z
                                                    }),
                                                    children: null == ee ? void 0 : ee.filter(t => [e.id, ...es(e.id)].includes(t.pageId)).map(t => {
                                                        if ("HERO" === t.type) return null;
                                                        if ("PROJECT_HERO" === t.type) return (0, s.jsxs)("span", {
                                                            className: "col-span-full -mx-3 -mb-4 rounded bg-graphite-100/5 px-3 py-6 last-of-type:-mb-0",
                                                            children: [(0, s.jsx)("div", {
                                                                className: "relative",
                                                                children: (0, s.jsx)("div", {
                                                                    className: "absolute right-0 top-0",
                                                                    children: (0, s.jsx)(A.X, {
                                                                        label: "",
                                                                        size: "sm",
                                                                        value: v[t.pageId],
                                                                        onChange: () => ea(t.pageId)
                                                                    }, "checkbox-".concat(t.pageId))
                                                                })
                                                            }), (0, s.jsx)(G, {
                                                                title: t.parentPageTitle || "title",
                                                                initial: "open",
                                                                forceReopenOn: Z,
                                                                children: (0, s.jsx)("div", {
                                                                    className: (0, R.Z)("grid gap-6", {
                                                                        "grid-cols-1": "lg" === Z,
                                                                        "grid-cols-2": "md" === Z,
                                                                        "grid-cols-3": "sm" === Z
                                                                    }),
                                                                    children: ee.filter(e => e.pageId === t.pageId).map(e => {
                                                                        let t = el(e.id);
                                                                        return (0, s.jsx)(ep, {
                                                                            size: Z,
                                                                            section: e,
                                                                            pageNumber: t
                                                                        })
                                                                    })
                                                                })
                                                            })]
                                                        });
                                                        if (es(e.id).includes(t.pageId)) return null;
                                                        let i = el(t.id);
                                                        return (0, s.jsx)(ep, {
                                                            size: Z,
                                                            section: t,
                                                            pageNumber: i
                                                        })
                                                    })
                                                })
                                            })]
                                        })), ee && n.footer && (0, s.jsxs)("div", {
                                            className: "rounded bg-graphite-0/50 p-6",
                                            children: [(0, s.jsx)("div", {
                                                className: "relative",
                                                children: (0, s.jsx)("div", {
                                                    className: "absolute right-0 top-0",
                                                    children: (0, s.jsx)(A.X, {
                                                        label: "",
                                                        size: "sm",
                                                        value: v.footer,
                                                        onChange: () => ea("footer")
                                                    }, "checkbox-footer")
                                                })
                                            }), (0, s.jsx)(G, {
                                                title: "Back cover",
                                                initial: "open",
                                                children: (0, s.jsx)("div", {
                                                    className: (0, R.Z)("grid gap-6", {
                                                        "grid-cols-1": "lg" === Z,
                                                        "grid-cols-2": "md" === Z,
                                                        "grid-cols-3": "sm" === Z
                                                    }),
                                                    children: (0, s.jsx)(ep, {
                                                        size: Z,
                                                        section: {
                                                            type: "FOOTER",
                                                            id: "footer",
                                                            pageId: "",
                                                            showNavigation: !1,
                                                            textModule: {
                                                                extension: null,
                                                                type: "TEXT"
                                                            },
                                                            version: -1,
                                                            parentPageTitle: "Back cover"
                                                        },
                                                        pageNumber: function() {
                                                            if (ee) {
                                                                let e = ee.filter(e => !Y.includes(e.id)).length;
                                                                return Y.includes("footer") ? 0 : (K ? 1 : 2) + e
                                                            }
                                                            return 0
                                                        }()
                                                    })
                                                })
                                            })]
                                        })]
                                    })]
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "relative w-[354px] bg-graphite-0",
                                children: [(0, s.jsx)("div", {
                                    className: "p-6",
                                    children: (0, s.jsx)(H.fK, {
                                        children: (0, s.jsxs)("div", {
                                            className: "space-y-3",
                                            children: [(0, s.jsx)(H.$N, {
                                                children: "PDF export"
                                            }), (0, s.jsx)("p", {
                                                className: "text-graphite-40",
                                                children: "Turn your portfolio into print."
                                            })]
                                        })
                                    })
                                }), (0, s.jsxs)("div", {
                                    className: "space-y-4",
                                    children: [(0, s.jsx)(B.r, {
                                        message: "To unlock this feature",
                                        gtmOrigin: "ExportDialog",
                                        short: !0
                                    }), (0, s.jsxs)(H.cZ, {
                                        children: [(0, s.jsx)(L.Zr.Root, {
                                            title: null,
                                            children: (0, s.jsxs)("div", {
                                                className: "space-y-4",
                                                children: [(0, s.jsxs)(L.Zr.ChoiceGrid, {
                                                    label: "Color style",
                                                    onChange: e => P(e),
                                                    value: C,
                                                    children: [(0, s.jsx)(L.Zr.ChoiceGrid.Item, {
                                                        image: (0, s.jsx)("div", {
                                                            className: "custom-h1 flex h-14 w-14 items-center justify-center rounded-full border bg-custom-bg text-xl font-bold text-custom-h1",
                                                            children: "Aa"
                                                        }),
                                                        value: "original",
                                                        size: "lg",
                                                        children: "Original"
                                                    }), (0, s.jsx)(L.Zr.ChoiceGrid.Item, {
                                                        image: (0, s.jsx)("div", {
                                                            className: "custom-h1 flex h-14 w-14 items-center justify-center rounded-full border bg-graphite-0 text-xl font-bold text-graphite-100",
                                                            children: "Aa"
                                                        }),
                                                        value: "print",
                                                        size: "lg",
                                                        children: "For print"
                                                    })]
                                                }), (0, s.jsxs)(L.Zr.Switch, {
                                                    id: "buttons",
                                                    label: "Buttons & social icons",
                                                    value: h,
                                                    onChange: e => x(e),
                                                    children: [(0, s.jsx)(L.Zr.Switch.Item, {
                                                        value: !0,
                                                        children: "Hidden"
                                                    }), (0, s.jsx)(L.Zr.Switch.Item, {
                                                        value: !1,
                                                        children: "Visible"
                                                    })]
                                                }), (0, s.jsxs)(L.Zr.Switch, {
                                                    id: "image-resolution",
                                                    label: "Image resolution",
                                                    value: S,
                                                    onChange: e => _(e),
                                                    children: [(0, s.jsx)(L.Zr.Switch.Item, {
                                                        value: "low",
                                                        children: "Low"
                                                    }), (0, s.jsx)(L.Zr.Switch.Item, {
                                                        value: "medium",
                                                        children: "Medium"
                                                    }), (0, s.jsx)(L.Zr.Switch.Item, {
                                                        value: "high",
                                                        children: "High"
                                                    })]
                                                })]
                                            })
                                        }), (0, s.jsxs)("div", {
                                            className: "absolute bottom-6 flex w-full items-center justify-between gap-4 px-6",
                                            children: [(0, s.jsx)("div", {
                                                className: "flex flex-col text-xs font-bold  tracking-[0.01em]"
                                            }), (0, s.jsx)(y.K, {
                                                disabled: "none" === g,
                                                size: "lg",
                                                loading: k,
                                                className: "w-36",
                                                onClick: async () => {
                                                    if ((null == a ? void 0 : a.user.subscriptionType) !== "PREMIUM") {
                                                        d(!0), (0, z.w)({
                                                            event: "openPricingDialog",
                                                            from: "ExportDialog"
                                                        });
                                                        return
                                                    }
                                                    em.Ts ? (0, F.Am)((0, s.jsx)(V.FN, {
                                                        intent: "danger",
                                                        children: "PDF export currently only works in a deployed environment"
                                                    })) : (I(!0), i({
                                                        siteSlug: n.slug,
                                                        pdfFileName: er,
                                                        imageResolutionDPI: eN[S],
                                                        forPrint: "print" === C,
                                                        hideButtons: h,
                                                        hiddenSections: Y
                                                    }), (0, z.w)({
                                                        event: "exportPDF",
                                                        forPrint: "print" === C,
                                                        hideButtons: h,
                                                        imageResolution: S
                                                    }))
                                                },
                                                children: "Export"
                                            })]
                                        })]
                                    })]
                                })]
                            })]
                        })
                    }), l && (0, s.jsx)(ev.n, {
                        onDismiss: () => {
                            d(!1)
                        }
                    })]
                })
            }
            var ew = i(56646),
                eE = i(63962);
            let ek = {
                complete: {
                    title: "Your PDF is exported",
                    description: "All done! Your file is downloaded to your computer. You can close this window."
                },
                error: {
                    title: "Your PDF couldn’t export",
                    description: "Your website seems to be too large to export. Try again with fewer pages."
                },
                exporting: {
                    title: "Exporting in the background",
                    description: "This can take a while, even up to 5 minutes. We will notify you once it’s done."
                }
            };

            function eI(e, t) {
                return (0, s.jsx)("div", {
                    className: (0, R.Z)({
                        "h-18 w-18": "md" === t,
                        "h-6 w-6": "sm" === t
                    }),
                    children: (0, s.jsx)(eE.o, {
                        percentage: e,
                        shadow: "md" === t ? "lg" : "none",
                        strokeWidth: "md" === t ? "md" : "lg",
                        size: t,
                        theme: "md" === t ? "light" : "dark",
                        children: "md" === t ? (0, s.jsx)(o.IconDownload, {
                            className: "h-6 w-6 text-graphite-100"
                        }) : (0, s.jsx)(o.IconDownloadWide, {
                            className: "h-8 w-8 text-graphite-20 group-hover:text-graphite-0"
                        })
                    })
                })
            }

            function eS(e) {
                let {
                    pdfExportStatus: t,
                    percentage: i,
                    onDismiss: r
                } = e;
                return "idle" === t ? null : (0, s.jsx)(H.Vq, {
                    size: "sm",
                    children: (0, s.jsx)(H.cZ, {
                        className: "text-center",
                        children: (0, s.jsxs)("div", {
                            className: "space-y-6",
                            children: [(0, s.jsx)("div", {
                                className: "py-3",
                                children: (0, s.jsx)("div", {
                                    className: "relative flex items-center justify-center",
                                    children: "exporting" === t ? eI(i, "md") : (0, s.jsxs)(s.Fragment, {
                                        children: [(0, s.jsx)("div", {
                                            className: "absolute",
                                            children: "complete" === t ? (0, s.jsx)(b.Jr, {
                                                className: "h-6 w-6 text-emerald-60"
                                            }) : (0, s.jsx)(o.IconExclamationCircle, {
                                                className: "h-6 w-6 text-crimson-60"
                                            })
                                        }), (0, s.jsx)("svg", {
                                            height: 72,
                                            width: 72,
                                            className: "rounded-full shadow-soft-lg",
                                            children: (0, s.jsx)("circle", {
                                                fill: "complete" === t ? "#DDFBEC" : "#FEE2E2",
                                                strokeWidth: 2,
                                                r: 35,
                                                cx: 36,
                                                cy: 36,
                                                className: (0, R.Z)({
                                                    "stroke-emerald-60": "complete" === t,
                                                    "stroke-crimson-60": "error" === t
                                                })
                                            })
                                        })]
                                    })
                                })
                            }), (0, s.jsxs)("div", {
                                className: "space-y-2",
                                children: [(0, s.jsx)("h2", {
                                    className: "font-body text-2xl font-bold text-graphite-100",
                                    children: ek[t].title
                                }), (0, s.jsx)("p", {
                                    className: "font-body text-graphite-60",
                                    children: ek[t].description
                                })]
                            }), (0, s.jsx)(ew.k, {
                                className: "w-[188px]",
                                size: "lg",
                                onClick: r,
                                children: "Got it"
                            })]
                        })
                    })
                })
            }

            function e_(e) {
                let {
                    mobile: t
                } = e, [i, r] = (0, c.useState)(!1), n = (0, c.useRef)(!1), [a, l] = (0, c.useState)(!1), [d, h] = (0, c.useState)("idle"), [u, x] = (0, c.useState)(0), p = (0, c.useRef)(), g = () => {
                    (0, z.w)({
                        event: "clickExportToPDFDialogButton"
                    }), "exporting" === d ? l(!0) : (r(!0), h("idle"))
                };
                return (0, c.useEffect)(() => {
                    n.current = i
                }, [i]), (0, c.useEffect)(() => ("exporting" !== d && "complete" !== d && (clearInterval(p.current), x(0)), "complete" === d ? (clearInterval(p.current), x(100)) : "exporting" === d && u < 95 ? p.current = window.setInterval(() => {
                    let e = u + 1;
                    e > u ? x(Math.min(e, 95)) : clearInterval(p.current)
                }, (0, Z.xT)(700, 1300)) : clearInterval(p.current), () => clearInterval(p.current)), [u, d]), (0, s.jsxs)(s.Fragment, {
                    children: [t ? (0, s.jsx)(D.s, {
                        size: "lg",
                        icon: (0, s.jsx)(o.IconFile, {
                            "aria-hidden": !0,
                            className: "h-6"
                        }),
                        onClick: g,
                        className: "shrink-0",
                        children: "Export PDF"
                    }) : (0, s.jsx)(P.$, {
                        dark: !0,
                        size: "auto",
                        "data-action-id": "pdf",
                        icon: "exporting" === d ? eI(u, "sm") : (0, s.jsx)(o.IconFile, {
                            "aria-hidden": !0,
                            className: "h-6"
                        }),
                        onClick: g,
                        className: "group shrink-0",
                        children: "Export PDF"
                    }), i && (0, s.jsx)(ey, {
                        onDismiss: () => {
                            r(!1)
                        },
                        onExport: async e => {
                            h("exporting"), setTimeout(() => {
                                n.current && (r(!1), l(!0))
                            }, 1e4);
                            let t = await (0, T.ld)(e);
                            if (t.ok) {
                                let i = await t.json();
                                await (0, T.Kj)(i.url, e.pdfFileName), h("complete"), l(!0), (0, z.w)({
                                    event: "pdfExportFinished",
                                    result: "success"
                                })
                            } else h("error"), l(!0), (0, z.w)({
                                event: "pdfExportFinished",
                                result: "error"
                            })
                        }
                    }), a && (0, s.jsx)(eS, {
                        pdfExportStatus: d,
                        percentage: u,
                        onDismiss: () => l(!1)
                    })]
                })
            }
            var eC = i(84985);

            function eO(e) {
                let {
                    preview: t
                } = e, [i] = (0, O.k)(), r = (0, C.useRouter)(), n = (0, h.I)(), a = (0, u.$)(), l = (0, x.q)(n).data, c = (0, p.W)(a).data;
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)("div", {
                        className: "inline-flex space-x-6",
                        children: [!t && (0, s.jsxs)(s.Fragment, {
                            children: [_.Ab && (0, s.jsx)(e_, {}), !_.Ab && (0, s.jsx)(P.$, {
                                dark: !0,
                                size: "auto",
                                icon: (0, s.jsx)(o.IconGraph, {
                                    "aria-hidden": !0,
                                    className: "h-6"
                                }),
                                onClick: () => {
                                    (0, z.w)({
                                        event: "clickSiteInsightsInHeader",
                                        plan: (null == i ? void 0 : i.user.subscriptionType) === "PREMIUM" ? "premium" : "free"
                                    }), r.push("/insights")
                                },
                                children: "Site insights"
                            }), (0, s.jsxs)(P.$, {
                                dark: !0,
                                as: "a",
                                "data-testid": "view-site-button",
                                href: "/api/draft?siteSlug=".concat(c.slug).concat(l.slug ? "&pageSlug=".concat(l.slug) : ""),
                                size: "auto",
                                icon: (0, s.jsx)(o.IconEye, {
                                    "aria-hidden": !0,
                                    className: "h-6"
                                }),
                                onClick: () => {
                                    (0, z.w)({
                                        event: "clickedPreviewSite"
                                    })
                                },
                                children: ["Preview\xa0 ", (0, s.jsx)("span", {
                                    className: "sr-only",
                                    children: "(in a new tab)"
                                })]
                            })]
                        }), (0, s.jsx)(eC.H, {})]
                    })
                })
            }
            var ez = i(89412),
                eP = i(23848),
                eZ = i(99527);

            function eT(e) {
                let {
                    intent: t = "neutral",
                    dark: i,
                    children: r
                } = e;
                return (0, s.jsx)("div", {
                    className: (0, R.Z)("inline-flex h-6 items-center rounded border px-2 text-xs font-extrabold uppercase tracking-[0.01em]", i ? {
                        "border-graphite-40 text-graphite-40": "neutral" === t,
                        "border-violet-20 text-violet-20": "success" === t
                    } : {
                        "border-graphite-60 text-graphite-60": "neutral" === t,
                        "border-violet-40 text-violet-40": "success" === t
                    }),
                    children: r
                })
            }
            var eD = i(40061),
                eR = i(75403);

            function eM(e) {
                let {
                    onPublishClick: t,
                    onClose: i
                } = e, [r] = (0, O.k)({
                    required: !0
                }), [n, a] = (0, M.KO)(eR.W), c = (0, u.$)(), d = (0, p.W)(c).data, g = (0, h.I)(), m = (0, x.q)(g).data, f = (null == r ? void 0 : r.user.subscriptionType) === "PREMIUM";
                return (0, s.jsx)("div", {
                    className: "w-full px-4 pt-6",
                    children: (0, s.jsx)("div", {
                        className: "h-full w-full animate-slide-down rounded bg-graphite-0 text-graphite-60 shadow-soft-xl ring-1 ring-graphite-5",
                        children: (0, s.jsxs)("div", {
                            className: "flex flex-col items-stretch p-2",
                            children: [(0, s.jsx)(D.s, {
                                size: "lg",
                                onClick: t,
                                children: (0, s.jsxs)("div", {
                                    className: "flex items-center gap-3",
                                    children: ["Publish site", (0, s.jsx)(o.IconChevronRight, {
                                        className: "size-6 text-graphite-20"
                                    })]
                                })
                            }), (0, s.jsx)(eD.Z0, {}), (0, s.jsx)(D.s, {
                                size: "lg",
                                as: "a",
                                href: "/insights",
                                target: "_blank",
                                icon: (0, s.jsx)(o.IconGraph, {
                                    "aria-hidden": !0,
                                    className: "h-6 w-6 text-graphite-20"
                                }),
                                children: (0, s.jsx)("div", {
                                    children: "Site insights"
                                })
                            }), (0, s.jsx)(D.s, {
                                size: "lg",
                                as: "a",
                                href: "/api/draft?siteSlug=".concat(d.slug).concat(m.slug ? "&pageSlug=".concat(m.slug) : ""),
                                target: "_blank",
                                icon: (0, s.jsx)(eZ.Z, {
                                    "aria-hidden": !0,
                                    className: "h-6 w-6 text-graphite-20"
                                }),
                                children: (0, s.jsx)("div", {
                                    children: "Preview"
                                })
                            }), (0, s.jsx)(eD.Z0, {}), (0, s.jsx)(D.s, {
                                size: "lg",
                                icon: (0, s.jsx)(o.IconPalette, {
                                    "aria-hidden": !0,
                                    className: "h-6"
                                }),
                                "aria-label": "Toggle design sidebar",
                                "aria-controls": "sidebar-design",
                                "aria-expanded": "DESIGN" === n,
                                onClick: () => {
                                    null == i || i(), a("DESIGN" !== n ? "DESIGN" : null)
                                },
                                children: "Design"
                            }), (0, s.jsx)(D.s, {
                                size: "lg",
                                icon: (0, s.jsx)(o.IconOptions, {
                                    "aria-hidden": !0,
                                    className: "h-6"
                                }),
                                "aria-label": "Toggle settings sidebar",
                                "aria-controls": "sidebar-settings",
                                "aria-expanded": "SETTINGS" === n,
                                onClick: () => {
                                    null == i || i(), a("SETTINGS" !== n ? "SETTINGS" : null)
                                },
                                children: "Settings"
                            }), (0, s.jsx)(eD.Z0, {}), c && (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(l(), {
                                    href: "/premium",
                                    passHref: !0,
                                    legacyBehavior: !0,
                                    children: (0, s.jsx)(D.s, {
                                        size: "lg",
                                        as: "a",
                                        icon: (0, s.jsx)(o.IconDiamond, {
                                            "aria-hidden": !0,
                                            className: "h-6 fill-graphite-20"
                                        }),
                                        children: (0, s.jsx)("div", {
                                            className: "flex flex-row items-center space-x-3",
                                            children: (0, s.jsx)("span", {
                                                children: "Explore premium"
                                            })
                                        })
                                    })
                                }), (0, s.jsx)(l(), {
                                    href: "/settings",
                                    passHref: !0,
                                    legacyBehavior: !0,
                                    children: (0, s.jsx)(D.s, {
                                        size: "lg",
                                        as: "a",
                                        icon: (0, s.jsx)(o.IconProfile, {
                                            "aria-hidden": !0,
                                            className: "h-6 fill-graphite-20"
                                        }),
                                        children: (0, s.jsxs)("div", {
                                            className: "flex flex-row items-center space-x-3",
                                            children: [(0, s.jsx)("span", {
                                                children: "Manage account"
                                            }), f && (0, s.jsx)(eT, {
                                                intent: "success",
                                                children: "Premium"
                                            })]
                                        })
                                    })
                                })]
                            }), (0, s.jsx)(D.s, {
                                size: "lg",
                                onClick: () => {
                                    (0, eP.signOut)({
                                        callbackUrl: "/"
                                    })
                                },
                                icon: (0, s.jsx)(o.IconSignOut, {
                                    "aria-hidden": !0,
                                    className: "h-6 fill-graphite-20"
                                }),
                                children: "Log out"
                            })]
                        })
                    })
                })
            }
            var eF = i(37299),
                eL = i(60185),
                eG = i(97304);

            function eB(e) {
                e.preventDefault()
            }

            function eA(e) {
                let {
                    className: t,
                    children: i,
                    preview: a
                } = e, d = (0, u.$)(), h = (0, p.W)(d).data, x = (0, eF.U)(!1, "PUBLISHING"), [g, m] = (0, c.useState)(!1), [v, b] = (0, c.useState)(!1), N = f();
                return (0, c.useEffect)(() => N > 0 ? (window.addEventListener("beforeunload", eB), () => {
                    window.removeEventListener("beforeunload", eB)
                }) : () => {}, [N]), (0, s.jsxs)(r.fC, {
                    open: g,
                    onOpenChange: e => {
                        b(!1), m(e)
                    },
                    modal: !0,
                    children: [(0, s.jsxs)("header", {
                        "data-testid": "editor-header",
                        className: (0, n.Z)("z-editor-header flex h-16 items-center justify-between bg-graphite-100 p-6 text-graphite-0 tablet:justify-normal", t),
                        children: [(0, s.jsxs)("div", {
                            className: "flex flex-1 items-center space-x-6",
                            children: [(0, s.jsx)(l(), {
                                href: "/edit/".concat(h.slug),
                                "aria-label": "".concat(eL.sG, " home"),
                                className: "-mx-2 self-center focus:outline-none focus-visible:ring",
                                children: (0, s.jsx)(ez.T, {
                                    className: "h-12 p-2"
                                })
                            }), (0, s.jsx)("div", {
                                className: "hidden tablet:inline-flex",
                                children: i
                            })]
                        }), a ? (0, s.jsx)(I, {}) : (0, s.jsx)(j, {}), (0, s.jsxs)("div", {
                            className: "hidden flex-1 items-center justify-end space-x-6 tablet:flex",
                            children: [(0, s.jsx)(eO, {
                                preview: a
                            }), (0, s.jsx)(eG.y, {
                                dark: !0
                            })]
                        }), (0, s.jsx)(r.xz, {
                            className: "flex flex-1 justify-end tablet:hidden",
                            children: (0, s.jsx)("div", {
                                role: "button",
                                "aria-hidden": !0,
                                children: g ? (0, s.jsx)(o.IconX, {
                                    className: "h-6 w-6"
                                }) : (0, s.jsx)(o.IconMenu, {
                                    className: "h-6 w-6"
                                })
                            })
                        })]
                    }), (0, s.jsx)(r.h_, {
                        children: (0, s.jsxs)(r.VY, {
                            className: "relative z-popover h-screen w-screen bg-graphite-100/40",
                            align: "center",
                            side: "top",
                            sideOffset: 10,
                            children: [(0, s.jsx)("div", {
                                className: (0, n.Z)("origin-top scale-100 brightness-100 transition-all", v && "scale-95 brightness-75"),
                                children: (0, s.jsx)(eM, {
                                    onClose: () => m(!1),
                                    onPublishClick: () => {
                                        (0, z.w)({
                                            event: "clickedPublishSite",
                                            lockVisible: !1
                                        }), x() && b(!0)
                                    }
                                })
                            }), (0, s.jsx)("div", {
                                className: (0, n.Z)("pointer-events-none absolute inset-x-0 top-8 z-popover p-4 opacity-0 transition-all", v && "pointer-events-auto top-4 opacity-100"),
                                children: (0, s.jsx)("div", {
                                    className: "space-y-6 rounded bg-graphite-0 p-6",
                                    children: (0, s.jsx)(S.O, {
                                        onClose: () => b(!1)
                                    })
                                })
                            })]
                        })
                    })]
                })
            }
            eA.Button = P.$
        },
        55630: function(e, t, i) {
            i.d(t, {
                X: function() {
                    return o
                },
                e: function() {
                    return d
                }
            });
            var s = i(52322),
                r = i(23681),
                n = i(61463),
                a = i(40489),
                l = i(27403),
                c = i(31260);
            let o = e => {
                let {
                    label: t,
                    onChange: i,
                    value: n,
                    disabled: o,
                    size: d = "md",
                    error: h
                } = e;
                return (0, s.jsxs)("label", {
                    className: (0, a.Z)("group/checkbox flex items-center", o ? "" : "cursor-pointer", {
                        "h-12 space-x-3": "md" === d,
                        "h-6": "sm" === d
                    }),
                    children: [(0, s.jsx)(r.fC, {
                        "aria-invalid": h,
                        className: (0, a.Z)("flex h-6 w-6 items-center justify-center rounded-sm border bg-graphite-0", h && "border-crimson-40 group-hover/checkbox:border-2", {
                            "bg-graphite-100 group-hover/checkbox:bg-graphite-60 border-graphite-100 group-hover/checkbox:border-graphite-60": n,
                            "group-hover/checkbox:border-2 border-graphite-10 group-hover/checkbox:border-graphite-40": !o && !h
                        }),
                        checked: n,
                        disabled: o,
                        onCheckedChange: o ? void 0 : i,
                        children: (0, s.jsxs)(r.z$, {
                            children: ["indeterminate" === n && (0, s.jsx)(c.IconRemove, {
                                className: "h-6 text-graphite-0"
                            }), !0 === n && (0, s.jsx)(l.Jr, {
                                className: "h-6 text-graphite-0"
                            })]
                        })
                    }), (0, s.jsx)("span", {
                        className: (0, a.Z)(o ? "text-graphite-10" : n ? "font-bold text-graphite-100 group-hover/checkbox:text-graphite-60" : "text-graphite-40"),
                        children: t
                    })]
                })
            };

            function d(e) {
                let {
                    value: t,
                    label: i,
                    description: a,
                    onChange: c,
                    disabled: o
                } = e;
                return (0, s.jsx)(r.fC, {
                    checked: t,
                    onCheckedChange: o ? void 0 : c,
                    className: (0, n.Z)("group/checkbox-card w-full", o && "cursor-not-allowed"),
                    children: (0, s.jsxs)("div", {
                        className: (0, n.Z)("flex w-full items-center justify-start gap-4 rounded bg-graphite-0 p-4 ring-1 ring-graphite-10", !o && "group-hover/checkbox-card:ring-2 group-hover/checkbox-card:ring-graphite-40", "group-data-[state=checked]/checkbox-card:ring-2 group-data-[state=checked]/checkbox-card:ring-graphite-100"),
                        children: [(0, s.jsx)("div", {
                            className: (0, n.Z)("h-6 w-6 shrink-0 rounded-sm ring-1 ring-inset ring-graphite-10 group-data-[state=checked]/checkbox-card:bg-graphite-100 group-data-[state=checked]/checkbox-card:ring-2 group-data-[state=checked]/checkbox-card:ring-graphite-100", !o && "group-hover/checkbox-card:ring-2 group-hover/checkbox-card:ring-graphite-40"),
                            children: (0, s.jsx)(r.z$, {
                                children: !0 === t && (0, s.jsx)(l.Jr, {
                                    className: "h-6 text-graphite-0"
                                })
                            })
                        }), (0, s.jsxs)("div", {
                            className: "space-y-1 text-left",
                            children: [(0, s.jsx)("h5", {
                                className: (0, n.Z)("text-graphite-100 group-data-[state=checked]/checkbox-card:font-bold  tracking-[0.01em]", !a && "text-sm", o && "text-graphite-20"),
                                children: i
                            }), a && (0, s.jsx)("p", {
                                className: "text-xs text-graphite-40",
                                children: a
                            })]
                        })]
                    })
                })
            }
        },
        47128: function(e, t, i) {
            i.d(t, {
                Lt: function() {
                    return c
                },
                Nv: function() {
                    return d
                },
                WA: function() {
                    return o
                },
                hP: function() {
                    return h
                },
                u2: function() {
                    return u
                }
            });
            var s = i(52322),
                r = i(47905),
                n = i(61463),
                a = i(40489),
                l = i(93556);
            i(2784);
            let c = r.fC,
                o = r.xz;

            function d(e) {
                let {
                    children: t,
                    align: i = "start",
                    variant: a
                } = e;
                return (0, s.jsx)(r.Uv, {
                    children: (0, s.jsx)(r.VY, {
                        align: i,
                        sideOffset: 12,
                        onCloseAutoFocus: e => e.preventDefault(),
                        className: (0, n.Z)("z-30 rounded-lg", {
                            "-ml-5 hidden laptop:block": "header" === a,
                            "-ml-5 -mt--3": "exportPreset" === a
                        }),
                        children: (0, s.jsx)(l.m.div, {
                            initial: "header" === a ? void 0 : {
                                y: "-10%",
                                opacity: 0,
                                pointerEvents: "none"
                            },
                            animate: "header" === a ? void 0 : {
                                y: 0,
                                opacity: 1,
                                pointerEvents: "unset"
                            },
                            transition: {
                                pointerEvents: {
                                    type: "false",
                                    delay: .15
                                }
                            },
                            children: (0, s.jsx)("div", {
                                className: (0, n.Z)("min-w-[220px] bg-graphite-0 ring-1 ring-graphite-5", "header" === a ? "rounded-xl p-2 shadow-soft-md" : "rounded p-1 shadow-soft-2xl"),
                                children: t
                            })
                        })
                    })
                })
            }

            function h(e) {
                let {
                    onClick: t,
                    icon: i,
                    children: n,
                    intent: l = "neutral",
                    status: c,
                    variant: o
                } = e;
                return (0, s.jsxs)(r.ck, {
                    className: (0, a.Z)("flex cursor-pointer items-center space-x-3 bg-graphite-0 text-base font-normal outline-none", "danger" === l ? "text-crimson-40 hover:bg-crimson-0" : "text-graphite-60 hover:bg-graphite-5", "header" === o ? "rounded p-3" : "min-h-[44px] rounded-sm px-4"),
                    onClick: t,
                    children: [i && (0, s.jsx)("span", {
                        className: (0, a.Z)("danger" === l ? "text-crimson-40" : "text-graphite-20"),
                        children: i
                    }), (0, s.jsx)("span", {
                        className: "flex-1",
                        children: n
                    }), "warning" === c && (0, s.jsx)("div", {
                        className: (0, a.Z)("h-2 w-2 rounded-full bg-amber-40 outline outline-4 outline-offset-0 outline-amber-5")
                    })]
                })
            }

            function u() {
                return (0, s.jsx)(r.Z0, {
                    children: (0, s.jsx)("div", {
                        className: "-mx-1 flex h-[9px] items-center justify-center py-1",
                        children: (0, s.jsx)("span", {
                            className: "h-px w-full bg-graphite-10"
                        })
                    })
                })
            }
        },
        28104: function(e, t, i) {
            i.d(t, {
                X: function() {
                    return n
                }
            });
            var s = i(2784),
                r = i(54962);

            function n() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "all",
                    {
                        data: t,
                        isLoading: i
                    } = r.SX.useQuery([{
                        editor: "Emergency.editorEmergency",
                        userSite: "Emergency.userSiteEmergency",
                        all: "Emergency.emergency"
                    }[e]]),
                    [n, a] = (0, s.useMemo)(() => {
                        var e, i;
                        return t ? [
                            ["VISIBLE_ON_EDITORS", "VISIBLE_ON_ALL"].includes(null !== (e = t.visibility) && void 0 !== e ? e : "HIDDEN"), ["VISIBLE_ON_USER_SITE", "VISIBLE_ON_ALL"].includes(null !== (i = t.visibility) && void 0 !== i ? i : "HIDDEN")
                        ] : [!1, !1]
                    }, [t]);
                return {
                    isVisibleOnEditor: n,
                    isVisibleOnUserSite: a,
                    emergency: t,
                    isEmergencyLoading: i
                }
            }
        },
        16730: function(e, t, i) {
            i.d(t, {
                J: function() {
                    return o
                }
            });
            var s = i(52322),
                r = i(61463),
                n = i(88241),
                a = i(93556),
                l = i(2784),
                c = i(99872);

            function o(e) {
                return (0, s.jsx)(o.Root, { ...e
                })
            }
            o.Root = function(e) {
                let {
                    children: t,
                    position: i
                } = e, a = l.Children.toArray(t).filter(e => l.isValidElement(e)), {
                    bottom: o,
                    left: d,
                    right: h
                } = (0, c.vM)(a, e => e.props.position);
                return (0, s.jsxs)("div", {
                    className: (0, r.Z)("pointer-events-none fixed inset-x-0 bottom-0", {
                        "bottom-0": "bottom" === i
                    }),
                    children: [(0, s.jsxs)("div", {
                        className: (0, r.Z)("flex justify-between p-6", {
                            "items-end": "bottom" === i
                        }),
                        children: [(0, s.jsx)("div", {
                            className: "space-y-6",
                            children: (0, s.jsx)(n.M, {
                                mode: "popLayout",
                                children: d
                            })
                        }), (0, s.jsx)("div", {
                            className: "flex flex-col items-end space-y-6 text-right",
                            children: (0, s.jsx)(n.M, {
                                mode: "popLayout",
                                children: h
                            })
                        })]
                    }), (0, s.jsx)("div", {
                        children: null == o ? void 0 : o[0]
                    })]
                })
            }, o.Item = function(e) {
                let {
                    children: t,
                    position: i
                } = e;
                return t ? (0, s.jsx)(a.m.div, {
                    layout: !0,
                    initial: "bottom" === i ? {
                        y: 20,
                        opacity: 0
                    } : {
                        scale: .9,
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        scale: 1,
                        opacity: 1
                    },
                    exit: "bottom" === i ? {
                        y: 20,
                        opacity: 0
                    } : {
                        scale: .9,
                        opacity: 0
                    },
                    className: (0, r.Z)("pointer-events-auto", {
                        "w-max": "bottom" !== i
                    }),
                    children: t
                }) : null
            }
        }
    }
]);