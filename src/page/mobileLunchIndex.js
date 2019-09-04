import React from 'react'
import { Redirect, Route, Link } from 'react-router-dom'
import { Button, Breadcrumb, Icon } from 'antd'
import MobileLunchAppetizers from '../menu/lunch/mobileAppetizers'
import MobileLunchHome from './mobileLunchHome'

const MobileLunchIndex = () => {
  return (
    <React.Fragment>
      <div className="narrative">
        <Route exact path="/menu/lunch/" component={MobileLunchHome} />
        <Route
          path="/menu/lunch/appetizers"
          component={MobileLunchAppetizers}
        />
      </div>
    </React.Fragment>
  )
}

export default MobileLunchIndex
