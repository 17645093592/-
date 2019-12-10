import React, { Component } from 'react'
import { Tabs } from 'antd';
import "../../pulblic/css/connect/index.css"

import Left from "./left"
import Right from "./right"

const { TabPane } = Tabs;
export default class xiangqing extends Component {
    render() {
        function callback(key) {
            console.log(key);
          }
        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={callback}>

                    <TabPane  tab="正在热映" key="1">
                        <Left />
                    </TabPane>

                    <TabPane tab="即将上映" key="2">
                        <Right />
                    </TabPane>
                </Tabs>,
            </div>
        )
    }
}
