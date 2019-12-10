import React, { Component } from 'react'
import "../../../pulblic/css/connect/right.css"

export default class Right extends Component {
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
                                <li>
                                    <time><span>9月20日</span></time>
                                    <div className="table movielist">
                                        <div className="upmovie_pic">
                                            <div><img className="m_img img_box" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F08%2F20%2F184519.87782615_1280X720X2.jpg&width=170&height=255&clipType=4"></img></div>
                                        </div>
                                        <div className="upmovie_txt td">
                                            <dl>
                                                <dt>
                                                    <div><b>小Q</b></div>
                                                </dt>
                                                <dd>
                                                    <p className="txt_elli">导演：罗永昌</p>
                                                    <p className="txt_elli">演员：任达华,梁咏琪</p>
                                                </dd>
                                            </dl>
                                            <div className="btns">
                                                <div className="m_btn_green">预告片</div>
                                            </div>
                                        </div>  
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="cin_line"><p></p><p></p></div>

                <div className="commovie">
                    <h2 className="title"><b>即将上映</b><span>(48部)</span></h2>
                    <div className="commovielist">
                        
                    </div>
                </div>

            </div>
        )
    }
}
