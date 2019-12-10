import React, { Component } from 'react'
import "./deader.css"
import axios from "axios"
import NaveBar from "../naveBar"
import Xiazai from "./xiazai"
import {withRouter} from "react-router-dom"
class Header extends Component {
    render() {
        return (
            <div>
              
                <Xiazai />
                <NaveBar />

                <div>{this.props.children}</div>
            </div>
        )
    }
    
    componentDidMount(){
        axios.get("/Service/callback.mi/Showtime/HotCitiesByCinema.api?t=20191291048079252").then(res=>{
            // console.log(res)
        })
    }
    
}
export default  withRouter(Header)