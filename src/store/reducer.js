//多个redux
import {combineReducers} from "redux"
import redux from "./redux"
import home from "../pages/home/store"
import loginstore from "../pages/login/store/loginreducer"
const reduxs = combineReducers({
    redux,
    home,
    loginstore
})

export default reduxs
