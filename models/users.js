const File = require('./readfile')

class User {
  static add(data, callback) {
    File.readFile(dataJSON => {
      let obj = {
        id: dataJSON.users[dataJSON.users.length-1].id + 1,
        username: data.username,
        password: data.password,
        email: data.email
      }

      dataJSON.users.push(obj)
      let newData = JSON.stringify(dataJSON)
      File.writeFile(newData, (err) => {
        callback(err)
      })
    })
  }

  static findById(idUser, callback) {
    File.readFile(dataJSON => {
      for(let i = 0; i < dataJSON.users.length; i++) {
        if(dataJSON.users[i].id == idUser) {
          callback(dataJSON.users[i])
        }
      }
    })
  }

  static edit(idUser, data, callback) {
    File.readFile(dataJSON => {
      let obj = {
        id: idUser,
        username: data.username,
        password: data.password,
        email: data.email
      }

      for(let i = 0; i < dataJSON.users.length; i++) {
        if(dataJSON.users[i].id == idUser) {
          dataJSON.users.splice(i, 1, obj)
          let newData = JSON.stringify(dataJSON)
          File.writeFile(newData, (err) => {
            callback(err)
          })
        }
      }
    })
  }

  static delete(idUser, callback) {
    File.readFile(dataJSON => {
      for(let i = 0; i < dataJSON.users.length; i++) {
        if(dataJSON.users[i].id == idUser) {
          dataJSON.users.splice(i, 1)
          let newData = JSON.stringify(dataJSON)
          File.writeFile(newData, (err) => {
            callback(err)
          })
        }
      }
    })
  }
}

module.exports = User;
