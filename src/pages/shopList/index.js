import React, { Component } from 'react'
import Content from "./component/content"
import "../../assets/css/shoplistcss/shoplist.css"
import {Icon} from 'antd';
export default class shopList extends Component {
    render() {
        return (
            <div>
               <div className="chead">
               <Icon className="toleft" type="heart" theme="twoTone" twoToneColor="#eb2f96"/>
               <Icon className="file" type="file" theme="twoTone" twoToneColor="#999"/>
                   </div> 
                  
               <Content/>
            </div>
        )
    }
}
