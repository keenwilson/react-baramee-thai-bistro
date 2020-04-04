import React from 'react'
import { Divider } from 'antd'
import MenuListItem from '../../components/MenuListItem'
import { NoodlesData } from '../data/noodlesData'

const DinnerNoodles = () => {
  return (
    <div className="menu-content">
      <Divider className="menu-display-time">Dinner</Divider>
      <h1 className="menu-display-category">Noodles</h1>
      <div className="menu-list-content">
        {NoodlesData.map((item) => {
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

export default DinnerNoodles
