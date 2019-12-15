import {
    Home,
    Purchase,
    My,
    Shopping,
    Content,
    xiangqing,
    Seach,
    City
} from "../pages"
import Review from "../pages/my/review"
import Trailer from "../pages/my/trailer"
import TopList from "../pages/my/topList"
import News from "../pages/my/news"
import NewsInfo from "../pages/my/components/newsInfo"
import Xq from "../pages/home/xq"
import xqa from "../pages/purchase/component/content"
import WrappedNormalLoginForm from "../pages/login"
import shopList from "../pages/shopList"
import CommentInfo from "../pages/my/components/commentInfo"
// import Content from "../pages/purchase/component/content"
export const maxRoutes = [
    {
        pathname:"/home",
        component:Home,
        name:"首页",
        display:true,
        
    },
    {
        pathname:"/purchase",
        component:Purchase,
        name:"购票",
        display:true
    },
    {
        pathname:"/shopping",
        component:Shopping,
        name:"商店",
        display:true,

    },
    {
        pathname:"/my",
        component:My,
        name:"发现",
        display:true,

    },
    {
        pathname:"/content",
        component:Content,
        display:false

    },
    {
        pathname:"/login",
        component:WrappedNormalLoginForm,
        display:false

    },
    {
        pathname:"/contenta",
        component:xqa,
        display:false

    }, 
]


export const maiRoutes = [
    {
        pathname:"/xiangqing",
        component:xiangqing,
       
    },
    {
        pathname:"/seach",
        component:Seach,
       
    },
    {
        pathname:"/city",
        component:City,
       
    },
    {
        pathname:"/xq",
        component:Xq,
       
    },
]

export const myRoutes = [
    {
        pathname: "/my/news",
        component: News,
        name:"新闻"
    }, {
        pathname: "/my/trailer",
        component: Trailer,
        name:"预告片"
    }, {
        pathname: "/my/toplist",
        component: TopList,
        name:"排行榜"
    }, {
        pathname: "/my/review",
        component: Review,
        name:"影评"
    }
]

export const infoRoutes = [
    {
        pathname:"/newsInfo",
        component:NewsInfo,
        name:"新闻详情"
    },
    {
        pathname:"/shoplist",
        component:shopList,
       
    },
    {
        pathname:"/commentInfo",
        component:CommentInfo,
       
    }
  
]



