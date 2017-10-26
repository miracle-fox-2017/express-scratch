let fs = require('fs')

class Cities{
  constructor(file){
    this.file        = file
    this.data_cities = []
  }

  getFile(cb){
    fs.readFile(this.file, 'utf8',(err,data)=>{
      if(err){
        console.log(err);
      }else{
        let parse = JSON.parse(data)
        // console.log(parse['cities']);
        cb(parse)
      }
    })
  }

}

let cities = new Cities('./data/data.json')
// cities.getFile()

module.exports = cities
