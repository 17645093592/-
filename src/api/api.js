import axios from "axios"
export const loginUser = (obj)=>{
    axios.get("/app/mock/238690/timeLogin",obj)
  }
