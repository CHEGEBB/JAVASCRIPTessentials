"use strict";

var grandparent = document.querySelector('.grandparent');
var parent = document.querySelector('.parent');
var child = document.querySelector('.child');
grandparent.addEventListener('click', function (e) {
  console.log("Grandparent 1");
});