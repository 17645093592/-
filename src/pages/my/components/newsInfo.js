import React, { Component, Fragment } from 'react'
import { Icon, Carousel } from "antd"
import "../../../assets/my/newsInfo.css"
import axios from "axios"
class NewsInfo extends Component {
    constructor(props){
        super(props)
        this.state={
            data:{},
            length:0,
            id:""
        }
    }
    componentDidMount(){
        
    this.getInfo()
    }
    handleBack(){
        this.props.history.goBack()
    }
    getInfo(){
        const id = this.props.location.pathname.split("/")[2]
        this.setState({
            id
        })
        axios.get(`/news/detail.api?newsId=${id}&t=2019121210291178551`)
        .then(res=>{
            this.setState({
                data: res.data.data,
                length:res.data.data.images.length
            },_=>{
                // console.log(this.state.data)
            })
        })
    }
    handleJump(){
        this.props.history.push(`/commentInfo/${this.state.id}`,)
    }
    render() {
        return  this.state.length === 0 ?
            (<Fragment>
                <div>
                    <div className="topBar">
                        <Icon style={{ float: "left", width: "1rem", height: "1rem", fontSize: ".5rem", color: "white", lineHeight: "1rem" }} type="left" onClick={this.handleBack.bind(this)} />

                        <Icon type="share-alt" style={{ float: "right", width: "1rem", height: "1rem", fontSize: ".5rem", color: "white", lineHeight: "1rem" }} />
                    </div>
                    <div className="newsBox">
        <h2>{this.state.data.title}</h2>
                        <div className="othersBox">
                            <time>{this.state.data.time}</time>
                            <div className="spanBox">
                                <span className="comment" onClick={this.handleJump.bind(this,this.state.id)}>评论{this.state.data.commentCount}</span>
                                <span className="about">相关电影/影人</span>
                            </div>
                        </div>
                        <div className="contentBox" dangerouslySetInnerHTML={{__html:this.state.data.content}}>
                        </div>
                        <div className="editor">
                       ( 作者：{this.state.data.editor})
                        </div>
                    </div>
                    <div className="bottomBar">
                        <Icon type="message" style={{ float: "left", width: "1rem", height: "1rem", fontSize: ".5rem", color: "black", lineHeight: "1rem" }} />
                        <span className="messageNum" onClick={this.handleJump.bind(this,this.state.id)}>{this.state.data.commentCount}</span>
                        <span className="aboutMovie">相关电影/影人</span>
                    </div>
                </div>


            </Fragment>)
            :
            (<Fragment>
            <div>
                <div className="topBar">
                    <Icon style={{ float: "left", width: "1rem", height: "1rem", fontSize: ".5rem", color: "white", lineHeight: "1rem" }} type="left" onClick={this.handleBack.bind(this)} />

                    <Icon type="share-alt" style={{ float: "right", width: "1rem", height: "1rem", fontSize: ".5rem", color: "white", lineHeight: "1rem" }} />
                </div>
                <div className="banner" style={{position:"relative"}}>
                <Carousel ref="banner" dots="false" style={{height:"4.5rem"}}>
                    {this.state.data.images.map((item,index)=>{
                        return (<div key={index} style={{height:"4.5rem"}}>
                            <img src={item.url1} style={{height:"4.5rem",width:"auto",margin:"0 auto"}} />
                        </div>)
                    })}
                </Carousel>
                <Icon type="left-circle" style={{ position:"absolute", width: "1rem", height: "1rem", fontSize: ".5rem", lineHeight: "1rem",top:"1.9rem",left:"0"  }} onClick={()=>{this.refs.banner.prev()}}  />
                <Icon type="right-circle" style={{ position:"absolute", width: "1rem", height: "1rem", fontSize: ".5rem", lineHeight: "1rem",top:"1.9rem",right:"0"  }} onClick={()=>{this.refs.banner.next()}} />
                </div>
                <div className="newsBox">
                    <h2>{this.state.data.title}</h2>
                    <div className="othersBox">
                        <time>{this.state.data.time}</time>
                        <div className="spanBox">
                            <span className="comment" onClick={this.handleJump.bind(this,this.state.id)}>评论{this.state.data.commentCount}</span>
                            <span className="about">相关电影/影人</span>
                        </div>
                    </div>
                    <div className="contentBox" dangerouslySetInnerHTML={{__html:this.state.data.content}}>
                        </div>
                    <div className="editor">
                        (作者：{this.state.data.editor})
                    </div>
                </div>
                <div className="bottomBar">
                    <Icon type="message" style={{ float: "left", width: "1rem", height: "1rem", fontSize: ".5rem", color: "black", lineHeight: "1rem" }} />
                    <span className="messageNum" onClick={this.handleJump.bind(this,this.state.id)}>{this.state.data.commentCount}</span>
                    <span className="aboutMovie">相关电影/影人</span>
                </div>
            </div>


        </Fragment>)
        
    }
}
export default NewsInfo
