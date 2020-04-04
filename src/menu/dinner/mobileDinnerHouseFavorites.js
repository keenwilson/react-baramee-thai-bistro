import React from 'react'
import { Divider } from 'antd'
import BreadcrumbNav from '../../components/BreadcrumbNav'
import MobileMenuItem from '../../components/MobileMenuItem'
import { HouseFavoriteData } from '../data/houseFavoritesData'

const MobileDinnerHouseFavorites = () => {
  return (
    <React.Fragment>
      <BreadcrumbNav
        content="Menu"
        meal="Dinner"
        linkto="/menu/dinner"
        dish="House Favorites"
      />

      <Divider className="menu-display-category">House Favorites</Divider>
      {HouseFavoriteData.map((item) => {
        return (
          <MobileMenuItem
            key={item.name}
            name={item.name}
            description={item.description}
            price={item.price.dinner}
          />
        )
      })}
    </React.Fragment>
  )
}

export default MobileDinnerHouseFavorites
