const fs = require('fs')

function readFile(req,res,callback) {

  fs.readFile('data.json','utf8', function(err,data){
    if (err) {
      console.log(err);
    }
    else {
      // res.send(data)
      res.render('user',{data:data})
    }
    //console.log(data);
  })
}

module.exports = readFile
