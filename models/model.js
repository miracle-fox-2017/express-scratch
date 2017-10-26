const fs = require('fs')

class Model
{
  constructor(file)
  {
    this.file = file
  }

  readFile()
  {
    return fs.readFileSync(this.file, 'utf-8')
  }

  writeFile(data)
  {
    fs.writeFileSync(this.file, JSON.stringify(data))
  }
}

module.exports = Model