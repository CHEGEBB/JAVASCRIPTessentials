var books = document.querySelectorAll('#book-list li .name');
Array.from(books).forEach(function(book){
    book.textContent += '(book title)';
    //to append text to the end of the text content we use += operator 

});
const bookList = document.querySelector('#book-list');
// bookList.innerHTML = '<h2>Books and more books...</h2>';
bookList.innerHTML+= '<p>See This is how we add html..</p>';