var db = require('./mysql').connect('127.0.0.1',  'root', 'allen2234','xinhe');

exports.index = function (sql, callback) {
    callback = callback || function(){};
    //console.log(sql);
    db.query(sql, function (err, result) {
        if (err === null) {
            if (isEmptyObject(result)) {
                result = [];
            }
            callback(result);
        }
    });
}

function isEmptyObject(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}
