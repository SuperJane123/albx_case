// 这个模块主要负责读取所有分类的数据
// 引入创建连接数据库
const conn = require('../utils/myconn');



// 1.获取所有分类数据 
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



// 2.更新所有分类数据 
exports.editcateById = (obj,callback)=>{
    // 创建sql语句,根据id查找更新对应的数据
    let sql = `UPDATE categories set ? where id =?`
    conn.query(sql,[obj,obj.id],(err,result)=>{
        if(err){
            console.log(err);
            callback(err);
        }else{
            callback(null)
        }
    });
}


// 3.新增分类到数据库
exports.addNewCate = (obj,callback)=>{
    let sql = `INSERT INTO categories set ?`
    conn.query(sql,obj,(err,result)=>{
        if(err){
            console.log(err);
            callback(err);
        }else{
            callback(null);
        }
    });
};





