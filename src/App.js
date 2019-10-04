import React, { Component } from 'react'
import { BackTop } from 'antd'
import { Routes } from './routes'
import './App.less'

class App extends Component {
  render() {
    return (
      <div>
        {' '}
        <BackTop />
        <Routes />
      </div>
    )
  }
}

export default App
