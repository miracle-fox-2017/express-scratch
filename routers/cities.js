const express = require('express')
const router = express.Router()
const City = require('../models/city')

let city = new City('./db/data.json')

router.get('/', (req, res)=>{
	city.readFile(cities=>{
		res.render('cities/cities', {cities})
	})
	
})

router.get('/add', (req, res)=>{
	console.log(req.body)
	res.render('cities/add')
})

router.post('/add', (req, res)=>{
	
	city.readFile(cities =>{

		let obj = {
			id: cities.length+1,
			name : req.body.name,
			province : req.body.province
		}

		city.writeFile(obj, ()=>{
			res.redirect('/cities')
		})
	})
})


router.get('/delete/:id', (req, res)=>{
	city.readFile(cities =>{
	
		city.deleteFile(req.params, ()=>{
			res.redirect('/cities')
		})
	})
})

router.get('/edit/:id', (req, res)=>{
	city.readFile(cities =>{
		cities.forEach(edit=>{
			if(edit.id == req.params.id){

				res.render('cities/edit', {edit})
			}
		})
	})
})


router.post('/edit/:id', (req, res)=>{
	city.readFile(cities =>{

		let obj = {
			id : req.params.id,
			name : req.body.name,
			province : req.body.province	
			}

		city.editData(obj, file=>{

			res.redirect('/cities')
		})
	})
})

module.exports = router