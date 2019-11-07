import React from 'react';
import './App.less';
import 'antd/dist/antd.css'

import NavLeft from './components/NavLeft/NavLeft'
import ContentHeader from './components/Header'
import { Layout } from 'antd'
const { Header, Content } = Layout

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <div className='NavLeft'>
          <NavLeft history={this.props.history}></NavLeft>
        </div>
        <div className='content_right'>
          <Layout className='content_layout'>
            <Header className='header'>
              <ContentHeader></ContentHeader>
            </Header>
            <Content className='content'>
              {this.props.children}
            </Content>
          </Layout>
        </div>
      </div>
    )
  }
}

export default App
