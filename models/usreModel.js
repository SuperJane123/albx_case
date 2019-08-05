// 这个模块主要负责读取用户的数据信息
// 1.连接一个数据库
const mysql = require('mysql');
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user:'root',
    password: 'root',
    database: 'baixiu'
});


// 1.读取用户登陆数据信息
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