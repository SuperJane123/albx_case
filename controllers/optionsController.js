// 这个模块负责网站设置的业务操作

const optionsModel = require('../models/optionsModel');

// 实现导航菜单添加
exports.addNewMenu = (req,res)=>{
    // 获取参数
    let data = req.body;
    data.icon = "fa fa-glass"
    // console.log(data);
    // 调用数据模块
    optionsModel.addNewMenu(data,(err,result)=>{
        if(err){
            res.json({code: 400,msg: "新增失败"})
        }else{
            res.json({code: 200,msg: "新增成功",data:result})
        }
    })

    
};






exports.getSettings = (req,res)=>{
    // 调用数据模块
    optionsModel.getSettings((err,result)=>{
        if(err){
            res.json({code: 400,msg: "获取数据失败"})
        }else{
            res.json({code: 200,msg: "数据获取成功",data:result})
        }
    });

};