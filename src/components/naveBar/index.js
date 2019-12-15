import React, { Component } from 'react'
import "./naveBar.css"
import{NavLink,withRouter} from "react-router-dom"
import {maxRoutes} from "../../router"
const menus = maxRoutes.filter(item=>{
    return item.display === true
})
 class naveBar extends Component {
    
    render() {
        return (
            <div className="hea_news">
                <ul>
                    <li className="onelis"></li>
                    <div className="boxdiv">
                        {
                            menus.map((item,index)=>{
                                 return <li   key={index}>
                                    <NavLink  className="active" to={item.pathname}>
                                        <i></i>
                                        <span>{item.name}</span>
                                    </NavLink>
                                </li>
                            })
                        }
                       
                    </div>
                    <li className="icon" onClick={this.clickHand.bind(this)}></li>
                </ul>
            </div>
        )
    }
    clickHand(){
        console.log(this.props)
        this.props.history.push("/login")
    }
}
export default withRouter(naveBar) 
