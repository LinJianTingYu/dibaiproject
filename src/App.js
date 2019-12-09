import React from 'react';
import './App.less';
import 'antd/dist/antd.css'
import { withRouter } from 'react-router-dom'
import NavLeft from './components/NavLeft/NavLeft'
import ContentHeader from './components/Header'
import { Layout } from 'antd'
import AccountView from './components/Home/Account';
const { Header, Content } = Layout

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowAccount: false
    }
  }
  isLogin () {
    return localStorage.getItem('user')
  }
  componentDidMount () {
    // 如果没有登录，跳转至登录界面
    if (!this.isLogin()) {
      this.props.history.push(
        {
          pathname: '/login'
        })
    }
  }
  componentDidUpdate () {
    // 如果没有登录，跳转至登录界面
    if (!this.isLogin()) {
      this.props.history.push(
        {
          pathname: '/login'
        })
    }
  }
  hanldeExit = () => {
    localStorage.removeItem('user')
    this.props.history.push({
      pathname: 'login'
    })
  }
  changePass = () => {
    this.props.history.push({
      pathname: '/resetpassword'
    })
  }
  showAccount = () => {
    this.setState({
      isShowAccount: true
    })
  }
  closeAccount = () => {
    this.setState({
      isShowAccount: false
    })
  }
  render () {
    const { isShowAccount } = this.state
    return (
      <div className="App">
        <div className='NavLeft'>
          <NavLeft history={this.props.history}></NavLeft>
        </div>
        <div className='content_right'>
          <Layout className='content_layout'>
            <Header className='header'>
              <ContentHeader showAccount={this.showAccount} hanldeExit={this.hanldeExit} changePass={this.changePass}></ContentHeader>
            </Header>
            <Content className='content'>
              {this.props.children}
            </Content>
          </Layout>
        </div>
        {isShowAccount ? <AccountView handleCloseAccount={this.closeAccount}></AccountView> : null}
      </div>
    )
  }
}

export default withRouter(App)
