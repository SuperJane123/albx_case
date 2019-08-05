// 这个模块负责处理用户登陆的业务逻辑
const userModel = require('../models/usreModel.js');


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
}