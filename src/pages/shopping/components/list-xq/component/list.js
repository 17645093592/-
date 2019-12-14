import React, { Component } from 'react'
import axios from 'axios'
import "../../../../../assets/shooping/css/laber.css"
import Logo from "../../../../../components/bscroll/index"
import {withRouter} from "react-router-dom"
class list extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            cass : ""
        }
    }
    laberClick(index){
        this.props.history.push(`/xiangx/${index}`);
    }
    render() {
        return (
            <div className="laber-box">
                <Logo ref="bscroll">
                <article className="laber-list">
                    <ul>
                        {this.state.data.map((Item,index) => (
                            <li key={index} className={Item.goodsId} onClick={this.laberClick.bind(this,Item.goodsId)}>
                                <div className="list-box">
                                    <div className="list-top">
                                        <i style={{background:`${Item.background}`}}>{Item.iconText}</i>
                                    </div>
                                    <div className="list-con"><img src={Item.imageSrc} /></div>
                                    <dl className="list-foot">
                                        <dt>
                                            <em>{Item.goodsTip}</em>
                                            {Item.name}
                                        </dt>
                                        <dd>
                                            <i>￥680</i>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                        ))}
                    </ul>
                </article>
                </Logo>
            </div>
        )
    }
    getList(index){
        const a = unescape(this.props.location.pathname.substring(8))
        const b = escape(a)
        axios.get(`Service/callback-mall.mi/ECommerce/SearchGoods.api?keyword=&pageIndex=${index?++index:"1"}&sf=0&sm=2&topicId=0&movieId=0&roleId=0&categoryId1=${b}`)
        .then(res => {
            this.setState({
                data: [...this.state.data,...res.data.content.goods.goodsList],
                cass:++this.state.cass
            })
        })
    }

    componentWillUpdate(){
        this.refs.bscroll.handleRestUp()
        this.refs.bscroll.handlefinishPullDown()
    }
    componentDidMount() {
      this.getList()
      this.refs.bscroll.handlepullingUp(()=>{
          this.getList(this.state.cass)
         })
      
    }
}
export default withRouter(list)
