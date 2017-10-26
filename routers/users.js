const express = require('express')
const router = express.Router()
const User = require('../models/user')

let user = new User('./db/data.json')

router.get('/', (req, res)=>{

	user.readFile(users=>{
		console.log(user)
		res.render('users/user', {users})
	})
})

router.get('/add', (req, res)=>{
	console.log(req.body)
	res.render('users/add')
})

router.post('/add', (req, res)=>{
	
	user.readFile(users =>{

		let obj = {
			id: users.length+1,
			username : req.body.username,
			password : req.body.password,
			email : req.body.email
		}

		user.writeFile(obj, ()=>{
			res.redirect('/users')
		})
	})
})


router.get('/delete/:id', (req, res)=>{
	user.readFile(users =>{
	
		user.deleteFile(req.params, ()=>{
			res.redirect('/users')
		})
	})
})

router.get('/edit/:id', (req, res)=>{
	user.readFile(users =>{
		users.forEach(edit=>{
			if(edit.id == req.params.id){

				res.render('users/edit', {edit})
			}
		})
	})
})


router.post('/edit/:id', (req, res)=>{
	user.readFile(users =>{

		let obj = {
			id : req.params.id,
			username : req.body.username,
			password : req.body.password,
			email : req.body.email	
			}

		user.editData(obj, file=>{

			res.redirect('/users')
		})
	})
})

module.exports = router