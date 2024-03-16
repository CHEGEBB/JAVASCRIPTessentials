"use strict";

document.addEventListener('DOMContentLoaded', function () {
  //Getting elements by Id,classname and tagname
  var banner = document.getElementById('page-banner');
  banner;
  var books = document.getElementById("books-list");
  var title = document.getElementsByClassName('title');
  title[0];
  var lis = document.getElementsByTagName('li');

  for (var i = 0; i < title.length; i++) {
    console.log(title[i]);
  }

  Array.from(title).forEach(function (item) {
    console.log(item);
  }); //Query selector

  var wrap = document.querySelector('#wrapper');
  console.log(wrap);
});