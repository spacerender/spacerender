try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        i = (new e.Error).stack;
    i && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[i] = "6bfe4bd1-8d69-49cf-8bb4-2b297904bf70", e._sentryDebugIdIdentifier = "sentry-dbid-6bfe4bd1-8d69-49cf-8bb4-2b297904bf70")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9567], {
        94706: function(e, i, t) {
            t.r(i), t.d(i, {
                Blog: function() {
                    return a
                },
                Clients: function() {
                    return l
                },
                Cover: function() {
                    return r
                },
                Gallery: function() {
                    return n
                },
                Heroes: function() {
                    return o
                },
                Instagram: function() {
                    return s
                },
                Logos: function() {
                    return g
                },
                Numbers: function() {
                    return h
                },
                People: function() {
                    return p
                },
                Plans: function() {
                    return d
                },
                Process: function() {
                    return c
                },
                Screenshots: function() {
                    return A
                },
                Services: function() {
                    return S
                },
                Testimonial: function() {
                    return m
                },
                Thumbnails: function() {
                    return y
                },
                VideoPlaceholders: function() {
                    return b
                },
                meta: function() {
                    return u
                }
            });
            let a = {
                    Blog1: {
                        src: "/assets/placeholders/blog/blog-1.webp",
                        originalWidth: 856,
                        originalHeight: 855
                    },
                    Blog2: {
                        src: "/assets/placeholders/blog/blog-2.webp",
                        originalWidth: 856,
                        originalHeight: 855
                    },
                    Blog3: {
                        src: "/assets/placeholders/blog/blog-3.webp",
                        originalWidth: 1140,
                        originalHeight: 860
                    },
                    DefaultArchifolioThumbnail: {
                        src: "/assets/placeholders/blog/default_archifolio_thumbnail.webp",
                        originalWidth: 1140,
                        originalHeight: 860
                    }
                },
                l = {
                    Image1: {
                        src: "/assets/placeholders/clients/image-1.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image2: {
                        src: "/assets/placeholders/clients/image-2.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image3: {
                        src: "/assets/placeholders/clients/image-3.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image4: {
                        src: "/assets/placeholders/clients/image-4.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    }
                },
                r = {
                    CoverBg: {
                        src: "/assets/placeholders/cover/cover-bg.webp",
                        originalWidth: 1668,
                        originalHeight: 1200
                    }
                },
                n = {
                    Architect: {
                        1: {
                            src: "/assets/placeholders/gallery/architect/1.webp",
                            originalWidth: 2700,
                            originalHeight: 1800
                        },
                        2: {
                            src: "/assets/placeholders/gallery/architect/2.webp",
                            originalWidth: 1800,
                            originalHeight: 1200
                        },
                        3: {
                            src: "/assets/placeholders/gallery/architect/3.webp",
                            originalWidth: 1200,
                            originalHeight: 1350
                        },
                        4: {
                            src: "/assets/placeholders/gallery/architect/4.webp",
                            originalWidth: 1200,
                            originalHeight: 900
                        },
                        5: {
                            src: "/assets/placeholders/gallery/architect/5.webp",
                            originalWidth: 1200,
                            originalHeight: 1200
                        },
                        6: {
                            src: "/assets/placeholders/gallery/architect/6.webp",
                            originalWidth: 1200,
                            originalHeight: 1200
                        },
                        7: {
                            src: "/assets/placeholders/gallery/architect/7.webp",
                            originalWidth: 1200,
                            originalHeight: 1500
                        },
                        8: {
                            src: "/assets/placeholders/gallery/architect/8.webp",
                            originalWidth: 1200,
                            originalHeight: 1200
                        },
                        9: {
                            src: "/assets/placeholders/gallery/architect/9.webp",
                            originalWidth: 1200,
                            originalHeight: 1500
                        },
                        10: {
                            src: "/assets/placeholders/gallery/architect/10.webp",
                            originalWidth: 1200,
                            originalHeight: 1200
                        },
                        11: {
                            src: "/assets/placeholders/gallery/architect/11.webp",
                            originalWidth: 1200,
                            originalHeight: 1200
                        },
                        12: {
                            src: "/assets/placeholders/gallery/architect/12.webp",
                            originalWidth: 1200,
                            originalHeight: 1500
                        },
                        13: {
                            src: "/assets/placeholders/gallery/architect/13.webp",
                            originalWidth: 1200,
                            originalHeight: 1200
                        }
                    },
                    Extracurricular: {
                        1: {
                            src: "/assets/placeholders/gallery/extracurricular/1.webp",
                            originalWidth: 1140,
                            originalHeight: 1236
                        },
                        2: {
                            src: "/assets/placeholders/gallery/extracurricular/2.webp",
                            originalWidth: 1140,
                            originalHeight: 818
                        },
                        3: {
                            src: "/assets/placeholders/gallery/extracurricular/3.webp",
                            originalWidth: 1140,
                            originalHeight: 1140
                        },
                        4: {
                            src: "/assets/placeholders/gallery/extracurricular/4.webp",
                            originalWidth: 1140,
                            originalHeight: 1140
                        }
                    },
                    Interior: {
                        1: {
                            src: "/assets/placeholders/gallery/interior/1.webp",
                            originalWidth: 2700,
                            originalHeight: 1800
                        },
                        2: {
                            src: "/assets/placeholders/gallery/interior/2.webp",
                            originalWidth: 1800,
                            originalHeight: 1200
                        },
                        3: {
                            src: "/assets/placeholders/gallery/interior/3.webp",
                            originalWidth: 1200,
                            originalHeight: 1350
                        },
                        4: {
                            src: "/assets/placeholders/gallery/interior/4.webp",
                            originalWidth: 1200,
                            originalHeight: 900
                        },
                        5: {
                            src: "/assets/placeholders/gallery/interior/5.webp",
                            originalWidth: 1200,
                            originalHeight: 1200
                        },
                        6: {
                            src: "/assets/placeholders/gallery/interior/6.webp",
                            originalWidth: 1200,
                            originalHeight: 1200
                        },
                        7: {
                            src: "/assets/placeholders/gallery/interior/7.webp",
                            originalWidth: 1200,
                            originalHeight: 1500
                        },
                        8: {
                            src: "/assets/placeholders/gallery/interior/8.webp",
                            originalWidth: 1200,
                            originalHeight: 1200
                        },
                        9: {
                            src: "/assets/placeholders/gallery/interior/9.webp",
                            originalWidth: 1200,
                            originalHeight: 1200
                        },
                        10: {
                            src: "/assets/placeholders/gallery/interior/10.webp",
                            originalWidth: 1200,
                            originalHeight: 1200
                        },
                        11: {
                            src: "/assets/placeholders/gallery/interior/11.webp",
                            originalWidth: 1200,
                            originalHeight: 1500
                        },
                        12: {
                            src: "/assets/placeholders/gallery/interior/12.webp",
                            originalWidth: 1200,
                            originalHeight: 1200
                        },
                        13: {
                            src: "/assets/placeholders/gallery/interior/13.webp",
                            originalWidth: 1200,
                            originalHeight: 1800
                        },
                        14: {
                            src: "/assets/placeholders/gallery/interior/14.webp",
                            originalWidth: 1200,
                            originalHeight: 1500
                        },
                        15: {
                            src: "/assets/placeholders/gallery/interior/15.webp",
                            originalWidth: 1200,
                            originalHeight: 1800
                        },
                        16: {
                            src: "/assets/placeholders/gallery/interior/16.webp",
                            originalWidth: 1200,
                            originalHeight: 1500
                        }
                    },
                    Landscape: {
                        1: {
                            src: "/assets/placeholders/gallery/landscape/1.webp",
                            originalWidth: 2700,
                            originalHeight: 1800
                        },
                        2: {
                            src: "/assets/placeholders/gallery/landscape/2.webp",
                            originalWidth: 1800,
                            originalHeight: 1200
                        },
                        3: {
                            src: "/assets/placeholders/gallery/landscape/3.webp",
                            originalWidth: 1200,
                            originalHeight: 1350
                        },
                        4: {
                            src: "/assets/placeholders/gallery/landscape/4.webp",
                            originalWidth: 1200,
                            originalHeight: 900
                        },
                        5: {
                            src: "/assets/placeholders/gallery/landscape/5.webp",
                            originalWidth: 1200,
                            originalHeight: 1200
                        },
                        6: {
                            src: "/assets/placeholders/gallery/landscape/6.webp",
                            originalWidth: 1200,
                            originalHeight: 1200
                        },
                        7: {
                            src: "/assets/placeholders/gallery/landscape/7.webp",
                            originalWidth: 1200,
                            originalHeight: 1500
                        },
                        8: {
                            src: "/assets/placeholders/gallery/landscape/8.webp",
                            originalWidth: 1800,
                            originalHeight: 1200
                        },
                        9: {
                            src: "/assets/placeholders/gallery/landscape/9.webp",
                            originalWidth: 1200,
                            originalHeight: 1500
                        },
                        10: {
                            src: "/assets/placeholders/gallery/landscape/10.webp",
                            originalWidth: 1200,
                            originalHeight: 1500
                        },
                        11: {
                            src: "/assets/placeholders/gallery/landscape/11.webp",
                            originalWidth: 1800,
                            originalHeight: 1200
                        },
                        12: {
                            src: "/assets/placeholders/gallery/landscape/12.webp",
                            originalWidth: 1200,
                            originalHeight: 1500
                        },
                        13: {
                            src: "/assets/placeholders/gallery/landscape/13.webp",
                            originalWidth: 1200,
                            originalHeight: 1200
                        }
                    },
                    Other: {
                        1: {
                            src: "/assets/placeholders/gallery/other/1.webp",
                            originalWidth: 2700,
                            originalHeight: 1800
                        },
                        2: {
                            src: "/assets/placeholders/gallery/other/2.webp",
                            originalWidth: 1800,
                            originalHeight: 1200
                        },
                        3: {
                            src: "/assets/placeholders/gallery/other/3.webp",
                            originalWidth: 1200,
                            originalHeight: 1350
                        },
                        4: {
                            src: "/assets/placeholders/gallery/other/4.webp",
                            originalWidth: 1200,
                            originalHeight: 900
                        },
                        5: {
                            src: "/assets/placeholders/gallery/other/5.webp",
                            originalWidth: 1200,
                            originalHeight: 1200
                        },
                        6: {
                            src: "/assets/placeholders/gallery/other/6.webp",
                            originalWidth: 1200,
                            originalHeight: 1200
                        },
                        7: {
                            src: "/assets/placeholders/gallery/other/7.webp",
                            originalWidth: 1500,
                            originalHeight: 1200
                        },
                        8: {
                            src: "/assets/placeholders/gallery/other/8.webp",
                            originalWidth: 1200,
                            originalHeight: 1500
                        },
                        9: {
                            src: "/assets/placeholders/gallery/other/9.webp",
                            originalWidth: 1200,
                            originalHeight: 1500
                        },
                        10: {
                            src: "/assets/placeholders/gallery/other/10.webp",
                            originalWidth: 1200,
                            originalHeight: 1200
                        },
                        11: {
                            src: "/assets/placeholders/gallery/other/11.webp",
                            originalWidth: 1200,
                            originalHeight: 1500
                        },
                        12: {
                            src: "/assets/placeholders/gallery/other/12.webp",
                            originalWidth: 1200,
                            originalHeight: 1200
                        },
                        13: {
                            src: "/assets/placeholders/gallery/other/13.webp",
                            originalWidth: 728,
                            originalHeight: 970
                        },
                        14: {
                            src: "/assets/placeholders/gallery/other/14.webp",
                            originalWidth: 728,
                            originalHeight: 970
                        },
                        15: {
                            src: "/assets/placeholders/gallery/other/15.webp",
                            originalWidth: 728,
                            originalHeight: 970
                        },
                        16: {
                            src: "/assets/placeholders/gallery/other/16.webp",
                            originalWidth: 728,
                            originalHeight: 970
                        },
                        17: {
                            src: "/assets/placeholders/gallery/other/17.webp",
                            originalWidth: 728,
                            originalHeight: 970
                        },
                        18: {
                            src: "/assets/placeholders/gallery/other/18.webp",
                            originalWidth: 728,
                            originalHeight: 970
                        },
                        19: {
                            src: "/assets/placeholders/gallery/other/19.webp",
                            originalWidth: 522,
                            originalHeight: 696
                        }
                    }
                },
                o = {
                    AgendaV2: {
                        src: "/assets/placeholders/heroes/agenda-v2.svg",
                        originalWidth: 472,
                        originalHeight: 485
                    },
                    AgoraV3: {
                        src: "/assets/placeholders/heroes/agora-v3.webp",
                        originalWidth: 2880,
                        originalHeight: 968
                    },
                    ArtboardV1: {
                        src: "/assets/placeholders/heroes/artboard-v1.svg",
                        originalWidth: 920,
                        originalHeight: 384
                    },
                    BeigeArchitect: {
                        src: "/assets/placeholders/heroes/beige-architect.webp",
                        originalWidth: 2e3,
                        originalHeight: 1500
                    },
                    BeigeDefault: {
                        src: "/assets/placeholders/heroes/beige-default.webp",
                        originalWidth: 2880,
                        originalHeight: 1404
                    },
                    BeigeInteriorDecorator: {
                        src: "/assets/placeholders/heroes/beige-interior-decorator.webp",
                        originalWidth: 2e3,
                        originalHeight: 1500
                    },
                    BeigeInteriorDesigner: {
                        src: "/assets/placeholders/heroes/beige-interior-designer.webp",
                        originalWidth: 2e3,
                        originalHeight: 1500
                    },
                    BeigeLandscape: {
                        src: "/assets/placeholders/heroes/beige-landscape.webp",
                        originalWidth: 2e3,
                        originalHeight: 1500
                    },
                    BeigeOther: {
                        src: "/assets/placeholders/heroes/beige-other.webp",
                        originalWidth: 2e3,
                        originalHeight: 1500
                    },
                    BeigeTall: {
                        src: "/assets/placeholders/heroes/beige-tall.webp",
                        originalWidth: 1401,
                        originalHeight: 1848
                    },
                    BillboardV2: {
                        src: "/assets/placeholders/heroes/billboard-v2.svg",
                        originalWidth: 1440,
                        originalHeight: 512
                    },
                    ChapterV1: {
                        src: "/assets/placeholders/heroes/chapter-v1.webp",
                        originalWidth: 3648,
                        originalHeight: 2907
                    },
                    Colorful1: {
                        src: "/assets/placeholders/heroes/colorful-1.webp",
                        originalWidth: 1500,
                        originalHeight: 2e3
                    },
                    Colorful2: {
                        src: "/assets/placeholders/heroes/colorful-2.webp",
                        originalWidth: 1500,
                        originalHeight: 2e3
                    },
                    ColorfulArchitect: {
                        src: "/assets/placeholders/heroes/colorful-architect.webp",
                        originalWidth: 1500,
                        originalHeight: 2e3
                    },
                    ColorfulHero2: {
                        src: "/assets/placeholders/heroes/colorful-hero-2.webp",
                        originalWidth: 1500,
                        originalHeight: 2e3
                    },
                    ColorfulInteriorDecorator: {
                        src: "/assets/placeholders/heroes/colorful-interior-decorator.webp",
                        originalWidth: 1500,
                        originalHeight: 2e3
                    },
                    ColorfulInteriorDesigner: {
                        src: "/assets/placeholders/heroes/colorful-interior-designer.webp",
                        originalWidth: 1500,
                        originalHeight: 2e3
                    },
                    ColorfulLandscape: {
                        src: "/assets/placeholders/heroes/colorful-landscape.webp",
                        originalWidth: 1500,
                        originalHeight: 2e3
                    },
                    ColorfulOther: {
                        src: "/assets/placeholders/heroes/colorful-other.webp",
                        originalWidth: 1500,
                        originalHeight: 2e3
                    },
                    Cubic1V1: {
                        src: "/assets/placeholders/heroes/cubic-1-v1.webp",
                        originalWidth: 3346,
                        originalHeight: 3957
                    },
                    Cubic2V1: {
                        src: "/assets/placeholders/heroes/cubic-2-v1.webp",
                        originalWidth: 2460,
                        originalHeight: 2327
                    },
                    Cubic3V1: {
                        src: "/assets/placeholders/heroes/cubic-3-v1.webp",
                        originalWidth: 1928,
                        originalHeight: 1718
                    },
                    DarkArchitect1: {
                        src: "/assets/placeholders/heroes/dark-architect-1.webp",
                        originalWidth: 4e3,
                        originalHeight: 3e3
                    },
                    DarkArchitect2: {
                        src: "/assets/placeholders/heroes/dark-architect-2.webp",
                        originalWidth: 4e3,
                        originalHeight: 3e3
                    },
                    DarkArchitect3: {
                        src: "/assets/placeholders/heroes/dark-architect-3.webp",
                        originalWidth: 4e3,
                        originalHeight: 3e3
                    },
                    DarkBeigeArchitect: {
                        src: "/assets/placeholders/heroes/dark-beige-architect.webp",
                        originalWidth: 2e3,
                        originalHeight: 1500
                    },
                    DarkBeigeDefault: {
                        src: "/assets/placeholders/heroes/dark-beige-default.webp",
                        originalWidth: 2880,
                        originalHeight: 1766
                    },
                    DarkBeigeInteriorDecorator: {
                        src: "/assets/placeholders/heroes/dark-beige-interior-decorator.webp",
                        originalWidth: 2e3,
                        originalHeight: 1500
                    },
                    DarkBeigeInteriorDesigner: {
                        src: "/assets/placeholders/heroes/dark-beige-interior-designer.webp",
                        originalWidth: 2e3,
                        originalHeight: 1500
                    },
                    DarkBeigeLandscape: {
                        src: "/assets/placeholders/heroes/dark-beige-landscape.webp",
                        originalWidth: 2e3,
                        originalHeight: 1500
                    },
                    DarkBeigeOther: {
                        src: "/assets/placeholders/heroes/dark-beige-other.webp",
                        originalWidth: 2e3,
                        originalHeight: 1500
                    },
                    DarkDefault1: {
                        src: "/assets/placeholders/heroes/dark-default-1.webp",
                        originalWidth: 4e3,
                        originalHeight: 3e3
                    },
                    DarkDefault2: {
                        src: "/assets/placeholders/heroes/dark-default-2.webp",
                        originalWidth: 4e3,
                        originalHeight: 3e3
                    },
                    DarkDefault3: {
                        src: "/assets/placeholders/heroes/dark-default-3.webp",
                        originalWidth: 4e3,
                        originalHeight: 3e3
                    },
                    DarkInteriorDecorator1: {
                        src: "/assets/placeholders/heroes/dark-interior-decorator-1.webp",
                        originalWidth: 4e3,
                        originalHeight: 3e3
                    },
                    DarkInteriorDecorator2: {
                        src: "/assets/placeholders/heroes/dark-interior-decorator-2.webp",
                        originalWidth: 4e3,
                        originalHeight: 3e3
                    },
                    DarkInteriorDecorator3: {
                        src: "/assets/placeholders/heroes/dark-interior-decorator-3.webp",
                        originalWidth: 4e3,
                        originalHeight: 3e3
                    },
                    DarkInteriorDesigner1: {
                        src: "/assets/placeholders/heroes/dark-interior-designer-1.webp",
                        originalWidth: 4e3,
                        originalHeight: 3e3
                    },
                    DarkInteriorDesigner2: {
                        src: "/assets/placeholders/heroes/dark-interior-designer-2.webp",
                        originalWidth: 4e3,
                        originalHeight: 3e3
                    },
                    DarkInteriorDesigner3: {
                        src: "/assets/placeholders/heroes/dark-interior-designer-3.webp",
                        originalWidth: 4e3,
                        originalHeight: 3e3
                    },
                    DarkLandscape1: {
                        src: "/assets/placeholders/heroes/dark-landscape-1.webp",
                        originalWidth: 4e3,
                        originalHeight: 3e3
                    },
                    DarkLandscape2: {
                        src: "/assets/placeholders/heroes/dark-landscape-2.webp",
                        originalWidth: 4e3,
                        originalHeight: 3e3
                    },
                    DarkLandscape3: {
                        src: "/assets/placeholders/heroes/dark-landscape-3.webp",
                        originalWidth: 4e3,
                        originalHeight: 3e3
                    },
                    DarkOther1: {
                        src: "/assets/placeholders/heroes/dark-other-1.webp",
                        originalWidth: 4e3,
                        originalHeight: 3e3
                    },
                    DarkOther2: {
                        src: "/assets/placeholders/heroes/dark-other-2.webp",
                        originalWidth: 4e3,
                        originalHeight: 3e3
                    },
                    DarkOther3: {
                        src: "/assets/placeholders/heroes/dark-other-3.webp",
                        originalWidth: 4e3,
                        originalHeight: 3e3
                    },
                    GoldenArchitect1: {
                        src: "/assets/placeholders/heroes/golden-architect-1.webp",
                        originalWidth: 4e3,
                        originalHeight: 4e3
                    },
                    GoldenArchitect2: {
                        src: "/assets/placeholders/heroes/golden-architect-2.webp",
                        originalWidth: 4e3,
                        originalHeight: 4e3
                    },
                    GoldenArchitect3: {
                        src: "/assets/placeholders/heroes/golden-architect-3.webp",
                        originalWidth: 4e3,
                        originalHeight: 4e3
                    },
                    GoldenInteriorDecorator1: {
                        src: "/assets/placeholders/heroes/golden-interior-decorator-1.webp",
                        originalWidth: 4e3,
                        originalHeight: 4e3
                    },
                    GoldenInteriorDecorator2: {
                        src: "/assets/placeholders/heroes/golden-interior-decorator-2.webp",
                        originalWidth: 4e3,
                        originalHeight: 4e3
                    },
                    GoldenInteriorDecorator3: {
                        src: "/assets/placeholders/heroes/golden-interior-decorator-3.webp",
                        originalWidth: 4e3,
                        originalHeight: 4e3
                    },
                    GoldenInteriorDesigner1: {
                        src: "/assets/placeholders/heroes/golden-interior-designer-1.webp",
                        originalWidth: 4e3,
                        originalHeight: 4e3
                    },
                    GoldenInteriorDesigner2: {
                        src: "/assets/placeholders/heroes/golden-interior-designer-2.webp",
                        originalWidth: 4e3,
                        originalHeight: 4e3
                    },
                    GoldenInteriorDesigner3: {
                        src: "/assets/placeholders/heroes/golden-interior-designer-3.webp",
                        originalWidth: 4e3,
                        originalHeight: 4e3
                    },
                    GoldenLandscape1: {
                        src: "/assets/placeholders/heroes/golden-landscape-1.webp",
                        originalWidth: 4e3,
                        originalHeight: 4e3
                    },
                    GoldenLandscape2: {
                        src: "/assets/placeholders/heroes/golden-landscape-2.webp",
                        originalWidth: 4e3,
                        originalHeight: 4e3
                    },
                    GoldenLandscape3: {
                        src: "/assets/placeholders/heroes/golden-landscape-3.webp",
                        originalWidth: 4e3,
                        originalHeight: 4e3
                    },
                    GoldenOther1: {
                        src: "/assets/placeholders/heroes/golden-other-1.webp",
                        originalWidth: 4e3,
                        originalHeight: 4e3
                    },
                    GoldenOther2: {
                        src: "/assets/placeholders/heroes/golden-other-2.webp",
                        originalWidth: 4e3,
                        originalHeight: 4e3
                    },
                    GoldenOther3: {
                        src: "/assets/placeholders/heroes/golden-other-3.webp",
                        originalWidth: 4e3,
                        originalHeight: 4e3
                    },
                    JournalV1: {
                        src: "/assets/placeholders/heroes/journal-v1.svg",
                        originalWidth: 472,
                        originalHeight: 485
                    },
                    LetterpressV1: {
                        src: "/assets/placeholders/heroes/letterpress-v1.svg",
                        originalWidth: 160,
                        originalHeight: 160
                    },
                    MuseumV1: {
                        src: "/assets/placeholders/heroes/museum-v1.webp",
                        originalWidth: 2880,
                        originalHeight: 1308
                    },
                    NeutralArchitect: {
                        src: "/assets/placeholders/heroes/neutral-architect.webp",
                        originalWidth: 2e3,
                        originalHeight: 1e3
                    },
                    NeutralDefault: {
                        src: "/assets/placeholders/heroes/neutral-default.webp",
                        originalWidth: 2880,
                        originalHeight: 2520
                    },
                    NeutralInteriorDecorator: {
                        src: "/assets/placeholders/heroes/neutral-interior-decorator.webp",
                        originalWidth: 2e3,
                        originalHeight: 1e3
                    },
                    NeutralInteriorDesigner: {
                        src: "/assets/placeholders/heroes/neutral-interior-designer.webp",
                        originalWidth: 2e3,
                        originalHeight: 1e3
                    },
                    NeutralLandscape: {
                        src: "/assets/placeholders/heroes/neutral-landscape.webp",
                        originalWidth: 2e3,
                        originalHeight: 1e3
                    },
                    NeutralOther: {
                        src: "/assets/placeholders/heroes/neutral-other.webp",
                        originalWidth: 2e3,
                        originalHeight: 1e3
                    },
                    Neutral2Architect: {
                        src: "/assets/placeholders/heroes/neutral2-architect.webp",
                        originalWidth: 2e3,
                        originalHeight: 1500
                    },
                    Neutral2Default: {
                        src: "/assets/placeholders/heroes/neutral2-default.webp",
                        originalWidth: 2880,
                        originalHeight: 2520
                    },
                    Neutral2InteriorDecorator: {
                        src: "/assets/placeholders/heroes/neutral2-interior-decorator.webp",
                        originalWidth: 2e3,
                        originalHeight: 1500
                    },
                    Neutral2InteriorDesigner: {
                        src: "/assets/placeholders/heroes/neutral2-interior-designer.webp",
                        originalWidth: 2e3,
                        originalHeight: 1500
                    },
                    Neutral2Landscape: {
                        src: "/assets/placeholders/heroes/neutral2-landscape.webp",
                        originalWidth: 2e3,
                        originalHeight: 1500
                    },
                    Neutral2Other: {
                        src: "/assets/placeholders/heroes/neutral2-other.webp",
                        originalWidth: 2e3,
                        originalHeight: 1500
                    },
                    PalazzoV2: {
                        src: "/assets/placeholders/heroes/palazzo-v2.webp",
                        originalWidth: 2376,
                        originalHeight: 960
                    },
                    PersonHero: {
                        src: "/assets/placeholders/heroes/person-hero.webp",
                        originalWidth: 2e3,
                        originalHeight: 2e3
                    },
                    TypewriterV1: {
                        src: "/assets/placeholders/heroes/typewriter-v1.svg",
                        originalWidth: 160,
                        originalHeight: 160
                    }
                },
                s = {},
                g = {
                    Amara: {
                        src: "/assets/placeholders/logos/amara.png",
                        originalWidth: 548,
                        originalHeight: 144
                    },
                    Aven: {
                        src: "/assets/placeholders/logos/aven.png",
                        originalWidth: 482,
                        originalHeight: 144
                    },
                    Goldline: {
                        src: "/assets/placeholders/logos/goldline.png",
                        originalWidth: 619,
                        originalHeight: 144
                    },
                    ZooTv: {
                        src: "/assets/placeholders/logos/zoo-tv.png",
                        originalWidth: 456,
                        originalHeight: 144
                    }
                },
                h = {
                    1: {
                        src: "/assets/placeholders/numbers/1.webp",
                        originalWidth: 1512,
                        originalHeight: 2268
                    },
                    2: {
                        src: "/assets/placeholders/numbers/2.webp",
                        originalWidth: 1512,
                        originalHeight: 2268
                    },
                    3: {
                        src: "/assets/placeholders/numbers/3.webp",
                        originalWidth: 2268,
                        originalHeight: 1512
                    },
                    4: {
                        src: "/assets/placeholders/numbers/4.webp",
                        originalWidth: 2403,
                        originalHeight: 3600
                    }
                },
                p = {
                    Angela1: {
                        src: "/assets/placeholders/people/angela-1.webp",
                        originalWidth: 1500,
                        originalHeight: 1500
                    },
                    Angela2: {
                        src: "/assets/placeholders/people/angela-2.webp",
                        originalWidth: 1500,
                        originalHeight: 1500
                    },
                    Angela3: {
                        src: "/assets/placeholders/people/angela-3.webp",
                        originalWidth: 1500,
                        originalHeight: 1500
                    },
                    Barbie1: {
                        src: "/assets/placeholders/people/barbie-1.webp",
                        originalWidth: 3e3,
                        originalHeight: 2250
                    },
                    Barbie2: {
                        src: "/assets/placeholders/people/barbie-2.webp",
                        originalWidth: 3e3,
                        originalHeight: 2250
                    },
                    Barbie3: {
                        src: "/assets/placeholders/people/barbie-3.webp",
                        originalWidth: 3e3,
                        originalHeight: 2250
                    },
                    Claire1: {
                        src: "/assets/placeholders/people/claire-1.webp",
                        originalWidth: 1500,
                        originalHeight: 1500
                    },
                    Claire2: {
                        src: "/assets/placeholders/people/claire-2.webp",
                        originalWidth: 1500,
                        originalHeight: 1500
                    },
                    Claire3: {
                        src: "/assets/placeholders/people/claire-3.webp",
                        originalWidth: 1500,
                        originalHeight: 1500
                    },
                    Daisy1: {
                        src: "/assets/placeholders/people/daisy-1.webp",
                        originalWidth: 4e3,
                        originalHeight: 4e3
                    },
                    Daisy2: {
                        src: "/assets/placeholders/people/daisy-2.webp",
                        originalWidth: 4e3,
                        originalHeight: 4e3
                    },
                    James1: {
                        src: "/assets/placeholders/people/james-1.webp",
                        originalWidth: 1500,
                        originalHeight: 1500
                    },
                    James2: {
                        src: "/assets/placeholders/people/james-2.webp",
                        originalWidth: 1500,
                        originalHeight: 1500
                    },
                    James3: {
                        src: "/assets/placeholders/people/james-3.webp",
                        originalWidth: 1500,
                        originalHeight: 1500
                    },
                    Lucy1: {
                        src: "/assets/placeholders/people/lucy-1.webp",
                        originalWidth: 4e3,
                        originalHeight: 3e3
                    },
                    Lucy2: {
                        src: "/assets/placeholders/people/lucy-2.webp",
                        originalWidth: 4e3,
                        originalHeight: 3e3
                    },
                    Lucy3: {
                        src: "/assets/placeholders/people/lucy-3.webp",
                        originalWidth: 4e3,
                        originalHeight: 3e3
                    },
                    Mike1: {
                        src: "/assets/placeholders/people/mike-1.webp",
                        originalWidth: 1500,
                        originalHeight: 1500
                    },
                    Mike2: {
                        src: "/assets/placeholders/people/mike-2.webp",
                        originalWidth: 1500,
                        originalHeight: 1500
                    },
                    Mike3: {
                        src: "/assets/placeholders/people/mike-3.webp",
                        originalWidth: 1500,
                        originalHeight: 1500
                    },
                    Naomi1: {
                        src: "/assets/placeholders/people/naomi-1.webp",
                        originalWidth: 2e3,
                        originalHeight: 2e3
                    },
                    Naomi2: {
                        src: "/assets/placeholders/people/naomi-2.webp",
                        originalWidth: 4e3,
                        originalHeight: 3e3
                    },
                    Naomi3: {
                        src: "/assets/placeholders/people/naomi-3.webp",
                        originalWidth: 2e3,
                        originalHeight: 2e3
                    },
                    Nathan1: {
                        src: "/assets/placeholders/people/nathan-1.webp",
                        originalWidth: 2e3,
                        originalHeight: 2e3
                    },
                    Nathan2: {
                        src: "/assets/placeholders/people/nathan-2.webp",
                        originalWidth: 2e3,
                        originalHeight: 2e3
                    },
                    Simon1: {
                        src: "/assets/placeholders/people/simon-1.webp",
                        originalWidth: 2e3,
                        originalHeight: 2e3
                    },
                    Simon2: {
                        src: "/assets/placeholders/people/simon-2.webp",
                        originalWidth: 2e3,
                        originalHeight: 2e3
                    },
                    SimonTall: {
                        src: "/assets/placeholders/people/simon-tall.webp",
                        originalWidth: 783,
                        originalHeight: 1305
                    },
                    Simon21: {
                        src: "/assets/placeholders/people/simon2-1.webp",
                        originalWidth: 1500,
                        originalHeight: 1500
                    },
                    Simon22: {
                        src: "/assets/placeholders/people/simon2-2.webp",
                        originalWidth: 1500,
                        originalHeight: 1500
                    },
                    Simon23: {
                        src: "/assets/placeholders/people/simon2-3.webp",
                        originalWidth: 1500,
                        originalHeight: 1500
                    },
                    Sue1: {
                        src: "/assets/placeholders/people/sue-1.webp",
                        originalWidth: 2e3,
                        originalHeight: 2e3
                    },
                    Sue2: {
                        src: "/assets/placeholders/people/sue-2.webp",
                        originalWidth: 2e3,
                        originalHeight: 2e3
                    },
                    Summer1: {
                        src: "/assets/placeholders/people/summer-1.webp",
                        originalWidth: 1500,
                        originalHeight: 1500
                    },
                    Summer2: {
                        src: "/assets/placeholders/people/summer-2.webp",
                        originalWidth: 1500,
                        originalHeight: 1500
                    },
                    Summer3: {
                        src: "/assets/placeholders/people/summer-3.webp",
                        originalWidth: 1500,
                        originalHeight: 1500
                    },
                    Yara1: {
                        src: "/assets/placeholders/people/yara-1.webp",
                        originalWidth: 1500,
                        originalHeight: 1500
                    },
                    Yara2: {
                        src: "/assets/placeholders/people/yara-2.webp",
                        originalWidth: 1500,
                        originalHeight: 1500
                    },
                    Yara3: {
                        src: "/assets/placeholders/people/yara-3.webp",
                        originalWidth: 1500,
                        originalHeight: 1500
                    }
                },
                d = {
                    Architect: {
                        1: {
                            src: "/assets/placeholders/plans/architect/1.webp",
                            originalWidth: 1200,
                            originalHeight: 1200
                        },
                        2: {
                            src: "/assets/placeholders/plans/architect/2.webp",
                            originalWidth: 1200,
                            originalHeight: 1200
                        }
                    },
                    Interior: {
                        1: {
                            src: "/assets/placeholders/plans/interior/1.webp",
                            originalWidth: 1200,
                            originalHeight: 1200
                        },
                        2: {
                            src: "/assets/placeholders/plans/interior/2.webp",
                            originalWidth: 1200,
                            originalHeight: 1200
                        }
                    }
                },
                c = {
                    1: {
                        src: "/assets/placeholders/process/1.webp",
                        originalWidth: 1040,
                        originalHeight: 800
                    },
                    2: {
                        src: "/assets/placeholders/process/2.webp",
                        originalWidth: 800,
                        originalHeight: 615
                    },
                    3: {
                        src: "/assets/placeholders/process/3.webp",
                        originalWidth: 800,
                        originalHeight: 615
                    },
                    4: {
                        src: "/assets/placeholders/process/4.webp",
                        originalWidth: 392,
                        originalHeight: 420
                    },
                    5: {
                        src: "/assets/placeholders/process/5.webp",
                        originalWidth: 392,
                        originalHeight: 420
                    },
                    6: {
                        src: "/assets/placeholders/process/6.webp",
                        originalWidth: 392,
                        originalHeight: 420
                    },
                    7: {
                        src: "/assets/placeholders/process/7.webp",
                        originalWidth: 392,
                        originalHeight: 420
                    }
                },
                A = {
                    Laptop4: {
                        src: "/assets/placeholders/screenshots/laptop-4.webp",
                        originalWidth: 654,
                        originalHeight: 409
                    },
                    Laptop3: {
                        src: "/assets/placeholders/screenshots/laptop-3.webp",
                        originalWidth: 654,
                        originalHeight: 409
                    },
                    Laptop2: {
                        src: "/assets/placeholders/screenshots/laptop-2.webp",
                        originalWidth: 654,
                        originalHeight: 430
                    },
                    Laptop: {
                        src: "/assets/placeholders/screenshots/laptop.webp",
                        originalWidth: 653,
                        originalHeight: 408
                    },
                    Phone: {
                        src: "/assets/placeholders/screenshots/phone.webp",
                        originalWidth: 317,
                        originalHeight: 686
                    },
                    Phone2: {
                        src: "/assets/placeholders/screenshots/phone-2.webp",
                        originalWidth: 317,
                        originalHeight: 688
                    }
                },
                S = {
                    Image1: {
                        src: "/assets/placeholders/services/image-1.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image10: {
                        src: "/assets/placeholders/services/image-10.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image11: {
                        src: "/assets/placeholders/services/image-11.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image12: {
                        src: "/assets/placeholders/services/image-12.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image13: {
                        src: "/assets/placeholders/services/image-13.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image14: {
                        src: "/assets/placeholders/services/image-14.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image15: {
                        src: "/assets/placeholders/services/image-15.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image16: {
                        src: "/assets/placeholders/services/image-16.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image17: {
                        src: "/assets/placeholders/services/image-17.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image18: {
                        src: "/assets/placeholders/services/image-18.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image19: {
                        src: "/assets/placeholders/services/image-19.webp",
                        originalWidth: 1920,
                        originalHeight: 2880
                    },
                    Image20: {
                        src: "/assets/placeholders/services/image-20.webp",
                        originalWidth: 1920,
                        originalHeight: 2880
                    },
                    Image21: {
                        src: "/assets/placeholders/services/image-21.webp",
                        originalWidth: 1920,
                        originalHeight: 2880
                    },
                    Image22: {
                        src: "/assets/placeholders/services/image-22.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image23: {
                        src: "/assets/placeholders/services/image-23.webp",
                        originalWidth: 522,
                        originalHeight: 522
                    },
                    Image24: {
                        src: "/assets/placeholders/services/image-24.webp",
                        originalWidth: 522,
                        originalHeight: 522
                    },
                    Image25: {
                        src: "/assets/placeholders/services/image-25.webp",
                        originalWidth: 522,
                        originalHeight: 522
                    },
                    Image26: {
                        src: "/assets/placeholders/services/image-26.webp",
                        originalWidth: 522,
                        originalHeight: 522
                    },
                    Image27: {
                        src: "/assets/placeholders/services/image-27.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image28: {
                        src: "/assets/placeholders/services/image-28.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image29: {
                        src: "/assets/placeholders/services/image-29.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image30: {
                        src: "/assets/placeholders/services/image-30.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image31: {
                        src: "/assets/placeholders/services/image-31.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image32: {
                        src: "/assets/placeholders/services/image-32.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image33: {
                        src: "/assets/placeholders/services/image-33.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image34: {
                        src: "/assets/placeholders/services/image-34.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image35: {
                        src: "/assets/placeholders/services/image-35.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image36: {
                        src: "/assets/placeholders/services/image-36.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image37: {
                        src: "/assets/placeholders/services/image-37.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image38: {
                        src: "/assets/placeholders/services/image-38.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image39: {
                        src: "/assets/placeholders/services/image-39.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image2: {
                        src: "/assets/placeholders/services/image-2.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image3: {
                        src: "/assets/placeholders/services/image-3.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image4: {
                        src: "/assets/placeholders/services/image-4.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image5: {
                        src: "/assets/placeholders/services/image-5.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image6: {
                        src: "/assets/placeholders/services/image-6.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image7: {
                        src: "/assets/placeholders/services/image-7.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image8: {
                        src: "/assets/placeholders/services/image-8.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    },
                    Image9: {
                        src: "/assets/placeholders/services/image-9.webp",
                        originalWidth: 522,
                        originalHeight: 560
                    }
                },
                m = {
                    1: {
                        src: "/assets/placeholders/testimonial/1.webp",
                        originalWidth: 1140,
                        originalHeight: 960
                    },
                    2: {
                        src: "/assets/placeholders/testimonial/2.webp",
                        originalWidth: 855,
                        originalHeight: 600
                    },
                    3: {
                        src: "/assets/placeholders/testimonial/3.webp",
                        originalWidth: 855,
                        originalHeight: 600
                    },
                    4: {
                        src: "/assets/placeholders/testimonial/4.webp",
                        originalWidth: 1140,
                        originalHeight: 960
                    }
                },
                y = {
                    Architect: {
                        1: {
                            src: "/assets/placeholders/thumbnails/architect/1.webp",
                            originalWidth: 1800,
                            originalHeight: 1200
                        },
                        2: {
                            src: "/assets/placeholders/thumbnails/architect/2.webp",
                            originalWidth: 1200,
                            originalHeight: 1800
                        },
                        3: {
                            src: "/assets/placeholders/thumbnails/architect/3.webp",
                            originalWidth: 1200,
                            originalHeight: 1500
                        },
                        4: {
                            src: "/assets/placeholders/thumbnails/architect/4.webp",
                            originalWidth: 1200,
                            originalHeight: 1800
                        },
                        5: {
                            src: "/assets/placeholders/thumbnails/architect/5.webp",
                            originalWidth: 1800,
                            originalHeight: 1200
                        },
                        6: {
                            src: "/assets/placeholders/thumbnails/architect/6.webp",
                            originalWidth: 1200,
                            originalHeight: 1500
                        }
                    },
                    Interior: {
                        1: {
                            src: "/assets/placeholders/thumbnails/interior/1.webp",
                            originalWidth: 1200,
                            originalHeight: 1200
                        },
                        2: {
                            src: "/assets/placeholders/thumbnails/interior/2.webp",
                            originalWidth: 1200,
                            originalHeight: 1800
                        },
                        3: {
                            src: "/assets/placeholders/thumbnails/interior/3.webp",
                            originalWidth: 1200,
                            originalHeight: 1200
                        },
                        4: {
                            src: "/assets/placeholders/thumbnails/interior/4.webp",
                            originalWidth: 1200,
                            originalHeight: 1200
                        },
                        5: {
                            src: "/assets/placeholders/thumbnails/interior/5.webp",
                            originalWidth: 1200,
                            originalHeight: 1200
                        },
                        6: {
                            src: "/assets/placeholders/thumbnails/interior/6.webp",
                            originalWidth: 1200,
                            originalHeight: 1500
                        }
                    }
                },
                b = {
                    Portrait: {
                        1: {
                            id: "shortform-1",
                            src: "/assets/video-placeholders/portrait/shortform-1.webm",
                            originalWidth: 1080,
                            originalHeight: 1920
                        },
                        2: {
                            id: "shortform-2",
                            src: "/assets/video-placeholders/portrait/shortform-2.webm",
                            originalWidth: 1080,
                            originalHeight: 1920
                        },
                        3: {
                            id: "shortform-3",
                            src: "/assets/video-placeholders/portrait/shortform-3.webm",
                            originalWidth: 1080,
                            originalHeight: 1920
                        },
                        4: {
                            id: "shortform-4",
                            src: "/assets/video-placeholders/portrait/shortform-4.webm",
                            originalWidth: 1080,
                            originalHeight: 1920
                        }
                    },
                    Landscape: {
                        1: {
                            id: "longform-1",
                            src: "/assets/video-placeholders/landscape/longform-1.webm",
                            originalWidth: 1920,
                            originalHeight: 1080
                        },
                        2: {
                            id: "longform-2",
                            src: "/assets/video-placeholders/landscape/longform-2.webm",
                            originalWidth: 1920,
                            originalHeight: 1080
                        }
                    }
                },
                u = {
                    lastUpdated: "2023. 11. 09."
                }
        },
        76102: function(e, i, t) {
            t.d(i, {
                X: function() {
                    return r
                }
            });
            var a = t(52322),
                l = t(61463);

            function r(e) {
                let {
                    children: i,
                    ...t
                } = e;
                return (0, a.jsxs)("div", {
                    className: (0, l.Z)("relative overflow-hidden rounded-xl bg-graphite-100 p-1.5 dark:bg-graphite-0", "IMAGE" === t.type && {
                        "rounded-2xl": t.width >= 776,
                        "rounded-[18px]": t.width >= 1188
                    }, "VIDEO" === t.type && ["rounded-[12px]"]),
                    children: [(0, a.jsx)("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-[#A8A8B500] to-[#A8A8B5FF] opacity-30 dark:from-[#DCDCDC00] dark:to-[#DCDCDCFF]"
                    }), (0, a.jsx)("div", {
                        className: (0, l.Z)("relative overflow-hidden rounded-lg bg-custom-bg", "IMAGE" === t.type && {
                            "rounded-[12px]": t.width >= 776,
                            "rounded-[14px]": t.width >= 1188
                        }, "VIDEO" === t.type && ["rounded-[8px]"]),
                        children: i
                    })]
                })
            }
        },
        49863: function(e, i, t) {
            t.d(i, {
                $: function() {
                    return r
                }
            });
            var a = t(52322),
                l = t(61463);

            function r(e) {
                let {
                    children: i,
                    ...t
                } = e;
                return (0, a.jsx)("div", {
                    className: (0, l.Z)("relative overflow-hidden rounded-[18px]", "IMAGE" === t.type && {
                        "rounded-[20px]": t.width >= 570,
                        "rounded-[24px]": t.width >= 776
                    }, "VIDEO" === t.type && {
                        "rounded-[18px]": "PORTRAIT" === t.orientation,
                        "rounded-[20px]": "LANDSCAPE" === t.orientation
                    }),
                    children: i
                })
            }
        },
        13855: function(e, i, t) {
            t.d(i, {
                $U: function() {
                    return a
                },
                M6: function() {
                    return r
                },
                aN: function() {
                    return n
                },
                nR: function() {
                    return l
                }
            });
            let a = {
                    SATOSHI_PLUS_POPPINS: {
                        headingDisplayName: "Satoshi",
                        paragraphDisplayName: "Poppins",
                        h1: {
                            family: "SATOSHI",
                            weight: 400,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "SATOSHI",
                            weight: 400,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "SATOSHI",
                            weight: 500,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "SATOSHI",
                            weight: 500,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "POPPINS",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "POPPINS",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "POPPINS",
                            lineHeight: 1.25,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    EPILOGUE: {
                        headingDisplayName: "Epilogue",
                        paragraphDisplayName: "Epilogue",
                        h1: {
                            family: "EPILOGUE",
                            weight: 300,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "EPILOGUE",
                            weight: 400,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "EPILOGUE",
                            weight: 500,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "EPILOGUE",
                            weight: 500,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "EPILOGUE",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "EPILOGUE",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "EPILOGUE",
                            lineHeight: 1.15,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    CLASH_DISPLAY_PLUS_INTER: {
                        headingDisplayName: "Clash Display",
                        paragraphDisplayName: "Inter",
                        h1: {
                            family: "CLASH_DISPLAY",
                            weight: 500,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: .48
                        },
                        h2: {
                            family: "CLASH_DISPLAY",
                            weight: 500,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: .48
                        },
                        h3: {
                            family: "CLASH_DISPLAY",
                            weight: 600,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: .48
                        },
                        projectTitle: {
                            family: "CLASH_DISPLAY",
                            weight: 600,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: .48
                        },
                        p1: {
                            family: "INTER",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "INTER",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "INTER",
                            lineHeight: 1.15,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    SORA_PLUS_WORK_SANS: {
                        headingDisplayName: "Sora",
                        paragraphDisplayName: "Work Sans",
                        h1: {
                            family: "SORA",
                            weight: 300,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "SORA",
                            weight: 300,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "SORA",
                            weight: 400,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "SORA",
                            weight: 400,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "WORK_SANS",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "WORK_SANS",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "WORK_SANS",
                            lineHeight: 1.25,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    OVERPASS_PLUS_IBM_PLEX_SANS: {
                        headingDisplayName: "Overpass",
                        paragraphDisplayName: "IBM Plex Sans",
                        h1: {
                            family: "OVERPASS",
                            weight: 300,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "OVERPASS",
                            weight: 400,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "OVERPASS",
                            weight: 500,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "OVERPASS",
                            weight: 500,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "IBM_PLEX_SANS",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "IBM_PLEX_SANS",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "IBM_PLEX_SANS",
                            lineHeight: 1.25,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    RUBIK: {
                        headingDisplayName: "Rubik",
                        paragraphDisplayName: "Rubik",
                        h1: {
                            family: "RUBIK",
                            weight: 400,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "RUBIK",
                            weight: 400,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "RUBIK",
                            weight: 500,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "RUBIK",
                            weight: 500,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "RUBIK",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "RUBIK",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "RUBIK",
                            lineHeight: 1.25,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    CABINET_GROTESK_PLUS_MANROPE: {
                        headingDisplayName: "Cabinet Grotesk",
                        paragraphDisplayName: "Manrope",
                        h1: {
                            family: "CABINET_GROTESK",
                            weight: 500,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "CABINET_GROTESK",
                            weight: 500,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "CABINET_GROTESK",
                            weight: 700,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "CABINET_GROTESK",
                            weight: 700,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "MANROPE",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "MANROPE",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "MANROPE",
                            lineHeight: 1.15,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    CORMORANT_UPRIGHT_PLUS_GELASIO: {
                        headingDisplayName: "Cormorant Upright",
                        paragraphDisplayName: "Gelasio",
                        h1: {
                            family: "CORMORANT_UPRIGHT",
                            weight: 400,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "CORMORANT_UPRIGHT",
                            weight: 600,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "CORMORANT_UPRIGHT",
                            weight: 700,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "CORMORANT_UPRIGHT",
                            weight: 700,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "GELASIO",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "GELASIO",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "GELASIO",
                            lineHeight: 1.15,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    CORMORANT_INFANT_PLUS_SOURCE_SERIF_4: {
                        headingDisplayName: "Cormorant Infant",
                        paragraphDisplayName: "Source Serif 4",
                        h1: {
                            family: "CORMORANT_INFANT",
                            weight: 400,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "CORMORANT_INFANT",
                            weight: 500,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "CORMORANT_INFANT",
                            weight: 600,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "CORMORANT_INFANT",
                            weight: 600,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "SOURCE_SERIF_4",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "SOURCE_SERIF_4",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "SOURCE_SERIF_4",
                            lineHeight: 1.15,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    PLAYFAIR_DISPLAY_PLUS_TINOS: {
                        headingDisplayName: "Playfair Display",
                        paragraphDisplayName: "Tinos",
                        h1: {
                            family: "PLAYFAIR_DISPLAY",
                            weight: 400,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "PLAYFAIR_DISPLAY",
                            weight: 500,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "PLAYFAIR_DISPLAY",
                            weight: 600,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "PLAYFAIR_DISPLAY",
                            weight: 600,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "TINOS",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "TINOS",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "TINOS",
                            lineHeight: 1.25,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    IBARRA_REAL_NOVA_PLUS_ERODE: {
                        headingDisplayName: "Ibarra Real Nova",
                        paragraphDisplayName: "Erode",
                        h1: {
                            family: "IBARRA_REAL_NOVA",
                            weight: 400,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "IBARRA_REAL_NOVA",
                            weight: 400,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "IBARRA_REAL_NOVA",
                            weight: 600,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "IBARRA_REAL_NOVA",
                            weight: 600,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "ERODE",
                            lineHeight: 1.5,
                            weight: 450,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "ERODE",
                            lineHeight: 1.3,
                            weight: 450,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "ERODE",
                            lineHeight: 1.25,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    MELODRAMA_PLUS_GENERAL_SANS: {
                        headingDisplayName: "Melodrama",
                        paragraphDisplayName: "General Sans",
                        h1: {
                            family: "MELODRAMA",
                            weight: 400,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "MELODRAMA",
                            weight: 500,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "MELODRAMA",
                            weight: 600,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "MELODRAMA",
                            weight: 600,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "GENERAL_SANS",
                            lineHeight: 1.5,
                            weight: 450,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "GENERAL_SANS",
                            lineHeight: 1.3,
                            weight: 450,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "GENERAL_SANS",
                            lineHeight: 1.15,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    BOSKA_PLUS_BITTER: {
                        headingDisplayName: "Boska",
                        paragraphDisplayName: "Bitter",
                        h1: {
                            family: "BOSKA",
                            weight: 500,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "BOSKA",
                            weight: 600,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "BOSKA",
                            weight: 700,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "BOSKA",
                            weight: 700,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "BITTER",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "BITTER",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "BITTER",
                            lineHeight: 1.25,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    SPACE_GROTESK: {
                        headingDisplayName: "Space Grotesk",
                        paragraphDisplayName: "Space Grotesk",
                        h1: {
                            family: "SPACE_GROTESK",
                            weight: 400,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "SPACE_GROTESK",
                            weight: 400,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "SPACE_GROTESK",
                            weight: 500,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "SPACE_GROTESK",
                            weight: 700,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "SPACE_GROTESK",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "SPACE_GROTESK",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "SPACE_GROTESK",
                            lineHeight: 1.15,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    EB_GARAMOND_PLUS_ZODIAK: {
                        headingDisplayName: "EB Garamond",
                        paragraphDisplayName: "Zodiak",
                        h1: {
                            family: "EB_GARAMOND",
                            weight: 400,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "EB_GARAMOND",
                            weight: 400,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "EB_GARAMOND",
                            weight: 500,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "EB_GARAMOND",
                            weight: 500,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "ZODIAK",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "ZODIAK",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "ZODIAK",
                            lineHeight: 1.25,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    SENTIENT: {
                        headingDisplayName: "Sentient",
                        paragraphDisplayName: "Sentient",
                        h1: {
                            family: "SENTIENT",
                            weight: 300,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "SENTIENT",
                            weight: 300,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "SENTIENT",
                            weight: 400,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "SENTIENT",
                            weight: 400,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "SENTIENT",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "SENTIENT",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "SENTIENT",
                            lineHeight: 1.25,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    LITERATA: {
                        headingDisplayName: "Literata",
                        paragraphDisplayName: "Literata",
                        h1: {
                            family: "LITERATA",
                            weight: 400,
                            lineHeight: 1.25,
                            style: "italic",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "LITERATA",
                            weight: 400,
                            lineHeight: 1.25,
                            style: "italic",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "LITERATA",
                            weight: 500,
                            lineHeight: 1.25,
                            style: "italic",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "LITERATA",
                            weight: 500,
                            lineHeight: 1.25,
                            style: "italic",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "LITERATA",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "LITERATA",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "LITERATA",
                            lineHeight: 1.25,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    NECO: {
                        headingDisplayName: "Neco",
                        paragraphDisplayName: "Neco",
                        h1: {
                            family: "NECO",
                            weight: 400,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "NECO",
                            weight: 400,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "NECO",
                            weight: 500,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "NECO",
                            weight: 500,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "NECO",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "NECO",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "NECO",
                            lineHeight: 1.25,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    SPECTRAL_PLUS_KARLA: {
                        headingDisplayName: "Spectral",
                        paragraphDisplayName: "Karla",
                        h1: {
                            family: "SPECTRAL",
                            weight: 500,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "SPECTRAL",
                            weight: 500,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "SPECTRAL",
                            weight: 600,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "SPECTRAL",
                            weight: 600,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "KARLA",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "KARLA",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "KARLA",
                            lineHeight: 1.15,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    CAUDEX_PLUS_MARTEL: {
                        headingDisplayName: "Caudex",
                        paragraphDisplayName: "Martel",
                        h1: {
                            family: "CAUDEX",
                            weight: 400,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "CAUDEX",
                            weight: 400,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "CAUDEX",
                            weight: 700,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "CAUDEX",
                            weight: 700,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "MARTEL",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "MARTEL",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "MARTEL",
                            lineHeight: 1.15,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    UNNA_PLUS_KARMA: {
                        headingDisplayName: "Unna",
                        paragraphDisplayName: "Karma",
                        h1: {
                            family: "UNNA",
                            weight: 400,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "UNNA",
                            weight: 400,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "UNNA",
                            weight: 700,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "UNNA",
                            weight: 700,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "KARMA",
                            lineHeight: 1.5,
                            weight: 500,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "KARMA",
                            lineHeight: 1.3,
                            weight: 500,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "KARMA",
                            lineHeight: 1.15,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    UNNA_PLUS_MAITREE: {
                        headingDisplayName: "Unna",
                        paragraphDisplayName: "Maitree",
                        h1: {
                            family: "UNNA",
                            weight: 400,
                            lineHeight: 1,
                            style: "normal",
                            letterSpacing: -.03
                        },
                        h2: {
                            family: "UNNA",
                            weight: 400,
                            lineHeight: 1,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "UNNA",
                            weight: 700,
                            lineHeight: 1,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "UNNA",
                            weight: 700,
                            lineHeight: 1,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "MAITREE",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "MAITREE",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "MAITREE",
                            lineHeight: 1,
                            weight: 600,
                            style: "normal",
                            letterSpacing: .02
                        }
                    },
                    GAMBETTA_PLUS_ALBERT_SANS: {
                        headingDisplayName: "Gambetta",
                        paragraphDisplayName: "Albert Sans",
                        h1: {
                            family: "GAMBETTA",
                            weight: 300,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "GAMBETTA",
                            weight: 300,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "GAMBETTA",
                            weight: 300,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "GAMBETTA",
                            weight: 300,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "ALBERT_SANS",
                            lineHeight: 1.5,
                            weight: 300,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "ALBERT_SANS",
                            lineHeight: 1.3,
                            weight: 300,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "ALBERT_SANS",
                            lineHeight: 1.15,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    GENERAL_SANS: {
                        headingDisplayName: "General Sans",
                        paragraphDisplayName: "General Sans",
                        h1: {
                            family: "GENERAL_SANS",
                            weight: 400,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "GENERAL_SANS",
                            weight: 400,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "GENERAL_SANS",
                            weight: 400,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: .125
                        },
                        projectTitle: {
                            family: "GENERAL_SANS",
                            weight: 400,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: .203
                        },
                        p1: {
                            family: "GENERAL_SANS",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: .16
                        },
                        p2: {
                            family: "GENERAL_SANS",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: .28
                        },
                        buttonLabel: {
                            family: "GENERAL_SANS",
                            lineHeight: 1.15,
                            weight: 400,
                            style: "normal",
                            letterSpacing: .32
                        }
                    },
                    SPACE_GROTESK_PLUS_WORK_SANS: {
                        headingDisplayName: "Space Grotesk",
                        paragraphDisplayName: "Work Sans",
                        h1: {
                            family: "SPACE_GROTESK",
                            weight: 500,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "SPACE_GROTESK",
                            weight: 500,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "SPACE_GROTESK",
                            weight: 500,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "SPACE_GROTESK",
                            weight: 500,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "WORK_SANS",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "WORK_SANS",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "WORK_SANS",
                            lineHeight: 1.15,
                            weight: 600,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    EPILOGUE_ARCHIFOLIO: {
                        headingDisplayName: "Epilogue",
                        paragraphDisplayName: "Epilogue",
                        h1: {
                            family: "EPILOGUE",
                            weight: 400,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "EPILOGUE",
                            weight: 400,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "EPILOGUE",
                            weight: 400,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "EPILOGUE",
                            weight: 400,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "EPILOGUE",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "EPILOGUE",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "EPILOGUE",
                            lineHeight: 1.15,
                            weight: 600,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    SORA_PLUS_WORK_SANS_ARCHIFOLIO: {
                        headingDisplayName: "Sora",
                        paragraphDisplayName: "Work Sans",
                        h1: {
                            family: "SORA",
                            weight: 300,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "SORA",
                            weight: 300,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "SORA",
                            weight: 300,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "SORA",
                            weight: 300,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "WORK_SANS",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "WORK_SANS",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "WORK_SANS",
                            lineHeight: 1.25,
                            weight: 600,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    ALBERT_SANS: {
                        headingDisplayName: "Albert Sans",
                        paragraphDisplayName: "Albert Sans",
                        h1: {
                            family: "ALBERT_SANS",
                            weight: 500,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "ALBERT_SANS",
                            weight: 500,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "ALBERT_SANS",
                            weight: 500,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "ALBERT_SANS",
                            weight: 500,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "ALBERT_SANS",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "ALBERT_SANS",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "ALBERT_SANS",
                            lineHeight: 1.15,
                            weight: 600,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    JOST_PLUS_OPEN_SANS: {
                        headingDisplayName: "Jost",
                        paragraphDisplayName: "Open Sans",
                        h1: {
                            family: "JOST",
                            weight: 400,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "JOST",
                            weight: 400,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "JOST",
                            weight: 400,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "JOST",
                            weight: 400,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "OPEN_SANS",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "OPEN_SANS",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "OPEN_SANS",
                            lineHeight: 1.15,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    CHAKRA_PETCH_PLUS_INTER: {
                        headingDisplayName: "Chakra Petch",
                        paragraphDisplayName: "Inter",
                        h1: {
                            family: "CHAKRA_PETCH",
                            weight: 500,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "CHAKRA_PETCH",
                            weight: 500,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "CHAKRA_PETCH",
                            weight: 500,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "CHAKRA_PETCH",
                            weight: 500,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "INTER",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "INTER",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "INTER",
                            lineHeight: 1.15,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    PLAYFAIR_DISPLAY_PLUS_TINOS_ARCHIFOLIO: {
                        headingDisplayName: "Playfair Display",
                        paragraphDisplayName: "Tinos",
                        h1: {
                            family: "PLAYFAIR_DISPLAY",
                            weight: 500,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "PLAYFAIR_DISPLAY",
                            weight: 500,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "PLAYFAIR_DISPLAY",
                            weight: 500,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "PLAYFAIR_DISPLAY",
                            weight: 500,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "TINOS",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "TINOS",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "TINOS",
                            lineHeight: 1.25,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    IBARRA_REAL_NOVA_PLUS_ERODE_ARCHIFOLIO: {
                        headingDisplayName: "Ibarra Real Nova",
                        paragraphDisplayName: "Erode",
                        h1: {
                            family: "IBARRA_REAL_NOVA",
                            weight: 600,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "IBARRA_REAL_NOVA",
                            weight: 600,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "IBARRA_REAL_NOVA",
                            weight: 600,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "IBARRA_REAL_NOVA",
                            weight: 600,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "ERODE",
                            lineHeight: 1.5,
                            weight: 450,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "ERODE",
                            lineHeight: 1.3,
                            weight: 450,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "ERODE",
                            lineHeight: 1.25,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    SPACE_MONO_PLUS_SPACE_GROTESK: {
                        headingDisplayName: "Space Mono",
                        paragraphDisplayName: "Space Grotesk",
                        h1: {
                            family: "SPACE_MONO",
                            weight: 400,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "SPACE_MONO",
                            weight: 400,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "SPACE_MONO",
                            weight: 400,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "SPACE_MONO",
                            weight: 400,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "SPACE_GROTESK",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "SPACE_GROTESK",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "SPACE_GROTESK",
                            lineHeight: 1.15,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    CORMORANT_INFANT_PLUS_SOURCE_SERIF_4_ARCHIFOLIO: {
                        headingDisplayName: "Cormorant Infant",
                        paragraphDisplayName: "Source Serif 4",
                        h1: {
                            family: "CORMORANT_INFANT",
                            weight: 400,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "CORMORANT_INFANT",
                            weight: 500,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "CORMORANT_INFANT",
                            weight: 600,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "CORMORANT_INFANT",
                            weight: 600,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "SOURCE_SERIF_4",
                            lineHeight: 1.5,
                            weight: 500,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "SOURCE_SERIF_4",
                            lineHeight: 1.3,
                            weight: 500,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "SOURCE_SERIF_4",
                            lineHeight: 1.15,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    CLASH_DISPLAY_PLUS_INTER_ARCHIFOLIO: {
                        headingDisplayName: "Clash Display",
                        paragraphDisplayName: "Inter",
                        h1: {
                            family: "CLASH_DISPLAY",
                            weight: 600,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: .48
                        },
                        h2: {
                            family: "CLASH_DISPLAY",
                            weight: 600,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: .48
                        },
                        h3: {
                            family: "CLASH_DISPLAY",
                            weight: 600,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: .48
                        },
                        projectTitle: {
                            family: "CLASH_DISPLAY",
                            weight: 600,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: .48
                        },
                        p1: {
                            family: "INTER",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "INTER",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "INTER",
                            lineHeight: 1.15,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    RUBIK_ARCHIFOLIO: {
                        headingDisplayName: "Rubik",
                        paragraphDisplayName: "Rubik",
                        h1: {
                            family: "RUBIK",
                            weight: 900,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "RUBIK",
                            weight: 900,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "RUBIK",
                            weight: 900,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "RUBIK",
                            weight: 900,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "RUBIK",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "RUBIK",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "RUBIK",
                            lineHeight: 1.25,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    EB_GARAMOND_PLUS_ZODIAK_ARCHIFOLIO: {
                        headingDisplayName: "EB Garamond",
                        paragraphDisplayName: "Zodiak",
                        h1: {
                            family: "EB_GARAMOND",
                            weight: 500,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "EB_GARAMOND",
                            weight: 500,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "EB_GARAMOND",
                            weight: 500,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "EB_GARAMOND",
                            weight: 500,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "ZODIAK",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "ZODIAK",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "ZODIAK",
                            lineHeight: 1.25,
                            weight: 500,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    SENTIENT_ARCHIFOLIO: {
                        headingDisplayName: "Sentient",
                        paragraphDisplayName: "Sentient",
                        h1: {
                            family: "SENTIENT",
                            weight: 400,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "SENTIENT",
                            weight: 400,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "SENTIENT",
                            weight: 400,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "SENTIENT",
                            weight: 400,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "SENTIENT",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "SENTIENT",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "SENTIENT",
                            lineHeight: 1.25,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    NECO_ARCHIFOLIO: {
                        headingDisplayName: "Neco",
                        paragraphDisplayName: "Neco",
                        h1: {
                            family: "NECO",
                            weight: 400,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "NECO",
                            weight: 400,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "NECO",
                            weight: 400,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "NECO",
                            weight: 400,
                            lineHeight: 1.25,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "NECO",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "NECO",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "NECO",
                            lineHeight: 1.25,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    },
                    SPECTRAL_PLUS_KARLA_ARCHIFOLIO: {
                        headingDisplayName: "Spectral",
                        paragraphDisplayName: "Karla",
                        h1: {
                            family: "SPECTRAL",
                            weight: 500,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h2: {
                            family: "SPECTRAL",
                            weight: 500,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        h3: {
                            family: "SPECTRAL",
                            weight: 500,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        projectTitle: {
                            family: "SPECTRAL",
                            weight: 500,
                            lineHeight: 1.15,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p1: {
                            family: "KARLA",
                            lineHeight: 1.5,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        p2: {
                            family: "KARLA",
                            lineHeight: 1.3,
                            weight: 400,
                            style: "normal",
                            letterSpacing: 0
                        },
                        buttonLabel: {
                            family: "KARLA",
                            lineHeight: 1.15,
                            weight: 700,
                            style: "normal",
                            letterSpacing: 0
                        }
                    }
                },
                l = [{
                    label: "Clean",
                    fontSets: ["SATOSHI_PLUS_POPPINS", "EPILOGUE", "CLASH_DISPLAY_PLUS_INTER", "SORA_PLUS_WORK_SANS", "OVERPASS_PLUS_IBM_PLEX_SANS", "RUBIK", "CABINET_GROTESK_PLUS_MANROPE", "ALBERT_SANS"]
                }, {
                    label: "Dramatic",
                    fontSets: ["CORMORANT_UPRIGHT_PLUS_GELASIO", "CORMORANT_INFANT_PLUS_SOURCE_SERIF_4", "PLAYFAIR_DISPLAY_PLUS_TINOS", "IBARRA_REAL_NOVA_PLUS_ERODE_ARCHIFOLIO", "MELODRAMA_PLUS_GENERAL_SANS", "BOSKA_PLUS_BITTER", "SPACE_GROTESK"]
                }, {
                    label: "Classic",
                    fontSets: ["GAMBETTA_PLUS_ALBERT_SANS", "EB_GARAMOND_PLUS_ZODIAK", "SENTIENT", "LITERATA", "NECO", "SPECTRAL_PLUS_KARLA", "CAUDEX_PLUS_MARTEL", "UNNA_PLUS_MAITREE"]
                }],
                r = [{
                    label: "Clean",
                    fontSets: ["GAMBETTA_PLUS_ALBERT_SANS", "GENERAL_SANS", "SPACE_GROTESK_PLUS_WORK_SANS", "EPILOGUE_ARCHIFOLIO", "SORA_PLUS_WORK_SANS_ARCHIFOLIO", "ALBERT_SANS", "JOST_PLUS_OPEN_SANS"]
                }, {
                    label: "Dramatic",
                    fontSets: ["CHAKRA_PETCH_PLUS_INTER", "PLAYFAIR_DISPLAY_PLUS_TINOS_ARCHIFOLIO", "IBARRA_REAL_NOVA_PLUS_ERODE_ARCHIFOLIO", "SPACE_MONO_PLUS_SPACE_GROTESK", "CORMORANT_INFANT_PLUS_SOURCE_SERIF_4_ARCHIFOLIO", "CLASH_DISPLAY_PLUS_INTER_ARCHIFOLIO", "RUBIK_ARCHIFOLIO"]
                }, {
                    label: "Classic",
                    fontSets: ["EB_GARAMOND_PLUS_ZODIAK_ARCHIFOLIO", "SENTIENT_ARCHIFOLIO", "NECO_ARCHIFOLIO", "SPECTRAL_PLUS_KARLA_ARCHIFOLIO"]
                }],
                n = []
        },
        41411: function(e, i, t) {
            t.d(i, {
                BZ: function() {
                    return r
                },
                Yb: function() {
                    return l
                },
                aN: function() {
                    return n
                },
                bs: function() {
                    return a
                }
            });
            let a = {
                    100: "xs",
                    125: "sm",
                    150: "md",
                    175: "lg",
                    200: "xl",
                    xs: 100,
                    sm: 125,
                    md: 150,
                    lg: 175,
                    xl: 200
                },
                l = {
                    xs: {
                        pdf: 1,
                        laptop: 1,
                        tablet: 1,
                        mobile: 1
                    },
                    sm: {
                        pdf: 1.25,
                        laptop: 1.25,
                        tablet: 1,
                        mobile: 1
                    },
                    md: {
                        pdf: 1.5,
                        laptop: 1.5,
                        tablet: 1.25,
                        mobile: 1
                    },
                    lg: {
                        pdf: 1.75,
                        laptop: 1.75,
                        tablet: 1.25,
                        mobile: 1.25
                    },
                    xl: {
                        pdf: 2,
                        laptop: 2,
                        tablet: 1.5,
                        mobile: 1.25
                    }
                },
                r = {
                    xl: {
                        heading: {
                            pdf: 2,
                            laptop: 1.5,
                            tablet: 1.25
                        },
                        paragraph: {
                            pdf: 2,
                            laptop: 1.5,
                            tablet: 1.25
                        }
                    },
                    lg: {
                        heading: {
                            laptop: 1.75,
                            tablet: 1.3,
                            pdf: 1
                        },
                        paragraph: {
                            laptop: 1.75,
                            tablet: 1.3,
                            pdf: 1
                        }
                    },
                    md: {
                        heading: {
                            laptop: 1.5,
                            tablet: 1.25,
                            pdf: 1
                        },
                        paragraph: {
                            laptop: 1.5,
                            tablet: 1.25,
                            pdf: 1
                        }
                    },
                    sm: {
                        heading: {
                            laptop: 1.5,
                            tablet: 1,
                            pdf: 1
                        },
                        paragraph: {
                            laptop: 1.5,
                            tablet: 1,
                            pdf: 1
                        }
                    },
                    xs: {
                        heading: {
                            laptop: 1.25,
                            tablet: 1,
                            pdf: 1
                        },
                        paragraph: {
                            laptop: 1.25,
                            tablet: 1,
                            pdf: 1
                        }
                    }
                },
                n = {
                    hero: {
                        xl: {
                            heading: {
                                pdf: 2,
                                laptop: 2,
                                tablet: 1.5
                            },
                            paragraph: {
                                pdf: 2,
                                laptop: 1.5,
                                tablet: 1.25
                            }
                        },
                        lg: {
                            heading: {
                                pdf: 2,
                                laptop: 1.5,
                                tablet: 1.25
                            },
                            paragraph: {
                                pdf: 2,
                                laptop: 1.5,
                                tablet: 1.25
                            }
                        },
                        md: {
                            heading: {
                                pdf: 1.5,
                                laptop: 1.5,
                                tablet: 1.25
                            },
                            paragraph: {
                                pdf: 1.5,
                                laptop: 1.5,
                                tablet: 1.25
                            }
                        }
                    },
                    title: {
                        md: {
                            heading: {
                                pdf: 1.5,
                                laptop: 1,
                                tablet: 1
                            },
                            paragraph: {
                                pdf: 1.5,
                                laptop: 1,
                                tablet: 1
                            }
                        }
                    },
                    projectHero: {
                        md: {
                            heading: {
                                pdf: 1.5,
                                laptop: 1.5,
                                tablet: 1.25
                            },
                            paragraph: {
                                pdf: 1.5,
                                laptop: 1.5,
                                tablet: 1.25
                            }
                        }
                    }
                }
        },
        88985: function(e, i, t) {
            t.d(i, {
                AF: function() {
                    return s
                },
                Gl: function() {
                    return n
                },
                Ho: function() {
                    return r
                },
                YE: function() {
                    return o
                },
                ey: function() {
                    return a
                },
                u6: function() {
                    return l
                }
            });
            let a = {
                    h1: {
                        mobile: 36,
                        tablet: 40.5,
                        laptop: 45
                    },
                    h2: {
                        mobile: 26,
                        tablet: 29.25,
                        laptop: 32.5
                    },
                    h3: {
                        mobile: 20,
                        tablet: 22.5,
                        laptop: 25
                    },
                    projectTitle: {
                        mobile: 18,
                        tablet: 20.25,
                        laptop: 20.25
                    },
                    p: {
                        mobile: 16,
                        tablet: 16,
                        laptop: 16
                    }
                },
                l = {
                    h1: {
                        mobile: 44,
                        tablet: 59.4,
                        laptop: 88
                    },
                    h2: {
                        mobile: 26,
                        tablet: 29.25,
                        laptop: 32.5
                    },
                    h3: {
                        mobile: 20,
                        tablet: 22.5,
                        laptop: 25
                    },
                    projectTitle: {
                        mobile: 18,
                        tablet: 20.25,
                        laptop: 20.25
                    },
                    p: {
                        mobile: 16,
                        tablet: 16,
                        laptop: 16
                    }
                },
                r = {
                    h1: {
                        mobile: 44,
                        tablet: 59.4,
                        laptop: 88
                    },
                    h2: {
                        mobile: 26,
                        tablet: 29.25,
                        laptop: 32.5
                    },
                    h3: {
                        mobile: 20,
                        tablet: 22.5,
                        laptop: 25
                    },
                    projectTitle: {
                        mobile: 18,
                        tablet: 20.25,
                        laptop: 20.25
                    },
                    p: {
                        mobile: 16,
                        tablet: 16,
                        laptop: 16
                    }
                },
                n = {
                    h1: {
                        mobile: 42,
                        tablet: 47.25,
                        laptop: 52.5
                    },
                    h2: {
                        mobile: 26,
                        tablet: 29.25,
                        laptop: 32.5
                    },
                    h3: {
                        mobile: 20,
                        tablet: 22.5,
                        laptop: 25
                    },
                    projectTitle: {
                        mobile: 18,
                        tablet: 20.25,
                        laptop: 22.5
                    },
                    p: {
                        mobile: 16,
                        tablet: 16,
                        laptop: 16
                    }
                },
                o = {
                    h1: {
                        mobile: 44,
                        tablet: 59.4,
                        laptop: 77
                    },
                    h2: {
                        mobile: 26,
                        tablet: 29.25,
                        laptop: 32.5
                    },
                    h3: {
                        mobile: 20,
                        tablet: 22.5,
                        laptop: 25
                    },
                    projectTitle: {
                        mobile: 18,
                        tablet: 20.25,
                        laptop: 20.25
                    },
                    p: {
                        mobile: 16,
                        tablet: 16,
                        laptop: 16
                    }
                },
                s = {
                    h1: {
                        mobile: 44,
                        tablet: 59.4,
                        laptop: 77
                    },
                    h2: {
                        mobile: 26,
                        tablet: 29.25,
                        laptop: 32.5
                    },
                    h3: {
                        mobile: 20,
                        tablet: 22.5,
                        laptop: 25
                    },
                    projectTitle: {
                        mobile: 18,
                        tablet: 20.25,
                        laptop: 22.5
                    },
                    p: {
                        mobile: 16,
                        tablet: 16,
                        laptop: 16
                    }
                }
        },
        78563: function(e, i, t) {
            t.d(i, {
                O: function() {
                    return c
                }
            });
            var a = t(6113),
                l = t(52322),
                r = t(61463),
                n = t(76102),
                o = t(49863);
            let s = {
                    IconPortrait: a.ej.Browser,
                    IconLandscape: a.ej.Browser,
                    Component: function(e) {
                        let {
                            children: i
                        } = e;
                        return (0, l.jsxs)("div", {
                            className: (0, r.Z)("relative overflow-hidden rounded-xl border border-[#E7E7E7]", "[--search-bar-color:theme(colors.graphite.5)]", "[--titlebar-stop-1:#F1F1F1]", "[--titlebar-stop-2:#DCDCDC]", "dark:[--search-bar-color:#403F47]", "dark:[--titlebar-stop-1:#1C1B1F]", "dark:[--titlebar-stop-2:#2D2C31]", "group-[.project-thumbnail]:rounded-sm"),
                            children: [(0, l.jsx)("div", {
                                className: "overflow-hidden pt-4 dark:border-graphite-100",
                                children: i
                            }), (0, l.jsx)(a.SX.BrowserTitleBar, {
                                className: "absolute inset-x-0 top-0 rounded-t"
                            })]
                        })
                    },
                    crop: {
                        advancedCrop: "rect"
                    }
                },
                g = {
                    IconPortrait: a.ej.RoundedPortrait,
                    IconLandscape: a.ej.RoundedLandscape,
                    Component: o.$,
                    crop: {
                        advancedCrop: "all"
                    }
                },
                h = {
                    IconPortrait: a.ej.Phone,
                    IconLandscape: a.ej.OutlinedLandscape,
                    Component: n.X,
                    crop: {
                        advancedCrop: "all"
                    }
                },
                p = {
                    Icon: a.ej.Laptop,
                    Top: a.SX.LaptopTop,
                    Bottom: a.SX.LaptopBottom,
                    content: {
                        viewBoxWidth: 464,
                        viewBoxHeight: 264,
                        innerX: 55,
                        innerY: 15,
                        innerWidth: 354,
                        innerHeight: 221
                    },
                    crop: {
                        aspectRatio: 1.6,
                        title: "Crop image in laptop mockup",
                        description: "Use a full desktop screenshot for the perfect fit."
                    }
                },
                d = {
                    Icon: a.ej.Phone,
                    Top: a.SX.PhoneTop,
                    Bottom: a.SX.PhoneBottom,
                    content: {
                        viewBoxWidth: 464,
                        viewBoxHeight: 386,
                        innerX: 146,
                        innerY: 8,
                        innerWidth: 172,
                        innerHeight: 370
                    },
                    crop: {
                        aspectRatio: 9 / 19,
                        title: "Crop image in phone mockup",
                        description: "Use a mobile screenshot for the perfect fit."
                    }
                },
                c = {
                    BROWSER: s,
                    ROUNDED: g,
                    OUTLINED: h,
                    LAPTOP: p,
                    PHONE: d,
                    TV: {
                        Icon: a.ej.Tv,
                        Top: a.SX.TvTop,
                        Bottom: a.SX.TvBottom,
                        content: {
                            viewBoxWidth: 464,
                            viewBoxHeight: 288,
                            innerX: 4,
                            innerY: 4,
                            innerWidth: 456,
                            innerHeight: 257
                        },
                        crop: {
                            aspectRatio: 16 / 9,
                            title: "Crop image in TV mockup",
                            description: "Use a video snapshot or thumbnail for the perfect fit, for example 1600x900px."
                        }
                    },
                    MAGAZINE: {
                        Icon: a.ej.Magazine,
                        Top: a.SX.MagazineTop,
                        Bottom: a.SX.MagazineBottom,
                        content: {
                            viewBoxWidth: 464,
                            viewBoxHeight: 342,
                            innerX: 232,
                            innerY: 9,
                            innerWidth: 226,
                            innerHeight: 319
                        },
                        crop: {
                            aspectRatio: 5e3 / 7071,
                            title: "Crop image in magazine mockup",
                            description: "Use an A4 sized, portrait image for the perfect fit."
                        }
                    },
                    BILLBOARD: {
                        Icon: a.ej.Billboard,
                        Top: a.SX.BillboardTop,
                        Bottom: a.SX.BillboardBottom,
                        content: {
                            viewBoxWidth: 464,
                            viewBoxHeight: 364,
                            innerX: 0,
                            innerY: 16,
                            innerWidth: 464,
                            innerHeight: 261
                        },
                        crop: {
                            aspectRatio: 16 / 9,
                            title: "Crop image in billboard mockup",
                            description: "Use a wide, landscape image for the perfect fit, for example 1600x900px."
                        }
                    }
                }
        },
        72515: function(e, i, t) {
            t.d(i, {
                _D: function() {
                    return Q
                },
                xN: function() {
                    return V
                },
                lq: function() {
                    return ee
                },
                e2: function() {
                    return $
                },
                QV: function() {
                    return X
                },
                D3: function() {
                    return j
                },
                U6: function() {
                    return q
                }
            });
            var a = t(99872),
                l = t(46249),
                r = t(94706),
                n = t(60185),
                o = t(41411),
                s = t(88985),
                g = t(41538);
            let h = {
                    isOverlay: !1,
                    paddingSize: "md"
                },
                p = {
                    isOverlay: !1,
                    paddingSize: "lg"
                },
                d = {
                    HOME: h,
                    PROJECT: h,
                    BLOG_POST: h,
                    CUSTOM: h
                },
                c = {
                    HOME: p,
                    PROJECT: p,
                    BLOG_POST: p,
                    CUSTOM: p
                };

            function A(e) {
                return { ...(0, g.nK)(e),
                    placeholder: "blur"
                }
            }
            let S = {
                    displayName: "Agora",
                    preview: {
                        template: "AGORA",
                        label: "Agora",
                        preview: A({
                            src: "/_next/static/media/agora-md.50e81236.webp",
                            height: 396,
                            width: 612,
                            blurDataURL: "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoIAAUAAkA4JZwCw7EPCmGMAAD++ECL6ioc/JdLaLSi87ZFgPuxAH05Gv6af+TgAAA=",
                            blurWidth: 8,
                            blurHeight: 5
                        })
                    },
                    navigationStyle: {
                        HOME: {
                            isOverlay: !1,
                            paddingSize: "lg"
                        },
                        PROJECT: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        BLOG_POST: p,
                        CUSTOM: p
                    },
                    captionStyle: "simple",
                    inputStyle: {
                        rounded: "none",
                        variant: "filled"
                    },
                    buttonStyle: {
                        rounded: "none",
                        variant: "filled"
                    },
                    fontSizeSet: s.ey,
                    defaultFontFaceSet: "SPECTRAL_PLUS_KARLA_ARCHIFOLIO",
                    defaultColorSet: "GRAPHITE",
                    peopleVariant: "NAOMI",
                    hero: {
                        variant: "PANORAMA",
                        taglineVariant: "COMPLEX",
                        image: {
                            variant: "NEUTRAL",
                            type: "foreground"
                        },
                        fontSizeMultipliers: o.aN.hero.xl
                    },
                    title: {
                        variant: "SIMPLE",
                        fontSizeMultipliers: o.aN.title.md
                    },
                    blogHero: {
                        variant: "SIMPLE",
                        defaultFontSize: "md"
                    },
                    projectHero: {
                        variant: "SIMPLE",
                        fontSizeMultipliers: o.aN.projectHero.md
                    },
                    footer: {
                        variant: "SIDE",
                        background: "simple"
                    }
                },
                m = {
                    displayName: "Artboard",
                    preview: {
                        template: "ARTBOARD",
                        label: "Artboard",
                        preview: A({
                            src: "/_next/static/media/artboard-md.69b090a8.webp",
                            height: 396,
                            width: 612,
                            blurDataURL: "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoIAAUAAkA4JZwAAvqopHh6AP77YyascQND5bebBefvxtx5vmw327QWqJEGAAAA",
                            blurWidth: 8,
                            blurHeight: 5
                        })
                    },
                    navigationStyle: c,
                    captionStyle: "outline",
                    inputStyle: {
                        rounded: "none",
                        variant: "outline"
                    },
                    buttonStyle: {
                        rounded: "none",
                        variant: "outline"
                    },
                    fontSizeSet: s.ey,
                    defaultFontFaceSet: "CORMORANT_UPRIGHT_PLUS_GELASIO",
                    defaultColorSet: "DEEP_TAUPE",
                    peopleVariant: "CLAIRE",
                    title: {
                        variant: "FULL_LINE",
                        decorationPlacement: "bottom"
                    },
                    blogHero: {
                        variant: "SIMPLE",
                        defaultFontSize: "md"
                    },
                    projectHero: {
                        variant: "SIMPLE",
                        fontSizeMultipliers: o.BZ.md
                    },
                    hero: {
                        variant: "WIDE",
                        background: "simple",
                        image: {
                            variant: "PERSON",
                            type: "foreground"
                        },
                        fontSizeMultipliers: o.BZ.md
                    },
                    footer: {
                        variant: "SIDE",
                        background: "simple"
                    }
                },
                y = {
                    displayName: "Beaux",
                    preview: {
                        label: "Beaux",
                        template: "BEAUX",
                        preview: A({
                            src: "/_next/static/media/beaux-md.a18d7851.webp",
                            height: 396,
                            width: 612,
                            blurDataURL: "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADQAQCdASoIAAUAAkA4JZwC7AEf/kf3AAD++QcS3q69h1vhL+P/eAtyGWQvhFxdO/5a0S1ImH1wAA==",
                            blurWidth: 8,
                            blurHeight: 5
                        }),
                        badge: {
                            label: "New",
                            intent: "success"
                        }
                    },
                    navigationStyle: {
                        HOME: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        PROJECT: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        BLOG_POST: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        CUSTOM: p
                    },
                    hero: {
                        variant: "WIDE",
                        background: "gradient",
                        taglineVariant: "MINIMAL",
                        image: {
                            type: "foreground",
                            variant: "GOLDEN"
                        },
                        fontSizeMultipliers: {
                            heading: {
                                pdf: 2,
                                laptop: 1.5,
                                tablet: 1.25
                            },
                            paragraph: {
                                pdf: 2,
                                laptop: 1.5,
                                tablet: 1.25
                            }
                        }
                    },
                    projectHero: {
                        variant: "GRADIENT",
                        fontSizeMultipliers: {
                            heading: {
                                pdf: 1.5,
                                laptop: 1.5,
                                tablet: 1.25
                            },
                            paragraph: {
                                pdf: 1.5,
                                laptop: 1.5,
                                tablet: 1.25
                            }
                        }
                    },
                    blogHero: {
                        variant: "GRADIENT",
                        defaultFontSize: "md"
                    },
                    footer: {
                        variant: "SIDE",
                        background: "simple"
                    },
                    title: {
                        variant: "GRADIENT",
                        decorationPlacement: "top",
                        fontSizeMultipliers: {
                            heading: {
                                pdf: 1.5,
                                laptop: 1,
                                tablet: 1
                            },
                            paragraph: {
                                pdf: 1.5,
                                laptop: 1,
                                tablet: 1
                            }
                        }
                    },
                    defaultColorSet: "BRONZE_GLINT",
                    defaultFontFaceSet: "CORMORANT_INFANT_PLUS_SOURCE_SERIF_4_ARCHIFOLIO",
                    buttonStyle: {
                        rounded: "lg",
                        variant: "filled"
                    },
                    inputStyle: {
                        rounded: "default",
                        variant: "filled"
                    },
                    captionStyle: "outline",
                    fontSizeSet: s.ey,
                    peopleVariant: "CLAIRE"
                },
                b = {
                    displayName: "Billboard",
                    preview: {
                        template: "BILLBOARD",
                        label: "Billboard",
                        preview: A({
                            src: "/_next/static/media/billboard-md.4620b4bb.webp",
                            height: 396,
                            width: 612,
                            blurDataURL: "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACQAQCdASoIAAUAAkA4JaQAAudZOxAA/sKwMP2zDUpGm3rMndTPVFs5MUX0YZKc4Ed6AAAA",
                            blurWidth: 8,
                            blurHeight: 5
                        })
                    },
                    navigationStyle: {
                        HOME: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        PROJECT: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        BLOG_POST: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        CUSTOM: p
                    },
                    captionStyle: "simple",
                    inputStyle: {
                        rounded: "none",
                        variant: "outline"
                    },
                    buttonStyle: {
                        rounded: "none",
                        variant: "filled"
                    },
                    fontSizeSet: s.ey,
                    defaultFontFaceSet: "CLASH_DISPLAY_PLUS_INTER",
                    defaultColorSet: "PITCH_BLACK",
                    peopleVariant: "NAOMI",
                    title: {
                        variant: "FILL"
                    },
                    blogHero: {
                        variant: "FILL",
                        defaultFontSize: "md"
                    },
                    projectHero: {
                        variant: "FILL",
                        fontSizeMultipliers: o.BZ.lg
                    },
                    hero: {
                        variant: "MINIMAL",
                        background: "fill",
                        image: {
                            variant: "PERSON",
                            type: "foreground"
                        },
                        fontSizeMultipliers: o.BZ.lg
                    },
                    footer: {
                        variant: "SIDE",
                        background: "fill"
                    }
                },
                u = {
                    displayName: "Brochure",
                    preview: {
                        template: "BROCHURE",
                        label: "Brochure",
                        preview: A({
                            src: "/_next/static/media/brochure-md.3622d829.webp",
                            height: 396,
                            width: 612,
                            blurDataURL: "data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAACwAQCdASoIAAUAAkA4JaQAAxeeArJAAP79P3ZTcgWkNdfvt0vvM2AAAAA=",
                            blurWidth: 8,
                            blurHeight: 5
                        }),
                        badge: {
                            label: "New",
                            intent: "success"
                        }
                    },
                    navigationStyle: {
                        HOME: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        PROJECT: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        BLOG_POST: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        CUSTOM: p
                    },
                    captionStyle: "filled",
                    inputStyle: {
                        rounded: "default",
                        variant: "filled"
                    },
                    buttonStyle: {
                        rounded: "full",
                        variant: "filled"
                    },
                    fontSizeSet: s.ey,
                    defaultFontFaceSet: "ALBERT_SANS",
                    defaultColorSet: "CHARCOAL",
                    peopleVariant: "LUCY",
                    title: {
                        variant: "GRADIENT",
                        decorationPlacement: "bottom"
                    },
                    blogHero: {
                        variant: "FILL",
                        defaultFontSize: "xs"
                    },
                    projectHero: {
                        variant: "FILL"
                    },
                    hero: {
                        variant: "NARROW",
                        background: "fill",
                        image: {
                            variant: "PERSON",
                            type: "foreground",
                            hideDefaultImage: !0
                        },
                        fontSizeMultipliers: o.BZ.xl
                    },
                    footer: {
                        variant: "SIDE",
                        background: "fill"
                    }
                },
                f = {
                    displayName: "Chapter",
                    preview: {
                        template: "CHAPTER",
                        label: "Chapter",
                        preview: A({
                            src: "/_next/static/media/chapter-md.b84dd194.webp",
                            height: 396,
                            width: 612,
                            blurDataURL: "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoIAAUAAkA4JZQAAud7dneAAP76TU/Lim2xkitMPRYxEACRxSGC+tu1CQAAAA==",
                            blurWidth: 8,
                            blurHeight: 5
                        })
                    },
                    navigationStyle: {
                        HOME: {
                            isOverlay: !1,
                            paddingSize: "lg"
                        },
                        PROJECT: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        BLOG_POST: p,
                        CUSTOM: p
                    },
                    captionStyle: "outline",
                    inputStyle: {
                        rounded: "none",
                        variant: "outline"
                    },
                    buttonStyle: {
                        rounded: "none",
                        variant: "outline"
                    },
                    fontSizeSet: s.ey,
                    defaultFontFaceSet: "SENTIENT_ARCHIFOLIO",
                    defaultColorSet: "CLOVER",
                    peopleVariant: "NATHAN",
                    hero: {
                        variant: "BLUR",
                        taglineVariant: "NORMAL",
                        image: {
                            variant: "DARK_BEIGE",
                            type: "background"
                        },
                        fontSizeMultipliers: o.aN.hero.xl
                    },
                    title: {
                        variant: "FULL_LINE",
                        decorationPlacement: "bottom",
                        fontSizeMultipliers: o.aN.title.md
                    },
                    blogHero: {
                        variant: "LINE",
                        defaultFontSize: "md"
                    },
                    projectHero: {
                        variant: "IMAGE",
                        imageOverlayVariant: "default",
                        fontSizeMultipliers: o.aN.projectHero.md
                    },
                    footer: {
                        variant: "SIDE",
                        background: "simple"
                    }
                },
                E = {
                    displayName: "Classica",
                    preview: {
                        label: "Classica",
                        template: "CLASSICA",
                        preview: A({
                            src: "/_next/static/media/classica-md.c603aad1.webp",
                            height: 396,
                            width: 612,
                            blurDataURL: "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACQAQCdASoIAAUAAkA4JaQAAudR6dAA/t43dGJsfEJ+fNMkk2ahO+Is5Mofi28NpYCN9aPpyQgAAA==",
                            blurWidth: 8,
                            blurHeight: 5
                        }),
                        badge: {
                            label: "New",
                            intent: "success"
                        }
                    },
                    navigationStyle: {
                        HOME: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        PROJECT: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        BLOG_POST: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        CUSTOM: p
                    },
                    hero: {
                        variant: "NARROW",
                        background: "fill",
                        taglineVariant: "SIMPLE",
                        image: {
                            type: "foreground",
                            variant: "DARK"
                        },
                        fontSizeMultipliers: {
                            heading: {
                                pdf: 2,
                                laptop: 1.5,
                                tablet: 1.25
                            },
                            paragraph: {
                                pdf: 2,
                                laptop: 1.5,
                                tablet: 1.25
                            }
                        }
                    },
                    projectHero: {
                        variant: "FILL",
                        fontSizeMultipliers: {
                            heading: {
                                pdf: 1.5,
                                laptop: 1.5,
                                tablet: 1.25
                            },
                            paragraph: {
                                pdf: 1.5,
                                laptop: 1.5,
                                tablet: 1.25
                            }
                        }
                    },
                    blogHero: {
                        variant: "FILL",
                        defaultFontSize: "md"
                    },
                    footer: {
                        variant: "SIDE",
                        background: "simple"
                    },
                    title: {
                        variant: "SHORT_LINE",
                        decorationPlacement: "top",
                        fontSizeMultipliers: {
                            heading: {
                                pdf: 1.5,
                                laptop: 1,
                                tablet: 1
                            },
                            paragraph: {
                                pdf: 1.5,
                                laptop: 1,
                                tablet: 1
                            }
                        }
                    },
                    defaultColorSet: "FUSE",
                    defaultFontFaceSet: "GAMBETTA_PLUS_ALBERT_SANS",
                    buttonStyle: {
                        rounded: "none",
                        variant: "filled"
                    },
                    inputStyle: {
                        rounded: "none",
                        variant: "outline"
                    },
                    captionStyle: "outline",
                    fontSizeSet: s.ey,
                    peopleVariant: "NATHAN"
                },
                w = {
                    displayName: "Deco",
                    preview: {
                        label: "Deco",
                        template: "DECO",
                        preview: A({
                            src: "/_next/static/media/deco-md.57141485.webp",
                            height: 396,
                            width: 612,
                            blurDataURL: "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACQAQCdASoIAAUAAkA4JaQAAudZtgAA/opSjE6zikfO/gjUpGN4iy8VqOGEFYOX2QAAAA==",
                            blurWidth: 8,
                            blurHeight: 5
                        }),
                        badge: {
                            label: "New",
                            intent: "success"
                        }
                    },
                    navigationStyle: {
                        HOME: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        PROJECT: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        BLOG_POST: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        CUSTOM: h
                    },
                    alignmentLock: {
                        hero: "left"
                    },
                    hero: {
                        variant: "SIMPLE",
                        background: "fill",
                        taglineVariant: "SIMPLE",
                        image: {
                            type: "foreground",
                            variant: "PERSON"
                        },
                        fontSizeMultipliers: o.aN.hero.md
                    },
                    projectHero: {
                        variant: "FILL",
                        fontSizeMultipliers: o.BZ.lg
                    },
                    blogHero: {
                        variant: "FILL",
                        defaultFontSize: "md"
                    },
                    footer: {
                        variant: "SIDE",
                        background: "fill"
                    },
                    title: {
                        variant: "SHORT_LINE",
                        decorationPlacement: "top"
                    },
                    defaultColorSet: "BASALT",
                    defaultFontFaceSet: "SORA_PLUS_WORK_SANS_ARCHIFOLIO",
                    buttonStyle: {
                        rounded: "full",
                        variant: "outline"
                    },
                    inputStyle: {
                        rounded: "lg",
                        variant: "outline"
                    },
                    captionStyle: "simple",
                    fontSizeSet: s.ey,
                    peopleVariant: "SIMON2"
                },
                H = {
                    displayName: "Downtown",
                    preview: {
                        template: "DOWNTOWN",
                        label: "Downtown",
                        preview: A({
                            src: "/_next/static/media/downtown-md.64bcccc9.webp",
                            height: 396,
                            width: 612,
                            blurDataURL: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADwAQCdASoIAAUAAkA4JZQCdH8AFcfvPAAA/vpXx8hUnenJfLxucwzPZpELv0TNDUZRr2avPCLUBGuuwx1N5kmZLr/kAAAA",
                            blurWidth: 8,
                            blurHeight: 5
                        })
                    },
                    navigationStyle: c,
                    captionStyle: "outline",
                    inputStyle: {
                        rounded: "default",
                        variant: "outline"
                    },
                    buttonStyle: {
                        rounded: "full",
                        variant: "filled"
                    },
                    fontSizeSet: s.ey,
                    defaultFontFaceSet: "EB_GARAMOND_PLUS_ZODIAK_ARCHIFOLIO",
                    defaultColorSet: "GRAPHITE",
                    peopleVariant: "DAISY",
                    hero: {
                        variant: "HEADLINE",
                        taglineVariant: "STATIC",
                        image: {
                            variant: "COLORFUL",
                            type: "multiple"
                        }
                    },
                    title: {
                        variant: "FULL_LINE",
                        decorationPlacement: "bottom"
                    },
                    blogHero: {
                        variant: "SIMPLE",
                        defaultFontSize: "xs"
                    },
                    projectHero: {
                        variant: "SIMPLE"
                    },
                    footer: {
                        variant: "SIDE",
                        background: "simple"
                    }
                },
                R = {
                    displayName: "Haus",
                    preview: {
                        label: "Haus",
                        template: "HAUS",
                        preview: A({
                            src: "/_next/static/media/haus-md.55c24518.webp",
                            height: 396,
                            width: 612,
                            blurDataURL: "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoIAAUAAkA4JZwCdAEPAzsbQAD++lfEXaj6e2p2fNQpKJz4ePvqXtS+i1vuQAAA",
                            blurWidth: 8,
                            blurHeight: 5
                        }),
                        badge: {
                            label: "New",
                            intent: "success"
                        }
                    },
                    navigationStyle: c,
                    hero: {
                        variant: "HEADLINE",
                        taglineVariant: "STATIC",
                        image: {
                            type: "multiple",
                            variant: "BEIGE"
                        }
                    },
                    projectHero: {
                        variant: "LINE"
                    },
                    blogHero: {
                        variant: "LINE",
                        defaultFontSize: "xs"
                    },
                    footer: {
                        variant: "SIDE",
                        background: "simple"
                    },
                    title: {
                        variant: "SHORT_LINE",
                        decorationPlacement: "bottom"
                    },
                    defaultColorSet: "INDIGO",
                    defaultFontFaceSet: "ALBERT_SANS",
                    buttonStyle: {
                        rounded: "none",
                        variant: "filled"
                    },
                    inputStyle: {
                        rounded: "none",
                        variant: "outline"
                    },
                    captionStyle: "outline",
                    fontSizeSet: s.ey,
                    peopleVariant: "SIMON"
                },
                L = {
                    displayName: "Journal",
                    preview: {
                        template: "JOURNAL",
                        label: "Journal",
                        preview: A({
                            src: "/_next/static/media/journal-md.1f202d2c.webp",
                            height: 396,
                            width: 612,
                            blurDataURL: "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADQAQCdASoIAAUAAkA4JZwCdAD0jinKgAD+/TULttY2h6xizGvZjVcOKT3fJ5mAAAA=",
                            blurWidth: 8,
                            blurHeight: 5
                        })
                    },
                    navigationStyle: c,
                    captionStyle: "outline",
                    inputStyle: {
                        rounded: "none",
                        variant: "outline"
                    },
                    buttonStyle: {
                        rounded: "none",
                        variant: "outline"
                    },
                    fontSizeSet: s.ey,
                    defaultFontFaceSet: "NECO",
                    defaultColorSet: "CINNABAR",
                    alignmentLock: {
                        hero: "left",
                        title: "left",
                        projectHero: "left"
                    },
                    peopleVariant: "JAMES",
                    title: {
                        variant: "SIMPLE"
                    },
                    blogHero: {
                        variant: "SIMPLE",
                        defaultFontSize: "xs"
                    },
                    projectHero: {
                        variant: "SIMPLE"
                    },
                    hero: {
                        variant: "RECTANGLE",
                        image: {
                            variant: "PERSON",
                            type: "foreground"
                        },
                        fontSizeMultipliers: o.BZ.sm
                    },
                    footer: {
                        variant: "SIDE",
                        background: "line"
                    }
                },
                I = {
                    displayName: "Leaflet",
                    preview: {
                        template: "LEAFLET",
                        label: "Leaflet",
                        preview: A({
                            src: "/_next/static/media/leaflet-md.2377a6ac.webp",
                            height: 396,
                            width: 612,
                            blurDataURL: "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAABwAQCdASoIAAUAAkA4JZwCdAFAAAD++i/avIiwT4Gm+lTD6oAAAA==",
                            blurWidth: 8,
                            blurHeight: 5
                        }),
                        badge: {
                            label: "New",
                            intent: "success"
                        }
                    },
                    navigationStyle: {
                        HOME: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        PROJECT: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        BLOG_POST: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        CUSTOM: p
                    },
                    captionStyle: "outline",
                    inputStyle: {
                        rounded: "lg",
                        variant: "outline"
                    },
                    buttonStyle: {
                        rounded: "lg",
                        variant: "outline"
                    },
                    fontSizeSet: s.ey,
                    defaultFontFaceSet: "SORA_PLUS_WORK_SANS",
                    defaultColorSet: "PASTEL_PINK",
                    alignmentLock: {
                        hero: "left",
                        title: "left",
                        projectHero: "left"
                    },
                    peopleVariant: "BARBIE",
                    title: {
                        variant: "GRADIENT",
                        decorationPlacement: "top"
                    },
                    blogHero: {
                        variant: "GRADIENT",
                        defaultFontSize: "xs"
                    },
                    projectHero: {
                        variant: "GRADIENT"
                    },
                    hero: {
                        variant: "MINIMAL",
                        background: "gradient",
                        image: {
                            variant: "PERSON",
                            type: "foreground"
                        },
                        fontSizeMultipliers: o.BZ.xl
                    },
                    footer: {
                        variant: "SIDE",
                        background: "fill"
                    }
                },
                O = {
                    displayName: "Agenda (Old)",
                    preview: {
                        template: "AGENDA_LEGACY",
                        label: "Agenda (Old)",
                        preview: A({
                            src: "/_next/static/media/agenda-legacy-md.8f2ebb60.webp",
                            height: 376,
                            width: 608,
                            blurDataURL: "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACwAQCdASoIAAUAAkA4JZQAAudSGacAAP785G9k+iyRaH4qxYXgz+dnKDlAAA==",
                            blurWidth: 8,
                            blurHeight: 5
                        }),
                        badge: {
                            label: "legacy",
                            intent: "danger"
                        }
                    },
                    navigationStyle: d,
                    captionStyle: "legacy",
                    inputStyle: {
                        rounded: "none",
                        variant: "legacy"
                    },
                    buttonStyle: {
                        rounded: "none",
                        variant: "filled"
                    },
                    fontSizeSet: s.ey,
                    defaultFontFaceSet: "MONTSERRAT_WITH_UBUNTU",
                    defaultColorSet: "DEEP_TAUPE",
                    peopleVariant: "ANGELA",
                    title: {
                        variant: "LEGACY"
                    },
                    blogHero: {
                        variant: "SIMPLE",
                        defaultFontSize: "xs"
                    },
                    projectHero: {
                        variant: "LEGACY"
                    },
                    hero: {
                        variant: "LEGACY",
                        image: {
                            variant: "PERSON",
                            type: "foreground"
                        }
                    },
                    footer: {
                        variant: "SIDE",
                        background: "simple"
                    }
                },
                N = {
                    displayName: "Agora (Old)",
                    preview: {
                        template: "AGORA_LEGACY",
                        label: "Agora (Old)",
                        preview: A({
                            src: "/_next/static/media/agora-legacy-md.8c040ef7.webp",
                            height: 376,
                            width: 608,
                            blurDataURL: "data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAACQAQCdASoIAAUAAkA4JaQAAudP3WAA/v2JeI9lnQAAAA==",
                            blurWidth: 8,
                            blurHeight: 5
                        }),
                        badge: {
                            label: "legacy",
                            intent: "danger"
                        }
                    },
                    navigationStyle: d,
                    captionStyle: "legacy",
                    inputStyle: {
                        rounded: "none",
                        variant: "legacy"
                    },
                    buttonStyle: {
                        rounded: "none",
                        variant: "filled"
                    },
                    fontSizeSet: s.u6,
                    defaultFontFaceSet: "SPECTRAL_WITH_KARLA",
                    defaultColorSet: "LEGACY_FOSTER",
                    peopleVariant: "NAOMI",
                    title: {
                        variant: "LEGACY"
                    },
                    blogHero: {
                        variant: "SIMPLE",
                        defaultFontSize: "xs"
                    },
                    projectHero: {
                        variant: "LEGACY"
                    },
                    hero: {
                        variant: "LEGACY",
                        image: {
                            variant: "NEUTRAL",
                            type: "foreground"
                        }
                    },
                    footer: {
                        variant: "SIDE",
                        background: "simple"
                    }
                },
                v = {
                    displayName: "Artboard (Old)",
                    preview: {
                        template: "ARTBOARD_LEGACY",
                        label: "Artboard (Old)",
                        preview: A({
                            src: "/_next/static/media/artboard-legacy-md.eee9d891.webp",
                            height: 376,
                            width: 608,
                            blurDataURL: "data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAADQAQCdASoIAAUAAkA4JZwCdAEfbfw58AD+/CyNeSFLNKkHpDpuQO/9HAA=",
                            blurWidth: 8,
                            blurHeight: 5
                        }),
                        badge: {
                            label: "legacy",
                            intent: "danger"
                        }
                    },
                    navigationStyle: d,
                    captionStyle: "legacy",
                    inputStyle: {
                        rounded: "none",
                        variant: "legacy"
                    },
                    buttonStyle: {
                        rounded: "none",
                        variant: "filled"
                    },
                    fontSizeSet: s.ey,
                    defaultFontFaceSet: "WORK_SANS_WITH_PT_SANS",
                    defaultColorSet: "SPANISH_VIRIDIAN",
                    peopleVariant: "NAOMI",
                    title: {
                        variant: "LEGACY"
                    },
                    blogHero: {
                        variant: "SIMPLE",
                        defaultFontSize: "xs"
                    },
                    projectHero: {
                        variant: "LEGACY"
                    },
                    hero: {
                        variant: "LEGACY",
                        image: {
                            variant: "PERSON",
                            type: "foreground"
                        }
                    },
                    footer: {
                        variant: "SIDE",
                        background: "simple"
                    }
                },
                T = {
                    displayName: "Billboard (Old)",
                    preview: {
                        template: "BILLBOARD_LEGACY",
                        label: "Billboard (Old)",
                        preview: A({
                            src: "/_next/static/media/billboard-legacy-md.191aad33.webp",
                            height: 376,
                            width: 608,
                            blurDataURL: "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADQAQCdASoIAAUAAkA4JZwCdAEOJKl/AAD++0sby6j7803CavbdUPTaQ0c1/9oAAAA=",
                            blurWidth: 8,
                            blurHeight: 5
                        }),
                        badge: {
                            label: "legacy",
                            intent: "danger"
                        }
                    },
                    navigationStyle: d,
                    captionStyle: "legacy",
                    inputStyle: {
                        rounded: "none",
                        variant: "legacy"
                    },
                    buttonStyle: {
                        rounded: "none",
                        variant: "filled"
                    },
                    fontSizeSet: s.ey,
                    defaultFontFaceSet: "RUBIK_WITH_ARCHIVO",
                    defaultColorSet: "INKWELL",
                    peopleVariant: "NAOMI",
                    title: {
                        variant: "LEGACY"
                    },
                    blogHero: {
                        variant: "SIMPLE",
                        defaultFontSize: "xs"
                    },
                    projectHero: {
                        variant: "LEGACY"
                    },
                    hero: {
                        variant: "LEGACY",
                        image: {
                            variant: "PERSON",
                            type: "foreground"
                        }
                    },
                    footer: {
                        variant: "SIDE",
                        background: "fill"
                    }
                },
                _ = {
                    displayName: "Chapter (Old)",
                    preview: {
                        template: "CHAPTER_LEGACY",
                        label: "Chapter (Old)",
                        preview: A({
                            src: "/_next/static/media/chapter-legacy-md.c596a430.webp",
                            height: 376,
                            width: 608,
                            blurDataURL: "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACQAQCdASoIAAUAAkA4JZwAApplJwAA/vztNIKTwiQf3OvFWDwAAA==",
                            blurWidth: 8,
                            blurHeight: 5
                        }),
                        badge: {
                            label: "legacy",
                            intent: "danger"
                        }
                    },
                    navigationStyle: d,
                    captionStyle: "legacy",
                    inputStyle: {
                        rounded: "none",
                        variant: "legacy"
                    },
                    buttonStyle: {
                        rounded: "none",
                        variant: "filled"
                    },
                    fontSizeSet: s.YE,
                    defaultFontFaceSet: "MONTSERRAT_WITH_GILL_SANS",
                    defaultColorSet: "LEGACY_TADAO",
                    peopleVariant: "NATHAN",
                    title: {
                        variant: "LEGACY"
                    },
                    blogHero: {
                        variant: "SIMPLE",
                        defaultFontSize: "xs"
                    },
                    projectHero: {
                        variant: "LEGACY"
                    },
                    hero: {
                        variant: "LEGACY",
                        image: {
                            variant: "DARK_BEIGE",
                            type: "background"
                        }
                    },
                    footer: {
                        variant: "SIDE",
                        background: "simple"
                    }
                },
                C = {
                    displayName: "Cubic (Old)",
                    preview: {
                        template: "CUBIC_LEGACY",
                        label: "Cubic (Old)",
                        preview: A({
                            src: "/_next/static/media/cubic-legacy-md.d9109056.webp",
                            height: 376,
                            width: 608,
                            blurDataURL: "data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAwAQCdASoIAAUAAkA4JaQAA3AA/vqqXGGrqlaxZpIAAA==",
                            blurWidth: 8,
                            blurHeight: 5
                        }),
                        badge: {
                            label: "legacy",
                            intent: "danger"
                        }
                    },
                    navigationStyle: d,
                    captionStyle: "legacy",
                    inputStyle: {
                        rounded: "none",
                        variant: "legacy"
                    },
                    buttonStyle: {
                        rounded: "none",
                        variant: "filled"
                    },
                    fontSizeSet: s.Ho,
                    defaultFontFaceSet: "ZILLA_SLAB_WITH_ARCHIVO",
                    defaultColorSet: "LEGACY_RIETVELD",
                    peopleVariant: "NAOMI",
                    title: {
                        variant: "LEGACY"
                    },
                    blogHero: {
                        variant: "SIMPLE",
                        defaultFontSize: "xs"
                    },
                    projectHero: {
                        variant: "LEGACY"
                    },
                    hero: {
                        variant: "LEGACY",
                        image: {
                            variant: "GOLDEN",
                            type: "multiple"
                        }
                    },
                    footer: {
                        variant: "SIDE",
                        background: "simple"
                    }
                },
                P = {
                    displayName: "Journal (Old)",
                    preview: {
                        template: "JOURNAL_LEGACY",
                        label: "Journal (Old)",
                        preview: A({
                            src: "/_next/static/media/journal-legacy-md.19934987.webp",
                            height: 376,
                            width: 608,
                            blurDataURL: "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADQAQCdASoIAAUAAkA4JZQCdAEUo5aZgAD+/JgtoUjLnZGH24psj2Wzv/qsneIAAAA=",
                            blurWidth: 8,
                            blurHeight: 5
                        }),
                        badge: {
                            label: "legacy",
                            intent: "danger"
                        }
                    },
                    navigationStyle: d,
                    captionStyle: "legacy",
                    inputStyle: {
                        rounded: "none",
                        variant: "legacy"
                    },
                    buttonStyle: {
                        rounded: "none",
                        variant: "filled"
                    },
                    fontSizeSet: s.ey,
                    defaultFontFaceSet: "LORA_WITH_SOURCE_SERIF_PRO",
                    defaultColorSet: "CINNABAR",
                    peopleVariant: "JAMES",
                    title: {
                        variant: "LEGACY"
                    },
                    blogHero: {
                        variant: "SIMPLE",
                        defaultFontSize: "xs"
                    },
                    projectHero: {
                        variant: "LEGACY"
                    },
                    hero: {
                        variant: "LEGACY",
                        image: {
                            variant: "PERSON",
                            type: "foreground"
                        }
                    },
                    footer: {
                        variant: "SIDE",
                        background: "line"
                    }
                },
                W = {
                    displayName: "Letterpress (Old)",
                    preview: {
                        template: "LETTERPRESS_LEGACY",
                        label: "Letterpress (Old)",
                        preview: A({
                            src: "/_next/static/media/letterpress-legacy-md.77b412ff.webp",
                            height: 376,
                            width: 608,
                            blurDataURL: "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACwAQCdASoIAAUAAkA4JZwAAudhI0fAAP79yzQy5PpCXJ/DyAA=",
                            blurWidth: 8,
                            blurHeight: 5
                        }),
                        badge: {
                            label: "legacy",
                            intent: "danger"
                        }
                    },
                    navigationStyle: d,
                    captionStyle: "legacy",
                    inputStyle: {
                        rounded: "none",
                        variant: "legacy"
                    },
                    buttonStyle: {
                        rounded: "none",
                        variant: "filled"
                    },
                    fontSizeSet: s.ey,
                    defaultFontFaceSet: "MERRIWEATHER_WITH_MULISH",
                    defaultColorSet: "BRONZE_GLINT",
                    peopleVariant: "YARA",
                    title: {
                        variant: "LEGACY"
                    },
                    blogHero: {
                        variant: "SIMPLE",
                        defaultFontSize: "xs"
                    },
                    projectHero: {
                        variant: "LEGACY"
                    },
                    hero: {
                        variant: "LEGACY",
                        image: {
                            variant: "PERSON",
                            type: "foreground"
                        }
                    },
                    footer: {
                        variant: "CENTER",
                        background: "simple"
                    }
                },
                D = {
                    displayName: "Museum (Old)",
                    preview: {
                        template: "MUSEUM_LEGACY",
                        label: "Museum (Old)",
                        preview: A({
                            src: "/_next/static/media/museum-legacy-md.47497292.webp",
                            height: 376,
                            width: 608,
                            blurDataURL: "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAACwAQCdASoIAAUAAkA4JaQAAudLfxAAAP78kLqPDhYLHQThOqLIAAAA",
                            blurWidth: 8,
                            blurHeight: 5
                        }),
                        badge: {
                            label: "legacy",
                            intent: "danger"
                        }
                    },
                    navigationStyle: {
                        HOME: {
                            isOverlay: !0,
                            paddingSize: "md"
                        },
                        PROJECT: {
                            isOverlay: !1,
                            paddingSize: "md"
                        },
                        BLOG_POST: p,
                        CUSTOM: p
                    },
                    captionStyle: "legacy",
                    inputStyle: {
                        rounded: "none",
                        variant: "legacy"
                    },
                    buttonStyle: {
                        rounded: "none",
                        variant: "filled"
                    },
                    fontSizeSet: s.AF,
                    defaultFontFaceSet: "CABIN_WITH_MULISH",
                    defaultColorSet: "LEGACY_TADAO",
                    peopleVariant: "SUE",
                    title: {
                        variant: "LEGACY"
                    },
                    blogHero: {
                        variant: "SIMPLE",
                        defaultFontSize: "xs"
                    },
                    projectHero: {
                        variant: "LEGACY"
                    },
                    hero: {
                        variant: "LEGACY",
                        image: {
                            variant: "NEUTRAL2",
                            type: "background"
                        }
                    },
                    footer: {
                        variant: "SIDE",
                        background: "simple"
                    }
                },
                U = {
                    displayName: "Palazzo (Old)",
                    preview: {
                        template: "PALAZZO_LEGACY",
                        label: "Palazzo (Old)",
                        preview: A({
                            src: "/_next/static/media/palazzo-legacy-md.83f8bd87.webp",
                            height: 376,
                            width: 608,
                            blurDataURL: "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAACwAQCdASoIAAUAAkA4JaQAAxeTmE4AAP76y0S7Vl3/+t59ySaaAAAA",
                            blurWidth: 8,
                            blurHeight: 5
                        }),
                        badge: {
                            label: "legacy",
                            intent: "danger"
                        }
                    },
                    navigationStyle: d,
                    captionStyle: "legacy",
                    inputStyle: {
                        rounded: "none",
                        variant: "legacy"
                    },
                    buttonStyle: {
                        rounded: "none",
                        variant: "filled"
                    },
                    fontSizeSet: s.Gl,
                    defaultFontFaceSet: "POPPINS_WITH_WORK_SANS",
                    defaultColorSet: "LEGACY_PARLER",
                    peopleVariant: "SIMON",
                    title: {
                        variant: "LEGACY"
                    },
                    blogHero: {
                        variant: "SIMPLE",
                        defaultFontSize: "xs"
                    },
                    projectHero: {
                        variant: "LEGACY"
                    },
                    hero: {
                        variant: "LEGACY",
                        image: {
                            variant: "BEIGE",
                            type: "foreground"
                        }
                    },
                    footer: {
                        variant: "SIDE",
                        background: "simple"
                    }
                },
                M = {
                    displayName: "Typewriter (Old)",
                    preview: {
                        template: "TYPEWRITER_LEGACY",
                        label: "Typewriter (Old)",
                        preview: A({
                            src: "/_next/static/media/typewriter-legacy-md.9218cf3b.webp",
                            height: 376,
                            width: 608,
                            blurDataURL: "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACwAQCdASoIAAUAAkA4JaQAAtz2lOgAAP79OR8eNka4sRSPgK1apfQjUuxgAAAA",
                            blurWidth: 8,
                            blurHeight: 5
                        }),
                        badge: {
                            label: "legacy",
                            intent: "danger"
                        }
                    },
                    navigationStyle: d,
                    captionStyle: "legacy",
                    inputStyle: {
                        rounded: "none",
                        variant: "legacy"
                    },
                    buttonStyle: {
                        rounded: "none",
                        variant: "filled"
                    },
                    fontSizeSet: s.ey,
                    defaultFontFaceSet: "FIRA_SANS_WITH_ROBOTO_MONO",
                    defaultColorSet: "CHARCOAL",
                    peopleVariant: "SIMON2",
                    title: {
                        variant: "LEGACY"
                    },
                    blogHero: {
                        variant: "SIMPLE",
                        defaultFontSize: "xs"
                    },
                    projectHero: {
                        variant: "LEGACY"
                    },
                    hero: {
                        variant: "LEGACY",
                        image: {
                            variant: "PERSON",
                            type: "foreground"
                        }
                    },
                    footer: {
                        variant: "SIDE",
                        background: "fill"
                    }
                },
                B = {
                    displayName: "Letterpress",
                    preview: {
                        template: "LETTERPRESS",
                        label: "Letterpress",
                        preview: A({
                            src: "/_next/static/media/letterpress-md.105e526f.webp",
                            height: 396,
                            width: 612,
                            blurDataURL: "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAADQAQCdASoIAAUAAkA4JZwCdAEPASzUgAD+/OqLIIqWMh0lQAA=",
                            blurWidth: 8,
                            blurHeight: 5
                        })
                    },
                    navigationStyle: {
                        HOME: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        PROJECT: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        BLOG_POST: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        CUSTOM: p
                    },
                    captionStyle: "simple",
                    inputStyle: {
                        rounded: "lg",
                        variant: "filled"
                    },
                    buttonStyle: {
                        rounded: "full",
                        variant: "filled"
                    },
                    fontSizeSet: s.ey,
                    defaultFontFaceSet: "EB_GARAMOND_PLUS_ZODIAK",
                    defaultColorSet: "PASTEL_PINK",
                    alignmentLock: {
                        hero: "center",
                        footer: "center"
                    },
                    defaultAlignment: {
                        title: "center"
                    },
                    peopleVariant: "YARA",
                    title: {
                        variant: "SIMPLE"
                    },
                    blogHero: {
                        variant: "FILL",
                        defaultFontSize: "xs"
                    },
                    projectHero: {
                        variant: "FILL"
                    },
                    hero: {
                        variant: "SIMPLE",
                        background: "fill",
                        image: {
                            variant: "PERSON",
                            type: "foreground"
                        }
                    },
                    footer: {
                        variant: "CENTER",
                        background: "simple"
                    }
                },
                F = {
                    displayName: "Loft",
                    preview: {
                        template: "LOFT",
                        label: "Loft",
                        preview: A({
                            src: "/_next/static/media/loft-md.1920a052.webp",
                            height: 396,
                            width: 612,
                            blurDataURL: "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAADQAQCdASoIAAUAAkA4JZwC7AD0jgAdAAD+/TGiI78ze8RnAWVK/0geyNvFibZAIEAAAA==",
                            blurWidth: 8,
                            blurHeight: 5
                        })
                    },
                    navigationStyle: {
                        HOME: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        PROJECT: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        BLOG_POST: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        CUSTOM: p
                    },
                    captionStyle: "filled",
                    inputStyle: {
                        rounded: "lg",
                        variant: "filled"
                    },
                    buttonStyle: {
                        rounded: "full",
                        variant: "filled"
                    },
                    fontSizeSet: s.ey,
                    defaultFontFaceSet: "SORA_PLUS_WORK_SANS_ARCHIFOLIO",
                    defaultColorSet: "CUSHION",
                    peopleVariant: "ANGELA",
                    hero: {
                        variant: "TILE",
                        background: "fill",
                        taglineVariant: "COMPLEX",
                        image: {
                            variant: "GOLDEN",
                            type: "multiple"
                        },
                        fontSizeMultipliers: o.aN.hero.md
                    },
                    title: {
                        variant: "GRADIENT",
                        decorationPlacement: "bottom",
                        fontSizeMultipliers: o.aN.title.md
                    },
                    blogHero: {
                        variant: "FILL",
                        defaultFontSize: "xs"
                    },
                    projectHero: {
                        variant: "FILL"
                    },
                    footer: {
                        variant: "SIDE",
                        background: "simple"
                    }
                },
                G = {
                    displayName: "Metropolitan",
                    preview: {
                        template: "METROPOLITAN",
                        label: "Metropolitan",
                        preview: A({
                            src: "/_next/static/media/metropolitan-md.70c7516c.webp",
                            height: 396,
                            width: 612,
                            blurDataURL: "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoIAAUAAkA4JaQAAudSGVQAAP7m+6XJnX7KPIxbSSrXPYvXr8MEBBRByAObezxAAAA=",
                            blurWidth: 8,
                            blurHeight: 5
                        })
                    },
                    navigationStyle: {
                        HOME: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        PROJECT: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        BLOG_POST: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        CUSTOM: p
                    },
                    navigationTextColorOverride: [255, 255, 255],
                    captionStyle: "outline",
                    inputStyle: {
                        rounded: "lg",
                        variant: "outline"
                    },
                    buttonStyle: {
                        rounded: "full",
                        variant: "outline"
                    },
                    fontSizeSet: s.ey,
                    defaultFontFaceSet: "CHAKRA_PETCH_PLUS_INTER",
                    defaultColorSet: "OBSIDIAN",
                    peopleVariant: "DAISY",
                    hero: {
                        variant: "FULL",
                        taglineVariant: "EXPERIENCE",
                        image: {
                            variant: "DARK",
                            type: "multiple"
                        },
                        fontSizeMultipliers: o.aN.hero.md
                    },
                    title: {
                        variant: "FULL_LINE",
                        decorationPlacement: "top",
                        fontSizeMultipliers: o.aN.title.md
                    },
                    blogHero: {
                        variant: "FILL",
                        defaultFontSize: "md"
                    },
                    projectHero: {
                        variant: "IMAGE",
                        imageOverlayVariant: "default",
                        fontSizeMultipliers: o.aN.projectHero.md
                    },
                    footer: {
                        variant: "SIDE",
                        background: "simple"
                    }
                },
                k = {
                    displayName: "Modular",
                    preview: {
                        template: "MODULAR",
                        label: "Modular",
                        preview: A({
                            src: "/_next/static/media/modular-md.4a1e5a6b.webp",
                            height: 396,
                            width: 612,
                            blurDataURL: "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACwAQCdASoIAAUAAkA4JaQAAxedatB4AP79NQb+BFWt8MWAAAA=",
                            blurWidth: 8,
                            blurHeight: 5
                        })
                    },
                    navigationStyle: {
                        HOME: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        PROJECT: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        BLOG_POST: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        CUSTOM: p
                    },
                    captionStyle: "filled",
                    inputStyle: {
                        rounded: "default",
                        variant: "filled"
                    },
                    buttonStyle: {
                        rounded: "full",
                        variant: "filled"
                    },
                    fontSizeSet: s.ey,
                    defaultFontFaceSet: "ALBERT_SANS",
                    defaultColorSet: "CONCRETE",
                    peopleVariant: "LUCY",
                    hero: {
                        variant: "NARROW",
                        background: "fill",
                        taglineVariant: "SIMPLE",
                        image: {
                            variant: "PERSON",
                            type: "foreground",
                            hideDefaultImage: !0
                        },
                        fontSizeMultipliers: o.aN.hero.lg
                    },
                    title: {
                        variant: "GRADIENT",
                        decorationPlacement: "bottom",
                        fontSizeMultipliers: o.aN.title.md
                    },
                    blogHero: {
                        variant: "FILL",
                        defaultFontSize: "md"
                    },
                    projectHero: {
                        variant: "FILL",
                        fontSizeMultipliers: o.aN.projectHero.md
                    },
                    footer: {
                        variant: "SIDE",
                        background: "simple"
                    }
                },
                z = {
                    displayName: "Museum",
                    preview: {
                        template: "MUSEUM",
                        label: "Museum",
                        preview: A({
                            src: "/_next/static/media/museum-md.00ea2f88.webp",
                            height: 396,
                            width: 612,
                            blurDataURL: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAAAwAgCdASoIAAUAAkA4JZQCdH8GJ/gedkvVAAD8/d2xFqc8ztWN7LznHX0LX9BVFACd8RETcnK8PcDH8AAAAA==",
                            blurWidth: 8,
                            blurHeight: 5
                        })
                    },
                    navigationStyle: {
                        HOME: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        PROJECT: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        BLOG_POST: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        CUSTOM: p
                    },
                    navigationTextColorOverride: [255, 255, 255],
                    captionStyle: "filled",
                    inputStyle: {
                        rounded: "lg",
                        variant: "filled"
                    },
                    buttonStyle: {
                        rounded: "full",
                        variant: "filled"
                    },
                    fontSizeSet: s.ey,
                    defaultFontFaceSet: "SPACE_GROTESK_PLUS_WORK_SANS",
                    defaultColorSet: "INK",
                    peopleVariant: "SUE",
                    hero: {
                        variant: "FULL",
                        taglineVariant: "EXPERIENCE",
                        image: {
                            variant: "NEUTRAL2",
                            type: "background"
                        },
                        fontSizeMultipliers: o.aN.hero.xl
                    },
                    title: {
                        variant: "FULL_LINE",
                        decorationPlacement: "top",
                        fontSizeMultipliers: o.aN.title.md
                    },
                    blogHero: {
                        variant: "FILL",
                        defaultFontSize: "md"
                    },
                    projectHero: {
                        variant: "IMAGE",
                        imageOverlayVariant: "dark",
                        fontSizeMultipliers: o.aN.projectHero.md
                    },
                    footer: {
                        variant: "SIDE",
                        background: "simple"
                    }
                },
                Y = {
                    displayName: "Neue",
                    preview: {
                        label: "Neue",
                        template: "NEUE",
                        preview: A({
                            src: "/_next/static/media/neue-md.a28a9cec.webp",
                            height: 396,
                            width: 612,
                            blurDataURL: "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoIAAUAAkA4JaQAAuabAYAA/vhAS5O7bGn0Q2uypZZgrQdTx2NH6KgAAAA=",
                            blurWidth: 8,
                            blurHeight: 5
                        }),
                        badge: {
                            label: "New",
                            intent: "success"
                        }
                    },
                    navigationStyle: {
                        HOME: {
                            isOverlay: !1,
                            paddingSize: "lg"
                        },
                        PROJECT: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        BLOG_POST: p,
                        CUSTOM: p
                    },
                    defaultAlignment: {
                        title: "center"
                    },
                    hero: {
                        variant: "PANORAMA",
                        background: "fill",
                        taglineVariant: "COMPLEX",
                        image: {
                            type: "foreground",
                            variant: "DARK_BEIGE"
                        },
                        fontSizeMultipliers: o.aN.hero.lg
                    },
                    projectHero: {
                        variant: "FILL",
                        fontSizeMultipliers: o.aN.projectHero.md
                    },
                    blogHero: {
                        variant: "FILL",
                        defaultFontSize: "md"
                    },
                    footer: {
                        variant: "SIDE",
                        background: "fill"
                    },
                    title: {
                        variant: "FILL",
                        fontSizeMultipliers: o.aN.title.md
                    },
                    defaultColorSet: "CLAY",
                    defaultFontFaceSet: "GENERAL_SANS",
                    buttonStyle: {
                        rounded: "lg",
                        variant: "filled"
                    },
                    inputStyle: {
                        rounded: "default",
                        variant: "filled"
                    },
                    captionStyle: "simple",
                    fontSizeSet: s.ey,
                    peopleVariant: "DAISY"
                },
                x = {
                    displayName: "Palazzo",
                    preview: {
                        template: "PALAZZO",
                        label: "Palazzo",
                        preview: A({
                            src: "/_next/static/media/palazzo-md.5ae864cd.webp",
                            height: 396,
                            width: 612,
                            blurDataURL: "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoIAAUAAkA4JZwAAxecNn8QAP77YQK8DH6uvdjk2qAZ/bAt32QM+ngQAsgAAA==",
                            blurWidth: 8,
                            blurHeight: 5
                        })
                    },
                    navigationStyle: {
                        HOME: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        PROJECT: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        BLOG_POST: {
                            isOverlay: !0,
                            paddingSize: "lg"
                        },
                        CUSTOM: p
                    },
                    captionStyle: "outline",
                    inputStyle: {
                        rounded: "lg",
                        variant: "outline"
                    },
                    buttonStyle: {
                        rounded: "lg",
                        variant: "outline"
                    },
                    fontSizeSet: s.ey,
                    defaultFontFaceSet: "ALBERT_SANS",
                    defaultColorSet: "CUSHION",
                    peopleVariant: "SIMON",
                    hero: {
                        variant: "WIDE",
                        background: "gradient",
                        taglineVariant: "MINIMAL",
                        image: {
                            variant: "BEIGE",
                            type: "foreground"
                        },
                        fontSizeMultipliers: o.aN.hero.lg
                    },
                    title: {
                        variant: "GRADIENT",
                        decorationPlacement: "top",
                        fontSizeMultipliers: o.aN.title.md
                    },
                    blogHero: {
                        variant: "GRADIENT",
                        defaultFontSize: "md"
                    },
                    projectHero: {
                        variant: "GRADIENT",
                        fontSizeMultipliers: o.aN.projectHero.md
                    },
                    footer: {
                        variant: "SIDE",
                        background: "simple"
                    }
                },
                K = {
                    displayName: "Poster",
                    preview: {
                        template: "POSTER",
                        label: "Poster",
                        preview: A({
                            src: "/_next/static/media/poster-md.3d43f5ed.webp",
                            height: 396,
                            width: 612,
                            blurDataURL: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADwAQCdASoIAAUAAkA4JbACdLoAAwj8f6AA/thTOYOsfi3HvkwB3d1u3ibo2F/xPoyDHRi1Cw/+Wr6l+PTZ5XpPW347AAAA",
                            blurWidth: 8,
                            blurHeight: 5
                        })
                    },
                    navigationStyle: c,
                    captionStyle: "outline",
                    inputStyle: {
                        rounded: "none",
                        variant: "outline"
                    },
                    buttonStyle: {
                        rounded: "none",
                        variant: "outline"
                    },
                    fontSizeSet: s.ey,
                    defaultFontFaceSet: "IBARRA_REAL_NOVA_PLUS_ERODE",
                    defaultColorSet: "BURNT_SIENNA",
                    alignmentLock: {
                        hero: "left",
                        title: "left",
                        projectHero: "left"
                    },
                    peopleVariant: "MIKE",
                    title: {
                        variant: "SIMPLE"
                    },
                    blogHero: {
                        variant: "LINE",
                        defaultFontSize: "lg"
                    },
                    projectHero: {
                        variant: "LINE",
                        fontSizeMultipliers: o.BZ.lg
                    },
                    hero: {
                        variant: "MINIMAL",
                        background: "line",
                        image: {
                            variant: "PERSON",
                            type: "foreground"
                        },
                        fontSizeMultipliers: o.BZ.lg
                    },
                    footer: {
                        variant: "SIDE",
                        background: "line"
                    }
                },
                j = {
                    AGORA: S,
                    CHAPTER: f,
                    DOWNTOWN: H,
                    LOFT: F,
                    METROPOLITAN: G,
                    MODULAR: k,
                    MUSEUM: z,
                    PALAZZO: x,
                    DECO: w,
                    NEUE: Y,
                    CLASSICA: E,
                    BEAUX: y,
                    HAUS: R,
                    ARTBOARD: m,
                    BILLBOARD: b,
                    BROCHURE: u,
                    JOURNAL: L,
                    LEAFLET: I,
                    LETTERPRESS: B,
                    POSTER: K,
                    PREMIER: {
                        displayName: "Premier",
                        preview: {
                            template: "PREMIER",
                            label: "Premier",
                            preview: A({
                                src: "/_next/static/media/premier-md.ea9c295a.webp",
                                height: 396,
                                width: 612,
                                blurDataURL: "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACwAQCdASoIAAUAAkA4JaQAAudjd98AAP79NQcEPVcBHo1W59AAAA==",
                                blurWidth: 8,
                                blurHeight: 5
                            })
                        },
                        navigationStyle: c,
                        captionStyle: "simple",
                        inputStyle: {
                            rounded: "none",
                            variant: "outline"
                        },
                        buttonStyle: {
                            rounded: "none",
                            variant: "outline"
                        },
                        fontSizeSet: s.ey,
                        defaultFontFaceSet: "CAUDEX_PLUS_MARTEL",
                        defaultColorSet: "OLIVE_N_SAGE",
                        alignmentLock: {
                            hero: "left",
                            title: "left",
                            projectHero: "left"
                        },
                        peopleVariant: "SUMMER",
                        title: {
                            variant: "SIMPLE"
                        },
                        blogHero: {
                            variant: "SIMPLE",
                            defaultFontSize: "xs"
                        },
                        projectHero: {
                            variant: "SIMPLE"
                        },
                        hero: {
                            variant: "OVERLAY",
                            image: {
                                variant: "PERSON",
                                type: "foreground"
                            },
                            fontSizeMultipliers: o.BZ.sm
                        },
                        footer: {
                            variant: "SIDE",
                            background: "line"
                        }
                    },
                    TYPEWRITER: {
                        displayName: "Typewriter",
                        preview: {
                            template: "TYPEWRITER",
                            label: "Typewriter",
                            preview: A({
                                src: "/_next/static/media/typewriter-md.38c18683.webp",
                                height: 396,
                                width: 612,
                                blurDataURL: "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACwAQCdASoIAAUAAkA4JaQAAxecstmAAP79Mf+FepBKrCMIgAA=",
                                blurWidth: 8,
                                blurHeight: 5
                            })
                        },
                        navigationStyle: {
                            HOME: {
                                isOverlay: !0,
                                paddingSize: "lg"
                            },
                            PROJECT: {
                                isOverlay: !0,
                                paddingSize: "lg"
                            },
                            BLOG_POST: {
                                isOverlay: !0,
                                paddingSize: "lg"
                            },
                            CUSTOM: p
                        },
                        captionStyle: "simple",
                        inputStyle: {
                            rounded: "lg",
                            variant: "outline"
                        },
                        buttonStyle: {
                            rounded: "full",
                            variant: "outline"
                        },
                        fontSizeSet: s.ey,
                        defaultFontFaceSet: "SPACE_GROTESK",
                        defaultColorSet: "CHARCOAL",
                        alignmentLock: {
                            hero: "left",
                            title: "left",
                            projectHero: "left"
                        },
                        peopleVariant: "SIMON2",
                        title: {
                            variant: "SHORT_LINE",
                            decorationPlacement: "top"
                        },
                        blogHero: {
                            variant: "FILL",
                            defaultFontSize: "md"
                        },
                        projectHero: {
                            variant: "FILL",
                            fontSizeMultipliers: o.BZ.md
                        },
                        hero: {
                            variant: "SIMPLE",
                            background: "fill",
                            image: {
                                variant: "PERSON",
                                type: "foreground"
                            },
                            fontSizeMultipliers: o.BZ.md
                        },
                        footer: {
                            variant: "SIDE",
                            background: "fill"
                        }
                    },
                    WALLSCAPE: {
                        displayName: "Wallscape",
                        preview: {
                            template: "WALLSCAPE",
                            label: "Wallscape",
                            preview: A({
                                src: "/_next/static/media/wallscape-md.cff1eb0d.webp",
                                height: 396,
                                width: 612,
                                blurDataURL: "data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAACQAQCdASoIAAUAAkA4JaQAAtz5SiwA/vj6Jp2Kl3WNQ6GY+qNCWnoUAAA=",
                                blurWidth: 8,
                                blurHeight: 5
                            })
                        },
                        navigationStyle: c,
                        captionStyle: "simple",
                        inputStyle: {
                            rounded: "none",
                            variant: "outline"
                        },
                        buttonStyle: {
                            rounded: "none",
                            variant: "outline"
                        },
                        fontSizeSet: s.ey,
                        defaultFontFaceSet: "SPECTRAL_PLUS_KARLA",
                        defaultColorSet: "GRANITE_GREY",
                        alignmentLock: {
                            hero: "left",
                            title: "left",
                            projectHero: "left"
                        },
                        peopleVariant: "ANGELA",
                        title: {
                            variant: "SIMPLE"
                        },
                        blogHero: {
                            variant: "SIMPLE",
                            defaultFontSize: "lg"
                        },
                        projectHero: {
                            variant: "SIMPLE",
                            fontSizeMultipliers: o.BZ.lg
                        },
                        hero: {
                            variant: "MINIMAL",
                            background: "simple",
                            image: {
                                variant: "PERSON",
                                type: "foreground"
                            },
                            fontSizeMultipliers: o.BZ.lg
                        },
                        footer: {
                            variant: "SIDE",
                            background: "simple"
                        }
                    },
                    AGORA_LEGACY: N,
                    CHAPTER_LEGACY: _,
                    CUBIC_LEGACY: C,
                    MUSEUM_LEGACY: D,
                    PALAZZO_LEGACY: U,
                    AGENDA_LEGACY: O,
                    ARTBOARD_LEGACY: v,
                    BILLBOARD_LEGACY: T,
                    JOURNAL_LEGACY: P,
                    LETTERPRESS_LEGACY: W,
                    TYPEWRITER_LEGACY: M
                },
                V = n.Ab ? ["LOFT", "MUSEUM", "PALAZZO", "AGORA", "METROPOLITAN", "DOWNTOWN", "MODULAR", "DECO", "NEUE", "CLASSICA", "BEAUX", "HAUS", "CHAPTER"] : ["BROCHURE", "LEAFLET", "ARTBOARD", "BILLBOARD", "JOURNAL", "LETTERPRESS", "POSTER", "PREMIER", "TYPEWRITER", "WALLSCAPE"],
                Q = {
                    Copywriter: ["TYPEWRITER", "PREMIER", "BILLBOARD"],
                    "Content writer": ["LETTERPRESS", "TYPEWRITER", "ARTBOARD"],
                    "Social media manager/specialist": ["ARTBOARD", "PREMIER", "BILLBOARD"],
                    "UGC creator": ["LEAFLET", "PREMIER", "BILLBOARD"],
                    "Digital marketer": ["BILLBOARD", "JOURNAL", "LETTERPRESS"],
                    Journalist: ["TYPEWRITER", "WALLSCAPE", "JOURNAL"],
                    "Author or creative writer": ["LETTERPRESS", "PREMIER", "TYPEWRITER"],
                    "PR/Communications specialist": ["PREMIER", "ARTBOARD", "POSTER"],
                    Other: n.Ab ? ["MODULAR"] : ["ARTBOARD", "BILLBOARD", "TYPEWRITER"],
                    Architect: ["MUSEUM", "METROPOLITAN"],
                    "BIM manager": ["MODULAR", "HAUS"],
                    "Interior Architect": ["DECO", "CLASSICA"],
                    "Interior Designer": ["PALAZZO", "LOFT"],
                    "Interior Decorator": ["DOWNTOWN", "BEAUX"],
                    "Landscape Architect": ["NEUE", "CHAPTER"],
                    "Project Manager": ["MODULAR", "HAUS"]
                },
                J = [j.BROCHURE.preview, j.LEAFLET.preview, j.ARTBOARD.preview, j.BILLBOARD.preview, j.JOURNAL.preview, j.LETTERPRESS.preview, j.POSTER.preview, j.PREMIER.preview, j.TYPEWRITER.preview, j.WALLSCAPE.preview],
                Z = [j.LOFT.preview, j.MUSEUM.preview, j.PALAZZO.preview, j.AGORA.preview, j.METROPOLITAN.preview, j.DOWNTOWN.preview, j.MODULAR.preview, j.DECO.preview, j.NEUE.preview, j.CLASSICA.preview, j.BEAUX.preview, j.HAUS.preview, j.CHAPTER.preview],
                X = [j.ARTBOARD_LEGACY.preview, j.AGENDA_LEGACY.preview, j.BILLBOARD_LEGACY.preview, j.JOURNAL_LEGACY.preview, j.LETTERPRESS_LEGACY.preview, j.TYPEWRITER_LEGACY.preview, j.AGORA_LEGACY.preview, j.PALAZZO_LEGACY.preview, j.CUBIC_LEGACY.preview, j.CHAPTER_LEGACY.preview, j.MUSEUM_LEGACY.preview],
                q = n.Ab ? Z : J;

            function $(e) {
                let {
                    peopleVariant: i
                } = j[e];
                return ["DAISY", "SUE", "SIMON", "NATHAN"].includes(i) ? [1, 2].map(e => r.People["".concat((0, l.Qs)(i.toLowerCase())).concat(e)]) : [1, 2, 3].map(e => r.People["".concat((0, l.Qs)(i.toLowerCase())).concat(e)])
            }

            function ee(e) {
                let {
                    peopleVariant: i
                } = j[e];
                return (0, a.TV)(["DAISY", "SUE", "SIMON", "NATHAN"].includes(i) ? [1, 2, 2] : [1, 2, 3]).map(e => "/assets/placeholders/people/".concat(i.toLowerCase(), "-").concat(e, ".webp"))
            }
        },
        51254: function(e, i, t) {
            t.d(i, {
                X: function() {
                    return f
                }
            });
            var a = t(60185);

            function l(e) {
                let {
                    h1Family: i,
                    h1Weight: t = 700,
                    h1Italic: a = !1,
                    h2Family: l,
                    h2Weight: r = 700,
                    h2Italic: n = !1,
                    h3Family: o,
                    h3Weight: s = 700,
                    h3Italic: g = !1,
                    h4Family: h,
                    h4Weight: p = 700,
                    h4Italic: d = !1,
                    pFamily: c
                } = e;
                return {
                    h1Family: i,
                    h1Weight: t,
                    h1Italic: a,
                    h2Family: l,
                    h2Weight: r,
                    h2Italic: n,
                    h3Family: o,
                    h3Weight: s,
                    h3Italic: g,
                    h4Family: h,
                    h4Weight: p,
                    h4Italic: d,
                    pFamily: c
                }
            }
            let r = l({
                    h1Family: "'Rubik', sans-serif",
                    h2Family: "'Rubik', sans-serif",
                    h3Family: "'Rubik', sans-serif",
                    h4Family: "'Rubik', sans-serif",
                    pFamily: "'Archivo', sans-serif"
                }),
                n = l({
                    h1Family: "'Work Sans', sans-serif",
                    h2Family: "'Work Sans', sans-serif",
                    h3Family: "'Work Sans', sans-serif",
                    h4Family: "'Work Sans', sans-serif",
                    pFamily: "'PT Sans', sans-serif"
                }),
                o = l({
                    h1Family: "'Poppins', sans-serif",
                    h2Family: "'Poppins', sans-serif",
                    h3Family: "'Poppins', sans-serif",
                    h4Family: "'Poppins', sans-serif",
                    pFamily: "'Open Sans', sans-serif"
                }),
                s = l({
                    h1Family: "'Montserrat', sans-serif",
                    h2Family: "'Montserrat', sans-serif",
                    h3Family: "'Montserrat', sans-serif",
                    h4Family: "'Montserrat', sans-serif",
                    pFamily: "'Ubuntu', sans-serif"
                }),
                g = l({
                    h1Family: "'Raleway', sans-serif",
                    h2Family: "'Raleway', sans-serif",
                    h3Family: "'Raleway', sans-serif",
                    h4Family: "'Raleway', sans-serif",
                    pFamily: "'Lato', sans-serif"
                }),
                h = l({
                    h1Family: "'Lora', serif",
                    h2Family: "'Lora', serif",
                    h3Family: "'Lora', serif",
                    h4Family: "'Lora', serif",
                    pFamily: "'Source Serif Pro', serif"
                }),
                p = l({
                    h1Family: "'Playfair Display', serif",
                    h2Family: "'Playfair Display', serif",
                    h3Family: "'Playfair Display', serif",
                    h4Family: "'Playfair Display', serif",
                    pFamily: "'Noto Sans', sans-serif"
                }),
                d = l({
                    h1Family: "'Merriweather', serif",
                    h2Family: "'Merriweather', serif",
                    h3Family: "'Merriweather', serif",
                    h4Family: "'Merriweather', serif",
                    pFamily: "'Mulish', sans-serif"
                }),
                c = l({
                    h1Family: "'Arvo', serif",
                    h2Family: "'Arvo', serif",
                    h3Family: "'Arvo', serif",
                    h4Family: "'Arvo', serif",
                    pFamily: "'Roboto', sans-serif"
                }),
                A = l({
                    h1Family: "'Vollkorn', serif",
                    h2Family: "'Vollkorn', serif",
                    h3Family: "'Vollkorn', serif",
                    h4Family: "'Vollkorn', serif",
                    pFamily: "'Bitter', serif"
                }),
                S = l({
                    h1Family: "'Spectral', serif",
                    h2Family: "'Spectral', serif",
                    h3Family: "'Spectral', serif",
                    h4Family: "'Spectral', serif",
                    pFamily: "'Karla', sans-serif",
                    ...a.Ab ? {
                        h1Weight: 300,
                        h2Weight: 400,
                        h3Weight: 400,
                        h4Weight: 500
                    } : {}
                }),
                m = l({
                    h1Family: "'Fira Sans', sans-serif",
                    h2Family: "'Fira Sans', sans-serif",
                    h3Family: "'Fira Sans', sans-serif",
                    h4Family: "'Fira Sans', sans-serif",
                    pFamily: "'Roboto Mono', monospace"
                }),
                y = l({
                    h1Family: "'Space Mono', monospace",
                    h2Family: "'Space Mono', monospace",
                    h3Family: "'Space Mono', monospace",
                    h4Family: "'Space Mono', monospace",
                    pFamily: "'Karla', sans-serif"
                }),
                b = l({
                    h1Family: "'IBM Plex Mono', monospace",
                    h2Family: "'IBM Plex Mono', monospace",
                    h3Family: "'IBM Plex Mono', monospace",
                    h4Family: "'IBM Plex Mono', monospace",
                    pFamily: "'IBM Plex Sans', sans-serif"
                }),
                u = l({
                    h1Family: "'Montserrat', sans-serif",
                    h2Family: "'Montserrat', sans-serif",
                    h3Family: "'Montserrat', sans-serif",
                    h4Family: "'Montserrat', sans-serif",
                    pFamily: "'Gill Sans', sans-serif",
                    h1Weight: 800,
                    h2Weight: 800,
                    h3Weight: 800,
                    h4Weight: 600
                }),
                f = {
                    RUBIK_WITH_ARCHIVO: r,
                    WORK_SANS_WITH_PT_SANS: n,
                    POPPINS_WITH_OPEN_SANS: o,
                    MONTSERRAT_WITH_UBUNTU: s,
                    RALEWAY_WITH_LATO: g,
                    LORA_WITH_SOURCE_SERIF_PRO: h,
                    PLAYFAIR_DISPLAY_WITH_NOTO_SANS: p,
                    MERRIWEATHER_WITH_MULISH: d,
                    ARVO_WITH_ROBOTO: c,
                    VOLLKORN_WITH_BITTER: A,
                    SPECTRAL_WITH_KARLA: S,
                    FIRA_SANS_WITH_ROBOTO_MONO: m,
                    SPACE_MONO_WITH_KARLA: y,
                    IBM_PLEX_MONO_WITH_IBM_PLEX_SANS: b,
                    MONTSERRAT_WITH_GILL_SANS: u,
                    POPPINS_WITH_WORK_SANS: l({
                        h1Family: "'Poppins', sans-serif",
                        h2Family: "'Poppins', sans-serif",
                        h3Family: "'Poppins', sans-serif",
                        h4Family: "'Poppins', sans-serif",
                        pFamily: "'Work Sans', sans-serif",
                        h1Weight: 400,
                        h2Weight: 400,
                        h3Weight: 400,
                        h4Weight: 600
                    }),
                    CABIN_WITH_MULISH: l({
                        h1Family: "'Cabin', sans-serif",
                        h2Family: "'Cabin', sans-serif",
                        h3Family: "'Cabin', sans-serif",
                        h4Family: "'Cabin', sans-serif",
                        pFamily: "'Mulish', sans-serif",
                        h1Weight: 600,
                        h2Weight: 600,
                        h3Weight: 600,
                        h4Weight: 600
                    }),
                    ZILLA_SLAB_WITH_ARCHIVO: l({
                        h1Family: "'Zilla Slab', serif",
                        h2Family: "'Zilla Slab', serif",
                        h3Family: "'Archivo', sans-serif",
                        h4Family: "'Archivo', sans-serif",
                        pFamily: "'Archivo', sans-serif",
                        h1Weight: 600,
                        h2Weight: 600,
                        h3Weight: 600,
                        h4Weight: 400
                    })
                }
        },
        72467: function(e, i, t) {
            t.d(i, {
                BZ: function() {
                    return n
                },
                EC: function() {
                    return r
                },
                KA: function() {
                    return s
                }
            });
            var a = t(19872);
            let l = a.Ry({
                    id: a.Z_(),
                    content: a.Z_().min(1),
                    coordinates: a.Ry({
                        x: a.Rx(),
                        y: a.Rx()
                    })
                }),
                r = ["BROWSER", "ROUNDED", "OUTLINED"],
                n = a.Km(["BILLBOARD", "LAPTOP", "MAGAZINE", "PHONE", "TV", ...r]),
                o = a.Ry({
                    src: a.Z_(),
                    top: a.Rx().int(),
                    left: a.Rx().int(),
                    width: a.Rx().int(),
                    height: a.Rx().int(),
                    shape: a.Km(["rect", "round"]).optional()
                }),
                s = a.Ry({
                    src: a.Z_(),
                    originalWidth: a.Rx().int().positive(),
                    originalHeight: a.Rx().int().positive(),
                    preferredSize: a.Km(["sm", "md", "lg"]).optional(),
                    mockup: n.optional(),
                    caption: a.Z_().optional(),
                    altText: a.Z_().max(140).optional(),
                    crop: o.optional(),
                    blurHash: a.Z_().optional(),
                    pins: a.IX(l).max(3).default([]).optional()
                })
        },
        41538: function(e, i, t) {
            t.d(i, {
                AB: function() {
                    return c
                },
                D0: function() {
                    return u
                },
                ET: function() {
                    return h
                },
                H5: function() {
                    return S
                },
                WK: function() {
                    return d
                },
                gG: function() {
                    return y
                },
                kk: function() {
                    return m
                },
                m_: function() {
                    return b
                },
                nK: function() {
                    return s
                },
                pJ: function() {
                    return g
                },
                sX: function() {
                    return p
                },
                uK: function() {
                    return A
                }
            });
            var a = t(60185),
                l = t(78563),
                r = t(34002),
                n = t(72467),
                o = t(86136);

            function s(e) {
                return {
                    src: "width" in e ? { ...e,
                        width: e.width / 2,
                        height: e.height / 2
                    } : e
                }
            }

            function g(e) {
                return !!e && ("string" == typeof e ? e : e.src).startsWith("/")
            }

            function h(e, i) {
                return e.crop && (0, o.RA)(e.crop.width / e.crop.height, i && "original" !== i ? a.LO[i] : -1, .1) ? { ...e.crop,
                    shape: "rect"
                } : {
                    src: e.src,
                    top: 0,
                    left: 0,
                    width: e.originalWidth,
                    height: Math.floor(e.originalWidth / (i && "original" !== i ? a.LO[i] : e.originalWidth / e.originalHeight))
                }
            }

            function p(e) {
                return e && "original" !== e ? {
                    aspectRatio: a.LO[e]
                } : void 0
            }

            function d(e, i) {
                if ("round" === i) return "circle";
                let t = a.ml.find(i => (0, o.RA)(a.DM[i].aspectRatio, e, .01));
                return null != t ? t : "noCrop"
            }
            async function c(e) {
                try {
                    let i = () => ({
                        src: e.src,
                        originalWidth: e.width,
                        originalHeight: e.height
                    });
                    if (e.decode) return await e.decode(), i();
                    return await new Promise((t, a) => {
                        e.addEventListener("load", () => t(i())), e.addEventListener("error", e => a(e.error))
                    })
                } catch (e) {
                    throw Error("This file is possibly broken, try another one")
                }
            }

            function A(e) {
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "rect",
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    {
                        width: a,
                        height: l
                    } = e,
                    r = a / l;
                if (r === t) return {
                    top: 0,
                    left: 0,
                    height: l,
                    width: a,
                    shape: i
                };
                if (r < t) {
                    let e = Math.floor(a / t);
                    return {
                        top: Math.floor((l - e) / 2),
                        left: 0,
                        height: e,
                        width: a,
                        shape: i
                    }
                }
                let n = Math.floor(l * t);
                return {
                    top: 0,
                    left: Math.floor((a - n) / 2),
                    height: l,
                    width: n,
                    shape: i
                }
            }

            function S(e) {
                var i;
                let t = document.querySelector(".reactEasyCrop_Image"),
                    a = null === (i = document.querySelector(".reactEasyCrop_CropArea")) || void 0 === i ? void 0 : i.getBoundingClientRect();
                if (!t || !a || !e || e.originalWidth / e.originalHeight >= 1) return 1;
                let l = {
                        aspect: t.offsetWidth / t.offsetHeight,
                        min: Math.min(t.offsetWidth, t.offsetHeight),
                        max: Math.max(t.offsetWidth, t.offsetHeight)
                    },
                    r = {
                        aspect: a.width / a.height,
                        min: Math.min(a.width, a.height),
                        max: Math.max(a.width, a.height)
                    };
                return r.aspect < 1 ? r.aspect > l.aspect ? r.min / l.min : r.max / l.max : r.max / l.min
            }

            function m(e, i, t) {
                var a, l, r, n;
                let {
                    originalWidth: o,
                    originalHeight: s,
                    crop: g
                } = t, h = null !== (a = null == g ? void 0 : g.width) && void 0 !== a ? a : o, p = null !== (l = null == g ? void 0 : g.height) && void 0 !== l ? l : s, d = h / i.width, c = p / i.height;
                return {
                    x: e.x * d + (null !== (r = null == g ? void 0 : g.left) && void 0 !== r ? r : 0),
                    y: e.y * c + (null !== (n = null == g ? void 0 : g.top) && void 0 !== n ? n : 0)
                }
            }

            function y(e) {
                return e ? l.O[e] : null
            }

            function b(e) {
                return n.EC.includes(e)
            }
            async function u(e, i) {
                let t = "image/png";
                await (0, r.SE)(e, {
                    type: t,
                    width: 32,
                    height: 32
                }), await (0, r.SE)(e, {
                    type: t,
                    width: 32,
                    height: 32
                });
                let a = await (0, r.SE)(e, {
                    type: t,
                    width: 32,
                    height: 32
                });
                if (!a) throw Error("Couldn't create Blob.");
                return new File([a], i, {
                    type: t
                })
            }
        },
        86136: function(e, i, t) {
            t.d(i, {
                RA: function() {
                    return n
                },
                h2: function() {
                    return s
                },
                nY: function() {
                    return o
                },
                td: function() {
                    return r
                },
                xT: function() {
                    return l
                }
            });
            var a = t(60185);

            function l(e, i) {
                return Math.floor(Math.random() * (i - e) + e)
            }

            function r(e) {
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                if (0 === e) return "0 Bytes";
                let t = Math.floor(Math.log(e) / Math.log(1024));
                return "".concat(Number.parseFloat((e / 1024 ** t).toFixed(i < 0 ? 0 : i)), " ").concat(["Bytes", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][t])
            }

            function n(e, i, t) {
                return Math.abs(e - i) < t
            }

            function o(e, i) {
                let t = "month" === e ? a.od.MONTHLY : a.od.YEARLY;
                if (i) {
                    if (i.amount_off) return t - i.amount_off / 100;
                    if (i.percent_off) return t - i.percent_off / 100 * t
                }
                return t
            }

            function s(e) {
                let i = Number.parseInt(e.toString(), 10);
                if (Number.isNaN(i)) throw TypeError("Expected a parsable number, got ".concat(e, "."));
                let t = Math.floor(i / 60),
                    a = i % 60;
                return "".concat(t < 10 ? 0 : "").concat(t, ":").concat(a < 10 ? 0 : "").concat(a)
            }
        }
    }
]);