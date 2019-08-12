$(function () {
    // 请求ajax获取所有分类
    function init() {
        $.ajax({
            type: "get",
            url: '/getAllcate',
            dataType: "json",
            success: function (result) {
                // console.log(result)
                // 调用模板引擎的方法
                $('tbody').html(template('Tempcate', result));
            }
        });

    }
    init()


    // 给编辑按钮注册点击事件
    $('tbody').on('click', '.btn-edit', function () {
        let id = $(this).data('id');
        //console.log(id);  //获取id成功
        $('#name').val($(this).data('name'))
        $('#slug').val($(this).data('slug'))
        $('#btn-edit').show();
        $('.btn-add').hide();
        $('#id').val(id);


    });



    // 封装请求ajax功能(把信息读取到数据)
    function opt(url) {
        $.ajax({
            type: "post",
            url,
            data: $('form').serialize(),
            dataType: "json",
            success: function (res) {
                // console.log(res)
                if (res.code === 200) {
                    $('.alert-danger').fadeIn(500).delay(2000).fadeOut(500);
                    $('.alert-danger > span').text(res.msg)
                    init()
                } else {
                    alert(res.msg)
                }
            }
        });
    }


    // 实现编辑功能
    $('#btn-edit').click(function () {
        // console.log(234)
        opt('/editcateById')
        $('#btn-edit').hide();
        $('.btn-add').show();
        $('#name').val('')
        $('#slug').val('')
    });





    // 实现添加分类功能
    $('.btn-add').click(function () {
        // console.log(123)
        opt('/addNewCate')
        $('#id').val('');
        $('#name').val('')
        $('#slug').val('')


    });



    // 实现删除功能
    $('tbody').on('click', '.btn-del', function () {
        // console.log(233)
        let id = $(this).data('id')
        // console.log(id);
        if (confirm('请问确认删除吗？')) {
            // 请求ajax
            $.ajax({
                type: "get",
                url: "/deletCateById?id=" + id,
                dataType: "json",
                success: function (res) {
                    // console.log(res)
                    if (res.code === 200) {
                        alert(res.msg)
                        init()
                    } else {
                        alert(res.msg)
                    }
                }
            });

        }


    });



    // 实现全选框全选，并弹出批量删除
    $('.checkAll').click(function(){
        let statu = $(this).prop('checked');
        // console.log(statu);
        $('tbody .cksingle').prop('checked',statu);
        if(statu === true){
            $('.btn-dels').fadeIn(500)
        }else{
            $('.btn-dels').fadeOut(500)
        }
    });



    // 点击全部单选框实现全选,判断批量删除显示

    $('tbody').on('click','.cksingle',function(){
        // 用变量保存被选中的单选框的长度 input:checked
        let cksLength = $('.cksingle:checked').length;
        // console.log(cksLength);
        if(cksLength >1) {
            $('.btn-dels').fadeIn(500)

        }else{
            $('.btn-dels').fadeOut(500)

        };

        // 判断单选框的长度和被选中的长度是否一致，如果一致，全选框也选中
        if(cksLength === $('.cksingle').length){
            $('.checkAll').prop('checked',true);
        }else{
            $('.checkAll').prop('checked',false);
        }
        
    });

    

    // 实现批量删除功能
    $('.btn-dels').click(function(){
      
        // 用变量保存被选择中的单选框按钮
        let arr = $('.cksingle:checked');
        let ids = [];
        for(let i = 0; i<arr.length;i++){
            ids.push(arr[i].dataset['id']);
        }
       // console.log(ids)   //["5", "6", "7"]
        // 请求ajax
        $.ajax({
            type: "get",
            url: "/deletCateById?id=" + ids.join(','),
            dataType: "json",
            success: function (res) {
                if(confirm('请问是否确认删除？')){
                    alert(res.msg)
                    init()
                }
            }
        });
        

    });
    


});