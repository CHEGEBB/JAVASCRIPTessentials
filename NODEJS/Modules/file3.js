// The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:

const fs = require('fs');

fs.open('./docs/newopen.txt', 'w',( err, file)=>{
    if(err){
        console.log(err);
    }else{
        console.log('File created');
    }

})
// When you specify the flag 'w' (writing) as the second argument, it means that the file should be opened for writing. If the file exists, its contents will be truncated (i.e., deleted), and if it doesn't exist, a new empty file will be created.

// So, in your example, the newopen.txt file will be created if it doesn't already exist, and it will be opened for writing. If it does exist, its contents will be cleared, and it will be opened for writing.