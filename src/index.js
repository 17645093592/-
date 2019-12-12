import React from "react"
import {render} from "react-dom"
import App from "./App"
import {Provider} from "react-redux"
import store from "./store/store"
import {HashRouter  as Router} from "react-router-dom"
import 'antd/dist/antd.css';
render((
<Provider store={store}>
    <Router>
      <App/>
      
    </Router>
  </Provider>
  ),document.getElementById("root"))
  // <Route path="/home" render={( )=><App />}></Route>
    
        // <Switch>
        //   <Route path="/home" render={()=><App/>} />
        //   {
        //     mainRoutes.map(router=>{
        //       return <Route key={router.pathname} path={router.pathname} component={router.component} />
        //     })
        //   }

  // <Route path="/home" render={( )=><App />}></Route>
    
        // <Switch>
        //   <Route path="/home" render={()=><App/>} />
        //   {
        //     mainRoutes.map(router=>{
        //       return <Route key={router.pathname} path={router.pathname} component={router.component} />
        //     })
        //   }
        //   </Switch></Router>