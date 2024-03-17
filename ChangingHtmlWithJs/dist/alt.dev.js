"use strict";

var books = document.querySelectorAll('#book-list li .name');
Array.from(books).forEach(function (book) {
  book.textContent += '(book title)'; //to append text to the end of the text content we use += operator 
});
var bookList = document;