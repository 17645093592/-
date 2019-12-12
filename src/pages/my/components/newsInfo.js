import React, { Component, Fragment } from 'react'
import { Icon, Carousel } from "antd"
import "../../../assets/my/newsInfo.css"
import axios from "axios"
class NewsInfo extends Component {
    constructor(props){
        super(props)
        this.state={
            data:{},
            length:0
        }
    }
    componentDidMount(){
        
    this.getInfo()
    }
    getInfo(){
        const id = this.props.location.pathname.split("/")[2]
        axios.get(`/news/detail.api?newsId=${id}&t=2019121210291178551`)
        .then(res=>{
            this.setState({
                data: res.data.data,
                length:res.data.data.images.length
            },_=>{
                console.log(this.state.data)
            })
        })
    }
    render() {
        return  this.state.length == 0 ?
            (<Fragment>
                <div>
                    <div className="topBar">
                        <Icon style={{ float: "left", width: "1rem", height: "1rem", fontSize: ".5rem", color: "white", lineHeight: "1rem" }} type="left" />

                        <Icon type="share-alt" style={{ float: "right", width: "1rem", height: "1rem", fontSize: ".5rem", color: "white", lineHeight: "1rem" }} />
                    </div>
                    <div className="newsBox">
        <h2>{this.state.data.title}</h2>
                        <div className="othersBox">
                            <time>{this.state.data.time}</time>
                            <div className="spanBox">
                                <span className="comment">评论{this.state.data.commentCount}</span>
                                <span className="about">相关电影/影人</span>
                            </div>
                        </div>
                        <div className="contentBox" dangerouslySetInnerHTML={{__html:this.state.data.content}}>
                        </div>
                        {/* <div className="contentBox" ref={div => this.content = div}> */}
                            {/* {this.refs.content.innerHTML = this.state.data.content} */}
                            {/* <video src="http://vf1.mtime.cn/Video/2019/12/11/mp4/191211114032552373.mp4" width="320" height="240" poster="http://img5.mtime.cn/mg/2019/12/11/123333.52843632.jpg" controls="controls" data-video-type="1" data-video-id="77189"></video><br /><br /><div><img src="http://img5.mtime.cn/CMS/News/2019/12/11/123621.85154434_620X620.jpg" /><br /><br /></div>　　<b>时光网讯</b> 还记得玛歌特·罗比提名奥斯卡影后的《我，花样女王》么，明年1月1日同样讲述花样滑冰题材的剧集《冰上旅程》将在Netflix上线，《移动迷宫》《巨鳄风暴》女星卡雅·斯考达里奥担任主演，故事似乎更多聚焦在双人滑而不是女子单人滑。<div><br /></div><div>　　今日曝光的《冰上旅程》中字预告里似乎还提到了《我，花样女王》里的袭击案，某亚裔女角色对女主说：“我可以球棒打断她的腿，还是会太老套（90年代了）”。这句显然指的是，《我，花样女王》中南茜·克里根被托尼亚·哈丁（玛歌特·罗比）的丈夫（塞巴斯蒂安·斯坦）打伤的情节，袭击发生在1994年。</div><div><br /><div><div><img src="http://img5.mtime.cn/CMS/News/2019/12/11/123939.51319489_620X620.jpg" /></div><div>卡雅·斯考达里奥在《巨鳄风暴》中扮演游泳选手</div></div><div><br /></div><div>　　《冰上旅程》讲述的故事是：花样滑冰选手凯特·贝克（卡雅·斯考达里奥）在发生了严重的摔倒失误后，职业生涯遭到波及。一个可以让她实现奥运梦想的机会来到，代价却是牺牲她所拥有的一切。凯特该如何面对心中的魔鬼，以及工作与生活中所发生的种种严苛考验？</div></div><div><br /></div><div><img src="http://img5.mtime.cn/CMS/News/2019/12/11/123129.26919377_620X620.jpg" /><br /><br /></div> */}
                        {/* </div> */}
                        <div className="editor">
                       ( 作者：{this.state.data.editor})
                        </div>
                    </div>
                    <div className="bottomBar">
                        <Icon type="message" style={{ float: "left", width: "1rem", height: "1rem", fontSize: ".5rem", color: "black", lineHeight: "1rem" }} />
                        <span className="messageNum">{this.state.data.commentCount}</span>
                        <span className="aboutMovie">相关电影/影人</span>
                    </div>
                </div>


            </Fragment>)
            :
            (<Fragment>
            <div>
                <div className="topBar">
                    <Icon style={{ float: "left", width: "1rem", height: "1rem", fontSize: ".5rem", color: "white", lineHeight: "1rem" }} type="left" />

                    <Icon type="share-alt" style={{ float: "right", width: "1rem", height: "1rem", fontSize: ".5rem", color: "white", lineHeight: "1rem" }} />
                </div>
                <div className="banner" style={{position:"relative"}}>
                <Carousel ref="banner" dots="false" style={{height:"4.5rem"}}>
                    {this.state.data.images.map((item,index)=>{
                        return (<div key={index} style={{height:"4.5rem"}}>
                            <img src={item.url1} style={{height:"4.5rem",width:"auto",margin:"0 auto"}} />
                        </div>)
                    })}
                    {/* <div>
                        <img src="http://img5.mtime.cn/CMS/Gallery/2019/12/11/121032.76436938_900.jpg" />
                    </div>
                    <div>
                           <img src="http://img5.mtime.cn/CMS/Gallery/2019/12/11/121032.76436938_900.jpg" />
                    </div>
                    <div>
                           <img src="http://img5.mtime.cn/CMS/Gallery/2019/12/11/121032.76436938_900.jpg" />
                    </div>
                    <div>
                           <img src="http://img5.mtime.cn/CMS/Gallery/2019/12/11/121032.76436938_900.jpg" />
                    </div> */}
                </Carousel>
                <Icon type="left-circle" style={{ position:"absolute", width: "1rem", height: "1rem", fontSize: ".5rem", lineHeight: "1rem",top:"1.9rem",left:"0"  }} onClick={()=>{this.refs.banner.prev()}}  />
                <Icon type="right-circle" style={{ position:"absolute", width: "1rem", height: "1rem", fontSize: ".5rem", lineHeight: "1rem",top:"1.9rem",right:"0"  }} onClick={()=>{this.refs.banner.next()}} />
                </div>
                <div className="newsBox">
                    <h2>{this.state.data.title}</h2>
                    <div className="othersBox">
                        <time>{this.state.data.time}</time>
                        <div className="spanBox">
                            <span className="comment">评论{this.state.data.commentCount}</span>
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
                    <span className="messageNum">{this.state.data.commentCount}</span>
                    <span className="aboutMovie">相关电影/影人</span>
                </div>
            </div>


        </Fragment>)
        
    }
}
export default NewsInfo
