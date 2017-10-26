const fs = require('fs')

class File {
  static readFile(callback) {
    let data = fs.readFile('data.json', 'utf8', (err, data) => {
      if(err) {
        console.log('Failed read file');
      } else {
        let dataJSON = JSON.parse(data)
        // console.log(dataJSON);
        callback(dataJSON)
      }
    })
  }
}

module.exports = File;
