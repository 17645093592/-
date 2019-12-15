import React, { Component, Fragment } from 'react'
import { Icon, Button } from "antd"
import "../../../assets/shooping/css/top.css"
export default class top extends Component {
    render() {
        return (
            <Fragment>
                <div className="shoop-top-box">
                    <Button>
                        <Icon type="search" />
                        搜索电影正版周边
                    </Button>
                    <Icon type="shopping-cart" className="shoop-top-right" />
                </div>
            </Fragment>
        )
    }
}
