const fs = require('fs');

class Model{
  
  static readFile(file, cb){
    fs.readFile(file, 'utf-8', function(err, data){
      let obj = JSON.parse(data);
      cb(obj)
    })
  }
  
  static writeFile(file,obj,newInput, cb){
    //declare id
    if(newInput.id == 0){
      newInput.id = obj.users.length+1;
    } 
    
    //push ke users
    obj.users.push(newInput);
    let string = JSON.stringify(obj);
    cb(obj);
    
    fs.writeFile(file, string, function(err){
      if(err){
        console.log('something wrong');
      }
    })
    
  }
  
  static editFile(file,obj,newInput, cb){
    //cari dulu lokasi
    let pos;
    for(let i = 0; i<obj.users.length; i++){
      if(obj.users[i].id == newInput.id){
        pos = i;
        break;
      }
    }
    // console.log(pos);
    obj.users.splice(pos,1,newInput)
    // console.log(obj);
    
    let string = JSON.stringify(obj);
    cb(obj);
    
    fs.writeFile(file, string, function(err){
      if(err){
        console.log('something wrong');
      }
    })
    
  }
  
  static deleteFile(file, id, cb){
    this.readFile(file, function(obj){
      // console.log(obj.users);
      // console.log(id);
      let pos = 0;
      //looping mencari id
      for(let i = 0; i<obj.users.length; i++){
        if(obj.users[i].id == id){
          // console.log('masuk sini cuy');
          pos = i;
        }
      }
      // console.log(pos);
      obj.users.splice(pos,1);
      // console.log(obj.users);
      
      let string = JSON.stringify(obj);
      cb(obj);
      
      fs.writeFile(file, string, function(err){
        if(err){
          console.log('something wrong');
        }
      })
      
    })
  }
  
  ////////////////////////////////////cities////////////////////////
  
  static writeFileCt(file,obj,newInput, cb){
    //declare id
    // console.log('MASUK SINI CUYYYY');
    // console.log(obj);
    newInput.id = obj.cities.length+1;
    
    //push ke users
    obj.cities.push(newInput);
    let string = JSON.stringify(obj);
    cb(obj);
    
    fs.writeFile(file, string, function(err){
      if(err){
        console.log('something wrong');
      }
    })
    
  }
  
  static editFileCt(file,obj,newInput, cb){
    //cari dulu lokasi
    let pos;
    for(let i = 0; i<obj.cities.length; i++){
      if(obj.cities[i].id == newInput.id){
        pos = i;
        break;
      }
    }
    // console.log(pos);
    obj.cities.splice(pos,1,newInput)
    // console.log(obj);
    
    let string = JSON.stringify(obj);
    cb(obj);
    
    fs.writeFile(file, string, function(err){
      if(err){
        console.log('something wrong');
      }
    })
    
  }

  static deleteFileCt(file, id, cb){
    this.readFile(file, function(obj){
      // console.log(obj.users);
      // console.log(id);
      let pos = 0;
      //looping mencari id
      for(let i = 0; i<obj.cities.length; i++){
        if(obj.cities[i].id == id){
          // console.log('masuk sini cuy');
          pos = i;
        }
      }
      // console.log(pos);
      obj.cities.splice(pos,1);
      // console.log(obj.users);
      
      let string = JSON.stringify(obj);
      cb(obj);
      
      fs.writeFile(file, string, function(err){
        if(err){
          console.log('something wrong');
        }
      })
      
    })
  }
}

module.exports = Model;