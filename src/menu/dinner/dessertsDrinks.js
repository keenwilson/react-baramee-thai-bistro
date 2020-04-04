import React from 'react'
import { Divider } from 'antd'
import MenuListItem from '../../components/MenuListItem'
import { DessertsData } from '../data/dessertsData'
import { DrinksData } from '../data/drinksData'

const DinnerDessertsDrinks = () => {
  return (
    <div className="menu-content">
      <Divider className="menu-display-time">Dinner</Divider>
      <h1 className="menu-display-category">Desserts and Drinks</h1>
      <div className="menu-list-content">
        {DessertsData.map((item) => {
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
        {DrinksData.map((item) => {
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

export default DinnerDessertsDrinks
