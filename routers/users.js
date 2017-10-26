let express = require('express')
let router = express.Router()
const Users = require('../models/users');

router.get('/', (req, res)=> {
  Users.getUsers((dataUsers)=>{
    res.render('users',dataUsers)
  })
})

router.post('/', (req, res)=>{
  Users.addUsers(req.body,()=>{
    res.redirect('../users')
  })
})

router.get('/edit/:id',(req, res)=>{
  Users.getIdUsers(req.params.id,dataCity =>{
    res.render('editUsers', dataCity)
  })
})

router.post('/edit/:id',(req, res)=>{
  Users.editUsers(req.params.id, req.body, ()=>{
    res.redirect('./users')
  })
})

router.get('/delete/:id', (req, res)=>{
  Users.deleteCity(req.params.id, ()=>{
    res.redirect('users')
  })
})
module.exports = router;
