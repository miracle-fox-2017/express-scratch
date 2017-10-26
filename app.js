const Model = require('./model/model')
var bodyParser = require('body-parser')
var express = require('express')
var app = express()
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

let model = new Model ('./database/data.json')


app.get('/', function (req, res) {

  model.read(function(data){
    //console.log(data);
    res.render('./index')
  })
})


app.get('/users', function(req, res){
  console.log('hello ');
  model.getAllUsers(function(data){
    res.render('user/users', data)
  })
})

app.get('/users/addUser', function(req, res){
      res.render('user/addUser')
  })


app.post('/users/addUser', function(req, res){


  model.addUser(req, function(data){
    console.log(data);
    model.saving(data, function(data){
      console.log(data);
    })
    res.redirect('/users')
  })
})

app.get('/users/edit/:id', function(req,res){
  model.findId(req, function(data){
    res.render('user/edit',data);
  })
})

app.post('/users/edit/:id', function(req, res){

  model.update(req, function(data){
    model.saving(data, function(req, res){
      console.log(data);
    })
    res.redirect('/users')
  })

})


// app.get('/users/delete/:id', function(req,res){
//   model.destroy(req, function(data){
//     console.log(data);
//   })
// })




app.get('/cities', function(req, res){
  model.getAllCities(function(data){
    res.render('cities', data)
  })
})









app.listen(3000)
