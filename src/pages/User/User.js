import React from 'react'
import '../../assets/style/User.module.less'
import { NavLink, withRouter } from 'react-router-dom'

class User extends React.Component {
  renderNav() {
    const navs = [
      {
        label: '用户信息',
        key: '/admin/user/info'
      },
      {
        label: '组织架构',
        key: '/admin/user/organization'
      },
      {
        label: '用户权限',
        key: '/admin/user/admin'
      }
    ]
    const pathname = this.props.location.pathname
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
  render() {
    return (
      <div className='user'>
        <div className="user_nav">
          {this.renderNav()}
        </div>
        <div className="user_content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default withRouter(User)