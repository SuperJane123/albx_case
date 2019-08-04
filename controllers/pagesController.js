// 这个模块主要负责处理数据返回给客户


// ---------前端页面处理区域-----------

// 1.负责处理前台阿里白秀index页面
exports.indexHtml = (req,res)=>{
    res.render('index.ejs');
};


// 2.负责处理前台阿里白秀list页面

exports.listHtml = (req,res)=>{
    res.render('list');
};


// 3.处理阿里白秀detail页面
exports.detailHtml = (req,res)=>{
    res.render('detail');
};

