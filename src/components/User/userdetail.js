import React, { Component } from 'react'
import '../../assets/style/userdetail.less'
import ChatView from '../chat'

class userdetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowChatView: false
    }
  }
  openChatPage = () => {
    this.setState({
      isShowChatView: true
    })
  }
  closeChat = () => {
    this.setState({
      isShowChatView: false
    })
  }
  componentDidMount () {
    console.log(this.props.currentInfo)
  }
  render () {
    const { isShowChatView } = this.state
    const userinfo = this.props.currentInfo
    return (
      <div className='userdetail'>
        <div className="userdetail_header">
          <img src={require('../../assets/images/message/arrow_black.png')} onClick={this.props.backHistory} alt="" />
          <span>用户信息 >{userinfo.username} >人员详情</span>
        </div>
        <div className="detail_content">
          <div className="top">
            <div className="userinfo">
              <div className="user_info_l">
                <img style={{ borderRadius: '50%' }} src={userinfo.image} alt="头像" />
                <span>姓名：<span>{userinfo.username}</span></span>
                <span>性别：<span>{userinfo.sex}</span></span>
                <span>年龄：<span>{userinfo.birthday}</span></span>
                <span onClick={this.openChatPage} className='sendmessage'><img src={require('../../assets/images/user/message_IC.png')} alt="" /><span>发消息</span></span>
              </div>
              <div className="user_info_r">
                <div className="info">
                  <span>生日：<span>{userinfo.birthday}</span></span>
                  <span>员工Id: <span>{userinfo.job_id}</span></span>
                  <span>所属部门: <span>{userinfo.division_one}</span></span>
                  <span>所属岗位: <span>{userinfo.jobs}</span></span>
                  <span>电话号码: <span>{userinfo.user_phone}</span></span>
                  <span>设备状态: <span>正常/低电量预警/离线</span></span>
                  <span>NFC卡号: <span>12345</span></span>
                </div>
                <div className="contact" >
                  <span>紧急联系人: <span>{userinfo.emergency_man}</span></span>
                  <span>联系电话: <span>{userinfo.emergency_phone}</span></span>
                </div>
              </div>
            </div>
            <div className="map"></div>
          </div>
          <div className="bottom"></div>
        </div>
        {isShowChatView ? <ChatView userinfo={userinfo} isShowChatView={isShowChatView} handleCancel={this.closeChat} /> : null}
      </div>
    )
  }
}

export default userdetail;