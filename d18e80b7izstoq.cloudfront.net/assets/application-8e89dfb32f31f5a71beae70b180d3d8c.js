! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = !!t && "length" in t && t.length,
            n = ot.type(t);
        return "function" === n || ot.isWindow(t) ? !1 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function i(t, e, n) {
        if (ot.isFunction(e)) return ot.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n
        });
        if (e.nodeType) return ot.grep(t, function(t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (mt.test(e)) return ot.filter(e, t, n);
            e = ot.filter(e, t)
        }
        return ot.grep(t, function(t) {
            return Z.call(e, t) > -1 !== n
        })
    }

    function r(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function o(t) {
        var e = {};
        return ot.each(t.match(_t) || [], function(t, n) {
            e[n] = !0
        }), e
    }

    function s() {
        Y.removeEventListener("DOMContentLoaded", s), t.removeEventListener("load", s), ot.ready()
    }

    function a() {
        this.expando = ot.expando + a.uid++
    }

    function l(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(Et, "-$&").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ct.test(n) ? ot.parseJSON(n) : n
                } catch (r) {}
                St.set(t, e, n)
            } else n = void 0;
        return n
    }

    function u(t, e, n, i) {
        var r, o = 1,
            s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return ot.css(t, e, "")
            },
            l = a(),
            u = n && n[3] || (ot.cssNumber[e] ? "" : "px"),
            c = (ot.cssNumber[e] || "px" !== u && +l) && At.exec(ot.css(t, e));
        if (c && c[3] !== u) {
            u = u || c[3], n = n || [], c = +l || 1;
            do o = o || ".5", c /= o, ot.style(t, e, c + u); while (o !== (o = a() / l) && 1 !== o && --s)
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }

    function c(t, e) {
        var n = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && ot.nodeName(t, e) ? ot.merge([t], n) : n
    }

    function d(t, e) {
        for (var n = 0, i = t.length; i > n; n++) Tt.set(t[n], "globalEval", !e || Tt.get(e[n], "globalEval"))
    }

    function p(t, e, n, i, r) {
        for (var o, s, a, l, u, p, f = e.createDocumentFragment(), h = [], m = 0, g = t.length; g > m; m++)
            if (o = t[m], o || 0 === o)
                if ("object" === ot.type(o)) ot.merge(h, o.nodeType ? [o] : o);
                else if (Pt.test(o)) {
            for (s = s || f.appendChild(e.createElement("div")), a = (Mt.exec(o) || ["", ""])[1].toLowerCase(), l = Ot[a] || Ot._default, s.innerHTML = l[1] + ot.htmlPrefilter(o) + l[2], p = l[0]; p--;) s = s.lastChild;
            ot.merge(h, s.childNodes), s = f.firstChild, s.textContent = ""
        } else h.push(e.createTextNode(o));
        for (f.textContent = "", m = 0; o = h[m++];)
            if (i && ot.inArray(o, i) > -1) r && r.push(o);
            else if (u = ot.contains(o.ownerDocument, o), s = c(f.appendChild(o), "script"), u && d(s), n)
            for (p = 0; o = s[p++];) It.test(o.type || "") && n.push(o);
        return f
    }

    function f() {
        return !0
    }

    function h() {
        return !1
    }

    function m() {
        try {
            return Y.activeElement
        } catch (t) {}
    }

    function g(t, e, n, i, r, o) {
        var s, a;
        if ("object" == typeof e) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in e) g(t, a, n, i, e[a], o);
            return t
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = h;
        else if (!r) return t;
        return 1 === o && (s = r, r = function(t) {
            return ot().off(t), s.apply(this, arguments)
        }, r.guid = s.guid || (s.guid = ot.guid++)), t.each(function() {
            ot.event.add(this, e, r, i, n)
        })
    }

    function v(t, e) {
        return ot.nodeName(t, "table") && ot.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function y(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function w(t) {
        var e = Gt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function b(t, e) {
        var n, i, r, o, s, a, l, u;
        if (1 === e.nodeType) {
            if (Tt.hasData(t) && (o = Tt.access(t), s = Tt.set(e, o), u = o.events)) {
                delete s.handle, s.events = {};
                for (r in u)
                    for (n = 0, i = u[r].length; i > n; n++) ot.event.add(e, r, u[r][n])
            }
            St.hasData(t) && (a = St.access(t), l = ot.extend({}, a), St.set(e, l))
        }
    }

    function _(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && Lt.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
    }

    function $(t, e, n, i) {
        e = K.apply([], e);
        var r, o, s, a, l, u, d = 0,
            f = t.length,
            h = f - 1,
            m = e[0],
            g = ot.isFunction(m);
        if (g || f > 1 && "string" == typeof m && !it.checkClone && zt.test(m)) return t.each(function(r) {
            var o = t.eq(r);
            g && (e[0] = m.call(this, r, o.html())), $(o, e, n, i)
        });
        if (f && (r = p(e, t[0].ownerDocument, !1, t, i), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
            for (s = ot.map(c(r, "script"), y), a = s.length; f > d; d++) l = r, d !== h && (l = ot.clone(l, !0, !0), a && ot.merge(s, c(l, "script"))), n.call(t[d], l, d);
            if (a)
                for (u = s[s.length - 1].ownerDocument, ot.map(s, w), d = 0; a > d; d++) l = s[d], It.test(l.type || "") && !Tt.access(l, "globalEval") && ot.contains(u, l) && (l.src ? ot._evalUrl && ot._evalUrl(l.src) : ot.globalEval(l.textContent.replace(Bt, "")))
        }
        return t
    }

    function k(t, e, n) {
        for (var i, r = e ? ot.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || ot.cleanData(c(i)), i.parentNode && (n && ot.contains(i.ownerDocument, i) && d(c(i, "script")), i.parentNode.removeChild(i));
        return t
    }

    function x(t, e) {
        var n = ot(e.createElement(t)).appendTo(e.body),
            i = ot.css(n[0], "display");
        return n.detach(), i
    }

    function T(t) {
        var e = Y,
            n = Jt[t];
        return n || (n = x(t, e), "none" !== n && n || (Wt = (Wt || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Wt[0].contentDocument, e.write(), e.close(), n = x(t, e), Wt.detach()), Jt[t] = n), n
    }

    function S(t, e, n) {
        var i, r, o, s, a = t.style;
        return n = n || Vt(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, "" !== s && void 0 !== s || ot.contains(t.ownerDocument, t) || (s = ot.style(t, e)), n && !it.pixelMarginRight() && Yt.test(s) && Xt.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o), void 0 !== s ? s + "" : s
    }

    function C(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function E(t) {
        if (t in ie) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), n = ne.length; n--;)
            if (t = ne[n] + e, t in ie) return t
    }

    function j(t, e, n) {
        var i = At.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }

    function A(t, e, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += ot.css(t, n + Ft[o], !0, r)), i ? ("content" === n && (s -= ot.css(t, "padding" + Ft[o], !0, r)), "margin" !== n && (s -= ot.css(t, "border" + Ft[o] + "Width", !0, r))) : (s += ot.css(t, "padding" + Ft[o], !0, r), "padding" !== n && (s += ot.css(t, "border" + Ft[o] + "Width", !0, r)));
        return s
    }

    function F(e, n, i) {
        var r = !0,
            o = "width" === n ? e.offsetWidth : e.offsetHeight,
            s = Vt(e),
            a = "border-box" === ot.css(e, "boxSizing", !1, s);
        if (Y.msFullscreenElement && t.top !== t && e.getClientRects().length && (o = Math.round(100 * e.getBoundingClientRect()[n])), 0 >= o || null == o) {
            if (o = S(e, n, s), (0 > o || null == o) && (o = e.style[n]), Yt.test(o)) return o;
            r = a && (it.boxSizingReliable() || o === e.style[n]), o = parseFloat(o) || 0
        }
        return o + A(e, n, i || (a ? "border" : "content"), r, s) + "px"
    }

    function D(t, e) {
        for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++) i = t[s], i.style && (o[s] = Tt.get(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Dt(i) && (o[s] = Tt.access(i, "olddisplay", T(i.nodeName)))) : (r = Dt(i), "none" === n && r || Tt.set(i, "olddisplay", r ? n : ot.css(i, "display"))));
        for (s = 0; a > s; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
        return t
    }

    function L(t, e, n, i, r) {
        return new L.prototype.init(t, e, n, i, r)
    }

    function M() {
        return t.setTimeout(function() {
            re = void 0
        }), re = ot.now()
    }

    function I(t, e) {
        var n, i = 0,
            r = {
                height: t
            };
        for (e = e ? 1 : 0; 4 > i; i += 2 - e) n = Ft[i], r["margin" + n] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r
    }

    function O(t, e, n) {
        for (var i, r = (H.tweeners[e] || []).concat(H.tweeners["*"]), o = 0, s = r.length; s > o; o++)
            if (i = r[o].call(n, e, t)) return i
    }

    function P(t, e, n) {
        var i, r, o, s, a, l, u, c, d = this,
            p = {},
            f = t.style,
            h = t.nodeType && Dt(t),
            m = Tt.get(t, "fxshow");
        n.queue || (a = ot._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, d.always(function() {
            d.always(function() {
                a.unqueued--, ot.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = ot.css(t, "display"), c = "none" === u ? Tt.get(t, "olddisplay") || T(t.nodeName) : u, "inline" === c && "none" === ot.css(t, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", d.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in e)
            if (r = e[i], se.exec(r)) {
                if (delete e[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i]) continue;
                    h = !0
                }
                p[i] = m && m[i] || ot.style(t, i)
            } else u = void 0;
        if (ot.isEmptyObject(p)) "inline" === ("none" === u ? T(t.nodeName) : u) && (f.display = u);
        else {
            m ? "hidden" in m && (h = m.hidden) : m = Tt.access(t, "fxshow", {}), o && (m.hidden = !h), h ? ot(t).show() : d.done(function() {
                ot(t).hide()
            }), d.done(function() {
                var e;
                Tt.remove(t, "fxshow");
                for (e in p) ot.style(t, e, p[e])
            });
            for (i in p) s = O(h ? m[i] : 0, i, d), i in m || (m[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function N(t, e) {
        var n, i, r, o, s;
        for (n in t)
            if (i = ot.camelCase(n), r = e[i], o = t[n], ot.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), s = ot.cssHooks[i], s && "expand" in s) {
                o = s.expand(o), delete t[i];
                for (n in o) n in t || (t[n] = o[n], e[n] = r)
            } else e[i] = r
    }

    function H(t, e, n) {
        var i, r, o = 0,
            s = H.prefilters.length,
            a = ot.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var e = re || M(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, o = 1 - i, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(o);
                return a.notifyWith(t, [u, o, n]), 1 > o && l ? n : (a.resolveWith(t, [u]), !1)
            },
            u = a.promise({
                elem: t,
                props: ot.extend({}, e),
                opts: ot.extend(!0, {
                    specialEasing: {},
                    easing: ot.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: re || M(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = ot.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i > n; n++) u.tweens[n].run(1);
                    return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
                }
            }),
            c = u.props;
        for (N(c, u.opts.specialEasing); s > o; o++)
            if (i = H.prefilters[o].call(u, t, c, u.opts)) return ot.isFunction(i.stop) && (ot._queueHooks(u.elem, u.opts.queue).stop = ot.proxy(i.stop, i)), i;
        return ot.map(c, O, u), ot.isFunction(u.opts.start) && u.opts.start.call(t, u), ot.fx.timer(ot.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function U(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function R(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0,
                o = e.toLowerCase().match(_t) || [];
            if (ot.isFunction(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function q(t, e, n, i) {
        function r(a) {
            var l;
            return o[a] = !0, ot.each(t[a] || [], function(t, a) {
                var u = a(e, n, i);
                return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var o = {},
            s = t === Se;
        return r(e.dataTypes[0]) || !o["*"] && r("*")
    }

    function z(t, e) {
        var n, i, r = ot.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && ot.extend(!0, t, i), t
    }

    function G(t, e, n) {
        for (var i, r, o, s, a = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (r in n) {
                if (!l[0] || t.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                s || (s = r)
            }
            o = o || s
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function B(t, e, n, i) {
        var r, o, s, a, l, u = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
        for (o = c.shift(); o;)
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (s = u[l + " " + o] || u["* " + o], !s)
                for (r in u)
                    if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                        s === !0 ? s = u[r] : u[r] !== !0 && (o = a[0], c.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && t["throws"]) e = s(e);
                else try {
                    e = s(e)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: s ? d : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function W(t, e, n, i) {
        var r;
        if (ot.isArray(e)) ot.each(e, function(e, r) {
            n || Ae.test(t) ? i(t, r) : W(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
        });
        else if (n || "object" !== ot.type(e)) i(t, e);
        else
            for (r in e) W(t + "[" + r + "]", e[r], n, i)
    }

    function J(t) {
        return ot.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var X = [],
        Y = t.document,
        V = X.slice,
        K = X.concat,
        Q = X.push,
        Z = X.indexOf,
        tt = {},
        et = tt.toString,
        nt = tt.hasOwnProperty,
        it = {},
        rt = "2.2.3",
        ot = function(t, e) {
            return new ot.fn.init(t, e)
        },
        st = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        at = /^-ms-/,
        lt = /-([\da-z])/gi,
        ut = function(t, e) {
            return e.toUpperCase()
        };
    ot.fn = ot.prototype = {
        jquery: rt,
        constructor: ot,
        selector: "",
        length: 0,
        toArray: function() {
            return V.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : V.call(this)
        },
        pushStack: function(t) {
            var e = ot.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t) {
            return ot.each(this, t)
        },
        map: function(t) {
            return this.pushStack(ot.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(V.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: Q,
        sort: X.sort,
        splice: X.splice
    }, ot.extend = ot.fn.extend = function() {
        var t, e, n, i, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || ot.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
            if (null != (t = arguments[a]))
                for (e in t) n = s[e], i = t[e], s !== i && (u && i && (ot.isPlainObject(i) || (r = ot.isArray(i))) ? (r ? (r = !1, o = n && ot.isArray(n) ? n : []) : o = n && ot.isPlainObject(n) ? n : {}, s[e] = ot.extend(u, o, i)) : void 0 !== i && (s[e] = i));
        return s
    }, ot.extend({
        expando: "jQuery" + (rt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === ot.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            var e = t && t.toString();
            return !ot.isArray(t) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(t) {
            var e;
            if ("object" !== ot.type(t) || t.nodeType || ot.isWindow(t)) return !1;
            if (t.constructor && !nt.call(t, "constructor") && !nt.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (e in t);
            return void 0 === e || nt.call(t, e)
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[et.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, n = eval;
            t = ot.trim(t), t && (1 === t.indexOf("use strict") ? (e = Y.createElement("script"), e.text = t, Y.head.appendChild(e).parentNode.removeChild(e)) : n(t))
        },
        camelCase: function(t) {
            return t.replace(at, "ms-").replace(lt, ut)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var i, r = 0;
            if (n(t))
                for (i = t.length; i > r && e.call(t[r], r, t[r]) !== !1; r++);
            else
                for (r in t)
                    if (e.call(t[r], r, t[r]) === !1) break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(st, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? ot.merge(i, "string" == typeof t ? [t] : t) : Q.call(i, t)), i
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : Z.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, r = t.length; n > i; i++) t[r++] = e[i];
            return t.length = r, t
        },
        grep: function(t, e, n) {
            for (var i, r = [], o = 0, s = t.length, a = !n; s > o; o++) i = !e(t[o], o), i !== a && r.push(t[o]);
            return r
        },
        map: function(t, e, i) {
            var r, o, s = 0,
                a = [];
            if (n(t))
                for (r = t.length; r > s; s++) o = e(t[s], s, i), null != o && a.push(o);
            else
                for (s in t) o = e(t[s], s, i), null != o && a.push(o);
            return K.apply([], a)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, r;
            return "string" == typeof e && (n = t[e], e = t, t = n), ot.isFunction(t) ? (i = V.call(arguments, 2), r = function() {
                return t.apply(e || this, i.concat(V.call(arguments)))
            }, r.guid = t.guid = t.guid || ot.guid++, r) : void 0
        },
        now: Date.now,
        support: it
    }), "function" == typeof Symbol && (ot.fn[Symbol.iterator] = X[Symbol.iterator]), ot.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        tt["[object " + e + "]"] = e.toLowerCase()
    });
    var ct = function(t) {
        function e(t, e, n, i) {
            var r, o, s, a, l, u, d, f, h = e && e.ownerDocument,
                m = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m) return n;
            if (!i && ((e ? e.ownerDocument || e : U) !== D && F(e), e = e || D, M)) {
                if (11 !== m && (u = vt.exec(t)))
                    if (r = u[1]) {
                        if (9 === m) {
                            if (!(s = e.getElementById(r))) return n;
                            if (s.id === r) return n.push(s), n
                        } else if (h && (s = h.getElementById(r)) && N(e, s) && s.id === r) return n.push(s), n
                    } else {
                        if (u[2]) return Q.apply(n, e.getElementsByTagName(t)), n;
                        if ((r = u[3]) && _.getElementsByClassName && e.getElementsByClassName) return Q.apply(n, e.getElementsByClassName(r)), n
                    }
                if (_.qsa && !B[t + " "] && (!I || !I.test(t))) {
                    if (1 !== m) h = e, f = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(wt, "\\$&") : e.setAttribute("id", a = H), d = T(t), o = d.length, l = pt.test(a) ? "#" + a : "[id='" + a + "']"; o--;) d[o] = l + " " + p(d[o]);
                        f = d.join(","), h = yt.test(t) && c(e.parentNode) || e
                    }
                    if (f) try {
                        return Q.apply(n, h.querySelectorAll(f)), n
                    } catch (g) {} finally {
                        a === H && e.removeAttribute("id")
                    }
                }
            }
            return C(t.replace(at, "$1"), e, n, i)
        }

        function n() {
            function t(n, i) {
                return e.push(n + " ") > $.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function i(t) {
            return t[H] = !0, t
        }

        function r(t) {
            var e = D.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function o(t, e) {
            for (var n = t.split("|"), i = n.length; i--;) $.attrHandle[n[i]] = e
        }

        function s(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || J) - (~t.sourceIndex || J);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function l(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function u(t) {
            return i(function(e) {
                return e = +e, i(function(n, i) {
                    for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function c(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function d() {}

        function p(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
            return i
        }

        function f(t, e, n) {
            var i = e.dir,
                r = n && "parentNode" === i,
                o = q++;
            return e.first ? function(e, n, o) {
                for (; e = e[i];)
                    if (1 === e.nodeType || r) return t(e, n, o)
            } : function(e, n, s) {
                var a, l, u, c = [R, o];
                if (s) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || r) && t(e, n, s)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || r) {
                            if (u = e[H] || (e[H] = {}), l = u[e.uniqueID] || (u[e.uniqueID] = {}), (a = l[i]) && a[0] === R && a[1] === o) return c[2] = a[2];
                            if (l[i] = c, c[2] = t(e, n, s)) return !0
                        }
            }
        }

        function h(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var r = t.length; r--;)
                    if (!t[r](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function m(t, n, i) {
            for (var r = 0, o = n.length; o > r; r++) e(t, n[r], i);
            return i
        }

        function g(t, e, n, i, r) {
            for (var o, s = [], a = 0, l = t.length, u = null != e; l > a; a++)(o = t[a]) && (!n || n(o, i, r)) && (s.push(o), u && e.push(a));
            return s
        }

        function v(t, e, n, r, o, s) {
            return r && !r[H] && (r = v(r)), o && !o[H] && (o = v(o, s)), i(function(i, s, a, l) {
                var u, c, d, p = [],
                    f = [],
                    h = s.length,
                    v = i || m(e || "*", a.nodeType ? [a] : a, []),
                    y = !t || !i && e ? v : g(v, p, t, a, l),
                    w = n ? o || (i ? t : h || r) ? [] : s : y;
                if (n && n(y, w, a, l), r)
                    for (u = g(w, f), r(u, [], a, l), c = u.length; c--;)(d = u[c]) && (w[f[c]] = !(y[f[c]] = d));
                if (i) {
                    if (o || t) {
                        if (o) {
                            for (u = [], c = w.length; c--;)(d = w[c]) && u.push(y[c] = d);
                            o(null, w = [], u, l)
                        }
                        for (c = w.length; c--;)(d = w[c]) && (u = o ? tt(i, d) : p[c]) > -1 && (i[u] = !(s[u] = d))
                    }
                } else w = g(w === s ? w.splice(h, w.length) : w), o ? o(null, s, w, l) : Q.apply(s, w)
            })
        }

        function y(t) {
            for (var e, n, i, r = t.length, o = $.relative[t[0].type], s = o || $.relative[" "], a = o ? 1 : 0, l = f(function(t) {
                    return t === e
                }, s, !0), u = f(function(t) {
                    return tt(e, t) > -1
                }, s, !0), c = [function(t, n, i) {
                    var r = !o && (i || n !== E) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
                    return e = null, r
                }]; r > a; a++)
                if (n = $.relative[t[a].type]) c = [f(h(c), n)];
                else {
                    if (n = $.filter[t[a].type].apply(null, t[a].matches), n[H]) {
                        for (i = ++a; r > i && !$.relative[t[i].type]; i++);
                        return v(a > 1 && h(c), a > 1 && p(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(at, "$1"), n, i > a && y(t.slice(a, i)), r > i && y(t = t.slice(i)), r > i && p(t))
                    }
                    c.push(n)
                }
            return h(c)
        }

        function w(t, n) {
            var r = n.length > 0,
                o = t.length > 0,
                s = function(i, s, a, l, u) {
                    var c, d, p, f = 0,
                        h = "0",
                        m = i && [],
                        v = [],
                        y = E,
                        w = i || o && $.find.TAG("*", u),
                        b = R += null == y ? 1 : Math.random() || .1,
                        _ = w.length;
                    for (u && (E = s === D || s || u); h !== _ && null != (c = w[h]); h++) {
                        if (o && c) {
                            for (d = 0, s || c.ownerDocument === D || (F(c), a = !M); p = t[d++];)
                                if (p(c, s || D, a)) {
                                    l.push(c);
                                    break
                                }
                            u && (R = b)
                        }
                        r && ((c = !p && c) && f--, i && m.push(c))
                    }
                    if (f += h, r && h !== f) {
                        for (d = 0; p = n[d++];) p(m, v, s, a);
                        if (i) {
                            if (f > 0)
                                for (; h--;) m[h] || v[h] || (v[h] = V.call(l));
                            v = g(v)
                        }
                        Q.apply(l, v), u && !i && v.length > 0 && f + n.length > 1 && e.uniqueSort(l)
                    }
                    return u && (R = b, E = y), m
                };
            return r ? i(s) : s
        }
        var b, _, $, k, x, T, S, C, E, j, A, F, D, L, M, I, O, P, N, H = "sizzle" + 1 * new Date,
            U = t.document,
            R = 0,
            q = 0,
            z = n(),
            G = n(),
            B = n(),
            W = function(t, e) {
                return t === e && (A = !0), 0
            },
            J = 1 << 31,
            X = {}.hasOwnProperty,
            Y = [],
            V = Y.pop,
            K = Y.push,
            Q = Y.push,
            Z = Y.slice,
            tt = function(t, e) {
                for (var n = 0, i = t.length; i > n; n++)
                    if (t[n] === e) return n;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
            ot = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
            st = new RegExp(nt + "+", "g"),
            at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            lt = new RegExp("^" + nt + "*," + nt + "*"),
            ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            dt = new RegExp(ot),
            pt = new RegExp("^" + it + "$"),
            ft = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it + "|[*])"),
                ATTR: new RegExp("^" + rt),
                PSEUDO: new RegExp("^" + ot),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            },
            ht = /^(?:input|select|textarea|button)$/i,
            mt = /^h\d$/i,
            gt = /^[^{]+\{\s*\[native \w/,
            vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            yt = /[+~]/,
            wt = /'|\\/g,
            bt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            _t = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            $t = function() {
                F()
            };
        try {
            Q.apply(Y = Z.call(U.childNodes), U.childNodes), Y[U.childNodes.length].nodeType
        } catch (kt) {
            Q = {
                apply: Y.length ? function(t, e) {
                    K.apply(t, Z.call(e))
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        _ = e.support = {}, x = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, F = e.setDocument = function(t) {
            var e, n, i = t ? t.ownerDocument || t : U;
            return i !== D && 9 === i.nodeType && i.documentElement ? (D = i, L = D.documentElement, M = !x(D), (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", $t, !1) : n.attachEvent && n.attachEvent("onunload", $t)), _.attributes = r(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), _.getElementsByTagName = r(function(t) {
                return t.appendChild(D.createComment("")), !t.getElementsByTagName("*").length
            }), _.getElementsByClassName = gt.test(D.getElementsByClassName), _.getById = r(function(t) {
                return L.appendChild(t).id = H, !D.getElementsByName || !D.getElementsByName(H).length
            }), _.getById ? ($.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && M) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }, $.filter.ID = function(t) {
                var e = t.replace(bt, _t);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete $.find.ID, $.filter.ID = function(t) {
                var e = t.replace(bt, _t);
                return function(t) {
                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), $.find.TAG = _.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : _.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var n, i = [],
                    r = 0,
                    o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, $.find.CLASS = _.getElementsByClassName && function(t, e) {
                return "undefined" != typeof e.getElementsByClassName && M ? e.getElementsByClassName(t) : void 0
            }, O = [], I = [], (_.qsa = gt.test(D.querySelectorAll)) && (r(function(t) {
                L.appendChild(t).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || I.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + H + "-]").length || I.push("~="), t.querySelectorAll(":checked").length || I.push(":checked"), t.querySelectorAll("a#" + H + "+*").length || I.push(".#.+[+~]")
            }), r(function(t) {
                var e = D.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && I.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), I.push(",.*:")
            })), (_.matchesSelector = gt.test(P = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function(t) {
                _.disconnectedMatch = P.call(t, "div"), P.call(t, "[s!='']:x"), O.push("!=", ot)
            }), I = I.length && new RegExp(I.join("|")), O = O.length && new RegExp(O.join("|")), e = gt.test(L.compareDocumentPosition), N = e || gt.test(L.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, W = e ? function(t, e) {
                if (t === e) return A = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !_.sortDetached && e.compareDocumentPosition(t) === n ? t === D || t.ownerDocument === U && N(U, t) ? -1 : e === D || e.ownerDocument === U && N(U, e) ? 1 : j ? tt(j, t) - tt(j, e) : 0 : 4 & n ? -1 : 1)
            } : function(t, e) {
                if (t === e) return A = !0, 0;
                var n, i = 0,
                    r = t.parentNode,
                    o = e.parentNode,
                    a = [t],
                    l = [e];
                if (!r || !o) return t === D ? -1 : e === D ? 1 : r ? -1 : o ? 1 : j ? tt(j, t) - tt(j, e) : 0;
                if (r === o) return s(t, e);
                for (n = t; n = n.parentNode;) a.unshift(n);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (; a[i] === l[i];) i++;
                return i ? s(a[i], l[i]) : a[i] === U ? -1 : l[i] === U ? 1 : 0
            }, D) : D
        }, e.matches = function(t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== D && F(t), n = n.replace(ct, "='$1']"), _.matchesSelector && M && !B[n + " "] && (!O || !O.test(n)) && (!I || !I.test(n))) try {
                var i = P.call(t, n);
                if (i || _.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch (r) {}
            return e(n, D, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== D && F(t), N(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== D && F(t);
            var n = $.attrHandle[e.toLowerCase()],
                i = n && X.call($.attrHandle, e.toLowerCase()) ? n(t, e, !M) : void 0;
            return void 0 !== i ? i : _.attributes || !M ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, n = [],
                i = 0,
                r = 0;
            if (A = !_.detectDuplicates, j = !_.sortStable && t.slice(0), t.sort(W), A) {
                for (; e = t[r++];) e === t[r] && (i = n.push(r));
                for (; i--;) t.splice(n[i], 1)
            }
            return j = null, t
        }, k = e.getText = function(t) {
            var e, n = "",
                i = 0,
                r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += k(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else
                for (; e = t[i++];) n += k(e);
            return n
        }, $ = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ft,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(bt, _t), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, _t), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && dt.test(n) && (e = T(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(bt, _t).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = z[t + " "];
                    return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && z(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, i) {
                    return function(r) {
                        var o = e.attr(r, t);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, n, i, r) {
                    var o = "nth" !== t.slice(0, 3),
                        s = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === i && 0 === r ? function(t) {
                        return !!t.parentNode
                    } : function(e, n, l) {
                        var u, c, d, p, f, h, m = o !== s ? "nextSibling" : "previousSibling",
                            g = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            y = !l && !a,
                            w = !1;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (p = e; p = p[m];)
                                        if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    h = m = "only" === t && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? g.firstChild : g.lastChild], s && y) {
                                for (p = g, d = p[H] || (p[H] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), u = c[t] || [], f = u[0] === R && u[1], w = f && u[2], p = f && g.childNodes[f]; p = ++f && p && p[m] || (w = f = 0) || h.pop();)
                                    if (1 === p.nodeType && ++w && p === e) {
                                        c[t] = [R, f, w];
                                        break
                                    }
                            } else if (y && (p = e, d = p[H] || (p[H] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), u = c[t] || [], f = u[0] === R && u[1], w = f), w === !1)
                                for (;
                                    (p = ++f && p && p[m] || (w = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++w || (y && (d = p[H] || (p[H] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), c[t] = [R, w]), p !== e)););
                            return w -= r, w === i || w % i === 0 && w / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var r, o = $.pseudos[t] || $.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[H] ? o(n) : o.length > 1 ? (r = [t, t, "", n], $.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, r = o(t, n), s = r.length; s--;) i = tt(t, r[s]), t[i] = !(e[i] = r[s])
                    }) : function(t) {
                        return o(t, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = [],
                        n = [],
                        r = S(t.replace(at, "$1"));
                    return r[H] ? i(function(t, e, n, i) {
                        for (var o, s = r(t, null, i, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                    }) : function(t, i, o) {
                        return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
                    }
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function(t) {
                    return t = t.replace(bt, _t),
                        function(e) {
                            return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                        }
                }),
                lang: i(function(t) {
                    return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, _t).toLowerCase(),
                        function(e) {
                            var n;
                            do
                                if (n = M ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === L
                },
                focus: function(t) {
                    return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !$.pseudos.empty(t)
                },
                header: function(t) {
                    return mt.test(t.nodeName)
                },
                input: function(t) {
                    return ht.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(t, e) {
                    return [e - 1]
                }),
                eq: u(function(t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: u(function(t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t
                }),
                odd: u(function(t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t
                }),
                lt: u(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                    return t
                }),
                gt: u(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                    return t
                })
            }
        }, $.pseudos.nth = $.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) $.pseudos[b] = a(b);
        for (b in {
                submit: !0,
                reset: !0
            }) $.pseudos[b] = l(b);
        return d.prototype = $.filters = $.pseudos, $.setFilters = new d, T = e.tokenize = function(t, n) {
            var i, r, o, s, a, l, u, c = G[t + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = t, l = [], u = $.preFilter; a;) {
                (!i || (r = lt.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ut.exec(a)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(at, " ")
                }), a = a.slice(i.length));
                for (s in $.filter) !(r = ft[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: s,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? e.error(t) : G(t, l).slice(0)
        }, S = e.compile = function(t, e) {
            var n, i = [],
                r = [],
                o = B[t + " "];
            if (!o) {
                for (e || (e = T(t)), n = e.length; n--;) o = y(e[n]), o[H] ? i.push(o) : r.push(o);
                o = B(t, w(r, i)), o.selector = t
            }
            return o
        }, C = e.select = function(t, e, n, i) {
            var r, o, s, a, l, u = "function" == typeof t && t,
                d = !i && T(t = u.selector || t);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && _.getById && 9 === e.nodeType && M && $.relative[o[1].type]) {
                    if (e = ($.find.ID(s.matches[0].replace(bt, _t), e) || [])[0], !e) return n;
                    u && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (r = ft.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !$.relative[a = s.type]);)
                    if ((l = $.find[a]) && (i = l(s.matches[0].replace(bt, _t), yt.test(o[0].type) && c(e.parentNode) || e))) {
                        if (o.splice(r, 1), t = i.length && p(o), !t) return Q.apply(n, i), n;
                        break
                    }
            }
            return (u || S(t, d))(i, e, !M, n, !e || yt.test(t) && c(e.parentNode) || e), n
        }, _.sortStable = H.split("").sort(W).join("") === H, _.detectDuplicates = !!A, F(), _.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(D.createElement("div"))
        }), r(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), _.attributes && r(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), r(function(t) {
            return null == t.getAttribute("disabled")
        }) || o(et, function(t, e, n) {
            var i;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    ot.find = ct, ot.expr = ct.selectors, ot.expr[":"] = ot.expr.pseudos, ot.uniqueSort = ot.unique = ct.uniqueSort, ot.text = ct.getText, ot.isXMLDoc = ct.isXML, ot.contains = ct.contains;
    var dt = function(t, e, n) {
            for (var i = [], r = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && ot(t).is(n)) break;
                    i.push(t)
                }
            return i
        },
        pt = function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        ft = ot.expr.match.needsContext,
        ht = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        mt = /^.[^:#\[\.,]*$/;
    ot.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ot.find.matchesSelector(i, t) ? [i] : [] : ot.find.matches(t, ot.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, ot.fn.extend({
        find: function(t) {
            var e, n = this.length,
                i = [],
                r = this;
            if ("string" != typeof t) return this.pushStack(ot(t).filter(function() {
                for (e = 0; n > e; e++)
                    if (ot.contains(r[e], this)) return !0
            }));
            for (e = 0; n > e; e++) ot.find(t, r[e], i);
            return i = this.pushStack(n > 1 ? ot.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
        },
        filter: function(t) {
            return this.pushStack(i(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(i(this, t || [], !0))
        },
        is: function(t) {
            return !!i(this, "string" == typeof t && ft.test(t) ? ot(t) : t || [], !1).length
        }
    });
    var gt, vt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        yt = ot.fn.init = function(t, e, n) {
            var i, r;
            if (!t) return this;
            if (n = n || gt, "string" == typeof t) {
                if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : vt.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof ot ? e[0] : e, ot.merge(this, ot.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : Y, !0)), ht.test(i[1]) && ot.isPlainObject(e))
                        for (i in e) ot.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return r = Y.getElementById(i[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = Y, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ot.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(ot) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ot.makeArray(t, this))
        };
    yt.prototype = ot.fn, gt = ot(Y);
    var wt = /^(?:parents|prev(?:Until|All))/,
        bt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ot.fn.extend({
        has: function(t) {
            var e = ot(t, this),
                n = e.length;
            return this.filter(function() {
                for (var t = 0; n > t; t++)
                    if (ot.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0, r = this.length, o = [], s = ft.test(t) || "string" != typeof t ? ot(t, e || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? ot.uniqueSort(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? Z.call(ot(t), this[0]) : Z.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(ot.uniqueSort(ot.merge(this.get(), ot(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), ot.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return dt(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return dt(t, "parentNode", n)
        },
        next: function(t) {
            return r(t, "nextSibling")
        },
        prev: function(t) {
            return r(t, "previousSibling")
        },
        nextAll: function(t) {
            return dt(t, "nextSibling")
        },
        prevAll: function(t) {
            return dt(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return dt(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return dt(t, "previousSibling", n)
        },
        siblings: function(t) {
            return pt((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return pt(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || ot.merge([], t.childNodes)
        }
    }, function(t, e) {
        ot.fn[t] = function(n, i) {
            var r = ot.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = ot.filter(i, r)), this.length > 1 && (bt[t] || ot.uniqueSort(r), wt.test(t) && r.reverse()), this.pushStack(r)
        }
    });
    var _t = /\S+/g;
    ot.Callbacks = function(t) {
        t = "string" == typeof t ? o(t) : ot.extend({}, t);
        var e, n, i, r, s = [],
            a = [],
            l = -1,
            u = function() {
                for (r = t.once, i = e = !0; a.length; l = -1)
                    for (n = a.shift(); ++l < s.length;) s[l].apply(n[0], n[1]) === !1 && t.stopOnFalse && (l = s.length, n = !1);
                t.memory || (n = !1), e = !1, r && (s = n ? [] : "")
            },
            c = {
                add: function() {
                    return s && (n && !e && (l = s.length - 1, a.push(n)), function i(e) {
                        ot.each(e, function(e, n) {
                            ot.isFunction(n) ? t.unique && c.has(n) || s.push(n) : n && n.length && "string" !== ot.type(n) && i(n)
                        })
                    }(arguments), n && !e && u()), this
                },
                remove: function() {
                    return ot.each(arguments, function(t, e) {
                        for (var n;
                            (n = ot.inArray(e, s, n)) > -1;) s.splice(n, 1), l >= n && l--
                    }), this
                },
                has: function(t) {
                    return t ? ot.inArray(t, s) > -1 : s.length > 0
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return r = a = [], s = n = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return r = a = [], n || (s = n = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(t, n) {
                    return r || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || u()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return c
    }, ot.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", ot.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ot.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ot.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return ot.Deferred(function(n) {
                            ot.each(e, function(e, o) {
                                var s = ot.isFunction(t[e]) && t[e];
                                r[o[1]](function() {
                                    var t = s && s.apply(this, arguments);
                                    t && ot.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? ot.extend(t, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, ot.each(e, function(t, o) {
                var s = o[2],
                    a = o[3];
                i[o[1]] = s.add, a && s.add(function() {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = s.fireWith
            }), i.promise(r), t && t.call(r, r), r
        },
        when: function(t) {
            var e, n, i, r = 0,
                o = V.call(arguments),
                s = o.length,
                a = 1 !== s || t && ot.isFunction(t.promise) ? s : 0,
                l = 1 === a ? t : ot.Deferred(),
                u = function(t, n, i) {
                    return function(r) {
                        n[t] = this, i[t] = arguments.length > 1 ? V.call(arguments) : r, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (e = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) o[r] && ot.isFunction(o[r].promise) ? o[r].promise().progress(u(r, n, e)).done(u(r, i, o)).fail(l.reject) : --a;
            return a || l.resolveWith(i, o), l.promise()
        }
    });
    var $t;
    ot.fn.ready = function(t) {
        return ot.ready.promise().done(t), this
    }, ot.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? ot.readyWait++ : ot.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --ot.readyWait : ot.isReady) || (ot.isReady = !0, t !== !0 && --ot.readyWait > 0 || ($t.resolveWith(Y, [ot]), ot.fn.triggerHandler && (ot(Y).triggerHandler("ready"), ot(Y).off("ready"))))
        }
    }), ot.ready.promise = function(e) {
        return $t || ($t = ot.Deferred(), "complete" === Y.readyState || "loading" !== Y.readyState && !Y.documentElement.doScroll ? t.setTimeout(ot.ready) : (Y.addEventListener("DOMContentLoaded", s), t.addEventListener("load", s))), $t.promise(e)
    }, ot.ready.promise();
    var kt = function(t, e, n, i, r, o, s) {
            var a = 0,
                l = t.length,
                u = null == n;
            if ("object" === ot.type(n)) {
                r = !0;
                for (a in n) kt(t, e, a, n[a], !0, o, s)
            } else if (void 0 !== i && (r = !0, ot.isFunction(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
                    return u.call(ot(t), n)
                })), e))
                for (; l > a; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
            return r ? t : u ? e.call(t) : l ? e(t[0], n) : o
        },
        xt = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
    a.uid = 1, a.prototype = {
        register: function(t, e) {
            var n = e || {};
            return t.nodeType ? t[this.expando] = n : Object.defineProperty(t, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), t[this.expando]
        },
        cache: function(t) {
            if (!xt(t)) return {};
            var e = t[this.expando];
            return e || (e = {}, xt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function(t, e, n) {
            var i, r = this.cache(t);
            if ("string" == typeof e) r[e] = n;
            else
                for (i in e) r[i] = e[i];
            return r
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
        },
        access: function(t, e, n) {
            var i;
            return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e), void 0 !== i ? i : this.get(t, ot.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, i, r, o = t[this.expando];
            if (void 0 !== o) {
                if (void 0 === e) this.register(t);
                else {
                    ot.isArray(e) ? i = e.concat(e.map(ot.camelCase)) : (r = ot.camelCase(e), e in o ? i = [e, r] : (i = r, i = i in o ? [i] : i.match(_t) || [])), n = i.length;
                    for (; n--;) delete o[i[n]]
                }(void 0 === e || ot.isEmptyObject(o)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !ot.isEmptyObject(e)
        }
    };
    var Tt = new a,
        St = new a,
        Ct = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Et = /[A-Z]/g;
    ot.extend({
        hasData: function(t) {
            return St.hasData(t) || Tt.hasData(t)
        },
        data: function(t, e, n) {
            return St.access(t, e, n)
        },
        removeData: function(t, e) {
            St.remove(t, e)
        },
        _data: function(t, e, n) {
            return Tt.access(t, e, n)
        },
        _removeData: function(t, e) {
            Tt.remove(t, e)
        }
    }), ot.fn.extend({
        data: function(t, e) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (r = St.get(o), 1 === o.nodeType && !Tt.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = ot.camelCase(i.slice(5)), l(o, i, r[i])));
                    Tt.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                St.set(this, t)
            }) : kt(this, function(e) {
                var n, i;
                if (o && void 0 === e) {
                    if (n = St.get(o, t) || St.get(o, t.replace(Et, "-$&").toLowerCase()), void 0 !== n) return n;
                    if (i = ot.camelCase(t), n = St.get(o, i), void 0 !== n) return n;
                    if (n = l(o, i, void 0), void 0 !== n) return n
                } else i = ot.camelCase(t), this.each(function() {
                    var n = St.get(this, i);
                    St.set(this, i, e), t.indexOf("-") > -1 && void 0 !== n && St.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                St.remove(this, t)
            })
        }
    }), ot.extend({
        queue: function(t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = Tt.get(t, e), n && (!i || ot.isArray(n) ? i = Tt.access(t, e, ot.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = ot.queue(t, e),
                i = n.length,
                r = n.shift(),
                o = ot._queueHooks(t, e),
                s = function() {
                    ot.dequeue(t, e)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return Tt.get(t, n) || Tt.access(t, n, {
                empty: ot.Callbacks("once memory").add(function() {
                    Tt.remove(t, [e + "queue", n])
                })
            })
        }
    }), ot.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ot.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = ot.queue(this, t, e);
                ot._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ot.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                ot.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1,
                r = ot.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = Tt.get(o[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var jt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        At = new RegExp("^(?:([+-])=|)(" + jt + ")([a-z%]*)$", "i"),
        Ft = ["Top", "Right", "Bottom", "Left"],
        Dt = function(t, e) {
            return t = e || t, "none" === ot.css(t, "display") || !ot.contains(t.ownerDocument, t)
        },
        Lt = /^(?:checkbox|radio)$/i,
        Mt = /<([\w:-]+)/,
        It = /^$|\/(?:java|ecma)script/i,
        Ot = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ot.optgroup = Ot.option, Ot.tbody = Ot.tfoot = Ot.colgroup = Ot.caption = Ot.thead, Ot.th = Ot.td;
    var Pt = /<|&#?\w+;/;
    ! function() {
        var t = Y.createDocumentFragment(),
            e = t.appendChild(Y.createElement("div")),
            n = Y.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), it.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", it.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Nt = /^key/,
        Ht = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ut = /^([^.]*)(?:\.(.+)|)/;
    ot.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, s, a, l, u, c, d, p, f, h, m, g = Tt.get(t);
            if (g)
                for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = ot.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(e) {
                        return "undefined" != typeof ot && ot.event.triggered !== e.type ? ot.event.dispatch.apply(t, arguments) : void 0
                    }), e = (e || "").match(_t) || [""], u = e.length; u--;) a = Ut.exec(e[u]) || [], f = m = a[1], h = (a[2] || "").split(".").sort(), f && (d = ot.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = ot.event.special[f] || {}, c = ot.extend({
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && ot.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                }, o), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, d.setup && d.setup.call(t, i, h, s) !== !1 || t.addEventListener && t.addEventListener(f, s)), d.add && (d.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, c) : p.push(c), ot.event.global[f] = !0)
        },
        remove: function(t, e, n, i, r) {
            var o, s, a, l, u, c, d, p, f, h, m, g = Tt.hasData(t) && Tt.get(t);
            if (g && (l = g.events)) {
                for (e = (e || "").match(_t) || [""], u = e.length; u--;)
                    if (a = Ut.exec(e[u]) || [], f = m = a[1], h = (a[2] || "").split(".").sort(), f) {
                        for (d = ot.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !r && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, d.remove && d.remove.call(t, c));
                        s && !p.length && (d.teardown && d.teardown.call(t, h, g.handle) !== !1 || ot.removeEvent(t, f, g.handle), delete l[f])
                    } else
                        for (f in l) ot.event.remove(t, f + e[u], n, i, !0);
                ot.isEmptyObject(l) && Tt.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            t = ot.event.fix(t);
            var e, n, i, r, o, s = [],
                a = V.call(arguments),
                l = (Tt.get(this, "events") || {})[t.type] || [],
                u = ot.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                for (s = ot.event.handlers.call(this, t, l), e = 0;
                    (r = s[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.rnamespace || t.rnamespace.test(o.namespace)) && (t.handleObj = o, t.data = o.data, i = ((ot.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n, i, r, o, s = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (i = [], n = 0; a > n; n++) o = e[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? ot(r, this).index(l) > -1 : ot.find(r, this, null, [l]).length), i[r] && i.push(o);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, i, r, o = e.button;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || Y, i = n.documentElement, r = n.body, t.pageX = e.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        fix: function(t) {
            if (t[ot.expando]) return t;
            var e, n, i, r = t.type,
                o = t,
                s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Ht.test(r) ? this.mouseHooks : Nt.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new ot.Event(o), e = i.length; e--;) n = i[e], t[n] = o[n];
            return t.target || (t.target = Y), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, o) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== m() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === m() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && ot.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return ot.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, ot.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }, ot.Event = function(t, e) {
        return this instanceof ot.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? f : h) : this.type = t, e && ot.extend(this, e), this.timeStamp = t && t.timeStamp || ot.now(), void(this[ot.expando] = !0)) : new ot.Event(t, e)
    }, ot.Event.prototype = {
        constructor: ot.Event,
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = f, t && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = f, t && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = f, t && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ot.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        ot.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this,
                    r = t.relatedTarget,
                    o = t.handleObj;
                return (!r || r !== i && !ot.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), ot.fn.extend({
        on: function(t, e, n, i) {
            return g(this, t, e, n, i)
        },
        one: function(t, e, n, i) {
            return g(this, t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, ot(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = h), this.each(function() {
                ot.event.remove(this, t, n, e)
            })
        }
    });
    var Rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        qt = /<script|<style|<link/i,
        zt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Gt = /^true\/(.*)/,
        Bt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ot.extend({
        htmlPrefilter: function(t) {
            return t.replace(Rt, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var i, r, o, s, a = t.cloneNode(!0),
                l = ot.contains(t.ownerDocument, t);
            if (!(it.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ot.isXMLDoc(t)))
                for (s = c(a), o = c(t), i = 0, r = o.length; r > i; i++) _(o[i], s[i]);
            if (e)
                if (n)
                    for (o = o || c(t), s = s || c(a), i = 0, r = o.length; r > i; i++) b(o[i], s[i]);
                else b(t, a);
            return s = c(a, "script"), s.length > 0 && d(s, !l && c(t, "script")), a
        },
        cleanData: function(t) {
            for (var e, n, i, r = ot.event.special, o = 0; void 0 !== (n = t[o]); o++)
                if (xt(n)) {
                    if (e = n[Tt.expando]) {
                        if (e.events)
                            for (i in e.events) r[i] ? ot.event.remove(n, i) : ot.removeEvent(n, i, e.handle);
                        n[Tt.expando] = void 0
                    }
                    n[St.expando] && (n[St.expando] = void 0)
                }
        }
    }), ot.fn.extend({
        domManip: $,
        detach: function(t) {
            return k(this, t, !0)
        },
        remove: function(t) {
            return k(this, t)
        },
        text: function(t) {
            return kt(this, function(t) {
                return void 0 === t ? ot.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return $(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = v(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return $(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = v(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return $(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return $(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (ot.cleanData(c(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return ot.clone(this, t, e)
            })
        },
        html: function(t) {
            return kt(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !qt.test(t) && !Ot[(Mt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = ot.htmlPrefilter(t);
                    try {
                        for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (ot.cleanData(c(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return $(this, arguments, function(e) {
                var n = this.parentNode;
                ot.inArray(this, t) < 0 && (ot.cleanData(c(this)), n && n.replaceChild(e, this))
            }, t)
        }
    }), ot.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        ot.fn[t] = function(t) {
            for (var n, i = [], r = ot(t), o = r.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), ot(r[s])[e](n), Q.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Wt, Jt = {
            HTML: "block",
            BODY: "block"
        },
        Xt = /^margin/,
        Yt = new RegExp("^(" + jt + ")(?!px)[a-z%]+$", "i"),
        Vt = function(e) {
            var n = e.ownerDocument.defaultView;
            return n && n.opener || (n = t), n.getComputedStyle(e)
        },
        Kt = function(t, e, n, i) {
            var r, o, s = {};
            for (o in e) s[o] = t.style[o], t.style[o] = e[o];
            r = n.apply(t, i || []);
            for (o in e) t.style[o] = s[o];
            return r
        },
        Qt = Y.documentElement;
    ! function() {
        function e() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Qt.appendChild(s);
            var e = t.getComputedStyle(a);
            n = "1%" !== e.top, o = "2px" === e.marginLeft, i = "4px" === e.width, a.style.marginRight = "50%", r = "4px" === e.marginRight, Qt.removeChild(s)
        }
        var n, i, r, o, s = Y.createElement("div"),
            a = Y.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", it.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), ot.extend(it, {
            pixelPosition: function() {
                return e(), n
            },
            boxSizingReliable: function() {
                return null == i && e(), i
            },
            pixelMarginRight: function() {
                return null == i && e(), r
            },
            reliableMarginLeft: function() {
                return null == i && e(), o
            },
            reliableMarginRight: function() {
                var e, n = a.appendChild(Y.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Qt.appendChild(s), e = !parseFloat(t.getComputedStyle(n).marginRight), Qt.removeChild(s), a.removeChild(n), e
            }
        }))
    }();
    var Zt = /^(none|table(?!-c[ea]).+)/,
        te = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ee = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ne = ["Webkit", "O", "Moz", "ms"],
        ie = Y.createElement("div").style;
    ot.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = S(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = ot.camelCase(e),
                    l = t.style;
                return e = ot.cssProps[a] || (ot.cssProps[a] = E(a) || a), s = ot.cssHooks[e] || ot.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : l[e] : (o = typeof n, "string" === o && (r = At.exec(n)) && r[1] && (n = u(t, e, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (ot.cssNumber[a] ? "" : "px")), it.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l[e] = n)), void 0)
            }
        },
        css: function(t, e, n, i) {
            var r, o, s, a = ot.camelCase(e);
            return e = ot.cssProps[a] || (ot.cssProps[a] = E(a) || a), s = ot.cssHooks[e] || ot.cssHooks[a], s && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = S(t, e, i)), "normal" === r && e in ee && (r = ee[e]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r
        }
    }), ot.each(["height", "width"], function(t, e) {
        ot.cssHooks[e] = {
            get: function(t, n, i) {
                return n ? Zt.test(ot.css(t, "display")) && 0 === t.offsetWidth ? Kt(t, te, function() {
                    return F(t, e, i)
                }) : F(t, e, i) : void 0
            },
            set: function(t, n, i) {
                var r, o = i && Vt(t),
                    s = i && A(t, e, i, "border-box" === ot.css(t, "boxSizing", !1, o), o);
                return s && (r = At.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = ot.css(t, e)), j(t, n, s)
            }
        }
    }), ot.cssHooks.marginLeft = C(it.reliableMarginLeft, function(t, e) {
        return e ? (parseFloat(S(t, "marginLeft")) || t.getBoundingClientRect().left - Kt(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        })) + "px" : void 0
    }), ot.cssHooks.marginRight = C(it.reliableMarginRight, function(t, e) {
        return e ? Kt(t, {
            display: "inline-block"
        }, S, [t, "marginRight"]) : void 0
    }), ot.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        ot.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[t + Ft[i] + e] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, Xt.test(t) || (ot.cssHooks[t + e].set = j)
    }), ot.fn.extend({
        css: function(t, e) {
            return kt(this, function(t, e, n) {
                var i, r, o = {},
                    s = 0;
                if (ot.isArray(e)) {
                    for (i = Vt(t), r = e.length; r > s; s++) o[e[s]] = ot.css(t, e[s], !1, i);
                    return o
                }
                return void 0 !== n ? ot.style(t, e, n) : ot.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return D(this, !0)
        },
        hide: function() {
            return D(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Dt(this) ? ot(this).show() : ot(this).hide()
            })
        }
    }), ot.Tween = L, L.prototype = {
        constructor: L,
        init: function(t, e, n, i, r, o) {
            this.elem = t, this.prop = n, this.easing = r || ot.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ot.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = L.propHooks[this.prop];
            return t && t.get ? t.get(this) : L.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = L.propHooks[this.prop];
            return this.options.duration ? this.pos = e = ot.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : L.propHooks._default.set(this), this
        }
    }, L.prototype.init.prototype = L.prototype, L.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ot.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            },
            set: function(t) {
                ot.fx.step[t.prop] ? ot.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ot.cssProps[t.prop]] && !ot.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ot.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, ot.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, ot.fx = L.prototype.init, ot.fx.step = {};
    var re, oe, se = /^(?:toggle|show|hide)$/,
        ae = /queueHooks$/;
    ot.Animation = ot.extend(H, {
            tweeners: {
                "*": [function(t, e) {
                    var n = this.createTween(t, e);
                    return u(n.elem, t, At.exec(e), n), n
                }]
            },
            tweener: function(t, e) {
                ot.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(_t);
                for (var n, i = 0, r = t.length; r > i; i++) n = t[i], H.tweeners[n] = H.tweeners[n] || [], H.tweeners[n].unshift(e)
            },
            prefilters: [P],
            prefilter: function(t, e) {
                e ? H.prefilters.unshift(t) : H.prefilters.push(t)
            }
        }), ot.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? ot.extend({}, t) : {
                complete: n || !n && e || ot.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !ot.isFunction(e) && e
            };
            return i.duration = ot.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ot.fx.speeds ? ot.fx.speeds[i.duration] : ot.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                ot.isFunction(i.old) && i.old.call(this), i.queue && ot.dequeue(this, i.queue)
            }, i
        }, ot.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(Dt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var r = ot.isEmptyObject(t),
                    o = ot.speed(e, n, i),
                    s = function() {
                        var e = H(this, ot.extend({}, t), o);
                        (r || Tt.get(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(t, e, n) {
                var i = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        r = null != t && t + "queueHooks",
                        o = ot.timers,
                        s = Tt.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && ae.test(r) && i(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                    (e || !n) && ot.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, n = Tt.get(this),
                        i = n[t + "queue"],
                        r = n[t + "queueHooks"],
                        o = ot.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, ot.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), ot.each(["toggle", "show", "hide"], function(t, e) {
            var n = ot.fn[e];
            ot.fn[e] = function(t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(I(e, !0), t, i, r)
            }
        }), ot.each({
            slideDown: I("show"),
            slideUp: I("hide"),
            slideToggle: I("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            ot.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), ot.timers = [], ot.fx.tick = function() {
            var t, e = 0,
                n = ot.timers;
            for (re = ot.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
            n.length || ot.fx.stop(), re = void 0
        }, ot.fx.timer = function(t) {
            ot.timers.push(t), t() ? ot.fx.start() : ot.timers.pop()
        }, ot.fx.interval = 13, ot.fx.start = function() {
            oe || (oe = t.setInterval(ot.fx.tick, ot.fx.interval))
        }, ot.fx.stop = function() {
            t.clearInterval(oe), oe = null
        }, ot.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ot.fn.delay = function(e, n) {
            return e = ot.fx ? ot.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function(n, i) {
                var r = t.setTimeout(n, e);
                i.stop = function() {
                    t.clearTimeout(r)
                }
            })
        },
        function() {
            var t = Y.createElement("input"),
                e = Y.createElement("select"),
                n = e.appendChild(Y.createElement("option"));
            t.type = "checkbox", it.checkOn = "" !== t.value, it.optSelected = n.selected, e.disabled = !0, it.optDisabled = !n.disabled, t = Y.createElement("input"), t.value = "t", t.type = "radio", it.radioValue = "t" === t.value
        }();
    var le, ue = ot.expr.attrHandle;
    ot.fn.extend({
        attr: function(t, e) {
            return kt(this, ot.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                ot.removeAttr(this, t)
            })
        }
    }), ot.extend({
        attr: function(t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof t.getAttribute ? ot.prop(t, e, n) : (1 === o && ot.isXMLDoc(t) || (e = e.toLowerCase(), r = ot.attrHooks[e] || (ot.expr.match.bool.test(e) ? le : void 0)), void 0 !== n ? null === n ? void ot.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = ot.find.attr(t, e), null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!it.radioValue && "radio" === e && ot.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, i, r = 0,
                o = e && e.match(_t);
            if (o && 1 === t.nodeType)
                for (; n = o[r++];) i = ot.propFix[n] || n, ot.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
        }
    }), le = {
        set: function(t, e, n) {
            return e === !1 ? ot.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, ot.each(ot.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = ue[e] || ot.find.attr;
        ue[e] = function(t, e, i) {
            var r, o;
            return i || (o = ue[e], ue[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, ue[e] = o), r
        }
    });
    var ce = /^(?:input|select|textarea|button)$/i,
        de = /^(?:a|area)$/i;
    ot.fn.extend({
        prop: function(t, e) {
            return kt(this, ot.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[ot.propFix[t] || t]
            })
        }
    }), ot.extend({
        prop: function(t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ot.isXMLDoc(t) || (e = ot.propFix[e] || e, r = ot.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = ot.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ce.test(t.nodeName) || de.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), it.optSelected || (ot.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ot.propFix[this.toLowerCase()] = this
    });
    var pe = /[\t\r\n\f]/g;
    ot.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, s, a, l = 0;
            if (ot.isFunction(t)) return this.each(function(e) {
                ot(this).addClass(t.call(this, e, U(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(_t) || []; n = this[l++];)
                    if (r = U(n), i = 1 === n.nodeType && (" " + r + " ").replace(pe, " ")) {
                        for (s = 0; o = e[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        a = ot.trim(i), r !== a && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, o, s, a, l = 0;
            if (ot.isFunction(t)) return this.each(function(e) {
                ot(this).removeClass(t.call(this, e, U(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(_t) || []; n = this[l++];)
                    if (r = U(n), i = 1 === n.nodeType && (" " + r + " ").replace(pe, " ")) {
                        for (s = 0; o = e[s++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        a = ot.trim(i), r !== a && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ot.isFunction(t) ? this.each(function(n) {
                ot(this).toggleClass(t.call(this, n, U(this), e), e)
            }) : this.each(function() {
                var e, i, r, o;
                if ("string" === n)
                    for (i = 0, r = ot(this), o = t.match(_t) || []; e = o[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else(void 0 === t || "boolean" === n) && (e = U(this), e && Tt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : Tt.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + U(n) + " ").replace(pe, " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var fe = /\r/g,
        he = /[\x20\t\r\n\f]+/g;
    ot.fn.extend({
        val: function(t) {
            var e, n, i, r = this[0]; {
                if (arguments.length) return i = ot.isFunction(t), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (r = i ? t.call(this, n, ot(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : ot.isArray(r) && (r = ot.map(r, function(t) {
                        return null == t ? "" : t + ""
                    })), e = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                });
                if (r) return e = ot.valHooks[r.type] || ot.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(fe, "") : null == n ? "" : n)
            }
        }
    }), ot.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = ot.find.attr(t, "value");
                    return null != e ? e : ot.trim(ot.text(t)).replace(he, " ")
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                        if (n = i[l], (n.selected || l === r) && (it.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ot.nodeName(n.parentNode, "optgroup"))) {
                            if (e = ot(n).val(), o) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(t, e) {
                    for (var n, i, r = t.options, o = ot.makeArray(e), s = r.length; s--;) i = r[s], (i.selected = ot.inArray(ot.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (t.selectedIndex = -1), o
                }
            }
        }
    }), ot.each(["radio", "checkbox"], function() {
        ot.valHooks[this] = {
            set: function(t, e) {
                return ot.isArray(e) ? t.checked = ot.inArray(ot(t).val(), e) > -1 : void 0
            }
        }, it.checkOn || (ot.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var me = /^(?:focusinfocus|focusoutblur)$/;
    ot.extend(ot.event, {
        trigger: function(e, n, i, r) {
            var o, s, a, l, u, c, d, p = [i || Y],
                f = nt.call(e, "type") ? e.type : e,
                h = nt.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = a = i = i || Y, 3 !== i.nodeType && 8 !== i.nodeType && !me.test(f + ot.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), u = f.indexOf(":") < 0 && "on" + f, e = e[ot.expando] ? e : new ot.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : ot.makeArray(n, [e]), d = ot.event.special[f] || {}, r || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                if (!r && !d.noBubble && !ot.isWindow(i)) {
                    for (l = d.delegateType || f, me.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                    a === (i.ownerDocument || Y) && p.push(a.defaultView || a.parentWindow || t)
                }
                for (o = 0;
                    (s = p[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? l : d.bindType || f, c = (Tt.get(s, "events") || {})[e.type] && Tt.get(s, "handle"), c && c.apply(s, n), c = u && s[u], c && c.apply && xt(s) && (e.result = c.apply(s, n), e.result === !1 && e.preventDefault());
                return e.type = f, r || e.isDefaultPrevented() || d._default && d._default.apply(p.pop(), n) !== !1 || !xt(i) || u && ot.isFunction(i[f]) && !ot.isWindow(i) && (a = i[u], a && (i[u] = null), ot.event.triggered = f, i[f](), ot.event.triggered = void 0, a && (i[u] = a)), e.result
            }
        },
        simulate: function(t, e, n) {
            var i = ot.extend(new ot.Event, n, {
                type: t,
                isSimulated: !0
            });
            ot.event.trigger(i, null, e), i.isDefaultPrevented() && n.preventDefault()
        }
    }), ot.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                ot.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? ot.event.trigger(t, e, n, !0) : void 0
        }
    }), ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        ot.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), ot.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), it.focusin = "onfocusin" in t, it.focusin || ot.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            ot.event.simulate(e, t.target, ot.event.fix(t))
        };
        ot.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = Tt.access(i, e);
                r || i.addEventListener(t, n, !0), Tt.access(i, e, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = Tt.access(i, e) - 1;
                r ? Tt.access(i, e, r) : (i.removeEventListener(t, n, !0), Tt.remove(i, e))
            }
        }
    });
    var ge = t.location,
        ve = ot.now(),
        ye = /\?/;
    ot.parseJSON = function(t) {
        return JSON.parse(t + "")
    }, ot.parseXML = function(e) {
        var n;
        if (!e || "string" != typeof e) return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (i) {
            n = void 0
        }
        return (!n || n.getElementsByTagName("parsererror").length) && ot.error("Invalid XML: " + e), n
    };
    var we = /#.*$/,
        be = /([?&])_=[^&]*/,
        _e = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        $e = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        ke = /^(?:GET|HEAD)$/,
        xe = /^\/\//,
        Te = {},
        Se = {},
        Ce = "*/".concat("*"),
        Ee = Y.createElement("a");
    Ee.href = ge.href, ot.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ge.href,
            type: "GET",
            isLocal: $e.test(ge.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ce,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ot.parseJSON,
                "text xml": ot.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? z(z(t, ot.ajaxSettings), e) : z(ot.ajaxSettings, t)
        },
        ajaxPrefilter: R(Te),
        ajaxTransport: R(Se),
        ajax: function(e, n) {
            function i(e, n, i, a) {
                var u, d, y, w, _, k = n;
                2 !== b && (b = 2, l && t.clearTimeout(l), r = void 0, s = a || "", $.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, i && (w = G(p, $, i)), w = B(p, w, $, u), u ? (p.ifModified && (_ = $.getResponseHeader("Last-Modified"), _ && (ot.lastModified[o] = _), _ = $.getResponseHeader("etag"), _ && (ot.etag[o] = _)), 204 === e || "HEAD" === p.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = w.state, d = w.data, y = w.error, u = !y)) : (y = k, (e || !k) && (k = "error", 0 > e && (e = 0))), $.status = e, $.statusText = (n || k) + "", u ? m.resolveWith(f, [d, k, $]) : m.rejectWith(f, [$, k, y]), $.statusCode(v), v = void 0, c && h.trigger(u ? "ajaxSuccess" : "ajaxError", [$, p, u ? d : y]), g.fireWith(f, [$, k]), c && (h.trigger("ajaxComplete", [$, p]), --ot.active || ot.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = void 0), n = n || {};
            var r, o, s, a, l, u, c, d, p = ot.ajaxSetup({}, n),
                f = p.context || p,
                h = p.context && (f.nodeType || f.jquery) ? ot(f) : ot.event,
                m = ot.Deferred(),
                g = ot.Callbacks("once memory"),
                v = p.statusCode || {},
                y = {},
                w = {},
                b = 0,
                _ = "canceled",
                $ = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === b) {
                            if (!a)
                                for (a = {}; e = _e.exec(s);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? s : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return b || (t = w[n] = w[n] || t, y[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return b || (p.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > b)
                                for (e in t) v[e] = [v[e], t[e]];
                            else $.always(t[$.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || _;
                        return r && r.abort(e), i(0, e), this
                    }
                };
            if (m.promise($).complete = g.add, $.success = $.done, $.error = $.fail, p.url = ((e || p.url || ge.href) + "").replace(we, "").replace(xe, ge.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = ot.trim(p.dataType || "*").toLowerCase().match(_t) || [""], null == p.crossDomain) {
                u = Y.createElement("a");
                try {
                    u.href = p.url, u.href = u.href, p.crossDomain = Ee.protocol + "//" + Ee.host != u.protocol + "//" + u.host
                } catch (k) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = ot.param(p.data, p.traditional)), q(Te, p, n, $), 2 === b) return $;
            c = ot.event && p.global, c && 0 === ot.active++ && ot.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !ke.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (ye.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = be.test(o) ? o.replace(be, "$1_=" + ve++) : o + (ye.test(o) ? "&" : "?") + "_=" + ve++)), p.ifModified && (ot.lastModified[o] && $.setRequestHeader("If-Modified-Since", ot.lastModified[o]), ot.etag[o] && $.setRequestHeader("If-None-Match", ot.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && $.setRequestHeader("Content-Type", p.contentType), $.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ce + "; q=0.01" : "") : p.accepts["*"]);
            for (d in p.headers) $.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (p.beforeSend.call(f, $, p) === !1 || 2 === b)) return $.abort();
            _ = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) $[d](p[d]);
            if (r = q(Se, p, n, $)) {
                if ($.readyState = 1, c && h.trigger("ajaxSend", [$, p]), 2 === b) return $;
                p.async && p.timeout > 0 && (l = t.setTimeout(function() {
                    $.abort("timeout")
                }, p.timeout));
                try {
                    b = 1, r.send(y, i)
                } catch (k) {
                    if (!(2 > b)) throw k;
                    i(-1, k)
                }
            } else i(-1, "No Transport");
            return $
        },
        getJSON: function(t, e, n) {
            return ot.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return ot.get(t, void 0, e, "script")
        }
    }), ot.each(["get", "post"], function(t, e) {
        ot[e] = function(t, n, i, r) {
            return ot.isFunction(n) && (r = r || i, i = n, n = void 0), ot.ajax(ot.extend({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            }, ot.isPlainObject(t) && t))
        }
    }), ot._evalUrl = function(t) {
        return ot.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ot.fn.extend({
        wrapAll: function(t) {
            var e;
            return ot.isFunction(t) ? this.each(function(e) {
                ot(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = ot(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function(t) {
            return ot.isFunction(t) ? this.each(function(e) {
                ot(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = ot(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = ot.isFunction(t);
            return this.each(function(n) {
                ot(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ot.expr.filters.hidden = function(t) {
        return !ot.expr.filters.visible(t)
    }, ot.expr.filters.visible = function(t) {
        return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
    };
    var je = /%20/g,
        Ae = /\[\]$/,
        Fe = /\r?\n/g,
        De = /^(?:submit|button|image|reset|file)$/i,
        Le = /^(?:input|select|textarea|keygen)/i;
    ot.param = function(t, e) {
        var n, i = [],
            r = function(t, e) {
                e = ot.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(t) || t.jquery && !ot.isPlainObject(t)) ot.each(t, function() {
            r(this.name, this.value)
        });
        else
            for (n in t) W(n, t[n], e, r);
        return i.join("&").replace(je, "+")
    }, ot.fn.extend({
        serialize: function() {
            return ot.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = ot.prop(this, "elements");
                return t ? ot.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !ot(this).is(":disabled") && Le.test(this.nodeName) && !De.test(t) && (this.checked || !Lt.test(t))
            }).map(function(t, e) {
                var n = ot(this).val();
                return null == n ? null : ot.isArray(n) ? ot.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Fe, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Fe, "\r\n")
                }
            }).get()
        }
    }), ot.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    };
    var Me = {
            0: 200,
            1223: 204
        },
        Ie = ot.ajaxSettings.xhr();
    it.cors = !!Ie && "withCredentials" in Ie, it.ajax = Ie = !!Ie, ot.ajaxTransport(function(e) {
        var n, i;
        return it.cors || Ie && !e.crossDomain ? {
            send: function(r, o) {
                var s, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (s in e.xhrFields) a[s] = e.xhrFields[s];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (s in r) a.setRequestHeader(s, r[s]);
                n = function(t) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Me[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && t.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (l) {
                    if (n) throw l
                }
            },
            abort: function() {
                n && n()
            }
        } : void 0
    }), ot.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return ot.globalEval(t), t
            }
        }
    }), ot.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), ot.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function(i, r) {
                    e = ot("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function(t) {
                        e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                    }), Y.head.appendChild(e[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Oe = [],
        Pe = /(=)\?(?=&|$)|\?\?/;
    ot.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Oe.pop() || ot.expando + "_" + ve++;
            return this[t] = !0, t
        }
    }), ot.ajaxPrefilter("json jsonp", function(e, n, i) {
        var r, o, s, a = e.jsonp !== !1 && (Pe.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Pe.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = ot.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Pe, "$1" + r) : e.jsonp !== !1 && (e.url += (ye.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return s || ot.error(r + " was not called"), s[0]
        }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
            s = arguments
        }, i.always(function() {
            void 0 === o ? ot(t).removeProp(r) : t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, Oe.push(r)), s && ot.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), ot.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || Y;
        var i = ht.exec(t),
            r = !n && [];
        return i ? [e.createElement(i[1])] : (i = p([t], e, r), r && r.length && ot(r).remove(), ot.merge([], i.childNodes))
    };
    var Ne = ot.fn.load;
    ot.fn.load = function(t, e, n) {
        if ("string" != typeof t && Ne) return Ne.apply(this, arguments);
        var i, r, o, s = this,
            a = t.indexOf(" ");
        return a > -1 && (i = ot.trim(t.slice(a)), t = t.slice(0, a)), ot.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && ot.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, s.html(i ? ot("<div>").append(ot.parseHTML(t)).find(i) : t)
        }).always(n && function(t, e) {
            s.each(function() {
                n.apply(this, o || [t.responseText, e, t])
            })
        }), this
    }, ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        ot.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), ot.expr.filters.animated = function(t) {
        return ot.grep(ot.timers, function(e) {
            return t === e.elem
        }).length
    }, ot.offset = {
        setOffset: function(t, e, n) {
            var i, r, o, s, a, l, u, c = ot.css(t, "position"),
                d = ot(t),
                p = {};
            "static" === c && (t.style.position = "relative"), a = d.offset(), o = ot.css(t, "top"), l = ot.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, u ? (i = d.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), ot.isFunction(e) && (e = e.call(t, n, ot.extend({}, a))), null != e.top && (p.top = e.top - a.top + s), null != e.left && (p.left = e.left - a.left + r), "using" in e ? e.using.call(t, p) : d.css(p)
        }
    }, ot.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                ot.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0],
                r = {
                    top: 0,
                    left: 0
                },
                o = i && i.ownerDocument;
            if (o) return e = o.documentElement, ot.contains(e, i) ? (r = i.getBoundingClientRect(), n = J(o), {
                top: r.top + n.pageYOffset - e.clientTop,
                left: r.left + n.pageXOffset - e.clientLeft
            }) : r
        },
        position: function() {
            if (this[0]) {
                var t, e, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === ot.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ot.nodeName(t[0], "html") || (i = t.offset()), i.top += ot.css(t[0], "borderTopWidth", !0), i.left += ot.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - ot.css(n, "marginTop", !0),
                    left: e.left - i.left - ot.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === ot.css(t, "position");) t = t.offsetParent;
                return t || Qt
            })
        }
    }), ot.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = "pageYOffset" === e;
        ot.fn[t] = function(i) {
            return kt(this, function(t, i, r) {
                var o = J(t);
                return void 0 === r ? o ? o[e] : t[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : t[i] = r)
            }, t, i, arguments.length)
        }
    }), ot.each(["top", "left"], function(t, e) {
        ot.cssHooks[e] = C(it.pixelPosition, function(t, n) {
            return n ? (n = S(t, e), Yt.test(n) ? ot(t).position()[e] + "px" : n) : void 0
        })
    }), ot.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        ot.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            ot.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || r === !0 ? "margin" : "border");
                return kt(this, function(e, n, i) {
                    var r;
                    return ot.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? ot.css(e, n, s) : ot.style(e, n, i, s)
                }, e, o ? i : void 0, o, null)
            }
        })
    }), ot.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        },
        size: function() {
            return this.length
        }
    }), ot.fn.andSelf = ot.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ot
    });
    var He = t.jQuery,
        Ue = t.$;
    return ot.noConflict = function(e) {
        return t.$ === ot && (t.$ = Ue), e && t.jQuery === ot && (t.jQuery = He), ot
    }, e || (t.jQuery = t.$ = ot), ot
}),
function(t, e) {
    "use strict";
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var n, i = t(document);
    t.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function() {
            return t("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function() {
            return t("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function(t) {
            var e = n.csrfToken();
            e && t.setRequestHeader("X-CSRF-Token", e)
        },
        refreshCSRFTokens: function() {
            t('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
        },
        fire: function(e, n, i) {
            var r = t.Event(n);
            return e.trigger(r, i), r.result !== !1
        },
        confirm: function(t) {
            return confirm(t)
        },
        ajax: function(e) {
            return t.ajax(e)
        },
        href: function(t) {
            return t[0].href
        },
        isRemote: function(t) {
            return t.data("remote") !== e && t.data("remote") !== !1
        },
        handleRemote: function(i) {
            var r, o, s, a, l, u;
            if (n.fire(i, "ajax:before")) {
                if (a = i.data("with-credentials") || null, l = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, i.is("form")) {
                    r = i.attr("method"), o = i.attr("action"), s = i.serializeArray();
                    var c = i.data("ujs:submit-button");
                    c && (s.push(c), i.data("ujs:submit-button", null))
                } else i.is(n.inputChangeSelector) ? (r = i.data("method"), o = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", o = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : (r = i.data("method"), o = n.href(i), s = i.data("params") || null);
                return u = {
                    type: r || "GET",
                    data: s,
                    dataType: l,
                    beforeSend: function(t, r) {
                        return r.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), n.fire(i, "ajax:beforeSend", [t, r]) ? void i.trigger("ajax:send", t) : !1
                    },
                    success: function(t, e, n) {
                        i.trigger("ajax:success", [t, e, n])
                    },
                    complete: function(t, e) {
                        i.trigger("ajax:complete", [t, e])
                    },
                    error: function(t, e, n) {
                        i.trigger("ajax:error", [t, e, n])
                    },
                    crossDomain: n.isCrossDomain(o)
                }, a && (u.xhrFields = {
                    withCredentials: a
                }), o && (u.url = o), n.ajax(u)
            }
            return !1
        },
        isCrossDomain: function(t) {
            var e = document.createElement("a");
            e.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = t, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || e.protocol + "//" + e.host == n.protocol + "//" + n.host)
            } catch (i) {
                return !0
            }
        },
        handleMethod: function(i) {
            var r = n.href(i),
                o = i.data("method"),
                s = i.attr("target"),
                a = n.csrfToken(),
                l = n.csrfParam(),
                u = t('<form method="post" action="' + r + '"></form>'),
                c = '<input name="_method" value="' + o + '" type="hidden" />';
            l === e || a === e || n.isCrossDomain(r) || (c += '<input name="' + l + '" value="' + a + '" type="hidden" />'), s && u.attr("target", s), u.hide().append(c).appendTo("body"), u.submit()
        },
        formElements: function(e, n) {
            return e.is("form") ? t(e[0].elements).filter(n) : e.find(n)
        },
        disableFormElements: function(e) {
            n.formElements(e, n.disableSelector).each(function() {
                n.disableFormElement(t(this))
            })
        },
        disableFormElement: function(t) {
            var n, i;
            n = t.is("button") ? "html" : "val", i = t.data("disable-with"), t.data("ujs:enable-with", t[n]()), i !== e && t[n](i), t.prop("disabled", !0)
        },
        enableFormElements: function(e) {
            n.formElements(e, n.enableSelector).each(function() {
                n.enableFormElement(t(this))
            })
        },
        enableFormElement: function(t) {
            var e = t.is("button") ? "html" : "val";
            "undefined" != typeof t.data("ujs:enable-with") && t[e](t.data("ujs:enable-with")), t.prop("disabled", !1)
        },
        allowAction: function(t) {
            var e, i = t.data("confirm"),
                r = !1;
            if (!i) return !0;
            if (n.fire(t, "confirm")) {
                try {
                    r = n.confirm(i)
                } catch (o) {
                    (console.error || console.log).call(console, o.stack || o)
                }
                e = n.fire(t, "confirm:complete", [r])
            }
            return r && e
        },
        blankInputs: function(e, n, i) {
            var r, o, s = t(),
                a = n || "input,textarea",
                l = e.find(a);
            return l.each(function() {
                if (r = t(this), o = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : !!r.val(), o === i) {
                    if (r.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length) return !0;
                    s = s.add(r)
                }
            }), s.length ? s : !1
        },
        nonBlankInputs: function(t, e) {
            return n.blankInputs(t, e, !0)
        },
        stopEverything: function(e) {
            return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        },
        disableElement: function(t) {
            var i = t.data("disable-with");
            t.data("ujs:enable-with", t.html()), i !== e && t.html(i), t.bind("click.railsDisable", function(t) {
                return n.stopEverything(t)
            })
        },
        enableElement: function(t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
        }
    }, n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, i) {
        t.crossDomain || n.CSRFProtection(i)
    }), t(window).on("pageshow.rails", function() {
        t(t.rails.enableSelector).each(function() {
            var e = t(this);
            e.data("ujs:enable-with") && t.rails.enableFormElement(e)
        }), t(t.rails.linkDisableSelector).each(function() {
            var e = t(this);
            e.data("ujs:enable-with") && t.rails.enableElement(e)
        })
    }), i.delegate(n.linkDisableSelector, "ajax:complete", function() {
        n.enableElement(t(this))
    }), i.delegate(n.buttonDisableSelector, "ajax:complete", function() {
        n.enableFormElement(t(this))
    }), i.delegate(n.linkClickSelector, "click.rails", function(e) {
        var i = t(this),
            r = i.data("method"),
            o = i.data("params"),
            s = e.metaKey || e.ctrlKey;
        if (!n.allowAction(i)) return n.stopEverything(e);
        if (!s && i.is(n.linkDisableSelector) && n.disableElement(i), n.isRemote(i)) {
            if (s && (!r || "GET" === r) && !o) return !0;
            var a = n.handleRemote(i);
            return a === !1 ? n.enableElement(i) : a.fail(function() {
                n.enableElement(i)
            }), !1
        }
        return r ? (n.handleMethod(i), !1) : void 0
    }), i.delegate(n.buttonClickSelector, "click.rails", function(e) {
        var i = t(this);
        if (!n.allowAction(i) || !n.isRemote(i)) return n.stopEverything(e);
        i.is(n.buttonDisableSelector) && n.disableFormElement(i);
        var r = n.handleRemote(i);
        return r === !1 ? n.enableFormElement(i) : r.fail(function() {
            n.enableFormElement(i)
        }), !1
    }), i.delegate(n.inputChangeSelector, "change.rails", function(e) {
        var i = t(this);
        return n.allowAction(i) && n.isRemote(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
    }), i.delegate(n.formSubmitSelector, "submit.rails", function(i) {
        var r, o, s = t(this),
            a = n.isRemote(s);
        if (!n.allowAction(s)) return n.stopEverything(i);
        if (s.attr("novalidate") === e && (r = n.blankInputs(s, n.requiredInputSelector, !1), r && n.fire(s, "ajax:aborted:required", [r]))) return n.stopEverything(i);
        if (a) {
            if (o = n.nonBlankInputs(s, n.fileInputSelector)) {
                setTimeout(function() {
                    n.disableFormElements(s)
                }, 13);
                var l = n.fire(s, "ajax:aborted:file", [o]);
                return l || setTimeout(function() {
                    n.enableFormElements(s)
                }, 13), l
            }
            return n.handleRemote(s), !1
        }
        setTimeout(function() {
            n.disableFormElements(s)
        }, 13)
    }), i.delegate(n.formInputClickSelector, "click.rails", function(e) {
        var i = t(this);
        if (!n.allowAction(i)) return n.stopEverything(e);
        var r = i.attr("name"),
            o = r ? {
                name: r,
                value: i.val()
            } : null;
        i.closest("form").data("ujs:submit-button", o)
    }), i.delegate(n.formSubmitSelector, "ajax:send.rails", function(e) {
        this === e.target && n.disableFormElements(t(this))
    }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function(e) {
        this === e.target && n.enableFormElements(t(this))
    }), t(function() {
        n.refreshCSRFTokens()
    }))
}(jQuery),
function(t) {
    if ("function" == typeof define && define.amd) define(t);
    else if ("object" == typeof exports) module.exports = t();
    else {
        var e = window.Cookies,
            n = window.Cookies = t();
        n.noConflict = function() {
            return window.Cookies = e, n
        }
    }
}(function() {
    function t() {
        for (var t = 0, e = {}; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) e[i] = n[i]
        }
        return e
    }

    function e(n) {
        function i(e, r, o) {
            var s;
            if (arguments.length > 1) {
                if (o = t({
                        path: "/"
                    }, i.defaults, o), "number" == typeof o.expires) {
                    var a = new Date;
                    a.setMilliseconds(a.getMilliseconds() + 864e5 * o.expires), o.expires = a
                }
                try {
                    s = JSON.stringify(r), /^[\{\[]/.test(s) && (r = s)
                } catch (l) {}
                return r = encodeURIComponent(String(r)), r = r.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(String(e)), e = e.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), e = e.replace(/[\(\)]/g, escape), document.cookie = [e, "=", r, o.expires && "; expires=" + o.expires.toUTCString(), o.path && "; path=" + o.path, o.domain && "; domain=" + o.domain, o.secure ? "; secure" : ""].join("")
            }
            e || (s = {});
            for (var u = document.cookie ? document.cookie.split("; ") : [], c = /(%[0-9A-Z]{2})+/g, d = 0; d < u.length; d++) {
                var p = u[d].split("="),
                    f = p[0].replace(c, decodeURIComponent),
                    h = p.slice(1).join("=");
                '"' === h.charAt(0) && (h = h.slice(1, -1));
                try {
                    if (h = n && n(h, f) || h.replace(c, decodeURIComponent), this.json) try {
                        h = JSON.parse(h)
                    } catch (l) {}
                    if (e === f) {
                        s = h;
                        break
                    }
                    e || (s[f] = h)
                } catch (l) {}
            }
            return s
        }
        return i.get = i.set = i, i.getJSON = function() {
            return i.apply({
                json: !0
            }, [].slice.call(arguments))
        }, i.defaults = {}, i.remove = function(e, n) {
            i(e, "", t(n, {
                expires: -1
            }))
        }, i.withConverter = e, i
    }
    return e()
}),
function() {
    function t(t, e) {
        if (t !== e) {
            var n = null === t,
                i = t === $,
                r = t === t,
                o = null === e,
                s = e === $,
                a = e === e;
            if (t > e && !o || !r || n && !s && a || i && a) return 1;
            if (e > t && !n || !a || o && !i && r || s && r) return -1
        }
        return 0
    }

    function e(t, e, n) {
        for (var i = t.length, r = n ? i : -1; n ? r-- : ++r < i;)
            if (e(t[r], r, t)) return r;
        return -1
    }

    function n(t, e, n) {
        if (e !== e) return f(t, n);
        for (var i = n - 1, r = t.length; ++i < r;)
            if (t[i] === e) return i;
        return -1
    }

    function i(t) {
        return "function" == typeof t || !1
    }

    function r(t) {
        return null == t ? "" : t + ""
    }

    function o(t, e) {
        for (var n = -1, i = t.length; ++n < i && e.indexOf(t.charAt(n)) > -1;);
        return n
    }

    function s(t, e) {
        for (var n = t.length; n-- && e.indexOf(t.charAt(n)) > -1;);
        return n
    }

    function a(e, n) {
        return t(e.criteria, n.criteria) || e.index - n.index
    }

    function l(e, n, i) {
        for (var r = -1, o = e.criteria, s = n.criteria, a = o.length, l = i.length; ++r < a;) {
            var u = t(o[r], s[r]);
            if (u) {
                if (r >= l) return u;
                var c = i[r];
                return u * ("asc" === c || c === !0 ? 1 : -1)
            }
        }
        return e.index - n.index
    }

    function u(t) {
        return Rt[t]
    }

    function c(t) {
        return qt[t]
    }

    function d(t, e, n) {
        return e ? t = Bt[t] : n && (t = Wt[t]), "\\" + t
    }

    function p(t) {
        return "\\" + Wt[t]
    }

    function f(t, e, n) {
        for (var i = t.length, r = e + (n ? 0 : -1); n ? r-- : ++r < i;) {
            var o = t[r];
            if (o !== o) return r
        }
        return -1
    }

    function h(t) {
        return !!t && "object" == typeof t
    }

    function m(t) {
        return 160 >= t && t >= 9 && 13 >= t || 32 == t || 160 == t || 5760 == t || 6158 == t || t >= 8192 && (8202 >= t || 8232 == t || 8233 == t || 8239 == t || 8287 == t || 12288 == t || 65279 == t)
    }

    function g(t, e) {
        for (var n = -1, i = t.length, r = -1, o = []; ++n < i;) t[n] === e && (t[n] = R, o[++r] = n);
        return o
    }

    function v(t, e) {
        for (var n, i = -1, r = t.length, o = -1, s = []; ++i < r;) {
            var a = t[i],
                l = e ? e(a, i, t) : a;
            i && n === l || (n = l, s[++o] = a)
        }
        return s
    }

    function y(t) {
        for (var e = -1, n = t.length; ++e < n && m(t.charCodeAt(e)););
        return e
    }

    function w(t) {
        for (var e = t.length; e-- && m(t.charCodeAt(e)););
        return e
    }

    function b(t) {
        return zt[t]
    }

    function _(m) {
        function X(t) {
            if (h(t) && !ja(t) && !(t instanceof Rt)) {
                if (t instanceof tt) return t;
                if (es.call(t, "__chain__") && es.call(t, "__wrapped__")) return fi(t)
            }
            return new tt(t)
        }

        function Q() {}

        function tt(t, e, n) {
            this.__wrapped__ = t, this.__actions__ = n || [], this.__chain__ = !!e
        }

        function Rt(t) {
            this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Es, this.__views__ = []
        }

        function qt() {
            var t = new Rt(this.__wrapped__);
            return t.__actions__ = ne(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = ne(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = ne(this.__views__), t
        }

        function zt() {
            if (this.__filtered__) {
                var t = new Rt(this);
                t.__dir__ = -1, t.__filtered__ = !0
            } else t = this.clone(), t.__dir__ *= -1;
            return t
        }

        function Gt() {
            var t = this.__wrapped__.value(),
                e = this.__dir__,
                n = ja(t),
                i = 0 > e,
                r = n ? t.length : 0,
                o = Wn(0, r, this.__views__),
                s = o.start,
                a = o.end,
                l = a - s,
                u = i ? a : s - 1,
                c = this.__iteratees__,
                d = c.length,
                p = 0,
                f = ks(l, this.__takeCount__);
            if (!n || P > r || r == l && f == l) return nn(t, this.__actions__);
            var h = [];
            t: for (; l-- && f > p;) {
                u += e;
                for (var m = -1, g = t[u]; ++m < d;) {
                    var v = c[m],
                        y = v.iteratee,
                        w = v.type,
                        b = y(g);
                    if (w == H) g = b;
                    else if (!b) {
                        if (w == N) continue t;
                        break t
                    }
                }
                h[p++] = g
            }
            return h
        }

        function Bt() {
            this.__data__ = {}
        }

        function Wt(t) {
            return this.has(t) && delete this.__data__[t]
        }

        function Jt(t) {
            return "__proto__" == t ? $ : this.__data__[t]
        }

        function Xt(t) {
            return "__proto__" != t && es.call(this.__data__, t)
        }

        function Yt(t, e) {
            return "__proto__" != t && (this.__data__[t] = e), this
        }

        function Vt(t) {
            var e = t ? t.length : 0;
            for (this.data = {
                    hash: vs(null),
                    set: new ds
                }; e--;) this.push(t[e])
        }

        function Kt(t, e) {
            var n = t.data,
                i = "string" == typeof e || Mr(e) ? n.set.has(e) : n.hash[e];
            return i ? 0 : -1
        }

        function Qt(t) {
            var e = this.data;
            "string" == typeof t || Mr(t) ? e.set.add(t) : e.hash[t] = !0
        }

        function ee(t, e) {
            for (var n = -1, i = t.length, r = -1, o = e.length, s = Ro(i + o); ++n < i;) s[n] = t[n];
            for (; ++r < o;) s[n++] = e[r];
            return s
        }

        function ne(t, e) {
            var n = -1,
                i = t.length;
            for (e || (e = Ro(i)); ++n < i;) e[n] = t[n];
            return e
        }

        function ie(t, e) {
            for (var n = -1, i = t.length; ++n < i && e(t[n], n, t) !== !1;);
            return t
        }

        function re(t, e) {
            for (var n = t.length; n-- && e(t[n], n, t) !== !1;);
            return t
        }

        function oe(t, e) {
            for (var n = -1, i = t.length; ++n < i;)
                if (!e(t[n], n, t)) return !1;
            return !0
        }

        function se(t, e, n, i) {
            for (var r = -1, o = t.length, s = i, a = s; ++r < o;) {
                var l = t[r],
                    u = +e(l);
                n(u, s) && (s = u, a = l)
            }
            return a
        }

        function ae(t, e) {
            for (var n = -1, i = t.length, r = -1, o = []; ++n < i;) {
                var s = t[n];
                e(s, n, t) && (o[++r] = s)
            }
            return o
        }

        function le(t, e) {
            for (var n = -1, i = t.length, r = Ro(i); ++n < i;) r[n] = e(t[n], n, t);
            return r
        }

        function ue(t, e) {
            for (var n = -1, i = e.length, r = t.length; ++n < i;) t[r + n] = e[n];
            return t
        }

        function ce(t, e, n, i) {
            var r = -1,
                o = t.length;
            for (i && o && (n = t[++r]); ++r < o;) n = e(n, t[r], r, t);
            return n
        }

        function de(t, e, n, i) {
            var r = t.length;
            for (i && r && (n = t[--r]); r--;) n = e(n, t[r], r, t);
            return n
        }

        function pe(t, e) {
            for (var n = -1, i = t.length; ++n < i;)
                if (e(t[n], n, t)) return !0;
            return !1
        }

        function fe(t, e) {
            for (var n = t.length, i = 0; n--;) i += +e(t[n]) || 0;
            return i
        }

        function he(t, e) {
            return t === $ ? e : t
        }

        function me(t, e, n, i) {
            return t !== $ && es.call(i, n) ? t : e
        }

        function ge(t, e, n) {
            for (var i = -1, r = Ua(e), o = r.length; ++i < o;) {
                var s = r[i],
                    a = t[s],
                    l = n(a, e[s], s, t, e);
                (l === l ? l === a : a !== a) && (a !== $ || s in t) || (t[s] = l)
            }
            return t
        }

        function ve(t, e) {
            return null == e ? t : we(e, Ua(e), t)
        }

        function ye(t, e) {
            for (var n = -1, i = null == t, r = !i && Kn(t), o = r ? t.length : 0, s = e.length, a = Ro(s); ++n < s;) {
                var l = e[n];
                r ? a[n] = Qn(l, o) ? t[l] : $ : a[n] = i ? $ : t[l]
            }
            return a
        }

        function we(t, e, n) {
            n || (n = {});
            for (var i = -1, r = e.length; ++i < r;) {
                var o = e[i];
                n[o] = t[o]
            }
            return n
        }

        function be(t, e, n) {
            var i = typeof t;
            return "function" == i ? e === $ ? t : sn(t, e, n) : null == t ? Eo : "object" == i ? He(t) : e === $ ? Mo(t) : Ue(t, e)
        }

        function _e(t, e, n, i, r, o, s) {
            var a;
            if (n && (a = r ? n(t, i, r) : n(t)), a !== $) return a;
            if (!Mr(t)) return t;
            var l = ja(t);
            if (l) {
                if (a = Jn(t), !e) return ne(t, a)
            } else {
                var u = is.call(t),
                    c = u == J;
                if (u != V && u != q && (!c || r)) return Ut[u] ? Yn(t, u, e) : r ? t : {};
                if (a = Xn(c ? {} : t), !e) return ve(a, t)
            }
            o || (o = []), s || (s = []);
            for (var d = o.length; d--;)
                if (o[d] == t) return s[d];
            return o.push(t), s.push(a), (l ? ie : Fe)(t, function(i, r) {
                a[r] = _e(i, e, n, r, t, o, s)
            }), a
        }

        function $e(t, e, n) {
            if ("function" != typeof t) throw new Vo(U);
            return ps(function() {
                t.apply($, n)
            }, e)
        }

        function ke(t, e) {
            var i = t ? t.length : 0,
                r = [];
            if (!i) return r;
            var o = -1,
                s = zn(),
                a = s === n,
                l = a && e.length >= P ? mn(e) : null,
                u = e.length;
            l && (s = Kt, a = !1, e = l);
            t: for (; ++o < i;) {
                var c = t[o];
                if (a && c === c) {
                    for (var d = u; d--;)
                        if (e[d] === c) continue t;
                    r.push(c)
                } else s(e, c, 0) < 0 && r.push(c)
            }
            return r
        }

        function xe(t, e) {
            var n = !0;
            return Os(t, function(t, i, r) {
                return n = !!e(t, i, r)
            }), n
        }

        function Te(t, e, n, i) {
            var r = i,
                o = r;
            return Os(t, function(t, s, a) {
                var l = +e(t, s, a);
                (n(l, r) || l === i && l === o) && (r = l, o = t)
            }), o
        }

        function Se(t, e, n, i) {
            var r = t.length;
            for (n = null == n ? 0 : +n || 0, 0 > n && (n = -n > r ? 0 : r + n), i = i === $ || i > r ? r : +i || 0, 0 > i && (i += r), r = n > i ? 0 : i >>> 0, n >>>= 0; r > n;) t[n++] = e;
            return t
        }

        function Ce(t, e) {
            var n = [];
            return Os(t, function(t, i, r) {
                e(t, i, r) && n.push(t)
            }), n
        }

        function Ee(t, e, n, i) {
            var r;
            return n(t, function(t, n, o) {
                return e(t, n, o) ? (r = i ? n : t, !1) : void 0
            }), r
        }

        function je(t, e, n, i) {
            i || (i = []);
            for (var r = -1, o = t.length; ++r < o;) {
                var s = t[r];
                h(s) && Kn(s) && (n || ja(s) || Tr(s)) ? e ? je(s, e, n, i) : ue(i, s) : n || (i[i.length] = s)
            }
            return i
        }

        function Ae(t, e) {
            return Ns(t, e, to)
        }

        function Fe(t, e) {
            return Ns(t, e, Ua)
        }

        function De(t, e) {
            return Hs(t, e, Ua)
        }

        function Le(t, e) {
            for (var n = -1, i = e.length, r = -1, o = []; ++n < i;) {
                var s = e[n];
                Lr(t[s]) && (o[++r] = s)
            }
            return o
        }

        function Me(t, e, n) {
            if (null != t) {
                n !== $ && n in di(t) && (e = [n]);
                for (var i = 0, r = e.length; null != t && r > i;) t = t[e[i++]];
                return i && i == r ? t : $
            }
        }

        function Ie(t, e, n, i, r, o) {
            return t === e ? !0 : null == t || null == e || !Mr(t) && !h(e) ? t !== t && e !== e : Oe(t, e, Ie, n, i, r, o)
        }

        function Oe(t, e, n, i, r, o, s) {
            var a = ja(t),
                l = ja(e),
                u = z,
                c = z;
            a || (u = is.call(t), u == q ? u = V : u != V && (a = zr(t))), l || (c = is.call(e), c == q ? c = V : c != V && (l = zr(e)));
            var d = u == V,
                p = c == V,
                f = u == c;
            if (f && !a && !d) return Hn(t, e, u);
            if (!r) {
                var h = d && es.call(t, "__wrapped__"),
                    m = p && es.call(e, "__wrapped__");
                if (h || m) return n(h ? t.value() : t, m ? e.value() : e, i, r, o, s)
            }
            if (!f) return !1;
            o || (o = []), s || (s = []);
            for (var g = o.length; g--;)
                if (o[g] == t) return s[g] == e;
            o.push(t), s.push(e);
            var v = (a ? Nn : Un)(t, e, n, i, r, o, s);
            return o.pop(), s.pop(), v
        }

        function Pe(t, e, n) {
            var i = e.length,
                r = i,
                o = !n;
            if (null == t) return !r;
            for (t = di(t); i--;) {
                var s = e[i];
                if (o && s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return !1
            }
            for (; ++i < r;) {
                s = e[i];
                var a = s[0],
                    l = t[a],
                    u = s[1];
                if (o && s[2]) {
                    if (l === $ && !(a in t)) return !1
                } else {
                    var c = n ? n(l, u, a) : $;
                    if (!(c === $ ? Ie(u, l, n, !0) : c)) return !1
                }
            }
            return !0
        }

        function Ne(t, e) {
            var n = -1,
                i = Kn(t) ? Ro(t.length) : [];
            return Os(t, function(t, r, o) {
                i[++n] = e(t, r, o)
            }), i
        }

        function He(t) {
            var e = Gn(t);
            if (1 == e.length && e[0][2]) {
                var n = e[0][0],
                    i = e[0][1];
                return function(t) {
                    return null == t ? !1 : t[n] === i && (i !== $ || n in di(t))
                }
            }
            return function(t) {
                return Pe(t, e)
            }
        }

        function Ue(t, e) {
            var n = ja(t),
                i = ti(t) && ii(e),
                r = t + "";
            return t = pi(t),
                function(o) {
                    if (null == o) return !1;
                    var s = r;
                    if (o = di(o), (n || !i) && !(s in o)) {
                        if (o = 1 == t.length ? o : Me(o, Xe(t, 0, -1)), null == o) return !1;
                        s = Si(t), o = di(o)
                    }
                    return o[s] === e ? e !== $ || s in o : Ie(e, o[s], $, !0)
                }
        }

        function Re(t, e, n, i, r) {
            if (!Mr(t)) return t;
            var o = Kn(e) && (ja(e) || zr(e)),
                s = o ? $ : Ua(e);
            return ie(s || e, function(a, l) {
                if (s && (l = a, a = e[l]), h(a)) i || (i = []), r || (r = []), qe(t, e, l, Re, n, i, r);
                else {
                    var u = t[l],
                        c = n ? n(u, a, l, t, e) : $,
                        d = c === $;
                    d && (c = a), c === $ && (!o || l in t) || !d && (c === c ? c === u : u !== u) || (t[l] = c)
                }
            }), t
        }

        function qe(t, e, n, i, r, o, s) {
            for (var a = o.length, l = e[n]; a--;)
                if (o[a] == l) return void(t[n] = s[a]);
            var u = t[n],
                c = r ? r(u, l, n, t, e) : $,
                d = c === $;
            d && (c = l, Kn(l) && (ja(l) || zr(l)) ? c = ja(u) ? u : Kn(u) ? ne(u) : [] : Ur(l) || Tr(l) ? c = Tr(u) ? Xr(u) : Ur(u) ? u : {} : d = !1), o.push(l), s.push(c), d ? t[n] = i(c, l, r, o, s) : (c === c ? c !== u : u === u) && (t[n] = c)
        }

        function ze(t) {
            return function(e) {
                return null == e ? $ : e[t]
            }
        }

        function Ge(t) {
            var e = t + "";
            return t = pi(t),
                function(n) {
                    return Me(n, t, e)
                }
        }

        function Be(t, e) {
            for (var n = t ? e.length : 0; n--;) {
                var i = e[n];
                if (i != r && Qn(i)) {
                    var r = i;
                    fs.call(t, i, 1)
                }
            }
            return t
        }

        function We(t, e) {
            return t + ys(Ss() * (e - t + 1))
        }

        function Je(t, e, n, i, r) {
            return r(t, function(t, r, o) {
                n = i ? (i = !1, t) : e(n, t, r, o)
            }), n
        }

        function Xe(t, e, n) {
            var i = -1,
                r = t.length;
            e = null == e ? 0 : +e || 0, 0 > e && (e = -e > r ? 0 : r + e), n = n === $ || n > r ? r : +n || 0, 0 > n && (n += r), r = e > n ? 0 : n - e >>> 0, e >>>= 0;
            for (var o = Ro(r); ++i < r;) o[i] = t[i + e];
            return o
        }

        function Ye(t, e) {
            var n;
            return Os(t, function(t, i, r) {
                return n = e(t, i, r), !n
            }), !!n
        }

        function Ve(t, e) {
            var n = t.length;
            for (t.sort(e); n--;) t[n] = t[n].value;
            return t
        }

        function Ke(t, e, n) {
            var i = Rn(),
                r = -1;
            e = le(e, function(t) {
                return i(t)
            });
            var o = Ne(t, function(t) {
                var n = le(e, function(e) {
                    return e(t)
                });
                return {
                    criteria: n,
                    index: ++r,
                    value: t
                }
            });
            return Ve(o, function(t, e) {
                return l(t, e, n)
            })
        }

        function Qe(t, e) {
            var n = 0;
            return Os(t, function(t, i, r) {
                n += +e(t, i, r) || 0
            }), n
        }

        function Ze(t, e) {
            var i = -1,
                r = zn(),
                o = t.length,
                s = r === n,
                a = s && o >= P,
                l = a ? mn() : null,
                u = [];
            l ? (r = Kt, s = !1) : (a = !1, l = e ? [] : u);
            t: for (; ++i < o;) {
                var c = t[i],
                    d = e ? e(c, i, t) : c;
                if (s && c === c) {
                    for (var p = l.length; p--;)
                        if (l[p] === d) continue t;
                    e && l.push(d), u.push(c)
                } else r(l, d, 0) < 0 && ((e || a) && l.push(d), u.push(c))
            }
            return u
        }

        function tn(t, e) {
            for (var n = -1, i = e.length, r = Ro(i); ++n < i;) r[n] = t[e[n]];
            return r
        }

        function en(t, e, n, i) {
            for (var r = t.length, o = i ? r : -1;
                (i ? o-- : ++o < r) && e(t[o], o, t););
            return n ? Xe(t, i ? 0 : o, i ? o + 1 : r) : Xe(t, i ? o + 1 : 0, i ? r : o)
        }

        function nn(t, e) {
            var n = t;
            n instanceof Rt && (n = n.value());
            for (var i = -1, r = e.length; ++i < r;) {
                var o = e[i];
                n = o.func.apply(o.thisArg, ue([n], o.args))
            }
            return n
        }

        function rn(t, e, n) {
            var i = 0,
                r = t ? t.length : i;
            if ("number" == typeof e && e === e && Fs >= r) {
                for (; r > i;) {
                    var o = i + r >>> 1,
                        s = t[o];
                    (n ? e >= s : e > s) && null !== s ? i = o + 1 : r = o
                }
                return r
            }
            return on(t, e, Eo, n)
        }

        function on(t, e, n, i) {
            e = n(e);
            for (var r = 0, o = t ? t.length : 0, s = e !== e, a = null === e, l = e === $; o > r;) {
                var u = ys((r + o) / 2),
                    c = n(t[u]),
                    d = c !== $,
                    p = c === c;
                if (s) var f = p || i;
                else f = a ? p && d && (i || null != c) : l ? p && (i || d) : null == c ? !1 : i ? e >= c : e > c;
                f ? r = u + 1 : o = u
            }
            return ks(o, As)
        }

        function sn(t, e, n) {
            if ("function" != typeof t) return Eo;
            if (e === $) return t;
            switch (n) {
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    };
                case 3:
                    return function(n, i, r) {
                        return t.call(e, n, i, r)
                    };
                case 4:
                    return function(n, i, r, o) {
                        return t.call(e, n, i, r, o)
                    };
                case 5:
                    return function(n, i, r, o, s) {
                        return t.call(e, n, i, r, o, s)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }

        function an(t) {
            var e = new ss(t.byteLength),
                n = new hs(e);
            return n.set(new hs(t)), e
        }

        function ln(t, e, n) {
            for (var i = n.length, r = -1, o = $s(t.length - i, 0), s = -1, a = e.length, l = Ro(a + o); ++s < a;) l[s] = e[s];
            for (; ++r < i;) l[n[r]] = t[r];
            for (; o--;) l[s++] = t[r++];
            return l
        }

        function un(t, e, n) {
            for (var i = -1, r = n.length, o = -1, s = $s(t.length - r, 0), a = -1, l = e.length, u = Ro(s + l); ++o < s;) u[o] = t[o];
            for (var c = o; ++a < l;) u[c + a] = e[a];
            for (; ++i < r;) u[c + n[i]] = t[o++];
            return u
        }

        function cn(t, e) {
            return function(n, i, r) {
                var o = e ? e() : {};
                if (i = Rn(i, r, 3), ja(n))
                    for (var s = -1, a = n.length; ++s < a;) {
                        var l = n[s];
                        t(o, l, i(l, s, n), n)
                    } else Os(n, function(e, n, r) {
                        t(o, e, i(e, n, r), r)
                    });
                return o
            }
        }

        function dn(t) {
            return vr(function(e, n) {
                var i = -1,
                    r = null == e ? 0 : n.length,
                    o = r > 2 ? n[r - 2] : $,
                    s = r > 2 ? n[2] : $,
                    a = r > 1 ? n[r - 1] : $;
                for ("function" == typeof o ? (o = sn(o, a, 5), r -= 2) : (o = "function" == typeof a ? a : $, r -= o ? 1 : 0), s && Zn(n[0], n[1], s) && (o = 3 > r ? $ : o, r = 1); ++i < r;) {
                    var l = n[i];
                    l && t(e, l, o)
                }
                return e
            })
        }

        function pn(t, e) {
            return function(n, i) {
                var r = n ? qs(n) : 0;
                if (!ni(r)) return t(n, i);
                for (var o = e ? r : -1, s = di(n);
                    (e ? o-- : ++o < r) && i(s[o], o, s) !== !1;);
                return n
            }
        }

        function fn(t) {
            return function(e, n, i) {
                for (var r = di(e), o = i(e), s = o.length, a = t ? s : -1; t ? a-- : ++a < s;) {
                    var l = o[a];
                    if (n(r[l], l, r) === !1) break
                }
                return e
            }
        }

        function hn(t, e) {
            function n() {
                var r = this && this !== Zt && this instanceof n ? i : t;
                return r.apply(e, arguments)
            }
            var i = vn(t);
            return n
        }

        function mn(t) {
            return vs && ds ? new Vt(t) : null
        }

        function gn(t) {
            return function(e) {
                for (var n = -1, i = To(co(e)), r = i.length, o = ""; ++n < r;) o = t(o, i[n], n);
                return o
            }
        }

        function vn(t) {
            return function() {
                var e = arguments;
                switch (e.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e[0]);
                    case 2:
                        return new t(e[0], e[1]);
                    case 3:
                        return new t(e[0], e[1], e[2]);
                    case 4:
                        return new t(e[0], e[1], e[2], e[3]);
                    case 5:
                        return new t(e[0], e[1], e[2], e[3], e[4]);
                    case 6:
                        return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                    case 7:
                        return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
                }
                var n = Is(t.prototype),
                    i = t.apply(n, e);
                return Mr(i) ? i : n
            }
        }

        function yn(t) {
            function e(n, i, r) {
                r && Zn(n, i, r) && (i = $);
                var o = Pn(n, t, $, $, $, $, $, i);
                return o.placeholder = e.placeholder, o
            }
            return e
        }

        function wn(t, e) {
            return vr(function(n) {
                var i = n[0];
                return null == i ? i : (n.push(e), t.apply($, n))
            })
        }

        function bn(t, e) {
            return function(n, i, r) {
                if (r && Zn(n, i, r) && (i = $), i = Rn(i, r, 3), 1 == i.length) {
                    n = ja(n) ? n : ci(n);
                    var o = se(n, i, t, e);
                    if (!n.length || o !== e) return o
                }
                return Te(n, i, t, e)
            }
        }

        function _n(t, n) {
            return function(i, r, o) {
                if (r = Rn(r, o, 3), ja(i)) {
                    var s = e(i, r, n);
                    return s > -1 ? i[s] : $
                }
                return Ee(i, r, t)
            }
        }

        function $n(t) {
            return function(n, i, r) {
                return n && n.length ? (i = Rn(i, r, 3), e(n, i, t)) : -1
            }
        }

        function kn(t) {
            return function(e, n, i) {
                return n = Rn(n, i, 3), Ee(e, n, t, !0)
            }
        }

        function xn(t) {
            return function() {
                for (var e, n = arguments.length, i = t ? n : -1, r = 0, o = Ro(n); t ? i-- : ++i < n;) {
                    var s = o[r++] = arguments[i];
                    if ("function" != typeof s) throw new Vo(U);
                    !e && tt.prototype.thru && "wrapper" == qn(s) && (e = new tt([], !0))
                }
                for (i = e ? -1 : n; ++i < n;) {
                    s = o[i];
                    var a = qn(s),
                        l = "wrapper" == a ? Rs(s) : $;
                    e = l && ei(l[0]) && l[1] == (F | C | j | D) && !l[4].length && 1 == l[9] ? e[qn(l[0])].apply(e, l[3]) : 1 == s.length && ei(s) ? e[a]() : e.thru(s)
                }
                return function() {
                    var t = arguments,
                        i = t[0];
                    if (e && 1 == t.length && ja(i) && i.length >= P) return e.plant(i).value();
                    for (var r = 0, s = n ? o[r].apply(this, t) : i; ++r < n;) s = o[r].call(this, s);
                    return s
                }
            }
        }

        function Tn(t, e) {
            return function(n, i, r) {
                return "function" == typeof i && r === $ && ja(n) ? t(n, i) : e(n, sn(i, r, 3))
            }
        }

        function Sn(t) {
            return function(e, n, i) {
                return ("function" != typeof n || i !== $) && (n = sn(n, i, 3)), t(e, n, to)
            }
        }

        function Cn(t) {
            return function(e, n, i) {
                return ("function" != typeof n || i !== $) && (n = sn(n, i, 3)), t(e, n)
            }
        }

        function En(t) {
            return function(e, n, i) {
                var r = {};
                return n = Rn(n, i, 3), Fe(e, function(e, i, o) {
                    var s = n(e, i, o);
                    i = t ? s : i, e = t ? e : s, r[i] = e
                }), r
            }
        }

        function jn(t) {
            return function(e, n, i) {
                return e = r(e), (t ? e : "") + Ln(e, n, i) + (t ? "" : e)
            }
        }

        function An(t) {
            var e = vr(function(n, i) {
                var r = g(i, e.placeholder);
                return Pn(n, t, $, i, r)
            });
            return e
        }

        function Fn(t, e) {
            return function(n, i, r, o) {
                var s = arguments.length < 3;
                return "function" == typeof i && o === $ && ja(n) ? t(n, i, r, s) : Je(n, Rn(i, o, 4), r, s, e)
            }
        }

        function Dn(t, e, n, i, r, o, s, a, l, u) {
            function c() {
                for (var w = arguments.length, b = w, _ = Ro(w); b--;) _[b] = arguments[b];
                if (i && (_ = ln(_, i, r)), o && (_ = un(_, o, s)), h || v) {
                    var k = c.placeholder,
                        S = g(_, k);
                    if (w -= S.length, u > w) {
                        var C = a ? ne(a) : $,
                            E = $s(u - w, 0),
                            F = h ? S : $,
                            D = h ? $ : S,
                            L = h ? _ : $,
                            M = h ? $ : _;
                        e |= h ? j : A, e &= ~(h ? A : j), m || (e &= ~(x | T));
                        var I = [t, e, n, L, F, M, D, C, l, E],
                            O = Dn.apply($, I);
                        return ei(t) && zs(O, I), O.placeholder = k, O
                    }
                }
                var P = p ? n : this,
                    N = f ? P[t] : t;
                return a && (_ = li(_, a)), d && l < _.length && (_.length = l), this && this !== Zt && this instanceof c && (N = y || vn(t)), N.apply(P, _)
            }
            var d = e & F,
                p = e & x,
                f = e & T,
                h = e & C,
                m = e & S,
                v = e & E,
                y = f ? $ : vn(t);
            return c
        }

        function Ln(t, e, n) {
            var i = t.length;
            if (e = +e, i >= e || !bs(e)) return "";
            var r = e - i;
            return n = null == n ? " " : n + "", vo(n, gs(r / n.length)).slice(0, r)
        }

        function Mn(t, e, n, i) {
            function r() {
                for (var e = -1, a = arguments.length, l = -1, u = i.length, c = Ro(u + a); ++l < u;) c[l] = i[l];
                for (; a--;) c[l++] = arguments[++e];
                var d = this && this !== Zt && this instanceof r ? s : t;
                return d.apply(o ? n : this, c)
            }
            var o = e & x,
                s = vn(t);
            return r
        }

        function In(t) {
            var e = Bo[t];
            return function(t, n) {
                return n = n === $ ? 0 : +n || 0, n ? (n = us(10, n), e(t * n) / n) : e(t)
            }
        }

        function On(t) {
            return function(e, n, i, r) {
                var o = Rn(i);
                return null == i && o === be ? rn(e, n, t) : on(e, n, o(i, r, 1), t)
            }
        }

        function Pn(t, e, n, i, r, o, s, a) {
            var l = e & T;
            if (!l && "function" != typeof t) throw new Vo(U);
            var u = i ? i.length : 0;
            if (u || (e &= ~(j | A), i = r = $), u -= r ? r.length : 0, e & A) {
                var c = i,
                    d = r;
                i = r = $
            }
            var p = l ? $ : Rs(t),
                f = [t, e, n, i, r, c, d, o, s, a];
            if (p && (ri(f, p), e = f[1], a = f[9]), f[9] = null == a ? l ? 0 : t.length : $s(a - u, 0) || 0, e == x) var h = hn(f[0], f[2]);
            else h = e != j && e != (x | j) || f[4].length ? Dn.apply($, f) : Mn.apply($, f);
            var m = p ? Us : zs;
            return m(h, f)
        }

        function Nn(t, e, n, i, r, o, s) {
            var a = -1,
                l = t.length,
                u = e.length;
            if (l != u && !(r && u > l)) return !1;
            for (; ++a < l;) {
                var c = t[a],
                    d = e[a],
                    p = i ? i(r ? d : c, r ? c : d, a) : $;
                if (p !== $) {
                    if (p) continue;
                    return !1
                }
                if (r) {
                    if (!pe(e, function(t) {
                            return c === t || n(c, t, i, r, o, s)
                        })) return !1
                } else if (c !== d && !n(c, d, i, r, o, s)) return !1
            }
            return !0
        }

        function Hn(t, e, n) {
            switch (n) {
                case G:
                case B:
                    return +t == +e;
                case W:
                    return t.name == e.name && t.message == e.message;
                case Y:
                    return t != +t ? e != +e : t == +e;
                case K:
                case Z:
                    return t == e + ""
            }
            return !1
        }

        function Un(t, e, n, i, r, o, s) {
            var a = Ua(t),
                l = a.length,
                u = Ua(e),
                c = u.length;
            if (l != c && !r) return !1;
            for (var d = l; d--;) {
                var p = a[d];
                if (!(r ? p in e : es.call(e, p))) return !1
            }
            for (var f = r; ++d < l;) {
                p = a[d];
                var h = t[p],
                    m = e[p],
                    g = i ? i(r ? m : h, r ? h : m, p) : $;
                if (!(g === $ ? n(h, m, i, r, o, s) : g)) return !1;
                f || (f = "constructor" == p)
            }
            if (!f) {
                var v = t.constructor,
                    y = e.constructor;
                if (v != y && "constructor" in t && "constructor" in e && !("function" == typeof v && v instanceof v && "function" == typeof y && y instanceof y)) return !1
            }
            return !0
        }

        function Rn(t, e, n) {
            var i = X.callback || So;
            return i = i === So ? be : i, n ? i(t, e, n) : i
        }

        function qn(t) {
            for (var e = t.name + "", n = Ms[e], i = n ? n.length : 0; i--;) {
                var r = n[i],
                    o = r.func;
                if (null == o || o == t) return r.name
            }
            return e
        }

        function zn(t, e, i) {
            var r = X.indexOf || xi;
            return r = r === xi ? n : r, t ? r(t, e, i) : r
        }

        function Gn(t) {
            for (var e = eo(t), n = e.length; n--;) e[n][2] = ii(e[n][1]);
            return e
        }

        function Bn(t, e) {
            var n = null == t ? $ : t[e];
            return Pr(n) ? n : $
        }

        function Wn(t, e, n) {
            for (var i = -1, r = n.length; ++i < r;) {
                var o = n[i],
                    s = o.size;
                switch (o.type) {
                    case "drop":
                        t += s;
                        break;
                    case "dropRight":
                        e -= s;
                        break;
                    case "take":
                        e = ks(e, t + s);
                        break;
                    case "takeRight":
                        t = $s(t, e - s)
                }
            }
            return {
                start: t,
                end: e
            }
        }

        function Jn(t) {
            var e = t.length,
                n = new t.constructor(e);
            return e && "string" == typeof t[0] && es.call(t, "index") && (n.index = t.index, n.input = t.input), n
        }

        function Xn(t) {
            var e = t.constructor;
            return "function" == typeof e && e instanceof e || (e = Jo), new e
        }

        function Yn(t, e, n) {
            var i = t.constructor;
            switch (e) {
                case et:
                    return an(t);
                case G:
                case B:
                    return new i(+t);
                case nt:
                case it:
                case rt:
                case ot:
                case st:
                case at:
                case lt:
                case ut:
                case ct:
                    var r = t.buffer;
                    return new i(n ? an(r) : r, t.byteOffset, t.length);
                case Y:
                case Z:
                    return new i(t);
                case K:
                    var o = new i(t.source, jt.exec(t));
                    o.lastIndex = t.lastIndex
            }
            return o
        }

        function Vn(t, e, n) {
            null == t || ti(e, t) || (e = pi(e), t = 1 == e.length ? t : Me(t, Xe(e, 0, -1)), e = Si(e));
            var i = null == t ? t : t[e];
            return null == i ? $ : i.apply(t, n)
        }

        function Kn(t) {
            return null != t && ni(qs(t))
        }

        function Qn(t, e) {
            return t = "number" == typeof t || Dt.test(t) ? +t : -1, e = null == e ? Ds : e, t > -1 && t % 1 == 0 && e > t
        }

        function Zn(t, e, n) {
            if (!Mr(n)) return !1;
            var i = typeof e;
            if ("number" == i ? Kn(n) && Qn(e, n.length) : "string" == i && e in n) {
                var r = n[e];
                return t === t ? t === r : r !== r
            }
            return !1
        }

        function ti(t, e) {
            var n = typeof t;
            if ("string" == n && $t.test(t) || "number" == n) return !0;
            if (ja(t)) return !1;
            var i = !_t.test(t);
            return i || null != e && t in di(e)
        }

        function ei(t) {
            var e = qn(t),
                n = X[e];
            if ("function" != typeof n || !(e in Rt.prototype)) return !1;
            if (t === n) return !0;
            var i = Rs(n);
            return !!i && t === i[0]
        }

        function ni(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && Ds >= t
        }

        function ii(t) {
            return t === t && !Mr(t)
        }

        function ri(t, e) {
            var n = t[1],
                i = e[1],
                r = n | i,
                o = F > r,
                s = i == F && n == C || i == F && n == D && t[7].length <= e[8] || i == (F | D) && n == C;
            if (!o && !s) return t;
            i & x && (t[2] = e[2], r |= n & x ? 0 : S);
            var a = e[3];
            if (a) {
                var l = t[3];
                t[3] = l ? ln(l, a, e[4]) : ne(a), t[4] = l ? g(t[3], R) : ne(e[4])
            }
            return a = e[5], a && (l = t[5], t[5] = l ? un(l, a, e[6]) : ne(a), t[6] = l ? g(t[5], R) : ne(e[6])), a = e[7], a && (t[7] = ne(a)), i & F && (t[8] = null == t[8] ? e[8] : ks(t[8], e[8])), null == t[9] && (t[9] = e[9]), t[0] = e[0], t[1] = r, t
        }

        function oi(t, e) {
            return t === $ ? e : Aa(t, e, oi)
        }

        function si(t, e) {
            t = di(t);
            for (var n = -1, i = e.length, r = {}; ++n < i;) {
                var o = e[n];
                o in t && (r[o] = t[o])
            }
            return r
        }

        function ai(t, e) {
            var n = {};
            return Ae(t, function(t, i, r) {
                e(t, i, r) && (n[i] = t)
            }), n
        }

        function li(t, e) {
            for (var n = t.length, i = ks(e.length, n), r = ne(t); i--;) {
                var o = e[i];
                t[i] = Qn(o, n) ? r[o] : $
            }
            return t
        }

        function ui(t) {
            for (var e = to(t), n = e.length, i = n && t.length, r = !!i && ni(i) && (ja(t) || Tr(t)), o = -1, s = []; ++o < n;) {
                var a = e[o];
                (r && Qn(a, i) || es.call(t, a)) && s.push(a)
            }
            return s
        }

        function ci(t) {
            return null == t ? [] : Kn(t) ? Mr(t) ? t : Jo(t) : oo(t)
        }

        function di(t) {
            return Mr(t) ? t : Jo(t)
        }

        function pi(t) {
            if (ja(t)) return t;
            var e = [];
            return r(t).replace(kt, function(t, n, i, r) {
                e.push(i ? r.replace(Ct, "$1") : n || t)
            }), e
        }

        function fi(t) {
            return t instanceof Rt ? t.clone() : new tt(t.__wrapped__, t.__chain__, ne(t.__actions__))
        }

        function hi(t, e, n) {
            e = (n ? Zn(t, e, n) : null == e) ? 1 : $s(ys(e) || 1, 1);
            for (var i = 0, r = t ? t.length : 0, o = -1, s = Ro(gs(r / e)); r > i;) s[++o] = Xe(t, i, i += e);
            return s
        }

        function mi(t) {
            for (var e = -1, n = t ? t.length : 0, i = -1, r = []; ++e < n;) {
                var o = t[e];
                o && (r[++i] = o)
            }
            return r
        }

        function gi(t, e, n) {
            var i = t ? t.length : 0;
            return i ? ((n ? Zn(t, e, n) : null == e) && (e = 1), Xe(t, 0 > e ? 0 : e)) : []
        }

        function vi(t, e, n) {
            var i = t ? t.length : 0;
            return i ? ((n ? Zn(t, e, n) : null == e) && (e = 1), e = i - (+e || 0), Xe(t, 0, 0 > e ? 0 : e)) : []
        }

        function yi(t, e, n) {
            return t && t.length ? en(t, Rn(e, n, 3), !0, !0) : []
        }

        function wi(t, e, n) {
            return t && t.length ? en(t, Rn(e, n, 3), !0) : []
        }

        function bi(t, e, n, i) {
            var r = t ? t.length : 0;
            return r ? (n && "number" != typeof n && Zn(t, e, n) && (n = 0, i = r), Se(t, e, n, i)) : []
        }

        function _i(t) {
            return t ? t[0] : $
        }

        function $i(t, e, n) {
            var i = t ? t.length : 0;
            return n && Zn(t, e, n) && (e = !1), i ? je(t, e) : []
        }

        function ki(t) {
            var e = t ? t.length : 0;
            return e ? je(t, !0) : []
        }

        function xi(t, e, i) {
            var r = t ? t.length : 0;
            if (!r) return -1;
            if ("number" == typeof i) i = 0 > i ? $s(r + i, 0) : i;
            else if (i) {
                var o = rn(t, e);
                return r > o && (e === e ? e === t[o] : t[o] !== t[o]) ? o : -1
            }
            return n(t, e, i || 0)
        }

        function Ti(t) {
            return vi(t, 1)
        }

        function Si(t) {
            var e = t ? t.length : 0;
            return e ? t[e - 1] : $
        }

        function Ci(t, e, n) {
            var i = t ? t.length : 0;
            if (!i) return -1;
            var r = i;
            if ("number" == typeof n) r = (0 > n ? $s(i + n, 0) : ks(n || 0, i - 1)) + 1;
            else if (n) {
                r = rn(t, e, !0) - 1;
                var o = t[r];
                return (e === e ? e === o : o !== o) ? r : -1
            }
            if (e !== e) return f(t, r, !0);
            for (; r--;)
                if (t[r] === e) return r;
            return -1
        }

        function Ei() {
            var t = arguments,
                e = t[0];
            if (!e || !e.length) return e;
            for (var n = 0, i = zn(), r = t.length; ++n < r;)
                for (var o = 0, s = t[n];
                    (o = i(e, s, o)) > -1;) fs.call(e, o, 1);
            return e
        }

        function ji(t, e, n) {
            var i = [];
            if (!t || !t.length) return i;
            var r = -1,
                o = [],
                s = t.length;
            for (e = Rn(e, n, 3); ++r < s;) {
                var a = t[r];
                e(a, r, t) && (i.push(a), o.push(r))
            }
            return Be(t, o), i
        }

        function Ai(t) {
            return gi(t, 1)
        }

        function Fi(t, e, n) {
            var i = t ? t.length : 0;
            return i ? (n && "number" != typeof n && Zn(t, e, n) && (e = 0, n = i), Xe(t, e, n)) : []
        }

        function Di(t, e, n) {
            var i = t ? t.length : 0;
            return i ? ((n ? Zn(t, e, n) : null == e) && (e = 1), Xe(t, 0, 0 > e ? 0 : e)) : []
        }

        function Li(t, e, n) {
            var i = t ? t.length : 0;
            return i ? ((n ? Zn(t, e, n) : null == e) && (e = 1), e = i - (+e || 0), Xe(t, 0 > e ? 0 : e)) : []
        }

        function Mi(t, e, n) {
            return t && t.length ? en(t, Rn(e, n, 3), !1, !0) : []
        }

        function Ii(t, e, n) {
            return t && t.length ? en(t, Rn(e, n, 3)) : []
        }

        function Oi(t, e, i, r) {
            var o = t ? t.length : 0;
            if (!o) return [];
            null != e && "boolean" != typeof e && (r = i, i = Zn(t, e, r) ? $ : e, e = !1);
            var s = Rn();
            return (null != i || s !== be) && (i = s(i, r, 3)), e && zn() === n ? v(t, i) : Ze(t, i)
        }

        function Pi(t) {
            if (!t || !t.length) return [];
            var e = -1,
                n = 0;
            t = ae(t, function(t) {
                return Kn(t) ? (n = $s(t.length, n), !0) : void 0
            });
            for (var i = Ro(n); ++e < n;) i[e] = le(t, ze(e));
            return i
        }

        function Ni(t, e, n) {
            var i = t ? t.length : 0;
            if (!i) return [];
            var r = Pi(t);
            return null == e ? r : (e = sn(e, n, 4), le(r, function(t) {
                return ce(t, e, $, !0)
            }))
        }

        function Hi() {
            for (var t = -1, e = arguments.length; ++t < e;) {
                var n = arguments[t];
                if (Kn(n)) var i = i ? ue(ke(i, n), ke(n, i)) : n
            }
            return i ? Ze(i) : []
        }

        function Ui(t, e) {
            var n = -1,
                i = t ? t.length : 0,
                r = {};
            for (!i || e || ja(t[0]) || (e = []); ++n < i;) {
                var o = t[n];
                e ? r[o] = e[n] : o && (r[o[0]] = o[1])
            }
            return r
        }

        function Ri(t) {
            var e = X(t);
            return e.__chain__ = !0, e
        }

        function qi(t, e, n) {
            return e.call(n, t), t
        }

        function zi(t, e, n) {
            return e.call(n, t)
        }

        function Gi() {
            return Ri(this)
        }

        function Bi() {
            return new tt(this.value(), this.__chain__)
        }

        function Wi(t) {
            for (var e, n = this; n instanceof Q;) {
                var i = fi(n);
                e ? r.__wrapped__ = i : e = i;
                var r = i;
                n = n.__wrapped__
            }
            return r.__wrapped__ = t, e
        }

        function Ji() {
            var t = this.__wrapped__,
                e = function(t) {
                    return t.reverse()
                };
            if (t instanceof Rt) {
                var n = t;
                return this.__actions__.length && (n = new Rt(this)), n = n.reverse(), n.__actions__.push({
                    func: zi,
                    args: [e],
                    thisArg: $
                }), new tt(n, this.__chain__)
            }
            return this.thru(e)
        }

        function Xi() {
            return this.value() + ""
        }

        function Yi() {
            return nn(this.__wrapped__, this.__actions__)
        }

        function Vi(t, e, n) {
            var i = ja(t) ? oe : xe;
            return n && Zn(t, e, n) && (e = $), ("function" != typeof e || n !== $) && (e = Rn(e, n, 3)), i(t, e)
        }

        function Ki(t, e, n) {
            var i = ja(t) ? ae : Ce;
            return e = Rn(e, n, 3), i(t, e)
        }

        function Qi(t, e) {
            return ra(t, He(e))
        }

        function Zi(t, e, n, i) {
            var r = t ? qs(t) : 0;
            return ni(r) || (t = oo(t), r = t.length), n = "number" != typeof n || i && Zn(e, n, i) ? 0 : 0 > n ? $s(r + n, 0) : n || 0, "string" == typeof t || !ja(t) && qr(t) ? r >= n && t.indexOf(e, n) > -1 : !!r && zn(t, e, n) > -1
        }

        function tr(t, e, n) {
            var i = ja(t) ? le : Ne;
            return e = Rn(e, n, 3), i(t, e)
        }

        function er(t, e) {
            return tr(t, Mo(e))
        }

        function nr(t, e, n) {
            var i = ja(t) ? ae : Ce;
            return e = Rn(e, n, 3), i(t, function(t, n, i) {
                return !e(t, n, i)
            })
        }

        function ir(t, e, n) {
            if (n ? Zn(t, e, n) : null == e) {
                t = ci(t);
                var i = t.length;
                return i > 0 ? t[We(0, i - 1)] : $
            }
            var r = -1,
                o = Jr(t),
                i = o.length,
                s = i - 1;
            for (e = ks(0 > e ? 0 : +e || 0, i); ++r < e;) {
                var a = We(r, s),
                    l = o[a];
                o[a] = o[r], o[r] = l
            }
            return o.length = e, o
        }

        function rr(t) {
            return ir(t, Es)
        }

        function or(t) {
            var e = t ? qs(t) : 0;
            return ni(e) ? e : Ua(t).length
        }

        function sr(t, e, n) {
            var i = ja(t) ? pe : Ye;
            return n && Zn(t, e, n) && (e = $), ("function" != typeof e || n !== $) && (e = Rn(e, n, 3)), i(t, e)
        }

        function ar(t, e, n) {
            if (null == t) return [];
            n && Zn(t, e, n) && (e = $);
            var i = -1;
            e = Rn(e, n, 3);
            var r = Ne(t, function(t, n, r) {
                return {
                    criteria: e(t, n, r),
                    index: ++i,
                    value: t
                }
            });
            return Ve(r, a)
        }

        function lr(t, e, n, i) {
            return null == t ? [] : (i && Zn(e, n, i) && (n = $), ja(e) || (e = null == e ? [] : [e]), ja(n) || (n = null == n ? [] : [n]), Ke(t, e, n))
        }

        function ur(t, e) {
            return Ki(t, He(e))
        }

        function cr(t, e) {
            if ("function" != typeof e) {
                if ("function" != typeof t) throw new Vo(U);
                var n = t;
                t = e, e = n
            }
            return t = bs(t = +t) ? t : 0,
                function() {
                    return --t < 1 ? e.apply(this, arguments) : void 0
                }
        }

        function dr(t, e, n) {
            return n && Zn(t, e, n) && (e = $), e = t && null == e ? t.length : $s(+e || 0, 0), Pn(t, F, $, $, $, $, e)
        }

        function pr(t, e) {
            var n;
            if ("function" != typeof e) {
                if ("function" != typeof t) throw new Vo(U);
                var i = t;
                t = e, e = i
            }
            return function() {
                return --t > 0 && (n = e.apply(this, arguments)), 1 >= t && (e = $), n
            }
        }

        function fr(t, e, n) {
            function i() {
                f && as(f), u && as(u), m = 0, u = f = h = $
            }

            function r(e, n) {
                n && as(n), u = f = h = $, e && (m = ma(), c = t.apply(p, l), f || u || (l = p = $))
            }

            function o() {
                var t = e - (ma() - d);
                0 >= t || t > e ? r(h, u) : f = ps(o, t)
            }

            function s() {
                r(v, f)
            }

            function a() {
                if (l = arguments, d = ma(), p = this, h = v && (f || !y), g === !1) var n = y && !f;
                else {
                    u || y || (m = d);
                    var i = g - (d - m),
                        r = 0 >= i || i > g;
                    r ? (u && (u = as(u)), m = d, c = t.apply(p, l)) : u || (u = ps(s, i))
                }
                return r && f ? f = as(f) : f || e === g || (f = ps(o, e)), n && (r = !0, c = t.apply(p, l)), !r || f || u || (l = p = $), c
            }
            var l, u, c, d, p, f, h, m = 0,
                g = !1,
                v = !0;
            if ("function" != typeof t) throw new Vo(U);
            if (e = 0 > e ? 0 : +e || 0, n === !0) {
                var y = !0;
                v = !1
            } else Mr(n) && (y = !!n.leading, g = "maxWait" in n && $s(+n.maxWait || 0, e), v = "trailing" in n ? !!n.trailing : v);
            return a.cancel = i, a
        }

        function hr(t, e) {
            if ("function" != typeof t || e && "function" != typeof e) throw new Vo(U);
            var n = function() {
                var i = arguments,
                    r = e ? e.apply(this, i) : i[0],
                    o = n.cache;
                if (o.has(r)) return o.get(r);
                var s = t.apply(this, i);
                return n.cache = o.set(r, s), s
            };
            return n.cache = new hr.Cache, n
        }

        function mr(t) {
            if ("function" != typeof t) throw new Vo(U);
            return function() {
                return !t.apply(this, arguments)
            }
        }

        function gr(t) {
            return pr(2, t)
        }

        function vr(t, e) {
            if ("function" != typeof t) throw new Vo(U);
            return e = $s(e === $ ? t.length - 1 : +e || 0, 0),
                function() {
                    for (var n = arguments, i = -1, r = $s(n.length - e, 0), o = Ro(r); ++i < r;) o[i] = n[e + i];
                    switch (e) {
                        case 0:
                            return t.call(this, o);
                        case 1:
                            return t.call(this, n[0], o);
                        case 2:
                            return t.call(this, n[0], n[1], o)
                    }
                    var s = Ro(e + 1);
                    for (i = -1; ++i < e;) s[i] = n[i];
                    return s[e] = o, t.apply(this, s)
                }
        }

        function yr(t) {
            if ("function" != typeof t) throw new Vo(U);
            return function(e) {
                return t.apply(this, e)
            }
        }

        function wr(t, e, n) {
            var i = !0,
                r = !0;
            if ("function" != typeof t) throw new Vo(U);
            return n === !1 ? i = !1 : Mr(n) && (i = "leading" in n ? !!n.leading : i, r = "trailing" in n ? !!n.trailing : r), fr(t, e, {
                leading: i,
                maxWait: +e,
                trailing: r
            })
        }

        function br(t, e) {
            return e = null == e ? Eo : e, Pn(e, j, $, [t], [])
        }

        function _r(t, e, n, i) {
            return e && "boolean" != typeof e && Zn(t, e, n) ? e = !1 : "function" == typeof e && (i = n, n = e, e = !1), "function" == typeof n ? _e(t, e, sn(n, i, 3)) : _e(t, e)
        }

        function $r(t, e, n) {
            return "function" == typeof e ? _e(t, !0, sn(e, n, 3)) : _e(t, !0)
        }

        function kr(t, e) {
            return t > e
        }

        function xr(t, e) {
            return t >= e
        }

        function Tr(t) {
            return h(t) && Kn(t) && es.call(t, "callee") && !cs.call(t, "callee")
        }

        function Sr(t) {
            return t === !0 || t === !1 || h(t) && is.call(t) == G
        }

        function Cr(t) {
            return h(t) && is.call(t) == B
        }

        function Er(t) {
            return !!t && 1 === t.nodeType && h(t) && !Ur(t)
        }

        function jr(t) {
            return null == t ? !0 : Kn(t) && (ja(t) || qr(t) || Tr(t) || h(t) && Lr(t.splice)) ? !t.length : !Ua(t).length
        }

        function Ar(t, e, n, i) {
            n = "function" == typeof n ? sn(n, i, 3) : $;
            var r = n ? n(t, e) : $;
            return r === $ ? Ie(t, e, n) : !!r
        }

        function Fr(t) {
            return h(t) && "string" == typeof t.message && is.call(t) == W
        }

        function Dr(t) {
            return "number" == typeof t && bs(t)
        }

        function Lr(t) {
            return Mr(t) && is.call(t) == J
        }

        function Mr(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }

        function Ir(t, e, n, i) {
            return n = "function" == typeof n ? sn(n, i, 3) : $, Pe(t, Gn(e), n)
        }

        function Or(t) {
            return Hr(t) && t != +t
        }

        function Pr(t) {
            return null == t ? !1 : Lr(t) ? os.test(ts.call(t)) : h(t) && Ft.test(t)
        }

        function Nr(t) {
            return null === t
        }

        function Hr(t) {
            return "number" == typeof t || h(t) && is.call(t) == Y
        }

        function Ur(t) {
            var e;
            if (!h(t) || is.call(t) != V || Tr(t) || !es.call(t, "constructor") && (e = t.constructor, "function" == typeof e && !(e instanceof e))) return !1;
            var n;
            return Ae(t, function(t, e) {
                n = e
            }), n === $ || es.call(t, n)
        }

        function Rr(t) {
            return Mr(t) && is.call(t) == K
        }

        function qr(t) {
            return "string" == typeof t || h(t) && is.call(t) == Z
        }

        function zr(t) {
            return h(t) && ni(t.length) && !!Ht[is.call(t)]
        }

        function Gr(t) {
            return t === $
        }

        function Br(t, e) {
            return e > t
        }

        function Wr(t, e) {
            return e >= t
        }

        function Jr(t) {
            var e = t ? qs(t) : 0;
            return ni(e) ? e ? ne(t) : [] : oo(t)
        }

        function Xr(t) {
            return we(t, to(t))
        }

        function Yr(t, e, n) {
            var i = Is(t);
            return n && Zn(t, e, n) && (e = $), e ? ve(i, e) : i
        }

        function Vr(t) {
            return Le(t, to(t))
        }

        function Kr(t, e, n) {
            var i = null == t ? $ : Me(t, pi(e), e + "");
            return i === $ ? n : i
        }

        function Qr(t, e) {
            if (null == t) return !1;
            var n = es.call(t, e);
            if (!n && !ti(e)) {
                if (e = pi(e), t = 1 == e.length ? t : Me(t, Xe(e, 0, -1)), null == t) return !1;
                e = Si(e), n = es.call(t, e)
            }
            return n || ni(t.length) && Qn(e, t.length) && (ja(t) || Tr(t))
        }

        function Zr(t, e, n) {
            n && Zn(t, e, n) && (e = $);
            for (var i = -1, r = Ua(t), o = r.length, s = {}; ++i < o;) {
                var a = r[i],
                    l = t[a];
                e ? es.call(s, l) ? s[l].push(a) : s[l] = [a] : s[l] = a
            }
            return s
        }

        function to(t) {
            if (null == t) return [];
            Mr(t) || (t = Jo(t));
            var e = t.length;
            e = e && ni(e) && (ja(t) || Tr(t)) && e || 0;
            for (var n = t.constructor, i = -1, r = "function" == typeof n && n.prototype === t, o = Ro(e), s = e > 0; ++i < e;) o[i] = i + "";
            for (var a in t) s && Qn(a, e) || "constructor" == a && (r || !es.call(t, a)) || o.push(a);
            return o
        }

        function eo(t) {
            t = di(t);
            for (var e = -1, n = Ua(t), i = n.length, r = Ro(i); ++e < i;) {
                var o = n[e];
                r[e] = [o, t[o]]
            }
            return r
        }

        function no(t, e, n) {
            var i = null == t ? $ : t[e];
            return i === $ && (null == t || ti(e, t) || (e = pi(e), t = 1 == e.length ? t : Me(t, Xe(e, 0, -1)), i = null == t ? $ : t[Si(e)]), i = i === $ ? n : i), Lr(i) ? i.call(t) : i
        }

        function io(t, e, n) {
            if (null == t) return t;
            var i = e + "";
            e = null != t[i] || ti(e, t) ? [i] : pi(e);
            for (var r = -1, o = e.length, s = o - 1, a = t; null != a && ++r < o;) {
                var l = e[r];
                Mr(a) && (r == s ? a[l] = n : null == a[l] && (a[l] = Qn(e[r + 1]) ? [] : {})), a = a[l]
            }
            return t
        }

        function ro(t, e, n, i) {
            var r = ja(t) || zr(t);
            if (e = Rn(e, i, 4), null == n)
                if (r || Mr(t)) {
                    var o = t.constructor;
                    n = r ? ja(t) ? new o : [] : Is(Lr(o) ? o.prototype : $)
                } else n = {};
            return (r ? ie : Fe)(t, function(t, i, r) {
                return e(n, t, i, r)
            }), n
        }

        function oo(t) {
            return tn(t, Ua(t))
        }

        function so(t) {
            return tn(t, to(t))
        }

        function ao(t, e, n) {
            return e = +e || 0, n === $ ? (n = e, e = 0) : n = +n || 0, t >= ks(e, n) && t < $s(e, n)
        }

        function lo(t, e, n) {
            n && Zn(t, e, n) && (e = n = $);
            var i = null == t,
                r = null == e;
            if (null == n && (r && "boolean" == typeof t ? (n = t, t = 1) : "boolean" == typeof e && (n = e, r = !0)), i && r && (e = 1, r = !1), t = +t || 0, r ? (e = t, t = 0) : e = +e || 0, n || t % 1 || e % 1) {
                var o = Ss();
                return ks(t + o * (e - t + ls("1e-" + ((o + "").length - 1))), e)
            }
            return We(t, e)
        }

        function uo(t) {
            return t = r(t), t && t.charAt(0).toUpperCase() + t.slice(1)
        }

        function co(t) {
            return t = r(t), t && t.replace(Lt, u).replace(St, "")
        }

        function po(t, e, n) {
            t = r(t), e += "";
            var i = t.length;
            return n = n === $ ? i : ks(0 > n ? 0 : +n || 0, i), n -= e.length, n >= 0 && t.indexOf(e, n) == n
        }

        function fo(t) {
            return t = r(t), t && vt.test(t) ? t.replace(mt, c) : t
        }

        function ho(t) {
            return t = r(t), t && Tt.test(t) ? t.replace(xt, d) : t || "(?:)"
        }

        function mo(t, e, n) {
            t = r(t), e = +e;
            var i = t.length;
            if (i >= e || !bs(e)) return t;
            var o = (e - i) / 2,
                s = ys(o),
                a = gs(o);
            return n = Ln("", a, n), n.slice(0, s) + t + n
        }

        function go(t, e, n) {
            return (n ? Zn(t, e, n) : null == e) ? e = 0 : e && (e = +e), t = bo(t), Ts(t, e || (At.test(t) ? 16 : 10))
        }

        function vo(t, e) {
            var n = "";
            if (t = r(t), e = +e, 1 > e || !t || !bs(e)) return n;
            do e % 2 && (n += t), e = ys(e / 2), t += t; while (e);
            return n
        }

        function yo(t, e, n) {
            return t = r(t), n = null == n ? 0 : ks(0 > n ? 0 : +n || 0, t.length), t.lastIndexOf(e, n) == n
        }

        function wo(t, e, n) {
            var i = X.templateSettings;
            n && Zn(t, e, n) && (e = n = $), t = r(t), e = ge(ve({}, n || e), i, me);
            var o, s, a = ge(ve({}, e.imports), i.imports, me),
                l = Ua(a),
                u = tn(a, l),
                c = 0,
                d = e.interpolate || Mt,
                f = "__p += '",
                h = Xo((e.escape || Mt).source + "|" + d.source + "|" + (d === bt ? Et : Mt).source + "|" + (e.evaluate || Mt).source + "|$", "g"),
                m = "//# sourceURL=" + ("sourceURL" in e ? e.sourceURL : "lodash.templateSources[" + ++Nt + "]") + "\n";
            t.replace(h, function(e, n, i, r, a, l) {
                return i || (i = r), f += t.slice(c, l).replace(It, p), n && (o = !0, f += "' +\n__e(" + n + ") +\n'"), a && (s = !0, f += "';\n" + a + ";\n__p += '"), i && (f += "' +\n((__t = (" + i + ")) == null ? '' : __t) +\n'"), c = l + e.length, e
            }), f += "';\n";
            var g = e.variable;
            g || (f = "with (obj) {\n" + f + "\n}\n"), f = (s ? f.replace(dt, "") : f).replace(pt, "$1").replace(ft, "$1;"), f = "function(" + (g || "obj") + ") {\n" + (g ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (o ? ", __e = _.escape" : "") + (s ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + f + "return __p\n}";
            var v = Ka(function() {
                return Go(l, m + "return " + f).apply($, u)
            });
            if (v.source = f, Fr(v)) throw v;
            return v
        }

        function bo(t, e, n) {
            var i = t;
            return (t = r(t)) ? (n ? Zn(i, e, n) : null == e) ? t.slice(y(t), w(t) + 1) : (e += "", t.slice(o(t, e), s(t, e) + 1)) : t
        }

        function _o(t, e, n) {
            var i = t;
            return t = r(t), t ? (n ? Zn(i, e, n) : null == e) ? t.slice(y(t)) : t.slice(o(t, e + "")) : t
        }

        function $o(t, e, n) {
            var i = t;
            return t = r(t), t ? (n ? Zn(i, e, n) : null == e) ? t.slice(0, w(t) + 1) : t.slice(0, s(t, e + "") + 1) : t
        }

        function ko(t, e, n) {
            n && Zn(t, e, n) && (e = $);
            var i = L,
                o = M;
            if (null != e)
                if (Mr(e)) {
                    var s = "separator" in e ? e.separator : s;
                    i = "length" in e ? +e.length || 0 : i, o = "omission" in e ? r(e.omission) : o
                } else i = +e || 0;
            if (t = r(t), i >= t.length) return t;
            var a = i - o.length;
            if (1 > a) return o;
            var l = t.slice(0, a);
            if (null == s) return l + o;
            if (Rr(s)) {
                if (t.slice(a).search(s)) {
                    var u, c, d = t.slice(0, a);
                    for (s.global || (s = Xo(s.source, (jt.exec(s) || "") + "g")), s.lastIndex = 0; u = s.exec(d);) c = u.index;
                    l = l.slice(0, null == c ? a : c)
                }
            } else if (t.indexOf(s, a) != a) {
                var p = l.lastIndexOf(s);
                p > -1 && (l = l.slice(0, p))
            }
            return l + o
        }

        function xo(t) {
            return t = r(t), t && gt.test(t) ? t.replace(ht, b) : t
        }

        function To(t, e, n) {
            return n && Zn(t, e, n) && (e = $), t = r(t), t.match(e || Ot) || []
        }

        function So(t, e, n) {
            return n && Zn(t, e, n) && (e = $), h(t) ? jo(t) : be(t, e)
        }

        function Co(t) {
            return function() {
                return t
            }
        }

        function Eo(t) {
            return t
        }

        function jo(t) {
            return He(_e(t, !0))
        }

        function Ao(t, e) {
            return Ue(t, _e(e, !0))
        }

        function Fo(t, e, n) {
            if (null == n) {
                var i = Mr(e),
                    r = i ? Ua(e) : $,
                    o = r && r.length ? Le(e, r) : $;
                (o ? o.length : i) || (o = !1, n = e, e = t, t = this)
            }
            o || (o = Le(e, Ua(e)));
            var s = !0,
                a = -1,
                l = Lr(t),
                u = o.length;
            n === !1 ? s = !1 : Mr(n) && "chain" in n && (s = n.chain);
            for (; ++a < u;) {
                var c = o[a],
                    d = e[c];
                t[c] = d, l && (t.prototype[c] = function(e) {
                    return function() {
                        var n = this.__chain__;
                        if (s || n) {
                            var i = t(this.__wrapped__),
                                r = i.__actions__ = ne(this.__actions__);
                            return r.push({
                                func: e,
                                args: arguments,
                                thisArg: t
                            }), i.__chain__ = n, i
                        }
                        return e.apply(t, ue([this.value()], arguments));
                    }
                }(d))
            }
            return t
        }

        function Do() {
            return Zt._ = rs, this
        }

        function Lo() {}

        function Mo(t) {
            return ti(t) ? ze(t) : Ge(t)
        }

        function Io(t) {
            return function(e) {
                return Me(t, pi(e), e + "")
            }
        }

        function Oo(t, e, n) {
            n && Zn(t, e, n) && (e = n = $), t = +t || 0, n = null == n ? 1 : +n || 0, null == e ? (e = t, t = 0) : e = +e || 0;
            for (var i = -1, r = $s(gs((e - t) / (n || 1)), 0), o = Ro(r); ++i < r;) o[i] = t, t += n;
            return o
        }

        function Po(t, e, n) {
            if (t = ys(t), 1 > t || !bs(t)) return [];
            var i = -1,
                r = Ro(ks(t, js));
            for (e = sn(e, n, 1); ++i < t;) js > i ? r[i] = e(i) : e(i);
            return r
        }

        function No(t) {
            var e = ++ns;
            return r(t) + e
        }

        function Ho(t, e) {
            return (+t || 0) + (+e || 0)
        }

        function Uo(t, e, n) {
            return n && Zn(t, e, n) && (e = $), e = Rn(e, n, 3), 1 == e.length ? fe(ja(t) ? t : ci(t), e) : Qe(t, e)
        }
        m = m ? te.defaults(Zt.Object(), m, te.pick(Zt, Pt)) : Zt;
        var Ro = m.Array,
            qo = m.Date,
            zo = m.Error,
            Go = m.Function,
            Bo = m.Math,
            Wo = m.Number,
            Jo = m.Object,
            Xo = m.RegExp,
            Yo = m.String,
            Vo = m.TypeError,
            Ko = Ro.prototype,
            Qo = Jo.prototype,
            Zo = Yo.prototype,
            ts = Go.prototype.toString,
            es = Qo.hasOwnProperty,
            ns = 0,
            is = Qo.toString,
            rs = Zt._,
            os = Xo("^" + ts.call(es).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            ss = m.ArrayBuffer,
            as = m.clearTimeout,
            ls = m.parseFloat,
            us = Bo.pow,
            cs = Qo.propertyIsEnumerable,
            ds = Bn(m, "Set"),
            ps = m.setTimeout,
            fs = Ko.splice,
            hs = m.Uint8Array,
            ms = Bn(m, "WeakMap"),
            gs = Bo.ceil,
            vs = Bn(Jo, "create"),
            ys = Bo.floor,
            ws = Bn(Ro, "isArray"),
            bs = m.isFinite,
            _s = Bn(Jo, "keys"),
            $s = Bo.max,
            ks = Bo.min,
            xs = Bn(qo, "now"),
            Ts = m.parseInt,
            Ss = Bo.random,
            Cs = Wo.NEGATIVE_INFINITY,
            Es = Wo.POSITIVE_INFINITY,
            js = 4294967295,
            As = js - 1,
            Fs = js >>> 1,
            Ds = 9007199254740991,
            Ls = ms && new ms,
            Ms = {};
        X.support = {};
        X.templateSettings = {
            escape: yt,
            evaluate: wt,
            interpolate: bt,
            variable: "",
            imports: {
                _: X
            }
        };
        var Is = function() {
                function t() {}
                return function(e) {
                    if (Mr(e)) {
                        t.prototype = e;
                        var n = new t;
                        t.prototype = $
                    }
                    return n || {}
                }
            }(),
            Os = pn(Fe),
            Ps = pn(De, !0),
            Ns = fn(),
            Hs = fn(!0),
            Us = Ls ? function(t, e) {
                return Ls.set(t, e), t
            } : Eo,
            Rs = Ls ? function(t) {
                return Ls.get(t)
            } : Lo,
            qs = ze("length"),
            zs = function() {
                var t = 0,
                    e = 0;
                return function(n, i) {
                    var r = ma(),
                        o = O - (r - e);
                    if (e = r, o > 0) {
                        if (++t >= I) return n
                    } else t = 0;
                    return Us(n, i)
                }
            }(),
            Gs = vr(function(t, e) {
                return h(t) && Kn(t) ? ke(t, je(e, !1, !0)) : []
            }),
            Bs = $n(),
            Ws = $n(!0),
            Js = vr(function(t) {
                for (var e = t.length, i = e, r = Ro(d), o = zn(), s = o === n, a = []; i--;) {
                    var l = t[i] = Kn(l = t[i]) ? l : [];
                    r[i] = s && l.length >= 120 ? mn(i && l) : null
                }
                var u = t[0],
                    c = -1,
                    d = u ? u.length : 0,
                    p = r[0];
                t: for (; ++c < d;)
                    if (l = u[c], (p ? Kt(p, l) : o(a, l, 0)) < 0) {
                        for (var i = e; --i;) {
                            var f = r[i];
                            if ((f ? Kt(f, l) : o(t[i], l, 0)) < 0) continue t
                        }
                        p && p.push(l), a.push(l)
                    }
                return a
            }),
            Xs = vr(function(e, n) {
                n = je(n);
                var i = ye(e, n);
                return Be(e, n.sort(t)), i
            }),
            Ys = On(),
            Vs = On(!0),
            Ks = vr(function(t) {
                return Ze(je(t, !1, !0))
            }),
            Qs = vr(function(t, e) {
                return Kn(t) ? ke(t, e) : []
            }),
            Zs = vr(Pi),
            ta = vr(function(t) {
                var e = t.length,
                    n = e > 2 ? t[e - 2] : $,
                    i = e > 1 ? t[e - 1] : $;
                return e > 2 && "function" == typeof n ? e -= 2 : (n = e > 1 && "function" == typeof i ? (--e, i) : $, i = $), t.length = e, Ni(t, n, i)
            }),
            ea = vr(function(t) {
                return t = je(t), this.thru(function(e) {
                    return ee(ja(e) ? e : [di(e)], t)
                })
            }),
            na = vr(function(t, e) {
                return ye(t, je(e))
            }),
            ia = cn(function(t, e, n) {
                es.call(t, n) ? ++t[n] : t[n] = 1
            }),
            ra = _n(Os),
            oa = _n(Ps, !0),
            sa = Tn(ie, Os),
            aa = Tn(re, Ps),
            la = cn(function(t, e, n) {
                es.call(t, n) ? t[n].push(e) : t[n] = [e]
            }),
            ua = cn(function(t, e, n) {
                t[n] = e
            }),
            ca = vr(function(t, e, n) {
                var i = -1,
                    r = "function" == typeof e,
                    o = ti(e),
                    s = Kn(t) ? Ro(t.length) : [];
                return Os(t, function(t) {
                    var a = r ? e : o && null != t ? t[e] : $;
                    s[++i] = a ? a.apply(t, n) : Vn(t, e, n)
                }), s
            }),
            da = cn(function(t, e, n) {
                t[n ? 0 : 1].push(e)
            }, function() {
                return [
                    [],
                    []
                ]
            }),
            pa = Fn(ce, Os),
            fa = Fn(de, Ps),
            ha = vr(function(t, e) {
                if (null == t) return [];
                var n = e[2];
                return n && Zn(e[0], e[1], n) && (e.length = 1), Ke(t, je(e), [])
            }),
            ma = xs || function() {
                return (new qo).getTime()
            },
            ga = vr(function(t, e, n) {
                var i = x;
                if (n.length) {
                    var r = g(n, ga.placeholder);
                    i |= j
                }
                return Pn(t, i, e, n, r)
            }),
            va = vr(function(t, e) {
                e = e.length ? je(e) : Vr(t);
                for (var n = -1, i = e.length; ++n < i;) {
                    var r = e[n];
                    t[r] = Pn(t[r], x, t)
                }
                return t
            }),
            ya = vr(function(t, e, n) {
                var i = x | T;
                if (n.length) {
                    var r = g(n, ya.placeholder);
                    i |= j
                }
                return Pn(e, i, t, n, r)
            }),
            wa = yn(C),
            ba = yn(E),
            _a = vr(function(t, e) {
                return $e(t, 1, e)
            }),
            $a = vr(function(t, e, n) {
                return $e(t, e, n)
            }),
            ka = xn(),
            xa = xn(!0),
            Ta = vr(function(t, e) {
                if (e = je(e), "function" != typeof t || !oe(e, i)) throw new Vo(U);
                var n = e.length;
                return vr(function(i) {
                    for (var r = ks(i.length, n); r--;) i[r] = e[r](i[r]);
                    return t.apply(this, i)
                })
            }),
            Sa = An(j),
            Ca = An(A),
            Ea = vr(function(t, e) {
                return Pn(t, D, $, $, $, je(e))
            }),
            ja = ws || function(t) {
                return h(t) && ni(t.length) && is.call(t) == z
            },
            Aa = dn(Re),
            Fa = dn(function(t, e, n) {
                return n ? ge(t, e, n) : ve(t, e)
            }),
            Da = wn(Fa, he),
            La = wn(Aa, oi),
            Ma = kn(Fe),
            Ia = kn(De),
            Oa = Sn(Ns),
            Pa = Sn(Hs),
            Na = Cn(Fe),
            Ha = Cn(De),
            Ua = _s ? function(t) {
                var e = null == t ? $ : t.constructor;
                return "function" == typeof e && e.prototype === t || "function" != typeof t && Kn(t) ? ui(t) : Mr(t) ? _s(t) : []
            } : ui,
            Ra = En(!0),
            qa = En(),
            za = vr(function(t, e) {
                if (null == t) return {};
                if ("function" != typeof e[0]) {
                    var e = le(je(e), Yo);
                    return si(t, ke(to(t), e))
                }
                var n = sn(e[0], e[1], 3);
                return ai(t, function(t, e, i) {
                    return !n(t, e, i)
                })
            }),
            Ga = vr(function(t, e) {
                return null == t ? {} : "function" == typeof e[0] ? ai(t, sn(e[0], e[1], 3)) : si(t, je(e))
            }),
            Ba = gn(function(t, e, n) {
                return e = e.toLowerCase(), t + (n ? e.charAt(0).toUpperCase() + e.slice(1) : e)
            }),
            Wa = gn(function(t, e, n) {
                return t + (n ? "-" : "") + e.toLowerCase()
            }),
            Ja = jn(),
            Xa = jn(!0),
            Ya = gn(function(t, e, n) {
                return t + (n ? "_" : "") + e.toLowerCase()
            }),
            Va = gn(function(t, e, n) {
                return t + (n ? " " : "") + (e.charAt(0).toUpperCase() + e.slice(1))
            }),
            Ka = vr(function(t, e) {
                try {
                    return t.apply($, e)
                } catch (n) {
                    return Fr(n) ? n : new zo(n)
                }
            }),
            Qa = vr(function(t, e) {
                return function(n) {
                    return Vn(n, t, e)
                }
            }),
            Za = vr(function(t, e) {
                return function(n) {
                    return Vn(t, n, e)
                }
            }),
            tl = In("ceil"),
            el = In("floor"),
            nl = bn(kr, Cs),
            il = bn(Br, Es),
            rl = In("round");
        return X.prototype = Q.prototype, tt.prototype = Is(Q.prototype), tt.prototype.constructor = tt, Rt.prototype = Is(Q.prototype), Rt.prototype.constructor = Rt, Bt.prototype["delete"] = Wt, Bt.prototype.get = Jt, Bt.prototype.has = Xt, Bt.prototype.set = Yt, Vt.prototype.push = Qt, hr.Cache = Bt, X.after = cr, X.ary = dr, X.assign = Fa, X.at = na, X.before = pr, X.bind = ga, X.bindAll = va, X.bindKey = ya, X.callback = So, X.chain = Ri, X.chunk = hi, X.compact = mi, X.constant = Co, X.countBy = ia, X.create = Yr, X.curry = wa, X.curryRight = ba, X.debounce = fr, X.defaults = Da, X.defaultsDeep = La, X.defer = _a, X.delay = $a, X.difference = Gs, X.drop = gi, X.dropRight = vi, X.dropRightWhile = yi, X.dropWhile = wi, X.fill = bi, X.filter = Ki, X.flatten = $i, X.flattenDeep = ki, X.flow = ka, X.flowRight = xa, X.forEach = sa, X.forEachRight = aa, X.forIn = Oa, X.forInRight = Pa, X.forOwn = Na, X.forOwnRight = Ha, X.functions = Vr, X.groupBy = la, X.indexBy = ua, X.initial = Ti, X.intersection = Js, X.invert = Zr, X.invoke = ca, X.keys = Ua, X.keysIn = to, X.map = tr, X.mapKeys = Ra, X.mapValues = qa, X.matches = jo, X.matchesProperty = Ao, X.memoize = hr, X.merge = Aa, X.method = Qa, X.methodOf = Za, X.mixin = Fo, X.modArgs = Ta, X.negate = mr, X.omit = za, X.once = gr, X.pairs = eo, X.partial = Sa, X.partialRight = Ca, X.partition = da, X.pick = Ga, X.pluck = er, X.property = Mo, X.propertyOf = Io, X.pull = Ei, X.pullAt = Xs, X.range = Oo, X.rearg = Ea, X.reject = nr, X.remove = ji, X.rest = Ai, X.restParam = vr, X.set = io, X.shuffle = rr, X.slice = Fi, X.sortBy = ar, X.sortByAll = ha, X.sortByOrder = lr, X.spread = yr, X.take = Di, X.takeRight = Li, X.takeRightWhile = Mi, X.takeWhile = Ii, X.tap = qi, X.throttle = wr, X.thru = zi, X.times = Po, X.toArray = Jr, X.toPlainObject = Xr, X.transform = ro, X.union = Ks, X.uniq = Oi, X.unzip = Pi, X.unzipWith = Ni, X.values = oo, X.valuesIn = so, X.where = ur, X.without = Qs, X.wrap = br, X.xor = Hi, X.zip = Zs, X.zipObject = Ui, X.zipWith = ta, X.backflow = xa, X.collect = tr, X.compose = xa, X.each = sa, X.eachRight = aa, X.extend = Fa, X.iteratee = So, X.methods = Vr, X.object = Ui, X.select = Ki, X.tail = Ai, X.unique = Oi, Fo(X, X), X.add = Ho, X.attempt = Ka, X.camelCase = Ba, X.capitalize = uo, X.ceil = tl, X.clone = _r, X.cloneDeep = $r, X.deburr = co, X.endsWith = po, X.escape = fo, X.escapeRegExp = ho, X.every = Vi, X.find = ra, X.findIndex = Bs, X.findKey = Ma, X.findLast = oa, X.findLastIndex = Ws, X.findLastKey = Ia, X.findWhere = Qi, X.first = _i, X.floor = el, X.get = Kr, X.gt = kr, X.gte = xr, X.has = Qr, X.identity = Eo, X.includes = Zi, X.indexOf = xi, X.inRange = ao, X.isArguments = Tr, X.isArray = ja, X.isBoolean = Sr, X.isDate = Cr, X.isElement = Er, X.isEmpty = jr, X.isEqual = Ar, X.isError = Fr, X.isFinite = Dr, X.isFunction = Lr, X.isMatch = Ir, X.isNaN = Or, X.isNative = Pr, X.isNull = Nr, X.isNumber = Hr, X.isObject = Mr, X.isPlainObject = Ur, X.isRegExp = Rr, X.isString = qr, X.isTypedArray = zr, X.isUndefined = Gr, X.kebabCase = Wa, X.last = Si, X.lastIndexOf = Ci, X.lt = Br, X.lte = Wr, X.max = nl, X.min = il, X.noConflict = Do, X.noop = Lo, X.now = ma, X.pad = mo, X.padLeft = Ja, X.padRight = Xa, X.parseInt = go, X.random = lo, X.reduce = pa, X.reduceRight = fa, X.repeat = vo, X.result = no, X.round = rl, X.runInContext = _, X.size = or, X.snakeCase = Ya, X.some = sr, X.sortedIndex = Ys, X.sortedLastIndex = Vs, X.startCase = Va, X.startsWith = yo, X.sum = Uo, X.template = wo, X.trim = bo, X.trimLeft = _o, X.trimRight = $o, X.trunc = ko, X.unescape = xo, X.uniqueId = No, X.words = To, X.all = Vi, X.any = sr, X.contains = Zi, X.eq = Ar, X.detect = ra, X.foldl = pa, X.foldr = fa, X.head = _i, X.include = Zi, X.inject = pa, Fo(X, function() {
            var t = {};
            return Fe(X, function(e, n) {
                X.prototype[n] || (t[n] = e)
            }), t
        }(), !1), X.sample = ir, X.prototype.sample = function(t) {
            return this.__chain__ || null != t ? this.thru(function(e) {
                return ir(e, t)
            }) : ir(this.value())
        }, X.VERSION = k, ie(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
            X[t].placeholder = X
        }), ie(["drop", "take"], function(t, e) {
            Rt.prototype[t] = function(n) {
                var i = this.__filtered__;
                if (i && !e) return new Rt(this);
                n = null == n ? 1 : $s(ys(n) || 0, 0);
                var r = this.clone();
                return i ? r.__takeCount__ = ks(r.__takeCount__, n) : r.__views__.push({
                    size: n,
                    type: t + (r.__dir__ < 0 ? "Right" : "")
                }), r
            }, Rt.prototype[t + "Right"] = function(e) {
                return this.reverse()[t](e).reverse()
            }
        }), ie(["filter", "map", "takeWhile"], function(t, e) {
            var n = e + 1,
                i = n != H;
            Rt.prototype[t] = function(t, e) {
                var r = this.clone();
                return r.__iteratees__.push({
                    iteratee: Rn(t, e, 1),
                    type: n
                }), r.__filtered__ = r.__filtered__ || i, r
            }
        }), ie(["first", "last"], function(t, e) {
            var n = "take" + (e ? "Right" : "");
            Rt.prototype[t] = function() {
                return this[n](1).value()[0]
            }
        }), ie(["initial", "rest"], function(t, e) {
            var n = "drop" + (e ? "" : "Right");
            Rt.prototype[t] = function() {
                return this.__filtered__ ? new Rt(this) : this[n](1)
            }
        }), ie(["pluck", "where"], function(t, e) {
            var n = e ? "filter" : "map",
                i = e ? He : Mo;
            Rt.prototype[t] = function(t) {
                return this[n](i(t))
            }
        }), Rt.prototype.compact = function() {
            return this.filter(Eo)
        }, Rt.prototype.reject = function(t, e) {
            return t = Rn(t, e, 1), this.filter(function(e) {
                return !t(e)
            })
        }, Rt.prototype.slice = function(t, e) {
            t = null == t ? 0 : +t || 0;
            var n = this;
            return n.__filtered__ && (t > 0 || 0 > e) ? new Rt(n) : (0 > t ? n = n.takeRight(-t) : t && (n = n.drop(t)), e !== $ && (e = +e || 0, n = 0 > e ? n.dropRight(-e) : n.take(e - t)), n)
        }, Rt.prototype.takeRightWhile = function(t, e) {
            return this.reverse().takeWhile(t, e).reverse()
        }, Rt.prototype.toArray = function() {
            return this.take(Es)
        }, Fe(Rt.prototype, function(t, e) {
            var n = /^(?:filter|map|reject)|While$/.test(e),
                i = /^(?:first|last)$/.test(e),
                r = X[i ? "take" + ("last" == e ? "Right" : "") : e];
            r && (X.prototype[e] = function() {
                var e = i ? [1] : arguments,
                    o = this.__chain__,
                    s = this.__wrapped__,
                    a = !!this.__actions__.length,
                    l = s instanceof Rt,
                    u = e[0],
                    c = l || ja(s);
                c && n && "function" == typeof u && 1 != u.length && (l = c = !1);
                var d = function(t) {
                        return i && o ? r(t, 1)[0] : r.apply($, ue([t], e))
                    },
                    p = {
                        func: zi,
                        args: [d],
                        thisArg: $
                    },
                    f = l && !a;
                if (i && !o) return f ? (s = s.clone(), s.__actions__.push(p), t.call(s)) : r.call($, this.value())[0];
                if (!i && c) {
                    s = f ? s : new Rt(this);
                    var h = t.apply(s, e);
                    return h.__actions__.push(p), new tt(h, o)
                }
                return this.thru(d)
            })
        }), ie(["join", "pop", "push", "replace", "shift", "sort", "splice", "split", "unshift"], function(t) {
            var e = (/^(?:replace|split)$/.test(t) ? Zo : Ko)[t],
                n = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                i = /^(?:join|pop|replace|shift)$/.test(t);
            X.prototype[t] = function() {
                var t = arguments;
                return i && !this.__chain__ ? e.apply(this.value(), t) : this[n](function(n) {
                    return e.apply(n, t)
                })
            }
        }), Fe(Rt.prototype, function(t, e) {
            var n = X[e];
            if (n) {
                var i = n.name + "",
                    r = Ms[i] || (Ms[i] = []);
                r.push({
                    name: e,
                    func: n
                })
            }
        }), Ms[Dn($, T).name] = [{
            name: "wrapper",
            func: $
        }], Rt.prototype.clone = qt, Rt.prototype.reverse = zt, Rt.prototype.value = Gt, X.prototype.chain = Gi, X.prototype.commit = Bi, X.prototype.concat = ea, X.prototype.plant = Wi, X.prototype.reverse = Ji, X.prototype.toString = Xi, X.prototype.run = X.prototype.toJSON = X.prototype.valueOf = X.prototype.value = Yi, X.prototype.collect = X.prototype.map, X.prototype.head = X.prototype.first, X.prototype.select = X.prototype.filter, X.prototype.tail = X.prototype.rest, X
    }
    var $, k = "3.10.1",
        x = 1,
        T = 2,
        S = 4,
        C = 8,
        E = 16,
        j = 32,
        A = 64,
        F = 128,
        D = 256,
        L = 30,
        M = "...",
        I = 150,
        O = 16,
        P = 200,
        N = 1,
        H = 2,
        U = "Expected a function",
        R = "__lodash_placeholder__",
        q = "[object Arguments]",
        z = "[object Array]",
        G = "[object Boolean]",
        B = "[object Date]",
        W = "[object Error]",
        J = "[object Function]",
        X = "[object Map]",
        Y = "[object Number]",
        V = "[object Object]",
        K = "[object RegExp]",
        Q = "[object Set]",
        Z = "[object String]",
        tt = "[object WeakMap]",
        et = "[object ArrayBuffer]",
        nt = "[object Float32Array]",
        it = "[object Float64Array]",
        rt = "[object Int8Array]",
        ot = "[object Int16Array]",
        st = "[object Int32Array]",
        at = "[object Uint8Array]",
        lt = "[object Uint8ClampedArray]",
        ut = "[object Uint16Array]",
        ct = "[object Uint32Array]",
        dt = /\b__p \+= '';/g,
        pt = /\b(__p \+=) '' \+/g,
        ft = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        ht = /&(?:amp|lt|gt|quot|#39|#96);/g,
        mt = /[&<>"'`]/g,
        gt = RegExp(ht.source),
        vt = RegExp(mt.source),
        yt = /<%-([\s\S]+?)%>/g,
        wt = /<%([\s\S]+?)%>/g,
        bt = /<%=([\s\S]+?)%>/g,
        _t = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
        $t = /^\w*$/,
        kt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
        xt = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,
        Tt = RegExp(xt.source),
        St = /[\u0300-\u036f\ufe20-\ufe23]/g,
        Ct = /\\(\\)?/g,
        Et = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        jt = /\w*$/,
        At = /^0[xX]/,
        Ft = /^\[object .+?Constructor\]$/,
        Dt = /^\d+$/,
        Lt = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
        Mt = /($^)/,
        It = /['\n\r\u2028\u2029\\]/g,
        Ot = function() {
            var t = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
                e = "[a-z\\xdf-\\xf6\\xf8-\\xff]+";
            return RegExp(t + "+(?=" + t + e + ")|" + t + "?" + e + "|" + t + "+|[0-9]+", "g")
        }(),
        Pt = ["Array", "ArrayBuffer", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Math", "Number", "Object", "RegExp", "Set", "String", "_", "clearTimeout", "isFinite", "parseFloat", "parseInt", "setTimeout", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap"],
        Nt = -1,
        Ht = {};
    Ht[nt] = Ht[it] = Ht[rt] = Ht[ot] = Ht[st] = Ht[at] = Ht[lt] = Ht[ut] = Ht[ct] = !0, Ht[q] = Ht[z] = Ht[et] = Ht[G] = Ht[B] = Ht[W] = Ht[J] = Ht[X] = Ht[Y] = Ht[V] = Ht[K] = Ht[Q] = Ht[Z] = Ht[tt] = !1;
    var Ut = {};
    Ut[q] = Ut[z] = Ut[et] = Ut[G] = Ut[B] = Ut[nt] = Ut[it] = Ut[rt] = Ut[ot] = Ut[st] = Ut[Y] = Ut[V] = Ut[K] = Ut[Z] = Ut[at] = Ut[lt] = Ut[ut] = Ut[ct] = !0, Ut[W] = Ut[J] = Ut[X] = Ut[Q] = Ut[tt] = !1;
    var Rt = {
            "\xc0": "A",
            "\xc1": "A",
            "\xc2": "A",
            "\xc3": "A",
            "\xc4": "A",
            "\xc5": "A",
            "\xe0": "a",
            "\xe1": "a",
            "\xe2": "a",
            "\xe3": "a",
            "\xe4": "a",
            "\xe5": "a",
            "\xc7": "C",
            "\xe7": "c",
            "\xd0": "D",
            "\xf0": "d",
            "\xc8": "E",
            "\xc9": "E",
            "\xca": "E",
            "\xcb": "E",
            "\xe8": "e",
            "\xe9": "e",
            "\xea": "e",
            "\xeb": "e",
            "\xcc": "I",
            "\xcd": "I",
            "\xce": "I",
            "\xcf": "I",
            "\xec": "i",
            "\xed": "i",
            "\xee": "i",
            "\xef": "i",
            "\xd1": "N",
            "\xf1": "n",
            "\xd2": "O",
            "\xd3": "O",
            "\xd4": "O",
            "\xd5": "O",
            "\xd6": "O",
            "\xd8": "O",
            "\xf2": "o",
            "\xf3": "o",
            "\xf4": "o",
            "\xf5": "o",
            "\xf6": "o",
            "\xf8": "o",
            "\xd9": "U",
            "\xda": "U",
            "\xdb": "U",
            "\xdc": "U",
            "\xf9": "u",
            "\xfa": "u",
            "\xfb": "u",
            "\xfc": "u",
            "\xdd": "Y",
            "\xfd": "y",
            "\xff": "y",
            "\xc6": "Ae",
            "\xe6": "ae",
            "\xde": "Th",
            "\xfe": "th",
            "\xdf": "ss"
        },
        qt = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "`": "&#96;"
        },
        zt = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'",
            "&#96;": "`"
        },
        Gt = {
            "function": !0,
            object: !0
        },
        Bt = {
            0: "x30",
            1: "x31",
            2: "x32",
            3: "x33",
            4: "x34",
            5: "x35",
            6: "x36",
            7: "x37",
            8: "x38",
            9: "x39",
            A: "x41",
            B: "x42",
            C: "x43",
            D: "x44",
            E: "x45",
            F: "x46",
            a: "x61",
            b: "x62",
            c: "x63",
            d: "x64",
            e: "x65",
            f: "x66",
            n: "x6e",
            r: "x72",
            t: "x74",
            u: "x75",
            v: "x76",
            x: "x78"
        },
        Wt = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        Jt = Gt[typeof exports] && exports && !exports.nodeType && exports,
        Xt = Gt[typeof module] && module && !module.nodeType && module,
        Yt = Jt && Xt && "object" == typeof global && global && global.Object && global,
        Vt = Gt[typeof self] && self && self.Object && self,
        Kt = Gt[typeof window] && window && window.Object && window,
        Qt = Xt && Xt.exports === Jt && Jt,
        Zt = Yt || Kt !== (this && this.window) && Kt || Vt || this,
        te = _();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (Zt._ = te, define(function() {
        return te
    })) : Jt && Xt ? Qt ? (Xt.exports = te)._ = te : Jt._ = te : Zt._ = te
}.call(this);
var Events = function() {
    var t = [],
        e = (t.push, t.slice),
        n = (t.splice, /\s+/),
        i = function(t, e, i, r) {
            if (!i) return !0;
            if ("object" == typeof i)
                for (var o in i) t[e].apply(t, [o, i[o]].concat(r));
            else {
                if (!n.test(i)) return !0;
                for (var s = i.split(n), a = 0, l = s.length; l > a; a++) t[e].apply(t, [s[a]].concat(r))
            }
        },
        r = function(t, e) {
            var n, i = -1,
                r = t.length;
            switch (e.length) {
                case 0:
                    for (; ++i < r;)(n = t[i]).callback.call(n.ctx);
                    return;
                case 1:
                    for (; ++i < r;)(n = t[i]).callback.call(n.ctx, e[0]);
                    return;
                case 2:
                    for (; ++i < r;)(n = t[i]).callback.call(n.ctx, e[0], e[1]);
                    return;
                case 3:
                    for (; ++i < r;)(n = t[i]).callback.call(n.ctx, e[0], e[1], e[2]);
                    return;
                default:
                    for (; ++i < r;)(n = t[i]).callback.apply(n.ctx, e)
            }
        },
        o = {
            on: function(t, e, n) {
                if (!i(this, "on", t, [e, n]) || !e) return this;
                this._events || (this._events = {});
                var r = this._events[t] || (this._events[t] = []);
                return r.push({
                    callback: e,
                    context: n,
                    ctx: n || this
                }), this
            },
            once: function(t, e, n) {
                if (!i(this, "once", t, [e, n]) || !e) return this;
                var r = this,
                    o = _.once(function() {
                        r.off(t, o), e.apply(this, arguments)
                    });
                return o._callback = e, this.on(t, o, n), this
            },
            off: function(t, e, n) {
                var r, o, s, a, l, u, c, d;
                if (!this._events || !i(this, "off", t, [e, n])) return this;
                if (!t && !e && !n) return this._events = {}, this;
                for (a = t ? [t] : _.keys(this._events), l = 0, u = a.length; u > l; l++)
                    if (t = a[l], r = this._events[t]) {
                        if (s = [], e || n)
                            for (c = 0, d = r.length; d > c; c++) o = r[c], (e && e !== o.callback && e !== o.callback._callback || n && n !== o.context) && s.push(o);
                        this._events[t] = s
                    }
                return this
            },
            trigger: function(t) {
                if (!this._events) return this;
                var n = e.call(arguments, 1);
                if (!i(this, "trigger", t, n)) return this;
                var o = this._events[t],
                    s = this._events.all;
                return o && r(o, n), s && r(s, arguments), this
            },
            listenTo: function(t, e, n) {
                var i = this._listeners || (this._listeners = {}),
                    r = t._listenerId || (t._listenerId = _.uniqueId("l"));
                return i[r] = t, t.on(e, "object" == typeof e ? this : n, this), this
            },
            stopListening: function(t, e, n) {
                var i = this._listeners;
                if (i) {
                    if (t) t.off(e, "object" == typeof e ? this : n, this), e || n || delete i[t._listenerId];
                    else {
                        "object" == typeof e && (n = this);
                        for (var r in i) i[r].off(e, n, this);
                        this._listeners = {}
                    }
                    return this
                }
            }
        };
    return o
}();
! function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    "use strict";
    var e = window.Slick || {};
    e = function() {
            function e(e, i) {
                var r, o = this;
                o.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: t(e),
                    appendDots: t(e),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(e, n) {
                        return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(n + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, o.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, t.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = t(e), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, r = t(e).data("slick") || {}, o.options = t.extend({}, o.defaults, i, r), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, "undefined" != typeof document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = t.proxy(o.autoPlay, o), o.autoPlayClear = t.proxy(o.autoPlayClear, o), o.autoPlayIterator = t.proxy(o.autoPlayIterator, o), o.changeSlide = t.proxy(o.changeSlide, o), o.clickHandler = t.proxy(o.clickHandler, o), o.selectHandler = t.proxy(o.selectHandler, o), o.setPosition = t.proxy(o.setPosition, o), o.swipeHandler = t.proxy(o.swipeHandler, o), o.dragHandler = t.proxy(o.dragHandler, o), o.keyHandler = t.proxy(o.keyHandler, o), o.instanceUid = n++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0)
            }
            var n = 0;
            return e
        }(), e.prototype.activateADA = function() {
            var t = this;
            t.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, e.prototype.addSlide = e.prototype.slickAdd = function(e, n, i) {
            var r = this;
            if ("boolean" == typeof n) i = n, n = null;
            else if (0 > n || n >= r.slideCount) return !1;
            r.unload(), "number" == typeof n ? 0 === n && 0 === r.$slides.length ? t(e).appendTo(r.$slideTrack) : i ? t(e).insertBefore(r.$slides.eq(n)) : t(e).insertAfter(r.$slides.eq(n)) : i === !0 ? t(e).prependTo(r.$slideTrack) : t(e).appendTo(r.$slideTrack), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slides.each(function(e, n) {
                t(n).attr("data-slick-index", e)
            }), r.$slidesCache = r.$slides, r.reinit()
        }, e.prototype.animateHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.animate({
                    height: e
                }, t.options.speed)
            }
        }, e.prototype.animateSlide = function(e, n) {
            var i = {},
                r = this;
            r.animateHeight(), r.options.rtl === !0 && r.options.vertical === !1 && (e = -e), r.transformsEnabled === !1 ? r.options.vertical === !1 ? r.$slideTrack.animate({
                left: e
            }, r.options.speed, r.options.easing, n) : r.$slideTrack.animate({
                top: e
            }, r.options.speed, r.options.easing, n) : r.cssTransitions === !1 ? (r.options.rtl === !0 && (r.currentLeft = -r.currentLeft), t({
                animStart: r.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: r.options.speed,
                easing: r.options.easing,
                step: function(t) {
                    t = Math.ceil(t), r.options.vertical === !1 ? (i[r.animType] = "translate(" + t + "px, 0px)", r.$slideTrack.css(i)) : (i[r.animType] = "translate(0px," + t + "px)", r.$slideTrack.css(i))
                },
                complete: function() {
                    n && n.call()
                }
            })) : (r.applyTransition(), e = Math.ceil(e), r.options.vertical === !1 ? i[r.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[r.animType] = "translate3d(0px," + e + "px, 0px)", r.$slideTrack.css(i), n && setTimeout(function() {
                r.disableTransition(), n.call()
            }, r.options.speed))
        }, e.prototype.getNavTarget = function() {
            var e = this,
                n = e.options.asNavFor;
            return n && null !== n && (n = t(n).not(e.$slider)), n
        }, e.prototype.asNavFor = function(e) {
            var n = this,
                i = n.getNavTarget();
            null !== i && "object" == typeof i && i.each(function() {
                var n = t(this).slick("getSlick");
                n.unslicked || n.slideHandler(e, !0)
            })
        }, e.prototype.applyTransition = function(t) {
            var e = this,
                n = {};
            e.options.fade === !1 ? n[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : n[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n)
        }, e.prototype.autoPlay = function() {
            var t = this;
            t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
        }, e.prototype.autoPlayClear = function() {
            var t = this;
            t.autoPlayTimer && clearInterval(t.autoPlayTimer)
        }, e.prototype.autoPlayIterator = function() {
            var t = this,
                e = t.currentSlide + t.options.slidesToScroll;
            t.paused || t.interrupted || t.focussed || (t.options.infinite === !1 && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 === 0 && (t.direction = 1))), t.slideHandler(e))
        }, e.prototype.buildArrows = function() {
            var e = this;
            e.options.arrows === !0 && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, e.prototype.buildDots = function() {
            var e, n, i = this;
            if (i.options.dots === !0 && i.slideCount > i.options.slidesToShow) {
                for (i.$slider.addClass("slick-dotted"), n = t("<ul />").addClass(i.options.dotsClass), e = 0; e <= i.getDotCount(); e += 1) n.append(t("<li />").append(i.options.customPaging.call(this, i, e)));
                i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, e.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, n) {
                t(n).attr("data-slick-index", e).data("originalStyling", t(n).attr("style") || "")
            }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (e.options.centerMode === !0 || e.options.swipeToSlide === !0) && (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
        }, e.prototype.buildRows = function() {
            var t, e, n, i, r, o, s, a = this;
            if (i = document.createDocumentFragment(), o = a.$slider.children(), a.options.rows > 1) {
                for (s = a.options.slidesPerRow * a.options.rows, r = Math.ceil(o.length / s), t = 0; r > t; t++) {
                    var l = document.createElement("div");
                    for (e = 0; e < a.options.rows; e++) {
                        var u = document.createElement("div");
                        for (n = 0; n < a.options.slidesPerRow; n++) {
                            var c = t * s + (e * a.options.slidesPerRow + n);
                            o.get(c) && u.appendChild(o.get(c))
                        }
                        l.appendChild(u)
                    }
                    i.appendChild(l)
                }
                a.$slider.empty().append(i), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, e.prototype.checkResponsive = function(e, n) {
            var i, r, o, s = this,
                a = !1,
                l = s.$slider.width(),
                u = window.innerWidth || t(window).width();
            if ("window" === s.respondTo ? o = u : "slider" === s.respondTo ? o = l : "min" === s.respondTo && (o = Math.min(u, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
                r = null;
                for (i in s.breakpoints) s.breakpoints.hasOwnProperty(i) && (s.originalSettings.mobileFirst === !1 ? o < s.breakpoints[i] && (r = s.breakpoints[i]) : o > s.breakpoints[i] && (r = s.breakpoints[i]));
                null !== r ? null !== s.activeBreakpoint ? (r !== s.activeBreakpoint || n) && (s.activeBreakpoint = r, "unslick" === s.breakpointSettings[r] ? s.unslick(r) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[r]), e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = r) : (s.activeBreakpoint = r, "unslick" === s.breakpointSettings[r] ? s.unslick(r) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[r]), e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = r) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(e), a = r), e || a === !1 || s.$slider.trigger("breakpoint", [s, a])
            }
        }, e.prototype.changeSlide = function(e, n) {
            var i, r, o, s = this,
                a = t(e.currentTarget);
            switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), o = s.slideCount % s.options.slidesToScroll !== 0, i = o ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, e.data.message) {
                case "previous":
                    r = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - r, !1, n);
                    break;
                case "next":
                    r = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + r, !1, n);
                    break;
                case "index":
                    var l = 0 === e.data.index ? 0 : e.data.index || a.index() * s.options.slidesToScroll;
                    s.slideHandler(s.checkNavigable(l), !1, n), a.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, e.prototype.checkNavigable = function(t) {
            var e, n, i = this;
            if (e = i.getNavigableIndexes(), n = 0, t > e[e.length - 1]) t = e[e.length - 1];
            else
                for (var r in e) {
                    if (t < e[r]) {
                        t = n;
                        break
                    }
                    n = e[r]
                }
            return t
        }, e.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots && null !== e.$dots && t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.cleanUpSlideEvents = function() {
            var e = this;
            e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.cleanUpRows = function() {
            var t, e = this;
            e.options.rows > 1 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.empty().append(t))
        }, e.prototype.clickHandler = function(t) {
            var e = this;
            e.shouldClick === !1 && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
        }, e.prototype.destroy = function(e) {
            var n = this;
            n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), t(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                t(this).attr("style", t(this).data("originalStyling"))
            }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, e || n.$slider.trigger("destroy", [n])
        }, e.prototype.disableTransition = function(t) {
            var e = this,
                n = {};
            n[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n)
        }, e.prototype.fadeSlide = function(t, e) {
            var n = this;
            n.cssTransitions === !1 ? (n.$slides.eq(t).css({
                zIndex: n.options.zIndex
            }), n.$slides.eq(t).animate({
                opacity: 1
            }, n.options.speed, n.options.easing, e)) : (n.applyTransition(t), n.$slides.eq(t).css({
                opacity: 1,
                zIndex: n.options.zIndex
            }), e && setTimeout(function() {
                n.disableTransition(t), e.call()
            }, n.options.speed))
        }, e.prototype.fadeSlideOut = function(t) {
            var e = this;
            e.cssTransitions === !1 ? e.$slides.eq(t).animate({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }))
        }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
            var e = this;
            null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
        }, e.prototype.focusHandler = function() {
            var e = this;
            e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(n) {
                n.stopImmediatePropagation();
                var i = t(this);
                setTimeout(function() {
                    e.options.pauseOnFocus && (e.focussed = i.is(":focus"), e.autoPlay())
                }, 0)
            })
        },
        e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
            var t = this;
            return t.currentSlide
        }, e.prototype.getDotCount = function() {
            var t = this,
                e = 0,
                n = 0,
                i = 0;
            if (t.options.infinite === !0)
                for (; e < t.slideCount;) ++i, e = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else if (t.options.centerMode === !0) i = t.slideCount;
            else if (t.options.asNavFor)
                for (; e < t.slideCount;) ++i, e = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else i = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
            return i - 1
        }, e.prototype.getLeft = function(t) {
            var e, n, i, r = this,
                o = 0;
            return r.slideOffset = 0, n = r.$slides.first().outerHeight(!0), r.options.infinite === !0 ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = n * r.options.slidesToShow * -1), r.slideCount % r.options.slidesToScroll !== 0 && t + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (t > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (t - r.slideCount)) * r.slideWidth * -1, o = (r.options.slidesToShow - (t - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, o = r.slideCount % r.options.slidesToScroll * n * -1))) : t + r.options.slidesToShow > r.slideCount && (r.slideOffset = (t + r.options.slidesToShow - r.slideCount) * r.slideWidth, o = (t + r.options.slidesToShow - r.slideCount) * n), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, o = 0), r.options.centerMode === !0 && r.options.infinite === !0 ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : r.options.centerMode === !0 && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), e = r.options.vertical === !1 ? t * r.slideWidth * -1 + r.slideOffset : t * n * -1 + o, r.options.variableWidth === !0 && (i = r.slideCount <= r.options.slidesToShow || r.options.infinite === !1 ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow), e = r.options.rtl === !0 ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, r.options.centerMode === !0 && (i = r.slideCount <= r.options.slidesToShow || r.options.infinite === !1 ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow + 1), e = r.options.rtl === !0 ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, e += (r.$list.width() - i.outerWidth()) / 2)), e
        }, e.prototype.getOption = e.prototype.slickGetOption = function(t) {
            var e = this;
            return e.options[t]
        }, e.prototype.getNavigableIndexes = function() {
            var t, e = this,
                n = 0,
                i = 0,
                r = [];
            for (e.options.infinite === !1 ? t = e.slideCount : (n = -1 * e.options.slidesToScroll, i = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); t > n;) r.push(n), n = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return r
        }, e.prototype.getSlick = function() {
            return this
        }, e.prototype.getSlideCount = function() {
            var e, n, i, r = this;
            return i = r.options.centerMode === !0 ? r.slideWidth * Math.floor(r.options.slidesToShow / 2) : 0, r.options.swipeToSlide === !0 ? (r.$slideTrack.find(".slick-slide").each(function(e, o) {
                return o.offsetLeft - i + t(o).outerWidth() / 2 > -1 * r.swipeLeft ? (n = o, !1) : void 0
            }), e = Math.abs(t(n).attr("data-slick-index") - r.currentSlide) || 1) : r.options.slidesToScroll
        }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
            var n = this;
            n.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(t)
                }
            }, e)
        }, e.prototype.init = function(e) {
            var n = this;
            t(n.$slider).hasClass("slick-initialized") || (t(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), e && n.$slider.trigger("init", [n]), n.options.accessibility === !0 && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
        }, e.prototype.initADA = function() {
            var e = this;
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(n) {
                t(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + e.instanceUid + n
                })
            }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(n) {
                t(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + e.instanceUid + n,
                    id: "slick-slide" + e.instanceUid + n
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
        }, e.prototype.initArrowEvents = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, t.changeSlide))
        }, e.prototype.initDotEvents = function() {
            var e = this;
            e.options.dots === !0 && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.initSlideEvents = function() {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
        }, e.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.initUI = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show()
        }, e.prototype.keyHandler = function(t) {
            var e = this;
            t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({
                data: {
                    message: e.options.rtl === !0 ? "next" : "previous"
                }
            }) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({
                data: {
                    message: e.options.rtl === !0 ? "previous" : "next"
                }
            }))
        }, e.prototype.lazyLoad = function() {
            function e(e) {
                t("img[data-lazy]", e).each(function() {
                    var e = t(this),
                        n = t(this).attr("data-lazy"),
                        i = document.createElement("img");
                    i.onload = function() {
                        e.animate({
                            opacity: 0
                        }, 100, function() {
                            e.attr("src", n).animate({
                                opacity: 1
                            }, 200, function() {
                                e.removeAttr("data-lazy").removeClass("slick-loading")
                            }), s.$slider.trigger("lazyLoaded", [s, e, n])
                        })
                    }, i.onerror = function() {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, e, n])
                    }, i.src = n
                })
            }
            var n, i, r, o, s = this;
            s.options.centerMode === !0 ? s.options.infinite === !0 ? (r = s.currentSlide + (s.options.slidesToShow / 2 + 1), o = r + s.options.slidesToShow + 2) : (r = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), o = 2 + (s.options.slidesToShow / 2 + 1) + s.currentSlide) : (r = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, o = Math.ceil(r + s.options.slidesToShow), s.options.fade === !0 && (r > 0 && r--, o <= s.slideCount && o++)), n = s.$slider.find(".slick-slide").slice(r, o), e(n), s.slideCount <= s.options.slidesToShow ? (i = s.$slider.find(".slick-slide"), e(i)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (i = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), e(i)) : 0 === s.currentSlide && (i = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow), e(i))
        }, e.prototype.loadSlider = function() {
            var t = this;
            t.setPosition(), t.$slideTrack.css({
                opacity: 1
            }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
        }, e.prototype.next = e.prototype.slickNext = function() {
            var t = this;
            t.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, e.prototype.orientationChange = function() {
            var t = this;
            t.checkResponsive(), t.setPosition()
        }, e.prototype.pause = e.prototype.slickPause = function() {
            var t = this;
            t.autoPlayClear(), t.paused = !0
        }, e.prototype.play = e.prototype.slickPlay = function() {
            var t = this;
            t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
        }, e.prototype.postSlide = function(t) {
            var e = this;
            e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), e.options.accessibility === !0 && e.initADA())
        }, e.prototype.prev = e.prototype.slickPrev = function() {
            var t = this;
            t.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, e.prototype.preventDefault = function(t) {
            t.preventDefault()
        }, e.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var n, i, r, o = this,
                s = t("img[data-lazy]", o.$slider);
            s.length ? (n = s.first(), i = n.attr("data-lazy"), r = document.createElement("img"), r.onload = function() {
                n.attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"), o.options.adaptiveHeight === !0 && o.setPosition(), o.$slider.trigger("lazyLoaded", [o, n, i]), o.progressiveLazyLoad()
            }, r.onerror = function() {
                3 > e ? setTimeout(function() {
                    o.progressiveLazyLoad(e + 1)
                }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, n, i]), o.progressiveLazyLoad())
            }, r.src = i) : o.$slider.trigger("allImagesLoaded", [o])
        }, e.prototype.refresh = function(e) {
            var n, i, r = this;
            i = r.slideCount - r.options.slidesToShow, !r.options.infinite && r.currentSlide > i && (r.currentSlide = i), r.slideCount <= r.options.slidesToShow && (r.currentSlide = 0), n = r.currentSlide, r.destroy(!0), t.extend(r, r.initials, {
                currentSlide: n
            }), r.init(), e || r.changeSlide({
                data: {
                    message: "index",
                    index: n
                }
            }, !1)
        }, e.prototype.registerBreakpoints = function() {
            var e, n, i, r = this,
                o = r.options.responsive || null;
            if ("array" === t.type(o) && o.length) {
                r.respondTo = r.options.respondTo || "window";
                for (e in o)
                    if (i = r.breakpoints.length - 1, n = o[e].breakpoint, o.hasOwnProperty(e)) {
                        for (; i >= 0;) r.breakpoints[i] && r.breakpoints[i] === n && r.breakpoints.splice(i, 1), i--;
                        r.breakpoints.push(n), r.breakpointSettings[n] = o[e].settings
                    }
                r.breakpoints.sort(function(t, e) {
                    return r.options.mobileFirst ? t - e : e - t
                })
            }
        }, e.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
        }, e.prototype.resize = function() {
            var e = this;
            t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
                e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }, 50))
        }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, n) {
            var i = this;
            return "boolean" == typeof t ? (e = t, t = e === !0 ? 0 : i.slideCount - 1) : t = e === !0 ? --t : t, i.slideCount < 1 || 0 > t || t > i.slideCount - 1 ? !1 : (i.unload(), n === !0 ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(t).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit())
        }, e.prototype.setCSS = function(t) {
            var e, n, i = this,
                r = {};
            i.options.rtl === !0 && (t = -t), e = "left" == i.positionProp ? Math.ceil(t) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(t) + "px" : "0px", r[i.positionProp] = t, i.transformsEnabled === !1 ? i.$slideTrack.css(r) : (r = {}, i.cssTransitions === !1 ? (r[i.animType] = "translate(" + e + ", " + n + ")", i.$slideTrack.css(r)) : (r[i.animType] = "translate3d(" + e + ", " + n + ", 0px)", i.$slideTrack.css(r)))
        }, e.prototype.setDimensions = function() {
            var t = this;
            t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({
                padding: "0px " + t.options.centerPadding
            }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({
                padding: t.options.centerPadding + " 0px"
            })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.options.vertical === !1 && t.options.variableWidth === !1 ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
            var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
            t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
        }, e.prototype.setFade = function() {
            var e, n = this;
            n.$slides.each(function(i, r) {
                e = n.slideWidth * i * -1, n.options.rtl === !0 ? t(r).css({
                    position: "relative",
                    right: e,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                }) : t(r).css({
                    position: "relative",
                    left: e,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                })
            }), n.$slides.eq(n.currentSlide).css({
                zIndex: n.options.zIndex - 1,
                opacity: 1
            })
        }, e.prototype.setHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.css("height", e)
            }
        }, e.prototype.setOption = e.prototype.slickSetOption = function() {
            var e, n, i, r, o, s = this,
                a = !1;
            if ("object" === t.type(arguments[0]) ? (i = arguments[0], a = arguments[1], o = "multiple") : "string" === t.type(arguments[0]) && (i = arguments[0], r = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? o = "responsive" : "undefined" != typeof arguments[1] && (o = "single")), "single" === o) s.options[i] = r;
            else if ("multiple" === o) t.each(i, function(t, e) {
                s.options[t] = e
            });
            else if ("responsive" === o)
                for (n in r)
                    if ("array" !== t.type(s.options.responsive)) s.options.responsive = [r[n]];
                    else {
                        for (e = s.options.responsive.length - 1; e >= 0;) s.options.responsive[e].breakpoint === r[n].breakpoint && s.options.responsive.splice(e, 1), e--;
                        s.options.responsive.push(r[n])
                    }
            a && (s.unload(), s.reinit())
        }, e.prototype.setPosition = function() {
            var t = this;
            t.setDimensions(), t.setHeight(), t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
        }, e.prototype.setProps = function() {
            var t = this,
                e = document.body.style;
            t.positionProp = t.options.vertical === !0 ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && t.options.useCSS === !0 && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && t.animType !== !1 && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && t.animType !== !1
        }, e.prototype.setSlideClasses = function(t) {
            var e, n, i, r, o = this;
            n = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(t).addClass("slick-current"), o.options.centerMode === !0 ? (e = Math.floor(o.options.slidesToShow / 2), o.options.infinite === !0 && (t >= e && t <= o.slideCount - 1 - e ? o.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = o.options.slidesToShow + t, n.slice(i - e + 1, i + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? n.eq(n.length - 1 - o.options.slidesToShow).addClass("slick-center") : t === o.slideCount - 1 && n.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(t, t + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= o.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (r = o.slideCount % o.options.slidesToShow, i = o.options.infinite === !0 ? o.options.slidesToShow + t : t, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - t < o.options.slidesToShow ? n.slice(i - (o.options.slidesToShow - r), i + r).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === o.options.lazyLoad && o.lazyLoad()
        }, e.prototype.setupInfinite = function() {
            var e, n, i, r = this;
            if (r.options.fade === !0 && (r.options.centerMode = !1), r.options.infinite === !0 && r.options.fade === !1 && (n = null, r.slideCount > r.options.slidesToShow)) {
                for (i = r.options.centerMode === !0 ? r.options.slidesToShow + 1 : r.options.slidesToShow, e = r.slideCount; e > r.slideCount - i; e -= 1) n = e - 1, t(r.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - r.slideCount).prependTo(r.$slideTrack).addClass("slick-cloned");
                for (e = 0; i > e; e += 1) n = e, t(r.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + r.slideCount).appendTo(r.$slideTrack).addClass("slick-cloned");
                r.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    t(this).attr("id", "")
                })
            }
        }, e.prototype.interrupt = function(t) {
            var e = this;
            t || e.autoPlay(), e.interrupted = t
        }, e.prototype.selectHandler = function(e) {
            var n = this,
                i = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                r = parseInt(i.attr("data-slick-index"));
            return r || (r = 0), n.slideCount <= n.options.slidesToShow ? (n.setSlideClasses(r), void n.asNavFor(r)) : void n.slideHandler(r)
        }, e.prototype.slideHandler = function(t, e, n) {
            var i, r, o, s, a, l = null,
                u = this;
            return e = e || !1, u.animating === !0 && u.options.waitForAnimate === !0 || u.options.fade === !0 && u.currentSlide === t || u.slideCount <= u.options.slidesToShow ? void 0 : (e === !1 && u.asNavFor(t), i = t, l = u.getLeft(i), s = u.getLeft(u.currentSlide), u.currentLeft = null === u.swipeLeft ? s : u.swipeLeft, u.options.infinite === !1 && u.options.centerMode === !1 && (0 > t || t > u.getDotCount() * u.options.slidesToScroll) ? void(u.options.fade === !1 && (i = u.currentSlide, n !== !0 ? u.animateSlide(s, function() {
                u.postSlide(i)
            }) : u.postSlide(i))) : u.options.infinite === !1 && u.options.centerMode === !0 && (0 > t || t > u.slideCount - u.options.slidesToScroll) ? void(u.options.fade === !1 && (i = u.currentSlide, n !== !0 ? u.animateSlide(s, function() {
                u.postSlide(i)
            }) : u.postSlide(i))) : (u.options.autoplay && clearInterval(u.autoPlayTimer), r = 0 > i ? u.slideCount % u.options.slidesToScroll !== 0 ? u.slideCount - u.slideCount % u.options.slidesToScroll : u.slideCount + i : i >= u.slideCount ? u.slideCount % u.options.slidesToScroll !== 0 ? 0 : i - u.slideCount : i, u.animating = !0, u.$slider.trigger("beforeChange", [u, u.currentSlide, r]), o = u.currentSlide, u.currentSlide = r, u.setSlideClasses(u.currentSlide), u.options.asNavFor && (a = u.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(u.currentSlide)), u.updateDots(), u.updateArrows(), u.options.fade === !0 ? (n !== !0 ? (u.fadeSlideOut(o), u.fadeSlide(r, function() {
                u.postSlide(r)
            })) : u.postSlide(r), void u.animateHeight()) : void(n !== !0 ? u.animateSlide(l, function() {
                u.postSlide(r)
            }) : u.postSlide(r))))
        }, e.prototype.startLoad = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
        }, e.prototype.swipeDirection = function() {
            var t, e, n, i, r = this;
            return t = r.touchObject.startX - r.touchObject.curX, e = r.touchObject.startY - r.touchObject.curY, n = Math.atan2(e, t), i = Math.round(180 * n / Math.PI), 0 > i && (i = 360 - Math.abs(i)), 45 >= i && i >= 0 ? r.options.rtl === !1 ? "left" : "right" : 360 >= i && i >= 315 ? r.options.rtl === !1 ? "left" : "right" : i >= 135 && 225 >= i ? r.options.rtl === !1 ? "right" : "left" : r.options.verticalSwiping === !0 ? i >= 35 && 135 >= i ? "down" : "up" : "vertical"
        }, e.prototype.swipeEnd = function(t) {
            var e, n, i = this;
            if (i.dragging = !1, i.interrupted = !1, i.shouldClick = i.touchObject.swipeLength > 10 ? !1 : !0, void 0 === i.touchObject.curX) return !1;
            if (i.touchObject.edgeHit === !0 && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
                switch (n = i.swipeDirection()) {
                    case "left":
                    case "down":
                        e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
                }
                "vertical" != n && (i.slideHandler(e), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
            } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
        }, e.prototype.swipeHandler = function(t) {
            var e = this;
            if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
                case "start":
                    e.swipeStart(t);
                    break;
                case "move":
                    e.swipeMove(t);
                    break;
                case "end":
                    e.swipeEnd(t)
            }
        }, e.prototype.swipeMove = function(t) {
            var e, n, i, r, o, s = this;
            return o = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !s.dragging || o && 1 !== o.length ? !1 : (e = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX, s.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), s.options.verticalSwiping === !0 && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))), n = s.swipeDirection(), "vertical" !== n ? (void 0 !== t.originalEvent && s.touchObject.swipeLength > 4 && t.preventDefault(), r = (s.options.rtl === !1 ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), s.options.verticalSwiping === !0 && (r = s.touchObject.curY > s.touchObject.startY ? 1 : -1), i = s.touchObject.swipeLength, s.touchObject.edgeHit = !1, s.options.infinite === !1 && (0 === s.currentSlide && "right" === n || s.currentSlide >= s.getDotCount() && "left" === n) && (i = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), s.options.vertical === !1 ? s.swipeLeft = e + i * r : s.swipeLeft = e + i * (s.$list.height() / s.listWidth) * r, s.options.verticalSwiping === !0 && (s.swipeLeft = e + i * r), s.options.fade === !0 || s.options.touchMove === !1 ? !1 : s.animating === !0 ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft)) : void 0)
        }, e.prototype.swipeStart = function(t) {
            var e, n = this;
            return n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? (n.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(n.dragging = !0))
        }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
            var t = this;
            null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
        }, e.prototype.unload = function() {
            var e = this;
            t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, e.prototype.unslick = function(t) {
            var e = this;
            e.$slider.trigger("unslick", [e, t]), e.destroy()
        }, e.prototype.updateArrows = function() {
            var t, e = this;
            t = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, e.prototype.updateDots = function() {
            var t = this;
            null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, e.prototype.visibility = function() {
            var t = this;
            t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
        }, t.fn.slick = function() {
            var t, n, i = this,
                r = arguments[0],
                o = Array.prototype.slice.call(arguments, 1),
                s = i.length;
            for (t = 0; s > t; t++)
                if ("object" == typeof r || "undefined" == typeof r ? i[t].slick = new e(i[t], r) : n = i[t].slick[r].apply(i[t].slick, o), "undefined" != typeof n) return n;
            return i
        }
}),
function() {
    window.UFCGym.Events = _.extend({}, window.Events), $(function() {
        var t, e, n, i;
        t = $("[data-super-nav]"), t.data("populated") ? window.UFCGym.Events.trigger("user_location_now_known", t.data()) : (n = "/api/locations/header", e = {
            location_slug: $("body").data("microsite-location-slug")
        }, (i = Cookies.get("user_location")) && (n = "/api/locations/static_header", e.user_location = i), $.get(n, e).done(function(e) {
            return function(e) {
                t = $(e).replaceAll(t), t.data("attempted_geolocation", !0), window.UFCGym.Events.trigger("user_location_now_known", t.data())
            }
        }(this)).fail(function(e) {
            return function(e) {
                var n;
                return n = '<nav class="super-nav" data-super-nav="true" data-populated="false" data-attempted_geolocation="true" <div class="my-gym"> <a href="http://139.59.12.164/ufcGym/ufcgym.com/locations.html" class="my-gym__find" data-ga_category="Header" data-ga_action="InstraSite" data-ga_label="Find a Gym" data-ga_delay="true">Find a Gym</a> </div> </nav>', t = $(n).replaceAll(t), window.UFCGym.Events.trigger("user_location_now_known", t.data())
            }
        }(this))), $(".slick-carousel").slick({
            arrows: !1,
            dots: !0
        }), $(".slick-carousel-arrow.slide").slick({
            arrows: !0,
            dots: !0,
            infinite: !0,
            autoplay: !0,
            autoplaySpeed: 5e3
        }), $(".slick-carousel-arrow.fade").slick({
            arrows: !0,
            dots: !0,
            infinite: !1,
            fade: !0,
            speed: 0
        })
    })
}.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t() {
                this.preventTimeout = e(this.preventTimeout, this), this.keydownContentLink = e(this.keydownContentLink, this), this.keydownLink = e(this.keydownLink, this), this.closeMenu = e(this.closeMenu, this), this.focusMenu = e(this.focusMenu, this), this.openMenuFromLink = e(this.openMenuFromLink, this), this.openMenu = e(this.openMenu, this), this.setContentStartPosition = e(this.setContentStartPosition, this), this.getLinkIndex = e(this.getLinkIndex, this), this.getMenuIndex = e(this.getMenuIndex, this), this.calcSizes = e(this.calcSizes, this);
                var t, n, i;
                this.$container = $("[data-activity-nav-container]"), this.$content = $("[data-activity-nav-content]"), this.$content_links = $("[data-activity-nav-content-link]"), this.$menus = $("[data-activity-nav]"), this.$links = $("[data-activity-nav-link]"), this.$menus = $("[data-activity-nav]"), this.$parent = $("[data-menu-submenu]"), this.menus = function() {
                    var e, r, o, s;
                    for (o = this.$menus, s = [], i = e = 0, r = o.length; r > e; i = ++e) n = o[i], t = $(this.$links[i]), n = $(n), s.push({
                        $menu: n,
                        $link: t,
                        height: 0 === n.height() ? 0 : n.height() + 40,
                        top: n.position().top
                    });
                    return s
                }.call(this), this.$links.on("mouseenter focus", this.openMenuFromLink), this.$links.on("mouseleave blur", this.closeMenu), this.$links.on("keydown", this.keydownLink), this.$container.on("mouseenter", this.preventTimeout), this.$container.on("mouseleave", this.closeMenu), this.$content_links.on("focus", this.focusMenu), this.$content_links.on("blur", this.closeMenu), this.$content_links.on("keydown", this.keydownContentLink), $(window).on("resize orientationchange", this.calcSizes), this.open = !1, this.menu_timeout = setTimeout(null, 0), this.container_timeout = setTimeout(null, 0)
            }
            return t.prototype.calcSizes = function() {
                var t, e, n, i;
                for (i = this.menus, t = 0, e = i.length; e > t; t++) n = i[t], n.height = 0 === n.$menu.height() ? 0 : n.$menu.height() + 40, n.top = n.$menu.position().top
            }, t.prototype.getMenuIndex = function(t) {
                return this.$menus.index(t)
            }, t.prototype.getLinkIndex = function(t) {
                return this.$links.index($(t.currentTarget))
            }, t.prototype.setContentStartPosition = function(t) {
                this.$content.addClass("no-transition"), this.$content.css({
                    top: "-" + t.top + "px"
                }), this.$content[0].offsetHeight, this.$content.removeClass("no-transition")
            }, t.prototype.openMenu = function(t) {
                window.UFCGym.current_breakpoint && window.UFCGym.current_breakpoint.breakpoint < 3 || (this.preventTimeout(), this.open || this.setContentStartPosition(t), this.$container.height(t.height), this.$content.css({
                    top: "-" + t.top + "px"
                }), this.$links.not(t.$link).removeClass("js-active"), t.$link.addClass("js-active"), this.$parent.addClass("js-active"), this.open = !0)
            }, t.prototype.openMenuFromLink = function(t) {
                this.openMenu(this.menus[this.getLinkIndex(t)])
            }, t.prototype.focusMenu = function(t) {
                var e;
                t.preventDefault(), t.stopPropagation(), this.$container.scrollTop(0), this.preventTimeout(), e = $(t.currentTarget).closest("[data-activity-nav]"), this.openMenu(this.menus[this.getMenuIndex(e)])
            }, t.prototype.closeMenu = function(t) {
                this.timeout = setTimeout(function(t) {
                    return function() {
                        return t.$container.height(0), t.$links.removeClass("js-active"), t.$parent.removeClass("js-active"), t.open = !1
                    }
                }(this), 250)
            }, t.prototype.keydownLink = function(t) {
                var e;
                38 === t.which && (t.preventDefault(), t.stopPropagation(), e = $(t.currentTarget), e.closest("[data-sub-menu]").siblings("a").focus()), 40 === t.which && (t.preventDefault(), t.stopPropagation(), this.menus[this.getLinkIndex(t)].$menu.find("a").first().focus())
            }, t.prototype.keydownContentLink = function(t) {
                var e, n;
                38 === t.which && (t.preventDefault(), t.stopPropagation(), e = $(t.currentTarget).closest("[data-activity-nav]"), n = this.menus[this.getMenuIndex(e)], n.$link.focus()), 27 === t.which && (t.preventDefault(), t.stopPropagation(), this.closeMenu())
            }, t.prototype.preventTimeout = function() {
                clearTimeout(this.timeout)
            }, t
        }(), window.UFCGym.ActivityMenus = t, $(window).load(function() {
            new window.UFCGym.ActivityMenus
        })
    }.call(this),
    function() {
        var t;
        t = function() {
            function t(t) {
                this.$el = t, this.$billingAddressCheckbox = this.$el.find("[data-purchase-billing-address]"), this.$billingAddressFields = this.$el.find("[data-billing-address-fields]"), this.$billingAddressCheckbox.on("change", this.setFieldVisibility.bind(this)), this.setFieldVisibility()
            }
            return t.prototype.setFieldVisibility = function(t) {
                return this.$billingAddressCheckbox.is(":checked") ? this.$billingAddressFields.hide() : this.$billingAddressFields.show()
            }, t
        }(), window.UFCGym.BillingForm = t, $(function() {
            new window.UFCGym.BillingForm($("[data-billing-form]"))
        })
    }.call(this),
    function() {
        var t;
        t = function() {
            function t(t) {
                var n, i;
                this.$el = t, n = window.UFCGym.LocationsStore.myLocation(), n && (i = _.filter(window.UFCGym.LocationsStore.withinRadius(n, e), function(t) {
                    return t.offers_bjj
                }), i.length > 0 && this.renderLocations(i))
            }
            var e;
            return e = 50, t.prototype.renderLocations = function(t) {
                var e;
                return e = JST["application/templates/bjj_location_list"]({
                    locations: t
                }), this.$el.prepend(e)
            }, t
        }(), window.UFCGym.BJJNearbyLocations = t, $(function() {
            return $("[data-bjj-locations]").each(function(t, e) {
                new window.UFCGym.BJJNearbyLocations($(e));
            })
        })
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.stopPropagation = e(this.stopPropagation, this), this.closeSubmenu = e(this.closeSubmenu, this), this.openSubmenu = e(this.openSubmenu, this), this.toggleSubmenu = e(this.toggleSubmenu, this), null != t && (this.$html = $("html,body"), this.$body = $("[data-document-body]"), this.$el = t, this.$submenu = this.$el.find("ul"), this.$main_menu_open = $("[data-menu-open]"), this.scroll_top = 0, this.$el.on("click", this.toggleSubmenu), this.$submenu.on("click", this.stopPropagation), this.$main_menu_open.on("click", this.closeSubmenu))
            }
            return t.prototype.toggleSubmenu = function(t) {
                t.preventDefault(), this.$submenu.hasClass("bjj-menu__submenu--is-open") ? this.closeSubmenu() : this.openSubmenu()
            }, t.prototype.openSubmenu = function(t) {
                t && t.preventDefault(), this.$el.addClass("bjj-menu__item--has-submenu--is-expanded"), this.$submenu.addClass("bjj-menu__submenu--is-open")
            }, t.prototype.closeSubmenu = function(t) {
                t && t.preventDefault(), this.$el.removeClass("bjj-menu__item--has-submenu--is-expanded"), this.$submenu.removeClass("bjj-menu__submenu--is-open")
            }, t.prototype.stopPropagation = function(t) {
                t.stopPropagation()
            }, t
        }(), window.UFCGym.BJJSubmenu = t
    }.call(this),
    function() {
        var t;
        t = function() {
            function t(t) {
                this.$el = t, this.update(), this.$el.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", _.bind(this.update, this))
            }
            return t.prototype.update = function() {
                var t;
                t = this.breakpoint, this.breakpoint = this.getBreakpointIndex(window.getComputedStyle(this.$el[0], ":after").getPropertyValue("content")), window.UFCGym.Events.trigger("breakpoint_change", {
                    current: this.breakpoint,
                    pervious: t
                })
            }, t.prototype.is = function(t) {
                return this.getBreakpointIndex(t) <= this.breakpoint
            }, t.prototype.exactly = function(t) {
                return this.getBreakpointIndex(t) === this.breakpoint
            }, t.prototype.getBreakpointIndex = function(t) {
                var e, n, i, r, o;
                for (t = t.replace(/^"(.*)"$/, "$1"), r = this.breakpoints, n = e = 0, i = r.length; i > e; n = ++e)
                    if (o = r[n], t === o) return n;
                return !1
            }, t.prototype.breakpoints = ["mobile", "phablet", "tablet", "laptop", "desktop"], t
        }(), window.UFCGym.Breakpoint = t, $(function() {
            return window.UFCGym.current_breakpoint = new window.UFCGym.Breakpoint($("[data-media-query]"))
        })
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.openTileLink = e(this.openTileLink, this);
                var n;
                this.$el = t, n = this.$el.find("[data-clickable-tile-link]"), this.href = n.attr("href"), this.target = n.attr("target"), this.href && (this.$el.css("cursor", "pointer"), this.$el.on("click", this.openTileLink))
            }
            return t.prototype.openTileLink = function(t) {
                null != this.target ? window.open(this.href, this.target) : window.location.href = this.href
            }, t
        }(), window.UFCGym.ClickableTile = t, $(function() {
            $("[data-clickable-tile]").each(function() {
                new window.UFCGym.ClickableTile($(this))
            })
        })
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t() {
                this.resetErrorState = e(this.resetErrorState, this), this.applyErrorState = e(this.applyErrorState, this), this.submitForm = e(this.submitForm, this), this.$form = $("[data-contact-form]"), this.$wrapper = this.$form.closest("[data-contact-form-wrapper]"), this.$form.on("submit", this.submitForm)
            }
            return t.prototype.submitForm = function(t) {
                return t.preventDefault(), $.ajax({
                    method: "POST",
                    data: this.$form.serialize(),
                    url: this.$form.attr("action")
                }).done(function(t) {
                    return function(e) {
                        return t.$wrapper.html(e.html)
                    }
                }(this)).error(function(t) {
                    return function(e) {
                        return t.applyErrorState(e.responseJSON.errors)
                    }
                }(this))
            }, t.prototype.applyErrorState = function(t) {
                return this.resetErrorState(), t.email && this.$form.find('[name="contact_request[email]"]').closest(".form-layout__input-group").addClass("form-layout__input-group__with-error"), t.body ? this.$form.find('[name="contact_request[body]"]').closest(".form-layout__input-group").addClass("form-layout__input-group__with-error") : void 0
            }, t.prototype.resetErrorState = function() {
                return this.$form.find("input, textarea").each(function(t, e) {
                    return $(e).closest(".form-layout__input-group").removeClass("form-layout__input-group__with-error")
                })
            }, t
        }(), window.UFCGym.ContactRequestForm = t, $(function() {
            var t;
            t = new window.UFCGym.ContactRequestForm
        })
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t() {
                this.resetErrorState = e(this.resetErrorState, this), this.applyErrorState = e(this.applyErrorState, this), this.submitForm = e(this.submitForm, this), this.$form = $("[data-event-rsvp-form]"), this.$form.on("submit", this.submitForm)
            }
            return t.prototype.submitForm = function(t) {
                return t.preventDefault(), $.ajax({
                    method: "POST",
                    data: this.$form.serialize(),
                    url: this.$form.attr("action")
                }).done(function(t) {
                    return function(e) {
                        return t.$form.html(e.html)
                    }
                }(this)).error(function(t) {
                    return function(e) {
                        return t.applyErrorState(e.responseJSON.errors)
                    }
                }(this))
            }, t.prototype.applyErrorState = function(t) {
                return this.resetErrorState(), t.email && this.$form.find('[name="event_rsvp[email]"]').closest(".form-layout__input-group").addClass("form-layout__input-group__with-error"), t.over_18 ? this.$form.find('[name="event_rsvp[over_18]"]').closest(".form-layout__input-group").addClass("form-layout__input-group__with-error") : void 0
            }, t.prototype.resetErrorState = function() {
                return this.$form.find("input, textarea, checkbox").each(function(t, e) {
                    return $(e).closest(".form-layout__input-group").removeClass("form-layout__input-group__with-error")
                })
            }, t
        }(), window.UFCGym.EventRsvpForm = t, $(function() {
            var t;
            t = new window.UFCGym.EventRsvpForm
        })
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t() {
                this.resetErrorState = e(this.resetErrorState, this), this.applyErrorState = e(this.applyErrorState, this), this.submitForm = e(this.submitForm, this), this.closeFeedback = e(this.closeFeedback, this), this.openFeedback = e(this.openFeedback, this), this.$el = $("[data-feedback-form]"), this.$tab = this.$el.find("[data-feedback-form-toggle]"), this.$content = this.$el.find("[data-feedback-form-content]"), this.$close_link = this.$el.find("[data-feedback-form-close]"), this.$thanks = this.$el.find("[data-feedback-form-thanks]"), this.$form = this.$content.find("form"), this.$tab.on("click", this.openFeedback), this.$close_link.on("click", this.closeFeedback), this.$form.on("submit", this.submitForm)
            }
            return t.prototype.openFeedback = function(t) {
                return t.preventDefault(), this.$el.addClass("feedback-form__opened"), this.$tab.hide(), this.$content.show()
            }, t.prototype.closeFeedback = function(t) {
                return t.preventDefault(), this.$el.removeClass("feedback-form__opened"), this.$content.hide(), this.$tab.show()
            }, t.prototype.submitForm = function(t) {
                return t.preventDefault(), $.ajax({
                    method: "POST",
                    data: this.$form.serialize(),
                    url: this.$form.attr("action")
                }).done(function(t) {
                    return function(e) {
                        return t.$thanks.show(), t.$form.hide()
                    }
                }(this)).error(function(t) {
                    return function(e) {
                        return t.applyErrorState(e.responseJSON.errors)
                    }
                }(this))
            }, t.prototype.applyErrorState = function(t) {
                return this.resetErrorState(), t.email && this.$form.find('[name="feedback[email]"]').closest(".form-layout__input-group").addClass("form-layout__input-group__with-error"), t.name && this.$form.find('[name="feedback[name]"]').closest(".form-layout__input-group").addClass("form-layout__input-group__with-error"), t.title && this.$form.find('[name="feedback[title]"]').closest(".form-layout__input-group").addClass("form-layout__input-group__with-error"), t.body ? this.$form.find('[name="feedback[body]"]').closest(".form-layout__input-group").addClass("form-layout__input-group__with-error") : void 0
            }, t.prototype.resetErrorState = function() {
                return this.$form.find("input, textarea").each(function(t, e) {
                    return $(e).closest(".form-layout__input-group").removeClass("form-layout__input-group__with-error")
                })
            }, t
        }(), window.UFCGym.FeedbackForm = t, $(function() {
            var t;
            t = new window.UFCGym.FeedbackForm
        })
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.position = e(this.position, this), _.extend(this, window.Events), this.$el = t, this.$main_wrapper = $("[data-main-wrapper]"), this.$window = $(window), this.$window.on("resize orientationchange", this.position), this.listenTo(window.UFCGym.Events, "user_location_now_known, microsite_submenu_loaded, schedule_loaded", this.position), this.position()
            }
            return t.prototype.position = function() {
                this.$el.height() + this.$main_wrapper.height() + this.$main_wrapper.offset().top < this.$window.height() ? this.$el.addClass("global-footer--fixed") : this.$el.removeClass("global-footer--fixed")
            }, t
        }(), window.UFCGym.GlobalFooter = t, $(function() {
            new window.UFCGym.GlobalFooter($("[data-global-footer]"))
        })
    }.call(this),
    function() {
        var t, e, n = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        e = {
            zoom: 5,
            maxZoom: 15,
            scrollwheel: !1,
            mapTypeControl: !1,
            streetViewControl: !1,
            styles: [{
                featureType: "administrative.province",
                elementType: "all",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "landscape",
                elementType: "all",
                stylers: [{
                    saturation: -100
                }, {
                    lightness: 65
                }, {
                    visibility: "on"
                }]
            }, {
                featureType: "landscape.natural",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#ffffff \xa0"
                }]
            }, {
                featureType: "poi",
                elementType: "all",
                stylers: [{
                    saturation: -100
                }, {
                    lightness: 51
                }, {
                    visibility: "simplified"
                }]
            }, {
                featureType: "road.highway",
                elementType: "all",
                stylers: [{
                    saturation: -100
                }, {
                    visibility: "simplified"
                }]
            }, {
                featureType: "road.arterial",
                elementType: "all",
                stylers: [{
                    saturation: -100
                }, {
                    lightness: 30
                }, {
                    visibility: "on"
                }]
            }, {
                featureType: "road.local",
                elementType: "all",
                stylers: [{
                    saturation: -100
                }, {
                    lightness: 40
                }, {
                    visibility: "on"
                }]
            }, {
                featureType: "transit",
                elementType: "all",
                stylers: [{
                    saturation: -100
                }, {
                    visibility: "simplified"
                }]
            }, {
                featureType: "water",
                elementType: "geometry",
                stylers: [{
                    hue: "#ffff00 \xa0"
                }, {
                    lightness: -25
                }, {
                    saturation: -97
                }]
            }, {
                featureType: "water",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#a7a9ad \xa0"
                }]
            }, {
                featureType: "water",
                elementType: "labels",
                stylers: [{
                    visibility: "on"
                }, {
                    lightness: -25
                }, {
                    saturation: -100
                }]
            }]
        }, t = function() {
            function t(t) {
                this.renderSearchResults = n(this.renderSearchResults, this), this.searchMapBounds = n(this.searchMapBounds, this), this.searchByQuery = n(this.searchByQuery, this), this.removeEventHandlers = n(this.removeEventHandlers, this), this.addEventHandlers = n(this.addEventHandlers, this), this.setActiveLocation = n(this.setActiveLocation, this), this.generateMarker = n(this.generateMarker, this), this.generateMarkerIcon = n(this.generateMarkerIcon, this), this.markerIconDims = n(this.markerIconDims, this), this.initMap = n(this.initMap, this), _.extend(this, window.Events), this.$el = t, this.$map_small = this.$el.find("[data-map-container-small]"), this.$map_large = this.$el.find("[data-map-container-large]"), this.$form = this.$el.find("[data-location-search-form]"), this.$input = this.$el.find("[data-location-search-input]"), this.$button = this.$el.find("[data-location-search-button]"), this.$myGym = this.$el.find("[data-location-search-my-gym]"), this.$results = this.$el.find("[data-location-search-results]"), this.$form.on("submit", this.searchByQuery), this.$el.on("click", "[data-set-location-explicitly]", _.bind(this.setExplicitly, this)), this.data = [], Cookies.get("user_location") ? this.initMap() : $("[data-super-nav]").data("attempted_geolocation") ? this.initMap() : this.listenTo(window.UFCGym.Events, "user_location_now_known", function(t) {
                    return function() {
                        return t.initMap()
                    }
                }(this)), this.listenTo(window.UFCGym.Events, "breakpoint_change", function(t) {
                    return function() {
                        var e;
                        e = t.bounds.getCenter(), t.drawMap({
                            lat: e.lat(),
                            lng: e.lng()
                        }), window.UFCGym.current_breakpoint.breakpoint > 2 && t.showMyGym()
                    }
                }(this))
            }
            return t.prototype.setExplicitly = function(t) {
                var e;
                return t.preventDefault(), e = $(t.target).closest("a"), $.ajax({
                    url: e.attr("href"),
                    method: "PUT"
                }).done(function(t) {
                    return function(n) {
                        var i;
                        return (i = e.data("return-to")) ? window.location = e.data("return-to") : ($("nav.super-nav").replaceWith(n), t.$input.val().length > 0 ? t.searchByQuery() : t.searchMapBounds(), t.renderMyGym())
                    }
                }(this)).error(function(t) {
                    return function(t) {
                        return console.log("ERROR")
                    }
                }(this))
            }, t.prototype.initMap = function() {
                var t;
                t = window.UFCGym.LocationsStore.myLocation(), t ? this.drawMap({
                    lat: t.latitude,
                    lng: t.longitude
                }) : this.drawMap({
                    // lat: 13.0206651,
                    // lng: 77.6470955
                    lat: 23.2429838,
                    lng: 74.0562102
                }), window.google.maps.event.addListenerOnce(this.map, "idle", function(t) {
                    return function() {
                        return t.searchMapBounds(), t.renderMyGym()
                    }
                }(this))
            }, t.prototype.drawMap = function(t) {
                var n;
                return e = _.extend(e, {
                    center: t
                }), n = window.UFCGym.current_breakpoint.breakpoint < 3 ? this.$map_small : this.$map_large, n !== this.$currentMapEl ? (this.$currentMapEl = n, this.map = new google.maps.Map(this.$currentMapEl[0], e), this.drawMarkers()) : void 0
            }, t.prototype.markerIconDims = function() {
                return this._markerIconDims ? this._markerIconDims : this._markerIconDims = {
                    franchise: {
                        "default": {
                            size: new google.maps.Size(71, 71),
                            anchor: new google.maps.Point(18.25, 18.25),
                            scaledSize: new google.maps.Size(37, 37)
                        },
                        active: {
                            size: new google.maps.Size(146, 146),
                            anchor: new google.maps.Point(37, 37),
                            scaledSize: new google.maps.Size(74, 74)
                        }
                    },
                    signature: {
                        "default": {
                            size: new google.maps.Size(180, 115),
                            anchor: new google.maps.Point(45, 18.25),
                            scaledSize: new google.maps.Size(90, 58)
                        },
                        active: {
                            size: new google.maps.Size(180, 185),
                            anchor: new google.maps.Point(45, 37),
                            scaledSize: new google.maps.Size(90, 96)
                        }
                    }
                }
            }, t.prototype.generateMarkerIcon = function(t, e, n) {
                var i, r, o, s, a;
                return o = "signature" === t.location_type, e = "undefined" != typeof e && e === !0, r = t.slug === Cookies.get("user_location") ? "mine" : n + 1, a = "https://d3h2xv1tt1z2ui.cloudfront.net/assets/location-markers/marker_" + r, o && (a += "_signature"), e && (a += "_active"), a += ".png", s = e ? "active" : "default", i = {
                    url: a,
                    size: this.markerIconDims()[t.location_type][s].size,
                    anchor: this.markerIconDims()[t.location_type][s].anchor,
                    scaledSize: this.markerIconDims()[t.location_type][s].scaledSize
                }
            }, t.prototype.generateMarker = function(t, e, n) {
                var i, r, o;
                return i = this.generateMarkerIcon(e, n, t), r = new google.maps.Marker({
                    active: n,
                    index: t,
                    icon: i,
                    position: new google.maps.LatLng(e.latitude, e.longitude)
                }), o = this, google.maps.event.addListener(r, "click", function() {
                    o.setActiveLocation(this.index)
                }), r
            }, t.prototype.setActiveLocation = function(t) {
                var e, n, i, r, o;
                this.data.length > t && (_.each(this.data, function(t) {
                    return t.el.find("[data-gym-location-index]").removeClass("gym-location__index--active")
                }), this.data[t].el.find("[data-gym-location-index]").addClass("gym-location__index--active"), e = this.data[t].el, n = e.prev().prev("h2"), n.length && (e = n), i = e.offset().top - parseInt(e.css("margin-top"), 10), r = this.data[t].el.closest(".locate-gym__scroll-content"), o = r.offset().top, r.animate({
                    scrollTop: r.scrollTop() + i - o,
                    duration: 200
                }), _.each(this.data, function(t) {
                    return function(e, n) {
                        return e.marker.active ? (e.marker.active = !1, e.marker.setIcon(t.generateMarkerIcon(e.location, !1, n))) : void 0
                    }
                }(this)), this.data[t].marker.active = !0, this.data[t].marker.setIcon(this.generateMarkerIcon(this.data[t].location, !0, t)))
            }, t.prototype.drawMarkers = function() {
                var t, e, n, i;
                for (i = this.data, e = 0, n = i.length; n > e; e++) t = i[e], t.marker.setMap(this.map)
            }, t.prototype.clearData = function() {
                var t, e, n, i;
                for (i = this.data, e = 0, n = i.length; n > e; e++) t = i[e], t.marker.setMap(null);
                this.data = []
            }, t.prototype.fitBounds = function(t) {
                t || (t = new google.maps.LatLngBounds(t.extend(new google.maps.LatLng(12.9692055,77.5980128)), t.extend(new google.maps.LatLng(34.0105127,130.4523315)))), this.map.fitBounds(t)
            }, t.prototype.offsetCenter = function() {
                var t, e, n, i;
                window.UFCGym.current_breakpoint.breakpoint < 3 || (t = this.map.getCenter(), i = this.map.getBounds().toSpan(), n = 3 === window.UFCGym.current_breakpoint.breakpoint ? .175 : .25, e = {
                    lat: t.lat(),
                    lng: t.lng() - i.lng() * n
                }, this.map.panTo(e))
            }, t.prototype.renderMyGym = function() {
                var t, e;
                e = window.UFCGym.LocationsStore.myLocation(), e ? (t = JST["application/templates/my_gym_location"]({
                    location: e,
                    header: {
                        subtitle: "MY GYM"
                    },
                    source: this.queryParam("source"),
                    "package": this.queryParam("package")
                }), this.$myGym.html(t), this.showMyGym()) : (this.$myGym.html(""), this.hideMyGym())
            }, t.prototype.showMyGym = function() {
                this.$myGym.show()
            }, t.prototype.hideMyGym = function() {
                window.UFCGym.current_breakpoint.breakpoint < 3 && this.$myGym.hide()
            }, t.prototype.addEventHandlers = function() {
                return window.google.maps.event.addListenerOnce(this.map, "bounds_changed", function(t) {
                    return function() {
                        return window.google.maps.event.addListenerOnce(t.map, "idle", function() {
                            return t.searchMapBounds()
                        })
                    }
                }(this))
            }, t.prototype.removeEventHandlers = function() {
                return window.google.maps.event.clearListeners(this.map, "bounds_changed"), window.google.maps.event.clearListeners(this.map, "idle")
            }, t.prototype.searchByQuery = function(t) {
                var e, n;
                return t && t.preventDefault(), this.removeEventHandlers(), n = this.$input.val(), e = new google.maps.Geocoder, e.geocode({
                    address: n
                }, function(t) {
                    return function(e, n) {
                        var i;
                        return i = n === google.maps.GeocoderStatus.OK ? e[0].geometry.viewport : null, t.fitBounds(i), t.map.getZoom() > 12 ? t.map.setZoom(t.map.getZoom() - 3) : t.map.getZoom() > 10 ? t.map.setZoom(t.map.getZoom() - 2) : t.map.getZoom() > 8 && t.map.setZoom(t.map.getZoom() - 1), t.searchMapBounds(), t.hideMyGym()
                    }
                }(this))
            }, t.prototype.searchMapBounds = function() {
                var t, e, n, i, r, o, s;
                return this.removeEventHandlers(), this.clearData(), t = this.map.getBounds(), e = t.getCenter(), s = t.getSouthWest(), r = t.getNorthEast(), n = s.lng(), o = r.lng(), t = new google.maps.LatLngBounds(new google.maps.LatLng(s.lat(), n), new google.maps.LatLng(r.lat(), r.lng())), i = window.UFCGym.LocationsStore.withinBounds(t, e), this.renderSearchResults({
                    locations: i,
                    bounds: t,
                    subtitle: "AROUND YOU"
                }), this.addEventHandlers()
            }, t.prototype.renderSearchResults = function(t) {
                var e;
                return this.data = _.map(t.locations, function(t) {
                    return function(e, n) {
                        return {
                            location: e,
                            marker: t.generateMarker(n, e, 0 === n)
                        }
                    }
                }(this)), this.bounds = t.bounds, e = $(JST["application/templates/location_search_results"]({
                    locations: t.locations,
                    source: this.queryParam("source"),
                    "package": this.queryParam("package"),
                    header: {
                        subtitle: t.subtitle
                    }
                })), _.each(this.data, function(t) {
                    return t.el = e.find('[data-location-slug="' + t.location.slug + '"]')
                }), this.drawMarkers(), this.$results.html(e), this.setActiveLocation(0)
            }, t.prototype.queryParam = function(t) {
                var e;
                return (e = _.find(window.location.search.substring(1).split("&"), function(e) {
                    return 0 === e.indexOf(t)
                })) ? e.substring(t.length + 1) : void 0
            }, t
        }(), window.UFCGym.GymLocator = t, window.google && window.google.maps.event.addDomListener(window, "load", function() {
            var t;
            t = $("[data-locate-gym]"), t.is("*") && new window.UFCGym.GymLocator(t)
        })
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.resize = e(this.resize, this), _.extend(this, window.Events), this.$el = t, this.$content_wrapper = this.$el.find("[data-content-wrapper]"), this.$centering_wrapper = this.$el.find("[data-centering-wrapper]"), this.$window = $(window), this.$window.on("resize orientationchange", this.resize), this.resize()
            }
            return t.prototype.resize = function() {
                var t, e;
                t = this.$content_wrapper.height(), e = this.$centering_wrapper.height(), e >= t ? this.$content_wrapper.height(e) : this.$content_wrapper.css("height", "auto")
            }, t
        }(), window.UFCGym.Hero = t, $(function() {
            $("[data-hero]").each(function() {
                new window.UFCGym.Hero($(this))
            })
        })
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.scroll = e(this.scroll, this), this.$el = t, this.$hero = this.$el.parent(), this.$main_wrapper = $("[data-main-wrapper]"), this.$el.on("click", this.scroll)
            }
            return t.prototype.scroll = function() {
                var t;
                t = this.$hero.offset().top + this.$hero.outerHeight() - this.$main_wrapper.offset().top, $("html,body").animate({
                    scrollTop: t + "px"
                })
            }, t
        }(), window.UFCGym.HeroScroll = t, $(function() {
            $("[data-hero-scroll]").each(function() {
                new window.UFCGym.HeroScroll($(this))
            })
        })
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.play = e(this.play, this), this.pause = e(this.pause, this), this.$el = t, window.UFCGym.current_breakpoint.breakpoint < 3 || (this.initVideo(), this.$window = $(window), this.$window.on("focus", this.play), this.$window.on("blur", this.pause))
            }
            return t.prototype.initVideo = function() {
                var t;
                t = this.$el.find("video"), t.is("*") ? (this.$video = t, this.video = this.$video[0]) : this.renderVideo(), this.$video.on("ended", function(t) {
                    return function() {
                        t.video.currentTime = 0, t.video.play()
                    }
                }(this)), this.video.play()
            }, t.prototype.pause = function() {
                this.video.pause()
            }, t.prototype.play = function() {
                this.video.play()
            }, t.prototype.renderVideo = function() {
                var t;
                t = $('<div class="hero-module__video-wrapper hero-module__video-wrapper--is-invisible">'), this.$video = $('<video class="hero-module__video" muted>'), this.video = this.$video[0], _.each(this.$el.data("heroVideoUrls").split(","), function(t) {
                    return function(e) {
                        var n;
                        return n = e.match(/.*?\.(mp4|webm|ogv)$/)[1], n ? t.$video.append('<source src="' + e + '" type="video/' + n + '">') : void 0
                    }
                }(this)), t.html(this.$video), this.$el.addClass("video-mode"), this.$el.html(t), setTimeout(function() {
                    return t.removeClass("hero-module__video-wrapper--is-invisible")
                }, 1)
            }, t
        }(), window.UFCGym.HeroVideo = t, $(function() {
            $("[data-hero-video]").each(function() {
                new window.UFCGym.HeroVideo($(this))
            })
        })
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.fetchImages = e(this.fetchImages, this), this.$el = t, this.api_url = this.$el.data("instagramUrl"), this.$list = this.$el.find("[data-instagram-gallery-list]"), this.fetchImages()
            }
            return t.prototype.fetchImages = function() {
                $.ajax({
                    method: "POST",
                    url: this.api_url
                }).done(function(t) {
                    return function(e) {
                        t.$list.html(e)
                    }
                }(this))
            }, t
        }(), window.UFCGym.InstagramGallery = t, $(function() {
            return $("[data-instagram-gallery]").each(function() {
                new window.UFCGym.InstagramGallery($(this))
            })
        })
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.resize = e(this.resize, this), _.extend(this, window.Events), this.$el = t, this.$content_wrapper = this.$el.find("[data-content-wrapper]"), this.$main_wrapper = $("[data-main-wrapper]"), this.$window = $(window), this.$window.on("resize orientationchange", this.resize), this.listenTo(window.UFCGym.Events, "user_location_now_known microsite_submenu_loaded", this.resize), this.resize()
            }
            return t.prototype.resize = function() {
                var t, e, n, i, r, o;
                i = this.$window.height() - this.$main_wrapper.offset().top, window.UFCGym.current_breakpoint.breakpoint > 2 ? (r = .5625 * this.$window.width(), i = r > 800 ? 800 : i, i = i > r ? r : i, i = 640 > i ? 640 : i) : (t = $("[data-lead-gen-ribbon]"), t.is("*") && (i -= t.height())), e = $("[data-meta-info]"), e.is("*") && (i -= e.height()), n = $("[data-offer]"), n.is("*") && (o = window.UFCGym.current_breakpoint.breakpoint >= 2 ? .7 : 1, i -= n.height() * o, window.UFCGym.current_breakpoint.breakpoint < 2 && (i -= 60)), this.$el.outerHeight(i), this.$content_wrapper.outerHeight(i)
            }, t
        }(), window.UFCGym.LargeHero = t, $(function() {
            $("[data-hero-large]").each(function() {
                new window.UFCGym.LargeHero($(this))
            })
        })
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.$el = t, this.confirmLocation = e(this.confirmLocation, this), this.locationIsExplicit = e(this.locationIsExplicit, this), this.locationIsKnown = e(this.locationIsKnown, this), this.setStateBasedOnCookies = e(this.setStateBasedOnCookies, this), _.extend(this, window.Events), this.$location_name = this.$el.find('[name="lead[location_name]"]'), this.$location_id = this.$el.find('[name="lead[location_id]"]'), this.$confirm_link = this.$el.find("[data-change-gym-link]"), this.$form_label = this.$el.find("[data-my-gym-label]"), this.$location_group = this.$location_name.closest(".form-layout__input-group"), this.$confirm_link.on("click", this.confirmLocation), this.setStateBasedOnCookies(), this.$location_id.val() || this.listenTo(window.UFCGym.Events, "user_location_now_known", function(t) {
                    return function(e) {
                        return t.$location_name.val(e.locationName), t.$location_id.val(e.locationId), t.setStateBasedOnCookies()
                    }
                }(this))
            }
            return t.prototype.setStateBasedOnCookies = function() {
                return this.locationIsKnown() ? this.locationIsExplicit() ? (this.$form_label.text("My Gym"), this.$location_group.removeClass("form-layout__input-group__with-error"), this.$confirm_link.hide()) : (this.$form_label.text("Is This Your Gym?"), this.$location_group.removeClass("form-layout__input-group__with-error"), this.$confirm_link.show()) : (this.$form_label.text("My Gym"), this.$location_group.addClass("form-layout__input-group__with-error"), this.$confirm_link.hide())
            }, t.prototype.locationIsKnown = function() {
                return !!Cookies.get("user_location")
            }, t.prototype.locationIsExplicit = function() {
                return "1" === Cookies.get("user_location_explicit")
            }, t.prototype.confirmLocation = function(t) {
                return this.locationIsKnown() && !this.locationIsExplicit() ? (t.preventDefault(), Cookies.set("user_location_explicit", "1"), this.setStateBasedOnCookies()) : void 0
            }, t
        }(), window.UFCGym.LeadCaptureForm = t, $(function() {
            $("[data-lead-gen-form]").each(function() {
                new window.UFCGym.LeadCaptureForm($(this))
            })
        })
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t() {
                this.handleClose = e(this.handleClose, this), this.render = e(this.render, this), this.calcOffset = e(this.calcOffset, this), this.positionRibbon = e(this.positionRibbon, this), this.$el = $("[data-lead-gen-ribbon]"), this.$el.length > 0 && (this.$close = this.$el.find("[data-close]"), this.fixed_class = "lead-gen-ribbon--fixed", this.$window = $(window), this.$close.on("click", this.handleClose), $(document).on("scroll", _.throttle(this.positionRibbon, 100)), this.$window.on("resize orientationchange", this.render), this.render())
            }
            return t.prototype.positionRibbon = function() {
                this.$window.scrollTop() + this.$window.height() < this.offset ? this.$el.addClass(this.fixed_class) : this.$el.removeClass(this.fixed_class)
            }, t.prototype.calcOffset = function() {
                var t;
                t = this.$el.hasClass(this.fixed_class), this.$el.removeClass(this.fixed_class), this.$el[0].offsetTop, this.offset = this.$el.offset().top, t && this.$el.addClass(this.fixed_class)
            }, t.prototype.render = function() {
                this.calcOffset(), this.positionRibbon()
            }, t.prototype.handleClose = function(t) {
                t.preventDefault(), this.$el.fadeOut({
                    complete: function(t) {
                        return function() {
                            t.$el.remove()
                        }
                    }(this)
                })
            }, t
        }(), window.UFCGym.LeadGenRibbon = t, $(function() {
            return new window.UFCGym.LeadGenRibbon
        })
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t, n) {
                this.$el = t, this.location = n, this.updateSearchState = e(this.updateSearchState, this), this.$dateBar = this.$el.find("[data-schedule-date-list]"), this.$table = this.$el.find("[data-daily-schedule-table]"), this.$dates = this.$el.find("[data-date-select]"), this.$searchForm = $("[data-schedule-search-form]"), this.hideEmptySections = this.$el.data("hide-empty-sections"), this.currentSlide = 0, this.slideIncrement = 3, this.$dateBar.on("click", "[data-date-select]", _.bind(this.onDateClick, this)), this.$el.on("click", ".class-schedule__day-part__label", function(t) {
                    return window.innerWidth < 768 ? ($(t.currentTarget.nextElementSibling).slideToggle(), $(t.currentTarget).toggleClass("expanded")) : void 0
                }), this.$el.on("click", ".class-schedule__class", function(t) {
                    var e;
                    return e = $(t.currentTarget), window.innerWidth < 768 ? (e.toggleClass("expanded"), e.find(".class-schedule__class__description--mobile").slideToggle(), e.find(".class-schedule__class__toggle").toggleClass("icon-plus").toggleClass("icon-minus")) : void 0
                }), this.$el.on("click", ".class-schedule__class__expand", function(t) {
                    var e;
                    return e = $(t.currentTarget).parent(), e.find(".class-schedule__class__description").is(":animated") ? void 0 : (e.find(".class-schedule__class__expand").hide(), e.find(".class-schedule__class__collapse").show(), e.find(".class-schedule__class__description").slideToggle())
                }), this.$el.on("click", ".class-schedule__class__collapse", function(t) {
                    var e;
                    return e = $(t.currentTarget).parent(), e.find(".class-schedule__class__description").is(":animated") ? void 0 : (e.find(".class-schedule__class__expand").show(), e.find(".class-schedule__class__collapse").hide(), e.find(".class-schedule__class__description").slideToggle())
                }), this.loadFirstDate(), this.$dateBar.slick({
                    infinite: !1,
                    initialSlide: this.currentSlide,
                    mobileFirst: !0,
                    prevArrow: ".class-schedule__date-list-header__prev",
                    nextArrow: ".class-schedule__date-list-header__next",
                    slidesToScroll: this.slideIncrement,
                    responsive: [{
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 7
                        }
                    }, {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 5
                        }
                    }, {
                        breakpoint: 0,
                        settings: {
                            slidesToShow: 3
                        }
                    }]
                }), this.slick = this.$dateBar.slick("getSlick"), this.slick.$slider.on("afterChange", function(t) {
                    return function(e, n, i) {
                        return i > t.currentSlide ? (t.onAfterSlide("next"), t.currentSlide = i) : i < t.currentSlide ? (t.onAfterSlide("prev"), t.currentSlide = i) : void 0
                    }
                }(this)), this.$searchForm && this.initializeSearchForm()
            }
            return t.prototype.loadFirstDate = function() {
                return this.$dates.eq(this.currentSlide).trigger("click")
            }, t.prototype.onDateClick = function(t) {
                return t.preventDefault(), this.fetchSchedule($(t.currentTarget).attr("href")), $(".class-schedule__day-part").css("opacity", 0), this.$dates.removeClass("active"), $(t.currentTarget).addClass("active")
            }, t.prototype.onAfterSlide = function(t) {
                var e, n, i, r, o, s;
                if (this.$dates = this.$el.find("[data-date-select]"), s = Math.round(this.slick.listWidth / this.slick.slideWidth), this.slick.currentSlide + s >= this.slick.slideCount - this.slideIncrement) {
                    for (i = new Date(this.$dates.last().data("date-string")).getTime() + 6e4 * (new Date).getTimezoneOffset(), o = [], e = n = 1, r = this.slideIncrement; r >= 1 ? r >= n : n >= r; e = r >= 1 ? ++n : --n) o.push(this.slick.slickAdd(this.createDateElement(i + 864e5 * e), !1));
                    return o
                }
            }, t.prototype.fetchSchedule = function(t) {
                return $.ajax({
                    method: "GET",
                    url: t,
                    data: {
                        hide_empty_sections: this.hideEmptySections
                    }
                }).done(function(t) {
                    return function(e) {
                        return t.$table.html(e), window.UFCGym.Events.trigger("schedule_loaded")
                    }
                }(this))
            }, t.prototype.createDateElement = function(t) {
                var e, n, i, r, o;
                return t = new Date(t), o = t.getFullYear(), r = t.getMonth() + 1, n = t.getDate(), i = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][t.getDay()], e = t.getFullYear() + "-" + (parseInt(r, 10) > 9 ? r : "0" + r) + "-" + (parseInt(n, 10) > 9 ? n : "0" + n), '<a class="class-schedule__date" data-date-select="true" data-date-string="' + e + '" href="/api/locations/' + this.location + "/schedule?end_date=" + e + "&amp;start_date=" + e + '"><div class="class-schedule__day-of-week">' + i + '</div><div class="class-schedule__day-of-month">' + r + "/" + n + "</div></a>"
            }, t.prototype.initializeSearchForm = function() {
                return this.$categorySelect = this.$searchForm.find("[data-schedule-search-form-control]"), this.$categorySelect.on("change", this.updateSearchState)
            }, t.prototype.updateSearchState = function(t) {
                var e;
                return e = this.$categorySelect.val(), this.$el.find("[data-activity-item]").show(), e ? this.$el.find("[data-activity-item]").each(function(t, n) {
                    return $(n).data("activity-category") !== e ? $(n).hide() : void 0
                }) : void 0
            }, t
        }(), window.UFCGym.LocationScheduleLoader = t
    }.call(this),
    function() {
        var t, e;
        t = function() {
            function t() {}
            return t.sortByDistance = function(e, n) {
                var i;
                return i = _.clone(e), _.each(i, function(e) {
                    return e.distance = t.distanceBetween(e, n)
                }), _.sortBy(i, "distance")
            }, t.distanceBetween = function(t, e) {
                var n, i, r, o, s, a, l;
                return n = 3963.1899999999996, a = (t.latitude || t.lat()) * Math.PI / 180, l = (e.latitude || e.lat()) * Math.PI / 180, o = l - a, s = ((e.longitude || e.lng()) - (t.longitude || t.lng())) * Math.PI / 180, i = Math.sin(o / 2) * Math.sin(o / 2) + Math.cos(a) * Math.cos(l) * Math.sin(s / 2) * Math.sin(s / 2), r = 2 * Math.atan2(Math.sqrt(i), Math.sqrt(1 - i)), n * r
            }, t
        }(), e = function() {
            function e(t) {
                this.locations = t
            }
            return e.prototype.withinBounds = function(e, n) {
                var i;
                return null == n && (n = e.getCenter()), i = _.filter(this.locations, function(t) {
                    return e.contains(new google.maps.LatLng(t.latitude, t.longitude))
                }), t.sortByDistance(i, n)
            }, e.prototype.withinRadius = function(e, n) {
                var i;
                return i = _.filter(this.locations, function(i) {
                    return t.distanceBetween(i, e) <= n
                }), t.sortByDistance(i, e)
            }, e.prototype.myLocation = function() {
                return _.find(this.locations, function(t) {
                    return t.slug === Cookies.get("user_location")
                })
            }, e
        }(), window.UFCGym.LocationUtils = t, window.UFCGym.LocationsStore = new e(window.UFCGym.locations)
    }.call(this),
    function() {
        var t, e, n, i, r, o, s;
        r = "690x400", i = "2", s = "13", n = "AIzaSyARFrseR-qJrxj8O4Yl5D4oLkLFzfBI7uQ", o = [{
            featureType: "water",
            stylers: [{
                color: "#0C0C0F"
            }]
        }, {
            featureType: "administrative",
            elementType: "labels.text.stroke",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [{
                color: "#DEDEDE"
            }]
        }, {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{
                visibility: "off"
            }]
        }, {
            elementType: "labels.text.fill",
            stylers: [{
                color: "#8D8D8D"
            }]
        }, {
            featureType: "landscape",
            elementType: "labels.text.stroke",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{
                color: "#FAFBFD"
            }]
        }, {
            featureType: "poi",
            elementType: "geometry.fill",
            stylers: [{
                color: "#E1E1E1"
            }]
        }, {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#8D8D8D"
            }]
        }, {
            featureType: "poi",
            elementType: "labels.text.stroke",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "transit",
            elementType: "labels.text.fill",
            stylers: [{
                visibility: "on"
            }, {
                color: "#8D8D8D"
            }]
        }, {
            featureType: "transit",
            elementType: "labels.text.stroke",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{
                saturation: -100
            }]
        }, {
            featureType: "road",
            elementType: "labels.icon",
            stylers: [{
                saturation: -100
            }]
        }, {
            featureType: "landscape.natural",
            stylers: [{
                color: "#EAEBED"
            }]
        }, {
            featureType: "poi",
            elementType: "labels.icon",
            stylers: [{
                saturation: -100
            }]
        }], e = function(t) {
            var e, n, i, r, o, s, a, l;
            return s = function() {
                var s;
                s = [];
                for (e in t) r = t[e], o = "style=", r.featureType && (o += "feature:" + r.featureType + "|"), r.elementType && (o += "element:" + r.elementType + "|"), s.push(o += function() {
                    var t, e;
                    t = r.stylers, e = [];
                    for (n in t) a = t[n], e.push(function() {
                        var t;
                        t = [];
                        for (i in a) l = a[i], "#" === l[0] && (l = "0x" + l.slice(1)), t.push(i + ":" + l);
                        return t
                    }());
                    return e
                }());
                return s
            }(), s = s.join("&")
        }, t = function(t) {
            var a;
            return a = "https://maps.googleapis.com/maps/api/staticmap?", a += "center=" + t + "&", a += "zoom=" + s + "&", a += "size=" + r + "&", a += "scale=" + i + "&", a += e(o) + "&", a += "key=" + n, encodeURI(a)
        }
    }.call(this), $(".membership-benefits__fees").on("click", function() {
        var t = $(this).find(".membership-benefits__dialog"),
            e = $(window).width(),
            n = e > 1024 ? !1 : !0;
        n && ($(".membership-benefits__dialog").not(t).hide(), t.toggle())
    }), $(".memberships__fee-wrapper").on("click", function() {
        var t = $(this).find(".memberships__fee-dialog"),
            e = $(window).width(),
            n = e > 1024 ? !1 : !0;
        n && ($(".memberships__fee-dialog").not(t).hide(), t.toggle())
    }), $(window).on("click touchstart", function(t) {
        target = $(t.target), target.hasClass("membership-benefits__fee-name") || target.hasClass("memberships__fee-name") || ($(".membership-benefits__dialog").hide(), $(".memberships__fee-dialog").hide())
    }),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.hide = e(this.hide, this), this.show = e(this.show, this), this.$el = t, this.$title = this.$el.find("[data-membership-block-title]"), this.$el.hasClass("membership-block--toggleable") && (this.$el.on("click", this.show), this.$title.on("click", this.hide))
            }
            return t.prototype.show = function(t) {
                this.$el.hasClass("membership-block--collapsed") && this.$el.removeClass("membership-block--collapsed")
            }, t.prototype.hide = function(t) {
                this.$el.hasClass("membership-block--collapsed") || (t.stopPropagation(), this.$el.addClass("membership-block--collapsed"))
            }, t
        }(), window.UFCGym.MembershipBlock = t, $(function() {
            $("[data-membership-block]").each(function() {
                new window.UFCGym.MembershipBlock($(this))
            })
        })
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.clearActiveMenuItem = e(this.clearActiveMenuItem, this), this.setActiveMenuItem = e(this.setActiveMenuItem, this), t.$menu && t.$items && t.$active_bar && (this.$menu = t.$menu, this.$items = t.$items, this.$active_bar = t.$active_bar, this.activeMenuItem = setInterval(null, 0), UFCGym.current_breakpoint.breakpoint > 2 && (this.$items.on("mouseover", this.setActiveMenuItem), this.$items.on("mouseout", this.clearActiveMenuItem)))
            }
            return t.prototype.setActiveMenuItem = function(t) {
                var e, n, i;
                clearTimeout(this.activeMenuTimeout), e = $(t.currentTarget), i = e.find("a").width(), n = e.offset().left - this.$menu.offset().left + (e.width() - i) / 2, 0 === parseInt(this.$active_bar.css("opacity"), 10) && (this.$active_bar.addClass("no-transition"), this.$active_bar.css({
                    left: n + "px",
                    width: i + "px"
                }), this.$active_bar[0].offsetHeight, this.$active_bar.removeClass("no-transition")), this.$active_bar.css({
                    opacity: 1,
                    left: n + "px",
                    width: i + "px"
                })
            }, t.prototype.clearActiveMenuItem = function(t) {
                var e;
                e = $(t.currentTarget), this.activeMenuTimeout = setTimeout(function(t) {
                    return function() {
                        t.$active_bar.css({
                            opacity: 0
                        })
                    }
                }(this), 100)
            }, t
        }(), window.UFCGym.ActiveMenuHighlight = t, $(function() {
            var e, n, i, r, o, s, a, l, u;
            return o = $("[data-main-menu]"), i = $("[data-main-menu-featured]"), r = o.find("> ul > li").not(i), e = $("[data-main-menu-active-bar]"), new t({
                $menu: o,
                $items: r,
                $active_bar: e
            }), a = $("[data-sub-menu]"), new t({
                $menu: a,
                $items: a.find("> ul > li"),
                $active_bar: $("[data-sub-menu-active-bar]")
            }), u = function() {
                var e, n, i;
                e = $("[data-main-wrapper]"), n = $("[data-microsite-menu]"), i = $("[data-microsite-submenu]"), i.length && (e.addClass("main-wrapper--microsite"), new window.UFCGym.MicrositeSubmenu(i), new t({
                    $menu: n,
                    $items: n.find("li").not(i),
                    $active_bar: $("[data-microsite-menu-action-bar]")
                })), window.UFCGym.Events.trigger("microsite_submenu_loaded")
            }, s = $("[data-microsite-menu]"), s.data("microsite-menu-loaded") ? u() : $.get("/api/locations/microsite_menu", {
                location: Cookies.get("user_location")
            }, function(t) {
                return s.replaceWith(t), u()
            }), l = function() {
                var e, n, i;
                i = $("[data-main-wrapper]"), e = $("[data-bjj-menu]"), n = $("[data-bjj-submenu]"), n.length && (new window.UFCGym.BJJSubmenu(n), new t({
                    $menu: e,
                    $items: e.find("li").not(n),
                    $active_bar: $("[data-bjj-menu-action-bar]")
                })), window.UFCGym.Events.trigger("bjj_submenu_loaded")
            }, n = $("[data-bjj-menu]"), n.data("bjj-menu-loaded") ? l() : void 0
        })
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t() {
                this.preventClick = e(this.preventClick, this), this.stopPropagation = e(this.stopPropagation, this), this.hideSubmenu = e(this.hideSubmenu, this), this.showSubmenu = e(this.showSubmenu, this), this.toggleSubmenu = e(this.toggleSubmenu, this), this.keydownSubmenu = e(this.keydownSubmenu, this), this.blurSubmenu = e(this.blurSubmenu, this), this.focusSubmenu = e(this.focusSubmenu, this), this.closeMenu = e(this.closeMenu, this), this.openMenu = e(this.openMenu, this), this.$html = $("html,body"), this.$body = $("[data-document-body]"), this.$overlay = $("[data-menu-overlay]"), this.$open = $("[data-menu-open]"), this.$close = $("[data-menu-close]"), this.$nav = $("[data-menu-nav]"), this.$submenu = $("[data-menu-submenu]"), this.$submenu_link = this.$submenu.find("> a"), this.scroll_top = 0, this.$open.on("click", this.openMenu), this.$close.on("click", this.closeMenu), this.$submenu.on("click", this.toggleSubmenu), this.$submenu_link.on("focus", this.focusSubmenu), this.$submenu_link.on("blur", this.blurSubmenu), this.$submenu_link.on("keydown", this.keydownSubmenu), this.$submenu.find("ul").on("click", this.stopPropagation), this.$overlay.on("click", this.closeMenu)
            }
            return t.prototype.openMenu = function(t) {
                t.preventDefault(), this.$nav.addClass("main-nav--is-open"), this.$overlay.addClass("menu-overlay--is-visible"), this.scroll_top = this.$html.scrollTop() ? this.$html.scrollTop() : this.$body.scrollTop(), this.$body.css("top", -this.scroll_top + "px").addClass("document-body--scroll-locked")
            }, t.prototype.closeMenu = function(t) {
                t.preventDefault(), this.$nav.removeClass("main-nav--is-open"), this.$overlay.removeClass("menu-overlay--is-visible"), this.$body.removeClass("document-body--scroll-locked").css("top", "auto"), this.$html.scrollTop(this.scroll_top)
            }, t.prototype.focusSubmenu = function(t) {
                var e, n;
                t.preventDefault(), e = $(t.currentTarget), n = e.siblings("[data-sub-menu]"), this.showSubmenu(e, n)
            }, t.prototype.blurSubmenu = function(t) {
                var e, n;
                t.preventDefault(), e = $(t.currentTarget), n = e.siblings("[data-sub-menu]"), this.hideSubmenu(e, n)
            }, t.prototype.keydownSubmenu = function(t) {
                40 === t.which && (t.preventDefault(), t.stopPropagation(), $(t.currentTarget).siblings("[data-sub-menu]").find("a").first().focus())
            }, t.prototype.toggleSubmenu = function(t) {
                var e, n;
                t.preventDefault(), e = $(t.currentTarget), n = e.find("[data-sub-menu]"), e.toggleClass("main-menu__menu-item--has-submenu--expanded"), n.toggleClass("main-menu__submenu--is-open")
            }, t.prototype.showSubmenu = function(t, e) {
                t.addClass("main-menu__menu-item--has-submenu--expanded"), e.addClass("main-menu__submenu--is-open")
            }, t.prototype.hideSubmenu = function(t, e) {
                t.removeClass("main-menu__menu-item--has-submenu--expanded"), e.removeClass("main-menu__submenu--is-open")
            }, t.prototype.stopPropagation = function(t) {
                t.stopPropagation()
            }, t.prototype.preventClick = function(t) {
                t.preventDefault(), t.stopPropagation()
            }, t
        }(), window.UFCGym.MainMenu = t, $(function() {
            var t;
            t = new window.UFCGym.MainMenu
        })
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.stopPropagation = e(this.stopPropagation, this), this.closeSubmenu = e(this.closeSubmenu, this), this.openSubmenu = e(this.openSubmenu, this), this.toggleSubmenu = e(this.toggleSubmenu, this), null != t && (this.$html = $("html,body"), this.$body = $("[data-document-body]"), this.$overlay = $("[data-micro-menu-overlay]"), this.$el = t, this.$submenu = this.$el.find("ul"), this.$main_menu_open = $("[data-menu-open]"), this.scroll_top = 0, this.$el.on("click", this.toggleSubmenu), this.$submenu.on("click", this.stopPropagation), this.$overlay.on("click", this.closeSubmenu), this.$main_menu_open.on("click", this.closeSubmenu))
            }
            return t.prototype.toggleSubmenu = function(t) {
                t.preventDefault(), this.$submenu.hasClass("microsite-menu__submenu--is-open") ? this.closeSubmenu() : this.openSubmenu()
            }, t.prototype.openSubmenu = function(t) {
                t && t.preventDefault(), this.$el.addClass("microsite-menu__item--has-submenu--is-expanded"), this.$submenu.addClass("microsite-menu__submenu--is-open"), this.$overlay.addClass("menu-overlay--is-visible menu-overlay--microsite"), this.scroll_top = this.$html.scrollTop() ? this.$html.scrollTop() : this.$body.scrollTop(), this.$body.css("top", -this.scroll_top + "px").addClass("document-body--scroll-locked")
            }, t.prototype.closeSubmenu = function(t) {
                t && t.preventDefault(), this.$el.removeClass("microsite-menu__item--has-submenu--is-expanded"), this.$submenu.removeClass("microsite-menu__submenu--is-open"), this.$overlay.removeClass("menu-overlay--is-visible menu-overlay--microsite"), this.$body.removeClass("document-body--scroll-locked").css("top", "auto"), this.$html.scrollTop(this.scroll_top)
            }, t.prototype.stopPropagation = function(t) {
                t.stopPropagation()
            }, t
        }(), window.UFCGym.MicrositeSubmenu = t
    }.call(this),
    function() {
        var t;
        t = function() {
            function t(t) {
                this.$el = t, this.offer_id = this.$el.data("offer-id"), this.offer_id && this.loadBackground(0)
            }
            return t.prototype.loadBackground = function(t) {
                var e, n;
                return null == t && (t = 0), n = this.$el.find(".hs-cta-img"), e = this.$el.find("a.cta_button"), setTimeout(function(i) {
                    return function() {
                        return n.length && e.length ? (i.$el.attr("style", "background-image: url('" + n.attr("src") + "');"), i.$el.on("click", function(t) {
                            return t.preventDefault(), window.location.assign(e.attr("href"))
                        })) : 10 > t ? i.loadBackground(t + 1) : void 0
                    }
                }(this), 50 + 10 * Math.pow(2, t))
            }, t
        }(), window.UFCGym.Offer = t, $(function() {
            $("[data-offer]").each(function() {
                new window.UFCGym.Offer($(this))
            })
        })
    }.call(this),
    function() {
        var t;
        t = function() {
            function t(t) {
                this.$el = t, this.$el.on("click", "[data-profile-social-links] a", function(t) {
                    return t.stopPropagation()
                })
            }
            return t
        }(), window.UFCGym.ProfileCard = t, $(function() {
            $("[data-profile-card]").each(function() {
                new window.UFCGym.ProfileCard($(this))
            })
        })
    }.call(this),
    function() {
        var t;
        t = function() {
            function t(t) {
                this.$el = t, this.$form = this.$el, this.$submitBtn = this.$el.find("[type=submit]"), this.$submitBtn.on("click", this.onSubmission.bind(this))
            }
            return t.prototype.onSubmission = function(t) {
                return t.preventDefault(), this.$submitBtn.prop("disabled", !0), this.$form.submit()
            }, t
        }(), window.UFCGym.PurchaseReviewForm = t, $(function() {
            $("[data-purchase-review-form]").each(function() {
                new window.UFCGym.PurchaseReviewForm($(this))
            })
        })
    }.call(this),
    function() {
        var t;
        t = function(t) {
            var e;
            e = t.val(), e && "placeholder" !== e ? t.removeClass("select-input--with-placeholder") : t.addClass("select-input--with-placeholder")
        }, window.UFCGym.toggleSelectPlaceholder = t, $(function() {
            var t;
            t = "[data-select-input]", $(t).each(function() {
                window.UFCGym.toggleSelectPlaceholder($(this))
            }), $(document).on("change", t, function(t) {
                var e;
                e = $(t.currentTarget), window.UFCGym.toggleSelectPlaceholder(e)
            })
        })
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.$form = t, this.submitForm = e(this.submitForm, this), this.validate = e(this.validate, this), this.$form.on("submit", this.submitForm), this.$email = this.$form.find("[data-sign-up-request-form-email]"), this.$email.on("keyup change", this.validate)
            }
            return t.prototype.validate = function() {
                return this.$email.val().trim().length > 0 ? (this.$email.removeClass("text-input--with-error"), !0) : (this.$email.addClass("text-input--with-error"), !1)
            }, t.prototype.submitForm = function(t) {
                return t.preventDefault(), this.validate() ? $.ajax({
                    method: "POST",
                    data: this.$form.serialize(),
                    url: this.$form.attr("action")
                }).done(function(t) {
                    return function(e) {
                        t.$form.html(e.html)
                    }
                }(this)).error(function(t) {
                    return function(e) {
                        t.$email.addClass("text-input--with-error")
                    }
                }(this)) : void 0
            }, t
        }(), window.UFCGym.SignUpRequestForm = t, $(function() {
            $("[data-sign-up-request-form]").each(function() {
                new window.UFCGym.SignUpRequestForm($(this))
            })
        })
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.$el = t, this.clickLink = e(this.clickLink, this), this.$el.on("click", this.clickLink)
            }
            return t.prototype.clickLink = function(t) {
                var e, n;
                return t.preventDefault(), e = $(t.currentTarget).data(), "facebook" === e.network ? (n = this.facebookUrl(e.url), this.openShareWindow(n, "UFC GYM | Train Different", 600, 400)) : this.openShareWindow(e.url, "UFC GYM | Train Different", 600, 250)
            }, t.prototype.facebookUrl = function(t) {
                var e;
                return e = "https://www.facebook.com/dialog/share", e + "?" + $.param({
                    display: "popup",
                    app_id: window.fb_app_id,
                    href: t,
                    redirect_uri: window.site_url + "/share_redirect"
                })
            }, t.prototype.openShareWindow = function(t, e, n, i) {
                return window.open(t, e, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + n + ", height=" + i).focus()
            }, t
        }(), window.UFCGym.SocialShare = t, $(function() {
            return $("[data-social-link]").each(function(t, e) {
                return new window.UFCGym.SocialShare($(e))
            })
        })
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["application/templates/bjj_location_list"] = function(obj) {
            var __p = [];
            with(obj || {}) __p.push('<li class="microsite-classes__item">\n  <div class="microsite-classes__category-title-wrapper">\n    <div class="microsite-classes__category-title microsite-classes__category-title--no-hover">\n      Locations Near Me\n    </div>\n  </div>\n  <div class="microsite-classes__category-list-wrapper" style="display:block;">\n    <ul class="microsite-classes__category-list">\n      '), _.each(locations, function(t, e) {
                __p.push('\n        <li class="microsite-classes__category-item microsite-classes__category-item--no-icon">\n          <a href="', t.home_path, '" class="microsite-classes__activity-button">\n            ', t.name, ", ", t.state, ' <i class="microsite-classes__activity-arrow icon-arrow-right"></i>\n          </a>\n        </li>\n      ')
            }), __p.push("\n    </ul>\n  </div>\n</li>\n");
            return __p.join("")
        }
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["application/templates/location_search_header"] = function(obj) {
            var __p = [];
            with(obj || {}) __p.push('<h2 class="locate-gym__subtitle">\n  ', subtitle, "\n  "), __p.push('\n</h2>\n<hr class="locate-gym__separator" data-separator="true" />\n');
            return __p.join("")
        }
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["application/templates/location_search_item"] = function(obj) {
            var __p = [];
            with(obj || {}) __p.push('<div class="gym-location" data-location-slug="', location.slug, '">\n  <h3 class="gym-location__title">\n    '), "undefined" != typeof index ? __p.push('\n      <span class="gym-location__index" data-gym-location-index="true">', index + 1, "</span>\n    ") : __p.push('\n      <span class="gym-location__mine" data-gym-location-index="true"><i class="icon-location-pin-alt"></i></span>\n    '), __p.push('\n\n    <span class="gym-location__title-primary">', location.name, '</span>\n    <span class="gym-location__title-secondary">\n      '), "coming_soon" === location.status ? __p.push('\n        <span class="gym-location__gym-type">COMING SOON</span>\n      ') : "closed" === location.status ? __p.push('\n        <span class="gym-location__gym-type">CLOSED</span>\n      ') : "signature" === location.location_type && __p.push('\n        <span class="gym-location__gym-type">SIGNATURE CLUB</span>\n      '), __p.push("\n      "), location.distance && __p.push('\n        <span class="gym-location__gym-distance">', location.distance.toFixed(2), " miles away</span>\n      "), __p.push('\n    </span>\n  </h3>\n  <p class="gym-location__gym-address">', location.street_address, "<br>\n    ", location.city_state_zip, '<br>\n    <a href="tel:', location.phone, '" class="gym-location__gym-phone">', location.phone, "</a>\n  </p>\n  "), "undefined" != typeof source && "guest-pass" === source ? __p.push('\n    <a class="button gym-location__cta" data-set-location-explicitly="true" data-return-to="', location.guest_pass_path, '" href="', location.set_explicitly_path, '">\n      <span class="button__content">\n        Make This My Gym <i class="icon-arrow-right"></i>\n      </span>\n    </a>\n  ') : "undefined" != typeof source && "monthly-promotion" === source ? __p.push('\n    <a class="button gym-location__cta" data-set-location-explicitly="true" data-return-to="', location.monthly_promotion_path, '" href="', location.set_explicitly_path, '">\n      <span class="button__content">\n        Make This My Gym <i class="icon-arrow-right"></i>\n      </span>\n    </a>\n  ') : "undefined" != typeof source && "memberships" === source ? (__p.push("\n    "), "undefined" != typeof package ? __p.push('\n      <a class="button button--wide gym-location__cta" href="', location.payment_path, "?id=", package, '">\n        <span class="button__content">\n          Join Now<i class="icon-arrow-right"></i>\n        </span>\n      </a>\n    ') : __p.push('\n      <a class="button button--wide gym-location__cta" href="', location.join_path, '">\n        <span class="button__content">\n          Join Now<i class="icon-arrow-right"></i>\n        </span>\n      </a>\n    '), __p.push("\n  ")) : (__p.push('\n    <a class="button gym-location__cta" href="', location.home_path, '">\n      <span class="button__content">\n        View This Gym <i class="icon-arrow-right"></i>\n      </span>\n    </a>\n    '), location.slug !== Cookies.get("user_location") && __p.push('\n      <a class="gym-location__my-gym" data-set-location-explicitly="true" href="', location.set_explicitly_path, '">\n        Make This My Gym\n      </a>\n    '), __p.push("\n  ")), __p.push('\n</div>\n<hr class="locate-gym__separator" data-separator="true" />\n');
            return __p.join("")
        }
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["application/templates/location_search_results"] = function(obj) {
            var __p = [];
            with(obj || {}) __p.push("<div>\n  ", JST["application/templates/location_search_header"](header), "\n  "), locations.length > 0 ? (__p.push("\n    "), _.each(locations, function(t, e) {
                __p.push("\n      ", JST["application/templates/location_search_item"]({
                    location: t,
                    index: e,
                    source: source,
                    "package": package
                }), "\n    ")
            }), __p.push("\n  ")) : __p.push('\n    <div class="locate-gym__no-results">No gyms were found in this area.</div>\n  '), __p.push("\n</div>\n");
            return __p.join("")
        }
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["application/templates/my_gym_location"] = function(obj) {
            var __p = [];
            with(obj || {}) __p.push("", JST["application/templates/location_search_header"](header), "\n", JST["application/templates/location_search_item"]({
                location: location,
                source: source,
                "package": package
            }), "\n");
            return __p.join("")
        }
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.toggleContent = e(this.toggleContent, this), this.$el = t, this.$triggers = this.$el.find("[data-toggle-trigger]"), this.$content = this.$el.find("[data-toggle-content]"), this.$triggers.on("click", this.toggleContent)
            }
            return t.prototype.toggleContent = function(t) {
                var e, n, i, r, o, s;
                n = $(t.currentTarget), o = this.$triggers.index(n), r = this.$triggers.not(n).children().filter(".is-open").removeClass("is-open").parent(), i = r.siblings("[data-toggle-content]"), s = i.height(), i.slideUp("fast"), this.$triggers.index(r) < this.$triggers.index(n) && $("html, body").animate({
                    scrollTop: $(window).scrollTop() - s + "px"
                }), e = this.$content.eq(o), n.children().addClass("is-open"), e.slideDown("fast")
            }, t
        }(), window.UFCGym.ToggleGroup = t, $(function() {
            $("[data-toggle-group]").each(function() {
                new window.UFCGym.ToggleGroup($(this))
            })
        })
    }.call(this),
    function() {
        $(function() {})
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.disable = e(this.disable, this), this.enable = e(this.enable, this), this.leave = e(this.leave, this), this.enter = e(this.enter, this), this.$el = t, this.$overlay = this.$el.find("[data-virtual-tour-overlay]"), this.enabled = !1, this.timeout = setTimeout(null, 0), this.$overlay.on("click", this.enable), this.$el.on("mouseenter", this.enter), this.$el.on("mouseleave", this.leave), $(window).on("click", this.disable)
            }
            return t.prototype.enter = function() {
                clearTimeout(this.timeout)
            }, t.prototype.leave = function() {
                setTimeout(function(t) {
                    return function() {
                        t.disable()
                    }
                }(this), 2e3)
            }, t.prototype.enable = function(t) {
                this.enabled || t.stopPropagation(), this.$overlay.fadeOut(), this.enabled = !0
            }, t.prototype.disable = function() {
                clearTimeout(this.timeout), this.enabled = !1, this.$overlay.fadeIn()
            }, t
        }(), window.UFCGym.VirtualTour = t, $(function() {
            $("[data-virtual-tour]").each(function() {
                new window.UFCGym.VirtualTour($(this))
            })
        })
    }.call(this),
    function() {
        var t;
        window.YelpInfoLoader = t = function() {
            function t(t, e) {
                this.apiUrl = t, this.$el = e, $.get(this.apiUrl).done(function(t) {
                    return function(e) {
                        return t.$el.html(e)
                    }
                }(this))
            }
            return t
        }()
    }.call(this);