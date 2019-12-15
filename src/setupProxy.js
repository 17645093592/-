const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use(proxy("/api",{
        target:"http://m.maoyan.com",
                changeOrigin:true,
                pathRewrite:{"^/api" : ""},
                secur:false
    }))
    app.use(proxy("/ajax",{
            target:"http://m.maoyan.com",
            changeOrigin:true
    }))
    app.use(proxy("/Service",{
        target:" https://m.mtime.cn",
        changeOrigin:true,
    }))
    app.use(proxy("/api",{
        target:" https://ticket-m.mtime.cn",
        changeOrigin:true,
    }))
    app.use(proxy("/article",{
        target:" https://content-api-m.mtime.cn",
        changeOrigin:true,
    }))
    app.use(proxy("/api",{
        target:"https://api.ricebook.com",
        changeOrigin:true,
        pathRewrite:{
            "^/api":""
        }
    }))
    app.use(proxy("/Service",{
        target:" https://m.mtime.cn",
        changeOrigin:true,
    }))
   app.use(proxy("/news",{
       target:"https://content-api-m.mtime.cn",
       changeOrigin:true,
   }))
   app.use(proxy("/discovery",{
       target:" https://ticket-api-m.mtime.cn",
       changeOrigin:true
   }))
   app.use(proxy("/utility",{
    target:" https://comm-api-m.mtime.cn",
    changeOrigin:true
}))
app.use(proxy("/cinema",{
    target:"https://ticket-api-m.mtime.cn",
    changeOrigin:true,
}))
app.use(proxy("/app",{
    target:"http://rap2api.taobao.org/",
    changeOrigin:true,
}))
}


