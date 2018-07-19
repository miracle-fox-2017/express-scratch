let express = require('express')
let router = express.Router()

// define the home page route
router.get('/', (req, res)=> {
  res.render('index')
})
module.exports = router;
