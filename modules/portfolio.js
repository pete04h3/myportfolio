"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log(init);
  document.querySelector("body > main > section.section-3 > div").style.margin = "0px";

  document.querySelector("#welcomescreen > div > p").addEventListener("click", removeWelcome);
}

function removeWelcome() {
  document.querySelector(".hero").classList.add("fade-out");
  setTimeout(removeWelcomeScreen, 2000);
}

function removeWelcomeScreen() {
  document.querySelector("#welcomescreen").classList.add("hide");
  document.querySelector(".hero").style.zIndex = "-1";
}
