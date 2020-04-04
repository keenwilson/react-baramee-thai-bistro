import React from 'react'
import { Divider } from 'antd'
import BreadcrumbNav from '../../components/BreadcrumbNav'
import { CurriesData } from '../data/curriesData'
import MenuListItem from '../../components/MenuListItem'

const MobileLunchCurries = () => {
  return (
    <React.Fragment>
      <BreadcrumbNav
        content="Menu"
        meal="Lunch"
        linkto="/menu/lunch"
        dish="Curries"
      />

      <Divider className="menu-display-category">Curries</Divider>

      {CurriesData.map((item) => {
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

export default MobileLunchCurries
