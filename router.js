// 这个模块主要负责处理判断不同的请求
// 引入模块区域
const express = require('express');
const router = express.Router();
const pagesController = require('./controllers/pagesController');
const userController = require('./controllers/userController');
const postController = require('./controllers/postController');
const cateController = require('./controllers/cateController');
const postAddController = require('./controllers/postAddController');



// ---------前端页面处理区域-----------
// 1.处理阿里白秀index页面
router.get('/index',pagesController.indexHtml)

// 2.处理阿里白秀list页面
.get('/list',pagesController.listHtml)


// 3.处理阿里白秀detail页面
.get('/detail',pagesController.detailHtml)








// ---------后端页面处理区域-----------

// 1.处理后台index页面
.get('/admin/index',pagesController.adminIndexHtml)


// 2.处理后台categories页面
.get('/admin/categories',pagesController.categoriesHtml)


// 3.处理后台login页面
.get('/admin/login',pagesController.loginHtml)


// 4.处理后台nav-menus页面
.get('/admin/nav-menus',pagesController.navMenusHtml)

// 5.处理后台password-reset页面
.get('/admin/password-reset',pagesController.passwordResetHtml)


// 6.处理后台post-addt页面
.get('/admin/post-add',pagesController.postAddtHtml)


// 7.处理后台post-addt页面
.get('/admin/posts',pagesController.postsHtml)


// 8.处理后台profile页面
.get('/admin/profile',pagesController.profileHtml)


// 9.处理后台settings页面
.get('/admin/settings',pagesController.settingsHtml)


// 10.处理后台settings页面
.get('/admin/slides',pagesController.slidesHtml)


// 11.处理后台users页面
.get('/admin/users',pagesController.usersHtml)


// 12.处理后台comments页面
.get('/admin/comments',pagesController.commentsHtml)






// ---------API接口处理区域-----------
// 1.登陆验证接口 /login

.post('/login',userController.login)


// 2.添加获取文章数据接口 /getPostInfo
.get('/getPostInfo',postController.getPostInfo)


// 3.获取所有分类信息 /getAllcates
.get('/getAllcate',cateController.getAllcate)


// 4.上传图片接口 /uploadImg
.post('/uploadFile',postAddController.uploadFile)


// 5.处理新增文章数据的接口 /AddNewPost
.post('/AddNewPost',postAddController.AddNewPost)








module.exports = router;