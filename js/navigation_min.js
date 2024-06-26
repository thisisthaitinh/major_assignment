// thanh dieu huong
"use strict";
var KEYMAP = {
     TAB: 9
};

function initNavigation() {
     initNavToggleSubmenus(), initNavToggleSmall()
}

function initNavToggleSubmenus() {
     var e = document.querySelectorAll(".nav--toggle-sub");
     if (e.length)
          for (var t = 0; t < e.length; t++) initEachNavToggleSubmenu(e[t])
}

function initEachNavToggleSubmenu(e) {
     var t = e.querySelectorAll(".menu ul");
     if (t.length)
          for (var n = getDropdownButton(), a = 0; a < t.length; a++) {
               var o = t[a].parentNode,
                    l = o.querySelector(".dropdown");
               if (!l) {
                    (l = document.createElement("span")).classList.add("dropdown");
                    var r = document.createElement("i");
                    r.classList.add("dropdown-symbol"), l.appendChild(r), t[a].parentNode.insertBefore(l, t[a])
               }
               var i = n.cloneNode(!0);
               i.innerHTML = l.innerHTML, l.parentNode.replaceChild(i, l), i.addEventListener("click", function (e) {
                    toggleSubMenu(e.target.parentNode)
               }), o.addEventListener("mouseleave", function (e) {
                    toggleSubMenu(e.target, !1)
               }), o.querySelector("a").addEventListener("focus", function (e) {
                    for (var t = e.target.parentNode.parentNode.querySelectorAll("li.menu-item--toggled-on"), n = 0; n < t.length; n++) toggleSubMenu(t[n], !1)
               }), t[a].addEventListener("keydown", function (e) {
                    var t = "ul.toggle-show > li > a, ul.toggle-show > li > button";
                    KEYMAP.TAB === e.keyCode && (e.shiftKey ? isfirstFocusableElement(e.target, document.activeElement, t) && toggleSubMenu(e.target.parentNode, !1) : islastFocusableElement(e.target, document.activeElement, t) && toggleSubMenu(e.target.parentNode, !1))
               }), t[a].parentNode.classList.add("menu-item--has-toggle")
          }
}

function initNavToggleSmall() {
     var e = document.querySelectorAll(".nav--toggle-small");
     if (e.length)
          for (var t = 0; t < e.length; t++) initEachNavToggleSmall(e[t])
}

function initEachNavToggleSmall(t) {
     var e = t.querySelector(".menu-toggle");
     e && (e.setAttribute("aria-expanded", "false"), e.addEventListener("click", function (e) {
          t.classList.toggle("nav--toggled-on"), e.target.setAttribute("aria-expanded", "false" === e.target.getAttribute("aria-expanded") ? "true" : "false")
     }, !1))
}

function toggleSubMenu(e, t) {
     var n = e.querySelector(".dropdown-toggle"),
          a = e.querySelector("ul"),
          o = e.classList.contains("menu-item--toggled-on");
     if (void 0 !== t && "boolean" == typeof t && (o = !t), n.setAttribute("aria-expanded", (!o).toString()), o) {
          e.classList.remove("menu-item--toggled-on"), a.classList.remove("toggle-show"), n.setAttribute("aria-label", newestamericansScreenReaderText.expand);
          for (var l = e.querySelectorAll(".menu-item--toggled-on"), r = 0; r < l.length; r++) toggleSubMenu(l[r], !1)
     } else {
          for (var i = e.parentNode.querySelectorAll("li.menu-item--toggled-on"), g = 0; g < i.length; g++) toggleSubMenu(i[g], !1);
          e.classList.add("menu-item--toggled-on"), a.classList.add("toggle-show"), n.setAttribute("aria-label", newestamericansScreenReaderText.collapse)
     }
}

function getDropdownButton() {
     var e = document.createElement("button");
     return e.classList.add("dropdown-toggle"), e.setAttribute("aria-expanded", "false"), e.setAttribute("aria-label", newestamericansScreenReaderText.expand), e
}

function isfirstFocusableElement(e, t, n) {
     var a = e.querySelectorAll(n);
     return 0 < a.length && t === a[0]
}

function islastFocusableElement(e, t, n) {
     var a = e.querySelectorAll(n);
     return 0 < a.length && t === a[a.length - 1]
}
"loading" === document.readyState ? document.addEventListener("DOMContentLoaded", initNavigation) : initNavigation();