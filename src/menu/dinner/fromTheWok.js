import React from 'react'
import { Divider } from 'antd'
import MenuListItem from '../../components/MenuListItem'
import { FromTheWorkData } from '../data/fromTheWokData'

const DinnerFromTheWok = () => {
  return (
    <div className="menu-content">
      <Divider className="menu-display-time">Dinner</Divider>
      <h1 className="menu-display-category">From the Wok</h1>
      <div className="menu-list-content">
        {FromTheWorkData.map((item) => {
          return (
            <MenuListItem
              key={item.name}
              name={item.name}
              description={item.description}
              price={item.price.dinner}
              desktop
              image={item.image}
            />
          )
        })}
      </div>
    </div>
  )
}

export default DinnerFromTheWok
