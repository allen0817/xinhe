var async = require('async');
var fs  = require('fs');

exports.index = function(req,res){
	res.send("this is test page");
};

exports.home = function (req, res) {
    console.log("aaaaaaa");
    res.send("this is home page");
    
};


var t = 0;

exports.test= function(req,res){

	console.log();	
	console.log();
	console.log('-------------------------------');

	// fs.exists('dev.json',function(re){
	// 	if(re){
	// 		res.send('存在');
	// 	}else{
	// 		res.send('不存在');
	// 	}
	// });

	//detect 返回其中的第一个值coll传递异步真值测试：可能的值是dev.json,test.json,prod.josn
	// async.detect(['dev.json','test.json','prod.json'], function(filePath, callback) {
	// 	fs.readFile(filePath,function(err,data){ // 这个是异步读取 
	// 		console.log("异步读取: "+filePath + data.toString());
	// 		callback(null,data);
	// 	});
	// },
	// function(err,result){
	// 	console.log(result);
	//     //res.status(200).send();
	//     res.render("test",{
	//     	'data' : result
	//     });
	// });



	//跟detect一样返回其中的第一个值，这里limit 传了一个2，所以他最多只能执行两个异步操作，这个有三人，所以有一个文件不会被执行
	// detectSeries 这个方法一次只运行一个异步方法
	// async.detectLimit(['dev.json','test.json','prod.json'], 2,function(filePath, callback) {
	// 	fs.readFile(filePath,function(err,data){ // 这个是异步读取 
	// 		console.log("异步读取: "+filePath + data.toString());
	// 		callback(data,null);
	// 	});
	// },
	// function(result,err){
	// 	console.log(result);
	//     //res.status(200).send();
	//     res.render("test",{
	//     	'data' : result
	//     });
	// });


	// async.each(['dev.json','test.json','prod.json'], function(file, callback) {

	//     // Perform operation on file here.
	//     console.log('正在读取文件  ' + file);
	// 	fs.readFile(file,function(err,data){ // 这个是异步读取 
	// 		console.log("异步读取: "+file + data.toString());
	// 		callback(data,null);
	// 	});
	// }, function(result,err) {
	//     // if any of the file processing produced an error, err would equal that error
	//     if( err ) {
	//       console.log('出错了');
	//     } else {

 //      	    //res.status(200).send();
	// 	    res.render("test",{
	// 	    	'data' : result
	// 	    });

	//     }
	// });
	
	//读取每个文件的内容并返回
	// var obj = {dev: "dev.json", test: "test.json", prod: "prod.json"};
	// var configs = {};
	// var arr = [];
	// async.forEachOf(obj, function (value, key, callback) {
	//     fs.readFile(value, "utf8", function (err, data) {
	//          if (err) return callback(err);
	//         var temp = JSON.parse(data);
	//         configs[key] = temp.name;
	//         //arr.push (temp.name );
	//         arr.push (data);
	        
	//         callback();
	//     });
	// }, function (err) {
	//     if (err) console.error(err.message);
	// 	//res.status(200).send();
	// 	console.log(configs);
	//     res.render("test",{
	//     	'data' : arr
	//     });
	// });

	//任何一个异步遇到成功则返回
	// var obj = {dev: "dev.json", test: "test.json", prod: "prod.json"};
	// var configs = {};
	// var arr = [];
	// async.every(obj, function (value, callback) {
	//     fs.readFile(value, "utf8", function (err, data) {
	//         if (err) return callback(null,err);
	//         arr.push (data);
	//         callback(null,err);
	//     });
	    
	// }, function (err,result) {
	//     if (err) console.error(err.message);
	// 	// res.status(200).send();
	// 	// console.log(configs);
	//     res.render("test",{
	//     	'data' : arr
	//     });
	// });


	// var obj = {dev: "dev.json", test: "test.json", prod: "prod.json"};
	// var configs = {};
	// var arr = [];
	// async.everyLimit (obj, 3,function (value, callback) {
	//     fs.readFile(value, "utf8", function (err, data) {
	//         if (err) return callback(null,err);
	//         arr.push (data);
	//         console.log(value);
	//         callback(null,err);
	//     });
	    
	// }, function (err,result) {
	//     if (err) console.error(err.message);
	// 	// res.status(200).send();
	// 	//console.log(arr);
	//     res.render("test",{
	//     	'data' : arr
	//     });
	// });

	// var obj = {dev: "dev.json", test: "test.json", prod: "prod.json"};
	// var arr = [] ;
	// async.filter(obj, function(value, callback) {
	// 	fs.readFile(value, "utf8", function (err, data) {
	//         if (err) return callback(null,err);
	//         arr.push (data);
	//         console.log(value);
	//         callback(null,err);
	//     });
	// }, function(err, results) {
	//     res.render("test",{
	//     	'data' : arr
	//     });
	// });
	
	// var obj = {dev: "dev.json", test: "test.json", prod: "prod.json"};
	// var arr = [] ;
	// async.map(obj, function(value, callback) {
	// 	fs.readFile(value, "utf8", function (err, data) {
	//         if (err) return callback(null,err);
	//         arr.push (data);
	//         //console.log(value);
	//         callback(null,err);
	//     });
	// }, function(err, results) {
	// 	console.log("a");
	//     res.render("test",{
	//     	'data' : arr
	//     });
	// });


	// 从左面一个个把数组里的值删除
	// var arr = [1,2,3,4,5,6,10,15,30];
	// var t = [];
	// async.reduce(arr, 0, function(memo, item, callback) {
	//     // pointless async:
	//     process.nextTick(function() {
	//     	//console.log(memo);
	//     	t.push(item);

	//     	//console.log(memo+"-"+item);
	//         callback(null, memo + item);
	//         console.log(t);
	//         console.log(arr);
	//         console.log("----------");
	//     });
	// }, function(err, result) {
	// 	res.send('hello world');
	//     // result is now equal to the last value of memo, which is 6
	// });
		
	//排序 
	// async.sortBy([1,9,3,5], function(x, callback) {
	//     //callback(null, x); //从大到小排序
	//     callback(null, x*-1);//从小到大排序
	// }, function(err,result) {
	//     // result callback
	//     for (var i = result.length - 1; i >= 0; i--) {
	//     	console.log(result[i]);
	//     }
	//     res.send('hello world');
	// });

	// async.transform([1,2,3], function(acc, item, index, callback) {
	//     // pointless async:
	//     process.nextTick(function() {
	//         acc.push(item * 2);
	//         callback(null)
	//     });
	// }, function(err, result) {
	// 	console.log(result);
	// 	res.send('hello world');
	//     // result is now equal to [2, 4, 6]
	// });


	// var str = hello('allen2');

	// res.send(str);

	//var str = '';

	// 将提供的参数应用于数组中的每个函数，多个参数的用法不太明确 
	// async.applyEach([hello, name], 'world', function(callback){
	// 	callback();
	// });
	// res.status(200).send();

	// 注入
	//根据他们的要求。每个功能可以选择依赖于首先完成的其他功能，并且一旦满足其要求，就会运行每个功能。
	//每个功能可以选择依赖于首先完成的其他功能，并且一旦满足其要求，就会运行每个功能。
	// 这里 是满足要求，并不是先执行这 get_data,make_folder 两个方法先，只是检查他有没有这两个方法和返回且没有错时就会运行每个功能，总的来说他还是刷异步的
	// async.auto({
 //    get_data: function(callback) {
 //        console.log('in get_data');
 //        callback(null, 'data', 'converted to array');
 //    },
 //    make_folder: function(callback) {
 //        console.log('in make_folder');
 //        callback(null, 'folder');
 //    },
 //    bb:function(callback){
 //    	console.log('bb');
 //    	callback(null,['a','b','c']); //可以返回数组
 //    	//callback();//可以不用返回
 //    },
 //    first:['bb',function(results,callback){
 //    	console.log('my first');
 //    	console.log("t1:" + t); //0
 //    	t = t + 1;
 //    	console.log("t2:" + t); //1
 //    	//callback(null,'first');
 //    	callback();//可以不用返回
 //    }],

 //    cc,

 //    write_file: ['get_data', 'make_folder', function(results, callback) {
 //        console.log('in write_file', JSON.stringify(results));
 //        console.log("t3:" + t); // 0
 //        hello("allen");
 //        callback(null, 'filename');
 //    }],
 //    email_link: ['write_file', function(results, callback) {
 //        console.log('in email_link', JSON.stringify(results));
 //        callback(null, {'file':results.write_file, 'email':'user@example.com'});
 //    }]
	// }, function(err, results) {
	//     console.log('err = ', err);
	//     console.log('results = ', results);
	//     res.status(200).send("hello world");
	// });


	//自动注入
	//在通常的回调参数之后，依赖的任务被指定为函数的参数，参数名称与其所依赖的任务的名称相匹配。
	//我：可以把上面的结果集传递给下一个函数使用
	// async.autoInject({
 //    get_data: function(callback) {
 //        callback(null, '10086@qq.com', 'abc@qq.com');
 //    },
 //    make_folder: function(callback) {
 //        callback(null, 'allen');
 //    },
 //    write_file: function(get_data, make_folder, callback) {//把这两个函数结果返回
 //        //callback(null, 'filename');
 //        callback(null, get_data,make_folder);
 //    },
 //    email_link: function(write_file, callback) {
 //     	//callback(null, {'file':write_file, 'email':'user@example.com'});
 //        //callback(null, {'file':write_file[1], 'email':write_file[0]});
 //        callback(null, {'file':write_file[1], 'email':write_file[0][0]});
 //    }
	// }, function(err, results) {
	//     console.log('err = ', err);
	//     console.log('email_link = ', results.email_link);
	//     res.status(200).send("hello world");
	// });



	//cargo 

	//添加到cargo的任务将被完全处理（达到payload极限）。如果 worker正在进行中，任务将排队等待直到可用。一旦完成了worker一些任务，就会调用这些任务的每个回调
	// var cargo = async.cargo(function(tasks, callback) { //function 异步处理的函数
	//     for (var i=0; i<tasks.length; i++) {
	//         console.log('hello ' + tasks[i].name);
	//     } //这 for tasks.length 循环完 才会执行下面的 的回调
	//     callback(); //执行他自己的函数体
	// }, 2);//这个2 指每轮最多处理两个异步请求，如果为0则表示没限制

	// // add some items
	// cargo.push({name: 'foo'}, function(err) {
	//     console.log('finished processing foo');
	// });
	// cargo.push({name: 'bar'}, function(err) {
	//     console.log('finished processing bar');
	// });

	// cargo.push({name: 'baz'}, function(err) {
	//     console.log('finished processing baz');
	// });


	// compose 
	//创建一个作为传递的异步函数的组合的函数。每个函数消耗以下函数的返回值。
	// function add1(n, callback) {
 //    setTimeout(function () {
 //        callback(null, n + 1);
 //        	console.log("add1: "+n);
	//     }, 10);
	// }
	// function mul3(n, callback) {
	//     setTimeout(function () {
	//         callback(null, n * 3);
	//         console.log("mul3: "+n);
	//     }, 10);
	// }
	// var add1mul3 = async.compose(mul3,add1); //每个函数消耗以下函数的返回值: mu13会使用 add1函数的返回值
	// add1mul3(4, function (err, result) {   
	//     // result now equals 15  (4 + 1) *3 = 15
	//     console.log("all: "+result);
	// });



	//during 这下面函数他先跑第一个函数，count<5时，他跑了第二个函数 count++,然后回来跑第一个函数，直到count不小于5时就跑err 这里结束
	// var count = 0;
	// async.during(
	//     function (callback) {
	//     	console.log("a:"+count);
	//         return callback(null, count < 5);
	//     },
	//     function (callback) {
	//         count++;
	//         console.log("b:"+count);
	//         setTimeout(callback, 1000);
	//     },
	//     function (err) {
	//     	console.log(3);
	//         // 5 seconds have passed
	//     }
	// );


	// forever 不知具体怎么用
	// async.forever(
	//     function(next) {
	//         console.log(Date());
	//     },
	//     function(err){
	//         console.log("err stop");
	//     }
	// );

	//并行运行函数集合，而不必等到上一个函数完成。如果任何函数将错误传递给其回调，则main callback将立即使用错误值进行调用。一旦完成tasks，结果将callback作为数组传递给final 
	// parallel是关于并行执行I / O任务，而不是并行执行代码。如果您的任务不使用任何定时器或执行任何I / O，它们实际上将被串行执行。每个任务的任何同步设置部分将一个接一个地发生。JavaScript仍然是单线程的。

	// async.parallel([
	//     function(callback) {
	//         setTimeout(function() {
	//             callback(null, 'one');
	//         }, 200);
	//     },
	//     function(callback) {
	//         setTimeout(function() {
	//             callback(null, 'two');
	//         }, 100);
	//     }
	// ],
	// // optional callback
	// function(err, results) {
	//     // the results array will equal ['one','two'] even though
	//     // the second function had a shorter timeout.
	// });

	// an example using an object instead of an array

	// async.parallel({
	//     one: function(callback) {
	//         setTimeout(function() {
	//             callback(null, 1);
	//         }, 200);
	//     },
	//     two: function(callback) {
	//         setTimeout(function() {
	//             callback(null, 2);
	//         }, 100);//这个100小于200所以这会先执行，如果两个都没有设置时间或时间相等，他会串行执行
	//     }
	// }, function(err, results) {
	// 	console.log(results);
	//     // results is now equals to: { two: 2,one: 1}
	// });
		

	//queue 队列
	//可以调节队列顺序
	// var q = async.queue(function(task, callback) {
	//     console.log('hello ' + task.name);
	//     callback();
	// }, 2);

	// // assign a callback
	// q.drain = function() {
	//     console.log('all items have been processed');
	// };
	// // add some items to the queue
	// q.push({name: 'foo'}, function(err) {
	//     console.log('1finished processing foo');
	// });
	// q.push({name: 'bar'}, function (err) {
	//     console.log('2finished processing bar');
	// });
	// // add some items to the queue (batch-wise)//批量添加到队列
	// q.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], function(err) {
	//     console.log('3finished processing item');
	// });

	// // add some items to the front of the queue 放到队列前面
	// q.unshift({name: 'bar'}, function (err) {
	//     console.log('4finished processing bar');
	// });


	//race tasks并行运行函数数组，而不必等到上一个函数完成。一旦任何tasks完成或传递错误到它的回调，主要callback是立即被调用
	//有一个完成就会立刻返回的，中返回一次，但其它的程序都是会执行的 (谁先完成谁返回)
	// async.race([
	//     function(callback) {
	//         setTimeout(function() {
	//             console.log(1);
	//             callback(null, 'one');
	//         }, 200);     
	//     },
	//     function(callback) {
	//         setTimeout(function() {
	//         	console.log(2);
	//         	setTimeout(function(){
	//         		callback(null, 'two');
	//         	},1000);
	//             //callback(null, 'two');
	//         }, 100);//这个100 会先运行，如果这里先比其它地方完成先，会先返回 
	//     }
	// ],
	// // main callback
	// function(err, result) {
	// 	console.log(result);
	//     // the result will be equal to 'two' as it finishes earlier
	// });




	// retry 试图从一个成功的响应task不超过times返回一个错误之前的时间。如果任务成功，callback将通过成功任务的结果。如果所有尝试都失败，回调将被传递给最终尝试的错误和结果

 	//try calling apiMethod 3 times, waiting 200 ms between each retry 尝试3次，每次间隔200毫秒
	// async.retry({times: 3, interval: 200}, dog, function(err, result) {
	//     // do something with the result
	// });

	// // try calling apiMethod 10 times with exponential backoff
	// // (i.e. intervals of 100, 200, 400, 800, 1600, ... milliseconds)
	// async.retry({
	//   times: 10,
	//   interval: function(retryCount) {
	//     return 50 * Math.pow(2, retryCount);
	//   }
	// }, dog, function(err, result) {
	//     // do something with the result
	// });

	// // try calling apiMethod the default 5 times no delay between each retry
	// async.retry(dog, function(err, result) {
	//     // do something with the result
	// });


	//series 串联运行集合中的函数，每个函数在上一个函数完成后运行。如果系列中的任何函数将错误传递给其回调，则不再运行更多的函数，并callback立即使用错误值进行调用
	// async.series({
	//     one: function(callback) {
	//         setTimeout(function() {
	//         	console.log(1);
	//             callback(null, 1);
	//         }, 200);
	//     },
	//     two: function(callback){
	//         setTimeout(function() {
	//         	console.log(2);
	//             callback(null, 2);
	//         }, 100);
	//     }
	// }, function(err, results) {
	//     // results is now equal to: {one: 1, two: 2}
	// });


	//tiems
	// async.times(5,function(n,callback){  // 这个相当是for 
	// 	console.log(n);
	// })  

	// var createUser = function(id, callback) {
	//     callback(null, {
	//         id: 'user' + id
	//     });
	// };

	// // generate 5 users
	// async.times(5, function(n, next) {
	//     createUser(n, function(err, user) {
	//         next(err, user);
	//         console.log(user);
	//     });


	// }, function(err, users) {
	//     // we should now have 5 users
	// });

	// var count4 = 0; 
	// async.until( 
	//     function() { return count4>3 }, 
	//     function(cb) { 
	//         console.log('1.4 count: ',count4); 
	//         count4++; 
	//         setTimeout(cb,200); 
	//     }, 
	//     function(err) { 
	//         // 4s have passed 
	//         console.log('1.4 err: ',err); // -> undefined 
	//     } 
	// );


//waterfall (串联运行，传递结果)
//tasks串联运行函数数组，每个函数将其结果传递给数组中的下一个。但是，如果任何tasks一个错误传递给他们自己的回调，下一个函数不执行，并且main callback被立即调用与错误

	// async.waterfall([
	//     function(callback) {
	//         callback(null, 'one', 'two');
	//     },
	//     function(arg1, arg2, callback) {
	//         // arg1 now equals 'one' and arg2 now equals 'two'
	//         callback(null, 'three');
	//         console.log(arg1+'--'+arg2+'3');
	//     },
	//     function(arg1, callback) {
	//         // arg1 now equals 'three'
	//         callback(null, 'done');
	//         console.log(arg1+'2');
	//     }
	// ], function (err, result) {
	//     // result now equals 'done'
	//     console.log(result+'1');
	// });

	// async.waterfall([
	//     myFirstFunction,
	//     mySecondFunction,
	//     myLastFunction,
	// ], function (err, result) {
	//     // result now equals 'done'
	//     console.log(5);
	// });
	// function myFirstFunction(callback) {
	//     callback(null, 'one', 'two');
	//     console.log(3);
	// }
	// function mySecondFunction(arg1, arg2, callback) {
	//     // arg1 now equals 'one' and arg2 now equals 'two'
	//     callback(null, 'three');
	//     console.log(2);
	// }
	// function myLastFunction(arg1, callback) {
	//     // arg1 now equals 'three'
	//     callback(null, 'done');
	//     console.log(1);
	// }


	//whilst 这个可以相当是其它语言的 while 吧，
	//反复呼叫iteratee，同时test返回true。callback停止呼叫或发生错误
	// var count = 0;
	// async.whilst(
	//     function() { return count < 5; },
	//     function(callback) {
	//     	console.log(count);
	//         count++;
	//         setTimeout(function() {
	//             callback(null, count);
	//         }, 1000);
	//     },
	//     function (err, n) {
	//         // 5 seconds have passed, n = 5
	//         console.log(n);
	//     }
	// );




	res.status(200).send("hello world");



}	


function hello(name){
	console.log("hello "+ name);

	return "hello "+ name;
}

function name(name){
	console.log("your name is "+ name);
	return "your name is  "+ name;
}

function cc(callback){
	console.log("cc:");
	callback(null,'cc function');
}

function dog(){
	console.log('this is dog');
	return  "hello allen";
}