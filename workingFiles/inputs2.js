process.stdin.on('readable', (data) => {
	if (chunk !== null) {
		var chunk = process.stdin.read()
		console.log('coming from inputs2........')
		console.log(chunk)
	} else {
		process.stdout.end('the process has ended...');
	}
})