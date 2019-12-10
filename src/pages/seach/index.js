import React, { Component } from 'react'
import Xiazai from "../../components/header/xiazai"
import {Icon,Input,Button  } from "antd"
import "../../pulblic/seach/index.css"
const { Search } = Input;
export default class Seach extends Component {
    
    render() {
        return (
            <div>
                 <Xiazai/>
                 <div className="hea_search">
                     <Icon onClick={this.clickHandd.bind(this)} style={{lineHeight:".7rem"}} type="left" /> 
                     <Search
                     placeholder="input search text"
                     onSearch={value => console.log(value)}
                     style={{ width: 200 }}
                   />
                   <Button type="primary">Primary</Button>
                </div>

                <div className="search_ide edit_searchide">
                    <ul>
                        <li className="table">
                            <div className="search_pic">
                                <span><img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg21.mtime.cn%2Fmt%2F2012%2F01%2F19%2F195216.30784294_1280X720X2.jpg&width=70&height=105&clipType=4" className="m_img img_box" /></span>
                            </div>
                            <dl className="tdaa">
                                <dt>
                                    <span className="spans">
                                        <b>爱的速递 (2016)</b>
                                    </span>
                                    <span className="spand">[电影]</span>
                                </dt>
                                <dd><span>电视剧, 爱情 | 剧情, 中国</span></dd>
                            </dl>
                        </li>
                        <li className="table">
                        <div className="search_pic">
                            <span><img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg21.mtime.cn%2Fmt%2F2012%2F01%2F19%2F195216.30784294_1280X720X2.jpg&width=70&height=105&clipType=4" className="m_img img_box" /></span>
                        </div>
                        <dl className="tdaa">
                            <dt>
                                <span className="spans">
                                    <b>爱的速递 (2016)</b>
                                </span>
                                <span className="spand">[电影]</span>
                            </dt>
                            <dd><span>电视剧, 爱情 | 剧情, 中国</span></dd>
                        </dl>
                    </li>
                    </ul>
                </div>
            </div>
        )
    }
    clickHandd(){
        console.log(this.props.history.go(-1))
    }
}
