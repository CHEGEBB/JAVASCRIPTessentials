// The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:

const fs = require('fs');

fs.appendFile('./docs/newappend.txt', 'Hello Content', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File created and content added');
    }
});