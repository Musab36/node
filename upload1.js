var http = require('http');
var formidable = require('formidable');


http.createServer(function(req, res) {
	if (req.url == '/fileupload') {
		var form = new formidable.IncomingForm();
		form.parse(req, function(err, fields, files) {
			res.write('File Uploaded!');
			res.end();
		});
	}else{
	res.writeHead(200, {'content-type': 'text/html'});
	
	res.write('<form action="fileupload" method="post" ecntype="multipart/form-data">');
	res.write('<input type="file" name="fileupload"><br>');
	res.write('<input type="submit">');
	res.write('</form>');
	return res.end();
	}
}).listen(3672);

