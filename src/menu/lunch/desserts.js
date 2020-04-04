import React from 'react'
import { Divider } from 'antd'
import MenuListItem from '../../components/MenuListItem'
import { DessertsData } from '../data/dessertsData'

const LunchDesserts = () => {
  return (
    <div className="menu-content">
      <Divider className="menu-display-time">Lunch</Divider>
      <h1 className="menu-display-category">Desserts</h1>
      <div className="menu-list-content">
        {DessertsData.map((item) => {
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

export default LunchDesserts
