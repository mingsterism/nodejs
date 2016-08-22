const http = require('http');
const path = require('path');
const server = process.argv[3];
const options = {
	hostname: server,
	port: 8080,
	method: 'POST',
	headers: {
		'Content-Type': 'text',
	}
};

const req = http.request(options, res => {
	console.log('Server response: ' + res.statusCode);
	res.pipe(process.stdout);
});

// process.stdin
// 	.on('data', (d) => {
// 		req.write(d);
// 	})
// 	.on('end', () => process.stdout.write('End of stream\n'));

process.stdin.pipe(req)

