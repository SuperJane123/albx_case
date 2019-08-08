$(function(){
    // 获取文章元素
    let menuPosts = $('#menu-posts');
    let settings = $('#menu-settings');
    console.log(settings)

    let routerName = itcast.getRouterName(location.href);

    // 判断路由名为以下时，把下拉框状态保持着
    if(routerName == 'posts' || routerName == 'post-add' || routerName == 'categories'){
        menuPosts.addClass('in')
        menuPosts.siblings().removeClass('collapsed')
         
    };
    if(routerName == 'nav-menus' || routerName == 'slides' || routerName == 'settings'){
        settings.addClass('in').attr('aria-expanded',true);
        settings.siblings().removeClass('collapsed')

         
    }; 
});