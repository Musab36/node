var http = require('http');
var uc = require('upper-case');

htt.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'text/html'});
    res.write(uc("hello world!"));
    res.end();
}).listen(3333);
