const express = require('express');

const app = express();

//set the view engine
app.set('view engine', 'ejs');

//listen for requests
app.listen(3000);

app.get('/', (req, res) =>{
    // res.send('<p>Home Page</p>');
    res.render('index');
})

app.get('/about', (req, res) =>{
    // res.send('<p>About Page</p>');
    res.render('about');
})

app.get('/contact', (req, res) =>{
    res.render('contact');
})

// redirects

app.get('/about-us', (req, res)=> {
    res.redirect('/about');
})

// 404 page
app.use((req, res) =>{
    res.status(404).render('404');
})