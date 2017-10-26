let express = require('express')
let router = express.Router()
let modelsUser = require('../models/user')
// let modeladdres = require('../models/addresses.js')

router.get('/user',modelsUser)


module.exports = router
