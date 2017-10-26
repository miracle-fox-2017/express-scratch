const fs = require('fs')

fs.readFile('data.json', 'utf8', (err, data) => {
  var a = JSON.parse(data)
  console.log(a.users[0]);
})
