const fs = require('fs');

const readstream = fs.createReadStream('./Modules/docs/doc3.txt', {encoding: 'utf8'});

readstream.on('data', (chunk) =>{
    console.log('-----------------NEW CHUNK-----------------');
    console.log(chunk);
})