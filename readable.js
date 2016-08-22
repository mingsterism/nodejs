// non flowing mode---------------
// process.stdin
// 	.on('readable', () => {
// 		let chunk;
// 		console.log('new data available');
// 		while ((chunk = process.stdin.read()) !== null) {
// 			console.log(chunk.length);
// 			// console.log(`Chunk read: (${chunk.length}) " ${chunk.toString()}"`);
// 		}
// 	})
// 	.on('end', () => process.stdout.write('End of stream\n'));


// flowing mode ---------------------------
process.stdin
	.on('data', (chunk) => {
		console.log('new data available');
		console.log(chunk.length);
	})
	.on('end', () => process.stdout.write('End of stream\n'));