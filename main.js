import { gallery as myImgs } from "./modules/gallery";
import { init } from "./modules/portfolio";

("use strict");

/* const data = [
  {
    i: ""
  }
]; */

/** burgermenu **/

const toggler = document.querySelector(".menu__toggler");
const menu = document.querySelector(".mobile-menu-dropdown");
const atags = document.querySelector(".atags-mobile-menu");
const mobilelogo = document.querySelector(".mobile-logo");
const body = document.querySelector("body");

toggler.addEventListener("click", () => {
  toggler.classList.toggle("active");
  atags.classList.toggle("fade-in-left");
  mobilelogo.classList.toggle("rotateAnimation");
  menu.classList.toggle("active");
  body.classList.toggle("noscroll");
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

/** portfolio script **/

const items = document.querySelectorAll(".item");
const detailItem = document.querySelector(".detail");
const detailScene = document.querySelector(".scene.-detail");
const titel = document.querySelector(".title");
const tekst = document.querySelector(".description");
const clickLink = document.querySelector(".description2");
const link = document.querySelector("#section-box-grid > div > div.scene.-detail > div > div > a");

detailScene.style.display = "none";

items.forEach(item => {
  item.addEventListener("click", () => {
    const itemImage = item.querySelector("img");

    detailItem.setAttribute("data-image", item.getAttribute("data-key"));
    console.log(detailItem);

    if (detailItem.dataset.image == "owl") {
      console.log("animation");
      titel.textContent = "ANIMATION";
      tekst.textContent = "lolololololol";
      link.href = "https://lisabianca.dk/kea/11-frontend/light_bulb/";
    }

    detailItem.querySelector("img").setAttribute("src", itemImage.getAttribute("src"));

    detailScene.style.display = "block";
    item.style.opacity = 0;
    body.classList.add("noscroll");

    let firstRect = itemImage.getBoundingClientRect();
    let lastRect = detailItem.getBoundingClientRect();

    detailItem.animate(
      [
        {
          transform: `
          translateX(${firstRect.left - lastRect.left}px)
          translateY(${firstRect.top - lastRect.top}px)
          scale(${firstRect.width / lastRect.width})
        `
        },
        {
          transform: `
          translateX(0)
          translateY(0)
          scale(1)
         `
        }
      ],
      {
        duration: 600,
        easing: "cubic-bezier(0.2, 0, 0.2, 1)"
      }
    );
  });
});

detailItem.addEventListener("click", () => {
  const itemImage = document.querySelector(`[data-key="${detailItem.getAttribute("data-image")}"]`);

  let itemImageRect = itemImage.getBoundingClientRect();
  let detailItemRect = detailItem.getBoundingClientRect();

  detailScene.style.display = "none";
  itemImage.style.opacity = 1;
  body.classList.remove("noscroll");

  itemImage.animate(
    [
      {
        zIndex: 2,
        transform: `
          translateX(${detailItemRect.left - itemImageRect.left}px)
          translateY(${detailItemRect.top - itemImageRect.top}px)
  scale(${detailItemRect.width / itemImageRect.width})
        `
      },
      {
        zIndex: 2,
        transform: `
          translateX(0)
          translateY(0)
          scale(1)
         `
      }
    ],
    {
      duration: 600,
      easing: "cubic-bezier(0.2, 0, 0.2, 1)"
    }
  );
});
