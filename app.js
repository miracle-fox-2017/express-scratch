const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const Model = require('./model');

const app = express()
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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

app.get('/users/delete/:id', function(req, res) {

  Model.hapusDataUsers(req.params.id)

  res.redirect('/users')

})

app.get('/cities', function(req, res) {
  Model.tampilkanDataCities(function(dataCities) {
    res.render('cities', {data: dataCities})
  })
})

app.get('/cities/add', function (req, res) {
  res.render('citiesadd')
})

app.post('/cities/add', function(req, res) {
  Model.getLastIdCities(function(dataId) {

    var objData = {
      id: +dataId + 1,
      name: req.body.name,
      province: req.body.province
    }

    Model.tambahkanDataCities(objData)
    res.redirect('/cities/add')
  })
})


app.get('/cities/delete/:id', function(req, res) {

  Model.hapusDataCities(req.params.id)

  res.redirect('/cities')

})

app.get('/cities/edit/:id', function(req, res) {

  Model.tampilkanDataCitiesById(req.params.id, function(dataCitiesById) {
    res.render('citiesedit', {data: dataCitiesById})
  })

})

app.post('/cities/edit/:id', function(req, res) {

  Model.editDataCities(req.params.id, req.body)
  console.log(req.body);
  res.redirect('/cities')

})

app.get('/users/add', function(req, res) {
  res.render('usersadd')
})

app.post('/users/add', function(req, res) {
  Model.getLastIdUsers(function(dataId) {

    var objData = {
      id: +dataId + 1,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    }

    Model.tambahkanDataUsers(objData)
    res.redirect('/users/add')
  })
})

app.get('/users/edit/:id', function(req, res) {

  Model.tampilkanDataUsersById(req.params.id, function(dataUsersById) {
    res.render('usersedit', {data: dataUsersById})
  })

})

app.post('/users/edit/:id', function(req, res) {

  Model.editDataUsers(req.params.id, req.body)
  console.log(req.body);
  res.redirect('/users')

})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})
