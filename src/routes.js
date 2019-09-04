import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LunchSoups from './menu/lunch/soups'
import LunchSalads from './menu/lunch/salads'
import LunchNoodles from './menu/lunch/noodles'
import LunchFriedRice from './menu/lunch/fried-rice'
import LunchSides from './menu/lunch/sides'
import LunchDesserts from './menu/lunch/desserts'
import LunchDrinks from './menu/lunch/drinks'
import LunchAppetizers from './menu/lunch/appetizers'
import LunchCurries from './menu/lunch/curries'
import LunchFromTheWok from './menu/lunch/fromTheWok'
import DinnerAppetizers from './menu/dinner/appetizers'
import DinnerFromTheWok from './menu/dinner/fromTheWok'
import DinnerNoodles from './menu/dinner/noodles'
import DinnerSoupsSalads from './menu/dinner/soupsSalads'
import DinnerCurries from './menu/dinner/curries'
import DinnerDessertsDrinks from './menu/dinner/dessertsDrinks'
import DinnerHouseFavorites from './menu/dinner/houseFavorites'
import ResponsiveHome from './page/responsiveHome'

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={ResponsiveHome} />
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
      <Route path="/dinner/appetizers" component={DinnerAppetizers} />
      <Route path="/dinner/house-favorites" component={DinnerHouseFavorites} />
      <Route path="/dinner/from-the-wok" component={DinnerFromTheWok} />
      <Route path="/dinner/noodles" component={DinnerNoodles} />
      <Route path="/dinner/soups-salads" component={DinnerSoupsSalads} />
      <Route path="/dinner/curries" component={DinnerCurries} />
      <Route path="/dinner/desserts-drinks" component={DinnerDessertsDrinks} />
    </Switch>
  )
}
