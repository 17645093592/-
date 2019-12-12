import React, { Component, Fragment } from 'react'
import "../../assets/my/review.css"
import axios from "axios"
class Review extends Component {
    getList(){
        axios.get("/Service/callback.mi/MobileMovie/Review.api?needTop=false&t=201912121929662996")
        .then(res=>{
            console.log(res.data)
            this.setState({
                list:res.data
            })
        })
    }
    componentDidMount(){
        this.getList()
    }
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    render() {
        return (
            <Fragment>
                <div className="picBox">
                    <img src="https://img1.doubanio.com/view/thing_review/l/public/3564898.webp" />
                    <span>
                        曾经的少年，如今的你！                    </span>
                </div>
                <div className="reviewList">
                    <ul>
                        {this.state.list.map((item,index)=>{
                            return(
                                <li key={index}>
                                    <h2>{item.title}</h2>
                                    <div className="table">
                                        <img src={item.userImage} />
                                        <p style={{fontSize:".3rem",height:".6rem",lineHeight:".6rem",marginLeft:".3rem"}}>

                                            {item.nickname}-评分 <span style={{fontWeight:"bold",color:"black"}}>{item.relatedObj.title}</span> 
                                            {item.rating ? <span style={{background:"green",padding:".05rem .05rem",color:"white"}}>{item.rating}</span> : "" }
                                            
                                        </p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>

                </div>


            </Fragment>
        )
    }
}

export default Review