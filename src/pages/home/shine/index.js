import React, { Component } from 'react'
import {Icon} from "antd"
import "../../../pulblic/css/home/shine/index.css"
import axios from "axios"
export default class shine extends Component {
    state={
        onebox:[]
    }
    render() {
        return (
            <div className="indexmovie">
                <h2 onClick={this.clickHandler.bind(this)}><div><span>正在热映（56部）</span><Icon type="right" /></div></h2>
                <ul>
                    {
                        this.state.onebox.map((item,index)=>{
                            return  <li onClick={this.clickHandder.bind(this,item.id,item.rd)} className={item.id} key={index}>
                                        <div className="mpic">
                                            <div><img src={item.img}></img><em className="m_score"><i>{item.r}</i></em></div>
                                            <p><span>{item.t}</span></p>
                                        </div>
                                     </li>
                        })
                    }
                </ul>
            </div>
        )
    }
    clickHandder(id,rd){
        let mm = rd.substring(4).substring(0,2),
        dd = rd.substring(6);
 this.props.history.push(`/xiangqing/${id}/${mm}/${dd}`)
    }
    clickHandler(){
        this.props.history.push("/content")
    }
    getShouye(){
        axios.get("/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=201912102046147443")
        .then(err=>{
            let box =err.data.ms.splice(0,8)
            this.setState({
                onebox:box
            })
        })
    }
    componentDidMount(){
        this.getShouye()
    }
}
