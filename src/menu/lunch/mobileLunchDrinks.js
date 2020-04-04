import React from 'react'
import { Divider } from 'antd'
import BreadcrumbNav from '../../components/BreadcrumbNav'
import { DrinksData } from '../data/drinksData'
import MenuListItem from '../../components/MenuListItem'

const MobileLunchDrinks = () => {
  return (
    <React.Fragment>
      <BreadcrumbNav
        content="Menu"
        meal="Lunch"
        linkto="/menu/lunch"
        dish="Drinks"
      />

      <Divider className="menu-display-category">Drinks</Divider>

      {DrinksData.map((item) => {
        return (
          <MenuListItem
            key={item.name}
            name={item.name}
            description={item.description}
            price={item.price.lunch}
          />
        )
      })}
    </React.Fragment>
  )
}

export default MobileLunchDrinks
