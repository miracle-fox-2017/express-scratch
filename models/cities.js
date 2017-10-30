const File = require('./readfile')

class City {
  static add(data, callback) {
    File.readFile(dataJSON => {
      let obj = {
        id: dataJSON.cities[dataJSON.cities.length-1].id + 1,
        name: data.name,
        province: data.province
      }

      dataJSON.cities.push(obj)
      let newData = JSON.stringify(dataJSON)
      File.writeFile(newData, (err) => {
        callback(err)
      })
    })
  }

  static findById(idCity, callback) {
    File.readFile(dataJSON => {
      dataJSON.cities.forEach((dataCity) => {
        if(dataCity.id == idCity) {
          callback(dataCity)
        }
      })
    })
  }

  static edit(idCity, data, callback) {
    File.readFile(dataJSON => {
      let obj = {
        id: idCity,
        name: data.name,
        province: data.province
      }

      for(let i = 0; i < dataJSON.cities.length; i++) {
        if(dataJSON.cities[i].id == idCity) {
          dataJSON.cities.splice(i, 1, obj)
          let newData = JSON.stringify(dataJSON)
          File.writeFile(newData, (err) => {
            callback(err)
          })
        }
      }
    })
  }

  static delete(idCity, callback) {
    File.readFile(dataJSON => {
      for(let i = 0; i < dataJSON.cities.length; i++) {
        if(dataJSON.cities[i].id == idCity) {
          dataJSON.cities.splice(i, 1)
          let newData = JSON.stringify(dataJSON)
          File.writeFile(newData, (err) => {
            callback(err)
          })
        }
      }
    })
  }
}

module.exports = City;
