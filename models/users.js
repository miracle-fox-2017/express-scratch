const fs = require('fs');
class Users {
  static getUsers(cb){
    fs.readFile('./data/data.json','utf8',(err, data)=>{
      console.log(data);
      if(!err){
        let dataUsers = JSON.parse(data)
        cb(dataUsers)
      }
    })
  }
}
module.exports = Users;
