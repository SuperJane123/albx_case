$(function(){
    // 请求ajax获取所有分类列表
    $.ajax({
        type: "get",
        url: "/getAllcate",
        // data: "data",
        dataType: "json",
        success: function (res) {
            // console.log(res)
            let html = ' <option value="all">所有分类</option>'
            // 遍历数据生成结构
            res.result.forEach(e => {
                html+= `<option value="${e.id}">${e.name}</option>`
            });
            $('#category').html(html)
        }
    });




// 注册图片上传事件
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
                $('#prewImg').attr('src','../uploads/'+res.img).show();
                // 把图片隐藏域的地址也赋值了
                $('[name=feature]').val(res.img)
                
            }else{
                $('.alert-danger').attr('hidden',false).fadeIn(500).delay(5000).fadeOut(500);
                $('.alert-danger > span').text(res.img)
            }
        }
    });

});



// 调用富文本框的方法,让富本框覆盖textarea
CKEDITOR.replace( 'content' );

// 获取id号
let id = itcast.getParameter(location.search).id;
let data;


// 点击保存，实现新增功能
$('.btn-Save').on('click',function(e){
    e.preventDefault();
    CKEDITOR.instances.content.updateElement();
    // 获取表单数据
    data = $('form').serialize();
    // console.log(data);

    // 判断是是否有id
    if(id){
        opt('/editPostById')    //请求编辑接口
    
    }else{
       
        opt('/AddNewPost')  //请求新增接口
    }

  
});



    // 因为新增和编辑请求ajax的步骤一样，所以封装成函数，直接调用即刻
    function opt(url){
        $.ajax({
            type: "post",
            url,
            data,
            dataType: "json",
            success: function (res) {
                console.log(res)
                location.href = '/admin/posts'
            }
        });
    }



    // 请求ajax，获取文章内容信息

if(id){
      $.ajax({
        type: "get",
        url: "/getPostById?id="+id,
        dataType: "json",
        success: function (res) {
            console.log(res)// 获取数据成功

            // 以下是填充内容
            $('#title').val(res.result.title);
            $('#content').val(res.result.content)
            $('#slug').val(res.result.slug)
            $('#prewImg').attr('src','/uploads/'+res.result.feature).show();
            $('#category').val(res.result.category_id)
            $('[name=feature]').val(res.result.feature)
            $('#status').val(res.result.status)
            $('#created').val(res.result.created);
            // 用隐藏域保存一个id
            $('[name=id]').val(res.result.id)

        }
    });
}
  




});