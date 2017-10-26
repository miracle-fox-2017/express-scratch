const express = require('express');
const bodyParser = require('body-parser')
const Model = require('./model/model');
const User = require('./model/users');
const City = require('./model/cities')

const app = express()
const model = new Model("./files/data.json")

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())




app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs');

app.get('/', function(req, res)
{
  res.render('home');
});

app.get('/users', function(req, res)
{
  model.readFile(function(data)
  {
    res.render('users', JSON.parse(data));
  });
});

app.get('/cities', function(req, res)
{
  model.readFile(function(data)
  {
    res.render('cities', JSON.parse(data));
  });
});

app.get('/users/add', function(req, res)
{
  res.render('adduser');
  // console.log("masuk users add", req.body);
});

app.post('/users/add/simpanuser', function(req, res)
{
  model.readFile(function(data)
  {
    let allData = JSON.parse(data);
    let obj = {id : 4, username : req.body.username, password : req.body.password, email : req.body.email}
    allData.users.push(obj)
    model.writeFile(allData)
  });
  res.redirect('/users')
});


app.listen(3000, function()
{
  console.log("running on port 3000");
});






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
