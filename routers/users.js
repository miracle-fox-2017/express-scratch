const express = require('express')
const router = express.Router()

const File = require('../models/readfile')
const User = require('../models/users')

// define the users page
router.get('/', function(req, res) {
  File.readFile(dataJSON => {
    res.render('users/index', {data: dataJSON.users})
  })
})

router.get('/add', function(req, res) {
  res.render('users/add')
})

router.post('/add', function(req, res) {
  User.add(req.body, (err) => {
    res.redirect('/users')
  })
})

router.get('/edit/:id', function(req, res) {
  User.findById(req.params.id, (dataJSON) => {
    res.render('users/edit', {data: dataJSON})
  })
})

router.post('/edit/:id', function(req, res) {
  User.edit(req.params.id, req.body, (err) => {
    res.redirect('/users')
  })
})

router.get('/delete/:id', function(req, res) {
  User.delete(req.params.id, (err) => {
    res.redirect('/users')
  })
})

module.exports = router
