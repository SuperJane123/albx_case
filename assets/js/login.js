$(function () {
    $('.btn-login').on('click', function () {
        // console.log(23)
        if ($('#email').val().trim().length === 0) {
            $('.alert-danger > span').text("请输入用户名!");
            $('.alert-danger').fadeIn(500).delay(2000).fadeOut(500);
            return;
        };
        if ($('#password').val().trim().length === 0) {
            $('.alert-danger > span').text("请输入密码!");
            $('.alert-danger').fadeIn(500).delay(2000).fadeOut(500);
            return;
        };

        let data = $('form').serialize();
        console.log(data); //email=w%40zce.me&password=wanglei
        // 请求ajax
        $.ajax({
            type: "post",
            url: "/login",
            data,
            dataType: "json",
            success: function (res) {
                // console.log(res);
                if (res.code == 400) {
                    $('.alert-danger > span').text(res.msg);
                    $('.alert-danger').fadeIn(500).delay(2000).fadeOut(500);
                    
                }else{
                    location.href = '/admin/index';
                }
            }
        });
    });



});