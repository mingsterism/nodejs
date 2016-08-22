
// Gzip without using streams. All data placed in buffer before being sent to file. 
// const fs = require('fs');
// const zlib = require('zlib');

// const file = process.argv[2];

// fs.readFile(file, (err, buffer) => {
// 	zlib.gzip(buffer, (err, buffer) => {
// 		fs.writeFile(file + '.gz', buffer, err => {
// 			console.log('File successfully compressed');
// 		});
// 	});
// });



// Gzip with streams
const fs = require('fs');
const zlib = require('zlib');
const file = process.argv[2];

fs.createReadStream(file)
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream(file + '.gz'))
	.on('finish', () => console.log('File successfully compressed'));