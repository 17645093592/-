import React, { Component } from 'react'
import "./deader.css"
import axios from "axios"
import NaveBar from "../naveBar"
import {withRouter} from "react-router-dom"
class Header extends Component {
    render() {
        return (
            <div>
                <div className="mtimelink table_vh_c purchasead">
                    <p className="mclose"><a></a></p>
                    <div className="td"><a>
                        <p className="mlogo"></p>
                        <dl className="td">
                            <div className="xiaobox">
                                <dt className="dlt-logo"><em>您已收到150元新人红包</em></dt>
                                 <dd className="dlt-detail"><em>下载时光网App查看（仅限新用户）</em><span>下载APP</span></dd>
                            </div>
                          
                            </dl>
                    </a></div>
                </div>    

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