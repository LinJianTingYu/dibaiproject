import React from 'react'
import { NavLink } from 'react-router-dom'
import { menus } from '../../basic/menus'
import '../../assets/style/NavLeft.less'
import { withRouter } from 'react-router-dom'

// @withRouter

class NavLeft extends React.Component {
  // getImg (item) {
  //   console.log(item)
  //   return item
  // }
  // renderGroup (groups) {
  //   if (!groups.length) return
  //   return (
  //     <ul className='group'>
  //       {
  //         groups.map((item, index) => {
  //           return (
  //             <li key={index}>
  //               <NavLink className='group_item' to={item.key}>
  //                 <span></span>
  //                 {item.label}
  //               </NavLink>
  //             </li>
  //           )
  //         })
  //       }
  //     </ul>
  //   )
  // }
  renderNav () {
    let pathname = this.props.location.pathname
    return (
      <ul>
        {
          menus.map((item, index) => {
            if (pathname === item.key) {
              return (
                <NavLink to={item.key} className='nav_item' key={index}>
                  <img src={item.activeicon} alt="" />
                  <p>{item.label}</p>
                  {/* {this.renderGroup(item.children)} */}
                </NavLink>
              )
            } else {
              return (
                <NavLink to={item.key} className='nav_item' key={index}>
                  <img src={item.icon} alt="" />
                  <p>{item.label}</p>
                  {/* {this.renderGroup(item.children)} */}
                </NavLink>
              )
            }
          })
        }
      </ul>
    )
  }

  // renderMenu () {
  //   return (
  //     <Menu>
  //       {
  //         menus.map((item, key) => {
  //           return (
  //             <SubMenu key={key}>
  //               <Menu.Item>
  //                 <img src={item.icon} alt="" />
  //                 <p>{item.label}</p>
  //               </Menu.Item>
  //             </SubMenu>
  //           )
  //         })
  //       }
  //     </Menu>
  //   )
  // }
  // 点击菜单切换

  render () {
    return (
      <div className='nav_left'>
        {this.renderNav()}
      </div>
    )
  }
}

export default withRouter(NavLeft)