import React, {Fragment} from 'react'
class Header extends React.Component {
    render() {
        return (
            <Fragment>
                <span className='project_name'>工程现场智能管理系统</span>
                <div className='project_control'>
                    <img src={require('../assets/images/header/alarm_IC.png')} alt="" />
                    <img src={require('../assets/images/header/personalcenter_IC.png')} alt="" />
                    <span>退出</span>
                </div>
            </Fragment>
        )
    }
}

export default Header