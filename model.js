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

  static tampilkanDataUser(callback) {

    this.parsingData(function(data) {

      var dataUser = data.users

      callback(dataUser)

    })

  }

  static tampilkanDataCities(callback) {

    this.parsingData(function(data) {

      var dataCities = data.cities

      callback(dataCities)

    })
    
  }

}

module.exports = Model;
