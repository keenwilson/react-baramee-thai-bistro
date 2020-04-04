import React from 'react'
import { Divider } from 'antd'

const MobileMenuItem = ({ name, description, price, divider }) => {
  console.log(name)
  console.log(price)

  if (price.length > 0) {
    return (
      <div>
        <h2 className="menu-display-name">{name}</h2>
        <p className="menu-display-description">{description}</p>
        <p className="menu-price text-align-center">
          {price.map((item) => (
            <span key={`${name}-price-${item}`}>
              {item}
              <br />
            </span>
          ))}
        </p>
        {divider ? <Divider /> : null}
      </div>
    )
  } else {
    return null
  }
}

export default MobileMenuItem
