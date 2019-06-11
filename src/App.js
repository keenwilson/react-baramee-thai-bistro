import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Row, Col } from 'antd'
import { Drawer, Icon } from 'antd'
import { Routes } from './routes'
import SelectMenu from './components/SelectMenu'
import LunchDrawer from './components/LunchDrawer'
import DinnerDrawer from './components/DinnerDrawer'
import ContactFooter from './components/ContactFooter'
import './App.less'

const { Header, Footer, Sider, Content } = Layout

class App extends Component {
  state = { dinnerMenuVisible: false, lunchMenuVisible: false }

  showDinnerDrawer = () => {
    this.setState({
      dinnerMenuVisible: true
    })
  }
  onDinnerDrawerClose = () => {
    this.setState({
      dinnerMenuVisible: false
    })
  }

  showLunchDrawer = () => {
    this.setState({
      lunchMenuVisible: true
    })
  }

  onLunchDrawerClose = () => {
    this.setState({
      lunchMenuVisible: false
    })
  }

  render() {
    return (
      <Layout>
        <Content className="content">
          <div className="logo-line">
            <Link to="/">
              <img
                className="logo"
                src="https://scontent-msp1-1.xx.fbcdn.net/v/t1.0-9/50048213_384513248982805_1127726221426163712_n.jpg?_nc_cat=110&_nc_oc=AQmjpCt2elShGMdjkqpjP7qyl-c7GcVD0Cqy4zCJsSbIK8Xo9z37zA1oJjOIoZCnhf0&_nc_ht=scontent-msp1-1.xx&oh=448c992546c8a459830cbf8baf433f6d&oe=5D5407F4"
              />
            </Link>
            <SelectMenu
              showLunchDrawer={this.showLunchDrawer}
              showDinnerDrawer={this.showDinnerDrawer}
            />
          </div>

          <DinnerDrawer
            dinnerMenuVisible={this.state.dinnerMenuVisible}
            handleOnClose={this.onDinnerDrawerClose}
          />
          <LunchDrawer
            lunchMenuVisible={this.state.lunchMenuVisible}
            handleOnClose={this.onLunchDrawerClose}
          />
          <Routes />
        </Content>

        <Footer className="footer">
          <ContactFooter />
          <p className="copyright">
            Copyright © 2019 Baramee Thai Bistro | All rights reserved
          </p>
        </Footer>
      </Layout>
    )
  }
}

export default App
