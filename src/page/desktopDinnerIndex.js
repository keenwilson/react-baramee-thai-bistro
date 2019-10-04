import React from 'react'
import { Route } from 'react-router-dom'
import DinnerAppetizers from '../menu/dinner/appetizers'
import DinnerSoupsSalads from '../menu/dinner/soupsSalads'
import DinnerHouseFavorites from '../menu/dinner/houseFavorites'
import DinnerFromTheWok from '../menu/dinner/fromTheWok'
import DinnerCurries from '../menu/dinner/curries'
import DinnerDessertsDrinks from '../menu/dinner/dessertsDrinks'
import DesktopDinnerHome from './desktopDinnerHome'

const DesktopDinnerIndex = () => {
  return (
    <React.Fragment>
      <div className="narrative">
        <Route exact path="/menu/dinner/" component={DesktopDinnerHome} />
        <Route path="/menu/dinner/appetizers" component={DinnerAppetizers} />
        <Route path="/menu/dinner/soups-salads" component={DinnerSoupsSalads} />
        <Route
          path="/menu/dinner/house-favorites"
          component={DinnerHouseFavorites}
        />
        <Route path="/menu/dinner/from-the-wok" component={DinnerFromTheWok} />
        <Route path="/menu/dinner/curries" component={DinnerCurries} />
        <Route
          path="/menu/dinner/desserts-drinks"
          component={DinnerDessertsDrinks}
        />
      </div>
    </React.Fragment>
  )
}

export default DesktopDinnerIndex
