// process.stdin.setEncoding('utf8');

function square(x) {
	return x * x
}

process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if (chunk !== null) {
  	isNum = Number(chunk);
  	if (!isNaN(isNum)) {
  		console.log('Number is: ', isNum);
  		console.log('squaring num is', square(isNum));
  	} else {
    	process.stdout.write(`data: ${chunk}`);
  	}
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});

//------------------------------------------------------
// var stdin = process.openStdin();

// var data = "";

// stdin.on('data', function(chunk) {
//   data += chunk;
// });

// stdin.on('end', function() {
//   console.log("DATA:\n" + data + "\nEND DATA");
// });