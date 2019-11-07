import React, { Component, Fragment } from 'react'
import { Row, Col, Table, Modal, Button, Input, Form } from 'antd'
import '../../assets/style/Organization.less'
import { getPagination } from '../../basic/config.js'
const FormItem = Form.Item

export default class Organization extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firModal: false,
      secModal: false,
      tepsModal: false
    }
  }
  hideModal = (type) => {
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
  addStep = (type) => {
    this.hideModal(type)
  }
  // 取消新增部门
  cancelStep = (type) => {
    this.hideModal(type)
  }
  render () {
    return (
      <div className='organization'>
        <Row>
          <Col span={12} className='first_tep'>
            <RenderFirTep addTep={this.showAddTep}></RenderFirTep>
          </Col>
          <Col span={1}></Col>
          <Col span={11} className='sec_tep'>
            <RenderSecTep addTep={this.showAddTep}></RenderSecTep>
          </Col>
        </Row>
        <Row className='teps_box'>
          <Col span={24}>
            <RenderTeps addTep={this.showAddTep}></RenderTeps>
          </Col>
        </Row>
        <div className="modal_wrapper">
          <RenderModal
            addStep={this.addStep}
            cancelStep={this.cancelStep}
            firModal={this.state.firModal}
            secModal={this.state.secModal}
            tepsModal={this.state.tepsModal}></RenderModal>
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
            label='部门名称'
            {...formItemLayout}>
            <Input></Input>
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
            <Input></Input>
          </FormItem>
          <FormItem label='二级部门名称:' {...formItemLayout}>
            <Input></Input>
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
            <Input></Input>
          </FormItem>
          <FormItem label='岗位名称:' {...formItemLayout}>
            <Input></Input>
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
      render: (text, record, index) => `${index + 1}`,
    },
    {
      title: '一级部门',
      key: '一级部门',
      dataIndex: 'FirTep'
    },
    {
      title: '部门人数',
      key: '部门人数',
      dataIndex: 'TepNum'
    },
    {
      title: '操作',
      render: () => (
        <div>
          <span><img src={require('../../assets/images/user/disable_IC.png')} alt='' />禁用</span>
          <span><img src={require('../../assets/images/user/enable_IC_gray.png')} alt='' />启用</span>
        </div>
      )
    },
  ]
  const teps = [
    {
      key: '1',
      FirTep: '一分部',
      TepNum: 120
    },
    {
      key: '2',
      FirTep: '二分部',
      TepNum: 120
    },
    {
      key: '3',
      FirTep: '三分部',
      TepNum: 120
    },
    {
      key: '4',
      FirTep: '二分部',
      TepNum: 120
    },
    {
      key: '5',
      FirTep: '三分部',
      TepNum: 120
    }
  ]
  return (
    <Fragment>
      <header>
        <span className="title">一级部门</span>
        <Button onClick={() => props.addTep('firTep')} icon='plus-circle'>新增</Button>
      </header>
      <RenderTable columns={columns} teps={teps}></RenderTable>
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
      title: '一级部门',
      key: '一级部门',
      dataIndex: 'FirTep'
    },
    {
      title: '部门人数',
      key: '部门人数',
      dataIndex: 'TepNum'
    },
    {
      title: '操作',
      render: () => (
        <div>
          <span><img src={require('../../assets/images/user/disable_IC.png')} alt='' />禁用</span>
          <span><img src={require('../../assets/images/user/enable_IC_gray.png')} alt='' />启用</span>
        </div>
      )
    },
  ]
  const teps = [
    {
      key: '1',
      FirTep: '一分部',
      TepNum: 120
    },
    {
      key: '2',
      FirTep: '二分部',
      TepNum: 120
    },
    {
      key: '3',
      FirTep: '三分部',
      TepNum: 120
    },
    {
      key: '4',
      FirTep: '二分部',
      TepNum: 120
    },
    {
      key: '5',
      FirTep: '三分部',
      TepNum: 120
    }
  ]
  return (
    <Fragment>
      <header>
        <span className="title">二级部门</span>
        <Button onClick={() => props.addTep('secTep')} icon='plus-circle'>新增</Button>
      </header>
      <RenderTable columns={columns} teps={teps}></RenderTable>
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
      dataIndex: 'Firname'
    },
    {
      title: '岗位名称',
      key: '岗位名称',
      dataIndex: 'FirTep'
    },
    {
      title: '部门人数',
      key: '部门人数',
      dataIndex: 'TepNum'
    },
    {
      title: '操作',
      render: () => (
        <div>
          <span><img src={require('../../assets/images/user/disable_IC.png')} alt='' />禁用</span>
          <span><img src={require('../../assets/images/user/enable_IC_gray.png')} alt='' />启用</span>
        </div>
      )
    },
  ]
  const teps = [
    {
      key: '1',
      FirTep: '一分部',
      Firname: 'sss344',
      TepNum: 120
    },
    {
      key: '2',
      FirTep: '二分部',
      Firname: 'sss344',
      TepNum: 120
    },
    {
      key: '3',
      FirTep: '三分部',
      Firname: 'sss344',
      TepNum: 120
    },
    {
      key: '4',
      FirTep: '二分部',
      Firname: 'sss344',
      TepNum: 120
    },
    {
      key: '5',
      Firname: 'sss344',
      FirTep: '三分部',
      TepNum: 120
    }
  ]
  return (
    <Fragment>
      <header>
        <span className="title">职能岗位</span>
        <Button onClick={() => props.addTep('teps')} icon='plus-circle'>新增</Button>
      </header>
      <RenderTable columns={columns} teps={teps}></RenderTable>
    </Fragment>
  )
}

// 渲染部门
function RenderTable (props) {
  return (
    <Table
      size='small'
      pagination={getPagination(props.teps, 5)}
      columns={props.columns}
      dataSource={props.teps}></Table>
  )
}