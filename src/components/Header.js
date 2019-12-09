import React, { Fragment } from 'react'
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowAccount: false
    }
  }
  handleAccount = () => {
    let isShowAccount = this.state.isShowAccount
    this.setState({
      isShowAccount: !isShowAccount
    })
  }
  handleChangePass = () => {
    this.setState({
      isShowAccount: false
    })
    this.props.changePass()
  }
  handleShowAccount = () => {
    this.setState({
      isShowAccount: false
    })
    this.props.showAccount()
  }
  render () {
    const { isShowAccount } = this.state
    return (
      <Fragment>
        <span className='project_name'>工程现场智能管理系统</span>
        <div className='project_control'>
          <img src={require('../assets/images/header/alarm_IC.png')} alt="" />
          <img onClick={this.handleAccount} src={require('../assets/images/header/personalcenter_IC.png')} alt="" />
          <span onClick={this.props.hanldeExit} style={{ cursor: 'pointer' }}>退出</span>
          {isShowAccount ? (<div className="account_wrapper">
            <p onClick={this.handleShowAccount}>账号管理</p>
            <p onClick={this.handleChangePass}>修改密码</p>
          </div>) : null}
        </div>
      </Fragment>
    )
  }
}

export default Header