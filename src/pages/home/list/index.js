import React, { Component } from 'react'
import "../../../pulblic/css/home/list/index.css"
import axios from "axios"
import {connect} from "react-redux"
import { stat } from 'fs'
 class List extends Component {
    state={
        list:[]
    }
    render() {
        // console.log(this.state.list)
        return (
            <div className="m_bg_gray">
                 <div className="mallshop">
                    <div className="shop00" id="firstH5Urldiv">
                        <div className="shopmid">
                            <div className="firstH5UrlA">
                                <img className="firstH5UrlImg" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F31%2F143906.61810640.jpg&width=640&height=320&clipType=4" alt=""></img>
                            </div>
                        </div>
                    </div>
                 </div>

                 <div className="m_bg_white todayhot">
                    <h2><b>今日热点</b></h2>
                    <ul className="hotPoints">
                        {
                            this.state.list.map((item,index)=>{
                                return (
                                        
                                 item.images[0].isVideo === true?
                                         (
                                            <li className={item.relatedId} onClick={this.clickHandd.bind(this,item.relatedId)}  key={index}>
                                            <div>
                                                <div className="todaypic_bigimg"><img className="m_img img_box" src={item.images[0].imgUrl} alt=""></img><i className="video_icon"></i></div>
                                                <div className="todaytxt">
                                                    <h2>{item.title}</h2>
                                                    <p><span></span></p>
                                                    <p><time>{parseInt(((new Date().getTime()/1000)-item.publishTime)%60) }分钟前</time></p>
                                                </div>
                                            </div>
                                            </li>
                                        )
                                        :
                                        (
                                            <li className={item.relatedId} key={item.title} onClick={this.clickHandd.bind(this,item.relatedId)}>
                                                <div className="table">
                                                    <div className="todaypic"><img className="m_img img_box" src={item.images[0].imgUrl} alt=""></img></div>
                                                    <div className="todaytxt td">
                                                        <h2>{item.title}</h2>
                                                        <p><time>{parseInt(((new Date().getTime()/1000)-item.publishTime)%60)}分钟前</time></p>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                        
                                      
                                )
                                        
                                    
                            })
                        }
                      
                       
                    </ul>
                    <div className="btn_viewmore" id="btnMore">查看更多</div>
                 </div>

                
            </div>
        )
    }
    clickHandd(id){
       this.props.history.push({pathname:"/xq",state:id})
    }
    componentWillMount(){
        axios.post("/article/originalInfoList.api")
        .then(err=>{
            this.setState({
                list:err.data.data.list
            })
        })
    }
 
}


export default connect()(List) 