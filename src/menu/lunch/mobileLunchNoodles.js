import React from 'react'
import { Divider } from 'antd'
import BreadcrumbNav from '../../components/BreadcrumbNav'

import { NoodlesData } from '../data/noodlesData'
import MenuListItem from '../../components/MenuListItem'

const MobileLunchNoodles = () => {
  return (
    <React.Fragment>
      <BreadcrumbNav
        content="Menu"
        meal="Lunch"
        linkto="/menu/lunch"
        dish="Noodles"
      />
      <Divider className="menu-display-category">Noodles</Divider>
      {NoodlesData.map((item) => {
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

export default MobileLunchNoodles
