import React from 'react'
import { Divider } from 'antd'
import BreadcrumbNav from '../../components/BreadcrumbNav'
import MobileMenuItem from '../../components/MobileMenuItem'
import { FromTheWorkData } from '../data/fromTheWokData'

const MobileDinnerFromTheWok = () => {
  return (
    <React.Fragment>
      <BreadcrumbNav
        content="Menu"
        meal="Dinner"
        linkto="/menu/dinner"
        dish="From the Wok"
      />
      <Divider className="menu-display-category">From the Wok</Divider>
      {FromTheWorkData.map((item) => {
        return (
          <MobileMenuItem
            key={`${item.name}-Dinner`}
            name={item.name}
            description={item.description}
            price={item.price.dinner}
          />
        )
      })}
    </React.Fragment>
  )
}

export default MobileDinnerFromTheWok
