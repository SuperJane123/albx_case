// 这个模块主要负责网站设置的数据操作
const conn = require('../utils/myconn');

// 实现导航菜单添加
exports.addNewMenu = (obj,callback)=>{
    // 筛选出符合的数据
    let sql = 'SELECT value FROM `options` WHERE id = 9';
    conn.query(sql,(err,result)=>{
        if(err){
            console.log(err);
            callback(err);
        }else{
            // 把数据转换成数据形式
            let jsonStr = result[0].value
            let arr = JSON.parse(jsonStr);
            arr.push(obj);
            let str = JSON.stringify(arr);
            sql = `update options set value = ? where id = 9`
            conn.query(sql,[str],(err1,result2)=>{
                if(err){
                    console.log(err1);
                    callback(err);
                }else{
                    callback(null,result[0].value); 
                }
            }); 
            
        }
    });
};






// 处理根据id号获取网站设置的数据
exports.getSettings = (callback)=>{
    // 创建sql语句，查找符合条件的数据
    let sql  = 'SELECT * FROM `options` WHERE id < 9'
    conn.query(sql,(err,result)=>{
        if(err){
            console.log(err);
            callback(err);
        }else{
            callback(null,result);
        }
    });
};