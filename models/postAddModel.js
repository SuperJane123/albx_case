// 这个模块主要负责处理新增页面的新增数据
const conn = require('../utils/myconn');


exports.AddNewPost = (obj,callback)=>{
    // 创建sql语句,?是占位符
    let sql = `INSERT INTO posts set ?`;
    // 执行sql命令
    conn.query(sql,obj,(err,result)=>{
        if(err){
            console.log(err);
            callback(err);
        }else{
            callback(null);
        }
    });
};