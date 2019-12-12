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

    }
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
