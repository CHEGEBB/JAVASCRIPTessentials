// The File System module has methods for updating files:

// fs.appendFile()
// fs.writeFile()
// The fs.appendFile() method appends the specified content at the end of the specified file:

const fs = require('fs');

fs.appendFile('./docs/newappend.txt', 'We are addind or updating the content', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File updated');
    }
});