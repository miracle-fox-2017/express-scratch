const fs = require('fs')

class Model{
	constructor(){
		this.file = 'data.json'
		this.data = ''
		this.users = ''
		this.cities = ''
	}

	readFile(cb){
		fs.readFile(this.file, (err, data)=>{
			if(!err){
				this.data = JSON.parse(data) 
				cb(this.data);
			}
		})
	}

	writeFile(data, cb){
		fs.writeFile(this.file, JSON.stringify(data), err=>{
			if(!err){
				cb(err)
			}
		})
	}

	getUsers(cb){
		this.readFile(result=>{
			this.users = result.users 
			cb(this.users);
		})
	}

	addUser(data, cb){
		this.getUsers(result=>{
			result.push(data)

			this.writeFile(this.data, err=>{
				cb(err)
			})
		})
	}

	getUserById(data, cb){
		this.getUsers(result=>{
			result.forEach(user=>{
				if(user.id === data){
					cb(user)
				}
			})
		})
	}

	editUser(data, cb){

		this.getUsers(result=>{
			result.forEach((user, index)=>{
				if(user.id === data.id){
					result[index] = data
				}
			})

			this.writeFile(this.data, err=>{
				cb(err)
			})	
		})

	}

	deleteUser(data, cb){
		this.getUserById(data, result=>{
			this.getUsers(user=>{
				let deleteIdx = user.indexOf(result)
				user.splice(deleteIdx, 1)

				this.writeFile(this.data, err=>{
					cb(err)
				})
			})
		})
	}

	getCities(cb){
		this.readFile(result=>{
			this.cities = result.cities 
			cb(this.cities);
		})
	}

	getCitiesById(id, cb){
		this.getCities(result=>{
			result.forEach(city=>{
				if(city.id === id){
					cb(city)
				}
			})	
		})
		
	}

	addCity(data, cb){

		this.getCities(result=>{
			result.push(data)

			this.writeFile(this.data, err=>{
				cb(err)
			})
		})
	}

	editCity(data, cb){

		for(let i=0; i<this.cities.length; i++){
			if (this.cities[i].id === data.id) {
				this.cities[i] = data
			}
		}

		this.writeFile(this.data, err=>{
			cb(err)
		})
	}

	deleteCity(data, cb){
		this.getCitiesById(data, result=>{
			this.getCities(city=>{
				let deleteIdx = city.indexOf(result)

				city.splice(deleteIdx, 1)

				this.writeFile(this.data, err=>{
					cb(err)
				})	
			})
			
		})
	}
}

module.exports = Model