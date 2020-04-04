import React from 'react'
import { Divider } from 'antd'
import BreadcrumbNav from '../../components/BreadcrumbNav'
import MobileMenuItem from '../../components/MobileMenuItem'
import { SidesData } from '../data/sidesData'

const MobileLunchSides = () => {
  return (
    <React.Fragment>
      <BreadcrumbNav
        content="Menu"
        meal="Lunch"
        linkto="/menu/lunch"
        dish="Sides"
      />
      <Divider className="menu-display-category">Sides</Divider>
      {SidesData.map((item) => {
        return (
          <MobileMenuItem
            key={`${item.name}-Lunch`}
            name={item.name}
            description={item.description}
            price={item.price.lunch}
          />
        )
      })}
    </React.Fragment>
  )
}

export default MobileLunchSides
