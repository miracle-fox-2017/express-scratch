const express = require('express')
const bodyParser = require('body-parser')
// import {readfile} from './Model/model'
const readfile = require('./Model/model')

const app = express()

app.set('views', './Views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine


app.get('/',(req, res) => {
  res.render('home')
})

app.get('/users',(req, res) => {

  readfile((data)=>{
    // console.log(data);
    let obj = {
      dataUser : data
    }

    res.render('user', obj) 
  })

})

app.get('/cities',(req, res) => {

  readfile((data)=>{
    // console.log(data);
    let obj = {
      dataCities : data
    }

    res.render('cities', obj) //}
  })

})

app.listen(3000,() => {
  console.log('Example app listening on port 3000!')
})
