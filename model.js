const fs = require('fs');

class Model {

  static bacaFile(namafile, callback) {
    fs.readFile(namafile, 'utf8', function(err, data) {
      if(err) {
        console.log('pesan error:', err);
      }

      callback(data)

    })
  }

  static parsingData(callback) {

    this.bacaFile('data.json', function(data) {

      var dataParse = JSON.parse(data)

      callback(dataParse)

    })

  }

  static getLastIdCities(callback) {

    this.parsingData(function(data) {

      var dataLastId = data[0].cities[data[0].cities.length - 1].id

      callback(dataLastId)

    })

  }

  static getLastIdUsers(callback) {

    this.parsingData(function(data) {

      var dataLastId = data[0].users[data[0].users.length - 1].id

      callback(dataLastId)

    })

  }

  static tampilkanDataUser(callback) {

    this.parsingData(function(data) {

      var dataUser = data[0].users

      callback(dataUser)

    })

  }

  static tambahkanDataUsers(obj) {

    this.parsingData(function(data) {

      data[0].users.push(obj)

      fs.writeFile('data.json', JSON.stringify(data))

    })

  }

  static hapusDataUsers(id) {

    this.parsingData(function(data) {

      for(var i = 0; i < data[0].users.length; i++) {
        if(data[0].users[i].id == id) {
          data[0].users.splice(i, 1)
        }
      }

      fs.writeFile('data.json', JSON.stringify(data))

    })

  }

  static tampilkanDataUsersById(id, callback) {
    this.parsingData(function(data) {

      for(var i = 0; i < data[0].users.length; i++) {
        if(data[0].users[i].id == id) {
          var dataUsersById = data[0].users[i]
        }
      }

      callback(dataUsersById)

    })
  }

  static editDataUsers(id, dataobj) {
    this.parsingData(function(data) {

      for(var i = 0; i < data[0].users.length; i++) {
        if(data[0].users[i].id == id) {
          data[0].users[i].username = dataobj.username
          data[0].users[i].password = dataobj.password
          data[0].users[i].email = dataobj.email
        }
      }
      fs.writeFile('data.json', JSON.stringify(data))
    })
  }

  static tampilkanDataCities(callback) {

    this.parsingData(function(data) {

      var dataCities = data[0].cities

      callback(dataCities)

    })

  }

  static tambahkanDataCities(obj) {

    this.parsingData(function(data) {

      data[0].cities.push(obj)

      fs.writeFile('data.json', JSON.stringify(data))

    })

  }

  static hapusDataCities(id) {

    this.parsingData(function(data) {

      for(var i = 0; i < data[0].cities.length; i++) {
        if(data[0].cities[i].id == id) {
          data[0].cities.splice(i, 1)
        }
      }

      fs.writeFile('data.json', JSON.stringify(data))

    })

  }

  static tampilkanDataCitiesById(id, callback) {
    this.parsingData(function(data) {

      for(var i = 0; i < data[0].cities.length; i++) {
        if(data[0].cities[i].id == id) {
          var dataCitiesById = data[0].cities[i]
        }
      }

      callback(dataCitiesById)

    })
  }

  static editDataCities(id, dataobj) {
    this.parsingData(function(data) {

      for(var i = 0; i < data[0].cities.length; i++) {
        if(data[0].cities[i].id == id) {
          data[0].cities[i].name = dataobj.name
          data[0].cities[i].province = dataobj.province
        }
      }
      fs.writeFile('data.json', JSON.stringify(data))
    })
  }

}

module.exports = Model
