import React, { Component } from 'react'
import Mycalendar from 'rc-calendar'
import AMap from 'AMap'
import echarts from 'echarts'
import 'echarts/lib/echarts'
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

  // 初始化地图
  initMap () {
    let amap = new AMap.Map('map', {
      // 调整窗口大小
      resizeEnable: true,
      // 设置中心点
      // center: this.center,
      // 地图显示范围
      zoom: 15
    })
    // 添加卫星地图层
    let satellite = new AMap.TileLayer.Satellite()
    satellite.setMap(amap)
    satellite.hide()
    // 添加测距
    let range = new AMap.RangingTool(amap)
    let geocoder
    AMap.plugin(['AMap.Geocoder'], () => {
      geocoder = new AMap.Geocoder({
        radius: 1000,
        extensions: 'all'
      })
      this.setState({
        map: amap,
        satellite,
        range,
        geocoder
      }, () => {
        // this.draeArea()
      })
    })
  }
  // initEcharts 
  initEcharts () {
    var myChart = echarts.init(document.getElementById('echarts'))
    var option = {
      title: {
        text: '今年出勤情况'
      },
      xAxis: {
        type: 'category',
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [23, 21, 20, 19, 25, 24, 26, 29, 27, 28, 30, 29],
        type: 'bar',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
      }]
    }
    myChart.setOption(option)
  }
  componentDidMount () {
    this.initMap()
    this.initEcharts()
  }
  render () {
    const workerInfo = this.props.workerInfo
    return (
      <div className='personwork'>
        <HeaderView title={workerInfo.name} backHistory={this.props.backHistory}></HeaderView>
        <div className='person_work_content'>
          <WorkLeft></WorkLeft>
          <div className='worker_middle'>
            <div className="map">
              <div className="mapcontanier" id='map'></div>
            </div>
            <div className="check">
              <div id="echarts"></div>
            </div>
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