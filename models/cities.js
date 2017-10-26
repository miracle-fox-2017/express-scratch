const readWrite = require('./readWriteFile');

class Cities {
  static getCities(cb) {
    readWrite.readFile(dataCities=>{
      let cities = dataCities.cities
      cb(cities)
    })
  }

  static getOne(id,cb) {
    this.getCities(dataCities=>{
      for (var i = 0; i < dataCities.length; i++) {
        if(dataCities[i].id == id){
          cb(dataCities[i]);
        }
      }
    })
  }

  static getLastId(cb) {
    this.getCities(dataCities=>{
      dataCities.sort((a,b)=>{
        return a.id - b.id
      })
      let lastId = dataCities[dataCities.length-1].id
      cb(lastId);
    })
  }

  static addCity(cityNew){
    this.getCities(dataCities=>{
      let cities = dataCities
      cities.push(cityNew)
      readWrite.writeFileCity(cities)
    })
  }

  static editCity(cityEdit,cb) {
    this.getCities(dataCities=>{
      let cities = dataCities
      for (var i = 0; i < dataCities.length; i++) {
        if(dataCities[i].id == cityEdit.id){
          cities.splice(i, 1, cityEdit)
        }
      }
      readWrite.writeFileCity(cities)
    })
  }

  static deleteCity(id) {
    readWrite.readFile(data=>{
      for (var i = 0; i < data.cities.length; i++) {
        if(data.cities[i].id == id){
          data.cities.splice(i,1)
        }
      }
      console.log(data);
      readWrite.writeFile(JSON.stringify(data))
    })
  }
}

module.exports = Cities;
