//剪切字符串
substr = function(str,len) {
	var str_len = str.length;
	if(len>=str_len) return str;
	else{
		return str.substring(0,len)+'...';
	}

    
}



