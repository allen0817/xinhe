var async = require('async');
var sql = require('../lib/mysql_testdb');
var showPage = require('../lib/page');
var moment = require('moment');



exports.index = function(req,res){
  
	res.redirect('/home');
};

exports.home = function (req, res) {
    //series
	async.parallel({
        slide: function (done) {//幻灯片
            sql.index("select * from xh_bar where status = 1 ", function (list) {
                done(null, list);
            });
        },
        banner: function(done){//品牌
            sql.index("select * from xh_other",function(list){
                done(null,list);
            });
        },
        temai:function(done){//特卖
            sql.index("select * from xh_product where status = 1  and top = 1 order by sort desc limit 4",function(list){
                done(null,list);
            });
        },
        news: function(done){//七条新闻
            sql.index("select * from xh_news where status = 1 order by sort desc , id desc limit 7 ",function(list){
                done(null,list);
            });
        },
        uri: function(done){
            sql.index("select * from xh_link where status = 1 order by sort desc limit 4 ",function(list){
                done(null,list);
            });
        }

       
    }, function (error, result) {
        //console.log(result.news);
        // var a =  result.temai;
        // for (var i = a.length - 1; i >= 0; i--) {
        //     console.log(a[i].name);
        // };
        res.render('index', {
            slide: result.slide,
            banner: result.banner,
            temai : result.temai,
            news : result.news,
            uri : result.uri
            //users: result.one[0]
        });
    })

};

// 品牌列表 
exports.brand = function(req,res){
    //res.render('banner');
    async.series ({
        brand: function(done){
            sql.index("select * from xh_brand where status = 1 order by sort desc,id desc  ",function(list){
                done(null,list);
            });
        }
    },function(error,result){
        res.render('brand',{
            brand: result.brand,
        });
    })
};


//新闻
var pagesize = 10;
exports.news = function(req,res){
    //res.send("news");

    var page = req.query.page ? req.query.page : 1; //获取当前页数，如果没有则为1
    var url = req.originalUrl; //获取当前url，并把url中page参数过滤掉
    url = url.replace(/([?&]*)page=([0-9]+)/g, '');
    if (/[?]+/.test(url)) {
        url += '&';
    } else {
        url += '?';
    }

    async.series({
        news:function(done){
            sql.index("select * from xh_news limit "+ (parseInt(page) - 1) * pagesize + "," + pagesize,function(list){
                done(null,list);
            });
        },
        count:function(done){
            sql.index("select count(*) as total from xh_news",function(list){
                done(null,list);
            });
        }

    },function(error,result){
        res.render('news',{
            news: result.news,
            page: showPage.show(url, result.count[0].total, pagesize, page),
        });
    });

};


//联系我们
exports.contact  = function(req,res){
    res.render('contact');
};
exports.add  = function(req,res){
    //res.render('contact');
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var contact = req.body.contact;
    
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    var time =  moment().format('X');

    var txt = "INSERT INTO `xh_message`   (`name`, `phone`, `email`, `contact`,`ip`,`time`) VALUES ('" + name + "', '" + phone + "','" + email + "','" + contact + "','"+ip+"','"+time+"')";
    sql.index( txt , function (list) {
        //done(null, list);
        res.redirect('/');
    });

};



exports.about  = function(req,res){
    async.series({
        one:function(done){
            sql.index("select * from  xh_about",function(list){
                done(null,list);
            })
        }
    },function(error,result){
        // var about = result.one[0].about;
        // res.send( substr (about,120));
        res.render('about',{
            //about : result.one
            about :  result.one
        });
    });
};

exports.uri  = function(req,res){
    async.series({
        one:function(done){
            sql.index("select * from  xh_link",function(list){
                done(null,list);
            })
        }
    },function(error,result){
        res.render('uri',{
            data :  result.one
        });
    });
};


//新闻详细

exports.news_detail = function (req,res){
    var id  = req.param('id');
    // res.send(id);



    async.series({
        one:function(done){
            var txt = "select * from xh_news where id= "+id;
            sql.index(txt,function(list){
                done(null,list);
            });
        }
    },function(error,result){
        var a = result.one;
        console.log(a);
        res.render('news_detail',{
            data:result.one,
        });
    });


    
    //res.send('good job ');
}