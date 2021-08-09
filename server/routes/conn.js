var express = require('express');
var router = express.Router();

/* GET test listing. */
router.get('/', function(req, res, next) {
  res.send('connected');
});


/* GET test listing. */
router.get('/', function(req, res, next) {
    res.send('connected f');
  });
  
  



module.exports = router;