import React from 'react'
import { Breadcrumb, Icon, Divider } from 'antd'
import { Link } from 'react-router-dom'

const MobileDinnerHouseFavorites = () => {
  return (
    <React.Fragment>
      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item>
          <Link to="/">
            <Icon type="home" />
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span>Menu</span>
        </Breadcrumb.Item>
        <Link to="/menu/dinner">
          <Breadcrumb.Item>
            <span>Dinner</span>
          </Breadcrumb.Item>
        </Link>
        <Breadcrumb.Item>House Favorites</Breadcrumb.Item>
      </Breadcrumb>
      <Divider className="menu-display-category">House Favorites</Divider>
      <h2 className="menu-display-name">Pad Ka Prao (House Favorites)</h2>
      <p className="menu-display-description">
        Stir-fried meat with sweet basil leaves, fresh chili and garlic. Served
        over rice with a pan fried egg.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork, or Tofu $11.95 <br /> Beef or Shrimp $14.95
        <br /> Seafood $18.95
      </p>
      <br />
      <h2 className="menu-display-name">Labb Isaan</h2>
      <p className="menu-display-description">
        Traditional north eastern dish of finely chopped chicken, pork or beef
        mixed together with ground roasted rice, coriander and chili.
      </p>

      <br />
      <h2 className="menu-display-name">Papaya Salad</h2>
      <p className="menu-display-description">
        Freshly shredded papaya complemented by tomatoes, garlic, chilies and
        roasted peanuts. Made in a tangy fish sauce or vegetarian sweet sauce.
        Served with sticky rice.
      </p>
      <p className="menu-price text-align-center">$10.95</p>
      <br />
      <h2 className="menu-display-name">Pad Thai</h2>
      <p className="menu-display-description">
        Famous rice noodle dish stir-fried with meat or tofu, egg, bean sprouts,
        spring onion and cabbages with added tamarind sauce for a tangy after
        taste. Served with ground peanuts.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork, or Tofu $11.95 <br /> Beef or Shrimp $14.95
        <br /> Seafood $18.95
      </p>
      <br />
      <h2 className="menu-display-name">Panang Curry</h2>
      <p className="menu-display-description">
        Our most popular curry. Our delicious coconut milk and peanut panang
        sauce garnished with kaffir lime leaves.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork, or Tofu $11.95 <br /> Beef or Shrimp $14.95
        <br /> Seafood $18.95
      </p>
      <br />
    </React.Fragment>
  )
}

export default MobileDinnerHouseFavorites
