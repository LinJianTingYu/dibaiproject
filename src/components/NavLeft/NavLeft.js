import React from 'react'
import { NavLink } from 'react-router-dom'
import {menus} from '../../basic/menus'
import '../../assets/style/NavLeft.less'
import { withRouter } from 'react-router-dom';

// @withRouter

class NavLeft extends React.Component {
  // getImg (item) {
  //   console.log(item)
  //   return item
  // }
  renderNav () {
    let pathname = this.props.location.pathname
    return (
      <ul>
        {
          menus.map((item, index)=>{
            if (pathname === item.key) {
              return (
                <NavLink to={item.key}  className='nav_item' key={index}>
                  <img src={item.activeicon} alt=""/>
                  <p>{item.label}</p>
                </NavLink>
              )
            }else {
              return (
                <NavLink to={item.key}  className='nav_item' key={index}>
                  <img src={item.icon} alt=""/>
                  <p>{item.label}</p>
                </NavLink>
              )
            }
          })
        }
      </ul>
    )
  }
  // 点击菜单切换

  render() {
    return (
      <div className='nav_left'>
        {this.renderNav()}
      </div>
    )
  }
}

export default withRouter(NavLeft)