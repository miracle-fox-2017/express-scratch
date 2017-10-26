const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs');

const index  = require('./routers/index')
app.use('/', index)

const cities  = require('./routers/cities')
app.use('/cities', cities)

const users  = require('./routers/users')
app.use('/users', users)



app.listen(3000, function () {
  console.log('listening on port 3000!')
})

