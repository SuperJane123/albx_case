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




//   点击编辑获取内容
  $('tbody').on('click','.btn-edit',function(){
      //   console.log(123)fwef
      $('#email').val($(this).data('email'))
      $('#slug').val($(this).data('slug'))
      $('#nickname').val($(this).data('nickname'))
      $('#password').val($(this).data('password'))
    //   添加id的隐藏域
        $('[name=id]').val($(this).data('id'))
      $('#btn-edit').show()
      $('.btn-add').hide()
       
  })    


  

//   事件编辑功能
  $('#btn-edit').on('click',function(){
    let data = $('form').serialize();
    console.log(data)
    // 请求ajax
    $.ajax({
        type: "post",
        url: "/editUser",
        data,
        dataType: "json",
        success: function (res) {
            console.log(res)
            if(res.code === 200){
                testMsg(res)
                $('#email').val('')
                $('#slug').val('')
                $('#nickname').val('')
                $('#password').val('')
              //   添加id的隐藏域
                  $('[name=id]').val('')
                $('#btn-edit').hide()
                $('.btn-add').show()
                 
                init()
            }else {
                testMsg(res)
            }
        }
    });
  })


});