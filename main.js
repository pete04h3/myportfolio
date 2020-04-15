import { gallery as myImgs } from "./modules/gallery";
import { bubble } from "./modules/bubble";
import { drone } from "./modules/drone";

("use strict");

/* const data = [
  {
    i: "",
  },
]; */

const toggler = document.querySelector(".menu__toggler");
const close = document.querySelector(".menu__toggler.active > span::after");
const menu = document.querySelector(".menu");
const blur = document.querySelector("main");
const canvas = document.querySelector("canvas");
const droNebox = document.querySelector("body > div.drone");

droNebox.addEventListener("click", () => {
  droNebox.classList.add("hoverUp");
  droNebox.addEventListener("click", () => {
    droNebox.classList.remove("hoverUp");
    location.reload();
  });
});

toggler.addEventListener("click", () => {
  toggler.classList.toggle("active");
  menu.classList.toggle("active");
  blur.classList.toggle("blur");
  canvas.classList.toggle("blur");
  droNebox.classList.remove("squishing");
  droNebox.classList.toggle("moving");
  droNebox.classList.toggle("hoverUp");
});

(function (i, s, o, g, r, a, m) {
  i["GoogleAnalyticsObject"] = r;
  (i[r] =
    i[r] ||
    function () {
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
