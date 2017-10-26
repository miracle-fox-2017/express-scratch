const fs = require('fs');

class ReadWriteFile {
  constructor() {
    this.file = './databases/data.json'
  }

  readFile(cb) {
    fs.readFile(this.file, (err,data) => {
      let dataParse = JSON.parse(data)
      cb(dataParse);
    })
  }

  writeFile(newData) {
    console.log(newData,' =======masuk');
    fs.writeFile(this.file, newData, err=>{});
  }

  writeFileUser(newUser,cb) {
    this.readFile(dataFile => {
      let data = dataFile
      dataFile.users = newUser
      let dataStr = JSON.stringify(data)
      if(dataStr.length > 0){
        this.writeFile(dataStr)
      }
    })
  }

  writeFileCity(newUser,cb) {
    this.readFile(dataFile => {
      let data = dataFile
      dataFile.cities = newUser
      let dataStr = JSON.stringify(data)
      if(dataStr.length > 0){
        this.writeFile(dataStr)
      }
    })
  }
}

let readWrite = new ReadWriteFile()

module.exports = readWrite;
