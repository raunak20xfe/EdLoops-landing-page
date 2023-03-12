"use strict";

// Selecting elements
const exploreBtn = document.querySelector(".explore-btn");
const exploreHover = document.querySelector(".explore-sec");
const searchSuggest = document.querySelector(".SearchBarCard");
const searchInput = document.querySelector(".searchinput");
const searchBar = document.querySelector(".searchbar");
const removeSuggest = document.querySelector(".removeSuggest");
const btnClose = document.querySelector(".btnclose");
const navbar2 = document.querySelector(".navbar2");
const btnlogin = document.querySelector(".btnlogin");
const loginform = document.querySelector(".loginform");
const teach = document.querySelector(".teachlink");
const learn = document.querySelector(".learnlink");
// const body = document.querySelector("body");
// const current1El = document.getElementById('current--1');

// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold')
exploreHover.classList.add("hidden");
searchSuggest.classList.add("hidden");

exploreBtn.addEventListener("mouseover", function () {
  exploreHover.classList.remove("hidden");
});

exploreBtn.addEventListener("mouseleave", function () {
  exploreHover.classList.add("hidden");
});

searchBar.addEventListener("click", function () {
  searchSuggest.classList.remove("hidden");
  removeSuggest.classList.remove("hidden");
});

removeSuggest.addEventListener("click", function () {
  searchSuggest.classList.add("hidden");
  loginform.classList.add("hidden");
  removeSuggest.classList.add("hidden");
});
btnClose.addEventListener("click", function () {
  navbar2.classList.add("hidden");
});
btnlogin.addEventListener("click", function () {
  loginform.classList.remove("hidden");
  removeSuggest.classList.remove("hidden");
});
teach.addEventListener("click", function () {
  teach.classList.add("nav3linkactive");
  learn.classList.remove("nav3linkactive");
});
learn.addEventListener("click", function () {
  learn.classList.add("nav3linkactive");
  teach.classList.remove("nav3linkactive");
});
