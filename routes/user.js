var express = require('express');
var router = express.Router();
var user = require('../model/user');




router.get('/', user.index);



module.exports = router;