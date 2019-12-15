// import React, { Component } from 'react'
// import "../../../assets/css/purchasecss/content.css"
// import "../../../assets/css/shoplistcss/shoplistcotent.css"
// import Bscroll from "better-scroll"
// // import { connect } from 'react-redux'
// import {Icon, Tabs,Button, List } from 'antd';
// import {withRouter} from "react-router-dom"
// import axios from "axios";
// import {connect}from "react-redux"
// const aa = "../../../assets/img/tx.jpg"
// const { TabPane } = Tabs;

// function callback(key) {

// }
// class content extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             List:[],
//             title:"",
//             List2:[],
//             List3:[],
//             list4:[],
//             list5:[],
//             yid:0
//         }
//         this.getInfor = this.getInfor.bind(this)
//         // this.getInfor2 = this.getInfor2.bind(this)

//     }
//     render() {
//         const{List2,List,List3,List4,List5}=this.state
//        console.log(List2)
//        console.log(List3)
//        console.log(List4)
//        console.log(List5)
//        console.log(List2[0])
//         return ( 
//             List2.length?
//             (
//             <section>
//                 <div className="filmtitle">
//                     <div className="filmtitleLeft">
//                     <h3 className="filmtitleLefth3">{List3.nm}</h3>
//                     <h2 className="filmtitleLefth2">
//                         {/* <Icon  className="xiaomiao" type="bug" theme="twoTone" twoToneColor="yellowgreen"/>
//                         <Icon  className="xiaomiao" type="car" theme="twoTone" twoToneColor="yellowgreen"/>
//                         <Icon  className="xiaomiao" type="fire" theme="twoTone" twoToneColor="yellowgreen"/>
//                         <Icon  className="xiaomiao" type="code" theme="twoTone" twoToneColor="yellowgreen"/>
//                         <Icon  className="xiaomiao" type="crown" theme="twoTone" twoToneColor="yellowgreen"/> */}
//                         {List3.addr}
//                         </h2>
//                     </div>
//                     <div className="filmtitleRigth">
//                     <Icon className="phone" type="phone" theme="twoTone" twoToneColor="blue"/>
//                     <Icon className="environment" type="environment" theme="twoTone" twoToneColor="blue"/>
//                        </div>
//                 </div>
//                <div className="scrollpic" ref={(div)=>{this.gund = div}}>
//                    <ul className="nbgd" ref = {(div)=>{this.gunde = div}}>
//                      {
//                      List2.length&&this.state.List2[0].map((item,index)=>{
//                         return <li className="cc" key={index} onClick = {this.handlerChange.bind(this,index)}>
//                         <img src ={item.img} className="kkk"/>
//                         <p className="aaaaa">{item.commentSpecial}</p>
                     
//                       </li>
//                      })
//                      }
//                    </ul>
//                </div>
// {
//     List4 ? 
//     <div style={{heigth:"2rem"}}><h3 style={{textAlign:"center" ,color:"#000"}}>{List4.nm}</h3>
//      <h2 style={{textAlign:"center" ,color:"#000"}}>{List4.desc}</h2>
//      </div> :<div><h3 style={{textAlign:"center" ,color:"#000",lineHeight:"1rem"}}>误杀</h3>
//      <h2 style={{textAlign:"center" ,color:"#000",lineHeight:"1rem"}}>大地院线影城</h2>
//      </div>
// }
 
   
//                <Tabs defaultActiveKey="1" onChange={callback}>
//     <TabPane tab="最火电影" key="1">
// {
//    List5.length?List5.map((item,index)=>{
//   return (<div className="yyyy" key ={index}>
//   <div className="bbb">
// <p className="mstime">{item.dt}</p>
//    <h2 className="mstime2">{item.lang}</h2>
//    </div>
//   <div className="ccc">
//    <h4 className="ddd">{item.th}元</h4>
//   <h3 className="xxx"></h3>
//   </div>
//   <div>  <h5></h5></div>
//   </div>)
// }) :
// (
// <div className="yyyy">
// <div className="bbb">
// <p className="mstime">18:20</p>
// <h2 className="mstime2">19:56</h2>
// </div>
// <div className="ccc">
// <h4 className="ddd">国语</h4>
// <h3 className="xxx">2号激光厅</h3>
// </div>
// <div>
// <h5 >折扣卡首单特惠</h5>
// </div>
// </div>
// )      
//     }
    
