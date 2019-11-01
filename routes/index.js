var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/index.html', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about-us page */
router.get('/about-us.html', function(req, res, next) {
  res.render('about-us', { title: 'About us' });
});



module.exports = router;
