var fs = require('fs');

fs.rename('file1.txt', 'myFile1.txt', function(err) {
    if (err) throw err;
console.log("File Renamed!");
});
