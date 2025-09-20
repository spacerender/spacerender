try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "41c80ecf-2ba2-422b-8596-89c24370a030", e._sentryDebugIdIdentifier = "sentry-dbid-41c80ecf-2ba2-422b-8596-89c24370a030")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9496], {
        36833: function(e) {
            var t;
            t = function() {
                return function(e) {
                    if (e) {
                        var t = function(e) {
                                return [].slice.call(e)
                            },
                            n = 3,
                            a = [],
                            i = null,
                            r = "requestAnimationFrame" in e ? function() {
                                e.cancelAnimationFrame(i), i = e.requestAnimationFrame(function() {
                                    return s(a.filter(function(e) {
                                        return e.dirty && e.active
                                    }))
                                })
                            } : function() {},
                            l = function(e) {
                                return function() {
                                    a.forEach(function(t) {
                                        return t.dirty = e
                                    }), r()
                                }
                            },
                            s = function(e) {
                                e.filter(function(e) {
                                    return !e.styleComputed
                                }).forEach(function(e) {
                                    e.styleComputed = u(e)
                                }), e.filter(p).forEach(h);
                                var t = e.filter(d);
                                t.forEach(c), t.forEach(function(e) {
                                    h(e), o(e)
                                }), t.forEach(m)
                            },
                            o = function(e) {
                                return e.dirty = 0
                            },
                            c = function(e) {
                                e.availableWidth = e.element.parentNode.clientWidth, e.currentWidth = e.element.scrollWidth, e.previousFontSize = e.currentFontSize, e.currentFontSize = Math.min(Math.max(e.minSize, e.availableWidth / e.currentWidth * e.previousFontSize), e.maxSize), e.whiteSpace = e.multiLine && e.currentFontSize === e.minSize ? "normal" : "nowrap"
                            },
                            d = function(e) {
                                return 2 !== e.dirty || 2 === e.dirty && e.element.parentNode.clientWidth !== e.availableWidth
                            },
                            u = function(t) {
                                var n = e.getComputedStyle(t.element, null);
                                return t.currentFontSize = parseFloat(n.getPropertyValue("font-size")), t.display = n.getPropertyValue("display"), t.whiteSpace = n.getPropertyValue("white-space"), !0
                            },
                            p = function(e) {
                                var t = !1;
                                return !e.preStyleTestCompleted && (/inline-/.test(e.display) || (t = !0, e.display = "inline-block"), "nowrap" !== e.whiteSpace && (t = !0, e.whiteSpace = "nowrap"), e.preStyleTestCompleted = !0, t)
                            },
                            h = function(e) {
                                e.element.style.whiteSpace = e.whiteSpace, e.element.style.display = e.display, e.element.style.fontSize = e.currentFontSize + "px"
                            },
                            m = function(e) {
                                e.element.dispatchEvent(new CustomEvent("fit", {
                                    detail: {
                                        oldValue: e.previousFontSize,
                                        newValue: e.currentFontSize,
                                        scaleFactor: e.currentFontSize / e.previousFontSize
                                    }
                                }))
                            },
                            b = function(e, t) {
                                return function() {
                                    e.dirty = t, e.active && r()
                                }
                            },
                            x = function(e) {
                                return function() {
                                    a = a.filter(function(t) {
                                        return t.element !== e.element
                                    }), e.observeMutations && e.observer.disconnect(), e.element.style.whiteSpace = e.originalStyle.whiteSpace, e.element.style.display = e.originalStyle.display, e.element.style.fontSize = e.originalStyle.fontSize
                                }
                            },
                            f = function(e) {
                                return function() {
                                    e.active || (e.active = !0, r())
                                }
                            },
                            j = function(e) {
                                return function() {
                                    return e.active = !1
                                }
                            },
                            v = function(e) {
                                e.observeMutations && (e.observer = new MutationObserver(b(e, 1)), e.observer.observe(e.element, e.observeMutations))
                            },
                            g = {
                                minSize: 16,
                                maxSize: 512,
                                multiLine: !0,
                                observeMutations: "MutationObserver" in e && {
                                    subtree: !0,
                                    childList: !0,
                                    characterData: !0
                                }
                            },
                            y = null,
                            w = function() {
                                e.clearTimeout(y), y = e.setTimeout(l(2), E.observeWindowDelay)
                            },
                            N = ["resize", "orientationchange"];
                        return Object.defineProperty(E, "observeWindow", {
                            set: function(t) {
                                var n = "".concat(t ? "add" : "remove", "EventListener");
                                N.forEach(function(t) {
                                    e[n](t, w)
                                })
                            }
                        }), E.observeWindow = !0, E.observeWindowDelay = 100, E.fitAll = l(n), E
                    }

                    function S(e, t) {
                        var i = Object.assign({}, g, t),
                            l = e.map(function(e) {
                                var t = Object.assign({}, i, {
                                    element: e,
                                    active: !0
                                });
                                return t.originalStyle = {
                                    whiteSpace: t.element.style.whiteSpace,
                                    display: t.element.style.display,
                                    fontSize: t.element.style.fontSize
                                }, v(t), t.newbie = !0, t.dirty = !0, a.push(t), {
                                    element: e,
                                    fit: b(t, n),
                                    unfreeze: f(t),
                                    freeze: j(t),
                                    unsubscribe: x(t)
                                }
                            });
                        return r(), l
                    }

                    function E(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return "string" == typeof e ? S(t(document.querySelectorAll(e)), n) : S([e], n)[0]
                    }
                }("undefined" == typeof window ? null : window)
            }, e.exports = t()
        },
        22841: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/v/[[...slugs]]", function() {
                return n(12669)
            }])
        },
        90854: function(e, t, n) {
            "use strict";
            n.d(t, {
                $: function() {
                    return p
                }
            });
            var a = n(52322),
                i = n(61463),
                r = n(39097),
                l = n.n(r),
                s = n(10963),
                o = n(97847),
                c = n(395),
                d = n(98395),
                u = n(81380);

            function p(e) {
                var t, n, r;
                let {
                    forceLogo: p
                } = e, h = (0, o.$)(), m = (0, u.W)(h).data, b = (0, d.Z)(h).data, x = (0, c.f)() ? {
                    pathname: "/"
                } : {
                    query: {
                        slugs: [m.slug]
                    }
                };
                return (0, a.jsx)(l(), {
                    href: x,
                    children: (null == b ? void 0 : b.logo) && (m.showLogo || p) ? (0, a.jsx)("div", {
                        className: (0, i.Z)("relative h-8 @tablet:h-10 @laptop:h-12", "lg" === b.logo.preferredSize && "scale-125"),
                        style: {
                            aspectRatio: "".concat(null == b ? void 0 : null === (t = b.logo) || void 0 === t ? void 0 : t.originalWidth, " / ").concat(null == b ? void 0 : null === (n = b.logo) || void 0 === n ? void 0 : n.originalHeight)
                        },
                        children: (0, a.jsx)(s.N, {
                            src: null !== (r = b.logo.src) && void 0 !== r ? r : "",
                            alt: m.menuBrand,
                            layout: "fill",
                            objectFit: "cover",
                            className: "h-full w-auto"
                        })
                    }) : (0, a.jsx)("div", {
                        className: "custom-h3 relative h-8 px-3 py-2 @tablet:h-10 @laptop:h-12",
                        children: m.menuBrand
                    })
                })
            }
        },
        43117: function(e, t, n) {
            "use strict";
            n.d(t, {
                p: function() {
                    return g
                }
            });
            var a = n(52322),
                i = n(40489),
                r = n(2784),
                l = n(68086);

            function s(e) {
                let {
                    children: t
                } = e;
                return (0, a.jsx)("div", {
                    className: "bg-custom-button-rgba/10",
                    children: (0, a.jsx)(l.R, {
                        children: t
                    })
                })
            }

            function o(e) {
                let {
                    children: t
                } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        className: "absolute inset-x-0 top-0 h-84",
                        style: {
                            background: "radial-gradient(90.36% 100% at 0% 0%, rgb(var(--button-color-rgb) / 24%) 0%, rgb(var(--button-color-rgb) / 0%) 100%)"
                        }
                    }), (0, a.jsx)(l.R, {
                        children: t
                    })]
                })
            }
            var c = n(2355);

            function d(e) {
                let {
                    children: t
                } = e;
                return (0, a.jsxs)(c.J, {
                    newGrid: !0,
                    children: [(0, a.jsx)("div", {
                        className: "col-span-full -mx-6",
                        children: t
                    }), (0, a.jsx)("div", {
                        className: "col-span-full h-px bg-custom-accent tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-4"
                    })]
                })
            }

            function u(e) {
                let {
                    children: t
                } = e;
                return (0, a.jsx)(a.Fragment, {
                    children: t
                })
            }
            var p = n(97847),
                h = n(62399),
                m = n(41411),
                b = n(72515),
                x = n(81380),
                f = n(97512);

            function j(e) {
                let {
                    children: t,
                    style: n,
                    size: i,
                    ...l
                } = e, {
                    h1: s,
                    h2: o,
                    h3: c,
                    projectTitle: d,
                    p: u
                } = function(e) {
                    let t = (0, p.$)(),
                        {
                            template: n
                        } = (0, x.W)(t).data,
                        a = (0, f.G)("not screen, (min-width: 640px) and (max-width: 1023px)"),
                        i = (0, f.G)("not screen, (min-width: 1024px)"),
                        {
                            isPdfView: l
                        } = (0, h.Z)();
                    return r.useMemo(() => {
                        let t = b.D3[n].fontSizeSet,
                            r = m.Yb[e];
                        return l ? {
                            h1: t.h1.laptop * r.pdf,
                            h2: t.h2.laptop * r.pdf,
                            h3: t.h3.laptop * r.pdf,
                            projectTitle: t.projectTitle.laptop * r.pdf,
                            p: t.p.laptop * r.pdf
                        } : i ? {
                            h1: t.h1.laptop * r.laptop,
                            h2: t.h2.laptop * r.laptop,
                            h3: t.h3.laptop * r.laptop,
                            projectTitle: t.projectTitle.laptop * r.laptop,
                            p: t.p.laptop * r.laptop
                        } : a ? {
                            h1: t.h1.tablet * r.tablet,
                            h2: t.h2.tablet * r.tablet,
                            h3: t.h3.tablet * r.tablet,
                            projectTitle: t.projectTitle.tablet * r.tablet,
                            p: t.p.tablet * r.tablet
                        } : {
                            h1: t.h1.mobile * r.mobile,
                            h2: t.h2.mobile * r.mobile,
                            h3: t.h3.mobile * r.mobile,
                            projectTitle: t.projectTitle.mobile * r.mobile,
                            p: t.p.mobile * r.mobile
                        }
                    }, [l, i, a, e, n])
                }(i);
                return (0, a.jsx)("div", {
                    style: {
                        "--h1-size": "".concat(s / 16, "rem"),
                        "--h2-size": "".concat(o / 16, "rem"),
                        "--h3-size": "".concat(c / 16, "rem"),
                        "--project-title-size": "".concat(d / 16, "rem"),
                        "--p-size": "".concat(u / 16, "rem"),
                        ...n
                    },
                    ...l,
                    children: t
                })
            }
            var v = n(55530);

            function g(e) {
                var t, n, l, h, m, b;
                let {
                    section: f,
                    title: g,
                    image: y,
                    date: w
                } = e, {
                    blogHero: N
                } = (0, v.m)(), S = (0, p.$)(), E = (0, x.W)(S).data, k = function(e) {
                    switch (e) {
                        case "SIMPLE":
                            return u;
                        case "LINE":
                            return d;
                        case "GRADIENT":
                            return o;
                        case "FILL":
                            return s;
                        default:
                            return r.Fragment
                    }
                }(null !== (m = null === (n = E.sectionSettings) || void 0 === n ? void 0 : null === (t = n.BLOGPOST_HERO) || void 0 === t ? void 0 : t.variant) && void 0 !== m ? m : N.variant), L = null !== (b = null === (h = E.sectionSettings) || void 0 === h ? void 0 : null === (l = h.BLOGPOST_HERO) || void 0 === l ? void 0 : l.fontSize) && void 0 !== b ? b : N.defaultFontSize;
                return (0, a.jsx)(j, {
                    size: L,
                    children: (0, a.jsx)(k, {
                        children: (0, a.jsxs)(c.J, {
                            newGrid: !0,
                            className: "py-12 @tablet:py-14 @laptop:py-18",
                            children: [(0, a.jsxs)("header", {
                                className: "col-span-full space-y-4 @tablet:col-span-6 @tablet:col-start-2 @laptop:col-span-8 @laptop:col-start-4 @laptop:space-y-6",
                                children: [(0, a.jsx)("div", {
                                    children: g
                                }), (0, a.jsx)("div", {
                                    className: "col-span-full",
                                    children: (0, a.jsx)("div", {
                                        className: (0, i.Z)("custom-p flex text-sm font-normal", {
                                            "justify-start": "left" === f.titleAlign,
                                            "justify-center": "center" === f.titleAlign,
                                            "justify-end": "right" === f.titleAlign
                                        }),
                                        children: w
                                    })
                                })]
                            }), y && (0, a.jsx)("div", {
                                className: "col-span-full pt-11 @tablet:col-span-6 @tablet:col-start-2 @laptop:col-span-8 @laptop:col-start-4",
                                children: (0, a.jsx)("div", {
                                    className: "relative aspect-[4/3]",
                                    children: y
                                })
                            })]
                        })
                    })
                })
            }
        },
        37713: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return y
                }
            });
            var a = n(52322),
                i = n(2784),
                r = n(34911),
                l = n(48093),
                s = n(2355),
                o = n(68086);

            function c(e) {
                let {
                    titleAlign: t,
                    children: n
                } = e;
                return (0, a.jsx)("div", {
                    className: "relative w-full bg-custom-button-rgba/5",
                    children: (0, a.jsx)(o.R, {
                        children: (0, a.jsx)(s.J, {
                            newGrid: !0,
                            className: "relative py-18",
                            children: (0, a.jsx)(l.e, {
                                alignment: t,
                                children: n
                            })
                        })
                    })
                })
            }
            var d = n(87526);

            function u(e) {
                let {
                    titleAlign: t,
                    children: n,
                    backgroundImage: i
                } = e;
                return (0, a.jsxs)("div", {
                    className: "relative w-full",
                    children: [!i && (0, a.jsx)("div", {
                        className: "absolute inset-x-0 top-0 h-84",
                        style: {
                            background: "radial-gradient(90.36% 100% at 0% 0%, rgb(var(--button-color-rgb) / 24%) 0%, rgb(var(--button-color-rgb) / 0%) 100%)"
                        }
                    }), (0, a.jsxs)(d.K, {
                        backgroundImage: i,
                        children: [i && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                className: "absolute inset-0 z-0 bg-custom-bg opacity-50"
                            }), (0, a.jsx)("div", {
                                className: "absolute inset-0 z-0 backdrop-blur-lg"
                            })]
                        }), (0, a.jsx)(s.J, {
                            newGrid: !0,
                            className: "relative pb-18 pt-40",
                            children: (0, a.jsx)(l.e, {
                                alignment: t,
                                children: n
                            })
                        })]
                    })]
                })
            }
            var p = n(40489),
                h = n(13254),
                m = n(17531);

            function b(e) {
                let {
                    titleAlign: t,
                    children: n,
                    backgroundImage: i,
                    templateOptions: r
                } = e, o = (0, h.I)(), c = (0, m.q)(o).data, u = (null == r ? void 0 : r.imageOverlayVariant) || "default";
                return (0, a.jsx)(d.K, {
                    backgroundImage: null != i ? i : null == c ? void 0 : c.thumbnail,
                    children: (0, a.jsxs)("div", {
                        className: (0, p.Z)({
                            "bg-graphite-100/50": "dark" === u,
                            "bg-custom-bg/80": "default" === u,
                            "bg-graphite-0/60": "light" === u
                        }),
                        children: [(0, a.jsx)("div", {
                            className: "absolute inset-0 z-0 backdrop-blur-lg"
                        }), (0, a.jsx)(s.J, {
                            newGrid: !0,
                            className: "relative pb-18 pt-40",
                            children: (0, a.jsx)(l.e, {
                                alignment: t,
                                style: "dark" === u ? {
                                    "--h1-color": "#fff",
                                    "--h2-color": "#fff",
                                    "--h3-color": "#fff",
                                    "--h4-color": "#fff",
                                    "--p-color": "#fff"
                                } : {},
                                children: n
                            })
                        })]
                    })
                })
            }

            function x(e) {
                let {
                    titleAlign: t,
                    backgroundImage: n,
                    children: i
                } = e;
                return (0, a.jsx)(d.K, {
                    backgroundImage: n,
                    children: (0, a.jsx)(s.J, {
                        newGrid: !0,
                        className: "py-12 @tablet:py-14 @laptop:py-18",
                        children: (0, a.jsx)(l.e, {
                            alignment: t,
                            children: i
                        })
                    })
                })
            }

            function f(e) {
                let {
                    titleAlign: t,
                    children: n
                } = e;
                return (0, a.jsx)("div", {
                    className: "relative w-full",
                    children: (0, a.jsxs)(s.J, {
                        newGrid: !0,
                        className: "relative space-y-18 pt-18",
                        children: [(0, a.jsx)(l.e, {
                            alignment: t,
                            children: n
                        }), (0, a.jsx)("div", {
                            className: "col-span-full h-[2px] bg-custom-accent @tablet:col-span-6 @tablet:col-start-2 @laptop:col-span-12 @laptop:col-start-2"
                        })]
                    })
                })
            }
            var j = n(55530);

            function v(e) {
                let {
                    titleAlign: t,
                    backgroundImage: n,
                    children: i
                } = e, {
                    navigationStyle: {
                        PROJECT: {
                            isOverlay: r
                        }
                    }
                } = (0, j.m)();
                return (0, a.jsx)("div", {
                    className: "relative w-full",
                    children: (0, a.jsxs)(d.K, {
                        backgroundImage: n,
                        children: [n && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                className: "absolute inset-0 z-0 backdrop-blur-lg"
                            }), (0, a.jsx)("div", {
                                className: "absolute inset-0 z-0 bg-custom-bg opacity-50"
                            })]
                        }), (0, a.jsx)(s.J, {
                            newGrid: !0,
                            className: (0, p.Z)("pb-18", r ? "pt-40" : "pt-18"),
                            children: (0, a.jsx)(l.e, {
                                alignment: t,
                                children: i
                            })
                        })]
                    })
                })
            }
            var g = n(77769);
            let y = i.memo(function(e) {
                let {
                    projectHero: t
                } = (0, j.m)();
                return (0, a.jsx)(g.L, {
                    sectionType: "PROJECT_HERO",
                    children: function(e, t) {
                        switch (e) {
                            case "SIMPLE":
                                return (0, a.jsx)(v, { ...t
                                });
                            case "FILL":
                                return (0, a.jsx)(c, { ...t
                                });
                            case "LINE":
                                return (0, a.jsx)(f, { ...t
                                });
                            case "GRADIENT":
                                return (0, a.jsx)(u, { ...t
                                });
                            case "IMAGE":
                                return (0, a.jsx)(b, { ...t
                                });
                            case "LEGACY":
                                return (0, a.jsx)(x, { ...t
                                });
                            default:
                                return (0, r.pv)(e)
                        }
                    }(t.variant, { ...e,
                        templateOptions: t
                    })
                })
            })
        },
        59941: function(e, t, n) {
            "use strict";
            n.d(t, {
                w: function() {
                    return b
                }
            });
            var a = n(52322),
                i = n(2784),
                r = n(46769),
                l = n(91927),
                s = n(32167),
                o = n(56540),
                c = n(43117),
                d = n(2355),
                u = n(97847),
                p = n(17531),
                h = n(46774),
                m = n(81380);
            let b = i.memo(function(e) {
                    let t = (0, u.$)(),
                        n = (0, m.W)(t).data,
                        i = (0, p.q)(e.pageId).data,
                        l = (0, h.f)(i.parentSectionId).data;
                    return n.template.includes("_LEGACY") ? (0, a.jsx)(x, { ...e
                    }) : (0, a.jsx)(c.p, {
                        section: e,
                        title: (0, a.jsx)(o.iV, {
                            textNodes: {
                                alignment: e.titleAlign,
                                payload: {
                                    type: "doc",
                                    content: [{
                                        type: "heading",
                                        attrs: {
                                            level: 1
                                        },
                                        content: [{
                                            type: "text",
                                            text: i.title
                                        }]
                                    }]
                                }
                            }
                        }),
                        image: e.showForegroundImage ? (0, a.jsx)(s.n, { ...e.foregroundImage,
                            layout: "fill"
                        }) : void 0,
                        date: l ? (0, a.jsx)("p", {
                            className: "w-max",
                            children: (0, r.X)(i.blogPostPublishUnixTimestamp, l.dateFormat)
                        }) : null
                    })
                }, l.AL),
                x = i.memo(function(e) {
                    let t = (0, p.q)(e.pageId).data;
                    return (0, a.jsxs)(d.J, {
                        newGrid: !0,
                        className: "py-12 @tablet:py-14 @laptop:py-18",
                        children: [(0, a.jsx)("div", {
                            className: "col-span-full pb-6",
                            children: (0, a.jsx)("p", {
                                className: "custom-p text-center text-sm font-normal",
                                children: new Date(1e3 * t.blogPostPublishUnixTimestamp).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric"
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: "col-span-full @tablet:col-span-4 @tablet:col-start-3 @laptop:col-span-8 @laptop:col-start-4",
                            children: (0, a.jsx)(o.iV, {
                                textNodes: {
                                    alignment: e.titleAlign,
                                    payload: {
                                        type: "doc",
                                        content: [{
                                            type: "heading",
                                            attrs: {
                                                level: 1
                                            },
                                            content: [{
                                                type: "text",
                                                text: t.title
                                            }]
                                        }]
                                    }
                                }
                            })
                        }), e.showForegroundImage && (0, a.jsx)("div", {
                            className: "col-span-full pt-11 @tablet:col-span-6 @tablet:col-start-2 @laptop:col-span-12 @laptop:col-start-2",
                            children: (0, a.jsx)("div", {
                                className: "relative aspect-[21/9]",
                                children: (0, a.jsx)(s.n, { ...e.foregroundImage,
                                    layout: "fill"
                                })
                            })
                        })]
                    })
                }, l.AL)
        },
        74286: function(e, t, n) {
            "use strict";
            n.d(t, {
                N: function() {
                    return I
                }
            });
            var a = n(52322),
                i = n(25237),
                r = n.n(i),
                l = n(2784),
                s = n(34911),
                o = n(91927),
                c = n(55530);
            let d = r()(async () => n.e(2564).then(n.bind(n, 62564)).then(e => e.LegacyAgendaHeroView), {
                    loadableGenerated: {
                        webpack: () => [62564]
                    }
                }),
                u = r()(async () => n.e(3447).then(n.bind(n, 33447)).then(e => e.LegacyArtboardHeroView), {
                    loadableGenerated: {
                        webpack: () => [33447]
                    }
                }),
                p = r()(async () => n.e(5202).then(n.bind(n, 5202)).then(e => e.LegacyBillboardHeroView), {
                    loadableGenerated: {
                        webpack: () => [5202]
                    }
                }),
                h = r()(async () => n.e(559).then(n.bind(n, 10559)).then(e => e.LegacyJournalHeroView), {
                    loadableGenerated: {
                        webpack: () => [10559]
                    }
                }),
                m = r()(async () => n.e(9628).then(n.bind(n, 72642)).then(e => e.LegacyLetterpressHeroView), {
                    loadableGenerated: {
                        webpack: () => [72642]
                    }
                }),
                b = r()(async () => n.e(3622).then(n.bind(n, 73622)).then(e => e.LegacyTypewriterHeroView), {
                    loadableGenerated: {
                        webpack: () => [73622]
                    }
                }),
                x = r()(async () => n.e(200).then(n.bind(n, 10200)).then(e => e.LegacyAgoraHeroView), {
                    loadableGenerated: {
                        webpack: () => [10200]
                    }
                }),
                f = r()(async () => n.e(3311).then(n.bind(n, 43311)).then(e => e.LegacyPalazzoHeroView), {
                    loadableGenerated: {
                        webpack: () => [43311]
                    }
                }),
                j = r()(async () => n.e(3014).then(n.bind(n, 43014)).then(e => e.LegacyCubicHeroView), {
                    loadableGenerated: {
                        webpack: () => [43014]
                    }
                }),
                v = r()(async () => n.e(6713).then(n.bind(n, 26713)).then(e => e.LegacyChapterHeroView), {
                    loadableGenerated: {
                        webpack: () => [26713]
                    }
                }),
                g = r()(async () => n.e(6134).then(n.bind(n, 36134)).then(e => e.LegacyMuseumHeroView), {
                    loadableGenerated: {
                        webpack: () => [36134]
                    }
                }),
                y = r()(async () => n.e(683).then(n.bind(n, 60683)).then(e => e.MinimalHeroView), {
                    loadableGenerated: {
                        webpack: () => [60683]
                    }
                }),
                w = r()(async () => n.e(7786).then(n.bind(n, 97786)).then(e => e.HeadlineHeroView), {
                    loadableGenerated: {
                        webpack: () => [97786]
                    }
                }),
                N = r()(async () => n.e(5941).then(n.bind(n, 95941)).then(e => e.NarrowHeroView), {
                    loadableGenerated: {
                        webpack: () => [95941]
                    }
                }),
                S = r()(async () => n.e(5481).then(n.bind(n, 45481)).then(e => e.OverlayHeroView), {
                    loadableGenerated: {
                        webpack: () => [45481]
                    }
                }),
                E = r()(async () => n.e(6373).then(n.bind(n, 36373)).then(e => e.SimpleHeroView), {
                    loadableGenerated: {
                        webpack: () => [36373]
                    }
                }),
                k = r()(async () => n.e(8320).then(n.bind(n, 98320)).then(e => e.BlurHeroView), {
                    loadableGenerated: {
                        webpack: () => [98320]
                    }
                }),
                L = r()(async () => n.e(8945).then(n.bind(n, 38945)).then(e => e.PanoramaHeroView), {
                    loadableGenerated: {
                        webpack: () => [38945]
                    }
                }),
                A = r()(async () => n.e(3721).then(n.bind(n, 53721)).then(e => e.WideHeroView), {
                    loadableGenerated: {
                        webpack: () => [53721]
                    }
                }),
                C = r()(async () => n.e(2177).then(n.bind(n, 72177)).then(e => e.TileHeroView), {
                    loadableGenerated: {
                        webpack: () => [72177]
                    }
                }),
                G = r()(async () => n.e(695).then(n.bind(n, 10695)).then(e => e.RectangleHeroView), {
                    loadableGenerated: {
                        webpack: () => [10695]
                    }
                }),
                T = r()(async () => n.e(5051).then(n.bind(n, 5051)).then(e => e.FullHeroView), {
                    loadableGenerated: {
                        webpack: () => [5051]
                    }
                }),
                I = l.memo(function(e) {
                    let {
                        hero: t,
                        preview: {
                            template: n
                        }
                    } = (0, c.m)();
                    switch (t.variant) {
                        case "MINIMAL":
                            return (0, a.jsx)(y, { ...e
                            });
                        case "HEADLINE":
                            return (0, a.jsx)(w, { ...e
                            });
                        case "BLUR":
                            return (0, a.jsx)(k, { ...e
                            });
                        case "FULL":
                            return (0, a.jsx)(T, { ...e
                            });
                        case "NARROW":
                            return (0, a.jsx)(N, { ...e
                            });
                        case "OVERLAY":
                            return (0, a.jsx)(S, { ...e
                            });
                        case "PANORAMA":
                            return (0, a.jsx)(L, { ...e
                            });
                        case "RECTANGLE":
                            return (0, a.jsx)(G, { ...e
                            });
                        case "SIMPLE":
                            return (0, a.jsx)(E, { ...e
                            });
                        case "TILE":
                            return (0, a.jsx)(C, { ...e
                            });
                        case "WIDE":
                            return (0, a.jsx)(A, { ...e
                            });
                        case "LEGACY":
                            return function(e, t) {
                                switch (e) {
                                    case "AGENDA_LEGACY":
                                        return (0, a.jsx)(d, { ...t
                                        });
                                    case "ARTBOARD_LEGACY":
                                        return (0, a.jsx)(u, { ...t
                                        });
                                    case "BILLBOARD_LEGACY":
                                        return (0, a.jsx)(p, { ...t
                                        });
                                    case "JOURNAL_LEGACY":
                                        return (0, a.jsx)(h, { ...t
                                        });
                                    case "LETTERPRESS_LEGACY":
                                        return (0, a.jsx)(m, { ...t
                                        });
                                    case "TYPEWRITER_LEGACY":
                                        return (0, a.jsx)(b, { ...t
                                        });
                                    case "AGORA_LEGACY":
                                        return (0, a.jsx)(x, { ...t
                                        });
                                    case "CUBIC_LEGACY":
                                        return (0, a.jsx)(j, { ...t
                                        });
                                    case "CHAPTER_LEGACY":
                                        return (0, a.jsx)(v, { ...t
                                        });
                                    case "DOWNTOWN":
                                        return (0, a.jsx)(w, { ...t
                                        });
                                    case "MUSEUM_LEGACY":
                                        return (0, a.jsx)(g, { ...t
                                        });
                                    case "PALAZZO_LEGACY":
                                        return (0, a.jsx)(f, { ...t
                                        });
                                    default:
                                        return null
                                }
                            }(n, e);
                        default:
                            return (0, s.pv)(t.variant)
                    }
                }, o.AL)
        },
        14566: function(e, t, n) {
            "use strict";
            n.d(t, {
                T: function() {
                    return b
                }
            });
            var a = n(52322),
                i = n(25237),
                r = n.n(i),
                l = n(2784),
                s = n(91927),
                o = n(57171),
                c = n(11396),
                d = n(97847),
                u = n(60460),
                p = n(10602),
                h = n(90854);
            let m = r()(async () => (await n.e(4043).then(n.bind(n, 24043))).NavigationLayout, {
                    loadableGenerated: {
                        webpack: () => [24043]
                    }
                }),
                b = l.memo(function() {
                    let e = (0, d.$)(),
                        t = (0, u.B)(e).data.filter(e => (0, o.Y)(e) && e.published),
                        {
                            isOverlay: n,
                            paddingSize: i,
                            navigationTextColorOverride: r
                        } = (0, p.b)();
                    return (0, a.jsx)(m, {
                        isOverlay: n,
                        padding: i,
                        textColorOverride: r,
                        brand: (0, a.jsx)(h.$, {}),
                        children: t.length > 1 && t.map(e => (0, a.jsx)(c.b, {
                            page: e
                        }, e.id))
                    })
                }, s.AL)
        },
        27398: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return d
                }
            });
            var a = n(52322),
                i = n(2784),
                r = n(91927),
                l = n(56540),
                s = n(37713),
                o = n(17531),
                c = n(55530);
            let d = i.memo(function(e) {
                var t;
                let {
                    pageId: n,
                    titleAlign: i,
                    backgroundImage: r
                } = e, d = (0, o.q)(n).data, u = null === (t = (0, c.m)().alignmentLock) || void 0 === t ? void 0 : t.projectHero;
                return (0, a.jsx)(s.M, {
                    titleAlign: null != u ? u : i,
                    backgroundImage: r,
                    children: (0, a.jsx)("div", {
                        className: "space-y-text-block",
                        children: (0, a.jsx)(l.iV, {
                            textNodes: {
                                alignment: null != u ? u : i,
                                payload: {
                                    type: "doc",
                                    content: [{
                                        type: "heading",
                                        attrs: {
                                            level: 1
                                        },
                                        content: [{
                                            type: "text",
                                            text: d.title
                                        }]
                                    }]
                                }
                            }
                        })
                    })
                })
            }, r.AL)
        },
        68086: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return o
                }
            });
            var a = n(52322),
                i = n(40489),
                r = n(13254),
                l = n(14309),
                s = n(86408);

            function o(e) {
                var t;
                let {
                    children: n
                } = e, o = (0, r.I)(), c = (0, s.h)("#user-navbar-".concat(o)), {
                    scale: d
                } = (0, l.k)(), u = (null !== (t = null == c ? void 0 : c.height) && void 0 !== t ? t : 0) * (1 / d);
                return (0, a.jsx)("div", {
                    style: {
                        paddingTop: u ? "".concat(u, "px") : void 0
                    },
                    className: (0, i.Z)("pt-18 @tablet:pt-[5rem] @laptop:pt-[8.5rem]"),
                    children: n
                })
            }
        },
        98395: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var a = n(54962);

            function i(e) {
                return a.SX.useQuery(["Brand.findBySiteId", e])
            }
        },
        12669: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSP: function() {
                    return eS
                },
                default: function() {
                    return eE
                }
            });
            var a = n(52322),
                i = n(88883),
                r = n(61463),
                l = n(93556),
                s = n(5632),
                o = n.n(s),
                c = n(2784),
                d = n(63955),
                u = n(16730),
                p = n(27403),
                h = n(9837),
                m = n(31260),
                b = n(86882),
                x = n(35196),
                f = n(11650),
                j = n(98383),
                v = n(63126),
                g = n(14850),
                y = n(30504),
                w = n(98644),
                N = n(48115);

            function S(e) {
                let {
                    onDismiss: t,
                    videoSrc: n,
                    title: i,
                    subtitle: r,
                    buttonText: l
                } = e, s = c.useRef(null);
                return (0, a.jsxs)(N.Vq, {
                    size: "lg",
                    backdropBlur: !0,
                    className: "bg-graphite-0 ring-0",
                    onDismiss: () => {
                        t()
                    },
                    children: [(0, a.jsxs)("div", {
                        className: "relative -m-6 -mb-8 flex h-[373px] items-end justify-center rounded-t-lg bg-graphite-5",
                        children: [(0, a.jsx)("div", {
                            children: (0, a.jsxs)("video", {
                                ref: s,
                                width: "auto",
                                height: "auto",
                                autoPlay: !0,
                                muted: !0,
                                playsInline: !0,
                                className: "rounded-t-lg",
                                children: [(0, a.jsx)("source", {
                                    src: n,
                                    type: "video/".concat(n.split(".")[1])
                                }), (0, a.jsx)("track", {
                                    kind: "captions"
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            className: "absolute right-[26px] top-[26px] flex items-center justify-center",
                            children: (0, a.jsx)(y.h, {
                                growOutside: !0,
                                "aria-label": "Close",
                                onClick: t,
                                children: (0, a.jsx)(m.IconX, {
                                    "aria-hidden": !0,
                                    className: "h-6"
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: "absolute bottom-[16px] left-[26px]",
                            children: (0, a.jsx)(y.h, {
                                growOutside: !0,
                                onClick: () => {
                                    s.current && (s.current.currentTime = 0, s.current.play())
                                },
                                children: (0, a.jsx)(g.Z, {
                                    "aria-hidden": !0,
                                    className: "h-6"
                                })
                            })
                        })]
                    }), (0, a.jsx)("div", {
                        className: "-mx-6 h-px bg-graphite-10"
                    }), (0, a.jsx)("div", {
                        className: "flex flex-col items-center justify-center rounded-b-lg",
                        children: (0, a.jsxs)("div", {
                            className: "flex flex-col items-center justify-center",
                            children: [(0, a.jsx)("h2", {
                                className: "pb-1 font-display tracking-[2%] text-4xl font-bold text-graphite-100",
                                children: i
                            }), (0, a.jsx)("p", {
                                className: "text-graphite-40",
                                children: r
                            }), (0, a.jsx)("div", {
                                className: "pb-4 pt-8",
                                children: (0, a.jsx)(w.K, {
                                    className: "!px-6",
                                    size: "lg",
                                    onClick: () => {
                                        t()
                                    },
                                    children: l
                                })
                            })]
                        })
                    })]
                })
            }
            var E = n(13254),
                k = n(97847),
                L = n(60460),
                A = n(78253),
                C = n(28104),
                G = n(17531);
            let T = {
                draftBlogPost: {
                    id: "DRAFT_PAGE_",
                    title: "This blog post is set to draft.",
                    text: "Set it to public in the edit view to see it live."
                },
                emptyBlog: {
                    id: "EMPTY_BLOG",
                    title: "There is an empty blog section here.",
                    text: "Publish your blog posts or delete this page.",
                    buttonText: "How to publish?"
                },
                draftPages: {
                    id: "DRAFT_PAGES",
                    title: "You have draft blog posts.",
                    text: "Set them to public in the edit view to see them live.",
                    buttonText: "How to publish?"
                }
            };

            function I() {
                let e = (0, k.$)(),
                    t = (0, E.I)(),
                    n = (0, G.q)(t).data,
                    i = (0, A.b)(t).data,
                    r = (0, L.B)(e).data,
                    {
                        isVisibleOnUserSite: l
                    } = (0, C.X)("userSite"),
                    [s, o] = c.useState(!1),
                    [d, u] = c.useState(new Set),
                    h = c.useMemo(() => {
                        let e = new Set(i.filter(e => "BLOG" === e.type).map(e => e.id)),
                            n = r.filter(t => t.parentSectionId && e.has(t.parentSectionId) && t.published),
                            a = i.filter(e => e.id !== t && !["NAVIGATION", "PROJECT_GRID", "BLOG"].includes(e.type));
                        return 0 === n.length && e.size > 0 && 0 === a.length
                    }, [t, i, r]),
                    m = c.useMemo(() => {
                        let e = i.map(e => e.id),
                            t = new Set(r.filter(e => !e.published && e.parentSectionId).map(e => e.parentSectionId));
                        return e.some(e => t.has(e))
                    }, [i, r]),
                    g = c.useCallback(e => !d.has(e), [d]);
                c.useEffect(() => {
                    u(new Set(Object.keys(x.getCookies()).filter(e => e.includes("_ALERT_CLOSED_")).map(e => e.split("_ALERT_CLOSED_")[1])))
                }, []);
                let y = c.useMemo(() => ["PROJECT", "BLOG_POST"].includes(n.type) ? !n.published && g("DRAFT_PAGE_".concat(t)) ? T.draftBlogPost : null : h && g("EMPTY_BLOG") ? T.emptyBlog : m && g("DRAFT_PAGES") ? T.draftPages : null, [g, n.published, n.type, t, m, h]);
                return !y || l ? null : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        className: "relative h-12",
                        children: (0, a.jsx)("div", {
                            className: "fixed top-0 z-20 w-full border-b border-b-graphite-90 dark",
                            children: (0, a.jsx)(j.N, {
                                intent: "neutral",
                                Icon: p._j,
                                textSize: "sm",
                                onDismiss: () => {
                                    var e;
                                    e = "".concat(y.id).concat(y.id.includes("DRAFT_PAGE_") ? n.id : ""), u(t => new Set(t.add(e))), x.setCookie("".concat(b.sG.toUpperCase(), "_ALERT_CLOSED_").concat(e), !0, {
                                        expires: (0, f.EE)(Date.now(), {
                                            days: 14
                                        })
                                    })
                                },
                                children: (0, a.jsxs)("div", {
                                    className: "block tablet:flex tablet:flex-wrap laptop:space-x-2",
                                    children: [(0, a.jsx)("span", {
                                        className: "pr-2 font-bold  tracking-[0.01em] laptop:pr-0",
                                        children: y.title
                                    }), (0, a.jsx)("span", {
                                        className: "hidden pr-2 text-graphite-20 tablet:block laptop:pr-0",
                                        children: y.text
                                    }), y.buttonText && (0, a.jsx)(v.z, {
                                        className: "text-graphite-20 underline hover:text-graphite-10",
                                        onClick: () => o(!0),
                                        children: y.buttonText
                                    })]
                                })
                            })
                        })
                    }), s && (0, a.jsx)(S, {
                        onDismiss: () => o(!1),
                        videoSrc: "/assets/videos/notifications/project-publishing.mp4",
                        title: "Publish your work",
                        subtitle: "Your drafts are hidden to visitors. Publish them first to share.",
                        buttonText: "understood"
                    })]
                })
            }

            function P() {
                let {
                    emergency: e,
                    isVisibleOnUserSite: t
                } = (0, C.X)("userSite"), [n, i] = (0, c.useState)(!0);
                return e && t ? (0, a.jsx)("div", {
                    className: "relative h-12",
                    children: (0, a.jsx)("div", {
                        className: "fixed top-0 z-20 w-full border-b border-b-graphite-90 dark",
                        children: n && (0, a.jsx)(j.N, {
                            Icon: p.b0,
                            intent: "emergency",
                            onDismiss: () => {
                                i(!1)
                            },
                            textSize: "sm",
                            centered: !0,
                            children: null == e ? void 0 : e.messageForUserSiteView
                        })
                    })
                }) : null
            }
            var _ = n(96479),
                O = n(90999),
                z = n(59941),
                R = n(82305),
                V = n(30187),
                F = n(21883),
                D = n(24805),
                H = n(3295),
                B = n(74286),
                M = n(42838),
                W = n(30737),
                J = n(89804),
                Y = n(14566),
                U = n(62769),
                Z = n(27398),
                q = n(45150),
                X = n(33360),
                K = n(89345),
                $ = n(29728),
                Q = n(16264),
                ee = n(34295),
                et = n(36489),
                en = n(97729),
                ea = n.n(en),
                ei = n(45847),
                er = n.n(ei),
                el = n(55351),
                es = n(66558);

            function eo(e) {
                let {
                    seo: t,
                    privacy: n = "PUBLIC"
                } = e;
                return "PUBLIC" !== n ? (0, a.jsxs)(ea(), {
                    children: [(0, a.jsx)("title", {
                        children: t.title
                    }), (0, a.jsx)("meta", {
                        property: "og:title",
                        content: t.title
                    }, "og-title"), (0, a.jsx)("meta", {
                        property: "description",
                        content: t.description
                    }, "description"), (0, a.jsx)("meta", {
                        property: "og:description",
                        content: t.description
                    }, "og-description"), (0, a.jsx)("meta", {
                        name: "robots",
                        content: "noindex"
                    })]
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(er(), {
                        id: "internal-analytics",
                        children: es.c2
                    }), (0, a.jsx)(el.PB, {
                        titleTemplate: "%s",
                        title: t.title
                    }), (0, a.jsxs)(ea(), {
                        children: [(0, a.jsx)("title", {
                            children: t.title
                        }), (0, a.jsx)("meta", {
                            name: "type",
                            property: "og:type",
                            content: "website"
                        }), (0, a.jsx)("meta", {
                            property: "og:title",
                            content: t.title
                        }, "og-title"), (0, a.jsx)("meta", {
                            property: "description",
                            content: t.description
                        }, "description"), (0, a.jsx)("meta", {
                            property: "og:description",
                            content: t.description
                        }, "og-description"), t.image && (0, a.jsx)("meta", {
                            property: "og:image",
                            content: t.image.src
                        }, "image"), (0, a.jsx)("meta", {
                            name: "robots",
                            content: "index,follow"
                        })]
                    })]
                })
            }
            var ec = n(72788),
                ed = n(88285),
                eu = n(38610),
                ep = n(37299),
                eh = n(395),
                em = n(51620),
                eb = n(12700),
                ex = n(72515),
                ef = n(54962),
                ej = n(81380),
                ev = n(62781);

            function eg(e) {
                let {
                    siteId: t,
                    pageId: n,
                    customDomain: i,
                    authorViewing: r,
                    seo: s
                } = e, o = (0, ej.W)(t).data;
                return (0, a.jsx)(k.e, {
                    value: t,
                    children: (0, a.jsx)(E.T, {
                        value: n,
                        children: (0, a.jsx)(eh.d, {
                            value: i,
                            children: (0, a.jsx)(em.K, {
                                children: (0, a.jsx)(ec.us, {
                                    children: (0, a.jsxs)(a.Fragment, {
                                        children: [(0, a.jsx)(ev.J, {
                                            rootClassName: "section-wrapper"
                                        }), (0, a.jsx)(eo, {
                                            seo: s,
                                            privacy: "PUBLIC"
                                        }), (0, a.jsxs)("div", {
                                            className: "flex h-screen flex-col",
                                            children: [r && (0, a.jsxs)(eb.sG, {
                                                children: [(0, a.jsx)(ee.K, {
                                                    preview: !0,
                                                    children: (0, a.jsx)(ee.K.Button, {
                                                        dark: !0,
                                                        as: "a",
                                                        href: "/edit/".concat(o.slug),
                                                        size: "lg",
                                                        icon: (0, a.jsx)(m.IconArrowLeft, {
                                                            className: "size-6 shrink-0"
                                                        }),
                                                        children: (0, a.jsx)("span", {
                                                            className: "text-sm laptop:text-base",
                                                            children: "Back to editing"
                                                        })
                                                    })
                                                }), (0, a.jsx)(ep.s, {})]
                                            }), (0, a.jsx)("div", {
                                                className: "flex-1 overflow-y-auto",
                                                children: (0, a.jsx)(eu.T, {
                                                    announcement: r && (0, a.jsxs)(l.m.div, {
                                                        initial: {
                                                            y: -50
                                                        },
                                                        animate: {
                                                            y: 0
                                                        },
                                                        transition: {
                                                            duration: 1,
                                                            type: "spring",
                                                            stiffness: 40
                                                        },
                                                        children: [r && (0, a.jsx)(I, {}), (0, a.jsx)(P, {})]
                                                    }),
                                                    Navigation: Y.T,
                                                    Collage: V.j,
                                                    LegacyCover: W.k,
                                                    Cover: F.U,
                                                    InstagramFeed: M.V,
                                                    Hero: B.N,
                                                    LogoWall: J.d,
                                                    ProjectGrid: U.x,
                                                    ProjectHero: Z.A,
                                                    Services: q.b,
                                                    Subheading: K.S,
                                                    TextAroundMedia: $.y,
                                                    CV: D.l,
                                                    Blog: R.J,
                                                    BlogPostHero: z.w,
                                                    Divider: H.F,
                                                    SmartSection: X.k,
                                                    BlogPostContent: O.X,
                                                    VideoGallery: Q.M
                                                })
                                            })]
                                        }), (0, a.jsx)(u.J.Root, {
                                            position: "bottom",
                                            children: (0, a.jsx)(u.J.Item, {
                                                position: "right",
                                                children: !o.hideProductBranding && (0, a.jsx)(ed.u, {})
                                            })
                                        })]
                                    })
                                })
                            })
                        })
                    })
                })
            }
            let ey = h.Ry({
                sitePassword: h.Z_()
            });

            function ew(e) {
                let {
                    siteId: t,
                    hideProductBranding: n,
                    seo: r
                } = e, {
                    mutate: s
                } = ef.SX.useMutation("Site.validatePrivacyPassword"), h = (0, d.cI)({
                    resolver: (0, i.F)(ey)
                }), [m, b] = c.useState(!1), {
                    isVisibleOnUserSite: x
                } = (0, C.X)("userSite"), f = h.handleSubmit(e => {
                    s({
                        id: t,
                        password: e.sitePassword
                    }, {
                        onSuccess() {
                            o().reload()
                        },
                        onError() {
                            b(!0)
                        }
                    })
                });
                return (0, a.jsx)(k.e, {
                    value: t,
                    children: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(ev.J, {
                            rootClassName: "section-wrapper"
                        }), (0, a.jsx)(eo, {
                            seo: r,
                            privacy: "PASSWORD_PROTECTED"
                        }), (0, a.jsx)("div", {
                            className: "flex h-screen w-full items-center justify-center",
                            children: (0, a.jsxs)("form", {
                                className: "flex flex-col items-center justify-center space-y-8",
                                onSubmit: f,
                                children: [(0, a.jsx)("h2", {
                                    className: "custom-h2 font-normal",
                                    children: r.title
                                }), (0, a.jsx)(l.m.div, {
                                    animate: m ? {
                                        marginLeft: [0, 16, -16, 0, 16, -16, 0]
                                    } : void 0,
                                    transition: {
                                        duration: .35,
                                        ease: "easeInOut"
                                    },
                                    onAnimationComplete: () => {
                                        b(!1)
                                    },
                                    children: (0, a.jsx)(et.I, {
                                        "aria-label": "Website password",
                                        icon: (0, a.jsx)(p.HE, {
                                            className: "h-6 opacity-50"
                                        }),
                                        rightIcon: (0, a.jsx)(p.ol, {
                                            onClick: f,
                                            className: "h-6 cursor-pointer text-custom-h1"
                                        }),
                                        matchUserSiteColors: !0,
                                        variant: "filled",
                                        rounded: "none",
                                        type: "password",
                                        ...h.register("sitePassword"),
                                        className: "!flex"
                                    })
                                })]
                            })
                        }), (0, a.jsxs)(u.J.Root, {
                            position: "bottom",
                            children: [x && (0, a.jsx)(u.J.Item, {
                                position: "bottom",
                                children: (0, a.jsx)(P, {})
                            }), !n && (0, a.jsx)(u.J.Item, {
                                position: "right",
                                children: (0, a.jsx)(ed.u, {})
                            })]
                        })]
                    })
                })
            }

            function eN(e) {
                var t, n;
                let {
                    seo: i,
                    siteId: l,
                    hideProductBranding: s,
                    authorViewing: o
                } = e, {
                    data: c
                } = (0, ej.W)(l);
                if (!c) return null;
                let d = ex.D3[c.template],
                    p = null !== (n = null === (t = c.buttonStyle) || void 0 === t ? void 0 : t.rounded) && void 0 !== n ? n : d.buttonStyle.rounded;
                return (0, a.jsx)(k.e, {
                    value: l,
                    children: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(ev.J, {
                            rootClassName: "section-wrapper"
                        }), (0, a.jsx)(eo, {
                            seo: i,
                            privacy: "NOT_INDEXED"
                        }), (0, a.jsxs)("div", {
                            className: "flex h-screen w-full flex-col items-center justify-center bg-custom-bg text-custom-h1",
                            children: [(0, a.jsx)("div", {
                                className: "flex flex-1 items-center justify-center",
                                children: (0, a.jsx)("h1", {
                                    className: "custom-h1 text-[32.5px]",
                                    children: i.title
                                })
                            }), (0, a.jsx)("div", {
                                className: "flex-1",
                                children: (0, a.jsxs)("div", {
                                    className: (0, r.Z)("space-y-4 bg-custom-h1-rgba/10 px-20 py-12 text-center", "none" !== p && "rounded-3xl"),
                                    children: [(0, a.jsx)("h2", {
                                        className: "text-[90px] tracking-tighter",
                                        children: "Coming soon"
                                    }), (0, a.jsxs)("p", {
                                        className: "leading-6",
                                        children: ["This site isn’t quite ready yet, but it’ll be ", (0, a.jsx)("br", {}), "live before you know it. Come back soon!"]
                                    })]
                                })
                            }), (0, a.jsx)("div", {
                                className: "flex-1 pt-[52px]",
                                children: o && (0, a.jsx)("a", {
                                    href: "/edit/".concat(null == c ? void 0 : c.slug),
                                    className: "hover:opacity-90 active:scale-95",
                                    children: (0, a.jsx)(_.r, {
                                        className: "pointer-events-none",
                                        value: {
                                            label: "Back to editing ↗",
                                            action: "NAVIGATE_TO_INTERNAL_PAGE",
                                            actionValue: "/"
                                        }
                                    })
                                })
                            })]
                        }), (0, a.jsx)(u.J.Root, {
                            position: "bottom",
                            children: !s && (0, a.jsx)(u.J.Item, {
                                position: "right",
                                children: (0, a.jsx)(ed.u, {})
                            })
                        })]
                    })
                })
            }
            var eS = !0;

            function eE(e) {
                return "soon" === e.coming ? (0, a.jsx)(eN, { ...e
                }) : e.showPasswordPage ? (0, a.jsx)(ew, { ...e
                }) : (0, a.jsx)(eg, { ...e
                })
            }
        },
        23681: function(e, t, n) {
            "use strict";
            n.d(t, {
                fC: function() {
                    return N
                },
                z$: function() {
                    return S
                }
            });
            var a = n(7896),
                i = n(2784),
                r = n(62656),
                l = n(92211),
                s = n(17998),
                o = n(87695),
                c = n(90022),
                d = n(35019),
                u = n(79616),
                p = n(72714);
            let h = "Checkbox",
                [m, b] = (0, l.b)(h),
                [x, f] = m(h),
                j = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeCheckbox: n,
                        name: l,
                        checked: c,
                        defaultChecked: d,
                        required: u,
                        disabled: h,
                        value: m = "on",
                        onCheckedChange: b,
                        ...f
                    } = e, [j, v] = (0, i.useState)(null), N = (0, r.e)(t, e => v(e)), S = (0, i.useRef)(!1), E = !j || !!j.closest("form"), [k = !1, L] = (0, o.T)({
                        prop: c,
                        defaultProp: d,
                        onChange: b
                    }), A = (0, i.useRef)(k);
                    return (0, i.useEffect)(() => {
                        let e = null == j ? void 0 : j.form;
                        if (e) {
                            let t = () => L(A.current);
                            return e.addEventListener("reset", t), () => e.removeEventListener("reset", t)
                        }
                    }, [j, L]), (0, i.createElement)(x, {
                        scope: n,
                        state: k,
                        disabled: h
                    }, (0, i.createElement)(p.WV.button, (0, a.Z)({
                        type: "button",
                        role: "checkbox",
                        "aria-checked": y(k) ? "mixed" : k,
                        "aria-required": u,
                        "data-state": w(k),
                        "data-disabled": h ? "" : void 0,
                        disabled: h,
                        value: m
                    }, f, {
                        ref: N,
                        onKeyDown: (0, s.M)(e.onKeyDown, e => {
                            "Enter" === e.key && e.preventDefault()
                        }),
                        onClick: (0, s.M)(e.onClick, e => {
                            L(e => !!y(e) || !e), E && (S.current = e.isPropagationStopped(), S.current || e.stopPropagation())
                        })
                    })), E && (0, i.createElement)(g, {
                        control: j,
                        bubbles: !S.current,
                        name: l,
                        value: m,
                        checked: k,
                        required: u,
                        disabled: h,
                        style: {
                            transform: "translateX(-100%)"
                        }
                    }))
                }),
                v = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeCheckbox: n,
                        forceMount: r,
                        ...l
                    } = e, s = f("CheckboxIndicator", n);
                    return (0, i.createElement)(u.z, {
                        present: r || y(s.state) || !0 === s.state
                    }, (0, i.createElement)(p.WV.span, (0, a.Z)({
                        "data-state": w(s.state),
                        "data-disabled": s.disabled ? "" : void 0
                    }, l, {
                        ref: t,
                        style: {
                            pointerEvents: "none",
                            ...e.style
                        }
                    })))
                }),
                g = e => {
                    let {
                        control: t,
                        checked: n,
                        bubbles: r = !0,
                        ...l
                    } = e, s = (0, i.useRef)(null), o = (0, c.D)(n), u = (0, d.t)(t);
                    return (0, i.useEffect)(() => {
                        let e = s.current,
                            t = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set;
                        if (o !== n && t) {
                            let a = new Event("click", {
                                bubbles: r
                            });
                            e.indeterminate = y(n), t.call(e, !y(n) && n), e.dispatchEvent(a)
                        }
                    }, [o, n, r]), (0, i.createElement)("input", (0, a.Z)({
                        type: "checkbox",
                        "aria-hidden": !0,
                        defaultChecked: !y(n) && n
                    }, l, {
                        tabIndex: -1,
                        ref: s,
                        style: { ...e.style,
                            ...u,
                            position: "absolute",
                            pointerEvents: "none",
                            opacity: 0,
                            margin: 0
                        }
                    }))
                };

            function y(e) {
                return "indeterminate" === e
            }

            function w(e) {
                return y(e) ? "indeterminate" : e ? "checked" : "unchecked"
            }
            let N = j,
                S = v
        }
    },
    function(e) {
        e.O(0, [1487, 2812, 1509, 691, 4280, 9097, 3869, 7111, 6424, 752, 5717, 7710, 8883, 3848, 4002, 4266, 6565, 5029, 2251, 162, 8834, 50, 9837, 9240, 5849, 4441, 2884, 1260, 4037, 8568, 9567, 3060, 2781, 5827, 6956, 550, 3174, 8831, 3490, 8610, 7998, 6179, 2888, 9774, 179], function() {
            return e(e.s = 22841)
        }), _N_E = e.O()
    }
]);