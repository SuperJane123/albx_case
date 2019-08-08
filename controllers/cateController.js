// 这个模块主要处理所有分类的业务逻辑
// 引入模块
const cateModel = require('../models/cateModel');



exports.getAllcate = (req,res)=>{
    // 读取数据找model
    cateModel.getAllcate((err,result)=>{
        if(err){
            res.json({code: 400,msg:"数据库出错"})
        }else{
            res.json({code: 200,msg: "获取数据成功",result})
        }
    });
};