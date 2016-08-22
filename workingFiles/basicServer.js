const http = require('http')
const Chance = require('chance');
const chance = new Chance();
function handler(request, response) {
	response.writeHead(200, {'Content-Type':'text/plain'});
	response.write('this is a sentence you noob\n');
	request.on('data', (d) => {
		let message = d.toString();
		if (message.search('bad') != -1) {
			console.log(message)
			console.log("that is not nice. We must find them")
			response.write("you stop talking trash\n");
		} else if (message.search('end now') == 0) {
			response.end("it has ended...");
		} else {
			console.log('just another generic message\n');
			console.log(request.socket['_handle']['owner']['_readableState']);
			console.log(request.socket['_handle']['owner']['_writableState']);
			response.write(chance.sentence() + '\n');
		}
	})
}
const server = http.createServer(handler) ;

server.listen(8080, function() {
	console.log("Server is listening on port 8080");
})


// var http = require('http');
 
// http.createServer(function(request,response){
 
//  response.writeHead(200);
 
// request.on('data',function(message){
 
//  response.write(message);
 
//  });
 
//  request.on('end',function(){
 
//  response.end();
//  });
//  }).listen(8080);