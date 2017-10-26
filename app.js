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
// const View = require('./view.js')
const express = require ('express')
const bodyParser = require('body-parser')
const app = express()
const Model = require('./model.js')
let data = new Model()

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.set('views', './view')
app.set('view engine', 'ejs')



app.get('/',function(req, res){
  res.render('home')
})

app.get('/users',function(req, res){
 
  data.showData(angga => {
    // console.log(angga)
    res.render('users',angga)
    // console.log(angga)
  })
})

app.get('/cities',function(req, res){

  data.showData(angga => {
    res.render('cities',angga)
    // console.log(angga)
  })
})

app.listen(8002,function(){
  console.log('Example app listening on port 3000!')
})


// data.showData()




