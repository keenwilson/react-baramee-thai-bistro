import React from 'react'
import { Divider } from 'antd'
import BreadcrumbNav from '../../components/BreadcrumbNav'
import { NoodlesData } from '../data/noodlesData'
import MenuListItem from '../../components/MenuListItem'

const MobileDinnerNoodles = () => {
  return (
    <React.Fragment>
      <BreadcrumbNav
        content="Menu"
        meal="Dinner"
        linkto="/menu/dinner"
        dish="Noodles"
      />

      <Divider className="menu-display-category">Noodles</Divider>
      {NoodlesData.map((item) => {
        return (
          <MenuListItem
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

export default MobileDinnerNoodles
