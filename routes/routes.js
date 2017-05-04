var express = require('express');
var router = express.Router();
var site = require('../model/site');

var test = require('../model/test');

router.get('/',site.home);  
//router.get('/',site.index);  
router.get('/home',site.home);
router.get('/brand',site.brand);
router.get('/news',site.news);
router.get('/contact',site.contact);
router.post('/add',site.add);
router.get('/about',site.about);
router.get('/uri',site.uri);
router.get('/news_detail',site.news_detail);
//rotuer.get('/links',site.uri);

router.get('/test',test.test);


module.exports = router;