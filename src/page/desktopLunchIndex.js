import React from 'react'
import { Route } from 'react-router-dom'
import LunchAppetizers from '../menu/lunch/appetizers'
import LunchSalads from '../menu/lunch/salads'
import LunchSides from '../menu/lunch/sides'
import LunchFromTheWok from '../menu/lunch/fromTheWok'
import LunchFriedRice from '../menu/lunch/fried-rice'
import LunchNoodles from '../menu/lunch/noodles'
import LunchSoups from '../menu/lunch/soups'
import LunchCurries from '../menu/lunch/curries'
import LunchDesserts from '../menu/lunch/desserts'
import LunchDrinks from '../menu/lunch/drinks'
import DesktopLunchHome from './desktopLunchHome'
import { Layout } from 'antd'
import DesktopLunchMenuNav from './desktopLunchMenuNav'

const { Sider, Content } = Layout

const DesktopLunchIndex = () => {
  return (
    <React.Fragment>
      <Layout className="top-padding">
        <Sider>
          <DesktopLunchMenuNav />
        </Sider>
        <Content>
          <div className="menu-lunch-navigatio">
            <Route path="/menu/lunch" component={DesktopLunchHome} />
            <Route path="/menu/lunch/appetizers" component={LunchAppetizers} />
            <Route path="/menu/lunch/salads" component={LunchSalads} />
            <Route path="/menu/lunch/sides" component={LunchSides} />
            <Route
              path="/menu/lunch/from-the-wok"
              component={LunchFromTheWok}
            />
            <Route path="/menu/lunch/fried-rice" component={LunchFriedRice} />
            <Route path="/menu/lunch/noodles" component={LunchNoodles} />
            <Route path="/menu/lunch/soups" component={LunchSoups} />
            <Route path="/menu/lunch/curries" component={LunchCurries} />
            <Route path="/menu/lunch/desserts" component={LunchDesserts} />
            <Route path="/menu/lunch/drinks" component={LunchDrinks} />
          </div>
        </Content>
      </Layout>
    </React.Fragment>
  )
}

export default DesktopLunchIndex