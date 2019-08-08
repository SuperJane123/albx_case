
// 把页数和显示的内容先定义一个全局变量
var pageNum = 1;
var pageSize = 4;



$(function(){
    // console.log(123)
    $.ajax({
        type: "get",
        url: "/getPostInfo",
        data:{
            pageNum,      //第几页
            pageSize,

        },
        success: function (res) {
            console.log(res)
            let html = template("postTemplate",res.result.resule);  //如果模板引擎是{{each result as value}} 就是传result

            $('tbody').html(html);
            // console.log(result)
            // 调用分页的方法
            setPagenation(Math.ceil(res.result.total/pageSize));
        },
       
    });

});  




// 分页功能
    /**
     *
     * @param pageCurrent 当前所在页
     * @param pageSum 总页数
     * @param callback 调用ajax
     */
function setPagenation(total) {
    $(".pagination").bootstrapPaginator({
        //设置版本号
        bootstrapMajorVersion: 3,
        // 显示第几页
        currentPage: pageNum,
        // 总页数
        totalPages: total,   //总页数= 总记录数/pagesize
        //当单击操作按钮的时候, 执行该函数, 调用ajax渲染页面
        onPageClicked: function (event,originalEvent,type,page) {
            // 把当前点击的页码赋值给currentPage, 调用ajax,渲染页面
            pageNum = page
        }
    })
}