//     <div className="yyyy">
// <div className="bbb">
// <p className="mstime">18:20</p>
// <h2 className="mstime2">19:56</h2>
// </div>
// <div className="ccc">
// <h4 className="ddd">国语</h4>
// <h3 className="xxx">2号激光厅</h3>
// </div>
// <div>
// <h5>折扣卡首单特惠</h5>
// </div>
// </div>
// <div className="yyyy">
// <div className="bbb">
// <p className="mstime">18:20</p>
// <h2 className="mstime2">19:56</h2>
// </div>
// <div className="ccc">
// <h4 className="ddd">国语</h4>
// <h3 className="xxx">2号激光厅</h3>
// </div>
// <div>
// <h5>折扣卡首单特惠</h5>
// </div>
// </div>
//    {/* 
//    (<div className="yyyy">
// <div className="bbb">
// <p className="mstime">this.state.List2[0][a].shows[0].plist[0].lang</p>
// <h2 className="mstime2">this.state.List2[0][a].shows[0].plist[0].extraDesc</h2>
// <div className="ccc">
// <h4 className="ddd">元</h4>
// <h3 className="xxx"></h3>
// </div>
// <h5 className="Pst"></h5>
// </div>
// </div>)     */}

// {/* 
// (this.state.List2[0][0].shows.length = 1 ?
//         (<div className="yyyy">
// <div className="bbb">
// <p className="mstime">this.state.List2[0][a].shows[0].plist[0].lang</p>
// <h2 className="mstime2">this.state.List2[0][a].shows[0].plist[0].extraDesc</h2>
// <div className="ccc">
// <h4 className="ddd">元</h4>
// <h3 className="xxx"></h3>
// </div>
// <h5 className="Pst"></h5>
// </div>
// </div>) :(<div className="yyyy">
// <div className="bbb">
// <p className="mstime">this.state.List2[0][a].shows[0].plist[0].lang</p>
// <h2 className="mstime2">this.state.List2[0][a].shows[0].plist[0].extraDesc</h2>
// <div className="ccc">
// <h4 className="ddd">元</h4>
// <h3 className="xxx"></h3>
// </div>
// <h5 className="Pst"></h5>
// </div>
// </div>)   ) */}
//     </TabPane>
//     <TabPane tab="距离最近" key="2" /* onChange={this.kmshao} */>
//     {
//    List5.length?List5.map((item,index)=>{
//   return (<div className="yyyy" key ={index}>
//   <div className="bbb">
// <p className="mstime">{item.dt}</p>
//    <h2 className="mstime2">{item.lang}</h2>
//    </div>
//   <div className="ccc">
//    <h4 className="ddd">{item.th}元</h4>
//   <h3 className="xxx"></h3>
//   </div>
//   <div>  <h5></h5></div>
//   </div>)
// }) :
// (
// <div className="yyyy">
// <div className="bbb">
// <p className="mstime">18:20</p>
// <h2 className="mstime2">19:56</h2>
// </div>
// <div className="ccc">
// <h4 className="ddd">国语</h4>
// <h3 className="xxx">2号激光厅</h3>
// </div>
// <div>
// <h5 >折扣卡首单特惠</h5>
// </div>
// </div>
// )      
//     }
    
//     <div className="yyyy">
// <div className="bbb">
// <p className="mstime">18:20</p>
// <h2 className="mstime2">19:56</h2>
// </div>
// <div className="ccc">
// <h4 className="ddd">国语</h4>
// <h3 className="xxx">2号激光厅</h3>
// </div>
// <div>
// <h5>折扣卡首单特惠</h5>
// </div>
// </div>
// <div className="yyyy">
// <div className="bbb">
// <p className="mstime">18:20</p>
// <h2 className="mstime2">19:56</h2>
// </div>
// <div className="ccc">
// <h4 className="ddd">国语</h4>
// <h3 className="xxx">2号激光厅</h3>
// </div>
// <div>
// <h5>折扣卡首单特惠</h5>
// </div>
// </div>
//    {/*  {
//        List.map((item,index)=>{
//         return <div className="yyyy" key ={index}>
//         <div className="bbb">
//             <p className="mstime">{item.nm}</p>
//             <h2 className="mstime2">{item.addr}</h2>
//         <div className="ccc">
//             <h4 className="ddd">{item.sellPrice}元</h4>
//             <h3 className="xxx"></h3>
//         </div>
//         <h5 className="Pst">{item.distance}</h5>
//         </div>
//     </div>
//        })
//    }  */}
//     </TabPane>
//     <TabPane tab="" key="3" /* onChange={this.kmshao} */>
//             </TabPane>
//   </Tabs>
//             </section>

           
 
// ):null
//         )
//     }
//     handlerChange(a,b){
//     this.setState({
//         List4:this.state.List2[0][a],
//         List5:this.state.List2[0][a].shows[0].plist,
//     })
          
//     }
//  getInfor(){
//      /* ${localStorage.getItem("id")} */
//     // ? this.props.location.state.a :26195
//     console.log(this.props)
//      if(this.props.location.state){
//          var id = this.props.location.state.a
//      }else{
//          var id = "26195"
//      }

