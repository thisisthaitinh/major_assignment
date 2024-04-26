// hien dai hoa trang web
"use strict";

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}! function(s, p, c) {
    function d(e, n) {
        return _typeof(e) === n
    }

    function y(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, n, t) {
            return n + t.toUpperCase()
        }).replace(/^-/, "")
    }

    function l(e, n) {
        return function() {
            return e.apply(n, arguments)
        }
    }

    function m() {
        return "function" != typeof p.createElement ? p.createElement(arguments[0]) : g ? p.createElementNS.call(p, "http://www.w3.org/2000/svg", arguments[0]) : p.createElement.apply(p, arguments)
    }

    function o(e) {
        return e.replace(/([A-Z])/g, function(e, n) {
            return "-" + n.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function i(e, n, t, r) {
        var o, i, s, l, a = "modernizr",
            f = m("div"),
            u = function() {
                var e = p.body;
                return e || ((e = m(g ? "svg" : "body")).fake = !0), e
            }();
        if (parseInt(t, 10))
            for (; t--;)(s = m("div")).id = r ? r[t] : a + (t + 1), f.appendChild(s);
        return (o = m("style")).type = "text/css", o.id = "s" + a, (u.fake ? u : f).appendChild(o), u.appendChild(f), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(p.createTextNode(e)), f.id = a, u.fake && (u.style.background = "", u.style.overflow = "hidden", l = h.style.overflow, h.style.overflow = "hidden", h.appendChild(u)), i = n(f, e), u.fake ? (u.parentNode.removeChild(u), h.style.overflow = l, h.offsetHeight) : f.parentNode.removeChild(f), !!i
    }

    function v(e, n) {
        var t = e.length;
        if ("CSS" in s && "supports" in s.CSS) {
            for (; t--;)
                if (s.CSS.supports(o(e[t]), n)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in s) {
            for (var r = []; t--;) r.push("(" + o(e[t]) + ":" + n + ")");
            return i("@supports (" + (r = r.join(" or ")) + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == function(e, n, t) {
                    var r;
                    if ("getComputedStyle" in s) {
                        r = getComputedStyle.call(s, e, n);
                        var o = s.console;
                        null !== r ? t && (r = r.getPropertyValue(t)) : o && o[o.error ? "error" : "log"].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
                    } else r = !n && e.currentStyle && e.currentStyle[t];
                    return r
                }(e, null, "position")
            })
        }
        return c
    }

    function r(e, n, t, r, o) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + C.join(i + " ") + i).split(" ");
        return d(n, "string") || d(n, "undefined") ? function(e, n, t, r) {
            function o() {
                s && (delete b.style, delete b.modElem)
            }
            if (r = !d(r, "undefined") && r, !d(t, "undefined")) {
                var i = v(e, t);
                if (!d(i, "undefined")) return i
            }
            for (var s, l, a, f, u, p = ["modernizr", "tspan", "samp"]; !b.style && p.length;) s = !0, b.modElem = m(p.shift()), b.style = b.modElem.style;
            for (a = e.length, l = 0; l < a; l++)
                if (f = e[l], u = b.style[f], ~("" + f).indexOf("-") && (f = y(f)), b.style[f] !== c) {
                    if (r || d(t, "undefined")) return o(), "pfx" != n || f;
                    try {
                        b.style[f] = t
                    } catch (e) {}
                    if (b.style[f] != u) return o(), "pfx" != n || f
                } return o(), !1
        }(s, n, r, o) : function(e, n, t) {
            var r;
            for (var o in e)
                if (e[o] in n) return !1 === t ? e[o] : d(r = n[e[o]], "function") ? l(r, t || n) : r;
            return !1
        }(s = (e + " " + x.join(i + " ") + i).split(" "), n, t)
    }
    var a = [],
        f = [],
        e = {
            _version: "3.6.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, n) {
                var t = this;
                setTimeout(function() {
                    n(t[e])
                }, 0)
            },
            addTest: function(e, n, t) {
                f.push({
                    name: e,
                    fn: n,
                    options: t
                })
            },
            addAsyncTest: function(e) {
                f.push({
                    name: null,
                    fn: e
                })
            }
        },
        u = function() {};
    u.prototype = e, u = new u;
    var h = p.documentElement,
        g = "svg" === h.nodeName.toLowerCase();
    u.addTest("history", function() {
        var e = navigator.userAgent;
        return (-1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone") || "file:" === location.protocol) && (s.history && "pushState" in s.history)
    });
    var n = "Moz O ms Webkit",
        C = e._config.usePrefixes ? n.split(" ") : [];
    e._cssomPrefixes = C;

    function S(e) {
        var n, t = prefixes.length,
            r = s.CSSRule;
        if (void 0 === r) return c;
        if (!e) return !1;
        if ((n = (e = e.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() + "_RULE") in r) return "@" + e;
        for (var o = 0; o < t; o++) {
            var i = prefixes[o];
            if (i.toUpperCase() + "_" + n in r) return "@-" + i.toLowerCase() + "-" + e
        }
        return !1
    }
    e.atRule = S;
    var x = e._config.usePrefixes ? n.toLowerCase().split(" ") : [];
    e._domPrefixes = x;
    var t = {
        elem: m("modernizr")
    };
    u._q.push(function() {
        delete t.elem
    });
    var b = {
        style: t.elem.style
    };
    u._q.unshift(function() {
        delete b.style
    }), e.testAllProps = r;
    var w = e.prefixed = function(e, n, t) {
        return 0 === e.indexOf("@") ? S(e) : (-1 != e.indexOf("-") && (e = y(e)), n ? r(e, n, t) : r(e, "pfx"))
    };
    u.addTest("objectfit", !!w("objectFit"), {
            aliases: ["object-fit"]
        }),
        function() {
            var e, n, t, r, o, i;
            for (var s in f)
                if (f.hasOwnProperty(s)) {
                    if (e = [], (n = f[s]).name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                        for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                    for (r = d(n.fn, "function") ? n.fn() : n.fn, o = 0; o < e.length; o++) 1 === (i = e[o].split(".")).length ? u[i[0]] = r : (!u[i[0]] || u[i[0]] instanceof Boolean || (u[i[0]] = new Boolean(u[i[0]])), u[i[0]][i[1]] = r), a.push((r ? "" : "no-") + i.join("-"))
                }
        }(),
        function(e) {
            var n = h.className,
                t = u._config.classPrefix || "";
            if (g && (n = n.baseVal), u._config.enableJSClass) {
                var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
                n = n.replace(r, "$1" + t + "js$2")
            }
            u._config.enableClasses && (n += " " + t + e.join(" " + t), g ? h.className.baseVal = n : h.className = n)
        }(a), delete e.addTest, delete e.addAsyncTest;
    for (var _ = 0; _ < u._q.length; _++) u._q[_]();
    s.Modernizr = u
}(window, document);