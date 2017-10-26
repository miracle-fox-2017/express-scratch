const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('views', './views')
app.set('view engine', 'ejs')

const index = require('./routes/index');
const users = require('./routes/users');
const cities = require('./routes/cities');

app.use('/', index)
app.use('/users', users)
app.use('/cities', cities)

app.listen(3000, function () {
  console.log('listening on port 3000!')
})
