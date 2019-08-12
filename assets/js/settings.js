$(function(){
    // console.log(23)
    $.ajax({
        type: "get",
        url: "/getSettings",
        dataType: "json",
        success: function (res) {
            console.log(res)
        }
    });


});