import React, { Component } from 'react'
import { Input,Icon } from 'antd';
import Shine from "./shine"
import Soon from "./soon"
const { Search } = Input;
 class Home extends Component {
    render() {
        return (
            <div>
                
                <div className="table_v_c" style={{display:"flex",alignItems: "center",height:"1.3rem",borderBottom:"1px solid #ccc"}}>
                    <div style={{marginLeft: ".3rem"}}><span>北京</span><Icon type="down" /></div>
                    <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 220 ,marginLeft:30}}
                    />
                </div>
                
                <Shine {...this.props}/>
                <Soon {...this.props}/>

                
                

            </div>
        )
    }
   
}

export default Home