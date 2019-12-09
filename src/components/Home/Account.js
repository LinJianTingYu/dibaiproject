import React, { Component, Fragment } from 'react'
import { Button, Table, Modal, Input, Form, message } from 'antd'
import { getAllAccounts, selectPerson, insertPerson, delPerson } from '../../api/account.js'
import { getPagination } from '../../basic/config.js'
import '../../assets/style/Account.less'
const FormItem = Form.Item
const { Search } = Input

class Account extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowAddAcount: false,
      accounts: [],
      personInfo: {}
    }
  }
  showAddAccount = () => {
    this.setState({
      isShowAddAcount: true
    })
  }
  // 添加新账号
  addAccount = async () => {
    const { personInfo } = this.state
    const data = {
      admin_phone: personInfo.account_phone,
      admin_name: personInfo.username,
      admin_id: personInfo.job_id,
      admin_division_one: personInfo.division_one,
      admin_division_two: personInfo.division_two,
      admin_jobs: personInfo.jobs
    }
    if (!data.admin_id) return message.error('用户信息不能为空')
    this.setState({
      isShowAddAcount: false
    })
    const res = await insertPerson(data)
    this.setState({
      personInfo: {}
    })
    if (res.code === 200) {
      message.success('添加成功')
      this.getAccounts({ page: 1 })
    }
  }
  cancelAccount = () => {
    this.setState({
      isShowAddAcount: false
    })
  }
  // 删除账号
  delAccount = async (data) => {
    const res = await delPerson({ admin_phone: data.admin_phone })
    if (res.code === 200) {
      message.success('删除成功')
      this.getAccounts({ page: 1 })
    }
  }
  // 搜索用户
  searchUser = async (value) => {
    const data = { account_phone: value }
    const res = await selectPerson(data)
    this.setState({
      personInfo: res.date.person_info[0]
    })
  }
  // 获取所有账号
  getAccounts = async (data) => {
    const res = await getAllAccounts(data)
    const accounts = res.date.adminInfo
    for (var key in accounts) {
      accounts[key].key = accounts[key].id
    }
    this.setState({
      accounts: res.date.adminInfo
    })
  }
  componentDidMount () {
    const data = {
      page: 1
    }
    this.getAccounts(data)
  }
  render () {
    const { isShowAddAcount, personInfo, accounts } = this.state
    return (
      <div className='account'>
        <div className="account_header">
          <div className="left" onClick={this.props.handleCloseAccount}>
            <img src={require('../../assets/images/home/return_IC.png')} alt="" />
            <span>返回</span>
          </div>
          <div className="right">
            <span>张三</span>
            <img src="" alt="" />
          </div>
        </div>
        <div className="account_content">
          <RenderFirTep handleShowAddAccount={this.showAddAccount} delAccount={this.delAccount} accounts={accounts}></RenderFirTep>
        </div>
        <ModealView
          handleSearchUser={this.searchUser}
          isShowAddAcount={isShowAddAcount}
          addAccount={this.addAccount}
          cancelAccount={this.cancelAccount}
          personInfo={personInfo}></ModealView>
      </div>
    )
  }
}
function ModealView (props) {
  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 }
  }
  return (
    <Modal
      title="账号管理 > 新增"
      visible={props.isShowAddAcount}
      okText='确认'
      cancelText='取消'
      onOk={props.addAccount}
      onCancel={props.cancelAccount}>
      <Form>
        <FormItem className='form_item' label='联系电话' {...formItemLayout}>
          <Search onSearch={value => props.handleSearchUser(value)}></Search>
        </FormItem>
        <FormItem label='姓名' {...formItemLayout}>
          <Input disabled value={props.personInfo.username}></Input>
        </FormItem>
        <FormItem label='员工ID' {...formItemLayout}>
          <Input disabled value={props.personInfo.job_id}></Input>
        </FormItem>
        <FormItem label='一级部门' {...formItemLayout}>
          <Input disabled value={props.personInfo.division_one}></Input>
        </FormItem>
        <FormItem label='二级部门' {...formItemLayout}>
          <Input disabled value={props.personInfo.division_two}></Input>
        </FormItem>
        <FormItem label='所属岗位' {...formItemLayout}>
          <Input disabled value={props.personInfo.jobs}></Input>
        </FormItem>
      </Form>
    </Modal>
  )
}
function RenderTable (props) {
  return (
    <Table
      size='small'
      columns={props.columns}
      dataSource={props.teps}></Table>
  )
}
// 一级部门
function RenderFirTep (props) {
  const columns = [
    {
      key: '1',
      title: '序号',
      render: (text, record, index) => `${index + 1}`,
    },
    {
      title: '姓名',
      dataIndex: 'admin_name'
    }, {
      title: '人员照片',
      dataIndex: 'img'
    }, {
      title: '员工ID',
      dataIndex: 'admin_id'
    }, {
      title: '一级部门',
      dataIndex: 'admin_division_one'
    }, {
      title: '二级部门',
      dataIndex: 'admin_division_two'
    }, {
      title: '所属岗位',
      dataIndex: 'admin_jobs'
    }, {
      title: '联系电话',
      dataIndex: 'admin_phone'
    }, {
      key: '2',
      title: '操作',
      render: (text, record) => (
        <div>
          <span onClick={() => props.delAccount(record)}><img src={require('../../assets/images/user/disable_IC.png')} alt='' />禁用</span>
          {/* <span><img src={require('../../assets/images/user/enable_IC_gray.png')} alt='' />启用</span> */}
        </div>
      )
    }
  ]
  return (
    <Fragment>
      <header>
        <span className="title">一级部门</span>
        <Button icon='plus-circle' onClick={props.handleShowAddAccount}>新增</Button>
      </header>
      <RenderTable columns={columns} teps={props.accounts}></RenderTable>
    </Fragment>
  )
}

export default Account