import React from 'react'
import '../../assets/style/User.less'
import { NavLink, withRouter } from 'react-router-dom'

class Devices extends React.Component {
  render () {
    return (
      <div className='user'>
        <div className="user_nav">
          <DevicesNav route={this.props}></DevicesNav>
        </div>
        <div className="user_content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

function DevicesNav (props) {
  const navs = [
    {
      label: '员工设备',
      key: '/admin/devices/work'
    },
    {
      label: '工程仪器',
      key: '/admin/devices/project'
    }
  ]
  const pathname = props.route.location.pathname
  return (
    navs.map((item, index) => {
      return (
        <p key={index}>
          <NavLink className={`user_nav_item ${pathname === item.key ? 'active' : ''}`} to={item.key}>
            <span></span>
            {item.label}
          </NavLink>
        </p>
      )
    })
  )
}

export default withRouter(Devices)