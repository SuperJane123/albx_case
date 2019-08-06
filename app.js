// 搭建服务器

// 引入模块区域
const express = require('express');
const app = express();
const router = require('./router');
const bodyParser = require('body-parser');
const session  = require('express-session');



app.listen(9090,()=>{
    console.log('server is running on http://127.0.0.1:9090');
});


// 托管静态资源
app.use('/assets',express.static('assets'));
app.use('/uploads',express.static('uploads'));


app.use(session ({
    //加盐
    secret:'my_baixiu',  //相当于一个加密密钥，值可以是任意字符串
    resave:false,  //强制session保存到session strore，不管session是否有更新，都强制保存
    saveUninitialized: true,  //强制没有初始化的session保存到storage中
}));



// 设置模板引擎
app.set('view engine','ejs');

// 设置使用模板的默认目录
app.set('views',__dirname+'/views');

// 配置body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



//设置导航守卫---所有请求都会经过这个中间介
app.use(function(req,res,next){
    if(req.session.isLogin && req.session.isLogin == 'true' || req.url.indexOf('/admin') == -1 || req.url =='/admin/login'){
        next();
    }else{
        res.redirect('/admin/login')
    }
})


// 引入router来判断不同的请求
app.use(router);




