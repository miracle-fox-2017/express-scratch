const express = require('express')
const app = express()
const Model = require('./model')
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))

const ModelObj = new Model()

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
**/

//Release 0 disini
// app.get('/', (req, res)=>{
//   res.send('Welcome to Express My App AhmadNizar')
// })

// app.get('/users', (req, res)=>{
//   let objUser ={
//     name : 'AhmadNizar',
//     age  : 22
//   }

//   res.send(objUser)
// })

// app.get('/cities', (req, res)=>{
//   let objCity ={
//     name     : 'Palembang',
//     province : 'South Sumatera'
//   }

//   res.send(objCity)
// })

// app.listen(3000, ()=>{
//     console.log('Nyambung guuys');
// })


/**
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
**/
//Release 1 dsini

app.get('/', (req, res)=>{
  res.send('Welcome to Express My App AhmadNizar')
})

app.get('/users', (req, res)=>{
  
  ModelObj.getUsers(objUser=>{
    res.render('user',{objUser})  
  })
})

app.get('/cities', (req, res)=>{

  ModelObj.getCities(objCities=>{
    res.render('cities', {objCities})
  })
})

app.post('/addUser/:id', (req, res)=>{

  req.body.id = parseInt(req.params.id) 
  ModelObj.addUser(req.body, err=>{
    if(!err){
      res.redirect('/users')
    }else{
      alert('Error tong..!!!')
    }
  })
})

app.get('/editUser/:id', (req, res)=>{
  ModelObj.getUserById(parseInt(req.params.id), objUser=>{
    res.render('editUser', {objUser})
  })
})

app.post('/editUser/:id', (req, res)=>{
  req.body.id = parseInt(req.params.id)
  ModelObj.editUser(req.body, err=>{
    if(!err){
      res.redirect('/users')
    }else{
      alert('Nah Lohh eroor ni...!')
    }
  })
})

app.get('/deleteUser/:id', (req, res)=>{
  ModelObj.deleteUser(parseInt(req.params.id), err=>{
    if(!err){
      res.redirect('/users')
    }else{
      alert('Ni Bocah bikin error mulu...!!')
    }
  })
})

app.post('/addCity/:id', (req, res)=>{

  req.body.id = parseInt(req.params.id)
  ModelObj.addCity(req.body, err=>{
    if(!err){
      res.redirect('/cities')
    }else{
      alert('Error tong..!!!')
    }
  })
})

app.get('/editCity/:id', (req, res)=>{
  ModelObj.getCitiesById(parseInt(req.params.id), objCity=>{
    res.render('editCity', {objCity})
  })
})

app.post('/editCity/:id', (req, res)=>{
  req.body.id = parseInt(req.params.id)
  ModelObj.editCity(req.body, err=>{
    if(!err){
      res.redirect('/cities')
    }else{
      alert('Jiaaahh, error tong..!!')
    }
  })
})

app.get('/deleteCity/:id', (req, res)=>{
  ModelObj.deleteCity(parseInt(req.params.id), err=>{
    if(!err){
      res.redirect('/cities')
    }else{
      alert('Jiahhhh, error tong..!!')
    }
  })
})

app.listen(3000, ()=>{
    console.log('Nyambung guuys');
})
/**
Release 2
Buatlah routing untuk add, edit dan delete untuk /users dan /cities
contoh:
URL --> http://localhost:3000/users/add (untuk routing add users)
URL --> http://localhost:3000/users/edit/:id (untuk routing edit users dengan mengirimkan id data)
URL --> http://localhost:3000/users/delete/:id (untuk routing delete users dengan mengirimkan id data)
**/
