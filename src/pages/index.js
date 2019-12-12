import Loadable from "react-loadable"
import Loading from "../components/loading/index"

const Home =Loadable({
    loader : ()=>import("./home"),
    loading:Loading
})
const Purchase =Loadable({
    loader : ()=>import("./purchase"),
    loading:Loading
})
const My =Loadable({
    loader : ()=>import("./my"),
    loading:Loading
})
const Shopping =Loadable({
    loader : ()=>import("./shopping"),
    loading:Loading
})
const Content =Loadable({
    loader : ()=>import("./content"),
    loading:Loading
})
const xiangqing =Loadable({
    loader : ()=>import("./xiangqing"),
    loading:Loading
})
const Seach =Loadable({
    loader : ()=>import("./seach"),
    loading:Loading
})
const City =Loadable({
    loader : ()=>import("../components/city"),
    loading:Loading
})



// import Home from "./home"
// import Purchase from "./purchase"
// import My from "./my"
// import Shopping from "./shopping"
// import Content from "./content"
// import xiangqing from "./xiangqing"
// import Seach from "./seach"
// import City from "../components/city"

export {
    Home,
    Purchase,
    My,
    Shopping,
    Content,
    xiangqing,
    Seach,
    City
}