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
  });
});