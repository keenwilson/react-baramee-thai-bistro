import React from 'react'
import { Redirect, Route, Link } from 'react-router-dom'
import { Button, Breadcrumb, Icon } from 'antd'
import MobileLunchAppetizers from '../menu/lunch/mobileLunchAppetizers'
import MobileLunchHome from './mobileLunchHome'
import MobileLunchSalad from '../menu/lunch/mobileLunchSalad'
import MobileLunchSides from '../menu/lunch/mobileLunchSides'
import MobileLunchFromTheWok from '../menu/lunch/mobileLunchFromTheWok'
import MobileLunchFriedRice from '../menu/lunch/mobileLunchFriedRice'
import MobileLunchNoodles from '../menu/lunch/mobileLunchNoodles'
import MobileLunchSoups from '../menu/lunch/mobileLunchSoups'
import MobileLunchCurries from '../menu/lunch/mobileLunchCurries'
import MobileLunchDesserts from '../menu/lunch/mobileLunchDesserts'
import MobileLunchDrinks from '../menu/lunch/mobileLunchDrinks'

const MobileLunchIndex = () => {
  return (
    <React.Fragment>
      <div className="narrative">
        <Route exact path="/menu/lunch/" component={MobileLunchHome} />
        <Route
          path="/menu/lunch/appetizers"
          component={MobileLunchAppetizers}
        />
        <Route path="/menu/lunch/salads" component={MobileLunchSalad} />
        <Route path="/menu/lunch/sides" component={MobileLunchSides} />
        <Route
          path="/menu/lunch/from-the-wok"
          component={MobileLunchFromTheWok}
        />
        <Route path="/menu/lunch/fried-rice" component={MobileLunchFriedRice} />
        <Route path="/menu/lunch/noodles" component={MobileLunchNoodles} />
        <Route path="/menu/lunch/soups" component={MobileLunchSoups} />
        <Route path="/menu/lunch/curries" component={MobileLunchCurries} />
        <Route path="/menu/lunch/desserts" component={MobileLunchDesserts} />
        <Route path="/menu/lunch/drinks" component={MobileLunchDrinks} />
      </div>
    </React.Fragment>
  )
}

export default MobileLunchIndex
