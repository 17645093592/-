import React, { Component } from 'react'
import Header from "./components/header"
import { Route, Redirect } from "react-router-dom"
import { maxRoutes, maiRoutes, myRoutes,infoRoutes } from "./router"
export default class App extends Component {
    render() {
        return (
            <>
                <div className="rootTwo">
                    <Header></Header>
                    {
                        maxRoutes.map(router => {
                            return <Route key={router.pathname} path={router.pathname} component={router.component} />
                        })
                    }

                    {/* <Redirect to={maxRoutes[0].pathname} from="/" exact></Redirect> */}
                    {
                        maiRoutes.map(router => {
                            return <Route key={router.pathname} path={router.pathname} component={router.component} />
                        })
                    }
                    {myRoutes.map(route => {
                        return <Route path={route.pathname} component={route.component} key={route.pathname} />
                    })}
                    {
                        infoRoutes.map(route=>{
                            return <Route path={route.pathname} component={route.component} key={route.pathname} />
                        })
                    }
                </div>

            </>
        )
    }
}
