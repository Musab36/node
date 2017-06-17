var fs = require('fs');

fs.writeFile('file3.txt', 'Hello content!', function(err) {
   if (err) throw err;
console.log("File Saved!");
});
