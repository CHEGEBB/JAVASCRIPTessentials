const fs = require('fs');

// reading files
fs.readFile('./docs/doc.txt', (err, data) =>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});