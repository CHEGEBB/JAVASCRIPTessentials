const http = require ('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    console.log(req.url, req.method);

    // response header
    // res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'text/html');
    res.write('<p> Hello, world!</p>');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});