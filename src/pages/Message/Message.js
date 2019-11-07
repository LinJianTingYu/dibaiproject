import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import AlarmMessage from '../../components/Message/AlarmMessage'
import MessageList from '../../components/Message/MessageList'
import '../../assets/style/Message.less'
// import { List } from 'antd'
// const ListItem = List.Item

class Message extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowMessageInfo: false,
      currentTitle: '',
      messages: [
        // 'Kate在（请获取他当前报警的位置）进行了S0S紧急报警，请尽快采取措施。',
        // '编号为TEN0006的温度传感器所测温度为46℃，超多预设最高温度。',
        // '收到来自员工Kate的语音消息',
        // '编号为HUMI00005的湿度传感器网络连接异常，已停止工作。'
        {
          info: 'Kate在（请获取他当前报警的位置）进行了S0S紧急报警，请尽快采取措施。',
          type: 'SOS报警',
          today: true,
          time: '2019-08-23 16:41'
        },
        {
          info: '编号为TEN0006的温度传感器所测温度为46℃，超多预设最高温度。',
          type: '高温报警',
          today: true,
          time: '2019-08-23 16:41'
        },
        {
          info: '收到来自员工Kate的语音消息。',
          type: '语音信息',
          today: true,
          time: '2019-08-23 16:41'
        },
        {
          info: '编号为HUMI00005的湿度传感器网络连接异常，已停止工作。',
          type: '设备异常',
          today: true,
          time: '2019-08-23 16:41'
        },
        {
          info: '编号为TEN0006的温度传感器所测温度为46℃，超多预设最高温度。',
          type: '高温报警',
          today: true,
          time: '2019-08-23 16:41'
        },
        {
          info: '收到来自员工Kate的语音消息。',
          type: '语音信息',
          today: true,
          time: '2019-08-23 16:41'
        },
        {
          info: '编号为HUMI00005的湿度传感器网络连接异常，已停止工作。',
          type: '设备异常',
          today: true,
          time: '2019-08-23 16:41'
        }
      ]
    }
  }
  routeChange = (type) => {
    let title
    switch (type) {
      case 'alarm':
        title = '报警信息'
        break
      case 'user':
        title = '用户信息'
        break
      case 'voice':
        title = '语音信息'
        break
      default:
        title = '发送信息'
        break
    }
    this.setState({
      currentTitle: title,
      isShowMessageInfo: true
    })
  }
  backHistory = () => {
    this.setState({
      isShowMessageInfo: false
    })
  }
  render () {
    return (
      <div className='message'>
        <ul className='message_header'>
          <HeaderView routeChange={this.routeChange}></HeaderView>
        </ul>
        <div className='latest_message_wrapper'>
          <h3>最新消息</h3>
          <MessageList messages={this.state.messages} title=''></MessageList>
        </div>
        {
          this.state.isShowMessageInfo ? <AlarmMessage title={this.state.currentTitle} backHistory={this.backHistory}></AlarmMessage> : null
        }
      </div>
    )
  }
}

export default withRouter(Message)

function HeaderView (props) {
  return (
    <Fragment>
      <li className='message_item' onClick={() => props.routeChange('alarm')}>
        <img src={require('../../assets/images/message/warm_message_IC.png')} alt="" />
        <div className="message_info">
          <span className="num">234</span><span className="title">报警信息</span>
        </div>
      </li>
      <li className='message_item' onClick={() => props.routeChange('user')}>
        <img src={require('../../assets/images/message/user_messages_IC.png')} alt="" />
        <div className="message_info">
          <span className="num">223</span><span className="title">用户信息</span>
        </div>
      </li>
      <li className='message_item' onClick={() => props.routeChange('voice')}>
        <img src={require('../../assets/images/message/voice_messages_IC.png')} alt="" />
        <div className="message_info">
          <span className="num">345</span><span className="title">语音消息</span>
        </div>
      </li>
      <li className='message_item' onClick={() => props.routeChange('send')}>
        <img src={require('../../assets/images/message/send_messages_IC.png')} alt="" />
        <div className="message_info"><span className="num">879</span><span className="title">发送消息</span></div>
      </li>
    </Fragment>
  )
}