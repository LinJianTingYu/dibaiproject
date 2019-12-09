import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, message } from 'antd'
import { login } from '../api/login.js'
// import Loading from '../components/Loading.js'
import '../assets/style/login.less'
// const FormItem = Form.Item

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      phone: null,
      password: null,
      isBolPhone: false,
      isBolPassword: false,
      isLoading: false
    }
  }
  setPhone = (event) => {
    this.setState({
      phone: event.target.value
    })
  }
  setPass = (event) => {
    this.setState({
      password: Number(event.target.value)
    })
  }
  // 检查账号格式是否正确
  checkPhone = () => {
    const { phone } = this.state
    let isBolPhone
    if (phone === 'admin' || (phone && phone.length === 11 && !isNaN(phone))) {
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
  // 检查密码格式是否正确
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
  // 点击登录
  handleLogin = async () => {
    const { phone, password, isBolPhone, isBolPassword } = this.state
    // 判断信息是否正确输入
    if (isBolPhone && isBolPassword) {
      this.setState({
        isLoading: true
      })
      const data = {
        admin_phone: phone,
        admin_password: password
      }
      const res = await login(data)
      if (res.code === 200) {
        const user = res.date.adminLogin
        localStorage.setItem('user', JSON.stringify(user))
        this.props.history.push({
          pathname: '/'
        })
      } else if (res.code === 220) {
        message.error('账号或密码错误')
      }
      this.setState({
        isLoading: false
      })
    } else {
      console.log(2)
    }
  }
  goForget = () => {
    this.props.history.push({
      pathname: 'resetpassword'
    })
  }
  render () {
    // const { isLoading } = this.state
    return (
      <div className='login'>
        <div className="login_box">
          <div className="login_header">登陆</div>
          <Form>
            <div className='form_item'>
              <img src={require('../assets/images/login/account_blue.png')} alt=''></img>
              <input onInput={this.setPhone} onBlur={this.checkPhone} placeholder='请输入注册时的手机号'></input>
              <p className='info' ref='phoneinfo'><img src={require('../assets/images/login/wrong_account.png')}></img>请输入正确的手机号</p>
            </div>
            <div className='form_item'>
              <img src={require('../assets/images/login/password_gray.png')} alt='' />
              <input type='password' onInput={this.setPass} onBlur={this.checkPassword} placeholder='请输入密码'></input>
              <p className='info' ref='passwordinfo'><img src={require('../assets/images/login/wrong_password.png')}></img>密码错误，请输入正确的密码</p>
              <p className='forgetPass' onClick={this.goForget}>忘记密码？</p>
            </div>
            <div className="loginbtn" onClick={this.handleLogin}>登陆</div>
          </Form>
        </div>
        {/* {isLoading ? <Loading title='正在登录'></Loading> : null} */}
      </div>
    )
  }
}

export default withRouter(Login)