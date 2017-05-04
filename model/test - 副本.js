exports.index = function(req,res){
	res.send("this is test page");
};

exports.home = function (req, res) {
    console.log("aaaaaaa");
    res.send("this is home page");
    
};