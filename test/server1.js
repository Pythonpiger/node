var http = require("http");

var server = http.createServer(function(req,res){
	res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
	res.end("LZ我要和你网恋！")
});
server.listen(8088,"127.0.0.1")