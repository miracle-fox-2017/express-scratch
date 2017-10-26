let fs = require('fs')

class Cities{
  constructor(file){
    this.file        = file
    this.data_cities = []
  }

  saveFile(data){
    // console.log('+++++',data);
    let to_JSON = JSON.stringify(data)
    console.log('?????', to_JSON);
    fs.writeFile('./data/data.json', to_JSON,(err)=>{
      if(err){
        console.log(err);
      }
    })
  }

  getFile(cb){
    fs.readFile(this.file, 'utf8',(err,data)=>{
      if(err){
        console.log(err);
      }else{
        console.log(data);
        let parse = JSON.parse(data)

        // this.data_cities.push(parse)
        cb(parse)
      }
    })
  }

  create(submit,cb){
    this.getFile((data)=>{
      // console.log('<<<<<<<',data.cities,'>>>>>>>');
      let last_index = []
      for(let i=0; i<data.cities.length; i++){
        last_index.push(data.cities[data.cities.length-1].id_cities)
      }

      data.cities.push({
        id_cities : (data.cities.length == last_index[0]) ? (data.cities.length + 1) : (last_index[0] + 1),
        name      : submit['name'],
        province  : submit['province'],
      })
      this.saveFile(data.cities)
      cb(data)
    })
  }

}

let cities = new Cities('./data/data.json')
// cities.saveFile()

module.exports = cities
