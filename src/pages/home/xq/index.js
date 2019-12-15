import React, { Component } from 'react'
import { connect } from "react-redux"
import { setStoreList } from "../../home/store"

class Xq extends Component {
    state = {
        box: []
    }
    render() {
        // let box =[]
        console.log(this.props.home.data);
        let a = this.props.home.data
        
        // box.push(this.props.home.data)
        // const [...a] = this.props.home
        // console.log(a)
        return (
            <div>  
             {
                this.props.home.data.smsDesc  ? 
                (
                    <div>
                    
                      
                           <li>
                                <img   alt=""></img>
                            asdsad
                            {this.props.home.data.smsDesc}
                        </li>
                    </div>
                
                )
                :
                 "aaa"
            }
            
</div> 

            // <div>
            // {
            //     this.props.home.data.map((item,index)=>{
            //      return  <li key={index}>
            //             <img src={item.weixin.img} alt=""></img>
            //             {item.weixin.title}</li>

            //     })
            // }
            //     XQ
            // </div>
        )
    }
    componentDidMount() {
        this.props.setStoreList(this.props.location.state)
        console.log(this.props.home.data)

    }
    // shouldComponentUpdate(props,state){
    //     console.log(props,state)
    //     console.log(props.home.data.email)
     
    //     return true
    // }
}

const a = (state) => {
    return state
}
export default connect(a, { setStoreList })(Xq)
