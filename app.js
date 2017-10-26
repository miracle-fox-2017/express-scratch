const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const Model = require('./model');

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

  Model.tampilkanDataUser(function(dataUser) {

    res.render('users', {data: dataUser})

  })

})

app.get('/cities', function(req, res) {
  Model.tampilkanDataCities(function(dataCities) {
    res.render('cities', {data: dataCities})
  })
})



app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})
