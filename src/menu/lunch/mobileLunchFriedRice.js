import React from 'react'
import { Divider } from 'antd'
import BreadcrumbNav from '../../components/BreadcrumbNav'
import MenuListItem from '../../components/MenuListItem'

import { FriedRiceData } from '../data/friedRiceData'

const MobileLunchFriedRice = () => {
  return (
    <React.Fragment>
      <BreadcrumbNav
        content="Menu"
        meal="Lunch"
        linkto="/menu/lunch"
        dish="Fried Rice"
      />

      <Divider className="menu-display-category">Fried Rice</Divider>

      {FriedRiceData.map((item) => {
        return (
          <MenuListItem
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

export default MobileLunchFriedRice
