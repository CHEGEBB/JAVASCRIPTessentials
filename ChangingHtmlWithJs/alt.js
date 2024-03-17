var books = document.querySelectorAll('#book-list li .name');
Array.from(books).forEach(function(book){
    book.textContent += '(book title)';
});