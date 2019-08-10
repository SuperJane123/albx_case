// 这个模块负责读取文章的数据信息
// 因为有很多数据模块需要创建连接，所以把创建连接数据库的代码封装起来
const conn = require('../utils/myconn');


// 1.获取所有文章信息

exports.getPostInfo = (obj, callback) => {
    // console.log(obj)
    // 创建sql语句，获取所有文章数据
    let condition1 = ` and category_id = ${obj.cate}`
    let condition2 = ` and posts.status = "${obj.state}"`

    let sql = `select posts.*,users.nickname,categories.name
from posts
join users on posts.user_id = users.id
join categories on posts.category_id = categories.id 
where 1 = 1 `

    if (obj.cate && obj.cate != "all") {    //obj.cate是分类id
        sql += condition1
    };
    if (obj.state && obj.state != "all") {    //obj.state是状态
        sql += condition2 
    }


    sql += ` order by id desc
        limit ${(obj.pageNum-1)*obj.pageSize},${obj.pageSize}`
    // 执行sql语句
    conn.query(sql, (err,resule) => {
        if (err) {
            console.log(err);
            callback(err);
        } else {
            // 再创建sql，进行总记录的查询
            sql = `SELECT count(*) as cnt from posts 
            JOIN categories on posts.category_id = categories.id
            JOIN users on posts.user_id = users.id where 2=2 `

            if (obj.cate && obj.cate != "all") {    //obj.cate是分类id
                sql += condition1
            }
            if (obj.state && obj.state != "all") {    //obj.state是状态
                sql += condition2 
            }

            // 然后再次执行sql命令
            conn.query(sql, (err2, total) => { //此时结果总数返回的是一个数据类型
                if (err2) {
                    console.log(err2);
                    callback(err2);
                } else {
                    callback(null, {
                        resule,
                        total: total[0].cnt
                    });
                }
            })
        }
    });

};





// 2.新增文章写入数据

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






// 3.根据id号查找相对应的数据信息
exports.getPostById = (id,callback)=>{
    // 创建sql语句，查找相对应的id
    let sql = 'SELECT * FROM posts WHERE id ='+id

    // 执行命令
    conn.query(sql,(err,result)=>{
        if(err){
            console.log(err);
            callback(err);
        }else{
            callback(null,result[0]);
        }
    });
};




4.// 7.处理编辑文章页面
exports.editPostById = (obj,callback)=>{
    // 创建sql语句
    let sql = `UPDATE posts SET ? WHERE id = ?`
    conn.query(sql,[obj,obj.id],(err)=>{
        if(err){
            console.log(err);
            callback(err);
        }else{
            callback(null);
        }
    });
};