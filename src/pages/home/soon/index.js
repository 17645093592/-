import React, { Component } from 'react'
import {Icon} from "antd"
import "../../../pulblic/css/home/shine/index.css"

export default class soon extends Component {
    render() {
        return (
            <div  className="indexmovie indexclick">
                 <h2 onClick={this.clickHandler.bind(this)}>
                    <div><span>即将上映（59部）</span><Icon type="right" /></div>
                 </h2>
            </div>
        )
    }
    clickHandler(){
        this.props.history.push("/content")
    }
}
