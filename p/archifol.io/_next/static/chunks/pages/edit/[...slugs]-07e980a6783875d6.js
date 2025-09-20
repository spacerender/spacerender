try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e838b38c-9bbd-40ab-9da5-2cde14c048a9", e._sentryDebugIdIdentifier = "sentry-dbid-e838b38c-9bbd-40ab-9da5-2cde14c048a9")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1835], {
        44290: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/edit/[...slugs]", function() {
                return s(24448)
            }])
        },
        90147: function(e, t, s) {
            "use strict";
            s.d(t, {
                T: function() {
                    return l
                }
            });
            var i = s(52322),
                n = s(27403),
                a = s(28104),
                r = s(98383);

            function l() {
                let {
                    emergency: e,
                    isVisibleOnEditor: t
                } = (0, a.X)("editor");
                return e && t ? (0, i.jsx)("div", {
                    className: "h-12 w-full border-b border-b-graphite-90 dark",
                    children: (0, i.jsx)(r.N, {
                        Icon: n.b0,
                        intent: "emergency",
                        textSize: "sm",
                        centered: !0,
                        children: null == e ? void 0 : e.messageForEditorView
                    })
                }) : null
            }
        },
        98871: function(e, t, s) {
            "use strict";
            s.d(t, {
                y: function() {
                    return A
                },
                Z: function() {
                    return _
                }
            });
            var i = s(52322),
                n = s(88883),
                a = s(65058),
                r = s(752),
                l = s(2784),
                o = s(63955),
                d = s(19872);
            let c = d.Ry({
                to: d.Km(["TEAM", "SUPPORT"]).optional().default("SUPPORT"),
                subject: d.Z_().optional(),
                message: d.Z_().min(1, {
                    message: "Please write a message, so we can send it."
                })
            });
            var u = s(34911),
                h = s(4818),
                p = s(72907),
                x = s(93263),
                m = s(44133),
                f = s(76479),
                g = s(1675),
                b = s(30504),
                j = s(98644),
                v = s(56646),
                y = s(35801),
                N = s(84537),
                S = s(40291),
                w = s(16405),
                E = s(94854),
                k = s(60185),
                C = s(75403),
                T = s(43671),
                I = s(93924);
            let _ = (0, a.cn)(!1);

            function O(e) {
                var t;
                let {
                    form: s
                } = e, [n] = (0, y.sB)(), [, a] = (0, r.KO)(_), {
                    mutate: o,
                    status: d,
                    reset: c
                } = (0, T.T)();
                return l.useEffect(() => {
                    "success" === d ? (n("SUCCESS"), c(), s.reset()) : "error" === d && (n("ERROR"), c())
                }, [d, n, c, s]), (0, i.jsxs)(y.ED, {
                    className: "space-y-6 rounded-lg p-6",
                    children: [(0, i.jsxs)("div", {
                        className: "space-y-2",
                        children: [(0, i.jsxs)("div", {
                            className: "flex items-start justify-between",
                            children: [(0, i.jsx)("h2", {
                                className: "text-2xl font-bold",
                                children: "We’re here to help."
                            }), (0, i.jsx)(b.h, {
                                growOutside: !0,
                                "aria-label": "Close",
                                onClick: () => {
                                    a(!1)
                                },
                                children: (0, i.jsx)(p.Z, {
                                    "aria-hidden": !0,
                                    className: "h-6"
                                })
                            })]
                        }), (0, i.jsxs)("p", {
                            className: "text-graphite-40",
                            children: ["Need help, found a bug or wanna give feedback?", (0, i.jsx)("br", {}), "We’ll get back to you in email."]
                        })]
                    }), (0, i.jsxs)("form", {
                        noValidate: !0,
                        className: "flex flex-col space-y-6",
                        onSubmit: s.handleSubmit(e => {
                            o(e)
                        }),
                        children: [(0, i.jsx)(N.L, { ...s.register("message"),
                            label: "Your email message",
                            inputAs: S.K,
                            autoFocus: !0,
                            disabled: "loading" === d,
                            placeholder: "Tell us how we can help you out",
                            error: null === (t = s.formState.errors.message) || void 0 === t ? void 0 : t.message,
                            size: "1.5xl"
                        }), (0, i.jsx)(j.K, {
                            size: "lg",
                            type: "submit",
                            loading: "loading" === d,
                            children: "Send email"
                        })]
                    })]
                })
            }

            function P() {
                let [, e] = (0, r.KO)(_), [t] = (0, I.k)();
                return (0, i.jsxs)(y.ED, {
                    className: "flex flex-col justify-between rounded-lg",
                    children: [k.Ab ? (0, i.jsx)(f.Z, {
                        "aria-hidden": !0,
                        className: "h-55.5"
                    }) : (0, i.jsx)(m.Z, {
                        "aria-hidden": !0,
                        className: "h-55.5 w-full self-end"
                    }), (0, i.jsxs)("div", {
                        className: "flex flex-col space-y-8 p-6",
                        children: [(0, i.jsxs)("div", {
                            className: "space-y-2 text-center",
                            children: [(0, i.jsx)("h2", {
                                className: "text-2xl font-bold",
                                children: "We’ve got your message."
                            }), (0, i.jsxs)("p", {
                                className: "text-graphite-40",
                                children: ["We’ll get back to you on ", null == t ? void 0 : t.user.email, "."]
                            })]
                        }), (0, i.jsx)(v.k, {
                            size: "lg",
                            onClick: () => e(!1),
                            children: "Close"
                        })]
                    })]
                })
            }

            function D() {
                let [, e] = (0, y.sB)(), [, t] = (0, r.KO)(_);
                return (0, i.jsxs)(y.ED, {
                    className: "flex flex-col justify-between rounded",
                    children: [(0, i.jsx)(x.Z, {
                        "aria-hidden": !0,
                        className: "h-55.5"
                    }), (0, i.jsxs)("div", {
                        className: "flex flex-col space-y-8 p-6",
                        children: [(0, i.jsxs)("div", {
                            className: "space-y-2 text-center",
                            children: [(0, i.jsx)("h2", {
                                className: "text-2xl font-bold",
                                children: "Shoot, your message wasn’t sent."
                            }), (0, i.jsx)("p", {
                                className: "text-graphite-40",
                                children: "Check your connection or try again later."
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "grid grid-cols-2 gap-6",
                            children: [(0, i.jsx)(v.k, {
                                size: "lg",
                                onClick: () => t(!1),
                                children: "Close"
                            }), (0, i.jsx)(j.K, {
                                size: "lg",
                                onClick: e,
                                children: "Try again"
                            })]
                        })]
                    })]
                })
            }

            function A() {
                let [e, t] = (0, r.KO)(_), [s] = (0, r.KO)(C.W), a = (0, o.cI)({
                    resolver: (0, n.F)(c)
                }), d = l.useRef(null), [p, x] = l.useState(["INITIAL"]);
                return l.useEffect(() => {
                    e || x(["INITIAL"])
                }, [e]), l.useEffect(() => {
                    null !== s && t(!1)
                }, [s, t]), (0, i.jsxs)(w.J2, {
                    open: e,
                    onOpenChange: t,
                    children: [(0, i.jsx)(w.J2.Trigger, {
                        asChild: !0,
                        children: (0, i.jsx)(E.u, {
                            content: "Need help?",
                            placement: "right",
                            children: (0, i.jsx)(g.T, {
                                ref: d,
                                onClick: () => {
                                    t(!0)
                                },
                                children: (0, i.jsx)(h.Z, {
                                    "aria-hidden": !0,
                                    className: "h-6"
                                })
                            })
                        })
                    }), (0, i.jsx)(w.J2.Content, {
                        align: "start",
                        side: "bottom",
                        sideOffset: -48,
                        className: "h-[25.5rem] w-[28rem] animate-slide-up rounded-lg bg-graphite-0 p-0 shadow-soft-lg ring-1 ring-graphite-5",
                        children: (0, i.jsx)(y.H5, {
                            panels: p,
                            suppressAnimations: !e,
                            onChange: x,
                            children: e => {
                                switch (e) {
                                    case "INITIAL":
                                        return (0, i.jsx)(O, {
                                            form: a
                                        });
                                    case "SUCCESS":
                                        return (0, i.jsx)(P, {});
                                    case "ERROR":
                                        return (0, i.jsx)(D, {});
                                    default:
                                        return (0, u.pv)(e)
                                }
                            }
                        })
                    })]
                })
            }
        },
        43671: function(e, t, s) {
            "use strict";
            s.d(t, {
                T: function() {
                    return n
                }
            });
            var i = s(54962);

            function n() {
                return i.SX.useMutation("SupportRequest.create")
            }
        },
        37370: function(e, t, s) {
            "use strict";
            s.d(t, {
                e: function() {
                    return n
                }
            });
            var i = s(54962);

            function n() {
                let e = i.SX.useContext();
                return i.SX.useMutation("Feedback.submit", {
                    onSuccess: () => {
                        e.invalidateQueries(["Feedback.getSurveyState"])
                    }
                })
            }
        },
        29769: function(e, t, s) {
            "use strict";
            s.d(t, {
                i: function() {
                    return r
                }
            });
            var i = s(79046),
                n = s(93924),
                a = s(54962);

            function r() {
                let {
                    queryClient: e
                } = a.SX.useContext(), [t] = (0, n.k)({
                    required: !0
                }), {
                    user: s
                } = i.SX.useUtils();
                return i.SX.user.updateSelf.useMutation({
                    onMutate: async i => {
                        let n;
                        let a = {
                            id: t.user.id,
                            ...i
                        };
                        await s.find.cancel(a.id);
                        let r = s.find.getData(a.id);
                        return s.find.setData(a.id, { ...r,
                            ...a
                        }), a.id === t.user.id && (await e.cancelQueries(["session"]), (n = e.getQueryData(["session"])) && e.setQueryData(["session"], { ...n,
                            user: { ...n.user,
                                ...a
                            }
                        })), {
                            prevUser: r,
                            prevSession: n
                        }
                    },
                    onError: (i, n, a) => {
                        s.find.setData(n.id, a.prevUser), n.id === t.user.id && e.setQueryData(["session"], a.prevSession)
                    }
                })
            }
        },
        89672: function(e, t, s) {
            "use strict";
            s.d(t, {
                J: function() {
                    return n
                }
            });
            var i = s(79046);

            function n() {
                return i.SX.subscription.freeTrialTimeLeft.useQuery()
            }
        },
        77976: function(e, t, s) {
            "use strict";
            s.d(t, {
                M: function() {
                    return n
                }
            });
            var i = s(54962);

            function n(e) {
                return i.SX.useQuery(["Feedback.getSurveyState", e])
            }
        },
        24448: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                __N_SSP: function() {
                    return tk
                },
                default: function() {
                    return tC
                }
            });
            var i = s(52322),
                n = s(86882),
                a = s(752),
                r = s(97729),
                l = s.n(r),
                o = s(39097),
                d = s.n(o),
                c = s(5632),
                u = s(55351),
                h = s(2784),
                p = s(1675),
                x = s(89672),
                m = s(64617),
                f = s(27403);

            function g() {
                let {
                    data: e,
                    isPending: t
                } = (0, x.J)();
                if (t) return null;
                let s = Math.ceil(null != e ? e : 0),
                    [n, a, r] = s > 0 ? [f.SU, "Your trial ends in ".concat(s, " day").concat(s > 1 ? "s" : "", "."), "Upgrade now to share your site with others."] : [f.HE, "You're on the Free plan.", "Upgrade now to continue editing and to publish your site."];
                return (0, i.jsxs)("div", {
                    className: "flex items-center justify-center space-x-4 bg-graphite-95 p-4 text-left text-sm text-graphite-0 @tablet:text-center",
                    children: [(0, i.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [(0, i.jsx)(n, {
                            className: "size-6 shrink-0"
                        }), (0, i.jsx)("strong", {
                            children: a
                        })]
                    }), (0, i.jsx)("span", {
                        className: "hidden text-graphite-10 tablet:inline",
                        children: r
                    }), (0, i.jsx)(p.T, {
                        onClick: () => {
                            (0, m.w)({
                                event: "clickedGoPremiumOnCountdownBanner",
                                daysLeft: s
                            })
                        },
                        as: d(),
                        href: "/premium",
                        size: "xs",
                        shape: "pill",
                        children: "Go premium"
                    })]
                })
            }
            var b = s(37177),
                j = s(16730),
                v = s(97466),
                y = s.n(v),
                N = s(61463);
            let S = [{
                featureId: "BLOCK_SYSTEM",
                title: "Welcome to a new blogging experience!",
                description: "Take a short tour to learn how to edit blog posts on ".concat(n.sG, "."),
                steps: [{
                    disableBeacon: !0,
                    target: "#editable_block-onboarding-text-with-image",
                    placement: "top-start",
                    title: "Build your blog using blocks",
                    content: "You’ll find a block for everything: text, images, and many more."
                }, {
                    target: "#editable_block-onboarding-text-with-image [role='toolbar']",
                    before: () => {
                        var e;
                        return null === (e = document.querySelector("#editable_block-onboarding-text-with-image")) || void 0 === e ? void 0 : e.focus()
                    },
                    title: "Select blocks to edit them",
                    content: "Change the elements inside or delete the blocks.",
                    disableScrolling: !0,
                    placement: "top-start"
                }, {
                    target: "#editable_block-onboarding-text-with-image [aria-label='Drag handle']",
                    before: () => {
                        var e;
                        return null === (e = document.querySelector("#editable_block-onboarding-text-with-image")) || void 0 === e ? void 0 : e.focus()
                    },
                    after: () => {
                        var e;
                        return null === (e = document.activeElement) || void 0 === e ? void 0 : e.blur()
                    },
                    title: "Drag and drop to reorder",
                    content: "Select the block, then drag it by the handle and drop it to reposition.",
                    placement: "right",
                    disableScrolling: !0
                }, {
                    target: "#blog-hero-page-options",
                    title: "Autosave everything",
                    content: "Rest assured, everything is saved automatically as a draft.",
                    nextLabel: "Start writing",
                    placement: "bottom-start"
                }]
            }];
            var w = s(29769),
                E = s(93924),
                k = s(58997),
                C = s(93556),
                T = s(88241),
                I = s(74903);

            function _(e) {
                var t, s, n, a, r;
                let {
                    step: l,
                    size: o,
                    index: d,
                    backProps: c,
                    primaryProps: u,
                    isLastStep: x,
                    hideArrow: m
                } = e, f = null === (t = l.placement) || void 0 === t ? void 0 : t.split("-")[0], g = h.useMemo(() => "top" === f ? {
                    y: 20,
                    x: 0
                } : "bottom" === f ? {
                    y: -20,
                    x: 0
                } : "left" === f ? {
                    y: 0,
                    x: 20
                } : "right" === f ? {
                    y: 0,
                    x: -20
                } : {
                    x: 0,
                    y: 0
                }, [f]), b = {
                    ready: { ...g,
                        opacity: 0
                    },
                    idle: {
                        x: 0,
                        y: 0,
                        opacity: 1
                    },
                    exit: { ...g,
                        opacity: 0
                    }
                };
                return (0, i.jsxs)(C.m.div, {
                    variants: b,
                    initial: "ready",
                    animate: "idle",
                    exit: "exit",
                    className: (0, N.Z)("relative", (null === (s = l.placement) || void 0 === s ? void 0 : s.endsWith("start")) && "-ml-2", {
                        "top-2": "bottom" === f,
                        "-top-2": "top" === f,
                        "left-2": "right" === f,
                        "-left-2": "left" === f
                    }),
                    children: [(0, i.jsxs)("div", {
                        className: (0, N.Z)("w-[332px] space-y-4 rounded-lg bg-graphite-0 px-6 py-5 ring-1 ring-graphite-10", m && "shadow-[0px_228px_64px_0px_rgba(0,0,0,0.00),0px_146px_58px_0px_rgba(0,0,0,0.01),0px_82px_49px_0px_rgba(0,0,0,0.05),0px_37px_37px_0px_rgba(0,0,0,0.09),0px_9px_20px_0px_rgba(0,0,0,0.10),0px_0px_0px_0px_rgba(0,0,0,0.10)]"),
                        children: [(0, i.jsxs)("div", {
                            className: "space-y-2",
                            children: [(0, i.jsx)("h3", {
                                className: "text-xl font-bold",
                                children: l.title
                            }), (0, i.jsx)("p", {
                                className: "leading-6 text-graphite-40",
                                children: l.content
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0, i.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, i.jsx)(p.T, {
                                    shape: "pill",
                                    size: "xs",
                                    ...u,
                                    children: null !== (a = null !== (n = l.nextLabel) && void 0 !== n ? n : u.title) && void 0 !== a ? a : "Next"
                                }), (0, i.jsx)(p.T, {
                                    shape: "pill",
                                    size: "xs",
                                    intent: "subtle",
                                    ...c,
                                    children: x ? "Restart" : null !== (r = c.title) && void 0 !== r ? r : "Back"
                                })]
                            }), d >= 0 && (0, i.jsxs)("span", {
                                className: "text-sm text-graphite-40",
                                children: [d + 1, " / ", o]
                            })]
                        })]
                    }), !m && (0, i.jsx)("div", {
                        className: (0, N.Z)("absolute h-3 w-3 -translate-y-1/2 rotate-45 border-graphite-10 bg-graphite-0", {
                            "border-r border-b left-6": "top" === f,
                            "border-l border-b -translate-x-1/2 top-1/2": "right" === f,
                            "border-t border-l -top-px left-6": "bottom" === f
                        })
                    })]
                })
            }

            function O() {
                let [e] = (0, E.k)(), [t, s] = (0, h.useState)(null), [n, a] = (0, h.useState)("idle"), [r, l] = (0, h.useState)(0), o = (0, k.e)(), {
                    mutate: d
                } = (0, w.i)(), c = () => {
                    var s;
                    t && d({
                        usedFeatures: [...null !== (s = null == e ? void 0 : e.user.usedFeatures) && void 0 !== s ? s : [], t.featureId]
                    })
                };
                return (h.useEffect(() => {
                    (null == e ? void 0 : e.user) && setTimeout(() => {
                        let t = S.find(t => !e.user.usedFeatures.includes(t.featureId) && !!document.querySelector(t.steps[0].target));
                        s(null != t ? t : null)
                    }, 1e3)
                }, [null == e ? void 0 : e.user]), t && "laptop" === o) ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(y(), {
                        id: "c9aab39e36c4d378",
                        children: ".react-joyride__overlay{cursor:default!important}.react-joyride__spotlight{-webkit-border-radius:8px!important;-moz-border-radius:8px!important;border-radius:8px!important}.__floater.__floater__open{-webkit-filter:none!important;filter:none!important}"
                    }), (0, i.jsx)(I.ZP, {
                        continuous: !0,
                        run: "running" === n,
                        steps: t.steps,
                        stepIndex: r,
                        floaterProps: {
                            disableAnimation: !0,
                            hideArrow: !0,
                            offset: 16
                        },
                        scrollOffset: 280,
                        spotlightPadding: 8,
                        callback: e => {
                            if (e.type === I.FP.STEP_AFTER) {
                                var s, i, n, r;
                                null === (i = t.steps[e.index]) || void 0 === i || null === (s = i.after) || void 0 === s || s.call(i);
                                let o = e.action === I.aO.PREV ? -1 : 1,
                                    d = e.index + o;
                                if (-1 === d) {
                                    a("idle"), l(0);
                                    return
                                }
                                if (1 === o && e.index === e.size - 1 && c(), -1 === o && e.index === e.size - 1) {
                                    l(0);
                                    return
                                }
                                null === (r = t.steps[d]) || void 0 === r || null === (n = r.before) || void 0 === n || n.call(r), l(d)
                            }
                            e.action === I.aO.CLOSE && a("finished")
                        },
                        beaconComponent: () => null,
                        tooltipComponent: e => (0, i.jsx)(_, { ...e
                        })
                    }), (0, i.jsx)(T.M, {
                        mode: "wait",
                        children: "idle" === n && (0, i.jsx)("div", {
                            className: "jsx-c9aab39e36c4d378 fixed left-6 top-editor-header-height",
                            children: (0, i.jsx)(_, {
                                index: -1,
                                size: t.steps.length,
                                isLastStep: !1,
                                hideArrow: !0,
                                step: {
                                    title: t.title,
                                    content: t.description,
                                    target: "",
                                    placement: "right-start"
                                },
                                backProps: {
                                    role: "button",
                                    "aria-label": "Skip",
                                    "data-action": I.aO.SKIP,
                                    title: "Skip",
                                    onClick: () => {
                                        a("finished"), c()
                                    }
                                },
                                primaryProps: {
                                    role: "button",
                                    "aria-label": "Start tour",
                                    "data-action": I.aO.START,
                                    title: "Start tour",
                                    onClick: () => a("running")
                                }
                            })
                        })
                    })]
                }) : null
            }
            var P = s(99872),
                D = s(31260),
                A = s(30504),
                G = s(40061),
                R = s(25381),
                B = s(42428),
                F = s(66865),
                L = s(86408);
            let M = {
                    duration: .25,
                    type: "spring",
                    bounce: .005,
                    stiffness: 200,
                    damping: 23,
                    ease: "easeInOut"
                },
                z = {
                    width: 100,
                    height: 24
                },
                U = "data-island-",
                X = "".concat(U, "id"),
                Z = "".concat(U, "timeout");

            function K(e) {
                var t, s, n;
                let {
                    children: a,
                    state: r,
                    defaultState: l = "idle",
                    whileHover: o,
                    onChange: d,
                    className: c,
                    baseClassName: u,
                    idleSize: p = z
                } = e, [x, m] = (0, h.useState)(null != l ? l : r), f = h.useRef(null), g = null !== (s = (0, L.h)(f, [x])) && void 0 !== s ? s : p, b = null !== (n = null === (t = h.Children.map(a, e => h.isValidElement(e) && e.props[X] ? e : h.isValidElement(e) ? { ...e,
                    props: { ...e.props,
                        [X]: e.props.id,
                        [Z]: e.props.timeout
                    }
                } : null)) || void 0 === t ? void 0 : t.filter(Boolean)) && void 0 !== n ? n : [], j = (0, h.useCallback)(e => {
                    m(e), null == d || d(e)
                }, [d]), v = b.find(e => e.props[X] === x), y = null == v ? void 0 : v.props[Z];
                (0, h.useEffect)(() => {
                    if (y) {
                        let e = setTimeout(() => {
                            j(l), clearTimeout(e)
                        }, 1e3 * y);
                        return () => clearTimeout(e)
                    }
                    return () => null
                }, [y, l, j]);
                let {
                    width: S,
                    height: w
                } = "idle" === x ? p : g;
                return (0, i.jsx)(B.A, {
                    transition: M,
                    children: (0, i.jsx)(F.E.div, {
                        initial: p,
                        animate: {
                            width: S,
                            height: w
                        },
                        className: c,
                        onMouseEnter: () => {
                            o && j(o)
                        },
                        onMouseLeave: () => {
                            o && j(l)
                        },
                        children: (0, i.jsx)(F.E.div, {
                            "data-state": x,
                            whileTap: {
                                scale: .95
                            },
                            className: (0, N.Z)("relative h-full w-full overflow-hidden rounded-[20px] bg-[#000] text-[#fff] shadow-soft-xl", u),
                            children: (0, i.jsx)("div", {
                                ref: f,
                                className: "absolute left-1/2 top-0 w-max -translate-x-1/2",
                                children: (0, i.jsx)(F.E.div, {
                                    className: "origin-top",
                                    variants: {
                                        enter: {
                                            opacity: 0,
                                            scale: .8
                                        },
                                        steady: {
                                            opacity: 1,
                                            scale: 1
                                        }
                                    },
                                    initial: "enter",
                                    animate: "steady",
                                    transition: { ...M
                                    },
                                    id: "__dynamic-island-child-wrapper",
                                    children: v
                                }, x)
                            })
                        })
                    })
                })
            }

            function V() {
                let {
                    progress: e,
                    reset: t
                } = (0, b.G)(), s = Object.entries(e), n = s.filter(e => {
                    let [, t] = e;
                    return "done" === t.status
                }), [a, r] = (0, h.useState)("status");
                if (0 === s.length) return null;
                let l = (0, P.E9)(s, e => {
                        let [, t] = e;
                        return t.progress
                    }) / s.length * 100,
                    o = 100 === l,
                    d = s.some(e => {
                        let [, t] = e;
                        return "error" === t.status
                    });
                return (0, i.jsx)(T.M, {
                    mode: "wait",
                    children: (0, i.jsx)(C.m.div, {
                        initial: {
                            y: 100
                        },
                        animate: {
                            y: 0
                        },
                        exit: {
                            y: 100
                        },
                        className: "z-10 text-left",
                        children: (0, i.jsxs)(K, {
                            state: "status",
                            defaultState: "status",
                            whileHover: "progress",
                            onChange: r,
                            baseClassName: (0, N.Z)("bg-graphite-0 text-graphite-100 transition-all duration-150", "status" === a ? "rounded-[48px]" : "rounded-md"),
                            className: "origin-bottom-right",
                            children: [(0, i.jsx)(K.Child, {
                                id: "status",
                                className: "pointer-events-none relative size-18",
                                children: (0, i.jsx)(R.D, {
                                    percentage: l,
                                    className: (0, N.Z)("flex items-center justify-center fill-graphite-0 stroke-graphite-100", o && "fill-emerald-0 stroke-emerald-60", d && "rounded-full border-2 border-crimson-60 fill-crimson-0 stroke-crimson-60"),
                                    children: (0, i.jsxs)("span", {
                                        className: "text-xs font-bold",
                                        children: [d && (0, i.jsx)(f.P5, {
                                            className: "size-6 text-crimson-60"
                                        }), o && !d && (0, i.jsx)(f.Jr, {
                                            className: "size-6 text-emerald-60"
                                        }), !o && !d && "".concat(n.length, "/").concat(s.length)]
                                    })
                                })
                            }), (0, i.jsxs)(K.Child, {
                                id: "progress",
                                className: "pointer-events-none relative w-[320px] space-y-2 px-5 py-4",
                                children: [(0, i.jsxs)("div", {
                                    className: "flex items-start justify-between pr-10",
                                    children: [(0, i.jsxs)("div", {
                                        className: "space-y-1",
                                        children: [(0, i.jsx)("h2", {
                                            className: "font-semibold",
                                            children: o || d ? "Videos uploaded" : "Uploading videos..."
                                        }), !o && (0, i.jsx)("p", {
                                            className: "text-sm text-graphite-60",
                                            children: "Keep the editor open as this might take a few minutes."
                                        })]
                                    }), (o || d) && (0, i.jsx)(A.h, {
                                        onClick: t,
                                        className: "absolute right-2 top-2",
                                        size: "sm",
                                        children: (0, i.jsx)(D.IconX, {
                                            className: "size-4"
                                        })
                                    })]
                                }), !o && (0, i.jsx)(G.Z0, {}), (0, i.jsx)("div", {
                                    className: "space-y-1",
                                    children: s.map(e => {
                                        let [t, s] = e;
                                        return (0, i.jsxs)("div", {
                                            className: "flex h-6 items-center justify-between gap-6 text-sm text-graphite-60",
                                            children: [(0, i.jsx)("span", {
                                                className: "w-full flex-1 truncate",
                                                children: t
                                            }), "waiting" === s.status && (0, i.jsx)("span", {
                                                children: "Waiting..."
                                            }), "done" === s.status && (0, i.jsx)(D.IconCheckCircle, {
                                                className: "size-5 text-emerald-40"
                                            }), "uploading" === s.status || "converting" === s.status && (0, i.jsxs)("span", {
                                                className: "font-bold",
                                                children: [Math.floor(100 * s.progress), "%"]
                                            }), "error" === s.status && (0, i.jsx)(D.IconExclamationCircle, {
                                                className: "size-5 text-crimson-40"
                                            })]
                                        }, t + s.progress)
                                    })
                                })]
                            })]
                        })
                    })
                })
            }
            K.Child = function(e) {
                let {
                    timeout: t,
                    ...s
                } = e;
                return (0, i.jsx)("div", {
                    "data-island-timeout": t,
                    "data-island-id": s.id,
                    ...s
                })
            };
            var W = s(91921),
                Y = s(92195),
                J = s(98383),
                H = s(12633),
                q = s(11734),
                Q = s(96076);

            function $(e) {
                let {
                    loading: t,
                    onDismiss: s,
                    onMigrate: n
                } = e;
                return (0, i.jsx)(Q.f, {
                    title: "Update blog post?",
                    content: (0, i.jsxs)("div", {
                        className: "space-y-6",
                        children: [(0, i.jsx)("p", {
                            className: "text-graphite-60",
                            children: "It might look a bit different after, but don’t worry, none of your data will be lost. If you’re unsure, try the new editor on a new blog post first."
                        }), (0, i.jsx)(q.b, {
                            children: (0, i.jsx)("p", {
                                className: "text-left",
                                children: "Once you update this blog post, you can’t go back to editing it the old way."
                            })
                        })]
                    }),
                    loading: t,
                    onYes: n,
                    noText: "cancel",
                    onNo: s,
                    yesText: "update"
                })
            }
            var ee = s(13254),
                et = s(54962);

            function es() {
                let e = (0, ee.I)(),
                    [t, s] = (0, h.useState)(!1),
                    {
                        mutate: n,
                        isLoading: a
                    } = function() {
                        let {
                            invalidateQueries: e
                        } = et.SX.useContext();
                        return et.SX.useMutation("Page.migrateBlogPost", {
                            onSuccess(t) {
                                e(["Section.findAllByPageId", t.id])
                            }
                        })
                    }();
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(J.N, {
                        intent: "neutral",
                        textSize: "sm",
                        size: "md",
                        Icon: D.IconSparkles,
                        className: "dark:bg-graphite-95",
                        actionButton: (0, i.jsx)("div", {
                            className: "flex min-w-[200px] justify-end",
                            children: (0, i.jsx)(H.C, {
                                intent: "neutral",
                                onClick: () => s(!0),
                                shape: "pill",
                                size: "xs",
                                className: "dark:bg-graphite-80",
                                children: "update blog post"
                            })
                        }),
                        children: (0, i.jsxs)("div", {
                            className: "block tablet:flex tablet:flex-wrap laptop:space-x-2",
                            children: [(0, i.jsx)("span", {
                                className: "pr-2 font-bold tracking-[0.01em] laptop:pr-0",
                                children: "We’ve overhauled the blog’s writing experience."
                            }), (0, i.jsx)("span", {
                                className: "hidden pr-2 text-graphite-80 dark:text-graphite-10 tablet:block laptop:pr-0",
                                children: "Try the new editor by updating this blog post or by adding a new one."
                            })]
                        })
                    }), t && (0, i.jsx)($, {
                        loading: a,
                        onMigrate: () => {
                            n({
                                id: e
                            }, {
                                onSuccess() {
                                    s(!1)
                                }
                            })
                        },
                        onDismiss: () => s(!1)
                    })]
                })
            }
            var ei = s(90147),
                en = s(25237),
                ea = s.n(en);
            let er = ea()(() => Promise.all([s.e(9428), s.e(848), s.e(8595)]).then(s.bind(s, 8595)).then(e => e.BlogEditor), {
                    loadableGenerated: {
                        webpack: () => [8595]
                    },
                    ssr: !1
                }),
                el = ea()(() => Promise.all([s.e(848), s.e(9128)]).then(s.bind(s, 45988)).then(e => e.BlogPostHeroEditor), {
                    loadableGenerated: {
                        webpack: () => [45988]
                    },
                    ssr: !1
                }),
                eo = ea()(() => s.e(9987).then(s.bind(s, 9987)).then(e => e.CollageEditor), {
                    loadableGenerated: {
                        webpack: () => [9987]
                    },
                    ssr: !1
                }),
                ed = ea()(() => s.e(2095).then(s.bind(s, 22095)).then(e => e.CoverEditor), {
                    loadableGenerated: {
                        webpack: () => [22095]
                    },
                    ssr: !1
                }),
                ec = ea()(() => s.e(3285).then(s.bind(s, 23285)).then(e => e.CVEditor), {
                    loadableGenerated: {
                        webpack: () => [23285]
                    },
                    ssr: !1
                }),
                eu = ea()(() => s.e(6857).then(s.bind(s, 66857)).then(e => e.DividerEditor), {
                    loadableGenerated: {
                        webpack: () => [66857]
                    },
                    ssr: !1
                }),
                eh = ea()(() => s.e(2401).then(s.bind(s, 22401)).then(e => e.HeroEditor), {
                    loadableGenerated: {
                        webpack: () => [22401]
                    },
                    ssr: !1
                }),
                ep = ea()(() => s.e(6229).then(s.bind(s, 66229)).then(e => e.LegacyCoverEditor), {
                    loadableGenerated: {
                        webpack: () => [66229]
                    },
                    ssr: !1
                }),
                ex = ea()(() => s.e(9218).then(s.bind(s, 69218)).then(e => e.LogoWallEditor), {
                    loadableGenerated: {
                        webpack: () => [69218]
                    },
                    ssr: !1
                }),
                em = ea()(() => Promise.all([s.e(6122), s.e(6099)]).then(s.bind(s, 16099)).then(e => e.NavigationEditor), {
                    loadableGenerated: {
                        webpack: () => [16099]
                    },
                    ssr: !1
                }),
                ef = ea()(() => s.e(7119).then(s.bind(s, 57119)).then(e => e.ProjectGridEditor), {
                    loadableGenerated: {
                        webpack: () => [57119]
                    },
                    ssr: !1
                }),
                eg = ea()(() => s.e(9055).then(s.bind(s, 89055)).then(e => e.ProjectHeroEditor), {
                    loadableGenerated: {
                        webpack: () => [89055]
                    },
                    ssr: !1
                }),
                eb = ea()(() => s.e(73).then(s.bind(s, 40073)).then(e => e.ServicesEditor), {
                    loadableGenerated: {
                        webpack: () => [40073]
                    },
                    ssr: !1
                }),
                ej = ea()(() => s.e(6184).then(s.bind(s, 96184)).then(e => e.SmartSectionEditor), {
                    loadableGenerated: {
                        webpack: () => [96184]
                    },
                    ssr: !1
                }),
                ev = ea()(() => s.e(311).then(s.bind(s, 60311)).then(e => e.SubheadingEditor), {
                    loadableGenerated: {
                        webpack: () => [60311]
                    },
                    ssr: !1
                }),
                ey = ea()(() => s.e(2549).then(s.bind(s, 32549)).then(e => e.TextAroundMediaEditor), {
                    loadableGenerated: {
                        webpack: () => [32549]
                    },
                    ssr: !1
                }),
                eN = ea()(() => Promise.all([s.e(479), s.e(5519), s.e(2151)]).then(s.bind(s, 82151)).then(e => e.BlogPostContentEditor), {
                    loadableGenerated: {
                        webpack: () => [82151]
                    },
                    ssr: !1
                }),
                eS = ea()(() => s.e(2642).then(s.bind(s, 11156)).then(e => e.VideoGalleryEditor), {
                    loadableGenerated: {
                        webpack: () => [11156]
                    },
                    ssr: !1
                }),
                ew = ea()(() => s.e(8350).then(s.bind(s, 39712)).then(e => e.InstagramFeedEditor), {
                    loadableGenerated: {
                        webpack: () => [39712]
                    },
                    ssr: !1
                });
            var eE = s(34295),
                ek = s(10013),
                eC = s(28185),
                eT = s(98644),
                eI = s(56646),
                e_ = s(48115);

            function eO(e) {
                let {
                    invoiceUrl: t,
                    ...s
                } = e;
                return (0, i.jsxs)(e_.Vq, {
                    size: "sm",
                    ...s,
                    children: [(0, i.jsx)(e_.UZ, {
                        children: (0, i.jsx)(eC.Z, {
                            "aria-hidden": !0,
                            className: "h-55.5"
                        })
                    }), (0, i.jsxs)(e_.cZ, {
                        children: [(0, i.jsx)(e_.$N, {
                            children: "We couldn’t process your payment."
                        }), (0, i.jsx)("div", {
                            className: "text-center",
                            children: "We’ll try again but if it doesn’t go through, we’ll have to cancel your subscription. Please check your card details now."
                        })]
                    }), (0, i.jsxs)(e_.kX, {
                        children: [(0, i.jsx)(d(), {
                            href: "/settings",
                            passHref: !0,
                            legacyBehavior: !0,
                            children: (0, i.jsx)(eI.k, {
                                size: "lg",
                                as: "a",
                                className: "w-full",
                                children: "Go to settings"
                            })
                        }), t && (0, i.jsx)(eT.K, {
                            size: "lg",
                            as: "a",
                            href: t,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "w-full",
                            onClick: s.onDismiss,
                            children: "Renew now"
                        })]
                    })]
                })
            }
            var eP = s(17553),
                eD = s(24402),
                eA = s(74177),
                eG = s(65556),
                eR = s(75403);

            function eB(e) {
                let {
                    initialPanel: t,
                    initialAction: s
                } = e, n = (0, eG.c)(), [r, l] = (0, a.KO)(eR.W), [, o] = (0, a.KO)(eD.z), [, d] = (0, a.KO)(eA.d);
                (0, h.useEffect)(() => {
                    setTimeout(() => {
                        if (t) {
                            let [e, s] = t.split("-").map(e => e.toUpperCase());
                            "DESIGN" === e && (l(e), setTimeout(() => {
                                o(["INITIAL", s])
                            }, 500)), "SETTINGS" === e && (l(e), setTimeout(() => {
                                d(["INITIAL", s])
                            }, 500))
                        }
                        if (s) {
                            let e = document.querySelector("[data-action-id='".concat(s, "']"));
                            e && e.click()
                        }
                    }, 500)
                }, []);
                let c = () => {
                    n(() => l(null))
                };
                return (0, i.jsxs)("div", {
                    className: "relative",
                    children: [(0, i.jsx)(T.M, {
                        children: r && (0, i.jsx)(eP.HX, {
                            shrinksSibling: !0,
                            "aria-hidden": !0
                        })
                    }), (0, i.jsx)(T.M, {
                        children: "DESIGN" === r && (0, i.jsx)(eD.O, {
                            id: "sidebar-design",
                            className: "absolute inset-0",
                            onClose: c
                        })
                    }), (0, i.jsx)(T.M, {
                        children: "SETTINGS" === r && (0, i.jsx)(eA.Z, {
                            id: "sidebar-settings",
                            className: "absolute inset-0",
                            onClose: c
                        })
                    })]
                })
            }
            var eF = s(35196),
                eL = s(11650),
                eM = s(60185),
                ez = s(55630);
            let eU = {
                    ANALYTICS: ["I’d like to know how many people visited my website.", "I’m interested in my visitors’ location, time spent on my site, etc.", "I would purchase Premium to see these analytics about my site."],
                    PRIVACY_SETTINGS: ["I only want certain people see my website.", "I’d like to hide my website from appearing in search results.", "I would purchase Premium to hide my site or control who can see it."],
                    NEXT_STEPS: []
                },
                eX = "I’m not really interested in this feature.";

            function eZ(e) {
                let {
                    onDismiss: t,
                    onSubmit: s,
                    feature: n,
                    ...a
                } = e, [r, l] = (0, h.useState)([]), o = (0, h.useMemo)(() => r.includes(eX), [r]), d = async () => {
                    s({
                        reasons: r,
                        type: n
                    })
                };
                return (0, i.jsx)(e_.Vq, {
                    size: "md",
                    onDismiss: t,
                    ...a,
                    children: (0, i.jsxs)("div", {
                        className: "space-y-6",
                        children: [(0, i.jsxs)("div", {
                            className: "space-y-3",
                            children: [(0, i.jsx)(e_.fK, {
                                children: (0, i.jsx)(e_.$N, {
                                    children: "Could you help us build this feature?"
                                })
                            }), (0, i.jsx)("p", {
                                className: "text-graphite-40",
                                children: "It’s not live yet — but you can help us make it better if we release it."
                            })]
                        }), (0, i.jsx)(q.b, {
                            intent: "neutral",
                            children: "Check the statements you agree with to give us feedback."
                        }), (0, i.jsxs)("div", {
                            children: [eU[n].map(e => (0, i.jsx)(ez.X, {
                                label: e,
                                disabled: o,
                                value: r.includes(e),
                                onChange: t => {
                                    let s = r.filter(e => e !== eX);
                                    l(t ? [...s, e] : s.filter(t => t !== e))
                                }
                            }, e)), (0, i.jsx)(ez.X, {
                                label: eX,
                                onChange: e => {
                                    e ? l([eX]) : l([])
                                },
                                value: o
                            })]
                        }), (0, i.jsx)("span", {
                            className: "-mx-6 block h-px w-[calc(100%+48px)] bg-graphite-10"
                        }), (0, i.jsxs)("div", {
                            className: "flex items-start justify-between",
                            children: [(0, i.jsx)(eI.k, {
                                size: "lg",
                                className: "w-[212px]",
                                onClick: t,
                                children: "Close"
                            }), (0, i.jsx)(eT.K, {
                                onClick: d,
                                size: "lg",
                                className: "w-[212px]",
                                disabled: 0 === r.length,
                                children: "Send feedback"
                            })]
                        })]
                    })
                })
            }
            let eK = (0, h.createContext)({}),
                eV = {
                    ANALYTICS: "REASONS",
                    PRIVACY_SETTINGS: "REASONS",
                    NEXT_STEPS: "NO_FEEDBACK"
                };

            function eW(e) {
                let {
                    children: t
                } = e, [s, n] = (0, h.useState)(null), a = (0, h.useRef)(null), {
                    mutate: r
                } = et.SX.useMutation("FakeDoorResult.create"), l = (0, h.useMemo)(() => ({
                    showDialog: e => {
                        a.current = e, n(eV[e])
                    }
                }), []);
                return (0, i.jsxs)(eK.Provider, {
                    value: l,
                    children: [t, "REASONS" === s && a.current && (0, i.jsx)(eZ, {
                        feature: a.current,
                        onSubmit: e => {
                            r(e), n("THANKS")
                        },
                        onDismiss: () => n(null)
                    }), "NO_FEEDBACK" === s && (0, i.jsx)(Q.f, {
                        content: (0, i.jsxs)("p", {
                            className: "text-[#7C7B89]",
                            children: ["This feature isn’t live yet. We’re currently just tracking how many of you would like to use it. ", (0, i.jsx)("br", {}), " Thank you for your understanding. \uD83D\uDC8C"]
                        }),
                        title: "Oops! You’ve caught us this time.",
                        yesText: "Close",
                        onYes: () => {
                            r({
                                type: "NEXT_STEPS",
                                reasons: ["clicked"]
                            }), n(null)
                        }
                    }), "THANKS" === s && (0, i.jsx)(Q.f, {
                        content: (0, i.jsxs)(i.Fragment, {
                            children: ["You’ve made it a lot easier to design this feature. ", (0, i.jsx)("br", {}), "Thanks for your feedback!"]
                        }),
                        title: "You've made ".concat(eM.sG, " better!"),
                        yesText: "Close",
                        onYes: () => n(null)
                    })]
                })
            }
            var eY = s(39479),
                eJ = s(75977),
                eH = s(36817),
                eq = s.n(eH),
                eQ = s(51089);
            let e$ = eM.Ab ? ["#d0cbff", "#b2aaff", "#9a90fd", "#584fe8", "#5436cb", "#442ca5"] : ["#fef3c7", "#fde68a", "#fcd34d", "#fbbf24", "#f59e0b", "#cd7715"];

            function e0(e) {
                let {
                    delay: t = 500
                } = e, [s, n] = (0, h.useState)(!1);
                (0, h.useEffect)(() => {
                    let e = setTimeout(() => {
                        n(!0)
                    }, t);
                    return () => clearTimeout(e)
                }, [t]);
                let a = (0, h.useMemo)(() => eQ.Jl ? {
                    w: window.innerWidth + 40,
                    h: window.innerHeight + 40,
                    x: -20,
                    y: -20
                } : void 0, []);
                return a && s ? (0, i.jsx)(eq(), {
                    numberOfPieces: 500,
                    tweenDuration: 100,
                    initialVelocityX: 6,
                    initialVelocityY: 15,
                    recycle: !1,
                    confettiSource: a,
                    colors: e$,
                    style: {
                        zIndex: 102
                    }
                }) : null
            }
            var e1 = s(60710),
                e2 = s(97847),
                e5 = s(66611),
                e6 = s(18927),
                e8 = s(81380);

            function e4() {
                var e;
                return JSON.parse(null !== (e = localStorage.getItem(eM.dA.SEEN_FEATURES)) && void 0 !== e ? e : "[]")
            }

            function e9() {
                for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                let i = new Set([...e4(), ...t]);
                localStorage.setItem(eM.dA.SEEN_FEATURES, JSON.stringify([...i]))
            }

            function e3(e) {
                let {
                    flow: t,
                    onDismiss: s
                } = e, [n, a] = (0, h.useState)([]), [r, l] = (0, h.useState)(0), o = (0, e2.$)(), d = (0, e8.W)(o).data, c = (0, h.useMemo)(() => {
                    var e;
                    let s = null !== (e = t.match(/free-trial\.(\d+)-days-left/)) && void 0 !== e ? e : [];
                    return {
                        daysLeft: s[1] ? Number.parseInt(s[1], 10) : eJ.pu,
                        newUser: t.endsWith("started.new")
                    }
                }, [t]);
                (0, h.useEffect)(() => {
                    if ("premium" === t && (a(e5.ls), (0, m.w)({
                            event: "startedPremiumFlow"
                        })), "new-features" === t) {
                        let e = e4();
                        a(e5.tD.filter(t => {
                            var s, i;
                            return !e.includes(t.id) && (null === (i = null === (s = t.customShouldShow) || void 0 === s ? void 0 : s.call(t, d)) || void 0 === i || i)
                        })), setTimeout(() => {
                            e9(...e5.tD.map(e => e.id))
                        }, 5e3)
                    }
                    if (t.startsWith("free-trial")) {
                        let e = e4(),
                            {
                                daysLeft: s,
                                newUser: i
                            } = c,
                            n = t.includes("days-left") ? "free-trial.days-left" : t;
                        if (e.includes(n)) return;
                        if (t.endsWith(".premium")) {
                            a(e6.ys);
                            return
                        }
                        if (t.endsWith(".started")) {
                            a(i ? e5.vn : e5.vn.filter(e => ["welcome", "preview", "publishing"].includes(e.id)));
                            return
                        }
                        if (t.endsWith(".ended")) {
                            a([e6.sV]);
                            return
                        }
                        t.includes("days-left") && a([{ ...e6.ZA,
                            title: "".concat(s, " days left on your Free trial!")
                        }]), e9(n)
                    }
                }, [d, t]);
                let u = () => {
                        "new-features" === t && e9(...e5.tD.map(e => e.id)), "premium" === t && (0, m.w)({
                            event: "cancelledPremiumFlow",
                            activeSlide: r
                        }), t.startsWith("free-trial") && ((0, m.w)({
                            event: "cancelledWelcomeFlow",
                            activeSlide: r
                        }), e9(t.includes("days-left") ? "free-trial.days-left" : t)), null == s || s()
                    },
                    p = n[r];
                return p ? "position" in p ? (0, i.jsx)(eY.fC, {
                    defaultOpen: !0,
                    children: (0, i.jsx)(eY.h_, {
                        children: (0, i.jsxs)("div", {
                            className: "fixed inset-0 z-[100] flex animate-fade-in justify-center",
                            children: [(0, i.jsx)(eY.aV, {
                                forceMount: !0,
                                className: "fixed inset-0 z-30 bg-darken-regular"
                            }), (0, i.jsx)(e1.P, {
                                step: r,
                                features: n,
                                onChangeStep: l,
                                onSkip: u
                            })]
                        })
                    })
                }) : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(e1.X, {
                        step: r,
                        theme: eM.Ab || "premium" === t || t.includes("free-trial") ? "dark" : "light",
                        features: n.map((e, t) => {
                            var s;
                            return { ...e,
                                buttonText: null !== (s = e.buttonText) && void 0 !== s ? s : n.length > 1 && 0 === t ? "Tell me more" : t === n.length - 1 ? "Check it out" : "Next"
                            }
                        }),
                        onChangeStep: e => {
                            l(e), e === n.length && "premium" === t && (0, m.w)({
                                event: "finishedPremiumFlow"
                            })
                        },
                        onSkip: () => {
                            null == u || u()
                        }
                    }), "premium" === t && (0, i.jsx)(e0, {})]
                }) : null
            }
            var e7 = s(72757),
                te = s(37370),
                tt = s(77976);

            function ts() {
                var e;
                let {
                    mutate: t
                } = (0, te.e)(), {
                    data: s
                } = (0, tt.M)(["PRODUCT_EXISTING_USER_LOGIN", "PRODUCT_FIRST_PROJECT_PUBLISH"]), a = (e, s, i) => {
                    t({
                        rating: e,
                        feedback: s,
                        trigger: i
                    })
                };
                return (0, i.jsx)(e7.B, {
                    isOpen: null !== (e = (null == s ? void 0 : s.showOverlay) && !n.Ab) && void 0 !== e && e,
                    onSend: (e, t) => {
                        var i;
                        return a(e, t, null !== (i = null == s ? void 0 : s.trigger) && void 0 !== i ? i : "PRODUCT_EXISTING_USER_LOGIN")
                    },
                    onClose: () => {
                        var e;
                        return a(null, "CLOSED_BY_USER", null !== (e = null == s ? void 0 : s.trigger) && void 0 !== e ? e : "PRODUCT_EXISTING_USER_LOGIN")
                    }
                })
            }
            var ti = s(62202),
                tn = s(28674),
                ta = s(60460),
                tr = s(78253),
                tl = s(17531);

            function to(e) {
                let {
                    pageId: t,
                    siteId: s
                } = e, a = (0, c.useRouter)(), r = (0, tl.q)(t).data, l = (0, tr.b)(t).data, o = (0, ta.B)(s).data, d = l.filter(e => e.id !== t && !["NAVIGATION", "PROJECT_GRID", "BLOG"].includes(e.type)), u = o.filter(e => !e.published && e.parentSectionId), [p, x] = h.useState(new Set(["init"]));

                function m(e) {
                    x(t => new Set(t.add(e)))
                }
                let f = new Set(l.filter(e => "PROJECT_GRID" === e.type).map(e => e.id)),
                    g = o.filter(e => "PROJECT" === e.type && e.parentSectionId && f.has(e.parentSectionId) && e.published),
                    b = u.filter(e => e.parentSectionId && f.has(e.parentSectionId)),
                    j = new Set(l.filter(e => "BLOG" === e.type).map(e => e.id)),
                    v = o.filter(e => e.parentSectionId && j.has(e.parentSectionId) && e.published);
                return h.useEffect(() => {
                    x(new Set(Object.keys(eF.getCookies()).filter(e => e.includes("_NOTIFICATION_CLOSED_")).map(e => e.split("_NOTIFICATION_CLOSED_")[1])))
                }, []), h.useEffect(() => {
                    a.events.on("routeChangeStart", () => {
                        eF.setCookie("".concat(n.sG.toUpperCase(), "_ALREADY_VISITED_").concat(r.slug), !0, {
                            expires: (0, eL.EE)(Date.now(), {
                                days: 14
                            })
                        })
                    })
                }, [r]), h.useEffect(() => (!(b.length > 2) || p.has("DRAFT_PROJECTS") || p.has("init") || ti.Am.custom((0, i.jsxs)(tn.P_, {
                    id: "DRAFT_PROJECTS",
                    onClose: () => {
                        m("DRAFT_PROJECTS")
                    },
                    children: [(0, i.jsx)(tn.k3, {
                        title: "You have ".concat(b.length, " draft project").concat(b.length > 1 ? "s" : "")
                    }), (0, i.jsx)(tn.UX, {
                        text: "Draft projects are not visible on the live site. Publish them first to share."
                    })]
                }), {
                    duration: Number.POSITIVE_INFINITY,
                    id: "projectPublishNotification"
                }), () => {
                    ti.Am.dismiss("projectPublishNotification")
                }), [b]), h.useEffect(() => (j.size > 0 && 0 === v.length && 0 === d.length && 0 === g.length && !p.has("EMPTY_BLOG") && eF.getCookie("".concat(n.sG.toUpperCase(), "_ALREADY_VISITED_").concat(r.slug)) && !p.has("init") && (ti.Am.dismiss("projectPublishNotification"), ti.Am.custom((0, i.jsxs)(tn.P_, {
                    id: "EMPTY_BLOG",
                    onClose: () => {
                        m("EMPTY_BLOG")
                    },
                    children: [(0, i.jsx)(tn.k3, {
                        title: "Your blog is not live yet"
                    }), (0, i.jsx)(tn.UX, {
                        text: "Publish your first blog post or delete this page if you won’t need it."
                    })]
                }), {
                    duration: Number.POSITIVE_INFINITY,
                    id: "emptyBlogNotification"
                })), () => {
                    ti.Am.dismiss("emptyBlogNotification")
                }), [r, v, d, g]), null
            }
            var td = s(88285),
                tc = s(98871),
                tu = s(38610),
                th = s(16203),
                tp = s(12998);

            function tx(e) {
                let {
                    onDismiss: t,
                    ...s
                } = e;
                return (0, i.jsxs)(e_.Vq, {
                    size: "sm",
                    onDismiss: t,
                    ...s,
                    children: [(0, i.jsx)(e_.UZ, {
                        children: eM.Ab ? (0, i.jsx)(tp.Z, {
                            "aria-hidden": !0,
                            className: "h-55.5"
                        }) : (0, i.jsx)(th.Z, {
                            "aria-hidden": !0,
                            className: "h-55.5"
                        })
                    }), (0, i.jsxs)(e_.cZ, {
                        className: "text-center",
                        children: [(0, i.jsx)(e_.$N, {
                            children: "Works best on desktop."
                        }), (0, i.jsx)("p", {
                            children: "Our editor’s a little picky and prefers desktops. But it’s up to you…"
                        })]
                    }), (0, i.jsx)(e_.kX, {
                        children: (0, i.jsx)(eT.K, {
                            size: "lg",
                            className: "col-span-full",
                            onClick: t,
                            children: "Continue anyway"
                        })
                    })]
                })
            }
            var tm = s(97512);

            function tf() {
                var e;
                let t = null === (e = (0, tm.G)("not screen, (min-width: 1024px)")) || void 0 === e || e,
                    [s, n] = h.useState(!1);
                return h.useEffect(() => {
                    t || eQ.Ts || n(!0)
                }, [t]), s ? (0, i.jsx)(tx, {
                    onDismiss: () => {
                        n(!1)
                    }
                }) : null
            }
            var tg = s(37299),
                tb = s(51620),
                tj = s(12700),
                tv = s(37697),
                ty = s(16506),
                tN = s(28104),
                tS = s(93536),
                tw = s(62781);

            function tE(e) {
                let {
                    siteId: t,
                    pageId: s,
                    pastDueInvoiceUrl: r,
                    initialShowcaseFlow: o,
                    panel: p,
                    action: x
                } = e, v = (0, e8.W)(t).data, y = (0, tl.q)(s).data, N = (0, tr.b)(s).data, S = (0, tS.P)().data, {
                    isVisibleOnEditor: w
                } = (0, tN.X)(), {
                    count: E
                } = (0, b.G)(), k = h.useRef(!0);
                h.useEffect(() => {
                    k.current ? k.current = !1 : (0, m.w)({
                        event: "navigateToEditablePage",
                        pageType: y.type
                    })
                }, [s, y.type]);
                let C = (0, ty.R)(),
                    {
                        mutate: T
                    } = (0, tv.g)(),
                    [I, _] = h.useState(!!r),
                    [O, P] = (0, a.KO)(eR.W),
                    D = (0, eG.c)(),
                    [A, G] = h.useState(!0),
                    R = (0, c.useRouter)(),
                    B = h.useMemo(() => !w && "BLOG_POST" === y.type && !N.some(e => "BLOGPOST_CONTENT" === e.type), [y.type, N, w]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(l(), {
                        children: (0, i.jsx)("meta", {
                            name: "theme-color",
                            content: "#1c1b1f"
                        })
                    }), (0, i.jsx)(tw.J, {
                        rootClassName: "section-wrapper"
                    }), (0, i.jsx)(u.PB, {
                        noindex: !0,
                        title: "Edit your website",
                        description: "Add projects, pages and customize your website."
                    }), (0, i.jsx)(to, {
                        pageId: s,
                        siteId: t
                    }), (0, i.jsxs)("div", {
                        className: "flex h-screen flex-col",
                        children: [(0, i.jsxs)(eE.K, {
                            children: [(0, i.jsx)(eE.K.Button, {
                                dark: !0,
                                icon: (0, i.jsx)(Y.Z, {
                                    "aria-hidden": !0,
                                    className: "h-6"
                                }),
                                "aria-label": "Toggle design sidebar",
                                "aria-controls": "sidebar-design",
                                "aria-expanded": "DESIGN" === O,
                                "data-testid": "design-sidebar-opener",
                                "data-editor-header-button": "design",
                                onClick: () => {
                                    D(() => {
                                        P("DESIGN" !== O ? "DESIGN" : null)
                                    })
                                },
                                children: "Design"
                            }), (0, i.jsx)(eE.K.Button, {
                                dark: !0,
                                icon: (0, i.jsx)(W.Z, {
                                    "aria-hidden": !0,
                                    className: "h-6"
                                }),
                                "aria-label": "Toggle settings sidebar",
                                "aria-controls": "sidebar-settings",
                                "aria-expanded": "SETTINGS" === O,
                                "data-testid": "settings-sidebar-opener",
                                "data-editor-header-button": "settings",
                                onClick: () => {
                                    D(() => {
                                        P("SETTINGS" !== O ? "SETTINGS" : null)
                                    })
                                },
                                children: "Settings"
                            }), !n.Ab && (0, i.jsx)(eE.K.Button, {
                                dark: !0,
                                as: d(),
                                href: "/branding",
                                icon: (0, i.jsx)(f.cd, {
                                    "aria-hidden": !0,
                                    className: "h-6"
                                }),
                                "aria-label": "Open branding page",
                                "data-testid": "branding-page-opener",
                                isNew: !0,
                                onClick: () => {
                                    (0, m.w)({
                                        event: "clickBrandingHeaderButton",
                                        plan: S
                                    })
                                },
                                children: "Branding"
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "relative z-0 flex min-h-0 flex-auto",
                            children: [(0, i.jsx)(eB, {
                                initialPanel: p,
                                initialAction: x
                            }), (0, i.jsxs)("main", {
                                className: "flex-auto",
                                children: [(0, i.jsx)(tn.Il, {
                                    topNavOffset: !0
                                }), (0, i.jsx)(ek.V, {
                                    pageId: s,
                                    children: (0, i.jsx)("div", {
                                        className: "min-h-full",
                                        children: (0, i.jsx)(tu.T, {
                                            editable: !0,
                                            VideoGallery: eS,
                                            Navigation: em,
                                            Collage: eo,
                                            LegacyCover: ep,
                                            Cover: ed,
                                            InstagramFeed: ew,
                                            Hero: eh,
                                            LogoWall: ex,
                                            ProjectGrid: ef,
                                            ProjectHero: eg,
                                            Services: eb,
                                            Subheading: ev,
                                            TextAroundMedia: ey,
                                            CV: ec,
                                            Blog: er,
                                            BlogPostHero: el,
                                            Divider: eu,
                                            SmartSection: ej,
                                            BlogPostContent: eN
                                        })
                                    })
                                }), (0, i.jsxs)(j.J.Root, {
                                    position: "bottom",
                                    children: [(0, i.jsx)(j.J.Item, {
                                        position: "left",
                                        children: (0, i.jsx)(tc.y, {})
                                    }), E > 0 && (0, i.jsx)(j.J.Item, {
                                        position: "right",
                                        children: (0, i.jsx)(V, {})
                                    }), !v.hideProductBranding && (0, i.jsx)(j.J.Item, {
                                        position: "right",
                                        children: (0, i.jsx)(td.u, {
                                            as: "span",
                                            onRemove: () => {
                                                if (!C()) {
                                                    (0, m.w)({
                                                        event: "openPricingDialog",
                                                        from: "Branding"
                                                    });
                                                    return
                                                }
                                                T({
                                                    id: t,
                                                    hideProductBranding: !0
                                                })
                                            }
                                        })
                                    }), w && (0, i.jsx)(j.J.Item, {
                                        position: "bottom",
                                        children: (0, i.jsx)(ei.T, {})
                                    }), "PREMIUM" !== S && (0, i.jsx)(j.J.Item, {
                                        position: "bottom",
                                        children: (0, i.jsx)(g, {})
                                    })]
                                }), (0, i.jsx)(ts, {})]
                            })]
                        })]
                    }), I && (0, i.jsx)(eO, {
                        invoiceUrl: r,
                        onDismiss: () => {
                            _(!1)
                        }
                    }), A && (0, i.jsx)(e3, {
                        flow: o,
                        onDismiss: () => {
                            G(!1), window.history.replaceState(null, "", R.asPath.split("?")[0])
                        }
                    }), B && (0, i.jsx)("div", {
                        className: "absolute inset-x-0 bottom-0",
                        children: (0, i.jsx)(es, {})
                    })]
                })
            }
            var tk = !0;

            function tC(e) {
                let {
                    siteId: t,
                    pageId: s,
                    ...n
                } = e;
                return (0, i.jsx)(e2.e, {
                    value: t,
                    children: (0, i.jsx)(ee.T, {
                        value: s,
                        children: (0, i.jsx)(b.f, {
                            children: (0, i.jsx)(tb.K, {
                                children: (0, i.jsxs)(tj.sG, {
                                    children: [(0, i.jsx)(eW, {
                                        children: (0, i.jsx)(tE, {
                                            siteId: t,
                                            pageId: s,
                                            ...n
                                        })
                                    }), (0, i.jsx)(O, {}), (0, i.jsx)(tf, {}), (0, i.jsx)(eG.g, {}), (0, i.jsx)(tg.s, {})]
                                })
                            })
                        })
                    })
                })
            }
        },
        72757: function(e, t, s) {
            "use strict";
            s.d(t, {
                B: function() {
                    return N
                }
            });
            var i = s(52322),
                n = s(61463),
                a = s(86882),
                r = s(23617),
                l = s(66865),
                o = s(88241),
                d = s(2784);

            function c(e) {
                let {
                    emoji: t,
                    className: s,
                    onClick: a,
                    as: r = "div",
                    isActive: o
                } = e, d = "button" === r ? l.E.button : r;
                return (0, i.jsx)(d, {
                    className: (0, n.Z)("flex items-center justify-center rounded-full border-2 p-4 text-center", s, {
                        "hover:bg-graphite-10": "button" === r && !o
                    }),
                    type: "button" === r ? "button" : void 0,
                    onClick: a,
                    ..."button" === r ? {
                        whileHover: {
                            scale: 1.05,
                            backgroundColor: o ? "#fff" : "rgb(220, 220, 220)"
                        },
                        whileTap: {
                            scale: .95
                        },
                        transition: {
                            scale: {
                                type: "spring",
                                stiffness: 400,
                                damping: 17
                            },
                            duration: .2
                        },
                        animate: {
                            backgroundColor: o ? "#fff" : "#F7F7F8",
                            boxShadow: o ? "0px 4px 16px 0px rgba(18, 17, 24, 0.16)" : "none",
                            borderColor: o ? "#1C1B1F" : "transparent",
                            scale: o ? 1.05 : 1
                        }
                    } : {},
                    children: (0, i.jsx)("span", {
                        className: "h-5 w-5 text-xl",
                        children: t
                    })
                })
            }

            function u(e) {
                let {
                    children: t,
                    className: s,
                    onChange: a,
                    value: r
                } = e;
                return (0, i.jsx)("div", {
                    className: (0, n.Z)("flex items-center justify-center gap-4", s),
                    children: d.Children.map(t, e => d.isValidElement(e) ? d.cloneElement(e, { ...e.props,
                        isActive: e.props.emoji === r,
                        onClick: () => a(e.props.emoji)
                    }) : e)
                })
            }

            function h(e) {
                return (0, i.jsx)("button", { ...e,
                    type: "button",
                    className: (0, n.Z)("box-border rounded py-3 text-buttonPrimary transition-all duration-200 ease-in-out", e.className)
                })
            }

            function p(e) {
                return (0, i.jsx)(h, { ...e,
                    className: (0, n.Z)("rounded-xl bg-shadowmoss px-6 py-3 font-medium text-graphite-0 transition-transform ease-out hover:scale-[102%] ", e.className)
                })
            }

            function x(e) {
                return (0, i.jsx)(h, { ...e,
                    className: "h-12 bg-buttonPrimaryGradientLanding px-4 font-medium text-graphite-0 shadow-buttonPrimaryLanding hover:-mt-0.5 hover:mb-0.5 hover:brightness-125"
                })
            }

            function m(e) {
                return a.Ab ? (0, i.jsx)(x, { ...e
                }) : (0, i.jsx)(p, { ...e
                })
            }
            u.Item = e => (0, i.jsx)(c, { ...e,
                as: "button"
            });
            var f = s(31260),
                g = s(36489),
                b = s(29769),
                j = s(93924);
            let v = [{
                emoji: "\uD83D\uDE20",
                value: 1
            }, {
                emoji: "\uD83D\uDE15",
                value: 2
            }, {
                emoji: "\uD83D\uDE10",
                value: 3
            }, {
                emoji: "\uD83D\uDE0A",
                value: 4
            }, {
                emoji: "\uD83D\uDE0D",
                value: 5
            }];

            function y(e) {
                let {
                    emoji: t
                } = e, s = (0, d.useRef)(null), [n, a] = (0, d.useState)(0);
                (0, r.L)(() => {
                    s.current && a(s.current.offsetWidth)
                }, []);
                let o = (0, d.useMemo)(() => Array.from({
                    length: 20
                }, (e, t) => ({
                    id: t,
                    x: n * (-.1 + 1.2 * Math.random())
                })), [n]);
                return (0, i.jsx)("div", {
                    ref: s,
                    className: "pointer-events-none absolute -z-10 h-full w-full overflow-hidden rounded-lg",
                    children: (0, i.jsx)("div", {
                        className: "relative h-full w-full",
                        children: o.map(e => {
                            let {
                                id: s,
                                x: n
                            } = e;
                            return (0, i.jsx)(l.E.div, {
                                className: "absolute text-3xl opacity-20",
                                initial: {
                                    bottom: 0,
                                    x: n
                                },
                                animate: {
                                    bottom: "100%",
                                    x: [n, n + (80 * Math.random() - 40), n + (80 * Math.random() - 40)],
                                    opacity: [0, .6, 0]
                                },
                                transition: {
                                    duration: 1.3 * Math.random() + .5,
                                    ease: "easeOut",
                                    delay: .3 + .1 * Math.random(),
                                    x: {
                                        duration: 3 + 2 * Math.random(),
                                        times: [0, .5, 1],
                                        ease: "easeInOut"
                                    }
                                },
                                children: t
                            }, "".concat(t, "-").concat(s))
                        })
                    })
                })
            }

            function N(e) {
                let {
                    onSend: t,
                    onClose: s,
                    isOpen: h,
                    title: p,
                    description: x
                } = e, [N, S] = (0, d.useState)(), [w, E] = (0, d.useState)(), k = !N, [C, T] = (0, d.useState)(!1), {
                    mutate: I
                } = (0, b.i)(), [_] = (0, j.k)(), [O, P] = (0, d.useState)(!1);
                return (0, r.L)(() => {
                    h && (null == _ ? void 0 : _.user) && !_.user.usedFeatures.includes("PRODUCT_FEEDBACK_SURVEY_SHOWN") && I({
                        usedFeatures: [..._.user.usedFeatures, "PRODUCT_FEEDBACK_SURVEY_SHOWN"]
                    })
                }, [h, I, null == _ ? void 0 : _.user]), (0, i.jsx)(o.M, {
                    children: h && (0, i.jsx)(l.E.div, {
                        layout: !0,
                        initial: {
                            x: 400,
                            opacity: 0
                        },
                        animate: {
                            x: 0,
                            opacity: 1
                        },
                        exit: {
                            x: 400,
                            opacity: 0
                        },
                        transition: {
                            type: "spring",
                            damping: 20,
                            stiffness: 300
                        },
                        className: "group fixed bottom-4 right-4 z-notification rounded-lg bg-graphite-0 shadow-soft-lg",
                        children: !O && (0, i.jsx)("div", {
                            className: "relative h-full w-full",
                            children: C ? (0, i.jsxs)("div", {
                                className: "flex flex-col items-center gap-4 p-6",
                                children: [(0, i.jsx)("button", {
                                    type: "button",
                                    onClick: () => P(!0),
                                    className: "absolute right-6 top-6 transition-opacity duration-300",
                                    children: (0, i.jsx)(f.IconX, {
                                        className: "h-5 w-5"
                                    })
                                }), (0, i.jsx)(c, {
                                    emoji: "⭐️",
                                    className: "border-none bg-graphite-5 text-4xl"
                                }), (0, i.jsxs)("div", {
                                    className: "flex w-[312px] flex-col items-center gap-1",
                                    children: [(0, i.jsx)("h4", {
                                        className: "text-2xl font-bold",
                                        children: "Thank you!"
                                    }), (0, i.jsxs)("p", {
                                        className: "text-graphite-40",
                                        children: ["You just made ", a.sG, " better."]
                                    })]
                                })]
                            }) : (0, i.jsxs)(i.Fragment, {
                                children: [N && (0, i.jsx)(y, {
                                    emoji: N
                                }), (0, i.jsxs)("div", {
                                    className: "flex flex-col gap-4 p-6",
                                    children: [(0, i.jsxs)("div", {
                                        className: "flex flex-col gap-1",
                                        children: [(0, i.jsxs)("div", {
                                            className: "flex items-center justify-between",
                                            children: [(0, i.jsx)("h4", {
                                                className: "text-2xl font-bold",
                                                children: null != p ? p : "How is ".concat(a.sG, "?")
                                            }), (0, i.jsx)("button", {
                                                type: "button",
                                                onClick: () => {
                                                    P(!0), s()
                                                },
                                                className: "opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                                                children: (0, i.jsx)(f.IconX, {
                                                    className: "h-5 w-5"
                                                })
                                            })]
                                        }), (0, i.jsxs)("p", {
                                            className: "text-graphite-40",
                                            children: [x, !x && (0, i.jsxs)(i.Fragment, {
                                                children: ["You always come first, ", (0, i.jsx)("br", {}), " so we'd love to know what you think."]
                                            })]
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "flex flex-col gap-2",
                                        children: [(0, i.jsx)(u, {
                                            value: N,
                                            onChange: e => S(e),
                                            children: v.map(e => {
                                                let {
                                                    emoji: t
                                                } = e;
                                                return (0, i.jsx)(u.Item, {
                                                    emoji: t
                                                }, t)
                                            })
                                        }), (0, i.jsxs)("div", {
                                            className: "flex justify-between text-xs font-semibold text-graphite-40",
                                            children: [(0, i.jsx)("span", {
                                                children: "Not a fan"
                                            }), (0, i.jsx)("span", {
                                                children: "Loving it"
                                            })]
                                        })]
                                    }), (0, i.jsx)(o.M, {
                                        children: N && (0, i.jsx)(l.E.div, {
                                            initial: {
                                                opacity: 0,
                                                y: 10
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            exit: {
                                                opacity: 0,
                                                y: -10
                                            },
                                            transition: {
                                                duration: .3
                                            },
                                            children: (0, i.jsx)(g.I, {
                                                placeholder: "Share your feedback (optional)",
                                                className: "w-full",
                                                value: null != w ? w : "",
                                                maxLength: 150,
                                                onChange: e => E(e.target.value)
                                            })
                                        })
                                    }), (0, i.jsx)(m, {
                                        onClick: () => {
                                            var e;
                                            if (!N) return;
                                            let s = null === (e = v.find(e => e.emoji === N)) || void 0 === e ? void 0 : e.value;
                                            s && (t(s, w), T(!0))
                                        },
                                        className: (0, n.Z)("transition-colors", k && "pointer-events-none bg-graphite-5 bg-none text-graphite-20"),
                                        children: "Send"
                                    })]
                                })]
                            })
                        })
                    })
                })
            }
        }
    },
    function(e) {
        e.O(0, [1487, 2812, 1509, 691, 4280, 9097, 3869, 7111, 6424, 752, 5717, 7710, 8883, 3848, 4002, 4266, 6565, 5029, 2251, 162, 8834, 50, 9837, 9240, 5849, 4441, 2884, 8266, 1260, 4037, 8568, 9567, 3060, 2781, 5827, 6956, 550, 3174, 8831, 3490, 8610, 7998, 6179, 2888, 9774, 179], function() {
            return e(e.s = 44290)
        }), _N_E = e.O()
    }
]);