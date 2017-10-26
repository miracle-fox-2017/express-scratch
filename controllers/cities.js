var express = require('express')

var router = express.Router()
router.get('/cities', function (req, res) {
  res.send(' is cities')
})

module.exports = router
