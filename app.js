const express = require('express');
const ejs = require('ejs');
const app = express();
const Model = require('./models/data');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// set view engine
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // res.send(`Welcome to My App "Yofri"`);
  res.render(`index`);
});

app.get('/users', (req, res) => {
  Model.readData(data => {
    res.render('users', data);
  });
});

app.get('/cities', (req, res) => {
  Model.readData(data => {
    res.render('cities', data);
  })
});

app.post('/users/add', (req, res) => {
  Model.writeData(req.body, () => {
    res.redirect('/users');
  });
});

app.post('/cities/add', (req, res) => {
  Model.writeData(req.body, () => {
    res.redirect('/cities');
  });
});

app.get('/users/edit/:id', (req, res) => {
  Model.editUserData(req.params.id, data => {
    res.render('edit-user', data);
  });
});

app.post('/users/edit', (req, res) => {
  Model.editUser(req.body, () => {
    res.redirect('/users');
  });
});

app.get('/cities/edit/:id', (req, res) => {
  Model.editCityData(req.params.id, data => {
    res.render('edit-city', data);
  });
});

app.listen('3000', () => {
  console.log(`App started on port 3000`);
});