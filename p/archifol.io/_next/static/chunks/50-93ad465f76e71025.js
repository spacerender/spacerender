try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0254de1b-ebec-4712-b09c-ce3dd2bf3bee", e._sentryDebugIdIdentifier = "sentry-dbid-0254de1b-ebec-4712-b09c-ce3dd2bf3bee")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [50], {
        17212: function(e, t, r) {
            "use strict";
            let n;
            r.d(t, {
                g: function() {
                    return i0
                }
            });
            var i, s, o, a, u, l, c, d, f, h, p = r(85660);
            let g = {
                    step: "build",
                    tags: ["SET_EXPECT_HEADER", "EXPECT_HEADER"],
                    name: "addExpectContinueMiddleware",
                    override: !0
                },
                m = e => ({
                    applyToStack: t => {
                        t.add(t => async r => {
                            let {
                                request: n
                            } = r;
                            return p.aW.isInstance(n) && n.body && "node" === e.runtime && e.requestHandler ? .constructor ? .name !== "FetchHttpHandler" && (n.headers = { ...n.headers,
                                Expect: "100-continue"
                            }), t({ ...r,
                                request: n
                            })
                        }, g)
                    }
                }),
                y = "WHEN_SUPPORTED";
            (i = c || (c = {})).MD5 = "MD5", i.CRC32 = "CRC32", i.CRC32C = "CRC32C", i.SHA1 = "SHA1", i.SHA256 = "SHA256", (s = d || (d = {})).HEADER = "header", s.TRAILER = "trailer", c.MD5, c.CRC32, (o = f || (f = {})).ENV = "env", o.CONFIG = "shared config entry", c.CRC32, c.CRC32C, c.SHA1, c.SHA256, c.CRC32, c.CRC32C, c.SHA1, c.SHA256;
            var b = r(22970),
                w = r(48834).lW,
                v = void 0 !== w && w.from ? function(e) {
                    return w.from(e, "utf8")
                } : e => new TextEncoder().encode(e);

            function S(e) {
                return e instanceof Uint8Array ? e : "string" == typeof e ? v(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e)
            }

            function A(e) {
                return "string" == typeof e ? 0 === e.length : 0 === e.byteLength
            }

            function E(e) {
                return new Uint8Array([(4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e])
            }

            function x(e) {
                if (!Uint32Array.from) {
                    for (var t = new Uint32Array(e.length), r = 0; r < e.length;) t[r] = e[r], r += 1;
                    return t
                }
                return Uint32Array.from(e)
            }! function() {
                function e() {
                    this.crc32 = new P
                }
                e.prototype.update = function(e) {
                    A(e) || this.crc32.update(S(e))
                }, e.prototype.digest = function() {
                    return (0, b.mG)(this, void 0, void 0, function() {
                        return (0, b.Jh)(this, function(e) {
                            return [2, E(this.crc32.digest())]
                        })
                    })
                }, e.prototype.reset = function() {
                    this.crc32 = new P
                }
            }();
            var P = function() {
                    function e() {
                        this.checksum = 4294967295
                    }
                    return e.prototype.update = function(e) {
                        var t, r;
                        try {
                            for (var n = (0, b.XA)(e), i = n.next(); !i.done; i = n.next()) {
                                var s = i.value;
                                this.checksum = this.checksum >>> 8 ^ R[(this.checksum ^ s) & 255]
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                i && !i.done && (r = n.return) && r.call(n)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return this
                    }, e.prototype.digest = function() {
                        return (4294967295 ^ this.checksum) >>> 0
                    }, e
                }(),
                R = x([0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117]);
            ! function() {
                function e() {
                    this.crc32c = new k
                }
                e.prototype.update = function(e) {
                    A(e) || this.crc32c.update(S(e))
                }, e.prototype.digest = function() {
                    return (0, b.mG)(this, void 0, void 0, function() {
                        return (0, b.Jh)(this, function(e) {
                            return [2, E(this.crc32c.digest())]
                        })
                    })
                }, e.prototype.reset = function() {
                    this.crc32c = new k
                }
            }();
            var k = function() {
                    function e() {
                        this.checksum = 4294967295
                    }
                    return e.prototype.update = function(e) {
                        var t, r;
                        try {
                            for (var n = (0, b.XA)(e), i = n.next(); !i.done; i = n.next()) {
                                var s = i.value;
                                this.checksum = this.checksum >>> 8 ^ T[(this.checksum ^ s) & 255]
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                i && !i.done && (r = n.return) && r.call(n)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return this
                    }, e.prototype.digest = function() {
                        return (4294967295 ^ this.checksum) >>> 0
                    }, e
                }(),
                T = x([0, 4067132163, 3778769143, 324072436, 3348797215, 904991772, 648144872, 3570033899, 2329499855, 2024987596, 1809983544, 2575936315, 1296289744, 3207089363, 2893594407, 1578318884, 274646895, 3795141740, 4049975192, 51262619, 3619967088, 632279923, 922689671, 3298075524, 2592579488, 1760304291, 2075979607, 2312596564, 1562183871, 2943781820, 3156637768, 1313733451, 549293790, 3537243613, 3246849577, 871202090, 3878099393, 357341890, 102525238, 4101499445, 2858735121, 1477399826, 1264559846, 3107202533, 1845379342, 2677391885, 2361733625, 2125378298, 820201905, 3263744690, 3520608582, 598981189, 4151959214, 85089709, 373468761, 3827903834, 3124367742, 1213305469, 1526817161, 2842354314, 2107672161, 2412447074, 2627466902, 1861252501, 1098587580, 3004210879, 2688576843, 1378610760, 2262928035, 1955203488, 1742404180, 2511436119, 3416409459, 969524848, 714683780, 3639785095, 205050476, 4266873199, 3976438427, 526918040, 1361435347, 2739821008, 2954799652, 1114974503, 2529119692, 1691668175, 2005155131, 2247081528, 3690758684, 697762079, 986182379, 3366744552, 476452099, 3993867776, 4250756596, 255256311, 1640403810, 2477592673, 2164122517, 1922457750, 2791048317, 1412925310, 1197962378, 3037525897, 3944729517, 427051182, 170179418, 4165941337, 746937522, 3740196785, 3451792453, 1070968646, 1905808397, 2213795598, 2426610938, 1657317369, 3053634322, 1147748369, 1463399397, 2773627110, 4215344322, 153784257, 444234805, 3893493558, 1021025245, 3467647198, 3722505002, 797665321, 2197175160, 1889384571, 1674398607, 2443626636, 1164749927, 3070701412, 2757221520, 1446797203, 137323447, 4198817972, 3910406976, 461344835, 3484808360, 1037989803, 781091935, 3705997148, 2460548119, 1623424788, 1939049696, 2180517859, 1429367560, 2807687179, 3020495871, 1180866812, 410100952, 3927582683, 4182430767, 186734380, 3756733383, 763408580, 1053836080, 3434856499, 2722870694, 1344288421, 1131464017, 2971354706, 1708204729, 2545590714, 2229949006, 1988219213, 680717673, 3673779818, 3383336350, 1002577565, 4010310262, 493091189, 238226049, 4233660802, 2987750089, 1082061258, 1395524158, 2705686845, 1972364758, 2279892693, 2494862625, 1725896226, 952904198, 3399985413, 3656866545, 731699698, 4283874585, 222117402, 510512622, 3959836397, 3280807620, 837199303, 582374963, 3504198960, 68661723, 4135334616, 3844915500, 390545967, 1230274059, 3141532936, 2825850620, 1510247935, 2395924756, 2091215383, 1878366691, 2644384480, 3553878443, 565732008, 854102364, 3229815391, 340358836, 3861050807, 4117890627, 119113024, 1493875044, 2875275879, 3090270611, 1247431312, 2660249211, 1828433272, 2141937292, 2378227087, 3811616794, 291187481, 34330861, 4032846830, 615137029, 3603020806, 3314634738, 939183345, 1776939221, 2609017814, 2295496738, 2058945313, 2926798794, 1545135305, 1330124605, 3173225534, 4084100981, 17165430, 307568514, 3762199681, 888469610, 3332340585, 3587147933, 665062302, 2042050490, 2346497209, 2559330125, 1793573966, 3190661285, 1279665062, 1595330642, 2910671697]),
                N = r(19933);
            let M = e => ({ ...e,
                    requestChecksumCalculation: (0, N.$)(e.requestChecksumCalculation ? ? y),
                    responseChecksumValidation: (0, N.$)(e.responseChecksumValidation ? ? y)
                }),
                C = e => t => async r => {
                    if (!p.aW.isInstance(r.request)) return t(r);
                    let {
                        request: n
                    } = r, {
                        handlerProtocol: i = ""
                    } = e.requestHandler.metadata || {};
                    if (i.indexOf("h2") >= 0 && !n.headers[":authority"]) delete n.headers.host, n.headers[":authority"] = n.hostname + (n.port ? ":" + n.port : "");
                    else if (!n.headers.host) {
                        let e = n.hostname;
                        null != n.port && (e += `:${n.port}`), n.headers.host = e
                    }
                    return t(r)
                },
                O = {
                    name: "hostHeaderMiddleware",
                    step: "build",
                    priority: "low",
                    tags: ["HOST"],
                    override: !0
                },
                I = e => ({
                    applyToStack: t => {
                        t.add(C(e), O)
                    }
                }),
                U = () => (e, t) => async r => {
                    try {
                        let n = await e(r),
                            {
                                clientName: i,
                                commandName: s,
                                logger: o,
                                dynamoDbDocumentClientOptions: a = {}
                            } = t,
                            {
                                overrideInputFilterSensitiveLog: u,
                                overrideOutputFilterSensitiveLog: l
                            } = a,
                            c = u ? ? t.inputFilterSensitiveLog,
                            d = l ? ? t.outputFilterSensitiveLog,
                            {
                                $metadata: f,
                                ...h
                            } = n.output;
                        return o ? .info ? .({
                            clientName: i,
                            commandName: s,
                            input: c(r.input),
                            output: d(h),
                            metadata: f
                        }), n
                    } catch (u) {
                        let {
                            clientName: e,
                            commandName: n,
                            logger: i,
                            dynamoDbDocumentClientOptions: s = {}
                        } = t, {
                            overrideInputFilterSensitiveLog: o
                        } = s, a = o ? ? t.inputFilterSensitiveLog;
                        throw i ? .error ? .({
                            clientName: e,
                            commandName: n,
                            input: a(r.input),
                            error: u,
                            metadata: u.$metadata
                        }), u
                    }
                },
                $ = {
                    name: "loggerMiddleware",
                    tags: ["LOGGER"],
                    step: "initialize",
                    override: !0
                },
                _ = e => ({
                    applyToStack: e => {
                        e.add(U(), $)
                    }
                });
            var F = r(34406);
            let L = "X-Amzn-Trace-Id",
                B = e => t => async r => {
                    let n;
                    let {
                        request: i
                    } = r;
                    if (!p.aW.isInstance(i) || "node" !== e.runtime || i.headers.hasOwnProperty(L)) return t(r);
                    let s = F.env.AWS_LAMBDA_FUNCTION_NAME,
                        o = F.env._X_AMZN_TRACE_ID;
                    return "string" == typeof s && s.length > 0 && "string" == typeof(n = o) && n.length > 0 && (i.headers[L] = o), t({ ...r,
                        request: i
                    })
                },
                D = {
                    step: "build",
                    tags: ["RECURSION_DETECTION"],
                    name: "recursionDetectionMiddleware",
                    override: !0,
                    priority: "low"
                },
                j = e => ({
                    applyToStack: t => {
                        t.add(B(e), D)
                    }
                });
            var H = r(13426);
            class q {
                constructor({
                    size: e,
                    params: t
                }) {
                    this.data = new Map, this.parameters = [], this.capacity = e ? ? 50, t && (this.parameters = t)
                }
                get(e, t) {
                    let r = this.hash(e);
                    if (!1 === r) return t();
                    if (!this.data.has(r)) {
                        if (this.data.size > this.capacity + 10) {
                            let e = this.data.keys(),
                                t = 0;
                            for (;;) {
                                let {
                                    value: r,
                                    done: n
                                } = e.next();
                                if (this.data.delete(r), n || ++t > 10) break
                            }
                        }
                        this.data.set(r, t())
                    }
                    return this.data.get(r)
                }
                size() {
                    return this.data.size
                }
                hash(e) {
                    let t = "",
                        {
                            parameters: r
                        } = this;
                    if (0 === r.length) return !1;
                    for (let n of r) {
                        let r = String(e[n] ? ? "");
                        if (r.includes("|;")) return !1;
                        t += r + "|;"
                    }
                    return t
                }
            }
            let z = RegExp("^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$"),
                V = e => z.test(e) || e.startsWith("[") && e.endsWith("]"),
                W = RegExp("^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$"),
                G = (e, t = !1) => {
                    if (!t) return W.test(e);
                    for (let t of e.split("."))
                        if (!G(t)) return !1;
                    return !0
                },
                K = {},
                Z = "endpoints";

            function X(e) {
                return "object" != typeof e || null == e ? e : "ref" in e ? `$${X(e.ref)}` : "fn" in e ? `${e.fn}(${(e.argv||[]).map(X).join(", ")})` : JSON.stringify(e, null, 2)
            }
            class Y extends Error {
                constructor(e) {
                    super(e), this.name = "EndpointError"
                }
            }
            let J = e => {
                    let t = e.split("."),
                        r = [];
                    for (let n of t) {
                        let t = n.indexOf("[");
                        if (-1 !== t) {
                            if (n.indexOf("]") !== n.length - 1) throw new Y(`Path: '${e}' does not end with ']'`);
                            let i = n.slice(t + 1, -1);
                            if (Number.isNaN(parseInt(i))) throw new Y(`Invalid array index: '${i}' in path: '${e}'`);
                            0 !== t && r.push(n.slice(0, t)), r.push(i)
                        } else r.push(n)
                    }
                    return r
                },
                Q = (e, t) => J(t).reduce((r, n) => {
                    if ("object" != typeof r) throw new Y(`Index '${n}' in '${t}' not found in '${JSON.stringify(e)}'`);
                    return Array.isArray(r) ? r[parseInt(n)] : r[n]
                }, e);
            var ee = r(47826);
            let et = {
                    [ee.cj.HTTP]: 80,
                    [ee.cj.HTTPS]: 443
                },
                er = {
                    booleanEquals: (e, t) => e === t,
                    getAttr: Q,
                    isSet: e => null != e,
                    isValidHostLabel: G,
                    not: e => !e,
                    parseURL: e => {
                        let t = (() => {
                            try {
                                if (e instanceof URL) return e;
                                if ("object" == typeof e && "hostname" in e) {
                                    let {
                                        hostname: t,
                                        port: r,
                                        protocol: n = "",
                                        path: i = "",
                                        query: s = {}
                                    } = e, o = new URL(`${n}//${t}${r?`:${r}`:""}${i}`);
                                    return o.search = Object.entries(s).map(([e, t]) => `${e}=${t}`).join("&"), o
                                }
                                return new URL(e)
                            } catch (e) {
                                return null
                            }
                        })();
                        if (!t) return console.error(`Unable to parse ${JSON.stringify(e)} as a whatwg URL.`), null;
                        let r = t.href,
                            {
                                host: n,
                                hostname: i,
                                pathname: s,
                                protocol: o,
                                search: a
                            } = t;
                        if (a) return null;
                        let u = o.slice(0, -1);
                        if (!Object.values(ee.cj).includes(u)) return null;
                        let l = V(i),
                            c = r.includes(`${n}:${et[u]}`) || "string" == typeof e && e.includes(`${n}:${et[u]}`),
                            d = `${n}${c?`:${et[u]}`:""}`;
                        return {
                            scheme: u,
                            authority: d,
                            path: s,
                            normalizedPath: s.endsWith("/") ? s : `${s}/`,
                            isIp: l
                        }
                    },
                    stringEquals: (e, t) => e === t,
                    substring: (e, t, r, n) => t >= r || e.length < r ? null : n ? e.substring(e.length - r, e.length - t) : e.substring(t, r),
                    uriEncode: e => encodeURIComponent(e).replace(/[!*'()]/g, e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`)
                },
                en = (e, t) => {
                    let r = [],
                        n = { ...t.endpointParams,
                            ...t.referenceRecord
                        },
                        i = 0;
                    for (; i < e.length;) {
                        let t = e.indexOf("{", i);
                        if (-1 === t) {
                            r.push(e.slice(i));
                            break
                        }
                        r.push(e.slice(i, t));
                        let s = e.indexOf("}", t);
                        if (-1 === s) {
                            r.push(e.slice(t));
                            break
                        }
                        "{" === e[t + 1] && "}" === e[s + 1] && (r.push(e.slice(t + 1, s)), i = s + 2);
                        let o = e.substring(t + 1, s);
                        if (o.includes("#")) {
                            let [e, t] = o.split("#");
                            r.push(Q(n[e], t))
                        } else r.push(n[o]);
                        i = s + 1
                    }
                    return r.join("")
                },
                ei = ({
                    ref: e
                }, t) => ({ ...t.endpointParams,
                    ...t.referenceRecord
                })[e],
                es = (e, t, r) => {
                    if ("string" == typeof e) return en(e, r);
                    if (e.fn) return eo(e, r);
                    if (e.ref) return ei(e, r);
                    throw new Y(`'${t}': ${String(e)} is not a string, function or reference.`)
                },
                eo = ({
                    fn: e,
                    argv: t
                }, r) => {
                    let n = t.map(e => ["boolean", "number"].includes(typeof e) ? e : es(e, "arg", r)),
                        i = e.split(".");
                    return i[0] in K && null != i[1] ? K[i[0]][i[1]](...n) : er[e](...n)
                },
                ea = ({
                    assign: e,
                    ...t
                }, r) => {
                    if (e && e in r.referenceRecord) throw new Y(`'${e}' is already defined in Reference Record.`);
                    let n = eo(t, r);
                    return r.logger ? .debug ? .(`${Z} evaluateCondition: ${X(t)} = ${X(n)}`), {
                        result: "" === n || !!n,
                        ...null != e && {
                            toAssign: {
                                name: e,
                                value: n
                            }
                        }
                    }
                },
                eu = (e = [], t) => {
                    let r = {};
                    for (let n of e) {
                        let {
                            result: e,
                            toAssign: i
                        } = ea(n, { ...t,
                            referenceRecord: { ...t.referenceRecord,
                                ...r
                            }
                        });
                        if (!e) return {
                            result: e
                        };
                        i && (r[i.name] = i.value, t.logger ? .debug ? .(`${Z} assign: ${i.name} := ${X(i.value)}`))
                    }
                    return {
                        result: !0,
                        referenceRecord: r
                    }
                },
                el = (e, t) => Object.entries(e).reduce((e, [r, n]) => ({ ...e,
                    [r]: n.map(e => {
                        let n = es(e, "Header value entry", t);
                        if ("string" != typeof n) throw new Y(`Header '${r}' value '${n}' is not a string`);
                        return n
                    })
                }), {}),
                ec = (e, t) => {
                    if (Array.isArray(e)) return e.map(e => ec(e, t));
                    switch (typeof e) {
                        case "string":
                            return en(e, t);
                        case "object":
                            if (null === e) throw new Y(`Unexpected endpoint property: ${e}`);
                            return ed(e, t);
                        case "boolean":
                            return e;
                        default:
                            throw new Y(`Unexpected endpoint property type: ${typeof e}`)
                    }
                },
                ed = (e, t) => Object.entries(e).reduce((e, [r, n]) => ({ ...e,
                    [r]: ec(n, t)
                }), {}),
                ef = (e, t) => {
                    let r = es(e, "Endpoint URL", t);
                    if ("string" == typeof r) try {
                        return new URL(r)
                    } catch (e) {
                        throw console.error(`Failed to construct URL with ${r}`, e), e
                    }
                    throw new Y(`Endpoint URL must be a string, got ${typeof r}`)
                },
                eh = (e, t) => {
                    let {
                        conditions: r,
                        endpoint: n
                    } = e, {
                        result: i,
                        referenceRecord: s
                    } = eu(r, t);
                    if (!i) return;
                    let o = { ...t,
                            referenceRecord: { ...t.referenceRecord,
                                ...s
                            }
                        },
                        {
                            url: a,
                            properties: u,
                            headers: l
                        } = n;
                    return t.logger ? .debug ? .(`${Z} Resolving endpoint from template: ${X(n)}`), { ...void 0 != l && {
                            headers: el(l, o)
                        },
                        ...void 0 != u && {
                            properties: ed(u, o)
                        },
                        url: ef(a, o)
                    }
                },
                ep = (e, t) => {
                    let {
                        conditions: r,
                        error: n
                    } = e, {
                        result: i,
                        referenceRecord: s
                    } = eu(r, t);
                    if (i) throw new Y(es(n, "Error", { ...t,
                        referenceRecord: { ...t.referenceRecord,
                            ...s
                        }
                    }))
                },
                eg = (e, t) => {
                    let {
                        conditions: r,
                        rules: n
                    } = e, {
                        result: i,
                        referenceRecord: s
                    } = eu(r, t);
                    if (i) return em(n, { ...t,
                        referenceRecord: { ...t.referenceRecord,
                            ...s
                        }
                    })
                },
                em = (e, t) => {
                    for (let r of e)
                        if ("endpoint" === r.type) {
                            let e = eh(r, t);
                            if (e) return e
                        } else if ("error" === r.type) ep(r, t);
                    else if ("tree" === r.type) {
                        let e = eg(r, t);
                        if (e) return e
                    } else throw new Y(`Unknown endpoint rule: ${r}`);
                    throw new Y("Rules evaluation failed")
                },
                ey = (e, t) => {
                    let {
                        endpointParams: r,
                        logger: n
                    } = t, {
                        parameters: i,
                        rules: s
                    } = e;
                    t.logger ? .debug ? .(`${Z} Initial EndpointParams: ${X(r)}`);
                    let o = Object.entries(i).filter(([, e]) => null != e.default).map(([e, t]) => [e, t.default]);
                    if (o.length > 0)
                        for (let [e, t] of o) r[e] = r[e] ? ? t;
                    for (let e of Object.entries(i).filter(([, e]) => e.required).map(([e]) => e))
                        if (null == r[e]) throw new Y(`Missing required parameter: '${e}'`);
                    let a = em(s, {
                        endpointParams: r,
                        logger: n,
                        referenceRecord: {}
                    });
                    return t.logger ? .debug ? .(`${Z} Resolved endpoint: ${X(a)}`), a
                },
                eb = (e, t = !1) => {
                    if (t) {
                        for (let t of e.split("."))
                            if (!eb(t)) return !1;
                        return !0
                    }
                    return !(!G(e) || e.length < 3 || e.length > 63 || e !== e.toLowerCase() || V(e))
                };
            var ew = JSON.parse('{"partitions":[{"id":"aws","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","implicitGlobalRegion":"us-east-1","name":"aws","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^(us|eu|ap|sa|ca|me|af|il|mx)\\\\-\\\\w+\\\\-\\\\d+$","regions":{"af-south-1":{"description":"Africa (Cape Town)"},"ap-east-1":{"description":"Asia Pacific (Hong Kong)"},"ap-northeast-1":{"description":"Asia Pacific (Tokyo)"},"ap-northeast-2":{"description":"Asia Pacific (Seoul)"},"ap-northeast-3":{"description":"Asia Pacific (Osaka)"},"ap-south-1":{"description":"Asia Pacific (Mumbai)"},"ap-south-2":{"description":"Asia Pacific (Hyderabad)"},"ap-southeast-1":{"description":"Asia Pacific (Singapore)"},"ap-southeast-2":{"description":"Asia Pacific (Sydney)"},"ap-southeast-3":{"description":"Asia Pacific (Jakarta)"},"ap-southeast-4":{"description":"Asia Pacific (Melbourne)"},"ap-southeast-5":{"description":"Asia Pacific (Malaysia)"},"aws-global":{"description":"AWS Standard global region"},"ca-central-1":{"description":"Canada (Central)"},"ca-west-1":{"description":"Canada West (Calgary)"},"eu-central-1":{"description":"Europe (Frankfurt)"},"eu-central-2":{"description":"Europe (Zurich)"},"eu-north-1":{"description":"Europe (Stockholm)"},"eu-south-1":{"description":"Europe (Milan)"},"eu-south-2":{"description":"Europe (Spain)"},"eu-west-1":{"description":"Europe (Ireland)"},"eu-west-2":{"description":"Europe (London)"},"eu-west-3":{"description":"Europe (Paris)"},"il-central-1":{"description":"Israel (Tel Aviv)"},"me-central-1":{"description":"Middle East (UAE)"},"me-south-1":{"description":"Middle East (Bahrain)"},"sa-east-1":{"description":"South America (Sao Paulo)"},"us-east-1":{"description":"US East (N. Virginia)"},"us-east-2":{"description":"US East (Ohio)"},"us-west-1":{"description":"US West (N. California)"},"us-west-2":{"description":"US West (Oregon)"}}},{"id":"aws-cn","outputs":{"dnsSuffix":"amazonaws.com.cn","dualStackDnsSuffix":"api.amazonwebservices.com.cn","implicitGlobalRegion":"cn-northwest-1","name":"aws-cn","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^cn\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-cn-global":{"description":"AWS China global region"},"cn-north-1":{"description":"China (Beijing)"},"cn-northwest-1":{"description":"China (Ningxia)"}}},{"id":"aws-us-gov","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","implicitGlobalRegion":"us-gov-west-1","name":"aws-us-gov","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^us\\\\-gov\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-us-gov-global":{"description":"AWS GovCloud (US) global region"},"us-gov-east-1":{"description":"AWS GovCloud (US-East)"},"us-gov-west-1":{"description":"AWS GovCloud (US-West)"}}},{"id":"aws-iso","outputs":{"dnsSuffix":"c2s.ic.gov","dualStackDnsSuffix":"c2s.ic.gov","implicitGlobalRegion":"us-iso-east-1","name":"aws-iso","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-iso\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-global":{"description":"AWS ISO (US) global region"},"us-iso-east-1":{"description":"US ISO East"},"us-iso-west-1":{"description":"US ISO WEST"}}},{"id":"aws-iso-b","outputs":{"dnsSuffix":"sc2s.sgov.gov","dualStackDnsSuffix":"sc2s.sgov.gov","implicitGlobalRegion":"us-isob-east-1","name":"aws-iso-b","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-isob\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-b-global":{"description":"AWS ISOB (US) global region"},"us-isob-east-1":{"description":"US ISOB East (Ohio)"}}},{"id":"aws-iso-e","outputs":{"dnsSuffix":"cloud.adc-e.uk","dualStackDnsSuffix":"cloud.adc-e.uk","implicitGlobalRegion":"eu-isoe-west-1","name":"aws-iso-e","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^eu\\\\-isoe\\\\-\\\\w+\\\\-\\\\d+$","regions":{"eu-isoe-west-1":{"description":"EU ISOE West"}}},{"id":"aws-iso-f","outputs":{"dnsSuffix":"csp.hci.ic.gov","dualStackDnsSuffix":"csp.hci.ic.gov","implicitGlobalRegion":"us-isof-south-1","name":"aws-iso-f","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-isof\\\\-\\\\w+\\\\-\\\\d+$","regions":{}}],"version":"1.1"}');
            let ev = () => "",
                eS = {
                    isVirtualHostableS3Bucket: eb,
                    parseArn: e => {
                        let t = e.split(":");
                        if (t.length < 6) return null;
                        let [r, n, i, s, o, ...a] = t;
                        return "arn" !== r || "" === n || "" === i || "" === a.join(":") ? null : {
                            partition: n,
                            service: i,
                            region: s,
                            accountId: o,
                            resourceId: a.map(e => e.split("/")).flat()
                        }
                    },
                    partition: e => {
                        let {
                            partitions: t
                        } = ew;
                        for (let r of t) {
                            let {
                                regions: t,
                                outputs: n
                            } = r;
                            for (let [r, i] of Object.entries(t))
                                if (r === e) return { ...n,
                                    ...i
                                }
                        }
                        for (let r of t) {
                            let {
                                regionRegex: t,
                                outputs: n
                            } = r;
                            if (new RegExp(t).test(e)) return { ...n
                            }
                        }
                        let r = t.find(e => "aws" === e.id);
                        if (!r) throw Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
                        return { ...r.outputs
                        }
                    }
                };
            K.aws = eS;
            let eA = "user-agent",
                eE = "x-amz-user-agent",
                ex = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g,
                eP = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g,
                eR = e => (t, r) => async n => {
                    let {
                        request: i
                    } = n;
                    if (!p.aW.isInstance(i)) return t(n);
                    let {
                        headers: s
                    } = i, o = r ? .userAgent ? .map(ek) || [], a = (await e.defaultUserAgentProvider()).map(ek), u = e ? .customUserAgent ? .map(ek) || [], l = ev(), c = (l ? [l] : []).concat([...a, ...o, ...u]).join(" "), d = [...a.filter(e => e.startsWith("aws-sdk-")), ...u].join(" ");
                    return "browser" !== e.runtime ? (d && (s[eE] = s[eE] ? `${s[eA]} ${d}` : d), s[eA] = c) : s[eE] = c, t({ ...n,
                        request: i
                    })
                },
                ek = e => {
                    let t = e[0].split("/").map(e => e.replace(ex, "-")).join("/"),
                        r = e[1] ? .replace(eP, "-"),
                        n = t.indexOf("/"),
                        i = t.substring(0, n),
                        s = t.substring(n + 1);
                    return "api" === i && (s = s.toLowerCase()), [i, s, r].filter(e => e && e.length > 0).reduce((e, t, r) => {
                        switch (r) {
                            case 0:
                                return t;
                            case 1:
                                return `${e}/${t}`;
                            default:
                                return `${e}#${t}`
                        }
                    }, "")
                },
                eT = {
                    name: "getUserAgentMiddleware",
                    step: "build",
                    priority: "low",
                    tags: ["SET_USER_AGENT", "USER_AGENT"],
                    override: !0
                },
                eN = e => ({
                    applyToStack: t => {
                        t.add(eR(e), eT)
                    }
                });
            r(28916);
            let eM = e => "string" == typeof e && (e.startsWith("fips-") || e.endsWith("-fips")),
                eC = e => eM(e) ? ["fips-aws-global", "aws-fips"].includes(e) ? "us-east-1" : e.replace(/fips-(dkr-|prod-)?|-fips/, "") : e,
                eO = e => {
                    let {
                        region: t,
                        useFipsEndpoint: r
                    } = e;
                    if (!t) throw Error("Region is missing");
                    return { ...e,
                        region: async () => "string" == typeof t ? eC(t) : eC(await t()),
                        useFipsEndpoint: async () => !!eM("string" == typeof t ? t : await t()) || ("function" != typeof r ? Promise.resolve(!!r) : r())
                    }
                };
            var eI = r(60230);
            let eU = e => ({ ...e,
                    eventStreamMarshaller: e.eventStreamSerdeProvider(e)
                }),
                e$ = "content-length",
                e_ = {
                    step: "build",
                    tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
                    name: "contentLengthMiddleware",
                    override: !0
                },
                eF = e => ({
                    applyToStack: t => {
                        var r;
                        t.add((r = e.bodyLengthChecker, e => async t => {
                            let n = t.request;
                            if (p.aW.isInstance(n)) {
                                let {
                                    body: e,
                                    headers: t
                                } = n;
                                if (e && -1 === Object.keys(t).map(e => e.toLowerCase()).indexOf(e$)) try {
                                    let t = r(e);
                                    n.headers = { ...n.headers,
                                        [e$]: String(t)
                                    }
                                } catch (e) {}
                            }
                            return e({ ...t,
                                request: n
                            })
                        }), e_)
                    }
                });
            var eL = r(25613),
                eB = r(18878),
                eD = r(54095),
                ej = r(86231);
            let eH = e => {
                    let t, r;
                    e.credentials && (t = (0, eI.CU)(e.credentials, eI.BP, eI.zV)), t || (t = e.credentialDefaultProvider ? (0, eI.$E)(e.credentialDefaultProvider(Object.assign({}, e, {
                        parentClientConfig: e
                    }))) : async () => {
                        throw Error("`credentials` is missing")
                    });
                    let {
                        signingEscapePath: n = !0,
                        systemClockOffset: i = e.systemClockOffset || 0,
                        sha256: s
                    } = e;
                    return r = e.signer ? (0, eI.$E)(e.signer) : e.regionInfoProvider ? () => (0, eI.$E)(e.region)().then(async t => [await e.regionInfoProvider(t, {
                        useFipsEndpoint: await e.useFipsEndpoint(),
                        useDualstackEndpoint: await e.useDualstackEndpoint()
                    }) || {}, t]).then(([r, i]) => {
                        let {
                            signingRegion: o,
                            signingService: a
                        } = r;
                        e.signingRegion = e.signingRegion || o || i, e.signingName = e.signingName || a || e.serviceId;
                        let u = { ...e,
                            credentials: t,
                            region: e.signingRegion,
                            service: e.signingName,
                            sha256: s,
                            uriEscapePath: n
                        };
                        return new(e.signerConstructor || ej.L1)(u)
                    }) : async r => {
                        let i = (r = Object.assign({}, {
                                name: "sigv4",
                                signingName: e.signingName || e.defaultSigningName,
                                signingRegion: await (0, eI.$E)(e.region)(),
                                properties: {}
                            }, r)).signingRegion,
                            o = r.signingName;
                        e.signingRegion = e.signingRegion || i, e.signingName = e.signingName || o || e.serviceId;
                        let a = { ...e,
                            credentials: t,
                            region: e.signingRegion,
                            service: e.signingName,
                            sha256: s,
                            uriEscapePath: n
                        };
                        return new(e.signerConstructor || ej.L1)(a)
                    }, { ...e,
                        systemClockOffset: i,
                        signingEscapePath: n,
                        credentials: t,
                        signer: r
                    }
                },
                eq = (e, t, r) => {
                    let n, i, s;
                    let o = !1,
                        a = async () => {
                            i || (i = e());
                            try {
                                n = await i, s = !0, o = !1
                            } finally {
                                i = void 0
                            }
                            return n
                        };
                    return void 0 === t ? async e => ((!s || e ? .forceRefresh) && (n = await a()), n) : async e => ((!s || e ? .forceRefresh) && (n = await a()), o || (r && !r(n) ? o = !0 : t(n) && await a()), n)
                },
                ez = e => (e.sigv4aSigningRegionSet = (0, eI.$E)(e.sigv4aSigningRegionSet), e),
                eV = {
                    CrtSignerV4: null
                };
            class eW {
                constructor(e) {
                    this.sigv4Signer = new H.$I(e), this.signerOptions = e
                }
                async sign(e, t = {}) {
                    if ("*" === t.signingRegion) {
                        if ("node" !== this.signerOptions.runtime) throw Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
                        return this.getSigv4aSigner().sign(e, t)
                    }
                    return this.sigv4Signer.sign(e, t)
                }
                async signWithCredentials(e, t, r = {}) {
                    if ("*" === r.signingRegion) {
                        if ("node" !== this.signerOptions.runtime) throw Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
                        return this.getSigv4aSigner().signWithCredentials(e, t, r)
                    }
                    return this.sigv4Signer.signWithCredentials(e, t, r)
                }
                async presign(e, t = {}) {
                    if ("*" === t.signingRegion) {
                        if ("node" !== this.signerOptions.runtime) throw Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
                        return this.getSigv4aSigner().presign(e, t)
                    }
                    return this.sigv4Signer.presign(e, t)
                }
                async presignWithCredentials(e, t, r = {}) {
                    if ("*" === r.signingRegion) throw Error("Method presignWithCredentials is not supported for [signingRegion=*].");
                    return this.sigv4Signer.presignWithCredentials(e, t, r)
                }
                getSigv4aSigner() {
                    if (!this.sigv4aSigner) {
                        let e = null;
                        try {
                            if (e = eV.CrtSignerV4, "function" != typeof e) throw Error()
                        } catch (e) {
                            throw e.message = `${e.message}
Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. 
You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. 
For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`, e
                        }
                        this.sigv4aSigner = new e({ ...this.signerOptions,
                            signingAlgorithm: 1
                        })
                    }
                    return this.sigv4aSigner
                }
            }
            let eG = "required",
                eK = "type",
                eZ = "conditions",
                eX = "argv",
                eY = "assign",
                eJ = "properties",
                eQ = "backend",
                e0 = "authSchemes",
                e1 = "disableDoubleEncoding",
                e2 = "signingName",
                e3 = "signingRegion",
                e4 = "headers",
                e6 = "signingRegionSet",
                e8 = "isSet",
                e5 = "booleanEquals",
                e9 = "error",
                e7 = "aws.partition",
                te = "stringEquals",
                tt = "getAttr",
                tr = "name",
                tn = "substring",
                ti = "bucketSuffix",
                ts = "parseURL",
                to = "{url#scheme}://{url#authority}/{uri_encoded_bucket}{url#path}",
                ta = "endpoint",
                tu = "tree",
                tl = "aws.isVirtualHostableS3Bucket",
                tc = "{url#scheme}://{Bucket}.{url#authority}{url#path}",
                td = "{url#scheme}://{url#authority}{url#path}",
                tf = "hardwareType",
                th = "regionPrefix",
                tp = "bucketAliasSuffix",
                tg = "outpostId",
                tm = "isValidHostLabel",
                ty = "sigv4a",
                tb = "s3-outposts",
                tw = "{url#scheme}://{url#authority}{url#normalizedPath}{Bucket}",
                tv = "https://{Bucket}.s3-accelerate.{partitionResult#dnsSuffix}",
                tS = "https://{Bucket}.s3.{partitionResult#dnsSuffix}",
                tA = "aws.parseArn",
                tE = "bucketArn",
                tx = "arnType",
                tP = "s3-object-lambda",
                tR = "accesspoint",
                tk = "accessPointName",
                tT = "{url#scheme}://{accessPointName}-{bucketArn#accountId}.{url#authority}{url#path}",
                tN = "mrapPartition",
                tM = "outpostType",
                tC = "arnPrefix",
                tO = "{url#scheme}://{url#authority}{url#normalizedPath}{uri_encoded_bucket}",
                tI = "https://s3.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
                tU = "https://s3.{partitionResult#dnsSuffix}",
                t$ = {
                    [eG]: !1,
                    [eK]: "String"
                },
                t_ = {
                    [eG]: !0,
                    default: !1,
                    [eK]: "Boolean"
                },
                tF = {
                    [eG]: !1,
                    [eK]: "Boolean"
                },
                tL = {
                    fn: e5,
                    [eX]: [{
                        ref: "Accelerate"
                    }, !0]
                },
                tB = {
                    fn: e5,
                    [eX]: [{
                        ref: "UseFIPS"
                    }, !0]
                },
                tD = {
                    fn: e5,
                    [eX]: [{
                        ref: "UseDualStack"
                    }, !0]
                },
                tj = {
                    fn: e8,
                    [eX]: [{
                        ref: "Endpoint"
                    }]
                },
                tH = {
                    fn: e7,
                    [eX]: [{
                        ref: "Region"
                    }],
                    [eY]: "partitionResult"
                },
                tq = {
                    fn: te,
                    [eX]: [{
                        fn: tt,
                        [eX]: [{
                            ref: "partitionResult"
                        }, tr]
                    }, "aws-cn"]
                },
                tz = {
                    fn: e8,
                    [eX]: [{
                        ref: "Bucket"
                    }]
                },
                tV = {
                    ref: "Bucket"
                },
                tW = {
                    fn: ts,
                    [eX]: [{
                        ref: "Endpoint"
                    }],
                    [eY]: "url"
                },
                tG = {
                    fn: e5,
                    [eX]: [{
                        fn: tt,
                        [eX]: [{
                            ref: "url"
                        }, "isIp"]
                    }, !0]
                },
                tK = {
                    ref: "url"
                },
                tZ = {
                    fn: "uriEncode",
                    [eX]: [tV],
                    [eY]: "uri_encoded_bucket"
                },
                tX = {
                    [eQ]: "S3Express",
                    [e0]: [{
                        [e1]: !0,
                        [tr]: "sigv4",
                        [e2]: "s3express",
                        [e3]: "{Region}"
                    }]
                },
                tY = {},
                tJ = {
                    fn: tl,
                    [eX]: [tV, !1]
                },
                tQ = {
                    [e9]: "S3Express bucket name is not a valid virtual hostable name.",
                    [eK]: e9
                },
                t0 = {
                    [eQ]: "S3Express",
                    [e0]: [{
                        [e1]: !0,
                        [tr]: "sigv4-s3express",
                        [e2]: "s3express",
                        [e3]: "{Region}"
                    }]
                },
                t1 = {
                    fn: e8,
                    [eX]: [{
                        ref: "UseS3ExpressControlEndpoint"
                    }]
                },
                t2 = {
                    fn: e5,
                    [eX]: [{
                        ref: "UseS3ExpressControlEndpoint"
                    }, !0]
                },
                t3 = {
                    fn: "not",
                    [eX]: [tj]
                },
                t4 = {
                    [e9]: "Unrecognized S3Express bucket name format.",
                    [eK]: e9
                },
                t6 = {
                    fn: "not",
                    [eX]: [tz]
                },
                t8 = {
                    ref: tf
                },
                t5 = {
                    [eZ]: [t3],
                    [e9]: "Expected a endpoint to be specified but no endpoint was found",
                    [eK]: e9
                },
                t9 = {
                    [e0]: [{
                        [e1]: !0,
                        [tr]: ty,
                        [e2]: tb,
                        [e6]: ["*"]
                    }, {
                        [e1]: !0,
                        [tr]: "sigv4",
                        [e2]: tb,
                        [e3]: "{Region}"
                    }]
                },
                t7 = {
                    fn: e5,
                    [eX]: [{
                        ref: "ForcePathStyle"
                    }, !1]
                },
                re = {
                    fn: e5,
                    [eX]: [{
                        ref: "Accelerate"
                    }, !1]
                },
                rt = {
                    fn: te,
                    [eX]: [{
                        ref: "Region"
                    }, "aws-global"]
                },
                rr = {
                    [e0]: [{
                        [e1]: !0,
                        [tr]: "sigv4",
                        [e2]: "s3",
                        [e3]: "us-east-1"
                    }]
                },
                rn = {
                    fn: "not",
                    [eX]: [rt]
                },
                ri = {
                    fn: e5,
                    [eX]: [{
                        ref: "UseGlobalEndpoint"
                    }, !0]
                },
                rs = {
                    url: "https://{Bucket}.s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}",
                    [eJ]: {
                        [e0]: [{
                            [e1]: !0,
                            [tr]: "sigv4",
                            [e2]: "s3",
                            [e3]: "{Region}"
                        }]
                    },
                    [e4]: {}
                },
                ro = {
                    [e0]: [{
                        [e1]: !0,
                        [tr]: "sigv4",
                        [e2]: "s3",
                        [e3]: "{Region}"
                    }]
                },
                ra = {
                    fn: e5,
                    [eX]: [{
                        ref: "UseGlobalEndpoint"
                    }, !1]
                },
                ru = {
                    fn: e5,
                    [eX]: [{
                        ref: "UseDualStack"
                    }, !1]
                },
                rl = {
                    url: "https://{Bucket}.s3-fips.{Region}.{partitionResult#dnsSuffix}",
                    [eJ]: ro,
                    [e4]: {}
                },
                rc = {
                    fn: e5,
                    [eX]: [{
                        ref: "UseFIPS"
                    }, !1]
                },
                rd = {
                    url: "https://{Bucket}.s3-accelerate.dualstack.{partitionResult#dnsSuffix}",
                    [eJ]: ro,
                    [e4]: {}
                },
                rf = {
                    url: "https://{Bucket}.s3.dualstack.{Region}.{partitionResult#dnsSuffix}",
                    [eJ]: ro,
                    [e4]: {}
                },
                rh = {
                    fn: e5,
                    [eX]: [{
                        fn: tt,
                        [eX]: [tK, "isIp"]
                    }, !1]
                },
                rp = {
                    url: tw,
                    [eJ]: ro,
                    [e4]: {}
                },
                rg = {
                    url: tc,
                    [eJ]: ro,
                    [e4]: {}
                },
                rm = {
                    [ta]: rg,
                    [eK]: ta
                },
                ry = {
                    url: tv,
                    [eJ]: ro,
                    [e4]: {}
                },
                rb = {
                    url: "https://{Bucket}.s3.{Region}.{partitionResult#dnsSuffix}",
                    [eJ]: ro,
                    [e4]: {}
                },
                rw = {
                    [e9]: "Invalid region: region was not a valid DNS name.",
                    [eK]: e9
                },
                rv = {
                    ref: tE
                },
                rS = {
                    ref: tx
                },
                rA = {
                    fn: tt,
                    [eX]: [rv, "service"]
                },
                rE = {
                    ref: tk
                },
                rx = {
                    [eZ]: [tD],
                    [e9]: "S3 Object Lambda does not support Dual-stack",
                    [eK]: e9
                },
                rP = {
                    [eZ]: [tL],
                    [e9]: "S3 Object Lambda does not support S3 Accelerate",
                    [eK]: e9
                },
                rR = {
                    [eZ]: [{
                        fn: e8,
                        [eX]: [{
                            ref: "DisableAccessPoints"
                        }]
                    }, {
                        fn: e5,
                        [eX]: [{
                            ref: "DisableAccessPoints"
                        }, !0]
                    }],
                    [e9]: "Access points are not supported for this operation",
                    [eK]: e9
                },
                rk = {
                    [eZ]: [{
                        fn: e8,
                        [eX]: [{
                            ref: "UseArnRegion"
                        }]
                    }, {
                        fn: e5,
                        [eX]: [{
                            ref: "UseArnRegion"
                        }, !1]
                    }, {
                        fn: "not",
                        [eX]: [{
                            fn: te,
                            [eX]: [{
                                fn: tt,
                                [eX]: [rv, "region"]
                            }, "{Region}"]
                        }]
                    }],
                    [e9]: "Invalid configuration: region from ARN `{bucketArn#region}` does not match client region `{Region}` and UseArnRegion is `false`",
                    [eK]: e9
                },
                rT = {
                    fn: tt,
                    [eX]: [{
                        ref: "bucketPartition"
                    }, tr]
                },
                rN = {
                    fn: tt,
                    [eX]: [rv, "accountId"]
                },
                rM = {
                    [e0]: [{
                        [e1]: !0,
                        [tr]: "sigv4",
                        [e2]: tP,
                        [e3]: "{bucketArn#region}"
                    }]
                },
                rC = {
                    [e9]: "Invalid ARN: The access point name may only contain a-z, A-Z, 0-9 and `-`. Found: `{accessPointName}`",
                    [eK]: e9
                },
                rO = {
                    [e9]: "Invalid ARN: The account id may only contain a-z, A-Z, 0-9 and `-`. Found: `{bucketArn#accountId}`",
                    [eK]: e9
                },
                rI = {
                    [e9]: "Invalid region in ARN: `{bucketArn#region}` (invalid DNS name)",
                    [eK]: e9
                },
                rU = {
                    [e9]: "Client was configured for partition `{partitionResult#name}` but ARN (`{Bucket}`) has `{bucketPartition#name}`",
                    [eK]: e9
                },
                r$ = {
                    [e9]: "Invalid ARN: The ARN may only contain a single resource component after `accesspoint`.",
                    [eK]: e9
                },
                r_ = {
                    [e9]: "Invalid ARN: Expected a resource of the format `accesspoint:<accesspoint name>` but no name was provided",
                    [eK]: e9
                },
                rF = {
                    [e0]: [{
                        [e1]: !0,
                        [tr]: "sigv4",
                        [e2]: "s3",
                        [e3]: "{bucketArn#region}"
                    }]
                },
                rL = {
                    [e0]: [{
                        [e1]: !0,
                        [tr]: ty,
                        [e2]: tb,
                        [e6]: ["*"]
                    }, {
                        [e1]: !0,
                        [tr]: "sigv4",
                        [e2]: tb,
                        [e3]: "{bucketArn#region}"
                    }]
                },
                rB = {
                    fn: tA,
                    [eX]: [tV]
                },
                rD = {
                    url: "https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
                    [eJ]: ro,
                    [e4]: {}
                },
                rj = {
                    url: "https://s3-fips.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
                    [eJ]: ro,
                    [e4]: {}
                },
                rH = {
                    url: "https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
                    [eJ]: ro,
                    [e4]: {}
                },
                rq = {
                    url: tO,
                    [eJ]: ro,
                    [e4]: {}
                },
                rz = {
                    url: "https://s3.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
                    [eJ]: ro,
                    [e4]: {}
                },
                rV = {
                    ref: "UseObjectLambdaEndpoint"
                },
                rW = {
                    [e0]: [{
                        [e1]: !0,
                        [tr]: "sigv4",
                        [e2]: tP,
                        [e3]: "{Region}"
                    }]
                },
                rG = {
                    url: "https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}",
                    [eJ]: ro,
                    [e4]: {}
                },
                rK = {
                    url: "https://s3-fips.{Region}.{partitionResult#dnsSuffix}",
                    [eJ]: ro,
                    [e4]: {}
                },
                rZ = {
                    url: "https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}",
                    [eJ]: ro,
                    [e4]: {}
                },
                rX = {
                    url: td,
                    [eJ]: ro,
                    [e4]: {}
                },
                rY = {
                    url: "https://s3.{Region}.{partitionResult#dnsSuffix}",
                    [eJ]: ro,
                    [e4]: {}
                },
                rJ = [{
                    ref: "Region"
                }],
                rQ = [tD],
                r0 = [tL],
                r1 = [tj, tW],
                r2 = [{
                    fn: e8,
                    [eX]: [{
                        ref: "DisableS3ExpressSessionAuth"
                    }]
                }, {
                    fn: e5,
                    [eX]: [{
                        ref: "DisableS3ExpressSessionAuth"
                    }, !0]
                }],
                r3 = [tG],
                r4 = [tZ],
                r6 = [tJ],
                r8 = [tB],
                r5 = [{
                    fn: tn,
                    [eX]: [tV, 6, 14, !0],
                    [eY]: "s3expressAvailabilityZoneId"
                }, {
                    fn: tn,
                    [eX]: [tV, 14, 16, !0],
                    [eY]: "s3expressAvailabilityZoneDelim"
                }, {
                    fn: te,
                    [eX]: [{
                        ref: "s3expressAvailabilityZoneDelim"
                    }, "--"]
                }],
                r9 = [{
                    [eZ]: [tB],
                    [ta]: {
                        url: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.{Region}.amazonaws.com",
                        [eJ]: tX,
                        [e4]: {}
                    },
                    [eK]: ta
                }, {
                    [ta]: {
                        url: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.{Region}.amazonaws.com",
                        [eJ]: tX,
                        [e4]: {}
                    },
                    [eK]: ta
                }],
                r7 = [{
                    fn: tn,
                    [eX]: [tV, 6, 15, !0],
                    [eY]: "s3expressAvailabilityZoneId"
                }, {
                    fn: tn,
                    [eX]: [tV, 15, 17, !0],
                    [eY]: "s3expressAvailabilityZoneDelim"
                }, {
                    fn: te,
                    [eX]: [{
                        ref: "s3expressAvailabilityZoneDelim"
                    }, "--"]
                }],
                ne = [{
                    [eZ]: [tB],
                    [ta]: {
                        url: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.{Region}.amazonaws.com",
                        [eJ]: t0,
                        [e4]: {}
                    },
                    [eK]: ta
                }, {
                    [ta]: {
                        url: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.{Region}.amazonaws.com",
                        [eJ]: t0,
                        [e4]: {}
                    },
                    [eK]: ta
                }],
                nt = [{
                    fn: tm,
                    [eX]: [{
                        ref: tg
                    }, !1]
                }],
                nr = [{
                    fn: te,
                    [eX]: [{
                        ref: th
                    }, "beta"]
                }],
                nn = [tH],
                ni = [{
                    fn: tm,
                    [eX]: [{
                        ref: "Region"
                    }, !1]
                }],
                ns = [{
                    fn: te,
                    [eX]: [{
                        ref: "Region"
                    }, "us-east-1"]
                }],
                no = [{
                    fn: te,
                    [eX]: [rS, tR]
                }],
                na = [{
                    fn: tt,
                    [eX]: [rv, "resourceId[1]"],
                    [eY]: tk
                }, {
                    fn: "not",
                    [eX]: [{
                        fn: te,
                        [eX]: [rE, ""]
                    }]
                }],
                nu = [{
                    fn: "not",
                    [eX]: [{
                        fn: te,
                        [eX]: [{
                            fn: tt,
                            [eX]: [rv, "region"]
                        }, ""]
                    }]
                }],
                nl = [{
                    fn: "not",
                    [eX]: [{
                        fn: e8,
                        [eX]: [{
                            fn: tt,
                            [eX]: [rv, "resourceId[2]"]
                        }]
                    }]
                }],
                nc = [{
                    fn: e7,
                    [eX]: [{
                        fn: tt,
                        [eX]: [rv, "region"]
                    }],
                    [eY]: "bucketPartition"
                }],
                nd = [{
                    fn: te,
                    [eX]: [rT, {
                        fn: tt,
                        [eX]: [{
                            ref: "partitionResult"
                        }, tr]
                    }]
                }],
                nf = [{
                    fn: tm,
                    [eX]: [{
                        fn: tt,
                        [eX]: [rv, "region"]
                    }, !0]
                }],
                nh = [{
                    fn: tm,
                    [eX]: [rN, !1]
                }],
                np = [{
                    fn: tm,
                    [eX]: [rE, !1]
                }],
                ng = [{
                    fn: tm,
                    [eX]: [{
                        ref: "Region"
                    }, !0]
                }],
                nm = {
                    version: "1.0",
                    parameters: {
                        Bucket: t$,
                        Region: t$,
                        UseFIPS: t_,
                        UseDualStack: t_,
                        Endpoint: t$,
                        ForcePathStyle: t_,
                        Accelerate: t_,
                        UseGlobalEndpoint: t_,
                        UseObjectLambdaEndpoint: tF,
                        Key: t$,
                        Prefix: t$,
                        CopySource: t$,
                        DisableAccessPoints: tF,
                        DisableMultiRegionAccessPoints: t_,
                        UseArnRegion: tF,
                        UseS3ExpressControlEndpoint: tF,
                        DisableS3ExpressSessionAuth: tF
                    },
                    rules: [{
                        [eZ]: [{
                            fn: e8,
                            [eX]: rJ
                        }],
                        rules: [{
                            [eZ]: [tL, tB],
                            error: "Accelerate cannot be used with FIPS",
                            [eK]: e9
                        }, {
                            [eZ]: [tD, tj],
                            error: "Cannot set dual-stack in combination with a custom endpoint.",
                            [eK]: e9
                        }, {
                            [eZ]: [tj, tB],
                            error: "A custom endpoint cannot be combined with FIPS",
                            [eK]: e9
                        }, {
                            [eZ]: [tj, tL],
                            error: "A custom endpoint cannot be combined with S3 Accelerate",
                            [eK]: e9
                        }, {
                            [eZ]: [tB, tH, tq],
                            error: "Partition does not support FIPS",
                            [eK]: e9
                        }, {
                            [eZ]: [tz, {
                                fn: tn,
                                [eX]: [tV, 0, 6, !0],
                                [eY]: ti
                            }, {
                                fn: te,
                                [eX]: [{
                                    ref: ti
                                }, "--x-s3"]
                            }],
                            rules: [{
                                [eZ]: rQ,
                                error: "S3Express does not support Dual-stack.",
                                [eK]: e9
                            }, {
                                [eZ]: r0,
                                error: "S3Express does not support S3 Accelerate.",
                                [eK]: e9
                            }, {
                                [eZ]: r1,
                                rules: [{
                                    [eZ]: r2,
                                    rules: [{
                                        [eZ]: r3,
                                        rules: [{
                                            [eZ]: r4,
                                            rules: [{
                                                endpoint: {
                                                    url: to,
                                                    [eJ]: tX,
                                                    [e4]: tY
                                                },
                                                [eK]: ta
                                            }],
                                            [eK]: tu
                                        }],
                                        [eK]: tu
                                    }, {
                                        [eZ]: r6,
                                        rules: [{
                                            endpoint: {
                                                url: tc,
                                                [eJ]: tX,
                                                [e4]: tY
                                            },
                                            [eK]: ta
                                        }],
                                        [eK]: tu
                                    }, tQ],
                                    [eK]: tu
                                }, {
                                    [eZ]: r3,
                                    rules: [{
                                        [eZ]: r4,
                                        rules: [{
                                            endpoint: {
                                                url: to,
                                                [eJ]: t0,
                                                [e4]: tY
                                            },
                                            [eK]: ta
                                        }],
                                        [eK]: tu
                                    }],
                                    [eK]: tu
                                }, {
                                    [eZ]: r6,
                                    rules: [{
                                        endpoint: {
                                            url: tc,
                                            [eJ]: t0,
                                            [e4]: tY
                                        },
                                        [eK]: ta
                                    }],
                                    [eK]: tu
                                }, tQ],
                                [eK]: tu
                            }, {
                                [eZ]: [t1, t2],
                                rules: [{
                                    [eZ]: [tZ, t3],
                                    rules: [{
                                        [eZ]: r8,
                                        endpoint: {
                                            url: "https://s3express-control-fips.{Region}.amazonaws.com/{uri_encoded_bucket}",
                                            [eJ]: tX,
                                            [e4]: tY
                                        },
                                        [eK]: ta
                                    }, {
                                        endpoint: {
                                            url: "https://s3express-control.{Region}.amazonaws.com/{uri_encoded_bucket}",
                                            [eJ]: tX,
                                            [e4]: tY
                                        },
                                        [eK]: ta
                                    }],
                                    [eK]: tu
                                }],
                                [eK]: tu
                            }, {
                                [eZ]: r6,
                                rules: [{
                                    [eZ]: r2,
                                    rules: [{
                                        [eZ]: r5,
                                        rules: r9,
                                        [eK]: tu
                                    }, {
                                        [eZ]: r7,
                                        rules: r9,
                                        [eK]: tu
                                    }, t4],
                                    [eK]: tu
                                }, {
                                    [eZ]: r5,
                                    rules: ne,
                                    [eK]: tu
                                }, {
                                    [eZ]: r7,
                                    rules: ne,
                                    [eK]: tu
                                }, t4],
                                [eK]: tu
                            }, tQ],
                            [eK]: tu
                        }, {
                            [eZ]: [t6, t1, t2],
                            rules: [{
                                [eZ]: r1,
                                endpoint: {
                                    url: td,
                                    [eJ]: tX,
                                    [e4]: tY
                                },
                                [eK]: ta
                            }, {
                                [eZ]: r8,
                                endpoint: {
                                    url: "https://s3express-control-fips.{Region}.amazonaws.com",
                                    [eJ]: tX,
                                    [e4]: tY
                                },
                                [eK]: ta
                            }, {
                                endpoint: {
                                    url: "https://s3express-control.{Region}.amazonaws.com",
                                    [eJ]: tX,
                                    [e4]: tY
                                },
                                [eK]: ta
                            }],
                            [eK]: tu
                        }, {
                            [eZ]: [tz, {
                                fn: tn,
                                [eX]: [tV, 49, 50, !0],
                                [eY]: tf
                            }, {
                                fn: tn,
                                [eX]: [tV, 8, 12, !0],
                                [eY]: th
                            }, {
                                fn: tn,
                                [eX]: [tV, 0, 7, !0],
                                [eY]: tp
                            }, {
                                fn: tn,
                                [eX]: [tV, 32, 49, !0],
                                [eY]: tg
                            }, {
                                fn: e7,
                                [eX]: rJ,
                                [eY]: "regionPartition"
                            }, {
                                fn: te,
                                [eX]: [{
                                    ref: tp
                                }, "--op-s3"]
                            }],
                            rules: [{
                                [eZ]: nt,
                                rules: [{
                                    [eZ]: [{
                                        fn: te,
                                        [eX]: [t8, "e"]
                                    }],
                                    rules: [{
                                        [eZ]: nr,
                                        rules: [t5, {
                                            [eZ]: r1,
                                            endpoint: {
                                                url: "https://{Bucket}.ec2.{url#authority}",
                                                [eJ]: t9,
                                                [e4]: tY
                                            },
                                            [eK]: ta
                                        }],
                                        [eK]: tu
                                    }, {
                                        endpoint: {
                                            url: "https://{Bucket}.ec2.s3-outposts.{Region}.{regionPartition#dnsSuffix}",
                                            [eJ]: t9,
                                            [e4]: tY
                                        },
                                        [eK]: ta
                                    }],
                                    [eK]: tu
                                }, {
                                    [eZ]: [{
                                        fn: te,
                                        [eX]: [t8, "o"]
                                    }],
                                    rules: [{
                                        [eZ]: nr,
                                        rules: [t5, {
                                            [eZ]: r1,
                                            endpoint: {
                                                url: "https://{Bucket}.op-{outpostId}.{url#authority}",
                                                [eJ]: t9,
                                                [e4]: tY
                                            },
                                            [eK]: ta
                                        }],
                                        [eK]: tu
                                    }, {
                                        endpoint: {
                                            url: "https://{Bucket}.op-{outpostId}.s3-outposts.{Region}.{regionPartition#dnsSuffix}",
                                            [eJ]: t9,
                                            [e4]: tY
                                        },
                                        [eK]: ta
                                    }],
                                    [eK]: tu
                                }, {
                                    error: 'Unrecognized hardware type: "Expected hardware type o or e but got {hardwareType}"',
                                    [eK]: e9
                                }],
                                [eK]: tu
                            }, {
                                error: "Invalid ARN: The outpost Id must only contain a-z, A-Z, 0-9 and `-`.",
                                [eK]: e9
                            }],
                            [eK]: tu
                        }, {
                            [eZ]: [tz],
                            rules: [{
                                [eZ]: [tj, {
                                    fn: "not",
                                    [eX]: [{
                                        fn: e8,
                                        [eX]: [{
                                            fn: ts,
                                            [eX]: [{
                                                ref: "Endpoint"
                                            }]
                                        }]
                                    }]
                                }],
                                error: "Custom endpoint `{Endpoint}` was not a valid URI",
                                [eK]: e9
                            }, {
                                [eZ]: [t7, tJ],
                                rules: [{
                                    [eZ]: nn,
                                    rules: [{
                                        [eZ]: ni,
                                        rules: [{
                                            [eZ]: [tL, tq],
                                            error: "S3 Accelerate cannot be used in this region",
                                            [eK]: e9
                                        }, {
                                            [eZ]: [tD, tB, re, t3, rt],
                                            endpoint: {
                                                url: "https://{Bucket}.s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}",
                                                [eJ]: rr,
                                                [e4]: tY
                                            },
                                            [eK]: ta
                                        }, {
                                            [eZ]: [tD, tB, re, t3, rn, ri],
                                            rules: [{
                                                endpoint: rs,
                                                [eK]: ta
                                            }],
                                            [eK]: tu
                                        }, {
                                            [eZ]: [tD, tB, re, t3, rn, ra],
                                            endpoint: rs,
                                            [eK]: ta
                                        }, {
                                            [eZ]: [ru, tB, re, t3, rt],
                                            endpoint: {
                                                url: "https://{Bucket}.s3-fips.us-east-1.{partitionResult#dnsSuffix}",
                                                [eJ]: rr,
                                                [e4]: tY
                                            },
                                            [eK]: ta
                                        }, {
                                            [eZ]: [ru, tB, re, t3, rn, ri],
                                            rules: [{
                                                endpoint: rl,
                                                [eK]: ta
                                            }],
                                            [eK]: tu
                                        }, {
                                            [eZ]: [ru, tB, re, t3, rn, ra],
                                            endpoint: rl,
                                            [eK]: ta
                                        }, {
                                            [eZ]: [tD, rc, tL, t3, rt],
                                            endpoint: {
                                                url: "https://{Bucket}.s3-accelerate.dualstack.us-east-1.{partitionResult#dnsSuffix}",
                                                [eJ]: rr,
                                                [e4]: tY
                                            },
                                            [eK]: ta
                                        }, {
                                            [eZ]: [tD, rc, tL, t3, rn, ri],
                                            rules: [{
                                                endpoint: rd,
                                                [eK]: ta
                                            }],
                                            [eK]: tu
                                        }, {
                                            [eZ]: [tD, rc, tL, t3, rn, ra],
                                            endpoint: rd,
                                            [eK]: ta
                                        }, {
                                            [eZ]: [tD, rc, re, t3, rt],
                                            endpoint: {
                                                url: "https://{Bucket}.s3.dualstack.us-east-1.{partitionResult#dnsSuffix}",
                                                [eJ]: rr,
                                                [e4]: tY
                                            },
                                            [eK]: ta
                                        }, {
                                            [eZ]: [tD, rc, re, t3, rn, ri],
                                            rules: [{
                                                endpoint: rf,
                                                [eK]: ta
                                            }],
                                            [eK]: tu
                                        }, {
                                            [eZ]: [tD, rc, re, t3, rn, ra],
                                            endpoint: rf,
                                            [eK]: ta
                                        }, {
                                            [eZ]: [ru, rc, re, tj, tW, tG, rt],
                                            endpoint: {
                                                url: tw,
                                                [eJ]: rr,
                                                [e4]: tY
                                            },
                                            [eK]: ta
                                        }, {
                                            [eZ]: [ru, rc, re, tj, tW, rh, rt],
                                            endpoint: {
                                                url: tc,
                                                [eJ]: rr,
                                                [e4]: tY
                                            },
                                            [eK]: ta
                                        }, {
                                            [eZ]: [ru, rc, re, tj, tW, tG, rn, ri],
                                            rules: [{
                                                [eZ]: ns,
                                                endpoint: rp,
                                                [eK]: ta
                                            }, {
                                                endpoint: rp,
                                                [eK]: ta
                                            }],
                                            [eK]: tu
                                        }, {
                                            [eZ]: [ru, rc, re, tj, tW, rh, rn, ri],
                                            rules: [{
                                                [eZ]: ns,
                                                endpoint: rg,
                                                [eK]: ta
                                            }, rm],
                                            [eK]: tu
                                        }, {
                                            [eZ]: [ru, rc, re, tj, tW, tG, rn, ra],
                                            endpoint: rp,
                                            [eK]: ta
                                        }, {
                                            [eZ]: [ru, rc, re, tj, tW, rh, rn, ra],
                                            endpoint: rg,
                                            [eK]: ta
                                        }, {
                                            [eZ]: [ru, rc, tL, t3, rt],
                                            endpoint: {
                                                url: tv,
                                                [eJ]: rr,
                                                [e4]: tY
                                            },
                                            [eK]: ta
                                        }, {
                                            [eZ]: [ru, rc, tL, t3, rn, ri],
                                            rules: [{
                                                [eZ]: ns,
                                                endpoint: ry,
                                                [eK]: ta
                                            }, {
                                                endpoint: ry,
                                                [eK]: ta
                                            }],
                                            [eK]: tu
                                        }, {
                                            [eZ]: [ru, rc, tL, t3, rn, ra],
                                            endpoint: ry,
                                            [eK]: ta
                                        }, {
                                            [eZ]: [ru, rc, re, t3, rt],
                                            endpoint: {
                                                url: tS,
                                                [eJ]: rr,
                                                [e4]: tY
                                            },
                                            [eK]: ta
                                        }, {
                                            [eZ]: [ru, rc, re, t3, rn, ri],
                                            rules: [{
                                                [eZ]: ns,
                                                endpoint: {
                                                    url: tS,
                                                    [eJ]: ro,
                                                    [e4]: tY
                                                },
                                                [eK]: ta
                                            }, {
                                                endpoint: rb,
                                                [eK]: ta
                                            }],
                                            [eK]: tu
                                        }, {
                                            [eZ]: [ru, rc, re, t3, rn, ra],
                                            endpoint: rb,
                                            [eK]: ta
                                        }],
                                        [eK]: tu
                                    }, rw],
                                    [eK]: tu
                                }],
                                [eK]: tu
                            }, {
                                [eZ]: [tj, tW, {
                                    fn: te,
                                    [eX]: [{
                                        fn: tt,
                                        [eX]: [tK, "scheme"]
                                    }, "http"]
                                }, {
                                    fn: tl,
                                    [eX]: [tV, !0]
                                }, t7, rc, ru, re],
                                rules: [{
                                    [eZ]: nn,
                                    rules: [{
                                        [eZ]: ni,
                                        rules: [rm],
                                        [eK]: tu
                                    }, rw],
                                    [eK]: tu
                                }],
                                [eK]: tu
                            }, {
                                [eZ]: [t7, {
                                    fn: tA,
                                    [eX]: [tV],
                                    [eY]: tE
                                }],
                                rules: [{
                                    [eZ]: [{
                                        fn: tt,
                                        [eX]: [rv, "resourceId[0]"],
                                        [eY]: tx
                                    }, {
                                        fn: "not",
                                        [eX]: [{
                                            fn: te,
                                            [eX]: [rS, ""]
                                        }]
                                    }],
                                    rules: [{
                                        [eZ]: [{
                                            fn: te,
                                            [eX]: [rA, tP]
                                        }],
                                        rules: [{
                                            [eZ]: no,
                                            rules: [{
                                                [eZ]: na,
                                                rules: [rx, rP, {
                                                    [eZ]: nu,
                                                    rules: [rR, {
                                                        [eZ]: nl,
                                                        rules: [rk, {
                                                            [eZ]: nc,
                                                            rules: [{
                                                                [eZ]: nn,
                                                                rules: [{
                                                                    [eZ]: nd,
                                                                    rules: [{
                                                                        [eZ]: nf,
                                                                        rules: [{
                                                                            [eZ]: [{
                                                                                fn: te,
                                                                                [eX]: [rN, ""]
                                                                            }],
                                                                            error: "Invalid ARN: Missing account id",
                                                                            [eK]: e9
                                                                        }, {
                                                                            [eZ]: nh,
                                                                            rules: [{
                                                                                [eZ]: np,
                                                                                rules: [{
                                                                                    [eZ]: r1,
                                                                                    endpoint: {
                                                                                        url: tT,
                                                                                        [eJ]: rM,
                                                                                        [e4]: tY
                                                                                    },
                                                                                    [eK]: ta
                                                                                }, {
                                                                                    [eZ]: r8,
                                                                                    endpoint: {
                                                                                        url: "https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}",
                                                                                        [eJ]: rM,
                                                                                        [e4]: tY
                                                                                    },
                                                                                    [eK]: ta
                                                                                }, {
                                                                                    endpoint: {
                                                                                        url: "https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda.{bucketArn#region}.{bucketPartition#dnsSuffix}",
                                                                                        [eJ]: rM,
                                                                                        [e4]: tY
                                                                                    },
                                                                                    [eK]: ta
                                                                                }],
                                                                                [eK]: tu
                                                                            }, rC],
                                                                            [eK]: tu
                                                                        }, rO],
                                                                        [eK]: tu
                                                                    }, rI],
                                                                    [eK]: tu
                                                                }, rU],
                                                                [eK]: tu
                                                            }],
                                                            [eK]: tu
                                                        }],
                                                        [eK]: tu
                                                    }, r$],
                                                    [eK]: tu
                                                }, {
                                                    error: "Invalid ARN: bucket ARN is missing a region",
                                                    [eK]: e9
                                                }],
                                                [eK]: tu
                                            }, r_],
                                            [eK]: tu
                                        }, {
                                            error: "Invalid ARN: Object Lambda ARNs only support `accesspoint` arn types, but found: `{arnType}`",
                                            [eK]: e9
                                        }],
                                        [eK]: tu
                                    }, {
                                        [eZ]: no,
                                        rules: [{
                                            [eZ]: na,
                                            rules: [{
                                                [eZ]: nu,
                                                rules: [{
                                                    [eZ]: no,
                                                    rules: [{
                                                        [eZ]: nu,
                                                        rules: [rR, {
                                                            [eZ]: nl,
                                                            rules: [rk, {
                                                                [eZ]: nc,
                                                                rules: [{
                                                                    [eZ]: nn,
                                                                    rules: [{
                                                                        [eZ]: [{
                                                                            fn: te,
                                                                            [eX]: [rT, "{partitionResult#name}"]
                                                                        }],
                                                                        rules: [{
                                                                            [eZ]: nf,
                                                                            rules: [{
                                                                                [eZ]: [{
                                                                                    fn: te,
                                                                                    [eX]: [rA, "s3"]
                                                                                }],
                                                                                rules: [{
                                                                                    [eZ]: nh,
                                                                                    rules: [{
                                                                                        [eZ]: np,
                                                                                        rules: [{
                                                                                            [eZ]: r0,
                                                                                            error: "Access Points do not support S3 Accelerate",
                                                                                            [eK]: e9
                                                                                        }, {
                                                                                            [eZ]: [tB, tD],
                                                                                            endpoint: {
                                                                                                url: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}",
                                                                                                [eJ]: rF,
                                                                                                [e4]: tY
                                                                                            },
                                                                                            [eK]: ta
                                                                                        }, {
                                                                                            [eZ]: [tB, ru],
                                                                                            endpoint: {
                                                                                                url: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}",
                                                                                                [eJ]: rF,
                                                                                                [e4]: tY
                                                                                            },
                                                                                            [eK]: ta
                                                                                        }, {
                                                                                            [eZ]: [rc, tD],
                                                                                            endpoint: {
                                                                                                url: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}",
                                                                                                [eJ]: rF,
                                                                                                [e4]: tY
                                                                                            },
                                                                                            [eK]: ta
                                                                                        }, {
                                                                                            [eZ]: [rc, ru, tj, tW],
                                                                                            endpoint: {
                                                                                                url: tT,
                                                                                                [eJ]: rF,
                                                                                                [e4]: tY
                                                                                            },
                                                                                            [eK]: ta
                                                                                        }, {
                                                                                            [eZ]: [rc, ru],
                                                                                            endpoint: {
                                                                                                url: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.{bucketArn#region}.{bucketPartition#dnsSuffix}",
                                                                                                [eJ]: rF,
                                                                                                [e4]: tY
                                                                                            },
                                                                                            [eK]: ta
                                                                                        }],
                                                                                        [eK]: tu
                                                                                    }, rC],
                                                                                    [eK]: tu
                                                                                }, rO],
                                                                                [eK]: tu
                                                                            }, {
                                                                                error: "Invalid ARN: The ARN was not for the S3 service, found: {bucketArn#service}",
                                                                                [eK]: e9
                                                                            }],
                                                                            [eK]: tu
                                                                        }, rI],
                                                                        [eK]: tu
                                                                    }, rU],
                                                                    [eK]: tu
                                                                }],
                                                                [eK]: tu
                                                            }],
                                                            [eK]: tu
                                                        }, r$],
                                                        [eK]: tu
                                                    }],
                                                    [eK]: tu
                                                }],
                                                [eK]: tu
                                            }, {
                                                [eZ]: [{
                                                    fn: tm,
                                                    [eX]: [rE, !0]
                                                }],
                                                rules: [{
                                                    [eZ]: rQ,
                                                    error: "S3 MRAP does not support dual-stack",
                                                    [eK]: e9
                                                }, {
                                                    [eZ]: r8,
                                                    error: "S3 MRAP does not support FIPS",
                                                    [eK]: e9
                                                }, {
                                                    [eZ]: r0,
                                                    error: "S3 MRAP does not support S3 Accelerate",
                                                    [eK]: e9
                                                }, {
                                                    [eZ]: [{
                                                        fn: e5,
                                                        [eX]: [{
                                                            ref: "DisableMultiRegionAccessPoints"
                                                        }, !0]
                                                    }],
                                                    error: "Invalid configuration: Multi-Region Access Point ARNs are disabled.",
                                                    [eK]: e9
                                                }, {
                                                    [eZ]: [{
                                                        fn: e7,
                                                        [eX]: rJ,
                                                        [eY]: tN
                                                    }],
                                                    rules: [{
                                                        [eZ]: [{
                                                            fn: te,
                                                            [eX]: [{
                                                                fn: tt,
                                                                [eX]: [{
                                                                    ref: tN
                                                                }, tr]
                                                            }, {
                                                                fn: tt,
                                                                [eX]: [rv, "partition"]
                                                            }]
                                                        }],
                                                        rules: [{
                                                            endpoint: {
                                                                url: "https://{accessPointName}.accesspoint.s3-global.{mrapPartition#dnsSuffix}",
                                                                [eJ]: {
                                                                    [e0]: [{
                                                                        [e1]: !0,
                                                                        name: ty,
                                                                        [e2]: "s3",
                                                                        [e6]: ["*"]
                                                                    }]
                                                                },
                                                                [e4]: tY
                                                            },
                                                            [eK]: ta
                                                        }],
                                                        [eK]: tu
                                                    }, {
                                                        error: "Client was configured for partition `{mrapPartition#name}` but bucket referred to partition `{bucketArn#partition}`",
                                                        [eK]: e9
                                                    }],
                                                    [eK]: tu
                                                }],
                                                [eK]: tu
                                            }, {
                                                error: "Invalid Access Point Name",
                                                [eK]: e9
                                            }],
                                            [eK]: tu
                                        }, r_],
                                        [eK]: tu
                                    }, {
                                        [eZ]: [{
                                            fn: te,
                                            [eX]: [rA, tb]
                                        }],
                                        rules: [{
                                            [eZ]: rQ,
                                            error: "S3 Outposts does not support Dual-stack",
                                            [eK]: e9
                                        }, {
                                            [eZ]: r8,
                                            error: "S3 Outposts does not support FIPS",
                                            [eK]: e9
                                        }, {
                                            [eZ]: r0,
                                            error: "S3 Outposts does not support S3 Accelerate",
                                            [eK]: e9
                                        }, {
                                            [eZ]: [{
                                                fn: e8,
                                                [eX]: [{
                                                    fn: tt,
                                                    [eX]: [rv, "resourceId[4]"]
                                                }]
                                            }],
                                            error: "Invalid Arn: Outpost Access Point ARN contains sub resources",
                                            [eK]: e9
                                        }, {
                                            [eZ]: [{
                                                fn: tt,
                                                [eX]: [rv, "resourceId[1]"],
                                                [eY]: tg
                                            }],
                                            rules: [{
                                                [eZ]: nt,
                                                rules: [rk, {
                                                    [eZ]: nc,
                                                    rules: [{
                                                        [eZ]: nn,
                                                        rules: [{
                                                            [eZ]: nd,
                                                            rules: [{
                                                                [eZ]: nf,
                                                                rules: [{
                                                                    [eZ]: nh,
                                                                    rules: [{
                                                                        [eZ]: [{
                                                                            fn: tt,
                                                                            [eX]: [rv, "resourceId[2]"],
                                                                            [eY]: tM
                                                                        }],
                                                                        rules: [{
                                                                            [eZ]: [{
                                                                                fn: tt,
                                                                                [eX]: [rv, "resourceId[3]"],
                                                                                [eY]: tk
                                                                            }],
                                                                            rules: [{
                                                                                [eZ]: [{
                                                                                    fn: te,
                                                                                    [eX]: [{
                                                                                        ref: tM
                                                                                    }, tR]
                                                                                }],
                                                                                rules: [{
                                                                                    [eZ]: r1,
                                                                                    endpoint: {
                                                                                        url: "https://{accessPointName}-{bucketArn#accountId}.{outpostId}.{url#authority}",
                                                                                        [eJ]: rL,
                                                                                        [e4]: tY
                                                                                    },
                                                                                    [eK]: ta
                                                                                }, {
                                                                                    endpoint: {
                                                                                        url: "https://{accessPointName}-{bucketArn#accountId}.{outpostId}.s3-outposts.{bucketArn#region}.{bucketPartition#dnsSuffix}",
                                                                                        [eJ]: rL,
                                                                                        [e4]: tY
                                                                                    },
                                                                                    [eK]: ta
                                                                                }],
                                                                                [eK]: tu
                                                                            }, {
                                                                                error: "Expected an outpost type `accesspoint`, found {outpostType}",
                                                                                [eK]: e9
                                                                            }],
                                                                            [eK]: tu
                                                                        }, {
                                                                            error: "Invalid ARN: expected an access point name",
                                                                            [eK]: e9
                                                                        }],
                                                                        [eK]: tu
                                                                    }, {
                                                                        error: "Invalid ARN: Expected a 4-component resource",
                                                                        [eK]: e9
                                                                    }],
                                                                    [eK]: tu
                                                                }, rO],
                                                                [eK]: tu
                                                            }, rI],
                                                            [eK]: tu
                                                        }, rU],
                                                        [eK]: tu
                                                    }],
                                                    [eK]: tu
                                                }],
                                                [eK]: tu
                                            }, {
                                                error: "Invalid ARN: The outpost Id may only contain a-z, A-Z, 0-9 and `-`. Found: `{outpostId}`",
                                                [eK]: e9
                                            }],
                                            [eK]: tu
                                        }, {
                                            error: "Invalid ARN: The Outpost Id was not set",
                                            [eK]: e9
                                        }],
                                        [eK]: tu
                                    }, {
                                        error: "Invalid ARN: Unrecognized format: {Bucket} (type: {arnType})",
                                        [eK]: e9
                                    }],
                                    [eK]: tu
                                }, {
                                    error: "Invalid ARN: No ARN type specified",
                                    [eK]: e9
                                }],
                                [eK]: tu
                            }, {
                                [eZ]: [{
                                    fn: tn,
                                    [eX]: [tV, 0, 4, !1],
                                    [eY]: tC
                                }, {
                                    fn: te,
                                    [eX]: [{
                                        ref: tC
                                    }, "arn:"]
                                }, {
                                    fn: "not",
                                    [eX]: [{
                                        fn: e8,
                                        [eX]: [rB]
                                    }]
                                }],
                                error: "Invalid ARN: `{Bucket}` was not a valid ARN",
                                [eK]: e9
                            }, {
                                [eZ]: [{
                                    fn: e5,
                                    [eX]: [{
                                        ref: "ForcePathStyle"
                                    }, !0]
                                }, rB],
                                error: "Path-style addressing cannot be used with ARN buckets",
                                [eK]: e9
                            }, {
                                [eZ]: r4,
                                rules: [{
                                    [eZ]: nn,
                                    rules: [{
                                        [eZ]: [re],
                                        rules: [{
                                            [eZ]: [tD, t3, tB, rt],
                                            endpoint: {
                                                url: "https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
                                                [eJ]: rr,
                                                [e4]: tY
                                            },
                                            [eK]: ta
                                        }, {
                                            [eZ]: [tD, t3, tB, rn, ri],
                                            rules: [{
                                                endpoint: rD,
                                                [eK]: ta
                                            }],
                                            [eK]: tu
                                        }, {
                                            [eZ]: [tD, t3, tB, rn, ra],
                                            endpoint: rD,
                                            [eK]: ta
                                        }, {
                                            [eZ]: [ru, t3, tB, rt],
                                            endpoint: {
                                                url: "https://s3-fips.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
                                                [eJ]: rr,
                                                [e4]: tY
                                            },
                                            [eK]: ta
                                        }, {
                                            [eZ]: [ru, t3, tB, rn, ri],
                                            rules: [{
                                                endpoint: rj,
                                                [eK]: ta
                                            }],
                                            [eK]: tu
                                        }, {
                                            [eZ]: [ru, t3, tB, rn, ra],
                                            endpoint: rj,
                                            [eK]: ta
                                        }, {
                                            [eZ]: [tD, t3, rc, rt],
                                            endpoint: {
                                                url: "https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
                                                [eJ]: rr,
                                                [e4]: tY
                                            },
                                            [eK]: ta
                                        }, {
                                            [eZ]: [tD, t3, rc, rn, ri],
                                            rules: [{
                                                endpoint: rH,
                                                [eK]: ta
                                            }],
                                            [eK]: tu
                                        }, {
                                            [eZ]: [tD, t3, rc, rn, ra],
                                            endpoint: rH,
                                            [eK]: ta
                                        }, {
                                            [eZ]: [ru, tj, tW, rc, rt],
                                            endpoint: {
                                                url: tO,
                                                [eJ]: rr,
                                                [e4]: tY
                                            },
                                            [eK]: ta
                                        }, {
                                            [eZ]: [ru, tj, tW, rc, rn, ri],
                                            rules: [{
                                                [eZ]: ns,
                                                endpoint: rq,
                                                [eK]: ta
                                            }, {
                                                endpoint: rq,
                                                [eK]: ta
                                            }],
                                            [eK]: tu
                                        }, {
                                            [eZ]: [ru, tj, tW, rc, rn, ra],
                                            endpoint: rq,
                                            [eK]: ta
                                        }, {
                                            [eZ]: [ru, t3, rc, rt],
                                            endpoint: {
                                                url: tI,
                                                [eJ]: rr,
                                                [e4]: tY
                                            },
                                            [eK]: ta
                                        }, {
                                            [eZ]: [ru, t3, rc, rn, ri],
                                            rules: [{
                                                [eZ]: ns,
                                                endpoint: {
                                                    url: tI,
                                                    [eJ]: ro,
                                                    [e4]: tY
                                                },
                                                [eK]: ta
                                            }, {
                                                endpoint: rz,
                                                [eK]: ta
                                            }],
                                            [eK]: tu
                                        }, {
                                            [eZ]: [ru, t3, rc, rn, ra],
                                            endpoint: rz,
                                            [eK]: ta
                                        }],
                                        [eK]: tu
                                    }, {
                                        error: "Path-style addressing cannot be used with S3 Accelerate",
                                        [eK]: e9
                                    }],
                                    [eK]: tu
                                }],
                                [eK]: tu
                            }],
                            [eK]: tu
                        }, {
                            [eZ]: [{
                                fn: e8,
                                [eX]: [rV]
                            }, {
                                fn: e5,
                                [eX]: [rV, !0]
                            }],
                            rules: [{
                                [eZ]: nn,
                                rules: [{
                                    [eZ]: ng,
                                    rules: [rx, rP, {
                                        [eZ]: r1,
                                        endpoint: {
                                            url: td,
                                            [eJ]: rW,
                                            [e4]: tY
                                        },
                                        [eK]: ta
                                    }, {
                                        [eZ]: r8,
                                        endpoint: {
                                            url: "https://s3-object-lambda-fips.{Region}.{partitionResult#dnsSuffix}",
                                            [eJ]: rW,
                                            [e4]: tY
                                        },
                                        [eK]: ta
                                    }, {
                                        endpoint: {
                                            url: "https://s3-object-lambda.{Region}.{partitionResult#dnsSuffix}",
                                            [eJ]: rW,
                                            [e4]: tY
                                        },
                                        [eK]: ta
                                    }],
                                    [eK]: tu
                                }, rw],
                                [eK]: tu
                            }],
                            [eK]: tu
                        }, {
                            [eZ]: [t6],
                            rules: [{
                                [eZ]: nn,
                                rules: [{
                                    [eZ]: ng,
                                    rules: [{
                                        [eZ]: [tB, tD, t3, rt],
                                        endpoint: {
                                            url: "https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}",
                                            [eJ]: rr,
                                            [e4]: tY
                                        },
                                        [eK]: ta
                                    }, {
                                        [eZ]: [tB, tD, t3, rn, ri],
                                        rules: [{
                                            endpoint: rG,
                                            [eK]: ta
                                        }],
                                        [eK]: tu
                                    }, {
                                        [eZ]: [tB, tD, t3, rn, ra],
                                        endpoint: rG,
                                        [eK]: ta
                                    }, {
                                        [eZ]: [tB, ru, t3, rt],
                                        endpoint: {
                                            url: "https://s3-fips.us-east-1.{partitionResult#dnsSuffix}",
                                            [eJ]: rr,
                                            [e4]: tY
                                        },
                                        [eK]: ta
                                    }, {
                                        [eZ]: [tB, ru, t3, rn, ri],
                                        rules: [{
                                            endpoint: rK,
                                            [eK]: ta
                                        }],
                                        [eK]: tu
                                    }, {
                                        [eZ]: [tB, ru, t3, rn, ra],
                                        endpoint: rK,
                                        [eK]: ta
                                    }, {
                                        [eZ]: [rc, tD, t3, rt],
                                        endpoint: {
                                            url: "https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}",
                                            [eJ]: rr,
                                            [e4]: tY
                                        },
                                        [eK]: ta
                                    }, {
                                        [eZ]: [rc, tD, t3, rn, ri],
                                        rules: [{
                                            endpoint: rZ,
                                            [eK]: ta
                                        }],
                                        [eK]: tu
                                    }, {
                                        [eZ]: [rc, tD, t3, rn, ra],
                                        endpoint: rZ,
                                        [eK]: ta
                                    }, {
                                        [eZ]: [rc, ru, tj, tW, rt],
                                        endpoint: {
                                            url: td,
                                            [eJ]: rr,
                                            [e4]: tY
                                        },
                                        [eK]: ta
                                    }, {
                                        [eZ]: [rc, ru, tj, tW, rn, ri],
                                        rules: [{
                                            [eZ]: ns,
                                            endpoint: rX,
                                            [eK]: ta
                                        }, {
                                            endpoint: rX,
                                            [eK]: ta
                                        }],
                                        [eK]: tu
                                    }, {
                                        [eZ]: [rc, ru, tj, tW, rn, ra],
                                        endpoint: rX,
                                        [eK]: ta
                                    }, {
                                        [eZ]: [rc, ru, t3, rt],
                                        endpoint: {
                                            url: tU,
                                            [eJ]: rr,
                                            [e4]: tY
                                        },
                                        [eK]: ta
                                    }, {
                                        [eZ]: [rc, ru, t3, rn, ri],
                                        rules: [{
                                            [eZ]: ns,
                                            endpoint: {
                                                url: tU,
                                                [eJ]: ro,
                                                [e4]: tY
                                            },
                                            [eK]: ta
                                        }, {
                                            endpoint: rY,
                                            [eK]: ta
                                        }],
                                        [eK]: tu
                                    }, {
                                        [eZ]: [rc, ru, t3, rn, ra],
                                        endpoint: rY,
                                        [eK]: ta
                                    }],
                                    [eK]: tu
                                }, rw],
                                [eK]: tu
                            }],
                            [eK]: tu
                        }],
                        [eK]: tu
                    }, {
                        error: "A region must be set when sending requests to S3.",
                        [eK]: e9
                    }]
                },
                ny = new q({
                    size: 50,
                    params: ["Accelerate", "Bucket", "DisableAccessPoints", "DisableMultiRegionAccessPoints", "DisableS3ExpressSessionAuth", "Endpoint", "ForcePathStyle", "Region", "UseArnRegion", "UseDualStack", "UseFIPS", "UseGlobalEndpoint", "UseObjectLambdaEndpoint", "UseS3ExpressControlEndpoint"]
                }),
                nb = (e, t = {}) => ny.get(e, () => ey(nm, {
                    endpointParams: e,
                    logger: t.logger
                }));
            K.aws = eS;
            let nw = (n = async (e, t, r) => ({
                operation: (0, N.J)(t).operation,
                region: await (0, N.$)(e.region)() || (() => {
                    throw Error("expected `region` to be configured for `aws.auth#sigv4`")
                })()
            }), async (e, t, r) => {
                if (!r) throw Error("Could not find `input` for `defaultEndpointRuleSetHttpAuthSchemeParametersProvider`");
                let i = await n(e, t, r),
                    s = N.J(t) ? .commandInstance ? .constructor ? .getEndpointParameterInstructions;
                if (!s) throw Error(`getEndpointParameterInstructions() is not defined on \`${t.commandName}\``);
                return Object.assign(i, await (0, eL.Xr)(r, {
                    getEndpointParameterInstructions: s
                }, e))
            });

            function nv(e) {
                return {
                    schemeId: "aws.auth#sigv4",
                    signingProperties: {
                        name: "s3",
                        region: e.region
                    },
                    propertiesExtractor: (e, t) => ({
                        signingProperties: {
                            config: e,
                            context: t
                        }
                    })
                }
            }

            function nS(e) {
                return {
                    schemeId: "aws.auth#sigv4a",
                    signingProperties: {
                        name: "s3",
                        region: e.region
                    },
                    propertiesExtractor: (e, t) => ({
                        signingProperties: {
                            config: e,
                            context: t
                        }
                    })
                }
            }
            let nA = (a = e => {
                    let t = [];
                    return e.operation, t.push(nv(e)), t.push(nS(e)), t
                }, u = {
                    "aws.auth#sigv4": nv,
                    "aws.auth#sigv4a": nS
                }, e => {
                    let t = nb(e),
                        r = t.properties ? .authSchemes;
                    if (!r) return a(e);
                    let n = [];
                    for (let t of r) {
                        let i;
                        let {
                            name: s,
                            properties: o = {},
                            ...a
                        } = t, l = s.toLowerCase();
                        if (s !== l && console.warn(`HttpAuthScheme has been normalized with lowercasing: \`${s}\` to \`${l}\``), "sigv4a" === l) {
                            i = "aws.auth#sigv4a";
                            let e = r.find(e => {
                                let t = e.name.toLowerCase();
                                return "sigv4a" !== t && t.startsWith("sigv4")
                            });
                            if (!eV.CrtSignerV4 && e) continue
                        } else if (l.startsWith("sigv4")) i = "aws.auth#sigv4";
                        else throw Error(`Unknown HttpAuthScheme found in \`@smithy.rules#endpointRuleSet\`: \`${l}\``);
                        let c = u[i];
                        if (!c) throw Error(`Could not find HttpAuthOption create function for \`${i}\``);
                        let d = c(e);
                        d.schemeId = i, d.signingProperties = { ...d.signingProperties || {},
                            ...a,
                            ...o
                        }, n.push(d)
                    }
                    return n
                }),
                nE = e => ({ ...ez(eH(e))
                });
            var nx = r(31131),
                nP = r(18674),
                nR = r(39866),
                nk = r(47623);
            class nT extends eD.mY.classBuilder().ep({ ...nP.q,
                DisableS3ExpressSessionAuth: {
                    type: "staticContextParams",
                    value: !0
                },
                Bucket: {
                    type: "contextParams",
                    name: "Bucket"
                }
            }).m(function(e, t, r, n) {
                return [(0, nx.p2)(r, this.serialize, this.deserialize), (0, eL.a3)(r, e.getEndpointParameterInstructions()), (0, H.mS)(r)]
            }).s("AmazonS3", "CreateSession", {}).n("S3Client", "CreateSessionCommand").f(nR.NW, nR.ZF).ser(nk.UX3).de(nk.eqj).build() {}
            var nN = {
                i8: "3.654.0"
            };
            let nM = e => new TextEncoder().encode(e);

            function nC(e) {
                return "string" == typeof e ? 0 === e.length : 0 === e.byteLength
            }
            var nO = {
                    name: "SHA-1"
                },
                nI = {
                    name: "HMAC",
                    hash: nO
                },
                nU = new Uint8Array([218, 57, 163, 238, 94, 107, 75, 13, 50, 85, 191, 239, 149, 96, 24, 144, 175, 216, 7, 9]);
            let n$ = {};

            function n_() {
                return "undefined" != typeof window ? window : "undefined" != typeof self ? self : n$
            }
            var nF = function() {
                function e(e) {
                    this.toHash = new Uint8Array(0), void 0 !== e && (this.key = new Promise(function(t, r) {
                        n_().crypto.subtle.importKey("raw", nL(e), nI, !1, ["sign"]).then(t, r)
                    }), this.key.catch(function() {}))
                }
                return e.prototype.update = function(e) {
                    if (!nC(e)) {
                        var t = nL(e),
                            r = new Uint8Array(this.toHash.byteLength + t.byteLength);
                        r.set(this.toHash, 0), r.set(t, this.toHash.byteLength), this.toHash = r
                    }
                }, e.prototype.digest = function() {
                    var e = this;
                    return this.key ? this.key.then(function(t) {
                        return n_().crypto.subtle.sign(nI, t, e.toHash).then(function(e) {
                            return new Uint8Array(e)
                        })
                    }) : nC(this.toHash) ? Promise.resolve(nU) : Promise.resolve().then(function() {
                        return n_().crypto.subtle.digest(nO, e.toHash)
                    }).then(function(e) {
                        return Promise.resolve(new Uint8Array(e))
                    })
                }, e.prototype.reset = function() {
                    this.toHash = new Uint8Array(0)
                }, e
            }();

            function nL(e) {
                return "string" == typeof e ? nM(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e)
            }
            var nB = ["decrypt", "digest", "encrypt", "exportKey", "generateKey", "importKey", "sign", "verify"];

            function nD(e) {
                var t;
                return !!("object" == typeof e && "object" == typeof e.crypto && "function" == typeof e.crypto.getRandomValues) && "object" == typeof e.crypto.subtle && (t = e.crypto.subtle) && nB.every(function(e) {
                    return "function" == typeof t[e]
                })
            }
            var nj = function() {
                    function e(e) {
                        if (nD(n_())) this.hash = new nF(e);
                        else throw Error("SHA1 not supported")
                    }
                    return e.prototype.update = function(e, t) {
                        this.hash.update(S(e))
                    }, e.prototype.digest = function() {
                        return this.hash.digest()
                    }, e.prototype.reset = function() {
                        this.hash.reset()
                    }, e
                }(),
                nH = {
                    name: "SHA-256"
                },
                nq = {
                    name: "HMAC",
                    hash: nH
                },
                nz = new Uint8Array([227, 176, 196, 66, 152, 252, 28, 20, 154, 251, 244, 200, 153, 111, 185, 36, 39, 174, 65, 228, 100, 155, 147, 76, 164, 149, 153, 27, 120, 82, 184, 85]),
                nV = function() {
                    function e(e) {
                        this.toHash = new Uint8Array(0), this.secret = e, this.reset()
                    }
                    return e.prototype.update = function(e) {
                        if (!A(e)) {
                            var t = S(e),
                                r = new Uint8Array(this.toHash.byteLength + t.byteLength);
                            r.set(this.toHash, 0), r.set(t, this.toHash.byteLength), this.toHash = r
                        }
                    }, e.prototype.digest = function() {
                        var e = this;
                        return this.key ? this.key.then(function(t) {
                            return n_().crypto.subtle.sign(nq, t, e.toHash).then(function(e) {
                                return new Uint8Array(e)
                            })
                        }) : A(this.toHash) ? Promise.resolve(nz) : Promise.resolve().then(function() {
                            return n_().crypto.subtle.digest(nH, e.toHash)
                        }).then(function(e) {
                            return Promise.resolve(new Uint8Array(e))
                        })
                    }, e.prototype.reset = function() {
                        var e = this;
                        this.toHash = new Uint8Array(0), this.secret && void 0 !== this.secret && (this.key = new Promise(function(t, r) {
                            n_().crypto.subtle.importKey("raw", S(e.secret), nq, !1, ["sign"]).then(t, r)
                        }), this.key.catch(function() {}))
                    }, e
                }(),
                nW = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
                nG = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
                nK = function() {
                    function e() {
                        this.state = Int32Array.from(nG), this.temp = new Int32Array(64), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1
                    }
                    return e.prototype.update = function(e) {
                        if (this.finished) throw Error("Attempted to update an already finished hash.");
                        var t = 0,
                            r = e.byteLength;
                        if (this.bytesHashed += r, 8 * this.bytesHashed > 9007199254740991) throw Error("Cannot hash more than 2^53 - 1 bits");
                        for (; r > 0;) this.buffer[this.bufferLength++] = e[t++], r--, 64 === this.bufferLength && (this.hashBuffer(), this.bufferLength = 0)
                    }, e.prototype.digest = function() {
                        if (!this.finished) {
                            var e = 8 * this.bytesHashed,
                                t = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength),
                                r = this.bufferLength;
                            if (t.setUint8(this.bufferLength++, 128), r % 64 >= 56) {
                                for (var n = this.bufferLength; n < 64; n++) t.setUint8(n, 0);
                                this.hashBuffer(), this.bufferLength = 0
                            }
                            for (var n = this.bufferLength; n < 56; n++) t.setUint8(n, 0);
                            t.setUint32(56, Math.floor(e / 4294967296), !0), t.setUint32(60, e), this.hashBuffer(), this.finished = !0
                        }
                        for (var i = new Uint8Array(32), n = 0; n < 8; n++) i[4 * n] = this.state[n] >>> 24 & 255, i[4 * n + 1] = this.state[n] >>> 16 & 255, i[4 * n + 2] = this.state[n] >>> 8 & 255, i[4 * n + 3] = this.state[n] >>> 0 & 255;
                        return i
                    }, e.prototype.hashBuffer = function() {
                        for (var e = this.buffer, t = this.state, r = t[0], n = t[1], i = t[2], s = t[3], o = t[4], a = t[5], u = t[6], l = t[7], c = 0; c < 64; c++) {
                            if (c < 16) this.temp[c] = (255 & e[4 * c]) << 24 | (255 & e[4 * c + 1]) << 16 | (255 & e[4 * c + 2]) << 8 | 255 & e[4 * c + 3];
                            else {
                                var d = this.temp[c - 2],
                                    f = (d >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10,
                                    h = ((d = this.temp[c - 15]) >>> 7 | d << 25) ^ (d >>> 18 | d << 14) ^ d >>> 3;
                                this.temp[c] = (f + this.temp[c - 7] | 0) + (h + this.temp[c - 16] | 0)
                            }
                            var p = (((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + (o & a ^ ~o & u) | 0) + (l + (nW[c] + this.temp[c] | 0) | 0) | 0,
                                g = ((r >>> 2 | r << 30) ^ (r >>> 13 | r << 19) ^ (r >>> 22 | r << 10)) + (r & n ^ r & i ^ n & i) | 0;
                            l = u, u = a, a = o, o = s + p | 0, s = i, i = n, n = r, r = p + g | 0
                        }
                        t[0] += r, t[1] += n, t[2] += i, t[3] += s, t[4] += o, t[5] += a, t[6] += u, t[7] += l
                    }, e
                }(),
                nZ = function() {
                    function e(e) {
                        this.secret = e, this.hash = new nK, this.reset()
                    }
                    return e.prototype.update = function(e) {
                        if (!A(e) && !this.error) try {
                            this.hash.update(S(e))
                        } catch (e) {
                            this.error = e
                        }
                    }, e.prototype.digestSync = function() {
                        if (this.error) throw this.error;
                        return this.outer ? (this.outer.finished || this.outer.update(this.hash.digest()), this.outer.digest()) : this.hash.digest()
                    }, e.prototype.digest = function() {
                        return (0, b.mG)(this, void 0, void 0, function() {
                            return (0, b.Jh)(this, function(e) {
                                return [2, this.digestSync()]
                            })
                        })
                    }, e.prototype.reset = function() {
                        if (this.hash = new nK, this.secret) {
                            this.outer = new nK;
                            var e = function(e) {
                                    var t = S(e);
                                    if (t.byteLength > 64) {
                                        var r = new nK;
                                        r.update(t), t = r.digest()
                                    }
                                    var n = new Uint8Array(64);
                                    return n.set(t), n
                                }(this.secret),
                                t = new Uint8Array(64);
                            t.set(e);
                            for (var r = 0; r < 64; r++) e[r] ^= 54, t[r] ^= 92;
                            this.hash.update(e), this.outer.update(t);
                            for (var r = 0; r < e.byteLength; r++) e[r] = 0
                        }
                    }, e
                }(),
                nX = function() {
                    function e(e) {
                        nD(n_()) ? this.hash = new nV(e) : this.hash = new nZ(e)
                    }
                    return e.prototype.update = function(e, t) {
                        this.hash.update(S(e))
                    }, e.prototype.digest = function() {
                        return this.hash.digest()
                    }, e.prototype.reset = function() {
                        this.hash.reset()
                    }, e
                }(),
                nY = r(77160),
                nJ = r.n(nY);
            let nQ = ({
                serviceId: e,
                clientVersion: t
            }) => async () => {
                let r = "undefined" != typeof window && window ? .navigator ? .userAgent ? nJ().parse(window.navigator.userAgent) : void 0,
                    n = [
                        ["aws-sdk-js", t],
                        ["ua", "2.0"],
                        [`os/${r?.os?.name||"other"}`, r ? .os ? .version],
                        ["lang/js"],
                        ["md/browser", `${r?.browser?.name??"unknown"}_${r?.browser?.version??"unknown"}`]
                    ];
                return e && n.push([`api/${e}`, t]), n
            };
            var n0 = r(63202);
            class n1 {
                constructor(e) {
                    if (this.bytes = e, 8 !== e.byteLength) throw Error("Int64 buffers must be exactly 8 bytes")
                }
                static fromNumber(e) {
                    if (e > 0x7fffffffffffffff || e < -0x8000000000000000) throw Error(`${e} is too large (or, if negative, too small) to represent as an Int64`);
                    let t = new Uint8Array(8);
                    for (let r = 7, n = Math.abs(Math.round(e)); r > -1 && n > 0; r--, n /= 256) t[r] = n;
                    return e < 0 && n2(t), new n1(t)
                }
                valueOf() {
                    let e = this.bytes.slice(0),
                        t = 128 & e[0];
                    return t && n2(e), parseInt((0, n0.N)(e), 16) * (t ? -1 : 1)
                }
                toString() {
                    return String(this.valueOf())
                }
            }

            function n2(e) {
                for (let t = 0; t < 8; t++) e[t] ^= 255;
                for (let t = 7; t > -1 && (e[t]++, 0 === e[t]); t--);
            }
            class n3 {
                constructor(e, t) {
                    this.toUtf8 = e, this.fromUtf8 = t
                }
                format(e) {
                    let t = [];
                    for (let r of Object.keys(e)) {
                        let n = this.fromUtf8(r);
                        t.push(Uint8Array.from([n.byteLength]), n, this.formatHeaderValue(e[r]))
                    }
                    let r = new Uint8Array(t.reduce((e, t) => e + t.byteLength, 0)),
                        n = 0;
                    for (let e of t) r.set(e, n), n += e.byteLength;
                    return r
                }
                formatHeaderValue(e) {
                    switch (e.type) {
                        case "boolean":
                            return Uint8Array.from([e.value ? 0 : 1]);
                        case "byte":
                            return Uint8Array.from([2, e.value]);
                        case "short":
                            let t = new DataView(new ArrayBuffer(3));
                            return t.setUint8(0, 3), t.setInt16(1, e.value, !1), new Uint8Array(t.buffer);
                        case "integer":
                            let r = new DataView(new ArrayBuffer(5));
                            return r.setUint8(0, 4), r.setInt32(1, e.value, !1), new Uint8Array(r.buffer);
                        case "long":
                            let n = new Uint8Array(9);
                            return n[0] = 5, n.set(e.value.bytes, 1), n;
                        case "binary":
                            let i = new DataView(new ArrayBuffer(3 + e.value.byteLength));
                            i.setUint8(0, 6), i.setUint16(1, e.value.byteLength, !1);
                            let s = new Uint8Array(i.buffer);
                            return s.set(e.value, 3), s;
                        case "string":
                            let o = this.fromUtf8(e.value),
                                a = new DataView(new ArrayBuffer(3 + o.byteLength));
                            a.setUint8(0, 7), a.setUint16(1, o.byteLength, !1);
                            let u = new Uint8Array(a.buffer);
                            return u.set(o, 3), u;
                        case "timestamp":
                            let l = new Uint8Array(9);
                            return l[0] = 8, l.set(n1.fromNumber(e.value.valueOf()).bytes, 1), l;
                        case "uuid":
                            if (!ii.test(e.value)) throw Error(`Invalid UUID received: ${e.value}`);
                            let c = new Uint8Array(17);
                            return c[0] = 9, c.set((0, n0.H)(e.value.replace(/\-/g, "")), 1), c
                    }
                }
                parse(e) {
                    let t = {},
                        r = 0;
                    for (; r < e.byteLength;) {
                        let n = e.getUint8(r++),
                            i = this.toUtf8(new Uint8Array(e.buffer, e.byteOffset + r, n));
                        switch (r += n, e.getUint8(r++)) {
                            case 0:
                                t[i] = {
                                    type: n4,
                                    value: !0
                                };
                                break;
                            case 1:
                                t[i] = {
                                    type: n4,
                                    value: !1
                                };
                                break;
                            case 2:
                                t[i] = {
                                    type: n6,
                                    value: e.getInt8(r++)
                                };
                                break;
                            case 3:
                                t[i] = {
                                    type: n8,
                                    value: e.getInt16(r, !1)
                                }, r += 2;
                                break;
                            case 4:
                                t[i] = {
                                    type: n5,
                                    value: e.getInt32(r, !1)
                                }, r += 4;
                                break;
                            case 5:
                                t[i] = {
                                    type: n9,
                                    value: new n1(new Uint8Array(e.buffer, e.byteOffset + r, 8))
                                }, r += 8;
                                break;
                            case 6:
                                let s = e.getUint16(r, !1);
                                r += 2, t[i] = {
                                    type: n7,
                                    value: new Uint8Array(e.buffer, e.byteOffset + r, s)
                                }, r += s;
                                break;
                            case 7:
                                let o = e.getUint16(r, !1);
                                r += 2, t[i] = {
                                    type: ie,
                                    value: this.toUtf8(new Uint8Array(e.buffer, e.byteOffset + r, o))
                                }, r += o;
                                break;
                            case 8:
                                t[i] = {
                                    type: it,
                                    value: new Date(new n1(new Uint8Array(e.buffer, e.byteOffset + r, 8)).valueOf())
                                }, r += 8;
                                break;
                            case 9:
                                let a = new Uint8Array(e.buffer, e.byteOffset + r, 16);
                                r += 16, t[i] = {
                                    type: ir,
                                    value: `${(0,n0.N)(a.subarray(0,4))}-${(0,n0.N)(a.subarray(4,6))}-${(0,n0.N)(a.subarray(6,8))}-${(0,n0.N)(a.subarray(8,10))}-${(0,n0.N)(a.subarray(10))}`
                                };
                                break;
                            default:
                                throw Error("Unrecognized header type tag")
                        }
                    }
                    return t
                }
            }(l = h || (h = {}))[l.boolTrue = 0] = "boolTrue", l[l.boolFalse = 1] = "boolFalse", l[l.byte = 2] = "byte", l[l.short = 3] = "short", l[l.integer = 4] = "integer", l[l.long = 5] = "long", l[l.byteArray = 6] = "byteArray", l[l.string = 7] = "string", l[l.timestamp = 8] = "timestamp", l[l.uuid = 9] = "uuid";
            let n4 = "boolean",
                n6 = "byte",
                n8 = "short",
                n5 = "integer",
                n9 = "long",
                n7 = "binary",
                ie = "string",
                it = "timestamp",
                ir = "uuid",
                ii = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
            class is {
                constructor(e, t) {
                    this.headerMarshaller = new n3(e, t), this.messageBuffer = [], this.isEndOfStream = !1
                }
                feed(e) {
                    this.messageBuffer.push(this.decode(e))
                }
                endOfStream() {
                    this.isEndOfStream = !0
                }
                getMessage() {
                    let e = this.messageBuffer.pop(),
                        t = this.isEndOfStream;
                    return {
                        getMessage: () => e,
                        isEndOfStream: () => t
                    }
                }
                getAvailableMessages() {
                    let e = this.messageBuffer;
                    this.messageBuffer = [];
                    let t = this.isEndOfStream;
                    return {
                        getMessages: () => e,
                        isEndOfStream: () => t
                    }
                }
                encode({
                    headers: e,
                    body: t
                }) {
                    let r = this.headerMarshaller.format(e),
                        n = r.byteLength + t.byteLength + 16,
                        i = new Uint8Array(n),
                        s = new DataView(i.buffer, i.byteOffset, i.byteLength),
                        o = new P;
                    return s.setUint32(0, n, !1), s.setUint32(4, r.byteLength, !1), s.setUint32(8, o.update(i.subarray(0, 8)).digest(), !1), i.set(r, 12), i.set(t, r.byteLength + 12), s.setUint32(n - 4, o.update(i.subarray(8, n - 4)).digest(), !1), i
                }
                decode(e) {
                    let {
                        headers: t,
                        body: r
                    } = function({
                        byteLength: e,
                        byteOffset: t,
                        buffer: r
                    }) {
                        if (e < 16) throw Error("Provided message too short to accommodate event stream message overhead");
                        let n = new DataView(r, t, e),
                            i = n.getUint32(0, !1);
                        if (e !== i) throw Error("Reported message length does not match received message length");
                        let s = n.getUint32(4, !1),
                            o = n.getUint32(8, !1),
                            a = n.getUint32(e - 4, !1),
                            u = new P().update(new Uint8Array(r, t, 8));
                        if (o !== u.digest()) throw Error(`The prelude checksum specified in the message (${o}) does not match the calculated CRC32 checksum (${u.digest()})`);
                        if (u.update(new Uint8Array(r, t + 8, e - 12)), a !== u.digest()) throw Error(`The message checksum (${u.digest()}) did not match the expected value of ${a}`);
                        return {
                            headers: new DataView(r, t + 8 + 4, s),
                            body: new Uint8Array(r, t + 8 + 4 + s, i - s - 16)
                        }
                    }(e);
                    return {
                        headers: this.headerMarshaller.parse(t),
                        body: r
                    }
                }
                formatHeaders(e) {
                    return this.headerMarshaller.format(e)
                }
            }
            class io {
                constructor(e) {
                    this.options = e
                }[Symbol.asyncIterator]() {
                    return this.asyncIterator()
                }
                async * asyncIterator() {
                    for await (let e of this.options.inputStream) {
                        let t = this.options.decoder.decode(e);
                        yield t
                    }
                }
            }
            class ia {
                constructor(e) {
                    this.options = e
                }[Symbol.asyncIterator]() {
                    return this.asyncIterator()
                }
                async * asyncIterator() {
                    for await (let e of this.options.messageStream) {
                        let t = this.options.encoder.encode(e);
                        yield t
                    }
                    this.options.includeEndFrame && (yield new Uint8Array(0))
                }
            }
            class iu {
                constructor(e) {
                    this.options = e
                }[Symbol.asyncIterator]() {
                    return this.asyncIterator()
                }
                async * asyncIterator() {
                    for await (let e of this.options.messageStream) {
                        let t = await this.options.deserializer(e);
                        void 0 !== t && (yield t)
                    }
                }
            }
            class il {
                constructor(e) {
                    this.options = e
                }[Symbol.asyncIterator]() {
                    return this.asyncIterator()
                }
                async * asyncIterator() {
                    for await (let e of this.options.inputStream) {
                        let t = this.options.serializer(e);
                        yield t
                    }
                }
            }
            class ic {
                constructor({
                    utf8Encoder: e,
                    utf8Decoder: t
                }) {
                    this.eventStreamCodec = new is(e, t), this.utfEncoder = e
                }
                deserialize(e, t) {
                    var r;
                    return new iu({
                        messageStream: new io({
                            inputStream: function(e) {
                                let t = 0,
                                    r = 0,
                                    n = null,
                                    i = null,
                                    s = e => {
                                        if ("number" != typeof e) throw Error("Attempted to allocate an event message where size was not a number: " + e);
                                        t = e, r = 4, new DataView((n = new Uint8Array(e)).buffer).setUint32(0, e, !1)
                                    };
                                return {
                                    [Symbol.asyncIterator]: async function*() {
                                        let o = e[Symbol.asyncIterator]();
                                        for (;;) {
                                            let {
                                                value: e,
                                                done: a
                                            } = await o.next();
                                            if (a) {
                                                if (t) {
                                                    if (t === r) yield n;
                                                    else throw Error("Truncated event message received.")
                                                }
                                                return
                                            }
                                            let u = e.length,
                                                l = 0;
                                            for (; l < u;) {
                                                if (!n) {
                                                    let t = u - l;
                                                    i || (i = new Uint8Array(4));
                                                    let n = Math.min(4 - r, t);
                                                    if (i.set(e.slice(l, l + n), r), r += n, l += n, r < 4) break;
                                                    s(new DataView(i.buffer).getUint32(0, !1)), i = null
                                                }
                                                let o = Math.min(t - r, u - l);
                                                n.set(e.slice(l, l + o), r), r += o, l += o, t && t === r && (yield n, n = null, t = 0, r = 0)
                                            }
                                        }
                                    }
                                }
                            }(e),
                            decoder: this.eventStreamCodec
                        }),
                        deserializer: (r = this.utfEncoder, async function(e) {
                            let {
                                value: n
                            } = e.headers[":message-type"];
                            if ("error" === n) {
                                let t = Error(e.headers[":error-message"].value || "UnknownError");
                                throw t.name = e.headers[":error-code"].value, t
                            }
                            if ("exception" === n) {
                                let n = e.headers[":exception-type"].value,
                                    i = await t({
                                        [n]: e
                                    });
                                if (i.$unknown) {
                                    let t = Error(r(e.body));
                                    throw t.name = n, t
                                }
                                throw i[n]
                            }
                            if ("event" === n) {
                                let r = {
                                        [e.headers[":event-type"].value]: e
                                    },
                                    n = await t(r);
                                if (n.$unknown) return;
                                return n
                            }
                            throw Error(`Unrecognizable event type: ${e.headers[":event-type"].value}`)
                        })
                    })
                }
                serialize(e, t) {
                    return new ia({
                        messageStream: new il({
                            inputStream: e,
                            serializer: t
                        }),
                        encoder: this.eventStreamCodec,
                        includeEndFrame: !0
                    })
                }
            }
            let id = e => ({
                    [Symbol.asyncIterator]: async function*() {
                        let t = e.getReader();
                        try {
                            for (;;) {
                                let {
                                    done: e,
                                    value: r
                                } = await t.read();
                                if (e) return;
                                yield r
                            }
                        } finally {
                            t.releaseLock()
                        }
                    }
                }),
                ih = e => {
                    let t = e[Symbol.asyncIterator]();
                    return new ReadableStream({
                        async pull(e) {
                            let {
                                done: r,
                                value: n
                            } = await t.next();
                            if (r) return e.close();
                            e.enqueue(n)
                        }
                    })
                };
            class ip {
                constructor({
                    utf8Encoder: e,
                    utf8Decoder: t
                }) {
                    this.universalMarshaller = new ic({
                        utf8Decoder: t,
                        utf8Encoder: e
                    })
                }
                deserialize(e, t) {
                    let r = ig(e) ? id(e) : e;
                    return this.universalMarshaller.deserialize(r, t)
                }
                serialize(e, t) {
                    let r = this.universalMarshaller.serialize(e, t);
                    return "function" == typeof ReadableStream ? ih(r) : r
                }
            }
            let ig = e => "function" == typeof ReadableStream && e instanceof ReadableStream,
                im = e => new ip(e);
            var iy = r(69779);
            let ib = async function(e, t) {
                    let r = new e;
                    return await
                    function(e, t, r = 1048576) {
                        return new Promise((n, i) => {
                            let s = new FileReader;
                            s.addEventListener("error", i), s.addEventListener("abort", i);
                            let o = e.size,
                                a = 0;

                            function u() {
                                if (a >= o) {
                                    n();
                                    return
                                }
                                s.readAsArrayBuffer(e.slice(a, Math.min(o, a + r)))
                            }
                            s.addEventListener("load", e => {
                                let r = e.target.result;
                                t(new Uint8Array(r)), a += r.byteLength, u()
                            }), u()
                        })
                    }(t, e => {
                        r.update(e)
                    }), r.digest()
                },
                iw = e => () => Promise.reject(e);
            var iv = r(32033);
            let iS = [1732584193, 4023233417, 2562383102, 271733878];
            class iA {
                constructor() {
                    this.reset()
                }
                update(e) {
                    if ("string" == typeof e ? 0 === e.length : 0 === e.byteLength) return;
                    if (this.finished) throw Error("Attempted to update an already finished hash.");
                    let t = "string" == typeof e ? (0, iv.$)(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e),
                        r = 0,
                        {
                            byteLength: n
                        } = t;
                    for (this.bytesHashed += n; n > 0;) this.buffer.setUint8(this.bufferLength++, t[r++]), n--, 64 === this.bufferLength && (this.hashBuffer(), this.bufferLength = 0)
                }
                async digest() {
                    if (!this.finished) {
                        let {
                            buffer: e,
                            bufferLength: t,
                            bytesHashed: r
                        } = this, n = 8 * r;
                        if (e.setUint8(this.bufferLength++, 128), t % 64 >= 56) {
                            for (let t = this.bufferLength; t < 64; t++) e.setUint8(t, 0);
                            this.hashBuffer(), this.bufferLength = 0
                        }
                        for (let t = this.bufferLength; t < 56; t++) e.setUint8(t, 0);
                        e.setUint32(56, n >>> 0, !0), e.setUint32(60, Math.floor(n / 4294967296), !0), this.hashBuffer(), this.finished = !0
                    }
                    let e = new DataView(new ArrayBuffer(16));
                    for (let t = 0; t < 4; t++) e.setUint32(4 * t, this.state[t], !0);
                    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
                }
                hashBuffer() {
                    let {
                        buffer: e,
                        state: t
                    } = this, r = t[0], n = t[1], i = t[2], s = t[3];
                    r = ix(r, n, i, s, e.getUint32(0, !0), 7, 3614090360), s = ix(s, r, n, i, e.getUint32(4, !0), 12, 3905402710), i = ix(i, s, r, n, e.getUint32(8, !0), 17, 606105819), n = ix(n, i, s, r, e.getUint32(12, !0), 22, 3250441966), r = ix(r, n, i, s, e.getUint32(16, !0), 7, 4118548399), s = ix(s, r, n, i, e.getUint32(20, !0), 12, 1200080426), i = ix(i, s, r, n, e.getUint32(24, !0), 17, 2821735955), n = ix(n, i, s, r, e.getUint32(28, !0), 22, 4249261313), r = ix(r, n, i, s, e.getUint32(32, !0), 7, 1770035416), s = ix(s, r, n, i, e.getUint32(36, !0), 12, 2336552879), i = ix(i, s, r, n, e.getUint32(40, !0), 17, 4294925233), n = ix(n, i, s, r, e.getUint32(44, !0), 22, 2304563134), r = ix(r, n, i, s, e.getUint32(48, !0), 7, 1804603682), s = ix(s, r, n, i, e.getUint32(52, !0), 12, 4254626195), i = ix(i, s, r, n, e.getUint32(56, !0), 17, 2792965006), n = ix(n, i, s, r, e.getUint32(60, !0), 22, 1236535329), r = iP(r, n, i, s, e.getUint32(4, !0), 5, 4129170786), s = iP(s, r, n, i, e.getUint32(24, !0), 9, 3225465664), i = iP(i, s, r, n, e.getUint32(44, !0), 14, 643717713), n = iP(n, i, s, r, e.getUint32(0, !0), 20, 3921069994), r = iP(r, n, i, s, e.getUint32(20, !0), 5, 3593408605), s = iP(s, r, n, i, e.getUint32(40, !0), 9, 38016083), i = iP(i, s, r, n, e.getUint32(60, !0), 14, 3634488961), n = iP(n, i, s, r, e.getUint32(16, !0), 20, 3889429448), r = iP(r, n, i, s, e.getUint32(36, !0), 5, 568446438), s = iP(s, r, n, i, e.getUint32(56, !0), 9, 3275163606), i = iP(i, s, r, n, e.getUint32(12, !0), 14, 4107603335), n = iP(n, i, s, r, e.getUint32(32, !0), 20, 1163531501), r = iP(r, n, i, s, e.getUint32(52, !0), 5, 2850285829), s = iP(s, r, n, i, e.getUint32(8, !0), 9, 4243563512), i = iP(i, s, r, n, e.getUint32(28, !0), 14, 1735328473), n = iP(n, i, s, r, e.getUint32(48, !0), 20, 2368359562), r = iR(r, n, i, s, e.getUint32(20, !0), 4, 4294588738), s = iR(s, r, n, i, e.getUint32(32, !0), 11, 2272392833), i = iR(i, s, r, n, e.getUint32(44, !0), 16, 1839030562), n = iR(n, i, s, r, e.getUint32(56, !0), 23, 4259657740), r = iR(r, n, i, s, e.getUint32(4, !0), 4, 2763975236), s = iR(s, r, n, i, e.getUint32(16, !0), 11, 1272893353), i = iR(i, s, r, n, e.getUint32(28, !0), 16, 4139469664), n = iR(n, i, s, r, e.getUint32(40, !0), 23, 3200236656), r = iR(r, n, i, s, e.getUint32(52, !0), 4, 681279174), s = iR(s, r, n, i, e.getUint32(0, !0), 11, 3936430074), i = iR(i, s, r, n, e.getUint32(12, !0), 16, 3572445317), n = iR(n, i, s, r, e.getUint32(24, !0), 23, 76029189), r = iR(r, n, i, s, e.getUint32(36, !0), 4, 3654602809), s = iR(s, r, n, i, e.getUint32(48, !0), 11, 3873151461), i = iR(i, s, r, n, e.getUint32(60, !0), 16, 530742520), n = iR(n, i, s, r, e.getUint32(8, !0), 23, 3299628645), r = ik(r, n, i, s, e.getUint32(0, !0), 6, 4096336452), s = ik(s, r, n, i, e.getUint32(28, !0), 10, 1126891415), i = ik(i, s, r, n, e.getUint32(56, !0), 15, 2878612391), n = ik(n, i, s, r, e.getUint32(20, !0), 21, 4237533241), r = ik(r, n, i, s, e.getUint32(48, !0), 6, 1700485571), s = ik(s, r, n, i, e.getUint32(12, !0), 10, 2399980690), i = ik(i, s, r, n, e.getUint32(40, !0), 15, 4293915773), n = ik(n, i, s, r, e.getUint32(4, !0), 21, 2240044497), r = ik(r, n, i, s, e.getUint32(32, !0), 6, 1873313359), s = ik(s, r, n, i, e.getUint32(60, !0), 10, 4264355552), i = ik(i, s, r, n, e.getUint32(24, !0), 15, 2734768916), n = ik(n, i, s, r, e.getUint32(52, !0), 21, 1309151649), r = ik(r, n, i, s, e.getUint32(16, !0), 6, 4149444226), s = ik(s, r, n, i, e.getUint32(44, !0), 10, 3174756917), i = ik(i, s, r, n, e.getUint32(8, !0), 15, 718787259), n = ik(n, i, s, r, e.getUint32(36, !0), 21, 3951481745), t[0] = r + t[0] & 4294967295, t[1] = n + t[1] & 4294967295, t[2] = i + t[2] & 4294967295, t[3] = s + t[3] & 4294967295
                }
                reset() {
                    this.state = Uint32Array.from(iS), this.buffer = new DataView(new ArrayBuffer(64)), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1
                }
            }

            function iE(e, t, r, n, i, s) {
                return ((t = (t + e & 4294967295) + (n + s & 4294967295) & 4294967295) << i | t >>> 32 - i) + r & 4294967295
            }

            function ix(e, t, r, n, i, s, o) {
                return iE(t & r | ~t & n, e, t, i, s, o)
            }

            function iP(e, t, r, n, i, s, o) {
                return iE(t & n | r & ~n, e, t, i, s, o)
            }

            function iR(e, t, r, n, i, s, o) {
                return iE(t ^ r ^ n, e, t, i, s, o)
            }

            function ik(e, t, r, n, i, s, o) {
                return iE(r ^ (t | ~n), e, t, i, s, o)
            }
            let iT = "function" == typeof TextEncoder ? new TextEncoder : null,
                iN = e => {
                    if ("string" == typeof e) {
                        if (iT) return iT.encode(e).byteLength;
                        let t = e.length;
                        for (let r = t - 1; r >= 0; r--) {
                            let n = e.charCodeAt(r);
                            n > 127 && n <= 2047 ? t++ : n > 2047 && n <= 65535 && (t += 2), n >= 56320 && n <= 57343 && r--
                        }
                        return t
                    }
                    if ("number" == typeof e.byteLength) return e.byteLength;
                    if ("number" == typeof e.size) return e.size;
                    throw Error(`Body Length computation failed for ${e}`)
                };
            var iM = r(4367);
            let iC = e => new Date(Date.now() + e),
                iO = e => p.Zn.isInstance(e) ? e.headers ? .date ? ? e.headers ? .Date : void 0,
                iI = (e, t) => Math.abs(iC(t).getTime() - e) >= 3e5,
                iU = (e, t) => {
                    let r = Date.parse(e);
                    return iI(r, t) ? r - Date.now() : t
                },
                i$ = (e, t) => {
                    if (!t) throw Error(`Property \`${e}\` is not resolved for AWS SDK SigV4Auth`);
                    return t
                },
                i_ = async e => {
                    let t = i$("context", e.context),
                        r = i$("config", e.config),
                        n = t.endpointV2 ? .properties ? .authSchemes ? .[0],
                        i = i$("signer", r.signer),
                        s = await i(n);
                    return {
                        config: r,
                        signer: s,
                        signingRegion: e ? .signingRegion,
                        signingRegionSet: e ? .signingRegionSet,
                        signingName: e ? .signingName
                    }
                };
            class iF {
                async sign(e, t, r) {
                    if (!p.aW.isInstance(e)) throw Error("The request is not an instance of `HttpRequest` and cannot be signed");
                    let n = await i_(r),
                        {
                            config: i,
                            signer: s
                        } = n,
                        {
                            signingRegion: o,
                            signingName: a
                        } = n,
                        u = r.context;
                    if (u ? .authSchemes ? .length) {
                        let [e, t] = u.authSchemes;
                        e ? .name === "sigv4a" && t ? .name === "sigv4" && (o = t ? .signingRegion ? ? o, a = t ? .signingName ? ? a)
                    }
                    return await s.sign(e, {
                        signingDate: iC(i.systemClockOffset),
                        signingRegion: o,
                        signingService: a
                    })
                }
                errorHandler(e) {
                    return t => {
                        let r = t.ServerTime ? ? iO(t.$response);
                        if (r) {
                            let n = i$("config", e.config),
                                i = n.systemClockOffset;
                            n.systemClockOffset = iU(r, n.systemClockOffset), n.systemClockOffset !== i && t.$metadata && (t.$metadata.clockSkewCorrected = !0)
                        }
                        throw t
                    }
                }
                successHandler(e, t) {
                    let r = iO(e);
                    if (r) {
                        let e = i$("config", t.config);
                        e.systemClockOffset = iU(r, e.systemClockOffset)
                    }
                }
            }
            class iL extends iF {
                async sign(e, t, r) {
                    if (!p.aW.isInstance(e)) throw Error("The request is not an instance of `HttpRequest` and cannot be signed");
                    let {
                        config: n,
                        signer: i,
                        signingRegion: s,
                        signingRegionSet: o,
                        signingName: a
                    } = await i_(r), u = (await n.sigv4aSigningRegionSet ? .() ? ? o ? ? [s]).join(",");
                    return await i.sign(e, {
                        signingDate: iC(n.systemClockOffset),
                        signingRegion: u,
                        signingService: a
                    })
                }
            }
            var iB = r(76884),
                iD = r(5177),
                ij = r(84098),
                iH = r(98826);
            let iq = e => ({
                    apiVersion: "2006-03-01",
                    base64Decoder: e ? .base64Decoder ? ? iD.G,
                    base64Encoder: e ? .base64Encoder ? ? iD.s,
                    disableHostPrefix: e ? .disableHostPrefix ? ? !1,
                    endpointProvider: e ? .endpointProvider ? ? nb,
                    extensions: e ? .extensions ? ? [],
                    getAwsChunkedEncodingStream: e ? .getAwsChunkedEncodingStream ? ? ij.LN,
                    httpAuthSchemeProvider: e ? .httpAuthSchemeProvider ? ? nA,
                    httpAuthSchemes: e ? .httpAuthSchemes ? ? [{
                        schemeId: "aws.auth#sigv4",
                        identityProvider: e => e.getIdentityProvider("aws.auth#sigv4"),
                        signer: new iF
                    }, {
                        schemeId: "aws.auth#sigv4a",
                        identityProvider: e => e.getIdentityProvider("aws.auth#sigv4a"),
                        signer: new iL
                    }],
                    logger: e ? .logger ? ? new eD.vk,
                    sdkStreamMixin: e ? .sdkStreamMixin ? ? ij.Ou,
                    serviceId: e ? .serviceId ? ? "S3",
                    signerConstructor: e ? .signerConstructor ? ? eW,
                    signingEscapePath: e ? .signingEscapePath ? ? !1,
                    urlParser: e ? .urlParser ? ? iB.e,
                    useArnRegion: e ? .useArnRegion ? ? !1,
                    utf8Decoder: e ? .utf8Decoder ? ? iv.$,
                    utf8Encoder: e ? .utf8Encoder ? ? iH.G
                }),
                iz = ["in-region", "cross-region", "mobile", "standard", "legacy"],
                iV = ({
                    defaultsMode: e
                } = {}) => eq(async () => {
                    let t = "function" == typeof e ? await e() : e;
                    switch (t ? .toLowerCase()) {
                        case "auto":
                            return Promise.resolve(iW() ? "mobile" : "standard");
                        case "mobile":
                        case "in-region":
                        case "cross-region":
                        case "standard":
                        case "legacy":
                            return Promise.resolve(t ? .toLocaleLowerCase());
                        case void 0:
                            return Promise.resolve("legacy");
                        default:
                            throw Error(`Invalid parameter for "defaultsMode", expect ${iz.join(", ")}, got ${t}`)
                    }
                }),
                iW = () => {
                    let e = "undefined" != typeof window && window ? .navigator ? .userAgent ? nJ().parse(window.navigator.userAgent) : void 0,
                        t = e ? .platform ? .type;
                    return "tablet" === t || "mobile" === t
                },
                iG = e => {
                    let t = iV(e),
                        r = () => t().then(eD.jv),
                        n = iq(e);
                    return { ...n,
                        ...e,
                        runtime: "browser",
                        defaultsMode: t,
                        bodyLengthChecker: e ? .bodyLengthChecker ? ? iN,
                        credentialDefaultProvider: e ? .credentialDefaultProvider ? ? (e => () => Promise.reject(Error("Credential is missing"))),
                        defaultUserAgentProvider: e ? .defaultUserAgentProvider ? ? nQ({
                            serviceId: n.serviceId,
                            clientVersion: nN.i8
                        }),
                        eventStreamSerdeProvider: e ? .eventStreamSerdeProvider ? ? im,
                        maxAttempts: e ? .maxAttempts ? ? iM.J,
                        md5: e ? .md5 ? ? iA,
                        region: e ? .region ? ? iw("Region is missing"),
                        requestHandler: iy.BX.create(e ? .requestHandler ? ? r),
                        retryMode: e ? .retryMode ? ? (async () => (await r()).retryMode || iM.CA),
                        sha1: e ? .sha1 ? ? nj,
                        sha256: e ? .sha256 ? ? nX,
                        streamCollector: e ? .streamCollector ? ? iy.CF,
                        streamHasher: e ? .streamHasher ? ? ib,
                        useDualstackEndpoint: e ? .useDualstackEndpoint ? ? (() => Promise.resolve(!1)),
                        useFipsEndpoint: e ? .useFipsEndpoint ? ? (() => Promise.resolve(!1))
                    }
                },
                iK = e => {
                    let t = async () => {
                        if (void 0 === e.region) throw Error("Region is missing from runtimeConfig");
                        let t = e.region;
                        return "string" == typeof t ? t : t()
                    };
                    return {
                        setRegion(e) {
                            t = e
                        },
                        region: () => t
                    }
                },
                iZ = e => ({
                    region: e.region()
                }),
                iX = e => {
                    let t = e.httpAuthSchemes,
                        r = e.httpAuthSchemeProvider,
                        n = e.credentials;
                    return {
                        setHttpAuthScheme(e) {
                            let r = t.findIndex(t => t.schemeId === e.schemeId); - 1 === r ? t.push(e) : t.splice(r, 1, e)
                        },
                        httpAuthSchemes: () => t,
                        setHttpAuthSchemeProvider(e) {
                            r = e
                        },
                        httpAuthSchemeProvider: () => r,
                        setCredentials(e) {
                            n = e
                        },
                        credentials: () => n
                    }
                },
                iY = e => ({
                    httpAuthSchemes: e.httpAuthSchemes(),
                    httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
                    credentials: e.credentials()
                }),
                iJ = e => e,
                iQ = (e, t) => {
                    let r = { ...iJ(iK(e)),
                        ...iJ((0, eD.kE)(e)),
                        ...iJ((0, p.cA)(e)),
                        ...iJ(iX(e))
                    };
                    return t.forEach(e => e.configure(r)), { ...e,
                        ...iZ(r),
                        ...(0, eD.SQ)(r),
                        ...(0, p.AO)(r),
                        ...iY(r)
                    }
                };
            class i0 extends eD.KU {
                constructor(...[e]) {
                    var t;
                    let r = iG(e || {}),
                        n = M({ ...t = (0, nP.z)(r),
                            customUserAgent: "string" == typeof t.customUserAgent ? [
                                [t.customUserAgent]
                            ] : t.customUserAgent
                        }),
                        i = eO((0, eB.BC)(n)),
                        s = nE(eU((0, eL.uW)(i))),
                        o = iQ((0, H.x4)(s, {
                            session: [() => this, nT]
                        }), e ? .extensions || []);
                    super(o), this.config = o, this.middlewareStack.use(eN(this.config)), this.middlewareStack.use((0, eB.NQ)(this.config)), this.middlewareStack.use(eF(this.config)), this.middlewareStack.use(I(this.config)), this.middlewareStack.use(_(this.config)), this.middlewareStack.use(j(this.config)), this.middlewareStack.use((0, eI.tZ)(this.config, {
                        httpAuthSchemeParametersProvider: nw,
                        identityProviderConfigProvider: async e => new eI.K5({
                            "aws.auth#sigv4": e.credentials,
                            "aws.auth#sigv4a": e.credentials
                        })
                    })), this.middlewareStack.use((0, eI.aZ)(this.config)), this.middlewareStack.use((0, H.D4)(this.config)), this.middlewareStack.use(m(this.config)), this.middlewareStack.use((0, H.Ae)(this.config)), this.middlewareStack.use((0, H.nd)(this.config)), this.middlewareStack.use((0, H.JB)(this.config))
                }
                destroy() {
                    super.destroy()
                }
            }
        },
        18674: function(e, t, r) {
            "use strict";
            r.d(t, {
                q: function() {
                    return i
                },
                z: function() {
                    return n
                }
            });
            let n = e => ({ ...e,
                    useFipsEndpoint: e.useFipsEndpoint ? ? !1,
                    useDualstackEndpoint: e.useDualstackEndpoint ? ? !1,
                    forcePathStyle: e.forcePathStyle ? ? !1,
                    useAccelerateEndpoint: e.useAccelerateEndpoint ? ? !1,
                    useGlobalEndpoint: e.useGlobalEndpoint ? ? !1,
                    disableMultiregionAccessPoints: e.disableMultiregionAccessPoints ? ? !1,
                    defaultSigningName: "s3"
                }),
                i = {
                    ForcePathStyle: {
                        type: "clientContextParams",
                        name: "forcePathStyle"
                    },
                    UseArnRegion: {
                        type: "clientContextParams",
                        name: "useArnRegion"
                    },
                    DisableMultiRegionAccessPoints: {
                        type: "clientContextParams",
                        name: "disableMultiregionAccessPoints"
                    },
                    Accelerate: {
                        type: "clientContextParams",
                        name: "useAccelerateEndpoint"
                    },
                    DisableS3ExpressSessionAuth: {
                        type: "clientContextParams",
                        name: "disableS3ExpressSessionAuth"
                    },
                    UseGlobalEndpoint: {
                        type: "builtInParams",
                        name: "useGlobalEndpoint"
                    },
                    UseFIPS: {
                        type: "builtInParams",
                        name: "useFipsEndpoint"
                    },
                    Endpoint: {
                        type: "builtInParams",
                        name: "endpoint"
                    },
                    Region: {
                        type: "builtInParams",
                        name: "region"
                    },
                    UseDualStack: {
                        type: "builtInParams",
                        name: "useDualstackEndpoint"
                    }
                }
        },
        98632: function(e, t, r) {
            "use strict";
            r.d(t, {
                K0W: function() {
                    return l
                }
            });
            var n = r(13426),
                i = r(25613),
                s = r(31131),
                o = r(54095),
                a = r(18674),
                u = r(47623);
            class l extends o.mY.classBuilder().ep({ ...a.q,
                Bucket: {
                    type: "contextParams",
                    name: "Bucket"
                },
                Prefix: {
                    type: "contextParams",
                    name: "Prefix"
                }
            }).m(function(e, t, r, o) {
                return [(0, s.p2)(r, this.serialize, this.deserialize), (0, i.a3)(r, e.getEndpointParameterInstructions()), (0, n.mS)(r)]
            }).s("AmazonS3", "ListObjectsV2", {}).n("S3Client", "ListObjectsV2Command").f(void 0, void 0).ser(u.w6X).de(u.zrS).build() {}
        },
        47250: function(e, t, r) {
            "use strict";
            r.d(t, {
                k: function() {
                    return i
                }
            });
            var n = r(54095);
            class i extends n.sI {
                constructor(e) {
                    super(e), Object.setPrototypeOf(this, i.prototype)
                }
            }
        },
        39866: function(e, t, r) {
            "use strict";
            r.d(t, {
                M0: function() {
                    return f
                },
                NW: function() {
                    return w
                },
                SH: function() {
                    return d
                },
                TX: function() {
                    return m
                },
                Vn: function() {
                    return c
                },
                Yw: function() {
                    return g
                },
                ZF: function() {
                    return b
                },
                mn: function() {
                    return h
                },
                oN: function() {
                    return p
                },
                wi: function() {
                    return l
                }
            });
            var n, i, s, o, a = r(54095),
                u = r(47250);
            class l extends u.k {
                constructor(e) {
                    super({
                        name: "NoSuchUpload",
                        $fault: "client",
                        ...e
                    }), this.name = "NoSuchUpload", this.$fault = "client", Object.setPrototypeOf(this, l.prototype)
                }
            }
            class c extends u.k {
                constructor(e) {
                    super({
                        name: "ObjectNotInActiveTierError",
                        $fault: "client",
                        ...e
                    }), this.name = "ObjectNotInActiveTierError", this.$fault = "client", Object.setPrototypeOf(this, c.prototype)
                }
            }
            class d extends u.k {
                constructor(e) {
                    super({
                        name: "BucketAlreadyExists",
                        $fault: "client",
                        ...e
                    }), this.name = "BucketAlreadyExists", this.$fault = "client", Object.setPrototypeOf(this, d.prototype)
                }
            }
            class f extends u.k {
                constructor(e) {
                    super({
                        name: "BucketAlreadyOwnedByYou",
                        $fault: "client",
                        ...e
                    }), this.name = "BucketAlreadyOwnedByYou", this.$fault = "client", Object.setPrototypeOf(this, f.prototype)
                }
            }
            class h extends u.k {
                constructor(e) {
                    super({
                        name: "NoSuchBucket",
                        $fault: "client",
                        ...e
                    }), this.name = "NoSuchBucket", this.$fault = "client", Object.setPrototypeOf(this, h.prototype)
                }
            }(n || (n = {})).visit = (e, t) => void 0 !== e.Prefix ? t.Prefix(e.Prefix) : void 0 !== e.Tag ? t.Tag(e.Tag) : void 0 !== e.And ? t.And(e.And) : t._(e.$unknown[0], e.$unknown[1]), (i || (i = {})).visit = (e, t) => void 0 !== e.Prefix ? t.Prefix(e.Prefix) : void 0 !== e.Tag ? t.Tag(e.Tag) : void 0 !== e.ObjectSizeGreaterThan ? t.ObjectSizeGreaterThan(e.ObjectSizeGreaterThan) : void 0 !== e.ObjectSizeLessThan ? t.ObjectSizeLessThan(e.ObjectSizeLessThan) : void 0 !== e.And ? t.And(e.And) : t._(e.$unknown[0], e.$unknown[1]), (s || (s = {})).visit = (e, t) => void 0 !== e.Prefix ? t.Prefix(e.Prefix) : void 0 !== e.Tag ? t.Tag(e.Tag) : void 0 !== e.AccessPointArn ? t.AccessPointArn(e.AccessPointArn) : void 0 !== e.And ? t.And(e.And) : t._(e.$unknown[0], e.$unknown[1]), (o || (o = {})).visit = (e, t) => void 0 !== e.Prefix ? t.Prefix(e.Prefix) : void 0 !== e.Tag ? t.Tag(e.Tag) : void 0 !== e.And ? t.And(e.And) : t._(e.$unknown[0], e.$unknown[1]);
            class p extends u.k {
                constructor(e) {
                    super({
                        name: "InvalidObjectState",
                        $fault: "client",
                        ...e
                    }), this.name = "InvalidObjectState", this.$fault = "client", Object.setPrototypeOf(this, p.prototype), this.StorageClass = e.StorageClass, this.AccessTier = e.AccessTier
                }
            }
            class g extends u.k {
                constructor(e) {
                    super({
                        name: "NoSuchKey",
                        $fault: "client",
                        ...e
                    }), this.name = "NoSuchKey", this.$fault = "client", Object.setPrototypeOf(this, g.prototype)
                }
            }
            class m extends u.k {
                constructor(e) {
                    super({
                        name: "NotFound",
                        $fault: "client",
                        ...e
                    }), this.name = "NotFound", this.$fault = "client", Object.setPrototypeOf(this, m.prototype)
                }
            }
            let y = e => ({ ...e,
                    ...e.SecretAccessKey && {
                        SecretAccessKey: a.oc
                    },
                    ...e.SessionToken && {
                        SessionToken: a.oc
                    }
                }),
                b = e => ({ ...e,
                    ...e.SSEKMSKeyId && {
                        SSEKMSKeyId: a.oc
                    },
                    ...e.SSEKMSEncryptionContext && {
                        SSEKMSEncryptionContext: a.oc
                    },
                    ...e.Credentials && {
                        Credentials: y(e.Credentials)
                    }
                }),
                w = e => ({ ...e,
                    ...e.SSEKMSKeyId && {
                        SSEKMSKeyId: a.oc
                    },
                    ...e.SSEKMSEncryptionContext && {
                        SSEKMSEncryptionContext: a.oc
                    }
                })
        },
        55506: function(e, t, r) {
            "use strict";
            r.d(t, {
                T8: function() {
                    return s
                }
            }), r(54095);
            var n, i = r(47250);
            class s extends i.k {
                constructor(e) {
                    super({
                        name: "ObjectAlreadyInActiveTierError",
                        $fault: "client",
                        ...e
                    }), this.name = "ObjectAlreadyInActiveTierError", this.$fault = "client", Object.setPrototypeOf(this, s.prototype)
                }
            }(n || (n = {})).visit = (e, t) => void 0 !== e.Records ? t.Records(e.Records) : void 0 !== e.Stats ? t.Stats(e.Stats) : void 0 !== e.Progress ? t.Progress(e.Progress) : void 0 !== e.Cont ? t.Cont(e.Cont) : void 0 !== e.End ? t.End(e.End) : t._(e.$unknown[0], e.$unknown[1])
        },
        41831: function(e, t, r) {
            "use strict";
            r.d(t, {
                Js: function() {
                    return u
                },
                he: function() {
                    return o
                },
                OH: function() {
                    return a
                }
            });
            var n = r(54095),
                i = r(22215);
            let s = (e, t) => (0, n.Wg)(e, t).then(e => t.utf8Encoder(e)),
                o = (e, t) => s(e, t).then(e => {
                    if (e.length) {
                        let t;
                        let r = new i.XMLParser({
                            attributeNamePrefix: "",
                            htmlEntities: !0,
                            ignoreAttributes: !1,
                            ignoreDeclaration: !0,
                            parseTagValue: !1,
                            trimValues: !1,
                            tagValueProcessor: (e, t) => "" === t.trim() && t.includes("\n") ? "" : void 0
                        });
                        r.addEntity("#xD", "\r"), r.addEntity("#10", "\n");
                        try {
                            t = r.parse(e, !0)
                        } catch (t) {
                            throw t && "object" == typeof t && Object.defineProperty(t, "$responseBodyText", {
                                value: e
                            }), t
                        }
                        let s = "#text",
                            o = Object.keys(t)[0],
                            a = t[o];
                        return a[s] && (a[o] = a[s], delete a[s]), (0, n.sT)(a)
                    }
                    return {}
                }),
                a = async (e, t) => {
                    let r = await o(e, t);
                    return r.Error && (r.Error.message = r.Error.message ? ? r.Error.Message), r
                },
                u = (e, t) => t ? .Error ? .Code !== void 0 ? t.Error.Code : t ? .Code !== void 0 ? t.Code : 404 == e.statusCode ? "NotFound" : void 0
        },
        13426: function(e, t, r) {
            "use strict";
            r.d(t, {
                $I: function() {
                    return p
                },
                Ae: function() {
                    return a
                },
                JB: function() {
                    return R
                },
                nd: function() {
                    return w
                },
                mS: function() {
                    return I
                },
                D4: function() {
                    return F
                },
                x4: function() {
                    return k
                }
            });
            var n = r(85660);
            r(54095);
            let i = e => (t, r) => async n => {
                    let i = await e.region(),
                        s = e.region,
                        o = () => {};
                    r.__s3RegionRedirect && (Object.defineProperty(e, "region", {
                        writable: !1,
                        value: async () => r.__s3RegionRedirect
                    }), o = () => Object.defineProperty(e, "region", {
                        writable: !0,
                        value: s
                    }));
                    try {
                        let s = await t(n);
                        if (r.__s3RegionRedirect) {
                            o();
                            let t = await e.region();
                            if (i !== t) throw Error("Region was not restored following S3 region redirect.")
                        }
                        return s
                    } catch (e) {
                        throw o(), e
                    }
                },
                s = {
                    tags: ["REGION_REDIRECT", "S3"],
                    name: "regionRedirectEndpointMiddleware",
                    override: !0,
                    relation: "before",
                    toMiddleware: "endpointV2Middleware"
                },
                o = {
                    step: "initialize",
                    tags: ["REGION_REDIRECT", "S3"],
                    name: "regionRedirectMiddleware",
                    override: !0
                },
                a = e => ({
                    applyToStack: t => {
                        t.add((t, r) => async n => {
                            try {
                                return await t(n)
                            } catch (i) {
                                if (e.followRegionRedirects && i ? .$metadata ? .httpStatusCode === 301) {
                                    try {
                                        let t = i.$response.headers["x-amz-bucket-region"];
                                        r.logger ? .debug(`Redirecting from ${await e.region()} to ${t}`), r.__s3RegionRedirect = t
                                    } catch (e) {
                                        throw Error("Region redirect failed: " + e)
                                    }
                                    return t(n)
                                }
                                throw i
                            }
                        }, o), t.addRelativeTo(i(e), s)
                    }
                });
            class u {
                constructor(e = {}) {
                    this.data = e, this.lastPurgeTime = Date.now()
                }
                get(e) {
                    let t = this.data[e];
                    if (t) return t
                }
                set(e, t) {
                    return this.data[e] = t, t
                }
                delete(e) {
                    delete this.data[e]
                }
                async purgeExpired() {
                    let e = Date.now();
                    if (!(this.lastPurgeTime + u.EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS > e))
                        for (let t in this.data) {
                            let r = this.data[t];
                            if (!r.isRefreshing) {
                                let n = await r.identity;
                                n.expiration && n.expiration.getTime() < e && delete this.data[t]
                            }
                        }
                }
            }
            u.EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS = 3e4;
            class l {
                constructor(e, t = !1, r = Date.now()) {
                    this._identity = e, this.isRefreshing = t, this.accessed = r
                }
                get identity() {
                    return this.accessed = Date.now(), this._identity
                }
            }
            class c {
                constructor(e, t = new u) {
                    this.createSessionFn = e, this.cache = t
                }
                async getS3ExpressIdentity(e, t) {
                    let r = t.Bucket,
                        {
                            cache: n
                        } = this,
                        i = n.get(r);
                    return i ? i.identity.then(e => (e.expiration ? .getTime() ? ? 0) < Date.now() ? n.set(r, new l(this.getIdentity(r))).identity : ((e.expiration ? .getTime() ? ? 0) < Date.now() + c.REFRESH_WINDOW_MS && !i.isRefreshing && (i.isRefreshing = !0, this.getIdentity(r).then(e => {
                        n.set(r, new l(Promise.resolve(e)))
                    })), e)) : n.set(r, new l(this.getIdentity(r))).identity
                }
                async getIdentity(e) {
                    await this.cache.purgeExpired().catch(e => {
                        console.warn("Error while clearing expired entries in S3ExpressIdentityCache: \n" + e)
                    });
                    let t = await this.createSessionFn(e);
                    if (!t.Credentials ? .AccessKeyId || !t.Credentials ? .SecretAccessKey) throw Error("s3#createSession response credential missing AccessKeyId or SecretAccessKey.");
                    return {
                        accessKeyId: t.Credentials.AccessKeyId,
                        secretAccessKey: t.Credentials.SecretAccessKey,
                        sessionToken: t.Credentials.SessionToken,
                        expiration: t.Credentials.Expiration ? new Date(t.Credentials.Expiration) : void 0
                    }
                }
            }
            c.REFRESH_WINDOW_MS = 6e4;
            var d = r(86231);
            r(28916);
            let f = "X-Amz-S3session-Token",
                h = f.toLowerCase();
            class p extends d.L1 {
                async signWithCredentials(e, t, r) {
                    let n = g(t);
                    return e.headers[h] = t.sessionToken, m(this, n), this.signRequest(e, r ? ? {})
                }
                async presignWithCredentials(e, t, r) {
                    let n = g(t);
                    return delete e.headers[h], e.headers[f] = t.sessionToken, e.query = e.query ? ? {}, e.query[f] = t.sessionToken, m(this, n), this.presign(e, r)
                }
            }

            function g(e) {
                return {
                    accessKeyId: e.accessKeyId,
                    secretAccessKey: e.secretAccessKey,
                    expiration: e.expiration
                }
            }

            function m(e, t) {
                let r = setTimeout(() => {
                        throw Error("SignatureV4S3Express credential override was created but not called.")
                    }, 10),
                    n = e.credentialProvider;
                e.credentialProvider = () => (clearTimeout(r), e.credentialProvider = n, Promise.resolve(t))
            }
            let y = e => (t, r) => async i => {
                    if (r.endpointV2) {
                        let t = r.endpointV2,
                            s = t.properties ? .authSchemes ? .[0] ? .name === "sigv4-s3express";
                        if ((t.properties ? .backend === "S3Express" || t.properties ? .bucketType === "Directory") && (r.isS3ExpressBucket = !0), s) {
                            let t = i.input.Bucket;
                            if (t) {
                                let s = await e.s3ExpressIdentityProvider.getS3ExpressIdentity(await e.credentials(), {
                                    Bucket: t
                                });
                                r.s3ExpressIdentity = s, n.aW.isInstance(i.request) && s.sessionToken && (i.request.headers[h] = s.sessionToken)
                            }
                        }
                    }
                    return t(i)
                },
                b = {
                    name: "s3ExpressMiddleware",
                    step: "build",
                    tags: ["S3", "S3_EXPRESS"],
                    override: !0
                },
                w = e => ({
                    applyToStack: t => {
                        t.add(y(e), b)
                    }
                });
            var v = r(60230);
            r(47826);
            var S = r(19933);
            let A = async (e, t, r, n) => {
                    let i = await n.signWithCredentials(r, e, {});
                    if (i.headers["X-Amz-Security-Token"] || i.headers["x-amz-security-token"]) throw Error("X-Amz-Security-Token must not be set for s3-express requests.");
                    return i
                },
                E = e => e => {
                    throw e
                },
                x = (e, t) => {},
                P = e => (t, r) => async i => {
                    let s;
                    if (!n.aW.isInstance(i.request)) return t(i);
                    let o = (0, S.J)(r).selectedHttpAuthScheme;
                    if (!o) throw Error("No HttpAuthScheme was selected: unable to sign request");
                    let {
                        httpAuthOption: {
                            signingProperties: a = {}
                        },
                        identity: u,
                        signer: l
                    } = o;
                    s = r.s3ExpressIdentity ? await A(r.s3ExpressIdentity, a, i.request, await e.signer()) : await l.sign(i.request, u, a);
                    let c = await t({ ...i,
                        request: s
                    }).catch((l.errorHandler || E)(a));
                    return (l.successHandler || x)(c.response, a), c
                },
                R = e => ({
                    applyToStack: t => {
                        t.addRelativeTo(P(e), v.wA)
                    }
                }),
                k = (e, {
                    session: t
                }) => {
                    let [r, n] = t;
                    return { ...e,
                        forcePathStyle: e.forcePathStyle ? ? !1,
                        useAccelerateEndpoint: e.useAccelerateEndpoint ? ? !1,
                        disableMultiregionAccessPoints: e.disableMultiregionAccessPoints ? ? !1,
                        followRegionRedirects: e.followRegionRedirects ? ? !1,
                        s3ExpressIdentityProvider: e.s3ExpressIdentityProvider ? ? new c(async e => r().send(new n({
                            Bucket: e,
                            SessionMode: "ReadWrite"
                        }))),
                        bucketEndpoint: e.bucketEndpoint ? ? !1
                    }
                };
            var T = r(84098);
            let N = {
                    CopyObjectCommand: !0,
                    UploadPartCopyCommand: !0,
                    CompleteMultipartUploadCommand: !0
                },
                M = e => (t, r) => async i => {
                    let s = await t(i),
                        {
                            response: o
                        } = s;
                    if (!n.Zn.isInstance(o)) return s;
                    let {
                        statusCode: a,
                        body: u
                    } = o;
                    if (a < 200 || a >= 300 || !("function" == typeof u ? .stream || "function" == typeof u ? .pipe || "function" == typeof u ? .tee)) return s;
                    let l = u,
                        c = u;
                    !u || "object" != typeof u || u instanceof Uint8Array || ([l, c] = await (0, T.vH)(u)), o.body = c;
                    let d = await C(l, {
                        streamCollector: async e => (0, T.TS)(e, 3e3)
                    });
                    "function" == typeof l ? .destroy && l.destroy();
                    let f = e.utf8Encoder(d.subarray(d.length - 16));
                    if (0 === d.length && N[r.commandName]) {
                        let e = Error("S3 aborted request");
                        throw e.name = "InternalError", e
                    }
                    return f && f.endsWith("</Error>") && (o.statusCode = 400), s
                },
                C = (e = new Uint8Array, t) => e instanceof Uint8Array ? Promise.resolve(e) : t.streamCollector(e) || Promise.resolve(new Uint8Array),
                O = {
                    relation: "after",
                    toMiddleware: "deserializerMiddleware",
                    tags: ["THROW_200_EXCEPTIONS", "S3"],
                    name: "throw200ExceptionsMiddleware",
                    override: !0
                },
                I = e => ({
                    applyToStack: t => {
                        t.addRelativeTo(M(e), O)
                    }
                }),
                U = e => "string" == typeof e && 0 === e.indexOf("arn:") && e.split(":").length >= 6,
                $ = {
                    name: "bucketEndpointMiddleware",
                    override: !0,
                    relation: "after",
                    toMiddleware: "endpointV2Middleware"
                },
                _ = {
                    step: "initialize",
                    tags: ["VALIDATE_BUCKET_NAME"],
                    name: "validateBucketNameMiddleware",
                    override: !0
                },
                F = e => ({
                    applyToStack: t => {
                        t.add(function({
                            bucketEndpoint: e
                        }) {
                            return t => async r => {
                                let {
                                    input: {
                                        Bucket: n
                                    }
                                } = r;
                                if (!e && "string" == typeof n && !U(n) && n.indexOf("/") >= 0) {
                                    let e = Error(`Bucket name shouldn't contain '/', received '${n}'`);
                                    throw e.name = "InvalidBucketName", e
                                }
                                return t({ ...r
                                })
                            }
                        }(e), _), t.addRelativeTo((t, r) => async n => {
                            if (e.bucketEndpoint) {
                                let e = r.endpointV2;
                                if (e) {
                                    let t = n.input.Bucket;
                                    if ("string" == typeof t) try {
                                        let n = new URL(t);
                                        r.endpointV2 = { ...e,
                                            url: n
                                        }
                                    } catch (n) {
                                        let e = `@aws-sdk/middleware-sdk-s3: bucketEndpoint=true was set but Bucket=${t} could not be parsed as URL.`;
                                        throw r.logger ? .constructor ? .name === "NoOpLogger" ? console.warn(e) : r.logger ? .warn ? .(e), n
                                    }
                                }
                            }
                            return t(n)
                        }, $)
                    }
                })
        },
        71931: function(e, t, r) {
            "use strict";
            r(25613), r(86231), r(63202)
        },
        60230: function(e, t, r) {
            "use strict";
            r.d(t, {
                K5: function() {
                    return h
                },
                zV: function() {
                    return g
                },
                tZ: function() {
                    return o
                },
                aZ: function() {
                    return f
                },
                wA: function() {
                    return d
                },
                BP: function() {
                    return p
                },
                CU: function() {
                    return m
                },
                $E: function() {
                    return y
                },
                cu: function() {
                    return w
                }
            }), r(47826);
            var n = r(19933);
            let i = (e, t) => (r, i) => async s => {
                    let o = e.httpAuthSchemeProvider(await t.httpAuthSchemeParametersProvider(e, i, s.input)),
                        a = function(e) {
                            let t = new Map;
                            for (let r of e) t.set(r.schemeId, r);
                            return t
                        }(e.httpAuthSchemes),
                        u = (0, n.J)(i),
                        l = [];
                    for (let r of o) {
                        let n = a.get(r.schemeId);
                        if (!n) {
                            l.push(`HttpAuthScheme \`${r.schemeId}\` was not enabled for this service.`);
                            continue
                        }
                        let s = n.identityProvider(await t.identityProviderConfigProvider(e));
                        if (!s) {
                            l.push(`HttpAuthScheme \`${r.schemeId}\` did not have an IdentityProvider configured.`);
                            continue
                        }
                        let {
                            identityProperties: o = {},
                            signingProperties: c = {}
                        } = r.propertiesExtractor ? .(e, i) || {};
                        r.identityProperties = Object.assign(r.identityProperties || {}, o), r.signingProperties = Object.assign(r.signingProperties || {}, c), u.selectedHttpAuthScheme = {
                            httpAuthOption: r,
                            identity: await s(r.identityProperties),
                            signer: n.signer
                        };
                        break
                    }
                    if (!u.selectedHttpAuthScheme) throw Error(l.join("\n"));
                    return r(s)
                },
                s = {
                    step: "serialize",
                    tags: ["HTTP_AUTH_SCHEME"],
                    name: "httpAuthSchemeMiddleware",
                    override: !0,
                    relation: "before",
                    toMiddleware: r(25613).Q$.name
                },
                o = (e, {
                    httpAuthSchemeParametersProvider: t,
                    identityProviderConfigProvider: r
                }) => ({
                    applyToStack: n => {
                        n.addRelativeTo(i(e, {
                            httpAuthSchemeParametersProvider: t,
                            identityProviderConfigProvider: r
                        }), s)
                    }
                });
            r(31131).JK.name;
            var a = r(85660);
            let u = e => e => {
                    throw e
                },
                l = (e, t) => {},
                c = e => (e, t) => async r => {
                    if (!a.aW.isInstance(r.request)) return e(r);
                    let i = (0, n.J)(t).selectedHttpAuthScheme;
                    if (!i) throw Error("No HttpAuthScheme was selected: unable to sign request");
                    let {
                        httpAuthOption: {
                            signingProperties: s = {}
                        },
                        identity: o,
                        signer: c
                    } = i, d = await e({ ...r,
                        request: await c.sign(r.request, o, s)
                    }).catch((c.errorHandler || u)(s));
                    return (c.successHandler || l)(d.response, s), d
                },
                d = {
                    step: "finalizeRequest",
                    tags: ["HTTP_SIGNING"],
                    name: "httpSigningMiddleware",
                    aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
                    override: !0,
                    relation: "after",
                    toMiddleware: r(18878).yg.name
                },
                f = e => ({
                    applyToStack: t => {
                        t.addRelativeTo(c(e), d)
                    }
                });
            class h {
                constructor(e) {
                    for (let [t, r] of (this.authSchemes = new Map, Object.entries(e))) void 0 !== r && this.authSchemes.set(t, r)
                }
                getIdentityProvider(e) {
                    return this.authSchemes.get(e)
                }
            }
            let p = e => g(e) && e.expiration.getTime() - Date.now() < 3e5,
                g = e => void 0 !== e.expiration,
                m = (e, t, r) => {
                    let n, i, s;
                    if (void 0 === e) return;
                    let o = "function" != typeof e ? async () => Promise.resolve(e) : e,
                        a = !1,
                        u = async e => {
                            i || (i = o(e));
                            try {
                                n = await i, s = !0, a = !1
                            } finally {
                                i = void 0
                            }
                            return n
                        };
                    return void 0 === t ? async e => ((!s || e ? .forceRefresh) && (n = await u(e)), n) : async e => ((!s || e ? .forceRefresh) && (n = await u(e)), a || (r(n) ? t(n) && await u(e) : a = !0), n)
                },
                y = e => {
                    if ("function" == typeof e) return e;
                    let t = Promise.resolve(e);
                    return () => t
                };
            var b = r(54095);

            function w(e, t) {
                return new v(e, t)
            }
            class v {
                constructor(e, t) {
                    this.input = e, this.context = t, this.query = {}, this.method = "", this.headers = {}, this.path = "", this.body = null, this.hostname = "", this.resolvePathStack = []
                }
                async build() {
                    let {
                        hostname: e,
                        protocol: t = "https",
                        port: r,
                        path: n
                    } = await this.context.endpoint();
                    for (let e of (this.path = n, this.resolvePathStack)) e(this.path);
                    return new a.aW({
                        protocol: t,
                        hostname: this.hostname || e,
                        port: r,
                        method: this.method,
                        path: this.path,
                        query: this.query,
                        body: this.body,
                        headers: this.headers
                    })
                }
                hn(e) {
                    return this.hostname = e, this
                }
                bp(e) {
                    return this.resolvePathStack.push(t => {
                        this.path = `${t?.endsWith("/")?t.slice(0,-1):t||""}` + e
                    }), this
                }
                p(e, t, r, n) {
                    return this.resolvePathStack.push(i => {
                        this.path = (0, b.Is)(i, this.input, e, t, r, n)
                    }), this
                }
                h(e) {
                    return this.headers = e, this
                }
                q(e) {
                    return this.query = e, this
                }
                b(e) {
                    return this.body = e, this
                }
                m(e) {
                    return this.method = e, this
                }
            }
        },
        69779: function(e, t, r) {
            "use strict";
            r.d(t, {
                BX: function() {
                    return o
                },
                CF: function() {
                    return u
                }
            });
            var n = r(85660),
                i = r(16969);
            let s = {
                supported: void 0
            };
            class o {
                static create(e) {
                    return "function" == typeof e ? .handle ? e : new o(e)
                }
                constructor(e) {
                    "function" == typeof e ? this.configProvider = e().then(e => e || {}) : (this.config = e ? ? {}, this.configProvider = Promise.resolve(this.config)), void 0 === s.supported && (s.supported = !!("undefined" != typeof Request && "keepalive" in new Request("https://[::1]")))
                }
                destroy() {}
                async handle(e, {
                    abortSignal: t
                } = {}) {
                    this.config || (this.config = await this.configProvider);
                    let r = this.config.requestTimeout,
                        o = !0 === this.config.keepAlive,
                        a = this.config.credentials;
                    if (t ? .aborted) {
                        let e = Error("Request aborted");
                        return e.name = "AbortError", Promise.reject(e)
                    }
                    let u = e.path,
                        l = function(e) {
                            let t = [];
                            for (let r of Object.keys(e).sort()) {
                                let n = e[r];
                                if (r = (0, i.i)(r), Array.isArray(n))
                                    for (let e = 0, s = n.length; e < s; e++) t.push(`${r}=${(0,i.i)(n[e])}`);
                                else {
                                    let e = r;
                                    (n || "string" == typeof n) && (e += `=${(0,i.i)(n)}`), t.push(e)
                                }
                            }
                            return t.join("&")
                        }(e.query || {});
                    l && (u += `?${l}`), e.fragment && (u += `#${e.fragment}`);
                    let c = "";
                    if (null != e.username || null != e.password) {
                        let t = e.username ? ? "",
                            r = e.password ? ? "";
                        c = `${t}:${r}@`
                    }
                    let {
                        port: d,
                        method: f
                    } = e, h = `${e.protocol}//${c}${e.hostname}${d?`:${d}`:""}${u}`, p = "GET" === f || "HEAD" === f ? void 0 : e.body, g = {
                        body: p,
                        headers: new Headers(e.headers),
                        method: f,
                        credentials: a,
                        cache: this.config.cache ? ? "default"
                    };
                    p && (g.duplex = "half"), "undefined" != typeof AbortController && (g.signal = t), s.supported && (g.keepalive = o), "function" == typeof this.config.requestInit && Object.assign(g, this.config.requestInit(e));
                    let m = () => {},
                        y = [fetch(new Request(h, g)).then(e => {
                            let t = e.headers,
                                r = {};
                            for (let e of t.entries()) r[e[0]] = e[1];
                            return void 0 != e.body ? {
                                response: new n.Zn({
                                    headers: r,
                                    reason: e.statusText,
                                    statusCode: e.status,
                                    body: e.body
                                })
                            } : e.blob().then(t => ({
                                response: new n.Zn({
                                    headers: r,
                                    reason: e.statusText,
                                    statusCode: e.status,
                                    body: t
                                })
                            }))
                        }), function(e = 0) {
                            return new Promise((t, r) => {
                                e && setTimeout(() => {
                                    let t = Error(`Request did not complete within ${e} ms`);
                                    t.name = "TimeoutError", r(t)
                                }, e)
                            })
                        }(r)];
                    return t && y.push(new Promise((e, r) => {
                        let n = () => {
                            let e = Error("Request aborted");
                            e.name = "AbortError", r(e)
                        };
                        "function" == typeof t.addEventListener ? (t.addEventListener("abort", n, {
                            once: !0
                        }), m = () => t.removeEventListener("abort", n)) : t.onabort = n
                    })), Promise.race(y).finally(m)
                }
                updateHttpClientConfig(e, t) {
                    this.config = void 0, this.configProvider = this.configProvider.then(r => (r[e] = t, r))
                }
                httpHandlerConfigs() {
                    return this.config ? ? {}
                }
            }
            var a = r(5177);
            let u = e => "function" == typeof Blob && e instanceof Blob ? l(e) : c(e);
            async function l(e) {
                let t = await new Promise((t, r) => {
                    let n = new FileReader;
                    n.onloadend = () => {
                        if (2 !== n.readyState) return r(Error("Reader aborted too early"));
                        let e = n.result ? ? "",
                            i = e.indexOf(","),
                            s = i > -1 ? i + 1 : e.length;
                        t(e.substring(s))
                    }, n.onabort = () => r(Error("Read aborted")), n.onerror = () => r(n.error), n.readAsDataURL(e)
                });
                return new Uint8Array((0, a.G)(t))
            }
            async function c(e) {
                let t = [],
                    r = e.getReader(),
                    n = !1,
                    i = 0;
                for (; !n;) {
                    let {
                        done: e,
                        value: s
                    } = await r.read();
                    s && (t.push(s), i += s.length), n = e
                }
                let s = new Uint8Array(i),
                    o = 0;
                for (let e of t) s.set(e, o), o += e.length;
                return s
            }
        },
        25613: function(e, t, r) {
            "use strict";
            r.d(t, {
                Q$: function() {
                    return y
                },
                a3: function() {
                    return b
                },
                uW: function() {
                    return w
                },
                Xr: function() {
                    return p
                }
            });
            let n = async e => {
                    let t = e ? .Bucket || "";
                    if ("string" == typeof e.Bucket && (e.Bucket = t.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"))), u(t)) {
                        if (!0 === e.ForcePathStyle) throw Error("Path-style addressing cannot be used with ARN buckets")
                    } else a(t) && (-1 === t.indexOf(".") || String(e.Endpoint).startsWith("http:")) && t.toLowerCase() === t && !(t.length < 3) || (e.ForcePathStyle = !0);
                    return e.DisableMultiRegionAccessPoints && (e.disableMultiRegionAccessPoints = !0, e.DisableMRAP = !0), e
                },
                i = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/,
                s = /(\d+\.){3}\d+/,
                o = /\.\./,
                a = e => i.test(e) && !s.test(e) && !o.test(e),
                u = e => {
                    let [t, r, n, , , i] = e.split(":"), s = "arn" === t && e.split(":").length >= 6, o = !!(s && r && n && i);
                    if (s && !o) throw Error(`Invalid ARN: ${e} was an invalid ARN.`);
                    return o
                },
                l = (e, t, r) => {
                    let n = async () => {
                        let n = r[e] ? ? r[t];
                        return "function" == typeof n ? n() : n
                    };
                    return "credentialScope" === e || "CredentialScope" === t ? async () => {
                        let e = "function" == typeof r.credentials ? await r.credentials() : r.credentials;
                        return e ? .credentialScope ? ? e ? .CredentialScope
                    } : "accountId" === e || "AccountId" === t ? async () => {
                        let e = "function" == typeof r.credentials ? await r.credentials() : r.credentials;
                        return e ? .accountId ? ? e ? .AccountId
                    } : "endpoint" === e || "endpoint" === t ? async () => {
                        let e = await n();
                        if (e && "object" == typeof e) {
                            if ("url" in e) return e.url.href;
                            if ("hostname" in e) {
                                let {
                                    protocol: t,
                                    hostname: r,
                                    port: n,
                                    path: i
                                } = e;
                                return `${t}//${r}${n?":"+n:""}${i}`
                            }
                        }
                        return e
                    } : n
                },
                c = async e => void 0;
            var d = r(76884);
            let f = e => "object" == typeof e ? "url" in e ? (0, d.e)(e.url) : e : (0, d.e)(e),
                h = async (e, t, r, n) => {
                    if (!r.endpoint) {
                        let e;
                        (e = r.serviceConfiguredEndpoint ? await r.serviceConfiguredEndpoint() : await c(r.serviceId)) && (r.endpoint = () => Promise.resolve(f(e)))
                    }
                    let i = await p(e, t, r);
                    if ("function" != typeof r.endpointProvider) throw Error("config.endpointProvider is not set.");
                    return r.endpointProvider(i, n)
                },
                p = async (e, t, r) => {
                    let i = {},
                        s = t ? .getEndpointParameterInstructions ? .() || {};
                    for (let [t, n] of Object.entries(s)) switch (n.type) {
                        case "staticContextParams":
                            i[t] = n.value;
                            break;
                        case "contextParams":
                            i[t] = e[n.name];
                            break;
                        case "clientContextParams":
                        case "builtInParams":
                            i[t] = await l(n.name, t, r)();
                            break;
                        default:
                            throw Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(n))
                    }
                    return 0 === Object.keys(s).length && Object.assign(i, r), "s3" === String(r.serviceId).toLowerCase() && await n(i), i
                };
            var g = r(19933);
            let m = ({
                    config: e,
                    instructions: t
                }) => (r, n) => async i => {
                    let s = await h(i.input, {
                        getEndpointParameterInstructions: () => t
                    }, { ...e
                    }, n);
                    n.endpointV2 = s, n.authSchemes = s.properties ? .authSchemes;
                    let o = n.authSchemes ? .[0];
                    if (o) {
                        n.signing_region = o.signingRegion, n.signing_service = o.signingName;
                        let e = (0, g.J)(n),
                            t = e ? .selectedHttpAuthScheme ? .httpAuthOption;
                        t && (t.signingProperties = Object.assign(t.signingProperties || {}, {
                            signing_region: o.signingRegion,
                            signingRegion: o.signingRegion,
                            signing_service: o.signingName,
                            signingName: o.signingName,
                            signingRegionSet: o.signingRegionSet
                        }, o.properties))
                    }
                    return r({ ...i
                    })
                },
                y = {
                    step: "serialize",
                    tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
                    name: "endpointV2Middleware",
                    override: !0,
                    relation: "before",
                    toMiddleware: r(31131).JK.name
                },
                b = (e, t) => ({
                    applyToStack: r => {
                        r.addRelativeTo(m({
                            config: e,
                            instructions: t
                        }), y)
                    }
                }),
                w = e => {
                    let t;
                    let r = e.tls ? ? !0,
                        {
                            endpoint: n
                        } = e,
                        i = { ...e,
                            endpoint: null != n ? async () => f(await (0, g.$)(n)()) : void 0,
                            tls: r,
                            isCustomEndpoint: !!n,
                            useDualstackEndpoint: (0, g.$)(e.useDualstackEndpoint ? ? !1),
                            useFipsEndpoint: (0, g.$)(e.useFipsEndpoint ? ? !1)
                        };
                    return i.serviceConfiguredEndpoint = async () => (e.serviceId && !t && (t = c(e.serviceId)), t), i
                }
        },
        18878: function(e, t, r) {
            "use strict";
            let n;
            r.d(t, {
                NQ: function() {
                    return E
                },
                BC: function() {
                    return g
                },
                yg: function() {
                    return A
                }
            });
            var i = r(4367),
                s = r(85660),
                o = r(77332),
                a = {
                    randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
                };
            let u = new Uint8Array(16),
                l = [];
            for (let e = 0; e < 256; ++e) l.push((e + 256).toString(16).slice(1));
            var c = function(e, t, r) {
                if (a.randomUUID && !t && !e) return a.randomUUID();
                let i = (e = e || {}).random || (e.rng || function() {
                    if (!n && !(n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto))) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                    return n(u)
                })();
                if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, t) {
                    r = r || 0;
                    for (let e = 0; e < 16; ++e) t[r + e] = i[e];
                    return t
                }
                return function(e, t = 0) {
                    return l[e[t + 0]] + l[e[t + 1]] + l[e[t + 2]] + l[e[t + 3]] + "-" + l[e[t + 4]] + l[e[t + 5]] + "-" + l[e[t + 6]] + l[e[t + 7]] + "-" + l[e[t + 8]] + l[e[t + 9]] + "-" + l[e[t + 10]] + l[e[t + 11]] + l[e[t + 12]] + l[e[t + 13]] + l[e[t + 14]] + l[e[t + 15]]
                }(i)
            };
            let d = e => e instanceof Error ? e : e instanceof Object ? Object.assign(Error(), e) : "string" == typeof e ? Error(e) : Error(`AWS SDK error wrapper for ${e}`);
            var f = r(19933);
            let h = "AWS_MAX_ATTEMPTS",
                p = "max_attempts";
            e => {
                let t = e[h];
                if (!t) return;
                let r = parseInt(t);
                if (Number.isNaN(r)) throw Error(`Environment variable ${h} mast be a number, got "${t}"`);
                return r
            }, i.J;
            let g = e => {
                let {
                    retryStrategy: t
                } = e, r = (0, f.$)(e.maxAttempts ? ? i.J);
                return { ...e,
                    maxAttempts: r,
                    retryStrategy: async () => t || (await (0, f.$)(e.retryMode)() === i.Ul.ADAPTIVE ? new i.AY(r) : new i.Uz(r))
                }
            };
            e => e.AWS_RETRY_MODE, i.CA;
            var m = r(54095);
            let y = e => e ? .body instanceof ReadableStream,
                b = e => (t, r) => async n => {
                    let o = await e.retryStrategy(),
                        a = await e.maxAttempts();
                    if (!w(o)) return o ? .mode && (r.userAgent = [...r.userAgent || [],
                        ["cfg/retry-mode", o.mode]
                    ]), o.retry(t, n); {
                        let e = await o.acquireInitialRetryToken(r.partition_id),
                            u = Error(),
                            l = 0,
                            f = 0,
                            {
                                request: h
                            } = n,
                            p = s.aW.isInstance(h);
                        for (p && (h.headers[i.lk] = c());;) try {
                            p && (h.headers[i.r5] = `attempt=${l+1}; max=${a}`);
                            let {
                                response: r,
                                output: s
                            } = await t(n);
                            return o.recordSuccess(e), s.$metadata.attempts = l + 1, s.$metadata.totalRetryDelay = f, {
                                response: r,
                                output: s
                            }
                        } catch (i) {
                            let t = v(i);
                            if (u = d(i), p && y(h)) throw (r.logger instanceof m.vk ? console : r.logger) ? .warn("An error was encountered in a non-retryable streaming request."), u;
                            try {
                                e = await o.refreshRetryTokenForRetry(e, t)
                            } catch (e) {
                                throw u.$metadata || (u.$metadata = {}), u.$metadata.attempts = l + 1, u.$metadata.totalRetryDelay = f, u
                            }
                            l = e.getRetryCount();
                            let n = e.getRetryDelay();
                            f += n, await new Promise(e => setTimeout(e, n))
                        }
                    }
                },
                w = e => void 0 !== e.acquireInitialRetryToken && void 0 !== e.refreshRetryTokenForRetry && void 0 !== e.recordSuccess,
                v = e => {
                    let t = {
                            error: e,
                            errorType: S(e)
                        },
                        r = x(e.$response);
                    return r && (t.retryAfterHint = r), t
                },
                S = e => (0, o.pK)(e) ? "THROTTLING" : (0, o.iH)(e) ? "TRANSIENT" : (0, o.o7)(e) ? "SERVER_ERROR" : "CLIENT_ERROR",
                A = {
                    name: "retryMiddleware",
                    tags: ["RETRY"],
                    step: "finalizeRequest",
                    priority: "high",
                    override: !0
                },
                E = e => ({
                    applyToStack: t => {
                        t.add(b(e), A)
                    }
                }),
                x = e => {
                    if (!s.Zn.isInstance(e)) return;
                    let t = Object.keys(e.headers).find(e => "retry-after" === e.toLowerCase());
                    if (!t) return;
                    let r = e.headers[t],
                        n = Number(r);
                    return new Date(Number.isNaN(n) ? r : 1e3 * n)
                }
        },
        31131: function(e, t, r) {
            "use strict";
            r.d(t, {
                p2: function() {
                    return a
                },
                JK: function() {
                    return o
                }
            });
            let n = (e, t) => r => async n => {
                    let {
                        response: i
                    } = await r(n);
                    try {
                        let r = await t(i, e);
                        return {
                            response: i,
                            output: r
                        }
                    } catch (e) {
                        throw Object.defineProperty(e, "$response", {
                            value: i
                        }), "$metadata" in e || (e.message += "\n  Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.", void 0 !== e.$responseBodyText && e.$response && (e.$response.body = e.$responseBodyText)), e
                    }
                },
                i = (e, t) => (r, n) => async i => {
                    let s = n.endpointV2 ? .url && e.urlParser ? async () => e.urlParser(n.endpointV2.url) : e.endpoint;
                    if (!s) throw Error("No valid endpoint provider available.");
                    let o = await t(i.input, { ...e,
                        endpoint: s
                    });
                    return r({ ...i,
                        request: o
                    })
                },
                s = {
                    name: "deserializerMiddleware",
                    step: "deserialize",
                    tags: ["DESERIALIZER"],
                    override: !0
                },
                o = {
                    name: "serializerMiddleware",
                    step: "serialize",
                    tags: ["SERIALIZER"],
                    override: !0
                };

            function a(e, t, r) {
                return {
                    applyToStack: a => {
                        a.add(n(e, r), s), a.add(i(e, t), o)
                    }
                }
            }
        },
        85660: function(e, t, r) {
            "use strict";
            r.d(t, {
                aW: function() {
                    return s
                },
                Zn: function() {
                    return o
                },
                cA: function() {
                    return n
                },
                AO: function() {
                    return i
                }
            });
            let n = e => {
                    let t = e.httpHandler;
                    return {
                        setHttpHandler(e) {
                            t = e
                        },
                        httpHandler: () => t,
                        updateHttpClientConfig(e, r) {
                            t.updateHttpClientConfig(e, r)
                        },
                        httpHandlerConfigs: () => t.httpHandlerConfigs()
                    }
                },
                i = e => ({
                    httpHandler: e.httpHandler()
                });
            r(47826);
            class s {
                constructor(e) {
                    this.method = e.method || "GET", this.hostname = e.hostname || "localhost", this.port = e.port, this.query = e.query || {}, this.headers = e.headers || {}, this.body = e.body, this.protocol = e.protocol ? ":" !== e.protocol.slice(-1) ? `${e.protocol}:` : e.protocol : "https:", this.path = e.path ? "/" !== e.path.charAt(0) ? `/${e.path}` : e.path : "/", this.username = e.username, this.password = e.password, this.fragment = e.fragment
                }
                static clone(e) {
                    var t;
                    let r = new s({ ...e,
                        headers: { ...e.headers
                        }
                    });
                    return r.query && (r.query = Object.keys(t = r.query).reduce((e, r) => {
                        let n = t[r];
                        return { ...e,
                            [r]: Array.isArray(n) ? [...n] : n
                        }
                    }, {})), r
                }
                static isInstance(e) {
                    return !!e && "method" in e && "protocol" in e && "hostname" in e && "path" in e && "object" == typeof e.query && "object" == typeof e.headers
                }
                clone() {
                    return s.clone(this)
                }
            }
            class o {
                constructor(e) {
                    this.statusCode = e.statusCode, this.reason = e.reason, this.headers = e.headers || {}, this.body = e.body
                }
                static isInstance(e) {
                    return !!e && "number" == typeof e.statusCode && "object" == typeof e.headers
                }
            }
        },
        77332: function(e, t, r) {
            "use strict";
            r.d(t, {
                Rk: function() {
                    return l
                },
                bV: function() {
                    return u
                },
                o7: function() {
                    return h
                },
                pK: function() {
                    return d
                },
                iH: function() {
                    return f
                }
            });
            let n = ["AuthFailure", "InvalidSignatureException", "RequestExpired", "RequestInTheFuture", "RequestTimeTooSkewed", "SignatureDoesNotMatch"],
                i = ["BandwidthLimitExceeded", "EC2ThrottledException", "LimitExceededException", "PriorRequestNotComplete", "ProvisionedThroughputExceededException", "RequestLimitExceeded", "RequestThrottled", "RequestThrottledException", "SlowDown", "ThrottledException", "Throttling", "ThrottlingException", "TooManyRequestsException", "TransactionInProgressException"],
                s = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"],
                o = [500, 502, 503, 504],
                a = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"],
                u = e => void 0 !== e.$retryable,
                l = e => n.includes(e.name),
                c = e => e.$metadata ? .clockSkewCorrected,
                d = e => e.$metadata ? .httpStatusCode === 429 || i.includes(e.name) || e.$retryable ? .throttling == !0,
                f = e => c(e) || s.includes(e.name) || a.includes(e ? .code || "") || o.includes(e.$metadata ? .httpStatusCode || 0),
                h = e => {
                    if (e.$metadata ? .httpStatusCode !== void 0) {
                        let t = e.$metadata.httpStatusCode;
                        if (500 <= t && t <= 599 && !f(e)) return !0
                    }
                    return !1
                }
        },
        86231: function(e, t, r) {
            "use strict";
            r.d(t, {
                L1: function() {
                    return q
                }
            });
            var n, i, s = r(63202),
                o = r(19933),
                a = r(16969),
                u = r(32033);
            let l = e => "string" == typeof e ? (0, u.$)(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e),
                c = "X-Amz-Date",
                d = "X-Amz-Signature",
                f = "X-Amz-Security-Token",
                h = "authorization",
                p = c.toLowerCase(),
                g = [h, p, "date"],
                m = d.toLowerCase(),
                y = "x-amz-content-sha256",
                b = f.toLowerCase(),
                w = {
                    authorization: !0,
                    "cache-control": !0,
                    connection: !0,
                    expect: !0,
                    from: !0,
                    "keep-alive": !0,
                    "max-forwards": !0,
                    pragma: !0,
                    referer: !0,
                    te: !0,
                    trailer: !0,
                    "transfer-encoding": !0,
                    upgrade: !0,
                    "user-agent": !0,
                    "x-amzn-trace-id": !0
                },
                v = /^proxy-/,
                S = /^sec-/,
                A = "AWS4-HMAC-SHA256",
                E = "aws4_request",
                x = {},
                P = [],
                R = (e, t, r) => `${e}/${t}/${r}/${E}`,
                k = async (e, t, r, n, i) => {
                    let o = await T(e, t.secretAccessKey, t.accessKeyId),
                        a = `${r}:${n}:${i}:${(0,s.N)(o)}:${t.sessionToken}`;
                    if (a in x) return x[a];
                    for (P.push(a); P.length > 50;) delete x[P.shift()];
                    let u = `AWS4${t.secretAccessKey}`;
                    for (let t of [r, n, i, E]) u = await T(e, u, t);
                    return x[a] = u
                },
                T = (e, t, r) => {
                    let n = new e(t);
                    return n.update(l(r)), n.digest()
                },
                N = ({
                    headers: e
                }, t, r) => {
                    let n = {};
                    for (let i of Object.keys(e).sort()) {
                        if (void 0 == e[i]) continue;
                        let s = i.toLowerCase();
                        (!(s in w || t ? .has(s) || v.test(s) || S.test(s)) || r && (!r || r.has(s))) && (n[s] = e[i].trim().replace(/\s+/g, " "))
                    }
                    return n
                },
                M = ({
                    query: e = {}
                }) => {
                    let t = [],
                        r = {};
                    for (let n of Object.keys(e).sort()) {
                        if (n.toLowerCase() === m) continue;
                        t.push(n);
                        let i = e[n];
                        "string" == typeof i ? r[n] = `${(0,a.i)(n)}=${(0,a.i)(i)}` : Array.isArray(i) && (r[n] = i.slice(0).reduce((e, t) => e.concat([`${(0,a.i)(n)}=${(0,a.i)(t)}`]), []).sort().join("&"))
                    }
                    return t.map(e => r[e]).filter(e => e).join("&")
                },
                C = e => "function" == typeof ArrayBuffer && e instanceof ArrayBuffer || "[object ArrayBuffer]" === Object.prototype.toString.call(e),
                O = async ({
                    headers: e,
                    body: t
                }, r) => {
                    for (let t of Object.keys(e))
                        if (t.toLowerCase() === y) return e[t];
                    if (void 0 == t) return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
                    if ("string" == typeof t || ArrayBuffer.isView(t) || C(t)) {
                        let e = new r;
                        return e.update(l(t)), (0, s.N)(await e.digest())
                    }
                    return "UNSIGNED-PAYLOAD"
                };
            class I {
                format(e) {
                    let t = [];
                    for (let r of Object.keys(e)) {
                        let n = (0, u.$)(r);
                        t.push(Uint8Array.from([n.byteLength]), n, this.formatHeaderValue(e[r]))
                    }
                    let r = new Uint8Array(t.reduce((e, t) => e + t.byteLength, 0)),
                        n = 0;
                    for (let e of t) r.set(e, n), n += e.byteLength;
                    return r
                }
                formatHeaderValue(e) {
                    switch (e.type) {
                        case "boolean":
                            return Uint8Array.from([e.value ? 0 : 1]);
                        case "byte":
                            return Uint8Array.from([2, e.value]);
                        case "short":
                            let t = new DataView(new ArrayBuffer(3));
                            return t.setUint8(0, 3), t.setInt16(1, e.value, !1), new Uint8Array(t.buffer);
                        case "integer":
                            let r = new DataView(new ArrayBuffer(5));
                            return r.setUint8(0, 4), r.setInt32(1, e.value, !1), new Uint8Array(r.buffer);
                        case "long":
                            let n = new Uint8Array(9);
                            return n[0] = 5, n.set(e.value.bytes, 1), n;
                        case "binary":
                            let i = new DataView(new ArrayBuffer(3 + e.value.byteLength));
                            i.setUint8(0, 6), i.setUint16(1, e.value.byteLength, !1);
                            let o = new Uint8Array(i.buffer);
                            return o.set(e.value, 3), o;
                        case "string":
                            let a = (0, u.$)(e.value),
                                l = new DataView(new ArrayBuffer(3 + a.byteLength));
                            l.setUint8(0, 7), l.setUint16(1, a.byteLength, !1);
                            let c = new Uint8Array(l.buffer);
                            return c.set(a, 3), c;
                        case "timestamp":
                            let d = new Uint8Array(9);
                            return d[0] = 8, d.set($.fromNumber(e.value.valueOf()).bytes, 1), d;
                        case "uuid":
                            if (!U.test(e.value)) throw Error(`Invalid UUID received: ${e.value}`);
                            let f = new Uint8Array(17);
                            return f[0] = 9, f.set((0, s.H)(e.value.replace(/\-/g, "")), 1), f
                    }
                }
            }(n = i || (i = {}))[n.boolTrue = 0] = "boolTrue", n[n.boolFalse = 1] = "boolFalse", n[n.byte = 2] = "byte", n[n.short = 3] = "short", n[n.integer = 4] = "integer", n[n.long = 5] = "long", n[n.byteArray = 6] = "byteArray", n[n.string = 7] = "string", n[n.timestamp = 8] = "timestamp", n[n.uuid = 9] = "uuid";
            let U = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
            class $ {
                constructor(e) {
                    if (this.bytes = e, 8 !== e.byteLength) throw Error("Int64 buffers must be exactly 8 bytes")
                }
                static fromNumber(e) {
                    if (e > 0x7fffffffffffffff || e < -0x8000000000000000) throw Error(`${e} is too large (or, if negative, too small) to represent as an Int64`);
                    let t = new Uint8Array(8);
                    for (let r = 7, n = Math.abs(Math.round(e)); r > -1 && n > 0; r--, n /= 256) t[r] = n;
                    return e < 0 && _(t), new $(t)
                }
                valueOf() {
                    let e = this.bytes.slice(0),
                        t = 128 & e[0];
                    return t && _(e), parseInt((0, s.N)(e), 16) * (t ? -1 : 1)
                }
                toString() {
                    return String(this.valueOf())
                }
            }

            function _(e) {
                for (let t = 0; t < 8; t++) e[t] ^= 255;
                for (let t = 7; t > -1 && (e[t]++, 0 === e[t]); t--);
            }
            let F = (e, t) => {
                for (let r of (e = e.toLowerCase(), Object.keys(t)))
                    if (e === r.toLowerCase()) return !0;
                return !1
            };
            var L = r(85660);
            let B = (e, t = {}) => {
                    let {
                        headers: r,
                        query: n = {}
                    } = L.aW.clone(e);
                    for (let e of Object.keys(r)) {
                        let i = e.toLowerCase();
                        "x-amz-" !== i.slice(0, 6) || t.unhoistableHeaders ? .has(i) || (n[e] = r[e], delete r[e])
                    }
                    return { ...e,
                        headers: r,
                        query: n
                    }
                },
                D = e => {
                    for (let t of Object.keys((e = L.aW.clone(e)).headers)) g.indexOf(t.toLowerCase()) > -1 && delete e.headers[t];
                    return e
                },
                j = e => H(e).toISOString().replace(/\.\d{3}Z$/, "Z"),
                H = e => "number" == typeof e ? new Date(1e3 * e) : "string" == typeof e ? new Date(Number(e) ? 1e3 * Number(e) : e) : e;
            class q {
                constructor({
                    applyChecksum: e,
                    credentials: t,
                    region: r,
                    service: n,
                    sha256: i,
                    uriEscapePath: s = !0
                }) {
                    this.headerFormatter = new I, this.service = n, this.sha256 = i, this.uriEscapePath = s, this.applyChecksum = "boolean" != typeof e || e, this.regionProvider = (0, o.$)(r), this.credentialProvider = (0, o.$)(t)
                }
                async presign(e, t = {}) {
                    let {
                        signingDate: r = new Date,
                        expiresIn: n = 3600,
                        unsignableHeaders: i,
                        unhoistableHeaders: s,
                        signableHeaders: o,
                        signingRegion: a,
                        signingService: u
                    } = t, l = await this.credentialProvider();
                    this.validateResolvedCredentials(l);
                    let h = a ? ? await this.regionProvider(),
                        {
                            longDate: p,
                            shortDate: g
                        } = z(r);
                    if (n > 604800) return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
                    let m = R(g, h, u ? ? this.service),
                        y = B(D(e), {
                            unhoistableHeaders: s
                        });
                    l.sessionToken && (y.query[f] = l.sessionToken), y.query["X-Amz-Algorithm"] = A, y.query["X-Amz-Credential"] = `${l.accessKeyId}/${m}`, y.query[c] = p, y.query["X-Amz-Expires"] = n.toString(10);
                    let b = N(y, i, o);
                    return y.query["X-Amz-SignedHeaders"] = V(b), y.query[d] = await this.getSignature(p, m, this.getSigningKey(l, h, g, u), this.createCanonicalRequest(y, b, await O(e, this.sha256))), y
                }
                async sign(e, t) {
                    return "string" == typeof e ? this.signString(e, t) : e.headers && e.payload ? this.signEvent(e, t) : e.message ? this.signMessage(e, t) : this.signRequest(e, t)
                }
                async signEvent({
                    headers: e,
                    payload: t
                }, {
                    signingDate: r = new Date,
                    priorSignature: n,
                    signingRegion: i,
                    signingService: o
                }) {
                    let a = i ? ? await this.regionProvider(),
                        {
                            shortDate: u,
                            longDate: l
                        } = z(r),
                        c = R(u, a, o ? ? this.service),
                        d = await O({
                            headers: {},
                            body: t
                        }, this.sha256),
                        f = new this.sha256;
                    f.update(e);
                    let h = ["AWS4-HMAC-SHA256-PAYLOAD", l, c, n, (0, s.N)(await f.digest()), d].join("\n");
                    return this.signString(h, {
                        signingDate: r,
                        signingRegion: a,
                        signingService: o
                    })
                }
                async signMessage(e, {
                    signingDate: t = new Date,
                    signingRegion: r,
                    signingService: n
                }) {
                    return this.signEvent({
                        headers: this.headerFormatter.format(e.message.headers),
                        payload: e.message.body
                    }, {
                        signingDate: t,
                        signingRegion: r,
                        signingService: n,
                        priorSignature: e.priorSignature
                    }).then(t => ({
                        message: e.message,
                        signature: t
                    }))
                }
                async signString(e, {
                    signingDate: t = new Date,
                    signingRegion: r,
                    signingService: n
                } = {}) {
                    let i = await this.credentialProvider();
                    this.validateResolvedCredentials(i);
                    let o = r ? ? await this.regionProvider(),
                        {
                            shortDate: a
                        } = z(t),
                        u = new this.sha256(await this.getSigningKey(i, o, a, n));
                    return u.update(l(e)), (0, s.N)(await u.digest())
                }
                async signRequest(e, {
                    signingDate: t = new Date,
                    signableHeaders: r,
                    unsignableHeaders: n,
                    signingRegion: i,
                    signingService: s
                } = {}) {
                    let o = await this.credentialProvider();
                    this.validateResolvedCredentials(o);
                    let a = i ? ? await this.regionProvider(),
                        u = D(e),
                        {
                            longDate: l,
                            shortDate: c
                        } = z(t),
                        d = R(c, a, s ? ? this.service);
                    u.headers[p] = l, o.sessionToken && (u.headers[b] = o.sessionToken);
                    let f = await O(u, this.sha256);
                    !F(y, u.headers) && this.applyChecksum && (u.headers[y] = f);
                    let g = N(u, n, r),
                        m = await this.getSignature(l, d, this.getSigningKey(o, a, c, s), this.createCanonicalRequest(u, g, f));
                    return u.headers[h] = `${A} Credential=${o.accessKeyId}/${d}, SignedHeaders=${V(g)}, Signature=${m}`, u
                }
                createCanonicalRequest(e, t, r) {
                    let n = Object.keys(t).sort();
                    return `${e.method}
${this.getCanonicalPath(e)}
${M(e)}
${n.map(e=>`${e}:${t[e]}`).join("\n")}

${n.join(";")}
${r}`
                }
                async createStringToSign(e, t, r) {
                    let n = new this.sha256;
                    n.update(l(r));
                    let i = await n.digest();
                    return `${A}
${e}
${t}
${(0,s.N)(i)}`
                }
                getCanonicalPath({
                    path: e
                }) {
                    if (this.uriEscapePath) {
                        let t = [];
                        for (let r of e.split("/")) r ? .length !== 0 && "." !== r && (".." === r ? t.pop() : t.push(r));
                        let r = `${e?.startsWith("/")?"/":""}${t.join("/")}${t.length>0&&e?.endsWith("/")?"/":""}`;
                        return (0, a.i)(r).replace(/%2F/g, "/")
                    }
                    return e
                }
                async getSignature(e, t, r, n) {
                    let i = await this.createStringToSign(e, t, n),
                        o = new this.sha256(await r);
                    return o.update(l(i)), (0, s.N)(await o.digest())
                }
                getSigningKey(e, t, r, n) {
                    return k(this.sha256, e, r, t, n || this.service)
                }
                validateResolvedCredentials(e) {
                    if ("object" != typeof e || "string" != typeof e.accessKeyId || "string" != typeof e.secretAccessKey) throw Error("Resolved credential object is not valid")
                }
            }
            let z = e => {
                    let t = j(e).replace(/[\-:]/g, "");
                    return {
                        longDate: t,
                        shortDate: t.slice(0, 8)
                    }
                },
                V = e => Object.keys(e).sort().join(";")
        },
        54095: function(e, t, r) {
            "use strict";
            r.d(t, {
                KU: function() {
                    return l
                },
                mY: function() {
                    return h
                },
                vk: function() {
                    return n
                },
                oc: function() {
                    return g
                },
                sI: function() {
                    return Z
                },
                Wg: function() {
                    return d
                },
                to: function() {
                    return X
                },
                CE: function() {
                    return R
                },
                Wh: function() {
                    return k
                },
                pY: function() {
                    return T
                },
                L: function() {
                    return ea
                },
                kE: function() {
                    return es
                },
                sT: function() {
                    return eu
                },
                jv: function() {
                    return ee
                },
                UI: function() {
                    return ec
                },
                gx: function() {
                    return m
                },
                aH: function() {
                    return D
                },
                SQ: function() {
                    return eo
                },
                Is: function() {
                    return em
                },
                AF: function() {
                    return I
                },
                NK: function() {
                    return O
                },
                PC: function() {
                    return J
                }
            });
            class n {
                trace() {}
                debug() {}
                info() {}
                warn() {}
                error() {}
            }
            let i = (e, t) => {
                    let r = [];
                    if (e && r.push(e), t)
                        for (let e of t) r.push(e);
                    return r
                },
                s = (e, t) => `${e||"anonymous"}${t&&t.length>0?` (a.k.a. ${t.join(",")})`:""}`,
                o = () => {
                    let e = [],
                        t = [],
                        r = !1,
                        n = new Set,
                        l = e => e.sort((e, t) => a[t.step] - a[e.step] || u[t.priority || "normal"] - u[e.priority || "normal"]),
                        c = r => {
                            let s = !1,
                                o = e => {
                                    let t = i(e.name, e.aliases);
                                    if (t.includes(r)) {
                                        for (let e of (s = !0, t)) n.delete(e);
                                        return !1
                                    }
                                    return !0
                                };
                            return e = e.filter(o), t = t.filter(o), s
                        },
                        d = r => {
                            let s = !1,
                                o = e => {
                                    if (e.middleware === r) {
                                        for (let t of (s = !0, i(e.name, e.aliases))) n.delete(t);
                                        return !1
                                    }
                                    return !0
                                };
                            return e = e.filter(o), t = t.filter(o), s
                        },
                        f = r => (e.forEach(e => {
                            r.add(e.middleware, { ...e
                            })
                        }), t.forEach(e => {
                            r.addRelativeTo(e.middleware, { ...e
                            })
                        }), r.identifyOnResolve ? .(g.identifyOnResolve()), r),
                        h = e => {
                            let t = [];
                            return e.before.forEach(e => {
                                0 === e.before.length && 0 === e.after.length ? t.push(e) : t.push(...h(e))
                            }), t.push(e), e.after.reverse().forEach(e => {
                                0 === e.before.length && 0 === e.after.length ? t.push(e) : t.push(...h(e))
                            }), t
                        },
                        p = (r = !1) => {
                            let n = [],
                                o = [],
                                a = {};
                            return e.forEach(e => {
                                let t = { ...e,
                                    before: [],
                                    after: []
                                };
                                for (let e of i(t.name, t.aliases)) a[e] = t;
                                n.push(t)
                            }), t.forEach(e => {
                                let t = { ...e,
                                    before: [],
                                    after: []
                                };
                                for (let e of i(t.name, t.aliases)) a[e] = t;
                                o.push(t)
                            }), o.forEach(e => {
                                if (e.toMiddleware) {
                                    let t = a[e.toMiddleware];
                                    if (void 0 === t) {
                                        if (r) return;
                                        throw Error(`${e.toMiddleware} is not found when adding ${s(e.name,e.aliases)} middleware ${e.relation} ${e.toMiddleware}`)
                                    }
                                    "after" === e.relation && t.after.push(e), "before" === e.relation && t.before.push(e)
                                }
                            }), l(n).map(h).reduce((e, t) => (e.push(...t), e), [])
                        },
                        g = {
                            add: (t, r = {}) => {
                                let {
                                    name: o,
                                    override: a,
                                    aliases: u
                                } = r, l = {
                                    step: "initialize",
                                    priority: "normal",
                                    middleware: t,
                                    ...r
                                }, c = i(o, u);
                                if (c.length > 0) {
                                    if (c.some(e => n.has(e))) {
                                        if (!a) throw Error(`Duplicate middleware name '${s(o,u)}'`);
                                        for (let t of c) {
                                            let r = e.findIndex(e => e.name === t || e.aliases ? .some(e => e === t));
                                            if (-1 === r) continue;
                                            let n = e[r];
                                            if (n.step !== l.step || l.priority !== n.priority) throw Error(`"${s(n.name,n.aliases)}" middleware with ${n.priority} priority in ${n.step} step cannot be overridden by "${s(o,u)}" middleware with ${l.priority} priority in ${l.step} step.`);
                                            e.splice(r, 1)
                                        }
                                    }
                                    for (let e of c) n.add(e)
                                }
                                e.push(l)
                            },
                            addRelativeTo: (e, r) => {
                                let {
                                    name: o,
                                    override: a,
                                    aliases: u
                                } = r, l = {
                                    middleware: e,
                                    ...r
                                }, c = i(o, u);
                                if (c.length > 0) {
                                    if (c.some(e => n.has(e))) {
                                        if (!a) throw Error(`Duplicate middleware name '${s(o,u)}'`);
                                        for (let e of c) {
                                            let r = t.findIndex(t => t.name === e || t.aliases ? .some(t => t === e));
                                            if (-1 === r) continue;
                                            let n = t[r];
                                            if (n.toMiddleware !== l.toMiddleware || n.relation !== l.relation) throw Error(`"${s(n.name,n.aliases)}" middleware ${n.relation} "${n.toMiddleware}" middleware cannot be overridden by "${s(o,u)}" middleware ${l.relation} "${l.toMiddleware}" middleware.`);
                                            t.splice(r, 1)
                                        }
                                    }
                                    for (let e of c) n.add(e)
                                }
                                t.push(l)
                            },
                            clone: () => f(o()),
                            use: e => {
                                e.applyToStack(g)
                            },
                            remove: e => "string" == typeof e ? c(e) : d(e),
                            removeByTag: r => {
                                let s = !1,
                                    o = e => {
                                        let {
                                            tags: t,
                                            name: o,
                                            aliases: a
                                        } = e;
                                        if (t && t.includes(r)) {
                                            for (let e of i(o, a)) n.delete(e);
                                            return s = !0, !1
                                        }
                                        return !0
                                    };
                                return e = e.filter(o), t = t.filter(o), s
                            },
                            concat: e => {
                                let t = f(o());
                                return t.use(e), t.identifyOnResolve(r || t.identifyOnResolve() || (e.identifyOnResolve ? .() ? ? !1)), t
                            },
                            applyToStack: f,
                            identify: () => p(!0).map(e => {
                                let t = e.step ? ? e.relation + " " + e.toMiddleware;
                                return s(e.name, e.aliases) + " - " + t
                            }),
                            identifyOnResolve: e => ("boolean" == typeof e && (r = e), r),
                            resolve: (e, t) => {
                                for (let r of p().map(e => e.middleware).reverse()) e = r(e, t);
                                return r && console.log(g.identify()), e
                            }
                        };
                    return g
                },
                a = {
                    initialize: 5,
                    serialize: 4,
                    build: 3,
                    finalizeRequest: 2,
                    deserialize: 1
                },
                u = {
                    high: 3,
                    normal: 2,
                    low: 1
                };
            class l {
                constructor(e) {
                    this.config = e, this.middlewareStack = o()
                }
                send(e, t, r) {
                    let n;
                    let i = "function" != typeof t ? t : void 0,
                        s = "function" == typeof t ? t : r;
                    if (void 0 === i && !0 === this.config.cacheMiddleware) {
                        this.handlers || (this.handlers = new WeakMap);
                        let t = this.handlers;
                        t.has(e.constructor) ? n = t.get(e.constructor) : (n = e.resolveMiddleware(this.middlewareStack, this.config, i), t.set(e.constructor, n))
                    } else delete this.handlers, n = e.resolveMiddleware(this.middlewareStack, this.config, i);
                    if (!s) return n(e).then(e => e.output);
                    n(e).then(e => s(null, e.output), e => s(e)).catch(() => {})
                }
                destroy() {
                    this.config ? .requestHandler ? .destroy ? .(), delete this.handlers
                }
            }
            var c = r(84098);
            let d = async (e = new Uint8Array, t) => {
                if (e instanceof Uint8Array) return c.HE.mutate(e);
                if (!e) return c.HE.mutate(new Uint8Array);
                let r = t.streamCollector(e);
                return c.HE.mutate(await r)
            };
            var f = r(47826);
            class h {
                constructor() {
                    this.middlewareStack = o()
                }
                static classBuilder() {
                    return new p
                }
                resolveMiddlewareWithContext(e, t, r, {
                    middlewareFn: n,
                    clientName: i,
                    commandName: s,
                    inputFilterSensitiveLog: o,
                    outputFilterSensitiveLog: a,
                    smithyContext: u,
                    additionalContext: l,
                    CommandCtor: c
                }) {
                    for (let i of n.bind(this)(c, e, t, r)) this.middlewareStack.use(i);
                    let d = e.concat(this.middlewareStack),
                        {
                            logger: h
                        } = t,
                        p = {
                            logger: h,
                            clientName: i,
                            commandName: s,
                            inputFilterSensitiveLog: o,
                            outputFilterSensitiveLog: a,
                            [f.zK]: {
                                commandInstance: this,
                                ...u
                            },
                            ...l
                        },
                        {
                            requestHandler: g
                        } = t;
                    return d.resolve(e => g.handle(e.request, r || {}), p)
                }
            }
            class p {
                constructor() {
                    this._init = () => {}, this._ep = {}, this._middlewareFn = () => [], this._commandName = "", this._clientName = "", this._additionalContext = {}, this._smithyContext = {}, this._inputFilterSensitiveLog = e => e, this._outputFilterSensitiveLog = e => e, this._serializer = null, this._deserializer = null
                }
                init(e) {
                    this._init = e
                }
                ep(e) {
                    return this._ep = e, this
                }
                m(e) {
                    return this._middlewareFn = e, this
                }
                s(e, t, r = {}) {
                    return this._smithyContext = {
                        service: e,
                        operation: t,
                        ...r
                    }, this
                }
                c(e = {}) {
                    return this._additionalContext = e, this
                }
                n(e, t) {
                    return this._clientName = e, this._commandName = t, this
                }
                f(e = e => e, t = e => e) {
                    return this._inputFilterSensitiveLog = e, this._outputFilterSensitiveLog = t, this
                }
                ser(e) {
                    return this._serializer = e, this
                }
                de(e) {
                    return this._deserializer = e, this
                }
                build() {
                    let e;
                    let t = this;
                    return e = class extends h {
                        static getEndpointParameterInstructions() {
                            return t._ep
                        }
                        constructor(...[e]) {
                            super(), this.serialize = t._serializer, this.deserialize = t._deserializer, this.input = e ? ? {}, t._init(this)
                        }
                        resolveMiddleware(r, n, i) {
                            return this.resolveMiddlewareWithContext(r, n, i, {
                                CommandCtor: e,
                                middlewareFn: t._middlewareFn,
                                clientName: t._clientName,
                                commandName: t._commandName,
                                inputFilterSensitiveLog: t._inputFilterSensitiveLog,
                                outputFilterSensitiveLog: t._outputFilterSensitiveLog,
                                smithyContext: t._smithyContext,
                                additionalContext: t._additionalContext
                            })
                        }
                    }
                }
            }
            let g = "***SensitiveInformation***",
                m = e => {
                    switch (e) {
                        case "true":
                            return !0;
                        case "false":
                            return !1;
                        default:
                            throw Error(`Unable to parse boolean value "${e}"`)
                    }
                },
                y = e => {
                    if (null != e) {
                        if ("string" == typeof e) {
                            let t = parseFloat(e);
                            if (!Number.isNaN(t)) return String(t) !== String(e) && F.warn(_(`Expected number but observed string: ${e}`)), t
                        }
                        if ("number" == typeof e) return e;
                        throw TypeError(`Expected number, got ${typeof e}: ${e}`)
                    }
                },
                b = Math.ceil(17014118346046923e22 * (2 - 11920928955078125e-23)),
                w = e => {
                    let t = y(e);
                    if (void 0 !== t && !Number.isNaN(t) && t !== 1 / 0 && t !== -1 / 0 && Math.abs(t) > b) throw TypeError(`Expected 32-bit float, got ${e}`);
                    return t
                },
                v = e => {
                    if (null != e) {
                        if (Number.isInteger(e) && !Number.isNaN(e)) return e;
                        throw TypeError(`Expected integer, got ${typeof e}: ${e}`)
                    }
                },
                S = e => x(e, 32),
                A = e => x(e, 16),
                E = e => x(e, 8),
                x = (e, t) => {
                    let r = v(e);
                    if (void 0 !== r && P(r, t) !== r) throw TypeError(`Expected ${t}-bit integer, got ${e}`);
                    return r
                },
                P = (e, t) => {
                    switch (t) {
                        case 32:
                            return Int32Array.of(e)[0];
                        case 16:
                            return Int16Array.of(e)[0];
                        case 8:
                            return Int8Array.of(e)[0]
                    }
                },
                R = (e, t) => {
                    if (null == e) {
                        if (t) throw TypeError(`Expected a non-null value for ${t}`);
                        throw TypeError("Expected a non-null value")
                    }
                    return e
                },
                k = e => {
                    if (null == e) return;
                    if ("object" == typeof e && !Array.isArray(e)) return e;
                    let t = Array.isArray(e) ? "array" : typeof e;
                    throw TypeError(`Expected object, got ${t}: ${e}`)
                },
                T = e => {
                    if (null != e) {
                        if ("string" == typeof e) return e;
                        if (["boolean", "number", "bigint"].includes(typeof e)) return F.warn(_(`Expected string, got ${typeof e}: ${e}`)), String(e);
                        throw TypeError(`Expected string, got ${typeof e}: ${e}`)
                    }
                },
                N = e => "string" == typeof e ? w(C(e)) : w(e),
                M = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g,
                C = e => {
                    let t = e.match(M);
                    if (null === t || t[0].length !== e.length) throw TypeError("Expected real number, got implicit NaN");
                    return parseFloat(e)
                },
                O = e => "string" == typeof e ? v(C(e)) : v(e),
                I = e => "string" == typeof e ? S(C(e)) : S(e),
                U = e => "string" == typeof e ? A(C(e)) : A(e),
                $ = e => "string" == typeof e ? E(C(e)) : E(e),
                _ = e => String(TypeError(e).stack || e).split("\n").slice(0, 5).filter(e => !e.includes("stackTraceWarning")).join("\n"),
                F = {
                    warn: console.warn
                },
                L = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                B = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/),
                D = e => {
                    if (null == e) return;
                    if ("string" != typeof e) throw TypeError("RFC-3339 date-times must be expressed as strings");
                    let t = B.exec(e);
                    if (!t) throw TypeError("Invalid RFC-3339 date-time value");
                    let [r, n, i, s, o, a, u, l, c] = t, d = j(U(K(n)), V(i, "month", 1, 12), V(s, "day", 1, 31), {
                        hours: o,
                        minutes: a,
                        seconds: u,
                        fractionalMilliseconds: l
                    });
                    return "Z" != c.toUpperCase() && d.setTime(d.getTime() - G(c)), d
                },
                j = (e, t, r, n) => {
                    let i = t - 1;
                    return q(e, i, r), new Date(Date.UTC(e, i, r, V(n.hours, "hour", 0, 23), V(n.minutes, "minute", 0, 59), V(n.seconds, "seconds", 0, 60), W(n.fractionalMilliseconds)))
                },
                H = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                q = (e, t, r) => {
                    let n = H[t];
                    if (1 === t && z(e) && (n = 29), r > n) throw TypeError(`Invalid day for ${L[t]} in ${e}: ${r}`)
                },
                z = e => e % 4 == 0 && (e % 100 != 0 || e % 400 == 0),
                V = (e, t, r, n) => {
                    let i = $(K(e));
                    if (i < r || i > n) throw TypeError(`${t} must be between ${r} and ${n}, inclusive`);
                    return i
                },
                W = e => null == e ? 0 : 1e3 * N("0." + e),
                G = e => {
                    let t = e[0],
                        r = 1;
                    if ("+" == t) r = 1;
                    else if ("-" == t) r = -1;
                    else throw TypeError(`Offset direction, ${t}, must be "+" or "-"`);
                    return r * (60 * Number(e.substring(1, 3)) + Number(e.substring(4, 6))) * 6e4
                },
                K = e => {
                    let t = 0;
                    for (; t < e.length - 1 && "0" === e.charAt(t);) t++;
                    return 0 === t ? e : e.slice(t)
                };
            class Z extends Error {
                constructor(e) {
                    super(e.message), Object.setPrototypeOf(this, Z.prototype), this.name = e.name, this.$fault = e.$fault, this.$metadata = e.$metadata
                }
            }
            let X = (e, t = {}) => {
                    Object.entries(t).filter(([, e]) => void 0 !== e).forEach(([t, r]) => {
                        (void 0 == e[t] || "" === e[t]) && (e[t] = r)
                    });
                    let r = e.message || e.Message || "UnknownError";
                    return e.message = r, delete e.Message, e
                },
                Y = ({
                    output: e,
                    parsedBody: t,
                    exceptionCtor: r,
                    errorCode: n
                }) => {
                    let i = Q(e),
                        s = i.httpStatusCode ? i.httpStatusCode + "" : void 0;
                    throw X(new r({
                        name: t ? .code || t ? .Code || n || s || "UnknownError",
                        $fault: "client",
                        $metadata: i
                    }), t)
                },
                J = e => ({
                    output: t,
                    parsedBody: r,
                    errorCode: n
                }) => {
                    Y({
                        output: t,
                        parsedBody: r,
                        exceptionCtor: e,
                        errorCode: n
                    })
                },
                Q = e => ({
                    httpStatusCode: e.statusCode,
                    requestId: e.headers["x-amzn-requestid"] ? ? e.headers["x-amzn-request-id"] ? ? e.headers["x-amz-request-id"],
                    extendedRequestId: e.headers["x-amz-id-2"],
                    cfId: e.headers["x-amz-cf-id"]
                }),
                ee = e => {
                    switch (e) {
                        case "standard":
                        case "cross-region":
                            return {
                                retryMode: "standard",
                                connectionTimeout: 3100
                            };
                        case "in-region":
                            return {
                                retryMode: "standard",
                                connectionTimeout: 1100
                            };
                        case "mobile":
                            return {
                                retryMode: "standard",
                                connectionTimeout: 3e4
                            };
                        default:
                            return {}
                    }
                },
                et = e => {
                    let t = [];
                    for (let r in f.f3) {
                        let n = f.f3[r];
                        void 0 !== e[n] && t.push({
                            algorithmId: () => n,
                            checksumConstructor: () => e[n]
                        })
                    }
                    return {
                        _checksumAlgorithms: t,
                        addChecksumAlgorithm(e) {
                            this._checksumAlgorithms.push(e)
                        },
                        checksumAlgorithms() {
                            return this._checksumAlgorithms
                        }
                    }
                },
                er = e => {
                    let t = {};
                    return e.checksumAlgorithms().forEach(e => {
                        t[e.algorithmId()] = e.checksumConstructor()
                    }), t
                },
                en = e => {
                    let t = e.retryStrategy;
                    return {
                        setRetryStrategy(e) {
                            t = e
                        },
                        retryStrategy: () => t
                    }
                },
                ei = e => {
                    let t = {};
                    return t.retryStrategy = e.retryStrategy(), t
                },
                es = e => ({ ...et(e),
                    ...en(e)
                }),
                eo = e => ({ ...er(e),
                    ...ei(e)
                }),
                ea = e => Array.isArray(e) ? e : [e],
                eu = e => {
                    let t = "#text";
                    for (let r in e) e.hasOwnProperty(r) && void 0 !== e[r][t] ? e[r] = e[r][t] : "object" == typeof e[r] && null !== e[r] && (e[r] = eu(e[r]));
                    return e
                },
                el = function() {
                    let e = Object.getPrototypeOf(this).constructor,
                        t = Function.bind.apply(String, [null, ...arguments]),
                        r = new t;
                    return Object.setPrototypeOf(r, e.prototype), r
                };

            function ec(e, t, r) {
                let n, i;
                if (void 0 === t && void 0 === r) n = {}, i = e;
                else {
                    if (n = e, "function" == typeof t) return ed(n, t, i = r);
                    i = t
                }
                for (let e of Object.keys(i)) {
                    if (!Array.isArray(i[e])) {
                        n[e] = i[e];
                        continue
                    }
                    ef(n, null, i, e)
                }
                return n
            }
            el.prototype = Object.create(String.prototype, {
                constructor: {
                    value: el,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), Object.setPrototypeOf(el, String);
            let ed = (e, t, r) => ec(e, Object.entries(r).reduce((e, [r, n]) => (Array.isArray(n) ? e[r] = n : "function" == typeof n ? e[r] = [t, n()] : e[r] = [t, n], e), {})),
                ef = (e, t, r, n) => {
                    if (null !== t) {
                        let i = r[n];
                        "function" == typeof i && (i = [, i]);
                        let [s = eh, o = ep, a = n] = i;
                        ("function" == typeof s && s(t[a]) || "function" != typeof s && s) && (e[n] = o(t[a]));
                        return
                    }
                    let [i, s] = r[n];
                    if ("function" == typeof s) {
                        let t;
                        let r = void 0 === i && null != (t = s()),
                            o = "function" == typeof i && !!i(void 0) || "function" != typeof i && !!i;
                        r ? e[n] = t : o && (e[n] = s())
                    } else {
                        let t = void 0 === i && null != s,
                            r = "function" == typeof i && !!i(s) || "function" != typeof i && !!i;
                        (t || r) && (e[n] = s)
                    }
                },
                eh = e => null != e,
                ep = e => e;

            function eg(e) {
                return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
                    return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                })
            }
            let em = (e, t, r, n, i, s) => {
                if (null != t && void 0 !== t[r]) {
                    let t = n();
                    if (t.length <= 0) throw Error("Empty value provided for input HTTP label: " + r + ".");
                    e = e.replace(i, s ? t.split("/").map(e => eg(e)).join("/") : eg(t))
                } else throw Error("No value provided for input HTTP label: " + r + ".");
                return e
            }
        },
        47826: function(e, t, r) {
            "use strict";
            var n, i, s, o, a, u, l, c, d, f, h, p, g, m;
            r.d(t, {
                f3: function() {
                    return o
                },
                cj: function() {
                    return s
                },
                zK: function() {
                    return y
                }
            }), (c = n || (n = {})).HEADER = "header", c.QUERY = "query", (d = i || (i = {})).HEADER = "header", d.QUERY = "query", (f = s || (s = {})).HTTP = "http", f.HTTPS = "https", (h = o || (o = {})).MD5 = "md5", h.CRC32 = "crc32", h.CRC32C = "crc32c", h.SHA1 = "sha1", h.SHA256 = "sha256", (p = a || (a = {}))[p.HEADER = 0] = "HEADER", p[p.TRAILER = 1] = "TRAILER";
            let y = "__smithy_context";
            (g = u || (u = {})).PROFILE = "profile", g.SSO_SESSION = "sso-session", g.SERVICES = "services", (m = l || (l = {})).HTTP_0_9 = "http/0.9", m.HTTP_1_0 = "http/1.0", m.TDS_8_0 = "tds/8.0"
        },
        76884: function(e, t, r) {
            "use strict";
            r.d(t, {
                e: function() {
                    return n
                }
            });
            let n = e => {
                let t;
                if ("string" == typeof e) return n(new URL(e));
                let {
                    hostname: r,
                    pathname: i,
                    port: s,
                    protocol: o,
                    search: a
                } = e;
                return a && (t = function(e) {
                    let t = {};
                    if (e = e.replace(/^\?/, ""))
                        for (let r of e.split("&")) {
                            let [e, n = null] = r.split("=");
                            e = decodeURIComponent(e), n && (n = decodeURIComponent(n)), e in t ? Array.isArray(t[e]) ? t[e].push(n) : t[e] = [t[e], n] : t[e] = n
                        }
                    return t
                }(a)), {
                    hostname: r,
                    port: s ? parseInt(s) : void 0,
                    protocol: o,
                    path: i,
                    query: t
                }
            }
        },
        5177: function(e, t, r) {
            "use strict";
            r.d(t, {
                G: function() {
                    return s
                },
                s: function() {
                    return a
                }
            });
            let n = {},
                i = Array(64);
            for (let e = 0; e + 65 <= 90; e++) {
                let t = String.fromCharCode(e + 65);
                n[t] = e, i[e] = t
            }
            for (let e = 0; e + 97 <= 122; e++) {
                let t = String.fromCharCode(e + 97),
                    r = e + 26;
                n[t] = r, i[r] = t
            }
            for (let e = 0; e < 10; e++) {
                n[e.toString(10)] = e + 52;
                let t = e.toString(10),
                    r = e + 52;
                n[t] = r, i[r] = t
            }
            n["+"] = 62, i[62] = "+", n["/"] = 63, i[63] = "/";
            let s = e => {
                let t = e.length / 4 * 3;
                "==" === e.slice(-2) ? t -= 2 : "=" === e.slice(-1) && t--;
                let r = new ArrayBuffer(t),
                    i = new DataView(r);
                for (let t = 0; t < e.length; t += 4) {
                    let r = 0,
                        s = 0;
                    for (let i = t, o = t + 3; i <= o; i++)
                        if ("=" !== e[i]) {
                            if (!(e[i] in n)) throw TypeError(`Invalid character ${e[i]} in base64 string.`);
                            r |= n[e[i]] << (o - i) * 6, s += 6
                        } else r >>= 6;
                    let o = t / 4 * 3;
                    r >>= s % 8;
                    let a = Math.floor(s / 8);
                    for (let e = 0; e < a; e++) {
                        let t = (a - e - 1) * 8;
                        i.setUint8(o + e, (r & 255 << t) >> t)
                    }
                }
                return new Uint8Array(r)
            };
            var o = r(32033);

            function a(e) {
                let t;
                let r = "object" == typeof(t = "string" == typeof e ? (0, o.$)(e) : e) && "number" == typeof t.length,
                    n = "object" == typeof t && "number" == typeof t.byteOffset && "number" == typeof t.byteLength;
                if (!r && !n) throw Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
                let s = "";
                for (let e = 0; e < t.length; e += 3) {
                    let r = 0,
                        n = 0;
                    for (let i = e, s = Math.min(e + 3, t.length); i < s; i++) r |= t[i] << (s - i - 1) * 8, n += 8;
                    let o = Math.ceil(n / 6);
                    r <<= 6 * o - n;
                    for (let e = 1; e <= o; e++) {
                        let t = (o - e) * 6;
                        s += i[(r & 63 << t) >> t]
                    }
                    s += "==".slice(0, 4 - o)
                }
                return s
            }
        },
        28916: function(e, t, r) {
            "use strict";
            var n, i;
            r.d(t, {
                Bt: function() {
                    return n
                },
                hu: function() {
                    return s
                }
            });
            let s = (e, t, r) => {
                if (t in e) {
                    if ("true" === e[t]) return !0;
                    if ("false" === e[t]) return !1;
                    throw Error(`Cannot load ${r} "${t}". Expected "true" or "false", got ${e[t]}.`)
                }
            };
            (i = n || (n = {})).ENV = "env", i.CONFIG = "shared config entry"
        },
        63202: function(e, t, r) {
            "use strict";
            r.d(t, {
                H: function() {
                    return s
                },
                N: function() {
                    return o
                }
            });
            let n = {},
                i = {};
            for (let e = 0; e < 256; e++) {
                let t = e.toString(16).toLowerCase();
                1 === t.length && (t = `0${t}`), n[e] = t, i[t] = e
            }

            function s(e) {
                if (e.length % 2 != 0) throw Error("Hex encoded strings must have an even number length");
                let t = new Uint8Array(e.length / 2);
                for (let r = 0; r < e.length; r += 2) {
                    let n = e.slice(r, r + 2).toLowerCase();
                    if (n in i) t[r / 2] = i[n];
                    else throw Error(`Cannot decode unrecognized sequence ${n} as hexadecimal`)
                }
                return t
            }

            function o(e) {
                let t = "";
                for (let r = 0; r < e.byteLength; r++) t += n[e[r]];
                return t
            }
        },
        19933: function(e, t, r) {
            "use strict";
            r.d(t, {
                J: function() {
                    return i
                },
                $: function() {
                    return s
                }
            });
            var n = r(47826);
            let i = e => e[n.zK] || (e[n.zK] = {}),
                s = e => {
                    if ("function" == typeof e) return e;
                    let t = Promise.resolve(e);
                    return () => t
                }
        },
        4367: function(e, t, r) {
            "use strict";
            r.d(t, {
                AY: function() {
                    return S
                },
                J: function() {
                    return n
                },
                Fe: function() {
                    return l
                },
                CA: function() {
                    return i
                },
                ok: function() {
                    return u
                },
                E5: function() {
                    return f
                },
                lk: function() {
                    return m
                },
                sn: function() {
                    return c
                },
                gZ: function() {
                    return g
                },
                r5: function() {
                    return y
                },
                RM: function() {
                    return h
                },
                Ul: function() {
                    return o
                },
                Uz: function() {
                    return v
                },
                sb: function() {
                    return d
                },
                Y2: function() {
                    return p
                }
            }), (s = o || (o = {})).STANDARD = "standard", s.ADAPTIVE = "adaptive";
            let n = 3,
                i = o.STANDARD;
            var s, o, a = r(77332);
            class u {
                constructor(e) {
                    this.currentCapacity = 0, this.enabled = !1, this.lastMaxRate = 0, this.measuredTxRate = 0, this.requestCount = 0, this.lastTimestamp = 0, this.timeWindow = 0, this.beta = e ? .beta ? ? .7, this.minCapacity = e ? .minCapacity ? ? 1, this.minFillRate = e ? .minFillRate ? ? .5, this.scaleConstant = e ? .scaleConstant ? ? .4, this.smooth = e ? .smooth ? ? .8;
                    let t = this.getCurrentTimeInSeconds();
                    this.lastThrottleTime = t, this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds()), this.fillRate = this.minFillRate, this.maxCapacity = this.minCapacity
                }
                getCurrentTimeInSeconds() {
                    return Date.now() / 1e3
                }
                async getSendToken() {
                    return this.acquireTokenBucket(1)
                }
                async acquireTokenBucket(e) {
                    if (this.enabled) {
                        if (this.refillTokenBucket(), e > this.currentCapacity) {
                            let t = (e - this.currentCapacity) / this.fillRate * 1e3;
                            await new Promise(e => setTimeout(e, t))
                        }
                        this.currentCapacity = this.currentCapacity - e
                    }
                }
                refillTokenBucket() {
                    let e = this.getCurrentTimeInSeconds();
                    if (!this.lastTimestamp) {
                        this.lastTimestamp = e;
                        return
                    }
                    let t = (e - this.lastTimestamp) * this.fillRate;
                    this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + t), this.lastTimestamp = e
                }
                updateClientSendingRate(e) {
                    let t;
                    if (this.updateMeasuredRate(), (0, a.pK)(e)) {
                        let e = this.enabled ? Math.min(this.measuredTxRate, this.fillRate) : this.measuredTxRate;
                        this.lastMaxRate = e, this.calculateTimeWindow(), this.lastThrottleTime = this.getCurrentTimeInSeconds(), t = this.cubicThrottle(e), this.enableTokenBucket()
                    } else this.calculateTimeWindow(), t = this.cubicSuccess(this.getCurrentTimeInSeconds());
                    let r = Math.min(t, 2 * this.measuredTxRate);
                    this.updateTokenBucketRate(r)
                }
                calculateTimeWindow() {
                    this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3))
                }
                cubicThrottle(e) {
                    return this.getPrecise(e * this.beta)
                }
                cubicSuccess(e) {
                    return this.getPrecise(this.scaleConstant * Math.pow(e - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate)
                }
                enableTokenBucket() {
                    this.enabled = !0
                }
                updateTokenBucketRate(e) {
                    this.refillTokenBucket(), this.fillRate = Math.max(e, this.minFillRate), this.maxCapacity = Math.max(e, this.minCapacity), this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity)
                }
                updateMeasuredRate() {
                    let e = Math.floor(2 * this.getCurrentTimeInSeconds()) / 2;
                    if (this.requestCount++, e > this.lastTxRateBucket) {
                        let t = this.requestCount / (e - this.lastTxRateBucket);
                        this.measuredTxRate = this.getPrecise(t * this.smooth + this.measuredTxRate * (1 - this.smooth)), this.requestCount = 0, this.lastTxRateBucket = e
                    }
                }
                getPrecise(e) {
                    return parseFloat(e.toFixed(8))
                }
            }
            let l = 100,
                c = 2e4,
                d = 500,
                f = 500,
                h = 5,
                p = 10,
                g = 1,
                m = "amz-sdk-invocation-id",
                y = "amz-sdk-request",
                b = () => {
                    let e = l;
                    return {
                        computeNextBackoffDelay: t => Math.floor(Math.min(c, Math.random() * 2 ** t * e)),
                        setDelayBase: t => {
                            e = t
                        }
                    }
                },
                w = ({
                    retryDelay: e,
                    retryCount: t,
                    retryCost: r
                }) => ({
                    getRetryCount: () => t,
                    getRetryDelay: () => Math.min(c, e),
                    getRetryCost: () => r
                });
            class v {
                constructor(e) {
                    this.maxAttempts = e, this.mode = o.STANDARD, this.capacity = f, this.retryBackoffStrategy = b(), this.maxAttemptsProvider = "function" == typeof e ? e : async () => e
                }
                async acquireInitialRetryToken(e) {
                    return w({
                        retryDelay: l,
                        retryCount: 0
                    })
                }
                async refreshRetryTokenForRetry(e, t) {
                    let r = await this.getMaxAttempts();
                    if (this.shouldRetry(e, t, r)) {
                        let r = t.errorType;
                        this.retryBackoffStrategy.setDelayBase("THROTTLING" === r ? d : l);
                        let n = this.retryBackoffStrategy.computeNextBackoffDelay(e.getRetryCount()),
                            i = t.retryAfterHint ? Math.max(t.retryAfterHint.getTime() - Date.now() || 0, n) : n,
                            s = this.getCapacityCost(r);
                        return this.capacity -= s, w({
                            retryDelay: i,
                            retryCount: e.getRetryCount() + 1,
                            retryCost: s
                        })
                    }
                    throw Error("No retry token available")
                }
                recordSuccess(e) {
                    this.capacity = Math.max(f, this.capacity + (e.getRetryCost() ? ? g))
                }
                getCapacity() {
                    return this.capacity
                }
                async getMaxAttempts() {
                    try {
                        return await this.maxAttemptsProvider()
                    } catch (e) {
                        return console.warn(`Max attempts provider could not resolve. Using default of ${n}`), n
                    }
                }
                shouldRetry(e, t, r) {
                    return e.getRetryCount() + 1 < r && this.capacity >= this.getCapacityCost(t.errorType) && this.isRetryableError(t.errorType)
                }
                getCapacityCost(e) {
                    return "TRANSIENT" === e ? p : h
                }
                isRetryableError(e) {
                    return "THROTTLING" === e || "TRANSIENT" === e
                }
            }
            class S {
                constructor(e, t) {
                    this.maxAttemptsProvider = e, this.mode = o.ADAPTIVE;
                    let {
                        rateLimiter: r
                    } = t ? ? {};
                    this.rateLimiter = r ? ? new u, this.standardRetryStrategy = new v(e)
                }
                async acquireInitialRetryToken(e) {
                    return await this.rateLimiter.getSendToken(), this.standardRetryStrategy.acquireInitialRetryToken(e)
                }
                async refreshRetryTokenForRetry(e, t) {
                    return this.rateLimiter.updateClientSendingRate(t), this.standardRetryStrategy.refreshRetryTokenForRetry(e, t)
                }
                recordSuccess(e) {
                    this.rateLimiter.updateClientSendingRate({}), this.standardRetryStrategy.recordSuccess(e)
                }
            }
        },
        84098: function(e, t, r) {
            "use strict";
            r.d(t, {
                HE: function() {
                    return o
                },
                LN: function() {
                    return a
                },
                TS: function() {
                    return g
                },
                Ou: function() {
                    return f
                },
                vH: function() {
                    return p
                }
            });
            var n = r(5177),
                i = r(98826),
                s = r(32033);
            class o extends Uint8Array {
                static fromString(e, t = "utf-8") {
                    if ("string" == typeof e) return "base64" === t ? o.mutate((0, n.G)(e)) : o.mutate((0, s.$)(e));
                    throw Error(`Unsupported conversion from ${typeof e} to Uint8ArrayBlobAdapter.`)
                }
                static mutate(e) {
                    return Object.setPrototypeOf(e, o.prototype), e
                }
                transformToString(e = "utf-8") {
                    return function(e, t = "utf-8") {
                        return "base64" === t ? (0, n.s)(e) : (0, i.G)(e)
                    }(this, e)
                }
            }
            let a = (e, t) => {
                let {
                    base64Encoder: r,
                    bodyLengthChecker: n,
                    checksumAlgorithmFn: i,
                    checksumLocationName: s,
                    streamHasher: o
                } = t, a = void 0 !== r && void 0 !== n && void 0 !== i && void 0 !== s && void 0 !== o, u = a ? o(i, e) : void 0, l = e.getReader();
                return new ReadableStream({
                    async pull(e) {
                        let {
                            value: t,
                            done: i
                        } = await l.read();
                        if (i) {
                            if (e.enqueue(`0\r
`), a) {
                                let t = r(await u);
                                e.enqueue(`${s}:${t}\r
`), e.enqueue(`\r
`)
                            }
                            e.close()
                        } else e.enqueue(`${(n(t)||0).toString(16)}\r
${t}\r
`)
                    }
                })
            };
            var u = r(69779),
                l = r(63202);
            let c = e => "function" == typeof ReadableStream && (e ? .constructor ? .name === ReadableStream.name || e instanceof ReadableStream),
                d = "The stream has already been transformed.",
                f = e => {
                    if (!h(e) && !c(e)) {
                        let t = e ? .__proto__ ? .constructor ? .name || e;
                        throw Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${t}`)
                    }
                    let t = !1,
                        r = async () => {
                            if (t) throw Error(d);
                            return t = !0, await (0, u.CF)(e)
                        },
                        s = e => {
                            if ("function" != typeof e.stream) throw Error("Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.\nIf you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body");
                            return e.stream()
                        };
                    return Object.assign(e, {
                        transformToByteArray: r,
                        transformToString: async e => {
                            let t = await r();
                            if ("base64" === e) return (0, n.s)(t);
                            if ("hex" === e) return (0, l.N)(t);
                            if (void 0 === e || "utf8" === e || "utf-8" === e) return (0, i.G)(t);
                            if ("function" == typeof TextDecoder) return new TextDecoder(e).decode(t);
                            throw Error("TextDecoder is not available, please make sure polyfill is provided.")
                        },
                        transformToWebStream: () => {
                            if (t) throw Error(d);
                            if (t = !0, h(e)) return s(e);
                            if (c(e)) return e;
                            throw Error(`Cannot transform payload to web stream, got ${e}`)
                        }
                    })
                },
                h = e => "function" == typeof Blob && e instanceof Blob;
            async function p(e) {
                return "function" == typeof e.stream && (e = e.stream()), e.tee()
            }
            async function g(e, t) {
                let r = 0,
                    n = [],
                    i = e.getReader(),
                    s = !1;
                for (; !s;) {
                    let {
                        done: e,
                        value: o
                    } = await i.read();
                    if (o && (n.push(o), r += o ? .byteLength ? ? 0), r >= t) break;
                    s = e
                }
                i.releaseLock();
                let o = new Uint8Array(Math.min(t, r)),
                    a = 0;
                for (let e of n) {
                    if (e.byteLength > o.byteLength - a) {
                        o.set(e.subarray(0, o.byteLength - a), a);
                        break
                    }
                    o.set(e, a), a += e.length
                }
                return o
            }
        },
        16969: function(e, t, r) {
            "use strict";
            r.d(t, {
                i: function() {
                    return n
                }
            });
            let n = e => encodeURIComponent(e).replace(/[!'()*]/g, i),
                i = e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`
        },
        32033: function(e, t, r) {
            "use strict";
            r.d(t, {
                $: function() {
                    return n
                }
            });
            let n = e => new TextEncoder().encode(e)
        },
        98826: function(e, t, r) {
            "use strict";
            r.d(t, {
                G: function() {
                    return n
                }
            });
            let n = e => {
                if ("string" == typeof e) return e;
                if ("object" != typeof e || "number" != typeof e.byteOffset || "number" != typeof e.byteLength) throw Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
                return new TextDecoder("utf-8").decode(e)
            }
        },
        77160: function(e) {
            var t;
            t = function() {
                return function(e) {
                    var t = {};

                    function r(n) {
                        if (t[n]) return t[n].exports;
                        var i = t[n] = {
                            i: n,
                            l: !1,
                            exports: {}
                        };
                        return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
                    }
                    return r.m = e, r.c = t, r.d = function(e, t, n) {
                        r.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: n
                        })
                    }, r.r = function(e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }, r.t = function(e, t) {
                        if (1 & t && (e = r(e)), 8 & t || 4 & t && "object" == typeof e && e && e.__esModule) return e;
                        var n = Object.create(null);
                        if (r.r(n), Object.defineProperty(n, "default", {
                                enumerable: !0,
                                value: e
                            }), 2 & t && "string" != typeof e)
                            for (var i in e) r.d(n, i, (function(t) {
                                return e[t]
                            }).bind(null, i));
                        return n
                    }, r.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return r.d(t, "a", t), t
                    }, r.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, r.p = "", r(r.s = 90)
                }({
                    17: function(e, t, r) {
                        "use strict";
                        t.__esModule = !0, t.default = void 0;
                        var n = r(18),
                            i = function() {
                                function e() {}
                                return e.getFirstMatch = function(e, t) {
                                    var r = t.match(e);
                                    return r && r.length > 0 && r[1] || ""
                                }, e.getSecondMatch = function(e, t) {
                                    var r = t.match(e);
                                    return r && r.length > 1 && r[2] || ""
                                }, e.matchAndReturnConst = function(e, t, r) {
                                    if (e.test(t)) return r
                                }, e.getWindowsVersionName = function(e) {
                                    switch (e) {
                                        case "NT":
                                            return "NT";
                                        case "XP":
                                        case "NT 5.1":
                                            return "XP";
                                        case "NT 5.0":
                                            return "2000";
                                        case "NT 5.2":
                                            return "2003";
                                        case "NT 6.0":
                                            return "Vista";
                                        case "NT 6.1":
                                            return "7";
                                        case "NT 6.2":
                                            return "8";
                                        case "NT 6.3":
                                            return "8.1";
                                        case "NT 10.0":
                                            return "10";
                                        default:
                                            return
                                    }
                                }, e.getMacOSVersionName = function(e) {
                                    var t = e.split(".").splice(0, 2).map(function(e) {
                                        return parseInt(e, 10) || 0
                                    });
                                    if (t.push(0), 10 === t[0]) switch (t[1]) {
                                        case 5:
                                            return "Leopard";
                                        case 6:
                                            return "Snow Leopard";
                                        case 7:
                                            return "Lion";
                                        case 8:
                                            return "Mountain Lion";
                                        case 9:
                                            return "Mavericks";
                                        case 10:
                                            return "Yosemite";
                                        case 11:
                                            return "El Capitan";
                                        case 12:
                                            return "Sierra";
                                        case 13:
                                            return "High Sierra";
                                        case 14:
                                            return "Mojave";
                                        case 15:
                                            return "Catalina";
                                        default:
                                            return
                                    }
                                }, e.getAndroidVersionName = function(e) {
                                    var t = e.split(".").splice(0, 2).map(function(e) {
                                        return parseInt(e, 10) || 0
                                    });
                                    if (t.push(0), !(1 === t[0] && t[1] < 5)) return 1 === t[0] && t[1] < 6 ? "Cupcake" : 1 === t[0] && t[1] >= 6 ? "Donut" : 2 === t[0] && t[1] < 2 ? "Eclair" : 2 === t[0] && 2 === t[1] ? "Froyo" : 2 === t[0] && t[1] > 2 ? "Gingerbread" : 3 === t[0] ? "Honeycomb" : 4 === t[0] && t[1] < 1 ? "Ice Cream Sandwich" : 4 === t[0] && t[1] < 4 ? "Jelly Bean" : 4 === t[0] && t[1] >= 4 ? "KitKat" : 5 === t[0] ? "Lollipop" : 6 === t[0] ? "Marshmallow" : 7 === t[0] ? "Nougat" : 8 === t[0] ? "Oreo" : 9 === t[0] ? "Pie" : void 0
                                }, e.getVersionPrecision = function(e) {
                                    return e.split(".").length
                                }, e.compareVersions = function(t, r, n) {
                                    void 0 === n && (n = !1);
                                    var i = e.getVersionPrecision(t),
                                        s = e.getVersionPrecision(r),
                                        o = Math.max(i, s),
                                        a = 0,
                                        u = e.map([t, r], function(t) {
                                            var r = o - e.getVersionPrecision(t),
                                                n = t + Array(r + 1).join(".0");
                                            return e.map(n.split("."), function(e) {
                                                return Array(20 - e.length).join("0") + e
                                            }).reverse()
                                        });
                                    for (n && (a = o - Math.min(i, s)), o -= 1; o >= a;) {
                                        if (u[0][o] > u[1][o]) return 1;
                                        if (u[0][o] === u[1][o]) {
                                            if (o === a) return 0;
                                            o -= 1
                                        } else if (u[0][o] < u[1][o]) return -1
                                    }
                                }, e.map = function(e, t) {
                                    var r, n = [];
                                    if (Array.prototype.map) return Array.prototype.map.call(e, t);
                                    for (r = 0; r < e.length; r += 1) n.push(t(e[r]));
                                    return n
                                }, e.find = function(e, t) {
                                    var r, n;
                                    if (Array.prototype.find) return Array.prototype.find.call(e, t);
                                    for (r = 0, n = e.length; r < n; r += 1) {
                                        var i = e[r];
                                        if (t(i, r)) return i
                                    }
                                }, e.assign = function(e) {
                                    for (var t, r, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) i[s - 1] = arguments[s];
                                    if (Object.assign) return Object.assign.apply(Object, [e].concat(i));
                                    for (t = 0, r = i.length; t < r; t += 1)(function() {
                                        var r = i[t];
                                        "object" == typeof r && null !== r && Object.keys(r).forEach(function(t) {
                                            e[t] = r[t]
                                        })
                                    })();
                                    return e
                                }, e.getBrowserAlias = function(e) {
                                    return n.BROWSER_ALIASES_MAP[e]
                                }, e.getBrowserTypeByAlias = function(e) {
                                    return n.BROWSER_MAP[e] || ""
                                }, e
                            }();
                        t.default = i, e.exports = t.default
                    },
                    18: function(e, t, r) {
                        "use strict";
                        t.__esModule = !0, t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = void 0, t.BROWSER_ALIASES_MAP = {
                            "Amazon Silk": "amazon_silk",
                            "Android Browser": "android",
                            Bada: "bada",
                            BlackBerry: "blackberry",
                            Chrome: "chrome",
                            Chromium: "chromium",
                            Electron: "electron",
                            Epiphany: "epiphany",
                            Firefox: "firefox",
                            Focus: "focus",
                            Generic: "generic",
                            "Google Search": "google_search",
                            Googlebot: "googlebot",
                            "Internet Explorer": "ie",
                            "K-Meleon": "k_meleon",
                            Maxthon: "maxthon",
                            "Microsoft Edge": "edge",
                            "MZ Browser": "mz",
                            "NAVER Whale Browser": "naver",
                            Opera: "opera",
                            "Opera Coast": "opera_coast",
                            PhantomJS: "phantomjs",
                            Puffin: "puffin",
                            QupZilla: "qupzilla",
                            QQ: "qq",
                            QQLite: "qqlite",
                            Safari: "safari",
                            Sailfish: "sailfish",
                            "Samsung Internet for Android": "samsung_internet",
                            SeaMonkey: "seamonkey",
                            Sleipnir: "sleipnir",
                            Swing: "swing",
                            Tizen: "tizen",
                            "UC Browser": "uc",
                            Vivaldi: "vivaldi",
                            "WebOS Browser": "webos",
                            WeChat: "wechat",
                            "Yandex Browser": "yandex",
                            Roku: "roku"
                        }, t.BROWSER_MAP = {
                            amazon_silk: "Amazon Silk",
                            android: "Android Browser",
                            bada: "Bada",
                            blackberry: "BlackBerry",
                            chrome: "Chrome",
                            chromium: "Chromium",
                            electron: "Electron",
                            epiphany: "Epiphany",
                            firefox: "Firefox",
                            focus: "Focus",
                            generic: "Generic",
                            googlebot: "Googlebot",
                            google_search: "Google Search",
                            ie: "Internet Explorer",
                            k_meleon: "K-Meleon",
                            maxthon: "Maxthon",
                            edge: "Microsoft Edge",
                            mz: "MZ Browser",
                            naver: "NAVER Whale Browser",
                            opera: "Opera",
                            opera_coast: "Opera Coast",
                            phantomjs: "PhantomJS",
                            puffin: "Puffin",
                            qupzilla: "QupZilla",
                            qq: "QQ Browser",
                            qqlite: "QQ Browser Lite",
                            safari: "Safari",
                            sailfish: "Sailfish",
                            samsung_internet: "Samsung Internet for Android",
                            seamonkey: "SeaMonkey",
                            sleipnir: "Sleipnir",
                            swing: "Swing",
                            tizen: "Tizen",
                            uc: "UC Browser",
                            vivaldi: "Vivaldi",
                            webos: "WebOS Browser",
                            wechat: "WeChat",
                            yandex: "Yandex Browser"
                        }, t.PLATFORMS_MAP = {
                            tablet: "tablet",
                            mobile: "mobile",
                            desktop: "desktop",
                            tv: "tv"
                        }, t.OS_MAP = {
                            WindowsPhone: "Windows Phone",
                            Windows: "Windows",
                            MacOS: "macOS",
                            iOS: "iOS",
                            Android: "Android",
                            WebOS: "WebOS",
                            BlackBerry: "BlackBerry",
                            Bada: "Bada",
                            Tizen: "Tizen",
                            Linux: "Linux",
                            ChromeOS: "Chrome OS",
                            PlayStation4: "PlayStation 4",
                            Roku: "Roku"
                        }, t.ENGINE_MAP = {
                            EdgeHTML: "EdgeHTML",
                            Blink: "Blink",
                            Trident: "Trident",
                            Presto: "Presto",
                            Gecko: "Gecko",
                            WebKit: "WebKit"
                        }
                    },
                    90: function(e, t, r) {
                        "use strict";
                        t.__esModule = !0, t.default = void 0;
                        var n, i = (n = r(91)) && n.__esModule ? n : {
                                default: n
                            },
                            s = r(18),
                            o = function() {
                                function e() {}
                                return e.getParser = function(e, t) {
                                        if (void 0 === t && (t = !1), "string" != typeof e) throw Error("UserAgent should be a string");
                                        return new i.default(e, t)
                                    }, e.parse = function(e) {
                                        return new i.default(e).getResult()
                                    },
                                    function(e, t) {
                                        for (var r = 0; r < t.length; r++) {
                                            var n = t[r];
                                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                                        }
                                    }(e, [{
                                        key: "BROWSER_MAP",
                                        get: function() {
                                            return s.BROWSER_MAP
                                        }
                                    }, {
                                        key: "ENGINE_MAP",
                                        get: function() {
                                            return s.ENGINE_MAP
                                        }
                                    }, {
                                        key: "OS_MAP",
                                        get: function() {
                                            return s.OS_MAP
                                        }
                                    }, {
                                        key: "PLATFORMS_MAP",
                                        get: function() {
                                            return s.PLATFORMS_MAP
                                        }
                                    }]), e
                            }();
                        t.default = o, e.exports = t.default
                    },
                    91: function(e, t, r) {
                        "use strict";
                        t.__esModule = !0, t.default = void 0;
                        var n = u(r(92)),
                            i = u(r(93)),
                            s = u(r(94)),
                            o = u(r(95)),
                            a = u(r(17));

                        function u(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            }
                        }
                        var l = function() {
                            function e(e, t) {
                                if (void 0 === t && (t = !1), null == e || "" === e) throw Error("UserAgent parameter can't be empty");
                                this._ua = e, this.parsedResult = {}, !0 !== t && this.parse()
                            }
                            var t = e.prototype;
                            return t.getUA = function() {
                                return this._ua
                            }, t.test = function(e) {
                                return e.test(this._ua)
                            }, t.parseBrowser = function() {
                                var e = this;
                                this.parsedResult.browser = {};
                                var t = a.default.find(n.default, function(t) {
                                    if ("function" == typeof t.test) return t.test(e);
                                    if (t.test instanceof Array) return t.test.some(function(t) {
                                        return e.test(t)
                                    });
                                    throw Error("Browser's test function is not valid")
                                });
                                return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser
                            }, t.getBrowser = function() {
                                return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser()
                            }, t.getBrowserName = function(e) {
                                return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || ""
                            }, t.getBrowserVersion = function() {
                                return this.getBrowser().version
                            }, t.getOS = function() {
                                return this.parsedResult.os ? this.parsedResult.os : this.parseOS()
                            }, t.parseOS = function() {
                                var e = this;
                                this.parsedResult.os = {};
                                var t = a.default.find(i.default, function(t) {
                                    if ("function" == typeof t.test) return t.test(e);
                                    if (t.test instanceof Array) return t.test.some(function(t) {
                                        return e.test(t)
                                    });
                                    throw Error("Browser's test function is not valid")
                                });
                                return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os
                            }, t.getOSName = function(e) {
                                var t = this.getOS().name;
                                return e ? String(t).toLowerCase() || "" : t || ""
                            }, t.getOSVersion = function() {
                                return this.getOS().version
                            }, t.getPlatform = function() {
                                return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform()
                            }, t.getPlatformType = function(e) {
                                void 0 === e && (e = !1);
                                var t = this.getPlatform().type;
                                return e ? String(t).toLowerCase() || "" : t || ""
                            }, t.parsePlatform = function() {
                                var e = this;
                                this.parsedResult.platform = {};
                                var t = a.default.find(s.default, function(t) {
                                    if ("function" == typeof t.test) return t.test(e);
                                    if (t.test instanceof Array) return t.test.some(function(t) {
                                        return e.test(t)
                                    });
                                    throw Error("Browser's test function is not valid")
                                });
                                return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform
                            }, t.getEngine = function() {
                                return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine()
                            }, t.getEngineName = function(e) {
                                return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || ""
                            }, t.parseEngine = function() {
                                var e = this;
                                this.parsedResult.engine = {};
                                var t = a.default.find(o.default, function(t) {
                                    if ("function" == typeof t.test) return t.test(e);
                                    if (t.test instanceof Array) return t.test.some(function(t) {
                                        return e.test(t)
                                    });
                                    throw Error("Browser's test function is not valid")
                                });
                                return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine
                            }, t.parse = function() {
                                return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this
                            }, t.getResult = function() {
                                return a.default.assign({}, this.parsedResult)
                            }, t.satisfies = function(e) {
                                var t = this,
                                    r = {},
                                    n = 0,
                                    i = {},
                                    s = 0;
                                if (Object.keys(e).forEach(function(t) {
                                        var o = e[t];
                                        "string" == typeof o ? (i[t] = o, s += 1) : "object" == typeof o && (r[t] = o, n += 1)
                                    }), n > 0) {
                                    var o = Object.keys(r),
                                        u = a.default.find(o, function(e) {
                                            return t.isOS(e)
                                        });
                                    if (u) {
                                        var l = this.satisfies(r[u]);
                                        if (void 0 !== l) return l
                                    }
                                    var c = a.default.find(o, function(e) {
                                        return t.isPlatform(e)
                                    });
                                    if (c) {
                                        var d = this.satisfies(r[c]);
                                        if (void 0 !== d) return d
                                    }
                                }
                                if (s > 0) {
                                    var f = Object.keys(i),
                                        h = a.default.find(f, function(e) {
                                            return t.isBrowser(e, !0)
                                        });
                                    if (void 0 !== h) return this.compareVersion(i[h])
                                }
                            }, t.isBrowser = function(e, t) {
                                void 0 === t && (t = !1);
                                var r = this.getBrowserName().toLowerCase(),
                                    n = e.toLowerCase(),
                                    i = a.default.getBrowserTypeByAlias(n);
                                return t && i && (n = i.toLowerCase()), n === r
                            }, t.compareVersion = function(e) {
                                var t = [0],
                                    r = e,
                                    n = !1,
                                    i = this.getBrowserVersion();
                                if ("string" == typeof i) return ">" === e[0] || "<" === e[0] ? (r = e.substr(1), "=" === e[1] ? (n = !0, r = e.substr(2)) : t = [], ">" === e[0] ? t.push(1) : t.push(-1)) : "=" === e[0] ? r = e.substr(1) : "~" === e[0] && (n = !0, r = e.substr(1)), t.indexOf(a.default.compareVersions(i, r, n)) > -1
                            }, t.isOS = function(e) {
                                return this.getOSName(!0) === String(e).toLowerCase()
                            }, t.isPlatform = function(e) {
                                return this.getPlatformType(!0) === String(e).toLowerCase()
                            }, t.isEngine = function(e) {
                                return this.getEngineName(!0) === String(e).toLowerCase()
                            }, t.is = function(e, t) {
                                return void 0 === t && (t = !1), this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e)
                            }, t.some = function(e) {
                                var t = this;
                                return void 0 === e && (e = []), e.some(function(e) {
                                    return t.is(e)
                                })
                            }, e
                        }();
                        t.default = l, e.exports = t.default
                    },
                    92: function(e, t, r) {
                        "use strict";
                        t.__esModule = !0, t.default = void 0;
                        var n, i = (n = r(17)) && n.__esModule ? n : {
                                default: n
                            },
                            s = /version\/(\d+(\.?_?\d+)+)/i,
                            o = [{
                                test: [/googlebot/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Googlebot"
                                        },
                                        r = i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/opera/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Opera"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/opr\/|opios/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Opera"
                                        },
                                        r = i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/SamsungBrowser/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Samsung Internet for Android"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/Whale/i],
                                describe: function(e) {
                                    var t = {
                                            name: "NAVER Whale Browser"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/MZBrowser/i],
                                describe: function(e) {
                                    var t = {
                                            name: "MZ Browser"
                                        },
                                        r = i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/focus/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Focus"
                                        },
                                        r = i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/swing/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Swing"
                                        },
                                        r = i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/coast/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Opera Coast"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/opt\/\d+(?:.?_?\d+)+/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Opera Touch"
                                        },
                                        r = i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/yabrowser/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Yandex Browser"
                                        },
                                        r = i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/ucbrowser/i],
                                describe: function(e) {
                                    var t = {
                                            name: "UC Browser"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/Maxthon|mxios/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Maxthon"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/epiphany/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Epiphany"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/puffin/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Puffin"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/sleipnir/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Sleipnir"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/k-meleon/i],
                                describe: function(e) {
                                    var t = {
                                            name: "K-Meleon"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/micromessenger/i],
                                describe: function(e) {
                                    var t = {
                                            name: "WeChat"
                                        },
                                        r = i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/qqbrowser/i],
                                describe: function(e) {
                                    var t = {
                                            name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"
                                        },
                                        r = i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/msie|trident/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Internet Explorer"
                                        },
                                        r = i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/\sedg\//i],
                                describe: function(e) {
                                    var t = {
                                            name: "Microsoft Edge"
                                        },
                                        r = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/edg([ea]|ios)/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Microsoft Edge"
                                        },
                                        r = i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/vivaldi/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Vivaldi"
                                        },
                                        r = i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/seamonkey/i],
                                describe: function(e) {
                                    var t = {
                                            name: "SeaMonkey"
                                        },
                                        r = i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/sailfish/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Sailfish"
                                        },
                                        r = i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/silk/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Amazon Silk"
                                        },
                                        r = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/phantom/i],
                                describe: function(e) {
                                    var t = {
                                            name: "PhantomJS"
                                        },
                                        r = i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/slimerjs/i],
                                describe: function(e) {
                                    var t = {
                                            name: "SlimerJS"
                                        },
                                        r = i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                                describe: function(e) {
                                    var t = {
                                            name: "BlackBerry"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/(web|hpw)[o0]s/i],
                                describe: function(e) {
                                    var t = {
                                            name: "WebOS Browser"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/bada/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Bada"
                                        },
                                        r = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/tizen/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Tizen"
                                        },
                                        r = i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/qupzilla/i],
                                describe: function(e) {
                                    var t = {
                                            name: "QupZilla"
                                        },
                                        r = i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/firefox|iceweasel|fxios/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Firefox"
                                        },
                                        r = i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/electron/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Electron"
                                        },
                                        r = i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/MiuiBrowser/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Miui"
                                        },
                                        r = i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/chromium/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Chromium"
                                        },
                                        r = i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/chrome|crios|crmo/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Chrome"
                                        },
                                        r = i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/GSA/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Google Search"
                                        },
                                        r = i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: function(e) {
                                    var t = !e.test(/like android/i),
                                        r = e.test(/android/i);
                                    return t && r
                                },
                                describe: function(e) {
                                    var t = {
                                            name: "Android Browser"
                                        },
                                        r = i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/playstation 4/i],
                                describe: function(e) {
                                    var t = {
                                            name: "PlayStation 4"
                                        },
                                        r = i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/safari|applewebkit/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Safari"
                                        },
                                        r = i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/.*/i],
                                describe: function(e) {
                                    var t = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                                    return {
                                        name: i.default.getFirstMatch(t, e),
                                        version: i.default.getSecondMatch(t, e)
                                    }
                                }
                            }];
                        t.default = o, e.exports = t.default
                    },
                    93: function(e, t, r) {
                        "use strict";
                        t.__esModule = !0, t.default = void 0;
                        var n, i = (n = r(17)) && n.__esModule ? n : {
                                default: n
                            },
                            s = r(18),
                            o = [{
                                test: [/Roku\/DVP/],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                                    return {
                                        name: s.OS_MAP.Roku,
                                        version: t
                                    }
                                }
                            }, {
                                test: [/windows phone/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
                                    return {
                                        name: s.OS_MAP.WindowsPhone,
                                        version: t
                                    }
                                }
                            }, {
                                test: [/windows /i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e),
                                        r = i.default.getWindowsVersionName(t);
                                    return {
                                        name: s.OS_MAP.Windows,
                                        version: t,
                                        versionName: r
                                    }
                                }
                            }, {
                                test: [/Macintosh(.*?) FxiOS(.*?)\//],
                                describe: function(e) {
                                    var t = {
                                            name: s.OS_MAP.iOS
                                        },
                                        r = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/macintosh/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."),
                                        r = i.default.getMacOSVersionName(t),
                                        n = {
                                            name: s.OS_MAP.MacOS,
                                            version: t
                                        };
                                    return r && (n.versionName = r), n
                                }
                            }, {
                                test: [/(ipod|iphone|ipad)/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
                                    return {
                                        name: s.OS_MAP.iOS,
                                        version: t
                                    }
                                }
                            }, {
                                test: function(e) {
                                    var t = !e.test(/like android/i),
                                        r = e.test(/android/i);
                                    return t && r
                                },
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e),
                                        r = i.default.getAndroidVersionName(t),
                                        n = {
                                            name: s.OS_MAP.Android,
                                            version: t
                                        };
                                    return r && (n.versionName = r), n
                                }
                            }, {
                                test: [/(web|hpw)[o0]s/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e),
                                        r = {
                                            name: s.OS_MAP.WebOS
                                        };
                                    return t && t.length && (r.version = t), r
                                }
                            }, {
                                test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || i.default.getFirstMatch(/\bbb(\d+)/i, e);
                                    return {
                                        name: s.OS_MAP.BlackBerry,
                                        version: t
                                    }
                                }
                            }, {
                                test: [/bada/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                                    return {
                                        name: s.OS_MAP.Bada,
                                        version: t
                                    }
                                }
                            }, {
                                test: [/tizen/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
                                    return {
                                        name: s.OS_MAP.Tizen,
                                        version: t
                                    }
                                }
                            }, {
                                test: [/linux/i],
                                describe: function() {
                                    return {
                                        name: s.OS_MAP.Linux
                                    }
                                }
                            }, {
                                test: [/CrOS/],
                                describe: function() {
                                    return {
                                        name: s.OS_MAP.ChromeOS
                                    }
                                }
                            }, {
                                test: [/PlayStation 4/],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
                                    return {
                                        name: s.OS_MAP.PlayStation4,
                                        version: t
                                    }
                                }
                            }];
                        t.default = o, e.exports = t.default
                    },
                    94: function(e, t, r) {
                        "use strict";
                        t.__esModule = !0, t.default = void 0;
                        var n, i = (n = r(17)) && n.__esModule ? n : {
                                default: n
                            },
                            s = r(18),
                            o = [{
                                test: [/googlebot/i],
                                describe: function() {
                                    return {
                                        type: "bot",
                                        vendor: "Google"
                                    }
                                }
                            }, {
                                test: [/huawei/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/(can-l01)/i, e) && "Nova",
                                        r = {
                                            type: s.PLATFORMS_MAP.mobile,
                                            vendor: "Huawei"
                                        };
                                    return t && (r.model = t), r
                                }
                            }, {
                                test: [/nexus\s*(?:7|8|9|10).*/i],
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.tablet,
                                        vendor: "Nexus"
                                    }
                                }
                            }, {
                                test: [/ipad/i],
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.tablet,
                                        vendor: "Apple",
                                        model: "iPad"
                                    }
                                }
                            }, {
                                test: [/Macintosh(.*?) FxiOS(.*?)\//],
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.tablet,
                                        vendor: "Apple",
                                        model: "iPad"
                                    }
                                }
                            }, {
                                test: [/kftt build/i],
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.tablet,
                                        vendor: "Amazon",
                                        model: "Kindle Fire HD 7"
                                    }
                                }
                            }, {
                                test: [/silk/i],
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.tablet,
                                        vendor: "Amazon"
                                    }
                                }
                            }, {
                                test: [/tablet(?! pc)/i],
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.tablet
                                    }
                                }
                            }, {
                                test: function(e) {
                                    var t = e.test(/ipod|iphone/i),
                                        r = e.test(/like (ipod|iphone)/i);
                                    return t && !r
                                },
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/(ipod|iphone)/i, e);
                                    return {
                                        type: s.PLATFORMS_MAP.mobile,
                                        vendor: "Apple",
                                        model: t
                                    }
                                }
                            }, {
                                test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.mobile,
                                        vendor: "Nexus"
                                    }
                                }
                            }, {
                                test: [/[^-]mobi/i],
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.mobile
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "blackberry" === e.getBrowserName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.mobile,
                                        vendor: "BlackBerry"
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "bada" === e.getBrowserName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.mobile
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "windows phone" === e.getBrowserName()
                                },
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.mobile,
                                        vendor: "Microsoft"
                                    }
                                }
                            }, {
                                test: function(e) {
                                    var t = Number(String(e.getOSVersion()).split(".")[0]);
                                    return "android" === e.getOSName(!0) && t >= 3
                                },
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.tablet
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "android" === e.getOSName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.mobile
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "macos" === e.getOSName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.desktop,
                                        vendor: "Apple"
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "windows" === e.getOSName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.desktop
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "linux" === e.getOSName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.desktop
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "playstation 4" === e.getOSName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.tv
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "roku" === e.getOSName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.tv
                                    }
                                }
                            }];
                        t.default = o, e.exports = t.default
                    },
                    95: function(e, t, r) {
                        "use strict";
                        t.__esModule = !0, t.default = void 0;
                        var n, i = (n = r(17)) && n.__esModule ? n : {
                                default: n
                            },
                            s = r(18),
                            o = [{
                                test: function(e) {
                                    return "microsoft edge" === e.getBrowserName(!0)
                                },
                                describe: function(e) {
                                    if (/\sedg\//i.test(e)) return {
                                        name: s.ENGINE_MAP.Blink
                                    };
                                    var t = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
                                    return {
                                        name: s.ENGINE_MAP.EdgeHTML,
                                        version: t
                                    }
                                }
                            }, {
                                test: [/trident/i],
                                describe: function(e) {
                                    var t = {
                                            name: s.ENGINE_MAP.Trident
                                        },
                                        r = i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: function(e) {
                                    return e.test(/presto/i)
                                },
                                describe: function(e) {
                                    var t = {
                                            name: s.ENGINE_MAP.Presto
                                        },
                                        r = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: function(e) {
                                    var t = e.test(/gecko/i),
                                        r = e.test(/like gecko/i);
                                    return t && !r
                                },
                                describe: function(e) {
                                    var t = {
                                            name: s.ENGINE_MAP.Gecko
                                        },
                                        r = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/(apple)?webkit\/537\.36/i],
                                describe: function() {
                                    return {
                                        name: s.ENGINE_MAP.Blink
                                    }
                                }
                            }, {
                                test: [/(apple)?webkit/i],
                                describe: function(e) {
                                    var t = {
                                            name: s.ENGINE_MAP.WebKit
                                        },
                                        r = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }];
                        t.default = o, e.exports = t.default
                    }
                })
            }, e.exports = t()
        },
        22215: function(e, t, r) {
            "use strict";
            let n = r(33325),
                i = r(43281),
                s = r(87932);
            e.exports = {
                XMLParser: i,
                XMLValidator: n,
                XMLBuilder: s
            }
        },
        44056: function(e, t) {
            "use strict";
            let r = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
                n = "[" + r + "][" + r + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*",
                i = RegExp("^" + n + "$");
            t.isExist = function(e) {
                return void 0 !== e
            }, t.isEmptyObject = function(e) {
                return 0 === Object.keys(e).length
            }, t.merge = function(e, t, r) {
                if (t) {
                    let n = Object.keys(t),
                        i = n.length;
                    for (let s = 0; s < i; s++) "strict" === r ? e[n[s]] = [t[n[s]]] : e[n[s]] = t[n[s]]
                }
            }, t.getValue = function(e) {
                return t.isExist(e) ? e : ""
            }, t.isName = function(e) {
                return null != i.exec(e)
            }, t.getAllMatches = function(e, t) {
                let r = [],
                    n = t.exec(e);
                for (; n;) {
                    let i = [];
                    i.startIndex = t.lastIndex - n[0].length;
                    let s = n.length;
                    for (let e = 0; e < s; e++) i.push(n[e]);
                    r.push(i), n = t.exec(e)
                }
                return r
            }, t.nameRegexp = n
        },
        33325: function(e, t, r) {
            "use strict";
            let n = r(44056),
                i = {
                    allowBooleanAttributes: !1,
                    unpairedTags: []
                };

            function s(e) {
                return " " === e || "	" === e || "\n" === e || "\r" === e
            }

            function o(e, t) {
                let r = t;
                for (; t < e.length; t++)
                    if ("?" == e[t] || " " == e[t]) {
                        let n = e.substr(r, t - r);
                        if (t > 5 && "xml" === n) return c("InvalidXml", "XML declaration allowed only at the start of the document.", d(e, t));
                        if ("?" != e[t] || ">" != e[t + 1]) continue;
                        t++;
                        break
                    }
                return t
            }

            function a(e, t) {
                if (e.length > t + 5 && "-" === e[t + 1] && "-" === e[t + 2]) {
                    for (t += 3; t < e.length; t++)
                        if ("-" === e[t] && "-" === e[t + 1] && ">" === e[t + 2]) {
                            t += 2;
                            break
                        }
                } else if (e.length > t + 8 && "D" === e[t + 1] && "O" === e[t + 2] && "C" === e[t + 3] && "T" === e[t + 4] && "Y" === e[t + 5] && "P" === e[t + 6] && "E" === e[t + 7]) {
                    let r = 1;
                    for (t += 8; t < e.length; t++)
                        if ("<" === e[t]) r++;
                        else if (">" === e[t] && 0 == --r) break
                } else if (e.length > t + 9 && "[" === e[t + 1] && "C" === e[t + 2] && "D" === e[t + 3] && "A" === e[t + 4] && "T" === e[t + 5] && "A" === e[t + 6] && "[" === e[t + 7]) {
                    for (t += 8; t < e.length; t++)
                        if ("]" === e[t] && "]" === e[t + 1] && ">" === e[t + 2]) {
                            t += 2;
                            break
                        }
                }
                return t
            }
            t.validate = function(e, t) {
                t = Object.assign({}, i, t);
                let r = [],
                    u = !1,
                    f = !1;
                "\uFEFF" === e[0] && (e = e.substr(1));
                for (let i = 0; i < e.length; i++)
                    if ("<" === e[i] && "?" === e[i + 1]) {
                        if (i += 2, (i = o(e, i)).err) return i
                    } else if ("<" === e[i]) {
                    let p = i;
                    if ("!" === e[++i]) {
                        i = a(e, i);
                        continue
                    } {
                        var h;
                        let g = !1;
                        "/" === e[i] && (g = !0, i++);
                        let m = "";
                        for (; i < e.length && ">" !== e[i] && " " !== e[i] && "	" !== e[i] && "\n" !== e[i] && "\r" !== e[i]; i++) m += e[i];
                        if ("/" === (m = m.trim())[m.length - 1] && (m = m.substring(0, m.length - 1), i--), h = m, !n.isName(h)) return c("InvalidTag", 0 === m.trim().length ? "Invalid space after '<'." : "Tag '" + m + "' is an invalid name.", d(e, i));
                        let y = function(e, t) {
                            let r = "",
                                n = "",
                                i = !1;
                            for (; t < e.length; t++) {
                                if ('"' === e[t] || "'" === e[t]) "" === n ? n = e[t] : n !== e[t] || (n = "");
                                else if (">" === e[t] && "" === n) {
                                    i = !0;
                                    break
                                }
                                r += e[t]
                            }
                            return "" === n && {
                                value: r,
                                index: t,
                                tagClosed: i
                            }
                        }(e, i);
                        if (!1 === y) return c("InvalidAttr", "Attributes for '" + m + "' have open quote.", d(e, i));
                        let b = y.value;
                        if (i = y.index, "/" === b[b.length - 1]) {
                            let r = i - b.length,
                                n = l(b = b.substring(0, b.length - 1), t);
                            if (!0 !== n) return c(n.err.code, n.err.msg, d(e, r + n.err.line));
                            u = !0
                        } else if (g) {
                            if (!y.tagClosed) return c("InvalidTag", "Closing tag '" + m + "' doesn't have proper closing.", d(e, i));
                            if (b.trim().length > 0) return c("InvalidTag", "Closing tag '" + m + "' can't have attributes or invalid starting.", d(e, p)); {
                                if (0 === r.length) return c("InvalidTag", "Closing tag '" + m + "' has not been opened.", d(e, p));
                                let t = r.pop();
                                if (m !== t.tagName) {
                                    let r = d(e, t.tagStartPos);
                                    return c("InvalidTag", "Expected closing tag '" + t.tagName + "' (opened in line " + r.line + ", col " + r.col + ") instead of closing tag '" + m + "'.", d(e, p))
                                }
                                0 == r.length && (f = !0)
                            }
                        } else {
                            let n = l(b, t);
                            if (!0 !== n) return c(n.err.code, n.err.msg, d(e, i - b.length + n.err.line));
                            if (!0 === f) return c("InvalidXml", "Multiple possible root nodes found.", d(e, i)); - 1 !== t.unpairedTags.indexOf(m) || r.push({
                                tagName: m,
                                tagStartPos: p
                            }), u = !0
                        }
                        for (i++; i < e.length; i++)
                            if ("<" === e[i]) {
                                if ("!" === e[i + 1]) {
                                    i = a(e, ++i);
                                    continue
                                }
                                if ("?" === e[i + 1]) {
                                    if ((i = o(e, ++i)).err) return i
                                } else break
                            } else if ("&" === e[i]) {
                            let t = function(e, t) {
                                if (";" === e[++t]) return -1;
                                if ("#" === e[t]) return function(e, t) {
                                    let r = /\d/;
                                    for ("x" === e[t] && (t++, r = /[\da-fA-F]/); t < e.length; t++) {
                                        if (";" === e[t]) return t;
                                        if (!e[t].match(r)) break
                                    }
                                    return -1
                                }(e, ++t);
                                let r = 0;
                                for (; t < e.length; t++, r++)
                                    if (!e[t].match(/\w/) || !(r < 20)) {
                                        if (";" === e[t]) break;
                                        return -1
                                    }
                                return t
                            }(e, i);
                            if (-1 == t) return c("InvalidChar", "char '&' is not expected.", d(e, i));
                            i = t
                        } else if (!0 === f && !s(e[i])) return c("InvalidXml", "Extra text at the end", d(e, i));
                        "<" === e[i] && i--
                    }
                } else {
                    if (s(e[i])) continue;
                    return c("InvalidChar", "char '" + e[i] + "' is not expected.", d(e, i))
                }
                return u ? 1 == r.length ? c("InvalidTag", "Unclosed tag '" + r[0].tagName + "'.", d(e, r[0].tagStartPos)) : !(r.length > 0) || c("InvalidXml", "Invalid '" + JSON.stringify(r.map(e => e.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", {
                    line: 1,
                    col: 1
                }) : c("InvalidXml", "Start tag expected.", 1)
            };
            let u = RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?", "g");

            function l(e, t) {
                let r = n.getAllMatches(e, u),
                    i = {};
                for (let e = 0; e < r.length; e++) {
                    if (0 === r[e][1].length) return c("InvalidAttr", "Attribute '" + r[e][2] + "' has no space in starting.", f(r[e]));
                    if (void 0 !== r[e][3] && void 0 === r[e][4]) return c("InvalidAttr", "Attribute '" + r[e][2] + "' is without value.", f(r[e]));
                    if (void 0 === r[e][3] && !t.allowBooleanAttributes) return c("InvalidAttr", "boolean attribute '" + r[e][2] + "' is not allowed.", f(r[e]));
                    let s = r[e][2];
                    if (!n.isName(s)) return c("InvalidAttr", "Attribute '" + s + "' is an invalid name.", f(r[e]));
                    if (i.hasOwnProperty(s)) return c("InvalidAttr", "Attribute '" + s + "' is repeated.", f(r[e]));
                    i[s] = 1
                }
                return !0
            }

            function c(e, t, r) {
                return {
                    err: {
                        code: e,
                        msg: t,
                        line: r.line || r,
                        col: r.col
                    }
                }
            }

            function d(e, t) {
                let r = e.substring(0, t).split(/\r?\n/);
                return {
                    line: r.length,
                    col: r[r.length - 1].length + 1
                }
            }

            function f(e) {
                return e.startIndex + e[1].length
            }
        },
        87932: function(e, t, r) {
            "use strict";
            let n = r(26704),
                i = {
                    attributeNamePrefix: "@_",
                    attributesGroupName: !1,
                    textNodeName: "#text",
                    ignoreAttributes: !0,
                    cdataPropName: !1,
                    format: !1,
                    indentBy: "  ",
                    suppressEmptyNode: !1,
                    suppressUnpairedNode: !0,
                    suppressBooleanAttributes: !0,
                    tagValueProcessor: function(e, t) {
                        return t
                    },
                    attributeValueProcessor: function(e, t) {
                        return t
                    },
                    preserveOrder: !1,
                    commentPropName: !1,
                    unpairedTags: [],
                    entities: [{
                        regex: RegExp("&", "g"),
                        val: "&amp;"
                    }, {
                        regex: RegExp(">", "g"),
                        val: "&gt;"
                    }, {
                        regex: RegExp("<", "g"),
                        val: "&lt;"
                    }, {
                        regex: RegExp("'", "g"),
                        val: "&apos;"
                    }, {
                        regex: RegExp('"', "g"),
                        val: "&quot;"
                    }],
                    processEntities: !0,
                    stopNodes: [],
                    oneListGroup: !1
                };

            function s(e) {
                this.options = Object.assign({}, i, e), this.options.ignoreAttributes || this.options.attributesGroupName ? this.isAttribute = function() {
                    return !1
                } : (this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = u), this.processTextOrObjNode = o, this.options.format ? (this.indentate = a, this.tagEndChar = ">\n", this.newLine = "\n") : (this.indentate = function() {
                    return ""
                }, this.tagEndChar = ">", this.newLine = "")
            }

            function o(e, t, r) {
                let n = this.j2x(e, r + 1);
                return void 0 !== e[this.options.textNodeName] && 1 === Object.keys(e).length ? this.buildTextValNode(e[this.options.textNodeName], t, n.attrStr, r) : this.buildObjectNode(n.val, t, n.attrStr, r)
            }

            function a(e) {
                return this.options.indentBy.repeat(e)
            }

            function u(e) {
                return !!e.startsWith(this.options.attributeNamePrefix) && e !== this.options.textNodeName && e.substr(this.attrPrefixLen)
            }
            s.prototype.build = function(e) {
                return this.options.preserveOrder ? n(e, this.options) : (Array.isArray(e) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (e = {
                    [this.options.arrayNodeName]: e
                }), this.j2x(e, 0).val)
            }, s.prototype.j2x = function(e, t) {
                let r = "",
                    n = "";
                for (let i in e)
                    if (Object.prototype.hasOwnProperty.call(e, i)) {
                        if (void 0 === e[i]) this.isAttribute(i) && (n += "");
                        else if (null === e[i]) this.isAttribute(i) ? n += "" : "?" === i[0] ? n += this.indentate(t) + "<" + i + "?" + this.tagEndChar : n += this.indentate(t) + "<" + i + "/" + this.tagEndChar;
                        else if (e[i] instanceof Date) n += this.buildTextValNode(e[i], i, "", t);
                        else if ("object" != typeof e[i]) {
                            let s = this.isAttribute(i);
                            if (s) r += this.buildAttrPairStr(s, "" + e[i]);
                            else if (i === this.options.textNodeName) {
                                let t = this.options.tagValueProcessor(i, "" + e[i]);
                                n += this.replaceEntitiesValue(t)
                            } else n += this.buildTextValNode(e[i], i, "", t)
                        } else if (Array.isArray(e[i])) {
                            let r = e[i].length,
                                s = "",
                                o = "";
                            for (let a = 0; a < r; a++) {
                                let r = e[i][a];
                                if (void 0 === r);
                                else if (null === r) "?" === i[0] ? n += this.indentate(t) + "<" + i + "?" + this.tagEndChar : n += this.indentate(t) + "<" + i + "/" + this.tagEndChar;
                                else if ("object" == typeof r) {
                                    if (this.options.oneListGroup) {
                                        let e = this.j2x(r, t + 1);
                                        s += e.val, this.options.attributesGroupName && r.hasOwnProperty(this.options.attributesGroupName) && (o += e.attrStr)
                                    } else s += this.processTextOrObjNode(r, i, t)
                                } else if (this.options.oneListGroup) {
                                    let e = this.options.tagValueProcessor(i, r);
                                    s += e = this.replaceEntitiesValue(e)
                                } else s += this.buildTextValNode(r, i, "", t)
                            }
                            this.options.oneListGroup && (s = this.buildObjectNode(s, i, o, t)), n += s
                        } else if (this.options.attributesGroupName && i === this.options.attributesGroupName) {
                            let t = Object.keys(e[i]),
                                n = t.length;
                            for (let s = 0; s < n; s++) r += this.buildAttrPairStr(t[s], "" + e[i][t[s]])
                        } else n += this.processTextOrObjNode(e[i], i, t)
                    }
                return {
                    attrStr: r,
                    val: n
                }
            }, s.prototype.buildAttrPairStr = function(e, t) {
                return (t = this.options.attributeValueProcessor(e, "" + t), t = this.replaceEntitiesValue(t), this.options.suppressBooleanAttributes && "true" === t) ? " " + e : " " + e + '="' + t + '"'
            }, s.prototype.buildObjectNode = function(e, t, r, n) {
                if ("" === e) return "?" === t[0] ? this.indentate(n) + "<" + t + r + "?" + this.tagEndChar : this.indentate(n) + "<" + t + r + this.closeTag(t) + this.tagEndChar; {
                    let i = "</" + t + this.tagEndChar,
                        s = "";
                    return ("?" === t[0] && (s = "?", i = ""), (r || "" === r) && -1 === e.indexOf("<")) ? this.indentate(n) + "<" + t + r + s + ">" + e + i : !1 !== this.options.commentPropName && t === this.options.commentPropName && 0 === s.length ? this.indentate(n) + `<!--${e}-->` + this.newLine : this.indentate(n) + "<" + t + r + s + this.tagEndChar + e + this.indentate(n) + i
                }
            }, s.prototype.closeTag = function(e) {
                let t = "";
                return -1 !== this.options.unpairedTags.indexOf(e) ? this.options.suppressUnpairedNode || (t = "/") : t = this.options.suppressEmptyNode ? "/" : `></${e}`, t
            }, s.prototype.buildTextValNode = function(e, t, r, n) {
                if (!1 !== this.options.cdataPropName && t === this.options.cdataPropName) return this.indentate(n) + `<![CDATA[${e}]]>` + this.newLine;
                if (!1 !== this.options.commentPropName && t === this.options.commentPropName) return this.indentate(n) + `<!--${e}-->` + this.newLine;
                if ("?" === t[0]) return this.indentate(n) + "<" + t + r + "?" + this.tagEndChar; {
                    let i = this.options.tagValueProcessor(t, e);
                    return "" === (i = this.replaceEntitiesValue(i)) ? this.indentate(n) + "<" + t + r + this.closeTag(t) + this.tagEndChar : this.indentate(n) + "<" + t + r + ">" + i + "</" + t + this.tagEndChar
                }
            }, s.prototype.replaceEntitiesValue = function(e) {
                if (e && e.length > 0 && this.options.processEntities)
                    for (let t = 0; t < this.options.entities.length; t++) {
                        let r = this.options.entities[t];
                        e = e.replace(r.regex, r.val)
                    }
                return e
            }, e.exports = s
        },
        26704: function(e) {
            function t(e, t) {
                let n = "";
                if (e && !t.ignoreAttributes)
                    for (let i in e) {
                        if (!e.hasOwnProperty(i)) continue;
                        let s = t.attributeValueProcessor(i, e[i]);
                        !0 === (s = r(s, t)) && t.suppressBooleanAttributes ? n += ` ${i.substr(t.attributeNamePrefix.length)}` : n += ` ${i.substr(t.attributeNamePrefix.length)}="${s}"`
                    }
                return n
            }

            function r(e, t) {
                if (e && e.length > 0 && t.processEntities)
                    for (let r = 0; r < t.entities.length; r++) {
                        let n = t.entities[r];
                        e = e.replace(n.regex, n.val)
                    }
                return e
            }
            e.exports = function(e, n) {
                let i = "";
                return n.format && n.indentBy.length > 0 && (i = "\n"),
                    function e(n, i, s, o) {
                        let a = "",
                            u = !1;
                        for (let l = 0; l < n.length; l++) {
                            let c = n[l],
                                d = function(e) {
                                    let t = Object.keys(e);
                                    for (let r = 0; r < t.length; r++) {
                                        let n = t[r];
                                        if (e.hasOwnProperty(n) && ":@" !== n) return n
                                    }
                                }(c);
                            if (void 0 === d) continue;
                            let f = "";
                            if (f = 0 === s.length ? d : `${s}.${d}`, d === i.textNodeName) {
                                let e = c[d];
                                ! function(e, t) {
                                    let r = (e = e.substr(0, e.length - t.textNodeName.length - 1)).substr(e.lastIndexOf(".") + 1);
                                    for (let n in t.stopNodes)
                                        if (t.stopNodes[n] === e || t.stopNodes[n] === "*." + r) return !0;
                                    return !1
                                }(f, i) && (e = r(e = i.tagValueProcessor(d, e), i)), u && (a += o), a += e, u = !1;
                                continue
                            }
                            if (d === i.cdataPropName) {
                                u && (a += o), a += `<![CDATA[${c[d][0][i.textNodeName]}]]>`, u = !1;
                                continue
                            }
                            if (d === i.commentPropName) {
                                a += o + `<!--${c[d][0][i.textNodeName]}-->`, u = !0;
                                continue
                            }
                            if ("?" === d[0]) {
                                let e = t(c[":@"], i),
                                    r = "?xml" === d ? "" : o,
                                    n = c[d][0][i.textNodeName];
                                n = 0 !== n.length ? " " + n : "", a += r + `<${d}${n}${e}?>`, u = !0;
                                continue
                            }
                            let h = o;
                            "" !== h && (h += i.indentBy);
                            let p = t(c[":@"], i),
                                g = o + `<${d}${p}`,
                                m = e(c[d], i, f, h); - 1 !== i.unpairedTags.indexOf(d) ? i.suppressUnpairedNode ? a += g + ">" : a += g + "/>" : (!m || 0 === m.length) && i.suppressEmptyNode ? a += g + "/>" : m && m.endsWith(">") ? a += g + `>${m}${o}</${d}>` : (a += g + ">", m && "" !== o && (m.includes("/>") || m.includes("</")) ? a += o + i.indentBy + m + o : a += m, a += `</${d}>`), u = !0
                        }
                        return a
                    }(e, n, "", i)
            }
        },
        13770: function(e, t, r) {
            let n = r(44056);

            function i(e, t) {
                return "!" === e[t + 1] && "-" === e[t + 2] && "-" === e[t + 3]
            }
            e.exports = function(e, t) {
                let r = {};
                if ("O" === e[t + 3] && "C" === e[t + 4] && "T" === e[t + 5] && "Y" === e[t + 6] && "P" === e[t + 7] && "E" === e[t + 8]) {
                    t += 9;
                    let h = 1,
                        p = !1,
                        g = !1;
                    for (; t < e.length; t++)
                        if ("<" !== e[t] || g) {
                            if (">" === e[t]) {
                                if (g ? "-" === e[t - 1] && "-" === e[t - 2] && (g = !1, h--) : h--, 0 === h) break
                            } else "[" === e[t] ? p = !0 : e[t]
                        } else {
                            var s, o, a, u, l, c, d, f;
                            if (p && "!" === (s = e)[(o = t) + 1] && "E" === s[o + 2] && "N" === s[o + 3] && "T" === s[o + 4] && "I" === s[o + 5] && "T" === s[o + 6] && "Y" === s[o + 7]) t += 7, [entityName, val, t] = function(e, t) {
                                let r = "";
                                for (; t < e.length && "'" !== e[t] && '"' !== e[t]; t++) r += e[t];
                                if (-1 !== (r = r.trim()).indexOf(" ")) throw Error("External entites are not supported");
                                let n = e[t++],
                                    i = "";
                                for (; t < e.length && e[t] !== n; t++) i += e[t];
                                return [r, i, t]
                            }(e, t + 1), -1 === val.indexOf("&") && (r[function(e) {
                                if (n.isName(e)) return e;
                                throw Error(`Invalid entity name ${e}`)
                            }(entityName)] = {
                                regx: RegExp(`&${entityName};`, "g"),
                                val: val
                            });
                            else if (p && "!" === (a = e)[(u = t) + 1] && "E" === a[u + 2] && "L" === a[u + 3] && "E" === a[u + 4] && "M" === a[u + 5] && "E" === a[u + 6] && "N" === a[u + 7] && "T" === a[u + 8]) t += 8;
                            else if (p && "!" === (l = e)[(c = t) + 1] && "A" === l[c + 2] && "T" === l[c + 3] && "T" === l[c + 4] && "L" === l[c + 5] && "I" === l[c + 6] && "S" === l[c + 7] && "T" === l[c + 8]) t += 8;
                            else if (p && "!" === (d = e)[(f = t) + 1] && "N" === d[f + 2] && "O" === d[f + 3] && "T" === d[f + 4] && "A" === d[f + 5] && "T" === d[f + 6] && "I" === d[f + 7] && "O" === d[f + 8] && "N" === d[f + 9]) t += 9;
                            else if (i) g = !0;
                            else throw Error("Invalid DOCTYPE");
                            h++
                        }
                    if (0 !== h) throw Error("Unclosed DOCTYPE")
                } else throw Error("Invalid Tag instead of DOCTYPE");
                return {
                    entities: r,
                    i: t
                }
            }
        },
        14238: function(e, t) {
            let r = {
                preserveOrder: !1,
                attributeNamePrefix: "@_",
                attributesGroupName: !1,
                textNodeName: "#text",
                ignoreAttributes: !0,
                removeNSPrefix: !1,
                allowBooleanAttributes: !1,
                parseTagValue: !0,
                parseAttributeValue: !1,
                trimValues: !0,
                cdataPropName: !1,
                numberParseOptions: {
                    hex: !0,
                    leadingZeros: !0,
                    eNotation: !0
                },
                tagValueProcessor: function(e, t) {
                    return t
                },
                attributeValueProcessor: function(e, t) {
                    return t
                },
                stopNodes: [],
                alwaysCreateTextNode: !1,
                isArray: () => !1,
                commentPropName: !1,
                unpairedTags: [],
                processEntities: !0,
                htmlEntities: !1,
                ignoreDeclaration: !1,
                ignorePiTags: !1,
                transformTagName: !1,
                transformAttributeName: !1,
                updateTag: function(e, t, r) {
                    return e
                }
            };
            t.buildOptions = function(e) {
                return Object.assign({}, r, e)
            }, t.defaultOptions = r
        },
        22848: function(e, t, r) {
            "use strict";
            let n = r(44056),
                i = r(14499),
                s = r(13770),
                o = r(85580);
            class a {
                constructor(e) {
                    this.options = e, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
                        apos: {
                            regex: /&(apos|#39|#x27);/g,
                            val: "'"
                        },
                        gt: {
                            regex: /&(gt|#62|#x3E);/g,
                            val: ">"
                        },
                        lt: {
                            regex: /&(lt|#60|#x3C);/g,
                            val: "<"
                        },
                        quot: {
                            regex: /&(quot|#34|#x22);/g,
                            val: '"'
                        }
                    }, this.ampEntity = {
                        regex: /&(amp|#38|#x26);/g,
                        val: "&"
                    }, this.htmlEntities = {
                        space: {
                            regex: /&(nbsp|#160);/g,
                            val: " "
                        },
                        cent: {
                            regex: /&(cent|#162);/g,
                            val: "\xa2"
                        },
                        pound: {
                            regex: /&(pound|#163);/g,
                            val: "\xa3"
                        },
                        yen: {
                            regex: /&(yen|#165);/g,
                            val: "\xa5"
                        },
                        euro: {
                            regex: /&(euro|#8364);/g,
                            val: "€"
                        },
                        copyright: {
                            regex: /&(copy|#169);/g,
                            val: "\xa9"
                        },
                        reg: {
                            regex: /&(reg|#174);/g,
                            val: "\xae"
                        },
                        inr: {
                            regex: /&(inr|#8377);/g,
                            val: "₹"
                        },
                        num_dec: {
                            regex: /&#([0-9]{1,7});/g,
                            val: (e, t) => String.fromCharCode(Number.parseInt(t, 10))
                        },
                        num_hex: {
                            regex: /&#x([0-9a-fA-F]{1,6});/g,
                            val: (e, t) => String.fromCharCode(Number.parseInt(t, 16))
                        }
                    }, this.addExternalEntities = u, this.parseXml = h, this.parseTextData = l, this.resolveNameSpace = c, this.buildAttributesMap = f, this.isItStopNode = y, this.replaceEntitiesValue = g, this.readStopNodeData = v, this.saveTextToParentTag = m, this.addChild = p
                }
            }

            function u(e) {
                let t = Object.keys(e);
                for (let r = 0; r < t.length; r++) {
                    let n = t[r];
                    this.lastEntities[n] = {
                        regex: RegExp("&" + n + ";", "g"),
                        val: e[n]
                    }
                }
            }

            function l(e, t, r, n, i, s, o) {
                if (void 0 !== e && (this.options.trimValues && !n && (e = e.trim()), e.length > 0)) {
                    o || (e = this.replaceEntitiesValue(e));
                    let n = this.options.tagValueProcessor(t, e, r, i, s);
                    return null == n ? e : typeof n != typeof e || n !== e ? n : this.options.trimValues ? S(e, this.options.parseTagValue, this.options.numberParseOptions) : e.trim() === e ? S(e, this.options.parseTagValue, this.options.numberParseOptions) : e
                }
            }

            function c(e) {
                if (this.options.removeNSPrefix) {
                    let t = e.split(":"),
                        r = "/" === e.charAt(0) ? "/" : "";
                    if ("xmlns" === t[0]) return "";
                    2 === t.length && (e = r + t[1])
                }
                return e
            }
            let d = RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?", "gm");

            function f(e, t, r) {
                if (!this.options.ignoreAttributes && "string" == typeof e) {
                    let r = n.getAllMatches(e, d),
                        i = r.length,
                        s = {};
                    for (let e = 0; e < i; e++) {
                        let n = this.resolveNameSpace(r[e][1]),
                            i = r[e][4],
                            o = this.options.attributeNamePrefix + n;
                        if (n.length) {
                            if (this.options.transformAttributeName && (o = this.options.transformAttributeName(o)), "__proto__" === o && (o = "#__proto__"), void 0 !== i) {
                                this.options.trimValues && (i = i.trim()), i = this.replaceEntitiesValue(i);
                                let e = this.options.attributeValueProcessor(n, i, t);
                                null == e ? s[o] = i : typeof e != typeof i || e !== i ? s[o] = e : s[o] = S(i, this.options.parseAttributeValue, this.options.numberParseOptions)
                            } else this.options.allowBooleanAttributes && (s[o] = !0)
                        }
                    }
                    if (Object.keys(s).length) {
                        if (this.options.attributesGroupName) {
                            let e = {};
                            return e[this.options.attributesGroupName] = s, e
                        }
                        return s
                    }
                }
            }
            let h = function(e) {
                e = e.replace(/\r\n?/g, "\n");
                let t = new i("!xml"),
                    r = t,
                    n = "",
                    o = "";
                for (let a = 0; a < e.length; a++)
                    if ("<" === e[a]) {
                        if ("/" === e[a + 1]) {
                            let t = b(e, ">", a, "Closing Tag is not closed."),
                                i = e.substring(a + 2, t).trim();
                            if (this.options.removeNSPrefix) {
                                let e = i.indexOf(":"); - 1 !== e && (i = i.substr(e + 1))
                            }
                            this.options.transformTagName && (i = this.options.transformTagName(i)), r && (n = this.saveTextToParentTag(n, r, o));
                            let s = o.substring(o.lastIndexOf(".") + 1);
                            if (i && -1 !== this.options.unpairedTags.indexOf(i)) throw Error(`Unpaired tag can not be used as closing tag: </${i}>`);
                            let u = 0;
                            s && -1 !== this.options.unpairedTags.indexOf(s) ? (u = o.lastIndexOf(".", o.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : u = o.lastIndexOf("."), o = o.substring(0, u), r = this.tagsNodeStack.pop(), n = "", a = t
                        } else if ("?" === e[a + 1]) {
                            let t = w(e, a, !1, "?>");
                            if (!t) throw Error("Pi Tag is not closed.");
                            if (n = this.saveTextToParentTag(n, r, o), this.options.ignoreDeclaration && "?xml" === t.tagName || this.options.ignorePiTags);
                            else {
                                let e = new i(t.tagName);
                                e.add(this.options.textNodeName, ""), t.tagName !== t.tagExp && t.attrExpPresent && (e[":@"] = this.buildAttributesMap(t.tagExp, o, t.tagName)), this.addChild(r, e, o)
                            }
                            a = t.closeIndex + 1
                        } else if ("!--" === e.substr(a + 1, 3)) {
                            let t = b(e, "-->", a + 4, "Comment is not closed.");
                            if (this.options.commentPropName) {
                                let i = e.substring(a + 4, t - 2);
                                n = this.saveTextToParentTag(n, r, o), r.add(this.options.commentPropName, [{
                                    [this.options.textNodeName]: i
                                }])
                            }
                            a = t
                        } else if ("!D" === e.substr(a + 1, 2)) {
                            let t = s(e, a);
                            this.docTypeEntities = t.entities, a = t.i
                        } else if ("![" === e.substr(a + 1, 2)) {
                            let t = b(e, "]]>", a, "CDATA is not closed.") - 2,
                                i = e.substring(a + 9, t);
                            n = this.saveTextToParentTag(n, r, o);
                            let s = this.parseTextData(i, r.tagname, o, !0, !1, !0, !0);
                            void 0 == s && (s = ""), this.options.cdataPropName ? r.add(this.options.cdataPropName, [{
                                [this.options.textNodeName]: i
                            }]) : r.add(this.options.textNodeName, s), a = t + 2
                        } else {
                            let s = w(e, a, this.options.removeNSPrefix),
                                u = s.tagName,
                                l = s.rawTagName,
                                c = s.tagExp,
                                d = s.attrExpPresent,
                                f = s.closeIndex;
                            this.options.transformTagName && (u = this.options.transformTagName(u)), r && n && "!xml" !== r.tagname && (n = this.saveTextToParentTag(n, r, o, !1));
                            let h = r;
                            if (h && -1 !== this.options.unpairedTags.indexOf(h.tagname) && (r = this.tagsNodeStack.pop(), o = o.substring(0, o.lastIndexOf("."))), u !== t.tagname && (o += o ? "." + u : u), this.isItStopNode(this.options.stopNodes, o, u)) {
                                let t = "";
                                if (c.length > 0 && c.lastIndexOf("/") === c.length - 1) "/" === u[u.length - 1] ? (u = u.substr(0, u.length - 1), o = o.substr(0, o.length - 1), c = u) : c = c.substr(0, c.length - 1), a = s.closeIndex;
                                else if (-1 !== this.options.unpairedTags.indexOf(u)) a = s.closeIndex;
                                else {
                                    let r = this.readStopNodeData(e, l, f + 1);
                                    if (!r) throw Error(`Unexpected end of ${l}`);
                                    a = r.i, t = r.tagContent
                                }
                                let n = new i(u);
                                u !== c && d && (n[":@"] = this.buildAttributesMap(c, o, u)), t && (t = this.parseTextData(t, u, o, !0, d, !0, !0)), o = o.substr(0, o.lastIndexOf(".")), n.add(this.options.textNodeName, t), this.addChild(r, n, o)
                            } else {
                                if (c.length > 0 && c.lastIndexOf("/") === c.length - 1) {
                                    "/" === u[u.length - 1] ? (u = u.substr(0, u.length - 1), o = o.substr(0, o.length - 1), c = u) : c = c.substr(0, c.length - 1), this.options.transformTagName && (u = this.options.transformTagName(u));
                                    let e = new i(u);
                                    u !== c && d && (e[":@"] = this.buildAttributesMap(c, o, u)), this.addChild(r, e, o), o = o.substr(0, o.lastIndexOf("."))
                                } else {
                                    let e = new i(u);
                                    this.tagsNodeStack.push(r), u !== c && d && (e[":@"] = this.buildAttributesMap(c, o, u)), this.addChild(r, e, o), r = e
                                }
                                n = "", a = f
                            }
                        }
                    } else n += e[a];
                return t.child
            };

            function p(e, t, r) {
                let n = this.options.updateTag(t.tagname, r, t[":@"]);
                !1 === n || ("string" == typeof n && (t.tagname = n), e.addChild(t))
            }
            let g = function(e) {
                if (this.options.processEntities) {
                    for (let t in this.docTypeEntities) {
                        let r = this.docTypeEntities[t];
                        e = e.replace(r.regx, r.val)
                    }
                    for (let t in this.lastEntities) {
                        let r = this.lastEntities[t];
                        e = e.replace(r.regex, r.val)
                    }
                    if (this.options.htmlEntities)
                        for (let t in this.htmlEntities) {
                            let r = this.htmlEntities[t];
                            e = e.replace(r.regex, r.val)
                        }
                    e = e.replace(this.ampEntity.regex, this.ampEntity.val)
                }
                return e
            };

            function m(e, t, r, n) {
                return e && (void 0 === n && (n = 0 === Object.keys(t.child).length), void 0 !== (e = this.parseTextData(e, t.tagname, r, !1, !!t[":@"] && 0 !== Object.keys(t[":@"]).length, n)) && "" !== e && t.add(this.options.textNodeName, e), e = ""), e
            }

            function y(e, t, r) {
                let n = "*." + r;
                for (let r in e) {
                    let i = e[r];
                    if (n === i || t === i) return !0
                }
                return !1
            }

            function b(e, t, r, n) {
                let i = e.indexOf(t, r);
                if (-1 !== i) return i + t.length - 1;
                throw Error(n)
            }

            function w(e, t, r, n = ">") {
                let i = function(e, t, r = ">") {
                    let n;
                    let i = "";
                    for (let s = t; s < e.length; s++) {
                        let t = e[s];
                        if (n) t === n && (n = "");
                        else if ('"' === t || "'" === t) n = t;
                        else if (t === r[0]) {
                            if (!r[1] || e[s + 1] === r[1]) return {
                                data: i,
                                index: s
                            }
                        } else "	" === t && (t = " ");
                        i += t
                    }
                }(e, t + 1, n);
                if (!i) return;
                let s = i.data,
                    o = i.index,
                    a = s.search(/\s/),
                    u = s,
                    l = !0; - 1 !== a && (u = s.substring(0, a), s = s.substring(a + 1).trimStart());
                let c = u;
                if (r) {
                    let e = u.indexOf(":"); - 1 !== e && (l = (u = u.substr(e + 1)) !== i.data.substr(e + 1))
                }
                return {
                    tagName: u,
                    tagExp: s,
                    closeIndex: o,
                    attrExpPresent: l,
                    rawTagName: c
                }
            }

            function v(e, t, r) {
                let n = r,
                    i = 1;
                for (; r < e.length; r++)
                    if ("<" === e[r]) {
                        if ("/" === e[r + 1]) {
                            let s = b(e, ">", r, `${t} is not closed`);
                            if (e.substring(r + 2, s).trim() === t && 0 == --i) return {
                                tagContent: e.substring(n, r),
                                i: s
                            };
                            r = s
                        } else if ("?" === e[r + 1]) r = b(e, "?>", r + 1, "StopNode is not closed.");
                        else if ("!--" === e.substr(r + 1, 3)) r = b(e, "-->", r + 3, "StopNode is not closed.");
                        else if ("![" === e.substr(r + 1, 2)) r = b(e, "]]>", r, "StopNode is not closed.") - 2;
                        else {
                            let n = w(e, r, ">");
                            n && ((n && n.tagName) === t && "/" !== n.tagExp[n.tagExp.length - 1] && i++, r = n.closeIndex)
                        }
                    }
            }

            function S(e, t, r) {
                if (t && "string" == typeof e) {
                    let t = e.trim();
                    return "true" === t || "false" !== t && o(e, r)
                }
                return n.isExist(e) ? e : ""
            }
            e.exports = a
        },
        43281: function(e, t, r) {
            let {
                buildOptions: n
            } = r(14238), i = r(22848), {
                prettify: s
            } = r(64416), o = r(33325);
            class a {
                constructor(e) {
                    this.externalEntities = {}, this.options = n(e)
                }
                parse(e, t) {
                    if ("string" == typeof e);
                    else if (e.toString) e = e.toString();
                    else throw Error("XML data is accepted in String or Bytes[] form.");
                    if (t) {
                        !0 === t && (t = {});
                        let r = o.validate(e, t);
                        if (!0 !== r) throw Error(`${r.err.msg}:${r.err.line}:${r.err.col}`)
                    }
                    let r = new i(this.options);
                    r.addExternalEntities(this.externalEntities);
                    let n = r.parseXml(e);
                    return this.options.preserveOrder || void 0 === n ? n : s(n, this.options)
                }
                addEntity(e, t) {
                    if (-1 !== t.indexOf("&")) throw Error("Entity value can't have '&'");
                    if (-1 !== e.indexOf("&") || -1 !== e.indexOf(";")) throw Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
                    if ("&" === t) throw Error("An entity with value '&' is not permitted");
                    this.externalEntities[e] = t
                }
            }
            e.exports = a
        },
        64416: function(e, t) {
            "use strict";
            t.prettify = function(e, t) {
                return function e(t, r, n) {
                    let i;
                    let s = {};
                    for (let o = 0; o < t.length; o++) {
                        let a = t[o],
                            u = function(e) {
                                let t = Object.keys(e);
                                for (let e = 0; e < t.length; e++) {
                                    let r = t[e];
                                    if (":@" !== r) return r
                                }
                            }(a),
                            l = "";
                        if (l = void 0 === n ? u : n + "." + u, u === r.textNodeName) void 0 === i ? i = a[u] : i += "" + a[u];
                        else if (void 0 === u) continue;
                        else if (a[u]) {
                            let t = e(a[u], r, l),
                                n = function(e, t) {
                                    let {
                                        textNodeName: r
                                    } = t, n = Object.keys(e).length;
                                    return 0 === n || 1 === n && (!!e[r] || "boolean" == typeof e[r] || 0 === e[r])
                                }(t, r);
                            a[":@"] ? function(e, t, r, n) {
                                if (t) {
                                    let i = Object.keys(t),
                                        s = i.length;
                                    for (let o = 0; o < s; o++) {
                                        let s = i[o];
                                        n.isArray(s, r + "." + s, !0, !0) ? e[s] = [t[s]] : e[s] = t[s]
                                    }
                                }
                            }(t, a[":@"], l, r) : 1 !== Object.keys(t).length || void 0 === t[r.textNodeName] || r.alwaysCreateTextNode ? 0 === Object.keys(t).length && (r.alwaysCreateTextNode ? t[r.textNodeName] = "" : t = "") : t = t[r.textNodeName], void 0 !== s[u] && s.hasOwnProperty(u) ? (Array.isArray(s[u]) || (s[u] = [s[u]]), s[u].push(t)) : r.isArray(u, l, n) ? s[u] = [t] : s[u] = t
                        }
                    }
                    return "string" == typeof i ? i.length > 0 && (s[r.textNodeName] = i) : void 0 !== i && (s[r.textNodeName] = i), s
                }(e, t)
            }
        },
        14499: function(e) {
            "use strict";
            class t {
                constructor(e) {
                    this.tagname = e, this.child = [], this[":@"] = {}
                }
                add(e, t) {
                    "__proto__" === e && (e = "#__proto__"), this.child.push({
                        [e]: t
                    })
                }
                addChild(e) {
                    "__proto__" === e.tagname && (e.tagname = "#__proto__"), e[":@"] && Object.keys(e[":@"]).length > 0 ? this.child.push({
                        [e.tagname]: e.child,
                        ":@": e[":@"]
                    }) : this.child.push({
                        [e.tagname]: e.child
                    })
                }
            }
            e.exports = t
        },
        82495: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return u
                }
            });
            var n = r(49435);

            function i(e) {
                var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
                return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime()
            }
            var s = r(43157),
                o = r(4895);

            function a(e, t) {
                var r = e.getFullYear() - t.getFullYear() || e.getMonth() - t.getMonth() || e.getDate() - t.getDate() || e.getHours() - t.getHours() || e.getMinutes() - t.getMinutes() || e.getSeconds() - t.getSeconds() || e.getMilliseconds() - t.getMilliseconds();
                return r < 0 ? -1 : r > 0 ? 1 : r
            }

            function u(e, t) {
                (0, o.Z)(2, arguments);
                var r = (0, n.Z)(e),
                    u = (0, n.Z)(t),
                    l = a(r, u),
                    c = Math.abs(function(e, t) {
                        (0, o.Z)(2, arguments);
                        var r = (0, s.Z)(e),
                            n = (0, s.Z)(t);
                        return Math.round((r.getTime() - i(r) - (n.getTime() - i(n))) / 864e5)
                    }(r, u));
                r.setDate(r.getDate() - l * c);
                var d = Number(a(r, u) === -l),
                    f = l * (c - d);
                return 0 === f ? 0 : f
            }
        },
        85580: function(e) {
            let t = /^[-+]?0x[a-fA-F0-9]+$/,
                r = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
            !Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt), !Number.parseFloat && window.parseFloat && (Number.parseFloat = window.parseFloat);
            let n = {
                hex: !0,
                leadingZeros: !0,
                decimalPoint: ".",
                eNotation: !0
            };
            e.exports = function(e, i = {}) {
                if (i = Object.assign({}, n, i), !e || "string" != typeof e) return e;
                let s = e.trim();
                if (void 0 !== i.skipLike && i.skipLike.test(s)) return e;
                if (i.hex && t.test(s)) return Number.parseInt(s, 16); {
                    let t = r.exec(s);
                    if (!t) return e; {
                        var o;
                        let r = t[1],
                            n = t[2],
                            a = ((o = t[3]) && -1 !== o.indexOf(".") && ("." === (o = o.replace(/0+$/, "")) ? o = "0" : "." === o[0] ? o = "0" + o : "." === o[o.length - 1] && (o = o.substr(0, o.length - 1))), o),
                            u = t[4] || t[6];
                        if (!i.leadingZeros && n.length > 0 && r && "." !== s[2]) return e; {
                            if (!i.leadingZeros && n.length > 0 && !r && "." !== s[1]) return e;
                            let t = Number(s),
                                o = "" + t;
                            return -1 !== o.search(/[eE]/) || u ? i.eNotation ? t : e : -1 !== s.indexOf(".") ? "0" === o && "" === a ? t : o === a ? t : r && o === "-" + a ? t : e : n ? a === o ? t : r + a === o ? t : e : s === o ? t : s === r + o ? t : e
                        }
                    }
                }
            }
        },
        34911: function(e, t) {
            "use strict";
            t.pv = void 0, t.pv = e => {
                throw TypeError("Unexpected value: " + e)
            }
        },
        3054: function(e, t, r) {
            "use strict";
            r.d(t, {
                I: function() {
                    return i
                }
            });
            var n = r(57035);

            function i(e, t, r) {
                var i;
                if ("string" == typeof e) {
                    let s = document;
                    t && ((0, n.k)(!!t.current, "Scope provided, but no element detected."), s = t.current), r ? (null !== (i = r[e]) && void 0 !== i || (r[e] = s.querySelectorAll(e)), e = r[e]) : e = s.querySelectorAll(e)
                } else e instanceof Element && (e = [e]);
                return Array.from(e || [])
            }
        }
    }
]);