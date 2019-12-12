import React, { Component, Fragment } from 'react'
import "../../assets/my/trailer.css"
import axios from "axios"
class Trailer extends Component {
    getlist(){
        axios.get("/discovery/trailerList.api?t=201912121439516030&param=1")
        .then(res=>{
            this.setState({
                data:res.data.data.trailers
            },_=>{
                console.log(this.state.data)
            })
        })

    }
    componentDidMount(){
        this.getlist()
    }
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    render() {
        return (
            <Fragment>
                <div className="picBox">
                    <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F12%2F11%2F142337.23547652.jpg&width=640&height=360&clipType=3" />
                    <span>
                    哪吒与变形金刚 先导预告片
                    </span>
                </div>
                <div className="trailerList">
                    <ul>
                    {/* <li className="type2">
                                <div className="picBox">
                                    <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F12%2F09%2F065443.68736584.jpg&width=250&height=150&clipType=4" />
                                </div>
                                <div className="textBox">
                                    <span className="title">女神归来!"神奇女侠2"中字预告</span>
                                </div>
                            </li> */}
                            {
                                this.state.data.map((item,index)=>{
                                    return(<li className="type2" key={index}>
                                    <div className="picBox">
                                        <img src={item.coverImg} />
                                    </div>
                                    <div className="textBox">
                                        <span className="title">{item.movieName}</span>
                                    </div>
                                </li>)
                                })
                            }
                    </ul>
                </div>
            </Fragment>
        )
    }
}

export default Trailer