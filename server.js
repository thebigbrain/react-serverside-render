var path = require("path");
var express = require('express');
var app = express();

app.get('/', function(req, res) {
	var options = {
		root : __dirname + '/public/',
		dotfiles : 'deny',
		headers : {
			'x-timestamp' : Date.now(),
			'x-sent' : true
		}
	};

	var fileName = "index.html";
	res.sendFile(fileName, options, function(err) {
		if (err) {
			console.log(err);
			res.status(err.status).end();
		}

	});
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(80, function() {
	var port = 80;
	console.log("start server to listen on port: ", port);
});
