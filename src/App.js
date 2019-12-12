import React, { Component } from 'react'
import Header from "./components/header"
import { Route, Redirect } from "react-router-dom"
import { maxRoutes, maiRoutes } from "./router"

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

                    <Redirect to={maxRoutes[2].pathname} from="/" exact></Redirect>

                </div>
                {
                    maiRoutes.map(router => {
                        return <Route key={router.pathname} path={router.pathname} component={router.component} />
                    })
                }
            </>
        )
    }
}
