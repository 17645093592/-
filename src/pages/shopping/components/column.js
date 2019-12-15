import React, { Component } from 'react'
import axios from 'axios'
import "../../../assets/shooping/css/column.css"

export default class column extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            b: {},
            c: []
        }
    }
    render() {
        return (
            <div className="shoop-column">
                <article>
                    <div className="column-gsl">
                        <img src={this.state.data.img} className="column-img" />
                    </div>
                    <div className="column-box">
                        {this.state.c.map((c,index) => (
                            <div key={index} className="box-box">
                                <img src={c.image} className="img-box"/>
                            </div>
                        ))}
                    </div>
                </article>
                <div className="column-foot">
                    <img src={this.state.b.img} className="column-img" />
                </div>
            </div>
        )
    }
    componentDidMount() {
        axios.get("Service/callback-mall.mi/PageSubArea/MarketFirstPageNew.api?t=201912111426513284")
            .then(res => {
                this.setState({
                    data: res.data.cellA,
                    b: res.data.cellB,
                    c: res.data.cellC.list
                })
            })
    }
}
