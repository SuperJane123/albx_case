// 这个模块主要负责网站设置的数据操作
const conn = require('../utils/myconn');


// 实现导航菜单栏的所有数据
exports.getAllMenu = (callback)=>{
    let sql = 'SELECT value FROM `options` WHERE id = 9'
    conn.query(sql,(err,resule)=>{
        if(err){
            console.log(err);
            callback(err);
        }else{
            let jsonStr = resule[0].value
            let arr = JSON.parse(jsonStr);
            callback(null,arr)
        }
    });
};





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




// 实现导航菜单删除功能
exports.deleteMenu = (index,callback)=>{
    let sql = 'SELECT value FROM `options` WHERE id = 9'
    conn.query(sql,(err,resule)=>{
        if(err){
            console.log(err);
            callback(err);
        }else{
            let arr = JSON.parse(resule[0].value);
                    arr.splice(index,1)
                   
            let jsonStr = JSON.stringify(arr)
            sql = `update options set value = ? where id = 9`
            conn.query(sql,[jsonStr],(err2,resule2)=>{
                if(err2){
                    console.log(err2);
                    callback(err2);
                }else{
                    callback(null);
                }
            });
        }
    })
    
} 




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



// 实现编辑网站设置的内容

exports.editSettings = (obj,callback)=>{
    let count = 0
    for(let key in obj){
        let sql = `UPDATE \`options\` set value = ?  WHERE \`key\` = ?`
        conn.query(sql,[obj[key],key],(err,resule)=>{
            if(err){
                callback(err);
                return;
            }else{
                count++;
                if(count == 6){    //等执行完6次后，才返回结果
                    callback(null);
                }
            }
        });
    }
   
};