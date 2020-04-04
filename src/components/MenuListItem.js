import React from 'react'
import { Divider } from 'antd'
import Thumbnail from './thumbnail'

const MenuListItem = ({
  name,
  description,
  image,
  price,
  divider,
  desktop,
}) => {
  console.log(name)
  console.log(price)

  if (price.length > 0) {
    return (
      <div>
        {desktop && <h1 className="menu-display-name">{name}</h1>}
        {!desktop && <h2 className="menu-display-name">{name}</h2>}
        <p className="menu-display-description">{description}</p>
        {desktop && image && (
          <Thumbnail
            imagePath={image.path}
            imageAlt={name}
            isPortrait={image.isPortrait}
          />
        )}
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

export default MenuListItem
