// 这个模块主要负责处理判断不同的请求
// 引入模块区域
const express = require('express');
const router = express.Router();
const pagesController = require('./controllers/pagesController');



// ---------前端页面处理区域-----------
// 1.处理阿里白秀index页面
router.get('/',pagesController.indexHtml)

// 2.处理阿里白秀list页面
.get('/list',pagesController.listHtml)


// 3.处理阿里白秀detail页面
.get('/detail',pagesController.detailHtml);



module.exports = router;