import React from 'react'
import { Divider } from 'antd'
import MenuListItem from '../../components/MenuListItem'
import { HouseFavoriteData } from '../data/houseFavoritesData'

const DinnerHouseFavorites = () => {
  return (
    <div className="menu-content">
      <Divider className="menu-display-time">Dinner</Divider>
      <h1 className="menu-display-category">House Favorites</h1>
      <div className="menu-list-content">
        {HouseFavoriteData.map((item) => {
          return (
            <MenuListItem
              key={item.name}
              name={item.name}
              description={item.description}
              price={item.price.dinner}
              desktop
              image={item.image}
            />
          )
        })}
      </div>
    </div>
  )
}

export default DinnerHouseFavorites
