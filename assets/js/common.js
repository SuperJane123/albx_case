// 这里封装一个获取路由地址的方法

var itcast = {
    getRouterName:(str)=>{
        let routerName="";
        // 判断是否带有参数
        if(location.href.indexOf('?') == -1){  //没有参数时，可以只传一个参数（因为后面咩有参数）
            routerName = str.substring(str.lastIndexOf('/')+1)
        }else{
            routerName = str.substring(str.lastIndexOf('/')+1,str.indexOf('?'))  //如果有参数，就要那就要传两个参数
        };

        return routerName;
    },



    getParameter:(url)=>{
        let str = url.substring(1);
        let arr = str.split('&')
        let temp = []
        let obj={}
        arr.forEach(e=>{
            temp = e.split('=')
            let key = temp[0];
            let value = temp[1];
            obj[key]  = value;
        });
        return obj;
    }






    
};