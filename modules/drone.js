"use strict";

window.addEventListener("DOMContentLoaded", start);

const drone = document.querySelector("body > div.drone");
const herotxt = document.querySelector("main > h1");

function start() {
  drone.classList.remove("moving");
  drone.classList.add("squishing");
  setTimeout(move, 8000);
}

function move() {
  drone.classList.remove("squishing");
  drone.classList.add("moving");
  setTimeout(start, 5000);
}
