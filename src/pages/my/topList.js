import React, { Component, Fragment } from 'react'
import "../../assets/my/topList.css"
import {Icon} from "antd"
import axios from "axios"

class TopList extends Component {
    componentDidMount(){
        this.getList()
    }
    getList(){
       axios.get("/Service/callback.mi/TopList/TopListOfAll.api?t=2019121217421038426&pageIndex=1")
       .then(res=>{
           console.log(res.data.topLists)
           this.setState({
               list:[...res.data.topLists]
           },_=>{
               console.log(this.state.list)
           })
           
       }) 
    }
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    render() {
        return (
            <Fragment>
                <div className="picBox">
                    <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F03%2F01%2F173620.86296561.jpg&width=640&height=360&clipType=3" />
                    <span>
                        那些荣获奥斯卡的LGBT电影
                    </span>
                </div>
                <div className="topMenu">
                    <ul>
                        <li>
                        <Icon type="fire" style={{fontSize:".8rem",background:"#1498c9",width:"1.5rem",height:"1.5rem",lineHeight:"1.5rem",borderRadius:"50%",color:"white",marginTop:".1rem"}} />
                        <span style={{fontSize:".3rem",marginBottom:".1rem",color:"#1498c9"}}>时光Top100</span>
                        </li>
                        <li>
                        <Icon type="bar-chart" style={{fontSize:".8rem",background:"#3bc7c2",width:"1.5rem",height:"1.5rem",lineHeight:"1.5rem",borderRadius:"50%",color:"white",marginTop:".1rem"}} />
                        <span style={{fontSize:".3rem",marginBottom:".1rem",color:"#3bc7c2"}}>华语Top100</span>
                        </li>
                        <li>
                        <Icon type="line-chart" style={{fontSize:".8rem",background:"#ffc12d",width:"1.5rem",height:"1.5rem",lineHeight:"1.5rem",borderRadius:"50%",color:"white",marginTop:".1rem"}} />
                        <span style={{fontSize:".3rem",marginBottom:".1rem",color:"#ffc12d"}}>全球票房榜</span>
                        </li>
                    </ul>
                </div>
                <div className="topList">
                    <ul>
                        {/* <li>
                            <h2>昆汀·塔伦蒂诺个人推荐私宠电影Top20</h2>
                            <h3>昆汀也是一个狂热的影迷</h3>
                            <Icon type="right" style={{fontSize:".5rem",position:"absolute",right:".2rem",bottom:".5rem"}} />
                        </li> */}
                        {this.state.list.map((item,index)=>{
                            return (
                                <li key={index}>
                        <h2>{item.topListNameCn}</h2>
                        <h3>{item.summary}</h3>
                            <Icon type="right" style={{fontSize:".5rem",position:"absolute",right:".2rem",bottom:".5rem"}} />
                        </li>
                            )

                        })}
                    </ul>
                </div>
            </Fragment>
        )
    }
}

export default TopList