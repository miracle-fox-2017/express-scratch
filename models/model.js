const fs = require('fs');

class Model {
	constructor(file = 'data.json') {
		this.file = file;
	}

	getDataFromJSON(callback) {
		if (this.file !== null || this.file !== '') {
			fs.readFile(this.file, (err, data) => {
		      if (err) {
		        throw err;
		      }

		      callback(JSON.parse(data.toString()));
		   });
		}
	}

	writeDataToJSON(data) {
		fs.writeFile(this.file, JSON.stringify(data),(err) => {
			if (err) {
				throw err;
			}
		})
	}
}

module.exports = Model;