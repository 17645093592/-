import React, { Component ,Fragment} from 'react'
import { Icon} from "antd"
import "../../../../../assets/shooping/css/xq-css/como.css"
import {withRouter} from "react-router-dom"

class como extends Component {
    constructor(props) {
        super(props)
        this.comoClick=this.comoClick.bind(this)
        this.comoClick=this.comoIClick.bind(this)
        this.comoClick=this.comoIIClick.bind(this)
    }
    comoClick() {
        this.props.history.goBack()
    }
    comoIClick() {
        this.props.history.push("/home")
    }
    comoIIClick() {
        this.props.history.goBack()
    }
    render() {
        return (
            <Fragment>
                <div className="como-top-box">
                    <Icon type="left" className="como-top-left" onClick={this.comoClick}/>
                    <Icon type="bank" className="como-top-con" onClick={this.comoIClick}/>
                    <Icon type="filter" className="como-top-right" onClick={this.comoIIClick}/>
                </div>
            </Fragment>
        )
    }
}
export default withRouter(como)