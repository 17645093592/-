import React, { Component } from 'react'
import Xiazai from "../header/xiazai"
import "../header/deader.css"
import {Icon,Input} from "antd"
import axios from "axios"
import BScrollComponent from "../bscroll"
const { Search } = Input;

export default class City extends Component {
    state={
        cityre:[],
        city:[],
        box:[],
        seach:[],
        val:'',
    }
  
   
    seach(e){
        let box = this.state.box
        let list =[]
        let aaa ="aaa"
        for(var i=0;i<box.length;i++){
            list.push(box[i].n)
            list = list.filter(function(t){
                if(t.indexOf(e.target.value)>-1) {
                    list.push(t)
                }
            })
        }
        
        console.log(list)
       if(!e.target.value){
       this.setState({
           seach: this.state.seach.length=0
       })
       }else{
            this.setState({
                seach:list,
            })
       }
    }
    render() {
        return (
            <div className="dabox" ref="dabox">
                <Xiazai/>
                <header>
                    <div style={{height:"1rem",background:"#1c2635"}} className="h_movietitle">
                        <div className="table_v_c" style={{display:"flex",color:"#fff",alignItems:"center"}}>
                             <Icon style={{marginLeft:".15rem",fontSize:".4rem"}} type="left" />
                            <div className="td m_tita"><h2 style={{flex:'1',color:"#fff",textAlign:'center',margin:"0"}}><span style={{lineHeight:".4rem"}}>选择城市</span></h2></div>
                        </div>
                    </div>
                
                  
                </header>
                <div className="m_bg_white city_search">
                <div className="movie_search" style={{position:"relative"}}>
                    <div className="hea_search">
                        <div style={{display:"flex",justifyContent: "center"}} className="table_v_c">
                        <Search
                        placeholder="输入地址"
                        onSearch={this.aa}
                        onChange={this.seach.bind(this)}
                        style={{ flex:'1'}}
                      />
                        </div>
                       
                    </div>

                {
                   this.state.seach.length ? 
                    ( <div>
                        {
                            this.state.seach.map((item,index)=>{
                                return <li className="llis" onClick={this.clickRemen.bind(this,item)} key={index}>{item}</li>
                            })
                        }
                    </div>)
                    :
                    ( <BScrollComponent ref="bscroll">
                    <div>
                       <div className="city">
                           <p>热门城市:</p>
                           <ul className="clearfix">
                               {
                                   this.state.cityre.map((item,index)=>{
                                     return  <li onClick={this.clickRemen.bind(this,item.nm)} key={item.id}><span>{item.nm}</span></li>
                                   })
                               }
                               
                           </ul>
                       </div>
   
                       {
                         this.state.city.map((item,index)=>{
                             return  <div ref="diva" key={index} className="city">
                                       <p className="ps">{item.index}:</p>
                                       <ul className="clearfix">
                                       {
                                           item.list.map((item2,index2)=>{
                                             return  <li onClick={this.clickRemen.bind(this,item2.nm)} key={item2.id}><span>{item2.nm}</span></li>
                                           })
                                       }    
                                       </ul>
                                   </div>
                         })
                       }
                      
                    
                  </div>
                </BScrollComponent>)
                }
                   
                  
                    
               
                </div>
                <div style={{position:"absolute",top:"3.4rem",right:"0",fontSize:"14px",width:".5rem"}}>
                <ul>
                {
                    this.state.city.map((item,index)=>{
                        return <li onClick={this.clickIndex.bind(this,index)} key={index}> {item.index}</li>
                    })
                }
                    
                 
                </ul>
            </div>
            </div>
            </div>
        )
    }
    clickRemen(nm){
        this.props.history.push({pathname:"/home",state:nm})
    }
    clickIndex(i){
        var indexlist =document.getElementsByClassName("ps")
        this.refs.bscroll.handlewheelTo(indexlist[i].offsetTop)
        // this.refs.bscroll.scrollTop = indexlist[i].offsetTop
    
        //点击谁 就是谁的自身离顶部的距离
       //  console.log(indexlist[index].offsetTop)
    }
    getClit(){
        axios.get("/Service/callback.mi/Showtime/HotCitiesByCinema.api?t=20191291048079252")
        .then(err=>{

            let city = err.data.p
            let hotCity = [],cityList =[]
            //热门城市 返回新数组[{id:id,nm:name}]
            for(var i=0;i<city.length;i++){
                if(city[i].count>=128){
                    hotCity.push({id:city[i].id,nm:city[i].n})
                }
            }
            //拿城市列表 返回新数组[
                //     {index:A,list:[{id:id,nm:name}]},
                //     {index:B,list:[{id:id,nm:name}]},
                // ]
            for(var i=0;i<city.length;i++){
                //这个为ABCDEFG
                let first = city[i].pinyinFull.slice(0,1).toUpperCase()
                //如果 存在
                if(isIndex(first)){
                    cityList.push({index:first,list:[{id:city[i].id,nm:city[i].n}]})
                }else{
                    for(var j=0;j<cityList.length;j++){
                        if(first == cityList[j].index){
                            cityList[j].list.push({id:city[i].id,nm:city[i].n})
                            break;
                        }
                    }
                }
            }
            //判断当前首字母是否在cityList中存在
            function isIndex(first){
                var bstop = true;
                for(var i=0;i<cityList.length;i++){
                    if(cityList[i].index == first){
                        bstop = false;
                        break
                    }
                }
                return bstop
            }
            cityList.sort((a,b)=>{
                if(a.index >b.index){
                    return 1;
                }else{
                    return -1
                }
            })
            this.setState({
                cityre:hotCity,
                city:cityList
            })
            this.setState({
                box:city
            })

        })
    }
    componentDidMount(){
        this.getClit()
    }
}
