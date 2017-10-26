let express = require('express')
let router = express.Router()
const Cities = require('../models/cities');
// define the home page route
router.get('/', (req, res)=> {
  Cities.getCities((dataCities)=>{
      res.render('cities',dataCities)
  })
})

router.post('/add', (req, res)=>{
  console.log(req.body);
  // Cities.addCities(req.body,()=>{
  //   res.redirect('/cities')
  // })
})
module.exports = router;
