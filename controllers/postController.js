// 这个模块负责处理发布文章的业务逻辑

// 引入区域
const postModel = require('../models/postModel');



// 1.获取所有文章数据
exports.getPostInfo = (req,res)=>{
    let obj = req.query;
    
    // 获取数据找数据模块model
   postModel.getPostInfo(obj,(err,result)=>{
        if(err){
            res.json({code:400,msg: "数据库出错了"});
        }else{
            res.json({code: 200,msg: "获取数据成功",result})
            // console.log(result);
        }

   });
};




// 2.写入新增的文章数据
exports.AddNewPost = (req,res)=>{
    // 获取请求体数据
    let data = req.body;
    // 现在获取的data数据里是少了3个值的，需要手动添加上去
    data.views = 0;
    data.likes = 0;
    data.user_id = req.session.currentUser.id

    // 读取数据model
    postModel.AddNewPost(data,err=>{
        if(err){res.json({code: 400,msg: "新增失败"}) }
        else{res.json({code: 200,msg: "新增成功"})}
            
    });
};