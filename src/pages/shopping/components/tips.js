import React, { Component,Fragment } from 'react'
import axios from 'axios'
import { Icon } from "antd"
import "../../../assets/shooping/css/tips.css"
export default class tips extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }
    render() {
        return (
            <Fragment>
                {this.state.data.map(data => (
                    <div className="shoop-tips">
                        <div className="tips-top">
                            <div>
                                <p style={{background:`${data.colorValue}`,width:".8rem",height:".5rem"}}></p>
                                <span>{data.name}</span>
                            </div>
                            <span>更多 <Icon type="right" /></span>
                        </div>
                        <div className="tips-con"><img src={data.image} /></div>
                        <div className="tips-foot">
                            {data.subList.map((item,index)=>{
                                return <li key={index}>
                                        <img src={item.image} />
                                        <p>萨格度外一个更富有</p>
                                        <span>￥<strong>456</strong></span>
                                    </li>
                                
                            })}
                        </div>
                    </div>
                ))}
            </Fragment>
        )
    }
    componentDidMount() {
        axios.get("Service/callback-mall.mi/PageSubArea/MarketFirstPageNew.api?t=201912111426513284")
            .then(res => {
                this.setState({
                    data: [...res.data.category]
                })
            })
    }
}
