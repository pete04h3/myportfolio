"use strict";

window.addEventListener("DOMContentLoaded", moveClouds);

function moveClouds() {
  const cloud1 = document.querySelector(".cloud1");
  const cloud2 = document.querySelector(".cloud2");
  const cloud3 = document.querySelector(".cloud3");
  const cloud4 = document.querySelector(".cloud4");
  const cloud5 = document.querySelector(".cloud5");
  const cloud6 = document.querySelector(".cloud6");
  const cloud7 = document.querySelector(".cloud7");

  cloud2.classList.add("moving2");
  cloud7.classList.add("moving4");
  cloud1.classList.add("bounce");
  cloud6.classList.add("moving5");
  cloud3.classList.add("bounce2");

  cloud5.classList.add("moving3");
}
