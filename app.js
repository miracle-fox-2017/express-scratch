const express = require('express');
const bodyParser = require('body-parser')
const Model = require('./models/model');
const app = express();
const fs = require('fs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

let model = new Model('data.json');

// blog home page
app.get('/', (req, res) => {
  res.render('home', {name: 'Septian A. Fujianto'});
})

app.get('/users', (req, res) => {
  
  model.getDataFromJSON(function(data) {
  	res.render('users', data);
  })	
})

app.get('/users/add', (req, res) => {
  model.getDataFromJSON(function(data) {
    res.render('new-user', {allData: data});
  })  
})

app.get('/users/edit/:id', (req, res) => {
    model.getDataFromJSON(function(data) {
      res.render('new-user', {allData: data, editId: req.params.id});
    })
})

app.get('/users/delete/:id', (req, res) => {
    model.getDataFromJSON(function(data) {
       let deletedIndex = 0;
       let finalData = data;

       for (var i = 0; i < data.users.length; i++) {
        
        if (data.users[i].id === req.params.id) {
          data.users.splice(i, 1);
        } 
       }

      model.writeDataToJSON(data);
      res.redirect('/users');
    })
})

app.post('/users/modify', (req, res) => {
  model.getDataFromJSON(function(data) {
    for (var i = 0; i < data.users.length; i++) {
      if (data.users[i].id === req.body.id) {
        data.users[i].username =  req.body.username;
        data.users[i].password =  req.body.password;
        data.users[i].email =  req.body.email;
      }
    }

    model.writeDataToJSON(data);
    res.redirect('/users');
  })  
})

app.post('/users/create', (req, res) => {
  model.getDataFromJSON(function(data) {
    data.users.push(req.body);
    model.writeDataToJSON(data);
    res.redirect('/users');
  })
})

app.get('/cities', (req, res) => {
  let model = new Model('data.json');

  model.getDataFromJSON( (data) => {
  	res.render('cities', data);
  });
})

app.listen(3000, function() {
  console.log('Listening to port 3000');
})