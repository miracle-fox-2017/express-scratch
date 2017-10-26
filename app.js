
const express = require('express')
const app = express()

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/users', function (req, res) {
  let obj = {
    users: [{
      username: 'hacktiv8',
      password: 'hacktiv8',
      email: 'hactiv8@hacktiv8.com'
    }, {
      username: 'johndoe',
      password: '12345',
      email: 'john@doe.com'
    }],
    cities: [{
      name: 'Jakarta',
      province: 'DKI Jakarta'
    }, {
      name: 'Bandung',
      province: 'Jawa Barat'
    }]
  }
  res.render('users', obj)
  
})

app.get('/cities', function (req, res) {
  let obj = {
    cities: [{
      id: '1',
      username: 'hacktiv8',
      password: 'hacktiv8',
      email: 'hactiv8@hacktiv8.com'
    }, {
      id:'2',
      username: 'johndoe',
      password: '12345',
      email: 'john@doe.com'
    }],
    cities: [{
      id:'1',
      name: 'tangerang',
      province: 'Banten'
    }, {
      id:'2',
      name: 'semarang',
      province: 'Jawa tengah'
    }]
  }
  res.render('cities', obj)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})