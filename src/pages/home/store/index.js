import {getxiangqinga} from "../../api/api"
const GET_STORT_LIST = "GET_STORT_LIST"

const defaultState = {
    data:[]
}

export default (state =defaultState,action)=>{
    const newState = JSON.parse(JSON.stringify(action))
    switch(action.type){
        case GET_STORT_LIST:
                // [...state.data,action.data]
            newState.data =action.data
            return newState
        default :
            return state
    }
}

const getStorelist=(data,id)=>{
    return {
        type:GET_STORT_LIST,
        data,
        id
    }
}

export const setStoreList=(id)=>{
    return (dispatch)=>{
        getxiangqinga(id).then(err=>{
           dispatch(getStorelist(err.data.data))
        })
    }
}