const fs = require('fs');

// reading files
// fs.readFile('./docs/doc.txt', (err, data) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });


// writing files
// fs.writeFile('./docs/doc.txt', 'Hello, Again', () => {
//     console.log('file was written');
// });   

// fs.writeFile('./docs/doc2.txt', 'Hello, You', () => {
//     console.log('file was written');
// });   

// writing or creating files we can also use the following methods:
// fs.appendFile()-this will append the data to the file
//fs.open()-this will create a file

// directories
// create a directory
// if(!fs.existsSync('./assets')){
// fs.mkdir('./assets', (err) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log('folder created');
// })
// }
// else{
//     fs.rmdir('./assets',(err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('folder deleted');
//     });
// };

// deleting files
if(!fs.existsSync('./docs/deleteme.txt')){
    fs.writeFile('./docs/deleteme.txt', 'I will be  deleted soon',(err) => {
        if(err){
            console.log(err);
        }
        console.log('file created');
    })
}
else{
    fs.unlink('./docs/deleteme.txt', (err) =>{
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    });
}