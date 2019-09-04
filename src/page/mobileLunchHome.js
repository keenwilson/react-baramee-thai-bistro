import React from 'react'
import { Redirect, Route, Link } from 'react-router-dom'
import { Button, Breadcrumb, Icon } from 'antd'
import MobileLunchAppetizers from '../menu/lunch/mobileAppetizers'

const MobileLunchHome = () => {
  return (
    <React.Fragment>
      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item>
          <Link to="/">
            <Icon type="home" />
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span>Menu</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Lunch</Breadcrumb.Item>
      </Breadcrumb>
      <div className="narrative">
        <h1>Lunch Menu</h1>
        <Button block className="menu-button">
          <Link to="/menu/lunch/appetizers" className="menu-meal">
            Appetizers
          </Link>
        </Button>
      </div>
      <div className="lunch-display">
        <Route
          path="/menu/lunch/appetizers"
          component={MobileLunchAppetizers}
        />
        {/* <Route path="/lunch/salads" component={LunchSalads} />
        <Route path="/lunch/noodles" component={LunchNoodles} />
        <Route path="/lunch/fried-rice" component={LunchFriedRice} />
        <Route path="/lunch/sides" component={LunchSides} />
        <Route path="/lunch/desserts" component={LunchDesserts} />
        <Route path="/lunch/drinks" component={LunchDrinks} />
        <Route path="/lunch/appetizers" component={LunchAppetizers} />
        <Route path="/lunch/curries" component={LunchCurries} />
        <Route path="/lunch/from-the-wok" component={LunchFromTheWok} /> */}
      </div>
    </React.Fragment>
  )
}

export default MobileLunchHome
