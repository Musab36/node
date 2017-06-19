var fs = require('fs');
var rs = fs.createReadStream('./winter.html');

rs.on('open', function() {
    console.log('File Opened!');
});