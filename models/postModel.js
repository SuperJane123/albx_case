// 这个模块负责读取文章的数据信息
// 因为有很多数据模块需要创建连接，所以把创建连接数据库的代码封装起来
const conn = require('../utils/myconn');

exports.getPostInfo = (obj,callback)=>{
    // 创建sql语句
let sql = `select posts.*,users.nickname,categories.name
from posts
join users on posts.user_id = users.id
join categories on posts.category_id = categories.id
order by id desc
limit ${(obj.pageNum-1)*obj.pageSize},${obj.pageSize}`
    // 执行sql语句
    conn.query(sql,(err,resule)=>{
        if(err){
            console.log(err);
            callback(err);
        }else{
            callback(null,resule);
        };
    });

};
