import React from 'react'
import { Divider } from 'antd'
import BreadcrumbNav from '../../components/BreadcrumbNav'
import MobileMenuItem from '../../components/MobileMenuItem'
import { SoupsData } from '../data/soupsData'
import { SaladsData } from '../data/saladsData'

const MobileDinnerSoupsSalads = () => {
  return (
    <React.Fragment>
      <BreadcrumbNav
        content="Menu"
        meal="Dinner"
        linkto="/menu/dinner"
        dish="Soups and Salads"
      />
      <Divider className="menu-display-category">Soups and Salads</Divider>
      {SoupsData.map((item) => {
        return (
          <MobileMenuItem
            key={item.name}
            name={item.name}
            description={item.description}
            price={item.price.dinner}
            divider={true}
          />
        )
      })}
      {SaladsData.map((item) => {
        return (
          <MobileMenuItem
            key={item.name}
            name={item.name}
            description={item.description}
            price={item.price.dinner}
            divider={true}
          />
        )
      })}
    </React.Fragment>
  )
}

export default MobileDinnerSoupsSalads
