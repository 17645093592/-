import React, { Component } from 'react'
import {  Redirect } from "react-router-dom"
import { myRoutes } from "../../router"
import { Tabs } from 'antd';
import "../../assets/my/my.css"
const { TabPane } = Tabs;

class My extends Component {

    handleClick = (e) => {
        this.props.history.push(e)
    }
    render() {
        return (
            <div>
                <Tabs defaultActiveKey={this.props.location.pathname} onChange={this.handleClick}  >
                    {
                        myRoutes.map(route => {
                            return <TabPane tab={route.name} key={route.pathname}>
                            </TabPane>
                        })
                    }
                </Tabs>
                <Redirect from="/my" to="/my/news" exact />
            </div>
        )
    }
}
export default My