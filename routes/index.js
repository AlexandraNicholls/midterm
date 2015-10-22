//express is still required!
var express = require('express');
var router = express.Router();

//show the index page
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Players' });
});

//show the page to everyone
module.exports = router;