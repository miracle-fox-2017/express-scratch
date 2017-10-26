const express = require('express')
const router = express.Router()

const File = require('../models/readfile')

// define the home page route
router.get('/', function (req, res) {
  File.readFile(dataJSON => {
    res.render('cities', {data: dataJSON.cities})
    // res.send(dataJSON.cities)
  })
})

module.exports = router;
