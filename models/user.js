const fs = require('fs')

class User{
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
			cb(parse[0].users)
		})

	}

	writeFile(json, cb){
		
		this.json.forEach(user=>{
			user.users.push(json)
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
			del.users.forEach((item, index)=>{
				if(item.id == json.id){
					this.json[0].users.splice(index, 1)
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
		this.json.forEach(user =>{
			user.users.forEach(edit=>{
				if(edit.id == json.id){
					edit.username = json.username
					edit.password = json.password
					edit.email = json.email
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

module.exports = User
