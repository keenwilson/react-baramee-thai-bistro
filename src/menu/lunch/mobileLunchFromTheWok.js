import React from 'react'
import { Divider } from 'antd'
import BreadcrumbNav from '../../components/BreadcrumbNav'
import MobileMenuItem from '../../components/MobileMenuItem'
import { FromTheWorkData } from '../data/fromTheWokData'

const MobileLunchFromTheWok = () => {
  return (
    <React.Fragment>
      <BreadcrumbNav
        content="Menu"
        meal="Lunch"
        linkto="/menu/lunch"
        dish="From the Wok"
      />
      <Divider className="menu-display-category">From the Wok</Divider>
      {FromTheWorkData.map((item) => {
        return (
          <MobileMenuItem
            key={`${item.name}-Lunch`}
            name={item.name}
            description={item.description}
            price={item.price.dinner}
          />
        )
      })}
    </React.Fragment>
  )
}

export default MobileLunchFromTheWok
