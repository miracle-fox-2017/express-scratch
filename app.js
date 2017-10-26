const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser');

const app = express()
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('views', './views')
app.set('view engine', 'ejs')

// Routing
app.get('/', function (req, res) {
  res.render('home', {nama: 'wisnu dj'})
})

app.get('/users', function(req, res) {
  res.render('users', {username: 'hacktiv8', password: 'hacktiv8', email: 'hactiv8@hacktiv8.com'})
})

app.get('/cities', function(req, res) {
  res.render('cities', {name: 'Jakarta', provience: 'DKI Jakarta'})
})


app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})
