// 这个模块主要负责读取所有分类的数据
// 引入创建连接数据库
const conn = require('../utils/myconn');




exports.getAllcate = (callback)=>{
    // 创建sql语句
    let sql = `SELECT * FROM categories`;
    // 执行sql语句
    conn.query(sql,(err,result)=>{
        if(err){
            console.log(err);
            callback(err);
        }else{
            callback(null,result)
        }
    });
};