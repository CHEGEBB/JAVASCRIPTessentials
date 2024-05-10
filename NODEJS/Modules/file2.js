// The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:

const fs = require('fs');
if(fs.existsSync('./docs/newappend.txt')) {
    fs.unlink('./docs/newappend.txt', (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('File deleted');
        }
    });
}else{
fs.appendFile('./docs/newappend.txt', 'Hello Content', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File created and content added');
    }
});
}