const express = require('express');
const app = express()
const fs = require('fs')

  app.set('views','./view')
  app.set('view engine','ejs')

  app.get('/',function(req,res) {
    res.send('hi my name is alang mahendra')
  })

  app.get('/user', function (req,res) {
    let obj = {
      users: [{
        id : '1',
        username: 'hacktiv8',
        password: 'hacktiv8',
        email: 'hactiv8@hacktiv8.com'
      }, {
        id : '2',
        username: 'johndoe',
        password: '12345',
        email: 'john@doe.com'
      }]}

    res.render('user',obj)
  })

  app.get('/cities', function (req,res) {
    let obj ={
        cities: [{
        id:'1',
        name: 'Jakarta',
        province: 'DKI Jakarta'
      }, {
        id : '2',
        name: 'Bandung',
        province: 'Jawa Barat'
      }]
    }
    res.render('cities',obj)
  })



  app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })
