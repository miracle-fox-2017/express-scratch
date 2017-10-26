const express = require('express')
const router  = express.Router()
const model   = require('../models/users')


router.get('/',(req,res)=>{
  model.getFile((users)=>{
    res.render('users',users)
  })
})


module.exports = router
