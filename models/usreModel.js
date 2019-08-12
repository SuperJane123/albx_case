// 这个模块主要负责读取用户的数据信息
const conn = require('../utils/myconn');

// 读取用户登陆数据信息
exports.login = function(email,callback){
    // 创建一个sql语句,因为数据库里，是不分大小写的，素以密码要另外做单独判断
    let sql = `SELECT * FROM users WHERE email = '${email}'`;
    // 执行命令
    conn.query(sql,(err,result)=>{
        if(err){
            console.log(err)
            callback(err);
        }else{
            callback(null,result[0])
        }
    });

}



// 读取所有用户数据
exports.getAllUser = (callback)=>{
    let sql = `SELECT * FROM users`;
    conn.query(sql,(err,result)=>{
        if(err){
            console.log(err);
            callback(err)
        }else{
            callback(null,result);
        }
    });
};







// 实现添加新用户
exports.addNewUser = (obj,callback)=>{
    let sql = `INSERT INTO users set ?`
    conn.query(sql,obj,(err,result)=>{
        if(err){
            console.log(err)
            callback(err)
        }else{
            callback(null)
        }
    });
};