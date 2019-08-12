$(function(){
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
                console.log(res)
                
            }
        });
    });


});