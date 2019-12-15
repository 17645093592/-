import React,{Component}from "react"
import { Form, Icon, Input, Button, Checkbox, } from 'antd';
import "../../assets/css/logincss/login.css"
import{withRouter}from "react-router-dom"
import {Logintrue} from "./store/loginreducer"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"

class Login extends Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
      Logintrue(values)
        this.props.history.go(-1)
      }
    });
  }
render(){
  
  const { getFieldDecorator } = this.props.form;
  const{data,Logintrue} = this.props
  return(
    <div className="rootTwo2">
    <div className="cotent">
    <Form onSubmit={this.handleSubmit} className="login-form">
    <Form.Item>
      {getFieldDecorator('username', {
        rules: [{ required: true, message: 'Please input your username!' }],
      })(
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Username"
        />,
      )}
    </Form.Item>
    <Form.Item>
      {getFieldDecorator('password', {
        rules: [{ required: true, message: 'Please input your Password!' }],
      })(
        <Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Password"
        />,
      )}
    </Form.Item>
    <Form.Item>
      {getFieldDecorator('remember', {
        valuePropName: 'checked',
        initialValue: true,
      })(<Checkbox>记住密码</Checkbox>)}
      <a className="login-form-forgot" href="">
        忘记密码
      </a>
      <Button type="primary" htmlType="submit" block className="login-form-button">
        登录
      </Button>
      或者 <a href="">现在注册!</a>
    </Form.Item>
  </Form>
  </div>
  </div>
  )
}

}

const mapStateToProps = (state)=>{
  return{
    data:state.loginstore.data
  }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
export default connect(mapStateToProps,{Logintrue})(withRouter(WrappedNormalLoginForm))


