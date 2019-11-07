import React, { Component, Fragment } from 'react'
import { Input, Select, Radio, Form, Table } from 'antd'
import '../../assets/style/UserInfo.less'
import { getPagination } from '../../basic/config.js'
const FormItem = Form.Item
const { Search } = Input
const { Option } = Select

export default class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: [
        {
          title: '序号',
          render: (text, record, index) => `${index + 1}`,
        },
        {
          title: '姓名',
          dataIndex: 'name'
        }, {
          title: '性别',
          dataIndex: 'sex'
        }, {
          title: '员工ID',
          dataIndex: 'ID',
          // render (mode) {
          //   return mode === 1 ? '停车点' : '禁停区';
          // }
        }, {
          title: '生日',
          dataIndex: 'birth',
          // render (op_mode) {
          //   return op_mode == 1 ? '自营' : '加盟';
          // }
        }, {
          title: '一级部门',
          dataIndex: 'firstDepartment'
        }, {
          title: '所属岗位',
          dataIndex: 'station',
          // render (arr) {
          //   return arr.map((item) => {
          //     return item.user_name;
          //   }).join(',');
          // }
        }, {
          title: '操作',
          dataIndex: 'operation'
        }
      ],
      cities: [
        {
          key: '1',
          name: 'John Brown',
          ID: 12,
          sex: '男',
          birth: '2018-08-09',
          firstDepartment: 'ss',
          station: '行政部'
        },
        {
          key: '2',
          name: 'John Brown',
          ID: 12,
          sex: '男',
          birth: '2018-08-09',
          firstDepartment: 'ss',
          station: '行政部'
        },
        {
          key: '3',
          name: 'John Brown',
          ID: 12,
          sex: '男',
          birth: '2018-08-09',
          firstDepartment: 'ss',
          station: '行政部'
        },
        {
          key: '4',
          name: 'John Brown',
          ID: 12,
          sex: '男',
          birth: '2018-08-09',
          firstDepartment: 'ss',
          station: '行政部'
        },
        {
          key: '5',
          name: 'John Brown',
          ID: 12,
          sex: '男',
          birth: '2018-08-09',
          firstDepartment: 'ss',
          station: '行政部'
        },
        {
          key: '6',
          name: 'John Brown',
          ID: 12,
          sex: '男',
          birth: '2018-08-09',
          firstDepartment: 'ss',
          station: '行政部'
        },
        {
          key: '7',
          name: 'John Brown',
          ID: 12,
          sex: '男',
          birth: '2018-08-09',
          firstDepartment: 'ss',
          station: '行政部'
        },
        {
          key: '1',
          name: 'John Brown',
          ID: 12,
          sex: '男',
          birth: '2018-08-09',
          firstDepartment: 'ss',
          station: '行政部'
        }
      ]
    }
  }
  renderHeader () {
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
            <img src={require('../../assets/images/user/print_IC.png')} alt="" />
            <span>打印</span>
          </div>
          <div>
            <img src={require('../../assets/images/user/import_IC.png')} alt="" />
            <span>一键导入</span>
          </div>
        </div>
      </Fragment>
    )
  }
  renderFooter () {
    return (
      <Fragment>
        <div className='total_user'>
          <span className="title">总人数</span>
          <span className="num">999</span>
        </div>
        <div className='manage_user'>
          <span className="title">管理人员</span>
          <span className="num">99</span>
        </div>
        <div className='employee_user'>
          <span className="title">普通员工</span>
          <span className="num">900</span>
        </div>
      </Fragment>
    )
  }
  render () {
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
            pagination={getPagination(this.state.cities)}
            size='mini'
            rowSelection={rowSelection}
            size='small'
            columns={this.state.columns}
            dataSource={this.state.cities} />
        </section>
        <footer className='user_total'>
          {this.renderFooter()}
        </footer>
      </div>
    )
  }
}
