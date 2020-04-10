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
const mAtags = document.querySelectorAll(".atags-mobile-menu > li > a");

toggler.addEventListener("click", () => {
  toggler.classList.toggle("active");
  atags.classList.toggle("fade-in-left");
  mobilelogo.classList.toggle("rotateAnimation");
  menu.classList.toggle("active");
});

mAtags.forEach(a => {
  a.addEventListener("click", () => {
    atags.classList.toggle("fade-in-left");
    toggler.classList.toggle("active");
    menu.classList.toggle("active");
  });
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
      tekst.textContent = "This project was an assignment from the Danish Musuem of Science & Technology. They wanted an intuitive infographic solution, that would enlighten the user about the impacts of the invention of the light bulb";
      link.href = "https://lisabianca.dk/kea/11-frontend/light_bulb/";
    }

    if (detailItem.dataset.image == "deer") {
      console.log("koga");
      titel.textContent = "KOGA";
      tekst.textContent = "Koga is a Dutch bicycle manufacturer based in Heerenveen, Netherlands. The company is well known for its long time partnership with Japanese frame manufacturer Miyata, producing bicycles and sponsoring racing teams under the brand name Koga Miyata.";
      link.href = "http://www.mostvalue.dk/Koga/";
    }

    if (detailItem.dataset.image == "hipster") {
      console.log("kiteai");
      titel.textContent = "KITEAI";
      tekst.textContent = "KiteAI is a company that gathers information leads for big companys so their sales team doesn't have to. This way, the company can focus on selling their product, instead of harvesting sales leads. They needed a simple onepager to visualize their identity.";
      link.href = "http://www.cauliflower.dk/kea/3-semester/afleveringer/wiseflow/KiteAI-Code/";
    }

    if (detailItem.dataset.image == "ram") {
      console.log("luibh");
      titel.textContent = "LUIBH";
      tekst.textContent =
        "Luibh skincare is one of the most advanced websites I have build. Luibh is naturistic skincare company based in Ireland. Their mission is to stand up to the big cosmetics companies, all products are naturally made out of herbs, with no added chemicals or parabenes. (still in progress)";
      link.href = "https://drive.google.com/file/d/1W1OqP20QBZAcKwgc0GJwAGgBpHjfuuMM/view?usp=sharing";
    }

    if (detailItem.dataset.image == "dog") {
      console.log("statumanu");
      titel.textContent = "STATUMANU";
      tekst.textContent =
        "Statumanu is developing Vessle track, for the healthcare industry. They wanted an application that could provide information about ICP, Internal Cranium Pressure, in a simple visualization for doctors, and nurses. I decided to make a dashboard that would contain all the information with simple navigation, this is made in colaboration with bootstrap & Creative Tim";
      link.href = "http://www.cauliflower.dk/kea/3-semester/afleveringer/wiseflow/black-dashboard-master/examples/dashboard.html";
    }

    if (detailItem.dataset.image == "ram-side") {
      console.log("euroman");
      titel.textContent = "EUROMAN";
      tekst.textContent = "Euroman did a commercial for their product and asked if I could provide with a music production that would enhance and support the digital content shown in a 2-3 min videographic. This is what we came up with";
      link.href = "https://www.youtube.com/watch?v=ot845DQy6gM&feature=youtu.be&fbclid=IwAR35doR1qF-WFRwyWgU-xKfbhnesXOnCVDmToI40nrzreYDxAujDGy7l6Pc";
    }

    detailItem.querySelector("img").setAttribute("src", itemImage.getAttribute("src"));

    detailScene.style.display = "block";
    detailItem.classList.add("scene");
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
  detailItem.classList.remove("scene");
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
