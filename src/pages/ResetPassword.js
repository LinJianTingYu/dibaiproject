// import React, { Component } from 'react';

// class ResetPassword extends Component {
//   render () {
//     return (
//       <div>
//         ResetPassword
//       </div>
//     );
//   }
// }

// export default ResetPassword;

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import '../assets/style/Forget.less'
import { Form, Button } from 'antd'
// const FormItem = Form.Item

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      phone: null,
      password: null,
      isBolPhone: false,
      isBolPassword: false
    }
  }
  setPhone = (event) => {
    this.setState({
      phone: event.target.value
    })
  }
  setPass = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  checkPhone = () => {
    const { phone } = this.state
    let isBolPhone
    if (phone && phone.length === 11 && !isNaN(phone)) {
      this.refs.phoneinfo.style.display = 'none'
      isBolPhone = true
    } else {
      this.refs.phoneinfo.style.display = 'flex'
      isBolPhone = false
    }
    this.setState({
      isBolPhone
    })
  }
  checkPassword = () => {
    const { password } = this.state
    let isBolPassword
    if (password) {
      this.refs.passwordinfo.style.display = 'none'
      isBolPassword = true
    } else {
      this.refs.passwordinfo.style.display = 'flex'
      isBolPassword = false
    }
    this.setState({
      isBolPassword
    })
  }
  handleLogin = () => {
    const { phone, password, isBolPhone, isBolPassword } = this.state
    if (isBolPhone && isBolPassword) {
      console.log(1)
    } else {
      console.log(2)
    }
  }
  handleGoLogin = () => {
    this.props.history.push({
      pathname: 'login'
    })
  }
  render () {
    return (
      <div className='forget'>
        <div className="forget_box">
          <div className="forget_header">忘记密码</div>
          <Form>
            <div className='form_item'>
              <img src={require('../assets/images/login/account_blue.png')}></img>
              <input onInput={this.setPhone} onBlur={this.checkPhone} placeholder='请输入注册时的手机号'></input>
              <p className='info' ref='phoneinfo'><img src={require('../assets/images/login/wrong_account.png')}></img>请输入正确的手机号</p>
            </div>
            <div className="code">
              <input type="text" />
              <span>获取验证码</span>
            </div>
            <div className='form_item'>
              <img src={require('../assets/images/login/password_gray.png')} />
              <input type='password' onInput={this.setPass} onBlur={this.checkPassword} placeholder='请输入密码'></input>
              <p className='info' ref='passwordinfo'><img src={require('../assets/images/login/wrong_password.png')}></img>密码错误，请输入正确的密码</p>
            </div>
            <div className='form_item'>
              <img src={require('../assets/images/login/password_gray.png')} />
              <input type='password' onInput={this.setPass} onBlur={this.checkPassword} placeholder='请确认密码'></input>
              <p className='info' ref='passwordinfo'><img src={require('../assets/images/login/wrong_password.png')}></img>密码错误，请输入正确的密码</p>
            </div>
            <div className="loginbtn">
              <span onClick={this.handleGoLogin}>返回登陆</span>
              <span>确认</span>
            </div>
          </Form>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)