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
      </div>
    </React.Fragment>
  )
}

export default MobileLunchIndex
