import {createStore,applyMiddleware} from "redux"
import reducer from "./reducer"
//异步处理
import thunk from "redux-thunk"

const store = createStore(reducer,applyMiddleware(thunk))

export default store