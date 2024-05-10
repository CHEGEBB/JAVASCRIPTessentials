// To rename a file with the File System module,  use the fs.rename() method.

// The fs.rename() method renames the specified file:

const fs = require('fs');

fs.rename ('./docs/newappend.txt', './docs/renamed.txt', (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('File renamed');
    }
});