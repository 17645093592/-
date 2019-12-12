import React, { Component } from 'react'
import "../../../pulblic/css/home/shine/index.css"
import {withRouter} from "react-router-dom"
import BScrollComponent from "../../../components/bscroll/index"
import axios from "axios"

class Left extends Component {
    state={
        leftbox:[]
    }
    render() {
        return (
            <BScrollComponent ref="bscroll">
            <div className="thefilm">
                <div className="commovie">
                    <div className="commovielist">
                        <ul>
                            {
                                this.state.leftbox.map((item,index)=>{
                                    return  <li onClick={this.getletBox.bind(this,item.id,item.rd)} key={index}>
                                <div className="table movielist">
                                    <div className="upmovie_pic">
                                        <div>
                                            <i className="i_hot"></i>
                                            <img className={item.id} src={item.img}/>
                                        </div>
                                    </div>
                                    <div className="upmovie_txt td">
                                        <dl>
                                            <dt>
                                                <div>
                                                    <b>{item.t}</b>
                                                    <span className="m_scorea">
                                                        <i>{item.r}</i>
                                                    </span>
                                                </div>
                                            </dt>
                                            <dd>
                                                <p className="movie_tip">
                                                    <i className="i_block i_dot"></i>
                                                    <span>{item.commonSpecial}</span>
                                                </p>
                                                <div className="mtool"><i className="i_cine_05"></i><i className="i_cine_15"></i></div>
                                            </dd>
                                            <div className="btns">
                                            <b className="i_block">{item.cC}家影院上映{item.NearestShowtimeCount}场</b>
                                            <div className="m_btn_orange"><span>购票</span></div>
                                        </div>
                                        </dl>
                                        
                                        </div>
                                    </div>
                                 </li>
                                })
                            }
                           
                            
                        </ul>
                    </div>
                </div>
            </div>
            </BScrollComponent>
        )
    }
    getletBox(id,rd){
           let mm = rd.substring(4).substring(0,2),
               dd = rd.substring(6);
        this.props.history.push(`/xiangqing/${id}/${mm}/${dd}`)
    }
    getLeft(){

        axios.get("/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=201912102046147443")
        .then(err=>{
            this.setState({
                leftbox:[...this.state.leftbox,...err.data.ms]
            })
        })
       
    }
    getLeft1(){

        axios.get("/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=201912102046147443")
        .then(err=>{
            let arr=err.data.ms
            let index =[]
            for(let i=0;i<arr.length;i++){
                i=parseInt(Math.random()*err.data.ms.length)
                index.push(err.data.ms[i])
    
            }
            this.setState({
                leftbox:[...index,...err.data.ms]
            })
           
        })
       
    }
    //下拉刷新后  继续请求数据
    componentWillUpdate(){
        this.refs.bscroll.handleRestUp()
        this.refs.bscroll.handlefinishPullDown()

    }
    componentDidMount(){
        this.getLeft()
        //下拉到底部后 从新请求数据
        this.refs.bscroll.handlepullingUp(()=>{
            this.getLeft()

        })

        this.refs.bscroll.handlepullingDown(()=>{
            this.getLeft1()
        })

      
    }
}
export default  withRouter(Left) 
