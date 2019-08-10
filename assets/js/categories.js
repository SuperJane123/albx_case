$(function(){
    console.log(2123)
    // 请求ajax获取所有分类
    $.ajax({
        type: "get",
        url: '/getAllcate',
        dataType: "json",
        success: function (result) {
            console.log(result)
            // 调用模板引擎的方法
            let html = template('Tempcate',result);
            $('tbody').html(html);
        }
    });


    // 给编辑按钮注册点击事件
    $('tbody').on('click','.btn-edit',function(){
        let id = $(this).data('id');
        //console.log(id);  //获取id成功
        $('#name').val($(this).data('name'))
        $('#slug').val($(this).data('slug'))
        $('#btn-edit').show();
        $('.btn-add').hide();
        $('#id').val(id);


    });



    // 封装请求ajax功能
    function opt(url){
        $.ajax({
            type: "post",
            url,
            data: $('form').serialize(),
            dataType: "json",
            success: function (res) {
                console.log(res)
                if(res.code === 200){
                    alert(res.msg)
                    location.href ='/admin/categories';
                }else{
                    alert(res.msg)
                }   
            }
        });
    }


    // 实现编辑功能
    $('#btn-edit').on('click',function(){
        // console.log(234)
        opt('/editcateById')
    });





    // 实现添加分类功能
    $('.btn-add').on('click',function(){
        // console.log(123)
        // 获取表单内容
        opt('/addNewCate')
        
    });


});