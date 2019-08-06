// 这个模块负责处理发布文章的业务逻辑

// 引入区域
const postModel = require('../models/postModel');

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