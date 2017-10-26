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


const express = require('express');
const app = express();
const fs = require('fs')
const Model = require('./Model.js')

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine


app.get('/', function (req, res) {
  res.send('My App febriliando')
})

  let mdl = new Model('data.json')

app.get('/user', function (req, res) {
  mdl.getData(function(data){
    res.send(data.toString())
    console.log(mdl);
  })

})
app.get('/cities', function (req, res) {
  let Obj = {
    cities: [{
      name: 'Jakarta',
      province: 'DKI Jakarta',
    }, {
      name: 'Bandung',
      province: 'Jawa Barat'
    }]
  }
  res.render('cities', Obj) //menampilkan di hal ini aja
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

























// const express = require('express');
// const bodyParser = require('body-parser')
// const Model = require('./models/model');
// const app = express();
// const fs = require('fs');
//
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
// // parse application/json
// app.use(bodyParser.json());
//
// app.set('views', './views') // specify the views directory
// app.set('view engine', 'ejs') // register the template engine
//
// let model = new Model('data.json');
//
// // blog home page
// app.get('/', (req, res) => {
//   res.render('home', {name: 'Septian A. Fujianto'});
// })
//
// app.get('/users', (req, res) => {
//
//   model.getDataFromJSON(function(data) {
//   	res.render('users', data);
//   })
// })
//
// app.get('/users/add', (req, res) => {
//    model.getDataFromJSON(function(data) {
//     res.render('new-user', data);
//   })
// })
//
// app.post('/users/create', (req, res) => {
//   model.getDataFromJSON(function(data) {
//     data.users.push(req.body);
//     // res.send(data);
//     res.redirect('/users');
//     model.writeDataToJSON(data);
//   })
//
// })
//
// app.get('/cities', (req, res) => {
//   let model = new Model('data.json');
//
//   model.getDataFromJSON( (data) => {
//   	res.render('cities', data);
//   });
// })
//
// app.listen(3000, function() {
//   console.log('Listening to port 3000');
// })


















//
