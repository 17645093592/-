import React, { Component } from 'react'
import {Icon} from "antd"
import "../../pulblic/css/xiangqing/index.css"
export default class xiangqing extends Component {
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

                    <div className="wrap_cont">
                        <section className="m_cinema">
                            <div className="m_bg_cinema baidu_line">
                                <div className="m_bg_img"></div>
                                <p></p>
                            </div>
                        </section>
                        <div className="table cinemabox">
                            <div className="cinema_pic" >
                                <span title="勇敢者游戏2：再战巅..">
                                    <img className="m_img" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F12%2F05%2F093123.64507840_1280X720X2.jpg&width=210&height=316&clipType=4"></img>
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
                                        <h2 className="h22">勇敢者游戏2：再战巅峰</h2>
                                        <p>Jumanji: The Next Level</p>
                                    </span>
                                    <b className="baidu_score">
                                        <em className="m_score"><i>7.0</i></em>
                                    </b>
                                </header>
                                <ul className="tda">
                                    <li><p><b>有彩蛋</b> - 114分钟 <span></span></p></li>
                                    <li><p>动作 / 冒险 / 奇幻</p></li>
                                    <li><p>2019年12月6日中国上映 </p></li>
                                </ul>
                                <aside className="m_cin_btn table" id="wantwatchbox">
                                    <span id='wantButton' className=" m_btn_ngray"><span>我想要看</span></span>
                                    <span id='ratingButton' className="baidu_blue  "><span>我要评分</span></span>
                                </aside>
                            </div>
                        </div>
                        </div>
                        
                        <ul className="cin_otherinfo baidu_color">
                            <li><i className="i_block i_dot baidu_dot"></i><b>勇敢者四人组再闯关</b></li>
                            <li className="li2" id="hideTicketButton"></li>
                            <li id="ticketButton" className="baidu_button">
                                <span className="m_btn_orange"><span>查影讯/购票</span></span>
                            </li>
                        </ul>

                        <div className="cin_line"><p></p><p></p></div>

                        <div className="cin_more" id="plotRegion">
                            <p allplot="《勇敢者游戏2：再战巅峰》是2017年全球卖座动作冒险巨制《勇敢者游戏：决战丛林》的续篇。四名勇敢者再次穿越回到险象环生的游戏世界中，开启全新冒险。与上次不同的是，变身勇石博士 (道恩·强森 饰) 的是斯潘瑟的外公，外公的好友则变身为语言学家 (凯文· 哈特 饰)，高大威猛的弗里奇变成了中年发福地质学家 (杰克·布莱克 饰)，只有学霸玛莎依旧化身性感打女 (凯伦·吉兰 饰)，斯潘瑟和贝瑟尼却不知所踪。为营救消失的伙伴，四人必须进入全面失控的未知世界，面对难度爆表危险重重的致命关卡，强森领队挑战极限玩命闯关。山崩石裂的险境中命悬一线，与突如其来的凶猛野兽死战到底，他们唯有绷紧神经并肩作战，才能通过生死考验逃出生天。一场惊险刺激又充满惊喜的冒险之旅即将展开！影片定档于12月6日全国上映。" partplot="《勇敢者游戏2：再战巅峰》是2017年全球卖座动作冒险巨制《勇敢者游戏：决战丛林》的..">《勇敢者游戏2：再战巅峰》是2017年全球卖座动作冒险巨制《勇敢者游戏：决战丛林》的..</p>
                            <span id="plotButton" className="m_btn_tmore"></span>    
                        </div>


                    </div>
                </div>
            xiangqing
            </div>
        )
    }
}
