const fs         = require('fs')
const express    = require('express')
const bodyParser = require('body-parser')
const app        = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//ejs
app.set('view engine', 'ejs');

//css
app.use(express.static(__dirname+'/views'))

// require routes
let index = require('./routers/index')
let users = require('./routers/users')
let cities = require('./routers/cities')

// route
app.use('/', index)
app.use('/users', users)
app.use('/cities', cities)

// express serv
app.listen(3000,function(){
  console.log('your serv listening on port 3000!')
})
