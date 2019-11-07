import React, { Component } from 'react'
import { List } from 'antd'
import '../../assets/style/MessageList.less'
const ListItem = List.Item

class MessageList extends Component {
  render () {
    return (
      <List
        bordered
        size='middle'
        className='latest_message_box'
        dataSource={this.props.messages}
        renderItem={item => (
          <ListItem className={`message_item ${item.today ? 'new' : ''}`}>
            <div>
              <span className={`radius ${item.today ? '' : 'new'}`}></span>
              <span className='message_info'>[{item.type}]{item.info}
                {item.today ? <img src={require('../../assets/images/message/New_IC.png')} alt="" /> : null}
              </span>
            </div>
            <span className="time">{item.time}</span>
          </ListItem>
        )} >
      </List >
    )
  }
}

export default MessageList