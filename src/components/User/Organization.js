import React, { Component, Fragment } from 'react'
import { Row, Col, Table, Modal, Button, Input, Form, message } from 'antd'
import { getAllDeps, getAllRoles, addFirDep, addSecDep, addRole, delRole, delFirDep, delSecDep } from '../../api/user.js'
import '../../assets/style/Organization.less'
import { getPagination } from '../../basic/config.js'
const FormItem = Form.Item

export default class Organization extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firModal: false,
      secModal: false,
      tepsModal: false,
      allDeps: [],
      firDeps: null,
      secDeps: [],
      allRoles: [],
      depnumber: '',
      depname: ''
    }
  }
  async componentDidMount () {
    this.getAllRoles()
    // 获取所有部门
    const res = await getAllDeps()
    // 获取一级部门
    if (res.code === 200) {
      let allDeps = res.date.list
      allDeps.forEach((item, index) => {
        item.key = index + '-1'
      })
      this.setState({
        // firDeps: res.date.list
        allDeps
      })
    }
  }
  hideModal = (type) => {
    this.setState({
      depname: '',
      depnumber: ''
    })
    switch (type) {
      case 'firTep':
        this.setState({
          firModal: false
        })
        break
      case 'secTep':
        this.setState({
          secModal: false
        })
        break
      default:
        this.setState({
          tepsModal: false
        })
    }
  }
  // 展示新增窗口
  showAddTep = (type) => {
    switch (type) {
      case 'firTep':
        this.setState({
          firModal: true
        })
        break
      case 'secTep':
        this.setState({
          secModal: true
        })
        break
      default:
        this.setState({
          tepsModal: true
        })
    }
  }
  // 新增部门
  addStep = async type => {
    let data = {
      name: this.state.depname,
      number: this.state.depnumber
    }
    switch (type) {
      case 'firTep':
        // 新增一级部门
        const res_1 = await addFirDep(data)
        if (res_1.code === 200) {
          message.success('添加成功')
        }
        break
      case 'secTep':
        // 新增二级部门
        // return console.log(data)
        const res_2 = await addSecDep({ parent_id: this.state.secDeps.dept_id, ...data })
        if (res_2.code === 200) {
          message.success('添加成功')
        }
        break
      default:
        // 新增角色
        const param = {
          name: this.state.depname,
          desc_: this.state.depnumber
        }
        const res_3 = await addRole(param)
        if (res_3.code === 200) {
          message.success('添加成功')
          this.getAllRoles()
        }
    }
    this.hideModal(type)
  }
  // 取消新增部门
  cancelStep = (type) => {
    this.hideModal(type)
  }
  handleDetail = async (record, index) => {
    let secDeps = this.state.allDeps[index]
    secDeps.treeNode.forEach((item, index) => {
      item.key = index + '-1'
    })
    // 获取一级部门下的二级部门
    this.setState({
      secDeps
    })
  }
  // 获取所有角色
  getAllRoles = async () => {
    const res = await getAllRoles()
    if (res.code === 200) {
      let allRoles = res.date.role
      allRoles.forEach((item, index) => { item.key = index + '-1' })
      this.setState({
        allRoles
      })
    }
  }
  changeDepNumber = event => {
    const value = event.target.value
    this.setState({
      depnumber: value
    })
  }
  changeDepName = event => {
    const value = event.target.value
    this.setState({
      depname: value
    })
  }
  // 删除角色
  delRole = async record => {
    const data = { name: record.name }
    const res = await delRole(data)
    if (res.code = 200) {
      message.success('删除成功')
      this.getAllRoles()
    }
  }
  // 删除一级部门 
  handleDelFirDep = async (record) => {
    const data = {
      dept_id: record.dept_id,
      name: record.name
    }
    const res = await delFirDep(data)
    if (res.code === 200) {
      message.success('删除成功')
    }
  }
  // 删除二级部门
  delSecDep = async record => {
    const data = { dept_id: record.dept_id }
    const res = await delSecDep(data)
    if (res.code === 200) {
      message.success('删除成功')
    }
  }
  render () {
    const { firDeps, allDeps, secDeps, allRoles, depnumber, depname } = this.state
    return (
      <div className='organization'>
        <Row>
          <Col span={12} className='first_tep'>
            <RenderFirTep handleDelFirDep={this.handleDelFirDep} handleDetail={this.handleDetail} addTep={this.showAddTep} firDeps={allDeps} hanldeRow={this.hanldeFirRow}></RenderFirTep>
          </Col>
          <Col span={1}></Col>
          <Col span={11} className='sec_tep'>
            <RenderSecTep addTep={this.showAddTep} delSecDep={this.delSecDep} secDeps={secDeps.treeNode}></RenderSecTep>
          </Col>
        </Row>
        <Row className='teps_box'>
          <Col span={24}>
            <RenderTeps addTep={this.showAddTep} allRoles={allRoles} delRole={this.delRole}></RenderTeps>
          </Col>
        </Row>
        <div className="modal_wrapper">
          <RenderModal
            addStep={this.addStep}
            cancelStep={this.cancelStep}
            firModal={this.state.firModal}
            secModal={this.state.secModal}
            tepsModal={this.state.tepsModal}
            depnumber={depnumber}
            depname={depname}
            changeDepNumber={this.changeDepNumber}
            changeDepName={this.changeDepName}></RenderModal>
        </div>
      </div>
    )
  }
}

