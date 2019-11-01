import React, { Component, Fragment } from 'react'
import { Input, Select, Radio, Form, Table } from 'antd'
import '../../assets/style/UserInfo.less'
const FormItem = Form.Item
const { Search } = Input
const { Option } = Select

export default class UserInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      columns: [
        {
          title: '姓名',
          dataIndex: 'id'
        }, {
          title: '性别',
          dataIndex: 'name'
        }, {
          title: '员工ID',
          dataIndex: 'mode',
          render (mode) {
            return mode === 1 ? '停车点' : '禁停区';
          }
        }, {
          title: '生日',
          dataIndex: 'op_mode',
          render (op_mode) {
            return op_mode == 1 ? '自营' : '加盟';
          }
        }, {
          title: '一级部门',
          dataIndex: 'franchisee_name'
        }, {
          title: '所属岗位',
          dataIndex: 'city_admins',
          render (arr) {
            return arr.map((item) => {
              return item.user_name;
            }).join(',');
          }
        }, {
          title: '操作',
          dataIndex: 'open_time'
        }
      ],
      cities: []
    }
  }
  renderHeader() {
    return (
      <Fragment>
        <Form layout="inline" className='form_box'>
          <FormItem>
            <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
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
          <FormItem>
            <Radio
              size='large'>显示二级部门</Radio></FormItem>
        </Form>
        <div className='btns'>
          <div>
            <img src={require('../../assets/images/user/print_IC.png')} alt=""/>
            <span>打印</span>
          </div>
          <div>
            <img src={require('../../assets/images/user/import_IC.png')} alt=""/>
            <span>一键导入</span>
          </div>
        </div>
      </Fragment>
    )
  }
  render() {
    const rowSelection = {
      // selectedRowKeys,
      // onChange: this.onSelectChange,
    }
    return (
      <div className='user_info'>
        <header>
          {this.renderHeader()}
        </header>
        <section>
          <Table
            // pagination={getPagination(this.state.cities)}
            rowSelection={rowSelection}
            bordered size='small'
            columns={this.state.columns}
            dataSource={this.state.cities} />
        </section>
      </div>
    )
  }
}
