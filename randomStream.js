const stream = require('stream');
const Chance = require('chance');

const chance = new Chance();

class RandomStream extends stream.Readable {
	constructor(options) {
		super(options);
	}

	_read(size) {
		const chunk = chance.paragraph({sentences:1});
		// console.log(`Pushing chunk of size: ${chunk.length}`);
		this.push(chunk, 'utf8');
		if (chance.bool({likelihood: 5})) {
			this.push('....................................');
		}
	}
}

module.exports = RandomStream;