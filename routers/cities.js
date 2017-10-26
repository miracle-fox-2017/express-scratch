let express = require('express')
let router = express.Router()
const Cities = require('../models/cities');
// define the home page route
router.get('/', (req, res)=> {
  Cities.getCities((dataCities)=>{
    res.render('cities',dataCities)
  })
})

router.post('/', (req, res)=>{
  Cities.addCities(req.body,()=>{
    res.redirect('/cities')
  })
})

router.get('/edit/:id',(req, res)=>{
  Cities.getIdCities(req.params.id, dataCity =>{
    res.render('editCities', dataCity)
  })
})

router.post('/edit/:id',(req, res)=>{
  Cities.editCities(req.params.id, req.body, ()=>{
    res.redirect('/cities')
  })
})

router.get('/delete/:id', (req, res)=>{
  Cities.deleteCity(req.params.id, ()=>{
    res.redirect('/cities')
  })
})
module.exports = router;
