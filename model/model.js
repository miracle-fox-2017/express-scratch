const fs = require('fs')
class Model{
	getData(callback){
		fs.readFile('./datajson/data.json','utf-8', (err,data) =>{		
			data = JSON.parse(data)
			callback(data)
		})
	}
	writeData(data){
		data = JSON.stringify(data);
		console.log(data)
		fs.writeFile('./datajson/data.json',data, (err) =>{		
			if (err) throw err;
		})
	}	
}

// let model = new Model()
// model.getData()
module.exports = Model