// 这个模块负责处理用户登陆的业务逻辑
const userModel = require('../models/usreModel.js');


// 处理登陆验证
exports.login = function(req,res){
    // 获取请求数据
    let data = req.body;
    userModel.login(data.email,(err,result)=>{
        if(err){
            res.json({code: 400,msg: "服务器失败"});
        }else 
        if(result){
            // 单独判断密码
            if(result.password == data.password){
                // 写入登陆状态
                // res.writeHead(200,{
                //     "Set-Cookie": "isLogin=true",
                // });
                // console.log(req.session)
                req.session.isLogin = 'true';
                // 将当前用户储存到session中
                req.session.currentUser = result;
            
                // console.log(req.session)
                res.end(JSON.stringify({code:200,msg:"登陆成功！"}));
            }else{
                res.json({code: 400,msg:"密码错误"});
            }
        }else {
            res.json({code: 400,msg:"邮箱错误"});
        }
    });
};



// 实现获取所有用户数据
exports.getAllUser = (req,res)=>{
    userModel.getAllUser((err,result)=>{
        if(err){
            res.json({code: 400,msg: "获取数据失败"})
        }else{
            res.json({code: 200,msg: "获取数据成功",data:result})
        }
    })
};





// 处理添加新用户
exports.addNewUser = (req,res)=>{
    let data = req.body;
    console.log(data);
    data.id = null;
    data.avatar = "/uploads/avatar.jpg";
    data.status = "activated";
    // 读取数据模块
    userModel.addNewUser(data,err=>{
        if(err){
            res.json({code: 400,msg: "添加失败"})
        }else{
            res.json({code: 200,msg: "添加成功"})
        }
    })
};



// 处理用户页面的编辑功能
exports.editUser = (req,res)=>{
    let data= req.body;
    // 调用数据模块
    userModel.editUser(data,err=>{
        if(err){
            res.json({code: 400,msg: "修改失败"})
        }else {
            res.json({code: 200,msg: "修改成功"})
        }
    })
}