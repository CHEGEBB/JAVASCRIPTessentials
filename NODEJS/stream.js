const fs = require('fs');

const readstream = fs.createReadStream('./Modules/docs/doc3.txt', {encoding: 'utf8'});
const writestream = fs.createWriteStream('./Modules/docs/doc4.txt');

readstream.on('data', (chunk) =>{
    console.log('-----------------NEW CHUNK-----------------');
    console.log(chunk);
    writestream.write('\nNEW CHUNK\n');
    writestream.write(chunk);
})