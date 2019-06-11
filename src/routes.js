import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import LunchSoups from './menu/lunch/soups'
import LunchSalads from './menu/lunch/salads'
import LunchNoodles from './menu/lunch/noodles'
import LunchFriedRice from './menu/lunch/fried-rice'
import LunchSides from './menu/lunch/sides'
import LunchDesserts from './menu/lunch/desserts'
import LunchDrinks from './menu/lunch/drinks'
import Home from './page/home'
import LunchAppetizers from './menu/lunch/appetizers'
import LunchCurries from './menu/lunch/curries'
import LunchFromTheWok from './menu/lunch/fromTheWok'

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/lunch/soups" component={LunchSoups} />
      <Route path="/lunch/salads" component={LunchSalads} />
      <Route path="/lunch/noodles" component={LunchNoodles} />
      <Route path="/lunch/fried-rice" component={LunchFriedRice} />
      <Route path="/lunch/sides" component={LunchSides} />
      <Route path="/lunch/desserts" component={LunchDesserts} />
      <Route path="/lunch/drinks" component={LunchDrinks} />
      <Route path="/lunch/appetizers" component={LunchAppetizers} />
      <Route path="/lunch/curries" component={LunchCurries} />
      <Route path="/lunch/from-the-wok" component={LunchFromTheWok} />
    </Switch>
  )
}
