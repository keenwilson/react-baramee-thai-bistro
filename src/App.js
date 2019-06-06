import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'
import { Drawer, Icon } from 'antd'
import { Routes } from './routes'
import './App.less'
import WelcomeCarousel from './components/WelcomeCarousel'
import GlobalHeader from './components/GlobalHeader'
import LunchDrawer from './components/LunchDrawer'
import ContactFooter from './components/ContactFooter'
import Gallery from './components/Gallery'

const { Header, Footer, Sider, Content } = Layout

class App extends Component {
  state = { visible: false, lunchMenuVisible: false }

  showDrawer = () => {
    this.setState({
      visible: true
    })
  }
  onClose = () => {
    this.setState({
      visible: false
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
        <Header className="header">
          <GlobalHeader />
        </Header>
        <Content className="content">
          <Row gutter={48}>
            <Col span={12}>
              <div className="menu" onClick={this.showLunchDrawer}>
                LUNCH MENU
              </div>
            </Col>
            <Col span={12}>
              <div className="menu" onClick={this.showDrawer}>
                DINNER MENU
              </div>
            </Col>
          </Row>

          <Drawer
            className="menu-drawer"
            title="Menu"
            placement="left"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <p className="menu-type">Appetizers</p>
            <p className="menu-type">House Favorites</p>
            <p className="menu-type">From the Wok</p>
            <p className="menu-type">Noodles</p>
            <p className="menu-type">Soups &amp; Salads</p>
            <p className="menu-type">Curries</p>
            <p className="menu-type">Desserts</p>
            <p className="menu-type">Drinks</p>
          </Drawer>
          <LunchDrawer
            lunchMenuVisible={this.state.lunchMenuVisible}
            handleOnClose={this.onLunchDrawerClose}
          />
          <WelcomeCarousel />
          <Gallery />
        </Content>
        <Footer className="footer">
          <ContactFooter />
        </Footer>
      </Layout>
    )
  }
}

export default App
