const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const User = require('./models/modelUser')
const City = require('./models/modelCity')
let user = new User()
let city = new City()
app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.listen(3000, function () {
  console.log("Haloooooo")
})

app.get('/', function (req, res) {
  res.render('home')
})

app.get('/users', function (req, res) {
  user.readData(() => {
    let dataUser = user.getDataUser()
    // console.log(dataUser[0].users)
    res.render('user', { dataUser: dataUser[0].users })
  })
})

app.get('/cities', function (req, res) {
  city.readData(() => {
    let dataCity = city.getDataCity()
    res.render('city', { dataCity: dataCity[0].cities })
  })
})

app.get('/users/add', function (req, res) {
  res.render('add-user')
})

app.post('/users/add', function (req, res) {
  user.saveDataUser(req.body)
  res.redirect('../users')
})

app.get('/cities/add', function (req, res) {
  res.render('add-city')
})

app.post('/cities/add', function (req, res) {
  city.saveDataCity(req.body)
  res.redirect('../cities')
})

app.get('/users/edit/:id', function (req, res) {
  user.readData(() => {
    let dataUser = user.getDatabyId(req.params.id)
    res.render('edit-user', { dataUser: dataUser })
  })

})

app.post('/users/edit/:id', function (req, res) {
  //console.log(req.params.id, req.body)
  user.saveDataById(req.params.id, req.body)
  res.redirect('../../users')
})
app.get('/cities/edit/:id', function (req, res) {
  city.readData(() => {
    let dataCity = city.getDatabyId(req.params.id)
    res.render('edit-city', { dataCity: dataCity })
  })

})

app.post('/cities/edit/:id', function (req, res) {
  //console.log(req.params.id, req.body)
  city.saveDataById(req.params.id, req.body)
  res.redirect('../../cities')
})

app.get('/users/delete/:id', function (req, res) {
  user.deleteData(req.params.id)
  res.redirect('../../users')
})

app.get('/cities/delete/:id', function (req, res) {
  city.deleteData(req.params.id)
  res.redirect('../../cities')
})





