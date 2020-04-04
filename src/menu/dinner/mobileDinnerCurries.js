import React from 'react'
import { Divider } from 'antd'
import BreadcrumbNav from '../../components/BreadcrumbNav'
import MobileMenuItem from '../../components/MobileMenuItem'
import { CurriesData } from '../data/curriesData'
const MobileDinnerCurries = () => {
  return (
    <React.Fragment>
      <BreadcrumbNav
        content="Menu"
        meal="Dinner"
        linkto="/menu/dinner"
        dish="Curries"
      />
      <Divider className="menu-display-category">Curries</Divider>
      CurriesData
      {CurriesData.map((item) => {
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

export default MobileDinnerCurries
