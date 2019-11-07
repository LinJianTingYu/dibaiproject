import React from 'react'
import { Form, Input, Select, DatePicker, Button, Table } from 'antd'
import PersonWork from '../../components/Work/PersonWork.js'
import '../../assets/style/Work.less'
const FormItem = Form.Item
const { Option } = Select
const { Search } = Input
// const { MonthPicker, RangePicker, WeekPicker } = DatePicker

class Work extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowPersonWork: false,
      currentWorker: null
    }
  }
  // 筛选部门
  handleChangeTep = (value) => {
    console.log(value)
  }
  // 筛选职位
  handleChangeSta = (value) => {
    console.log(value)
  }
  // 筛选日期
  handleChangeDate = (date, dateString) => {
    console.log(date, dateString)
  }
  clickRow (value) {
    this.setState({
      isShowPersonWork: true,
      currentWorker: value
    })
  }
  render () {
    const data = [
      {
        key: '1',
        name: 'yujian',
        wokerimg: 'sss',
        sex: '男',
        Id: '234',
        firTep: '一分部',
        station: '普通员工',
        attendance: 'ss',
        access: 'ss',
        abnormal: 'ss'
      }
    ]
    const columns = [
      {
        title: '序号',
        render: (text, record, index) => `${index + 1}`
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '员工头像',
        dataIndex: 'wokerimg',
        key: 'wokerimg',
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
      },
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '一级部门',
        dataIndex: 'firTep',
        key: 'firTep',
      },
      {
        title: '所属岗位',
        dataIndex: 'station',
        key: 'station',
      },
      {
        title: '本月出勤',
        dataIndex: 'attendance',
        key: 'attendance',
      },
      {
        title: '本月门禁',
        dataIndex: 'access',
        key: 'access',
      },
      {
        title: '本月异常',
        dataIndex: 'abnormal',
        key: 'abnormal',
      },
      {
        title: '操作',
        render: () => (
          <span>
            <img src={require('../../assets/images/work/details_IC.png')} /> 详情
          </span>
        )
      }
    ]
    return (
      <div className='work'>
        <div className='work_header'>
          <FormView
            handleChangeTep={this.handleChangeTep}
            handleChangeSta={this.handleChangeSta}
            handleChangeDate={this.handleChangeDate}></FormView>
        </div>
        <div className="workers_wrapper">
          <Table
            size='middle'
            dataSource={data}
            columns={columns}
            onRow={(record) => {//表格行点击事件
              return {
                onClick: this.clickRow.bind(this, record)
              }
            }}></Table>
        </div>
        {this.state.isShowPersonWork ? <PersonWork workerInfo={this.state.currentWorker} backHistory={() => this.setState({ isShowPersonWork: false })}></PersonWork> : null}
      </div>
    )
  }
}

function FormView (props) {
  return (
    <Form layout='inline'>
      <FormItem>
        <Search
          placeholder="请输入人员姓名或ID"
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
        />
      </FormItem>
      <FormItem>
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={value => props.handleChangeTep(value)}>
          <Option value="jack">一分部</Option>
          <Option value="lucy">二分部</Option>
          <Option value="Yiminghe">三分部</Option>
        </Select>
      </FormItem>
      <FormItem>
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={value => props.handleChangeSta(value)}>
          <Option value="jack">一般员工</Option>
          <Option value="lucy">总管理员</Option>
          <Option value="Yiminghe">管理员</Option>
        </Select>
      </FormItem>
      <FormItem>
        <DatePicker onChange={(date, dateString) => props.handleChangeDate(date, dateString)} />
      </FormItem>
      <FormItem style={{ float: 'right' }}>
        <Button>一键导出</Button>
      </FormItem>
    </Form>
  )
}

export default Work