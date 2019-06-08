import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'
import { Drawer, Icon } from 'antd'
import { Link } from 'react-router-dom'
import { Routes } from './routes'
import './App.less'
import WelcomeCarousel from './components/WelcomeCarousel'
import GlobalHeader from './components/GlobalHeader'
import LunchDrawer from './components/LunchDrawer'
import ContactFooter from './components/ContactFooter'
import Gallery from './components/Gallery'
import InThePress from './components/InThePress'
import DinnerDrawer from './components/DinnerDrawer'

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
          <div
            className="logo-line"
            style={{ background: '#FFF', padding: '30px' }}
          >
            <img
              className="logo"
              src="https://scontent-msp1-1.xx.fbcdn.net/v/t1.0-9/50048213_384513248982805_1127726221426163712_n.jpg?_nc_cat=110&_nc_oc=AQmjpCt2elShGMdjkqpjP7qyl-c7GcVD0Cqy4zCJsSbIK8Xo9z37zA1oJjOIoZCnhf0&_nc_ht=scontent-msp1-1.xx&oh=448c992546c8a459830cbf8baf433f6d&oe=5D5407F4"
            />
            <Row type="flex" justify="space-around">
              <Col span={12}>
                <div className="menu" onClick={this.showLunchDrawer}>
                  LUNCH MENU
                </div>
              </Col>
              <Col span={12}>
                <div className="menu" onClick={this.showDinnerDrawer}>
                  DINNER MENU
                </div>
              </Col>
            </Row>
          </div>

          <DinnerDrawer
            dinnerMenuVisible={this.state.dinnerMenuVisible}
            handleOnClose={this.onDinnerDrawerClose}
          />
          <LunchDrawer
            lunchMenuVisible={this.state.lunchMenuVisible}
            handleOnClose={this.onLunchDrawerClose}
          />
          <WelcomeCarousel />
          <InThePress />
        </Content>
        <Footer className="footer">
          <ContactFooter />
        </Footer>
      </Layout>
    )
  }
}

export default App
