import React from 'react'
import { Divider } from 'antd'
import MenuListItem from '../../components/MenuListItem'
import { NoodlesData } from '../data/noodlesData'

const LunchNoodles = () => {
  return (
    <div className="menu-content">
      <Divider className="menu-display-time">Lunch</Divider>
      <h1 className="menu-display-category">Noodles</h1>
      <div className="menu-list-content">
        {NoodlesData.map((item) => {
          return (
            <MenuListItem
              key={item.name}
              name={item.name}
              description={item.description}
              price={item.price.lunch}
              desktop
              image={item.image}
            />
          )
        })}
      </div>
    </div>
  )
}

export default LunchNoodles
