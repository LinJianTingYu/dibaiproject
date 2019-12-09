import React, { Component } from 'react'
import '../assets/style/Loading.less'

function Loading (props) {
  // const title = this.props.title
  return (
    <div className="ajax-loading">
      <div className="overlay"></div>
      <div className="loading">
        <img src={require('../assets/images/loading.gif')} alt=""></img>
        <span>{props.title}中，请稍后...</span>
      </div>
    </div>
  )
}

export default Loading

