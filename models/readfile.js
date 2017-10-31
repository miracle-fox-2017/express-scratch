const fs = require('fs')

class File {
  constructor(file) {
    this.file = file
  }

  readFile(callback) {
    let data = fs.readFile(this.file, 'utf8', (err, data) => {
      if(err) {
        console.log('Failed read file');
        console.log(err);
      } else {
        let dataJSON = JSON.parse(data)
        callback(dataJSON)
      }
    })
  }

  writeFile(data, callback) {
    fs.writeFile(this.file, data, 'utf8', (err) => {
      if(err) {
        console.log('Failed write data');
        console.log(err);
      }
      callback(err)
    })
  }
}

let file = new File('./data.json')

module.exports = file;
