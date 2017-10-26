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
"users": [{
"id":1,
"username": "hacktiv8",
"password": "hacktiv8",
"email": "hactiv8@hacktiv8.com"
}, {
"id":2,
"username": "johndoe",
"password": "12345",
"email": "john@doe.com"
}],

"cities": [{
"id":1,
"name": "Jakarta",
"province": "DKI Jakarta"
}, {
"id":2,
"name": "Bandung",
"province": "Jawa Barat"
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
const bodyParser = require('body-parser');
const readFile = require('../models/readFile');
const writeFile = require('../models/writeFile');
const fs = require('fs');
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json())
app.set('views', '../views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.get('/', function (req, res) {
  res.render('index.ejs');
});

app.get('/users', function (req, res) {
  readFile.read(function (data) {
    data = JSON.parse(data);
    res.render('users', { dataUsers: data.users });
  });
});

app.get('/users/delete', function (req, res) {
  readFile.read(function (data) {
    data = JSON.parse(data);
    res.render('usersdel', { dataUsers: data.users });
  });
});

app.get('/cities', function (req, res) {
  readFile.read(function (data) {
    data = JSON.parse(data);
    res.render('cities', { dataCities: data.cities });
  });
});

app.get('/cities/delete', function (req, res) {
  readFile.read(function (data) {
    data = JSON.parse(data);
    res.render('citiesdel', { dataCities: data.cities });
  });
});

app.get('/users/add', function (req, res) {
  res.render('addUsers');
});

app.post('/users/add', function (req, res) {
  readFile.read(function (data) {
    data = JSON.parse(data);
    let users = data.users;
    let newUserObj = {
      'id': users.length + 1,
      'username': req.body.username,
      'password': req.body.password,
      'email': req.body.email,
    };
    data.users.push(newUserObj);
    writeFile.write(JSON.stringify(data));
    console.log(data.users);
    res.redirect('/users');
  });
});

app.get('/cities/add', function (req, res) {
  res.render('addCities');
});

app.post('/cities/add', function (req, res) {
  readFile.read(function (data) {
    data = JSON.parse(data);
    let cities = data.cities;
    let newUserObj = {
      'id': cities.length + 1,
      'name': req.body.name,
      'province': req.body.province,
    };
    data.cities.push(newUserObj);
    writeFile.write(JSON.stringify(data));
    console.log(data.cities);
    res.redirect('/cities');
  });
});

app.listen(3000, function () {
  console.log('listen on port 3000');
});
