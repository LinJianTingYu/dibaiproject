import React, { Component } from 'react';
import { Table, Form, Select, Button } from 'antd'
import Search from 'antd/lib/input/Search'
import { getPagination } from '../../basic/config.js'
const { Option } = Select
const FormItem = Form.Item

class WorkDevices extends Component {
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
          title: '佩戴者',
          dataIndex: '佩戴者'
        },
        {
          key: 4,
          title: '联系电话',
          dataIndex: 'phone'
        },
        {
          key: 5,
          title: '激活时间',
          dataIndex: '激活时间'
        },
        {
          key: 6,
          title: '状态',
          dataIndex: 'status'
        }
      ],
      data: []
    }
  }
  render () {
    const { columns, data } = this.state
    return (
      <div className='work_devices'>
        <div className='work_devices_header'>
          <HeaderView></HeaderView>
        </div>
        <div className="work_devices_content">
          <TableView columns={columns} data={data}></TableView>
        </div>
      </div>
    )
  }
}

function HeaderView (props) {
  return (
    <Form layout='inline'>
      <FormItem>
        <Search placeholder='请输入员工姓名' size='large'></Search>
      </FormItem>
      <FormItem>
        <Select size='large' style={{ width: 120 }}>
          <Option value='online'>在线</Option>
          <Option value='offline'>离线</Option>
        </Select>
      </FormItem>
      <FormItem style={{ float: 'right', margin: 0 }}>
        <Button size='large'>一键导出</Button>
      </FormItem>
    </Form>
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

export default WorkDevices;