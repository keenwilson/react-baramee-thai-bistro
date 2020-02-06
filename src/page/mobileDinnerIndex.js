import React from 'react'
import { Route } from 'react-router-dom'
import MobileDinnerHome from './mobileDinnerHome'
import MobileDinnerAppetizers from '../menu/dinner/mobileDinnerAppetizers'
import MobileDinnerSoupsSalads from '../menu/dinner/mobileDinnerSoupsSalads'
import MobileDinnerHouseFavorites from '../menu/dinner/mobileDinnerHouseFavorites'
import MobileDinnerFromTheWok from '../menu/dinner/mobileDinnerFromTheWok'
import MobileDinnerCurries from '../menu/dinner/mobileDinnerCurries'
import MobileDinnerDessertsDrinks from '../menu/dinner/mobileDinnerDessertsDrinks'
import MobileDinnerNoodles from '../menu/dinner/mobileDinnerNoodels'

const MobileDinnerIndex = () => {
  return (
    <React.Fragment>
      <div className="narrative">
        <Route exact path="/menu/dinner/" component={MobileDinnerHome} />
        <Route
          path="/menu/dinner/appetizers"
          component={MobileDinnerAppetizers}
        />
        <Route
          path="/menu/dinner/soups-salads"
          component={MobileDinnerSoupsSalads}
        />
        <Route
          path="/menu/dinner/house-favorites"
          component={MobileDinnerHouseFavorites}
        />
        <Route
          path="/menu/dinner/from-the-wok"
          component={MobileDinnerFromTheWok}
        />
        <Route path="/menu/dinner/noodles" component={MobileDinnerNoodles} />
        <Route path="/menu/dinner/curries" component={MobileDinnerCurries} />
        <Route
          path="/menu/dinner/desserts-drinks"
          component={MobileDinnerDessertsDrinks}
        />
      </div>
    </React.Fragment>
  )
}

export default MobileDinnerIndex
