import React from 'react'
import { Table, Form, Select, Button, Modal, Input } from 'antd'
import Search from 'antd/lib/input/Search'
import '../../assets/style/Eat.less'
const { Option } = Select
const FormItem = Form.Item

class Eat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: [],
      columns: [
        {
          key: 1,
          title: '序号',
          render: (text, recoder, index) => `${index + 1}`
        },
        {
          key: 2,
          title: '姓名',
          dataIndex: 'name'
        },
        {
          key: 3,
          title: 'ID',
          dataIndex: 'ID'
        },
        {
          key: 4,
          title: '一级部门',
          dataIndex: '一级部门'
        },
        {
          key: 5,
          title: '二级部门',
          dataIndex: '二级部门'
        },
        {
          key: 6,
          title: '所属岗位',
          dataIndex: '所属岗位'
        },
        {
          key: 7,
          title: '本月充值',
          dataIndex: '本月充值'
        },
        {
          key: 8,
          title: '本月消费',
          dataIndex: '本月消费'
        },
        {
          key: 9,
          title: '本月结余',
          dataIndex: '本月结余'
        },
        {
          key: 10,
          title: '就餐类型',
          dataIndex: '本月消费'
        },
        {
          key: 11,
          title: '操作',
          render: () => {
            return (
              <div>
                <span>充值</span><span>结算</span>
              </div>
            )
          }
        }
      ]
    }
  }
  render () {
    const { data, columns } = this.state
    return (
      <div className='eat'>
        <div className='eat_header'>
          <HeaderView></HeaderView>
        </div>
        <div className="eat_content">
          <Table
            size='middle'
            dataSource={data}
            columns={columns}></Table>
        </div>
      </div>
    )
  }
}

function HeaderView () {
  const formItemLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 }
  }
  return (
    <Form layout='inline'>
      <FormItem {...formItemLayout}>
        <Search size='large' style={{ width: 200 }} placeholder='请输入员工姓名'></Search>
      </FormItem>
      <FormItem {...formItemLayout}>
        <Select size='large' style={{ width: 100 }}>
          <Option value='aa'>一分部</Option>
          <Option value='bb'>二分部</Option>
        </Select>
      </FormItem>
      <FormItem {...formItemLayout} style={{ width: 100 }}>
        <Select size='large' style={{ width: 100 }}>
          <Option value='ss'>总管理员</Option>
          <Option value='sdf'>管理员</Option>
        </Select>
      </FormItem>
      <div className="btns" style={{ float: 'right' }}>
        <FormItem {...formItemLayout} style={{ width: 100 }}>
          <Button size='large'>同意充值</Button>
        </FormItem>
        <FormItem {...formItemLayout} style={{ width: 100 }}>
          <Button size='large'>一键充值</Button>
        </FormItem>
        <FormItem {...formItemLayout} style={{ width: 100 }}>
          <Button size='large'>新增</Button>
        </FormItem>
      </div>
    </Form>
  )
}

// function TableView () {
//   return ()
// }

export default Eat