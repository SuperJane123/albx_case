$(function(){

    // 弹宽提示
    function testMsg(res){
        $('.alert-danger').fadeIn(500).delay(5000).fadeOut(500);
        $('.alert-danger>span').text(res.msg);
    }
    

    

    // 获取所有导航数据
    function init(){
        $.ajax({
            type: "get",
            url: "/getAllMenu",
            dataType: "json",
            success: function (res) {
                console.log(res)
                let html = template('Tempmenu',res)
                $('tbody').html(html)
            }
        });
    
    }
    init();



    // 实现添加功能

    $('.btn-add').on('click',function(){
        let data = $('form').serialize();
        console.log(data)
        // 请求ajax
        $.ajax({
            type: "post",
            url: "/addNewMenu",
            data,
            dataType: "json",
            success: function (res) {
                if(res.code ===200){
                    testMsg(res)
                    $('#text').val('');
                    $('#title').val('');
                    $('#href').val('')
                }else{
                    testMsg(res)
                }
                init();
                
            }
        });
    });


// 实现删除功能

    $('tbody').on('click','.btn-del',function(){
        let index = $(this).data('index')
        // console.log(index);
        if(confirm('请问确认删除吗？')){
             // 请求ajax
        $.ajax({
            type: "get",
            url: "/deleteMenu",
            data:{index},
            dataType: "json",
            success: function (res) {
                if(res.code === 200){
                    alert(res.msg)
                }
                init()
            }
        });   
        }
       

    });



});