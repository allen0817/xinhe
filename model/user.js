exports.index = function(req,res){
	res.send("this is user page");
};

exports.home = function (req, res) {
    console.log("aaaaaaa");
    res.send("this is home page");
    
};