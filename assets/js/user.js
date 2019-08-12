$(function(){

    // 弹宽提示
    function testMsg(res){
        $('.alert-danger').fadeIn(500).delay(5000).fadeOut(500);
        $('.alert-danger>span').text(res.msg);
    }
    



// 获取所有用户数据
function init(){
    $.ajax({
        type: "get",
        url: "/getAllUser",
        dataType: "json",
        success: function (res) {
            console.log(res)
            let html = template('Tempuser',res);
            $('tbody').html(html);
        }
    });
}

init()






// 实现添加功能
  $('.btn-add').on('click',function(){
    let data = $('form').serialize();
    $.ajax({
        type: "post",
        url: "/addNewUser",
        data,
        dataType: "json",
        success: function (res) {
            if(res.code === 200){
                testMsg(res);
                $('#email').val('');
                $('#slug').val('');
                $('#nickname').val('');
                $('#password').val('');
                init()

            }else{
                testMsg(res)
            }
            
        }
    });

  });



  


});