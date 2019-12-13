import React, { Component } from 'react'
import "../../assets/shooping/css/top.css"
import "../../assets/shooping/css/index.css"
import Top from "./components/top"
import Banner from "./components/banner"
import List from "./components/list"
import Column from "./components/column"
import Tips from "./components/tips"
import Laber from "./components/laber"

 class Shopping extends Component {
    render() {
        return (
            <div className="shoop">
             <Top />
             <Banner />
             <List />
             <Column />
             <Tips />
             <Laber />
            </div>
        )
    }
}

export default Shopping