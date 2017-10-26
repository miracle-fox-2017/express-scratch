const express = require('express')
const router = express.Router()
const Cities = require('../models/cities');

router.get('/', (req, res) => {
  Cities.getCities(dataCities=>{
    res.render('cities', {cities:dataCities})
  })
})

router.get('/add', (req,res)=>{
  res.render('city-add')
})

router.post('/add', (req,res)=>{
  Cities.getLastId(lastId=>{
    let cityObj = {
      id : +lastId+1,
      name : req.body.name,
      province : req.body.province
    }
    Cities.addCity(cityObj)
    res.redirect('/cities')
  })
})

router.get('/edit/:id', (req,res)=>{
  Cities.getOne(req.params.id, city=>{
    res.render('city-edit', {city:city, id:req.params.id})
  })
})

router.post('/edit/:id', (req,res)=>{
  let cityObj = {
    id : req.params.id,
    name : req.body.name,
    province : req.body.province
  }
  Cities.editCity(cityObj)
  res.redirect('/cities')
})

router.get('/delete/:id', (req,res)=>{
  Cities.deleteCity(req.params.id)
  res.redirect('/cities')
})

module.exports = router;
