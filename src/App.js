import React from 'react';
import './App.less';
import 'antd/dist/antd.css'

import NavLeft from './components/NavLeft/NavLeft'
import ContentHeader from './components/Header'
import { Row, Col, Layout } from 'antd'
const { Header, Content } = Layout

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Row>
          <Col span={3} className='NavLeft'>
            <NavLeft history={this.props.history}></NavLeft>
          </Col>
          <Col span={21} className='content_right'>
            <Layout className='content_layout'>
              <Header className='header'>
                <ContentHeader></ContentHeader>
              </Header>
              <Content className='content'>
              {this.props.children}
              </Content>
            </Layout>
          </Col>
        </Row>
      </div>
    )
  }
}

export default App
