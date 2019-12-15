import React, { Component } from 'react'
import Xiazai from "../../components/header/xiazai"
import {Icon,Input  } from "antd"
import "../../pulblic/seach/index.css"
import {Redirect} from "react-router-dom"
import axios from "axios"
const { Search } = Input;
export default class Seach extends Component {
    constructor(){
        super()
        this.state={
        dabox:[],
        val:""
    }
    }
    //on
    changeHander(e){
        if (e.target.value) {
              this.getLeft(e.target.value)
        }
      
     
    }
    handlerpush(id){
        this.props.history.push(`./xq/${id}`)
    }
    render() {
        return (
            <div>
                 <Xiazai/>
                 <div className="hea_search">
                     <Icon onClick={this.clickHandd.bind(this)} style={{lineHeight:".7rem",width:".5rem"}} type="left" /> 
                
                     <Search
                     placeholder="input search text"
                     onSearch={value => console.log(value)}
                     onInput={this.changeHander.bind(this)}
                     style={{ width: 200,display: "flex",alignItems: "center" ,flex:"1"}}
                   />
                  
                </div>

                <div className="search_ide edit_searchide">
                    <ul>
                        {
                            this.state.dabox.map((item,index)=>{
                                return    <li key={index} className="table" id={item.id} style={{display:"flex"}} onClick={this.handlerpush.bind(this,item.id)}>
                                            <div className="search_pic">
                                                <span><img src={item.img} className="m_img img_box" alt=""/></span>
                                            </div>
                                            <dl className="tdaa">
                                                <dt>
                                                    <span className="spans">
                                                        <b>{item.nm} ({item.rt})</b>
                                                    </span>
                                                    <span className="spand">[{item.star}]</span>
                                                </dt>
                                                <dd><span>{item.cat}</span></dd>
                                            </dl>
                                        </li>
                            })
                        }
                     
                       
                    </ul>
                </div>
            </div>
        )
    }
    clickHandd(){
        this.props.history.go(-1)
    }
    getLeft(val){
        
        axios.get(`/ajax/search?kw=${val}&cityId=1&stype=-1`)
        .then(err=>{
            console.log(err.data.movies.list)
            const movieList = err.data.movies.list.map(item=>{
                item.img = item.img.replace(/\/w\.h\//,"/128.126/")
                return item
            })
            if (val) {
                 this.setState({
                dabox:movieList
               
             })
            }else{
                this.setState({
                    dabox:[]
                 })
            }
       
        })
        
       
    }
   
    componentWillMount(){
    }
}
