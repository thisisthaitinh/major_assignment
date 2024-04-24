"use strict";
! function (c, p) {
     function u(t, e) {
          for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
     }

     function m(t) {
          return parseFloat(t) || 0
     }

     function g(t) {
          for (var e = 0; t;) e += t.offsetTop, t = t.offsetParent;
          return e
     }

     function t() {
          function t() {
               c.pageXOffset != r.left ? (r.top = c.pageYOffset, r.left = c.pageXOffset, l.refreshAll()) : c.pageYOffset != r.top && (r.top = c.pageYOffset, r.left = c.pageXOffset, a.forEach(function (t) {
                    return t._recalcPosition()
               }))
          }

          function e() {
               i = setInterval(function () {
                    a.forEach(function (t) {
                         return t._fastCheck()
                    })
               }, 500)
          }
          if (!s) {
               s = !0, t(), c.addEventListener("scroll", t), c.addEventListener("resize", l.refreshAll), c.addEventListener("orientationchange", l.refreshAll);
               var i = void 0,
                    o = void 0,
                    n = void 0;
               "hidden" in p ? (o = "hidden", n = "visibilitychange") : "webkitHidden" in p && (o = "webkitHidden", n = "webkitvisibilitychange"), n ? (p[o] || e(), p.addEventListener(n, function () {
                    p[o] ? clearInterval(i) : e()
               })) : e()
          }
     }
     var e, i = function (t, e, i) {
          return e && n(t.prototype, e), i && n(t, i), t
     },
          _ = !1,
          o = void 0 !== c;

     function n(t, e) {
          for (var i = 0; i < e.length; i++) {
               var o = e[i];
               o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
          }
     }
     o && c.getComputedStyle ? (e = p.createElement("div"), ["", "-webkit-", "-moz-", "-ms-"].some(function (t) {
          try {
               e.style.position = t + "sticky"
          } catch (t) { }
          return "" != e.style.position
     }) && (_ = !0)) : _ = !0;
     var s = !1,
          v = "undefined" != typeof ShadowRoot,
          r = {
               top: null,
               left: null
          },
          a = [],
          f = (i(h, [{
               key: "refresh",
               value: function () {
                    if (!_ && !this._removed) {
                         this._active && this._deactivate();
                         var t = this._node,
                              e = getComputedStyle(t),
                              i = {
                                   position: e.position,
                                   top: e.top,
                                   display: e.display,
                                   marginTop: e.marginTop,
                                   marginBottom: e.marginBottom,
                                   marginLeft: e.marginLeft,
                                   marginRight: e.marginRight,
                                   cssFloat: e.cssFloat
                              };
                         if (!isNaN(parseFloat(i.top)) && "table-cell" != i.display && "none" != i.display) {
                              this._active = !0;
                              var o = t.style.position;
                              "sticky" != e.position && "-webkit-sticky" != e.position || (t.style.position = "static");
                              var n = t.parentNode,
                                   s = v && n instanceof ShadowRoot ? n.host : n,
                                   r = t.getBoundingClientRect(),
                                   a = s.getBoundingClientRect(),
                                   f = getComputedStyle(s);
                              this._parent = {
                                   node: s,
                                   styles: {
                                        position: s.style.position
                                   },
                                   offsetHeight: s.offsetHeight
                              }, this._offsetToWindow = {
                                   left: r.left,
                                   right: p.documentElement.clientWidth - r.right
                              }, this._offsetToParent = {
                                   top: r.top - a.top - m(f.borderTopWidth),
                                   left: r.left - a.left - m(f.borderLeftWidth),
                                   right: -r.right + a.right - m(f.borderRightWidth)
                              }, this._styles = {
                                   position: o,
                                   top: t.style.top,
                                   bottom: t.style.bottom,
                                   left: t.style.left,
                                   right: t.style.right,
                                   width: t.style.width,
                                   marginTop: t.style.marginTop,
                                   marginLeft: t.style.marginLeft,
                                   marginRight: t.style.marginRight
                              };
                              var l = m(i.top);
                              this._limits = {
                                   start: r.top + c.pageYOffset - l,
                                   end: a.top + c.pageYOffset + s.offsetHeight - m(f.borderBottomWidth) - t.offsetHeight - l - m(i.marginBottom)
                              };
                              var h = f.position;
                              "absolute" != h && "relative" != h && (s.style.position = "relative"), this._recalcPosition();
                              var d = this._clone = {};
                              d.node = p.createElement("div"), u(d.node.style, {
                                   width: r.right - r.left + "px",
                                   height: r.bottom - r.top + "px",
                                   marginTop: i.marginTop,
                                   marginBottom: i.marginBottom,
                                   marginLeft: i.marginLeft,
                                   marginRight: i.marginRight,
                                   cssFloat: i.cssFloat,
                                   padding: 0,
                                   border: 0,
                                   borderSpacing: 0,
                                   fontSize: "1em",
                                   position: "static"
                              }), n.insertBefore(d.node, t), d.docOffsetTop = g(d.node)
                         }
                    }
               }
          }, {
               key: "_recalcPosition",
               value: function () {
                    if (this._active && !this._removed) {
                         var t = r.top <= this._limits.start ? "start" : r.top >= this._limits.end ? "end" : "middle";
                         if (this._stickyMode != t) {
                              switch (t) {
                                   case "start":
                                        u(this._node.style, {
                                             position: "absolute",
                                             left: this._offsetToParent.left + "px",
                                             right: this._offsetToParent.right + "px",
                                             top: this._offsetToParent.top + "px",
                                             bottom: "auto",
                                             width: "auto",
                                             marginLeft: 0,
                                             marginRight: 0,
                                             marginTop: 0
                                        });
                                        break;
                                   case "middle":
                                        u(this._node.style, {
                                             position: "fixed",
                                             left: this._offsetToWindow.left + "px",
                                             right: this._offsetToWindow.right + "px",
                                             top: this._styles.top,
                                             bottom: "auto",
                                             width: "auto",
                                             marginLeft: 0,
                                             marginRight: 0,
                                             marginTop: 0
                                        });
                                        break;
                                   case "end":
                                        u(this._node.style, {
                                             position: "absolute",
                                             left: this._offsetToParent.left + "px",
                                             right: this._offsetToParent.right + "px",
                                             top: "auto",
                                             bottom: 0,
                                             width: "auto",
                                             marginLeft: 0,
                                             marginRight: 0
                                        })
                              }
                              this._stickyMode = t
                         }
                    }
               }
          }, {
               key: "_fastCheck",
               value: function () {
                    this._active && !this._removed && (1 < Math.abs(g(this._clone.node) - this._clone.docOffsetTop) || 1 < Math.abs(this._parent.node.offsetHeight - this._parent.offsetHeight)) && this.refresh()
               }
          }, {
               key: "_deactivate",
               value: function () {
                    var e = this;
                    this._active && !this._removed && (this._clone.node.parentNode.removeChild(this._clone.node), delete this._clone, u(this._node.style, this._styles), delete this._styles, a.some(function (t) {
                         return t !== e && t._parent && t._parent.node === e._parent.node
                    }) || u(this._parent.node.style, this._parent.styles), delete this._parent, this._stickyMode = null, this._active = !1, delete this._offsetToWindow, delete this._offsetToParent, delete this._limits)
               }
          }, {
               key: "remove",
               value: function () {
                    var i = this;
                    this._deactivate(), a.some(function (t, e) {
                         if (t._node === i._node) return a.splice(e, 1), !0
                    }), this._removed = !0
               }
          }]), h),
          l = {
               stickies: a,
               Sticky: f,
               forceSticky: function () {
                    _ = !1, t(), this.refreshAll()
               },
               addOne: function (t) {
                    if (!(t instanceof HTMLElement)) {
                         if (!t.length || !t[0]) return;
                         t = t[0]
                    }
                    for (var e = 0; e < a.length; e++)
                         if (a[e]._node === t) return a[e];
                    return new f(t)
               },
               add: function (i) {
                    if (i instanceof HTMLElement && (i = [i]), i.length) {
                         for (var o = [], t = function (t) {
                              var e = i[t];
                              return e instanceof HTMLElement ? a.some(function (t) {
                                   if (t._node === e) return o.push(t), !0
                              }) ? "continue" : void o.push(new f(e)) : (o.push(void 0), "continue")
                         }, e = 0; e < i.length; e++) t(e);
                         return o
                    }
               },
               refreshAll: function () {
                    a.forEach(function (t) {
                         return t.refresh()
                    })
               },
               removeOne: function (e) {
                    if (!(e instanceof HTMLElement)) {
                         if (!e.length || !e[0]) return;
                         e = e[0]
                    }
                    a.some(function (t) {
                         if (t._node === e) return t.remove(), !0
                    })
               },
               remove: function (i) {
                    if (i instanceof HTMLElement && (i = [i]), i.length)
                         for (var t = function (t) {
                              var e = i[t];
                              a.some(function (t) {
                                   if (t._node === e) return t.remove(), !0
                              })
                         }, e = 0; e < i.length; e++) t(e)
               },
               removeAll: function () {
                    for (; a.length;) a[0].remove()
               }
          };

     function h(e) {
          if (function (t, e) {
               if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, h), !(e instanceof HTMLElement)) throw new Error("First argument must be HTMLElement");
          if (a.some(function (t) {
               return t._node === e
          })) throw new Error("Stickyfill is already applied to this node");
          this._node = e, this._stickyMode = null, this._active = !1, a.push(this), this.refresh()
     }
     _ || t(), "undefined" != typeof module && module.exports ? module.exports = l : o && (c.Stickyfill = l)
}(window, document);