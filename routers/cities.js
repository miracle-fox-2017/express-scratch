const express = require('express')
const router  = express.Router()
const model   = require('../models/cities')

// CREATE
router.get('/add',(req,res)=>{
    res.render('cities-add')
})

router.post('/add',(req,res)=>{
    model.create({name: req.body.name_cities, province: req.body.province_cities},()=>{
      res.redirect('/cities')
    })
})

// READ
router.get('/',(req,res)=>{
  model.getFile((cities)=>{
    res.render('cities',{cities})
  })
})

// DELETE
router.get('/delete/:id',(req,res)=>{
  model.destroy(req.params.id,()=>{
    res.redirect('/cities')
  })
})


module.exports = router
