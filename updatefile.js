var fs = require('fs');

fs.appendFile('file1.txt', 'How are you doing?', function (err) {
     if (err) throw err;
console.log("File Updated!");
});
