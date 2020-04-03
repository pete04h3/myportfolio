import { gallery as myImgs } from "./modules/gallery";
import { init } from "./modules/portfolio";

("use strict");

/* const data = [
  {
    i: ""
  }
]; */

const toggler = document.querySelector(".menu__toggler");
const menu = document.querySelector(".mobile-menu-dropdown");
const atags = document.querySelector(".atags-mobile-menu");
const mobilelogo = document.querySelector(".mobile-logo");

toggler.addEventListener("click", () => {
  toggler.classList.toggle("active");
  atags.classList.toggle("fade-in-left");
  mobilelogo.classList.toggle("rotateAnimation");
  menu.classList.toggle("active");
});

(function(i, s, o, g, r, a, m) {
  i["GoogleAnalyticsObject"] = r;
  (i[r] =
    i[r] ||
    function() {
      (i[r].q = i[r].q || []).push(arguments);
    }),
    (i[r].l = 1 * new Date());
  (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
})(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");

ga("create", "UA-46156385-1", "cssscript.com");
ga("send", "pageview");
