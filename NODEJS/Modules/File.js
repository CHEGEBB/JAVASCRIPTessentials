const fs = require('fs');

// reading files
// fs.readFile('./docs/doc.txt', (err, data) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// writing files
fs.writeFile('./docs/doc.txt', 'Hello, Again', () => {
    console.log('file was written');
})    