const fs = require('fs')

class Model{
    constructor(){
       
        // this.dataParsed = JSON.parse(this.data)
    }
    data(cb){
      fs.readFile('data.json',(err,data) =>{
        if(err)
          throw err;
        
          cb(data)
          
        
      });
    }

    showData(cb){
      this.data(function(data){
        cb(JSON.parse(data))
      }) 
    }
  
    showDataUsers(cb){
      this.data(function(data){
        // console.log(data.users)
        cb(JSON.parse(data).users);
        // console.log(JSON.parse(data).users)
      })  
    }
    showDataCities(cb){
        this.data(function(data){
            cb(JSON.parse(data).cities);
        })
    }
    showDataCitiesName(){
      this.data(function(data){
          console.log(JSON.parse(data).cities)
      })
  }  
  }
  
  let dataBase = new Model()
  
//   dataBase.showDataUsers()
  // dataBase.showData()

  module.exports = Model