var express = require('express');
var router = express.Router();
var test = require('../model/test');




router.get('/', test.index);



module.exports = router;