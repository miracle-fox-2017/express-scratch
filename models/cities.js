let fs = require('fs')

class Cities{
  constructor(file){
    this.file        = file
    this.data_cities = []
  }

  saveFile(data){
    // console.log('+++++',data);
    let to_JSON = JSON.stringify(data)
    console.log('>>>>IN<<<<', to_JSON);
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
        let parse = JSON.parse(data)
        // console.log('>>>>>',parse);
        // this.data_cities.push(parse)
        cb((parse))
      }
    })
  }

  create(submit,cb){
    this.getFile((data)=>{
      // console.log('<<<<<<<',data,'>>>>>>>');
      let last_index = []
      for(let i=0; i<data[0].cities.length; i++){
        last_index.push(data[0].cities[data[0].cities.length-1].id_cities)
      }
      // console.log(data[0].cities.length,'<<<<');
      // console.log('>>>>',last_index[0]);
      data[0].cities.push({
        id_cities : (data[0].cities.length == last_index[0]) ? (data[0].cities.length + 1) : (last_index[0] + 1),
        name      : submit['name'],
        province  : submit['province'],
      })
      this.saveFile(data)
      cb(data)
    })
  }

}

let cities = new Cities('./data/data.json')
// cities.saveFile()

module.exports = cities
