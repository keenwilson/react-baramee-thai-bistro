import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
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
import MobileIndex from './page/mobileIndex'

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={ResponsiveHome} />
    </Switch>
  )
}