function RenderModal (props) {
  const formItemLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 }
  }
  return (
    <Fragment>
      <Modal
        title="用户管理 > 组织架构 > 一级部门 > 新增"
        visible={props.firModal}
        okText='确认'
        cancelText='取消'
        onOk={() => props.addStep('firTep')}
        onCancel={() => props.cancelStep('firTep')}
      >
        <Form>
          <FormItem
            label='部门序号'
            {...formItemLayout}>
            <Input onInput={props.changeDepNumber} value={props.depnumber}></Input>
          </FormItem>
          <FormItem
            label='部门名称'
            {...formItemLayout}>
            <Input onInput={props.changeDepName} value={props.depname}></Input>
          </FormItem>
        </Form>
      </Modal>
      <Modal
        title="用户管理 > 组织架构 > 二级部门 > 新增"
        visible={props.secModal}
        okText='确认'
        cancelText='取消'
        onOk={() => props.addStep('secTep')}
        onCancel={() => props.cancelStep('secTep')}
      >
        <Form>
          <FormItem label='二级部门序号:' {...formItemLayout}>
            <Input onInput={props.changeDepNumber} value={props.depnumber}></Input>
          </FormItem>
          <FormItem label='二级部门名称:' {...formItemLayout}>
            <Input onInput={props.changeDepName} value={props.depname}></Input>
          </FormItem>
        </Form>
      </Modal>
      <Modal
        title="用户管理>组织架构>职能岗位>新增"
        visible={props.tepsModal}
        okText='确认'
        cancelText='取消'
        onOk={() => props.addStep('teps')}
        onCancel={() => props.cancelStep('teps')}
      >
        <Form>
          <FormItem label='岗位编号:' {...formItemLayout}>
            <Input onInput={props.changeDepNumber} value={props.depnumber}></Input>
          </FormItem>
          <FormItem label='岗位名称:' {...formItemLayout}>
            <Input onInput={props.changeDepName} value={props.depname}></Input>
          </FormItem>
        </Form>
      </Modal>
    </Fragment>
  )
}
// 一级部门
function RenderFirTep (props) {
  const columns = [
    {
      title: '序号',
      key: '序号',
      dataIndex: 'number'
      // render: (text, record, index) => `${index + 1}`,
    },
    {
      title: '一级部门',
      dataIndex: 'name'
    },
    {
      title: '部门人数',
      dataIndex: 'number'
    },
    {
      title: '操作',
      render: (text, record, index) => (
        <div>
          <span onClick={() => props.handleDelFirDep(record)}><img src={require('../../assets/images/user/disable_IC.png')} alt='' />禁用</span>
          <span onClick={() => props.handleDetail(record, index)}><img src={require('../../assets/images/user/enable_IC_gray.png')} alt='' />详情</span>
        </div>
      )
    },
  ]
  return (
    <Fragment>
      <header>
        <span className="title">一级部门</span>
        <Button onClick={() => props.addTep('firTep')} icon='plus-circle'>新增</Button>
      </header>
      <RenderTable columns={columns} teps={props.firDeps} handleDetail={props.handleDetail}></RenderTable>
    </Fragment>
  )
}

// 二级部门
function RenderSecTep (props) {
  const columns = [
    {
      title: '序号',
      key: '序号',
      render: (text, record, index) => `${index + 1}`,
    },
    {
      title: '二级部门',
      key: '二级部门',
      dataIndex: 'name'
    },
    {
      title: '部门人数',
      key: '部门人数',
      dataIndex: 'number'
    },
    {
      title: '操作',
      render: (record) => (
        <div>
          <span onClick={() => props.delSecDep(record)}><img src={require('../../assets/images/user/disable_IC.png')} alt='' />禁用</span>
          {/* <span><img src={require('../../assets/images/user/enable_IC_gray.png')} alt='' />启用</span> */}
        </div>
      )
    },
  ]
  return (
    <Fragment>
      <header>
        <span className="title">二级部门</span>
        <Button disabled={props.secDeps ? false : true} onClick={() => props.addTep('secTep')} icon='plus-circle'>新增</Button>
      </header>
      <RenderTable columns={columns} teps={props.secDeps}></RenderTable>
    </Fragment>
  )
}

// 三级部门
function RenderTeps (props) {
  const columns = [
    {
      title: '序号',
      key: '序号',
      render: (text, record, index) => `${index + 1}`,
    },
    {
      title: '部门代码',
      key: '部门代码',
      dataIndex: 'id'
    },
    {
      title: '岗位名称',
      key: '岗位名称',
      dataIndex: 'desc_'
    },
    {
      title: '部门人数',
      key: '部门人数',
      dataIndex: 'TepNum'
    },
    {
      title: '操作',
      render: (record) => (
        <div>
          <span><img onClick={() => props.delRole(record)} src={require('../../assets/images/user/disable_IC.png')} alt='' />禁用</span>
          {/* <span><img src={require('../../assets/images/user/enable_IC_gray.png')} alt='' />启用</span> */}
        </div>
      )
    },
  ]
  return (
    <Fragment>
      <header>
        <span className="title">职能岗位</span>
        <Button onClick={() => props.addTep('teps')} icon='plus-circle'>新增</Button>
      </header>
      <RenderTable columns={columns} teps={props.allRoles}></RenderTable>
    </Fragment>
  )
}

// 渲染部门
function RenderTable (props) {
  return (
    <Table
      size='small'
      // onRow={(record, index) => { return { onClick: () => { props.hanldeRow(record, index) } } }}
      pagination={getPagination(props.teps)}
      columns={props.columns}
      dataSource={props.teps}></Table>
  )
}