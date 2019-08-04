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







// ---------后端页面处理区域-----------

// 1.负责处理后台admin里的index页面
exports.adminIndexHtml = (req,res)=>{
    res.render('admin/index');
};


2.// 2.处理后台categories页面

exports.categoriesHtml = (req,res)=>{
    res.render('admin/categories');
};


// 3.处理后台categories页面
exports.loginHtml = (req,res)=>{
    res.render('admin/login');
};


// 4.处理后台nav-menus页面
exports.navMenusHtml = (req,res)=>{
    res.render('admin/nav-menus');
};

// 5.处理后台password-reset页面
exports.passwordResetHtml = (req,res)=>{
    res.render('admin/password-reset');
};

// 6.处理后台post-addt页面
exports.postAddtHtml = (req,res)=>{
    res.render('admin/post-add');
};



// 7.处理后台post-addt页面
exports.postsHtml = (req,res)=>{
    res.render('admin/posts');
};

// 8.处理后台post-addt页面
exports.profileHtml = (req,res)=>{
    res.render('admin/profile');
};


// 9.处理后台settings页面
exports.settingsHtml = (req,res)=>{
    res.render('admin/settings');
};


// 10.处理后台settings页面
exports.slidesHtml = (req,res)=>{
    res.render('admin/slides');
};


// 11.处理后台users页面
exports.usersHtml = (req,res)=>{
    res.render('admin/users');
};



// 12.处理后台comments页面
exports.commentsHtml = (req,res)=>{
    res.render('admin/comments');

};
