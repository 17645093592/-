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
                 <ul>
                    <li>
                        <div className="mpic">
                            <div><img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F11%2F15%2F102151.17165213_1280X720X2.jpg&width=130&height=195&clipType=4"></img><em className="m_score"><i>7.0</i></em></div>
                            <p><span>勇敢者游戏2：再战巅峰</span></p>
                        </div>
                    </li>
                    <li>
                    <div className="mpic">
                        <div><img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F11%2F15%2F102151.17165213_1280X720X2.jpg&width=130&height=195&clipType=4"></img><em className="m_score"><i>7.0</i></em></div>
                        <p><span>勇敢者游戏2：再战巅峰</span></p>
                    </div>
                </li> 
                </ul>
            </div>
        )
    }
    clickHandler(){
        this.props.history.push("/xiangqing")
    }
}
