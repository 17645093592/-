import React, { Component } from 'react'
import {Icon,Input,Menu, Dropdown} from 'antd';
import axios from "axios";
import {withRouter} from "react-router-dom"
import { thisExpression } from '@babel/types';
const { Search } = Input;

const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.taobao.com/">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );
 class Content extends Component {
     constructor(props){
         super(props)
         this.state={
           List:[],
         }
     }
    render() {

const {List} = this.state
        return (
            <>
            <section className="no1">
                <div className="_2c8t9">
                    
                        <div className="_1rior">
                            <div className="_2tj9_">
                                <b></b>
                                <Icon type="down"/>
                            </div>
                            <Search
                            placeholder="筛选影院"
                            onSearch={value => console.log(value)}
                            style={{ width: 200 }}
                            />
                            <a className="_uWRXs">
                                <span>
                                搜索
                                </span>
                            </a>
                        </div>
               
                </div>
   {/*              <div className = "no2">
                    <Dropdown overlay={menu} trigger={['click']}>
                    <a className="ant-dropdown-link" href="#">
                    Click me <Icon type="down" />
                    </a>
                    </Dropdown>
                </div> */}
                <ul className="CListBox">
                    {List ?
                        (List.map((item,index)=>{
                            return  <li className="CList" key ={index} onClick={this.handlerjump.bind(this,item.id)}>
                        <div className="ClistName"><h4 className="ClistName4">{item.nm}</h4><div>{item.sellPrice}元</div></div>
                            <h2 className="ClistName2">{item.addr}</h2>
                            <h3><i className="ClistName3">{item.distance}</i></h3>
                            <hr />
                        </li>
                        })):null
                    }
          
                </ul>
            </section>
            </>
        )
    }
    handlerjump(a){
        this.props.history.push({pathname: "/shoplist" ,state:{a}})
    }
 componentDidMount(){
   
        // axios.get("/cinema/showtime.api?t=2019121115364889166&cinemaId=6413").then((res)=>{
          
        // })
        axios.get("/ajax/cinemaList?day=2019-12-14&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1576287679822&cityId=1&optimus_uuid=277305901CD611EAB034DD5CA2D3808F724322E080E04F9CA6D06FAC9BE13B0F&optimus_risk_level=71&optimus_code=10y").then((res)=>{
            const resa = res.data.cinemas;
            this.setState({
                List:resa
            })
           
         })
        
    }
}

export default withRouter(Content) 