$(function(){
    // console.log(23)
    $.ajax({
        type: "get",
        url: "/getSettings",
        dataType: "json",
        success: function (res) {
            console.log(res)
            let html = template('Tempsetting',res);
            $('form').html(html);
        }
    });


    // 实现编辑功能
    $('form').on('click','.btn-save',function(){
        let data = $('form').serialize();
        console.log(data)
        // 请求ajax
        $.ajax({
            type: "post",
            url: "/editSettings",
            data,
            dataType: "json",
            success: function (res) {
                console.log(res)
            }
        });

    });


});