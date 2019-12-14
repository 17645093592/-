//多个redux
import {combineReducers} from "redux"
import commentList from "../pages/my/store/reducer"
const reduxs = combineReducers({
    commentList
})

export default reduxs
