$(function(){
    // 获取文章元素
    let menuPosts = $('#menu-posts');
    let settings = $('#menu-settings');
    // 获取当前路由名称
    let routerName = itcast.getRouterName(location.href);

    // 判断路由是否满足条件，实现展开
    if(routerName == 'posts' || routerName == 'post-add' || routerName == 'categories'){
        menuPosts.addClass('in')
        menuPosts.siblings().removeClass('collapsed')
         
    };
    if(routerName == 'nav-menus' || routerName == 'slides' || routerName == 'settings'){
        settings.addClass('in')
        settings.siblings().removeClass('collapsed')

         
    }; 
    $('#'+routerName).addClass('active');
});