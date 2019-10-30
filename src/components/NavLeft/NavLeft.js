import React from 'react'
import { NavLink } from 'react-router-dom'
import {menus} from '../../basic/menus'
import '../../assets/style/NavLeft.less'
import { withRouter } from 'react-router-dom';

// @withRouter

export default class NavLeft extends React.Component {
  // getImg (key) {
  //   console.log(key)
  //   return key
  // }
  renderNav () {
    return (
      <ul>
        {
          menus.map((item, index)=>{
            return (
                <NavLink to={item.key}  className='nav_item' key={item.key}>
                  <img src={item.icon} alt=""/>
                  <p>{item.label}</p>
                </NavLink>
            )
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