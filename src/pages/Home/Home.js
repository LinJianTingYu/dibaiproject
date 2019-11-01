import React from 'react'
import '../../assets/style/Home.less'
// import BMap from 'BMap'
import AMap from 'AMap'
import { Input } from 'antd'
const { Search } = Input
// const {BMAP_NORMAL_MAP, BMAP_HYBRID_MAP} = BMap

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      map: null,
      satellite: null,
      isShowSatellite: false,
      isShowRange: false,
      range: null,
      geocoder: null
    }
  }
  componentDidMount() {
    this.initMap()
  }
  // 初始化地图
  initMap() {
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
        this.draeArea()
      })
    })
  }
  // 改变地图
  changeMapType = () => {
    let isShowSatellite = this.state.isShowSatellite
    isShowSatellite ? this.state.satellite.hide() : this.state.satellite.show()
    this.setState({
      isShowSatellite: !isShowSatellite
    })
  }
  // 开启测距
  handleRange = () => {
    let isShowRange = this.state.isShowRange
    isShowRange ? this.state.range.turnOff() : this.state.range.turnOn()
    this.setState({
      isShowRange: !isShowRange
    })
  }
  // 生成信息窗体
  drawInfoWindow (lon, lat) {
    this.getAddress(lon, lat).then(address => {
      var infoWindow = new AMap.InfoWindow({
        anchor: 'bottom-center',
        content: address
      })
      infoWindow.open(this.state.map, [lon, +lat+0.0001])
    })
  }
  // 根据经纬度获取地址
  getAddress (lng, lat) {
    const lnglat = [lng, lat]
    return new Promise((resolve, reject) => {
      this.state.geocoder.getAddress(lnglat, (status, result) => {
        if (status === 'complete' && result.regeocode) {
          resolve(result.regeocode.formattedAddress)
        } else {
          alert(JSON.stringify(result))
        }
      })
    })
  }
  // 绘制icon
  drawMarker (longitude, latitude, type, index) {
    let amap = this.state.map
    amap.setZoomAndCenter(10, [longitude, latitude])
    var marker
    var icon
    if (type === 'person') {
      icon = require('../../assets/images/home/location_IC_big.png')
    } else if('sensor') {
      icon = require('../../assets/images/home/sensitivearea.png')
    }
    marker = new AMap.Marker({
      icon,
      position: [longitude, latitude]
    })
    amap.add(marker)
    // 鼠标点击marker弹出自定义的信息窗体
    marker.on('click', event => {
      // 生成信息窗体
      this.drawInfoWindow(longitude, latitude)
    })
  }
  // 创建标记点
  draeArea () {
    this.drawMarker('104.0692', '30.6567', 'person', 1)
    this.drawMarker('104.0592', '30.6667', 'sensor', 1)
  }
  render() {
    let state = this.state
    return (
      <div className='home'>
        <MapView
          handleRange={this.handleRange}
          changeMapType={this.changeMapType}
          isShowSatellite={state.isShowSatellite}
          isShowRange={state.isShowRange}></MapView>
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
        <div className="map_control">
          <div className="distance map_control_item" onClick={this.props.handleRange}>
            <img src={require('../../assets/images/home/ranging_IC.png')} alt="" />
            <span className={this.props.isShowRange ? 'active' : ''}>测距</span>
          </div>
          <div className="mapType map_control_item" onClick={this.props.changeMapType}>
            <img src={require("../../assets/images/home/satellite_IC.png")} alt="" />
            <span className={this.props.isShowSatellite ? 'active' : ''}>卫星</span>
          </div>
        </div>
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
          <ul className="user_info_box">
            <li>
              <div>姓名:<span>洋建</span></div>
              <div>年龄:<span>32岁</span></div>
            </li>
            <li>
              <div>员工ID:<span>1234567</span></div>
              <div></div>
            </li>
            <li>
              <div>所属部门:<span>洋建</span></div>
              <div>所属岗位:<span>洋建</span></div>
            </li>
            <li>
              <div>手机号码:<span>12345678989</span></div>
              <div></div>
            </li>
          </ul>
          <ul className="contact_box">
            <li>
              <div className='contact_item'>紧急联系人: <span>洋建</span></div>
            </li>
            <li>
              <div className='contact_item'>紧急联系电话1: <span>12345678989</span></div>
              <div className='contact_item'>紧急联系电话2: <span>12345678989</span></div>
            </li>
          </ul>
        </div>
        <div className="info_item health_info">
          <p className="title">健康状况</p>
        </div>
        <div className="info_item alarm_info">
          <p className="title">告警信息</p>
          <ul className="alarm_wrapper">
            <li className="alarm_info_item">
              <img src={require('../../assets/images/home/alarm_IC_red.png')} alt=""/>
              <span>员工进入敏感区域报警。员工进入敏感区域报警。。</span>
            </li>
            <li className="alarm_info_item">
              <img src={require('../../assets/images/home/alarm_IC_red.png')} alt=""/>
              <span>员工进入敏感区域报警。员工进入敏感区域报警。员工进入敏感区域报警。员工进入敏感区域报警。。。</span>
            </li>
            <li className="alarm_info_item">
              <img src={require('../../assets/images/home/alarm_IC_red.png')} alt=""/>
              <span>员工进入敏感区域报警。员工进入敏感区域报警员工进入敏感区域报警。员工进入敏感区域报警。。。。</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Home