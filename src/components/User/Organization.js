import React, { Component, Fragment } from 'react'
import { Row, Col, Table, Button } from 'antd'
import '../../assets/style/Organization.less'

export default class Organization extends Component {
  render () {
    return (
      <div className='organization'>
        <Row>
          <Col span={12} className='first_tep'>
            <RenderFirTep></RenderFirTep>
          </Col>
          <Col span={1}></Col>
          <Col span={11} className='sec_tep'>
            <RenderSecTep></RenderSecTep>
          </Col>
        </Row>
        <Row className='teps_box'>
          <Col span={24}>
            <RenderTeps></RenderTeps>
          </Col>
        </Row>
      </div>
    )
  }
}

function RenderFirTep () {
  return (
    <Fragment>
      <header>
        <span className="title">一级部门</span>
        <Button icon='plus-circle'>新增</Button>
      </header>
      <RenderTable></RenderTable>
    </Fragment>
  )
}

function RenderSecTep () {
  return (
    <Fragment>
      <header>
        <span className="title">二级部门</span>
        <Button icon='plus-circle'>新增</Button>
      </header>
      <RenderTable></RenderTable>
    </Fragment>
  )
}

function RenderTeps () {
  return (
    <Fragment>
      <header>
        <span className="title">职能岗位</span>
        <Button icon='plus-circle'>新增</Button>
      </header>
      <RenderTable></RenderTable>
    </Fragment>
  )
}

function RenderTable () {
  return (
    <Table></Table>
  )
}