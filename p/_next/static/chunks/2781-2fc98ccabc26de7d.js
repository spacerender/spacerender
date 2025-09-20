try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d5615ce5-6370-4560-b50d-01327b144b0f", e._sentryDebugIdIdentifier = "sentry-dbid-d5615ce5-6370-4560-b50d-01327b144b0f")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2781], {
        52887: function(e, t, i) {
            i.d(t, {
                h: function() {
                    return r
                }
            });
            var l = i(52322),
                n = i(97729),
                a = i.n(n);
            let g = {
                BITTER: [{
                    file: "bitter_var.woff2",
                    style: "normal",
                    weight: "variable"
                }, {
                    file: "bitter_var_italic.woff2",
                    style: "italic",
                    weight: "variable"
                }],
                BOSKA: [{
                    file: "boska_var.woff2",
                    style: "normal",
                    weight: "variable"
                }, {
                    file: "boska_var_italic.woff2",
                    style: "italic",
                    weight: "variable"
                }],
                CABINET_GROTESK: [{
                    file: "cabinetgrotesk_var.woff2",
                    style: "normal",
                    weight: "variable"
                }],
                CAUDEX: [{
                    file: "caudex_400.woff2",
                    style: "normal",
                    weight: 400
                }, {
                    file: "caudex_400_italic.woff2",
                    style: "italic",
                    weight: 400
                }, {
                    file: "caudex_700.woff2",
                    style: "normal",
                    weight: 700
                }, {
                    file: "caudex_700_italic.woff2",
                    style: "italic",
                    weight: 700
                }],
                CLASH_DISPLAY: [{
                    file: "clashdisplay_var.woff2",
                    style: "normal",
                    weight: "variable"
                }],
                CORMORANT_INFANT: [{
                    file: "cormorantinfant_300.woff2",
                    style: "normal",
                    weight: 300
                }, {
                    file: "cormorantinfant_300_italic.woff2",
                    style: "italic",
                    weight: 300
                }, {
                    file: "cormorantinfant_400.woff2",
                    style: "normal",
                    weight: 400
                }, {
                    file: "cormorantinfant_400_italic.woff2",
                    style: "italic",
                    weight: 400
                }, {
                    file: "cormorantinfant_500.woff2",
                    style: "normal",
                    weight: 500
                }, {
                    file: "cormorantinfant_500_italic.woff2",
                    style: "italic",
                    weight: 500
                }, {
                    file: "cormorantinfant_600.woff2",
                    style: "normal",
                    weight: 600
                }, {
                    file: "cormorantinfant_600_italic.woff2",
                    style: "italic",
                    weight: 600
                }, {
                    file: "cormorantinfant_700.woff2",
                    style: "normal",
                    weight: 700
                }, {
                    file: "cormorantinfant_700_italic.woff2",
                    style: "italic",
                    weight: 700
                }],
                CORMORANT_UPRIGHT: [{
                    file: "cormorantupright_300.woff2",
                    style: "normal",
                    weight: 300
                }, {
                    file: "cormorantupright_400.woff2",
                    style: "normal",
                    weight: 400
                }, {
                    file: "cormorantupright_500.woff2",
                    style: "normal",
                    weight: 500
                }, {
                    file: "cormorantupright_600.woff2",
                    style: "normal",
                    weight: 600
                }, {
                    file: "cormorantupright_700.woff2",
                    style: "normal",
                    weight: 700
                }],
                DM_SERIF_DISPLAY: [{
                    file: "dmserifdisplay_400.woff2",
                    style: "normal",
                    weight: 400
                }, {
                    file: "dmserifdisplay_400_italic.woff2",
                    style: "italic",
                    weight: 400
                }],
                EB_GARAMOND: [{
                    file: "ebgaramond_var.woff2",
                    style: "normal",
                    weight: "variable"
                }, {
                    file: "ebgaramond_var_italic.woff2",
                    style: "italic",
                    weight: "variable"
                }],
                EPILOGUE: [{
                    file: "epilogue_var.woff2",
                    style: "normal",
                    weight: "variable"
                }, {
                    file: "epilogue_var_italic.woff2",
                    style: "italic",
                    weight: "variable"
                }],
                ERODE: [{
                    file: "erode_var.woff2",
                    style: "normal",
                    weight: "variable"
                }, {
                    file: "erode_var_italic.woff2",
                    style: "italic",
                    weight: "variable"
                }],
                GAMBETTA: [{
                    file: "gambetta_var.woff2",
                    style: "normal",
                    weight: "variable"
                }, {
                    file: "gambetta_var_italic.woff2",
                    style: "italic",
                    weight: "variable"
                }],
                GELASIO: [{
                    file: "gelasio_400.woff2",
                    style: "normal",
                    weight: 400
                }, {
                    file: "gelasio_400_italic.woff2",
                    style: "italic",
                    weight: 400
                }, {
                    file: "gelasio_500.woff2",
                    style: "normal",
                    weight: 500
                }, {
                    file: "gelasio_500_italic.woff2",
                    style: "italic",
                    weight: 500
                }, {
                    file: "gelasio_600.woff2",
                    style: "normal",
                    weight: 600
                }, {
                    file: "gelasio_600_italic.woff2",
                    style: "italic",
                    weight: 600
                }, {
                    file: "gelasio_700.woff2",
                    style: "normal",
                    weight: 700
                }, {
                    file: "gelasio_700_italic.woff2",
                    style: "italic",
                    weight: 700
                }],
                GENERAL_SANS: [{
                    file: "generalsans_var.woff2",
                    style: "normal",
                    weight: "variable"
                }, {
                    file: "generalsans_var_italic.woff2",
                    style: "italic",
                    weight: "variable"
                }],
                IBARRA_REAL_NOVA: [{
                    file: "ibarrarealnova_var.woff2",
                    style: "normal",
                    weight: "variable"
                }, {
                    file: "ibarrarealnova_var_italic.woff2",
                    style: "italic",
                    weight: "variable"
                }],
                IBM_PLEX_SANS: [{
                    file: "ibmplexsans_100.woff2",
                    style: "normal",
                    weight: 100
                }, {
                    file: "ibmplexsans_100_italic.woff2",
                    style: "italic",
                    weight: 100
                }, {
                    file: "ibmplexsans_200.woff2",
                    style: "normal",
                    weight: 200
                }, {
                    file: "ibmplexsans_200_italic.woff2",
                    style: "italic",
                    weight: 200
                }, {
                    file: "ibmplexsans_300.woff2",
                    style: "normal",
                    weight: 300
                }, {
                    file: "ibmplexsans_300_italic.woff2",
                    style: "italic",
                    weight: 300
                }, {
                    file: "ibmplexsans_400.woff2",
                    style: "normal",
                    weight: 400
                }, {
                    file: "ibmplexsans_400_italic.woff2",
                    style: "italic",
                    weight: 400
                }, {
                    file: "ibmplexsans_500.woff2",
                    style: "normal",
                    weight: 500
                }, {
                    file: "ibmplexsans_500_italic.woff2",
                    style: "italic",
                    weight: 500
                }, {
                    file: "ibmplexsans_600.woff2",
                    style: "normal",
                    weight: 600
                }, {
                    file: "ibmplexsans_600_italic.woff2",
                    style: "italic",
                    weight: 600
                }, {
                    file: "ibmplexsans_700.woff2",
                    style: "normal",
                    weight: 700
                }, {
                    file: "ibmplexsans_700_italic.woff2",
                    style: "italic",
                    weight: 700
                }],
                INTER: [{
                    file: "inter_var.woff2",
                    style: "normal",
                    weight: "variable"
                }],
                KARLA: [{
                    file: "karla_var.woff2",
                    style: "normal",
                    weight: "variable"
                }, {
                    file: "karla_var_italic.woff2",
                    style: "italic",
                    weight: "variable"
                }],
                KARMA: [{
                    file: "karma_300.woff2",
                    style: "normal",
                    weight: 300
                }, {
                    file: "karma_400.woff2",
                    style: "normal",
                    weight: 400
                }, {
                    file: "karma_500.woff2",
                    style: "normal",
                    weight: 500
                }, {
                    file: "karma_600.woff2",
                    style: "normal",
                    weight: 600
                }, {
                    file: "karma_700.woff2",
                    style: "normal",
                    weight: 700
                }],
                LITERATA: [{
                    file: "literata_var.woff2",
                    style: "normal",
                    weight: "variable"
                }, {
                    file: "literata_var_italic.woff2",
                    style: "italic",
                    weight: "variable"
                }],
                MANROPE: [{
                    file: "manrope_var.woff2",
                    style: "normal",
                    weight: "variable"
                }],
                MARTEL: [{
                    file: "martel_200.woff2",
                    style: "normal",
                    weight: 200
                }, {
                    file: "martel_300.woff2",
                    style: "normal",
                    weight: 300
                }, {
                    file: "martel_400.woff2",
                    style: "normal",
                    weight: 400
                }, {
                    file: "martel_600.woff2",
                    style: "normal",
                    weight: 600
                }, {
                    file: "martel_700.woff2",
                    style: "normal",
                    weight: 700
                }, {
                    file: "martel_800.woff2",
                    style: "normal",
                    weight: 800
                }, {
                    file: "martel_900.woff2",
                    style: "normal",
                    weight: 900
                }],
                MELODRAMA: [{
                    file: "melodrama_var.woff2",
                    style: "normal",
                    weight: "variable"
                }],
                NECO: [{
                    file: "neco_var.woff2",
                    style: "normal",
                    weight: "variable"
                }, {
                    file: "neco_var_italic.woff2",
                    style: "italic",
                    weight: "variable"
                }],
                OVERPASS: [{
                    file: "overpass_var.woff2",
                    style: "normal",
                    weight: "variable"
                }, {
                    file: "overpass_var_italic.woff2",
                    style: "italic",
                    weight: "variable"
                }],
                PLAYFAIR_DISPLAY: [{
                    file: "playfairdisplay_var.woff2",
                    style: "normal",
                    weight: "variable"
                }, {
                    file: "playfairdisplay_var_italic.woff2",
                    style: "italic",
                    weight: "variable"
                }],
                POPPINS: [{
                    file: "poppins_var.woff2",
                    style: "normal",
                    weight: "variable"
                }, {
                    file: "poppins_var_italic.woff2",
                    style: "italic",
                    weight: "variable"
                }],
                RUBIK: [{
                    file: "rubik_var.woff2",
                    style: "normal",
                    weight: "variable"
                }, {
                    file: "rubik_var_italic.woff2",
                    style: "italic",
                    weight: "variable"
                }],
                SATOSHI: [{
                    file: "satoshi_var.woff2",
                    style: "normal",
                    weight: "variable"
                }, {
                    file: "satoshi_var_italic.woff2",
                    style: "italic",
                    weight: "variable"
                }],
                SENTIENT: [{
                    file: "sentient_var.woff2",
                    style: "normal",
                    weight: "variable"
                }, {
                    file: "sentient_var_italic.woff2",
                    style: "italic",
                    weight: "variable"
                }],
                SORA: [{
                    file: "sora_var.woff2",
                    style: "normal",
                    weight: "variable"
                }, {
                    file: "sora_var_italic.woff2",
                    style: "italic",
                    weight: "variable"
                }],
                SOURCE_SERIF_4: [{
                    file: "sourceserif4_var.woff2",
                    style: "normal",
                    weight: "variable"
                }, {
                    file: "sourceserif4_var_italic.woff2",
                    style: "italic",
                    weight: "variable"
                }],
                SPACE_GROTESK: [{
                    file: "spacegrotesk_var.woff2",
                    style: "normal",
                    weight: "variable"
                }],
                SPECTRAL: [{
                    file: "spectral_200.woff2",
                    style: "normal",
                    weight: 200
                }, {
                    file: "spectral_200_italic.woff2",
                    style: "italic",
                    weight: 200
                }, {
                    file: "spectral_300.woff2",
                    style: "normal",
                    weight: 300
                }, {
                    file: "spectral_300_italic.woff2",
                    style: "italic",
                    weight: 300
                }, {
                    file: "spectral_400.woff2",
                    style: "normal",
                    weight: 400
                }, {
                    file: "spectral_400_italic.woff2",
                    style: "italic",
                    weight: 400
                }, {
                    file: "spectral_500.woff2",
                    style: "normal",
                    weight: 500
                }, {
                    file: "spectral_500_italic.woff2",
                    style: "italic",
                    weight: 500
                }, {
                    file: "spectral_600.woff2",
                    style: "normal",
                    weight: 600
                }, {
                    file: "spectral_600_italic.woff2",
                    style: "italic",
                    weight: 600
                }, {
                    file: "spectral_700.woff2",
                    style: "normal",
                    weight: 700
                }, {
                    file: "spectral_700_italic.woff2",
                    style: "italic",
                    weight: 700
                }, {
                    file: "spectral_800.woff2",
                    style: "normal",
                    weight: 800
                }, {
                    file: "spectral_800_italic.woff2",
                    style: "italic",
                    weight: 800
                }],
                TINOS: [{
                    file: "tinos_400.woff2",
                    style: "normal",
                    weight: 400
                }, {
                    file: "tinos_400_italic.woff2",
                    style: "italic",
                    weight: 400
                }, {
                    file: "tinos_700.woff2",
                    style: "normal",
                    weight: 700
                }, {
                    file: "tinos_700_italic.woff2",
                    style: "italic",
                    weight: 700
                }],
                UNNA: [{
                    file: "unna_400.woff2",
                    style: "normal",
                    weight: 400
                }, {
                    file: "unna_400_italic.woff2",
                    style: "italic",
                    weight: 400
                }, {
                    file: "unna_700.woff2",
                    style: "normal",
                    weight: 700
                }, {
                    file: "unna_700_italic.woff2",
                    style: "italic",
                    weight: 700
                }],
                WORK_SANS: [{
                    file: "work_sans_var.woff2",
                    style: "normal",
                    weight: "variable"
                }, {
                    file: "work_sans_var_italic.woff2",
                    style: "italic",
                    weight: "variable"
                }],
                ZODIAK: [{
                    file: "zodiak_var.woff2",
                    style: "normal",
                    weight: "variable"
                }, {
                    file: "zodiak_var_italic.woff2",
                    style: "italic",
                    weight: "variable"
                }],
                ALBERT_SANS: [{
                    file: "albertsans_var.woff2",
                    style: "normal",
                    weight: "variable"
                }, {
                    file: "albertsans_var_italic.woff2",
                    style: "italic",
                    weight: "variable"
                }],
                JOST: [{
                    file: "jost_var.woff2",
                    style: "normal",
                    weight: "variable"
                }, {
                    file: "jost_var_italic.woff2",
                    style: "italic",
                    weight: "variable"
                }],
                OPEN_SANS: [{
                    file: "opensans_var.woff2",
                    style: "normal",
                    weight: "variable"
                }, {
                    file: "opensans_var_italic.woff2",
                    style: "italic",
                    weight: "variable"
                }],
                CHAKRA_PETCH: [{
                    file: "chakrapetch_300.woff2",
                    style: "normal",
                    weight: 300
                }, {
                    file: "chakrapetch_300_italic.woff2",
                    style: "italic",
                    weight: 300
                }, {
                    file: "chakrapetch_400.woff2",
                    style: "normal",
                    weight: 400
                }, {
                    file: "chakrapetch_400_italic.woff2",
                    style: "italic",
                    weight: 400
                }, {
                    file: "chakrapetch_500.woff2",
                    style: "normal",
                    weight: 500
                }, {
                    file: "chakrapetch_500_italic.woff2",
                    style: "italic",
                    weight: 500
                }, {
                    file: "chakrapetch_600.woff2",
                    style: "normal",
                    weight: 600
                }, {
                    file: "chakrapetch_600_italic.woff2",
                    style: "italic",
                    weight: 600
                }, {
                    file: "chakrapetch_700.woff2",
                    style: "normal",
                    weight: 700
                }, {
                    file: "chakrapetch_700_italic.woff2",
                    style: "italic",
                    weight: 700
                }],
                SPACE_MONO: [{
                    file: "spacemono_400.woff2",
                    style: "normal",
                    weight: 400
                }, {
                    file: "spacemono_400_italic.woff2",
                    style: "italic",
                    weight: 400
                }, {
                    file: "spacemono_700.woff2",
                    style: "normal",
                    weight: 700
                }, {
                    file: "spacemono_700_italic.woff2",
                    style: "italic",
                    weight: 700
                }],
                BESPOKE_SERIF: [{
                    file: "bespoke_var.woff2",
                    style: "normal",
                    weight: "variable"
                }, {
                    file: "bespoke_var_italic.woff2",
                    style: "italic",
                    weight: "variable"
                }],
                BRICOLAGE_GROTESQUE: [{
                    file: "bricolage_grotesque_var.woff2",
                    style: "normal",
                    weight: "variable"
                }],
                CALISTOGA: [{
                    file: "calistoga_400.woff2",
                    style: "normal",
                    weight: 400
                }],
                CHILLAX: [{
                    file: "chillax_var.woff2",
                    style: "normal",
                    weight: "variable"
                }],
                CLASH_GROETSK: [{
                    file: "clash_grotesk_var.woff2",
                    style: "normal",
                    weight: "variable"
                }],
                GLOOCK: [{
                    file: "gloock_400.woff2",
                    style: "normal",
                    weight: 400
                }],
                INSTRUMENT_SERIF: [{
                    file: "instrumentserif_400.woff2",
                    style: "normal",
                    weight: 400
                }, {
                    file: "instrumentserif_400_italic.woff2",
                    style: "italic",
                    weight: 400
                }],
                DM_SANS: [{
                    file: "dmsans_var.woff2",
                    style: "normal",
                    weight: "variable"
                }, {
                    file: "dmsans_var_italic.woff2",
                    style: "italic",
                    weight: "variable"
                }],
                INTER_TIGHT: [{
                    file: "intertight_var.woff2",
                    style: "normal",
                    weight: "variable"
                }, {
                    file: "intertight_var_italic.woff2",
                    style: "italic",
                    weight: "variable"
                }],
                MONTSERRAT: [{
                    file: "montserrat_var.woff2",
                    style: "normal",
                    weight: "variable"
                }, {
                    file: "montserrat_var_italic.woff2",
                    style: "italic",
                    weight: "variable"
                }],
                SWITZER: [{
                    file: "switzer_var.woff2",
                    style: "normal",
                    weight: "variable"
                }, {
                    file: "switzer_var_italic.woff2",
                    style: "italic",
                    weight: "variable"
                }],
                SPLINE_SANS: [{
                    file: "splinesans_var.woff2",
                    style: "normal",
                    weight: "variable"
                }],
                FORUM: [{
                    file: "forum_400.woff2",
                    style: "normal",
                    weight: 400
                }],
                GAMBARINO: [{
                    file: "gambarino_400.woff2",
                    style: "normal",
                    weight: 400
                }],
                LORA: [{
                    file: "lora_var.woff2",
                    style: "normal",
                    weight: "variable"
                }, {
                    file: "lora_var_italic.woff2",
                    style: "italic",
                    weight: "variable"
                }],
                GILDA_DISPLAY: [{
                    file: "gildadisplay_400.woff2",
                    style: "normal",
                    weight: 400
                }],
                IBM_PLEX_MONO: [{
                    file: "ibmplexmono_400.woff2",
                    style: "normal",
                    weight: 400
                }, {
                    file: "ibmplexmono_500.woff2",
                    style: "normal",
                    weight: 500
                }, {
                    file: "ibmplexmono_600.woff2",
                    style: "normal",
                    weight: 600
                }, {
                    file: "ibmplexmono_400_italic.woff2",
                    style: "italic",
                    weight: 400
                }, {
                    file: "ibmplexmono_500_italic.woff2",
                    style: "italic",
                    weight: 500
                }, {
                    file: "ibmplexmono_600_italic.woff2",
                    style: "italic",
                    weight: 600
                }],
                ROBOTO_MONO: [{
                    file: "robotomono_var.woff2",
                    style: "normal",
                    weight: "variable"
                }, {
                    file: "robotomono_var_italic.woff2",
                    style: "italic",
                    weight: "variable"
                }],
                STARDOM: [{
                    file: "stardom_400.woff2",
                    style: "normal",
                    weight: 400
                }],
                DM_MONO: [{
                    file: "dmmono_300.woff2",
                    style: "normal",
                    weight: 300
                }, {
                    file: "dmmono_300_italic.woff2",
                    style: "italic",
                    weight: 300
                }, {
                    file: "dmmono_400.woff2",
                    style: "normal",
                    weight: 400
                }, {
                    file: "dmmono_400_italic.woff2",
                    style: "italic",
                    weight: 400
                }],
                MAITREE: [{
                    file: "maitree_400.woff2",
                    style: "normal",
                    weight: 400
                }, {
                    file: "maitree_500.woff2",
                    style: "normal",
                    weight: 500
                }]
            };
            var h = i(13855);

            function r(e) {
                let {
                    fontSetsToLoad: t = [],
                    fontsToLoad: i = []
                } = e, n = [...new Set([...t.map(e => h.$U[e]).flatMap(e => [e.h1.family, e.h2.family, e.h3.family, e.p1.family, e.p2.family, e.projectTitle.family, e.buttonLabel.family]), ...i])].flatMap(e => g[e].map(t => ({
                    font: e,
                    ...t
                })));
                return (0, l.jsxs)(a(), {
                    children: [n.map(e => {
                        let {
                            file: t
                        } = e;
                        return (0, l.jsx)("link", {
                            href: "/assets/fonts/".concat(t),
                            rel: "preload",
                            as: "font",
                            type: "font/woff2",
                            crossOrigin: "anonymous"
                        }, t)
                    }), (0, l.jsx)("style", {
                        dangerouslySetInnerHTML: {
                            __html: n.map(e => {
                                let {
                                    font: t,
                                    file: i,
                                    weight: l,
                                    style: n
                                } = e;
                                return "\n@font-face {\n	font-family: _site_".concat(t, ";\n	src: url(/assets/fonts/").concat(i, ') format("woff2");\n	font-style: ').concat(n, ";\n	font-weight: ").concat("variable" === l ? "100 900" : l, ";\n}")
                            }).join("\n")
                        }
                    })]
                }, t.join(""))
            }
        },
        97847: function(e, t, i) {
            i.d(t, {
                $: function() {
                    return g
                },
                e: function() {
                    return a
                }
            });
            var l = i(2784);
            let n = l.createContext(""),
                a = n.Provider;

            function g() {
                return l.useContext(n)
            }
        },
        12700: function(e, t, i) {
            i.d(t, {
                Ni: function() {
                    return y
                },
                fN: function() {
                    return m
                },
                ki: function() {
                    return H
                },
                sG: function() {
                    return s
                },
                uC: function() {
                    return S
                }
            });
            var l = i(52322),
                n = i(59965),
                a = i(65058),
                g = i(752),
                h = i(20242),
                r = i(2784),
                c = i(82066),
                o = i(4050),
                p = i(31118),
                w = i(51089);
            let f = r.createContext(null);

            function s(e) {
                let {
                    children: t
                } = e, i = (0, o.Z)(() => ({
                    queryCache: new Map,
                    emitter: (0, h.i)(),
                    dirtyAtom: (0, a.cn)(!1),
                    pendingMutationAtom: (0, a.cn)(null),
                    handlePendingChangesSettledAtom: (0, a.cn)(null),
                    showPricingDialogAtom: (0, a.cn)(!1)
                })), [, n] = (0, g.KO)(i.dirtyAtom), [c, p] = (0, g.KO)(i.pendingMutationAtom);
                return r.useEffect(() => {
                    var e;
                    let t = null == c ? void 0 : null === (e = c[1]) || void 0 === e ? void 0 : e.call(c),
                        l = i.queryCache.size > 0;
                    return n(l), l || p(null), () => {
                        null == t || t()
                    }
                }, [c, i, n, p]), (0, l.jsx)(f.Provider, {
                    value: i,
                    children: t
                })
            }

            function S() {
                let e = r.useContext(f);
                if (w.Ts && !e) throw Error("PendingChangesContext value not set");
                return (0, g.KO)(e.handlePendingChangesSettledAtom)
            }

            function H() {
                let e = r.useContext(f);
                if (w.Ts && !e) throw Error("PendingChangesContext value not set");
                return (0, g.KO)(e.showPricingDialogAtom)
            }

            function m() {
                let e = r.useContext(f);
                return (0, p.Pr)(() => ({
                    getPendingQueryData: t => null == e ? void 0 : e.queryCache.get((0, c.hashQueryKey)(t)),
                    subscribe: (t, i) => {
                        if (!e) return () => {};
                        let l = (0, c.hashQueryKey)(t);
                        return e.emitter.on(l, i)
                    }
                }), [e])
            }

            function y() {
                let e = (0, c.useQueryClient)(),
                    t = r.useContext(f);
                if (w.Ts && !t) throw Error("PendingChangesContext value not set");
                let [i] = (0, g.KO)(t.dirtyAtom), [l, a] = (0, g.KO)(t.pendingMutationAtom);
                async function h() {
                    if (!l) throw Error("No mutation to apply");
                    let [e] = l, t = await e();
                    return t && a(null), t
                }

                function o(e) {
                    if (null != e) {
                        let i = (0, c.hashQueryKey)(e);
                        t.queryCache.delete(i), t.emitter.emit(i)
                    } else {
                        let e = [...t.queryCache.keys()];
                        t.queryCache.clear(), e.forEach(e => {
                            t.emitter.emit(e)
                        })
                    }
                }
                return {
                    dirty: i,
                    setPendingQueryData: function(i, l) {
                        if ((0, n.J)(l, e.getQueryData(i))) o(i);
                        else {
                            let e = (0, c.hashQueryKey)(i);
                            t.queryCache.set(e, l), t.emitter.emit(e, l)
                        }
                        return l
                    },
                    removePendingQueries: o,
                    setPendingMutation: a,
                    applyPendingMutation: h
                }
            }
        },
        12054: function(e, t, i) {
            i.d(t, {
                H: function() {
                    return h
                },
                Pl: function() {
                    return l
                },
                UZ: function() {
                    return g
                },
                hx: function() {
                    return a
                },
                vP: function() {
                    return n
                }
            });
            let l = [{
                    font: "SPACE_MONO",
                    displayName: "Space Mono",
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: -.02
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: -.02
                        },
                        h3: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: -.02
                        },
                        projectTitle: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: -.02
                        },
                        p1: {
                            weight: 400,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 400,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: .02
                        }
                    }
                }, {
                    font: "CHAKRA_PETCH",
                    displayName: "Chakra Petch",
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 400,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 400,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "CABINET_GROTESK",
                    displayName: "Cabinet Grotesk",
                    variants: {
                        h1: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 500,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 500,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "IBM_PLEX_MONO",
                    displayName: "IBM Plex Mono",
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 400,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 400,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "BOSKA",
                    displayName: "Boska",
                    headingOnly: !0,
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "MELODRAMA",
                    displayName: "Melodrama",
                    headingOnly: !0,
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "STARDOM",
                    displayName: "Stardom",
                    headingOnly: !0,
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "BRICOLAGE_GROTESQUE",
                    displayName: "Bricolage Grotesque",
                    variants: {
                        h1: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 500,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 500,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "CLASH_DISPLAY",
                    displayName: "Clash Display",
                    variants: {
                        h1: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 500,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 500,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "ROBOTO_MONO",
                    displayName: "Roboto Mono",
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 400,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 400,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "DM_MONO",
                    displayName: "DM Mono",
                    variants: {
                        h1: {
                            weight: 300,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 300,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 300,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 300,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "CHILLAX",
                    displayName: "Chillax",
                    variants: {
                        h1: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 500,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 500,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "CALISTOGA",
                    displayName: "Calistoga",
                    headingOnly: !0,
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "CLASH_GROETSK",
                    displayName: "Clash Grotesk",
                    variants: {
                        h1: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 500,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 500,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "GLOOCK",
                    displayName: "Gloock",
                    headingOnly: !0,
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "INSTRUMENT_SERIF",
                    displayName: "Instrument Serif",
                    headingOnly: !0,
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "SPACE_GROTESK",
                    displayName: "Space Grotesk",
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 400,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 400,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }],
                n = [{
                    font: "SATOSHI",
                    displayName: "Satoshi",
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 400,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 400,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "EPILOGUE",
                    displayName: "Epilogue",
                    variants: {
                        h1: {
                            weight: 300,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 300,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 300,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 300,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "INTER",
                    displayName: "Inter",
                    variants: {
                        h1: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 500,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 500,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "SORA",
                    displayName: "Sora",
                    variants: {
                        h1: {
                            weight: 300,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 300,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 300,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 300,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "OVERPASS",
                    displayName: "Overpass",
                    variants: {
                        h1: {
                            weight: 300,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 300,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 300,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 300,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "JOST",
                    displayName: "Jost",
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: -.01
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: -.005
                        },
                        h3: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 400,
                            lineHeight: 1.5,
                            letterSpacing: .02
                        },
                        p2: {
                            weight: 400,
                            lineHeight: 1.3,
                            letterSpacing: .02
                        },
                        buttonLabel: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: .01
                        }
                    }
                }, {
                    font: "IBM_PLEX_SANS",
                    displayName: "IBM Plex Sans",
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 400,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 400,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "RUBIK",
                    displayName: "Rubik",
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 400,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 400,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "MANROPE",
                    displayName: "Manrope",
                    variants: {
                        h1: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 500,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 500,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "ALBERT_SANS",
                    displayName: "Albert Sans",
                    variants: {
                        h1: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 500,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 500,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "GENERAL_SANS",
                    displayName: "General Sans",
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 400,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 400,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "KARLA",
                    displayName: "Karla",
                    variants: {
                        h1: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 500,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 500,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "POPPINS",
                    displayName: "Poppins",
                    variants: {
                        h1: {
                            weight: 300,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 300,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 300,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 300,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "WORK_SANS",
                    displayName: "Work Sans",
                    variants: {
                        h1: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 500,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 500,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "DM_SANS",
                    displayName: "DM Sans",
                    variants: {
                        h1: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 500,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 500,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "INTER_TIGHT",
                    displayName: "Inter Tight",
                    variants: {
                        h1: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 500,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 500,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "MONTSERRAT",
                    displayName: "Montserrat",
                    variants: {
                        h1: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 500,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 500,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "SWITZER",
                    displayName: "Switzer",
                    variants: {
                        h1: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 500,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 500,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "SPLINE_SANS",
                    displayName: "Spline Sans",
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 400,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 400,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }],
                a = [{
                    font: "CORMORANT_UPRIGHT",
                    displayName: "Cormorant Upright",
                    headingOnly: !0,
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "GELASIO",
                    displayName: "Gelasio",
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 400,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 400,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "CORMORANT_INFANT",
                    displayName: "Cormorant Infant",
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 400,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 400,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "PLAYFAIR_DISPLAY",
                    displayName: "Playfair Display",
                    headingOnly: !0,
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "BITTER",
                    displayName: "Bitter",
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 400,
                            lineHeight: 1.5,
                            letterSpacing: .02
                        },
                        p2: {
                            weight: 400,
                            lineHeight: 1.3,
                            letterSpacing: .02
                        },
                        buttonLabel: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: .02
                        }
                    }
                }, {
                    font: "OPEN_SANS",
                    displayName: "Open Sans",
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 400,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 400,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "TINOS",
                    displayName: "Tinos",
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 400,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 400,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "IBARRA_REAL_NOVA",
                    displayName: "Ibarra Real Nova",
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 400,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 400,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "ERODE",
                    displayName: "Erode",
                    variants: {
                        h1: {
                            weight: 300,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 300,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 300,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 300,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "GAMBETTA",
                    displayName: "Gambetta",
                    variants: {
                        h1: {
                            weight: 300,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 300,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 300,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 300,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "EB_GARAMOND",
                    displayName: "EB Garamond",
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 400,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 400,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "ZODIAK",
                    displayName: "Zodiak",
                    variants: {
                        h1: {
                            weight: 300,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 300,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 300,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 300,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "SENTIENT",
                    displayName: "Sentient",
                    variants: {
                        h1: {
                            weight: 300,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 300,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 300,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 300,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "LITERATA",
                    displayName: "Literata",
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 400,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 400,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "NECO",
                    displayName: "Neco",
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 400,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 400,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "SPECTRAL",
                    displayName: "Spectral",
                    variants: {
                        h1: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 500,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 500,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "CAUDEX",
                    displayName: "Caudex",
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 400,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 400,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "MARTEL",
                    displayName: "Martel",
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 400,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 400,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "UNNA",
                    displayName: "Unna",
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 400,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 400,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 700,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "MAITREE",
                    displayName: "Maitree",
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 400,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 400,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "KARMA",
                    displayName: "Karma",
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 400,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 400,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "FORUM",
                    displayName: "Forum",
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 400,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 400,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "SOURCE_SERIF_4",
                    displayName: "Source Serif 4",
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 400,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 400,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 600,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "BESPOKE_SERIF",
                    displayName: "Bespoke Serif",
                    variants: {
                        h1: {
                            weight: 300,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 300,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 300,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 300,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "GAMBARINO",
                    displayName: "Gambarino",
                    headingOnly: !0,
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "LORA",
                    displayName: "Lora",
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 400,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 400,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 500,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }, {
                    font: "GILDA_DISPLAY",
                    displayName: "Gilda Display",
                    variants: {
                        h1: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h2: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        h3: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        projectTitle: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        },
                        p1: {
                            weight: 400,
                            lineHeight: 1.5,
                            letterSpacing: 0
                        },
                        p2: {
                            weight: 400,
                            lineHeight: 1.3,
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            weight: 400,
                            lineHeight: 1,
                            letterSpacing: 0
                        }
                    }
                }],
                g = [...l, ...n, ...a];

            function h(e) {
                if (!e) return null;
                let t = g.find(t => t.font === e);
                return null != t ? t : null
            }
        },
        66197: function(e, t, i) {
            i.d(t, {
                X: function() {
                    return a
                }
            });
            var l = i(97847),
                n = i(54962);

            function a() {
                let e = (0, l.$)();
                return n.SX.useQuery(["Brand.findBySiteId", e])
            }
        },
        81380: function(e, t, i) {
            i.d(t, {
                W: function() {
                    return c
                }
            });
            var l = i(82066),
                n = i(79046),
                a = i(34233),
                g = i(2784),
                h = i(31118),
                r = i(12700);

            function c(e) {
                let t = (0, n.Ol)("site.find", null != e ? e : ""),
                    i = (0, l.useQueryClient)(),
                    {
                        enabled: c
                    } = (0, a.KL)(),
                    o = c && !!e && !(null == e ? void 0 : e.startsWith("demo-"));
                return function(e, t) {
                    let i = function(e) {
                        let {
                            getPendingQueryData: t,
                            subscribe: i
                        } = (0, r.fN)(), [n, a] = g.useState(() => t(e)), c = (0, h.Pr)(() => e, [(0, l.hashQueryKey)(e)]);
                        return g.useEffect(() => i(c, e => {
                            a(e)
                        }), [c, i]), n
                    }(e);
                    return void 0 === i || t.isLoading || "error" === t.status ? t : { ...t,
                        data: i
                    }
                }(t, n.SX.site.find.useQuery(null != e ? e : "", {
                    enabled: o,
                    initialData: i.getQueryData(t)
                }))
            }
        },
        85769: function(e, t, i) {
            i.d(t, {
                F: function() {
                    return r
                }
            });
            var l = i(52322),
                n = i(97729),
                a = i.n(n);

            function g(e) {
                return "number" == typeof e ? e : e.start + Number.EPSILON
            }
            let h = {
                ital: 0,
                opsz: 14,
                slnt: 0,
                wdth: 100,
                wght: 400
            };

            function r(e) {
                let {
                    fonts: t,
                    text: i,
                    display: n = "swap"
                } = e, r = Object.keys(t).sort().map(e => {
                    let i = new Set,
                        l = t[e];
                    l.forEach(e => {
                        Object.entries(e).forEach(e => {
                            let [t, l] = e;
                            null != l && i.add(t)
                        })
                    });
                    let n = [...i].sort();
                    return [e, l.map(e => new Map(n.map(t => {
                        var i;
                        return [t, null !== (i = e[t]) && void 0 !== i ? i : h[t]]
                    }))).sort((e, t) => {
                        let i = n.find(i => e.get(i) !== t.get(i));
                        return i ? g(e.get(i)) - g(t.get(i)) : 0
                    })]
                });
                return r.length > 0 ? (0, l.jsx)(a(), {
                    children: (0, l.jsx)("link", {
                        href: "https://fonts.googleapis.com/css2?" + r.map(e => {
                            let [t, i] = e, l = "family=".concat(t.replace(/ /g, "+"));
                            return i.length > 0 && (l += ":".concat([...i[0].keys()], "@").concat([...new Set(i.map(e => [...e.values()].join(",")))].join(";"))), l
                        }).join("&") + (i ? "&text=".concat(encodeURIComponent(i)) : "") + ("auto" !== n ? "&display=".concat(n) : ""),
                        rel: "stylesheet"
                    })
                }) : null
            }
        },
        62781: function(e, t, i) {
            i.d(t, {
                J: function() {
                    return O
                }
            });
            var l = i(52322),
                n = i(97466),
                a = i.n(n),
                g = i(71346),
                h = i.n(g),
                r = i(53014),
                c = i(97729),
                o = i.n(c),
                p = i(2784),
                w = i(97334),
                f = i(51254),
                s = i(1918),
                S = i(51202),
                H = i(62325),
                m = i(52887),
                y = i(60185),
                _ = i(97847),
                b = i(48523),
                u = i(12054),
                v = i(13855),
                d = i(88985),
                T = i(72515),
                N = i(51089),
                A = i(66197),
                L = i(81380),
                E = i(85769);

            function O(e) {
                var t, i;
                let {
                    rootClassName: n,
                    forcePrintColors: g
                } = e, c = (0, _.$)(), O = (0, L.W)(c).data, j = (0, A.X)().data, {
                    theme: R,
                    colors: k
                } = (0, s.PU)(O), {
                    background: I,
                    shape: C,
                    button: M,
                    heading: P,
                    paragraph: x
                } = g ? b.gZ : k;
                p.useEffect(() => {
                    "dark" === R ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
                }, [R]);
                let D = h()((0, r.CD)((0, w.Uk)(I), (0, w.Uk)(P), .05)),
                    U = h()((0, r.CD)((0, w.Uk)(I), (0, w.Uk)(P), .2)),
                    G = "\n		--bg-color: ".concat((0, w.Uk)(I), ";\n		--bg-color-rgb: ").concat(I.r, " ").concat(I.g, " ").concat(I.b, ";\n		--bg-color-lighten-rgb: ").concat((0, r.dF)((0, r.CD)((0, w.Uk)(I), "white", .75)).slice(0, 3).join(","), ";\n\n		").concat(y.Hk.map(e => {
                        let t = (0, r.CD)((0, w.Uk)(I), "dark" === R ? "white" : "black", e / 100);
                        return "--bg-color-lighten-".concat(e, ": ").concat(t)
                    }).join(";\n"), ";\n\n		--accent-color: ").concat((0, w.Uk)(C), ";\n\n		--footer-color: ").concat(D.hex(), ";\n\n		--highlight-color: ").concat(U.hex(), ";\n\n		--button-color: ").concat((0, w.Uk)(M), ";\n		--button-text-color: ").concat((0, S.F)({
                        background: I,
                        button: M
                    }), ";\n		--category-button-label-color: ").concat((0, r.CD)((0, w.Uk)(M), "dark" === R ? "white" : "black", .1), ";\n		--category-button-active-color: ").concat((0, r.CD)((0, w.Uk)(M), "dark" === R ? "black" : "white", .25), ";\n		--button-hover-color: ").concat((0, r.CD)((0, w.Uk)(M), "#a8a8b5", .25), ";\n		--input-color: ").concat((0, r.jb)((0, w.Uk)(M), -.9), ";\n\n		--illustration-foreground-color: var(").concat("light" === R ? "--h1-color" : "--accent-color", ");\n\n		--favicon-color: ").concat(D.red(), " ").concat(D.green(), " ").concat(D.blue(), ";\n\n		--button-color-rgb: ").concat(M.r, " ").concat(M.g, " ").concat(M.b, ";\n		--h1-color-rgb: ").concat(P.r, " ").concat(P.g, " ").concat(P.b, ";\n\n		background: var(--bg-color);\n		font-size: 16px;\n	"),
                    z = "section-wrapper" === n ? ":root" : ".".concat(n),
                    K = N.Jl && CSS.supports("container-type: inline-size") ? "@container" : "@media";
                if (Object.keys(f.X).includes(O.fontPreset)) {
                    let {
                        h1Family: e,
                        h1Weight: t,
                        h1Italic: i,
                        h2Family: g,
                        h2Weight: h,
                        h2Italic: c,
                        h3Family: o,
                        h3Weight: p,
                        h3Italic: s,
                        h4Family: S,
                        h4Weight: m,
                        h4Italic: y,
                        pFamily: _
                    } = f.X[O.fontPreset], b = (() => {
                        let l = (0, H.E)(_),
                            n = [
                                [(0, H.E)(e), {
                                    wght: t,
                                    ital: Number(i)
                                }],
                                [(0, H.E)(g), {
                                    wght: h,
                                    ital: Number(c)
                                }],
                                [(0, H.E)(o), {
                                    wght: p,
                                    ital: Number(s)
                                }],
                                [(0, H.E)(S), {
                                    wght: m,
                                    ital: Number(y)
                                }],
                                [l, {
                                    wght: 400
                                }],
                                [l, {
                                    wght: 400,
                                    ital: 1
                                }],
                                [l, {
                                    wght: 700
                                }],
                                [l, {
                                    wght: 700,
                                    ital: 1
                                }]
                            ],
                            a = {};
                        return n.forEach(e => {
                            let [t, i] = e;
                            a[t] || (a[t] = []), a[t].push(i)
                        }), a
                    })(), {
                        h1: u,
                        h2: v,
                        h3: d,
                        projectTitle: N,
                        p: A
                    } = T.D3[O.template].fontSizeSet;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(E.F, {
                            fonts: b
                        }), (0, l.jsx)(a(), {
                            id: "504ddaa9e309074e",
                            dynamic: [z, G, e, u.mobile / 16, t, i ? "italic" : "normal", (0, w.Uk)(P), g, v.mobile / 16, h, c ? "italic" : "normal", (0, w.Uk)(P), (0, r.dF)((0, r.CD)((0, w.Uk)(P), "white", .25)).slice(0, 3).join(","), o, d.mobile / 16, p, s ? "italic" : "normal", (0, w.Uk)(P), _, A.mobile / 16, x.r, x.g, x.b, K, n, A.tablet / 16, N.tablet / 16, d.tablet / 16, v.tablet / 16, u.tablet / 16, K, n, A.laptop / 16, N.laptop / 16, d.laptop / 16, v.laptop / 16, u.laptop / 16],
                            children: "".concat(z, "{").concat(G, "\n						--h1-family: ").concat(e, ";--h1-size:").concat(u.mobile / 16, "rem;--h1-weight:").concat(t, ";--h1-line-height:1.25;--h1-style:").concat(i ? "italic" : "normal", ";--h1-color:").concat((0, w.Uk)(P), ";--h2-family:").concat(g, ";--h2-size:").concat(v.mobile / 16, "rem;--h2-weight:").concat(h, ";--h2-line-height:1.25;--h2-style:").concat(c ? "italic" : "normal", ";--h2-color:").concat((0, w.Uk)(P), ";--h2-color-light-rgb:").concat((0, r.dF)((0, r.CD)((0, w.Uk)(P), "white", .25)).slice(0, 3).join(","), ";--h3-family:").concat(o, ";--h3-size:").concat(d.mobile / 16, "rem;--h3-weight:").concat(p, ";--h3-line-height:1.25;--h3-style:").concat(s ? "italic" : "normal", ";--h3-color:").concat((0, w.Uk)(P), ";--p-family:").concat(_, ";--p-size:").concat(A.mobile / 16, "rem;--p-line-height:1.625;--p-color:").concat(x.r, " ").concat(x.g, " ").concat(x.b, "}").concat(K, " (min-width: 640px) {}.").concat(n, "{--p-size:").concat(A.tablet / 16, "rem;--projectTitle-size:").concat(N.tablet / 16, "rem;--h3-size:").concat(d.tablet / 16, "rem;--h2-size:").concat(v.tablet / 16, "rem;--h1-size:").concat(u.tablet / 16, "rem}").concat(K, " (min-width: 1024px) {}.").concat(n, "{--p-size:").concat(A.laptop / 16, "rem;--projectTitle-size:").concat(N.laptop / 16, "rem;--h3-size:").concat(d.laptop / 16, "rem;--h2-size:").concat(v.laptop / 16, "rem;--h1-size:").concat(u.laptop / 16, "rem}")
                        })]
                    })
                }
                let B = (0, u.H)(null == j ? void 0 : null === (t = j.customFonts) || void 0 === t ? void 0 : t.heading),
                    F = (0, u.H)(null == j ? void 0 : null === (i = j.customFonts) || void 0 === i ? void 0 : i.paragraph),
                    Q = function(e, t, i) {
                        let l = (t, i) => t ? {
                            family: t.font,
                            letterSpacing: t.variants[i].letterSpacing,
                            weight: t.variants[i].weight,
                            lineHeight: t.variants[i].lineHeight,
                            style: "normal"
                        } : e[i];
                        return { ...e,
                            h1: l(t, "h1"),
                            h2: l(t, "h2"),
                            h3: l(t, "h3"),
                            p1: l(i, "p1"),
                            p2: l(i, "p2"),
                            projectTitle: l(i, "projectTitle"),
                            buttonLabel: l(i, "buttonLabel")
                        }
                    }(v.$U[O.fontPreset], B, F);
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(m.h, {
                        fontsToLoad: [...B ? [B.font] : [], ...F ? [F.font] : []],
                        fontSetsToLoad: [O.fontPreset]
                    }, "".concat(O.fontPreset, "-").concat(null == B ? void 0 : B.font, "-").concat(null == F ? void 0 : F.font)), (0, l.jsx)(o(), {
                        children: (0, l.jsx)("style", {
                            dangerouslySetInnerHTML: {
                                __html: "\n".concat(z, " {\n	").concat(G, "\n\n	--h1-family: _site_").concat(Q.h1.family, ";\n	--h1-size: ").concat(d.ey.h1.mobile / 16, "rem;\n	--h1-weight: ").concat(Q.h1.weight, ";\n	--h1-style: ").concat(Q.h1.style, ";\n	--h1-color: ").concat((0, w.Uk)(P), ";\n	--h1-letter-spacing: ").concat(Q.h1.letterSpacing / 16, "rem;\n	--h1-line-height: ").concat(Q.h1.lineHeight, ";\n\n	--h2-family: _site_").concat(Q.h2.family, ";\n	--h2-size: ").concat(d.ey.h2.mobile / 16, "rem;\n	--h2-weight: ").concat(Q.h2.weight, ";\n	--h2-style: ").concat(Q.h2.style, ";\n	--h2-color: ").concat((0, w.Uk)(P), ";\n	--h2-color-light-rgb: ").concat((0, r.dF)((0, r.CD)((0, w.Uk)(P), "white", .25)).slice(0, 3).join(","), ";\n	--h2-letter-spacing: ").concat(Q.h2.letterSpacing / 16, "rem;\n	--h2-line-height: ").concat(Q.h2.lineHeight, ";\n\n	--h3-family: _site_").concat(Q.h3.family, ";\n	--h3-size: ").concat(d.ey.h3.mobile / 16, "rem;\n	--h3-weight: ").concat(Q.h3.weight, ";\n	--h3-style: ").concat(Q.h3.style, ";\n	--h3-color: ").concat((0, w.Uk)(P), ";\n	--h3-letter-spacing: ").concat(Q.h3.letterSpacing / 16, "rem;\n	--h3-line-height: ").concat(Q.h3.lineHeight, ";\n\n	--project-title-family: _site_").concat(Q.projectTitle.family, ";\n	--project-title-size: ").concat(d.ey.projectTitle.mobile / 16, "rem;\n	--project-title-weight: ").concat(Q.projectTitle.weight, ";\n	--project-title-style: ").concat(Q.projectTitle.style, ";\n	--project-title-color: ").concat((0, w.Uk)(x), ";\n	--project-title-letter-spacing: ").concat(Q.projectTitle.letterSpacing / 16, "rem;\n	--project-title-line-height: ").concat(Q.projectTitle.lineHeight, ";\n\n	--p-family: _site_").concat(Q.p1.family, ";\n	--p-size: ").concat(d.ey.p.mobile / 16, "rem;\n	--p-color: ").concat(x.r, " ").concat(x.g, " ").concat(x.b, ";\n	--p-line-height: ").concat(Q.p1.lineHeight, ";\n\n	--button-label-family: _site_").concat(Q.buttonLabel.family, ";\n	--button-label-line-height: ").concat(Q.buttonLabel.lineHeight, ";\n	--button-label-weight: ").concat(Q.buttonLabel.weight, ";\n}\n\n").concat(K, " (min-width: 640px) {\n	.").concat(n, " {\n		--p-size: ").concat(d.ey.p.tablet / 16, "rem;\n		--project-title-size: ").concat(d.ey.projectTitle.tablet / 16, "rem;\n		--h3-size: ").concat(d.ey.h3.tablet / 16, "rem;\n		--h2-size: ").concat(d.ey.h2.tablet / 16, "rem;\n		--h1-size: ").concat(d.ey.h1.tablet / 16, "rem;\n	}\n}\n\n").concat(K, " (min-width: 1024px) {\n	.").concat(n, " {\n		--p-size: ").concat(d.ey.p.laptop / 16, "rem;\n		--project-title-size: ").concat(d.ey.projectTitle.laptop / 16, "rem;\n		--h3-size: ").concat(d.ey.h3.laptop / 16, "rem;\n		--h2-size: ").concat(d.ey.h2.laptop / 16, "rem;\n		--h1-size: ").concat(d.ey.h1.laptop / 16, "rem;\n	}\n}")
                            }
                        })
                    })]
                })
            }
        },
        62325: function(e, t, i) {
            i.d(t, {
                E: function() {
                    return l
                }
            });

            function l(e) {
                return e.slice(1, e.indexOf("'", 2))
            }
        },
        34233: function(e, t, i) {
            i.d(t, {
                KL: function() {
                    return n
                }
            }), i(95089), i(86882);
            var l = i(35196);

            function n(e) {
                let t = "__folio-force-draft";
                return {
                    enabled: "true" === l.getCookie(t, e),
                    enable: () => l.setCookie(t, "true", e),
                    disable: () => l.deleteCookie(t, e)
                }
            }
            i(34406)
        }
    }
]);