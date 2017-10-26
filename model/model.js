const fs = require('fs');
class Model
{
  constructor(filename)
  {
    this.filename = filename;
  }
  
  readFile(cb)
  {
    fs.readFile(this.filename, function(err, data)
    {
      if (err)
      {
        console.log(err);
      }
      else
      {
        cb(data.toString());
      }
    });
  }
  
  writeFile(data)
  {
    fs.writeFile(this.filename, JSON.stringify(data), function(err)
    {
      if (err)
      {
        console.log(err);
      }
    })
  }
}


module.exports = Model;