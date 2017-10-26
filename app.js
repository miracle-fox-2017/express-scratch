const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const Model = require('./model/model');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('views', './views');
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/users', function (req, res) {
  let model = new Model('./model/data-pelanggan.json');
  res.render('users', model.ambilData());
})

app.get('/cities', function (req, res) {
  let model = new Model('./model/data-pelanggan.json');
  res.render('cities', model.ambilData());
})

app.get('/add', function (req, res) {
  res.render('add');
})

app.post('/tambah', function (req, res) {
  let model = new Model('./model/data-pelanggan.json');
  let setID = model.ambilData();

  let obj = { id : setID.users.length+1, nama: req.body.user, password: req.body.pass, email: req.body.email}
  model.saveData(obj);
  res.redirect('/');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})