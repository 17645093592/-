import React, { Component ,Fragment} from 'react'
import { Icon, Button } from "antd"
import "../../../../../assets/shooping/css/xq-css/head.css"
import {withRouter} from "react-router-dom"

class head extends Component {
    constructor(props) {
        super(props)
        this.headClick=this.headClick.bind(this)
    }
    headClick() {
        this.props.history.goBack()
    }
    render() {
        return (
            <Fragment>
                <div className="head-top-box">
                    <Icon type="left" className="head-top-left" onClick={this.headClick}/>
                    <Button>
                        <Icon type="search" />
                        搜索电影正版周边
                    </Button>
                    <Icon type="filter" className="head-top-right" />
                </div>
            </Fragment>
        )
    }
}
export default withRouter(head)