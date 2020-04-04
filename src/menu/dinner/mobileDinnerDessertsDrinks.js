import React from 'react'
import { Divider } from 'antd'
import BreadcrumbNav from '../../components/BreadcrumbNav'
import MobileMenuItem from '../../components/MobileMenuItem'
import { DessertsData } from '../data/dessertsData'
import { DrinksData } from '../data/drinksData'

const MobileDinnerDessertsDrinks = () => {
  return (
    <React.Fragment>
      <BreadcrumbNav
        content="Menu"
        meal="Dinner"
        linkto="/menu/dinner"
        dish="Desserts and Drinks"
      />

      <Divider className="menu-display-category">Desserts</Divider>

      {DessertsData.map((item) => {
        return (
          <MobileMenuItem
            key={item.name}
            name={item.name}
            description={item.description}
            price={item.price.dinner}
          />
        )
      })}
      {DrinksData.map((item) => {
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

export default MobileDinnerDessertsDrinks
