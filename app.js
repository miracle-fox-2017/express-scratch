const express = require('express')
const app = express()

// ejs
app.set('view engine', 'ejs')

// body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const index = require('./routers/index')
app.use('/', index)

const users = require('./routers/users')
app.use('/users', users)

const cities = require('./routers/cities')
app.use('/cities', cities)

app.listen(3000, function () {
  console.log('listening on port 3000!')
})
