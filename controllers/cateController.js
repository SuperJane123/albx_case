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

// 处理编辑文章页面   /editcateById
exports.editcateById = (req,res)=>{
    // 获取请求题参数
    let data = req.body;
    console.log(data);
    // 把接收更新的数据更新到数据里
    cateModel.editcateById(data,err=>{
        if(err){ res.json({code: 400,msg: "编辑失败"})}
        else{res.json({code: 200,msg: "编辑成功"})}
    });
    

};




// 处理分类目录添加分类功能
exports.addNewCate = (req,res)=>{
    // 获取请求体的数据
    let data = req.body;
    data.id = null;
    // 把新增的数据添加到列表中,调用数据模块
    cateModel.addNewCate(data,err=>{
        if(err){res.json({code: 400,msg: "新增失败"})}
        else{res.json({code: 200,msg: "新增成功"})}
    });


};




