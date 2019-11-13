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
import DesktopLunchMenuNav from './desktopLunchMenuNav'

const DesktopLunchIndex = () => {
  return (
    <React.Fragment>
      <div className="menu-nav">
        <div className="sider">
          <DesktopLunchMenuNav />
        </div>
        <div className="content">
          <div className="menu-navigation">
            <Route exact path="/menu/lunch" component={LunchAppetizers} />
            <Route path="/menu/lunch/appetizers" component={LunchAppetizers} />
            <Route path="/menu/lunch/salads" component={LunchSalads} />
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
        </div>
      </div>
    </React.Fragment>
  )
}

export default DesktopLunchIndex
