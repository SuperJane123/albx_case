$(function(){
    // console.log(123)
    $.ajax({
        type: "get",
        url: "/getPostInfo",
        data:{
            pageNum: 1,
            pageSize: 6,
        },
        success: function (result) {
            console.log(result)
            console.log($('tobdy'))
            let html = template("postTemplate",result.result);  //如果模板引擎是{{each result as value}} 就是传result

            $('tbody').html(html);
            console.log(result)
        },
       
    });

});  