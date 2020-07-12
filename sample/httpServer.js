var http = require("http");

http.createServer(function (req, res) {
	var body = "hello Server";
	res.setHeader('Content-Type', 'text/html; charset=utf-8');
	res.end("<html><body><h1> hello </h1></body></html>" );
}).listen(3000);

