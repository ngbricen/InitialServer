var http = require('http');

var PORT = 8080;
var PORT2 = 8090;

function handleRequestHappy(req, res){
	res.end('You have successfully completed your Bootcamp server.' + req.url);
}

function handleRequestBad(req, res){
	res.end('You have failed!!!!' + req.url);
}

var server = http.createServer(handleRequestHappy);
var serverBad = http.createServer(handleRequestBad);

server.listen(PORT,function(){
	console.log(`server listening on: http://localhost:${PORT}`);
});

serverBad.listen(PORT2,function(){
	console.log(`server listening on: http://localhost:${PORT2}`);
});