var express = require('express');
var fs = require('fs');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

var app = express();
var port = process.env.PORT || 1024;

var path = process.cwd();

app.get('/', function (req, res) {
    res.sendFile(path + '/public/index.html');
});

app.get('/favicon.ico', function (req, res) {
});

app.post('/api/upload', upload.single('fileUploader'), function(req, res) {
    fs.unlinkSync(req.file.path);
	res.json({
	  size: req.file.size
	});
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});