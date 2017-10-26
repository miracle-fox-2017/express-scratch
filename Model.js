const fs = require('fs')
class Model {
  constructor(file) {
      this.file = file;
  }
  getData(callback){//get data menerima callback
      fs.readFile(this.file.users, (err,data) =>{//
          if(err){
            throw err
          }
          else{
            callback(data) //data ini dilempar saat menthod ini dipanggil
          }
      })
  }

}

module.exports = Model;
