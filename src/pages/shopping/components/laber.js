import React, { Component } from 'react'
import axios from 'axios'
import "../../../assets/shooping/css/laber.css"
import Logo from "../../../components/bscroll/index"
export default class laber extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            cass : 1
        }
    }
    render() {

        return (
            <div className="laber-box">
                <div className="laber-title">
                    <span>
                        <i>你可能感兴趣的</i>
                    </span>
                </div>
                <Logo ref="bscroll">
                <article className="laber-list">
                    <ul>
                        {this.state.data.map((Item,index) => (
                            <li key={index} className={Item.goodsId}>
                                <div className="list-box">
                                    <div className="list-top">
                                        <i style={{background:`${Item.background}`}}>{Item.iconText}</i>
                                    </div>
                                    <div className="list-con"><img src={Item.image} /></div>
                                    <dl className="list-foot">
                                        <dt>
                                            <em>{Item.goodsTip}</em>
                                            {Item.name}
                                        </dt>
                                        <dd>
                                            <i>￥{Item.minSalePrice}</i>
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

        axios.get(`Service/callback-mall.mi/ECommerce/RecommendProducts.api?t=201912139141266557&goodsIds=105808%2C107858%2C108795&pageIndex=${index?++index:"1"}`)
        .then(res => {
            this.setState({
                data: [...this.state.data,...res.data.goodsList],
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
