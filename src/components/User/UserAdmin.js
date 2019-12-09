import React, { Component } from 'react'
import { Button, Modal, Input, Form, TreeSelect } from 'antd'
const FormItem = Form.Item

export default class UserAdmin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowModal: false
    }
  }
  handleAddAdmin = () => {
    this.setState({
      isShowModal: false
    })
  }
  handlecancelAdmin = () => {
    this.setState({
      isShowModal: false
    })
  }
  showAddModal = () => {
    this.setState({
      isShowModal: true
    })
  }
  render () {
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 }
    }
    const treeData = [
      {
        title: 'Node1',
        value: '0-0',
        key: '0-0',
        children: [
          {
            title: 'Child Node1',
            value: '0-0-0',
            key: '0-0-0',
          },
        ],
      },
      {
        title: 'Node2',
        value: '0-1',
        key: '0-1',
        children: [
          {
            title: 'Child Node3',
            value: '0-1-0',
            key: '0-1-0',
          },
          {
            title: 'Child Node4',
            value: '0-1-1',
            key: '0-1-1',
          },
          {
            title: 'Child Node5',
            value: '0-1-2',
            key: '0-1-2',
          },
        ],
      },
    ]
    return (
      <div className='admin'>
        <div className="admin_header" style={{ overflow: "hidden" }}>
          <Button onClick={this.showAddModal} icon='plus' style={{ float: 'right' }}>新增</Button>
        </div>
        <div className="admin_content">
          <Modal
            title="用户管理 > 用户权限 > 新增"
            visible={this.state.isShowModal}
            onOk={this.handleAddAdmin}
            onCancel={this.handlecancelAdmin}
            cancelText='取消'
            okText='确认'>
            <Form>
              <FormItem {...formItemLayout} label='权限编号'>
                <Input></Input>
              </FormItem>
              <FormItem {...formItemLayout} label='权限名称：'>
                <Input></Input>
              </FormItem>
              <FormItem {...formItemLayout} label='权限范围：'>
                <TreeSelect
                  treeData={treeData} treeCheckable={true}></TreeSelect>
              </FormItem>
            </Form>
          </Modal>
        </div>
      </div>
    )
  }
}
