const fs = require('fs');

class Cities {
  static writeFile(cb){
    fs.readFile('./data/data.json','utf8',(err, data)=>{
      if(!err){
        let dataCities = JSON.parse(data)
        cb(dataCities)
      }
    })
  }
  static getCities(cb){
    this.writeFile(data=>{
      cb(data)
    })
  }
  static addCities(add){
    this.writeFile(data=>{
      console.log(add);
    })
    // fs.readFile('./data/data.json','utf8',(err, data)=>{
    //   if(!err){
    //     let dataCities = JSON.parse(data)
    //     console.log('----------',add);
        // let no = dataCities.cities[dataCities.cities.length - 1].id + 1
        // dataCities.cities.push(
        //   {
        //     id: no,
        //     name: add.name,
        //     province: add.province
        //   })
        //   console.log(dataCities);
    //   }
    // })
    // dataTodo.push({
    //   id: dataTodo[dataTodo.length - 1].id + 1,
    //   status: "[ ]",
    //   task: add,
    //   created_date: new Date(),
    //   completed_date : '',
    //   tag : []
    // })
    // let save = JSON.stringify(dataTodo)
    // fs.writeFile('data.json', save, (err) => {
    //   let msg
    //   if (!err){
    //       msg = `Added "${add}" to your TODO list`
    //   } else {
    //       msg = `Failed to add TODO`
    //   }
    //   cb(msg)
    // });
  }
}

module.exports = Cities;
