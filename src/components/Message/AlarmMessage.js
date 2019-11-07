import React, { Component } from 'react'
import { List, Input } from 'antd'
import MessageList from './MessageList'
import '../../assets/style/AlarmMessage.less'
const ListItem = List.Item
const { Search } = Input

class AlarmMessage extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
          today: false,
          time: '2019-08-23 16:41'
        },
        {
          info: '编号为TEN0006的温度传感器所测温度为46℃，超多预设最高温度。',
          type: '高温报警',
          today: false,
          time: '2019-08-23 16:41'
        },
        {
          info: '收到来自员工Kate的语音消息。',
          type: '语音信息',
          today: false,
          time: '2019-08-23 16:41'
        },
        {
          info: '编号为HUMI00005的湿度传感器网络连接异常，已停止工作。',
          type: '设备异常',
          today: false,
          time: '2019-08-23 16:41'
        }
      ]
    }
  }
  render () {
    return (
      <div className='alarm_message'>
        <HeaderView title={this.props.title} backHistory={this.props.backHistory}></HeaderView>
        <div className="alarm_content">
          {/* <div className="latest_message_wrapper">
            <p><img src="" alt="" /><span>最新报警信息</span></p>
          </div> */}
          {/* <div className="history_message_wrapper">
            <p><img src="" alt="" /><span>历史报警信息</span></p>
          </div> */}
          <div className='search_input_wrapper'>
            <Search
              placeholder="input search text"
              enterButton="Search"
              size="large"
              className='search_input'
              onSearch={value => console.log(value)}
            />
          </div>
          <MessageList messages={this.state.messages}></MessageList>
        </div>
      </div>
    )
  }
}

function ListView (props) {
  return (
    <List
      bordered
      size='middle'>
      <ListItem></ListItem>
    </List>
  )
}

function HeaderView (props) {
  return (
    <div className='alarm_message_header'>
      <img src={require('../../assets/images/message/arrow_black.png')} onClick={props.backHistory} alt="" />
      <span>消息中心 > {props.title}</span>
    </div>
  )
}
export default AlarmMessage;