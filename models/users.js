const fs = require('fs');
class Users {
  static readFile(cb){
    fs.readFile('./data/data.json','utf8',(err, data)=>{
      if(!err){
        let dataUsers = JSON.parse(data)
        cb(dataUsers)
      }
    })
  }
  static writeFile(data){
    let save = JSON.stringify(data)
    fs.writeFile('./data/data.json', save, (err) => {
      if (!err){
          console.log(`Data Users Saved`)
      } else {
          console.log(`Failed to save data`)
      }
    });
  }
  static getIdUsers(id,cb){
    this.readFile(data=>{
      data.users.forEach(dataUsers=>{
        if(dataUsers.id === +id){
          cb(dataUsers)
        }
      })
    })
  }
  static getUsers(cb){
    this.readFile(data=>{
      cb(data)
    })
  }
  static addUsers(add,cb){
    this.readFile(data=>{
      let no = data.users[data.users.length - 1].id + 1
      data.users.push(
        {
          id: no,
          username: add.username,
          password: add.password,
          email: add.email
        })
        cb()
        this.writeFile(data)
    })
  }

  static editUsers(id, edit, cb){
    this.readFile(data=>{
      data.users.forEach(dataUsers=>{
        if(dataUsers.id === +id){
          dataUsers.username = edit.username,
          dataUsers.password = edit.password,
          dataUsers.email = edit.email
        }
      })
      cb()
      this.writeFile(data)
    })
  }

  static deleteCity(id, cb){
    this.readFile(data=>{
      data.users.forEach(dataUsers=>{
        if(dataUsers.id === +id){
          data.users.splice(data.users.indexOf(dataUsers), 1)
        }
      })
      cb()
      this.writeFile(data)
    })
  }
}
module.exports = Users;
