"use strict";

window.addEventListener("DOMContentLoaded", preload);

const drone = document.querySelector("body > div.drone");
const herotxt = document.querySelector("main > h1");
const preloader = document.querySelector(".preloaderboxes");
const preloadscreen = document.querySelector("#preloader");
const overlay = document.querySelector(".overlay");
const mainheadline = document.querySelector(".mainheadline");
const mainheadline2 = document.querySelector(".mainheadline2");
const burger = document.querySelector("body > div.menu__toggler");

function preload() {
  setTimeout(start, 3000);
}

function start() {
  burger.classList.add("fe-pulse-w-pause");
  mainheadline2.classList.add("moving2");
  mainheadline.classList.add("bounce");
  overlay.classList.add("moving2");
  herotxt.classList.add("squishing2");

  preloadscreen.classList.add("hide");
  drone.classList.remove("moving");
  drone.classList.add("squishing");
  setTimeout(move, 8000);
}

function move() {
  drone.classList.remove("squishing");
  drone.classList.add("moving");
  setTimeout(start, 5000);
}
