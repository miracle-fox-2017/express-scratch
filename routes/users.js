const express = require('express')
const router = express.Router()
const Users = require('../models/users');

router.get('/', (req,res)=>{
  Users.getUsers(usersData=>{
    res.render('users', {users:usersData})
  })
})

router.get('/add', (req,res)=>{
  res.render('user-add')
})

router.post('/add', (req,res)=>{
  Users.getLastId(lastId=>{
    let userObj = {
      id : +lastId+1,
      username : req.body.username,
      password : req.body.password,
      email : req.body.email
    }
    Users.addUser(userObj)
    res.redirect('/users')
  })
})

router.get('/edit/:id', (req,res)=>{
  Users.getOne(req.params.id, user=>{
    res.render('user-edit', {user:user, id:req.params.id})
  })
})

router.post('/edit/:id', (req,res)=>{
  let userObj = {
    id : req.params.id,
    username : req.body.username,
    password : req.body.password,
    email : req.body.email
  }
  Users.editUser(userObj)
  res.redirect('/users')
})

router.get('/delete/:id', (req,res)=>{
  Users.deleteUser(req.params.id)
  res.redirect('/users')
})

module.exports = router;
