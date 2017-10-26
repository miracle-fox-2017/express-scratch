let express = require('express')
let router = express.Router()
const Users = require('../models/users');


router.get('/', (req, res) => {
  Users.getUsers(dataUsers => {
    res.render('users', dataUsers)
  })
})
module.exports = router;
