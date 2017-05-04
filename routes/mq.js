
var express = require('express');
var router = express.Router();




var mysql = require('../models/mysql');






router.get('/', function(req, res, next) {

	// var mysql = require('mysql');
	// var connection  = mysql.createConnection({
	//   connectionLimit : 10,
	//   host            : '127.0.0.1',
	//   user            : 'root',
	//   password        : 'allen2234',
	//   database        : 'xinhe'
	// });

	// connection.connect();


	// connection.query('SELECT * from xh_news', function (error, results, fields) {
	// 	if (error) throw error;

	// 	for(var i =0 ; i< results.length;i++){

	// 		console.log('The solution is: ', results[i].title);	
	// 	}
	//   //console.log('The solution is: ', results[0].title);
	   
	//     res.render('mq', { data: results });
	  
	// });
	// var sql = 'SELECT * from xh_news';
	// var data = connection.query(sql);



    //res.render('mq', { title: [ ['Express','aa','cc'],['Express2','aa2','cc2'] ]  } );

   

    //res.render('mq', { data: data });

	//res.send("hello allen ");


	var aa = mysql.aa();

	//var sql = 'SELECT * from xh_news';
	//var cc = mysql.getTableAllInfo({sql:'SELECT * from xh_news'});


	var cc  = [] ;

	mysql.getTableAllInfo({sql:'SELECT * from xh_news'},function(results){
		if(results){
			console.log(results.data[0].title);
		    cc = results.data;

		    
			


			// mysql.bb({sql:'SELECT * from xh_news'},function(bb){
			// 	if(bb){
			// 		res.render('mq',{title:'allen22',bb:bb.data,results:results.data});
			// 	}else{
			// 		res.render('mq',{title:'allen22',results:results.data,bb:[]});					
			// 	}

				
			// });

			//res.render('mq',{title:'allen22',results:results.data});

		}

	});



	for (var i = cc.length - 1; i >= 0; i--) {
			console.log( cc[i].title );
	};
	

	res.render('mq',{title:'allen22',bb:[],results:cc});	

	



	

    
    //next.send("ggg");


});




router.get('/allen', function(req, res, next) {

	res.send("hello allen ,this is good job ")



});






module.exports = router;


