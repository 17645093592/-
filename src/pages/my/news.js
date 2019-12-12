import React, { Component, Fragment } from 'react'
import "../../assets/my/news.css"
import axios from "axios"
import moment from "moment"

class News extends Component {
    componentDidMount() {
        this.getList()
    // console.log(this.props)
    }
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            page: 1
        }
    }
    timeProcess(t){
        // console.log(t)
        // console.log(new Date().getTime())
        const cha = new Date().getTime() - t *1000 ;
        let  minutes = parseInt(cha % (24 * 60 * 60 * 1000) %(60 * 60 * 1000) / (60 * 1000) )
        let hours = parseInt(cha % (24 * 60 * 60 * 1000) / (60 * 60 * 1000))
        let days = parseInt(cha / (24 * 60 * 60 * 1000))
        if(days > 0){
            return days + "天前"
        }else if(days <= 0 && hours > 0){
            return hours + "小时前"
        }else{
            return minutes + "分钟前"
        }
    }
    moreData(){
        this.getList()
    }
    getList() {
        axios.get(`Service/callback.mi/News/NewsList.api?t=201912101803075792&pageIndex=${this.state.page}`)
            .then(res => {
                res.data.newsList=res.data.newsList.map(item=>{
                    item.publishTime = this.timeProcess(item.publishTime)
                    return item
                })
                this.setState({
                    data: [...this.state.data,...res.data.newsList],
                    page: this.state.page + 1
                }, _ => {
                    console.log(this.state.data)
                })
            })

    }
    handleJump(id){
        this.props.history.push(`/newsInfo/${id}`)
    }
    render() {

        return (
            <Fragment>
                <div className="picBox">
                    <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F07%2F18%2F102211.29411290.jpg&width=640&height=360&clipType=3" />
                    <span>
                        《复仇者联盟4》重要彩蛋全解析
                    </span>
                </div>
                <div className="newsList">
                    <ul>
                        {this.state.data.map((item,index) => {
                            return item.images.length === 3 ? (<li className="type1" key={index} onClick={this.handleJump.bind(this,item.id)}>
                                <span className="title">{item.title}</span>
                                <div className="picsBox">
                                    <img src={item.images[0].url2} />
                                    <img src={item.images[1].url2} />
                                    <img src={item.images[2].url2} />
                                </div>
                        <span className="time">{item.publishTime}</span>
                                <span className="comment">评论 {item.commentCount}</span>
                            </li>) : (<li className="type2"  key={index} onClick={this.handleJump.bind(this,item.id)}>
                                <div className="picBox">
                                    <img src={item.image} />
                                </div>
                                <div className="textBox">
                                    <span className="title">{item.title}</span>
                                <span className="time">{item.publishTime}</span>
                                    <span className="comment">评论 {item.commentCount}</span>
                                </div>
                            </li>)
                        })}
                    </ul>
                </div>
                <div className="btnMore" onClick={this.moreData.bind(this)} >
                    查看更多
                </div>

            </Fragment>
        )
    }
}

export default News