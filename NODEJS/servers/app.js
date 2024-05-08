const express = require('express');

const app = express();

//listen for requests
app.listen(3000);

app.get('/', (req, res) =>{
    res.send('<p>Home Page</p>');
})

app.get('/about', (req, res) =>{
    res.send('<p>About Page</p>');
})

app.get('/contact', (req, res) =>{
    res.send('<p>contact Page</p>');
})