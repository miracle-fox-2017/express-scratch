const readWrite = require('./readWriteFile');

class Users {
  static getUsers(cb) {
    readWrite.readFile(dataFile=>{
      let users = dataFile.users
      cb(users)
    })
  }

  static getOne(id,cb) {
    this.getUsers(dataUsers=>{
      for (var i = 0; i < dataUsers.length; i++) {
        if(dataUsers[i].id == id){
          cb(dataUsers[i]);
        }
      }
    })
  }

  static getLastId(cb) {
    this.getUsers(dataUsers=>{
      dataUsers.sort((a,b)=>{
        return a.id - b.id
      })
      let lastId = dataUsers[dataUsers.length-1].id
      cb(lastId);
    })
  }

  static addUser(userNew){
    this.getUsers(dataUsers=>{
      let users = dataUsers
      users.push(userNew)
      readWrite.writeFileUser(users)
    })
  }

  static editUser(userEdit,cb) {
    this.getUsers(dataUsers=>{
      let users = dataUsers
      for (var i = 0; i < dataUsers.length; i++) {
        if(dataUsers[i].id == userEdit.id){
          users.splice(i, 1, userEdit)
        }
      }
      readWrite.writeFileUser(users)
    })
  }

  static deleteUser(id) {
    readWrite.readFile(data=>{
      for (var i = 0; i < data.users.length; i++) {
        if(data.users[i].id == id){
          data.users.splice(i,1)
        }
      }
      console.log(data);
      readWrite.writeFile(JSON.stringify(data))
    })
  }
}

module.exports = Users;
