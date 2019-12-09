import React, { Component, Fragment } from 'react'
import { Input, Select, Radio, Form, Table } from 'antd'
import { getAllUsers, selectUser, getUsersNumber, getFirDeps } from '../../api/user.js'
import UserDetail from './userdetail'
import '../../assets/style/UserInfo.less'
import { getPagination } from '../../basic/config.js'
const FormItem = Form.Item
const { Search } = Input
const { Option } = Select

export default class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      total: 0,
      numbers: {},
      isShowUserDetail: false
    }
  }
  searchUser = async (value) => {
    if (!value) {
      return this.getUsers({ page: 1 })
    }
    const res = await selectUser({ username: value, page: 1 })
    if (res.code === 200) {
      this.setState({
        users: res.date.personInfo
      })
    }
  }
  // 获取各用户数目
  getUsersNumber = async () => {
    const res = await getUsersNumber()
    if (res.code === 200) {
      this.setState({
        numbers: res.date.number
      })
    }
  }
  // 获取所有用户
  getUsers = async (data) => {
    const res = await getAllUsers(data)
    if (res.code === 200) {
      const users = res.date.personInfo
      users.forEach((element, key) => {
        element.key = key
      })
      this.setState({
        users,
        total: res.totol,
        currentInfo: null
      })
    }
  }
  // 展示用户详情
  showUserDetail = (text) => {
    this.setState({
      isShowUserDetail: true,
      currentInfo: text
    })
  }
  hideUserInfo = () => {
    this.setState({
      isShowUserDetail: false
    })
  }
  componentDidMount () {
    this.getUsers({ page: 1 })
    this.getUsersNumber()
  }
  render () {
    const { total, users, numbers, isShowUserDetail, currentInfo } = this.state
    return (
      <div className='user_info'>
        <header>
          <HeaderView />
        </header>
        <section>
          <TableView
            getUsers={this.getUsers} total={total} users={users} showUserDetail={this.showUserDetail} />
        </section>
        <footer className='user_total'>
          <FooterView numbers={numbers} />
        </footer>
        {isShowUserDetail ? <UserDetail currentInfo={currentInfo} backHistory={this.hideUserInfo} /> : null}
      </div>
    )
  }
}


function HeaderView () {
  return (
    <Fragment>
      <Form layout="inline" className='form_box'>
        <FormItem>
          <Search
            placeholder="input search text"
            onSearch={value => this.searchUser(value)}
            style={{ width: 200 }}
            size='large'
          />
        </FormItem>
        <FormItem>
          <Select
            style={{ width: 100 }} defaultValue="one"
            size='large'>
            <Option value='one'>一分部</Option>
            <Option value='two'>二分部</Option>
          </Select></FormItem>
        <FormItem>
          <Select
            style={{ width: 100 }} defaultValue="one"
            size='large'>
            <Option value='one'>总管理员</Option>
            <Option value='two'>管理员</Option>
            <Option value='three'>一般员工</Option>
          </Select></FormItem>
        {/* <FormItem>
          <Radio
            size='large'>显示二级部门</Radio></FormItem> */}
      </Form>
      <div className='btns'>
        <div>
          <img src={require('../../assets/images/user/print_IC.png')} alt="" />
          <span>打印</span>
        </div>
        <div>
          <img src={require('../../assets/images/user/import_IC.png')} alt="" />
          <span>一键导入</span>
        </div>
      </div>
    </Fragment>
  )
}

function TableView (props) {
  const rowSelection = {
    // selectedRowKeys,
    // onChange: this.onSelectChange,
  }
  const columns = [
    {
      title: '序号',
      render: (text, record, index) => `${index + 1}`,
    },
    {
      title: '姓名',
      dataIndex: 'username'
    }, {
      title: '性别',
      dataIndex: 'sex'
    }, {
      title: '员工ID',
      dataIndex: 'job_id'
    }, {
      title: '联系电话',
      dataIndex: 'account_phone'
    }, {
      title: '生日',
      dataIndex: 'birthday'
    }, {
      title: '一级部门',
      dataIndex: 'division_one'
    }, , {
      title: '二级部门',
      dataIndex: 'division_two'
    }, {
      title: '所属岗位',
      dataIndex: 'jobs',
      // filters: [{ text: '设计', value: '设计' }, { text: '总管理员', value: '总管理员' }],
      // onFilter: (value, record) => record.jobs && record.jobs.indexOf(value) === 0
    }, {
      title: '操作',
      render: (text) => {
        return (
          <div>
            <span onClick={() => props.showUserDetail(text)}><img src={require('../../assets/images/user/disable_IC.png')} alt="" /><span>详情</span></span>
            <img src={require('../../assets/images/user/details_IC.png')} alt="" /><span>删除</span>
          </div>
        )
      }
    }
  ]
  return (
    <Table
      pagination={getPagination(Number(props.total), 8, props.getUsers)}
      size='mini'
      rowSelection={rowSelection}
      size='small'
      columns={columns}
      dataSource={props.users} />
  )
}
function FooterView (props) {
  return (
    <Fragment>
      <div className='total_user'>
        <span className="title">总人数</span>
        <span className="num">{props.numbers.NumberAll || 0}</span>
      </div>
      <div className='manage_user'>
        <span className="title">管理人员</span>
        <span className="num">{props.numbers.NumberTwo || 0}</span>
      </div>
      <div className='employee_user'>
        <span className="title">普通员工</span>
        <span className="num">{props.numbers.NumberOne || 0}</span>
      </div>
    </Fragment>
  )
}