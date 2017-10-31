const express = require('express')
const router = express.Router()

const File = require('../models/readfile')
const City = require('../models/cities')

// define the cities page route
router.get('/', function (req, res) {
  File.readFile(dataJSON => {
    res.render('cities/index', {data: dataJSON.cities})
  })
})

router.get('/add', function(req, res) {
  res.render('cities/add')
})

router.post('/add', function(req, res) {
  City.add(req.body, (err) => {
    res.redirect('/cities')
  })
})

router.get('/edit/:id', function(req, res) {
  City.findById(req.params.id, (dataJSON) => {
    res.render('cities/edit', {data: dataJSON})
  })
})

router.post('/edit/:id', function(req, res) {
  City.edit(req.params.id, req.body, (err) => {
    res.redirect('/cities')
  })
})

router.get('/delete/:id', function(req, res) {
  City.delete(req.params.id, (err) => {
    res.redirect('/cities')
  })
})

module.exports = router;
