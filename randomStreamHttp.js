const Chance = require('chance');
const chance = new Chance();

require('http').createServer((req, res) => {
	var headers = req.headers;
	var method = req.method;
	var url = req.url;
	var body = [];
	req.on('error', function(err) {
		console.error(err);
	}).on('data', function(chunk) {
		console.log(chunk)
		body.push(chunk);
	}).on('end', function() {
		body = Buffer.concat(body).toString();
	});

	res.writeHead(200, {'Content-Type': 'text/plain'});
	while (chance.bool({likelihood:95})) {
		res.write(chance.string() + '\n');
	}
	res.end('\n The end...\n');
	// res.on('end', () => {console.log("it has ended...")})
	res.on('finish', () => console.log('All data was sent'));
	res.on('data', (data) => {
		console.log('received data...', data);
	})
}).listen(8080, () => console.log('listening on http//localhost:8080'))