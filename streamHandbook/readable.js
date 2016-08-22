// var Readable = require('stream').Readable;
// const http = require('http');
// const options = {
// 	port: 8080, 
// 	method: 'POST', 
// }

// var c = 97;
// var rs = new Readable;
// rs._read = function() {
// 	rs.push(String.fromCharCode(c++));
// 	if (c > 'z'.charCodeAt(0)) rs.push(null);
// };

// rs.pipe(process.stdout);
// rs.push('Beep ');
// rs.push('Boop\n');
// rs.push(null);

// -----------------------------------------------------------
var Readable = require('stream').Readable;
var rs = Readable();

var c = 97 - 1;

rs._read = function() {
	if (c >= 'z'.charCodeAt(0)) return rs.push(null);
	setTimeout(function() {
		rs.push(String.fromCharCode(++c));
	}, 100);
}

rs.pipe(process.stdout);

process.on('exit', function() {
	console.error('\n_read() called ' + (c - 97) + ' times');
});

process.stdout.on('error', process.exit);