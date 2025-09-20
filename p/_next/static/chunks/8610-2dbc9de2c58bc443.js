try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b3beb974-735d-4e1d-9afc-6544a63a7a47", e._sentryDebugIdIdentifier = "sentry-dbid-b3beb974-735d-4e1d-9afc-6544a63a7a47")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8610], {
        38610: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return eh
                }
            });
            var l = n(52322),
                s = n(40489),
                a = n(2784),
                i = n(34911),
                o = n(86239),
                r = n(95089);
            class d extends a.Component {
                static getDerivedStateFromError(e) {
                    return {
                        error: e
                    }
                }
                componentDidCatch(e, t) {
                    r.Ts || o.Tb(e, {
                        extra: {
                            "react-info": t
                        }
                    })
                }
                render() {
                    if (this.state.error) {
                        var e;
                        return null === this.props.fallback ? null : null !== (e = this.props.fallback) && void 0 !== e ? e : (0, l.jsx)("h1", {
                            className: "w-full py-18 text-center font-display tracking-[2%] text-2xl dark:text-graphite-0",
                            children: "Something went wrong."
                        })
                    }
                    return this.props.children
                }
                constructor(e) {
                    super(e), this.state = {
                        error: null
                    }
                }
            }
            var c = n(2355),
                u = n(27403);

            function h() {
                return (0, l.jsx)(c.J, {
                    newGrid: !0,
                    className: "py-6",
                    children: (0, l.jsx)("div", {
                        className: "col-span-full col-start-1 rounded-lg border border-dashed border-graphite-0/[.16] bg-graphite-95/5 px-6 py-18 text-center text-graphite-0 @tablet:col-span-6 @tablet:col-start-2 @laptop:col-span-12 @laptop:col-start-2 dark:bg-graphite-0/5",
                        children: (0, l.jsxs)("div", {
                            className: "flex flex-col items-center space-y-4 ",
                            children: [(0, l.jsx)(u.rB.DuotoneWarning, {
                                className: "h-12 fill-graphite-100 dark:fill-graphite-0"
                            }), (0, l.jsxs)("div", {
                                className: "space-y-2 text-graphite-100 dark:text-graphite-0",
                                children: [(0, l.jsx)("h4", {
                                    className: "text-2xl font-bold",
                                    children: "Oops, this section’s broken."
                                }), (0, l.jsx)("p", {
                                    children: "There’s an issue under the hood, so we’ve hidden this section from your live site until we fix it."
                                })]
                            })]
                        })
                    })
                })
            }
            var p = n(62202),
                x = n(31260),
                g = n(1675);

            function m(e) {
                let {
                    buttonText: t,
                    loading: n,
                    onAdd: s
                } = e;
                return (0, l.jsx)("div", {
                    className: "flex items-center justify-center bg-custom-footer p-18",
                    children: (0, l.jsx)(g.T, {
                        shape: "pill",
                        size: "xs",
                        onClick: s,
                        loading: n,
                        children: (0, l.jsxs)("span", {
                            className: "inline-flex items-center space-x-1",
                            children: [(0, l.jsx)(x.IconPlus, {
                                "aria-hidden": !0,
                                className: "h-4"
                            }), (0, l.jsx)("span", {
                                children: t
                            })]
                        })
                    })
                })
            }
            var v = n(39097),
                f = n.n(v),
                j = n(46769),
                b = n(43336),
                N = n(24457),
                w = n(13254),
                y = n(97847),
                T = n(395),
                E = n(17531),
                S = n(78669),
                I = n(46774),
                A = n(81380);

            function C(e) {
                var t, n, a, i, o;
                let {
                    blogPostPage: {
                        description: r,
                        blogPostPublishUnixTimestamp: d,
                        title: c,
                        categories: h,
                        slug: p
                    },
                    parentSection: x,
                    currentSite: g,
                    alignment: m,
                    editor: v
                } = e, w = (0, T.f)();
                if (!x) return null;
                let y = null !== (o = null === (t = x.categories) || void 0 === t ? void 0 : t.filter(e => {
                        let {
                            slug: t
                        } = e;
                        return h.includes(t)
                    })) && void 0 !== o ? o : [],
                    E = null === (n = x.stepper) || void 0 === n ? void 0 : n.showDates,
                    S = null === (a = x.stepper) || void 0 === a ? void 0 : a.showCategories,
                    I = null === (i = x.stepper) || void 0 === i ? void 0 : i.showLeads;
                return (0, l.jsxs)("div", {
                    className: (0, s.Z)("flex flex-col", v && "-m-6 rounded p-6 hover:ring-1 hover:ring-custom-bg-24"),
                    children: [(0, l.jsx)(f(), {
                        href: !v && w ? "/".concat(p) : {
                            query: {
                                slugs: [g.slug, p]
                            }
                        },
                        children: (0, l.jsxs)("div", {
                            className: (0, s.Z)("space-y-4 @tablet:space-y-6", "flex flex-col", "left" === m ? "items-start text-left" : "items-end text-right"),
                            children: [(0, l.jsx)("div", {
                                className: "text-custom-h1",
                                children: "left" === m ? (0, l.jsx)(u.BF, {
                                    className: "h-6 w-6"
                                }) : (0, l.jsx)(u.Ay, {
                                    className: "h-6 w-6"
                                })
                            }), (0, l.jsxs)("div", {
                                className: "flex flex-col space-y-2",
                                children: [(0, l.jsxs)("div", {
                                    className: "flex flex-col space-y-2 @tablet:space-y-4 @laptop:space-y-4",
                                    children: [E && (0, l.jsx)("span", {
                                        className: "custom-p text-sm @tablet:text-base",
                                        children: (0, j.X)(d, null == x ? void 0 : x.dateFormat)
                                    }), S && y.length > 0 && (0, l.jsx)("div", {
                                        className: (0, s.Z)("hidden flex-wrap gap-1.5 @laptop:inline-flex", "right" === m && "justify-end"),
                                        children: y.map(e => (0, l.jsx)(N.U, {
                                            children: e.name
                                        }, e.slug))
                                    }), (0, l.jsx)("h3", {
                                        className: "custom-h3 text-base @tablet:text-[22.5px] @laptop:text-[25px]",
                                        children: c
                                    })]
                                }), I && r && (0, l.jsx)("div", {
                                    className: "custom-p hidden @laptop:block",
                                    children: r.length > 120 ? "".concat(r.slice(0, 120), "...") : r
                                })]
                            })]
                        })
                    }), v && (0, l.jsx)(b.o, {
                        label: "left" === m ? "Next blog post" : "Previous blog post",
                        className: (0, s.Z)("-m-6 w-[calc(100%+3rem)] group-module-hover:visible", "left" === m ? "justify-between" : "justify-end")
                    })]
                })
            }

            function O() {
                return (0, l.jsx)(c.J, {
                    newGrid: !0,
                    className: "py-6",
                    children: (0, l.jsx)("div", {
                        className: "col-span-full rounded-lg border border-dashed border-graphite-0/[.16] bg-graphite-100/5 py-20 @tablet:col-span-6 @tablet:col-start-2 @laptop:col-span-12 @laptop:col-start-2 dark:bg-graphite-0/5",
                        children: (0, l.jsxs)("div", {
                            className: "flex flex-col items-center space-y-4",
                            children: [(0, l.jsx)("div", {
                                className: "rounded-full bg-graphite-100/[.12] p-4 dark:bg-graphite-0/[.12]",
                                children: (0, l.jsx)(u._j, {
                                    className: "h-6 w-6 text-graphite-100 dark:text-graphite-0"
                                })
                            }), (0, l.jsxs)("div", {
                                className: "space-y-2 text-center",
                                children: [(0, l.jsx)("h3", {
                                    className: "text-2xl font-bold leading-none text-custom-h1",
                                    children: "The blog post navigation is hidden for now."
                                }), (0, l.jsxs)("p", {
                                    className: "text-custom-h1",
                                    children: ["It’ll show up on your blog once you’ve published", (0, l.jsx)("br", {}), " more than one blog post."]
                                })]
                            })]
                        })
                    })
                })
            }

            function _(e) {
                var t;
                let {
                    editor: n
                } = e, s = (0, w.I)(), a = (0, E.q)(s).data, i = (0, y.$)(), o = (0, A.W)(i).data, r = (0, S.z)(a.parentSectionId).filter(e => e.published).sort((e, t) => e.blogPostPublishUnixTimestamp - t.blogPostPublishUnixTimestamp), d = (0, I.f)(a.parentSectionId).data, u = r.findLast(e => e.published && e.blogPostPublishUnixTimestamp < a.blogPostPublishUnixTimestamp), h = r.find(e => e.published && e.blogPostPublishUnixTimestamp > a.blogPostPublishUnixTimestamp);
                return "BLOG_POST" === a.type && (null == d ? void 0 : null === (t = d.stepper) || void 0 === t ? void 0 : t.showBlogpostStepper) ? u || h ? (0, l.jsxs)(c.J, {
                    newGrid: !0,
                    className: "py-18",
                    children: [h && (0, l.jsx)("div", {
                        className: "group-module relative col-span-2 col-start-1 @tablet:col-span-3 @tablet:col-start-2 @laptop:col-span-4 @laptop:col-start-2",
                        children: (0, l.jsx)(C, {
                            alignment: "left",
                            blogPostPage: h,
                            parentSection: d,
                            editor: n,
                            currentSite: o
                        })
                    }), u && (0, l.jsx)("div", {
                        className: "group-module relative col-span-2 col-start-3 @tablet:col-span-3 @tablet:col-start-5 @laptop:col-span-4 @laptop:col-start-10",
                        children: (0, l.jsx)(C, {
                            alignment: "right",
                            blogPostPage: u,
                            parentSection: d,
                            editor: n,
                            currentSite: o
                        })
                    })]
                }) : n ? (0, l.jsx)(O, {}) : null : null
            }
            var k = n(96076),
                L = n(68486);

            function D(e) {
                let {
                    section: t,
                    onChange: n
                } = e, {
                    showCategories: s,
                    showDates: a,
                    showLeads: i
                } = t;
                return (0, l.jsx)(L.Zr.Root, {
                    title: null,
                    children: (0, l.jsxs)(L.Zr.Group, {
                        label: "Content",
                        description: (0, l.jsxs)("span", {
                            className: "pt-3",
                            children: ["These settings apply to all of your blog", (0, l.jsx)("br", {}), " post navigation sections."]
                        }),
                        children: [(0, l.jsx)(L.Zr.Toggle, {
                            id: "blogpost-stepper-show-dates",
                            text: "Show blog post dates",
                            checked: null == a || a,
                            onCheckedChange: e => n({
                                showDates: e
                            })
                        }), (0, l.jsx)(L.Zr.Toggle, {
                            id: "blogpost-stepper-show-categories",
                            text: "Show category labels",
                            checked: null == s || s,
                            onCheckedChange: e => n({
                                showCategories: e
                            })
                        }), (0, l.jsx)(L.Zr.Toggle, {
                            id: "blogpost-stepper-show-leads",
                            text: "Show blog post leads",
                            checked: null == i || i,
                            onCheckedChange: e => n({
                                showLeads: e
                            })
                        })]
                    })
                })
            }
            var R = n(11223),
                P = n(28674),
                Z = n(54962),
                V = n(78253);

            function B() {
                var e;
                let t = (0, y.$)(),
                    n = (0, A.W)(t).data,
                    s = (0, w.I)(),
                    i = (0, E.q)(s).data,
                    o = (0, V.b)(s).data,
                    r = (0, I.f)(i.parentSectionId).data,
                    [d, c] = (0, a.useState)(!1),
                    {
                        mutate: u,
                        isLoading: h
                    } = function() {
                        let {
                            delayMs: e = 500
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                            invalidateQueries: t
                        } = Z.SX.useContext();
                        return (0, Z.Qg)("Section.update", {
                            delayMs: e,
                            retry: !0,
                            onSettled: (e, n, l) => t(["Section.find", l.id])
                        })
                    }();
                if (!(null == r ? void 0 : null === (e = r.stepper) || void 0 === e ? void 0 : e.showBlogpostStepper)) return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(m, {
                        buttonText: "Add blog post navigation",
                        loading: h,
                        onAdd: () => {
                            u({ ...r,
                                stepper: {
                                    type: "BLOGPOST_STEPPER",
                                    showCategories: !0,
                                    showDates: !0,
                                    showLeads: !0,
                                    showBlogpostStepper: !0
                                }
                            }), (0, p.ZP)((0, l.jsx)(P.FN, {
                                icon: (0, l.jsx)(x.IconCheckCircle, {}),
                                children: "Navigation added to all blog posts in this blog section."
                            }))
                        }
                    }), !n.footer && (0, l.jsx)("div", {
                        className: "h-6"
                    })]
                });
                let g = null == o ? void 0 : o.some(e => "BLOGPOST_CONTENT" === e.type);
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(R.V, {
                        section: { ...r.stepper,
                            id: "",
                            version: 1,
                            pageId: ""
                        },
                        unmovable: !0,
                        noInsertAfter: !0,
                        noInsertBefore: g,
                        onDelete: () => {
                            c(!0)
                        },
                        settings: (0, l.jsx)(D, {
                            section: { ...r.stepper,
                                id: "",
                                version: 1,
                                pageId: ""
                            },
                            onChange: e => {
                                u({ ...r,
                                    stepper: {
                                        type: "BLOGPOST_STEPPER",
                                        ...r.stepper,
                                        ...e
                                    }
                                })
                            }
                        }),
                        children: (0, l.jsx)(_, {
                            editor: !0
                        })
                    }), d && (0, l.jsx)(k.f, {
                        title: "Remove blog post navigation?",
                        content: "We’ll remove it from everywhere in this blog section. Don’t worry, you can add it again anytime.",
                        yesText: "Remove",
                        yesIntent: "danger",
                        noText: "Keep navigation",
                        onNo: () => c(!1),
                        onDismiss: () => c(!1),
                        onYes: () => {
                            u({ ...r,
                                stepper: null
                            }), c(!1)
                        }
                    })]
                })
            }
            var G = n(17514),
                M = n(16106),
                z = n(57171),
                U = n(60644),
                F = n(20967),
                q = n(44585),
                W = n(8630),
                H = n(19174),
                J = n(78051),
                K = n(23916),
                Y = n(24760),
                X = n(46931),
                $ = n(10963),
                Q = n(60185),
                ee = n(72515),
                et = n(55530);

            function en(e) {
                let {
                    section: {
                        showNavigation: t = !0,
                        variant: n,
                        background: s
                    },
                    onChange: a,
                    disabled: i
                } = e, {
                    preview: {
                        template: o
                    }
                } = (0, et.m)();
                return (0, l.jsxs)(L.Zr.Root, {
                    title: null,
                    children: [Q.Ab && (0, l.jsxs)(L.Zr.Dropdown, {
                        label: "Type",
                        value: null != n ? n : ee.D3[o].footer.variant,
                        onChange: e => {
                            a({
                                variant: e
                            })
                        },
                        children: [(0, l.jsx)(L.Zr.Dropdown.Item, {
                            image: (0, l.jsx)($.N, {
                                src: X.Z,
                                className: "h-16",
                                height: 64,
                                width: 96
                            }),
                            value: "SIMPLE",
                            children: "Simple"
                        }), (0, l.jsx)(L.Zr.Dropdown.Item, {
                            image: (0, l.jsx)($.N, {
                                src: K.Z,
                                className: "h-16",
                                height: 64,
                                width: 96
                            }),
                            value: "CENTER",
                            children: "Center"
                        }), (0, l.jsx)(L.Zr.Dropdown.Item, {
                            image: (0, l.jsx)($.N, {
                                src: Y.Z,
                                className: "h-16",
                                height: 64,
                                width: 96
                            }),
                            value: "SIDE",
                            children: "Sides"
                        })]
                    }), Q.Ab && (0, l.jsxs)(L.Zr.Dropdown, {
                        label: "Background style",
                        value: null != s ? s : ee.D3[o].footer.background,
                        size: "md",
                        onChange: e => {
                            a({
                                background: e
                            })
                        },
                        children: [(0, l.jsx)(L.Zr.Dropdown.Item, {
                            image: (0, l.jsx)($.N, {
                                src: J.Z,
                                className: "h-10",
                                height: 40,
                                width: 40
                            }),
                            value: "simple",
                            children: "Simple"
                        }), (0, l.jsx)(L.Zr.Dropdown.Item, {
                            image: (0, l.jsx)($.N, {
                                src: H.Z,
                                className: "h-10",
                                height: 40,
                                width: 40
                            }),
                            value: "line",
                            children: "Line"
                        }), (0, l.jsx)(L.Zr.Dropdown.Item, {
                            image: (0, l.jsx)($.N, {
                                src: q.Z,
                                className: "h-10",
                                height: 40,
                                width: 40
                            }),
                            value: "fill",
                            children: "Fill"
                        }), (0, l.jsx)(L.Zr.Dropdown.Item, {
                            image: (0, l.jsx)($.N, {
                                src: W.Z,
                                className: "h-10",
                                height: 40,
                                width: 40
                            }),
                            value: "gradient",
                            children: "Gradient"
                        })]
                    }), (0, l.jsx)(L.Zr.Toggle, {
                        label: "Content",
                        id: "footer-show-navigation",
                        text: "Show website pages",
                        checked: null == t || t,
                        onCheckedChange: e => a({
                            showNavigation: e
                        }),
                        disabled: i
                    })]
                })
            }
            var el = n(37697),
                es = n(60460),
                ea = n(80843),
                ei = n(64617);

            function eo(e) {
                var t, n, s;
                let {
                    footer: i,
                    template: o,
                    menuBrand: r,
                    authorId: d,
                    id: c
                } = e, u = (0, ea.a)(d).data, h = (0, es.B)(c).data.filter(e => (0, z.Y)(e)), [p, x] = (0, a.useState)(!1), g = (0, w.I)(), v = (0, E.q)(g).data, {
                    mutate: f
                } = (0, el.g)(), {
                    mutate: j
                } = (0, el.g)({
                    delayMs: 500
                }), b = (null !== (n = null === (t = ee.D3[o].alignmentLock) || void 0 === t ? void 0 : t.footer) && void 0 !== n ? n : (null == i ? void 0 : i.variant) === "CENTER") ? "center" : "left";
                return u ? i ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(R.V, {
                        section: i,
                        unmovable: !0,
                        noInsertAfter: !0,
                        noInsertBefore: "BLOG_POST" === v.type,
                        settings: (0, l.jsx)(en, {
                            section: i,
                            disabled: h.length < 2,
                            onChange: e => {
                                var t, n, l;
                                f({
                                    id: c,
                                    footer: { ...i,
                                        showNavigation: null !== (t = e.showNavigation) && void 0 !== t ? t : i.showNavigation,
                                        variant: null !== (n = e.variant) && void 0 !== n ? n : i.variant,
                                        background: null !== (l = e.background) && void 0 !== l ? l : i.background
                                    }
                                })
                            }
                        }),
                        onDelete: () => {
                            x(!0)
                        },
                        children: (0, l.jsx)("div", {
                            className: "bg-custom-bg pb-8",
                            children: (0, l.jsx)(F.L, {
                                pages: h,
                                showNavigation: null === (s = i.showNavigation) || void 0 === s || s,
                                section: i,
                                Content: (0, l.jsx)(U.S, {
                                    section: i,
                                    forceAlignment: b,
                                    writingAssistantPosition: "top",
                                    textEditorProps: {
                                        noAlign: !0,
                                        placeholder: "\xa9 ".concat(u.givenName, " ").concat(u.familyName),
                                        defaultAlignment: b,
                                        noLists: !0,
                                        noTable: !0,
                                        noBlockquoteAndDivider: !0
                                    },
                                    onChange: e => {
                                        j({
                                            id: c,
                                            footer: { ...i,
                                                type: "FOOTER",
                                                textNodes: null,
                                                textModule: { ...i.textModule,
                                                    ...e
                                                }
                                            }
                                        })
                                    },
                                    module: i.textModule
                                })
                            })
                        })
                    }), p && (0, l.jsx)(k.f, {
                        title: "Remove footer?",
                        content: "We’ll remove the footer from all pages on your site. Don’t worry, you can add it again any time.",
                        yesText: "Remove",
                        yesIntent: "danger",
                        noText: "Keep footer",
                        onNo: () => x(!1),
                        onDismiss: () => x(!1),
                        onYes: () => {
                            f({
                                id: v.siteId,
                                footer: null
                            }), x(!1)
                        }
                    })]
                }) : (0, l.jsx)(m, {
                    buttonText: "Add footer",
                    onAdd: () => {
                        u && f({
                            id: c,
                            footer: (0, G.l)(u, b, r)
                        }, {
                            onSuccess() {
                                let e = document.querySelector("footer#footer");
                                e && (0, M.Z)(e, {
                                    behavior: "smooth",
                                    scrollMode: "if-needed"
                                }), (0, ei.w)({
                                    event: "addFooter"
                                })
                            }
                        })
                    }
                }) : null
            }
            var er = n(66818),
                ed = n(3043),
                ec = n(26163),
                eu = n(14309);

            function eh(e) {
                let {
                    editable: t,
                    size: n = "viewport",
                    scale: a = 1,
                    announcement: o,
                    Navigation: r,
                    Collage: c,
                    LegacyCover: u,
                    Cover: p,
                    CV: x,
                    InstagramFeed: g,
                    Hero: m,
                    LogoWall: v,
                    ProjectGrid: f,
                    ProjectHero: j,
                    Services: b,
                    Subheading: N,
                    TextAroundMedia: T,
                    Blog: S,
                    BlogPostHero: I,
                    Divider: C,
                    SmartSection: O,
                    BlogPostContent: k,
                    VideoGallery: L
                } = e, D = (0, w.I)(), P = (0, y.$)(), Z = (0, V.b)(D).data, G = (0, A.W)(P).data, M = (0, E.q)(D).data, z = 1 === Z.length;
                return (0, l.jsxs)(eu.Y.Provider, {
                    value: {
                        size: n,
                        scale: a
                    },
                    children: [o, (0, l.jsx)("div", {
                        className: "flex min-h-screen flex-col flex-nowrap items-stretch contain-layout @container",
                        children: (0, l.jsxs)(ec.nb, {
                            children: [(0, l.jsxs)("div", {
                                className: (0, s.Z)("section-wrapper group/section-container flex-1", z && "flex flex-col bg-custom-footer"),
                                children: [Z.map(e => (0, l.jsx)(ed.m, {
                                    value: e.id,
                                    children: (0, l.jsx)("div", {
                                        className: (0, s.Z)("relative", "viewport" !== n && "bg-custom-bg"),
                                        children: (0, l.jsx)(d, {
                                            fallback: t ? (0, l.jsx)(h, {}) : null,
                                            children: function(e) {
                                                switch (e.type) {
                                                    case "TEXT_AROUND_MEDIA":
                                                        return (0, l.jsx)(T, { ...e
                                                        });
                                                    case "SUBHEADING":
                                                        return (0, l.jsx)(N, { ...e
                                                        });
                                                    case "COVER_LEGACY":
                                                        return (0, l.jsx)(u, { ...e
                                                        });
                                                    case "COVER":
                                                        return (0, l.jsx)(p, { ...e
                                                        });
                                                    case "HERO":
                                                        return (0, l.jsx)(m, { ...e
                                                        });
                                                    case "PROJECT_GRID":
                                                        return (0, l.jsx)(f, { ...e
                                                        });
                                                    case "PROJECT_HERO":
                                                        return (0, l.jsx)(j, { ...e
                                                        });
                                                    case "NAVIGATION":
                                                        return (0, l.jsx)(r, { ...e
                                                        });
                                                    case "SERVICES":
                                                        return (0, l.jsx)(b, { ...e
                                                        });
                                                    case "LOGO_WALL":
                                                        return (0, l.jsx)(v, { ...e
                                                        });
                                                    case "COLLAGE":
                                                        return (0, l.jsx)(c, { ...e
                                                        });
                                                    case "CV":
                                                        return (0, l.jsx)(x, { ...e
                                                        });
                                                    case "BLOG":
                                                        return (0, l.jsx)(S, { ...e
                                                        });
                                                    case "BLOGPOST_HERO":
                                                        return (0, l.jsx)(I, { ...e
                                                        });
                                                    case "DIVIDER":
                                                        return (0, l.jsx)(C, { ...e
                                                        });
                                                    case "SMART":
                                                        return (0, l.jsx)(O, { ...e
                                                        });
                                                    case "INSTAGRAM_FEED":
                                                        return (0, l.jsx)(g, { ...e
                                                        });
                                                    case "VIDEO_GALLERY":
                                                        return (0, l.jsx)(L, { ...e
                                                        });
                                                    case "FOOTER":
                                                    case "BLOGPOST_STEPPER":
                                                        return null;
                                                    case "BLOGPOST_CONTENT":
                                                        return (0, l.jsx)(k, { ...e
                                                        });
                                                    default:
                                                        return (0, i.pv)(e)
                                                }
                                            }(e)
                                        })
                                    })
                                }, e.id)), z && t && (0, l.jsx)("div", {
                                    className: "relative flex grow flex-col",
                                    children: (0, l.jsx)(R.V, {
                                        section: null,
                                        children: null
                                    })
                                })]
                            }), z && t && !G.footer && (0, l.jsx)("div", {
                                className: "h-6"
                            }), "BLOG_POST" === M.type && (t ? (0, l.jsx)(B, {}) : (0, l.jsx)(_, {})), t ? (0, l.jsx)(eo, { ...G
                            }) : (0, l.jsx)(er.w, { ...G
                            })]
                        })
                    })]
                })
            }
        },
        29953: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return f
                }
            });
            var l = n(52322),
                s = n(23094),
                a = n(88366),
                i = n(66548),
                o = n(82851),
                r = n(40489),
                d = n(2784),
                c = n(28316),
                u = n(68235),
                h = n(78637),
                p = n(75190),
                x = n(1675),
                g = n(94854);
            let m = d.forwardRef((e, t) => {
                let {
                    children: n,
                    isDragging: s,
                    isOverlay: a,
                    ...i
                } = e;
                return d.useEffect(() => s ? (document.body.style.cursor = "grabbing", () => {
                    document.body.style.cursor = ""
                }) : () => {}, [s]), (0, l.jsxs)("div", {
                    className: (0, r.Z)("group relative flex w-full items-center justify-between border border-transparent bg-graphite-0", s && !a && "opacity-0", a ? "cursor-grabbing shadow-soft-lg" : "cursor-grab"),
                    ...i,
                    ref: t,
                    children: [(0, l.jsx)(x.T, {
                        size: "xs",
                        className: (0, r.Z)("pointer-events-none absolute z-20 -ml-4 bg-graphite-20", !a && "hidden group-hover:block"),
                        children: (0, l.jsx)(h.Z, {
                            "aria-hidden": !0,
                            className: "h-8"
                        })
                    }), n]
                })
            });

            function v(e) {
                let {
                    item: t,
                    children: n
                } = e, {
                    attributes: s,
                    listeners: a,
                    setNodeRef: r,
                    transform: d,
                    transition: c,
                    isDragging: u
                } = (0, i.nB)({
                    id: t.id
                }), h = {
                    transform: o.ux.Transform.toString(d),
                    transition: c
                };
                return (0, l.jsx)(m, {
                    isDragging: u,
                    ref: r,
                    style: h,
                    ...s,
                    ...a,
                    children: n
                })
            }

            function f(e) {
                let {
                    items: t,
                    onChange: n,
                    onEdit: o,
                    children: h,
                    showDelete: f,
                    showEdit: j,
                    editHint: b,
                    deleteHint: N
                } = e, w = (0, s.Dy)((0, s.VT)(s.MA), (0, s.VT)(s.Lg, {
                    coordinateGetter: i.is
                })), [y, T] = (0, d.useState)(null), E = e => {
                    n({
                        newValue: t.filter(t => t.id !== e.id),
                        deleted: e
                    })
                };
                return (0, l.jsx)("div", {
                    className: "space-y-4",
                    children: (0, l.jsxs)(s.LB, {
                        sensors: w,
                        collisionDetection: s.pE,
                        onDragStart: e => {
                            let {
                                active: t
                            } = e;
                            t && T(t.id)
                        },
                        onDragEnd: e => {
                            let {
                                over: l
                            } = e;
                            if (l) {
                                let e = y ? t.findIndex(e => e.id === y) : -1,
                                    s = t.findIndex(e => e.id === l.id);
                                e !== s && n({
                                    newValue: (0, i.Rp)(t, e, s)
                                })
                            }
                            T(null)
                        },
                        onDragCancel: () => T(null),
                        modifiers: [a.lv, a.DL],
                        children: [(0, l.jsx)(i.Fo, {
                            items: t,
                            strategy: i.qw,
                            children: t.map(e => (0, l.jsxs)("div", {
                                className: "group relative hover:border-graphite-10 hover:shadow-soft-lg",
                                children: [(0, l.jsx)(v, {
                                    item: e,
                                    children: h(e)
                                }, e.id), (0, l.jsxs)("div", {
                                    className: (0, r.Z)("absolute right-5 top-[50%] z-20 hidden translate-y-[-50%] gap-2 group-hover:flex"),
                                    children: [j && (0, l.jsx)(g.u, {
                                        content: b,
                                        children: (0, l.jsx)(x.T, {
                                            shape: "rounded-square",
                                            onClick: () => null == o ? void 0 : o(e.id),
                                            size: "xs",
                                            children: (0, l.jsx)(p.Z, {
                                                "aria-hidden": !0,
                                                className: "h-6 text-graphite-0"
                                            })
                                        })
                                    }), f && (0, l.jsx)(g.u, {
                                        content: N,
                                        intent: "danger",
                                        children: (0, l.jsx)(x.T, {
                                            onClick: () => E(e),
                                            size: "xs",
                                            shape: "rounded-square",
                                            intent: "new-danger",
                                            children: (0, l.jsx)(u.Z, {
                                                "aria-hidden": !0,
                                                className: "h-6 text-graphite-0"
                                            })
                                        })
                                    })]
                                })]
                            }, e.id))
                        }), (0, c.createPortal)((0, l.jsx)(s.y9, {
                            children: null !== y ? (0, l.jsx)(m, {
                                isOverlay: !0,
                                children: h(t.find(e => e.id === y))
                            }) : null
                        }), document.body)]
                    })
                })
            }
        },
        56680: function(e, t, n) {
            n.d(t, {
                C: function() {
                    return T
                }
            });
            var l = n(52322),
                s = n(88883),
                a = n(40489),
                i = n(752),
                o = n(2784),
                r = n(63955),
                d = n(70021),
                c = n(7749),
                u = n(75190),
                h = n(2151),
                p = n(1675),
                x = n(98644),
                g = n(96479),
                m = n(84537),
                v = n(41009),
                f = n(16405),
                j = n(94854),
                b = n(97847),
                N = n(60460),
                w = n(93924),
                y = n(55530);

            function T(e) {
                var t, n, T, E;
                let {
                    value: S,
                    onRemove: I,
                    onEdit: A,
                    actions: C = "all"
                } = e, [O, _] = o.useState(!1), k = o.useRef(null), L = (0, b.$)(), [, D] = (0, i.KO)(c.RH), R = (0, N.B)(L).data, {
                    buttonStyle: {
                        rounded: P
                    }
                } = (0, y.m)(), [Z] = (0, w.k)({
                    required: !0
                }), V = (0, r.cI)({
                    resolver: (0, s.F)(d.B),
                    defaultValues: null != S ? S : void 0
                }), B = V.watch("action");
                return S ? (0, l.jsxs)("div", {
                    className: "flex items-center",
                    children: [(0, l.jsxs)("div", {
                        className: "group-buttonpopover relative w-full text-base tablet:w-auto",
                        children: [(0, l.jsx)("div", {
                            className: (0, a.Z)(!O && "group-buttonpopover-hover:opacity-[.24]"),
                            children: (0, l.jsx)(g.r, {
                                ref: k,
                                value: S
                            })
                        }), (0, l.jsxs)("div", {
                            className: (0, a.Z)("absolute inset-0 items-center justify-center space-x-2", {
                                "rounded-none": "none" === P,
                                "rounded-lg": "lg" === P,
                                "rounded-full": "full" === P
                            }, O ? "hidden" : "flex opacity-0 group-buttonpopover-hover:opacity-100"),
                            children: [(0, l.jsx)(j.u, {
                                adaptive: "high-contrast",
                                content: "Edit button",
                                children: (0, l.jsx)(p.T, {
                                    adaptive: "high-contrast",
                                    size: "xs",
                                    "data-editable-toolbar-edit": !0,
                                    shape: "rounded-square",
                                    onClick: () => {
                                        V.reset(S), _(!0), D(!1)
                                    },
                                    children: (0, l.jsx)(u.Z, {
                                        "aria-hidden": !0,
                                        className: "h-6"
                                    })
                                })
                            }), I && (0, l.jsx)(j.u, {
                                content: "Remove button",
                                intent: "danger",
                                children: (0, l.jsx)(p.T, {
                                    intent: "new-danger",
                                    size: "xs",
                                    shape: "rounded-square",
                                    onClick: I,
                                    children: (0, l.jsx)(h.Z, {
                                        "aria-hidden": !0,
                                        className: "h-8"
                                    })
                                })
                            })]
                        })]
                    }), (0, l.jsx)(f.EC, {
                        placement: "bottom",
                        arrow: !0,
                        arrowSize: "lg",
                        arrowBackground: "light",
                        offset: "none",
                        reference: k,
                        onClickOutside: () => {
                            _(!1), D(!0)
                        },
                        onHide: () => {
                            _(!1), D(!0)
                        },
                        visible: O,
                        content: (0, l.jsxs)("div", {
                            className: "w-[330px] space-y-6 rounded-lg bg-graphite-0 p-6 shadow-soft-xl ring-1 ring-graphite-5",
                            children: [(0, l.jsx)(f.J2.Header, {
                                primitive: !0,
                                onClose: () => _(!1),
                                title: "Edit button"
                            }), (0, l.jsxs)("form", {
                                className: "space-y-6",
                                onSubmit: V.handleSubmit(e => {
                                    null == A || A(e), _(!1)
                                }),
                                children: [(0, l.jsx)(m.L, { ...V.register("label"),
                                    error: null === (t = V.formState.errors.label) || void 0 === t ? void 0 : t.message,
                                    maxLength: 25,
                                    label: "Label",
                                    placeholder: "Contact me"
                                }), "all" === C && (0, l.jsx)(r.Qr, {
                                    control: V.control,
                                    name: "action",
                                    render: e => {
                                        let {
                                            field: {
                                                onChange: t,
                                                onBlur: n,
                                                value: s,
                                                ref: a
                                            },
                                            fieldState: {
                                                error: i
                                            }
                                        } = e;
                                        return (0, l.jsxs)(m.L, {
                                            ref: a,
                                            onBlur: n,
                                            value: s,
                                            onChange: e => {
                                                let n = e.target.value;
                                                if (t(n), V.clearErrors("actionValue"), "NAVIGATE_TO_INTERNAL_PAGE" === n) {
                                                    V.setValue("actionValue", R[0].id);
                                                    return
                                                }
                                                if ("SEND_EMAIL" === n) {
                                                    V.setValue("actionValue", Z.user.email);
                                                    return
                                                }
                                                "OPEN_LINK_IN_NEW_TAB" === n && V.setValue("actionValue", "")
                                            },
                                            error: null == i ? void 0 : i.message,
                                            inputAs: v.Zi,
                                            arrow: !0,
                                            label: "Behavior",
                                            children: [(0, l.jsx)("option", {
                                                value: "NAVIGATE_TO_INTERNAL_PAGE",
                                                children: "Navigate to page"
                                            }, "NAVIGATE_TO_INTERNAL_PAGE"), (0, l.jsx)("option", {
                                                value: "OPEN_LINK_IN_NEW_TAB",
                                                children: "Open link in new tab"
                                            }, "OPEN_LINK_IN_NEW_TAB"), (0, l.jsx)("option", {
                                                value: "SEND_EMAIL",
                                                children: "Send email"
                                            }, "SEND_EMAIL")]
                                        })
                                    }
                                }), "NAVIGATE_TO_INTERNAL_PAGE" === B ? (0, l.jsx)(m.L, { ...V.register("actionValue"),
                                    error: null === (n = V.formState.errors.actionValue) || void 0 === n ? void 0 : n.message,
                                    inputAs: v.Zi,
                                    arrow: !0,
                                    label: "Page",
                                    children: R.filter(e => !1 === ["PROJECT", "BLOG_POST"].includes(e.type)).map(e => (0, l.jsx)("option", {
                                        value: e.id,
                                        children: e.title
                                    }, e.id))
                                }) : "OPEN_LINK_IN_NEW_TAB" === B ? (0, l.jsx)(m.L, { ...V.register("actionValue"),
                                    error: null === (T = V.formState.errors.actionValue) || void 0 === T ? void 0 : T.message,
                                    placeholder: "https://www.example.com",
                                    label: "Link"
                                }) : (0, l.jsx)(m.L, { ...V.register("actionValue"),
                                    error: null === (E = V.formState.errors.actionValue) || void 0 === E ? void 0 : E.message,
                                    placeholder: "jamiewright@example.com",
                                    label: "Email"
                                }), (0, l.jsx)(x.K, {
                                    size: "lg",
                                    type: "submit",
                                    className: "w-full",
                                    children: "Save"
                                })]
                            })]
                        })
                    })]
                }) : null
            }
        },
        4060: function(e, t, n) {
            n.d(t, {
                U: function() {
                    return E
                }
            });
            var l = n(52322),
                s = n(40489),
                a = n(6676),
                i = n.n(a),
                o = n(2784),
                r = n(75190),
                d = n(40749),
                c = n(2151),
                u = n(1675),
                h = n(56646),
                p = n(16658),
                x = n(22622),
                g = n(98644),
                m = n(36489),
                v = n(84537),
                f = n(41009),
                j = n(8294),
                b = n(48115);

            function N(e) {
                let {
                    type: t,
                    value: n,
                    options: s,
                    onSave: a,
                    onDismiss: i
                } = e, [r, d] = (0, o.useState)(null != n ? n : {
                    name: s[0],
                    link: ""
                }), [c, u] = (0, o.useState)(""), p = () => {
                    if (!(null == r ? void 0 : r.link.trim()) || !(null == r ? void 0 : r.link.includes("."))) {
                        u("We'll need a valid URL here.");
                        return
                    }
                    r.link.startsWith("https://") || (r.link = "https://".concat(r.link)), "ADD" === t ? a(r) : a(r, null == n ? void 0 : n.id)
                }, x = j.JU[r.name].icon;
                return (0, l.jsxs)(b.Vq, {
                    onDismiss: i,
                    children: [(0, l.jsx)(b.fK, {
                        children: (0, l.jsxs)(b.$N, {
                            children: ["EDIT" === t ? "Edit" : "Add", " social icon"]
                        })
                    }), (0, l.jsx)(b.cZ, {
                        children: (0, l.jsxs)("form", {
                            className: "w-96 space-y-6",
                            onSubmit: e => {
                                e.preventDefault(), p()
                            },
                            children: [(0, l.jsxs)(v.L, {
                                value: r.name,
                                inputAs: f.Zi,
                                arrow: !0,
                                label: "Platform type",
                                prefix: (0, l.jsx)(x, {
                                    className: "-ml-1 h-6 w-8"
                                }),
                                onChange: e => {
                                    d({ ...r,
                                        name: e.target.value
                                    })
                                },
                                children: [(0, l.jsx)("option", {
                                    disabled: !0,
                                    value: "",
                                    children: "Pick a social platform"
                                }), s.map(e => {
                                    var t;
                                    return (0, l.jsx)("option", {
                                        value: e,
                                        children: null !== (t = j.JU[e].label) && void 0 !== t ? t : e
                                    }, e)
                                })]
                            }), (0, l.jsx)(v.L, {
                                value: r.link,
                                inputAs: m.I,
                                error: c,
                                label: "Link to profile",
                                placeholder: j.JU[r.name].hint,
                                onChange: e => {
                                    d({ ...r,
                                        link: e.target.value
                                    })
                                }
                            })]
                        })
                    }), (0, l.jsxs)(b.kX, {
                        children: [(0, l.jsx)(h.k, {
                            size: "lg",
                            onClick: i,
                            children: "Cancel"
                        }), (0, l.jsx)(g.K, {
                            size: "lg",
                            onClick: p,
                            children: "Save"
                        })]
                    })]
                })
            }
            var w = n(16405),
                y = n(94854),
                T = n(29953);

            function E(e) {
                var t;
                let {
                    socials: n,
                    onChange: a,
                    onRemove: g,
                    alignment: m
                } = e, [v, f] = (0, o.useState)(null !== (t = n.map(e => ({ ...e,
                    id: i()()
                }))) && void 0 !== t ? t : null), b = (0, o.useRef)(null), E = (0, o.useRef)(null), [S, I] = (0, o.useState)(!1), [A, C] = (0, o.useState)(null), O = null == v ? void 0 : v.find(e => e.id === A), [_, k] = (0, o.useState)(!1), L = (e, t) => {
                    if (!v) return;
                    C(null);
                    let n = v.map(n => n.id === e ? { ...t,
                        id: e
                    } : n);
                    f(n), a(n)
                }, D = e => {
                    I(!1);
                    let t = [...null != v ? v : [], { ...e,
                        id: i()()
                    }];
                    f(t), a(t), setTimeout(() => {
                        var e;
                        null === (e = E.current) || void 0 === e || e.scrollTo({
                            top: E.current.scrollHeight,
                            behavior: "smooth"
                        })
                    }, 100)
                };
                return v ? (0, l.jsxs)("div", {
                    className: "group-buttonpopover relative -m-4 w-max rounded p-4 focus-within:ring-1 focus-within:ring-custom-bg-24 hover:ring-1 hover:ring-custom-bg-24 dark:hover:ring-custom-bg-16",
                    children: [(0, l.jsxs)("div", {
                        className: (0, s.Z)("absolute left-0 top-0 h-full w-full items-center justify-center space-x-2 rounded", _ ? "hidden" : "flex opacity-0 group-buttonpopover-hover:opacity-100"),
                        children: [(0, l.jsx)(y.u, {
                            adaptive: "high-contrast",
                            content: "Edit social icons",
                            children: (0, l.jsx)(u.T, {
                                adaptive: "high-contrast",
                                shape: "rounded-square",
                                size: "xs",
                                onClick: () => {
                                    k(!0)
                                },
                                children: (0, l.jsx)(r.Z, {
                                    "aria-hidden": !0,
                                    className: "h-6"
                                })
                            })
                        }), g && (0, l.jsx)(y.u, {
                            content: "Remove social icons",
                            intent: "danger",
                            children: (0, l.jsx)(u.T, {
                                shape: "rounded-square",
                                intent: "new-danger",
                                size: "xs",
                                onClick: g,
                                children: (0, l.jsx)(c.Z, {
                                    "aria-hidden": !0,
                                    className: "h-8"
                                })
                            })
                        })]
                    }), (0, l.jsx)("div", {
                        className: (0, s.Z)("relative", !_ && "group-buttonpopover-hover:pointer-events-none group-buttonpopover-hover:opacity-[.24]"),
                        children: (0, l.jsx)(p.E, {
                            alignment: m,
                            ref: b,
                            socials: v
                        })
                    }), (0, l.jsx)(w.EC, {
                        visible: _,
                        reference: b,
                        placement: "bottom",
                        arrow: !0,
                        arrowSize: "lg",
                        arrowBackground: "light",
                        offset: "lg",
                        zIndex: 20,
                        onClickOutside: () => k(!1),
                        onHide: () => k(!1),
                        content: (0, l.jsxs)("div", {
                            className: "w-[360px] space-y-8 rounded-lg bg-graphite-0 px-6 pt-6 shadow-soft-xl ring-1 ring-graphite-5",
                            children: [(0, l.jsx)(w.J2.Header, {
                                primitive: !0,
                                onClose: () => k(!1),
                                title: "Manage social icons"
                            }), (0, l.jsxs)("section", {
                                ref: E,
                                className: "-mx-6 -mb-6 max-h-[360px] space-y-4 overflow-y-auto px-6 pb-6",
                                children: [v.length < 6 && (0, l.jsx)(h.k, {
                                    onClick: () => I(!0),
                                    className: "w-full",
                                    size: "lg",
                                    children: (0, l.jsx)(x.f, {
                                        className: "justify-center",
                                        icon: (0, l.jsx)(d.Z, {
                                            "aria-hidden": !0,
                                            className: "h-6"
                                        }),
                                        children: "Add social icon"
                                    })
                                }), (0, l.jsx)(T.b, {
                                    items: v,
                                    showEdit: !0,
                                    showDelete: v.length > 1,
                                    editHint: "Edit social icon",
                                    deleteHint: "Remove social icon",
                                    onEdit: e => C(e),
                                    onChange: e => {
                                        let {
                                            newValue: t
                                        } = e;
                                        f(t), a(t)
                                    },
                                    children: e => {
                                        var t, n;
                                        return (0, l.jsxs)("div", {
                                            className: "h-full w-full rounded py-4 pl-8 pr-5 ring-1 ring-graphite-10",
                                            children: [(0, l.jsx)("h2", {
                                                className: "text-graphite-60",
                                                children: null !== (n = null === (t = j.JU[e.name]) || void 0 === t ? void 0 : t.label) && void 0 !== n ? n : e.name
                                            }), (0, l.jsx)("span", {
                                                className: "font-body text-xs text-graphite-40",
                                                children: e.link.replace("https://", "").replace("www.", "")
                                            })]
                                        })
                                    }
                                })]
                            })]
                        })
                    }), (O || S) && (0, l.jsx)(N, {
                        type: S ? "ADD" : "EDIT",
                        value: O,
                        options: Object.keys(j.JU).filter(e => (null == O ? void 0 : O.name) === e || !v.some(t => t.name === e)),
                        onSave: (e, t) => {
                            k(!0), t ? L(t, e) : D(e)
                        },
                        onDismiss: () => {
                            k(!0), C(null), I(!1)
                        }
                    })]
                }) : null
            }
        },
        60644: function(e, t, n) {
            n.d(t, {
                S: function() {
                    return b
                }
            });
            var l = n(52322),
                s = n(2784),
                a = n(1697),
                i = n(73694),
                o = n(23094),
                r = n(40489),
                d = n(45114),
                c = n(31260),
                u = n(1675),
                h = n(56680),
                p = n(4060),
                x = n(66935),
                g = n(13254);

            function m(e) {
                let {
                    section: t,
                    module: n,
                    alignment: s,
                    onChange: a
                } = e, i = (0, g.I)(), {
                    active: m
                } = (0, o.Cj)(), v = e => {
                    let t = "SOCIALS" === e ? (0, d.L)() : {
                        label: "Click here",
                        action: "NAVIGATE_TO_INTERNAL_PAGE",
                        actionValue: i
                    };
                    null == a || a(t)
                }, f = "modules" in t && t.modules.some(e => ("IMAGE" === e.type || "VIDEO" === e.type) && "lg" === e.preferredSize);
                return n.extension ? (0, l.jsx)(x.n, {
                    alignment: s,
                    children: Array.isArray(n.extension) ? (0, l.jsx)(p.U, {
                        alignment: s,
                        socials: n.extension,
                        onChange: e => null == a ? void 0 : a(e),
                        onRemove: () => null == a ? void 0 : a(null)
                    }) : (0, l.jsx)(h.C, {
                        onRemove: () => null == a ? void 0 : a(null),
                        onEdit: e => null == a ? void 0 : a(e),
                        value: n.extension
                    })
                }) : (0, l.jsxs)("div", {
                    className: (0, r.Z)("absolute -bottom-12 -left-2 z-10 hidden w-[calc(100%+1rem)] gap-2 self-stretch p-2 hover:flex group-focus-within/editable-root:flex group-focus-within/editable:flex", m && "invisible", "group-data-[open='true']/writing-assistant:hidden", {
                        "justify-start": "left" === s,
                        "justify-center": "center" === s,
                        "justify-end": "right" === s,
                        "bottom-[-86px] flex-col items-start gap-1": f
                    }),
                    children: ["FOOTER" !== t.type && (0, l.jsxs)(u.T, {
                        adaptive: !0,
                        onClick: () => v("BUTTON"),
                        className: "gap-1 whitespace-nowrap",
                        size: "xs",
                        noShadow: !0,
                        shape: "rounded-rectangle",
                        children: [(0, l.jsx)(c.IconAddButton, {
                            "aria-hidden": !0,
                            className: "h-4"
                        }), "Add button"]
                    }), (0, l.jsxs)(u.T, {
                        adaptive: !0,
                        onClick: () => v("SOCIALS"),
                        className: "gap-1 whitespace-nowrap",
                        size: "xs",
                        noShadow: !0,
                        shape: "rounded-rectangle",
                        children: [(0, l.jsx)(c.IconAddSocialIcons, {
                            "aria-hidden": !0,
                            className: "h-4"
                        }), "Add social icons"]
                    })]
                })
            }
            var v = n(27618),
                f = n(2762),
                j = n(17531);

            function b(e) {
                var t, n;
                let {
                    module: o,
                    section: r,
                    onChange: d,
                    textEditorProps: c,
                    movable: u,
                    forceAlignment: h,
                    writingAssistantPosition: p
                } = e, {
                    updateModule: x,
                    removeModule: b
                } = (0, f.T)(r), {
                    updateModule: N
                } = (0, f.T)(r, {
                    delayMs: 500
                }), w = (0, g.I)(), y = (0, j.q)(w).data, T = (0, s.useMemo)(() => "HERO" === r.type ? "left" : (u || "SMART" !== r.type) && "COVER" !== r.type ? "left" === u ? "right" : "left" : "right" === r.alignment.horizontal ? "right" : "left", [u, r]), E = null != h ? h : null === (t = o.content) || void 0 === t ? void 0 : t.alignment, S = !!u, I = S ? () => b(o.id) : void 0;
                return (0, l.jsx)(i.Z, {
                    position: p,
                    children: (0, l.jsxs)(a.C, {
                        className: "-m-0 group-data-[open='true']/writing-assistant:ring-0",
                        children: [(0, l.jsx)(a.C.Toolbar, {
                            className: "-my-0 group-data-[open='true']/writing-assistant:hidden",
                            onRemove: I
                        }), (0, l.jsxs)("div", {
                            "data-editable-keyboard-target": !0,
                            className: "flex flex-col items-stretch space-y-8",
                            children: [(0, l.jsx)(a.C.Module, {
                                noRing: !0,
                                removable: S,
                                children: (0, l.jsx)(v.T, {
                                    id: o.id,
                                    defaultAlignment: E,
                                    textNodes: null === (n = o.content) || void 0 === n ? void 0 : n.payload,
                                    toolbarAlignment: T,
                                    noRing: !0,
                                    noBlockquoteAndDivider: "BLOG_POST" !== y.type,
                                    onChange: e => {
                                        var t;
                                        d ? d({
                                            content: e
                                        }) : e.alignment !== (null === (t = o.content) || void 0 === t ? void 0 : t.alignment) ? x({ ...o,
                                            content: { ...o.content,
                                                alignment: e.alignment
                                            }
                                        }) : N({ ...o,
                                            content: { ...o.content,
                                                payload: e.payload
                                            }
                                        })
                                    },
                                    ...c
                                }, o.id)
                            }), (0, l.jsx)(m, {
                                module: o,
                                section: r,
                                alignment: E,
                                onChange: e => {
                                    d ? d({
                                        extension: e
                                    }) : x({ ...o,
                                        extension: e
                                    })
                                }
                            })]
                        })]
                    })
                })
            }
        },
        2762: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return a
                }
            });
            var l = n(55530),
                s = n(47372);

            function a(e, t) {
                let {
                    mutate: n
                } = (0, s.n)(t), {
                    defaultAlignment: a
                } = (0, l.m)();
                return {
                    updateModule: t => {
                        if (!("modules" in e)) return;
                        let l = e.modules.map(e => e.id === t.id ? t : e);
                        n({ ...e,
                            modules: l
                        })
                    },
                    removeModule: t => {
                        var l, s;
                        if ("SMART" === e.type) {
                            n({ ...e,
                                alignment: {
                                    horizontal: null !== (l = null == a ? void 0 : a.title) && void 0 !== l ? l : "left"
                                },
                                modules: e.modules.filter(e => e.id !== t)
                            });
                            return
                        }
                        "COVER" === e.type && n({ ...e,
                            alignment: {
                                horizontal: null !== (s = null == a ? void 0 : a.title) && void 0 !== s ? s : "left",
                                vertical: "bottom"
                            },
                            textModule: null
                        })
                    }
                }
            }
        },
        46774: function(e, t, n) {
            n.d(t, {
                f: function() {
                    return s
                }
            });
            var l = n(54962);

            function s(e) {
                return l.SX.useQuery(["Section.find", e])
            }
        },
        17514: function(e, t, n) {
            n.d(t, {
                l: function() {
                    return i
                }
            });
            var l = n(86882),
                s = n(1918),
                a = n(45114);

            function i(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "left",
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = null != n ? n : (0, s.Af)(e),
                    o = [{
                        type: "paragraph",
                        content: [{
                            text: "123 Demo Street, New York NY | (555) 555-5555 | ".concat(e.email),
                            type: "text"
                        }]
                    }, {
                        type: "paragraph",
                        content: [{
                            text: "\xa9 ".concat(i, ", ").concat(new Date().getFullYear()),
                            type: "text"
                        }]
                    }],
                    r = {
                        type: "doc",
                        content: "center" === t ? o : [{
                            type: "heading",
                            attrs: {
                                level: 2
                            },
                            content: [{
                                text: i,
                                type: "text"
                            }]
                        }, ...o]
                    };
                return {
                    id: "FOOTER_SECTION",
                    pageId: "",
                    version: 1,
                    type: "FOOTER",
                    showNavigation: !0,
                    textModule: {
                        id: "FOOTER_MODULE",
                        type: "TEXT",
                        extension: l.Ab ? null : (0, a.L)(),
                        content: {
                            alignment: t,
                            payload: r
                        }
                    },
                    textNodes: null
                }
            }
        },
        70021: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return a
                },
                I: function() {
                    return i
                }
            });
            var l = n(19872);
            let s = l.Z_().min(1, "All buttons deserve a label.").max(25).refine(e => e.match(/.*\S.*/), {
                    message: "All buttons deserve a label."
                }),
                a = l.G0([l.Ry({
                    label: s,
                    action: l.i0("NAVIGATE_TO_INTERNAL_PAGE"),
                    actionValue: l.Z_().nullable()
                }), l.Ry({
                    label: s,
                    action: l.i0("OPEN_LINK_IN_NEW_TAB"),
                    actionValue: l.Z_().min(1, "We’ll need a valid URL here.")
                }), l.Ry({
                    label: s,
                    action: l.i0("SEND_EMAIL"),
                    actionValue: l.Z_().email("We’ll need a valid email address here.")
                })]),
                i = l.Ry({
                    rounded: l.Km(["lg", "full", "none"]),
                    variant: l.Km(["outline", "filled"])
                })
        }
    }
]);