import React from 'react'
import { Divider } from 'antd'
import BreadcrumbNav from '../../components/BreadcrumbNav'
import { DessertsData } from '../data/dessertsData'
import MenuListItem from '../../components/MenuListItem'

const MobileLunchDesserts = () => {
  return (
    <React.Fragment>
      <BreadcrumbNav
        content="Menu"
        meal="Lunch"
        linkto="/menu/lunch"
        dish="Desserts"
      />

      <Divider className="menu-display-category">Desserts</Divider>
      {DessertsData.map((item) => {
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

export default MobileLunchDesserts
