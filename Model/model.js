const fs = require('fs')

function readfile (call){
  fs.readFile('./data.json','utf-8',(err,data)=>{
    if (err) throw err;
    else {
      // console.log(data);
      // let obj = {data:data}
      call(JSON.parse(data))
    }
  })
}

function save (data,input) {
  fs.writeFile('./data.json',JSON.stringify(data),(err,data)=>{
    if (err) throw err;
    else {
      input(data)
    }
  })
}

module.exports = readfile
// export {readfile} ;
// exports.readfile = function () {
//   // body...
// };
