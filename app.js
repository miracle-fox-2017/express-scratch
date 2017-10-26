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
const bodyParser = require('body-parser');
const fs = require('fs');
const file = 'data.json';
const Db = require('./model');

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.get('/', function(req, res){
  let obj = {
    msg: '"Welcome to Express My App FARIS!!!"'
  }
  res.render('home',obj);
})

////////////////////////////////////users////////////////////////////////

app.get('/users', function(req, res){
  Db.readFile(file, function(obj){
    res.render('users',obj);
  });
})

//bikin form user
app.get('/users/add', function(req, res){
  Db.readFile(file, function(obj){
    res.render('users_add',obj);
  })
})

//bikin form untuk edit user
app.get('/users/edit/:id', function (req, res) {
  let id = req.params.id
  Db.readFile(file, function(obj){
    // console.log(obj.users);
    let temp;
    for(let i = 0; i<obj.users.length; i++){
      // console.log(obj.users[i].id);
      // console.log(id);
      if(obj.users[i].id == id){
        // console.log('ada true?');
        temp = obj.users[i];
      }
    }
    // console.log(temp);
    res.render('users_edit',temp)
  })
})

app.post('/users/added', function (req, res){
  let body = req.body;
  Db.readFile(file, function(obj){
    //ganti id jadi yang terakhir
    let newInput = body;
    
    //writeFile
    Db.writeFile(file, obj, body, function(obj){

      //callback render
      // res.redirect('/users');
      res.render('users',obj);
    });

  })
})

app.post('/users/edited', function (req, res){
  let body = req.body;
  Db.readFile(file, function(obj){
    //ganti id jadi yang terakhir
    let newInput = body;
    
    //writeFile
    Db.editFile(file, obj, body, function(obj){

      //callback render
      // res.redirect('/users');
      res.render('users',obj);
    });

  })
})

//bikin form untuk delete user
app.get('/users/delete/:id', function (req, res) {
  let id = req.params.id
  Db.deleteFile(file, id, function(obj){
    // res.redirect('/users');
    res.render('users',obj);
  });

})

////////////////////////////////////cities////////////////////////////////

app.get('/cities', function(req, res){
  Db.readFile(file, function(obj){
    res.render('cities',obj);
  })
})

//bikin form cities
app.get('/cities/add', function(req, res){
  Db.readFile(file, function(obj){
    res.render('cities_add',obj);
  })
})

//bikin form untuk edit user
app.get('/cities/edit/:id', function (req, res) {
  let id = req.params.id
  Db.readFile(file, function(obj){
    // console.log(obj.users);
    let temp;
    for(let i = 0; i<obj.cities.length; i++){
      // console.log(obj.users[i].id);
      // console.log(id);
      if(obj.cities[i].id == id){
        // console.log('ada true?');
        temp = obj.cities[i];
      }
    }
    // console.log(temp);
    res.render('cities_edit',temp)
  })
})

app.post('/cities/added', function (req, res){
  let body = req.body;
  Db.readFile(file, function(obj){
    //ganti id jadi yang terakhir
    let newInput = body;
    
    //writeFile
    Db.writeFileCt(file, obj, body, function(obj){

      //callback render
      // res.redirect('/cities');
      res.render('cities',obj);
    });

  })
})

app.post('/cities/edited', function (req, res){
  let body = req.body;
  Db.readFile(file, function(obj){
    //ganti id jadi yang terakhir
    let newInput = body;
    
    //writeFile
    Db.editFileCt(file, obj, body, function(obj){

      //callback render
      // res.redirect('/cities');
      res.render('cities',obj);
    });

  })
})

//bikin form untuk delete user
app.get('/cities/delete/:id', function (req, res) {
  let id = req.params.id
  Db.deleteFileCt(file, id, function(obj){
    // res.redirect('/cities');
    res.render('cities',obj);
  });

})

////////////////////////////////////listen////////////////////////////////

app.listen(3000, function(){
  console.log('jalan cuy di port 3000');
})