import React, { Component } from 'react'
import axios from 'axios'
import "../../../assets/shooping/css/list.css"

class list extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        this.listClik = this.listClik.bind(this)
    }
    listClik() {
        this.props.history.push("/home");
    }
    render() {
        return (
            <div className="shoop-list">
            <ul>
                {this.state.data.map((item,index)=>{
                    return (
                    <li key={index} onClick={this.listClik}>
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
                console.log(res)
                this.setState({
                    data: [...res.data.navigatorIcon]
                })
            })
    }
}
export default list