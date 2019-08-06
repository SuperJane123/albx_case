const mysql = require('mysql');
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user:'root',
    password: 'root',
    database: 'baixiu'
});



// 记得要曝光啊！！！
module.exports = conn;

