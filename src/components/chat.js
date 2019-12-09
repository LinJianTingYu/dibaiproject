import React, { Component } from 'react'
import { Modal, Input } from 'antd'
import { contactuser, getUserMessages } from '../api/message'
import '../assets/style/chat.less'
const { TextArea } = Input

class chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sendmessage: '',
      messages: []
    }
  }
  // 更新输入框
  setMessage = (e) => {
    this.setState({
      sendmessage: e.target.value
    })
  }
  // 发送信息
  hanleSendMessage = async () => {
    const { sendmessage } = this.state
    const data = {
      message_body: sendmessage,
      // file: '', //传递图片才传递此参数
      receice_phone: this.props.userinfo.account_phone
    }
    const res = await contactuser(data)
    if (res.code === 200) {
      this.setState({
        sendmessage: ''
      })
      this.getMessages()
    }
  }
  getMessages = async () => {
    const data = {
      receice_phone: this.props.userinfo.account_phone
    }
    const res = await getUserMessages(data)
    if (res.code === 200) {
      this.setState({
        messages: res.date.dialogueInfo.list.reverse()
      })
    }
  }
  componentDidMount () {
    // 获取该用户的对话信息
    this.getMessages()
  }
  render () {
    const { sendmessage, messages } = this.state
    return (
      <div className="chat">
        <Modal
          title="用户管理 > 用户信息 > 人员详情 > 发消息"
          visible={true}
          okText='发送'
          cancelText='关闭'
          onOk={this.hanleSendMessage}
          onCancel={this.props.handleCancel}>
          <div className="chat_wrapper">
            <div className="user_img_wrapper">
              <div className="user_img_box">
                <img src={this.props.userinfo.image} alt="" />
                <span>{this.props.userinfo.username}</span>
              </div>
            </div>
            <div className="chat_box">
              <ul>
                {
                  messages.map((item, index) => {
                    const isAdmin = item.send_person === 'admin'
                    return (
                      <li className={`chat_item ${isAdmin ? 'admin' : 'person'}`} key={index}>
                        <div className="title">
                          {/* <span className="name">{item.send_person}</span> */}
                          <span className='time'>{item.send_date}</span>
                        </div>
                        <span className="content">{item.message_body}</span>
                      </li>
                    )
                  })
                }
              </ul>
              <div className="input">
                <TextArea onInput={this.setMessage} value={sendmessage} />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default chat;