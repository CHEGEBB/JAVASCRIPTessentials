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

// directories
// create a directory
if(!fs.existsSync('./assets')){
fs.mkdir('./assets', (err) =>{
    if(err){
        console.log(err);
    }
    console.log('folder created');
})
}
else{
    fs.rmdir('./assets',(err) => {
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    });
};