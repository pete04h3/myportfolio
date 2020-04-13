import { gallery as myImgs } from "./modules/gallery";

("use strict");

const data = [
  {
    i: "",
  },
];

let nav = document.querySelector(".nav-list");
let bar = document.querySelector(".nav-bar");
let clicked = false;
bar.addEventListener("click", function () {
  if (!clicked) {
    clicked = true;
    nav.style.left = "0%";
  } else {
    clicked = false;
    nav.style.left = "-100%";
  }
});
