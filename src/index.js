import React from "react"
import {render} from "react-dom"
import App from "./App"
import {HashRouter  as Router,Route} from "react-router-dom"
import 'antd/dist/antd.css';
render((

  <Router>
    <App/>
    
  </Router>
  ),document.getElementById("root"))
  // <Route path="/home" render={( )=><App />}></Route>
    
        // <Switch>
        //   <Route path="/home" render={()=><App/>} />
        //   {
        //     mainRoutes.map(router=>{
        //       return <Route key={router.pathname} path={router.pathname} component={router.component} />
        //     })
        //   }
        //   </Switch></Router>