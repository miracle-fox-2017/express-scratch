const express = require('express')
const router  = express.Router()
const model   = require('../models/cities')


router.get('/',(req,res)=>{
  model.getFile((cities)=>{
    res.render('cities',cities)
  })
})


module.exports = router
