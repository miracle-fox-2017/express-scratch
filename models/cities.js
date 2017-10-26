const fs = require('fs');

class Cities {
  static readFile(cb){
    fs.readFile('./data/data.json','utf8',(err, data)=>{
      if(!err){
        let dataCities = JSON.parse(data)
        cb(dataCities)
      }
    })
  }
  static writeFile(data){
    let save = JSON.stringify(data)
    fs.writeFile('./data/data.json', save, (err) => {
      if (!err){
          console.log(`Data Cities Saved`)
      } else {
          console.log(`Failed to save data`)
      }
    });
  }
  static getIdCities(id,cb){
    this.readFile(data=>{
      data.cities.forEach(dataCities=>{
        if(dataCities.id === +id){
          cb(dataCities)
        }
      })
    })
  }
  static getCities(cb){
    this.readFile(data=>{
      cb(data)
    })
  }
  static addCities(add){
    this.readFile(data=>{
      let no = data.cities[data.cities.length - 1].id + 1
      data.cities.push(
        {
          id: no,
          name: add.name,
          province: add.province
        })
        this.writeFile(data)
    })
  }

  static editCities(id, edit, cb){
    this.readFile(data=>{
      data.cities.forEach(dataCities=>{
        if(dataCities.id === +id){
          dataCities.name = edit.name
          dataCities.province = edit.province
        }
      })
      this.writeFile(data)
    })
  }

  static deleteCity(id){
    this.readFile(data=>{
      data.cities.forEach(dataCities=>{
        if(dataCities.id === +id){
          data.cities.splice(data.cities.indexOf(dataCities), 1)
        }
      })
      this.writeFile(data)
    })
  }

}

module.exports = Cities;
