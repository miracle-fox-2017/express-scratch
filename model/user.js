const Model = require('./model')

class User {
  constructor() {

  }

  static getAllUsers(callback){
      this.read(function(data){
        callback(JSON.parse(data))
      })
    }
}


module.exports = User;
