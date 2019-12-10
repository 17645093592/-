const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
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
   
}
