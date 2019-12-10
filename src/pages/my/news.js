import React, { Component, Fragment } from 'react'
import "../../assets/my/news.css"
import axios from "axios"

class News extends Component {
    componentDidMount() {
        this.getList()
    }
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    getList() {
        axios.get("Service/callback.mi/News/NewsList.api?t=201912101803075792&pageIndex=1")
            .then(res => {
                console.log(res.data.newsList)
                this.setState({
                    data: [...res.data.newsList]
                }, _ => {
                    console.log(this.state.data)
                })
            })

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
                        {/* <li className="type1">
                            <span className="title">迷失东京！"唐探2"女星刘承羽曝写真</span>
                            <div className="picsBox">
                                <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2FCMS%2FGallery%2F2019%2F12%2F10%2F171556.16326969.jpg&width=190&height=130&clipType=4" />
                                <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2FCMS%2FGallery%2F2019%2F12%2F10%2F171556.16326969.jpg&width=190&height=130&clipType=4" />
                                <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2FCMS%2FGallery%2F2019%2F12%2F10%2F171556.16326969.jpg&width=190&height=130&clipType=4" />
                            </div>
                            <span className="time">9小时前</span>
                            <span className="comment">评论 1</span>
                        </li>
                        <li className="type2">
                            <div className="picBox">
                                <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2FCMS%2FGallery%2F2019%2F12%2F10%2F171556.16326969.jpg&width=190&height=130&clipType=4" />
                            </div>
                            <div className="textBox">
                                <span className="title">迷失东京！"唐探2"女星刘承羽曝写真</span>
                                <span className="time">9小时前</span>
                                <span className="comment">评论 1</span>
                            </div>
                        </li> */}
                        {this.state.data.map((item,index) => {
                            return item.images.length === 3 ? (<li className="type1" key={index}>
                                <span className="title">{item.title}</span>
                                <div className="picsBox">
                                    <img src={item.images[0].url2} />
                                    <img src={item.images[1].url2} />
                                    <img src={item.images[2].url2} />
                                </div>
                                <span className="time">9小时前</span>
                                <span className="comment">评论 {item.commentCount}</span>
                            </li>) : (<li className="type2"  key={index}>
                                <div className="picBox">
                                    <img src={item.image} />
                                </div>
                                <div className="textBox">
                                    <span className="title">{item.title}</span>
                                    <span className="time">9小时前</span>
                                    <span className="comment">评论 {item.commentCount}</span>
                                </div>
                            </li>)
                        })}
                    </ul>
                </div>

            </Fragment>
        )
    }
}

export default News