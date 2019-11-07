import React, { Component } from 'react'
import Mycalendar from 'rc-calendar'
import moment from "moment"
import '../../assets/style/PersonWork.less'

class PersonWork extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedValue: "",
      index: 0,
      date: new Date()
    }
  }
  componentDidMount () {
  }
  render () {
    const workerInfo = this.props.workerInfo
    return (
      <div className='personwork'>
        <HeaderView title={workerInfo.name} backHistory={this.props.backHistory}></HeaderView>
        <div className='person_work_content'>
          <WorkLeft></WorkLeft>
          <div className='worker_middle'>worker_middle
          </div>
          <div className='worker_right'>
            <Mycalendar
              value={new Date()}
              className="my-calendar"
              showDateInput={false}
              renderSidebar={() => <span>ss</span>}
              minDetail="month" />
          </div>
        </div>
      </div>
    )
  }
}


function HeaderView (props) {
  return (
    <div className='person_work_header'>
      <img src={require('../../assets/images/message/arrow_black.png')} onClick={props.backHistory} alt="" />
      <span>功效管理 > {props.title} > 详情</span>
    </div>
  )
}

function WorkLeft (props) {
  return (
    <div className='worker_left'>
      <p><img src={require('../../assets/images/work/head.jpg')} alt="" /></p>
      <p>
        <span>姓名：</span>
        <span>jjj</span>
      </p>
      <p>
        <span>性别：</span>
        <span>jjj</span></p>
      <p>
        <span>ID</span>
        <span>1122</span></p>
      <p>
        <span>一级部门：</span>
        <span>识得的</span></p>
      <p>
        <span>所属岗位：</span>
        <span>jjj</span></p>
      <p>
        <span>本月出勤天数：</span>
        <span>jjj</span></p>
      <p>
        <span>本月出勤异常：</span>
        <span>jjj</span></p>
      <p>
        <span>本月门禁异常：</span>
        <span>识得的</span></p>
      <p>
        <span>今日卡路里：</span>
        <span>jjj</span></p>
      <p>
        <span>本月门禁打卡：</span>
        <span>jjj</span></p>
      <p>
        <span>今日卡路里：</span>
        <span>jjj</span></p>
      <p>
        <span>今日行走距离：</span>
        <span>jjj</span></p>
    </div>
  )
}

export default PersonWork;