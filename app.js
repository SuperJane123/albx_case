// 搭建服务器

// 引入模块区域
const express = require('express');
const app = express();



app.listen(9090,()=>{
    console.log('server is running on http://127.0.0.1:9090');
});


// 托管静态资源
app.use('/assets',express.static('assets'));
app.use('/uploads',express.static('uploads'));



// 设置模板引擎
app.set('view engine','ejs');

// 设置使用模板的默认目录
app.set('views',__dirname+'/views');




