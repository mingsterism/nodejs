const fs = require('fs');
const zlib = require('zlib');
const http = require('http');
const path = require('path');
const file = process.argv[2];
const server = process.argv[3];
const options = {
	hostname: server,
	port: 8080,
	// path: './',
	method: 'PUT',
	headers: {
		// filename: path.basename(file),
		'Content-Type': 'application/octet-stream',
		'Content-Encoding': 'gzip'
	}
};
const req = http.request(options, res => {
	console.log('Server response: ' + res.statusCode);
});
// fs.createReadStream(file)
// 	.pipe(zlib.createGzip())
// 	.pipe(req)
// 	.on('finish', () => {
// 		console.log('File successfully sent');
// });


process.stdin
	.on('data', (chunk) => {
		console.log(chunk);
	})
	.pipe(req)
	.on('finish', () => {
		console.log('data successfully sent...');
	})
