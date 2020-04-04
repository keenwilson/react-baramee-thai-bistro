import React from 'react'
import { Divider } from 'antd'
import MenuListItem from '../../components/MenuListItem'
import { AppetizersData } from '../data/appetizersData'

const LunchAppetizers = () => {
  return (
    <div className="menu-content">
      <Divider className="menu-display-time">Lunch</Divider>
      <h1 className="menu-display-category">Appetizers</h1>
      <div className="menu-list-content">
        {AppetizersData.map((item) => {
          return (
            <MenuListItem
              key={item.name}
              name={item.name}
              description={item.description}
              price={item.price.lunch}
              desktop
              image={item.image}
            />
          )
        })}
      </div>
    </div>
  )
}

export default LunchAppetizers
