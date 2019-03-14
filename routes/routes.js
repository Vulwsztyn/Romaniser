var express = require('express');
var router = express.Router();
var romaniser = require('../core/toRoman.js');

router.get('/', function(req, res) {
    res.render('index');
});

router.post('/', function(req, res) {
    const number = parseInt(req.body.number);
    const roman = romaniser(number);
    res.render('index',{number:number,roman:roman});
});



module.exports = router;
