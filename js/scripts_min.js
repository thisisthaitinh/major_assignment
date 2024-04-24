"use strict";
jQuery(document).ready(function (n) {
     var a, e = n(".sticky");
     Stickyfill.add(e), (n("body").hasClass("single-post") || n("body").hasClass("single-student_work")) && (a = n(".story-header, .student-main").offset().top, n(".story-wrapper, .student-wrapper").scroll(function () {
          var e = n(".story-header, .student-main").offset(),
               o = e.top,
               s = n(".back-to-top");
          o < a ? n(".main-left, .main-right, .find-nav-outer, .site-branding").addClass("scroll-down") : n(".main-left, .main-right, .find-nav-outer, .site-branding").removeClass("scroll-down"), (a = o) < -1e3 ? s.addClass("show") : s.removeClass("show"), s.on("click", function (e) {
               e.preventDefault(), n(".story-wrapper, .student-wrapper").stop(!0, !1).animate({
                    scrollTop: 0
               }, "300")
          })
     })), n(".mobile-nav-button").on("click", function () {
          n(".mobile-nav").toggleClass("open"), n(".mobile-nav").hasClass("open") ? (n(".mobile-nav-button").addClass("open"), n("body").css("overflow", "hidden"), n(".story-wrapper").css("overflow-y", "hidden")) : (n(".mobile-nav-button").removeClass("open"), n("body").css("overflow", "auto"), n(".story-wrapper").css("overflow-y", "scroll")), n(".find").hasClass("open") && (n(".find").removeClass("open"), n(".na-search").removeClass("open")), n(".project-credits").hasClass("open") && (n(".project-credits").removeClass("open"), n(".project-credits-btn").removeClass("open"))
     }), n(".na-search").on("click", function () {
          n(".find").toggleClass("open"), n(".find").hasClass("open") ? (n(".na-search").addClass("open"), n(".social-link").addClass("open"), n("body").css("overflow", "hidden"), n(".story-wrapper").css("overflow-y", "hidden"), n(".student-wrapper").css("overflow-y", "hidden")) : (n(".na-search").removeClass("open"), n(".social-link").removeClass("open"), n("body").css("overflow", "auto"), n(".story-wrapper").css("overflow-y", "scroll"), n(".student-wrapper").css("overflow-y", "scroll")), n(".mobile-nav-button").hasClass("open") && n(".mobile-nav-button").removeClass("open"), n(".mobile-nav").hasClass("open") && n(".mobile-nav").removeClass("open"), n(".project-credits").hasClass("open") && (n(".project-credits").removeClass("open"), n(".project-credits-btn").removeClass("open")), n(".main-left, .main-right, .find-nav-outer, .site-branding").removeClass("scroll-down")
     }), n(".project-credits-btn").on("click", function () {
          n(".project-credits").toggleClass("open"), n(".project-credits").hasClass("open") ? (n(".project-credits-btn").addClass("open"), n("body").css("overflow", "hidden"), n(".story-wrapper").css("overflow-y", "hidden"), n(".student-wrapper").css("overflow-y", "hidden")) : (n(".project-credits-btn").removeClass("open"), n("body").css("overflow", "auto"), n(".story-wrapper").css("overflow-y", "scroll"), n(".student-wrapper").css("overflow-y", "scroll")), n(".mobile-nav").hasClass("open") && n(".mobile-nav").removeClass("open"), n(".find").hasClass("open") && (n(".find").removeClass("open"), n(".na-search").removeClass("open")), n(".mobile-nav-button").hasClass("open") && n(".mobile-nav-button").removeClass("open"), n(".main-left, .main-right, .find-nav-outer, .site-branding").removeClass("scroll-down")
     });
     var o = n(".main-left, .main-right");
     setTimeout(function () {
          o.removeClass("scroll-down")
     }, 750);
     var s = n(window).scrollTop();
     n(window).scroll(function () {
          var e = n(window).scrollTop();
          s < e ? n(".main-left, .main-right, .find-nav-outer, .site-branding").addClass("scroll-down") : n(".main-left, .main-right, .find-nav-outer, .site-branding").removeClass("scroll-down"), s = e
     }), n(".na-play").on("click", function () {
          if (n("#vimeo-video").length) {
               var e = document.getElementById("vimeo-video"),
                    o = new Vimeo.Player(e);
               o.on("ended", function () {
                    n(".more-down, .go-down").show()
               })
          }
          if (n("#story-vid").length) {
               var s = document.getElementById("story-vid");
               s.addEventListener("ended", function (e) {
                    n(".more-down, .go-down").show()
               }, !1)
          }
          n(".story-header-outer-image").fadeOut("slow", function () {
               n(".story-header-outer").css({
                    height: "auto",
                    "z-index": 3
               }), n(".main-left, .main-right, .find-nav-outer, .site-branding").addClass("scroll-down"), n("#vimeo-video").length && o.play(), n("#story-vid").length && s.play()
          }), n(".more-down, .go-down").hide()
     }), n("#vimeo-video, .verse-player-embed, #story-vid").mouseenter(function () {
          n(".main-left, .main-right, .find-nav-outer, .site-branding").addClass("scroll-down")
     }), n(".event-ticker-entry").on("click", function () {
          var e = n(this).attr("data-event");
          n(".event-draw").removeClass("open"), n(".event-draw" + e).addClass("open"), n("body").css("overflow", "hidden")
     }), n(".close-event").on("click", function () {
          n(".event-draw").removeClass("open"), n("body").css("overflow", "auto")
     }), n(".open-experience").on("click", function () {
          var e = n(this).attr("data-experience");
          n(".experience-full").removeClass("open"), n("." + e).addClass("open"), n(".find-nav-outer").hide()
     }), n(".close-experience").on("click", function () {
          n(".experience-full").removeClass("open"), n(".find-nav-outer").show()
     }), n(".acc__title").click(function (e) {
          var o = n(this).closest(".acc__card").find(".acc__panel");
          n(this).hasClass("active") ? n(this).removeClass("active") : (n(this).closest(".acc").find(".acc__title.active").removeClass("active"), n(this).addClass("active")), o.stop(!1, !0).slideToggle(), e.preventDefault()
     }), n(".more-down").on("click", function () {
          var e = n(window).height();
          n(".story-wrapper, .student-wrapper, .home").stop(!0, !1).animate({
               scrollTop: e
          }, "300")
     }), n(".go-down").on("click", function () {
          var e = n(window).height();
          n("html, body").stop(!0, !1).animate({
               scrollTop: e
          }, "300")
     }), n(".home-more-down").on("click", function () {
          var e = n(window).height();
          n("html, body").stop(!0, !1).animate({
               scrollTop: e
          }, "300")
     })
});