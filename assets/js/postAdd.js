$(function(){
    // 请求ajax获取所有分类列表
    $.ajax({
        type: "get",
        url: "/getAllcate",
        // data: "data",
        dataType: "json",
        success: function (res) {
            // console.log(res)
            let html = '';
            // 遍历数据生成结构
            res.result.forEach(e => {
                html+= `<option value="${e.id}">${e.name}</option>`
            });
            $('#category').html(html)
        }
    });




// 获取图片信息
$('#feature').on('change',function(){
    console.log(234)
    let file = this.files[0];
    console.log(file);
    let fd = new FormData();
    fd.append('img',file);
        // 请求ajax，上传图片
    $.ajax({
        type: "post",
        url: "/uploadFile",
        data: fd,
        // 不要动响应头
        contentType: false,
        // 不要动数据类型
        processData: false,
        dataType: "json",
        success: function (res) {
            console.log(res)
            if(res.code === 200){
                $('#prewImg').attr('src','../../uploads/'+res.img).show();
                // 把图片隐藏域的地址也赋值了
                $('[name=feature]').val(res.img)
                
            }else{
                $('.alert-danger').attr('hidden',false);
                $('.alert-danger > span').text(res.img)
            }
        }
    });

});



});