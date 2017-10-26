/** EXPRESS FROM SCRATCH V.0
---------------------------
Buatlah sebuah aplikasi sederhana menggunakan Express JS
- Release 0
Buatlah 3 routing yang memenuhi spesifikasi berikut ini :
URL --> http://localhost:3000/
menampilkan "Welcome to Express My App [Nama_Kalian]"
URL --> http://localhost:3000/users
menampilkan data users berupa object. di release ini object dibuat manual,
silakan menentukan property dan value dari object tersebut asalkan relevan dengan user
URL --> http://localhost:3000/cities
menampilkan data cities berupa object.
silakan menentukan property dan value dari object cities juga untuk release 0 ini.

- Release 1
Buatlah file data.json yang isinya ada 2 object yaitu users dan cities.
contoh :
{
  users: [{
    username: 'hacktiv8',
    password: 'hacktiv8',
    email: 'hactiv8@hacktiv8.com'
  }, {
    username: 'johndoe',
    password: '12345',
    email: 'john@doe.com'
  }],
  cities: [{
    name: 'Jakarta'
    province: 'DKI Jakarta'
  }, {
    name: 'Bandung'
    province: 'Jawa Barat'
  }]
}
Setelah itu, buatlah code untuk membaca file dari data.json
sehingga routing yang tadinya menampilkan object yang dibuat sendiri,
sekarang menampilkan data yang ada di-file data.json menggunakan view engine .ejs

Release 2
Buatlah routing untuk add, edit dan delete untuk /users dan /cities
contoh:
URL --> http://localhost:3000/users/add (untuk routing add users)
URL --> http://localhost:3000/users/edit/:id (untuk routing edit users dengan mengirimkan id data)
URL --> http://localhost:3000/users/delete/:id (untuk routing delete users dengan mengirimkan id data)
**/
const fs = require('fs')
const express = require('express')
const Model = require('./model/model')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
let model = new Model()

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.get('/', function (req, res) {
  res.render('home')
})

app.get('/users', function (req, res) {
  model.getData(data => {
      res.render('users', data)
  })
})

app.get('/users/add', function (req, res) {
    model.getData(data =>{
      res.render('add', data)
    })
})

app.get('/cities', function (req, res) {
  model.getData(data => {
      res.render('cities',data)
  })
})

app.post('/users/create', function (req,res){
  model.getData( data =>{
    data.users.push(req.body)
    model.writeData(data);
    res.redirect('../users')
  })
})

app.post('/users/edit', function (req,res){
  model.getData( data =>{
    console.log(req.body.id)
    data.users.splice(Number(req.body.id-1),1,req.body)
    model.writeData(data);
    res.redirect('../users')
  })
})

app.get('/users/edit/:id', function (req, res) {
  
  model.getData( data =>{
    for (let i = 0 ; i<data.users.length ; i++){
       
        if(data.users[i].id == req.params.id){
          res.render('edit',data.users[i])
        }
    }
  })  
})

app.get('/users/delete/:id', function (req, res) {
  
  model.getData( data =>{
    let deleteUser ;
    for (let i = 0 ; i<data.users.length ; i++){
       
        if(data.users[i].id == req.params.id){
          deleteUser = i;
        }
    }
    data.users.splice(Number(deleteUser),1)
    model.writeData(data);
    res.redirect('/users')
  })  
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})