import React from 'react'
import '../../assets/style/Home.less'
import BMap from 'BMap'
import { Input } from 'antd'
const { Search } = Input

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      map: null
    }
  }
  componentDidMount() {
    this.initMap()
  }
  // 初始化地图
  initMap() {
    let map = this.setState.map
    map = new BMap.Map("map")
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    var point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
    map.centerAndZoom(point, 15)                 // 初始化地图，设置中心点坐标和地图级别  
    var opts = {offset: new BMap.Size(110, 5)}
    map.addControl(new BMap.MapTypeControl(opts))
  }
  render() {
    console.log(this.state)
    return (
      <div className='home'>
        <MapView></MapView>
        <InfoView></InfoView>
      </div>
    )
  }
}

class MapView extends React.Component {
  render() {
    const legends = [
      {
        value: '公共区域',
        bgColor: require('../../assets/images/home/publicarea.png')
      },
      {
        value: '核心区域',
        bgColor: require('../../assets/images/home/corezone.png')
      },
      {
        value: '敏感区域',
        bgColor: require('../../assets/images/home/sensitivearea.png')
      },
      {
        value: '人员定位',
        bgColor: require('../../assets/images/home/location_IC_small.png')
      },
      {
        value: '传感器',
        bgColor: require('../../assets/images/home/sensor.png')
      }
    ]
    return (
      <div className="map_wrapper">
        <div id="map"></div>
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
        />
        <div className="map_right">
          <ul className="legend_wrapper">
            {
              legends.map((item) => {
                return (
                  <li className='legend_item' key={item.value}>
                    <img src={item.bgColor} alt="" />
                    <span>{item.value}</span>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

class InfoView extends React.Component {
  render() {
    return (
      <div className="info_wrapper">
        <div className="info_item user_info">
          <p className="title">人员信息</p>
        </div>
        <div className="info_item health_info">
          <p className="title">健康状况</p>
        </div>
        <div className="info_item alarm_info">
          <p className="title">告警信息</p>
        </div>
      </div>
    )
  }
}

export default Home