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
import Xiangq from "../pages/shopping/components/list-xq"
import Xiangx from "../pages/shopping/components/list.xx"
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
        pathname:"/xiangq",
        component:Xiangq,
        display:false

    },
    {
        pathname:"/xiangx",
        component:Xiangx,
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
    }
]



