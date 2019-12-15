import React, { Component } from 'react'
import {Icon,Collapse } from "antd"
import "../../pulblic/css/xiangqing/index.css"
import axios from "axios"
const { Panel } = Collapse;
  
export default class xiangqing extends Component {
    state={
        list:[],
        yue:"",
        ri:""
    }
    clickHand(){
        this.props.history.go(-1)
    }
    render() {
        return (
            <div className="wrap_white"> 
                <div className="mobile_wrap">
                    <div className="header movie">
                        <div className="table_v_c ">
                             <Icon onClick={this.clickHand.bind(this)} type="left" style={{ fontSize: '20px', color: '#ccc', marginLeft: ".2rem" }}/>
                            <div className="td filmtool">
                                <div className="spans">
                                    <span className="i_h_collection"></span>
                                    <span className="i_h_share"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {
                        this.state.list.map((item,index)=>{
                            return  <div key={index} className="wrap_cont">
                            <section className="m_cinema">
                                <div className="m_bg_cinema baidu_line">
                                    <div className="m_bg_img"></div>
                                    <p></p>
                                </div>
                            </section>
                            <div className="table cinemabox">
                                <div className="cinema_pic" >
                                    <span title={item.titleCn}>
                                        <img className="m_img" src={item.image}></img>
                                        <i className='i_video'></i>
                                        <div className="moviever">
                                            <i className="i_cine_05"></i>
                                            <i className="i_cine_14"></i>
                                            <i className="i_cine_15"></i>
                                        </div>
                                    </span>
                                </div>
                                <div className="cinema_txt"> 
                                <div className="table_v">
                                    <header>
                                        <span >
                                            <h2 className="h22">{item.titleCn}</h2>
                                            <p>{item.titleEn}</p>
                                        </span>
                                        <b className="baidu_score">
                                            <em className="m_score"><i>{item.rating}</i></em>
                                        </b>
                                    </header>
                                    <ul className="tda">
                                        <li><p><b>有彩蛋</b> - {item.runTime} <span></span></p></li>
                                        <li><p>{item.type[0]} / {item.type[1]} / {item.type[2]}</p></li>
                                        <li><p>{item.year}年{this.state.yue}月{this.state.ri}日中国上映 </p></li>
                                    </ul>
                                    <aside className="m_cin_btn table" id="wantwatchbox">
                                        <span id='wantButton' className=" m_btn_ngray"><span>我想要看</span></span>
                                        <span id='ratingButton' className="baidu_blue  "><span>我要评分</span></span>
                                    </aside>
                                </div>
                            </div>
                            </div>
                            
                            <ul className="cin_otherinfo baidu_color">
                                <li><i className="i_block i_dot baidu_dot"></i><b>{item.commonSpecial}</b></li>
                                <li className="li2" id="hideTicketButton"></li>
                                <li id="ticketButton" className="baidu_button">
                                    <span className="m_btn_orange"><span>查影讯/购票</span></span>
                                </li>
                            </ul>

                            <div className="cin_line"><p></p><p></p></div>

                            <div className="cin_more" id="plotRegion">
                                <Collapse defaultActiveKey={['1']} >
                                    <Panel header="简介：" key="1">
                                    <p style={{height:"auto",fontSize:".4rem"}}>{item.content}</p>
                                    </Panel>
                                </Collapse>,
                            </div>


                        </div>
                        })
                    }
                    
                </div>
            </div>
        )
    }
    getXiangqing(){
        console.log(this.props)
        const xiangqing = JSON.parse (this.props.history.location.pathname.split("/")[2]) 
        const yue = this.props.history.location.pathname.split("/")[3]
        const ri = this.props.history.location.pathname.split("/")[4]
        axios.post(`/Service/callback.mi/movie/Detail.api?movieId=${xiangqing}&locationId=290&t=2019121022481419480`)
        .then(res=>{
            const resa = res.data
            this.state.list.push(resa)
            this.setState({
                list: this.state.list,
                yue : yue,
                ri:ri
            })
        })
    }
   componentDidMount(){
       this.getXiangqing()
        
    }
}
