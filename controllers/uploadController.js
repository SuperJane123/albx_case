// 这个模块主要负责处理写文章的业务逻辑
const formidable = require('formidable');
const path = require('path');

// 上传图片的方法
exports.uploadFile = (req,res)=>{
    // 1.创建文件上传对象
    let form = new formidable.IncomingForm();
    // 2.配置编码格式
    form.encoding = 'utf-8';
    // 3.设置储存图片的路径
    form.uploadDir = __dirname+'/../uploads';
    // 4.设置时候保留扩展名
    form.keepExtensions = true;

    // 5.实现文件上传
    /**
     * req  请求报文对象
     * err 错误信息
     * fields  字段(对象)
     * files 文件上传后的相关信息，比如储存图片的信息
     */
    form.parse(req,(err,fields,files)=>{
        let filesName = path.basename(files.img.path)
        // console.log(filesName);
        if(err){
            console.log(err);
            res.json({code: 400,msg: "文件上传失败"})
        }else{
            // console.log(files);
            res.json({code: 200,msg: "文件上传成功",img:filesName})
        }
    });
};



