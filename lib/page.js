exports.show = function (pagePath,total, pagesize, page) {
    page = parseInt(page);
    var pagenum = Math.ceil(total / pagesize);
    // var min = page > 3 ? page - 2 : 1;
    // var max = page + 2 > pagenum ? pagenum : min + 4;

    if(pagenum<1){
        return false;

    }

    var min = 0;
    var max = 0;

    if(page + 3 > pagenum){
        min = pagenum - page >= 2 ? page - 1 : pagenum - 2 ;

        if(page<pagenum){
            max = page + 1 < pagenum ? page + 1 : pagenum;
        }else{
            max = pagenum;
        }

        //max = page + 1 > pagenum ? page + 1 : pagenum;
    }else if(page + 3 == pagenum){
        min = page -1 ;
        max = page + 1 > pagenum ? pagenum : page + 1;
    }else{
        min = 1;
        max = pagenum >= 3 ? 3 : pagenum ;
    }



    return {
        pagePath: pagePath,
        pagenum: pagenum,
        total: total,
        pagesize: pagesize,
        page: page,
        min: min,
        max: max,
        prev: page - 1 > 0 ? page - 1 : 1,
        next: page + 1 < pagenum ? page + 1 : pagenum
    };
};