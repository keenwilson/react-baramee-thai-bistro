import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import SelectMenu from '../components/SelectMenu'
import LunchDrawer from '../components/LunchDrawer'
import DinnerDrawer from '../components/DinnerDrawer'
import ContactFooter from '../components/ContactFooter'
import LunchSoups from '../menu/lunch/soups'
import LunchSalads from '../menu/lunch/salads'
import LunchNoodles from '../menu/lunch/noodles'
import LunchFriedRice from '../menu/lunch/fried-rice'
import LunchSides from '../menu/lunch/sides'
import LunchDesserts from '../menu/lunch/desserts'
import LunchDrinks from '../menu/lunch/drinks'
import LunchAppetizers from '../menu/lunch/appetizers'
import LunchCurries from '../menu/lunch/curries'
import LunchFromTheWok from '../menu/lunch/fromTheWok'
import DinnerAppetizers from '../menu/dinner/appetizers'
import DinnerFromTheWok from '../menu/dinner/fromTheWok'
import DinnerNoodles from '../menu/dinner/noodles'
import DinnerSoupsSalads from '../menu/dinner/soupsSalads'
import DinnerCurries from '../menu/dinner/curries'
import DinnerDessertsDrinks from '../menu/dinner/dessertsDrinks'
import DinnerHouseFavorites from '../menu/dinner/houseFavorites'

const { Content, Footer } = Layout

class DesktopHome extends Component {
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
      <div className="desktop">
        <Layout>
          <Content className="content">
            <div className="logo-line">
              <Link to="/">
                <img
                  className="logo"
                  alt="Baramee Thai Bistro"
                  src="https://i.imgur.com/v9ZgS3o.jpg"
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
          </Content>

          <Footer className="footer">
            <ContactFooter />
            <p className="copyright">
              Copyright © 2019 Baramee Thai Bistro | All rights reserved
            </p>
          </Footer>
        </Layout>
      </div>
    )
  }
}

export default DesktopHome
