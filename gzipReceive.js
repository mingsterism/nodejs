// const http = require('http');
// const fs = require('fs');
// const zlib = require('zlib');
// const server = http.createServer((req, res) => {
// 	const filename = req.headers.filename;
// 	console.log('File request received: ' + filename);
// 	req
// 		.pipe(zlib.createGunzip())
// 		.pipe(fs.createWriteStream(filename))
// 		.on('finish', () => {
// 			res.writeHead(201, {'Content-Type': 'text/plain'});
// 			res.end("That's it\n");
// 			console.log(`File saved: ${filename}`);
// 		});
// 	});

// server.listen(4000, () => console.log('Listening'));




var http = require('http');
var fs = require('fs');
 http.createServer(function(request,response){
 response.writeHead(200);
 var destinationFile = fs.createWriteStream("destination.md");
 request.pipe(destinationFile);
 
var fileSize = request.headers['content-length'];
 var uploadedBytes = 0 ;
 
request.on('data',function(d){
 
 uploadedBytes += d.length;
 var p = (uploadedBytes/fileSize) * 100;
 response.write("Uploading " + parseInt(p)+ " %\n");
 
});
 
request.on('end',function(){
 response.end("File Upload Complete");
 });
 
}).listen(8080,function(){
 
 console.log("server started");
 
 });