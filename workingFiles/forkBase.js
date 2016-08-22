// Version 1---------------------------------------------
// const spawn = require('child_process').spawn;
// const Writable = require('stream').Writable;
// const py = spawn('python', ['multipy.py']);

// var data = [1, 2, 3, 4, 5];
// dataString = '';

// py.stdout.on('data', (data) => {
// 	console.log(data.toString());
// })
// const fs = require('fs');
// const js = spawn('node', ['inputs.js']);

// js.stdout.on('data', (data) => {
// 	console.log(data);
// })

// process.stdin.pipe(process.stdout)
// var ws = fs.createWriteStream('inputs.js');
// process.stdin.setEncoding('utf8');

// py.stdin.write(JSON.stringify(data));
// py.stdin.end();

// Version 2-----------------------------------------------------
 var child = require('child_process');
 var inputs1 = child.spawn('node', ['inputs.js']);
 var inputs2 = child.spawn('node', ['inputs2.js'])

 process.stdin.resume();
 process.stdin.pipe(inputs1.stdin);
 inputs1.stdout.pipe(process.stdout);
 inputs1.stdin.on('end', function() {
   process.stdout.write('REPL stream ended.');
 });
 inputs1.on('exit', function (code) {
   process.exit(code);
 });

 process.stdin.pipe(inputs2.stdin);
 inputs2.stdout.pipe(process.stdout);
 inputs1.stdin.on('end', function() {
   process.stdout.write('REPL stream ended.');
 });
 inputs1.on('exit', function (code) {
   process.exit(code);
 });
// Version 3---------------------------------------------------
// var child = require('child_process');
// var inputs1 = child.spawn('node', ['inputs.js']);
// var x = 10;
// inputs1.stdin.write(x.toString());
// inputs1.stdin.end();

// inputs1.stdout.on('data', (data) => {
// 	console.log(data.toString());
// })
