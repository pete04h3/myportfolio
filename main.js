import { gallery as myImgs } from "./modules/gallery";
import { bubble } from "./modules/bubble";
import { drone } from "./modules/drone";
import { clouds } from "./modules/clouds";
import { blackboxslideanimation } from "./modules/blackboxslideanimation";

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
const cloud1 = document.querySelector(".cloud1");
const cloud2 = document.querySelector(".cloud2");
const cloud3 = document.querySelector(".cloud3");
const cloud4 = document.querySelector(".cloud4");
const cloud5 = document.querySelector(".cloud5");
const cloud6 = document.querySelector(".cloud6");
const cloud7 = document.querySelector(".cloud7");
const aboutdrone = document.querySelector("#aboutmewrapper > img");
const contactdrone = document.querySelector("#contactwrapper > img");

droNebox.addEventListener("click", () => {
  droNebox.classList.add("hoverUp");
  droNebox.style.filter = "invert(1)";
  droNebox.addEventListener("click", () => {
    droNebox.classList.remove("hoverUp");
    droNebox.style.filter = "invert(0)";

    location.reload();
  });
});

toggler.addEventListener("click", () => {
  toggler.classList.toggle("active");
  menu.classList.toggle("active");
  blur.classList.toggle("blur");
  canvas.classList.toggle("blur");
  cloud1.classList.toggle("blurease");
  cloud2.classList.toggle("blurease");
  cloud3.classList.toggle("blurease");
  cloud4.classList.toggle("blurease");
  cloud5.classList.toggle("blurease");
  cloud6.classList.toggle("blurease");
  cloud7.classList.toggle("blurease");

  droNebox.classList.remove("squishing");
  droNebox.classList.toggle("moving");
  droNebox.classList.toggle("hoverUp");
  contactdrone.style.display = "none";
  aboutdrone.style.display = "none";
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
