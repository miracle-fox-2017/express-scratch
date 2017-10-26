let fs = require('fs')

class Users{
  constructor(file){
    this.file = file
    this.data_user = []
  }

  getFile(cb){
    fs.readFile(this.file,'utf8',(err,data)=>{
      if(err){
        console.log(err);
      }else{

        let parse = JSON.parse(data)
        // console.log(parse[0]['users']);
        cb(parse)
      }
    })
  }

}

let users = new Users('./data/data.json')

module.exports = users
