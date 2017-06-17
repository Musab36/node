var fs = require('fs');

fs.writeFile('file3.txt', 'What is going on here?', function(err) {
   if (err) throw err;
console.log("File Replaced");
});
