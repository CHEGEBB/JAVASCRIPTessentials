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
  child.addEventListener('click', function (e) {
    console.log("child1");
  });
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
  });
  child.addEventListener('click', function (e) {
    console.log("child2 capture");
  }, {
    capture: true
  });
});