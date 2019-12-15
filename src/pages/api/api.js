import axios from "axios"

export const getxiangqinga =(id)=>{
    return axios.get(`/utility/share.api?type=116&relateId=${id}`)
}