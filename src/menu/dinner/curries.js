import React from 'react'
import { Divider } from 'antd'
import MenuListItem from '../../components/MenuListItem'
import { CurriesData } from '../data/curriesData'

const DinnerCurries = () => {
  return (
    <div className="menu-content">
      <Divider className="menu-display-time">Dinner</Divider>
      <h1 className="menu-display-category">Curries</h1>
      <div className="menu-list-content">
        {CurriesData.map((item) => {
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

export default DinnerCurries
