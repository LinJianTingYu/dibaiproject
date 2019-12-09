import React, { Fragment } from 'react'
import { Select, Form, Button, Table } from 'antd'
import '../../assets/style/environment.less'
const { Option } = Select
const FormItem = Form.Item

class Environment extends React.Component {
  render () {
    return (
      <div className='environment'>
        <div className="environment_header">
          <Form layout='inline'>
            <FormItem>
              <Select style={{ width: 150 }}></Select>
            </FormItem>
            <FormItem>
              <Select style={{ width: 150 }} placeholder='--状态选择--'>
                <Option value='1'>正常</Option>
              </Select>
            </FormItem>
            <FormItem style={{ float: "right", margin: 0 }}>
              <Button icon='plus'>新增</Button>
            </FormItem>
          </Form>
        </div>
        <div className="environment_content">
          <TableView></TableView>
        </div>
      </div>
    )
  }
}

function TableView () {
  const columns = [
    {
      title: '序号',
      render: (text, rec, index) => { return `${index} + 1` }
    },
    {
      title: '识别标识',
      dataIndex: 'sign'
    },
    {
      title: '所在位置',
      dataIndex: 'address'
    },
    {
      title: '当前数据',
      dataIndex: 'data'
    },
    {
      title: '上限',
      dataIndex: 'upper'
    },
    {
      title: '下限',
      dataIndex: 'lower'
    },
    {
      title: '状态',
      dataIndex: 'status'
    },
    {
      title: '操作',
      render: () => {
        return (
          <Fragment>
            <span><img src={require('../../assets/images/envir/modify_IC.png')} alt="" />修改</span>
            <span><img src={require('../../assets/images/envir/disable_IC_highlight.png')} alt="" />删除</span>
          </Fragment>
        )
      }
    }
  ]
  const data = []
  return (
    <Table size='small' columns={columns} dataSource={data}></Table>
  )
}

export default Environment