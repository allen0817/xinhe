
var express = require('express');
var router = express.Router();




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



	var data = [];
	connection.query('SELECT * from xh_news', function (error, results, fields) {
		if (error) throw error;

		for(var i =0 ; i< results.length;i++){

			console.log('The solution is: ', results[i].title);	
		}
	  //console.log('The solution is: ', results[0].title);
	   
	    res.render('mq', { data: results });
	  
	});
	// var sql = 'SELECT * from xh_news';
	// var data = connection.query(sql);

	connection.end();

    //res.render('mq', { title: [ ['Express','aa','cc'],['Express2','aa2','cc2'] ]  } );

   

    //res.render('mq', { data: data });
    


});






module.exports = router;


