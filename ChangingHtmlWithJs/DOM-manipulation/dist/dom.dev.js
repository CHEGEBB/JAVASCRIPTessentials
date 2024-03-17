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
  var wmf = document.querySelector('#book-list li:nth-child(2).name');
  console.log(wmf);
  var books = document.querySelector('#book-list li.name');
  console.log(books);
  var books = document.querySelectorAll('#book-list li.name'); //when the querySelectorAll is used, it returns a NodeList, which is not an array, so we can't use array methods on it.
  //so we use .forEach method to loop through the NodeList
  //however the other method returns an HTMLCollection, which is an array like object, so we can use array methods on it.
  //we can also convert the NodeList to an array using Array.from method

  Array.from(books).forEach(function (book) {
    book.textContent = 'test';
  });
});