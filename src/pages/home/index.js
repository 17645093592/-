import React, { Component } from 'react'
import { Input,Icon } from 'antd';
import Shine from "./shine"
import Soon from "./soon"
import List from "./list"
const { Search } = Input;
 class Home extends Component {
     state={
         name:"北京"
     }
    render() {
        return (
            <div>
                <div className="table_v_c" style={{display:"flex",alignItems: "center",height:"1.3rem",borderBottom:"1px solid #ccc"}}>
                    <div onClick={this.clickHnader.bind(this)} style={{marginLeft: ".3rem"}}>
                        <span ref="aa" style={{marginRight:".15rem"}}>
                             {this.state.name}
                        </span><Icon type="down" />
                    </div>
                    <Search
                    onClick={this.clickHnad.bind(this)}
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 220 ,marginLeft:30,flex:1}}
                    />
                </div>
                
                <Shine {...this.props}/>
                <Soon {...this.props}/>
                <div className="cin_line"><p></p><p></p></div>
                <List {...this.props} />
                
                

            </div>
        )
    }
    clickHnad(){
        this.props.history.push("/seach")
    }
    clickHnader(){
        this.props.history.push("/city")
    }
    componentWillMount(){
        if(this.props.location.state){
            this.setState({
                name:this.props.location.state
            })
        }else{
            this.setState({
                name:this.state.name
            })
        }
    }
   
}
// https://content-api-m.mtime.cn/article/originalInfoList.api
export default Home