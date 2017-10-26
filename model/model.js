
const fs = require('fs')




class Model {
  constructor(fileName) {
    this.fileName = fileName
  }


  read (callback){
    fs.readFile(this.fileName, 'utf8', (err,data)=>{
      if(err){
      console.log(err);
      }
      callback(data)
    })
  }

  saving(file,callback){
    console.log('hooo');
    fs.writeFile(this.fileName,  JSON.stringify(file), (err)=>{
      if(err){
        console.log(err);
      }
      callback(err)
    })
  }

  getAllUsers(callback){
    this.read(function(data){
      callback(JSON.parse(data))
    })
  }


  addUser(req,callback){

    this.read(function(data){
      let dataLama = JSON.parse(data)
      let obj = {
        "id": dataLama.users[dataLama.users.length-1].id+1,
        "username" : req.body.username,
        "password" : req.body.password,
        "email" : req.body.email
      }
      dataLama.users.push(obj)
      callback(dataLama)
    })
  }

  findId(req, callback){
    let row;
    this.read(function(data){
      let dataLama = JSON.parse(data)
      dataLama.users.forEach((item)=>{
      if(item.id == req.params.id){
        console.log(item.id);
        row = item
      }
      })
      callback(row)
    })
  }

  update(req, callback){
    this.read(function(data){
      let dataLama = JSON.parse(data)
      dataLama.users.forEach((item)=>{
        if(req.params.id == item.id){
          item.username = req.body.username
          item.password = req.body.password
          item.email = req.body.email
        }
      })
      callback(dataLama)
    })
  }

  // destroy(req, callback){
  //   let arr = []
  //   this.read(function(data){
  //     let dataLama = JSON.parse(data)
  //     for(let i =0; i < dataLama.users.length; i++){
  //
  //       // if(dataLama.users[i].id !== req.params.id){
  //       //   dataLama.users[i].splice(i, 1)
  //       // }
  //     }
  //     console.log(dataLama);
  //     console.log('-----------');
  //     callback(dataLama)
  //   })
  // }



  getAllCities(callback){
    this.read(function(data){
      callback(JSON.parse(data))
    })
  }



}




module.exports = Model
