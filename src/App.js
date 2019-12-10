
import React, { Component } from 'react'
import Header from "./components/header"
import {Route,Redirect,withRouter} from "react-router-dom"
import {maxRoutes,maiRoutes} from "./router"
 class App extends Component {
  
    render() {
    const {...history} = this.props
        return (
            <>
                <div className="rootTwo">
                
                {
                    (history.location.pathname === "/home" ||history.location.pathname === "/shopping" || history.location.pathname === "/purchase" ||history.location.pathname === "/my" ||history.location.pathname === "/content") ?<Header></Header>:null 
                }
                
                
                    {
                            maxRoutes.map(router=>{
                                return <Route key={router.pathname} path={router.pathname} component={router.component} />
                            })
                    }
                  
                    <Redirect to={maxRoutes[0].pathname} from = "/" exact></Redirect>
               
                </div>
                {
                    maiRoutes.map(router=>{
                        return <Route key={router.pathname} path={router.pathname} component={router.component} />
                    })
                }
                    </>     
        )
    }
}

export default withRouter(App)

