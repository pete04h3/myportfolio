"use strict";

window.addEventListener("DOMContentLoaded", slideAnimation);
const about = document.querySelector("#leftsidebar > a.aboutme");
const contact = document.querySelector("#rightsidebar > a.contactme");
const rightwall = document.querySelector("body > div.right");
const leftwall = document.querySelector("body > div.left");
const aboutmesection = document.querySelector("#aboutmewrapper");
const aboutmewrapper = document.querySelector("#aboutmewrapper > div");
const contactwrapper = document.querySelector("#contactwrapper");

function slideAnimation() {
  about.addEventListener("click", slideIn);
  contact.addEventListener("click", slideInContact);
  rightwall.classList.add("hide");
  leftwall.classList.add("hide");
  aboutmesection.style.display = "none";
  contactwrapper.style.display = "none";
}

function slideIn() {
  rightwall.classList.remove("hide");
  leftwall.classList.remove("hide");

  getRdy();
}

function slideInContact() {
  rightwall.classList.remove("hide");
  leftwall.classList.remove("hide");

  getRdyContact();
}

function getRdyContact() {
  leftwall.classList.add("animated", "slideInLeft");
  rightwall.classList.add("animated", "slideInRight");

  setTimeout(slideOutContact, 1000);
}

function getRdy() {
  leftwall.classList.add("animated", "slideInLeft");
  rightwall.classList.add("animated", "slideInRight");

  setTimeout(slideOut, 1000);
}

function slideOut() {
  const abouth1 = document.querySelector("#aboutmewrapper > h1");
  leftwall.classList.add("animated", "slideOutLeft");
  rightwall.classList.add("animated", "slideOutRight");
  aboutmesection.style.display = "block";
  abouth1.style.filter = "blur(0px)";

  aboutmesection.classList.add("animated", "slideInDown");
  aboutmewrapper.classList.remove("hide");
  aboutmewrapper.classList.add("animated", "slideInDown");
  about.addEventListener("click", slideInAgain);
}

function slideInAgain() {
  leftwall.classList.add("animated", "slideInLeft");
  rightwall.classList.add("animated", "slideInRight");
  setTimeout(slideOut, 1000);
}

function slideOutContact() {
  leftwall.classList.add("animated", "slideOutLeft");
  rightwall.classList.add("animated", "slideOutRight");
  aboutmesection.style.display = "none";
  contactwrapper.style.display = "block";
  contactwrapper.classList.add("animated", "slideInUp");
  about.addEventListener("click", slideIn);
  slideIn();
}

slideAnimation();
