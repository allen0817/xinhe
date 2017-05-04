var client = null;
var mysql = require('mysql');

exports.connect = function (host, user, password, dbName) {
    // client = mysql.createPool({
    //       connectionLimit : 10,
		  // host            : '127.0.0.1',
		  // user            : 'root',
		  // password        : 'allen2234',
		  // database        : 'xinhe'
    // });

	client = mysql.createPool({
          connectionLimit : 10,
		  host            : host,
		  user            : user,
		  password        : password,
		  database        : dbName
    });
    //client.connect();
    return client;
};
