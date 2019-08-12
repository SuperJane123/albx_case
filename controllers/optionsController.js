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





// 实现获取网站设置的内容
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



// 实现编辑网站设置的内容
exports.editSettings = (req,res)=>{
    // 获取请求体的参数
    let data = req.body;
    // console.log(data)

    // 对参数进行细节的修改
    data.comment_status = data.comment_status ? 1 : 0;

    data.comment_reviewed = data.comment_reviewed ? 1 : 0;

    // 调用数据模块
    optionsModel.editSettings(data,err=>{
        if(err){
            res.json({code: 400,msg: "编辑失败"})
        }else{
            res.json({code: 200,msg: "编辑成功"})
        }
    });

};