import React, { Component,Fragment} from 'react'
import axios from "axios"
import "../index.css"
export default class xiangq extends Component {
    state={
        data:[],
        data1:[],
        data2:[],
        box:[],
        box1:[],
        nm:"热火"
    }
    //点击图片
    clickHanddd(nm,xb){
        this.setState({
            nm:nm
        })
        this.setState({
            //相对应的下表
            data1:this.state.data[xb].shows
        })
    }   
    //点击 时间
    clickHHandd(idex){
        this.setState({
            data2:this.state.data1[idex].plist
        })
    }
    render() {
        console.log(this.state.box1)
        return (
            <div>
                <div className="boxx">
                    <ul className="aaa"> 
                        {
                            this.state.data.map((item,index)=>{
                                return  <li key={index} onClick={this.clickHanddd.bind(this,item.nm,index)} className="bbb" key={index}>
                                            <img src={item.img} alt=""></img>
                                            
                                        </li>
                            })
                        }
                    </ul>
                    <div className="ccc">{this.state.nm}</div>
                </div>

                {
                    this.state.data1.length ?
                    (
                         <div className="boxx2">
                            {
                                this.state.data1.map((item,index)=>{
                                    return  <div key={index} className="a" onClick={this.clickHHandd.bind(this,index)}>{item.dateShow}</div>
                                })
                            }
                          </div>
                    )
                    :
                    (
                        <div className="boxx2">
                            {
                                this.state.box.map((item,index)=>{
                                    return  <div key={index} onClick={this.clickHaaand.bind(this,index)} className="a" >{item.dateShow}</div>
                                })
                            }
                               
                          </div>
                    )
                }
               
                
                
                {
                    this.state.data2.length ?
                    (
                        <ul className="lisss">
                        {
                            this.state.data2.map((item,index)=>{
                               return <li style={{marginTop:"10px"}} key={index} className="lissss">
                                    <div>{item.tm}播放</div>
                                    <div>{item.lang},{item.tp}</div>
                                    <div style={{background:'red'}}>{item.vipPrice}元</div>
                                    <div>购票</div>
                                 </li>
                            })
                        }
                          
                    </ul>
                    )
                    :
                   
                    (
                       
                        <ul className="lisss">
                            {
                                this.state.box1.map((item,index)=>{
                                    return <li  key={index} style={{marginTop:"10px"}} className="lissss">
                                                <div>{item.tm}播放</div>
                                                <div>{item.lang},{item.tp}</div>
                                                <div style={{background:'red'}}>{item.vipPrice}元</div>
                                                <div>购票</div>
                                            </li>
                                })
                            }
                                            
                
                    </ul>
                    )
                }
                 
               
            </div>
        )
    }
    clickHaaand(index){
        this.setState({
            box1:this.state.box[index].plist
        })
    }
    componentDidMount(){
        axios.get("/ajax/cinemaDetail?cinemaId=26195&optimus_uuid=C1F6DD400D9911EA80F643124EFC332A97AB692A7F7A41E88A8C38D577ECB7B3&optimus_risk_level=71&optimus_code=10")
        .then(err=>{
            // console.log(err.data.showData.movies)
            let a = err.data.showData.movies
            a = a.map(item=>{
                item.img = item.img.replace(/\/w\.h\//,"/148.208/")
                return item
            })
            console.log(a[0].shows[0])
            this.setState({
                data:a,
                box:a[0].shows,
                box1:a[0].shows[0].plist
            })
        })
    }
}
