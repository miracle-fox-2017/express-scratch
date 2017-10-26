const fs = require('fs')

class City{
	constructor(file){
		this.file = file
		this.json = []
	}

	readFile(cb){
		fs.readFile(this.file, 'utf8', (err, data)=>{
			if(err){
				console.log(`ini ${data}`)
			}

			let parse = JSON.parse(data)
			this.json = parse
			cb(parse[0].cities)
		})

	}

	writeFile(json, cb){
		
		this.json.forEach(city=>{
			city.cities.push(json)
		})
		
		fs.writeFile(this.file, JSON.stringify(this.json), (err, data)=>{
			if(err){
				console.log(err)
			}

			cb()
		})
	}

	deleteFile(json, cb){

		this.json.forEach(del=>{
			del.cities.forEach((item, index)=>{
				if(item.id == json.id){
					this.json[0].cities.splice(index, 1)
				}

			})
		})

		fs.writeFile(this.file, JSON.stringify(this.json), (err, data)=>{
			if(err){
				console.log(err)
			}

			cb()
		})

	}

	editData(json, cb){
		this.json.forEach(city =>{
			city.cities.forEach(edit=>{
				if(edit.id == json.id){
					edit.name = json.name
					edit.province = json.province
				}
			})
		})

		fs.writeFile(this.file, JSON.stringify(this.json), (err, data)=>{
			if(err){
				console.log(err)
			}

			cb()
		})
	}
}

module.exports = City
