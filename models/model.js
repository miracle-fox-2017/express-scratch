const fs = require('fs');

class Model {
	constructor(file = 'data.json') {
		this.file = file;
	}

	getFileJSON(callback) {
		if (this.file !== null || this.file !== '') {
			fs.readFile(this.file, (err, data) => {
		      if (err) {
		        throw err;
		      }

		      callback(JSON.parse(data.toString()));
		   });
		}
	}
}

module.exports = Model;