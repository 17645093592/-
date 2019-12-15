import {loginUser}from "../../../api/api"
const defaultState = {
        "data": {
          "userInfor": "",
          "uid": "",
          "avater": "",
          "authtoken": "",
          "userstate": 0
        }
}
const LOGIN_TRUE = "LOGIN_TRUE"
export default (state = defaultState,action)=>{
    switch (action.type) {
        case LOGIN_TRUE:
            return {...state,...action.data};
            default:
                return state

    }
}
const Logintru = (data)=>{
return{
    type:LOGIN_TRUE,
    data
}
}
export const Logintrue =(obj)=>{
    return(dispatch)=>{
        dispatch(Logintru())
        loginUser(obj).then((res)=>{
      console.log(res)
        })
    }
}