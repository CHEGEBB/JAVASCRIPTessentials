"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var grandparent = document.querySelector('.grandparent');
  var parent = document.querySelector('.parent');
  var child = document.querySelector('.child'); //event  bubbling

  grandparent.addEventListener('click', function (e) {
    console.log("Grandparent 1");
  });
  parent.addEventListener('click', function (e) {
    console.log("Parent1");
  });
  child.addEventListener('click', printHi);
  setTimeout(function () {
    child.removeEventListener('click', printHi);
  }, 2000); //The remove event listener removes or acts the opposite of add event listener we also added setTimeout function so hi will disppaera after 2 seconds

  document.addEventListener('click', function (e) {
    console.log("document1");
  }); //event capture start from the outside  coming in so from document,grandparent,parent,child

  grandparent.addEventListener('click', function (e) {
    console.log("Grandparent 2 capture");
  }, {
    capture: true
  });
  parent.addEventListener('click', function (e) {
    console.log("parent2 capture");
  }, {
    capture: true
  }, {
    once: true
  });
  child.addEventListener('click', function (e) {
    console.log("child2 capture");
  }, {
    capture: true
  });
  document.addEventListener('click', function (e) {
    console.log("Document2 capture");
  }, {
    capture: true
  });

  function printHi() {
    console.log("Hi");
  }
});