import React from 'react'
import { Breadcrumb, Icon, Divider } from 'antd'
import { Link } from 'react-router-dom'
import Thumbnail from '../../components/thumbnail'

const MobileLunchSalad = () => {
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
        <Link to="/menu/lunch">
          <Breadcrumb.Item>
            <span>Lunch</span>
          </Breadcrumb.Item>
        </Link>
        <Breadcrumb.Item>Salads</Breadcrumb.Item>
      </Breadcrumb>
      <Divider className="menu-display-category">Salads</Divider>
      <h2 className="menu-display-name">Papaya Salad</h2>
      <p className="menu-display-description">
        Freshly shredded papaya complemented by tomatoes, garlic, chilies and
        roasted peanuts. Made in a tangy fish sauce or vegetarian sweet sauce.
        Served with sticky rice.
      </p>
      <p className="menu-price text-align-center">$12.99</p>
      <br />
      <h2 className="menu-display-name">Cucumber Salad</h2>
      <p className="menu-display-description">
        Freshly Shredded cucumber complemented by tomatos, garlic, chillies and
        roasted peanuts. Made in a tangy fish sauce or vegetarian sweet sauce.
        Served with sticky rice.
      </p>
      <p className="menu-price text-align-center">$12.99</p>
      <br />
      <h2 className="menu-display-name">Labb Salad</h2>
      <p className="menu-display-description">
        Traditional north eastern dish of finely chopped chicken, pork or beef
        mixed together with ground roasted rice, coriander and chili.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork, or Tofu $10.99 <br /> Beef or Shrimp $15.99
        <br /> Seafood $19.99
      </p>
      <br />
    </React.Fragment>
  )
}

export default MobileLunchSalad
