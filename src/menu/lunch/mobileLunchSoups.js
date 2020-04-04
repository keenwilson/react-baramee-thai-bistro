import React from 'react'
import { Divider } from 'antd'
import BreadcrumbNav from '../../components/BreadcrumbNav'
import MobileMenuItem from '../../components/MobileMenuItem'
import { SoupsData } from '../data/soupsData'

const MobileLunchSoups = () => {
  return (
    <React.Fragment>
      <BreadcrumbNav
        content="Menu"
        meal="Lunch"
        linkto="/menu/lunch"
        dish="Soups"
      />
      <Divider className="menu-display-category">Soups</Divider>
      {SoupsData.map((item) => {
        return (
          <MobileMenuItem
            key={`${item.name}-Lunch`}
            name={item.name}
            description={item.description}
            price={item.price.lunch}
            divider={true}
          />
        )
      })}
    </React.Fragment>
  )
}

export default MobileLunchSoups