//      localStorage.setItem("id",id)
//      const ida = localStorage.getItem("id")

//     axios.get(`/ajax/cinemaDetail?cinemaId=${ida}&optimus_uuid=277305901CD611EAB034DD5CA2D3808F724322E080E04F9CA6D06FAC9BE13B0F&optimus_risk_level=71&optimus_code=10`,{
//         movieId:1251281
//     }).then((res)=>{
//        console.log(res)
//         let a=[]
//         a.push(res.data.showData.movies)
        //List3
        // let list3=[]
        // const boxa = a.map(item=>{
        //     item.forEach(a => {
        //        return list3.push(a.shows)
        //     });
        //     return list3
        // })
       
        // console.log(aa)
        // this.setState({
        //     List:list3
        // })
        //List2
        // a.map(item=>{
        //     item.forEach(element => {
        //       return  element.img = element.img.replace(/\/w\.h\//,"/148.208/")
                
        //     });
        //     return item
        // })
        // this.setState({
        //     List2: a,
        //     List3:res.data.cinemaData,
        //     List5:a[0][0].shows[0].plist[0]
        // },()=>{
          /*   console.log(this.state.List5) */
        // })
  
        /* 
        ,()=>{
           if(!List2){
            new BScroll('.wrapper',{
                scrollY: true,
                click: true
            })
           }else{
               r
           }
        } */
     
//    })
//  }
//  getInfor2(){
//     const id = this.props.location.state.a
//      axios.post("/ajax/movie",{
//         forceUpdate:1576217958628,
//         movieId:id
//      }).then((res)=>{
//          console.log(res)
//         this.setState({
//             List: res.data.cinemas
//            })
//         this.setState(()=>{
//             return{
//          List3:JSON.parse(JSON.stringify(this.state.List))
//             } 
//           },()=>{
//              this.state.List3.map((item,index)=>{
//                console.log(item.distance.split("k")[0],index)
//                 //   this.setState(()=>{
//                 //       return{
//                 //           List4:[...this.state.List4,item.distance.split("k")[0]]
//                 //       }
//                 //   },()=>{
//                 //       console.log(this.state.List4)
//                 //   })
//              })
//           })
//      })
//  }
    // componentDidMount(){

    //         this.getInfor()
            // this.getInfor2()

//     }

// }


// const mapStateToProps = (state) => ({
    
// })

// const mapDispatchToProps = {
    
// }

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(content))
/* 


       <div className="zuo">
                       <img src={List2[0].img}/>
                   </div>
                      <div className="you">
                      <p className="btl">
                      {List2[0].nm}    
                       </p>
                    <div className="title-en-name">{List2[0].enm}</div>
                    <div className="score">暂无评分</div>
                     <h2 className="toubu1">{List2[0].cat}</h2>
                    <div className="srcline">{List2[0].rt}{List2[0].src}</div>
                       <h2 className="toubu1">{List2[0].cat}</h2>
                  <h3 className="sysj">
                  {List2[0].pubDesc}
                   </h3>
                      </div> 
*/
import React, { Component,Fragment} from 'react'
import axios from "axios"
import { withRouter } from 'react-router-dom'
import "../component/index.css"
 class xiangq extends Component {
    state={
        data:[],
        data1:[],
        data2:[],
        box:[],
        box1:[],
        nm:"",
        idx:0
    }
    //点击图片
    clickHanddd(nm,xb){
        this.setState({
            nm:nm
        })
        this.setState({
            idx:xb,
            //相对应的下表
            data1:this.state.data[xb].shows
        })
        console.log(this.state.idx)
    }   
    //点击 时间
    clickHHandd(idex){
        console.log(this.state.idx)

        this.setState({
            data2:this.state.data1[idex].plist
        })
    }
    render() {
        console.log(this.state.data)
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
        console.log(this.props.location.state)
        // 26195
        let id = this.props.location.state.a
        axios.get(`/ajax/cinemaDetail?cinemaId=${id}&optimus_uuid=C1F6DD400D9911EA80F643124EFC332A97AB692A7F7A41E88A8C38D577ECB7B3&optimus_risk_level=71&optimus_code=10`)
        .then(err=>{
            // console.log(err.data.showData.movies)
            console.log(err)
            let a = err.data.showData.movies
            
            a = a.map(item=>{
                item.img = item.img.replace(/\/w\.h\//,"/148.208/")
                return item
            })
            this.setState({
                data:a,
                box:a[0].shows,
                box1:a[0].shows[0].plist,
                nm:err.data.showData.movies[0].nm
            })
        })
    }
}
export default withRouter(xiangq)