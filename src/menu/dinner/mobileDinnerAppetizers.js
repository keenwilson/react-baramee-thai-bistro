import React from 'react'
import { Divider } from 'antd'
import BreadcrumbNav from '../../components/BreadcrumbNav'
import MobileMenuItem from '../../components/MobileMenuItem'
import { AppetizersData } from '../data/appetizersData'

const MobileDinnerAppetizers = () => {
  return (
    <React.Fragment>
      <BreadcrumbNav
        content="Menu"
        meal="Dinner"
        linkto="/menu/dinner"
        dish="Appetizers"
      />
      <Divider className="menu-display-category">Appetizers</Divider>
      {AppetizersData.map((item) => {
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

export default MobileDinnerAppetizers
