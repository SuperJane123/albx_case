// 这个模块负责读取文章的数据信息
// 因为有很多数据模块需要创建连接，所以把创建连接数据库的代码封装起来
const conn = require('../utils/myconn');

exports.getPostInfo = (obj, callback) => {
    // console.log(obj)
    // 创建sql语句，获取所有文章数据
    let sql = `select posts.*,users.nickname,categories.name
from posts
join users on posts.user_id = users.id
join categories on posts.category_id = categories.id 
where 1 = 1 `

    if (obj.cate && obj.cate != "all") {    //obj.cate是分类id
        sql += ` and category_id = ${obj.cate}`
    };
    if (obj.state && obj.state != "all") {    //obj.state是状态
        sql += ` and posts.status = "${obj.state}"`
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
            JOIN users on posts.user_id = users.id`;

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