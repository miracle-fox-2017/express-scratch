const express = require('express')
const router = express.Router()

const File = require('../models/readfile')

// define the users page
router.get('/', function (req, res) {
  File.readFile(dataJSON => {
    // console.log(dataJSON);
    res.render('users', {data: dataJSON.users})
    // res.send(dataJSON.users)
  })
})

module.exports = router
