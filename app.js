const express = require('express');
const bodyParser = require('body-parser')
const Model = require('./models/model');
const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

// blog home page
app.get('/', (req, res) => {
  res.render('home', {name: 'Septian A. Fujianto'});
})

app.get('/users', (req, res) => {
  let model = new Model('data.json');
  model.getFileJSON(function(data) {

  	res.render('users', data);
  })	
})

app.get('/cities', (req, res) => {
  let model = new Model('data.json');

  model.getFileJSON( (data) => {
  	res.render('cities', data);
  });
})

app.listen(3000, function() {
  console.log('Listening to port 3000');
})