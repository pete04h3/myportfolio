"use strict";

window.addEventListener("DOMContentLoaded", init);

export function init() {
  console.log(init);
  document.querySelector("html").classList.add("noscroll");

  document.querySelector("#welcometxt").classList.add("fade-in");
  document.querySelector(".welcomename").classList.add("fade-in-slow");
  document.querySelector("#welcomescreen > div > p").classList.add("animated", "fadeIn");
  document.querySelector("#welcomescreen > div > p").classList.remove("animated", "fadeIn");

  document.querySelector(".continuetoportfolio").classList.add("animated", "flip");

  document.querySelector("#welcomescreen > div > p").addEventListener("click", removeWelcome);
}

function removeWelcome() {
  document.querySelector(".continuetoportfolio").classList.remove("animated", "flip");

  document.querySelector(".continuetoportfolio").classList.add("animated", "flipOutY");
  document.querySelector(".hero").classList.add("fade-out");

  setTimeout(removeWelcomeScreen, 980);
}

function removeWelcomeScreen() {
  document.querySelector("#welcomescreen").classList.add("hide");

  document.querySelector(".hero").style.zIndex = "-8";
  document.querySelector("html").classList.remove("noscroll");
  skewRotate();
}

function skewRotate() {
  const overlay = document.querySelector("#phoneoverlay");
  const iphone = document.querySelector("body > main > section.section-1 > div:nth-child(4) > div.col-7.phone-img > img");
  iphone.classList.add("skew");
  overlay.classList.add("skew");
}
