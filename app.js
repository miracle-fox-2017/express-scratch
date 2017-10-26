/** EXPRESS FROM SCRATCH V.0**/

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
let index = require('./routers/index')
let users = require('./routers/users')
let cities = require('./routers/cities')
app.set('view engine', 'ejs');
app.use('/', index)
app.use('/users', users)
app.use('/cities',cities)
app.listen(3000,(err)=>{
  if(!err){
    console.log('Runner Up 3000');
  } else {
    console.log(err);
  }

})
// Buatlah 3 routing yang memenuhi spesifikasi berikut ini :
// URL --> http://localhost:3000/
// menampilkan "Welcome to Express My App [Nama_Kalian]"
// URL --> http://localhost:3000/users
// menampilkan data users berupa object. di release ini object dibuat manual,
// silakan menentukan property dan value dari object tersebut asalkan relevan dengan user
// URL --> http://localhost:3000/cities
// menampilkan data cities berupa object.
// silakan menentukan property dan value dari object cities juga untuk release 0 ini.
//
// - Release 1
// Buatlah file data.json yang isinya ada 2 object yaitu users dan cities.
// contoh :
// {
//   users: [{
//     username: 'hacktiv8',
//     password: 'hacktiv8',
//     email: 'hactiv8@hacktiv8.com'
//   }, {
//     username: 'johndoe',
//     password: '12345',
//     email: 'john@doe.com'
//   }],
//   cities: [{
//     name: 'Jakarta'
//     province: 'DKI Jakarta'
//   }, {
//     name: 'Bandung'
//     province: 'Jawa Barat'
//   }]
// }
// Setelah itu, buatlah code untuk membaca file dari data.json
// sehingga routing yang tadinya menampilkan object yang dibuat sendiri,
// sekarang menampilkan data yang ada di-file data.json menggunakan view engine .ejs
//
// Release 2
// Buatlah routing untuk add, edit dan delete untuk /users dan /cities
// contoh:
// URL --> http://localhost:3000/users/add (untuk routing add users)
// URL --> http://localhost:3000/users/edit/:id (untuk routing edit users dengan mengirimkan id data)
// URL --> http://localhost:3000/users/delete/:id (untuk routing delete users dengan mengirimkan id data)
