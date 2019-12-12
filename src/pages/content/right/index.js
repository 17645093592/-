import React, { Component } from 'react'
import "../../../pulblic/css/connect/right.css"
import {withRouter} from "react-router-dom"
import axios from "axios"
 class Right extends Component {
    state={
        data1:[],
        data2:[]
    }
    render() {
        return (
            <div className="upcoming">
                <div className="mosemovie">
                    <h2 className="title">
                        <b>最受关注</b>
                        <span>（1部）</span>
                    </h2>
                    <div>
                        <div className="filmscroll">
                            <ul className="table transition4">
                                {
                                    this.state.data1.map((item,index)=>{
                                        return <li onClick={this.clickHanddde.bind(this,item.id,item.rMonth,item.rDay)} key={index}>
                                        <time><span>{item.rMonth}月{item.rDay}日</span></time>
                                        <div className="table movielist">
                                            <div className="upmovie_pic">
                                                <div><img className="m_img img_box" src={item.image}></img></div>
                                            </div>
                                            <div className="upmovie_txt td">
                                                <dl>
                                                    <dt>
                                                        <div><b>{item.title}</b></div>
                                                    </dt>
                                                    <dd>
                                                        <p className="txt_elli">导演：{item.director}</p>
                                                        <p className="txt_elli">演员：{item.actor1},{item.actor2}</p>
                                                    </dd>
                                                </dl>
                                                <div className="btnsa">
                                                    <div className="m_btn_green">预告片</div>
                                                </div>
                                            </div>  
                                        </div>
                                    </li>
                                    })
                                }
                               
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="cin_line"><p></p><p></p></div>

                <div className="commovie">
                    <h2 className="title"><b>即将上映</b><span>(48部)</span></h2>
                    <div className="commovielist">
                      
                        <ul>
                            {
                                this.state.data2.map((item,index)=>{
                                    return  <li onClick={this.clickHanddde.bind(this,item.id,item.rMonth,item.rDay)} className={item.id} key={index}>
                                        <time className="month">
                                        <span>{item.rMonth}月-----</span>
                                        </time>
                                        <time className="day"><span>{item.rDay}日</span></time>
                                        <div className="table movielist">
                                            <div className="upmovie_pic">
                                                <div><img className="m_img img_box" src={item.image}></img></div>
                                            </div>
                                            <div className="upmovie_txt td">
                                                <dl>
                                                        <dt>
                                                            <div><b>{item.title}</b></div>
                                                        </dt>
                                                        <dd>
                                                            <p><b className="color">{item.wantedCount}</b> 人想看 - 剧情</p>
                                                            <p>导演：{item.director}</p>
                                                        </dd>
                                                    </dl>
                                                    <div className="btnsaa">
                                                    {
                                                        item.isVideo ?  <div className="m_btn_green">预告片</div> : null
                                                    } 
                                                    </div>
                                            </div>
                                        </div>
                                </li>
                                })
                            }
                          
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
    clickHanddde(id,y,r){
        this.props.history.push(`/xiangqing/${id}/${y}/${r}`)
    }
    getRight(){
        axios.get("/Service/callback.mi/Movie/MovieComingNew.api?locationId=290&t=201912102134166727")
        .then(err=>{
            this.setState(()=>{
                return{
                    data1:err.data.attention,
                    data2:err.data.moviecomings
                }
            })
        })
    }
    componentDidMount(){
      this.getRight()
    }
}
export default withRouter(Right)
