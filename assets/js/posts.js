$(function(){

// 定义全局的页面和页数量
var pageNum = 1;
var pageSize = 2;


// 把ajax封装未一个方法
function init(search){
    $(function(){
        // console.log(123)
        $.ajax({
            type: "get",
            url: "/getPostInfo",
            //分页查询需要的参数
            data:{
                pageNum,      //第几页
                pageSize,
                ...search
            },
            success: function (res) {
                // console.log(res)
                // 生成动态结构
                let html = template("postTemplate",res.result.resule);  //如果模板引擎是{{each result as value}} 就是传result
    
                $('tbody').html(html);
                // console.log(result)
                // 调用分页的方法
                setPagenation(Math.ceil(res.result.total/pageSize));
            },
           
        });
    
    });  
    
}

init()


// 实现分页功能
    /**
     *
     * @param pageCurrent 当前所在页
     * @param pageSum 总页数
     * @param callback 调用ajax
     */
function setPagenation(total) {
    //初始化
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

            // 重新调用加载数据的方法
            init();
        }
    });
    
};


// 获取所有分类数据
$.ajax({
    type: "get",
    url: "/getAllcate",
    // data: "data",
    dataType: "json",
    success: function (res) {
        //console.log(res)  //获取数据成功
        // 生成分类下拉列表动态结构
        let html = ' <option value="all">所有分类</option>'
            res.result.forEach(e => {
                html+= ` <option value="${e.id}">${e.name}</option>`
            });
            $('.cateSelector').html(html);
    }
});



// 实现筛选功能，给筛选注册点击事件
$('.btn-search').on('click',function(){
     // 获取所有分类和所有状态的内容
     let obj = {
        cate: $('.cateSelector').val(),
        state: $('.statuelector').val()
    }

    // 调用ajax重新加载数据
    init(obj)
});

    
})