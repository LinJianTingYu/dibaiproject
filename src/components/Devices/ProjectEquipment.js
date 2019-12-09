import React, { Component, Fragment } from 'react';
import { Table, Form, Select, Button, Modal, Input } from 'antd'
import Search from 'antd/lib/input/Search'
import Avatar from '../uploadimg'
import { getPagination } from '../../basic/config.js'
const { Option } = Select
const FormItem = Form.Item

class ProjectEquipment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: [
        {
          key: 1,
          title: '序号',
          render: (text, record, index) => index + 1
        },
        {
          key: 2,
          title: '设备ID',
          dataIndex: 'id'
        },
        {
          key: 3,
          title: '设备类型',
          dataIndex: '设备类型'
        },
        {
          key: 4,
          title: '所在位置',
          dataIndex: 'address'
        },
        {
          key: 5,
          title: '所属部门',
          dataIndex: '所属部门'
        },
        {
          key: 6,
          title: '负责人',
          dataIndex: '负责人'
        },
        {
          key: 7,
          title: '联系电话',
          dataIndex: '联系电话'
        },
        {
          key: 8,
          title: '状态',
          dataIndex: 'status'
        }
      ],
      data: [],
      isShowAddModal: false
    }
  }
  showAddDevices = () => {
    this.setState({
      isShowAddModal: true
    })
  }
  addDevices = () => {
    this.setState({
      isShowAddModal: false
    })
  }
  cancelDevices = () => {
    this.setState({
      isShowAddModal: false
    })
  }
  render () {
    const { columns, data, isShowAddModal } = this.state
    return (
      <div className='project_devices'>
        <div className='project_devices_header'>
          <HeaderView showAddDevices={this.showAddDevices}></HeaderView>
        </div>
        <div className="project_devices_content">
          <TableView columns={columns} data={data}></TableView>
        </div>
        <Modal
          title='设备管理 > 工程仪器 > 新增'
          okText='确认'
          cancelText='取消'
          visible={isShowAddModal}
          onOk={this.addDevices}
          onCancel={this.cancelDevices}>
          <ModalForm></ModalForm>
        </Modal>
      </div>
    )
  }
}

function HeaderView (props) {
  return (
    <Form layout='inline'>
      <FormItem>
        <Search placeholder='请输入设备ID名字' size='large'></Search>
      </FormItem>
      <FormItem>
        <Select size='large' style={{ width: 120 }}>
          <Option value='online'>正常</Option>
          <Option value='offline'>异常</Option>
        </Select>
      </FormItem>
      <FormItem>
        <Select size='large' style={{ width: 120 }}>
          <Option value='online'>温度传感器</Option>
          <Option value='offline'>湿度传感器</Option>
        </Select>
      </FormItem>
      <FormItem style={{ float: 'right', margin: 0 }}>
        <Button size='large' icon='plus' onClick={props.showAddDevices}>新增</Button>
      </FormItem>
      <FormItem style={{ float: 'right' }}>
        <Button size='large'>一键导出</Button>
      </FormItem>
    </Form>
  )
}

function ModalForm (props) {
  const formItemLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 }
  }
  return (
    <Fragment>
      <Form>
        <FormItem style={{ margin: 0 }} label='设备id：' {...formItemLayout}>
          <Input></Input>
        </FormItem>
        <FormItem style={{ margin: 0 }} label='设备类型：' {...formItemLayout}>
          <Select></Select>
        </FormItem>
        <FormItem style={{ margin: 0 }} label='所属部门：' {...formItemLayout}>
          <Input></Input>
        </FormItem>
        <FormItem style={{ margin: 0 }} label='负责人：' {...formItemLayout}>
          <Select></Select>
        </FormItem>
        <FormItem style={{ margin: 0 }} label='所在位置' {...formItemLayout}>
          <Input></Input>
        </FormItem>
      </Form>
      <Avatar />
    </Fragment>
  )
}

function TableView (props) {
  let rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    }
  }
  return (
    <Table
      rowSelection={rowSelection}
      size='middle'
      columns={props.columns}
      dataSource={props.data} style={{ marginTop: 7 }}></Table>
  )
}


export default ProjectEquipment
