import React from 'react'
import { Route } from 'react-router-dom'
import DinnerAppetizers from '../menu/dinner/appetizers'
import DinnerSoupsSalads from '../menu/dinner/soupsSalads'
import DinnerHouseFavorites from '../menu/dinner/houseFavorites'
import DinnerFromTheWok from '../menu/dinner/fromTheWok'
import DinnerCurries from '../menu/dinner/curries'
import DinnerDessertsDrinks from '../menu/dinner/dessertsDrinks'
import DesktopDinnerHome from './desktopDinnerHome'
import DesktopDinnerMenuNav from './desktopDinnerMenuNav'
import DinnerNoodles from '../menu/dinner/noodles'

const DesktopDinnerIndex = () => {
  return (
    <React.Fragment>
      <div className="menu-nav">
        <div className="sider">
          <DesktopDinnerMenuNav />
        </div>
        <div className="content">
          <div className="menu-navigation">
            <Route exact path="/menu/dinner/" component={DinnerAppetizers} />
            <Route
              path="/menu/dinner/appetizers"
              component={DinnerAppetizers}
            />
            <Route
              path="/menu/dinner/soups-salads"
              component={DinnerSoupsSalads}
            />
            <Route
              path="/menu/dinner/house-favorites"
              component={DinnerHouseFavorites}
            />
            <Route
              path="/menu/dinner/from-the-wok"
              component={DinnerFromTheWok}
            />
            <Route path="/menu/dinner/noodles" component={DinnerNoodles} />
            <Route path="/menu/dinner/curries" component={DinnerCurries} />
            <Route
              path="/menu/dinner/desserts-drinks"
              component={DinnerDessertsDrinks}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default DesktopDinnerIndex
