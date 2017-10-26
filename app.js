const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const fs = require('fs')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//controller
let index = require('./controllers/index')
let user = require('./controllers/user')
let cities = require('./controllers/cities')

//models
let User = require('./models/user')


//routing
app.use('/', index)
app.use('/user',User)
app.use('/', cities)

//app.use('/users', users)

app.listen(3018, function(){
  console.log('star aplikasi 3018!');
})




















// const app = express()
// app.set('views', './views')
// app.set('view engine', 'ejs')
//
// app.get('/', function (req, res) {
//   res.render('index',{error: false})
//   // req()
// })
//
// app.get('/users', function (req, res) {
  // fs.readFile('data.json', 'utf8', function readFileCallback(err, res){
  //   if (err) {
  //     console.log(err);
  //   }else {
  //     fs.writeFile('data.json', 'utf8')
  //   }
  // })
//})

//
// app.get('/cities', function (req, res) {
//   res.send('cities ')
// })
//
// app.listen(3018, function () {
//   console.log('3018')
// })
