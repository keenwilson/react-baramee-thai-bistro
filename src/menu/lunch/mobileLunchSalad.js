import React from 'react'
import { Divider } from 'antd'
import BreadcrumbNav from '../../components/BreadcrumbNav'
import MobileMenuItem from '../../components/MobileMenuItem'
import { SaladsData } from '../data/saladsData'

const MobileLunchSalad = () => {
  return (
    <React.Fragment>
      <BreadcrumbNav
        content="Menu"
        meal="Lunch"
        linkto="/menu/lunch"
        dish="Salads"
      />
      <Divider className="menu-display-category">Salads</Divider>
      {SaladsData.map((item) => {
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

export default MobileLunchSalad
