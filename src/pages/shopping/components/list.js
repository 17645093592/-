import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from "react-router-dom"
import "../../../assets/shooping/css/list.css"

class list extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
       
    }
    listClik(url) {
        console.log(url)
        let a = url.split("=")[1] ? url.split("=")[1] : "0"
        this.props.history.push(`/xiangq/${a}`);
    }
    render() {
        return (
            <div className="shoop-list">
            <ul>
                {this.state.data.map((item,index)=>{
                    return (
                    <li key={index} onClick={this.listClik.bind(this,item.url)}>
                        <img src={item.image} />
                         <p>{item.iconTitle}</p>
                    </li>)
                })}
            </ul>
        </div>
        )
    }
    componentDidMount() {
        axios.get("Service/callback-mall.mi/PageSubArea/MarketFirstPageNew.api?t=201912111426513284")
            .then(res => {
                this.setState({
                    data: [...res.data.navigatorIcon]
                })
            })
    }
}
export default withRouter(list) 