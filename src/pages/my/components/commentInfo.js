import React, { Component, Fragment } from 'react'
import { Icon } from "antd"
import BS from "better-scroll"
import Axios from 'axios'
// import {getComList} from "../store/reducer"
// import {connect} from "react-redux"
class CommentInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            pageIndex: 1,
            count: 0,
            id: 0
        }
    }
    getList() {
        // console.log(this.props.location.pathname.slice(13))
        // if(this.state.id = 0){
        //     this.setState({
        //         id:this.props.location.pathname.slice(13)
        //     },_=>{
        //         console.log(this.state)
        //     })
        // }

        const id = this.props.location.pathname.slice(13)
        Axios.get(`Service/callback.mi/News/Comment.api?t=201912131122723797&newsId=${id}&pageIndex=${this.state.pageIndex}&reviewId=${id}`)
            .then(res => {
                // console.log(res.data)

                if (res.data.length != 0) {
                    this.setState({
                        list: [...this.state.list, ...res.data],
                        pageIndex: this.state.pageIndex + 1,
                        count: res.data[0].totalCount
                    }, _ => {
                        if (!this.scroll) {
                            this.scroll = new BS(this.wrapper, {
                                scrollY: true,
                            })
                        } else {
                            this.scroll.refresh()
                        }
                        this.scroll.on("touchEnd", obj => {
                            // console.log(this.scroll.maxScrollY, obj)
                            if (obj.y > 100) {
                                this.props.history.go(0)
                            }
                            if (obj.y < this.scroll.maxScrollY) {
                                this.getList()
                            }
                        })
                    })
                }
            })
    }

    componentDidMount() {
        this.getList()
    }
    handleBack() {
        this.props.history.goBack()
    }
    render() {
        return this.state.count ? (<Fragment><div className="topBar">
            <Icon style={{ float: "left", width: "1rem", height: "1rem", fontSize: ".5rem", color: "white", lineHeight: "1rem" }} type="left" onClick={this.handleBack.bind(this)} />
            {this.state.count}条评论
                        <Icon type="share-alt" style={{ float: "right", width: "1rem", height: "1rem", fontSize: ".5rem", color: "white", lineHeight: "1rem" }} />
        </div>
            <div className="commentList" style={{ padding: "0 0 0 .3rem", height: "11.3rem", zIndex: "100", overflow: "hidden" }} ref={(div) => this.wrapper = div}>
                <ul style={{ paddingBottom: "1rem" }}>
                    {this.state.list.map((item, index) => {
                        return (
                            <li key={index} style={{ borderBottom: ".02rem solid #777777", paddingTop: ".3rem" }}>
                                <div className="commentTable">
                                    <img src={item.userImage} style={{ width: "1rem", height: "1rem", borderRadius: "50%", float: "left" }} />
                                    <div >
                                        <div style={{ float: "left", marginLeft: ".3rem", width: "5.5rem" }}>
                                            <span className="name" style={{ fontSize: ".28rem", color: "#999" }}>{item.nickname}</span>
                                            <time style={{ float: "right" }}>{item.date}</time>
                                            <p style={{ padding: ".2rem 0", fontSize: ".3rem", color: "black" }}>{item.content}</p>
                                            <div style={{ float: "right", fontSize: ".3rem", lineHeight: ".5rem", height: ".5rem", paddingBottom: ".8rem" }}><Icon type="message" style={{ fontSize: ".5rem", height: ".5rem", lineHeight: ".5rem" }} />{item.replyCount ? item.replyCount : "回复"}</div>

                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>

            </div>
            <div className="replyBox" style={{ background: "#f6f6f6", position: "fixed", bottom: "0", height: "1rem", width: "100%", borderTop: ".01rem solid black" }}>
                <input style={{ height: ".8rem", marginTop: ".09rem", border: ".01rem solid black", marginLeft: ".3rem", borderRadius: ".1rem", width: "5.5rem", fontSize: ".3rem", paddingLeft: ".2rem" }} placeholder="留下我想说的..." />
                <span style={{ fontSize: ".35rem", marginLeft: ".5rem" }}>发送</span>
            </div>            </Fragment>) : (<Fragment><div className="topBar">
            <Icon style={{ float: "left", width: "1rem", height: "1rem", fontSize: ".5rem", color: "white", lineHeight: "1rem" }} type="left" onClick={this.handleBack.bind(this)} />
            {this.state.count}条评论
                        <Icon type="share-alt" style={{ float: "right", width: "1rem", height: "1rem", fontSize: ".5rem", color: "white", lineHeight: "1rem" }} />
        </div>
           

            <div className="replyBox" style={{ background: "#f6f6f6", position: "fixed", bottom: "0", height: "1rem", width: "100%", borderTop: ".01rem solid black" }}>
                <input style={{ height: ".8rem", marginTop: ".09rem", border: ".01rem solid black", marginLeft: ".3rem", borderRadius: ".1rem", width: "5.5rem", fontSize: ".3rem", paddingLeft: ".2rem" }} placeholder="留下我想说的..." />
                <span style={{ fontSize: ".35rem", marginLeft: ".5rem" }}>发送</span>
            </div>            </Fragment>)



    }
}


export default CommentInfo